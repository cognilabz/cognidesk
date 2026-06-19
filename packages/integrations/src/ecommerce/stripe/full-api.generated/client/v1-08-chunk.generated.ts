// Generated endpoint chunk for StripeFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  StripeGeneratedOperationCaller,
  StripeFullApiOperationArgs,
  StripeFullApiOperationInput,
  StripeFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { StripeFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const StripeFullApiV108OperationKeys = [
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn",
  "PostTestHelpersTreasuryReceivedCredits",
  "PostTestHelpersTreasuryReceivedDebits",
  "PostTokens",
  "PostTopups",
  "PostTopupsTopup",
  "PostTopupsTopupCancel",
  "PostTransfers",
  "PostTransfersIdReversals",
  "PostTransfersTransfer",
  "PostTransfersTransferReversalsId",
  "PostTreasuryCreditReversals",
  "PostTreasuryDebitReversals",
  "PostTreasuryFinancialAccounts",
  "PostTreasuryFinancialAccountsFinancialAccount",
  "PostTreasuryFinancialAccountsFinancialAccountClose",
  "PostTreasuryFinancialAccountsFinancialAccountFeatures",
  "PostTreasuryInboundTransfers",
  "PostTreasuryInboundTransfersInboundTransferCancel",
  "PostTreasuryOutboundPayments",
  "PostTreasuryOutboundPaymentsIdCancel",
  "PostTreasuryOutboundTransfers",
  "PostTreasuryOutboundTransfersOutboundTransferCancel",
  "PostWebhookEndpoints",
  "PostWebhookEndpointsWebhookEndpoint"
] as const;
export type StripeFullApiV108OperationKey = typeof StripeFullApiV108OperationKeys[number];
// End hardened literal operation keys.

export interface StripeFullApiV108OperationPathParamMap {
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail": { "outbound_transfer": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost": { "outbound_transfer": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn": { "outbound_transfer": StripeFullApiPathParamValue };
  "PostTestHelpersTreasuryReceivedCredits": {};
  "PostTestHelpersTreasuryReceivedDebits": {};
  "PostTokens": {};
  "PostTopups": {};
  "PostTopupsTopup": { "topup": StripeFullApiPathParamValue };
  "PostTopupsTopupCancel": { "topup": StripeFullApiPathParamValue };
  "PostTransfers": {};
  "PostTransfersIdReversals": { "id": StripeFullApiPathParamValue };
  "PostTransfersTransfer": { "transfer": StripeFullApiPathParamValue };
  "PostTransfersTransferReversalsId": { "transfer": StripeFullApiPathParamValue; "id": StripeFullApiPathParamValue };
  "PostTreasuryCreditReversals": {};
  "PostTreasuryDebitReversals": {};
  "PostTreasuryFinancialAccounts": {};
  "PostTreasuryFinancialAccountsFinancialAccount": { "financial_account": StripeFullApiPathParamValue };
  "PostTreasuryFinancialAccountsFinancialAccountClose": { "financial_account": StripeFullApiPathParamValue };
  "PostTreasuryFinancialAccountsFinancialAccountFeatures": { "financial_account": StripeFullApiPathParamValue };
  "PostTreasuryInboundTransfers": {};
  "PostTreasuryInboundTransfersInboundTransferCancel": { "inbound_transfer": StripeFullApiPathParamValue };
  "PostTreasuryOutboundPayments": {};
  "PostTreasuryOutboundPaymentsIdCancel": { "id": StripeFullApiPathParamValue };
  "PostTreasuryOutboundTransfers": {};
  "PostTreasuryOutboundTransfersOutboundTransferCancel": { "outbound_transfer": StripeFullApiPathParamValue };
  "PostWebhookEndpoints": {};
  "PostWebhookEndpointsWebhookEndpoint": { "webhook_endpoint": StripeFullApiPathParamValue };
}

export interface StripeFullApiV108OperationRequestMap {
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail">;
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost">;
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn": StripeFullApiOperationInput<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn">;
  "PostTestHelpersTreasuryReceivedCredits": StripeFullApiOperationInput<"PostTestHelpersTreasuryReceivedCredits">;
  "PostTestHelpersTreasuryReceivedDebits": StripeFullApiOperationInput<"PostTestHelpersTreasuryReceivedDebits">;
  "PostTokens": StripeFullApiOperationInput<"PostTokens">;
  "PostTopups": StripeFullApiOperationInput<"PostTopups">;
  "PostTopupsTopup": StripeFullApiOperationInput<"PostTopupsTopup">;
  "PostTopupsTopupCancel": StripeFullApiOperationInput<"PostTopupsTopupCancel">;
  "PostTransfers": StripeFullApiOperationInput<"PostTransfers">;
  "PostTransfersIdReversals": StripeFullApiOperationInput<"PostTransfersIdReversals">;
  "PostTransfersTransfer": StripeFullApiOperationInput<"PostTransfersTransfer">;
  "PostTransfersTransferReversalsId": StripeFullApiOperationInput<"PostTransfersTransferReversalsId">;
  "PostTreasuryCreditReversals": StripeFullApiOperationInput<"PostTreasuryCreditReversals">;
  "PostTreasuryDebitReversals": StripeFullApiOperationInput<"PostTreasuryDebitReversals">;
  "PostTreasuryFinancialAccounts": StripeFullApiOperationInput<"PostTreasuryFinancialAccounts">;
  "PostTreasuryFinancialAccountsFinancialAccount": StripeFullApiOperationInput<"PostTreasuryFinancialAccountsFinancialAccount">;
  "PostTreasuryFinancialAccountsFinancialAccountClose": StripeFullApiOperationInput<"PostTreasuryFinancialAccountsFinancialAccountClose">;
  "PostTreasuryFinancialAccountsFinancialAccountFeatures": StripeFullApiOperationInput<"PostTreasuryFinancialAccountsFinancialAccountFeatures">;
  "PostTreasuryInboundTransfers": StripeFullApiOperationInput<"PostTreasuryInboundTransfers">;
  "PostTreasuryInboundTransfersInboundTransferCancel": StripeFullApiOperationInput<"PostTreasuryInboundTransfersInboundTransferCancel">;
  "PostTreasuryOutboundPayments": StripeFullApiOperationInput<"PostTreasuryOutboundPayments">;
  "PostTreasuryOutboundPaymentsIdCancel": StripeFullApiOperationInput<"PostTreasuryOutboundPaymentsIdCancel">;
  "PostTreasuryOutboundTransfers": StripeFullApiOperationInput<"PostTreasuryOutboundTransfers">;
  "PostTreasuryOutboundTransfersOutboundTransferCancel": StripeFullApiOperationInput<"PostTreasuryOutboundTransfersOutboundTransferCancel">;
  "PostWebhookEndpoints": StripeFullApiOperationInput<"PostWebhookEndpoints">;
  "PostWebhookEndpointsWebhookEndpoint": StripeFullApiOperationInput<"PostWebhookEndpointsWebhookEndpoint">;
}

export interface StripeFullApiV108GeneratedClient {
  PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail"]>;
  PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost"]>;
  PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn"]>;
  PostTestHelpersTreasuryReceivedCredits(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryReceivedCredits">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryReceivedCredits"]>;
  PostTestHelpersTreasuryReceivedDebits(...args: StripeFullApiOperationArgs<"PostTestHelpersTreasuryReceivedDebits">): Promise<StripeFullApiOperationResponseMap["PostTestHelpersTreasuryReceivedDebits"]>;
  PostTokens(...args: StripeFullApiOperationArgs<"PostTokens">): Promise<StripeFullApiOperationResponseMap["PostTokens"]>;
  PostTopups(...args: StripeFullApiOperationArgs<"PostTopups">): Promise<StripeFullApiOperationResponseMap["PostTopups"]>;
  PostTopupsTopup(...args: StripeFullApiOperationArgs<"PostTopupsTopup">): Promise<StripeFullApiOperationResponseMap["PostTopupsTopup"]>;
  PostTopupsTopupCancel(...args: StripeFullApiOperationArgs<"PostTopupsTopupCancel">): Promise<StripeFullApiOperationResponseMap["PostTopupsTopupCancel"]>;
  PostTransfers(...args: StripeFullApiOperationArgs<"PostTransfers">): Promise<StripeFullApiOperationResponseMap["PostTransfers"]>;
  PostTransfersIdReversals(...args: StripeFullApiOperationArgs<"PostTransfersIdReversals">): Promise<StripeFullApiOperationResponseMap["PostTransfersIdReversals"]>;
  PostTransfersTransfer(...args: StripeFullApiOperationArgs<"PostTransfersTransfer">): Promise<StripeFullApiOperationResponseMap["PostTransfersTransfer"]>;
  PostTransfersTransferReversalsId(...args: StripeFullApiOperationArgs<"PostTransfersTransferReversalsId">): Promise<StripeFullApiOperationResponseMap["PostTransfersTransferReversalsId"]>;
  PostTreasuryCreditReversals(...args: StripeFullApiOperationArgs<"PostTreasuryCreditReversals">): Promise<StripeFullApiOperationResponseMap["PostTreasuryCreditReversals"]>;
  PostTreasuryDebitReversals(...args: StripeFullApiOperationArgs<"PostTreasuryDebitReversals">): Promise<StripeFullApiOperationResponseMap["PostTreasuryDebitReversals"]>;
  PostTreasuryFinancialAccounts(...args: StripeFullApiOperationArgs<"PostTreasuryFinancialAccounts">): Promise<StripeFullApiOperationResponseMap["PostTreasuryFinancialAccounts"]>;
  PostTreasuryFinancialAccountsFinancialAccount(...args: StripeFullApiOperationArgs<"PostTreasuryFinancialAccountsFinancialAccount">): Promise<StripeFullApiOperationResponseMap["PostTreasuryFinancialAccountsFinancialAccount"]>;
  PostTreasuryFinancialAccountsFinancialAccountClose(...args: StripeFullApiOperationArgs<"PostTreasuryFinancialAccountsFinancialAccountClose">): Promise<StripeFullApiOperationResponseMap["PostTreasuryFinancialAccountsFinancialAccountClose"]>;
  PostTreasuryFinancialAccountsFinancialAccountFeatures(...args: StripeFullApiOperationArgs<"PostTreasuryFinancialAccountsFinancialAccountFeatures">): Promise<StripeFullApiOperationResponseMap["PostTreasuryFinancialAccountsFinancialAccountFeatures"]>;
  PostTreasuryInboundTransfers(...args: StripeFullApiOperationArgs<"PostTreasuryInboundTransfers">): Promise<StripeFullApiOperationResponseMap["PostTreasuryInboundTransfers"]>;
  PostTreasuryInboundTransfersInboundTransferCancel(...args: StripeFullApiOperationArgs<"PostTreasuryInboundTransfersInboundTransferCancel">): Promise<StripeFullApiOperationResponseMap["PostTreasuryInboundTransfersInboundTransferCancel"]>;
  PostTreasuryOutboundPayments(...args: StripeFullApiOperationArgs<"PostTreasuryOutboundPayments">): Promise<StripeFullApiOperationResponseMap["PostTreasuryOutboundPayments"]>;
  PostTreasuryOutboundPaymentsIdCancel(...args: StripeFullApiOperationArgs<"PostTreasuryOutboundPaymentsIdCancel">): Promise<StripeFullApiOperationResponseMap["PostTreasuryOutboundPaymentsIdCancel"]>;
  PostTreasuryOutboundTransfers(...args: StripeFullApiOperationArgs<"PostTreasuryOutboundTransfers">): Promise<StripeFullApiOperationResponseMap["PostTreasuryOutboundTransfers"]>;
  PostTreasuryOutboundTransfersOutboundTransferCancel(...args: StripeFullApiOperationArgs<"PostTreasuryOutboundTransfersOutboundTransferCancel">): Promise<StripeFullApiOperationResponseMap["PostTreasuryOutboundTransfersOutboundTransferCancel"]>;
  PostWebhookEndpoints(...args: StripeFullApiOperationArgs<"PostWebhookEndpoints">): Promise<StripeFullApiOperationResponseMap["PostWebhookEndpoints"]>;
  PostWebhookEndpointsWebhookEndpoint(...args: StripeFullApiOperationArgs<"PostWebhookEndpointsWebhookEndpoint">): Promise<StripeFullApiOperationResponseMap["PostWebhookEndpointsWebhookEndpoint"]>;
}

export const StripeFullApiV108GeneratedFunctionNames = [
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost",
  "PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn",
  "PostTestHelpersTreasuryReceivedCredits",
  "PostTestHelpersTreasuryReceivedDebits",
  "PostTokens",
  "PostTopups",
  "PostTopupsTopup",
  "PostTopupsTopupCancel",
  "PostTransfers",
  "PostTransfersIdReversals",
  "PostTransfersTransfer",
  "PostTransfersTransferReversalsId",
  "PostTreasuryCreditReversals",
  "PostTreasuryDebitReversals",
  "PostTreasuryFinancialAccounts",
  "PostTreasuryFinancialAccountsFinancialAccount",
  "PostTreasuryFinancialAccountsFinancialAccountClose",
  "PostTreasuryFinancialAccountsFinancialAccountFeatures",
  "PostTreasuryInboundTransfers",
  "PostTreasuryInboundTransfersInboundTransferCancel",
  "PostTreasuryOutboundPayments",
  "PostTreasuryOutboundPaymentsIdCancel",
  "PostTreasuryOutboundTransfers",
  "PostTreasuryOutboundTransfersOutboundTransferCancel",
  "PostWebhookEndpoints",
  "PostWebhookEndpointsWebhookEndpoint"
] as const satisfies readonly (keyof StripeFullApiV108GeneratedClient)[];

export function createStripeFullApiV108GeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiV108GeneratedClient {
  return {
    PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail: (...args) => callOperation("PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferFail">)),
    PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost: (...args) => callOperation("PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferPost">)),
    PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn: (...args) => callOperation("PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryOutboundTransfersOutboundTransferReturn">)),
    PostTestHelpersTreasuryReceivedCredits: (...args) => callOperation("PostTestHelpersTreasuryReceivedCredits", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryReceivedCredits">)),
    PostTestHelpersTreasuryReceivedDebits: (...args) => callOperation("PostTestHelpersTreasuryReceivedDebits", ...(args as StripeFullApiOperationArgs<"PostTestHelpersTreasuryReceivedDebits">)),
    PostTokens: (...args) => callOperation("PostTokens", ...(args as StripeFullApiOperationArgs<"PostTokens">)),
    PostTopups: (...args) => callOperation("PostTopups", ...(args as StripeFullApiOperationArgs<"PostTopups">)),
    PostTopupsTopup: (...args) => callOperation("PostTopupsTopup", ...(args as StripeFullApiOperationArgs<"PostTopupsTopup">)),
    PostTopupsTopupCancel: (...args) => callOperation("PostTopupsTopupCancel", ...(args as StripeFullApiOperationArgs<"PostTopupsTopupCancel">)),
    PostTransfers: (...args) => callOperation("PostTransfers", ...(args as StripeFullApiOperationArgs<"PostTransfers">)),
    PostTransfersIdReversals: (...args) => callOperation("PostTransfersIdReversals", ...(args as StripeFullApiOperationArgs<"PostTransfersIdReversals">)),
    PostTransfersTransfer: (...args) => callOperation("PostTransfersTransfer", ...(args as StripeFullApiOperationArgs<"PostTransfersTransfer">)),
    PostTransfersTransferReversalsId: (...args) => callOperation("PostTransfersTransferReversalsId", ...(args as StripeFullApiOperationArgs<"PostTransfersTransferReversalsId">)),
    PostTreasuryCreditReversals: (...args) => callOperation("PostTreasuryCreditReversals", ...(args as StripeFullApiOperationArgs<"PostTreasuryCreditReversals">)),
    PostTreasuryDebitReversals: (...args) => callOperation("PostTreasuryDebitReversals", ...(args as StripeFullApiOperationArgs<"PostTreasuryDebitReversals">)),
    PostTreasuryFinancialAccounts: (...args) => callOperation("PostTreasuryFinancialAccounts", ...(args as StripeFullApiOperationArgs<"PostTreasuryFinancialAccounts">)),
    PostTreasuryFinancialAccountsFinancialAccount: (...args) => callOperation("PostTreasuryFinancialAccountsFinancialAccount", ...(args as StripeFullApiOperationArgs<"PostTreasuryFinancialAccountsFinancialAccount">)),
    PostTreasuryFinancialAccountsFinancialAccountClose: (...args) => callOperation("PostTreasuryFinancialAccountsFinancialAccountClose", ...(args as StripeFullApiOperationArgs<"PostTreasuryFinancialAccountsFinancialAccountClose">)),
    PostTreasuryFinancialAccountsFinancialAccountFeatures: (...args) => callOperation("PostTreasuryFinancialAccountsFinancialAccountFeatures", ...(args as StripeFullApiOperationArgs<"PostTreasuryFinancialAccountsFinancialAccountFeatures">)),
    PostTreasuryInboundTransfers: (...args) => callOperation("PostTreasuryInboundTransfers", ...(args as StripeFullApiOperationArgs<"PostTreasuryInboundTransfers">)),
    PostTreasuryInboundTransfersInboundTransferCancel: (...args) => callOperation("PostTreasuryInboundTransfersInboundTransferCancel", ...(args as StripeFullApiOperationArgs<"PostTreasuryInboundTransfersInboundTransferCancel">)),
    PostTreasuryOutboundPayments: (...args) => callOperation("PostTreasuryOutboundPayments", ...(args as StripeFullApiOperationArgs<"PostTreasuryOutboundPayments">)),
    PostTreasuryOutboundPaymentsIdCancel: (...args) => callOperation("PostTreasuryOutboundPaymentsIdCancel", ...(args as StripeFullApiOperationArgs<"PostTreasuryOutboundPaymentsIdCancel">)),
    PostTreasuryOutboundTransfers: (...args) => callOperation("PostTreasuryOutboundTransfers", ...(args as StripeFullApiOperationArgs<"PostTreasuryOutboundTransfers">)),
    PostTreasuryOutboundTransfersOutboundTransferCancel: (...args) => callOperation("PostTreasuryOutboundTransfersOutboundTransferCancel", ...(args as StripeFullApiOperationArgs<"PostTreasuryOutboundTransfersOutboundTransferCancel">)),
    PostWebhookEndpoints: (...args) => callOperation("PostWebhookEndpoints", ...(args as StripeFullApiOperationArgs<"PostWebhookEndpoints">)),
    PostWebhookEndpointsWebhookEndpoint: (...args) => callOperation("PostWebhookEndpointsWebhookEndpoint", ...(args as StripeFullApiOperationArgs<"PostWebhookEndpointsWebhookEndpoint">)),
  };
}
