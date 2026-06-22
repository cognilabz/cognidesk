import { describe, expect, it } from "vitest";
import {
  ChannelSetConfigSchema,
  ProviderReadinessSchema,
  createProviderRegistry,
  defineCapabilityAvailability,
  defineChannelPolicy,
  defineIntegrationCategoryProfile,
  defineProviderPackage,
  evaluateCapabilityUse,
  isCoreChannelCapability,
} from "../../src/index.js";

describe("provider manifest and registry contracts", () => {
  it("validates provider manifests without granting runtime permission", () => {
      const manifest = defineProviderPackage({
        id: "voice.twilio",
        name: "Twilio Voice",
        packageName: "@cognidesk/integrations",
        provider: "twilio",
        category: "voice",
        trustLevel: "official",
        directions: ["inbound-only", "outbound-only"],
        channelAudiences: ["customer-facing"],
        capabilities: [
          {
            capability: "receive",
            label: "Receive calls",
            audiences: ["customer-facing"],
          },
          {
            capability: "transfer",
            sideEffect: true,
            changesWorkflow: true,
            audiences: ["customer-facing"],
          },
        ],
        credentialRequirements: [{
          id: "twilio-account",
          scopes: ["calls:read", "calls:write"],
        }],
      });

      expect(manifest.packageName).toBe("@cognidesk/integrations");
      expect(manifest.capabilities.map((capability) => capability.capability)).toContain("transfer");
      expect(manifest.credentialRequirements[0]?.required).toBe(true);
    });

    it("keeps provider object operations generic for ticketing and service systems", () => {
      const manifest = defineProviderPackage({
        id: "ticketing.servicenow",
        name: "ServiceNow",
        packageName: "@cognidesk/integrations",
        provider: "servicenow",
        category: "ticketing",
        trustLevel: "verified",
        directions: ["bidirectional"],
        channelAudiences: ["mixed"],
        capabilities: [{
          capability: "update-provider-object",
          audiences: ["internal-support"],
          sideEffect: true,
          changesWorkflow: true,
          providerObjects: [{
            kind: "incident",
            label: "Incident",
          }],
        }],
      });

      expect(manifest.capabilities[0]?.providerObjects?.[0]?.kind).toBe("incident");
    });

    it("allows declared extension capabilities but makes them detectable", () => {
      const manifest = defineProviderPackage({
        id: "workplace.slack",
        name: "Slack",
        packageName: "@cognidesk/integrations",
        provider: "slack",
        category: "workplace",
        directions: ["send-only"],
        channelAudiences: ["internal-support"],
        capabilities: [{
          capability: "open-slack-canvas",
          extension: true,
          audiences: ["internal-support"],
          sideEffect: true,
        }],
      });

      expect(manifest.capabilities[0]?.extension).toBe(true);
      expect(isCoreChannelCapability("open-slack-canvas")).toBe(false);
      expect(isCoreChannelCapability("send")).toBe(true);
    });

    it("separates capability availability from channel policy enablement", () => {
      const policy = defineChannelPolicy({
        id: "voice-support",
        channel: "voice",
        enabled: true,
        audience: "customer-facing",
        channelSetIds: ["flight-demo-realtime"],
        providerPackageIds: ["voice.twilio"],
        enabledCapabilities: ["receive", "transfer"],
        flowActivations: [{
          journeyId: "human-handoff",
          enabled: true,
          policyIds: ["confirmation"],
        }],
        behavior: {
          tone: "short-spoken",
          maxWords: 40,
          allowMarkdown: false,
        },
        outbound: {
          enabled: true,
          providerPackageIds: ["voice.twilio"],
          requiresProviderOutboundSupport: true,
          policyIds: ["outboundContact"],
        },
        handoff: {
          enabled: true,
          providerPackageIds: ["ticketing.servicenow"],
          destinations: ["servicenow"],
          policyIds: ["confirmation"],
        },
        policies: {
          confirmation: { requiredFor: ["transfer"] },
        },
      });
      const blocked = defineCapabilityAvailability({
        providerPackageId: "voice.twilio",
        capability: "transfer",
        status: "blocked",
        blockers: [{
          code: "missing-credentials",
          message: "Twilio credentials are not configured.",
          kind: "missing-credentials",
        }],
      });

      expect(policy.enabledCapabilities).toEqual(["receive", "transfer"]);
      expect(policy.providerPackageIds).toEqual(["voice.twilio"]);
      expect(policy.channelSetIds).toEqual(["flight-demo-realtime"]);
      expect(policy.flowActivations[0]).toMatchObject({ journeyId: "human-handoff", enabled: true });
      expect(policy.behavior).toMatchObject({ tone: "short-spoken", maxWords: 40, allowMarkdown: false });
      expect(policy.outbound).toMatchObject({ enabled: true, requiresProviderOutboundSupport: true });
      expect(policy.handoff).toMatchObject({ enabled: true, destinations: ["servicenow"] });
      expect(blocked.blockers[0]?.kind).toBe("missing-credentials");
    });

    it("models SDK-owned channel sets and provider readiness without enabling live integrations", () => {
      const channelSet = ChannelSetConfigSchema.parse({
        id: "flight-demo-support",
        label: "Support channels",
        channelIds: ["flight-demo-email", "flight-demo-ticketing"],
        channels: ["email", "ticketing"],
        conversationContinuity: {
          mode: "sdk-decides",
          crossChannel: true,
          policy: "Application decides whether external threads link to one Cognidesk conversation.",
        },
      });
      const readiness = ProviderReadinessSchema.parse({
        providerPackageId: "ticketing.servicenow",
        status: "blocked",
        live: false,
        sandbox: false,
        blockers: [{
          code: "missing-servicenow-token",
          message: "ServiceNow OAuth credentials are required for live verification.",
          kind: "missing-credentials",
        }],
        remediationActions: [{
          id: "configure-servicenow-oauth",
          label: "Configure ServiceNow OAuth",
          kind: "configure",
        }],
      });

      expect(channelSet.conversationContinuity).toMatchObject({
        mode: "sdk-decides",
        crossChannel: true,
      });
      expect(readiness).toMatchObject({
        providerPackageId: "ticketing.servicenow",
        status: "blocked",
        live: false,
        sandbox: false,
      });
      expect(ProviderReadinessSchema.parse({
        providerPackageId: "ticketing.servicenow",
        status: "scoped-verified",
        live: true,
        checkSource: "live-check",
      })).toMatchObject({
        status: "scoped-verified",
        live: true,
      });
      expect(ProviderReadinessSchema.parse({
        providerPackageId: "ticketing.servicenow",
        status: "full-api-verified",
        live: true,
        checkSource: "external-coverage-audit",
      })).toMatchObject({
        status: "full-api-verified",
        live: true,
      });
    });

    it("queries provider registry metadata without enabling runtime behavior", () => {
      const registry = createProviderRegistry([
        {
          id: "email.gmail",
          name: "Gmail",
          packageName: "@cognidesk/integrations",
          provider: "gmail",
          category: "email",
          trustLevel: "official",
          directions: ["bidirectional"],
          channelAudiences: ["customer-facing"],
          capabilities: [{ capability: "draft" }, { capability: "send" }],
        },
        {
          id: "ticketing.zendesk",
          name: "Zendesk",
          packageName: "@cognidesk/integrations",
          provider: "zendesk",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          channelAudiences: ["mixed"],
          capabilities: [{ capability: "handoff" }, { capability: "create-provider-object" }],
        },
      ]);

      expect(registry.list({ category: "email", capabilities: ["draft"] }).map((provider) => provider.id))
        .toEqual(["email.gmail"]);
      expect(registry.list({ capabilities: ["handoff"] }).map((provider) => provider.id))
        .toEqual(["ticketing.zendesk"]);
      expect(evaluateCapabilityUse({
        request: {
          channel: "email",
          capability: "send",
          externallyVisible: true,
        },
        channels: [],
      })).toMatchObject({
        allowed: false,
        code: "missing-channel-configuration",
      });
    });

    it("defines category operation profiles with useful defaults but no provider policy", () => {
      const profile = defineIntegrationCategoryProfile({
        id: "ticketing.default",
        category: "ticketing",
        label: "Ticketing",
        providerObjects: [{
          kind: "ticket",
          label: "Ticket",
        }],
        operations: [
          {
            alias: "ticket.read",
            capability: "read-provider-object",
            providerObject: "ticket",
            level: "required",
            inputSchemaRef: "ReadTicketInput",
            outputSchemaRef: "Ticket",
          },
          {
            alias: "ticket.comment.create",
            capability: "send",
            providerObject: "ticket",
            audiences: ["customer-facing", "mixed"],
            sideEffect: true,
            externallyVisible: true,
            requiresApproval: true,
            requiredPolicyIds: ["public-reply-approval"],
            level: "required",
          },
          {
            alias: "ticket.search",
            capability: "search-provider-object",
            providerObject: "ticket",
            level: "recommended",
          },
          {
            alias: "ticket.tags.update",
            capability: "update-provider-object",
            providerObject: "ticket",
          },
        ],
        events: [{
          kind: "ticket.created",
          direction: "inbound",
          operationAlias: "ticket.read",
        }],
        outputs: [{
          intent: "message.reply",
          capability: "send",
          operationAlias: "ticket.comment.create",
          externallyVisible: true,
          requiresApproval: true,
        }],
        dataSources: [{
          id: "ticket.history",
          capability: "read-provider-object",
          operationAlias: "ticket.read",
          providerObjects: ["ticket"],
          exposesSensitiveData: true,
        }],
        notes: ["Core owns the shared IntegrationCategoryProfile contract; @cognidesk/integration-kit owns the concrete provider-neutral category profiles."],
      });

      expect(profile.id).toBe("ticketing.default");
      expect(profile.category).toBe("ticketing");
      expect(profile.providerObjects[0]).toMatchObject({ kind: "ticket" });
      expect(profile.operations.map((operation) => [operation.alias, operation.level])).toEqual([
        ["ticket.read", "required"],
        ["ticket.comment.create", "required"],
        ["ticket.search", "recommended"],
        ["ticket.tags.update", "optional"],
      ]);
      expect(profile.operations[1]).toMatchObject({
        audiences: ["customer-facing", "mixed"],
        requiresApproval: true,
        requiredPolicyIds: ["public-reply-approval"],
      });
      expect(profile.events[0]).toMatchObject({ kind: "ticket.created", direction: "inbound" });
      expect(profile.outputs[0]).toMatchObject({ intent: "message.reply", requiresApproval: true });
      expect(profile.dataSources[0]).toMatchObject({ id: "ticket.history", providerObjects: ["ticket"] });
      expect(profile.notes).toEqual(["Core owns the shared IntegrationCategoryProfile contract; @cognidesk/integration-kit owns the concrete provider-neutral category profiles."]);
    });
});
