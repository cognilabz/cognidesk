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
export const KustomerFullApiHooksEmailHooksOperationKeys = [
  "GetEmailHooks",
  "CreateEmailHook",
  "GetanEmailHook",
  "UpdateEmailHook",
  "GetEmailHookTransactions"
] as const;
export type KustomerFullApiHooksEmailHooksOperationKey = typeof KustomerFullApiHooksEmailHooksOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiHooksEmailHooksOperationPathParamMap {
  "GetEmailHooks": {};
  "CreateEmailHook": {};
  "GetanEmailHook": { "id": KustomerFullApiPathParamValue };
  "UpdateEmailHook": { "id": KustomerFullApiPathParamValue };
  "GetEmailHookTransactions": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiHooksEmailHooksOperationRequestMap {
  "GetEmailHooks": KustomerFullApiOperationInput<"GetEmailHooks">;
  "CreateEmailHook": KustomerFullApiOperationInput<"CreateEmailHook">;
  "GetanEmailHook": KustomerFullApiOperationInput<"GetanEmailHook">;
  "UpdateEmailHook": KustomerFullApiOperationInput<"UpdateEmailHook">;
  "GetEmailHookTransactions": KustomerFullApiOperationInput<"GetEmailHookTransactions">;
}

export interface KustomerFullApiHooksEmailHooksGeneratedClient {
  kustomerGetEmailHooks(...args: KustomerFullApiOperationArgs<"GetEmailHooks">): Promise<KustomerFullApiOperationResponseMap["GetEmailHooks"]>;
  kustomerCreateEmailHook(...args: KustomerFullApiOperationArgs<"CreateEmailHook">): Promise<KustomerFullApiOperationResponseMap["CreateEmailHook"]>;
  kustomerGetanEmailHook(...args: KustomerFullApiOperationArgs<"GetanEmailHook">): Promise<KustomerFullApiOperationResponseMap["GetanEmailHook"]>;
  kustomerUpdateEmailHook(...args: KustomerFullApiOperationArgs<"UpdateEmailHook">): Promise<KustomerFullApiOperationResponseMap["UpdateEmailHook"]>;
  kustomerGetEmailHookTransactions(...args: KustomerFullApiOperationArgs<"GetEmailHookTransactions">): Promise<KustomerFullApiOperationResponseMap["GetEmailHookTransactions"]>;
}

export const KustomerFullApiHooksEmailHooksGeneratedFunctionNames = [
  "kustomerGetEmailHooks",
  "kustomerCreateEmailHook",
  "kustomerGetanEmailHook",
  "kustomerUpdateEmailHook",
  "kustomerGetEmailHookTransactions"
] as const satisfies readonly (keyof KustomerFullApiHooksEmailHooksGeneratedClient)[];

export function createKustomerFullApiHooksEmailHooksGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiHooksEmailHooksGeneratedClient {
  return {
    kustomerGetEmailHooks: (...args) => callOperation("GetEmailHooks", ...(args as KustomerFullApiOperationArgs<"GetEmailHooks">)),
    kustomerCreateEmailHook: (...args) => callOperation("CreateEmailHook", ...(args as KustomerFullApiOperationArgs<"CreateEmailHook">)),
    kustomerGetanEmailHook: (...args) => callOperation("GetanEmailHook", ...(args as KustomerFullApiOperationArgs<"GetanEmailHook">)),
    kustomerUpdateEmailHook: (...args) => callOperation("UpdateEmailHook", ...(args as KustomerFullApiOperationArgs<"UpdateEmailHook">)),
    kustomerGetEmailHookTransactions: (...args) => callOperation("GetEmailHookTransactions", ...(args as KustomerFullApiOperationArgs<"GetEmailHookTransactions">)),
  };
}
