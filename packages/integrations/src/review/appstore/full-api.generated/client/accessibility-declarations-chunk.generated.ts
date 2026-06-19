// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiAccessibilityDeclarationsOperationKeys = [
  "accessibilityDeclarations_createInstance",
  "accessibilityDeclarations_deleteInstance",
  "accessibilityDeclarations_getInstance",
  "accessibilityDeclarations_updateInstance"
] as const;
export type AppStoreFullApiAccessibilityDeclarationsOperationKey = typeof AppStoreFullApiAccessibilityDeclarationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAccessibilityDeclarationsOperationPathParamMap {
  "accessibilityDeclarations_createInstance": {};
  "accessibilityDeclarations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "accessibilityDeclarations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "accessibilityDeclarations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAccessibilityDeclarationsOperationRequestMap {
  "accessibilityDeclarations_createInstance": AppStoreFullApiOperationInput<"accessibilityDeclarations_createInstance">;
  "accessibilityDeclarations_deleteInstance": AppStoreFullApiOperationInput<"accessibilityDeclarations_deleteInstance">;
  "accessibilityDeclarations_getInstance": AppStoreFullApiOperationInput<"accessibilityDeclarations_getInstance">;
  "accessibilityDeclarations_updateInstance": AppStoreFullApiOperationInput<"accessibilityDeclarations_updateInstance">;
}

export interface AppStoreFullApiAccessibilityDeclarationsGeneratedClient {
  AccessibilityDeclarationsCreateInstance(...args: AppStoreFullApiOperationArgs<"accessibilityDeclarations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["accessibilityDeclarations_createInstance"]>;
  AccessibilityDeclarationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"accessibilityDeclarations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["accessibilityDeclarations_deleteInstance"]>;
  AccessibilityDeclarationsGetInstance(...args: AppStoreFullApiOperationArgs<"accessibilityDeclarations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["accessibilityDeclarations_getInstance"]>;
  AccessibilityDeclarationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"accessibilityDeclarations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["accessibilityDeclarations_updateInstance"]>;
}

export const AppStoreFullApiAccessibilityDeclarationsGeneratedFunctionNames = [
  "AccessibilityDeclarationsCreateInstance",
  "AccessibilityDeclarationsDeleteInstance",
  "AccessibilityDeclarationsGetInstance",
  "AccessibilityDeclarationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAccessibilityDeclarationsGeneratedClient)[];

export function createAppStoreFullApiAccessibilityDeclarationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAccessibilityDeclarationsGeneratedClient {
  return {
    AccessibilityDeclarationsCreateInstance: (...args) => callOperation("accessibilityDeclarations_createInstance", ...(args as AppStoreFullApiOperationArgs<"accessibilityDeclarations_createInstance">)),
    AccessibilityDeclarationsDeleteInstance: (...args) => callOperation("accessibilityDeclarations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"accessibilityDeclarations_deleteInstance">)),
    AccessibilityDeclarationsGetInstance: (...args) => callOperation("accessibilityDeclarations_getInstance", ...(args as AppStoreFullApiOperationArgs<"accessibilityDeclarations_getInstance">)),
    AccessibilityDeclarationsUpdateInstance: (...args) => callOperation("accessibilityDeclarations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"accessibilityDeclarations_updateInstance">)),
  };
}
