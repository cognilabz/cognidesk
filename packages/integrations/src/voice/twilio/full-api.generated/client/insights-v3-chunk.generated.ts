// Generated endpoint chunk for TwilioVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioVoiceGeneratedOperationCaller,
  TwilioVoiceFullApiOperationArgs,
  TwilioVoiceFullApiOperationInput,
  TwilioVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioVoiceFullApiInsightsV3OperationKeys = [
  "insights_v3:CreateQueryResults",
  "insights_v3:FetchMetadata",
  "insights_v3:FetchQueryResults"
] as const;
export type TwilioVoiceFullApiInsightsV3OperationKey = typeof TwilioVoiceFullApiInsightsV3OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiInsightsV3OperationPathParamMap {
  "insights_v3:CreateQueryResults": {};
  "insights_v3:FetchMetadata": {};
  "insights_v3:FetchQueryResults": {};
}

export interface TwilioVoiceFullApiInsightsV3OperationRequestMap {
  "insights_v3:CreateQueryResults": TwilioVoiceFullApiOperationInput<"insights_v3:CreateQueryResults">;
  "insights_v3:FetchMetadata": TwilioVoiceFullApiOperationInput<"insights_v3:FetchMetadata">;
  "insights_v3:FetchQueryResults": TwilioVoiceFullApiOperationInput<"insights_v3:FetchQueryResults">;
}

export interface TwilioVoiceFullApiInsightsV3GeneratedClient {
  InsightsV3CreateQueryResults(...args: TwilioVoiceFullApiOperationArgs<"insights_v3:CreateQueryResults">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v3:CreateQueryResults"]>;
  InsightsV3FetchMetadata(...args: TwilioVoiceFullApiOperationArgs<"insights_v3:FetchMetadata">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v3:FetchMetadata"]>;
  InsightsV3FetchQueryResults(...args: TwilioVoiceFullApiOperationArgs<"insights_v3:FetchQueryResults">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v3:FetchQueryResults"]>;
}

export const TwilioVoiceFullApiInsightsV3GeneratedFunctionNames = [
  "InsightsV3CreateQueryResults",
  "InsightsV3FetchMetadata",
  "InsightsV3FetchQueryResults"
] as const satisfies readonly (keyof TwilioVoiceFullApiInsightsV3GeneratedClient)[];

export function createTwilioVoiceFullApiInsightsV3GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiInsightsV3GeneratedClient {
  return {
    InsightsV3CreateQueryResults: (...args) => callOperation("insights_v3:CreateQueryResults", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v3:CreateQueryResults">)),
    InsightsV3FetchMetadata: (...args) => callOperation("insights_v3:FetchMetadata", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v3:FetchMetadata">)),
    InsightsV3FetchQueryResults: (...args) => callOperation("insights_v3:FetchQueryResults", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v3:FetchQueryResults">)),
  };
}
