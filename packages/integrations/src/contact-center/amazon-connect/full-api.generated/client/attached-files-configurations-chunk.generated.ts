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
export const AmazonConnectFullApiAttachedFilesConfigurationsOperationKeys = [
  "connect:DescribeAttachedFilesConfiguration",
  "connect:ListAttachedFilesConfigurations",
  "connect:UpdateAttachedFilesConfiguration"
] as const;
export type AmazonConnectFullApiAttachedFilesConfigurationsOperationKey = typeof AmazonConnectFullApiAttachedFilesConfigurationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAttachedFilesConfigurationsOperationPathParamMap {
  "connect:DescribeAttachedFilesConfiguration": { "InstanceId": AmazonConnectFullApiPathParamValue; "AttachmentScope": AmazonConnectFullApiPathParamValue };
  "connect:ListAttachedFilesConfigurations": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateAttachedFilesConfiguration": { "InstanceId": AmazonConnectFullApiPathParamValue; "AttachmentScope": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAttachedFilesConfigurationsOperationRequestMap {
  "connect:DescribeAttachedFilesConfiguration": AmazonConnectFullApiOperationInput<"connect:DescribeAttachedFilesConfiguration">;
  "connect:ListAttachedFilesConfigurations": AmazonConnectFullApiOperationInput<"connect:ListAttachedFilesConfigurations">;
  "connect:UpdateAttachedFilesConfiguration": AmazonConnectFullApiOperationInput<"connect:UpdateAttachedFilesConfiguration">;
}

export interface AmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient {
  DescribeAttachedFilesConfiguration(...args: AmazonConnectFullApiOperationArgs<"connect:DescribeAttachedFilesConfiguration">): Promise<AmazonConnectFullApiOperationResponseMap["connect:DescribeAttachedFilesConfiguration"]>;
  ListAttachedFilesConfigurations(...args: AmazonConnectFullApiOperationArgs<"connect:ListAttachedFilesConfigurations">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListAttachedFilesConfigurations"]>;
  UpdateAttachedFilesConfiguration(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateAttachedFilesConfiguration">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateAttachedFilesConfiguration"]>;
}

export const AmazonConnectFullApiAttachedFilesConfigurationsGeneratedFunctionNames = [
  "DescribeAttachedFilesConfiguration",
  "ListAttachedFilesConfigurations",
  "UpdateAttachedFilesConfiguration"
] as const satisfies readonly (keyof AmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient)[];

export function createAmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAttachedFilesConfigurationsGeneratedClient {
  return {
    DescribeAttachedFilesConfiguration: (...args) => callOperation("connect:DescribeAttachedFilesConfiguration", ...(args as AmazonConnectFullApiOperationArgs<"connect:DescribeAttachedFilesConfiguration">)),
    ListAttachedFilesConfigurations: (...args) => callOperation("connect:ListAttachedFilesConfigurations", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListAttachedFilesConfigurations">)),
    UpdateAttachedFilesConfiguration: (...args) => callOperation("connect:UpdateAttachedFilesConfiguration", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateAttachedFilesConfiguration">)),
  };
}
