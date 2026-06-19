// Generated provider schema DTOs for TalkdeskFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type TalkdeskFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type TalkdeskFullApiSchemaJsonValue = TalkdeskFullApiSchemaJsonPrimitive | readonly TalkdeskFullApiSchemaJsonValue[] | { readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined };

export interface TalkdeskFullApiOperationQueryMap {
  "account-get": {};
  "account-wallets-get": {
  page?: number;
  per_page?: number;
  filter?: string;
  order_by?: string;
};
  "account-wallets-name-get": {};
  "account-bucket-configurations-get": {
  page?: number;
  per_page?: number;
  status?: "ACTIVE" | "ALL";
};
  "apps-get": {};
  "apps-post": {};
  "apps-app-id-get": {};
  "apps-app-id-patch": {};
  "apps-app-id-installations-id-get": {};
  "apps-app-id-installations-id-users-get": {};
  "apps-app-id-installations-id-state-post": {};
  "apps-app-id-installations-id-subscription-get": {};
  "apps-app-id-installations-id-channels-get": {};
  "apps-app-id-installations-id-channels-post": {};
  "apps-app-id-installations-id-trial-get": {};
  "apps-app-id-installations-id-credentials-actions-rotate-post": {};
  "apps-app-id-installations-id-credentials-client-id-state-post": {};
  "attachments-2023-03-get": {
  name?: string;
  types?: string;
  metadata?: string;
  state?: string;
  page?: number;
  per_page?: number;
};
  "attachments-2023-03-post": {};
  "attachments-2023-03-upload-link-post": {};
  "attachments-2023-03-id-get": {};
  "attachments-2023-03-id-delete": {};
  "attachments-2023-03-id-download-link-get": {};
  "GetAllAttributes": {
  active?: boolean;
  name?: string;
  categories?: ReadonlyArray<string>;
  proficiency?: string;
  sort?: "name" | "-name";
  page?: number;
  per_page?: number;
};
  "CreateAttribute": {};
  "GetAttribute": {};
  "UpdateAttribute": {};
  "GetAllAttributeUsers": {
  page?: number;
  per_page?: number;
  name?: string;
};
  "CreateAttributeUsers": {};
  "DeleteAttributeUsers": {};
  "GetAllAttributesCategories": {
  sort?: "name" | "-name";
  page?: number;
  per_page?: number;
};
  "CreateAttributeCategory": {};
  "DeleteAttributeCategory": {};
  "PatchAttributeCategory": {};
  "bulk-imports-users-get": {
  page?: number;
  per_page?: number;
  filter?: string;
  order_by?: string;
};
  "bulk-imports-users-post": {};
  "bulk-imports-users-import-id-get": {};
  "bulk-imports-users-import-id-patch": {};
  "bulk-imports-users-import-id-errors-get": {};
  "bulk-imports-users-import-id-outputs-get": {};
  "ring-groups-get": {
  page?: number;
  per_page?: number;
  name?: string;
  order_by?: string;
};
  "ring-groups-id-users-get": {
  page?: number;
  per_page?: number;
  active?: boolean;
};
  "AssignUserRingGroups": {};
  "UnassignUserRingGroups": {};
  "UpdateUserRingGroups": {};
  "calls-call-id-recordings-get": {};
  "calls-callback-post": {};
  "list-contacts": {
  ids?: ReadonlyArray<string>;
  name?: string;
  "name.loose"?: string;
  company?: string;
  "company.loose"?: string;
  integration?: string;
  emails?: ReadonlyArray<string>;
  phones?: ReadonlyArray<string>;
  page?: number;
  per_page?: number;
};
  "get-contact": {};
  "contacts-contact-id-delete": {};
  "contacts-contact-id-integrations-get": {};
  "contacts-contact-id-custom-fields-get": {
  page?: number;
  per_page?: number;
  search?: string;
};
  "internal-contacts-gdpr-post": {};
  "conversations-interactions-get": {
  interaction_started?: string;
  interaction_ended?: string;
  cursor?: string;
};
  "do-not-call-lists-id-entries-id-entry-get": {};
  "do-not-call-lists-id-entries-id-entry-patch": {};
  "do-not-call-lists-id-entries-id-entry-delete": {};
  "do-not-call-lists-id-entries-get": {
  phone_number?: string;
  page?: number;
  per_page?: number;
  order_by?: string;
};
  "do-not-call-lists-id-entries-post": {};
  "do-not-call-lists-id-entries-patch": {};
  "do-not-call-lists-id-entries-delete": {};
  "events-signature-keys-key-id-get": {};
  "external-credentials-get-certificates": {
  tag: ReadonlyArray<string>;
};
  "external-credentials-options-certificates": {};
  "fallback-experience-get": {};
  "fallback-experience-put": {};
  "getFallbackExperienceSettings": {};
  "putFallbackExperienceSettings": {};
  "flows-flow-id-interactions-post": {};
  "flows-platform-flows-flow-id-trigger-post": {};
  "LogsResource_getSessionsOdata": {
  filter: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "AgentsResource_getAllAgentsOdata": {
  filter: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "AgentsResource_getAgent": {};
  "getAgentRoles": {
  filter: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "CasesResource_getCasesOdata": {
  filter?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "UsersResource_getAllUsersOdata": {
  filter: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "UsersResource_getUsers": {};
  "UsersResource_getUserRoles": {
  filter: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "CallsResource_getCallQualityOdata": {
  filter?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "getActivities": {
  contact?: boolean;
  filter?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "getEmailValidation": {};
  "getPhoneValidation": {};
  "getPhoneValidationStats": {};
  "interactions-interaction-id-actions-start-recording-post": {};
  "interactions-interaction-id-actions-pause-recording-post": {};
  "interactions-interaction-id-announcement-post": {};
  "messages-post": {};
  "getAccountNumbers": {
  page: number;
  per_page: number;
  sip?: boolean;
  phone_number?: string;
};
  "getNumberDetail": {};
  "oauth-token-post": {};
  "oauth-authorize-get": {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope?: string;
  state?: string;
  nonce?: string;
};
  "oauth-introspect-post": {};
  "getPublicServerJwkSet": {};
  "oauth-2023-10-certs-get": {};
  "oauth-end-user-session-post": {};
  "record-lists-get": {
  name?: string;
  status?: string;
  team_id?: string;
  team_ids?: ReadonlyArray<string>;
  campaign_ids?: ReadonlyArray<string>;
  fields?: "TEAMS";
  include_none_team?: string;
  page?: number;
  per_page?: number;
  created_at_from?: string;
  created_at_to?: string;
  updated_at_from?: string;
  updated_at_to?: string;
  order_by?: string;
};
  "record-lists-post": {};
  "record-lists-id-get": {
  fields?: "TEAMS";
};
  "record-lists-id-patch": {};
  "record-lists-id-records-id-record-get": {};
  "record-lists-id-records-id-record-delete": {};
  "record-lists-id-records-id-record-patch": {};
  "record-lists-id-records-get": {
  phone_number?: string;
  page?: number;
  per_page?: number;
  upload_request_id?: string;
  search?: string;
  search_fields?: string;
  order_by?: "updated_at" | "updated_at:asc" | "updated_at:desc" | "priority" | "priority:asc" | "priority:desc";
  priorities?: string;
  timezones?: string;
  updated_at_from?: string;
  updated_at_to?: string;
  extra_data_filter?: ReadonlyArray<string>;
};
  "record-lists-id-records-post": {};
  "record-lists-id-records-delete": {
  phone_number: string;
};
  "record-lists-id-records-timezones-get": {
  page?: number;
  per_page?: number;
  search?: string;
};
  "record-lists-id-external-records-delete": {
  external_provider: string;
  external_id: string;
};
  "record-lists-id-records-bulks-post": {};
  "record-lists-id-records-bulks-patch": {};
  "record-lists-id-records-bulks-delete": {};
  "record-lists-id-upload-requests-post": {};
  "record-lists-id-upload-requests-id-upload-request-patch": {};
  "do-not-call-lists-post": {};
  "do-not-call-lists-get": {
  name?: string;
  status?: string;
  team_id?: string;
  team_ids?: ReadonlyArray<string>;
  campaign_ids?: ReadonlyArray<string>;
  fields?: "TEAMS";
  include_none_team?: string;
  page?: number;
  per_page?: number;
  created_at_from?: string;
  created_at_to?: string;
  updated_at_from?: string;
  updated_at_to?: string;
  order_by?: string;
};
  "do-not-call-lists-id-get": {
  fields?: "TEAMS";
};
  "interactions-interaction-id-recordings-recording-id-delete": {};
  "recordings-id-get": {
  redacted?: string;
};
  "recordings-id-media-get": {
  redacted?: string;
};
  "getReportJobs": {};
  "createReportJob": {};
  "getReportJobDetail": {};
  "deleteReportJob": {};
  "getReportJobResult": {};
  "deleteReportFile": {};
  "live-subscriptions-post-2": {};
  "live-subscriptions-subscription-id-get-2": {};
  "live-subscriptions-subscription-id-stream-get": {
  token: string;
};
  "live-subscriptions-subscription-id-entries-id-put-2": {};
  "live-queries-get-2": {
  page?: number;
  per_page?: number;
};
  "users-get": {
  active?: boolean;
  email?: string;
  page?: number;
  per_page?: number;
};
  "get-user": {};
  "GetUserAttributes": {
  page?: number;
  per_page?: number;
};
  "users-id-presence-get": {};
  "users-id-presence-post": {};
  "users-id-presence-status-put": {};
  "users-id-presence-occupancy-patch": {};
  "users-user-id-integrations-integration-name-post": {};
  "users-me": {};
  "users-email-recordings-pause-post": {};
  "users-email-recordings-start-post": {};
  "users-id-disposition-settings-patch": {};
  "getUsers": {
  filter?: string;
  sortBy?: string;
  sortOrder?: "ASCENDING" | "DESCENDING";
  startIndex?: number;
  count?: number;
};
  "createUsers": {};
  "deleteUser": {};
  "getUser": {};
  "patchUser": {};
  "updateUser": {};
  "getServiceProviderConfigs": {};
  "getResourceTypes": {};
  "getUserResourceTypes": {};
  "getSchemas": {
  filter?: string;
};
  "getSchema": {};
  "data-reports-type-jobs-get": {
  page?: number;
  per_page?: number;
};
  "data-reports-type-jobs-post": {};
  "data-reports-type-jobs-id-get": {};
  "data-reports-type-files-id-get": {};
  "data-reports-type-files-id-delete": {};
  "fsi-contacts-contact-id-accounts-get": {
  skip?: number;
  limit?: number;
  interaction_id?: string;
};
  "fsi-contacts-contact-id-accounts-account-id-payoff-post": {
  interaction_id?: string;
};
  "fsi-contacts-get": {
  skip?: number;
  limit?: number;
  member_id?: string;
  first_name?: string;
  last_name?: string;
  birthdate?: string;
  phone_number?: string;
  internet_banking_login_id?: string;
  account_number?: string;
  card_number?: string;
  card_number_partial?: string;
  ssn?: string;
  ssn_partial?: string;
  custom_fields?: string;
  interaction_id?: string;
};
  "fsi-contacts-contact-id-get": {
  interaction_id?: string;
};
  "fsi-contacts-contact-id-cards-card-id-get": {
  interaction_id?: string;
};
  "fsi-contacts-contact-id-cards-card-id-deactivation-post": {
  interaction_id?: string;
};
  "fsi-contacts-contact-id-cards-card-id-activation-post": {
  interaction_id: string;
};
  "fsi-contacts-contact-id-cards-get": {
  skip?: number;
  limit?: number;
  interaction_id?: string;
};
  "fsi-contacts-contact-id-payments-get": {
  skip?: number;
  limit?: number;
  due_at_from?: string;
  due_at_to?: string;
  type?: "PERSONAL_LOAN" | "MORTGAGE_LOAN" | "AUTO_LOAN" | "OTHER_LOAN" | "CREDITCARD_BALANCE" | "HOME_EQUITY_LOAN" | "BUSINESS_LOAN" | "STUDENT_LOAN" | "BUSINESS_CREDIT_CARD" | "STUDENT_CREDIT_CARD" | "PERSONAL_CREDIT_CARD" | "CREDIT_CARD";
  status?: "OPEN" | "CLOSED" | "UNDEFINED" | "PENDING" | "PAID" | "PAST_DUE" | "UPCOMING";
  account_id?: string;
  interaction_id?: string;
};
  "fsi-transfers-internal-post": {
  interaction_id: string;
};
  "fsi-transfers-external-post": {
  interaction_id: string;
};
  "fsi-transfers-international-post": {
  interaction_id: string;
};
  "fsi-stop-contact-id-payments-post": {
  interaction_id?: string;
};
  "fsi-travel-notifications-post": {
  interaction_id?: string;
};
  "fsi-checks-contact-id-search-post": {
  interaction_id?: string;
};
  "fsi-contacts-contact-id-cards-card-id-replacecard-post": {
  interaction_id?: string;
};
  "fsi-contacts-contact-id-payments-ach-post": {
  interaction_id?: string;
};
  "fsi-unlock-contact-id-pin-generate-post": {
  interaction_id?: string;
};
  "fsi-unlock-contact-id-pin-reset-post": {
  interaction_id?: string;
};
  "fsi-decrypt-encrypt-key-encrypted-content-get": {};
  "fsi-contacts-events-writeback-post": {
  interaction_id: string;
};
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get": {
  interaction_id?: string;
};
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put": {
  interaction_id?: string;
};
  "getAccountConfiguration": {};
  "deleteAccountConfiguration": {};
  "getEventTypes": {
  skip?: number;
  limit?: number;
  ids?: ReadonlyArray<string>;
};
  "createEventType": {};
  "getEventType": {};
  "updateEventType": {};
  "deleteEventType": {};
  "upsertRule": {
  event_type: string;
};
  "getRule": {};
  "deleteRule": {};
  "getEvents": {
  publisher_name?: string;
  external_id?: string;
  page?: number;
  per_page?: number;
};
  "addEvent": {
  publisher_name: string;
};
  "getEvent": {};
  "deleteEvent": {
  publisher_name: string;
};
  "deleteEvents": {
  publisher_name: string;
};
  "getTopics": {
  include_deleted?: boolean;
  page?: number;
  per_page?: number;
};
  "addTopic": {};
  "getTopic": {
  include_deleted?: boolean;
};
  "deleteTopic": {};
  "getAutomatedNotificationsSubscriptions": {
  topic_id?: string;
  channel_type?: string;
  channel_uri?: string;
  page?: number;
  per_page?: number;
};
  "upsertSubscription": {};
  "automatedNotificationsGetSubscription": {};
  "checkOptInStatus": {};
  "searchAutomatedNotificationsInteractions": {
  event_id?: string;
  rule_id?: string;
  external_id?: string;
  external_type_id?: string;
  escalation_id?: string;
  escalation_state?: string;
  contact_id?: string;
  channel_type?: string;
  an_channel_uri?: string;
  contact_channel_uri?: string;
  state?: string;
  start_date?: string;
  end_date?: string;
  last_updated?: string;
  skip?: number;
  limit?: number;
  order_by?: string;
};
  "fsi-contacts-contact-id-accounts-account-id-transactions-get": {
  skip?: number;
  limit?: number;
  type?: "UNDEFINED" | "CREDIT_CARD" | "PAYMENT" | "WITHDRAWAL" | "DEFAULT" | "TRANSFER" | "ADD_ON" | "DEPOSIT" | "PURCHASE" | "CHECK" | "OTHER" | "LOAN_PAYMENTS" | "FEE" | "CHARGE";
  interaction_id?: string;
};
  "fsi_workspace_contacts__update_talkdesk_Contact": {
  phone_number?: string;
  contact_id?: string;
  member_id: string;
  interaction_id?: string;
};
  "getPatientBillingSummary": {};
  "searchPatientCoverages": {
  page?: number;
  per_page?: number;
  count?: number;
};
  "getPatientCoverageDetails": {
  include_accumulators?: boolean;
};
  "scheduleAppointment": {
  interaction_id: string;
  notes?: string;
  notes_prefix?: string;
};
  "getFutureAppointments": {
  interaction_id: string;
  start_date?: string;
  end_date?: string;
  max_days?: number;
  timezone?: string;
  cancelable_only?: boolean;
  status?: "proposed" | "pending" | "booked" | "arrived" | "fulfilled" | "cancelled" | "noshow" | "entered-in-error" | "checked-in" | "waitlist";
  category?: "APPOINTMENT" | "SURGERY";
  page?: number;
  per_page?: number;
};
  "cancelAppointment": {
  interaction_id: string;
  agent_id?: string;
  reason?: string;
  comment?: string;
};
  "sendHL7Events": {};
  "providerAvailableAppointmentsVA": {
  interaction_id: string;
  provider_id: string;
  service_type_id: string;
  location_id: string;
  count?: number;
  max_days?: number;
  preferred_time?: "MORNING" | "AFTERNOON" | "AM" | "PM";
  preferred_week_day?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  preferred_month?: "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";
  timezone?: string;
};
  "providerAvailableSlots": {
  provider_id: string;
  service_type_id: string;
  location_id: string;
  interaction_id?: string;
  page?: number;
  per_page?: number;
  count?: number;
  start_date?: string;
  end_date?: string;
  max_days?: number;
  timezone?: string;
  preferred_time?: "MORNING" | "AFTERNOON" | "AM" | "PM";
  preferred_week_day?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  preferred_month?: "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";
};
  "getProviderAvailableSlots": {
  provider_id: string;
  provider_ids?: string;
  service_type_id: string;
  location_id: string;
  interaction_id?: string;
  page?: number;
  per_page?: number;
  count?: number;
  start_date?: string;
  end_date?: string;
  max_days?: number;
  timezone?: string;
  preferred_time?: "MORNING" | "AFTERNOON" | "AM" | "PM";
  preferred_week_day?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  preferred_month?: "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";
};
  "getBalances": {
  interaction_id: string;
  statement_id?: string;
};
  "suggestProviders": {
  interaction_id: string;
  remove_pcp_flag?: boolean;
  page?: number;
  per_page?: number;
};
  "searchPatientsStudio": {
  interaction_id: string;
  first_name?: string;
  last_name?: string;
  ssn?: string;
  lookup_information?: string;
  lookup_information_type?: "DOB" | "SS" | "PH" | "A" | "HAR" | "IN";
  mrn?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
  phone_number?: string;
  get_pcp_info?: boolean;
  timezone?: string;
  zipcode?: string;
};
  "searchPatientsStudioBrief": {
  interaction_id: string;
  first_name?: string;
  last_name?: string;
  ssn?: string;
  mrn?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
  phone_number?: string;
  get_pcp_info?: boolean;
  timezone?: string;
  zipcode?: string;
};
  "patientInformation": {
  interaction_id: string;
};
  "healthcareCallAnswered": {
  interaction_id: string;
  agent_id: string;
  dialed_phone_number?: string;
};
  "updateTalkdeskContact": {
  phone_number: string;
  interaction_id: string;
  patient_id?: string;
};
  "resetTalkdeskContact": {
  phone_number: string;
};
  "phoneAction": {};
  "clickToCall": {};
  "outgoingSms": {};
  "agentStatusSync": {};
  "sendInbasketMessage": {};
  "mychartResetPassword": {};
  "resetPatientPassword": {};
  "healthcareEpicOauthJwks": {};
  "searchPatientsVA": {
  interaction_id: string;
  first_name?: string;
  last_name?: string;
  ssn?: string;
  lookup_information?: string;
  lookup_information_type?: "DOB" | "SS" | "PH" | "A" | "HAR" | "IN";
  mrn?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
  phone_number?: string;
  timezone?: string;
  zipcode?: string;
};
  "prescriptionsVA": {
  patient_id: string;
  interaction_id?: string;
  page?: number;
  per_page?: number;
};
  "prescriptionRefillVA": {
  prescription_id: string;
  interaction_id?: string;
  fill_quantity?: number;
  pharmacy_ncpdp_id?: string;
};
  "cancelAppointmentVA": {
  interaction_id: string;
  agent_id?: string;
  reason?: string;
  comment?: string;
  appointment_id?: string;
};
  "scheduleAppointmentVA": {
  interaction_id: string;
  notes_prefix?: string;
  sub_location?: string;
};
  "futureAppointmentsVA": {
  interaction_id: string;
  count?: number;
  start_date?: string;
  end_date?: string;
  max_days?: number;
  timezone?: string;
  cancelable_only?: boolean;
  status?: "proposed" | "pending" | "booked" | "arrived" | "fulfilled" | "cancelled" | "noshow" | "entered-in-error" | "checked-in" | "waitlist";
  category?: "APPOINTMENT" | "SURGERY";
};
  "resetHealthcareProvidersVa": {
  interaction_id: string;
};
  "getEncounters": {
  interaction_id: string;
  start_date?: string;
  end_date?: string;
  max_days?: number;
  timezone?: string;
  page?: number;
  per_page?: number;
};
  "getPatientMedicationOrders": {
  interaction_id: string;
  page?: number;
  per_page?: number;
  status?: string;
};
  "confirmAppointment": {
  interaction_id: string;
};
  "rescheduleAppointment": {
  interaction_id: string;
};
  "confirmAppointmentVa": {
  interaction_id: string;
};
  "getServiceRequests": {
  interaction_id: string;
  status?: string;
  page?: number;
  per_page?: number;
};
  "patientProceduresVA": {
  convert_ids?: boolean;
  category?: string;
  start_date?: string;
  end_date?: string;
  page?: number;
  per_page?: number;
};
  "diagnosisPublic": {};
  "triagePublic": {
  interaction_id: string;
};
  "storeInteractionOverrides": {};
  "patientCases": {
  interaction_id: string;
};
  "getOutstandingOrdersPublic": {
  interaction_id: string;
  show_declined_orders?: boolean;
  page?: number;
  per_page?: number;
};
  "saveIntentPublic": {};
  "getMedicationStatements": {
  status?: string;
  page?: number;
  per_page?: number;
};
  "CreateMedicationStatement": {};
  "CreateMedicationOrder": {};
  "verifyPatient": {};
  "createMap": {};
  "createMaps": {};
  "searchContactByPhone": {};
  "searchContactByChannels": {};
  "searchAndCreateContact": {};
  "bindContactToInteraction": {};
  "searchAndUpsertContact": {
  existing_contact_id?: string;
};
  "getFlatAppointmentScheduling": {
  provider_id?: string;
  service_type_id?: string;
  location_id?: string;
  service_type_description?: string;
  provider_description?: string;
  location_description?: string;
  office_address?: string;
  office_city?: string;
  office_state?: string;
  office_zip_code?: string;
  office_phone_number?: string;
  gender?: string;
  language?: string;
};
  "getPhysiciansByPastEncounters": {
  patient_id: string;
  service_type_id?: string;
  location_id?: string;
  service_type_description?: string;
  provider_description?: string;
  location_description?: string;
  office_address?: string;
  office_city?: string;
  office_state?: string;
  office_zip_code?: string;
  office_phone_number?: string;
  gender?: string;
  language?: string;
};
  "deleteEnrollment": {};
  "createEnrollment": {};
  "getConsent": {};
  "editConsent": {};
  "uploadHistoryImport": {};
  "GetHistoryImport": {};
  "uploadForecastImport": {};
  "getForecastImportStatus": {};
  "DeleteTimeOffAionExternal": {};
  "UpdateTimeOffAionExternal": {};
  "CreateTimeOffAionExternal": {};
  "GetAgentCalendarSchedule": {};
  "PostScheduleEventImport": {};
  "GetScheduleEventImport": {};
  "PutTimeOffBalanceExternal": {};
  "DeleteTimeOffBalanceExternal": {};
  "industries-activities-activities-activity-id-patch": {};
  "industries-activities-activities-post": {};
  "industries-activities-activities-activity-id-events-post": {};
  "createInteractionConfiguration": {};
  "getIndustriesContext": {};
  "deleteIndustriesContext": {};
  "addIndustriesContextValue": {};
  "deleteIndustriesContextValue": {};
  "updateIndustriesContextValue": {};
  "builder-functions-executions-post": {};
  "builder-functions-function-id-executions-post": {};
  "phone-labels-get": {
  page?: number;
  per_page?: number;
};
  "phone-labels-put": {};
  "CreatingACase": {};
  "DeletingCasesSoftly": {
  ids: string;
};
  "GettingAListOfCases": {
  page?: number;
  per_page?: number;
  ids?: ReadonlyArray<string>;
  agent_id?: string;
  agent_name?: string;
  agent_email?: string;
  requester_type?: "AGENT" | "CONTACT";
  requester_id?: string;
  requester_name?: string;
  requester_email?: string;
  requester_phone?: string;
  title?: string;
  description?: string;
  status?: ReadonlyArray<"NEW" | "OPEN" | "PENDING" | "ON_HOLD" | "RESOLVED" | "CLOSED">;
  priority?: ReadonlyArray<"LOW" | "NORMAL" | "HIGH" | "URGENT">;
  type?: ReadonlyArray<"QUESTION" | "INCIDENT" | "PROBLEM" | "TASK">;
  about?: ReadonlyArray<string>;
  create_at?: ReadonlyArray<string>;
  update_at?: ReadonlyArray<string>;
  order_by?: "create_at" | "update_at";
  sort?: "ASC" | "DESC";
  custom_fields?: {
  checkbox1: {
  label?: string;
  value: boolean;
  name?: string;
};
};
};
  "GettingCaseDetails": {};
  "UpdatingACase": {};
  "GettingNewestCaseDetailsByContact": {
  id: string;
  name: string;
  email: string;
  phone: string;
  status?: "ALL" | "UNRESOLVED" | "RESOLVED";
  integration: string;
};
  "DeletingCasesPermanently": {
  ids: string;
};
  "UpdateACaseNote": {};
  "GettingAListOfCaseFields": {};
  "create-digital-connect-conversations": {};
  "create-digital-connect-messages": {};
  "delete-digital-connect-conversation": {};
  "phone-details-outbound-numbers-get": {
  page: number;
  per_page: number;
  search?: string;
  search_fields?: string;
  capability?: string;
};
  "phone-details-numbers-get": {
  page: number;
  per_page: number;
  sip?: boolean;
  vcid?: boolean;
  search?: string;
  search_fields?: string;
  order_by?: string;
};
  "phone-details-numbers-id-get": {};
  "create-fsi-insurance-connections-automated-notification": {};
  "fsi-desktop-app-session-get": {};
  "fsi-desktop-app-session-post": {};
  "CollectFeedbackData": {};
  "campaigns-post": {
  source_id?: string;
};
  "campaigns-get": {
  fields?: string;
  page?: number;
  per_page?: number;
  name?: string;
  user_id?: string;
  team_id?: string;
  do_no_call_list_id?: string;
  record_list_id?: string;
  search?: string;
  order_by?: "created_at" | "created_at:asc" | "created_at:desc" | "name" | "name:asc" | "name:desc" | "dialing_mode" | "dialing_mode:asc" | "dialing_mode:desc" | "priority" | "priority:asc" | "priority:desc";
  dialing_mode?: "PREDICTIVE" | "PREVIEW";
  status?: "incomplete" | "ready" | "running" | "paused";
  action_required?: boolean;
  priority?: number;
  created_at_from?: string;
  created_at_to?: string;
};
  "campaigns-id-get": {
  fields?: string;
};
  "campaigns-id-delete": {};
  "campaigns-id-patch": {};
  "campaigns-id-do-not-call-lists-get": {
  page?: number;
  per_page?: number;
  filter?: string;
};
  "campaigns-id-do-not-call-lists-post": {};
  "campaigns-id-do-not-call-lists-delete": {};
  "campaigns-id-record-lists-get": {
  page?: number;
  per_page?: number;
  filter?: string;
};
  "campaigns-id-record-lists-post": {};
  "campaigns-id-record-lists-delete": {};
  "campaigns-id-users-get": {
  page?: number;
  per_page?: number;
  filter?: string;
};
  "campaigns-id-users-post": {};
  "campaigns-id-users-delete": {};
  "campaigns-id-numbers-get": {
  page?: number;
  per_page?: number;
  filter?: string;
};
  "campaigns-id-numbers-post": {};
  "campaigns-id-numbers-delete": {};
  "listScheduledCallbacks": {
  page?: number;
  per_page?: number;
  time_to_call?: string;
  phone_number?: string;
  contact_id?: string;
  record_id?: string;
  status?: string;
  next_time_to_call_end?: string;
  agent_id?: string;
  campaign_id?: string;
  start_time?: string;
  end_time?: string;
  queue?: string;
  team_id?: string;
  from_call_type?: string;
};
  "createScheduledCallback": {};
  "schedule-callbacks-id-delete": {};
  "schedule-callbacks-id-patch": {};
  "schedule-callbacks-id-get": {};
  "studio-callbacks-get": {
  page?: number;
  per_page?: number;
  phone_number?: string;
  status?: string;
  agent_id?: string;
  ring_group?: string;
  team_id?: string;
  from_call_type?: string;
  attribute_id?: string;
  attribute_operator?: string;
};
  "do-not-call-lists-id-entries-queries-post": {};
  "upsertContact": {};
  "healthcareConnectionsGetMemberById": {};
  "memberLookup": {
  full_name?: string;
  date_of_birth?: string;
  phone_number?: string;
  email?: string;
  ssn?: string;
};
  "get_claim_status_by_id_public": {
  date_of_service?: string;
  organization_unit?: string;
  provider_id?: string;
  member_id?: string;
};
  "get_prior_authorization_status_by_id_public": {
  dos?: string;
  organization_unit?: string;
  pre_authorization_referring_provider_id?: string;
  pre_authorization_referring_to_provider_id?: string;
  pcp_provider_id?: string;
  member_id?: string;
  pre_authorization_referring_provider_first_name?: string;
  pre_authorization_referring_provider_last_name?: string;
  pre_authorization_referring_to_provider_first_name?: string;
  pre_authorization_referring_to_provider_last_name?: string;
  pcp_provider_first_name?: string;
  pcp_provider_last_name?: string;
};
  "providerLookupConnections": {
  phone_number?: string;
  date_of_birth?: string;
  npi?: string;
  provider_id?: string;
  organization_unit?: string;
  name?: string;
  related_member_id?: string;
  tax_id?: string;
  skip?: number;
  limit?: number;
};
  "get_claims_public": {
  member_id?: string;
  provider_id?: string;
  plan_id?: string;
  start_date_of_service?: string;
  end_date_of_service?: string;
  organization_unit?: string;
  status?: string;
  skip?: number;
  limit?: number;
  sort_by?: string;
  order?: string;
};
  "get_prior_authorizations": {
  skip?: number;
  limit?: number;
};
  "sycurioLogin": {
  interaction_id?: string;
};
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post": {};
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post": {};
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post": {
  is_final_attempt?: boolean;
};
  "postTrigger": {};
  "deleteTrigger": {};
  "expressGetAccounts": {
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "getResellerContractInfo": {};
  "getResellerContractAction": {
  filter?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "createResellerContractAction": {};
  "getProducts": {
  filter?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "getAccountSubscriptions": {
  filter?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "getAccountInvoices": {
  filter?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "getAccountUsageMonth": {
  page?: number;
  per_page?: number;
  filter?: string;
  order_by?: string;
};
  "createExpressAccount": {};
  "validateAccount": {};
  "automated_notifications_webhook_for_dce": {};
  "emails-simulation-message": {};
  "createPrompt": {};
  "ListPrompts": {
  created_by?: string;
  updated_by?: string;
  created_at_from?: string;
  created_at_to?: string;
  updated_at_from?: string;
  updated_at_to?: string;
  search?: string;
  search_fields?: string;
  order_by?: string;
  page?: number;
  per_page?: number;
};
  "getPromptById": {};
  "deletePromptById": {};
  "PartiallyUpdatesPrompt": {};
  "updatePromptById": {};
  "prompts-id-download-link-get": {
  expires_in?: number;
};
  "GetUsageByPromptId": {
  id: string;
};
  "requestUploadLink": {};
  "GetPromptsQuota": {};
  "promptsBulkOperation": {};
  "GetFlowsByPromptId": {
  search?: string;
  search_fields?: string;
  page?: number;
  per_page?: number;
};
  "SearchingFsiInsuranceAccount": {
  skip?: number;
  limit?: number;
  ssn?: string;
  email?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
};
  "GettingFsiInsuranceAccount": {};
  "GettingFsiInsurancePolicies": {
  skip?: number;
  limit?: number;
  order_by?: string;
};
  "GettingFsiInsurancePoliciesPeriod": {};
  "fsi-insurance-integrations-policies-get": {
  skip?: number;
  limit?: number;
  number?: string;
  ssn?: string;
  type?: string;
  vin?: string;
  first_name?: string;
  last_name?: string;
  country?: string;
  city?: string;
  organization_name?: string;
  state?: string;
  loss_at?: string;
  zip_code?: string;
  order_by?: string;
};
  "fsi-insurance-integrations-policies-id-metadata-get": {
  loss_date?: string;
  product?: string;
};
  "fsi-insurance-integrations-claims-post": {};
  "fsi-insurance-integrations-account-holders-id-billing-get": {};
  "fsi-insurance-integrations-account-holders-id-billing-details-get": {};
  "fsi-insurance-integrations-accounts-account-number-claims-get": {
  skip?: number;
  limit?: number;
};
  "fsi-insurance-integrations-claims-id-get": {};
  "fsi-insurance-integrations-contacts-id-patch": {};
  "fsi-insurance-integrations-document-deliveries-post": {};
  "fsi-insurance-connections-claims-id-get": {};
  "fsi-insurance-connections-policies-policy-number-claims-get": {
  page?: number;
  per_page?: number;
};
  "fsi-insurance-connections-accounts-account-number-claims-get": {
  page?: number;
  per_page?: number;
};
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post": {
  brand?: string;
};
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post": {
  brand?: string;
};
  "erc-ecommerce-connections-customers-customer-id-shipments-get": {
  order_id?: string;
  order_ids?: ReadonlyArray<string>;
  shipping_provider?: string;
  tracking_number?: string;
  item_id?: string;
  product_id?: string;
  delivery_id?: string;
  delivery_statuses?: ReadonlyArray<string>;
  brand?: string;
  limit?: number;
  cursor?: string;
  order_by?: string;
};
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post": {
  brand?: string;
};
  "erc-ecommerce-connections-customers-customer-id-get": {
  brand?: string;
};
  "erc-ecommerce-connections-customers-customer-id-orders-get": {
  limit?: number;
  cursor?: string;
  search?: string;
  brand?: string;
  order_by?: string;
};
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get": {
  brand?: string;
};
  "erc-ecommerce-connections-customers-shipments-available-slots-get": {
  customer_id?: string;
  order_id?: string;
  delivery_id?: string;
  start_time?: string;
  end_time?: string;
  zip_code?: string;
  brand?: string;
  limit?: number;
  cursor?: string;
  order_by?: string;
};
  "erc-ecommerce-connections-products-get": {
  limit?: number;
  cursor?: string;
  brand?: string;
  search?: string;
};
  "ercEcommerceConnectionsGetCustomerOrderItems": {
  brand?: string;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  description?: string;
  limit?: number;
  order_by?: string;
};
  "ercEcommerceConnectionsCancelCustomerOrderItems": {
  brand?: string;
};
  "erc-ecommerce-connections-customers-cart-get": {
  customer_id?: string;
  cart_id?: string;
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-get": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-orders-get": {
  brand?: string;
  limit?: number;
  cursor?: string;
  search?: string;
  order_by?: string;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-get": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-patch": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get": {
  brand?: string;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  description?: string;
  limit?: number;
  order_by?: string;
  cursor?: string;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-shipments-get": {
  order_id?: string;
  order_ids?: ReadonlyArray<string>;
  shipping_provider?: string;
  tracking_number?: string;
  item_id?: string;
  product_id?: string;
  delivery_id?: string;
  delivery_statuses?: ReadonlyArray<string>;
  brand?: string;
  limit?: number;
  cursor?: string;
  order_by?: string;
};
  "erc-ecommerce-customers-customer-id-shipments-schedule-post": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-most-recent-order-get": {
  brand?: string;
};
  "erc-ecommerce-customers-shipments-available-slots-get": {
  customer_id?: string;
  order_id?: string;
  delivery_id?: string;
  start_time?: string;
  end_time?: string;
  zip_code?: string;
  brand?: string;
  limit?: number;
  cursor?: string;
  order_by?: string;
};
  "erc-ecommerce-cart-items-put": {};
  "erc-ecommerce-cart-cart-id-delivery-address-put": {
  brand?: string;
};
  "erc-ecommerce-cart-cart-id-delivery-option-put": {
  brand?: string;
};
  "erc-ecommerce-cart-cart-id-bind-post": {
  brand?: string;
};
  "erc-ecommerce-customers-cart-get": {
  customer_id?: string;
  cart_id?: string;
  interaction_id?: string;
  brand?: string;
};
  "erc-ecommerce-orders-get": {
  limit?: number;
  cursor?: string;
  brand?: string;
  order_by?: string;
  search?: string;
};
  "erc-ecommerce-products-get": {
  limit?: number;
  cursor?: string;
  brand?: string;
  search?: string;
};
  "erc-ecommerce-brand-get": {};
  "erc-ecommerce-customers-technician-visits-available-slots-get": {
  customer_id?: string;
  visit_id?: string;
  start_time?: string;
  end_time?: string;
  zip_code?: string;
  brand?: string;
  limit?: number;
  cursor?: string;
  order_by?: string;
};
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post": {
  brand?: string;
};
  "erc-ecommerce-customers-customer-id-technician-visits-get": {
  statuses?: ReadonlyArray<string>;
  brand?: string;
  limit?: number;
  cursor?: string;
  order_by?: string;
};
  "erc-ecommerce-external-customers-get": {
  page?: number;
  per_page?: number;
  name?: string;
  phone?: string;
  email?: string;
  brand?: string;
  matchMode?: "exact" | "fuzzy";
  ids?: ReadonlyArray<string>;
};
  "erc-ecommerce-shopify-webhooks-handler-credentials-get": {};
  "erc-ecommerce-shopify-webhooks-handler-credentials-put": {};
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete": {
  shopify_store_domain: string;
};
  "erc-ecommerce-return-reasons-get": {
  brand?: string;
};
  "erc-ecommerce-return-calculations-post": {};
  "erc-ecommerce-order-cancel-return-return-id-post": {
  brand?: string;
  cancel_reason?: string;
};
  "erc-ecommerce-order-create-return-post": {};
  "erc-ecommerce-refund-suggested-post": {};
  "erc-ecommerce-refund-post": {};
  "erc-ecommerce-return-process-refund-post": {};
  "ccaas-users-id-status-put": {};
  "ccaas-users-status-post": {};
  "GetAllQueues": {
  name?: string;
  page?: number;
  per_page?: number;
  id?: string;
  order_by?: string;
  prompt_ids?: string;
};
  "AssignUsersToQueues": {};
  "UnassignUsersToQueues": {};
  "GetQueueUsers": {
  page?: number;
  per_page?: number;
  active?: boolean;
};
  "getLocations": {
  page?: number;
  per_page?: number;
  search?: string;
  external_id?: string;
  location_name?: string;
  alternative_name?: string;
  location_type?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  country_name?: string;
  region_name?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  service_id?: string;
  service_name?: string;
  service_type?: string;
  staff_id?: string;
  staff_name?: string;
  staff_specialty?: string;
  staff_visit_type?: string;
  phone_number?: string;
  limit?: number;
  order_by?: string;
};
  "getLocationCities": {
  page?: number;
  per_page?: number;
  location_name?: string;
  alternative_name?: string;
  zip_code?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  specialities?: string;
  service_names?: string;
};
  "getLocationNames": {
  page?: number;
  per_page?: number;
  location_name?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
};
  "getLocationsAgent": {
  page?: number;
  per_page?: number;
  location_type?: string;
  cities?: string;
  region_name?: string;
  country_name?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  service_names?: string;
  service_type?: string;
  service_duration?: string;
  specialities?: string;
  staff_visit_type?: string;
  languages?: string;
  gender?: string;
};
  "getLocationsStaffView": {};
  "getCustomerAddresses": {
  interaction_id?: string;
  contact_id?: string;
  industry?: "HLS" | "FSI" | "Retail";
  page?: number;
  per_page?: number;
};
  "getLocationById": {};
  "getLocationNextWeekOpeningHours": {
  page?: number;
  per_page?: number;
};
  "getServices": {
  page?: number;
  per_page?: number;
  service_name?: string;
  service_type?: string;
  location_name?: string;
  location_type?: string;
  zip_code?: string;
  city?: string;
  country_name?: string;
  region_name?: string;
  location_id?: string;
  staff_id?: string;
  staff_name?: string;
  staff_specialty?: string;
  staff_visit_type?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  limit?: number;
};
  "getServicesAgent": {
  page?: number;
  per_page?: number;
  service_name?: string;
  service_types?: string;
  service_durations?: string;
  specialities?: string;
  service_names?: string;
  service_ids?: string;
  languages?: string;
  genders?: string;
  location_id: string;
  visit_type?: string;
  tag_values?: string;
};
  "getServiceLocations": {
  page?: number;
  per_page?: number;
  service_name?: string;
  service_type?: string;
  location_name?: string;
  location_type?: string;
  zip_code?: string;
  city?: string;
  country_name?: string;
  region_name?: string;
  location_id?: string;
  staff_id?: string;
  staff_name?: string;
  staff_specialty?: string;
  staff_visit_type?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  limit?: number;
};
  "getServiceById": {};
  "getServiceNextWeekOpeningHours": {
  page?: number;
  per_page?: number;
};
  "getGeoAddresses": {
  address: string;
  language?: string;
  page?: number;
  per_page?: number;
};
  "getGeocoding": {
  latlng?: string;
  address?: string;
  language?: string;
  page?: number;
  per_page?: number;
};
  "getServiceTypes": {
  page?: number;
  per_page?: number;
  service_name?: string;
  service_type?: string;
  location_name?: string;
  location_type?: string;
  location_id?: string;
};
  "getServiceNames": {
  page?: number;
  per_page?: number;
  specialities?: string;
  service_name?: string;
  cities?: string;
};
  "getServiceDurations": {
  page?: number;
  per_page?: number;
  service_duration?: string;
};
  "getStaffs": {
  page?: number;
  per_page?: number;
  name?: string;
  searchTerm?: string;
  manager?: string;
  speciality?: string;
  job_title?: string;
  external_id?: string;
  industry?: string;
  gender?: string;
  status?: string;
  language?: string;
  visit_type?: string;
  location_id?: string;
  location_name?: string;
  location_type?: string;
  zip_code?: string;
  city?: string;
  country_name?: string;
  region_name?: string;
  service_id?: string;
  service_name?: string;
  service_type?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  order_by?: string;
  sort?: string;
};
  "getStaffSpecialities": {
  page?: number;
  per_page?: number;
  speciality?: string;
  location_id?: string;
  service_id?: string;
  service_names?: string;
  cities?: string;
};
  "getStaffsAgent": {
  page?: number;
  per_page?: number;
  staff_name?: string;
  visit_type?: string;
  location_id: string;
  service_types?: string;
  service_durations?: string;
  specialities?: string;
  service_names?: string;
  service_ids?: string;
  languages?: string;
  genders?: string;
  tag_values?: string;
};
  "getSpecialtiesServicesLocations": {
  page?: number;
  per_page?: number;
  zip_code?: string;
  city?: string;
  country_name?: string;
  region_name?: string;
  speciality?: string;
  location_name?: string;
  location_type?: string;
  location_id?: string;
  staff_id?: string;
  staff_name?: string;
  staff_visit_type?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
};
  "getStaffGenders": {
  page?: number;
  per_page?: number;
  gender?: string;
};
  "industries-scheduler-teams-get": {
  page?: number;
  size?: number;
};
  "industries-scheduler-availabilities-post": {};
  "industries-scheduler-appointment-get": {
  page?: number;
  size?: number;
};
  "industries-scheduler-appointment-post": {};
  "industries-scheduler-appointment-put": {};
  "industries-scheduler-appointment-cancel-post": {};
  "send_message": {};
  "send_email": {};
  "listIndustriesWorkflowSchedules": {
  page_size?: number;
  cursor?: string;
};
  "createIndustriesWorkflowSchedule": {};
  "updateIndustriesWorkflowSchedule": {};
  "deleteIndustriesWorkflowSchedule": {};
  "listIndustriesWorkflows": {
  page_size?: number;
  cursor?: string;
  workflow_name?: string;
  job_name?: string;
  status?: ReadonlyArray<"RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TERMINATED" | "TIMED_OUT">;
  start_time_from?: string;
  start_time_to?: string;
  close_time_from?: string;
  close_time_to?: string;
  tags?: ReadonlyArray<string>;
  include_progress?: boolean;
};
  "startIndustriesWorkflow": {};
  "getIndustriesWorkflow": {};
  "updateIndustriesWorkflow": {};
  "getIndustriesWorkflowProgress": {};
  "interaction-custom-fields-post": {};
  "SearchExternalSources": {
  page?: number;
  per_page?: number;
  query_by_name?: string;
  metadata?: ReadonlyArray<string>;
  connector_type?: ReadonlyArray<"CUSTOM">;
  status?: ReadonlyArray<"NOT_INDEXED" | "OK" | "INDEXING" | "ERROR" | "INCOMPLETE">;
  last_sync_after?: string;
  last_sync_before?: string;
  order_by?: string;
};
  "CreateExternalSource": {};
  "DeleteExternalSource": {};
  "GetExternalSource": {};
  "UpdateExternalSource": {};
  "upsertKnowledgeManagementDocument": {};
  "deleteKnowledgeManagementDocument": {};
  "interactions_elimination": {};
  "SendOutboundNotificationMessage": {};
  "industries-settings-configurations-service-type-type-id-filter-get": {
  keys?: ReadonlyArray<string>;
};
  "industries-settings-configurations-service-type-filter-get": {
  keys?: ReadonlyArray<string>;
};
  "GetCampaignRecord": {};
  "publicUploadLocationsDirectory": {};
  "getPatientLastLocation": {
  patient_id?: string;
  external_id?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
  last_name?: string;
  first_name?: string;
  mrn?: string;
  ssn?: string;
  zipcode?: string;
  page?: number;
  per_page?: number;
};
  "getPatientPractices": {
  page?: number;
  per_page?: number;
};
  "getGuarantorIdentifiers": {
  date_of_birth?: string;
  ssn_last_four?: string;
  guarantor_id: string;
  page?: number;
  per_page?: number;
};
  "getGuarantorBillingSummary": {
  patient_id?: string;
  self_service_id?: string;
};
  "resetGuarantorPassword": {};
  "GetAccountLicenses": {
  page?: number;
  per_page?: number;
  revision_status?: "active" | "last" | "upcoming" | "all";
  expand?: boolean;
  deleted?: boolean;
};
  "GetLicenseSeats": {
  page?: number;
  per_page?: number;
};
  "AssignLicenseSeat": {
  user_id: string;
};
  "RemoveLicenseSeat": {
  user_id: string;
};
  "BulkManageLicenseSeats": {};
  "GetLicenseUsers": {
  page?: number;
  per_page?: number;
  filter?: string;
  order_by?: string;
};
  "GetAssetSeatUsers": {
  expand?: boolean;
  filter?: string;
  page?: number;
  per_page?: number;
};
  "RemoveUserSeats": {};
  "AssignAccountSeats": {};
  "GetAccountSubscription": {};
  "GetAccountSubscriptionLicenses": {};
  "GetAccountSubscriptionLicenseDetails": {};
}

export interface TalkdeskFullApiOperationQueryRequiredMap {
  "account-get": false;
  "account-wallets-get": false;
  "account-wallets-name-get": false;
  "account-bucket-configurations-get": false;
  "apps-get": false;
  "apps-post": false;
  "apps-app-id-get": false;
  "apps-app-id-patch": false;
  "apps-app-id-installations-id-get": false;
  "apps-app-id-installations-id-users-get": false;
  "apps-app-id-installations-id-state-post": false;
  "apps-app-id-installations-id-subscription-get": false;
  "apps-app-id-installations-id-channels-get": false;
  "apps-app-id-installations-id-channels-post": false;
  "apps-app-id-installations-id-trial-get": false;
  "apps-app-id-installations-id-credentials-actions-rotate-post": false;
  "apps-app-id-installations-id-credentials-client-id-state-post": false;
  "attachments-2023-03-get": false;
  "attachments-2023-03-post": false;
  "attachments-2023-03-upload-link-post": false;
  "attachments-2023-03-id-get": false;
  "attachments-2023-03-id-delete": false;
  "attachments-2023-03-id-download-link-get": false;
  "GetAllAttributes": false;
  "CreateAttribute": false;
  "GetAttribute": false;
  "UpdateAttribute": false;
  "GetAllAttributeUsers": false;
  "CreateAttributeUsers": false;
  "DeleteAttributeUsers": false;
  "GetAllAttributesCategories": false;
  "CreateAttributeCategory": false;
  "DeleteAttributeCategory": false;
  "PatchAttributeCategory": false;
  "bulk-imports-users-get": false;
  "bulk-imports-users-post": false;
  "bulk-imports-users-import-id-get": false;
  "bulk-imports-users-import-id-patch": false;
  "bulk-imports-users-import-id-errors-get": false;
  "bulk-imports-users-import-id-outputs-get": false;
  "ring-groups-get": false;
  "ring-groups-id-users-get": false;
  "AssignUserRingGroups": false;
  "UnassignUserRingGroups": false;
  "UpdateUserRingGroups": false;
  "calls-call-id-recordings-get": false;
  "calls-callback-post": false;
  "list-contacts": false;
  "get-contact": false;
  "contacts-contact-id-delete": false;
  "contacts-contact-id-integrations-get": false;
  "contacts-contact-id-custom-fields-get": false;
  "internal-contacts-gdpr-post": false;
  "conversations-interactions-get": false;
  "do-not-call-lists-id-entries-id-entry-get": false;
  "do-not-call-lists-id-entries-id-entry-patch": false;
  "do-not-call-lists-id-entries-id-entry-delete": false;
  "do-not-call-lists-id-entries-get": false;
  "do-not-call-lists-id-entries-post": false;
  "do-not-call-lists-id-entries-patch": false;
  "do-not-call-lists-id-entries-delete": false;
  "events-signature-keys-key-id-get": false;
  "external-credentials-get-certificates": true;
  "external-credentials-options-certificates": false;
  "fallback-experience-get": false;
  "fallback-experience-put": false;
  "getFallbackExperienceSettings": false;
  "putFallbackExperienceSettings": false;
  "flows-flow-id-interactions-post": false;
  "flows-platform-flows-flow-id-trigger-post": false;
  "LogsResource_getSessionsOdata": true;
  "AgentsResource_getAllAgentsOdata": true;
  "AgentsResource_getAgent": false;
  "getAgentRoles": true;
  "CasesResource_getCasesOdata": false;
  "UsersResource_getAllUsersOdata": true;
  "UsersResource_getUsers": false;
  "UsersResource_getUserRoles": true;
  "CallsResource_getCallQualityOdata": false;
  "getActivities": false;
  "getEmailValidation": false;
  "getPhoneValidation": false;
  "getPhoneValidationStats": false;
  "interactions-interaction-id-actions-start-recording-post": false;
  "interactions-interaction-id-actions-pause-recording-post": false;
  "interactions-interaction-id-announcement-post": false;
  "messages-post": false;
  "getAccountNumbers": true;
  "getNumberDetail": false;
  "oauth-token-post": false;
  "oauth-authorize-get": true;
  "oauth-introspect-post": false;
  "getPublicServerJwkSet": false;
  "oauth-2023-10-certs-get": false;
  "oauth-end-user-session-post": false;
  "record-lists-get": false;
  "record-lists-post": false;
  "record-lists-id-get": false;
  "record-lists-id-patch": false;
  "record-lists-id-records-id-record-get": false;
  "record-lists-id-records-id-record-delete": false;
  "record-lists-id-records-id-record-patch": false;
  "record-lists-id-records-get": false;
  "record-lists-id-records-post": false;
  "record-lists-id-records-delete": true;
  "record-lists-id-records-timezones-get": false;
  "record-lists-id-external-records-delete": true;
  "record-lists-id-records-bulks-post": false;
  "record-lists-id-records-bulks-patch": false;
  "record-lists-id-records-bulks-delete": false;
  "record-lists-id-upload-requests-post": false;
  "record-lists-id-upload-requests-id-upload-request-patch": false;
  "do-not-call-lists-post": false;
  "do-not-call-lists-get": false;
  "do-not-call-lists-id-get": false;
  "interactions-interaction-id-recordings-recording-id-delete": false;
  "recordings-id-get": false;
  "recordings-id-media-get": false;
  "getReportJobs": false;
  "createReportJob": false;
  "getReportJobDetail": false;
  "deleteReportJob": false;
  "getReportJobResult": false;
  "deleteReportFile": false;
  "live-subscriptions-post-2": false;
  "live-subscriptions-subscription-id-get-2": false;
  "live-subscriptions-subscription-id-stream-get": true;
  "live-subscriptions-subscription-id-entries-id-put-2": false;
  "live-queries-get-2": false;
  "users-get": false;
  "get-user": false;
  "GetUserAttributes": false;
  "users-id-presence-get": false;
  "users-id-presence-post": false;
  "users-id-presence-status-put": false;
  "users-id-presence-occupancy-patch": false;
  "users-user-id-integrations-integration-name-post": false;
  "users-me": false;
  "users-email-recordings-pause-post": false;
  "users-email-recordings-start-post": false;
  "users-id-disposition-settings-patch": false;
  "getUsers": false;
  "createUsers": false;
  "deleteUser": false;
  "getUser": false;
  "patchUser": false;
  "updateUser": false;
  "getServiceProviderConfigs": false;
  "getResourceTypes": false;
  "getUserResourceTypes": false;
  "getSchemas": false;
  "getSchema": false;
  "data-reports-type-jobs-get": false;
  "data-reports-type-jobs-post": false;
  "data-reports-type-jobs-id-get": false;
  "data-reports-type-files-id-get": false;
  "data-reports-type-files-id-delete": false;
  "fsi-contacts-contact-id-accounts-get": false;
  "fsi-contacts-contact-id-accounts-account-id-payoff-post": false;
  "fsi-contacts-get": false;
  "fsi-contacts-contact-id-get": false;
  "fsi-contacts-contact-id-cards-card-id-get": false;
  "fsi-contacts-contact-id-cards-card-id-deactivation-post": false;
  "fsi-contacts-contact-id-cards-card-id-activation-post": true;
  "fsi-contacts-contact-id-cards-get": false;
  "fsi-contacts-contact-id-payments-get": false;
  "fsi-transfers-internal-post": true;
  "fsi-transfers-external-post": true;
  "fsi-transfers-international-post": true;
  "fsi-stop-contact-id-payments-post": false;
  "fsi-travel-notifications-post": false;
  "fsi-checks-contact-id-search-post": false;
  "fsi-contacts-contact-id-cards-card-id-replacecard-post": false;
  "fsi-contacts-contact-id-payments-ach-post": false;
  "fsi-unlock-contact-id-pin-generate-post": false;
  "fsi-unlock-contact-id-pin-reset-post": false;
  "fsi-decrypt-encrypt-key-encrypted-content-get": false;
  "fsi-contacts-events-writeback-post": true;
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get": false;
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put": false;
  "getAccountConfiguration": false;
  "deleteAccountConfiguration": false;
  "getEventTypes": false;
  "createEventType": false;
  "getEventType": false;
  "updateEventType": false;
  "deleteEventType": false;
  "upsertRule": true;
  "getRule": false;
  "deleteRule": false;
  "getEvents": false;
  "addEvent": true;
  "getEvent": false;
  "deleteEvent": true;
  "deleteEvents": true;
  "getTopics": false;
  "addTopic": false;
  "getTopic": false;
  "deleteTopic": false;
  "getAutomatedNotificationsSubscriptions": false;
  "upsertSubscription": false;
  "automatedNotificationsGetSubscription": false;
  "checkOptInStatus": false;
  "searchAutomatedNotificationsInteractions": false;
  "fsi-contacts-contact-id-accounts-account-id-transactions-get": false;
  "fsi_workspace_contacts__update_talkdesk_Contact": true;
  "getPatientBillingSummary": false;
  "searchPatientCoverages": false;
  "getPatientCoverageDetails": false;
  "scheduleAppointment": true;
  "getFutureAppointments": true;
  "cancelAppointment": true;
  "sendHL7Events": false;
  "providerAvailableAppointmentsVA": true;
  "providerAvailableSlots": true;
  "getProviderAvailableSlots": true;
  "getBalances": true;
  "suggestProviders": true;
  "searchPatientsStudio": true;
  "searchPatientsStudioBrief": true;
  "patientInformation": true;
  "healthcareCallAnswered": true;
  "updateTalkdeskContact": true;
  "resetTalkdeskContact": true;
  "phoneAction": false;
  "clickToCall": false;
  "outgoingSms": false;
  "agentStatusSync": false;
  "sendInbasketMessage": false;
  "mychartResetPassword": false;
  "resetPatientPassword": false;
  "healthcareEpicOauthJwks": false;
  "searchPatientsVA": true;
  "prescriptionsVA": true;
  "prescriptionRefillVA": true;
  "cancelAppointmentVA": true;
  "scheduleAppointmentVA": true;
  "futureAppointmentsVA": true;
  "resetHealthcareProvidersVa": true;
  "getEncounters": true;
  "getPatientMedicationOrders": true;
  "confirmAppointment": true;
  "rescheduleAppointment": true;
  "confirmAppointmentVa": true;
  "getServiceRequests": true;
  "patientProceduresVA": false;
  "diagnosisPublic": false;
  "triagePublic": true;
  "storeInteractionOverrides": false;
  "patientCases": true;
  "getOutstandingOrdersPublic": true;
  "saveIntentPublic": false;
  "getMedicationStatements": false;
  "CreateMedicationStatement": false;
  "CreateMedicationOrder": false;
  "verifyPatient": false;
  "createMap": false;
  "createMaps": false;
  "searchContactByPhone": false;
  "searchContactByChannels": false;
  "searchAndCreateContact": false;
  "bindContactToInteraction": false;
  "searchAndUpsertContact": false;
  "getFlatAppointmentScheduling": false;
  "getPhysiciansByPastEncounters": true;
  "deleteEnrollment": false;
  "createEnrollment": false;
  "getConsent": false;
  "editConsent": false;
  "uploadHistoryImport": false;
  "GetHistoryImport": false;
  "uploadForecastImport": false;
  "getForecastImportStatus": false;
  "DeleteTimeOffAionExternal": false;
  "UpdateTimeOffAionExternal": false;
  "CreateTimeOffAionExternal": false;
  "GetAgentCalendarSchedule": false;
  "PostScheduleEventImport": false;
  "GetScheduleEventImport": false;
  "PutTimeOffBalanceExternal": false;
  "DeleteTimeOffBalanceExternal": false;
  "industries-activities-activities-activity-id-patch": false;
  "industries-activities-activities-post": false;
  "industries-activities-activities-activity-id-events-post": false;
  "createInteractionConfiguration": false;
  "getIndustriesContext": false;
  "deleteIndustriesContext": false;
  "addIndustriesContextValue": false;
  "deleteIndustriesContextValue": false;
  "updateIndustriesContextValue": false;
  "builder-functions-executions-post": false;
  "builder-functions-function-id-executions-post": false;
  "phone-labels-get": false;
  "phone-labels-put": false;
  "CreatingACase": false;
  "DeletingCasesSoftly": true;
  "GettingAListOfCases": false;
  "GettingCaseDetails": false;
  "UpdatingACase": false;
  "GettingNewestCaseDetailsByContact": true;
  "DeletingCasesPermanently": true;
  "UpdateACaseNote": false;
  "GettingAListOfCaseFields": false;
  "create-digital-connect-conversations": false;
  "create-digital-connect-messages": false;
  "delete-digital-connect-conversation": false;
  "phone-details-outbound-numbers-get": true;
  "phone-details-numbers-get": true;
  "phone-details-numbers-id-get": false;
  "create-fsi-insurance-connections-automated-notification": false;
  "fsi-desktop-app-session-get": false;
  "fsi-desktop-app-session-post": false;
  "CollectFeedbackData": false;
  "campaigns-post": false;
  "campaigns-get": false;
  "campaigns-id-get": false;
  "campaigns-id-delete": false;
  "campaigns-id-patch": false;
  "campaigns-id-do-not-call-lists-get": false;
  "campaigns-id-do-not-call-lists-post": false;
  "campaigns-id-do-not-call-lists-delete": false;
  "campaigns-id-record-lists-get": false;
  "campaigns-id-record-lists-post": false;
  "campaigns-id-record-lists-delete": false;
  "campaigns-id-users-get": false;
  "campaigns-id-users-post": false;
  "campaigns-id-users-delete": false;
  "campaigns-id-numbers-get": false;
  "campaigns-id-numbers-post": false;
  "campaigns-id-numbers-delete": false;
  "listScheduledCallbacks": false;
  "createScheduledCallback": false;
  "schedule-callbacks-id-delete": false;
  "schedule-callbacks-id-patch": false;
  "schedule-callbacks-id-get": false;
  "studio-callbacks-get": false;
  "do-not-call-lists-id-entries-queries-post": false;
  "upsertContact": false;
  "healthcareConnectionsGetMemberById": false;
  "memberLookup": false;
  "get_claim_status_by_id_public": false;
  "get_prior_authorization_status_by_id_public": false;
  "providerLookupConnections": false;
  "get_claims_public": false;
  "get_prior_authorizations": false;
  "sycurioLogin": false;
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post": false;
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post": false;
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post": false;
  "postTrigger": false;
  "deleteTrigger": false;
  "expressGetAccounts": false;
  "getResellerContractInfo": false;
  "getResellerContractAction": false;
  "createResellerContractAction": false;
  "getProducts": false;
  "getAccountSubscriptions": false;
  "getAccountInvoices": false;
  "getAccountUsageMonth": false;
  "createExpressAccount": false;
  "validateAccount": false;
  "automated_notifications_webhook_for_dce": false;
  "emails-simulation-message": false;
  "createPrompt": false;
  "ListPrompts": false;
  "getPromptById": false;
  "deletePromptById": false;
  "PartiallyUpdatesPrompt": false;
  "updatePromptById": false;
  "prompts-id-download-link-get": false;
  "GetUsageByPromptId": true;
  "requestUploadLink": false;
  "GetPromptsQuota": false;
  "promptsBulkOperation": false;
  "GetFlowsByPromptId": false;
  "SearchingFsiInsuranceAccount": false;
  "GettingFsiInsuranceAccount": false;
  "GettingFsiInsurancePolicies": false;
  "GettingFsiInsurancePoliciesPeriod": false;
  "fsi-insurance-integrations-policies-get": false;
  "fsi-insurance-integrations-policies-id-metadata-get": false;
  "fsi-insurance-integrations-claims-post": false;
  "fsi-insurance-integrations-account-holders-id-billing-get": false;
  "fsi-insurance-integrations-account-holders-id-billing-details-get": false;
  "fsi-insurance-integrations-accounts-account-number-claims-get": false;
  "fsi-insurance-integrations-claims-id-get": false;
  "fsi-insurance-integrations-contacts-id-patch": false;
  "fsi-insurance-integrations-document-deliveries-post": false;
  "fsi-insurance-connections-claims-id-get": false;
  "fsi-insurance-connections-policies-policy-number-claims-get": false;
  "fsi-insurance-connections-accounts-account-number-claims-get": false;
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post": false;
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post": false;
  "erc-ecommerce-connections-customers-customer-id-shipments-get": false;
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post": false;
  "erc-ecommerce-connections-customers-customer-id-get": false;
  "erc-ecommerce-connections-customers-customer-id-orders-get": false;
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get": false;
  "erc-ecommerce-connections-customers-shipments-available-slots-get": false;
  "erc-ecommerce-connections-products-get": false;
  "ercEcommerceConnectionsGetCustomerOrderItems": false;
  "ercEcommerceConnectionsCancelCustomerOrderItems": false;
  "erc-ecommerce-connections-customers-cart-get": false;
  "erc-ecommerce-customers-customer-id-get": false;
  "erc-ecommerce-customers-customer-id-orders-get": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-get": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-patch": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get": false;
  "erc-ecommerce-customers-customer-id-shipments-get": false;
  "erc-ecommerce-customers-customer-id-shipments-schedule-post": false;
  "erc-ecommerce-customers-customer-id-most-recent-order-get": false;
  "erc-ecommerce-customers-shipments-available-slots-get": false;
  "erc-ecommerce-cart-items-put": false;
  "erc-ecommerce-cart-cart-id-delivery-address-put": false;
  "erc-ecommerce-cart-cart-id-delivery-option-put": false;
  "erc-ecommerce-cart-cart-id-bind-post": false;
  "erc-ecommerce-customers-cart-get": false;
  "erc-ecommerce-orders-get": false;
  "erc-ecommerce-products-get": false;
  "erc-ecommerce-brand-get": false;
  "erc-ecommerce-customers-technician-visits-available-slots-get": false;
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post": false;
  "erc-ecommerce-customers-customer-id-technician-visits-get": false;
  "erc-ecommerce-external-customers-get": false;
  "erc-ecommerce-shopify-webhooks-handler-credentials-get": false;
  "erc-ecommerce-shopify-webhooks-handler-credentials-put": false;
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete": true;
  "erc-ecommerce-return-reasons-get": false;
  "erc-ecommerce-return-calculations-post": false;
  "erc-ecommerce-order-cancel-return-return-id-post": false;
  "erc-ecommerce-order-create-return-post": false;
  "erc-ecommerce-refund-suggested-post": false;
  "erc-ecommerce-refund-post": false;
  "erc-ecommerce-return-process-refund-post": false;
  "ccaas-users-id-status-put": false;
  "ccaas-users-status-post": false;
  "GetAllQueues": false;
  "AssignUsersToQueues": false;
  "UnassignUsersToQueues": false;
  "GetQueueUsers": false;
  "getLocations": false;
  "getLocationCities": false;
  "getLocationNames": false;
  "getLocationsAgent": false;
  "getLocationsStaffView": false;
  "getCustomerAddresses": false;
  "getLocationById": false;
  "getLocationNextWeekOpeningHours": false;
  "getServices": false;
  "getServicesAgent": true;
  "getServiceLocations": false;
  "getServiceById": false;
  "getServiceNextWeekOpeningHours": false;
  "getGeoAddresses": true;
  "getGeocoding": false;
  "getServiceTypes": false;
  "getServiceNames": false;
  "getServiceDurations": false;
  "getStaffs": false;
  "getStaffSpecialities": false;
  "getStaffsAgent": true;
  "getSpecialtiesServicesLocations": false;
  "getStaffGenders": false;
  "industries-scheduler-teams-get": false;
  "industries-scheduler-availabilities-post": false;
  "industries-scheduler-appointment-get": false;
  "industries-scheduler-appointment-post": false;
  "industries-scheduler-appointment-put": false;
  "industries-scheduler-appointment-cancel-post": false;
  "send_message": false;
  "send_email": false;
  "listIndustriesWorkflowSchedules": false;
  "createIndustriesWorkflowSchedule": false;
  "updateIndustriesWorkflowSchedule": false;
  "deleteIndustriesWorkflowSchedule": false;
  "listIndustriesWorkflows": false;
  "startIndustriesWorkflow": false;
  "getIndustriesWorkflow": false;
  "updateIndustriesWorkflow": false;
  "getIndustriesWorkflowProgress": false;
  "interaction-custom-fields-post": false;
  "SearchExternalSources": false;
  "CreateExternalSource": false;
  "DeleteExternalSource": false;
  "GetExternalSource": false;
  "UpdateExternalSource": false;
  "upsertKnowledgeManagementDocument": false;
  "deleteKnowledgeManagementDocument": false;
  "interactions_elimination": false;
  "SendOutboundNotificationMessage": false;
  "industries-settings-configurations-service-type-type-id-filter-get": false;
  "industries-settings-configurations-service-type-filter-get": false;
  "GetCampaignRecord": false;
  "publicUploadLocationsDirectory": false;
  "getPatientLastLocation": false;
  "getPatientPractices": false;
  "getGuarantorIdentifiers": true;
  "getGuarantorBillingSummary": false;
  "resetGuarantorPassword": false;
  "GetAccountLicenses": false;
  "GetLicenseSeats": false;
  "AssignLicenseSeat": true;
  "RemoveLicenseSeat": true;
  "BulkManageLicenseSeats": false;
  "GetLicenseUsers": false;
  "GetAssetSeatUsers": false;
  "RemoveUserSeats": false;
  "AssignAccountSeats": false;
  "GetAccountSubscription": false;
  "GetAccountSubscriptionLicenses": false;
  "GetAccountSubscriptionLicenseDetails": false;
}

export interface TalkdeskFullApiOperationRequestBodyMap {
  "account-get": never;
  "account-wallets-get": never;
  "account-wallets-name-get": never;
  "account-bucket-configurations-get": never;
  "apps-get": never;
  "apps-post": {
  _embedded?: {
  apps?: {
  id?: string;
  app_type?: "standalone" | "atlas";
  name?: string;
  display_name?: string;
  slug?: string;
  listing_summary?: string;
  description?: string;
  notes?: string;
  version_number?: string;
  render?: "portal" | "canvas";
  created_type?: string;
  sandbox?: boolean;
  scopes_reason?: string;
  emails?: ReadonlyArray<{
  type?: string;
  email?: string;
}>;
  assets?: ReadonlyArray<{
  type?: "screenshot" | "video" | "icon";
  description?: string;
  url?: string;
}>;
  urls?: ReadonlyArray<{
  type?: "redirect_uri" | "installation_subscription" | "launch_url" | "privacy_policy" | "terms_of_service" | "app_source";
  url?: string;
}>;
  subscription_types?: ReadonlyArray<{
  type?: "trial" | "paid";
  license_type?: "individual" | "universal";
  name?: string;
  price?: number;
  description?: string;
  listing_summary?: string;
  min_licenses?: number;
  max_licenses?: number;
  created_by?: string;
}>;
  scopes?: ReadonlyArray<"openid" | "refresh_token" | "apps:read" | "apps:write" | "reports:read" | "reports:write" | "events:read" | "account:read" | "users:read" | "recordings:read" | "interaction-triggers:read">;
  capabilities?: ReadonlyArray<{
  name?: string;
}>;
  _links?: {
  self?: {
  href?: string;
};
};
};
};
  total?: number;
  page?: number;
  per_page?: number;
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "apps-app-id-get": never;
  "apps-app-id-patch": {
  name?: string;
  active?: boolean;
  description?: string;
  sandbox?: boolean;
  assets?: ReadonlyArray<{
  type?: "screenshot" | "video" | "icon";
  url?: string;
  description?: string;
}>;
  slug?: string;
  capabilities?: ReadonlyArray<{
  name?: string;
}>;
  urls?: ReadonlyArray<{
  type?: "redirect_uri" | "installation_subscription" | "launch_url" | "privacy_policy" | "terms_of_service" | "app_source";
  url?: string;
}>;
  render?: string;
};
  "apps-app-id-installations-id-get": never;
  "apps-app-id-installations-id-users-get": never;
  "apps-app-id-installations-id-state-post": {
  state?: "approve" | "reject";
  reason?: string;
};
  "apps-app-id-installations-id-subscription-get": never;
  "apps-app-id-installations-id-channels-get": never;
  "apps-app-id-installations-id-channels-post": {
  type?: "messages";
  resource_type?: "number";
  resource?: string;
};
  "apps-app-id-installations-id-trial-get": never;
  "apps-app-id-installations-id-credentials-actions-rotate-post": never;
  "apps-app-id-installations-id-credentials-client-id-state-post": {
  state?: {};
};
  "attachments-2023-03-get": never;
  "attachments-2023-03-post": {
  name?: string;
  request_id?: string;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};
  "attachments-2023-03-upload-link-post": {
  allowed_mime_types?: ReadonlyArray<string>;
};
  "attachments-2023-03-id-get": never;
  "attachments-2023-03-id-delete": never;
  "attachments-2023-03-id-download-link-get": never;
  "GetAllAttributes": never;
  "CreateAttribute": {
  name: string;
  category_id: string;
  active: boolean;
  proficiency: "none" | "five_stars_scale";
  default_proficiency: number;
  team_ids?: ReadonlyArray<string>;
};
  "GetAttribute": never;
  "UpdateAttribute": {
  name?: string;
  category_id?: string;
  active?: boolean;
  default_proficiency?: number;
  team_ids?: ReadonlyArray<string> | null;
};
  "GetAllAttributeUsers": never;
  "CreateAttributeUsers": {
  attributes_users: ReadonlyArray<{
  id?: string;
  proficiency?: number;
}>;
};
  "DeleteAttributeUsers": {
  attributes_users?: ReadonlyArray<string>;
};
  "GetAllAttributesCategories": never;
  "CreateAttributeCategory": {
  name: string;
};
  "DeleteAttributeCategory": never;
  "PatchAttributeCategory": {
  name: string;
};
  "bulk-imports-users-get": never;
  "bulk-imports-users-post": {
  type: "EXPORT_USERS";
  export_criteria?: {
  mode?: "ALL" | "FILTER" | "USER_IDS";
  query?: string;
  user_ids?: ReadonlyArray<string>;
} | null;
};
  "bulk-imports-users-import-id-get": never;
  "bulk-imports-users-import-id-patch": {
  status: "CANCELED";
};
  "bulk-imports-users-import-id-errors-get": never;
  "bulk-imports-users-import-id-outputs-get": never;
  "ring-groups-get": never;
  "ring-groups-id-users-get": never;
  "AssignUserRingGroups": ReadonlyArray<{
  user_id: string;
  ring_groups: ReadonlyArray<string>;
}>;
  "UnassignUserRingGroups": ReadonlyArray<{
  user_id: string;
  ring_groups: ReadonlyArray<string>;
}>;
  "UpdateUserRingGroups": {
  ring_groups: ReadonlyArray<string>;
};
  "calls-call-id-recordings-get": never;
  "calls-callback-post": {
  talkdesk_phone_number?: string;
  contact_phone_number?: string;
  context?: {
  fields: ReadonlyArray<{
  name: string;
  display_name: string;
  tooltip_text: string;
  data_type: "phone" | "text" | "url";
  value: string;
}>;
};
};
  "list-contacts": never;
  "get-contact": never;
  "contacts-contact-id-delete": never;
  "contacts-contact-id-integrations-get": never;
  "contacts-contact-id-custom-fields-get": never;
  "internal-contacts-gdpr-post": {
  phones?: ReadonlyArray<string>;
  emails?: ReadonlyArray<string>;
  ids?: ReadonlyArray<string>;
  created_at?: {
  start_time?: string;
  end_time?: string;
};
  tags?: ReadonlyArray<string>;
  reason?: "rtbf" | "account_removal";
};
  "conversations-interactions-get": never;
  "do-not-call-lists-id-entries-id-entry-get": never;
  "do-not-call-lists-id-entries-id-entry-patch": ReadonlyArray<{
  op: string;
  path: string;
  value?: string;
}>;
  "do-not-call-lists-id-entries-id-entry-delete": never;
  "do-not-call-lists-id-entries-get": never;
  "do-not-call-lists-id-entries-post": {
  phone_number: string;
  expiration_date?: string;
};
  "do-not-call-lists-id-entries-patch": ReadonlyArray<{
  op: string;
  path: string;
  value?: string;
}>;
  "do-not-call-lists-id-entries-delete": ReadonlyArray<{
  id: string;
}>;
  "events-signature-keys-key-id-get": never;
  "external-credentials-get-certificates": never;
  "external-credentials-options-certificates": never;
  "fallback-experience-get": never;
  "fallback-experience-put": {
  enabled: boolean;
};
  "getFallbackExperienceSettings": never;
  "putFallbackExperienceSettings": {
  forward?: {};
  message?: {};
};
  "flows-flow-id-interactions-post": {};
  "flows-platform-flows-flow-id-trigger-post": {
  inputs?: {};
};
  "LogsResource_getSessionsOdata": never;
  "AgentsResource_getAllAgentsOdata": never;
  "AgentsResource_getAgent": never;
  "getAgentRoles": never;
  "CasesResource_getCasesOdata": never;
  "UsersResource_getAllUsersOdata": never;
  "UsersResource_getUsers": never;
  "UsersResource_getUserRoles": never;
  "CallsResource_getCallQualityOdata": never;
  "getActivities": never;
  "getEmailValidation": never;
  "getPhoneValidation": never;
  "getPhoneValidationStats": never;
  "interactions-interaction-id-actions-start-recording-post": {
  recording_target?: "consultation" | "conversation";
};
  "interactions-interaction-id-actions-pause-recording-post": {
  recording_target?: "consultation" | "conversation";
};
  "interactions-interaction-id-announcement-post": {
  mp3_file_url: string;
};
  "messages-post": {
  talkdesk_phone_number?: string;
  contact_phone_number?: string;
  body: string;
};
  "getAccountNumbers": never;
  "getNumberDetail": never;
  "oauth-token-post": {
  grant_type: "client_credentials" | "authorization_code" | "refresh_token";
  code?: string;
  redirect_uri?: string;
  refresh_token?: string;
  token_type?: "opaque";
  expires_in?: number;
  scope?: string;
  client_assertion_type?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
  client_assertion?: string;
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | "client_credentials" | "authorization_code" | "refresh_token" | string | "opaque" | number | "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | undefined;
};
  "oauth-authorize-get": never;
  "oauth-introspect-post": {
  token: string;
};
  "getPublicServerJwkSet": never;
  "oauth-2023-10-certs-get": never;
  "oauth-end-user-session-post": {
  user_id: string;
  reason?: "force_logout";
};
  "record-lists-get": never;
  "record-lists-post": {
  name: string;
  unique_identifier_type?: "PHONE_NUMBER" | "EXTERNAL" | "NOTHING";
  csv_metadata?: {
  filename?: string;
  byte_size?: number;
  checksum?: string;
  content_type?: string;
};
};
  "record-lists-id-get": never;
  "record-lists-id-patch": {
  op: string;
  path: string;
  value: {};
};
  "record-lists-id-records-id-record-get": never;
  "record-lists-id-records-id-record-delete": never;
  "record-lists-id-records-id-record-patch": ReadonlyArray<{
  op: "replace" | "add";
  path: "extra_data" | "priority";
  value: TalkdeskFullApiSchemaJsonValue;
}>;
  "record-lists-id-records-get": never;
  "record-lists-id-records-post": {
  phone_number: string;
  phone_numbers: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name: string;
  last_name: string;
  timezone?: string;
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  priority?: number;
  extra_data?: {};
};
  "record-lists-id-records-delete": never;
  "record-lists-id-records-timezones-get": never;
  "record-lists-id-external-records-delete": never;
  "record-lists-id-records-bulks-post": {
  upload_request_id?: string;
  records: ReadonlyArray<{
  phone_number?: string;
  phone_numbers: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name: string;
  last_name: string;
  timezone?: string;
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  priority?: number;
  extra_data?: {};
}>;
};
  "record-lists-id-records-bulks-patch": ReadonlyArray<{
  op: "replace" | "add";
  path: string;
  value: {};
}>;
  "record-lists-id-records-bulks-delete": ReadonlyArray<{
  id?: string;
  phone_number?: string;
  external_provider?: string;
  external_id?: string;
}>;
  "record-lists-id-upload-requests-post": {
  csv_metadata: {
  filename?: string;
  byte_size?: number;
  checksum?: string;
  content_type?: string;
};
  callback_action?: {
  endpoint: string;
  method: string;
  body?: {};
  headers?: {};
};
  send_atlas_notification?: boolean;
};
  "record-lists-id-upload-requests-id-upload-request-patch": {
  op: string;
  path: string;
  value?: string;
};
  "do-not-call-lists-post": {
  name: string;
  csv_metadata?: {
  filename?: string;
  byte_size?: number;
  checksum?: string;
  content_type?: string;
};
};
  "do-not-call-lists-get": never;
  "do-not-call-lists-id-get": never;
  "interactions-interaction-id-recordings-recording-id-delete": never;
  "recordings-id-get": never;
  "recordings-id-media-get": never;
  "getReportJobs": never;
  "createReportJob": {
  name?: string;
  format?: "json" | "csv" | "xls";
  timespan?: {
  from?: string;
  to?: string;
};
};
  "getReportJobDetail": never;
  "deleteReportJob": never;
  "getReportJobResult": never;
  "deleteReportFile": never;
  "live-subscriptions-post-2": {
  queries?: ReadonlyArray<{
  id?: string;
  metadata?: {};
  params?: {};
  filters?: {};
}>;
};
  "live-subscriptions-subscription-id-get-2": never;
  "live-subscriptions-subscription-id-stream-get": never;
  "live-subscriptions-subscription-id-entries-id-put-2": {
  query_id?: string;
  metadata?: {};
  params?: {};
  filters?: {};
};
  "live-queries-get-2": never;
  "users-get": never;
  "get-user": never;
  "GetUserAttributes": never;
  "users-id-presence-get": never;
  "users-id-presence-post": never;
  "users-id-presence-status-put": {
  status?: string;
  custom_status_id?: string;
};
  "users-id-presence-occupancy-patch": ReadonlyArray<{
  op: "add" | "remove" | "test";
  path: string;
  value?: string;
}>;
  "users-user-id-integrations-integration-name-post": {
  external_id: string;
};
  "users-me": never;
  "users-email-recordings-pause-post": never;
  "users-email-recordings-start-post": never;
  "users-id-disposition-settings-patch": {
  active?: boolean;
  inbound_enabled?: boolean;
  outbound_enabled?: boolean;
  timeout?: number;
  internal_transfer?: boolean;
  finish_occupancy_after_wrap_up?: TalkdeskFullApiSchemaJsonValue;
};
  "getUsers": never;
  "createUsers": {
  schemas?: ReadonlyArray<"urn:ietf:params:scim:schemas:core:2.0:User" | "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User">;
  name: {
  familyName: string;
  givenName: string;
};
  externalId?: string;
  userName: string;
  active: boolean;
  "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User"?: {
  rolesString?: string;
  teamsString?: string;
};
};
  "deleteUser": never;
  "getUser": never;
  "patchUser": {
  schemas: ReadonlyArray<"urn:ietf:params:scim:api:messages:2.0:PatchOp">;
  Operations: ReadonlyArray<{
  op: "add" | "remove" | "replace";
  path?: string;
  value: (string | {
  "attribute-path": string;
});
}>;
};
  "updateUser": {
  schemas?: ReadonlyArray<"urn:ietf:params:scim:schemas:core:2.0:User" | "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User">;
  name: {
  familyName: string;
  givenName: string;
};
  externalId?: string;
  userName: string;
  active: boolean;
  "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User"?: {
  rolesString?: string;
  teamsString?: string;
};
};
  "getServiceProviderConfigs": never;
  "getResourceTypes": never;
  "getUserResourceTypes": never;
  "getSchemas": never;
  "getSchema": never;
  "data-reports-type-jobs-get": never;
  "data-reports-type-jobs-post": {
  name?: string;
  timezone?: string;
  format?: "csv" | "json" | "json_bulk";
  timespan?: {
  from?: string;
  to?: string;
};
};
  "data-reports-type-jobs-id-get": never;
  "data-reports-type-files-id-get": never;
  "data-reports-type-files-id-delete": never;
  "fsi-contacts-contact-id-accounts-get": never;
  "fsi-contacts-contact-id-accounts-account-id-payoff-post": {
  payoff_date: string;
};
  "fsi-contacts-get": never;
  "fsi-contacts-contact-id-get": never;
  "fsi-contacts-contact-id-cards-card-id-get": never;
  "fsi-contacts-contact-id-cards-card-id-deactivation-post": {
  reason_description?: string;
  new_status: "LOST" | "STOLEN" | "CANCELED";
};
  "fsi-contacts-contact-id-cards-card-id-activation-post": never;
  "fsi-contacts-contact-id-cards-get": never;
  "fsi-contacts-contact-id-payments-get": never;
  "fsi-transfers-internal-post": {
  origin_member_id: string;
  destination_member_id: string;
  origin_account_number: string;
  destination_account_number: string;
  value: number;
  approval_person_number?: string;
  effective_date?: string;
  description?: string;
};
  "fsi-transfers-external-post": {
  origin_member_id: string;
  origin_account_number: string;
  recipient_first_last_name?: string;
  recipient_address?: string;
  destination_account_number?: string;
  destination_bank_routing_number?: string;
  iban?: string;
  swift?: string;
  value: number;
  approval_person_number?: string;
  effective_date?: string;
  description?: string;
};
  "fsi-transfers-international-post": {
  origin_member_id: string;
  origin_account_number: string;
  recipient_first_last_name?: string;
  recipient_address?: string;
  iban: string;
  swift: string;
  value: number;
  approval_person_number?: string;
  effective_date?: string;
  description?: string;
};
  "fsi-stop-contact-id-payments-post": {
  account_id: string;
  account_type?: string;
  member_id?: string;
  branch_id?: string;
  check_number?: string;
  check_number_range?: {
  check_number_start?: string;
  check_number_end?: string;
};
  payee_name?: string;
  check_currency_code_type?: string;
  check_currency_code_value: string;
  check_amount?: string;
  check_amount_variance?: string;
  check_amount_range?: {
  low_amount?: string;
  high_amount?: string;
};
  check_date?: string;
  stop_check_date?: string;
  expiration_date?: string;
  stop_type: "INDIVIDUAL" | "SEQUENCE" | "ACH";
  stop_check_reason?: "Stolen Check," | "Lost Check," | "Lost or Stolen Check," | "Incorrect Amount," | "Change in Circumstances," | "Payment Dispute," | "Fraud Prevention," | "Unexpected Changes," | "Cancellation of Services," | "Billing Disputes," | "Fraudulent Transactions," | "Change in Payment Terms," | "Insufficient Funds," | "Duplicate Payments," | "Service Discontinuation," | "Processing Errors," | "Legal Issues," | "Other";
  fees?: string;
  waive_fee?: boolean;
  match_check_number?: boolean;
  ach?: boolean;
  ach_debit_credit?: "Debit" | "Credit";
  card_signed?: boolean;
  print_receipt_code?: string;
};
  "fsi-travel-notifications-post": {
  member_id: string;
  account_id?: string;
  card_id?: string;
  destination: string;
  departure_date: string;
  return_date: string;
  contact_number: string;
};
  "fsi-checks-contact-id-search-post": {
  account_id: string;
  account_type?: string;
  branch_id?: string;
  check_number: string;
  payee_name?: string;
  check_amount?: string;
};
  "fsi-contacts-contact-id-cards-card-id-replacecard-post": {
  account_id: string;
  address: {
  shipping_address?: string;
  postal_code?: string;
  city?: string;
  state?: string;
  country?: string;
};
};
  "fsi-contacts-contact-id-payments-ach-post": {
  transfer_type: "EXTERNAL" | "INTERNAL";
  source_account_number: string;
  target_account_number: string;
  routing_number?: string;
  direction?: "IN" | "OUT";
  currency: string;
  payment_amount: string;
  payment_type: "ONCE" | "RECURRING";
  payment_frequency?: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "ANNUALLY";
  payment_date: string;
  waive_fee?: boolean;
  remark?: string;
};
  "fsi-unlock-contact-id-pin-generate-post": {
  account_number: string;
  card_id: string;
  action: string;
};
  "fsi-unlock-contact-id-pin-reset-post": {
  account_number: string;
  card_id: string;
  tem_pin: string;
  new_pin: string;
};
  "fsi-decrypt-encrypt-key-encrypted-content-get": never;
  "fsi-contacts-events-writeback-post": {
  event_name: string;
  event_date: string;
  contact_id?: string;
  interaction_id?: string;
  agent_id?: string;
  industry?: string;
  additional_properties?: ReadonlyArray<{
  name?: string;
  value?: string;
}>;
};
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get": never;
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put": {
  reason?: string;
  is_one_day_only?: boolean;
  spend_limit_controls: {
  maximum_authorizations_frequency: string;
  maximum_atm_cash_authorizations_amount?: string;
  maximum_atm_cash_authorizations_count?: number;
  maximum_single_atm_transaction_amount?: string;
  maximum_otc_cash_authorizations_amount?: string;
  maximum_otc_authorizations_count?: number;
  maximum_single_otc_cash_authorization_amount?: string;
  maximum_retail_authorizations_amount?: string;
  maximum_retail_authorizations_count?: number;
  maximum_single_retail_authorization_amount?: string;
};
};
  "getAccountConfiguration": never;
  "deleteAccountConfiguration": never;
  "getEventTypes": never;
  "createEventType": {
  id: string;
  name: string;
  updated_at?: string;
};
  "getEventType": never;
  "updateEventType": {
  id: string;
  name: string;
  updated_at?: string;
};
  "deleteEventType": never;
  "upsertRule": {
  id?: string;
  name: string;
  action_type: "STUDIO_FLOW_TRIGGER" | "NO_AUTH_HTTP_TRIGGER";
  action_data: ({
  url: string;
  flow_group_id: string;
} | {
  url: string;
});
  trigger_on: "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  trigger_on_offset?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  recurrence?: {
  periodicity: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  stop_on: "FIXED_NUMBER" | "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  stop_date?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  occurrences?: number;
};
  discard_out_of_available_interval: boolean;
  include_conversation_history: boolean;
  escalate_touchpoint_id?: string;
  calendar_preferences?: ReadonlyArray<{
  week_days: ReadonlyArray<"SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY">;
  start_at?: string;
  end_at?: string;
}>;
  topic_ids?: ReadonlyArray<string>;
};
  "getRule": never;
  "deleteRule": never;
  "getEvents": never;
  "addEvent": {
  external_id?: string;
  correlation_id?: string;
  type: string;
  source: string;
  time_zone: string;
  primary_date: string;
  secondary_date?: string;
  contacts: ReadonlyArray<{
  name: string;
  preferred_channel: string;
  channels: ReadonlyArray<{
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
}>;
}>;
  data?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
};
  "getEvent": never;
  "deleteEvent": never;
  "deleteEvents": never;
  "getTopics": never;
  "addTopic": {
  name: string;
  requires_opt_in: boolean;
};
  "getTopic": never;
  "deleteTopic": never;
  "getAutomatedNotificationsSubscriptions": never;
  "upsertSubscription": {
  topic_id: string;
  channel: {
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
};
  opt_in: boolean;
};
  "automatedNotificationsGetSubscription": never;
  "checkOptInStatus": {
  topic_ids: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  channel: {
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
};
};
  "searchAutomatedNotificationsInteractions": never;
  "fsi-contacts-contact-id-accounts-account-id-transactions-get": never;
  "fsi_workspace_contacts__update_talkdesk_Contact": never;
  "getPatientBillingSummary": never;
  "searchPatientCoverages": never;
  "getPatientCoverageDetails": never;
  "scheduleAppointment": {
  id?: string;
  service_type_id?: string;
  start_date?: string;
  end_date?: string;
  provider_id?: string;
  location_id?: string;
  time_zone_id?: string;
  sub_location?: string;
};
  "getFutureAppointments": never;
  "cancelAppointment": never;
  "sendHL7Events": string;
  "providerAvailableAppointmentsVA": never;
  "providerAvailableSlots": never;
  "getProviderAvailableSlots": never;
  "getBalances": never;
  "suggestProviders": never;
  "searchPatientsStudio": never;
  "searchPatientsStudioBrief": never;
  "patientInformation": never;
  "healthcareCallAnswered": never;
  "updateTalkdeskContact": never;
  "resetTalkdeskContact": never;
  "phoneAction": {
  PhoneSystemRequest: {
  Action: "Pause" | "Resume";
  User: string;
  Department?: number;
  Workstation?: string;
  ID?: string;
};
};
  "clickToCall": {
  PhoneAgentID: string;
  OriginPhoneExtension: string;
  PhoneNumber: string;
  EpicCallID: string;
};
  "outgoingSms": {
  ToPhoneParameter: string;
  BodyParameter: string;
};
  "agentStatusSync": {
  EpicAgentIDs: ReadonlyArray<{
  ID: string;
  Type?: string;
}>;
  Action: "RESERVE" | "RELEASE";
  PhoneAgentId?: string;
  PhoneExtension?: string;
};
  "sendInbasketMessage": {
  contact_id?: string;
  contact_id_type?: string;
  message_priority: string;
  message_text: string;
  message_type: string;
  patient_id?: string;
  patient_id_type?: string;
  recipients: ReadonlyArray<{
  id?: string;
  id_type?: string;
  is_pool?: boolean;
}>;
  sender_id: string;
  sender_id_type?: string;
};
  "mychartResetPassword": {
  my_chart_account_id: string;
  site_id: string;
  message_type?: number;
  my_chart_account_id_type?: string;
};
  "resetPatientPassword": {
  delivery_method: "EMAIL" | "SMS";
};
  "healthcareEpicOauthJwks": never;
  "searchPatientsVA": never;
  "prescriptionsVA": never;
  "prescriptionRefillVA": never;
  "cancelAppointmentVA": never;
  "scheduleAppointmentVA": never;
  "futureAppointmentsVA": never;
  "resetHealthcareProvidersVa": never;
  "getEncounters": never;
  "getPatientMedicationOrders": never;
  "confirmAppointment": never;
  "rescheduleAppointment": {
  location_id: string;
  provider_id: string;
  service_type_id: string;
  date_time: string;
  duration: number;
  time_zone_id: string;
  comments: ReadonlyArray<string>;
  is_review_only?: boolean;
  reschedule_comments?: string;
  reschedule_reason?: string;
  sub_location?: string;
};
  "confirmAppointmentVa": never;
  "getServiceRequests": never;
  "patientProceduresVA": never;
  "diagnosisPublic": {
  diagnosis_process_id?: string;
  interaction_id: string;
  language?: "en" | "es" | "de" | "ar" | "hi" | "ur" | "tl" | "ml" | "ru" | "zh" | "zh-hk" | "cs" | "da" | "nl" | "et" | "fr" | "gr" | "it" | "ja" | "es-xl" | "pl" | "pt" | "pt-br" | "ro" | "sk" | "th" | "tr" | "uk";
  gender?: string;
  pregnant?: "Y" | "N" | "null or empty string";
  birth_date?: string;
  region?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | "p_236" | "p_19" | "p_17" | "p_14" | "p_15" | "p_21" | "p_16" | "p_20" | "p_18" | "p_13";
  symptoms_text?: string;
  answers?: ReadonlyArray<{
  option_id: string;
  option_value: string;
}>;
};
  "triagePublic": never;
  "storeInteractionOverrides": {
  service: string;
  interaction_id: string;
  overrides: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
};
  "patientCases": {
  facility_id?: string | null;
  provider_id?: string | null;
  subject?: string | null;
  note?: string | null;
  case_class?: string | null;
  priority?: string | null;
  auto_close?: boolean | null;
  case_subclass?: string | null;
  resolution_first_contact?: boolean | null;
  resolution_reason?: string | null;
};
  "getOutstandingOrdersPublic": never;
  "saveIntentPublic": {
  interaction_id: string;
  intent: string;
};
  "getMedicationStatements": never;
  "CreateMedicationStatement": {
  medication_statement_id: string;
  status?: string;
};
  "CreateMedicationOrder": {
  medication_order_id: string;
  status?: string | null;
};
  "verifyPatient": {
  fields: {
  readonly [key: string]: string | undefined;
};
  confidence_level: number;
};
  "createMap": {
  external_entity_context: string;
  external_entity_id: string;
  external_entity_name?: string;
  external_entity_birthdate?: string;
  interaction_id: string;
  contact_id?: string;
  extra_fields?: {
  readonly [key: string]: string | undefined;
};
};
  "createMaps": {
  external_entity_context: string;
  external_entity_id: string;
  external_entity_name?: string;
  external_entity_birthdate?: string;
  interaction_id: string;
  contact_id?: string;
  extra_fields?: {
  readonly [key: string]: string | undefined;
};
};
  "searchContactByPhone": never;
  "searchContactByChannels": {
  email?: string;
  phone?: string;
};
  "searchAndCreateContact": {
  external_id: string;
  contact_name?: string;
  contact_phone?: string;
  contact_email?: string;
};
  "bindContactToInteraction": {
  contact_id: string;
  interaction_id: string;
};
  "searchAndUpsertContact": {
  tags?: ReadonlyArray<string>;
  name?: string | null;
  address?: string | null;
  emails?: ReadonlyArray<{
  label?: string | null;
  email: string;
}>;
  phones?: ReadonlyArray<{
  label?: string | null;
  number: string;
}>;
  custom_fields?: ReadonlyArray<{
  key: string;
  value: string;
}>;
  integrations: ReadonlyArray<{
  integration_id: string;
  external_id: string;
  external_url?: string | null;
  external_sync_state?: string | null;
  contact_type?: string | null;
}>;
};
  "getFlatAppointmentScheduling": never;
  "getPhysiciansByPastEncounters": never;
  "deleteEnrollment": never;
  "createEnrollment": {
  phrase_id: number;
};
  "getConsent": never;
  "editConsent": {
  status: "NO_CONSENT" | "CONSENTED" | "REFUSED";
};
  "uploadHistoryImport": {
  abandoned_volume?: number;
  occupancy?: number;
  timezone?: string;
  average_time_to_abandon?: number;
  file_name?: string;
  header_row?: number;
  average_handle_time?: number;
  service_level_percentage?: number;
  average_wait_time?: number;
  staffing?: number;
  interaction_volume_offered?: number;
  csv_file?: string;
  trigger_scheduler_job?: boolean;
  backlog?: number;
  granularity?: number;
  file_format?: "WFM" | "ZENDESK";
  date_format?: "YYYY_MM_DD" | "YYYYMMDD" | "MM_DD_YYYY" | "MM_DD_YY" | "DD_MM_YYYY";
};
  "GetHistoryImport": never;
  "uploadForecastImport": {
  csv_file: string;
  file_name: string;
  time_zone: string;
  date_format?: string;
  trigger_scheduler_job?: boolean;
  interval_editing?: "MIN_15" | "MIN_30" | "HOUR";
};
  "getForecastImportStatus": never;
  "DeleteTimeOffAionExternal": never;
  "UpdateTimeOffAionExternal": {
  description?: string;
  end_at: string;
  start_at: string;
};
  "CreateTimeOffAionExternal": {
  agent_email: string;
  description?: string;
  end_at: string;
  event_type_name: string;
  start_at: string;
};
  "GetAgentCalendarSchedule": never;
  "PostScheduleEventImport": {
  csv_file: string;
  file_name: string;
  time_zone: string;
  date_format?: string;
};
  "GetScheduleEventImport": never;
  "PutTimeOffBalanceExternal": {
  time_off_balances: ReadonlyArray<{
  agent_email?: string;
  event_type_name?: string;
  balance?: number;
}>;
};
  "DeleteTimeOffBalanceExternal": never;
  "industries-activities-activities-activity-id-patch": ReadonlyArray<{
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  path?: string;
  value?: TalkdeskFullApiSchemaJsonValue;
  from?: string;
}>;
  "industries-activities-activities-post": {
  activity_type_id: string;
  contact_id?: string;
  contact_phone_number?: string;
  duration?: string;
  direction: "IN" | "OUT";
  interaction_id?: string;
  ring_groups?: ReadonlyArray<string>;
  started_at: string;
  tags?: ReadonlyArray<string>;
  user_id?: string;
  user_name?: string;
  data?: {};
  events?: ReadonlyArray<{
  id: string;
  event_type_id: string;
  occurred_at: string;
  data?: {};
}>;
  external_integration_name?: string;
  external_id?: string;
};
  "industries-activities-activities-activity-id-events-post": {
  id?: string;
  event_type_id: string;
  occurred_at: string;
  data?: {};
};
  "createInteractionConfiguration": {
  service: string;
  interaction_id: string;
  json: string;
};
  "getIndustriesContext": never;
  "deleteIndustriesContext": never;
  "addIndustriesContextValue": {
  id: string;
  value: string;
};
  "deleteIndustriesContextValue": never;
  "updateIndustriesContextValue": {
  value: string;
};
  "builder-functions-executions-post": {
  function_body: string;
  function_args: {};
};
  "builder-functions-function-id-executions-post": {
  function_args: {};
};
  "phone-labels-get": never;
  "phone-labels-put": {
  labels: ReadonlyArray<{
  id: string;
  type: string;
  default_name: string;
  name: string;
}>;
};
  "CreatingACase": {
  title: string;
  description: string;
  parent_id?: string;
  owner_id?: string;
  priority?: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  custom_fields?: {};
  notes?: ReadonlyArray<{
  note_title?: string;
  note_body?: string;
  public?: boolean;
}>;
  requester_email?: string;
  requester_type?: "Contact";
  requester_name?: string;
};
  "DeletingCasesSoftly": never;
  "GettingAListOfCases": never;
  "GettingCaseDetails": never;
  "UpdatingACase": {
  parent_id?: string;
  title?: string;
  description?: string;
  owner_id?: string;
  priority?: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  type?: "QUESTION" | "INCIDENT" | "PROBLEM" | "TASK";
  status?: "NEW" | "OPEN" | "PENDING" | "ON_HOLD" | "RESOLVED" | "CLOSED";
  resolution?: string;
  custom_fields?: {};
  notes?: ReadonlyArray<{
  note_title?: string;
  note_body?: string;
  public?: boolean;
}>;
  group_id?: string;
};
  "GettingNewestCaseDetailsByContact": never;
  "DeletingCasesPermanently": never;
  "UpdateACaseNote": {
  note_title?: string;
  note_body?: string;
};
  "GettingAListOfCaseFields": never;
  "create-digital-connect-conversations": {
  touchpoint_id: string;
  subject?: string;
  contact_person: {
  email: string;
};
  context_parameters?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
  previous_messages?: ReadonlyArray<{
  type: "user" | "external";
  content: string;
  created_at: string;
}>;
};
  "create-digital-connect-messages": {
  content?: string;
  attachments?: ReadonlyArray<{
  id: string;
  name: string;
  type: string;
  size: number;
}>;
};
  "delete-digital-connect-conversation": never;
  "phone-details-outbound-numbers-get": never;
  "phone-details-numbers-get": never;
  "phone-details-numbers-id-get": never;
  "create-fsi-insurance-connections-automated-notification": {
  external_id?: string;
  correlation_id?: string;
  type: string;
  external_system: string;
  time_zone: string;
  primary_date: string;
  secondary_date?: string;
  contacts: ReadonlyArray<{
  name: string;
  preferred_channel: string;
  channels: ReadonlyArray<{
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
}>;
}>;
  data?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
};
  "fsi-desktop-app-session-get": never;
  "fsi-desktop-app-session-post": {
  session_key: string;
};
  "CollectFeedbackData": {
  interaction_id?: string;
  survey_channel?: string;
  survey_name?: string;
  question?: string;
  answer?: string;
  question_type?: string;
  is_kpi?: boolean;
  survey_is_end?: boolean;
};
  "campaigns-post": {
  name: string;
  dialing_mode?: "PREDICTIVE" | "PREVIEW";
  priority?: number;
  dialing_mode_configuration?: {
  answering_machine_detection?: boolean;
  amd_metadata?: boolean;
  max_abandonment_rate?: number;
  max_dialing_ratio?: number;
  max_ring_time_in_secs: number;
  abandonment_timeout?: {
  amount: number;
};
};
  dialing_strategy?: {
  max_skip_attempts?: number;
  strategy_type?: "AUTOMATIC" | "MANUAL";
  preview_timeout?: number;
  max_attempts: number;
  retry_period: number;
  retry_time_unit: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
  calling_hours: ReadonlyArray<{
  from: string;
  to: string;
  week_days: ReadonlyArray<"MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY">;
}>;
  dispositions: {
  busy: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  no_answer: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  abandoned?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  agent_hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  answering_machine_detection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  invalid_number: {
  status_after_call: "FINAL";
};
};
  record_chain?: ReadonlyArray<{
  type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
  max_attempts: number;
  retry_period?: number;
  retry_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
}>;
  lists_sorting_criteria?: "FIFO" | "LIFO";
};
};
  "campaigns-get": never;
  "campaigns-id-get": never;
  "campaigns-id-delete": never;
  "campaigns-id-patch": {
  op: "REPLACE";
  path: "status" | "name" | "priority";
  value: string;
};
  "campaigns-id-do-not-call-lists-get": never;
  "campaigns-id-do-not-call-lists-post": ReadonlyArray<{
  id: string;
}>;
  "campaigns-id-do-not-call-lists-delete": ReadonlyArray<{
  id: string;
}>;
  "campaigns-id-record-lists-get": never;
  "campaigns-id-record-lists-post": ReadonlyArray<{
  id: string;
}>;
  "campaigns-id-record-lists-delete": ReadonlyArray<{
  id: string;
}>;
  "campaigns-id-users-get": never;
  "campaigns-id-users-post": ReadonlyArray<{
  id: string;
}>;
  "campaigns-id-users-delete": ReadonlyArray<{
  id: string;
}>;
  "campaigns-id-numbers-get": never;
  "campaigns-id-numbers-post": ReadonlyArray<{
  id?: string;
  phone_number?: string;
}>;
  "campaigns-id-numbers-delete": ReadonlyArray<{
  id?: string;
  phone_number?: string;
}>;
  "listScheduledCallbacks": never;
  "createScheduledCallback": {
  interaction_id: string;
  caller_id: string;
  time_to_call: string;
  timezone: string;
  assign_type: "MYSELF_ONLY" | "SPECIFIC_AGENT" | "SPECIFIC_QUEUE" | "MYSELF_IF_AVAILABLE" | "ANY_ELIGIBLE_AGENT";
  from_call_type: "INBOUND" | "MANUAL_OUTBOUND" | "PROACTIVE_OUTBOUND" | "API";
  dialing_model: "PREDICTIVE" | "PREVIEW";
  queues?: ReadonlyArray<{
  queue: string;
}>;
  agents?: ReadonlyArray<{
  agent_id: string;
  ring_group?: string;
}>;
  campaign_id?: string;
  record_id?: string;
  record_list_id?: string;
  phone_number: string;
  record_first_name?: string;
  record_last_name?: string;
  record_extra_data?: {};
  description?: string;
};
  "schedule-callbacks-id-delete": never;
  "schedule-callbacks-id-patch": ReadonlyArray<{
  op: string;
  path: string;
  value: {};
}>;
  "schedule-callbacks-id-get": never;
  "studio-callbacks-get": never;
  "do-not-call-lists-id-entries-queries-post": {
  phone_numbers: ReadonlyArray<{
  phone_number: string;
  timezone: string;
}>;
};
  "upsertContact": {
  phone_number: string;
};
  "healthcareConnectionsGetMemberById": never;
  "memberLookup": never;
  "get_claim_status_by_id_public": never;
  "get_prior_authorization_status_by_id_public": never;
  "providerLookupConnections": never;
  "get_claims_public": never;
  "get_prior_authorizations": never;
  "sycurioLogin": never;
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post": never;
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post": never;
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post": never;
  "postTrigger": {
  callbackurl: string;
  title?: string;
  message?: string;
};
  "deleteTrigger": never;
  "expressGetAccounts": never;
  "getResellerContractInfo": never;
  "getResellerContractAction": never;
  "createResellerContractAction": {
  action_type: ("NEWTDE" | "AMENDTDE" | "CANCELTDE");
  quantity?: number;
};
  "getProducts": never;
  "getAccountSubscriptions": never;
  "getAccountInvoices": never;
  "getAccountUsageMonth": never;
  "createExpressAccount": {
  account_name: string;
  admin_email: string;
  admin_name: string;
  authentication?: {
  identity_providers: {
  oauth: {
  google: {
  enabled: boolean;
};
  microsoft: {
  enabled: boolean;
};
  salesforce: {
  enabled: boolean;
};
};
};
  local_login_enabled: boolean;
};
  company_name: string;
  currency_iso_code: ("AUD" | "BRL" | "CAD" | "EUR" | "GBP" | "SGD" | "USD");
  edition: "EXPRESS";
  external_data?: string;
  num_licenses: TalkdeskFullApiSchemaJsonValue;
  phone_number: string;
  website_url: string;
};
  "validateAccount": never;
  "automated_notifications_webhook_for_dce": {
  event_type: "CONVERSATION_ENDED" | "MESSAGE_CREATED";
  conversation_id: string;
  timestamp: string;
  payload?: {};
};
  "emails-simulation-message": {
  subject?: string;
  content: string;
  from: {
  name?: string;
  email: string;
};
  to: ReadonlyArray<{
  name?: string;
  email: string;
}>;
};
  "createPrompt": {
  request_id: string;
  name: string;
  file_name: string;
  description: string;
};
  "ListPrompts": never;
  "getPromptById": never;
  "deletePromptById": never;
  "PartiallyUpdatesPrompt": ReadonlyArray<{
  op: "REPLACE";
  path: string;
  value: TalkdeskFullApiSchemaJsonValue;
}>;
  "updatePromptById": {
  request_id?: string;
  name: string;
  file_name?: string;
  description: string;
};
  "prompts-id-download-link-get": never;
  "GetUsageByPromptId": never;
  "requestUploadLink": {
  validation_constraints?: {
  allowed_mime_types?: ReadonlyArray<"audio/wav" | "audio/mp3" | "audio/mpeg">;
};
};
  "GetPromptsQuota": never;
  "promptsBulkOperation": {
  method: "DOWNLOAD" | "DELETE";
  requests: ReadonlyArray<{
  path?: string;
  body?: TalkdeskFullApiSchemaJsonValue;
}>;
};
  "GetFlowsByPromptId": never;
  "SearchingFsiInsuranceAccount": never;
  "GettingFsiInsuranceAccount": never;
  "GettingFsiInsurancePolicies": never;
  "GettingFsiInsurancePoliciesPeriod": never;
  "fsi-insurance-integrations-policies-get": never;
  "fsi-insurance-integrations-policies-id-metadata-get": never;
  "fsi-insurance-integrations-claims-post": {
  policy: {
  number: string;
  type: string;
};
  reporter: {
  relation_to_insured: string;
  first_name: string;
  last_name: string;
  primary_phone_number?: string;
  primary_address: {
  address_line1: string;
  address_line2?: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  location_description?: string;
};
};
  primary_contact: {
  same_as_reporter: boolean;
  relation_to_insured?: string;
  first_name?: string;
  last_name?: string;
  primary_phone_number?: string;
  primary_address?: {
  address_line1: string;
  address_line2?: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  location_description?: string;
};
};
  general_information: {
  product: string;
  loss_type: string;
  description?: string;
};
  loss_details?: {
  loss_date: string;
  loss_cause: string;
  fault_rating: string;
  notice_date: string;
  incident_only?: boolean;
  address_line1: string;
  address_line2?: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  description?: string;
};
  vehicle_incidents?: ReadonlyArray<{
  damage_details: {
  description?: string;
  parked?: boolean;
  loss_occurred: string;
  second_description?: string;
  airbags_deployed?: boolean;
  equipment_failure?: boolean;
  operable?: boolean;
  total_loss?: boolean;
  loss_estimate?: string;
  collision?: boolean;
  stolen?: boolean;
};
  driver_information: {
  first_name: string;
  last_name: string;
  reason?: string;
  relation?: string;
  owner?: {
  first_name?: string;
  last_name?: string;
};
  permission?: boolean;
  primary_phone_number?: string;
  primary_address: {
  address_line1: string;
  address_line2?: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
};
  license_number?: string;
  license_state?: string;
  loan?: boolean;
  monthly_payment?: string;
  months_remaining?: string;
  payoff_remaining?: string;
  citations?: ReadonlyArray<{
  number?: string;
  authority?: string;
  type?: string;
}>;
  associated_contacts?: ReadonlyArray<{
  contact?: string;
  active?: boolean;
  role?: string;
  comments?: string;
}>;
  services?: {
  appraisal?: boolean;
  rental?: boolean;
  other?: boolean;
};
  vehicle_information?: {
  year: string;
  make: string;
  model: string;
  color?: string;
  style?: string;
  vin?: string;
  license_state?: string;
  license_plate?: string;
  vehicle_type?: string;
  loss_party?: string;
};
};
}>;
  notes?: ReadonlyArray<{
  subject?: string;
  description?: string;
}>;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
};
  "fsi-insurance-integrations-account-holders-id-billing-get": never;
  "fsi-insurance-integrations-account-holders-id-billing-details-get": never;
  "fsi-insurance-integrations-accounts-account-number-claims-get": never;
  "fsi-insurance-integrations-claims-id-get": never;
  "fsi-insurance-integrations-contacts-id-patch": {
  phone_number?: string;
  email?: string;
  address?: {
  address_line1?: string;
  address_line2?: string;
  country?: string;
  state?: string;
  city?: string;
  zip_code?: string;
  location_description?: string;
};
};
  "fsi-insurance-integrations-document-deliveries-post": {
  policy_number?: string;
  channel: "EMAIL" | "SMS";
  address: string;
  document_type: "MY_ID_CARD" | "PROOF_OF_COVERAGE";
};
  "fsi-insurance-connections-claims-id-get": never;
  "fsi-insurance-connections-policies-policy-number-claims-get": never;
  "fsi-insurance-connections-accounts-account-number-claims-get": never;
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post": {
  cancel_reason?: string;
  restock?: boolean;
  notify_customer?: boolean;
  staff_note?: string;
  refund_method?: {
  original_payment_method?: boolean;
  store_credit?: {
  expires_at?: string;
};
};
  custom_fields_type?: string;
  custom_fields?: {};
};
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post": {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
  default?: boolean;
};
  "erc-ecommerce-connections-customers-customer-id-shipments-get": never;
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post": {
  id: string;
  order_id?: string;
  delivery_id?: string;
};
  "erc-ecommerce-connections-customers-customer-id-get": never;
  "erc-ecommerce-connections-customers-customer-id-orders-get": never;
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get": never;
  "erc-ecommerce-connections-customers-shipments-available-slots-get": never;
  "erc-ecommerce-connections-products-get": never;
  "ercEcommerceConnectionsGetCustomerOrderItems": never;
  "ercEcommerceConnectionsCancelCustomerOrderItems": {
  ids: ReadonlyArray<string>;
};
  "erc-ecommerce-connections-customers-cart-get": never;
  "erc-ecommerce-customers-customer-id-get": never;
  "erc-ecommerce-customers-customer-id-orders-get": never;
  "erc-ecommerce-customers-customer-id-orders-order-id-get": never;
  "erc-ecommerce-customers-customer-id-orders-order-id-patch": {
  tags: ReadonlyArray<string>;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get": never;
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put": {
  ids: ReadonlyArray<string>;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post": ({
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
} & {
  id?: string;
  default?: boolean;
});
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post": {
  cancel_reason?: string;
  restock?: boolean;
  notify_customer?: boolean;
  staff_note?: string;
  refund_method?: {
  original_payment_method?: boolean;
  store_credit?: {
  expires_at?: string;
};
};
  custom_fields_type?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
};
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get": never;
  "erc-ecommerce-customers-customer-id-shipments-get": never;
  "erc-ecommerce-customers-customer-id-shipments-schedule-post": {
  id: string;
  order_id?: string;
  delivery_id?: string;
};
  "erc-ecommerce-customers-customer-id-most-recent-order-get": never;
  "erc-ecommerce-customers-shipments-available-slots-get": never;
  "erc-ecommerce-cart-items-put": {
  interaction_id: string;
  brand?: string;
  cart_id?: string;
  customer_id?: string;
  cart_lines: ReadonlyArray<{
  variant_id: string;
  quantity: number;
}>;
};
  "erc-ecommerce-cart-cart-id-delivery-address-put": {
  address_id?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  city?: string;
  country_code?: string;
  zip_code?: string;
  phone_number?: string;
};
  "erc-ecommerce-cart-cart-id-delivery-option-put": {
  delivery_group_id: string;
  delivery_option_handle: string;
};
  "erc-ecommerce-cart-cart-id-bind-post": {
  interaction_id: string;
  customer_id?: string;
};
  "erc-ecommerce-customers-cart-get": never;
  "erc-ecommerce-orders-get": never;
  "erc-ecommerce-products-get": never;
  "erc-ecommerce-brand-get": never;
  "erc-ecommerce-customers-technician-visits-available-slots-get": never;
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post": {
  id: string;
  visit_id?: string;
};
  "erc-ecommerce-customers-customer-id-technician-visits-get": never;
  "erc-ecommerce-external-customers-get": never;
  "erc-ecommerce-shopify-webhooks-handler-credentials-get": never;
  "erc-ecommerce-shopify-webhooks-handler-credentials-put": {
  shopify_store_domain: string;
  shopify_api_key: string;
  shopify_api_secret: string;
  shopify_api_access_token?: string;
};
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete": never;
  "erc-ecommerce-return-reasons-get": never;
  "erc-ecommerce-return-calculations-post": {
  order_id: string;
  brand?: string;
  return_line_items: ReadonlyArray<{
  line_item_id: string;
  delivery_id?: string;
  quantity: number;
  restocking_percentage?: number;
}>;
  exchange_line_items?: ReadonlyArray<{
  variant_id: string;
  quantity: number;
  applied_discount?: (TalkdeskFullApiSchemaJsonValue | TalkdeskFullApiSchemaJsonValue);
}>;
  return_shipping_fee?: number;
};
  "erc-ecommerce-order-cancel-return-return-id-post": never;
  "erc-ecommerce-order-create-return-post": {
  order_id: string;
  brand?: string;
  return_line_items: ReadonlyArray<({
  line_item_id: string;
  delivery_id?: string;
  quantity: number;
  restocking_percentage?: number;
} & {
  reason: string;
  reason_note?: string;
})>;
  exchange_line_items?: ReadonlyArray<{
  variant_id: string;
  quantity: number;
  applied_discount?: (TalkdeskFullApiSchemaJsonValue | TalkdeskFullApiSchemaJsonValue);
}>;
  return_shipping_fee?: number;
  return_method?: string;
};
  "erc-ecommerce-refund-suggested-post": {
  order_id?: string;
  return_id?: string;
  brand?: string;
  refund_line_items?: ReadonlyArray<{
  line_item_id: string;
  quantity: number;
}>;
  shipping_amount?: number;
  refund_shipping?: boolean;
  refund_duties?: ReadonlyArray<{
  duty_id: string;
}>;
  suggest_full_refund?: boolean;
};
  "erc-ecommerce-refund-post": {
  order_id: string;
  brand?: string;
  note?: string;
  notify?: boolean;
  currency?: string;
  shipping?: {
  shipping_refund_amount?: number;
  full_refund?: boolean;
};
  refund_line_items?: ReadonlyArray<{
  line_item_id: string;
  quantity: number;
  restock_type?: "NO_RESTOCK" | "CANCEL" | "RETURN" | "LEGACY_RESTOCK";
  location_id?: string;
}>;
  transactions?: ReadonlyArray<{
  amount: string;
  gateway: string;
  kind: string;
  order_id: string;
  parent_id?: string;
}>;
  refund_methods?: ReadonlyArray<{
  store_credit_refund?: {
  amount: {
  value: number;
  currency: string;
};
};
}>;
};
  "erc-ecommerce-return-process-refund-post": {
  order_id: string;
  return_id: string;
  brand?: string;
  notify?: boolean;
  currency?: string;
  refund_line_items?: ReadonlyArray<{
  line_item_id: string;
  quantity: number;
  restock_type?: "NO_RESTOCK" | "CANCEL" | "RETURN" | "LEGACY_RESTOCK";
  location_id?: string;
}>;
  transactions?: ReadonlyArray<{
  amount: string;
  gateway: string;
  kind: string;
  order_id: string;
  parent_id?: string;
}>;
};
  "ccaas-users-id-status-put": {
  current_status?: string;
  new_status?: string;
};
  "ccaas-users-status-post": {
  user_ids?: ReadonlyArray<string>;
};
  "GetAllQueues": never;
  "AssignUsersToQueues": ReadonlyArray<{
  id: string;
  users: ReadonlyArray<string>;
}>;
  "UnassignUsersToQueues": ReadonlyArray<{
  id: string;
  users: ReadonlyArray<string>;
}>;
  "GetQueueUsers": never;
  "getLocations": never;
  "getLocationCities": never;
  "getLocationNames": never;
  "getLocationsAgent": never;
  "getLocationsStaffView": {
  entity_type?: string;
  search_term?: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  location_ids?: string;
  service_ids?: string;
  service_type?: string;
  service_duration?: string;
  staff_specialities?: string;
  staff_languages?: string;
  staff_gender?: string;
  staff_tags?: string;
};
  "getCustomerAddresses": never;
  "getLocationById": never;
  "getLocationNextWeekOpeningHours": never;
  "getServices": never;
  "getServicesAgent": never;
  "getServiceLocations": never;
  "getServiceById": never;
  "getServiceNextWeekOpeningHours": never;
  "getGeoAddresses": never;
  "getGeocoding": never;
  "getServiceTypes": never;
  "getServiceNames": never;
  "getServiceDurations": never;
  "getStaffs": never;
  "getStaffSpecialities": never;
  "getStaffsAgent": never;
  "getSpecialtiesServicesLocations": never;
  "getStaffGenders": never;
  "industries-scheduler-teams-get": never;
  "industries-scheduler-availabilities-post": {
  team_members: ReadonlyArray<{
  address: string;
  provider?: "GOOGLE" | "OUTLOOK";
}>;
  meeting_duration: string;
  working_time: ReadonlyArray<{
  start: number;
  end: number;
}>;
};
  "industries-scheduler-appointment-get": never;
  "industries-scheduler-appointment-post": {
  member_email: {
  address: string;
  provider: "OUTLOOK" | "GOOGLE";
};
  start: string;
  meeting_duration?: number;
  team_id: string;
  sms_notification: {
  body: string;
  talkdesk_phone_number: string;
  contact_phone_number: string;
};
  contact_id?: string;
  external_contact_id?: string;
  industry?: "none" | "fs-banking" | "fs-insurance" | "hls-providers" | "erc_retail";
  client_name: string;
  client_email: string;
  notes?: string;
  interaction_id?: string;
  conference_link_type?: "AUTO_GENERATED_LINK" | "FALL_BACK_LINK" | "CUSTOM_DEFINE_LINK" | "NO_LINK";
  conference_link?: string;
  location?: string;
  service?: string;
  visit_type?: string;
  appointment_type?: "IN_PERSON" | "REMOTE";
};
  "industries-scheduler-appointment-put": {
  event_id: string;
  appointment_dto: {
  member_email: {
  address: string;
  provider: "OUTLOOK" | "GOOGLE";
};
  start: string;
  meeting_duration?: number;
  team_id: string;
  sms_notification: {
  body: string;
  talkdesk_phone_number: string;
  contact_phone_number: string;
};
  contact_id?: string;
  external_contact_id?: string;
  industry?: "none" | "fs-banking" | "fs-insurance" | "hls-providers" | "erc_retail";
  client_name: string;
  client_email: string;
  notes?: string;
  interaction_id?: string;
  conference_link_type?: "AUTO_GENERATED_LINK" | "FALL_BACK_LINK" | "CUSTOM_DEFINE_LINK" | "NO_LINK";
  conference_link?: string;
  location?: string;
  service?: string;
  visit_type?: string;
  appointment_type?: "IN_PERSON" | "REMOTE";
};
};
  "industries-scheduler-appointment-cancel-post": {
  event_id: string;
  sms_notification: {
  body: string;
  talkdesk_phone_number: string;
  contact_phone_number: string;
};
  interaction_id?: string;
  cancellation_reason?: string;
};
  "send_message": {
  interaction_id?: string;
  body: string;
  contact_phone_number: string;
  talkdesk_phone_number: string;
  talkdesk_sender?: string;
  origin?: "AN" | "AGENT" | "CONTACT";
  platform_tid?: string;
  timestamp?: string;
};
  "send_email": {
  subject: string;
  from: {
  name?: string;
  email: string;
};
  to: ReadonlyArray<{
  name?: string;
  email: string;
}>;
  content: string;
};
  "listIndustriesWorkflowSchedules": never;
  "createIndustriesWorkflowSchedule": {
  workflow_name: string;
  task_queue: string;
  job_name?: string | null;
  cron_expression?: string | null;
  start_at?: string | null;
  payload?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  tags?: ReadonlyArray<string>;
};
  "updateIndustriesWorkflowSchedule": {
  is_paused: boolean;
};
  "deleteIndustriesWorkflowSchedule": never;
  "listIndustriesWorkflows": never;
  "startIndustriesWorkflow": {
  workflow_name: string;
  task_queue: string;
  job_name?: string | null;
  workflow_id?: string | null;
  payload?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  tags?: ReadonlyArray<string>;
};
  "getIndustriesWorkflow": never;
  "updateIndustriesWorkflow": {
  status: "CANCELLED" | "TERMINATED";
};
  "getIndustriesWorkflowProgress": never;
  "interaction-custom-fields-post": {
  interaction_id?: string;
  text_field_1?: string;
  text_field_2?: string;
  text_field_3?: string;
  text_field_4?: string;
  numeric_field_1?: number;
  numeric_field_2?: number;
  numeric_field_3?: number;
  numeric_field_4?: number;
  timestamp_field_1?: string;
};
  "SearchExternalSources": never;
  "CreateExternalSource": {
  details: {
  description: string;
  knowledge_type: "CUSTOM";
  name: string;
  knowledge_segments?: string;
  ring_groups?: ReadonlyArray<string>;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};
  enabled: boolean;
};
  "DeleteExternalSource": never;
  "GetExternalSource": never;
  "UpdateExternalSource": {
  description: string;
  knowledge_type: "CUSTOM";
  name: string;
  knowledge_segments?: string;
  ring_groups?: ReadonlyArray<string>;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};
  "upsertKnowledgeManagementDocument": {
  url: string;
  title: string;
  content: string;
  created_at: string;
  updated_at?: string;
  metadata?: {};
};
  "deleteKnowledgeManagementDocument": never;
  "interactions_elimination": {
  interaction_ids: ReadonlyArray<string>;
};
  "SendOutboundNotificationMessage": ({
  channel: "WHATSAPP";
  sender: string;
  messages: ReadonlyArray<(TalkdeskFullApiSchemaJsonValue | TalkdeskFullApiSchemaJsonValue)>;
  options?: {
  bulk_id?: string;
  group_id?: string;
  group_name?: string;
  group_info?: {
  readonly [key: string]: string | undefined;
};
  bind_conversation?: {
  enabled?: boolean;
  ttl_in_minutes?: number | null;
};
};
} | {
  channel: "SMS";
  sender: string;
  messages: ReadonlyArray<{
  destinations: ReadonlyArray<{
  to: string;
  message_id?: string;
}>;
  body: string;
}>;
  options?: {
  bulk_id?: string;
  group_id?: string;
  group_name?: string;
  group_info?: {
  readonly [key: string]: string | undefined;
};
};
});
  "industries-settings-configurations-service-type-type-id-filter-get": never;
  "industries-settings-configurations-service-type-filter-get": never;
  "GetCampaignRecord": never;
  "publicUploadLocationsDirectory": {
  file: string;
};
  "getPatientLastLocation": never;
  "getPatientPractices": never;
  "getGuarantorIdentifiers": never;
  "getGuarantorBillingSummary": never;
  "resetGuarantorPassword": {
  delivery_method: "EMAIL" | "SMS";
};
  "GetAccountLicenses": never;
  "GetLicenseSeats": never;
  "AssignLicenseSeat": never;
  "RemoveLicenseSeat": never;
  "BulkManageLicenseSeats": {
  remove?: ReadonlyArray<string>;
  add?: ReadonlyArray<string>;
};
  "GetLicenseUsers": never;
  "GetAssetSeatUsers": never;
  "RemoveUserSeats": never;
  "AssignAccountSeats": {
  user_ids: ReadonlyArray<string>;
};
  "GetAccountSubscription": never;
  "GetAccountSubscriptionLicenses": never;
  "GetAccountSubscriptionLicenseDetails": never;
}

export interface TalkdeskFullApiOperationRequestBodyRequiredMap {
  "account-get": false;
  "account-wallets-get": false;
  "account-wallets-name-get": false;
  "account-bucket-configurations-get": false;
  "apps-get": false;
  "apps-post": true;
  "apps-app-id-get": false;
  "apps-app-id-patch": true;
  "apps-app-id-installations-id-get": false;
  "apps-app-id-installations-id-users-get": false;
  "apps-app-id-installations-id-state-post": false;
  "apps-app-id-installations-id-subscription-get": false;
  "apps-app-id-installations-id-channels-get": false;
  "apps-app-id-installations-id-channels-post": false;
  "apps-app-id-installations-id-trial-get": false;
  "apps-app-id-installations-id-credentials-actions-rotate-post": false;
  "apps-app-id-installations-id-credentials-client-id-state-post": false;
  "attachments-2023-03-get": false;
  "attachments-2023-03-post": false;
  "attachments-2023-03-upload-link-post": false;
  "attachments-2023-03-id-get": false;
  "attachments-2023-03-id-delete": false;
  "attachments-2023-03-id-download-link-get": false;
  "GetAllAttributes": false;
  "CreateAttribute": false;
  "GetAttribute": false;
  "UpdateAttribute": false;
  "GetAllAttributeUsers": false;
  "CreateAttributeUsers": false;
  "DeleteAttributeUsers": false;
  "GetAllAttributesCategories": false;
  "CreateAttributeCategory": false;
  "DeleteAttributeCategory": false;
  "PatchAttributeCategory": false;
  "bulk-imports-users-get": false;
  "bulk-imports-users-post": false;
  "bulk-imports-users-import-id-get": false;
  "bulk-imports-users-import-id-patch": false;
  "bulk-imports-users-import-id-errors-get": false;
  "bulk-imports-users-import-id-outputs-get": false;
  "ring-groups-get": false;
  "ring-groups-id-users-get": false;
  "AssignUserRingGroups": true;
  "UnassignUserRingGroups": true;
  "UpdateUserRingGroups": false;
  "calls-call-id-recordings-get": false;
  "calls-callback-post": false;
  "list-contacts": false;
  "get-contact": false;
  "contacts-contact-id-delete": false;
  "contacts-contact-id-integrations-get": false;
  "contacts-contact-id-custom-fields-get": false;
  "internal-contacts-gdpr-post": true;
  "conversations-interactions-get": false;
  "do-not-call-lists-id-entries-id-entry-get": false;
  "do-not-call-lists-id-entries-id-entry-patch": true;
  "do-not-call-lists-id-entries-id-entry-delete": false;
  "do-not-call-lists-id-entries-get": false;
  "do-not-call-lists-id-entries-post": true;
  "do-not-call-lists-id-entries-patch": true;
  "do-not-call-lists-id-entries-delete": true;
  "events-signature-keys-key-id-get": false;
  "external-credentials-get-certificates": false;
  "external-credentials-options-certificates": false;
  "fallback-experience-get": false;
  "fallback-experience-put": false;
  "getFallbackExperienceSettings": false;
  "putFallbackExperienceSettings": true;
  "flows-flow-id-interactions-post": false;
  "flows-platform-flows-flow-id-trigger-post": false;
  "LogsResource_getSessionsOdata": false;
  "AgentsResource_getAllAgentsOdata": false;
  "AgentsResource_getAgent": false;
  "getAgentRoles": false;
  "CasesResource_getCasesOdata": false;
  "UsersResource_getAllUsersOdata": false;
  "UsersResource_getUsers": false;
  "UsersResource_getUserRoles": false;
  "CallsResource_getCallQualityOdata": false;
  "getActivities": false;
  "getEmailValidation": false;
  "getPhoneValidation": false;
  "getPhoneValidationStats": false;
  "interactions-interaction-id-actions-start-recording-post": false;
  "interactions-interaction-id-actions-pause-recording-post": false;
  "interactions-interaction-id-announcement-post": true;
  "messages-post": false;
  "getAccountNumbers": false;
  "getNumberDetail": false;
  "oauth-token-post": false;
  "oauth-authorize-get": false;
  "oauth-introspect-post": false;
  "getPublicServerJwkSet": false;
  "oauth-2023-10-certs-get": false;
  "oauth-end-user-session-post": false;
  "record-lists-get": false;
  "record-lists-post": true;
  "record-lists-id-get": false;
  "record-lists-id-patch": true;
  "record-lists-id-records-id-record-get": false;
  "record-lists-id-records-id-record-delete": false;
  "record-lists-id-records-id-record-patch": true;
  "record-lists-id-records-get": false;
  "record-lists-id-records-post": true;
  "record-lists-id-records-delete": false;
  "record-lists-id-records-timezones-get": false;
  "record-lists-id-external-records-delete": false;
  "record-lists-id-records-bulks-post": true;
  "record-lists-id-records-bulks-patch": true;
  "record-lists-id-records-bulks-delete": true;
  "record-lists-id-upload-requests-post": true;
  "record-lists-id-upload-requests-id-upload-request-patch": true;
  "do-not-call-lists-post": true;
  "do-not-call-lists-get": false;
  "do-not-call-lists-id-get": false;
  "interactions-interaction-id-recordings-recording-id-delete": false;
  "recordings-id-get": false;
  "recordings-id-media-get": false;
  "getReportJobs": false;
  "createReportJob": false;
  "getReportJobDetail": false;
  "deleteReportJob": false;
  "getReportJobResult": false;
  "deleteReportFile": false;
  "live-subscriptions-post-2": false;
  "live-subscriptions-subscription-id-get-2": false;
  "live-subscriptions-subscription-id-stream-get": false;
  "live-subscriptions-subscription-id-entries-id-put-2": false;
  "live-queries-get-2": false;
  "users-get": false;
  "get-user": false;
  "GetUserAttributes": false;
  "users-id-presence-get": false;
  "users-id-presence-post": false;
  "users-id-presence-status-put": false;
  "users-id-presence-occupancy-patch": true;
  "users-user-id-integrations-integration-name-post": true;
  "users-me": false;
  "users-email-recordings-pause-post": false;
  "users-email-recordings-start-post": false;
  "users-id-disposition-settings-patch": false;
  "getUsers": false;
  "createUsers": true;
  "deleteUser": false;
  "getUser": false;
  "patchUser": true;
  "updateUser": true;
  "getServiceProviderConfigs": false;
  "getResourceTypes": false;
  "getUserResourceTypes": false;
  "getSchemas": false;
  "getSchema": false;
  "data-reports-type-jobs-get": false;
  "data-reports-type-jobs-post": false;
  "data-reports-type-jobs-id-get": false;
  "data-reports-type-files-id-get": false;
  "data-reports-type-files-id-delete": false;
  "fsi-contacts-contact-id-accounts-get": false;
  "fsi-contacts-contact-id-accounts-account-id-payoff-post": true;
  "fsi-contacts-get": false;
  "fsi-contacts-contact-id-get": false;
  "fsi-contacts-contact-id-cards-card-id-get": false;
  "fsi-contacts-contact-id-cards-card-id-deactivation-post": true;
  "fsi-contacts-contact-id-cards-card-id-activation-post": false;
  "fsi-contacts-contact-id-cards-get": false;
  "fsi-contacts-contact-id-payments-get": false;
  "fsi-transfers-internal-post": true;
  "fsi-transfers-external-post": true;
  "fsi-transfers-international-post": true;
  "fsi-stop-contact-id-payments-post": true;
  "fsi-travel-notifications-post": true;
  "fsi-checks-contact-id-search-post": true;
  "fsi-contacts-contact-id-cards-card-id-replacecard-post": true;
  "fsi-contacts-contact-id-payments-ach-post": true;
  "fsi-unlock-contact-id-pin-generate-post": true;
  "fsi-unlock-contact-id-pin-reset-post": true;
  "fsi-decrypt-encrypt-key-encrypted-content-get": false;
  "fsi-contacts-events-writeback-post": true;
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get": false;
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put": true;
  "getAccountConfiguration": false;
  "deleteAccountConfiguration": false;
  "getEventTypes": false;
  "createEventType": false;
  "getEventType": false;
  "updateEventType": false;
  "deleteEventType": false;
  "upsertRule": true;
  "getRule": false;
  "deleteRule": false;
  "getEvents": false;
  "addEvent": true;
  "getEvent": false;
  "deleteEvent": false;
  "deleteEvents": false;
  "getTopics": false;
  "addTopic": true;
  "getTopic": false;
  "deleteTopic": false;
  "getAutomatedNotificationsSubscriptions": false;
  "upsertSubscription": false;
  "automatedNotificationsGetSubscription": false;
  "checkOptInStatus": true;
  "searchAutomatedNotificationsInteractions": false;
  "fsi-contacts-contact-id-accounts-account-id-transactions-get": false;
  "fsi_workspace_contacts__update_talkdesk_Contact": false;
  "getPatientBillingSummary": false;
  "searchPatientCoverages": false;
  "getPatientCoverageDetails": false;
  "scheduleAppointment": false;
  "getFutureAppointments": false;
  "cancelAppointment": false;
  "sendHL7Events": false;
  "providerAvailableAppointmentsVA": false;
  "providerAvailableSlots": false;
  "getProviderAvailableSlots": false;
  "getBalances": false;
  "suggestProviders": false;
  "searchPatientsStudio": false;
  "searchPatientsStudioBrief": false;
  "patientInformation": false;
  "healthcareCallAnswered": false;
  "updateTalkdeskContact": false;
  "resetTalkdeskContact": false;
  "phoneAction": false;
  "clickToCall": false;
  "outgoingSms": false;
  "agentStatusSync": false;
  "sendInbasketMessage": false;
  "mychartResetPassword": false;
  "resetPatientPassword": false;
  "healthcareEpicOauthJwks": false;
  "searchPatientsVA": false;
  "prescriptionsVA": false;
  "prescriptionRefillVA": false;
  "cancelAppointmentVA": false;
  "scheduleAppointmentVA": false;
  "futureAppointmentsVA": false;
  "resetHealthcareProvidersVa": false;
  "getEncounters": false;
  "getPatientMedicationOrders": false;
  "confirmAppointment": false;
  "rescheduleAppointment": true;
  "confirmAppointmentVa": false;
  "getServiceRequests": false;
  "patientProceduresVA": false;
  "diagnosisPublic": true;
  "triagePublic": false;
  "storeInteractionOverrides": true;
  "patientCases": true;
  "getOutstandingOrdersPublic": false;
  "saveIntentPublic": true;
  "getMedicationStatements": false;
  "CreateMedicationStatement": false;
  "CreateMedicationOrder": false;
  "verifyPatient": true;
  "createMap": true;
  "createMaps": true;
  "searchContactByPhone": false;
  "searchContactByChannels": true;
  "searchAndCreateContact": true;
  "bindContactToInteraction": true;
  "searchAndUpsertContact": true;
  "getFlatAppointmentScheduling": false;
  "getPhysiciansByPastEncounters": false;
  "deleteEnrollment": false;
  "createEnrollment": false;
  "getConsent": false;
  "editConsent": true;
  "uploadHistoryImport": true;
  "GetHistoryImport": false;
  "uploadForecastImport": true;
  "getForecastImportStatus": false;
  "DeleteTimeOffAionExternal": false;
  "UpdateTimeOffAionExternal": true;
  "CreateTimeOffAionExternal": true;
  "GetAgentCalendarSchedule": false;
  "PostScheduleEventImport": true;
  "GetScheduleEventImport": false;
  "PutTimeOffBalanceExternal": true;
  "DeleteTimeOffBalanceExternal": false;
  "industries-activities-activities-activity-id-patch": true;
  "industries-activities-activities-post": true;
  "industries-activities-activities-activity-id-events-post": true;
  "createInteractionConfiguration": true;
  "getIndustriesContext": false;
  "deleteIndustriesContext": false;
  "addIndustriesContextValue": true;
  "deleteIndustriesContextValue": false;
  "updateIndustriesContextValue": true;
  "builder-functions-executions-post": true;
  "builder-functions-function-id-executions-post": false;
  "phone-labels-get": false;
  "phone-labels-put": true;
  "CreatingACase": true;
  "DeletingCasesSoftly": false;
  "GettingAListOfCases": false;
  "GettingCaseDetails": false;
  "UpdatingACase": true;
  "GettingNewestCaseDetailsByContact": false;
  "DeletingCasesPermanently": false;
  "UpdateACaseNote": true;
  "GettingAListOfCaseFields": false;
  "create-digital-connect-conversations": true;
  "create-digital-connect-messages": true;
  "delete-digital-connect-conversation": false;
  "phone-details-outbound-numbers-get": false;
  "phone-details-numbers-get": false;
  "phone-details-numbers-id-get": false;
  "create-fsi-insurance-connections-automated-notification": true;
  "fsi-desktop-app-session-get": false;
  "fsi-desktop-app-session-post": true;
  "CollectFeedbackData": true;
  "campaigns-post": true;
  "campaigns-get": false;
  "campaigns-id-get": false;
  "campaigns-id-delete": false;
  "campaigns-id-patch": true;
  "campaigns-id-do-not-call-lists-get": false;
  "campaigns-id-do-not-call-lists-post": true;
  "campaigns-id-do-not-call-lists-delete": true;
  "campaigns-id-record-lists-get": false;
  "campaigns-id-record-lists-post": true;
  "campaigns-id-record-lists-delete": true;
  "campaigns-id-users-get": false;
  "campaigns-id-users-post": true;
  "campaigns-id-users-delete": true;
  "campaigns-id-numbers-get": false;
  "campaigns-id-numbers-post": true;
  "campaigns-id-numbers-delete": true;
  "listScheduledCallbacks": false;
  "createScheduledCallback": true;
  "schedule-callbacks-id-delete": false;
  "schedule-callbacks-id-patch": true;
  "schedule-callbacks-id-get": false;
  "studio-callbacks-get": false;
  "do-not-call-lists-id-entries-queries-post": true;
  "upsertContact": true;
  "healthcareConnectionsGetMemberById": false;
  "memberLookup": false;
  "get_claim_status_by_id_public": false;
  "get_prior_authorization_status_by_id_public": false;
  "providerLookupConnections": false;
  "get_claims_public": false;
  "get_prior_authorizations": false;
  "sycurioLogin": false;
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post": false;
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post": false;
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post": false;
  "postTrigger": true;
  "deleteTrigger": false;
  "expressGetAccounts": false;
  "getResellerContractInfo": false;
  "getResellerContractAction": false;
  "createResellerContractAction": false;
  "getProducts": false;
  "getAccountSubscriptions": false;
  "getAccountInvoices": false;
  "getAccountUsageMonth": false;
  "createExpressAccount": true;
  "validateAccount": false;
  "automated_notifications_webhook_for_dce": true;
  "emails-simulation-message": true;
  "createPrompt": true;
  "ListPrompts": false;
  "getPromptById": false;
  "deletePromptById": false;
  "PartiallyUpdatesPrompt": true;
  "updatePromptById": true;
  "prompts-id-download-link-get": false;
  "GetUsageByPromptId": false;
  "requestUploadLink": true;
  "GetPromptsQuota": false;
  "promptsBulkOperation": true;
  "GetFlowsByPromptId": false;
  "SearchingFsiInsuranceAccount": false;
  "GettingFsiInsuranceAccount": false;
  "GettingFsiInsurancePolicies": false;
  "GettingFsiInsurancePoliciesPeriod": false;
  "fsi-insurance-integrations-policies-get": false;
  "fsi-insurance-integrations-policies-id-metadata-get": false;
  "fsi-insurance-integrations-claims-post": true;
  "fsi-insurance-integrations-account-holders-id-billing-get": false;
  "fsi-insurance-integrations-account-holders-id-billing-details-get": false;
  "fsi-insurance-integrations-accounts-account-number-claims-get": false;
  "fsi-insurance-integrations-claims-id-get": false;
  "fsi-insurance-integrations-contacts-id-patch": true;
  "fsi-insurance-integrations-document-deliveries-post": true;
  "fsi-insurance-connections-claims-id-get": false;
  "fsi-insurance-connections-policies-policy-number-claims-get": false;
  "fsi-insurance-connections-accounts-account-number-claims-get": false;
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post": false;
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post": true;
  "erc-ecommerce-connections-customers-customer-id-shipments-get": false;
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post": true;
  "erc-ecommerce-connections-customers-customer-id-get": false;
  "erc-ecommerce-connections-customers-customer-id-orders-get": false;
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get": false;
  "erc-ecommerce-connections-customers-shipments-available-slots-get": false;
  "erc-ecommerce-connections-products-get": false;
  "ercEcommerceConnectionsGetCustomerOrderItems": false;
  "ercEcommerceConnectionsCancelCustomerOrderItems": true;
  "erc-ecommerce-connections-customers-cart-get": false;
  "erc-ecommerce-customers-customer-id-get": false;
  "erc-ecommerce-customers-customer-id-orders-get": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-get": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-patch": true;
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put": true;
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post": true;
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post": false;
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get": false;
  "erc-ecommerce-customers-customer-id-shipments-get": false;
  "erc-ecommerce-customers-customer-id-shipments-schedule-post": false;
  "erc-ecommerce-customers-customer-id-most-recent-order-get": false;
  "erc-ecommerce-customers-shipments-available-slots-get": false;
  "erc-ecommerce-cart-items-put": true;
  "erc-ecommerce-cart-cart-id-delivery-address-put": true;
  "erc-ecommerce-cart-cart-id-delivery-option-put": true;
  "erc-ecommerce-cart-cart-id-bind-post": true;
  "erc-ecommerce-customers-cart-get": false;
  "erc-ecommerce-orders-get": false;
  "erc-ecommerce-products-get": false;
  "erc-ecommerce-brand-get": false;
  "erc-ecommerce-customers-technician-visits-available-slots-get": false;
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post": false;
  "erc-ecommerce-customers-customer-id-technician-visits-get": false;
  "erc-ecommerce-external-customers-get": false;
  "erc-ecommerce-shopify-webhooks-handler-credentials-get": false;
  "erc-ecommerce-shopify-webhooks-handler-credentials-put": true;
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete": false;
  "erc-ecommerce-return-reasons-get": false;
  "erc-ecommerce-return-calculations-post": false;
  "erc-ecommerce-order-cancel-return-return-id-post": false;
  "erc-ecommerce-order-create-return-post": false;
  "erc-ecommerce-refund-suggested-post": false;
  "erc-ecommerce-refund-post": false;
  "erc-ecommerce-return-process-refund-post": false;
  "ccaas-users-id-status-put": false;
  "ccaas-users-status-post": false;
  "GetAllQueues": false;
  "AssignUsersToQueues": true;
  "UnassignUsersToQueues": true;
  "GetQueueUsers": false;
  "getLocations": false;
  "getLocationCities": false;
  "getLocationNames": false;
  "getLocationsAgent": false;
  "getLocationsStaffView": true;
  "getCustomerAddresses": false;
  "getLocationById": false;
  "getLocationNextWeekOpeningHours": false;
  "getServices": false;
  "getServicesAgent": false;
  "getServiceLocations": false;
  "getServiceById": false;
  "getServiceNextWeekOpeningHours": false;
  "getGeoAddresses": false;
  "getGeocoding": false;
  "getServiceTypes": false;
  "getServiceNames": false;
  "getServiceDurations": false;
  "getStaffs": false;
  "getStaffSpecialities": false;
  "getStaffsAgent": false;
  "getSpecialtiesServicesLocations": false;
  "getStaffGenders": false;
  "industries-scheduler-teams-get": false;
  "industries-scheduler-availabilities-post": true;
  "industries-scheduler-appointment-get": false;
  "industries-scheduler-appointment-post": true;
  "industries-scheduler-appointment-put": true;
  "industries-scheduler-appointment-cancel-post": true;
  "send_message": true;
  "send_email": true;
  "listIndustriesWorkflowSchedules": false;
  "createIndustriesWorkflowSchedule": true;
  "updateIndustriesWorkflowSchedule": true;
  "deleteIndustriesWorkflowSchedule": false;
  "listIndustriesWorkflows": false;
  "startIndustriesWorkflow": true;
  "getIndustriesWorkflow": false;
  "updateIndustriesWorkflow": true;
  "getIndustriesWorkflowProgress": false;
  "interaction-custom-fields-post": true;
  "SearchExternalSources": false;
  "CreateExternalSource": true;
  "DeleteExternalSource": false;
  "GetExternalSource": false;
  "UpdateExternalSource": true;
  "upsertKnowledgeManagementDocument": true;
  "deleteKnowledgeManagementDocument": false;
  "interactions_elimination": true;
  "SendOutboundNotificationMessage": true;
  "industries-settings-configurations-service-type-type-id-filter-get": false;
  "industries-settings-configurations-service-type-filter-get": false;
  "GetCampaignRecord": false;
  "publicUploadLocationsDirectory": true;
  "getPatientLastLocation": false;
  "getPatientPractices": false;
  "getGuarantorIdentifiers": false;
  "getGuarantorBillingSummary": false;
  "resetGuarantorPassword": false;
  "GetAccountLicenses": false;
  "GetLicenseSeats": false;
  "AssignLicenseSeat": false;
  "RemoveLicenseSeat": false;
  "BulkManageLicenseSeats": true;
  "GetLicenseUsers": false;
  "GetAssetSeatUsers": false;
  "RemoveUserSeats": false;
  "AssignAccountSeats": true;
  "GetAccountSubscription": false;
  "GetAccountSubscriptionLicenses": false;
  "GetAccountSubscriptionLicenseDetails": false;
}

export interface TalkdeskFullApiOperationResponseMap {
  "account-get": {
  id?: string;
  name?: string;
  company_name?: string;
  email?: string;
  timezone?: string;
  created_at?: string;
  _links?: {
  self?: {
  href?: string;
  users?: string;
};
};
};
  "account-wallets-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  _links: {
  self: {
  href: string;
};
  first?: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  last?: {
  href: string;
};
};
  _embedded: {
  wallets: ReadonlyArray<{
  name: string;
  product_name: string;
  balance: number;
  account_id: string;
  created_at: string;
  updated_at: string;
  _links: {
  self: {
  href: string;
};
};
}>;
};
};
  "account-wallets-name-get": {
  name: string;
  product_name: string;
  balance: number;
  account_id: string;
  created_at: string;
  updated_at: string;
  _links: {
  self: {
  href: string;
};
};
};
  "account-bucket-configurations-get": {
  page: number;
  per_page: number;
  count: number;
  total: number;
  _links: {
  self: {
  href: string;
};
  first?: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  last?: {
  href: string;
};
};
  _embedded: {
  bucket_configurations: ReadonlyArray<{
  id: string;
  account_id?: string;
  charge_number: string;
  plafond: number;
  plafond_multiplier: number;
  effective_start: string;
  effective_end: string;
  resource: string;
  unit_of_measure: "UNITS" | "MINUTES" | "SECONDS" | "GB" | "MB" | "TRANSCRIPTIONS" | "SEGMENTS" | "REQUESTS" | "NUMBERS" | "PAGES" | "SESSIONS" | "CHARS";
  properties: {};
  status: "ACTIVE" | "TERMINATED" | "UPCOMING";
  type: "FREE_UNITS" | "TIER";
  tier?: string;
  created_at: string;
}>;
};
};
  "apps-get": {
  _embedded?: {
  apps?: {
  id?: string;
  app_type?: "standalone" | "atlas";
  name?: string;
  display_name?: string;
  slug?: string;
  listing_summary?: string;
  description?: string;
  notes?: string;
  version_number?: string;
  render?: "portal" | "canvas";
  created_type?: string;
  sandbox?: boolean;
  scopes_reason?: string;
  emails?: ReadonlyArray<{
  type?: string;
  email?: string;
}>;
  assets?: ReadonlyArray<{
  type?: "screenshot" | "video" | "icon";
  description?: string;
  url?: string;
}>;
  urls?: ReadonlyArray<{
  type?: "redirect_uri" | "installation_subscription" | "launch_url" | "privacy_policy" | "terms_of_service" | "app_source";
  url?: string;
}>;
  subscription_types?: ReadonlyArray<{
  type?: "trial" | "paid";
  license_type?: "individual" | "universal";
  name?: string;
  price?: number;
  description?: string;
  listing_summary?: string;
  min_licenses?: number;
  max_licenses?: number;
  created_by?: string;
}>;
  scopes?: ReadonlyArray<"openid" | "refresh_token" | "apps:read" | "apps:write" | "reports:read" | "reports:write" | "events:read" | "account:read" | "users:read" | "recordings:read" | "interaction-triggers:read">;
  capabilities?: ReadonlyArray<{
  name?: string;
}>;
  _links?: {
  self?: {
  href?: string;
};
};
};
};
  total?: number;
  page?: number;
  per_page?: number;
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "apps-post": {
  id?: string;
};
  "apps-app-id-get": {
  id?: string;
  app_type?: "standalone" | "atlas";
  name?: string;
  display_name?: string;
  slug?: string;
  listing_summary?: string;
  description?: string;
  notes?: string;
  version_number?: string;
  render?: "portal" | "canvas";
  created_type?: string;
  sandbox?: boolean;
  scopes_reason?: string;
  emails?: ReadonlyArray<{
  type?: string;
  email?: string;
}>;
  assets?: ReadonlyArray<{
  type?: "screenshot" | "video" | "icon";
  description?: string;
  url?: string;
}>;
  urls?: ReadonlyArray<{
  type?: "redirect_uri" | "installation_subscription" | "launch_url" | "privacy_policy" | "terms_of_service" | "app_source";
  url?: string;
}>;
  subscription_types?: ReadonlyArray<{
  type?: "trial" | "paid";
  license_type?: "individual" | "universal";
  name?: string;
  price?: number;
  description?: string;
  listing_summary?: string;
  min_licenses?: number;
  max_licenses?: number;
  created_by?: string;
}>;
  scopes?: ReadonlyArray<"openid" | "refresh_token" | "apps:read" | "apps:write" | "reports:read" | "reports:write" | "events:read" | "account:read" | "users:read" | "recordings:read" | "interaction-triggers:read">;
  capabilities?: ReadonlyArray<{
  name?: string;
}>;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "apps-app-id-patch": {
  _embedded?: {
  apps?: {
  id?: string;
  app_type?: "standalone" | "atlas";
  name?: string;
  display_name?: string;
  slug?: string;
  listing_summary?: string;
  description?: string;
  notes?: string;
  version_number?: string;
  render?: "portal" | "canvas";
  created_type?: string;
  sandbox?: boolean;
  scopes_reason?: string;
  emails?: ReadonlyArray<{
  type?: string;
  email?: string;
}>;
  assets?: ReadonlyArray<{
  type?: "screenshot" | "video" | "icon";
  description?: string;
  url?: string;
}>;
  urls?: ReadonlyArray<{
  type?: "redirect_uri" | "installation_subscription" | "launch_url" | "privacy_policy" | "terms_of_service" | "app_source";
  url?: string;
}>;
  subscription_types?: ReadonlyArray<{
  type?: "trial" | "paid";
  license_type?: "individual" | "universal";
  name?: string;
  price?: number;
  description?: string;
  listing_summary?: string;
  min_licenses?: number;
  max_licenses?: number;
  created_by?: string;
}>;
  scopes?: ReadonlyArray<"openid" | "refresh_token" | "apps:read" | "apps:write" | "reports:read" | "reports:write" | "events:read" | "account:read" | "users:read" | "recordings:read" | "interaction-triggers:read">;
  capabilities?: ReadonlyArray<{
  name?: string;
}>;
  _links?: {
  self?: {
  href?: string;
};
};
};
};
  total?: number;
  page?: number;
  per_page?: number;
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "apps-app-id-installations-id-get": {
  id?: string;
  app_id?: string;
  account_id?: string;
  scopes?: ReadonlyArray<string>;
  auto_provision_filters?: ReadonlyArray<{
  filter?: string;
  match?: string;
}>;
  created_at?: string;
  _embedded?: {
  created_by?: {
  id?: string;
  email?: string;
  name?: string;
  active?: boolean;
  gender?: string;
  extension?: number;
  external_phone_number?: string;
  created_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  state?: {
  state?: "approve" | "reject";
  reason?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
};
  _links?: {
  self?: {
  href?: string;
};
  account?: {
  href?: string;
};
  subscription?: {
  href?: string;
};
  auto_provision_filters?: {
  href?: string;
};
  users?: {
  href?: string;
};
  channels?: {
  href?: string;
};
};
};
  "apps-app-id-installations-id-users-get": {
  total?: number;
  page?: number;
  per_page?: number;
  _embedded?: {
  users?: ReadonlyArray<{
  id?: string;
  email?: string;
  name?: string;
  active?: boolean;
  gender?: string;
  extension?: number;
  external_phone_number?: string;
  created_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "apps-app-id-installations-id-state-post": {
  state?: "approve" | "reject";
  reason?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "apps-app-id-installations-id-subscription-get": ({
  type?: "trial" | "paid";
  license_type?: "individual" | "universal";
  name?: string;
  price?: number;
  description?: string;
  listing_summary?: string;
  min_licenses?: number;
  max_licenses?: number;
  created_by?: string;
} & {
  id?: string;
  type?: string;
  name?: string;
  price?: number;
  min_licenses?: number;
  max_licenses?: number;
  total_licenses?: number;
  _links?: {
  self?: {
  href?: string;
};
};
});
  "apps-app-id-installations-id-channels-get": {
  total?: number;
  page?: number;
  per_page?: number;
  _embedded?: {
  users?: ReadonlyArray<{
  type?: "messages";
  updated_at?: string;
  _embedded?: {
  resource?: ReadonlyArray<{
  id?: string;
  type?: "number";
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "apps-app-id-installations-id-channels-post": {
  total?: number;
  page?: number;
  per_page?: number;
  _embedded?: {
  users?: ReadonlyArray<{
  type?: "messages";
  updated_at?: string;
  _embedded?: {
  resource?: ReadonlyArray<{
  id?: string;
  type?: "number";
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "apps-app-id-installations-id-trial-get": {
  state?: string;
  started_at?: string;
  expires_at?: string;
  ended_at?: string;
  ended_reason?: string;
  subscription_name?: string;
  _links?: {
  self?: {
  href?: string;
};
  installation?: {
  href?: string;
};
};
};
  "apps-app-id-installations-id-credentials-actions-rotate-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "apps-app-id-installations-id-credentials-client-id-state-post": {
  state?: {};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "attachments-2023-03-get": {
  total: number;
  page: number;
  per_page: number;
  _embedded?: {
  list?: ReadonlyArray<({
  id: string;
  name: string;
  state: string;
  size?: number;
  type?: string;
  metadata?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  provider?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links?: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
})>;
};
  _links: {
  self?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "attachments-2023-03-post": {
  id: string;
  name: string;
  state: string;
  size?: number;
  type?: string;
  metadata?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  provider?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links?: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
};
  "attachments-2023-03-upload-link-post": {
  request_id: string;
  url: string;
};
  "attachments-2023-03-id-get": {
  id: string;
  name: string;
  state: string;
  size?: number;
  type?: string;
  metadata?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  provider?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links?: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
};
  "attachments-2023-03-id-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "attachments-2023-03-id-download-link-get": {
  url: string;
  expire_time: number;
};
  "GetAllAttributes": {
  total?: number;
  count?: number;
  page?: number;
  per_page?: number;
  _embedded: {
  attributes: ReadonlyArray<{
  id: string;
  name: string;
  active: boolean;
  category_id: string;
  category_name: string;
  proficiency: "none" | "five_stars_scale";
  default_proficiency: number;
  users_count: number;
  flows_count: number;
  team_ids: ReadonlyArray<string>;
  _links: {
  self: {
  href?: string;
};
  attributes: {
  href?: string;
};
};
}>;
};
  _links: {
  self?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
  next?: {
  templated?: boolean;
  href?: string;
};
};
};
  "CreateAttribute": {
  id: string;
  name: string;
  active: boolean;
  category_id: string;
  category_name: string;
  proficiency: "none" | "five_stars_scale";
  default_proficiency: number;
  users_count: number;
  flows_count: number;
  team_ids: ReadonlyArray<string>;
  _links: {
  self: {
  href?: string;
};
  attributes: {
  href?: string;
};
};
};
  "GetAttribute": {
  id: string;
  name: string;
  active: boolean;
  category_id: string;
  category_name: string;
  proficiency: "none" | "five_stars_scale";
  default_proficiency: number;
  users_count: number;
  flows_count: number;
  team_ids: ReadonlyArray<string>;
  _links: {
  self: {
  href?: string;
};
  attributes: {
  href?: string;
};
};
};
  "UpdateAttribute": {
  id: string;
  name: string;
  active: boolean;
  category_id: string;
  category_name: string;
  proficiency: "none" | "five_stars_scale";
  default_proficiency: number;
  users_count: number;
  flows_count: number;
  team_ids: ReadonlyArray<string>;
  _links: {
  self: {
  href?: string;
};
  attributes: {
  href?: string;
};
};
};
  "GetAllAttributeUsers": {
  total?: number;
  count?: number;
  page?: number;
  per_page?: number;
  _embedded: {
  attribute_users: ReadonlyArray<{
  id: string;
  name: string;
  team: string;
  proficiency: number;
  _links: {
  attribute: {
  href?: string;
};
};
}>;
};
  _links: {
  self?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
  next?: {
  templated?: boolean;
  href?: string;
};
};
};
  "CreateAttributeUsers": {
  attributes_users?: ReadonlyArray<{
  id: string;
  proficiency: number;
  _links?: {
  attribute: {
  href?: string;
};
};
}>;
};
  "DeleteAttributeUsers": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "GetAllAttributesCategories": {
  total?: number;
  count?: number;
  page?: number;
  per_page?: number;
  _embedded: {
  categories: ReadonlyArray<{
  id: string;
  name: string;
  attribute_count: number;
  _links: {
  self: {
  href?: string;
};
  categories: {
  href?: string;
};
};
}>;
};
  _links: {
  self?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
  next?: {
  templated?: boolean;
  href?: string;
};
};
};
  "CreateAttributeCategory": {
  id: string;
  name: string;
  attribute_count: number;
  _links: {
  self: {
  href?: string;
};
  categories: {
  href?: string;
};
};
};
  "DeleteAttributeCategory": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "PatchAttributeCategory": {
  id: string;
  name: string;
  attribute_count: number;
  _links: {
  self: {
  href?: string;
};
  categories: {
  href?: string;
};
};
};
  "bulk-imports-users-get": {
  count?: number;
  total?: number;
  page?: number;
  per_page?: number;
  _embedded: {
  imports: ReadonlyArray<{
  id?: string;
  filename?: string;
  total_records?: number;
  failed_records?: number;
  completed_records?: number;
  status?: "QUEUED" | "IN_PROGRESS" | "CANCELED" | "FAILED" | "SUCCESSFUL" | "COMPLETED_WITH_ERRORS";
  type?: "CREATE_USERS" | "UPDATE_USERS" | "DELETE_USERS" | "EXPORT_USERS";
  created_by?: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
  canceled_by?: string;
  canceled_at?: string;
  export_criteria?: {
  mode?: "ALL" | "FILTER" | "USER_IDS";
} | null;
  _links: {
  self: {
  href: string;
};
  records?: {
  href: string;
};
};
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
};
};
  "bulk-imports-users-post": {
  id: string;
  filename: string;
  total_records: number;
  failed_records: number;
  completed_records: number;
  updated_by?: string;
  updated_at: string;
  canceled_by?: string | null;
  canceled_at?: string | null;
  status: "QUEUED" | "IN_PROGRESS" | "CANCELED" | "FAILED" | "SUCCESSFUL" | "COMPLETED_WITH_ERRORS";
  type: "CREATE_USERS" | "UPDATE_USERS" | "DELETE_USERS" | "EXPORT_USERS";
  created_by: string;
  created_at: string;
  export_criteria?: {
  mode?: "ALL" | "FILTER" | "USER_IDS";
} | null;
  _links: {
  self: {
  href: string;
};
  records?: {
  href: string;
};
};
};
  "bulk-imports-users-import-id-get": {
  id?: string;
  filename?: string;
  total_records?: number;
  failed_records?: number;
  completed_records?: number;
  status?: "QUEUED" | "IN_PROGRESS" | "CANCELED" | "FAILED" | "SUCCESSFUL" | "COMPLETED_WITH_ERRORS";
  type?: "CREATE_USERS" | "UPDATE_USERS" | "DELETE_USERS" | "EXPORT_USERS";
  created_by?: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
  canceled_by?: string;
  canceled_at?: string;
  export_criteria?: {
  mode?: "ALL" | "FILTER" | "USER_IDS";
} | null;
  _links?: {
  self?: {
  href: string;
};
  records?: {
  href: string;
};
};
};
  "bulk-imports-users-import-id-patch": {
  id?: string;
  filename?: string;
  total_records?: number;
  failed_records?: number;
  completed_records?: number;
  status?: "QUEUED" | "IN_PROGRESS" | "CANCELED" | "FAILED" | "SUCCESSFUL" | "COMPLETED_WITH_ERRORS";
  type?: "CREATE_USERS" | "UPDATE_USERS" | "DELETE_USERS" | "EXPORT_USERS";
  created_by?: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
  canceled_by?: string;
  canceled_at?: string;
  export_criteria?: {
  mode?: "ALL" | "FILTER" | "USER_IDS";
} | null;
  _links?: {
  self?: {
  href: string;
};
  records?: {
  href: string;
};
};
};
  "bulk-imports-users-import-id-errors-get": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "bulk-imports-users-import-id-outputs-get": {
  outputs: ReadonlyArray<{
  url: string;
  metadata: {
  type: "EXPORT";
  expires_at: string;
};
}>;
};
  "ring-groups-get": {
  total?: number;
  page?: number;
  per_page?: number;
  count?: number;
  _embedded?: {
  ring_groups?: ReadonlyArray<{
  name: string;
  short_abandoned_threshold?: number;
  wait_time_threshold?: number;
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
  previous?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
};
};
  "ring-groups-id-users-get": {
  total?: number;
  page?: number;
  per_page?: number;
  count?: number;
  ring_group?: string;
  _embedded?: {
  users?: ReadonlyArray<{
  id: string;
  _links: {
  self?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
  previous?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
};
};
  "AssignUserRingGroups": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "UnassignUserRingGroups": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "UpdateUserRingGroups": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "calls-call-id-recordings-get": {
  total?: number;
  count?: number;
  page?: number;
  per_page?: number;
  _embedded?: {
  recordings?: ReadonlyArray<{
  id?: string;
  call_id?: string;
  created_at?: string;
  index?: number;
  duration?: number;
  type?: "conversation" | "voicemail" | "agent" | "consultation";
  agents?: {
  channel_1?: ReadonlyArray<{
  participant_type?: "AGENT" | "CONTACT" | "EXTERNAL_NUM";
  participant_id?: string;
}>;
  channel_2?: ReadonlyArray<{
  participant_type?: "AGENT" | "CONTACT" | "EXTERNAL_NUM";
  participant_id?: string;
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  media?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "calls-callback-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "list-contacts": {
  total: number;
  _embedded: {
  contacts?: ReadonlyArray<{
  id: string;
  name: string;
  company: string;
  emails?: ReadonlyArray<{
  label?: string;
  number?: string;
}>;
  phones?: ReadonlyArray<{
  label?: string;
  number?: string;
}>;
  _links: {
  self?: {
  href?: string;
};
  integrations?: {
  href?: string;
};
};
}>;
};
  count: number;
  _links: {
  self?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "get-contact": {
  contact?: {
  id: string;
  name: string;
  company: string;
  emails?: ReadonlyArray<{
  label?: string;
  number?: string;
}>;
  phones?: ReadonlyArray<{
  label?: string;
  number?: string;
}>;
  _links: {
  self?: {
  href?: string;
};
  integrations?: {
  href?: string;
};
};
};
};
  "contacts-contact-id-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "contacts-contact-id-integrations-get": {
  _embedded?: {
  integrations?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "contacts-contact-id-custom-fields-get": {
  total: number;
  _embedded: {
  custom_fields?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
};
  count: number;
  _links: {
  self?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "internal-contacts-gdpr-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "conversations-interactions-get": {
  _embedded: {
  interactions: ReadonlyArray<{
  id?: string;
  customer_id: string;
  started_at: string;
  ended_at: string;
  direction: string;
  ring_groups: ReadonlyArray<string>;
  queues?: ReadonlyArray<string>;
  messages: ReadonlyArray<{
  message_id: string;
  text: string;
  channel: string;
  participant: string;
  sentiment: string;
  intent?: string;
  intent_confidence_score?: number;
  intent_is_fallback?: boolean;
  start_time: number;
  end_time: number;
  transcription_type?: string;
  source_system: string;
  recording_id?: string;
  recording_index?: number;
  message_index?: number;
  message_start_at?: string;
  agent_id?: string;
}>;
  agents: ReadonlyArray<{
  id: string;
}>;
}>;
};
  _links: {
  next?: {
  href: string;
};
};
};
  "do-not-call-lists-id-entries-id-entry-get": {
  id?: string;
  do_not_call_list_id?: string;
  phone_number?: string;
  reason?: string;
  expiration_date?: string;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "do-not-call-lists-id-entries-id-entry-patch": {
  id?: string;
  do_not_call_list_id?: string;
  phone_number?: string;
  reason?: string;
  expiration_date?: string;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "do-not-call-lists-id-entries-id-entry-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "do-not-call-lists-id-entries-get": {
  per_page?: number;
  total?: number;
  count?: number;
  page?: number;
  total_pages?: number;
  _links?: {
  href?: string;
};
  _embedded?: {
  entries?: ReadonlyArray<{
  id?: string;
  do_not_call_list_id?: string;
  phone_number?: string;
  reason?: string;
  expiration_date?: string;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
};
  "do-not-call-lists-id-entries-post": {
  id?: string;
  do_not_call_list_id?: string;
  phone_number?: string;
  reason?: string;
  expiration_date?: string;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "do-not-call-lists-id-entries-patch": {
  do_not_call_list_id?: string;
  has_errors?: boolean;
  total_errors?: number;
  total_updated?: number;
  _links?: {
  self?: {
  href?: string;
};
  do_not_call_list?: {
  href?: string;
};
};
  _embedded?: {
  entries?: ReadonlyArray<{
  id?: string;
  do_not_call_list_id?: string;
  phone_number?: string;
  reason?: string;
  expiration_date?: string;
  created_at?: string;
  updated_at?: string;
  errors?: ReadonlyArray<"EXPIRATION_DATE_INVALID" | "ENTRY_NOT_FOUND">;
  un_allowed_patch?: {
  op?: string;
  path?: string;
  value?: string;
};
  _links?: {
  self?: {
  href?: string;
};
  do_not_call_list?: {
  href?: string;
};
};
}>;
};
};
  "do-not-call-lists-id-entries-delete": {
  id: string;
  has_errors: boolean;
  total_errors: number;
  total_deleted: number;
  _links?: {
  self: {
  href: string;
};
  do_not_call_list?: {
  href: string;
};
};
  _embedded?: {
  failed_records: ReadonlyArray<{
  id: string;
  _links?: {
  self: {
  href: string;
};
};
}>;
};
};
  "events-signature-keys-key-id-get": {
  public_key: string;
  key_id: string;
  created_at: string;
  expires_at?: string;
};
  "external-credentials-get-certificates": {
  keys: ReadonlyArray<{
  kty: string;
  use: string;
  kid: string;
  alg: string;
  n?: string;
  e?: string;
  tag?: string;
}>;
};
  "external-credentials-options-certificates": void;
  "fallback-experience-get": {
  enabled: boolean;
};
  "fallback-experience-put": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getFallbackExperienceSettings": {
  forward?: {};
  message?: {};
};
  "putFallbackExperienceSettings": {
  forward?: {};
  message?: {};
};
  "flows-flow-id-interactions-post": {
  interaction_id: string;
  flow_version_id: string;
  flow_execution_id: string;
};
  "flows-platform-flows-flow-id-trigger-post": {
  execution_id: string;
  workflow_execution_id: string;
};
  "LogsResource_getSessionsOdata": {
  _embedded: ReadonlyArray<{
  browser_full?: string;
  country: string;
  ip_address?: string;
  latitude?: number;
  login_timestamp: string;
  logout_timestamp: string;
  longitude?: number;
  os_full?: string;
  id: string;
  sso?: string;
  user_id: string;
  support_access?: boolean;
}>;
  _links: {
  first: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  last: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  next: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  prev: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  self: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  show?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  count: number;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};
  "AgentsResource_getAllAgentsOdata": {
  _embedded?: ReadonlyArray<{
  creation_time?: string;
  email?: string;
  id?: string;
  name?: string;
  presence?: string;
  presence_type?: string;
  ring_groups?: ReadonlyArray<string>;
  risk?: number;
  role?: string;
  status?: ("ACTIVE" | "INACTIVE" | "PENDING" & TalkdeskFullApiSchemaJsonValue);
  call_quality?: {
  avg_affected_calls?: boolean;
  mos?: {
  avg?: number;
};
};
}>;
  _links?: {
  first?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  last?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  next?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  prev?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  self?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  show?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
};
  "AgentsResource_getAgent": {
  _links?: {
  self?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  creation_time?: string;
  email?: string;
  id?: string;
  name?: string;
  presence?: string;
  presence_type?: string;
  ring_groups?: ReadonlyArray<string>;
  risk?: number;
  role?: string;
  status?: ("ACTIVE" | "INACTIVE" | "PENDING" & TalkdeskFullApiSchemaJsonValue);
  call_quality?: {
  avg_affected_calls?: boolean;
  mos?: {
  avg?: number;
};
};
};
  "getAgentRoles": {
  _embedded?: ReadonlyArray<{
  assigned_at?: string;
  assigned_by?: string;
  role?: string;
  id?: string;
}>;
  _links?: {
  first?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  last?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  next?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  prev?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  self?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  show?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
};
  "CasesResource_getCasesOdata": {
  _embedded: ReadonlyArray<{
  baseline: number;
  case: string;
  event_id: string;
  hits: ReadonlyArray<string>;
  hits_number: number;
  id: string;
  ingest_timestamp: string;
  pop_baseline: ReadonlyArray<string>;
  pop_conf: number;
  pop_prob: number;
  source: ("DATABRICKS" | "ELASTICSEARCH" & TalkdeskFullApiSchemaJsonValue);
  specification: string;
  user_baseline: ReadonlyArray<string>;
  user_conf: number;
  user_id: string;
  user_prob: number;
}>;
  _links: {
  first: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  last: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  next?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  prev?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  self: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  show: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  count: number;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};
  "UsersResource_getAllUsersOdata": {
  _embedded?: ReadonlyArray<{
  creation_time?: string;
  email?: string;
  id?: string;
  name?: string;
  presence?: string;
  presence_type?: string;
  ring_groups?: ReadonlyArray<string>;
  risk?: number;
  role?: string;
  status?: ("ACTIVE" | "INACTIVE" | "PENDING" & TalkdeskFullApiSchemaJsonValue);
  call_quality?: {
  avg_affected_calls?: boolean;
  mos?: {
  avg?: number;
};
};
}>;
  _links?: {
  first?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  last?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  next?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  prev?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  self?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  show?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
};
  "UsersResource_getUsers": {
  _links?: {
  self?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  creation_time?: string;
  email?: string;
  id?: string;
  name?: string;
  presence?: string;
  presence_type?: string;
  ring_groups?: ReadonlyArray<string>;
  risk?: number;
  role?: string;
  status?: ("ACTIVE" | "INACTIVE" | "PENDING" & TalkdeskFullApiSchemaJsonValue);
  call_quality?: {
  avg_affected_calls?: boolean;
  mos?: {
  avg?: number;
};
};
};
  "UsersResource_getUserRoles": {
  _embedded?: ReadonlyArray<{
  assigned_at?: string;
  assigned_by?: string;
  role?: string;
  id?: string;
}>;
  _links?: {
  first?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  last?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  next?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  prev?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  self?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
  show?: ({
  href?: string;
} & TalkdeskFullApiSchemaJsonValue);
};
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
};
  "CallsResource_getCallQualityOdata": {
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  _embedded?: ReadonlyArray<{
  call_id?: string;
  interaction_id?: string;
  affected_call?: boolean;
  jitter?: {
  avg?: number;
  max?: number;
};
  mos?: {
  avg?: number;
  max?: number;
  min?: number;
};
  rtt?: {
  avg?: number;
  max?: number;
  min?: number;
};
  packets_loss_percentage?: number;
  timestamp?: string;
  user_id?: string;
}>;
  _links?: {
  first?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  last?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  next?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  prev?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  self?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
  show?: ({
  href: string;
} & TalkdeskFullApiSchemaJsonValue);
};
};
  "getActivities": {
  count: number;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  _embedded: ReadonlyArray<{
  id: number;
  name?: string;
  contacts_api_id?: string;
  contact_id: string;
  interaction_id?: string;
  timestamp: string;
  phone_status?: "HIGH_RISK" | "SAFE" | "SUSPICIOUS" | "ERROR";
  phone_message?: string;
  phone_success?: boolean;
  phone_formatted?: string;
  phone_local_format?: string;
  phone_valid?: boolean;
  phone_risk_score?: number;
  phone_recent_abuse?: boolean;
  phone_voip?: boolean;
  phone_prepaid?: boolean;
  phone_risky?: boolean;
  phone_active?: boolean;
  phone_carrier?: string;
  phone_line_type?: string;
  phone_country?: string;
  phone_region?: string;
  phone_dialing_code?: number;
  phone_request_id?: string;
  phone_call_attestation_type?: string;
  phone_call_attestation_valid?: boolean;
  voice_operation?: "VERIFY" | "DELETE" | "ENROLL" | "CONSENT";
  voice_risk_score?: number;
  voice_result?: {
  result: "SUCCESS" | "FAILURE" | "ALLOWED" | "NOT_ALLOWED" | "REFUSED";
  error_details?: {
  error_code: string;
  error_message: string;
};
};
  overall_risk_score?: number;
  is_deleted?: boolean;
  phone_number?: string;
  voice_type?: "ACTIVE" | "PASSIVE";
}>;
  _links: {
  first: {
  href: string;
};
  last: {
  href: string;
};
  next: {
  href: string;
};
  prev: {
  href: string;
};
  self: {
  href: string;
};
  show: {
  href: string;
};
};
};
  "getEmailValidation": {
  _embedded: {
  id: string;
  status: "HIGH_RISK" | "SAFE" | "SUSPICIOUS" | "ERROR";
  valid: boolean;
  fraud_score: number;
  disposable?: boolean;
  deliverability?: string;
  catch_all?: boolean;
  leaked?: boolean;
  suspect?: boolean;
  smtp_score?: number;
  overall_score?: number;
  first_name?: string;
  common?: boolean;
  generic?: boolean;
  dns_valid?: boolean;
  honeypot?: boolean;
  spam_trap_score?: string;
  recent_abuse?: boolean;
  frequent_complainer?: boolean;
  suggested_domain?: string;
  domain_velocity?: string;
  domain_trust?: string;
  risky_tld?: boolean;
  spf_record?: boolean;
  dmarc_record?: boolean;
  sanitized_email?: string;
  timed_out?: boolean;
  mx_records?: ReadonlyArray<string>;
  a_records?: ReadonlyArray<string>;
  first_seen?: {
  human?: string | null;
  timestamp: number;
  iso?: string;
};
  domain_age?: {
  human?: string | null;
  timestamp: number;
  iso?: string;
};
};
  _links: {
  self: {
  href: string;
};
};
};
  "getPhoneValidation": {
  _embedded?: {
  active?: string;
  carrier?: string;
  country?: string;
  name?: string;
  city?: string;
  region?: string;
  zip_code?: string;
  timezone?: string;
  do_not_call?: string;
  fraud_score?: number;
  id?: string;
  leaked?: string;
  line_type?: string;
  prepaid?: string;
  recent_abuse?: string;
  risky?: string;
  spammer?: string;
  tcpa_blacklist?: string;
  status?: "HIGH_RISK" | "SAFE" | "SUSPICIOUS" | "ERROR";
  valid?: boolean;
  voip?: string;
};
  _links?: {
  self?: {
  href: string;
};
};
};
  "getPhoneValidationStats": {
  _embedded?: {
  phone_number?: string;
  number_validations_last_24h?: number;
};
  _links?: {
  self?: {
  href: string;
};
};
};
  "interactions-interaction-id-actions-start-recording-post": {
  code?: string;
  message?: string;
};
  "interactions-interaction-id-actions-pause-recording-post": {
  code?: string;
  message?: string;
};
  "interactions-interaction-id-announcement-post": {
  code?: string;
  message?: string;
};
  "messages-post": ({
  talkdesk_phone_number?: string;
  contact_phone_number?: string;
  body: string;
} & {
  id?: string;
  _links?: {
  self?: {
  href?: string;
};
};
});
  "getAccountNumbers": {
  id: string;
  phone_number: string;
  friendly_name: string;
  dedicated_line: boolean;
  sip?: boolean;
  capabilities?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  _links?: {
  self?: {
  href?: string;
};
  interaction_triggers?: {
  href?: string;
};
};
};
  "getNumberDetail": {
  id: string;
  phone_number: string;
  friendly_name: string;
  dedicated_line: boolean;
  sip?: boolean;
  capabilities?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  _links?: {
  self?: {
  href?: string;
};
  interaction_triggers?: {
  href?: string;
};
};
};
  "oauth-token-post": {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  refresh_token?: string;
  sid?: string;
  id_token?: string;
};
  "oauth-authorize-get": {
  header: string;
  error: string;
  error_description: string;
};
  "oauth-introspect-post": {
  kid: string;
  sig: string;
  token_introspection: {
  active: boolean;
  iss?: string;
  aud?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  cid?: string;
  aid?: string;
  scp?: string;
  reg?: string;
  psn?: "INTERNAL" | "CUSTOMER" | "PARTNER" | "INTERNAL_RESTRICTED";
};
};
  "getPublicServerJwkSet": {
  keys: ReadonlyArray<{
  kty: string;
  use?: string;
  kid?: string;
  alg?: string;
  crv?: string;
  x?: string;
  y?: string;
  n?: string;
  e?: string;
  x5c?: ReadonlyArray<string>;
  x5t?: string;
}>;
};
  "oauth-2023-10-certs-get": {
  keys: ReadonlyArray<{
  kty: string;
  use?: string;
  kid?: string;
  alg?: string;
  crv?: string;
  x?: string;
  y?: string;
  n?: string;
  e?: string;
  x5c?: ReadonlyArray<string>;
  x5t?: string;
}>;
};
  "oauth-end-user-session-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "record-lists-get": {
  total: number;
  per_page: number;
  count?: number;
  page: number;
  total_pages?: number;
  _links: {
  next: {
  href: string;
};
  last: {
  href: string;
};
  prev: {
  href: string;
};
  self: {
  href: string;
};
  first: {
  href: string;
};
};
  _embedded?: {
  record_lists: ReadonlyArray<{
  id?: string;
  name?: string;
  unique_identifier_type?: string;
  created_at?: string;
  updated_at?: string;
  status?: "REJECTED" | "VALIDATION_STARTED" | "UPLOADED" | "ACCEPTED" | "INCOMPLETE" | "CORRUPTED";
  records_count?: number;
  teams?: ReadonlyArray<{
  id?: string;
  name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
  campaign_page?: {
  total: number;
  per_page: number;
  count?: number;
  page: number;
  total_pages?: number;
  _embedded?: {
  campaigns: ReadonlyArray<{
  id?: string;
  campaign_name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links: {
  next: {
  href: string;
};
  last: {
  href: string;
};
  prev: {
  href: string;
};
  self: {
  href: string;
};
  first: {
  href: string;
};
};
};
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
};
  "record-lists-post": {
  id?: string;
  name?: string;
  unique_identifier_type?: string;
  status?: string;
  signed_url?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "record-lists-id-get": {
  id?: string;
  name?: string;
  unique_identifier_type?: string;
  created_at?: string;
  updated_at?: string;
  status?: "REJECTED" | "VALIDATION_STARTED" | "UPLOADED" | "ACCEPTED" | "INCOMPLETE" | "CORRUPTED";
  records_count?: number;
  teams?: ReadonlyArray<{
  id?: string;
  name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
  campaign_page?: {
  total: number;
  per_page: number;
  count?: number;
  page: number;
  total_pages?: number;
  _embedded?: {
  campaigns: ReadonlyArray<{
  id?: string;
  campaign_name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links: {
  next: {
  href: string;
};
  last: {
  href: string;
};
  prev: {
  href: string;
};
  self: {
  href: string;
};
  first: {
  href: string;
};
};
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "record-lists-id-patch": {
  id?: string;
  name?: string;
  unique_identifier_type?: string;
  created_at?: string;
  records_count?: number;
  account_id?: string;
  status?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "record-lists-id-records-id-record-get": {
  id?: string;
  record_list_id?: string;
  phone_number?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name?: string;
  last_name?: string;
  timezone?: string;
  priority?: number;
  extra_data?: {};
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "record-lists-id-records-id-record-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "record-lists-id-records-id-record-patch": {
  id?: string;
  record_list_id?: string;
  phone_number?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name?: string;
  last_name?: string;
  timezone?: string;
  priority?: number;
  extra_data?: {};
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "record-lists-id-records-get": {
  per_page: number;
  count?: number;
  page: number;
  total_pages?: number;
  _links: {
  next?: {
  href: string;
};
  last: {
  href: string;
};
  prev?: {
  href: string;
};
  self: {
  href: string;
};
  first: {
  href: string;
};
};
  _embedded?: {
  records?: ReadonlyArray<{
  id?: string;
  record_list_id?: string;
  phone_number?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name?: string;
  last_name?: string;
  timezone?: string;
  priority?: number;
  extra_data?: {};
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
};
  "record-lists-id-records-post": {
  id?: string;
  record_list_id?: string;
  phone_number?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name?: string;
  last_name?: string;
  timezone?: string;
  priority?: number;
  extra_data?: {};
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "record-lists-id-records-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "record-lists-id-records-timezones-get": {
  per_page: number;
  count?: number;
  page: number;
  total_pages?: number;
  _links: {
  next?: {
  href: string;
};
  last: {
  href: string;
};
  prev?: {
  href: string;
};
  self: {
  href: string;
};
  first: {
  href: string;
};
};
  _embedded?: {
  timezones?: ReadonlyArray<string>;
};
};
  "record-lists-id-external-records-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "record-lists-id-records-bulks-post": {
  record_list_id?: string;
  has_errors?: boolean;
  total_errors?: number;
  total_created?: number;
  _links?: {
  self: {
  href: string;
};
  record_list: {
  href: string;
};
};
  _embedded?: {
  records?: ReadonlyArray<{
  id?: string;
  record_list_id?: string;
  phone_number?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name?: string;
  last_name?: string;
  timezone?: string;
  priority?: number;
  extra_data?: {};
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  errors?: ReadonlyArray<"PHONE_NUMBER_INVALID" | "PHONE_NUMBER_MISSING" | "PHONE_NUMBER_NOT_UNIQUE" | "FIRST_NAME_INVALID" | "FIRST_NAME_MISSING" | "LAST_NAME_INVALID" | "LAST_NAME_MISSING" | "TIMEZONE_INVALID" | "TIMEZONE_MISSING" | "TIMEZONE_UNMATCHED" | "PRIORITY_INVALID" | "EXTERNAL_REF_MISSING" | "REQUIRED_FIELDS" | "OTHER">;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
  record_list?: {
  href?: string;
};
};
}>;
};
};
  "record-lists-id-records-bulks-patch": {
  record_list_id?: string;
  has_errors?: boolean;
  total_errors?: number;
  total_created?: number;
  _links?: {
  self: {
  href: string;
};
  record_list: {
  href: string;
};
};
  _embedded?: {
  records?: ReadonlyArray<{
  id?: string;
  record_list_id?: string;
  phone_number?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  phone_type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
}>;
  first_name?: string;
  last_name?: string;
  timezone?: string;
  priority?: number;
  extra_data?: {};
  external_provider?: string;
  external_id?: string;
  external_url?: string;
  sync_external_id?: boolean;
  errors?: ReadonlyArray<"PHONE_NUMBER_INVALID" | "PHONE_NUMBER_MISSING" | "PHONE_NUMBER_NOT_UNIQUE" | "FIRST_NAME_INVALID" | "FIRST_NAME_MISSING" | "LAST_NAME_INVALID" | "LAST_NAME_MISSING" | "TIMEZONE_INVALID" | "TIMEZONE_MISSING" | "TIMEZONE_UNMATCHED" | "PRIORITY_INVALID" | "EXTERNAL_REF_MISSING" | "REQUIRED_FIELDS" | "OTHER">;
  created_at?: string;
  updated_at?: string;
  _links?: {
  self?: {
  href?: string;
};
  record_list?: {
  href?: string;
};
};
}>;
};
};
  "record-lists-id-records-bulks-delete": {
  record_list_id?: string;
  has_errors?: boolean;
  total_errors?: number;
  total_deleted?: number;
  _links?: {
  self?: {
  href?: string;
};
  record_list?: {
  href?: string;
};
};
  _embedded?: {
  failed_records?: ReadonlyArray<{
  id?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
};
  "record-lists-id-upload-requests-post": {
  id?: string;
  record_list_id?: string;
  signed_url?: string;
  status?: string;
  _links?: {
  self?: {
  href?: string;
};
  record_list?: {
  href?: string;
};
  upload?: {
  href?: string;
};
};
};
  "record-lists-id-upload-requests-id-upload-request-patch": {
  id?: string;
  record_list_id?: string;
  status?: string;
  _links?: {
  self?: {
  href?: string;
};
  record_list?: {
  href?: string;
};
};
};
  "do-not-call-lists-post": {
  id?: string;
  name?: string;
  status?: string;
  signed_url?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "do-not-call-lists-get": {
  per_page: number;
  total?: number;
  count?: number;
  page: number;
  total_pages?: number;
  _links?: {
  next: {
  href?: string;
};
  last: {
  href?: string;
};
  prev: {
  href?: string;
};
  self: {
  href?: string;
};
  first: {
  href?: string;
};
};
  _embedded?: {
  do_not_call_lists?: ReadonlyArray<{
  id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  status?: "REJECTED" | "VALIDATION_STARTED" | "UPLOADED" | "ACCEPTED" | "INCOMPLETE" | "CORRUPTED";
  entries_count?: number;
  teams?: ReadonlyArray<{
  id?: string;
  name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
  campaign_page?: {
  total: number;
  per_page: number;
  count?: number;
  page: number;
  total_pages?: number;
  _embedded?: {
  campaigns: ReadonlyArray<{
  id?: string;
  campaign_name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links: {
  next: {
  href?: string;
};
  last: {
  href?: string;
};
  prev: {
  href?: string;
};
  self: {
  href?: string;
};
  first: {
  href?: string;
};
};
};
  account_id?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
};
  "do-not-call-lists-id-get": {
  id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  status?: "REJECTED" | "VALIDATION_STARTED" | "UPLOADED" | "ACCEPTED" | "INCOMPLETE" | "CORRUPTED";
  entries_count?: number;
  teams?: ReadonlyArray<{
  id?: string;
  name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
  campaign_page?: {
  total: number;
  per_page: number;
  count?: number;
  page: number;
  total_pages?: number;
  _embedded?: {
  campaigns: ReadonlyArray<{
  id?: string;
  campaign_name?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links: {
  next: {
  href?: string;
};
  last: {
  href?: string;
};
  prev: {
  href?: string;
};
  self: {
  href?: string;
};
  first: {
  href?: string;
};
};
};
  account_id?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "interactions-interaction-id-recordings-recording-id-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "recordings-id-get": {
  recording?: {
  id?: string;
  call_id?: string;
  created_at?: string;
  index?: number;
  duration?: number;
  type?: "conversation" | "voicemail" | "agent" | "consultation";
  agents?: {
  channel_1?: ReadonlyArray<{
  participant_type?: "AGENT" | "CONTACT" | "EXTERNAL_NUM";
  participant_id?: string;
}>;
  channel_2?: ReadonlyArray<{
  participant_type?: "AGENT" | "CONTACT" | "EXTERNAL_NUM";
  participant_id?: string;
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  media?: {
  href?: string;
};
};
};
  _links?: {
  self?: {
  href?: string;
};
  media?: {
  href?: string;
};
};
};
  "recordings-id-media-get": {
  _links?: {
  self?: {
  href?: string;
};
  file?: {
  href?: string;
};
};
};
  "getReportJobs": {
  total?: number;
  page?: number;
  per_page?: number;
  _embdedded?: {
  jobs?: ReadonlyArray<{
  id?: string;
  name?: string;
  status?: "created" | "processing" | "uploading" | "done" | "failed" | "canceled" | "deleted";
  timespan?: {
  from?: string;
  to?: string;
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "createReportJob": {
  job?: {
  id?: string;
  name?: string;
  status?: "created" | "processing" | "uploading" | "done" | "failed" | "canceled" | "deleted";
  timespan?: {
  from?: string;
  to?: string;
};
};
  _links?: {
  self?: {
  href?: string;
};
  report?: {
  href?: string;
};
};
};
  "getReportJobDetail": {
  job?: {
  id?: string;
  name?: string;
  status?: "created" | "processing" | "uploading" | "done" | "failed" | "canceled" | "deleted";
  timespan?: {
  from?: string;
  to?: string;
};
};
  _links?: {
  self?: {
  href?: string;
};
  report?: {
  href?: string;
};
};
};
  "deleteReportJob": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getReportJobResult": {
  total?: number;
  type?: string;
};
  "deleteReportFile": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "live-subscriptions-post-2": {
  id: string;
  _links?: {
  stream?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
  entries?: {
  params?: {};
  metadata?: {};
  query_id?: string;
  id: string;
  filters?: {};
  _links?: {
  self?: {
  href?: string;
};
  query?: {
  href?: string;
};
};
};
};
  "live-subscriptions-subscription-id-get-2": {
  id: string;
  _links?: {
  stream?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
  entries?: {
  params?: {};
  metadata?: {};
  query_id?: string;
  id: string;
  filters?: {};
  _links?: {
  self?: {
  href?: string;
};
  query?: {
  href?: string;
};
};
};
};
  "live-subscriptions-subscription-id-stream-get": string;
  "live-subscriptions-subscription-id-entries-id-put-2": {
  id?: string;
  _links?: {
  query?: {
  href?: string;
};
  self?: {
  href?: string;
};
  subscription?: {
  href?: string;
};
};
  query_id?: string;
  filters?: {};
  metadata?: {};
  params?: {};
};
  "live-queries-get-2": {
  total?: number;
  per_page?: number;
  page?: number;
  count?: number;
  _links?: {
  self?: {
  href?: string;
};
};
  _embedded?: {
  queries?: {
  params: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  name: string;
  id: string;
  filters?: ReadonlyArray<{
  name?: string;
  json_map?: boolean;
  type?: string;
  default?: string;
}>;
  _links?: {
  self?: {
  href?: string;
};
};
};
};
};
  "users-get": {
  count?: number;
  total?: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded?: {
  users?: ReadonlyArray<{
  id?: string;
  email?: string;
  name?: string;
  active?: boolean;
  gender?: string;
  extension?: number;
  external_phone_number?: string;
  created_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  show?: {
  templated?: boolean;
  href?: string;
};
  index?: {
  templated?: boolean;
  href?: string;
};
};
};
  "get-user": {
  id?: string;
  email?: string;
  name?: string;
  active?: boolean;
  gender?: string;
  extension?: number;
  external_phone_number?: string;
  created_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "GetUserAttributes": {
  total?: number;
  count?: number;
  page?: number;
  per_page?: number;
  _embedded: {
  attributes: ReadonlyArray<{
  id: string;
  name: string;
  active: boolean;
  proficiency?: "five_stars_scale" | "none";
  user_proficiency: number;
  _links: {
  self: {
  href?: string;
};
  attributes: {
  href?: string;
};
};
}>;
};
  _links: {
  self?: {
  href?: string;
};
  page?: {
  templated?: boolean;
  href?: string;
};
  next?: {
  templated?: boolean;
  href?: string;
};
};
};
  "users-id-presence-get": {
  id: string;
  account_id: string;
  user_id: string;
  status: "available" | "away" | "offline" | "hidden";
  custom_status: string;
  custom_status_id: string;
  occupancy: number;
  channels: ReadonlyArray<{
  name: string;
  devices: ReadonlyArray<string>;
  occupancy: number;
}>;
  devices: ReadonlyArray<{
  id: string;
}>;
  interactions: ReadonlyArray<{
  id: string;
  channel_name: string;
  device_id?: string;
  cost: number;
}>;
  updated_by: string;
  updated_at: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "users-id-presence-post": {
  url: string;
  password: string;
  username: string;
  client_id: string;
  topic: string;
};
  "users-id-presence-status-put": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "users-id-presence-occupancy-patch": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "users-user-id-integrations-integration-name-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "users-me": {
  id?: string;
  sub: string;
  name: string;
  email: string;
  _links?: {
  self?: {
  href?: TalkdeskFullApiSchemaJsonValue;
};
};
};
  "users-email-recordings-pause-post": {
  code?: string;
  message?: string;
};
  "users-email-recordings-start-post": {
  code?: string;
  message?: string;
};
  "users-id-disposition-settings-patch": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getUsers": {
  schemas: ReadonlyArray<"urn:ietf:params:scim:api:messages:2.0:ListResponse">;
  Resources: ReadonlyArray<{
  schemas?: ReadonlyArray<"urn:ietf:params:scim:schemas:core:2.0:User">;
  id: string;
  active?: boolean;
  externalId?: string;
  meta?: {
  created?: string;
  lastModified?: string;
  resourceType?: string;
  location?: string;
  version?: string;
};
  name: {
  familyName: string;
  givenName: string;
};
  userName: string;
}>;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
};
  "createUsers": {
  schemas?: ReadonlyArray<"urn:ietf:params:scim:schemas:core:2.0:User" | "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User">;
  id: string;
  active?: boolean;
  externalId?: string;
  meta?: {
  created?: string;
  lastModified?: string;
  resourceType?: string;
  location?: string;
  version?: string;
};
  name: {
  familyName: string;
  givenName: string;
};
  userName: string;
  "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User"?: {
  rolesString?: string;
  teamsString?: string;
};
};
  "deleteUser": {
  schemas: ReadonlyArray<"urn:ietf:params:scim:api:messages:2.0:Error">;
  status: string;
  detail: string;
  scimType?: string;
};
  "getUser": {
  schemas?: ReadonlyArray<"urn:ietf:params:scim:schemas:core:2.0:User" | "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User">;
  id: string;
  active?: boolean;
  externalId?: string;
  meta?: {
  created?: string;
  lastModified?: string;
  resourceType?: string;
  location?: string;
  version?: string;
};
  name: {
  familyName: string;
  givenName: string;
};
  userName: string;
  "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User"?: {
  rolesString?: string;
  teamsString?: string;
};
};
  "patchUser": {
  schemas?: ReadonlyArray<"urn:ietf:params:scim:schemas:core:2.0:User" | "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User">;
  id: string;
  active?: boolean;
  externalId?: string;
  meta?: {
  created?: string;
  lastModified?: string;
  resourceType?: string;
  location?: string;
  version?: string;
};
  name: {
  familyName: string;
  givenName: string;
};
  userName: string;
  "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User"?: {
  rolesString?: string;
  teamsString?: string;
};
};
  "updateUser": {
  schemas?: ReadonlyArray<"urn:ietf:params:scim:schemas:core:2.0:User" | "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User">;
  id: string;
  active?: boolean;
  externalId?: string;
  meta?: {
  created?: string;
  lastModified?: string;
  resourceType?: string;
  location?: string;
  version?: string;
};
  name: {
  familyName: string;
  givenName: string;
};
  userName: string;
  "urn:ietf:params:scim:schemas:extension:talkdesk:2.0:User"?: {
  rolesString?: string;
  teamsString?: string;
};
};
  "getServiceProviderConfigs": {
  schemas: ReadonlyArray<string>;
  bulk: {
  supported: boolean;
  maxOperations: number;
  maxPayloadSize: number;
};
  changePassword: {
  supported: boolean;
};
  documentationUri: string;
  etag: {
  supported: boolean;
};
  filter: {
  supported: boolean;
  maxResults: number;
};
  patch: {
  supported: boolean;
};
  sort: {
  supported: boolean;
};
  meta?: {
  resourceType: string;
  location: string;
};
};
  "getResourceTypes": {
  schemas: ReadonlyArray<"urn:ietf:params:scim:api:messages:2.0:ListResponse">;
  Resources: ReadonlyArray<{
  schemas: ReadonlyArray<string>;
  description: string;
  endpoint: string;
  id: string;
  name: string;
  schema: string;
  meta?: {
  resourceType: string;
  location: string;
};
}>;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
};
  "getUserResourceTypes": {
  schemas: ReadonlyArray<string>;
  description: string;
  endpoint: string;
  id: string;
  name: string;
  schema: string;
  meta?: {
  resourceType: string;
  location: string;
};
};
  "getSchemas": {
  schemas: ReadonlyArray<"urn:ietf:params:scim:api:messages:2.0:ListResponse">;
  Resources: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  attributes: ReadonlyArray<{
  name: string;
  type: string;
  multiValued?: boolean;
  description?: string;
  required?: boolean;
  mutability?: string;
  returned?: string;
  uniqueness?: string;
  caseExact?: boolean;
  subAttributes?: ReadonlyArray<{
  name: string;
  type: string;
  multiValued?: boolean;
  description?: string;
  required?: boolean;
  mutability?: string;
  returned?: string;
  uniqueness?: string;
  caseExact?: boolean;
}>;
}>;
  meta?: {
  resourceType: string;
  location: string;
};
}>;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
};
  "getSchema": {
  id: string;
  name: string;
  description?: string;
  attributes: ReadonlyArray<{
  name: string;
  type: string;
  multiValued?: boolean;
  description?: string;
  required?: boolean;
  mutability?: string;
  returned?: string;
  uniqueness?: string;
  caseExact?: boolean;
  subAttributes?: ReadonlyArray<{
  name: string;
  type: string;
  multiValued?: boolean;
  description?: string;
  required?: boolean;
  mutability?: string;
  returned?: string;
  uniqueness?: string;
  caseExact?: boolean;
}>;
}>;
  meta?: {
  resourceType: string;
  location: string;
};
};
  "data-reports-type-jobs-get": {
  total?: number;
  count?: number;
  _embedded?: {
  jobs?: ReadonlyArray<{
  id?: string;
  name?: string;
  timezone?: string;
  status?: "created" | "processing" | "uploading" | "done" | "failed" | "canceled" | "deleted";
  format?: "csv" | "json" | "json_bulk";
  timespan?: {
  from?: string;
  to?: string;
};
  _links?: {
  self?: {
  href?: string;
};
  files?: {
  href?: string;
};
};
}>;
};
  _links?: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
};
};
  "data-reports-type-jobs-post": {
  id?: string;
  name?: string;
  timezone?: string;
  status?: "created" | "processing" | "uploading" | "done" | "failed" | "canceled" | "deleted";
  format?: "csv" | "json" | "json_bulk";
  timespan?: {
  from?: string;
  to?: string;
};
};
  "data-reports-type-jobs-id-get": {
  job?: {
  id?: string;
  name?: string;
  timezone?: string;
  status?: "created" | "processing" | "uploading" | "done" | "failed" | "canceled" | "deleted";
  format?: "csv" | "json" | "json_bulk";
  timespan?: {
  from?: string;
  to?: string;
};
};
  _links?: {
  self?: {
  href?: string;
};
  files?: {
  href?: string;
};
};
};
  "data-reports-type-files-id-get": {
  total?: number;
  type?: string;
};
  "data-reports-type-files-id-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "fsi-contacts-contact-id-accounts-get": {
  _embedded: {
  accounts: ReadonlyArray<{
  id: string;
  description: string;
  account_number?: string;
  currency_code: string;
  iban?: string;
  financial_institution_name?: string;
  swift_code?: string;
  account_name?: string;
  account_type: "DEBIT" | "UNDEFINED" | "SAVINGS" | "CHECKING" | "CERTIFICATE_OF_DEPOSIT" | "STUDENT" | "MORTGAGE_LOAN" | "HOME_EQUITY_LOAN" | "AUTO_LOAN" | "PERSONAL_LOAN" | "BUSINESS_LOAN" | "STUDENT_LOAN" | "RECREATIONAL_VEHICLE_LOAN" | "BOAT_LOAN" | "MOTORCYCLE_LOAN" | "LINE_OF_CREDIT" | "LEASE" | "CREDIT_CARD" | "CREDIT" | "BUSINESS_CREDIT_CARD" | "STUDENT_CREDIT_CARD" | "PERSONAL_CREDIT_CARD" | "OTHER";
  parties: ReadonlyArray<{
  contact_id: string;
  role: "HOLDER" | "AUTHORIZED_PARTY" | "OTHER" | "UNKNOWN" | "JOINT" | "PRIMARY" | "SECONDARY";
  custom_role?: string;
  transfer_permission?: boolean;
}>;
  update_at?: string;
  open_date?: string;
  close_date?: string;
  balance: string;
  available_balance: string;
  status: "ACTIVE" | "INACTIVE" | "OPEN" | "CLOSED" | "CHARGE_OFF" | "FROZEN";
  custom_type?: string;
  custom_status?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  loan_number?: string;
  interest_details?: {
  interest_rate?: string;
  interest_rate_type?: "FIXED" | "VARIABLE" | "ANNUAL_PERCENTAGE" | "PRIME" | "DISCOUNTED" | "SIMPLE" | "COMPOUND";
  last_interest_paid?: string;
  last_interest_paid_date?: string;
  ytd_interest_paid?: string;
  previous_year_interest_paid?: string;
};
  previous_year_taxes_paid?: string;
  last_statement_date?: string;
  credit_limit?: string;
  statement_balance?: string;
  next_closing_date?: string;
  periodic_frequency?: string;
  purchase_apr?: string;
  cash_advance_apr?: string;
  balance_transfer_apr?: string;
  term?: string;
  loan_start_date?: string;
  maturity_date?: string;
  loan_amount?: string;
  property_address?: string;
  automatic_payment?: boolean;
  automatic_payment_date?: string;
  monthly_loan_payment_details?: {
  monthly_loan_payment?: string;
  principal_payment?: string;
  interest_payment?: string;
  monthly_escrow_payment?: string;
  fee?: string;
};
  account_routing_number?: string;
  transfer_authorization?: "INQUIRY" | "TRANSFERS" | "TRANSFERS_AND_WITHDRAWALS";
  transfer_rules?: {
  transfer_in?: boolean;
  transfer_out_own_accounts?: boolean;
  transfer_out_others?: boolean;
  transfer_out_external?: boolean;
  transfer_out_international?: boolean;
  withdrawals_by_check?: boolean;
};
}>;
};
  total: number;
};
  "fsi-contacts-contact-id-accounts-account-id-payoff-post": {
  daily_per_diem?: string;
  payoff_amount: string;
  payoff_amount_details?: {
  principal_payment?: string;
  interest_payment?: string;
  monthly_escrow_payment?: string;
  fee?: string;
};
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-contacts-get": {
  total: number;
  _embedded: {
  contacts: ReadonlyArray<{
  id: string;
  member_id: string;
  name: string;
  contacts: ReadonlyArray<{
  id: string;
  type: "PHONE" | "EMAIL" | "SMS" | "OTHER";
  value: string;
  use: "HOME" | "WORK" | "MOBILE" | "TEMPORARY" | "OLD";
  rank: number;
}>;
  addresses: ReadonlyArray<{
  id: string;
  type: "POSTAL" | "PHYSICAL" | "BOTH";
  street: string;
  city: string;
  district: string;
  state: string;
  postal_code: string;
  country: string;
}>;
  id_document_number?: string;
  id_document_type?: "SOCIAL_SECURITY" | "DRIVERS_LICENSE" | "PASSPORT" | "NATIONAL_ID" | "OTHER";
  birth_date?: string;
  vip_client?: boolean;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  id_documents?: ReadonlyArray<{
  number?: string;
  type: "SOCIAL_SECURITY" | "DRIVERS_LICENSE" | "PASSPORT" | "NATIONAL_ID" | "OTHER";
}>;
  membership_date?: string;
  _links: {
  self: {
  href?: string;
};
};
}>;
  redacted_fields?: ReadonlyArray<string>;
};
};
  "fsi-contacts-contact-id-get": {
  redacted_fields?: ReadonlyArray<string>;
  id: string;
  member_id: string;
  name: string;
  contacts: ReadonlyArray<{
  id: string;
  type: "PHONE" | "EMAIL" | "SMS" | "OTHER";
  value: string;
  use: "HOME" | "WORK" | "MOBILE" | "TEMPORARY" | "OLD";
  rank: number;
}>;
  addresses: ReadonlyArray<{
  id: string;
  type: "POSTAL" | "PHYSICAL" | "BOTH";
  street: string;
  city: string;
  district: string;
  state: string;
  postal_code: string;
  country: string;
}>;
  id_document_number?: string;
  id_document_type?: "SOCIAL_SECURITY" | "DRIVERS_LICENSE" | "PASSPORT" | "NATIONAL_ID" | "OTHER";
  birth_date?: string;
  vip_client?: boolean;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  id_documents?: ReadonlyArray<{
  number?: string;
  type: "SOCIAL_SECURITY" | "DRIVERS_LICENSE" | "PASSPORT" | "NATIONAL_ID" | "OTHER";
}>;
  membership_date?: string;
  _links: {
  self: {
  href?: string;
};
};
};
  "fsi-contacts-contact-id-cards-card-id-get": {
  id: string;
  card_name?: string;
  card_number: string;
  card_type: "DEBIT" | "CREDIT" | "ATM";
  activation_at?: string;
  expiration_at: string;
  inactive_date?: string;
  holder_name: string;
  issuer: string;
  status: "ACTIVE" | "CLOSED" | "INACTIVE" | "BLOCKED" | "LOST" | "STOLEN" | "CANCELED";
  description?: string;
  custom_type?: string;
  custom_status?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  account_id?: string;
  deactivation_note?: string;
  _links: {
  self: {
  href?: string;
};
};
};
  "fsi-contacts-contact-id-cards-card-id-deactivation-post": {
  confirmation_code?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-contacts-contact-id-cards-card-id-activation-post": {
  confirmation_code?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-contacts-contact-id-cards-get": {
  total: number;
  _embedded: {
  cards: ReadonlyArray<{
  id: string;
  card_name?: string;
  card_number: string;
  card_type: "DEBIT" | "CREDIT" | "ATM";
  activation_at?: string;
  expiration_at: string;
  inactive_date?: string;
  holder_name: string;
  issuer: string;
  status: "ACTIVE" | "CLOSED" | "INACTIVE" | "BLOCKED" | "LOST" | "STOLEN" | "CANCELED";
  description?: string;
  custom_type?: string;
  custom_status?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  account_id?: string;
  deactivation_note?: string;
  _links: {
  self: {
  href?: string;
};
};
}>;
};
};
  "fsi-contacts-contact-id-payments-get": {
  total: number;
  _embedded: {
  payments: ReadonlyArray<{
  id: string;
  description: string;
  total_amount_due: string;
  currency: string;
  due_at: string;
  status: "OPEN" | "CLOSED" | "UNDEFINED" | "PENDING" | "PAID" | "PAST_DUE" | "UPCOMING";
  account_id: string;
  minimum_payment_due: string;
  due_fees_amount?: string;
  type: "PERSONAL_LOAN" | "MORTGAGE_LOAN" | "AUTO_LOAN" | "OTHER_LOAN" | "CREDITCARD_BALANCE" | "HOME_EQUITY_LOAN" | "BUSINESS_LOAN" | "STUDENT_LOAN" | "BUSINESS_CREDIT_CARD" | "STUDENT_CREDIT_CARD" | "PERSONAL_CREDIT_CARD" | "CREDIT_CARD";
  custom_type?: string;
  custom_status?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  amount_details?: {
  principal_payment?: string;
  interest_payment?: string;
  monthly_escrow_payment?: string;
  fee?: string;
};
}>;
};
};
  "fsi-transfers-internal-post": {
  transaction_post_date?: string;
  confirmation_code?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-transfers-external-post": {
  transaction_post_date?: string;
  confirmation_code?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-transfers-international-post": {
  transaction_post_date?: string;
  confirmation_code?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-stop-contact-id-payments-post": {
  member_id: string;
  account_id: string;
  stop_check_status_code?: string;
  stop_check_status_desc?: string;
  effective_date?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-travel-notifications-post": {
  itinerary_id: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-checks-contact-id-search-post": {
  account_id?: string;
  check_number?: string;
  check_status: "CLEARED" | "PENDING" | "VOIDED" | "STALE_DATED" | "STOP_PAYMENT" | "RETURNED" | "IN_PROCESS" | "REVERSED" | "OTHER" | "UNKNOWN";
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-contacts-contact-id-cards-card-id-replacecard-post": {
  expected_delivery_date?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-contacts-contact-id-payments-ach-post": {
  confirmation_code?: string;
};
  "fsi-unlock-contact-id-pin-generate-post": {
  tem_pin: string;
  action_status: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-unlock-contact-id-pin-reset-post": {
  reset_status: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-decrypt-encrypt-key-encrypted-content-get": {
  decrypted_content: string;
};
  "fsi-contacts-events-writeback-post": {
  event_id?: string;
  event_name?: string;
  additional_properties?: ReadonlyArray<{
  name?: string;
  value?: string;
}>;
};
  "fsi-contacts-contact-id-cards-card-id-spendlimits-get": {
  id?: string;
  card_id: string;
  reason?: string;
  is_one_day_only?: boolean;
  spend_limit_controls: {
  maximum_authorizations_frequency: string;
  maximum_atm_cash_authorizations_amount?: string;
  maximum_atm_cash_authorizations_count?: number;
  maximum_single_atm_transaction_amount?: string;
  maximum_otc_cash_authorizations_amount?: string;
  maximum_otc_authorizations_count?: number;
  maximum_single_otc_cash_authorization_amount?: string;
  maximum_retail_authorizations_amount?: string;
  maximum_retail_authorizations_count?: number;
  maximum_single_retail_authorization_amount?: string;
};
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "fsi-contacts-contact-id-cards-card-id-spendlimits-put": {
  id?: string;
  card_id: string;
  reason?: string;
  is_one_day_only?: boolean;
  spend_limit_controls: {
  maximum_authorizations_frequency: string;
  maximum_atm_cash_authorizations_amount?: string;
  maximum_atm_cash_authorizations_count?: number;
  maximum_single_atm_transaction_amount?: string;
  maximum_otc_cash_authorizations_amount?: string;
  maximum_otc_authorizations_count?: number;
  maximum_single_otc_cash_authorization_amount?: string;
  maximum_retail_authorizations_amount?: string;
  maximum_retail_authorizations_count?: number;
  maximum_single_retail_authorization_amount?: string;
};
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
};
  "getAccountConfiguration": {
  id: string;
  account_rules: ReadonlyArray<{
  event_type: string;
  rules: ReadonlyArray<{
  id: string;
  name: string;
  action_type: "STUDIO_FLOW_TRIGGER" | "NO_AUTH_HTTP_TRIGGER";
  action_data: ({
  url: string;
  flow_group_id: string;
} | {
  url: string;
});
  trigger_on: "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  trigger_on_offset?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  recurrence?: {
  periodicity: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  stop_on: "FIXED_NUMBER" | "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  stop_date?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  occurrences?: number;
};
  discard_out_of_available_interval: boolean;
  include_conversation_history: boolean;
  escalate_touchpoint_id?: string;
  calendar_preferences?: ReadonlyArray<{
  week_days: ReadonlyArray<"SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY">;
  start_at?: string;
  end_at?: string;
}>;
  topic_ids?: ReadonlyArray<string>;
}>;
}>;
  _links: {
  self?: {
  href: string;
};
};
};
  "deleteAccountConfiguration": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getEventTypes": {
  _embedded: {
  "event-types": ReadonlyArray<{
  id: string;
  name: string;
  updated_at?: string;
}>;
};
  total: number;
};
  "createEventType": {
  id: string;
  name: string;
  updated_at?: string;
};
  "getEventType": {
  id: string;
  name: string;
  updated_at?: string;
};
  "updateEventType": {
  id: string;
  name: string;
  updated_at?: string;
};
  "deleteEventType": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "upsertRule": {
  id: string;
  name: string;
  action_type: "STUDIO_FLOW_TRIGGER" | "NO_AUTH_HTTP_TRIGGER";
  action_data: ({
  url: string;
  flow_group_id: string;
} | {
  url: string;
});
  trigger_on: "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  trigger_on_offset?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  recurrence?: {
  periodicity: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  stop_on: "FIXED_NUMBER" | "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  stop_date?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  occurrences?: number;
};
  discard_out_of_available_interval: boolean;
  include_conversation_history: boolean;
  escalate_touchpoint_id?: string;
  calendar_preferences?: ReadonlyArray<{
  week_days: ReadonlyArray<"SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY">;
  start_at?: string;
  end_at?: string;
}>;
  topic_ids?: ReadonlyArray<string>;
};
  "getRule": {
  id: string;
  name: string;
  action_type: "STUDIO_FLOW_TRIGGER" | "NO_AUTH_HTTP_TRIGGER";
  action_data: ({
  url: string;
  flow_group_id: string;
} | {
  url: string;
});
  trigger_on: "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  trigger_on_offset?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  recurrence?: {
  periodicity: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  stop_on: "FIXED_NUMBER" | "PRIMARY_EVENT_DATE" | "SECONDARY_EVENT_DATE";
  stop_date?: {
  type: "HOUR" | "DAY" | "WEEK";
  value: number;
};
  occurrences?: number;
};
  discard_out_of_available_interval: boolean;
  include_conversation_history: boolean;
  escalate_touchpoint_id?: string;
  calendar_preferences?: ReadonlyArray<{
  week_days: ReadonlyArray<"SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY">;
  start_at?: string;
  end_at?: string;
}>;
  topic_ids?: ReadonlyArray<string>;
  created_date?: string;
  updated_date?: string;
  event_type: {
  id: string;
  name: string;
  updated_at?: string;
};
};
  "deleteRule": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getEvents": {
  _embedded: {
  events: ReadonlyArray<{
  id: string;
  external_id?: string;
  correlation_id?: string;
  publisher_name: string;
  type: string;
  source: string;
  time_zone: string;
  primary_date: string;
  secondary_date?: string;
  contacts: ReadonlyArray<{
  name: string;
  preferred_channel: string;
  channels: ReadonlyArray<{
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
}>;
}>;
  data?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links: {
  self?: {
  href: string;
};
};
}>;
};
  count: number;
  total?: number;
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
};
};
  "addEvent": {
  id: string;
  external_id?: string;
  correlation_id?: string;
  publisher_name: string;
  type: string;
  source: string;
  time_zone: string;
  primary_date: string;
  secondary_date?: string;
  contacts: ReadonlyArray<{
  name: string;
  preferred_channel: string;
  channels: ReadonlyArray<{
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
}>;
}>;
  data?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links: {
  self?: {
  href: string;
};
};
};
  "getEvent": {
  id: string;
  external_id?: string;
  correlation_id?: string;
  publisher_name: string;
  type: string;
  source: string;
  time_zone: string;
  primary_date: string;
  secondary_date?: string;
  contacts: ReadonlyArray<{
  name: string;
  preferred_channel: string;
  channels: ReadonlyArray<{
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
}>;
}>;
  data?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links: {
  self?: {
  href: string;
};
};
};
  "deleteEvent": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "deleteEvents": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getTopics": {
  _embedded: {
  topics: ReadonlyArray<{
  id: string;
  name: string;
  requires_opt_in: boolean;
  _links: {
  self?: {
  href: string;
};
};
}>;
};
  count: number;
  total?: number;
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
};
};
  "addTopic": {
  id: string;
  name: string;
  requires_opt_in: boolean;
  _links: {
  self?: {
  href: string;
};
};
};
  "getTopic": {
  id: string;
  name: string;
  requires_opt_in: boolean;
  _links: {
  self?: {
  href: string;
};
};
};
  "deleteTopic": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getAutomatedNotificationsSubscriptions": {
  _embedded: {
  subscriptions: ReadonlyArray<{
  id: string;
  topic_id: string;
  channel: {
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
};
  opt_in: boolean;
  _links: {
  self: {
  href: string;
};
};
}>;
};
  count: number;
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
};
};
  "upsertSubscription": {
  id: string;
  topic_id: string;
  channel: {
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
};
  opt_in: boolean;
  _links: {
  self?: {
  href: string;
};
};
};
  "automatedNotificationsGetSubscription": {
  id: string;
  topic_id: string;
  channel: {
  type: "EMAIL" | "SMS" | "VOICE";
  uri: string;
};
  opt_in: boolean;
  _links: {
  self?: {
  href: string;
};
};
};
  "checkOptInStatus": {
  opt_in: boolean;
};
  "searchAutomatedNotificationsInteractions": {
  _embedded: {
  interactions: ReadonlyArray<{
  id: string;
  account_id: string;
  an_event_id: string;
  rule_id: string;
  external_id: string;
  external_type_id: "STUDIO";
  escalation_id?: string;
  escalation_state?: "CONVERSATION_STARTED" | "CONVERSATION_ENDED";
  contact_id?: string;
  channel_type?: string;
  an_channel_uri?: string;
  contact_channel_uri?: string;
  state: "OPEN" | "ESCALATED" | "CLOSED";
  start_date?: string;
  end_date?: string;
  last_updated?: string;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
  total: number;
};
  "fsi-contacts-contact-id-accounts-account-id-transactions-get": {
  total: number;
  _embedded: {
  transactions: ReadonlyArray<{
  id: string;
  description: string;
  value: {
  value: string;
  currency: string;
};
  booked_at?: string;
  value_at: string;
  status: "UNDEFINED" | "PENDING" | "BOOKED" | "POSTED";
  type: "UNDEFINED" | "CREDIT_CARD" | "PAYMENT" | "WITHDRAWAL" | "DEFAULT" | "TRANSFER" | "ADD_ON" | "DEPOSIT" | "PURCHASE" | "CHECK" | "OTHER" | "LOAN_PAYMENTS" | "FEE" | "CHARGE";
  flow: "CREDIT" | "DEBIT";
  custom_type?: string;
  custom_status?: string;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  value_details?: {
  principal_payment?: string;
  interest_payment?: string;
  monthly_escrow_payment?: string;
  fee?: string;
};
  total_principal_balance?: string;
  check_number?: string;
}>;
};
};
  "fsi_workspace_contacts__update_talkdesk_Contact": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getPatientBillingSummary": {
  id?: string;
  account_guarantors?: ReadonlyArray<{
  id?: string;
  account_ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
  account_type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  billing_system?: string;
  credit_score?: string;
  is_confidential_guarantor?: boolean;
  is_paperless?: boolean;
  owning_deployment_descriptor?: string;
  patient_is_guarantor?: boolean;
  patients?: ReadonlyArray<{
  date_of_birth?: string;
  legal_name?: string;
  preferred_name?: string;
  legal_sex?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  gender_identity?: string;
  ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
}>;
  professional_billing?: {
  aging_summaries?: ReadonlyArray<{
  amount?: number;
  display?: string;
}>;
  balance_summary?: {
  amount_due?: number;
  balance_not_on_payment_plan?: number;
  balance_on_payment_plan?: number;
  charge_total?: number;
  insurance_balance?: number;
  insurance_payment_adjustment_total?: number;
  patient_balance?: number;
  patient_payment_adjustment_total?: number;
  total_balance?: number;
};
  last_payment?: {
  amount?: number;
  date?: string;
  description?: ReadonlyArray<string>;
  source?: string;
  code?: string;
  reference_number?: string;
};
  last_statement?: {
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: boolean;
};
  message?: string;
  outstanding_account?: {
  bad_debt_balance?: number;
  insurance_balance?: number;
  last_self_pay_payment_date?: string;
  last_statement_date?: string;
  patient_balance?: number;
  self_pay_followup_level?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  total_balance?: number;
};
  payment_plan?: {
  amount_due?: number;
  monthly_amount_due?: number;
  next_due_date?: string;
  number_of_payments_left?: number;
  original_amount?: number;
  remaining_amount?: number;
  start_date?: string;
  is_late?: boolean;
  overdue_amount?: number;
};
  statements?: ReadonlyArray<{
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: boolean;
}>;
  transaction_summary?: {
  insurance_balance?: number;
  patient_balance?: number;
  patients?: ReadonlyArray<{
  ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
  insurance_balance?: number;
  patient_balance?: number;
  visits?: ReadonlyArray<{
  insurance_balance?: number;
  patient_balance?: number;
  charges?: ReadonlyArray<{
  code?: string;
  date?: string;
  department_name?: string;
  description?: string;
  original_amount?: number;
  outstanding_amount?: number;
  patient_amount?: number;
  insurance_amount?: number;
  payor_name?: string;
  provider_name?: string;
}>;
  self_payment_adjustments?: ReadonlyArray<{
  code?: string;
  date?: string;
  description?: string;
  match_amount?: number;
  reference_number?: string;
  source?: string;
}>;
}>;
}>;
  debit_adjustments?: {
  patient_balance?: number;
  adjustments?: ReadonlyArray<{
  date?: string;
  amount?: number;
  description?: string;
}>;
};
  undistributed_payment_adjustment?: {
  patient_balance?: number;
  payments_adjustments?: ReadonlyArray<{
  date?: string;
  amount?: number;
  description?: string;
}>;
};
};
};
  hospital_billing?: {
  aging_summaries?: ReadonlyArray<{
  amount?: number;
  display?: string;
}>;
  balance_summary?: {
  amount_due?: number;
  balance_not_on_payment_plan?: number;
  balance_on_payment_plan?: number;
  charge_total?: number;
  insurance_balance?: number;
  insurance_payment_adjustment_total?: number;
  patient_balance?: number;
  patient_payment_adjustment_total?: number;
  total_balance?: number;
};
  last_payment?: {
  amount?: number;
  date?: string;
  description?: ReadonlyArray<string>;
  source?: string;
  code?: string;
  reference_number?: string;
};
  last_statement?: {
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: boolean;
};
  message?: string;
  outstanding_account?: {
  bad_debt_balance?: number;
  insurance_balance?: number;
  last_self_pay_payment_date?: string;
  last_statement_date?: string;
  patient_balance?: number;
  self_pay_followup_level?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  total_balance?: number;
};
  payment_plan?: {
  amount_due?: number;
  monthly_amount_due?: number;
  next_due_date?: string;
  number_of_payments_left?: number;
  original_amount?: number;
  remaining_amount?: number;
  start_date?: string;
  is_late?: boolean;
  overdue_amount?: number;
};
  statements?: ReadonlyArray<{
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: boolean;
}>;
  transaction_summary?: {
  insurance_balance?: number;
  patient_balance?: number;
  patients?: ReadonlyArray<{
  ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
  insurance_balance?: number;
  patient_balance?: number;
  visits?: ReadonlyArray<{
  insurance_balance?: number;
  patient_balance?: number;
  charges?: ReadonlyArray<{
  code?: string;
  date?: string;
  department_name?: string;
  description?: string;
  original_amount?: number;
  outstanding_amount?: number;
  patient_amount?: number;
  insurance_amount?: number;
  payor_name?: string;
  provider_name?: string;
}>;
  self_payment_adjustments?: ReadonlyArray<{
  code?: string;
  date?: string;
  description?: string;
  match_amount?: number;
  reference_number?: string;
  source?: string;
}>;
}>;
}>;
  debit_adjustments?: {
  patient_balance?: number;
  adjustments?: ReadonlyArray<{
  date?: string;
  amount?: number;
  description?: string;
}>;
};
  undistributed_payment_adjustment?: {
  patient_balance?: number;
  payments_adjustments?: ReadonlyArray<{
  date?: string;
  amount?: number;
  description?: string;
}>;
};
};
};
  single_billing_office?: {
  aging_summaries?: ReadonlyArray<{
  amount?: number;
  display?: string;
}>;
  balance_summary?: {
  amount_due?: number;
  balance_not_on_payment_plan?: number;
  balance_on_payment_plan?: number;
  charge_total?: number;
  insurance_balance?: number;
  insurance_payment_adjustment_total?: number;
  patient_balance?: number;
  patient_payment_adjustment_total?: number;
  total_balance?: number;
};
  last_payment?: {
  amount?: number;
  date?: string;
  description?: ReadonlyArray<string>;
  source?: string;
  code?: string;
  reference_number?: string;
};
  last_statement?: {
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: boolean;
};
  message?: string;
  outstanding_account?: {
  bad_debt_balance?: number;
  insurance_balance?: number;
  last_self_pay_payment_date?: string;
  last_statement_date?: string;
  patient_balance?: number;
  self_pay_followup_level?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  total_balance?: number;
};
  payment_plan?: {
  amount_due?: number;
  monthly_amount_due?: number;
  next_due_date?: string;
  number_of_payments_left?: number;
  original_amount?: number;
  remaining_amount?: number;
  start_date?: string;
  is_late?: boolean;
  overdue_amount?: number;
};
  statements?: ReadonlyArray<{
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: boolean;
}>;
  transaction_summary?: {
  insurance_balance?: number;
  patient_balance?: number;
  patients?: ReadonlyArray<{
  ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
  insurance_balance?: number;
  patient_balance?: number;
  visits?: ReadonlyArray<{
  insurance_balance?: number;
  patient_balance?: number;
  charges?: ReadonlyArray<{
  code?: string;
  date?: string;
  department_name?: string;
  description?: string;
  original_amount?: number;
  outstanding_amount?: number;
  patient_amount?: number;
  insurance_amount?: number;
  payor_name?: string;
  provider_name?: string;
}>;
  self_payment_adjustments?: ReadonlyArray<{
  code?: string;
  date?: string;
  description?: string;
  match_amount?: number;
  reference_number?: string;
  source?: string;
}>;
}>;
}>;
  debit_adjustments?: {
  patient_balance?: number;
  adjustments?: ReadonlyArray<{
  date?: string;
  amount?: number;
  description?: string;
}>;
};
  undistributed_payment_adjustment?: {
  patient_balance?: number;
  payments_adjustments?: ReadonlyArray<{
  date?: string;
  amount?: number;
  description?: string;
}>;
};
};
};
  propensity_to_pay?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  service_area?: {
  name?: string;
  ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
};
}>;
};
  "searchPatientCoverages": {
  total?: number;
  count?: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  coverages?: ReadonlyArray<({
  id: string;
  plan_id: string;
  plan_name: string;
  subscribe?: string;
  unsubscribe?: string;
  plan_status: "ACTIVE" | "INACTIVE";
  priority?: "PRIMARY" | "SECONDARY" | "TERTIARY" | "QUATERNARY" | "QUINARY" | "SENARY" | "SEPTENARY" | "OCTONARY" | "NONARY" | "DENARY";
})>;
};
};
  "getPatientCoverageDetails": ({
  id: string;
  plan_id: string;
  plan_name: string;
  subscribe?: string;
  unsubscribe?: string;
  plan_status: "ACTIVE" | "INACTIVE";
  priority?: "PRIMARY" | "SECONDARY" | "TERTIARY" | "QUATERNARY" | "QUINARY" | "SENARY" | "SEPTENARY" | "OCTONARY" | "NONARY" | "DENARY";
} & {
  plan_type?: string;
  relationship?: string;
  network_type?: string;
  payor?: {
  name: string;
  addresses?: ReadonlyArray<{
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}>;
  contacts?: ReadonlyArray<{
  system: string;
  value: string;
}>;
};
  copay_information?: ReadonlyArray<{
  benefit?: string;
  cost_type?: string;
  amount: {
  type: "MONEY" | "PERCENTAGE";
  amount?: number;
  currency?: string;
  percent?: number;
};
}>;
  accumulators?: {
  combined_pharmacy_medical?: boolean;
  coverage_model?: string;
  employer_group_number?: string;
  employer_group_ids?: ReadonlyArray<{
  id: string;
  type?: string;
}>;
  employer_group_name?: string;
  has_individual_sublimits?: boolean;
  payor_ids?: ReadonlyArray<{
  id: string;
  type?: string;
}>;
  subscriber_first_name?: string;
  subscriber_number?: string;
  subscriber_last_name?: string;
  benefits?: ReadonlyArray<{
  accumulation_level?: string;
  amount_used?: number;
  amount_type?: string;
  adjudication_table_ids?: ReadonlyArray<{
  id: string;
  type?: string;
}>;
  adjudication_table_name?: string;
  accumulator_ids?: ReadonlyArray<{
  id: string;
  type?: string;
}>;
  amount_limit?: number;
  accumulator_name?: string;
  conversion_factor?: number;
  is_cob_savings?: boolean;
  is_deductible?: boolean;
  is_max_out_of_pocket?: boolean;
  in_out_network?: ReadonlyArray<string>;
  roll_period_type?: string;
  tier_ids?: ReadonlyArray<{
  id: string;
  type?: string;
}>;
  tier_name?: string;
}>;
};
});
  "scheduleAppointment": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getFutureAppointments": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  future_appointments: ReadonlyArray<{
  id: string;
  service_type?: string;
  service_type_id?: string;
  status?: string;
  date_time?: string;
  date?: string;
  time?: string;
  timezone?: string;
  provider?: string;
  provider_id?: string;
  speciality?: string;
  address?: string;
  location?: string;
  location_id?: string;
  has_service_type_id: boolean;
  patient_instructions?: string;
  cancellable?: boolean;
  cancelled?: boolean;
  confirmed?: boolean;
  category?: string;
  comment?: string;
  appointment_dat_type_id?: string;
  sub_location?: string;
  sub_location_id?: string;
}>;
};
};
  "cancelAppointment": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "sendHL7Events": string;
  "providerAvailableAppointmentsVA": {
  remaining?: number;
  date?: string;
  time?: string;
  timezone?: string;
  time_preferences_flag?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "providerAvailableSlots": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  provider_slots: ReadonlyArray<{
  id?: string;
  date: string;
  time: string;
  time_preferences_flag: string;
  service_type_id?: string;
  location_id?: string;
  provider_id?: string;
  time_zone_id?: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
  first?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "getProviderAvailableSlots": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  provider_slots: ReadonlyArray<{
  id?: string;
  date: string;
  time: string;
  time_preferences_flag: string;
  service_type_id?: string;
  location_id?: string;
  provider_id?: string;
  time_zone_id?: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
  first?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "getBalances": {
  id?: string;
  total_balance: number;
  accounts?: ReadonlyArray<{
  account_id?: string;
  account_balance: number;
  billing_system?: string;
}>;
};
  "suggestProviders": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  provider_names: ReadonlyArray<{
  name: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
  first?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "searchPatientsStudio": {
  _links?: {
  self?: {
  href?: string;
};
};
  id?: string;
  name?: string;
  ssn?: string;
  mrn?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
  home_phone_number?: string;
  work_phone_number?: string;
  mobile_phone_number?: string;
  home_address_city?: string;
  home_address_state?: string;
  marital_status?: string;
  language?: string;
  active?: string;
  count?: number;
  popup_url?: string;
  patient_status?: string;
  operation_outcome?: string;
  pcp_id?: string;
  pcp_name?: string;
  self_service_active?: string;
  postal_code?: string;
  rendering_provider_name?: string;
  rendering_provider_id?: string;
  custom_fields?: {};
  mychart_account_id?: string;
};
  "searchPatientsStudioBrief": {
  _links?: {
  self?: {
  href?: string;
};
};
  id?: string;
  name?: string;
  ssn?: string;
  mrn?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
};
  "patientInformation": {
  id: string;
  name?: string;
  birth_date?: string;
  gender?: string;
  pcp?: string;
  mrn?: string;
  self_service_active?: boolean;
  rendering_provider_name?: string;
  rendering_provider_id?: string;
  custom_fields?: {};
  home_address?: {
  line?: string;
  city?: string;
  district?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  full?: string;
  use?: "HOME" | "WORK" | "TEMP" | "OLD";
};
};
  "healthcareCallAnswered": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "updateTalkdeskContact": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "resetTalkdeskContact": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "phoneAction": {
  PhoneSystemResponse: {
  PhoneSystemResult: {
  Success: "True" | "False";
};
};
};
  "clickToCall": {
  PhoneSystemCallID: string;
};
  "outgoingSms": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "agentStatusSync": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "sendInbasketMessage": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "mychartResetPassword": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "resetPatientPassword": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "healthcareEpicOauthJwks": string;
  "searchPatientsVA": {
  _links?: {
  self?: {
  href?: string;
};
};
  id?: string;
  name?: string;
  ssn?: string;
  mrn?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
  home_phone_number?: string;
  work_phone_number?: string;
  mobile_phone_number?: string;
  home_address_city?: string;
  home_address_state?: string;
  marital_status?: string;
  language?: string;
  active?: string;
  count?: number;
  popup_url?: string;
  patient_status?: string;
  operation_outcome?: string;
  pcp_id?: string;
  pcp_name?: string;
  self_service_active?: string;
  postal_code?: string;
  rendering_provider_name?: string;
  rendering_provider_id?: string;
  custom_fields?: {};
  mychart_account_id?: string;
};
  "prescriptionsVA": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  prescriptions: ReadonlyArray<{
  id?: string;
  medication?: string;
  status?: "UNDEFINED" | "ACTIVE" | "DISCONTINUED" | "ENDED" | "EXPIRED";
  pharmacy_id?: string;
  pharmacy_ncpdp_id?: string;
  pharmacy_name?: string;
  pharmacy_address?: string;
  last_dispensed?: string;
  end_date?: string;
  fills_remaining?: number;
  is_fillable?: boolean;
  has_fill_in_progress?: boolean;
  is_rar_able?: boolean;
  rar_status?: "PENDING" | "APPROVED" | "DENIED";
}>;
};
};
  "prescriptionRefillVA": {
  error_message?: string;
  prescription_result: {
  id?: string;
  updated: boolean;
  update_timestamp?: string;
  error_message?: string;
};
};
  "cancelAppointmentVA": {
  id?: string;
  provider_id?: string;
  provider_name?: string;
  service_type_id?: string;
  location_id?: string;
};
  "scheduleAppointmentVA": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "futureAppointmentsVA": {
  _links?: {
  self?: {
  href?: string;
};
};
  remaining?: number;
  id?: string;
  service_type?: string;
  date_time?: string;
  date?: string;
  time?: string;
  category?: string;
  timezone?: string;
  speciality?: string;
  provider?: string;
  address?: string;
  location?: string;
  patient_instructions?: string;
  service_type_id?: string;
  location_id?: string;
  provider_id?: string;
  has_service_type_id?: string;
  cancellable?: string;
  comment?: string;
  appointment_dat_type_id?: string;
  sub_location?: string;
  sub_location_id?: string;
};
  "resetHealthcareProvidersVa": {
  _links?: {
  self?: {
  href?: string;
};
};
  id?: string;
  name?: string;
  ssn?: string;
  mrn?: string;
  birth_date?: string;
  gender?: "MALE" | "FEMALE" | "OTHER" | "UNKNOWN";
  home_phone_number?: string;
  work_phone_number?: string;
  mobile_phone_number?: string;
  home_address_city?: string;
  home_address_state?: string;
  marital_status?: string;
  language?: string;
  active?: string;
  count?: number;
  popup_url?: string;
  patient_status?: string;
  operation_outcome?: string;
  pcp_id?: string;
  pcp_name?: string;
  self_service_active?: string;
  postal_code?: string;
  rendering_provider_name?: string;
  rendering_provider_id?: string;
  custom_fields?: {};
  mychart_account_id?: string;
};
  "getEncounters": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  encounters: ReadonlyArray<{
  id: string;
  type?: string;
  date_time?: string;
  timezone?: string;
  status?: "PLANNED" | "ARRIVED" | "TRIAGED" | "IN_PROGRESS" | "ONLEAVE" | "FINISHED" | "CANCELLED" | "ENTERED_IN_ERROR" | "UNKNOWN";
  location_id?: string;
  location?: string;
  provider_id?: string;
  provider?: string;
  reason?: string;
}>;
};
};
  "getPatientMedicationOrders": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links?: {
  self?: {
  href?: string;
};
};
  _embedded: {
  medication_orders: ReadonlyArray<{
  id: string;
  status?: string;
  category: string;
  name: string;
  authored_on?: string;
  requester?: string;
  dose?: string;
  initial_fill_quantity?: string;
  initial_fill_duration?: string;
  dispense_interval?: string;
  validity_period?: {
  start: string;
  end?: string;
};
  number_of_repeats_allowed?: number;
  quantity?: string;
  expected_supply_duration?: string;
  substitution_allowed?: boolean;
  substitution_reason?: string;
  dispenser?: {
  id: string;
  name?: string;
};
  dispenser_instruction?: string;
  destination?: string;
}>;
};
};
  "confirmAppointment": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "rescheduleAppointment": {
  id: string;
  can_reschedule?: boolean;
  date_time?: string;
  time_zone_id?: string;
  address?: string;
  specialty?: string;
  patient_id?: string;
  patient_name?: string;
  patient_instructions?: string;
  location?: string;
  location_id?: string;
  provider?: string;
  provider_id?: string;
  duration_in_minutes?: number;
  service_type?: string;
  service_type_id?: string;
  warnings?: ReadonlyArray<string>;
};
  "confirmAppointmentVa": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getServiceRequests": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links?: {
  self: {
  href: string;
};
};
  _embedded: {
  service_requests: ReadonlyArray<{
  id?: string;
  status?: string;
  intent?: string;
  category?: string;
  type?: string;
  do_not_perform?: boolean;
  based_on?: ReadonlyArray<{
  name?: string;
  id: string;
}>;
  quantity?: string;
  authored_on?: string;
  start?: string;
  end?: string;
  frequency?: number;
  period?: string;
  priority?: string;
  requester?: {
  name?: string;
  id: string;
};
  performer?: ReadonlyArray<{
  name?: string;
  id: string;
}>;
  location?: {
  name?: string;
  id: string;
};
  reason?: ReadonlyArray<string>;
  notes?: ReadonlyArray<string>;
  insurance?: ReadonlyArray<{
  name?: string;
  id: string;
}>;
  patient_instructions?: string;
}>;
};
};
  "patientProceduresVA": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links: {
  self: {
  href: string;
};
};
  _embedded: {
  procedures: ReadonlyArray<{
  id: string;
  name?: string;
  status?: "PREPARATION" | "IN_PROGRESS" | "NOT_DONE" | "ON_HOLD" | "STOPPED" | "COMPLETED" | "ENTERED_IN_ERROR" | "UNKNOWN";
  category?: string;
  performed_start_date_time?: string;
  performed_end_date_time?: string;
  outcome?: string;
  subject?: {
  name?: string;
  id: string;
};
  performers?: ReadonlyArray<{
  name?: string;
  id: string;
}>;
  encounter?: {
  name?: string;
  id: string;
};
  location?: {
  name?: string;
  id: string;
};
  body_sites?: ReadonlyArray<string>;
  reports?: ReadonlyArray<{
  name?: string;
  id: string;
}>;
  follow_ups?: ReadonlyArray<string>;
  focal_devices?: ReadonlyArray<string>;
  used_references?: ReadonlyArray<{
  name?: string;
  id: string;
}>;
}>;
};
};
  "diagnosisPublic": {
  id?: string;
  diagnosis_process_id: string;
  should_stop: boolean;
  diagnosis_result?: ReadonlyArray<{
  diagnosis_id: string;
  diagnosis_name: string;
}>;
  question?: {
  question_type: string;
  question_text: string;
  options: ReadonlyArray<{
  option_id: string;
  option_label: string;
  option_value: string;
}>;
};
};
  "triagePublic": {
  id?: string;
  diagnosis_process_id?: string;
  triage_level: "EMERGENCY_HOSPITAL" | "URGENT_APPOINTMENT" | "FOLLOW_UP_APPOINTMENT";
};
  "storeInteractionOverrides": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "patientCases": {
  id: string;
  success: boolean;
};
  "getOutstandingOrdersPublic": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  outstanding_orders: ReadonlyArray<{
  id?: string;
  assigned_user?: string | null;
  order_class?: string | null;
  order_class_description?: string | null;
  clinical_provider_id?: number | null;
  clinical_provider_name?: string | null;
  contraindication_reason?: ReadonlyArray<{
  code?: string | null;
  codeset?: string | null;
  description?: string | null;
}> | null;
  created_encounter_id?: number | null;
  date_ordered?: string;
  declined_reason?: ReadonlyArray<{
  code?: string | null;
  codeset?: string | null;
  description?: string | null;
}> | null;
  declined_reason_text?: string | null;
  department_id?: number | null;
  description?: string | null;
  documentation_only?: string | null;
  document_id?: number;
  encounter_id?: number | null;
  name?: string;
  ordering_provider?: string | null;
  perform_date?: string | null;
  priority?: number | null;
  status?: string;
}>;
};
};
  "saveIntentPublic": {
  id: string;
  success: boolean;
};
  "getMedicationStatements": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links?: {
  self: {
  href: string;
};
};
  _embedded: {
  medication_statements: ReadonlyArray<{
  id?: string;
  status?: string;
  name?: string;
  authored_on?: string;
  dose?: string;
  patientInstruction?: string;
  effectivePeriod?: {
  start?: string;
  end?: string;
};
  requester?: string;
}>;
};
};
  "CreateMedicationStatement": {
  id: string;
};
  "CreateMedicationOrder": {
  id: string;
};
  "verifyPatient": {
  match: boolean;
  score: number;
};
  "createMap": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "createMaps": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "searchContactByPhone": {
  id: string;
  name?: string;
  address?: string;
  tags?: ReadonlyArray<string>;
  emails?: ReadonlyArray<{
  label?: string;
  email?: string;
}>;
  phones?: ReadonlyArray<{
  label?: string;
  number?: string;
}>;
  custom_fields?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
  integrations?: ReadonlyArray<{
  integration_id?: string;
  external_id?: string;
  external_url?: string;
  external_sync_state?: string;
  contact_type?: string;
}>;
};
  "searchContactByChannels": ReadonlyArray<{
  id?: string;
  name?: string;
  address?: string;
  tags?: ReadonlyArray<string>;
  emails?: ReadonlyArray<{
  label?: string;
  email?: string;
}>;
  phones?: ReadonlyArray<{
  label?: string;
  number?: string;
}>;
  custom_fields?: ReadonlyArray<{
  key?: string;
  value?: string;
}>;
}>;
  "searchAndCreateContact": {
  matched?: number;
  _embedded?: {
  contacts?: ReadonlyArray<{
  id?: string;
  tags?: ReadonlyArray<string>;
  name?: string;
  address?: string;
  emails?: ReadonlyArray<{
  label?: string;
  email?: string;
}>;
  phones?: ReadonlyArray<{
  label?: string;
  number?: string;
}>;
  custom_fields?: ReadonlyArray<{}>;
  integrations?: ReadonlyArray<{
  integration_id?: string;
  external_id?: string;
  external_url?: string;
  external_sync_state?: string;
  contact_type?: string;
}>;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
};
};
  "bindContactToInteraction": {
  id?: string;
  status?: string;
  channel_type?: string;
  contact_person?: {
  endpoint?: string;
  href?: string;
  id?: string;
};
};
  "searchAndUpsertContact": {
  matched: number;
  _embedded?: {
  contacts: ReadonlyArray<{
  id: string;
  name?: string;
  address?: string;
  tags?: ReadonlyArray<string>;
  emails?: ReadonlyArray<{
  label?: string;
  email: string;
}>;
  phones?: ReadonlyArray<{
  label?: string;
  number: string;
}>;
  custom_fields?: ReadonlyArray<{
  key: string;
  value?: string;
}>;
  integrations?: ReadonlyArray<{
  integration_id: string;
  external_id: string;
  external_url?: string;
  external_sync_state?: string;
  contact_type?: string;
}>;
  _links?: {
  self: {
  href: string;
};
};
}>;
};
};
  "getFlatAppointmentScheduling": {
  provider_id: string;
  provider_description: string;
  photo_url: string;
  gender: string;
  language: string;
  service_type_id: string;
  service_type_description: string;
  location_id: string;
  location_description: string;
  office_address: string;
  office_city: string;
  office_state: string;
  office_zip_code: string;
  office_phone_number: string;
  total: number;
  provider_list: ReadonlyArray<{
  id: string;
  description: string;
  photo_url: string;
  gender: string;
  language: string;
}>;
  service_type_list: ReadonlyArray<{
  id: string;
  description: string;
}>;
  location_list: ReadonlyArray<{
  id: string;
  description: string;
  office_address: string;
  office_city: string;
  office_state: string;
  office_zip_code: string;
  office_phone_number: string;
}>;
};
  "getPhysiciansByPastEncounters": {
  id?: number;
  total: number;
  physicians: ReadonlyArray<{
  id?: number;
  physician_id: string;
  physician_name: string;
  photo_url: string;
  gender: string;
  language: string;
  phone_number: string;
  specialty: string;
  specialty_id: string;
  address: string;
  address_id: string;
  accept_new_patient: boolean;
}>;
};
  "deleteEnrollment": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "createEnrollment": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getConsent": {
  status: "NO_CONSENT" | "CONSENTED" | "DELETED" | "REFUSED";
  consented_at?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "editConsent": {
  status: "NO_CONSENT" | "CONSENTED" | "DELETED" | "REFUSED";
};
  "uploadHistoryImport": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "GetHistoryImport": {
  id?: string;
  status?: "UPLOADED" | "PROCESSING" | "IMPORTED" | "IMPORTED_WITH_ERRORS" | "ERROR";
};
  "uploadForecastImport": {
  id: string;
  status: string;
};
  "getForecastImportStatus": {
  id: string;
  status: "UPLOADED" | "PROCESSING" | "IMPORTED" | "IMPORTED_WITH_ERRORS" | "ERROR" | "DISMISS";
  created_at: string;
  updated_at: string;
  error_file_url?: string | null;
};
  "DeleteTimeOffAionExternal": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "UpdateTimeOffAionExternal": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "CreateTimeOffAionExternal": {
  agent_email?: string;
  description?: string;
  end_at: string;
  event_type_name: string;
  id: string;
  start_at: string;
};
  "GetAgentCalendarSchedule": string;
  "PostScheduleEventImport": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "GetScheduleEventImport": {
  id: string;
  status: "PROCESSING" | "IMPORTED" | "IMPORTED_WITH_ERRORS" | "ERROR";
  error_report_url?: string;
  error_report_expires_at?: string;
};
  "PutTimeOffBalanceExternal": {
  time_off_balances?: ReadonlyArray<{
  id?: string;
  agent_email?: string;
  balance?: number;
  event_type_name?: string;
}>;
};
  "DeleteTimeOffBalanceExternal": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "industries-activities-activities-activity-id-patch": {
  id: string;
  account_id: string;
  activity_type_id: string;
  contact_id?: string;
  contact_phone_number?: string;
  duration?: string;
  direction: "IN" | "OUT";
  interaction_id?: string;
  ring_groups?: ReadonlyArray<string>;
  started_at: string;
  tags?: ReadonlyArray<string>;
  user_id?: string;
  user_name?: string;
  data?: {};
  events?: ReadonlyArray<{
  id: string;
  event_type_id: string;
  occurred_at: string;
  data?: {};
}>;
  external_integration_name?: string;
  external_id?: string;
};
  "industries-activities-activities-post": {
  id: string;
  account_id: string;
  activity_type_id: string;
  contact_id?: string;
  contact_phone_number?: string;
  duration?: string;
  direction: "IN" | "OUT";
  interaction_id?: string;
  ring_groups?: ReadonlyArray<string>;
  started_at: string;
  tags?: ReadonlyArray<string>;
  user_id?: string;
  user_name?: string;
  data?: {};
  events?: ReadonlyArray<{
  id: string;
  event_type_id: string;
  occurred_at: string;
  data?: {};
}>;
  external_integration_name?: string;
  external_id?: string;
};
  "industries-activities-activities-activity-id-events-post": {
  id: string;
  event_type_id: string;
  occurred_at: string;
  data?: {};
};
  "createInteractionConfiguration": {
  json?: string;
};
  "getIndustriesContext": {
  readonly [key: string]: string | undefined;
};
  "deleteIndustriesContext": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "addIndustriesContextValue": {
  id: string;
  value: string;
};
  "deleteIndustriesContextValue": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "updateIndustriesContextValue": {
  id: string;
  value: string;
};
  "builder-functions-executions-post": {};
  "builder-functions-function-id-executions-post": {};
  "phone-labels-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages?: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  labels?: ReadonlyArray<{
  id?: string;
  type?: string;
  name?: string;
  default_name?: string;
}>;
};
};
  "phone-labels-put": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages?: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  labels?: ReadonlyArray<{
  id?: string;
  type?: string;
  name?: string;
  default_name?: string;
}>;
};
};
  "CreatingACase": {
  id: string;
  title: string;
  description: string;
  parent_id?: string;
  owner_id?: string;
  status: string;
  type?: string;
  priority?: string;
  custom_fields?: {};
  notes?: ReadonlyArray<{
  id?: string;
  note_title?: string;
  note_body?: string;
  public?: boolean;
}>;
  requester_id: string;
  requester_name: string;
  requester_email: string;
  requester_type?: string;
};
  "DeletingCasesSoftly": {
  ids?: ReadonlyArray<number>;
};
  "GettingAListOfCases": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  _links: {
  prev: {
  href: string;
};
  self: {
  href: string;
};
  next: {
  href: string;
};
};
  _embedded: {
  data: ReadonlyArray<{
  id: string;
  title: string;
  description: string;
  requester_id: string;
  requester_name: string;
  requester_email?: string;
  requester_integration: {
  integration_id?: string;
  external_id?: string;
  external_url?: string;
  contact_type?: string;
  external_sync_state?: string;
};
  requester_phone?: string;
  group_id: string;
  group_name?: string;
  agent_id?: string;
  agent_name?: string;
  form_name?: string;
  priority?: string;
  status: string;
  type?: string;
  about?: string;
  create_at: string;
  update_at: string;
  custom_fields?: string;
  notes?: ReadonlyArray<{
  id?: string;
  notes_title?: string;
  notes_body?: string;
  public?: boolean;
}>;
}>;
};
};
  "GettingCaseDetails": {
  id: string;
  title: string;
  description: string;
  owner_id?: string;
  form_name?: string;
  priority?: string;
  type?: string;
  status: string;
  resolution?: string;
  notes?: ReadonlyArray<{
  id?: string;
  notes_title?: string;
  notes_body?: string;
  public?: boolean;
}>;
  custom_fields?: string;
};
  "UpdatingACase": {
  id: string;
  parent_id?: string;
  title: string;
  description: string;
  owner_id?: string;
  priority?: string;
  type?: string;
  status: string;
  resolution?: string;
  notes?: ReadonlyArray<{
  id?: string;
  note_title?: string;
  note_body?: string;
  public?: boolean;
}>;
  custom_fields?: {};
  group_id?: string;
};
  "GettingNewestCaseDetailsByContact": {
  id: string;
  title: string;
  description: string;
  requester_id: string;
  requester_name: string;
  requester_email?: string;
  requester_integration: {
  integration_id?: string;
  external_id?: string;
  external_url?: string;
  contact_type?: string;
  external_sync_state?: string;
};
  requester_phone?: string;
  group_id: string;
  group_name?: string;
  agent_id?: string;
  agent_name?: string;
  form_name?: string;
  priority?: string;
  status: string;
  type?: string;
  about?: string;
  create_at: string;
  update_at: string;
  custom_fields?: string;
  notes?: ReadonlyArray<{
  id?: string;
  notes_title?: string;
  notes_body?: string;
  public?: boolean;
}>;
};
  "DeletingCasesPermanently": {
  ids?: ReadonlyArray<number>;
};
  "UpdateACaseNote": {
  id?: string;
  note_title?: string;
  note_body?: string;
  public?: boolean;
};
  "GettingAListOfCaseFields": {
  id: string;
  name: string;
  key: string;
  type: string;
  description?: string;
  dict_list?: ReadonlyArray<{
  key?: string;
  value?: string;
  children?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
}>;
  required: boolean;
  active: boolean;
  create_at: string;
  update_at: string;
};
  "create-digital-connect-conversations": {
  id?: string;
};
  "create-digital-connect-messages": {
  id?: string;
  created_at?: string;
  message_id?: string;
};
  "delete-digital-connect-conversation": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "phone-details-outbound-numbers-get": {
  total: number;
  page: number;
  per_page: number;
  count: number;
  _embedded: {
  phone_numbers: ReadonlyArray<{
  id: string;
  phone_number: string;
  friendly_name: string;
  dedicated_line: boolean;
  dedicated_line_agent_id?: string;
  sip: boolean;
  vcid: boolean;
  capabilities: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
}>;
};
  _links: {
  self: {
  href: string;
};
  first?: {
  href: string;
};
  next?: {
  href: string;
};
  previous?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "phone-details-numbers-get": {
  total: number;
  page: number;
  per_page: number;
  count: number;
  _embedded: {
  phone_numbers: ReadonlyArray<{
  id: string;
  phone_number: string;
  friendly_name: string;
  dedicated_line: boolean;
  dedicated_line_agent_id?: string;
  sip: boolean;
  vcid: boolean;
  capabilities: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
}>;
};
  _links: {
  self: {
  href: string;
};
  first?: {
  href: string;
};
  next?: {
  href: string;
};
  previous?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "phone-details-numbers-id-get": {
  id: string;
  phone_number: string;
  friendly_name: string;
  dedicated_line: boolean;
  dedicated_line_agent_id?: string;
  sip: boolean;
  vcid: boolean;
  capabilities: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
};
  "create-fsi-insurance-connections-automated-notification": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "fsi-desktop-app-session-get": {
  id: string;
  nonce: string;
};
  "fsi-desktop-app-session-post": {
  private_key: string;
};
  "CollectFeedbackData": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-post": ({
  id?: string;
  name: string;
  dialing_mode?: "PREDICTIVE" | "PREVIEW";
  priority?: number;
  run_once?: boolean;
  action_required?: boolean;
  status?: "INCOMPLETE" | "READY" | "RUNNING" | "PAUSED";
  dialing_mode_configuration?: {
  answering_machine_detection?: boolean;
  amd_metadata?: boolean;
  max_abandonment_rate?: number;
  max_dialing_ratio?: number;
  max_ring_time_in_secs: number;
  abandonment_timeout?: {
  amount: number;
};
};
  dialing_strategy?: {
  max_skip_attempts?: number;
  strategy_type?: "AUTOMATIC" | "MANUAL";
  preview_timeout?: number;
  max_attempts: number;
  retry_period: number;
  retry_time_unit: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
  calling_hours: ReadonlyArray<{
  from: string;
  to: string;
  week_days: ReadonlyArray<"MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY">;
}>;
  dispositions: {
  busy: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  no_answer: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  abandoned?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  agent_hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  answering_machine_detection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  invalid_number: {
  status_after_call: "FINAL";
};
};
  record_chain?: ReadonlyArray<{
  type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
  max_attempts: number;
  retry_period?: number;
  retry_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
}>;
  lists_sorting_criteria?: "FIFO" | "LIFO";
};
  created_at?: string;
});
  "campaigns-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  campaigns: ReadonlyArray<({
  id?: string;
  name: string;
  dialing_mode?: "PREDICTIVE" | "PREVIEW";
  priority?: number;
  run_once?: boolean;
  action_required?: boolean;
  status?: "INCOMPLETE" | "READY" | "RUNNING" | "PAUSED";
  created_at?: string;
})>;
};
  _links: {
  self: {
  href: string;
};
  prev: {
  href: string;
};
  next: {
  href: string;
};
  first: {
  href: string;
};
  last: {
  href: string;
};
};
};
  "campaigns-id-get": ({
  id?: string;
  name: string;
  dialing_mode?: "PREDICTIVE" | "PREVIEW";
  priority?: number;
  run_once?: boolean;
  action_required?: boolean;
  status?: "INCOMPLETE" | "READY" | "RUNNING" | "PAUSED";
  dialing_mode_configuration?: {
  answering_machine_detection?: boolean;
  amd_metadata?: boolean;
  max_abandonment_rate?: number;
  max_dialing_ratio?: number;
  max_ring_time_in_secs: number;
  abandonment_timeout?: {
  amount: number;
};
};
  dialing_strategy?: {
  max_skip_attempts?: number;
  strategy_type?: "AUTOMATIC" | "MANUAL";
  preview_timeout?: number;
  max_attempts: number;
  retry_period: number;
  retry_time_unit: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
  calling_hours: ReadonlyArray<{
  from: string;
  to: string;
  week_days: ReadonlyArray<"MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY">;
}>;
  dispositions: {
  busy: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  no_answer: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  abandoned?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  agent_hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  answering_machine_detection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  invalid_number: {
  status_after_call: "FINAL";
};
};
  record_chain?: ReadonlyArray<{
  type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
  max_attempts: number;
  retry_period?: number;
  retry_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
}>;
  lists_sorting_criteria?: "FIFO" | "LIFO";
};
  created_at?: string;
});
  "campaigns-id-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-patch": ({
  id?: string;
  name: string;
  dialing_mode?: "PREDICTIVE" | "PREVIEW";
  priority?: number;
  run_once?: boolean;
  action_required?: boolean;
  status?: "INCOMPLETE" | "READY" | "RUNNING" | "PAUSED";
  dialing_mode_configuration?: {
  answering_machine_detection?: boolean;
  amd_metadata?: boolean;
  max_abandonment_rate?: number;
  max_dialing_ratio?: number;
  max_ring_time_in_secs: number;
  abandonment_timeout?: {
  amount: number;
};
};
  dialing_strategy?: {
  max_skip_attempts?: number;
  strategy_type?: "AUTOMATIC" | "MANUAL";
  preview_timeout?: number;
  max_attempts: number;
  retry_period: number;
  retry_time_unit: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
  calling_hours: ReadonlyArray<{
  from: string;
  to: string;
  week_days: ReadonlyArray<"MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY">;
}>;
  dispositions: {
  busy: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  no_answer: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  abandoned?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  agent_hangup_before_connection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  answering_machine_detection?: {
  status_after_call: "FINAL" | "RETRY";
  custom: boolean;
  max_attempts?: number;
  retry_period?: number;
  retry_period_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
};
  invalid_number: {
  status_after_call: "FINAL";
};
};
  record_chain?: ReadonlyArray<{
  type: "HOME" | "OFFICE" | "MOBILE" | "EXTRA_1" | "EXTRA_2" | "EXTRA_3";
  max_attempts: number;
  retry_period?: number;
  retry_time_unit?: "SECONDS" | "MINUTES" | "HOURS" | "DAYS";
}>;
  lists_sorting_criteria?: "FIFO" | "LIFO";
};
  created_at?: string;
});
  "campaigns-id-do-not-call-lists-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  do_not_call_lists: ReadonlyArray<{
  id: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  first?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "campaigns-id-do-not-call-lists-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-do-not-call-lists-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-record-lists-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  record_lists: ReadonlyArray<{
  id: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  first?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "campaigns-id-record-lists-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-record-lists-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-users-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  users: ReadonlyArray<{
  id: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  first?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "campaigns-id-users-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-users-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-numbers-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  numbers: ReadonlyArray<{
  id: string;
  phone_number: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  first?: {
  href: string;
};
  last?: {
  href: string;
};
};
};
  "campaigns-id-numbers-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "campaigns-id-numbers-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "listScheduledCallbacks": {
  total_pages: number;
  total: number;
  page: number;
  per_page: number;
  count: number;
  _links: {
  self: {
  href: string;
};
  first: {
  href: string;
};
  last: {
  href: string;
};
  prev: {
  href: string;
};
};
  _embedded: {
  callbacks: ReadonlyArray<{
  callback_id: string;
  account_id?: string;
  interaction_id?: string;
  caller_id?: string;
  scheduled_time_to_call?: string;
  timezone?: string;
  preferred_start_time?: string;
  preferred_end_time?: string;
  processed_time?: string;
  created_at?: string;
  created_by?: string;
  contact_id?: string;
  root_interaction_id?: string;
  teams?: ReadonlyArray<{
  team_id: string;
}>;
  assign_type_v2?: "MYSELF_ONLY" | "SPECIFIC_AGENT" | "SPECIFIC_QUEUE" | "MYSELF_IF_AVAILABLE" | "ANY_ELIGIBLE_AGENT";
  from_call_type?: "INBOUND" | "MANUAL_OUTBOUND" | "PROACTIVE_OUTBOUND";
  dialing_model?: "PREDICTIVE" | "PREVIEW";
  queues?: ReadonlyArray<{
  queue: string;
}>;
  agents?: ReadonlyArray<{
  agent_id: string;
}>;
  campaign_id?: string;
  record_id?: string;
  record_list_id?: string;
  phone_number?: string;
  record_first_name?: string;
  record_last_name?: string;
  record_extra_data?: {};
  next_time_to_call?: string;
  status?: "UNATTEMPTED," | "TO_BE_RETRIED," | "EXHAUSTED," | "SUCCESS," | "CANCELED," | "INVALID_NUMBER";
  _links?: {
  self: {
  href: string;
};
};
}>;
};
};
  "createScheduledCallback": {
  callback_id: string;
  interaction_id?: string;
  caller_id?: string;
  time_to_call?: string;
  timezone?: string;
  assign_type_v2?: "MYSELF_ONLY" | "SPECIFIC_AGENT" | "SPECIFIC_QUEUE" | "MYSELF_IF_AVAILABLE" | "ANY_ELIGIBLE_AGENT";
  from_call_type?: "INBOUND" | "MANUAL_OUTBOUND" | "PROACTIVE_OUTBOUND" | "API";
  dialing_model?: "PREDICTIVE" | "PREVIEW";
  queues?: ReadonlyArray<{
  queue: string;
}>;
  agents?: ReadonlyArray<{
  agent_id: string;
}>;
  campaign_id?: string;
  record_id?: string;
  record_list_id?: string;
  phone_number?: string;
  record_first_name?: string;
  record_last_name?: string;
  record_extra_data?: {};
  _links?: {
  self: {
  href: string;
};
};
};
  "schedule-callbacks-id-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "schedule-callbacks-id-patch": {
  callback_id: string;
  account_id?: string;
  interaction_id?: string;
  caller_id?: string;
  scheduled_time_to_call?: string;
  timezone?: string;
  preferred_start_time?: string;
  preferred_end_time?: string;
  processed_time?: string;
  created_at?: string;
  created_by?: string;
  contact_id?: string;
  root_interaction_id?: string;
  teams?: ReadonlyArray<{
  team_id: string;
}>;
  assign_type_v2?: "MYSELF_ONLY" | "SPECIFIC_AGENT" | "SPECIFIC_QUEUE" | "MYSELF_IF_AVAILABLE" | "ANY_ELIGIBLE_AGENT";
  from_call_type?: "INBOUND" | "MANUAL_OUTBOUND" | "PROACTIVE_OUTBOUND";
  dialing_model?: "PREDICTIVE" | "PREVIEW";
  queues?: ReadonlyArray<{
  queue: string;
}>;
  agents?: ReadonlyArray<{
  agent_id: string;
}>;
  campaign_id?: string;
  record_id?: string;
  record_list_id?: string;
  phone_number?: string;
  record_first_name?: string;
  record_last_name?: string;
  record_extra_data?: {};
  next_time_to_call?: string;
  status?: "UNATTEMPTED," | "TO_BE_RETRIED," | "EXHAUSTED," | "SUCCESS," | "CANCELED," | "INVALID_NUMBER";
  _links?: {
  self: {
  href: string;
};
};
};
  "schedule-callbacks-id-get": {
  callback_id: string;
  account_id?: string;
  interaction_id?: string;
  caller_id?: string;
  scheduled_time_to_call?: string;
  timezone?: string;
  preferred_start_time?: string;
  preferred_end_time?: string;
  processed_time?: string;
  created_at?: string;
  created_by?: string;
  contact_id?: string;
  root_interaction_id?: string;
  teams?: ReadonlyArray<{
  team_id: string;
}>;
  assign_type_v2?: "MYSELF_ONLY" | "SPECIFIC_AGENT" | "SPECIFIC_QUEUE" | "MYSELF_IF_AVAILABLE" | "ANY_ELIGIBLE_AGENT";
  from_call_type?: "INBOUND" | "MANUAL_OUTBOUND" | "PROACTIVE_OUTBOUND";
  dialing_model?: "PREDICTIVE" | "PREVIEW";
  queues?: ReadonlyArray<{
  queue: string;
}>;
  agents?: ReadonlyArray<{
  agent_id: string;
}>;
  campaign_id?: string;
  record_id?: string;
  record_list_id?: string;
  record_list_name?: string;
  phone_number?: string;
  record_first_name?: string;
  record_last_name?: string;
  record_extra_data?: {};
  time_to_call?: string;
  next_time_to_call?: string;
  current_retry_attempts?: number;
  current_rescheduled_attempts?: number;
  max_rescheduled_attempts?: number;
  status?: "UNATTEMPTED," | "TO_BE_RETRIED," | "EXHAUSTED," | "SUCCESS," | "CANCELED," | "INVALID_NUMBER";
  _links?: {
  self: {
  href: string;
};
};
};
  "studio-callbacks-get": {
  total_pages: number;
  total: number;
  page: number;
  per_page: number;
  count: number;
  _links: {
  self: {
  href: string;
};
  first: {
  href: string;
};
  last: {
  href: string;
};
  prev: {
  href: string;
};
  next?: {
  href: string;
};
};
  _embedded: {
  callbacks: ReadonlyArray<{
  callback_id: string;
  account_id?: string;
  interaction_id?: string;
  contact_state?: string;
  agent_assigned?: boolean;
  flow_id?: string;
  flow_name?: string;
  phone_number?: string;
  talkdesk_number?: string;
  caller_id?: string;
  scheduled_time_to_call?: string;
  status?: "QUEUED" | "UNATTEMPTED" | "TO_BE_RETRIED" | "EXHAUSTED" | "SUCCESS" | "CANCELED" | "INVALID_NUMBER";
  created_at?: string;
  updated_at?: string;
  contact_id?: string;
  assign_type?: string;
  assignee?: {
  type?: string;
  value?: ReadonlyArray<string>;
};
  from_call_type?: "INBOUND" | "MANUAL_OUTBOUND" | "PROACTIVE_OUTBOUND";
  function_version?: number;
  is_api_component?: boolean;
  version?: number;
  agents?: ReadonlyArray<string>;
  teams?: ReadonlyArray<string>;
}>;
};
};
  "do-not-call-lists-id-entries-queries-post": {
  per_page: number;
  total: number;
  count: number;
  page: number;
  total_pages?: number;
  _links: {
  next: {
  href?: string;
};
  last: {
  href?: string;
};
  prev: {
  href?: string;
};
  self: {
  href?: string;
};
  first: {
  href?: string;
};
};
  _embedded: {
  entries: ReadonlyArray<{
  id?: string;
  do_not_call_list_id?: string;
  phone_number?: string;
  reason?: string;
  expiration_date?: string;
  created_at?: string;
  _links?: {
  self: {
  href: string;
};
};
}>;
};
};
  "upsertContact": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "healthcareConnectionsGetMemberById": {
  id: string;
  full_name: string;
  date_of_birth: string;
  gender?: "MALE" | "FEMALE" | "NOT_SPECIFIED" | "UNDEFINED";
  marital_status?: "SINGLE" | "MARRIED" | "OTHER" | "NOT_SPECIFIED" | "UNDEFINED";
  phone_numbers?: ReadonlyArray<{
  type: "HOME" | "WORK" | "MOBILE";
  value: string;
}>;
  emails?: ReadonlyArray<{
  type: "HOME" | "WORK";
  value: string;
}>;
  address?: string;
  preferred_language?: string;
  ssn: string;
  primary_care_provider?: string;
  medical_group?: string;
  member_since?: string;
  medicare_beneficiary_identifier?: string;
  primary_plan?: {
  id: string;
  plan_name: string;
  plan_group_id: string;
  member_id: string;
  plan_status: "ACTIVE" | "INACTIVE";
};
  other_plans?: ReadonlyArray<{
  id: string;
  plan_name: string;
  plan_group_id: string;
  member_id: string;
  plan_status: "ACTIVE" | "INACTIVE";
}>;
  screen_popup_url?: string;
};
  "memberLookup": {
  id: string;
  full_name: string;
  date_of_birth: string;
  home_phone_number?: string;
  mobile_phone_number?: string;
  home_email?: string;
  work_email?: string;
  address?: string;
  preferred_language?: string;
  ssn: string;
  medicare_beneficiary_identifier?: string;
  count: number;
};
  "get_claim_status_by_id_public": {
  status: string;
};
  "get_prior_authorization_status_by_id_public": {
  status: string;
};
  "providerLookupConnections": {
  id: string;
  full_name: string;
  date_of_birth: string;
  phone_number?: string;
  npi: string;
  organization_unit?: string;
  medical_group_id?: string;
  medical_group_name?: string;
  pcp_speciality_id?: string;
  pcp_speciality_name?: string;
};
  "get_claims_public": {
  _embedded: {
  claims: ReadonlyArray<{
  id: string;
  status: "APPROVED" | "DENIED" | "PENDING";
  billing_amount: {
  value: number;
  currency_code: string;
};
  paid_amount: {
  value: number;
  currency_code: string;
};
  date_of_service: string;
  claim_provider: string;
}>;
};
  total: number;
};
  "get_prior_authorizations": {
  _embedded: {
  prior_authorizations: ReadonlyArray<{
  id: string;
  status: "APPROVED" | "PENDING" | "DENIED";
  pre_authorization_referring_provider: {
  referring_provider_name: string;
  referring_provider_role: string;
};
  dos: string;
  reason: string;
  requested_date?: string;
  authorization_date?: string;
  expiration_date?: string;
  number_of_units?: number;
}>;
};
  total: number;
};
  "sycurioLogin": {
  id?: string;
  login_successful: boolean;
  sycurio_session_id?: string;
  sycurio_login_error_reason?: string;
};
  "v1-record-list-record-list-id-record-record-id-call-attempt-disposition-disposition-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "v1-record-list-record-list-id-record-record-id-schedule-callback-created-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "v1-record-list-record-list-id-record-record-id-callback-attempt-disposition-disposition-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "postTrigger": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "deleteTrigger": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "expressGetAccounts": ({
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  _embedded?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  _links?: {};
} & {
  _embedded?: {
  accounts?: ReadonlyArray<{
  id?: string;
  name?: string;
  company_name?: string;
  status?: "ACTIVE" | "CHURNED" | "IN_TRIAL" | "INACTIVE" | "PROSPECT" | "TRIAL_LOST" | "OTHER";
}>;
};
  _links?: {
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
});
  "getResellerContractInfo": {
  id: string;
  trial: boolean;
  account_status: ("ACTIVE" | "SUSPENDED" | "CANCELED" | "TERMINATED");
  license_number: number;
  transition_date?: string;
  transition_status?: ("ACTIVE" | "SUSPENDED" | "CANCELED" | "TERMINATED");
};
  "getResellerContractAction": ({
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  _embedded?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  _links?: {};
} & {
  _embedded?: {
  contract_actions?: ReadonlyArray<{
  id: string;
  action_type: ("NEWTDE" | "AMENDTDE" | "CANCELTDE");
  quantity?: number;
  status: ("CREATED" | "IN_PROGRESS" | "COMPLETED" | "FAILED");
  status_message?: string;
  created_at: string;
  updated_at: string;
}>;
};
  _links?: {
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
});
  "createResellerContractAction": {
  id: string;
  action_type: ("NEWTDE" | "AMENDTDE" | "CANCELTDE");
  quantity?: number;
  status: ("CREATED" | "IN_PROGRESS" | "COMPLETED" | "FAILED");
  status_message?: string;
  created_at: string;
  updated_at: string;
};
  "getProducts": ({
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  _embedded?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  _links?: {};
} & {
  _embedded?: {
  products?: ReadonlyArray<{
  id?: string;
  name?: string;
  family?: "ADD_ON" | "ADD_ON_PACKAGES" | "CONSUMPTION" | "CREDIT" | "CREDIT_USAGE" | "FINANCE" | "LEGACY_ADD_ON" | "LEGACY_LICENSE" | "LICENSE" | "PRODUCT_USAGE_RATE" | "PROFESSIONAL_SERVICES" | "SUNSET" | "THIRD_PARTY_APPCONNECT" | "OTHER";
  unit_of_measure?: "CHARACTERS" | "CREDITS" | "EACH" | "MINUTES" | "PER_API_CALL" | "PER_ACCOUNT" | "PER_CONNECTION" | "PER_CONVERSATION" | "PER_GB" | "PER_INTERACTION" | "PER_MINUTE" | "PER_PAGE" | "PER_SEAT" | "PER_SESSION" | "PER_USE" | "PER_UTTERANCE" | "PER_VALIDATION" | "OTHER";
  charge_type?: "FIXED_RECURRING" | "ONE_TIME" | "ONE_TIME_CHARGE" | "RECURRING" | "USAGE" | "OTHER";
}>;
};
  _links?: {
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
});
  "getAccountSubscriptions": ({
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  _embedded?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  _links?: {};
} & {
  _embedded?: {
  subscriptions?: ReadonlyArray<{
  id?: string;
  account_id?: string;
  contract_number?: string;
  currency?: string;
  billing_period?: "ANNUAL" | "QUARTER" | "MONTH" | "SEMI_ANNUAL" | "OTHER";
  status?: "ACTIVATED" | "OTHER";
  term?: number;
  start_date?: string;
  end_date?: string;
  edition?: string;
  auto_renewal?: boolean;
  renewal_uplift?: number;
  product_id?: string;
  quantity?: number;
  unit_price?: number;
  billing_frequency?: "ANNUAL" | "QUARTER" | "MONTH" | "SEMI_ANNUAL" | "OTHER";
  pricing_model?: "FIXED_FEE" | "TIME_AND_MATERIALS" | "OTHER";
  concurrent?: boolean;
  seasonal?: boolean;
  contract_line_start_date?: string;
  contract_line_end_date?: string;
}>;
};
  _links?: {
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
});
  "getAccountInvoices": ({
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  _embedded?: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  _links?: {};
} & {
  _embedded?: {
  invoices?: ReadonlyArray<{
  id?: string;
  account_id?: string;
  number?: string;
  invoice_line_number?: string;
  date?: string;
  due_date?: string;
  currency?: string;
  total_invoice_amount?: number;
  product_id?: string;
  description?: string;
  product_name?: string;
  quantity?: number;
  rate?: number;
  amount?: number;
  total_tax_amount?: number;
}>;
};
  _links?: {
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
});
  "getAccountUsageMonth": ({
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  self?: {
  href?: string;
};
} & {
  _embedded?: {
  usage?: ReadonlyArray<{
  id?: string;
  account_id?: string;
  product_id?: string;
  aggr_product_id?: string;
  month?: string;
  type?: "AMD" | "API_REQUEST" | "CALL" | "CALL_SERVICE" | "CREDIT_COMMIT" | "DIALER" | "MESSAGE" | "NUMBER" | "PRODUCT_SERVICE" | "RECHARGE" | "SPEECH_TRANSCRIPTION" | "VOICEMAIL_TRANSCRIPTION" | "OTHER";
  description?: string;
  currency?: string;
  direction?: "INBOUND" | "OUTBOUND" | "OTHER";
  resolution?: "ABANDONED" | "ANSWERED" | "MACHINE" | "MISSED" | "VOICEMAIL" | "OTHER";
  unit?: "CHARS" | "CONVERSATIONS" | "GB" | "MINUTES" | "NUMBERS" | "PAGES" | "REQUESTS" | "SECONDS" | "SEGMENTS" | "SESSIONS" | "OTHER";
  price?: number;
  wallet_name?: string;
  number_of_units?: number;
  total_amount?: number;
}>;
};
  _links?: {
  first?: {
  href?: string;
};
  last?: {
  href?: string;
};
  next?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  self?: {
  href?: string;
};
};
});
  "createExpressAccount": {
  admin_email?: string;
  created_at?: string;
  id?: string;
  name?: string;
  organization_id?: string;
  updated_at?: string;
};
  "validateAccount": {};
  "automated_notifications_webhook_for_dce": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "emails-simulation-message": {
  id: string;
  message_id: string;
  thread_id: string;
  interaction_id: string;
};
  "createPrompt": {
  id: string;
  name: string;
  description: string;
  type: "asset" | "tts" | "url";
  asset_id: string;
  created_at?: string;
  created_by?: string;
  created_user_name?: string;
  updated_at: string;
  updated_by: string;
  updated_user_name?: string;
  _links: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
};
  "ListPrompts": {
  total: number;
  page: number;
  per_page: number;
  _embedded: {
  prompts: ReadonlyArray<{
  id: string;
  name: string;
  description: string;
  type: "asset" | "tts" | "url";
  asset_id: string;
  created_at?: string;
  created_by?: string;
  created_user_name?: string;
  updated_at: string;
  updated_by: string;
  updated_user_name?: string;
  _links: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
}>;
};
  _links: {
  self?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "getPromptById": {
  id: string;
  name: string;
  description: string;
  type: "asset" | "tts" | "url";
  asset_id: string;
  created_at?: string;
  created_by?: string;
  created_user_name?: string;
  updated_at: string;
  updated_by: string;
  updated_user_name?: string;
  _links: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
};
  "deletePromptById": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "PartiallyUpdatesPrompt": {
  id: string;
  name: string;
  description: string;
  type: "asset" | "tts" | "url";
  asset_id: string;
  created_at?: string;
  created_by?: string;
  created_user_name?: string;
  updated_at: string;
  updated_by: string;
  updated_user_name?: string;
  _links: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
};
  "updatePromptById": {
  id: string;
  name: string;
  description: string;
  type: "asset" | "tts" | "url";
  asset_id: string;
  created_at?: string;
  created_by?: string;
  created_user_name?: string;
  updated_at: string;
  updated_by: string;
  updated_user_name?: string;
  _links: {
  self?: {
  href?: string;
};
  download_link?: {
  href?: string;
};
};
};
  "prompts-id-download-link-get": {
  expires_in: number;
  _links: {
  location?: {
  href?: string;
};
};
};
  "GetUsageByPromptId": {
  _embedded: {
  prompt_usages: ReadonlyArray<{
  id: string;
  usage: number;
  flows_usage: number;
  queues_usage: number;
}>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "requestUploadLink": {
  id: string;
  _links: {
  upload_link?: string;
};
};
  "GetPromptsQuota": {
  id: string;
  account_id: string;
  max_value: number;
  current_count: number;
  threshold: number;
  _links: {
  self: {
  href: string;
};
};
};
  "promptsBulkOperation": ReadonlyArray<{
  path: string;
  method: "DOWNLOAD" | "DELETE";
  status: number;
  response_body?: {
  code?: string;
  message?: string;
  data?: TalkdeskFullApiSchemaJsonValue;
};
}>;
  "GetFlowsByPromptId": {
  total: number;
  page: number;
  per_page: number;
  _embedded: {
  prompt_flows: ReadonlyArray<{
  id: string;
  flow_id: string;
  flow_name: string;
  published_flow_version?: {
  flow_id: string;
  flow_name: string;
  flow_version_id: string;
  flow_version_status: "PUBLISHED" | "DRAFT";
  flow_trigger_type: "VOICE_INBOUND" | "API" | "MESSAGE_INBOUND" | "MODULE";
};
  draft_flow_version?: {
  flow_id: string;
  flow_name: string;
  flow_version_id: string;
  flow_version_status: "PUBLISHED" | "DRAFT";
  flow_trigger_type: "VOICE_INBOUND" | "API" | "MESSAGE_INBOUND" | "MODULE";
};
}>;
};
  _links: {
  self?: {
  href?: string;
};
  prev?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "SearchingFsiInsuranceAccount": {
  _embedded: {
  accounts: ReadonlyArray<{
  id?: string;
  account_number: string;
  first_name: string;
  last_name: string;
  policies?: ReadonlyArray<{
  policy_number: string;
}>;
  customer_since?: string;
  date_of_birth: string;
  account_status: string;
  delinquent?: boolean;
  primary_phone_number?: string;
  work_phone_number?: string;
  fax_phone_number?: string;
  home_phone_number?: string;
  mobile_phone_number?: string;
  tax_id?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
  primary_address?: {
  address_line_1: string;
  address_line_2?: string;
  address_line_3?: string;
  city: string;
  country: string;
  country_name?: string;
  location_description?: string;
  name?: string;
  state: string;
  state_name?: string;
  zip_code: string;
};
  _links?: {
  self: {
  href: string;
};
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
};
  "GettingFsiInsuranceAccount": {
  id?: string;
  account_number: string;
  first_name: string;
  last_name: string;
  policies?: ReadonlyArray<{
  policy_number: string;
}>;
  customer_since?: string;
  date_of_birth: string;
  account_status: string;
  delinquent?: boolean;
  primary_phone_number?: string;
  work_phone_number?: string;
  fax_phone_number?: string;
  home_phone_number?: string;
  mobile_phone_number?: string;
  tax_id?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
  primary_address?: {
  address_line_1: string;
  address_line_2?: string;
  address_line_3?: string;
  city: string;
  country: string;
  country_name?: string;
  location_description?: string;
  name?: string;
  state: string;
  state_name?: string;
  zip_code: string;
};
  _links?: {
  self: {
  href: string;
};
};
};
  "GettingFsiInsurancePolicies": {
  _embedded: {
  policies: ReadonlyArray<{
  number: string;
  delinquency_status: string;
  type: string;
  status: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
};
  "GettingFsiInsurancePoliciesPeriod": {
  id?: string;
  effective_date?: string;
  expiration_date?: string;
  organization_name?: string;
  organization_type?: string;
  pa_coverages?: ReadonlyArray<{
  cov_term?: ReadonlyArray<{
  cov_term_name: string;
  cov_term_value?: string;
}>;
  coverage_name: string;
}>;
  pa_vehicles?: ReadonlyArray<{
  color?: string;
  vin?: string;
  make?: string;
  model?: string;
  plate?: string;
  state?: string;
  serial_number: string;
  year?: number;
  vehicle_coverages?: ReadonlyArray<{
  cov_term?: ReadonlyArray<{
  cov_term_name: string;
  cov_term_value?: string;
}>;
  coverage_name: string;
}>;
}>;
  payment_schedule: ReadonlyArray<{
  amount: string;
  billing_due_date?: string;
  statement_due?: string;
}>;
  policy_contact_roles: ReadonlyArray<{
  date_of_birth?: string;
  email_address?: string;
  first_name?: string;
  gender?: string;
  last_name?: string;
  marital_status?: string;
  primary_address?: string;
  primary_phone_number: string;
  role?: string;
  ssn?: string;
}>;
  hop_dwellings?: ReadonlyArray<{
  location_number?: string;
  location_address?: string;
  territory_codes?: ReadonlyArray<{
  code?: string;
}>;
  dwelling_coverages?: ReadonlyArray<{
  coverage_name?: string;
  cov_terms?: ReadonlyArray<{
  cov_term_name: string;
  cov_term_value?: string;
}>;
}>;
}>;
  hop_coverages?: ReadonlyArray<{
  cov_term?: ReadonlyArray<{
  cov_term_name: string;
  cov_term_value?: string;
}>;
  coverage_name: string;
}>;
  hop_scheduled_personal_property_cov?: {
  cov_scheduled_items?: ReadonlyArray<{
  clauses: ReadonlyArray<{
  cov_terms: ReadonlyArray<{
  cov_term_name: string;
  cov_term_value?: string;
}>;
}>;
}>;
  scheduled_properties?: ReadonlyArray<{
  description?: string;
  serial_no: string;
  appraiser?: string;
  appraisal_info?: string;
  date_of_appraisal?: string;
}>;
};
  hop_valuable_personal_property?: {
  cov_scheduled_items: ReadonlyArray<{
  clauses: ReadonlyArray<{
  cov_terms: ReadonlyArray<{
  cov_term_name: string;
  cov_term_value?: string;
}>;
}>;
}>;
};
  policy_number: string;
  primary_named_insured?: string;
  producer_code?: string;
  producer_code_desc?: string;
  product: string;
  status?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
};
  "fsi-insurance-integrations-policies-get": {
  _embedded: {
  policies: ReadonlyArray<{
  id: string;
  number: string;
  type: string;
  type_name: string;
  insured_name: string;
  address: string;
  effective_at: string;
  renewal_at: string;
  status: string;
  status_name: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
};
  "fsi-insurance-integrations-policies-id-metadata-get": {
  id?: string;
  locations: ReadonlyArray<{
  _embedded: {
  locations: ReadonlyArray<{
  address_line_1: string;
  address_line_2?: string;
  address_line_3?: string;
  city: string;
  country: string;
  country_name?: string;
  location_description?: string;
  name?: string;
  state: string;
  state_name?: string;
  zip_code: string;
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
}>;
  contacts: ReadonlyArray<{
  contact_roles?: ReadonlyArray<{
  role?: string;
  role_name?: string;
}>;
  date_of_birth?: string;
  email_address?: string;
  first_name?: string;
  gender?: string;
  last_name?: string;
  license_number?: string;
  license_state?: string;
  marital_status?: string;
  primary_address: {
  address_line_1: string;
  address_line_2?: string;
  address_line_3?: string;
  city: string;
  country: string;
  country_name?: string;
  location_description?: string;
  name?: string;
  state: string;
  state_name?: string;
  zip_code: string;
};
  primary_phone_number?: string;
  ssn?: string;
}>;
  vehicles?: ReadonlyArray<{
  color?: string;
  vin?: string;
  make: string;
  model: string;
  license_plate?: string;
  license_state?: string;
  serial_number?: string;
  year: number;
}>;
  policy_locations?: ReadonlyArray<{
  address: {
  address_line_1: string;
  address_line_2?: string;
  address_line_3?: string;
  city: string;
  country: string;
  country_name?: string;
  location_description?: string;
  name?: string;
  state: string;
  state_name?: string;
  zip_code: string;
};
}>;
  dwelling_coverage_limit?: string;
  other_structures_coverage_limit?: string;
  personal_property_coverage_limit?: string;
  living_expenses_coverage_limit?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
};
  "fsi-insurance-integrations-claims-post": {
  id?: string;
  claim_number?: string;
};
  "fsi-insurance-integrations-account-holders-id-billing-get": {
  id?: string;
  max_policy_period_end_date?: string;
  next_invoice_due?: string;
  next_invoice_due_amount?: string;
  next_invoice_number?: string;
  total_paid?: string;
  total_unbilled?: string;
  total_currently_billed?: string;
  total_past_due?: string;
  total_outstanding?: string;
  delinquencies?: string;
  total_billed_invoices?: string;
  total_outstanding_invoices?: string;
  total_unapplied?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
};
  "fsi-insurance-integrations-account-holders-id-billing-details-get": {
  id?: string;
  account_number?: string;
  account_since?: string;
  active_policies?: string;
  billing_period?: string;
  payor?: string;
  send_invoices_by?: string;
  billing_address?: string;
  payment_instrument?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
};
  "fsi-insurance-integrations-accounts-account-number-claims-get": {
  _embedded: {
  claims: ReadonlyArray<{
  id?: string;
  claim_number: string;
  product: string;
  policy_number: string;
  claim_status: string;
  assigned_user?: string;
  description?: string;
  loss_date?: string;
  reported_date?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
  _links?: {
  self: {
  href: string;
};
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
};
  "fsi-insurance-integrations-claims-id-get": {
  id?: string;
  claim_number: string;
  claim_status?: string;
  description?: string;
  exposures?: ReadonlyArray<{
  _embedded: {
  exposures: ReadonlyArray<{
  claimant: string;
  adjuster: string;
  coverage: string;
  exposure_type: string;
  paid: string;
  recoveries: string;
  vehicle_details?: {
  driver_name: string;
  make: string;
  model: string;
  plate: string;
  relationship_to_insured: string;
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
}>;
  loss_cause?: string;
  loss_date?: string;
  loss_estimate?: string;
  loss_location?: string;
  paid?: string;
  policy_number: string;
  product?: string;
  recovered?: string;
  report_date?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
  _links?: {
  self: {
  href: string;
};
};
};
  "fsi-insurance-integrations-contacts-id-patch": {
  id: string;
  phone_number?: string;
  email?: string;
  address?: {
  address_line1?: string;
  address_line2?: string;
  country?: string;
  state?: string;
  city?: string;
  zip_code?: string;
  location_description?: string;
};
  updated_at: string;
};
  "fsi-insurance-integrations-document-deliveries-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "fsi-insurance-connections-claims-id-get": {
  id?: string;
  claim_number: string;
  claim_status?: string;
  description?: string;
  exposures?: ReadonlyArray<{
  _embedded: {
  exposures: ReadonlyArray<{
  claimant: string;
  adjuster: string;
  coverage: string;
  exposure_type: string;
  paid: string;
  recoveries: string;
  vehicle_details?: {
  driver_name: string;
  make: string;
  model: string;
  plate: string;
  relationship_to_insured: string;
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
}>;
  loss_cause?: string;
  loss_date?: string;
  loss_estimate?: string;
  loss_location?: string;
  paid?: string;
  policy_number: string;
  product?: string;
  recovered?: string;
  report_date?: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
  _links?: {
  self: {
  href: string;
};
};
};
  "fsi-insurance-connections-policies-policy-number-claims-get": {
  _embedded: {
  claims: ReadonlyArray<{
  id: string;
  claim_number: string;
  product: string;
  policy_number: string;
  claim_status: string;
  description?: string;
  assigned_user: string;
  loss_date: string;
  reported_date: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
  _links?: {
  self: {
  href: string;
};
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
};
  "fsi-insurance-connections-accounts-account-number-claims-get": {
  _embedded: {
  claims: ReadonlyArray<{
  id: string;
  claim_number: string;
  product: string;
  policy_number: string;
  claim_status: string;
  description?: string;
  assigned_user: string;
  loss_date: string;
  reported_date: string;
  custom_fields?: {
  readonly [key: string]: string | undefined;
};
  _links?: {
  self: {
  href: string;
};
};
}>;
};
  total: number;
  _links?: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "erc-ecommerce-connections-customers-customer-id-shipments-get": {
  _embedded: {
  shipments?: ReadonlyArray<{
  id: string;
  brand?: string;
  customer_id?: string;
  order_id?: string;
  delivery_quantity?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  delivery_staff?: string;
  latest_status_info?: string;
  last_updated?: string;
  created_time?: string;
  description?: string;
  shipping_provider?: string;
  shipping_date?: string;
  shipping_address?: {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  tracking_info?: {
  tracking_number?: string;
  tracking_carrier?: string;
  external_url?: string;
};
  items?: ReadonlyArray<{
  id?: string;
  product_id?: string;
  name?: string;
  description?: string;
  brand?: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: string;
  sku?: string;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post": {
  _links: {
  self: {
  href?: string;
};
};
};
  "erc-ecommerce-connections-customers-customer-id-get": {
  id: string;
  first_name?: string;
  last_name?: string;
  customer_since?: string;
  shipping_addresses?: ReadonlyArray<{
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
  default?: boolean;
}>;
  integration_info?: ({
  external_url: string;
  type: ("UNKNOWN" | "SHOPIFY");
});
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  brand?: string;
  _links: {
  self: {
  href?: string;
};
};
};
  "erc-ecommerce-connections-customers-customer-id-orders-get": {
  _embedded: {
  orders?: ReadonlyArray<({
  id: string;
  order_number: string;
  customer_id?: string;
  purchase_datetime?: string;
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_addresses?: ReadonlyArray<{
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
  default?: boolean;
}>;
  items_number?: number;
  price_summary?: {
  original_total_amount: {
  value: number;
  currency: string;
};
  discounts_amount?: {
  value: number;
  currency: string;
};
  shipping_amount?: {
  value: number;
  currency: string;
};
  taxes_amount?: {
  value: number;
  currency: string;
};
  final_total_amount: {
  value: number;
  currency: string;
};
  net_payment_amount?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  total_refunded_amount?: {
  value: number;
  currency: string;
};
};
  order_extra_info?: {
  highlighted_item_image_url?: string;
};
  status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  brand?: string;
  is_refundable?: boolean;
  is_returnable?: boolean;
} & {
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
})>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get": {
  id: string;
  customer_id?: string;
  status_info?: ReadonlyArray<{
  generic_type: string;
  detailed_type?: string;
  status_date_time?: string;
}>;
  status_info_current_index?: number;
  order_number: string;
  purchase_datetime?: string;
  tracking_info?: {
  tracking_number: string;
  external_url?: string;
};
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_addresses?: ReadonlyArray<{
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
  default?: boolean;
}>;
  highlighted_item?: ({
  id: string;
  name: string;
  description?: string;
  brand?: string;
  price: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  deliverable_quantity?: number;
  refundable_quantity?: number;
  deliveries?: ReadonlyArray<{
  id: string;
  delivery_quantity?: number;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  service_level?: string;
  description?: string;
  latest_status_info?: {
  type: string;
  status_date_time?: string;
};
  tracking_info?: {
  tracking_number: string;
  external_url?: string;
};
  returnable_quantity?: number;
  last_update?: string;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
});
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  brand?: string;
  is_refundable?: boolean;
  is_returnable?: boolean;
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
  _links?: {
  self: {
  href?: string;
};
};
};
  "erc-ecommerce-connections-customers-shipments-available-slots-get": {
  _embedded: {
  delivery_slots: ReadonlyArray<{
  id: string;
  brand?: string;
  date?: string;
  time?: {
  start?: string;
  end?: string;
};
  timezone?: string;
  shipping_provider?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "erc-ecommerce-connections-products-get": {
  _embedded: {
  products?: ReadonlyArray<{
  id: string;
  title?: string;
  brand?: string;
  description?: string;
  default_variant_id?: string;
  default_image_id?: string;
  images?: ReadonlyArray<{
  id: string;
  image_url: string;
}>;
  options?: ReadonlyArray<{
  name: string;
  values: ReadonlyArray<string>;
}>;
  variants?: ReadonlyArray<{
  id: string;
  sku?: string;
  price?: {
  value: number;
  currency: string;
};
  images_ids?: ReadonlyArray<string>;
  options?: {
  readonly [key: string]: string | undefined;
};
  available_quantity?: number;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "ercEcommerceConnectionsGetCustomerOrderItems": {
  _embedded: {
  items: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  brand?: string;
  price: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  deliverable_quantity?: number;
  refundable_quantity?: number;
  deliveries?: ReadonlyArray<{
  id: string;
  delivery_quantity?: number;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  service_level?: string;
  description?: string;
  latest_status_info?: {
  type: string;
  status_date_time?: string;
};
  tracking_info?: {
  tracking_number: string;
  external_url?: string;
};
  returnable_quantity?: number;
  last_update?: string;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
  refunds?: ReadonlyArray<{
  id: string;
  created_at?: string;
  updated_at?: string;
  note?: string;
  order_adjustments?: ReadonlyArray<{
  id: string;
  reason?: string;
  amount: number;
  currency: string;
}>;
  refund_line_items?: ReadonlyArray<{
  line_item_id: string;
  quantity: number;
  amount: number;
  currency: string;
  line_item?: {
  id: string;
  name: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  description?: string;
};
}>;
  transactions?: ReadonlyArray<{
  id: string;
  created_at: string;
  amount: number;
  currency: string;
  gateway?: string;
  kind: string;
  payment_detail?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
  is_refunded?: boolean;
};
}>;
  shipping_lines?: ReadonlyArray<{
  id: string;
  amount: number;
  currency: string;
}>;
  issued_by?: ({
  display_name: string;
  source: "TALKDESK_AGENT" | "SHOPIFY_ADMIN" | "THIRD_PARTY_APP" | "EXTERNAL_SOURCE";
  happened_at?: string;
  raw_app_title?: string;
});
}>;
  returns?: ReadonlyArray<{
  id: string;
  name: string;
  status: string;
  closed_at?: string;
  created_at?: string;
  request_approved_at?: string;
  refund_ids?: ReadonlyArray<string>;
  return_line_items?: ReadonlyArray<{
  id: string;
  line_item_id: string;
  quantity: number;
  processed_quantity: number;
  return_reason?: string;
  return_reason_note?: string;
  customer_note?: string;
  restocking_fee?: {
  id?: string;
  percentage: number;
  amount: number;
  currency: string;
};
  line_item?: {
  id: string;
  name: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  description?: string;
};
}>;
  shipping_fees?: ReadonlyArray<{
  id: string;
  amount: number;
  currency: string;
}>;
  exchange_line_items?: ReadonlyArray<{
  id: string;
  line_item_ids: ReadonlyArray<string>;
  quantity: number;
  processed_quantity: number;
  product_variant?: {
  id: string;
  sku?: string;
  price?: {
  value: number;
  currency: string;
};
  images_ids?: ReadonlyArray<string>;
  options?: {
  readonly [key: string]: string | undefined;
};
  available_quantity?: number;
};
}>;
  decline?: {
  note?: string;
  reason: string;
};
  tracking_info?: ReadonlyArray<{
  tracking_number: string;
  external_url?: string;
}>;
}>;
};
  _links: {
  self: {
  href?: string;
};
};
};
  "ercEcommerceConnectionsCancelCustomerOrderItems": {
  _embedded: {
  items: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  brand?: string;
  price: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  deliverable_quantity?: number;
  refundable_quantity?: number;
  deliveries?: ReadonlyArray<{
  id: string;
  delivery_quantity?: number;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  service_level?: string;
  description?: string;
  latest_status_info?: {
  type: string;
  status_date_time?: string;
};
  tracking_info?: {
  tracking_number: string;
  external_url?: string;
};
  returnable_quantity?: number;
  last_update?: string;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
  refunds?: ReadonlyArray<{
  id: string;
  created_at?: string;
  updated_at?: string;
  note?: string;
  order_adjustments?: ReadonlyArray<{
  id: string;
  reason?: string;
  amount: number;
  currency: string;
}>;
  refund_line_items?: ReadonlyArray<{
  line_item_id: string;
  quantity: number;
  amount: number;
  currency: string;
  line_item?: {
  id: string;
  name: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  description?: string;
};
}>;
  transactions?: ReadonlyArray<{
  id: string;
  created_at: string;
  amount: number;
  currency: string;
  gateway?: string;
  kind: string;
  payment_detail?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
  is_refunded?: boolean;
};
}>;
  shipping_lines?: ReadonlyArray<{
  id: string;
  amount: number;
  currency: string;
}>;
  issued_by?: ({
  display_name: string;
  source: "TALKDESK_AGENT" | "SHOPIFY_ADMIN" | "THIRD_PARTY_APP" | "EXTERNAL_SOURCE";
  happened_at?: string;
  raw_app_title?: string;
});
}>;
  returns?: ReadonlyArray<{
  id: string;
  name: string;
  status: string;
  closed_at?: string;
  created_at?: string;
  request_approved_at?: string;
  refund_ids?: ReadonlyArray<string>;
  return_line_items?: ReadonlyArray<{
  id: string;
  line_item_id: string;
  quantity: number;
  processed_quantity: number;
  return_reason?: string;
  return_reason_note?: string;
  customer_note?: string;
  restocking_fee?: {
  id?: string;
  percentage: number;
  amount: number;
  currency: string;
};
  line_item?: {
  id: string;
  name: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  description?: string;
};
}>;
  shipping_fees?: ReadonlyArray<{
  id: string;
  amount: number;
  currency: string;
}>;
  exchange_line_items?: ReadonlyArray<{
  id: string;
  line_item_ids: ReadonlyArray<string>;
  quantity: number;
  processed_quantity: number;
  product_variant?: {
  id: string;
  sku?: string;
  price?: {
  value: number;
  currency: string;
};
  images_ids?: ReadonlyArray<string>;
  options?: {
  readonly [key: string]: string | undefined;
};
  available_quantity?: number;
};
}>;
  decline?: {
  note?: string;
  reason: string;
};
  tracking_info?: ReadonlyArray<{
  tracking_number: string;
  external_url?: string;
}>;
}>;
};
  _links: {
  self: {
  href?: string;
};
};
};
  "erc-ecommerce-connections-customers-cart-get": ({
  cart_id: string;
  customer_id?: string;
  total_quantity?: string;
  currency?: string;
  cart_status?: string;
  created_time?: string;
  updated_time?: string;
  cost: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
  cart_lines?: ReadonlyArray<{
  line_id: string;
  variant_id: string;
  variant_title: string;
  product_id: string;
  sku: string;
  default_image: string;
  quantity_available?: string;
  quantity: string;
  url?: string;
  cost: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_lines_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
}>;
  brand?: string;
  custom_fields_type?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links?: {
  self?: {
  href?: string;
};
};
});
  "erc-ecommerce-customers-customer-id-get": {
  id: string;
  first_name?: string;
  last_name?: string;
  brand?: string;
  customer_since?: string;
  addresses?: ReadonlyArray<({
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
} & {
  id?: string;
  default?: boolean;
})>;
  integration_info?: ({
  external_url: string;
  type?: ("UNKNOWN" | "SHOPIFY");
});
  average_order_value?: {
  value: number;
  currency: string;
};
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links: {
  self: {
  href?: string;
};
};
};
  "erc-ecommerce-customers-customer-id-orders-get": {
  _embedded: {
  orders: ReadonlyArray<{
  id: string;
  order_number: string;
  customer_id?: string;
  brand?: string;
  purchase_datetime?: string;
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  billing_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  items_number?: number;
  price_summary?: {
  original_total_amount: {
  value: number;
  currency: string;
};
  discounts_amount?: {
  value: number;
  currency: string;
};
  shipping_amount?: {
  value: number;
  currency: string;
};
  taxes_amount?: {
  value: number;
  currency: string;
};
  final_total_amount: {
  value: number;
  currency: string;
};
  net_payment_amount?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  total_refunded_amount?: {
  value: number;
  currency: string;
};
};
  payment_details?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
};
  order_extra_info?: {
  highlighted_item_image_url?: string;
};
  status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  is_refundable?: boolean;
  is_returnable?: boolean;
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
}>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-customers-customer-id-orders-order-id-get": ({
  id: string;
  order_number: string;
  customer_id?: string;
  brand?: string;
  purchase_datetime?: string;
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  billing_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  items_number?: number;
  price_summary?: {
  original_total_amount: {
  value: number;
  currency: string;
};
  discounts_amount?: {
  value: number;
  currency: string;
};
  shipping_amount?: {
  value: number;
  currency: string;
};
  taxes_amount?: {
  value: number;
  currency: string;
};
  final_total_amount: {
  value: number;
  currency: string;
};
  net_payment_amount?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  total_refunded_amount?: {
  value: number;
  currency: string;
};
};
  payment_details?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
};
  order_extra_info?: {
  highlighted_item_image_url?: string;
};
  status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  is_refundable?: boolean;
  is_returnable?: boolean;
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
} & {
  _links?: {
  self: {
  href?: string;
};
};
});
  "erc-ecommerce-customers-customer-id-orders-order-id-patch": {
  id: string;
  order_number: string;
  customer_id?: string;
  brand?: string;
  purchase_datetime?: string;
  delivery_type?: "UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING";
  shipping_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  billing_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  items_number?: number;
  price_summary?: {
  original_total_amount: {
  value: number;
  currency: string;
};
  discounts_amount?: {
  value: number;
  currency: string;
};
  shipping_amount?: {
  value: number;
  currency: string;
};
  taxes_amount?: {
  value: number;
  currency: string;
};
  final_total_amount: {
  value: number;
  currency: string;
};
  net_payment_amount?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  total_refunded_amount?: {
  value: number;
  currency: string;
};
};
  payment_details?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
};
  order_extra_info?: {
  highlighted_item_image_url?: string;
};
  status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  is_refundable?: boolean;
  is_returnable?: boolean;
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
  tags?: ReadonlyArray<string>;
};
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get": {
  _embedded: {
  items: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  brand?: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  deliverable_quantity?: number;
  refundable_quantity?: number;
  deliveries?: ReadonlyArray<({
  id?: string;
  delivery_quantity?: number;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  service_level?: string;
  description?: string;
  latest_status_info?: ({
  type?: ("UNKNOWN" | "ATTEMPTED_DELIVERY" | "READY_FOR_PICKUP" | "PICKED_UP" | "CONFIRMED" | "IN_TRANSIT" | "OUT_FOR_DELIVERY" | "DELIVERED" | "FAILURE");
  status_date_time?: string;
});
  tracking_info?: {
  tracking_number?: string;
  external_url?: string;
};
  returnable_quantity?: number;
  last_update?: string;
})>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
  refunds?: ReadonlyArray<{
  id: string;
  created_at?: string;
  updated_at?: string;
  note?: string;
  order_adjustments?: ReadonlyArray<{
  id: string;
  reason?: string;
  amount: number;
  currency: string;
}>;
  refund_line_items?: ReadonlyArray<{
  line_item_id: string;
  quantity: number;
  amount: number;
  currency: string;
  line_item?: {
  id: string;
  name: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  description?: string;
};
}>;
  transactions?: ReadonlyArray<{
  id: string;
  created_at: string;
  amount: number;
  currency: string;
  gateway?: string;
  kind: string;
  payment_detail?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
};
}>;
  shipping_lines?: ReadonlyArray<{
  id: string;
  amount: number;
  currency: string;
}>;
  issued_by?: ({
  display_name: string;
  source: "TALKDESK_AGENT" | "SHOPIFY_ADMIN" | "THIRD_PARTY_APP" | "EXTERNAL_SOURCE";
  happened_at?: string;
  raw_app_title?: string;
});
}>;
  returns?: ReadonlyArray<{
  id: string;
  name: string;
  status: string;
  closed_at?: string;
  created_at?: string;
  request_approved_at?: string;
  refund_ids?: ReadonlyArray<string>;
  return_line_items?: ReadonlyArray<{
  id: string;
  line_item_id: string;
  quantity: number;
  processed_quantity: number;
  return_reason?: string;
  return_reason_note?: string;
  customer_note?: string;
  restocking_fee?: {
  id?: string;
  percentage: number;
  amount: number;
  currency: string;
};
  line_item?: {
  id: string;
  name: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  description?: string;
};
}>;
  shipping_fees?: ReadonlyArray<{
  id: string;
  amount: number;
  currency: string;
}>;
  exchange_line_items?: ReadonlyArray<{
  id: string;
  line_item_ids: ReadonlyArray<string>;
  quantity: number;
  processed_quantity: number;
  product_variant?: {
  id: string;
  sku?: string;
  price?: {
  value: number;
  currency: string;
};
  images_ids?: ReadonlyArray<string>;
  options?: {
  readonly [key: string]: string | undefined;
};
  available_quantity?: number;
};
}>;
  decline?: {
  note?: string;
  reason: string;
};
  tracking_info?: ReadonlyArray<{
  tracking_number?: string;
  external_url?: string;
}>;
}>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put": {
  _embedded: {
  items: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  brand?: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  deliverable_quantity?: number;
  refundable_quantity?: number;
  deliveries?: ReadonlyArray<({
  id?: string;
  delivery_quantity?: number;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  service_level?: string;
  description?: string;
  latest_status_info?: ({
  type?: ("UNKNOWN" | "ATTEMPTED_DELIVERY" | "READY_FOR_PICKUP" | "PICKED_UP" | "CONFIRMED" | "IN_TRANSIT" | "OUT_FOR_DELIVERY" | "DELIVERED" | "FAILURE");
  status_date_time?: string;
});
  tracking_info?: {
  tracking_number?: string;
  external_url?: string;
};
  returnable_quantity?: number;
  last_update?: string;
})>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post": ({
  id: string;
  order_number: string;
  customer_id?: string;
  brand?: string;
  purchase_datetime?: string;
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  billing_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  items_number?: number;
  price_summary?: {
  original_total_amount: {
  value: number;
  currency: string;
};
  discounts_amount?: {
  value: number;
  currency: string;
};
  shipping_amount?: {
  value: number;
  currency: string;
};
  taxes_amount?: {
  value: number;
  currency: string;
};
  final_total_amount: {
  value: number;
  currency: string;
};
  net_payment_amount?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  total_refunded_amount?: {
  value: number;
  currency: string;
};
};
  payment_details?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
};
  order_extra_info?: {
  highlighted_item_image_url?: string;
};
  status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  is_refundable?: boolean;
  is_returnable?: boolean;
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
});
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post": ({
  id: string;
  order_number: string;
  customer_id?: string;
  brand?: string;
  purchase_datetime?: string;
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  billing_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  items_number?: number;
  price_summary?: {
  original_total_amount: {
  value: number;
  currency: string;
};
  discounts_amount?: {
  value: number;
  currency: string;
};
  shipping_amount?: {
  value: number;
  currency: string;
};
  taxes_amount?: {
  value: number;
  currency: string;
};
  final_total_amount: {
  value: number;
  currency: string;
};
  net_payment_amount?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  total_refunded_amount?: {
  value: number;
  currency: string;
};
};
  payment_details?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
};
  order_extra_info?: {
  highlighted_item_image_url?: string;
};
  status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  is_refundable?: boolean;
  is_returnable?: boolean;
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
});
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get": {
  use_new_cancel_flow: boolean;
  supports_refund_on_cancel: boolean;
  cancel_reasons: ReadonlyArray<{
  value: string;
  label: string;
}>;
  refund_payments?: ({
  label: string;
  amount: {
  value: number;
  currency: string;
};
  formatted_gateway?: string | null;
});
  refundable_items: ReadonlyArray<{
  line_item_id: string;
  title: string;
  sku?: string | null;
  variant_title?: string | null;
  image_url?: string | null;
  quantity: number;
  max_refundable_quantity: number;
  restockable: boolean;
  original_unit_price: {
  value: number;
  currency: string;
};
}>;
};
  "erc-ecommerce-customers-customer-id-shipments-get": {
  _embedded: {
  shipments: ReadonlyArray<{
  id: string;
  brand?: string;
  customer_id?: string;
  order_id?: string;
  delivery_quantity?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  delivery_staff?: string;
  latest_status_info?: string;
  last_updated?: string;
  created_time?: string;
  description?: string;
  shipping_provider?: string;
  shipping_date?: string;
  shipping_address?: {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  tracking_info?: {
  tracking_number?: string;
  tracking_carrier?: string;
  external_url?: string;
};
  items?: ReadonlyArray<{
  id?: string;
  product_id?: string;
  name?: string;
  description?: string;
  brand?: string;
  price?: {
  value?: string;
  currency?: string;
};
  image_url?: string;
  quantity?: string;
  sku?: string;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-customers-customer-id-shipments-schedule-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "erc-ecommerce-customers-customer-id-most-recent-order-get": {
  id: string;
  customer_id?: string;
  brand?: string;
  status_info?: ReadonlyArray<{
  generic_type?: ("UNKNOWN" | "CONFIRMED" | "ON_ITS_WAY" | "OUT_FOR_DELIVERY" | "DELIVERED");
  detailed_type?: ("UNKNOWN" | "ATTEMPTED_DELIVERY" | "READY_FOR_PICKUP" | "PICKED_UP" | "CONFIRMED" | "IN_TRANSIT" | "OUT_FOR_DELIVERY" | "DELIVERED" | "FAILURE");
  status_date_time?: string;
}>;
  status_info_current_index?: number;
  order_number: string;
  purchase_datetime?: string;
  tracking_info?: {
  tracking_number?: string;
  external_url?: string;
};
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
  highlighted_item?: ({
  id: string;
  name: string;
  description?: string;
  brand?: string;
  price?: {
  value: number;
  currency: string;
};
  image_url?: string;
  quantity?: number;
  sku?: string;
  deliverable_quantity?: number;
  refundable_quantity?: number;
  deliveries?: ReadonlyArray<({
  id?: string;
  delivery_quantity?: number;
  carrier?: string;
  delivery_type?: string;
  delivery_date_start?: string;
  delivery_date_end?: string;
  shipping_date?: string;
  service_level?: string;
  description?: string;
  latest_status_info?: ({
  type?: ("UNKNOWN" | "ATTEMPTED_DELIVERY" | "READY_FOR_PICKUP" | "PICKED_UP" | "CONFIRMED" | "IN_TRANSIT" | "OUT_FOR_DELIVERY" | "DELIVERED" | "FAILURE");
  status_date_time?: string;
});
  tracking_info?: {
  tracking_number?: string;
  external_url?: string;
};
  returnable_quantity?: number;
  last_update?: string;
})>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
});
  is_refundable?: boolean;
  is_returnable?: boolean;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  _links?: {
  self: {
  href?: string;
};
};
};
  "erc-ecommerce-customers-shipments-available-slots-get": {
  _embedded: {
  delivery_slots: ReadonlyArray<{
  id: string;
  brand?: string;
  date?: string;
  time?: {
  start?: string;
  end?: string;
};
  timezone?: string;
  shipping_provider?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "erc-ecommerce-cart-items-put": {
  cart_id: string;
  customer_id?: string;
  total_quantity?: string;
  currency?: string;
  checkout?: string;
  cart_status?: string;
  created_time?: string;
  updated_time?: string;
  cost?: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
  cart_lines?: ReadonlyArray<{
  line_id: string;
  variant_id: string;
  variant_title: string;
  product_id: string;
  sku: string;
  default_image: string;
  quantity_available?: string;
  quantity: string;
  url?: string;
  cost: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_lines_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
}>;
  brand?: string;
  custom_fields_type?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  delivery_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string | null;
  country_code?: string;
} | null;
  selected_delivery_option?: {
  handle: string;
  title?: string;
  estimated_cost?: {
  amount: string;
  currency_code: string;
} | null;
} | null;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "erc-ecommerce-cart-cart-id-delivery-address-put": {
  delivery_group_id?: string | null;
  delivery_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string | null;
  country_code?: string;
} | null;
  available_delivery_options: ReadonlyArray<{
  handle: string;
  title?: string;
  estimated_cost?: {
  amount: string;
  currency_code: string;
} | null;
}>;
};
  "erc-ecommerce-cart-cart-id-delivery-option-put": {
  selected_delivery_option?: {
  handle: string;
  title?: string;
  estimated_cost?: {
  amount: string;
  currency_code: string;
} | null;
} | null;
};
  "erc-ecommerce-cart-cart-id-bind-post": {
  cart_id: string;
  customer_id?: string;
  total_quantity?: string;
  currency?: string;
  checkout?: string;
  cart_status?: string;
  created_time?: string;
  updated_time?: string;
  cost?: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
  cart_lines?: ReadonlyArray<{
  line_id: string;
  variant_id: string;
  variant_title: string;
  product_id: string;
  sku: string;
  default_image: string;
  quantity_available?: string;
  quantity: string;
  url?: string;
  cost: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_lines_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
}>;
  brand?: string;
  custom_fields_type?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  delivery_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string | null;
  country_code?: string;
} | null;
  selected_delivery_option?: {
  handle: string;
  title?: string;
  estimated_cost?: {
  amount: string;
  currency_code: string;
} | null;
} | null;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "erc-ecommerce-customers-cart-get": ({
  cart_id: string;
  customer_id?: string;
  total_quantity?: string;
  currency?: string;
  checkout?: string;
  cart_status?: string;
  created_time?: string;
  updated_time?: string;
  cost?: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
  cart_lines?: ReadonlyArray<{
  line_id: string;
  variant_id: string;
  variant_title: string;
  product_id: string;
  sku: string;
  default_image: string;
  quantity_available?: string;
  quantity: string;
  url?: string;
  cost: {
  base_amount?: string;
  discounts_amount?: string;
  final_amount: string;
  taxes_amount?: string;
};
  cart_lines_discounts?: ReadonlyArray<{
  discounted_amount: string;
  type: string;
  discount_code: string;
  discount_name?: string;
  discount_description?: string;
}>;
}>;
  brand?: string;
  custom_fields_type?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  delivery_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string | null;
  country_code?: string;
} | null;
  selected_delivery_option?: {
  handle: string;
  title?: string;
  estimated_cost?: {
  amount: string;
  currency_code: string;
} | null;
} | null;
  _links?: {
  self?: {
  href?: string;
};
};
});
  "erc-ecommerce-orders-get": {
  _embedded: {
  orders?: ReadonlyArray<({
  id: string;
  order_number: string;
  customer_id?: string;
  brand?: string;
  purchase_datetime?: string;
  delivery_type?: ("UNKNOWN" | "LOCAL_DELIVERY" | "LOCAL_PICKUP" | "SHIPPING");
  shipping_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  billing_address?: {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  items_number?: number;
  price_summary?: {
  original_total_amount: {
  value: number;
  currency: string;
};
  discounts_amount?: {
  value: number;
  currency: string;
};
  shipping_amount?: {
  value: number;
  currency: string;
};
  taxes_amount?: {
  value: number;
  currency: string;
};
  final_total_amount: {
  value: number;
  currency: string;
};
  net_payment_amount?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  total_refunded_amount?: {
  value: number;
  currency: string;
};
};
  payment_details?: {
  card_brand?: string;
  card_brand_image_url?: string;
  card_number?: string;
};
  order_extra_info?: {
  highlighted_item_image_url?: string;
};
  status?: string;
  cancellation_status?: string;
  fulfillment_status?: string;
  payment_status?: string;
  delivery_status?: string;
  return_status?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  is_refundable?: boolean;
  is_returnable?: boolean;
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
} & {
  is_cancellable?: boolean;
  is_change_shipping_address_allowed?: boolean;
})>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-products-get": {
  _embedded: {
  products?: ReadonlyArray<{
  id: string;
  title?: string;
  brand?: string;
  description?: string;
  default_variant_id?: string;
  default_image_id?: string;
  images?: ReadonlyArray<{
  id: string;
  image_url: string;
}>;
  options?: ReadonlyArray<{
  name: string;
  values: ReadonlyArray<string>;
}>;
  variants?: ReadonlyArray<{
  id: string;
  sku?: string;
  price?: {
  value: number;
  currency: string;
};
  images_ids?: ReadonlyArray<string>;
  options?: {
  readonly [key: string]: string | undefined;
};
  available_quantity?: number;
}>;
}>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-brand-get": {
  multiple_integrations?: ReadonlyArray<{
  brand_name?: string;
  brand_domain_id?: string;
  integration_id?: string;
}>;
  _links: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-customers-technician-visits-available-slots-get": {
  _embedded: {
  technician_visit_slots: ReadonlyArray<{
  id: string;
  brand?: string;
  date?: string;
  time?: {
  start?: string;
  end?: string;
};
  timezone?: string;
  technician?: {
  id: string;
  name?: string;
  phone_number?: string;
  scheduling_zone?: string;
};
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "erc-ecommerce-customers-customer-id-technician-visits-get": {
  _embedded: {
  visits: ReadonlyArray<{
  id: string;
  status?: string;
  type?: string;
  brand?: string;
  address?: {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  zip_code?: string;
  city?: string;
  region_code?: string;
  country_code?: string;
};
  date?: string;
  time?: {
  start?: string;
  end?: string;
};
  timezone?: string;
  technician?: {
  id: string;
  name?: string;
  phone_number?: string;
  scheduling_zone?: string;
};
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "erc-ecommerce-external-customers-get": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded?: {
  contacts?: ReadonlyArray<{
  customer_id: string;
  name: string;
  brand?: string | null;
  updated_at: string;
  created_at: string;
  emails?: ReadonlyArray<string>;
  phones?: ReadonlyArray<string>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-shopify-webhooks-handler-credentials-get": ({
  if_multiple_integration: boolean;
  default_integration?: {
  integration_type?: string;
  brand_name?: string;
  brand_domain_id?: string;
  authorization_id?: string;
  integration_id?: string;
  shopify_integration_credential?: {
  shopify_store_id?: string;
  shopify_store_domain?: string;
  shopify_api_key?: string;
  shopify_api_secret?: string;
  shopify_api_access_token?: string;
};
  callbar_customer_search?: boolean;
};
  multiple_integrations?: ReadonlyArray<{
  integration_type?: string;
  brand_name?: string;
  brand_domain_id?: string;
  authorization_id?: string;
  integration_id?: string;
  shopify_integration_credential?: {
  shopify_store_id?: string;
  shopify_store_domain?: string;
  shopify_api_key?: string;
  shopify_api_secret?: string;
  shopify_api_access_token?: string;
};
  callbar_customer_search?: boolean;
}>;
  callbar_customer_search?: boolean;
} & {
  _links: {
  self: {
  href?: string;
};
};
});
  "erc-ecommerce-shopify-webhooks-handler-credentials-put": ({
  if_multiple_integration: boolean;
  default_integration?: {
  integration_type?: string;
  brand_name?: string;
  brand_domain_id?: string;
  authorization_id?: string;
  integration_id?: string;
  shopify_integration_credential?: {
  shopify_store_id?: string;
  shopify_store_domain?: string;
  shopify_api_key?: string;
  shopify_api_secret?: string;
  shopify_api_access_token?: string;
};
  callbar_customer_search?: boolean;
};
  multiple_integrations?: ReadonlyArray<{
  integration_type?: string;
  brand_name?: string;
  brand_domain_id?: string;
  authorization_id?: string;
  integration_id?: string;
  shopify_integration_credential?: {
  shopify_store_id?: string;
  shopify_store_domain?: string;
  shopify_api_key?: string;
  shopify_api_secret?: string;
  shopify_api_access_token?: string;
};
  callbar_customer_search?: boolean;
}>;
  callbar_customer_search?: boolean;
} & {
  _links: {
  self: {
  href?: string;
};
};
});
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "erc-ecommerce-return-reasons-get": {
  reasons: ReadonlyArray<{
  type: string;
  description: string;
  sub_reasons?: ReadonlyArray<string>;
}>;
  _links: {
  self: {
  href?: string;
};
};
};
  "erc-ecommerce-return-calculations-post": {
  taxes_included: boolean;
  return_item_amount: {
  value: number;
  currency: string;
};
  exchange_item_amount?: {
  value: number;
  currency: string;
};
  subtotal_amount?: {
  value: number;
  currency: string;
};
  return_shipping_fee_amount?: {
  value: number;
  currency: string;
};
  restocking_fee_amount?: {
  value: number;
  currency: string;
};
  taxes?: {
  value: number;
  currency: string;
};
  total_outstanding_amount?: {
  value: number;
  currency: string;
};
  return_item_discount_amount?: {
  value: number;
  currency: string;
};
  customer_collect_amount?: {
  value: number;
  currency: string;
};
  restocking_percentage?: number;
  _links: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-order-cancel-return-return-id-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "erc-ecommerce-order-create-return-post": {
  order_id: string;
  return_id: string;
  status: string;
  name?: string;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-refund-suggested-post": {
  amount: {
  value: number;
  currency: string;
};
  maximum_refundable: {
  value: number;
  currency: string;
};
  subtotal: {
  value: number;
  currency: string;
};
  total_tax: {
  value: number;
  currency: string;
};
  total_duties: {
  value: number;
  currency: string;
};
  discounted_subtotal: {
  value: number;
  currency: string;
};
  shipping: {
  amount: {
  value: number;
  currency: string;
};
  maximum_refundable: {
  value: number;
  currency: string;
};
  tax: {
  value: number;
  currency: string;
};
};
  suggested_transactions: ReadonlyArray<{
  gateway?: string;
  kind: string;
  amount: {
  value: number;
  currency: string;
};
  maximum_refundable?: {
  value: number;
  currency: string;
};
  parent_transaction_id?: string;
}>;
  suggested_refund_methods: ReadonlyArray<{
  type: string;
  amount: {
  value: number;
  currency: string;
};
  maximum_refundable: {
  value: number;
  currency: string;
};
}>;
  refund_line_items: ReadonlyArray<{
  line_item_id: string;
  title: string;
  sku?: string;
  variant_title?: string;
  image_url?: string;
  quantity: number;
  max_refundable_quantity: number;
  restockable: boolean;
  original_unit_price: {
  value: number;
  currency: string;
};
  subtotal: {
  value: number;
  currency: string;
};
  total_tax: {
  value: number;
  currency: string;
};
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
  return_context?: {
  return_id: string;
  return_name: string;
  order_id: string;
  status: string;
  line_items?: ReadonlyArray<{
  line_item_id: string;
  quantity: number;
  return_reason?: string;
  return_reason_note?: string;
  restocking_fee_percentage?: number;
  restocking_fee_amount?: {
  value: number;
  currency: string;
};
}>;
};
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  deductions?: {
  return_shipping?: {
  value: number;
  currency: string;
};
  restocking_fees?: {
  value: number;
  currency: string;
};
  total: {
  value: number;
  currency: string;
};
};
  refund_owed?: {
  value: number;
  currency: string;
};
  return_item_discount?: {
  value: number;
  currency: string;
};
  taxes_included?: boolean;
  locations?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  _links: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-refund-post": {
  refund_id: string;
  order_id?: string;
  note?: string;
  created_at?: string;
  updated_at?: string;
  total_refunded: {
  value: number;
  currency: string;
};
  shipping?: {
  subtotal: {
  value: number;
  currency: string;
};
  tax: {
  value: number;
  currency: string;
};
};
  total_duties?: {
  value: number;
  currency: string;
};
  refund_line_items: ReadonlyArray<{
  id?: string;
  line_item_id: string;
  title: string;
  quantity: number;
  restock_type: string;
  restocked: boolean;
  subtotal: {
  value: number;
  currency: string;
};
  total_tax: {
  value: number;
  currency: string;
};
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
  transactions: ReadonlyArray<{
  id: string;
  gateway?: string;
  kind: string;
  status: string;
  amount: {
  value: number;
  currency: string;
};
  parent_transaction_id?: string;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links: {
  self: {
  href: string;
};
};
};
  "erc-ecommerce-return-process-refund-post": {
  refund_id: string;
  order_id?: string;
  note?: string;
  created_at?: string;
  updated_at?: string;
  total_refunded: {
  value: number;
  currency: string;
};
  shipping?: {
  subtotal: {
  value: number;
  currency: string;
};
  tax: {
  value: number;
  currency: string;
};
};
  total_duties?: {
  value: number;
  currency: string;
};
  refund_line_items: ReadonlyArray<{
  id?: string;
  line_item_id: string;
  title: string;
  quantity: number;
  restock_type: string;
  restocked: boolean;
  subtotal: {
  value: number;
  currency: string;
};
  total_tax: {
  value: number;
  currency: string;
};
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
}>;
  transactions: ReadonlyArray<{
  id: string;
  gateway?: string;
  kind: string;
  status: string;
  amount: {
  value: number;
  currency: string;
};
  parent_transaction_id?: string;
}>;
  custom_fields?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
};
  _links: {
  self: {
  href: string;
};
};
};
  "ccaas-users-id-status-put": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "ccaas-users-status-post": ReadonlyArray<{
  id?: string;
  status?: string;
}>;
  "GetAllQueues": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  _embedded: {
  queues: ReadonlyArray<{
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at?: string;
  settings?: {
  voice?: {
  transfers?: {
  agent_waiting_music?: {
  type?: "PROMPT" | "URL";
  value?: string;
};
  maximum_waiting_time?: number;
  offer_time?: number;
};
};
};
}>;
};
  _links: {
  self: {
  href: string;
};
  page: {
  href: string;
};
  prev?: {
  href: string;
} | null;
  next?: {
  href: string;
} | null;
};
};
  "AssignUsersToQueues": {
  result: "OK" | "KO";
  errors: ReadonlyArray<{
  queue_id: string;
  user_id?: string;
  error: string;
  description: string;
}>;
};
  "UnassignUsersToQueues": {
  result: "OK" | "KO";
  errors: ReadonlyArray<{
  queue_id: string;
  user_id?: string;
  error: string;
  description: string;
}>;
};
  "GetQueueUsers": {
  total: number;
  count: number;
  page: number;
  per_page: number;
  queue_id: string;
  _embedded: {
  users: ReadonlyArray<{
  id: string;
  _links: {
  self: {
  href: string;
};
};
}>;
};
  _links: {
  self: {
  href: string;
};
  page: {
  href: string;
};
  prev?: {
  href: string;
} | null;
  next?: {
  href: string;
} | null;
};
};
  "getLocations": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  locations: ReadonlyArray<({
  id: string;
} & {
  name: string;
  alternative_names?: ReadonlyArray<string>;
  external_id?: string;
  type?: string;
  time_zone: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  name?: string;
}>;
  image_url?: string;
  address: {
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates?: {
  latitude: number;
  longitude: number;
};
};
  opening_status?: "OPEN" | "CLOSED";
  services?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  staffs: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  contacts?: ReadonlyArray<{
  type: string;
  value: string;
  description?: string;
}>;
  job_title?: string;
  manager?: string;
  pronouns?: string;
  specialities?: ReadonlyArray<string>;
  external_id: string;
  industry?: string;
  photo_url?: string;
  gender?: string;
  status?: string;
  date_of_birth?: string;
  date_of_hire?: string;
  languages?: ReadonlyArray<string>;
  attributes?: {};
  relationships?: ReadonlyArray<{
  location?: {
  id?: string;
  name?: string;
};
  service?: {
  id?: string;
  name?: string;
};
}>;
  visit_types?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  tags?: ReadonlyArray<{
  id: string;
  value?: string;
  color?: string;
}>;
}>;
})>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "getLocationCities": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  cities: ReadonlyArray<string>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "getLocationNames": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  locations: ReadonlyArray<{
  name?: string;
  id?: string;
}>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "getLocationsAgent": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  locations: ReadonlyArray<({
  id: string;
  opening_hours?: ReadonlyArray<({
  id: number;
  date: string;
  special_date_name?: string;
} & {
  day_of_week: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  slots: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
})>;
  specialities?: ReadonlyArray<string>;
  service_names?: ReadonlyArray<string>;
} & {
  name: string;
  alternative_names?: ReadonlyArray<string>;
  external_id?: string;
  type?: string;
  time_zone: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  name?: string;
}>;
  image_url?: string;
  address: {
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates?: {
  latitude: number;
  longitude: number;
};
};
  opening_status?: "OPEN" | "CLOSED";
  services?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  staffs: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  contacts?: ReadonlyArray<{
  type: string;
  value: string;
  description?: string;
}>;
  job_title?: string;
  manager?: string;
  pronouns?: string;
  specialities?: ReadonlyArray<string>;
  external_id: string;
  industry?: string;
  photo_url?: string;
  gender?: string;
  status?: string;
  date_of_birth?: string;
  date_of_hire?: string;
  languages?: ReadonlyArray<string>;
  attributes?: {};
  relationships?: ReadonlyArray<{
  location?: {
  id?: string;
  name?: string;
};
  service?: {
  id?: string;
  name?: string;
};
}>;
  visit_types?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  tags?: ReadonlyArray<{
  id: string;
  value?: string;
  color?: string;
}>;
}>;
})>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "getLocationsStaffView": ReadonlyArray<{
  id: string;
  name: string;
  entity_type?: string;
  external_id: string;
  phone_numbers: ReadonlyArray<{
  phone_number: string;
  phone_number_name?: string;
}>;
  services?: ReadonlyArray<{
  id: string;
  service_name: string;
  service_type?: string;
  duration?: string;
  time_zone?: string;
}>;
  rank?: number;
  location_alternative_names?: ReadonlyArray<string>;
  location_type?: string;
  location_image_url?: string;
  location_opening_status?: "OPEN" | "CLOSED";
  location_time_zone?: string;
  location_address?: {
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates?: {
  latitude: number;
  longitude: number;
};
};
  location_business_hours?: ReadonlyArray<ReadonlyArray<{
  open_at: string;
  close_at: string;
}>>;
  staff_location_name?: ReadonlyArray<string>;
  staff_description?: string;
  staff_industry?: string;
  staff_status?: string;
  staff_photo_url?: string;
  staff_gender?: string;
  staff_languages?: ReadonlyArray<string>;
  staff_job_title?: string;
  staff_manager?: string;
  staff_pronouns?: string;
  staff_specialities?: ReadonlyArray<string>;
  staff_date_of_birth?: string;
  staff_date_of_hire?: string;
  staff_visit_types?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  staff_tags?: ReadonlyArray<{
  id: string;
  value?: string;
  color?: string;
}>;
}>;
  "getCustomerAddresses": {
  _embedded: {
  addresses: ReadonlyArray<{
  id: string;
  display_name: string;
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates: {
  latitude: number;
  longitude: number;
};
}>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "getLocationById": ((({
  id: string;
} & {
  name: string;
  alternative_names?: ReadonlyArray<string>;
  external_id?: string;
  type?: string;
  time_zone: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  name?: string;
}>;
  image_url?: string;
  address: {
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates?: {
  latitude: number;
  longitude: number;
};
};
  opening_status?: "OPEN" | "CLOSED";
  services?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  staffs: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  contacts?: ReadonlyArray<{
  type: string;
  value: string;
  description?: string;
}>;
  job_title?: string;
  manager?: string;
  pronouns?: string;
  specialities?: ReadonlyArray<string>;
  external_id: string;
  industry?: string;
  photo_url?: string;
  gender?: string;
  status?: string;
  date_of_birth?: string;
  date_of_hire?: string;
  languages?: ReadonlyArray<string>;
  attributes?: {};
  relationships?: ReadonlyArray<{
  location?: {
  id?: string;
  name?: string;
};
  service?: {
  id?: string;
  name?: string;
};
}>;
  visit_types?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  tags?: ReadonlyArray<{
  id: string;
  value?: string;
  color?: string;
}>;
}>;
}) & ({
  name: string;
  alternative_names?: ReadonlyArray<string>;
  external_id?: string;
  type?: string;
  time_zone: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  name?: string;
}>;
  image_url?: string;
  address: {
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates?: {
  latitude: number;
  longitude: number;
};
};
  opening_status?: "OPEN" | "CLOSED";
  services?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  staffs: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  contacts?: ReadonlyArray<{
  type: string;
  value: string;
  description?: string;
}>;
  job_title?: string;
  manager?: string;
  pronouns?: string;
  specialities?: ReadonlyArray<string>;
  external_id: string;
  industry?: string;
  photo_url?: string;
  gender?: string;
  status?: string;
  date_of_birth?: string;
  date_of_hire?: string;
  languages?: ReadonlyArray<string>;
  attributes?: {};
  relationships?: ReadonlyArray<{
  location?: {
  id?: string;
  name?: string;
};
  service?: {
  id?: string;
  name?: string;
};
}>;
  visit_types?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  tags?: ReadonlyArray<{
  id: string;
  value?: string;
  color?: string;
}>;
}>;
} & {
  open_hours?: ReadonlyArray<{
  day_of_week: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  slots: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
  special_dates?: ReadonlyArray<{
  name: string;
  date: string;
  repeats: "DOES_NOT_REPEATS" | "MONTHLY" | "YEARLY";
  notes?: string;
  slots?: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
})) & {
  _links: {
  self: {
  href: string;
};
};
});
  "getLocationNextWeekOpeningHours": {
  _embedded: {
  opening_hours: ReadonlyArray<({
  id: number;
  date: string;
  special_date_name?: string;
} & {
  day_of_week: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  slots: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
})>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "getServices": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  services: ReadonlyArray<{
  id: string;
  service_name: string;
  external_id?: string;
  service_type?: string;
  duration?: string;
  description: string;
  virtual_location_url?: string;
  price?: string;
  open_hours?: ReadonlyArray<{
  day_of_week: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  slots: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
  special_dates?: ReadonlyArray<{
  name: string;
  date: string;
  repeats: "DOES_NOT_REPEATS" | "MONTHLY" | "YEARLY";
  notes?: string;
  slots?: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
  time_zone?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  name?: string;
}>;
  locations?: ReadonlyArray<{
  id: string;
  location_name: string;
}>;
  created_at?: string;
  updated_at?: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "getServicesAgent": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  services: ReadonlyArray<{
  id: string;
  external_id?: string;
  service_name: string;
  service_type?: string;
  duration?: string;
  description: string;
  virtual_location_url?: string;
  price?: string;
  open_hours?: ReadonlyArray<{
  day_of_week: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  slots: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
  special_dates?: ReadonlyArray<{
  name: string;
  date: string;
  repeats: "DOES_NOT_REPEATS" | "MONTHLY" | "YEARLY";
  notes?: string;
  slots?: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
  time_zone?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  name?: string;
}>;
  locations?: ReadonlyArray<{
  id: string;
  location_name: string;
}>;
  created_at?: string;
  updated_at?: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "getServiceLocations": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  services: ReadonlyArray<{
  id: string;
  service_name: string;
  service_type?: string;
  duration?: string;
  description: string;
  virtual_location_url?: string;
  location_id?: string;
  location_name?: string;
  created_at?: string;
  updated_at?: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "getServiceById": ({
  id: string;
  external_id?: string;
  service_name: string;
  service_type?: string;
  duration?: string;
  description: string;
  virtual_location_url?: string;
  price?: string;
  open_hours?: ReadonlyArray<{
  day_of_week: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  slots: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
  special_dates?: ReadonlyArray<{
  name: string;
  date: string;
  repeats: "DOES_NOT_REPEATS" | "MONTHLY" | "YEARLY";
  notes?: string;
  slots?: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
}>;
  time_zone?: string;
  phone_numbers?: ReadonlyArray<{
  phone_number: string;
  name?: string;
}>;
  locations?: ReadonlyArray<{
  id: string;
  location_name: string;
}>;
  created_at?: string;
  updated_at?: string;
} & {
  _links: {
  self: {
  href: string;
};
};
});
  "getServiceNextWeekOpeningHours": {
  _embedded: {
  opening_hours: ReadonlyArray<({
  id: number;
  date: string;
  special_date_name?: string;
} & {
  day_of_week: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  slots: ReadonlyArray<{
  open_at: string;
  close_at: string;
}>;
})>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "getGeoAddresses": {
  _embedded: {
  addresses: ReadonlyArray<{
  id: string;
  display_name: string;
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates: {
  latitude: number;
  longitude: number;
};
}>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "getGeocoding": {
  _embedded: {
  addresses: ReadonlyArray<{
  id: string;
  display_name: string;
  address: string;
  zip_code: string;
  city?: string;
  region_name?: string;
  country_name: string;
  coordinates: {
  latitude: number;
  longitude: number;
};
}>;
};
  _links: {
  self: {
  href: string;
};
};
};
  "getServiceTypes": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  service_types: ReadonlyArray<string>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "getServiceNames": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  services: ReadonlyArray<{
  name?: string;
  id?: string;
}>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "getServiceDurations": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  service_durations: ReadonlyArray<string>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "getStaffs": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  staffs: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  contacts?: ReadonlyArray<{
  type: string;
  value: string;
  description?: string;
}>;
  job_title?: string;
  manager?: string;
  pronouns?: string;
  specialities?: ReadonlyArray<string>;
  external_id: string;
  industry?: string;
  photo_url?: string;
  gender?: string;
  status?: string;
  date_of_birth?: string;
  date_of_hire?: string;
  languages?: ReadonlyArray<string>;
  attributes?: {};
  relationships?: ReadonlyArray<{
  location?: {
  id?: string;
  name?: string;
};
  service?: {
  id?: string;
  name?: string;
};
}>;
  visit_types?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  tags?: ReadonlyArray<{
  id: string;
  value?: string;
  color?: string;
}>;
}>;
};
  _links?: {
  self: {
  href: string;
};
};
};
  "getStaffSpecialities": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  specialities: ReadonlyArray<string>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "getStaffsAgent": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  staffs: ReadonlyArray<{
  id: string;
  name: string;
  description?: string;
  contacts?: ReadonlyArray<{
  type: string;
  value: string;
  description?: string;
}>;
  job_title?: string;
  manager?: string;
  pronouns?: string;
  specialities?: ReadonlyArray<string>;
  external_id: string;
  industry?: string;
  photo_url?: string;
  gender?: string;
  status?: string;
  date_of_birth?: string;
  date_of_hire?: string;
  languages?: ReadonlyArray<string>;
  attributes?: {};
  relationships?: ReadonlyArray<{
  location?: {
  id?: string;
  name?: string;
};
  service?: {
  id?: string;
  name?: string;
};
}>;
  visit_types?: ReadonlyArray<{
  id: string;
  name: string;
}>;
  tags?: ReadonlyArray<{
  id: string;
  value?: string;
  color?: string;
}>;
}>;
};
  _links?: {
  self: {
  href: string;
};
};
};
  "getSpecialtiesServicesLocations": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded: {
  specialities: ReadonlyArray<{
  id: string;
  speciality: string;
  service_name?: string;
  service_id?: string;
  location_id?: string;
  location_name?: string;
  staff_name?: string;
  staff_id?: string;
  created_by?: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
}>;
};
  _links: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
};
};
  "getStaffGenders": {
  count?: number;
  total: number;
  page?: number;
  per_page?: number;
  total_pages?: number;
  _embedded: {
  genders: ReadonlyArray<string>;
};
  _links?: {
  self?: {
  href?: string;
};
};
};
  "industries-scheduler-teams-get": {
  _embedded: {
  teams?: ReadonlyArray<{
  id: string;
  topic: {
  name: string;
  meetings_duration: number;
  members?: ReadonlyArray<{
  name?: string;
  email: string;
  provider: "GOOGLE" | "OUTLOOK";
  status?: "ACTIVE" | "PENDING";
  fallback_link?: string;
}>;
  status?: "ACTIVE" | "PENDING";
  working_time_start: string;
  working_time_end: string;
  working_days: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  time_zone: string;
  topic_type?: "MANUAL_INPUT" | "DIRECTORY_LINKED";
};
  account_id: string;
  sub_topics: ReadonlyArray<{
  name: string;
  meetings_duration: number;
  members?: ReadonlyArray<{
  name?: string;
  email: string;
  provider: "GOOGLE" | "OUTLOOK";
  status?: "ACTIVE" | "PENDING";
  fallback_link?: string;
}>;
  status?: "ACTIVE" | "PENDING";
  working_time_start: string;
  working_time_end: string;
  working_days: ReadonlyArray<TalkdeskFullApiSchemaJsonValue>;
  time_zone: string;
  topic_type?: "MANUAL_INPUT" | "DIRECTORY_LINKED";
}>;
  _links?: {
  self: {
  href: string;
};
};
}>;
};
  total_pages: number;
  total: number;
  count: number;
  page: number;
  per_page: number;
  _links: {
  self: {
  href: string;
};
  next: {
  href: string;
};
  prev: {
  href: string;
};
  first: {
  href: string;
};
  last: {
  href: string;
};
};
};
  "industries-scheduler-availabilities-post": ReadonlyArray<{
  id: string;
  calendar_id: string;
  free_time_periods: ReadonlyArray<{
  start: number;
  end: number;
}>;
}>;
  "industries-scheduler-appointment-get": {
  _embedded: {
  teams?: ReadonlyArray<{
  id: string;
  account_id: string;
  team_member: {
  name?: string;
  email?: string;
  status?: "ACTIVE" | "PENDING";
  provider?: "OUTLOOK" | "GOOGLE";
  fallback_link?: string;
};
  calendar_event_id: string;
  start: number;
  end: number;
  team_id: string;
  client_name?: string;
  client_email?: string;
  notes?: string;
  contact_id?: string;
  external_contact_id?: string;
  industry?: "none" | "fs-banking" | "fs-insurance" | "hls-providers" | "erc_retail";
  interaction_id?: string;
  create_at?: string;
  reschedule_count?: number;
  conference_link: string;
  conference_link_type?: "AUTO_GENERATED_LINK" | "FALL_BACK_LINK" | "CUSTOM_DEFINE_LINK" | "NO_LINK";
}>;
};
  total_pages: number;
  total: number;
  count: number;
  page: number;
  per_page: number;
  _links: {
  self: {
  href: string;
};
  next: {
  href: string;
};
  prev: {
  href: string;
};
  first: {
  href: string;
};
  last: {
  href: string;
};
};
};
  "industries-scheduler-appointment-post": {
  id: string;
  account_id: string;
  team_member: {
  name?: string;
  email?: string;
  status?: "ACTIVE" | "PENDING";
  provider?: "OUTLOOK" | "GOOGLE";
  fallback_link?: string;
};
  calendar_event_id: string;
  start: number;
  end: number;
  team_id: string;
  client_name?: string;
  client_email?: string;
  notes?: string;
  contact_id?: string;
  external_contact_id?: string;
  industry?: "none" | "fs-banking" | "fs-insurance" | "hls-providers" | "erc_retail";
  interaction_id?: string;
  create_at?: string;
  reschedule_count?: number;
  conference_link: string;
  conference_link_type?: "AUTO_GENERATED_LINK" | "FALL_BACK_LINK" | "CUSTOM_DEFINE_LINK" | "NO_LINK";
};
  "industries-scheduler-appointment-put": {
  id: string;
  account_id: string;
  team_member: {
  name?: string;
  email?: string;
  status?: "ACTIVE" | "PENDING";
  provider?: "OUTLOOK" | "GOOGLE";
  fallback_link?: string;
};
  calendar_event_id: string;
  start: number;
  end: number;
  team_id: string;
  client_name?: string;
  client_email?: string;
  notes?: string;
  contact_id?: string;
  external_contact_id?: string;
  industry?: "none" | "fs-banking" | "fs-insurance" | "hls-providers" | "erc_retail";
  interaction_id?: string;
  create_at?: string;
  reschedule_count?: number;
  conference_link: string;
  conference_link_type?: "AUTO_GENERATED_LINK" | "FALL_BACK_LINK" | "CUSTOM_DEFINE_LINK" | "NO_LINK";
};
  "industries-scheduler-appointment-cancel-post": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "send_message": {
  id: string;
};
  "send_email": string;
  "listIndustriesWorkflowSchedules": {
  total?: number;
  per_page: number;
  page_token?: string | null;
  next_page_token?: string | null;
  _embedded: {
  schedules: ReadonlyArray<{
  id: string;
  workflow_name?: string | null;
  job_name?: string | null;
  cron_expression?: string | null;
  start_at?: string | null;
  payload?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
  is_paused: boolean;
  created_at?: string | null;
  next_run_time?: string | null;
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "createIndustriesWorkflowSchedule": {
  id: string;
};
  "updateIndustriesWorkflowSchedule": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "deleteIndustriesWorkflowSchedule": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "listIndustriesWorkflows": {
  total?: number;
  per_page: number;
  page_token?: string | null;
  next_page_token?: string | null;
  _embedded: {
  workflows: ReadonlyArray<{
  id: string;
  run_id?: string | null;
  workflow_name: string;
  job_name?: string | null;
  status: "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TERMINATED" | "TIMED_OUT";
  created_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  next_run_at?: string | null;
  tags: ReadonlyArray<string>;
  progress?: number | null;
  schedule_id?: string | null;
  cron_expression?: string | null;
}>;
};
  _links?: {
  self?: {
  href?: string;
};
  next?: {
  href?: string;
};
};
};
  "startIndustriesWorkflow": {
  id: string;
};
  "getIndustriesWorkflow": {
  id: string;
  run_id?: string | null;
  workflow_name: string;
  job_name?: string | null;
  status: "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TERMINATED" | "TIMED_OUT";
  created_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  next_run_at?: string | null;
  tags: ReadonlyArray<string>;
  progress?: number | null;
  payload?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
  actions: ReadonlyArray<{
  id: string;
  display_name?: string | null;
  activity: string;
  payload?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
  result?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
}>;
  schedule?: ({
  schedule_id: string;
  cron_expression?: string | null;
  start_at?: string | null;
  is_paused: boolean;
});
};
  "updateIndustriesWorkflow": {
  id: string;
  run_id?: string | null;
  workflow_name: string;
  job_name?: string | null;
  status: "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TERMINATED" | "TIMED_OUT";
  created_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  next_run_at?: string | null;
  tags: ReadonlyArray<string>;
  progress?: number | null;
  payload?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
  actions: ReadonlyArray<{
  id: string;
  display_name?: string | null;
  activity: string;
  payload?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
  result?: {
  readonly [key: string]: TalkdeskFullApiSchemaJsonValue | undefined;
} | null;
}>;
  schedule?: ({
  schedule_id: string;
  cron_expression?: string | null;
  start_at?: string | null;
  is_paused: boolean;
});
};
  "getIndustriesWorkflowProgress": {
  id: string;
  overall_percentage: number;
  actions: ReadonlyArray<{
  action_id: string;
  activity_name: string;
  status: string;
  weight: number;
  percentage: number;
}>;
  _links: {
  self: {
  href: string;
};
};
};
  "interaction-custom-fields-post": {
  code: string;
  message: string;
};
  "SearchExternalSources": {
  _embedded?: {
  knowledge_bases?: ReadonlyArray<{
  details?: {
  description?: string;
  knowledge_type?: "CUSTOM";
  name?: string;
  knowledge_segments?: string;
  ring_groups?: ReadonlyArray<string>;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};
  id?: string;
  enabled?: boolean;
}>;
};
  count?: number;
  page?: number;
  per_page?: number;
  total?: number;
  aggregations?: {
  by_status?: {
  total: number;
  deactivated: number;
  success: number;
  failed: number;
  incomplete: number;
};
};
};
  "CreateExternalSource": {
  details?: {
  description?: string;
  knowledge_type?: "CUSTOM";
  name?: string;
  knowledge_segments?: string;
  ring_groups?: ReadonlyArray<string>;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};
  id?: string;
  enabled?: boolean;
};
  "DeleteExternalSource": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "GetExternalSource": {
  details?: {
  description?: string;
  knowledge_type?: "CUSTOM";
  name?: string;
  knowledge_segments?: string;
  ring_groups?: ReadonlyArray<string>;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};
  id?: string;
  enabled?: boolean;
};
  "UpdateExternalSource": {
  details?: {
  description?: string;
  knowledge_type?: "CUSTOM";
  name?: string;
  knowledge_segments?: string;
  ring_groups?: ReadonlyArray<string>;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};
  id?: string;
  enabled?: boolean;
};
  "upsertKnowledgeManagementDocument": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "deleteKnowledgeManagementDocument": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "interactions_elimination": {
  id: string;
  has_errors: boolean;
  errors: ReadonlyArray<{
  interaction_id: string;
  code: number;
  message: string;
}>;
  total_deleted: number;
  total_errors: number;
};
  "SendOutboundNotificationMessage": {
  bulk_id: string;
  messages: ReadonlyArray<{
  message_id: string;
  destination?: string;
  status: "PENDING";
}>;
};
  "industries-settings-configurations-service-type-type-id-filter-get": {
  id?: string;
  bank_url?: string;
  show_cobrowse_button?: boolean;
};
  "industries-settings-configurations-service-type-filter-get": {
  id?: string;
  bank_url?: string;
  show_cobrowse_button?: boolean;
};
  "GetCampaignRecord": {
  id?: string;
  campaign_id: string;
  contact_name: string;
  campaign_records?: ReadonlyArray<{
  key: string;
  value: string;
}>;
};
  "publicUploadLocationsDirectory": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "getPatientLastLocation": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  patient_last_locations: ReadonlyArray<{
  id: string;
  external_id: string;
  location_id: string;
  admitted_date: string;
}>;
};
};
  "getPatientPractices": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  practices: ReadonlyArray<{
  id: string;
  name?: string;
  patient_id?: string;
  appointment_date_time?: string;
}>;
};
};
  "getGuarantorIdentifiers": {
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _links: {
  self?: {
  href?: string;
};
};
  _embedded: {
  identifiers: ReadonlyArray<{
  id: string;
  type: string;
}>;
};
};
  "getGuarantorBillingSummary": {
  id: string;
  account_ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
  account_type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  billing_system?: string;
  credit_score?: string;
  is_confidential_guarantor?: boolean;
  is_paperless?: boolean;
  owning_deployment_descriptor?: string;
  patient_is_guarantor?: boolean;
  patients?: ReadonlyArray<{
  date_of_birth?: string;
  legal_name?: string;
  preferred_name?: string;
  legal_sex?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  gender_identity?: string;
  ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
}>;
  professional_billing?: {
  aging_summaries?: ReadonlyArray<{
  amount?: number;
  display?: string;
}>;
  balance_summary?: {
  amount_due?: number;
  balance_not_on_payment_plan?: number;
  balance_on_payment_plan?: number;
  charge_total?: number;
  insurance_balance?: number;
  insurance_payment_adjustment_total?: number;
  patient_balance?: number;
  patient_payment_adjustment_total?: number;
  total_balance?: number;
};
  last_payment?: {
  amount?: number;
  date?: string;
  description?: ReadonlyArray<string>;
  source?: string;
  code?: string;
  reference_number?: string;
};
  last_statement?: {
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: string;
};
  message?: string;
  outstanding_account?: {
  bad_debt_balance?: number;
  insurance_balance?: number;
  last_self_pay_payment_date?: string;
  last_statement_date?: string;
  patient_balance?: number;
  self_pay_followup_level?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  total_balance?: number;
};
  payment_plan?: {
  amount_due?: number;
  monthly_amount_due?: number;
  next_due_date?: string;
  number_of_payments_left?: string;
  original_amount?: number;
  remaining_amount?: number;
  start_date?: string;
  is_late?: boolean;
  overdue_amount?: number;
};
};
  hospital_billing?: {
  aging_summaries?: ReadonlyArray<{
  amount?: number;
  display?: string;
}>;
  balance_summary?: {
  amount_due?: number;
  balance_not_on_payment_plan?: number;
  balance_on_payment_plan?: number;
  charge_total?: number;
  insurance_balance?: number;
  insurance_payment_adjustment_total?: number;
  patient_balance?: number;
  patient_payment_adjustment_total?: number;
  total_balance?: number;
};
  last_payment?: {
  amount?: number;
  date?: string;
  description?: ReadonlyArray<string>;
  source?: string;
  code?: string;
  reference_number?: string;
};
  last_statement?: {
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: string;
};
  message?: string;
  outstanding_account?: {
  bad_debt_balance?: number;
  insurance_balance?: number;
  last_self_pay_payment_date?: string;
  last_statement_date?: string;
  patient_balance?: number;
  self_pay_followup_level?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  total_balance?: number;
};
  payment_plan?: {
  amount_due?: number;
  monthly_amount_due?: number;
  next_due_date?: string;
  number_of_payments_left?: string;
  original_amount?: number;
  remaining_amount?: number;
  start_date?: string;
  is_late?: boolean;
  overdue_amount?: number;
};
};
  single_billing_office?: {
  aging_summaries?: ReadonlyArray<{
  amount?: number;
  display?: string;
}>;
  balance_summary?: {
  amount_due?: number;
  balance_not_on_payment_plan?: number;
  balance_on_payment_plan?: number;
  charge_total?: number;
  insurance_balance?: number;
  insurance_payment_adjustment_total?: number;
  patient_balance?: number;
  patient_payment_adjustment_total?: number;
  total_balance?: number;
};
  last_payment?: {
  amount?: number;
  date?: string;
  description?: ReadonlyArray<string>;
  source?: string;
  code?: string;
  reference_number?: string;
};
  last_statement?: {
  balance?: number;
  date?: string;
  type?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  view_status?: string;
};
  message?: string;
  outstanding_account?: {
  bad_debt_balance?: number;
  insurance_balance?: number;
  last_self_pay_payment_date?: string;
  last_statement_date?: string;
  patient_balance?: number;
  self_pay_followup_level?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  total_balance?: number;
};
  payment_plan?: {
  amount_due?: number;
  monthly_amount_due?: number;
  next_due_date?: string;
  number_of_payments_left?: string;
  original_amount?: number;
  remaining_amount?: number;
  start_date?: string;
  is_late?: boolean;
  overdue_amount?: number;
};
};
  propensity_to_pay?: {
  abbreviation?: string;
  number?: string;
  title?: string;
};
  service_area?: {
  name?: string;
  ids?: ReadonlyArray<{
  id: string;
  type: string;
}>;
};
};
  "resetGuarantorPassword": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "GetAccountLicenses": {
  page: number;
  per_page: number;
  count: number;
  total: number;
  _links: {
  self: {
  href: string;
};
  first?: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  last?: {
  href: string;
};
};
  _embedded: {
  licenses: ReadonlyArray<({
  id: string;
  license_id: string;
  account_id: string;
  product_id: string;
  pricing: {};
  quantity: number;
  start_date: string;
  end_date: string;
  revision_start_date: string;
  revision: number;
  attributes: {};
  created_at: string;
} & {
  _embedded?: {
  seats_in_use: number;
  product?: {
  id: string;
  name: string;
  family: "License" | "Add-On" | "Partner" | "Standalone";
  model?: "Named";
  manageable: boolean;
  apps?: ReadonlyArray<{
  app_id: string;
  subscription_id: string;
}>;
  connectors?: ReadonlyArray<{
  type?: string;
}>;
};
};
})>;
};
};
  "GetLicenseSeats": {
  page: number;
  per_page: number;
  count: number;
  total: number;
  _links: {
  self: {
  href: string;
};
  first?: {
  href: string;
};
  prev?: {
  href: string;
};
  next?: {
  href: string;
};
  last?: {
  href: string;
};
};
  _embedded: {
  seats: ReadonlyArray<{
  id: string;
  account_id: string;
  license_id: string;
  user_id: string;
  created_at: string;
}>;
  license: {
  id: string;
  license_id: string;
  account_id: string;
  product_id: string;
  pricing: {};
  quantity: number;
  start_date: string;
  end_date: string;
  revision_start_date: string;
  revision: number;
  attributes: {};
  created_at: string;
};
};
};
  "AssignLicenseSeat": {
  id: string;
  account_id: string;
  license_id: string;
  user_id: string;
  created_at: string;
};
  "RemoveLicenseSeat": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "BulkManageLicenseSeats": {
  available: number;
  assigned: number;
};
  "GetLicenseUsers": ({
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded?: {
  users: ReadonlyArray<{
  id: string;
  email: string;
  name: string;
  active: boolean;
  created_at?: string;
  role_id?: string;
  role?: string;
  confirmed?: boolean;
  team?: string;
  team_id?: string;
  seat: boolean;
}>;
};
  _links?: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
};
} & {});
  "GetAssetSeatUsers": (({
  count: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
  _embedded?: {
  users: ReadonlyArray<{
  id: string;
  email: string;
  name: string;
  active: boolean;
  created_at?: string;
  role_id?: string;
  role?: string;
  confirmed?: boolean;
  team?: string;
  team_id?: string;
  seat: boolean;
}>;
};
  _links?: {
  self: {
  href: string;
};
  next?: {
  href: string;
};
  prev?: {
  href: string;
};
};
} & {}) & {
  _embedded?: {
  licenses?: ReadonlyArray<({
  id: string;
  license_id: string;
  account_id: string;
  product_id: string;
  pricing: {};
  quantity: number;
  start_date: string;
  end_date: string;
  revision_start_date: string;
  revision: number;
  attributes: {};
  created_at: string;
} & {
  _embedded: {
  product?: {
  id: string;
  name: string;
  family: "License" | "Add-On" | "Partner" | "Standalone";
  model?: "Named";
  manageable: boolean;
  apps?: ReadonlyArray<{
  app_id: string;
  subscription_id: string;
}>;
  connectors?: ReadonlyArray<{
  type?: string;
}>;
};
};
})>;
};
});
  "RemoveUserSeats": {
  code: string;
  message: string;
  description?: string;
  fields?: ReadonlyArray<{
  name: string;
  description: string;
}>;
};
  "AssignAccountSeats": {
  result: ReadonlyArray<{
  user_id: string;
  success: boolean;
  error?: {
  code: string;
  message: string;
};
}>;
};
  "GetAccountSubscription": {
  account_id?: string;
  subscription_product_name?: string;
  agent_license_count?: number;
  duration?: number;
  duration_units?: string;
  start_at?: string;
  finish_at?: string;
  auto_renew?: boolean;
  _links?: {
  self?: {
  href?: string;
};
};
};
  "GetAccountSubscriptionLicenses": {
  _embedded?: {
  licenses?: ReadonlyArray<{
  id?: string;
  friendly_name?: string;
  billing_period?: "MONTH" | "QUARTER" | "SEMI_ANNUAL" | "ANNUAL" | "TWO_YEAR" | "THREE_YEAR" | "FIVE_YEAR";
  quantity?: number;
  price?: number;
  self_service?: boolean;
  product_family?: "ADD_ON" | "LICENSE" | "THIRD_PARTY_APP_CONNECT";
  next_billing_date?: string;
  seats_in_use?: number;
  manageable_seats?: boolean;
  _links?: {
  self?: {
  href?: string;
};
};
}>;
  account?: {
  currency?: string;
};
};
  _links?: {
  self?: {
  href?: string;
};
  account?: {
  href?: string;
};
};
};
  "GetAccountSubscriptionLicenseDetails": {
  id?: string;
  product_rate_plan_id?: string;
  product_rate_plan_name?: string;
  friendly_name?: string;
  product_family?: "ADD_ON" | "LICENSE" | "THIRD_PARTY_APP_CONNECT";
  product_rate_plan_description?: string;
  billing_period?: "MONTH" | "QUARTER" | "SEMI_ANNUAL" | "ANNUAL" | "TWO_YEAR" | "THREE_YEAR" | "FIVE_YEAR";
  quantity?: number;
  price?: number;
  currency?: string;
  self_service?: boolean;
  start_at?: string;
  finish_at?: string;
  next_billing_date?: string;
  _links?: {
  self?: {
  href?: string;
};
};
};
}
