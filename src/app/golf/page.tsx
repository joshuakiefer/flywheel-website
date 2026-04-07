'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'

const reportPages = [
  { src: '/report/notes-to-management.jpg', label: 'Executive Summary', short: 'Summary' },
  { src: '/report/profit-and-loss.jpg', label: 'Profit & Loss', short: 'P&L' },
  { src: '/report/key-metrics.jpg', label: 'Key Metrics', short: 'Metrics' },
  { src: '/report/kpi-results.jpg', label: 'KPI Results', short: 'KPIs' },
  { src: '/report/breakeven-analysis.jpg', label: 'Breakeven Analysis', short: 'Breakeven' },
  { src: '/report/cash-flow-analysis.jpg', label: 'Cash Flow Analysis', short: 'Cash Flow' },
]

export default function GolfPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const touchStartX = useRef(0)
  const tabsRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeSlide < reportPages.length - 1) {
        setActiveSlide(prev => prev + 1)
      } else if (diff < 0 && activeSlide > 0) {
        setActiveSlide(prev => prev - 1)
      }
    }
  }

  const selectSlide = (i: number) => {
    setActiveSlide(i)
    // Scroll the tab into view
    if (tabsRef.current) {
      const tab = tabsRef.current.children[i] as HTMLElement
      if (tab) {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      {/* Hero Header */}
      <div className="bg-[#1D6B52] px-6 pt-10 pb-8 text-center">
        {/* Logo + Wordmark */}
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 92" width="36" height="36" aria-label="Flywheel" role="img">
            <circle cx="42" cy="46" r="22" fill="none" stroke="#ffffff" strokeWidth="3.5" />
            <circle cx="42" cy="46" r="9" fill="#ffffff" />
            <path d="M42 24 Q57 28 62 38" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <path d="M64 46 Q60 61 50 68" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <path d="M42 68 Q27 64 20 54" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-2xl font-medium text-white leading-none" style={{ letterSpacing: '-0.02em' }}>
            flywheel
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[1.75rem] font-bold text-white text-center leading-tight tracking-tight mb-2">
          Accounting that keeps up with your growth.
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-white/70 text-center">
          Bookkeeping. Fractional Controller. CFO insights. Built for businesses scaling $1M–$20M.
        </p>
      </div>

      <div className="flex-1 mx-auto max-w-md w-full px-5 pt-5 pb-6">

        {/* Report Preview Section */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 text-center mb-3">
            Sample Monthly Report
          </p>

          {/* Tab navigation */}
          <div
            ref={tabsRef}
            className="flex gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {reportPages.map((page, i) => (
              <button
                key={i}
                onClick={() => selectSlide(i)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  i === activeSlide
                    ? 'bg-[#1D6B52] text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {page.short}
              </button>
            ))}
          </div>

          {/* Image viewer */}
          <div
            className="relative rounded-xl overflow-hidden bg-gray-50 ring-1 ring-gray-200 shadow-sm"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
              <p className="text-white/60 text-xs">Swipe or tap tabs to browse</p>
            </div>
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

      {/* Hide scrollbar on tabs */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </main>
  )
}
