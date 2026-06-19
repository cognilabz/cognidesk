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
export const AmazonConnectFullApiQuickConnectsOperationKeys = [
  "connect:CreateQuickConnect",
  "connect:DeleteQuickConnect",
  "connect:DescribeQuickConnect",
  "connect:ListQuickConnects",
  "connect:UpdateQuickConnectConfig",
  "connect:UpdateQuickConnectName"
] as const;
export type AmazonConnectFullApiQuickConnectsOperationKey = typeof AmazonConnectFullApiQuickConnectsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiQuickConnectsOperationPathParamMap {
  "connect:CreateQuickConnect": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteQuickConnect": { "InstanceId": AmazonConnectFullApiPathParamValue; "QuickConnectId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeQuickConnect": { "InstanceId": AmazonConnectFullApiPathParamValue; "QuickConnectId": AmazonConnectFullApiPathParamValue };
  "connect:ListQuickConnects": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQuickConnectConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "QuickConnectId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateQuickConnectName": { "InstanceId": AmazonConnectFullApiPathParamValue; "QuickConnectId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiQuickConnectsOperationRequestMap {
  "connect:CreateQuickConnect": AmazonConnectFullApiOperationInput<"connect:CreateQuickConnect">;
  "connect:DeleteQuickConnect": AmazonConnectFullApiOperationInput<"connect:DeleteQuickConnect">;
  "connect:DescribeQuickConnect": AmazonConnectFullApiOperationInput<"connect:DescribeQuickConnect">;
  "connect:ListQuickConnects": AmazonConnectFullApiOperationInput<"connect:ListQuickConnects">;
  "connect:UpdateQuickConnectConfig": AmazonConnectFullApiOperationInput<"connect:UpdateQuickConnectConfig">;
  "connect:UpdateQuickConnectName": AmazonConnectFullApiOperationInput<"connect:UpdateQuickConnectName">;
}

export interface AmazonConnectFullApiQuickConnectsGeneratedClient {
  CreateQuickConnect(...args: AmazonConnectFullApiOperationArgs<"connect:CreateQuickConnect">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateQuickConnect"]>;
  DeleteQuickConnect(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteQuickConnect">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteQuickConnect"]>;
  DescribeQuickConnect(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeQuickConnect">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeQuickConnect"]>;
  ListQuickConnects(...args: AmazonConnectFullApiOperationArgs<"connect:ListQuickConnects">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListQuickConnects"]>;
  UpdateQuickConnectConfig(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQuickConnectConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQuickConnectConfig"]>;
  UpdateQuickConnectName(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateQuickConnectName">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateQuickConnectName"]>;
}

export const AmazonConnectFullApiQuickConnectsGeneratedFunctionNames = [
  "CreateQuickConnect",
  "DeleteQuickConnect",
  "DescribeQuickConnect",
  "ListQuickConnects",
  "UpdateQuickConnectConfig",
  "UpdateQuickConnectName"
] as const satisfies readonly (keyof AmazonConnectFullApiQuickConnectsGeneratedClient)[];

export function createAmazonConnectFullApiQuickConnectsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiQuickConnectsGeneratedClient {
  return {
    CreateQuickConnect: (...args) => callOperation("connect:CreateQuickConnect", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateQuickConnect">)),
    DeleteQuickConnect: (...args) => callOperation("connect:DeleteQuickConnect", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteQuickConnect">)),
    DescribeQuickConnect: (...args) => callOperation("connect:DescribeQuickConnect", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeQuickConnect">)),
    ListQuickConnects: (...args) => callOperation("connect:ListQuickConnects", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListQuickConnects">)),
    UpdateQuickConnectConfig: (...args) => callOperation("connect:UpdateQuickConnectConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQuickConnectConfig">)),
    UpdateQuickConnectName: (...args) => callOperation("connect:UpdateQuickConnectName", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateQuickConnectName">)),
  };
}
