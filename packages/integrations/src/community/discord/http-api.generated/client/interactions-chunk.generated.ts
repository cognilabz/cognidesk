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
export const DiscordHttpApiInteractionsOperationKeys = [
  "POST /interactions/{interaction_id}/{interaction_token}/callback"
] as const;
export type DiscordHttpApiInteractionsOperationKey = typeof DiscordHttpApiInteractionsOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiInteractionsOperationPathParamMap {
  "POST /interactions/{interaction_id}/{interaction_token}/callback": { "interaction_id": DiscordHttpApiPathParamValue; "interaction_token": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiInteractionsOperationRequestMap {
  "POST /interactions/{interaction_id}/{interaction_token}/callback": DiscordHttpApiOperationInput<"POST /interactions/{interaction_id}/{interaction_token}/callback">;
}

export interface DiscordHttpApiInteractionsGeneratedClient {
  CreateInteractionResponse(...args: DiscordHttpApiOperationArgs<"POST /interactions/{interaction_id}/{interaction_token}/callback">): Promise<DiscordHttpApiOperationResponseMap["POST /interactions/{interaction_id}/{interaction_token}/callback"]>;
}

export const DiscordHttpApiInteractionsGeneratedFunctionNames = [
  "CreateInteractionResponse"
] as const satisfies readonly (keyof DiscordHttpApiInteractionsGeneratedClient)[];

export function createDiscordHttpApiInteractionsGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiInteractionsGeneratedClient {
  return {
    CreateInteractionResponse: (...args) => callOperation("POST /interactions/{interaction_id}/{interaction_token}/callback", ...(args as DiscordHttpApiOperationArgs<"POST /interactions/{interaction_id}/{interaction_token}/callback">)),
  };
}
