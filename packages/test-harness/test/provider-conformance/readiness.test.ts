import { describe, expect, it } from "vitest";
import { runProviderConformance } from "../../src/providers.js";

describe("provider credential and live readiness conformance", () => {
  it("fails credential status objects that expose secret-like fields", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "email.gmail",
          name: "Gmail",
          packageName: "@cognidesk/integrations",
          provider: "gmail",
          category: "email",
          trustLevel: "official",
          directions: ["bidirectional"],
          capabilities: [{ capability: "send", requiresCredential: true }],
          credentialRequirements: [{ id: "gmail-oauth" }],
        },
        credentialStatuses: [{
          requirementId: "gmail-oauth",
          state: "configured",
          // Deliberately verifies conformance catches unsafe status shapes before schema stripping.
          accessToken: "secret-value",
        } as never],
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.credentials.no_secret_values")).toMatchObject({
        status: "failed",
        details: { keys: ["accessToken"] },
      });
    });

    it("marks live checks credential-blocked instead of pretending partner readiness", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "voice.twilio",
          name: "Twilio Voice",
          packageName: "@cognidesk/integrations",
          provider: "twilio",
          category: "voice",
          trustLevel: "official",
          directions: ["inbound-only", "outbound-only"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [{ label: "Twilio Voice API", url: "https://www.twilio.com/docs/voice/api" }],
          },
          capabilities: [{ capability: "receive", requiresCredential: true }],
          credentialRequirements: [{ id: "twilio-account" }],
          metadata: {
            channelCoverage: {
              inboundCallWebhook: "typed-parse",
            },
          },
        },
        credentialStatuses: [{
          requirementId: "twilio-account",
          state: "missing",
        }],
        live: {
          enabled: true,
          checks: [{
            id: "account-reachable",
            requiredCredentialIds: ["twilio-account"],
            run: async () => {
              throw new Error("should not run without credentials");
            },
          }],
        },
      });

      expect(result.status).toBe("credential-blocked");
      expect(result.passed).toBe(false);
      expect(result.checks.find((check) => check.id === "provider.live.account-reachable")).toMatchObject({
        status: "credential-blocked",
        details: { requirementIds: ["twilio-account"] },
      });
    });
});
