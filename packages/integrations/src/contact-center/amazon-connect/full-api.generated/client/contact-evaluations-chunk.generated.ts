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
export const AmazonConnectFullApiContactEvaluationsOperationKeys = [
  "connect:DeleteContactEvaluation",
  "connect:DescribeContactEvaluation",
  "connect:ListContactEvaluations",
  "connect:StartContactEvaluation",
  "connect:SubmitContactEvaluation",
  "connect:UpdateContactEvaluation"
] as const;
export type AmazonConnectFullApiContactEvaluationsOperationKey = typeof AmazonConnectFullApiContactEvaluationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiContactEvaluationsOperationPathParamMap {
  "connect:DeleteContactEvaluation": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeContactEvaluation": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationId": AmazonConnectFullApiPathParamValue };
  "connect:ListContactEvaluations": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:StartContactEvaluation": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:SubmitContactEvaluation": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactEvaluation": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiContactEvaluationsOperationRequestMap {
  "connect:DeleteContactEvaluation": AmazonConnectFullApiOperationInput<"connect:DeleteContactEvaluation">;
  "connect:DescribeContactEvaluation": AmazonConnectFullApiOperationInput<"connect:DescribeContactEvaluation">;
  "connect:ListContactEvaluations": AmazonConnectFullApiOperationInput<"connect:ListContactEvaluations">;
  "connect:StartContactEvaluation": AmazonConnectFullApiOperationInput<"connect:StartContactEvaluation">;
  "connect:SubmitContactEvaluation": AmazonConnectFullApiOperationInput<"connect:SubmitContactEvaluation">;
  "connect:UpdateContactEvaluation": AmazonConnectFullApiOperationInput<"connect:UpdateContactEvaluation">;
}

export interface AmazonConnectFullApiContactEvaluationsGeneratedClient {
  DeleteContactEvaluation(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteContactEvaluation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteContactEvaluation"]>;
  DescribeContactEvaluation(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeContactEvaluation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeContactEvaluation"]>;
  ListContactEvaluations(...args: AmazonConnectFullApiOperationArgs<"connect:ListContactEvaluations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListContactEvaluations"]>;
  StartContactEvaluation(...args: AmazonConnectFullApiOperationArgs<"connect:StartContactEvaluation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartContactEvaluation"]>;
  SubmitContactEvaluation(...args: AmazonConnectFullApiOperationArgs<"connect:SubmitContactEvaluation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SubmitContactEvaluation"]>;
  UpdateContactEvaluation(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactEvaluation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactEvaluation"]>;
}

export const AmazonConnectFullApiContactEvaluationsGeneratedFunctionNames = [
  "DeleteContactEvaluation",
  "DescribeContactEvaluation",
  "ListContactEvaluations",
  "StartContactEvaluation",
  "SubmitContactEvaluation",
  "UpdateContactEvaluation"
] as const satisfies readonly (keyof AmazonConnectFullApiContactEvaluationsGeneratedClient)[];

export function createAmazonConnectFullApiContactEvaluationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiContactEvaluationsGeneratedClient {
  return {
    DeleteContactEvaluation: (...args) => callOperation("connect:DeleteContactEvaluation", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteContactEvaluation">)),
    DescribeContactEvaluation: (...args) => callOperation("connect:DescribeContactEvaluation", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeContactEvaluation">)),
    ListContactEvaluations: (...args) => callOperation("connect:ListContactEvaluations", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListContactEvaluations">)),
    StartContactEvaluation: (...args) => callOperation("connect:StartContactEvaluation", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartContactEvaluation">)),
    SubmitContactEvaluation: (...args) => callOperation("connect:SubmitContactEvaluation", ...(args as AmazonConnectFullApiOperationArgs<"connect:SubmitContactEvaluation">)),
    UpdateContactEvaluation: (...args) => callOperation("connect:UpdateContactEvaluation", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactEvaluation">)),
  };
}
