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
export const MailgunFullApiTagsNewOperationKeys = [
  "PUT /v1/analytics/tags",
  "POST /v1/analytics/tags",
  "DELETE /v1/analytics/tags",
  "GET /v1/analytics/tags/limits"
] as const;
export type MailgunFullApiTagsNewOperationKey = typeof MailgunFullApiTagsNewOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiTagsNewOperationPathParamMap {
  "PUT /v1/analytics/tags": {};
  "POST /v1/analytics/tags": {};
  "DELETE /v1/analytics/tags": {};
  "GET /v1/analytics/tags/limits": {};
}

export interface MailgunFullApiTagsNewOperationRequestMap {
  "PUT /v1/analytics/tags": MailgunFullApiOperationInput<"PUT /v1/analytics/tags">;
  "POST /v1/analytics/tags": MailgunFullApiOperationInput<"POST /v1/analytics/tags">;
  "DELETE /v1/analytics/tags": MailgunFullApiOperationInput<"DELETE /v1/analytics/tags">;
  "GET /v1/analytics/tags/limits": MailgunFullApiOperationInput<"GET /v1/analytics/tags/limits">;
}

export interface MailgunFullApiTagsNewGeneratedClient {
  UpdateAccountTag(...args: MailgunFullApiOperationArgs<"PUT /v1/analytics/tags">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/analytics/tags"]>;
  PostQueryToListAccountTagsOrSearchForSingleTag(...args: MailgunFullApiOperationArgs<"POST /v1/analytics/tags">): Promise<MailgunFullApiOperationResponseMap["POST /v1/analytics/tags"]>;
  DeleteAccountTag(...args: MailgunFullApiOperationArgs<"DELETE /v1/analytics/tags">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/analytics/tags"]>;
  GetAccountTagLimitInformation(...args: MailgunFullApiOperationArgs<"GET /v1/analytics/tags/limits">): Promise<MailgunFullApiOperationResponseMap["GET /v1/analytics/tags/limits"]>;
}

export const MailgunFullApiTagsNewGeneratedFunctionNames = [
  "UpdateAccountTag",
  "PostQueryToListAccountTagsOrSearchForSingleTag",
  "DeleteAccountTag",
  "GetAccountTagLimitInformation"
] as const satisfies readonly (keyof MailgunFullApiTagsNewGeneratedClient)[];

export function createMailgunFullApiTagsNewGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiTagsNewGeneratedClient {
  return {
    UpdateAccountTag: (...args) => callOperation("PUT /v1/analytics/tags", ...(args as MailgunFullApiOperationArgs<"PUT /v1/analytics/tags">)),
    PostQueryToListAccountTagsOrSearchForSingleTag: (...args) => callOperation("POST /v1/analytics/tags", ...(args as MailgunFullApiOperationArgs<"POST /v1/analytics/tags">)),
    DeleteAccountTag: (...args) => callOperation("DELETE /v1/analytics/tags", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/analytics/tags">)),
    GetAccountTagLimitInformation: (...args) => callOperation("GET /v1/analytics/tags/limits", ...(args as MailgunFullApiOperationArgs<"GET /v1/analytics/tags/limits">)),
  };
}
