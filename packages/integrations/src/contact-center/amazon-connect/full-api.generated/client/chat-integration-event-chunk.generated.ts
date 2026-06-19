// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiChatIntegrationEventOperationKeys = [
  "connect:SendChatIntegrationEvent"
] as const;
export type AmazonConnectFullApiChatIntegrationEventOperationKey = typeof AmazonConnectFullApiChatIntegrationEventOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiChatIntegrationEventOperationPathParamMap {
  "connect:SendChatIntegrationEvent": {};
}

export interface AmazonConnectFullApiChatIntegrationEventOperationRequestMap {
  "connect:SendChatIntegrationEvent": AmazonConnectFullApiOperationInput<"connect:SendChatIntegrationEvent">;
}

export interface AmazonConnectFullApiChatIntegrationEventGeneratedClient {
  SendChatIntegrationEvent(...args: AmazonConnectFullApiOperationArgs<"connect:SendChatIntegrationEvent">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SendChatIntegrationEvent"]>;
}

export const AmazonConnectFullApiChatIntegrationEventGeneratedFunctionNames = [
  "SendChatIntegrationEvent"
] as const satisfies readonly (keyof AmazonConnectFullApiChatIntegrationEventGeneratedClient)[];

export function createAmazonConnectFullApiChatIntegrationEventGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiChatIntegrationEventGeneratedClient {
  return {
    SendChatIntegrationEvent: (...args) => callOperation("connect:SendChatIntegrationEvent", ...(args as AmazonConnectFullApiOperationArgs<"connect:SendChatIntegrationEvent">)),
  };
}
