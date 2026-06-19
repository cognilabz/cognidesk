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
export const KustomerFullApiSubStatusesOperationKeys = [
  "GetSubStatuses",
  "CreateSubStatus",
  "DeleteSubStatus",
  "GetSubStatusById",
  "UpdateSubStatus"
] as const;
export type KustomerFullApiSubStatusesOperationKey = typeof KustomerFullApiSubStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSubStatusesOperationPathParamMap {
  "GetSubStatuses": {};
  "CreateSubStatus": {};
  "DeleteSubStatus": { "id": KustomerFullApiPathParamValue };
  "GetSubStatusById": { "id": KustomerFullApiPathParamValue };
  "UpdateSubStatus": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSubStatusesOperationRequestMap {
  "GetSubStatuses": KustomerFullApiOperationInput<"GetSubStatuses">;
  "CreateSubStatus": KustomerFullApiOperationInput<"CreateSubStatus">;
  "DeleteSubStatus": KustomerFullApiOperationInput<"DeleteSubStatus">;
  "GetSubStatusById": KustomerFullApiOperationInput<"GetSubStatusById">;
  "UpdateSubStatus": KustomerFullApiOperationInput<"UpdateSubStatus">;
}

export interface KustomerFullApiSubStatusesGeneratedClient {
  kustomerGetSubStatuses(...args: KustomerFullApiOperationArgs<"GetSubStatuses">): Promise<KustomerFullApiOperationResponseMap["GetSubStatuses"]>;
  kustomerCreateSubStatus(...args: KustomerFullApiOperationArgs<"CreateSubStatus">): Promise<KustomerFullApiOperationResponseMap["CreateSubStatus"]>;
  kustomerDeleteSubStatus(...args: KustomerFullApiOperationArgs<"DeleteSubStatus">): Promise<KustomerFullApiOperationResponseMap["DeleteSubStatus"]>;
  kustomerGetSubStatusById(...args: KustomerFullApiOperationArgs<"GetSubStatusById">): Promise<KustomerFullApiOperationResponseMap["GetSubStatusById"]>;
  kustomerUpdateSubStatus(...args: KustomerFullApiOperationArgs<"UpdateSubStatus">): Promise<KustomerFullApiOperationResponseMap["UpdateSubStatus"]>;
}

export const KustomerFullApiSubStatusesGeneratedFunctionNames = [
  "kustomerGetSubStatuses",
  "kustomerCreateSubStatus",
  "kustomerDeleteSubStatus",
  "kustomerGetSubStatusById",
  "kustomerUpdateSubStatus"
] as const satisfies readonly (keyof KustomerFullApiSubStatusesGeneratedClient)[];

export function createKustomerFullApiSubStatusesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSubStatusesGeneratedClient {
  return {
    kustomerGetSubStatuses: (...args) => callOperation("GetSubStatuses", ...(args as KustomerFullApiOperationArgs<"GetSubStatuses">)),
    kustomerCreateSubStatus: (...args) => callOperation("CreateSubStatus", ...(args as KustomerFullApiOperationArgs<"CreateSubStatus">)),
    kustomerDeleteSubStatus: (...args) => callOperation("DeleteSubStatus", ...(args as KustomerFullApiOperationArgs<"DeleteSubStatus">)),
    kustomerGetSubStatusById: (...args) => callOperation("GetSubStatusById", ...(args as KustomerFullApiOperationArgs<"GetSubStatusById">)),
    kustomerUpdateSubStatus: (...args) => callOperation("UpdateSubStatus", ...(args as KustomerFullApiOperationArgs<"UpdateSubStatus">)),
  };
}
