// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiPhoneCallsOperationKeys = [
  "call:POST /tenants/{tenantId}/calls",
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes",
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}",
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}",
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls",
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}"
] as const;
export type EightByEightContactCenterApiPhoneCallsOperationKey = typeof EightByEightContactCenterApiPhoneCallsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiPhoneCallsOperationPathParamMap {
  "call:POST /tenants/{tenantId}/calls": { "tenantId": EightByEightContactCenterApiPathParamValue };
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes": { "tenantId": EightByEightContactCenterApiPathParamValue; "interactionId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue };
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}": { "tenantId": EightByEightContactCenterApiPathParamValue; "interactionId": EightByEightContactCenterApiPathParamValue };
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}": { "tenantId": EightByEightContactCenterApiPathParamValue; "interactionId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue };
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls": { "tenantId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue };
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}": { "tenantId": EightByEightContactCenterApiPathParamValue; "agentId": EightByEightContactCenterApiPathParamValue; "lineNo": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiPhoneCallsOperationRequestMap {
  "call:POST /tenants/{tenantId}/calls": EightByEightContactCenterApiOperationInput<"call:POST /tenants/{tenantId}/calls">;
  "call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes": EightByEightContactCenterApiOperationInput<"call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes">;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}": EightByEightContactCenterApiOperationInput<"call:DELETE /tenants/{tenantId}/calls/{interactionId}">;
  "call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}": EightByEightContactCenterApiOperationInput<"call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}">;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls": EightByEightContactCenterApiOperationInput<"call:DELETE /tenants/{tenantId}/agents/{agentId}/calls">;
  "call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}": EightByEightContactCenterApiOperationInput<"call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}">;
}

export interface EightByEightContactCenterApiPhoneCallsGeneratedClient {
  PlacePhoneCall(...args: EightByEightContactCenterApiOperationArgs<"call:POST /tenants/{tenantId}/calls">): Promise<EightByEightContactCenterApiOperationResponseMap["call:POST /tenants/{tenantId}/calls"]>;
  AddTransactionCodes(...args: EightByEightContactCenterApiOperationArgs<"call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes">): Promise<EightByEightContactCenterApiOperationResponseMap["call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes"]>;
  DeletePhoneInteraction(...args: EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/calls/{interactionId}">): Promise<EightByEightContactCenterApiOperationResponseMap["call:DELETE /tenants/{tenantId}/calls/{interactionId}"]>;
  HangupAgentHandlingInteraction(...args: EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}">): Promise<EightByEightContactCenterApiOperationResponseMap["call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}"]>;
  HangupAgentLines(...args: EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/agents/{agentId}/calls">): Promise<EightByEightContactCenterApiOperationResponseMap["call:DELETE /tenants/{tenantId}/agents/{agentId}/calls"]>;
  HangupAgentLine(...args: EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}">): Promise<EightByEightContactCenterApiOperationResponseMap["call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}"]>;
}

export const EightByEightContactCenterApiPhoneCallsGeneratedFunctionNames = [
  "PlacePhoneCall",
  "AddTransactionCodes",
  "DeletePhoneInteraction",
  "HangupAgentHandlingInteraction",
  "HangupAgentLines",
  "HangupAgentLine"
] as const satisfies readonly (keyof EightByEightContactCenterApiPhoneCallsGeneratedClient)[];

export function createEightByEightContactCenterApiPhoneCallsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiPhoneCallsGeneratedClient {
  return {
    PlacePhoneCall: (...args) => callOperation("call:POST /tenants/{tenantId}/calls", ...(args as EightByEightContactCenterApiOperationArgs<"call:POST /tenants/{tenantId}/calls">)),
    AddTransactionCodes: (...args) => callOperation("call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes", ...(args as EightByEightContactCenterApiOperationArgs<"call:PUT /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}/transaction-codes">)),
    DeletePhoneInteraction: (...args) => callOperation("call:DELETE /tenants/{tenantId}/calls/{interactionId}", ...(args as EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/calls/{interactionId}">)),
    HangupAgentHandlingInteraction: (...args) => callOperation("call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}", ...(args as EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/calls/{interactionId}/agent/{agentId}">)),
    HangupAgentLines: (...args) => callOperation("call:DELETE /tenants/{tenantId}/agents/{agentId}/calls", ...(args as EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/agents/{agentId}/calls">)),
    HangupAgentLine: (...args) => callOperation("call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}", ...(args as EightByEightContactCenterApiOperationArgs<"call:DELETE /tenants/{tenantId}/agents/{agentId}/calls/line/{lineNo}">)),
  };
}
