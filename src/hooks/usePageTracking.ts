'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void
  }
}

export default function usePageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])
} 