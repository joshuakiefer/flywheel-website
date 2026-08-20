import { ImageResponse } from 'next/og'

export const alt = 'Flywheel - Outsourced Accounting for Growing Businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111827 0%, #0f2a22 55%, #111827 100%)',
          padding: 80,
        }}
      >
        {/* Flywheel mark */}
        <svg width="120" height="120" viewBox="0 0 84 92">
          <circle cx="42" cy="46" r="22" fill="none" stroke="#34d399" strokeWidth="3.5" />
          <circle cx="42" cy="46" r="9" fill="#34d399" />
          <path d="M42 24 Q57 28 62 38" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
          <path d="M64 46 Q60 61 50 68" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
          <path d="M42 68 Q27 64 20 54" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            marginTop: 28,
          }}
        >
          flywheel
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#9ca3af',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginTop: 18,
            textAlign: 'center',
          }}
        >
          Outsourced Accounting for Growing Businesses
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#34d399',
            marginTop: 40,
          }}
        >
          For businesses scaling $1M to $20M
        </div>
      </div>
    ),
    size,
  )
}
