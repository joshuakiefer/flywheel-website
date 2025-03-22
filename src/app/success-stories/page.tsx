'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import Image from 'next/image'

const successStories = [
  {
    name: 'Digital Spark Agency',
    logo: '/clients/digital-spark.jpg',
    description: 'A digital marketing agency that scaled from $1M to $3.2M in annual revenue within 18 months of partnering with us.',
    quote: 'Flywheel has transformed how we handle our finances. Their deep understanding of agency operations has helped us optimize our cash flow and grow sustainably.',
    author: 'Sarah Johnson',
    role: 'CEO',
    metrics: [
      { label: 'Revenue Growth', value: '220%' },
      { label: 'Profit Margin', value: '32%' },
      { label: 'Time Saved', value: '15hrs/week' },
    ],
  },
  {
    name: 'Growth Labs',
    logo: '/clients/growth-labs.jpg',
    description: 'A growth marketing agency that improved their profit margins by 15% through strategic financial planning and optimization.',
    quote: 'The CFO services have been game-changing. We now have clear visibility into our financials and make better strategic decisions based on real data.',
    author: 'Michael Chen',
    role: 'Founder',
    metrics: [
      { label: 'Profit Increase', value: '15%' },
      { label: 'Client Retention', value: '95%' },
      { label: 'Team Growth', value: '3x' },
    ],
  },
  {
    name: 'Creative Solutions',
    logo: '/clients/creative-solutions.jpg',
    description: 'A creative agency that streamlined their operations and reduced overhead costs by 25% while scaling to new markets.',
    quote: 'Their tax planning saved us significant money and their bookkeeping is impeccable. They truly understand the unique needs of creative agencies.',
    author: 'Emily Rodriguez',
    role: 'Partner',
    metrics: [
      { label: 'Cost Reduction', value: '25%' },
      { label: 'Market Expansion', value: '3 Cities' },
      { label: 'Tax Savings', value: '$50K+' },
    ],
  },
]

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-28">
        <div className="container-custom py-24 sm:py-32">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Success Stories
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                See how we\'ve helped agencies like yours achieve their financial goals and scale with confidence.
              </p>
            </div>
          </AnimateInView>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="space-y-20">
              {successStories.map((story, storyIdx) => (
                <AnimateInView key={story.name} delay={storyIdx * 0.2}>
                  <div className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 sm:px-12 rounded-3xl">
                    {/* Gradient */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-primary/10 to-white" />

                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <Image
                        className="mx-auto h-12 w-auto"
                        src={story.logo}
                        alt={story.name}
                        width={200}
                        height={48}
                      />
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>"{story.quote}"</p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <div className="mt-4">
                            <div className="font-semibold text-gray-900">{story.author}</div>
                            <div className="text-gray-600">{story.role}, {story.name}</div>
                          </div>
                        </figcaption>
                      </figure>

                      <div className="mt-16">
                        <p className="text-lg text-gray-600">{story.description}</p>
                        
                        <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
                          {story.metrics.map((metric) => (
                            <div key={metric.label} className="flex flex-col bg-gray-400/5 p-8">
                              <dt className="text-sm font-semibold leading-6 text-gray-600">{metric.label}</dt>
                              <dd className="order-first text-3xl font-semibold tracking-tight text-brand-primary">{metric.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 