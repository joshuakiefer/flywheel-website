import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success Stories - Flywheel',
  description: 'Real results from agencies that have transformed their finances and scaled their business with Flywheel.',
}

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 