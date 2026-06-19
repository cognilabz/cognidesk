// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiMacrosOperationKeys = [
  "list-macros",
  "create-macro",
  "delete-macro",
  "get-macro",
  "update-macro",
  "bulk-archive-macros",
  "bulk-unarchive-macros"
] as const;
export type GorgiasFullApiMacrosOperationKey = typeof GorgiasFullApiMacrosOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiMacrosOperationPathParamMap {
  "list-macros": {};
  "create-macro": {};
  "delete-macro": { "id": GorgiasFullApiPathParamValue };
  "get-macro": { "id": GorgiasFullApiPathParamValue };
  "update-macro": { "id": GorgiasFullApiPathParamValue };
  "bulk-archive-macros": {};
  "bulk-unarchive-macros": {};
}

export interface GorgiasFullApiMacrosOperationRequestMap {
  "list-macros": GorgiasFullApiOperationInput<"list-macros">;
  "create-macro": GorgiasFullApiOperationInput<"create-macro">;
  "delete-macro": GorgiasFullApiOperationInput<"delete-macro">;
  "get-macro": GorgiasFullApiOperationInput<"get-macro">;
  "update-macro": GorgiasFullApiOperationInput<"update-macro">;
  "bulk-archive-macros": GorgiasFullApiOperationInput<"bulk-archive-macros">;
  "bulk-unarchive-macros": GorgiasFullApiOperationInput<"bulk-unarchive-macros">;
}

export interface GorgiasFullApiMacrosGeneratedClient {
  gorgiasListMacros(...args: GorgiasFullApiOperationArgs<"list-macros">): Promise<GorgiasFullApiOperationResponseMap["list-macros"]>;
  gorgiasCreateMacro(...args: GorgiasFullApiOperationArgs<"create-macro">): Promise<GorgiasFullApiOperationResponseMap["create-macro"]>;
  gorgiasDeleteMacro(...args: GorgiasFullApiOperationArgs<"delete-macro">): Promise<GorgiasFullApiOperationResponseMap["delete-macro"]>;
  gorgiasGetMacro(...args: GorgiasFullApiOperationArgs<"get-macro">): Promise<GorgiasFullApiOperationResponseMap["get-macro"]>;
  gorgiasUpdateMacro(...args: GorgiasFullApiOperationArgs<"update-macro">): Promise<GorgiasFullApiOperationResponseMap["update-macro"]>;
  gorgiasBulkArchiveMacros(...args: GorgiasFullApiOperationArgs<"bulk-archive-macros">): Promise<GorgiasFullApiOperationResponseMap["bulk-archive-macros"]>;
  gorgiasBulkUnarchiveMacros(...args: GorgiasFullApiOperationArgs<"bulk-unarchive-macros">): Promise<GorgiasFullApiOperationResponseMap["bulk-unarchive-macros"]>;
}

export const GorgiasFullApiMacrosGeneratedFunctionNames = [
  "gorgiasListMacros",
  "gorgiasCreateMacro",
  "gorgiasDeleteMacro",
  "gorgiasGetMacro",
  "gorgiasUpdateMacro",
  "gorgiasBulkArchiveMacros",
  "gorgiasBulkUnarchiveMacros"
] as const satisfies readonly (keyof GorgiasFullApiMacrosGeneratedClient)[];

export function createGorgiasFullApiMacrosGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiMacrosGeneratedClient {
  return {
    gorgiasListMacros: (...args) => callOperation("list-macros", ...(args as GorgiasFullApiOperationArgs<"list-macros">)),
    gorgiasCreateMacro: (...args) => callOperation("create-macro", ...(args as GorgiasFullApiOperationArgs<"create-macro">)),
    gorgiasDeleteMacro: (...args) => callOperation("delete-macro", ...(args as GorgiasFullApiOperationArgs<"delete-macro">)),
    gorgiasGetMacro: (...args) => callOperation("get-macro", ...(args as GorgiasFullApiOperationArgs<"get-macro">)),
    gorgiasUpdateMacro: (...args) => callOperation("update-macro", ...(args as GorgiasFullApiOperationArgs<"update-macro">)),
    gorgiasBulkArchiveMacros: (...args) => callOperation("bulk-archive-macros", ...(args as GorgiasFullApiOperationArgs<"bulk-archive-macros">)),
    gorgiasBulkUnarchiveMacros: (...args) => callOperation("bulk-unarchive-macros", ...(args as GorgiasFullApiOperationArgs<"bulk-unarchive-macros">)),
  };
}
