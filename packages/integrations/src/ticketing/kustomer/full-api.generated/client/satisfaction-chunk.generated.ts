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
export const KustomerFullApiSatisfactionOperationKeys = [
  "GetSatisfaction",
  "GetSatisfactionResponse"
] as const;
export type KustomerFullApiSatisfactionOperationKey = typeof KustomerFullApiSatisfactionOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSatisfactionOperationPathParamMap {
  "GetSatisfaction": {};
  "GetSatisfactionResponse": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSatisfactionOperationRequestMap {
  "GetSatisfaction": KustomerFullApiOperationInput<"GetSatisfaction">;
  "GetSatisfactionResponse": KustomerFullApiOperationInput<"GetSatisfactionResponse">;
}

export interface KustomerFullApiSatisfactionGeneratedClient {
  kustomerGetSatisfaction(...args: KustomerFullApiOperationArgs<"GetSatisfaction">): Promise<KustomerFullApiOperationResponseMap["GetSatisfaction"]>;
  kustomerGetSatisfactionResponse(...args: KustomerFullApiOperationArgs<"GetSatisfactionResponse">): Promise<KustomerFullApiOperationResponseMap["GetSatisfactionResponse"]>;
}

export const KustomerFullApiSatisfactionGeneratedFunctionNames = [
  "kustomerGetSatisfaction",
  "kustomerGetSatisfactionResponse"
] as const satisfies readonly (keyof KustomerFullApiSatisfactionGeneratedClient)[];

export function createKustomerFullApiSatisfactionGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSatisfactionGeneratedClient {
  return {
    kustomerGetSatisfaction: (...args) => callOperation("GetSatisfaction", ...(args as KustomerFullApiOperationArgs<"GetSatisfaction">)),
    kustomerGetSatisfactionResponse: (...args) => callOperation("GetSatisfactionResponse", ...(args as KustomerFullApiOperationArgs<"GetSatisfactionResponse">)),
  };
}
