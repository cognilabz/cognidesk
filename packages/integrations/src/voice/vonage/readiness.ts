import type { VonageVoiceLiveCheckOptions } from "./contracts.js";
import { createVonageVoiceClient } from "./client.js";

export function createVonageVoiceLiveChecks(options: VonageVoiceLiveCheckOptions) {
  return [{
    id: "call-control",
    description: "Vonage Voice API call-control endpoint is reachable with the configured application JWT.",
    requiredCredentialIds: ["vonage-application"],
    async run(context: { signal?: AbortSignal }) {
      if (!options.testCallUuid) {
        return {
          details: {
            readiness: "jwt-configured",
            note: "Set testCallUuid to probe a specific call; outbound calls are not made by live checks.",
          },
        };
      }
      const client = options.client ?? createVonageVoiceClient(options);
      const call = await client.fetchCall(options.testCallUuid);
      if (context.signal?.aborted) throw new Error("Vonage live call-control check aborted.");
      return {
        details: {
          uuid: call.uuid,
          status: call.status,
          direction: call.direction,
        },
      };
    },
  }];
}
