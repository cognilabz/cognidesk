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
export const TalkdeskFullApiAppsAPIOperationKeys = [
  "apps-get",
  "apps-post",
  "apps-app-id-get",
  "apps-app-id-patch",
  "apps-app-id-installations-id-get",
  "apps-app-id-installations-id-users-get",
  "apps-app-id-installations-id-state-post",
  "apps-app-id-installations-id-subscription-get",
  "apps-app-id-installations-id-channels-get",
  "apps-app-id-installations-id-channels-post",
  "apps-app-id-installations-id-trial-get",
  "apps-app-id-installations-id-credentials-actions-rotate-post",
  "apps-app-id-installations-id-credentials-client-id-state-post"
] as const;
export type TalkdeskFullApiAppsAPIOperationKey = typeof TalkdeskFullApiAppsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiAppsAPIOperationPathParamMap {
  "apps-get": {};
  "apps-post": {};
  "apps-app-id-get": { "app_id": TalkdeskFullApiPathParamValue };
  "apps-app-id-patch": { "app_id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-get": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-users-get": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-state-post": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-subscription-get": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-channels-get": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-channels-post": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-trial-get": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-credentials-actions-rotate-post": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue };
  "apps-app-id-installations-id-credentials-client-id-state-post": { "app_id": TalkdeskFullApiPathParamValue; "id": TalkdeskFullApiPathParamValue; "client_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiAppsAPIOperationRequestMap {
  "apps-get": TalkdeskFullApiOperationInput<"apps-get">;
  "apps-post": TalkdeskFullApiOperationInput<"apps-post">;
  "apps-app-id-get": TalkdeskFullApiOperationInput<"apps-app-id-get">;
  "apps-app-id-patch": TalkdeskFullApiOperationInput<"apps-app-id-patch">;
  "apps-app-id-installations-id-get": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-get">;
  "apps-app-id-installations-id-users-get": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-users-get">;
  "apps-app-id-installations-id-state-post": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-state-post">;
  "apps-app-id-installations-id-subscription-get": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-subscription-get">;
  "apps-app-id-installations-id-channels-get": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-channels-get">;
  "apps-app-id-installations-id-channels-post": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-channels-post">;
  "apps-app-id-installations-id-trial-get": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-trial-get">;
  "apps-app-id-installations-id-credentials-actions-rotate-post": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-credentials-actions-rotate-post">;
  "apps-app-id-installations-id-credentials-client-id-state-post": TalkdeskFullApiOperationInput<"apps-app-id-installations-id-credentials-client-id-state-post">;
}

export interface TalkdeskFullApiAppsAPIGeneratedClient {
  AppsGet(...args: TalkdeskFullApiOperationArgs<"apps-get">): Promise<TalkdeskFullApiOperationResponseMap["apps-get"]>;
  AppsPost(...args: TalkdeskFullApiOperationArgs<"apps-post">): Promise<TalkdeskFullApiOperationResponseMap["apps-post"]>;
  AppsAppIdGet(...args: TalkdeskFullApiOperationArgs<"apps-app-id-get">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-get"]>;
  AppsAppIdPatch(...args: TalkdeskFullApiOperationArgs<"apps-app-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-patch"]>;
  AppsAppIdInstallationsIdGet(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-get">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-get"]>;
  AppsAppIdInstallationsIdUsersGet(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-users-get">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-users-get"]>;
  AppsAppIdInstallationsIdStatePost(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-state-post">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-state-post"]>;
  AppsAppIdInstallationsIdSubscriptionGet(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-subscription-get">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-subscription-get"]>;
  AppsAppIdInstallationsIdChannelsGet(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-channels-get">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-channels-get"]>;
  AppsAppIdInstallationsIdChannelsPost(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-channels-post">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-channels-post"]>;
  AppsAppIdInstallationsIdTrialGet(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-trial-get">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-trial-get"]>;
  AppsAppIdInstallationsIdCredentialsActionsRotatePost(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-credentials-actions-rotate-post">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-credentials-actions-rotate-post"]>;
  AppsAppIdInstallationsIdCredentialsClientIdStatePost(...args: TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-credentials-client-id-state-post">): Promise<TalkdeskFullApiOperationResponseMap["apps-app-id-installations-id-credentials-client-id-state-post"]>;
}

export const TalkdeskFullApiAppsAPIGeneratedFunctionNames = [
  "AppsGet",
  "AppsPost",
  "AppsAppIdGet",
  "AppsAppIdPatch",
  "AppsAppIdInstallationsIdGet",
  "AppsAppIdInstallationsIdUsersGet",
  "AppsAppIdInstallationsIdStatePost",
  "AppsAppIdInstallationsIdSubscriptionGet",
  "AppsAppIdInstallationsIdChannelsGet",
  "AppsAppIdInstallationsIdChannelsPost",
  "AppsAppIdInstallationsIdTrialGet",
  "AppsAppIdInstallationsIdCredentialsActionsRotatePost",
  "AppsAppIdInstallationsIdCredentialsClientIdStatePost"
] as const satisfies readonly (keyof TalkdeskFullApiAppsAPIGeneratedClient)[];

export function createTalkdeskFullApiAppsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiAppsAPIGeneratedClient {
  return {
    AppsGet: (...args) => callOperation("apps-get", ...(args as TalkdeskFullApiOperationArgs<"apps-get">)),
    AppsPost: (...args) => callOperation("apps-post", ...(args as TalkdeskFullApiOperationArgs<"apps-post">)),
    AppsAppIdGet: (...args) => callOperation("apps-app-id-get", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-get">)),
    AppsAppIdPatch: (...args) => callOperation("apps-app-id-patch", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-patch">)),
    AppsAppIdInstallationsIdGet: (...args) => callOperation("apps-app-id-installations-id-get", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-get">)),
    AppsAppIdInstallationsIdUsersGet: (...args) => callOperation("apps-app-id-installations-id-users-get", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-users-get">)),
    AppsAppIdInstallationsIdStatePost: (...args) => callOperation("apps-app-id-installations-id-state-post", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-state-post">)),
    AppsAppIdInstallationsIdSubscriptionGet: (...args) => callOperation("apps-app-id-installations-id-subscription-get", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-subscription-get">)),
    AppsAppIdInstallationsIdChannelsGet: (...args) => callOperation("apps-app-id-installations-id-channels-get", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-channels-get">)),
    AppsAppIdInstallationsIdChannelsPost: (...args) => callOperation("apps-app-id-installations-id-channels-post", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-channels-post">)),
    AppsAppIdInstallationsIdTrialGet: (...args) => callOperation("apps-app-id-installations-id-trial-get", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-trial-get">)),
    AppsAppIdInstallationsIdCredentialsActionsRotatePost: (...args) => callOperation("apps-app-id-installations-id-credentials-actions-rotate-post", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-credentials-actions-rotate-post">)),
    AppsAppIdInstallationsIdCredentialsClientIdStatePost: (...args) => callOperation("apps-app-id-installations-id-credentials-client-id-state-post", ...(args as TalkdeskFullApiOperationArgs<"apps-app-id-installations-id-credentials-client-id-state-post">)),
  };
}
