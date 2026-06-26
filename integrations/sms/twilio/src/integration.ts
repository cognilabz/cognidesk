import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { createTwilioSmsClient } from "./client.js";
import type {
  ParseTwilioSmsWebhookOptions,
  TwilioListMessagesInput,
  TwilioSendSmsInput,
  TwilioSmsClient,
  TwilioSmsClientOptions,
} from "./contracts.js";
import { twilioSmsProviderManifest } from "./manifest.js";
import { parseTwilioSmsWebhook } from "./webhooks.js";

export interface TwilioSmsIntegrationOptions extends TwilioSmsClientOptions {
  publicUrl?: string;
  requireSignature?: boolean;
  webhookAuthToken?: string;
  smsClient?: TwilioSmsClient;
}

export interface ParseTwilioSmsWebhookRequestInput extends ParseTwilioSmsWebhookOptions {
  request: Request;
}

export type TwilioReadMessageInput = string | { messageSid: string };

export function createTwilioSmsIntegrationOperationHandlers(options: TwilioSmsIntegrationOptions) {
  const client = options.smsClient ?? createTwilioSmsClient(options);
  return createTwilioSmsIntegrationOperationHandlersForClient(client, options);
}

function createTwilioSmsIntegrationOperationHandlersForClient(
  client: TwilioSmsClient,
  options: TwilioSmsIntegrationOptions,
) {
  return {
    "sms.message.receive": async (
      input: Request | ParseTwilioSmsWebhookRequestInput,
      _context: IntegrationOperationContext,
    ) => {
      const { request, webhookOptions } = parseWebhookOperationInput(input);
      const publicUrl = webhookOptions.publicUrl ?? options.publicUrl;
      const requireSignature = webhookOptions.requireSignature ?? options.requireSignature;
      return parseTwilioSmsWebhook(request, {
        authToken: webhookOptions.authToken ?? options.webhookAuthToken ?? options.authToken,
        ...(publicUrl ? { publicUrl } : {}),
        ...(requireSignature !== undefined ? { requireSignature } : {}),
      });
    },
    "sms.message.send": (
      input: TwilioSendSmsInput,
      _context: IntegrationOperationContext,
    ) => client.sendMessage(input),
    "sms.message.read": (
      input: TwilioReadMessageInput,
      _context: IntegrationOperationContext,
    ) => client.fetchMessage(messageSidFromInput(input)),
    "sms.message.search": (
      input: TwilioListMessagesInput | undefined,
      _context: IntegrationOperationContext,
    ) => client.listMessages(input),
  } as const;
}

export function createTwilioSmsIntegration(options: TwilioSmsIntegrationOptions) {
  const client = options.smsClient ?? createTwilioSmsClient(options);
  return {
    ...defineIntegration({
      manifest: twilioSmsProviderManifest,
      operations: createTwilioSmsIntegrationOperationHandlersForClient(client, options),
    }),
    client,
    getRawClient: () => client.getRawClient(),
  };
}

export const createTwilioIntegration = createTwilioSmsIntegration;
export const createTwilioIntegrationOperationHandlers = createTwilioSmsIntegrationOperationHandlers;

function parseWebhookOperationInput(input: Request | ParseTwilioSmsWebhookRequestInput) {
  if (isParseTwilioSmsWebhookRequestInput(input)) {
    const { request, ...webhookOptions } = input;
    return { request, webhookOptions };
  }
  return { request: input, webhookOptions: {} };
}

function isParseTwilioSmsWebhookRequestInput(input: unknown): input is ParseTwilioSmsWebhookRequestInput {
  return typeof input === "object" && input !== null && "request" in input;
}

function messageSidFromInput(input: TwilioReadMessageInput) {
  return typeof input === "string" ? input : input.messageSid;
}
