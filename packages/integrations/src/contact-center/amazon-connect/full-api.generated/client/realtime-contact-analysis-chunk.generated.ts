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
export const AmazonConnectFullApiRealtimeContactAnalysisOperationKeys = [
  "connect-contact-lens:ListRealtimeContactAnalysisSegments"
] as const;
export type AmazonConnectFullApiRealtimeContactAnalysisOperationKey = typeof AmazonConnectFullApiRealtimeContactAnalysisOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiRealtimeContactAnalysisOperationPathParamMap {
  "connect-contact-lens:ListRealtimeContactAnalysisSegments": {};
}

export interface AmazonConnectFullApiRealtimeContactAnalysisOperationRequestMap {
  "connect-contact-lens:ListRealtimeContactAnalysisSegments": AmazonConnectFullApiOperationInput<"connect-contact-lens:ListRealtimeContactAnalysisSegments">;
}

export interface AmazonConnectFullApiRealtimeContactAnalysisGeneratedClient {
  ListRealtimeContactAnalysisSegments(...args: AmazonConnectFullApiOperationArgs<"connect-contact-lens:ListRealtimeContactAnalysisSegments">): Promise<AmazonConnectFullApiOperationResponseMap["connect-contact-lens:ListRealtimeContactAnalysisSegments"]>;
}

export const AmazonConnectFullApiRealtimeContactAnalysisGeneratedFunctionNames = [
  "ListRealtimeContactAnalysisSegments"
] as const satisfies readonly (keyof AmazonConnectFullApiRealtimeContactAnalysisGeneratedClient)[];

export function createAmazonConnectFullApiRealtimeContactAnalysisGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiRealtimeContactAnalysisGeneratedClient {
  return {
    ListRealtimeContactAnalysisSegments: (...args) => callOperation("connect-contact-lens:ListRealtimeContactAnalysisSegments", ...(args as AmazonConnectFullApiOperationArgs<"connect-contact-lens:ListRealtimeContactAnalysisSegments">)),
  };
}
