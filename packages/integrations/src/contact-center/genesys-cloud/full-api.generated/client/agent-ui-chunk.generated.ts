// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiAgentUIOperationKeys = [
  "deleteUsersAgentuiAgentsAutoanswerAgentIdSettings",
  "getUsersAgentuiAgentsAutoanswerAgentIdSettings",
  "patchUsersAgentuiAgentsAutoanswerAgentIdSettings",
  "putUsersAgentuiAgentsAutoanswerAgentIdSettings"
] as const;
export type GenesysCloudFullApiAgentUIOperationKey = typeof GenesysCloudFullApiAgentUIOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAgentUIOperationPathParamMap {
  "deleteUsersAgentuiAgentsAutoanswerAgentIdSettings": { "agentId": GenesysCloudFullApiPathParamValue };
  "getUsersAgentuiAgentsAutoanswerAgentIdSettings": { "agentId": GenesysCloudFullApiPathParamValue };
  "patchUsersAgentuiAgentsAutoanswerAgentIdSettings": { "agentId": GenesysCloudFullApiPathParamValue };
  "putUsersAgentuiAgentsAutoanswerAgentIdSettings": { "agentId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiAgentUIOperationRequestMap {
  "deleteUsersAgentuiAgentsAutoanswerAgentIdSettings": GenesysCloudFullApiOperationInput<"deleteUsersAgentuiAgentsAutoanswerAgentIdSettings">;
  "getUsersAgentuiAgentsAutoanswerAgentIdSettings": GenesysCloudFullApiOperationInput<"getUsersAgentuiAgentsAutoanswerAgentIdSettings">;
  "patchUsersAgentuiAgentsAutoanswerAgentIdSettings": GenesysCloudFullApiOperationInput<"patchUsersAgentuiAgentsAutoanswerAgentIdSettings">;
  "putUsersAgentuiAgentsAutoanswerAgentIdSettings": GenesysCloudFullApiOperationInput<"putUsersAgentuiAgentsAutoanswerAgentIdSettings">;
}

export interface GenesysCloudFullApiAgentUIGeneratedClient {
  DeleteUsersAgentuiAgentsAutoanswerAgentIdSettings(...args: GenesysCloudFullApiOperationArgs<"deleteUsersAgentuiAgentsAutoanswerAgentIdSettings">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUsersAgentuiAgentsAutoanswerAgentIdSettings"]>;
  GetUsersAgentuiAgentsAutoanswerAgentIdSettings(...args: GenesysCloudFullApiOperationArgs<"getUsersAgentuiAgentsAutoanswerAgentIdSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersAgentuiAgentsAutoanswerAgentIdSettings"]>;
  PatchUsersAgentuiAgentsAutoanswerAgentIdSettings(...args: GenesysCloudFullApiOperationArgs<"patchUsersAgentuiAgentsAutoanswerAgentIdSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchUsersAgentuiAgentsAutoanswerAgentIdSettings"]>;
  PutUsersAgentuiAgentsAutoanswerAgentIdSettings(...args: GenesysCloudFullApiOperationArgs<"putUsersAgentuiAgentsAutoanswerAgentIdSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putUsersAgentuiAgentsAutoanswerAgentIdSettings"]>;
}

export const GenesysCloudFullApiAgentUIGeneratedFunctionNames = [
  "DeleteUsersAgentuiAgentsAutoanswerAgentIdSettings",
  "GetUsersAgentuiAgentsAutoanswerAgentIdSettings",
  "PatchUsersAgentuiAgentsAutoanswerAgentIdSettings",
  "PutUsersAgentuiAgentsAutoanswerAgentIdSettings"
] as const satisfies readonly (keyof GenesysCloudFullApiAgentUIGeneratedClient)[];

export function createGenesysCloudFullApiAgentUIGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAgentUIGeneratedClient {
  return {
    DeleteUsersAgentuiAgentsAutoanswerAgentIdSettings: (...args) => callOperation("deleteUsersAgentuiAgentsAutoanswerAgentIdSettings", ...(args as GenesysCloudFullApiOperationArgs<"deleteUsersAgentuiAgentsAutoanswerAgentIdSettings">)),
    GetUsersAgentuiAgentsAutoanswerAgentIdSettings: (...args) => callOperation("getUsersAgentuiAgentsAutoanswerAgentIdSettings", ...(args as GenesysCloudFullApiOperationArgs<"getUsersAgentuiAgentsAutoanswerAgentIdSettings">)),
    PatchUsersAgentuiAgentsAutoanswerAgentIdSettings: (...args) => callOperation("patchUsersAgentuiAgentsAutoanswerAgentIdSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchUsersAgentuiAgentsAutoanswerAgentIdSettings">)),
    PutUsersAgentuiAgentsAutoanswerAgentIdSettings: (...args) => callOperation("putUsersAgentuiAgentsAutoanswerAgentIdSettings", ...(args as GenesysCloudFullApiOperationArgs<"putUsersAgentuiAgentsAutoanswerAgentIdSettings">)),
  };
}
