'use client'

import React from 'react'
import { ChartBarIcon, CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import AnimateInView from './AnimateInView'
import { CheckIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Core Financial Operations',
    description: 'Essential financial services to keep your agency running smoothly',
    features: [
      'Full-service bookkeeping and accounting',
      'Accounts payable management',
      'Client invoicing and collections',
      'Payroll processing and compliance',
      'Monthly financial statements',
      'Cash flow management',
    ],
  },
  {
    name: 'Strategic Financial Leadership',
    description: 'High-level financial guidance and strategic planning',
    features: [
      'Fractional Controller services',
      'Fractional CFO partnership',
      'Financial strategy development',
      'Growth planning and forecasting',
      'KPI dashboard development',
      'Strategic decision support',
    ],
  },
  {
    name: 'Tax & Compliance',
    description: 'Comprehensive tax planning and preparation services',
    features: [
      'Agency-focused tax planning',
      'Annual tax preparation',
      'Quarterly tax management',
      'Entity structure optimization',
      'State and local compliance',
      'Tax credit identification',
    ],
  },
]

export default function ServicesSection() {
  return (
    <div className="mt-32 sm:mt-40">
      <div className="container-custom">
        <AnimateInView>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Level of Support
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Select comprehensive financial management or individual services that match your needs. All services can be engaged individually or as part of a complete solution.
            </p>
          </div>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-brand-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-base text-gray-600">
                Not sure what you need? Schedule a discovery call to discuss your agency's unique requirements.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-gray-900 group flex items-center justify-center gap-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-32 after:origin-center after:scale-x-0 after:bg-brand-primary after:transition-transform hover:after:scale-x-100"
                >
                  Explore Partnership Options
                  <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </div>
  )
} 