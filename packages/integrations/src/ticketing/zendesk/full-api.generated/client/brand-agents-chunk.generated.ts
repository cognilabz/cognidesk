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
export const ZendeskFullApiBrandAgentsOperationKeys = [
  "DeleteBrandAgentById",
  "ListBrandAgents",
  "ListBrandAgentsByBrand",
  "ListUserBrandAgents",
  "ShowBrandAgentById",
  "ShowUserBrandAgentById"
] as const;
export type ZendeskFullApiBrandAgentsOperationKey = typeof ZendeskFullApiBrandAgentsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiBrandAgentsOperationPathParamMap {
  "DeleteBrandAgentById": { "brand_agent_id": ZendeskFullApiPathParamValue };
  "ListBrandAgents": {};
  "ListBrandAgentsByBrand": { "brand_id": ZendeskFullApiPathParamValue };
  "ListUserBrandAgents": { "user_id": ZendeskFullApiPathParamValue };
  "ShowBrandAgentById": { "brand_agent_id": ZendeskFullApiPathParamValue };
  "ShowUserBrandAgentById": { "user_id": ZendeskFullApiPathParamValue; "brand_agent_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiBrandAgentsOperationRequestMap {
  "DeleteBrandAgentById": ZendeskFullApiOperationInput<"DeleteBrandAgentById">;
  "ListBrandAgents": ZendeskFullApiOperationInput<"ListBrandAgents">;
  "ListBrandAgentsByBrand": ZendeskFullApiOperationInput<"ListBrandAgentsByBrand">;
  "ListUserBrandAgents": ZendeskFullApiOperationInput<"ListUserBrandAgents">;
  "ShowBrandAgentById": ZendeskFullApiOperationInput<"ShowBrandAgentById">;
  "ShowUserBrandAgentById": ZendeskFullApiOperationInput<"ShowUserBrandAgentById">;
}

export interface ZendeskFullApiBrandAgentsGeneratedClient {
  DeleteBrandAgentById(...args: ZendeskFullApiOperationArgs<"DeleteBrandAgentById">): Promise<ZendeskFullApiOperationResponseMap["DeleteBrandAgentById"]>;
  ListBrandAgents(...args: ZendeskFullApiOperationArgs<"ListBrandAgents">): Promise<ZendeskFullApiOperationResponseMap["ListBrandAgents"]>;
  ListBrandAgentsByBrand(...args: ZendeskFullApiOperationArgs<"ListBrandAgentsByBrand">): Promise<ZendeskFullApiOperationResponseMap["ListBrandAgentsByBrand"]>;
  ListUserBrandAgents(...args: ZendeskFullApiOperationArgs<"ListUserBrandAgents">): Promise<ZendeskFullApiOperationResponseMap["ListUserBrandAgents"]>;
  ShowBrandAgentById(...args: ZendeskFullApiOperationArgs<"ShowBrandAgentById">): Promise<ZendeskFullApiOperationResponseMap["ShowBrandAgentById"]>;
  ShowUserBrandAgentById(...args: ZendeskFullApiOperationArgs<"ShowUserBrandAgentById">): Promise<ZendeskFullApiOperationResponseMap["ShowUserBrandAgentById"]>;
}

export const ZendeskFullApiBrandAgentsGeneratedFunctionNames = [
  "DeleteBrandAgentById",
  "ListBrandAgents",
  "ListBrandAgentsByBrand",
  "ListUserBrandAgents",
  "ShowBrandAgentById",
  "ShowUserBrandAgentById"
] as const satisfies readonly (keyof ZendeskFullApiBrandAgentsGeneratedClient)[];

export function createZendeskFullApiBrandAgentsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiBrandAgentsGeneratedClient {
  return {
    DeleteBrandAgentById: (...args) => callOperation("DeleteBrandAgentById", ...(args as ZendeskFullApiOperationArgs<"DeleteBrandAgentById">)),
    ListBrandAgents: (...args) => callOperation("ListBrandAgents", ...(args as ZendeskFullApiOperationArgs<"ListBrandAgents">)),
    ListBrandAgentsByBrand: (...args) => callOperation("ListBrandAgentsByBrand", ...(args as ZendeskFullApiOperationArgs<"ListBrandAgentsByBrand">)),
    ListUserBrandAgents: (...args) => callOperation("ListUserBrandAgents", ...(args as ZendeskFullApiOperationArgs<"ListUserBrandAgents">)),
    ShowBrandAgentById: (...args) => callOperation("ShowBrandAgentById", ...(args as ZendeskFullApiOperationArgs<"ShowBrandAgentById">)),
    ShowUserBrandAgentById: (...args) => callOperation("ShowUserBrandAgentById", ...(args as ZendeskFullApiOperationArgs<"ShowUserBrandAgentById">)),
  };
}
