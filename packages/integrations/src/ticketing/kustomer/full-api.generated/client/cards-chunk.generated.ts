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
export const KustomerFullApiCardsOperationKeys = [
  "GetCards",
  "DeleteaCard",
  "GetCard",
  "UpdateaCard",
  "CreateaCard",
  "InstallaCard"
] as const;
export type KustomerFullApiCardsOperationKey = typeof KustomerFullApiCardsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCardsOperationPathParamMap {
  "GetCards": {};
  "DeleteaCard": { "id": KustomerFullApiPathParamValue };
  "GetCard": { "id": KustomerFullApiPathParamValue };
  "UpdateaCard": { "id": KustomerFullApiPathParamValue };
  "CreateaCard": {};
  "InstallaCard": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCardsOperationRequestMap {
  "GetCards": KustomerFullApiOperationInput<"GetCards">;
  "DeleteaCard": KustomerFullApiOperationInput<"DeleteaCard">;
  "GetCard": KustomerFullApiOperationInput<"GetCard">;
  "UpdateaCard": KustomerFullApiOperationInput<"UpdateaCard">;
  "CreateaCard": KustomerFullApiOperationInput<"CreateaCard">;
  "InstallaCard": KustomerFullApiOperationInput<"InstallaCard">;
}

export interface KustomerFullApiCardsGeneratedClient {
  kustomerGetCards(...args: KustomerFullApiOperationArgs<"GetCards">): Promise<KustomerFullApiOperationResponseMap["GetCards"]>;
  kustomerDeleteaCard(...args: KustomerFullApiOperationArgs<"DeleteaCard">): Promise<KustomerFullApiOperationResponseMap["DeleteaCard"]>;
  kustomerGetCard(...args: KustomerFullApiOperationArgs<"GetCard">): Promise<KustomerFullApiOperationResponseMap["GetCard"]>;
  kustomerUpdateaCard(...args: KustomerFullApiOperationArgs<"UpdateaCard">): Promise<KustomerFullApiOperationResponseMap["UpdateaCard"]>;
  kustomerCreateaCard(...args: KustomerFullApiOperationArgs<"CreateaCard">): Promise<KustomerFullApiOperationResponseMap["CreateaCard"]>;
  kustomerInstallaCard(...args: KustomerFullApiOperationArgs<"InstallaCard">): Promise<KustomerFullApiOperationResponseMap["InstallaCard"]>;
}

export const KustomerFullApiCardsGeneratedFunctionNames = [
  "kustomerGetCards",
  "kustomerDeleteaCard",
  "kustomerGetCard",
  "kustomerUpdateaCard",
  "kustomerCreateaCard",
  "kustomerInstallaCard"
] as const satisfies readonly (keyof KustomerFullApiCardsGeneratedClient)[];

export function createKustomerFullApiCardsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCardsGeneratedClient {
  return {
    kustomerGetCards: (...args) => callOperation("GetCards", ...(args as KustomerFullApiOperationArgs<"GetCards">)),
    kustomerDeleteaCard: (...args) => callOperation("DeleteaCard", ...(args as KustomerFullApiOperationArgs<"DeleteaCard">)),
    kustomerGetCard: (...args) => callOperation("GetCard", ...(args as KustomerFullApiOperationArgs<"GetCard">)),
    kustomerUpdateaCard: (...args) => callOperation("UpdateaCard", ...(args as KustomerFullApiOperationArgs<"UpdateaCard">)),
    kustomerCreateaCard: (...args) => callOperation("CreateaCard", ...(args as KustomerFullApiOperationArgs<"CreateaCard">)),
    kustomerInstallaCard: (...args) => callOperation("InstallaCard", ...(args as KustomerFullApiOperationArgs<"InstallaCard">)),
  };
}
