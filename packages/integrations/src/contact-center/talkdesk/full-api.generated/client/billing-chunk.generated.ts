// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiBillingOperationKeys = [
  "GetAccountSubscription",
  "GetAccountSubscriptionLicenses",
  "GetAccountSubscriptionLicenseDetails"
] as const;
export type TalkdeskFullApiBillingOperationKey = typeof TalkdeskFullApiBillingOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiBillingOperationPathParamMap {
  "GetAccountSubscription": {};
  "GetAccountSubscriptionLicenses": {};
  "GetAccountSubscriptionLicenseDetails": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiBillingOperationRequestMap {
  "GetAccountSubscription": TalkdeskFullApiOperationInput<"GetAccountSubscription">;
  "GetAccountSubscriptionLicenses": TalkdeskFullApiOperationInput<"GetAccountSubscriptionLicenses">;
  "GetAccountSubscriptionLicenseDetails": TalkdeskFullApiOperationInput<"GetAccountSubscriptionLicenseDetails">;
}

export interface TalkdeskFullApiBillingGeneratedClient {
  GetAccountSubscription(...args: TalkdeskFullApiOperationArgs<"GetAccountSubscription">): Promise<TalkdeskFullApiOperationResponseMap["GetAccountSubscription"]>;
  GetAccountSubscriptionLicenses(...args: TalkdeskFullApiOperationArgs<"GetAccountSubscriptionLicenses">): Promise<TalkdeskFullApiOperationResponseMap["GetAccountSubscriptionLicenses"]>;
  GetAccountSubscriptionLicenseDetails(...args: TalkdeskFullApiOperationArgs<"GetAccountSubscriptionLicenseDetails">): Promise<TalkdeskFullApiOperationResponseMap["GetAccountSubscriptionLicenseDetails"]>;
}

export const TalkdeskFullApiBillingGeneratedFunctionNames = [
  "GetAccountSubscription",
  "GetAccountSubscriptionLicenses",
  "GetAccountSubscriptionLicenseDetails"
] as const satisfies readonly (keyof TalkdeskFullApiBillingGeneratedClient)[];

export function createTalkdeskFullApiBillingGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiBillingGeneratedClient {
  return {
    GetAccountSubscription: (...args) => callOperation("GetAccountSubscription", ...(args as TalkdeskFullApiOperationArgs<"GetAccountSubscription">)),
    GetAccountSubscriptionLicenses: (...args) => callOperation("GetAccountSubscriptionLicenses", ...(args as TalkdeskFullApiOperationArgs<"GetAccountSubscriptionLicenses">)),
    GetAccountSubscriptionLicenseDetails: (...args) => callOperation("GetAccountSubscriptionLicenseDetails", ...(args as TalkdeskFullApiOperationArgs<"GetAccountSubscriptionLicenseDetails">)),
  };
}
