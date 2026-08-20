import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Connected Finance - Flywheel',
  description:
    'We integrate QuickBooks with your project management, time tracking, payroll, and communication tools, then build dashboards that show real-time project profitability and true labor costs.',
  alternates: { canonical: '/connected-finance' },
}

export default function ConnectedFinanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
