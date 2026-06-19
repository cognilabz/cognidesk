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
export const KustomerFullApiWorkSessionsCurrentOperationKeys = [
  "GetCurrentWorkSessionbyUserID",
  "GetCurrentWorkSession",
  "UpdateCurrentWorkSession",
  "GetWorkItemsinCurrentWorkSession"
] as const;
export type KustomerFullApiWorkSessionsCurrentOperationKey = typeof KustomerFullApiWorkSessionsCurrentOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiWorkSessionsCurrentOperationPathParamMap {
  "GetCurrentWorkSessionbyUserID": { "id": KustomerFullApiPathParamValue };
  "GetCurrentWorkSession": {};
  "UpdateCurrentWorkSession": {};
  "GetWorkItemsinCurrentWorkSession": {};
}

export interface KustomerFullApiWorkSessionsCurrentOperationRequestMap {
  "GetCurrentWorkSessionbyUserID": KustomerFullApiOperationInput<"GetCurrentWorkSessionbyUserID">;
  "GetCurrentWorkSession": KustomerFullApiOperationInput<"GetCurrentWorkSession">;
  "UpdateCurrentWorkSession": KustomerFullApiOperationInput<"UpdateCurrentWorkSession">;
  "GetWorkItemsinCurrentWorkSession": KustomerFullApiOperationInput<"GetWorkItemsinCurrentWorkSession">;
}

export interface KustomerFullApiWorkSessionsCurrentGeneratedClient {
  kustomerGetCurrentWorkSessionbyUserID(...args: KustomerFullApiOperationArgs<"GetCurrentWorkSessionbyUserID">): Promise<KustomerFullApiOperationResponseMap["GetCurrentWorkSessionbyUserID"]>;
  kustomerGetCurrentWorkSession(...args: KustomerFullApiOperationArgs<"GetCurrentWorkSession">): Promise<KustomerFullApiOperationResponseMap["GetCurrentWorkSession"]>;
  kustomerUpdateCurrentWorkSession(...args: KustomerFullApiOperationArgs<"UpdateCurrentWorkSession">): Promise<KustomerFullApiOperationResponseMap["UpdateCurrentWorkSession"]>;
  kustomerGetWorkItemsinCurrentWorkSession(...args: KustomerFullApiOperationArgs<"GetWorkItemsinCurrentWorkSession">): Promise<KustomerFullApiOperationResponseMap["GetWorkItemsinCurrentWorkSession"]>;
}

export const KustomerFullApiWorkSessionsCurrentGeneratedFunctionNames = [
  "kustomerGetCurrentWorkSessionbyUserID",
  "kustomerGetCurrentWorkSession",
  "kustomerUpdateCurrentWorkSession",
  "kustomerGetWorkItemsinCurrentWorkSession"
] as const satisfies readonly (keyof KustomerFullApiWorkSessionsCurrentGeneratedClient)[];

export function createKustomerFullApiWorkSessionsCurrentGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiWorkSessionsCurrentGeneratedClient {
  return {
    kustomerGetCurrentWorkSessionbyUserID: (...args) => callOperation("GetCurrentWorkSessionbyUserID", ...(args as KustomerFullApiOperationArgs<"GetCurrentWorkSessionbyUserID">)),
    kustomerGetCurrentWorkSession: (...args) => callOperation("GetCurrentWorkSession", ...(args as KustomerFullApiOperationArgs<"GetCurrentWorkSession">)),
    kustomerUpdateCurrentWorkSession: (...args) => callOperation("UpdateCurrentWorkSession", ...(args as KustomerFullApiOperationArgs<"UpdateCurrentWorkSession">)),
    kustomerGetWorkItemsinCurrentWorkSession: (...args) => callOperation("GetWorkItemsinCurrentWorkSession", ...(args as KustomerFullApiOperationArgs<"GetWorkItemsinCurrentWorkSession">)),
  };
}
