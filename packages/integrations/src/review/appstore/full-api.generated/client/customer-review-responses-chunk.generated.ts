// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiCustomerReviewResponsesOperationKeys = [
  "customerReviewResponses_createInstance",
  "customerReviewResponses_deleteInstance",
  "customerReviewResponses_getInstance"
] as const;
export type AppStoreFullApiCustomerReviewResponsesOperationKey = typeof AppStoreFullApiCustomerReviewResponsesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCustomerReviewResponsesOperationPathParamMap {
  "customerReviewResponses_createInstance": {};
  "customerReviewResponses_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "customerReviewResponses_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCustomerReviewResponsesOperationRequestMap {
  "customerReviewResponses_createInstance": AppStoreFullApiOperationInput<"customerReviewResponses_createInstance">;
  "customerReviewResponses_deleteInstance": AppStoreFullApiOperationInput<"customerReviewResponses_deleteInstance">;
  "customerReviewResponses_getInstance": AppStoreFullApiOperationInput<"customerReviewResponses_getInstance">;
}

export interface AppStoreFullApiCustomerReviewResponsesGeneratedClient {
  CustomerReviewResponsesCreateInstance(...args: AppStoreFullApiOperationArgs<"customerReviewResponses_createInstance">): Promise<AppStoreFullApiOperationResponseMap["customerReviewResponses_createInstance"]>;
  CustomerReviewResponsesDeleteInstance(...args: AppStoreFullApiOperationArgs<"customerReviewResponses_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["customerReviewResponses_deleteInstance"]>;
  CustomerReviewResponsesGetInstance(...args: AppStoreFullApiOperationArgs<"customerReviewResponses_getInstance">): Promise<AppStoreFullApiOperationResponseMap["customerReviewResponses_getInstance"]>;
}

export const AppStoreFullApiCustomerReviewResponsesGeneratedFunctionNames = [
  "CustomerReviewResponsesCreateInstance",
  "CustomerReviewResponsesDeleteInstance",
  "CustomerReviewResponsesGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiCustomerReviewResponsesGeneratedClient)[];

export function createAppStoreFullApiCustomerReviewResponsesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCustomerReviewResponsesGeneratedClient {
  return {
    CustomerReviewResponsesCreateInstance: (...args) => callOperation("customerReviewResponses_createInstance", ...(args as AppStoreFullApiOperationArgs<"customerReviewResponses_createInstance">)),
    CustomerReviewResponsesDeleteInstance: (...args) => callOperation("customerReviewResponses_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"customerReviewResponses_deleteInstance">)),
    CustomerReviewResponsesGetInstance: (...args) => callOperation("customerReviewResponses_getInstance", ...(args as AppStoreFullApiOperationArgs<"customerReviewResponses_getInstance">)),
  };
}
