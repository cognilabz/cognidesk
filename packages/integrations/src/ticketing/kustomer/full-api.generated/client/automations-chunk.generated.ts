// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiAutomationsOperationKeys = [
  "ListAIAutomations",
  "GetAIAutomation"
] as const;
export type KustomerFullApiAutomationsOperationKey = typeof KustomerFullApiAutomationsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiAutomationsOperationPathParamMap {
  "ListAIAutomations": {};
  "GetAIAutomation": { "automationId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiAutomationsOperationRequestMap {
  "ListAIAutomations": KustomerFullApiOperationInput<"ListAIAutomations">;
  "GetAIAutomation": KustomerFullApiOperationInput<"GetAIAutomation">;
}

export interface KustomerFullApiAutomationsGeneratedClient {
  kustomerListAIAutomations(...args: KustomerFullApiOperationArgs<"ListAIAutomations">): Promise<KustomerFullApiOperationResponseMap["ListAIAutomations"]>;
  kustomerGetAIAutomation(...args: KustomerFullApiOperationArgs<"GetAIAutomation">): Promise<KustomerFullApiOperationResponseMap["GetAIAutomation"]>;
}

export const KustomerFullApiAutomationsGeneratedFunctionNames = [
  "kustomerListAIAutomations",
  "kustomerGetAIAutomation"
] as const satisfies readonly (keyof KustomerFullApiAutomationsGeneratedClient)[];

export function createKustomerFullApiAutomationsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiAutomationsGeneratedClient {
  return {
    kustomerListAIAutomations: (...args) => callOperation("ListAIAutomations", ...(args as KustomerFullApiOperationArgs<"ListAIAutomations">)),
    kustomerGetAIAutomation: (...args) => callOperation("GetAIAutomation", ...(args as KustomerFullApiOperationArgs<"GetAIAutomation">)),
  };
}
