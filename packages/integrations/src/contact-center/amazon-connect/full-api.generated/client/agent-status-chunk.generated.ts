// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiAgentStatusOperationKeys = [
  "connect:CreateAgentStatus",
  "connect:DescribeAgentStatus",
  "connect:ListAgentStatuses",
  "connect:UpdateAgentStatus"
] as const;
export type AmazonConnectFullApiAgentStatusOperationKey = typeof AmazonConnectFullApiAgentStatusOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAgentStatusOperationPathParamMap {
  "connect:CreateAgentStatus": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeAgentStatus": { "InstanceId": AmazonConnectFullApiPathParamValue; "AgentStatusId": AmazonConnectFullApiPathParamValue };
  "connect:ListAgentStatuses": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateAgentStatus": { "InstanceId": AmazonConnectFullApiPathParamValue; "AgentStatusId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAgentStatusOperationRequestMap {
  "connect:CreateAgentStatus": AmazonConnectFullApiOperationInput<"connect:CreateAgentStatus">;
  "connect:DescribeAgentStatus": AmazonConnectFullApiOperationInput<"connect:DescribeAgentStatus">;
  "connect:ListAgentStatuses": AmazonConnectFullApiOperationInput<"connect:ListAgentStatuses">;
  "connect:UpdateAgentStatus": AmazonConnectFullApiOperationInput<"connect:UpdateAgentStatus">;
}

export interface AmazonConnectFullApiAgentStatusGeneratedClient {
  CreateAgentStatus(...args: AmazonConnectFullApiOperationArgs<"connect:CreateAgentStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateAgentStatus"]>;
  DescribeAgentStatus(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeAgentStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeAgentStatus"]>;
  ListAgentStatuses(...args: AmazonConnectFullApiOperationArgs<"connect:ListAgentStatuses">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListAgentStatuses"]>;
  UpdateAgentStatus(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateAgentStatus">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateAgentStatus"]>;
}

export const AmazonConnectFullApiAgentStatusGeneratedFunctionNames = [
  "CreateAgentStatus",
  "DescribeAgentStatus",
  "ListAgentStatuses",
  "UpdateAgentStatus"
] as const satisfies readonly (keyof AmazonConnectFullApiAgentStatusGeneratedClient)[];

export function createAmazonConnectFullApiAgentStatusGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAgentStatusGeneratedClient {
  return {
    CreateAgentStatus: (...args) => callOperation("connect:CreateAgentStatus", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateAgentStatus">)),
    DescribeAgentStatus: (...args) => callOperation("connect:DescribeAgentStatus", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeAgentStatus">)),
    ListAgentStatuses: (...args) => callOperation("connect:ListAgentStatuses", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListAgentStatuses">)),
    UpdateAgentStatus: (...args) => callOperation("connect:UpdateAgentStatus", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateAgentStatus">)),
  };
}
