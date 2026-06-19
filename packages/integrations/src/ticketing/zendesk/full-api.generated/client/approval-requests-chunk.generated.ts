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
export const ZendeskFullApiApprovalRequestsOperationKeys = [
  "CreateApprovalRequest",
  "ListApprovalRequests"
] as const;
export type ZendeskFullApiApprovalRequestsOperationKey = typeof ZendeskFullApiApprovalRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiApprovalRequestsOperationPathParamMap {
  "CreateApprovalRequest": {};
  "ListApprovalRequests": {};
}

export interface ZendeskFullApiApprovalRequestsOperationRequestMap {
  "CreateApprovalRequest": ZendeskFullApiOperationInput<"CreateApprovalRequest">;
  "ListApprovalRequests": ZendeskFullApiOperationInput<"ListApprovalRequests">;
}

export interface ZendeskFullApiApprovalRequestsGeneratedClient {
  CreateApprovalRequest(...args: ZendeskFullApiOperationArgs<"CreateApprovalRequest">): Promise<ZendeskFullApiOperationResponseMap["CreateApprovalRequest"]>;
  ListApprovalRequests(...args: ZendeskFullApiOperationArgs<"ListApprovalRequests">): Promise<ZendeskFullApiOperationResponseMap["ListApprovalRequests"]>;
}

export const ZendeskFullApiApprovalRequestsGeneratedFunctionNames = [
  "CreateApprovalRequest",
  "ListApprovalRequests"
] as const satisfies readonly (keyof ZendeskFullApiApprovalRequestsGeneratedClient)[];

export function createZendeskFullApiApprovalRequestsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiApprovalRequestsGeneratedClient {
  return {
    CreateApprovalRequest: (...args) => callOperation("CreateApprovalRequest", ...(args as ZendeskFullApiOperationArgs<"CreateApprovalRequest">)),
    ListApprovalRequests: (...args) => callOperation("ListApprovalRequests", ...(args as ZendeskFullApiOperationArgs<"ListApprovalRequests">)),
  };
}
