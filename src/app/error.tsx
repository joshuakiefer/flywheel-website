'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold text-brand-primary">There was a problem</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-sm font-semibold text-gray-900"
          >
            Go back home <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 