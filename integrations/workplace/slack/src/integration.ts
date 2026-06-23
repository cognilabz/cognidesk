import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { createSlackWorkplaceClient } from "./client.js";
import type {
  ParseSlackSignedRequestInput,
  SlackUploadExternalFileInput,
  SlackWorkplaceClient,
  SlackWorkplaceCredentials,
  SlackWorkplaceClientOptions,
} from "./contracts.js";
import { parseSlackSignedRequest, validateSlackRequestSignature } from "./events.js";
import { slackWorkplaceManifestInput } from "./manifest.js";

export interface SlackWorkplaceIntegrationOptions extends SlackWorkplaceClientOptions {
  credentials?: SlackWorkplaceCredentials;
  workplaceClient?: SlackWorkplaceClient;
}

export function createSlackWorkplaceOperationHandlers(options: SlackWorkplaceIntegrationOptions) {
  const credentials = slackWorkplaceCredentials(options);
  const client = options.workplaceClient ?? createSlackWorkplaceClient({
    ...options,
    ...credentials,
  });

  return {
    "workplace.message.receive": async (input: ParseSlackSignedRequestInput) => {
      const signingSecret = input.signingSecret ?? credentials.signingSecret;
      return parseSlackSignedRequest(input.request, {
        ...(signingSecret ? { signingSecret } : {}),
        ...(input.requireSignature !== undefined ? { requireSignature: input.requireSignature } : {}),
        ...(input.nowSeconds !== undefined ? { nowSeconds: input.nowSeconds } : {}),
        ...(input.timestampToleranceSeconds !== undefined
          ? { timestampToleranceSeconds: input.timestampToleranceSeconds }
          : {}),
      });
    },
    "workplace.thread.read": (
      input: Parameters<typeof client.conversationsReplies>[0],
      context: IntegrationOperationContext<SlackWorkplaceCredentials>,
    ) =>
      client.conversationsReplies({ ...input, signal: context.abortSignal ?? input.signal }),
    "workplace.message.send": (
      input: Parameters<typeof client.postMessage>[0],
      context: IntegrationOperationContext<SlackWorkplaceCredentials>,
    ) =>
      client.postMessage({ ...input, signal: context.abortSignal ?? input.signal }),
    "workplace.message.reply": (
      input: Parameters<typeof client.postMessage>[0],
      context: IntegrationOperationContext<SlackWorkplaceCredentials>,
    ) =>
      client.postMessage({ ...input, signal: context.abortSignal ?? input.signal }),
    "workplace.message.update": (
      input: Parameters<typeof client.updateMessage>[0],
      context: IntegrationOperationContext<SlackWorkplaceCredentials>,
    ) =>
      client.updateMessage({ ...input, signal: context.abortSignal ?? input.signal }),
    "workplace.file.upload": (
      input: SlackUploadExternalFileInput,
      context: IntegrationOperationContext<SlackWorkplaceCredentials>,
    ) =>
      client.uploadExternalFile({ ...input, signal: context.abortSignal ?? input.signal }),
    "workplace.notification.send": (
      input: Parameters<typeof client.postEphemeralMessage>[0],
      context: IntegrationOperationContext<SlackWorkplaceCredentials>,
    ) =>
      client.postEphemeralMessage({ ...input, signal: context.abortSignal ?? input.signal }),
    "slack.request-signature": async (input: Parameters<typeof validateSlackRequestSignature>[0]) => {
      const signingSecret = input.signingSecret ?? credentials.signingSecret;
      if (!signingSecret) {
        throw new Error("Slack signing secret is required to validate request signatures.");
      }
      return validateSlackRequestSignature({
        ...input,
        signingSecret,
      });
    },
  } as const;
}

export function createSlackWorkplaceIntegration(options: SlackWorkplaceIntegrationOptions) {
  const credentials = slackWorkplaceCredentials(options);
  return defineIntegration({
    manifest: slackWorkplaceManifestInput,
    credentials,
    operations: createSlackWorkplaceOperationHandlers(options),
  });
}

function slackWorkplaceCredentials(options: SlackWorkplaceIntegrationOptions): SlackWorkplaceCredentials {
  return {
    ...optionalCredential("botToken", options.credentials?.botToken ?? options.botToken),
    ...optionalCredential("signingSecret", options.credentials?.signingSecret ?? options.signingSecret),
  };
}

function optionalCredential<Key extends keyof SlackWorkplaceCredentials>(key: Key, value: string | undefined) {
  return value ? { [key]: value } as Pick<SlackWorkplaceCredentials, Key> : {};
}
