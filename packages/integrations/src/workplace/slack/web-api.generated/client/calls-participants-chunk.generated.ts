// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiCallsParticipantsOperationKeys = [
  "POST /calls.participants.add",
  "POST /calls.participants.remove"
] as const;
export type SlackWebApiCallsParticipantsOperationKey = typeof SlackWebApiCallsParticipantsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiCallsParticipantsOperationPathParamMap {
  "POST /calls.participants.add": {};
  "POST /calls.participants.remove": {};
}

export interface SlackWebApiCallsParticipantsOperationRequestMap {
  "POST /calls.participants.add": SlackWebApiOperationInput<"POST /calls.participants.add">;
  "POST /calls.participants.remove": SlackWebApiOperationInput<"POST /calls.participants.remove">;
}

export interface SlackWebApiCallsParticipantsGeneratedClient {
  CallsParticipantsAdd(...args: SlackWebApiOperationArgs<"POST /calls.participants.add">): Promise<SlackWebApiOperationResponseMap["POST /calls.participants.add"]>;
  CallsParticipantsRemove(...args: SlackWebApiOperationArgs<"POST /calls.participants.remove">): Promise<SlackWebApiOperationResponseMap["POST /calls.participants.remove"]>;
}

export const SlackWebApiCallsParticipantsGeneratedFunctionNames = [
  "CallsParticipantsAdd",
  "CallsParticipantsRemove"
] as const satisfies readonly (keyof SlackWebApiCallsParticipantsGeneratedClient)[];

export function createSlackWebApiCallsParticipantsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiCallsParticipantsGeneratedClient {
  return {
    CallsParticipantsAdd: (...args) => callOperation("POST /calls.participants.add", ...(args as SlackWebApiOperationArgs<"POST /calls.participants.add">)),
    CallsParticipantsRemove: (...args) => callOperation("POST /calls.participants.remove", ...(args as SlackWebApiOperationArgs<"POST /calls.participants.remove">)),
  };
}
