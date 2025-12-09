/* eslint-disable react/no-unescaped-entities */
import { Heart, Shield, GraduationCap, FileCheck, ArrowRight, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function DigitalSystems() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-sage-pale via-skin-soft via-earth-cream to-sage-medium text-neutral-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Systems Guidance
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl">
            Step-by-step guides to navigate essential digital systems in North Carolina
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* MyChart Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              How to Use MyChart
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              MyChart is a secure online portal that connects you to your healthcare provider. 
              It allows you to manage your health information, communicate with your doctor, 
              and access medical records from anywhere.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-skin-warm pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Step 1: Creating Your Account
                </h3>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Visit your healthcare provider's website or ask for a MyChart activation code at your next appointment</li>
                  <li>Click "Sign Up Now" or "Create Account"</li>
                  <li>Enter your activation code (if provided) or personal information</li>
                  <li>Create a username and secure password</li>
                  <li>Verify your email address or phone number</li>
                </ol>
                <div className="mt-4 bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> If you don't have an activation code, you can request one 
                    at your next doctor's visit or by calling your healthcare provider's office.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-skin-warm pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Step 2: Logging In
                </h3>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Go to your healthcare provider's MyChart website</li>
                  <li>Enter your username and password</li>
                  <li>Click "Sign In"</li>
                  <li>If you forget your password, click "Forgot Password" to reset it</li>
                </ol>
              </div>

              <div className="border-l-4 border-skin-warm pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Step 3: Key Features to Use
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">View Test Results</h4>
                    <p className="text-sm text-gray-700">
                      Access your lab results, imaging reports, and other test results as soon as they're available.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Schedule Appointments</h4>
                    <p className="text-sm text-gray-700">
                      Book, reschedule, or cancel appointments online without calling the office.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Message Your Doctor</h4>
                    <p className="text-sm text-gray-700">
                      Send secure messages to your healthcare team with questions or concerns.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Request Prescription Refills</h4>
                    <p className="text-sm text-gray-700">
                      Request medication refills and have them sent directly to your pharmacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-gray-700">
                  If you need assistance setting up or using MyChart, contact your healthcare provider's 
                  support line or visit our <Link href="/interactive-tools" className="text-skin-warm hover:text-skin-warm/80 font-semibold">Interactive Tools</Link> page for personalized help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medicaid & NC Safety-Net Systems */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileCheck className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              How to Use Medicaid & NC Safety-Net Systems
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              North Carolina's safety-net programs provide essential support for families. 
              Here's how to navigate these systems:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Applying for Medicaid
                </h3>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Visit <a href="https://www.epass.nc.gov" target="_blank" rel="noopener noreferrer" className="text-skin-warm hover:text-skin-warm/80 font-semibold">ePASS.nc.gov</a> (North Carolina's online benefits portal)</li>
                  <li>Create an account or log in if you already have one</li>
                  <li>Click "Apply for Benefits" and select "Medicaid"</li>
                  <li>Fill out the application with your personal information</li>
                  <li>Upload required documents (ID, proof of income, etc.)</li>
                  <li>Submit your application</li>
                  <li>Check your application status online</li>
                </ol>
                <div className="mt-4 bg-green-50 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> You can also apply by phone at 1-866-719-0141 or 
                    in person at your local Department of Social Services office.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Other Safety-Net Programs
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">SNAP (Food Assistance)</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Apply online at ePASS.nc.gov or contact your local DSS office.
                    </p>
                    <p className="text-xs text-gray-600">
                      Phone: 1-866-719-0141
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">WIC (Women, Infants, Children)</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Contact your local WIC office or visit <a href="https://www.ncdhhs.gov/divisions/public-health/wic" target="_blank" rel="noopener noreferrer" className="text-skin-warm hover:text-skin-warm/80">ncdhhs.gov/wic</a>
                    </p>
                    <p className="text-xs text-gray-600">
                      Phone: 1-800-367-2229
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Housing Assistance</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Contact your local Public Housing Authority or visit <a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer" className="text-skin-warm hover:text-skin-warm/80">hud.gov</a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Energy Assistance</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Apply through your local DSS office or community action agency.
                    </p>
                    <p className="text-xs text-gray-600">
                      Phone: 1-866-719-0141
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Getting Help with Applications
                </h3>
                <p className="text-gray-700 mb-3">
                  If you need assistance with applications:
                </p>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Visit your local Department of Social Services office for in-person help</li>
                  <li>Many community organizations offer application assistance</li>
                  <li>Call the NC Benefits Center at 1-866-719-0141</li>
                  <li>Use our <Link href="/interactive-tools" className="text-skin-warm hover:text-skin-warm/80 font-semibold">Interactive Tools</Link> for guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avoiding Scams */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              How to Avoid Scams
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Scammers often target people who are less familiar with digital systems. 
              Protect yourself by learning to recognize common scams:
            </p>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Common Scam Warning Signs
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li><strong>Urgent requests for money:</strong> Legitimate organizations won't demand immediate payment via gift cards, wire transfers, or cryptocurrency</li>
                      <li><strong>Requests for personal information:</strong> Be suspicious of emails or calls asking for your Social Security number, bank account, or passwords</li>
                      <li><strong>Too good to be true:</strong> If something sounds too good to be true, it probably is</li>
                      <li><strong>Pressure tactics:</strong> Scammers often create urgency to prevent you from thinking clearly</li>
                      <li><strong>Unexpected contact:</strong> Be cautious of unsolicited calls, emails, or messages</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Healthcare Scams
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Fake calls claiming to be from Medicare or Medicaid</li>
                    <li>• Offers for "free" medical equipment or services</li>
                    <li>• Requests for your Medicare number</li>
                    <li>• Fake medical bills or collection calls</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Protect yourself:</strong> Never share your Medicare/Medicaid number with unsolicited callers. 
                    Contact your provider directly using a number you know is real.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Government Benefits Scams
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Fake calls from "Social Security" or "IRS"</li>
                    <li>• Requests to "verify" your benefits</li>
                    <li>• Demands for payment to receive benefits</li>
                    <li>• Fake websites that look like official government sites</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Protect yourself:</strong> Government agencies will never call to demand immediate payment. 
                    Always verify by calling the official number yourself.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Tech Support Scams
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Pop-up messages claiming your computer has a virus</li>
                    <li>• Calls from "Microsoft" or "Apple" support</li>
                    <li>• Requests to download software or give remote access</li>
                    <li>• Demands for payment to "fix" problems</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Protect yourself:</strong> Legitimate tech companies won't call you unsolicited. 
                    Never give remote access to your computer unless you initiated the contact.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Phishing & Email Scams
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Emails asking you to click links or download attachments</li>
                    <li>• Messages claiming your account will be closed</li>
                    <li>• Requests to "update" your information</li>
                    <li>• Suspicious sender addresses</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Protect yourself:</strong> Don't click links in suspicious emails. 
                    Go directly to the website by typing the address yourself.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What to Do If You're Scammed
                </h3>
                <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Stop all communication with the scammer immediately</li>
                  <li>Report it to the Federal Trade Commission at <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer" className="text-skin-warm hover:text-skin-warm/80 font-semibold">reportfraud.ftc.gov</a></li>
                  <li>Contact your bank or credit card company if you shared financial information</li>
                  <li>Change passwords for any accounts that may be compromised</li>
                  <li>File a report with your local police department</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Digital Skills */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-skin-warm mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Basic Digital Skills
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Building basic digital skills helps you navigate online systems with confidence. 
              Here are essential skills to learn:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Using a Computer or Smartphone
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Turning devices on and off</li>
                  <li>• Using a mouse, touchpad, or touchscreen</li>
                  <li>• Opening and closing programs/apps</li>
                  <li>• Understanding basic icons and menus</li>
                  <li>• Adjusting settings (volume, brightness, etc.)</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Internet Basics
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Connecting to Wi-Fi</li>
                  <li>• Opening a web browser</li>
                  <li>• Typing a website address (URL)</li>
                  <li>• Using search engines</li>
                  <li>• Understanding links and buttons</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Email & Communication
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Creating an email account</li>
                  <li>• Sending and receiving emails</li>
                  <li>• Attaching files</li>
                  <li>• Recognizing spam and suspicious emails</li>
                  <li>• Organizing your inbox</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Online Safety
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Creating strong passwords</li>
                  <li>• Recognizing secure websites (https://)</li>
                  <li>• Understanding privacy settings</li>
                  <li>• Avoiding suspicious links</li>
                  <li>• Protecting personal information</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Online Forms & Applications
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Filling out online forms</li>
                  <li>• Uploading documents</li>
                  <li>• Saving your progress</li>
                  <li>• Submitting applications</li>
                  <li>• Checking application status</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Getting Help
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Using help menus and tutorials</li>
                  <li>• Finding support phone numbers</li>
                  <li>• Using online chat support</li>
                  <li>• Asking trusted friends or family</li>
                  <li>• Visiting community technology centers</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-skin-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Where to Learn Digital Skills
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Local Libraries:</strong> Many offer free computer classes and one-on-one help</li>
                <li>• <strong>Community Centers:</strong> Check for technology workshops in your area</li>
                <li>• <strong>Adult Education Programs:</strong> Often include digital literacy courses</li>
                <li>• <strong>Online Tutorials:</strong> Free resources like <a href="https://www.digitallearn.org" target="_blank" rel="noopener noreferrer" className="text-skin-warm hover:text-skin-warm/80 font-semibold">DigitalLearn.org</a></li>
                <li>• <strong>Our Interactive Tools:</strong> Use our <Link href="/interactive-tools" className="text-skin-warm hover:text-skin-warm/80 font-semibold">chatbot and transportation widget</Link> for personalized guidance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

