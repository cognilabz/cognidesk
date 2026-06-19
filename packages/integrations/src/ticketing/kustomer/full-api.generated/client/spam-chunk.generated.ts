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
export const KustomerFullApiSpamOperationKeys = [
  "GetSpamSenders",
  "UpsertSpamSender",
  "DeleteSpamSender"
] as const;
export type KustomerFullApiSpamOperationKey = typeof KustomerFullApiSpamOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSpamOperationPathParamMap {
  "GetSpamSenders": {};
  "UpsertSpamSender": {};
  "DeleteSpamSender": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSpamOperationRequestMap {
  "GetSpamSenders": KustomerFullApiOperationInput<"GetSpamSenders">;
  "UpsertSpamSender": KustomerFullApiOperationInput<"UpsertSpamSender">;
  "DeleteSpamSender": KustomerFullApiOperationInput<"DeleteSpamSender">;
}

export interface KustomerFullApiSpamGeneratedClient {
  kustomerGetSpamSenders(...args: KustomerFullApiOperationArgs<"GetSpamSenders">): Promise<KustomerFullApiOperationResponseMap["GetSpamSenders"]>;
  kustomerUpsertSpamSender(...args: KustomerFullApiOperationArgs<"UpsertSpamSender">): Promise<KustomerFullApiOperationResponseMap["UpsertSpamSender"]>;
  kustomerDeleteSpamSender(...args: KustomerFullApiOperationArgs<"DeleteSpamSender">): Promise<KustomerFullApiOperationResponseMap["DeleteSpamSender"]>;
}

export const KustomerFullApiSpamGeneratedFunctionNames = [
  "kustomerGetSpamSenders",
  "kustomerUpsertSpamSender",
  "kustomerDeleteSpamSender"
] as const satisfies readonly (keyof KustomerFullApiSpamGeneratedClient)[];

export function createKustomerFullApiSpamGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSpamGeneratedClient {
  return {
    kustomerGetSpamSenders: (...args) => callOperation("GetSpamSenders", ...(args as KustomerFullApiOperationArgs<"GetSpamSenders">)),
    kustomerUpsertSpamSender: (...args) => callOperation("UpsertSpamSender", ...(args as KustomerFullApiOperationArgs<"UpsertSpamSender">)),
    kustomerDeleteSpamSender: (...args) => callOperation("DeleteSpamSender", ...(args as KustomerFullApiOperationArgs<"DeleteSpamSender">)),
  };
}
