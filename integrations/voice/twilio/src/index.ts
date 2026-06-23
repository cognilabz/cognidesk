import { createHmac, timingSafeEqual } from "node:crypto";
import {
  defineIntegration,
  type IntegrationOperationContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/integration-kit";
import { twilioVoiceProviderManifest } from "./manifest.js";

export { twilioVoiceProviderManifest } from "./manifest.js";

export interface TwilioVoiceClientOptions {
  accountSid: string;
  authToken?: string;
  apiKeySid?: string;
  apiKeySecret?: string;
  rawClient?: TwilioVoiceRawClient;
}

export interface TwilioVoiceRawClient {
  calls: {
    create(input: Record<string, unknown>): Promise<TwilioCallResource>;
    get?(sid: string): {
      fetch(): Promise<TwilioCallResource>;
      update(input: Record<string, unknown>): Promise<TwilioCallResource>;
    };
  };
  api?: {
    accounts(accountSid: string): { fetch(): Promise<TwilioAccountResource> };
  };
}

export interface TwilioOutboundCallInput {
  to: string;
  from: string;
  url?: string;
  twiml?: string;
  applicationSid?: string;
  method?: "GET" | "POST";
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
  statusCallbackEvent?: TwilioCallStatusCallbackEvent[];
  timeoutSeconds?: number;
  machineDetection?: "Enable" | "DetectMessageEnd";
  sendDigits?: string;
  metadata?: Record<string, string>;
}

export interface TwilioCallUpdateInput {
  url?: string;
  twiml?: string;
  method?: "GET" | "POST";
  status?: TwilioCallUpdateStatus;
  fallbackUrl?: string;
  fallbackMethod?: "GET" | "POST";
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
  timeLimitSeconds?: number;
}

export interface TwilioCallRedirectInput {
  url?: string;
  twiml?: string;
  method?: "GET" | "POST";
  fallbackUrl?: string;
  fallbackMethod?: "GET" | "POST";
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
}

export interface TwilioCallEndInput {
  status?: TwilioCallUpdateStatus;
  statusCallback?: string;
  statusCallbackMethod?: "GET" | "POST";
}

export type TwilioCallStatusCallbackEvent = "initiated" | "ringing" | "answered" | "completed";
export type TwilioCallUpdateStatus = "canceled" | "completed";
export type TwilioCallStatus =
  | "queued"
  | "initiated"
  | "ringing"
  | "in-progress"
  | "completed"
  | "busy"
  | "failed"
  | "no-answer"
  | "canceled";

export interface TwilioCallResource {
  sid: string;
  accountSid?: string;
  account_sid?: string;
  to?: string;
  from?: string;
  status?: TwilioCallStatus | string;
  direction?: string;
  [key: string]: unknown;
}

export interface TwilioAccountResource {
  sid: string;
  friendlyName?: string;
  friendly_name?: string;
  status?: string;
  [key: string]: unknown;
}

export interface TwilioVoiceClient {
  getRawClient(): Promise<TwilioVoiceRawClient>;
  createOutboundCall(input: TwilioOutboundCallInput): Promise<TwilioCallResource>;
  fetchCall(callSid: string): Promise<TwilioCallResource>;
  updateCall(callSid: string, input: TwilioCallUpdateInput): Promise<TwilioCallResource>;
  redirectCall(callSid: string, input: TwilioCallRedirectInput): Promise<TwilioCallResource>;
  endCall(callSid: string, input?: TwilioCallEndInput): Promise<TwilioCallResource>;
  fetchAccount(): Promise<TwilioAccountResource>;
}

export interface TwilioVoiceWebhook {
  callSid?: string;
  accountSid?: string;
  from?: string;
  to?: string;
  callStatus?: TwilioCallStatus;
  direction?: string;
  raw: Record<string, string>;
}

export interface ParseTwilioVoiceWebhookOptions {
  authToken?: string;
  publicUrl?: string;
  requireSignature?: boolean;
}

export interface TwilioMediaStreamTwiMLOptions {
  websocketUrl: string;
  mode?: "connect" | "start";
  track?: "inbound_track" | "outbound_track" | "both_tracks";
  statusCallback?: string;
  name?: string;
  customParameters?: Record<string, string>;
}

export const twilioVoiceIntegration = defineIntegration({
  manifest: twilioVoiceProviderManifest,
  operations: {
    "voice.call.answer": async (request: unknown, context: IntegrationOperationContext) =>
      parseTwilioVoiceWebhook(request as Request, context.metadata as ParseTwilioVoiceWebhookOptions | undefined),
    "voice.call.start": async (input: unknown, context: IntegrationOperationContext) =>
      metadataClient<TwilioVoiceClient>(context).createOutboundCall(input as TwilioOutboundCallInput),
    "voice.call.redirect": async (
      input: unknown,
      context: IntegrationOperationContext,
    ) => {
      const transfer = input as { callSid: string; redirect: TwilioCallRedirectInput };
      return metadataClient<TwilioVoiceClient>(context).redirectCall(transfer.callSid, transfer.redirect);
    },
  },
});

function metadataClient<Client>(context: IntegrationOperationContext): Client {
  const client = context.metadata?.client;
  if (!client) throw new Error("Pass a Twilio Voice client as context.metadata.client.");
  return client as Client;
}

export function createTwilioVoiceClient(options: TwilioVoiceClientOptions): TwilioVoiceClient {
  let rawClientPromise: Promise<TwilioVoiceRawClient> | undefined;
  const getRawClient = () => {
    rawClientPromise ??= options.rawClient
      ? Promise.resolve(options.rawClient)
      : createTwilioRawClient(options);
    return rawClientPromise;
  };
  return {
    getRawClient,
    async createOutboundCall(input) {
      assertOutboundCallInput(input);
      return (await getRawClient()).calls.create(callCreateBody(input));
    },
    async fetchCall(callSid) {
      const call = (await getRawClient()).calls.get?.(callSid);
      if (!call) throw new Error("Twilio helper client does not expose calls.get().");
      return call.fetch();
    },
    async updateCall(callSid, input) {
      const call = (await getRawClient()).calls.get?.(callSid);
      if (!call) throw new Error("Twilio helper client does not expose calls.get().");
      return call.update(callUpdateBody(input));
    },
    async redirectCall(callSid, input) {
      const call = (await getRawClient()).calls.get?.(callSid);
      if (!call) throw new Error("Twilio helper client does not expose calls.get().");
      return call.update(callRedirectBody(input));
    },
    async endCall(callSid, input = {}) {
      const call = (await getRawClient()).calls.get?.(callSid);
      if (!call) throw new Error("Twilio helper client does not expose calls.get().");
      return call.update(callEndBody(input));
    },
    async fetchAccount() {
      const rawClient = await getRawClient();
      const account = rawClient.api?.accounts(options.accountSid);
      if (!account) return { sid: options.accountSid };
      return account.fetch();
    },
  };
}

export function createTwilioMediaStreamTwiML(options: TwilioMediaStreamTwiMLOptions) {
  if (options.mode === "connect" && (options.track === "outbound_track" || options.track === "both_tracks")) {
    throw new Error("Twilio bidirectional <Connect><Stream> supports inbound_track only.");
  }
  const streamAttributes = compact({
    url: options.websocketUrl,
    track: options.track,
    statusCallback: options.statusCallback,
    name: options.name,
  });
  const parameters = Object.entries(options.customParameters ?? {})
    .map(([name, value]) => `<Parameter name="${escapeXml(name)}" value="${escapeXml(value)}"/>`)
    .join("");
  const stream = `<Stream${attributes(streamAttributes)}>${parameters}</Stream>`;
  return options.mode === "start"
    ? `<Response><Start>${stream}</Start></Response>`
    : `<Response><Connect>${stream}</Connect></Response>`;
}

export function twilioVoiceCredentialStatuses(input: {
  accountSid?: string;
  authToken?: string;
  apiKeySid?: string;
  apiKeySecret?: string;
  webhookAuthToken?: string;
}): ProviderCredentialStatusInput[] {
  const accountConfigured = Boolean(input.accountSid);
  const restConfigured = Boolean(input.authToken || (input.apiKeySid && input.apiKeySecret));
  const webhookConfigured = Boolean(input.webhookAuthToken ?? input.authToken);
  return [
    {
      providerPackageId: twilioVoiceProviderManifest.id,
      requirementId: "twilio-account",
      state: accountConfigured ? "configured" : "missing",
      message: accountConfigured ? "Twilio Account SID is configured." : "Twilio Account SID is required.",
    },
    {
      providerPackageId: twilioVoiceProviderManifest.id,
      requirementId: "twilio-rest-api-credentials",
      state: restConfigured ? "configured" : "missing",
      message: restConfigured ? "Twilio REST API credentials are configured." : "Twilio REST credentials are required.",
    },
    {
      providerPackageId: twilioVoiceProviderManifest.id,
      requirementId: "twilio-webhook-auth-token",
      state: webhookConfigured ? "configured" : "not-required",
      message: webhookConfigured
        ? "Twilio webhook Auth Token is configured."
        : "Twilio webhook Auth Token is required only when webhook signature validation is enabled.",
    },
  ];
}

export async function parseTwilioVoiceWebhook(
  request: Request,
  options: ParseTwilioVoiceWebhookOptions = {},
): Promise<TwilioVoiceWebhook> {
  const raw = await parseFormRequest(request);
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.authToken) throw new Error("Twilio auth token is required to validate webhook signatures.");
    const signature = request.headers.get("x-twilio-signature") ?? "";
    const url = options.publicUrl ?? request.url;
    if (!validateTwilioRequestSignature({ url, params: raw, signature, authToken: options.authToken })) {
      throw new Error("Twilio webhook signature validation failed.");
    }
  }
  const callStatus = parseTwilioCallStatus(raw.CallStatus);
  return {
    ...(raw.CallSid ? { callSid: raw.CallSid } : {}),
    ...(raw.AccountSid ? { accountSid: raw.AccountSid } : {}),
    ...(raw.From ? { from: raw.From } : {}),
    ...(raw.To ? { to: raw.To } : {}),
    ...(callStatus ? { callStatus } : {}),
    ...(raw.Direction ? { direction: raw.Direction } : {}),
    raw,
  };
}

