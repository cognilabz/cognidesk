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
export const GenesysCloudFullApiOrganizationOperationKeys = [
  "getOrganizationsAuthenticationSettings",
  "getOrganizationsEmbeddedintegration",
  "getOrganizationsIpaddressauthentication",
  "getOrganizationsLimitsChangerequest",
  "getOrganizationsLimitsChangerequests",
  "getOrganizationsLimitsDocs",
  "getOrganizationsLimitsDocsFreetrial",
  "getOrganizationsLimitsNamespace",
  "getOrganizationsLimitsNamespaceDefaults",
  "getOrganizationsLimitsNamespaces",
  "getOrganizationsMe",
  "getOrganizationsWhitelist",
  "patchOrganizationsAuthenticationSettings",
  "patchOrganizationsFeature",
  "putOrganizationsEmbeddedintegration",
  "putOrganizationsIpaddressauthentication",
  "putOrganizationsMe",
  "putOrganizationsWhitelist"
] as const;
export type GenesysCloudFullApiOrganizationOperationKey = typeof GenesysCloudFullApiOrganizationOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiOrganizationOperationPathParamMap {
  "getOrganizationsAuthenticationSettings": {};
  "getOrganizationsEmbeddedintegration": {};
  "getOrganizationsIpaddressauthentication": {};
  "getOrganizationsLimitsChangerequest": { "requestId": GenesysCloudFullApiPathParamValue };
  "getOrganizationsLimitsChangerequests": {};
  "getOrganizationsLimitsDocs": {};
  "getOrganizationsLimitsDocsFreetrial": {};
  "getOrganizationsLimitsNamespace": { "namespaceName": GenesysCloudFullApiPathParamValue };
  "getOrganizationsLimitsNamespaceDefaults": { "namespaceName": GenesysCloudFullApiPathParamValue };
  "getOrganizationsLimitsNamespaces": {};
  "getOrganizationsMe": {};
  "getOrganizationsWhitelist": {};
  "patchOrganizationsAuthenticationSettings": {};
  "patchOrganizationsFeature": { "featureName": GenesysCloudFullApiPathParamValue };
  "putOrganizationsEmbeddedintegration": {};
  "putOrganizationsIpaddressauthentication": {};
  "putOrganizationsMe": {};
  "putOrganizationsWhitelist": {};
}

export interface GenesysCloudFullApiOrganizationOperationRequestMap {
  "getOrganizationsAuthenticationSettings": GenesysCloudFullApiOperationInput<"getOrganizationsAuthenticationSettings">;
  "getOrganizationsEmbeddedintegration": GenesysCloudFullApiOperationInput<"getOrganizationsEmbeddedintegration">;
  "getOrganizationsIpaddressauthentication": GenesysCloudFullApiOperationInput<"getOrganizationsIpaddressauthentication">;
  "getOrganizationsLimitsChangerequest": GenesysCloudFullApiOperationInput<"getOrganizationsLimitsChangerequest">;
  "getOrganizationsLimitsChangerequests": GenesysCloudFullApiOperationInput<"getOrganizationsLimitsChangerequests">;
  "getOrganizationsLimitsDocs": GenesysCloudFullApiOperationInput<"getOrganizationsLimitsDocs">;
  "getOrganizationsLimitsDocsFreetrial": GenesysCloudFullApiOperationInput<"getOrganizationsLimitsDocsFreetrial">;
  "getOrganizationsLimitsNamespace": GenesysCloudFullApiOperationInput<"getOrganizationsLimitsNamespace">;
  "getOrganizationsLimitsNamespaceDefaults": GenesysCloudFullApiOperationInput<"getOrganizationsLimitsNamespaceDefaults">;
  "getOrganizationsLimitsNamespaces": GenesysCloudFullApiOperationInput<"getOrganizationsLimitsNamespaces">;
  "getOrganizationsMe": GenesysCloudFullApiOperationInput<"getOrganizationsMe">;
  "getOrganizationsWhitelist": GenesysCloudFullApiOperationInput<"getOrganizationsWhitelist">;
  "patchOrganizationsAuthenticationSettings": GenesysCloudFullApiOperationInput<"patchOrganizationsAuthenticationSettings">;
  "patchOrganizationsFeature": GenesysCloudFullApiOperationInput<"patchOrganizationsFeature">;
  "putOrganizationsEmbeddedintegration": GenesysCloudFullApiOperationInput<"putOrganizationsEmbeddedintegration">;
  "putOrganizationsIpaddressauthentication": GenesysCloudFullApiOperationInput<"putOrganizationsIpaddressauthentication">;
  "putOrganizationsMe": GenesysCloudFullApiOperationInput<"putOrganizationsMe">;
  "putOrganizationsWhitelist": GenesysCloudFullApiOperationInput<"putOrganizationsWhitelist">;
}

