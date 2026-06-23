import {
  defineIntegration,
  type IntegrationOperationContext,
  type IntegrationOperationHandler,
} from "@cognidesk/integration-kit";
import { createEbayMarketplaceClient } from "./client.js";
import type { EbayMarketplaceClient, EbayMarketplaceClientOptions } from "./contracts.js";
import {
  ebayMarketplaceOperationAlias,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiOperationCatalog,
} from "./catalog.js";

export interface EbayMarketplaceOperationInput {
  client?: EbayMarketplaceClient;
  args?: unknown[];
}

function clientFor(
  input: EbayMarketplaceOperationInput,
  credentials: EbayMarketplaceClientOptions | undefined,
): EbayMarketplaceClient {
  if (input.client) return input.client;
  if (!credentials) {
    throw new Error("eBay marketplace operation credentials are required when no client is provided.");
  }
  return createEbayMarketplaceClient(credentials);
}

function credentialsFor(
  context: IntegrationOperationContext<unknown>,
): EbayMarketplaceClientOptions | undefined {
  return context.credentials as EbayMarketplaceClientOptions | undefined;
}

const ebayMarketplaceOperations: Record<
  string,
  IntegrationOperationHandler<unknown, unknown, unknown>
> = Object.fromEntries(
  ebaySelectedApiOperationCatalog.map((operation) => [
    ebayMarketplaceOperationAlias(operation.functionName),
    async (input, context) => {
      const operationInput = isOperationInput(input) ? input : {};
      const client = clientFor(operationInput, credentialsFor(context));
      const method = client[operation.functionName] as unknown;
      if (typeof method !== "function") {
        throw new Error(`eBay marketplace client does not implement operation '${operation.functionName}'.`);
      }
      return (method as (...args: unknown[]) => Promise<unknown>).apply(client, operationInput.args ?? []);
    },
  ]),
);

export const ebayMarketplaceIntegration = defineIntegration({
  manifest: ebayMarketplaceProviderManifest,
  operations: ebayMarketplaceOperations,
});

function isOperationInput(value: unknown): value is EbayMarketplaceOperationInput {
  return typeof value === "object" && value !== null;
}
