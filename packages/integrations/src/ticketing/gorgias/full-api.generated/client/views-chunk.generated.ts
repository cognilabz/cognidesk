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
export const GorgiasFullApiViewsOperationKeys = [
  "list-views",
  "create-view",
  "delete-view",
  "get-view",
  "update-view",
  "list-view-items",
  "update-view-items"
] as const;
export type GorgiasFullApiViewsOperationKey = typeof GorgiasFullApiViewsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiViewsOperationPathParamMap {
  "list-views": {};
  "create-view": {};
  "delete-view": { "id": GorgiasFullApiPathParamValue };
  "get-view": { "id": GorgiasFullApiPathParamValue };
  "update-view": { "id": GorgiasFullApiPathParamValue };
  "list-view-items": { "view_id": GorgiasFullApiPathParamValue };
  "update-view-items": { "view_id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiViewsOperationRequestMap {
  "list-views": GorgiasFullApiOperationInput<"list-views">;
  "create-view": GorgiasFullApiOperationInput<"create-view">;
  "delete-view": GorgiasFullApiOperationInput<"delete-view">;
  "get-view": GorgiasFullApiOperationInput<"get-view">;
  "update-view": GorgiasFullApiOperationInput<"update-view">;
  "list-view-items": GorgiasFullApiOperationInput<"list-view-items">;
  "update-view-items": GorgiasFullApiOperationInput<"update-view-items">;
}

export interface GorgiasFullApiViewsGeneratedClient {
  gorgiasListViews(...args: GorgiasFullApiOperationArgs<"list-views">): Promise<GorgiasFullApiOperationResponseMap["list-views"]>;
  gorgiasCreateView(...args: GorgiasFullApiOperationArgs<"create-view">): Promise<GorgiasFullApiOperationResponseMap["create-view"]>;
  gorgiasDeleteView(...args: GorgiasFullApiOperationArgs<"delete-view">): Promise<GorgiasFullApiOperationResponseMap["delete-view"]>;
  gorgiasGetView(...args: GorgiasFullApiOperationArgs<"get-view">): Promise<GorgiasFullApiOperationResponseMap["get-view"]>;
  gorgiasUpdateView(...args: GorgiasFullApiOperationArgs<"update-view">): Promise<GorgiasFullApiOperationResponseMap["update-view"]>;
  gorgiasListViewItems(...args: GorgiasFullApiOperationArgs<"list-view-items">): Promise<GorgiasFullApiOperationResponseMap["list-view-items"]>;
  gorgiasUpdateViewItems(...args: GorgiasFullApiOperationArgs<"update-view-items">): Promise<GorgiasFullApiOperationResponseMap["update-view-items"]>;
}

export const GorgiasFullApiViewsGeneratedFunctionNames = [
  "gorgiasListViews",
  "gorgiasCreateView",
  "gorgiasDeleteView",
  "gorgiasGetView",
  "gorgiasUpdateView",
  "gorgiasListViewItems",
  "gorgiasUpdateViewItems"
] as const satisfies readonly (keyof GorgiasFullApiViewsGeneratedClient)[];

export function createGorgiasFullApiViewsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiViewsGeneratedClient {
  return {
    gorgiasListViews: (...args) => callOperation("list-views", ...(args as GorgiasFullApiOperationArgs<"list-views">)),
    gorgiasCreateView: (...args) => callOperation("create-view", ...(args as GorgiasFullApiOperationArgs<"create-view">)),
    gorgiasDeleteView: (...args) => callOperation("delete-view", ...(args as GorgiasFullApiOperationArgs<"delete-view">)),
    gorgiasGetView: (...args) => callOperation("get-view", ...(args as GorgiasFullApiOperationArgs<"get-view">)),
    gorgiasUpdateView: (...args) => callOperation("update-view", ...(args as GorgiasFullApiOperationArgs<"update-view">)),
    gorgiasListViewItems: (...args) => callOperation("list-view-items", ...(args as GorgiasFullApiOperationArgs<"list-view-items">)),
    gorgiasUpdateViewItems: (...args) => callOperation("update-view-items", ...(args as GorgiasFullApiOperationArgs<"update-view-items">)),
  };
}
