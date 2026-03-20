'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

const featuredPosts = [
  {
    id: 1,
    title: 'The Business Growth Blueprint: Scaling from $1M to $20M',
    description: 'Learn the key financial strategies and metrics that successful businesses use to scale their operations effectively.',
    category: 'Growth Strategy',
    author: 'Joshua Kiefer, CPA',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 2,
    title: 'Maximizing Business Profitability: A Complete Guide',
    description: 'Discover proven methods to optimize your business\'s pricing, resource allocation, and financial operations.',
    category: 'Financial Strategy',
    author: 'Joshua Kiefer, CPA',
    date: 'Mar 10, 2024',
    readTime: '10 min read',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 3,
    title: 'Tax Strategies for Growing Businesses in 2024',
    description: 'Stay ahead of the curve with these tax planning strategies specifically designed for growing businesses.',
    category: 'Tax Planning',
    author: 'Joshua Kiefer, CPA',
    date: 'Mar 5, 2024',
    readTime: '7 min read',
    gradient: 'from-purple-500 to-purple-700',
  },
]

const categories = [
  { name: 'Growth Strategy', count: 12 },
  { name: 'Financial Strategy', count: 15 },
  { name: 'Tax Planning', count: 8 },
  { name: 'Cash Flow', count: 10 },
  { name: 'Business Operations', count: 7 },
  { name: 'Industry Insights', count: 9 },
]

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-28 lg:pt-40">
        <div className="container-custom py-24 sm:py-32">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Financial Insights
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Expert guidance and actionable strategies to help your business thrive financially.
              </p>
              <div className="mt-4 inline-flex items-center rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 ring-1 ring-amber-600/20">
                Coming Soon — Stay tuned for new articles
              </div>
            </div>
          </AnimateInView>

          {/* Featured Posts */}
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <AnimateInView key={post.id} delay={post.id * 0.1}>
                <article className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
                  <div className={`aspect-[16/9] relative bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                    <span className="text-white/80 text-sm font-medium">Coming Soon</span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-500 flex items-center">
                        <CalendarIcon className="mr-1.5 h-4 w-4" />
                        {post.date}
                      </time>
                      <span className="flex items-center text-gray-500">
                        <ClockIcon className="mr-1.5 h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-2.5 py-1 text-xs font-semibold text-brand-primary">
                        {post.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-x-2">
                      <span className="text-sm font-medium text-gray-900">{post.author}</span>
                    </div>
                  </div>
                </article>
              </AnimateInView>
            ))}
          </div>

          {/* Categories and Newsletter */}
          <div className="mx-auto mt-24 grid max-w-7xl gap-8 lg:grid-cols-4">
            {/* Categories */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
              <ul role="list" className="mt-4 space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <span className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-gray-50 p-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Get Financial Insights Delivered
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Join business owners who receive our weekly insights on financial growth and management.
                </p>
                <form className="mt-6">
                  <div className="flex gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
