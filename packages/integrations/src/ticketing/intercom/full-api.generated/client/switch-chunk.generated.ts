// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiSwitchOperationKeys = [
  "createPhoneSwitch"
] as const;
export type IntercomFullApiSwitchOperationKey = typeof IntercomFullApiSwitchOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiSwitchOperationPathParamMap {
  "createPhoneSwitch": {};
}

export interface IntercomFullApiSwitchOperationRequestMap {
  "createPhoneSwitch": IntercomFullApiOperationInput<"createPhoneSwitch">;
}

export interface IntercomFullApiSwitchGeneratedClient {
  intercomCreatePhoneSwitch(...args: IntercomFullApiOperationArgs<"createPhoneSwitch">): Promise<IntercomFullApiOperationResponseMap["createPhoneSwitch"]>;
}

export const IntercomFullApiSwitchGeneratedFunctionNames = [
  "intercomCreatePhoneSwitch"
] as const satisfies readonly (keyof IntercomFullApiSwitchGeneratedClient)[];

export function createIntercomFullApiSwitchGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiSwitchGeneratedClient {
  return {
    intercomCreatePhoneSwitch: (...args) => callOperation("createPhoneSwitch", ...(args as IntercomFullApiOperationArgs<"createPhoneSwitch">)),
  };
}
