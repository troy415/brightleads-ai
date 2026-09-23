import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: "/platform", destination: "/work", permanent: true },
      { source: "/agencies", destination: "/communities", permanent: true },
      { source: "/partners", destination: "/communities", permanent: true },
      { source: "/demo", destination: "/start", permanent: true },
    ];
  },
};

export default nextConfig;
