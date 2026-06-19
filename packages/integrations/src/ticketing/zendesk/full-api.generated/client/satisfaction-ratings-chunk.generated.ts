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
export const ZendeskFullApiSatisfactionRatingsOperationKeys = [
  "CountSatisfactionRatings",
  "CreateTicketSatisfactionRating",
  "ListSatisfactionRatings",
  "ShowSatisfactionRating"
] as const;
export type ZendeskFullApiSatisfactionRatingsOperationKey = typeof ZendeskFullApiSatisfactionRatingsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSatisfactionRatingsOperationPathParamMap {
  "CountSatisfactionRatings": {};
  "CreateTicketSatisfactionRating": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListSatisfactionRatings": {};
  "ShowSatisfactionRating": { "satisfaction_rating_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiSatisfactionRatingsOperationRequestMap {
  "CountSatisfactionRatings": ZendeskFullApiOperationInput<"CountSatisfactionRatings">;
  "CreateTicketSatisfactionRating": ZendeskFullApiOperationInput<"CreateTicketSatisfactionRating">;
  "ListSatisfactionRatings": ZendeskFullApiOperationInput<"ListSatisfactionRatings">;
  "ShowSatisfactionRating": ZendeskFullApiOperationInput<"ShowSatisfactionRating">;
}

export interface ZendeskFullApiSatisfactionRatingsGeneratedClient {
  CountSatisfactionRatings(...args: ZendeskFullApiOperationArgs<"CountSatisfactionRatings">): Promise<ZendeskFullApiOperationResponseMap["CountSatisfactionRatings"]>;
  CreateTicketSatisfactionRating(...args: ZendeskFullApiOperationArgs<"CreateTicketSatisfactionRating">): Promise<ZendeskFullApiOperationResponseMap["CreateTicketSatisfactionRating"]>;
  ListSatisfactionRatings(...args: ZendeskFullApiOperationArgs<"ListSatisfactionRatings">): Promise<ZendeskFullApiOperationResponseMap["ListSatisfactionRatings"]>;
  ShowSatisfactionRating(...args: ZendeskFullApiOperationArgs<"ShowSatisfactionRating">): Promise<ZendeskFullApiOperationResponseMap["ShowSatisfactionRating"]>;
}

export const ZendeskFullApiSatisfactionRatingsGeneratedFunctionNames = [
  "CountSatisfactionRatings",
  "CreateTicketSatisfactionRating",
  "ListSatisfactionRatings",
  "ShowSatisfactionRating"
] as const satisfies readonly (keyof ZendeskFullApiSatisfactionRatingsGeneratedClient)[];

export function createZendeskFullApiSatisfactionRatingsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSatisfactionRatingsGeneratedClient {
  return {
    CountSatisfactionRatings: (...args) => callOperation("CountSatisfactionRatings", ...(args as ZendeskFullApiOperationArgs<"CountSatisfactionRatings">)),
    CreateTicketSatisfactionRating: (...args) => callOperation("CreateTicketSatisfactionRating", ...(args as ZendeskFullApiOperationArgs<"CreateTicketSatisfactionRating">)),
    ListSatisfactionRatings: (...args) => callOperation("ListSatisfactionRatings", ...(args as ZendeskFullApiOperationArgs<"ListSatisfactionRatings">)),
    ShowSatisfactionRating: (...args) => callOperation("ShowSatisfactionRating", ...(args as ZendeskFullApiOperationArgs<"ShowSatisfactionRating">)),
  };
}
