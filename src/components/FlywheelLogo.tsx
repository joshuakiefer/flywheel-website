import React from 'react'

interface FlywheelLogoProps {
  height?: number
  showTagline?: boolean
  className?: string
}

export default function FlywheelLogo({ height = 40, showTagline = true, className = '' }: FlywheelLogoProps) {
  const viewBoxWidth = showTagline ? 520 : 280
  const viewBoxHeight = 100
  const aspectRatio = viewBoxWidth / viewBoxHeight
  const width = height * aspectRatio

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={width}
      height={height}
      className={className}
    >
      {/* Flywheel icon */}
      <circle cx="42" cy="46" r="22" fill="none" stroke="#1D6B52" strokeWidth="3" />
      <circle cx="42" cy="46" r="8" fill="#1D6B52" />
      <path d="M42 24 Q57 28 62 38" fill="none" stroke="#1D6B52" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M64 46 Q60 61 50 68" fill="none" stroke="#1D6B52" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M42 68 Q27 64 20 54" fill="none" stroke="#1D6B52" strokeWidth="2.5" strokeLinecap="round" />

      {/* Wordmark */}
      <text x="78" y="55" fontFamily="'Helvetica Neue','Arial',sans-serif" fontSize="36" fontWeight="500" fill="#1C1C1A" letterSpacing="-0.5">flywheel</text>

      {/* Tagline */}
      {showTagline && (
        <text x="80" y="78" fontFamily="'Helvetica Neue','Arial',sans-serif" fontSize="10.5" fontWeight="400" fill="#6B6B68" letterSpacing="2.2">OUTSOURCED ACCOUNTING FOR GROWING BUSINESSES</text>
      )}
    </svg>
  )
}
