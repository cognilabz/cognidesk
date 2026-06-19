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
export const NiceCxoneFullApiSessionsOperationKeys = [
  "sessions-api-docs:startSession:POST:/agent-sessions",
  "sessions-api-docs:joinSession:POST:/agent-sessions/join",
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}",
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event",
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill",
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition",
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state",
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback",
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data",
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact",
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound",
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate",
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold",
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume",
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end",
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept",
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject"
] as const;
export type NiceCxoneFullApiSessionsOperationKey = typeof NiceCxoneFullApiSessionsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiSessionsOperationPathParamMap {
  "sessions-api-docs:startSession:POST:/agent-sessions": {};
  "sessions-api-docs:joinSession:POST:/agent-sessions/join": {};
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}": { "sessionId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event": { "sessionId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill": { "sessionId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state": { "sessionId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback": { "sessionId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact": { "sessionId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound": { "sessionId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiSessionsOperationRequestMap {
  "sessions-api-docs:startSession:POST:/agent-sessions": NiceCxoneFullApiOperationInput<"sessions-api-docs:startSession:POST:/agent-sessions">;
  "sessions-api-docs:joinSession:POST:/agent-sessions/join": NiceCxoneFullApiOperationInput<"sessions-api-docs:joinSession:POST:/agent-sessions/join">;
  "sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}": NiceCxoneFullApiOperationInput<"sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}">;
  "sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event": NiceCxoneFullApiOperationInput<"sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event">;
  "sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill": NiceCxoneFullApiOperationInput<"sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill">;
  "sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition": NiceCxoneFullApiOperationInput<"sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition">;
  "sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state": NiceCxoneFullApiOperationInput<"sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state">;
  "sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback": NiceCxoneFullApiOperationInput<"sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback">;
  "sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data": NiceCxoneFullApiOperationInput<"sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data">;
  "sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact": NiceCxoneFullApiOperationInput<"sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact">;
  "sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound": NiceCxoneFullApiOperationInput<"sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound">;
  "sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate": NiceCxoneFullApiOperationInput<"sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate">;
  "sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": NiceCxoneFullApiOperationInput<"sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">;
  "sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": NiceCxoneFullApiOperationInput<"sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">;
  "sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": NiceCxoneFullApiOperationInput<"sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">;
  "sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": NiceCxoneFullApiOperationInput<"sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">;
  "sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": NiceCxoneFullApiOperationInput<"sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">;
}

export interface NiceCxoneFullApiSessionsGeneratedClient {
  SessionsApiDocsStartSession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:startSession:POST:/agent-sessions">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:startSession:POST:/agent-sessions"]>;
  SessionsApiDocsJoinSession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:joinSession:POST:/agent-sessions/join">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:joinSession:POST:/agent-sessions/join"]>;
  SessionsApiDocsEndSession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}"]>;
  SessionsApiDocsGetNextEvent(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event"]>;
  SessionsApiDocsContinueReskill(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill"]>;
  SessionsApiDocsDispositionContact(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition"]>;
  SessionsApiDocsSetAgentStatus(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state"]>;
  SessionsApiDocsSendFeedback(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback"]>;
  SessionsApiDocsPostCustomData(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data"]>;
  SessionsApiDocsAgentAddContact(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact"]>;
  SessionsApiDocsPostAgentSessionsIdInteractionsSmsOutbound(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound"]>;
  SessionsApiDocsPostAgentSessionsIdInteractionsIdActivate(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate"]>;
  SessionsApiDocsHoldASession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold"]>;
  SessionsApiDocsResumeASession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume"]>;
  SessionsApiDocsEndASession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end"]>;
  SessionsApiDocsAcceptSession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept"]>;
  SessionsApiDocsRejectSession(...args: NiceCxoneFullApiOperationArgs<"sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">): Promise<NiceCxoneFullApiOperationResponseMap["sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject"]>;
}

export const NiceCxoneFullApiSessionsGeneratedFunctionNames = [
  "SessionsApiDocsStartSession",
  "SessionsApiDocsJoinSession",
  "SessionsApiDocsEndSession",
  "SessionsApiDocsGetNextEvent",
  "SessionsApiDocsContinueReskill",
  "SessionsApiDocsDispositionContact",
  "SessionsApiDocsSetAgentStatus",
  "SessionsApiDocsSendFeedback",
  "SessionsApiDocsPostCustomData",
  "SessionsApiDocsAgentAddContact",
  "SessionsApiDocsPostAgentSessionsIdInteractionsSmsOutbound",
  "SessionsApiDocsPostAgentSessionsIdInteractionsIdActivate",
  "SessionsApiDocsHoldASession",
  "SessionsApiDocsResumeASession",
  "SessionsApiDocsEndASession",
  "SessionsApiDocsAcceptSession",
  "SessionsApiDocsRejectSession"
] as const satisfies readonly (keyof NiceCxoneFullApiSessionsGeneratedClient)[];

export function createNiceCxoneFullApiSessionsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiSessionsGeneratedClient {
  return {
    SessionsApiDocsStartSession: (...args) => callOperation("sessions-api-docs:startSession:POST:/agent-sessions", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:startSession:POST:/agent-sessions">)),
    SessionsApiDocsJoinSession: (...args) => callOperation("sessions-api-docs:joinSession:POST:/agent-sessions/join", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:joinSession:POST:/agent-sessions/join">)),
    SessionsApiDocsEndSession: (...args) => callOperation("sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:endSession:DELETE:/agent-sessions/{sessionId}">)),
    SessionsApiDocsGetNextEvent: (...args) => callOperation("sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:getNextEvent:GET:/agent-sessions/{sessionId}/get-next-event">)),
    SessionsApiDocsContinueReskill: (...args) => callOperation("sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:ContinueReskill:POST:/agent-sessions/{sessionId}/continue-reskill">)),
    SessionsApiDocsDispositionContact: (...args) => callOperation("sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:DispositionContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/disposition">)),
    SessionsApiDocsSetAgentStatus: (...args) => callOperation("sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:setAgentStatus:POST:/agent-sessions/{sessionId}/state">)),
    SessionsApiDocsSendFeedback: (...args) => callOperation("sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:SendFeedback:POST:/agent-sessions/{sessionId}/submit-feedback">)),
    SessionsApiDocsPostCustomData: (...args) => callOperation("sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:PostCustomData:POST:/agent-sessions/{sessionId}/interactions/{contactId}/custom-data">)),
    SessionsApiDocsAgentAddContact: (...args) => callOperation("sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:agentAddContact:POST:/agent-sessions/{sessionId}/add-contact">)),
    SessionsApiDocsPostAgentSessionsIdInteractionsSmsOutbound: (...args) => callOperation("sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:post-agent-sessions-id-interactions-sms-outbound:POST:/agent-sessions/{sessionId}/interactions/sms-outbound">)),
    SessionsApiDocsPostAgentSessionsIdInteractionsIdActivate: (...args) => callOperation("sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:post-agent-sessions-id-interactions-id-activate:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate">)),
    SessionsApiDocsHoldASession: (...args) => callOperation("sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:holdASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">)),
    SessionsApiDocsResumeASession: (...args) => callOperation("sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:resumeASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">)),
    SessionsApiDocsEndASession: (...args) => callOperation("sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:endASession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">)),
    SessionsApiDocsAcceptSession: (...args) => callOperation("sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:acceptSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">)),
    SessionsApiDocsRejectSession: (...args) => callOperation("sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject", ...(args as NiceCxoneFullApiOperationArgs<"sessions-api-docs:rejectSession:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">)),
  };
}
