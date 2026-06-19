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
export const GenesysCloudFullApiWebDeploymentsOperationKeys = [
  "deleteWebdeploymentsConfiguration",
  "deleteWebdeploymentsDeployment",
  "deleteWebdeploymentsDeploymentCobrowseSessionId",
  "deleteWebdeploymentsTokenRevoke",
  "getWebdeploymentsConfigurations",
  "getWebdeploymentsConfigurationVersion",
  "getWebdeploymentsConfigurationVersions",
  "getWebdeploymentsConfigurationVersionsDraft",
  "getWebdeploymentsDeployment",
  "getWebdeploymentsDeploymentCobrowseSessionId",
  "getWebdeploymentsDeploymentConfigurations",
  "getWebdeploymentsDeploymentIdentityresolution",
  "getWebdeploymentsDeployments",
  "postWebdeploymentsConfigurations",
  "postWebdeploymentsConfigurationVersionsDraftPublish",
  "postWebdeploymentsDeployments",
  "postWebdeploymentsTokenOauthcodegrantjwtexchange",
  "postWebdeploymentsTokenRefresh",
  "putWebdeploymentsConfigurationVersionsDraft",
  "putWebdeploymentsDeployment",
  "putWebdeploymentsDeploymentIdentityresolution"
] as const;
export type GenesysCloudFullApiWebDeploymentsOperationKey = typeof GenesysCloudFullApiWebDeploymentsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWebDeploymentsOperationPathParamMap {
  "deleteWebdeploymentsConfiguration": { "configurationId": GenesysCloudFullApiPathParamValue };
  "deleteWebdeploymentsDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "deleteWebdeploymentsDeploymentCobrowseSessionId": { "deploymentId": GenesysCloudFullApiPathParamValue; "sessionId": GenesysCloudFullApiPathParamValue };
  "deleteWebdeploymentsTokenRevoke": {};
  "getWebdeploymentsConfigurations": {};
  "getWebdeploymentsConfigurationVersion": { "configurationId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getWebdeploymentsConfigurationVersions": { "configurationId": GenesysCloudFullApiPathParamValue };
  "getWebdeploymentsConfigurationVersionsDraft": { "configurationId": GenesysCloudFullApiPathParamValue };
  "getWebdeploymentsDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "getWebdeploymentsDeploymentCobrowseSessionId": { "deploymentId": GenesysCloudFullApiPathParamValue; "sessionId": GenesysCloudFullApiPathParamValue };
  "getWebdeploymentsDeploymentConfigurations": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "getWebdeploymentsDeploymentIdentityresolution": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "getWebdeploymentsDeployments": {};
  "postWebdeploymentsConfigurations": {};
  "postWebdeploymentsConfigurationVersionsDraftPublish": { "configurationId": GenesysCloudFullApiPathParamValue };
  "postWebdeploymentsDeployments": {};
  "postWebdeploymentsTokenOauthcodegrantjwtexchange": {};
  "postWebdeploymentsTokenRefresh": {};
  "putWebdeploymentsConfigurationVersionsDraft": { "configurationId": GenesysCloudFullApiPathParamValue };
  "putWebdeploymentsDeployment": { "deploymentId": GenesysCloudFullApiPathParamValue };
  "putWebdeploymentsDeploymentIdentityresolution": { "deploymentId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiWebDeploymentsOperationRequestMap {
  "deleteWebdeploymentsConfiguration": GenesysCloudFullApiOperationInput<"deleteWebdeploymentsConfiguration">;
  "deleteWebdeploymentsDeployment": GenesysCloudFullApiOperationInput<"deleteWebdeploymentsDeployment">;
  "deleteWebdeploymentsDeploymentCobrowseSessionId": GenesysCloudFullApiOperationInput<"deleteWebdeploymentsDeploymentCobrowseSessionId">;
  "deleteWebdeploymentsTokenRevoke": GenesysCloudFullApiOperationInput<"deleteWebdeploymentsTokenRevoke">;
  "getWebdeploymentsConfigurations": GenesysCloudFullApiOperationInput<"getWebdeploymentsConfigurations">;
  "getWebdeploymentsConfigurationVersion": GenesysCloudFullApiOperationInput<"getWebdeploymentsConfigurationVersion">;
  "getWebdeploymentsConfigurationVersions": GenesysCloudFullApiOperationInput<"getWebdeploymentsConfigurationVersions">;
  "getWebdeploymentsConfigurationVersionsDraft": GenesysCloudFullApiOperationInput<"getWebdeploymentsConfigurationVersionsDraft">;
  "getWebdeploymentsDeployment": GenesysCloudFullApiOperationInput<"getWebdeploymentsDeployment">;
  "getWebdeploymentsDeploymentCobrowseSessionId": GenesysCloudFullApiOperationInput<"getWebdeploymentsDeploymentCobrowseSessionId">;
  "getWebdeploymentsDeploymentConfigurations": GenesysCloudFullApiOperationInput<"getWebdeploymentsDeploymentConfigurations">;
  "getWebdeploymentsDeploymentIdentityresolution": GenesysCloudFullApiOperationInput<"getWebdeploymentsDeploymentIdentityresolution">;
  "getWebdeploymentsDeployments": GenesysCloudFullApiOperationInput<"getWebdeploymentsDeployments">;
  "postWebdeploymentsConfigurations": GenesysCloudFullApiOperationInput<"postWebdeploymentsConfigurations">;
  "postWebdeploymentsConfigurationVersionsDraftPublish": GenesysCloudFullApiOperationInput<"postWebdeploymentsConfigurationVersionsDraftPublish">;
  "postWebdeploymentsDeployments": GenesysCloudFullApiOperationInput<"postWebdeploymentsDeployments">;
  "postWebdeploymentsTokenOauthcodegrantjwtexchange": GenesysCloudFullApiOperationInput<"postWebdeploymentsTokenOauthcodegrantjwtexchange">;
  "postWebdeploymentsTokenRefresh": GenesysCloudFullApiOperationInput<"postWebdeploymentsTokenRefresh">;
  "putWebdeploymentsConfigurationVersionsDraft": GenesysCloudFullApiOperationInput<"putWebdeploymentsConfigurationVersionsDraft">;
  "putWebdeploymentsDeployment": GenesysCloudFullApiOperationInput<"putWebdeploymentsDeployment">;
  "putWebdeploymentsDeploymentIdentityresolution": GenesysCloudFullApiOperationInput<"putWebdeploymentsDeploymentIdentityresolution">;
}

export interface GenesysCloudFullApiWebDeploymentsGeneratedClient {
  DeleteWebdeploymentsConfiguration(...args: GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsConfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebdeploymentsConfiguration"]>;
  DeleteWebdeploymentsDeployment(...args: GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebdeploymentsDeployment"]>;
  DeleteWebdeploymentsDeploymentCobrowseSessionId(...args: GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsDeploymentCobrowseSessionId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebdeploymentsDeploymentCobrowseSessionId"]>;
  DeleteWebdeploymentsTokenRevoke(...args: GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsTokenRevoke">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWebdeploymentsTokenRevoke"]>;
  GetWebdeploymentsConfigurations(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsConfigurations"]>;
  GetWebdeploymentsConfigurationVersion(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurationVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsConfigurationVersion"]>;
  GetWebdeploymentsConfigurationVersions(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurationVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsConfigurationVersions"]>;
  GetWebdeploymentsConfigurationVersionsDraft(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurationVersionsDraft">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsConfigurationVersionsDraft"]>;
  GetWebdeploymentsDeployment(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsDeployment"]>;
  GetWebdeploymentsDeploymentCobrowseSessionId(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeploymentCobrowseSessionId">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsDeploymentCobrowseSessionId"]>;
  GetWebdeploymentsDeploymentConfigurations(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeploymentConfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsDeploymentConfigurations"]>;
  GetWebdeploymentsDeploymentIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeploymentIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsDeploymentIdentityresolution"]>;
  GetWebdeploymentsDeployments(...args: GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeployments">): Promise<GenesysCloudFullApiOperationResponseMap["getWebdeploymentsDeployments"]>;
  PostWebdeploymentsConfigurations(...args: GenesysCloudFullApiOperationArgs<"postWebdeploymentsConfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["postWebdeploymentsConfigurations"]>;
  PostWebdeploymentsConfigurationVersionsDraftPublish(...args: GenesysCloudFullApiOperationArgs<"postWebdeploymentsConfigurationVersionsDraftPublish">): Promise<GenesysCloudFullApiOperationResponseMap["postWebdeploymentsConfigurationVersionsDraftPublish"]>;
  PostWebdeploymentsDeployments(...args: GenesysCloudFullApiOperationArgs<"postWebdeploymentsDeployments">): Promise<GenesysCloudFullApiOperationResponseMap["postWebdeploymentsDeployments"]>;
  PostWebdeploymentsTokenOauthcodegrantjwtexchange(...args: GenesysCloudFullApiOperationArgs<"postWebdeploymentsTokenOauthcodegrantjwtexchange">): Promise<GenesysCloudFullApiOperationResponseMap["postWebdeploymentsTokenOauthcodegrantjwtexchange"]>;
  PostWebdeploymentsTokenRefresh(...args: GenesysCloudFullApiOperationArgs<"postWebdeploymentsTokenRefresh">): Promise<GenesysCloudFullApiOperationResponseMap["postWebdeploymentsTokenRefresh"]>;
  PutWebdeploymentsConfigurationVersionsDraft(...args: GenesysCloudFullApiOperationArgs<"putWebdeploymentsConfigurationVersionsDraft">): Promise<GenesysCloudFullApiOperationResponseMap["putWebdeploymentsConfigurationVersionsDraft"]>;
  PutWebdeploymentsDeployment(...args: GenesysCloudFullApiOperationArgs<"putWebdeploymentsDeployment">): Promise<GenesysCloudFullApiOperationResponseMap["putWebdeploymentsDeployment"]>;
  PutWebdeploymentsDeploymentIdentityresolution(...args: GenesysCloudFullApiOperationArgs<"putWebdeploymentsDeploymentIdentityresolution">): Promise<GenesysCloudFullApiOperationResponseMap["putWebdeploymentsDeploymentIdentityresolution"]>;
}

export const GenesysCloudFullApiWebDeploymentsGeneratedFunctionNames = [
  "DeleteWebdeploymentsConfiguration",
  "DeleteWebdeploymentsDeployment",
  "DeleteWebdeploymentsDeploymentCobrowseSessionId",
  "DeleteWebdeploymentsTokenRevoke",
  "GetWebdeploymentsConfigurations",
  "GetWebdeploymentsConfigurationVersion",
  "GetWebdeploymentsConfigurationVersions",
  "GetWebdeploymentsConfigurationVersionsDraft",
  "GetWebdeploymentsDeployment",
  "GetWebdeploymentsDeploymentCobrowseSessionId",
  "GetWebdeploymentsDeploymentConfigurations",
  "GetWebdeploymentsDeploymentIdentityresolution",
  "GetWebdeploymentsDeployments",
  "PostWebdeploymentsConfigurations",
  "PostWebdeploymentsConfigurationVersionsDraftPublish",
  "PostWebdeploymentsDeployments",
  "PostWebdeploymentsTokenOauthcodegrantjwtexchange",
  "PostWebdeploymentsTokenRefresh",
  "PutWebdeploymentsConfigurationVersionsDraft",
  "PutWebdeploymentsDeployment",
  "PutWebdeploymentsDeploymentIdentityresolution"
] as const satisfies readonly (keyof GenesysCloudFullApiWebDeploymentsGeneratedClient)[];

export function createGenesysCloudFullApiWebDeploymentsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWebDeploymentsGeneratedClient {
  return {
    DeleteWebdeploymentsConfiguration: (...args) => callOperation("deleteWebdeploymentsConfiguration", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsConfiguration">)),
    DeleteWebdeploymentsDeployment: (...args) => callOperation("deleteWebdeploymentsDeployment", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsDeployment">)),
    DeleteWebdeploymentsDeploymentCobrowseSessionId: (...args) => callOperation("deleteWebdeploymentsDeploymentCobrowseSessionId", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsDeploymentCobrowseSessionId">)),
    DeleteWebdeploymentsTokenRevoke: (...args) => callOperation("deleteWebdeploymentsTokenRevoke", ...(args as GenesysCloudFullApiOperationArgs<"deleteWebdeploymentsTokenRevoke">)),
    GetWebdeploymentsConfigurations: (...args) => callOperation("getWebdeploymentsConfigurations", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurations">)),
    GetWebdeploymentsConfigurationVersion: (...args) => callOperation("getWebdeploymentsConfigurationVersion", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurationVersion">)),
    GetWebdeploymentsConfigurationVersions: (...args) => callOperation("getWebdeploymentsConfigurationVersions", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurationVersions">)),
    GetWebdeploymentsConfigurationVersionsDraft: (...args) => callOperation("getWebdeploymentsConfigurationVersionsDraft", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsConfigurationVersionsDraft">)),
    GetWebdeploymentsDeployment: (...args) => callOperation("getWebdeploymentsDeployment", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeployment">)),
    GetWebdeploymentsDeploymentCobrowseSessionId: (...args) => callOperation("getWebdeploymentsDeploymentCobrowseSessionId", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeploymentCobrowseSessionId">)),
    GetWebdeploymentsDeploymentConfigurations: (...args) => callOperation("getWebdeploymentsDeploymentConfigurations", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeploymentConfigurations">)),
    GetWebdeploymentsDeploymentIdentityresolution: (...args) => callOperation("getWebdeploymentsDeploymentIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeploymentIdentityresolution">)),
    GetWebdeploymentsDeployments: (...args) => callOperation("getWebdeploymentsDeployments", ...(args as GenesysCloudFullApiOperationArgs<"getWebdeploymentsDeployments">)),
    PostWebdeploymentsConfigurations: (...args) => callOperation("postWebdeploymentsConfigurations", ...(args as GenesysCloudFullApiOperationArgs<"postWebdeploymentsConfigurations">)),
    PostWebdeploymentsConfigurationVersionsDraftPublish: (...args) => callOperation("postWebdeploymentsConfigurationVersionsDraftPublish", ...(args as GenesysCloudFullApiOperationArgs<"postWebdeploymentsConfigurationVersionsDraftPublish">)),
    PostWebdeploymentsDeployments: (...args) => callOperation("postWebdeploymentsDeployments", ...(args as GenesysCloudFullApiOperationArgs<"postWebdeploymentsDeployments">)),
    PostWebdeploymentsTokenOauthcodegrantjwtexchange: (...args) => callOperation("postWebdeploymentsTokenOauthcodegrantjwtexchange", ...(args as GenesysCloudFullApiOperationArgs<"postWebdeploymentsTokenOauthcodegrantjwtexchange">)),
    PostWebdeploymentsTokenRefresh: (...args) => callOperation("postWebdeploymentsTokenRefresh", ...(args as GenesysCloudFullApiOperationArgs<"postWebdeploymentsTokenRefresh">)),
    PutWebdeploymentsConfigurationVersionsDraft: (...args) => callOperation("putWebdeploymentsConfigurationVersionsDraft", ...(args as GenesysCloudFullApiOperationArgs<"putWebdeploymentsConfigurationVersionsDraft">)),
    PutWebdeploymentsDeployment: (...args) => callOperation("putWebdeploymentsDeployment", ...(args as GenesysCloudFullApiOperationArgs<"putWebdeploymentsDeployment">)),
    PutWebdeploymentsDeploymentIdentityresolution: (...args) => callOperation("putWebdeploymentsDeploymentIdentityresolution", ...(args as GenesysCloudFullApiOperationArgs<"putWebdeploymentsDeploymentIdentityresolution">)),
  };
}
