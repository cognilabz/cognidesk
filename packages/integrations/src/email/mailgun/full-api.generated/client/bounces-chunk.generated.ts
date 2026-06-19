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
export const MailgunFullApiBouncesOperationKeys = [
  "POST /v3/{domain_name}/bounces/import",
  "GET /v3/{domain_name}/bounces/{address}",
  "DELETE /v3/{domain_name}/bounces/{address}",
  "GET /v3/{domain_name}/bounces",
  "POST /v3/{domain_name}/bounces",
  "DELETE /v3/{domain_name}/bounces"
] as const;
export type MailgunFullApiBouncesOperationKey = typeof MailgunFullApiBouncesOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiBouncesOperationPathParamMap {
  "POST /v3/{domain_name}/bounces/import": { "domain_name": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/bounces/{address}": { "domain_name": MailgunFullApiPathParamValue; "address": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/bounces/{address}": { "domain_name": MailgunFullApiPathParamValue; "address": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/bounces": { "domain_name": MailgunFullApiPathParamValue };
  "POST /v3/{domain_name}/bounces": { "domain_name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/bounces": { "domain_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiBouncesOperationRequestMap {
  "POST /v3/{domain_name}/bounces/import": MailgunFullApiOperationInput<"POST /v3/{domain_name}/bounces/import">;
  "GET /v3/{domain_name}/bounces/{address}": MailgunFullApiOperationInput<"GET /v3/{domain_name}/bounces/{address}">;
  "DELETE /v3/{domain_name}/bounces/{address}": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/bounces/{address}">;
  "GET /v3/{domain_name}/bounces": MailgunFullApiOperationInput<"GET /v3/{domain_name}/bounces">;
  "POST /v3/{domain_name}/bounces": MailgunFullApiOperationInput<"POST /v3/{domain_name}/bounces">;
  "DELETE /v3/{domain_name}/bounces": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/bounces">;
}

export interface MailgunFullApiBouncesGeneratedClient {
  ImportListOfBounces(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/bounces/import">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/bounces/import"]>;
  LookupBounceRecord(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/bounces/{address}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/bounces/{address}"]>;
  RemoveBounce(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/bounces/{address}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/bounces/{address}"]>;
  ListAllBounces(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/bounces">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/bounces"]>;
  AddBounces(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/bounces">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/bounces"]>;
  ClearAllBounces(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/bounces">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/bounces"]>;
}

export const MailgunFullApiBouncesGeneratedFunctionNames = [
  "ImportListOfBounces",
  "LookupBounceRecord",
  "RemoveBounce",
  "ListAllBounces",
  "AddBounces",
  "ClearAllBounces"
] as const satisfies readonly (keyof MailgunFullApiBouncesGeneratedClient)[];

export function createMailgunFullApiBouncesGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiBouncesGeneratedClient {
  return {
    ImportListOfBounces: (...args) => callOperation("POST /v3/{domain_name}/bounces/import", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/bounces/import">)),
    LookupBounceRecord: (...args) => callOperation("GET /v3/{domain_name}/bounces/{address}", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/bounces/{address}">)),
    RemoveBounce: (...args) => callOperation("DELETE /v3/{domain_name}/bounces/{address}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/bounces/{address}">)),
    ListAllBounces: (...args) => callOperation("GET /v3/{domain_name}/bounces", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/bounces">)),
    AddBounces: (...args) => callOperation("POST /v3/{domain_name}/bounces", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/bounces">)),
    ClearAllBounces: (...args) => callOperation("DELETE /v3/{domain_name}/bounces", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/bounces">)),
  };
}
