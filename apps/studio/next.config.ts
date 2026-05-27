import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@cognidesk/studio-contracts"],
  serverExternalPackages: ["@aws-sdk/client-s3"],
};

export default nextConfig;
