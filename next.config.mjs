/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ahmed.alaa1144.apis.mrbotusa.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
