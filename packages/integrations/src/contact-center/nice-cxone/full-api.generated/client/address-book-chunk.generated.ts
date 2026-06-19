// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiAddressBookOperationKeys = [
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books",
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books",
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}",
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned",
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned",
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment",
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries",
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries",
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}",
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries",
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries",
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries",
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}",
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books",
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books",
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books",
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books"
] as const;
export type NiceCxoneFullApiAddressBookOperationKey = typeof NiceCxoneFullApiAddressBookOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAddressBookOperationPathParamMap {
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books": {};
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books": {};
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}": { "addressBookId": NiceCxoneFullApiPathParamValue; "externalId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries": { "addressBookId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}": { "addressBookId": NiceCxoneFullApiPathParamValue; "addressBookEntryId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books": { "campaignId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books": { "skillId": NiceCxoneFullApiPathParamValue };
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books": { "teamId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiAddressBookOperationRequestMap {
  "admin-addressbook-api-docs:getAddressBooks:GET:/address-books": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:getAddressBooks:GET:/address-books">;
  "admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books">;
  "admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}">;
  "admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned">;
  "admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned">;
  "admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment">;
  "admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries">;
  "admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries">;
  "admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}">;
  "admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries">;
  "admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries">;
  "admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries">;
  "admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}">;
  "admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books">;
  "admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books">;
  "admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books">;
  "admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books": NiceCxoneFullApiOperationInput<"admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books">;
}

