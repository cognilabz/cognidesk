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
export const AppStoreFullApiDiagnosticSignaturesOperationKeys = [
  "diagnosticSignatures_logs_getToManyRelated"
] as const;
export type AppStoreFullApiDiagnosticSignaturesOperationKey = typeof AppStoreFullApiDiagnosticSignaturesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiDiagnosticSignaturesOperationPathParamMap {
  "diagnosticSignatures_logs_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiDiagnosticSignaturesOperationRequestMap {
  "diagnosticSignatures_logs_getToManyRelated": AppStoreFullApiOperationInput<"diagnosticSignatures_logs_getToManyRelated">;
}

export interface AppStoreFullApiDiagnosticSignaturesGeneratedClient {
  DiagnosticSignaturesLogsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"diagnosticSignatures_logs_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["diagnosticSignatures_logs_getToManyRelated"]>;
}

export const AppStoreFullApiDiagnosticSignaturesGeneratedFunctionNames = [
  "DiagnosticSignaturesLogsGetToManyRelated"
] as const satisfies readonly (keyof AppStoreFullApiDiagnosticSignaturesGeneratedClient)[];

export function createAppStoreFullApiDiagnosticSignaturesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiDiagnosticSignaturesGeneratedClient {
  return {
    DiagnosticSignaturesLogsGetToManyRelated: (...args) => callOperation("diagnosticSignatures_logs_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"diagnosticSignatures_logs_getToManyRelated">)),
  };
}
