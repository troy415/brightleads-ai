import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  devIndicators: false,
  async redirects() {
    return [
      { source: "/work", destination: "/services", permanent: true },
      { source: "/work/:path*", destination: "/services", permanent: true },
      { source: "/communities", destination: "/who-we-serve", permanent: true },
      { source: "/communities/:path*", destination: "/who-we-serve", permanent: true },
      { source: "/platform", destination: "/services", permanent: true },
      { source: "/agencies", destination: "/who-we-serve", permanent: true },
      { source: "/partners", destination: "/who-we-serve", permanent: true },
      { source: "/demo", destination: "/start", permanent: true },
      { source: "/index", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
