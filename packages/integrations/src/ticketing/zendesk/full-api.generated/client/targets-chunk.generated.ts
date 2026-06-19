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
export const ZendeskFullApiTargetsOperationKeys = [
  "CreateTarget",
  "DeleteTarget",
  "ListTargets",
  "ShowTarget",
  "UpdateTarget"
] as const;
export type ZendeskFullApiTargetsOperationKey = typeof ZendeskFullApiTargetsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTargetsOperationPathParamMap {
  "CreateTarget": {};
  "DeleteTarget": { "target_id": ZendeskFullApiPathParamValue };
  "ListTargets": {};
  "ShowTarget": { "target_id": ZendeskFullApiPathParamValue };
  "UpdateTarget": { "target_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTargetsOperationRequestMap {
  "CreateTarget": ZendeskFullApiOperationInput<"CreateTarget">;
  "DeleteTarget": ZendeskFullApiOperationInput<"DeleteTarget">;
  "ListTargets": ZendeskFullApiOperationInput<"ListTargets">;
  "ShowTarget": ZendeskFullApiOperationInput<"ShowTarget">;
  "UpdateTarget": ZendeskFullApiOperationInput<"UpdateTarget">;
}

export interface ZendeskFullApiTargetsGeneratedClient {
  CreateTarget(...args: ZendeskFullApiOperationArgs<"CreateTarget">): Promise<ZendeskFullApiOperationResponseMap["CreateTarget"]>;
  DeleteTarget(...args: ZendeskFullApiOperationArgs<"DeleteTarget">): Promise<ZendeskFullApiOperationResponseMap["DeleteTarget"]>;
  ListTargets(...args: ZendeskFullApiOperationArgs<"ListTargets">): Promise<ZendeskFullApiOperationResponseMap["ListTargets"]>;
  ShowTarget(...args: ZendeskFullApiOperationArgs<"ShowTarget">): Promise<ZendeskFullApiOperationResponseMap["ShowTarget"]>;
  UpdateTarget(...args: ZendeskFullApiOperationArgs<"UpdateTarget">): Promise<ZendeskFullApiOperationResponseMap["UpdateTarget"]>;
}

export const ZendeskFullApiTargetsGeneratedFunctionNames = [
  "CreateTarget",
  "DeleteTarget",
  "ListTargets",
  "ShowTarget",
  "UpdateTarget"
] as const satisfies readonly (keyof ZendeskFullApiTargetsGeneratedClient)[];

export function createZendeskFullApiTargetsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTargetsGeneratedClient {
  return {
    CreateTarget: (...args) => callOperation("CreateTarget", ...(args as ZendeskFullApiOperationArgs<"CreateTarget">)),
    DeleteTarget: (...args) => callOperation("DeleteTarget", ...(args as ZendeskFullApiOperationArgs<"DeleteTarget">)),
    ListTargets: (...args) => callOperation("ListTargets", ...(args as ZendeskFullApiOperationArgs<"ListTargets">)),
    ShowTarget: (...args) => callOperation("ShowTarget", ...(args as ZendeskFullApiOperationArgs<"ShowTarget">)),
    UpdateTarget: (...args) => callOperation("UpdateTarget", ...(args as ZendeskFullApiOperationArgs<"UpdateTarget">)),
  };
}
