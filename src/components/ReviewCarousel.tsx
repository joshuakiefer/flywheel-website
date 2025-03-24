'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const reviews = [
  {
    text: "Flywheel Bookkeeping has helped us stay organized and on top of our finances. They're responsive and proactive.",
    author: "Jon Winters",
    company: "Verified Client",
    date: "a month ago"
  },
  {
    text: "Flexible and willing to accommodate customized needs. Strong knowledge of Quickbooks and Excel which is very helpful.",
    author: "June Keating",
    company: "Verified Client",
    date: "a month ago"
  },
  {
    text: "Flywheel is a great accounting partner. Through the highs and lows of running a creative business, I've found their consistency and approach are something I can reliably count on.",
    author: "Earl G",
    company: "Verified Client",
    date: "2 days ago"
  },
]

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-6">
            <span className="text-lg sm:text-xl font-semibold">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm sm:text-base text-gray-600">Google Reviews</span>
          </div>

          {/* Review Slider */}
          <div className="relative min-h-[160px] sm:min-h-[140px]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  "{reviews[currentIndex].text}"
                </blockquote>
                <div className="mt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-gray-900">{reviews[currentIndex].author}</span>
                    <span className="block text-sm text-gray-500 mt-1">
                      {reviews[currentIndex].company}
                      <span className="mx-2">•</span>
                      {reviews[currentIndex].date}
                    </span>
                  </cite>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'bg-brand-primary w-6' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Next review"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 