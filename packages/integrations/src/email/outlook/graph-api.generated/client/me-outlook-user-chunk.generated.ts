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
export const OutlookGraphMeOutlookUserOperationKeys = [
  "me.GetOutlook",
  "me.outlook.ListMasterCategories",
  "me.outlook.CreateMasterCategories",
  "me.outlook.GetMasterCategories",
  "me.outlook.UpdateMasterCategories",
  "me.outlook.DeleteMasterCategories",
  "me.outlook.masterCategories.GetCount-7754",
  "me.outlook.supportedLanguages",
  "me.outlook.supportedTimeZones-5c4f",
  "me.outlook.supportedTimeZones-0d20"
] as const;
export type OutlookGraphMeOutlookUserOperationKey = typeof OutlookGraphMeOutlookUserOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphMeOutlookUserOperationPathParamMap {
  "me.GetOutlook": {};
  "me.outlook.ListMasterCategories": {};
  "me.outlook.CreateMasterCategories": {};
  "me.outlook.GetMasterCategories": { "outlookCategory-id": OutlookGraphPathParamValue };
  "me.outlook.UpdateMasterCategories": { "outlookCategory-id": OutlookGraphPathParamValue };
  "me.outlook.DeleteMasterCategories": { "outlookCategory-id": OutlookGraphPathParamValue };
  "me.outlook.masterCategories.GetCount-7754": {};
  "me.outlook.supportedLanguages": {};
  "me.outlook.supportedTimeZones-5c4f": {};
  "me.outlook.supportedTimeZones-0d20": { "TimeZoneStandard": OutlookGraphPathParamValue };
}

export interface OutlookGraphMeOutlookUserOperationRequestMap {
  "me.GetOutlook": OutlookGraphOperationInput<"me.GetOutlook">;
  "me.outlook.ListMasterCategories": OutlookGraphOperationInput<"me.outlook.ListMasterCategories">;
  "me.outlook.CreateMasterCategories": OutlookGraphOperationInput<"me.outlook.CreateMasterCategories">;
  "me.outlook.GetMasterCategories": OutlookGraphOperationInput<"me.outlook.GetMasterCategories">;
  "me.outlook.UpdateMasterCategories": OutlookGraphOperationInput<"me.outlook.UpdateMasterCategories">;
  "me.outlook.DeleteMasterCategories": OutlookGraphOperationInput<"me.outlook.DeleteMasterCategories">;
  "me.outlook.masterCategories.GetCount-7754": OutlookGraphOperationInput<"me.outlook.masterCategories.GetCount-7754">;
  "me.outlook.supportedLanguages": OutlookGraphOperationInput<"me.outlook.supportedLanguages">;
  "me.outlook.supportedTimeZones-5c4f": OutlookGraphOperationInput<"me.outlook.supportedTimeZones-5c4f">;
  "me.outlook.supportedTimeZones-0d20": OutlookGraphOperationInput<"me.outlook.supportedTimeZones-0d20">;
}

