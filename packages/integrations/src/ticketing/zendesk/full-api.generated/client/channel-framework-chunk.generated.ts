// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiChannelFrameworkOperationKeys = [
  "PushContentToSupport",
  "ReportChannelbackError",
  "ValidateToken"
] as const;
export type ZendeskFullApiChannelFrameworkOperationKey = typeof ZendeskFullApiChannelFrameworkOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiChannelFrameworkOperationPathParamMap {
  "PushContentToSupport": {};
  "ReportChannelbackError": {};
  "ValidateToken": {};
}

export interface ZendeskFullApiChannelFrameworkOperationRequestMap {
  "PushContentToSupport": ZendeskFullApiOperationInput<"PushContentToSupport">;
  "ReportChannelbackError": ZendeskFullApiOperationInput<"ReportChannelbackError">;
  "ValidateToken": ZendeskFullApiOperationInput<"ValidateToken">;
}

export interface ZendeskFullApiChannelFrameworkGeneratedClient {
  PushContentToSupport(...args: ZendeskFullApiOperationArgs<"PushContentToSupport">): Promise<ZendeskFullApiOperationResponseMap["PushContentToSupport"]>;
  ReportChannelbackError(...args: ZendeskFullApiOperationArgs<"ReportChannelbackError">): Promise<ZendeskFullApiOperationResponseMap["ReportChannelbackError"]>;
  ValidateToken(...args: ZendeskFullApiOperationArgs<"ValidateToken">): Promise<ZendeskFullApiOperationResponseMap["ValidateToken"]>;
}

export const ZendeskFullApiChannelFrameworkGeneratedFunctionNames = [
  "PushContentToSupport",
  "ReportChannelbackError",
  "ValidateToken"
] as const satisfies readonly (keyof ZendeskFullApiChannelFrameworkGeneratedClient)[];

export function createZendeskFullApiChannelFrameworkGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiChannelFrameworkGeneratedClient {
  return {
    PushContentToSupport: (...args) => callOperation("PushContentToSupport", ...(args as ZendeskFullApiOperationArgs<"PushContentToSupport">)),
    ReportChannelbackError: (...args) => callOperation("ReportChannelbackError", ...(args as ZendeskFullApiOperationArgs<"ReportChannelbackError">)),
    ValidateToken: (...args) => callOperation("ValidateToken", ...(args as ZendeskFullApiOperationArgs<"ValidateToken">)),
  };
}