export interface GenesysCloudFullApiOrganizationGeneratedClient {
  GetOrganizationsAuthenticationSettings(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsAuthenticationSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsAuthenticationSettings"]>;
  GetOrganizationsEmbeddedintegration(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsEmbeddedintegration">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsEmbeddedintegration"]>;
  GetOrganizationsIpaddressauthentication(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsIpaddressauthentication">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsIpaddressauthentication"]>;
  GetOrganizationsLimitsChangerequest(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsChangerequest">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsLimitsChangerequest"]>;
  GetOrganizationsLimitsChangerequests(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsChangerequests">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsLimitsChangerequests"]>;
  GetOrganizationsLimitsDocs(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsDocs">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsLimitsDocs"]>;
  GetOrganizationsLimitsDocsFreetrial(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsDocsFreetrial">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsLimitsDocsFreetrial"]>;
  GetOrganizationsLimitsNamespace(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsNamespace">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsLimitsNamespace"]>;
  GetOrganizationsLimitsNamespaceDefaults(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsNamespaceDefaults">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsLimitsNamespaceDefaults"]>;
  GetOrganizationsLimitsNamespaces(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsNamespaces">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsLimitsNamespaces"]>;
  GetOrganizationsMe(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsMe"]>;
  GetOrganizationsWhitelist(...args: GenesysCloudFullApiOperationArgs<"getOrganizationsWhitelist">): Promise<GenesysCloudFullApiOperationResponseMap["getOrganizationsWhitelist"]>;
  PatchOrganizationsAuthenticationSettings(...args: GenesysCloudFullApiOperationArgs<"patchOrganizationsAuthenticationSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchOrganizationsAuthenticationSettings"]>;
  PatchOrganizationsFeature(...args: GenesysCloudFullApiOperationArgs<"patchOrganizationsFeature">): Promise<GenesysCloudFullApiOperationResponseMap["patchOrganizationsFeature"]>;
  PutOrganizationsEmbeddedintegration(...args: GenesysCloudFullApiOperationArgs<"putOrganizationsEmbeddedintegration">): Promise<GenesysCloudFullApiOperationResponseMap["putOrganizationsEmbeddedintegration"]>;
  PutOrganizationsIpaddressauthentication(...args: GenesysCloudFullApiOperationArgs<"putOrganizationsIpaddressauthentication">): Promise<GenesysCloudFullApiOperationResponseMap["putOrganizationsIpaddressauthentication"]>;
  PutOrganizationsMe(...args: GenesysCloudFullApiOperationArgs<"putOrganizationsMe">): Promise<GenesysCloudFullApiOperationResponseMap["putOrganizationsMe"]>;
  PutOrganizationsWhitelist(...args: GenesysCloudFullApiOperationArgs<"putOrganizationsWhitelist">): Promise<GenesysCloudFullApiOperationResponseMap["putOrganizationsWhitelist"]>;
}

export const GenesysCloudFullApiOrganizationGeneratedFunctionNames = [
  "GetOrganizationsAuthenticationSettings",
  "GetOrganizationsEmbeddedintegration",
  "GetOrganizationsIpaddressauthentication",
  "GetOrganizationsLimitsChangerequest",
  "GetOrganizationsLimitsChangerequests",
  "GetOrganizationsLimitsDocs",
  "GetOrganizationsLimitsDocsFreetrial",
  "GetOrganizationsLimitsNamespace",
  "GetOrganizationsLimitsNamespaceDefaults",
  "GetOrganizationsLimitsNamespaces",
  "GetOrganizationsMe",
  "GetOrganizationsWhitelist",
  "PatchOrganizationsAuthenticationSettings",
  "PatchOrganizationsFeature",
  "PutOrganizationsEmbeddedintegration",
  "PutOrganizationsIpaddressauthentication",
  "PutOrganizationsMe",
  "PutOrganizationsWhitelist"
] as const satisfies readonly (keyof GenesysCloudFullApiOrganizationGeneratedClient)[];

export function createGenesysCloudFullApiOrganizationGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiOrganizationGeneratedClient {
  return {
    GetOrganizationsAuthenticationSettings: (...args) => callOperation("getOrganizationsAuthenticationSettings", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsAuthenticationSettings">)),
    GetOrganizationsEmbeddedintegration: (...args) => callOperation("getOrganizationsEmbeddedintegration", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsEmbeddedintegration">)),
    GetOrganizationsIpaddressauthentication: (...args) => callOperation("getOrganizationsIpaddressauthentication", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsIpaddressauthentication">)),
    GetOrganizationsLimitsChangerequest: (...args) => callOperation("getOrganizationsLimitsChangerequest", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsChangerequest">)),
    GetOrganizationsLimitsChangerequests: (...args) => callOperation("getOrganizationsLimitsChangerequests", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsChangerequests">)),
    GetOrganizationsLimitsDocs: (...args) => callOperation("getOrganizationsLimitsDocs", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsDocs">)),
    GetOrganizationsLimitsDocsFreetrial: (...args) => callOperation("getOrganizationsLimitsDocsFreetrial", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsDocsFreetrial">)),
    GetOrganizationsLimitsNamespace: (...args) => callOperation("getOrganizationsLimitsNamespace", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsNamespace">)),
    GetOrganizationsLimitsNamespaceDefaults: (...args) => callOperation("getOrganizationsLimitsNamespaceDefaults", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsNamespaceDefaults">)),
    GetOrganizationsLimitsNamespaces: (...args) => callOperation("getOrganizationsLimitsNamespaces", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsLimitsNamespaces">)),
    GetOrganizationsMe: (...args) => callOperation("getOrganizationsMe", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsMe">)),
    GetOrganizationsWhitelist: (...args) => callOperation("getOrganizationsWhitelist", ...(args as GenesysCloudFullApiOperationArgs<"getOrganizationsWhitelist">)),
    PatchOrganizationsAuthenticationSettings: (...args) => callOperation("patchOrganizationsAuthenticationSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchOrganizationsAuthenticationSettings">)),
    PatchOrganizationsFeature: (...args) => callOperation("patchOrganizationsFeature", ...(args as GenesysCloudFullApiOperationArgs<"patchOrganizationsFeature">)),
    PutOrganizationsEmbeddedintegration: (...args) => callOperation("putOrganizationsEmbeddedintegration", ...(args as GenesysCloudFullApiOperationArgs<"putOrganizationsEmbeddedintegration">)),
    PutOrganizationsIpaddressauthentication: (...args) => callOperation("putOrganizationsIpaddressauthentication", ...(args as GenesysCloudFullApiOperationArgs<"putOrganizationsIpaddressauthentication">)),
    PutOrganizationsMe: (...args) => callOperation("putOrganizationsMe", ...(args as GenesysCloudFullApiOperationArgs<"putOrganizationsMe">)),
    PutOrganizationsWhitelist: (...args) => callOperation("putOrganizationsWhitelist", ...(args as GenesysCloudFullApiOperationArgs<"putOrganizationsWhitelist">)),
  };
}
