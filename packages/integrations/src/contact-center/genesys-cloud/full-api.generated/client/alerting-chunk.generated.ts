// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiAlertingOperationKeys = [
  "deleteAlertingAlert",
  "deleteAlertingAlertsAll",
  "deleteAlertingRule",
  "getAlertingAlert",
  "getAlertingRule",
  "patchAlertingAlert",
  "patchAlertingAlertsAll",
  "patchAlertingAlertsBulk",
  "patchAlertingRulesBulk",
  "postAlertingAlertsQuery",
  "postAlertingRules",
  "postAlertingRulesBulkRemove",
  "postAlertingRulesQuery",
  "putAlertingAlert",
  "putAlertingRule"
] as const;
export type GenesysCloudFullApiAlertingOperationKey = typeof GenesysCloudFullApiAlertingOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAlertingOperationPathParamMap {
  "deleteAlertingAlert": { "alertId": GenesysCloudFullApiPathParamValue };
  "deleteAlertingAlertsAll": {};
  "deleteAlertingRule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "getAlertingAlert": { "alertId": GenesysCloudFullApiPathParamValue };
  "getAlertingRule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "patchAlertingAlert": { "alertId": GenesysCloudFullApiPathParamValue };
  "patchAlertingAlertsAll": {};
  "patchAlertingAlertsBulk": {};
  "patchAlertingRulesBulk": {};
  "postAlertingAlertsQuery": {};
  "postAlertingRules": {};
  "postAlertingRulesBulkRemove": {};
  "postAlertingRulesQuery": {};
  "putAlertingAlert": { "alertId": GenesysCloudFullApiPathParamValue };
  "putAlertingRule": { "ruleId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiAlertingOperationRequestMap {
  "deleteAlertingAlert": GenesysCloudFullApiOperationInput<"deleteAlertingAlert">;
  "deleteAlertingAlertsAll": GenesysCloudFullApiOperationInput<"deleteAlertingAlertsAll">;
  "deleteAlertingRule": GenesysCloudFullApiOperationInput<"deleteAlertingRule">;
  "getAlertingAlert": GenesysCloudFullApiOperationInput<"getAlertingAlert">;
  "getAlertingRule": GenesysCloudFullApiOperationInput<"getAlertingRule">;
  "patchAlertingAlert": GenesysCloudFullApiOperationInput<"patchAlertingAlert">;
  "patchAlertingAlertsAll": GenesysCloudFullApiOperationInput<"patchAlertingAlertsAll">;
  "patchAlertingAlertsBulk": GenesysCloudFullApiOperationInput<"patchAlertingAlertsBulk">;
  "patchAlertingRulesBulk": GenesysCloudFullApiOperationInput<"patchAlertingRulesBulk">;
  "postAlertingAlertsQuery": GenesysCloudFullApiOperationInput<"postAlertingAlertsQuery">;
  "postAlertingRules": GenesysCloudFullApiOperationInput<"postAlertingRules">;
  "postAlertingRulesBulkRemove": GenesysCloudFullApiOperationInput<"postAlertingRulesBulkRemove">;
  "postAlertingRulesQuery": GenesysCloudFullApiOperationInput<"postAlertingRulesQuery">;
  "putAlertingAlert": GenesysCloudFullApiOperationInput<"putAlertingAlert">;
  "putAlertingRule": GenesysCloudFullApiOperationInput<"putAlertingRule">;
}

export interface GenesysCloudFullApiAlertingGeneratedClient {
  DeleteAlertingAlert(...args: GenesysCloudFullApiOperationArgs<"deleteAlertingAlert">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAlertingAlert"]>;
  DeleteAlertingAlertsAll(...args: GenesysCloudFullApiOperationArgs<"deleteAlertingAlertsAll">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAlertingAlertsAll"]>;
  DeleteAlertingRule(...args: GenesysCloudFullApiOperationArgs<"deleteAlertingRule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAlertingRule"]>;
  GetAlertingAlert(...args: GenesysCloudFullApiOperationArgs<"getAlertingAlert">): Promise<GenesysCloudFullApiOperationResponseMap["getAlertingAlert"]>;
  GetAlertingRule(...args: GenesysCloudFullApiOperationArgs<"getAlertingRule">): Promise<GenesysCloudFullApiOperationResponseMap["getAlertingRule"]>;
  PatchAlertingAlert(...args: GenesysCloudFullApiOperationArgs<"patchAlertingAlert">): Promise<GenesysCloudFullApiOperationResponseMap["patchAlertingAlert"]>;
  PatchAlertingAlertsAll(...args: GenesysCloudFullApiOperationArgs<"patchAlertingAlertsAll">): Promise<GenesysCloudFullApiOperationResponseMap["patchAlertingAlertsAll"]>;
  PatchAlertingAlertsBulk(...args: GenesysCloudFullApiOperationArgs<"patchAlertingAlertsBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchAlertingAlertsBulk"]>;
  PatchAlertingRulesBulk(...args: GenesysCloudFullApiOperationArgs<"patchAlertingRulesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchAlertingRulesBulk"]>;
  PostAlertingAlertsQuery(...args: GenesysCloudFullApiOperationArgs<"postAlertingAlertsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAlertingAlertsQuery"]>;
  PostAlertingRules(...args: GenesysCloudFullApiOperationArgs<"postAlertingRules">): Promise<GenesysCloudFullApiOperationResponseMap["postAlertingRules"]>;
  PostAlertingRulesBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postAlertingRulesBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postAlertingRulesBulkRemove"]>;
  PostAlertingRulesQuery(...args: GenesysCloudFullApiOperationArgs<"postAlertingRulesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAlertingRulesQuery"]>;
  PutAlertingAlert(...args: GenesysCloudFullApiOperationArgs<"putAlertingAlert">): Promise<GenesysCloudFullApiOperationResponseMap["putAlertingAlert"]>;
  PutAlertingRule(...args: GenesysCloudFullApiOperationArgs<"putAlertingRule">): Promise<GenesysCloudFullApiOperationResponseMap["putAlertingRule"]>;
}

export const GenesysCloudFullApiAlertingGeneratedFunctionNames = [
  "DeleteAlertingAlert",
  "DeleteAlertingAlertsAll",
  "DeleteAlertingRule",
  "GetAlertingAlert",
  "GetAlertingRule",
  "PatchAlertingAlert",
  "PatchAlertingAlertsAll",
  "PatchAlertingAlertsBulk",
  "PatchAlertingRulesBulk",
  "PostAlertingAlertsQuery",
  "PostAlertingRules",
  "PostAlertingRulesBulkRemove",
  "PostAlertingRulesQuery",
  "PutAlertingAlert",
  "PutAlertingRule"
] as const satisfies readonly (keyof GenesysCloudFullApiAlertingGeneratedClient)[];

export function createGenesysCloudFullApiAlertingGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAlertingGeneratedClient {
  return {
    DeleteAlertingAlert: (...args) => callOperation("deleteAlertingAlert", ...(args as GenesysCloudFullApiOperationArgs<"deleteAlertingAlert">)),
    DeleteAlertingAlertsAll: (...args) => callOperation("deleteAlertingAlertsAll", ...(args as GenesysCloudFullApiOperationArgs<"deleteAlertingAlertsAll">)),
    DeleteAlertingRule: (...args) => callOperation("deleteAlertingRule", ...(args as GenesysCloudFullApiOperationArgs<"deleteAlertingRule">)),
    GetAlertingAlert: (...args) => callOperation("getAlertingAlert", ...(args as GenesysCloudFullApiOperationArgs<"getAlertingAlert">)),
    GetAlertingRule: (...args) => callOperation("getAlertingRule", ...(args as GenesysCloudFullApiOperationArgs<"getAlertingRule">)),
    PatchAlertingAlert: (...args) => callOperation("patchAlertingAlert", ...(args as GenesysCloudFullApiOperationArgs<"patchAlertingAlert">)),
    PatchAlertingAlertsAll: (...args) => callOperation("patchAlertingAlertsAll", ...(args as GenesysCloudFullApiOperationArgs<"patchAlertingAlertsAll">)),
    PatchAlertingAlertsBulk: (...args) => callOperation("patchAlertingAlertsBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchAlertingAlertsBulk">)),
    PatchAlertingRulesBulk: (...args) => callOperation("patchAlertingRulesBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchAlertingRulesBulk">)),
    PostAlertingAlertsQuery: (...args) => callOperation("postAlertingAlertsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAlertingAlertsQuery">)),
    PostAlertingRules: (...args) => callOperation("postAlertingRules", ...(args as GenesysCloudFullApiOperationArgs<"postAlertingRules">)),
    PostAlertingRulesBulkRemove: (...args) => callOperation("postAlertingRulesBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postAlertingRulesBulkRemove">)),
    PostAlertingRulesQuery: (...args) => callOperation("postAlertingRulesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAlertingRulesQuery">)),
    PutAlertingAlert: (...args) => callOperation("putAlertingAlert", ...(args as GenesysCloudFullApiOperationArgs<"putAlertingAlert">)),
    PutAlertingRule: (...args) => callOperation("putAlertingRule", ...(args as GenesysCloudFullApiOperationArgs<"putAlertingRule">)),
  };
}
