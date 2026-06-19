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
export const PostmarkFullApiEmailOperationKeys = [
  "server:POST:/email",
  "server:POST:/email/batch",
  "server:POST:/email/batchWithTemplates",
  "server:POST:/email/withTemplate"
] as const;
export type PostmarkFullApiEmailOperationKey = typeof PostmarkFullApiEmailOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiEmailOperationPathParamMap {
  "server:POST:/email": {};
  "server:POST:/email/batch": {};
  "server:POST:/email/batchWithTemplates": {};
  "server:POST:/email/withTemplate": {};
}

export interface PostmarkFullApiEmailOperationRequestMap {
  "server:POST:/email": PostmarkFullApiOperationInput<"server:POST:/email">;
  "server:POST:/email/batch": PostmarkFullApiOperationInput<"server:POST:/email/batch">;
  "server:POST:/email/batchWithTemplates": PostmarkFullApiOperationInput<"server:POST:/email/batchWithTemplates">;
  "server:POST:/email/withTemplate": PostmarkFullApiOperationInput<"server:POST:/email/withTemplate">;
}

export interface PostmarkFullApiEmailGeneratedClient {
  SendEmail(...args: PostmarkFullApiOperationArgs<"server:POST:/email">): Promise<PostmarkFullApiOperationResponseMap["server:POST:/email"]>;
  SendEmailBatch(...args: PostmarkFullApiOperationArgs<"server:POST:/email/batch">): Promise<PostmarkFullApiOperationResponseMap["server:POST:/email/batch"]>;
  SendEmailBatchWithTemplates(...args: PostmarkFullApiOperationArgs<"server:POST:/email/batchWithTemplates">): Promise<PostmarkFullApiOperationResponseMap["server:POST:/email/batchWithTemplates"]>;
  SendEmailWithTemplate(...args: PostmarkFullApiOperationArgs<"server:POST:/email/withTemplate">): Promise<PostmarkFullApiOperationResponseMap["server:POST:/email/withTemplate"]>;
}

export const PostmarkFullApiEmailGeneratedFunctionNames = [
  "SendEmail",
  "SendEmailBatch",
  "SendEmailBatchWithTemplates",
  "SendEmailWithTemplate"
] as const satisfies readonly (keyof PostmarkFullApiEmailGeneratedClient)[];

export function createPostmarkFullApiEmailGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiEmailGeneratedClient {
  return {
    SendEmail: (...args) => callOperation("server:POST:/email", ...(args as PostmarkFullApiOperationArgs<"server:POST:/email">)),
    SendEmailBatch: (...args) => callOperation("server:POST:/email/batch", ...(args as PostmarkFullApiOperationArgs<"server:POST:/email/batch">)),
    SendEmailBatchWithTemplates: (...args) => callOperation("server:POST:/email/batchWithTemplates", ...(args as PostmarkFullApiOperationArgs<"server:POST:/email/batchWithTemplates">)),
    SendEmailWithTemplate: (...args) => callOperation("server:POST:/email/withTemplate", ...(args as PostmarkFullApiOperationArgs<"server:POST:/email/withTemplate">)),
  };
}
