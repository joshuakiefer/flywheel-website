'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function GolfPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          {/* Flywheel icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 92" width="40" height="40" aria-hidden="true">
            <circle cx="42" cy="46" r="22" fill="none" stroke="#1D6B52" strokeWidth="3" />
            <circle cx="42" cy="46" r="8" fill="#1D6B52" />
            <path d="M42 24 Q57 28 62 38" fill="none" stroke="#1D6B52" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M64 46 Q60 61 50 68" fill="none" stroke="#1D6B52" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M42 68 Q27 64 20 54" fill="none" stroke="#1D6B52" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="text-left">
            <div className="text-2xl font-medium text-gray-900 leading-none" style={{ letterSpacing: '-0.02em' }}>flywheel</div>
            <div className="text-[9px] uppercase tracking-[0.12em] text-gray-500 mt-0.5">Outsourced Accounting for Growing Businesses</div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold ring-1 ring-emerald-100"
        >
          For Businesses Scaling $1M to $20M
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 max-w-xl leading-tight"
        >
          If your books are messier than your short game,{' '}
          <span className="text-emerald-600">we should talk.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-5 text-lg text-gray-600 max-w-md"
        >
          Stop hacking through your financials. Flywheel provides expert bookkeeping and CFO insights for growing businesses so you can focus on what matters.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex gap-8 justify-center"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">50+</div>
            <div className="text-sm text-gray-500 mt-0.5">Active Clients</div>
            <div className="text-xs text-gray-400">Growing $1M–$20M</div>
          </div>
          <div className="w-px bg-gray-100" />
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">$150M+</div>
            <div className="text-sm text-gray-500 mt-0.5">Revenue Managed</div>
            <div className="text-xs text-gray-400">for our clients</div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col gap-4 w-full max-w-sm"
        >
          <a
            href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all duration-200 active:scale-95"
          >
            Book Discovery Call
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <a
            href="tel:6146650557"
            className="w-full inline-flex items-center justify-center rounded-full border-2 border-emerald-600/20 bg-white px-8 py-4 text-lg font-semibold text-emerald-700 hover:bg-emerald-50 transition-all duration-200 active:scale-95"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            614-665-0557
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 text-sm text-gray-400"
        >
          flywheelbookkeeping.com
        </motion.p>
      </div>

      {/* Footer strip */}
      <div className="bg-emerald-600 py-4 px-6 text-center">
        <p className="text-sm text-emerald-100 font-medium">
          Flywheel Bookkeeping &nbsp;·&nbsp; Outsourced Accounting for Growing Businesses
        </p>
      </div>
    </main>
  )
}
