import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  serverExternalPackages: ['nodemailer'],
};

export default nextConfig;
