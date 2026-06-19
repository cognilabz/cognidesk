import type { PostmarkLiveCheckOptions } from "./contracts.js";
import { createPostmarkEmailClient } from "./client.js";

export function createPostmarkEmailLiveChecks(options: PostmarkLiveCheckOptions) {
  return [
    {
      id: "webhooks",
      description: "Postmark Webhooks API is reachable with the configured Server API token.",
      requiredCredentialIds: ["postmark-server-token"],
      async run(context: { signal?: AbortSignal }) {
        const client = options.client ?? createPostmarkEmailClient(options);
        const webhooks = await client.listWebhooks();
        if (context.signal?.aborted) throw new Error("Postmark live webhooks check aborted.");
        return {
          details: {
            webhookCount: webhooks.length,
            messageStreams: [...new Set(webhooks.flatMap((webhook) => webhook.MessageStream ? [webhook.MessageStream] : []))],
          },
        };
      },
    },
    {
      id: "message-streams",
      description: "Postmark Message Streams API is reachable with the configured Server API token.",
      requiredCredentialIds: ["postmark-server-token"],
      async run(context: { signal?: AbortSignal }) {
        const client = options.client ?? createPostmarkEmailClient(options);
        const streams = await client.listMessageStreams({ MessageStreamType: "All" });
        if (context.signal?.aborted) throw new Error("Postmark live message-streams check aborted.");
        return {
          details: {
            streamCount: streams.MessageStreams?.length ?? 0,
            streamIds: streams.MessageStreams?.map((stream) => stream.ID).filter(Boolean) ?? [],
          },
        };
      },
    },
  ];
}
