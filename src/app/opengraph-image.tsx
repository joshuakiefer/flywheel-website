import { ImageResponse } from 'next/og'

export const alt = 'Flywheel - Bookkeeping, CFO, Tax'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  // Load the wordmark serif so the preview matches the site's logo lockup.
  // If the fetch fails the image still renders, just in the fallback serif.
  const playfair = await fetch(
    'https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf',
  )
    .then((res) => (res.ok ? res.arrayBuffer() : null))
    .catch(() => null)

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
          background: 'linear-gradient(135deg, #0B1F3E 0%, #12294E 50%, #0B1F3E 100%)',
          padding: 80,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          {/* Flywheel mark */}
          <svg width="150" height="150" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="16"
              strokeDasharray="92 14.8"
              transform="rotate(-58 50 50)"
            />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                fontSize: 116,
                color: '#ffffff',
                letterSpacing: '-0.015em',
                lineHeight: 1,
                ...(playfair ? { fontFamily: 'Playfair' } : {}),
              }}
            >
              Flywheel
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 27,
                color: 'rgba(255,255,255,0.72)',
                letterSpacing: '0.16em',
                marginTop: 16,
              }}
            >
              BOOKKEEPING · CFO · TAX
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#3B82F6',
            marginTop: 58,
          }}
        >
          Same numbers. A brighter tomorrow.
        </div>
      </div>
    ),
    {
      ...size,
      ...(playfair
        ? {
            fonts: [
              {
                name: 'Playfair',
                data: playfair,
                style: 'normal' as const,
                weight: 500 as const,
              },
            ],
          }
        : {}),
    },
  )
}
