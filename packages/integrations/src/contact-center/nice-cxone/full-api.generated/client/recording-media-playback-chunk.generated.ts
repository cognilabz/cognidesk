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
export const NiceCxoneFullApiRecordingMediaPlaybackOperationKeys = [
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts",
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}",
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}"
] as const;
export type NiceCxoneFullApiRecordingMediaPlaybackOperationKey = typeof NiceCxoneFullApiRecordingMediaPlaybackOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiRecordingMediaPlaybackOperationPathParamMap {
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts": {};
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}": { "acdContactId": NiceCxoneFullApiPathParamValue; "statementId": NiceCxoneFullApiPathParamValue };
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}": { "segmentId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiRecordingMediaPlaybackOperationRequestMap {
  "mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts": NiceCxoneFullApiOperationInput<"mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts">;
  "mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}": NiceCxoneFullApiOperationInput<"mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}">;
  "mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}": NiceCxoneFullApiOperationInput<"mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}">;
}

export interface NiceCxoneFullApiRecordingMediaPlaybackGeneratedClient {
  MediaplaybackMediaplaybackApiDocsGetACDContactRecordingData(...args: NiceCxoneFullApiOperationArgs<"mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts">): Promise<NiceCxoneFullApiOperationResponseMap["mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts"]>;
  MediaplaybackMediaplaybackApiDocsGetDataToPlayByContactStatementId(...args: NiceCxoneFullApiOperationArgs<"mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}">): Promise<NiceCxoneFullApiOperationResponseMap["mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}"]>;
  MediaplaybackMediaplaybackApiDocsGetSegmentRecordingData(...args: NiceCxoneFullApiOperationArgs<"mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}">): Promise<NiceCxoneFullApiOperationResponseMap["mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}"]>;
}

export const NiceCxoneFullApiRecordingMediaPlaybackGeneratedFunctionNames = [
  "MediaplaybackMediaplaybackApiDocsGetACDContactRecordingData",
  "MediaplaybackMediaplaybackApiDocsGetDataToPlayByContactStatementId",
  "MediaplaybackMediaplaybackApiDocsGetSegmentRecordingData"
] as const satisfies readonly (keyof NiceCxoneFullApiRecordingMediaPlaybackGeneratedClient)[];

export function createNiceCxoneFullApiRecordingMediaPlaybackGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiRecordingMediaPlaybackGeneratedClient {
  return {
    MediaplaybackMediaplaybackApiDocsGetACDContactRecordingData: (...args) => callOperation("mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts", ...(args as NiceCxoneFullApiOperationArgs<"mediaplayback-mediaplayback-api-docs:getACDContactRecordingData:GET:/media-playback/v1/contacts">)),
    MediaplaybackMediaplaybackApiDocsGetDataToPlayByContactStatementId: (...args) => callOperation("mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}", ...(args as NiceCxoneFullApiOperationArgs<"mediaplayback-mediaplayback-api-docs:getDataToPlayByContactStatementId:GET:/media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}">)),
    MediaplaybackMediaplaybackApiDocsGetSegmentRecordingData: (...args) => callOperation("mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}", ...(args as NiceCxoneFullApiOperationArgs<"mediaplayback-mediaplayback-api-docs:getSegmentRecordingData:GET:/media-playback/v1/segments/{segmentId}">)),
  };
}
