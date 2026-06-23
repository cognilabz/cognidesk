import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import {
  defineIntegration,
  type IntegrationOperationContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/integration-kit";
import { vonageVoiceProviderManifest } from "./manifest.js";

export { vonageVoiceProviderManifest } from "./manifest.js";

export interface VonageVoiceClientOptions {
  applicationId: string;
  privateKey?: string;
  jwt?: string;
  signatureSecret?: string;
  defaultEventUrl?: string[];
  rawClient?: VonageRawClient;
}

export interface VonageRawClient {
  voice?: {
    createOutboundCall(input: Record<string, unknown>): Promise<VonageCallResource>;
    getCall?(uuid: string): Promise<VonageCallResource>;
    updateCall?(uuid: string, input: Record<string, unknown>): Promise<VonageJsonObject>;
  };
}

export type VonageEndpoint =
  | { type: "phone"; number: string }
  | { type: "sip"; uri: string }
  | { type: "websocket"; uri: string; contentType?: string; headers?: Record<string, string> }
  | { type: "app"; user: string };

export interface VonageOutboundCallInput {
  to: VonageEndpoint[];
  from?: VonageEndpoint;
  answerUrl?: string[];
  eventUrl?: string[];
  answerMethod?: "GET" | "POST";
  eventMethod?: "GET" | "POST";
  ncco?: VonageNccoAction[];
  randomFromNumber?: boolean;
  advancedMachineDetection?: Record<string, unknown>;
}

export interface VonageCallUpdateInput {
  action: "transfer";
  destination: {
    type: "url";
    url: string[];
  };
}

export interface VonageCallResource extends VonageJsonObject {
  uuid?: string;
  status?: string;
  direction?: string;
}

export type VonageJsonPrimitive = string | number | boolean | null;
export type VonageJsonValue = VonageJsonPrimitive | VonageJsonObject | VonageJsonValue[];
export interface VonageJsonObject {
  [key: string]: VonageJsonValue | undefined;
}

export type VonageNccoAction =
  | { action: "talk"; text: string; voiceName?: string; bargeIn?: boolean }
  | { action: "connect"; endpoint: VonageEndpoint[]; from?: string; eventUrl?: string[] }
  | { action: "stream"; streamUrl: string[]; bargeIn?: boolean }
  | { action: "input"; eventUrl: string[]; type?: string[] };

export interface VonageVoiceClient {
  getRawClient(): Promise<VonageRawClient>;
  createOutboundCall(input: VonageOutboundCallInput): Promise<VonageCallResource>;
  fetchCall(uuid: string): Promise<VonageCallResource>;
  updateCall(uuid: string, input: VonageCallUpdateInput): Promise<VonageJsonObject>;
}

export interface ParseVonageWebhookOptions {
  signatureSecret?: string;
  expectedApiKey?: string;
  rawBody?: string;
  requireSignature?: boolean;
}

export interface VonageWebhook {
  type: "answer" | "event" | "fallback";
  uuid?: string;
  conversationUuid?: string;
  status?: string;
  from?: string;
  to?: string;
  raw: VonageJsonObject;
}

export const vonageVoiceIntegration = defineIntegration({
  manifest: vonageVoiceProviderManifest,
  operations: {
    "voice.call.answer": async (request: unknown, context: IntegrationOperationContext) =>
      parseVonageWebhook(request as Request, context.metadata as ParseVonageWebhookOptions | undefined),
    "voice.call.start": async (input: unknown, context: IntegrationOperationContext) =>
      metadataClient<VonageVoiceClient>(context).createOutboundCall(input as VonageOutboundCallInput),
    "voice.call.transfer": async (
      input: unknown,
      context: IntegrationOperationContext,
    ) => {
      const transfer = input as { uuid: string; update: VonageCallUpdateInput };
      return metadataClient<VonageVoiceClient>(context).updateCall(transfer.uuid, transfer.update);
    },
  },
});

function metadataClient<Client>(context: IntegrationOperationContext): Client {
  const client = context.metadata?.client;
  if (!client) throw new Error("Pass a Vonage Voice client as context.metadata.client.");
  return client as Client;
}

export function createVonageVoiceClient(options: VonageVoiceClientOptions): VonageVoiceClient {
  let rawClientPromise: Promise<VonageRawClient> | undefined;
  const getRawClient = () => {
    rawClientPromise ??= options.rawClient
      ? Promise.resolve(options.rawClient)
      : createVonageRawClient(options);
    return rawClientPromise;
  };
  return {
    getRawClient,
    async createOutboundCall(input) {
      assertOutboundCallInput(input, options);
      const rawClient = await getRawClient();
      const createOutboundCall = rawClient.voice?.createOutboundCall;
      if (!createOutboundCall) throw new Error("Vonage SDK client does not expose voice.createOutboundCall().");
      return createOutboundCall.call(rawClient.voice, normalizeOutboundCall(input, options));
    },
    async fetchCall(uuid) {
      const getCall = (await getRawClient()).voice?.getCall;
      if (!getCall) throw new Error("Vonage SDK client does not expose voice.getCall().");
      return getCall(uuid);
    },
    async updateCall(uuid, input) {
      if (input.action !== "transfer") {
        throw new Error("Vonage Voice modify-call supports only the documented transfer action.");
      }
      const updateCall = (await getRawClient()).voice?.updateCall;
      if (!updateCall) {
        throw new Error("Vonage SDK client does not expose voice.updateCall(); use getRawClient() for custom call-control support.");
      }
      return updateCall(uuid, input as unknown as Record<string, unknown>);
    },
  };
}

export function createVonageWebSocketNcco(input: {
  websocketUrl: string;
  contentType?: string;
  headers?: Record<string, string>;
}): VonageNccoAction[] {
  return [{
    action: "connect",
    endpoint: [{
      type: "websocket",
      uri: input.websocketUrl,
      ...(input.contentType ? { contentType: input.contentType } : {}),
      ...(input.headers ? { headers: input.headers } : {}),
    }],
  }];
}

export function vonageVoiceCredentialStatuses(input: {
  applicationId?: string;
  privateKey?: string;
  jwt?: string;
  signatureSecret?: string;
}): ProviderCredentialStatusInput[] {
  const applicationConfigured = Boolean(input.applicationId && (input.privateKey || input.jwt));
  return [
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-application",
      state: applicationConfigured ? "configured" : "missing",
      message: applicationConfigured
        ? "Vonage application credentials are configured."
        : "Vonage Application ID plus private key or JWT credentials are required.",
    },
    {
      providerPackageId: vonageVoiceProviderManifest.id,
      requirementId: "vonage-webhook-signature",
      state: input.signatureSecret ? "configured" : "not-required",
      message: input.signatureSecret
        ? "Vonage webhook signature secret is configured."
        : "Vonage webhook signatures are optional unless signed callbacks are enabled.",
    },
  ];
}

