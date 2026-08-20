'use client'

import React from 'react'
import Link from 'next/link'
import ConnectedFinanceSection from '@/components/ConnectedFinanceSection'
import HeroSection from '@/components/HeroSection'
import ComparisonTable from '@/components/ComparisonTable'
import BookingSection from '@/components/BookingSection'
import ReviewCarousel from '@/components/ReviewCarousel'
import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative">
      {/* Subtle background motion behind the lighter sections below.
          The hero paints its own opaque background over this. */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Hero */}
      <HeroSection />

      {/* Wave transition out of the dark hero */}
      <div className="w-full text-gray-900 leading-[0] -mt-px">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Services Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,_#06966A05,_transparent_50%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-flex text-emerald-600 text-lg font-semibold">
                Comprehensive Financial Services
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Everything Your Business Needs to{' '}
                <span className="text-emerald-600">Grow</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From day-to-day operations to strategic planning, we provide the financial expertise businesses need to grow from $1M to $20M+
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Core Operations',
                description: 'Expert handling of your day-to-day financial operations, from bookkeeping to payroll.',
                features: ['Monthly Bookkeeping', 'AP & AR Management', 'Payroll Services', 'Financial Reporting'],
                icon: BuildingOfficeIcon,
                color: 'emerald',
              },
              {
                title: 'Strategic Leadership',
                description: 'High-level financial guidance and strategy to fuel your business\'s growth.',
                features: ['Fractional CFO', 'Cash Flow Planning', 'Growth Strategy', 'KPI Tracking'],
                icon: ChartBarIcon,
                color: 'blue',
              },
              {
                title: 'Tax & Compliance',
                description: 'Proactive tax planning and compliance to optimize your business\'s tax position.',
                features: ['Tax Planning', 'Tax Preparation', 'Entity Structure', 'Compliance'],
                icon: ArrowTrendingUpIcon,
                color: 'purple',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-gray-900/5 transform transition-transform group-hover:scale-[1.025]" />
                <div className="relative p-8">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${({emerald: 'bg-emerald-600/10', blue: 'bg-blue-600/10', purple: 'bg-purple-600/10'} as Record<string, string>)[service.color]}`}>
                    <service.icon className={`h-6 w-6 ${({emerald: 'text-emerald-600', blue: 'text-blue-600', purple: 'text-purple-600'} as Record<string, string>)[service.color]}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-emerald-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600/10 px-8 py-4 text-lg font-semibold text-emerald-600 hover:bg-emerald-600/20 transition-all duration-200"
            >
              View All Services
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Connected Finance Section */}
      <ConnectedFinanceSection />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Industry Focus */}
      <div className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#06966A20,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_#1A2B4920,_transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-flex text-emerald-400 text-lg font-semibold">
                Built for Growth-Focused Businesses
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Specialized Financial Expertise for{' '}
                <span className="text-emerald-400">Modern Businesses</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We understand the unique financial challenges of growing businesses. Our solutions are tailored to help you scale efficiently and profitably.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Professional Services',
                description: 'Optimize cash flow and profitability with retainer and project-based revenue streams.',
                features: ['Revenue Recognition', 'Project Costing', 'Margin Analysis'],
                icon: RocketLaunchIcon,
                color: 'from-purple-500/10 to-purple-500/5',
              },
              {
                name: 'Technology',
                description: 'Track project profitability and manage resource allocation effectively.',
                features: ['Resource Tracking', 'Project Budgeting', 'Time Analysis'],
                icon: SparklesIcon,
                color: 'from-amber-500/10 to-amber-500/5',
              },
              {
                name: 'E-commerce',
                description: 'Scale your SaaS and development services with strategic financial planning.',
                features: ['MRR Tracking', 'Dev Cost Analysis', 'Growth Metrics'],
                icon: LightBulbIcon,
                color: 'from-blue-500/10 to-blue-500/5',
              },
              {
                name: 'Manufacturing',
                description: 'Balance creative excellence with financial performance and growth.',
                features: ['Project ROI', 'Resource Planning', 'Cost Control'],
                icon: BuildingOfficeIcon,
                color: 'from-rose-500/10 to-rose-500/5',
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl transform transition-transform group-hover:scale-[1.025]" />
                <div className="relative p-8">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.color}`}>
                    <industry.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{industry.name}</h3>
                  <p className="mt-2 text-gray-300">{industry.description}</p>
                  
                  <ul className="mt-6 space-y-3">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 text-emerald-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400/10 px-8 py-4 text-lg font-semibold text-emerald-400 hover:bg-emerald-400/20 transition-all duration-200"
            >
              View Success Stories
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,_#06966A05,_transparent_50%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-flex text-emerald-600 text-lg font-semibold">
                Client Success Stories
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Trusted by Growing{' '}
                <span className="text-emerald-600">Businesses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we've helped businesses like yours transform their financial operations and accelerate growth.
              </p>
            </motion.div>
          </div>

          <div className="mt-12">
            <ReviewCarousel />
          </div>

          {/* Trust Indicators */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: '50+',
                label: 'Active Clients',
                description: 'Trust us with their finances',
              },
              {
                stat: '98%',
                label: 'Client Retention',
                description: 'Long-term partnerships',
              },
              {
                stat: '5.0',
                label: 'Star Rating',
                description: 'On Google Reviews',
              },
              {
                stat: '10+',
                label: 'Years Experience',
                description: 'In business finance',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-emerald-600/5 transform transition-transform group-hover:scale-[1.025]" />
                <div className="relative p-8 text-center">
                  <p className="text-4xl font-bold text-emerald-600">{item.stat}</p>
                  <p className="mt-2 font-medium text-gray-900">{item.label}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <BookingSection />
    </main>
  )
} 