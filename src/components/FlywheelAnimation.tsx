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
    position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    delay: 0,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Strategic Insights',
    subtitle: 'Data-Driven Decisions',
    description: 'Turn data into growth strategy',
    icon: ArrowPathIcon,
    position: 'bottom-1/4 right-0 translate-x-1/2',
    delay: 0.2,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Compound Growth',
    subtitle: 'Accelerate Success',
    description: 'Reinvest for exponential returns',
    icon: CurrencyDollarIcon,
    position: 'bottom-1/4 left-0 -translate-x-1/2',
    delay: 0.4,
    color: 'bg-purple-50 text-purple-600'
  }
]

export default function FlywheelAnimation() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <div className="relative h-[500px] flex items-center justify-center">
        {/* Background elements */}
        <div className="absolute w-[450px] h-[450px] rounded-full border-2 border-gray-100" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-100" />
        
        {/* Rotating elements */}
        <motion.div 
          className="absolute w-[425px] h-[425px] rounded-full border border-brand-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
          <motion.path
            d="M250,125 A125,125 0 1,1 250,375 A125,125 0 1,1 250,125"
            fill="none"
            stroke="url(#gradient)"
            strokeOpacity="0.3"
            strokeWidth="2"
            strokeDasharray="4,8"
            animate={{ strokeDashoffset: [0, -48] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stages */}
        <div className="absolute inset-0">
          {stages.map((stage) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stage.delay, duration: 0.5 }}
              className={`absolute ${stage.position} bg-white p-6 w-72 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl ${stage.color} flex items-center justify-center`}>
                    <stage.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{stage.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{stage.subtitle}</p>
                  <p className={`text-sm mt-2 font-medium ${stage.color.split(' ')[1]}`}>
                    {stage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-full p-10 shadow-lg backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            The Flywheel Effect
          </h3>
          <p className="text-sm text-gray-600 mt-2 max-w-[180px] font-medium">
            Each stage powers the next, creating unstoppable momentum
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center max-w-xl mx-auto mt-8"
      >
        <p className="text-base text-gray-600">
          Our integrated approach creates a powerful growth engine: clean books provide strategic insights, 
          driving better decisions that compound your success over time.
        </p>
      </motion.div>
    </div>
  )
} 