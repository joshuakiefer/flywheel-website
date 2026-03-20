'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import FlywheelLogo from './FlywheelLogo'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        {/* === MOBILE NAV (below lg) === */}
        <nav className="lg:hidden mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <FlywheelLogo height={32} iconOnly />
              <span
                className="text-lg font-medium text-gray-900 leading-none"
                style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: '-0.02em' }}
              >
                flywheel
              </span>
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>

        {/* === DESKTOP NAV (lg+) === */}
        <nav className="hidden lg:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top row — Logo lockup (hides on scroll) */}
          <div
            className={`flex justify-center overflow-hidden transition-all duration-300 ${
              isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-32 opacity-100 py-5'
            }`}
          >
            <Link href="/" className="flex items-center gap-3">
              <FlywheelLogo height={44} iconOnly />
              <div className="flex flex-col justify-center">
                <span
                  className="text-3xl font-medium text-gray-900 leading-none"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: '-0.02em' }}
                >
                  flywheel
                </span>
                <span
                  className="text-xs uppercase text-gray-500 leading-none mt-1.5"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: '0.12em' }}
                >
                  Outsourced Accounting for Growing Businesses
                </span>
              </div>
            </Link>
          </div>

          {/* Bottom row — Nav links + CTA */}
          <div
            className={`relative flex items-center transition-all duration-300 ${
              isScrolled
                ? 'h-16 justify-between'
                : 'h-12 justify-center border-t border-gray-100'
            }`}
          >
            {/* Collapsed logo (shows on scroll) */}
            {isScrolled && (
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <FlywheelLogo height={30} iconOnly />
                <span
                  className="text-xl font-medium text-gray-900 leading-none"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", letterSpacing: '-0.02em' }}
                >
                  flywheel
                </span>
              </Link>
            )}

            {/* Nav links */}
            <div className="flex items-center gap-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-200 whitespace-nowrap relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-all duration-200 whitespace-nowrap ${
                isScrolled ? 'px-5 py-2' : 'absolute right-0 px-5 py-2'
              }`}
            >
              Book a Call
              <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
