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
export const GorgiasFullApiWidgetsOperationKeys = [
  "list-widgets",
  "create-widget",
  "delete-widget",
  "get-widget",
  "update-widget"
] as const;
export type GorgiasFullApiWidgetsOperationKey = typeof GorgiasFullApiWidgetsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiWidgetsOperationPathParamMap {
  "list-widgets": {};
  "create-widget": {};
  "delete-widget": { "id": GorgiasFullApiPathParamValue };
  "get-widget": { "id": GorgiasFullApiPathParamValue };
  "update-widget": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiWidgetsOperationRequestMap {
  "list-widgets": GorgiasFullApiOperationInput<"list-widgets">;
  "create-widget": GorgiasFullApiOperationInput<"create-widget">;
  "delete-widget": GorgiasFullApiOperationInput<"delete-widget">;
  "get-widget": GorgiasFullApiOperationInput<"get-widget">;
  "update-widget": GorgiasFullApiOperationInput<"update-widget">;
}

export interface GorgiasFullApiWidgetsGeneratedClient {
  gorgiasListWidgets(...args: GorgiasFullApiOperationArgs<"list-widgets">): Promise<GorgiasFullApiOperationResponseMap["list-widgets"]>;
  gorgiasCreateWidget(...args: GorgiasFullApiOperationArgs<"create-widget">): Promise<GorgiasFullApiOperationResponseMap["create-widget"]>;
  gorgiasDeleteWidget(...args: GorgiasFullApiOperationArgs<"delete-widget">): Promise<GorgiasFullApiOperationResponseMap["delete-widget"]>;
  gorgiasGetWidget(...args: GorgiasFullApiOperationArgs<"get-widget">): Promise<GorgiasFullApiOperationResponseMap["get-widget"]>;
  gorgiasUpdateWidget(...args: GorgiasFullApiOperationArgs<"update-widget">): Promise<GorgiasFullApiOperationResponseMap["update-widget"]>;
}

export const GorgiasFullApiWidgetsGeneratedFunctionNames = [
  "gorgiasListWidgets",
  "gorgiasCreateWidget",
  "gorgiasDeleteWidget",
  "gorgiasGetWidget",
  "gorgiasUpdateWidget"
] as const satisfies readonly (keyof GorgiasFullApiWidgetsGeneratedClient)[];

export function createGorgiasFullApiWidgetsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiWidgetsGeneratedClient {
  return {
    gorgiasListWidgets: (...args) => callOperation("list-widgets", ...(args as GorgiasFullApiOperationArgs<"list-widgets">)),
    gorgiasCreateWidget: (...args) => callOperation("create-widget", ...(args as GorgiasFullApiOperationArgs<"create-widget">)),
    gorgiasDeleteWidget: (...args) => callOperation("delete-widget", ...(args as GorgiasFullApiOperationArgs<"delete-widget">)),
    gorgiasGetWidget: (...args) => callOperation("get-widget", ...(args as GorgiasFullApiOperationArgs<"get-widget">)),
    gorgiasUpdateWidget: (...args) => callOperation("update-widget", ...(args as GorgiasFullApiOperationArgs<"update-widget">)),
  };
}
