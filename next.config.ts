import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    /** Pin workspace root when a parent folder has another package-lock.json (avoids mis-inferred Turbopack root). */
    root: path.join(__dirname),
  },
  async redirects() {
    // The apex (charlie2bored.com) redirect happens at Vercel's edge: configured
    // 2026-06-12 via the project domains API with redirectStatusCode 301. The
    // app-level rules below cover any request that reaches the app directly.
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'charlie2bored.vercel.app' }],
        destination: 'https://www.charlie2bored.com/:path*',
        statusCode: 301,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'charlie2bored.com' }],
        destination: 'https://www.charlie2bored.com/:path*',
        statusCode: 301,
      },
      { source: '/contact', destination: '/about', permanent: true },
      {
        source: '/writing/electoral-college',
        destination: 'https://charlie2bored.substack.com/p/i-tried-to-save-the-electoral-college',
        permanent: false,
      },
      {
        source: '/writing/paper-schedule',
        destination: 'https://charlie2bored.substack.com/p/the-paper-schedule',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
