'use client'

import React from 'react'

export default function GolfPage() {
  return (
    <main
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* Main content — fills screen, vertically balanced */}
      <div className="flex-1 flex flex-col items-center justify-center px-7 text-center" style={{ paddingTop: '10vh', paddingBottom: '6vh' }}>

        {/* Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 84 92"
          width="44"
          height="44"
          aria-label="Flywheel"
          role="img"
          style={{ marginBottom: '6vh' }}
        >
          <circle cx="42" cy="46" r="22" fill="none" stroke="#2E7D32" strokeWidth="4" />
          <circle cx="42" cy="46" r="9" fill="#2E7D32" />
          <path d="M42 24 Q57 28 62 38" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          <path d="M64 46 Q60 61 50 68" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
          <path d="M42 68 Q27 64 20 54" fill="none" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(1.85rem, 8.5vw, 2.4rem)',
            fontWeight: 800,
            color: '#111827',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '3vh',
          }}
        >
          Accounting that keeps up with your growth.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 4.2vw, 1.1rem)',
            color: '#6B7280',
            lineHeight: 1.5,
            marginBottom: '3vh',
            maxWidth: '30ch',
          }}
        >
          Bookkeeping. CFO insights. Tax planning. Built for businesses scaling $1M–$20M.
        </p>

        {/* Social Proof */}
        <p
          style={{
            fontSize: 'clamp(0.75rem, 3.2vw, 0.85rem)',
            color: '#9CA3AF',
            marginBottom: '4vh',
          }}
        >
          Trusted by 50+ businesses managing over $150M in combined revenue.
        </p>

        {/* CTA Button */}
        <a
          href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '340px',
            backgroundColor: '#2E7D32',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 4.5vw, 1.1rem)',
            borderRadius: '14px',
            padding: '18px 24px',
            textDecoration: 'none',
            marginBottom: '2.5vh',
            WebkitTapHighlightColor: 'transparent',
          }}
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'conversion', {
                event_category: 'golf_landing',
                event_label: 'book_checkup_click',
              })
            }
          }}
        >
          Book My Free Financial Checkup
        </a>

        {/* Reassurance */}
        <p
          style={{
            fontSize: 'clamp(0.72rem, 3vw, 0.8rem)',
            color: '#9CA3AF',
          }}
        >
          No pitch. No commitment. Just clarity on your numbers.
        </p>

      </div>

      {/* GA4 stub — swap G-XXXXXXXXXX with your real measurement ID */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { page_path: '/golf' });
          `,
        }}
      />
    </main>
  )
}
