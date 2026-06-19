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
export const GenesysCloudFullApiScriptsOperationKeys = [
  "getScript",
  "getScriptPage",
  "getScriptPages",
  "getScripts",
  "getScriptsDivisionviews",
  "getScriptsPublished",
  "getScriptsPublishedDivisionviews",
  "getScriptsPublishedDivisionviewVariables",
  "getScriptsPublishedScriptId",
  "getScriptsPublishedScriptIdPage",
  "getScriptsPublishedScriptIdPages",
  "getScriptsPublishedScriptIdVariables",
  "getScriptsUploadStatus",
  "postScriptExport",
  "postScriptsPublished"
] as const;
export type GenesysCloudFullApiScriptsOperationKey = typeof GenesysCloudFullApiScriptsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiScriptsOperationPathParamMap {
  "getScript": { "scriptId": GenesysCloudFullApiPathParamValue };
  "getScriptPage": { "scriptId": GenesysCloudFullApiPathParamValue; "pageId": GenesysCloudFullApiPathParamValue };
  "getScriptPages": { "scriptId": GenesysCloudFullApiPathParamValue };
  "getScripts": {};
  "getScriptsDivisionviews": {};
  "getScriptsPublished": {};
  "getScriptsPublishedDivisionviews": {};
  "getScriptsPublishedDivisionviewVariables": { "scriptId": GenesysCloudFullApiPathParamValue };
  "getScriptsPublishedScriptId": { "scriptId": GenesysCloudFullApiPathParamValue };
  "getScriptsPublishedScriptIdPage": { "scriptId": GenesysCloudFullApiPathParamValue; "pageId": GenesysCloudFullApiPathParamValue };
  "getScriptsPublishedScriptIdPages": { "scriptId": GenesysCloudFullApiPathParamValue };
  "getScriptsPublishedScriptIdVariables": { "scriptId": GenesysCloudFullApiPathParamValue };
  "getScriptsUploadStatus": { "uploadId": GenesysCloudFullApiPathParamValue };
  "postScriptExport": { "scriptId": GenesysCloudFullApiPathParamValue };
  "postScriptsPublished": {};
}

export interface GenesysCloudFullApiScriptsOperationRequestMap {
  "getScript": GenesysCloudFullApiOperationInput<"getScript">;
  "getScriptPage": GenesysCloudFullApiOperationInput<"getScriptPage">;
  "getScriptPages": GenesysCloudFullApiOperationInput<"getScriptPages">;
  "getScripts": GenesysCloudFullApiOperationInput<"getScripts">;
  "getScriptsDivisionviews": GenesysCloudFullApiOperationInput<"getScriptsDivisionviews">;
  "getScriptsPublished": GenesysCloudFullApiOperationInput<"getScriptsPublished">;
  "getScriptsPublishedDivisionviews": GenesysCloudFullApiOperationInput<"getScriptsPublishedDivisionviews">;
  "getScriptsPublishedDivisionviewVariables": GenesysCloudFullApiOperationInput<"getScriptsPublishedDivisionviewVariables">;
  "getScriptsPublishedScriptId": GenesysCloudFullApiOperationInput<"getScriptsPublishedScriptId">;
  "getScriptsPublishedScriptIdPage": GenesysCloudFullApiOperationInput<"getScriptsPublishedScriptIdPage">;
  "getScriptsPublishedScriptIdPages": GenesysCloudFullApiOperationInput<"getScriptsPublishedScriptIdPages">;
  "getScriptsPublishedScriptIdVariables": GenesysCloudFullApiOperationInput<"getScriptsPublishedScriptIdVariables">;
  "getScriptsUploadStatus": GenesysCloudFullApiOperationInput<"getScriptsUploadStatus">;
  "postScriptExport": GenesysCloudFullApiOperationInput<"postScriptExport">;
  "postScriptsPublished": GenesysCloudFullApiOperationInput<"postScriptsPublished">;
}

