'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import { DocumentTextIcon, ChartBarIcon, CurrencyDollarIcon, ArrowPathIcon, ClipboardDocumentCheckIcon, CalculatorIcon, BanknotesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const services = [
  {
    id: 'bookkeeping',
    name: 'Bookkeeping Services',
    description: 'Get crystal-clear financial clarity with books you can trust. We handle the details so you can focus on growing your agency.',
    icon: DocumentTextIcon,
    features: [
      {
        name: 'Peace of Mind Financials',
        description: 'Monthly statements you can trust, delivered on time, every time. No more wondering about your numbers.',
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: 'Agency-Specific Revenue Tracking',
        description: 'Smart tracking of retainers, projects, and recurring revenue that matches how agencies really work.',
        icon: CalculatorIcon,
      },
      {
        name: 'Proactive Cash Management',
        description: 'Stay ahead of cash flow needs with forecasting and optimization designed for agency growth.',
        icon: BanknotesIcon,
      },
      {
        name: 'Seamless Tech Integration',
        description: 'Your favorite tools working together perfectly - QuickBooks, Xero, and agency management platforms.',
        icon: ArrowPathIcon,
      },
    ],
    cta: 'Get Started',
  },
  {
    id: 'cfo',
    name: 'Strategic Financial Leadership',
    description: 'Transform your financial data into strategic insights that drive growth and profitability.',
    icon: ChartBarIcon,
    features: [
      {
        name: 'Growth Strategy Development',
        description: 'Create and execute financial strategies that support your agency\'s growth goals.',
        icon: ChartBarIcon,
      },
      {
        name: 'Profitability Analysis',
        description: 'Identify opportunities to improve margins and optimize your agency\'s financial performance.',
        icon: CalculatorIcon,
      },
      {
        name: 'Cash Flow Optimization',
        description: 'Ensure healthy cash flow with proactive planning and management strategies.',
        icon: BanknotesIcon,
      },
      {
        name: 'Strategic Decision Support',
        description: 'Get expert guidance for key business decisions, backed by data and industry expertise.',
        icon: ClipboardDocumentCheckIcon,
      },
    ],
    cta: 'Scale Your Agency',
  },
  {
    id: 'tax',
    name: 'Tax Services',
    description: 'Stop overpaying taxes. Our agency-focused strategies help you keep more of what you\'ve earned.',
    icon: CurrencyDollarIcon,
    features: [
      {
        name: 'Strategic Tax Planning',
        description: 'Proactive strategies that reduce your tax burden while supporting your growth goals.',
        icon: CalculatorIcon,
      },
      {
        name: 'Structure Optimization',
        description: 'Ensure your business structure supports both tax efficiency and scaling plans.',
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: 'Compliance Management',
        description: 'Stay ahead of deadlines and requirements with our proactive approach.',
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: 'Tax Savings Opportunities',
        description: 'We find every legitimate opportunity to reduce your tax burden and reinvest in growth.',
        icon: BanknotesIcon,
      },
    ],
    cta: 'Save on Taxes',
  },
]

export default function ServicesPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Services That Power Your Growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your agency\'s finances from a source of stress into a powerful growth engine.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="space-y-24">
          {services.map((service, index) => (
            <AnimateInView key={service.id} delay={index * 0.1}>
              <div className="relative">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="space-y-6">
                    <div className="flex items-center gap-x-3">
                      <service.icon className="h-12 w-12 text-emerald-600" />
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        {service.name}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600">{service.description}</p>
                    <div>
                      <a
                        href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-emerald-600/10 hover:bg-emerald-500 transition-all duration-200 hover:scale-105 hover:shadow-emerald-600/20"
                      >
                        {service.cta}
                        <ArrowRightIcon className="ml-2.5 h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="relative group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100/50 transition-all duration-200"
                      >
                        <div className="flex items-center gap-x-3">
                          <feature.icon className="h-6 w-6 text-emerald-600" />
                          <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                        </div>
                        <p className="mt-3 text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="relative">
            <div className="absolute inset-0">
              <div className="h-1/3 bg-gradient-to-b from-emerald-50/50" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Ready to Transform Your Agency's Finances?
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Book a discovery call to discuss how we can help you achieve your financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-emerald-600/10 hover:bg-emerald-500 transition-all duration-200 hover:scale-105 hover:shadow-emerald-600/20"
            >
              Book Discovery Call
              <ArrowRightIcon className="ml-2.5 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 