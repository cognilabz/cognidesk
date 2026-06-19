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
export const KustomerFullApiRoutingUserStatusesOperationKeys = [
  "GetRoutingUserStatuses",
  "CreateRoutingUserStatus",
  "GetRoutingUserStatus",
  "UpdateRoutingUserStatus"
] as const;
export type KustomerFullApiRoutingUserStatusesOperationKey = typeof KustomerFullApiRoutingUserStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiRoutingUserStatusesOperationPathParamMap {
  "GetRoutingUserStatuses": {};
  "CreateRoutingUserStatus": {};
  "GetRoutingUserStatus": { "id": KustomerFullApiPathParamValue };
  "UpdateRoutingUserStatus": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiRoutingUserStatusesOperationRequestMap {
  "GetRoutingUserStatuses": KustomerFullApiOperationInput<"GetRoutingUserStatuses">;
  "CreateRoutingUserStatus": KustomerFullApiOperationInput<"CreateRoutingUserStatus">;
  "GetRoutingUserStatus": KustomerFullApiOperationInput<"GetRoutingUserStatus">;
  "UpdateRoutingUserStatus": KustomerFullApiOperationInput<"UpdateRoutingUserStatus">;
}

export interface KustomerFullApiRoutingUserStatusesGeneratedClient {
  kustomerGetRoutingUserStatuses(...args: KustomerFullApiOperationArgs<"GetRoutingUserStatuses">): Promise<KustomerFullApiOperationResponseMap["GetRoutingUserStatuses"]>;
  kustomerCreateRoutingUserStatus(...args: KustomerFullApiOperationArgs<"CreateRoutingUserStatus">): Promise<KustomerFullApiOperationResponseMap["CreateRoutingUserStatus"]>;
  kustomerGetRoutingUserStatus(...args: KustomerFullApiOperationArgs<"GetRoutingUserStatus">): Promise<KustomerFullApiOperationResponseMap["GetRoutingUserStatus"]>;
  kustomerUpdateRoutingUserStatus(...args: KustomerFullApiOperationArgs<"UpdateRoutingUserStatus">): Promise<KustomerFullApiOperationResponseMap["UpdateRoutingUserStatus"]>;
}

export const KustomerFullApiRoutingUserStatusesGeneratedFunctionNames = [
  "kustomerGetRoutingUserStatuses",
  "kustomerCreateRoutingUserStatus",
  "kustomerGetRoutingUserStatus",
  "kustomerUpdateRoutingUserStatus"
] as const satisfies readonly (keyof KustomerFullApiRoutingUserStatusesGeneratedClient)[];

export function createKustomerFullApiRoutingUserStatusesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiRoutingUserStatusesGeneratedClient {
  return {
    kustomerGetRoutingUserStatuses: (...args) => callOperation("GetRoutingUserStatuses", ...(args as KustomerFullApiOperationArgs<"GetRoutingUserStatuses">)),
    kustomerCreateRoutingUserStatus: (...args) => callOperation("CreateRoutingUserStatus", ...(args as KustomerFullApiOperationArgs<"CreateRoutingUserStatus">)),
    kustomerGetRoutingUserStatus: (...args) => callOperation("GetRoutingUserStatus", ...(args as KustomerFullApiOperationArgs<"GetRoutingUserStatus">)),
    kustomerUpdateRoutingUserStatus: (...args) => callOperation("UpdateRoutingUserStatus", ...(args as KustomerFullApiOperationArgs<"UpdateRoutingUserStatus">)),
  };
}
