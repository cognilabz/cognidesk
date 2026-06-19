// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiNotesOperationKeys = [
  "GET /contact_center/engagements/notes",
  "GET /contact_center/engagements/{engagementId}/notes",
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}",
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}"
] as const;
export type ZoomContactCenterFullApiNotesOperationKey = typeof ZoomContactCenterFullApiNotesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiNotesOperationPathParamMap {
  "GET /contact_center/engagements/notes": {};
  "GET /contact_center/engagements/{engagementId}/notes": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}": { "engagementId": ZoomContactCenterFullApiPathParamValue; "noteId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}": { "engagementId": ZoomContactCenterFullApiPathParamValue; "noteId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiNotesOperationRequestMap {
  "GET /contact_center/engagements/notes": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/notes">;
  "GET /contact_center/engagements/{engagementId}/notes": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/notes">;
  "GET /contact_center/engagements/{engagementId}/notes/{noteId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/notes/{noteId}">;
  "PATCH /contact_center/engagements/{engagementId}/notes/{noteId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/engagements/{engagementId}/notes/{noteId}">;
}

export interface ZoomContactCenterFullApiNotesGeneratedClient {
  Notes(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/notes">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/notes"]>;
  EngagementNotes(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/notes">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/notes"]>;
  GetNote(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/notes/{noteId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/notes/{noteId}"]>;
  NoteUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/engagements/{engagementId}/notes/{noteId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/engagements/{engagementId}/notes/{noteId}"]>;
}

export const ZoomContactCenterFullApiNotesGeneratedFunctionNames = [
  "Notes",
  "EngagementNotes",
  "GetNote",
  "NoteUpdate"
] as const satisfies readonly (keyof ZoomContactCenterFullApiNotesGeneratedClient)[];

export function createZoomContactCenterFullApiNotesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiNotesGeneratedClient {
  return {
    Notes: (...args) => callOperation("GET /contact_center/engagements/notes", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/notes">)),
    EngagementNotes: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/notes", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/notes">)),
    GetNote: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/notes/{noteId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/notes/{noteId}">)),
    NoteUpdate: (...args) => callOperation("PATCH /contact_center/engagements/{engagementId}/notes/{noteId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/engagements/{engagementId}/notes/{noteId}">)),
  };
}
