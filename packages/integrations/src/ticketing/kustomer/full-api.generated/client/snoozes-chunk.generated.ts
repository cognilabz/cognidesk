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
export const KustomerFullApiSnoozesOperationKeys = [
  "GetAllSnoozes",
  "GetSnoozes",
  "CreateaSnooze",
  "CreateSnooze",
  "DeleteSnooze",
  "GetSnoozebyID",
  "GetSnoozeById",
  "UpdateSnooze",
  "UpdateSnoozebyID",
  "GetSnoozesByKlass"
] as const;
export type KustomerFullApiSnoozesOperationKey = typeof KustomerFullApiSnoozesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSnoozesOperationPathParamMap {
  "GetAllSnoozes": {};
  "GetSnoozes": {};
  "CreateaSnooze": {};
  "CreateSnooze": {};
  "DeleteSnooze": { "id": KustomerFullApiPathParamValue };
  "GetSnoozebyID": { "id": KustomerFullApiPathParamValue };
  "GetSnoozeById": { "id": KustomerFullApiPathParamValue };
  "UpdateSnooze": { "id": KustomerFullApiPathParamValue };
  "UpdateSnoozebyID": { "id": KustomerFullApiPathParamValue };
  "GetSnoozesByKlass": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSnoozesOperationRequestMap {
  "GetAllSnoozes": KustomerFullApiOperationInput<"GetAllSnoozes">;
  "GetSnoozes": KustomerFullApiOperationInput<"GetSnoozes">;
  "CreateaSnooze": KustomerFullApiOperationInput<"CreateaSnooze">;
  "CreateSnooze": KustomerFullApiOperationInput<"CreateSnooze">;
  "DeleteSnooze": KustomerFullApiOperationInput<"DeleteSnooze">;
  "GetSnoozebyID": KustomerFullApiOperationInput<"GetSnoozebyID">;
  "GetSnoozeById": KustomerFullApiOperationInput<"GetSnoozeById">;
  "UpdateSnooze": KustomerFullApiOperationInput<"UpdateSnooze">;
  "UpdateSnoozebyID": KustomerFullApiOperationInput<"UpdateSnoozebyID">;
  "GetSnoozesByKlass": KustomerFullApiOperationInput<"GetSnoozesByKlass">;
}

export interface KustomerFullApiSnoozesGeneratedClient {
  kustomerGetAllSnoozes(...args: KustomerFullApiOperationArgs<"GetAllSnoozes">): Promise<KustomerFullApiOperationResponseMap["GetAllSnoozes"]>;
  kustomerGetSnoozes(...args: KustomerFullApiOperationArgs<"GetSnoozes">): Promise<KustomerFullApiOperationResponseMap["GetSnoozes"]>;
  kustomerCreateaSnooze(...args: KustomerFullApiOperationArgs<"CreateaSnooze">): Promise<KustomerFullApiOperationResponseMap["CreateaSnooze"]>;
  kustomerCreateSnooze(...args: KustomerFullApiOperationArgs<"CreateSnooze">): Promise<KustomerFullApiOperationResponseMap["CreateSnooze"]>;
  kustomerDeleteSnooze(...args: KustomerFullApiOperationArgs<"DeleteSnooze">): Promise<KustomerFullApiOperationResponseMap["DeleteSnooze"]>;
  kustomerGetSnoozebyID(...args: KustomerFullApiOperationArgs<"GetSnoozebyID">): Promise<KustomerFullApiOperationResponseMap["GetSnoozebyID"]>;
  kustomerGetSnoozeById(...args: KustomerFullApiOperationArgs<"GetSnoozeById">): Promise<KustomerFullApiOperationResponseMap["GetSnoozeById"]>;
  kustomerUpdateSnooze(...args: KustomerFullApiOperationArgs<"UpdateSnooze">): Promise<KustomerFullApiOperationResponseMap["UpdateSnooze"]>;
  kustomerUpdateSnoozebyID(...args: KustomerFullApiOperationArgs<"UpdateSnoozebyID">): Promise<KustomerFullApiOperationResponseMap["UpdateSnoozebyID"]>;
  kustomerGetSnoozesByKlass(...args: KustomerFullApiOperationArgs<"GetSnoozesByKlass">): Promise<KustomerFullApiOperationResponseMap["GetSnoozesByKlass"]>;
}

export const KustomerFullApiSnoozesGeneratedFunctionNames = [
  "kustomerGetAllSnoozes",
  "kustomerGetSnoozes",
  "kustomerCreateaSnooze",
  "kustomerCreateSnooze",
  "kustomerDeleteSnooze",
  "kustomerGetSnoozebyID",
  "kustomerGetSnoozeById",
  "kustomerUpdateSnooze",
  "kustomerUpdateSnoozebyID",
  "kustomerGetSnoozesByKlass"
] as const satisfies readonly (keyof KustomerFullApiSnoozesGeneratedClient)[];

export function createKustomerFullApiSnoozesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSnoozesGeneratedClient {
  return {
    kustomerGetAllSnoozes: (...args) => callOperation("GetAllSnoozes", ...(args as KustomerFullApiOperationArgs<"GetAllSnoozes">)),
    kustomerGetSnoozes: (...args) => callOperation("GetSnoozes", ...(args as KustomerFullApiOperationArgs<"GetSnoozes">)),
    kustomerCreateaSnooze: (...args) => callOperation("CreateaSnooze", ...(args as KustomerFullApiOperationArgs<"CreateaSnooze">)),
    kustomerCreateSnooze: (...args) => callOperation("CreateSnooze", ...(args as KustomerFullApiOperationArgs<"CreateSnooze">)),
    kustomerDeleteSnooze: (...args) => callOperation("DeleteSnooze", ...(args as KustomerFullApiOperationArgs<"DeleteSnooze">)),
    kustomerGetSnoozebyID: (...args) => callOperation("GetSnoozebyID", ...(args as KustomerFullApiOperationArgs<"GetSnoozebyID">)),
    kustomerGetSnoozeById: (...args) => callOperation("GetSnoozeById", ...(args as KustomerFullApiOperationArgs<"GetSnoozeById">)),
    kustomerUpdateSnooze: (...args) => callOperation("UpdateSnooze", ...(args as KustomerFullApiOperationArgs<"UpdateSnooze">)),
    kustomerUpdateSnoozebyID: (...args) => callOperation("UpdateSnoozebyID", ...(args as KustomerFullApiOperationArgs<"UpdateSnoozebyID">)),
    kustomerGetSnoozesByKlass: (...args) => callOperation("GetSnoozesByKlass", ...(args as KustomerFullApiOperationArgs<"GetSnoozesByKlass">)),
  };
}
