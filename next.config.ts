import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-strapi-app.onrender.com",
      },
    ],
  },
};

export default nextConfig;