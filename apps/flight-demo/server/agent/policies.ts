import { defineChannelPolicy, type ChannelPolicyConfig } from "@cognidesk/core";
import type { FlightDemoExternalIntegrationJourneyFlags } from "../config.js";

export const FLIGHT_MOCK_BOOKING_CAPABILITY = "flight.mock-booking.create";
export const FLIGHT_MOCK_BOOKING_POLICY_ID = "mock-booking-confirmation";
export const FLIGHT_DISCORD_PROVIDER_PACKAGE_ID = "messaging.discord";
export const FLIGHT_DISCORD_HANDOFF_POLICY_ID = "discord-human-handoff";
export const FLIGHT_WHATSAPP_CLOUD_PROVIDER_PACKAGE_ID = "messaging.whatsapp";
export const FLIGHT_WHATSAPP_WEB_PROVIDER_PACKAGE_ID = "messaging.whatsapp-web";
export const FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID = FLIGHT_WHATSAPP_CLOUD_PROVIDER_PACKAGE_ID;
export const FLIGHT_WHATSAPP_CHANNEL_ID = "flight-demo-whatsapp";
export const FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID = "whatsapp-customer-message";
export const FLIGHT_SECURE_EMAIL_CHANNEL_ID = "flight-demo-secure-email";
export const FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID = "secure-email-login-switch";

export interface CreateFlightDemoRuntimeChannelsOptions {
  externalIntegrationJourneysEnabled?: boolean | Partial<FlightDemoExternalIntegrationJourneyFlags>;
  whatsappProviderPackageId?: string;
  whatsappDelivery?: string;
}

export function createFlightDemoRuntimeChannels(options: CreateFlightDemoRuntimeChannelsOptions = {}): ChannelPolicyConfig[] {
  const externalIntegrationJourneysEnabled = resolveExternalIntegrationJourneyFlags(
    options.externalIntegrationJourneysEnabled,
    {
      secureEmail: true,
      discordHandoff: true,
      whatsapp: true,
    },
  );
  const whatsappPolicyOptions = {
    ...(options.whatsappProviderPackageId ? { whatsappProviderPackageId: options.whatsappProviderPackageId } : {}),
    ...(options.whatsappDelivery ? { whatsappDelivery: options.whatsappDelivery } : {}),
  };
  return [
    flightDemoRuntimeChannel(
      "voice",
      { allowMarkdown: false, allowWidgets: false },
      externalIntegrationJourneysEnabled,
      whatsappPolicyOptions,
    ),
    flightDemoRuntimeChannel(
      "chat",
      { allowMarkdown: true, allowWidgets: true },
      externalIntegrationJourneysEnabled,
      whatsappPolicyOptions,
    ),
    flightDemoRuntimeChannel(
      "community",
      { allowMarkdown: true, allowWidgets: false },
      externalIntegrationJourneysEnabled,
      whatsappPolicyOptions,
    ),
    ...(externalIntegrationJourneysEnabled.secureEmail ? [secureEmailChannelPolicy()] : []),
    ...(externalIntegrationJourneysEnabled.whatsapp ? [whatsAppChannelPolicy({
      providerPackageId: options.whatsappProviderPackageId ?? FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
      delivery: options.whatsappDelivery ?? "whatsapp-cloud-api-message",
    })] : []),
  ];
}

export const flightDemoRuntimeChannels: ChannelPolicyConfig[] = createFlightDemoRuntimeChannels({
  externalIntegrationJourneysEnabled: true,
});

function secureEmailChannelPolicy() {
  return defineChannelPolicy({
    id: FLIGHT_SECURE_EMAIL_CHANNEL_ID,
    channel: "email",
    enabled: true,
    audience: "customer-facing",
    channelSetIds: [],
    providerPackageIds: [],
    enabledCapabilities: ["receive", "send", "draft", "thread", "handoff"],
    flowActivations: [{
      journeyId: "secure-email-login",
      policyIds: [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID],
      metadata: {
        destination: "secure-login-email",
      },
    }],
    outbound: {
      enabled: true,
      requiresProviderOutboundSupport: false,
      policyIds: [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID],
      metadata: {
        delivery: "smtp-secure-login-email",
      },
    },
    behavior: {
      allowMarkdown: false,
      allowWidgets: false,
      draftFirst: true,
    },
    handoff: {
      enabled: true,
      destinations: ["secure-login-email"],
      sdkControlled: true,
      policyIds: [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID],
    },
    policies: {
      [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID]: {
        owner: "flight-demo",
        scope: "secure-account-login-email",
        requiresLogin: true,
        allowedInputs: ["bookingReference", "accountEmail"],
      },
    },
    metadata: {
      provider: "smtp",
      destination: "secure-login-email",
    },
  });
}

function whatsAppChannelPolicy(options: { providerPackageId: string; delivery: string }) {
  return defineChannelPolicy({
    id: FLIGHT_WHATSAPP_CHANNEL_ID,
    channel: "messaging",
    enabled: true,
    audience: "customer-facing",
    channelSetIds: [],
    providerPackageIds: [options.providerPackageId],
    enabledCapabilities: ["receive", "send", "draft", "media", "attach", "notify", "read-provider-object"],
    flowActivations: [{
      journeyId: "whatsapp-customer-message",
      providerPackageIds: [options.providerPackageId],
      policyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
      metadata: {
        destination: "whatsapp-customer-message",
      },
    }],
    outbound: {
      enabled: true,
      providerPackageIds: [options.providerPackageId],
      policyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
      metadata: {
        delivery: options.delivery,
      },
    },
    behavior: {
      allowMarkdown: false,
      allowWidgets: false,
      draftFirst: true,
    },
    policies: {
      [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID]: {
        owner: "flight-demo",
        scope: "customer-whatsapp-message",
        requiresExplicitConfirmation: true,
        serviceWindowRequiredForFreeformText: true,
      },
    },
    metadata: {
      provider: "whatsapp",
      destination: "whatsapp-customer-message",
    },
  });
}

