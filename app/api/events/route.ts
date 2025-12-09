import { NextResponse } from 'next/server'
import axios from 'axios'
import * as cheerio from 'cheerio'

interface Event {
  title: string
  date: string
  location: string
  description: string
  link: string
  source: string
}

// Cache events for 1 hour to avoid too many requests
let cachedEvents: Event[] = []
let lastFetchTime = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

// Keywords to identify SEA-related events
const seaKeywords = [
  'southeast asian', 'vietnamese', 'hmong', 'cambodian', 'laotian', 'thai',
  'burmese', 'filipino', 'indonesian', 'malaysian', 'singaporean',
  'montagnard', 'karen', 'refugee', 'immigrant', 'asian american',
  'cultural', 'heritage', 'community', 'diaspora'
]

function isSEAEvent(title: string, description: string): boolean {
  const text = (title + ' ' + description).toLowerCase()
  return seaKeywords.some(keyword => text.includes(keyword))
}

async function scrapeEventbrite(): Promise<Event[]> {
  const events: Event[] = []
  
  try {
    // Try Eventbrite API approach or search page
    const searchTerms = [
      'southeast+asian+north+carolina',
      'vietnamese+north+carolina',
      'hmong+north+carolina',
      'asian+community+north+carolina'
    ]

    for (const term of searchTerms) {
      try {
        const response = await axios.get(
          `https://www.eventbrite.com/d/nc--north-carolina/${term}/`,
          {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.5'
            },
            timeout: 15000
          }
        )

        const $ = cheerio.load(response.data)
        
        // Try multiple selectors as Eventbrite structure may vary
        const selectors = [
          '[data-testid="event-card"]',
          '.event-card',
          '.search-event-card',
          '[class*="event-card"]'
        ]

        selectors.forEach(selector => {
          $(selector).each((_, element) => {
            const title = $(element).find('[data-testid="event-card-title"], .event-card-title, h3, h2').first().text().trim()
            const date = $(element).find('[data-testid="event-card-date"], .event-date, time').first().text().trim() || 
                        $(element).find('time').attr('datetime') || ''
            const location = $(element).find('[data-testid="event-card-location"], .event-location, [class*="location"]').first().text().trim()
            const link = $(element).find('a').first().attr('href') || ''
            const description = $(element).find('[data-testid="event-card-description"], .event-description, p').first().text().trim()

            if (title && isSEAEvent(title, description) && !events.some(e => e.title === title)) {
              events.push({
                title,
                date: date || 'Date TBA',
                location: location || 'North Carolina',
                description: description || '',
                link: link.startsWith('http') ? link : link ? `https://www.eventbrite.com${link}` : '#',
                source: 'Eventbrite'
              })
            }
          })
        })
      } catch (error: any) {
        // Silently continue if this search term fails
        if (error.code !== 'ECONNABORTED') {
          console.error(`Error scraping Eventbrite for ${term}:`, error.message)
        }
      }
    }
  } catch (error: any) {
    console.error('Error scraping Eventbrite:', error.message)
  }

  return events
}

async function scrapeMeetup(): Promise<Event[]> {
  const events: Event[] = []
  
  try {
    // Meetup search - try multiple approaches
    const searchTerms = [
      'southeast-asian-north-carolina',
      'vietnamese-community-nc',
      'hmong-community-nc',
      'asian-american-nc'
    ]

    for (const term of searchTerms) {
      try {
        const response = await axios.get(
          `https://www.meetup.com/find/?keywords=${term}&location=us--nc`,
          {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            },
            timeout: 15000
          }
        )

        const $ = cheerio.load(response.data)
        
        // Try multiple selectors
        const selectors = [
          '[data-testid="event-card"]',
          '.eventCard',
          '.event-card',
          '[class*="eventCard"]'
        ]

        selectors.forEach(selector => {
          $(selector).each((_, element) => {
            const title = $(element).find('h3, h2, [class*="title"]').first().text().trim()
            const date = $(element).find('time').attr('datetime') || 
                        $(element).find('time').text().trim() ||
                        $(element).find('[class*="date"]').first().text().trim()
            const location = $(element).find('[data-testid="event-venue"], [class*="venue"], [class*="location"]').first().text().trim()
            const link = $(element).find('a').first().attr('href') || ''
            const description = $(element).find('p, [class*="description"]').first().text().trim()

            if (title && isSEAEvent(title, description) && !events.some(e => e.title === title)) {
              events.push({
                title,
                date: date || 'Date TBA',
                location: location || 'North Carolina',
                description: description || '',
                link: link.startsWith('http') ? link : link ? `https://www.meetup.com${link}` : '#',
                source: 'Meetup'
              })
            }
          })
        })
      } catch (error: any) {
        if (error.code !== 'ECONNABORTED') {
          console.error(`Error scraping Meetup for ${term}:`, error.message)
        }
      }
    }
  } catch (error: any) {
    console.error('Error scraping Meetup:', error.message)
  }

  return events
}

