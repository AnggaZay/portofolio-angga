import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Tambahin ini buat "ngebuka pintu" buat iframe Figma
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