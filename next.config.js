/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "https://www.pexels.com/",
      },
    ],
  },
};

module.exports = nextConfig;
