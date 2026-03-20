import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Flywheel',
  description: 'Meet Joshua Kiefer, CPA - Founder of Flywheel, helping businesses scale from $1M to $20M with expert financial guidance.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
