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
export const GorgiasFullApiEventsOperationKeys = [
  "list-events",
  "get-event"
] as const;
export type GorgiasFullApiEventsOperationKey = typeof GorgiasFullApiEventsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiEventsOperationPathParamMap {
  "list-events": {};
  "get-event": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiEventsOperationRequestMap {
  "list-events": GorgiasFullApiOperationInput<"list-events">;
  "get-event": GorgiasFullApiOperationInput<"get-event">;
}

export interface GorgiasFullApiEventsGeneratedClient {
  gorgiasListEvents(...args: GorgiasFullApiOperationArgs<"list-events">): Promise<GorgiasFullApiOperationResponseMap["list-events"]>;
  gorgiasGetEvent(...args: GorgiasFullApiOperationArgs<"get-event">): Promise<GorgiasFullApiOperationResponseMap["get-event"]>;
}

export const GorgiasFullApiEventsGeneratedFunctionNames = [
  "gorgiasListEvents",
  "gorgiasGetEvent"
] as const satisfies readonly (keyof GorgiasFullApiEventsGeneratedClient)[];

export function createGorgiasFullApiEventsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiEventsGeneratedClient {
  return {
    gorgiasListEvents: (...args) => callOperation("list-events", ...(args as GorgiasFullApiOperationArgs<"list-events">)),
    gorgiasGetEvent: (...args) => callOperation("get-event", ...(args as GorgiasFullApiOperationArgs<"get-event">)),
  };
}
