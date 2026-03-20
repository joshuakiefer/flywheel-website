import React from 'react'

interface FlywheelLogoProps {
  height?: number
  showTagline?: boolean
  className?: string
}

export default function FlywheelLogo({ height = 40, showTagline = true, className = '' }: FlywheelLogoProps) {
  // The icon is roughly square; the full logo aspect ratio depends on tagline
  const iconSize = height
  const fontSize = height * 0.6
  const taglineSize = height * 0.22

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Flywheel icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer circle with small gap at bottom-left */}
        <path
          d="M 30 88 A 44 44 0 1 1 28 86"
          stroke="#1a7a5a"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner filled dot */}
        <circle cx="50" cy="50" r="11" fill="#1a7a5a" />
      </svg>

      {/* Text */}
      <div className="flex flex-col justify-center" style={{ gap: showTagline ? '1px' : 0 }}>
        <span
          className="font-bold text-gray-900 leading-none"
          style={{ fontSize: `${fontSize}px`, letterSpacing: '-0.01em' }}
        >
          flywheel
        </span>
        {showTagline && (
          <span
            className="text-gray-400 uppercase leading-none tracking-widest"
            style={{ fontSize: `${taglineSize}px`, letterSpacing: '0.12em' }}
          >
            outsourced accounting for growing businesses
          </span>
        )}
      </div>
    </div>
  )
}
