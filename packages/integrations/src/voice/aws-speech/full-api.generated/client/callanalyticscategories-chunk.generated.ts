// Generated endpoint chunk for AwsSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AwsSpeechGeneratedOperationCaller,
  AwsSpeechFullApiOperationArgs,
  AwsSpeechFullApiOperationInput,
  AwsSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AwsSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AwsSpeechFullApiCallanalyticscategoriesOperationKeys = [
  "transcribe:CreateCallAnalyticsCategory",
  "transcribe:DeleteCallAnalyticsCategory",
  "transcribe:GetCallAnalyticsCategory",
  "transcribe:ListCallAnalyticsCategories",
  "transcribe:UpdateCallAnalyticsCategory"
] as const;
export type AwsSpeechFullApiCallanalyticscategoriesOperationKey = typeof AwsSpeechFullApiCallanalyticscategoriesOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiCallanalyticscategoriesOperationPathParamMap {
  "transcribe:CreateCallAnalyticsCategory": { "CategoryName": AwsSpeechFullApiPathParamValue };
  "transcribe:DeleteCallAnalyticsCategory": { "CategoryName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetCallAnalyticsCategory": { "CategoryName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListCallAnalyticsCategories": {};
  "transcribe:UpdateCallAnalyticsCategory": { "CategoryName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiCallanalyticscategoriesOperationRequestMap {
  "transcribe:CreateCallAnalyticsCategory": AwsSpeechFullApiOperationInput<"transcribe:CreateCallAnalyticsCategory">;
  "transcribe:DeleteCallAnalyticsCategory": AwsSpeechFullApiOperationInput<"transcribe:DeleteCallAnalyticsCategory">;
  "transcribe:GetCallAnalyticsCategory": AwsSpeechFullApiOperationInput<"transcribe:GetCallAnalyticsCategory">;
  "transcribe:ListCallAnalyticsCategories": AwsSpeechFullApiOperationInput<"transcribe:ListCallAnalyticsCategories">;
  "transcribe:UpdateCallAnalyticsCategory": AwsSpeechFullApiOperationInput<"transcribe:UpdateCallAnalyticsCategory">;
}

export interface AwsSpeechFullApiCallanalyticscategoriesGeneratedClient {
  TranscribeCreateCallAnalyticsCategory(...args: AwsSpeechFullApiOperationArgs<"transcribe:CreateCallAnalyticsCategory">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:CreateCallAnalyticsCategory"]>;
  TranscribeDeleteCallAnalyticsCategory(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteCallAnalyticsCategory">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteCallAnalyticsCategory"]>;
  TranscribeGetCallAnalyticsCategory(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetCallAnalyticsCategory">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetCallAnalyticsCategory"]>;
  TranscribeListCallAnalyticsCategories(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListCallAnalyticsCategories">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListCallAnalyticsCategories"]>;
  TranscribeUpdateCallAnalyticsCategory(...args: AwsSpeechFullApiOperationArgs<"transcribe:UpdateCallAnalyticsCategory">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:UpdateCallAnalyticsCategory"]>;
}

export const AwsSpeechFullApiCallanalyticscategoriesGeneratedFunctionNames = [
  "TranscribeCreateCallAnalyticsCategory",
  "TranscribeDeleteCallAnalyticsCategory",
  "TranscribeGetCallAnalyticsCategory",
  "TranscribeListCallAnalyticsCategories",
  "TranscribeUpdateCallAnalyticsCategory"
] as const satisfies readonly (keyof AwsSpeechFullApiCallanalyticscategoriesGeneratedClient)[];

export function createAwsSpeechFullApiCallanalyticscategoriesGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiCallanalyticscategoriesGeneratedClient {
  return {
    TranscribeCreateCallAnalyticsCategory: (...args) => callOperation("transcribe:CreateCallAnalyticsCategory", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:CreateCallAnalyticsCategory">)),
    TranscribeDeleteCallAnalyticsCategory: (...args) => callOperation("transcribe:DeleteCallAnalyticsCategory", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteCallAnalyticsCategory">)),
    TranscribeGetCallAnalyticsCategory: (...args) => callOperation("transcribe:GetCallAnalyticsCategory", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetCallAnalyticsCategory">)),
    TranscribeListCallAnalyticsCategories: (...args) => callOperation("transcribe:ListCallAnalyticsCategories", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListCallAnalyticsCategories">)),
    TranscribeUpdateCallAnalyticsCategory: (...args) => callOperation("transcribe:UpdateCallAnalyticsCategory", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:UpdateCallAnalyticsCategory">)),
  };
}
