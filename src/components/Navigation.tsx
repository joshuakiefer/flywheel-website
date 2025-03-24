'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-white'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/Main logo.png"
                  alt="Flywheel Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900">Flywheel</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Success Stories', href: '/success-stories' },
                { name: 'About', href: '/about' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* Contact Link */}
              <Link
                href="/contact"
                className="hidden md:inline-flex text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <a
                href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-emerald-500 transition-all duration-200 hover:scale-105"
              >
                Book Discovery Call
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden rounded-full p-2.5 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
} 