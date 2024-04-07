/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'carbonxco.s3.ap-southeast-1.amazonaws.com' }],
  },
};

module.exports = nextConfig;
