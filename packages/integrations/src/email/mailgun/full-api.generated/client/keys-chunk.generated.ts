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
export const MailgunFullApiKeysOperationKeys = [
  "GET /v1/keys",
  "POST /v1/keys",
  "DELETE /v1/keys/{key_id}",
  "POST /v1/keys/public"
] as const;
export type MailgunFullApiKeysOperationKey = typeof MailgunFullApiKeysOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiKeysOperationPathParamMap {
  "GET /v1/keys": {};
  "POST /v1/keys": {};
  "DELETE /v1/keys/{key_id}": { "key_id": MailgunFullApiPathParamValue };
  "POST /v1/keys/public": {};
}

export interface MailgunFullApiKeysOperationRequestMap {
  "GET /v1/keys": MailgunFullApiOperationInput<"GET /v1/keys">;
  "POST /v1/keys": MailgunFullApiOperationInput<"POST /v1/keys">;
  "DELETE /v1/keys/{key_id}": MailgunFullApiOperationInput<"DELETE /v1/keys/{key_id}">;
  "POST /v1/keys/public": MailgunFullApiOperationInput<"POST /v1/keys/public">;
}

export interface MailgunFullApiKeysGeneratedClient {
  ListMailgunAPIKeys(...args: MailgunFullApiOperationArgs<"GET /v1/keys">): Promise<MailgunFullApiOperationResponseMap["GET /v1/keys"]>;
  CreateMailgunAPIKey(...args: MailgunFullApiOperationArgs<"POST /v1/keys">): Promise<MailgunFullApiOperationResponseMap["POST /v1/keys"]>;
  DeleteMailgunAPIKey(...args: MailgunFullApiOperationArgs<"DELETE /v1/keys/{key_id}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/keys/{key_id}"]>;
  RegenerateMailgunPublicAPIKey(...args: MailgunFullApiOperationArgs<"POST /v1/keys/public">): Promise<MailgunFullApiOperationResponseMap["POST /v1/keys/public"]>;
}

export const MailgunFullApiKeysGeneratedFunctionNames = [
  "ListMailgunAPIKeys",
  "CreateMailgunAPIKey",
  "DeleteMailgunAPIKey",
  "RegenerateMailgunPublicAPIKey"
] as const satisfies readonly (keyof MailgunFullApiKeysGeneratedClient)[];

export function createMailgunFullApiKeysGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiKeysGeneratedClient {
  return {
    ListMailgunAPIKeys: (...args) => callOperation("GET /v1/keys", ...(args as MailgunFullApiOperationArgs<"GET /v1/keys">)),
    CreateMailgunAPIKey: (...args) => callOperation("POST /v1/keys", ...(args as MailgunFullApiOperationArgs<"POST /v1/keys">)),
    DeleteMailgunAPIKey: (...args) => callOperation("DELETE /v1/keys/{key_id}", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/keys/{key_id}">)),
    RegenerateMailgunPublicAPIKey: (...args) => callOperation("POST /v1/keys/public", ...(args as MailgunFullApiOperationArgs<"POST /v1/keys/public">)),
  };
}
