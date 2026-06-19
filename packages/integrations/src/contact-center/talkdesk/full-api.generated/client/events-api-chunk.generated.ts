// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiEventsAPIOperationKeys = [
  "events-signature-keys-key-id-get"
] as const;
export type TalkdeskFullApiEventsAPIOperationKey = typeof TalkdeskFullApiEventsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiEventsAPIOperationPathParamMap {
  "events-signature-keys-key-id-get": { "key_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiEventsAPIOperationRequestMap {
  "events-signature-keys-key-id-get": TalkdeskFullApiOperationInput<"events-signature-keys-key-id-get">;
}

export interface TalkdeskFullApiEventsAPIGeneratedClient {
  EventsSignatureKeysKeyIdGet(...args: TalkdeskFullApiOperationArgs<"events-signature-keys-key-id-get">): Promise<TalkdeskFullApiOperationResponseMap["events-signature-keys-key-id-get"]>;
}

export const TalkdeskFullApiEventsAPIGeneratedFunctionNames = [
  "EventsSignatureKeysKeyIdGet"
] as const satisfies readonly (keyof TalkdeskFullApiEventsAPIGeneratedClient)[];

export function createTalkdeskFullApiEventsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiEventsAPIGeneratedClient {
  return {
    EventsSignatureKeysKeyIdGet: (...args) => callOperation("events-signature-keys-key-id-get", ...(args as TalkdeskFullApiOperationArgs<"events-signature-keys-key-id-get">)),
  };
}
