import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success Stories - Flywheel Bookkeeping',
  description: 'Real results from agencies that have transformed their finances and scaled their business with Flywheel Bookkeeping.',
}

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 