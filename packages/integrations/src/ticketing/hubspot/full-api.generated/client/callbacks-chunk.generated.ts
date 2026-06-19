// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiCallbacksOperationKeys = [
  "automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch",
  "automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete"
] as const;
export type HubSpotFullApiCallbacksOperationKey = typeof HubSpotFullApiCallbacksOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiCallbacksOperationPathParamMap {
  "automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch": {};
  "automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete": { "callbackId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiCallbacksOperationRequestMap {
  "automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch">;
  "automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete">;
}

export interface HubSpotFullApiCallbacksGeneratedClient {
  ActionsV4PostAutomationActionsCallbacks202603CompleteCompleteBatch(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch"]>;
  ActionsV4PostAutomationActionsCallbacks202603CallbackIdCompleteComplete(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete"]>;
}

export const HubSpotFullApiCallbacksGeneratedFunctionNames = [
  "ActionsV4PostAutomationActionsCallbacks202603CompleteCompleteBatch",
  "ActionsV4PostAutomationActionsCallbacks202603CallbackIdCompleteComplete"
] as const satisfies readonly (keyof HubSpotFullApiCallbacksGeneratedClient)[];

export function createHubSpotFullApiCallbacksGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiCallbacksGeneratedClient {
  return {
    ActionsV4PostAutomationActionsCallbacks202603CompleteCompleteBatch: (...args) => callOperation("automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/complete_completeBatch">)),
    ActionsV4PostAutomationActionsCallbacks202603CallbackIdCompleteComplete: (...args) => callOperation("automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:post-/automation/actions/callbacks/2026-03/{callbackId}/complete_complete">)),
  };
}
