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
    <main className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="flex-1 mx-auto max-w-md px-5 pt-10 pb-6">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 92" width="36" height="36" aria-label="Flywheel" role="img">
            <circle cx="42" cy="46" r="22" fill="none" stroke="#1D6B52" strokeWidth="4" />
            <circle cx="42" cy="46" r="9" fill="#1D6B52" />
            <path d="M42 24 Q57 28 62 38" fill="none" stroke="#1D6B52" strokeWidth="3" strokeLinecap="round" />
            <path d="M64 46 Q60 61 50 68" fill="none" stroke="#1D6B52" strokeWidth="3" strokeLinecap="round" />
            <path d="M42 68 Q27 64 20 54" fill="none" stroke="#1D6B52" strokeWidth="3" strokeLinecap="round" />
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

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {reportPages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === activeSlide ? 'w-6 bg-[#1D6B52]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`View ${reportPages[i].label}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1D6B52]">50+</div>
            <div className="text-sm font-medium text-gray-900 mt-0.5">Active Clients</div>
            <div className="text-xs text-gray-400">Growing $1M–$20M</div>
          </div>
          <div className="w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1D6B52]">$150M+</div>
            <div className="text-sm font-medium text-gray-900 mt-0.5">Revenue Managed</div>
            <div className="text-xs text-gray-400">for our clients</div>
          </div>
        </div>

        {/* Book Discovery Call */}
        <a
          href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#1D6B52] py-4 text-center text-lg font-bold text-white shadow-lg mb-3"
        >
          Book Discovery Call &nbsp;&rarr;
        </a>

        {/* Phone Number */}
        <a
          href="tel:6146650557"
          className="flex items-center justify-center w-full rounded-full border-2 border-gray-200 bg-white py-4 text-lg font-semibold text-[#1D6B52]"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          614-665-0557
        </a>

        {/* URL */}
        <p className="text-sm text-gray-400 text-center mt-4">
          flywheelbookkeeping.com
        </p>

      </div>

      {/* Footer bar */}
      <div className="bg-[#1D6B52] py-4 px-6 text-center">
        <p className="text-sm text-white/90 font-medium">
          Flywheel Bookkeeping &nbsp;&middot;&nbsp; Outsourced Accounting for Growing Businesses
        </p>
      </div>
    </main>
  )
}
