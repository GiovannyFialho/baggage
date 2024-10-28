import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portaldasmalas.com.br"
      }
    ]
  }
};

export default nextConfig;
