// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.example.com"], // لو بتجيب صور من برّه
  },
   async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
