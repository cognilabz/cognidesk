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
export const FrontFullApiTagsOperationKeys = [
  "list-company-tags",
  "create-company-tag",
  "list-tags",
  "create-tag",
  "delete-tag",
  "get-tag",
  "update-a-tag",
  "list-tag-children",
  "create-child-tag",
  "list-tagged-conversations",
  "list-teammate-tags",
  "create-teammate-tag",
  "list-team-tags",
  "create-team-tag"
] as const;
export type FrontFullApiTagsOperationKey = typeof FrontFullApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiTagsOperationPathParamMap {
  "list-company-tags": {};
  "create-company-tag": {};
  "list-tags": {};
  "create-tag": {};
  "delete-tag": { "tag_id": FrontFullApiPathParamValue };
  "get-tag": { "tag_id": FrontFullApiPathParamValue };
  "update-a-tag": { "tag_id": FrontFullApiPathParamValue };
  "list-tag-children": { "tag_id": FrontFullApiPathParamValue };
  "create-child-tag": { "tag_id": FrontFullApiPathParamValue };
  "list-tagged-conversations": { "tag_id": FrontFullApiPathParamValue };
  "list-teammate-tags": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-tag": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-tags": { "team_id": FrontFullApiPathParamValue };
  "create-team-tag": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiTagsOperationRequestMap {
  "list-company-tags": FrontFullApiOperationInput<"list-company-tags">;
  "create-company-tag": FrontFullApiOperationInput<"create-company-tag">;
  "list-tags": FrontFullApiOperationInput<"list-tags">;
  "create-tag": FrontFullApiOperationInput<"create-tag">;
  "delete-tag": FrontFullApiOperationInput<"delete-tag">;
  "get-tag": FrontFullApiOperationInput<"get-tag">;
  "update-a-tag": FrontFullApiOperationInput<"update-a-tag">;
  "list-tag-children": FrontFullApiOperationInput<"list-tag-children">;
  "create-child-tag": FrontFullApiOperationInput<"create-child-tag">;
  "list-tagged-conversations": FrontFullApiOperationInput<"list-tagged-conversations">;
  "list-teammate-tags": FrontFullApiOperationInput<"list-teammate-tags">;
  "create-teammate-tag": FrontFullApiOperationInput<"create-teammate-tag">;
  "list-team-tags": FrontFullApiOperationInput<"list-team-tags">;
  "create-team-tag": FrontFullApiOperationInput<"create-team-tag">;
}

export interface FrontFullApiTagsGeneratedClient {
  frontListCompanyTags(...args: FrontFullApiOperationArgs<"list-company-tags">): Promise<FrontFullApiOperationResponseMap["list-company-tags"]>;
  frontCreateCompanyTag(...args: FrontFullApiOperationArgs<"create-company-tag">): Promise<FrontFullApiOperationResponseMap["create-company-tag"]>;
  frontListTags(...args: FrontFullApiOperationArgs<"list-tags">): Promise<FrontFullApiOperationResponseMap["list-tags"]>;
  frontCreateTag(...args: FrontFullApiOperationArgs<"create-tag">): Promise<FrontFullApiOperationResponseMap["create-tag"]>;
  frontDeleteTag(...args: FrontFullApiOperationArgs<"delete-tag">): Promise<FrontFullApiOperationResponseMap["delete-tag"]>;
  frontGetTag(...args: FrontFullApiOperationArgs<"get-tag">): Promise<FrontFullApiOperationResponseMap["get-tag"]>;
  frontUpdateATag(...args: FrontFullApiOperationArgs<"update-a-tag">): Promise<FrontFullApiOperationResponseMap["update-a-tag"]>;
  frontListTagChildren(...args: FrontFullApiOperationArgs<"list-tag-children">): Promise<FrontFullApiOperationResponseMap["list-tag-children"]>;
  frontCreateChildTag(...args: FrontFullApiOperationArgs<"create-child-tag">): Promise<FrontFullApiOperationResponseMap["create-child-tag"]>;
  frontListTaggedConversations(...args: FrontFullApiOperationArgs<"list-tagged-conversations">): Promise<FrontFullApiOperationResponseMap["list-tagged-conversations"]>;
  frontListTeammateTags(...args: FrontFullApiOperationArgs<"list-teammate-tags">): Promise<FrontFullApiOperationResponseMap["list-teammate-tags"]>;
  frontCreateTeammateTag(...args: FrontFullApiOperationArgs<"create-teammate-tag">): Promise<FrontFullApiOperationResponseMap["create-teammate-tag"]>;
  frontListTeamTags(...args: FrontFullApiOperationArgs<"list-team-tags">): Promise<FrontFullApiOperationResponseMap["list-team-tags"]>;
  frontCreateTeamTag(...args: FrontFullApiOperationArgs<"create-team-tag">): Promise<FrontFullApiOperationResponseMap["create-team-tag"]>;
}

export const FrontFullApiTagsGeneratedFunctionNames = [
  "frontListCompanyTags",
  "frontCreateCompanyTag",
  "frontListTags",
  "frontCreateTag",
  "frontDeleteTag",
  "frontGetTag",
  "frontUpdateATag",
  "frontListTagChildren",
  "frontCreateChildTag",
  "frontListTaggedConversations",
  "frontListTeammateTags",
  "frontCreateTeammateTag",
  "frontListTeamTags",
  "frontCreateTeamTag"
] as const satisfies readonly (keyof FrontFullApiTagsGeneratedClient)[];

export function createFrontFullApiTagsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiTagsGeneratedClient {
  return {
    frontListCompanyTags: (...args) => callOperation("list-company-tags", ...(args as FrontFullApiOperationArgs<"list-company-tags">)),
    frontCreateCompanyTag: (...args) => callOperation("create-company-tag", ...(args as FrontFullApiOperationArgs<"create-company-tag">)),
    frontListTags: (...args) => callOperation("list-tags", ...(args as FrontFullApiOperationArgs<"list-tags">)),
    frontCreateTag: (...args) => callOperation("create-tag", ...(args as FrontFullApiOperationArgs<"create-tag">)),
    frontDeleteTag: (...args) => callOperation("delete-tag", ...(args as FrontFullApiOperationArgs<"delete-tag">)),
    frontGetTag: (...args) => callOperation("get-tag", ...(args as FrontFullApiOperationArgs<"get-tag">)),
    frontUpdateATag: (...args) => callOperation("update-a-tag", ...(args as FrontFullApiOperationArgs<"update-a-tag">)),
    frontListTagChildren: (...args) => callOperation("list-tag-children", ...(args as FrontFullApiOperationArgs<"list-tag-children">)),
    frontCreateChildTag: (...args) => callOperation("create-child-tag", ...(args as FrontFullApiOperationArgs<"create-child-tag">)),
    frontListTaggedConversations: (...args) => callOperation("list-tagged-conversations", ...(args as FrontFullApiOperationArgs<"list-tagged-conversations">)),
    frontListTeammateTags: (...args) => callOperation("list-teammate-tags", ...(args as FrontFullApiOperationArgs<"list-teammate-tags">)),
    frontCreateTeammateTag: (...args) => callOperation("create-teammate-tag", ...(args as FrontFullApiOperationArgs<"create-teammate-tag">)),
    frontListTeamTags: (...args) => callOperation("list-team-tags", ...(args as FrontFullApiOperationArgs<"list-team-tags">)),
    frontCreateTeamTag: (...args) => callOperation("create-team-tag", ...(args as FrontFullApiOperationArgs<"create-team-tag">)),
  };
}
