// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiSellingpartnersOperationKeys = [
  "replenishment-2022-11-07:getSellingPartnerMetrics"
] as const;
export type AmazonFullApiSellingpartnersOperationKey = typeof AmazonFullApiSellingpartnersOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiSellingpartnersOperationPathParamMap {
  "replenishment-2022-11-07:getSellingPartnerMetrics": {};
}

export interface AmazonFullApiSellingpartnersOperationRequestMap {
  "replenishment-2022-11-07:getSellingPartnerMetrics": AmazonFullApiOperationInput<"replenishment-2022-11-07:getSellingPartnerMetrics">;
}

export interface AmazonFullApiSellingpartnersGeneratedClient {
  GetSellingPartnerMetrics(...args: AmazonFullApiOperationArgs<"replenishment-2022-11-07:getSellingPartnerMetrics">): Promise<AmazonFullApiOperationResponseMap["replenishment-2022-11-07:getSellingPartnerMetrics"]>;
}

export const AmazonFullApiSellingpartnersGeneratedFunctionNames = [
  "GetSellingPartnerMetrics"
] as const satisfies readonly (keyof AmazonFullApiSellingpartnersGeneratedClient)[];

export function createAmazonFullApiSellingpartnersGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiSellingpartnersGeneratedClient {
  return {
    GetSellingPartnerMetrics: (...args) => callOperation("replenishment-2022-11-07:getSellingPartnerMetrics", ...(args as AmazonFullApiOperationArgs<"replenishment-2022-11-07:getSellingPartnerMetrics">)),
  };
}
