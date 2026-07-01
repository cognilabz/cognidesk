import { describe, expect, it } from "vitest";
import type { StudioAgentIntrospection, StudioConfigurationSurface } from "@cognidesk/studio-contracts";
import { agentPolicyRows, channelBehaviorRows, channelHandoffRows, channelWidgetRows, integrationLifecycleRows, journeyChannelActivationRows, providerPackageRows } from "./data";

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
        packageName: "@cognidesk/integration-voice-twilio",
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
      "@cognidesk/integration-voice-twilio",
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
        behavior: {
          chatStart: {
            type: "message",
            text: "Hi! How can I help with flights today?",
            visibleToModel: true,
          },
        },
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
      ["Behavior", "chatStart: message \"Hi! How can I help with flights today?\" (model-visible)"],
      ["Handoff policy", "destinations"],
    ]);
  });

  it("shows journey activation and widget policy by channel", () => {
    const configuration: StudioConfigurationSurface = {
      targetId: "flight-demo-local",
      capturedAt: "2026-06-17T00:00:00.000Z",
      channelSets: [],
      channels: [
        channel("chat", "chat", true, true, [{ journeyId: "handoff", enabled: true, providerPackageIds: ["messaging.discord"], policyIds: ["handoff-policy"] }]),
        channel("voice", "voice", true, false, [{ journeyId: "handoff", enabled: false, providerPackageIds: [], policyIds: [], reason: "Voice consent missing" }]),
        channel("email", "email", true, false, []),
        channel("legacy", "messaging", false, false, [{ journeyId: "handoff", enabled: true, providerPackageIds: [], policyIds: [] }]),
      ],
      providerPackages: [],
      capabilityAvailability: [],
      credentialStatuses: [],
      providerReadiness: [],
      policyIds: [],
    };

    expect(journeyChannelActivationRows(configuration, "handoff")).toEqual([
      expect.objectContaining({
        channelId: "chat",
        activation: "explicit-enabled",
        widgets: "enabled",
        providerPackages: "messaging.discord",
        policyIds: "handoff-policy",
      }),
      expect.objectContaining({
        channelId: "voice",
        activation: "explicit-disabled",
        widgets: "disabled",
        reason: "Voice consent missing",
      }),
      expect.objectContaining({
        channelId: "email",
        activation: "implicit-allowed",
        widgets: "disabled",
      }),
      expect.objectContaining({
        channelId: "legacy",
        activation: "channel-disabled",
      }),
    ]);
    expect(channelWidgetRows(configuration).map((row) => [row[0], row[3]])).toEqual([
      ["chat", "Enabled"],
      ["voice", "Disabled"],
      ["email", "Disabled"],
      ["legacy", "Disabled"],
    ]);
  });
});

function channel(
  id: string,
  kind: string,
  enabled: boolean,
  allowWidgets: boolean,
  flowActivations: StudioConfigurationSurface["channels"][number]["flowActivations"],
): StudioConfigurationSurface["channels"][number] {
  return {
    id,
    channel: kind,
    enabled,
    channelSetIds: [],
    providerPackageIds: [],
    enabledCapabilities: [],
    policyIds: [],
    policyDetails: [],
    flowActivations,
    behavior: { allowWidgets },
  };
}
