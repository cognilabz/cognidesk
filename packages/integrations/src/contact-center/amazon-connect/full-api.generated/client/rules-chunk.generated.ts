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
export const AmazonConnectFullApiRulesOperationKeys = [
  "connect:CreateRule",
  "connect:DeleteRule",
  "connect:DescribeRule",
  "connect:ListRules",
  "connect:UpdateRule"
] as const;
export type AmazonConnectFullApiRulesOperationKey = typeof AmazonConnectFullApiRulesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiRulesOperationPathParamMap {
  "connect:CreateRule": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteRule": { "InstanceId": AmazonConnectFullApiPathParamValue; "RuleId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeRule": { "InstanceId": AmazonConnectFullApiPathParamValue; "RuleId": AmazonConnectFullApiPathParamValue };
  "connect:ListRules": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateRule": { "InstanceId": AmazonConnectFullApiPathParamValue; "RuleId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiRulesOperationRequestMap {
  "connect:CreateRule": AmazonConnectFullApiOperationInput<"connect:CreateRule">;
  "connect:DeleteRule": AmazonConnectFullApiOperationInput<"connect:DeleteRule">;
  "connect:DescribeRule": AmazonConnectFullApiOperationInput<"connect:DescribeRule">;
  "connect:ListRules": AmazonConnectFullApiOperationInput<"connect:ListRules">;
  "connect:UpdateRule": AmazonConnectFullApiOperationInput<"connect:UpdateRule">;
}

export interface AmazonConnectFullApiRulesGeneratedClient {
  CreateRule(...args: AmazonConnectFullApiOperationArgs<"connect:CreateRule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateRule"]>;
  DeleteRule(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteRule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteRule"]>;
  DescribeRule(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeRule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeRule"]>;
  ListRules(...args: AmazonConnectFullApiOperationArgs<"connect:ListRules">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListRules"]>;
  UpdateRule(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateRule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateRule"]>;
}

export const AmazonConnectFullApiRulesGeneratedFunctionNames = [
  "CreateRule",
  "DeleteRule",
  "DescribeRule",
  "ListRules",
  "UpdateRule"
] as const satisfies readonly (keyof AmazonConnectFullApiRulesGeneratedClient)[];

export function createAmazonConnectFullApiRulesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiRulesGeneratedClient {
  return {
    CreateRule: (...args) => callOperation("connect:CreateRule", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateRule">)),
    DeleteRule: (...args) => callOperation("connect:DeleteRule", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteRule">)),
    DescribeRule: (...args) => callOperation("connect:DescribeRule", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeRule">)),
    ListRules: (...args) => callOperation("connect:ListRules", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListRules">)),
    UpdateRule: (...args) => callOperation("connect:UpdateRule", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateRule">)),
  };
}
