import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Pricing Calculator | Flywheel Bookkeeping',
  description: 'Calculate optimal rates for your agency with our interactive calculator. Get recommendations for hourly rates, retainers, and project minimums.',
}

export default function PricingCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 