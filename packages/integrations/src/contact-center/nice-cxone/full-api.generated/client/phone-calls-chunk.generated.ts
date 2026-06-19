// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiPhoneCallsOperationKeys = [
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent",
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone",
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill",
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf",
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent",
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls",
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls",
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult",
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold",
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume",
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end",
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override",
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record",
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask",
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask",
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial",
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome"
] as const;
export type NiceCxoneFullApiPhoneCallsOperationKey = typeof NiceCxoneFullApiPhoneCallsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiPhoneCallsOperationPathParamMap {
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent": { "sessionId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone": { "sessionId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill": { "sessionId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf": { "sessionId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent": { "sessionId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls": { "sessionId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls": { "sessionId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiPhoneCallsOperationRequestMap {
  "phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent">;
  "phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone">;
  "phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill">;
  "phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf">;
  "phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent">;
  "phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls">;
  "phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls">;
  "phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult">;
  "phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">;
  "phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">;
  "phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">;
  "phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override">;
  "phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record">;
  "phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask">;
  "phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask">;
  "phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial">;
  "phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome": NiceCxoneFullApiOperationInput<"phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome">;
}

export interface NiceCxoneFullApiPhoneCallsGeneratedClient {
  PhonecallsApiDocsAgentTransfer(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent"]>;
  PhonecallsApiDocsDialPhone(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone"]>;
  PhonecallsApiDocsDialSkill(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill"]>;
  PhonecallsApiDocsSendDtmfTone(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf"]>;
  PhonecallsApiDocsDialAgentConsult(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent"]>;
  PhonecallsApiDocsTransferCall(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls"]>;
  PhonecallsApiDocsConferenceCall(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls"]>;
  PhonecallsApiDocsAcceptConsultRequest(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult"]>;
  PhonecallsApiDocsHoldCall(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold"]>;
  PhonecallsApiDocsResumeCall(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume"]>;
  PhonecallsApiDocsEndCall(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end"]>;
  PhonecallsApiDocsAmdOverride(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override"]>;
  PhonecallsApiDocsRecordACall(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record"]>;
  PhonecallsApiDocsMaskACallRecording(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask"]>;
  PhonecallsApiDocsStopMaskingACallRecording(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask"]>;
  PhonecallsApiDocsIndependentDialed(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial"]>;
  PhonecallsApiDocsIndependentDialOutcome(...args: NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome">): Promise<NiceCxoneFullApiOperationResponseMap["phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome"]>;
}

export const NiceCxoneFullApiPhoneCallsGeneratedFunctionNames = [
  "PhonecallsApiDocsAgentTransfer",
  "PhonecallsApiDocsDialPhone",
  "PhonecallsApiDocsDialSkill",
  "PhonecallsApiDocsSendDtmfTone",
  "PhonecallsApiDocsDialAgentConsult",
  "PhonecallsApiDocsTransferCall",
  "PhonecallsApiDocsConferenceCall",
  "PhonecallsApiDocsAcceptConsultRequest",
  "PhonecallsApiDocsHoldCall",
  "PhonecallsApiDocsResumeCall",
  "PhonecallsApiDocsEndCall",
  "PhonecallsApiDocsAmdOverride",
  "PhonecallsApiDocsRecordACall",
  "PhonecallsApiDocsMaskACallRecording",
  "PhonecallsApiDocsStopMaskingACallRecording",
  "PhonecallsApiDocsIndependentDialed",
  "PhonecallsApiDocsIndependentDialOutcome"
] as const satisfies readonly (keyof NiceCxoneFullApiPhoneCallsGeneratedClient)[];

export function createNiceCxoneFullApiPhoneCallsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiPhoneCallsGeneratedClient {
  return {
    PhonecallsApiDocsAgentTransfer: (...args) => callOperation("phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:agentTransfer:POST:/agent-sessions/{sessionId}/dial-agent">)),
    PhonecallsApiDocsDialPhone: (...args) => callOperation("phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:dialPhone:POST:/agent-sessions/{sessionId}/dial-phone">)),
    PhonecallsApiDocsDialSkill: (...args) => callOperation("phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:dialSkill:POST:/agent-sessions/{sessionId}/dial-skill">)),
    PhonecallsApiDocsSendDtmfTone: (...args) => callOperation("phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:SendDtmfTone:POST:/agent-sessions/{sessionId}/send-dtmf">)),
    PhonecallsApiDocsDialAgentConsult: (...args) => callOperation("phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:dialAgentConsult:POST:/agent-sessions/{sessionId}/consult-agent">)),
    PhonecallsApiDocsTransferCall: (...args) => callOperation("phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:transferCall:POST:/agent-sessions/{sessionId}/interactions/transfer-calls">)),
    PhonecallsApiDocsConferenceCall: (...args) => callOperation("phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:conferenceCall:POST:/agent-sessions/{sessionId}/interactions/conference-calls">)),
    PhonecallsApiDocsAcceptConsultRequest: (...args) => callOperation("phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:acceptConsultRequest:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept-consult">)),
    PhonecallsApiDocsHoldCall: (...args) => callOperation("phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:holdCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">)),
    PhonecallsApiDocsResumeCall: (...args) => callOperation("phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:resumeCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">)),
    PhonecallsApiDocsEndCall: (...args) => callOperation("phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:endCall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">)),
    PhonecallsApiDocsAmdOverride: (...args) => callOperation("phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:AmdOverride:POST:/agent-sessions/{sessionId}/interactions/{contactId}/amd-override">)),
    PhonecallsApiDocsRecordACall: (...args) => callOperation("phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:recordACall:POST:/agent-sessions/{sessionId}/interactions/{contactId}/record">)),
    PhonecallsApiDocsMaskACallRecording: (...args) => callOperation("phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:maskACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/mask">)),
    PhonecallsApiDocsStopMaskingACallRecording: (...args) => callOperation("phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:stopMaskingACallRecording:POST:/agent-sessions/{sessionId}/interactions/{contactId}/unmask">)),
    PhonecallsApiDocsIndependentDialed: (...args) => callOperation("phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:IndependentDialed:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial">)),
    PhonecallsApiDocsIndependentDialOutcome: (...args) => callOperation("phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome", ...(args as NiceCxoneFullApiOperationArgs<"phonecalls-api-docs:IndependentDialOutcome:POST:/agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome">)),
  };
}
