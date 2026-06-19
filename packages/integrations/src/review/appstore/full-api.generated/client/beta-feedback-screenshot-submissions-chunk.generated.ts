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
export const AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationKeys = [
  "betaFeedbackScreenshotSubmissions_deleteInstance",
  "betaFeedbackScreenshotSubmissions_getInstance"
] as const;
export type AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationKey = typeof AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationPathParamMap {
  "betaFeedbackScreenshotSubmissions_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaFeedbackScreenshotSubmissions_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaFeedbackScreenshotSubmissionsOperationRequestMap {
  "betaFeedbackScreenshotSubmissions_deleteInstance": AppStoreFullApiOperationInput<"betaFeedbackScreenshotSubmissions_deleteInstance">;
  "betaFeedbackScreenshotSubmissions_getInstance": AppStoreFullApiOperationInput<"betaFeedbackScreenshotSubmissions_getInstance">;
}

export interface AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient {
  BetaFeedbackScreenshotSubmissionsDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaFeedbackScreenshotSubmissions_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaFeedbackScreenshotSubmissions_deleteInstance"]>;
  BetaFeedbackScreenshotSubmissionsGetInstance(...args: AppStoreFullApiOperationArgs<"betaFeedbackScreenshotSubmissions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaFeedbackScreenshotSubmissions_getInstance"]>;
}

export const AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedFunctionNames = [
  "BetaFeedbackScreenshotSubmissionsDeleteInstance",
  "BetaFeedbackScreenshotSubmissionsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient)[];

export function createAppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaFeedbackScreenshotSubmissionsGeneratedClient {
  return {
    BetaFeedbackScreenshotSubmissionsDeleteInstance: (...args) => callOperation("betaFeedbackScreenshotSubmissions_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaFeedbackScreenshotSubmissions_deleteInstance">)),
    BetaFeedbackScreenshotSubmissionsGetInstance: (...args) => callOperation("betaFeedbackScreenshotSubmissions_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaFeedbackScreenshotSubmissions_getInstance">)),
  };
}
