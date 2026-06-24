import { describe, expect, it } from "vitest";
import { evaluateCapabilityUse } from "@cognidesk/core";
import { FLIGHT_DISCORD_PROVIDER_PACKAGE_ID, flightDemoRuntimeChannels } from "../server/agent/policies.js";

describe("flight demo channel policies", () => {
  it("allows Discord support thread events on the community channel", () => {
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
      channels: flightDemoRuntimeChannels,
    });

    expect(decision).toMatchObject({ allowed: true });
  });
});
