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
export const RingCentralDigitalApiTeamsOperationKeys = [
  "GET /teams",
  "POST /teams",
  "DELETE /teams/{teamId}",
  "GET /teams/{teamId}",
  "PUT /teams/{teamId}"
] as const;
export type RingCentralDigitalApiTeamsOperationKey = typeof RingCentralDigitalApiTeamsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiTeamsOperationPathParamMap {
  "GET /teams": {};
  "POST /teams": {};
  "DELETE /teams/{teamId}": { "teamId": RingCentralDigitalApiPathParamValue };
  "GET /teams/{teamId}": { "teamId": RingCentralDigitalApiPathParamValue };
  "PUT /teams/{teamId}": { "teamId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiTeamsOperationRequestMap {
  "GET /teams": RingCentralDigitalApiOperationInput<"GET /teams">;
  "POST /teams": RingCentralDigitalApiOperationInput<"POST /teams">;
  "DELETE /teams/{teamId}": RingCentralDigitalApiOperationInput<"DELETE /teams/{teamId}">;
  "GET /teams/{teamId}": RingCentralDigitalApiOperationInput<"GET /teams/{teamId}">;
  "PUT /teams/{teamId}": RingCentralDigitalApiOperationInput<"PUT /teams/{teamId}">;
}

export interface RingCentralDigitalApiTeamsGeneratedClient {
  GetAllTeams(...args: RingCentralDigitalApiOperationArgs<"GET /teams">): Promise<RingCentralDigitalApiOperationResponseMap["GET /teams"]>;
  CreateTeam(...args: RingCentralDigitalApiOperationArgs<"POST /teams">): Promise<RingCentralDigitalApiOperationResponseMap["POST /teams"]>;
  DeleteTeam(...args: RingCentralDigitalApiOperationArgs<"DELETE /teams/{teamId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /teams/{teamId}"]>;
  GetTeam(...args: RingCentralDigitalApiOperationArgs<"GET /teams/{teamId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /teams/{teamId}"]>;
  UpdateTeam(...args: RingCentralDigitalApiOperationArgs<"PUT /teams/{teamId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /teams/{teamId}"]>;
}

export const RingCentralDigitalApiTeamsGeneratedFunctionNames = [
  "GetAllTeams",
  "CreateTeam",
  "DeleteTeam",
  "GetTeam",
  "UpdateTeam"
] as const satisfies readonly (keyof RingCentralDigitalApiTeamsGeneratedClient)[];

export function createRingCentralDigitalApiTeamsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiTeamsGeneratedClient {
  return {
    GetAllTeams: (...args) => callOperation("GET /teams", ...(args as RingCentralDigitalApiOperationArgs<"GET /teams">)),
    CreateTeam: (...args) => callOperation("POST /teams", ...(args as RingCentralDigitalApiOperationArgs<"POST /teams">)),
    DeleteTeam: (...args) => callOperation("DELETE /teams/{teamId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /teams/{teamId}">)),
    GetTeam: (...args) => callOperation("GET /teams/{teamId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /teams/{teamId}">)),
    UpdateTeam: (...args) => callOperation("PUT /teams/{teamId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /teams/{teamId}">)),
  };
}
