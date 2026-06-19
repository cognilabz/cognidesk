// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiBookmarksOperationKeys = [
  "CreateBookmark",
  "DeleteBookmark",
  "ListBookmarks"
] as const;
export type ZendeskFullApiBookmarksOperationKey = typeof ZendeskFullApiBookmarksOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiBookmarksOperationPathParamMap {
  "CreateBookmark": {};
  "DeleteBookmark": { "bookmark_id": ZendeskFullApiPathParamValue };
  "ListBookmarks": {};
}

export interface ZendeskFullApiBookmarksOperationRequestMap {
  "CreateBookmark": ZendeskFullApiOperationInput<"CreateBookmark">;
  "DeleteBookmark": ZendeskFullApiOperationInput<"DeleteBookmark">;
  "ListBookmarks": ZendeskFullApiOperationInput<"ListBookmarks">;
}

export interface ZendeskFullApiBookmarksGeneratedClient {
  CreateBookmark(...args: ZendeskFullApiOperationArgs<"CreateBookmark">): Promise<ZendeskFullApiOperationResponseMap["CreateBookmark"]>;
  DeleteBookmark(...args: ZendeskFullApiOperationArgs<"DeleteBookmark">): Promise<ZendeskFullApiOperationResponseMap["DeleteBookmark"]>;
  ListBookmarks(...args: ZendeskFullApiOperationArgs<"ListBookmarks">): Promise<ZendeskFullApiOperationResponseMap["ListBookmarks"]>;
}

export const ZendeskFullApiBookmarksGeneratedFunctionNames = [
  "CreateBookmark",
  "DeleteBookmark",
  "ListBookmarks"
] as const satisfies readonly (keyof ZendeskFullApiBookmarksGeneratedClient)[];

export function createZendeskFullApiBookmarksGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiBookmarksGeneratedClient {
  return {
    CreateBookmark: (...args) => callOperation("CreateBookmark", ...(args as ZendeskFullApiOperationArgs<"CreateBookmark">)),
    DeleteBookmark: (...args) => callOperation("DeleteBookmark", ...(args as ZendeskFullApiOperationArgs<"DeleteBookmark">)),
    ListBookmarks: (...args) => callOperation("ListBookmarks", ...(args as ZendeskFullApiOperationArgs<"ListBookmarks">)),
  };
}
