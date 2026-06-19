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
export const AmazonConnectFullApiTestCasesOperationKeys = [
  "connect:CreateTestCase",
  "connect:DeleteTestCase",
  "connect:DescribeTestCase",
  "connect:GetTestCaseExecutionSummary",
  "connect:ListTestCaseExecutionRecords",
  "connect:StartTestCaseExecution",
  "connect:StopTestCaseExecution",
  "connect:UpdateTestCase"
] as const;
export type AmazonConnectFullApiTestCasesOperationKey = typeof AmazonConnectFullApiTestCasesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTestCasesOperationPathParamMap {
  "connect:CreateTestCase": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteTestCase": { "InstanceId": AmazonConnectFullApiPathParamValue; "TestCaseId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeTestCase": { "InstanceId": AmazonConnectFullApiPathParamValue; "TestCaseId": AmazonConnectFullApiPathParamValue };
  "connect:GetTestCaseExecutionSummary": { "InstanceId": AmazonConnectFullApiPathParamValue; "TestCaseId": AmazonConnectFullApiPathParamValue; "TestCaseExecutionId": AmazonConnectFullApiPathParamValue };
  "connect:ListTestCaseExecutionRecords": { "InstanceId": AmazonConnectFullApiPathParamValue; "TestCaseId": AmazonConnectFullApiPathParamValue; "TestCaseExecutionId": AmazonConnectFullApiPathParamValue };
  "connect:StartTestCaseExecution": { "InstanceId": AmazonConnectFullApiPathParamValue; "TestCaseId": AmazonConnectFullApiPathParamValue };
  "connect:StopTestCaseExecution": { "InstanceId": AmazonConnectFullApiPathParamValue; "TestCaseId": AmazonConnectFullApiPathParamValue; "TestCaseExecutionId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateTestCase": { "InstanceId": AmazonConnectFullApiPathParamValue; "TestCaseId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiTestCasesOperationRequestMap {
  "connect:CreateTestCase": AmazonConnectFullApiOperationInput<"connect:CreateTestCase">;
  "connect:DeleteTestCase": AmazonConnectFullApiOperationInput<"connect:DeleteTestCase">;
  "connect:DescribeTestCase": AmazonConnectFullApiOperationInput<"connect:DescribeTestCase">;
  "connect:GetTestCaseExecutionSummary": AmazonConnectFullApiOperationInput<"connect:GetTestCaseExecutionSummary">;
  "connect:ListTestCaseExecutionRecords": AmazonConnectFullApiOperationInput<"connect:ListTestCaseExecutionRecords">;
  "connect:StartTestCaseExecution": AmazonConnectFullApiOperationInput<"connect:StartTestCaseExecution">;
  "connect:StopTestCaseExecution": AmazonConnectFullApiOperationInput<"connect:StopTestCaseExecution">;
  "connect:UpdateTestCase": AmazonConnectFullApiOperationInput<"connect:UpdateTestCase">;
}

export interface AmazonConnectFullApiTestCasesGeneratedClient {
  CreateTestCase(...args: AmazonConnectFullApiOperationArgs<"connect:CreateTestCase">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateTestCase"]>;
  DeleteTestCase(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteTestCase">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteTestCase"]>;
  DescribeTestCase(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeTestCase">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeTestCase"]>;
  GetTestCaseExecutionSummary(...args: AmazonConnectFullApiOperationArgs<"connect:GetTestCaseExecutionSummary">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetTestCaseExecutionSummary"]>;
  ListTestCaseExecutionRecords(...args: AmazonConnectFullApiOperationArgs<"connect:ListTestCaseExecutionRecords">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListTestCaseExecutionRecords"]>;
  StartTestCaseExecution(...args: AmazonConnectFullApiOperationArgs<"connect:StartTestCaseExecution">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartTestCaseExecution"]>;
  StopTestCaseExecution(...args: AmazonConnectFullApiOperationArgs<"connect:StopTestCaseExecution">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StopTestCaseExecution"]>;
  UpdateTestCase(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateTestCase">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateTestCase"]>;
}

export const AmazonConnectFullApiTestCasesGeneratedFunctionNames = [
  "CreateTestCase",
  "DeleteTestCase",
  "DescribeTestCase",
  "GetTestCaseExecutionSummary",
  "ListTestCaseExecutionRecords",
  "StartTestCaseExecution",
  "StopTestCaseExecution",
  "UpdateTestCase"
] as const satisfies readonly (keyof AmazonConnectFullApiTestCasesGeneratedClient)[];

export function createAmazonConnectFullApiTestCasesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTestCasesGeneratedClient {
  return {
    CreateTestCase: (...args) => callOperation("connect:CreateTestCase", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateTestCase">)),
    DeleteTestCase: (...args) => callOperation("connect:DeleteTestCase", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteTestCase">)),
    DescribeTestCase: (...args) => callOperation("connect:DescribeTestCase", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeTestCase">)),
    GetTestCaseExecutionSummary: (...args) => callOperation("connect:GetTestCaseExecutionSummary", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetTestCaseExecutionSummary">)),
    ListTestCaseExecutionRecords: (...args) => callOperation("connect:ListTestCaseExecutionRecords", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListTestCaseExecutionRecords">)),
    StartTestCaseExecution: (...args) => callOperation("connect:StartTestCaseExecution", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartTestCaseExecution">)),
    StopTestCaseExecution: (...args) => callOperation("connect:StopTestCaseExecution", ...(args as AmazonConnectFullApiOperationArgs<"connect:StopTestCaseExecution">)),
    UpdateTestCase: (...args) => callOperation("connect:UpdateTestCase", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateTestCase">)),
  };
}
