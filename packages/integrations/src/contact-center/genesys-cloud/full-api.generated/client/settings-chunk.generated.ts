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
export const GenesysCloudFullApiSettingsOperationKeys = [
  "deleteExternalcontactsSettings",
  "getExternalcontactsSettings",
  "getSettingsExecutiondata",
  "patchSettingsExecutiondata",
  "putExternalcontactsSettings"
] as const;
export type GenesysCloudFullApiSettingsOperationKey = typeof GenesysCloudFullApiSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiSettingsOperationPathParamMap {
  "deleteExternalcontactsSettings": {};
  "getExternalcontactsSettings": {};
  "getSettingsExecutiondata": {};
  "patchSettingsExecutiondata": {};
  "putExternalcontactsSettings": {};
}

export interface GenesysCloudFullApiSettingsOperationRequestMap {
  "deleteExternalcontactsSettings": GenesysCloudFullApiOperationInput<"deleteExternalcontactsSettings">;
  "getExternalcontactsSettings": GenesysCloudFullApiOperationInput<"getExternalcontactsSettings">;
  "getSettingsExecutiondata": GenesysCloudFullApiOperationInput<"getSettingsExecutiondata">;
  "patchSettingsExecutiondata": GenesysCloudFullApiOperationInput<"patchSettingsExecutiondata">;
  "putExternalcontactsSettings": GenesysCloudFullApiOperationInput<"putExternalcontactsSettings">;
}

export interface GenesysCloudFullApiSettingsGeneratedClient {
  DeleteExternalcontactsSettings(...args: GenesysCloudFullApiOperationArgs<"deleteExternalcontactsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["deleteExternalcontactsSettings"]>;
  GetExternalcontactsSettings(...args: GenesysCloudFullApiOperationArgs<"getExternalcontactsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getExternalcontactsSettings"]>;
  GetSettingsExecutiondata(...args: GenesysCloudFullApiOperationArgs<"getSettingsExecutiondata">): Promise<GenesysCloudFullApiOperationResponseMap["getSettingsExecutiondata"]>;
  PatchSettingsExecutiondata(...args: GenesysCloudFullApiOperationArgs<"patchSettingsExecutiondata">): Promise<GenesysCloudFullApiOperationResponseMap["patchSettingsExecutiondata"]>;
  PutExternalcontactsSettings(...args: GenesysCloudFullApiOperationArgs<"putExternalcontactsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putExternalcontactsSettings"]>;
}

export const GenesysCloudFullApiSettingsGeneratedFunctionNames = [
  "DeleteExternalcontactsSettings",
  "GetExternalcontactsSettings",
  "GetSettingsExecutiondata",
  "PatchSettingsExecutiondata",
  "PutExternalcontactsSettings"
] as const satisfies readonly (keyof GenesysCloudFullApiSettingsGeneratedClient)[];

export function createGenesysCloudFullApiSettingsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiSettingsGeneratedClient {
  return {
    DeleteExternalcontactsSettings: (...args) => callOperation("deleteExternalcontactsSettings", ...(args as GenesysCloudFullApiOperationArgs<"deleteExternalcontactsSettings">)),
    GetExternalcontactsSettings: (...args) => callOperation("getExternalcontactsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getExternalcontactsSettings">)),
    GetSettingsExecutiondata: (...args) => callOperation("getSettingsExecutiondata", ...(args as GenesysCloudFullApiOperationArgs<"getSettingsExecutiondata">)),
    PatchSettingsExecutiondata: (...args) => callOperation("patchSettingsExecutiondata", ...(args as GenesysCloudFullApiOperationArgs<"patchSettingsExecutiondata">)),
    PutExternalcontactsSettings: (...args) => callOperation("putExternalcontactsSettings", ...(args as GenesysCloudFullApiOperationArgs<"putExternalcontactsSettings">)),
  };
}