export interface NiceCxoneFullApiAddressBookGeneratedClient {
  AdminAddressbookApiDocsGetAddressBooks(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:getAddressBooks:GET:/address-books">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:getAddressBooks:GET:/address-books"]>;
  AdminAddressbookApiDocsCreateAddressBookv4(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books"]>;
  AdminAddressbookApiDocsDeleteAddressbook(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}"]>;
  AdminAddressbookApiDocsGetAddressBooksIdAgentsAssigned(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned"]>;
  AdminAddressbookApiDocsGetAddressBooksIdAgentsUnassigned(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned"]>;
  AdminAddressbookApiDocsAddressBookAssignmentV4(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment"]>;
  AdminAddressbookApiDocsGetAddressBooksIdDynamicEntries(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries"]>;
  AdminAddressbookApiDocsCreateOrUpdateDynamicAddressbook(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries"]>;
  AdminAddressbookApiDocsDeleteDynamicAddressBookEntry(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}"]>;
  AdminAddressbookApiDocsGetAddressBooksIdEntries(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries"]>;
  AdminAddressbookApiDocsCreateAddressBookEntries(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries"]>;
  AdminAddressbookApiDocsUpdateAddressBookEntries(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries"]>;
  AdminAddressbookApiDocsDeleteAddressBookEntry(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}"]>;
  AdminAddressbookApiDocsAddressBookListForAnAgent(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books"]>;
  AdminAddressbookApiDocsAddressBookForCampaign(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books"]>;
  AdminAddressbookApiDocsAddressBookForSkill(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books"]>;
  AdminAddressbookApiDocsAddressBooksTeam(...args: NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books">): Promise<NiceCxoneFullApiOperationResponseMap["admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books"]>;
}

export const NiceCxoneFullApiAddressBookGeneratedFunctionNames = [
  "AdminAddressbookApiDocsGetAddressBooks",
  "AdminAddressbookApiDocsCreateAddressBookv4",
  "AdminAddressbookApiDocsDeleteAddressbook",
  "AdminAddressbookApiDocsGetAddressBooksIdAgentsAssigned",
  "AdminAddressbookApiDocsGetAddressBooksIdAgentsUnassigned",
  "AdminAddressbookApiDocsAddressBookAssignmentV4",
  "AdminAddressbookApiDocsGetAddressBooksIdDynamicEntries",
  "AdminAddressbookApiDocsCreateOrUpdateDynamicAddressbook",
  "AdminAddressbookApiDocsDeleteDynamicAddressBookEntry",
  "AdminAddressbookApiDocsGetAddressBooksIdEntries",
  "AdminAddressbookApiDocsCreateAddressBookEntries",
  "AdminAddressbookApiDocsUpdateAddressBookEntries",
  "AdminAddressbookApiDocsDeleteAddressBookEntry",
  "AdminAddressbookApiDocsAddressBookListForAnAgent",
  "AdminAddressbookApiDocsAddressBookForCampaign",
  "AdminAddressbookApiDocsAddressBookForSkill",
  "AdminAddressbookApiDocsAddressBooksTeam"
] as const satisfies readonly (keyof NiceCxoneFullApiAddressBookGeneratedClient)[];

export function createNiceCxoneFullApiAddressBookGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAddressBookGeneratedClient {
  return {
    AdminAddressbookApiDocsGetAddressBooks: (...args) => callOperation("admin-addressbook-api-docs:getAddressBooks:GET:/address-books", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:getAddressBooks:GET:/address-books">)),
    AdminAddressbookApiDocsCreateAddressBookv4: (...args) => callOperation("admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:CreateAddressBookv4:POST:/address-books">)),
    AdminAddressbookApiDocsDeleteAddressbook: (...args) => callOperation("admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:DeleteAddressbook:DELETE:/address-books/{addressBookId}">)),
    AdminAddressbookApiDocsGetAddressBooksIdAgentsAssigned: (...args) => callOperation("admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-agents-assigned:GET:/address-books/{addressBookId}/agents/assigned">)),
    AdminAddressbookApiDocsGetAddressBooksIdAgentsUnassigned: (...args) => callOperation("admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-agents-unassigned:GET:/address-books/{addressBookId}/agents/unassigned">)),
    AdminAddressbookApiDocsAddressBookAssignmentV4: (...args) => callOperation("admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookAssignmentV4:POST:/address-books/{addressBookId}/assignment">)),
    AdminAddressbookApiDocsGetAddressBooksIdDynamicEntries: (...args) => callOperation("admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-dynamic-entries:GET:/address-books/{addressBookId}/dynamic-entries">)),
    AdminAddressbookApiDocsCreateOrUpdateDynamicAddressbook: (...args) => callOperation("admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:CreateOrUpdateDynamicAddressbook:PUT:/address-books/{addressBookId}/dynamic-entries">)),
    AdminAddressbookApiDocsDeleteDynamicAddressBookEntry: (...args) => callOperation("admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:DeleteDynamicAddressBookEntry:DELETE:/address-books/{addressBookId}/dynamic-entries/{externalId}">)),
    AdminAddressbookApiDocsGetAddressBooksIdEntries: (...args) => callOperation("admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:get-address-books-id-entries:GET:/address-books/{addressBookId}/entries">)),
    AdminAddressbookApiDocsCreateAddressBookEntries: (...args) => callOperation("admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:CreateAddressBookEntries:POST:/address-books/{addressBookId}/entries">)),
    AdminAddressbookApiDocsUpdateAddressBookEntries: (...args) => callOperation("admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:UpdateAddressBookEntries:PUT:/address-books/{addressBookId}/entries">)),
    AdminAddressbookApiDocsDeleteAddressBookEntry: (...args) => callOperation("admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:DeleteAddressBookEntry:DELETE:/address-books/{addressBookId}/entries/{addressBookEntryId}">)),
    AdminAddressbookApiDocsAddressBookListForAnAgent: (...args) => callOperation("admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookListForAnAgent:GET:/agents/{agentId}/address-books">)),
    AdminAddressbookApiDocsAddressBookForCampaign: (...args) => callOperation("admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookForCampaign:GET:/campaigns/{campaignId}/address-books">)),
    AdminAddressbookApiDocsAddressBookForSkill: (...args) => callOperation("admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBookForSkill:GET:/skills/{skillId}/address-books">)),
    AdminAddressbookApiDocsAddressBooksTeam: (...args) => callOperation("admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books", ...(args as NiceCxoneFullApiOperationArgs<"admin-addressbook-api-docs:AddressBooksTeam:GET:/teams/{teamId}/address-books">)),
  };
}
