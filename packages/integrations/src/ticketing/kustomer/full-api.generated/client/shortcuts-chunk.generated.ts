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
export const KustomerFullApiShortcutsOperationKeys = [
  "GetAllShortcuts",
  "CreateaShortcut",
  "DeleteaShortcut",
  "GetaShortcut",
  "UpdateaShortcut"
] as const;
export type KustomerFullApiShortcutsOperationKey = typeof KustomerFullApiShortcutsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiShortcutsOperationPathParamMap {
  "GetAllShortcuts": {};
  "CreateaShortcut": {};
  "DeleteaShortcut": { "id": KustomerFullApiPathParamValue };
  "GetaShortcut": { "id": KustomerFullApiPathParamValue };
  "UpdateaShortcut": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiShortcutsOperationRequestMap {
  "GetAllShortcuts": KustomerFullApiOperationInput<"GetAllShortcuts">;
  "CreateaShortcut": KustomerFullApiOperationInput<"CreateaShortcut">;
  "DeleteaShortcut": KustomerFullApiOperationInput<"DeleteaShortcut">;
  "GetaShortcut": KustomerFullApiOperationInput<"GetaShortcut">;
  "UpdateaShortcut": KustomerFullApiOperationInput<"UpdateaShortcut">;
}

export interface KustomerFullApiShortcutsGeneratedClient {
  kustomerGetAllShortcuts(...args: KustomerFullApiOperationArgs<"GetAllShortcuts">): Promise<KustomerFullApiOperationResponseMap["GetAllShortcuts"]>;
  kustomerCreateaShortcut(...args: KustomerFullApiOperationArgs<"CreateaShortcut">): Promise<KustomerFullApiOperationResponseMap["CreateaShortcut"]>;
  kustomerDeleteaShortcut(...args: KustomerFullApiOperationArgs<"DeleteaShortcut">): Promise<KustomerFullApiOperationResponseMap["DeleteaShortcut"]>;
  kustomerGetaShortcut(...args: KustomerFullApiOperationArgs<"GetaShortcut">): Promise<KustomerFullApiOperationResponseMap["GetaShortcut"]>;
  kustomerUpdateaShortcut(...args: KustomerFullApiOperationArgs<"UpdateaShortcut">): Promise<KustomerFullApiOperationResponseMap["UpdateaShortcut"]>;
}

export const KustomerFullApiShortcutsGeneratedFunctionNames = [
  "kustomerGetAllShortcuts",
  "kustomerCreateaShortcut",
  "kustomerDeleteaShortcut",
  "kustomerGetaShortcut",
  "kustomerUpdateaShortcut"
] as const satisfies readonly (keyof KustomerFullApiShortcutsGeneratedClient)[];

export function createKustomerFullApiShortcutsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiShortcutsGeneratedClient {
  return {
    kustomerGetAllShortcuts: (...args) => callOperation("GetAllShortcuts", ...(args as KustomerFullApiOperationArgs<"GetAllShortcuts">)),
    kustomerCreateaShortcut: (...args) => callOperation("CreateaShortcut", ...(args as KustomerFullApiOperationArgs<"CreateaShortcut">)),
    kustomerDeleteaShortcut: (...args) => callOperation("DeleteaShortcut", ...(args as KustomerFullApiOperationArgs<"DeleteaShortcut">)),
    kustomerGetaShortcut: (...args) => callOperation("GetaShortcut", ...(args as KustomerFullApiOperationArgs<"GetaShortcut">)),
    kustomerUpdateaShortcut: (...args) => callOperation("UpdateaShortcut", ...(args as KustomerFullApiOperationArgs<"UpdateaShortcut">)),
  };
}
