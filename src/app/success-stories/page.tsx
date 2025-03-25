'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import { motion } from 'framer-motion'
import { ArrowRightIcon, ChartBarIcon, ArrowTrendingUpIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const successStories = [
  {
    title: "Streamlining Operations for Rapid Growth",
    client: "Manufacturing Company",
    results: [
      "Scaled from $3M to $12M in revenue",
      "Reduced operational costs by 22%",
      "Implemented automated financial reporting"
    ],
    quote: "Flywheel's expertise helped us navigate our rapid growth phase while maintaining strong financial controls. Their strategic guidance has been instrumental in our expansion.",
    author: "David Martinez",
    role: "CEO, PrecisionTech Manufacturing",
    metrics: {
      growth: "300%",
      timeframe: "36 months",
      focus: "Revenue Growth"
    }
  },
  {
    title: "Maximizing Profitability in E-commerce",
    client: "Online Retail Business",
    results: [
      "Increased profit margins by 18%",
      "Optimized inventory management",
      "Improved cash flow forecasting"
    ],
    quote: "Working with Flywheel transformed our financial operations. Their insights helped us optimize our inventory management and significantly improve our bottom line.",
    author: "Emily Zhang",
    role: "Founder, StyleHub E-commerce",
    metrics: {
      growth: "85%",
      timeframe: "18 months",
      focus: "Profit Growth"
    }
  },
  {
    title: "Scaling Professional Services",
    client: "IT Consulting Firm",
    results: [
      "Grew to $8M in annual revenue",
      "Enhanced project profitability by 25%",
      "Streamlined billing processes"
    ],
    quote: "Flywheel helped us build scalable financial systems that support our growth. Their strategic approach to financial management has been key to our success.",
    author: "James Wilson",
    role: "Managing Partner, TechPro Solutions",
    metrics: {
      growth: "160%",
      timeframe: "24 months",
      focus: "Revenue Growth"
    }
  }
]

export default function SuccessStories() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Success Stories
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how we've helped businesses like yours achieve their financial goals and scale with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <AnimateInView key={story.title}>
              <div className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 transform transition-transform group-hover:scale-[1.02]" />
                <div className="relative p-8 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        {story.title}
                      </h2>
                      <p className="text-lg text-gray-600">
                        {story.client}
                      </p>
                      <ul className="space-y-4">
                        {story.results.map((result) => (
                          <li key={result} className="flex items-center gap-x-3">
                            <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                        <figure className="space-y-4">
                          <blockquote>
                            <p className="text-lg italic text-gray-900">
                              "{story.quote}"
                            </p>
                          </blockquote>
                          <figcaption>
                            <div className="font-semibold text-gray-900">{story.author}</div>
                            <div className="text-gray-600">{story.role}</div>
                          </figcaption>
                        </figure>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                          <div className="text-3xl font-bold text-emerald-600">{story.metrics.growth}</div>
                          <div className="mt-1 text-sm text-gray-600">{story.metrics.focus}</div>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                          <div className="text-3xl font-bold text-emerald-600">{story.metrics.timeframe}</div>
                          <div className="mt-1 text-sm text-gray-600">Timeline</div>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                          <div className="text-3xl font-bold text-emerald-600">ROI</div>
                          <div className="mt-1 text-sm text-gray-600">Positive</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to Write Your Success Story?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join the growing number of businesses achieving their financial goals with Flywheel.
          </p>
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