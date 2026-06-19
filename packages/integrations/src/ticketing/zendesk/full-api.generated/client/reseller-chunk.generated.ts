// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiResellerOperationKeys = [
  "CreateTrialAccount",
  "VerifySubdomainAvailability"
] as const;
export type ZendeskFullApiResellerOperationKey = typeof ZendeskFullApiResellerOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiResellerOperationPathParamMap {
  "CreateTrialAccount": {};
  "VerifySubdomainAvailability": {};
}

export interface ZendeskFullApiResellerOperationRequestMap {
  "CreateTrialAccount": ZendeskFullApiOperationInput<"CreateTrialAccount">;
  "VerifySubdomainAvailability": ZendeskFullApiOperationInput<"VerifySubdomainAvailability">;
}

export interface ZendeskFullApiResellerGeneratedClient {
  CreateTrialAccount(...args: ZendeskFullApiOperationArgs<"CreateTrialAccount">): Promise<ZendeskFullApiOperationResponseMap["CreateTrialAccount"]>;
  VerifySubdomainAvailability(...args: ZendeskFullApiOperationArgs<"VerifySubdomainAvailability">): Promise<ZendeskFullApiOperationResponseMap["VerifySubdomainAvailability"]>;
}

export const ZendeskFullApiResellerGeneratedFunctionNames = [
  "CreateTrialAccount",
  "VerifySubdomainAvailability"
] as const satisfies readonly (keyof ZendeskFullApiResellerGeneratedClient)[];

export function createZendeskFullApiResellerGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiResellerGeneratedClient {
  return {
    CreateTrialAccount: (...args) => callOperation("CreateTrialAccount", ...(args as ZendeskFullApiOperationArgs<"CreateTrialAccount">)),
    VerifySubdomainAvailability: (...args) => callOperation("VerifySubdomainAvailability", ...(args as ZendeskFullApiOperationArgs<"VerifySubdomainAvailability">)),
  };
}
