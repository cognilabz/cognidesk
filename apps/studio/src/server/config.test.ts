import { describe, expect, it } from "vitest";
import {
  resolveSqliteFilename,
  resolveStudioDatabaseProvider,
  resolveStudioDatabaseUrl,
  studioOperatorRuntimeSecret,
} from "./config";

describe("studio configuration", () => {
  it("keeps SQLite as the only supported database provider", () => {
    expect(resolveStudioDatabaseProvider(undefined)).toBe("sqlite");
    expect(resolveStudioDatabaseProvider("sqlite")).toBe("sqlite");
    expect(() => resolveStudioDatabaseProvider("postgres")).toThrow("postgres is not supported");
  });

  it("rejects Postgres database URLs instead of passing them to libsql", () => {
    expect(resolveStudioDatabaseUrl("file:./data/studio.sqlite")).toBe("file:./data/studio.sqlite");
    expect(resolveSqliteFilename(":memory:")).toBe(":memory:");
    expect(() => resolveStudioDatabaseUrl("postgres://studio:studio@127.0.0.1:5432/cognidesk_studio")).toThrow("Postgres URLs are not supported");
  });

  it("uses a local development operator runtime secret but requires explicit production config", () => {
    expect(studioOperatorRuntimeSecret({ NODE_ENV: "development" })).toBe("cognidesk-studio-local-runtime-secret-change-me");
    expect(studioOperatorRuntimeSecret({
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    })).toBe("runtime-secret");
    expect(studioOperatorRuntimeSecret({ NODE_ENV: "production" })).toBeUndefined();
  });
});
