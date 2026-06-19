// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiFbaInboundOperationKeys = [
  "fbaInbound:getItemEligibilityPreview",
  "fulfillmentInboundV0:getPrepInstructions",
  "fulfillmentInboundV0:getLabels",
  "fulfillmentInboundV0:getBillOfLading",
  "fulfillmentInboundV0:getShipments",
  "fulfillmentInboundV0:getShipmentItemsByShipmentId",
  "fulfillmentInboundV0:getShipmentItems",
  "fulfillmentInbound_2024-03-20:listInboundPlans",
  "fulfillmentInbound_2024-03-20:createInboundPlan",
  "fulfillmentInbound_2024-03-20:getInboundPlan",
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes",
  "fulfillmentInbound_2024-03-20:cancelInboundPlan",
  "fulfillmentInbound_2024-03-20:listInboundPlanItems",
  "fulfillmentInbound_2024-03-20:updateInboundPlanName",
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes",
  "fulfillmentInbound_2024-03-20:listPackingGroupItems",
  "fulfillmentInbound_2024-03-20:setPackingInformation",
  "fulfillmentInbound_2024-03-20:listPackingOptions",
  "fulfillmentInbound_2024-03-20:generatePackingOptions",
  "fulfillmentInbound_2024-03-20:confirmPackingOption",
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets",
  "fulfillmentInbound_2024-03-20:listPlacementOptions",
  "fulfillmentInbound_2024-03-20:generatePlacementOptions",
  "fulfillmentInbound_2024-03-20:confirmPlacementOption",
  "fulfillmentInbound_2024-03-20:getShipment",
  "fulfillmentInbound_2024-03-20:listShipmentBoxes",
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews",
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews",
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview",
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview",
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument",
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions",
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions",
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions",
  "fulfillmentInbound_2024-03-20:listShipmentItems",
  "fulfillmentInbound_2024-03-20:updateShipmentName",
  "fulfillmentInbound_2024-03-20:listShipmentPallets",
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment",
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots",
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots",
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment",
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress",
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails",
  "fulfillmentInbound_2024-03-20:listTransportationOptions",
  "fulfillmentInbound_2024-03-20:generateTransportationOptions",
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions",
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails",
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails",
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels",
  "fulfillmentInbound_2024-03-20:listPrepDetails",
  "fulfillmentInbound_2024-03-20:setPrepDetails",
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus"
] as const;
export type AmazonFullApiFbaInboundOperationKey = typeof AmazonFullApiFbaInboundOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiFbaInboundOperationPathParamMap {
  "fbaInbound:getItemEligibilityPreview": {};
  "fulfillmentInboundV0:getPrepInstructions": {};
  "fulfillmentInboundV0:getLabels": { "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInboundV0:getBillOfLading": { "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInboundV0:getShipments": {};
  "fulfillmentInboundV0:getShipmentItemsByShipmentId": { "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInboundV0:getShipmentItems": {};
  "fulfillmentInbound_2024-03-20:listInboundPlans": {};
  "fulfillmentInbound_2024-03-20:createInboundPlan": {};
  "fulfillmentInbound_2024-03-20:getInboundPlan": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:cancelInboundPlan": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listInboundPlanItems": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:updateInboundPlanName": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes": { "inboundPlanId": AmazonFullApiPathParamValue; "packingGroupId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listPackingGroupItems": { "inboundPlanId": AmazonFullApiPathParamValue; "packingGroupId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:setPackingInformation": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listPackingOptions": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:generatePackingOptions": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:confirmPackingOption": { "inboundPlanId": AmazonFullApiPathParamValue; "packingOptionId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listPlacementOptions": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:generatePlacementOptions": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:confirmPlacementOption": { "inboundPlanId": AmazonFullApiPathParamValue; "placementOptionId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:getShipment": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listShipmentBoxes": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue; "contentUpdatePreviewId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue; "contentUpdatePreviewId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue; "deliveryWindowOptionId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listShipmentItems": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:updateShipmentName": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listShipmentPallets": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue; "slotId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails": { "inboundPlanId": AmazonFullApiPathParamValue; "shipmentId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listTransportationOptions": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:generateTransportationOptions": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions": { "inboundPlanId": AmazonFullApiPathParamValue };
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails": {};
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails": {};
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels": {};
  "fulfillmentInbound_2024-03-20:listPrepDetails": {};
  "fulfillmentInbound_2024-03-20:setPrepDetails": {};
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus": { "operationId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiFbaInboundOperationRequestMap {
  "fbaInbound:getItemEligibilityPreview": AmazonFullApiOperationInput<"fbaInbound:getItemEligibilityPreview">;
  "fulfillmentInboundV0:getPrepInstructions": AmazonFullApiOperationInput<"fulfillmentInboundV0:getPrepInstructions">;
  "fulfillmentInboundV0:getLabels": AmazonFullApiOperationInput<"fulfillmentInboundV0:getLabels">;
  "fulfillmentInboundV0:getBillOfLading": AmazonFullApiOperationInput<"fulfillmentInboundV0:getBillOfLading">;
  "fulfillmentInboundV0:getShipments": AmazonFullApiOperationInput<"fulfillmentInboundV0:getShipments">;
  "fulfillmentInboundV0:getShipmentItemsByShipmentId": AmazonFullApiOperationInput<"fulfillmentInboundV0:getShipmentItemsByShipmentId">;
  "fulfillmentInboundV0:getShipmentItems": AmazonFullApiOperationInput<"fulfillmentInboundV0:getShipmentItems">;
  "fulfillmentInbound_2024-03-20:listInboundPlans": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listInboundPlans">;
  "fulfillmentInbound_2024-03-20:createInboundPlan": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:createInboundPlan">;
  "fulfillmentInbound_2024-03-20:getInboundPlan": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:getInboundPlan">;
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listInboundPlanBoxes">;
  "fulfillmentInbound_2024-03-20:cancelInboundPlan": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:cancelInboundPlan">;
  "fulfillmentInbound_2024-03-20:listInboundPlanItems": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listInboundPlanItems">;
  "fulfillmentInbound_2024-03-20:updateInboundPlanName": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:updateInboundPlanName">;
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listPackingGroupBoxes">;
  "fulfillmentInbound_2024-03-20:listPackingGroupItems": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listPackingGroupItems">;
  "fulfillmentInbound_2024-03-20:setPackingInformation": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:setPackingInformation">;
  "fulfillmentInbound_2024-03-20:listPackingOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listPackingOptions">;
  "fulfillmentInbound_2024-03-20:generatePackingOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:generatePackingOptions">;
  "fulfillmentInbound_2024-03-20:confirmPackingOption": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:confirmPackingOption">;
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listInboundPlanPallets">;
  "fulfillmentInbound_2024-03-20:listPlacementOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listPlacementOptions">;
  "fulfillmentInbound_2024-03-20:generatePlacementOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:generatePlacementOptions">;
  "fulfillmentInbound_2024-03-20:confirmPlacementOption": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:confirmPlacementOption">;
  "fulfillmentInbound_2024-03-20:getShipment": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:getShipment">;
  "fulfillmentInbound_2024-03-20:listShipmentBoxes": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listShipmentBoxes">;
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews">;
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews">;
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview">;
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview">;
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:getDeliveryChallanDocument">;
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listDeliveryWindowOptions">;
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions">;
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions">;
  "fulfillmentInbound_2024-03-20:listShipmentItems": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listShipmentItems">;
  "fulfillmentInbound_2024-03-20:updateShipmentName": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:updateShipmentName">;
  "fulfillmentInbound_2024-03-20:listShipmentPallets": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listShipmentPallets">;
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:cancelSelfShipAppointment">;
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots">;
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots">;
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment">;
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:updateShipmentSourceAddress">;
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails">;
  "fulfillmentInbound_2024-03-20:listTransportationOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listTransportationOptions">;
  "fulfillmentInbound_2024-03-20:generateTransportationOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:generateTransportationOptions">;
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:confirmTransportationOptions">;
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listItemComplianceDetails">;
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:updateItemComplianceDetails">;
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:createMarketplaceItemLabels">;
  "fulfillmentInbound_2024-03-20:listPrepDetails": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:listPrepDetails">;
  "fulfillmentInbound_2024-03-20:setPrepDetails": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:setPrepDetails">;
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus": AmazonFullApiOperationInput<"fulfillmentInbound_2024-03-20:getInboundOperationStatus">;
}

export interface AmazonFullApiFbaInboundGeneratedClient {
  GetItemEligibilityPreview(...args: AmazonFullApiOperationArgs<"fbaInbound:getItemEligibilityPreview">): Promise<AmazonFullApiOperationResponseMap["fbaInbound:getItemEligibilityPreview"]>;
  GetPrepInstructions(...args: AmazonFullApiOperationArgs<"fulfillmentInboundV0:getPrepInstructions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInboundV0:getPrepInstructions"]>;
  GetLabels(...args: AmazonFullApiOperationArgs<"fulfillmentInboundV0:getLabels">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInboundV0:getLabels"]>;
  GetBillOfLading(...args: AmazonFullApiOperationArgs<"fulfillmentInboundV0:getBillOfLading">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInboundV0:getBillOfLading"]>;
  GetShipmentsFulfillmentInboundV0(...args: AmazonFullApiOperationArgs<"fulfillmentInboundV0:getShipments">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInboundV0:getShipments"]>;
  GetShipmentItemsByShipmentId(...args: AmazonFullApiOperationArgs<"fulfillmentInboundV0:getShipmentItemsByShipmentId">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInboundV0:getShipmentItemsByShipmentId"]>;
  GetShipmentItems(...args: AmazonFullApiOperationArgs<"fulfillmentInboundV0:getShipmentItems">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInboundV0:getShipmentItems"]>;
  ListInboundPlans(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlans">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listInboundPlans"]>;
  CreateInboundPlan(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:createInboundPlan">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:createInboundPlan"]>;
  GetInboundPlan(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getInboundPlan">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:getInboundPlan"]>;
  ListInboundPlanBoxes(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlanBoxes">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listInboundPlanBoxes"]>;
  CancelInboundPlan(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:cancelInboundPlan">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:cancelInboundPlan"]>;
  ListInboundPlanItems(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlanItems">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listInboundPlanItems"]>;
  UpdateInboundPlanName(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateInboundPlanName">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:updateInboundPlanName"]>;
  ListPackingGroupBoxes(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPackingGroupBoxes">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listPackingGroupBoxes"]>;
  ListPackingGroupItems(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPackingGroupItems">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listPackingGroupItems"]>;
  SetPackingInformation(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:setPackingInformation">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:setPackingInformation"]>;
  ListPackingOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPackingOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listPackingOptions"]>;
  GeneratePackingOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generatePackingOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:generatePackingOptions"]>;
  ConfirmPackingOption(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmPackingOption">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:confirmPackingOption"]>;
  ListInboundPlanPallets(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlanPallets">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listInboundPlanPallets"]>;
  ListPlacementOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPlacementOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listPlacementOptions"]>;
  GeneratePlacementOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generatePlacementOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:generatePlacementOptions"]>;
  ConfirmPlacementOption(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmPlacementOption">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:confirmPlacementOption"]>;
  GetShipmentFulfillmentInbound20240320(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getShipment">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:getShipment"]>;
  ListShipmentBoxes(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentBoxes">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listShipmentBoxes"]>;
  ListShipmentContentUpdatePreviews(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews"]>;
  GenerateShipmentContentUpdatePreviews(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews"]>;
  GetShipmentContentUpdatePreview(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview"]>;
  ConfirmShipmentContentUpdatePreview(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview"]>;
  GetDeliveryChallanDocument(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getDeliveryChallanDocument">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:getDeliveryChallanDocument"]>;
  ListDeliveryWindowOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listDeliveryWindowOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listDeliveryWindowOptions"]>;
  GenerateDeliveryWindowOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions"]>;
  ConfirmDeliveryWindowOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions"]>;
  ListShipmentItems(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentItems">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listShipmentItems"]>;
  UpdateShipmentName(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateShipmentName">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:updateShipmentName"]>;
  ListShipmentPallets(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentPallets">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listShipmentPallets"]>;
  CancelSelfShipAppointment(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:cancelSelfShipAppointment">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:cancelSelfShipAppointment"]>;
  GetSelfShipAppointmentSlots(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots"]>;
  GenerateSelfShipAppointmentSlots(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots"]>;
  ScheduleSelfShipAppointment(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment"]>;
  UpdateShipmentSourceAddress(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateShipmentSourceAddress">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:updateShipmentSourceAddress"]>;
  UpdateShipmentTrackingDetails(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails"]>;
  ListTransportationOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listTransportationOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listTransportationOptions"]>;
  GenerateTransportationOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateTransportationOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:generateTransportationOptions"]>;
  ConfirmTransportationOptions(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmTransportationOptions">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:confirmTransportationOptions"]>;
  ListItemComplianceDetails(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listItemComplianceDetails">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listItemComplianceDetails"]>;
  UpdateItemComplianceDetails(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateItemComplianceDetails">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:updateItemComplianceDetails"]>;
  CreateMarketplaceItemLabels(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:createMarketplaceItemLabels">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:createMarketplaceItemLabels"]>;
  ListPrepDetails(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPrepDetails">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:listPrepDetails"]>;
  SetPrepDetails(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:setPrepDetails">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:setPrepDetails"]>;
  GetInboundOperationStatus(...args: AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getInboundOperationStatus">): Promise<AmazonFullApiOperationResponseMap["fulfillmentInbound_2024-03-20:getInboundOperationStatus"]>;
}

export const AmazonFullApiFbaInboundGeneratedFunctionNames = [
  "GetItemEligibilityPreview",
  "GetPrepInstructions",
  "GetLabels",
  "GetBillOfLading",
  "GetShipmentsFulfillmentInboundV0",
  "GetShipmentItemsByShipmentId",
  "GetShipmentItems",
  "ListInboundPlans",
  "CreateInboundPlan",
  "GetInboundPlan",
  "ListInboundPlanBoxes",
  "CancelInboundPlan",
  "ListInboundPlanItems",
  "UpdateInboundPlanName",
  "ListPackingGroupBoxes",
  "ListPackingGroupItems",
  "SetPackingInformation",
  "ListPackingOptions",
  "GeneratePackingOptions",
  "ConfirmPackingOption",
  "ListInboundPlanPallets",
  "ListPlacementOptions",
  "GeneratePlacementOptions",
  "ConfirmPlacementOption",
  "GetShipmentFulfillmentInbound20240320",
  "ListShipmentBoxes",
  "ListShipmentContentUpdatePreviews",
  "GenerateShipmentContentUpdatePreviews",
  "GetShipmentContentUpdatePreview",
  "ConfirmShipmentContentUpdatePreview",
  "GetDeliveryChallanDocument",
  "ListDeliveryWindowOptions",
  "GenerateDeliveryWindowOptions",
  "ConfirmDeliveryWindowOptions",
  "ListShipmentItems",
  "UpdateShipmentName",
  "ListShipmentPallets",
  "CancelSelfShipAppointment",
  "GetSelfShipAppointmentSlots",
  "GenerateSelfShipAppointmentSlots",
  "ScheduleSelfShipAppointment",
  "UpdateShipmentSourceAddress",
  "UpdateShipmentTrackingDetails",
  "ListTransportationOptions",
  "GenerateTransportationOptions",
  "ConfirmTransportationOptions",
  "ListItemComplianceDetails",
  "UpdateItemComplianceDetails",
  "CreateMarketplaceItemLabels",
  "ListPrepDetails",
  "SetPrepDetails",
  "GetInboundOperationStatus"
] as const satisfies readonly (keyof AmazonFullApiFbaInboundGeneratedClient)[];

export function createAmazonFullApiFbaInboundGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiFbaInboundGeneratedClient {
  return {
    GetItemEligibilityPreview: (...args) => callOperation("fbaInbound:getItemEligibilityPreview", ...(args as AmazonFullApiOperationArgs<"fbaInbound:getItemEligibilityPreview">)),
    GetPrepInstructions: (...args) => callOperation("fulfillmentInboundV0:getPrepInstructions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInboundV0:getPrepInstructions">)),
    GetLabels: (...args) => callOperation("fulfillmentInboundV0:getLabels", ...(args as AmazonFullApiOperationArgs<"fulfillmentInboundV0:getLabels">)),
    GetBillOfLading: (...args) => callOperation("fulfillmentInboundV0:getBillOfLading", ...(args as AmazonFullApiOperationArgs<"fulfillmentInboundV0:getBillOfLading">)),
    GetShipmentsFulfillmentInboundV0: (...args) => callOperation("fulfillmentInboundV0:getShipments", ...(args as AmazonFullApiOperationArgs<"fulfillmentInboundV0:getShipments">)),
    GetShipmentItemsByShipmentId: (...args) => callOperation("fulfillmentInboundV0:getShipmentItemsByShipmentId", ...(args as AmazonFullApiOperationArgs<"fulfillmentInboundV0:getShipmentItemsByShipmentId">)),
    GetShipmentItems: (...args) => callOperation("fulfillmentInboundV0:getShipmentItems", ...(args as AmazonFullApiOperationArgs<"fulfillmentInboundV0:getShipmentItems">)),
    ListInboundPlans: (...args) => callOperation("fulfillmentInbound_2024-03-20:listInboundPlans", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlans">)),
    CreateInboundPlan: (...args) => callOperation("fulfillmentInbound_2024-03-20:createInboundPlan", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:createInboundPlan">)),
    GetInboundPlan: (...args) => callOperation("fulfillmentInbound_2024-03-20:getInboundPlan", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getInboundPlan">)),
    ListInboundPlanBoxes: (...args) => callOperation("fulfillmentInbound_2024-03-20:listInboundPlanBoxes", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlanBoxes">)),
    CancelInboundPlan: (...args) => callOperation("fulfillmentInbound_2024-03-20:cancelInboundPlan", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:cancelInboundPlan">)),
    ListInboundPlanItems: (...args) => callOperation("fulfillmentInbound_2024-03-20:listInboundPlanItems", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlanItems">)),
    UpdateInboundPlanName: (...args) => callOperation("fulfillmentInbound_2024-03-20:updateInboundPlanName", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateInboundPlanName">)),
    ListPackingGroupBoxes: (...args) => callOperation("fulfillmentInbound_2024-03-20:listPackingGroupBoxes", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPackingGroupBoxes">)),
    ListPackingGroupItems: (...args) => callOperation("fulfillmentInbound_2024-03-20:listPackingGroupItems", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPackingGroupItems">)),
    SetPackingInformation: (...args) => callOperation("fulfillmentInbound_2024-03-20:setPackingInformation", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:setPackingInformation">)),
    ListPackingOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:listPackingOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPackingOptions">)),
    GeneratePackingOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:generatePackingOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generatePackingOptions">)),
    ConfirmPackingOption: (...args) => callOperation("fulfillmentInbound_2024-03-20:confirmPackingOption", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmPackingOption">)),
    ListInboundPlanPallets: (...args) => callOperation("fulfillmentInbound_2024-03-20:listInboundPlanPallets", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listInboundPlanPallets">)),
    ListPlacementOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:listPlacementOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPlacementOptions">)),
    GeneratePlacementOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:generatePlacementOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generatePlacementOptions">)),
    ConfirmPlacementOption: (...args) => callOperation("fulfillmentInbound_2024-03-20:confirmPlacementOption", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmPlacementOption">)),
    GetShipmentFulfillmentInbound20240320: (...args) => callOperation("fulfillmentInbound_2024-03-20:getShipment", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getShipment">)),
    ListShipmentBoxes: (...args) => callOperation("fulfillmentInbound_2024-03-20:listShipmentBoxes", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentBoxes">)),
    ListShipmentContentUpdatePreviews: (...args) => callOperation("fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews">)),
    GenerateShipmentContentUpdatePreviews: (...args) => callOperation("fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews">)),
    GetShipmentContentUpdatePreview: (...args) => callOperation("fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview">)),
    ConfirmShipmentContentUpdatePreview: (...args) => callOperation("fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview">)),
    GetDeliveryChallanDocument: (...args) => callOperation("fulfillmentInbound_2024-03-20:getDeliveryChallanDocument", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getDeliveryChallanDocument">)),
    ListDeliveryWindowOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:listDeliveryWindowOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listDeliveryWindowOptions">)),
    GenerateDeliveryWindowOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions">)),
    ConfirmDeliveryWindowOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions">)),
    ListShipmentItems: (...args) => callOperation("fulfillmentInbound_2024-03-20:listShipmentItems", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentItems">)),
    UpdateShipmentName: (...args) => callOperation("fulfillmentInbound_2024-03-20:updateShipmentName", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateShipmentName">)),
    ListShipmentPallets: (...args) => callOperation("fulfillmentInbound_2024-03-20:listShipmentPallets", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listShipmentPallets">)),
    CancelSelfShipAppointment: (...args) => callOperation("fulfillmentInbound_2024-03-20:cancelSelfShipAppointment", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:cancelSelfShipAppointment">)),
    GetSelfShipAppointmentSlots: (...args) => callOperation("fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots">)),
    GenerateSelfShipAppointmentSlots: (...args) => callOperation("fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots">)),
    ScheduleSelfShipAppointment: (...args) => callOperation("fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment">)),
    UpdateShipmentSourceAddress: (...args) => callOperation("fulfillmentInbound_2024-03-20:updateShipmentSourceAddress", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateShipmentSourceAddress">)),
    UpdateShipmentTrackingDetails: (...args) => callOperation("fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails">)),
    ListTransportationOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:listTransportationOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listTransportationOptions">)),
    GenerateTransportationOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:generateTransportationOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:generateTransportationOptions">)),
    ConfirmTransportationOptions: (...args) => callOperation("fulfillmentInbound_2024-03-20:confirmTransportationOptions", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:confirmTransportationOptions">)),
    ListItemComplianceDetails: (...args) => callOperation("fulfillmentInbound_2024-03-20:listItemComplianceDetails", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listItemComplianceDetails">)),
    UpdateItemComplianceDetails: (...args) => callOperation("fulfillmentInbound_2024-03-20:updateItemComplianceDetails", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:updateItemComplianceDetails">)),
    CreateMarketplaceItemLabels: (...args) => callOperation("fulfillmentInbound_2024-03-20:createMarketplaceItemLabels", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:createMarketplaceItemLabels">)),
    ListPrepDetails: (...args) => callOperation("fulfillmentInbound_2024-03-20:listPrepDetails", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:listPrepDetails">)),
    SetPrepDetails: (...args) => callOperation("fulfillmentInbound_2024-03-20:setPrepDetails", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:setPrepDetails">)),
    GetInboundOperationStatus: (...args) => callOperation("fulfillmentInbound_2024-03-20:getInboundOperationStatus", ...(args as AmazonFullApiOperationArgs<"fulfillmentInbound_2024-03-20:getInboundOperationStatus">)),
  };
}
