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
export const KustomerFullApiTemplatesOperationKeys = [
  "GetTemplates",
  "GetTemplatesbyID"
] as const;
export type KustomerFullApiTemplatesOperationKey = typeof KustomerFullApiTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiTemplatesOperationPathParamMap {
  "GetTemplates": {};
  "GetTemplatesbyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiTemplatesOperationRequestMap {
  "GetTemplates": KustomerFullApiOperationInput<"GetTemplates">;
  "GetTemplatesbyID": KustomerFullApiOperationInput<"GetTemplatesbyID">;
}

export interface KustomerFullApiTemplatesGeneratedClient {
  kustomerGetTemplates(...args: KustomerFullApiOperationArgs<"GetTemplates">): Promise<KustomerFullApiOperationResponseMap["GetTemplates"]>;
  kustomerGetTemplatesbyID(...args: KustomerFullApiOperationArgs<"GetTemplatesbyID">): Promise<KustomerFullApiOperationResponseMap["GetTemplatesbyID"]>;
}

export const KustomerFullApiTemplatesGeneratedFunctionNames = [
  "kustomerGetTemplates",
  "kustomerGetTemplatesbyID"
] as const satisfies readonly (keyof KustomerFullApiTemplatesGeneratedClient)[];

export function createKustomerFullApiTemplatesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiTemplatesGeneratedClient {
  return {
    kustomerGetTemplates: (...args) => callOperation("GetTemplates", ...(args as KustomerFullApiOperationArgs<"GetTemplates">)),
    kustomerGetTemplatesbyID: (...args) => callOperation("GetTemplatesbyID", ...(args as KustomerFullApiOperationArgs<"GetTemplatesbyID">)),
  };
}
