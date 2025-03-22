import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Profitability Calculator | Flywheel Bookkeeping',
  description: 'Calculate your agency\'s true profitability with our interactive calculator. Get insights on gross profit, operating profit, and net profit margins.',
}

export default function ProfitabilityCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 