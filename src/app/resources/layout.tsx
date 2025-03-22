import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources - Agency Financial Tools & Guides | Flywheel Bookkeeping',
  description: 'Free resources, tools, and guides to help your agency optimize its financial operations and accelerate growth.',
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 