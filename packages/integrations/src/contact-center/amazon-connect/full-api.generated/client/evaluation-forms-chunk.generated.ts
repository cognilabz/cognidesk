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
export const AmazonConnectFullApiEvaluationFormsOperationKeys = [
  "connect:ActivateEvaluationForm",
  "connect:CreateEvaluationForm",
  "connect:DeactivateEvaluationForm",
  "connect:DeleteEvaluationForm",
  "connect:DescribeEvaluationForm",
  "connect:ListEvaluationFormVersions",
  "connect:ListEvaluationForms",
  "connect:UpdateEvaluationForm"
] as const;
export type AmazonConnectFullApiEvaluationFormsOperationKey = typeof AmazonConnectFullApiEvaluationFormsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiEvaluationFormsOperationPathParamMap {
  "connect:ActivateEvaluationForm": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationFormId": AmazonConnectFullApiPathParamValue };
  "connect:CreateEvaluationForm": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:DeactivateEvaluationForm": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationFormId": AmazonConnectFullApiPathParamValue };
  "connect:DeleteEvaluationForm": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationFormId": AmazonConnectFullApiPathParamValue };
  "connect:DescribeEvaluationForm": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationFormId": AmazonConnectFullApiPathParamValue };
  "connect:ListEvaluationFormVersions": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationFormId": AmazonConnectFullApiPathParamValue };
  "connect:ListEvaluationForms": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateEvaluationForm": { "InstanceId": AmazonConnectFullApiPathParamValue; "EvaluationFormId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiEvaluationFormsOperationRequestMap {
  "connect:ActivateEvaluationForm": AmazonConnectFullApiOperationInput<"connect:ActivateEvaluationForm">;
  "connect:CreateEvaluationForm": AmazonConnectFullApiOperationInput<"connect:CreateEvaluationForm">;
  "connect:DeactivateEvaluationForm": AmazonConnectFullApiOperationInput<"connect:DeactivateEvaluationForm">;
  "connect:DeleteEvaluationForm": AmazonConnectFullApiOperationInput<"connect:DeleteEvaluationForm">;
  "connect:DescribeEvaluationForm": AmazonConnectFullApiOperationInput<"connect:DescribeEvaluationForm">;
  "connect:ListEvaluationFormVersions": AmazonConnectFullApiOperationInput<"connect:ListEvaluationFormVersions">;
  "connect:ListEvaluationForms": AmazonConnectFullApiOperationInput<"connect:ListEvaluationForms">;
  "connect:UpdateEvaluationForm": AmazonConnectFullApiOperationInput<"connect:UpdateEvaluationForm">;
}

export interface AmazonConnectFullApiEvaluationFormsGeneratedClient {
  ActivateEvaluationForm(...args: AmazonConnectFullApiOperationArgs<"connect:ActivateEvaluationForm">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ActivateEvaluationForm"]>;
  CreateEvaluationForm(...args: AmazonConnectFullApiOperationArgs<"connect:CreateEvaluationForm">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateEvaluationForm"]>;
  DeactivateEvaluationForm(...args: AmazonConnectFullApiOperationArgs<"connect:DeactivateEvaluationForm">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeactivateEvaluationForm"]>;
  DeleteEvaluationForm(...args: AmazonConnectFullApiOperationArgs<"connect:DeleteEvaluationForm">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DeleteEvaluationForm"]>;
  DescribeEvaluationForm(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeEvaluationForm">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeEvaluationForm"]>;
  ListEvaluationFormVersions(...args: AmazonConnectFullApiOperationArgs<"connect:ListEvaluationFormVersions">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListEvaluationFormVersions"]>;
  ListEvaluationForms(...args: AmazonConnectFullApiOperationArgs<"connect:ListEvaluationForms">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListEvaluationForms"]>;
  UpdateEvaluationForm(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateEvaluationForm">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateEvaluationForm"]>;
}

export const AmazonConnectFullApiEvaluationFormsGeneratedFunctionNames = [
  "ActivateEvaluationForm",
  "CreateEvaluationForm",
  "DeactivateEvaluationForm",
  "DeleteEvaluationForm",
  "DescribeEvaluationForm",
  "ListEvaluationFormVersions",
  "ListEvaluationForms",
  "UpdateEvaluationForm"
] as const satisfies readonly (keyof AmazonConnectFullApiEvaluationFormsGeneratedClient)[];

export function createAmazonConnectFullApiEvaluationFormsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiEvaluationFormsGeneratedClient {
  return {
    ActivateEvaluationForm: (...args) => callOperation("connect:ActivateEvaluationForm", ...(args as AmazonConnectFullApiOperationArgs<"connect:ActivateEvaluationForm">)),
    CreateEvaluationForm: (...args) => callOperation("connect:CreateEvaluationForm", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateEvaluationForm">)),
    DeactivateEvaluationForm: (...args) => callOperation("connect:DeactivateEvaluationForm", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeactivateEvaluationForm">)),
    DeleteEvaluationForm: (...args) => callOperation("connect:DeleteEvaluationForm", ...(args as AmazonConnectFullApiOperationArgs<"connect:DeleteEvaluationForm">)),
    DescribeEvaluationForm: (...args) => callOperation("connect:DescribeEvaluationForm", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeEvaluationForm">)),
    ListEvaluationFormVersions: (...args) => callOperation("connect:ListEvaluationFormVersions", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListEvaluationFormVersions">)),
    ListEvaluationForms: (...args) => callOperation("connect:ListEvaluationForms", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListEvaluationForms">)),
    UpdateEvaluationForm: (...args) => callOperation("connect:UpdateEvaluationForm", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateEvaluationForm">)),
  };
}
