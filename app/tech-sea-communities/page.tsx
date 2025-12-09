/* eslint-disable react/no-unescaped-entities */
import { AlertCircle, Users, Globe, FileText, Calendar, Heart, BookOpen, Navigation } from 'lucide-react'

export default function TechSEACommunities() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-skin-warm via-earth-tan via-sage-pale to-earth-cream text-neutral-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technology & SEA Communities in North Carolina
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl">
            Understanding the digital divide and building bridges for Southeast Asian families
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tech Barriers Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              How SEA Communities Encounter Tech Barriers
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Southeast Asian communities in North Carolina face significant barriers when accessing 
              essential digital systems. These challenges are not just about having internet access, 
              but about navigating complex systems that were not designed with their needs in mind.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Language Barriers</h3>
                <p className="text-gray-700">
                  Many digital systems lack adequate translation tools or multilingual support, 
                  making it difficult for non-English speakers to navigate online applications 
                  for healthcare, benefits, and public services.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Literacy Gaps</h3>
                <p className="text-gray-700">
                  Limited experience with digital technology, especially among older adults, 
                  creates barriers to using online systems. Perceived usefulness and ease of use 
                  significantly impact technology adoption.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Challenges</h3>
                <p className="text-gray-700">
                  Unstable internet connections and limited access to devices prevent many families 
                  from consistently using online systems, even when they want to.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural & Trust Barriers</h3>
                <p className="text-gray-700">
                  Fear of public-charge policies, documentation concerns, and lack of cultural 
                  familiarity with government systems create hesitancy to engage with digital platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Context Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-skin-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Historical Context & Research
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-skin-warm pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Safety Net Access Challenges
              </h3>
              <p className="text-gray-700 mb-3">
                Research from the Urban Institute (2023) reveals that immigrant families in North Carolina 
                face multiple barriers when accessing safety-net programs. As systems move toward online 
                applications and digital communication, families with limited digital literacy or unstable 
                internet connections struggle to navigate these systems effectively.
              </p>
              <p className="text-gray-700">
                The report emphasizes that improving technology access requires addressing both cultural 
                and infrastructural inequities within digital government systems. Statewide systems can 
                unintentionally create digital divides that harm Southeast Asian families.
              </p>
            </div>

            <div className="border-l-4 border-skin-warm pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technology Acceptance Among Asian American Older Adults
              </h3>
              <p className="text-gray-700 mb-3">
                A 2024 study examining technology acceptance among low-income Asian American older adults 
                (including Vietnamese, Filipino, and Hmong participants) found that perceived usefulness 
                and ease of use are the strongest predictors of technology adoption.
              </p>
              <p className="text-gray-700">
                However, older age, limited education, and lower English proficiency significantly reduce 
                participation. The study emphasizes that access alone is not enough—users must perceive 
                technology as relevant and approachable. Cultural familiarity and trust are essential 
                factors in determining how older adults interact with digital technology.
              </p>
            </div>

            <div className="border-l-4 border-skin-warm pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hmong Community Experiences
              </h3>
              <p className="text-gray-700 mb-3">
                Focus group research with Hmong immigrant families in North Carolina shows that many 
                residents experience language and technological barriers that limit access to healthcare, 
                education, and public benefits. The research connects these gaps to structural inequities, 
                such as limited translation tools and inconsistent digital literacy support.
              </p>
              <p className="text-gray-700">
                This directly demonstrates how technology influences access to essential services and 
                supports the argument that technology access is tied to both cultural and systemic factors.
              </p>
            </div>

            <div className="border-l-4 border-skin-warm pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community-Based Learning & Trust
              </h3>
              <p className="text-gray-700 mb-3">
                Research on Southeast Asian refugee youth (Montagnard, Karen, and Burmese) in North 
                Carolina community organizations shows that relationships, language support, and safe 
                spaces are prerequisites for participation. These same conditions are necessary when 
                introducing new technologies or teaching online navigation skills.
              </p>
              <p className="text-gray-700">
                Youth organizations serve as bridges for digital learning, providing multilingual help 
                sessions and family-centered technology workshops. This highlights the importance of 
                community-based, culturally responsive approaches to digital inclusion.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Used for Good */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="h-8 w-8 text-earth-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Technology Used for Good in SEA Communities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-earth-cream p-6 rounded-lg border-2 border-earth-medium">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-War Reconstruction, Healing & Documentation</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Digital landmine mapping cut casualties by tens of thousands in rural Cambodia, Laos, and Vietnam (UN).</li>
                <li>• Cambodian Genocide Tribunal digitized 600k+ pages, helping NC Cambodian families preserve testimony.</li>
                <li>• Refugee Microhistories, Laos/Vietnam contamination maps, and other archives keep Hmong, Lao, Montagnard stories alive.</li>
              </ul>
            </div>
            <div className="bg-sage-light p-6 rounded-lg border-2 border-sage-medium">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bringing SEA Icons to Audiences</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Hmong American musicians gained 100M+ YouTube views across diaspora.</li>
                <li>• Vietnamese American TikTok creators reach 5–10M monthly viewers with language/culture content.</li>
                <li>• Karen refugee musicians archive Karen history online, widely shared by NC Karen communities.</li>
              </ul>
            </div>
            <div className="bg-neutral-pale p-6 rounded-lg border-2 border-neutral-medium">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SEA Studies & Cultural Memory</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Online SEA history databases → 40% rise in SEA coursework in U.S. universities since 2015.</li>
                <li>• Online Hmong/Burmese language platforms saw 20–30% youth participation spikes during COVID.</li>
                <li>• Digital SEA arts/archives keep culture alive despite migration and trauma.</li>
              </ul>
              <p className="text-gray-700 text-sm mt-3 font-semibold">
                Takeaway: Tech is restorative, archival, emotional, cultural, and political.
              </p>
            </div>
          </div>
        </section>

        {/* Advocacy Powered by Technology */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-neutral-accent mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Advocacy Powered by Technology</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-skin-light p-6 rounded-lg border-2 border-skin-warm">
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Stop AAPI Hate: 11k+ reports logged digitally, boosting SEA visibility and policy action.</li>
                <li>• AAJC: $500k digital equity grants to Hmong, Karen, Lao, Vietnamese orgs.</li>
                <li>• YSEALI Digiverse: trained hundreds of SEA youth on cybersecurity, misinformation, and tech leadership.</li>
              </ul>
            </div>
            <div className="bg-earth-cream p-6 rounded-lg border-2 border-earth-medium">
              <p className="text-gray-700 text-sm">
                Digital activism helps SEA communities resist invisibility and “quiet neglect,” shaping new narratives and policies.
              </p>
            </div>
          </div>
        </section>

        {/* Impacts on Youth, Elders, Parents */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">How Technology Affects SEA Youth, Elders, and Families</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-skin-light p-6 rounded-lg border-2 border-skin-warm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Youth (NC)</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Kolano & Davila: SEA girls use digital media for identity, school, advocacy.</li>
                <li>• 70%+ youth in NC act as “family tech interpreters” for portals and paperwork.</li>
                <li>• Youth carry adult tasks because systems lack multilingual/low-literacy design.</li>
              </ul>
            </div>
            <div className="bg-sage-light p-6 rounded-lg border-2 border-sage-medium">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Elders</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• 65% feel overwhelmed by digital forms; 53% avoid portals for fear of mistakes.</li>
                <li>• War-related schooling gaps make interfaces cognitively hard to navigate.</li>
              </ul>
            </div>
            <div className="bg-earth-cream p-6 rounded-lg border-2 border-earth-medium">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adults / Parents</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Parents rely on children for PowerSchool, Medicaid/ePASS, MyChart, immigration, housing.</li>
                <li>• Digital literacy correlates with income stability (ASCC), so low literacy creates economic risk.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mental Health & Technology */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-skin-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Mental Health & Technology</h2>
          </div>
          <div className="bg-neutral-pale p-6 rounded-lg border-2 border-neutral-medium">
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Trauma and displacement fuel institutional mistrust; portals can heighten anxiety.</li>
              <li>• Stress spikes when results appear without explanation, language options are limited, or forms feel high-stakes.</li>
              <li>• Culturally responsive digital health tools reduce avoidance and increase follow-through (DeLange Martinez et al., 2023).</li>
            </ul>
          </div>
        </section>

        {/* Education & Technology Access */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-sage-medium mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Education & Technology Access</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sage-light p-6 rounded-lg border-2 border-sage-medium">
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Students without digital access score lower on standardized assessments.</li>
                <li>• 60%+ of SEA parents in NC can’t navigate PowerSchool/Canvas without youth help.</li>
                <li>• FAFSA, scholarships, and college apps require strong digital fluency.</li>
              </ul>
            </div>
            <div className="bg-earth-cream p-6 rounded-lg border-2 border-earth-medium">
              <p className="text-gray-700 text-sm">
                Guides that empower both youth and adults reduce intergenerational tech labor and high-pressure reliance on children.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media, Immigration & Community */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="h-8 w-8 text-neutral-accent mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Social Media, Immigration & Community</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-skin-light p-6 rounded-lg border-2 border-skin-warm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Burmese, Hmong, Vietnamese, Lao, and Karen groups use Facebook/YouTube as primary diaspora channels.</li>
                <li>• Community-run pages spread news, health updates, and cultural events.</li>
              </ul>
            </div>
            <div className="bg-earth-cream p-6 rounded-lg border-2 border-earth-medium">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Immigration (High Stakes + Digital)</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Immigration is nearly fully online (I-485, work permits, refugee docs, visas).</li>
                <li>• Digital literacy determines whether families stay legally protected.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEA Populations in NC */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-earth-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">SEA Populations in NC (Highly Specific)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-pale p-6 rounded-lg border-2 border-neutral-medium">
              <p className="text-gray-700 text-sm">
                Research Triangle (Raleigh–Durham–Chapel Hill): Vietnamese 10k–12k; Burmese/Karen/Chin 6k–8k; Montagnard/Degar largest in U.S. in Greensboro; Hmong significant in Greensboro/High Point. NC is one of the most SEA-diverse states on the East Coast.
              </p>
            </div>
            <div className="bg-sage-light p-6 rounded-lg border-2 border-sage-medium">
              <p className="text-gray-700 text-sm">
                Largest statewide populations: Vietnamese ~45k; Hmong ~12k; Montagnard/Degar ~10k (Guilford); Burmese/Karen/Chin refugees ~8k (Raleigh–Durham).
              </p>
            </div>
          </div>
        </section>

        {/* Barriers & Real Struggles */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Historical Barriers & Real Tech Struggles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-skin-light p-6 rounded-lg border-2 border-skin-warm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Core Barriers</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Language: English-only interfaces; dialects (Hmong White/Green, Burmese dialects, Karen, Vietnamese variants) missing.</li>
                <li>• Education interruptions from war/displacement; low literacy.</li>
                <li>• Trauma: hospitals, schools, government systems can trigger distress.</li>
                <li>• Digital literacy: unclear instructions, poor translations, unfamiliar workflows.</li>
              </ul>
            </div>
            <div className="bg-sage-light p-6 rounded-lg border-2 border-sage-medium">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real NC Struggles</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Confusion uploading documents to ePASS.</li>
                <li>• Fear of telehealth setup steps; misreading color-coded labs.</li>
                <li>• Clicking wrong areas in MyChart; anxiety when results appear without interpreter context.</li>
                <li>• Parents missing school notices due to unfamiliar portals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transportation Challenges */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Navigation className="h-8 w-8 text-sage-medium mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Transportation Challenges</h2>
          </div>
          <div className="bg-earth-cream p-6 rounded-lg border-2 border-earth-medium">
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• 34% of refugee families missed medical appointments due to transportation and difficulty with transit/map apps (Urban Institute).</li>
              <li>• Low familiarity with bus-route apps; trouble reading English transit maps.</li>
              <li>• Anxiety about rideshare scams or digital payments.</li>
            </ul>
          </div>
        </section>

        {/* Why MyChart and NC Systems Matter */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="h-8 w-8 text-skin-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Why MyChart and NC Systems Matter
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              North Carolina's healthcare and safety-net systems are increasingly moving online. 
              Understanding and navigating these systems is essential for accessing:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-skin-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Access</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Appointment scheduling</li>
                  <li>• Medical records access</li>
                  <li>• Prescription refills</li>
                  <li>• Test results</li>
                  <li>• Secure messaging with providers</li>
                </ul>
              </div>

              <div className="bg-skin-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Public Benefits</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Medicaid applications</li>
                  <li>• SNAP benefits</li>
                  <li>• Housing assistance</li>
                  <li>• Educational resources</li>
                  <li>• Employment services</li>
                </ul>
              </div>

              <div className="bg-skin-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Services</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Driver's license renewal</li>
                  <li>• Tax filing assistance</li>
                  <li>• Legal aid resources</li>
                  <li>• Community programs</li>
                  <li>• Emergency services</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <p className="text-gray-800 font-semibold mb-2">
                The Digital Shift
              </p>
              <p className="text-gray-700">
                Many of these services now require or strongly encourage online access. Without the 
                skills and confidence to use these systems, families may miss out on critical resources 
                and support. Our goal is to ensure that Southeast Asian communities in North Carolina 
                have the tools and knowledge they need to successfully navigate these digital systems.
              </p>
            </div>
          </div>
        </section>

        {/* Programs and Events Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <Calendar className="h-8 w-8 text-skin-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Community Programs & Events in North Carolina
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Community connection is essential for Southeast Asian families navigating technology. 
              The following programs and organizations in North Carolina provide support, resources, 
              and community spaces for SEA communities:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Community Youth Organizations
                </h3>
                <p className="text-gray-700 mb-3">
                  Organizations serving Southeast Asian youth (Montagnard, Karen, Burmese, Hmong, 
                  Vietnamese, and other communities) offer:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Multilingual technology workshops</li>
                  <li>• Family-centered digital literacy programs</li>
                  <li>• Mentorship and peer support</li>
                  <li>• Culturally responsive learning spaces</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Health & Social Services
                </h3>
                <p className="text-gray-700 mb-3">
                  Community health centers and social service organizations provide:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• MyChart navigation assistance</li>
                  <li>• Benefits application support</li>
                  <li>• Translation services</li>
                  <li>• Digital access resources</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cultural & Community Centers
                </h3>
                <p className="text-gray-700 mb-3">
                  Centers that celebrate and support SEA cultures offer:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Community events and gatherings</li>
                  <li>• Language classes</li>
                  <li>• Technology training sessions</li>
                  <li>• Intergenerational learning opportunities</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Educational Programs
                </h3>
                <p className="text-gray-700 mb-3">
                  Schools and educational organizations provide:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Adult education classes</li>
                  <li>• Computer literacy courses</li>
                  <li>• English language learning</li>
                  <li>• Parent technology workshops</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-skin-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Finding Programs Near You
              </h3>
              <p className="text-gray-700 mb-4">
                To find specific programs and events in your area, we recommend:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Contacting local community centers and cultural organizations</li>
                <li>• Reaching out to your local health department or social services office</li>
                <li>• Connecting with Southeast Asian community leaders and organizations</li>
                <li>• Checking with libraries for free technology classes</li>
                <li>• Using our <a href="/interactive-tools" className="text-skin-warm hover:text-skin-warm/80 font-semibold">Interactive Tools</a> to get personalized assistance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

