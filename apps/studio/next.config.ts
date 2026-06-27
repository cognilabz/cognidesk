import type { NextConfig } from "next";

const allowedDevOrigins = (process.env.STUDIO_ALLOWED_DEV_ORIGINS ?? "")
  .split(",")
  .map(normalizeAllowedDevOrigin)
  .filter((origin): origin is string => Boolean(origin));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@cognidesk/studio-contracts"],
  serverExternalPackages: ["@aws-sdk/client-s3"],
  ...(allowedDevOrigins.length > 0 ? { allowedDevOrigins } : {}),
};

export default nextConfig;

function normalizeAllowedDevOrigin(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed.includes("://") ? trimmed : `http://${trimmed}`);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.host;
  } catch {
    return null;
  }
}
