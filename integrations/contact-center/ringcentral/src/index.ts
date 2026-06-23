import { defineIntegration } from "@cognidesk/integration-kit";
import {
  ringCentralContactCenterManifest,
  ringCentralContactCenterManifestInput,
} from "./manifest.js";

export { ringCentralContactCenterManifest } from "./manifest.js";

export type RingCentralHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type RingCentralJsonObject = Record<string, unknown>;

export interface RingCentralPlatformClient {
  get?: (path: string, query?: unknown) => Promise<unknown>;
  post?: (path: string, body?: unknown, query?: unknown) => Promise<unknown>;
  put?: (path: string, body?: unknown, query?: unknown) => Promise<unknown>;
  patch?: (path: string, body?: unknown, query?: unknown) => Promise<unknown>;
  delete?: (path: string, query?: unknown) => Promise<unknown>;
  auth?: () => { setData?: (data: unknown) => Promise<unknown> | unknown };
}

export interface RingCentralRawClient {
  platform: RingCentralPlatformClient;
  request<T = unknown>(
    method: RingCentralHttpMethod,
    path: string,
    input?: RingCentralRequestInput,
  ): Promise<T>;
}

export interface RingCentralRequestInput {
  query?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
}

export interface RingCentralContactCenterOptions {
  server: string;
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  rawClient?: RingCentralRawClient;
  defaultHandoffPath?: string;
  readinessPath?: string;
}

export async function createRingCentralContactCenterClient(options: RingCentralContactCenterOptions) {
  const rawClient = options.rawClient ?? await createRingCentralRawClient(options);

  return {
    rawClient,
    createHandoff(input: { payload: unknown }) {
      return rawClient.request("POST", configuredPath(options.defaultHandoffPath, "RingCX handoff path"), {
        body: input.payload,
      });
    },
    readiness() {
      return rawClient.request("GET", configuredPath(options.readinessPath, "RingCX readiness path"));
    },
    request: rawClient.request,
  };
}

export async function createRingCentralContactCenterIntegration(options: RingCentralContactCenterOptions) {
  const client = await createRingCentralContactCenterClient(options);
  const integration = defineIntegration({
    manifest: ringCentralContactCenterManifestInput,
    operations: {
      "contact-center.handoff.request": client.createHandoff,
      "contact-center.handoff.status.read": client.readiness,
    },
  });
  return {
    ...integration,
    rawClient: client.rawClient,
    credentialStatuses: () => ringCentralContactCenterCredentialStatuses(options),
    readiness: async () => ringCentralReadiness(client),
  };
}

export function ringCentralContactCenterCredentialStatuses(
  input: Pick<RingCentralContactCenterOptions, "server" | "accessToken" | "rawClient" | "defaultHandoffPath">,
) {
  return [
    {
      providerPackageId: ringCentralContactCenterManifest.id,
      requirementId: "ringcentral-api-base",
      state: input.server || input.rawClient ? "configured" : "missing",
      message: input.server || input.rawClient ? "RingCentral API base is configured." : "RingCentral API base URL is required.",
    },
    {
      providerPackageId: ringCentralContactCenterManifest.id,
      requirementId: "ringcentral-api-access",
      state: input.accessToken || input.rawClient ? "configured" : "required",
      message: input.accessToken || input.rawClient
        ? "RingCentral SDK access is configured."
        : "RingCentral SDK access is verified by runtime authentication.",
    },
    {
      providerPackageId: ringCentralContactCenterManifest.id,
      requirementId: "ringcentral-ringcx-routing",
      state: input.defaultHandoffPath ? "configured" : "missing",
      message: input.defaultHandoffPath ? "RingCX handoff path is configured." : "RingCX handoff path must be configured by the SDK app.",
    },
  ];
}

async function ringCentralReadiness(
  client: Awaited<ReturnType<typeof createRingCentralContactCenterClient>>,
) {
  try {
    await client.readiness();
    return {
      providerPackageId: ringCentralContactCenterManifest.id,
      status: "ready",
      live: true,
      checkSource: "configured-readiness-path",
    };
  } catch (error) {
    return {
      providerPackageId: ringCentralContactCenterManifest.id,
      status: "blocked",
      live: true,
      checkSource: "configured-readiness-path",
      blockers: [{
        code: "ringcentral-readiness-failed",
        message: error instanceof Error ? error.message : "RingCentral readiness failed.",
        kind: "permission-blocked",
      }],
    };
  }
}

async function createRingCentralRawClient(options: RingCentralContactCenterOptions): Promise<RingCentralRawClient> {
  const sdkModule = await import("@ringcentral/sdk");
  const SDK = (sdkModule.default ?? sdkModule) as new (options: {
    server: string;
    clientId?: string;
    clientSecret?: string;
  }) => { platform(): RingCentralPlatformClient };
  const sdk = new SDK({
    server: options.server,
    ...(options.clientId ? { clientId: options.clientId } : {}),
    ...(options.clientSecret ? { clientSecret: options.clientSecret } : {}),
  });
  const platform = sdk.platform();
  if (options.accessToken) {
    await platform.auth?.().setData?.({
      access_token: options.accessToken,
      token_type: "bearer",
    });
  }

  return {
    platform,
    request(method, path, input = {}) {
      return ringCentralPlatformRequest(platform, method, path, input);
    },
  };
}

async function ringCentralPlatformRequest<T>(
  platform: RingCentralPlatformClient,
  method: RingCentralHttpMethod,
  path: string,
  input: RingCentralRequestInput,
): Promise<T> {
  const response = await callPlatform(platform, method, path, input);
  if (isJsonResponse(response)) return response.json() as Promise<T>;
  return response as T;
}

function callPlatform(
  platform: RingCentralPlatformClient,
  method: RingCentralHttpMethod,
  path: string,
  input: RingCentralRequestInput,
) {
  if (method === "GET") return requiredMethod(platform.get, "get").call(platform, path, compactQuery(input.query));
  if (method === "POST") return requiredMethod(platform.post, "post").call(platform, path, input.body, compactQuery(input.query));
  if (method === "PUT") return requiredMethod(platform.put, "put").call(platform, path, input.body, compactQuery(input.query));
  if (method === "PATCH") return requiredMethod(platform.patch, "patch").call(platform, path, input.body, compactQuery(input.query));
  return requiredMethod(platform.delete, "delete").call(platform, path, compactQuery(input.query));
}

function requiredMethod<T>(method: T | undefined, name: string): T {
  if (!method) throw new Error(`RingCentral SDK platform does not expose ${name}().`);
  return method;
}

function configuredPath(path: string | undefined, label: string) {
  if (!path) throw new Error(`${label} must be configured by the SDK app; no official default path is assumed.`);
  return path;
}

function compactQuery(query?: RingCentralRequestInput["query"]) {
  return Object.fromEntries(Object.entries(query ?? {}).filter(([, value]) => value !== undefined));
}

function isJsonResponse(value: unknown): value is { json(): Promise<unknown> } {
  return typeof value === "object"
    && value !== null
    && "json" in value
    && typeof value.json === "function";
}
