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
export const NiceCxoneFullApiAgentPhoneOperationKeys = [
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial",
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute",
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute",
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end"
] as const;
export type NiceCxoneFullApiAgentPhoneOperationKey = typeof NiceCxoneFullApiAgentPhoneOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAgentPhoneOperationPathParamMap {
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial": { "sessionId": NiceCxoneFullApiPathParamValue };
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute": { "sessionId": NiceCxoneFullApiPathParamValue };
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute": { "sessionId": NiceCxoneFullApiPathParamValue };
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end": { "sessionId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiAgentPhoneOperationRequestMap {
  "agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial": NiceCxoneFullApiOperationInput<"agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial">;
  "agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute": NiceCxoneFullApiOperationInput<"agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute">;
  "agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute": NiceCxoneFullApiOperationInput<"agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute">;
  "agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end": NiceCxoneFullApiOperationInput<"agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end">;
}

export interface NiceCxoneFullApiAgentPhoneGeneratedClient {
  AgentphoneApiDocsDialAgentPhone(...args: NiceCxoneFullApiOperationArgs<"agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial">): Promise<NiceCxoneFullApiOperationResponseMap["agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial"]>;
  AgentphoneApiDocsMuteAgentPhone(...args: NiceCxoneFullApiOperationArgs<"agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute">): Promise<NiceCxoneFullApiOperationResponseMap["agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute"]>;
  AgentphoneApiDocsUnmuteAgentLeg(...args: NiceCxoneFullApiOperationArgs<"agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute">): Promise<NiceCxoneFullApiOperationResponseMap["agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute"]>;
  AgentphoneApiDocsDisconnectAgentPhone(...args: NiceCxoneFullApiOperationArgs<"agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end">): Promise<NiceCxoneFullApiOperationResponseMap["agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end"]>;
}

export const NiceCxoneFullApiAgentPhoneGeneratedFunctionNames = [
  "AgentphoneApiDocsDialAgentPhone",
  "AgentphoneApiDocsMuteAgentPhone",
  "AgentphoneApiDocsUnmuteAgentLeg",
  "AgentphoneApiDocsDisconnectAgentPhone"
] as const satisfies readonly (keyof NiceCxoneFullApiAgentPhoneGeneratedClient)[];

export function createNiceCxoneFullApiAgentPhoneGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAgentPhoneGeneratedClient {
  return {
    AgentphoneApiDocsDialAgentPhone: (...args) => callOperation("agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial", ...(args as NiceCxoneFullApiOperationArgs<"agentphone-api-docs:dialAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/dial">)),
    AgentphoneApiDocsMuteAgentPhone: (...args) => callOperation("agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute", ...(args as NiceCxoneFullApiOperationArgs<"agentphone-api-docs:muteAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/mute">)),
    AgentphoneApiDocsUnmuteAgentLeg: (...args) => callOperation("agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute", ...(args as NiceCxoneFullApiOperationArgs<"agentphone-api-docs:unmuteAgentLeg:POST:/agent-sessions/{sessionId}/agent-phone/unmute">)),
    AgentphoneApiDocsDisconnectAgentPhone: (...args) => callOperation("agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end", ...(args as NiceCxoneFullApiOperationArgs<"agentphone-api-docs:disconnectAgentPhone:POST:/agent-sessions/{sessionId}/agent-phone/end">)),
  };
}
