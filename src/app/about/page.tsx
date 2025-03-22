'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Growth Partnership',
    description: 'We help agencies like yours grow from $1M to $15M with clear financial strategies that make sense for your business.',
  },
  {
    name: 'Personal Support',
    description: 'You\'ll work directly with our experienced team who understand the unique challenges of running a creative agency.',
  },
  {
    name: 'Clear Insights',
    description: 'We turn complex financial data into clear, actionable insights that help you make confident decisions.',
  },
  {
    name: 'Direct Access',
    description: 'Need help? You\'ll always have direct access to senior team members who know your business inside and out.',
  },
  {
    name: 'Proactive Support',
    description: 'We don\'t just crunch numbers – we actively help you spot opportunities and navigate challenges.',
  },
]

const expertise = [
  'Growth Planning',
  'Revenue Optimization',
  'Cash Flow Management',
  'Tax Strategy',
  'Performance Tracking',
  'Financial Forecasting'
]

const achievements = [
  { metric: '10+', label: 'Years Supporting Agencies' },
  { metric: '100+', label: 'Happy Agency Clients' },
  { metric: '$500M+', label: 'Client Revenue Guided' },
  { metric: '96%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate pt-20 sm:pt-28">
        <div className="container-custom py-16 sm:py-24">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Your Partner in Agency Growth
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                We help creative agencies like yours build strong financial foundations for sustainable growth.
              </p>
            </div>
          </AnimateInView>

          {/* Founder section */}
          <AnimateInView delay={0.2}>
            <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
              <div className="relative lg:order-last lg:col-span-5">
                <figure className="border-l-4 border-brand-primary pl-4 sm:pl-8">
                  <blockquote className="text-lg sm:text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>
                      "I started this firm because I saw how many talented agencies were held back by financial complexity. Our mission is simple: to help you build a strong financial foundation so you can focus on what you do best – creating amazing work for your clients."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 sm:mt-8 flex items-center gap-x-4 sm:gap-x-6">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-100 flex items-center justify-center text-lg sm:text-xl font-semibold text-brand-primary">
                      JK
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900">Joshua Kiefer, CPA</div>
                      <div className="text-xs sm:text-sm leading-6 text-gray-600">Founder & CEO</div>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                  Built for Creative Agencies
                </h2>
                <div className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                  <p className="mb-4">
                    We've worked with hundreds of creative agencies, and we've seen firsthand how the right financial support can transform a good agency into a great one.
                  </p>
                  <p className="mb-4">
                    Our approach combines deep agency experience with practical financial strategies that work in the real world. No complex jargon, just clear guidance that helps you grow.
                  </p>
                  <p>
                    Whether you're looking to scale from $1M to $15M or just want better financial clarity, we're here to help you succeed on your terms.
                  </p>
                </div>

                <div className="mt-8 sm:mt-10 max-w-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">How We Help</h3>
                  <ul role="list" className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:gap-4 text-sm sm:text-base leading-7 text-gray-600 sm:grid-cols-2">
                    {expertise.map((item) => (
                      <li key={item} className="flex gap-x-3">
                        <CheckCircleIcon className="h-6 w-4 sm:h-7 sm:w-5 flex-none text-brand-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimateInView>

          {/* Stats */}
          <AnimateInView delay={0.3}>
            <div className="mx-auto mt-20 sm:mt-32">
              <dl className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {achievements.map((achievement) => (
                  <div key={achievement.label} className="flex flex-col bg-gray-400/5 p-4 sm:p-8">
                    <dt className="text-xs sm:text-sm font-semibold leading-6 text-gray-600">{achievement.label}</dt>
                    <dd className="order-first text-2xl sm:text-3xl font-semibold tracking-tight text-brand-primary">{achievement.metric}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimateInView>

          {/* Values section */}
          <AnimateInView delay={0.4}>
            <div className="mx-auto mt-20 sm:mt-32">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">Strategic Methodology</h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                  A sophisticated framework engineered specifically for agencies navigating critical growth phases.
                </p>
              </div>
              <dl className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {values.map((value) => (
                  <div key={value.name} className="flex flex-col bg-white px-4 sm:px-6 py-6 sm:py-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5">
                    <dt className="text-base sm:text-lg font-semibold leading-7 text-brand-primary">{value.name}</dt>
                    <dd className="mt-1 flex flex-auto flex-col text-sm sm:text-base leading-7 text-gray-600">
                      <p className="flex-auto">{value.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimateInView>

          {/* CTA section */}
          <AnimateInView delay={0.5}>
            <div className="mx-auto mt-20 sm:mt-32 max-w-7xl">
              <div className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 py-16 sm:py-24 shadow-2xl sm:rounded-3xl lg:px-24">
                <h2 className="mx-auto max-w-2xl text-center text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl">
                  Ready to Architect Your Growth?
                </h2>
                <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-center text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                  Schedule a strategic analysis to evaluate your agency's growth potential.
                </p>
                <div className="mt-8 sm:mt-10 flex justify-center">
                  <Link
                    href="/contact"
                    className="btn-primary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                  >
                    Request Analysis
                  </Link>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] sm:h-[64rem] sm:w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  )
} 