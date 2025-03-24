'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative isolate">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700" />
        <div className="absolute inset-y-0 right-1/2 -left-72 -z-10 mr-16 w-[200%] origin-top-right skew-x-[-30deg] bg-white/10 ring-1 ring-white/10 sm:-left-100 lg:-left-100" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-right skew-x-[-30deg] bg-white/10 ring-1 ring-white/10 sm:-left-100 lg:-left-100" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Ready to Transform Your Agency's Finances?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
            >
              Book a discovery call to explore how we can help your agency achieve its financial goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="/schedule"
                className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-emerald-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Schedule Your Discovery Call
              </a>
              <a
                href="/services"
                className="text-base font-semibold leading-6 text-white hover:text-gray-100 transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 