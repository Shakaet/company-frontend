import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "http", hostname: "localhost" }, // for future local uploads
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/creative",
        destination: "/services/creative-digital-solutions",
        permanent: true,
      },
      {
        source: "/services/devops",
        destination: "/services/devops-cloud-solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;