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
export const AmazonFullApiServiceOperationKeys = [
  "services:getServiceJobByServiceJobId",
  "services:cancelServiceJobByServiceJobId",
  "services:completeServiceJobByServiceJobId",
  "services:getServiceJobs",
  "services:addAppointmentForServiceJobByServiceJobId",
  "services:rescheduleAppointmentForServiceJobByServiceJobId",
  "services:assignAppointmentResources",
  "services:setAppointmentFulfillmentData",
  "services:getRangeSlotCapacity",
  "services:getFixedSlotCapacity",
  "services:updateSchedule",
  "services:createReservation",
  "services:updateReservation",
  "services:cancelReservation",
  "services:getAppointmmentSlotsByJobId",
  "services:getAppointmentSlots",
  "services:createServiceDocumentUploadDestination"
] as const;
export type AmazonFullApiServiceOperationKey = typeof AmazonFullApiServiceOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiServiceOperationPathParamMap {
  "services:getServiceJobByServiceJobId": { "serviceJobId": AmazonFullApiPathParamValue };
  "services:cancelServiceJobByServiceJobId": { "serviceJobId": AmazonFullApiPathParamValue };
  "services:completeServiceJobByServiceJobId": { "serviceJobId": AmazonFullApiPathParamValue };
  "services:getServiceJobs": {};
  "services:addAppointmentForServiceJobByServiceJobId": { "serviceJobId": AmazonFullApiPathParamValue };
  "services:rescheduleAppointmentForServiceJobByServiceJobId": { "serviceJobId": AmazonFullApiPathParamValue; "appointmentId": AmazonFullApiPathParamValue };
  "services:assignAppointmentResources": { "serviceJobId": AmazonFullApiPathParamValue; "appointmentId": AmazonFullApiPathParamValue };
  "services:setAppointmentFulfillmentData": { "serviceJobId": AmazonFullApiPathParamValue; "appointmentId": AmazonFullApiPathParamValue };
  "services:getRangeSlotCapacity": { "resourceId": AmazonFullApiPathParamValue };
  "services:getFixedSlotCapacity": { "resourceId": AmazonFullApiPathParamValue };
  "services:updateSchedule": { "resourceId": AmazonFullApiPathParamValue };
  "services:createReservation": {};
  "services:updateReservation": { "reservationId": AmazonFullApiPathParamValue };
  "services:cancelReservation": { "reservationId": AmazonFullApiPathParamValue };
  "services:getAppointmmentSlotsByJobId": { "serviceJobId": AmazonFullApiPathParamValue };
  "services:getAppointmentSlots": {};
  "services:createServiceDocumentUploadDestination": {};
}

export interface AmazonFullApiServiceOperationRequestMap {
  "services:getServiceJobByServiceJobId": AmazonFullApiOperationInput<"services:getServiceJobByServiceJobId">;
  "services:cancelServiceJobByServiceJobId": AmazonFullApiOperationInput<"services:cancelServiceJobByServiceJobId">;
  "services:completeServiceJobByServiceJobId": AmazonFullApiOperationInput<"services:completeServiceJobByServiceJobId">;
  "services:getServiceJobs": AmazonFullApiOperationInput<"services:getServiceJobs">;
  "services:addAppointmentForServiceJobByServiceJobId": AmazonFullApiOperationInput<"services:addAppointmentForServiceJobByServiceJobId">;
  "services:rescheduleAppointmentForServiceJobByServiceJobId": AmazonFullApiOperationInput<"services:rescheduleAppointmentForServiceJobByServiceJobId">;
  "services:assignAppointmentResources": AmazonFullApiOperationInput<"services:assignAppointmentResources">;
  "services:setAppointmentFulfillmentData": AmazonFullApiOperationInput<"services:setAppointmentFulfillmentData">;
  "services:getRangeSlotCapacity": AmazonFullApiOperationInput<"services:getRangeSlotCapacity">;
  "services:getFixedSlotCapacity": AmazonFullApiOperationInput<"services:getFixedSlotCapacity">;
  "services:updateSchedule": AmazonFullApiOperationInput<"services:updateSchedule">;
  "services:createReservation": AmazonFullApiOperationInput<"services:createReservation">;
  "services:updateReservation": AmazonFullApiOperationInput<"services:updateReservation">;
  "services:cancelReservation": AmazonFullApiOperationInput<"services:cancelReservation">;
  "services:getAppointmmentSlotsByJobId": AmazonFullApiOperationInput<"services:getAppointmmentSlotsByJobId">;
  "services:getAppointmentSlots": AmazonFullApiOperationInput<"services:getAppointmentSlots">;
  "services:createServiceDocumentUploadDestination": AmazonFullApiOperationInput<"services:createServiceDocumentUploadDestination">;
}

