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
export const AmazonFullApiAwdOperationKeys = [
  "awd_2024-05-09:createInbound",
  "awd_2024-05-09:getInbound",
  "awd_2024-05-09:updateInbound",
  "awd_2024-05-09:cancelInbound",
  "awd_2024-05-09:confirmInbound",
  "awd_2024-05-09:getInboundShipment",
  "awd_2024-05-09:getInboundShipmentLabels",
  "awd_2024-05-09:getLabelPageTypes",
  "awd_2024-05-09:updateInboundShipmentTransportDetails",
  "awd_2024-05-09:checkInboundEligibility",
  "awd_2024-05-09:listInboundShipments",
  "awd_2024-05-09:listInventory",
  "awd_2024-05-09:listOutbounds",
  "awd_2024-05-09:createOutbound",
  "awd_2024-05-09:getOutbound",
  "awd_2024-05-09:updateOutbound",
  "awd_2024-05-09:confirmOutbound",
  "awd_2024-05-09:listReplenishmentOrders",
  "awd_2024-05-09:createReplenishmentOrder",
  "awd_2024-05-09:getReplenishmentOrder",
  "awd_2024-05-09:confirmReplenishmentOrder"
] as const;
export type AmazonFullApiAwdOperationKey = typeof AmazonFullApiAwdOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiAwdOperationPathParamMap {
  "awd_2024-05-09:createInbound": {};
  "awd_2024-05-09:getInbound": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:updateInbound": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:cancelInbound": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:confirmInbound": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:getInboundShipment": { "shipmentId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:getInboundShipmentLabels": { "shipmentId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:getLabelPageTypes": { "shipmentId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:updateInboundShipmentTransportDetails": { "shipmentId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:checkInboundEligibility": {};
  "awd_2024-05-09:listInboundShipments": {};
  "awd_2024-05-09:listInventory": {};
  "awd_2024-05-09:listOutbounds": {};
  "awd_2024-05-09:createOutbound": {};
  "awd_2024-05-09:getOutbound": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:updateOutbound": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:confirmOutbound": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:listReplenishmentOrders": {};
  "awd_2024-05-09:createReplenishmentOrder": {};
  "awd_2024-05-09:getReplenishmentOrder": { "orderId": AmazonFullApiPathParamValue };
  "awd_2024-05-09:confirmReplenishmentOrder": { "orderId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiAwdOperationRequestMap {
  "awd_2024-05-09:createInbound": AmazonFullApiOperationInput<"awd_2024-05-09:createInbound">;
  "awd_2024-05-09:getInbound": AmazonFullApiOperationInput<"awd_2024-05-09:getInbound">;
  "awd_2024-05-09:updateInbound": AmazonFullApiOperationInput<"awd_2024-05-09:updateInbound">;
  "awd_2024-05-09:cancelInbound": AmazonFullApiOperationInput<"awd_2024-05-09:cancelInbound">;
  "awd_2024-05-09:confirmInbound": AmazonFullApiOperationInput<"awd_2024-05-09:confirmInbound">;
  "awd_2024-05-09:getInboundShipment": AmazonFullApiOperationInput<"awd_2024-05-09:getInboundShipment">;
  "awd_2024-05-09:getInboundShipmentLabels": AmazonFullApiOperationInput<"awd_2024-05-09:getInboundShipmentLabels">;
  "awd_2024-05-09:getLabelPageTypes": AmazonFullApiOperationInput<"awd_2024-05-09:getLabelPageTypes">;
  "awd_2024-05-09:updateInboundShipmentTransportDetails": AmazonFullApiOperationInput<"awd_2024-05-09:updateInboundShipmentTransportDetails">;
  "awd_2024-05-09:checkInboundEligibility": AmazonFullApiOperationInput<"awd_2024-05-09:checkInboundEligibility">;
  "awd_2024-05-09:listInboundShipments": AmazonFullApiOperationInput<"awd_2024-05-09:listInboundShipments">;
  "awd_2024-05-09:listInventory": AmazonFullApiOperationInput<"awd_2024-05-09:listInventory">;
  "awd_2024-05-09:listOutbounds": AmazonFullApiOperationInput<"awd_2024-05-09:listOutbounds">;
  "awd_2024-05-09:createOutbound": AmazonFullApiOperationInput<"awd_2024-05-09:createOutbound">;
  "awd_2024-05-09:getOutbound": AmazonFullApiOperationInput<"awd_2024-05-09:getOutbound">;
  "awd_2024-05-09:updateOutbound": AmazonFullApiOperationInput<"awd_2024-05-09:updateOutbound">;
  "awd_2024-05-09:confirmOutbound": AmazonFullApiOperationInput<"awd_2024-05-09:confirmOutbound">;
  "awd_2024-05-09:listReplenishmentOrders": AmazonFullApiOperationInput<"awd_2024-05-09:listReplenishmentOrders">;
  "awd_2024-05-09:createReplenishmentOrder": AmazonFullApiOperationInput<"awd_2024-05-09:createReplenishmentOrder">;
  "awd_2024-05-09:getReplenishmentOrder": AmazonFullApiOperationInput<"awd_2024-05-09:getReplenishmentOrder">;
  "awd_2024-05-09:confirmReplenishmentOrder": AmazonFullApiOperationInput<"awd_2024-05-09:confirmReplenishmentOrder">;
}

export interface AmazonFullApiAwdGeneratedClient {
  CreateInbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:createInbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:createInbound"]>;
  GetInbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:getInbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:getInbound"]>;
  UpdateInbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:updateInbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:updateInbound"]>;
  CancelInbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:cancelInbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:cancelInbound"]>;
  ConfirmInbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:confirmInbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:confirmInbound"]>;
  GetInboundShipment(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:getInboundShipment">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:getInboundShipment"]>;
  GetInboundShipmentLabels(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:getInboundShipmentLabels">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:getInboundShipmentLabels"]>;
  GetLabelPageTypes(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:getLabelPageTypes">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:getLabelPageTypes"]>;
  UpdateInboundShipmentTransportDetails(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:updateInboundShipmentTransportDetails">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:updateInboundShipmentTransportDetails"]>;
  CheckInboundEligibility(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:checkInboundEligibility">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:checkInboundEligibility"]>;
  ListInboundShipments(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:listInboundShipments">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:listInboundShipments"]>;
  ListInventory(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:listInventory">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:listInventory"]>;
  ListOutbounds(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:listOutbounds">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:listOutbounds"]>;
  CreateOutbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:createOutbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:createOutbound"]>;
  GetOutbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:getOutbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:getOutbound"]>;
  UpdateOutbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:updateOutbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:updateOutbound"]>;
  ConfirmOutbound(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:confirmOutbound">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:confirmOutbound"]>;
  ListReplenishmentOrders(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:listReplenishmentOrders">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:listReplenishmentOrders"]>;
  CreateReplenishmentOrder(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:createReplenishmentOrder">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:createReplenishmentOrder"]>;
  GetReplenishmentOrder(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:getReplenishmentOrder">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:getReplenishmentOrder"]>;
  ConfirmReplenishmentOrder(...args: AmazonFullApiOperationArgs<"awd_2024-05-09:confirmReplenishmentOrder">): Promise<AmazonFullApiOperationResponseMap["awd_2024-05-09:confirmReplenishmentOrder"]>;
}

export const AmazonFullApiAwdGeneratedFunctionNames = [
  "CreateInbound",
  "GetInbound",
  "UpdateInbound",
  "CancelInbound",
  "ConfirmInbound",
  "GetInboundShipment",
  "GetInboundShipmentLabels",
  "GetLabelPageTypes",
  "UpdateInboundShipmentTransportDetails",
  "CheckInboundEligibility",
  "ListInboundShipments",
  "ListInventory",
  "ListOutbounds",
  "CreateOutbound",
  "GetOutbound",
  "UpdateOutbound",
  "ConfirmOutbound",
  "ListReplenishmentOrders",
  "CreateReplenishmentOrder",
  "GetReplenishmentOrder",
  "ConfirmReplenishmentOrder"
] as const satisfies readonly (keyof AmazonFullApiAwdGeneratedClient)[];

export function createAmazonFullApiAwdGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiAwdGeneratedClient {
  return {
    CreateInbound: (...args) => callOperation("awd_2024-05-09:createInbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:createInbound">)),
    GetInbound: (...args) => callOperation("awd_2024-05-09:getInbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:getInbound">)),
    UpdateInbound: (...args) => callOperation("awd_2024-05-09:updateInbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:updateInbound">)),
    CancelInbound: (...args) => callOperation("awd_2024-05-09:cancelInbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:cancelInbound">)),
    ConfirmInbound: (...args) => callOperation("awd_2024-05-09:confirmInbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:confirmInbound">)),
    GetInboundShipment: (...args) => callOperation("awd_2024-05-09:getInboundShipment", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:getInboundShipment">)),
    GetInboundShipmentLabels: (...args) => callOperation("awd_2024-05-09:getInboundShipmentLabels", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:getInboundShipmentLabels">)),
    GetLabelPageTypes: (...args) => callOperation("awd_2024-05-09:getLabelPageTypes", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:getLabelPageTypes">)),
    UpdateInboundShipmentTransportDetails: (...args) => callOperation("awd_2024-05-09:updateInboundShipmentTransportDetails", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:updateInboundShipmentTransportDetails">)),
    CheckInboundEligibility: (...args) => callOperation("awd_2024-05-09:checkInboundEligibility", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:checkInboundEligibility">)),
    ListInboundShipments: (...args) => callOperation("awd_2024-05-09:listInboundShipments", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:listInboundShipments">)),
    ListInventory: (...args) => callOperation("awd_2024-05-09:listInventory", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:listInventory">)),
    ListOutbounds: (...args) => callOperation("awd_2024-05-09:listOutbounds", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:listOutbounds">)),
    CreateOutbound: (...args) => callOperation("awd_2024-05-09:createOutbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:createOutbound">)),
    GetOutbound: (...args) => callOperation("awd_2024-05-09:getOutbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:getOutbound">)),
    UpdateOutbound: (...args) => callOperation("awd_2024-05-09:updateOutbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:updateOutbound">)),
    ConfirmOutbound: (...args) => callOperation("awd_2024-05-09:confirmOutbound", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:confirmOutbound">)),
    ListReplenishmentOrders: (...args) => callOperation("awd_2024-05-09:listReplenishmentOrders", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:listReplenishmentOrders">)),
    CreateReplenishmentOrder: (...args) => callOperation("awd_2024-05-09:createReplenishmentOrder", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:createReplenishmentOrder">)),
    GetReplenishmentOrder: (...args) => callOperation("awd_2024-05-09:getReplenishmentOrder", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:getReplenishmentOrder">)),
    ConfirmReplenishmentOrder: (...args) => callOperation("awd_2024-05-09:confirmReplenishmentOrder", ...(args as AmazonFullApiOperationArgs<"awd_2024-05-09:confirmReplenishmentOrder">)),
  };
}
