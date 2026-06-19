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
export const KustomerFullApiDraftsOperationKeys = [
  "DeleteaDraft",
  "UpdateaDraft",
  "GetaDraftForwardByID",
  "UpdateaDraftForward",
  "GetOutboundAccounts"
] as const;
export type KustomerFullApiDraftsOperationKey = typeof KustomerFullApiDraftsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiDraftsOperationPathParamMap {
  "DeleteaDraft": { "id": KustomerFullApiPathParamValue };
  "UpdateaDraft": { "id": KustomerFullApiPathParamValue };
  "GetaDraftForwardByID": { "id": KustomerFullApiPathParamValue };
  "UpdateaDraftForward": { "id": KustomerFullApiPathParamValue };
  "GetOutboundAccounts": {};
}

export interface KustomerFullApiDraftsOperationRequestMap {
  "DeleteaDraft": KustomerFullApiOperationInput<"DeleteaDraft">;
  "UpdateaDraft": KustomerFullApiOperationInput<"UpdateaDraft">;
  "GetaDraftForwardByID": KustomerFullApiOperationInput<"GetaDraftForwardByID">;
  "UpdateaDraftForward": KustomerFullApiOperationInput<"UpdateaDraftForward">;
  "GetOutboundAccounts": KustomerFullApiOperationInput<"GetOutboundAccounts">;
}

export interface KustomerFullApiDraftsGeneratedClient {
  kustomerDeleteaDraft(...args: KustomerFullApiOperationArgs<"DeleteaDraft">): Promise<KustomerFullApiOperationResponseMap["DeleteaDraft"]>;
  kustomerUpdateaDraft(...args: KustomerFullApiOperationArgs<"UpdateaDraft">): Promise<KustomerFullApiOperationResponseMap["UpdateaDraft"]>;
  kustomerGetaDraftForwardByID(...args: KustomerFullApiOperationArgs<"GetaDraftForwardByID">): Promise<KustomerFullApiOperationResponseMap["GetaDraftForwardByID"]>;
  kustomerUpdateaDraftForward(...args: KustomerFullApiOperationArgs<"UpdateaDraftForward">): Promise<KustomerFullApiOperationResponseMap["UpdateaDraftForward"]>;
  kustomerGetOutboundAccounts(...args: KustomerFullApiOperationArgs<"GetOutboundAccounts">): Promise<KustomerFullApiOperationResponseMap["GetOutboundAccounts"]>;
}

export const KustomerFullApiDraftsGeneratedFunctionNames = [
  "kustomerDeleteaDraft",
  "kustomerUpdateaDraft",
  "kustomerGetaDraftForwardByID",
  "kustomerUpdateaDraftForward",
  "kustomerGetOutboundAccounts"
] as const satisfies readonly (keyof KustomerFullApiDraftsGeneratedClient)[];

export function createKustomerFullApiDraftsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiDraftsGeneratedClient {
  return {
    kustomerDeleteaDraft: (...args) => callOperation("DeleteaDraft", ...(args as KustomerFullApiOperationArgs<"DeleteaDraft">)),
    kustomerUpdateaDraft: (...args) => callOperation("UpdateaDraft", ...(args as KustomerFullApiOperationArgs<"UpdateaDraft">)),
    kustomerGetaDraftForwardByID: (...args) => callOperation("GetaDraftForwardByID", ...(args as KustomerFullApiOperationArgs<"GetaDraftForwardByID">)),
    kustomerUpdateaDraftForward: (...args) => callOperation("UpdateaDraftForward", ...(args as KustomerFullApiOperationArgs<"UpdateaDraftForward">)),
    kustomerGetOutboundAccounts: (...args) => callOperation("GetOutboundAccounts", ...(args as KustomerFullApiOperationArgs<"GetOutboundAccounts">)),
  };
}
