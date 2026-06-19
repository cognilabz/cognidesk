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
export const DiscordHttpApiVoiceOperationKeys = [
  "GET /voice/regions"
] as const;
export type DiscordHttpApiVoiceOperationKey = typeof DiscordHttpApiVoiceOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiVoiceOperationPathParamMap {
  "GET /voice/regions": {};
}

export interface DiscordHttpApiVoiceOperationRequestMap {
  "GET /voice/regions": DiscordHttpApiOperationInput<"GET /voice/regions">;
}

export interface DiscordHttpApiVoiceGeneratedClient {
  ListVoiceRegions(...args: DiscordHttpApiOperationArgs<"GET /voice/regions">): Promise<DiscordHttpApiOperationResponseMap["GET /voice/regions"]>;
}

export const DiscordHttpApiVoiceGeneratedFunctionNames = [
  "ListVoiceRegions"
] as const satisfies readonly (keyof DiscordHttpApiVoiceGeneratedClient)[];

export function createDiscordHttpApiVoiceGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiVoiceGeneratedClient {
  return {
    ListVoiceRegions: (...args) => callOperation("GET /voice/regions", ...(args as DiscordHttpApiOperationArgs<"GET /voice/regions">)),
  };
}
