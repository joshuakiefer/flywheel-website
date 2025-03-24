'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container-custom flex items-center justify-between py-4 sm:py-6">
          <div className="flex lg:flex-1">
            <Link 
              href="/" 
              className="-m-1.5 p-1.5 transition-transform hover:scale-105"
            >
              <span className="text-xl sm:text-2xl font-semibold text-brand-primary">
                Flywheel
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
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
                className="text-sm font-medium text-gray-900 hover:text-brand-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <a
              href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all hover:scale-105"
            >
              Book Discovery Call
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <Dialog 
              as={motion.div}
              static
              className="lg:hidden relative z-50" 
              open={mobileMenuOpen} 
              onClose={setMobileMenuOpen}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5 transition-transform hover:scale-105"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-xl font-semibold text-brand-primary">
                      Flywheel
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-1.5 py-6">
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="group -mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                            <ArrowRightIcon className="ml-auto h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="py-6"
                    >
                      <a
                        href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-brand-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all hover:scale-105"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Book Discovery Call
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Dialog>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 