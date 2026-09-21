import './globals.css'
import '../styles/globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { OrganizationSchema } from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1F3E',
}

export const metadata: Metadata = {
  title: 'Flywheel - Bookkeeping, CFO, and Tax for Growing Businesses',
  description: 'Specialized bookkeeping, CFO, and tax services for businesses scaling from $1M to $20M. Transform your business\'s financial management with expert guidance.',
  keywords: 'bookkeeping, CFO services, tax planning, outsourced accounting, fractional CFO, business growth',
  metadataBase: new URL('https://flywheelbookkeeping.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: 'Flywheel - Bookkeeping, CFO, and Tax for Growing Businesses',
    description: 'Transform your business\'s financial management with expert guidance. Specialized services for businesses scaling from $1M to $20M.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Flywheel',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flywheel - Bookkeeping, CFO, and Tax for Growing Businesses',
    description: 'Transform your business\'s financial management with expert guidance. Specialized services for businesses scaling from $1M to $20M.',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  )
}
