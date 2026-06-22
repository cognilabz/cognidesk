import { describe, expect, it } from "vitest";
import type { StudioAgentIntrospection, StudioConfigurationSurface } from "@cognidesk/studio-contracts";
import { agentPolicyRows, channelBehaviorRows, channelHandoffRows, integrationLifecycleRows, providerPackageRows } from "./data";

describe("studio configuration data rows", () => {
  it("keeps provider requirements and channel behavior visible", () => {
    const configuration: StudioConfigurationSurface = {
      targetId: "flight-demo-local",
      capturedAt: "2026-06-17T00:00:00.000Z",
      channelSets: [],
      channels: [{
        id: "voice-support",
        channel: "voice",
        enabled: true,
        channelSetIds: [],
        providerPackageIds: ["voice.twilio"],
        enabledCapabilities: ["send", "transfer"],
        policyIds: ["consent"],
        policyDetails: [],
        flowActivations: [],
        behavior: {
          tone: "short-spoken",
          maxWords: 40,
          allowMarkdown: false,
          allowWidgets: false,
          draftFirst: true,
          approval: { mode: "operator" },
          customRule: { source: "sdk" },
        },
        metadata: { routing: "priority" },
        handoff: {
          enabled: true,
          providerPackageIds: ["voice.twilio"],
          destinations: ["twilio-transfer"],
          sdkControlled: true,
          policyIds: ["consent"],
          metadata: { queue: "tier-2" },
        },
      }],
      providerPackages: [{
        id: "voice.twilio",
        name: "Twilio Voice",
        packageName: "@cognidesk/integrations",
        provider: "twilio",
        category: "voice",
        trustLevel: "official",
        directions: ["bidirectional"],
        channelAudiences: ["customer-facing"],
        coverage: {
          scope: "support-workflow-subset",
          notes: ["Scoped to Twilio Voice support workflows."],
          evidence: [],
        },
        capabilities: [{
          capability: "transfer",
          extension: false,
          audiences: ["customer-facing"],
          requiresCredential: true,
          sideEffect: true,
          exposesSensitiveData: false,
          changesWorkflow: true,
          providerObjects: [{
            kind: "twilioCall",
            schemaName: "Call",
            metadata: { resource: "Calls" },
          }],
          metadata: { object: "call" },
        }],
        credentialRequirements: [{
          id: "twilio-account",
          scopes: ["calls:write"],
          required: true,
          metadata: { env: "server" },
        }],
        privacyNotes: ["Call metadata is exchanged with Twilio."],
        limitations: ["Live readiness depends on account permissions."],
        maintainers: [{ name: "Cognidesk", type: "official" }],
        metadata: { region: "us1" },
      }],
      capabilityAvailability: [],
      credentialStatuses: [],
      providerReadiness: [],
      policyIds: [],
    };

    expect(channelBehaviorRows(configuration)[0]).toEqual([
      "voice-support",
      "short-spoken",
      "40",
      "-",
      "No",
      "No",
      "Yes",
      "approval, customRule",
    ]);
    expect(channelHandoffRows(configuration)[0]?.[4]).toBe("SDK-user configured");
    expect(providerPackageRows(configuration)[0]).toEqual([
      "Twilio Voice",
      "@cognidesk/integrations",
      "voice",
      "official",
      "support-workflow-subset",
      "bidirectional",
      "customer-facing",
      "transfer / credential / twilioCall:Call:resource / object",
      "twilio-account / env",
      "Scoped to Twilio Voice support workflows. | Call metadata is exchanged with Twilio.",
      "Live readiness depends on account permissions.",
      "Cognidesk:official",
      "region",
    ]);
    expect(integrationLifecycleRows(configuration).find((row) => row[1] === "voice.twilio")).toEqual([
      "Twilio Programmable Voice",
      "voice.twilio",
      "voice",
      "available",
      "installed",
      "unknown",
      "unknown",
      "-",
      "-",
    ]);
  });

  it("keeps agent persona and policy metadata visible", () => {
    const introspection: StudioAgentIntrospection = {
      targetId: "flight-demo-local",
      capturedAt: "2026-06-17T00:00:00.000Z",
      agent: {
        id: "flight-service",
        instructions: "Help travellers.",
        journeyCount: 0,
        toolCount: 0,
        knowledgeCount: 0,
        widgetCount: 0,
        persona: { brandVoice: "calm", locale: "en-US" },
        channelPolicies: { voice: { tone: "short spoken support" } },
        handoffPolicy: { destinations: ["priority-support"] },
      },
      journeys: [],
      tools: [],
      knowledge: [],
      widgets: [],
    };

    expect(agentPolicyRows(introspection)).toEqual([
      ["Persona", "brandVoice, locale"],
      ["Channel policies", "voice"],
      ["Handoff policy", "destinations"],
    ]);
  });
});
