import React from 'react'

interface FlywheelLogoProps {
  height?: number
  showTagline?: boolean
  className?: string
}

function FlywheelIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 92"
      width={size}
      height={size}
      className="shrink-0"
    >
      <circle cx="42" cy="46" r="34" fill="none" stroke="#1D6B52" strokeWidth="5" />
      <circle cx="42" cy="46" r="12" fill="#1D6B52" />
      <path d="M42 12 Q64 18 72 34" fill="none" stroke="#1D6B52" strokeWidth="4" strokeLinecap="round" />
      <path d="M76 46 Q70 68 54 78" fill="none" stroke="#1D6B52" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 80 Q20 74 10 58" fill="none" stroke="#1D6B52" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default function FlywheelLogo({ height = 40, showTagline = true, className = '' }: FlywheelLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <FlywheelIcon size={height} />
      <div className="flex flex-col justify-center">
        <span
          className="font-medium leading-none"
          style={{
            fontSize: `${height * 0.55}px`,
            color: '#1C1C1A',
            letterSpacing: '-0.02em',
          }}
        >
          flywheel
        </span>
        {showTagline && (
          <span
            className="uppercase leading-none mt-0.5"
            style={{
              fontSize: `${height * 0.18}px`,
              color: '#6B6B68',
              letterSpacing: '0.15em',
            }}
          >
            outsourced accounting for growing businesses
          </span>
        )}
      </div>
    </div>
  )
}
