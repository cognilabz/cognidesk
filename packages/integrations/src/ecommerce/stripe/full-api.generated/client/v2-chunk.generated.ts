// Generated endpoint chunk for StripeFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  StripeGeneratedOperationCaller,
  StripeFullApiOperationArgs,
  StripeFullApiOperationInput,
  StripeFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { StripeFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const StripeFullApiV2OperationKeys = [
  "DeleteV2CoreAccountsAccountIdPersonsId",
  "DeleteV2CoreEventDestinationsId",
  "GetV2CommerceProductCatalogImports",
  "GetV2CommerceProductCatalogImportsId",
  "GetV2CoreAccounts",
  "GetV2CoreAccountsAccountIdPersons",
  "GetV2CoreAccountsAccountIdPersonsId",
  "GetV2CoreAccountsAccountIdPersonTokensId",
  "GetV2CoreAccountsId",
  "GetV2CoreAccountTokensId",
  "GetV2CoreEventDestinations",
  "GetV2CoreEventDestinationsId",
  "GetV2CoreEvents",
  "GetV2CoreEventsId",
  "PostV2BillingMeterEventAdjustments",
  "PostV2BillingMeterEvents",
  "PostV2BillingMeterEventSession",
  "PostV2BillingMeterEventStream",
  "PostV2CommerceProductCatalogImports",
  "PostV2CoreAccountLinks",
  "PostV2CoreAccounts",
  "PostV2CoreAccountsAccountIdPersons",
  "PostV2CoreAccountsAccountIdPersonsId",
  "PostV2CoreAccountsAccountIdPersonTokens",
  "PostV2CoreAccountsId",
  "PostV2CoreAccountsIdClose",
  "PostV2CoreAccountTokens",
  "PostV2CoreEventDestinations",
  "PostV2CoreEventDestinationsId",
  "PostV2CoreEventDestinationsIdDisable",
  "PostV2CoreEventDestinationsIdEnable",
  "PostV2CoreEventDestinationsIdPing"
] as const;
export type StripeFullApiV2OperationKey = typeof StripeFullApiV2OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV2OperationPathParamMap {
  "DeleteV2CoreAccountsAccountIdPersonsId": { "account_id": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "DeleteV2CoreEventDestinationsId": { "id": StripeFullApiPathParamValue };
  "GetV2CommerceProductCatalogImports": {};
  "GetV2CommerceProductCatalogImportsId": { "id": StripeFullApiPathParamValue };
  "GetV2CoreAccounts": {};
  "GetV2CoreAccountsAccountIdPersons": { "account_id": StripeFullApiPathParamValue };
  "GetV2CoreAccountsAccountIdPersonsId": { "account_id": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetV2CoreAccountsAccountIdPersonTokensId": { "account_id": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "GetV2CoreAccountsId": { "id": StripeFullApiPathParamValue };
  "GetV2CoreAccountTokensId": { "id": StripeFullApiPathParamValue };
  "GetV2CoreEventDestinations": {};
  "GetV2CoreEventDestinationsId": { "id": StripeFullApiPathParamValue };
  "GetV2CoreEvents": {};
  "GetV2CoreEventsId": { "id": StripeFullApiPathParamValue };
  "PostV2BillingMeterEventAdjustments": {};
  "PostV2BillingMeterEvents": {};
  "PostV2BillingMeterEventSession": {};
  "PostV2BillingMeterEventStream": {};
  "PostV2CommerceProductCatalogImports": {};
  "PostV2CoreAccountLinks": {};
  "PostV2CoreAccounts": {};
  "PostV2CoreAccountsAccountIdPersons": { "account_id": StripeFullApiPathParamValue };
  "PostV2CoreAccountsAccountIdPersonsId": { "account_id": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostV2CoreAccountsAccountIdPersonTokens": { "account_id": StripeFullApiPathParamValue };
  "PostV2CoreAccountsId": { "id": StripeFullApiPathParamValue };
  "PostV2CoreAccountsIdClose": { "id": StripeFullApiPathParamValue };
  "PostV2CoreAccountTokens": {};
  "PostV2CoreEventDestinations": {};
  "PostV2CoreEventDestinationsId": { "id": StripeFullApiPathParamValue };
  "PostV2CoreEventDestinationsIdDisable": { "id": StripeFullApiPathParamValue };
  "PostV2CoreEventDestinationsIdEnable": { "id": StripeFullApiPathParamValue };
  "PostV2CoreEventDestinationsIdPing": { "id": StripeFullApiPathParamValue };
}

export interface StripeFullApiV2OperationRequestMap {
  "DeleteV2CoreAccountsAccountIdPersonsId": StripeFullApiOperationInput<"DeleteV2CoreAccountsAccountIdPersonsId">;
  "DeleteV2CoreEventDestinationsId": StripeFullApiOperationInput<"DeleteV2CoreEventDestinationsId">;
  "GetV2CommerceProductCatalogImports": StripeFullApiOperationInput<"GetV2CommerceProductCatalogImports">;
  "GetV2CommerceProductCatalogImportsId": StripeFullApiOperationInput<"GetV2CommerceProductCatalogImportsId">;
  "GetV2CoreAccounts": StripeFullApiOperationInput<"GetV2CoreAccounts">;
  "GetV2CoreAccountsAccountIdPersons": StripeFullApiOperationInput<"GetV2CoreAccountsAccountIdPersons">;
  "GetV2CoreAccountsAccountIdPersonsId": StripeFullApiOperationInput<"GetV2CoreAccountsAccountIdPersonsId">;
  "GetV2CoreAccountsAccountIdPersonTokensId": StripeFullApiOperationInput<"GetV2CoreAccountsAccountIdPersonTokensId">;
  "GetV2CoreAccountsId": StripeFullApiOperationInput<"GetV2CoreAccountsId">;
  "GetV2CoreAccountTokensId": StripeFullApiOperationInput<"GetV2CoreAccountTokensId">;
  "GetV2CoreEventDestinations": StripeFullApiOperationInput<"GetV2CoreEventDestinations">;
  "GetV2CoreEventDestinationsId": StripeFullApiOperationInput<"GetV2CoreEventDestinationsId">;
  "GetV2CoreEvents": StripeFullApiOperationInput<"GetV2CoreEvents">;
  "GetV2CoreEventsId": StripeFullApiOperationInput<"GetV2CoreEventsId">;
  "PostV2BillingMeterEventAdjustments": StripeFullApiOperationInput<"PostV2BillingMeterEventAdjustments">;
  "PostV2BillingMeterEvents": StripeFullApiOperationInput<"PostV2BillingMeterEvents">;
  "PostV2BillingMeterEventSession": StripeFullApiOperationInput<"PostV2BillingMeterEventSession">;
  "PostV2BillingMeterEventStream": StripeFullApiOperationInput<"PostV2BillingMeterEventStream">;
  "PostV2CommerceProductCatalogImports": StripeFullApiOperationInput<"PostV2CommerceProductCatalogImports">;
  "PostV2CoreAccountLinks": StripeFullApiOperationInput<"PostV2CoreAccountLinks">;
  "PostV2CoreAccounts": StripeFullApiOperationInput<"PostV2CoreAccounts">;
  "PostV2CoreAccountsAccountIdPersons": StripeFullApiOperationInput<"PostV2CoreAccountsAccountIdPersons">;
  "PostV2CoreAccountsAccountIdPersonsId": StripeFullApiOperationInput<"PostV2CoreAccountsAccountIdPersonsId">;
  "PostV2CoreAccountsAccountIdPersonTokens": StripeFullApiOperationInput<"PostV2CoreAccountsAccountIdPersonTokens">;
  "PostV2CoreAccountsId": StripeFullApiOperationInput<"PostV2CoreAccountsId">;
  "PostV2CoreAccountsIdClose": StripeFullApiOperationInput<"PostV2CoreAccountsIdClose">;
  "PostV2CoreAccountTokens": StripeFullApiOperationInput<"PostV2CoreAccountTokens">;
  "PostV2CoreEventDestinations": StripeFullApiOperationInput<"PostV2CoreEventDestinations">;
  "PostV2CoreEventDestinationsId": StripeFullApiOperationInput<"PostV2CoreEventDestinationsId">;
  "PostV2CoreEventDestinationsIdDisable": StripeFullApiOperationInput<"PostV2CoreEventDestinationsIdDisable">;
  "PostV2CoreEventDestinationsIdEnable": StripeFullApiOperationInput<"PostV2CoreEventDestinationsIdEnable">;
  "PostV2CoreEventDestinationsIdPing": StripeFullApiOperationInput<"PostV2CoreEventDestinationsIdPing">;
}

export interface StripeFullApiV2GeneratedClient {
  DeleteV2CoreAccountsAccountIdPersonsId(...args: StripeFullApiOperationArgs<"DeleteV2CoreAccountsAccountIdPersonsId">): Promise<StripeFullApiOperationResponseMap["DeleteV2CoreAccountsAccountIdPersonsId"]>;
  DeleteV2CoreEventDestinationsId(...args: StripeFullApiOperationArgs<"DeleteV2CoreEventDestinationsId">): Promise<StripeFullApiOperationResponseMap["DeleteV2CoreEventDestinationsId"]>;
  GetV2CommerceProductCatalogImports(...args: StripeFullApiOperationArgs<"GetV2CommerceProductCatalogImports">): Promise<StripeFullApiOperationResponseMap["GetV2CommerceProductCatalogImports"]>;
  GetV2CommerceProductCatalogImportsId(...args: StripeFullApiOperationArgs<"GetV2CommerceProductCatalogImportsId">): Promise<StripeFullApiOperationResponseMap["GetV2CommerceProductCatalogImportsId"]>;
  GetV2CoreAccounts(...args: StripeFullApiOperationArgs<"GetV2CoreAccounts">): Promise<StripeFullApiOperationResponseMap["GetV2CoreAccounts"]>;
  GetV2CoreAccountsAccountIdPersons(...args: StripeFullApiOperationArgs<"GetV2CoreAccountsAccountIdPersons">): Promise<StripeFullApiOperationResponseMap["GetV2CoreAccountsAccountIdPersons"]>;
  GetV2CoreAccountsAccountIdPersonsId(...args: StripeFullApiOperationArgs<"GetV2CoreAccountsAccountIdPersonsId">): Promise<StripeFullApiOperationResponseMap["GetV2CoreAccountsAccountIdPersonsId"]>;
  GetV2CoreAccountsAccountIdPersonTokensId(...args: StripeFullApiOperationArgs<"GetV2CoreAccountsAccountIdPersonTokensId">): Promise<StripeFullApiOperationResponseMap["GetV2CoreAccountsAccountIdPersonTokensId"]>;
  GetV2CoreAccountsId(...args: StripeFullApiOperationArgs<"GetV2CoreAccountsId">): Promise<StripeFullApiOperationResponseMap["GetV2CoreAccountsId"]>;
  GetV2CoreAccountTokensId(...args: StripeFullApiOperationArgs<"GetV2CoreAccountTokensId">): Promise<StripeFullApiOperationResponseMap["GetV2CoreAccountTokensId"]>;
  GetV2CoreEventDestinations(...args: StripeFullApiOperationArgs<"GetV2CoreEventDestinations">): Promise<StripeFullApiOperationResponseMap["GetV2CoreEventDestinations"]>;
  GetV2CoreEventDestinationsId(...args: StripeFullApiOperationArgs<"GetV2CoreEventDestinationsId">): Promise<StripeFullApiOperationResponseMap["GetV2CoreEventDestinationsId"]>;
  GetV2CoreEvents(...args: StripeFullApiOperationArgs<"GetV2CoreEvents">): Promise<StripeFullApiOperationResponseMap["GetV2CoreEvents"]>;
  GetV2CoreEventsId(...args: StripeFullApiOperationArgs<"GetV2CoreEventsId">): Promise<StripeFullApiOperationResponseMap["GetV2CoreEventsId"]>;
  PostV2BillingMeterEventAdjustments(...args: StripeFullApiOperationArgs<"PostV2BillingMeterEventAdjustments">): Promise<StripeFullApiOperationResponseMap["PostV2BillingMeterEventAdjustments"]>;
  PostV2BillingMeterEvents(...args: StripeFullApiOperationArgs<"PostV2BillingMeterEvents">): Promise<StripeFullApiOperationResponseMap["PostV2BillingMeterEvents"]>;
  PostV2BillingMeterEventSession(...args: StripeFullApiOperationArgs<"PostV2BillingMeterEventSession">): Promise<StripeFullApiOperationResponseMap["PostV2BillingMeterEventSession"]>;
  PostV2BillingMeterEventStream(...args: StripeFullApiOperationArgs<"PostV2BillingMeterEventStream">): Promise<StripeFullApiOperationResponseMap["PostV2BillingMeterEventStream"]>;
  PostV2CommerceProductCatalogImports(...args: StripeFullApiOperationArgs<"PostV2CommerceProductCatalogImports">): Promise<StripeFullApiOperationResponseMap["PostV2CommerceProductCatalogImports"]>;
  PostV2CoreAccountLinks(...args: StripeFullApiOperationArgs<"PostV2CoreAccountLinks">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccountLinks"]>;
  PostV2CoreAccounts(...args: StripeFullApiOperationArgs<"PostV2CoreAccounts">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccounts"]>;
  PostV2CoreAccountsAccountIdPersons(...args: StripeFullApiOperationArgs<"PostV2CoreAccountsAccountIdPersons">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccountsAccountIdPersons"]>;
  PostV2CoreAccountsAccountIdPersonsId(...args: StripeFullApiOperationArgs<"PostV2CoreAccountsAccountIdPersonsId">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccountsAccountIdPersonsId"]>;
  PostV2CoreAccountsAccountIdPersonTokens(...args: StripeFullApiOperationArgs<"PostV2CoreAccountsAccountIdPersonTokens">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccountsAccountIdPersonTokens"]>;
  PostV2CoreAccountsId(...args: StripeFullApiOperationArgs<"PostV2CoreAccountsId">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccountsId"]>;
  PostV2CoreAccountsIdClose(...args: StripeFullApiOperationArgs<"PostV2CoreAccountsIdClose">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccountsIdClose"]>;
  PostV2CoreAccountTokens(...args: StripeFullApiOperationArgs<"PostV2CoreAccountTokens">): Promise<StripeFullApiOperationResponseMap["PostV2CoreAccountTokens"]>;
  PostV2CoreEventDestinations(...args: StripeFullApiOperationArgs<"PostV2CoreEventDestinations">): Promise<StripeFullApiOperationResponseMap["PostV2CoreEventDestinations"]>;
  PostV2CoreEventDestinationsId(...args: StripeFullApiOperationArgs<"PostV2CoreEventDestinationsId">): Promise<StripeFullApiOperationResponseMap["PostV2CoreEventDestinationsId"]>;
  PostV2CoreEventDestinationsIdDisable(...args: StripeFullApiOperationArgs<"PostV2CoreEventDestinationsIdDisable">): Promise<StripeFullApiOperationResponseMap["PostV2CoreEventDestinationsIdDisable"]>;
  PostV2CoreEventDestinationsIdEnable(...args: StripeFullApiOperationArgs<"PostV2CoreEventDestinationsIdEnable">): Promise<StripeFullApiOperationResponseMap["PostV2CoreEventDestinationsIdEnable"]>;
  PostV2CoreEventDestinationsIdPing(...args: StripeFullApiOperationArgs<"PostV2CoreEventDestinationsIdPing">): Promise<StripeFullApiOperationResponseMap["PostV2CoreEventDestinationsIdPing"]>;
}

export const StripeFullApiV2GeneratedFunctionNames = [
  "DeleteV2CoreAccountsAccountIdPersonsId",
  "DeleteV2CoreEventDestinationsId",
  "GetV2CommerceProductCatalogImports",
  "GetV2CommerceProductCatalogImportsId",
  "GetV2CoreAccounts",
  "GetV2CoreAccountsAccountIdPersons",
  "GetV2CoreAccountsAccountIdPersonsId",
  "GetV2CoreAccountsAccountIdPersonTokensId",
  "GetV2CoreAccountsId",
  "GetV2CoreAccountTokensId",
  "GetV2CoreEventDestinations",
  "GetV2CoreEventDestinationsId",
  "GetV2CoreEvents",
  "GetV2CoreEventsId",
  "PostV2BillingMeterEventAdjustments",
  "PostV2BillingMeterEvents",
  "PostV2BillingMeterEventSession",
  "PostV2BillingMeterEventStream",
  "PostV2CommerceProductCatalogImports",
  "PostV2CoreAccountLinks",
  "PostV2CoreAccounts",
  "PostV2CoreAccountsAccountIdPersons",
  "PostV2CoreAccountsAccountIdPersonsId",
  "PostV2CoreAccountsAccountIdPersonTokens",
  "PostV2CoreAccountsId",
  "PostV2CoreAccountsIdClose",
  "PostV2CoreAccountTokens",
  "PostV2CoreEventDestinations",
  "PostV2CoreEventDestinationsId",
  "PostV2CoreEventDestinationsIdDisable",
  "PostV2CoreEventDestinationsIdEnable",
  "PostV2CoreEventDestinationsIdPing"
] as const satisfies readonly (keyof StripeFullApiV2GeneratedClient)[];

export function createStripeFullApiV2GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV2GeneratedClient {
  return {
    DeleteV2CoreAccountsAccountIdPersonsId: (...args) => callOperation("DeleteV2CoreAccountsAccountIdPersonsId", ...(args as StripeFullApiOperationArgs<"DeleteV2CoreAccountsAccountIdPersonsId">)),
    DeleteV2CoreEventDestinationsId: (...args) => callOperation("DeleteV2CoreEventDestinationsId", ...(args as StripeFullApiOperationArgs<"DeleteV2CoreEventDestinationsId">)),
    GetV2CommerceProductCatalogImports: (...args) => callOperation("GetV2CommerceProductCatalogImports", ...(args as StripeFullApiOperationArgs<"GetV2CommerceProductCatalogImports">)),
    GetV2CommerceProductCatalogImportsId: (...args) => callOperation("GetV2CommerceProductCatalogImportsId", ...(args as StripeFullApiOperationArgs<"GetV2CommerceProductCatalogImportsId">)),
    GetV2CoreAccounts: (...args) => callOperation("GetV2CoreAccounts", ...(args as StripeFullApiOperationArgs<"GetV2CoreAccounts">)),
    GetV2CoreAccountsAccountIdPersons: (...args) => callOperation("GetV2CoreAccountsAccountIdPersons", ...(args as StripeFullApiOperationArgs<"GetV2CoreAccountsAccountIdPersons">)),
    GetV2CoreAccountsAccountIdPersonsId: (...args) => callOperation("GetV2CoreAccountsAccountIdPersonsId", ...(args as StripeFullApiOperationArgs<"GetV2CoreAccountsAccountIdPersonsId">)),
    GetV2CoreAccountsAccountIdPersonTokensId: (...args) => callOperation("GetV2CoreAccountsAccountIdPersonTokensId", ...(args as StripeFullApiOperationArgs<"GetV2CoreAccountsAccountIdPersonTokensId">)),
    GetV2CoreAccountsId: (...args) => callOperation("GetV2CoreAccountsId", ...(args as StripeFullApiOperationArgs<"GetV2CoreAccountsId">)),
    GetV2CoreAccountTokensId: (...args) => callOperation("GetV2CoreAccountTokensId", ...(args as StripeFullApiOperationArgs<"GetV2CoreAccountTokensId">)),
    GetV2CoreEventDestinations: (...args) => callOperation("GetV2CoreEventDestinations", ...(args as StripeFullApiOperationArgs<"GetV2CoreEventDestinations">)),
    GetV2CoreEventDestinationsId: (...args) => callOperation("GetV2CoreEventDestinationsId", ...(args as StripeFullApiOperationArgs<"GetV2CoreEventDestinationsId">)),
    GetV2CoreEvents: (...args) => callOperation("GetV2CoreEvents", ...(args as StripeFullApiOperationArgs<"GetV2CoreEvents">)),
    GetV2CoreEventsId: (...args) => callOperation("GetV2CoreEventsId", ...(args as StripeFullApiOperationArgs<"GetV2CoreEventsId">)),
    PostV2BillingMeterEventAdjustments: (...args) => callOperation("PostV2BillingMeterEventAdjustments", ...(args as StripeFullApiOperationArgs<"PostV2BillingMeterEventAdjustments">)),
    PostV2BillingMeterEvents: (...args) => callOperation("PostV2BillingMeterEvents", ...(args as StripeFullApiOperationArgs<"PostV2BillingMeterEvents">)),
    PostV2BillingMeterEventSession: (...args) => callOperation("PostV2BillingMeterEventSession", ...(args as StripeFullApiOperationArgs<"PostV2BillingMeterEventSession">)),
    PostV2BillingMeterEventStream: (...args) => callOperation("PostV2BillingMeterEventStream", ...(args as StripeFullApiOperationArgs<"PostV2BillingMeterEventStream">)),
    PostV2CommerceProductCatalogImports: (...args) => callOperation("PostV2CommerceProductCatalogImports", ...(args as StripeFullApiOperationArgs<"PostV2CommerceProductCatalogImports">)),
    PostV2CoreAccountLinks: (...args) => callOperation("PostV2CoreAccountLinks", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccountLinks">)),
    PostV2CoreAccounts: (...args) => callOperation("PostV2CoreAccounts", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccounts">)),
    PostV2CoreAccountsAccountIdPersons: (...args) => callOperation("PostV2CoreAccountsAccountIdPersons", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccountsAccountIdPersons">)),
    PostV2CoreAccountsAccountIdPersonsId: (...args) => callOperation("PostV2CoreAccountsAccountIdPersonsId", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccountsAccountIdPersonsId">)),
    PostV2CoreAccountsAccountIdPersonTokens: (...args) => callOperation("PostV2CoreAccountsAccountIdPersonTokens", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccountsAccountIdPersonTokens">)),
    PostV2CoreAccountsId: (...args) => callOperation("PostV2CoreAccountsId", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccountsId">)),
    PostV2CoreAccountsIdClose: (...args) => callOperation("PostV2CoreAccountsIdClose", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccountsIdClose">)),
    PostV2CoreAccountTokens: (...args) => callOperation("PostV2CoreAccountTokens", ...(args as StripeFullApiOperationArgs<"PostV2CoreAccountTokens">)),
    PostV2CoreEventDestinations: (...args) => callOperation("PostV2CoreEventDestinations", ...(args as StripeFullApiOperationArgs<"PostV2CoreEventDestinations">)),
    PostV2CoreEventDestinationsId: (...args) => callOperation("PostV2CoreEventDestinationsId", ...(args as StripeFullApiOperationArgs<"PostV2CoreEventDestinationsId">)),
    PostV2CoreEventDestinationsIdDisable: (...args) => callOperation("PostV2CoreEventDestinationsIdDisable", ...(args as StripeFullApiOperationArgs<"PostV2CoreEventDestinationsIdDisable">)),
    PostV2CoreEventDestinationsIdEnable: (...args) => callOperation("PostV2CoreEventDestinationsIdEnable", ...(args as StripeFullApiOperationArgs<"PostV2CoreEventDestinationsIdEnable">)),
    PostV2CoreEventDestinationsIdPing: (...args) => callOperation("PostV2CoreEventDestinationsIdPing", ...(args as StripeFullApiOperationArgs<"PostV2CoreEventDestinationsIdPing">)),
  };
}
