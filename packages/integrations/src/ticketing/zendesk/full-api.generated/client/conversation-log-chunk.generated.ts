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
export const ZendeskFullApiConversationLogOperationKeys = [
  "ListConversationLogForTicket"
] as const;
export type ZendeskFullApiConversationLogOperationKey = typeof ZendeskFullApiConversationLogOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiConversationLogOperationPathParamMap {
  "ListConversationLogForTicket": { "ticket_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiConversationLogOperationRequestMap {
  "ListConversationLogForTicket": ZendeskFullApiOperationInput<"ListConversationLogForTicket">;
}

export interface ZendeskFullApiConversationLogGeneratedClient {
  ListConversationLogForTicket(...args: ZendeskFullApiOperationArgs<"ListConversationLogForTicket">): Promise<ZendeskFullApiOperationResponseMap["ListConversationLogForTicket"]>;
}

export const ZendeskFullApiConversationLogGeneratedFunctionNames = [
  "ListConversationLogForTicket"
] as const satisfies readonly (keyof ZendeskFullApiConversationLogGeneratedClient)[];

export function createZendeskFullApiConversationLogGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiConversationLogGeneratedClient {
  return {
    ListConversationLogForTicket: (...args) => callOperation("ListConversationLogForTicket", ...(args as ZendeskFullApiOperationArgs<"ListConversationLogForTicket">)),
  };
}
