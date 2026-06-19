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
export const TalkdeskFullApiUserStatusAPIOperationKeys = [
  "ccaas-users-id-status-put",
  "ccaas-users-status-post"
] as const;
export type TalkdeskFullApiUserStatusAPIOperationKey = typeof TalkdeskFullApiUserStatusAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiUserStatusAPIOperationPathParamMap {
  "ccaas-users-id-status-put": { "id": TalkdeskFullApiPathParamValue };
  "ccaas-users-status-post": {};
}

export interface TalkdeskFullApiUserStatusAPIOperationRequestMap {
  "ccaas-users-id-status-put": TalkdeskFullApiOperationInput<"ccaas-users-id-status-put">;
  "ccaas-users-status-post": TalkdeskFullApiOperationInput<"ccaas-users-status-post">;
}

export interface TalkdeskFullApiUserStatusAPIGeneratedClient {
  CcaasUsersIdStatusPut(...args: TalkdeskFullApiOperationArgs<"ccaas-users-id-status-put">): Promise<TalkdeskFullApiOperationResponseMap["ccaas-users-id-status-put"]>;
  CcaasUsersStatusPost(...args: TalkdeskFullApiOperationArgs<"ccaas-users-status-post">): Promise<TalkdeskFullApiOperationResponseMap["ccaas-users-status-post"]>;
}

export const TalkdeskFullApiUserStatusAPIGeneratedFunctionNames = [
  "CcaasUsersIdStatusPut",
  "CcaasUsersStatusPost"
] as const satisfies readonly (keyof TalkdeskFullApiUserStatusAPIGeneratedClient)[];

export function createTalkdeskFullApiUserStatusAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiUserStatusAPIGeneratedClient {
  return {
    CcaasUsersIdStatusPut: (...args) => callOperation("ccaas-users-id-status-put", ...(args as TalkdeskFullApiOperationArgs<"ccaas-users-id-status-put">)),
    CcaasUsersStatusPost: (...args) => callOperation("ccaas-users-status-post", ...(args as TalkdeskFullApiOperationArgs<"ccaas-users-status-post">)),
  };
}
