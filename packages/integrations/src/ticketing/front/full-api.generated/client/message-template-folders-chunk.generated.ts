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
export const FrontFullApiMessageTemplateFoldersOperationKeys = [
  "list-folders",
  "create-folder",
  "delete-folder",
  "get-folder",
  "update-folder",
  "get-child-folders",
  "create-child-folder",
  "list-teammate-folders",
  "create-teammate-folder",
  "list-team-folders",
  "create-team-folder"
] as const;
export type FrontFullApiMessageTemplateFoldersOperationKey = typeof FrontFullApiMessageTemplateFoldersOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiMessageTemplateFoldersOperationPathParamMap {
  "list-folders": {};
  "create-folder": {};
  "delete-folder": { "message_template_folder_id": FrontFullApiPathParamValue };
  "get-folder": { "message_template_folder_id": FrontFullApiPathParamValue };
  "update-folder": { "message_template_folder_id": FrontFullApiPathParamValue };
  "get-child-folders": { "message_template_folder_id": FrontFullApiPathParamValue };
  "create-child-folder": { "message_template_folder_id": FrontFullApiPathParamValue };
  "list-teammate-folders": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-folder": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-folders": { "team_id": FrontFullApiPathParamValue };
  "create-team-folder": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiMessageTemplateFoldersOperationRequestMap {
  "list-folders": FrontFullApiOperationInput<"list-folders">;
  "create-folder": FrontFullApiOperationInput<"create-folder">;
  "delete-folder": FrontFullApiOperationInput<"delete-folder">;
  "get-folder": FrontFullApiOperationInput<"get-folder">;
  "update-folder": FrontFullApiOperationInput<"update-folder">;
  "get-child-folders": FrontFullApiOperationInput<"get-child-folders">;
  "create-child-folder": FrontFullApiOperationInput<"create-child-folder">;
  "list-teammate-folders": FrontFullApiOperationInput<"list-teammate-folders">;
  "create-teammate-folder": FrontFullApiOperationInput<"create-teammate-folder">;
  "list-team-folders": FrontFullApiOperationInput<"list-team-folders">;
  "create-team-folder": FrontFullApiOperationInput<"create-team-folder">;
}

export interface FrontFullApiMessageTemplateFoldersGeneratedClient {
  frontListFolders(...args: FrontFullApiOperationArgs<"list-folders">): Promise<FrontFullApiOperationResponseMap["list-folders"]>;
  frontCreateFolder(...args: FrontFullApiOperationArgs<"create-folder">): Promise<FrontFullApiOperationResponseMap["create-folder"]>;
  frontDeleteFolder(...args: FrontFullApiOperationArgs<"delete-folder">): Promise<FrontFullApiOperationResponseMap["delete-folder"]>;
  frontGetFolder(...args: FrontFullApiOperationArgs<"get-folder">): Promise<FrontFullApiOperationResponseMap["get-folder"]>;
  frontUpdateFolder(...args: FrontFullApiOperationArgs<"update-folder">): Promise<FrontFullApiOperationResponseMap["update-folder"]>;
  frontGetChildFolders(...args: FrontFullApiOperationArgs<"get-child-folders">): Promise<FrontFullApiOperationResponseMap["get-child-folders"]>;
  frontCreateChildFolder(...args: FrontFullApiOperationArgs<"create-child-folder">): Promise<FrontFullApiOperationResponseMap["create-child-folder"]>;
  frontListTeammateFolders(...args: FrontFullApiOperationArgs<"list-teammate-folders">): Promise<FrontFullApiOperationResponseMap["list-teammate-folders"]>;
  frontCreateTeammateFolder(...args: FrontFullApiOperationArgs<"create-teammate-folder">): Promise<FrontFullApiOperationResponseMap["create-teammate-folder"]>;
  frontListTeamFolders(...args: FrontFullApiOperationArgs<"list-team-folders">): Promise<FrontFullApiOperationResponseMap["list-team-folders"]>;
  frontCreateTeamFolder(...args: FrontFullApiOperationArgs<"create-team-folder">): Promise<FrontFullApiOperationResponseMap["create-team-folder"]>;
}

export const FrontFullApiMessageTemplateFoldersGeneratedFunctionNames = [
  "frontListFolders",
  "frontCreateFolder",
  "frontDeleteFolder",
  "frontGetFolder",
  "frontUpdateFolder",
  "frontGetChildFolders",
  "frontCreateChildFolder",
  "frontListTeammateFolders",
  "frontCreateTeammateFolder",
  "frontListTeamFolders",
  "frontCreateTeamFolder"
] as const satisfies readonly (keyof FrontFullApiMessageTemplateFoldersGeneratedClient)[];

export function createFrontFullApiMessageTemplateFoldersGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiMessageTemplateFoldersGeneratedClient {
  return {
    frontListFolders: (...args) => callOperation("list-folders", ...(args as FrontFullApiOperationArgs<"list-folders">)),
    frontCreateFolder: (...args) => callOperation("create-folder", ...(args as FrontFullApiOperationArgs<"create-folder">)),
    frontDeleteFolder: (...args) => callOperation("delete-folder", ...(args as FrontFullApiOperationArgs<"delete-folder">)),
    frontGetFolder: (...args) => callOperation("get-folder", ...(args as FrontFullApiOperationArgs<"get-folder">)),
    frontUpdateFolder: (...args) => callOperation("update-folder", ...(args as FrontFullApiOperationArgs<"update-folder">)),
    frontGetChildFolders: (...args) => callOperation("get-child-folders", ...(args as FrontFullApiOperationArgs<"get-child-folders">)),
    frontCreateChildFolder: (...args) => callOperation("create-child-folder", ...(args as FrontFullApiOperationArgs<"create-child-folder">)),
    frontListTeammateFolders: (...args) => callOperation("list-teammate-folders", ...(args as FrontFullApiOperationArgs<"list-teammate-folders">)),
    frontCreateTeammateFolder: (...args) => callOperation("create-teammate-folder", ...(args as FrontFullApiOperationArgs<"create-teammate-folder">)),
    frontListTeamFolders: (...args) => callOperation("list-team-folders", ...(args as FrontFullApiOperationArgs<"list-team-folders">)),
    frontCreateTeamFolder: (...args) => callOperation("create-team-folder", ...(args as FrontFullApiOperationArgs<"create-team-folder">)),
  };
}
