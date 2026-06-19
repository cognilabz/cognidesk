// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiTagsOperationKeys = [
  "delete-tags",
  "list-tags",
  "create-tag",
  "merge-tags",
  "delete-tag",
  "get-tag",
  "update-tag"
] as const;
export type GorgiasFullApiTagsOperationKey = typeof GorgiasFullApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiTagsOperationPathParamMap {
  "delete-tags": {};
  "list-tags": {};
  "create-tag": {};
  "merge-tags": { "destination_tag_id": GorgiasFullApiPathParamValue };
  "delete-tag": { "id": GorgiasFullApiPathParamValue };
  "get-tag": { "id": GorgiasFullApiPathParamValue };
  "update-tag": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiTagsOperationRequestMap {
  "delete-tags": GorgiasFullApiOperationInput<"delete-tags">;
  "list-tags": GorgiasFullApiOperationInput<"list-tags">;
  "create-tag": GorgiasFullApiOperationInput<"create-tag">;
  "merge-tags": GorgiasFullApiOperationInput<"merge-tags">;
  "delete-tag": GorgiasFullApiOperationInput<"delete-tag">;
  "get-tag": GorgiasFullApiOperationInput<"get-tag">;
  "update-tag": GorgiasFullApiOperationInput<"update-tag">;
}

export interface GorgiasFullApiTagsGeneratedClient {
  gorgiasDeleteTags(...args: GorgiasFullApiOperationArgs<"delete-tags">): Promise<GorgiasFullApiOperationResponseMap["delete-tags"]>;
  gorgiasListTags(...args: GorgiasFullApiOperationArgs<"list-tags">): Promise<GorgiasFullApiOperationResponseMap["list-tags"]>;
  gorgiasCreateTag(...args: GorgiasFullApiOperationArgs<"create-tag">): Promise<GorgiasFullApiOperationResponseMap["create-tag"]>;
  gorgiasMergeTags(...args: GorgiasFullApiOperationArgs<"merge-tags">): Promise<GorgiasFullApiOperationResponseMap["merge-tags"]>;
  gorgiasDeleteTag(...args: GorgiasFullApiOperationArgs<"delete-tag">): Promise<GorgiasFullApiOperationResponseMap["delete-tag"]>;
  gorgiasGetTag(...args: GorgiasFullApiOperationArgs<"get-tag">): Promise<GorgiasFullApiOperationResponseMap["get-tag"]>;
  gorgiasUpdateTag(...args: GorgiasFullApiOperationArgs<"update-tag">): Promise<GorgiasFullApiOperationResponseMap["update-tag"]>;
}

export const GorgiasFullApiTagsGeneratedFunctionNames = [
  "gorgiasDeleteTags",
  "gorgiasListTags",
  "gorgiasCreateTag",
  "gorgiasMergeTags",
  "gorgiasDeleteTag",
  "gorgiasGetTag",
  "gorgiasUpdateTag"
] as const satisfies readonly (keyof GorgiasFullApiTagsGeneratedClient)[];

export function createGorgiasFullApiTagsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiTagsGeneratedClient {
  return {
    gorgiasDeleteTags: (...args) => callOperation("delete-tags", ...(args as GorgiasFullApiOperationArgs<"delete-tags">)),
    gorgiasListTags: (...args) => callOperation("list-tags", ...(args as GorgiasFullApiOperationArgs<"list-tags">)),
    gorgiasCreateTag: (...args) => callOperation("create-tag", ...(args as GorgiasFullApiOperationArgs<"create-tag">)),
    gorgiasMergeTags: (...args) => callOperation("merge-tags", ...(args as GorgiasFullApiOperationArgs<"merge-tags">)),
    gorgiasDeleteTag: (...args) => callOperation("delete-tag", ...(args as GorgiasFullApiOperationArgs<"delete-tag">)),
    gorgiasGetTag: (...args) => callOperation("get-tag", ...(args as GorgiasFullApiOperationArgs<"get-tag">)),
    gorgiasUpdateTag: (...args) => callOperation("update-tag", ...(args as GorgiasFullApiOperationArgs<"update-tag">)),
  };
}