export interface OutlookGraphMeOutlookUserGeneratedClient {
  MeGetOutlook(...args: OutlookGraphOperationArgs<"me.GetOutlook">): Promise<OutlookGraphOperationResponseMap["me.GetOutlook"]>;
  MeOutlookListMasterCategories(...args: OutlookGraphOperationArgs<"me.outlook.ListMasterCategories">): Promise<OutlookGraphOperationResponseMap["me.outlook.ListMasterCategories"]>;
  MeOutlookCreateMasterCategories(...args: OutlookGraphOperationArgs<"me.outlook.CreateMasterCategories">): Promise<OutlookGraphOperationResponseMap["me.outlook.CreateMasterCategories"]>;
  MeOutlookGetMasterCategories(...args: OutlookGraphOperationArgs<"me.outlook.GetMasterCategories">): Promise<OutlookGraphOperationResponseMap["me.outlook.GetMasterCategories"]>;
  MeOutlookUpdateMasterCategories(...args: OutlookGraphOperationArgs<"me.outlook.UpdateMasterCategories">): Promise<OutlookGraphOperationResponseMap["me.outlook.UpdateMasterCategories"]>;
  MeOutlookDeleteMasterCategories(...args: OutlookGraphOperationArgs<"me.outlook.DeleteMasterCategories">): Promise<OutlookGraphOperationResponseMap["me.outlook.DeleteMasterCategories"]>;
  MeOutlookMasterCategoriesGetCount7754(...args: OutlookGraphOperationArgs<"me.outlook.masterCategories.GetCount-7754">): Promise<OutlookGraphOperationResponseMap["me.outlook.masterCategories.GetCount-7754"]>;
  MeOutlookSupportedLanguages(...args: OutlookGraphOperationArgs<"me.outlook.supportedLanguages">): Promise<OutlookGraphOperationResponseMap["me.outlook.supportedLanguages"]>;
  MeOutlookSupportedTimeZones5c4f(...args: OutlookGraphOperationArgs<"me.outlook.supportedTimeZones-5c4f">): Promise<OutlookGraphOperationResponseMap["me.outlook.supportedTimeZones-5c4f"]>;
  MeOutlookSupportedTimeZones0d20(...args: OutlookGraphOperationArgs<"me.outlook.supportedTimeZones-0d20">): Promise<OutlookGraphOperationResponseMap["me.outlook.supportedTimeZones-0d20"]>;
}

export const OutlookGraphMeOutlookUserGeneratedFunctionNames = [
  "MeGetOutlook",
  "MeOutlookListMasterCategories",
  "MeOutlookCreateMasterCategories",
  "MeOutlookGetMasterCategories",
  "MeOutlookUpdateMasterCategories",
  "MeOutlookDeleteMasterCategories",
  "MeOutlookMasterCategoriesGetCount7754",
  "MeOutlookSupportedLanguages",
  "MeOutlookSupportedTimeZones5c4f",
  "MeOutlookSupportedTimeZones0d20"
] as const satisfies readonly (keyof OutlookGraphMeOutlookUserGeneratedClient)[];

export function createOutlookGraphMeOutlookUserGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphMeOutlookUserGeneratedClient {
  return {
    MeGetOutlook: (...args) => callOperation("me.GetOutlook", ...(args as OutlookGraphOperationArgs<"me.GetOutlook">)),
    MeOutlookListMasterCategories: (...args) => callOperation("me.outlook.ListMasterCategories", ...(args as OutlookGraphOperationArgs<"me.outlook.ListMasterCategories">)),
    MeOutlookCreateMasterCategories: (...args) => callOperation("me.outlook.CreateMasterCategories", ...(args as OutlookGraphOperationArgs<"me.outlook.CreateMasterCategories">)),
    MeOutlookGetMasterCategories: (...args) => callOperation("me.outlook.GetMasterCategories", ...(args as OutlookGraphOperationArgs<"me.outlook.GetMasterCategories">)),
    MeOutlookUpdateMasterCategories: (...args) => callOperation("me.outlook.UpdateMasterCategories", ...(args as OutlookGraphOperationArgs<"me.outlook.UpdateMasterCategories">)),
    MeOutlookDeleteMasterCategories: (...args) => callOperation("me.outlook.DeleteMasterCategories", ...(args as OutlookGraphOperationArgs<"me.outlook.DeleteMasterCategories">)),
    MeOutlookMasterCategoriesGetCount7754: (...args) => callOperation("me.outlook.masterCategories.GetCount-7754", ...(args as OutlookGraphOperationArgs<"me.outlook.masterCategories.GetCount-7754">)),
    MeOutlookSupportedLanguages: (...args) => callOperation("me.outlook.supportedLanguages", ...(args as OutlookGraphOperationArgs<"me.outlook.supportedLanguages">)),
    MeOutlookSupportedTimeZones5c4f: (...args) => callOperation("me.outlook.supportedTimeZones-5c4f", ...(args as OutlookGraphOperationArgs<"me.outlook.supportedTimeZones-5c4f">)),
    MeOutlookSupportedTimeZones0d20: (...args) => callOperation("me.outlook.supportedTimeZones-0d20", ...(args as OutlookGraphOperationArgs<"me.outlook.supportedTimeZones-0d20">)),
  };
}
