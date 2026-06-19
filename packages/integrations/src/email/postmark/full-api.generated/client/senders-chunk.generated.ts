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
export const PostmarkFullApiSendersOperationKeys = [
  "account:POST:/senders",
  "account:DELETE:/senders/{signatureid}",
  "account:PUT:/senders/{signatureid}",
  "account:GET:/senders/{signatureid}",
  "account:GET:/senders",
  "account:POST:/senders/{signatureid}/requestnewdkim",
  "account:POST:/senders/{signatureid}/verifyspf",
  "account:POST:/senders/{signatureid}/resend"
] as const;
export type PostmarkFullApiSendersOperationKey = typeof PostmarkFullApiSendersOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiSendersOperationPathParamMap {
  "account:POST:/senders": {};
  "account:DELETE:/senders/{signatureid}": { "signatureid": PostmarkFullApiPathParamValue };
  "account:PUT:/senders/{signatureid}": { "signatureid": PostmarkFullApiPathParamValue };
  "account:GET:/senders/{signatureid}": { "signatureid": PostmarkFullApiPathParamValue };
  "account:GET:/senders": {};
  "account:POST:/senders/{signatureid}/requestnewdkim": { "signatureid": PostmarkFullApiPathParamValue };
  "account:POST:/senders/{signatureid}/verifyspf": { "signatureid": PostmarkFullApiPathParamValue };
  "account:POST:/senders/{signatureid}/resend": { "signatureid": PostmarkFullApiPathParamValue };
}

export interface PostmarkFullApiSendersOperationRequestMap {
  "account:POST:/senders": PostmarkFullApiOperationInput<"account:POST:/senders">;
  "account:DELETE:/senders/{signatureid}": PostmarkFullApiOperationInput<"account:DELETE:/senders/{signatureid}">;
  "account:PUT:/senders/{signatureid}": PostmarkFullApiOperationInput<"account:PUT:/senders/{signatureid}">;
  "account:GET:/senders/{signatureid}": PostmarkFullApiOperationInput<"account:GET:/senders/{signatureid}">;
  "account:GET:/senders": PostmarkFullApiOperationInput<"account:GET:/senders">;
  "account:POST:/senders/{signatureid}/requestnewdkim": PostmarkFullApiOperationInput<"account:POST:/senders/{signatureid}/requestnewdkim">;
  "account:POST:/senders/{signatureid}/verifyspf": PostmarkFullApiOperationInput<"account:POST:/senders/{signatureid}/verifyspf">;
  "account:POST:/senders/{signatureid}/resend": PostmarkFullApiOperationInput<"account:POST:/senders/{signatureid}/resend">;
}

export interface PostmarkFullApiSendersGeneratedClient {
  CreateSenderSignature(...args: PostmarkFullApiOperationArgs<"account:POST:/senders">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/senders"]>;
  DeleteSenderSignature(...args: PostmarkFullApiOperationArgs<"account:DELETE:/senders/{signatureid}">): Promise<PostmarkFullApiOperationResponseMap["account:DELETE:/senders/{signatureid}"]>;
  EditSenderSignature(...args: PostmarkFullApiOperationArgs<"account:PUT:/senders/{signatureid}">): Promise<PostmarkFullApiOperationResponseMap["account:PUT:/senders/{signatureid}"]>;
  GetSenderSignature(...args: PostmarkFullApiOperationArgs<"account:GET:/senders/{signatureid}">): Promise<PostmarkFullApiOperationResponseMap["account:GET:/senders/{signatureid}"]>;
  ListSenderSignatures(...args: PostmarkFullApiOperationArgs<"account:GET:/senders">): Promise<PostmarkFullApiOperationResponseMap["account:GET:/senders"]>;
  RequestNewDKIMKeyForSenderSignature(...args: PostmarkFullApiOperationArgs<"account:POST:/senders/{signatureid}/requestnewdkim">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/senders/{signatureid}/requestnewdkim"]>;
  RequestSPFVerificationForSenderSignature(...args: PostmarkFullApiOperationArgs<"account:POST:/senders/{signatureid}/verifyspf">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/senders/{signatureid}/verifyspf"]>;
  ResendSenderSignatureConfirmationEmail(...args: PostmarkFullApiOperationArgs<"account:POST:/senders/{signatureid}/resend">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/senders/{signatureid}/resend"]>;
}

export const PostmarkFullApiSendersGeneratedFunctionNames = [
  "CreateSenderSignature",
  "DeleteSenderSignature",
  "EditSenderSignature",
  "GetSenderSignature",
  "ListSenderSignatures",
  "RequestNewDKIMKeyForSenderSignature",
  "RequestSPFVerificationForSenderSignature",
  "ResendSenderSignatureConfirmationEmail"
] as const satisfies readonly (keyof PostmarkFullApiSendersGeneratedClient)[];

export function createPostmarkFullApiSendersGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiSendersGeneratedClient {
  return {
    CreateSenderSignature: (...args) => callOperation("account:POST:/senders", ...(args as PostmarkFullApiOperationArgs<"account:POST:/senders">)),
    DeleteSenderSignature: (...args) => callOperation("account:DELETE:/senders/{signatureid}", ...(args as PostmarkFullApiOperationArgs<"account:DELETE:/senders/{signatureid}">)),
    EditSenderSignature: (...args) => callOperation("account:PUT:/senders/{signatureid}", ...(args as PostmarkFullApiOperationArgs<"account:PUT:/senders/{signatureid}">)),
    GetSenderSignature: (...args) => callOperation("account:GET:/senders/{signatureid}", ...(args as PostmarkFullApiOperationArgs<"account:GET:/senders/{signatureid}">)),
    ListSenderSignatures: (...args) => callOperation("account:GET:/senders", ...(args as PostmarkFullApiOperationArgs<"account:GET:/senders">)),
    RequestNewDKIMKeyForSenderSignature: (...args) => callOperation("account:POST:/senders/{signatureid}/requestnewdkim", ...(args as PostmarkFullApiOperationArgs<"account:POST:/senders/{signatureid}/requestnewdkim">)),
    RequestSPFVerificationForSenderSignature: (...args) => callOperation("account:POST:/senders/{signatureid}/verifyspf", ...(args as PostmarkFullApiOperationArgs<"account:POST:/senders/{signatureid}/verifyspf">)),
    ResendSenderSignatureConfirmationEmail: (...args) => callOperation("account:POST:/senders/{signatureid}/resend", ...(args as PostmarkFullApiOperationArgs<"account:POST:/senders/{signatureid}/resend">)),
  };
}
