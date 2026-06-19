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
export const GenesysCloudFullApiEmailsOperationKeys = [
  "deleteEmailsSettingsThreading",
  "getEmailsSettings",
  "getEmailsSettingsThreading",
  "patchEmailsSettings",
  "patchEmailsSettingsThreading"
] as const;
export type GenesysCloudFullApiEmailsOperationKey = typeof GenesysCloudFullApiEmailsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiEmailsOperationPathParamMap {
  "deleteEmailsSettingsThreading": {};
  "getEmailsSettings": {};
  "getEmailsSettingsThreading": {};
  "patchEmailsSettings": {};
  "patchEmailsSettingsThreading": {};
}

export interface GenesysCloudFullApiEmailsOperationRequestMap {
  "deleteEmailsSettingsThreading": GenesysCloudFullApiOperationInput<"deleteEmailsSettingsThreading">;
  "getEmailsSettings": GenesysCloudFullApiOperationInput<"getEmailsSettings">;
  "getEmailsSettingsThreading": GenesysCloudFullApiOperationInput<"getEmailsSettingsThreading">;
  "patchEmailsSettings": GenesysCloudFullApiOperationInput<"patchEmailsSettings">;
  "patchEmailsSettingsThreading": GenesysCloudFullApiOperationInput<"patchEmailsSettingsThreading">;
}

export interface GenesysCloudFullApiEmailsGeneratedClient {
  DeleteEmailsSettingsThreading(...args: GenesysCloudFullApiOperationArgs<"deleteEmailsSettingsThreading">): Promise<GenesysCloudFullApiOperationResponseMap["deleteEmailsSettingsThreading"]>;
  GetEmailsSettings(...args: GenesysCloudFullApiOperationArgs<"getEmailsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getEmailsSettings"]>;
  GetEmailsSettingsThreading(...args: GenesysCloudFullApiOperationArgs<"getEmailsSettingsThreading">): Promise<GenesysCloudFullApiOperationResponseMap["getEmailsSettingsThreading"]>;
  PatchEmailsSettings(...args: GenesysCloudFullApiOperationArgs<"patchEmailsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchEmailsSettings"]>;
  PatchEmailsSettingsThreading(...args: GenesysCloudFullApiOperationArgs<"patchEmailsSettingsThreading">): Promise<GenesysCloudFullApiOperationResponseMap["patchEmailsSettingsThreading"]>;
}

export const GenesysCloudFullApiEmailsGeneratedFunctionNames = [
  "DeleteEmailsSettingsThreading",
  "GetEmailsSettings",
  "GetEmailsSettingsThreading",
  "PatchEmailsSettings",
  "PatchEmailsSettingsThreading"
] as const satisfies readonly (keyof GenesysCloudFullApiEmailsGeneratedClient)[];

export function createGenesysCloudFullApiEmailsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiEmailsGeneratedClient {
  return {
    DeleteEmailsSettingsThreading: (...args) => callOperation("deleteEmailsSettingsThreading", ...(args as GenesysCloudFullApiOperationArgs<"deleteEmailsSettingsThreading">)),
    GetEmailsSettings: (...args) => callOperation("getEmailsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getEmailsSettings">)),
    GetEmailsSettingsThreading: (...args) => callOperation("getEmailsSettingsThreading", ...(args as GenesysCloudFullApiOperationArgs<"getEmailsSettingsThreading">)),
    PatchEmailsSettings: (...args) => callOperation("patchEmailsSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchEmailsSettings">)),
    PatchEmailsSettingsThreading: (...args) => callOperation("patchEmailsSettingsThreading", ...(args as GenesysCloudFullApiOperationArgs<"patchEmailsSettingsThreading">)),
  };
}
