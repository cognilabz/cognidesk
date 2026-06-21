import {
  Client,
  GraphError,
  ResponseType,
  RetryHandlerOptions,
  type GraphRequest,
} from "@microsoft/microsoft-graph-client";
import { IntegrationError, integrationPage, type IntegrationErrorCode } from "@cognidesk/integration-kit";
import type {
  TeamsChatMessageInput,
  TeamsChatMessageResource,
  TeamsChatMessageCollectionResponse,
  TeamsGraphRequestInput,
  TeamsGraphResource,
  TeamsUpdateChatMessageInput,
  TeamsWorkplaceClientOptions,
  TeamsWorkplaceJsonObject,
  TeamsWorkplaceProviderExtensionValue,
  TeamsWorkplaceProviderPayload,
  TeamsWorkplaceProviderQuery,
} from "./contracts.js";

export function createTeamsGraphClient(options: TeamsWorkplaceClientOptions): Client {
  if (options.graphClient) return options.graphClient;
  const baseUrl = (options.graphApiBaseUrl ?? "https://graph.microsoft.com").replace(/\/+$/, "");
  const initOptions: Parameters<typeof Client.init>[0] = {
    authProvider(done) {
      done(null, options.accessToken);
    },
    baseUrl,
    defaultVersion: options.graphApiVersion ?? "v1.0",
  };
  const hosts = customHosts(baseUrl);
  if (hosts) initOptions.customHosts = hosts;
  return Client.init(initOptions);
}

export async function teamsGraphRequest<T = TeamsGraphResource>(
  client: Client,
  options: TeamsWorkplaceClientOptions,
  input: TeamsGraphRequestInput,
): Promise<T> {
  const request = buildTeamsGraphRequest(client, input);
  const run = async () => executeTeamsGraphRequest<T>(request, input);
  try {
    return await withGraphFetch(options.fetch, run);
  } catch (error) {
    throw normalizeTeamsGraphError(error);
  }
}

export function teamsChannelMessagesPath(teamId: string, channelId: string, suffix = "") {
  return `/teams/${encodePath(teamId)}/channels/${encodePath(channelId)}/messages${suffix}`;
}

export function teamsChannelMessagePath(teamId: string, channelId: string, messageId: string, suffix = "") {
  return teamsChannelMessagesPath(teamId, channelId, `/${encodePath(messageId)}${suffix}`);
}

export function teamsChatMessagesPath(chatId: string, suffix = "") {
  return `/chats/${encodePath(chatId)}/messages${suffix}`;
}

export function teamsChatMessagePath(chatId: string, messageId: string) {
  return teamsChatMessagesPath(chatId, `/${encodePath(messageId)}`);
}

export function teamsChatMessageBody(input: TeamsChatMessageInput) {
  const body = input.body ?? (
    input.content !== undefined
      ? { content: input.content, contentType: input.contentType ?? "text" }
      : undefined
  );
  if (!body) throw new Error("Teams chatMessage body or content is required.");
  return stripUndefined({
    body,
    subject: input.subject,
    importance: input.importance,
    attachments: input.attachments,
    mentions: input.mentions,
    hostedContents: input.hostedContents,
    ...(input.additionalFields ?? {}),
  });
}

export function teamsUpdateChatMessageBody(
  input: TeamsUpdateChatMessageInput,
  permissionMode?: TeamsWorkplaceClientOptions["permissionMode"],
) {
  const body = input.body ?? (
    input.content !== undefined
      ? { content: input.content, contentType: input.contentType ?? "text" }
      : undefined
  );
  const output = stripUndefined({
    ...(body ? { body } : {}),
    subject: input.subject,
    importance: input.importance,
    attachments: input.attachments,
    mentions: input.mentions,
    hostedContents: input.hostedContents,
    policyViolation: input.policyViolation,
    ...(input.additionalFields ?? {}),
  });
  if (Object.keys(output).length === 0) {
    throw new Error("Teams chatMessage update body, content, policyViolation, or mutable fields are required.");
  }
  if (permissionMode === "application") {
    const keys = Object.keys(output);
    if (keys.length !== 1 || keys[0] !== "policyViolation") {
      throw new Error("Microsoft Graph application permissions can update only the chatMessage policyViolation property.");
    }
  }
  return output;
}

export function teamsCollectionResult<T extends TeamsChatMessageResource>(
  response: TeamsChatMessageCollectionResponse & { value?: T[] },
): TeamsChatMessageCollectionResponse & { value: T[]; nextLink?: string } {
  const value = response.value ?? [];
  const nextLink = response["@odata.nextLink"];
  integrationPage({
    items: value,
    ...(nextLink ? { nextCursor: nextLink } : {}),
    raw: response,
  });
  return {
    ...response,
    value,
    ...(nextLink ? { nextLink } : {}),
  };
}

export function applyOptionalNumberQuery(query: TeamsWorkplaceProviderQuery, key: string, value: number | undefined) {
  if (value !== undefined) query[key] = value;
}

export function applyOptionalStringQuery(query: TeamsWorkplaceProviderQuery, key: string, value: string | undefined) {
  if (value) query[key] = value;
}

export function assertDelegatedTeamsSend(permissionMode?: TeamsWorkplaceClientOptions["permissionMode"]) {
  if (permissionMode === "application") {
    throw new Error("Microsoft Graph application permissions can send Teams messages only for migration/import flows, which this package does not implement.");
  }
}

