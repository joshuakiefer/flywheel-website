'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ 
  label, 
  title, 
  description, 
  centered = true,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} px-4 sm:px-0 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center p-1 mb-4 rounded-full bg-brand-primary/5 text-brand-primary">
          <span className="text-sm font-medium px-3">{label}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  )
} 