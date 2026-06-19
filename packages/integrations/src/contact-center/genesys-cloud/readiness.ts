import { createGenesysCloudContactCenterClient } from "./client.js";
import type { GenesysCloudLiveCheckOptions } from "./contracts.js";

export function createGenesysCloudContactCenterLiveChecks(options: GenesysCloudLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "Genesys Cloud OAuth access can call the configured readiness endpoint.",
    requiredCredentialIds: ["genesys-cloud-region", "genesys-cloud-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createGenesysCloudContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Genesys Cloud readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}
