import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { talkdeskProviderManifest, talkdeskProviderManifestInput, talkdeskSupportSlice } from "./manifest.js";

export { talkdeskProviderManifest, talkdeskProviderManifestInput, talkdeskSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface TalkdeskClientOptions {
  apiBaseUrl: string;
  accessToken?: string | undefined;
  authorizationHeader?: string | undefined;
  apiKey?: string | undefined;
  apiKeyHeaderName?: string | undefined;
  defaultHandoffPath?: string | undefined;
  readinessPath?: string | undefined;
  fetch?: typeof fetch | undefined;
}

export interface ConfiguredHandoffInput {
  payload?: unknown;
  query?: Record<string, ProviderQueryValue> | undefined;
  idempotencyKey?: string | undefined;
}

export interface TalkdeskOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends TalkdeskOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface TalkdeskClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  scheduleCallback(input?: TalkdeskOperationInput): Promise<ProviderJsonObject>;
  createTask(input?: TalkdeskOperationInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createTalkdeskClient(options: TalkdeskClientOptions): TalkdeskClient {
  const request = (method: ProviderHttpMethod, path: string, input: TalkdeskOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
    baseUrl: options.apiBaseUrl,
    method,
    path,
    pathParams: input.pathParams,
    query: input.query,
    body: input.body,
    headers: input.headers,
    accessToken: options.accessToken,
    authorizationHeader: options.authorizationHeader,
    apiKey: options.apiKey,
    apiKeyHeaderName: options.apiKeyHeaderName,
    idempotencyKey: input.idempotencyKey,
    fetch: options.fetch,
    providerName: "Talkdesk",
  });
  const requestAllowedOperation = (operationId: string, input: TalkdeskOperationInput = {}) => {
    const operation = talkdeskSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`Talkdesk operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: TalkdeskClient = {
    createHandoff(input) {
      const path = options.defaultHandoffPath;
      if (!path) throw new Error("Talkdesk handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
    },
    scheduleCallback(input: TalkdeskOperationInput = {}) {
      return requestAllowedOperation("calls-callback-post", input);
    },
    createTask(input: TalkdeskOperationInput = {}) {
      return requestAllowedOperation("CreatingACase", input);
    },
    readiness() {
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("Talkdesk readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createTalkdeskIntegration(options: TalkdeskClientOptions) {
  const client = createTalkdeskClient(options);
  return defineIntegration({
    manifest: talkdeskProviderManifestInput,
    operations: {
      "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
      "contact-center.callback.schedule": async (input: unknown) => client.scheduleCallback(input as TalkdeskOperationInput),
      "contact-center.task.create": async (input: unknown) => client.createTask(input as TalkdeskOperationInput),
    },
  });
}
