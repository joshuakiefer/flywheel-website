'use client'

import React from 'react'
import Image from 'next/image'

const reportSections = [
  'Executive Summary',
  'Profit & Loss',
  'Key Metrics & KPIs',
  'Breakeven Analysis',
  'Cash Flow Analysis',
  'Forecast Reporting',
]

export default function GolfPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      {/* Hero */}
      <div className="bg-[#1D6B52] px-6 pt-10 pb-8 text-center">
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
        <h1 className="text-[1.75rem] font-bold text-white leading-tight tracking-tight mb-2">
          Accounting that keeps up with your growth.
        </h1>
        <p className="text-sm text-white/70">
          Bookkeeping. Fractional Controller. CFO insights. Built for businesses scaling $1M–$20M.
        </p>
      </div>

      <div className="flex-1 mx-auto max-w-md w-full px-5 pt-6 pb-6">

        {/* Report Preview */}
        <div className="mb-8">
          {/* Stacked page preview — visual only */}
          <div className="relative mx-auto w-[220px] h-[180px] mb-5">
            {/* Background pages (fanned stack) */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-md ring-1 ring-gray-200 rotate-[-4deg] translate-x-[-8px]">
              <div className="p-3 opacity-30">
                <div className="h-2 w-16 bg-gray-300 rounded mb-2" />
                <div className="h-1.5 w-full bg-gray-200 rounded mb-1" />
                <div className="h-1.5 w-full bg-gray-200 rounded mb-1" />
                <div className="h-1.5 w-3/4 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="absolute inset-0 bg-white rounded-lg shadow-md ring-1 ring-gray-200 rotate-[-1.5deg] translate-x-[-3px] translate-y-[2px]">
              <div className="p-3 opacity-40">
                <div className="h-2 w-20 bg-gray-300 rounded mb-2" />
                <div className="h-1.5 w-full bg-gray-200 rounded mb-1" />
                <div className="h-1.5 w-full bg-gray-200 rounded mb-1" />
                <div className="h-1.5 w-3/4 bg-gray-200 rounded" />
              </div>
            </div>
            {/* Top page — actual report thumbnail */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden rotate-[1.5deg] translate-x-[4px] translate-y-[3px]">
              <Image
                src="/report/notes-to-management.jpg"
                alt="Sample monthly report"
                fill
                className="object-cover object-top"
                sizes="220px"
              />
            </div>
          </div>

          {/* What's included — clean list */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Every report includes</p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {reportSections.map((section) => (
                <div key={section} className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-[#1D6B52]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{section}</span>
                </div>
              ))}
            </div>
          </div>

          {/* View report button */}
          <a
            href="/report/sample-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center w-full rounded-full border-2 border-[#1D6B52] bg-white py-3 text-base font-semibold text-[#1D6B52]"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            View Sample Report
          </a>
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

        {/* CTAs */}
        <a
          href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full rounded-full bg-[#1D6B52] py-5 px-6 text-base font-bold text-white shadow-lg shadow-[#1D6B52]/25 mb-3"
        >
          <span>Get a Second Opinion on Your Books</span>
          <svg className="ml-2 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
        <a
          href="tel:6146650557"
          className="flex items-center justify-center w-full rounded-full border-2 border-gray-200 bg-white py-4 text-lg font-semibold text-[#1D6B52]"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          614-665-0557
        </a>
        <p className="text-sm text-gray-400 text-center mt-4">flywheelbookkeeping.com</p>
      </div>

      {/* Footer */}
      <div className="bg-[#1D6B52] py-6 px-6">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 92" width="20" height="20" aria-hidden="true">
              <circle cx="42" cy="46" r="22" fill="none" stroke="#ffffff" strokeWidth="4" />
              <circle cx="42" cy="46" r="9" fill="#ffffff" />
              <path d="M42 24 Q57 28 62 38" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              <path d="M64 46 Q60 61 50 68" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              <path d="M42 68 Q27 64 20 54" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-medium text-white leading-none" style={{ letterSpacing: '-0.01em' }}>flywheel</span>
          </div>
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Flywheel Bookkeeping
          </p>
        </div>
      </div>
    </main>
  )
}
