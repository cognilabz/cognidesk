import { defineChannelPolicy, defineProviderPackage } from "../../src/index.js";

export function ticketingOutputConfiguration(options: {
  policies?: Record<string, unknown>;
} = {}) {
  return {
    providerPackages: [defineProviderPackage({
      id: "ticketing.front",
      name: "Front",
      packageName: "@cognidesk/integration-ticketing-front",
      provider: "front",
      category: "ticketing",
      trustLevel: "verified",
      directions: ["bidirectional"],
      capabilities: [{
        capability: "send",
        audiences: ["customer-facing"],
        sideEffect: true,
        exposesSensitiveData: true,
        changesWorkflow: true,
      }],
    })],
    channels: [defineChannelPolicy({
      id: "ticketing",
      channel: "ticketing",
      audience: "customer-facing",
      providerPackageIds: ["ticketing.front"],
      enabledCapabilities: ["send"],
      outbound: {
        enabled: true,
        providerPackageIds: ["ticketing.front"],
        requiresProviderOutboundSupport: true,
        policyIds: ["front-send-policy"],
      },
      policies: options.policies ?? { "front-send-policy": { reviewer: "operator" } },
    })],
  };
}
