import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Flywheel Bookkeeping',
  description: 'Comprehensive financial services for growing agencies including bookkeeping, CFO services, and tax planning.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 