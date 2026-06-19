// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiFoldersOperationKeys = [
  "GET /folders",
  "POST /folders",
  "DELETE /folders/{folderId}",
  "GET /folders/{folderId}",
  "PUT /folders/{folderId}"
] as const;
export type RingCentralDigitalApiFoldersOperationKey = typeof RingCentralDigitalApiFoldersOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiFoldersOperationPathParamMap {
  "GET /folders": {};
  "POST /folders": {};
  "DELETE /folders/{folderId}": { "folderId": RingCentralDigitalApiPathParamValue };
  "GET /folders/{folderId}": { "folderId": RingCentralDigitalApiPathParamValue };
  "PUT /folders/{folderId}": { "folderId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiFoldersOperationRequestMap {
  "GET /folders": RingCentralDigitalApiOperationInput<"GET /folders">;
  "POST /folders": RingCentralDigitalApiOperationInput<"POST /folders">;
  "DELETE /folders/{folderId}": RingCentralDigitalApiOperationInput<"DELETE /folders/{folderId}">;
  "GET /folders/{folderId}": RingCentralDigitalApiOperationInput<"GET /folders/{folderId}">;
  "PUT /folders/{folderId}": RingCentralDigitalApiOperationInput<"PUT /folders/{folderId}">;
}

export interface RingCentralDigitalApiFoldersGeneratedClient {
  GetAllFolders(...args: RingCentralDigitalApiOperationArgs<"GET /folders">): Promise<RingCentralDigitalApiOperationResponseMap["GET /folders"]>;
  CreateFolder(...args: RingCentralDigitalApiOperationArgs<"POST /folders">): Promise<RingCentralDigitalApiOperationResponseMap["POST /folders"]>;
  DeleteFolder(...args: RingCentralDigitalApiOperationArgs<"DELETE /folders/{folderId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /folders/{folderId}"]>;
  GetFolder(...args: RingCentralDigitalApiOperationArgs<"GET /folders/{folderId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /folders/{folderId}"]>;
  UpdateFolder(...args: RingCentralDigitalApiOperationArgs<"PUT /folders/{folderId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /folders/{folderId}"]>;
}

export const RingCentralDigitalApiFoldersGeneratedFunctionNames = [
  "GetAllFolders",
  "CreateFolder",
  "DeleteFolder",
  "GetFolder",
  "UpdateFolder"
] as const satisfies readonly (keyof RingCentralDigitalApiFoldersGeneratedClient)[];

export function createRingCentralDigitalApiFoldersGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiFoldersGeneratedClient {
  return {
    GetAllFolders: (...args) => callOperation("GET /folders", ...(args as RingCentralDigitalApiOperationArgs<"GET /folders">)),
    CreateFolder: (...args) => callOperation("POST /folders", ...(args as RingCentralDigitalApiOperationArgs<"POST /folders">)),
    DeleteFolder: (...args) => callOperation("DELETE /folders/{folderId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /folders/{folderId}">)),
    GetFolder: (...args) => callOperation("GET /folders/{folderId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /folders/{folderId}">)),
    UpdateFolder: (...args) => callOperation("PUT /folders/{folderId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /folders/{folderId}">)),
  };
}
