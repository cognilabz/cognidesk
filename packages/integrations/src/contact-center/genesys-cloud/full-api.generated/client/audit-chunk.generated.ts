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
export const GenesysCloudFullApiAuditOperationKeys = [
  "getAuditsQueryRealtimeServicemapping",
  "getAuditsQueryServicemapping",
  "getAuditsQueryTransactionId",
  "getAuditsQueryTransactionIdResults",
  "postAuditsQuery",
  "postAuditsQueryRealtime",
  "postAuditsQueryRealtimeRelated"
] as const;
export type GenesysCloudFullApiAuditOperationKey = typeof GenesysCloudFullApiAuditOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAuditOperationPathParamMap {
  "getAuditsQueryRealtimeServicemapping": {};
  "getAuditsQueryServicemapping": {};
  "getAuditsQueryTransactionId": { "transactionId": GenesysCloudFullApiPathParamValue };
  "getAuditsQueryTransactionIdResults": { "transactionId": GenesysCloudFullApiPathParamValue };
  "postAuditsQuery": {};
  "postAuditsQueryRealtime": {};
  "postAuditsQueryRealtimeRelated": {};
}

export interface GenesysCloudFullApiAuditOperationRequestMap {
  "getAuditsQueryRealtimeServicemapping": GenesysCloudFullApiOperationInput<"getAuditsQueryRealtimeServicemapping">;
  "getAuditsQueryServicemapping": GenesysCloudFullApiOperationInput<"getAuditsQueryServicemapping">;
  "getAuditsQueryTransactionId": GenesysCloudFullApiOperationInput<"getAuditsQueryTransactionId">;
  "getAuditsQueryTransactionIdResults": GenesysCloudFullApiOperationInput<"getAuditsQueryTransactionIdResults">;
  "postAuditsQuery": GenesysCloudFullApiOperationInput<"postAuditsQuery">;
  "postAuditsQueryRealtime": GenesysCloudFullApiOperationInput<"postAuditsQueryRealtime">;
  "postAuditsQueryRealtimeRelated": GenesysCloudFullApiOperationInput<"postAuditsQueryRealtimeRelated">;
}

export interface GenesysCloudFullApiAuditGeneratedClient {
  GetAuditsQueryRealtimeServicemapping(...args: GenesysCloudFullApiOperationArgs<"getAuditsQueryRealtimeServicemapping">): Promise<GenesysCloudFullApiOperationResponseMap["getAuditsQueryRealtimeServicemapping"]>;
  GetAuditsQueryServicemapping(...args: GenesysCloudFullApiOperationArgs<"getAuditsQueryServicemapping">): Promise<GenesysCloudFullApiOperationResponseMap["getAuditsQueryServicemapping"]>;
  GetAuditsQueryTransactionId(...args: GenesysCloudFullApiOperationArgs<"getAuditsQueryTransactionId">): Promise<GenesysCloudFullApiOperationResponseMap["getAuditsQueryTransactionId"]>;
  GetAuditsQueryTransactionIdResults(...args: GenesysCloudFullApiOperationArgs<"getAuditsQueryTransactionIdResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAuditsQueryTransactionIdResults"]>;
  PostAuditsQuery(...args: GenesysCloudFullApiOperationArgs<"postAuditsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAuditsQuery"]>;
  PostAuditsQueryRealtime(...args: GenesysCloudFullApiOperationArgs<"postAuditsQueryRealtime">): Promise<GenesysCloudFullApiOperationResponseMap["postAuditsQueryRealtime"]>;
  PostAuditsQueryRealtimeRelated(...args: GenesysCloudFullApiOperationArgs<"postAuditsQueryRealtimeRelated">): Promise<GenesysCloudFullApiOperationResponseMap["postAuditsQueryRealtimeRelated"]>;
}

export const GenesysCloudFullApiAuditGeneratedFunctionNames = [
  "GetAuditsQueryRealtimeServicemapping",
  "GetAuditsQueryServicemapping",
  "GetAuditsQueryTransactionId",
  "GetAuditsQueryTransactionIdResults",
  "PostAuditsQuery",
  "PostAuditsQueryRealtime",
  "PostAuditsQueryRealtimeRelated"
] as const satisfies readonly (keyof GenesysCloudFullApiAuditGeneratedClient)[];

export function createGenesysCloudFullApiAuditGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAuditGeneratedClient {
  return {
    GetAuditsQueryRealtimeServicemapping: (...args) => callOperation("getAuditsQueryRealtimeServicemapping", ...(args as GenesysCloudFullApiOperationArgs<"getAuditsQueryRealtimeServicemapping">)),
    GetAuditsQueryServicemapping: (...args) => callOperation("getAuditsQueryServicemapping", ...(args as GenesysCloudFullApiOperationArgs<"getAuditsQueryServicemapping">)),
    GetAuditsQueryTransactionId: (...args) => callOperation("getAuditsQueryTransactionId", ...(args as GenesysCloudFullApiOperationArgs<"getAuditsQueryTransactionId">)),
    GetAuditsQueryTransactionIdResults: (...args) => callOperation("getAuditsQueryTransactionIdResults", ...(args as GenesysCloudFullApiOperationArgs<"getAuditsQueryTransactionIdResults">)),
    PostAuditsQuery: (...args) => callOperation("postAuditsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAuditsQuery">)),
    PostAuditsQueryRealtime: (...args) => callOperation("postAuditsQueryRealtime", ...(args as GenesysCloudFullApiOperationArgs<"postAuditsQueryRealtime">)),
    PostAuditsQueryRealtimeRelated: (...args) => callOperation("postAuditsQueryRealtimeRelated", ...(args as GenesysCloudFullApiOperationArgs<"postAuditsQueryRealtimeRelated">)),
  };
}
