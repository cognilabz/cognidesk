import { createTwilioVoiceClient } from "./client.js";
import type { TwilioLiveCheckOptions } from "./contracts.js";

export function createTwilioVoiceLiveChecks(options: TwilioLiveCheckOptions) {
  return [{
    id: "account",
    description: "Twilio account credentials can access the Voice REST API account resource.",
    requiredCredentialIds: ["twilio-account", "twilio-rest-api-credentials"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createTwilioVoiceClient(options);
      const account = await client.fetchAccount();
      if (context.signal?.aborted) throw new Error("Twilio live account check aborted.");
      return {
        details: {
          sid: typeof account.sid === "string" ? account.sid : undefined,
          status: typeof account.status === "string" ? account.status : undefined,
        },
      };
    },
  }];
}
