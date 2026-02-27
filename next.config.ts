import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // INI KUNCINYA: Buka izin buat iframe Figma
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.figma.com https://embed.figma.com;",
          },
        ],
      },
    ]
  },
};

export default nextConfig;