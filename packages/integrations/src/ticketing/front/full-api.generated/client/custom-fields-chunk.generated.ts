// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiCustomFieldsOperationKeys = [
  "list-account-custom-fields",
  "list-contact-custom-fields",
  "list-conversation-custom-fields",
  "list-custom-fields",
  "list-inbox-custom-fields",
  "list-link-custom-fields",
  "list-teammate-custom-fields"
] as const;
export type FrontFullApiCustomFieldsOperationKey = typeof FrontFullApiCustomFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiCustomFieldsOperationPathParamMap {
  "list-account-custom-fields": {};
  "list-contact-custom-fields": {};
  "list-conversation-custom-fields": {};
  "list-custom-fields": {};
  "list-inbox-custom-fields": {};
  "list-link-custom-fields": {};
  "list-teammate-custom-fields": {};
}

export interface FrontFullApiCustomFieldsOperationRequestMap {
  "list-account-custom-fields": FrontFullApiOperationInput<"list-account-custom-fields">;
  "list-contact-custom-fields": FrontFullApiOperationInput<"list-contact-custom-fields">;
  "list-conversation-custom-fields": FrontFullApiOperationInput<"list-conversation-custom-fields">;
  "list-custom-fields": FrontFullApiOperationInput<"list-custom-fields">;
  "list-inbox-custom-fields": FrontFullApiOperationInput<"list-inbox-custom-fields">;
  "list-link-custom-fields": FrontFullApiOperationInput<"list-link-custom-fields">;
  "list-teammate-custom-fields": FrontFullApiOperationInput<"list-teammate-custom-fields">;
}

export interface FrontFullApiCustomFieldsGeneratedClient {
  frontListAccountCustomFields(...args: FrontFullApiOperationArgs<"list-account-custom-fields">): Promise<FrontFullApiOperationResponseMap["list-account-custom-fields"]>;
  frontListContactCustomFields(...args: FrontFullApiOperationArgs<"list-contact-custom-fields">): Promise<FrontFullApiOperationResponseMap["list-contact-custom-fields"]>;
  frontListConversationCustomFields(...args: FrontFullApiOperationArgs<"list-conversation-custom-fields">): Promise<FrontFullApiOperationResponseMap["list-conversation-custom-fields"]>;
  frontListCustomFields(...args: FrontFullApiOperationArgs<"list-custom-fields">): Promise<FrontFullApiOperationResponseMap["list-custom-fields"]>;
  frontListInboxCustomFields(...args: FrontFullApiOperationArgs<"list-inbox-custom-fields">): Promise<FrontFullApiOperationResponseMap["list-inbox-custom-fields"]>;
  frontListLinkCustomFields(...args: FrontFullApiOperationArgs<"list-link-custom-fields">): Promise<FrontFullApiOperationResponseMap["list-link-custom-fields"]>;
  frontListTeammateCustomFields(...args: FrontFullApiOperationArgs<"list-teammate-custom-fields">): Promise<FrontFullApiOperationResponseMap["list-teammate-custom-fields"]>;
}

export const FrontFullApiCustomFieldsGeneratedFunctionNames = [
  "frontListAccountCustomFields",
  "frontListContactCustomFields",
  "frontListConversationCustomFields",
  "frontListCustomFields",
  "frontListInboxCustomFields",
  "frontListLinkCustomFields",
  "frontListTeammateCustomFields"
] as const satisfies readonly (keyof FrontFullApiCustomFieldsGeneratedClient)[];

export function createFrontFullApiCustomFieldsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiCustomFieldsGeneratedClient {
  return {
    frontListAccountCustomFields: (...args) => callOperation("list-account-custom-fields", ...(args as FrontFullApiOperationArgs<"list-account-custom-fields">)),
    frontListContactCustomFields: (...args) => callOperation("list-contact-custom-fields", ...(args as FrontFullApiOperationArgs<"list-contact-custom-fields">)),
    frontListConversationCustomFields: (...args) => callOperation("list-conversation-custom-fields", ...(args as FrontFullApiOperationArgs<"list-conversation-custom-fields">)),
    frontListCustomFields: (...args) => callOperation("list-custom-fields", ...(args as FrontFullApiOperationArgs<"list-custom-fields">)),
    frontListInboxCustomFields: (...args) => callOperation("list-inbox-custom-fields", ...(args as FrontFullApiOperationArgs<"list-inbox-custom-fields">)),
    frontListLinkCustomFields: (...args) => callOperation("list-link-custom-fields", ...(args as FrontFullApiOperationArgs<"list-link-custom-fields">)),
    frontListTeammateCustomFields: (...args) => callOperation("list-teammate-custom-fields", ...(args as FrontFullApiOperationArgs<"list-teammate-custom-fields">)),
  };
}
