import {
  defineIntegration,
  type IntegrationOperationContext,
  type IntegrationOperationHandler,
} from "@cognidesk/integration-kit";
import { createAmazonMarketplaceClient } from "./client.js";
import type { AmazonMarketplaceClient, AmazonMarketplaceClientOptions, ParseAmazonNotificationOptions } from "./contracts.js";
import { amazonMarketplaceOperationAliases, amazonMarketplaceProviderManifest } from "./manifest.js";
import { parseAmazonMarketplaceNotificationWebhook } from "./notifications/webhooks.js";

export type AmazonMarketplaceOperationCredentials = AmazonMarketplaceClientOptions;

export interface AmazonMarketplaceOperationInput {
  client?: AmazonMarketplaceClient;
  [key: string]: unknown;
}

function clientFor(
  input: AmazonMarketplaceOperationInput,
  credentials: AmazonMarketplaceOperationCredentials | undefined,
): AmazonMarketplaceClient {
  if (input.client) return input.client;
  if (!credentials) {
    throw new Error("Amazon marketplace operation credentials are required when no client is provided.");
  }
  return createAmazonMarketplaceClient(credentials);
}

function amazonInput(input: unknown): AmazonMarketplaceOperationInput {
  return isRecord(input) ? input as AmazonMarketplaceOperationInput : {};
}

function credentialsFor(
  context: IntegrationOperationContext<unknown>,
): AmazonMarketplaceOperationCredentials | undefined {
  return context.credentials as AmazonMarketplaceOperationCredentials | undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readRequiredString(input: unknown, key: string): string {
  const value = isRecord(input) ? input[key] : undefined;
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Amazon marketplace operation requires '${key}'.`);
  }
  return value;
}

function readStringArray(input: unknown, key: string): string[] | undefined {
  const value = isRecord(input) ? input[key] : undefined;
  return Array.isArray(value) && value.every((item) => typeof item === "string") ? value : undefined;
}

const amazonMarketplaceOperations: Record<
  string,
  IntegrationOperationHandler<unknown, unknown, unknown>
> = {
    [amazonMarketplaceOperationAliases.refreshAccessToken]: async (input, context) =>
      clientFor(amazonInput(input), credentialsFor(context)).refreshAccessToken(),
    [amazonMarketplaceOperationAliases.createRestrictedDataToken]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).createRestrictedDataToken(input as Parameters<AmazonMarketplaceClient["createRestrictedDataToken"]>[0]),
    [amazonMarketplaceOperationAliases.getOrders]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getOrders(isRecord(input) ? input : undefined),
    [amazonMarketplaceOperationAliases.getOrder]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getOrder(readRequiredString(input, "amazonOrderId")),
    [amazonMarketplaceOperationAliases.getOrderBuyerInfo]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getOrderBuyerInfo(readRequiredString(input, "amazonOrderId")),
    [amazonMarketplaceOperationAliases.getOrderItems]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getOrderItems(readRequiredString(input, "amazonOrderId"), amazonInput(input) as { nextToken?: string }),
    [amazonMarketplaceOperationAliases.getOrderItemsBuyerInfo]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getOrderItemsBuyerInfo(readRequiredString(input, "amazonOrderId"), amazonInput(input) as { nextToken?: string }),
    [amazonMarketplaceOperationAliases.searchOrdersV2026]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).searchOrdersV2026(isRecord(input) ? input : undefined),
    [amazonMarketplaceOperationAliases.getOrderV2026]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getOrderV2026(readRequiredString(input, "amazonOrderId"), amazonInput(input) as { includedData?: string[] }),
    [amazonMarketplaceOperationAliases.getSolicitationActionsForOrder]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getSolicitationActionsForOrder(readRequiredString(input, "amazonOrderId"), readStringArray(input, "marketplaceIds")),
    [amazonMarketplaceOperationAliases.createProductReviewAndSellerFeedbackSolicitation]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).createProductReviewAndSellerFeedbackSolicitation(readRequiredString(input, "amazonOrderId"), readStringArray(input, "marketplaceIds")),
    [amazonMarketplaceOperationAliases.getMarketplaceParticipations]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getMarketplaceParticipations(),
    [amazonMarketplaceOperationAliases.getDestinations]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getDestinations(),
    [amazonMarketplaceOperationAliases.getDestination]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getDestination(readRequiredString(input, "destinationId")),
    [amazonMarketplaceOperationAliases.createSubscription]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).createSubscription(input as Parameters<AmazonMarketplaceClient["createSubscription"]>[0]),
    [amazonMarketplaceOperationAliases.getSubscription]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).getSubscription(input as Parameters<AmazonMarketplaceClient["getSubscription"]>[0]),
    [amazonMarketplaceOperationAliases.deleteSubscription]: async (
      input,
      context,
    ) => clientFor(amazonInput(input), credentialsFor(context)).deleteSubscription(input as Parameters<AmazonMarketplaceClient["deleteSubscription"]>[0]),
    [amazonMarketplaceOperationAliases.parseNotificationWebhook]: async (
      input,
    ) => {
      if (!isRecord(input) || !(input.request instanceof Request)) {
        throw new Error("Amazon notification webhook parsing requires a Request input.");
      }
      return parseAmazonMarketplaceNotificationWebhook(
        input.request,
        input.options as ParseAmazonNotificationOptions | undefined,
      );
    },
};

export const amazonMarketplaceIntegration = defineIntegration({
  manifest: amazonMarketplaceProviderManifest,
  operations: amazonMarketplaceOperations,
});
