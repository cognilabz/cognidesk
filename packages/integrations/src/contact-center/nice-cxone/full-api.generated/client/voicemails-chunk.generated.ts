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
export const NiceCxoneFullApiVoicemailsOperationKeys = [
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail",
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail",
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end",
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent",
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill"
] as const;
export type NiceCxoneFullApiVoicemailsOperationKey = typeof NiceCxoneFullApiVoicemailsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiVoicemailsOperationPathParamMap {
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiVoicemailsOperationRequestMap {
  "voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail": NiceCxoneFullApiOperationInput<"voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail">;
  "voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail": NiceCxoneFullApiOperationInput<"voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail">;
  "voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": NiceCxoneFullApiOperationInput<"voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">;
  "voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent": NiceCxoneFullApiOperationInput<"voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent">;
  "voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill": NiceCxoneFullApiOperationInput<"voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill">;
}

export interface NiceCxoneFullApiVoicemailsGeneratedClient {
  VoicemailsApiDocsPlayVoicemail(...args: NiceCxoneFullApiOperationArgs<"voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail">): Promise<NiceCxoneFullApiOperationResponseMap["voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail"]>;
  VoicemailsApiDocsPauseVoicemail(...args: NiceCxoneFullApiOperationArgs<"voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail">): Promise<NiceCxoneFullApiOperationResponseMap["voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail"]>;
  VoicemailsApiDocsEndContact(...args: NiceCxoneFullApiOperationArgs<"voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">): Promise<NiceCxoneFullApiOperationResponseMap["voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end"]>;
  VoicemailsApiDocsVoicemailTransferAgent(...args: NiceCxoneFullApiOperationArgs<"voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent">): Promise<NiceCxoneFullApiOperationResponseMap["voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent"]>;
  VoicemailsApiDocsVoicemailTransferSkill(...args: NiceCxoneFullApiOperationArgs<"voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill">): Promise<NiceCxoneFullApiOperationResponseMap["voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill"]>;
}

export const NiceCxoneFullApiVoicemailsGeneratedFunctionNames = [
  "VoicemailsApiDocsPlayVoicemail",
  "VoicemailsApiDocsPauseVoicemail",
  "VoicemailsApiDocsEndContact",
  "VoicemailsApiDocsVoicemailTransferAgent",
  "VoicemailsApiDocsVoicemailTransferSkill"
] as const satisfies readonly (keyof NiceCxoneFullApiVoicemailsGeneratedClient)[];

export function createNiceCxoneFullApiVoicemailsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiVoicemailsGeneratedClient {
  return {
    VoicemailsApiDocsPlayVoicemail: (...args) => callOperation("voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail", ...(args as NiceCxoneFullApiOperationArgs<"voicemails-api-docs:PlayVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail">)),
    VoicemailsApiDocsPauseVoicemail: (...args) => callOperation("voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail", ...(args as NiceCxoneFullApiOperationArgs<"voicemails-api-docs:PauseVoicemail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail">)),
    VoicemailsApiDocsEndContact: (...args) => callOperation("voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end", ...(args as NiceCxoneFullApiOperationArgs<"voicemails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">)),
    VoicemailsApiDocsVoicemailTransferAgent: (...args) => callOperation("voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent", ...(args as NiceCxoneFullApiOperationArgs<"voicemails-api-docs:VoicemailTransferAgent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent">)),
    VoicemailsApiDocsVoicemailTransferSkill: (...args) => callOperation("voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill", ...(args as NiceCxoneFullApiOperationArgs<"voicemails-api-docs:VoicemailTransferSkill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill">)),
  };
}
