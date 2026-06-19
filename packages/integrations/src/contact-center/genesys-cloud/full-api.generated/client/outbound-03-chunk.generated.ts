// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiOutbound03OperationKeys = [
  "putOutboundContactlistContact",
  "putOutboundContactlistfilter",
  "putOutboundContactlisttemplate",
  "putOutboundDigitalruleset",
  "putOutboundDnclist",
  "putOutboundFilespecificationtemplate",
  "putOutboundImporttemplate",
  "putOutboundMessagingcampaign",
  "putOutboundRuleset",
  "putOutboundSchedulesCampaign",
  "putOutboundSchedulesEmailcampaign",
  "putOutboundSchedulesMessagingcampaign",
  "putOutboundSchedulesSequence",
  "putOutboundSchedulesWhatsappcampaign",
  "putOutboundSequence",
  "putOutboundWrapupcodemappings"
] as const;
export type GenesysCloudFullApiOutbound03OperationKey = typeof GenesysCloudFullApiOutbound03OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiOutbound03OperationPathParamMap {
  "putOutboundContactlistContact": { "contactListId": GenesysCloudFullApiPathParamValue; "contactId": GenesysCloudFullApiPathParamValue };
  "putOutboundContactlistfilter": { "contactListFilterId": GenesysCloudFullApiPathParamValue };
  "putOutboundContactlisttemplate": { "contactListTemplateId": GenesysCloudFullApiPathParamValue };
  "putOutboundDigitalruleset": { "digitalRuleSetId": GenesysCloudFullApiPathParamValue };
  "putOutboundDnclist": { "dncListId": GenesysCloudFullApiPathParamValue };
  "putOutboundFilespecificationtemplate": { "fileSpecificationTemplateId": GenesysCloudFullApiPathParamValue };
  "putOutboundImporttemplate": { "importTemplateId": GenesysCloudFullApiPathParamValue };
  "putOutboundMessagingcampaign": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "putOutboundRuleset": { "ruleSetId": GenesysCloudFullApiPathParamValue };
  "putOutboundSchedulesCampaign": { "campaignId": GenesysCloudFullApiPathParamValue };
  "putOutboundSchedulesEmailcampaign": { "emailCampaignId": GenesysCloudFullApiPathParamValue };
  "putOutboundSchedulesMessagingcampaign": { "messagingCampaignId": GenesysCloudFullApiPathParamValue };
  "putOutboundSchedulesSequence": { "sequenceId": GenesysCloudFullApiPathParamValue };
  "putOutboundSchedulesWhatsappcampaign": { "whatsAppCampaignId": GenesysCloudFullApiPathParamValue };
  "putOutboundSequence": { "sequenceId": GenesysCloudFullApiPathParamValue };
  "putOutboundWrapupcodemappings": {};
}

export interface GenesysCloudFullApiOutbound03OperationRequestMap {
  "putOutboundContactlistContact": GenesysCloudFullApiOperationInput<"putOutboundContactlistContact">;
  "putOutboundContactlistfilter": GenesysCloudFullApiOperationInput<"putOutboundContactlistfilter">;
  "putOutboundContactlisttemplate": GenesysCloudFullApiOperationInput<"putOutboundContactlisttemplate">;
  "putOutboundDigitalruleset": GenesysCloudFullApiOperationInput<"putOutboundDigitalruleset">;
  "putOutboundDnclist": GenesysCloudFullApiOperationInput<"putOutboundDnclist">;
  "putOutboundFilespecificationtemplate": GenesysCloudFullApiOperationInput<"putOutboundFilespecificationtemplate">;
  "putOutboundImporttemplate": GenesysCloudFullApiOperationInput<"putOutboundImporttemplate">;
  "putOutboundMessagingcampaign": GenesysCloudFullApiOperationInput<"putOutboundMessagingcampaign">;
  "putOutboundRuleset": GenesysCloudFullApiOperationInput<"putOutboundRuleset">;
  "putOutboundSchedulesCampaign": GenesysCloudFullApiOperationInput<"putOutboundSchedulesCampaign">;
  "putOutboundSchedulesEmailcampaign": GenesysCloudFullApiOperationInput<"putOutboundSchedulesEmailcampaign">;
  "putOutboundSchedulesMessagingcampaign": GenesysCloudFullApiOperationInput<"putOutboundSchedulesMessagingcampaign">;
  "putOutboundSchedulesSequence": GenesysCloudFullApiOperationInput<"putOutboundSchedulesSequence">;
  "putOutboundSchedulesWhatsappcampaign": GenesysCloudFullApiOperationInput<"putOutboundSchedulesWhatsappcampaign">;
  "putOutboundSequence": GenesysCloudFullApiOperationInput<"putOutboundSequence">;
  "putOutboundWrapupcodemappings": GenesysCloudFullApiOperationInput<"putOutboundWrapupcodemappings">;
}

