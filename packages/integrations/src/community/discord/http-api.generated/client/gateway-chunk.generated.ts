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
export const DiscordHttpApiGatewayOperationKeys = [
  "GET /gateway",
  "GET /gateway/bot"
] as const;
export type DiscordHttpApiGatewayOperationKey = typeof DiscordHttpApiGatewayOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiGatewayOperationPathParamMap {
  "GET /gateway": {};
  "GET /gateway/bot": {};
}

export interface DiscordHttpApiGatewayOperationRequestMap {
  "GET /gateway": DiscordHttpApiOperationInput<"GET /gateway">;
  "GET /gateway/bot": DiscordHttpApiOperationInput<"GET /gateway/bot">;
}

export interface DiscordHttpApiGatewayGeneratedClient {
  GetGateway(...args: DiscordHttpApiOperationArgs<"GET /gateway">): Promise<DiscordHttpApiOperationResponseMap["GET /gateway"]>;
  GetBotGateway(...args: DiscordHttpApiOperationArgs<"GET /gateway/bot">): Promise<DiscordHttpApiOperationResponseMap["GET /gateway/bot"]>;
}

export const DiscordHttpApiGatewayGeneratedFunctionNames = [
  "GetGateway",
  "GetBotGateway"
] as const satisfies readonly (keyof DiscordHttpApiGatewayGeneratedClient)[];

export function createDiscordHttpApiGatewayGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiGatewayGeneratedClient {
  return {
    GetGateway: (...args) => callOperation("GET /gateway", ...(args as DiscordHttpApiOperationArgs<"GET /gateway">)),
    GetBotGateway: (...args) => callOperation("GET /gateway/bot", ...(args as DiscordHttpApiOperationArgs<"GET /gateway/bot">)),
  };
}
