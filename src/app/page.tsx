'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import AnimateInView from '@/components/AnimateInView'
import FlywheelAnimation from '@/components/FlywheelAnimation'
import ReviewCarousel from '@/components/ReviewCarousel'
import { ChartBarIcon, ArrowTrendingUpIcon, ClockIcon, CurrencyDollarIcon, BuildingOfficeIcon, RocketLaunchIcon, LightBulbIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Full-Service Financial Management',
    description: 'From day-to-day bookkeeping to strategic CFO services, we provide comprehensive financial support. Choose full-service partnership or select individual services that match your needs.',
    icon: ChartBarIcon,
  },
  {
    name: 'Core Financial Operations',
    description: 'Expert handling of bookkeeping, accounting, accounts payable, invoicing, and payroll. We ensure your financial foundation is robust and efficient.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Strategic Financial Leadership',
    description: 'Access fractional Controller and CFO services for high-level financial strategy, plus integrated tax planning and preparation tailored for agencies.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Flexible Partnership Model',
    description: 'Whether you need comprehensive financial management or specific services, we adapt to your agency\'s needs. Scale services up or down as you grow.',
    icon: CurrencyDollarIcon,
  },
]

const metrics = [
  { id: 1, stat: '10+', emphasis: 'Years Experience', rest: 'serving digital agencies' },
  { id: 2, stat: '45+', emphasis: 'Active Clients', rest: 'in the $1M-$15M range' },
  { id: 3, stat: '5.0', emphasis: 'Google Rating', rest: 'based on reviews' },
]

const industryIcons = [
  {
    name: 'Digital Marketing',
    description: 'Specializing in agency cash flow',
    icon: RocketLaunchIcon,
    color: 'from-purple-500/10 to-purple-500/5',
  },
  {
    name: 'Creative Studios',
    description: 'Financial systems for retainers',
    icon: SparklesIcon,
    color: 'from-amber-500/10 to-amber-500/5',
  },
  {
    name: 'Tech Companies',
    description: 'SaaS revenue optimization',
    icon: LightBulbIcon,
    color: 'from-blue-500/10 to-blue-500/5',
  },
  {
    name: 'Design Agencies',
    description: 'Project-based forecasting',
    icon: BuildingOfficeIcon,
    color: 'from-rose-500/10 to-rose-500/5',
  },
]

export default function Home() {
  return (
    <div className="relative isolate pt-16 sm:pt-20">
      {/* Hero background effects */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00A651] to-[#1A2B49] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero section */}
      <div className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#00A65115,_transparent_40%)] animate-pulse-slower" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_#1A2B4910,_transparent_50%)] animate-pulse-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_transparent,_#00A65105,_transparent)]" />
          
          {/* Floating shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-full blur-3xl animate-float hidden sm:block" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-full blur-2xl animate-float-delayed hidden sm:block" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <AnimateInView>
                <div className="relative">
                  <div className="absolute -top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-40 h-40 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-full blur-3xl animate-pulse-slow" />
                  
                  <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 animate-fade-up">
                    <span className="block">Turn Your Agency's</span>
                    <span className="block mt-2 relative">
                      <span className="relative z-10 bg-gradient-to-r from-brand-primary to-brand-primary bg-clip-text text-transparent animate-slide-right">
                        Finances Into Fuel
                      </span>
                      <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-primary/20" viewBox="0 0 300 12" fill="currentColor">
                        <path d="M1 5.5C1 5.5 77 -2.5 150.5 5.5C224 13.5 299 5.5 299 5.5" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="1000" className="animate-draw"/>
                      </svg>
                    </span>
                  </h1>
                  
                  <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-gray-600 relative z-10 max-w-2xl mx-auto lg:mx-0 animate-fade-up [animation-delay:200ms]">
                    We partner with select agencies scaling from $1M to $15M, transforming financial complexity into a strategic advantage for sustainable growth.
                  </p>
                  
                  <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 relative z-10 animate-fade-up [animation-delay:400ms]">
                    <a
                      href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto group inline-flex items-center justify-center gap-x-2 rounded-lg bg-brand-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all duration-300 hover:scale-105"
                    >
                      Schedule Your Discovery Call
                      <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </AnimateInView>
            </div>

            {/* Right Column */}
            <div className="mt-8 lg:mt-0">
              <AnimateInView delay={0.2}>
                <div className="relative lg:pl-12">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-gray-900/5 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-brand-primary/5 to-transparent">
                      <h3 className="text-xl font-semibold text-gray-900">Our Services</h3>
                      <p className="mt-2 text-base text-gray-600">Comprehensive financial solutions for growing agencies</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      <div className="p-4 sm:p-6 flex items-start gap-4 hover:bg-white/50 transition-colors duration-200">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                            <BuildingOfficeIcon className="w-5 h-5 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">Core Operations</h4>
                          <p className="mt-1 text-sm text-gray-600">Bookkeeping • AP • Invoicing • Payroll</p>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 flex items-start gap-4 hover:bg-white/50 transition-colors duration-200">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                            <ChartBarIcon className="w-5 h-5 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">Strategic Leadership</h4>
                          <p className="mt-1 text-sm text-gray-600">Fractional CFO • Controller • Cash Flow Planning</p>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 flex items-start gap-4 hover:bg-white/50 transition-colors duration-200">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                            <CurrencyDollarIcon className="w-5 h-5 text-brand-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">Tax & Compliance</h4>
                          <p className="mt-1 text-sm text-gray-600">Planning • Preparation • Optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mt-8 sm:mt-16">
        <div className="container-custom">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Financial Services</h2>
              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Your one-stop solution for agency finance and accounting. Choose full-service partnership or individual services that match your needs.
              </p>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <div className="mx-auto mt-8 sm:mt-12 max-w-7xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-14 sm:pl-16 bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/80 transition-colors duration-200">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-3 sm:left-4 top-4 sm:top-6 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-brand-primary">
                        <feature.icon className="h-5 sm:h-6 w-5 sm:w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimateInView>
        </div>
      </div>

      {/* Flywheel section */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Flywheel Effect</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              When your financial operations work in harmony, each element builds upon the last—creating unstoppable momentum for your agency.
            </p>
          </div>
          <FlywheelAnimation />
        </div>
      </div>

      {/* Reviews section */}
      <div className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Hear from agency owners who have transformed their financial operations.
            </p>
          </div>
          <div className="mt-8 sm:mt-12">
            <ReviewCarousel />
          </div>
        </div>
      </div>

      {/* Updated background animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#00A65110,_transparent_50%)] animate-pulse-slower" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_#1A2B4908,_transparent_60%)] animate-pulse-slow" />
        <div className="absolute w-[200%] aspect-square -top-1/2 -left-1/2 bg-[conic-gradient(from_0deg_at_50%_50%,#00A65102_0deg,#1A2B4902_120deg,#00000000_240deg)] animate-slow-spin" />
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00A651] to-[#1A2B49] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <CTASection />
    </div>
  )
} 