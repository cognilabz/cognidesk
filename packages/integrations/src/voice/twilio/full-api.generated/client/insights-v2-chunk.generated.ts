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
export const TwilioVoiceFullApiInsightsV2OperationKeys = [
  "insights_v2:CreateAccountReport",
  "insights_v2:CreateInboundPhoneNumbersReport",
  "insights_v2:CreateOutboundPhoneNumbersReport",
  "insights_v2:FetchAccountReport",
  "insights_v2:ListInboundPhoneNumbersReport",
  "insights_v2:ListOutboundPhoneNumbersReport"
] as const;
export type TwilioVoiceFullApiInsightsV2OperationKey = typeof TwilioVoiceFullApiInsightsV2OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiInsightsV2OperationPathParamMap {
  "insights_v2:CreateAccountReport": {};
  "insights_v2:CreateInboundPhoneNumbersReport": {};
  "insights_v2:CreateOutboundPhoneNumbersReport": {};
  "insights_v2:FetchAccountReport": { "reportId": TwilioVoiceFullApiPathParamValue };
  "insights_v2:ListInboundPhoneNumbersReport": { "reportId": TwilioVoiceFullApiPathParamValue };
  "insights_v2:ListOutboundPhoneNumbersReport": { "reportId": TwilioVoiceFullApiPathParamValue };
}

export interface TwilioVoiceFullApiInsightsV2OperationRequestMap {
  "insights_v2:CreateAccountReport": TwilioVoiceFullApiOperationInput<"insights_v2:CreateAccountReport">;
  "insights_v2:CreateInboundPhoneNumbersReport": TwilioVoiceFullApiOperationInput<"insights_v2:CreateInboundPhoneNumbersReport">;
  "insights_v2:CreateOutboundPhoneNumbersReport": TwilioVoiceFullApiOperationInput<"insights_v2:CreateOutboundPhoneNumbersReport">;
  "insights_v2:FetchAccountReport": TwilioVoiceFullApiOperationInput<"insights_v2:FetchAccountReport">;
  "insights_v2:ListInboundPhoneNumbersReport": TwilioVoiceFullApiOperationInput<"insights_v2:ListInboundPhoneNumbersReport">;
  "insights_v2:ListOutboundPhoneNumbersReport": TwilioVoiceFullApiOperationInput<"insights_v2:ListOutboundPhoneNumbersReport">;
}

export interface TwilioVoiceFullApiInsightsV2GeneratedClient {
  InsightsV2CreateAccountReport(...args: TwilioVoiceFullApiOperationArgs<"insights_v2:CreateAccountReport">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v2:CreateAccountReport"]>;
  InsightsV2CreateInboundPhoneNumbersReport(...args: TwilioVoiceFullApiOperationArgs<"insights_v2:CreateInboundPhoneNumbersReport">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v2:CreateInboundPhoneNumbersReport"]>;
  InsightsV2CreateOutboundPhoneNumbersReport(...args: TwilioVoiceFullApiOperationArgs<"insights_v2:CreateOutboundPhoneNumbersReport">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v2:CreateOutboundPhoneNumbersReport"]>;
  InsightsV2FetchAccountReport(...args: TwilioVoiceFullApiOperationArgs<"insights_v2:FetchAccountReport">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v2:FetchAccountReport"]>;
  InsightsV2ListInboundPhoneNumbersReport(...args: TwilioVoiceFullApiOperationArgs<"insights_v2:ListInboundPhoneNumbersReport">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v2:ListInboundPhoneNumbersReport"]>;
  InsightsV2ListOutboundPhoneNumbersReport(...args: TwilioVoiceFullApiOperationArgs<"insights_v2:ListOutboundPhoneNumbersReport">): Promise<TwilioVoiceFullApiOperationResponseMap["insights_v2:ListOutboundPhoneNumbersReport"]>;
}

export const TwilioVoiceFullApiInsightsV2GeneratedFunctionNames = [
  "InsightsV2CreateAccountReport",
  "InsightsV2CreateInboundPhoneNumbersReport",
  "InsightsV2CreateOutboundPhoneNumbersReport",
  "InsightsV2FetchAccountReport",
  "InsightsV2ListInboundPhoneNumbersReport",
  "InsightsV2ListOutboundPhoneNumbersReport"
] as const satisfies readonly (keyof TwilioVoiceFullApiInsightsV2GeneratedClient)[];

export function createTwilioVoiceFullApiInsightsV2GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiInsightsV2GeneratedClient {
  return {
    InsightsV2CreateAccountReport: (...args) => callOperation("insights_v2:CreateAccountReport", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v2:CreateAccountReport">)),
    InsightsV2CreateInboundPhoneNumbersReport: (...args) => callOperation("insights_v2:CreateInboundPhoneNumbersReport", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v2:CreateInboundPhoneNumbersReport">)),
    InsightsV2CreateOutboundPhoneNumbersReport: (...args) => callOperation("insights_v2:CreateOutboundPhoneNumbersReport", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v2:CreateOutboundPhoneNumbersReport">)),
    InsightsV2FetchAccountReport: (...args) => callOperation("insights_v2:FetchAccountReport", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v2:FetchAccountReport">)),
    InsightsV2ListInboundPhoneNumbersReport: (...args) => callOperation("insights_v2:ListInboundPhoneNumbersReport", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v2:ListInboundPhoneNumbersReport">)),
    InsightsV2ListOutboundPhoneNumbersReport: (...args) => callOperation("insights_v2:ListOutboundPhoneNumbersReport", ...(args as TwilioVoiceFullApiOperationArgs<"insights_v2:ListOutboundPhoneNumbersReport">)),
  };
}
