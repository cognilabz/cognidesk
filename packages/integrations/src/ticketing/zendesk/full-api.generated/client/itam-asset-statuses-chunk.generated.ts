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
export const ZendeskFullApiITAMAssetStatusesOperationKeys = [
  "ListItamStatuses",
  "ShowItamStatus"
] as const;
export type ZendeskFullApiITAMAssetStatusesOperationKey = typeof ZendeskFullApiITAMAssetStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiITAMAssetStatusesOperationPathParamMap {
  "ListItamStatuses": {};
  "ShowItamStatus": { "status_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiITAMAssetStatusesOperationRequestMap {
  "ListItamStatuses": ZendeskFullApiOperationInput<"ListItamStatuses">;
  "ShowItamStatus": ZendeskFullApiOperationInput<"ShowItamStatus">;
}

export interface ZendeskFullApiITAMAssetStatusesGeneratedClient {
  ListItamStatuses(...args: ZendeskFullApiOperationArgs<"ListItamStatuses">): Promise<ZendeskFullApiOperationResponseMap["ListItamStatuses"]>;
  ShowItamStatus(...args: ZendeskFullApiOperationArgs<"ShowItamStatus">): Promise<ZendeskFullApiOperationResponseMap["ShowItamStatus"]>;
}

export const ZendeskFullApiITAMAssetStatusesGeneratedFunctionNames = [
  "ListItamStatuses",
  "ShowItamStatus"
] as const satisfies readonly (keyof ZendeskFullApiITAMAssetStatusesGeneratedClient)[];

export function createZendeskFullApiITAMAssetStatusesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiITAMAssetStatusesGeneratedClient {
  return {
    ListItamStatuses: (...args) => callOperation("ListItamStatuses", ...(args as ZendeskFullApiOperationArgs<"ListItamStatuses">)),
    ShowItamStatus: (...args) => callOperation("ShowItamStatus", ...(args as ZendeskFullApiOperationArgs<"ShowItamStatus">)),
  };
}