export function validateTwilioRequestSignature(input: {
  url: string;
  params: Record<string, string>;
  signature: string;
  authToken: string;
}) {
  const signed = Object.keys(input.params).sort()
    .reduce((value, key) => `${value}${key}${input.params[key] ?? ""}`, input.url);
  const expected = createHmac("sha1", input.authToken).update(signed).digest("base64");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

async function createTwilioRawClient(options: TwilioVoiceClientOptions): Promise<TwilioVoiceRawClient> {
  const mod = await import("twilio");
  const createClient = mod.default ?? mod;
  if (options.authToken) return createClient(options.accountSid, options.authToken) as unknown as TwilioVoiceRawClient;
  if (options.apiKeySid && options.apiKeySecret) {
    return createClient(options.apiKeySid, options.apiKeySecret, { accountSid: options.accountSid }) as unknown as TwilioVoiceRawClient;
  }
  throw new Error("Twilio Auth Token or API key credentials are required.");
}

function assertOutboundCallInput(input: TwilioOutboundCallInput) {
  if (!input.url && !input.twiml && !input.applicationSid) {
    throw new Error("At least one of url, twiml, or applicationSid is required to create a Twilio call.");
  }
  if (input.applicationSid && (input.url || input.twiml)) {
    throw new Error("applicationSid cannot be combined with url or twiml.");
  }
}

function callCreateBody(input: TwilioOutboundCallInput) {
  return compact({
    to: input.to,
    from: input.from,
    url: input.url,
    twiml: input.twiml,
    applicationSid: input.applicationSid,
    method: input.method,
    statusCallback: input.statusCallback,
    statusCallbackMethod: input.statusCallbackMethod,
    statusCallbackEvent: input.statusCallbackEvent,
    timeout: input.timeoutSeconds,
    machineDetection: input.machineDetection,
    sendDigits: input.sendDigits,
    ...parameterFields(input.metadata),
  });
}

function callUpdateBody(input: TwilioCallUpdateInput) {
  return compact({
    url: input.url,
    twiml: input.twiml,
    method: input.method,
    status: input.status,
    fallbackUrl: input.fallbackUrl,
    fallbackMethod: input.fallbackMethod,
    statusCallback: input.statusCallback,
    statusCallbackMethod: input.statusCallbackMethod,
    timeLimit: input.timeLimitSeconds,
  });
}

function callRedirectBody(input: TwilioCallRedirectInput) {
  return compact({
    url: input.url,
    twiml: input.twiml,
    method: input.method,
    fallbackUrl: input.fallbackUrl,
    fallbackMethod: input.fallbackMethod,
    statusCallback: input.statusCallback,
    statusCallbackMethod: input.statusCallbackMethod,
  });
}

function callEndBody(input: TwilioCallEndInput) {
  return compact({
    status: input.status ?? "completed",
    statusCallback: input.statusCallback,
    statusCallbackMethod: input.statusCallbackMethod,
  });
}

function parameterFields(metadata: Record<string, string> | undefined) {
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(metadata ?? {})) {
    fields[`parameter[${key}]`] = value;
  }
  return fields;
}

function parseTwilioCallStatus(status: string | undefined): TwilioCallStatus | undefined {
  switch (status) {
    case "queued":
    case "initiated":
    case "ringing":
    case "in-progress":
    case "completed":
    case "busy":
    case "failed":
    case "no-answer":
    case "canceled":
      return status;
    default:
      return undefined;
  }
}

async function parseFormRequest(request: Request): Promise<Record<string, string>> {
  const form = await request.formData();
  const values: Record<string, string> = {};
  for (const [key, value] of form as unknown as Iterable<[string, FormDataEntryValue]>) {
    if (typeof value === "string") values[key] = value;
  }
  return values;
}

function attributes(input: Record<string, unknown>) {
  return Object.entries(input)
    .map(([key, value]) => ` ${key}="${escapeXml(String(value))}"`)
    .join("");
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function compact(input: Record<string, unknown | undefined>) {
  const output: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value;
  }
  return output;
}
