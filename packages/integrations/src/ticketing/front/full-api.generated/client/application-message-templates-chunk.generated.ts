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
export const FrontFullApiApplicationMessageTemplatesOperationKeys = [
  "sync-application-message-template",
  "update-application-message-template"
] as const;
export type FrontFullApiApplicationMessageTemplatesOperationKey = typeof FrontFullApiApplicationMessageTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiApplicationMessageTemplatesOperationPathParamMap {
  "sync-application-message-template": { "channel_id": FrontFullApiPathParamValue };
  "update-application-message-template": { "channel_id": FrontFullApiPathParamValue; "external_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiApplicationMessageTemplatesOperationRequestMap {
  "sync-application-message-template": FrontFullApiOperationInput<"sync-application-message-template">;
  "update-application-message-template": FrontFullApiOperationInput<"update-application-message-template">;
}

export interface FrontFullApiApplicationMessageTemplatesGeneratedClient {
  frontSyncApplicationMessageTemplate(...args: FrontFullApiOperationArgs<"sync-application-message-template">): Promise<FrontFullApiOperationResponseMap["sync-application-message-template"]>;
  frontUpdateApplicationMessageTemplate(...args: FrontFullApiOperationArgs<"update-application-message-template">): Promise<FrontFullApiOperationResponseMap["update-application-message-template"]>;
}

export const FrontFullApiApplicationMessageTemplatesGeneratedFunctionNames = [
  "frontSyncApplicationMessageTemplate",
  "frontUpdateApplicationMessageTemplate"
] as const satisfies readonly (keyof FrontFullApiApplicationMessageTemplatesGeneratedClient)[];

export function createFrontFullApiApplicationMessageTemplatesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiApplicationMessageTemplatesGeneratedClient {
  return {
    frontSyncApplicationMessageTemplate: (...args) => callOperation("sync-application-message-template", ...(args as FrontFullApiOperationArgs<"sync-application-message-template">)),
    frontUpdateApplicationMessageTemplate: (...args) => callOperation("update-application-message-template", ...(args as FrontFullApiOperationArgs<"update-application-message-template">)),
  };
}
