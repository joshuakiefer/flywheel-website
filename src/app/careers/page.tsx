'use client'

import React, { useState } from 'react'
import AnimateInView from '@/components/AnimateInView'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import emailjs from '@emailjs/browser'

const benefits = [
  'Flexible remote work',
  'Competitive compensation',
  'Professional development',
  'Health benefits',
  'Work-life balance',
  'Collaborative culture'
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'accounting',
    experience: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        to_email: 'your-business@gmail.com', // Replace with your email
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        role: formData.role,
        experience: formData.experience,
        message: formData.message
      }

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      setSubmitStatus({
        type: 'success',
        message: 'Application submitted successfully! We\'ll be in touch soon.'
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'accounting',
        experience: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your application. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white">
      <div className="relative isolate pt-20 sm:pt-28">
        <div className="container-custom py-16 sm:py-24">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Join Our Team
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Help us transform financial management for creative agencies. We're looking for talented individuals who are passionate about making a difference.
              </p>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <div className="mx-auto mt-12 sm:mt-16 max-w-7xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
                {/* Benefits Section */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    Why Work With Us?
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-gray-600">
                    Join a team that's passionate about helping agencies grow while growing your own career.
                  </p>
                  <ul role="list" className="mt-8 grid grid-cols-1 gap-4">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-x-3">
                        <CheckCircleIcon className="h-6 w-5 flex-none text-brand-primary" aria-hidden="true" />
                        <span className="text-base sm:text-lg text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-6">Apply Now</h2>
                  {submitStatus.type && (
                    <div
                      className={`mb-6 p-4 rounded-md ${
                        submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Interested Role
                      </label>
                      <select
                        name="role"
                        id="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      >
                        <option value="accounting">Accounting</option>
                        <option value="bookkeeping">Bookkeeping</option>
                        <option value="tax">Tax</option>
                        <option value="advisory">Advisory</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                        Years of Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        id="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Why would you like to join our team?
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-3 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  )
} 