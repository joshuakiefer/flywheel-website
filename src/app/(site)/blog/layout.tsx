import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Financial Insights | Flywheel',
  description: 'Expert insights on business finance, growth strategies, and financial management for growing businesses.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
