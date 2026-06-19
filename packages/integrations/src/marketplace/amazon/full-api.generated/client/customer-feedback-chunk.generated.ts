// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiCustomerFeedbackOperationKeys = [
  "customerFeedback_2024-06-01:getItemReviewTopics",
  "customerFeedback_2024-06-01:getItemBrowseNode",
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics",
  "customerFeedback_2024-06-01:getItemReviewTrends",
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends",
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics",
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends"
] as const;
export type AmazonFullApiCustomerFeedbackOperationKey = typeof AmazonFullApiCustomerFeedbackOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiCustomerFeedbackOperationPathParamMap {
  "customerFeedback_2024-06-01:getItemReviewTopics": { "asin": AmazonFullApiPathParamValue };
  "customerFeedback_2024-06-01:getItemBrowseNode": { "asin": AmazonFullApiPathParamValue };
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics": { "browseNodeId": AmazonFullApiPathParamValue };
  "customerFeedback_2024-06-01:getItemReviewTrends": { "asin": AmazonFullApiPathParamValue };
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends": { "browseNodeId": AmazonFullApiPathParamValue };
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics": { "browseNodeId": AmazonFullApiPathParamValue };
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends": { "browseNodeId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiCustomerFeedbackOperationRequestMap {
  "customerFeedback_2024-06-01:getItemReviewTopics": AmazonFullApiOperationInput<"customerFeedback_2024-06-01:getItemReviewTopics">;
  "customerFeedback_2024-06-01:getItemBrowseNode": AmazonFullApiOperationInput<"customerFeedback_2024-06-01:getItemBrowseNode">;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics": AmazonFullApiOperationInput<"customerFeedback_2024-06-01:getBrowseNodeReviewTopics">;
  "customerFeedback_2024-06-01:getItemReviewTrends": AmazonFullApiOperationInput<"customerFeedback_2024-06-01:getItemReviewTrends">;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends": AmazonFullApiOperationInput<"customerFeedback_2024-06-01:getBrowseNodeReviewTrends">;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics": AmazonFullApiOperationInput<"customerFeedback_2024-06-01:getBrowseNodeReturnTopics">;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends": AmazonFullApiOperationInput<"customerFeedback_2024-06-01:getBrowseNodeReturnTrends">;
}

export interface AmazonFullApiCustomerFeedbackGeneratedClient {
  GetItemReviewTopics(...args: AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getItemReviewTopics">): Promise<AmazonFullApiOperationResponseMap["customerFeedback_2024-06-01:getItemReviewTopics"]>;
  GetItemBrowseNode(...args: AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getItemBrowseNode">): Promise<AmazonFullApiOperationResponseMap["customerFeedback_2024-06-01:getItemBrowseNode"]>;
  GetBrowseNodeReviewTopics(...args: AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReviewTopics">): Promise<AmazonFullApiOperationResponseMap["customerFeedback_2024-06-01:getBrowseNodeReviewTopics"]>;
  GetItemReviewTrends(...args: AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getItemReviewTrends">): Promise<AmazonFullApiOperationResponseMap["customerFeedback_2024-06-01:getItemReviewTrends"]>;
  GetBrowseNodeReviewTrends(...args: AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReviewTrends">): Promise<AmazonFullApiOperationResponseMap["customerFeedback_2024-06-01:getBrowseNodeReviewTrends"]>;
  GetBrowseNodeReturnTopics(...args: AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReturnTopics">): Promise<AmazonFullApiOperationResponseMap["customerFeedback_2024-06-01:getBrowseNodeReturnTopics"]>;
  GetBrowseNodeReturnTrends(...args: AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReturnTrends">): Promise<AmazonFullApiOperationResponseMap["customerFeedback_2024-06-01:getBrowseNodeReturnTrends"]>;
}

export const AmazonFullApiCustomerFeedbackGeneratedFunctionNames = [
  "GetItemReviewTopics",
  "GetItemBrowseNode",
  "GetBrowseNodeReviewTopics",
  "GetItemReviewTrends",
  "GetBrowseNodeReviewTrends",
  "GetBrowseNodeReturnTopics",
  "GetBrowseNodeReturnTrends"
] as const satisfies readonly (keyof AmazonFullApiCustomerFeedbackGeneratedClient)[];

export function createAmazonFullApiCustomerFeedbackGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiCustomerFeedbackGeneratedClient {
  return {
    GetItemReviewTopics: (...args) => callOperation("customerFeedback_2024-06-01:getItemReviewTopics", ...(args as AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getItemReviewTopics">)),
    GetItemBrowseNode: (...args) => callOperation("customerFeedback_2024-06-01:getItemBrowseNode", ...(args as AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getItemBrowseNode">)),
    GetBrowseNodeReviewTopics: (...args) => callOperation("customerFeedback_2024-06-01:getBrowseNodeReviewTopics", ...(args as AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReviewTopics">)),
    GetItemReviewTrends: (...args) => callOperation("customerFeedback_2024-06-01:getItemReviewTrends", ...(args as AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getItemReviewTrends">)),
    GetBrowseNodeReviewTrends: (...args) => callOperation("customerFeedback_2024-06-01:getBrowseNodeReviewTrends", ...(args as AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReviewTrends">)),
    GetBrowseNodeReturnTopics: (...args) => callOperation("customerFeedback_2024-06-01:getBrowseNodeReturnTopics", ...(args as AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReturnTopics">)),
    GetBrowseNodeReturnTrends: (...args) => callOperation("customerFeedback_2024-06-01:getBrowseNodeReturnTrends", ...(args as AmazonFullApiOperationArgs<"customerFeedback_2024-06-01:getBrowseNodeReturnTrends">)),
  };
}
