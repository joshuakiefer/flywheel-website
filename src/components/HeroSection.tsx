'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import FlywheelLogo from './FlywheelLogo'

/**
 * When the VSL is ready, set VIDEO_EMBED_URL to the embed URL and the player
 * renders in the hero automatically. Until then a branded placeholder shows.
 *
 * Examples:
 *   YouTube: 'https://www.youtube.com/embed/VIDEO_ID'
 *   Vimeo:   'https://player.vimeo.com/video/VIDEO_ID'
 *   Wistia:  'https://fast.wistia.net/embed/iframe/MEDIA_ID'
 *
 * For a self-hosted MP4 in /public instead, set VIDEO_FILE (e.g. '/vsl.mp4').
 */
const VIDEO_EMBED_URL = ''
const VIDEO_FILE = ''

export default function HeroSection() {
  const hasVideo = Boolean(VIDEO_EMBED_URL || VIDEO_FILE)

  return (
    <section className="relative isolate overflow-hidden bg-gray-900">
      {/* Background motion */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* Tint + ambient glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-gray-900/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_#06966A25,_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_#1A2B4955,_transparent_50%)]" />
      {/* Fade into the wave below so the seam is invisible */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-gray-900" />

      {/* Top padding clears the fixed nav, which is two rows tall on lg. */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-44 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid items-center gap-y-12 gap-x-12 lg:grid-cols-2 xl:gap-x-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-semibold uppercase tracking-widest ring-1 ring-emerald-400/20">
              For Businesses Scaling $1M to $20M
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-white">
              Financial <span className="text-emerald-400">Clarity</span>
              {' '}
              <br className="hidden sm:block" />
              Fuels Business{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Growth
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
              Transform your business&apos;s financial complexity into a strategic
              advantage with expert bookkeeping, CFO services, and tax planning.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="#book"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl shadow-emerald-900/40 hover:bg-emerald-500 transition-all duration-200 hover:scale-105"
              >
                Book Discovery Call
                <ArrowRightIcon className="ml-2.5 h-5 w-5" />
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-7 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white bg-white/5 ring-1 ring-white/20 hover:bg-white/10 transition-all duration-200"
              >
                View Services
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-x-6 pt-4 sm:pt-6">
              <div className="flex items-center gap-x-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-gray-300">
                <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Trusted by 50+ Growing Businesses</span>
              </div>
            </div>
          </motion.div>

          {/* Right: video */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10 bg-gray-800">
              <div className="relative w-full aspect-video">
                {VIDEO_EMBED_URL ? (
                  <iframe
                    src={VIDEO_EMBED_URL}
                    title="How Flywheel works"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : VIDEO_FILE ? (
                  <video controls playsInline className="absolute inset-0 h-full w-full object-cover">
                    <source src={VIDEO_FILE} type="video/mp4" />
                  </video>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#06966A18,_transparent_60%)]" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-emerald-400 translate-x-0.5" aria-hidden="true">
                        <path d="M8 5.14v13.72a.5.5 0 00.77.42l10.4-6.86a.5.5 0 000-.84L8.77 4.72a.5.5 0 00-.77.42z" />
                      </svg>
                    </div>
                    <div className="relative text-center px-6">
                      <FlywheelLogo height={30} iconOnly className="mx-auto mb-2.5 opacity-80" />
                      <p className="text-sm font-medium text-gray-300">Video coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-400">
              {hasVideo
                ? 'A few minutes on how connected financial reporting changes the decisions you make every month.'
                : 'Want the walkthrough now? '}
              {!hasVideo && (
                <a
                  href="#book"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  Book a call and we&apos;ll show you live.
                </a>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
