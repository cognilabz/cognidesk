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
  ZendeskTicketAttachmentInput,
  ZendeskUploadFileInput,
} from "./contracts.js";

export function createZendeskTicketingClient(options: ZendeskTicketingClientOptions): ZendeskTicketingClient {
  const endpointUri = zendeskEndpointUri(options);
  const rawClient = options.rawClient ?? createRawZendeskClient(options, endpointUri);

  return {
    rawClient,
    getRawClient: () => rawClient,
    async rawRequest<T = JsonValue>(path: string, init: RequestInit = {}): Promise<T> {
      const method = init.method ?? "GET";
      const body = requestBody(init.body);
      const response = await requiredResourceMethod(rawClient.tickets, "_rawRequest")(method, rawRequestUrl(endpointUri, path), body);
      return unwrapZendeskResponse(response) as T;
    },
    async createTicket(input) {
      const response = await requiredResourceMethod(rawClient.tickets, "create")(zendeskTicketPayload(input));
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async getTicket(ticketId) {
      const response = await requiredResourceMethod(rawClient.tickets, "show")(toZendeskId(ticketId));
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async updateTicket(ticketId, patch) {
      const response = await requiredResourceMethod(rawClient.tickets, "update")(toZendeskId(ticketId), zendeskTicketPayload(patch));
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async searchTickets(query) {
      const response = await requiredResourceMethod(rawClient.search, "query")(searchQuery(query));
      return zendeskSearchResults(unwrapZendeskResponse(response));
    },
    async createComment(ticketId, comment, publicComment = true) {
      const ticketPatch = {
        ticket: {
          comment: {
            ...comment,
            public: publicComment,
          },
        },
      };
      const response = await requiredResourceMethod(rawClient.tickets, "update")(toZendeskId(ticketId), ticketPatch);
      return asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {};
    },
    async uploadFile(input) {
      return uploadZendeskFile(rawClient, input);
    },
    async addTicketAttachment(input) {
      const upload = await uploadZendeskFile(rawClient, input);
      const token = getStringField(upload, "token");
      if (!token) throw new Error("Zendesk attachment upload did not return an upload token.");
      const response = await requiredResourceMethod(rawClient.tickets, "update")(toZendeskId(input.ticketId), {
        ticket: {
          comment: {
            ...(input.comment ?? {}),
            public: input.public ?? true,
            uploads: [token],
          },
        },
      });
      return {
        upload,
        ticket: asObject(unwrapZendeskResponse(response)) ?? asObject(response) ?? {},
      };
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

function zendeskSearchResults(value: unknown): ZendeskTicketingProviderPayload {
  const object = asObject(value);
  const results = object ? object.results : undefined;
  return Array.isArray(results) ? results : value as ZendeskTicketingProviderPayload;
}

function asObject(value: unknown): JsonObject | undefined {
  return isRecord(value) && !Array.isArray(value) ? value as JsonObject : undefined;
}

function getObjectField(value: unknown, field: string): unknown {
  return isRecord(value) ? value[field] : undefined;
}

function getStringField(value: unknown, field: string): string | undefined {
  const fieldValue = getObjectField(value, field);
  return typeof fieldValue === "string" ? fieldValue : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toZendeskId(value: string | number): number {
  const id = Number(value);
  if (!Number.isSafeInteger(id) || id <= 0) {
    throw new Error(`Zendesk id must be a safe integer: ${String(value)}`);
  }
  return id;
}

function searchQuery(query: string | JsonObject): string {
  if (typeof query === "string") return query;
  const explicitQuery = query.query;
  if (typeof explicitQuery === "string") return explicitQuery;

  const terms = Object.entries(query).flatMap(([key, value]) => {
    if (value === undefined) return [];
    return `${key}:${zendeskSearchValue(value)}`;
  });
  if (terms.length === 0) {
    throw new Error("Zendesk search query must be a string or object with searchable fields.");
  }
  return terms.join(" ");
}

function zendeskSearchValue(value: JsonValue): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return value.map(zendeskSearchArrayValue).join(",");
  if (typeof value === "object") {
    throw new Error("Zendesk search field values must be primitives or arrays of primitives.");
  }
  return quoteZendeskSearchValue(String(value));
}

function zendeskSearchArrayValue(value: JsonValue): string {
  if (typeof value === "object" && value !== null) {
    throw new Error("Zendesk search array values must be primitives.");
  }
  return zendeskSearchValue(value);
}

function quoteZendeskSearchValue(value: string): string {
  return /\s/.test(value)
    ? `"${value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`
    : value;
}

function zendeskTicketPayload(input: JsonObject): JsonObject {
  return isRecord(input.ticket) && !Array.isArray(input.ticket)
    ? input
    : { ticket: input };
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

async function uploadZendeskFile(rawClient: ZendeskTicketingRawClient, input: ZendeskUploadFileInput): Promise<JsonObject> {
  const uploadOptions = {
    filename: input.filename,
    binary: input.binary ?? true,
    ...(input.token ? { token: input.token } : {}),
  };
  const response = await requiredResourceMethod(rawClient.attachments, "upload")(zendeskUploadData(input.data), uploadOptions);
  const body = unwrapZendeskResponse(response);
  return asObject(getObjectField(body, "upload")) ?? asObject(body) ?? {};
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
  ZendeskTicketAttachmentInput,
  ZendeskUploadFileInput,
};
