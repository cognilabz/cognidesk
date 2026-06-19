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
export const GenesysCloudFullApiLicenseOperationKeys = [
  "getLicenseDefinition",
  "getLicenseDefinitions",
  "getLicenseToggle",
  "getLicenseUser",
  "getLicenseUsers",
  "postLicenseInfer",
  "postLicenseOrganization",
  "postLicenseToggle",
  "postLicenseUsers"
] as const;
export type GenesysCloudFullApiLicenseOperationKey = typeof GenesysCloudFullApiLicenseOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiLicenseOperationPathParamMap {
  "getLicenseDefinition": { "licenseId": GenesysCloudFullApiPathParamValue };
  "getLicenseDefinitions": {};
  "getLicenseToggle": { "featureName": GenesysCloudFullApiPathParamValue };
  "getLicenseUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getLicenseUsers": {};
  "postLicenseInfer": {};
  "postLicenseOrganization": {};
  "postLicenseToggle": { "featureName": GenesysCloudFullApiPathParamValue };
  "postLicenseUsers": {};
}

export interface GenesysCloudFullApiLicenseOperationRequestMap {
  "getLicenseDefinition": GenesysCloudFullApiOperationInput<"getLicenseDefinition">;
  "getLicenseDefinitions": GenesysCloudFullApiOperationInput<"getLicenseDefinitions">;
  "getLicenseToggle": GenesysCloudFullApiOperationInput<"getLicenseToggle">;
  "getLicenseUser": GenesysCloudFullApiOperationInput<"getLicenseUser">;
  "getLicenseUsers": GenesysCloudFullApiOperationInput<"getLicenseUsers">;
  "postLicenseInfer": GenesysCloudFullApiOperationInput<"postLicenseInfer">;
  "postLicenseOrganization": GenesysCloudFullApiOperationInput<"postLicenseOrganization">;
  "postLicenseToggle": GenesysCloudFullApiOperationInput<"postLicenseToggle">;
  "postLicenseUsers": GenesysCloudFullApiOperationInput<"postLicenseUsers">;
}

export interface GenesysCloudFullApiLicenseGeneratedClient {
  GetLicenseDefinition(...args: GenesysCloudFullApiOperationArgs<"getLicenseDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["getLicenseDefinition"]>;
  GetLicenseDefinitions(...args: GenesysCloudFullApiOperationArgs<"getLicenseDefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["getLicenseDefinitions"]>;
  GetLicenseToggle(...args: GenesysCloudFullApiOperationArgs<"getLicenseToggle">): Promise<GenesysCloudFullApiOperationResponseMap["getLicenseToggle"]>;
  GetLicenseUser(...args: GenesysCloudFullApiOperationArgs<"getLicenseUser">): Promise<GenesysCloudFullApiOperationResponseMap["getLicenseUser"]>;
  GetLicenseUsers(...args: GenesysCloudFullApiOperationArgs<"getLicenseUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getLicenseUsers"]>;
  PostLicenseInfer(...args: GenesysCloudFullApiOperationArgs<"postLicenseInfer">): Promise<GenesysCloudFullApiOperationResponseMap["postLicenseInfer"]>;
  PostLicenseOrganization(...args: GenesysCloudFullApiOperationArgs<"postLicenseOrganization">): Promise<GenesysCloudFullApiOperationResponseMap["postLicenseOrganization"]>;
  PostLicenseToggle(...args: GenesysCloudFullApiOperationArgs<"postLicenseToggle">): Promise<GenesysCloudFullApiOperationResponseMap["postLicenseToggle"]>;
  PostLicenseUsers(...args: GenesysCloudFullApiOperationArgs<"postLicenseUsers">): Promise<GenesysCloudFullApiOperationResponseMap["postLicenseUsers"]>;
}

export const GenesysCloudFullApiLicenseGeneratedFunctionNames = [
  "GetLicenseDefinition",
  "GetLicenseDefinitions",
  "GetLicenseToggle",
  "GetLicenseUser",
  "GetLicenseUsers",
  "PostLicenseInfer",
  "PostLicenseOrganization",
  "PostLicenseToggle",
  "PostLicenseUsers"
] as const satisfies readonly (keyof GenesysCloudFullApiLicenseGeneratedClient)[];

export function createGenesysCloudFullApiLicenseGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiLicenseGeneratedClient {
  return {
    GetLicenseDefinition: (...args) => callOperation("getLicenseDefinition", ...(args as GenesysCloudFullApiOperationArgs<"getLicenseDefinition">)),
    GetLicenseDefinitions: (...args) => callOperation("getLicenseDefinitions", ...(args as GenesysCloudFullApiOperationArgs<"getLicenseDefinitions">)),
    GetLicenseToggle: (...args) => callOperation("getLicenseToggle", ...(args as GenesysCloudFullApiOperationArgs<"getLicenseToggle">)),
    GetLicenseUser: (...args) => callOperation("getLicenseUser", ...(args as GenesysCloudFullApiOperationArgs<"getLicenseUser">)),
    GetLicenseUsers: (...args) => callOperation("getLicenseUsers", ...(args as GenesysCloudFullApiOperationArgs<"getLicenseUsers">)),
    PostLicenseInfer: (...args) => callOperation("postLicenseInfer", ...(args as GenesysCloudFullApiOperationArgs<"postLicenseInfer">)),
    PostLicenseOrganization: (...args) => callOperation("postLicenseOrganization", ...(args as GenesysCloudFullApiOperationArgs<"postLicenseOrganization">)),
    PostLicenseToggle: (...args) => callOperation("postLicenseToggle", ...(args as GenesysCloudFullApiOperationArgs<"postLicenseToggle">)),
    PostLicenseUsers: (...args) => callOperation("postLicenseUsers", ...(args as GenesysCloudFullApiOperationArgs<"postLicenseUsers">)),
  };
}
