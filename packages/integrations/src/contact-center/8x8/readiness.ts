import type { EightByEightLiveCheckOptions } from "./contracts.js";
import { createEightByEightContactCenterClient } from "./client.js";

export function createEightByEightContactCenterLiveChecks(options: EightByEightLiveCheckOptions) {
  return [{
    id: "readiness",
    description: "8x8 Contact Center API access can call the configured readiness endpoint.",
    requiredCredentialIds: ["8x8-contact-center-api-base", "8x8-contact-center-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createEightByEightContactCenterClient(options);
      const result = await client.readiness();
      if (context.signal?.aborted) throw new Error("8x8 Contact Center readiness check aborted.");
      return { details: { ok: Boolean(result) } };
    },
  }];
}
