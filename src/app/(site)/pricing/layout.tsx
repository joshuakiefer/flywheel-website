import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Flywheel',
  description:
    'Transparent monthly pricing for outsourced accounting. Core Operations from $1,000, Controller from $3,000, and Fractional CFO from $5,500 per month.',
  alternates: { canonical: '/pricing' },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