export function assertTeamsSubscriptionResource(resource: string) {
  const normalized = resource.replace(/^\/+/, "").replace(/\/+$/, "");
  const teamsChannelMessages = /^teams\/[^/]+\/channels\/[^/]+\/messages$/;
  const teamsChannelReplies = /^teams\/[^/]+\/channels\/[^/]+\/messages\/[^/]+\/replies$/;
  const chatMessages = /^chats\/[^/]+\/messages$/;
  if (
    !teamsChannelMessages.test(normalized)
    && !teamsChannelReplies.test(normalized)
    && !chatMessages.test(normalized)
  ) {
    throw new Error("Teams subscription resource must target Teams channel messages, channel replies, or chat messages.");
  }
}

export function stripUndefined<T extends TeamsWorkplaceJsonObject>(input: T) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as T;
}

function buildTeamsGraphRequest(client: Client, input: TeamsGraphRequestInput): GraphRequest {
  const request = client.api(resolveGraphPath(input.path, input.pathParams));
  if (input.query) request.query(queryString(input.query));
  if (input.headers) request.headers(input.headers);
  if (input.signal) request.option("signal", input.signal);
  request.middlewareOptions([noRetryOptions()]);
  if (input.rawResponse) request.responseType(ResponseType.RAW);
  return request;
}

async function executeTeamsGraphRequest<T>(
  request: GraphRequest,
  input: TeamsGraphRequestInput,
): Promise<T> {
  switch (input.method) {
    case "GET":
      return decodeGraphResult<T>(await request.get());
    case "POST":
      return decodeGraphResult<T>(await request.post(input.body ?? {}));
    case "PUT":
      return decodeGraphResult<T>(await request.put(input.body ?? {}));
    case "PATCH":
      return decodeGraphResult<T>(await request.patch(input.body ?? {}));
    case "DELETE":
      return decodeGraphResult<T>(await request.delete());
  }
}

function decodeGraphResult<T>(result: unknown): T {
  if (typeof result !== "string") return result as T;
  const trimmed = result.trim();
  if (!trimmed) return undefined as T;
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return result as T;
  return JSON.parse(trimmed) as T;
}

function resolveGraphPath(path: string, pathParams: Record<string, string | number | boolean | undefined> = {}) {
  return path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Teams Graph path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

function queryString(query: TeamsWorkplaceProviderQuery) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
  return params.toString();
}

async function withGraphFetch<T>(fetchImpl: typeof fetch | undefined, run: () => Promise<T>): Promise<T> {
  if (!fetchImpl) return run();
  const originalFetch = globalThis.fetch;
  globalThis.fetch = fetchImpl;
  try {
    return await run();
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function customHosts(baseUrl: string) {
  const host = new URL(baseUrl).host;
  return host === "graph.microsoft.com" ? undefined : new Set([host]);
}

export function normalizeTeamsGraphError(error: unknown): IntegrationError {
  if (error instanceof IntegrationError) return error;
  if (error instanceof GraphError || isGraphErrorLike(error)) {
    const statusCode = typeof error.statusCode === "number" ? error.statusCode : undefined;
    const parsedBody = parseGraphErrorBody(error.body);
    const graphCode = typeof error.code === "string" ? error.code : parsedBody.graphCode;
    const headers = headersToRecord(error.headers);
    const requestId = typeof error.requestId === "string"
      ? error.requestId
      : parsedBody.requestId ?? headers?.["request-id"] ?? headers?.["x-ms-request-id"];
    return new IntegrationError(
      integrationErrorCode(statusCode),
      parsedBody.message ?? error.message ?? "Microsoft Graph request failed.",
      {
        provider: "teams",
        statusCode,
        requestId,
        retryable: statusCode === 429 || (statusCode !== undefined && statusCode >= 500),
        details: stripUndefined({
          ...(graphCode ? { graphCode } : {}),
          ...(headers ? { headers } : {}),
          body: error.body as TeamsWorkplaceProviderPayload | undefined,
        }),
        cause: error,
      },
    );
  }
  return new IntegrationError("unknown", error instanceof Error ? error.message : String(error), {
    provider: "teams",
    cause: error,
  });
}

function integrationErrorCode(statusCode: number | undefined): IntegrationErrorCode {
  if (statusCode === 401) return "provider-auth";
  if (statusCode === 403) return "provider-permission";
  if (statusCode === 408 || statusCode === 504) return "provider-timeout";
  if (statusCode === 429) return "provider-rate-limited";
  if (statusCode !== undefined && statusCode >= 500) return "provider-unavailable";
  if (statusCode !== undefined && statusCode >= 400) return "provider-validation";
  return "unknown";
}

function isGraphErrorLike(error: unknown): error is GraphError {
  return typeof error === "object"
    && error !== null
    && "statusCode" in error
    && "message" in error;
}

function headersToRecord(headers: Headers | undefined) {
  if (!headers) return undefined;
  const record: Record<string, string> = {};
  headers.forEach((value, key) => {
    record[key] = value;
  });
  return record;
}

function encodePath(value: string) {
  return encodeURIComponent(value);
}

function noRetryOptions() {
  return new RetryHandlerOptions(0, 0, () => false);
}

function parseGraphErrorBody(body: unknown) {
  const parsed = typeof body === "string" ? parseJsonObject(body) : body;
  const graphError = isRecord(parsed) && isRecord(parsed.error) ? parsed.error : parsed;
  const innerError = isRecord(graphError) && isRecord(graphError.innerError) ? graphError.innerError : undefined;
  return {
    graphCode: isRecord(graphError) && typeof graphError.code === "string" ? graphError.code : undefined,
    message: isRecord(graphError) && typeof graphError.message === "string" ? graphError.message : undefined,
    requestId: innerError && typeof innerError["request-id"] === "string" ? innerError["request-id"] : undefined,
  };
}

function parseJsonObject(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
