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
export const KustomerFullApiKlassesOperationKeys = [
  "GetKlasses",
  "CreateaKlass",
  "DeleteaKlass",
  "GetKlass",
  "UpdateaKlass"
] as const;
export type KustomerFullApiKlassesOperationKey = typeof KustomerFullApiKlassesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiKlassesOperationPathParamMap {
  "GetKlasses": {};
  "CreateaKlass": {};
  "DeleteaKlass": { "id": KustomerFullApiPathParamValue };
  "GetKlass": { "id": KustomerFullApiPathParamValue };
  "UpdateaKlass": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiKlassesOperationRequestMap {
  "GetKlasses": KustomerFullApiOperationInput<"GetKlasses">;
  "CreateaKlass": KustomerFullApiOperationInput<"CreateaKlass">;
  "DeleteaKlass": KustomerFullApiOperationInput<"DeleteaKlass">;
  "GetKlass": KustomerFullApiOperationInput<"GetKlass">;
  "UpdateaKlass": KustomerFullApiOperationInput<"UpdateaKlass">;
}

export interface KustomerFullApiKlassesGeneratedClient {
  kustomerGetKlasses(...args: KustomerFullApiOperationArgs<"GetKlasses">): Promise<KustomerFullApiOperationResponseMap["GetKlasses"]>;
  kustomerCreateaKlass(...args: KustomerFullApiOperationArgs<"CreateaKlass">): Promise<KustomerFullApiOperationResponseMap["CreateaKlass"]>;
  kustomerDeleteaKlass(...args: KustomerFullApiOperationArgs<"DeleteaKlass">): Promise<KustomerFullApiOperationResponseMap["DeleteaKlass"]>;
  kustomerGetKlass(...args: KustomerFullApiOperationArgs<"GetKlass">): Promise<KustomerFullApiOperationResponseMap["GetKlass"]>;
  kustomerUpdateaKlass(...args: KustomerFullApiOperationArgs<"UpdateaKlass">): Promise<KustomerFullApiOperationResponseMap["UpdateaKlass"]>;
}

export const KustomerFullApiKlassesGeneratedFunctionNames = [
  "kustomerGetKlasses",
  "kustomerCreateaKlass",
  "kustomerDeleteaKlass",
  "kustomerGetKlass",
  "kustomerUpdateaKlass"
] as const satisfies readonly (keyof KustomerFullApiKlassesGeneratedClient)[];

export function createKustomerFullApiKlassesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiKlassesGeneratedClient {
  return {
    kustomerGetKlasses: (...args) => callOperation("GetKlasses", ...(args as KustomerFullApiOperationArgs<"GetKlasses">)),
    kustomerCreateaKlass: (...args) => callOperation("CreateaKlass", ...(args as KustomerFullApiOperationArgs<"CreateaKlass">)),
    kustomerDeleteaKlass: (...args) => callOperation("DeleteaKlass", ...(args as KustomerFullApiOperationArgs<"DeleteaKlass">)),
    kustomerGetKlass: (...args) => callOperation("GetKlass", ...(args as KustomerFullApiOperationArgs<"GetKlass">)),
    kustomerUpdateaKlass: (...args) => callOperation("UpdateaKlass", ...(args as KustomerFullApiOperationArgs<"UpdateaKlass">)),
  };
}
