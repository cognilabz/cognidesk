import { Readable } from "node:stream";
import nodeZendesk, {
  type ZendeskClientOptions as NodeZendeskClientOptions,
} from "node-zendesk";
import type {
  JsonObject,
  JsonValue,
  ZendeskSdkResource,
  ZendeskTicketingClient,
  ZendeskTicketingClientOptions,
  ZendeskTicketingProviderPayload,
  ZendeskTicketingRawClient,
  ZendeskUploadFileInput,
} from "./contracts.js";

export function createZendeskTicketingClient(options: ZendeskTicketingClientOptions): ZendeskTicketingClient {
  const endpointUri = zendeskEndpointUri(options);
  const rawClient = options.rawClient ?? createRawZendeskClient(options, endpointUri);

  return {
    rawClient,
    async rawRequest<T = JsonValue>(path: string, init: RequestInit = {}): Promise<T> {
      const method = init.method ?? "GET";
      const body = requestBody(init.body);
      const response = await requiredResourceMethod(rawClient.tickets, "_rawRequest")(method, rawRequestUrl(endpointUri, path), body);
      return unwrapZendeskResponse(response) as T;
    },
    async createTicket(input) {
      const response = await requiredResourceMethod(rawClient.tickets, "create")(input);
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async getTicket(ticketId) {
      const response = await requiredResourceMethod(rawClient.tickets, "show")(toZendeskId(ticketId));
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async updateTicket(ticketId, patch) {
      const response = await requiredResourceMethod(rawClient.tickets, "update")(toZendeskId(ticketId), patch);
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async searchTickets(query) {
      const response = await requiredResourceMethod(rawClient.search, "query")(searchQuery(query));
      return unwrapZendeskResponse(response) as ZendeskTicketingProviderPayload;
    },
    async createComment(ticketId, comment, publicComment = true) {
      const ticketPatch = {
        comment: {
          ...comment,
          public: publicComment,
        },
      };
      const response = await requiredResourceMethod(rawClient.tickets, "update")(toZendeskId(ticketId), ticketPatch);
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async uploadFile(input) {
      const uploadOptions = {
        filename: input.filename,
        binary: input.binary ?? true,
        ...(input.token ? { token: input.token } : {}),
      };
      const response = await requiredResourceMethod(rawClient.attachments, "upload")(zendeskUploadData(input.data), uploadOptions);
      const body = unwrapZendeskResponse(response);
      return asObject(getObjectField(body, "upload")) ?? asObject(body) ?? {};
    },
    async getUser(userId) {
      const response = await requiredResourceMethod(rawClient.users, "show")(toZendeskId(userId));
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async getOrganization(organizationId) {
      const response = await requiredResourceMethod(rawClient.organizations, "show")(toZendeskId(organizationId));
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async listWebhooks() {
      const response = await requiredResourceMethod(rawClient.webhooks, "list")();
      return unwrapZendeskResponse(response) as ZendeskTicketingProviderPayload;
    },
    async readiness() {
      const response = await requiredResourceMethod(rawClient.users, "me")();
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
  };
}

export function zendeskEndpointUri(options: Pick<ZendeskTicketingClientOptions, "instanceUrl" | "apiBasePath">): string {
  const baseUrl = options.instanceUrl.replace(/\/+$/, "");
  const apiBasePath = options.apiBasePath ?? "/api/v2";
  return `${baseUrl}${apiBasePath.startsWith("/") ? "" : "/"}${apiBasePath}`.replace(/\/+$/, "");
}

function createRawZendeskClient(options: ZendeskTicketingClientOptions, endpointUri: string): ZendeskTicketingRawClient {
  const createSdkClient = options.createSdkClient ?? ((sdkOptions: NodeZendeskClientOptions) =>
    nodeZendesk.createClient(sdkOptions) as unknown as ZendeskTicketingRawClient);
  return createSdkClient(zendeskSdkOptions(options, endpointUri));
}

export function zendeskSdkOptions(
  options: ZendeskTicketingClientOptions,
  endpointUri = zendeskEndpointUri(options),
): NodeZendeskClientOptions {
  const sdkOptions: NodeZendeskClientOptions = {
    endpointUri,
    throwOriginalException: true,
    ...(options.sdkOptions ?? {}),
  };

  if (options.fetch) {
    sdkOptions.transportConfig = {
      ...(options.sdkOptions?.transportConfig ?? {}),
      transportFn: options.fetch,
      responseAdapter: (response: Response) => ({
        json: () => response.json(),
        status: response.status,
        headers: { get: (key: string) => response.headers.get(key) },
        statusText: response.statusText,
      }),
    };
  }

  if (options.accessToken) {
    return {
      ...sdkOptions,
      token: options.accessToken,
      oauth: true,
      useOAuth: true,
    };
  }

  if (options.email && options.apiToken) {
    return {
      ...sdkOptions,
      username: options.email,
      token: options.apiToken,
    };
  }

  return sdkOptions;
}

function requiredResourceMethod<Resource extends ZendeskSdkResource, Method extends keyof Resource>(
  resource: Resource,
  method: Method,
) {
  const handler = resource[method];
  if (typeof handler !== "function") {
    throw new Error(`node-zendesk rawClient is missing ${String(method)}().`);
  }
  return handler.bind(resource) as Extract<Resource[Method], (...args: never[]) => unknown>;
}

function unwrapZendeskResponse(value: unknown): unknown {
  if (isRecord(value) && "result" in value) {
    return value.result;
  }
  return value;
}

function asObject(value: unknown): JsonObject | undefined {
  return isRecord(value) && !Array.isArray(value) ? value as JsonObject : undefined;
}

function getObjectField(value: unknown, field: string): unknown {
  return isRecord(value) ? value[field] : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toZendeskId(value: string | number): number {
  const id = Number(value);
  if (!Number.isSafeInteger(id)) {
    throw new Error(`Zendesk id must be a safe integer: ${String(value)}`);
  }
  return id;
}

function searchQuery(query: string | JsonObject): string {
  if (typeof query === "string") return query;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined) params.set(key, String(value));
  }
  return params.toString();
}

function requestBody(body: BodyInit | null | undefined): unknown {
  if (typeof body !== "string") return body;
  try {
    return JSON.parse(body);
  } catch {
    return body;
  }
}

function zendeskUploadData(data: ZendeskUploadFileInput["data"]): ZendeskUploadFileInput["data"] {
  if (data instanceof Readable || data instanceof FormData) return data;
  if (Buffer.isBuffer(data)) return Readable.from(data);
  if (typeof data === "string") return Readable.from(Buffer.from(data));
  if (data instanceof URLSearchParams) return Readable.from(Buffer.from(data.toString()));
  if (data instanceof Blob) return Readable.fromWeb(data.stream() as never);
  if (data instanceof ArrayBuffer) return Readable.from(Buffer.from(data));
  if (ArrayBuffer.isView(data)) return Readable.from(Buffer.from(data.buffer, data.byteOffset, data.byteLength));
  if (typeof ReadableStream !== "undefined" && data instanceof ReadableStream) {
    return Readable.fromWeb(data as never);
  }
  return data;
}

function rawRequestUrl(endpointUri: string, path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const relativePath = path.replace(/^\/+/, "").replace(/^api\/v2\/?/, "");
  return `${endpointUri}/${relativePath}`;
}

export type {
  ZendeskTicketingClient,
  ZendeskTicketingClientOptions,
  ZendeskTicketingRawClient,
  ZendeskUploadFileInput,
};
