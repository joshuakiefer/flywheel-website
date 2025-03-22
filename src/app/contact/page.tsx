'use client'

import React from 'react'
import AnimateInView from '@/components/AnimateInView'
import { EnvelopeIcon, PhoneIcon, CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Book a Chat',
      description: 'Schedule a friendly conversation about your agency\'s goals and how we can help you reach them.',
      href: '#',
      icon: PhoneIcon,
    },
    {
      name: 'Send a Message',
      description: 'Drop us a line anytime. We\'ll get back to you within one business day.',
      href: '#',
      icon: EnvelopeIcon,
    },
  ]

  const faqs = [
    {
      question: 'What happens in our first conversation?',
      answer: 'We\'ll have a friendly chat about your agency, your goals, and your current challenges. No pressure, just an open discussion to see if we\'re a good fit for each other.',
    },
    {
      question: 'How do we get started working together?',
      answer: 'We keep it simple. After our initial chat, we\'ll outline a clear plan tailored to your needs. Once you\'re happy with it, we can start helping you within days.',
    },
    {
      question: 'What should I prepare for our first chat?',
      answer: 'Just come as you are! If you have specific questions or concerns in mind, great. If not, we can guide the conversation to understand how we can best help you.',
    },
    {
      question: 'How are you different from other firms?',
      answer: 'We focus exclusively on helping creative agencies grow. This means we understand your unique challenges and can offer practical solutions that actually work for your business.',
    },
  ]

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-4 sm:px-6 pb-12 sm:pb-20 pt-16 sm:pt-24 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              {/* ... existing SVG background ... */}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Let's Talk About Your Agency</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Whether you have questions about our services or just want to explore how we could help your agency grow, we're here to chat.
            </p>
            <dl className="mt-8 sm:mt-10 space-y-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
              {contactMethods.map((method) => (
                <div key={method.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <method.icon className="absolute left-1 top-1 h-5 w-5 text-brand-primary" aria-hidden="true" />
                    {method.name}
                  </dt>
                  <dd className="inline ml-2">{method.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <form action="#" method="POST" className="px-4 sm:px-6 pb-16 sm:pb-24 pt-12 sm:pt-20 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-6">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                    placeholder="Let's start with your name"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                    placeholder="Where we can reach you"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="agency" className="block text-sm font-semibold leading-6 text-gray-900">
                  Agency Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="agency"
                    id="agency"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                    placeholder="Tell us about your agency"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  How Can We Help?
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                    placeholder="Share your goals or challenges - we're here to help"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 flex justify-end">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Let's Connect
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-xl sm:text-2xl font-bold leading-10 tracking-tight text-gray-900">Common Questions</h2>
          <dl className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-4 sm:pt-6">
                <dt>
                  <span className="text-sm sm:text-base font-semibold leading-7 text-gray-900">{faq.question}</span>
                </dt>
                <dd className="mt-2 text-sm sm:text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 