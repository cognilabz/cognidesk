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
export const TalkdeskFullApiIndustriesSettingsOperationKeys = [
  "createInteractionConfiguration",
  "industries-settings-configurations-service-type-type-id-filter-get",
  "industries-settings-configurations-service-type-filter-get"
] as const;
export type TalkdeskFullApiIndustriesSettingsOperationKey = typeof TalkdeskFullApiIndustriesSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIndustriesSettingsOperationPathParamMap {
  "createInteractionConfiguration": {};
  "industries-settings-configurations-service-type-type-id-filter-get": { "service": TalkdeskFullApiPathParamValue; "type": TalkdeskFullApiPathParamValue; "type_id": TalkdeskFullApiPathParamValue };
  "industries-settings-configurations-service-type-filter-get": { "service": TalkdeskFullApiPathParamValue; "type": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiIndustriesSettingsOperationRequestMap {
  "createInteractionConfiguration": TalkdeskFullApiOperationInput<"createInteractionConfiguration">;
  "industries-settings-configurations-service-type-type-id-filter-get": TalkdeskFullApiOperationInput<"industries-settings-configurations-service-type-type-id-filter-get">;
  "industries-settings-configurations-service-type-filter-get": TalkdeskFullApiOperationInput<"industries-settings-configurations-service-type-filter-get">;
}

export interface TalkdeskFullApiIndustriesSettingsGeneratedClient {
  CreateInteractionConfiguration(...args: TalkdeskFullApiOperationArgs<"createInteractionConfiguration">): Promise<TalkdeskFullApiOperationResponseMap["createInteractionConfiguration"]>;
  IndustriesSettingsConfigurationsServiceTypeTypeIdFilterGet(...args: TalkdeskFullApiOperationArgs<"industries-settings-configurations-service-type-type-id-filter-get">): Promise<TalkdeskFullApiOperationResponseMap["industries-settings-configurations-service-type-type-id-filter-get"]>;
  IndustriesSettingsConfigurationsServiceTypeFilterGet(...args: TalkdeskFullApiOperationArgs<"industries-settings-configurations-service-type-filter-get">): Promise<TalkdeskFullApiOperationResponseMap["industries-settings-configurations-service-type-filter-get"]>;
}

export const TalkdeskFullApiIndustriesSettingsGeneratedFunctionNames = [
  "CreateInteractionConfiguration",
  "IndustriesSettingsConfigurationsServiceTypeTypeIdFilterGet",
  "IndustriesSettingsConfigurationsServiceTypeFilterGet"
] as const satisfies readonly (keyof TalkdeskFullApiIndustriesSettingsGeneratedClient)[];

export function createTalkdeskFullApiIndustriesSettingsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIndustriesSettingsGeneratedClient {
  return {
    CreateInteractionConfiguration: (...args) => callOperation("createInteractionConfiguration", ...(args as TalkdeskFullApiOperationArgs<"createInteractionConfiguration">)),
    IndustriesSettingsConfigurationsServiceTypeTypeIdFilterGet: (...args) => callOperation("industries-settings-configurations-service-type-type-id-filter-get", ...(args as TalkdeskFullApiOperationArgs<"industries-settings-configurations-service-type-type-id-filter-get">)),
    IndustriesSettingsConfigurationsServiceTypeFilterGet: (...args) => callOperation("industries-settings-configurations-service-type-filter-get", ...(args as TalkdeskFullApiOperationArgs<"industries-settings-configurations-service-type-filter-get">)),
  };
}
