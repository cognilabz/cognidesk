import { describe, expect, it } from "vitest";
import {
  allowsLocalStudioDefaults,
  resolveSqliteFilename,
  resolveStudioDatabaseProvider,
  resolveStudioDatabaseUrl,
  studioArtifactStorage,
  studioBetterAuthSecret,
  studioTrustedOrigins,
  isStudioBuildPhase,
  studioOperatorRuntimeSecret,
  studioTargetServiceToken,
} from "./config";

describe("studio configuration", () => {
  it("keeps SQLite as the only supported database provider", () => {
    expect(resolveStudioDatabaseProvider(undefined)).toBe("sqlite");
    expect(resolveStudioDatabaseProvider("sqlite")).toBe("sqlite");
    expect(() => resolveStudioDatabaseProvider("postgres")).toThrow("postgres is not supported");
  });

  it("rejects Postgres database URLs instead of passing them to libsql", () => {
    expect(resolveStudioDatabaseUrl("file:./data/studio.sqlite")).toBe("file:./data/studio.sqlite");
    expect(resolveStudioDatabaseUrl(" file:./data/studio.sqlite ")).toBe("file:./data/studio.sqlite");
    expect(resolveSqliteFilename(":memory:")).toBe(":memory:");
    expect(() => resolveStudioDatabaseUrl(" postgres://studio:studio@127.0.0.1:5432/cognidesk_studio")).toThrow("Postgres URLs are not supported");
    expect(() => resolveStudioDatabaseUrl("postgres://studio:studio@127.0.0.1:5432/cognidesk_studio")).toThrow("Postgres URLs are not supported");
  });

  it("uses a local development operator runtime secret but requires explicit production config", () => {
    expect(studioOperatorRuntimeSecret({ NODE_ENV: "development" })).toBe("cognidesk-studio-local-runtime-secret-change-me");
    expect(studioOperatorRuntimeSecret({
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    })).toBe("runtime-secret");
    expect(studioOperatorRuntimeSecret({ NODE_ENV: "production" })).toBeUndefined();
    expect(() => studioOperatorRuntimeSecret({
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "cognidesk-studio-local-runtime-secret-change-me",
    })).toThrow("must not use the local development secret");
  });

  it("keeps local Studio secrets only for local development", () => {
    expect(allowsLocalStudioDefaults({ NODE_ENV: "development" })).toBe(true);
    expect(allowsLocalStudioDefaults({ NODE_ENV: "development", STUDIO_HOSTED: "true" })).toBe(false);
    expect(studioBetterAuthSecret({ NODE_ENV: "development" })).toBe("cognidesk-studio-local-development-secret-change-me");
    expect(studioTargetServiceToken({ NODE_ENV: "development" })).toBe("dev-studio-token");
    expect(studioTargetServiceToken({
      NODE_ENV: "production",
      COGNIDESK_STUDIO_TARGET_TOKEN: "target-secret",
    })).toBe("target-secret");
    expect(studioTargetServiceToken({ NODE_ENV: "production" })).toBeUndefined();
    expect(() => studioBetterAuthSecret({ NODE_ENV: "production" })).toThrow("BETTER_AUTH_SECRET is required");
    expect(isStudioBuildPhase({ NODE_ENV: "production", npm_lifecycle_event: "build" })).toBe(true);
    expect(studioBetterAuthSecret({
      NODE_ENV: "production",
      npm_lifecycle_event: "build",
    })).toBe("cognidesk-studio-build-time-placeholder-secret");
    expect(() => studioBetterAuthSecret({
      NODE_ENV: "production",
      BETTER_AUTH_SECRET: "cognidesk-studio-local-development-secret-change-me",
    })).toThrow("must not use the local development secret");
    expect(() => studioTargetServiceToken({
      NODE_ENV: "production",
      COGNIDESK_STUDIO_TARGET_TOKEN: "dev-studio-token",
    })).toThrow("must not use dev-studio-token");
  });

  it("trusts LAN Studio URL and configured local dev origins for browser login", () => {
    expect(studioTrustedOrigins(
      "http://10.0.0.83:3001",
      "localhost,127.0.0.1,10.0.0.83",
    )).toEqual([
      "http://10.0.0.83:3001",
      "http://localhost:3001",
      "http://127.0.0.1:3001",
    ]);
    expect(studioTrustedOrigins("http://localhost:3001", "")).toEqual([
      "http://localhost:3001",
      "http://127.0.0.1:3001",
    ]);
  });

  it("adds localhost as a loopback peer when the app URL uses 127.0.0.1", () => {
    expect(studioTrustedOrigins("http://127.0.0.1:3001", "")).toEqual([
      "http://127.0.0.1:3001",
      "http://localhost:3001",
    ]);
  });

  it("deduplicates when allowedDevOrigins already contains the app hostname", () => {
    const origins = studioTrustedOrigins("http://10.0.0.83:3001", "10.0.0.83");
    expect(origins).toEqual(["http://10.0.0.83:3001"]);
    expect(origins).toHaveLength(1);
  });

  it("ignores invalid entries in allowedDevOrigins", () => {
    const origins = studioTrustedOrigins("http://10.0.0.83:3001", ":::invalid,not a host");
    expect(origins).toEqual(["http://10.0.0.83:3001"]);
  });

  it("does not add loopback peers for non-loopback https app URLs", () => {
    expect(studioTrustedOrigins("https://studio.example.com", "")).toEqual([
      "https://studio.example.com",
    ]);
  });

  it("infers protocol and port from app URL for bare hostnames in allowedDevOrigins", () => {
    const origins = studioTrustedOrigins("http://10.0.0.83:3001", "10.0.0.5");
    expect(origins).toContain("http://10.0.0.5:3001");
  });

  it("returns only the app origin when allowedDevOrigins is undefined and app is not loopback", () => {
    expect(studioTrustedOrigins("https://studio.example.com", undefined)).toEqual([
      "https://studio.example.com",
    ]);
  });

  it("keeps artifact storage defaults local-only", () => {
    expect(studioArtifactStorage({ NODE_ENV: "development" })).toMatchObject({
      endpoint: "http://127.0.0.1:9000",
      region: "us-east-1",
      accessKeyId: "minioadmin",
      secretAccessKey: "minioadmin",
      forcePathStyle: true,
    });
    expect(studioArtifactStorage({ NODE_ENV: "production" })).toEqual({
      region: "us-east-1",
      forcePathStyle: false,
    });
    expect(studioArtifactStorage({
      NODE_ENV: "production",
      STUDIO_S3_ENDPOINT: "https://s3.example.test",
      STUDIO_S3_ACCESS_KEY_ID: "studio-access",
      STUDIO_S3_SECRET_ACCESS_KEY: "studio-secret",
      STUDIO_S3_FORCE_PATH_STYLE: "true",
    })).toMatchObject({
      endpoint: "https://s3.example.test",
      accessKeyId: "studio-access",
      secretAccessKey: "studio-secret",
      forcePathStyle: true,
    });
    expect(() => studioArtifactStorage({
      NODE_ENV: "production",
      STUDIO_S3_ENDPOINT: "http://127.0.0.1:9000",
    })).toThrow("local MinIO endpoint");
    expect(() => studioArtifactStorage({
      NODE_ENV: "production",
      STUDIO_S3_ENDPOINT: "http://localhost:9000/",
    })).toThrow("local MinIO endpoint");
    expect(() => studioArtifactStorage({
      NODE_ENV: "production",
      STUDIO_S3_ENDPOINT: "http://[::1]:9000",
    })).toThrow("local MinIO endpoint");
    expect(() => studioArtifactStorage({
      NODE_ENV: "production",
      STUDIO_S3_ACCESS_KEY_ID: "minioadmin",
      STUDIO_S3_SECRET_ACCESS_KEY: "minioadmin",
    })).toThrow("local MinIO credentials");
    expect(() => studioArtifactStorage({
      NODE_ENV: "production",
      STUDIO_S3_ACCESS_KEY_ID: "studio-access",
    })).toThrow("must be configured together");
  });
});
