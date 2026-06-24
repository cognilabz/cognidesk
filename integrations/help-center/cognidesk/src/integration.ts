import { defineIntegration } from "@cognidesk/integration-kit";
import {
  createHelpCenterClient,
  parseHelpCenterWebhook,
  type HelpCenterSearchInput,
  type HelpCenterSource,
  type ParseHelpCenterWebhookOptions,
} from "./core.js";
import { cognideskHelpCenterProviderManifest } from "./manifest.js";

export interface CognideskHelpCenterIntegrationOptions {
  source: HelpCenterSource;
}

export interface ParseHelpCenterWebhookOperationInput {
  request: Request;
  options?: ParseHelpCenterWebhookOptions;
}

export function createCognideskHelpCenterIntegration(options: CognideskHelpCenterIntegrationOptions) {
  const client = createHelpCenterClient(options.source);
  return defineIntegration({
    manifest: cognideskHelpCenterProviderManifest as never,
    operations: {
      "cognidesk.help-center.article.search": (input: HelpCenterSearchInput) => client.search(input),
      "cognidesk.help-center.article.fetch": (input: { articleId: string }) =>
        client.fetchArticle(input.articleId),
      "cognidesk.help-center.webhook.parse": (input: ParseHelpCenterWebhookOperationInput) =>
        parseHelpCenterWebhook(input.request, input.options),
    } as never,
  });
}
