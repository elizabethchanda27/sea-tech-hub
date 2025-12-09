import { Globe, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-earth-cream via-sage-pale to-skin-light text-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-earth-warm" />
              <span className="text-lg font-bold text-neutral-dark">SEA Tech Hub</span>
            </div>
            <p className="text-neutral-dark">
              Empowering Southeast Asian communities in North Carolina through digital literacy and access.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tech-sea-communities" className="text-neutral-medium hover:text-earth-warm transition-colors">
                  Tech & SEA Communities
                </Link>
              </li>
              <li>
                <Link href="/digital-systems" className="text-neutral-medium hover:text-earth-warm transition-colors">
                  Digital Systems Guidance
                </Link>
              </li>
              <li>
                <Link href="/interactive-tools" className="text-neutral-medium hover:text-earth-warm transition-colors">
                  Interactive Tools
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-neutral-medium hover:text-earth-warm transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-dark">Contact</h3>
            <ul className="space-y-2 text-neutral-medium">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@seatechhub.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(919) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-tan/30 mt-8 pt-8 text-center text-neutral-medium">
          <p>&copy; 2024 SEA Tech Access Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

