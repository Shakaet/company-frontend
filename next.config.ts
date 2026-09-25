import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // allowedDevOrigins: ["192.168.7.169"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
