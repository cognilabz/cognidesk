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
export const TalkdeskFullApiHLSProvidersOperationKeys = [
  "getPatientBillingSummary",
  "searchPatientCoverages",
  "getPatientCoverageDetails",
  "scheduleAppointment",
  "getFutureAppointments",
  "cancelAppointment",
  "sendHL7Events",
  "providerAvailableAppointmentsVA",
  "providerAvailableSlots",
  "getProviderAvailableSlots",
  "getBalances",
  "suggestProviders",
  "searchPatientsStudio",
  "searchPatientsStudioBrief",
  "patientInformation",
  "healthcareCallAnswered",
  "updateTalkdeskContact",
  "resetTalkdeskContact",
  "phoneAction",
  "clickToCall",
  "outgoingSms",
  "agentStatusSync",
  "sendInbasketMessage",
  "mychartResetPassword",
  "resetPatientPassword",
  "healthcareEpicOauthJwks",
  "searchPatientsVA",
  "prescriptionsVA",
  "prescriptionRefillVA",
  "cancelAppointmentVA",
  "scheduleAppointmentVA",
  "futureAppointmentsVA",
  "resetHealthcareProvidersVa",
  "getEncounters",
  "getPatientMedicationOrders",
  "confirmAppointment",
  "rescheduleAppointment",
  "confirmAppointmentVa",
  "getServiceRequests",
  "patientProceduresVA",
  "diagnosisPublic",
  "triagePublic",
  "storeInteractionOverrides",
  "patientCases",
  "getOutstandingOrdersPublic",
  "saveIntentPublic",
  "getMedicationStatements",
  "CreateMedicationStatement",
  "CreateMedicationOrder",
  "verifyPatient",
  "getPatientLastLocation",
  "getPatientPractices",
  "getGuarantorIdentifiers",
  "getGuarantorBillingSummary",
  "resetGuarantorPassword"
] as const;
export type TalkdeskFullApiHLSProvidersOperationKey = typeof TalkdeskFullApiHLSProvidersOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiHLSProvidersOperationPathParamMap {
  "getPatientBillingSummary": { "patient_id": TalkdeskFullApiPathParamValue };
  "searchPatientCoverages": { "patient_id": TalkdeskFullApiPathParamValue };
  "getPatientCoverageDetails": { "patient_id": TalkdeskFullApiPathParamValue; "coverage_id": TalkdeskFullApiPathParamValue };
  "scheduleAppointment": {};
  "getFutureAppointments": {};
  "cancelAppointment": { "appointment_id": TalkdeskFullApiPathParamValue };
  "sendHL7Events": { "account_id": TalkdeskFullApiPathParamValue; "message_type": TalkdeskFullApiPathParamValue };
  "providerAvailableAppointmentsVA": {};
  "providerAvailableSlots": {};
  "getProviderAvailableSlots": {};
  "getBalances": {};
  "suggestProviders": {};
  "searchPatientsStudio": {};
  "searchPatientsStudioBrief": {};
  "patientInformation": {};
  "healthcareCallAnswered": {};
  "updateTalkdeskContact": {};
  "resetTalkdeskContact": {};
  "phoneAction": {};
  "clickToCall": {};
  "outgoingSms": {};
  "agentStatusSync": {};
  "sendInbasketMessage": {};
  "mychartResetPassword": { "patient_id": TalkdeskFullApiPathParamValue };
  "resetPatientPassword": { "patient_id": TalkdeskFullApiPathParamValue };
  "healthcareEpicOauthJwks": {};
  "searchPatientsVA": {};
  "prescriptionsVA": {};
  "prescriptionRefillVA": {};
  "cancelAppointmentVA": {};
  "scheduleAppointmentVA": {};
  "futureAppointmentsVA": {};
  "resetHealthcareProvidersVa": {};
  "getEncounters": {};
  "getPatientMedicationOrders": {};
  "confirmAppointment": { "appointment_id": TalkdeskFullApiPathParamValue };
  "rescheduleAppointment": { "appointment_id": TalkdeskFullApiPathParamValue };
  "confirmAppointmentVa": {};
  "getServiceRequests": {};
  "patientProceduresVA": {};
  "diagnosisPublic": {};
  "triagePublic": { "diagnosis_process_id": TalkdeskFullApiPathParamValue };
  "storeInteractionOverrides": {};
  "patientCases": {};
  "getOutstandingOrdersPublic": {};
  "saveIntentPublic": {};
  "getMedicationStatements": { "patient_id": TalkdeskFullApiPathParamValue };
  "CreateMedicationStatement": { "patient_id": TalkdeskFullApiPathParamValue };
  "CreateMedicationOrder": { "patient_id": TalkdeskFullApiPathParamValue };
  "verifyPatient": { "patient_id": TalkdeskFullApiPathParamValue };
  "getPatientLastLocation": {};
  "getPatientPractices": { "patient_id": TalkdeskFullApiPathParamValue };
  "getGuarantorIdentifiers": {};
  "getGuarantorBillingSummary": { "guarantor_id": TalkdeskFullApiPathParamValue };
  "resetGuarantorPassword": { "guarantor_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiHLSProvidersOperationRequestMap {
  "getPatientBillingSummary": TalkdeskFullApiOperationInput<"getPatientBillingSummary">;
  "searchPatientCoverages": TalkdeskFullApiOperationInput<"searchPatientCoverages">;
  "getPatientCoverageDetails": TalkdeskFullApiOperationInput<"getPatientCoverageDetails">;
  "scheduleAppointment": TalkdeskFullApiOperationInput<"scheduleAppointment">;
  "getFutureAppointments": TalkdeskFullApiOperationInput<"getFutureAppointments">;
  "cancelAppointment": TalkdeskFullApiOperationInput<"cancelAppointment">;
  "sendHL7Events": TalkdeskFullApiOperationInput<"sendHL7Events">;
  "providerAvailableAppointmentsVA": TalkdeskFullApiOperationInput<"providerAvailableAppointmentsVA">;
  "providerAvailableSlots": TalkdeskFullApiOperationInput<"providerAvailableSlots">;
  "getProviderAvailableSlots": TalkdeskFullApiOperationInput<"getProviderAvailableSlots">;
  "getBalances": TalkdeskFullApiOperationInput<"getBalances">;
  "suggestProviders": TalkdeskFullApiOperationInput<"suggestProviders">;
  "searchPatientsStudio": TalkdeskFullApiOperationInput<"searchPatientsStudio">;
  "searchPatientsStudioBrief": TalkdeskFullApiOperationInput<"searchPatientsStudioBrief">;
  "patientInformation": TalkdeskFullApiOperationInput<"patientInformation">;
  "healthcareCallAnswered": TalkdeskFullApiOperationInput<"healthcareCallAnswered">;
  "updateTalkdeskContact": TalkdeskFullApiOperationInput<"updateTalkdeskContact">;
  "resetTalkdeskContact": TalkdeskFullApiOperationInput<"resetTalkdeskContact">;
  "phoneAction": TalkdeskFullApiOperationInput<"phoneAction">;
  "clickToCall": TalkdeskFullApiOperationInput<"clickToCall">;
  "outgoingSms": TalkdeskFullApiOperationInput<"outgoingSms">;
  "agentStatusSync": TalkdeskFullApiOperationInput<"agentStatusSync">;
  "sendInbasketMessage": TalkdeskFullApiOperationInput<"sendInbasketMessage">;
  "mychartResetPassword": TalkdeskFullApiOperationInput<"mychartResetPassword">;
  "resetPatientPassword": TalkdeskFullApiOperationInput<"resetPatientPassword">;
  "healthcareEpicOauthJwks": TalkdeskFullApiOperationInput<"healthcareEpicOauthJwks">;
  "searchPatientsVA": TalkdeskFullApiOperationInput<"searchPatientsVA">;
  "prescriptionsVA": TalkdeskFullApiOperationInput<"prescriptionsVA">;
  "prescriptionRefillVA": TalkdeskFullApiOperationInput<"prescriptionRefillVA">;
  "cancelAppointmentVA": TalkdeskFullApiOperationInput<"cancelAppointmentVA">;
  "scheduleAppointmentVA": TalkdeskFullApiOperationInput<"scheduleAppointmentVA">;
  "futureAppointmentsVA": TalkdeskFullApiOperationInput<"futureAppointmentsVA">;
  "resetHealthcareProvidersVa": TalkdeskFullApiOperationInput<"resetHealthcareProvidersVa">;
  "getEncounters": TalkdeskFullApiOperationInput<"getEncounters">;
  "getPatientMedicationOrders": TalkdeskFullApiOperationInput<"getPatientMedicationOrders">;
  "confirmAppointment": TalkdeskFullApiOperationInput<"confirmAppointment">;
  "rescheduleAppointment": TalkdeskFullApiOperationInput<"rescheduleAppointment">;
  "confirmAppointmentVa": TalkdeskFullApiOperationInput<"confirmAppointmentVa">;
  "getServiceRequests": TalkdeskFullApiOperationInput<"getServiceRequests">;
  "patientProceduresVA": TalkdeskFullApiOperationInput<"patientProceduresVA">;
  "diagnosisPublic": TalkdeskFullApiOperationInput<"diagnosisPublic">;
  "triagePublic": TalkdeskFullApiOperationInput<"triagePublic">;
  "storeInteractionOverrides": TalkdeskFullApiOperationInput<"storeInteractionOverrides">;
  "patientCases": TalkdeskFullApiOperationInput<"patientCases">;
  "getOutstandingOrdersPublic": TalkdeskFullApiOperationInput<"getOutstandingOrdersPublic">;
  "saveIntentPublic": TalkdeskFullApiOperationInput<"saveIntentPublic">;
  "getMedicationStatements": TalkdeskFullApiOperationInput<"getMedicationStatements">;
  "CreateMedicationStatement": TalkdeskFullApiOperationInput<"CreateMedicationStatement">;
  "CreateMedicationOrder": TalkdeskFullApiOperationInput<"CreateMedicationOrder">;
  "verifyPatient": TalkdeskFullApiOperationInput<"verifyPatient">;
  "getPatientLastLocation": TalkdeskFullApiOperationInput<"getPatientLastLocation">;
  "getPatientPractices": TalkdeskFullApiOperationInput<"getPatientPractices">;
  "getGuarantorIdentifiers": TalkdeskFullApiOperationInput<"getGuarantorIdentifiers">;
  "getGuarantorBillingSummary": TalkdeskFullApiOperationInput<"getGuarantorBillingSummary">;
  "resetGuarantorPassword": TalkdeskFullApiOperationInput<"resetGuarantorPassword">;
}

export interface TalkdeskFullApiHLSProvidersGeneratedClient {
  GetPatientBillingSummary(...args: TalkdeskFullApiOperationArgs<"getPatientBillingSummary">): Promise<TalkdeskFullApiOperationResponseMap["getPatientBillingSummary"]>;
  SearchPatientCoverages(...args: TalkdeskFullApiOperationArgs<"searchPatientCoverages">): Promise<TalkdeskFullApiOperationResponseMap["searchPatientCoverages"]>;
  GetPatientCoverageDetails(...args: TalkdeskFullApiOperationArgs<"getPatientCoverageDetails">): Promise<TalkdeskFullApiOperationResponseMap["getPatientCoverageDetails"]>;
  ScheduleAppointment(...args: TalkdeskFullApiOperationArgs<"scheduleAppointment">): Promise<TalkdeskFullApiOperationResponseMap["scheduleAppointment"]>;
  GetFutureAppointments(...args: TalkdeskFullApiOperationArgs<"getFutureAppointments">): Promise<TalkdeskFullApiOperationResponseMap["getFutureAppointments"]>;
  CancelAppointment(...args: TalkdeskFullApiOperationArgs<"cancelAppointment">): Promise<TalkdeskFullApiOperationResponseMap["cancelAppointment"]>;
  SendHL7Events(...args: TalkdeskFullApiOperationArgs<"sendHL7Events">): Promise<TalkdeskFullApiOperationResponseMap["sendHL7Events"]>;
  ProviderAvailableAppointmentsVA(...args: TalkdeskFullApiOperationArgs<"providerAvailableAppointmentsVA">): Promise<TalkdeskFullApiOperationResponseMap["providerAvailableAppointmentsVA"]>;
  ProviderAvailableSlots(...args: TalkdeskFullApiOperationArgs<"providerAvailableSlots">): Promise<TalkdeskFullApiOperationResponseMap["providerAvailableSlots"]>;
  GetProviderAvailableSlots(...args: TalkdeskFullApiOperationArgs<"getProviderAvailableSlots">): Promise<TalkdeskFullApiOperationResponseMap["getProviderAvailableSlots"]>;
  GetBalances(...args: TalkdeskFullApiOperationArgs<"getBalances">): Promise<TalkdeskFullApiOperationResponseMap["getBalances"]>;
  SuggestProviders(...args: TalkdeskFullApiOperationArgs<"suggestProviders">): Promise<TalkdeskFullApiOperationResponseMap["suggestProviders"]>;
  SearchPatientsStudio(...args: TalkdeskFullApiOperationArgs<"searchPatientsStudio">): Promise<TalkdeskFullApiOperationResponseMap["searchPatientsStudio"]>;
  SearchPatientsStudioBrief(...args: TalkdeskFullApiOperationArgs<"searchPatientsStudioBrief">): Promise<TalkdeskFullApiOperationResponseMap["searchPatientsStudioBrief"]>;
  PatientInformation(...args: TalkdeskFullApiOperationArgs<"patientInformation">): Promise<TalkdeskFullApiOperationResponseMap["patientInformation"]>;
  HealthcareCallAnswered(...args: TalkdeskFullApiOperationArgs<"healthcareCallAnswered">): Promise<TalkdeskFullApiOperationResponseMap["healthcareCallAnswered"]>;
  UpdateTalkdeskContact(...args: TalkdeskFullApiOperationArgs<"updateTalkdeskContact">): Promise<TalkdeskFullApiOperationResponseMap["updateTalkdeskContact"]>;
  ResetTalkdeskContact(...args: TalkdeskFullApiOperationArgs<"resetTalkdeskContact">): Promise<TalkdeskFullApiOperationResponseMap["resetTalkdeskContact"]>;
  PhoneAction(...args: TalkdeskFullApiOperationArgs<"phoneAction">): Promise<TalkdeskFullApiOperationResponseMap["phoneAction"]>;
  ClickToCall(...args: TalkdeskFullApiOperationArgs<"clickToCall">): Promise<TalkdeskFullApiOperationResponseMap["clickToCall"]>;
  OutgoingSms(...args: TalkdeskFullApiOperationArgs<"outgoingSms">): Promise<TalkdeskFullApiOperationResponseMap["outgoingSms"]>;
  AgentStatusSync(...args: TalkdeskFullApiOperationArgs<"agentStatusSync">): Promise<TalkdeskFullApiOperationResponseMap["agentStatusSync"]>;
  SendInbasketMessage(...args: TalkdeskFullApiOperationArgs<"sendInbasketMessage">): Promise<TalkdeskFullApiOperationResponseMap["sendInbasketMessage"]>;
  MychartResetPassword(...args: TalkdeskFullApiOperationArgs<"mychartResetPassword">): Promise<TalkdeskFullApiOperationResponseMap["mychartResetPassword"]>;
  ResetPatientPassword(...args: TalkdeskFullApiOperationArgs<"resetPatientPassword">): Promise<TalkdeskFullApiOperationResponseMap["resetPatientPassword"]>;
  HealthcareEpicOauthJwks(...args: TalkdeskFullApiOperationArgs<"healthcareEpicOauthJwks">): Promise<TalkdeskFullApiOperationResponseMap["healthcareEpicOauthJwks"]>;
  SearchPatientsVA(...args: TalkdeskFullApiOperationArgs<"searchPatientsVA">): Promise<TalkdeskFullApiOperationResponseMap["searchPatientsVA"]>;
  PrescriptionsVA(...args: TalkdeskFullApiOperationArgs<"prescriptionsVA">): Promise<TalkdeskFullApiOperationResponseMap["prescriptionsVA"]>;
  PrescriptionRefillVA(...args: TalkdeskFullApiOperationArgs<"prescriptionRefillVA">): Promise<TalkdeskFullApiOperationResponseMap["prescriptionRefillVA"]>;
  CancelAppointmentVA(...args: TalkdeskFullApiOperationArgs<"cancelAppointmentVA">): Promise<TalkdeskFullApiOperationResponseMap["cancelAppointmentVA"]>;
  ScheduleAppointmentVA(...args: TalkdeskFullApiOperationArgs<"scheduleAppointmentVA">): Promise<TalkdeskFullApiOperationResponseMap["scheduleAppointmentVA"]>;
  FutureAppointmentsVA(...args: TalkdeskFullApiOperationArgs<"futureAppointmentsVA">): Promise<TalkdeskFullApiOperationResponseMap["futureAppointmentsVA"]>;
  ResetHealthcareProvidersVa(...args: TalkdeskFullApiOperationArgs<"resetHealthcareProvidersVa">): Promise<TalkdeskFullApiOperationResponseMap["resetHealthcareProvidersVa"]>;
  GetEncounters(...args: TalkdeskFullApiOperationArgs<"getEncounters">): Promise<TalkdeskFullApiOperationResponseMap["getEncounters"]>;
  GetPatientMedicationOrders(...args: TalkdeskFullApiOperationArgs<"getPatientMedicationOrders">): Promise<TalkdeskFullApiOperationResponseMap["getPatientMedicationOrders"]>;
  ConfirmAppointment(...args: TalkdeskFullApiOperationArgs<"confirmAppointment">): Promise<TalkdeskFullApiOperationResponseMap["confirmAppointment"]>;
  RescheduleAppointment(...args: TalkdeskFullApiOperationArgs<"rescheduleAppointment">): Promise<TalkdeskFullApiOperationResponseMap["rescheduleAppointment"]>;
  ConfirmAppointmentVa(...args: TalkdeskFullApiOperationArgs<"confirmAppointmentVa">): Promise<TalkdeskFullApiOperationResponseMap["confirmAppointmentVa"]>;
  GetServiceRequests(...args: TalkdeskFullApiOperationArgs<"getServiceRequests">): Promise<TalkdeskFullApiOperationResponseMap["getServiceRequests"]>;
  PatientProceduresVA(...args: TalkdeskFullApiOperationArgs<"patientProceduresVA">): Promise<TalkdeskFullApiOperationResponseMap["patientProceduresVA"]>;
  DiagnosisPublic(...args: TalkdeskFullApiOperationArgs<"diagnosisPublic">): Promise<TalkdeskFullApiOperationResponseMap["diagnosisPublic"]>;
  TriagePublic(...args: TalkdeskFullApiOperationArgs<"triagePublic">): Promise<TalkdeskFullApiOperationResponseMap["triagePublic"]>;
  StoreInteractionOverrides(...args: TalkdeskFullApiOperationArgs<"storeInteractionOverrides">): Promise<TalkdeskFullApiOperationResponseMap["storeInteractionOverrides"]>;
  PatientCases(...args: TalkdeskFullApiOperationArgs<"patientCases">): Promise<TalkdeskFullApiOperationResponseMap["patientCases"]>;
  GetOutstandingOrdersPublic(...args: TalkdeskFullApiOperationArgs<"getOutstandingOrdersPublic">): Promise<TalkdeskFullApiOperationResponseMap["getOutstandingOrdersPublic"]>;
  SaveIntentPublic(...args: TalkdeskFullApiOperationArgs<"saveIntentPublic">): Promise<TalkdeskFullApiOperationResponseMap["saveIntentPublic"]>;
  GetMedicationStatements(...args: TalkdeskFullApiOperationArgs<"getMedicationStatements">): Promise<TalkdeskFullApiOperationResponseMap["getMedicationStatements"]>;
  CreateMedicationStatement(...args: TalkdeskFullApiOperationArgs<"CreateMedicationStatement">): Promise<TalkdeskFullApiOperationResponseMap["CreateMedicationStatement"]>;
  CreateMedicationOrder(...args: TalkdeskFullApiOperationArgs<"CreateMedicationOrder">): Promise<TalkdeskFullApiOperationResponseMap["CreateMedicationOrder"]>;
  VerifyPatient(...args: TalkdeskFullApiOperationArgs<"verifyPatient">): Promise<TalkdeskFullApiOperationResponseMap["verifyPatient"]>;
  GetPatientLastLocation(...args: TalkdeskFullApiOperationArgs<"getPatientLastLocation">): Promise<TalkdeskFullApiOperationResponseMap["getPatientLastLocation"]>;
  GetPatientPractices(...args: TalkdeskFullApiOperationArgs<"getPatientPractices">): Promise<TalkdeskFullApiOperationResponseMap["getPatientPractices"]>;
  GetGuarantorIdentifiers(...args: TalkdeskFullApiOperationArgs<"getGuarantorIdentifiers">): Promise<TalkdeskFullApiOperationResponseMap["getGuarantorIdentifiers"]>;
  GetGuarantorBillingSummary(...args: TalkdeskFullApiOperationArgs<"getGuarantorBillingSummary">): Promise<TalkdeskFullApiOperationResponseMap["getGuarantorBillingSummary"]>;
  ResetGuarantorPassword(...args: TalkdeskFullApiOperationArgs<"resetGuarantorPassword">): Promise<TalkdeskFullApiOperationResponseMap["resetGuarantorPassword"]>;
}

export const TalkdeskFullApiHLSProvidersGeneratedFunctionNames = [
  "GetPatientBillingSummary",
  "SearchPatientCoverages",
  "GetPatientCoverageDetails",
  "ScheduleAppointment",
  "GetFutureAppointments",
  "CancelAppointment",
  "SendHL7Events",
  "ProviderAvailableAppointmentsVA",
  "ProviderAvailableSlots",
  "GetProviderAvailableSlots",
  "GetBalances",
  "SuggestProviders",
  "SearchPatientsStudio",
  "SearchPatientsStudioBrief",
  "PatientInformation",
  "HealthcareCallAnswered",
  "UpdateTalkdeskContact",
  "ResetTalkdeskContact",
  "PhoneAction",
  "ClickToCall",
  "OutgoingSms",
  "AgentStatusSync",
  "SendInbasketMessage",
  "MychartResetPassword",
  "ResetPatientPassword",
  "HealthcareEpicOauthJwks",
  "SearchPatientsVA",
  "PrescriptionsVA",
  "PrescriptionRefillVA",
  "CancelAppointmentVA",
  "ScheduleAppointmentVA",
  "FutureAppointmentsVA",
  "ResetHealthcareProvidersVa",
  "GetEncounters",
  "GetPatientMedicationOrders",
  "ConfirmAppointment",
  "RescheduleAppointment",
  "ConfirmAppointmentVa",
  "GetServiceRequests",
  "PatientProceduresVA",
  "DiagnosisPublic",
  "TriagePublic",
  "StoreInteractionOverrides",
  "PatientCases",
  "GetOutstandingOrdersPublic",
  "SaveIntentPublic",
  "GetMedicationStatements",
  "CreateMedicationStatement",
  "CreateMedicationOrder",
  "VerifyPatient",
  "GetPatientLastLocation",
  "GetPatientPractices",
  "GetGuarantorIdentifiers",
  "GetGuarantorBillingSummary",
  "ResetGuarantorPassword"
] as const satisfies readonly (keyof TalkdeskFullApiHLSProvidersGeneratedClient)[];

export function createTalkdeskFullApiHLSProvidersGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiHLSProvidersGeneratedClient {
  return {
    GetPatientBillingSummary: (...args) => callOperation("getPatientBillingSummary", ...(args as TalkdeskFullApiOperationArgs<"getPatientBillingSummary">)),
    SearchPatientCoverages: (...args) => callOperation("searchPatientCoverages", ...(args as TalkdeskFullApiOperationArgs<"searchPatientCoverages">)),
    GetPatientCoverageDetails: (...args) => callOperation("getPatientCoverageDetails", ...(args as TalkdeskFullApiOperationArgs<"getPatientCoverageDetails">)),
    ScheduleAppointment: (...args) => callOperation("scheduleAppointment", ...(args as TalkdeskFullApiOperationArgs<"scheduleAppointment">)),
    GetFutureAppointments: (...args) => callOperation("getFutureAppointments", ...(args as TalkdeskFullApiOperationArgs<"getFutureAppointments">)),
    CancelAppointment: (...args) => callOperation("cancelAppointment", ...(args as TalkdeskFullApiOperationArgs<"cancelAppointment">)),
    SendHL7Events: (...args) => callOperation("sendHL7Events", ...(args as TalkdeskFullApiOperationArgs<"sendHL7Events">)),
    ProviderAvailableAppointmentsVA: (...args) => callOperation("providerAvailableAppointmentsVA", ...(args as TalkdeskFullApiOperationArgs<"providerAvailableAppointmentsVA">)),
    ProviderAvailableSlots: (...args) => callOperation("providerAvailableSlots", ...(args as TalkdeskFullApiOperationArgs<"providerAvailableSlots">)),
    GetProviderAvailableSlots: (...args) => callOperation("getProviderAvailableSlots", ...(args as TalkdeskFullApiOperationArgs<"getProviderAvailableSlots">)),
    GetBalances: (...args) => callOperation("getBalances", ...(args as TalkdeskFullApiOperationArgs<"getBalances">)),
    SuggestProviders: (...args) => callOperation("suggestProviders", ...(args as TalkdeskFullApiOperationArgs<"suggestProviders">)),
    SearchPatientsStudio: (...args) => callOperation("searchPatientsStudio", ...(args as TalkdeskFullApiOperationArgs<"searchPatientsStudio">)),
    SearchPatientsStudioBrief: (...args) => callOperation("searchPatientsStudioBrief", ...(args as TalkdeskFullApiOperationArgs<"searchPatientsStudioBrief">)),
    PatientInformation: (...args) => callOperation("patientInformation", ...(args as TalkdeskFullApiOperationArgs<"patientInformation">)),
    HealthcareCallAnswered: (...args) => callOperation("healthcareCallAnswered", ...(args as TalkdeskFullApiOperationArgs<"healthcareCallAnswered">)),
    UpdateTalkdeskContact: (...args) => callOperation("updateTalkdeskContact", ...(args as TalkdeskFullApiOperationArgs<"updateTalkdeskContact">)),
    ResetTalkdeskContact: (...args) => callOperation("resetTalkdeskContact", ...(args as TalkdeskFullApiOperationArgs<"resetTalkdeskContact">)),
    PhoneAction: (...args) => callOperation("phoneAction", ...(args as TalkdeskFullApiOperationArgs<"phoneAction">)),
    ClickToCall: (...args) => callOperation("clickToCall", ...(args as TalkdeskFullApiOperationArgs<"clickToCall">)),
    OutgoingSms: (...args) => callOperation("outgoingSms", ...(args as TalkdeskFullApiOperationArgs<"outgoingSms">)),
    AgentStatusSync: (...args) => callOperation("agentStatusSync", ...(args as TalkdeskFullApiOperationArgs<"agentStatusSync">)),
    SendInbasketMessage: (...args) => callOperation("sendInbasketMessage", ...(args as TalkdeskFullApiOperationArgs<"sendInbasketMessage">)),
    MychartResetPassword: (...args) => callOperation("mychartResetPassword", ...(args as TalkdeskFullApiOperationArgs<"mychartResetPassword">)),
    ResetPatientPassword: (...args) => callOperation("resetPatientPassword", ...(args as TalkdeskFullApiOperationArgs<"resetPatientPassword">)),
    HealthcareEpicOauthJwks: (...args) => callOperation("healthcareEpicOauthJwks", ...(args as TalkdeskFullApiOperationArgs<"healthcareEpicOauthJwks">)),
    SearchPatientsVA: (...args) => callOperation("searchPatientsVA", ...(args as TalkdeskFullApiOperationArgs<"searchPatientsVA">)),
    PrescriptionsVA: (...args) => callOperation("prescriptionsVA", ...(args as TalkdeskFullApiOperationArgs<"prescriptionsVA">)),
    PrescriptionRefillVA: (...args) => callOperation("prescriptionRefillVA", ...(args as TalkdeskFullApiOperationArgs<"prescriptionRefillVA">)),
    CancelAppointmentVA: (...args) => callOperation("cancelAppointmentVA", ...(args as TalkdeskFullApiOperationArgs<"cancelAppointmentVA">)),
    ScheduleAppointmentVA: (...args) => callOperation("scheduleAppointmentVA", ...(args as TalkdeskFullApiOperationArgs<"scheduleAppointmentVA">)),
    FutureAppointmentsVA: (...args) => callOperation("futureAppointmentsVA", ...(args as TalkdeskFullApiOperationArgs<"futureAppointmentsVA">)),
    ResetHealthcareProvidersVa: (...args) => callOperation("resetHealthcareProvidersVa", ...(args as TalkdeskFullApiOperationArgs<"resetHealthcareProvidersVa">)),
    GetEncounters: (...args) => callOperation("getEncounters", ...(args as TalkdeskFullApiOperationArgs<"getEncounters">)),
    GetPatientMedicationOrders: (...args) => callOperation("getPatientMedicationOrders", ...(args as TalkdeskFullApiOperationArgs<"getPatientMedicationOrders">)),
    ConfirmAppointment: (...args) => callOperation("confirmAppointment", ...(args as TalkdeskFullApiOperationArgs<"confirmAppointment">)),
    RescheduleAppointment: (...args) => callOperation("rescheduleAppointment", ...(args as TalkdeskFullApiOperationArgs<"rescheduleAppointment">)),
    ConfirmAppointmentVa: (...args) => callOperation("confirmAppointmentVa", ...(args as TalkdeskFullApiOperationArgs<"confirmAppointmentVa">)),
    GetServiceRequests: (...args) => callOperation("getServiceRequests", ...(args as TalkdeskFullApiOperationArgs<"getServiceRequests">)),
    PatientProceduresVA: (...args) => callOperation("patientProceduresVA", ...(args as TalkdeskFullApiOperationArgs<"patientProceduresVA">)),
    DiagnosisPublic: (...args) => callOperation("diagnosisPublic", ...(args as TalkdeskFullApiOperationArgs<"diagnosisPublic">)),
    TriagePublic: (...args) => callOperation("triagePublic", ...(args as TalkdeskFullApiOperationArgs<"triagePublic">)),
    StoreInteractionOverrides: (...args) => callOperation("storeInteractionOverrides", ...(args as TalkdeskFullApiOperationArgs<"storeInteractionOverrides">)),
    PatientCases: (...args) => callOperation("patientCases", ...(args as TalkdeskFullApiOperationArgs<"patientCases">)),
    GetOutstandingOrdersPublic: (...args) => callOperation("getOutstandingOrdersPublic", ...(args as TalkdeskFullApiOperationArgs<"getOutstandingOrdersPublic">)),
    SaveIntentPublic: (...args) => callOperation("saveIntentPublic", ...(args as TalkdeskFullApiOperationArgs<"saveIntentPublic">)),
    GetMedicationStatements: (...args) => callOperation("getMedicationStatements", ...(args as TalkdeskFullApiOperationArgs<"getMedicationStatements">)),
    CreateMedicationStatement: (...args) => callOperation("CreateMedicationStatement", ...(args as TalkdeskFullApiOperationArgs<"CreateMedicationStatement">)),
    CreateMedicationOrder: (...args) => callOperation("CreateMedicationOrder", ...(args as TalkdeskFullApiOperationArgs<"CreateMedicationOrder">)),
    VerifyPatient: (...args) => callOperation("verifyPatient", ...(args as TalkdeskFullApiOperationArgs<"verifyPatient">)),
    GetPatientLastLocation: (...args) => callOperation("getPatientLastLocation", ...(args as TalkdeskFullApiOperationArgs<"getPatientLastLocation">)),
    GetPatientPractices: (...args) => callOperation("getPatientPractices", ...(args as TalkdeskFullApiOperationArgs<"getPatientPractices">)),
    GetGuarantorIdentifiers: (...args) => callOperation("getGuarantorIdentifiers", ...(args as TalkdeskFullApiOperationArgs<"getGuarantorIdentifiers">)),
    GetGuarantorBillingSummary: (...args) => callOperation("getGuarantorBillingSummary", ...(args as TalkdeskFullApiOperationArgs<"getGuarantorBillingSummary">)),
    ResetGuarantorPassword: (...args) => callOperation("resetGuarantorPassword", ...(args as TalkdeskFullApiOperationArgs<"resetGuarantorPassword">)),
  };
}
