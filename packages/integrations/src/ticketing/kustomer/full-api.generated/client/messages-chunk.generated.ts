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
export const KustomerFullApiMessagesOperationKeys = [
  "GetMessages",
  "CreateMessage",
  "GetaMessage",
  "UpdateMessageAttributes",
  "UpdateaMessage",
  "RedactMessage",
  "GetaMessagebyExternalID"
] as const;
export type KustomerFullApiMessagesOperationKey = typeof KustomerFullApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiMessagesOperationPathParamMap {
  "GetMessages": {};
  "CreateMessage": {};
  "GetaMessage": { "id": KustomerFullApiPathParamValue };
  "UpdateMessageAttributes": { "id": KustomerFullApiPathParamValue };
  "UpdateaMessage": { "id": KustomerFullApiPathParamValue };
  "RedactMessage": { "id": KustomerFullApiPathParamValue };
  "GetaMessagebyExternalID": { "externalId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiMessagesOperationRequestMap {
  "GetMessages": KustomerFullApiOperationInput<"GetMessages">;
  "CreateMessage": KustomerFullApiOperationInput<"CreateMessage">;
  "GetaMessage": KustomerFullApiOperationInput<"GetaMessage">;
  "UpdateMessageAttributes": KustomerFullApiOperationInput<"UpdateMessageAttributes">;
  "UpdateaMessage": KustomerFullApiOperationInput<"UpdateaMessage">;
  "RedactMessage": KustomerFullApiOperationInput<"RedactMessage">;
  "GetaMessagebyExternalID": KustomerFullApiOperationInput<"GetaMessagebyExternalID">;
}

export interface KustomerFullApiMessagesGeneratedClient {
  kustomerGetMessages(...args: KustomerFullApiOperationArgs<"GetMessages">): Promise<KustomerFullApiOperationResponseMap["GetMessages"]>;
  kustomerCreateMessage(...args: KustomerFullApiOperationArgs<"CreateMessage">): Promise<KustomerFullApiOperationResponseMap["CreateMessage"]>;
  kustomerGetaMessage(...args: KustomerFullApiOperationArgs<"GetaMessage">): Promise<KustomerFullApiOperationResponseMap["GetaMessage"]>;
  kustomerUpdateMessageAttributes(...args: KustomerFullApiOperationArgs<"UpdateMessageAttributes">): Promise<KustomerFullApiOperationResponseMap["UpdateMessageAttributes"]>;
  kustomerUpdateaMessage(...args: KustomerFullApiOperationArgs<"UpdateaMessage">): Promise<KustomerFullApiOperationResponseMap["UpdateaMessage"]>;
  kustomerRedactMessage(...args: KustomerFullApiOperationArgs<"RedactMessage">): Promise<KustomerFullApiOperationResponseMap["RedactMessage"]>;
  kustomerGetaMessagebyExternalID(...args: KustomerFullApiOperationArgs<"GetaMessagebyExternalID">): Promise<KustomerFullApiOperationResponseMap["GetaMessagebyExternalID"]>;
}

export const KustomerFullApiMessagesGeneratedFunctionNames = [
  "kustomerGetMessages",
  "kustomerCreateMessage",
  "kustomerGetaMessage",
  "kustomerUpdateMessageAttributes",
  "kustomerUpdateaMessage",
  "kustomerRedactMessage",
  "kustomerGetaMessagebyExternalID"
] as const satisfies readonly (keyof KustomerFullApiMessagesGeneratedClient)[];

export function createKustomerFullApiMessagesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiMessagesGeneratedClient {
  return {
    kustomerGetMessages: (...args) => callOperation("GetMessages", ...(args as KustomerFullApiOperationArgs<"GetMessages">)),
    kustomerCreateMessage: (...args) => callOperation("CreateMessage", ...(args as KustomerFullApiOperationArgs<"CreateMessage">)),
    kustomerGetaMessage: (...args) => callOperation("GetaMessage", ...(args as KustomerFullApiOperationArgs<"GetaMessage">)),
    kustomerUpdateMessageAttributes: (...args) => callOperation("UpdateMessageAttributes", ...(args as KustomerFullApiOperationArgs<"UpdateMessageAttributes">)),
    kustomerUpdateaMessage: (...args) => callOperation("UpdateaMessage", ...(args as KustomerFullApiOperationArgs<"UpdateaMessage">)),
    kustomerRedactMessage: (...args) => callOperation("RedactMessage", ...(args as KustomerFullApiOperationArgs<"RedactMessage">)),
    kustomerGetaMessagebyExternalID: (...args) => callOperation("GetaMessagebyExternalID", ...(args as KustomerFullApiOperationArgs<"GetaMessagebyExternalID">)),
  };
}
