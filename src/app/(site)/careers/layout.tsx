import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Flywheel',
  description:
    'Join Flywheel. We are building an outsourced accounting team that helps businesses scaling from $1M to $20M get real financial clarity.',
  alternates: { canonical: '/careers' },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
