// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiBotsOperationKeys = [
  "POST /bots/engage",
  "POST /bots/complete",
  "POST /bots/handover"
] as const;
export type RingCentralDigitalApiBotsOperationKey = typeof RingCentralDigitalApiBotsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiBotsOperationPathParamMap {
  "POST /bots/engage": {};
  "POST /bots/complete": {};
  "POST /bots/handover": {};
}

export interface RingCentralDigitalApiBotsOperationRequestMap {
  "POST /bots/engage": RingCentralDigitalApiOperationInput<"POST /bots/engage">;
  "POST /bots/complete": RingCentralDigitalApiOperationInput<"POST /bots/complete">;
  "POST /bots/handover": RingCentralDigitalApiOperationInput<"POST /bots/handover">;
}

export interface RingCentralDigitalApiBotsGeneratedClient {
  BotEngage(...args: RingCentralDigitalApiOperationArgs<"POST /bots/engage">): Promise<RingCentralDigitalApiOperationResponseMap["POST /bots/engage"]>;
  BotComplete(...args: RingCentralDigitalApiOperationArgs<"POST /bots/complete">): Promise<RingCentralDigitalApiOperationResponseMap["POST /bots/complete"]>;
  HandoverFromBotToAgent(...args: RingCentralDigitalApiOperationArgs<"POST /bots/handover">): Promise<RingCentralDigitalApiOperationResponseMap["POST /bots/handover"]>;
}

export const RingCentralDigitalApiBotsGeneratedFunctionNames = [
  "BotEngage",
  "BotComplete",
  "HandoverFromBotToAgent"
] as const satisfies readonly (keyof RingCentralDigitalApiBotsGeneratedClient)[];

export function createRingCentralDigitalApiBotsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiBotsGeneratedClient {
  return {
    BotEngage: (...args) => callOperation("POST /bots/engage", ...(args as RingCentralDigitalApiOperationArgs<"POST /bots/engage">)),
    BotComplete: (...args) => callOperation("POST /bots/complete", ...(args as RingCentralDigitalApiOperationArgs<"POST /bots/complete">)),
    HandoverFromBotToAgent: (...args) => callOperation("POST /bots/handover", ...(args as RingCentralDigitalApiOperationArgs<"POST /bots/handover">)),
  };
}
