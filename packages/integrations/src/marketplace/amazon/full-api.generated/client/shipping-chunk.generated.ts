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
export const AmazonFullApiShippingOperationKeys = [
  "shipping:createShipment",
  "shipping:getShipment",
  "shipping:cancelShipment",
  "shipping:purchaseLabels",
  "shipping:retrieveShippingLabel",
  "shipping:purchaseShipment",
  "shipping:getRates",
  "shipping:getAccount",
  "shipping:getTrackingInformation",
  "shippingV2:getRates",
  "shippingV2:directPurchaseShipment",
  "shippingV2:purchaseShipment",
  "shippingV2:oneClickShipment",
  "shippingV2:getTracking",
  "shippingV2:getShipmentDocuments",
  "shippingV2:cancelShipment",
  "shippingV2:getAdditionalInputs",
  "shippingV2:getCarrierAccountFormInputs",
  "shippingV2:getCarrierAccounts",
  "shippingV2:linkCarrierAccount",
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}",
  "shippingV2:unlinkCarrierAccount",
  "shippingV2:generateCollectionForm",
  "shippingV2:getCollectionFormHistory",
  "shippingV2:getUnmanifestedShipments",
  "shippingV2:getCollectionForm",
  "shippingV2:getAccessPoints",
  "shippingV2:submitNdrFeedback",
  "shippingV2:createClaim"
] as const;
export type AmazonFullApiShippingOperationKey = typeof AmazonFullApiShippingOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiShippingOperationPathParamMap {
  "shipping:createShipment": {};
  "shipping:getShipment": { "shipmentId": AmazonFullApiPathParamValue };
  "shipping:cancelShipment": { "shipmentId": AmazonFullApiPathParamValue };
  "shipping:purchaseLabels": { "shipmentId": AmazonFullApiPathParamValue };
  "shipping:retrieveShippingLabel": { "shipmentId": AmazonFullApiPathParamValue; "trackingId": AmazonFullApiPathParamValue };
  "shipping:purchaseShipment": {};
  "shipping:getRates": {};
  "shipping:getAccount": {};
  "shipping:getTrackingInformation": { "trackingId": AmazonFullApiPathParamValue };
  "shippingV2:getRates": {};
  "shippingV2:directPurchaseShipment": {};
  "shippingV2:purchaseShipment": {};
  "shippingV2:oneClickShipment": {};
  "shippingV2:getTracking": {};
  "shippingV2:getShipmentDocuments": { "shipmentId": AmazonFullApiPathParamValue };
  "shippingV2:cancelShipment": { "shipmentId": AmazonFullApiPathParamValue };
  "shippingV2:getAdditionalInputs": {};
  "shippingV2:getCarrierAccountFormInputs": {};
  "shippingV2:getCarrierAccounts": {};
  "shippingV2:linkCarrierAccount": { "carrierId": AmazonFullApiPathParamValue };
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}": { "carrierId": AmazonFullApiPathParamValue };
  "shippingV2:unlinkCarrierAccount": { "carrierId": AmazonFullApiPathParamValue };
  "shippingV2:generateCollectionForm": {};
  "shippingV2:getCollectionFormHistory": {};
  "shippingV2:getUnmanifestedShipments": {};
  "shippingV2:getCollectionForm": { "collectionFormId": AmazonFullApiPathParamValue };
  "shippingV2:getAccessPoints": {};
  "shippingV2:submitNdrFeedback": {};
  "shippingV2:createClaim": {};
}

