import type { AmazonConnectLiveCheckOptions } from "./contracts.js";
import { createAmazonConnectContactCenterClient } from "./client.js";

export function createAmazonConnectContactCenterLiveChecks(options: AmazonConnectLiveCheckOptions) {
  return [{
    id: "describe-instance",
    description: "Amazon Connect API access can describe the configured instance.",
    requiredCredentialIds: ["amazon-connect-instance", "amazon-connect-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createAmazonConnectContactCenterClient(options);
      const instance = await client.describeInstance();
      if (context.signal?.aborted) throw new Error("Amazon Connect live instance check aborted.");
      return { details: { instanceConfigured: Boolean(instance) } };
    },
  }];
}
