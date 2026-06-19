// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiIncrementalSkillBasedRoutingOperationKeys = [
  "IncrementalSkilBasedRoutingAttributesExport",
  "IncrementalSkilBasedRoutingAttributeValuesExport",
  "IncrementalSkilBasedRoutingInstanceValuesExport"
] as const;
export type ZendeskFullApiIncrementalSkillBasedRoutingOperationKey = typeof ZendeskFullApiIncrementalSkillBasedRoutingOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiIncrementalSkillBasedRoutingOperationPathParamMap {
  "IncrementalSkilBasedRoutingAttributesExport": {};
  "IncrementalSkilBasedRoutingAttributeValuesExport": {};
  "IncrementalSkilBasedRoutingInstanceValuesExport": {};
}

export interface ZendeskFullApiIncrementalSkillBasedRoutingOperationRequestMap {
  "IncrementalSkilBasedRoutingAttributesExport": ZendeskFullApiOperationInput<"IncrementalSkilBasedRoutingAttributesExport">;
  "IncrementalSkilBasedRoutingAttributeValuesExport": ZendeskFullApiOperationInput<"IncrementalSkilBasedRoutingAttributeValuesExport">;
  "IncrementalSkilBasedRoutingInstanceValuesExport": ZendeskFullApiOperationInput<"IncrementalSkilBasedRoutingInstanceValuesExport">;
}

export interface ZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient {
  IncrementalSkilBasedRoutingAttributesExport(...args: ZendeskFullApiOperationArgs<"IncrementalSkilBasedRoutingAttributesExport">): Promise<ZendeskFullApiOperationResponseMap["IncrementalSkilBasedRoutingAttributesExport"]>;
  IncrementalSkilBasedRoutingAttributeValuesExport(...args: ZendeskFullApiOperationArgs<"IncrementalSkilBasedRoutingAttributeValuesExport">): Promise<ZendeskFullApiOperationResponseMap["IncrementalSkilBasedRoutingAttributeValuesExport"]>;
  IncrementalSkilBasedRoutingInstanceValuesExport(...args: ZendeskFullApiOperationArgs<"IncrementalSkilBasedRoutingInstanceValuesExport">): Promise<ZendeskFullApiOperationResponseMap["IncrementalSkilBasedRoutingInstanceValuesExport"]>;
}

export const ZendeskFullApiIncrementalSkillBasedRoutingGeneratedFunctionNames = [
  "IncrementalSkilBasedRoutingAttributesExport",
  "IncrementalSkilBasedRoutingAttributeValuesExport",
  "IncrementalSkilBasedRoutingInstanceValuesExport"
] as const satisfies readonly (keyof ZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient)[];

export function createZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiIncrementalSkillBasedRoutingGeneratedClient {
  return {
    IncrementalSkilBasedRoutingAttributesExport: (...args) => callOperation("IncrementalSkilBasedRoutingAttributesExport", ...(args as ZendeskFullApiOperationArgs<"IncrementalSkilBasedRoutingAttributesExport">)),
    IncrementalSkilBasedRoutingAttributeValuesExport: (...args) => callOperation("IncrementalSkilBasedRoutingAttributeValuesExport", ...(args as ZendeskFullApiOperationArgs<"IncrementalSkilBasedRoutingAttributeValuesExport">)),
    IncrementalSkilBasedRoutingInstanceValuesExport: (...args) => callOperation("IncrementalSkilBasedRoutingInstanceValuesExport", ...(args as ZendeskFullApiOperationArgs<"IncrementalSkilBasedRoutingInstanceValuesExport">)),
  };
}
