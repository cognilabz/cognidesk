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
export const PostmarkFullApiDeliverystatsOperationKeys = [
  "server:GET:/deliverystats"
] as const;
export type PostmarkFullApiDeliverystatsOperationKey = typeof PostmarkFullApiDeliverystatsOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiDeliverystatsOperationPathParamMap {
  "server:GET:/deliverystats": {};
}

export interface PostmarkFullApiDeliverystatsOperationRequestMap {
  "server:GET:/deliverystats": PostmarkFullApiOperationInput<"server:GET:/deliverystats">;
}

export interface PostmarkFullApiDeliverystatsGeneratedClient {
  GetDeliveryStats(...args: PostmarkFullApiOperationArgs<"server:GET:/deliverystats">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/deliverystats"]>;
}

export const PostmarkFullApiDeliverystatsGeneratedFunctionNames = [
  "GetDeliveryStats"
] as const satisfies readonly (keyof PostmarkFullApiDeliverystatsGeneratedClient)[];

export function createPostmarkFullApiDeliverystatsGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiDeliverystatsGeneratedClient {
  return {
    GetDeliveryStats: (...args) => callOperation("server:GET:/deliverystats", ...(args as PostmarkFullApiOperationArgs<"server:GET:/deliverystats">)),
  };
}
