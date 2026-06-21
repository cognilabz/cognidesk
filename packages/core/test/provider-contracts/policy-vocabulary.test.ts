import { describe, expect, it } from "vitest";
import {
  categoryOperationLevels,
  coreChannelCapabilities,
  coreConversationChannels,
  coreProviderCategories,
  defineChannelContext,
  defineProviderPackage,
  evaluateCapabilityUse,
  providerCapabilityCoverageLevels,
} from "../../src/index.js";

describe("provider policy and vocabulary contracts", () => {
  it("publishes the expected core capability vocabulary", () => {
      expect(coreChannelCapabilities).toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "thread",
        "attach",
        "media",
        "handoff",
        "schedule",
        "cleanup",
        "create-provider-object",
        "update-provider-object",
        "search-provider-object",
        "transfer",
        "artifact",
      ]));
      expect(coreConversationChannels).toContain("cobrowsing");
      expect(coreProviderCategories).toContain("cobrowsing");
      expect(categoryOperationLevels).toEqual(["required", "recommended", "optional", "extension"]);
      expect(providerCapabilityCoverageLevels).toEqual(["partial", "standard", "full"]);
    });

    it("normalizes channel context with default capability flags", () => {
      const email = defineChannelContext({
        channelId: "email.gmail",
        kind: "email",
        provider: "gmail",
        externalThreadId: "thread_123",
        capabilities: {
          attachments: true,
        },
      });

      expect(email).toMatchObject({
        channelId: "email.gmail",
        kind: "email",
        provider: "gmail",
        externalThreadId: "thread_123",
        capabilities: {
          async: true,
          threaded: true,
          html: true,
          attachments: true,
        },
      });
      expect(defineChannelContext("sms").capabilities.templates).toBe(true);
      expect(defineChannelContext("cobrowsing")).toMatchObject({
        kind: "cobrowsing",
        capabilities: {
          realtime: true,
          widgets: true,
          supportsHumanTransfer: true,
        },
      });
    });

    it("fails closed when a consequential capability lacks configuration or policy", () => {
      expect(evaluateCapabilityUse({
        request: {
          channel: "sms",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["sensitiveData"],
        },
        channels: [],
      })).toMatchObject({
        allowed: false,
        code: "missing-channel-configuration",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["approval"],
        },
        channels: [{
          id: "email-support",
          channel: "email",
          enabledCapabilities: ["draft"],
        }],
      })).toMatchObject({
        allowed: false,
        code: "capability-not-enabled",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "voice",
          providerPackageId: "voice.twilio",
          capability: "transfer",
          changesWorkflow: true,
          requiredPolicyIds: ["handoff"],
        },
        channels: [{
          id: "voice-support",
          channel: "voice",
          enabledCapabilities: ["transfer"],
          policies: {},
        }],
        availability: [{
          providerPackageId: "voice.twilio",
          capability: "transfer",
          status: "blocked",
          blockers: [{
            code: "missing-credentials",
            message: "Twilio credentials are not configured.",
            kind: "missing-credentials",
          }],
        }],
      })).toMatchObject({
        allowed: false,
        code: "capability-blocked",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "voice",
          capability: "transfer",
          changesWorkflow: true,
          requiredPolicyIds: ["handoff"],
        },
        channels: [{
          id: "voice-support",
          channel: "voice",
          enabledCapabilities: ["transfer"],
          policies: {},
        }],
      })).toMatchObject({
        allowed: false,
        code: "missing-policy",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "voice",
          capability: "transfer",
          changesWorkflow: true,
          requiredPolicyIds: ["handoff"],
        },
        channels: [{
          id: "voice-support",
          channel: "voice",
          enabledCapabilities: ["transfer"],
          policies: {
            handoff: { queues: ["tier-1"] },
          },
        }],
      })).toMatchObject({
        allowed: true,
        policy: {
          id: "voice-support",
        },
      });
    });

    it("fails closed for disabled policies and isolates policies with the same channel kind", () => {
      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          channelId: "email.support",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["approval"],
        },
        channels: [{
          id: "email.support",
          channel: "email",
          enabled: false,
          enabledCapabilities: ["send"],
          policies: {
            approval: { reviewer: "operator" },
          },
        }],
      })).toMatchObject({
        allowed: false,
        code: "missing-channel-configuration",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          channelId: "email.billing",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["approval"],
        },
        channels: [
          {
            id: "email.support",
            channel: "email",
            enabledCapabilities: ["send"],
            policies: {
              approval: { reviewer: "operator" },
            },
          },
          {
            id: "email.billing",
            channel: "email",
            enabledCapabilities: ["draft"],
            policies: {
              approval: { reviewer: "operator" },
            },
          },
        ],
      })).toMatchObject({
        allowed: false,
        code: "capability-not-enabled",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          channelId: "email.billing",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["approval"],
        },
        channels: [{
          id: "email.support",
          channel: "email",
          enabledCapabilities: ["send"],
          policies: {
            approval: { reviewer: "operator" },
          },
        }],
      })).toMatchObject({
        allowed: false,
        code: "missing-channel-configuration",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          channelId: "email.billing",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["approval"],
        },
        channels: [{
          id: "email",
          channel: "email",
          enabledCapabilities: ["send"],
          policies: {
            approval: { reviewer: "operator" },
          },
        }],
      })).toMatchObject({
        allowed: true,
        policy: {
          id: "email",
        },
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          channelId: "email",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["approval"],
        },
        channels: [{
          id: "email.support",
          channel: "email",
          enabledCapabilities: ["send"],
          policies: {
            approval: { reviewer: "operator" },
          },
        }],
      })).toMatchObject({
        allowed: false,
        code: "missing-channel-configuration",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          channelId: "email",
          capability: "send",
          externallyVisible: true,
          requiredPolicyIds: ["approval"],
        },
        channels: [{
          id: "email",
          channel: "email",
          enabledCapabilities: ["send"],
          policies: {
            approval: { reviewer: "operator" },
          },
        }],
      })).toMatchObject({
        allowed: true,
        policy: {
          id: "email",
        },
      });
    });

    it("enforces provider outbound direction only for SDK-declared outbound use", () => {
      const providerPackages = [
        defineProviderPackage({
          id: "voice.inbound-only",
          name: "Inbound Voice",
          packageName: "@cognidesk/integration-voice-inbound-only",
          provider: "voiceco",
          category: "voice",
          directions: ["inbound-only"],
          capabilities: [{ capability: "send" }],
        }),
        defineProviderPackage({
          id: "voice.twilio",
          name: "Twilio Voice",
          packageName: "@cognidesk/integrations",
          provider: "twilio",
          category: "voice",
          directions: ["bidirectional"],
          capabilities: [{ capability: "send" }],
        }),
      ];
      const channels = [{
        id: "voice-support",
        channel: "voice",
        enabledCapabilities: ["send"],
        outbound: {
          enabled: true,
          providerPackageIds: ["voice.twilio", "voice.inbound-only"],
          requiresProviderOutboundSupport: true,
        },
        policies: {},
      }];

      expect(evaluateCapabilityUse({
        request: {
          channel: "voice",
          capability: "send",
          providerPackageId: "voice.inbound-only",
          outbound: true,
        },
        channels,
        providerPackages,
      })).toMatchObject({
        allowed: false,
        code: "provider-direction-not-supported",
      });

      expect(evaluateCapabilityUse({
        request: {
          channel: "voice",
          capability: "send",
          providerPackageId: "voice.twilio",
          outbound: true,
        },
        channels,
        providerPackages,
      })).toMatchObject({
        allowed: true,
        policy: {
          id: "voice-support",
        },
      });
    });
});
