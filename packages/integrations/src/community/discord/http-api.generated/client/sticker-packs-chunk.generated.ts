// Generated endpoint chunk for DiscordHttpApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DiscordHttpApiGeneratedOperationCaller,
  DiscordHttpApiOperationArgs,
  DiscordHttpApiOperationInput,
  DiscordHttpApiPathParamValue,
} from "../../http-api-client.generated.js";
import type { DiscordHttpApiOperationResponseMap } from "../../http-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DiscordHttpApiStickerPacksOperationKeys = [
  "GET /sticker-packs",
  "GET /sticker-packs/{pack_id}"
] as const;
export type DiscordHttpApiStickerPacksOperationKey = typeof DiscordHttpApiStickerPacksOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiStickerPacksOperationPathParamMap {
  "GET /sticker-packs": {};
  "GET /sticker-packs/{pack_id}": { "pack_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiStickerPacksOperationRequestMap {
  "GET /sticker-packs": DiscordHttpApiOperationInput<"GET /sticker-packs">;
  "GET /sticker-packs/{pack_id}": DiscordHttpApiOperationInput<"GET /sticker-packs/{pack_id}">;
}

export interface DiscordHttpApiStickerPacksGeneratedClient {
  ListStickerPacks(...args: DiscordHttpApiOperationArgs<"GET /sticker-packs">): Promise<DiscordHttpApiOperationResponseMap["GET /sticker-packs"]>;
  GetStickerPack(...args: DiscordHttpApiOperationArgs<"GET /sticker-packs/{pack_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /sticker-packs/{pack_id}"]>;
}

export const DiscordHttpApiStickerPacksGeneratedFunctionNames = [
  "ListStickerPacks",
  "GetStickerPack"
] as const satisfies readonly (keyof DiscordHttpApiStickerPacksGeneratedClient)[];

export function createDiscordHttpApiStickerPacksGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiStickerPacksGeneratedClient {
  return {
    ListStickerPacks: (...args) => callOperation("GET /sticker-packs", ...(args as DiscordHttpApiOperationArgs<"GET /sticker-packs">)),
    GetStickerPack: (...args) => callOperation("GET /sticker-packs/{pack_id}", ...(args as DiscordHttpApiOperationArgs<"GET /sticker-packs/{pack_id}">)),
  };
}
