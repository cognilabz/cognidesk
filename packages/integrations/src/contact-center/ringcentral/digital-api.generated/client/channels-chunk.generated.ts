// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiChannelsOperationKeys = [
  "GET /channels",
  "GET /channels/{channelId}",
  "PUT /channels/{channelId}"
] as const;
export type RingCentralDigitalApiChannelsOperationKey = typeof RingCentralDigitalApiChannelsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiChannelsOperationPathParamMap {
  "GET /channels": {};
  "GET /channels/{channelId}": { "channelId": RingCentralDigitalApiPathParamValue };
  "PUT /channels/{channelId}": { "channelId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiChannelsOperationRequestMap {
  "GET /channels": RingCentralDigitalApiOperationInput<"GET /channels">;
  "GET /channels/{channelId}": RingCentralDigitalApiOperationInput<"GET /channels/{channelId}">;
  "PUT /channels/{channelId}": RingCentralDigitalApiOperationInput<"PUT /channels/{channelId}">;
}

export interface RingCentralDigitalApiChannelsGeneratedClient {
  GetAllChannels(...args: RingCentralDigitalApiOperationArgs<"GET /channels">): Promise<RingCentralDigitalApiOperationResponseMap["GET /channels"]>;
  GetChannel(...args: RingCentralDigitalApiOperationArgs<"GET /channels/{channelId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /channels/{channelId}"]>;
  UpdateChannel(...args: RingCentralDigitalApiOperationArgs<"PUT /channels/{channelId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /channels/{channelId}"]>;
}

export const RingCentralDigitalApiChannelsGeneratedFunctionNames = [
  "GetAllChannels",
  "GetChannel",
  "UpdateChannel"
] as const satisfies readonly (keyof RingCentralDigitalApiChannelsGeneratedClient)[];

export function createRingCentralDigitalApiChannelsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiChannelsGeneratedClient {
  return {
    GetAllChannels: (...args) => callOperation("GET /channels", ...(args as RingCentralDigitalApiOperationArgs<"GET /channels">)),
    GetChannel: (...args) => callOperation("GET /channels/{channelId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /channels/{channelId}">)),
    UpdateChannel: (...args) => callOperation("PUT /channels/{channelId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /channels/{channelId}">)),
  };
}
