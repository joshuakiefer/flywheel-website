import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Flywheel - Outsourced Accounting for $1M to $20M Businesses',
  description:
    'Flywheel is an outsourced accounting firm that runs bookkeeping, controller work, CFO strategy, and tax for businesses doing $1M to $20M in revenue. Founded by Joshua Kiefer, CPA. 50+ clients, $150M+ in client revenue managed.',
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
