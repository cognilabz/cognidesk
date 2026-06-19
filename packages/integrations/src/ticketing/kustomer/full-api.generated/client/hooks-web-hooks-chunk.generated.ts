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
export const KustomerFullApiHooksWebHooksOperationKeys = [
  "GetWebHooks",
  "CreateWebHook",
  "CreateWebHookTransaction",
  "GetaWebHook",
  "UpdateWebHook",
  "GetWebHookTransactions"
] as const;
export type KustomerFullApiHooksWebHooksOperationKey = typeof KustomerFullApiHooksWebHooksOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiHooksWebHooksOperationPathParamMap {
  "GetWebHooks": {};
  "CreateWebHook": {};
  "CreateWebHookTransaction": { "hash": KustomerFullApiPathParamValue };
  "GetaWebHook": { "id": KustomerFullApiPathParamValue };
  "UpdateWebHook": { "id": KustomerFullApiPathParamValue };
  "GetWebHookTransactions": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiHooksWebHooksOperationRequestMap {
  "GetWebHooks": KustomerFullApiOperationInput<"GetWebHooks">;
  "CreateWebHook": KustomerFullApiOperationInput<"CreateWebHook">;
  "CreateWebHookTransaction": KustomerFullApiOperationInput<"CreateWebHookTransaction">;
  "GetaWebHook": KustomerFullApiOperationInput<"GetaWebHook">;
  "UpdateWebHook": KustomerFullApiOperationInput<"UpdateWebHook">;
  "GetWebHookTransactions": KustomerFullApiOperationInput<"GetWebHookTransactions">;
}

export interface KustomerFullApiHooksWebHooksGeneratedClient {
  kustomerGetWebHooks(...args: KustomerFullApiOperationArgs<"GetWebHooks">): Promise<KustomerFullApiOperationResponseMap["GetWebHooks"]>;
  kustomerCreateWebHook(...args: KustomerFullApiOperationArgs<"CreateWebHook">): Promise<KustomerFullApiOperationResponseMap["CreateWebHook"]>;
  kustomerCreateWebHookTransaction(...args: KustomerFullApiOperationArgs<"CreateWebHookTransaction">): Promise<KustomerFullApiOperationResponseMap["CreateWebHookTransaction"]>;
  kustomerGetaWebHook(...args: KustomerFullApiOperationArgs<"GetaWebHook">): Promise<KustomerFullApiOperationResponseMap["GetaWebHook"]>;
  kustomerUpdateWebHook(...args: KustomerFullApiOperationArgs<"UpdateWebHook">): Promise<KustomerFullApiOperationResponseMap["UpdateWebHook"]>;
  kustomerGetWebHookTransactions(...args: KustomerFullApiOperationArgs<"GetWebHookTransactions">): Promise<KustomerFullApiOperationResponseMap["GetWebHookTransactions"]>;
}

export const KustomerFullApiHooksWebHooksGeneratedFunctionNames = [
  "kustomerGetWebHooks",
  "kustomerCreateWebHook",
  "kustomerCreateWebHookTransaction",
  "kustomerGetaWebHook",
  "kustomerUpdateWebHook",
  "kustomerGetWebHookTransactions"
] as const satisfies readonly (keyof KustomerFullApiHooksWebHooksGeneratedClient)[];

export function createKustomerFullApiHooksWebHooksGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiHooksWebHooksGeneratedClient {
  return {
    kustomerGetWebHooks: (...args) => callOperation("GetWebHooks", ...(args as KustomerFullApiOperationArgs<"GetWebHooks">)),
    kustomerCreateWebHook: (...args) => callOperation("CreateWebHook", ...(args as KustomerFullApiOperationArgs<"CreateWebHook">)),
    kustomerCreateWebHookTransaction: (...args) => callOperation("CreateWebHookTransaction", ...(args as KustomerFullApiOperationArgs<"CreateWebHookTransaction">)),
    kustomerGetaWebHook: (...args) => callOperation("GetaWebHook", ...(args as KustomerFullApiOperationArgs<"GetaWebHook">)),
    kustomerUpdateWebHook: (...args) => callOperation("UpdateWebHook", ...(args as KustomerFullApiOperationArgs<"UpdateWebHook">)),
    kustomerGetWebHookTransactions: (...args) => callOperation("GetWebHookTransactions", ...(args as KustomerFullApiOperationArgs<"GetWebHookTransactions">)),
  };
}
