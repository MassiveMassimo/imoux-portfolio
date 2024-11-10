import MillionCompiler from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    //   swcPlugins: [
    //     ["@swc-jotai/debug-label", {}],
    //     ["@swc-jotai/react-refresh", {}],
    //   ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

// export default MillionCompiler.next({
//   rsc: true, // if used in the app router mode
// })(nextConfig);