export async function parseVonageWebhook(
  request: Request,
  options: ParseVonageWebhookOptions = {},
): Promise<VonageWebhook> {
  const rawText = options.rawBody ?? await request.text();
  const raw = parsePayload(rawText, request.headers.get("content-type") ?? "");
  const claims = verifyVonageWebhookJwt(
    bearerToken(request.headers.get("authorization")),
    options.signatureSecret,
    options.expectedApiKey,
  );
  if (options.requireSignature ?? Boolean(options.signatureSecret)) {
    if (!options.signatureSecret) throw new Error("Vonage signature secret is required to validate webhook signatures.");
    if (!claims) throw new Error("Vonage webhook signature verification failed.");
    if (!verifyVonageWebhookPayload(rawText, claims)) {
      throw new Error("Vonage webhook signature validation failed.");
    }
  }
  const type = raw.original_request ? "fallback" : raw.status || raw.uuid ? "event" : "answer";
  return {
    type,
    ...(typeof raw.uuid === "string" ? { uuid: raw.uuid } : {}),
    ...(typeof raw.conversation_uuid === "string" ? { conversationUuid: raw.conversation_uuid } : {}),
    ...(typeof raw.status === "string" ? { status: raw.status } : {}),
    ...(typeof raw.from === "string" ? { from: raw.from } : {}),
    ...(typeof raw.to === "string" ? { to: raw.to } : {}),
    raw,
  };
}

