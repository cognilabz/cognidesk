// Generated endpoint chunk for VonageVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  VonageGeneratedOperationCaller,
  VonageVoiceFullApiOperationArgs,
  VonageVoiceFullApiOperationInput,
  VonageVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { VonageVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const VonageVoiceFullApiNumbersOperationKeys = [
  "numbers:getOwnedNumbers",
  "numbers:getAvailableNumbers",
  "numbers:buyANumber",
  "numbers:cancelANumber",
  "numbers:updateANumber"
] as const;
export type VonageVoiceFullApiNumbersOperationKey = typeof VonageVoiceFullApiNumbersOperationKeys[number];
// End hardened literal operation keys.

export interface VonageVoiceFullApiNumbersOperationPathParamMap {
  "numbers:getOwnedNumbers": {};
  "numbers:getAvailableNumbers": {};
  "numbers:buyANumber": {};
  "numbers:cancelANumber": {};
  "numbers:updateANumber": {};
}

export interface VonageVoiceFullApiNumbersOperationRequestMap {
  "numbers:getOwnedNumbers": VonageVoiceFullApiOperationInput<"numbers:getOwnedNumbers">;
  "numbers:getAvailableNumbers": VonageVoiceFullApiOperationInput<"numbers:getAvailableNumbers">;
  "numbers:buyANumber": VonageVoiceFullApiOperationInput<"numbers:buyANumber">;
  "numbers:cancelANumber": VonageVoiceFullApiOperationInput<"numbers:cancelANumber">;
  "numbers:updateANumber": VonageVoiceFullApiOperationInput<"numbers:updateANumber">;
}

export interface VonageVoiceFullApiNumbersGeneratedClient {
  NumbersGetOwnedNumbers(...args: VonageVoiceFullApiOperationArgs<"numbers:getOwnedNumbers">): Promise<VonageVoiceFullApiOperationResponseMap["numbers:getOwnedNumbers"]>;
  NumbersGetAvailableNumbers(...args: VonageVoiceFullApiOperationArgs<"numbers:getAvailableNumbers">): Promise<VonageVoiceFullApiOperationResponseMap["numbers:getAvailableNumbers"]>;
  NumbersBuyANumber(...args: VonageVoiceFullApiOperationArgs<"numbers:buyANumber">): Promise<VonageVoiceFullApiOperationResponseMap["numbers:buyANumber"]>;
  NumbersCancelANumber(...args: VonageVoiceFullApiOperationArgs<"numbers:cancelANumber">): Promise<VonageVoiceFullApiOperationResponseMap["numbers:cancelANumber"]>;
  NumbersUpdateANumber(...args: VonageVoiceFullApiOperationArgs<"numbers:updateANumber">): Promise<VonageVoiceFullApiOperationResponseMap["numbers:updateANumber"]>;
}

export const VonageVoiceFullApiNumbersGeneratedFunctionNames = [
  "NumbersGetOwnedNumbers",
  "NumbersGetAvailableNumbers",
  "NumbersBuyANumber",
  "NumbersCancelANumber",
  "NumbersUpdateANumber"
] as const satisfies readonly (keyof VonageVoiceFullApiNumbersGeneratedClient)[];

export function createVonageVoiceFullApiNumbersGeneratedClient(
  callOperation: VonageGeneratedOperationCaller,
): VonageVoiceFullApiNumbersGeneratedClient {
  return {
    NumbersGetOwnedNumbers: (...args) => callOperation("numbers:getOwnedNumbers", ...(args as VonageVoiceFullApiOperationArgs<"numbers:getOwnedNumbers">)),
    NumbersGetAvailableNumbers: (...args) => callOperation("numbers:getAvailableNumbers", ...(args as VonageVoiceFullApiOperationArgs<"numbers:getAvailableNumbers">)),
    NumbersBuyANumber: (...args) => callOperation("numbers:buyANumber", ...(args as VonageVoiceFullApiOperationArgs<"numbers:buyANumber">)),
    NumbersCancelANumber: (...args) => callOperation("numbers:cancelANumber", ...(args as VonageVoiceFullApiOperationArgs<"numbers:cancelANumber">)),
    NumbersUpdateANumber: (...args) => callOperation("numbers:updateANumber", ...(args as VonageVoiceFullApiOperationArgs<"numbers:updateANumber">)),
  };
}