export interface AmazonFullApiShippingOperationRequestMap {
  "shipping:createShipment": AmazonFullApiOperationInput<"shipping:createShipment">;
  "shipping:getShipment": AmazonFullApiOperationInput<"shipping:getShipment">;
  "shipping:cancelShipment": AmazonFullApiOperationInput<"shipping:cancelShipment">;
  "shipping:purchaseLabels": AmazonFullApiOperationInput<"shipping:purchaseLabels">;
  "shipping:retrieveShippingLabel": AmazonFullApiOperationInput<"shipping:retrieveShippingLabel">;
  "shipping:purchaseShipment": AmazonFullApiOperationInput<"shipping:purchaseShipment">;
  "shipping:getRates": AmazonFullApiOperationInput<"shipping:getRates">;
  "shipping:getAccount": AmazonFullApiOperationInput<"shipping:getAccount">;
  "shipping:getTrackingInformation": AmazonFullApiOperationInput<"shipping:getTrackingInformation">;
  "shippingV2:getRates": AmazonFullApiOperationInput<"shippingV2:getRates">;
  "shippingV2:directPurchaseShipment": AmazonFullApiOperationInput<"shippingV2:directPurchaseShipment">;
  "shippingV2:purchaseShipment": AmazonFullApiOperationInput<"shippingV2:purchaseShipment">;
  "shippingV2:oneClickShipment": AmazonFullApiOperationInput<"shippingV2:oneClickShipment">;
  "shippingV2:getTracking": AmazonFullApiOperationInput<"shippingV2:getTracking">;
  "shippingV2:getShipmentDocuments": AmazonFullApiOperationInput<"shippingV2:getShipmentDocuments">;
  "shippingV2:cancelShipment": AmazonFullApiOperationInput<"shippingV2:cancelShipment">;
  "shippingV2:getAdditionalInputs": AmazonFullApiOperationInput<"shippingV2:getAdditionalInputs">;
  "shippingV2:getCarrierAccountFormInputs": AmazonFullApiOperationInput<"shippingV2:getCarrierAccountFormInputs">;
  "shippingV2:getCarrierAccounts": AmazonFullApiOperationInput<"shippingV2:getCarrierAccounts">;
  "shippingV2:linkCarrierAccount": AmazonFullApiOperationInput<"shippingV2:linkCarrierAccount">;
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}": AmazonFullApiOperationInput<"shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}">;
  "shippingV2:unlinkCarrierAccount": AmazonFullApiOperationInput<"shippingV2:unlinkCarrierAccount">;
  "shippingV2:generateCollectionForm": AmazonFullApiOperationInput<"shippingV2:generateCollectionForm">;
  "shippingV2:getCollectionFormHistory": AmazonFullApiOperationInput<"shippingV2:getCollectionFormHistory">;
  "shippingV2:getUnmanifestedShipments": AmazonFullApiOperationInput<"shippingV2:getUnmanifestedShipments">;
  "shippingV2:getCollectionForm": AmazonFullApiOperationInput<"shippingV2:getCollectionForm">;
  "shippingV2:getAccessPoints": AmazonFullApiOperationInput<"shippingV2:getAccessPoints">;
  "shippingV2:submitNdrFeedback": AmazonFullApiOperationInput<"shippingV2:submitNdrFeedback">;
  "shippingV2:createClaim": AmazonFullApiOperationInput<"shippingV2:createClaim">;
}

