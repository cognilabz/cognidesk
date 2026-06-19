// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiAccountManagementOperationKeys = [
  "PUT /v5/accounts",
  "GET /v5/accounts/http_signing_key",
  "POST /v5/accounts/http_signing_key",
  "GET /v5/sandbox/auth_recipients",
  "POST /v5/sandbox/auth_recipients",
  "DELETE /v5/sandbox/auth_recipients/{email}",
  "POST /v5/accounts/resend_activation_email",
  "PUT /v5/accounts/features"
] as const;
export type MailgunFullApiAccountManagementOperationKey = typeof MailgunFullApiAccountManagementOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiAccountManagementOperationPathParamMap {
  "PUT /v5/accounts": {};
  "GET /v5/accounts/http_signing_key": {};
  "POST /v5/accounts/http_signing_key": {};
  "GET /v5/sandbox/auth_recipients": {};
  "POST /v5/sandbox/auth_recipients": {};
  "DELETE /v5/sandbox/auth_recipients/{email}": { "email": MailgunFullApiPathParamValue };
  "POST /v5/accounts/resend_activation_email": {};
  "PUT /v5/accounts/features": {};
}

export interface MailgunFullApiAccountManagementOperationRequestMap {
  "PUT /v5/accounts": MailgunFullApiOperationInput<"PUT /v5/accounts">;
  "GET /v5/accounts/http_signing_key": MailgunFullApiOperationInput<"GET /v5/accounts/http_signing_key">;
  "POST /v5/accounts/http_signing_key": MailgunFullApiOperationInput<"POST /v5/accounts/http_signing_key">;
  "GET /v5/sandbox/auth_recipients": MailgunFullApiOperationInput<"GET /v5/sandbox/auth_recipients">;
  "POST /v5/sandbox/auth_recipients": MailgunFullApiOperationInput<"POST /v5/sandbox/auth_recipients">;
  "DELETE /v5/sandbox/auth_recipients/{email}": MailgunFullApiOperationInput<"DELETE /v5/sandbox/auth_recipients/{email}">;
  "POST /v5/accounts/resend_activation_email": MailgunFullApiOperationInput<"POST /v5/accounts/resend_activation_email">;
  "PUT /v5/accounts/features": MailgunFullApiOperationInput<"PUT /v5/accounts/features">;
}

export interface MailgunFullApiAccountManagementGeneratedClient {
  UpdateVariableAccountSettings(...args: MailgunFullApiOperationArgs<"PUT /v5/accounts">): Promise<MailgunFullApiOperationResponseMap["PUT /v5/accounts"]>;
  GetWebhookSigningKeySavedOnTheAccount(...args: MailgunFullApiOperationArgs<"GET /v5/accounts/http_signing_key">): Promise<MailgunFullApiOperationResponseMap["GET /v5/accounts/http_signing_key"]>;
  CreateOrRegenerateWebhookSigningKeyOnAnAccount(...args: MailgunFullApiOperationArgs<"POST /v5/accounts/http_signing_key">): Promise<MailgunFullApiOperationResponseMap["POST /v5/accounts/http_signing_key"]>;
  GetAuthorizedEmailRecipientsForASandboxDomain(...args: MailgunFullApiOperationArgs<"GET /v5/sandbox/auth_recipients">): Promise<MailgunFullApiOperationResponseMap["GET /v5/sandbox/auth_recipients"]>;
  AddAuthorizedEmailRecipientForASandboxDomain(...args: MailgunFullApiOperationArgs<"POST /v5/sandbox/auth_recipients">): Promise<MailgunFullApiOperationResponseMap["POST /v5/sandbox/auth_recipients"]>;
  RemoveAnAuthorizedSandboxDomainEmailRecipient(...args: MailgunFullApiOperationArgs<"DELETE /v5/sandbox/auth_recipients/{email}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v5/sandbox/auth_recipients/{email}"]>;
  ResendAccountActivationEmailToTheAccountOwner(...args: MailgunFullApiOperationArgs<"POST /v5/accounts/resend_activation_email">): Promise<MailgunFullApiOperationResponseMap["POST /v5/accounts/resend_activation_email"]>;
  UpdateAccountFeature(...args: MailgunFullApiOperationArgs<"PUT /v5/accounts/features">): Promise<MailgunFullApiOperationResponseMap["PUT /v5/accounts/features"]>;
}

export const MailgunFullApiAccountManagementGeneratedFunctionNames = [
  "UpdateVariableAccountSettings",
  "GetWebhookSigningKeySavedOnTheAccount",
  "CreateOrRegenerateWebhookSigningKeyOnAnAccount",
  "GetAuthorizedEmailRecipientsForASandboxDomain",
  "AddAuthorizedEmailRecipientForASandboxDomain",
  "RemoveAnAuthorizedSandboxDomainEmailRecipient",
  "ResendAccountActivationEmailToTheAccountOwner",
  "UpdateAccountFeature"
] as const satisfies readonly (keyof MailgunFullApiAccountManagementGeneratedClient)[];

export function createMailgunFullApiAccountManagementGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiAccountManagementGeneratedClient {
  return {
    UpdateVariableAccountSettings: (...args) => callOperation("PUT /v5/accounts", ...(args as MailgunFullApiOperationArgs<"PUT /v5/accounts">)),
    GetWebhookSigningKeySavedOnTheAccount: (...args) => callOperation("GET /v5/accounts/http_signing_key", ...(args as MailgunFullApiOperationArgs<"GET /v5/accounts/http_signing_key">)),
    CreateOrRegenerateWebhookSigningKeyOnAnAccount: (...args) => callOperation("POST /v5/accounts/http_signing_key", ...(args as MailgunFullApiOperationArgs<"POST /v5/accounts/http_signing_key">)),
    GetAuthorizedEmailRecipientsForASandboxDomain: (...args) => callOperation("GET /v5/sandbox/auth_recipients", ...(args as MailgunFullApiOperationArgs<"GET /v5/sandbox/auth_recipients">)),
    AddAuthorizedEmailRecipientForASandboxDomain: (...args) => callOperation("POST /v5/sandbox/auth_recipients", ...(args as MailgunFullApiOperationArgs<"POST /v5/sandbox/auth_recipients">)),
    RemoveAnAuthorizedSandboxDomainEmailRecipient: (...args) => callOperation("DELETE /v5/sandbox/auth_recipients/{email}", ...(args as MailgunFullApiOperationArgs<"DELETE /v5/sandbox/auth_recipients/{email}">)),
    ResendAccountActivationEmailToTheAccountOwner: (...args) => callOperation("POST /v5/accounts/resend_activation_email", ...(args as MailgunFullApiOperationArgs<"POST /v5/accounts/resend_activation_email">)),
    UpdateAccountFeature: (...args) => callOperation("PUT /v5/accounts/features", ...(args as MailgunFullApiOperationArgs<"PUT /v5/accounts/features">)),
  };
}
