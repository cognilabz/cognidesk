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
export const ZendeskFullApiXChannelOperationKeys = [
  "CreateTicketFromTweet",
  "GettingTwicketStatus",
  "ListMonitoredTwitterHandles",
  "ShowMonitoredTwitterHandle"
] as const;
export type ZendeskFullApiXChannelOperationKey = typeof ZendeskFullApiXChannelOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiXChannelOperationPathParamMap {
  "CreateTicketFromTweet": {};
  "GettingTwicketStatus": { "comment_id": ZendeskFullApiPathParamValue };
  "ListMonitoredTwitterHandles": {};
  "ShowMonitoredTwitterHandle": { "monitored_twitter_handle_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiXChannelOperationRequestMap {
  "CreateTicketFromTweet": ZendeskFullApiOperationInput<"CreateTicketFromTweet">;
  "GettingTwicketStatus": ZendeskFullApiOperationInput<"GettingTwicketStatus">;
  "ListMonitoredTwitterHandles": ZendeskFullApiOperationInput<"ListMonitoredTwitterHandles">;
  "ShowMonitoredTwitterHandle": ZendeskFullApiOperationInput<"ShowMonitoredTwitterHandle">;
}

export interface ZendeskFullApiXChannelGeneratedClient {
  CreateTicketFromTweet(...args: ZendeskFullApiOperationArgs<"CreateTicketFromTweet">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketFromTweet"]>;
  GettingTwicketStatus(...args: ZendeskFullApiOperationArgs<"GettingTwicketStatus">): Promise<ZendeskFullApiOperationResponseMap["GettingTwicketStatus"]>;
  ListMonitoredTwitterHandles(...args: ZendeskFullApiOperationArgs<"ListMonitoredTwitterHandles">): Promise<ZendeskFullApiOperationResponseMap["ListMonitoredTwitterHandles"]>;
  ShowMonitoredTwitterHandle(...args: ZendeskFullApiOperationArgs<"ShowMonitoredTwitterHandle">): Promise<ZendeskFullApiOperationResponseMap["ShowMonitoredTwitterHandle"]>;
}

export const ZendeskFullApiXChannelGeneratedFunctionNames = [
  "CreateTicketFromTweet",
  "GettingTwicketStatus",
  "ListMonitoredTwitterHandles",
  "ShowMonitoredTwitterHandle"
] as const satisfies readonly (keyof ZendeskFullApiXChannelGeneratedClient)[];

export function createZendeskFullApiXChannelGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiXChannelGeneratedClient {
  return {
    CreateTicketFromTweet: (...args) => callOperation("CreateTicketFromTweet", ...(args as ZendeskFullApiOperationArgs<"CreateTicketFromTweet">)),
    GettingTwicketStatus: (...args) => callOperation("GettingTwicketStatus", ...(args as ZendeskFullApiOperationArgs<"GettingTwicketStatus">)),
    ListMonitoredTwitterHandles: (...args) => callOperation("ListMonitoredTwitterHandles", ...(args as ZendeskFullApiOperationArgs<"ListMonitoredTwitterHandles">)),
    ShowMonitoredTwitterHandle: (...args) => callOperation("ShowMonitoredTwitterHandle", ...(args as ZendeskFullApiOperationArgs<"ShowMonitoredTwitterHandle">)),
  };
}
