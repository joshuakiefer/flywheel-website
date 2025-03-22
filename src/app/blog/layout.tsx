import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Agency Financial Insights | Flywheel Bookkeeping',
  description: 'Expert insights on agency finance, growth strategies, and financial management for creative and digital agencies.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 