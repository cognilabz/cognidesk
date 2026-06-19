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
export const TwilioSmsFullApiContentV1OperationKeys = [
  "content_v1:CreateApprovalCreate",
  "content_v1:CreateContent",
  "content_v1:DeleteContent",
  "content_v1:FetchApprovalFetch",
  "content_v1:FetchContent",
  "content_v1:ListContent",
  "content_v1:ListContentAndApprovals",
  "content_v1:ListLegacyContent",
  "content_v1:UpdateContent"
] as const;
export type TwilioSmsFullApiContentV1OperationKey = typeof TwilioSmsFullApiContentV1OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiContentV1OperationPathParamMap {
  "content_v1:CreateApprovalCreate": { "ContentSid": TwilioSmsFullApiPathParamValue };
  "content_v1:CreateContent": {};
  "content_v1:DeleteContent": { "Sid": TwilioSmsFullApiPathParamValue };
  "content_v1:FetchApprovalFetch": { "Sid": TwilioSmsFullApiPathParamValue };
  "content_v1:FetchContent": { "Sid": TwilioSmsFullApiPathParamValue };
  "content_v1:ListContent": {};
  "content_v1:ListContentAndApprovals": {};
  "content_v1:ListLegacyContent": {};
  "content_v1:UpdateContent": { "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiContentV1OperationRequestMap {
  "content_v1:CreateApprovalCreate": TwilioSmsFullApiOperationInput<"content_v1:CreateApprovalCreate">;
  "content_v1:CreateContent": TwilioSmsFullApiOperationInput<"content_v1:CreateContent">;
  "content_v1:DeleteContent": TwilioSmsFullApiOperationInput<"content_v1:DeleteContent">;
  "content_v1:FetchApprovalFetch": TwilioSmsFullApiOperationInput<"content_v1:FetchApprovalFetch">;
  "content_v1:FetchContent": TwilioSmsFullApiOperationInput<"content_v1:FetchContent">;
  "content_v1:ListContent": TwilioSmsFullApiOperationInput<"content_v1:ListContent">;
  "content_v1:ListContentAndApprovals": TwilioSmsFullApiOperationInput<"content_v1:ListContentAndApprovals">;
  "content_v1:ListLegacyContent": TwilioSmsFullApiOperationInput<"content_v1:ListLegacyContent">;
  "content_v1:UpdateContent": TwilioSmsFullApiOperationInput<"content_v1:UpdateContent">;
}

export interface TwilioSmsFullApiContentV1GeneratedClient {
  ContentV1CreateApprovalCreate(...args: TwilioSmsFullApiOperationArgs<"content_v1:CreateApprovalCreate">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:CreateApprovalCreate"]>;
  ContentV1CreateContent(...args: TwilioSmsFullApiOperationArgs<"content_v1:CreateContent">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:CreateContent"]>;
  ContentV1DeleteContent(...args: TwilioSmsFullApiOperationArgs<"content_v1:DeleteContent">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:DeleteContent"]>;
  ContentV1FetchApprovalFetch(...args: TwilioSmsFullApiOperationArgs<"content_v1:FetchApprovalFetch">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:FetchApprovalFetch"]>;
  ContentV1FetchContent(...args: TwilioSmsFullApiOperationArgs<"content_v1:FetchContent">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:FetchContent"]>;
  ContentV1ListContent(...args: TwilioSmsFullApiOperationArgs<"content_v1:ListContent">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:ListContent"]>;
  ContentV1ListContentAndApprovals(...args: TwilioSmsFullApiOperationArgs<"content_v1:ListContentAndApprovals">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:ListContentAndApprovals"]>;
  ContentV1ListLegacyContent(...args: TwilioSmsFullApiOperationArgs<"content_v1:ListLegacyContent">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:ListLegacyContent"]>;
  ContentV1UpdateContent(...args: TwilioSmsFullApiOperationArgs<"content_v1:UpdateContent">): Promise<TwilioSmsFullApiOperationResponseMap["content_v1:UpdateContent"]>;
}

export const TwilioSmsFullApiContentV1GeneratedFunctionNames = [
  "ContentV1CreateApprovalCreate",
  "ContentV1CreateContent",
  "ContentV1DeleteContent",
  "ContentV1FetchApprovalFetch",
  "ContentV1FetchContent",
  "ContentV1ListContent",
  "ContentV1ListContentAndApprovals",
  "ContentV1ListLegacyContent",
  "ContentV1UpdateContent"
] as const satisfies readonly (keyof TwilioSmsFullApiContentV1GeneratedClient)[];

export function createTwilioSmsFullApiContentV1GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiContentV1GeneratedClient {
  return {
    ContentV1CreateApprovalCreate: (...args) => callOperation("content_v1:CreateApprovalCreate", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:CreateApprovalCreate">)),
    ContentV1CreateContent: (...args) => callOperation("content_v1:CreateContent", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:CreateContent">)),
    ContentV1DeleteContent: (...args) => callOperation("content_v1:DeleteContent", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:DeleteContent">)),
    ContentV1FetchApprovalFetch: (...args) => callOperation("content_v1:FetchApprovalFetch", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:FetchApprovalFetch">)),
    ContentV1FetchContent: (...args) => callOperation("content_v1:FetchContent", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:FetchContent">)),
    ContentV1ListContent: (...args) => callOperation("content_v1:ListContent", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:ListContent">)),
    ContentV1ListContentAndApprovals: (...args) => callOperation("content_v1:ListContentAndApprovals", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:ListContentAndApprovals">)),
    ContentV1ListLegacyContent: (...args) => callOperation("content_v1:ListLegacyContent", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:ListLegacyContent">)),
    ContentV1UpdateContent: (...args) => callOperation("content_v1:UpdateContent", ...(args as TwilioSmsFullApiOperationArgs<"content_v1:UpdateContent">)),
  };
}
