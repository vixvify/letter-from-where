import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.2.186",
    "tritheistical-coltish-ibrahim.ngrok-free.dev",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-6d1fff311f3f46018e04c45be4928623.r2.dev",
      },
    ],
  },
};

export default nextConfig;
