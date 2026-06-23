import { describe, expect, it } from "vitest";
import { claimsFromTrustedStudioHeaders, operatorRuntimeSecret, signStudioRuntimeClaims } from "./auth.js";

describe("operator runtime WebSocket authentication", () => {
  it("does not trust direct caller-supplied Studio headers without a valid signature", () => {
    expect(() => claimsFromTrustedStudioHeaders({
      "x-studio-user-id": "attacker",
      "x-studio-user-role": "admin",
      "x-studio-session-token": "stolen-looking-token",
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    })).toThrow("WebSocket authentication failed");
  });

  it("rejects forged signed claims", () => {
    const headers = signStudioRuntimeClaims({
      userId: "user-1",
      role: "operator",
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    }, {
      now: 1_000,
    });
    headers["x-studio-runtime-claims"] = Buffer.from(JSON.stringify({
      userId: "attacker",
      role: "admin",
      expiresAt: 10_000,
    })).toString("base64url");

    expect(() => claimsFromTrustedStudioHeaders(headers, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    }, 2_000)).toThrow("WebSocket authentication failed");
  });

  it("rejects claims signed with the wrong runtime secret", () => {
    expect(() => claimsFromTrustedStudioHeaders({
      ...signStudioRuntimeClaims({
        userId: "attacker",
        role: "admin",
      }, {
        NODE_ENV: "production",
        STUDIO_OPERATOR_RUNTIME_SECRET: "wrong-secret",
      }),
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    })).toThrow("WebSocket authentication failed");
  });

  it("reads Studio claims only after the shared runtime secret matches", () => {
    const headers = signStudioRuntimeClaims({
      userId: "user-1",
      role: "operator",
      permissions: ["operator:use"],
      sessionToken: "session-token",
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    }, {
      now: 1_000,
      ttlMs: 5_000,
      nonce: "nonce-1",
    });

    expect(claimsFromTrustedStudioHeaders(headers, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    }, 2_000)).toEqual({
      userId: "user-1",
      role: "operator",
      permissions: ["operator:use"],
      sessionToken: "session-token",
    });
  });

  it("keeps local development zero-config with a built-in dev secret", () => {
    const localSecret = operatorRuntimeSecret({ NODE_ENV: "development" });
    expect(localSecret).toBe("cognidesk-studio-local-runtime-secret-change-me");
    expect(claimsFromTrustedStudioHeaders(signStudioRuntimeClaims({
      userId: "local-user",
      role: "operator",
    }, {
      NODE_ENV: "development",
    }), {
      NODE_ENV: "development",
    })).toEqual({
      userId: "local-user",
      role: "operator",
    });
  });

  it("rejects expired claims", () => {
    const headers = signStudioRuntimeClaims({
      userId: "user-1",
      role: "operator",
    }, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    }, {
      now: 1_000,
      ttlMs: 1_000,
    });

    expect(() => claimsFromTrustedStudioHeaders(headers, {
      NODE_ENV: "production",
      STUDIO_OPERATOR_RUNTIME_SECRET: "runtime-secret",
    }, 40_000)).toThrow("WebSocket authentication expired");
  });

  it("fails closed in production when the runtime secret is not configured", () => {
    expect(operatorRuntimeSecret({ NODE_ENV: "production" })).toBeNull();
    expect(() => claimsFromTrustedStudioHeaders({
      "x-studio-runtime-claims": "anything",
      "x-studio-runtime-signature": "anything",
    }, {
      NODE_ENV: "production",
    })).toThrow("STUDIO_OPERATOR_RUNTIME_SECRET is required");
  });
});
