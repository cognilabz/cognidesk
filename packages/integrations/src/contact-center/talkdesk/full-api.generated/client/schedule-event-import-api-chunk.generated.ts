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
export const TalkdeskFullApiScheduleEventImportAPIOperationKeys = [
  "PostScheduleEventImport",
  "GetScheduleEventImport"
] as const;
export type TalkdeskFullApiScheduleEventImportAPIOperationKey = typeof TalkdeskFullApiScheduleEventImportAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiScheduleEventImportAPIOperationPathParamMap {
  "PostScheduleEventImport": {};
  "GetScheduleEventImport": { "import_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiScheduleEventImportAPIOperationRequestMap {
  "PostScheduleEventImport": TalkdeskFullApiOperationInput<"PostScheduleEventImport">;
  "GetScheduleEventImport": TalkdeskFullApiOperationInput<"GetScheduleEventImport">;
}

export interface TalkdeskFullApiScheduleEventImportAPIGeneratedClient {
  PostScheduleEventImport(...args: TalkdeskFullApiOperationArgs<"PostScheduleEventImport">): Promise<TalkdeskFullApiOperationResponseMap["PostScheduleEventImport"]>;
  GetScheduleEventImport(...args: TalkdeskFullApiOperationArgs<"GetScheduleEventImport">): Promise<TalkdeskFullApiOperationResponseMap["GetScheduleEventImport"]>;
}

export const TalkdeskFullApiScheduleEventImportAPIGeneratedFunctionNames = [
  "PostScheduleEventImport",
  "GetScheduleEventImport"
] as const satisfies readonly (keyof TalkdeskFullApiScheduleEventImportAPIGeneratedClient)[];

export function createTalkdeskFullApiScheduleEventImportAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiScheduleEventImportAPIGeneratedClient {
  return {
    PostScheduleEventImport: (...args) => callOperation("PostScheduleEventImport", ...(args as TalkdeskFullApiOperationArgs<"PostScheduleEventImport">)),
    GetScheduleEventImport: (...args) => callOperation("GetScheduleEventImport", ...(args as TalkdeskFullApiOperationArgs<"GetScheduleEventImport">)),
  };
}
