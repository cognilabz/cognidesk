// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiViewsOperationKeys = [
  "connect:CreateView",
  "connect:CreateViewVersion",
  "connect:DeleteView",
  "connect:DeleteViewVersion",
  "connect:DescribeView",
  "connect:ListViewVersions",
  "connect:ListViews",
  "connect:UpdateViewContent",
  "connect:UpdateViewMetadata"
] as const;
export type AmazonConnectFullApiViewsOperationKey = typeof AmazonConnectFullApiViewsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiViewsOperationPathParamMap {
  "connect:CreateView": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateViewVersion": { "InstanceId": AmazonConnectFullApiPathParamValue; "ViewId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteView": { "InstanceId": AmazonConnectFullApiPathParamValue; "ViewId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteViewVersion": { "InstanceId": AmazonConnectFullApiPathParamValue; "ViewId": AmazonConnectFullApiPathParamValue; "ViewVersion": AmazonConnectFullApiPathParamValue };
  "connect:DescribeView": { "InstanceId": AmazonConnectFullApiPathParamValue; "ViewId": AmazonConnectFullApiPathParamValue };
  "connect:ListViewVersions": { "InstanceId": AmazonConnectFullApiPathParamValue; "ViewId": AmazonConnectFullApiPathParamValue };
  "connect:ListViews": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateViewContent": { "InstanceId": AmazonConnectFullApiPathParamValue; "ViewId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateViewMetadata": { "InstanceId": AmazonConnectFullApiPathParamValue; "ViewId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiViewsOperationRequestMap {
  "connect:CreateView": AmazonConnectFullApiOperationInput<"connect:CreateView">;
  "connect:CreateViewVersion": AmazonConnectFullApiOperationInput<"connect:CreateViewVersion">;
  "connect:DeleteView": AmazonConnectFullApiOperationInput<"connect:DeleteView">;
  "connect:DeleteViewVersion": AmazonConnectFullApiOperationInput<"connect:DeleteViewVersion">;
  "connect:DescribeView": AmazonConnectFullApiOperationInput<"connect:DescribeView">;
  "connect:ListViewVersions": AmazonConnectFullApiOperationInput<"connect:ListViewVersions">;
  "connect:ListViews": AmazonConnectFullApiOperationInput<"connect:ListViews">;
  "connect:UpdateViewContent": AmazonConnectFullApiOperationInput<"connect:UpdateViewContent">;
  "connect:UpdateViewMetadata": AmazonConnectFullApiOperationInput<"connect:UpdateViewMetadata">;
}

export interface AmazonConnectFullApiViewsGeneratedClient {
  CreateView(...args: AmazonConnectFullApiOperationArgs<"connect:CreateView">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateView"]>;
  CreateViewVersion(...args: AmazonConnectFullApiOperationArgs<"connect:CreateViewVersion">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateViewVersion"]>;
  DeleteView(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteView">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteView"]>;
  DeleteViewVersion(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteViewVersion">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteViewVersion"]>;
  DescribeView(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeView">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeView"]>;
  ListViewVersions(...args: AmazonConnectFullApiOperationArgs<"connect:ListViewVersions">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListViewVersions"]>;
  ListViews(...args: AmazonConnectFullApiOperationArgs<"connect:ListViews">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListViews"]>;
  UpdateViewContent(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateViewContent">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateViewContent"]>;
  UpdateViewMetadata(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateViewMetadata">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateViewMetadata"]>;
}

export const AmazonConnectFullApiViewsGeneratedFunctionNames = [
  "CreateView",
  "CreateViewVersion",
  "DeleteView",
  "DeleteViewVersion",
  "DescribeView",
  "ListViewVersions",
  "ListViews",
  "UpdateViewContent",
  "UpdateViewMetadata"
] as const satisfies readonly (keyof AmazonConnectFullApiViewsGeneratedClient)[];

export function createAmazonConnectFullApiViewsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiViewsGeneratedClient {
  return {
    CreateView: (...args) => callOperation("connect:CreateView", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateView">)),
    CreateViewVersion: (...args) => callOperation("connect:CreateViewVersion", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateViewVersion">)),
    DeleteView: (...args) => callOperation("connect:DeleteView", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteView">)),
    DeleteViewVersion: (...args) => callOperation("connect:DeleteViewVersion", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteViewVersion">)),
    DescribeView: (...args) => callOperation("connect:DescribeView", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeView">)),
    ListViewVersions: (...args) => callOperation("connect:ListViewVersions", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListViewVersions">)),
    ListViews: (...args) => callOperation("connect:ListViews", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListViews">)),
    UpdateViewContent: (...args) => callOperation("connect:UpdateViewContent", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateViewContent">)),
    UpdateViewMetadata: (...args) => callOperation("connect:UpdateViewMetadata", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateViewMetadata">)),
  };
}
