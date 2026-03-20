import React from 'react'

interface FlywheelLogoProps {
  height?: number
  showTagline?: boolean
  className?: string
  variant?: 'dark' | 'light'
}

export default function FlywheelLogo({ height = 48, showTagline = true, className = '', variant = 'dark' }: FlywheelLogoProps) {
  const isLight = variant === 'light'
  const iconColor = isLight ? '#34d399' : '#1D6B52'
  const textColor = isLight ? '#ffffff' : '#1C1C1A'
  const taglineColor = isLight ? '#9ca3af' : '#6B6B68'

  // Original SVG viewBox: 520 x 100 (with tagline) or 260 x 70 (without)
  const viewBoxWidth = showTagline ? 520 : 260
  const viewBoxHeight = showTagline ? 100 : 70
  const width = height * (viewBoxWidth / viewBoxHeight)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
      aria-label="Flywheel Bookkeeping"
      role="img"
    >
      {/* Flywheel icon */}
      <circle cx="42" cy="46" r="22" fill="none" stroke={iconColor} strokeWidth="3" />
      <circle cx="42" cy="46" r="8" fill={iconColor} />
      <path d="M42 24 Q57 28 62 38" fill="none" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M64 46 Q60 61 50 68" fill="none" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 68 Q27 64 20 54" fill="none" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" />

      {/* Wordmark */}
      <text
        x="78"
        y="55"
        fontFamily="'Helvetica Neue','Arial',sans-serif"
        fontSize="36"
        fontWeight="500"
        fill={textColor}
        letterSpacing="-0.5"
      >
        flywheel
      </text>

      {/* Tagline */}
      {showTagline && (
        <text
          x="80"
          y="78"
          fontFamily="'Helvetica Neue','Arial',sans-serif"
          fontSize="10.5"
          fontWeight="400"
          fill={taglineColor}
          letterSpacing="2.2"
        >
          OUTSOURCED ACCOUNTING FOR GROWING BUSINESSES
        </text>
      )}
    </svg>
  )
}
