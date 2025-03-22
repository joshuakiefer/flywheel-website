'use client'

import React from 'react'
import { CheckIcon, ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import AnimateInView from './AnimateInView'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Bookkeeping',
    price: '500',
    priceDetail: '/month',
    description: 'Start your flywheel with solid financial foundations.',
    impact: 'Clean books → Better decisions',
    features: [
      'Monthly financial statements',
      'Accounts payable & receivable',
      'Revenue recognition',
      'Payroll processing',
      'Software integrations',
      'Email & chat support'
    ],
    cta: 'Schedule Discovery Call',
    mostPopular: false,
    accent: 'from-brand-primary/5'
  },
  {
    name: 'Fractional Controller',
    price: '3,000',
    priceDetail: '/month',
    description: 'Accelerate your flywheel with strategic oversight.',
    impact: 'Better insights → Faster growth',
    features: [
      'All Core Operations features',
      'Monthly review meetings',
      'Cash flow management',
      'Financial controls & compliance',
      'Custom reporting dashboards',
      'Profitability analysis',
      'Tax planning coordination'
    ],
    cta: 'Schedule Discovery Call',
    mostPopular: true,
    accent: 'from-brand-primary/10'
  },
  {
    name: 'Fractional CFO',
    price: '5,000',
    priceDetail: '/month',
    description: 'Maximize your flywheel with expert leadership.',
    impact: 'Strategic growth → Compound success',
    features: [
      'All Controller features',
      'Monthly strategy meetings',
      'Strategic financial planning',
      'Growth strategy development',
      'Investment planning',
      'M&A advisory',
      'Board & investor relations'
    ],
    cta: 'Schedule Discovery Call',
    mostPopular: false,
    accent: 'from-brand-primary/5'
  }
]

export default function PricingSection() {
  return (
    <div className="py-8">
      <AnimateInView>
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-5xl lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tierIdx * 0.2 }}
              className={`relative rounded-3xl p-8 ${
                tier.mostPopular
                  ? 'bg-gray-900 text-white shadow-2xl ring-1 ring-gray-900'
                  : 'bg-gradient-to-b ${tier.accent} to-white/60 backdrop-blur-sm ring-1 ring-gray-900/10'
              }`}
            >
              {tier.mostPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      tier.mostPopular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className={`mt-4 text-sm leading-6 ${
                  tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                }`}>{tier.description}</p>
                <div className="mt-2">
                  <div className={`flex items-center gap-2 text-xs ${
                    tier.mostPopular ? 'text-brand-primary' : 'text-brand-primary'
                  }`}>
                    <ArrowPathIcon className="w-3 h-3" />
                    {tier.impact}
                  </div>
                </div>
                <div className="mt-6">
                  <div className={`text-xs ${tier.mostPopular ? 'text-gray-300' : 'text-gray-500'}`}>
                    Prices starting at
                  </div>
                  <p className="flex items-baseline gap-x-1">
                    <span
                      className={`text-4xl font-bold tracking-tight ${
                        tier.mostPopular ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      ${tier.price}
                    </span>
                    <span
                      className={`text-sm font-semibold leading-6 ${
                        tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {tier.priceDetail}
                    </span>
                  </p>
                </div>
                <ul
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={`h-5 w-5 flex-none ${
                          tier.mostPopular ? 'text-white' : 'text-brand-primary'
                        }`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 group ${
                    tier.mostPopular
                      ? 'bg-white text-gray-900 hover:bg-gray-50 focus-visible:outline-white'
                      : 'bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-brand-primary'
                  }`}
                >
                  {tier.cta}
                  <ArrowRightIcon className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimateInView>

      <AnimateInView delay={0.2}>
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            Each tier amplifies your flywheel effect, creating exponential growth potential.
            All packages include dedicated support and our commitment to accelerating your success.
          </p>
        </div>
      </AnimateInView>
    </div>
  )
} 