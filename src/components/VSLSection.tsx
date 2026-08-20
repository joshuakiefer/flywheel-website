'use client'

import { motion } from 'framer-motion'
import FlywheelLogo from './FlywheelLogo'

/**
 * When the VSL is ready, set VIDEO_EMBED_URL to the embed URL and the player
 * renders automatically. Until then a branded placeholder card shows instead.
 *
 * Examples:
 *   YouTube — 'https://www.youtube.com/embed/VIDEO_ID'
 *   Vimeo   — 'https://player.vimeo.com/video/VIDEO_ID'
 *   Wistia  — 'https://fast.wistia.net/embed/iframe/MEDIA_ID'
 *
 * For a self-hosted MP4 in /public instead, set VIDEO_FILE (e.g. '/vsl.mp4').
 */
const VIDEO_EMBED_URL = ''
const VIDEO_FILE = ''

export default function VSLSection() {
  const hasVideo = Boolean(VIDEO_EMBED_URL || VIDEO_FILE)

  return (
    <section className="relative">
      {/* Dark band */}
      <div className="relative bg-gray-900 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#06966A20,_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,_#1A2B4940,_transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 sm:pt-24 pb-32 sm:pb-48 lg:pb-72">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block py-1.5 px-3 mb-6 text-xs font-semibold uppercase tracking-widest text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-400/20 rounded-full">
              Watch First
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              See How Flywheel Turns Your Books Into a{' '}
              <span className="text-emerald-400">Growth Engine</span>
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              A few minutes on what most bookkeepers miss — and how connected financial
              reporting changes the decisions you make every month.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wave transition — same fill as the dark band above */}
      <div className="w-full text-gray-900 leading-[0]">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Video card — pulled up so it straddles the dark/light boundary */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-28 sm:-mt-44 lg:-mt-[280px] pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/30 ring-1 ring-white/10 bg-gray-800">
            <div className="relative w-full aspect-video">
              {VIDEO_EMBED_URL ? (
                <iframe
                  src={VIDEO_EMBED_URL}
                  title="Flywheel — how it works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : VIDEO_FILE ? (
                <video controls playsInline className="absolute inset-0 h-full w-full object-cover">
                  <source src={VIDEO_FILE} type="video/mp4" />
                </video>
              ) : (
                /* Placeholder until the VSL is delivered */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#06966A18,_transparent_60%)]" />
                  <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7 sm:h-9 sm:w-9 text-emerald-400 translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path d="M8 5.14v13.72a.5.5 0 00.77.42l10.4-6.86a.5.5 0 000-.84L8.77 4.72a.5.5 0 00-.77.42z" />
                    </svg>
                  </div>
                  <div className="relative text-center px-6">
                    <FlywheelLogo height={34} iconOnly className="mx-auto mb-3 opacity-80" />
                    <p className="text-sm sm:text-base font-medium text-gray-300">
                      Video coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {!hasVideo && (
            <p className="mt-5 text-center text-sm text-gray-500">
              In the meantime,{' '}
              <a
                href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-600 hover:text-emerald-500 underline underline-offset-4"
              >
                book a discovery call
              </a>{' '}
              and we&apos;ll walk you through it live.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
