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
export const ZendeskFullApiTicketContentPinsOperationKeys = [
  "CreateTicketContentPin",
  "DeleteTicketContentPin",
  "ListTicketContentPins"
] as const;
export type ZendeskFullApiTicketContentPinsOperationKey = typeof ZendeskFullApiTicketContentPinsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketContentPinsOperationPathParamMap {
  "CreateTicketContentPin": {};
  "DeleteTicketContentPin": { "content_pin_id": ZendeskFullApiPathParamValue };
  "ListTicketContentPins": {};
}

export interface ZendeskFullApiTicketContentPinsOperationRequestMap {
  "CreateTicketContentPin": ZendeskFullApiOperationInput<"CreateTicketContentPin">;
  "DeleteTicketContentPin": ZendeskFullApiOperationInput<"DeleteTicketContentPin">;
  "ListTicketContentPins": ZendeskFullApiOperationInput<"ListTicketContentPins">;
}

export interface ZendeskFullApiTicketContentPinsGeneratedClient {
  CreateTicketContentPin(...args: ZendeskFullApiOperationArgs<"CreateTicketContentPin">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketContentPin"]>;
  DeleteTicketContentPin(...args: ZendeskFullApiOperationArgs<"DeleteTicketContentPin">): Promise<ZendeskFullApiOperationResponseMap["DeleteTicketContentPin"]>;
  ListTicketContentPins(...args: ZendeskFullApiOperationArgs<"ListTicketContentPins">): Promise<ZendeskFullApiOperationResponseMap["ListTicketContentPins"]>;
}

export const ZendeskFullApiTicketContentPinsGeneratedFunctionNames = [
  "CreateTicketContentPin",
  "DeleteTicketContentPin",
  "ListTicketContentPins"
] as const satisfies readonly (keyof ZendeskFullApiTicketContentPinsGeneratedClient)[];

export function createZendeskFullApiTicketContentPinsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketContentPinsGeneratedClient {
  return {
    CreateTicketContentPin: (...args) => callOperation("CreateTicketContentPin", ...(args as ZendeskFullApiOperationArgs<"CreateTicketContentPin">)),
    DeleteTicketContentPin: (...args) => callOperation("DeleteTicketContentPin", ...(args as ZendeskFullApiOperationArgs<"DeleteTicketContentPin">)),
    ListTicketContentPins: (...args) => callOperation("ListTicketContentPins", ...(args as ZendeskFullApiOperationArgs<"ListTicketContentPins">)),
  };
}
