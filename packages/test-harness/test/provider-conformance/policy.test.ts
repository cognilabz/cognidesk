import { describe, expect, it } from "vitest";
import { runProviderConformance } from "../../src/providers.js";

describe("provider conformance policy and package checks", () => {
  it("passes a well-formed provider package manifest with fail-closed policy behavior", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.servicenow",
          name: "ServiceNow",
          packageName: "@cognidesk/integrations",
          provider: "servicenow",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          channelAudiences: ["mixed"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [{ label: "ServiceNow Table API", url: "https://www.servicenow.com/docs/api-reference/rest-apis/c_TableAPI.html" }],
          },
          capabilities: [{
            capability: "update-provider-object",
            audiences: ["internal-support"],
            sideEffect: true,
            changesWorkflow: true,
            providerObjects: [{ kind: "incident", label: "Incident" }],
          }],
          credentialRequirements: [{
            id: "servicenow-oauth",
            scopes: ["incident.read", "incident.write"],
            metadata: { scopeKind: "internal-capability-labels" },
          }],
          metadata: {
            channelCoverage: {
              incidents: "typed-create-read-update-search",
            },
          },
        },
        channels: [{
          id: "ticketing-support",
          channel: "ticketing",
          audience: "mixed",
          enabledCapabilities: ["update-provider-object"],
          policies: {},
        }],
      });

      expect(result.status).toBe("passed");
      expect(result.checks.map((check) => check.id)).toEqual(expect.arrayContaining([
        "provider.package_name",
        "provider.capability_vocabulary",
        "provider.coverage_scope",
        "provider.official_evidence",
        "provider.channel_coverage_metadata",
        "provider.generic_capability_evidence",
        "provider.policy_fail_closed",
      ]));
      expect(result.checks.find((check) => check.id === "provider.coverage_scope")).toMatchObject({
        status: "passed",
        details: { scope: "support-workflow-subset" },
      });
      expect(result.checks.find((check) => check.id === "provider.policy_fail_closed")).toMatchObject({
        status: "passed",
        details: { code: "missing-policy" },
      });
    });

  it("fails official Provider Integrations with the wrong package name", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "voice.twilio",
          name: "Twilio Voice",
          packageName: "@cognidesk/twilio-voice-invalid",
          provider: "twilio",
          category: "voice",
          trustLevel: "official",
          directions: ["inbound-only"],
          capabilities: [{ capability: "receive" }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.package_name")).toMatchObject({
        status: "failed",
        details: {
          expected: ["@cognidesk/voice-twilio", "@cognidesk/integrations"],
        },
      });
    });

    it("passes split provider package names", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "workplace.slack",
          name: "Slack",
          packageName: "@cognidesk/workplace-slack",
          provider: "slack",
          category: "workplace",
          trustLevel: "official",
          directions: ["send-only"],
          capabilities: [{ capability: "send" }],
        },
      });

      expect(result.checks.find((check) => check.id === "provider.package_name")).toMatchObject({
        status: "passed",
      });
    });

    it("kebab-cases camel category names when checking official package names", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "contactCenter.genesys-cloud",
          name: "Genesys Cloud CX",
          packageName: "@cognidesk/integrations",
          provider: "genesys-cloud",
          category: "contactCenter",
          trustLevel: "official",
          directions: ["bidirectional"],
          channelAudiences: ["mixed"],
          capabilities: [{ capability: "handoff", sideEffect: true, changesWorkflow: true }],
        },
      });

      expect(result.checks.find((check) => check.id === "provider.package_name")).toMatchObject({
        status: "passed",
      });
    });

    it("allows focused aggregate Cognidesk package names for internal categories", async () => {
      const modelResult = await runProviderConformance({
        manifest: {
          id: "model.ai-sdk",
          name: "AI SDK",
          packageName: "@cognidesk/model",
          provider: "ai-sdk",
          category: "model",
          trustLevel: "official",
          directions: ["bidirectional"],
          capabilities: [{ capability: "read-provider-object", providerObjects: [{ kind: "model" }] }],
        },
      });
      const studioResult = await runProviderConformance({
        manifest: {
          id: "studio.adapter",
          name: "Studio Adapter",
          packageName: "@cognidesk/studio-adapter",
          provider: "cognidesk",
          category: "studio",
          trustLevel: "official",
          directions: ["bidirectional"],
          capabilities: [{ capability: "studio.health", extension: true }],
        },
      });

      expect(modelResult.checks.find((check) => check.id === "provider.package_name")).toMatchObject({
        status: "passed",
      });
      expect(studioResult.checks.find((check) => check.id === "provider.package_name")).toMatchObject({
        status: "passed",
      });
    });

    it("fails custom capabilities that are not declared as extensions", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "workplace.slack",
          name: "Slack",
          packageName: "@cognidesk/integrations",
          provider: "slack",
          category: "workplace",
          directions: ["send-only"],
          capabilities: [{ capability: "open-canvas" }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.capability_vocabulary")).toMatchObject({
        status: "failed",
        details: {
          capabilities: ["open-canvas"],
        },
      });
    });
});
