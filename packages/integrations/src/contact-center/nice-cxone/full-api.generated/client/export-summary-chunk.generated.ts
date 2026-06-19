// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiExportSummaryOperationKeys = [
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}"
] as const;
export type NiceCxoneFullApiExportSummaryOperationKey = typeof NiceCxoneFullApiExportSummaryOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiExportSummaryOperationPathParamMap {
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}": { "activityCodeName": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiExportSummaryOperationRequestMap {
  "wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}": NiceCxoneFullApiOperationInput<"wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}">;
}

export interface NiceCxoneFullApiExportSummaryGeneratedClient {
  WfmExportsummaryApiDocsGetSummary(...args: NiceCxoneFullApiOperationArgs<"wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}">): Promise<NiceCxoneFullApiOperationResponseMap["wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}"]>;
}

export const NiceCxoneFullApiExportSummaryGeneratedFunctionNames = [
  "WfmExportsummaryApiDocsGetSummary"
] as const satisfies readonly (keyof NiceCxoneFullApiExportSummaryGeneratedClient)[];

export function createNiceCxoneFullApiExportSummaryGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiExportSummaryGeneratedClient {
  return {
    WfmExportsummaryApiDocsGetSummary: (...args) => callOperation("wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}", ...(args as NiceCxoneFullApiOperationArgs<"wfm-exportsummary-api-docs:get-summary:GET:/timeoff-manager/summary/{activityCodeName}">)),
  };
}