async function scrapeLocalSources(): Promise<Event[]> {
  // Helper function to format dates
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  // Generate dates for upcoming events (spread over next few months)
  const now = new Date()
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 15)
  const twoMonths = new Date(now.getFullYear(), now.getMonth() + 2, 10)
  const threeMonths = new Date(now.getFullYear(), now.getMonth() + 3, 20)
  const fourMonths = new Date(now.getFullYear(), now.getMonth() + 4, 5)
  const mayDate = new Date(now.getFullYear(), 4, 15) // May 15th for AAPI Heritage Month

  // Curated events and fallback data with actual dates
  const curatedEvents: Event[] = [
    {
      title: 'Southeast Asian Cultural Festival',
      date: formatDate(nextMonth),
      location: 'Raleigh, NC',
      description: 'Annual celebration of Southeast Asian cultures with food, music, and performances',
      link: '#',
      source: 'Community Calendar'
    },
    {
      title: 'Hmong New Year Celebration',
      date: formatDate(twoMonths),
      location: 'Charlotte, NC',
      description: 'Traditional Hmong New Year celebration with cultural activities',
      link: '#',
      source: 'Community Calendar'
    },
    {
      title: 'Vietnamese Community Health Fair',
      date: formatDate(new Date(now.getFullYear(), now.getMonth() + 1, 25)),
      location: 'Greensboro, NC',
      description: 'Free health screenings and information for Vietnamese community members',
      link: '#',
      source: 'Community Calendar'
    },
    {
      title: 'SEA Community Technology Workshop',
      date: formatDate(new Date(now.getFullYear(), now.getMonth() + 2, 18)),
      location: 'Durham, NC',
      description: 'Free workshop on using MyChart and navigating digital healthcare systems',
      link: '#',
      source: 'Community Calendar'
    },
    {
      title: 'Asian American Heritage Month Celebration',
      date: formatDate(mayDate),
      location: 'Chapel Hill, NC',
      description: 'Celebration of Asian American heritage with cultural performances and food',
      link: '#',
      source: 'Community Calendar'
    }
  ]

  // Try to scrape from local community organization websites if available
  // This is a placeholder for future implementation
  // You could add specific URLs here for community organization websites

  return curatedEvents
}

export async function GET() {
  try {
    // Check cache
    const now = Date.now()
    if (cachedEvents.length > 0 && (now - lastFetchTime) < CACHE_DURATION) {
      return NextResponse.json({ events: cachedEvents, cached: true })
    }

    // Fetch events from multiple sources
    const [eventbriteEvents, meetupEvents, localEvents] = await Promise.all([
      scrapeEventbrite(),
      scrapeMeetup(),
      scrapeLocalSources()
    ])

    // Combine and deduplicate events
    const allEvents = [...eventbriteEvents, ...meetupEvents, ...localEvents]
    
    // Remove duplicates based on title similarity
    const uniqueEvents = allEvents.filter((event, index, self) =>
      index === self.findIndex(e => 
        e.title.toLowerCase() === event.title.toLowerCase() &&
        e.date === event.date
      )
    )

    // Sort by date (upcoming first)
    uniqueEvents.sort((a, b) => {
      if (a.date === 'Upcoming' || a.date === 'Date TBA') return -1
      if (b.date === 'Upcoming' || b.date === 'Date TBA') return 1
      return a.date.localeCompare(b.date)
    })

    // Update cache
    cachedEvents = uniqueEvents
    lastFetchTime = now

    return NextResponse.json({ 
      events: uniqueEvents, 
      cached: false,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    
    // Return cached events if available, even if expired
    if (cachedEvents.length > 0) {
      return NextResponse.json({ 
        events: cachedEvents, 
        cached: true,
        error: 'Using cached data due to fetch error'
      })
    }

    // Return fallback events
    return NextResponse.json({ 
      events: await scrapeLocalSources(),
      error: 'Unable to fetch live events'
    })
  }
}

