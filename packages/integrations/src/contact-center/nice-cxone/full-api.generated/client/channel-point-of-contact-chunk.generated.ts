// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiChannelPointOfContactOperationKeys = [
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates",
  "digital-channel-api-docs:create-update-Channel:POST:/channels",
  "digital-channel-api-docs:get-Channels:GET:/channels",
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}"
] as const;
export type NiceCxoneFullApiChannelPointOfContactOperationKey = typeof NiceCxoneFullApiChannelPointOfContactOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiChannelPointOfContactOperationPathParamMap {
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates": { "channelId": NiceCxoneFullApiPathParamValue };
  "digital-channel-api-docs:create-update-Channel:POST:/channels": {};
  "digital-channel-api-docs:get-Channels:GET:/channels": {};
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}": { "channelId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiChannelPointOfContactOperationRequestMap {
  "digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates": NiceCxoneFullApiOperationInput<"digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates">;
  "digital-channel-api-docs:create-update-Channel:POST:/channels": NiceCxoneFullApiOperationInput<"digital-channel-api-docs:create-update-Channel:POST:/channels">;
  "digital-channel-api-docs:get-Channels:GET:/channels": NiceCxoneFullApiOperationInput<"digital-channel-api-docs:get-Channels:GET:/channels">;
  "digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}": NiceCxoneFullApiOperationInput<"digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}">;
}

export interface NiceCxoneFullApiChannelPointOfContactGeneratedClient {
  DigitalChannelApiDocsGetExternalTemplates(...args: NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates">): Promise<NiceCxoneFullApiOperationResponseMap["digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates"]>;
  DigitalChannelApiDocsCreateUpdateChannel(...args: NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:create-update-Channel:POST:/channels">): Promise<NiceCxoneFullApiOperationResponseMap["digital-channel-api-docs:create-update-Channel:POST:/channels"]>;
  DigitalChannelApiDocsGetChannels(...args: NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:get-Channels:GET:/channels">): Promise<NiceCxoneFullApiOperationResponseMap["digital-channel-api-docs:get-Channels:GET:/channels"]>;
  DigitalChannelApiDocsDeleteChannel(...args: NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}"]>;
}

export const NiceCxoneFullApiChannelPointOfContactGeneratedFunctionNames = [
  "DigitalChannelApiDocsGetExternalTemplates",
  "DigitalChannelApiDocsCreateUpdateChannel",
  "DigitalChannelApiDocsGetChannels",
  "DigitalChannelApiDocsDeleteChannel"
] as const satisfies readonly (keyof NiceCxoneFullApiChannelPointOfContactGeneratedClient)[];

export function createNiceCxoneFullApiChannelPointOfContactGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiChannelPointOfContactGeneratedClient {
  return {
    DigitalChannelApiDocsGetExternalTemplates: (...args) => callOperation("digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates", ...(args as NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:get-external-templates:GET:/channels/{channelId}/external-platform-templates">)),
    DigitalChannelApiDocsCreateUpdateChannel: (...args) => callOperation("digital-channel-api-docs:create-update-Channel:POST:/channels", ...(args as NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:create-update-Channel:POST:/channels">)),
    DigitalChannelApiDocsGetChannels: (...args) => callOperation("digital-channel-api-docs:get-Channels:GET:/channels", ...(args as NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:get-Channels:GET:/channels">)),
    DigitalChannelApiDocsDeleteChannel: (...args) => callOperation("digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-channel-api-docs:deleteChannel:DELETE:/channels/{channelId}">)),
  };
}
