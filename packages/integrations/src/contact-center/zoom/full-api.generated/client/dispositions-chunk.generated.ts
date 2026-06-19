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
export const ZoomContactCenterFullApiDispositionsOperationKeys = [
  "GET /contact_center/dispositions",
  "POST /contact_center/dispositions",
  "GET /contact_center/dispositions/sets",
  "POST /contact_center/dispositions/sets",
  "GET /contact_center/dispositions/sets/{dispositionSetId}",
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}",
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}",
  "GET /contact_center/dispositions/{dispositionId}",
  "DELETE /contact_center/dispositions/{dispositionId}",
  "PATCH /contact_center/dispositions/{dispositionId}"
] as const;
export type ZoomContactCenterFullApiDispositionsOperationKey = typeof ZoomContactCenterFullApiDispositionsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiDispositionsOperationPathParamMap {
  "GET /contact_center/dispositions": {};
  "POST /contact_center/dispositions": {};
  "GET /contact_center/dispositions/sets": {};
  "POST /contact_center/dispositions/sets": {};
  "GET /contact_center/dispositions/sets/{dispositionSetId}": { "dispositionSetId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}": { "dispositionSetId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}": { "dispositionSetId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/dispositions/{dispositionId}": { "dispositionId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/dispositions/{dispositionId}": { "dispositionId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/dispositions/{dispositionId}": { "dispositionId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiDispositionsOperationRequestMap {
  "GET /contact_center/dispositions": ZoomContactCenterFullApiOperationInput<"GET /contact_center/dispositions">;
  "POST /contact_center/dispositions": ZoomContactCenterFullApiOperationInput<"POST /contact_center/dispositions">;
  "GET /contact_center/dispositions/sets": ZoomContactCenterFullApiOperationInput<"GET /contact_center/dispositions/sets">;
  "POST /contact_center/dispositions/sets": ZoomContactCenterFullApiOperationInput<"POST /contact_center/dispositions/sets">;
  "GET /contact_center/dispositions/sets/{dispositionSetId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/dispositions/sets/{dispositionSetId}">;
  "DELETE /contact_center/dispositions/sets/{dispositionSetId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/dispositions/sets/{dispositionSetId}">;
  "PATCH /contact_center/dispositions/sets/{dispositionSetId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/dispositions/sets/{dispositionSetId}">;
  "GET /contact_center/dispositions/{dispositionId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/dispositions/{dispositionId}">;
  "DELETE /contact_center/dispositions/{dispositionId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/dispositions/{dispositionId}">;
  "PATCH /contact_center/dispositions/{dispositionId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/dispositions/{dispositionId}">;
}

export interface ZoomContactCenterFullApiDispositionsGeneratedClient {
  ListDispositions(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/dispositions"]>;
  CreateDisposition(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/dispositions">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/dispositions"]>;
  ListSets(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions/sets">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/dispositions/sets"]>;
  CreateSet(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/dispositions/sets">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/dispositions/sets"]>;
  GetSet(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions/sets/{dispositionSetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/dispositions/sets/{dispositionSetId}"]>;
  DeleteSet(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/dispositions/sets/{dispositionSetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/dispositions/sets/{dispositionSetId}"]>;
  UpdateSet(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/dispositions/sets/{dispositionSetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/dispositions/sets/{dispositionSetId}"]>;
  GetDisposition(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions/{dispositionId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/dispositions/{dispositionId}"]>;
  DeleteDisposition(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/dispositions/{dispositionId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/dispositions/{dispositionId}"]>;
  UpdateDisposition(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/dispositions/{dispositionId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/dispositions/{dispositionId}"]>;
}

export const ZoomContactCenterFullApiDispositionsGeneratedFunctionNames = [
  "ListDispositions",
  "CreateDisposition",
  "ListSets",
  "CreateSet",
  "GetSet",
  "DeleteSet",
  "UpdateSet",
  "GetDisposition",
  "DeleteDisposition",
  "UpdateDisposition"
] as const satisfies readonly (keyof ZoomContactCenterFullApiDispositionsGeneratedClient)[];

export function createZoomContactCenterFullApiDispositionsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiDispositionsGeneratedClient {
  return {
    ListDispositions: (...args) => callOperation("GET /contact_center/dispositions", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions">)),
    CreateDisposition: (...args) => callOperation("POST /contact_center/dispositions", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/dispositions">)),
    ListSets: (...args) => callOperation("GET /contact_center/dispositions/sets", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions/sets">)),
    CreateSet: (...args) => callOperation("POST /contact_center/dispositions/sets", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/dispositions/sets">)),
    GetSet: (...args) => callOperation("GET /contact_center/dispositions/sets/{dispositionSetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions/sets/{dispositionSetId}">)),
    DeleteSet: (...args) => callOperation("DELETE /contact_center/dispositions/sets/{dispositionSetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/dispositions/sets/{dispositionSetId}">)),
    UpdateSet: (...args) => callOperation("PATCH /contact_center/dispositions/sets/{dispositionSetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/dispositions/sets/{dispositionSetId}">)),
    GetDisposition: (...args) => callOperation("GET /contact_center/dispositions/{dispositionId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/dispositions/{dispositionId}">)),
    DeleteDisposition: (...args) => callOperation("DELETE /contact_center/dispositions/{dispositionId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/dispositions/{dispositionId}">)),
    UpdateDisposition: (...args) => callOperation("PATCH /contact_center/dispositions/{dispositionId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/dispositions/{dispositionId}">)),
  };
}
