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
export const ZendeskFullApiSupportAddressesOperationKeys = [
  "CreateSupportAddress",
  "DeleteRecipientAddress",
  "ListSupportAddresses",
  "ShowSupportAddress",
  "UpdateSupportAddress",
  "VerifySupportAddressForwarding"
] as const;
export type ZendeskFullApiSupportAddressesOperationKey = typeof ZendeskFullApiSupportAddressesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSupportAddressesOperationPathParamMap {
  "CreateSupportAddress": {};
  "DeleteRecipientAddress": { "support_address_id": ZendeskFullApiPathParamValue };
  "ListSupportAddresses": {};
  "ShowSupportAddress": { "support_address_id": ZendeskFullApiPathParamValue };
  "UpdateSupportAddress": { "support_address_id": ZendeskFullApiPathParamValue };
  "VerifySupportAddressForwarding": { "support_address_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiSupportAddressesOperationRequestMap {
  "CreateSupportAddress": ZendeskFullApiOperationInput<"CreateSupportAddress">;
  "DeleteRecipientAddress": ZendeskFullApiOperationInput<"DeleteRecipientAddress">;
  "ListSupportAddresses": ZendeskFullApiOperationInput<"ListSupportAddresses">;
  "ShowSupportAddress": ZendeskFullApiOperationInput<"ShowSupportAddress">;
  "UpdateSupportAddress": ZendeskFullApiOperationInput<"UpdateSupportAddress">;
  "VerifySupportAddressForwarding": ZendeskFullApiOperationInput<"VerifySupportAddressForwarding">;
}

export interface ZendeskFullApiSupportAddressesGeneratedClient {
  CreateSupportAddress(...args: ZendeskFullApiOperationArgs<"CreateSupportAddress">): Promise<ZendeskFullApiOperationResponseMap["CreateSupportAddress"]>;
  DeleteRecipientAddress(...args: ZendeskFullApiOperationArgs<"DeleteRecipientAddress">): Promise<ZendeskFullApiOperationResponseMap["DeleteRecipientAddress"]>;
  ListSupportAddresses(...args: ZendeskFullApiOperationArgs<"ListSupportAddresses">): Promise<ZendeskFullApiOperationResponseMap["ListSupportAddresses"]>;
  ShowSupportAddress(...args: ZendeskFullApiOperationArgs<"ShowSupportAddress">): Promise<ZendeskFullApiOperationResponseMap["ShowSupportAddress"]>;
  UpdateSupportAddress(...args: ZendeskFullApiOperationArgs<"UpdateSupportAddress">): Promise<ZendeskFullApiOperationResponseMap["UpdateSupportAddress"]>;
  VerifySupportAddressForwarding(...args: ZendeskFullApiOperationArgs<"VerifySupportAddressForwarding">): Promise<ZendeskFullApiOperationResponseMap["VerifySupportAddressForwarding"]>;
}

export const ZendeskFullApiSupportAddressesGeneratedFunctionNames = [
  "CreateSupportAddress",
  "DeleteRecipientAddress",
  "ListSupportAddresses",
  "ShowSupportAddress",
  "UpdateSupportAddress",
  "VerifySupportAddressForwarding"
] as const satisfies readonly (keyof ZendeskFullApiSupportAddressesGeneratedClient)[];

export function createZendeskFullApiSupportAddressesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSupportAddressesGeneratedClient {
  return {
    CreateSupportAddress: (...args) => callOperation("CreateSupportAddress", ...(args as ZendeskFullApiOperationArgs<"CreateSupportAddress">)),
    DeleteRecipientAddress: (...args) => callOperation("DeleteRecipientAddress", ...(args as ZendeskFullApiOperationArgs<"DeleteRecipientAddress">)),
    ListSupportAddresses: (...args) => callOperation("ListSupportAddresses", ...(args as ZendeskFullApiOperationArgs<"ListSupportAddresses">)),
    ShowSupportAddress: (...args) => callOperation("ShowSupportAddress", ...(args as ZendeskFullApiOperationArgs<"ShowSupportAddress">)),
    UpdateSupportAddress: (...args) => callOperation("UpdateSupportAddress", ...(args as ZendeskFullApiOperationArgs<"UpdateSupportAddress">)),
    VerifySupportAddressForwarding: (...args) => callOperation("VerifySupportAddressForwarding", ...(args as ZendeskFullApiOperationArgs<"VerifySupportAddressForwarding">)),
  };
}
