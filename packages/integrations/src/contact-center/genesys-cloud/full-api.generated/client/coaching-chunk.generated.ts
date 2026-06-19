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
export const GenesysCloudFullApiCoachingOperationKeys = [
  "deleteCoachingAppointment",
  "deleteCoachingAppointmentAnnotation",
  "getCoachingAppointment",
  "getCoachingAppointmentAnnotation",
  "getCoachingAppointmentAnnotations",
  "getCoachingAppointments",
  "getCoachingAppointmentsMe",
  "getCoachingAppointmentStatuses",
  "getCoachingNotification",
  "getCoachingNotifications",
  "getCoachingScheduleslotsJob",
  "patchCoachingAppointment",
  "patchCoachingAppointmentAnnotation",
  "patchCoachingAppointmentStatus",
  "patchCoachingNotification",
  "postCoachingAppointmentAnnotations",
  "postCoachingAppointmentConversations",
  "postCoachingAppointments",
  "postCoachingAppointmentsAggregatesQuery",
  "postCoachingScheduleslotsJobs",
  "postCoachingScheduleslotsQuery"
] as const;
export type GenesysCloudFullApiCoachingOperationKey = typeof GenesysCloudFullApiCoachingOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiCoachingOperationPathParamMap {
  "deleteCoachingAppointment": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "deleteCoachingAppointmentAnnotation": { "appointmentId": GenesysCloudFullApiPathParamValue; "annotationId": GenesysCloudFullApiPathParamValue };
  "getCoachingAppointment": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "getCoachingAppointmentAnnotation": { "appointmentId": GenesysCloudFullApiPathParamValue; "annotationId": GenesysCloudFullApiPathParamValue };
  "getCoachingAppointmentAnnotations": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "getCoachingAppointments": {};
  "getCoachingAppointmentsMe": {};
  "getCoachingAppointmentStatuses": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "getCoachingNotification": { "notificationId": GenesysCloudFullApiPathParamValue };
  "getCoachingNotifications": {};
  "getCoachingScheduleslotsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "patchCoachingAppointment": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "patchCoachingAppointmentAnnotation": { "appointmentId": GenesysCloudFullApiPathParamValue; "annotationId": GenesysCloudFullApiPathParamValue };
  "patchCoachingAppointmentStatus": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "patchCoachingNotification": { "notificationId": GenesysCloudFullApiPathParamValue };
  "postCoachingAppointmentAnnotations": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "postCoachingAppointmentConversations": { "appointmentId": GenesysCloudFullApiPathParamValue };
  "postCoachingAppointments": {};
  "postCoachingAppointmentsAggregatesQuery": {};
  "postCoachingScheduleslotsJobs": {};
  "postCoachingScheduleslotsQuery": {};
}

export interface GenesysCloudFullApiCoachingOperationRequestMap {
  "deleteCoachingAppointment": GenesysCloudFullApiOperationInput<"deleteCoachingAppointment">;
  "deleteCoachingAppointmentAnnotation": GenesysCloudFullApiOperationInput<"deleteCoachingAppointmentAnnotation">;
  "getCoachingAppointment": GenesysCloudFullApiOperationInput<"getCoachingAppointment">;
  "getCoachingAppointmentAnnotation": GenesysCloudFullApiOperationInput<"getCoachingAppointmentAnnotation">;
  "getCoachingAppointmentAnnotations": GenesysCloudFullApiOperationInput<"getCoachingAppointmentAnnotations">;
  "getCoachingAppointments": GenesysCloudFullApiOperationInput<"getCoachingAppointments">;
  "getCoachingAppointmentsMe": GenesysCloudFullApiOperationInput<"getCoachingAppointmentsMe">;
  "getCoachingAppointmentStatuses": GenesysCloudFullApiOperationInput<"getCoachingAppointmentStatuses">;
  "getCoachingNotification": GenesysCloudFullApiOperationInput<"getCoachingNotification">;
  "getCoachingNotifications": GenesysCloudFullApiOperationInput<"getCoachingNotifications">;
  "getCoachingScheduleslotsJob": GenesysCloudFullApiOperationInput<"getCoachingScheduleslotsJob">;
  "patchCoachingAppointment": GenesysCloudFullApiOperationInput<"patchCoachingAppointment">;
  "patchCoachingAppointmentAnnotation": GenesysCloudFullApiOperationInput<"patchCoachingAppointmentAnnotation">;
  "patchCoachingAppointmentStatus": GenesysCloudFullApiOperationInput<"patchCoachingAppointmentStatus">;
  "patchCoachingNotification": GenesysCloudFullApiOperationInput<"patchCoachingNotification">;
  "postCoachingAppointmentAnnotations": GenesysCloudFullApiOperationInput<"postCoachingAppointmentAnnotations">;
  "postCoachingAppointmentConversations": GenesysCloudFullApiOperationInput<"postCoachingAppointmentConversations">;
  "postCoachingAppointments": GenesysCloudFullApiOperationInput<"postCoachingAppointments">;
  "postCoachingAppointmentsAggregatesQuery": GenesysCloudFullApiOperationInput<"postCoachingAppointmentsAggregatesQuery">;
  "postCoachingScheduleslotsJobs": GenesysCloudFullApiOperationInput<"postCoachingScheduleslotsJobs">;
  "postCoachingScheduleslotsQuery": GenesysCloudFullApiOperationInput<"postCoachingScheduleslotsQuery">;
}

