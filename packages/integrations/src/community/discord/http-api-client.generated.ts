// Generated from Discord's official HTTP API v10 OpenAPI preview spec (https://raw.githubusercontent.com/discord/discord-api-spec/main/specs/openapi.json).
// Do not edit by hand; run scripts/generate-discord-http-api.mjs after checking upstream docs.

import type { DiscordOperationRequestInput } from "./index.js";
import type {
  DiscordHttpApiOperationQueryMap,
  DiscordHttpApiOperationQueryRequiredMap,
  DiscordHttpApiOperationRequestBodyMap,
  DiscordHttpApiOperationRequestBodyRequiredMap,
  DiscordHttpApiOperationResponseMap,
} from "./http-api-schema-types.generated.js";
import {
  createDiscordHttpApiApplicationsGeneratedClient,
  DiscordHttpApiApplicationsGeneratedFunctionNames,
  type DiscordHttpApiApplicationsGeneratedClient,
  type DiscordHttpApiApplicationsOperationPathParamMap,
  type DiscordHttpApiApplicationsOperationRequestMap,
} from "./http-api.generated/client/applications-chunk.generated.js";
import {
  createDiscordHttpApiChannelsGeneratedClient,
  DiscordHttpApiChannelsGeneratedFunctionNames,
  type DiscordHttpApiChannelsGeneratedClient,
  type DiscordHttpApiChannelsOperationPathParamMap,
  type DiscordHttpApiChannelsOperationRequestMap,
} from "./http-api.generated/client/channels-chunk.generated.js";
import {
  createDiscordHttpApiGatewayGeneratedClient,
  DiscordHttpApiGatewayGeneratedFunctionNames,
  type DiscordHttpApiGatewayGeneratedClient,
  type DiscordHttpApiGatewayOperationPathParamMap,
  type DiscordHttpApiGatewayOperationRequestMap,
} from "./http-api.generated/client/gateway-chunk.generated.js";
import {
  createDiscordHttpApiGuilds01GeneratedClient,
  DiscordHttpApiGuilds01GeneratedFunctionNames,
  type DiscordHttpApiGuilds01GeneratedClient,
  type DiscordHttpApiGuilds01OperationPathParamMap,
  type DiscordHttpApiGuilds01OperationRequestMap,
} from "./http-api.generated/client/guilds-01-chunk.generated.js";
import {
  createDiscordHttpApiGuilds02GeneratedClient,
  DiscordHttpApiGuilds02GeneratedFunctionNames,
  type DiscordHttpApiGuilds02GeneratedClient,
  type DiscordHttpApiGuilds02OperationPathParamMap,
  type DiscordHttpApiGuilds02OperationRequestMap,
} from "./http-api.generated/client/guilds-02-chunk.generated.js";
import {
  createDiscordHttpApiInteractionsGeneratedClient,
  DiscordHttpApiInteractionsGeneratedFunctionNames,
  type DiscordHttpApiInteractionsGeneratedClient,
  type DiscordHttpApiInteractionsOperationPathParamMap,
  type DiscordHttpApiInteractionsOperationRequestMap,
} from "./http-api.generated/client/interactions-chunk.generated.js";
import {
  createDiscordHttpApiInvitesGeneratedClient,
  DiscordHttpApiInvitesGeneratedFunctionNames,
  type DiscordHttpApiInvitesGeneratedClient,
  type DiscordHttpApiInvitesOperationPathParamMap,
  type DiscordHttpApiInvitesOperationRequestMap,
} from "./http-api.generated/client/invites-chunk.generated.js";
import {
  createDiscordHttpApiLobbiesGeneratedClient,
  DiscordHttpApiLobbiesGeneratedFunctionNames,
  type DiscordHttpApiLobbiesGeneratedClient,
  type DiscordHttpApiLobbiesOperationPathParamMap,
  type DiscordHttpApiLobbiesOperationRequestMap,
} from "./http-api.generated/client/lobbies-chunk.generated.js";
import {
  createDiscordHttpApiOauth2GeneratedClient,
  DiscordHttpApiOauth2GeneratedFunctionNames,
  type DiscordHttpApiOauth2GeneratedClient,
  type DiscordHttpApiOauth2OperationPathParamMap,
  type DiscordHttpApiOauth2OperationRequestMap,
} from "./http-api.generated/client/oauth2-chunk.generated.js";
import {
  createDiscordHttpApiPartnerSdkGeneratedClient,
  DiscordHttpApiPartnerSdkGeneratedFunctionNames,
  type DiscordHttpApiPartnerSdkGeneratedClient,
  type DiscordHttpApiPartnerSdkOperationPathParamMap,
  type DiscordHttpApiPartnerSdkOperationRequestMap,
} from "./http-api.generated/client/partner-sdk-chunk.generated.js";
import {
  createDiscordHttpApiSkusGeneratedClient,
  DiscordHttpApiSkusGeneratedFunctionNames,
  type DiscordHttpApiSkusGeneratedClient,
  type DiscordHttpApiSkusOperationPathParamMap,
  type DiscordHttpApiSkusOperationRequestMap,
} from "./http-api.generated/client/skus-chunk.generated.js";
import {
  createDiscordHttpApiSoundboardDefaultSoundsGeneratedClient,
  DiscordHttpApiSoundboardDefaultSoundsGeneratedFunctionNames,
  type DiscordHttpApiSoundboardDefaultSoundsGeneratedClient,
  type DiscordHttpApiSoundboardDefaultSoundsOperationPathParamMap,
  type DiscordHttpApiSoundboardDefaultSoundsOperationRequestMap,
} from "./http-api.generated/client/soundboard-default-sounds-chunk.generated.js";
import {
  createDiscordHttpApiStageInstancesGeneratedClient,
  DiscordHttpApiStageInstancesGeneratedFunctionNames,
  type DiscordHttpApiStageInstancesGeneratedClient,
  type DiscordHttpApiStageInstancesOperationPathParamMap,
  type DiscordHttpApiStageInstancesOperationRequestMap,
} from "./http-api.generated/client/stage-instances-chunk.generated.js";
import {
  createDiscordHttpApiStickerPacksGeneratedClient,
  DiscordHttpApiStickerPacksGeneratedFunctionNames,
  type DiscordHttpApiStickerPacksGeneratedClient,
  type DiscordHttpApiStickerPacksOperationPathParamMap,
  type DiscordHttpApiStickerPacksOperationRequestMap,
} from "./http-api.generated/client/sticker-packs-chunk.generated.js";
import {
  createDiscordHttpApiStickersGeneratedClient,
  DiscordHttpApiStickersGeneratedFunctionNames,
  type DiscordHttpApiStickersGeneratedClient,
  type DiscordHttpApiStickersOperationPathParamMap,
  type DiscordHttpApiStickersOperationRequestMap,
} from "./http-api.generated/client/stickers-chunk.generated.js";
import {
  createDiscordHttpApiUsersGeneratedClient,
  DiscordHttpApiUsersGeneratedFunctionNames,
  type DiscordHttpApiUsersGeneratedClient,
  type DiscordHttpApiUsersOperationPathParamMap,
  type DiscordHttpApiUsersOperationRequestMap,
} from "./http-api.generated/client/users-chunk.generated.js";
import {
  createDiscordHttpApiVoiceGeneratedClient,
  DiscordHttpApiVoiceGeneratedFunctionNames,
  type DiscordHttpApiVoiceGeneratedClient,
  type DiscordHttpApiVoiceOperationPathParamMap,
  type DiscordHttpApiVoiceOperationRequestMap,
} from "./http-api.generated/client/voice-chunk.generated.js";
import {
  createDiscordHttpApiWebhooksGeneratedClient,
  DiscordHttpApiWebhooksGeneratedFunctionNames,
  type DiscordHttpApiWebhooksGeneratedClient,
  type DiscordHttpApiWebhooksOperationPathParamMap,
  type DiscordHttpApiWebhooksOperationRequestMap,
} from "./http-api.generated/client/webhooks-chunk.generated.js";

