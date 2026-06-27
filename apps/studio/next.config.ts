import type { NextConfig } from "next";

const allowedDevOrigins = (process.env.STUDIO_ALLOWED_DEV_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@cognidesk/studio-contracts"],
  serverExternalPackages: ["@aws-sdk/client-s3"],
  ...(allowedDevOrigins.length > 0 ? { allowedDevOrigins } : {}),
};

export default nextConfig;