export function verifyVonageWebhookPayload(rawBody: string, claims: VonageJsonObject) {
  const expectedHash = typeof claims.payload_hash === "string" ? claims.payload_hash : undefined;
  if (!expectedHash) return false;
  const actualHash = createHash("sha256").update(rawBody).digest("hex");
  const expected = Buffer.from(expectedHash);
  const actual = Buffer.from(actualHash);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

export function verifyVonageWebhookJwt(
  token: string | undefined,
  signatureSecret: string | undefined,
  expectedApiKey?: string,
): VonageJsonObject | undefined {
  if (!token || !signatureSecret) return undefined;
  const parts = token.split(".");
  if (parts.length !== 3) return undefined;
  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  if (!encodedHeader || !encodedPayload || !encodedSignature) return undefined;
  const header = JSON.parse(base64urlDecode(encodedHeader)) as { alg?: string };
  if (header.alg !== "HS256") return undefined;
  const expected = createHmac("sha256", signatureSecret).update(`${encodedHeader}.${encodedPayload}`).digest();
  const actual = Buffer.from(encodedSignature.replaceAll("-", "+").replaceAll("_", "/"), "base64");
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return undefined;
  const claims = JSON.parse(base64urlDecode(encodedPayload)) as VonageJsonObject;
  if (expectedApiKey && claims.api_key !== expectedApiKey) return undefined;
  return claims;
}

async function createVonageRawClient(options: VonageVoiceClientOptions): Promise<VonageRawClient> {
  const { Vonage } = await import("@vonage/server-sdk");
  return new Vonage({
    applicationId: options.applicationId,
    ...(options.privateKey ? { privateKey: options.privateKey } : {}),
    ...(options.jwt ? { jwt: options.jwt } : {}),
  }) as VonageRawClient;
}

function assertOutboundCallInput(input: VonageOutboundCallInput, options: VonageVoiceClientOptions) {
  if (input.to.some((endpoint) => endpoint.type === "app")) {
    throw new Error("Vonage app endpoints require Voice v2 call support; use the raw SDK client until normalized v2 support is added.");
  }
  if (input.randomFromNumber && input.from) {
    throw new Error("Vonage outbound calls cannot combine from with randomFromNumber.");
  }
  if (!input.eventUrl && !options.defaultEventUrl) {
    throw new Error("Vonage outbound calls require eventUrl or defaultEventUrl for observable call state.");
  }
  if (!input.answerUrl && !input.ncco) {
    throw new Error("Vonage outbound calls require answerUrl or an embedded NCCO.");
  }
}

function normalizeOutboundCall(input: VonageOutboundCallInput, options: VonageVoiceClientOptions) {
  return compact({
    to: input.to.map(normalizeEndpoint),
    from: input.randomFromNumber ? undefined : input.from ? normalizeEndpoint(input.from) : undefined,
    random_from_number: input.randomFromNumber,
    answer_url: input.answerUrl,
    event_url: input.eventUrl ?? options.defaultEventUrl,
    answer_method: input.answerMethod,
    event_method: input.eventMethod,
    ncco: input.ncco?.map(normalizeNccoAction),
    advanced_machine_detection: input.advancedMachineDetection,
  });
}

function normalizeEndpoint(endpoint: VonageEndpoint): VonageJsonObject {
  if (endpoint.type === "phone") return { type: "phone", number: endpoint.number };
  if (endpoint.type === "sip") return { type: "sip", uri: endpoint.uri };
  if (endpoint.type === "app") return { type: "app", user: endpoint.user };
  return compact({
    type: "websocket",
    uri: endpoint.uri,
    "content-type": endpoint.contentType,
    headers: endpoint.headers,
  });
}

function normalizeNccoAction(action: VonageNccoAction): VonageJsonObject {
  if (action.action === "talk") {
    return compact({
      action: "talk",
      text: action.text,
      voiceName: action.voiceName,
      bargeIn: action.bargeIn,
    });
  }
  if (action.action === "connect") {
    return compact({
      action: "connect",
      endpoint: action.endpoint.map(normalizeEndpoint),
      from: action.from,
      eventUrl: action.eventUrl,
    });
  }
  if (action.action === "stream") {
    return compact({
      action: "stream",
      streamUrl: action.streamUrl,
      bargeIn: action.bargeIn,
    });
  }
  return compact({
    action: "input",
    eventUrl: action.eventUrl,
    type: action.type,
  });
}

function parsePayload(rawText: string, contentType: string): VonageJsonObject {
  if (contentType.includes("application/json")) {
    return JSON.parse(rawText || "{}") as VonageJsonObject;
  }
  const params = new URLSearchParams(rawText);
  const payload: VonageJsonObject = {};
  for (const [key, value] of params) payload[key] = value;
  return payload;
}

function compact(input: Record<string, unknown | undefined>): VonageJsonObject {
  const output: VonageJsonObject = {};
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) output[key] = value as VonageJsonValue;
  }
  return output;
}

function bearerToken(value: string | null): string | undefined {
  if (!value) return undefined;
  const match = /^Bearer\s+(.+)$/i.exec(value);
  return match?.[1];
}

function base64urlDecode(value: string) {
  const padded = value.padEnd(Math.ceil(value.length / 4) * 4, "=");
  return Buffer.from(padded.replaceAll("-", "+").replaceAll("_", "/"), "base64").toString("utf8");
}
