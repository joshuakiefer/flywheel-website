import './globals.css'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00A651',
}

export const metadata: Metadata = {
  title: 'Flywheel - Financial Strategy for Growing Businesses',
  description: 'Specialized bookkeeping, CFO, and tax services for businesses scaling from $1M to $20M. Transform your business\'s financial management with expert guidance.',
  keywords: 'business bookkeeping, CFO services, tax planning, financial strategy, business growth',
  metadataBase: new URL('https://flywheelbookkeeping.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: 'Flywheel - Financial Strategy for Growing Businesses',
    description: 'Transform your business\'s financial management with expert guidance. Specialized services for businesses scaling from $1M to $20M.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Flywheel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flywheel - Financial Strategy for Growing Businesses',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
