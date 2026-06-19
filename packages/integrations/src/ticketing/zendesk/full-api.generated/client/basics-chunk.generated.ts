// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiBasicsOperationKeys = [
  "CreateTicketOrVoicemailTicket",
  "OpenTicketInAgentBrowser",
  "OpenUsersProfileInAgentBrowser"
] as const;
export type ZendeskFullApiBasicsOperationKey = typeof ZendeskFullApiBasicsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiBasicsOperationPathParamMap {
  "CreateTicketOrVoicemailTicket": {};
  "OpenTicketInAgentBrowser": { "agent_id": ZendeskFullApiPathParamValue; "ticket_id": ZendeskFullApiPathParamValue };
  "OpenUsersProfileInAgentBrowser": { "agent_id": ZendeskFullApiPathParamValue; "user_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiBasicsOperationRequestMap {
  "CreateTicketOrVoicemailTicket": ZendeskFullApiOperationInput<"CreateTicketOrVoicemailTicket">;
  "OpenTicketInAgentBrowser": ZendeskFullApiOperationInput<"OpenTicketInAgentBrowser">;
  "OpenUsersProfileInAgentBrowser": ZendeskFullApiOperationInput<"OpenUsersProfileInAgentBrowser">;
}

export interface ZendeskFullApiBasicsGeneratedClient {
  CreateTicketOrVoicemailTicket(...args: ZendeskFullApiOperationArgs<"CreateTicketOrVoicemailTicket">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketOrVoicemailTicket"]>;
  OpenTicketInAgentBrowser(...args: ZendeskFullApiOperationArgs<"OpenTicketInAgentBrowser">): Promise<ZendeskFullApiOperationResponseMap["OpenTicketInAgentBrowser"]>;
  OpenUsersProfileInAgentBrowser(...args: ZendeskFullApiOperationArgs<"OpenUsersProfileInAgentBrowser">): Promise<ZendeskFullApiOperationResponseMap["OpenUsersProfileInAgentBrowser"]>;
}

export const ZendeskFullApiBasicsGeneratedFunctionNames = [
  "CreateTicketOrVoicemailTicket",
  "OpenTicketInAgentBrowser",
  "OpenUsersProfileInAgentBrowser"
] as const satisfies readonly (keyof ZendeskFullApiBasicsGeneratedClient)[];

export function createZendeskFullApiBasicsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiBasicsGeneratedClient {
  return {
    CreateTicketOrVoicemailTicket: (...args) => callOperation("CreateTicketOrVoicemailTicket", ...(args as ZendeskFullApiOperationArgs<"CreateTicketOrVoicemailTicket">)),
    OpenTicketInAgentBrowser: (...args) => callOperation("OpenTicketInAgentBrowser", ...(args as ZendeskFullApiOperationArgs<"OpenTicketInAgentBrowser">)),
    OpenUsersProfileInAgentBrowser: (...args) => callOperation("OpenUsersProfileInAgentBrowser", ...(args as ZendeskFullApiOperationArgs<"OpenUsersProfileInAgentBrowser">)),
  };
}