export type DiscordHttpApiPathParamValue = string | number;
export interface DiscordHttpApiOperationPathParamMap extends DiscordHttpApiApplicationsOperationPathParamMap, DiscordHttpApiChannelsOperationPathParamMap, DiscordHttpApiGatewayOperationPathParamMap, DiscordHttpApiGuilds01OperationPathParamMap, DiscordHttpApiGuilds02OperationPathParamMap, DiscordHttpApiInteractionsOperationPathParamMap, DiscordHttpApiInvitesOperationPathParamMap, DiscordHttpApiLobbiesOperationPathParamMap, DiscordHttpApiOauth2OperationPathParamMap, DiscordHttpApiPartnerSdkOperationPathParamMap, DiscordHttpApiSkusOperationPathParamMap, DiscordHttpApiSoundboardDefaultSoundsOperationPathParamMap, DiscordHttpApiStageInstancesOperationPathParamMap, DiscordHttpApiStickerPacksOperationPathParamMap, DiscordHttpApiStickersOperationPathParamMap, DiscordHttpApiUsersOperationPathParamMap, DiscordHttpApiVoiceOperationPathParamMap, DiscordHttpApiWebhooksOperationPathParamMap {}

export type DiscordHttpApiOperationKey = keyof DiscordHttpApiOperationPathParamMap & string;

