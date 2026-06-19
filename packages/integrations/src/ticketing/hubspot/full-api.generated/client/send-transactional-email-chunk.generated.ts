// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiSendTransactionalEmailOperationKeys = [
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail"
] as const;
export type HubSpotFullApiSendTransactionalEmailOperationKey = typeof HubSpotFullApiSendTransactionalEmailOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiSendTransactionalEmailOperationPathParamMap {
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail": {};
}

export interface HubSpotFullApiSendTransactionalEmailOperationRequestMap {
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail": HubSpotFullApiOperationInput<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail">;
}

export interface HubSpotFullApiSendTransactionalEmailGeneratedClient {
  TransactionalSingleSendPostMarketingTransactional202603SingleEmailSendSendEmail(...args: HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail">): Promise<HubSpotFullApiOperationResponseMap["marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail"]>;
}

export const HubSpotFullApiSendTransactionalEmailGeneratedFunctionNames = [
  "TransactionalSingleSendPostMarketingTransactional202603SingleEmailSendSendEmail"
] as const satisfies readonly (keyof HubSpotFullApiSendTransactionalEmailGeneratedClient)[];

export function createHubSpotFullApiSendTransactionalEmailGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiSendTransactionalEmailGeneratedClient {
  return {
    TransactionalSingleSendPostMarketingTransactional202603SingleEmailSendSendEmail: (...args) => callOperation("marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail", ...(args as HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/single-email/send_sendEmail">)),
  };
}
