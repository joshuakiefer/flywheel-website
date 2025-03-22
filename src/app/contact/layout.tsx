import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Flywheel Bookkeeping',
  description: 'Schedule a free consultation to discuss how we can help your agency achieve its financial goals.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 