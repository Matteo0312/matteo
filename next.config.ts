import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages hosts this project below /matteo/.
  basePath: "/matteo",
  assetPrefix: "/matteo/",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
