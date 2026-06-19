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
export const ZendeskFullApiActivityStreamOperationKeys = [
  "CountActivities",
  "ListActivities",
  "ShowActivity"
] as const;
export type ZendeskFullApiActivityStreamOperationKey = typeof ZendeskFullApiActivityStreamOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiActivityStreamOperationPathParamMap {
  "CountActivities": {};
  "ListActivities": {};
  "ShowActivity": { "activity_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiActivityStreamOperationRequestMap {
  "CountActivities": ZendeskFullApiOperationInput<"CountActivities">;
  "ListActivities": ZendeskFullApiOperationInput<"ListActivities">;
  "ShowActivity": ZendeskFullApiOperationInput<"ShowActivity">;
}

export interface ZendeskFullApiActivityStreamGeneratedClient {
  CountActivities(...args: ZendeskFullApiOperationArgs<"CountActivities">): Promise<ZendeskFullApiOperationResponseMap["CountActivities"]>;
  ListActivities(...args: ZendeskFullApiOperationArgs<"ListActivities">): Promise<ZendeskFullApiOperationResponseMap["ListActivities"]>;
  ShowActivity(...args: ZendeskFullApiOperationArgs<"ShowActivity">): Promise<ZendeskFullApiOperationResponseMap["ShowActivity"]>;
}

export const ZendeskFullApiActivityStreamGeneratedFunctionNames = [
  "CountActivities",
  "ListActivities",
  "ShowActivity"
] as const satisfies readonly (keyof ZendeskFullApiActivityStreamGeneratedClient)[];

export function createZendeskFullApiActivityStreamGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiActivityStreamGeneratedClient {
  return {
    CountActivities: (...args) => callOperation("CountActivities", ...(args as ZendeskFullApiOperationArgs<"CountActivities">)),
    ListActivities: (...args) => callOperation("ListActivities", ...(args as ZendeskFullApiOperationArgs<"ListActivities">)),
    ShowActivity: (...args) => callOperation("ShowActivity", ...(args as ZendeskFullApiOperationArgs<"ShowActivity">)),
  };
}
