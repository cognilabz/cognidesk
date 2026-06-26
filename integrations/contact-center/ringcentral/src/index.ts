import { defineIntegration } from "@cognidesk/integration-kit";
import { SDK, type SDKOptions } from "@ringcentral/sdk";
import {
  ringCentralContactCenterManifest,
  ringCentralContactCenterManifestInput,
} from "./manifest.js";

export { ringCentralContactCenterManifest } from "./manifest.js";

export type RingCentralJsonObject = Record<string, unknown>;

export type RingCentralSdkPlatform = Pick<ReturnType<SDK["platform"]>, "auth" | "get" | "post">;

export interface RingCentralSdkClient {
  platform(): RingCentralSdkPlatform;
}

export interface RingCentralCreateHandoffInput {
  payload: unknown;
}

export interface RingCentralContactCenterClient {
  sdk: RingCentralSdkClient;
  createHandoff(input: RingCentralCreateHandoffInput): Promise<unknown>;
  readiness(): Promise<unknown>;
}

export interface RingCentralContactCenterCommonOptions {
  server?: string;
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  sdk?: RingCentralSdkClient;
  defaultHandoffPath?: string;
  readinessPath?: string;
}

export type RingCentralContactCenterClientOptions = RingCentralContactCenterCommonOptions & (
  | { sdk: RingCentralSdkClient; server?: string }
  | { sdk?: undefined; server: string }
);

export type RingCentralContactCenterIntegrationOptions =
  | (RingCentralContactCenterCommonOptions & {
    contactCenterClient: RingCentralContactCenterClient;
  })
  | (RingCentralContactCenterClientOptions & {
    contactCenterClient?: undefined;
  });

export type RingCentralContactCenterOptions = RingCentralContactCenterIntegrationOptions;

export function createRingCentralContactCenterClient(
  options: RingCentralContactCenterClientOptions,
): RingCentralContactCenterClient {
  const sdk = options.sdk ?? createRingCentralSdk(options);
  const platform = sdk.platform();
  const ensureAuthentication = createRingCentralSdkAuthenticationEnsurer(platform, options);

  return {
    sdk,
    async createHandoff(input) {
      await ensureAuthentication();
      const response = await platform.post(configuredPath(options.defaultHandoffPath, "RingCX handoff path"), input.payload);
      return readRingCentralSdkResponse(response);
    },
    async readiness() {
      await ensureAuthentication();
      const response = await platform.get(configuredPath(options.readinessPath, "RingCX readiness path"));
      return readRingCentralSdkResponse(response);
    },
  };
}

export function createRingCentralContactCenterOperationHandlers(options: RingCentralContactCenterIntegrationOptions) {
  const client = options.contactCenterClient
    ? options.contactCenterClient
    : createRingCentralContactCenterClient(options);

  return {
    "contact-center.handoff.request": (input: RingCentralCreateHandoffInput) => client.createHandoff(input),
    "contact-center.handoff.status.read": () => client.readiness(),
  } as const;
}

export const createRingCentralContactCenterIntegrationOperationHandlers =
  createRingCentralContactCenterOperationHandlers;

export function createRingCentralContactCenterIntegration(options: RingCentralContactCenterIntegrationOptions) {
  const client = options.contactCenterClient
    ? options.contactCenterClient
    : createRingCentralContactCenterClient(options);
  const integration = defineIntegration({
    manifest: ringCentralContactCenterManifestInput,
    operations: createRingCentralContactCenterOperationHandlers({
      ...options,
      contactCenterClient: client,
    }),
  });
  return {
    ...integration,
    contactCenterClient: client,
    credentialStatuses: () => ringCentralContactCenterCredentialStatuses(options),
    readiness: async () => ringCentralReadiness(client),
  };
}

export function ringCentralContactCenterCredentialStatuses(
  input: Pick<
    RingCentralContactCenterOptions,
    "accessToken" | "contactCenterClient" | "defaultHandoffPath" | "sdk" | "server"
  >,
) {
  const hasSdkClient = Boolean(input.contactCenterClient || input.sdk);

  return [
    {
      providerPackageId: ringCentralContactCenterManifest.id,
      requirementId: "ringcentral-api-base",
      state: input.server || hasSdkClient ? "configured" : "missing",
      message: input.server || hasSdkClient ? "RingCentral API base is configured." : "RingCentral API base URL is required.",
    },
    {
      providerPackageId: ringCentralContactCenterManifest.id,
      requirementId: "ringcentral-api-access",
      state: input.accessToken || hasSdkClient ? "configured" : "required",
      message: input.accessToken || hasSdkClient
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
  client: RingCentralContactCenterClient,
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

function createRingCentralSdk(options: RingCentralContactCenterClientOptions) {
  const server = configuredServer(options.server);
  return new SDK({
    server,
    ...(options.clientId ? { clientId: options.clientId } : {}),
    ...(options.clientSecret ? { clientSecret: options.clientSecret } : {}),
  } satisfies SDKOptions);
}

function createRingCentralSdkAuthenticationEnsurer(
  platform: RingCentralSdkPlatform,
  options: RingCentralContactCenterClientOptions,
) {
  let authenticationReady: Promise<void> | undefined;

  return () => {
    authenticationReady ??= configureRingCentralSdkAuthentication(platform, options).catch((error) => {
      authenticationReady = undefined;
      throw error;
    });
    return authenticationReady;
  };
}

async function configureRingCentralSdkAuthentication(
  platform: RingCentralSdkPlatform,
  options: RingCentralContactCenterClientOptions,
) {
  if (options.accessToken) {
    await platform.auth().setData({
      access_token: options.accessToken,
      token_type: "bearer",
    });
  }
}

function configuredPath(path: string | undefined, label: string) {
  if (!path) throw new Error(`${label} must be configured by the SDK app; no official default path is assumed.`);
  return path;
}

function configuredServer(server: string | undefined) {
  if (!server) throw new Error("RingCentral server is required when no SDK client is injected.");
  return server;
}

async function readRingCentralSdkResponse<T = unknown>(response: unknown): Promise<T> {
  if (isJsonResponse(response)) return response.json() as Promise<T>;
  return response as T;
}

function isJsonResponse(value: unknown): value is { json(): Promise<unknown> } {
  return typeof value === "object"
    && value !== null
    && "json" in value
    && typeof value.json === "function";
}
