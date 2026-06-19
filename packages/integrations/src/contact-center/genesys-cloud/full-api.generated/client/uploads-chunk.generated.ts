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
export const GenesysCloudFullApiUploadsOperationKeys = [
  "postIntegrationsActionDraftFunctionUpload",
  "postLanguageunderstandingMinerUploads",
  "postUploadsLearningCoverart",
  "postUploadsPublicassetsImages",
  "postUploadsRecordings",
  "postUploadsWorkforcemanagementHistoricaldataCsv"
] as const;
export type GenesysCloudFullApiUploadsOperationKey = typeof GenesysCloudFullApiUploadsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiUploadsOperationPathParamMap {
  "postIntegrationsActionDraftFunctionUpload": { "actionId": GenesysCloudFullApiPathParamValue };
  "postLanguageunderstandingMinerUploads": { "minerId": GenesysCloudFullApiPathParamValue };
  "postUploadsLearningCoverart": {};
  "postUploadsPublicassetsImages": {};
  "postUploadsRecordings": {};
  "postUploadsWorkforcemanagementHistoricaldataCsv": {};
}

export interface GenesysCloudFullApiUploadsOperationRequestMap {
  "postIntegrationsActionDraftFunctionUpload": GenesysCloudFullApiOperationInput<"postIntegrationsActionDraftFunctionUpload">;
  "postLanguageunderstandingMinerUploads": GenesysCloudFullApiOperationInput<"postLanguageunderstandingMinerUploads">;
  "postUploadsLearningCoverart": GenesysCloudFullApiOperationInput<"postUploadsLearningCoverart">;
  "postUploadsPublicassetsImages": GenesysCloudFullApiOperationInput<"postUploadsPublicassetsImages">;
  "postUploadsRecordings": GenesysCloudFullApiOperationInput<"postUploadsRecordings">;
  "postUploadsWorkforcemanagementHistoricaldataCsv": GenesysCloudFullApiOperationInput<"postUploadsWorkforcemanagementHistoricaldataCsv">;
}

export interface GenesysCloudFullApiUploadsGeneratedClient {
  PostIntegrationsActionDraftFunctionUpload(...args: GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraftFunctionUpload">): Promise<GenesysCloudFullApiOperationResponseMap["postIntegrationsActionDraftFunctionUpload"]>;
  PostLanguageunderstandingMinerUploads(...args: GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMinerUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguageunderstandingMinerUploads"]>;
  PostUploadsLearningCoverart(...args: GenesysCloudFullApiOperationArgs<"postUploadsLearningCoverart">): Promise<GenesysCloudFullApiOperationResponseMap["postUploadsLearningCoverart"]>;
  PostUploadsPublicassetsImages(...args: GenesysCloudFullApiOperationArgs<"postUploadsPublicassetsImages">): Promise<GenesysCloudFullApiOperationResponseMap["postUploadsPublicassetsImages"]>;
  PostUploadsRecordings(...args: GenesysCloudFullApiOperationArgs<"postUploadsRecordings">): Promise<GenesysCloudFullApiOperationResponseMap["postUploadsRecordings"]>;
  PostUploadsWorkforcemanagementHistoricaldataCsv(...args: GenesysCloudFullApiOperationArgs<"postUploadsWorkforcemanagementHistoricaldataCsv">): Promise<GenesysCloudFullApiOperationResponseMap["postUploadsWorkforcemanagementHistoricaldataCsv"]>;
}

export const GenesysCloudFullApiUploadsGeneratedFunctionNames = [
  "PostIntegrationsActionDraftFunctionUpload",
  "PostLanguageunderstandingMinerUploads",
  "PostUploadsLearningCoverart",
  "PostUploadsPublicassetsImages",
  "PostUploadsRecordings",
  "PostUploadsWorkforcemanagementHistoricaldataCsv"
] as const satisfies readonly (keyof GenesysCloudFullApiUploadsGeneratedClient)[];

export function createGenesysCloudFullApiUploadsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiUploadsGeneratedClient {
  return {
    PostIntegrationsActionDraftFunctionUpload: (...args) => callOperation("postIntegrationsActionDraftFunctionUpload", ...(args as GenesysCloudFullApiOperationArgs<"postIntegrationsActionDraftFunctionUpload">)),
    PostLanguageunderstandingMinerUploads: (...args) => callOperation("postLanguageunderstandingMinerUploads", ...(args as GenesysCloudFullApiOperationArgs<"postLanguageunderstandingMinerUploads">)),
    PostUploadsLearningCoverart: (...args) => callOperation("postUploadsLearningCoverart", ...(args as GenesysCloudFullApiOperationArgs<"postUploadsLearningCoverart">)),
    PostUploadsPublicassetsImages: (...args) => callOperation("postUploadsPublicassetsImages", ...(args as GenesysCloudFullApiOperationArgs<"postUploadsPublicassetsImages">)),
    PostUploadsRecordings: (...args) => callOperation("postUploadsRecordings", ...(args as GenesysCloudFullApiOperationArgs<"postUploadsRecordings">)),
    PostUploadsWorkforcemanagementHistoricaldataCsv: (...args) => callOperation("postUploadsWorkforcemanagementHistoricaldataCsv", ...(args as GenesysCloudFullApiOperationArgs<"postUploadsWorkforcemanagementHistoricaldataCsv">)),
  };
}
