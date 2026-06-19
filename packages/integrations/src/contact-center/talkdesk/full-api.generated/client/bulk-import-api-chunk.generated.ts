// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiBulkImportAPIOperationKeys = [
  "bulk-imports-users-get",
  "bulk-imports-users-post",
  "bulk-imports-users-import-id-get",
  "bulk-imports-users-import-id-patch",
  "bulk-imports-users-import-id-errors-get",
  "bulk-imports-users-import-id-outputs-get"
] as const;
export type TalkdeskFullApiBulkImportAPIOperationKey = typeof TalkdeskFullApiBulkImportAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiBulkImportAPIOperationPathParamMap {
  "bulk-imports-users-get": {};
  "bulk-imports-users-post": {};
  "bulk-imports-users-import-id-get": { "import_id": TalkdeskFullApiPathParamValue };
  "bulk-imports-users-import-id-patch": { "import_id": TalkdeskFullApiPathParamValue };
  "bulk-imports-users-import-id-errors-get": { "import_id": TalkdeskFullApiPathParamValue };
  "bulk-imports-users-import-id-outputs-get": { "import_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiBulkImportAPIOperationRequestMap {
  "bulk-imports-users-get": TalkdeskFullApiOperationInput<"bulk-imports-users-get">;
  "bulk-imports-users-post": TalkdeskFullApiOperationInput<"bulk-imports-users-post">;
  "bulk-imports-users-import-id-get": TalkdeskFullApiOperationInput<"bulk-imports-users-import-id-get">;
  "bulk-imports-users-import-id-patch": TalkdeskFullApiOperationInput<"bulk-imports-users-import-id-patch">;
  "bulk-imports-users-import-id-errors-get": TalkdeskFullApiOperationInput<"bulk-imports-users-import-id-errors-get">;
  "bulk-imports-users-import-id-outputs-get": TalkdeskFullApiOperationInput<"bulk-imports-users-import-id-outputs-get">;
}

export interface TalkdeskFullApiBulkImportAPIGeneratedClient {
  BulkImportsUsersGet(...args: TalkdeskFullApiOperationArgs<"bulk-imports-users-get">): Promise<TalkdeskFullApiOperationResponseMap["bulk-imports-users-get"]>;
  BulkImportsUsersPost(...args: TalkdeskFullApiOperationArgs<"bulk-imports-users-post">): Promise<TalkdeskFullApiOperationResponseMap["bulk-imports-users-post"]>;
  BulkImportsUsersImportIdGet(...args: TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-get">): Promise<TalkdeskFullApiOperationResponseMap["bulk-imports-users-import-id-get"]>;
  BulkImportsUsersImportIdPatch(...args: TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["bulk-imports-users-import-id-patch"]>;
  BulkImportsUsersImportIdErrorsGet(...args: TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-errors-get">): Promise<TalkdeskFullApiOperationResponseMap["bulk-imports-users-import-id-errors-get"]>;
  BulkImportsUsersImportIdOutputsGet(...args: TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-outputs-get">): Promise<TalkdeskFullApiOperationResponseMap["bulk-imports-users-import-id-outputs-get"]>;
}

export const TalkdeskFullApiBulkImportAPIGeneratedFunctionNames = [
  "BulkImportsUsersGet",
  "BulkImportsUsersPost",
  "BulkImportsUsersImportIdGet",
  "BulkImportsUsersImportIdPatch",
  "BulkImportsUsersImportIdErrorsGet",
  "BulkImportsUsersImportIdOutputsGet"
] as const satisfies readonly (keyof TalkdeskFullApiBulkImportAPIGeneratedClient)[];

export function createTalkdeskFullApiBulkImportAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiBulkImportAPIGeneratedClient {
  return {
    BulkImportsUsersGet: (...args) => callOperation("bulk-imports-users-get", ...(args as TalkdeskFullApiOperationArgs<"bulk-imports-users-get">)),
    BulkImportsUsersPost: (...args) => callOperation("bulk-imports-users-post", ...(args as TalkdeskFullApiOperationArgs<"bulk-imports-users-post">)),
    BulkImportsUsersImportIdGet: (...args) => callOperation("bulk-imports-users-import-id-get", ...(args as TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-get">)),
    BulkImportsUsersImportIdPatch: (...args) => callOperation("bulk-imports-users-import-id-patch", ...(args as TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-patch">)),
    BulkImportsUsersImportIdErrorsGet: (...args) => callOperation("bulk-imports-users-import-id-errors-get", ...(args as TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-errors-get">)),
    BulkImportsUsersImportIdOutputsGet: (...args) => callOperation("bulk-imports-users-import-id-outputs-get", ...(args as TalkdeskFullApiOperationArgs<"bulk-imports-users-import-id-outputs-get">)),
  };
}
