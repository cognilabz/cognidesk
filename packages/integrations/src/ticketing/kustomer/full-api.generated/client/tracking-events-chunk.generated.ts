// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiTrackingEventsOperationKeys = [
  "CreateaTrackingEvent",
  "CreateaTrackingIdentity",
  "CreateaTrackingIdentityEvent"
] as const;
export type KustomerFullApiTrackingEventsOperationKey = typeof KustomerFullApiTrackingEventsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiTrackingEventsOperationPathParamMap {
  "CreateaTrackingEvent": {};
  "CreateaTrackingIdentity": {};
  "CreateaTrackingIdentityEvent": {};
}

export interface KustomerFullApiTrackingEventsOperationRequestMap {
  "CreateaTrackingEvent": KustomerFullApiOperationInput<"CreateaTrackingEvent">;
  "CreateaTrackingIdentity": KustomerFullApiOperationInput<"CreateaTrackingIdentity">;
  "CreateaTrackingIdentityEvent": KustomerFullApiOperationInput<"CreateaTrackingIdentityEvent">;
}

export interface KustomerFullApiTrackingEventsGeneratedClient {
  kustomerCreateaTrackingEvent(...args: KustomerFullApiOperationArgs<"CreateaTrackingEvent">): Promise<KustomerFullApiOperationResponseMap["CreateaTrackingEvent"]>;
  kustomerCreateaTrackingIdentity(...args: KustomerFullApiOperationArgs<"CreateaTrackingIdentity">): Promise<KustomerFullApiOperationResponseMap["CreateaTrackingIdentity"]>;
  kustomerCreateaTrackingIdentityEvent(...args: KustomerFullApiOperationArgs<"CreateaTrackingIdentityEvent">): Promise<KustomerFullApiOperationResponseMap["CreateaTrackingIdentityEvent"]>;
}

export const KustomerFullApiTrackingEventsGeneratedFunctionNames = [
  "kustomerCreateaTrackingEvent",
  "kustomerCreateaTrackingIdentity",
  "kustomerCreateaTrackingIdentityEvent"
] as const satisfies readonly (keyof KustomerFullApiTrackingEventsGeneratedClient)[];

export function createKustomerFullApiTrackingEventsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiTrackingEventsGeneratedClient {
  return {
    kustomerCreateaTrackingEvent: (...args) => callOperation("CreateaTrackingEvent", ...(args as KustomerFullApiOperationArgs<"CreateaTrackingEvent">)),
    kustomerCreateaTrackingIdentity: (...args) => callOperation("CreateaTrackingIdentity", ...(args as KustomerFullApiOperationArgs<"CreateaTrackingIdentity">)),
    kustomerCreateaTrackingIdentityEvent: (...args) => callOperation("CreateaTrackingIdentityEvent", ...(args as KustomerFullApiOperationArgs<"CreateaTrackingIdentityEvent">)),
  };
}
