'use client'

import React from 'react'
import { motion } from 'framer-motion'

const integrationCategories = [
  {
    name: 'Accounting',
    tools: ['QuickBooks Online', 'QuickBooks Desktop', 'QuickBooks Enterprise'],
    description: 'Your financial core. We work with every version of QuickBooks — Online, Desktop, and Enterprise — and build from there.',
    color: 'emerald',
  },
  {
    name: 'Project Management',
    tools: ['Monday.com', 'Asana', 'ClickUp', 'Basecamp', 'Custom Tools'],
    description: 'We connect your project data to your financials so you see profitability per project, per client, in real time.',
    color: 'blue',
  },
  {
    name: 'Time Tracking',
    tools: ['Harvest', 'Toggl', 'Clockify', 'Built-in PM Timers'],
    description: 'Hours logged become dollars calculated. We pipe time data directly into your cost analysis and profitability dashboards.',
    color: 'purple',
  },
  {
    name: 'Payroll & HR',
    tools: ['Gusto', 'ADP', 'Paychex', 'OnPay'],
    description: 'Payroll data flows into your books automatically and feeds into true labor cost calculations per project and department.',
    color: 'amber',
  },
  {
    name: 'Communication',
    tools: ['Slack', 'Microsoft Teams'],
    description: 'Financial alerts, approval workflows, and key metrics delivered where your team already works.',
    color: 'rose',
  },
  {
    name: 'CRM & Sales',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive'],
    description: 'Pipeline data meets financial forecasting. Know what&apos;s closing and how it impacts cash flow before it hits the books.',
    color: 'sky',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Audit Your Stack',
    description: 'We map every tool your business runs on — accounting, operations, people, communication — and identify where data is siloed or leaking.',
  },
  {
    step: '02',
    title: 'Design the Architecture',
    description: 'We design the integration flow and dashboard layout around your specific business questions. What do you need to see? What decisions do you make weekly?',
  },
  {
    step: '03',
    title: 'Build & Connect',
    description: 'We wire the systems together — API integrations, automated data flows, custom middleware where needed. Your data starts flowing in real time.',
  },
  {
    step: '04',
    title: 'Custom Dashboards',
    description: 'We build the dashboards that answer your actual questions: project profitability, labor costs, cash runway, departmental P&Ls, client-level metrics.',
  },
  {
    step: '05',
    title: 'Ongoing Management',
    description: 'We don&apos;t just build and leave. Your Flywheel team manages the books, monitors the dashboards, and flags issues proactively. The system gets smarter over time.',
  },
]

const useCases = [
  {
    title: 'Professional Services Firm',
    size: '30 employees, $4M revenue',
    problem: 'Couldn&apos;t tell which clients were profitable. Time tracking lived in Harvest, projects in Monday.com, billing in QBO. It took 3 weeks after month-end to understand margins.',
    solution: 'Integrated Harvest + Monday.com + QBO into a unified dashboard. Now the founder sees real-time project profitability and knows within 48 hours when a project is trending over budget.',
    outcomes: ['Real-time project margins', '3 weeks → 2 days for financial clarity', 'Identified 3 unprofitable client relationships'],
  },
  {
    title: 'Growing E-Commerce Brand',
    size: '15 employees, $6M revenue',
    problem: 'Inventory costs, ad spend, and revenue lived in different systems. The founder was making inventory decisions based on gut feel and stale spreadsheets.',
    solution: 'Connected Shopify + ad platforms + QBO + payroll into a command center. Built custom dashboards showing true unit economics, contribution margin by product line, and cash flow forecasting.',
    outcomes: ['True unit economics per SKU', 'Cash flow forecasting 8 weeks out', '22% improvement in inventory turns'],
  },
]

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', ring: 'ring-purple-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', ring: 'ring-rose-200' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-700', ring: 'ring-sky-200' },
}

export default function ConnectedFinancePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <div className="relative bg-gray-900 pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#06966A20,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#06966A10,_transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <span className="inline-flex text-emerald-400 text-lg font-semibold">
                Connected Finance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Your Entire Business.{' '}
                <span className="text-emerald-400">One Financial Picture.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                We integrate your QuickBooks with your project management, time tracking, payroll, and communication tools — then build custom dashboards that give you complete financial clarity in real time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-emerald-500 transition-all duration-200"
                >
                  Book a Discovery Call
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Your Bookkeeper Sees One System.{' '}
                <span className="text-gray-400">You Deserve the Full Picture.</span>
              </h2>
              <p className="text-xl text-gray-600">
                Traditional outsourced bookkeeping starts and ends with QuickBooks. But your business doesn&apos;t run on QuickBooks alone. Revenue, costs, time, people, and projects are scattered across a half-dozen tools — and the financial story they tell individually is incomplete.
              </p>
            </motion.div>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span className="text-sm font-semibold uppercase tracking-wider">Typical Bookkeeper</span>
              </div>
              <ul className="space-y-4">
                {[
                  'Logs into QBO, categorizes transactions',
                  'Sends you a P&L 3 weeks after month-end',
                  'No visibility into project profitability',
                  'Payroll is a separate, disconnected process',
                  'You toggle between 5+ tools for the full picture',
                  'Decisions made on stale, incomplete data',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <svg className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-2xl p-8 ring-1 ring-emerald-100"
            >
              <div className="flex items-center gap-2 text-emerald-600 mb-6">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold uppercase tracking-wider">Flywheel Connected Finance</span>
              </div>
              <ul className="space-y-4">
                {[
                  'Every system integrated into one data layer',
                  'Real-time dashboards updated continuously',
                  'Project profitability visible at any moment',
                  'Payroll feeds directly into cost analysis',
                  'One dashboard — accounting, ops, people, unified',
                  'Decisions made on live, complete data',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Connect */}
      <div className="relative py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                What We Connect
              </h2>
              <p className="text-lg text-gray-600">
                We work with the tools you already use. No ripping and replacing — just wiring everything together.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {integrationCategories.map((category, index) => {
              const colors = colorMap[category.color]
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm ring-1 ring-gray-100"
                >
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} ring-1 ${colors.ring}`}>
                    {category.name}
                  </div>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{category.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span key={tool} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                How We Build Your Command Center
              </h2>
              <p className="text-lg text-gray-600">
                Every engagement starts with understanding your business. No two setups are the same.
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px h-full bg-emerald-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="relative py-20 sm:py-28 bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#06966A15,_transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                What This Looks Like in Practice
              </h2>
              <p className="text-lg text-gray-300">
                Representative examples of how connected finance transforms businesses like yours.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-emerald-400 text-sm font-medium">{useCase.size}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Challenge</p>
                    <p className="text-gray-300 text-sm">{useCase.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">What We Built</p>
                    <p className="text-gray-300 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Results</p>
                    <ul className="space-y-2">
                      {useCase.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-2 text-sm text-emerald-300">
                          <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative py-20 sm:py-28 bg-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#06966A40,_transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to See Your Whole Business in One Place?
            </h2>
            <p className="text-xl text-emerald-100">
              Book a discovery call. We&apos;ll map your current stack, identify the gaps, and show you what a connected financial command center looks like for your business.
            </p>
            <a
              href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-sm hover:bg-emerald-50 transition-all duration-200"
            >
              Book Discovery Call
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
