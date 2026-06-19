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
export const GenesysCloudFullApiUsersRulesOperationKeys = [
  "deleteUsersRule",
  "getUsersRule",
  "getUsersRuleDependents",
  "getUsersRuleDependentTypeId",
  "getUsersRules",
  "getUsersRulesSetting",
  "patchUsersRule",
  "postUsersRules",
  "postUsersRulesQuery"
] as const;
export type GenesysCloudFullApiUsersRulesOperationKey = typeof GenesysCloudFullApiUsersRulesOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiUsersRulesOperationPathParamMap {
  "deleteUsersRule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "getUsersRule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "getUsersRuleDependents": { "ruleId": GenesysCloudFullApiPathParamValue };
  "getUsersRuleDependentTypeId": { "ruleId": GenesysCloudFullApiPathParamValue; "ruleType": GenesysCloudFullApiPathParamValue; "typeId": GenesysCloudFullApiPathParamValue };
  "getUsersRules": {};
  "getUsersRulesSetting": { "ruleType": GenesysCloudFullApiPathParamValue };
  "patchUsersRule": { "ruleId": GenesysCloudFullApiPathParamValue };
  "postUsersRules": {};
  "postUsersRulesQuery": {};
}

export interface GenesysCloudFullApiUsersRulesOperationRequestMap {
  "deleteUsersRule": GenesysCloudFullApiOperationInput<"deleteUsersRule">;
  "getUsersRule": GenesysCloudFullApiOperationInput<"getUsersRule">;
  "getUsersRuleDependents": GenesysCloudFullApiOperationInput<"getUsersRuleDependents">;
  "getUsersRuleDependentTypeId": GenesysCloudFullApiOperationInput<"getUsersRuleDependentTypeId">;
  "getUsersRules": GenesysCloudFullApiOperationInput<"getUsersRules">;
  "getUsersRulesSetting": GenesysCloudFullApiOperationInput<"getUsersRulesSetting">;
  "patchUsersRule": GenesysCloudFullApiOperationInput<"patchUsersRule">;
  "postUsersRules": GenesysCloudFullApiOperationInput<"postUsersRules">;
  "postUsersRulesQuery": GenesysCloudFullApiOperationInput<"postUsersRulesQuery">;
}

export interface GenesysCloudFullApiUsersRulesGeneratedClient {
  DeleteUsersRule(...args: GenesysCloudFullApiOperationArgs<"deleteUsersRule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUsersRule"]>;
  GetUsersRule(...args: GenesysCloudFullApiOperationArgs<"getUsersRule">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersRule"]>;
  GetUsersRuleDependents(...args: GenesysCloudFullApiOperationArgs<"getUsersRuleDependents">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersRuleDependents"]>;
  GetUsersRuleDependentTypeId(...args: GenesysCloudFullApiOperationArgs<"getUsersRuleDependentTypeId">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersRuleDependentTypeId"]>;
  GetUsersRules(...args: GenesysCloudFullApiOperationArgs<"getUsersRules">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersRules"]>;
  GetUsersRulesSetting(...args: GenesysCloudFullApiOperationArgs<"getUsersRulesSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersRulesSetting"]>;
  PatchUsersRule(...args: GenesysCloudFullApiOperationArgs<"patchUsersRule">): Promise<GenesysCloudFullApiOperationResponseMap["patchUsersRule"]>;
  PostUsersRules(...args: GenesysCloudFullApiOperationArgs<"postUsersRules">): Promise<GenesysCloudFullApiOperationResponseMap["postUsersRules"]>;
  PostUsersRulesQuery(...args: GenesysCloudFullApiOperationArgs<"postUsersRulesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postUsersRulesQuery"]>;
}

export const GenesysCloudFullApiUsersRulesGeneratedFunctionNames = [
  "DeleteUsersRule",
  "GetUsersRule",
  "GetUsersRuleDependents",
  "GetUsersRuleDependentTypeId",
  "GetUsersRules",
  "GetUsersRulesSetting",
  "PatchUsersRule",
  "PostUsersRules",
  "PostUsersRulesQuery"
] as const satisfies readonly (keyof GenesysCloudFullApiUsersRulesGeneratedClient)[];

export function createGenesysCloudFullApiUsersRulesGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiUsersRulesGeneratedClient {
  return {
    DeleteUsersRule: (...args) => callOperation("deleteUsersRule", ...(args as GenesysCloudFullApiOperationArgs<"deleteUsersRule">)),
    GetUsersRule: (...args) => callOperation("getUsersRule", ...(args as GenesysCloudFullApiOperationArgs<"getUsersRule">)),
    GetUsersRuleDependents: (...args) => callOperation("getUsersRuleDependents", ...(args as GenesysCloudFullApiOperationArgs<"getUsersRuleDependents">)),
    GetUsersRuleDependentTypeId: (...args) => callOperation("getUsersRuleDependentTypeId", ...(args as GenesysCloudFullApiOperationArgs<"getUsersRuleDependentTypeId">)),
    GetUsersRules: (...args) => callOperation("getUsersRules", ...(args as GenesysCloudFullApiOperationArgs<"getUsersRules">)),
    GetUsersRulesSetting: (...args) => callOperation("getUsersRulesSetting", ...(args as GenesysCloudFullApiOperationArgs<"getUsersRulesSetting">)),
    PatchUsersRule: (...args) => callOperation("patchUsersRule", ...(args as GenesysCloudFullApiOperationArgs<"patchUsersRule">)),
    PostUsersRules: (...args) => callOperation("postUsersRules", ...(args as GenesysCloudFullApiOperationArgs<"postUsersRules">)),
    PostUsersRulesQuery: (...args) => callOperation("postUsersRulesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postUsersRulesQuery">)),
  };
}
