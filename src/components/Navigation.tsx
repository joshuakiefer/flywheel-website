'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, ArrowRightIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="container-custom flex items-center justify-between py-6">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5 text-2xl font-semibold text-brand-primary">
          Flywheel
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 items-center">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-gray-900 hover:text-brand-primary transition-colors"
          >
            {item.name}
          </Link>
        ))}
        <a
          href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors"
        >
          Book Discovery Call
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </nav>
  )
} 