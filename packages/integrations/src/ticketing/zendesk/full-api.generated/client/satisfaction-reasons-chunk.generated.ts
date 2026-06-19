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
export const ZendeskFullApiSatisfactionReasonsOperationKeys = [
  "ListSatisfactionRatingReasons",
  "ShowSatisfactionRatings"
] as const;
export type ZendeskFullApiSatisfactionReasonsOperationKey = typeof ZendeskFullApiSatisfactionReasonsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSatisfactionReasonsOperationPathParamMap {
  "ListSatisfactionRatingReasons": {};
  "ShowSatisfactionRatings": { "satisfaction_reason_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiSatisfactionReasonsOperationRequestMap {
  "ListSatisfactionRatingReasons": ZendeskFullApiOperationInput<"ListSatisfactionRatingReasons">;
  "ShowSatisfactionRatings": ZendeskFullApiOperationInput<"ShowSatisfactionRatings">;
}

export interface ZendeskFullApiSatisfactionReasonsGeneratedClient {
  ListSatisfactionRatingReasons(...args: ZendeskFullApiOperationArgs<"ListSatisfactionRatingReasons">): Promise<ZendeskFullApiOperationResponseMap["ListSatisfactionRatingReasons"]>;
  ShowSatisfactionRatings(...args: ZendeskFullApiOperationArgs<"ShowSatisfactionRatings">): Promise<ZendeskFullApiOperationResponseMap["ShowSatisfactionRatings"]>;
}

export const ZendeskFullApiSatisfactionReasonsGeneratedFunctionNames = [
  "ListSatisfactionRatingReasons",
  "ShowSatisfactionRatings"
] as const satisfies readonly (keyof ZendeskFullApiSatisfactionReasonsGeneratedClient)[];

export function createZendeskFullApiSatisfactionReasonsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSatisfactionReasonsGeneratedClient {
  return {
    ListSatisfactionRatingReasons: (...args) => callOperation("ListSatisfactionRatingReasons", ...(args as ZendeskFullApiOperationArgs<"ListSatisfactionRatingReasons">)),
    ShowSatisfactionRatings: (...args) => callOperation("ShowSatisfactionRatings", ...(args as ZendeskFullApiOperationArgs<"ShowSatisfactionRatings">)),
  };
}
