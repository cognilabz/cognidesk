import Mailgun from "mailgun.js";
import { defineIntegration, normalizeIntegrationError } from "@cognidesk/integration-kit";
import { mailgunEmailProviderManifest } from "./manifest.js";
import { parseMailgunWebhook } from "./webhooks.js";

export interface MailgunRawClient {
  messages: {
    create(domain: string, data: Record<string, unknown>): Promise<unknown>;
    retrieveStoredEmail?: (domain: string, storageKey: string) => Promise<unknown>;
  };
  events: { get(domain: string, query?: Record<string, unknown>): Promise<unknown> };
  domains: { get(domain: string): Promise<unknown> };
  webhooks: { list(domain: string, query: Record<string, unknown>): Promise<unknown> };
}

export interface MailgunEmailAddressedInput {
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  cc?: string | string[];
  bcc?: string | string[];
  tags?: string[];
  variables?: Record<string, unknown>;
  headers?: Record<string, string>;
  attachments?: unknown[];
}

export interface MailgunReplyInput extends MailgunEmailAddressedInput {
  inReplyTo?: string;
  references?: string | string[];
}

export interface MailgunEventSearchInput {
  begin?: string;
  end?: string;
  ascending?: "yes" | "no" | boolean;
  limit?: number;
  event?: string;
  recipient?: string;
  messageId?: string;
  tags?: string | string[];
  severity?: string;
}

export interface MailgunEmailClientOptions {
  apiKey: string;
  domain: string;
  region?: "us" | "eu" | string;
  apiBaseUrl?: string;
  rawClient?: MailgunRawClient;
  formData?: unknown;
  webhookSigningKey?: string;
  requireWebhookSignature?: boolean;
}

export interface MailgunEmailClient {
  rawClient: MailgunRawClient;
  sendEmail(input: MailgunEmailAddressedInput): Promise<unknown>;
  sendReply(input: MailgunReplyInput): Promise<unknown>;
  searchEvents(input?: MailgunEventSearchInput): Promise<unknown>;
  getStoredMessage(storageKey: string): Promise<unknown>;
  getDomain(): Promise<unknown>;
  listWebhooks(): Promise<unknown>;
}

export function createMailgunEmailClient(options: MailgunEmailClientOptions): MailgunEmailClient {
  const rawClient = options.rawClient ?? createRawMailgunClient(options);
  const call = async <T>(operation: () => Promise<T>) => {
    try {
      return await operation();
    } catch (error) {
      throw normalizeIntegrationError(error, { provider: "mailgun" });
    }
  };

  return {
    rawClient,
    sendEmail(input) {
      return call(() => rawClient.messages.create(options.domain, toMailgunMessageData(input)));
    },
    sendReply(input) {
      return call(() => rawClient.messages.create(options.domain, toMailgunMessageData(input)));
    },
    searchEvents(input = {}) {
      return call(() => rawClient.events.get(options.domain, toMailgunEventQuery(input)));
    },
    getStoredMessage(storageKey) {
      if (!rawClient.messages.retrieveStoredEmail) {
        throw new Error("mailgun.js stored message retrieval is unavailable on the configured raw client.");
      }
      return call(() => rawClient.messages.retrieveStoredEmail!(options.domain, storageKey));
    },
    getDomain() {
      return call(() => rawClient.domains.get(options.domain));
    },
    listWebhooks() {
      return call(() => rawClient.webhooks.list(options.domain, {}));
    },
  };
}

export function createMailgunEmailIntegration(options: MailgunEmailClientOptions) {
  const client = createMailgunEmailClient(options);
  return {
    ...defineIntegration({
      manifest: mailgunEmailProviderManifest,
      operations: {
        "email.receive": (input: unknown) => parseMailgunWebhook(input as Request, mailgunWebhookParserOptions(options)),
        "email.send": (input: unknown) => client.sendEmail(input as MailgunEmailAddressedInput),
        "email.reply.send": (input: unknown) => client.sendReply(input as MailgunReplyInput),
        "email.deliveryStatus.read": (input: unknown) => client.searchEvents(input as MailgunEventSearchInput),
        "mailgun.storedMessage.read": (input: unknown) => client.getStoredMessage((input as { storageKey: string }).storageKey),
        "mailgun.domain.read": () => client.getDomain(),
        "mailgun.webhooks.list": () => client.listWebhooks(),
      },
    }),
    rawClient: client.rawClient,
    client,
  };
}

export function createMailgunEmailLiveChecks(options: MailgunEmailClientOptions) {
  return [{
    id: "domain",
    description: "Mailgun domain can be read through the official SDK.",
    requiredCredentialIds: ["mailgun-api-key", "mailgun-domain"],
    async run(context: { abortSignal?: AbortSignal }) {
      const domain = await createMailgunEmailClient(options).getDomain();
      if (context.abortSignal?.aborted) throw new Error("Mailgun live domain check aborted.");
      return { details: { domain: options.domain, providerResponse: domain } };
    },
  }];
}

function mailgunWebhookParserOptions(options: MailgunEmailClientOptions) {
  return {
    ...(options.webhookSigningKey ? { signingKey: options.webhookSigningKey } : {}),
    ...(options.requireWebhookSignature !== undefined ? { requireSignature: options.requireWebhookSignature } : {}),
  };
}

function createRawMailgunClient(options: MailgunEmailClientOptions): MailgunRawClient {
  const FormDataCtor = options.formData ?? FormData;
  const mailgun = new Mailgun(FormDataCtor as never);
  return mailgun.client({
    username: "api",
    key: options.apiKey,
    url: options.apiBaseUrl ?? resolveMailgunApiBaseUrl(options.region),
    useFetch: true,
  }) as MailgunRawClient;
}

function resolveMailgunApiBaseUrl(region: MailgunEmailClientOptions["region"]) {
  return region?.toLowerCase() === "eu"
    ? "https://api.eu.mailgun.net"
    : "https://api.mailgun.net";
}

function toMailgunMessageData(input: MailgunEmailAddressedInput): Record<string, unknown> {
  const data: Record<string, unknown> = {
    from: input.from,
    to: input.to,
    subject: input.subject,
  };
  if (input.text !== undefined) data.text = input.text;
  if (input.html !== undefined) data.html = input.html;
  if (input.cc !== undefined) data.cc = input.cc;
  if (input.bcc !== undefined) data.bcc = input.bcc;
  if (input.tags !== undefined) data["o:tag"] = input.tags;
  if (input.attachments !== undefined) data.attachment = input.attachments;
  for (const [name, value] of Object.entries(input.variables ?? {})) data[`v:${name}`] = JSON.stringify(value);
  for (const [name, value] of Object.entries(input.headers ?? {})) data[`h:${name}`] = value;
  return data;
}

function toMailgunEventQuery(input: MailgunEventSearchInput): Record<string, unknown> {
  return {
    ...(input.begin ? { begin: input.begin } : {}),
    ...(input.end ? { end: input.end } : {}),
    ...(input.ascending !== undefined ? { ascending: typeof input.ascending === "boolean" ? (input.ascending ? "yes" : "no") : input.ascending } : {}),
    ...(input.limit !== undefined ? { limit: input.limit } : {}),
    ...(input.event ? { event: input.event } : {}),
    ...(input.recipient ? { recipient: input.recipient } : {}),
    ...(input.messageId ? { "message-id": input.messageId } : {}),
    ...(input.tags ? { tags: input.tags } : {}),
    ...(input.severity ? { severity: input.severity } : {}),
  };
}
