// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiSharingAgreementsOperationKeys = [
  "CreateSharingAgreement",
  "DeleteSharingAgreement",
  "ListSharingAgreements",
  "ShowSharingAgreement",
  "UpdateSharingAgreement"
] as const;
export type ZendeskFullApiSharingAgreementsOperationKey = typeof ZendeskFullApiSharingAgreementsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSharingAgreementsOperationPathParamMap {
  "CreateSharingAgreement": {};
  "DeleteSharingAgreement": { "sharing_agreement_id": ZendeskFullApiPathParamValue };
  "ListSharingAgreements": {};
  "ShowSharingAgreement": { "sharing_agreement_id": ZendeskFullApiPathParamValue };
  "UpdateSharingAgreement": { "sharing_agreement_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiSharingAgreementsOperationRequestMap {
  "CreateSharingAgreement": ZendeskFullApiOperationInput<"CreateSharingAgreement">;
  "DeleteSharingAgreement": ZendeskFullApiOperationInput<"DeleteSharingAgreement">;
  "ListSharingAgreements": ZendeskFullApiOperationInput<"ListSharingAgreements">;
  "ShowSharingAgreement": ZendeskFullApiOperationInput<"ShowSharingAgreement">;
  "UpdateSharingAgreement": ZendeskFullApiOperationInput<"UpdateSharingAgreement">;
}

export interface ZendeskFullApiSharingAgreementsGeneratedClient {
  CreateSharingAgreement(...args: ZendeskFullApiOperationArgs<"CreateSharingAgreement">): Promise<ZendeskFullApiOperationResponseMap["CreateSharingAgreement"]>;
  DeleteSharingAgreement(...args: ZendeskFullApiOperationArgs<"DeleteSharingAgreement">): Promise<ZendeskFullApiOperationResponseMap["DeleteSharingAgreement"]>;
  ListSharingAgreements(...args: ZendeskFullApiOperationArgs<"ListSharingAgreements">): Promise<ZendeskFullApiOperationResponseMap["ListSharingAgreements"]>;
  ShowSharingAgreement(...args: ZendeskFullApiOperationArgs<"ShowSharingAgreement">): Promise<ZendeskFullApiOperationResponseMap["ShowSharingAgreement"]>;
  UpdateSharingAgreement(...args: ZendeskFullApiOperationArgs<"UpdateSharingAgreement">): Promise<ZendeskFullApiOperationResponseMap["UpdateSharingAgreement"]>;
}

export const ZendeskFullApiSharingAgreementsGeneratedFunctionNames = [
  "CreateSharingAgreement",
  "DeleteSharingAgreement",
  "ListSharingAgreements",
  "ShowSharingAgreement",
  "UpdateSharingAgreement"
] as const satisfies readonly (keyof ZendeskFullApiSharingAgreementsGeneratedClient)[];

export function createZendeskFullApiSharingAgreementsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSharingAgreementsGeneratedClient {
  return {
    CreateSharingAgreement: (...args) => callOperation("CreateSharingAgreement", ...(args as ZendeskFullApiOperationArgs<"CreateSharingAgreement">)),
    DeleteSharingAgreement: (...args) => callOperation("DeleteSharingAgreement", ...(args as ZendeskFullApiOperationArgs<"DeleteSharingAgreement">)),
    ListSharingAgreements: (...args) => callOperation("ListSharingAgreements", ...(args as ZendeskFullApiOperationArgs<"ListSharingAgreements">)),
    ShowSharingAgreement: (...args) => callOperation("ShowSharingAgreement", ...(args as ZendeskFullApiOperationArgs<"ShowSharingAgreement">)),
    UpdateSharingAgreement: (...args) => callOperation("UpdateSharingAgreement", ...(args as ZendeskFullApiOperationArgs<"UpdateSharingAgreement">)),
  };
}
