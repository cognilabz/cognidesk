import type { GenesysPureConnectLiveCheckOptions } from "./contracts.js";
import { createGenesysPureConnectContactCenterClient } from "./client.js";

export function createGenesysPureConnectContactCenterLiveChecks(options: GenesysPureConnectLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "PureConnect ICWS can call the configured readiness endpoint.",
    requiredCredentialIds: ["genesys-pureconnect-icws-base-url"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createGenesysPureConnectContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("Genesys PureConnect readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}
