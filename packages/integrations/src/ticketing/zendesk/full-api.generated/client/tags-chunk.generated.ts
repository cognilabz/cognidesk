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
export const ZendeskFullApiTagsOperationKeys = [
  "AddOrganizationTags",
  "AutocompleteTags",
  "AutocompleteTagsPost",
  "CountTags",
  "DeleteTagsTicket",
  "DeleteUserTags",
  "ListOrganizationTags",
  "ListResourceTags",
  "ListTags",
  "ListUserTags",
  "PutTagsTicket",
  "PutUserTags",
  "RemoveOrganizationTags",
  "SetOrganizationTags",
  "SetTagsTicket",
  "SetUserTags"
] as const;
export type ZendeskFullApiTagsOperationKey = typeof ZendeskFullApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTagsOperationPathParamMap {
  "AddOrganizationTags": { "organization_id": ZendeskFullApiPathParamValue };
  "AutocompleteTags": {};
  "AutocompleteTagsPost": {};
  "CountTags": {};
  "DeleteTagsTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "DeleteUserTags": { "user_id": ZendeskFullApiPathParamValue };
  "ListOrganizationTags": { "organization_id": ZendeskFullApiPathParamValue };
  "ListResourceTags": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTags": {};
  "ListUserTags": { "user_id": ZendeskFullApiPathParamValue };
  "PutTagsTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "PutUserTags": { "user_id": ZendeskFullApiPathParamValue };
  "RemoveOrganizationTags": { "organization_id": ZendeskFullApiPathParamValue };
  "SetOrganizationTags": { "organization_id": ZendeskFullApiPathParamValue };
  "SetTagsTicket": { "ticket_id": ZendeskFullApiPathParamValue };
  "SetUserTags": { "user_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTagsOperationRequestMap {
  "AddOrganizationTags": ZendeskFullApiOperationInput<"AddOrganizationTags">;
  "AutocompleteTags": ZendeskFullApiOperationInput<"AutocompleteTags">;
  "AutocompleteTagsPost": ZendeskFullApiOperationInput<"AutocompleteTagsPost">;
  "CountTags": ZendeskFullApiOperationInput<"CountTags">;
  "DeleteTagsTicket": ZendeskFullApiOperationInput<"DeleteTagsTicket">;
  "DeleteUserTags": ZendeskFullApiOperationInput<"DeleteUserTags">;
  "ListOrganizationTags": ZendeskFullApiOperationInput<"ListOrganizationTags">;
  "ListResourceTags": ZendeskFullApiOperationInput<"ListResourceTags">;
  "ListTags": ZendeskFullApiOperationInput<"ListTags">;
  "ListUserTags": ZendeskFullApiOperationInput<"ListUserTags">;
  "PutTagsTicket": ZendeskFullApiOperationInput<"PutTagsTicket">;
  "PutUserTags": ZendeskFullApiOperationInput<"PutUserTags">;
  "RemoveOrganizationTags": ZendeskFullApiOperationInput<"RemoveOrganizationTags">;
  "SetOrganizationTags": ZendeskFullApiOperationInput<"SetOrganizationTags">;
  "SetTagsTicket": ZendeskFullApiOperationInput<"SetTagsTicket">;
  "SetUserTags": ZendeskFullApiOperationInput<"SetUserTags">;
}

export interface ZendeskFullApiTagsGeneratedClient {
  AddOrganizationTags(...args: ZendeskFullApiOperationArgs<"AddOrganizationTags">): Promise<ZendeskFullApiOperationResponseMap["AddOrganizationTags"]>;
  AutocompleteTags(...args: ZendeskFullApiOperationArgs<"AutocompleteTags">): Promise<ZendeskFullApiOperationResponseMap["AutocompleteTags"]>;
  AutocompleteTagsPost(...args: ZendeskFullApiOperationArgs<"AutocompleteTagsPost">): Promise<ZendeskFullApiOperationResponseMap["AutocompleteTagsPost"]>;
  CountTags(...args: ZendeskFullApiOperationArgs<"CountTags">): Promise<ZendeskFullApiOperationResponseMap["CountTags"]>;
  DeleteTagsTicket(...args: ZendeskFullApiOperationArgs<"DeleteTagsTicket">): Promise<ZendeskFullApiOperationResponseMap["DeleteTagsTicket"]>;
  DeleteUserTags(...args: ZendeskFullApiOperationArgs<"DeleteUserTags">): Promise<ZendeskFullApiOperationResponseMap["DeleteUserTags"]>;
  ListOrganizationTags(...args: ZendeskFullApiOperationArgs<"ListOrganizationTags">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationTags"]>;
  ListResourceTags(...args: ZendeskFullApiOperationArgs<"ListResourceTags">): Promise<ZendeskFullApiOperationResponseMap["ListResourceTags"]>;
  ListTags(...args: ZendeskFullApiOperationArgs<"ListTags">): Promise<ZendeskFullApiOperationResponseMap["ListTags"]>;
  ListUserTags(...args: ZendeskFullApiOperationArgs<"ListUserTags">): Promise<ZendeskFullApiOperationResponseMap["ListUserTags"]>;
  PutTagsTicket(...args: ZendeskFullApiOperationArgs<"PutTagsTicket">): Promise<ZendeskFullApiOperationResponseMap["PutTagsTicket"]>;
  PutUserTags(...args: ZendeskFullApiOperationArgs<"PutUserTags">): Promise<ZendeskFullApiOperationResponseMap["PutUserTags"]>;
  RemoveOrganizationTags(...args: ZendeskFullApiOperationArgs<"RemoveOrganizationTags">): Promise<ZendeskFullApiOperationResponseMap["RemoveOrganizationTags"]>;
  SetOrganizationTags(...args: ZendeskFullApiOperationArgs<"SetOrganizationTags">): Promise<ZendeskFullApiOperationResponseMap["SetOrganizationTags"]>;
  SetTagsTicket(...args: ZendeskFullApiOperationArgs<"SetTagsTicket">): Promise<ZendeskFullApiOperationResponseMap["SetTagsTicket"]>;
  SetUserTags(...args: ZendeskFullApiOperationArgs<"SetUserTags">): Promise<ZendeskFullApiOperationResponseMap["SetUserTags"]>;
}

export const ZendeskFullApiTagsGeneratedFunctionNames = [
  "AddOrganizationTags",
  "AutocompleteTags",
  "AutocompleteTagsPost",
  "CountTags",
  "DeleteTagsTicket",
  "DeleteUserTags",
  "ListOrganizationTags",
  "ListResourceTags",
  "ListTags",
  "ListUserTags",
  "PutTagsTicket",
  "PutUserTags",
  "RemoveOrganizationTags",
  "SetOrganizationTags",
  "SetTagsTicket",
  "SetUserTags"
] as const satisfies readonly (keyof ZendeskFullApiTagsGeneratedClient)[];

export function createZendeskFullApiTagsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTagsGeneratedClient {
  return {
    AddOrganizationTags: (...args) => callOperation("AddOrganizationTags", ...(args as ZendeskFullApiOperationArgs<"AddOrganizationTags">)),
    AutocompleteTags: (...args) => callOperation("AutocompleteTags", ...(args as ZendeskFullApiOperationArgs<"AutocompleteTags">)),
    AutocompleteTagsPost: (...args) => callOperation("AutocompleteTagsPost", ...(args as ZendeskFullApiOperationArgs<"AutocompleteTagsPost">)),
    CountTags: (...args) => callOperation("CountTags", ...(args as ZendeskFullApiOperationArgs<"CountTags">)),
    DeleteTagsTicket: (...args) => callOperation("DeleteTagsTicket", ...(args as ZendeskFullApiOperationArgs<"DeleteTagsTicket">)),
    DeleteUserTags: (...args) => callOperation("DeleteUserTags", ...(args as ZendeskFullApiOperationArgs<"DeleteUserTags">)),
    ListOrganizationTags: (...args) => callOperation("ListOrganizationTags", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationTags">)),
    ListResourceTags: (...args) => callOperation("ListResourceTags", ...(args as ZendeskFullApiOperationArgs<"ListResourceTags">)),
    ListTags: (...args) => callOperation("ListTags", ...(args as ZendeskFullApiOperationArgs<"ListTags">)),
    ListUserTags: (...args) => callOperation("ListUserTags", ...(args as ZendeskFullApiOperationArgs<"ListUserTags">)),
    PutTagsTicket: (...args) => callOperation("PutTagsTicket", ...(args as ZendeskFullApiOperationArgs<"PutTagsTicket">)),
    PutUserTags: (...args) => callOperation("PutUserTags", ...(args as ZendeskFullApiOperationArgs<"PutUserTags">)),
    RemoveOrganizationTags: (...args) => callOperation("RemoveOrganizationTags", ...(args as ZendeskFullApiOperationArgs<"RemoveOrganizationTags">)),
    SetOrganizationTags: (...args) => callOperation("SetOrganizationTags", ...(args as ZendeskFullApiOperationArgs<"SetOrganizationTags">)),
    SetTagsTicket: (...args) => callOperation("SetTagsTicket", ...(args as ZendeskFullApiOperationArgs<"SetTagsTicket">)),
    SetUserTags: (...args) => callOperation("SetUserTags", ...(args as ZendeskFullApiOperationArgs<"SetUserTags">)),
  };
}
