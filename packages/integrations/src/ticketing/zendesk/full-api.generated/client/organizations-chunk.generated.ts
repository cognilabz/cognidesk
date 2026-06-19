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
export const ZendeskFullApiOrganizationsOperationKeys = [
  "AutocompleteOrganizations",
  "CountOrganizations",
  "CountUserOrganizations",
  "CreateManyOrganizations",
  "CreateOrganization",
  "CreateOrganizationMerge",
  "CreateOrUpdateOrganization",
  "DeleteManyOrganizations",
  "DeleteOrganization",
  "ListOrganizationMerges",
  "ListOrganizations",
  "ListUserOrganizations",
  "OrganizationRelated",
  "SearchOrganizations",
  "ShowManyOrganizations",
  "ShowOrganization",
  "ShowOrganizationMerge",
  "UpdateManyOrganizations",
  "UpdateOrganization"
] as const;
export type ZendeskFullApiOrganizationsOperationKey = typeof ZendeskFullApiOrganizationsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiOrganizationsOperationPathParamMap {
  "AutocompleteOrganizations": {};
  "CountOrganizations": {};
  "CountUserOrganizations": { "user_id": ZendeskFullApiPathParamValue };
  "CreateManyOrganizations": {};
  "CreateOrganization": {};
  "CreateOrganizationMerge": { "organization_id": ZendeskFullApiPathParamValue };
  "CreateOrUpdateOrganization": {};
  "DeleteManyOrganizations": {};
  "DeleteOrganization": { "organization_id": ZendeskFullApiPathParamValue };
  "ListOrganizationMerges": { "organization_id": ZendeskFullApiPathParamValue };
  "ListOrganizations": {};
  "ListUserOrganizations": { "user_id": ZendeskFullApiPathParamValue };
  "OrganizationRelated": { "organization_id": ZendeskFullApiPathParamValue };
  "SearchOrganizations": {};
  "ShowManyOrganizations": {};
  "ShowOrganization": { "organization_id": ZendeskFullApiPathParamValue };
  "ShowOrganizationMerge": { "organization_merge_id": ZendeskFullApiPathParamValue };
  "UpdateManyOrganizations": {};
  "UpdateOrganization": { "organization_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiOrganizationsOperationRequestMap {
  "AutocompleteOrganizations": ZendeskFullApiOperationInput<"AutocompleteOrganizations">;
  "CountOrganizations": ZendeskFullApiOperationInput<"CountOrganizations">;
  "CountUserOrganizations": ZendeskFullApiOperationInput<"CountUserOrganizations">;
  "CreateManyOrganizations": ZendeskFullApiOperationInput<"CreateManyOrganizations">;
  "CreateOrganization": ZendeskFullApiOperationInput<"CreateOrganization">;
  "CreateOrganizationMerge": ZendeskFullApiOperationInput<"CreateOrganizationMerge">;
  "CreateOrUpdateOrganization": ZendeskFullApiOperationInput<"CreateOrUpdateOrganization">;
  "DeleteManyOrganizations": ZendeskFullApiOperationInput<"DeleteManyOrganizations">;
  "DeleteOrganization": ZendeskFullApiOperationInput<"DeleteOrganization">;
  "ListOrganizationMerges": ZendeskFullApiOperationInput<"ListOrganizationMerges">;
  "ListOrganizations": ZendeskFullApiOperationInput<"ListOrganizations">;
  "ListUserOrganizations": ZendeskFullApiOperationInput<"ListUserOrganizations">;
  "OrganizationRelated": ZendeskFullApiOperationInput<"OrganizationRelated">;
  "SearchOrganizations": ZendeskFullApiOperationInput<"SearchOrganizations">;
  "ShowManyOrganizations": ZendeskFullApiOperationInput<"ShowManyOrganizations">;
  "ShowOrganization": ZendeskFullApiOperationInput<"ShowOrganization">;
  "ShowOrganizationMerge": ZendeskFullApiOperationInput<"ShowOrganizationMerge">;
  "UpdateManyOrganizations": ZendeskFullApiOperationInput<"UpdateManyOrganizations">;
  "UpdateOrganization": ZendeskFullApiOperationInput<"UpdateOrganization">;
}

export interface ZendeskFullApiOrganizationsGeneratedClient {
  AutocompleteOrganizations(...args: ZendeskFullApiOperationArgs<"AutocompleteOrganizations">): Promise<ZendeskFullApiOperationResponseMap["AutocompleteOrganizations"]>;
  CountOrganizations(...args: ZendeskFullApiOperationArgs<"CountOrganizations">): Promise<ZendeskFullApiOperationResponseMap["CountOrganizations"]>;
  CountUserOrganizations(...args: ZendeskFullApiOperationArgs<"CountUserOrganizations">): Promise<ZendeskFullApiOperationResponseMap["CountUserOrganizations"]>;
  CreateManyOrganizations(...args: ZendeskFullApiOperationArgs<"CreateManyOrganizations">): Promise<ZendeskFullApiOperationResponseMap["CreateManyOrganizations"]>;
  CreateOrganization(...args: ZendeskFullApiOperationArgs<"CreateOrganization">): Promise<ZendeskFullApiOperationResponseMap["CreateOrganization"]>;
  CreateOrganizationMerge(...args: ZendeskFullApiOperationArgs<"CreateOrganizationMerge">): Promise<ZendeskFullApiOperationResponseMap["CreateOrganizationMerge"]>;
  CreateOrUpdateOrganization(...args: ZendeskFullApiOperationArgs<"CreateOrUpdateOrganization">): Promise<ZendeskFullApiOperationResponseMap["CreateOrUpdateOrganization"]>;
  DeleteManyOrganizations(...args: ZendeskFullApiOperationArgs<"DeleteManyOrganizations">): Promise<ZendeskFullApiOperationResponseMap["DeleteManyOrganizations"]>;
  DeleteOrganization(...args: ZendeskFullApiOperationArgs<"DeleteOrganization">): Promise<ZendeskFullApiOperationResponseMap["DeleteOrganization"]>;
  ListOrganizationMerges(...args: ZendeskFullApiOperationArgs<"ListOrganizationMerges">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationMerges"]>;
  ListOrganizations(...args: ZendeskFullApiOperationArgs<"ListOrganizations">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizations"]>;
  ListUserOrganizations(...args: ZendeskFullApiOperationArgs<"ListUserOrganizations">): Promise<ZendeskFullApiOperationResponseMap["ListUserOrganizations"]>;
  OrganizationRelated(...args: ZendeskFullApiOperationArgs<"OrganizationRelated">): Promise<ZendeskFullApiOperationResponseMap["OrganizationRelated"]>;
  SearchOrganizations(...args: ZendeskFullApiOperationArgs<"SearchOrganizations">): Promise<ZendeskFullApiOperationResponseMap["SearchOrganizations"]>;
  ShowManyOrganizations(...args: ZendeskFullApiOperationArgs<"ShowManyOrganizations">): Promise<ZendeskFullApiOperationResponseMap["ShowManyOrganizations"]>;
  ShowOrganization(...args: ZendeskFullApiOperationArgs<"ShowOrganization">): Promise<ZendeskFullApiOperationResponseMap["ShowOrganization"]>;
  ShowOrganizationMerge(...args: ZendeskFullApiOperationArgs<"ShowOrganizationMerge">): Promise<ZendeskFullApiOperationResponseMap["ShowOrganizationMerge"]>;
  UpdateManyOrganizations(...args: ZendeskFullApiOperationArgs<"UpdateManyOrganizations">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyOrganizations"]>;
  UpdateOrganization(...args: ZendeskFullApiOperationArgs<"UpdateOrganization">): Promise<ZendeskFullApiOperationResponseMap["UpdateOrganization"]>;
}

export const ZendeskFullApiOrganizationsGeneratedFunctionNames = [
  "AutocompleteOrganizations",
  "CountOrganizations",
  "CountUserOrganizations",
  "CreateManyOrganizations",
  "CreateOrganization",
  "CreateOrganizationMerge",
  "CreateOrUpdateOrganization",
  "DeleteManyOrganizations",
  "DeleteOrganization",
  "ListOrganizationMerges",
  "ListOrganizations",
  "ListUserOrganizations",
  "OrganizationRelated",
  "SearchOrganizations",
  "ShowManyOrganizations",
  "ShowOrganization",
  "ShowOrganizationMerge",
  "UpdateManyOrganizations",
  "UpdateOrganization"
] as const satisfies readonly (keyof ZendeskFullApiOrganizationsGeneratedClient)[];

export function createZendeskFullApiOrganizationsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiOrganizationsGeneratedClient {
  return {
    AutocompleteOrganizations: (...args) => callOperation("AutocompleteOrganizations", ...(args as ZendeskFullApiOperationArgs<"AutocompleteOrganizations">)),
    CountOrganizations: (...args) => callOperation("CountOrganizations", ...(args as ZendeskFullApiOperationArgs<"CountOrganizations">)),
    CountUserOrganizations: (...args) => callOperation("CountUserOrganizations", ...(args as ZendeskFullApiOperationArgs<"CountUserOrganizations">)),
    CreateManyOrganizations: (...args) => callOperation("CreateManyOrganizations", ...(args as ZendeskFullApiOperationArgs<"CreateManyOrganizations">)),
    CreateOrganization: (...args) => callOperation("CreateOrganization", ...(args as ZendeskFullApiOperationArgs<"CreateOrganization">)),
    CreateOrganizationMerge: (...args) => callOperation("CreateOrganizationMerge", ...(args as ZendeskFullApiOperationArgs<"CreateOrganizationMerge">)),
    CreateOrUpdateOrganization: (...args) => callOperation("CreateOrUpdateOrganization", ...(args as ZendeskFullApiOperationArgs<"CreateOrUpdateOrganization">)),
    DeleteManyOrganizations: (...args) => callOperation("DeleteManyOrganizations", ...(args as ZendeskFullApiOperationArgs<"DeleteManyOrganizations">)),
    DeleteOrganization: (...args) => callOperation("DeleteOrganization", ...(args as ZendeskFullApiOperationArgs<"DeleteOrganization">)),
    ListOrganizationMerges: (...args) => callOperation("ListOrganizationMerges", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationMerges">)),
    ListOrganizations: (...args) => callOperation("ListOrganizations", ...(args as ZendeskFullApiOperationArgs<"ListOrganizations">)),
    ListUserOrganizations: (...args) => callOperation("ListUserOrganizations", ...(args as ZendeskFullApiOperationArgs<"ListUserOrganizations">)),
    OrganizationRelated: (...args) => callOperation("OrganizationRelated", ...(args as ZendeskFullApiOperationArgs<"OrganizationRelated">)),
    SearchOrganizations: (...args) => callOperation("SearchOrganizations", ...(args as ZendeskFullApiOperationArgs<"SearchOrganizations">)),
    ShowManyOrganizations: (...args) => callOperation("ShowManyOrganizations", ...(args as ZendeskFullApiOperationArgs<"ShowManyOrganizations">)),
    ShowOrganization: (...args) => callOperation("ShowOrganization", ...(args as ZendeskFullApiOperationArgs<"ShowOrganization">)),
    ShowOrganizationMerge: (...args) => callOperation("ShowOrganizationMerge", ...(args as ZendeskFullApiOperationArgs<"ShowOrganizationMerge">)),
    UpdateManyOrganizations: (...args) => callOperation("UpdateManyOrganizations", ...(args as ZendeskFullApiOperationArgs<"UpdateManyOrganizations">)),
    UpdateOrganization: (...args) => callOperation("UpdateOrganization", ...(args as ZendeskFullApiOperationArgs<"UpdateOrganization">)),
  };
}
