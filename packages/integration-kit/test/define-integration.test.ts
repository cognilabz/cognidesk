import { describe, expect, it } from "vitest";
import { defineIntegration, type ProviderManifestInput } from "../src/index.js";

const baseManifest = {
  id: "sms.example",
  name: "Example SMS",
  packageName: "@cognidesk/integration-sms-example",
  provider: "example",
  category: "sms",
  trustLevel: "official",
  directions: ["send-only"],
  capabilities: [{
    capability: "send",
    requiresCredential: true,
  }],
  operations: [{
    alias: "sms.message.send",
    providerOperation: "sendMessage",
    capability: "send",
  }],
  coverage: {
    scope: "provider-api-subset",
    evidence: [{ label: "Example SDK", url: "https://example.com/sdk" }],
  },
} as const satisfies ProviderManifestInput;

describe("defineIntegration", () => {
  it("binds manifest operations to executable handlers", () => {
    const integration = defineIntegration({
      manifest: baseManifest,
      operations: {
        "sms.message.send": async () => ({ id: "message-1" }),
      },
    });

    expect(integration.manifest.id).toBe("sms.example");
    expect(Object.keys(integration.operations)).toEqual(["sms.message.send"]);
  });

  it("fails when handlers and manifest declarations drift", () => {
    expect(() =>
      defineIntegration({
        manifest: baseManifest,
        operations: {} as never,
      })
    ).toThrow("operation contract is invalid");
  });
});
