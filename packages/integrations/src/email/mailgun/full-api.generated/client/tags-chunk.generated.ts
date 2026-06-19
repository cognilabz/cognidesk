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
export const MailgunFullApiTagsOperationKeys = [
  "GET /v3/{domain}/tags",
  "GET /v3/{domain}/tag",
  "PUT /v3/{domain}/tag",
  "DELETE /v3/{domain}/tag",
  "GET /v3/{domain}/tag/stats/aggregates",
  "GET /v3/{domain}/tag/stats",
  "GET /v3/domains/{domain}/limits/tag"
] as const;
export type MailgunFullApiTagsOperationKey = typeof MailgunFullApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiTagsOperationPathParamMap {
  "GET /v3/{domain}/tags": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/{domain}/tag": { "domain": MailgunFullApiPathParamValue };
  "PUT /v3/{domain}/tag": { "domain": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain}/tag": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/{domain}/tag/stats/aggregates": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/{domain}/tag/stats": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/domains/{domain}/limits/tag": { "domain": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiTagsOperationRequestMap {
  "GET /v3/{domain}/tags": MailgunFullApiOperationInput<"GET /v3/{domain}/tags">;
  "GET /v3/{domain}/tag": MailgunFullApiOperationInput<"GET /v3/{domain}/tag">;
  "PUT /v3/{domain}/tag": MailgunFullApiOperationInput<"PUT /v3/{domain}/tag">;
  "DELETE /v3/{domain}/tag": MailgunFullApiOperationInput<"DELETE /v3/{domain}/tag">;
  "GET /v3/{domain}/tag/stats/aggregates": MailgunFullApiOperationInput<"GET /v3/{domain}/tag/stats/aggregates">;
  "GET /v3/{domain}/tag/stats": MailgunFullApiOperationInput<"GET /v3/{domain}/tag/stats">;
  "GET /v3/domains/{domain}/limits/tag": MailgunFullApiOperationInput<"GET /v3/domains/{domain}/limits/tag">;
}

export interface MailgunFullApiTagsGeneratedClient {
  ListAllTags(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/tags">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/tags"]>;
  GetATag(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/tag">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/tag"]>;
  UpdateTag(...args: MailgunFullApiOperationArgs<"PUT /v3/{domain}/tag">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/{domain}/tag"]>;
  DeleteTag(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain}/tag">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain}/tag"]>;
  GetAggregateStatTypesByTag(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/tag/stats/aggregates">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/tag/stats/aggregates"]>;
  GetStatsByTag(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/tag/stats">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/tag/stats"]>;
  GetTagLimits(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/limits/tag">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain}/limits/tag"]>;
}

export const MailgunFullApiTagsGeneratedFunctionNames = [
  "ListAllTags",
  "GetATag",
  "UpdateTag",
  "DeleteTag",
  "GetAggregateStatTypesByTag",
  "GetStatsByTag",
  "GetTagLimits"
] as const satisfies readonly (keyof MailgunFullApiTagsGeneratedClient)[];

export function createMailgunFullApiTagsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiTagsGeneratedClient {
  return {
    ListAllTags: (...args) => callOperation("GET /v3/{domain}/tags", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/tags">)),
    GetATag: (...args) => callOperation("GET /v3/{domain}/tag", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/tag">)),
    UpdateTag: (...args) => callOperation("PUT /v3/{domain}/tag", ...(args as MailgunFullApiOperationArgs<"PUT /v3/{domain}/tag">)),
    DeleteTag: (...args) => callOperation("DELETE /v3/{domain}/tag", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain}/tag">)),
    GetAggregateStatTypesByTag: (...args) => callOperation("GET /v3/{domain}/tag/stats/aggregates", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/tag/stats/aggregates">)),
    GetStatsByTag: (...args) => callOperation("GET /v3/{domain}/tag/stats", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/tag/stats">)),
    GetTagLimits: (...args) => callOperation("GET /v3/domains/{domain}/limits/tag", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/limits/tag">)),
  };
}
