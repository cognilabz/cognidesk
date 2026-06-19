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
export const AmazonConnectFullApiPromptsOperationKeys = [
  "connect:CreatePrompt",
  "connect:DeletePrompt",
  "connect:DescribePrompt",
  "connect:GetPromptFile",
  "connect:UpdatePrompt"
] as const;
export type AmazonConnectFullApiPromptsOperationKey = typeof AmazonConnectFullApiPromptsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiPromptsOperationPathParamMap {
  "connect:CreatePrompt": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeletePrompt": { "InstanceId": AmazonConnectFullApiPathParamValue; "PromptId": AmazonConnectFullApiPathParamValue };
  "connect:DescribePrompt": { "InstanceId": AmazonConnectFullApiPathParamValue; "PromptId": AmazonConnectFullApiPathParamValue };
  "connect:GetPromptFile": { "InstanceId": AmazonConnectFullApiPathParamValue; "PromptId": AmazonConnectFullApiPathParamValue };
  "connect:UpdatePrompt": { "InstanceId": AmazonConnectFullApiPathParamValue; "PromptId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiPromptsOperationRequestMap {
  "connect:CreatePrompt": AmazonConnectFullApiOperationInput<"connect:CreatePrompt">;
  "connect:DeletePrompt": AmazonConnectFullApiOperationInput<"connect:DeletePrompt">;
  "connect:DescribePrompt": AmazonConnectFullApiOperationInput<"connect:DescribePrompt">;
  "connect:GetPromptFile": AmazonConnectFullApiOperationInput<"connect:GetPromptFile">;
  "connect:UpdatePrompt": AmazonConnectFullApiOperationInput<"connect:UpdatePrompt">;
}

export interface AmazonConnectFullApiPromptsGeneratedClient {
  CreatePrompt(...args: AmazonConnectFullApiOperationArgs<"connect:CreatePrompt">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreatePrompt"]>;
  DeletePrompt(...args: AmazonConnectFullApiOperationArgs<"connect:DeletePrompt">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeletePrompt"]>;
  DescribePrompt(...args: AmazonConnectFullApiOperationArgs<"connect:DescribePrompt">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribePrompt"]>;
  GetPromptFile(...args: AmazonConnectFullApiOperationArgs<"connect:GetPromptFile">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetPromptFile"]>;
  UpdatePrompt(...args: AmazonConnectFullApiOperationArgs<"connect:UpdatePrompt">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdatePrompt"]>;
}

export const AmazonConnectFullApiPromptsGeneratedFunctionNames = [
  "CreatePrompt",
  "DeletePrompt",
  "DescribePrompt",
  "GetPromptFile",
  "UpdatePrompt"
] as const satisfies readonly (keyof AmazonConnectFullApiPromptsGeneratedClient)[];

export function createAmazonConnectFullApiPromptsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiPromptsGeneratedClient {
  return {
    CreatePrompt: (...args) => callOperation("connect:CreatePrompt", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreatePrompt">)),
    DeletePrompt: (...args) => callOperation("connect:DeletePrompt", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeletePrompt">)),
    DescribePrompt: (...args) => callOperation("connect:DescribePrompt", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribePrompt">)),
    GetPromptFile: (...args) => callOperation("connect:GetPromptFile", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetPromptFile">)),
    UpdatePrompt: (...args) => callOperation("connect:UpdatePrompt", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdatePrompt">)),
  };
}
