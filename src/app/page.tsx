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
import { ChartBarIcon, ArrowTrendingUpIcon, ClockIcon, CurrencyDollarIcon, BuildingOfficeIcon, RocketLaunchIcon, LightBulbIcon, SparklesIcon, ArrowRightIcon, BookOpenIcon, CalculatorIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Bookkeeping',
    description: 'Clean books and accurate financial statements that give you clarity on your business performance.',
    icon: BookOpenIcon,
  },
  {
    name: 'CFO Services',
    description: 'Strategic guidance and financial planning to help you make data-driven decisions.',
    icon: ChartBarIcon,
  },
  {
    name: 'Tax Planning',
    description: 'Proactive tax planning and preparation tailored for your business.',
    icon: CalculatorIcon,
  },
]

const stats = [
  { id: 1, stat: '45+', emphasis: 'Combined Years Experience', rest: 'serving growing businesses' },
  { id: 2, stat: '$150M+', emphasis: 'Revenue Managed', rest: 'for our clients' },
  { id: 3, stat: '4.9', emphasis: 'Star Rating', rest: 'on Google Reviews' },
]

const industries = [
  { id: 1, name: 'Professional Services' },
  { id: 2, name: 'Technology' },
  { id: 3, name: 'E-commerce' },
  { id: 4, name: 'Manufacturing' },
  { id: 5, name: 'Healthcare' },
  { id: 6, name: 'Construction' },
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
      <div className="relative isolate">
        {/* Hero section */}
        <div className="relative pt-12 sm:pt-16 lg:pt-20">
          {/* Video Background */}
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
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-white/50" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative min-h-[70vh] flex items-center">
              <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-8 lg:pb-12">
                <div className="grid lg:grid-cols-2 gap-x-16 gap-y-6 items-center">
                  {/* Left Column - Main Content */}
                  <div className="w-full max-w-2xl mx-auto lg:mx-0">
                    <div className="space-y-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-base sm:text-lg font-semibold ring-1 ring-emerald-100/50">
                        For Businesses Scaling $1M to $20M
                      </span>

                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                        Financial{' '}
                        <span className="relative">
                          <span className="relative z-10 text-emerald-600">Clarity</span>
                        </span>
                        {' '}
                        <br className="hidden sm:block" />
                        Fuels Business{' '}
                        <span className="relative inline-block">
                          <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                            Growth
                          </span>
                        </span>
                      </h1>

                      <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
                        Transform your business's financial complexity into a strategic advantage with expert bookkeeping, CFO services, and tax planning.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        <a
                          href="https://www.calendar.com/joshkiefercpa/meeting-flywheel/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl shadow-emerald-600/10 hover:bg-emerald-500 transition-all duration-200 hover:scale-105"
                        >
                          Book Discovery Call
                          <ArrowRightIcon className="ml-2.5 h-5 w-5" />
                        </a>
                        <Link
                          href="/services"
                          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-emerald-600 ring-2 ring-emerald-600/10 hover:bg-emerald-50 transition-all duration-200"
                        >
                          View Services
                        </Link>
                      </div>

                      {/* Trust Indicators */}
                      <div className="flex items-center gap-x-6 pt-4 sm:pt-6 text-sm text-gray-600">
                        <div className="flex items-center gap-x-2 px-4 py-2 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5">
                          <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          <span>Trusted by 50+ Growing Businesses</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Stats Grid */}
                  <div className="relative w-full">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                      {[
                        { stat: '50+', label: 'Active Clients', sublabel: 'Growing $1M-$20M' },
                        { stat: '$150M+', label: 'Revenue Managed', sublabel: 'for our clients' },
                        { stat: '45+', label: 'Combined Years Experience', sublabel: 'serving growing businesses' },
                        { stat: '4.9', label: 'Star Rating', sublabel: 'on Google Reviews' },
                      ].map((item, index) => (
                        <div
                          key={item.label}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-emerald-600/5 ring-1 ring-emerald-100/20 transform transition-transform group-hover:scale-105" />
                          <div className="relative p-4 sm:p-6 lg:p-8 text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-emerald-600">{item.stat}</p>
                            <p className="mt-2 text-base font-medium text-gray-900">{item.label}</p>
                            <p className="text-sm text-gray-500">{item.sublabel}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
                label: 'Average Rating',
                description: 'Based on client reviews',
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
                  Ready to Grow Your Business?
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Transform Your Business's{' '}
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
                  Join the growing number of businesses that trust us with their financial success. Book a discovery call to learn how we can help your business thrive.
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