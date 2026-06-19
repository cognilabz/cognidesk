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
export const KustomerFullApiTeamsByIDOperationKeys = [
  "DeleteTeam",
  "GetTeambyID",
  "UpdateTeamAttributes",
  "UpdateTeambyID"
] as const;
export type KustomerFullApiTeamsByIDOperationKey = typeof KustomerFullApiTeamsByIDOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiTeamsByIDOperationPathParamMap {
  "DeleteTeam": { "id": KustomerFullApiPathParamValue };
  "GetTeambyID": { "id": KustomerFullApiPathParamValue };
  "UpdateTeamAttributes": { "id": KustomerFullApiPathParamValue };
  "UpdateTeambyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiTeamsByIDOperationRequestMap {
  "DeleteTeam": KustomerFullApiOperationInput<"DeleteTeam">;
  "GetTeambyID": KustomerFullApiOperationInput<"GetTeambyID">;
  "UpdateTeamAttributes": KustomerFullApiOperationInput<"UpdateTeamAttributes">;
  "UpdateTeambyID": KustomerFullApiOperationInput<"UpdateTeambyID">;
}

export interface KustomerFullApiTeamsByIDGeneratedClient {
  kustomerDeleteTeam(...args: KustomerFullApiOperationArgs<"DeleteTeam">): Promise<KustomerFullApiOperationResponseMap["DeleteTeam"]>;
  kustomerGetTeambyID(...args: KustomerFullApiOperationArgs<"GetTeambyID">): Promise<KustomerFullApiOperationResponseMap["GetTeambyID"]>;
  kustomerUpdateTeamAttributes(...args: KustomerFullApiOperationArgs<"UpdateTeamAttributes">): Promise<KustomerFullApiOperationResponseMap["UpdateTeamAttributes"]>;
  kustomerUpdateTeambyID(...args: KustomerFullApiOperationArgs<"UpdateTeambyID">): Promise<KustomerFullApiOperationResponseMap["UpdateTeambyID"]>;
}

export const KustomerFullApiTeamsByIDGeneratedFunctionNames = [
  "kustomerDeleteTeam",
  "kustomerGetTeambyID",
  "kustomerUpdateTeamAttributes",
  "kustomerUpdateTeambyID"
] as const satisfies readonly (keyof KustomerFullApiTeamsByIDGeneratedClient)[];

export function createKustomerFullApiTeamsByIDGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiTeamsByIDGeneratedClient {
  return {
    kustomerDeleteTeam: (...args) => callOperation("DeleteTeam", ...(args as KustomerFullApiOperationArgs<"DeleteTeam">)),
    kustomerGetTeambyID: (...args) => callOperation("GetTeambyID", ...(args as KustomerFullApiOperationArgs<"GetTeambyID">)),
    kustomerUpdateTeamAttributes: (...args) => callOperation("UpdateTeamAttributes", ...(args as KustomerFullApiOperationArgs<"UpdateTeamAttributes">)),
    kustomerUpdateTeambyID: (...args) => callOperation("UpdateTeambyID", ...(args as KustomerFullApiOperationArgs<"UpdateTeambyID">)),
  };
}
