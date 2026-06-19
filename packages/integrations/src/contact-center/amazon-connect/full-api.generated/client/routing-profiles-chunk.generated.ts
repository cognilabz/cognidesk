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
export const AmazonConnectFullApiRoutingProfilesOperationKeys = [
  "connect:AssociateRoutingProfileQueues",
  "connect:CreateRoutingProfile",
  "connect:DeleteRoutingProfile",
  "connect:DescribeRoutingProfile",
  "connect:DisassociateRoutingProfileQueues",
  "connect:ListRoutingProfileManualAssignmentQueues",
  "connect:ListRoutingProfileQueues",
  "connect:UpdateRoutingProfileAgentAvailabilityTimer",
  "connect:UpdateRoutingProfileConcurrency",
  "connect:UpdateRoutingProfileDefaultOutboundQueue",
  "connect:UpdateRoutingProfileName",
  "connect:UpdateRoutingProfileQueues"
] as const;
export type AmazonConnectFullApiRoutingProfilesOperationKey = typeof AmazonConnectFullApiRoutingProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiRoutingProfilesOperationPathParamMap {
  "connect:AssociateRoutingProfileQueues": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:CreateRoutingProfile": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteRoutingProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeRoutingProfile": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:DisassociateRoutingProfileQueues": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:ListRoutingProfileManualAssignmentQueues": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:ListRoutingProfileQueues": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateRoutingProfileAgentAvailabilityTimer": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateRoutingProfileConcurrency": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateRoutingProfileDefaultOutboundQueue": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateRoutingProfileName": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateRoutingProfileQueues": { "InstanceId": AmazonConnectFullApiPathParamValue; "RoutingProfileId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiRoutingProfilesOperationRequestMap {
  "connect:AssociateRoutingProfileQueues": AmazonConnectFullApiOperationInput<"connect:AssociateRoutingProfileQueues">;
  "connect:CreateRoutingProfile": AmazonConnectFullApiOperationInput<"connect:CreateRoutingProfile">;
  "connect:DeleteRoutingProfile": AmazonConnectFullApiOperationInput<"connect:DeleteRoutingProfile">;
  "connect:DescribeRoutingProfile": AmazonConnectFullApiOperationInput<"connect:DescribeRoutingProfile">;
  "connect:DisassociateRoutingProfileQueues": AmazonConnectFullApiOperationInput<"connect:DisassociateRoutingProfileQueues">;
  "connect:ListRoutingProfileManualAssignmentQueues": AmazonConnectFullApiOperationInput<"connect:ListRoutingProfileManualAssignmentQueues">;
  "connect:ListRoutingProfileQueues": AmazonConnectFullApiOperationInput<"connect:ListRoutingProfileQueues">;
  "connect:UpdateRoutingProfileAgentAvailabilityTimer": AmazonConnectFullApiOperationInput<"connect:UpdateRoutingProfileAgentAvailabilityTimer">;
  "connect:UpdateRoutingProfileConcurrency": AmazonConnectFullApiOperationInput<"connect:UpdateRoutingProfileConcurrency">;
  "connect:UpdateRoutingProfileDefaultOutboundQueue": AmazonConnectFullApiOperationInput<"connect:UpdateRoutingProfileDefaultOutboundQueue">;
  "connect:UpdateRoutingProfileName": AmazonConnectFullApiOperationInput<"connect:UpdateRoutingProfileName">;
  "connect:UpdateRoutingProfileQueues": AmazonConnectFullApiOperationInput<"connect:UpdateRoutingProfileQueues">;
}

export interface AmazonConnectFullApiRoutingProfilesGeneratedClient {
  AssociateRoutingProfileQueues(...args: AmazonConnectFullApiOperationArgs<"connect:AssociateRoutingProfileQueues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:AssociateRoutingProfileQueues"]>;
  CreateRoutingProfile(...args: AmazonConnectFullApiOperationArgs<"connect:CreateRoutingProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateRoutingProfile"]>;
  DeleteRoutingProfile(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteRoutingProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteRoutingProfile"]>;
  DescribeRoutingProfile(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeRoutingProfile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeRoutingProfile"]>;
  DisassociateRoutingProfileQueues(...args: AmazonConnectFullApiOperationArgs<"connect:DisassociateRoutingProfileQueues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DisassociateRoutingProfileQueues"]>;
  ListRoutingProfileManualAssignmentQueues(...args: AmazonConnectFullApiOperationArgs<"connect:ListRoutingProfileManualAssignmentQueues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListRoutingProfileManualAssignmentQueues"]>;
  ListRoutingProfileQueues(...args: AmazonConnectFullApiOperationArgs<"connect:ListRoutingProfileQueues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListRoutingProfileQueues"]>;
  UpdateRoutingProfileAgentAvailabilityTimer(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileAgentAvailabilityTimer">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateRoutingProfileAgentAvailabilityTimer"]>;
  UpdateRoutingProfileConcurrency(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileConcurrency">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateRoutingProfileConcurrency"]>;
  UpdateRoutingProfileDefaultOutboundQueue(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileDefaultOutboundQueue">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateRoutingProfileDefaultOutboundQueue"]>;
  UpdateRoutingProfileName(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileName">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateRoutingProfileName"]>;
  UpdateRoutingProfileQueues(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileQueues">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateRoutingProfileQueues"]>;
}

export const AmazonConnectFullApiRoutingProfilesGeneratedFunctionNames = [
  "AssociateRoutingProfileQueues",
  "CreateRoutingProfile",
  "DeleteRoutingProfile",
  "DescribeRoutingProfile",
  "DisassociateRoutingProfileQueues",
  "ListRoutingProfileManualAssignmentQueues",
  "ListRoutingProfileQueues",
  "UpdateRoutingProfileAgentAvailabilityTimer",
  "UpdateRoutingProfileConcurrency",
  "UpdateRoutingProfileDefaultOutboundQueue",
  "UpdateRoutingProfileName",
  "UpdateRoutingProfileQueues"
] as const satisfies readonly (keyof AmazonConnectFullApiRoutingProfilesGeneratedClient)[];

export function createAmazonConnectFullApiRoutingProfilesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiRoutingProfilesGeneratedClient {
  return {
    AssociateRoutingProfileQueues: (...args) => callOperation("connect:AssociateRoutingProfileQueues", ...(args as AmazonConnectFullApiOperationArgs<"connect:AssociateRoutingProfileQueues">)),
    CreateRoutingProfile: (...args) => callOperation("connect:CreateRoutingProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateRoutingProfile">)),
    DeleteRoutingProfile: (...args) => callOperation("connect:DeleteRoutingProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteRoutingProfile">)),
    DescribeRoutingProfile: (...args) => callOperation("connect:DescribeRoutingProfile", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeRoutingProfile">)),
    DisassociateRoutingProfileQueues: (...args) => callOperation("connect:DisassociateRoutingProfileQueues", ...(args as AmazonConnectFullApiOperationArgs<"connect:DisassociateRoutingProfileQueues">)),
    ListRoutingProfileManualAssignmentQueues: (...args) => callOperation("connect:ListRoutingProfileManualAssignmentQueues", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListRoutingProfileManualAssignmentQueues">)),
    ListRoutingProfileQueues: (...args) => callOperation("connect:ListRoutingProfileQueues", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListRoutingProfileQueues">)),
    UpdateRoutingProfileAgentAvailabilityTimer: (...args) => callOperation("connect:UpdateRoutingProfileAgentAvailabilityTimer", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileAgentAvailabilityTimer">)),
    UpdateRoutingProfileConcurrency: (...args) => callOperation("connect:UpdateRoutingProfileConcurrency", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileConcurrency">)),
    UpdateRoutingProfileDefaultOutboundQueue: (...args) => callOperation("connect:UpdateRoutingProfileDefaultOutboundQueue", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileDefaultOutboundQueue">)),
    UpdateRoutingProfileName: (...args) => callOperation("connect:UpdateRoutingProfileName", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileName">)),
    UpdateRoutingProfileQueues: (...args) => callOperation("connect:UpdateRoutingProfileQueues", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateRoutingProfileQueues">)),
  };
}
