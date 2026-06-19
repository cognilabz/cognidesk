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
export const AmazonConnectFullApiSearchHoursOfOperationOverridesOperationKeys = [
  "connect:SearchHoursOfOperationOverrides"
] as const;
export type AmazonConnectFullApiSearchHoursOfOperationOverridesOperationKey = typeof AmazonConnectFullApiSearchHoursOfOperationOverridesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchHoursOfOperationOverridesOperationPathParamMap {
  "connect:SearchHoursOfOperationOverrides": {};
}

export interface AmazonConnectFullApiSearchHoursOfOperationOverridesOperationRequestMap {
  "connect:SearchHoursOfOperationOverrides": AmazonConnectFullApiOperationInput<"connect:SearchHoursOfOperationOverrides">;
}

export interface AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient {
  SearchHoursOfOperationOverrides(...args: AmazonConnectFullApiOperationArgs<"connect:SearchHoursOfOperationOverrides">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchHoursOfOperationOverrides"]>;
}

export const AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedFunctionNames = [
  "SearchHoursOfOperationOverrides"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient)[];

export function createAmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchHoursOfOperationOverridesGeneratedClient {
  return {
    SearchHoursOfOperationOverrides: (...args) => callOperation("connect:SearchHoursOfOperationOverrides", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchHoursOfOperationOverrides">)),
  };
}
