'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'

const reportPages = [
  { src: '/report/notes-to-management.jpg', label: 'Executive Summary' },
  { src: '/report/key-metrics.jpg', label: 'Key Metrics' },
  { src: '/report/kpi-results.jpg', label: 'KPI Results' },
  { src: '/report/breakeven-analysis.jpg', label: 'Breakeven Analysis' },
  { src: '/report/cash-flow-analysis.jpg', label: 'Cash Flow Analysis' },
]

export default function GolfPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const touchStartX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeSlide < reportPages.length - 1) {
        setActiveSlide(activeSlide + 1)
      } else if (diff < 0 && activeSlide > 0) {
        setActiveSlide(activeSlide - 1)
      }
    }
  }

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="mx-auto max-w-md px-5 pt-10 pb-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 92" width="36" height="36" aria-label="Flywheel" role="img">
            <circle cx="42" cy="46" r="22" fill="none" stroke="#2E7D32" strokeWidth="4" />
            <circle cx="42" cy="46" r="9" fill="#2E7D32" />
            <path d="M42 24 Q57 28 62 38" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            <path d="M64 46 Q60 61 50 68" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
            <path d="M42 68 Q27 64 20 54" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-[1.7rem] font-bold text-gray-900 text-center leading-tight tracking-tight mb-2">
          Accounting that keeps up with your growth.
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-gray-500 text-center mb-6">
          Bookkeeping. Fractional Controller. CFO insights. Built for businesses scaling $1M–$20M.
        </p>

        {/* Report Preview Section */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 text-center mb-3">
            Sample Monthly Report
          </p>

          {/* Image carousel */}
          <div
            className="relative rounded-xl overflow-hidden bg-gray-50 ring-1 ring-gray-200 shadow-sm"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Active page image */}
            <div className="relative aspect-[8.5/11]">
              <Image
                src={reportPages[activeSlide].src}
                alt={reportPages[activeSlide].label}
                fill
                className="object-contain"
                sizes="(max-width: 448px) 100vw, 448px"
                priority={activeSlide === 0}
              />
            </div>

            {/* Page label overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent pt-8 pb-3 px-4">
              <p className="text-white text-sm font-medium">{reportPages[activeSlide].label}</p>
              <p className="text-white/60 text-xs">{activeSlide + 1} of {reportPages.length}</p>
            </div>
          </div>

          {/* Dots + nav */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {reportPages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === activeSlide ? 'w-6 bg-emerald-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`View ${reportPages[i].label}`}
              />
            ))}
          </div>
        </div>

        {/* Social proof */}
        <p className="text-xs text-gray-400 text-center mb-5">
          Trusted by 50+ businesses managing over $150M in combined revenue.
        </p>

        {/* CTA */}
        <a
          href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl py-4 text-center text-base font-bold text-white"
          style={{ backgroundColor: '#2E7D32' }}
        >
          Book My Free Financial Checkup
        </a>

        {/* Reassurance */}
        <p className="text-xs text-gray-400 text-center mt-3">
          No pitch. No commitment. Just clarity on your numbers.
        </p>

      </div>
    </main>
  )
}
