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
export const GenesysCloudFullApiUserRecordingsOperationKeys = [
  "deleteUserrecording",
  "getUserrecording",
  "getUserrecordings",
  "getUserrecordingsSummary",
  "getUserrecordingTranscoding",
  "putUserrecording"
] as const;
export type GenesysCloudFullApiUserRecordingsOperationKey = typeof GenesysCloudFullApiUserRecordingsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiUserRecordingsOperationPathParamMap {
  "deleteUserrecording": { "recordingId": GenesysCloudFullApiPathParamValue };
  "getUserrecording": { "recordingId": GenesysCloudFullApiPathParamValue };
  "getUserrecordings": {};
  "getUserrecordingsSummary": {};
  "getUserrecordingTranscoding": { "recordingId": GenesysCloudFullApiPathParamValue };
  "putUserrecording": { "recordingId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiUserRecordingsOperationRequestMap {
  "deleteUserrecording": GenesysCloudFullApiOperationInput<"deleteUserrecording">;
  "getUserrecording": GenesysCloudFullApiOperationInput<"getUserrecording">;
  "getUserrecordings": GenesysCloudFullApiOperationInput<"getUserrecordings">;
  "getUserrecordingsSummary": GenesysCloudFullApiOperationInput<"getUserrecordingsSummary">;
  "getUserrecordingTranscoding": GenesysCloudFullApiOperationInput<"getUserrecordingTranscoding">;
  "putUserrecording": GenesysCloudFullApiOperationInput<"putUserrecording">;
}

export interface GenesysCloudFullApiUserRecordingsGeneratedClient {
  DeleteUserrecording(...args: GenesysCloudFullApiOperationArgs<"deleteUserrecording">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserrecording"]>;
  GetUserrecording(...args: GenesysCloudFullApiOperationArgs<"getUserrecording">): Promise<GenesysCloudFullApiOperationResponseMap["getUserrecording"]>;
  GetUserrecordings(...args: GenesysCloudFullApiOperationArgs<"getUserrecordings">): Promise<GenesysCloudFullApiOperationResponseMap["getUserrecordings"]>;
  GetUserrecordingsSummary(...args: GenesysCloudFullApiOperationArgs<"getUserrecordingsSummary">): Promise<GenesysCloudFullApiOperationResponseMap["getUserrecordingsSummary"]>;
  GetUserrecordingTranscoding(...args: GenesysCloudFullApiOperationArgs<"getUserrecordingTranscoding">): Promise<GenesysCloudFullApiOperationResponseMap["getUserrecordingTranscoding"]>;
  PutUserrecording(...args: GenesysCloudFullApiOperationArgs<"putUserrecording">): Promise<GenesysCloudFullApiOperationResponseMap["putUserrecording"]>;
}

export const GenesysCloudFullApiUserRecordingsGeneratedFunctionNames = [
  "DeleteUserrecording",
  "GetUserrecording",
  "GetUserrecordings",
  "GetUserrecordingsSummary",
  "GetUserrecordingTranscoding",
  "PutUserrecording"
] as const satisfies readonly (keyof GenesysCloudFullApiUserRecordingsGeneratedClient)[];

export function createGenesysCloudFullApiUserRecordingsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiUserRecordingsGeneratedClient {
  return {
    DeleteUserrecording: (...args) => callOperation("deleteUserrecording", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserrecording">)),
    GetUserrecording: (...args) => callOperation("getUserrecording", ...(args as GenesysCloudFullApiOperationArgs<"getUserrecording">)),
    GetUserrecordings: (...args) => callOperation("getUserrecordings", ...(args as GenesysCloudFullApiOperationArgs<"getUserrecordings">)),
    GetUserrecordingsSummary: (...args) => callOperation("getUserrecordingsSummary", ...(args as GenesysCloudFullApiOperationArgs<"getUserrecordingsSummary">)),
    GetUserrecordingTranscoding: (...args) => callOperation("getUserrecordingTranscoding", ...(args as GenesysCloudFullApiOperationArgs<"getUserrecordingTranscoding">)),
    PutUserrecording: (...args) => callOperation("putUserrecording", ...(args as GenesysCloudFullApiOperationArgs<"putUserrecording">)),
  };
}
