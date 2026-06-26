import {
  defineIntegration,
  IntegrationError,
  type IntegrationOperationContext,
  type IntegrationOperationHandler,
} from "@cognidesk/integration-kit";
import {
  ebayMarketplaceOperationAlias,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiOperationCatalog,
} from "./catalog.js";
import { createEbayMarketplaceClient } from "./client.js";
import type {
  EbayMarketplaceClient,
  EbayMarketplaceClientOptions,
  EbayMarketplaceProviderClient,
} from "./contracts.js";

export interface EbayMarketplaceOperationInput {
  client?: EbayMarketplaceClient;
  providerClient?: EbayMarketplaceProviderClient;
  args?: unknown[];
}

export interface EbayMarketplaceIntegrationOptions extends EbayMarketplaceClientOptions {
  client?: EbayMarketplaceClient;
}

type EbayMarketplaceOperationAlias = (typeof ebayMarketplaceProviderManifest.operations)[number]["alias"];
type EbayMarketplaceOperations = {
  [Alias in EbayMarketplaceOperationAlias]: IntegrationOperationHandler<unknown, unknown, unknown>;
};

export function createEbayMarketplaceIntegrationOperationHandlers(
  options: EbayMarketplaceIntegrationOptions = {},
): EbayMarketplaceOperations {
  const configuredClient = options.client ?? createEbayMarketplaceClient(options);
  return Object.fromEntries(
    ebaySelectedApiOperationCatalog.map((operation) => [
      ebayMarketplaceOperationAlias(operation.functionName),
      async (input, context) => {
        const operationInput = isOperationInput(input) ? input : {};
        const client = clientFor(operationInput, context, configuredClient);
        const method = client[operation.functionName] as unknown;
        if (typeof method !== "function") {
          throw new IntegrationError(
            "contract-violation",
            `eBay marketplace client does not implement operation '${operation.functionName}'.`,
            {
              providerPackageId: context.providerPackageId ?? ebayMarketplaceProviderManifest.id,
              provider: context.provider ?? ebayMarketplaceProviderManifest.provider,
              operationAlias: context.operationAlias ?? ebayMarketplaceOperationAlias(operation.functionName),
              details: {
                functionName: operation.functionName,
                clientInterface: "EbayMarketplaceClient",
              },
            },
          );
        }
        return (method as (...args: unknown[]) => Promise<unknown>).apply(client, operationInput.args ?? []);
      },
    ]),
  ) as EbayMarketplaceOperations;
}

export function createEbayMarketplaceIntegration(options: EbayMarketplaceIntegrationOptions = {}) {
  return defineIntegration({
    manifest: ebayMarketplaceProviderManifest,
    operations: createEbayMarketplaceIntegrationOperationHandlers(options),
    credentials: options,
    metadata: {
      implementationStrategy: "provider-owned-utility-sdks-plus-selected-rest-adapter",
      providerClientAccess: "createEbayMarketplaceClient({ providerClient })",
      defaultClientPolicy: "built-in-rest-with-oauth-tokens-fail-closed",
    },
  });
}

export const ebayMarketplaceIntegration = createEbayMarketplaceIntegration();

function clientFor(
  input: EbayMarketplaceOperationInput,
  context: IntegrationOperationContext<unknown>,
  configuredClient: EbayMarketplaceClient,
): EbayMarketplaceClient {
  if (input.client) return input.client;
  if (input.providerClient) return createEbayMarketplaceClient({ providerClient: input.providerClient });
  const credentialOptions = credentialsFor(context);
  if (credentialOptions?.providerClient) return createEbayMarketplaceClient(credentialOptions);
  return configuredClient;
}

function credentialsFor(
  context: IntegrationOperationContext<unknown>,
): EbayMarketplaceClientOptions | undefined {
  return context.credentials as EbayMarketplaceClientOptions | undefined;
}

function isOperationInput(value: unknown): value is EbayMarketplaceOperationInput {
  return typeof value === "object" && value !== null;
}
