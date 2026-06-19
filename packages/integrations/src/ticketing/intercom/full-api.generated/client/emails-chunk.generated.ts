// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiEmailsOperationKeys = [
  "listEmails",
  "retrieveEmail"
] as const;
export type IntercomFullApiEmailsOperationKey = typeof IntercomFullApiEmailsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiEmailsOperationPathParamMap {
  "listEmails": {};
  "retrieveEmail": { "id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiEmailsOperationRequestMap {
  "listEmails": IntercomFullApiOperationInput<"listEmails">;
  "retrieveEmail": IntercomFullApiOperationInput<"retrieveEmail">;
}

export interface IntercomFullApiEmailsGeneratedClient {
  intercomListEmails(...args: IntercomFullApiOperationArgs<"listEmails">): Promise<IntercomFullApiOperationResponseMap["listEmails"]>;
  intercomRetrieveEmail(...args: IntercomFullApiOperationArgs<"retrieveEmail">): Promise<IntercomFullApiOperationResponseMap["retrieveEmail"]>;
}

export const IntercomFullApiEmailsGeneratedFunctionNames = [
  "intercomListEmails",
  "intercomRetrieveEmail"
] as const satisfies readonly (keyof IntercomFullApiEmailsGeneratedClient)[];

export function createIntercomFullApiEmailsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiEmailsGeneratedClient {
  return {
    intercomListEmails: (...args) => callOperation("listEmails", ...(args as IntercomFullApiOperationArgs<"listEmails">)),
    intercomRetrieveEmail: (...args) => callOperation("retrieveEmail", ...(args as IntercomFullApiOperationArgs<"retrieveEmail">)),
  };
}
