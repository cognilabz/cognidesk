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
export const AmazonConnectFullApiPhoneNumbersSummaryOperationKeys = [
  "connect:ListPhoneNumbers"
] as const;
export type AmazonConnectFullApiPhoneNumbersSummaryOperationKey = typeof AmazonConnectFullApiPhoneNumbersSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiPhoneNumbersSummaryOperationPathParamMap {
  "connect:ListPhoneNumbers": { "InstanceId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiPhoneNumbersSummaryOperationRequestMap {
  "connect:ListPhoneNumbers": AmazonConnectFullApiOperationInput<"connect:ListPhoneNumbers">;
}

export interface AmazonConnectFullApiPhoneNumbersSummaryGeneratedClient {
  ListPhoneNumbers(...args: AmazonConnectFullApiOperationArgs<"connect:ListPhoneNumbers">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListPhoneNumbers"]>;
}

export const AmazonConnectFullApiPhoneNumbersSummaryGeneratedFunctionNames = [
  "ListPhoneNumbers"
] as const satisfies readonly (keyof AmazonConnectFullApiPhoneNumbersSummaryGeneratedClient)[];

export function createAmazonConnectFullApiPhoneNumbersSummaryGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiPhoneNumbersSummaryGeneratedClient {
  return {
    ListPhoneNumbers: (...args) => callOperation("connect:ListPhoneNumbers", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListPhoneNumbers">)),
  };
}
