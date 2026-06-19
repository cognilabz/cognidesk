// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiCampaignControlOperationKeys = [
  "dynamic-campaigns:PATCH /{campaign-id}"
] as const;
export type EightByEightContactCenterApiCampaignControlOperationKey = typeof EightByEightContactCenterApiCampaignControlOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiCampaignControlOperationPathParamMap {
  "dynamic-campaigns:PATCH /{campaign-id}": { "campaign-id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiCampaignControlOperationRequestMap {
  "dynamic-campaigns:PATCH /{campaign-id}": EightByEightContactCenterApiOperationInput<"dynamic-campaigns:PATCH /{campaign-id}">;
}

export interface EightByEightContactCenterApiCampaignControlGeneratedClient {
  Changecampaignstatus(...args: EightByEightContactCenterApiOperationArgs<"dynamic-campaigns:PATCH /{campaign-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["dynamic-campaigns:PATCH /{campaign-id}"]>;
}

export const EightByEightContactCenterApiCampaignControlGeneratedFunctionNames = [
  "Changecampaignstatus"
] as const satisfies readonly (keyof EightByEightContactCenterApiCampaignControlGeneratedClient)[];

export function createEightByEightContactCenterApiCampaignControlGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiCampaignControlGeneratedClient {
  return {
    Changecampaignstatus: (...args) => callOperation("dynamic-campaigns:PATCH /{campaign-id}", ...(args as EightByEightContactCenterApiOperationArgs<"dynamic-campaigns:PATCH /{campaign-id}">)),
  };
}
