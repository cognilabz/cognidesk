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
export const NiceCxoneFullApiAnalyzedInteractionSegmentsOperationKeys = [
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed",
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript"
] as const;
export type NiceCxoneFullApiAnalyzedInteractionSegmentsOperationKey = typeof NiceCxoneFullApiAnalyzedInteractionSegmentsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAnalyzedInteractionSegmentsOperationPathParamMap {
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed": {};
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript": { "segmentId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiAnalyzedInteractionSegmentsOperationRequestMap {
  "interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed": NiceCxoneFullApiOperationInput<"interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed">;
  "interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript": NiceCxoneFullApiOperationInput<"interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript">;
}

export interface NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient {
  InteractionanalyticsInteractionsApiDocsGetSegmentsAnalyzed(...args: NiceCxoneFullApiOperationArgs<"interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed">): Promise<NiceCxoneFullApiOperationResponseMap["interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed"]>;
  InteractionanalyticsInteractionsApiDocsGetSegmentsSegmentIdAnalyzedTranscript(...args: NiceCxoneFullApiOperationArgs<"interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript">): Promise<NiceCxoneFullApiOperationResponseMap["interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript"]>;
}

export const NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedFunctionNames = [
  "InteractionanalyticsInteractionsApiDocsGetSegmentsAnalyzed",
  "InteractionanalyticsInteractionsApiDocsGetSegmentsSegmentIdAnalyzedTranscript"
] as const satisfies readonly (keyof NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient)[];

export function createNiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAnalyzedInteractionSegmentsGeneratedClient {
  return {
    InteractionanalyticsInteractionsApiDocsGetSegmentsAnalyzed: (...args) => callOperation("interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed", ...(args as NiceCxoneFullApiOperationArgs<"interactionanalytics-interactions-api-docs:get-segments-analyzed:GET:/interaction-analytics-gateway/v2/segments/analyzed">)),
    InteractionanalyticsInteractionsApiDocsGetSegmentsSegmentIdAnalyzedTranscript: (...args) => callOperation("interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript", ...(args as NiceCxoneFullApiOperationArgs<"interactionanalytics-interactions-api-docs:get-segments-segmentId-analyzed-transcript:GET:/interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript">)),
  };
}
