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
export const PostmarkFullApiTriggersOperationKeys = [
  "server:POST:/triggers/inboundrules",
  "server:DELETE:/triggers/inboundrules/{triggerid}",
  "server:GET:/triggers/inboundrules"
] as const;
export type PostmarkFullApiTriggersOperationKey = typeof PostmarkFullApiTriggersOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiTriggersOperationPathParamMap {
  "server:POST:/triggers/inboundrules": {};
  "server:DELETE:/triggers/inboundrules/{triggerid}": { "triggerid": PostmarkFullApiPathParamValue };
  "server:GET:/triggers/inboundrules": {};
}

export interface PostmarkFullApiTriggersOperationRequestMap {
  "server:POST:/triggers/inboundrules": PostmarkFullApiOperationInput<"server:POST:/triggers/inboundrules">;
  "server:DELETE:/triggers/inboundrules/{triggerid}": PostmarkFullApiOperationInput<"server:DELETE:/triggers/inboundrules/{triggerid}">;
  "server:GET:/triggers/inboundrules": PostmarkFullApiOperationInput<"server:GET:/triggers/inboundrules">;
}

export interface PostmarkFullApiTriggersGeneratedClient {
  CreateInboundRule(...args: PostmarkFullApiOperationArgs<"server:POST:/triggers/inboundrules">): Promise<PostmarkFullApiOperationResponseMap["server:POST:/triggers/inboundrules"]>;
  DeleteInboundRule(...args: PostmarkFullApiOperationArgs<"server:DELETE:/triggers/inboundrules/{triggerid}">): Promise<PostmarkFullApiOperationResponseMap["server:DELETE:/triggers/inboundrules/{triggerid}"]>;
  ListInboundRules(...args: PostmarkFullApiOperationArgs<"server:GET:/triggers/inboundrules">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/triggers/inboundrules"]>;
}

export const PostmarkFullApiTriggersGeneratedFunctionNames = [
  "CreateInboundRule",
  "DeleteInboundRule",
  "ListInboundRules"
] as const satisfies readonly (keyof PostmarkFullApiTriggersGeneratedClient)[];

export function createPostmarkFullApiTriggersGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiTriggersGeneratedClient {
  return {
    CreateInboundRule: (...args) => callOperation("server:POST:/triggers/inboundrules", ...(args as PostmarkFullApiOperationArgs<"server:POST:/triggers/inboundrules">)),
    DeleteInboundRule: (...args) => callOperation("server:DELETE:/triggers/inboundrules/{triggerid}", ...(args as PostmarkFullApiOperationArgs<"server:DELETE:/triggers/inboundrules/{triggerid}">)),
    ListInboundRules: (...args) => callOperation("server:GET:/triggers/inboundrules", ...(args as PostmarkFullApiOperationArgs<"server:GET:/triggers/inboundrules">)),
  };
}
