'use client'

import { ExternalLink, FileText, Phone, Globe, Book, Users, Heart, Calendar, RefreshCw, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Event {
  title: string
  date: string
  location: string
  description: string
  link: string
  source: string
}

export default function Resources() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string>('')
  const [refreshing, setRefreshing] = useState(false)

  const fetchEvents = async (showRefreshing = false) => {
    if (showRefreshing) setRefreshing(true)
    else setLoading(true)

    try {
      const response = await fetch('/api/events')
      const data = await response.json()
      setEvents(data.events || [])
      setLastUpdated(data.lastUpdated || new Date().toISOString())
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchEvents()
    // Auto-refresh every 30 minutes
    const interval = setInterval(() => {
      fetchEvents(true)
    }, 30 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-sage-light via-skin-light via-earth-cream to-sage-pale text-neutral-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-dark">
            Resources
          </h1>
          <p className="text-xl text-neutral-dark/90 max-w-3xl">
            Helpful links, documents, and support services for Southeast Asian communities in North Carolina
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Government & Benefits Resources */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Government & Benefits Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-skin-warm" />
                NC ePASS (Benefits Portal)
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Apply for Medicaid, SNAP, and other benefits online
              </p>
              <a
                href="https://www.epass.nc.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Visit ePASS
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Phone: 1-866-719-0141
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-600" />
                NC Medicaid
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Information about Medicaid eligibility and enrollment
              </p>
              <a
                href="https://www.ncdhhs.gov/medicaid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Visit NC Medicaid
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                NC Department of Health and Human Services
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Comprehensive health and social services information
              </p>
              <a
                href="https://www.ncdhhs.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Visit NCDHHS
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-skin-warm" />
                NC Benefits Center
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Get help with benefits applications and questions
              </p>
              <p className="text-skin-warm font-semibold">
                Phone: 1-866-719-0141
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Available Monday-Friday, 8am-5pm
              </p>
            </div>
          </div>
        </section>

        {/* Healthcare Resources */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Healthcare Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                MyChart Support
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Get help with MyChart from your healthcare provider
              </p>
              <p className="text-gray-600 text-sm">
                Contact your healthcare provider's support line or visit their website for MyChart assistance.
                Most providers have multilingual support available.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Community Health Centers
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Find affordable healthcare in your community
              </p>
              <a
                href="https://findahealthcenter.hrsa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Find a Health Center
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                WIC Program
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Nutrition assistance for women, infants, and children
              </p>
              <a
                href="https://www.ncdhhs.gov/divisions/public-health/wic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Learn About WIC
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Phone: 1-800-367-2229
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mental Health Resources
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Access mental health support and crisis services
              </p>
              <p className="text-skin-warm font-semibold mb-2">
                Crisis Line: 988
              </p>
              <a
                href="https://www.ncdhhs.gov/divisions/mental-health-developmental-disabilities-and-substance-abuse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center text-sm"
              >
                NC Mental Health Services
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Digital Literacy Resources */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Book className="h-8 w-8 text-skin-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Digital Literacy & Learning Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                DigitalLearn.org
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Free online tutorials for basic computer and internet skills
              </p>
              <a
                href="https://www.digitallearn.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Visit DigitalLearn
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Local Libraries
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Many libraries offer free computer classes and one-on-one technology help
              </p>
              <p className="text-gray-600 text-sm">
                Contact your local public library to learn about available programs and services.
                Most libraries have multilingual staff and resources.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                GCF Global
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Free online tutorials for technology, reading, and math skills
              </p>
              <a
                href="https://edu.gcfglobal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Visit GCF Global
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Adult Education Programs
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Find adult education and digital literacy classes in your area
              </p>
              <a
                href="https://www.nccommunitycolleges.edu/adult-education"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                NC Community Colleges
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Safety & Scam Prevention */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Safety & Scam Prevention
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Report Fraud (FTC)
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Report scams and fraud to the Federal Trade Commission
              </p>
              <a
                href="https://reportfraud.ftc.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Report Fraud
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Phone: 1-877-382-4357
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Identity Theft Resources
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Get help if your identity has been stolen
              </p>
              <a
                href="https://www.identitytheft.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Visit IdentityTheft.gov
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Medicare Fraud Hotline
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Report suspected Medicare fraud
              </p>
              <p className="text-skin-warm font-semibold">
                Phone: 1-800-633-4227
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Social Security Fraud
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Report Social Security fraud or suspicious activity
              </p>
              <a
                href="https://oig.ssa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
              >
                Report to SSA OIG
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Phone: 1-800-269-0271
              </p>
            </div>
          </div>
        </section>

        {/* Community Resources */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Community & Cultural Resources
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Connecting with your community is essential. Here are ways to find Southeast Asian 
              community organizations and resources in North Carolina:
            </p>

            <div className="bg-skin-light p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Finding Community Organizations
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Contact your local Department of Social Services for community organization referrals</li>
                <li>• Reach out to cultural centers and places of worship in your area</li>
                <li>• Connect with Southeast Asian community leaders and organizations</li>
                <li>• Check with local libraries for community resource directories</li>
                <li>• Visit community health centers that serve diverse populations</li>
                <li>• Use our <a href="/interactive-tools" className="text-skin-warm hover:text-skin-warm/80 font-semibold">Interactive Tools</a> to get personalized assistance</li>
              </ul>
            </div>

            {/* SEA Community Events - Web Scraped */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-skin-warm" />
                  Upcoming SEA Community Events in North Carolina
                </h3>
                <button
                  onClick={() => fetchEvents(true)}
                  disabled={refreshing}
                  className="flex items-center text-skin-warm hover:text-skin-warm/80 font-semibold disabled:opacity-50"
                >
                  {refreshing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Refreshing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh Events
                    </>
                  )}
                </button>
              </div>

              {lastUpdated && (
                <p className="text-sm text-gray-500 mb-4">
                  Last updated: {new Date(lastUpdated).toLocaleString()}
                </p>
              )}

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-skin-warm" />
                  <span className="ml-3 text-gray-600">Loading events...</span>
                </div>
              ) : events.length === 0 ? (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <p className="text-gray-700">
                    No upcoming events found at the moment. Events are automatically updated. 
                    Check back soon or contact local community organizations for more information.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="border-2 border-skin-soft rounded-lg p-6 hover:shadow-lg transition-shadow bg-skin-light"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 flex-1">
                          {event.title}
                        </h4>
                        <span className="ml-2 px-2 py-1 text-xs bg-skin-light text-skin-warm rounded">
                          {event.source}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-skin-warm" />
                          {event.date}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-skin-warm" />
                          {event.location}
                        </p>
                      </div>

                      {event.description && (
                        <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                          {event.description}
                        </p>
                      )}

                      {event.link && event.link !== '#' && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-skin-warm hover:text-skin-warm/80 font-semibold text-sm inline-flex items-center"
                        >
                          Learn More
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Events are automatically scraped from multiple sources including 
                  Eventbrite, Meetup, and community calendars. Events are updated every 30 minutes. 
                  If you know of an event that should be listed, please contact your local community 
                  organization to ensure it's posted on these platforms.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Legal Aid Resources
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Free or low-cost legal assistance for immigrants and refugees
                </p>
                <a
                  href="https://www.legalaidnc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-skin-warm hover:text-skin-warm/80 font-semibold inline-flex items-center"
                >
                  Legal Aid of North Carolina
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  Phone: 1-866-219-5262
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Immigrant & Refugee Services
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Organizations providing support for immigrant and refugee communities
                </p>
                <p className="text-gray-600 text-sm">
                  Contact your local refugee resettlement agencies or immigrant service organizations 
                  for assistance with integration, language learning, and accessing services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

