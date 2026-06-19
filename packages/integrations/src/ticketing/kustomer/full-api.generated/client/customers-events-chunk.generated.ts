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
export const KustomerFullApiCustomersEventsOperationKeys = [
  "GetaCustomerEvent",
  "GetallEventsbyCustomerforSession",
  "GetallCustomerEvents",
  "GetCustomerSessions"
] as const;
export type KustomerFullApiCustomersEventsOperationKey = typeof KustomerFullApiCustomersEventsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersEventsOperationPathParamMap {
  "GetaCustomerEvent": { "customerId": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
  "GetallEventsbyCustomerforSession": { "customerId": KustomerFullApiPathParamValue; "sessionId": KustomerFullApiPathParamValue };
  "GetallCustomerEvents": { "id": KustomerFullApiPathParamValue };
  "GetCustomerSessions": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersEventsOperationRequestMap {
  "GetaCustomerEvent": KustomerFullApiOperationInput<"GetaCustomerEvent">;
  "GetallEventsbyCustomerforSession": KustomerFullApiOperationInput<"GetallEventsbyCustomerforSession">;
  "GetallCustomerEvents": KustomerFullApiOperationInput<"GetallCustomerEvents">;
  "GetCustomerSessions": KustomerFullApiOperationInput<"GetCustomerSessions">;
}

export interface KustomerFullApiCustomersEventsGeneratedClient {
  kustomerGetaCustomerEvent(...args: KustomerFullApiOperationArgs<"GetaCustomerEvent">): Promise<KustomerFullApiOperationResponseMap["GetaCustomerEvent"]>;
  kustomerGetallEventsbyCustomerforSession(...args: KustomerFullApiOperationArgs<"GetallEventsbyCustomerforSession">): Promise<KustomerFullApiOperationResponseMap["GetallEventsbyCustomerforSession"]>;
  kustomerGetallCustomerEvents(...args: KustomerFullApiOperationArgs<"GetallCustomerEvents">): Promise<KustomerFullApiOperationResponseMap["GetallCustomerEvents"]>;
  kustomerGetCustomerSessions(...args: KustomerFullApiOperationArgs<"GetCustomerSessions">): Promise<KustomerFullApiOperationResponseMap["GetCustomerSessions"]>;
}

export const KustomerFullApiCustomersEventsGeneratedFunctionNames = [
  "kustomerGetaCustomerEvent",
  "kustomerGetallEventsbyCustomerforSession",
  "kustomerGetallCustomerEvents",
  "kustomerGetCustomerSessions"
] as const satisfies readonly (keyof KustomerFullApiCustomersEventsGeneratedClient)[];

export function createKustomerFullApiCustomersEventsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersEventsGeneratedClient {
  return {
    kustomerGetaCustomerEvent: (...args) => callOperation("GetaCustomerEvent", ...(args as KustomerFullApiOperationArgs<"GetaCustomerEvent">)),
    kustomerGetallEventsbyCustomerforSession: (...args) => callOperation("GetallEventsbyCustomerforSession", ...(args as KustomerFullApiOperationArgs<"GetallEventsbyCustomerforSession">)),
    kustomerGetallCustomerEvents: (...args) => callOperation("GetallCustomerEvents", ...(args as KustomerFullApiOperationArgs<"GetallCustomerEvents">)),
    kustomerGetCustomerSessions: (...args) => callOperation("GetCustomerSessions", ...(args as KustomerFullApiOperationArgs<"GetCustomerSessions">)),
  };
}
