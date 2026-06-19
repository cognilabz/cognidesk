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
export const IntercomFullApiIPAllowlistOperationKeys = [
  "getIpAllowlist",
  "updateIpAllowlist"
] as const;
export type IntercomFullApiIPAllowlistOperationKey = typeof IntercomFullApiIPAllowlistOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiIPAllowlistOperationPathParamMap {
  "getIpAllowlist": {};
  "updateIpAllowlist": {};
}

export interface IntercomFullApiIPAllowlistOperationRequestMap {
  "getIpAllowlist": IntercomFullApiOperationInput<"getIpAllowlist">;
  "updateIpAllowlist": IntercomFullApiOperationInput<"updateIpAllowlist">;
}

export interface IntercomFullApiIPAllowlistGeneratedClient {
  intercomGetIpAllowlist(...args: IntercomFullApiOperationArgs<"getIpAllowlist">): Promise<IntercomFullApiOperationResponseMap["getIpAllowlist"]>;
  intercomUpdateIpAllowlist(...args: IntercomFullApiOperationArgs<"updateIpAllowlist">): Promise<IntercomFullApiOperationResponseMap["updateIpAllowlist"]>;
}

export const IntercomFullApiIPAllowlistGeneratedFunctionNames = [
  "intercomGetIpAllowlist",
  "intercomUpdateIpAllowlist"
] as const satisfies readonly (keyof IntercomFullApiIPAllowlistGeneratedClient)[];

export function createIntercomFullApiIPAllowlistGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiIPAllowlistGeneratedClient {
  return {
    intercomGetIpAllowlist: (...args) => callOperation("getIpAllowlist", ...(args as IntercomFullApiOperationArgs<"getIpAllowlist">)),
    intercomUpdateIpAllowlist: (...args) => callOperation("updateIpAllowlist", ...(args as IntercomFullApiOperationArgs<"updateIpAllowlist">)),
  };
}
