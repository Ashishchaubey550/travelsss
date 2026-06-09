import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance',
        permanent: false,
      },
      {
        source: '/:path((?!maintenance|_next|favicon.ico).*)',
        destination: '/maintenance',
        permanent: false,
      },
    ]
  }
};

export default nextConfig;
