import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Local Strapi
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },

      // Production Strapi
      {
        protocol: "https",
        hostname: "strapi-cms-w2tu.onrender.com",
      },

      // Cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;