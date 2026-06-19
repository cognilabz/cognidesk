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
export const FrontFullApiChannelsOperationKeys = [
  "list-channels",
  "get-channel",
  "update-channel",
  "update-channel:channel-api",
  "validate-channel",
  "create-a-channel",
  "list-teammate-channels",
  "list-team-channels"
] as const;
export type FrontFullApiChannelsOperationKey = typeof FrontFullApiChannelsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiChannelsOperationPathParamMap {
  "list-channels": {};
  "get-channel": { "channel_id": FrontFullApiPathParamValue };
  "update-channel": { "channel_id": FrontFullApiPathParamValue };
  "update-channel:channel-api": { "channel_id": FrontFullApiPathParamValue };
  "validate-channel": { "channel_id": FrontFullApiPathParamValue };
  "create-a-channel": { "inbox_id": FrontFullApiPathParamValue };
  "list-teammate-channels": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-channels": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiChannelsOperationRequestMap {
  "list-channels": FrontFullApiOperationInput<"list-channels">;
  "get-channel": FrontFullApiOperationInput<"get-channel">;
  "update-channel": FrontFullApiOperationInput<"update-channel">;
  "update-channel:channel-api": FrontFullApiOperationInput<"update-channel:channel-api">;
  "validate-channel": FrontFullApiOperationInput<"validate-channel">;
  "create-a-channel": FrontFullApiOperationInput<"create-a-channel">;
  "list-teammate-channels": FrontFullApiOperationInput<"list-teammate-channels">;
  "list-team-channels": FrontFullApiOperationInput<"list-team-channels">;
}

export interface FrontFullApiChannelsGeneratedClient {
  frontListChannels(...args: FrontFullApiOperationArgs<"list-channels">): Promise<FrontFullApiOperationResponseMap["list-channels"]>;
  frontGetChannel(...args: FrontFullApiOperationArgs<"get-channel">): Promise<FrontFullApiOperationResponseMap["get-channel"]>;
  frontUpdateChannel(...args: FrontFullApiOperationArgs<"update-channel">): Promise<FrontFullApiOperationResponseMap["update-channel"]>;
  frontUpdateChannel2(...args: FrontFullApiOperationArgs<"update-channel:channel-api">): Promise<FrontFullApiOperationResponseMap["update-channel:channel-api"]>;
  frontValidateChannel(...args: FrontFullApiOperationArgs<"validate-channel">): Promise<FrontFullApiOperationResponseMap["validate-channel"]>;
  frontCreateAChannel(...args: FrontFullApiOperationArgs<"create-a-channel">): Promise<FrontFullApiOperationResponseMap["create-a-channel"]>;
  frontListTeammateChannels(...args: FrontFullApiOperationArgs<"list-teammate-channels">): Promise<FrontFullApiOperationResponseMap["list-teammate-channels"]>;
  frontListTeamChannels(...args: FrontFullApiOperationArgs<"list-team-channels">): Promise<FrontFullApiOperationResponseMap["list-team-channels"]>;
}

export const FrontFullApiChannelsGeneratedFunctionNames = [
  "frontListChannels",
  "frontGetChannel",
  "frontUpdateChannel",
  "frontUpdateChannel2",
  "frontValidateChannel",
  "frontCreateAChannel",
  "frontListTeammateChannels",
  "frontListTeamChannels"
] as const satisfies readonly (keyof FrontFullApiChannelsGeneratedClient)[];

export function createFrontFullApiChannelsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiChannelsGeneratedClient {
  return {
    frontListChannels: (...args) => callOperation("list-channels", ...(args as FrontFullApiOperationArgs<"list-channels">)),
    frontGetChannel: (...args) => callOperation("get-channel", ...(args as FrontFullApiOperationArgs<"get-channel">)),
    frontUpdateChannel: (...args) => callOperation("update-channel", ...(args as FrontFullApiOperationArgs<"update-channel">)),
    frontUpdateChannel2: (...args) => callOperation("update-channel:channel-api", ...(args as FrontFullApiOperationArgs<"update-channel:channel-api">)),
    frontValidateChannel: (...args) => callOperation("validate-channel", ...(args as FrontFullApiOperationArgs<"validate-channel">)),
    frontCreateAChannel: (...args) => callOperation("create-a-channel", ...(args as FrontFullApiOperationArgs<"create-a-channel">)),
    frontListTeammateChannels: (...args) => callOperation("list-teammate-channels", ...(args as FrontFullApiOperationArgs<"list-teammate-channels">)),
    frontListTeamChannels: (...args) => callOperation("list-team-channels", ...(args as FrontFullApiOperationArgs<"list-team-channels">)),
  };
}
