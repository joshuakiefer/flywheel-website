'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Core Operations',
    id: 'core',
    priceMonthly: 'From $1,000',
    description: 'Perfect for businesses looking to establish a strong financial foundation.',
    features: [
      'Monthly Bookkeeping',
      'Financial Statement Preparation',
      'AP & AR Management',
      'Payroll Services',
      'Monthly Financial Review',
      'Basic KPI Tracking',
      'Software Setup & Support',
      'Year-Round Support',
    ],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    name: 'Controller',
    id: 'controller',
    priceMonthly: 'From $3,000',
    description: 'Ideal for businesses seeking deeper financial insights and guidance.',
    features: [
      'Everything in Core Operations',
      'Advanced Financial Planning',
      'Cash Flow Management',
      'Budget Development',
      'Advanced KPI Dashboard',
      'Monthly Strategy Sessions',
      'Team Training & Support',
      'Priority Support',
    ],
    cta: 'Scale Your Business',
    mostPopular: true,
  },
  {
    name: 'Fractional CFO',
    id: 'cfo',
    priceMonthly: 'From $5,500',
    description: 'Strategic financial leadership for scaling businesses.',
    features: [
      'Everything in Controller',
      'Strategic Financial Leadership',
      'Growth & Profitability Planning',
      'M&A Advisory',
      'Board Meeting Support',
      'Weekly Strategy Calls',
      'Executive Team Support',
      'VIP Support',
    ],
    cta: 'Transform Your Business',
    mostPopular: false,
  },
]

export default function PricingPage() {
  return (
    <main className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#06966A10,_transparent_50%)]" />
      </div>

      <div className="relative pt-32 pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="text-center">
                <h2 className="text-base font-semibold leading-7 text-emerald-600">
                  Transparent Pricing
                </h2>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Choose the Right Plan for Your
                  <span className="text-emerald-600"> Business's Growth</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                  Flexible plans designed to support your business at every stage. All
                  plans include our core financial expertise and dedicated support.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Pricing Section */}
          <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col rounded-3xl bg-white shadow-xl shadow-gray-900/5"
              >
                <div className="relative p-8 lg:p-12">
                  {tier.mostPopular && (
                    <div className="absolute -top-4 right-8 inline-flex items-center rounded-full bg-emerald-600 px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight text-emerald-600">
                        {tier.priceMonthly}
                      </span>
                      <span className="ml-1 text-sm text-gray-500">/month</span>
                    </p>
                    <p className="mt-6 text-base text-gray-600">{tier.description}</p>

                    <ul className="mt-8 space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                          </div>
                          <span className="ml-3 text-base text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 block w-full rounded-full px-6 py-4 text-center text-base font-semibold transition-all duration-200 hover:scale-105 ${
                      tier.mostPopular
                        ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/10 hover:bg-emerald-500'
                        : 'bg-emerald-600/10 text-emerald-600 hover:bg-emerald-600/20'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tax Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 lg:p-12 text-white"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Tax Services</h2>
              <p className="text-xl text-emerald-100">
                Comprehensive tax planning and preparation services tailored to your business needs
              </p>
              <div className="mt-6 inline-flex text-3xl font-bold">
                Custom Pricing
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Services Include:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckIcon className="h-6 w-6 text-emerald-300 mr-3" />
                      <span>Tax Planning & Strategy</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-6 w-6 text-emerald-300 mr-3" />
                      <span>Tax Return Preparation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-6 w-6 text-emerald-300 mr-3" />
                      <span>Entity Structure Optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Additional Benefits:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckIcon className="h-6 w-6 text-emerald-300 mr-3" />
                      <span>Year-Round Tax Support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-6 w-6 text-emerald-300 mr-3" />
                      <span>Multi-State Tax Compliance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-6 w-6 text-emerald-300 mr-3" />
                      <span>IRS Representation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-600 shadow-xl shadow-emerald-900/10 hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
                >
                  Discuss Tax Services
                  <svg
                    className="ml-2.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <div className="mx-auto max-w-3xl mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center space-y-4"
            >
              <span className="inline-flex text-emerald-600 text-lg font-semibold">
                Common Questions
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Have more questions? Book a discovery call to discuss your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 space-y-8"
            >
              {[
                {
                  question: 'What\'s included in the monthly fee?',
                  answer: 'Our monthly fee includes all core services listed in each plan, plus unlimited email support and regular check-ins. There are no hidden fees or surprise charges.',
                },
                {
                  question: 'Can I upgrade or downgrade my plan?',
                  answer: 'Yes, you can adjust your plan as your needs change. We\'ll work with you to ensure a smooth transition and that you have the right level of support.',
                },
                {
                  question: 'Do you offer custom solutions?',
                  answer: 'Absolutely! We can customize any of our plans to meet your specific business needs. We\'ll work together to create a package that aligns with your goals.',
                },
                {
                  question: 'What software do you use?',
                  answer: 'We work with leading financial software including QuickBooks, Xero, and other industry-standard tools. We\'ll help you choose the best stack for your business needs.',
                },
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 