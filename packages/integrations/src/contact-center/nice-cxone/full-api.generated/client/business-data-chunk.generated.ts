// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiBusinessDataOperationKeys = [
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update"
] as const;
export type NiceCxoneFullApiBusinessDataOperationKey = typeof NiceCxoneFullApiBusinessDataOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiBusinessDataOperationPathParamMap {
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update": {};
}

export interface NiceCxoneFullApiBusinessDataOperationRequestMap {
  "recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update": NiceCxoneFullApiOperationInput<"recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update">;
}

export interface NiceCxoneFullApiBusinessDataGeneratedClient {
  RecordingBusinessdataApiDocsPostInteractionRecordingManagementServiceV1InteractionsBusinessDataUpdate(...args: NiceCxoneFullApiOperationArgs<"recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update">): Promise<NiceCxoneFullApiOperationResponseMap["recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update"]>;
}

export const NiceCxoneFullApiBusinessDataGeneratedFunctionNames = [
  "RecordingBusinessdataApiDocsPostInteractionRecordingManagementServiceV1InteractionsBusinessDataUpdate"
] as const satisfies readonly (keyof NiceCxoneFullApiBusinessDataGeneratedClient)[];

export function createNiceCxoneFullApiBusinessDataGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiBusinessDataGeneratedClient {
  return {
    RecordingBusinessdataApiDocsPostInteractionRecordingManagementServiceV1InteractionsBusinessDataUpdate: (...args) => callOperation("recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update", ...(args as NiceCxoneFullApiOperationArgs<"recording-businessdata-api-docs:post_/interaction-recording-management-service/v1/interactions/business-data-update:POST:/interaction-recording-management-service/v1/interactions/business-data-update">)),
  };
}
