import {
  Client,
  CustomAuthenticationProvider,
  GraphError,
  MiddlewareFactory,
  ResponseType,
  RetryHandlerOptions,
  type Context,
  type GraphRequest,
  type Middleware,
} from "@microsoft/microsoft-graph-client";
import { IntegrationError, integrationPage } from "@cognidesk/integration-kit";
import type {
  OutlookEmailClientOptions,
  OutlookEmailJsonObject,
  OutlookEmailProviderQuery,
  OutlookGraphRequestInput,
  OutlookGraphResource,
  OutlookListMessagesInput,
} from "./contracts.js";

export function createOutlookGraphClient(options: OutlookEmailClientOptions): Client {
  if (options.graphClient) return options.graphClient;
  const baseUrl = (options.graphBaseUrl ?? "https://graph.microsoft.com").replace(/\/+$/, "");
  const initOptions: Pick<Parameters<typeof Client.initWithMiddleware>[0], "baseUrl" | "customHosts" | "defaultVersion"> = {
    baseUrl,
    defaultVersion: options.graphApiVersion ?? "v1.0",
  };
  const hosts = customHosts(baseUrl);
  if (hosts) initOptions.customHosts = hosts;
  if (options.fetch) {
    return Client.initWithMiddleware({
      ...initOptions,
      middleware: graphMiddleware(options.accessToken, options.fetch),
    });
  }
  return Client.init({
    ...initOptions,
    authProvider(done) {
      done(null, options.accessToken);
    },
  });
}

export function outlookUserPath(userId?: string) {
  return userId ? `/users/${encodeURIComponent(userId)}` : "/me";
}

export async function outlookGraphRequest<T = OutlookGraphResource>(
  client: Client,
  options: OutlookEmailClientOptions,
  input: OutlookGraphRequestInput,
): Promise<T> {
  const request = buildOutlookGraphRequest(client, input);
  try {
    return await executeOutlookGraphRequest<T>(request, input);
  } catch (error) {
    throw normalizeOutlookGraphError(error);
  }
}

export function applyOutlookListQuery(input: OutlookListMessagesInput): OutlookEmailProviderQuery {
  return stripUndefined({
    ...selectExpandQuery(input),
    ...(input.top !== undefined ? { "$top": input.top } : {}),
    ...(input.skip !== undefined ? { "$skip": input.skip } : {}),
    ...(input.filter ? { "$filter": input.filter } : {}),
    ...(input.search ? { "$search": input.search } : {}),
    ...(input.orderBy?.length ? { "$orderby": input.orderBy.join(",") } : {}),
  });
}

export function selectExpandQuery(input: { select?: string[]; expand?: string[] }): OutlookEmailProviderQuery {
  return stripUndefined({
    ...(input.select?.length ? { "$select": input.select.join(",") } : {}),
    ...(input.expand?.length ? { "$expand": input.expand.join(",") } : {}),
  });
}

export function outlookAttachmentPath(userPath: string, input: { messageId: string; folderId?: string }) {
  const messagePath = input.folderId
    ? `${userPath}/mailFolders/${encodeURIComponent(input.folderId)}/messages/${encodeURIComponent(input.messageId)}`
    : `${userPath}/messages/${encodeURIComponent(input.messageId)}`;
  return `${messagePath}/attachments`;
}

export function outlookCollectionResult<T>(
  response: OutlookGraphCollection<T>,
): { value: T[]; nextLink?: string; deltaLink?: string } {
  const value = response.value ?? [];
  const nextLink = response["@odata.nextLink"];
  const deltaLink = response["@odata.deltaLink"];
  integrationPage({
    items: value,
    ...(nextLink ? { nextCursor: nextLink } : {}),
    raw: response,
  });
  return {
    value,
    ...(nextLink ? { nextLink } : {}),
    ...(deltaLink ? { deltaLink } : {}),
  };
}

export function stripUndefined<T extends OutlookEmailJsonObject>(input: T) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as T;
}

function buildOutlookGraphRequest(client: Client, input: OutlookGraphRequestInput): GraphRequest {
  const request = client.api(resolveGraphPath(input.path, input.pathParams));
  if (input.query) request.query(queryString(input.query));
  if (input.headers) request.headers(input.headers);
  if (input.signal) request.option("signal", input.signal);
  request.middlewareOptions([noRetryOptions()]);
  if (input.rawResponse) request.responseType(ResponseType.RAW);
  return request;
}

async function executeOutlookGraphRequest<T>(
  request: GraphRequest,
  input: OutlookGraphRequestInput,
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
    if (value === undefined) throw new Error(`Missing Outlook Graph path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

function queryString(query: OutlookEmailProviderQuery) {
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

function customHosts(baseUrl: string) {
  const host = new URL(baseUrl).host;
  return host === "graph.microsoft.com" ? undefined : new Set([host]);
}

function graphMiddleware(accessToken: string, fetchImpl: typeof fetch): Middleware[] {
  const middleware = MiddlewareFactory.getDefaultMiddlewareChain(new CustomAuthenticationProvider((done) => {
    done(null, accessToken);
  }));
  middleware.splice(middleware.length - 1, 1, new GraphFetchHandler(fetchImpl));
  return middleware;
}

class GraphFetchHandler implements Middleware {
  constructor(private readonly fetchImpl: typeof fetch) {}

  async execute(context: Context): Promise<void> {
    context.response = await this.fetchImpl(context.request, context.options);
  }
}

export function normalizeOutlookGraphError(error: unknown): IntegrationError {
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
        provider: "outlook",
        statusCode,
        requestId,
        retryable: statusCode === 429 || (statusCode !== undefined && statusCode >= 500),
        details: stripUndefined({
          ...(graphCode ? { graphCode } : {}),
          ...(headers ? { headers } : {}),
          body: error.body,
        }),
        cause: error,
      },
    );
  }
  return new IntegrationError("unknown", error instanceof Error ? error.message : String(error), {
    provider: "outlook",
    cause: error,
  });
}

function integrationErrorCode(statusCode: number | undefined) {
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

interface OutlookGraphCollection<T> {
  value?: T[];
  "@odata.nextLink"?: string;
  "@odata.deltaLink"?: string;
}
