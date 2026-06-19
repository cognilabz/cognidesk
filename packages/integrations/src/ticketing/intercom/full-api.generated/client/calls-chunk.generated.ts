// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiCallsOperationKeys = [
  "listCalls",
  "showCall",
  "showCallRecording",
  "showCallTranscript",
  "listCallsWithTranscripts",
  "collectFinVoiceCallById",
  "collectFinVoiceCallsByConversationId",
  "collectFinVoiceCallByExternalId",
  "collectFinVoiceCallByPhoneNumber",
  "registerFinVoiceCall"
] as const;
export type IntercomFullApiCallsOperationKey = typeof IntercomFullApiCallsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiCallsOperationPathParamMap {
  "listCalls": {};
  "showCall": { "call_id": IntercomFullApiPathParamValue };
  "showCallRecording": { "call_id": IntercomFullApiPathParamValue };
  "showCallTranscript": { "call_id": IntercomFullApiPathParamValue };
  "listCallsWithTranscripts": {};
  "collectFinVoiceCallById": { "id": IntercomFullApiPathParamValue };
  "collectFinVoiceCallsByConversationId": { "conversation_id": IntercomFullApiPathParamValue };
  "collectFinVoiceCallByExternalId": { "external_id": IntercomFullApiPathParamValue };
  "collectFinVoiceCallByPhoneNumber": { "phone_number": IntercomFullApiPathParamValue };
  "registerFinVoiceCall": {};
}

export interface IntercomFullApiCallsOperationRequestMap {
  "listCalls": IntercomFullApiOperationInput<"listCalls">;
  "showCall": IntercomFullApiOperationInput<"showCall">;
  "showCallRecording": IntercomFullApiOperationInput<"showCallRecording">;
  "showCallTranscript": IntercomFullApiOperationInput<"showCallTranscript">;
  "listCallsWithTranscripts": IntercomFullApiOperationInput<"listCallsWithTranscripts">;
  "collectFinVoiceCallById": IntercomFullApiOperationInput<"collectFinVoiceCallById">;
  "collectFinVoiceCallsByConversationId": IntercomFullApiOperationInput<"collectFinVoiceCallsByConversationId">;
  "collectFinVoiceCallByExternalId": IntercomFullApiOperationInput<"collectFinVoiceCallByExternalId">;
  "collectFinVoiceCallByPhoneNumber": IntercomFullApiOperationInput<"collectFinVoiceCallByPhoneNumber">;
  "registerFinVoiceCall": IntercomFullApiOperationInput<"registerFinVoiceCall">;
}

export interface IntercomFullApiCallsGeneratedClient {
  intercomListCalls(...args: IntercomFullApiOperationArgs<"listCalls">): Promise<IntercomFullApiOperationResponseMap["listCalls"]>;
  intercomShowCall(...args: IntercomFullApiOperationArgs<"showCall">): Promise<IntercomFullApiOperationResponseMap["showCall"]>;
  intercomShowCallRecording(...args: IntercomFullApiOperationArgs<"showCallRecording">): Promise<IntercomFullApiOperationResponseMap["showCallRecording"]>;
  intercomShowCallTranscript(...args: IntercomFullApiOperationArgs<"showCallTranscript">): Promise<IntercomFullApiOperationResponseMap["showCallTranscript"]>;
  intercomListCallsWithTranscripts(...args: IntercomFullApiOperationArgs<"listCallsWithTranscripts">): Promise<IntercomFullApiOperationResponseMap["listCallsWithTranscripts"]>;
  intercomCollectFinVoiceCallById(...args: IntercomFullApiOperationArgs<"collectFinVoiceCallById">): Promise<IntercomFullApiOperationResponseMap["collectFinVoiceCallById"]>;
  intercomCollectFinVoiceCallsByConversationId(...args: IntercomFullApiOperationArgs<"collectFinVoiceCallsByConversationId">): Promise<IntercomFullApiOperationResponseMap["collectFinVoiceCallsByConversationId"]>;
  intercomCollectFinVoiceCallByExternalId(...args: IntercomFullApiOperationArgs<"collectFinVoiceCallByExternalId">): Promise<IntercomFullApiOperationResponseMap["collectFinVoiceCallByExternalId"]>;
  intercomCollectFinVoiceCallByPhoneNumber(...args: IntercomFullApiOperationArgs<"collectFinVoiceCallByPhoneNumber">): Promise<IntercomFullApiOperationResponseMap["collectFinVoiceCallByPhoneNumber"]>;
  intercomRegisterFinVoiceCall(...args: IntercomFullApiOperationArgs<"registerFinVoiceCall">): Promise<IntercomFullApiOperationResponseMap["registerFinVoiceCall"]>;
}

export const IntercomFullApiCallsGeneratedFunctionNames = [
  "intercomListCalls",
  "intercomShowCall",
  "intercomShowCallRecording",
  "intercomShowCallTranscript",
  "intercomListCallsWithTranscripts",
  "intercomCollectFinVoiceCallById",
  "intercomCollectFinVoiceCallsByConversationId",
  "intercomCollectFinVoiceCallByExternalId",
  "intercomCollectFinVoiceCallByPhoneNumber",
  "intercomRegisterFinVoiceCall"
] as const satisfies readonly (keyof IntercomFullApiCallsGeneratedClient)[];

export function createIntercomFullApiCallsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiCallsGeneratedClient {
  return {
    intercomListCalls: (...args) => callOperation("listCalls", ...(args as IntercomFullApiOperationArgs<"listCalls">)),
    intercomShowCall: (...args) => callOperation("showCall", ...(args as IntercomFullApiOperationArgs<"showCall">)),
    intercomShowCallRecording: (...args) => callOperation("showCallRecording", ...(args as IntercomFullApiOperationArgs<"showCallRecording">)),
    intercomShowCallTranscript: (...args) => callOperation("showCallTranscript", ...(args as IntercomFullApiOperationArgs<"showCallTranscript">)),
    intercomListCallsWithTranscripts: (...args) => callOperation("listCallsWithTranscripts", ...(args as IntercomFullApiOperationArgs<"listCallsWithTranscripts">)),
    intercomCollectFinVoiceCallById: (...args) => callOperation("collectFinVoiceCallById", ...(args as IntercomFullApiOperationArgs<"collectFinVoiceCallById">)),
    intercomCollectFinVoiceCallsByConversationId: (...args) => callOperation("collectFinVoiceCallsByConversationId", ...(args as IntercomFullApiOperationArgs<"collectFinVoiceCallsByConversationId">)),
    intercomCollectFinVoiceCallByExternalId: (...args) => callOperation("collectFinVoiceCallByExternalId", ...(args as IntercomFullApiOperationArgs<"collectFinVoiceCallByExternalId">)),
    intercomCollectFinVoiceCallByPhoneNumber: (...args) => callOperation("collectFinVoiceCallByPhoneNumber", ...(args as IntercomFullApiOperationArgs<"collectFinVoiceCallByPhoneNumber">)),
    intercomRegisterFinVoiceCall: (...args) => callOperation("registerFinVoiceCall", ...(args as IntercomFullApiOperationArgs<"registerFinVoiceCall">)),
  };
}
