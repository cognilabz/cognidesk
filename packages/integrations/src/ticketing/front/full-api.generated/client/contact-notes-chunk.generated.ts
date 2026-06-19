// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiContactNotesOperationKeys = [
  "list-notes",
  "add-note"
] as const;
export type FrontFullApiContactNotesOperationKey = typeof FrontFullApiContactNotesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiContactNotesOperationPathParamMap {
  "list-notes": { "contact_id": FrontFullApiPathParamValue };
  "add-note": { "contact_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiContactNotesOperationRequestMap {
  "list-notes": FrontFullApiOperationInput<"list-notes">;
  "add-note": FrontFullApiOperationInput<"add-note">;
}

export interface FrontFullApiContactNotesGeneratedClient {
  frontListNotes(...args: FrontFullApiOperationArgs<"list-notes">): Promise<FrontFullApiOperationResponseMap["list-notes"]>;
  frontAddNote(...args: FrontFullApiOperationArgs<"add-note">): Promise<FrontFullApiOperationResponseMap["add-note"]>;
}

export const FrontFullApiContactNotesGeneratedFunctionNames = [
  "frontListNotes",
  "frontAddNote"
] as const satisfies readonly (keyof FrontFullApiContactNotesGeneratedClient)[];

export function createFrontFullApiContactNotesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiContactNotesGeneratedClient {
  return {
    frontListNotes: (...args) => callOperation("list-notes", ...(args as FrontFullApiOperationArgs<"list-notes">)),
    frontAddNote: (...args) => callOperation("add-note", ...(args as FrontFullApiOperationArgs<"add-note">)),
  };
}
