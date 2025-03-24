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
import SectionHeader from '@/components/SectionHeader'
import { ChartBarIcon, ArrowTrendingUpIcon, ClockIcon, CurrencyDollarIcon, BuildingOfficeIcon, RocketLaunchIcon, LightBulbIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

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
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-white">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#06966A10,_transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8 items-center">
            {/* Left Column - Main Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="inline-flex text-emerald-600 text-lg font-semibold">
                  For Agencies Scaling $1M to $15M
                </span>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Financial{' '}
                  <span className="text-emerald-600">Clarity</span>
                  <br />
                  Fuels Agency{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                      Growth
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-600/30 rounded-full" />
                  </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-xl">
                  Transform your agency's financial complexity into a strategic advantage with expert bookkeeping, CFO services, and tax planning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-emerald-600/10 hover:bg-emerald-500 transition-all duration-200 hover:scale-105 hover:shadow-emerald-600/20"
                  >
                    Book Discovery Call
                    <ArrowRightIcon className="ml-2.5 h-5 w-5" />
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-emerald-600 ring-2 ring-emerald-600/10 hover:bg-emerald-50 transition-all duration-200"
                  >
                    View Services
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-x-6 pt-8 text-sm text-gray-600">
                  <div className="flex items-center gap-x-2">
                    <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Trusted by 50+ Agencies</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { stat: '50+', label: 'Active Agencies', sublabel: 'Growing $1M-$15M' },
                  { stat: '$150M+', label: 'Revenue Managed', sublabel: 'Annually' },
                  { stat: '45+', label: 'Years Experience', sublabel: 'Combined Agency Finance' },
                  { stat: '98%', label: 'Client Retention', sublabel: 'Long-term Partners' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-emerald-600/5 transform transition-transform group-hover:scale-105" />
                    <div className="relative p-8 text-center">
                      <p className="text-4xl font-bold text-emerald-600">{item.stat}</p>
                      <p className="mt-2 font-medium text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.sublabel}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
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
                Everything Your Agency Needs to{' '}
                <span className="text-emerald-600">Scale</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From day-to-day operations to strategic planning, we provide the financial expertise agencies need to grow from $1M to $15M+
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
                description: 'High-level financial guidance and strategy to fuel your agency\'s growth.',
                features: ['Fractional CFO', 'Cash Flow Planning', 'Growth Strategy', 'KPI Tracking'],
                icon: ChartBarIcon,
                color: 'blue',
              },
              {
                title: 'Tax & Compliance',
                description: 'Proactive tax planning and compliance to optimize your agency\'s tax position.',
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
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-${service.color}-600/10`}>
                    <service.icon className={`h-6 w-6 text-${service.color}-600`} aria-hidden="true" />
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
                Built for Digital Agencies
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Specialized Financial Expertise for{' '}
                <span className="text-emerald-400">Modern Agencies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We understand the unique financial challenges of digital agencies. Our solutions are tailored to help you scale efficiently and profitably.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Digital Marketing',
                description: 'Optimize cash flow and profitability with retainer and project-based revenue streams.',
                features: ['Revenue Recognition', 'Project Costing', 'Margin Analysis'],
                icon: RocketLaunchIcon,
                color: 'from-purple-500/10 to-purple-500/5',
              },
              {
                name: 'Creative Studios',
                description: 'Track project profitability and manage resource allocation effectively.',
                features: ['Resource Tracking', 'Project Budgeting', 'Time Analysis'],
                icon: SparklesIcon,
                color: 'from-amber-500/10 to-amber-500/5',
              },
              {
                name: 'Tech Companies',
                description: 'Scale your SaaS and development services with strategic financial planning.',
                features: ['MRR Tracking', 'Dev Cost Analysis', 'Growth Metrics'],
                icon: LightBulbIcon,
                color: 'from-blue-500/10 to-blue-500/5',
              },
              {
                name: 'Design Agencies',
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
                Trusted by Leading{' '}
                <span className="text-emerald-600">Digital Agencies</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we\'ve helped agencies like yours transform their financial operations and accelerate growth.
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
                label: 'Active Agencies',
                description: 'Trust us with their finances',
              },
              {
                stat: '98%',
                label: 'Client Retention',
                description: 'Long-term partnerships',
              },
              {
                stat: '5.0',
                label: 'Average Rating',
                description: 'Based on client reviews',
              },
              {
                stat: '10+',
                label: 'Years Experience',
                description: 'In agency finance',
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

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden bg-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#06966A40,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_#1A2B4940,_transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="inline-flex text-emerald-200 text-lg font-semibold">
                  Ready to Scale Your Agency?
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Transform Your Agency\'s{' '}
                  <span className="relative">
                    <span className="relative inline-block">
                      <span className="relative z-10">
                        Financial Future
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-400/30 rounded-full" />
                    </span>
                  </span>
                </h2>
                <p className="text-xl leading-8 text-emerald-100 max-w-2xl mx-auto">
                  Join the growing number of agencies that trust us with their financial success. Book a discovery call to learn how we can help your agency thrive.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
                >
                  Book Discovery Call
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
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-white ring-2 ring-white/20 hover:bg-white/10 transition-all duration-200"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
              >
                <div className="flex items-center gap-x-2 text-emerald-100">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>98% Client Retention</span>
                </div>
                <div className="flex items-center gap-x-2 text-emerald-100">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.464 3.314a.75.75 0 00-1.077-.798L5.26 4.966l3.977-1.514a.75.75 0 10-.474-1.424L3.214 4.416a.75.75 0 00-.445.832l1.458 6.5A.75.75 0 004.978 12h4.271a.75.75 0 000-1.5H5.421l-1.041-4.432 5.677-2.166a.75.75 0 00.407-.888z" />
                  </svg>
                  <span>Free Discovery Call</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 