'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tech-sea-communities', label: 'Tech & SEA Communities' },
    { href: '/digital-systems', label: 'Digital Systems Guidance' },
    { href: '/interactive-tools', label: 'Interactive Tools' },
    { href: '/resources', label: 'Resources' },
  ]

  return (
    <nav className="bg-earth-cream shadow-lg sticky top-0 z-50 border-b-2 border-earth-tan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-earth-warm" />
            <span className="text-xl font-bold text-neutral-dark">SEA Tech Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-earth-warm bg-earth-cream'
                    : 'text-neutral-dark hover:text-earth-warm hover:bg-sage-pale'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-dark hover:bg-sage-pale"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-earth-warm bg-earth-cream'
                    : 'text-neutral-dark hover:text-earth-warm hover:bg-sage-pale'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