export interface AmazonFullApiServiceGeneratedClient {
  GetServiceJobByServiceJobId(...args: AmazonFullApiOperationArgs<"services:getServiceJobByServiceJobId">): Promise<AmazonFullApiOperationResponseMap["services:getServiceJobByServiceJobId"]>;
  CancelServiceJobByServiceJobId(...args: AmazonFullApiOperationArgs<"services:cancelServiceJobByServiceJobId">): Promise<AmazonFullApiOperationResponseMap["services:cancelServiceJobByServiceJobId"]>;
  CompleteServiceJobByServiceJobId(...args: AmazonFullApiOperationArgs<"services:completeServiceJobByServiceJobId">): Promise<AmazonFullApiOperationResponseMap["services:completeServiceJobByServiceJobId"]>;
  GetServiceJobs(...args: AmazonFullApiOperationArgs<"services:getServiceJobs">): Promise<AmazonFullApiOperationResponseMap["services:getServiceJobs"]>;
  AddAppointmentForServiceJobByServiceJobId(...args: AmazonFullApiOperationArgs<"services:addAppointmentForServiceJobByServiceJobId">): Promise<AmazonFullApiOperationResponseMap["services:addAppointmentForServiceJobByServiceJobId"]>;
  RescheduleAppointmentForServiceJobByServiceJobId(...args: AmazonFullApiOperationArgs<"services:rescheduleAppointmentForServiceJobByServiceJobId">): Promise<AmazonFullApiOperationResponseMap["services:rescheduleAppointmentForServiceJobByServiceJobId"]>;
  AssignAppointmentResources(...args: AmazonFullApiOperationArgs<"services:assignAppointmentResources">): Promise<AmazonFullApiOperationResponseMap["services:assignAppointmentResources"]>;
  SetAppointmentFulfillmentData(...args: AmazonFullApiOperationArgs<"services:setAppointmentFulfillmentData">): Promise<AmazonFullApiOperationResponseMap["services:setAppointmentFulfillmentData"]>;
  GetRangeSlotCapacity(...args: AmazonFullApiOperationArgs<"services:getRangeSlotCapacity">): Promise<AmazonFullApiOperationResponseMap["services:getRangeSlotCapacity"]>;
  GetFixedSlotCapacity(...args: AmazonFullApiOperationArgs<"services:getFixedSlotCapacity">): Promise<AmazonFullApiOperationResponseMap["services:getFixedSlotCapacity"]>;
  UpdateSchedule(...args: AmazonFullApiOperationArgs<"services:updateSchedule">): Promise<AmazonFullApiOperationResponseMap["services:updateSchedule"]>;
  CreateReservation(...args: AmazonFullApiOperationArgs<"services:createReservation">): Promise<AmazonFullApiOperationResponseMap["services:createReservation"]>;
  UpdateReservation(...args: AmazonFullApiOperationArgs<"services:updateReservation">): Promise<AmazonFullApiOperationResponseMap["services:updateReservation"]>;
  CancelReservation(...args: AmazonFullApiOperationArgs<"services:cancelReservation">): Promise<AmazonFullApiOperationResponseMap["services:cancelReservation"]>;
  GetAppointmmentSlotsByJobId(...args: AmazonFullApiOperationArgs<"services:getAppointmmentSlotsByJobId">): Promise<AmazonFullApiOperationResponseMap["services:getAppointmmentSlotsByJobId"]>;
  GetAppointmentSlots(...args: AmazonFullApiOperationArgs<"services:getAppointmentSlots">): Promise<AmazonFullApiOperationResponseMap["services:getAppointmentSlots"]>;
  CreateServiceDocumentUploadDestination(...args: AmazonFullApiOperationArgs<"services:createServiceDocumentUploadDestination">): Promise<AmazonFullApiOperationResponseMap["services:createServiceDocumentUploadDestination"]>;
}

