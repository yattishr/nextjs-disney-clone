/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "knetic.org.uk",
      },
      {
        protocol: "http",
        hostname: "image.tmdb.org",
      },
    ],
  },
};

module.exports = nextConfig;