export interface GenesysCloudFullApiOutbound03GeneratedClient {
  PutOutboundContactlistContact(...args: GenesysCloudFullApiOperationArgs<"putOutboundContactlistContact">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundContactlistContact"]>;
  PutOutboundContactlistfilter(...args: GenesysCloudFullApiOperationArgs<"putOutboundContactlistfilter">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundContactlistfilter"]>;
  PutOutboundContactlisttemplate(...args: GenesysCloudFullApiOperationArgs<"putOutboundContactlisttemplate">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundContactlisttemplate"]>;
  PutOutboundDigitalruleset(...args: GenesysCloudFullApiOperationArgs<"putOutboundDigitalruleset">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundDigitalruleset"]>;
  PutOutboundDnclist(...args: GenesysCloudFullApiOperationArgs<"putOutboundDnclist">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundDnclist"]>;
  PutOutboundFilespecificationtemplate(...args: GenesysCloudFullApiOperationArgs<"putOutboundFilespecificationtemplate">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundFilespecificationtemplate"]>;
  PutOutboundImporttemplate(...args: GenesysCloudFullApiOperationArgs<"putOutboundImporttemplate">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundImporttemplate"]>;
  PutOutboundMessagingcampaign(...args: GenesysCloudFullApiOperationArgs<"putOutboundMessagingcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundMessagingcampaign"]>;
  PutOutboundRuleset(...args: GenesysCloudFullApiOperationArgs<"putOutboundRuleset">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundRuleset"]>;
  PutOutboundSchedulesCampaign(...args: GenesysCloudFullApiOperationArgs<"putOutboundSchedulesCampaign">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundSchedulesCampaign"]>;
  PutOutboundSchedulesEmailcampaign(...args: GenesysCloudFullApiOperationArgs<"putOutboundSchedulesEmailcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundSchedulesEmailcampaign"]>;
  PutOutboundSchedulesMessagingcampaign(...args: GenesysCloudFullApiOperationArgs<"putOutboundSchedulesMessagingcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundSchedulesMessagingcampaign"]>;
  PutOutboundSchedulesSequence(...args: GenesysCloudFullApiOperationArgs<"putOutboundSchedulesSequence">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundSchedulesSequence"]>;
  PutOutboundSchedulesWhatsappcampaign(...args: GenesysCloudFullApiOperationArgs<"putOutboundSchedulesWhatsappcampaign">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundSchedulesWhatsappcampaign"]>;
  PutOutboundSequence(...args: GenesysCloudFullApiOperationArgs<"putOutboundSequence">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundSequence"]>;
  PutOutboundWrapupcodemappings(...args: GenesysCloudFullApiOperationArgs<"putOutboundWrapupcodemappings">): Promise<GenesysCloudFullApiOperationResponseMap["putOutboundWrapupcodemappings"]>;
}

export const GenesysCloudFullApiOutbound03GeneratedFunctionNames = [
  "PutOutboundContactlistContact",
  "PutOutboundContactlistfilter",
  "PutOutboundContactlisttemplate",
  "PutOutboundDigitalruleset",
  "PutOutboundDnclist",
  "PutOutboundFilespecificationtemplate",
  "PutOutboundImporttemplate",
  "PutOutboundMessagingcampaign",
  "PutOutboundRuleset",
  "PutOutboundSchedulesCampaign",
  "PutOutboundSchedulesEmailcampaign",
  "PutOutboundSchedulesMessagingcampaign",
  "PutOutboundSchedulesSequence",
  "PutOutboundSchedulesWhatsappcampaign",
  "PutOutboundSequence",
  "PutOutboundWrapupcodemappings"
] as const satisfies readonly (keyof GenesysCloudFullApiOutbound03GeneratedClient)[];

export function createGenesysCloudFullApiOutbound03GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiOutbound03GeneratedClient {
  return {
    PutOutboundContactlistContact: (...args) => callOperation("putOutboundContactlistContact", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundContactlistContact">)),
    PutOutboundContactlistfilter: (...args) => callOperation("putOutboundContactlistfilter", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundContactlistfilter">)),
    PutOutboundContactlisttemplate: (...args) => callOperation("putOutboundContactlisttemplate", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundContactlisttemplate">)),
    PutOutboundDigitalruleset: (...args) => callOperation("putOutboundDigitalruleset", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundDigitalruleset">)),
    PutOutboundDnclist: (...args) => callOperation("putOutboundDnclist", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundDnclist">)),
    PutOutboundFilespecificationtemplate: (...args) => callOperation("putOutboundFilespecificationtemplate", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundFilespecificationtemplate">)),
    PutOutboundImporttemplate: (...args) => callOperation("putOutboundImporttemplate", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundImporttemplate">)),
    PutOutboundMessagingcampaign: (...args) => callOperation("putOutboundMessagingcampaign", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundMessagingcampaign">)),
    PutOutboundRuleset: (...args) => callOperation("putOutboundRuleset", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundRuleset">)),
    PutOutboundSchedulesCampaign: (...args) => callOperation("putOutboundSchedulesCampaign", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundSchedulesCampaign">)),
    PutOutboundSchedulesEmailcampaign: (...args) => callOperation("putOutboundSchedulesEmailcampaign", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundSchedulesEmailcampaign">)),
    PutOutboundSchedulesMessagingcampaign: (...args) => callOperation("putOutboundSchedulesMessagingcampaign", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundSchedulesMessagingcampaign">)),
    PutOutboundSchedulesSequence: (...args) => callOperation("putOutboundSchedulesSequence", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundSchedulesSequence">)),
    PutOutboundSchedulesWhatsappcampaign: (...args) => callOperation("putOutboundSchedulesWhatsappcampaign", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundSchedulesWhatsappcampaign">)),
    PutOutboundSequence: (...args) => callOperation("putOutboundSequence", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundSequence">)),
    PutOutboundWrapupcodemappings: (...args) => callOperation("putOutboundWrapupcodemappings", ...(args as GenesysCloudFullApiOperationArgs<"putOutboundWrapupcodemappings">)),
  };
}
