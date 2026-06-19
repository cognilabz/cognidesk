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
export const KustomerFullApiWorkSessionsBySessionIDOperationKeys = [
  "GetWorkSessionbyID",
  "UpdateWorkSessionbyID",
  "GetWorkItemsByWorkSession"
] as const;
export type KustomerFullApiWorkSessionsBySessionIDOperationKey = typeof KustomerFullApiWorkSessionsBySessionIDOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiWorkSessionsBySessionIDOperationPathParamMap {
  "GetWorkSessionbyID": { "id": KustomerFullApiPathParamValue };
  "UpdateWorkSessionbyID": { "id": KustomerFullApiPathParamValue };
  "GetWorkItemsByWorkSession": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiWorkSessionsBySessionIDOperationRequestMap {
  "GetWorkSessionbyID": KustomerFullApiOperationInput<"GetWorkSessionbyID">;
  "UpdateWorkSessionbyID": KustomerFullApiOperationInput<"UpdateWorkSessionbyID">;
  "GetWorkItemsByWorkSession": KustomerFullApiOperationInput<"GetWorkItemsByWorkSession">;
}

export interface KustomerFullApiWorkSessionsBySessionIDGeneratedClient {
  kustomerGetWorkSessionbyID(...args: KustomerFullApiOperationArgs<"GetWorkSessionbyID">): Promise<KustomerFullApiOperationResponseMap["GetWorkSessionbyID"]>;
  kustomerUpdateWorkSessionbyID(...args: KustomerFullApiOperationArgs<"UpdateWorkSessionbyID">): Promise<KustomerFullApiOperationResponseMap["UpdateWorkSessionbyID"]>;
  kustomerGetWorkItemsByWorkSession(...args: KustomerFullApiOperationArgs<"GetWorkItemsByWorkSession">): Promise<KustomerFullApiOperationResponseMap["GetWorkItemsByWorkSession"]>;
}

export const KustomerFullApiWorkSessionsBySessionIDGeneratedFunctionNames = [
  "kustomerGetWorkSessionbyID",
  "kustomerUpdateWorkSessionbyID",
  "kustomerGetWorkItemsByWorkSession"
] as const satisfies readonly (keyof KustomerFullApiWorkSessionsBySessionIDGeneratedClient)[];

export function createKustomerFullApiWorkSessionsBySessionIDGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiWorkSessionsBySessionIDGeneratedClient {
  return {
    kustomerGetWorkSessionbyID: (...args) => callOperation("GetWorkSessionbyID", ...(args as KustomerFullApiOperationArgs<"GetWorkSessionbyID">)),
    kustomerUpdateWorkSessionbyID: (...args) => callOperation("UpdateWorkSessionbyID", ...(args as KustomerFullApiOperationArgs<"UpdateWorkSessionbyID">)),
    kustomerGetWorkItemsByWorkSession: (...args) => callOperation("GetWorkItemsByWorkSession", ...(args as KustomerFullApiOperationArgs<"GetWorkItemsByWorkSession">)),
  };
}
