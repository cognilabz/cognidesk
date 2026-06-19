// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiIndustriesActivityAPIOperationKeys = [
  "industries-activities-activities-activity-id-patch",
  "industries-activities-activities-post",
  "industries-activities-activities-activity-id-events-post"
] as const;
export type TalkdeskFullApiIndustriesActivityAPIOperationKey = typeof TalkdeskFullApiIndustriesActivityAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIndustriesActivityAPIOperationPathParamMap {
  "industries-activities-activities-activity-id-patch": { "activity_id": TalkdeskFullApiPathParamValue };
  "industries-activities-activities-post": {};
  "industries-activities-activities-activity-id-events-post": { "activity_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiIndustriesActivityAPIOperationRequestMap {
  "industries-activities-activities-activity-id-patch": TalkdeskFullApiOperationInput<"industries-activities-activities-activity-id-patch">;
  "industries-activities-activities-post": TalkdeskFullApiOperationInput<"industries-activities-activities-post">;
  "industries-activities-activities-activity-id-events-post": TalkdeskFullApiOperationInput<"industries-activities-activities-activity-id-events-post">;
}

export interface TalkdeskFullApiIndustriesActivityAPIGeneratedClient {
  IndustriesActivitiesActivitiesActivityIdPatch(...args: TalkdeskFullApiOperationArgs<"industries-activities-activities-activity-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["industries-activities-activities-activity-id-patch"]>;
  IndustriesActivitiesActivitiesPost(...args: TalkdeskFullApiOperationArgs<"industries-activities-activities-post">): Promise<TalkdeskFullApiOperationResponseMap["industries-activities-activities-post"]>;
  IndustriesActivitiesActivitiesActivityIdEventsPost(...args: TalkdeskFullApiOperationArgs<"industries-activities-activities-activity-id-events-post">): Promise<TalkdeskFullApiOperationResponseMap["industries-activities-activities-activity-id-events-post"]>;
}

export const TalkdeskFullApiIndustriesActivityAPIGeneratedFunctionNames = [
  "IndustriesActivitiesActivitiesActivityIdPatch",
  "IndustriesActivitiesActivitiesPost",
  "IndustriesActivitiesActivitiesActivityIdEventsPost"
] as const satisfies readonly (keyof TalkdeskFullApiIndustriesActivityAPIGeneratedClient)[];

export function createTalkdeskFullApiIndustriesActivityAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIndustriesActivityAPIGeneratedClient {
  return {
    IndustriesActivitiesActivitiesActivityIdPatch: (...args) => callOperation("industries-activities-activities-activity-id-patch", ...(args as TalkdeskFullApiOperationArgs<"industries-activities-activities-activity-id-patch">)),
    IndustriesActivitiesActivitiesPost: (...args) => callOperation("industries-activities-activities-post", ...(args as TalkdeskFullApiOperationArgs<"industries-activities-activities-post">)),
    IndustriesActivitiesActivitiesActivityIdEventsPost: (...args) => callOperation("industries-activities-activities-activity-id-events-post", ...(args as TalkdeskFullApiOperationArgs<"industries-activities-activities-activity-id-events-post">)),
  };
}
