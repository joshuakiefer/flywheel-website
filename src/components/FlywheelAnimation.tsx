'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowPathIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const stages = [
  {
    title: 'Clean Books',
    subtitle: 'Foundation for Growth',
    description: 'Accurate financials unlock insights',
    icon: ChartBarIcon,
    delay: 0,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Strategic Insights',
    subtitle: 'Data-Driven Decisions',
    description: 'Turn data into growth strategy',
    icon: ArrowPathIcon,
    delay: 0.2,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Compound Growth',
    subtitle: 'Accelerate Success',
    description: 'Reinvest for exponential returns',
    icon: CurrencyDollarIcon,
    delay: 0.4,
    color: 'bg-purple-50 text-purple-600'
  }
]

export default function FlywheelAnimation() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-8 sm:py-12">
      {/* Stages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stage.delay }}
            className="relative"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-all duration-300 h-full">
              <div className="flex flex-col gap-4">
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${stage.color.split(' ')[0]}`}>
                  <stage.icon className={`h-6 w-6 ${stage.color.split(' ')[1]}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{stage.title}</h3>
                  <p className="mt-2 text-base font-medium text-gray-600">{stage.subtitle}</p>
                  <p className="mt-2 text-base text-gray-500">{stage.description}</p>
                </div>
              </div>
            </div>
            
            {/* Connection arrow for desktop */}
            {index < stages.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <path
                    d="M4 12h16m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  />
                </motion.svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center text-lg text-gray-600 max-w-3xl mx-auto"
      >
        Our integrated approach creates a powerful growth engine: clean books provide strategic insights, driving better decisions that compound your success over time.
      </motion.p>
    </div>
  )
} 