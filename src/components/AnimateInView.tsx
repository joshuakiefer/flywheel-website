'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimateInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimateInView({ children, className = '', delay = 0 }: AnimateInViewProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 