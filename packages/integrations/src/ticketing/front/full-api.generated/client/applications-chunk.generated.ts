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
export const FrontFullApiApplicationsOperationKeys = [
  "trigger-app-event"
] as const;
export type FrontFullApiApplicationsOperationKey = typeof FrontFullApiApplicationsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiApplicationsOperationPathParamMap {
  "trigger-app-event": { "application_uid": FrontFullApiPathParamValue };
}

export interface FrontFullApiApplicationsOperationRequestMap {
  "trigger-app-event": FrontFullApiOperationInput<"trigger-app-event">;
}

export interface FrontFullApiApplicationsGeneratedClient {
  frontTriggerAppEvent(...args: FrontFullApiOperationArgs<"trigger-app-event">): Promise<FrontFullApiOperationResponseMap["trigger-app-event"]>;
}

export const FrontFullApiApplicationsGeneratedFunctionNames = [
  "frontTriggerAppEvent"
] as const satisfies readonly (keyof FrontFullApiApplicationsGeneratedClient)[];

export function createFrontFullApiApplicationsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiApplicationsGeneratedClient {
  return {
    frontTriggerAppEvent: (...args) => callOperation("trigger-app-event", ...(args as FrontFullApiOperationArgs<"trigger-app-event">)),
  };
}
