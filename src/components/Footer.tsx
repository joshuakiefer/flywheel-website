'use client'

import Link from 'next/link'
import FlywheelLogo from './FlywheelLogo'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Bookkeeping', href: '/services#bookkeeping' },
    { name: 'CFO Services', href: '/services#cfo' },
    { name: 'Tax Services', href: '/services#tax' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <FlywheelLogo height={32} showTagline={false} variant="light" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400 max-w-xs">
              Empowering growing businesses with financial clarity and strategic guidance to scale with confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white">Get Started</h3>
            <p className="mt-4 text-sm text-gray-400">
              Book a free discovery call to discuss your business goals.
            </p>
            <a
              href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              Book a Call
              <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Flywheel Bookkeeping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
