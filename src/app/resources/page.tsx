'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import Link from 'next/link'
import { DocumentArrowDownIcon, CalculatorIcon, ChartBarIcon, DocumentTextIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const tools = [
  {
    name: 'Agency Profitability Calculator',
    description: 'Calculate your agency\'s true profitability and identify areas for improvement.',
    icon: CalculatorIcon,
    href: '/resources/profitability-calculator',
    category: 'Interactive Tool',
  },
  {
    name: 'Service Rate Calculator',
    description: 'Determine optimal billing rates based on your costs and profit targets.',
    icon: CalculatorIcon,
    href: '/resources/rate-calculator',
    category: 'Interactive Tool',
  },
  {
    name: 'Growth Readiness Assessment',
    description: 'Evaluate if your agency is financially ready to scale to the next level.',
    icon: ChartBarIcon,
    href: '/resources/growth-assessment',
    category: 'Assessment',
  },
]

const guides = [
  {
    name: 'Agency Financial Metrics Guide',
    description: 'A comprehensive guide to the key financial metrics every agency should track.',
    icon: DocumentTextIcon,
    downloadUrl: '/resources/downloads/agency-metrics-guide.pdf',
    category: 'Guide',
  },
  {
    name: 'Tax Planning Checklist',
    description: 'Essential tax planning strategies and deadlines for agency owners.',
    icon: DocumentTextIcon,
    downloadUrl: '/resources/downloads/tax-planning-checklist.pdf',
    category: 'Checklist',
  },
  {
    name: 'Financial Systems Setup Guide',
    description: 'Step-by-step guide to setting up efficient financial systems for your agency.',
    icon: DocumentTextIcon,
    downloadUrl: '/resources/downloads/financial-systems-guide.pdf',
    category: 'Guide',
  },
]

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-28">
        <div className="container-custom py-24 sm:py-32">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Agency Growth Resources
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Free tools, calculators, and guides to help optimize your agency's financial operations.
              </p>
            </div>
          </AnimateInView>

          {/* Interactive Tools */}
          <div className="mx-auto mt-16 max-w-7xl">
            <AnimateInView>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Interactive Tools
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Calculate, analyze, and optimize your agency's financial performance.
              </p>
            </AnimateInView>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <AnimateInView key={tool.name} delay={0.1}>
                  <Link
                    href={tool.href}
                    className="relative flex flex-col rounded-2xl border border-gray-200 p-8 hover:border-brand-primary/20 hover:shadow-md transition duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                      <tool.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{tool.name}</h3>
                    <p className="mt-2 flex-1 text-base text-gray-600">{tool.description}</p>
                    <div className="mt-6 flex items-center gap-x-3">
                      <span className="text-sm font-medium text-brand-primary">Try it now</span>
                      <ArrowRightIcon className="h-4 w-4 text-brand-primary" />
                    </div>
                  </Link>
                </AnimateInView>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="mx-auto mt-24 max-w-7xl">
            <AnimateInView>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Free Guides & Templates
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Download practical resources to improve your agency's financial management.
              </p>
            </AnimateInView>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <AnimateInView key={guide.name} delay={0.1}>
                  <div className="relative flex flex-col rounded-2xl border border-gray-200 p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                      <guide.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{guide.name}</h3>
                    <p className="mt-2 flex-1 text-base text-gray-600">{guide.description}</p>
                    <Link
                      href={guide.downloadUrl}
                      className="mt-6 inline-flex items-center gap-x-2 text-sm font-medium text-brand-primary hover:text-brand-primary-dark"
                    >
                      <DocumentArrowDownIcon className="h-5 w-5" />
                      Download PDF
                    </Link>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mx-auto mt-24 max-w-7xl">
            <AnimateInView>
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get New Resources First
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-gray-300">
                  Subscribe to receive new guides, tools, and financial insights directly in your inbox.
                </p>
                <form className="mx-auto mt-10 max-w-md">
                  <div className="flex gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                  aria-hidden="true"
                >
                  <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
                  <defs>
                    <radialGradient id="gradient">
                      <stop stopColor="#7775D6" />
                      <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </div>
  )
} 