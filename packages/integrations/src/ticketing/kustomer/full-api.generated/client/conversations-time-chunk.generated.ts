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
export const KustomerFullApiConversationsTimeOperationKeys = [
  "Getconversationtimesbyconversationid",
  "GetV2conversationtimesbyconversationid",
  "Getconversationtimebyids"
] as const;
export type KustomerFullApiConversationsTimeOperationKey = typeof KustomerFullApiConversationsTimeOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiConversationsTimeOperationPathParamMap {
  "Getconversationtimesbyconversationid": { "id": KustomerFullApiPathParamValue };
  "GetV2conversationtimesbyconversationid": { "id": KustomerFullApiPathParamValue };
  "Getconversationtimebyids": { "ids": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiConversationsTimeOperationRequestMap {
  "Getconversationtimesbyconversationid": KustomerFullApiOperationInput<"Getconversationtimesbyconversationid">;
  "GetV2conversationtimesbyconversationid": KustomerFullApiOperationInput<"GetV2conversationtimesbyconversationid">;
  "Getconversationtimebyids": KustomerFullApiOperationInput<"Getconversationtimebyids">;
}

export interface KustomerFullApiConversationsTimeGeneratedClient {
  kustomerGetconversationtimesbyconversationid(...args: KustomerFullApiOperationArgs<"Getconversationtimesbyconversationid">): Promise<KustomerFullApiOperationResponseMap["Getconversationtimesbyconversationid"]>;
  kustomerGetV2conversationtimesbyconversationid(...args: KustomerFullApiOperationArgs<"GetV2conversationtimesbyconversationid">): Promise<KustomerFullApiOperationResponseMap["GetV2conversationtimesbyconversationid"]>;
  kustomerGetconversationtimebyids(...args: KustomerFullApiOperationArgs<"Getconversationtimebyids">): Promise<KustomerFullApiOperationResponseMap["Getconversationtimebyids"]>;
}

export const KustomerFullApiConversationsTimeGeneratedFunctionNames = [
  "kustomerGetconversationtimesbyconversationid",
  "kustomerGetV2conversationtimesbyconversationid",
  "kustomerGetconversationtimebyids"
] as const satisfies readonly (keyof KustomerFullApiConversationsTimeGeneratedClient)[];

export function createKustomerFullApiConversationsTimeGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiConversationsTimeGeneratedClient {
  return {
    kustomerGetconversationtimesbyconversationid: (...args) => callOperation("Getconversationtimesbyconversationid", ...(args as KustomerFullApiOperationArgs<"Getconversationtimesbyconversationid">)),
    kustomerGetV2conversationtimesbyconversationid: (...args) => callOperation("GetV2conversationtimesbyconversationid", ...(args as KustomerFullApiOperationArgs<"GetV2conversationtimesbyconversationid">)),
    kustomerGetconversationtimebyids: (...args) => callOperation("Getconversationtimebyids", ...(args as KustomerFullApiOperationArgs<"Getconversationtimebyids">)),
  };
}
