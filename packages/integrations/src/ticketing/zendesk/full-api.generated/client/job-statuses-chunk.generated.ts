// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiJobStatusesOperationKeys = [
  "ListJobStatuses",
  "ShowJobStatus",
  "ShowManyJobStatuses"
] as const;
export type ZendeskFullApiJobStatusesOperationKey = typeof ZendeskFullApiJobStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiJobStatusesOperationPathParamMap {
  "ListJobStatuses": {};
  "ShowJobStatus": { "job_status_id": ZendeskFullApiPathParamValue };
  "ShowManyJobStatuses": {};
}

export interface ZendeskFullApiJobStatusesOperationRequestMap {
  "ListJobStatuses": ZendeskFullApiOperationInput<"ListJobStatuses">;
  "ShowJobStatus": ZendeskFullApiOperationInput<"ShowJobStatus">;
  "ShowManyJobStatuses": ZendeskFullApiOperationInput<"ShowManyJobStatuses">;
}

export interface ZendeskFullApiJobStatusesGeneratedClient {
  ListJobStatuses(...args: ZendeskFullApiOperationArgs<"ListJobStatuses">): Promise<ZendeskFullApiOperationResponseMap["ListJobStatuses"]>;
  ShowJobStatus(...args: ZendeskFullApiOperationArgs<"ShowJobStatus">): Promise<ZendeskFullApiOperationResponseMap["ShowJobStatus"]>;
  ShowManyJobStatuses(...args: ZendeskFullApiOperationArgs<"ShowManyJobStatuses">): Promise<ZendeskFullApiOperationResponseMap["ShowManyJobStatuses"]>;
}

export const ZendeskFullApiJobStatusesGeneratedFunctionNames = [
  "ListJobStatuses",
  "ShowJobStatus",
  "ShowManyJobStatuses"
] as const satisfies readonly (keyof ZendeskFullApiJobStatusesGeneratedClient)[];

export function createZendeskFullApiJobStatusesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiJobStatusesGeneratedClient {
  return {
    ListJobStatuses: (...args) => callOperation("ListJobStatuses", ...(args as ZendeskFullApiOperationArgs<"ListJobStatuses">)),
    ShowJobStatus: (...args) => callOperation("ShowJobStatus", ...(args as ZendeskFullApiOperationArgs<"ShowJobStatus">)),
    ShowManyJobStatuses: (...args) => callOperation("ShowManyJobStatuses", ...(args as ZendeskFullApiOperationArgs<"ShowManyJobStatuses">)),
  };
}
