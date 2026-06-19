// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiRoutesOperationKeys = [
  "POST /v3/routes",
  "GET /v3/routes",
  "GET /v3/routes/{id}",
  "PUT /v3/routes/{id}",
  "DELETE /v3/routes/{id}",
  "GET /v3/routes/match"
] as const;
export type MailgunFullApiRoutesOperationKey = typeof MailgunFullApiRoutesOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiRoutesOperationPathParamMap {
  "POST /v3/routes": {};
  "GET /v3/routes": {};
  "GET /v3/routes/{id}": { "id": MailgunFullApiPathParamValue };
  "PUT /v3/routes/{id}": { "id": MailgunFullApiPathParamValue };
  "DELETE /v3/routes/{id}": { "id": MailgunFullApiPathParamValue };
  "GET /v3/routes/match": {};
}

export interface MailgunFullApiRoutesOperationRequestMap {
  "POST /v3/routes": MailgunFullApiOperationInput<"POST /v3/routes">;
  "GET /v3/routes": MailgunFullApiOperationInput<"GET /v3/routes">;
  "GET /v3/routes/{id}": MailgunFullApiOperationInput<"GET /v3/routes/{id}">;
  "PUT /v3/routes/{id}": MailgunFullApiOperationInput<"PUT /v3/routes/{id}">;
  "DELETE /v3/routes/{id}": MailgunFullApiOperationInput<"DELETE /v3/routes/{id}">;
  "GET /v3/routes/match": MailgunFullApiOperationInput<"GET /v3/routes/match">;
}

export interface MailgunFullApiRoutesGeneratedClient {
  CreateARoute(...args: MailgunFullApiOperationArgs<"POST /v3/routes">): Promise<MailgunFullApiOperationResponseMap["POST /v3/routes"]>;
  GetAllRoutes(...args: MailgunFullApiOperationArgs<"GET /v3/routes">): Promise<MailgunFullApiOperationResponseMap["GET /v3/routes"]>;
  GetARoute(...args: MailgunFullApiOperationArgs<"GET /v3/routes/{id}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/routes/{id}"]>;
  UpdateARoute(...args: MailgunFullApiOperationArgs<"PUT /v3/routes/{id}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/routes/{id}"]>;
  DeleteARoute(...args: MailgunFullApiOperationArgs<"DELETE /v3/routes/{id}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/routes/{id}"]>;
  MatchAddressToRoute(...args: MailgunFullApiOperationArgs<"GET /v3/routes/match">): Promise<MailgunFullApiOperationResponseMap["GET /v3/routes/match"]>;
}

export const MailgunFullApiRoutesGeneratedFunctionNames = [
  "CreateARoute",
  "GetAllRoutes",
  "GetARoute",
  "UpdateARoute",
  "DeleteARoute",
  "MatchAddressToRoute"
] as const satisfies readonly (keyof MailgunFullApiRoutesGeneratedClient)[];

export function createMailgunFullApiRoutesGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiRoutesGeneratedClient {
  return {
    CreateARoute: (...args) => callOperation("POST /v3/routes", ...(args as MailgunFullApiOperationArgs<"POST /v3/routes">)),
    GetAllRoutes: (...args) => callOperation("GET /v3/routes", ...(args as MailgunFullApiOperationArgs<"GET /v3/routes">)),
    GetARoute: (...args) => callOperation("GET /v3/routes/{id}", ...(args as MailgunFullApiOperationArgs<"GET /v3/routes/{id}">)),
    UpdateARoute: (...args) => callOperation("PUT /v3/routes/{id}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/routes/{id}">)),
    DeleteARoute: (...args) => callOperation("DELETE /v3/routes/{id}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/routes/{id}">)),
    MatchAddressToRoute: (...args) => callOperation("GET /v3/routes/match", ...(args as MailgunFullApiOperationArgs<"GET /v3/routes/match">)),
  };
}
