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
export const TalkdeskFullApiUsersAPIOperationKeys = [
  "users-get",
  "get-user",
  "users-user-id-integrations-integration-name-post",
  "users-me",
  "users-email-recordings-pause-post",
  "users-email-recordings-start-post",
  "users-id-disposition-settings-patch"
] as const;
export type TalkdeskFullApiUsersAPIOperationKey = typeof TalkdeskFullApiUsersAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiUsersAPIOperationPathParamMap {
  "users-get": {};
  "get-user": { "id": TalkdeskFullApiPathParamValue };
  "users-user-id-integrations-integration-name-post": { "user_id": TalkdeskFullApiPathParamValue; "integration_name": TalkdeskFullApiPathParamValue };
  "users-me": {};
  "users-email-recordings-pause-post": { "email": TalkdeskFullApiPathParamValue };
  "users-email-recordings-start-post": { "email": TalkdeskFullApiPathParamValue };
  "users-id-disposition-settings-patch": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiUsersAPIOperationRequestMap {
  "users-get": TalkdeskFullApiOperationInput<"users-get">;
  "get-user": TalkdeskFullApiOperationInput<"get-user">;
  "users-user-id-integrations-integration-name-post": TalkdeskFullApiOperationInput<"users-user-id-integrations-integration-name-post">;
  "users-me": TalkdeskFullApiOperationInput<"users-me">;
  "users-email-recordings-pause-post": TalkdeskFullApiOperationInput<"users-email-recordings-pause-post">;
  "users-email-recordings-start-post": TalkdeskFullApiOperationInput<"users-email-recordings-start-post">;
  "users-id-disposition-settings-patch": TalkdeskFullApiOperationInput<"users-id-disposition-settings-patch">;
}

export interface TalkdeskFullApiUsersAPIGeneratedClient {
  UsersGet(...args: TalkdeskFullApiOperationArgs<"users-get">): Promise<TalkdeskFullApiOperationResponseMap["users-get"]>;
  GetUser(...args: TalkdeskFullApiOperationArgs<"get-user">): Promise<TalkdeskFullApiOperationResponseMap["get-user"]>;
  UsersUserIdIntegrationsIntegrationNamePost(...args: TalkdeskFullApiOperationArgs<"users-user-id-integrations-integration-name-post">): Promise<TalkdeskFullApiOperationResponseMap["users-user-id-integrations-integration-name-post"]>;
  UsersMe(...args: TalkdeskFullApiOperationArgs<"users-me">): Promise<TalkdeskFullApiOperationResponseMap["users-me"]>;
  UsersEmailRecordingsPausePost(...args: TalkdeskFullApiOperationArgs<"users-email-recordings-pause-post">): Promise<TalkdeskFullApiOperationResponseMap["users-email-recordings-pause-post"]>;
  UsersEmailRecordingsStartPost(...args: TalkdeskFullApiOperationArgs<"users-email-recordings-start-post">): Promise<TalkdeskFullApiOperationResponseMap["users-email-recordings-start-post"]>;
  UsersIdDispositionSettingsPatch(...args: TalkdeskFullApiOperationArgs<"users-id-disposition-settings-patch">): Promise<TalkdeskFullApiOperationResponseMap["users-id-disposition-settings-patch"]>;
}

export const TalkdeskFullApiUsersAPIGeneratedFunctionNames = [
  "UsersGet",
  "GetUser",
  "UsersUserIdIntegrationsIntegrationNamePost",
  "UsersMe",
  "UsersEmailRecordingsPausePost",
  "UsersEmailRecordingsStartPost",
  "UsersIdDispositionSettingsPatch"
] as const satisfies readonly (keyof TalkdeskFullApiUsersAPIGeneratedClient)[];

export function createTalkdeskFullApiUsersAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiUsersAPIGeneratedClient {
  return {
    UsersGet: (...args) => callOperation("users-get", ...(args as TalkdeskFullApiOperationArgs<"users-get">)),
    GetUser: (...args) => callOperation("get-user", ...(args as TalkdeskFullApiOperationArgs<"get-user">)),
    UsersUserIdIntegrationsIntegrationNamePost: (...args) => callOperation("users-user-id-integrations-integration-name-post", ...(args as TalkdeskFullApiOperationArgs<"users-user-id-integrations-integration-name-post">)),
    UsersMe: (...args) => callOperation("users-me", ...(args as TalkdeskFullApiOperationArgs<"users-me">)),
    UsersEmailRecordingsPausePost: (...args) => callOperation("users-email-recordings-pause-post", ...(args as TalkdeskFullApiOperationArgs<"users-email-recordings-pause-post">)),
    UsersEmailRecordingsStartPost: (...args) => callOperation("users-email-recordings-start-post", ...(args as TalkdeskFullApiOperationArgs<"users-email-recordings-start-post">)),
    UsersIdDispositionSettingsPatch: (...args) => callOperation("users-id-disposition-settings-patch", ...(args as TalkdeskFullApiOperationArgs<"users-id-disposition-settings-patch">)),
  };
}
