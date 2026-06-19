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
export const ZendeskFullApiViewsOperationKeys = [
  "BulkDeleteViews",
  "CountViews",
  "CreateView",
  "DeleteView",
  "ExecuteView",
  "ExportView",
  "GetViewCount",
  "GetViewCounts",
  "ListActiveViews",
  "ListCompactViews",
  "ListTicketsFromView",
  "ListViewDefinitions",
  "ListViews",
  "ListViewsById",
  "PreviewCount",
  "PreviewViews",
  "SearchViews",
  "ShowView",
  "UpdateManyViews",
  "UpdateView"
] as const;
export type ZendeskFullApiViewsOperationKey = typeof ZendeskFullApiViewsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiViewsOperationPathParamMap {
  "BulkDeleteViews": {};
  "CountViews": {};
  "CreateView": {};
  "DeleteView": { "view_id": ZendeskFullApiPathParamValue };
  "ExecuteView": { "view_id": ZendeskFullApiPathParamValue };
  "ExportView": { "view_id": ZendeskFullApiPathParamValue };
  "GetViewCount": { "view_id": ZendeskFullApiPathParamValue };
  "GetViewCounts": {};
  "ListActiveViews": {};
  "ListCompactViews": {};
  "ListTicketsFromView": { "view_id": ZendeskFullApiPathParamValue };
  "ListViewDefinitions": {};
  "ListViews": {};
  "ListViewsById": {};
  "PreviewCount": {};
  "PreviewViews": {};
  "SearchViews": {};
  "ShowView": { "view_id": ZendeskFullApiPathParamValue };
  "UpdateManyViews": {};
  "UpdateView": { "view_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiViewsOperationRequestMap {
  "BulkDeleteViews": ZendeskFullApiOperationInput<"BulkDeleteViews">;
  "CountViews": ZendeskFullApiOperationInput<"CountViews">;
  "CreateView": ZendeskFullApiOperationInput<"CreateView">;
  "DeleteView": ZendeskFullApiOperationInput<"DeleteView">;
  "ExecuteView": ZendeskFullApiOperationInput<"ExecuteView">;
  "ExportView": ZendeskFullApiOperationInput<"ExportView">;
  "GetViewCount": ZendeskFullApiOperationInput<"GetViewCount">;
  "GetViewCounts": ZendeskFullApiOperationInput<"GetViewCounts">;
  "ListActiveViews": ZendeskFullApiOperationInput<"ListActiveViews">;
  "ListCompactViews": ZendeskFullApiOperationInput<"ListCompactViews">;
  "ListTicketsFromView": ZendeskFullApiOperationInput<"ListTicketsFromView">;
  "ListViewDefinitions": ZendeskFullApiOperationInput<"ListViewDefinitions">;
  "ListViews": ZendeskFullApiOperationInput<"ListViews">;
  "ListViewsById": ZendeskFullApiOperationInput<"ListViewsById">;
  "PreviewCount": ZendeskFullApiOperationInput<"PreviewCount">;
  "PreviewViews": ZendeskFullApiOperationInput<"PreviewViews">;
  "SearchViews": ZendeskFullApiOperationInput<"SearchViews">;
  "ShowView": ZendeskFullApiOperationInput<"ShowView">;
  "UpdateManyViews": ZendeskFullApiOperationInput<"UpdateManyViews">;
  "UpdateView": ZendeskFullApiOperationInput<"UpdateView">;
}

export interface ZendeskFullApiViewsGeneratedClient {
  BulkDeleteViews(...args: ZendeskFullApiOperationArgs<"BulkDeleteViews">): Promise<ZendeskFullApiOperationResponseMap["BulkDeleteViews"]>;
  CountViews(...args: ZendeskFullApiOperationArgs<"CountViews">): Promise<ZendeskFullApiOperationResponseMap["CountViews"]>;
  CreateView(...args: ZendeskFullApiOperationArgs<"CreateView">): Promise<ZendeskFullApiOperationResponseMap["CreateView"]>;
  DeleteView(...args: ZendeskFullApiOperationArgs<"DeleteView">): Promise<ZendeskFullApiOperationResponseMap["DeleteView"]>;
  ExecuteView(...args: ZendeskFullApiOperationArgs<"ExecuteView">): Promise<ZendeskFullApiOperationResponseMap["ExecuteView"]>;
  ExportView(...args: ZendeskFullApiOperationArgs<"ExportView">): Promise<ZendeskFullApiOperationResponseMap["ExportView"]>;
  GetViewCount(...args: ZendeskFullApiOperationArgs<"GetViewCount">): Promise<ZendeskFullApiOperationResponseMap["GetViewCount"]>;
  GetViewCounts(...args: ZendeskFullApiOperationArgs<"GetViewCounts">): Promise<ZendeskFullApiOperationResponseMap["GetViewCounts"]>;
  ListActiveViews(...args: ZendeskFullApiOperationArgs<"ListActiveViews">): Promise<ZendeskFullApiOperationResponseMap["ListActiveViews"]>;
  ListCompactViews(...args: ZendeskFullApiOperationArgs<"ListCompactViews">): Promise<ZendeskFullApiOperationResponseMap["ListCompactViews"]>;
  ListTicketsFromView(...args: ZendeskFullApiOperationArgs<"ListTicketsFromView">): Promise<ZendeskFullApiOperationResponseMap["ListTicketsFromView"]>;
  ListViewDefinitions(...args: ZendeskFullApiOperationArgs<"ListViewDefinitions">): Promise<ZendeskFullApiOperationResponseMap["ListViewDefinitions"]>;
  ListViews(...args: ZendeskFullApiOperationArgs<"ListViews">): Promise<ZendeskFullApiOperationResponseMap["ListViews"]>;
  ListViewsById(...args: ZendeskFullApiOperationArgs<"ListViewsById">): Promise<ZendeskFullApiOperationResponseMap["ListViewsById"]>;
  PreviewCount(...args: ZendeskFullApiOperationArgs<"PreviewCount">): Promise<ZendeskFullApiOperationResponseMap["PreviewCount"]>;
  PreviewViews(...args: ZendeskFullApiOperationArgs<"PreviewViews">): Promise<ZendeskFullApiOperationResponseMap["PreviewViews"]>;
  SearchViews(...args: ZendeskFullApiOperationArgs<"SearchViews">): Promise<ZendeskFullApiOperationResponseMap["SearchViews"]>;
  ShowView(...args: ZendeskFullApiOperationArgs<"ShowView">): Promise<ZendeskFullApiOperationResponseMap["ShowView"]>;
  UpdateManyViews(...args: ZendeskFullApiOperationArgs<"UpdateManyViews">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyViews"]>;
  UpdateView(...args: ZendeskFullApiOperationArgs<"UpdateView">): Promise<ZendeskFullApiOperationResponseMap["UpdateView"]>;
}

export const ZendeskFullApiViewsGeneratedFunctionNames = [
  "BulkDeleteViews",
  "CountViews",
  "CreateView",
  "DeleteView",
  "ExecuteView",
  "ExportView",
  "GetViewCount",
  "GetViewCounts",
  "ListActiveViews",
  "ListCompactViews",
  "ListTicketsFromView",
  "ListViewDefinitions",
  "ListViews",
  "ListViewsById",
  "PreviewCount",
  "PreviewViews",
  "SearchViews",
  "ShowView",
  "UpdateManyViews",
  "UpdateView"
] as const satisfies readonly (keyof ZendeskFullApiViewsGeneratedClient)[];

export function createZendeskFullApiViewsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiViewsGeneratedClient {
  return {
    BulkDeleteViews: (...args) => callOperation("BulkDeleteViews", ...(args as ZendeskFullApiOperationArgs<"BulkDeleteViews">)),
    CountViews: (...args) => callOperation("CountViews", ...(args as ZendeskFullApiOperationArgs<"CountViews">)),
    CreateView: (...args) => callOperation("CreateView", ...(args as ZendeskFullApiOperationArgs<"CreateView">)),
    DeleteView: (...args) => callOperation("DeleteView", ...(args as ZendeskFullApiOperationArgs<"DeleteView">)),
    ExecuteView: (...args) => callOperation("ExecuteView", ...(args as ZendeskFullApiOperationArgs<"ExecuteView">)),
    ExportView: (...args) => callOperation("ExportView", ...(args as ZendeskFullApiOperationArgs<"ExportView">)),
    GetViewCount: (...args) => callOperation("GetViewCount", ...(args as ZendeskFullApiOperationArgs<"GetViewCount">)),
    GetViewCounts: (...args) => callOperation("GetViewCounts", ...(args as ZendeskFullApiOperationArgs<"GetViewCounts">)),
    ListActiveViews: (...args) => callOperation("ListActiveViews", ...(args as ZendeskFullApiOperationArgs<"ListActiveViews">)),
    ListCompactViews: (...args) => callOperation("ListCompactViews", ...(args as ZendeskFullApiOperationArgs<"ListCompactViews">)),
    ListTicketsFromView: (...args) => callOperation("ListTicketsFromView", ...(args as ZendeskFullApiOperationArgs<"ListTicketsFromView">)),
    ListViewDefinitions: (...args) => callOperation("ListViewDefinitions", ...(args as ZendeskFullApiOperationArgs<"ListViewDefinitions">)),
    ListViews: (...args) => callOperation("ListViews", ...(args as ZendeskFullApiOperationArgs<"ListViews">)),
    ListViewsById: (...args) => callOperation("ListViewsById", ...(args as ZendeskFullApiOperationArgs<"ListViewsById">)),
    PreviewCount: (...args) => callOperation("PreviewCount", ...(args as ZendeskFullApiOperationArgs<"PreviewCount">)),
    PreviewViews: (...args) => callOperation("PreviewViews", ...(args as ZendeskFullApiOperationArgs<"PreviewViews">)),
    SearchViews: (...args) => callOperation("SearchViews", ...(args as ZendeskFullApiOperationArgs<"SearchViews">)),
    ShowView: (...args) => callOperation("ShowView", ...(args as ZendeskFullApiOperationArgs<"ShowView">)),
    UpdateManyViews: (...args) => callOperation("UpdateManyViews", ...(args as ZendeskFullApiOperationArgs<"UpdateManyViews">)),
    UpdateView: (...args) => callOperation("UpdateView", ...(args as ZendeskFullApiOperationArgs<"UpdateView">)),
  };
}
