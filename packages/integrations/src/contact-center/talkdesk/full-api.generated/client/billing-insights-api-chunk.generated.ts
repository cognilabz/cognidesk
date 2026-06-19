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
export const TalkdeskFullApiBillingInsightsAPIOperationKeys = [
  "expressGetAccounts",
  "getProducts",
  "getAccountSubscriptions",
  "getAccountInvoices",
  "getAccountUsageMonth"
] as const;
export type TalkdeskFullApiBillingInsightsAPIOperationKey = typeof TalkdeskFullApiBillingInsightsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiBillingInsightsAPIOperationPathParamMap {
  "expressGetAccounts": {};
  "getProducts": {};
  "getAccountSubscriptions": {};
  "getAccountInvoices": {};
  "getAccountUsageMonth": {};
}

export interface TalkdeskFullApiBillingInsightsAPIOperationRequestMap {
  "expressGetAccounts": TalkdeskFullApiOperationInput<"expressGetAccounts">;
  "getProducts": TalkdeskFullApiOperationInput<"getProducts">;
  "getAccountSubscriptions": TalkdeskFullApiOperationInput<"getAccountSubscriptions">;
  "getAccountInvoices": TalkdeskFullApiOperationInput<"getAccountInvoices">;
  "getAccountUsageMonth": TalkdeskFullApiOperationInput<"getAccountUsageMonth">;
}

export interface TalkdeskFullApiBillingInsightsAPIGeneratedClient {
  ExpressGetAccounts(...args: TalkdeskFullApiOperationArgs<"expressGetAccounts">): Promise<TalkdeskFullApiOperationResponseMap["expressGetAccounts"]>;
  GetProducts(...args: TalkdeskFullApiOperationArgs<"getProducts">): Promise<TalkdeskFullApiOperationResponseMap["getProducts"]>;
  GetAccountSubscriptions(...args: TalkdeskFullApiOperationArgs<"getAccountSubscriptions">): Promise<TalkdeskFullApiOperationResponseMap["getAccountSubscriptions"]>;
  GetAccountInvoices(...args: TalkdeskFullApiOperationArgs<"getAccountInvoices">): Promise<TalkdeskFullApiOperationResponseMap["getAccountInvoices"]>;
  GetAccountUsageMonth(...args: TalkdeskFullApiOperationArgs<"getAccountUsageMonth">): Promise<TalkdeskFullApiOperationResponseMap["getAccountUsageMonth"]>;
}

export const TalkdeskFullApiBillingInsightsAPIGeneratedFunctionNames = [
  "ExpressGetAccounts",
  "GetProducts",
  "GetAccountSubscriptions",
  "GetAccountInvoices",
  "GetAccountUsageMonth"
] as const satisfies readonly (keyof TalkdeskFullApiBillingInsightsAPIGeneratedClient)[];

export function createTalkdeskFullApiBillingInsightsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiBillingInsightsAPIGeneratedClient {
  return {
    ExpressGetAccounts: (...args) => callOperation("expressGetAccounts", ...(args as TalkdeskFullApiOperationArgs<"expressGetAccounts">)),
    GetProducts: (...args) => callOperation("getProducts", ...(args as TalkdeskFullApiOperationArgs<"getProducts">)),
    GetAccountSubscriptions: (...args) => callOperation("getAccountSubscriptions", ...(args as TalkdeskFullApiOperationArgs<"getAccountSubscriptions">)),
    GetAccountInvoices: (...args) => callOperation("getAccountInvoices", ...(args as TalkdeskFullApiOperationArgs<"getAccountInvoices">)),
    GetAccountUsageMonth: (...args) => callOperation("getAccountUsageMonth", ...(args as TalkdeskFullApiOperationArgs<"getAccountUsageMonth">)),
  };
}
