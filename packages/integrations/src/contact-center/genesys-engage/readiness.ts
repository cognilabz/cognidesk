import type { GenesysEngageLiveCheckOptions } from "./contracts.js";
import { createGenesysEngageContactCenterClient } from "./client.js";

export function createGenesysEngageContactCenterLiveChecks(options: GenesysEngageLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "Genesys Engage/GMS can call the configured readiness endpoint.",
    requiredCredentialIds: ["genesys-engage-gms-base-url"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createGenesysEngageContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Genesys Engage readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}
