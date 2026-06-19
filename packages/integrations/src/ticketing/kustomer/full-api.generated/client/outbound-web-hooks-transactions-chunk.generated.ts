// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiOutboundWebHooksTransactionsOperationKeys = [
  "ListTransactionsForWebhook",
  "ListTransactions"
] as const;
export type KustomerFullApiOutboundWebHooksTransactionsOperationKey = typeof KustomerFullApiOutboundWebHooksTransactionsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiOutboundWebHooksTransactionsOperationPathParamMap {
  "ListTransactionsForWebhook": { "webhookId": KustomerFullApiPathParamValue };
  "ListTransactions": {};
}

export interface KustomerFullApiOutboundWebHooksTransactionsOperationRequestMap {
  "ListTransactionsForWebhook": KustomerFullApiOperationInput<"ListTransactionsForWebhook">;
  "ListTransactions": KustomerFullApiOperationInput<"ListTransactions">;
}

export interface KustomerFullApiOutboundWebHooksTransactionsGeneratedClient {
  kustomerListTransactionsForWebhook(...args: KustomerFullApiOperationArgs<"ListTransactionsForWebhook">): Promise<KustomerFullApiOperationResponseMap["ListTransactionsForWebhook"]>;
  kustomerListTransactions(...args: KustomerFullApiOperationArgs<"ListTransactions">): Promise<KustomerFullApiOperationResponseMap["ListTransactions"]>;
}

export const KustomerFullApiOutboundWebHooksTransactionsGeneratedFunctionNames = [
  "kustomerListTransactionsForWebhook",
  "kustomerListTransactions"
] as const satisfies readonly (keyof KustomerFullApiOutboundWebHooksTransactionsGeneratedClient)[];

export function createKustomerFullApiOutboundWebHooksTransactionsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiOutboundWebHooksTransactionsGeneratedClient {
  return {
    kustomerListTransactionsForWebhook: (...args) => callOperation("ListTransactionsForWebhook", ...(args as KustomerFullApiOperationArgs<"ListTransactionsForWebhook">)),
    kustomerListTransactions: (...args) => callOperation("ListTransactions", ...(args as KustomerFullApiOperationArgs<"ListTransactions">)),
  };
}
