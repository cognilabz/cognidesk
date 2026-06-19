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
export const DiscordHttpApiStickersOperationKeys = [
  "GET /stickers/{sticker_id}"
] as const;
export type DiscordHttpApiStickersOperationKey = typeof DiscordHttpApiStickersOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiStickersOperationPathParamMap {
  "GET /stickers/{sticker_id}": { "sticker_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiStickersOperationRequestMap {
  "GET /stickers/{sticker_id}": DiscordHttpApiOperationInput<"GET /stickers/{sticker_id}">;
}

export interface DiscordHttpApiStickersGeneratedClient {
  GetSticker(...args: DiscordHttpApiOperationArgs<"GET /stickers/{sticker_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /stickers/{sticker_id}"]>;
}

export const DiscordHttpApiStickersGeneratedFunctionNames = [
  "GetSticker"
] as const satisfies readonly (keyof DiscordHttpApiStickersGeneratedClient)[];

export function createDiscordHttpApiStickersGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiStickersGeneratedClient {
  return {
    GetSticker: (...args) => callOperation("GET /stickers/{sticker_id}", ...(args as DiscordHttpApiOperationArgs<"GET /stickers/{sticker_id}">)),
  };
}