export interface GenesysCloudFullApiCoachingGeneratedClient {
  DeleteCoachingAppointment(...args: GenesysCloudFullApiOperationArgs<"deleteCoachingAppointment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteCoachingAppointment"]>;
  DeleteCoachingAppointmentAnnotation(...args: GenesysCloudFullApiOperationArgs<"deleteCoachingAppointmentAnnotation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteCoachingAppointmentAnnotation"]>;
  GetCoachingAppointment(...args: GenesysCloudFullApiOperationArgs<"getCoachingAppointment">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingAppointment"]>;
  GetCoachingAppointmentAnnotation(...args: GenesysCloudFullApiOperationArgs<"getCoachingAppointmentAnnotation">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingAppointmentAnnotation"]>;
  GetCoachingAppointmentAnnotations(...args: GenesysCloudFullApiOperationArgs<"getCoachingAppointmentAnnotations">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingAppointmentAnnotations"]>;
  GetCoachingAppointments(...args: GenesysCloudFullApiOperationArgs<"getCoachingAppointments">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingAppointments"]>;
  GetCoachingAppointmentsMe(...args: GenesysCloudFullApiOperationArgs<"getCoachingAppointmentsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingAppointmentsMe"]>;
  GetCoachingAppointmentStatuses(...args: GenesysCloudFullApiOperationArgs<"getCoachingAppointmentStatuses">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingAppointmentStatuses"]>;
  GetCoachingNotification(...args: GenesysCloudFullApiOperationArgs<"getCoachingNotification">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingNotification"]>;
  GetCoachingNotifications(...args: GenesysCloudFullApiOperationArgs<"getCoachingNotifications">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingNotifications"]>;
  GetCoachingScheduleslotsJob(...args: GenesysCloudFullApiOperationArgs<"getCoachingScheduleslotsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getCoachingScheduleslotsJob"]>;
  PatchCoachingAppointment(...args: GenesysCloudFullApiOperationArgs<"patchCoachingAppointment">): Promise<GenesysCloudFullApiOperationResponseMap["patchCoachingAppointment"]>;
  PatchCoachingAppointmentAnnotation(...args: GenesysCloudFullApiOperationArgs<"patchCoachingAppointmentAnnotation">): Promise<GenesysCloudFullApiOperationResponseMap["patchCoachingAppointmentAnnotation"]>;
  PatchCoachingAppointmentStatus(...args: GenesysCloudFullApiOperationArgs<"patchCoachingAppointmentStatus">): Promise<GenesysCloudFullApiOperationResponseMap["patchCoachingAppointmentStatus"]>;
  PatchCoachingNotification(...args: GenesysCloudFullApiOperationArgs<"patchCoachingNotification">): Promise<GenesysCloudFullApiOperationResponseMap["patchCoachingNotification"]>;
  PostCoachingAppointmentAnnotations(...args: GenesysCloudFullApiOperationArgs<"postCoachingAppointmentAnnotations">): Promise<GenesysCloudFullApiOperationResponseMap["postCoachingAppointmentAnnotations"]>;
  PostCoachingAppointmentConversations(...args: GenesysCloudFullApiOperationArgs<"postCoachingAppointmentConversations">): Promise<GenesysCloudFullApiOperationResponseMap["postCoachingAppointmentConversations"]>;
  PostCoachingAppointments(...args: GenesysCloudFullApiOperationArgs<"postCoachingAppointments">): Promise<GenesysCloudFullApiOperationResponseMap["postCoachingAppointments"]>;
  PostCoachingAppointmentsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postCoachingAppointmentsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postCoachingAppointmentsAggregatesQuery"]>;
  PostCoachingScheduleslotsJobs(...args: GenesysCloudFullApiOperationArgs<"postCoachingScheduleslotsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postCoachingScheduleslotsJobs"]>;
  PostCoachingScheduleslotsQuery(...args: GenesysCloudFullApiOperationArgs<"postCoachingScheduleslotsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postCoachingScheduleslotsQuery"]>;
}

export const GenesysCloudFullApiCoachingGeneratedFunctionNames = [
  "DeleteCoachingAppointment",
  "DeleteCoachingAppointmentAnnotation",
  "GetCoachingAppointment",
  "GetCoachingAppointmentAnnotation",
  "GetCoachingAppointmentAnnotations",
  "GetCoachingAppointments",
  "GetCoachingAppointmentsMe",
  "GetCoachingAppointmentStatuses",
  "GetCoachingNotification",
  "GetCoachingNotifications",
  "GetCoachingScheduleslotsJob",
  "PatchCoachingAppointment",
  "PatchCoachingAppointmentAnnotation",
  "PatchCoachingAppointmentStatus",
  "PatchCoachingNotification",
  "PostCoachingAppointmentAnnotations",
  "PostCoachingAppointmentConversations",
  "PostCoachingAppointments",
  "PostCoachingAppointmentsAggregatesQuery",
  "PostCoachingScheduleslotsJobs",
  "PostCoachingScheduleslotsQuery"
] as const satisfies readonly (keyof GenesysCloudFullApiCoachingGeneratedClient)[];

export function createGenesysCloudFullApiCoachingGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiCoachingGeneratedClient {
  return {
    DeleteCoachingAppointment: (...args) => callOperation("deleteCoachingAppointment", ...(args as GenesysCloudFullApiOperationArgs<"deleteCoachingAppointment">)),
    DeleteCoachingAppointmentAnnotation: (...args) => callOperation("deleteCoachingAppointmentAnnotation", ...(args as GenesysCloudFullApiOperationArgs<"deleteCoachingAppointmentAnnotation">)),
    GetCoachingAppointment: (...args) => callOperation("getCoachingAppointment", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingAppointment">)),
    GetCoachingAppointmentAnnotation: (...args) => callOperation("getCoachingAppointmentAnnotation", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingAppointmentAnnotation">)),
    GetCoachingAppointmentAnnotations: (...args) => callOperation("getCoachingAppointmentAnnotations", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingAppointmentAnnotations">)),
    GetCoachingAppointments: (...args) => callOperation("getCoachingAppointments", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingAppointments">)),
    GetCoachingAppointmentsMe: (...args) => callOperation("getCoachingAppointmentsMe", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingAppointmentsMe">)),
    GetCoachingAppointmentStatuses: (...args) => callOperation("getCoachingAppointmentStatuses", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingAppointmentStatuses">)),
    GetCoachingNotification: (...args) => callOperation("getCoachingNotification", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingNotification">)),
    GetCoachingNotifications: (...args) => callOperation("getCoachingNotifications", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingNotifications">)),
    GetCoachingScheduleslotsJob: (...args) => callOperation("getCoachingScheduleslotsJob", ...(args as GenesysCloudFullApiOperationArgs<"getCoachingScheduleslotsJob">)),
    PatchCoachingAppointment: (...args) => callOperation("patchCoachingAppointment", ...(args as GenesysCloudFullApiOperationArgs<"patchCoachingAppointment">)),
    PatchCoachingAppointmentAnnotation: (...args) => callOperation("patchCoachingAppointmentAnnotation", ...(args as GenesysCloudFullApiOperationArgs<"patchCoachingAppointmentAnnotation">)),
    PatchCoachingAppointmentStatus: (...args) => callOperation("patchCoachingAppointmentStatus", ...(args as GenesysCloudFullApiOperationArgs<"patchCoachingAppointmentStatus">)),
    PatchCoachingNotification: (...args) => callOperation("patchCoachingNotification", ...(args as GenesysCloudFullApiOperationArgs<"patchCoachingNotification">)),
    PostCoachingAppointmentAnnotations: (...args) => callOperation("postCoachingAppointmentAnnotations", ...(args as GenesysCloudFullApiOperationArgs<"postCoachingAppointmentAnnotations">)),
    PostCoachingAppointmentConversations: (...args) => callOperation("postCoachingAppointmentConversations", ...(args as GenesysCloudFullApiOperationArgs<"postCoachingAppointmentConversations">)),
    PostCoachingAppointments: (...args) => callOperation("postCoachingAppointments", ...(args as GenesysCloudFullApiOperationArgs<"postCoachingAppointments">)),
    PostCoachingAppointmentsAggregatesQuery: (...args) => callOperation("postCoachingAppointmentsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postCoachingAppointmentsAggregatesQuery">)),
    PostCoachingScheduleslotsJobs: (...args) => callOperation("postCoachingScheduleslotsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postCoachingScheduleslotsJobs">)),
    PostCoachingScheduleslotsQuery: (...args) => callOperation("postCoachingScheduleslotsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postCoachingScheduleslotsQuery">)),
  };
}
