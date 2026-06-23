import { createHmac, timingSafeEqual } from "node:crypto";
import { defineIntegration } from "@cognidesk/integration-kit";
import {
  genesysCloudContactCenterManifest,
  genesysCloudContactCenterManifestInput,
} from "./manifest.js";

export { genesysCloudContactCenterManifest } from "./manifest.js";

export type GenesysCloudHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type GenesysCloudJsonObject = Record<string, unknown>;

export interface GenesysCloudSdkApiClient {
  callApi?: (...args: unknown[]) => Promise<unknown>;
  setEnvironment?: (environment: string) => void;
  setAccessToken?: (token: string) => void;
}

export interface GenesysCloudRawClient {
  apiClient: GenesysCloudSdkApiClient;
  request<T = unknown>(
    method: GenesysCloudHttpMethod,
    path: string,
    input?: GenesysCloudRequestInput,
  ): Promise<T>;
}

export interface GenesysCloudRequestInput {
  query?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
}

export interface GenesysCloudContactCenterOptions {
  apiBaseUrl: string;
  accessToken?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  rawClient?: GenesysCloudRawClient;
}

export async function createGenesysCloudContactCenterClient(
  options: GenesysCloudContactCenterOptions,
) {
  const rawClient = options.rawClient ?? await createGenesysCloudRawClient(options);

  return {
    rawClient,
    createHandoff(input: { payload: unknown; path?: string }) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) throw new Error("Genesys Cloud handoff path must be provided by SDK configuration.");
      return rawClient.request("POST", path, { body: input.payload });
    },
    createCallback(input: { callback: unknown }) {
      return rawClient.request("POST", "/api/v2/conversations/callbacks", { body: input.callback });
    },
    createOpenMessage(input: { integrationId: string; message: unknown }) {
      requireIntegrationId(input.integrationId);
      return rawClient.request("POST", `/api/v2/conversations/messages/${encodeURIComponent(input.integrationId)}/inbound/open/message`, {
        body: input.message,
      });
    },
    getConversation(input: { conversationId: string }) {
      return rawClient.request("GET", `/api/v2/conversations/${encodeURIComponent(input.conversationId)}`);
    },
    listQueues(input: { pageSize?: number; pageNumber?: number; name?: string } = {}) {
      return rawClient.request("GET", "/api/v2/routing/queues", {
        query: {
          pageSize: input.pageSize,
          pageNumber: input.pageNumber,
          name: input.name,
        },
      });
    },
    readiness() {
      return rawClient.request("GET", options.readinessPath ?? "/api/v2/users/me");
    },
  };
}

export async function createGenesysCloudContactCenterIntegration(options: GenesysCloudContactCenterOptions) {
  const client = await createGenesysCloudContactCenterClient(options);
  const integration = defineIntegration({
    manifest: genesysCloudContactCenterManifestInput,
    operations: {
      "contact-center.handoff.request": client.createHandoff,
      "contact-center.callback.schedule": client.createCallback,
      "contact-center.contact.read": client.getConversation,
      "contact-center.queue.list": client.listQueues,
      "genesys-cloud.openMessaging.message.create": client.createOpenMessage,
    },
  });
  return {
    ...integration,
    rawClient: client.rawClient,
    credentialStatuses: () => genesysCloudContactCenterCredentialStatuses(options),
    readiness: async () => genesysCloudReadiness(client),
  };
}

export function genesysCloudContactCenterCredentialStatuses(
  input: Pick<GenesysCloudContactCenterOptions, "apiBaseUrl" | "accessToken" | "defaultHandoffPath">,
) {
  return [
    {
      providerPackageId: genesysCloudContactCenterManifest.id,
      requirementId: "genesys-cloud-region",
      state: input.apiBaseUrl ? "configured" : "missing",
      message: input.apiBaseUrl ? "Genesys Cloud API base URL is configured." : "Genesys Cloud API base URL is required.",
    },
    {
      providerPackageId: genesysCloudContactCenterManifest.id,
      requirementId: "genesys-cloud-api-access",
      state: input.accessToken ? "configured" : "missing",
      message: input.accessToken ? "Genesys Cloud OAuth access is configured." : "Genesys Cloud OAuth access is required.",
    },
    {
      providerPackageId: genesysCloudContactCenterManifest.id,
      requirementId: "genesys-cloud-routing",
      state: input.defaultHandoffPath ? "configured" : "not-required",
      message: input.defaultHandoffPath
        ? "Genesys Cloud handoff path is configured."
        : "Genesys Cloud handoff routing is verified by workflow-specific configuration.",
    },
  ];
}

export function verifyGenesysCloudOpenMessagingWebhookSignature(input: {
  secret: string;
  body: string | Buffer;
  signature: string;
}) {
  const expected = createHmac("sha256", input.secret).update(input.body).digest("hex");
  const expectedHeader = `sha256=${expected}`;
  const received = Buffer.from(input.signature);
  const expectedBuffer = Buffer.from(expectedHeader);
  return received.length === expectedBuffer.length && timingSafeEqual(received, expectedBuffer);
}

async function genesysCloudReadiness(
  client: Awaited<ReturnType<typeof createGenesysCloudContactCenterClient>>,
) {
  try {
    await client.readiness();
    return {
      providerPackageId: genesysCloudContactCenterManifest.id,
      status: "ready",
      live: true,
      checkSource: "GET /api/v2/users/me",
    };
  } catch (error) {
    return {
      providerPackageId: genesysCloudContactCenterManifest.id,
      status: "blocked",
      live: true,
      checkSource: "GET /api/v2/users/me",
      blockers: [{
        code: "genesys-cloud-readiness-failed",
        message: error instanceof Error ? error.message : "Genesys Cloud readiness failed.",
        kind: "permission-blocked",
      }],
    };
  }
}

async function createGenesysCloudRawClient(options: GenesysCloudContactCenterOptions): Promise<GenesysCloudRawClient> {
  const sdkModule = await import("purecloud-platform-client-v2");
  const sdk = (sdkModule.default ?? sdkModule) as {
    ApiClient: { instance: GenesysCloudSdkApiClient };
  };
  const apiClient = sdk.ApiClient.instance;
  apiClient.setEnvironment?.(options.apiBaseUrl);
  if (options.accessToken) apiClient.setAccessToken?.(options.accessToken);

  return {
    apiClient,
    request(method, path, input = {}) {
      return callGenesysApi(apiClient, method, path, input);
    },
  };
}

async function callGenesysApi<T>(
  apiClient: GenesysCloudSdkApiClient,
  method: GenesysCloudHttpMethod,
  path: string,
  input: GenesysCloudRequestInput,
): Promise<T> {
  if (!apiClient.callApi) {
    throw new Error("Genesys Cloud SDK ApiClient does not expose callApi().");
  }
  return apiClient.callApi(
    path,
    method,
    {},
    compactQuery(input.query),
    input.headers ?? {},
    {},
    input.body,
    ["PureCloud OAuth"],
    input.body === undefined ? [] : ["application/json"],
    ["application/json"],
    null,
  ) as Promise<T>;
}

function compactQuery(query?: GenesysCloudRequestInput["query"]) {
  return Object.fromEntries(Object.entries(query ?? {}).filter(([, value]) => value !== undefined));
}

function requireIntegrationId(integrationId: string) {
  if (!integrationId) throw new Error("Genesys Cloud Open Messaging integrationId is required.");
}
