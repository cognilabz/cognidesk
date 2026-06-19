// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiDialerIntegrationsOperationKeys = [
  "GetCampaignRecord"
] as const;
export type TalkdeskFullApiDialerIntegrationsOperationKey = typeof TalkdeskFullApiDialerIntegrationsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiDialerIntegrationsOperationPathParamMap {
  "GetCampaignRecord": { "campaign_id": TalkdeskFullApiPathParamValue; "record_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiDialerIntegrationsOperationRequestMap {
  "GetCampaignRecord": TalkdeskFullApiOperationInput<"GetCampaignRecord">;
}

export interface TalkdeskFullApiDialerIntegrationsGeneratedClient {
  GetCampaignRecord(...args: TalkdeskFullApiOperationArgs<"GetCampaignRecord">): Promise<TalkdeskFullApiOperationResponseMap["GetCampaignRecord"]>;
}

export const TalkdeskFullApiDialerIntegrationsGeneratedFunctionNames = [
  "GetCampaignRecord"
] as const satisfies readonly (keyof TalkdeskFullApiDialerIntegrationsGeneratedClient)[];

export function createTalkdeskFullApiDialerIntegrationsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiDialerIntegrationsGeneratedClient {
  return {
    GetCampaignRecord: (...args) => callOperation("GetCampaignRecord", ...(args as TalkdeskFullApiOperationArgs<"GetCampaignRecord">)),
  };
}
