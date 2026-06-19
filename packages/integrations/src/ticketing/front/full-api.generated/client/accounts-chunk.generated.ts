// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiAccountsOperationKeys = [
  "list-accounts",
  "create-account",
  "delete-an-account",
  "fetch-an-account",
  "update-account",
  "remove-contact-from-account",
  "list-account-contacts",
  "add-contact-to-account"
] as const;
export type FrontFullApiAccountsOperationKey = typeof FrontFullApiAccountsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiAccountsOperationPathParamMap {
  "list-accounts": {};
  "create-account": {};
  "delete-an-account": { "account_id": FrontFullApiPathParamValue };
  "fetch-an-account": { "account_id": FrontFullApiPathParamValue };
  "update-account": { "account_id": FrontFullApiPathParamValue };
  "remove-contact-from-account": { "account_id": FrontFullApiPathParamValue };
  "list-account-contacts": { "account_id": FrontFullApiPathParamValue };
  "add-contact-to-account": { "account_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiAccountsOperationRequestMap {
  "list-accounts": FrontFullApiOperationInput<"list-accounts">;
  "create-account": FrontFullApiOperationInput<"create-account">;
  "delete-an-account": FrontFullApiOperationInput<"delete-an-account">;
  "fetch-an-account": FrontFullApiOperationInput<"fetch-an-account">;
  "update-account": FrontFullApiOperationInput<"update-account">;
  "remove-contact-from-account": FrontFullApiOperationInput<"remove-contact-from-account">;
  "list-account-contacts": FrontFullApiOperationInput<"list-account-contacts">;
  "add-contact-to-account": FrontFullApiOperationInput<"add-contact-to-account">;
}

export interface FrontFullApiAccountsGeneratedClient {
  frontListAccounts(...args: FrontFullApiOperationArgs<"list-accounts">): Promise<FrontFullApiOperationResponseMap["list-accounts"]>;
  frontCreateAccount(...args: FrontFullApiOperationArgs<"create-account">): Promise<FrontFullApiOperationResponseMap["create-account"]>;
  frontDeleteAnAccount(...args: FrontFullApiOperationArgs<"delete-an-account">): Promise<FrontFullApiOperationResponseMap["delete-an-account"]>;
  frontFetchAnAccount(...args: FrontFullApiOperationArgs<"fetch-an-account">): Promise<FrontFullApiOperationResponseMap["fetch-an-account"]>;
  frontUpdateAccount(...args: FrontFullApiOperationArgs<"update-account">): Promise<FrontFullApiOperationResponseMap["update-account"]>;
  frontRemoveContactFromAccount(...args: FrontFullApiOperationArgs<"remove-contact-from-account">): Promise<FrontFullApiOperationResponseMap["remove-contact-from-account"]>;
  frontListAccountContacts(...args: FrontFullApiOperationArgs<"list-account-contacts">): Promise<FrontFullApiOperationResponseMap["list-account-contacts"]>;
  frontAddContactToAccount(...args: FrontFullApiOperationArgs<"add-contact-to-account">): Promise<FrontFullApiOperationResponseMap["add-contact-to-account"]>;
}

export const FrontFullApiAccountsGeneratedFunctionNames = [
  "frontListAccounts",
  "frontCreateAccount",
  "frontDeleteAnAccount",
  "frontFetchAnAccount",
  "frontUpdateAccount",
  "frontRemoveContactFromAccount",
  "frontListAccountContacts",
  "frontAddContactToAccount"
] as const satisfies readonly (keyof FrontFullApiAccountsGeneratedClient)[];

export function createFrontFullApiAccountsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiAccountsGeneratedClient {
  return {
    frontListAccounts: (...args) => callOperation("list-accounts", ...(args as FrontFullApiOperationArgs<"list-accounts">)),
    frontCreateAccount: (...args) => callOperation("create-account", ...(args as FrontFullApiOperationArgs<"create-account">)),
    frontDeleteAnAccount: (...args) => callOperation("delete-an-account", ...(args as FrontFullApiOperationArgs<"delete-an-account">)),
    frontFetchAnAccount: (...args) => callOperation("fetch-an-account", ...(args as FrontFullApiOperationArgs<"fetch-an-account">)),
    frontUpdateAccount: (...args) => callOperation("update-account", ...(args as FrontFullApiOperationArgs<"update-account">)),
    frontRemoveContactFromAccount: (...args) => callOperation("remove-contact-from-account", ...(args as FrontFullApiOperationArgs<"remove-contact-from-account">)),
    frontListAccountContacts: (...args) => callOperation("list-account-contacts", ...(args as FrontFullApiOperationArgs<"list-account-contacts">)),
    frontAddContactToAccount: (...args) => callOperation("add-contact-to-account", ...(args as FrontFullApiOperationArgs<"add-contact-to-account">)),
  };
}
