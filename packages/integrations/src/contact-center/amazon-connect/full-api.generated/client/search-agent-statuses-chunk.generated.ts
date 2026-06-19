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
export const AmazonConnectFullApiSearchAgentStatusesOperationKeys = [
  "connect:SearchAgentStatuses"
] as const;
export type AmazonConnectFullApiSearchAgentStatusesOperationKey = typeof AmazonConnectFullApiSearchAgentStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchAgentStatusesOperationPathParamMap {
  "connect:SearchAgentStatuses": {};
}

export interface AmazonConnectFullApiSearchAgentStatusesOperationRequestMap {
  "connect:SearchAgentStatuses": AmazonConnectFullApiOperationInput<"connect:SearchAgentStatuses">;
}

export interface AmazonConnectFullApiSearchAgentStatusesGeneratedClient {
  SearchAgentStatuses(...args: AmazonConnectFullApiOperationArgs<"connect:SearchAgentStatuses">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchAgentStatuses"]>;
}

export const AmazonConnectFullApiSearchAgentStatusesGeneratedFunctionNames = [
  "SearchAgentStatuses"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchAgentStatusesGeneratedClient)[];

export function createAmazonConnectFullApiSearchAgentStatusesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchAgentStatusesGeneratedClient {
  return {
    SearchAgentStatuses: (...args) => callOperation("connect:SearchAgentStatuses", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchAgentStatuses">)),
  };
}
