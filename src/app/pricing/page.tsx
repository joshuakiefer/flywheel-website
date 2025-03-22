'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon, ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import AnimateInView from '@/components/AnimateInView'
import PricingSection from '@/components/PricingSection'

export default function PricingPage() {
  return (
    <main className="flex-auto">
      {/* Hero section */}
      <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Partner with Us to Scale Your Agency
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help agencies between $1M-$10M in revenue build financial momentum. Choose the partnership level that best fits your growth stage.
            </p>
          </div>
        </div>
      </div>

      {/* Value props section */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                    <ArrowPathIcon className="w-5 h-5 text-brand-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">The Flywheel Effect</h3>
                  <p className="mt-2 text-gray-600">
                    Our integrated approach creates compound growth: clean books provide strategic insights, 
                    driving better decisions that accelerate your success over time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-brand-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dedicated Support</h3>
                  <p className="mt-2 text-gray-600">
                    All packages include monthly review meetings, direct access to your financial team, 
                    and our commitment to your agency's growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Select the level of financial expertise your agency needs, with the flexibility to scale as you grow.
            </p>
          </div>
          <PricingSection />
        </div>
      </div>

      {/* FAQ section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Common Questions
            </h2>
            <dl className="mt-8 space-y-8">
              <div>
                <dt className="text-lg font-semibold text-gray-900">
                  How do you determine which package is right for my agency?
                </dt>
                <dd className="mt-3 text-gray-600">
                  During our discovery call, we'll discuss your agency's current stage, goals, and financial needs. 
                  We'll recommend the best package based on your revenue, complexity, and growth objectives.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-semibold text-gray-900">
                  Can I upgrade my package as my agency grows?
                </dt>
                <dd className="mt-3 text-gray-600">
                  Absolutely! Our packages are designed to scale with you. As your needs evolve, 
                  we can adjust your services to match your growth.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-semibold text-gray-900">
                  What's included in the monthly review meetings?
                </dt>
                <dd className="mt-3 text-gray-600">
                  We review your financial performance, discuss growth opportunities, and address any questions. 
                  These meetings ensure you're making data-driven decisions for your agency.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ready to Build Financial Momentum?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a discovery call to explore how we can help accelerate your agency's growth.
            </p>
            <div className="mt-8">
              <a
                href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary group"
              >
                Schedule Discovery Call
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 