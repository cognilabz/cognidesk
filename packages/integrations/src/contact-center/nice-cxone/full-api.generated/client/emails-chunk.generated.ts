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
export const NiceCxoneFullApiEmailsOperationKeys = [
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email",
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound",
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward",
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply",
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send",
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end",
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent",
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill",
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park",
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark",
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview",
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore",
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft"
] as const;
export type NiceCxoneFullApiEmailsOperationKey = typeof NiceCxoneFullApiEmailsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiEmailsOperationPathParamMap {
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email": { "sessionId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound": { "sessionId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiEmailsOperationRequestMap {
  "emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email": NiceCxoneFullApiOperationInput<"emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email">;
  "emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound": NiceCxoneFullApiOperationInput<"emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound">;
  "emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward": NiceCxoneFullApiOperationInput<"emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward">;
  "emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply": NiceCxoneFullApiOperationInput<"emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply">;
  "emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send": NiceCxoneFullApiOperationInput<"emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send">;
  "emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": NiceCxoneFullApiOperationInput<"emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent": NiceCxoneFullApiOperationInput<"emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent">;
  "emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill": NiceCxoneFullApiOperationInput<"emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill">;
  "emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park": NiceCxoneFullApiOperationInput<"emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park">;
  "emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark": NiceCxoneFullApiOperationInput<"emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark">;
  "emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview": NiceCxoneFullApiOperationInput<"emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview">;
  "emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore": NiceCxoneFullApiOperationInput<"emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore">;
  "emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft": NiceCxoneFullApiOperationInput<"emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft">;
}

export interface NiceCxoneFullApiEmailsGeneratedClient {
  EmailsApiDocsAddEmail(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email"]>;
  EmailsApiDocsEmailOutbound(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound"]>;
  EmailsApiDocsPostAgentSessionsSessionIdInteractionsContactIdEmailForward(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward"]>;
  EmailsApiDocsEmailReply(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply"]>;
  EmailsApiDocsEmailSend(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send"]>;
  EmailsApiDocsEndContact(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end"]>;
  EmailsApiDocsPostAgentSessionsIdInteractionsIdTransferEmailToAgent(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent"]>;
  EmailsApiDocsPostAgentSessionsIdInteractionsIdTransferEmailToSkill(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill"]>;
  EmailsApiDocsParkEmail(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park"]>;
  EmailsApiDocsUnParkEmail(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark"]>;
  EmailsApiDocsPreveiwEmail(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview"]>;
  EmailsApiDocsRestoreEmail(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore"]>;
  EmailsApiDocsPostAgentSessionsIdInteractionsIdEmailSaveDraft(...args: NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft">): Promise<NiceCxoneFullApiOperationResponseMap["emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft"]>;
}

export const NiceCxoneFullApiEmailsGeneratedFunctionNames = [
  "EmailsApiDocsAddEmail",
  "EmailsApiDocsEmailOutbound",
  "EmailsApiDocsPostAgentSessionsSessionIdInteractionsContactIdEmailForward",
  "EmailsApiDocsEmailReply",
  "EmailsApiDocsEmailSend",
  "EmailsApiDocsEndContact",
  "EmailsApiDocsPostAgentSessionsIdInteractionsIdTransferEmailToAgent",
  "EmailsApiDocsPostAgentSessionsIdInteractionsIdTransferEmailToSkill",
  "EmailsApiDocsParkEmail",
  "EmailsApiDocsUnParkEmail",
  "EmailsApiDocsPreveiwEmail",
  "EmailsApiDocsRestoreEmail",
  "EmailsApiDocsPostAgentSessionsIdInteractionsIdEmailSaveDraft"
] as const satisfies readonly (keyof NiceCxoneFullApiEmailsGeneratedClient)[];

export function createNiceCxoneFullApiEmailsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiEmailsGeneratedClient {
  return {
    EmailsApiDocsAddEmail: (...args) => callOperation("emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:AddEmail:POST:/agent-sessions/{sessionId}/interactions/add-email">)),
    EmailsApiDocsEmailOutbound: (...args) => callOperation("emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:EmailOutbound:POST:/agent-sessions/{sessionId}/interactions/email-outbound">)),
    EmailsApiDocsPostAgentSessionsSessionIdInteractionsContactIdEmailForward: (...args) => callOperation("emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-sessionId-interactions-contactId-email-forward:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-forward">)),
    EmailsApiDocsEmailReply: (...args) => callOperation("emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:EmailReply:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-reply">)),
    EmailsApiDocsEmailSend: (...args) => callOperation("emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:EmailSend:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-send">)),
    EmailsApiDocsEndContact: (...args) => callOperation("emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:EndContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">)),
    EmailsApiDocsPostAgentSessionsIdInteractionsIdTransferEmailToAgent: (...args) => callOperation("emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent">)),
    EmailsApiDocsPostAgentSessionsIdInteractionsIdTransferEmailToSkill: (...args) => callOperation("emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-id-interactions-id-transfer-email-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill">)),
    EmailsApiDocsParkEmail: (...args) => callOperation("emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:ParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-park">)),
    EmailsApiDocsUnParkEmail: (...args) => callOperation("emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:UnParkEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-unpark">)),
    EmailsApiDocsPreveiwEmail: (...args) => callOperation("emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:PreveiwEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-preview">)),
    EmailsApiDocsRestoreEmail: (...args) => callOperation("emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:RestoreEmail:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-restore">)),
    EmailsApiDocsPostAgentSessionsIdInteractionsIdEmailSaveDraft: (...args) => callOperation("emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft", ...(args as NiceCxoneFullApiOperationArgs<"emails-api-docs:post-agent-sessions-id-interactions-id-email-save-draft:POST:/agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft">)),
  };
}
