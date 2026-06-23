import { defineIntegration, providerJsonRequest, type ProviderHttpMethod, type ProviderQueryValue } from "@cognidesk/integration-kit";
import { eightByEightProviderManifest, eightByEightProviderManifestInput, eightByEightSupportSlice } from "./manifest.js";

export { eightByEightProviderManifest, eightByEightProviderManifestInput, eightByEightSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface EightByEightClientOptions {
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

export interface EightByEightOperationInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: Record<string, ProviderQueryValue> | undefined;
  body?: unknown;
  headers?: Record<string, string | undefined> | undefined;
  idempotencyKey?: string | undefined;
}

export interface ProviderExtensionRequestInput extends EightByEightOperationInput {
  operationId?: string | undefined;
  method?: ProviderHttpMethod | undefined;
  path?: string | undefined;
  allowMutation?: boolean | undefined;
  classification?: string | undefined;
}

export interface EightByEightClient {
  createHandoff(input: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  startContact(input?: EightByEightOperationInput): Promise<ProviderJsonObject>;
  endContact(input?: EightByEightOperationInput): Promise<ProviderJsonObject>;
  updateAgentStatus(input?: EightByEightOperationInput): Promise<ProviderJsonObject>;
  readiness(): Promise<ProviderJsonObject>;
}

export function createEightByEightClient(options: EightByEightClientOptions): EightByEightClient {
  const request = (method: ProviderHttpMethod, path: string, input: EightByEightOperationInput = {}) => providerJsonRequest<ProviderJsonObject>({
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
    providerName: "8x8 Contact Center",
  });
  const requestAllowedOperation = (operationId: string, input: EightByEightOperationInput = {}) => {
    const operation = eightByEightSupportSlice.allowedOperations.find((candidate) => candidate.id === operationId);
    if (!operation || String(operation.path) === "host-configured") throw new Error(`8x8 Contact Center operation '${operationId}' is not in the reviewed allowlist.`);
    return request(operation.method as ProviderHttpMethod, operation.path, input);
  };
  const client: EightByEightClient = {
    createHandoff(input) {
      const path = options.defaultHandoffPath;
      if (!path) throw new Error("8x8 Contact Center handoff path must be configured by the host app.");
      return request("POST", path, { body: input.payload ?? {}, query: input.query, idempotencyKey: input.idempotencyKey });
    },
    startContact(input: EightByEightOperationInput = {}) {
      return requestAllowedOperation("placePhoneCall", input);
    },
    endContact(input: EightByEightOperationInput = {}) {
      return requestAllowedOperation("deletePhoneInteraction", input);
    },
    updateAgentStatus(input: EightByEightOperationInput = {}) {
      return requestAllowedOperation("setagentstatus", input);
    },
    readiness() {
      const path = options.readinessPath ?? "";
      if (!path) throw new Error("8x8 Contact Center readiness path must be configured by the host app.");
      return request("GET", path);
    },
  };
  return client;
}

export function createEightByEightIntegration(options: EightByEightClientOptions) {
  const client = createEightByEightClient(options);
  return defineIntegration({
    manifest: eightByEightProviderManifestInput,
    operations: {
      "contact-center.handoff.request": async (input: unknown) => client.createHandoff(input as ConfiguredHandoffInput),
      "contact-center.contact.start": async (input: unknown) => client.startContact(input as EightByEightOperationInput),
      "contact-center.contact.end": async (input: unknown) => client.endContact(input as EightByEightOperationInput),
      "contact-center.agent.status.update": async (input: unknown) => client.updateAgentStatus(input as EightByEightOperationInput),
    },
  });
}
