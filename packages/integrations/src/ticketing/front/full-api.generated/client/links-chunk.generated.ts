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
export const FrontFullApiLinksOperationKeys = [
  "list-links",
  "create-link",
  "get-link",
  "update-a-link",
  "list-link-conversations"
] as const;
export type FrontFullApiLinksOperationKey = typeof FrontFullApiLinksOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiLinksOperationPathParamMap {
  "list-links": {};
  "create-link": {};
  "get-link": { "link_id": FrontFullApiPathParamValue };
  "update-a-link": { "link_id": FrontFullApiPathParamValue };
  "list-link-conversations": { "link_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiLinksOperationRequestMap {
  "list-links": FrontFullApiOperationInput<"list-links">;
  "create-link": FrontFullApiOperationInput<"create-link">;
  "get-link": FrontFullApiOperationInput<"get-link">;
  "update-a-link": FrontFullApiOperationInput<"update-a-link">;
  "list-link-conversations": FrontFullApiOperationInput<"list-link-conversations">;
}

export interface FrontFullApiLinksGeneratedClient {
  frontListLinks(...args: FrontFullApiOperationArgs<"list-links">): Promise<FrontFullApiOperationResponseMap["list-links"]>;
  frontCreateLink(...args: FrontFullApiOperationArgs<"create-link">): Promise<FrontFullApiOperationResponseMap["create-link"]>;
  frontGetLink(...args: FrontFullApiOperationArgs<"get-link">): Promise<FrontFullApiOperationResponseMap["get-link"]>;
  frontUpdateALink(...args: FrontFullApiOperationArgs<"update-a-link">): Promise<FrontFullApiOperationResponseMap["update-a-link"]>;
  frontListLinkConversations(...args: FrontFullApiOperationArgs<"list-link-conversations">): Promise<FrontFullApiOperationResponseMap["list-link-conversations"]>;
}

export const FrontFullApiLinksGeneratedFunctionNames = [
  "frontListLinks",
  "frontCreateLink",
  "frontGetLink",
  "frontUpdateALink",
  "frontListLinkConversations"
] as const satisfies readonly (keyof FrontFullApiLinksGeneratedClient)[];

export function createFrontFullApiLinksGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiLinksGeneratedClient {
  return {
    frontListLinks: (...args) => callOperation("list-links", ...(args as FrontFullApiOperationArgs<"list-links">)),
    frontCreateLink: (...args) => callOperation("create-link", ...(args as FrontFullApiOperationArgs<"create-link">)),
    frontGetLink: (...args) => callOperation("get-link", ...(args as FrontFullApiOperationArgs<"get-link">)),
    frontUpdateALink: (...args) => callOperation("update-a-link", ...(args as FrontFullApiOperationArgs<"update-a-link">)),
    frontListLinkConversations: (...args) => callOperation("list-link-conversations", ...(args as FrontFullApiOperationArgs<"list-link-conversations">)),
  };
}