export interface AmazonFullApiShippingGeneratedClient {
  CreateShipmentShipping(...args: AmazonFullApiOperationArgs<"shipping:createShipment">): Promise<AmazonFullApiOperationResponseMap["shipping:createShipment"]>;
  GetShipmentShipping(...args: AmazonFullApiOperationArgs<"shipping:getShipment">): Promise<AmazonFullApiOperationResponseMap["shipping:getShipment"]>;
  CancelShipmentShipping(...args: AmazonFullApiOperationArgs<"shipping:cancelShipment">): Promise<AmazonFullApiOperationResponseMap["shipping:cancelShipment"]>;
  PurchaseLabels(...args: AmazonFullApiOperationArgs<"shipping:purchaseLabels">): Promise<AmazonFullApiOperationResponseMap["shipping:purchaseLabels"]>;
  RetrieveShippingLabel(...args: AmazonFullApiOperationArgs<"shipping:retrieveShippingLabel">): Promise<AmazonFullApiOperationResponseMap["shipping:retrieveShippingLabel"]>;
  PurchaseShipment(...args: AmazonFullApiOperationArgs<"shipping:purchaseShipment">): Promise<AmazonFullApiOperationResponseMap["shipping:purchaseShipment"]>;
  GetRates(...args: AmazonFullApiOperationArgs<"shipping:getRates">): Promise<AmazonFullApiOperationResponseMap["shipping:getRates"]>;
  GetAccountShipping(...args: AmazonFullApiOperationArgs<"shipping:getAccount">): Promise<AmazonFullApiOperationResponseMap["shipping:getAccount"]>;
  GetTrackingInformation(...args: AmazonFullApiOperationArgs<"shipping:getTrackingInformation">): Promise<AmazonFullApiOperationResponseMap["shipping:getTrackingInformation"]>;
  GetRatesShippingV2(...args: AmazonFullApiOperationArgs<"shippingV2:getRates">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getRates"]>;
  DirectPurchaseShipment(...args: AmazonFullApiOperationArgs<"shippingV2:directPurchaseShipment">): Promise<AmazonFullApiOperationResponseMap["shippingV2:directPurchaseShipment"]>;
  PurchaseShipmentShippingV2(...args: AmazonFullApiOperationArgs<"shippingV2:purchaseShipment">): Promise<AmazonFullApiOperationResponseMap["shippingV2:purchaseShipment"]>;
  OneClickShipment(...args: AmazonFullApiOperationArgs<"shippingV2:oneClickShipment">): Promise<AmazonFullApiOperationResponseMap["shippingV2:oneClickShipment"]>;
  GetTracking(...args: AmazonFullApiOperationArgs<"shippingV2:getTracking">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getTracking"]>;
  GetShipmentDocuments(...args: AmazonFullApiOperationArgs<"shippingV2:getShipmentDocuments">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getShipmentDocuments"]>;
  CancelShipmentShippingV2(...args: AmazonFullApiOperationArgs<"shippingV2:cancelShipment">): Promise<AmazonFullApiOperationResponseMap["shippingV2:cancelShipment"]>;
  GetAdditionalInputs(...args: AmazonFullApiOperationArgs<"shippingV2:getAdditionalInputs">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getAdditionalInputs"]>;
  GetCarrierAccountFormInputs(...args: AmazonFullApiOperationArgs<"shippingV2:getCarrierAccountFormInputs">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getCarrierAccountFormInputs"]>;
  GetCarrierAccounts(...args: AmazonFullApiOperationArgs<"shippingV2:getCarrierAccounts">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getCarrierAccounts"]>;
  LinkCarrierAccount(...args: AmazonFullApiOperationArgs<"shippingV2:linkCarrierAccount">): Promise<AmazonFullApiOperationResponseMap["shippingV2:linkCarrierAccount"]>;
  LinkCarrierAccountShippingV2(...args: AmazonFullApiOperationArgs<"shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}">): Promise<AmazonFullApiOperationResponseMap["shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}"]>;
  UnlinkCarrierAccount(...args: AmazonFullApiOperationArgs<"shippingV2:unlinkCarrierAccount">): Promise<AmazonFullApiOperationResponseMap["shippingV2:unlinkCarrierAccount"]>;
  GenerateCollectionForm(...args: AmazonFullApiOperationArgs<"shippingV2:generateCollectionForm">): Promise<AmazonFullApiOperationResponseMap["shippingV2:generateCollectionForm"]>;
  GetCollectionFormHistory(...args: AmazonFullApiOperationArgs<"shippingV2:getCollectionFormHistory">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getCollectionFormHistory"]>;
  GetUnmanifestedShipments(...args: AmazonFullApiOperationArgs<"shippingV2:getUnmanifestedShipments">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getUnmanifestedShipments"]>;
  GetCollectionForm(...args: AmazonFullApiOperationArgs<"shippingV2:getCollectionForm">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getCollectionForm"]>;
  GetAccessPoints(...args: AmazonFullApiOperationArgs<"shippingV2:getAccessPoints">): Promise<AmazonFullApiOperationResponseMap["shippingV2:getAccessPoints"]>;
  SubmitNdrFeedback(...args: AmazonFullApiOperationArgs<"shippingV2:submitNdrFeedback">): Promise<AmazonFullApiOperationResponseMap["shippingV2:submitNdrFeedback"]>;
  CreateClaim(...args: AmazonFullApiOperationArgs<"shippingV2:createClaim">): Promise<AmazonFullApiOperationResponseMap["shippingV2:createClaim"]>;
}

export const AmazonFullApiShippingGeneratedFunctionNames = [
  "CreateShipmentShipping",
  "GetShipmentShipping",
  "CancelShipmentShipping",
  "PurchaseLabels",
  "RetrieveShippingLabel",
  "PurchaseShipment",
  "GetRates",
  "GetAccountShipping",
  "GetTrackingInformation",
  "GetRatesShippingV2",
  "DirectPurchaseShipment",
  "PurchaseShipmentShippingV2",
  "OneClickShipment",
  "GetTracking",
  "GetShipmentDocuments",
  "CancelShipmentShippingV2",
  "GetAdditionalInputs",
  "GetCarrierAccountFormInputs",
  "GetCarrierAccounts",
  "LinkCarrierAccount",
  "LinkCarrierAccountShippingV2",
  "UnlinkCarrierAccount",
  "GenerateCollectionForm",
  "GetCollectionFormHistory",
  "GetUnmanifestedShipments",
  "GetCollectionForm",
  "GetAccessPoints",
  "SubmitNdrFeedback",
  "CreateClaim"
] as const satisfies readonly (keyof AmazonFullApiShippingGeneratedClient)[];

export function createAmazonFullApiShippingGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiShippingGeneratedClient {
  return {
    CreateShipmentShipping: (...args) => callOperation("shipping:createShipment", ...(args as AmazonFullApiOperationArgs<"shipping:createShipment">)),
    GetShipmentShipping: (...args) => callOperation("shipping:getShipment", ...(args as AmazonFullApiOperationArgs<"shipping:getShipment">)),
    CancelShipmentShipping: (...args) => callOperation("shipping:cancelShipment", ...(args as AmazonFullApiOperationArgs<"shipping:cancelShipment">)),
    PurchaseLabels: (...args) => callOperation("shipping:purchaseLabels", ...(args as AmazonFullApiOperationArgs<"shipping:purchaseLabels">)),
    RetrieveShippingLabel: (...args) => callOperation("shipping:retrieveShippingLabel", ...(args as AmazonFullApiOperationArgs<"shipping:retrieveShippingLabel">)),
    PurchaseShipment: (...args) => callOperation("shipping:purchaseShipment", ...(args as AmazonFullApiOperationArgs<"shipping:purchaseShipment">)),
    GetRates: (...args) => callOperation("shipping:getRates", ...(args as AmazonFullApiOperationArgs<"shipping:getRates">)),
    GetAccountShipping: (...args) => callOperation("shipping:getAccount", ...(args as AmazonFullApiOperationArgs<"shipping:getAccount">)),
    GetTrackingInformation: (...args) => callOperation("shipping:getTrackingInformation", ...(args as AmazonFullApiOperationArgs<"shipping:getTrackingInformation">)),
    GetRatesShippingV2: (...args) => callOperation("shippingV2:getRates", ...(args as AmazonFullApiOperationArgs<"shippingV2:getRates">)),
    DirectPurchaseShipment: (...args) => callOperation("shippingV2:directPurchaseShipment", ...(args as AmazonFullApiOperationArgs<"shippingV2:directPurchaseShipment">)),
    PurchaseShipmentShippingV2: (...args) => callOperation("shippingV2:purchaseShipment", ...(args as AmazonFullApiOperationArgs<"shippingV2:purchaseShipment">)),
    OneClickShipment: (...args) => callOperation("shippingV2:oneClickShipment", ...(args as AmazonFullApiOperationArgs<"shippingV2:oneClickShipment">)),
    GetTracking: (...args) => callOperation("shippingV2:getTracking", ...(args as AmazonFullApiOperationArgs<"shippingV2:getTracking">)),
    GetShipmentDocuments: (...args) => callOperation("shippingV2:getShipmentDocuments", ...(args as AmazonFullApiOperationArgs<"shippingV2:getShipmentDocuments">)),
    CancelShipmentShippingV2: (...args) => callOperation("shippingV2:cancelShipment", ...(args as AmazonFullApiOperationArgs<"shippingV2:cancelShipment">)),
    GetAdditionalInputs: (...args) => callOperation("shippingV2:getAdditionalInputs", ...(args as AmazonFullApiOperationArgs<"shippingV2:getAdditionalInputs">)),
    GetCarrierAccountFormInputs: (...args) => callOperation("shippingV2:getCarrierAccountFormInputs", ...(args as AmazonFullApiOperationArgs<"shippingV2:getCarrierAccountFormInputs">)),
    GetCarrierAccounts: (...args) => callOperation("shippingV2:getCarrierAccounts", ...(args as AmazonFullApiOperationArgs<"shippingV2:getCarrierAccounts">)),
    LinkCarrierAccount: (...args) => callOperation("shippingV2:linkCarrierAccount", ...(args as AmazonFullApiOperationArgs<"shippingV2:linkCarrierAccount">)),
    LinkCarrierAccountShippingV2: (...args) => callOperation("shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}", ...(args as AmazonFullApiOperationArgs<"shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}">)),
    UnlinkCarrierAccount: (...args) => callOperation("shippingV2:unlinkCarrierAccount", ...(args as AmazonFullApiOperationArgs<"shippingV2:unlinkCarrierAccount">)),
    GenerateCollectionForm: (...args) => callOperation("shippingV2:generateCollectionForm", ...(args as AmazonFullApiOperationArgs<"shippingV2:generateCollectionForm">)),
    GetCollectionFormHistory: (...args) => callOperation("shippingV2:getCollectionFormHistory", ...(args as AmazonFullApiOperationArgs<"shippingV2:getCollectionFormHistory">)),
    GetUnmanifestedShipments: (...args) => callOperation("shippingV2:getUnmanifestedShipments", ...(args as AmazonFullApiOperationArgs<"shippingV2:getUnmanifestedShipments">)),
    GetCollectionForm: (...args) => callOperation("shippingV2:getCollectionForm", ...(args as AmazonFullApiOperationArgs<"shippingV2:getCollectionForm">)),
    GetAccessPoints: (...args) => callOperation("shippingV2:getAccessPoints", ...(args as AmazonFullApiOperationArgs<"shippingV2:getAccessPoints">)),
    SubmitNdrFeedback: (...args) => callOperation("shippingV2:submitNdrFeedback", ...(args as AmazonFullApiOperationArgs<"shippingV2:submitNdrFeedback">)),
    CreateClaim: (...args) => callOperation("shippingV2:createClaim", ...(args as AmazonFullApiOperationArgs<"shippingV2:createClaim">)),
  };
}
