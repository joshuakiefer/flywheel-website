'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimateInView from './AnimateInView'

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-primary py-24 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="absolute left-[calc(50%-18rem)] top-10 h-[64rem] max-w-none stroke-white/20 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="pattern-1"
              width={200}
              height={200}
              x="50%"
              y="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(0 0)"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="50%" className="overflow-visible fill-brand-primary/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#pattern-1)" />
        </svg>
      </div>

      <div className="container-custom relative">
        <AnimateInView>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Scale Your Agency?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Get the financial clarity and strategic guidance you need to take your agency to the next level.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-8 py-4 text-base font-semibold text-brand-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule Your Free Consultation
                </Link>
              </motion.div>
              <Link
                href="/services"
                className="text-base font-semibold leading-6 text-white"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
} 