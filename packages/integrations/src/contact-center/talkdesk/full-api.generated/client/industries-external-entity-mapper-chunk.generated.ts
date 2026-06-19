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
export const TalkdeskFullApiIndustriesExternalEntityMapperOperationKeys = [
  "createMap",
  "createMaps",
  "searchContactByPhone",
  "searchContactByChannels",
  "searchAndCreateContact",
  "bindContactToInteraction",
  "searchAndUpsertContact"
] as const;
export type TalkdeskFullApiIndustriesExternalEntityMapperOperationKey = typeof TalkdeskFullApiIndustriesExternalEntityMapperOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIndustriesExternalEntityMapperOperationPathParamMap {
  "createMap": {};
  "createMaps": {};
  "searchContactByPhone": { "phone": TalkdeskFullApiPathParamValue };
  "searchContactByChannels": {};
  "searchAndCreateContact": {};
  "bindContactToInteraction": {};
  "searchAndUpsertContact": { "integration_id": TalkdeskFullApiPathParamValue; "external_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiIndustriesExternalEntityMapperOperationRequestMap {
  "createMap": TalkdeskFullApiOperationInput<"createMap">;
  "createMaps": TalkdeskFullApiOperationInput<"createMaps">;
  "searchContactByPhone": TalkdeskFullApiOperationInput<"searchContactByPhone">;
  "searchContactByChannels": TalkdeskFullApiOperationInput<"searchContactByChannels">;
  "searchAndCreateContact": TalkdeskFullApiOperationInput<"searchAndCreateContact">;
  "bindContactToInteraction": TalkdeskFullApiOperationInput<"bindContactToInteraction">;
  "searchAndUpsertContact": TalkdeskFullApiOperationInput<"searchAndUpsertContact">;
}

export interface TalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient {
  CreateMap(...args: TalkdeskFullApiOperationArgs<"createMap">): Promise<TalkdeskFullApiOperationResponseMap["createMap"]>;
  CreateMaps(...args: TalkdeskFullApiOperationArgs<"createMaps">): Promise<TalkdeskFullApiOperationResponseMap["createMaps"]>;
  SearchContactByPhone(...args: TalkdeskFullApiOperationArgs<"searchContactByPhone">): Promise<TalkdeskFullApiOperationResponseMap["searchContactByPhone"]>;
  SearchContactByChannels(...args: TalkdeskFullApiOperationArgs<"searchContactByChannels">): Promise<TalkdeskFullApiOperationResponseMap["searchContactByChannels"]>;
  SearchAndCreateContact(...args: TalkdeskFullApiOperationArgs<"searchAndCreateContact">): Promise<TalkdeskFullApiOperationResponseMap["searchAndCreateContact"]>;
  BindContactToInteraction(...args: TalkdeskFullApiOperationArgs<"bindContactToInteraction">): Promise<TalkdeskFullApiOperationResponseMap["bindContactToInteraction"]>;
  SearchAndUpsertContact(...args: TalkdeskFullApiOperationArgs<"searchAndUpsertContact">): Promise<TalkdeskFullApiOperationResponseMap["searchAndUpsertContact"]>;
}

export const TalkdeskFullApiIndustriesExternalEntityMapperGeneratedFunctionNames = [
  "CreateMap",
  "CreateMaps",
  "SearchContactByPhone",
  "SearchContactByChannels",
  "SearchAndCreateContact",
  "BindContactToInteraction",
  "SearchAndUpsertContact"
] as const satisfies readonly (keyof TalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient)[];

export function createTalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIndustriesExternalEntityMapperGeneratedClient {
  return {
    CreateMap: (...args) => callOperation("createMap", ...(args as TalkdeskFullApiOperationArgs<"createMap">)),
    CreateMaps: (...args) => callOperation("createMaps", ...(args as TalkdeskFullApiOperationArgs<"createMaps">)),
    SearchContactByPhone: (...args) => callOperation("searchContactByPhone", ...(args as TalkdeskFullApiOperationArgs<"searchContactByPhone">)),
    SearchContactByChannels: (...args) => callOperation("searchContactByChannels", ...(args as TalkdeskFullApiOperationArgs<"searchContactByChannels">)),
    SearchAndCreateContact: (...args) => callOperation("searchAndCreateContact", ...(args as TalkdeskFullApiOperationArgs<"searchAndCreateContact">)),
    BindContactToInteraction: (...args) => callOperation("bindContactToInteraction", ...(args as TalkdeskFullApiOperationArgs<"bindContactToInteraction">)),
    SearchAndUpsertContact: (...args) => callOperation("searchAndUpsertContact", ...(args as TalkdeskFullApiOperationArgs<"searchAndUpsertContact">)),
  };
}
