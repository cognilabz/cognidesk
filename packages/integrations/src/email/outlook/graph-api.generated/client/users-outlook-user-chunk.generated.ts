// Generated endpoint chunk for OutlookGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  OutlookGraphGeneratedOperationCaller,
  OutlookGraphOperationArgs,
  OutlookGraphOperationInput,
  OutlookGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { OutlookGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const OutlookGraphUsersOutlookUserOperationKeys = [
  "users.GetOutlook",
  "users.outlook.ListMasterCategories",
  "users.outlook.CreateMasterCategories",
  "users.outlook.GetMasterCategories",
  "users.outlook.UpdateMasterCategories",
  "users.outlook.DeleteMasterCategories",
  "users.outlook.masterCategories.GetCount-8560",
  "users.user.outlook.supportedLanguages",
  "users.user.outlook.supportedTimeZones-5c4f",
  "users.user.outlook.supportedTimeZones-0d20"
] as const;
export type OutlookGraphUsersOutlookUserOperationKey = typeof OutlookGraphUsersOutlookUserOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphUsersOutlookUserOperationPathParamMap {
  "users.GetOutlook": { "user-id": OutlookGraphPathParamValue };
  "users.outlook.ListMasterCategories": { "user-id": OutlookGraphPathParamValue };
  "users.outlook.CreateMasterCategories": { "user-id": OutlookGraphPathParamValue };
  "users.outlook.GetMasterCategories": { "user-id": OutlookGraphPathParamValue; "outlookCategory-id": OutlookGraphPathParamValue };
  "users.outlook.UpdateMasterCategories": { "user-id": OutlookGraphPathParamValue; "outlookCategory-id": OutlookGraphPathParamValue };
  "users.outlook.DeleteMasterCategories": { "user-id": OutlookGraphPathParamValue; "outlookCategory-id": OutlookGraphPathParamValue };
  "users.outlook.masterCategories.GetCount-8560": { "user-id": OutlookGraphPathParamValue };
  "users.user.outlook.supportedLanguages": { "user-id": OutlookGraphPathParamValue };
  "users.user.outlook.supportedTimeZones-5c4f": { "user-id": OutlookGraphPathParamValue };
  "users.user.outlook.supportedTimeZones-0d20": { "user-id": OutlookGraphPathParamValue; "TimeZoneStandard": OutlookGraphPathParamValue };
}

export interface OutlookGraphUsersOutlookUserOperationRequestMap {
  "users.GetOutlook": OutlookGraphOperationInput<"users.GetOutlook">;
  "users.outlook.ListMasterCategories": OutlookGraphOperationInput<"users.outlook.ListMasterCategories">;
  "users.outlook.CreateMasterCategories": OutlookGraphOperationInput<"users.outlook.CreateMasterCategories">;
  "users.outlook.GetMasterCategories": OutlookGraphOperationInput<"users.outlook.GetMasterCategories">;
  "users.outlook.UpdateMasterCategories": OutlookGraphOperationInput<"users.outlook.UpdateMasterCategories">;
  "users.outlook.DeleteMasterCategories": OutlookGraphOperationInput<"users.outlook.DeleteMasterCategories">;
  "users.outlook.masterCategories.GetCount-8560": OutlookGraphOperationInput<"users.outlook.masterCategories.GetCount-8560">;
  "users.user.outlook.supportedLanguages": OutlookGraphOperationInput<"users.user.outlook.supportedLanguages">;
  "users.user.outlook.supportedTimeZones-5c4f": OutlookGraphOperationInput<"users.user.outlook.supportedTimeZones-5c4f">;
  "users.user.outlook.supportedTimeZones-0d20": OutlookGraphOperationInput<"users.user.outlook.supportedTimeZones-0d20">;
}

export interface OutlookGraphUsersOutlookUserGeneratedClient {
  UsersGetOutlook(...args: OutlookGraphOperationArgs<"users.GetOutlook">): Promise<OutlookGraphOperationResponseMap["users.GetOutlook"]>;
  UsersOutlookListMasterCategories(...args: OutlookGraphOperationArgs<"users.outlook.ListMasterCategories">): Promise<OutlookGraphOperationResponseMap["users.outlook.ListMasterCategories"]>;
  UsersOutlookCreateMasterCategories(...args: OutlookGraphOperationArgs<"users.outlook.CreateMasterCategories">): Promise<OutlookGraphOperationResponseMap["users.outlook.CreateMasterCategories"]>;
  UsersOutlookGetMasterCategories(...args: OutlookGraphOperationArgs<"users.outlook.GetMasterCategories">): Promise<OutlookGraphOperationResponseMap["users.outlook.GetMasterCategories"]>;
  UsersOutlookUpdateMasterCategories(...args: OutlookGraphOperationArgs<"users.outlook.UpdateMasterCategories">): Promise<OutlookGraphOperationResponseMap["users.outlook.UpdateMasterCategories"]>;
  UsersOutlookDeleteMasterCategories(...args: OutlookGraphOperationArgs<"users.outlook.DeleteMasterCategories">): Promise<OutlookGraphOperationResponseMap["users.outlook.DeleteMasterCategories"]>;
  UsersOutlookMasterCategoriesGetCount8560(...args: OutlookGraphOperationArgs<"users.outlook.masterCategories.GetCount-8560">): Promise<OutlookGraphOperationResponseMap["users.outlook.masterCategories.GetCount-8560"]>;
  UsersUserOutlookSupportedLanguages(...args: OutlookGraphOperationArgs<"users.user.outlook.supportedLanguages">): Promise<OutlookGraphOperationResponseMap["users.user.outlook.supportedLanguages"]>;
  UsersUserOutlookSupportedTimeZones5c4f(...args: OutlookGraphOperationArgs<"users.user.outlook.supportedTimeZones-5c4f">): Promise<OutlookGraphOperationResponseMap["users.user.outlook.supportedTimeZones-5c4f"]>;
  UsersUserOutlookSupportedTimeZones0d20(...args: OutlookGraphOperationArgs<"users.user.outlook.supportedTimeZones-0d20">): Promise<OutlookGraphOperationResponseMap["users.user.outlook.supportedTimeZones-0d20"]>;
}

export const OutlookGraphUsersOutlookUserGeneratedFunctionNames = [
  "UsersGetOutlook",
  "UsersOutlookListMasterCategories",
  "UsersOutlookCreateMasterCategories",
  "UsersOutlookGetMasterCategories",
  "UsersOutlookUpdateMasterCategories",
  "UsersOutlookDeleteMasterCategories",
  "UsersOutlookMasterCategoriesGetCount8560",
  "UsersUserOutlookSupportedLanguages",
  "UsersUserOutlookSupportedTimeZones5c4f",
  "UsersUserOutlookSupportedTimeZones0d20"
] as const satisfies readonly (keyof OutlookGraphUsersOutlookUserGeneratedClient)[];

export function createOutlookGraphUsersOutlookUserGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphUsersOutlookUserGeneratedClient {
  return {
    UsersGetOutlook: (...args) => callOperation("users.GetOutlook", ...(args as OutlookGraphOperationArgs<"users.GetOutlook">)),
    UsersOutlookListMasterCategories: (...args) => callOperation("users.outlook.ListMasterCategories", ...(args as OutlookGraphOperationArgs<"users.outlook.ListMasterCategories">)),
    UsersOutlookCreateMasterCategories: (...args) => callOperation("users.outlook.CreateMasterCategories", ...(args as OutlookGraphOperationArgs<"users.outlook.CreateMasterCategories">)),
    UsersOutlookGetMasterCategories: (...args) => callOperation("users.outlook.GetMasterCategories", ...(args as OutlookGraphOperationArgs<"users.outlook.GetMasterCategories">)),
    UsersOutlookUpdateMasterCategories: (...args) => callOperation("users.outlook.UpdateMasterCategories", ...(args as OutlookGraphOperationArgs<"users.outlook.UpdateMasterCategories">)),
    UsersOutlookDeleteMasterCategories: (...args) => callOperation("users.outlook.DeleteMasterCategories", ...(args as OutlookGraphOperationArgs<"users.outlook.DeleteMasterCategories">)),
    UsersOutlookMasterCategoriesGetCount8560: (...args) => callOperation("users.outlook.masterCategories.GetCount-8560", ...(args as OutlookGraphOperationArgs<"users.outlook.masterCategories.GetCount-8560">)),
    UsersUserOutlookSupportedLanguages: (...args) => callOperation("users.user.outlook.supportedLanguages", ...(args as OutlookGraphOperationArgs<"users.user.outlook.supportedLanguages">)),
    UsersUserOutlookSupportedTimeZones5c4f: (...args) => callOperation("users.user.outlook.supportedTimeZones-5c4f", ...(args as OutlookGraphOperationArgs<"users.user.outlook.supportedTimeZones-5c4f">)),
    UsersUserOutlookSupportedTimeZones0d20: (...args) => callOperation("users.user.outlook.supportedTimeZones-0d20", ...(args as OutlookGraphOperationArgs<"users.user.outlook.supportedTimeZones-0d20">)),
  };
}