export type DiscordHttpApiOperationQueryInput<OperationKey extends DiscordHttpApiOperationKey> =
  DiscordHttpApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: DiscordHttpApiOperationQueryMap[OperationKey] }
    : { query?: DiscordHttpApiOperationQueryMap[OperationKey] };

export type DiscordHttpApiOperationBodyInput<OperationKey extends DiscordHttpApiOperationKey> =
  [DiscordHttpApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : DiscordHttpApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: DiscordHttpApiOperationRequestBodyMap[OperationKey] }
      : { body?: DiscordHttpApiOperationRequestBodyMap[OperationKey] };

export type DiscordHttpApiOperationInput<OperationKey extends DiscordHttpApiOperationKey> = Omit<DiscordOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends DiscordHttpApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: DiscordHttpApiOperationPathParamMap[OperationKey] }
) & DiscordHttpApiOperationQueryInput<OperationKey> & DiscordHttpApiOperationBodyInput<OperationKey>;

export interface DiscordHttpApiOperationRequestMap extends DiscordHttpApiApplicationsOperationRequestMap, DiscordHttpApiChannelsOperationRequestMap, DiscordHttpApiGatewayOperationRequestMap, DiscordHttpApiGuilds01OperationRequestMap, DiscordHttpApiGuilds02OperationRequestMap, DiscordHttpApiInteractionsOperationRequestMap, DiscordHttpApiInvitesOperationRequestMap, DiscordHttpApiLobbiesOperationRequestMap, DiscordHttpApiOauth2OperationRequestMap, DiscordHttpApiPartnerSdkOperationRequestMap, DiscordHttpApiSkusOperationRequestMap, DiscordHttpApiSoundboardDefaultSoundsOperationRequestMap, DiscordHttpApiStageInstancesOperationRequestMap, DiscordHttpApiStickerPacksOperationRequestMap, DiscordHttpApiStickersOperationRequestMap, DiscordHttpApiUsersOperationRequestMap, DiscordHttpApiVoiceOperationRequestMap, DiscordHttpApiWebhooksOperationRequestMap {}

export type DiscordHttpApiOperationArgs<OperationKey extends DiscordHttpApiOperationKey> = {} extends DiscordHttpApiOperationPathParamMap[OperationKey]
  ? [input?: DiscordHttpApiOperationRequestMap[OperationKey]]
  : [input: DiscordHttpApiOperationRequestMap[OperationKey]];

export type DiscordHttpApiGeneratedOperationCaller = <OperationKey extends DiscordHttpApiOperationKey>(
  operationKey: OperationKey,
  ...args: DiscordHttpApiOperationArgs<OperationKey>
) => Promise<DiscordHttpApiOperationResponseMap[OperationKey]>;

