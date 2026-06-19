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
export const AmazonFullApiSolicitationsOperationKeys = [
  "solicitations:getSolicitationActionsForOrder",
  "solicitations:createProductReviewAndSellerFeedbackSolicitation"
] as const;
export type AmazonFullApiSolicitationsOperationKey = typeof AmazonFullApiSolicitationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiSolicitationsOperationPathParamMap {
  "solicitations:getSolicitationActionsForOrder": { "amazonOrderId": AmazonFullApiPathParamValue };
  "solicitations:createProductReviewAndSellerFeedbackSolicitation": { "amazonOrderId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiSolicitationsOperationRequestMap {
  "solicitations:getSolicitationActionsForOrder": AmazonFullApiOperationInput<"solicitations:getSolicitationActionsForOrder">;
  "solicitations:createProductReviewAndSellerFeedbackSolicitation": AmazonFullApiOperationInput<"solicitations:createProductReviewAndSellerFeedbackSolicitation">;
}

export interface AmazonFullApiSolicitationsGeneratedClient {
  GetSolicitationActionsForOrder(...args: AmazonFullApiOperationArgs<"solicitations:getSolicitationActionsForOrder">): Promise<AmazonFullApiOperationResponseMap["solicitations:getSolicitationActionsForOrder"]>;
  CreateProductReviewAndSellerFeedbackSolicitation(...args: AmazonFullApiOperationArgs<"solicitations:createProductReviewAndSellerFeedbackSolicitation">): Promise<AmazonFullApiOperationResponseMap["solicitations:createProductReviewAndSellerFeedbackSolicitation"]>;
}

export const AmazonFullApiSolicitationsGeneratedFunctionNames = [
  "GetSolicitationActionsForOrder",
  "CreateProductReviewAndSellerFeedbackSolicitation"
] as const satisfies readonly (keyof AmazonFullApiSolicitationsGeneratedClient)[];

export function createAmazonFullApiSolicitationsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiSolicitationsGeneratedClient {
  return {
    GetSolicitationActionsForOrder: (...args) => callOperation("solicitations:getSolicitationActionsForOrder", ...(args as AmazonFullApiOperationArgs<"solicitations:getSolicitationActionsForOrder">)),
    CreateProductReviewAndSellerFeedbackSolicitation: (...args) => callOperation("solicitations:createProductReviewAndSellerFeedbackSolicitation", ...(args as AmazonFullApiOperationArgs<"solicitations:createProductReviewAndSellerFeedbackSolicitation">)),
  };
}
