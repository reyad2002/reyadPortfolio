// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Enables static HTML export
  reactStrictMode: true,
  trailingSlash: true, // Optional: good for static hosting
};

export default nextConfig;
