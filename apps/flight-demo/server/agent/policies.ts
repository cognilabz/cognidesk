import { defineChannelPolicy, type ChannelPolicyConfig } from "@cognidesk/core";

export const FLIGHT_MOCK_BOOKING_CAPABILITY = "flight.mock-booking.create";
export const FLIGHT_MOCK_BOOKING_POLICY_ID = "mock-booking-confirmation";

export const flightDemoRuntimeChannels: ChannelPolicyConfig[] = [
  flightDemoRuntimeChannel("voice", { allowMarkdown: false, allowWidgets: false }),
  flightDemoRuntimeChannel("chat", { allowMarkdown: true, allowWidgets: true }),
];

function flightDemoRuntimeChannel(
  channel: "voice" | "chat",
  behavior: { allowMarkdown: boolean; allowWidgets: boolean },
) {
  return defineChannelPolicy({
    id: channel,
    channel,
    enabled: true,
    channelSetIds: [],
    providerPackageIds: [],
    enabledCapabilities: ["receive", "model.call-tools", FLIGHT_MOCK_BOOKING_CAPABILITY],
    flowActivations: [],
    behavior,
    policies: {
      [FLIGHT_MOCK_BOOKING_POLICY_ID]: {
        owner: "flight-demo",
        scope: "mock-booking-only",
        requiresExplicitConfirmation: true,
      },
    },
  });
}
