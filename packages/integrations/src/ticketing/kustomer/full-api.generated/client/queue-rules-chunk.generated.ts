// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiQueueRulesOperationKeys = [
  "GetQueueRules",
  "CreateQueueRule",
  "GetQueueCriteria",
  "DeleteQueueRule",
  "GetQueueRule",
  "UpdateQueueRule",
  "UpdateQueueRuleOrder"
] as const;
export type KustomerFullApiQueueRulesOperationKey = typeof KustomerFullApiQueueRulesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiQueueRulesOperationPathParamMap {
  "GetQueueRules": {};
  "CreateQueueRule": {};
  "GetQueueCriteria": {};
  "DeleteQueueRule": { "id": KustomerFullApiPathParamValue };
  "GetQueueRule": { "id": KustomerFullApiPathParamValue };
  "UpdateQueueRule": { "id": KustomerFullApiPathParamValue };
  "UpdateQueueRuleOrder": {};
}

export interface KustomerFullApiQueueRulesOperationRequestMap {
  "GetQueueRules": KustomerFullApiOperationInput<"GetQueueRules">;
  "CreateQueueRule": KustomerFullApiOperationInput<"CreateQueueRule">;
  "GetQueueCriteria": KustomerFullApiOperationInput<"GetQueueCriteria">;
  "DeleteQueueRule": KustomerFullApiOperationInput<"DeleteQueueRule">;
  "GetQueueRule": KustomerFullApiOperationInput<"GetQueueRule">;
  "UpdateQueueRule": KustomerFullApiOperationInput<"UpdateQueueRule">;
  "UpdateQueueRuleOrder": KustomerFullApiOperationInput<"UpdateQueueRuleOrder">;
}

export interface KustomerFullApiQueueRulesGeneratedClient {
  kustomerGetQueueRules(...args: KustomerFullApiOperationArgs<"GetQueueRules">): Promise<KustomerFullApiOperationResponseMap["GetQueueRules"]>;
  kustomerCreateQueueRule(...args: KustomerFullApiOperationArgs<"CreateQueueRule">): Promise<KustomerFullApiOperationResponseMap["CreateQueueRule"]>;
  kustomerGetQueueCriteria(...args: KustomerFullApiOperationArgs<"GetQueueCriteria">): Promise<KustomerFullApiOperationResponseMap["GetQueueCriteria"]>;
  kustomerDeleteQueueRule(...args: KustomerFullApiOperationArgs<"DeleteQueueRule">): Promise<KustomerFullApiOperationResponseMap["DeleteQueueRule"]>;
  kustomerGetQueueRule(...args: KustomerFullApiOperationArgs<"GetQueueRule">): Promise<KustomerFullApiOperationResponseMap["GetQueueRule"]>;
  kustomerUpdateQueueRule(...args: KustomerFullApiOperationArgs<"UpdateQueueRule">): Promise<KustomerFullApiOperationResponseMap["UpdateQueueRule"]>;
  kustomerUpdateQueueRuleOrder(...args: KustomerFullApiOperationArgs<"UpdateQueueRuleOrder">): Promise<KustomerFullApiOperationResponseMap["UpdateQueueRuleOrder"]>;
}

export const KustomerFullApiQueueRulesGeneratedFunctionNames = [
  "kustomerGetQueueRules",
  "kustomerCreateQueueRule",
  "kustomerGetQueueCriteria",
  "kustomerDeleteQueueRule",
  "kustomerGetQueueRule",
  "kustomerUpdateQueueRule",
  "kustomerUpdateQueueRuleOrder"
] as const satisfies readonly (keyof KustomerFullApiQueueRulesGeneratedClient)[];

export function createKustomerFullApiQueueRulesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiQueueRulesGeneratedClient {
  return {
    kustomerGetQueueRules: (...args) => callOperation("GetQueueRules", ...(args as KustomerFullApiOperationArgs<"GetQueueRules">)),
    kustomerCreateQueueRule: (...args) => callOperation("CreateQueueRule", ...(args as KustomerFullApiOperationArgs<"CreateQueueRule">)),
    kustomerGetQueueCriteria: (...args) => callOperation("GetQueueCriteria", ...(args as KustomerFullApiOperationArgs<"GetQueueCriteria">)),
    kustomerDeleteQueueRule: (...args) => callOperation("DeleteQueueRule", ...(args as KustomerFullApiOperationArgs<"DeleteQueueRule">)),
    kustomerGetQueueRule: (...args) => callOperation("GetQueueRule", ...(args as KustomerFullApiOperationArgs<"GetQueueRule">)),
    kustomerUpdateQueueRule: (...args) => callOperation("UpdateQueueRule", ...(args as KustomerFullApiOperationArgs<"UpdateQueueRule">)),
    kustomerUpdateQueueRuleOrder: (...args) => callOperation("UpdateQueueRuleOrder", ...(args as KustomerFullApiOperationArgs<"UpdateQueueRuleOrder">)),
  };
}
