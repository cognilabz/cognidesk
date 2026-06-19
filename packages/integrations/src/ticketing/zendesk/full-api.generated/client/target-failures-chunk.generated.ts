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
export const ZendeskFullApiTargetFailuresOperationKeys = [
  "ListTargetFailures",
  "ShowTargetFailure"
] as const;
export type ZendeskFullApiTargetFailuresOperationKey = typeof ZendeskFullApiTargetFailuresOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTargetFailuresOperationPathParamMap {
  "ListTargetFailures": {};
  "ShowTargetFailure": { "target_failure_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTargetFailuresOperationRequestMap {
  "ListTargetFailures": ZendeskFullApiOperationInput<"ListTargetFailures">;
  "ShowTargetFailure": ZendeskFullApiOperationInput<"ShowTargetFailure">;
}

export interface ZendeskFullApiTargetFailuresGeneratedClient {
  ListTargetFailures(...args: ZendeskFullApiOperationArgs<"ListTargetFailures">): Promise<ZendeskFullApiOperationResponseMap["ListTargetFailures"]>;
  ShowTargetFailure(...args: ZendeskFullApiOperationArgs<"ShowTargetFailure">): Promise<ZendeskFullApiOperationResponseMap["ShowTargetFailure"]>;
}

export const ZendeskFullApiTargetFailuresGeneratedFunctionNames = [
  "ListTargetFailures",
  "ShowTargetFailure"
] as const satisfies readonly (keyof ZendeskFullApiTargetFailuresGeneratedClient)[];

export function createZendeskFullApiTargetFailuresGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTargetFailuresGeneratedClient {
  return {
    ListTargetFailures: (...args) => callOperation("ListTargetFailures", ...(args as ZendeskFullApiOperationArgs<"ListTargetFailures">)),
    ShowTargetFailure: (...args) => callOperation("ShowTargetFailure", ...(args as ZendeskFullApiOperationArgs<"ShowTargetFailure">)),
  };
}
