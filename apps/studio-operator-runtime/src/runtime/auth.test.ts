import { describe, expect, it } from "vitest";
import { claimsFromTrustedStudioHeaders, operatorRuntimeSecret } from "./auth.js";

describe("operator runtime WebSocket authentication", () => {
  it("does not trust direct caller-supplied Studio headers without the runtime secret", () => {
    expect(() => claimsFromTrustedStudioHeaders({
      "x-studio-user-id": "attacker",
      "x-studio-user-role": "admin",
      "x-studio-session-token": "stolen-looking-token",
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    })).toThrow("WebSocket authentication failed");
  });

  it("rejects incorrect runtime secrets before reading Studio claims", () => {
    expect(() => claimsFromTrustedStudioHeaders({
      authorization: "Bearer wrong-secret",
      "x-studio-user-id": "attacker",
      "x-studio-user-role": "admin",
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    })).toThrow("WebSocket authentication failed");
  });

  it("reads Studio claims only after the shared runtime secret matches", () => {
    expect(claimsFromTrustedStudioHeaders({
      authorization: "Bearer runtime-secret",
      "x-studio-user-id": "user-1",
      "x-studio-user-role": "operator",
      "x-studio-session-token": "session-token",
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    })).toEqual({
      userId: "user-1",
      role: "operator",
      sessionToken: "session-token",
    });
  });

  it("keeps local development zero-config with a built-in dev secret", () => {
    const localSecret = operatorRuntimeSecret({ NODE_ENV: "development" });
    expect(localSecret).toBe("cognidesk-studio-local-runtime-secret-change-me");
    expect(claimsFromTrustedStudioHeaders({
      authorization: `Bearer ${localSecret}`,
      "x-studio-user-id": "local-user",
      "x-studio-user-role": "operator",
    }, {
      NODE_ENV: "development",
    })).toMatchObject({
      userId: "local-user",
      role: "operator",
    });
  });

  it("fails closed in production when the runtime secret is not configured", () => {
    expect(operatorRuntimeSecret({ NODE_ENV: "production" })).toBeNull();
    expect(() => claimsFromTrustedStudioHeaders({
      authorization: "Bearer anything",
      "x-studio-user-id": "user-1",
    }, {
      NODE_ENV: "production",
    })).toThrow("STUDIO_OPERATOR_RUNTIME_SECRET is required");
  });
});
