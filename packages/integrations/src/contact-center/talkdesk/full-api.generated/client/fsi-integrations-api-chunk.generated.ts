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
export const TalkdeskFullApiFSIIntegrationsAPIOperationKeys = [
  "fsi-contacts-contact-id-accounts-get",
  "fsi-contacts-contact-id-accounts-account-id-payoff-post",
  "fsi-contacts-get",
  "fsi-contacts-contact-id-get",
  "fsi-contacts-contact-id-cards-card-id-get",
  "fsi-contacts-contact-id-cards-card-id-deactivation-post",
  "fsi-contacts-contact-id-cards-card-id-activation-post",
  "fsi-contacts-contact-id-cards-get",
  "fsi-contacts-contact-id-payments-get",
  "fsi-transfers-internal-post",
  "fsi-transfers-external-post",
  "fsi-transfers-international-post",
  "fsi-stop-contact-id-payments-post",
  "fsi-travel-notifications-post",
  "fsi-checks-contact-id-search-post",
  "fsi-contacts-contact-id-cards-card-id-replacecard-post",
  "fsi-contacts-contact-id-payments-ach-post",
  "fsi-unlock-contact-id-pin-generate-post",
  "fsi-unlock-contact-id-pin-reset-post",
  "fsi-decrypt-encrypt-key-encrypted-content-get",
  "fsi-contacts-events-writeback-post",
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get",
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put",
  "fsi-contacts-contact-id-accounts-account-id-transactions-get"
] as const;
export type TalkdeskFullApiFSIIntegrationsAPIOperationKey = typeof TalkdeskFullApiFSIIntegrationsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFSIIntegrationsAPIOperationPathParamMap {
  "fsi-contacts-contact-id-accounts-get": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-accounts-account-id-payoff-post": { "contact_id": TalkdeskFullApiPathParamValue; "account_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-get": {};
  "fsi-contacts-contact-id-get": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-cards-card-id-get": { "contact_id": TalkdeskFullApiPathParamValue; "card_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-cards-card-id-deactivation-post": { "contact_id": TalkdeskFullApiPathParamValue; "card_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-cards-card-id-activation-post": { "contact_id": TalkdeskFullApiPathParamValue; "card_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-cards-get": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-payments-get": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-transfers-internal-post": {};
  "fsi-transfers-external-post": {};
  "fsi-transfers-international-post": {};
  "fsi-stop-contact-id-payments-post": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-travel-notifications-post": {};
  "fsi-checks-contact-id-search-post": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-cards-card-id-replacecard-post": { "contact_id": TalkdeskFullApiPathParamValue; "card_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-payments-ach-post": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-unlock-contact-id-pin-generate-post": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-unlock-contact-id-pin-reset-post": { "contact_id": TalkdeskFullApiPathParamValue };
  "fsi-decrypt-encrypt-key-encrypted-content-get": { "encrypt_key": TalkdeskFullApiPathParamValue; "encrypted_content": TalkdeskFullApiPathParamValue };
  "fsi-contacts-events-writeback-post": {};
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get": { "contact_id": TalkdeskFullApiPathParamValue; "card_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put": { "contact_id": TalkdeskFullApiPathParamValue; "card_id": TalkdeskFullApiPathParamValue };
  "fsi-contacts-contact-id-accounts-account-id-transactions-get": { "contact_id": TalkdeskFullApiPathParamValue; "account_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiFSIIntegrationsAPIOperationRequestMap {
  "fsi-contacts-contact-id-accounts-get": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-accounts-get">;
  "fsi-contacts-contact-id-accounts-account-id-payoff-post": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-accounts-account-id-payoff-post">;
  "fsi-contacts-get": TalkdeskFullApiOperationInput<"fsi-contacts-get">;
  "fsi-contacts-contact-id-get": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-get">;
  "fsi-contacts-contact-id-cards-card-id-get": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-cards-card-id-get">;
  "fsi-contacts-contact-id-cards-card-id-deactivation-post": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-cards-card-id-deactivation-post">;
  "fsi-contacts-contact-id-cards-card-id-activation-post": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-cards-card-id-activation-post">;
  "fsi-contacts-contact-id-cards-get": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-cards-get">;
  "fsi-contacts-contact-id-payments-get": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-payments-get">;
  "fsi-transfers-internal-post": TalkdeskFullApiOperationInput<"fsi-transfers-internal-post">;
  "fsi-transfers-external-post": TalkdeskFullApiOperationInput<"fsi-transfers-external-post">;
  "fsi-transfers-international-post": TalkdeskFullApiOperationInput<"fsi-transfers-international-post">;
  "fsi-stop-contact-id-payments-post": TalkdeskFullApiOperationInput<"fsi-stop-contact-id-payments-post">;
  "fsi-travel-notifications-post": TalkdeskFullApiOperationInput<"fsi-travel-notifications-post">;
  "fsi-checks-contact-id-search-post": TalkdeskFullApiOperationInput<"fsi-checks-contact-id-search-post">;
  "fsi-contacts-contact-id-cards-card-id-replacecard-post": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-cards-card-id-replacecard-post">;
  "fsi-contacts-contact-id-payments-ach-post": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-payments-ach-post">;
  "fsi-unlock-contact-id-pin-generate-post": TalkdeskFullApiOperationInput<"fsi-unlock-contact-id-pin-generate-post">;
  "fsi-unlock-contact-id-pin-reset-post": TalkdeskFullApiOperationInput<"fsi-unlock-contact-id-pin-reset-post">;
  "fsi-decrypt-encrypt-key-encrypted-content-get": TalkdeskFullApiOperationInput<"fsi-decrypt-encrypt-key-encrypted-content-get">;
  "fsi-contacts-events-writeback-post": TalkdeskFullApiOperationInput<"fsi-contacts-events-writeback-post">;
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-cards-card-id-spendlimits-get">;
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-cards-card-id-spendlimits-put">;
  "fsi-contacts-contact-id-accounts-account-id-transactions-get": TalkdeskFullApiOperationInput<"fsi-contacts-contact-id-accounts-account-id-transactions-get">;
}

export interface TalkdeskFullApiFSIIntegrationsAPIGeneratedClient {
  FsiContactsContactIdAccountsGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-accounts-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-accounts-get"]>;
  FsiContactsContactIdAccountsAccountIdPayoffPost(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-accounts-account-id-payoff-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-accounts-account-id-payoff-post"]>;
  FsiContactsGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-get"]>;
  FsiContactsContactIdGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-get"]>;
  FsiContactsContactIdCardsCardIdGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-cards-card-id-get"]>;
  FsiContactsContactIdCardsCardIdDeactivationPost(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-deactivation-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-cards-card-id-deactivation-post"]>;
  FsiContactsContactIdCardsCardIdActivationPost(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-activation-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-cards-card-id-activation-post"]>;
  FsiContactsContactIdCardsGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-cards-get"]>;
  FsiContactsContactIdPaymentsGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-payments-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-payments-get"]>;
  FsiTransfersInternalPost(...args: TalkdeskFullApiOperationArgs<"fsi-transfers-internal-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-transfers-internal-post"]>;
  FsiTransfersExternalPost(...args: TalkdeskFullApiOperationArgs<"fsi-transfers-external-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-transfers-external-post"]>;
  FsiTransfersInternationalPost(...args: TalkdeskFullApiOperationArgs<"fsi-transfers-international-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-transfers-international-post"]>;
  FsiStopContactIdPaymentsPost(...args: TalkdeskFullApiOperationArgs<"fsi-stop-contact-id-payments-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-stop-contact-id-payments-post"]>;
  FsiTravelNotificationsPost(...args: TalkdeskFullApiOperationArgs<"fsi-travel-notifications-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-travel-notifications-post"]>;
  FsiChecksContactIdSearchPost(...args: TalkdeskFullApiOperationArgs<"fsi-checks-contact-id-search-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-checks-contact-id-search-post"]>;
  FsiContactsContactIdCardsCardIdReplacecardPost(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-replacecard-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-cards-card-id-replacecard-post"]>;
  FsiContactsContactIdPaymentsAchPost(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-payments-ach-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-payments-ach-post"]>;
  FsiUnlockContactIdPinGeneratePost(...args: TalkdeskFullApiOperationArgs<"fsi-unlock-contact-id-pin-generate-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-unlock-contact-id-pin-generate-post"]>;
  FsiUnlockContactIdPinResetPost(...args: TalkdeskFullApiOperationArgs<"fsi-unlock-contact-id-pin-reset-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-unlock-contact-id-pin-reset-post"]>;
  FsiDecryptEncryptKeyEncryptedContentGet(...args: TalkdeskFullApiOperationArgs<"fsi-decrypt-encrypt-key-encrypted-content-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-decrypt-encrypt-key-encrypted-content-get"]>;
  FsiContactsEventsWritebackPost(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-events-writeback-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-events-writeback-post"]>;
  FsiContactsContactIdCardsCardIdSpendlimitsGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-spendlimits-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-cards-card-id-spendlimits-get"]>;
  FsiContactsContactIdCardsCardIdSpendlimitsPut(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-spendlimits-put">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-cards-card-id-spendlimits-put"]>;
  FsiContactsContactIdAccountsAccountIdTransactionsGet(...args: TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-accounts-account-id-transactions-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-contacts-contact-id-accounts-account-id-transactions-get"]>;
}

export const TalkdeskFullApiFSIIntegrationsAPIGeneratedFunctionNames = [
  "FsiContactsContactIdAccountsGet",
  "FsiContactsContactIdAccountsAccountIdPayoffPost",
  "FsiContactsGet",
  "FsiContactsContactIdGet",
  "FsiContactsContactIdCardsCardIdGet",
  "FsiContactsContactIdCardsCardIdDeactivationPost",
  "FsiContactsContactIdCardsCardIdActivationPost",
  "FsiContactsContactIdCardsGet",
  "FsiContactsContactIdPaymentsGet",
  "FsiTransfersInternalPost",
  "FsiTransfersExternalPost",
  "FsiTransfersInternationalPost",
  "FsiStopContactIdPaymentsPost",
  "FsiTravelNotificationsPost",
  "FsiChecksContactIdSearchPost",
  "FsiContactsContactIdCardsCardIdReplacecardPost",
  "FsiContactsContactIdPaymentsAchPost",
  "FsiUnlockContactIdPinGeneratePost",
  "FsiUnlockContactIdPinResetPost",
  "FsiDecryptEncryptKeyEncryptedContentGet",
  "FsiContactsEventsWritebackPost",
  "FsiContactsContactIdCardsCardIdSpendlimitsGet",
  "FsiContactsContactIdCardsCardIdSpendlimitsPut",
  "FsiContactsContactIdAccountsAccountIdTransactionsGet"
] as const satisfies readonly (keyof TalkdeskFullApiFSIIntegrationsAPIGeneratedClient)[];

export function createTalkdeskFullApiFSIIntegrationsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFSIIntegrationsAPIGeneratedClient {
  return {
    FsiContactsContactIdAccountsGet: (...args) => callOperation("fsi-contacts-contact-id-accounts-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-accounts-get">)),
    FsiContactsContactIdAccountsAccountIdPayoffPost: (...args) => callOperation("fsi-contacts-contact-id-accounts-account-id-payoff-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-accounts-account-id-payoff-post">)),
    FsiContactsGet: (...args) => callOperation("fsi-contacts-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-get">)),
    FsiContactsContactIdGet: (...args) => callOperation("fsi-contacts-contact-id-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-get">)),
    FsiContactsContactIdCardsCardIdGet: (...args) => callOperation("fsi-contacts-contact-id-cards-card-id-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-get">)),
    FsiContactsContactIdCardsCardIdDeactivationPost: (...args) => callOperation("fsi-contacts-contact-id-cards-card-id-deactivation-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-deactivation-post">)),
    FsiContactsContactIdCardsCardIdActivationPost: (...args) => callOperation("fsi-contacts-contact-id-cards-card-id-activation-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-activation-post">)),
    FsiContactsContactIdCardsGet: (...args) => callOperation("fsi-contacts-contact-id-cards-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-get">)),
    FsiContactsContactIdPaymentsGet: (...args) => callOperation("fsi-contacts-contact-id-payments-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-payments-get">)),
    FsiTransfersInternalPost: (...args) => callOperation("fsi-transfers-internal-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-transfers-internal-post">)),
    FsiTransfersExternalPost: (...args) => callOperation("fsi-transfers-external-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-transfers-external-post">)),
    FsiTransfersInternationalPost: (...args) => callOperation("fsi-transfers-international-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-transfers-international-post">)),
    FsiStopContactIdPaymentsPost: (...args) => callOperation("fsi-stop-contact-id-payments-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-stop-contact-id-payments-post">)),
    FsiTravelNotificationsPost: (...args) => callOperation("fsi-travel-notifications-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-travel-notifications-post">)),
    FsiChecksContactIdSearchPost: (...args) => callOperation("fsi-checks-contact-id-search-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-checks-contact-id-search-post">)),
    FsiContactsContactIdCardsCardIdReplacecardPost: (...args) => callOperation("fsi-contacts-contact-id-cards-card-id-replacecard-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-replacecard-post">)),
    FsiContactsContactIdPaymentsAchPost: (...args) => callOperation("fsi-contacts-contact-id-payments-ach-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-payments-ach-post">)),
    FsiUnlockContactIdPinGeneratePost: (...args) => callOperation("fsi-unlock-contact-id-pin-generate-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-unlock-contact-id-pin-generate-post">)),
    FsiUnlockContactIdPinResetPost: (...args) => callOperation("fsi-unlock-contact-id-pin-reset-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-unlock-contact-id-pin-reset-post">)),
    FsiDecryptEncryptKeyEncryptedContentGet: (...args) => callOperation("fsi-decrypt-encrypt-key-encrypted-content-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-decrypt-encrypt-key-encrypted-content-get">)),
    FsiContactsEventsWritebackPost: (...args) => callOperation("fsi-contacts-events-writeback-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-events-writeback-post">)),
    FsiContactsContactIdCardsCardIdSpendlimitsGet: (...args) => callOperation("fsi-contacts-contact-id-cards-card-id-spendlimits-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-spendlimits-get">)),
    FsiContactsContactIdCardsCardIdSpendlimitsPut: (...args) => callOperation("fsi-contacts-contact-id-cards-card-id-spendlimits-put", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-cards-card-id-spendlimits-put">)),
    FsiContactsContactIdAccountsAccountIdTransactionsGet: (...args) => callOperation("fsi-contacts-contact-id-accounts-account-id-transactions-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-contacts-contact-id-accounts-account-id-transactions-get">)),
  };
}
