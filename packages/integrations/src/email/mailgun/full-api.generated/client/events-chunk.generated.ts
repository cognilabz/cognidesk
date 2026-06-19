// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiEventsOperationKeys = [
  "GET /v3/{domain_name}/events"
] as const;
export type MailgunFullApiEventsOperationKey = typeof MailgunFullApiEventsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiEventsOperationPathParamMap {
  "GET /v3/{domain_name}/events": { "domain_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiEventsOperationRequestMap {
  "GET /v3/{domain_name}/events": MailgunFullApiOperationInput<"GET /v3/{domain_name}/events">;
}

export interface MailgunFullApiEventsGeneratedClient {
  RetrievesAPaginatedListOfEvents(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/events">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/events"]>;
}

export const MailgunFullApiEventsGeneratedFunctionNames = [
  "RetrievesAPaginatedListOfEvents"
] as const satisfies readonly (keyof MailgunFullApiEventsGeneratedClient)[];

export function createMailgunFullApiEventsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiEventsGeneratedClient {
  return {
    RetrievesAPaginatedListOfEvents: (...args) => callOperation("GET /v3/{domain_name}/events", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/events">)),
  };
}
