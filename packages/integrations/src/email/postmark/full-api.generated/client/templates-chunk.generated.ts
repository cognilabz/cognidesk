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
export const PostmarkFullApiTemplatesOperationKeys = [
  "server:DELETE:/templates/{templateIdOrAlias}",
  "server:GET:/templates/{templateIdOrAlias}",
  "server:GET:/templates",
  "server:POST:/templates",
  "account:PUT:/templates/push",
  "server:POST:/templates/validate",
  "server:PUT:/templates/{templateIdOrAlias}"
] as const;
export type PostmarkFullApiTemplatesOperationKey = typeof PostmarkFullApiTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiTemplatesOperationPathParamMap {
  "server:DELETE:/templates/{templateIdOrAlias}": { "templateIdOrAlias": PostmarkFullApiPathParamValue };
  "server:GET:/templates/{templateIdOrAlias}": { "templateIdOrAlias": PostmarkFullApiPathParamValue };
  "server:GET:/templates": {};
  "server:POST:/templates": {};
  "account:PUT:/templates/push": {};
  "server:POST:/templates/validate": {};
  "server:PUT:/templates/{templateIdOrAlias}": { "templateIdOrAlias": PostmarkFullApiPathParamValue };
}

export interface PostmarkFullApiTemplatesOperationRequestMap {
  "server:DELETE:/templates/{templateIdOrAlias}": PostmarkFullApiOperationInput<"server:DELETE:/templates/{templateIdOrAlias}">;
  "server:GET:/templates/{templateIdOrAlias}": PostmarkFullApiOperationInput<"server:GET:/templates/{templateIdOrAlias}">;
  "server:GET:/templates": PostmarkFullApiOperationInput<"server:GET:/templates">;
  "server:POST:/templates": PostmarkFullApiOperationInput<"server:POST:/templates">;
  "account:PUT:/templates/push": PostmarkFullApiOperationInput<"account:PUT:/templates/push">;
  "server:POST:/templates/validate": PostmarkFullApiOperationInput<"server:POST:/templates/validate">;
  "server:PUT:/templates/{templateIdOrAlias}": PostmarkFullApiOperationInput<"server:PUT:/templates/{templateIdOrAlias}">;
}

export interface PostmarkFullApiTemplatesGeneratedClient {
  DeleteTemplate(...args: PostmarkFullApiOperationArgs<"server:DELETE:/templates/{templateIdOrAlias}">): Promise<PostmarkFullApiOperationResponseMap["server:DELETE:/templates/{templateIdOrAlias}"]>;
  GetSingleTemplate(...args: PostmarkFullApiOperationArgs<"server:GET:/templates/{templateIdOrAlias}">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/templates/{templateIdOrAlias}"]>;
  ListTemplates(...args: PostmarkFullApiOperationArgs<"server:GET:/templates">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/templates"]>;
  POSTTemplates(...args: PostmarkFullApiOperationArgs<"server:POST:/templates">): Promise<PostmarkFullApiOperationResponseMap["server:POST:/templates"]>;
  PushTemplates(...args: PostmarkFullApiOperationArgs<"account:PUT:/templates/push">): Promise<PostmarkFullApiOperationResponseMap["account:PUT:/templates/push"]>;
  TestTemplateContent(...args: PostmarkFullApiOperationArgs<"server:POST:/templates/validate">): Promise<PostmarkFullApiOperationResponseMap["server:POST:/templates/validate"]>;
  UpdateTemplate(...args: PostmarkFullApiOperationArgs<"server:PUT:/templates/{templateIdOrAlias}">): Promise<PostmarkFullApiOperationResponseMap["server:PUT:/templates/{templateIdOrAlias}"]>;
}

export const PostmarkFullApiTemplatesGeneratedFunctionNames = [
  "DeleteTemplate",
  "GetSingleTemplate",
  "ListTemplates",
  "POSTTemplates",
  "PushTemplates",
  "TestTemplateContent",
  "UpdateTemplate"
] as const satisfies readonly (keyof PostmarkFullApiTemplatesGeneratedClient)[];

export function createPostmarkFullApiTemplatesGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiTemplatesGeneratedClient {
  return {
    DeleteTemplate: (...args) => callOperation("server:DELETE:/templates/{templateIdOrAlias}", ...(args as PostmarkFullApiOperationArgs<"server:DELETE:/templates/{templateIdOrAlias}">)),
    GetSingleTemplate: (...args) => callOperation("server:GET:/templates/{templateIdOrAlias}", ...(args as PostmarkFullApiOperationArgs<"server:GET:/templates/{templateIdOrAlias}">)),
    ListTemplates: (...args) => callOperation("server:GET:/templates", ...(args as PostmarkFullApiOperationArgs<"server:GET:/templates">)),
    POSTTemplates: (...args) => callOperation("server:POST:/templates", ...(args as PostmarkFullApiOperationArgs<"server:POST:/templates">)),
    PushTemplates: (...args) => callOperation("account:PUT:/templates/push", ...(args as PostmarkFullApiOperationArgs<"account:PUT:/templates/push">)),
    TestTemplateContent: (...args) => callOperation("server:POST:/templates/validate", ...(args as PostmarkFullApiOperationArgs<"server:POST:/templates/validate">)),
    UpdateTemplate: (...args) => callOperation("server:PUT:/templates/{templateIdOrAlias}", ...(args as PostmarkFullApiOperationArgs<"server:PUT:/templates/{templateIdOrAlias}">)),
  };
}
