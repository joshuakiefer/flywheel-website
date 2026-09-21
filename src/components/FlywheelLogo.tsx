import React from 'react'

interface FlywheelLogoProps {
  /** Height of the mark in px. Everything else scales from this. */
  height?: number
  showTagline?: boolean
  iconOnly?: boolean
  className?: string
  /** 'dark' for light backgrounds, 'light' for navy/dark backgrounds. */
  variant?: 'dark' | 'light'
}

const TRUST_BLUE = '#3B82F6'
const DEEP_NAVY = '#0B1F3E'

/**
 * The flywheel mark: a thick ring broken by two gaps, which reads as a wheel
 * mid-rotation. Drawn with a dash pattern so the gaps stay proportional at
 * every size. Circumference of r=34 is 2*pi*34 = 213.6, split into two
 * 92-unit segments separated by two 14.8-unit gaps.
 */
function Mark({ size, color }: { size: number; color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className="shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke={color}
        strokeWidth="16"
        strokeDasharray="92 14.8"
        transform="rotate(-58 50 50)"
      />
    </svg>
  )
}

export default function FlywheelLogo({
  height = 48,
  showTagline = true,
  iconOnly = false,
  className = '',
  variant = 'dark',
}: FlywheelLogoProps) {
  const isLight = variant === 'light'
  const wordColor = isLight ? '#FFFFFF' : DEEP_NAVY
  const taglineColor = isLight ? 'rgba(255,255,255,0.72)' : 'rgba(11,31,62,0.65)'

  if (iconOnly) {
    return (
      <span className={`inline-flex shrink-0 ${className}`} role="img" aria-label="Flywheel">
        <Mark size={height} color={TRUST_BLUE} />
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: `${height * 0.26}px` }}
      role="img"
      aria-label="Flywheel: Bookkeeping, CFO, Tax"
    >
      <Mark size={height} color={TRUST_BLUE} />

      <span className="flex flex-col justify-center">
        <span
          className="font-serif leading-none"
          style={{
            fontSize: `${height * 0.78}px`,
            color: wordColor,
            letterSpacing: '-0.015em',
          }}
        >
          Flywheel
        </span>

        {showTagline && (
          <span
            className="uppercase leading-none"
            style={{
              fontSize: `${height * 0.2}px`,
              color: taglineColor,
              letterSpacing: '0.16em',
              marginTop: `${height * 0.13}px`,
            }}
          >
            Bookkeeping &middot; CFO &middot; Tax
          </span>
        )}
      </span>
    </span>
  )
}
