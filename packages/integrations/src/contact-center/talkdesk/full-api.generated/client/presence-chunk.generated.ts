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
export const TalkdeskFullApiPresenceOperationKeys = [
  "users-id-presence-get",
  "users-id-presence-post",
  "users-id-presence-status-put",
  "users-id-presence-occupancy-patch"
] as const;
export type TalkdeskFullApiPresenceOperationKey = typeof TalkdeskFullApiPresenceOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiPresenceOperationPathParamMap {
  "users-id-presence-get": { "id": TalkdeskFullApiPathParamValue };
  "users-id-presence-post": { "id": TalkdeskFullApiPathParamValue };
  "users-id-presence-status-put": { "id": TalkdeskFullApiPathParamValue };
  "users-id-presence-occupancy-patch": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiPresenceOperationRequestMap {
  "users-id-presence-get": TalkdeskFullApiOperationInput<"users-id-presence-get">;
  "users-id-presence-post": TalkdeskFullApiOperationInput<"users-id-presence-post">;
  "users-id-presence-status-put": TalkdeskFullApiOperationInput<"users-id-presence-status-put">;
  "users-id-presence-occupancy-patch": TalkdeskFullApiOperationInput<"users-id-presence-occupancy-patch">;
}

export interface TalkdeskFullApiPresenceGeneratedClient {
  UsersIdPresenceGet(...args: TalkdeskFullApiOperationArgs<"users-id-presence-get">): Promise<TalkdeskFullApiOperationResponseMap["users-id-presence-get"]>;
  UsersIdPresencePost(...args: TalkdeskFullApiOperationArgs<"users-id-presence-post">): Promise<TalkdeskFullApiOperationResponseMap["users-id-presence-post"]>;
  UsersIdPresenceStatusPut(...args: TalkdeskFullApiOperationArgs<"users-id-presence-status-put">): Promise<TalkdeskFullApiOperationResponseMap["users-id-presence-status-put"]>;
  UsersIdPresenceOccupancyPatch(...args: TalkdeskFullApiOperationArgs<"users-id-presence-occupancy-patch">): Promise<TalkdeskFullApiOperationResponseMap["users-id-presence-occupancy-patch"]>;
}

export const TalkdeskFullApiPresenceGeneratedFunctionNames = [
  "UsersIdPresenceGet",
  "UsersIdPresencePost",
  "UsersIdPresenceStatusPut",
  "UsersIdPresenceOccupancyPatch"
] as const satisfies readonly (keyof TalkdeskFullApiPresenceGeneratedClient)[];

export function createTalkdeskFullApiPresenceGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiPresenceGeneratedClient {
  return {
    UsersIdPresenceGet: (...args) => callOperation("users-id-presence-get", ...(args as TalkdeskFullApiOperationArgs<"users-id-presence-get">)),
    UsersIdPresencePost: (...args) => callOperation("users-id-presence-post", ...(args as TalkdeskFullApiOperationArgs<"users-id-presence-post">)),
    UsersIdPresenceStatusPut: (...args) => callOperation("users-id-presence-status-put", ...(args as TalkdeskFullApiOperationArgs<"users-id-presence-status-put">)),
    UsersIdPresenceOccupancyPatch: (...args) => callOperation("users-id-presence-occupancy-patch", ...(args as TalkdeskFullApiOperationArgs<"users-id-presence-occupancy-patch">)),
  };
}
