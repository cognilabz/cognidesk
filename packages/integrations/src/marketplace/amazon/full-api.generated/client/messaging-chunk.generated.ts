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
export const AmazonFullApiMessagingOperationKeys = [
  "messaging:getMessagingActionsForOrder",
  "messaging:confirmCustomizationDetails",
  "messaging:createConfirmDeliveryDetails",
  "messaging:createLegalDisclosure",
  "messaging:createConfirmOrderDetails",
  "messaging:createConfirmServiceDetails",
  "messaging:CreateWarranty",
  "messaging:GetAttributes",
  "messaging:createDigitalAccessKey",
  "messaging:createUnexpectedProblem",
  "messaging:sendInvoice"
] as const;
export type AmazonFullApiMessagingOperationKey = typeof AmazonFullApiMessagingOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiMessagingOperationPathParamMap {
  "messaging:getMessagingActionsForOrder": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:confirmCustomizationDetails": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:createConfirmDeliveryDetails": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:createLegalDisclosure": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:createConfirmOrderDetails": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:createConfirmServiceDetails": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:CreateWarranty": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:GetAttributes": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:createDigitalAccessKey": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:createUnexpectedProblem": { "amazonOrderId": AmazonFullApiPathParamValue };
  "messaging:sendInvoice": { "amazonOrderId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiMessagingOperationRequestMap {
  "messaging:getMessagingActionsForOrder": AmazonFullApiOperationInput<"messaging:getMessagingActionsForOrder">;
  "messaging:confirmCustomizationDetails": AmazonFullApiOperationInput<"messaging:confirmCustomizationDetails">;
  "messaging:createConfirmDeliveryDetails": AmazonFullApiOperationInput<"messaging:createConfirmDeliveryDetails">;
  "messaging:createLegalDisclosure": AmazonFullApiOperationInput<"messaging:createLegalDisclosure">;
  "messaging:createConfirmOrderDetails": AmazonFullApiOperationInput<"messaging:createConfirmOrderDetails">;
  "messaging:createConfirmServiceDetails": AmazonFullApiOperationInput<"messaging:createConfirmServiceDetails">;
  "messaging:CreateWarranty": AmazonFullApiOperationInput<"messaging:CreateWarranty">;
  "messaging:GetAttributes": AmazonFullApiOperationInput<"messaging:GetAttributes">;
  "messaging:createDigitalAccessKey": AmazonFullApiOperationInput<"messaging:createDigitalAccessKey">;
  "messaging:createUnexpectedProblem": AmazonFullApiOperationInput<"messaging:createUnexpectedProblem">;
  "messaging:sendInvoice": AmazonFullApiOperationInput<"messaging:sendInvoice">;
}

export interface AmazonFullApiMessagingGeneratedClient {
  GetMessagingActionsForOrder(...args: AmazonFullApiOperationArgs<"messaging:getMessagingActionsForOrder">): Promise<AmazonFullApiOperationResponseMap["messaging:getMessagingActionsForOrder"]>;
  ConfirmCustomizationDetails(...args: AmazonFullApiOperationArgs<"messaging:confirmCustomizationDetails">): Promise<AmazonFullApiOperationResponseMap["messaging:confirmCustomizationDetails"]>;
  CreateConfirmDeliveryDetails(...args: AmazonFullApiOperationArgs<"messaging:createConfirmDeliveryDetails">): Promise<AmazonFullApiOperationResponseMap["messaging:createConfirmDeliveryDetails"]>;
  CreateLegalDisclosure(...args: AmazonFullApiOperationArgs<"messaging:createLegalDisclosure">): Promise<AmazonFullApiOperationResponseMap["messaging:createLegalDisclosure"]>;
  CreateConfirmOrderDetails(...args: AmazonFullApiOperationArgs<"messaging:createConfirmOrderDetails">): Promise<AmazonFullApiOperationResponseMap["messaging:createConfirmOrderDetails"]>;
  CreateConfirmServiceDetails(...args: AmazonFullApiOperationArgs<"messaging:createConfirmServiceDetails">): Promise<AmazonFullApiOperationResponseMap["messaging:createConfirmServiceDetails"]>;
  CreateWarranty(...args: AmazonFullApiOperationArgs<"messaging:CreateWarranty">): Promise<AmazonFullApiOperationResponseMap["messaging:CreateWarranty"]>;
  GetAttributes(...args: AmazonFullApiOperationArgs<"messaging:GetAttributes">): Promise<AmazonFullApiOperationResponseMap["messaging:GetAttributes"]>;
  CreateDigitalAccessKey(...args: AmazonFullApiOperationArgs<"messaging:createDigitalAccessKey">): Promise<AmazonFullApiOperationResponseMap["messaging:createDigitalAccessKey"]>;
  CreateUnexpectedProblem(...args: AmazonFullApiOperationArgs<"messaging:createUnexpectedProblem">): Promise<AmazonFullApiOperationResponseMap["messaging:createUnexpectedProblem"]>;
  SendInvoice(...args: AmazonFullApiOperationArgs<"messaging:sendInvoice">): Promise<AmazonFullApiOperationResponseMap["messaging:sendInvoice"]>;
}

export const AmazonFullApiMessagingGeneratedFunctionNames = [
  "GetMessagingActionsForOrder",
  "ConfirmCustomizationDetails",
  "CreateConfirmDeliveryDetails",
  "CreateLegalDisclosure",
  "CreateConfirmOrderDetails",
  "CreateConfirmServiceDetails",
  "CreateWarranty",
  "GetAttributes",
  "CreateDigitalAccessKey",
  "CreateUnexpectedProblem",
  "SendInvoice"
] as const satisfies readonly (keyof AmazonFullApiMessagingGeneratedClient)[];

export function createAmazonFullApiMessagingGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiMessagingGeneratedClient {
  return {
    GetMessagingActionsForOrder: (...args) => callOperation("messaging:getMessagingActionsForOrder", ...(args as AmazonFullApiOperationArgs<"messaging:getMessagingActionsForOrder">)),
    ConfirmCustomizationDetails: (...args) => callOperation("messaging:confirmCustomizationDetails", ...(args as AmazonFullApiOperationArgs<"messaging:confirmCustomizationDetails">)),
    CreateConfirmDeliveryDetails: (...args) => callOperation("messaging:createConfirmDeliveryDetails", ...(args as AmazonFullApiOperationArgs<"messaging:createConfirmDeliveryDetails">)),
    CreateLegalDisclosure: (...args) => callOperation("messaging:createLegalDisclosure", ...(args as AmazonFullApiOperationArgs<"messaging:createLegalDisclosure">)),
    CreateConfirmOrderDetails: (...args) => callOperation("messaging:createConfirmOrderDetails", ...(args as AmazonFullApiOperationArgs<"messaging:createConfirmOrderDetails">)),
    CreateConfirmServiceDetails: (...args) => callOperation("messaging:createConfirmServiceDetails", ...(args as AmazonFullApiOperationArgs<"messaging:createConfirmServiceDetails">)),
    CreateWarranty: (...args) => callOperation("messaging:CreateWarranty", ...(args as AmazonFullApiOperationArgs<"messaging:CreateWarranty">)),
    GetAttributes: (...args) => callOperation("messaging:GetAttributes", ...(args as AmazonFullApiOperationArgs<"messaging:GetAttributes">)),
    CreateDigitalAccessKey: (...args) => callOperation("messaging:createDigitalAccessKey", ...(args as AmazonFullApiOperationArgs<"messaging:createDigitalAccessKey">)),
    CreateUnexpectedProblem: (...args) => callOperation("messaging:createUnexpectedProblem", ...(args as AmazonFullApiOperationArgs<"messaging:createUnexpectedProblem">)),
    SendInvoice: (...args) => callOperation("messaging:sendInvoice", ...(args as AmazonFullApiOperationArgs<"messaging:sendInvoice">)),
  };
}
