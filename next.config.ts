import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ['accurate-foil-gratuity.ngrok-free.dev'],
  async redirects() {
    return [
      {
        source: "/signin",
        destination: "https://app.samtrack.co/login",
        permanent: false,
      },
      {
        source: "/install",
        destination: "https://app.samtrack.co/signup",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
