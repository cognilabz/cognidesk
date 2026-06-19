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
export const TalkdeskFullApiSimulatedEmailAPIOperationKeys = [
  "emails-simulation-message"
] as const;
export type TalkdeskFullApiSimulatedEmailAPIOperationKey = typeof TalkdeskFullApiSimulatedEmailAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiSimulatedEmailAPIOperationPathParamMap {
  "emails-simulation-message": {};
}

export interface TalkdeskFullApiSimulatedEmailAPIOperationRequestMap {
  "emails-simulation-message": TalkdeskFullApiOperationInput<"emails-simulation-message">;
}

export interface TalkdeskFullApiSimulatedEmailAPIGeneratedClient {
  EmailsSimulationMessage(...args: TalkdeskFullApiOperationArgs<"emails-simulation-message">): Promise<TalkdeskFullApiOperationResponseMap["emails-simulation-message"]>;
}

export const TalkdeskFullApiSimulatedEmailAPIGeneratedFunctionNames = [
  "EmailsSimulationMessage"
] as const satisfies readonly (keyof TalkdeskFullApiSimulatedEmailAPIGeneratedClient)[];

export function createTalkdeskFullApiSimulatedEmailAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiSimulatedEmailAPIGeneratedClient {
  return {
    EmailsSimulationMessage: (...args) => callOperation("emails-simulation-message", ...(args as TalkdeskFullApiOperationArgs<"emails-simulation-message">)),
  };
}
