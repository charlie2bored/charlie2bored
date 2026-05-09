import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Charlie Vargas | Product designer, UX & analytics portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(145deg, #0f0f0f 0%, #1c1c1c 42%, #0a0a0a 100%)',
          color: '#fafafa',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.08,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Charlie Vargas
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: '#bdbdbd',
            letterSpacing: '-0.02em',
            maxWidth: 820,
          }}
        >
          Product design &amp; UX, with analytics depth · NYC / NJ hybrid or remote
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            fontWeight: 600,
            color: '#737373',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
          }}
        >
          Portfolio · internships & junior track
        </div>
      </div>
    ),
    size,
  );
}
