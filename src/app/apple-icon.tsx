import { ImageResponse } from 'next/og';

export const runtime = 'edge';

/** Apple recommends 180×180 for home-screen icons */
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          borderRadius: 40,
          color: '#fff',
          fontSize: 104,
          fontWeight: 800,
          letterSpacing: '-0.06em',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}
      >
        C
      </div>
    ),
    size,
  );
}
