import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/playtennis",
  images: { unoptimized: true },
};

export default nextConfig;
