// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiRulesOperationKeys = [
  "list-all-company-rules",
  "list-rules",
  "get-rule",
  "list-teammate-rules",
  "list-team-rules"
] as const;
export type FrontFullApiRulesOperationKey = typeof FrontFullApiRulesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiRulesOperationPathParamMap {
  "list-all-company-rules": {};
  "list-rules": {};
  "get-rule": { "rule_id": FrontFullApiPathParamValue };
  "list-teammate-rules": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-rules": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiRulesOperationRequestMap {
  "list-all-company-rules": FrontFullApiOperationInput<"list-all-company-rules">;
  "list-rules": FrontFullApiOperationInput<"list-rules">;
  "get-rule": FrontFullApiOperationInput<"get-rule">;
  "list-teammate-rules": FrontFullApiOperationInput<"list-teammate-rules">;
  "list-team-rules": FrontFullApiOperationInput<"list-team-rules">;
}

export interface FrontFullApiRulesGeneratedClient {
  frontListAllCompanyRules(...args: FrontFullApiOperationArgs<"list-all-company-rules">): Promise<FrontFullApiOperationResponseMap["list-all-company-rules"]>;
  frontListRules(...args: FrontFullApiOperationArgs<"list-rules">): Promise<FrontFullApiOperationResponseMap["list-rules"]>;
  frontGetRule(...args: FrontFullApiOperationArgs<"get-rule">): Promise<FrontFullApiOperationResponseMap["get-rule"]>;
  frontListTeammateRules(...args: FrontFullApiOperationArgs<"list-teammate-rules">): Promise<FrontFullApiOperationResponseMap["list-teammate-rules"]>;
  frontListTeamRules(...args: FrontFullApiOperationArgs<"list-team-rules">): Promise<FrontFullApiOperationResponseMap["list-team-rules"]>;
}

export const FrontFullApiRulesGeneratedFunctionNames = [
  "frontListAllCompanyRules",
  "frontListRules",
  "frontGetRule",
  "frontListTeammateRules",
  "frontListTeamRules"
] as const satisfies readonly (keyof FrontFullApiRulesGeneratedClient)[];

export function createFrontFullApiRulesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiRulesGeneratedClient {
  return {
    frontListAllCompanyRules: (...args) => callOperation("list-all-company-rules", ...(args as FrontFullApiOperationArgs<"list-all-company-rules">)),
    frontListRules: (...args) => callOperation("list-rules", ...(args as FrontFullApiOperationArgs<"list-rules">)),
    frontGetRule: (...args) => callOperation("get-rule", ...(args as FrontFullApiOperationArgs<"get-rule">)),
    frontListTeammateRules: (...args) => callOperation("list-teammate-rules", ...(args as FrontFullApiOperationArgs<"list-teammate-rules">)),
    frontListTeamRules: (...args) => callOperation("list-team-rules", ...(args as FrontFullApiOperationArgs<"list-team-rules">)),
  };
}
