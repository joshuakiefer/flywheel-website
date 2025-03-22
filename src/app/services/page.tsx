'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import { ChartBarIcon, CurrencyDollarIcon, DocumentTextIcon, PresentationChartLineIcon, ArrowPathIcon, ClipboardDocumentCheckIcon, CalculatorIcon, BuildingOfficeIcon, ChartPieIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

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
    name: 'CFO Services',
    description: 'Your personal financial strategist, helping transform your agency from good to exceptional with data-backed guidance.',
    icon: ChartBarIcon,
    features: [
      {
        name: 'Growth Strategy',
        description: 'Turn your growth goals into reality with clear financial roadmaps and milestone tracking.',
        icon: ChartPieIcon,
      },
      {
        name: 'Profit Maximization',
        description: 'Uncover hidden opportunities and optimize every aspect of your agency\'s finances.',
        icon: PresentationChartLineIcon,
      },
      {
        name: 'Decision Support',
        description: 'Get confident answers to your biggest questions about hiring, scaling, and investing.',
        icon: ChartBarIcon,
      },
      {
        name: 'Custom Insights',
        description: 'Beautiful, actionable dashboards that tell the story behind your numbers.',
        icon: BuildingOfficeIcon,
      },
    ],
    cta: 'Transform Your Agency',
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
        icon: BuildingOfficeIcon,
      },
      {
        name: 'Peace of Mind Compliance',
        description: 'Stay ahead of deadlines and requirements with our proactive approach.',
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: 'Maximum Savings',
        description: 'We find every legitimate opportunity to reduce your tax burden and reinvest in growth.',
        icon: CurrencyDollarIcon,
      },
    ],
    cta: 'Save on Taxes',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="container-custom">
        <AnimateInView>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Services That Power Your Growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to transform your agency\'s finances from a source of stress into a powerful growth engine.
            </p>
          </div>
        </AnimateInView>

        <div className="mt-24 space-y-24">
          {services.map((service, serviceIdx) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28"
            >
              <AnimateInView delay={serviceIdx * 0.1}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary bg-opacity-10">
                      <service.icon className="h-8 w-8 text-brand-primary" aria-hidden="true" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center gap-x-2"
                      >
                        {service.cta}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-8">
                      What\'s Included
                    </h3>
                    <div className="grid gap-8 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div key={feature.name} className="relative">
                          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                            <feature.icon className="h-5 w-5 flex-none text-brand-primary" aria-hidden="true" />
                            {feature.name}
                          </dt>
                          <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateInView>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-4xl mt-32">
          <AnimateInView>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Questions You Might Have
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We believe in complete transparency. Here are answers to common questions about working together.
              </p>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  How quickly can you get started?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  We move at your pace. Most clients are up and running within a week of our first chat. Our streamlined onboarding gets you results fast while ensuring a smooth transition.
                </dd>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  What makes you different from other firms?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  We exclusively serve agencies like yours. This focus means we understand your unique challenges and opportunities. Plus, you get direct access to senior team members who\'ve helped dozens of agencies scale.
                </dd>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  How do you price your services?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  We believe in transparent, value-based pricing that grows with you. We\'ll create a custom package based on your needs and goals, with clear deliverables and no surprises.
                </dd>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  What support can I expect?
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  You get direct access to your dedicated team through phone, email, and chat. We\'re here when you need us, with regular check-ins and quarterly strategy sessions to keep you on track.
                </dd>
              </div>
            </dl>
          </AnimateInView>
        </div>
      </div>
    </div>
  )
} 