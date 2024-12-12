/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
    unoptimized:true
  },
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