function flightDemoRuntimeChannel(
  channel: "voice" | "chat" | "community",
  behavior: { allowMarkdown: boolean; allowWidgets: boolean },
  externalIntegrationJourneysEnabled: FlightDemoExternalIntegrationJourneyFlags,
  options: { whatsappProviderPackageId?: string; whatsappDelivery?: string } = {},
) {
  const whatsappProviderPackageId = options.whatsappProviderPackageId ?? FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID;
  return defineChannelPolicy({
    id: channel,
    channel,
    enabled: true,
    channelSetIds: [],
    providerPackageIds: [
      ...(externalIntegrationJourneysEnabled.discordHandoff ? [FLIGHT_DISCORD_PROVIDER_PACKAGE_ID] : []),
      ...(externalIntegrationJourneysEnabled.whatsapp ? [whatsappProviderPackageId] : []),
    ],
    enabledCapabilities: [
      "receive",
      "model.call-tools",
      FLIGHT_MOCK_BOOKING_CAPABILITY,
      ...(externalIntegrationJourneysEnabled.secureEmail || externalIntegrationJourneysEnabled.discordHandoff
        ? ["handoff", "thread"]
        : []),
      ...(externalIntegrationJourneysEnabled.whatsapp ? ["send", "notify"] : []),
    ],
    flowActivations: [
      ...(externalIntegrationJourneysEnabled.discordHandoff ? [{
        journeyId: "human-handoff",
        providerPackageIds: [FLIGHT_DISCORD_PROVIDER_PACKAGE_ID],
        policyIds: [FLIGHT_DISCORD_HANDOFF_POLICY_ID],
        metadata: {
          destination: "discord-support-thread",
        },
      }] : []),
      ...(externalIntegrationJourneysEnabled.secureEmail ? [{
        journeyId: "secure-email-login",
        policyIds: [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID],
        metadata: {
          destination: "secure-login-email",
          toChannelId: FLIGHT_SECURE_EMAIL_CHANNEL_ID,
        },
      }] : []),
      ...(externalIntegrationJourneysEnabled.whatsapp ? [{
        journeyId: "whatsapp-customer-message",
        providerPackageIds: [whatsappProviderPackageId],
        policyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
        metadata: {
          destination: "whatsapp-customer-message",
          toChannelId: FLIGHT_WHATSAPP_CHANNEL_ID,
        },
      }] : []),
    ],
    outbound: externalIntegrationJourneysEnabled.whatsapp ? {
      enabled: true,
      providerPackageIds: [whatsappProviderPackageId],
      policyIds: [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID],
      metadata: {
        delivery: options.whatsappDelivery ?? "whatsapp-cloud-api-message",
      },
    } : { enabled: false },
    behavior,
    handoff: externalIntegrationJourneysEnabled.discordHandoff ? {
      enabled: true,
      providerPackageIds: [FLIGHT_DISCORD_PROVIDER_PACKAGE_ID],
      destinations: ["discord-support-thread"],
      sdkControlled: true,
      policyIds: [FLIGHT_DISCORD_HANDOFF_POLICY_ID],
      metadata: {
        journeyId: "human-handoff",
      },
    } : { enabled: false },
    policies: {
      [FLIGHT_MOCK_BOOKING_POLICY_ID]: {
        owner: "flight-demo",
        scope: "mock-booking-only",
        requiresExplicitConfirmation: true,
      },
      ...(externalIntegrationJourneysEnabled.discordHandoff ? {
        [FLIGHT_DISCORD_HANDOFF_POLICY_ID]: {
          owner: "flight-demo",
          scope: "discord-support-thread",
          journeyId: "human-handoff",
        },
      } : {}),
      ...(externalIntegrationJourneysEnabled.secureEmail ? {
        [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID]: {
          owner: "flight-demo",
          scope: "secure-account-login-email",
          journeyId: "secure-email-login",
        },
      } : {}),
      ...(externalIntegrationJourneysEnabled.whatsapp ? {
        [FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID]: {
          owner: "flight-demo",
          scope: "customer-whatsapp-message",
          journeyId: "whatsapp-customer-message",
          requiresExplicitConfirmation: true,
        },
      } : {}),
    },
  });
}

function resolveExternalIntegrationJourneyFlags(
  option: CreateFlightDemoRuntimeChannelsOptions["externalIntegrationJourneysEnabled"],
  fallback: FlightDemoExternalIntegrationJourneyFlags,
): FlightDemoExternalIntegrationJourneyFlags {
  if (option === undefined) return fallback;
  if (typeof option === "boolean") {
    return {
      secureEmail: option,
      discordHandoff: option,
      whatsapp: option,
    };
  }
  return {
    secureEmail: option.secureEmail ?? fallback.secureEmail,
    discordHandoff: option.discordHandoff ?? fallback.discordHandoff,
    whatsapp: option.whatsapp ?? fallback.whatsapp,
  };
}
