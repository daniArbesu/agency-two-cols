/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: { domains: ['assets.website-files.com'] }
};

module.exports = nextConfig;
