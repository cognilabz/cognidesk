import { createRcsMessagingClient } from "./client.js";
import type { RcsLiveCheckOptions } from "./contracts.js";

export function createRcsMessagingLiveChecks(options: RcsLiveCheckOptions) {
  return [
    {
      id: "agent",
      description: "RCS Business Communications agent resource is reachable with the configured OAuth credentials.",
      requiredCredentialIds: ["rcs-agent", "rcs-access-token"],
      async run(context: { signal?: AbortSignal }) {
        if (!options.agentName) return { details: { agentName: "not-configured-management-check-skipped" } };
        const client = options.client ?? createRcsMessagingClient(options);
        const agent = await client.getAgent(options.agentName);
        if (context.signal?.aborted) throw new Error("RCS live agent check aborted.");
        return {
          details: {
            name: typeof agent.name === "string" ? agent.name : undefined,
            displayName: typeof agent.displayName === "string" ? agent.displayName : undefined,
          },
        };
      },
    },
    {
      id: "launch",
      description: "RCS agent launch state is readable for Studio readiness.",
      requiredCredentialIds: ["rcs-agent", "rcs-access-token"],
      async run(context: { signal?: AbortSignal }) {
        if (!options.agentName) return { details: { agentName: "not-configured-launch-check-skipped" } };
        const client = options.client ?? createRcsMessagingClient(options);
        const launch = await client.getAgentLaunch(options.agentName);
        if (context.signal?.aborted) throw new Error("RCS live launch check aborted.");
        return { details: launch };
      },
    },
    {
      id: "verification",
      description: "RCS agent verification state is readable for Studio readiness.",
      requiredCredentialIds: ["rcs-agent", "rcs-access-token"],
      async run(context: { signal?: AbortSignal }) {
        if (!options.agentName) return { details: { agentName: "not-configured-verification-check-skipped" } };
        const client = options.client ?? createRcsMessagingClient(options);
        const verification = await client.getAgentVerification(options.agentName);
        if (context.signal?.aborted) throw new Error("RCS live verification check aborted.");
        return { details: verification };
      },
    },
    {
      id: "capabilities",
      description: "Optional RBM phone capability check can confirm a tester or recipient is reachable.",
      requiredCredentialIds: ["rcs-agent", "rcs-access-token"],
      async run(context: { signal?: AbortSignal }) {
        if (!options.capabilityPhoneNumber) {
          return { details: { phoneNumber: "not-configured-capability-check-skipped" } };
        }
        const client = options.client ?? createRcsMessagingClient(options);
        const capabilities = await client.getCapabilities({ phoneNumber: options.capabilityPhoneNumber });
        if (context.signal?.aborted) throw new Error("RCS live capability check aborted.");
        return {
          details: {
            carrier: capabilities.carrier,
            features: capabilities.features,
          },
        };
      },
    },
  ];
}
