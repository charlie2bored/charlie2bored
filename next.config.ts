import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    /** Pin workspace root when a parent folder has another package-lock.json (avoids mis-inferred Turbopack root). */
    root: path.join(__dirname),
  },
};

export default nextConfig;
