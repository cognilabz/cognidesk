// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiRulesOperationKeys = [
  "list-rules",
  "create-rule",
  "delete-rule",
  "get-rule",
  "update-rule",
  "update-rules-priorities"
] as const;
export type GorgiasFullApiRulesOperationKey = typeof GorgiasFullApiRulesOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiRulesOperationPathParamMap {
  "list-rules": {};
  "create-rule": {};
  "delete-rule": { "id": GorgiasFullApiPathParamValue };
  "get-rule": { "id": GorgiasFullApiPathParamValue };
  "update-rule": { "id": GorgiasFullApiPathParamValue };
  "update-rules-priorities": {};
}

export interface GorgiasFullApiRulesOperationRequestMap {
  "list-rules": GorgiasFullApiOperationInput<"list-rules">;
  "create-rule": GorgiasFullApiOperationInput<"create-rule">;
  "delete-rule": GorgiasFullApiOperationInput<"delete-rule">;
  "get-rule": GorgiasFullApiOperationInput<"get-rule">;
  "update-rule": GorgiasFullApiOperationInput<"update-rule">;
  "update-rules-priorities": GorgiasFullApiOperationInput<"update-rules-priorities">;
}

export interface GorgiasFullApiRulesGeneratedClient {
  gorgiasListRules(...args: GorgiasFullApiOperationArgs<"list-rules">): Promise<GorgiasFullApiOperationResponseMap["list-rules"]>;
  gorgiasCreateRule(...args: GorgiasFullApiOperationArgs<"create-rule">): Promise<GorgiasFullApiOperationResponseMap["create-rule"]>;
  gorgiasDeleteRule(...args: GorgiasFullApiOperationArgs<"delete-rule">): Promise<GorgiasFullApiOperationResponseMap["delete-rule"]>;
  gorgiasGetRule(...args: GorgiasFullApiOperationArgs<"get-rule">): Promise<GorgiasFullApiOperationResponseMap["get-rule"]>;
  gorgiasUpdateRule(...args: GorgiasFullApiOperationArgs<"update-rule">): Promise<GorgiasFullApiOperationResponseMap["update-rule"]>;
  gorgiasUpdateRulesPriorities(...args: GorgiasFullApiOperationArgs<"update-rules-priorities">): Promise<GorgiasFullApiOperationResponseMap["update-rules-priorities"]>;
}

export const GorgiasFullApiRulesGeneratedFunctionNames = [
  "gorgiasListRules",
  "gorgiasCreateRule",
  "gorgiasDeleteRule",
  "gorgiasGetRule",
  "gorgiasUpdateRule",
  "gorgiasUpdateRulesPriorities"
] as const satisfies readonly (keyof GorgiasFullApiRulesGeneratedClient)[];

export function createGorgiasFullApiRulesGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiRulesGeneratedClient {
  return {
    gorgiasListRules: (...args) => callOperation("list-rules", ...(args as GorgiasFullApiOperationArgs<"list-rules">)),
    gorgiasCreateRule: (...args) => callOperation("create-rule", ...(args as GorgiasFullApiOperationArgs<"create-rule">)),
    gorgiasDeleteRule: (...args) => callOperation("delete-rule", ...(args as GorgiasFullApiOperationArgs<"delete-rule">)),
    gorgiasGetRule: (...args) => callOperation("get-rule", ...(args as GorgiasFullApiOperationArgs<"get-rule">)),
    gorgiasUpdateRule: (...args) => callOperation("update-rule", ...(args as GorgiasFullApiOperationArgs<"update-rule">)),
    gorgiasUpdateRulesPriorities: (...args) => callOperation("update-rules-priorities", ...(args as GorgiasFullApiOperationArgs<"update-rules-priorities">)),
  };
}
