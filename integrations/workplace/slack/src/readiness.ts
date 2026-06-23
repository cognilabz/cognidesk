import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { createSlackWorkplaceClient } from "./client.js";
import type { SlackCredentialStatusInput, SlackLiveCheckOptions } from "./contracts.js";
import { slackWorkplaceProviderManifest } from "./manifest.js";

export function slackWorkplaceCredentialStatuses(
  input: SlackCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: slackWorkplaceProviderManifest.id,
      requirementId: "slack-bot-token",
      state: input.botToken ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.botToken
        ? "Slack bot token is configured."
        : "A Slack bot token with Web API scopes is required.",
    },
    {
      providerPackageId: slackWorkplaceProviderManifest.id,
      requirementId: "slack-signing-secret",
      state: input.signingSecret ? "configured" : "missing",
      message: input.signingSecret
        ? "Slack signing secret is configured."
        : "A Slack signing secret is required for Events API and interactivity validation.",
    },
  ];
}

export function createSlackWorkplaceLiveChecks(options: SlackLiveCheckOptions) {
  return [{
    id: "auth",
    description: "Slack Web API auth.test is reachable with the configured bot token.",
    requiredCredentialIds: ["slack-bot-token"],
    async run(context: { signal?: AbortSignal }) {
      const { client: readinessClient, ...clientOptions } = options;
      const client = readinessClient ?? createSlackWorkplaceClient(clientOptions);
      const auth = await client.authTest({ signal: context.signal });
      if (context.signal?.aborted) throw new Error("Slack live auth.test check aborted.");
      return {
        details: {
          team: typeof auth.team === "string" ? auth.team : undefined,
          teamId: typeof auth.team_id === "string" ? auth.team_id : undefined,
          user: typeof auth.user === "string" ? auth.user : undefined,
          userId: typeof auth.user_id === "string" ? auth.user_id : undefined,
          botId: typeof auth.bot_id === "string" ? auth.bot_id : undefined,
        },
      };
    },
  }];
}
