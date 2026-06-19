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
export const PostmarkFullApiServerOperationKeys = [
  "server:PUT:/server",
  "server:GET:/server"
] as const;
export type PostmarkFullApiServerOperationKey = typeof PostmarkFullApiServerOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiServerOperationPathParamMap {
  "server:PUT:/server": {};
  "server:GET:/server": {};
}

export interface PostmarkFullApiServerOperationRequestMap {
  "server:PUT:/server": PostmarkFullApiOperationInput<"server:PUT:/server">;
  "server:GET:/server": PostmarkFullApiOperationInput<"server:GET:/server">;
}

export interface PostmarkFullApiServerGeneratedClient {
  EditCurrentServerConfiguration(...args: PostmarkFullApiOperationArgs<"server:PUT:/server">): Promise<PostmarkFullApiOperationResponseMap["server:PUT:/server"]>;
  GetCurrentServerConfiguration(...args: PostmarkFullApiOperationArgs<"server:GET:/server">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/server"]>;
}

export const PostmarkFullApiServerGeneratedFunctionNames = [
  "EditCurrentServerConfiguration",
  "GetCurrentServerConfiguration"
] as const satisfies readonly (keyof PostmarkFullApiServerGeneratedClient)[];

export function createPostmarkFullApiServerGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiServerGeneratedClient {
  return {
    EditCurrentServerConfiguration: (...args) => callOperation("server:PUT:/server", ...(args as PostmarkFullApiOperationArgs<"server:PUT:/server">)),
    GetCurrentServerConfiguration: (...args) => callOperation("server:GET:/server", ...(args as PostmarkFullApiOperationArgs<"server:GET:/server">)),
  };
}
