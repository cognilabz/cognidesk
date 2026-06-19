// Generated endpoint chunk for PostmarkFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  PostmarkGeneratedOperationCaller,
  PostmarkFullApiOperationArgs,
  PostmarkFullApiOperationInput,
  PostmarkFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { PostmarkFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const PostmarkFullApiMessagesOperationKeys = [
  "server:PUT:/messages/inbound/{messageid}/bypass",
  "server:GET:/messages/outbound/clicks/{messageid}",
  "server:GET:/messages/inbound/{messageid}/details",
  "server:GET:/messages/outbound/opens/{messageid}",
  "server:GET:/messages/outbound/{messageid}/details",
  "server:GET:/messages/outbound/{messageid}/dump",
  "server:PUT:/messages/inbound/{messageid}/retry",
  "server:GET:/messages/outbound/clicks",
  "server:GET:/messages/inbound",
  "server:GET:/messages/outbound/opens",
  "server:GET:/messages/outbound"
] as const;
export type PostmarkFullApiMessagesOperationKey = typeof PostmarkFullApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiMessagesOperationPathParamMap {
  "server:PUT:/messages/inbound/{messageid}/bypass": { "messageid": PostmarkFullApiPathParamValue };
  "server:GET:/messages/outbound/clicks/{messageid}": { "messageid": PostmarkFullApiPathParamValue };
  "server:GET:/messages/inbound/{messageid}/details": { "messageid": PostmarkFullApiPathParamValue };
  "server:GET:/messages/outbound/opens/{messageid}": { "messageid": PostmarkFullApiPathParamValue };
  "server:GET:/messages/outbound/{messageid}/details": { "messageid": PostmarkFullApiPathParamValue };
  "server:GET:/messages/outbound/{messageid}/dump": { "messageid": PostmarkFullApiPathParamValue };
  "server:PUT:/messages/inbound/{messageid}/retry": { "messageid": PostmarkFullApiPathParamValue };
  "server:GET:/messages/outbound/clicks": {};
  "server:GET:/messages/inbound": {};
  "server:GET:/messages/outbound/opens": {};
  "server:GET:/messages/outbound": {};
}

export interface PostmarkFullApiMessagesOperationRequestMap {
  "server:PUT:/messages/inbound/{messageid}/bypass": PostmarkFullApiOperationInput<"server:PUT:/messages/inbound/{messageid}/bypass">;
  "server:GET:/messages/outbound/clicks/{messageid}": PostmarkFullApiOperationInput<"server:GET:/messages/outbound/clicks/{messageid}">;
  "server:GET:/messages/inbound/{messageid}/details": PostmarkFullApiOperationInput<"server:GET:/messages/inbound/{messageid}/details">;
  "server:GET:/messages/outbound/opens/{messageid}": PostmarkFullApiOperationInput<"server:GET:/messages/outbound/opens/{messageid}">;
  "server:GET:/messages/outbound/{messageid}/details": PostmarkFullApiOperationInput<"server:GET:/messages/outbound/{messageid}/details">;
  "server:GET:/messages/outbound/{messageid}/dump": PostmarkFullApiOperationInput<"server:GET:/messages/outbound/{messageid}/dump">;
  "server:PUT:/messages/inbound/{messageid}/retry": PostmarkFullApiOperationInput<"server:PUT:/messages/inbound/{messageid}/retry">;
  "server:GET:/messages/outbound/clicks": PostmarkFullApiOperationInput<"server:GET:/messages/outbound/clicks">;
  "server:GET:/messages/inbound": PostmarkFullApiOperationInput<"server:GET:/messages/inbound">;
  "server:GET:/messages/outbound/opens": PostmarkFullApiOperationInput<"server:GET:/messages/outbound/opens">;
  "server:GET:/messages/outbound": PostmarkFullApiOperationInput<"server:GET:/messages/outbound">;
}

export interface PostmarkFullApiMessagesGeneratedClient {
  BypassRulesForInboundMessage(...args: PostmarkFullApiOperationArgs<"server:PUT:/messages/inbound/{messageid}/bypass">): Promise<PostmarkFullApiOperationResponseMap["server:PUT:/messages/inbound/{messageid}/bypass"]>;
  GetClicksForSingleOutboundMessage(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/clicks/{messageid}">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound/clicks/{messageid}"]>;
  GetInboundMessageDetails(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/inbound/{messageid}/details">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/inbound/{messageid}/details"]>;
  GetOpensForSingleOutboundMessage(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/opens/{messageid}">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound/opens/{messageid}"]>;
  GetOutboundMessageDetails(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/{messageid}/details">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound/{messageid}/details"]>;
  GetOutboundMessageDump(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/{messageid}/dump">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound/{messageid}/dump"]>;
  RetryInboundMessageProcessing(...args: PostmarkFullApiOperationArgs<"server:PUT:/messages/inbound/{messageid}/retry">): Promise<PostmarkFullApiOperationResponseMap["server:PUT:/messages/inbound/{messageid}/retry"]>;
  SearchClicksForOutboundMessages(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/clicks">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound/clicks"]>;
  SearchInboundMessages(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/inbound">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/inbound"]>;
  SearchOpensForOutboundMessages(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/opens">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound/opens"]>;
  SearchOutboundMessages(...args: PostmarkFullApiOperationArgs<"server:GET:/messages/outbound">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/messages/outbound"]>;
}

export const PostmarkFullApiMessagesGeneratedFunctionNames = [
  "BypassRulesForInboundMessage",
  "GetClicksForSingleOutboundMessage",
  "GetInboundMessageDetails",
  "GetOpensForSingleOutboundMessage",
  "GetOutboundMessageDetails",
  "GetOutboundMessageDump",
  "RetryInboundMessageProcessing",
  "SearchClicksForOutboundMessages",
  "SearchInboundMessages",
  "SearchOpensForOutboundMessages",
  "SearchOutboundMessages"
] as const satisfies readonly (keyof PostmarkFullApiMessagesGeneratedClient)[];

export function createPostmarkFullApiMessagesGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiMessagesGeneratedClient {
  return {
    BypassRulesForInboundMessage: (...args) => callOperation("server:PUT:/messages/inbound/{messageid}/bypass", ...(args as PostmarkFullApiOperationArgs<"server:PUT:/messages/inbound/{messageid}/bypass">)),
    GetClicksForSingleOutboundMessage: (...args) => callOperation("server:GET:/messages/outbound/clicks/{messageid}", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/clicks/{messageid}">)),
    GetInboundMessageDetails: (...args) => callOperation("server:GET:/messages/inbound/{messageid}/details", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/inbound/{messageid}/details">)),
    GetOpensForSingleOutboundMessage: (...args) => callOperation("server:GET:/messages/outbound/opens/{messageid}", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/opens/{messageid}">)),
    GetOutboundMessageDetails: (...args) => callOperation("server:GET:/messages/outbound/{messageid}/details", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/{messageid}/details">)),
    GetOutboundMessageDump: (...args) => callOperation("server:GET:/messages/outbound/{messageid}/dump", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/{messageid}/dump">)),
    RetryInboundMessageProcessing: (...args) => callOperation("server:PUT:/messages/inbound/{messageid}/retry", ...(args as PostmarkFullApiOperationArgs<"server:PUT:/messages/inbound/{messageid}/retry">)),
    SearchClicksForOutboundMessages: (...args) => callOperation("server:GET:/messages/outbound/clicks", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/clicks">)),
    SearchInboundMessages: (...args) => callOperation("server:GET:/messages/inbound", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/inbound">)),
    SearchOpensForOutboundMessages: (...args) => callOperation("server:GET:/messages/outbound/opens", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/outbound/opens">)),
    SearchOutboundMessages: (...args) => callOperation("server:GET:/messages/outbound", ...(args as PostmarkFullApiOperationArgs<"server:GET:/messages/outbound">)),
  };
}
