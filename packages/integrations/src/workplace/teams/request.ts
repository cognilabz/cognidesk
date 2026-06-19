import type {
  TeamsChatMessageInput,
  TeamsGraphHttpMethod,
  TeamsUpdateChatMessageInput,
  TeamsWorkplaceClientOptions,
  TeamsWorkplaceJsonObject,
  TeamsWorkplaceProviderExtensionValue,
  TeamsWorkplaceProviderPayload,
  TeamsWorkplaceProviderQuery,
} from "./contracts.js";

export function teamsGraphUrl(baseUrl: string, version: string, path: string) {
  return new URL(`/${version.replace(/^\/+|\/+$/g, "")}${path}`, baseUrl);
}

export function teamsGraphOperationUrl(
  baseUrl: string,
  version: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: TeamsWorkplaceProviderQuery,
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Teams Graph path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const url = teamsGraphUrl(baseUrl, version, resolvedPath);
  appendTeamsGraphQuery(url.searchParams, query);
  return url;
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

export async function teamsGraphRequest<T>(input: {
  url: URL;
  method: TeamsGraphHttpMethod;
  options: TeamsWorkplaceClientOptions;
  fetch: typeof fetch;
  body?: TeamsWorkplaceProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  returnResponse?: false;
}): Promise<T>;
export async function teamsGraphRequest(input: {
  url: URL;
  method: TeamsGraphHttpMethod;
  options: TeamsWorkplaceClientOptions;
  fetch: typeof fetch;
  body?: TeamsWorkplaceProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  returnResponse: true;
}): Promise<Response>;
export async function teamsGraphRequest<T>(input: {
  url: URL;
  method: TeamsGraphHttpMethod;
  options: TeamsWorkplaceClientOptions;
  fetch: typeof fetch;
  body?: TeamsWorkplaceProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  returnResponse?: boolean;
}): Promise<T | Response> {
  if (!input.options.accessToken) throw new Error("Microsoft Graph OAuth access token is required.");
  const requestBody = input.body === undefined ? undefined : JSON.stringify(input.body);
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.options.accessToken}`,
      ...(requestBody ? { "content-type": "application/json" } : {}),
      ...(input.headers ?? {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  if (input.returnResponse && response.ok) return response;
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & TeamsGraphErrorResponse : {} as T & TeamsGraphErrorResponse;
  if (!response.ok) {
    throw new Error(teamsGraphErrorMessage(body, response.status));
  }
  return body as T;
}

export function applyOptionalNumberQuery(url: URL, key: string, value: number | undefined) {
  if (value !== undefined) url.searchParams.set(key, String(value));
}

export function applyOptionalStringQuery(url: URL, key: string, value: string | undefined) {
  if (value) url.searchParams.set(key, value);
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
    !teamsChannelMessages.test(normalized) &&
    !teamsChannelReplies.test(normalized) &&
    !chatMessages.test(normalized)
  ) {
    throw new Error("Teams subscription resource must target Teams channel messages, channel replies, or chat messages.");
  }
}

export function stripUndefined(input: TeamsWorkplaceJsonObject) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as TeamsWorkplaceJsonObject;
}

function appendTeamsGraphQuery(params: URLSearchParams, query?: TeamsWorkplaceProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}

function encodePath(value: string) {
  return encodeURIComponent(value);
}

interface TeamsGraphErrorResponse {
  error?: {
    code?: string;
    message?: string;
    innerError?: TeamsWorkplaceProviderExtensionValue;
  };
}

function teamsGraphErrorMessage(body: TeamsGraphErrorResponse, status: number) {
  const code = body.error?.code ? `Microsoft Graph error ${body.error.code}` : `Microsoft Graph returned ${status}`;
  return body.error?.message ? `${code}: ${body.error.message}` : `${code}.`;
}
