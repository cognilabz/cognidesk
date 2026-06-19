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
export const KustomerFullApiHooksFormHooksOperationKeys = [
  "GetFormHooks",
  "CreateFormHook",
  "CreateFormHookTransaction",
  "GetaFormHook",
  "UpdateFormHook",
  "GETFormHookTransactions",
  "CreateFormHookOrgTransaction"
] as const;
export type KustomerFullApiHooksFormHooksOperationKey = typeof KustomerFullApiHooksFormHooksOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiHooksFormHooksOperationPathParamMap {
  "GetFormHooks": {};
  "CreateFormHook": {};
  "CreateFormHookTransaction": { "hash": KustomerFullApiPathParamValue };
  "GetaFormHook": { "id": KustomerFullApiPathParamValue };
  "UpdateFormHook": { "id": KustomerFullApiPathParamValue };
  "GETFormHookTransactions": { "id": KustomerFullApiPathParamValue };
  "CreateFormHookOrgTransaction": { "org": KustomerFullApiPathParamValue; "hash": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiHooksFormHooksOperationRequestMap {
  "GetFormHooks": KustomerFullApiOperationInput<"GetFormHooks">;
  "CreateFormHook": KustomerFullApiOperationInput<"CreateFormHook">;
  "CreateFormHookTransaction": KustomerFullApiOperationInput<"CreateFormHookTransaction">;
  "GetaFormHook": KustomerFullApiOperationInput<"GetaFormHook">;
  "UpdateFormHook": KustomerFullApiOperationInput<"UpdateFormHook">;
  "GETFormHookTransactions": KustomerFullApiOperationInput<"GETFormHookTransactions">;
  "CreateFormHookOrgTransaction": KustomerFullApiOperationInput<"CreateFormHookOrgTransaction">;
}

export interface KustomerFullApiHooksFormHooksGeneratedClient {
  kustomerGetFormHooks(...args: KustomerFullApiOperationArgs<"GetFormHooks">): Promise<KustomerFullApiOperationResponseMap["GetFormHooks"]>;
  kustomerCreateFormHook(...args: KustomerFullApiOperationArgs<"CreateFormHook">): Promise<KustomerFullApiOperationResponseMap["CreateFormHook"]>;
  kustomerCreateFormHookTransaction(...args: KustomerFullApiOperationArgs<"CreateFormHookTransaction">): Promise<KustomerFullApiOperationResponseMap["CreateFormHookTransaction"]>;
  kustomerGetaFormHook(...args: KustomerFullApiOperationArgs<"GetaFormHook">): Promise<KustomerFullApiOperationResponseMap["GetaFormHook"]>;
  kustomerUpdateFormHook(...args: KustomerFullApiOperationArgs<"UpdateFormHook">): Promise<KustomerFullApiOperationResponseMap["UpdateFormHook"]>;
  kustomerGETFormHookTransactions(...args: KustomerFullApiOperationArgs<"GETFormHookTransactions">): Promise<KustomerFullApiOperationResponseMap["GETFormHookTransactions"]>;
  kustomerCreateFormHookOrgTransaction(...args: KustomerFullApiOperationArgs<"CreateFormHookOrgTransaction">): Promise<KustomerFullApiOperationResponseMap["CreateFormHookOrgTransaction"]>;
}

export const KustomerFullApiHooksFormHooksGeneratedFunctionNames = [
  "kustomerGetFormHooks",
  "kustomerCreateFormHook",
  "kustomerCreateFormHookTransaction",
  "kustomerGetaFormHook",
  "kustomerUpdateFormHook",
  "kustomerGETFormHookTransactions",
  "kustomerCreateFormHookOrgTransaction"
] as const satisfies readonly (keyof KustomerFullApiHooksFormHooksGeneratedClient)[];

export function createKustomerFullApiHooksFormHooksGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiHooksFormHooksGeneratedClient {
  return {
    kustomerGetFormHooks: (...args) => callOperation("GetFormHooks", ...(args as KustomerFullApiOperationArgs<"GetFormHooks">)),
    kustomerCreateFormHook: (...args) => callOperation("CreateFormHook", ...(args as KustomerFullApiOperationArgs<"CreateFormHook">)),
    kustomerCreateFormHookTransaction: (...args) => callOperation("CreateFormHookTransaction", ...(args as KustomerFullApiOperationArgs<"CreateFormHookTransaction">)),
    kustomerGetaFormHook: (...args) => callOperation("GetaFormHook", ...(args as KustomerFullApiOperationArgs<"GetaFormHook">)),
    kustomerUpdateFormHook: (...args) => callOperation("UpdateFormHook", ...(args as KustomerFullApiOperationArgs<"UpdateFormHook">)),
    kustomerGETFormHookTransactions: (...args) => callOperation("GETFormHookTransactions", ...(args as KustomerFullApiOperationArgs<"GETFormHookTransactions">)),
    kustomerCreateFormHookOrgTransaction: (...args) => callOperation("CreateFormHookOrgTransaction", ...(args as KustomerFullApiOperationArgs<"CreateFormHookOrgTransaction">)),
  };
}