export interface GenesysCloudFullApiScriptsGeneratedClient {
  GetScript(...args: GenesysCloudFullApiOperationArgs<"getScript">): Promise<GenesysCloudFullApiOperationResponseMap["getScript"]>;
  GetScriptPage(...args: GenesysCloudFullApiOperationArgs<"getScriptPage">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptPage"]>;
  GetScriptPages(...args: GenesysCloudFullApiOperationArgs<"getScriptPages">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptPages"]>;
  GetScripts(...args: GenesysCloudFullApiOperationArgs<"getScripts">): Promise<GenesysCloudFullApiOperationResponseMap["getScripts"]>;
  GetScriptsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getScriptsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsDivisionviews"]>;
  GetScriptsPublished(...args: GenesysCloudFullApiOperationArgs<"getScriptsPublished">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsPublished"]>;
  GetScriptsPublishedDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getScriptsPublishedDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsPublishedDivisionviews"]>;
  GetScriptsPublishedDivisionviewVariables(...args: GenesysCloudFullApiOperationArgs<"getScriptsPublishedDivisionviewVariables">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsPublishedDivisionviewVariables"]>;
  GetScriptsPublishedScriptId(...args: GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptId">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsPublishedScriptId"]>;
  GetScriptsPublishedScriptIdPage(...args: GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptIdPage">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsPublishedScriptIdPage"]>;
  GetScriptsPublishedScriptIdPages(...args: GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptIdPages">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsPublishedScriptIdPages"]>;
  GetScriptsPublishedScriptIdVariables(...args: GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptIdVariables">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsPublishedScriptIdVariables"]>;
  GetScriptsUploadStatus(...args: GenesysCloudFullApiOperationArgs<"getScriptsUploadStatus">): Promise<GenesysCloudFullApiOperationResponseMap["getScriptsUploadStatus"]>;
  PostScriptExport(...args: GenesysCloudFullApiOperationArgs<"postScriptExport">): Promise<GenesysCloudFullApiOperationResponseMap["postScriptExport"]>;
  PostScriptsPublished(...args: GenesysCloudFullApiOperationArgs<"postScriptsPublished">): Promise<GenesysCloudFullApiOperationResponseMap["postScriptsPublished"]>;
}

export const GenesysCloudFullApiScriptsGeneratedFunctionNames = [
  "GetScript",
  "GetScriptPage",
  "GetScriptPages",
  "GetScripts",
  "GetScriptsDivisionviews",
  "GetScriptsPublished",
  "GetScriptsPublishedDivisionviews",
  "GetScriptsPublishedDivisionviewVariables",
  "GetScriptsPublishedScriptId",
  "GetScriptsPublishedScriptIdPage",
  "GetScriptsPublishedScriptIdPages",
  "GetScriptsPublishedScriptIdVariables",
  "GetScriptsUploadStatus",
  "PostScriptExport",
  "PostScriptsPublished"
] as const satisfies readonly (keyof GenesysCloudFullApiScriptsGeneratedClient)[];

export function createGenesysCloudFullApiScriptsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiScriptsGeneratedClient {
  return {
    GetScript: (...args) => callOperation("getScript", ...(args as GenesysCloudFullApiOperationArgs<"getScript">)),
    GetScriptPage: (...args) => callOperation("getScriptPage", ...(args as GenesysCloudFullApiOperationArgs<"getScriptPage">)),
    GetScriptPages: (...args) => callOperation("getScriptPages", ...(args as GenesysCloudFullApiOperationArgs<"getScriptPages">)),
    GetScripts: (...args) => callOperation("getScripts", ...(args as GenesysCloudFullApiOperationArgs<"getScripts">)),
    GetScriptsDivisionviews: (...args) => callOperation("getScriptsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsDivisionviews">)),
    GetScriptsPublished: (...args) => callOperation("getScriptsPublished", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsPublished">)),
    GetScriptsPublishedDivisionviews: (...args) => callOperation("getScriptsPublishedDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsPublishedDivisionviews">)),
    GetScriptsPublishedDivisionviewVariables: (...args) => callOperation("getScriptsPublishedDivisionviewVariables", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsPublishedDivisionviewVariables">)),
    GetScriptsPublishedScriptId: (...args) => callOperation("getScriptsPublishedScriptId", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptId">)),
    GetScriptsPublishedScriptIdPage: (...args) => callOperation("getScriptsPublishedScriptIdPage", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptIdPage">)),
    GetScriptsPublishedScriptIdPages: (...args) => callOperation("getScriptsPublishedScriptIdPages", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptIdPages">)),
    GetScriptsPublishedScriptIdVariables: (...args) => callOperation("getScriptsPublishedScriptIdVariables", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsPublishedScriptIdVariables">)),
    GetScriptsUploadStatus: (...args) => callOperation("getScriptsUploadStatus", ...(args as GenesysCloudFullApiOperationArgs<"getScriptsUploadStatus">)),
    PostScriptExport: (...args) => callOperation("postScriptExport", ...(args as GenesysCloudFullApiOperationArgs<"postScriptExport">)),
    PostScriptsPublished: (...args) => callOperation("postScriptsPublished", ...(args as GenesysCloudFullApiOperationArgs<"postScriptsPublished">)),
  };
}
