'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const integrations = [
  { name: 'QuickBooks Online', short: 'QBO', category: 'Accounting' },
  { name: 'QB Desktop', short: 'QBD', category: 'Accounting' },
  { name: 'QB Enterprise', short: 'QBE', category: 'Accounting' },
  { name: 'Project Management', short: 'PM', category: 'Operations' },
  { name: 'Time Tracking', short: 'Time', category: 'Operations' },
  { name: 'Payroll', short: 'Pay', category: 'People' },
  { name: 'Slack', short: 'Slack', category: 'Communication' },
  { name: 'CRM', short: 'CRM', category: 'Sales' },
]

const outcomes = [
  {
    title: 'Real-Time Project Profitability',
    description: 'See which projects and clients actually make you money before the month closes, not after.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'True Labor Costs',
    description: 'Time tracking meets payroll meets project budgets. Know your actual cost per hour, per project, per client.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Cash Flow Visibility',
    description: 'Spot problems weeks before they hit. Your receivables, payables, and runway, all in one view.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'One Dashboard, Every System',
    description: 'Stop toggling between 5 tabs. Your entire financial picture, from accounting to ops to people, all unified.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
]

export default function ConnectedFinanceSection() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="inline-flex text-emerald-600 text-base sm:text-lg font-semibold">
              What Makes Flywheel Different
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              We Don&apos;t Just Do Your Books.{' '}
              <span className="text-emerald-600">We Connect Your Entire Business.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Most bookkeepers see one system. We wire together every tool your business runs on and give you a single dashboard with the full picture.
            </p>
          </motion.div>
        </div>

        {/* Integration Hub Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-20 sm:mb-24"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* The Hub */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-900/5 ring-1 ring-gray-900/5 p-6 sm:p-10 lg:p-12">
              {/* Pain → Solution narrative */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10 sm:mb-12">
                {/* The Problem */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-red-500">
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-wider">The Problem</span>
                  </div>
                  <p className="text-gray-900 font-medium text-lg">
                    Your business runs on 5+ disconnected tools.
                  </p>
                  <p className="text-gray-600">
                    Your accounting lives in QuickBooks. Project data is in another tool. Time tracking is somewhere else. Payroll is separate. Your team communicates in Slack. None of it talks to each other, so you\'re making decisions on incomplete data.
                  </p>
                </div>

                {/* The Solution */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-wider">Our Approach</span>
                  </div>
                  <p className="text-gray-900 font-medium text-lg">
                    We build you a connected financial command center.
                  </p>
                  <p className="text-gray-600">
                    We integrate your QuickBooks with your project management, time tracking, payroll, and communication tools, then build custom dashboards that show you the real story. Real-time. In one place.
                  </p>
                </div>
              </div>

              {/* Integration Flow Visual */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-50/50 rounded-2xl" />
                <div className="relative p-6 sm:p-8">
                  {/* Integration badges flowing into center */}
                  <div className="flex flex-col items-center gap-6">
                    {/* Source Systems */}
                    <div className="w-full">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 text-center">Your Tools</p>
                      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {integrations.map((item, i) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.05) }}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-sm ring-1 ring-gray-200 text-sm font-medium text-gray-700"
                          >
                            <span className="h-2 w-2 rounded-full bg-gray-300" />
                            <span className="hidden sm:inline">{item.name}</span>
                            <span className="sm:hidden">{item.short}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Flow Arrow */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-6 bg-gradient-to-b from-gray-200 to-emerald-300" />
                      <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                      </svg>
                    </div>

                    {/* Flywheel Hub */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="w-full max-w-md"
                    >
                      <div className="bg-emerald-600 rounded-2xl p-5 sm:p-6 text-center shadow-lg shadow-emerald-600/20">
                        <p className="text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-1">Flywheel</p>
                        <p className="text-white text-lg sm:text-xl font-bold">Your Financial Command Center</p>
                        <p className="text-emerald-100 text-sm mt-1">Custom dashboards. Real-time data. Full clarity.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (index * 0.1) }}
              className="relative group"
            >
              <div className="space-y-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-600">
                  {outcome.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{outcome.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{outcome.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/connected-finance"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600/10 px-8 py-4 text-lg font-semibold text-emerald-600 hover:bg-emerald-600/20 transition-all duration-200"
          >
            See How It Works
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
