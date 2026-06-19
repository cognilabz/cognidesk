// Generated endpoint chunk for TwilioSmsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioSmsGeneratedOperationCaller,
  TwilioSmsFullApiOperationArgs,
  TwilioSmsFullApiOperationInput,
  TwilioSmsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioSmsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioSmsFullApiContentV2OperationKeys = [
  "content_v2:ListContent",
  "content_v2:ListContentAndApprovals"
] as const;
export type TwilioSmsFullApiContentV2OperationKey = typeof TwilioSmsFullApiContentV2OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiContentV2OperationPathParamMap {
  "content_v2:ListContent": {};
  "content_v2:ListContentAndApprovals": {};
}

export interface TwilioSmsFullApiContentV2OperationRequestMap {
  "content_v2:ListContent": TwilioSmsFullApiOperationInput<"content_v2:ListContent">;
  "content_v2:ListContentAndApprovals": TwilioSmsFullApiOperationInput<"content_v2:ListContentAndApprovals">;
}

export interface TwilioSmsFullApiContentV2GeneratedClient {
  ContentV2ListContent(...args: TwilioSmsFullApiOperationArgs<"content_v2:ListContent">): Promise<TwilioSmsFullApiOperationResponseMap["content_v2:ListContent"]>;
  ContentV2ListContentAndApprovals(...args: TwilioSmsFullApiOperationArgs<"content_v2:ListContentAndApprovals">): Promise<TwilioSmsFullApiOperationResponseMap["content_v2:ListContentAndApprovals"]>;
}

export const TwilioSmsFullApiContentV2GeneratedFunctionNames = [
  "ContentV2ListContent",
  "ContentV2ListContentAndApprovals"
] as const satisfies readonly (keyof TwilioSmsFullApiContentV2GeneratedClient)[];

export function createTwilioSmsFullApiContentV2GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiContentV2GeneratedClient {
  return {
    ContentV2ListContent: (...args) => callOperation("content_v2:ListContent", ...(args as TwilioSmsFullApiOperationArgs<"content_v2:ListContent">)),
    ContentV2ListContentAndApprovals: (...args) => callOperation("content_v2:ListContentAndApprovals", ...(args as TwilioSmsFullApiOperationArgs<"content_v2:ListContentAndApprovals">)),
  };
}
