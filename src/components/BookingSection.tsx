'use client'

import { motion } from 'framer-motion'

/**
 * Inline scheduler.
 *
 * BOOKING_URL is embedded in an iframe. If your scheduler ever blocks framing,
 * swap in the provider's official embed snippet here — the "open in a new tab"
 * fallback link below stays either way so visitors never hit a dead end.
 */
const BOOKING_URL = 'https://www.calendar.com/joshkiefercpa/meeting-flywheel/'

export default function BookingSection() {
  return (
    <section id="book" className="relative py-20 sm:py-28 bg-gray-50 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-emerald-600 shadow-2xl shadow-emerald-600/20"
        >
          {/* Ambient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,_#ffffff20,_transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,_#ffffff15,_transparent_40%)]" />

          <div className="relative px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-6 sm:pb-10 text-center">
            <span className="inline-block py-1.5 px-3 mb-5 text-xs font-semibold uppercase tracking-widest text-white bg-white/15 ring-1 ring-white/25 rounded-full">
              Free Discovery Call
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-emerald-50">
              Pick a time that works for you. We&apos;ll look at where your numbers
              are today and what it would take to get the clarity you need.
            </p>
          </div>

          {/* Scheduler */}
          <div className="relative px-2 sm:px-6 lg:px-10 pb-5 sm:pb-6">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg">
              <iframe
                src={BOOKING_URL}
                title="Book a discovery call with Flywheel"
                loading="lazy"
                className="w-full border-0 h-[640px] sm:h-[700px]"
              />
            </div>
          </div>

          {/* Always-visible fallback — works even if the scheduler can't be framed */}
          <div className="relative px-6 pb-9 sm:pb-12 text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base sm:text-lg font-semibold text-emerald-700 shadow-lg hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
            >
              Open the Scheduler in a New Tab
              <svg className="ml-2.5 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="mt-3 text-sm text-emerald-50/90">
              Prefer to talk first? Call{' '}
              <a href="tel:6146650557" className="font-semibold text-white hover:text-emerald-100">
                (614) 665-0557
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
