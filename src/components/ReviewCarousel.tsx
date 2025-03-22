'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    text: "Flywheel Bookkeeping has helped us stay organized and on top of our finances. They're responsive and proactive. Definitely recommend!",
    author: "Jon Winters",
    date: "a month ago"
  },
  {
    text: "Working with Flywheel has transformed how we handle our agency's finances. Their expertise in the agency space is invaluable.",
    author: "June Keating",
    date: "2 months ago"
  }
]

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-lg p-6 max-w-xl mx-auto shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        <span className="text-xl font-semibold">5.0</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">Google Reviews</span>
      </div>

      <div className="relative h-[100px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <blockquote className="text-gray-700 text-sm">
              "{reviews[currentIndex].text}"
            </blockquote>
            <div className="mt-2">
              <cite className="text-gray-900 font-medium not-italic text-sm">
                {reviews[currentIndex].author}
              </cite>
              <span className="text-gray-500 text-xs ml-2">
                {reviews[currentIndex].date}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === currentIndex ? 'bg-brand-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 