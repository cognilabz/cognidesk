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
export const MailgunFullApiForwardsOperationKeys = [
  "GET /v3/forwards/{id}",
  "PUT /v3/forwards/{id}",
  "DELETE /v3/forwards/{id}",
  "GET /v3/forwards",
  "POST /v3/forwards"
] as const;
export type MailgunFullApiForwardsOperationKey = typeof MailgunFullApiForwardsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiForwardsOperationPathParamMap {
  "GET /v3/forwards/{id}": { "id": MailgunFullApiPathParamValue };
  "PUT /v3/forwards/{id}": { "id": MailgunFullApiPathParamValue };
  "DELETE /v3/forwards/{id}": { "id": MailgunFullApiPathParamValue };
  "GET /v3/forwards": {};
  "POST /v3/forwards": {};
}

export interface MailgunFullApiForwardsOperationRequestMap {
  "GET /v3/forwards/{id}": MailgunFullApiOperationInput<"GET /v3/forwards/{id}">;
  "PUT /v3/forwards/{id}": MailgunFullApiOperationInput<"PUT /v3/forwards/{id}">;
  "DELETE /v3/forwards/{id}": MailgunFullApiOperationInput<"DELETE /v3/forwards/{id}">;
  "GET /v3/forwards": MailgunFullApiOperationInput<"GET /v3/forwards">;
  "POST /v3/forwards": MailgunFullApiOperationInput<"POST /v3/forwards">;
}

export interface MailgunFullApiForwardsGeneratedClient {
  GetASingleForwardRuleByID(...args: MailgunFullApiOperationArgs<"GET /v3/forwards/{id}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/forwards/{id}"]>;
  UpdateASingleForwardRuleByID(...args: MailgunFullApiOperationArgs<"PUT /v3/forwards/{id}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/forwards/{id}"]>;
  DeleteASingleForwardRuleByID(...args: MailgunFullApiOperationArgs<"DELETE /v3/forwards/{id}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/forwards/{id}"]>;
  ListForwardRules(...args: MailgunFullApiOperationArgs<"GET /v3/forwards">): Promise<MailgunFullApiOperationResponseMap["GET /v3/forwards"]>;
  CreateAForwardRule(...args: MailgunFullApiOperationArgs<"POST /v3/forwards">): Promise<MailgunFullApiOperationResponseMap["POST /v3/forwards"]>;
}

export const MailgunFullApiForwardsGeneratedFunctionNames = [
  "GetASingleForwardRuleByID",
  "UpdateASingleForwardRuleByID",
  "DeleteASingleForwardRuleByID",
  "ListForwardRules",
  "CreateAForwardRule"
] as const satisfies readonly (keyof MailgunFullApiForwardsGeneratedClient)[];

export function createMailgunFullApiForwardsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiForwardsGeneratedClient {
  return {
    GetASingleForwardRuleByID: (...args) => callOperation("GET /v3/forwards/{id}", ...(args as MailgunFullApiOperationArgs<"GET /v3/forwards/{id}">)),
    UpdateASingleForwardRuleByID: (...args) => callOperation("PUT /v3/forwards/{id}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/forwards/{id}">)),
    DeleteASingleForwardRuleByID: (...args) => callOperation("DELETE /v3/forwards/{id}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/forwards/{id}">)),
    ListForwardRules: (...args) => callOperation("GET /v3/forwards", ...(args as MailgunFullApiOperationArgs<"GET /v3/forwards">)),
    CreateAForwardRule: (...args) => callOperation("POST /v3/forwards", ...(args as MailgunFullApiOperationArgs<"POST /v3/forwards">)),
  };
}
