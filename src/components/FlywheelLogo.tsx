import React from 'react'

interface FlywheelLogoProps {
  height?: number
  showTagline?: boolean
  className?: string
  variant?: 'dark' | 'light'
}

function FlywheelIcon({ size = 40, color = '#1D6B52' }: { size?: number; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 92"
      width={size}
      height={size}
      className="shrink-0"
    >
      <circle cx="42" cy="46" r="34" fill="none" stroke={color} strokeWidth="5" />
      <circle cx="42" cy="46" r="12" fill={color} />
      <path d="M42 12 Q64 18 72 34" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M76 46 Q70 68 54 78" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M42 80 Q20 74 10 58" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default function FlywheelLogo({ height = 40, showTagline = true, className = '', variant = 'dark' }: FlywheelLogoProps) {
  const isLight = variant === 'light'
  const iconColor = isLight ? '#34d399' : '#1D6B52'
  const textColor = isLight ? '#ffffff' : '#1C1C1A'
  const taglineColor = isLight ? '#9ca3af' : '#6B6B68'

  return (
    <div className={`flex items-center ${className}`} style={{ gap: `${height * 0.2}px` }}>
      <FlywheelIcon size={height} color={iconColor} />
      <div className="flex flex-col justify-center">
        <span
          className="font-medium leading-none"
          style={{
            fontSize: `${height * 0.55}px`,
            color: textColor,
            letterSpacing: '-0.02em',
          }}
        >
          flywheel
        </span>
        {showTagline && (
          <span
            className="uppercase leading-none"
            style={{
              fontSize: `${height * 0.18}px`,
              color: taglineColor,
              letterSpacing: '0.15em',
              marginTop: `${height * 0.06}px`,
            }}
          >
            outsourced accounting for growing businesses
          </span>
        )}
      </div>
    </div>
  )
}
