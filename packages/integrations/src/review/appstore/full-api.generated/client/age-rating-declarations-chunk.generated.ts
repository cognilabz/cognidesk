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
export const AppStoreFullApiAgeRatingDeclarationsOperationKeys = [
  "ageRatingDeclarations_updateInstance"
] as const;
export type AppStoreFullApiAgeRatingDeclarationsOperationKey = typeof AppStoreFullApiAgeRatingDeclarationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAgeRatingDeclarationsOperationPathParamMap {
  "ageRatingDeclarations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAgeRatingDeclarationsOperationRequestMap {
  "ageRatingDeclarations_updateInstance": AppStoreFullApiOperationInput<"ageRatingDeclarations_updateInstance">;
}

export interface AppStoreFullApiAgeRatingDeclarationsGeneratedClient {
  AgeRatingDeclarationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"ageRatingDeclarations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["ageRatingDeclarations_updateInstance"]>;
}

export const AppStoreFullApiAgeRatingDeclarationsGeneratedFunctionNames = [
  "AgeRatingDeclarationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAgeRatingDeclarationsGeneratedClient)[];

export function createAppStoreFullApiAgeRatingDeclarationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAgeRatingDeclarationsGeneratedClient {
  return {
    AgeRatingDeclarationsUpdateInstance: (...args) => callOperation("ageRatingDeclarations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"ageRatingDeclarations_updateInstance">)),
  };
}
