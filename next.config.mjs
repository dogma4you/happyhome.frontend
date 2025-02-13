/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.happyhomeinitiative.com",
      },
    ],
  },
};

export default nextConfig;
