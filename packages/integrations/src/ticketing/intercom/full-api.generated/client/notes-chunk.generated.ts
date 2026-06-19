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
export const IntercomFullApiNotesOperationKeys = [
  "listCompanyNotes",
  "listNotes",
  "createNote",
  "retrieveNote"
] as const;
export type IntercomFullApiNotesOperationKey = typeof IntercomFullApiNotesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiNotesOperationPathParamMap {
  "listCompanyNotes": { "company_id": IntercomFullApiPathParamValue };
  "listNotes": { "contact_id": IntercomFullApiPathParamValue };
  "createNote": { "contact_id": IntercomFullApiPathParamValue };
  "retrieveNote": { "note_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiNotesOperationRequestMap {
  "listCompanyNotes": IntercomFullApiOperationInput<"listCompanyNotes">;
  "listNotes": IntercomFullApiOperationInput<"listNotes">;
  "createNote": IntercomFullApiOperationInput<"createNote">;
  "retrieveNote": IntercomFullApiOperationInput<"retrieveNote">;
}

export interface IntercomFullApiNotesGeneratedClient {
  intercomListCompanyNotes(...args: IntercomFullApiOperationArgs<"listCompanyNotes">): Promise<IntercomFullApiOperationResponseMap["listCompanyNotes"]>;
  intercomListNotes(...args: IntercomFullApiOperationArgs<"listNotes">): Promise<IntercomFullApiOperationResponseMap["listNotes"]>;
  intercomCreateNote(...args: IntercomFullApiOperationArgs<"createNote">): Promise<IntercomFullApiOperationResponseMap["createNote"]>;
  intercomRetrieveNote(...args: IntercomFullApiOperationArgs<"retrieveNote">): Promise<IntercomFullApiOperationResponseMap["retrieveNote"]>;
}

export const IntercomFullApiNotesGeneratedFunctionNames = [
  "intercomListCompanyNotes",
  "intercomListNotes",
  "intercomCreateNote",
  "intercomRetrieveNote"
] as const satisfies readonly (keyof IntercomFullApiNotesGeneratedClient)[];

export function createIntercomFullApiNotesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiNotesGeneratedClient {
  return {
    intercomListCompanyNotes: (...args) => callOperation("listCompanyNotes", ...(args as IntercomFullApiOperationArgs<"listCompanyNotes">)),
    intercomListNotes: (...args) => callOperation("listNotes", ...(args as IntercomFullApiOperationArgs<"listNotes">)),
    intercomCreateNote: (...args) => callOperation("createNote", ...(args as IntercomFullApiOperationArgs<"createNote">)),
    intercomRetrieveNote: (...args) => callOperation("retrieveNote", ...(args as IntercomFullApiOperationArgs<"retrieveNote">)),
  };
}
