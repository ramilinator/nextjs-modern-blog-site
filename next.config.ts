import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-cms-w2tu.onrender.com",
      },
    ],
  },
};

export default nextConfig;