import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Pricing Calculator | Flywheel',
  description: 'Calculate optimal rates for your business with our interactive calculator. Get recommendations for hourly rates, retainers, and project minimums.',
}

export default function PricingCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