export interface DiscordHttpApiGeneratedClient extends DiscordHttpApiApplicationsGeneratedClient, DiscordHttpApiChannelsGeneratedClient, DiscordHttpApiGatewayGeneratedClient, DiscordHttpApiGuilds01GeneratedClient, DiscordHttpApiGuilds02GeneratedClient, DiscordHttpApiInteractionsGeneratedClient, DiscordHttpApiInvitesGeneratedClient, DiscordHttpApiLobbiesGeneratedClient, DiscordHttpApiOauth2GeneratedClient, DiscordHttpApiPartnerSdkGeneratedClient, DiscordHttpApiSkusGeneratedClient, DiscordHttpApiSoundboardDefaultSoundsGeneratedClient, DiscordHttpApiStageInstancesGeneratedClient, DiscordHttpApiStickerPacksGeneratedClient, DiscordHttpApiStickersGeneratedClient, DiscordHttpApiUsersGeneratedClient, DiscordHttpApiVoiceGeneratedClient, DiscordHttpApiWebhooksGeneratedClient {}

export const DISCORD_HTTP_API_GENERATED_FUNCTION_COUNT = 242 as const;
export const DISCORD_HTTP_API_GENERATED_FUNCTION_NAMES = [
  ...DiscordHttpApiApplicationsGeneratedFunctionNames,
  ...DiscordHttpApiChannelsGeneratedFunctionNames,
  ...DiscordHttpApiGatewayGeneratedFunctionNames,
  ...DiscordHttpApiGuilds01GeneratedFunctionNames,
  ...DiscordHttpApiGuilds02GeneratedFunctionNames,
  ...DiscordHttpApiInteractionsGeneratedFunctionNames,
  ...DiscordHttpApiInvitesGeneratedFunctionNames,
  ...DiscordHttpApiLobbiesGeneratedFunctionNames,
  ...DiscordHttpApiOauth2GeneratedFunctionNames,
  ...DiscordHttpApiPartnerSdkGeneratedFunctionNames,
  ...DiscordHttpApiSkusGeneratedFunctionNames,
  ...DiscordHttpApiSoundboardDefaultSoundsGeneratedFunctionNames,
  ...DiscordHttpApiStageInstancesGeneratedFunctionNames,
  ...DiscordHttpApiStickerPacksGeneratedFunctionNames,
  ...DiscordHttpApiStickersGeneratedFunctionNames,
  ...DiscordHttpApiUsersGeneratedFunctionNames,
  ...DiscordHttpApiVoiceGeneratedFunctionNames,
  ...DiscordHttpApiWebhooksGeneratedFunctionNames,
] as const satisfies readonly (keyof DiscordHttpApiGeneratedClient)[];

export function createDiscordHttpApiGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiGeneratedClient {
  return Object.assign(
    {},
    createDiscordHttpApiApplicationsGeneratedClient(callOperation),
    createDiscordHttpApiChannelsGeneratedClient(callOperation),
    createDiscordHttpApiGatewayGeneratedClient(callOperation),
    createDiscordHttpApiGuilds01GeneratedClient(callOperation),
    createDiscordHttpApiGuilds02GeneratedClient(callOperation),
    createDiscordHttpApiInteractionsGeneratedClient(callOperation),
    createDiscordHttpApiInvitesGeneratedClient(callOperation),
    createDiscordHttpApiLobbiesGeneratedClient(callOperation),
    createDiscordHttpApiOauth2GeneratedClient(callOperation),
    createDiscordHttpApiPartnerSdkGeneratedClient(callOperation),
    createDiscordHttpApiSkusGeneratedClient(callOperation),
    createDiscordHttpApiSoundboardDefaultSoundsGeneratedClient(callOperation),
    createDiscordHttpApiStageInstancesGeneratedClient(callOperation),
    createDiscordHttpApiStickerPacksGeneratedClient(callOperation),
    createDiscordHttpApiStickersGeneratedClient(callOperation),
    createDiscordHttpApiUsersGeneratedClient(callOperation),
    createDiscordHttpApiVoiceGeneratedClient(callOperation),
    createDiscordHttpApiWebhooksGeneratedClient(callOperation),
  ) as DiscordHttpApiGeneratedClient;
}
