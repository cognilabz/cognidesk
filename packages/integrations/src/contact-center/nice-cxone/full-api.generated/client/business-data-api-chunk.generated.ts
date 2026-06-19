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
export const NiceCxoneFullApiBusinessDataAPIOperationKeys = [
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}",
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}"
] as const;
export type NiceCxoneFullApiBusinessDataAPIOperationKey = typeof NiceCxoneFullApiBusinessDataAPIOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiBusinessDataAPIOperationPathParamMap {
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}": { "contactId": NiceCxoneFullApiPathParamValue };
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}": { "contactId": NiceCxoneFullApiPathParamValue; "segmentId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiBusinessDataAPIOperationRequestMap {
  "businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}": NiceCxoneFullApiOperationInput<"businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}">;
  "businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}": NiceCxoneFullApiOperationInput<"businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}">;
}

export interface NiceCxoneFullApiBusinessDataAPIGeneratedClient {
  BusinessdataBusinessdataApiDocsUpdateBusinessDataFieldForClosedInteraction(...args: NiceCxoneFullApiOperationArgs<"businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}">): Promise<NiceCxoneFullApiOperationResponseMap["businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}"]>;
  BusinessdataBusinessdataApiDocsUpdateBusinessDataFieldAtSegmentLevelForClosedInteraction(...args: NiceCxoneFullApiOperationArgs<"businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}">): Promise<NiceCxoneFullApiOperationResponseMap["businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}"]>;
}

export const NiceCxoneFullApiBusinessDataAPIGeneratedFunctionNames = [
  "BusinessdataBusinessdataApiDocsUpdateBusinessDataFieldForClosedInteraction",
  "BusinessdataBusinessdataApiDocsUpdateBusinessDataFieldAtSegmentLevelForClosedInteraction"
] as const satisfies readonly (keyof NiceCxoneFullApiBusinessDataAPIGeneratedClient)[];

export function createNiceCxoneFullApiBusinessDataAPIGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiBusinessDataAPIGeneratedClient {
  return {
    BusinessdataBusinessdataApiDocsUpdateBusinessDataFieldForClosedInteraction: (...args) => callOperation("businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}", ...(args as NiceCxoneFullApiOperationArgs<"businessdata-businessdata-api-docs:updateBusinessDataFieldForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}">)),
    BusinessdataBusinessdataApiDocsUpdateBusinessDataFieldAtSegmentLevelForClosedInteraction: (...args) => callOperation("businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}", ...(args as NiceCxoneFullApiOperationArgs<"businessdata-businessdata-api-docs:updateBusinessDataFieldAtSegmentLevelForClosedInteraction:PUT:/business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}">)),
  };
}
