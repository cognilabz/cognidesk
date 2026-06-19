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
export const FrontFullApiViewsOperationKeys = [
  "list-team-views",
  "create-team-view",
  "list-views",
  "get-view",
  "update-view",
  "add-view-teammates"
] as const;
export type FrontFullApiViewsOperationKey = typeof FrontFullApiViewsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiViewsOperationPathParamMap {
  "list-team-views": { "team_id": FrontFullApiPathParamValue };
  "create-team-view": { "team_id": FrontFullApiPathParamValue };
  "list-views": {};
  "get-view": { "view_id": FrontFullApiPathParamValue };
  "update-view": { "view_id": FrontFullApiPathParamValue };
  "add-view-teammates": { "view_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiViewsOperationRequestMap {
  "list-team-views": FrontFullApiOperationInput<"list-team-views">;
  "create-team-view": FrontFullApiOperationInput<"create-team-view">;
  "list-views": FrontFullApiOperationInput<"list-views">;
  "get-view": FrontFullApiOperationInput<"get-view">;
  "update-view": FrontFullApiOperationInput<"update-view">;
  "add-view-teammates": FrontFullApiOperationInput<"add-view-teammates">;
}

export interface FrontFullApiViewsGeneratedClient {
  frontListTeamViews(...args: FrontFullApiOperationArgs<"list-team-views">): Promise<FrontFullApiOperationResponseMap["list-team-views"]>;
  frontCreateTeamView(...args: FrontFullApiOperationArgs<"create-team-view">): Promise<FrontFullApiOperationResponseMap["create-team-view"]>;
  frontListViews(...args: FrontFullApiOperationArgs<"list-views">): Promise<FrontFullApiOperationResponseMap["list-views"]>;
  frontGetView(...args: FrontFullApiOperationArgs<"get-view">): Promise<FrontFullApiOperationResponseMap["get-view"]>;
  frontUpdateView(...args: FrontFullApiOperationArgs<"update-view">): Promise<FrontFullApiOperationResponseMap["update-view"]>;
  frontAddViewTeammates(...args: FrontFullApiOperationArgs<"add-view-teammates">): Promise<FrontFullApiOperationResponseMap["add-view-teammates"]>;
}

export const FrontFullApiViewsGeneratedFunctionNames = [
  "frontListTeamViews",
  "frontCreateTeamView",
  "frontListViews",
  "frontGetView",
  "frontUpdateView",
  "frontAddViewTeammates"
] as const satisfies readonly (keyof FrontFullApiViewsGeneratedClient)[];

export function createFrontFullApiViewsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiViewsGeneratedClient {
  return {
    frontListTeamViews: (...args) => callOperation("list-team-views", ...(args as FrontFullApiOperationArgs<"list-team-views">)),
    frontCreateTeamView: (...args) => callOperation("create-team-view", ...(args as FrontFullApiOperationArgs<"create-team-view">)),
    frontListViews: (...args) => callOperation("list-views", ...(args as FrontFullApiOperationArgs<"list-views">)),
    frontGetView: (...args) => callOperation("get-view", ...(args as FrontFullApiOperationArgs<"get-view">)),
    frontUpdateView: (...args) => callOperation("update-view", ...(args as FrontFullApiOperationArgs<"update-view">)),
    frontAddViewTeammates: (...args) => callOperation("add-view-teammates", ...(args as FrontFullApiOperationArgs<"add-view-teammates">)),
  };
}
