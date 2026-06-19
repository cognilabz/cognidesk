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
export const PostmarkFullApiBouncesOperationKeys = [
  "server:PUT:/bounces/{bounceid}/activate",
  "server:GET:/bounces",
  "server:GET:/bounces/{bounceid}/dump",
  "server:GET:/bounces/{bounceid}"
] as const;
export type PostmarkFullApiBouncesOperationKey = typeof PostmarkFullApiBouncesOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiBouncesOperationPathParamMap {
  "server:PUT:/bounces/{bounceid}/activate": { "bounceid": PostmarkFullApiPathParamValue };
  "server:GET:/bounces": {};
  "server:GET:/bounces/{bounceid}/dump": { "bounceid": PostmarkFullApiPathParamValue };
  "server:GET:/bounces/{bounceid}": { "bounceid": PostmarkFullApiPathParamValue };
}

export interface PostmarkFullApiBouncesOperationRequestMap {
  "server:PUT:/bounces/{bounceid}/activate": PostmarkFullApiOperationInput<"server:PUT:/bounces/{bounceid}/activate">;
  "server:GET:/bounces": PostmarkFullApiOperationInput<"server:GET:/bounces">;
  "server:GET:/bounces/{bounceid}/dump": PostmarkFullApiOperationInput<"server:GET:/bounces/{bounceid}/dump">;
  "server:GET:/bounces/{bounceid}": PostmarkFullApiOperationInput<"server:GET:/bounces/{bounceid}">;
}

export interface PostmarkFullApiBouncesGeneratedClient {
  ActivateBounce(...args: PostmarkFullApiOperationArgs<"server:PUT:/bounces/{bounceid}/activate">): Promise<PostmarkFullApiOperationResponseMap["server:PUT:/bounces/{bounceid}/activate"]>;
  GetBounces(...args: PostmarkFullApiOperationArgs<"server:GET:/bounces">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/bounces"]>;
  GETBouncesBounceidDump(...args: PostmarkFullApiOperationArgs<"server:GET:/bounces/{bounceid}/dump">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/bounces/{bounceid}/dump"]>;
  GetSingleBounce(...args: PostmarkFullApiOperationArgs<"server:GET:/bounces/{bounceid}">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/bounces/{bounceid}"]>;
}

export const PostmarkFullApiBouncesGeneratedFunctionNames = [
  "ActivateBounce",
  "GetBounces",
  "GETBouncesBounceidDump",
  "GetSingleBounce"
] as const satisfies readonly (keyof PostmarkFullApiBouncesGeneratedClient)[];

export function createPostmarkFullApiBouncesGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiBouncesGeneratedClient {
  return {
    ActivateBounce: (...args) => callOperation("server:PUT:/bounces/{bounceid}/activate", ...(args as PostmarkFullApiOperationArgs<"server:PUT:/bounces/{bounceid}/activate">)),
    GetBounces: (...args) => callOperation("server:GET:/bounces", ...(args as PostmarkFullApiOperationArgs<"server:GET:/bounces">)),
    GETBouncesBounceidDump: (...args) => callOperation("server:GET:/bounces/{bounceid}/dump", ...(args as PostmarkFullApiOperationArgs<"server:GET:/bounces/{bounceid}/dump">)),
    GetSingleBounce: (...args) => callOperation("server:GET:/bounces/{bounceid}", ...(args as PostmarkFullApiOperationArgs<"server:GET:/bounces/{bounceid}">)),
  };
}
