import { defineChannelPolicy, type ChannelPolicyConfig } from "@cognidesk/core";

export const FLIGHT_MOCK_BOOKING_CAPABILITY = "flight.mock-booking.create";
export const FLIGHT_MOCK_BOOKING_POLICY_ID = "mock-booking-confirmation";
export const FLIGHT_DISCORD_PROVIDER_PACKAGE_ID = "messaging.discord";
export const FLIGHT_DISCORD_HANDOFF_POLICY_ID = "discord-human-handoff";
export const FLIGHT_SECURE_EMAIL_CHANNEL_ID = "flight-demo-secure-email";
export const FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID = "secure-email-login-switch";

export const flightDemoRuntimeChannels: ChannelPolicyConfig[] = [
  flightDemoRuntimeChannel("voice", { allowMarkdown: false, allowWidgets: false }),
  flightDemoRuntimeChannel("chat", { allowMarkdown: true, allowWidgets: true }),
  flightDemoRuntimeChannel("community", { allowMarkdown: true, allowWidgets: false }),
  defineChannelPolicy({
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
  }),
];

function flightDemoRuntimeChannel(
  channel: "voice" | "chat" | "community",
  behavior: { allowMarkdown: boolean; allowWidgets: boolean },
) {
  return defineChannelPolicy({
    id: channel,
    channel,
    enabled: true,
    channelSetIds: [],
    providerPackageIds: [FLIGHT_DISCORD_PROVIDER_PACKAGE_ID],
    enabledCapabilities: ["receive", "model.call-tools", FLIGHT_MOCK_BOOKING_CAPABILITY, "handoff", "thread"],
    flowActivations: [
      {
        journeyId: "human-handoff",
        providerPackageIds: [FLIGHT_DISCORD_PROVIDER_PACKAGE_ID],
        policyIds: [FLIGHT_DISCORD_HANDOFF_POLICY_ID],
        metadata: {
          destination: "discord-support-thread",
        },
      },
      {
        journeyId: "secure-email-login",
        policyIds: [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID],
        metadata: {
          destination: "secure-login-email",
          toChannelId: FLIGHT_SECURE_EMAIL_CHANNEL_ID,
        },
      },
    ],
    behavior,
    handoff: {
      enabled: true,
      providerPackageIds: [FLIGHT_DISCORD_PROVIDER_PACKAGE_ID],
      destinations: ["discord-support-thread"],
      sdkControlled: true,
      policyIds: [FLIGHT_DISCORD_HANDOFF_POLICY_ID],
      metadata: {
        journeyId: "human-handoff",
      },
    },
    policies: {
      [FLIGHT_MOCK_BOOKING_POLICY_ID]: {
        owner: "flight-demo",
        scope: "mock-booking-only",
        requiresExplicitConfirmation: true,
      },
      [FLIGHT_DISCORD_HANDOFF_POLICY_ID]: {
        owner: "flight-demo",
        scope: "discord-support-thread",
        journeyId: "human-handoff",
      },
      [FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID]: {
        owner: "flight-demo",
        scope: "secure-account-login-email",
        journeyId: "secure-email-login",
      },
    },
  });
}
