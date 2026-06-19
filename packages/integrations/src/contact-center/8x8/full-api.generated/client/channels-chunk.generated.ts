// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiChannelsOperationKeys = [
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels",
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels",
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}",
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}",
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}",
  "chat-gateway:GET /chat-gateway/v1/channels",
  "chat-gateway:POST /chat-gateway/v1/channels",
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}",
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}",
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels",
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}",
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}",
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}"
] as const;
export type EightByEightContactCenterApiChannelsOperationKey = typeof EightByEightContactCenterApiChannelsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiChannelsOperationPathParamMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "channel-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "channel-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "channel-id": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/channels": {};
  "chat-gateway:POST /chat-gateway/v1/channels": {};
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}": { "channelId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}": { "channelId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}": { "channelId": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "channel-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "channel-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "channel-id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiChannelsOperationRequestMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">;
  "chat-gateway:GET /chat-gateway/v1/channels": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/channels">;
  "chat-gateway:POST /chat-gateway/v1/channels": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/channels">;
  "chat-gateway:GET /chat-gateway/v1/channels/{channelId}": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/channels/{channelId}">;
  "chat-gateway:PUT /chat-gateway/v1/channels/{channelId}": EightByEightContactCenterApiOperationInput<"chat-gateway:PUT /chat-gateway/v1/channels/{channelId}">;
  "chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}": EightByEightContactCenterApiOperationInput<"chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">;
}

export interface EightByEightContactCenterApiChannelsGeneratedClient {
  Getchatapichannels(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels"]>;
  Createchatapichannel(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels"]>;
  Getchatapichannel(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}"]>;
  Updatechatapichannel(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}"]>;
  Deletechatapichannelbyid(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}"]>;
  Getchatapichannels1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/channels">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/channels"]>;
  Createchatapichannel1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/channels">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/channels"]>;
  Getchatapichannel1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/channels/{channelId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/channels/{channelId}"]>;
  Updatechatapichannel1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /chat-gateway/v1/channels/{channelId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:PUT /chat-gateway/v1/channels/{channelId}"]>;
  Deletechatapichannelbyid1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}"]>;
  Getchatapichannels2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels"]>;
  Createchatapichannel2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels"]>;
  Getchatapichannel2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}"]>;
  Updatechatapichannel2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}"]>;
  Deletechatapichannelbyid2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}"]>;
}

export const EightByEightContactCenterApiChannelsGeneratedFunctionNames = [
  "Getchatapichannels",
  "Createchatapichannel",
  "Getchatapichannel",
  "Updatechatapichannel",
  "Deletechatapichannelbyid",
  "Getchatapichannels1",
  "Createchatapichannel1",
  "Getchatapichannel1",
  "Updatechatapichannel1",
  "Deletechatapichannelbyid1",
  "Getchatapichannels2",
  "Createchatapichannel2",
  "Getchatapichannel2",
  "Updatechatapichannel2",
  "Deletechatapichannelbyid2"
] as const satisfies readonly (keyof EightByEightContactCenterApiChannelsGeneratedClient)[];

export function createEightByEightContactCenterApiChannelsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiChannelsGeneratedClient {
  return {
    Getchatapichannels: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">)),
    Createchatapichannel: (...args) => callOperation("chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">)),
    Getchatapichannel: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">)),
    Updatechatapichannel: (...args) => callOperation("chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">)),
    Deletechatapichannelbyid: (...args) => callOperation("chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">)),
    Getchatapichannels1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/channels", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/channels">)),
    Createchatapichannel1: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/channels", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/channels">)),
    Getchatapichannel1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/channels/{channelId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/channels/{channelId}">)),
    Updatechatapichannel1: (...args) => callOperation("chat-gateway:PUT /chat-gateway/v1/channels/{channelId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /chat-gateway/v1/channels/{channelId}">)),
    Deletechatapichannelbyid1: (...args) => callOperation("chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:DELETE /chat-gateway/v1/channels/{channelId}">)),
    Getchatapichannels2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">)),
    Createchatapichannel2: (...args) => callOperation("chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/channels">)),
    Getchatapichannel2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">)),
    Updatechatapichannel2: (...args) => callOperation("chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">)),
    Deletechatapichannelbyid2: (...args) => callOperation("chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/channels/{channel-id}">)),
  };
}
