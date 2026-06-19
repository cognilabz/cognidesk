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
export const PostmarkFullApiDomainsOperationKeys = [
  "account:POST:/domains",
  "account:DELETE:/domains/{domainid}",
  "account:PUT:/domains/{domainid}",
  "account:GET:/domains/{domainid}",
  "account:GET:/domains",
  "account:PUT:/domains/{domainid}/verifydkim",
  "account:PUT:/domains/{domainid}/verifyreturnpath",
  "account:POST:/domains/{domainid}/verifyspf",
  "account:POST:/domains/{domainid}/rotatedkim"
] as const;
export type PostmarkFullApiDomainsOperationKey = typeof PostmarkFullApiDomainsOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiDomainsOperationPathParamMap {
  "account:POST:/domains": {};
  "account:DELETE:/domains/{domainid}": { "domainid": PostmarkFullApiPathParamValue };
  "account:PUT:/domains/{domainid}": { "domainid": PostmarkFullApiPathParamValue };
  "account:GET:/domains/{domainid}": { "domainid": PostmarkFullApiPathParamValue };
  "account:GET:/domains": {};
  "account:PUT:/domains/{domainid}/verifydkim": { "domainid": PostmarkFullApiPathParamValue };
  "account:PUT:/domains/{domainid}/verifyreturnpath": { "domainid": PostmarkFullApiPathParamValue };
  "account:POST:/domains/{domainid}/verifyspf": { "domainid": PostmarkFullApiPathParamValue };
  "account:POST:/domains/{domainid}/rotatedkim": { "domainid": PostmarkFullApiPathParamValue };
}

export interface PostmarkFullApiDomainsOperationRequestMap {
  "account:POST:/domains": PostmarkFullApiOperationInput<"account:POST:/domains">;
  "account:DELETE:/domains/{domainid}": PostmarkFullApiOperationInput<"account:DELETE:/domains/{domainid}">;
  "account:PUT:/domains/{domainid}": PostmarkFullApiOperationInput<"account:PUT:/domains/{domainid}">;
  "account:GET:/domains/{domainid}": PostmarkFullApiOperationInput<"account:GET:/domains/{domainid}">;
  "account:GET:/domains": PostmarkFullApiOperationInput<"account:GET:/domains">;
  "account:PUT:/domains/{domainid}/verifydkim": PostmarkFullApiOperationInput<"account:PUT:/domains/{domainid}/verifydkim">;
  "account:PUT:/domains/{domainid}/verifyreturnpath": PostmarkFullApiOperationInput<"account:PUT:/domains/{domainid}/verifyreturnpath">;
  "account:POST:/domains/{domainid}/verifyspf": PostmarkFullApiOperationInput<"account:POST:/domains/{domainid}/verifyspf">;
  "account:POST:/domains/{domainid}/rotatedkim": PostmarkFullApiOperationInput<"account:POST:/domains/{domainid}/rotatedkim">;
}

export interface PostmarkFullApiDomainsGeneratedClient {
  CreateDomain(...args: PostmarkFullApiOperationArgs<"account:POST:/domains">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/domains"]>;
  DeleteDomain(...args: PostmarkFullApiOperationArgs<"account:DELETE:/domains/{domainid}">): Promise<PostmarkFullApiOperationResponseMap["account:DELETE:/domains/{domainid}"]>;
  EditDomain(...args: PostmarkFullApiOperationArgs<"account:PUT:/domains/{domainid}">): Promise<PostmarkFullApiOperationResponseMap["account:PUT:/domains/{domainid}"]>;
  GetDomain(...args: PostmarkFullApiOperationArgs<"account:GET:/domains/{domainid}">): Promise<PostmarkFullApiOperationResponseMap["account:GET:/domains/{domainid}"]>;
  ListDomains(...args: PostmarkFullApiOperationArgs<"account:GET:/domains">): Promise<PostmarkFullApiOperationResponseMap["account:GET:/domains"]>;
  RequestDkimVerificationForDomain(...args: PostmarkFullApiOperationArgs<"account:PUT:/domains/{domainid}/verifydkim">): Promise<PostmarkFullApiOperationResponseMap["account:PUT:/domains/{domainid}/verifydkim"]>;
  RequestReturnPathVerificationForDomain(...args: PostmarkFullApiOperationArgs<"account:PUT:/domains/{domainid}/verifyreturnpath">): Promise<PostmarkFullApiOperationResponseMap["account:PUT:/domains/{domainid}/verifyreturnpath"]>;
  RequestSPFVerificationForDomain(...args: PostmarkFullApiOperationArgs<"account:POST:/domains/{domainid}/verifyspf">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/domains/{domainid}/verifyspf"]>;
  RotateDKIMKeyForDomain(...args: PostmarkFullApiOperationArgs<"account:POST:/domains/{domainid}/rotatedkim">): Promise<PostmarkFullApiOperationResponseMap["account:POST:/domains/{domainid}/rotatedkim"]>;
}

export const PostmarkFullApiDomainsGeneratedFunctionNames = [
  "CreateDomain",
  "DeleteDomain",
  "EditDomain",
  "GetDomain",
  "ListDomains",
  "RequestDkimVerificationForDomain",
  "RequestReturnPathVerificationForDomain",
  "RequestSPFVerificationForDomain",
  "RotateDKIMKeyForDomain"
] as const satisfies readonly (keyof PostmarkFullApiDomainsGeneratedClient)[];

export function createPostmarkFullApiDomainsGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiDomainsGeneratedClient {
  return {
    CreateDomain: (...args) => callOperation("account:POST:/domains", ...(args as PostmarkFullApiOperationArgs<"account:POST:/domains">)),
    DeleteDomain: (...args) => callOperation("account:DELETE:/domains/{domainid}", ...(args as PostmarkFullApiOperationArgs<"account:DELETE:/domains/{domainid}">)),
    EditDomain: (...args) => callOperation("account:PUT:/domains/{domainid}", ...(args as PostmarkFullApiOperationArgs<"account:PUT:/domains/{domainid}">)),
    GetDomain: (...args) => callOperation("account:GET:/domains/{domainid}", ...(args as PostmarkFullApiOperationArgs<"account:GET:/domains/{domainid}">)),
    ListDomains: (...args) => callOperation("account:GET:/domains", ...(args as PostmarkFullApiOperationArgs<"account:GET:/domains">)),
    RequestDkimVerificationForDomain: (...args) => callOperation("account:PUT:/domains/{domainid}/verifydkim", ...(args as PostmarkFullApiOperationArgs<"account:PUT:/domains/{domainid}/verifydkim">)),
    RequestReturnPathVerificationForDomain: (...args) => callOperation("account:PUT:/domains/{domainid}/verifyreturnpath", ...(args as PostmarkFullApiOperationArgs<"account:PUT:/domains/{domainid}/verifyreturnpath">)),
    RequestSPFVerificationForDomain: (...args) => callOperation("account:POST:/domains/{domainid}/verifyspf", ...(args as PostmarkFullApiOperationArgs<"account:POST:/domains/{domainid}/verifyspf">)),
    RotateDKIMKeyForDomain: (...args) => callOperation("account:POST:/domains/{domainid}/rotatedkim", ...(args as PostmarkFullApiOperationArgs<"account:POST:/domains/{domainid}/rotatedkim">)),
  };
}
