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
export const DiscordHttpApiSoundboardDefaultSoundsOperationKeys = [
  "GET /soundboard-default-sounds"
] as const;
export type DiscordHttpApiSoundboardDefaultSoundsOperationKey = typeof DiscordHttpApiSoundboardDefaultSoundsOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiSoundboardDefaultSoundsOperationPathParamMap {
  "GET /soundboard-default-sounds": {};
}

export interface DiscordHttpApiSoundboardDefaultSoundsOperationRequestMap {
  "GET /soundboard-default-sounds": DiscordHttpApiOperationInput<"GET /soundboard-default-sounds">;
}

export interface DiscordHttpApiSoundboardDefaultSoundsGeneratedClient {
  GetSoundboardDefaultSounds(...args: DiscordHttpApiOperationArgs<"GET /soundboard-default-sounds">): Promise<DiscordHttpApiOperationResponseMap["GET /soundboard-default-sounds"]>;
}

export const DiscordHttpApiSoundboardDefaultSoundsGeneratedFunctionNames = [
  "GetSoundboardDefaultSounds"
] as const satisfies readonly (keyof DiscordHttpApiSoundboardDefaultSoundsGeneratedClient)[];

export function createDiscordHttpApiSoundboardDefaultSoundsGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiSoundboardDefaultSoundsGeneratedClient {
  return {
    GetSoundboardDefaultSounds: (...args) => callOperation("GET /soundboard-default-sounds", ...(args as DiscordHttpApiOperationArgs<"GET /soundboard-default-sounds">)),
  };
}
