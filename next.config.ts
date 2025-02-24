import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://iyansanjaya.my.id',
        permanent: false,
      }
    ]
  },
};

export default nextConfig;