export const AmazonFullApiServiceGeneratedFunctionNames = [
  "GetServiceJobByServiceJobId",
  "CancelServiceJobByServiceJobId",
  "CompleteServiceJobByServiceJobId",
  "GetServiceJobs",
  "AddAppointmentForServiceJobByServiceJobId",
  "RescheduleAppointmentForServiceJobByServiceJobId",
  "AssignAppointmentResources",
  "SetAppointmentFulfillmentData",
  "GetRangeSlotCapacity",
  "GetFixedSlotCapacity",
  "UpdateSchedule",
  "CreateReservation",
  "UpdateReservation",
  "CancelReservation",
  "GetAppointmmentSlotsByJobId",
  "GetAppointmentSlots",
  "CreateServiceDocumentUploadDestination"
] as const satisfies readonly (keyof AmazonFullApiServiceGeneratedClient)[];

export function createAmazonFullApiServiceGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiServiceGeneratedClient {
  return {
    GetServiceJobByServiceJobId: (...args) => callOperation("services:getServiceJobByServiceJobId", ...(args as AmazonFullApiOperationArgs<"services:getServiceJobByServiceJobId">)),
    CancelServiceJobByServiceJobId: (...args) => callOperation("services:cancelServiceJobByServiceJobId", ...(args as AmazonFullApiOperationArgs<"services:cancelServiceJobByServiceJobId">)),
    CompleteServiceJobByServiceJobId: (...args) => callOperation("services:completeServiceJobByServiceJobId", ...(args as AmazonFullApiOperationArgs<"services:completeServiceJobByServiceJobId">)),
    GetServiceJobs: (...args) => callOperation("services:getServiceJobs", ...(args as AmazonFullApiOperationArgs<"services:getServiceJobs">)),
    AddAppointmentForServiceJobByServiceJobId: (...args) => callOperation("services:addAppointmentForServiceJobByServiceJobId", ...(args as AmazonFullApiOperationArgs<"services:addAppointmentForServiceJobByServiceJobId">)),
    RescheduleAppointmentForServiceJobByServiceJobId: (...args) => callOperation("services:rescheduleAppointmentForServiceJobByServiceJobId", ...(args as AmazonFullApiOperationArgs<"services:rescheduleAppointmentForServiceJobByServiceJobId">)),
    AssignAppointmentResources: (...args) => callOperation("services:assignAppointmentResources", ...(args as AmazonFullApiOperationArgs<"services:assignAppointmentResources">)),
    SetAppointmentFulfillmentData: (...args) => callOperation("services:setAppointmentFulfillmentData", ...(args as AmazonFullApiOperationArgs<"services:setAppointmentFulfillmentData">)),
    GetRangeSlotCapacity: (...args) => callOperation("services:getRangeSlotCapacity", ...(args as AmazonFullApiOperationArgs<"services:getRangeSlotCapacity">)),
    GetFixedSlotCapacity: (...args) => callOperation("services:getFixedSlotCapacity", ...(args as AmazonFullApiOperationArgs<"services:getFixedSlotCapacity">)),
    UpdateSchedule: (...args) => callOperation("services:updateSchedule", ...(args as AmazonFullApiOperationArgs<"services:updateSchedule">)),
    CreateReservation: (...args) => callOperation("services:createReservation", ...(args as AmazonFullApiOperationArgs<"services:createReservation">)),
    UpdateReservation: (...args) => callOperation("services:updateReservation", ...(args as AmazonFullApiOperationArgs<"services:updateReservation">)),
    CancelReservation: (...args) => callOperation("services:cancelReservation", ...(args as AmazonFullApiOperationArgs<"services:cancelReservation">)),
    GetAppointmmentSlotsByJobId: (...args) => callOperation("services:getAppointmmentSlotsByJobId", ...(args as AmazonFullApiOperationArgs<"services:getAppointmmentSlotsByJobId">)),
    GetAppointmentSlots: (...args) => callOperation("services:getAppointmentSlots", ...(args as AmazonFullApiOperationArgs<"services:getAppointmentSlots">)),
    CreateServiceDocumentUploadDestination: (...args) => callOperation("services:createServiceDocumentUploadDestination", ...(args as AmazonFullApiOperationArgs<"services:createServiceDocumentUploadDestination">)),
  };
}
