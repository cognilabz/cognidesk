import { describe, expect, it } from "vitest";
import { evaluateCapabilityUse } from "@cognidesk/core";
import {
  whatsappWebMessagingProviderManifest,
  whatsappMessagingProviderManifest,
} from "@cognidesk/integration-messaging-whatsapp";
import {
  FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
  FLIGHT_SECURE_EMAIL_CHANNEL_ID,
  FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID,
  FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
  FLIGHT_WHATSAPP_WEB_PROVIDER_PACKAGE_ID,
  createFlightDemoRuntimeChannels,
  flightDemoRuntimeChannels,
} from "../server/agent/policies.js";

describe("flight demo channel policies", () => {
  it("allows Discord support thread events on the community channel", () => {
    const channels = createFlightDemoRuntimeChannels({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: true, whatsapp: false },
    });
    const decision = evaluateCapabilityUse({
      request: {
        channel: "community",
        channelId: "discord-support-channel",
        capability: "receive",
        providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
        outbound: false,
        sideEffect: false,
        externallyVisible: false,
        exposesSensitiveData: false,
        changesWorkflow: false,
        requiredPolicyIds: [],
      },
      channels,
    });

    expect(decision).toMatchObject({ allowed: true });
    expect(journeyActivations(channels)).toContain("human-handoff");
    expect(journeyActivations(channels)).not.toContain("secure-email-login");
    expect(journeyActivations(channels)).not.toContain("whatsapp-customer-message");
  });

  it("omits Discord flow activations when only other integrations are enabled", () => {
    const channels = createFlightDemoRuntimeChannels({
      externalIntegrationJourneysEnabled: { secureEmail: true, discordHandoff: false, whatsapp: true },
    });

    expect(providerPackageIds(channels)).not.toContain(FLIGHT_DISCORD_PROVIDER_PACKAGE_ID);
    expect(journeyActivations(channels)).not.toContain("human-handoff");
  });

  it("allows explicitly approved WhatsApp outbound sends on the chat channel", () => {
    const channels = createFlightDemoRuntimeChannels({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: false, whatsapp: true },
    });
    const decision = evaluateCapabilityUse({
      request: {
        channel: "chat",
        capability: "send",
        providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
        outbound: true,
        sideEffect: true,
        externallyVisible: true,
        exposesSensitiveData: false,
        changesWorkflow: false,
        requiredPolicyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
      },
      channels,
      providerPackages: [whatsappMessagingProviderManifest],
    });

    expect(decision).toMatchObject({ allowed: true });
    expect(journeyActivations(channels)).toContain("whatsapp-customer-message");
    expect(journeyActivations(channels)).not.toContain("secure-email-login");
    expect(journeyActivations(channels)).not.toContain("human-handoff");
  });

  it("blocks WhatsApp outbound sends when only other integrations are enabled", () => {
    const decision = evaluateCapabilityUse({
      request: {
        channel: "chat",
        capability: "send",
        providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
        outbound: true,
        sideEffect: true,
        externallyVisible: true,
        exposesSensitiveData: false,
        changesWorkflow: false,
        requiredPolicyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
      },
      channels: createFlightDemoRuntimeChannels({
        externalIntegrationJourneysEnabled: { secureEmail: true, discordHandoff: true, whatsapp: false },
      }),
      providerPackages: [whatsappMessagingProviderManifest],
    });

    expect(decision.allowed).toBe(false);
  });

  it("allows WhatsApp outbound sends through the linked-device web provider when selected", () => {
    const channels = createFlightDemoRuntimeChannels({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: false, whatsapp: true },
      whatsappProviderPackageId: FLIGHT_WHATSAPP_WEB_PROVIDER_PACKAGE_ID,
    });
    const decision = evaluateCapabilityUse({
      request: {
        channel: "chat",
        capability: "send",
        providerPackageId: FLIGHT_WHATSAPP_WEB_PROVIDER_PACKAGE_ID,
        outbound: true,
        sideEffect: true,
        externallyVisible: true,
        exposesSensitiveData: false,
        changesWorkflow: false,
        requiredPolicyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
      },
      channels,
      providerPackages: [whatsappWebMessagingProviderManifest],
    });

    expect(decision).toMatchObject({ allowed: true });
    expect(providerPackageIds(channels)).toContain(FLIGHT_WHATSAPP_WEB_PROVIDER_PACKAGE_ID);
    expect(providerPackageIds(channels)).not.toContain(FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID);
    expect(whatsAppOutboundDeliveries(channels)).toEqual(["whatsapp-web-message"]);
  });

  it("derives WhatsApp delivery metadata from the selected provider package", () => {
    const channels = createFlightDemoRuntimeChannels({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: false, whatsapp: true },
      whatsappProviderPackageId: FLIGHT_WHATSAPP_WEB_PROVIDER_PACKAGE_ID,
      whatsappDelivery: "whatsapp-cloud-api-message",
    });

    expect(whatsAppOutboundDeliveries(channels)).toEqual(["whatsapp-web-message"]);
  });

  it("adds secure email channel policies only when secure email is enabled", () => {
    const enabledChannels = createFlightDemoRuntimeChannels({
      externalIntegrationJourneysEnabled: { secureEmail: true, discordHandoff: false, whatsapp: false },
    });
    const disabledChannels = createFlightDemoRuntimeChannels({
      externalIntegrationJourneysEnabled: { secureEmail: false, discordHandoff: true, whatsapp: true },
    });

    expect(enabledChannels.map((channel) => channel.id)).toContain(FLIGHT_SECURE_EMAIL_CHANNEL_ID);
    expect(journeyActivations(enabledChannels)).toContain("secure-email-login");
    expect(journeyActivations(enabledChannels)).not.toContain("human-handoff");
    expect(journeyActivations(enabledChannels)).not.toContain("whatsapp-customer-message");
    expect(disabledChannels.map((channel) => channel.id)).not.toContain(FLIGHT_SECURE_EMAIL_CHANNEL_ID);
    expect(journeyActivations(disabledChannels)).not.toContain("secure-email-login");
  });

  it("keeps the legacy all-on channel export available for integration tests", () => {
    expect(journeyActivations(flightDemoRuntimeChannels)).toEqual(expect.arrayContaining([
      "human-handoff",
      "secure-email-login",
      "whatsapp-customer-message",
    ]));
  });
});

function journeyActivations(channels: typeof flightDemoRuntimeChannels) {
  return channels.flatMap((channel) => (
    channel.flowActivations?.map((activation) => activation.journeyId) ?? []
  ));
}

function providerPackageIds(channels: typeof flightDemoRuntimeChannels) {
  return channels.flatMap((channel) => channel.providerPackageIds ?? []);
}

function whatsAppOutboundDeliveries(channels: typeof flightDemoRuntimeChannels) {
  return [...new Set(channels
    .filter((channel) => channel.providerPackageIds?.includes(FLIGHT_WHATSAPP_WEB_PROVIDER_PACKAGE_ID))
    .map((channel) => channel.outbound?.metadata?.delivery))];
}
