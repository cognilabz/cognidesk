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
export const KustomerFullApiWorkSessionsOperationKeys = [
  "GetWorkSessionsbyQueueID",
  "GetWorkSessionsbyUserID",
  "GetWorkSessions"
] as const;
export type KustomerFullApiWorkSessionsOperationKey = typeof KustomerFullApiWorkSessionsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiWorkSessionsOperationPathParamMap {
  "GetWorkSessionsbyQueueID": { "id": KustomerFullApiPathParamValue };
  "GetWorkSessionsbyUserID": { "id": KustomerFullApiPathParamValue };
  "GetWorkSessions": {};
}

export interface KustomerFullApiWorkSessionsOperationRequestMap {
  "GetWorkSessionsbyQueueID": KustomerFullApiOperationInput<"GetWorkSessionsbyQueueID">;
  "GetWorkSessionsbyUserID": KustomerFullApiOperationInput<"GetWorkSessionsbyUserID">;
  "GetWorkSessions": KustomerFullApiOperationInput<"GetWorkSessions">;
}

export interface KustomerFullApiWorkSessionsGeneratedClient {
  kustomerGetWorkSessionsbyQueueID(...args: KustomerFullApiOperationArgs<"GetWorkSessionsbyQueueID">): Promise<KustomerFullApiOperationResponseMap["GetWorkSessionsbyQueueID"]>;
  kustomerGetWorkSessionsbyUserID(...args: KustomerFullApiOperationArgs<"GetWorkSessionsbyUserID">): Promise<KustomerFullApiOperationResponseMap["GetWorkSessionsbyUserID"]>;
  kustomerGetWorkSessions(...args: KustomerFullApiOperationArgs<"GetWorkSessions">): Promise<KustomerFullApiOperationResponseMap["GetWorkSessions"]>;
}

export const KustomerFullApiWorkSessionsGeneratedFunctionNames = [
  "kustomerGetWorkSessionsbyQueueID",
  "kustomerGetWorkSessionsbyUserID",
  "kustomerGetWorkSessions"
] as const satisfies readonly (keyof KustomerFullApiWorkSessionsGeneratedClient)[];

export function createKustomerFullApiWorkSessionsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiWorkSessionsGeneratedClient {
  return {
    kustomerGetWorkSessionsbyQueueID: (...args) => callOperation("GetWorkSessionsbyQueueID", ...(args as KustomerFullApiOperationArgs<"GetWorkSessionsbyQueueID">)),
    kustomerGetWorkSessionsbyUserID: (...args) => callOperation("GetWorkSessionsbyUserID", ...(args as KustomerFullApiOperationArgs<"GetWorkSessionsbyUserID">)),
    kustomerGetWorkSessions: (...args) => callOperation("GetWorkSessions", ...(args as KustomerFullApiOperationArgs<"GetWorkSessions">)),
  };
}
