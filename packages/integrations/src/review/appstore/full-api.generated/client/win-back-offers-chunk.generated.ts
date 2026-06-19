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
export const AppStoreFullApiWinBackOffersOperationKeys = [
  "winBackOffers_createInstance",
  "winBackOffers_deleteInstance",
  "winBackOffers_getInstance",
  "winBackOffers_prices_getToManyRelated",
  "winBackOffers_prices_getToManyRelationship",
  "winBackOffers_updateInstance"
] as const;
export type AppStoreFullApiWinBackOffersOperationKey = typeof AppStoreFullApiWinBackOffersOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiWinBackOffersOperationPathParamMap {
  "winBackOffers_createInstance": {};
  "winBackOffers_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "winBackOffers_getInstance": { "id": AppStoreFullApiPathParamValue };
  "winBackOffers_prices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "winBackOffers_prices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "winBackOffers_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiWinBackOffersOperationRequestMap {
  "winBackOffers_createInstance": AppStoreFullApiOperationInput<"winBackOffers_createInstance">;
  "winBackOffers_deleteInstance": AppStoreFullApiOperationInput<"winBackOffers_deleteInstance">;
  "winBackOffers_getInstance": AppStoreFullApiOperationInput<"winBackOffers_getInstance">;
  "winBackOffers_prices_getToManyRelated": AppStoreFullApiOperationInput<"winBackOffers_prices_getToManyRelated">;
  "winBackOffers_prices_getToManyRelationship": AppStoreFullApiOperationInput<"winBackOffers_prices_getToManyRelationship">;
  "winBackOffers_updateInstance": AppStoreFullApiOperationInput<"winBackOffers_updateInstance">;
}

export interface AppStoreFullApiWinBackOffersGeneratedClient {
  WinBackOffersCreateInstance(...args: AppStoreFullApiOperationArgs<"winBackOffers_createInstance">): Promise<AppStoreFullApiOperationResponseMap["winBackOffers_createInstance"]>;
  WinBackOffersDeleteInstance(...args: AppStoreFullApiOperationArgs<"winBackOffers_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["winBackOffers_deleteInstance"]>;
  WinBackOffersGetInstance(...args: AppStoreFullApiOperationArgs<"winBackOffers_getInstance">): Promise<AppStoreFullApiOperationResponseMap["winBackOffers_getInstance"]>;
  WinBackOffersPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"winBackOffers_prices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["winBackOffers_prices_getToManyRelated"]>;
  WinBackOffersPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"winBackOffers_prices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["winBackOffers_prices_getToManyRelationship"]>;
  WinBackOffersUpdateInstance(...args: AppStoreFullApiOperationArgs<"winBackOffers_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["winBackOffers_updateInstance"]>;
}

export const AppStoreFullApiWinBackOffersGeneratedFunctionNames = [
  "WinBackOffersCreateInstance",
  "WinBackOffersDeleteInstance",
  "WinBackOffersGetInstance",
  "WinBackOffersPricesGetToManyRelated",
  "WinBackOffersPricesGetToManyRelationship",
  "WinBackOffersUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiWinBackOffersGeneratedClient)[];

export function createAppStoreFullApiWinBackOffersGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiWinBackOffersGeneratedClient {
  return {
    WinBackOffersCreateInstance: (...args) => callOperation("winBackOffers_createInstance", ...(args as AppStoreFullApiOperationArgs<"winBackOffers_createInstance">)),
    WinBackOffersDeleteInstance: (...args) => callOperation("winBackOffers_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"winBackOffers_deleteInstance">)),
    WinBackOffersGetInstance: (...args) => callOperation("winBackOffers_getInstance", ...(args as AppStoreFullApiOperationArgs<"winBackOffers_getInstance">)),
    WinBackOffersPricesGetToManyRelated: (...args) => callOperation("winBackOffers_prices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"winBackOffers_prices_getToManyRelated">)),
    WinBackOffersPricesGetToManyRelationship: (...args) => callOperation("winBackOffers_prices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"winBackOffers_prices_getToManyRelationship">)),
    WinBackOffersUpdateInstance: (...args) => callOperation("winBackOffers_updateInstance", ...(args as AppStoreFullApiOperationArgs<"winBackOffers_updateInstance">)),
  };
}
