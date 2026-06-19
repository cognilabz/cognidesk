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
export const NiceCxoneFullApiImportAllotmentsOperationKeys = [
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import"
] as const;
export type NiceCxoneFullApiImportAllotmentsOperationKey = typeof NiceCxoneFullApiImportAllotmentsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiImportAllotmentsOperationPathParamMap {
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import": {};
}

export interface NiceCxoneFullApiImportAllotmentsOperationRequestMap {
  "wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import": NiceCxoneFullApiOperationInput<"wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import">;
}

export interface NiceCxoneFullApiImportAllotmentsGeneratedClient {
  WfmImportallotmentApiDocsPutAllotments(...args: NiceCxoneFullApiOperationArgs<"wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import">): Promise<NiceCxoneFullApiOperationResponseMap["wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import"]>;
}

export const NiceCxoneFullApiImportAllotmentsGeneratedFunctionNames = [
  "WfmImportallotmentApiDocsPutAllotments"
] as const satisfies readonly (keyof NiceCxoneFullApiImportAllotmentsGeneratedClient)[];

export function createNiceCxoneFullApiImportAllotmentsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiImportAllotmentsGeneratedClient {
  return {
    WfmImportallotmentApiDocsPutAllotments: (...args) => callOperation("wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import", ...(args as NiceCxoneFullApiOperationArgs<"wfm-importallotment-api-docs:put-allotments:PUT:/timeoff-manager/allotments/import">)),
  };
}
