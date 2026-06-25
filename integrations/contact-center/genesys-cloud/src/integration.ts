import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import {
  createGenesysCloudContactCenterClient,
} from "./client.js";
import type {
  GenesysCloudContactCenterClient,
  GenesysCloudContactCenterOptions,
  GenesysCloudCreateCallbackInput,
  GenesysCloudCreateOpenMessageInput,
  GenesysCloudGetConversationInput,
  GenesysCloudHandoffInput,
  GenesysCloudListQueuesInput,
} from "./contracts.js";
import {
  genesysCloudContactCenterManifest,
  genesysCloudContactCenterManifestInput,
} from "./manifest.js";

export interface GenesysCloudContactCenterIntegrationOptions extends GenesysCloudContactCenterOptions {
  contactCenterClient?: GenesysCloudContactCenterClient;
}

export async function createGenesysCloudContactCenterOperationHandlers(
  options: GenesysCloudContactCenterIntegrationOptions,
) {
  const client = options.contactCenterClient ?? await createGenesysCloudContactCenterClient(options);
  return createGenesysCloudContactCenterOperationHandlersForClient(client);
}

export async function createGenesysCloudContactCenterIntegration(
  options: GenesysCloudContactCenterIntegrationOptions,
) {
  const client = options.contactCenterClient ?? await createGenesysCloudContactCenterClient(options);
  const integration = defineIntegration({
    manifest: genesysCloudContactCenterManifestInput,
    operations: createGenesysCloudContactCenterOperationHandlersForClient(client),
  });
  return {
    ...integration,
    sdkClient: client.sdkClient,
    contactCenterClient: client,
    credentialStatuses: () => genesysCloudContactCenterCredentialStatuses({
      ...options,
      sdkClient: options.sdkClient ?? client.sdkClient,
      contactCenterClient: options.contactCenterClient,
    }),
    readiness: async () => genesysCloudReadiness(client),
  };
}

export function genesysCloudContactCenterCredentialStatuses(
  input: Pick<GenesysCloudContactCenterOptions, "apiBaseUrl" | "accessToken" | "sdkClient"> & {
    contactCenterClient?: GenesysCloudContactCenterClient | undefined;
  },
) {
  const hasConfiguredClient = Boolean(input.contactCenterClient) || Boolean(input.sdkClient);
  return [
    {
      providerPackageId: genesysCloudContactCenterManifest.id,
      requirementId: "genesys-cloud-region",
      state: input.apiBaseUrl || hasConfiguredClient ? "configured" : "missing",
      message: input.apiBaseUrl || hasConfiguredClient
        ? "Genesys Cloud SDK environment is configured."
        : "Genesys Cloud API base URL is required.",
    },
    {
      providerPackageId: genesysCloudContactCenterManifest.id,
      requirementId: "genesys-cloud-api-access",
      state: input.accessToken || hasConfiguredClient ? "configured" : "missing",
      message: input.accessToken || hasConfiguredClient
        ? "Genesys Cloud OAuth access is configured."
        : "Genesys Cloud OAuth access is required.",
    },
    {
      providerPackageId: genesysCloudContactCenterManifest.id,
      requirementId: "genesys-cloud-routing",
      state: "not-required",
      message: "Genesys Cloud handoff routing is handled by SDK callback or Open Messaging operations.",
    },
  ];
}

function createGenesysCloudContactCenterOperationHandlersForClient(
  client: GenesysCloudContactCenterClient,
) {
  return {
    "contact-center.handoff.request": (
      input: GenesysCloudHandoffInput,
      _context: IntegrationOperationContext,
    ) => client.createHandoff(input),
    "contact-center.callback.schedule": (
      input: GenesysCloudCreateCallbackInput,
      _context: IntegrationOperationContext,
    ) => client.createCallback(input),
    "contact-center.contact.read": (
      input: GenesysCloudGetConversationInput,
      _context: IntegrationOperationContext,
    ) => client.getConversation(input),
    "contact-center.queue.list": (
      input: GenesysCloudListQueuesInput = {},
      _context: IntegrationOperationContext,
    ) => client.listQueues(input),
    "genesys-cloud.openMessaging.message.create": (
      input: GenesysCloudCreateOpenMessageInput,
      _context: IntegrationOperationContext,
    ) => client.createOpenMessage(input),
  } as const;
}

async function genesysCloudReadiness(
  client: GenesysCloudContactCenterClient,
) {
  try {
    await client.readiness();
    return {
      providerPackageId: genesysCloudContactCenterManifest.id,
      status: "ready",
      live: true,
      checkSource: "UsersApi.getUsersMe",
    };
  } catch (error) {
    return {
      providerPackageId: genesysCloudContactCenterManifest.id,
      status: "blocked",
      live: true,
      checkSource: "UsersApi.getUsersMe",
      blockers: [{
        code: "genesys-cloud-readiness-failed",
        message: error instanceof Error ? error.message : "Genesys Cloud readiness failed.",
        kind: "permission-blocked",
      }],
    };
  }
}

export const createGenesysCloudIntegrationOperationHandlers = createGenesysCloudContactCenterOperationHandlers;
