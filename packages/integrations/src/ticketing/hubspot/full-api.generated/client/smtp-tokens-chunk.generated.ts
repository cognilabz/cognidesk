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
export const HubSpotFullApiSMTPTokensOperationKeys = [
  "marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage",
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken",
  "marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById",
  "marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken",
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword"
] as const;
export type HubSpotFullApiSMTPTokensOperationKey = typeof HubSpotFullApiSMTPTokensOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiSMTPTokensOperationPathParamMap {
  "marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage": {};
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken": {};
  "marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById": { "tokenId": HubSpotFullApiPathParamValue };
  "marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken": { "tokenId": HubSpotFullApiPathParamValue };
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword": { "tokenId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiSMTPTokensOperationRequestMap {
  "marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage": HubSpotFullApiOperationInput<"marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage">;
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken": HubSpotFullApiOperationInput<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken">;
  "marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById": HubSpotFullApiOperationInput<"marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById">;
  "marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken": HubSpotFullApiOperationInput<"marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken">;
  "marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword": HubSpotFullApiOperationInput<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword">;
}

export interface HubSpotFullApiSMTPTokensGeneratedClient {
  TransactionalSingleSendGetMarketingTransactional202603SmtpTokensGetTokensPage(...args: HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage">): Promise<HubSpotFullApiOperationResponseMap["marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage"]>;
  TransactionalSingleSendPostMarketingTransactional202603SmtpTokensCreateToken(...args: HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken">): Promise<HubSpotFullApiOperationResponseMap["marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken"]>;
  TransactionalSingleSendGetMarketingTransactional202603SmtpTokensTokenIdGetTokenById(...args: HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById">): Promise<HubSpotFullApiOperationResponseMap["marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById"]>;
  TransactionalSingleSendDeleteMarketingTransactional202603SmtpTokensTokenIdArchiveToken(...args: HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken">): Promise<HubSpotFullApiOperationResponseMap["marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken"]>;
  TransactionalSingleSendPostMarketingTransactional202603SmtpTokensTokenIdPasswordResetResetPassword(...args: HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword">): Promise<HubSpotFullApiOperationResponseMap["marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword"]>;
}

export const HubSpotFullApiSMTPTokensGeneratedFunctionNames = [
  "TransactionalSingleSendGetMarketingTransactional202603SmtpTokensGetTokensPage",
  "TransactionalSingleSendPostMarketingTransactional202603SmtpTokensCreateToken",
  "TransactionalSingleSendGetMarketingTransactional202603SmtpTokensTokenIdGetTokenById",
  "TransactionalSingleSendDeleteMarketingTransactional202603SmtpTokensTokenIdArchiveToken",
  "TransactionalSingleSendPostMarketingTransactional202603SmtpTokensTokenIdPasswordResetResetPassword"
] as const satisfies readonly (keyof HubSpotFullApiSMTPTokensGeneratedClient)[];

export function createHubSpotFullApiSMTPTokensGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiSMTPTokensGeneratedClient {
  return {
    TransactionalSingleSendGetMarketingTransactional202603SmtpTokensGetTokensPage: (...args) => callOperation("marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage", ...(args as HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens_getTokensPage">)),
    TransactionalSingleSendPostMarketingTransactional202603SmtpTokensCreateToken: (...args) => callOperation("marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken", ...(args as HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens_createToken">)),
    TransactionalSingleSendGetMarketingTransactional202603SmtpTokensTokenIdGetTokenById: (...args) => callOperation("marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById", ...(args as HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:get-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_getTokenById">)),
    TransactionalSingleSendDeleteMarketingTransactional202603SmtpTokensTokenIdArchiveToken: (...args) => callOperation("marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken", ...(args as HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:delete-/marketing/transactional/2026-03/smtp-tokens/{tokenId}_archiveToken">)),
    TransactionalSingleSendPostMarketingTransactional202603SmtpTokensTokenIdPasswordResetResetPassword: (...args) => callOperation("marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword", ...(args as HubSpotFullApiOperationArgs<"marketing:transactional-single-send:2026-03:post-/marketing/transactional/2026-03/smtp-tokens/{tokenId}/password-reset_resetPassword">)),
  };
}
