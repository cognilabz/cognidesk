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
export const PostmarkFullApiServersOperationKeys = [
  "account:POST:/servers",
  "account:DELETE:/servers/{serverid}",
  "account:PUT:/servers/{serverid}",
  "account:GET:/servers/{serverid}",
  "account:GET:/servers"
] as const;
export type PostmarkFullApiServersOperationKey = typeof PostmarkFullApiServersOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiServersOperationPathParamMap {
  "account:POST:/servers": {};
  "account:DELETE:/servers/{serverid}": { "serverid": PostmarkFullApiPathParamValue };
  "account:PUT:/servers/{serverid}": { "serverid": PostmarkFullApiPathParamValue };
  "account:GET:/servers/{serverid}": { "serverid": PostmarkFullApiPathParamValue };
  "account:GET:/servers": {};
}

export interface PostmarkFullApiServersOperationRequestMap {
  "account:POST:/servers": PostmarkFullApiOperationInput<"account:POST:/servers">;
  "account:DELETE:/servers/{serverid}": PostmarkFullApiOperationInput<"account:DELETE:/servers/{serverid}">;
  "account:PUT:/servers/{serverid}": PostmarkFullApiOperationInput<"account:PUT:/servers/{serverid}">;
  "account:GET:/servers/{serverid}": PostmarkFullApiOperationInput<"account:GET:/servers/{serverid}">;
  "account:GET:/servers": PostmarkFullApiOperationInput<"account:GET:/servers">;
}

export interface PostmarkFullApiServersGeneratedClient {
  CreateServer(...args: PostmarkFullApiOperationArgs<"account:POST:/servers">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/servers"]>;
  DeleteServer(...args: PostmarkFullApiOperationArgs<"account:DELETE:/servers/{serverid}">): Promise<PostmarkFullApiOperationResponseMap["account:DELETE:/servers/{serverid}"]>;
  EditServerInformation(...args: PostmarkFullApiOperationArgs<"account:PUT:/servers/{serverid}">): Promise<PostmarkFullApiOperationResponseMap["account:PUT:/servers/{serverid}"]>;
  GetServerInformation(...args: PostmarkFullApiOperationArgs<"account:GET:/servers/{serverid}">): Promise<PostmarkFullApiOperationResponseMap["account:GET:/servers/{serverid}"]>;
  ListServers(...args: PostmarkFullApiOperationArgs<"account:GET:/servers">): Promise<PostmarkFullApiOperationResponseMap["account:GET:/servers"]>;
}

export const PostmarkFullApiServersGeneratedFunctionNames = [
  "CreateServer",
  "DeleteServer",
  "EditServerInformation",
  "GetServerInformation",
  "ListServers"
] as const satisfies readonly (keyof PostmarkFullApiServersGeneratedClient)[];

export function createPostmarkFullApiServersGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiServersGeneratedClient {
  return {
    CreateServer: (...args) => callOperation("account:POST:/servers", ...(args as PostmarkFullApiOperationArgs<"account:POST:/servers">)),
    DeleteServer: (...args) => callOperation("account:DELETE:/servers/{serverid}", ...(args as PostmarkFullApiOperationArgs<"account:DELETE:/servers/{serverid}">)),
    EditServerInformation: (...args) => callOperation("account:PUT:/servers/{serverid}", ...(args as PostmarkFullApiOperationArgs<"account:PUT:/servers/{serverid}">)),
    GetServerInformation: (...args) => callOperation("account:GET:/servers/{serverid}", ...(args as PostmarkFullApiOperationArgs<"account:GET:/servers/{serverid}">)),
    ListServers: (...args) => callOperation("account:GET:/servers", ...(args as PostmarkFullApiOperationArgs<"account:GET:/servers">)),
  };
}
