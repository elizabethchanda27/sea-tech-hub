/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Wrench, FileText, CheckCircle, Shield, Heart, Globe2, TrendingUp, MessageCircle, Calendar } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Using diverse skin tones */}
      <section className="bg-gradient-to-br from-skin-light via-sage-pale via-earth-tan to-earth-warm text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SEA Tech Access Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-800 max-w-3xl mx-auto">
              Empowering Southeast Asian communities in North Carolina to navigate essential digital systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tech-sea-communities"
                className="bg-white text-earth-warm px-8 py-3 rounded-lg font-semibold hover:bg-sage-pale transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/digital-systems"
                className="bg-earth-warm text-white px-8 py-3 rounded-lg font-semibold hover:bg-earth-medium transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Different uses and benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome + Purpose */}
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-neutral-dark">
              Welcome to the Southeast Asian Digital Access Hub
            </h2>
            <p className="text-lg text-gray-700">
              Supporting Southeast Asian communities in North Carolina as they navigate healthcare, technology, and essential digital systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Many SEA families face challenges using online systems for healthcare, benefits, and communication because of language barriers, unfamiliar technology, and confusing instructions. This hub provides simple guides, redesigned examples of digital tools, and resources created with the needs of SEA elders, parents, and youth in mind.
            </p>
          </div>

          {/* Who this is for */}
          <div className="bg-neutral-pale rounded-lg p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-neutral-dark text-center mb-6">Who this is for</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <div className="bg-white/80 rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-neutral-dark">SEA Elders</p>
                <p>Clear explanations, language support, and step-by-step visuals.</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-neutral-dark">Parents</p>
                <p>Guides for school portals, healthcare, and benefits applications.</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-neutral-dark">Youth Helpers</p>
                <p>Tools to support family members with translation and navigation.</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 shadow-sm">
                <p className="font-semibold text-neutral-dark">New Immigrants</p>
                <p>Step-by-step instructions for getting started with digital systems.</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 shadow-sm md:col-span-2">
                <p className="font-semibold text-neutral-dark">SEA Community Organizations</p>
                <p>Resource sharing, event discovery, and materials to support your members.</p>
              </div>
            </div>
          </div>

          {/* Overview of the three main parts */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-sage-light p-6 rounded-lg shadow-md border-2 border-sage-medium">
              <div className="flex items-start mb-3">
                <Heart className="h-8 w-8 text-sage-medium mr-3" />
                <h3 className="text-xl font-semibold text-neutral-dark">Redesigned Health System</h3>
              </div>
              <p className="text-gray-700 text-sm">
                See how MyChart can better support SEA communities with clearer navigation, SEA-language explanations, and transportation integration.
              </p>
            </div>
            <div className="bg-earth-cream p-6 rounded-lg shadow-md border-2 border-earth-medium">
              <div className="flex items-start mb-3">
                <Wrench className="h-8 w-8 text-earth-warm mr-3" />
                <h3 className="text-xl font-semibold text-neutral-dark">Interactive Tools</h3>
              </div>
              <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
                <li>Transportation Assistance</li>
                <li>Multilingual Support Chatbot</li>
                <li>Step-by-step visual guides</li>
              </ul>
            </div>
            <div className="bg-neutral-pale p-6 rounded-lg shadow-md border-2 border-neutral-medium">
              <div className="flex items-start mb-3">
                <Globe2 className="h-8 w-8 text-neutral-accent mr-3" />
                <h3 className="text-xl font-semibold text-neutral-dark">Community Resources</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Find SEA organizations, cultural events, tech-learning programs, and healthcare support across North Carolina.
              </p>
            </div>
          </div>

          {/* Data Carousel */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-3xl font-bold text-neutral-dark text-center mb-4">
                SEA Digital Access Snapshot
              </h3>
              <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                Learn about how much technology impacts the SEA community in NC!
              </p>
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-4 min-w-[1100px]">
                  <div className="min-w-[280px] bg-white/90 border-2 border-neutral-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Digital Skill Gaps</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      32% of Asian Americans lack foundational digital skills; 59% lack advanced skills for health, education, and online services.
                    </p>
                    <p className="text-xs text-gray-500">Source: National Skills Coalition (2020)</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-sage-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">💻</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Low-Income Older Adults</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Only 27% of low-income Asian American elders feel confident using online systems independently.
                    </p>
                    <p className="text-xs text-gray-500">Source: JMIR (DeLange Martinez et al., 2023)</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-skin-warm rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">🔤</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Language Access</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      In NC, 43% of Hmong-speaking and 37% of Vietnamese-speaking households say English-only digital forms are “difficult or impossible.”
                    </p>
                    <p className="text-xs text-gray-500">Source: Urban Institute (2023)</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-earth-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">⚕️</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Healthcare Portals</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      61% can’t interpret online test results; 53% avoid portal scheduling; 48% fear submitting forms incorrectly.
                    </p>
                    <p className="text-xs text-gray-500">Sources: JMIR + SMU “Helping Asia’s Elderly Become Digital Citizens”</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-neutral-accent rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">📱</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Youth Responsibility</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      70%+ of SEA youth in NC manage at least one major digital system (school, healthcare, immigration) for their household.
                    </p>
                    <p className="text-xs text-gray-500">Sources: Kolano & Davila (2019)</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-earth-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">🧠</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Digital Anxiety</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      56% of older Asian respondents say digital health tools increase stress or worry rather than reduce it.
                    </p>
                    <p className="text-xs text-gray-500">Source: SMU Elderly Digital Citizens Study</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-sage-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">🏥</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Benefits Portals</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      41% of immigrant families in NC couldn’t complete safety-net applications online due to unclear instructions or language barriers.
                    </p>
                    <p className="text-xs text-gray-500">Source: Urban Institute (2023)</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-earth-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">🚍</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Transport & Healthcare</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      34% of refugee communities in NC missed medical appointments due to transportation challenges or difficulty with map apps.
                    </p>
                    <p className="text-xs text-gray-500">Source: Urban Institute (2023)</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-neutral-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">🌏</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">SEA Populations in NC</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Vietnamese ~45k; Hmong ~12k; Montagnard/Degar ~10k (Guilford); Burmese/Karen/Chin ~8k (Raleigh–Durham).
                    </p>
                    <p className="text-xs text-gray-500">Sources: NC Demographic Estimates & Refugee Resettlement Reports</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-sage-medium rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">📈</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Digital Literacy & Jobs</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Every 10% increase in digital literacy drives a 2–3% rise in employment opportunities for low-income communities.
                    </p>
                    <p className="text-xs text-gray-500">Source: ASCC Policy Brief (2025)</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-neutral-accent rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">🏫</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Parents & School Portals</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      60%+ of SEA parents in NC can’t access or understand PowerSchool/Canvas without help from a child.
                    </p>
                    <p className="text-xs text-gray-500">Sources: Kolano & Davila; Urban Institute</p>
                  </div>
                  <div className="min-w-[280px] bg-white/90 border-2 border-skin-warm rounded-xl shadow-md p-5">
                    <div className="text-2xl mb-2">📲</div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-2">Interpreter Needs</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      1 in 5 SEA patients needed an interpreter for healthcare portals, but &lt;5% of major NC systems offered in-language digital support.
                    </p>
                    <p className="text-xs text-gray-500">Source: Urban Institute (2023)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-skin-soft p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-skin-warm">
              <Heart className="h-12 w-12 text-skin-warm mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-dark">
                Healthcare Navigation
              </h3>
              <p className="text-gray-600 mb-4">
                Master MyChart to schedule appointments, view test results, message doctors, and manage prescriptions with confidence.
              </p>
            </div>

            <div className="bg-sage-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-sage-medium">
              <Shield className="h-12 w-12 text-sage-medium mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-dark">
                Benefits Access
              </h3>
              <p className="text-gray-600 mb-4">
                Navigate Medicaid, SNAP, and other safety-net programs with step-by-step guidance tailored to NC systems.
              </p>
            </div>

            <div className="bg-earth-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-earth-medium">
              <CheckCircle className="h-12 w-12 text-earth-warm mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-dark">
                Scam Protection
              </h3>
              <p className="text-gray-600 mb-4">
                Learn to recognize and avoid common scams targeting immigrant communities, protecting your personal information and finances.
              </p>
            </div>

            <div className="bg-neutral-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-neutral-medium">
              <Globe2 className="h-12 w-12 text-neutral-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-dark">
                Community Connection
              </h3>
              <p className="text-gray-600 mb-4">
                Discover local events, programs, and resources that strengthen connections within SEA communities across North Carolina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-neutral-dark">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            The SEA Tech Access Hub is dedicated to bridging the digital divide for Southeast Asian 
            communities in North Carolina. We provide culturally responsive resources, step-by-step 
            guidance, and interactive tools to help families navigate essential digital systems like 
            MyChart, Medicaid, and other NC safety-net programs. Our goal is to empower communities 
            with the knowledge and confidence needed to access vital services in an increasingly 
            digital world.
          </p>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">
            Why Digital Access Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-skin-warm/30 p-6 rounded-lg shadow-md border-2 border-skin-warm">
              <div className="flex items-center mb-4">
                <Heart className="h-10 w-10 text-skin-warm mr-3" />
                <h3 className="text-xl font-semibold text-neutral-dark">Healthcare Access</h3>
              </div>
              <p className="text-gray-600">
                Many healthcare systems now require online access. Without digital skills, families 
                may struggle to schedule appointments, access test results, or communicate with 
                healthcare providers.
              </p>
            </div>
            <div className="bg-sage-medium/20 p-6 rounded-lg shadow-md border-2 border-sage-medium">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-sage-medium mr-3" />
                <h3 className="text-xl font-semibold text-neutral-dark">Safety Net Programs</h3>
              </div>
              <p className="text-gray-600">
                Essential benefits like Medicaid, SNAP, and housing assistance increasingly use 
                online applications. Digital literacy is crucial for accessing these vital resources.
              </p>
            </div>
            <div className="bg-earth-warm/25 p-6 rounded-lg shadow-md border-2 border-earth-medium">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-10 w-10 text-earth-warm mr-3" />
                <h3 className="text-xl font-semibold text-neutral-dark">Economic Opportunity</h3>
              </div>
              <p className="text-gray-600">
                Digital skills open doors to better employment opportunities, educational resources, 
                and financial services that can improve quality of life for entire families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">
            Get Started in 3 Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-earth-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-earth-warm">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-dark">Explore Resources</h3>
              <p className="text-gray-600 mb-4">
                Browse our comprehensive guides on using MyChart, Medicaid, and other digital systems.
              </p>
              <Link
                href="/digital-systems"
                className="text-earth-warm font-semibold hover:text-earth-medium inline-flex items-center"
              >
                View Guides
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-sage-pale rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage-medium">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-dark">Try Our Tools</h3>
              <p className="text-gray-600 mb-4">
                Use our interactive chatbot and transportation widget to get personalized assistance.
              </p>
              <Link
                href="/interactive-tools"
                className="text-sage-medium font-semibold hover:text-earth-warm inline-flex items-center"
              >
                Try Tools
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-skin-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-skin-warm">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-dark">Connect with Community</h3>
              <p className="text-gray-600 mb-4">
                Find local events and programs that support Southeast Asian communities in NC.
              </p>
              <Link
                href="/resources"
                className="text-skin-warm font-semibold hover:text-earth-warm inline-flex items-center"
              >
                Find Events
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-neutral-dark">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-skin-warm/30 p-8 rounded-lg shadow-md border-2 border-skin-warm">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-8 w-8 text-sage-medium mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-dark">Culturally Responsive</h3>
                  <p className="text-gray-600">
                    Our resources are designed specifically for Southeast Asian communities, 
                    understanding cultural contexts, language barriers, and unique challenges 
                    faced by immigrant and refugee families.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-sage-medium/20 p-8 rounded-lg shadow-md border-2 border-sage-medium">
              <div className="flex items-start mb-4">
                <Globe2 className="h-8 w-8 text-earth-warm mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-dark">North Carolina Focused</h3>
                  <p className="text-gray-600">
                    All information is tailored to North Carolina's specific systems, programs, 
                    and resources. We provide local event listings and community connections 
                    throughout the state.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-earth-warm/25 p-8 rounded-lg shadow-md border-2 border-earth-medium">
              <div className="flex items-start mb-4">
                <MessageCircle className="h-8 w-8 text-skin-warm mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-dark">Interactive Support</h3>
                  <p className="text-gray-600">
                    Get instant help with our chatbot, find transportation options with our widget, 
                    and access step-by-step visual guides that make complex systems easy to understand.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-accent/20 p-8 rounded-lg shadow-md border-2 border-neutral-medium">
              <div className="flex items-start mb-4">
                <Calendar className="h-8 w-8 text-neutral-accent mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-dark">Always Updated</h3>
                  <p className="text-gray-600">
                    Our event listings are automatically updated, and our guides reflect the latest 
                    changes to digital systems. You'll always have access to current information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

