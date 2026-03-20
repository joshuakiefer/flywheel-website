import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources - Business Financial Tools & Guides | Flywheel',
  description: 'Free resources, tools, and guides to help your business optimize its financial operations and accelerate growth.',
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
