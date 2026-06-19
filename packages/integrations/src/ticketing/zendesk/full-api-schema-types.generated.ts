// Generated provider schema DTOs for ZendeskFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type ZendeskFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type ZendeskFullApiSchemaJsonValue = ZendeskFullApiSchemaJsonPrimitive | readonly ZendeskFullApiSchemaJsonValue[] | { readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined };

export type ZendeskFullApiSchemaTagsByObjectIdResponse = {
  tags: ReadonlyArray<string>;
};

export type ZendeskFullApiSchemaCustomObjectRecordsResponse = {
  count?: number;
  custom_object_records?: ReadonlyArray<ZendeskFullApiSchemaCustomObjectRecord>;
  links?: {
  next: string | null;
  prev: string | null;
};
  meta?: {
  after_cursor: string | null;
  before_cursor: string | null;
  has_more: boolean;
};
};

export type ZendeskFullApiSchemaOrganizationsResponse = {
  count?: number;
  next_page?: string | null;
  organizations?: ReadonlyArray<ZendeskFullApiSchemaOrganizationObject>;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaListTicketProblemsResponse = {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};

export type ZendeskFullApiSchemaUsersResponse = {
  users?: ReadonlyArray<ZendeskFullApiSchemaUserObject>;
};

export type ZendeskFullApiSchemaBatchJobRequest = {
  job?: {
  action?: "patch";
  items?: {
  trigger_categories?: ReadonlyArray<ZendeskFullApiSchemaTriggerCategoryBatchRequest>;
  triggers?: ReadonlyArray<ZendeskFullApiSchemaTriggerBatchRequest>;
};
};
};

export type ZendeskFullApiSchemaBatchJobResponse = {
  errors?: ReadonlyArray<ZendeskFullApiSchemaBatchErrorItem>;
  results?: {
  trigger_categories?: ReadonlyArray<ZendeskFullApiSchemaTriggerCategory>;
  triggers?: ReadonlyArray<ZendeskFullApiSchemaTriggerObject>;
};
  status?: "complete" | "failed";
};

export type ZendeskFullApiSchemaJobStatusResponse = {
  job_status?: ZendeskFullApiSchemaJobStatusObject;
};

export type ZendeskFullApiSchemaBulkSkillBasedRoutingAttributeValuesRequest = {
  job?: ZendeskFullApiSchemaBulkSkillBasedRoutingAttributeValueJob;
};

export type ZendeskFullApiSchemaBulkUpdateDefaultCustomStatusRequest = {
  ids?: string;
};

export type ZendeskFullApiSchemaBulkUpdateDefaultCustomStatusResponse = {};

export type ZendeskFullApiSchemaHostMappingObject = {
  cname?: string;
  expected_cnames?: ReadonlyArray<string>;
  is_valid?: boolean;
  reason?: string;
};

export type ZendeskFullApiSchemaOauthClientResponse = {
  client?: ZendeskFullApiSchemaOAuthClientObject;
};

export type ZendeskFullApiSchemaTicketFormResponse = {
  ticket_form?: ZendeskFullApiSchemaTicketFormObject;
};

export type ZendeskFullApiSchemaActivitiesCountResponse = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaTicketAuditsCountResponse = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaCountResponse = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaGroupsCountObject = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaCountOrganizationResponse = {
  count?: ZendeskFullApiSchemaCountOrganizationObject;
};

export type ZendeskFullApiSchemaSatisfactionRatingsCountResponse = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaSearchCountResponse = {
  count?: number;
};

export type ZendeskFullApiSchemaTagCountResponse = {
  count?: ZendeskFullApiSchemaTagCountObject;
};

export type ZendeskFullApiSchemaTicketCommentsCountResponse = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaTicketFieldCountResponse = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaViewsCountResponse = {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};

export type ZendeskFullApiSchemaAccessRuleCreateRequest = {
  access_rule?: {
  conditions?: {
  all?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleCondition>;
  any?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleCondition>;
};
  description?: string;
  title?: string;
};
};

export type ZendeskFullApiSchemaAccessRuleResponse = {
  access_rule?: ZendeskFullApiSchemaAccessRule;
};

export type ZendeskFullApiSchemaApprovalRequestCreateRequest = {
  assignee_group_id?: number | null;
  assignee_user_id?: number | null;
  message: string;
  subject: string;
  ticket_id: number;
};

export type ZendeskFullApiSchemaApprovalRequestSimpleResponse = {
  approval_request?: {
  assignee_group_id?: number | null;
  assignee_user_id?: number | null;
  created_at?: string;
  created_by_id?: number;
  id?: string;
  message?: string;
  origination_type?: "API_ORIGINATION" | "UI_ORIGINATION" | "TRIGGER_ORIGINATION" | "DATA_IMPORTER_ORIGINATION" | "TEMPLATE_ORIGINATION" | "ACTION_FLOW_ORIGINATION" | "UNKNOWN_ORIGINATION";
  status?: string;
  subject?: string;
  ticket_id?: number;
};
};

export type ZendeskFullApiSchemaMacroAttachmentResponse = {
  macro_attachment?: ZendeskFullApiSchemaMacroAttachmentObject;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeResponse = {
  attribute?: ZendeskFullApiSchemaSkillBasedRoutingAttributeObject;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeValueResponse = {
  attribute_value?: ZendeskFullApiSchemaSkillBasedRoutingAttributeValueObject;
};

export type ZendeskFullApiSchemaAutomationResponse = {
  automation?: ZendeskFullApiSchemaAutomationObject;
};

export type ZendeskFullApiSchemaBookmarkCreateRequest = {
  bookmark?: ZendeskFullApiSchemaBookmarkInput;
};

export type ZendeskFullApiSchemaBookmarkResponse = {
  bookmark?: ZendeskFullApiSchemaBookmarkObject;
};

export type ZendeskFullApiSchemaBrandCreateRequest = {
  brand?: ZendeskFullApiSchemaBrandObject;
};

export type ZendeskFullApiSchemaBrandResponse = {
  brand?: ZendeskFullApiSchemaBrandObject;
};

export type ZendeskFullApiSchemaCustomObjectsCreateRequest = {
  custom_object?: ZendeskFullApiSchemaCustomObjectCreateInput;
};

export type ZendeskFullApiSchemaCustomObjectResponse = {
  custom_object?: ZendeskFullApiSchemaCustomObject;
};

export type ZendeskFullApiSchemaCustomObjectFieldsCreateRequest = {
  custom_object_field?: ZendeskFullApiSchemaCustomObjectField;
};

export type ZendeskFullApiSchemaCustomObjectFieldResponse = {
  custom_object_field?: ZendeskFullApiSchemaCustomObjectField;
};

export type ZendeskFullApiSchemaCustomObjectRecordsCreateRequest = {
  custom_object_record?: ZendeskFullApiSchemaCustomObjectRecord;
};

export type ZendeskFullApiSchemaCustomObjectRecordResponse = {
  custom_object_record?: ZendeskFullApiSchemaCustomObjectRecord;
};

export type ZendeskFullApiSchemaCustomObjectRecordAttachmentResponse = {
  custom_object_record_attachment?: ZendeskFullApiSchemaCustomObjectRecordAttachment;
};

export type ZendeskFullApiSchemaCustomRoleResponse = {
  custom_role?: ZendeskFullApiSchemaCustomRoleObject;
};

export type ZendeskFullApiSchemaCustomStatusCreateRequest = {
  custom_status?: ZendeskFullApiSchemaCustomStatusCreateInput;
};

export type ZendeskFullApiSchemaCustomStatusResponse = {
  custom_status?: ZendeskFullApiSchemaCustomStatusObject;
};

export type ZendeskFullApiSchemaDeletionSchedule = {
  active?: boolean;
  conditions?: ZendeskFullApiSchemaConditionsObject;
  created_at?: string;
  default?: boolean;
  description?: string;
  id?: number;
  object?: string;
  title?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaDynamicContentResponse = {
  item?: ZendeskFullApiSchemaDynamicContentObject;
};

export type ZendeskFullApiSchemaDynamicContentVariantResponse = {
  variant?: ZendeskFullApiSchemaDynamicContentVariantObject;
};

export type ZendeskFullApiSchemaUserIdentityResponse = {
  identity?: ZendeskFullApiSchemaUserIdentityObject;
};

export type ZendeskFullApiSchemaGroupResponse = {
  group?: ZendeskFullApiSchemaGroupObject;
};

export type ZendeskFullApiSchemaGroupMembershipResponse = {
  group_membership?: ZendeskFullApiSchemaGroupMembershipObject;
};

export type ZendeskFullApiSchemaGroupSLAPolicyResponse = {
  group_sla_policy?: ZendeskFullApiSchemaGroupSLAPolicyObject;
};

export type ZendeskFullApiSchemaItamAssetCreateRequest = {
  asset?: ZendeskFullApiSchemaItamAsset;
};

export type ZendeskFullApiSchemaItamAssetResponse = {
  asset?: ZendeskFullApiSchemaItamAsset;
};

export type ZendeskFullApiSchemaItamAssetTypeCreateRequest = {
  asset_type?: ZendeskFullApiSchemaItamAssetType;
};

export type ZendeskFullApiSchemaItamAssetTypeResponse = {
  asset_type?: ZendeskFullApiSchemaItamAssetType;
};

export type ZendeskFullApiSchemaItamAssetFieldCreateRequest = {
  field?: ZendeskFullApiSchemaItamAssetField;
};

export type ZendeskFullApiSchemaItamAssetFieldResponse = {
  field?: ZendeskFullApiSchemaItamAssetField;
};

export type ZendeskFullApiSchemaItamAssetLocationCreateRequest = {
  location?: ZendeskFullApiSchemaItamAssetLocation;
};

export type ZendeskFullApiSchemaItamAssetLocationResponse = {
  location?: ZendeskFullApiSchemaItamAssetLocation;
};

export type ZendeskFullApiSchemaMacroInput = {
  actions: ReadonlyArray<ZendeskFullApiSchemaActionObject>;
  active?: boolean;
  description?: string | null;
  restriction?: {
  id?: number;
  ids?: ReadonlyArray<number>;
  type?: string;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | number | ReadonlyArray<number> | string | undefined;
} | null;
  title: string;
};

export type ZendeskFullApiSchemaMacroObject = (ZendeskFullApiSchemaMacroCommonObject & {
  app_installation?: string | null;
  categories?: string | null;
  permissions?: string | null;
  usage_1h?: number;
  usage_7d?: number;
  usage_24h?: number;
  usage_30d?: number;
});

export type ZendeskFullApiSchemaDynamicContentVariantsResponse = {
  variants?: ReadonlyArray<ZendeskFullApiSchemaDynamicContentVariantObject>;
};

export type ZendeskFullApiSchemaUsersRequest = {
  users: ReadonlyArray<ZendeskFullApiSchemaUserInput>;
};

export type ZendeskFullApiSchemaOAuthTokenResponse = {
  token?: ZendeskFullApiSchemaOauthTokenObject;
};

export type ZendeskFullApiSchemaObjectTriggerRequest = {
  trigger?: ZendeskFullApiSchemaObjectTriggerObject;
};

export type ZendeskFullApiSchemaObjectTriggerResponse = {
  trigger?: ZendeskFullApiSchemaObjectTriggerObject;
};

export type ZendeskFullApiSchemaCreateOrganizationRequest = {
  organization: ZendeskFullApiSchemaOrganizationObject;
};

export type ZendeskFullApiSchemaOrganizationResponse = {
  organization?: ZendeskFullApiSchemaOrganizationObject;
};

export type ZendeskFullApiSchemaOrganizationFieldResponse = {
  organization_field?: ZendeskFullApiSchemaOrganizationFieldObject;
};

export type ZendeskFullApiSchemaOrganizationMembershipResponse = {
  organization_membership?: ZendeskFullApiSchemaOrganizationMembershipObject;
};

export type ZendeskFullApiSchemaOrganizationMergeRequest = {
  organization_merge?: {
  winner_id?: number;
};
};

export type ZendeskFullApiSchemaOrganizationMergeResponse = {
  organization_merge?: {
  id: string;
  loser_id: number;
  status: "new" | "in_progress" | "error" | "complete";
  url: string;
  winner_id: number;
};
};

export type ZendeskFullApiSchemaOrganizationSubscriptionCreateRequest = {
  organization_subscription?: ZendeskFullApiSchemaOrganizationSubscriptionInput;
};

export type ZendeskFullApiSchemaOrganizationSubscriptionResponse = {
  organization_subscription?: ZendeskFullApiSchemaOrganizationSubscriptionObject;
};

export type ZendeskFullApiSchemaCustomFieldOptionResponse = {
  custom_field_option?: ZendeskFullApiSchemaCustomFieldOptionObject;
};

export type ZendeskFullApiSchemaUserRequest = {
  user: ZendeskFullApiSchemaUserInput;
};

export type ZendeskFullApiSchemaUserResponse = {
  user?: ZendeskFullApiSchemaUserObject;
};

export type ZendeskFullApiSchemaQueueResponse = {
  queue?: ZendeskFullApiSchemaQueueObject;
};

export type ZendeskFullApiSchemaRequestResponse = {
  request?: ZendeskFullApiSchemaRequestObject;
};

export type ZendeskFullApiSchemaSharingAgreementResponse = {
  sharing_agreement?: ZendeskFullApiSchemaSharingAgreementObject;
};

export type ZendeskFullApiSchemaSLAPolicyResponse = {
  sla_policy?: ZendeskFullApiSchemaSLAPolicyObject;
};

export type ZendeskFullApiSchemaSupportAddressResponse = {
  recipient_address?: ZendeskFullApiSchemaSupportAddressObject;
};

export type ZendeskFullApiSchemaTargetResponse = {
  target?: ZendeskFullApiSchemaTargetObject;
};

export type ZendeskFullApiSchemaTaskListCreateRequest = {
  task_list?: {
  task_list_template_id?: string;
};
};

export type ZendeskFullApiSchemaTaskListByTicketIdResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  task_lists?: ReadonlyArray<ZendeskFullApiSchemaTaskListObject>;
};

export type ZendeskFullApiSchemaTaskListTemplateCreateRequest = {
  task_list_template?: ZendeskFullApiSchemaTaskListTemplateObject;
};

export type ZendeskFullApiSchemaTaskListTemplateResponse = {
  task_list_template?: ZendeskFullApiSchemaTaskListTemplateObject;
};

export type ZendeskFullApiSchemaTicketCreateRequest = {
  system_metadata?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  ticket?: ZendeskFullApiSchemaTicketObject;
};

export type ZendeskFullApiSchemaTicketResponse = {
  ticket?: ZendeskFullApiSchemaTicketObject;
};

export type ZendeskFullApiSchemaTicketContentPin = {
  account_id?: string;
  content_id?: string;
  content_type?: string;
  created_at?: string;
  id?: string;
  locale?: string | null;
  ticket_id?: string;
  url?: string;
};

export type ZendeskFullApiSchemaTicketFieldResponse = {
  ticket_field?: ZendeskFullApiSchemaTicketFieldObject;
};

export type ZendeskFullApiSchemaTicketFormStatusesParams = {
  ticket_form_status: ReadonlyArray<ZendeskFullApiSchemaTicketFormStatusesCreateParams>;
};

export type ZendeskFullApiSchemaTicketFormStatusesResponse = {
  ticket_form_statuses?: ReadonlyArray<ZendeskFullApiSchemaTicketFormStatusObject>;
};

export type ZendeskFullApiSchemaTicketCreateVoicemailTicketRequest = {
  display_to_agent?: number;
  ticket?: ZendeskFullApiSchemaTicketCreateVoicemailTicketInput;
};

export type ZendeskFullApiSchemaSatisfactionRatingResponse = {
  satisfaction_rating?: ReadonlyArray<ZendeskFullApiSchemaSatisfactionRatingObject>;
};

export type ZendeskFullApiSchemaOAuthTokenForGrantTypesObject = {
  access_token?: string;
  expires_in?: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  scope?: string;
  token_type?: string;
};

export type ZendeskFullApiSchemaTrialAccountResponse = {
  account?: ZendeskFullApiSchemaTrialAccountObject;
};

export type ZendeskFullApiSchemaTriggerWithCategoryRequest = {
  trigger?: ZendeskFullApiSchemaTriggerObject;
};

export type ZendeskFullApiSchemaTriggerResponse = {
  trigger?: ZendeskFullApiSchemaTriggerObject;
};

export type ZendeskFullApiSchemaTriggerCategoryResponse = {
  trigger_category?: ZendeskFullApiSchemaTriggerCategory;
};

export type ZendeskFullApiSchemaUserFieldResponse = {
  user_field?: ZendeskFullApiSchemaUserFieldObject;
};

export type ZendeskFullApiSchemaViewResponse = {
  columns?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  groups?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  rows?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  view?: ZendeskFullApiSchemaViewObject;
};

export type ZendeskFullApiSchemaWorkspaceInput = {
  conditions?: ZendeskFullApiSchemaConditionsObject;
  description?: string;
  macros?: ReadonlyArray<number>;
  ticket_form_id?: number;
  title?: string;
};

export type ZendeskFullApiSchemaWorkspaceObject = {
  activated?: boolean;
  apps?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  conditions?: ZendeskFullApiSchemaConditionsObject;
  created_at?: string;
  description?: string;
  id?: number;
  macro_ids?: ReadonlyArray<number>;
  macros?: ReadonlyArray<number>;
  position?: number;
  prefer_workspace_app_order?: boolean;
  selected_macros?: ReadonlyArray<ZendeskFullApiSchemaMacroObject>;
  ticket_form_id?: number;
  title?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaCustomObjectLimitsResponse = {
  count?: number;
  limit?: number;
};

export type ZendeskFullApiSchemaCustomObjectRecordsBulkCreateRequest = {
  job?: {
  action?: string;
  items?: ReadonlyArray<(ZendeskFullApiSchemaCustomObjectRecord | string)>;
};
};

export type ZendeskFullApiSchemaCustomObjectRecordsJobsResponse = {
  job_status?: {
  id?: string;
  message?: string | null;
  progress?: number | null;
  results?: ReadonlyArray<ZendeskFullApiSchemaCustomObjectRecord> | null;
  status?: string;
  total?: number;
  url?: string;
};
};

export type ZendeskFullApiSchemaErrors = {
  errors?: ReadonlyArray<ZendeskFullApiSchemaError>;
};

export type ZendeskFullApiSchemaLocaleResponse = {
  locale?: ZendeskFullApiSchemaLocaleObject;
};

export type ZendeskFullApiSchemaSearchExportResponse = {
  facets?: string | null;
  links?: {
  next?: string | null;
  prev?: string | null;
};
  meta?: {
  after_cursor?: string | null;
  before_cursor?: string | null;
  has_more?: boolean;
};
  results?: ReadonlyArray<ZendeskFullApiSchemaSearchResultObject>;
};

export type ZendeskFullApiSchemaSuspendedTicketsExportResponse = {
  export?: {
  status?: string;
  view_id?: string;
};
};

export type ZendeskFullApiSchemaViewExportResponse = {
  export?: {
  status?: string;
  view_id?: number;
};
};

export type ZendeskFullApiSchemaCustomObjectRecordsFilteredSearchRequestBasic = {
  filter?: ZendeskFullApiSchemaCustomObjectRecordFilteredSearchCondition;
};

export type ZendeskFullApiSchemaCustomObjectRecordsFilteredSearchRequestComplex = {
  filter?: {
  $and?: ReadonlyArray<ZendeskFullApiSchemaCustomObjectRecordFilteredSearchCondition>;
  $or?: ReadonlyArray<ZendeskFullApiSchemaCustomObjectRecordFilteredSearchCondition>;
};
};

export type ZendeskFullApiSchemaItamAssetFilteredSearchRequestBasic = {
  filter?: ZendeskFullApiSchemaItamAssetFilteredSearchCondition;
};

export type ZendeskFullApiSchemaItamAssetFilteredSearchRequestComplex = {
  filter?: {
  $and?: ReadonlyArray<ZendeskFullApiSchemaItamAssetFilteredSearchCondition>;
  $or?: ReadonlyArray<ZendeskFullApiSchemaItamAssetFilteredSearchCondition>;
};
};

export type ZendeskFullApiSchemaItamAssetsResponse = {
  assets?: ReadonlyArray<ZendeskFullApiSchemaItamAsset>;
  links?: {
  next: string | null;
  prev: string | null;
};
  meta?: {
  after_cursor: string | null;
  before_cursor: string | null;
  has_more: boolean;
};
};

export type ZendeskFullApiSchemaRelationshipFilterDefinitionResponse = {
  definitions?: ZendeskFullApiSchemaRelationshipFilterDefinition;
};

export type ZendeskFullApiSchemaReverseLookupResponse = ZendeskFullApiSchemaUsersResponse;

export type ZendeskFullApiSchemaTasksByTaskListTemplateIdResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  tasks?: ReadonlyArray<ZendeskFullApiSchemaTaskObject>;
};

export type ZendeskFullApiSchemaTwitterChannelTwicketStatusResponse = {
  statuses?: ReadonlyArray<{
  favorited?: boolean;
  id?: number;
  retweeted?: boolean;
  user_followed?: boolean;
}>;
};

export type ZendeskFullApiSchemaUserEntitlementsFullResponse = {
  entitlements?: {
  chat?: ZendeskFullApiSchemaUserEntitlementObject;
  explore?: ZendeskFullApiSchemaUserEntitlementObject;
  guide?: ZendeskFullApiSchemaUserEntitlementObject;
  talk?: ZendeskFullApiSchemaUserEntitlementObject;
};
};

export type ZendeskFullApiSchemaUserPasswordRequirementsResponse = {
  requirements?: ReadonlyArray<string>;
};

export type ZendeskFullApiSchemaViewCountResponse = {
  view_count?: ZendeskFullApiSchemaViewCountObject;
};

export type ZendeskFullApiSchemaViewCountsResponse = {
  view_counts?: ReadonlyArray<ZendeskFullApiSchemaViewCountObject>;
};

export type ZendeskFullApiSchemaGlobalClientsTokenSummaryResponse = {
  global_clients?: ReadonlyArray<ZendeskFullApiSchemaGlobalClientTokenSummaryObject>;
};

export type ZendeskFullApiSchemaGroupMembershipsResponse = {
  group_memberships?: ReadonlyArray<ZendeskFullApiSchemaGroupMembershipObject>;
};

export type ZendeskFullApiSchemaIncrementalCustomObjectRecordsResponse = {
  after_cursor?: string | null;
  after_url?: string | null;
  before_cursor?: string | null;
  before_url?: string | null;
  custom_object_records?: ReadonlyArray<{
  created_at?: string;
  created_by_user_id?: string;
  custom_object_fields?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  custom_object_key?: string;
  external_id?: string | null;
  id?: string;
  name?: string;
  updated_at?: string;
  updated_by_user_id?: string;
  url?: string;
}>;
  filter?: {
  exclude_deleted?: boolean;
} | null;
  meta?: {
  has_more?: boolean;
};
};

export type ZendeskFullApiSchemaExportIncrementalOrganizationsResponse = {
  count?: number;
  end_of_stream?: boolean;
  end_time?: number;
  next_page?: string | null;
  organizations?: ReadonlyArray<ZendeskFullApiSchemaOrganizationObject>;
};

export type ZendeskFullApiSchemaTimeBasedExportIncrementalTicketsResponse = {
  count?: number;
  end_of_stream?: boolean;
  end_time?: number;
  next_page?: string | null;
  tickets?: ReadonlyArray<ZendeskFullApiSchemaTicketObject>;
};

export type ZendeskFullApiSchemaIncrementalSkillBasedRouting = {
  attribute_values?: ReadonlyArray<ZendeskFullApiSchemaIncrementalSkillBasedRoutingAttributeValue>;
  attributes?: ReadonlyArray<ZendeskFullApiSchemaIncrementalSkillBasedRoutingAttribute>;
  count?: number;
  end_time?: number;
  instance_values?: ReadonlyArray<ZendeskFullApiSchemaIncrementalSkillBasedRoutingInstanceValue>;
  next_page?: string;
};

export type ZendeskFullApiSchemaExportIncrementalTicketEventsResponse = {
  count?: number;
  end_of_stream?: boolean;
  end_time?: number;
  next_page?: string | null;
  ticket_events?: ReadonlyArray<ZendeskFullApiSchemaTicketMetricEventBaseObject>;
};

export type ZendeskFullApiSchemaCursorBasedExportIncrementalTicketsResponse = {
  after_cursor?: string | null;
  after_url?: string | null;
  before_cursor?: string | null;
  before_url?: string | null;
  end_of_stream?: boolean;
  tickets?: ReadonlyArray<ZendeskFullApiSchemaTicketObject>;
};

export type ZendeskFullApiSchemaCursorBasedExportIncrementalUsersResponse = {
  after_cursor?: string | null;
  after_url?: string | null;
  before_cursor?: string | null;
  before_url?: string | null;
  end_of_stream?: boolean;
  users?: ReadonlyArray<ZendeskFullApiSchemaUserObject>;
};

export type ZendeskFullApiSchemaTimeBasedExportIncrementalUsersResponse = {
  count?: number;
  end_of_stream?: boolean;
  end_time?: number;
  next_page?: string | null;
  users?: ReadonlyArray<ZendeskFullApiSchemaUserObject>;
};

export type ZendeskFullApiSchemaItamAssetBulkJobRequest = {
  job?: {
  action?: "create" | "update" | "delete" | "delete_by_external_id";
  items?: ReadonlyArray<(ZendeskFullApiSchemaItamAsset | string)>;
};
};

export type ZendeskFullApiSchemaItamAssetBulkJobResponse = {
  job_status?: {
  id?: string;
  message?: string | null;
  progress?: number | null;
  results?: ReadonlyArray<ZendeskFullApiSchemaItamAsset> | null;
  status?: string;
  total?: number;
  url?: string;
};
};

export type ZendeskFullApiSchemaAccessRuleDefinitionsResponse = {
  definitions?: {
  conditions_all?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleFieldDefinition>;
  conditions_any?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleFieldDefinition>;
};
};

export type ZendeskFullApiSchemaAccessRulesResponse = {
  access_rules?: ReadonlyArray<ZendeskFullApiSchemaAccessRule>;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributesResponse = {
  attributes?: ReadonlyArray<ZendeskFullApiSchemaSkillBasedRoutingAttributeObject>;
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaAutomationsResponse = {
  automations?: ReadonlyArray<ZendeskFullApiSchemaAutomationObject>;
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaMacrosResponse = ({
  macros?: ReadonlyArray<ZendeskFullApiSchemaMacroObject>;
} & ZendeskFullApiSchemaOffsetPaginationObject);

export type ZendeskFullApiSchemaObjectTriggersResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  triggers?: ReadonlyArray<ZendeskFullApiSchemaObjectTriggerObject>;
};

export type ZendeskFullApiSchemaTriggersResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  triggers?: ReadonlyArray<ZendeskFullApiSchemaTriggerObject>;
};

export type ZendeskFullApiSchemaViewsResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  views?: ReadonlyArray<ZendeskFullApiSchemaViewObject>;
};

export type ZendeskFullApiSchemaActivitiesResponse = {
  activities?: ReadonlyArray<ZendeskFullApiSchemaActivityObject>;
  actors?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  users?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeValuesResponse = {
  attribute_values?: ReadonlyArray<ZendeskFullApiSchemaSkillBasedRoutingAttributeValueObject>;
};

export type ZendeskFullApiSchemaApprovalRequestsListResponse = {
  approval_requests?: ReadonlyArray<{
  assignee_group?: {
  id?: number;
  name?: string;
} | null;
  assignee_user?: {
  id?: number;
  name?: string;
} | null;
  clarification_flow_messages?: ReadonlyArray<{
  author?: {
  avatar?: string;
  email?: string;
  id?: number;
  name?: string;
  role?: string;
};
  created_at?: string;
  id?: string;
  message?: string;
}>;
  created_at?: string;
  created_by_user?: {
  id?: number;
  name?: string;
  photo?: {
  content_url?: string;
};
};
  decided_at?: string | null;
  decisions?: ReadonlyArray<{
  decided_at?: string;
  decided_by_user?: {
  id?: number;
  name?: string;
  photo?: {
  content_url?: string;
};
};
  decision_notes?: string | null;
  origination_type?: "UI_ORIGINATION" | "API_ORIGINATION" | "SLACK_ORIGINATION" | "ACTION_FLOW_ORIGINATION" | "UNKNOWN_ORIGINATION";
  status?: string;
}>;
  id?: string;
  message?: string;
  origination_type?: "API_ORIGINATION" | "UI_ORIGINATION" | "TRIGGER_ORIGINATION" | "DATA_IMPORTER_ORIGINATION" | "TEMPLATE_ORIGINATION" | "ACTION_FLOW_ORIGINATION" | "UNKNOWN_ORIGINATION";
  status?: string;
  subject?: string;
  ticket_id?: number;
  withdrawn_reason?: string | null;
}>;
  links?: {
  next?: string | null;
  prev?: string | null;
};
  meta?: {
  after_cursor?: string | null;
  before_cursor?: string | null;
  has_more?: boolean;
};
};

export type ZendeskFullApiSchemaGroupsResponse = {
  groups?: ReadonlyArray<ZendeskFullApiSchemaGroupObject>;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeValuesWithoutPriorityResponse = {
  attribute_values?: ReadonlyArray<ZendeskFullApiSchemaSkillBasedRoutingAttributeValueWithoutPriorityObject>;
};

export type ZendeskFullApiSchemaAuditLogsResponse = {
  audit_logs?: ReadonlyArray<ZendeskFullApiSchemaAuditLogObject>;
};

export type ZendeskFullApiSchemaTicketAuditsResponseNoneCursor = {
  audits?: ReadonlyArray<ZendeskFullApiSchemaTicketAuditObject>;
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaLocalesResponse = {
  locales?: ReadonlyArray<ZendeskFullApiSchemaLocaleObject>;
};

export type ZendeskFullApiSchemaBookmarksResponse = (ZendeskFullApiSchemaOffsetPaginationObject & {
  bookmarks?: ReadonlyArray<ZendeskFullApiSchemaBookmarkObject>;
});

export type ZendeskFullApiSchemaBrandAgentsResponse = {
  brand_agents?: ReadonlyArray<ZendeskFullApiSchemaBrandAgentObject>;
};

export type ZendeskFullApiSchemaBrandsResponse = (ZendeskFullApiSchemaOffsetPaginationObject & {
  brands?: ReadonlyArray<ZendeskFullApiSchemaBrandObject>;
});

export type ZendeskFullApiSchemaRequestsResponse = {
  requests?: ReadonlyArray<ZendeskFullApiSchemaRequestObject>;
};

export type ZendeskFullApiSchemaTicketCommentsResponse = {
  comments?: ReadonlyArray<ZendeskFullApiSchemaTicketCommentObject>;
};

export type ZendeskFullApiSchemaConversationLogResponse = {
  events?: ReadonlyArray<ZendeskFullApiSchemaConversationLogObject>;
  links?: {
  next?: string;
  prev?: string;
};
  meta?: {
  after_cursor?: string;
  before_cursor?: string;
  has_more?: boolean;
};
};

export type ZendeskFullApiSchemaOAuthClientsResponse = {
  clients?: ReadonlyArray<ZendeskFullApiSchemaOAuthClientObject>;
};

export type ZendeskFullApiSchemaCustomObjectFieldsResponse = {
  custom_object_fields?: ReadonlyArray<ZendeskFullApiSchemaCustomObjectField>;
};

export type ZendeskFullApiSchemaCustomObjectRecordAttachmentsResponse = {
  custom_object_record_attachments?: ReadonlyArray<ZendeskFullApiSchemaCustomObjectRecordAttachment>;
};

export type ZendeskFullApiSchemaCustomObjectsResponse = {
  custom_objects?: ReadonlyArray<ZendeskFullApiSchemaCustomObject>;
};

export type ZendeskFullApiSchemaCustomRolesResponse = {
  custom_roles?: ReadonlyArray<ZendeskFullApiSchemaCustomRoleObject>;
};

export type ZendeskFullApiSchemaCustomStatusesResponse = {
  custom_statuses?: ReadonlyArray<ZendeskFullApiSchemaCustomStatusObject>;
};

export type ZendeskFullApiSchemaListDeletedTicketsResponse = ({
  deleted_tickets?: ReadonlyArray<{
  actor?: {
  id?: number;
  name?: string;
};
  deleted_at?: string;
  id?: number;
  previous_state?: string;
  subject?: string;
}>;
} & ZendeskFullApiSchemaOffsetPaginationObject);

export type ZendeskFullApiSchemaDeletedUsersResponse = {
  deleted_users?: ReadonlyArray<ZendeskFullApiSchemaDeletedUserObject>;
};

export type ZendeskFullApiSchemaDynamicContentsResponse = {
  items?: ReadonlyArray<ZendeskFullApiSchemaDynamicContentObject>;
};

export type ZendeskFullApiSchemaEmailNotificationsResponse = {
  email_notifications?: ReadonlyArray<ZendeskFullApiSchemaEmailNotificationObject>;
};

export type ZendeskFullApiSchemaUserIdentitiesResponse = {
  identities?: ReadonlyArray<ZendeskFullApiSchemaUserIdentityObject>;
};

export type ZendeskFullApiSchemaGlobalClientsResponse = {
  global_clients?: ReadonlyArray<ZendeskFullApiSchemaGlobalClientObject>;
};

export type ZendeskFullApiSchemaGroupSLAPoliciesResponse = {
  count?: number;
  group_sla_policies?: ReadonlyArray<ZendeskFullApiSchemaGroupSLAPolicyObject>;
  next_page?: string | null;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaItamAssetTypeFieldsResponse = {
  fields?: ReadonlyArray<ZendeskFullApiSchemaItamAssetField>;
};

export type ZendeskFullApiSchemaItamAssetTypesResponse = {
  asset_types?: ReadonlyArray<ZendeskFullApiSchemaItamAssetType>;
};

export type ZendeskFullApiSchemaItamAssetLocationsResponse = ({
  locations?: ReadonlyArray<ZendeskFullApiSchemaItamAssetLocation>;
} & ZendeskFullApiSchemaCursorPaginationMeta);

export type ZendeskFullApiSchemaItamAssetStatusesResponse = {
  statuses?: ReadonlyArray<ZendeskFullApiSchemaItamAssetStatus>;
};

export type ZendeskFullApiSchemaJobStatusesResponse = {
  job_statuses: ReadonlyArray<ZendeskFullApiSchemaJobStatusObject>;
};

export type ZendeskFullApiSchemaMacroAttachmentsResponse = {
  macro_attachments?: ReadonlyArray<ZendeskFullApiSchemaMacroAttachmentObject>;
};

export type ZendeskFullApiSchemaMacroCategoriesResponse = {
  categories?: ReadonlyArray<string>;
};

export type ZendeskFullApiSchemaManySkillBasedRoutingAttributeValuesResponse = {
  count?: number;
  instance_values?: ReadonlyArray<ZendeskFullApiSchemaManySkillBasedRoutingAttributeValues>;
  next_page?: string | null;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaTwitterChannelsResponse = {
  monitored_twitter_handles?: ReadonlyArray<ZendeskFullApiSchemaTwitterChannelObject>;
};

export type ZendeskFullApiSchemaOAuthTokensResponse = {
  tokens?: ReadonlyArray<ZendeskFullApiSchemaOauthTokenObject>;
};

export type ZendeskFullApiSchemaObjectTriggerDefinitionResponse = {
  definitions?: ZendeskFullApiSchemaObjectTriggerDefinitionObject;
};

export type ZendeskFullApiSchemaOrganizationFieldsResponse = {
  count?: number;
  next_page?: string | null;
  organization_fields?: ReadonlyArray<ZendeskFullApiSchemaOrganizationFieldObject>;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaOrganizationMembershipsResponse = {
  organization_memberships?: ReadonlyArray<ZendeskFullApiSchemaOrganizationMembershipObject>;
};

export type ZendeskFullApiSchemaOrganizationMergeListResponse = {
  organization_merges?: ReadonlyArray<{
  id?: string;
  loser_id?: number;
  status?: "new" | "in_progress" | "error" | "complete";
  url?: string;
  winner_id?: number;
}>;
};

export type ZendeskFullApiSchemaOrganizationSubscriptionsResponse = (ZendeskFullApiSchemaOffsetPaginationObject & {
  organization_subscriptions?: ReadonlyArray<ZendeskFullApiSchemaOrganizationSubscriptionObject>;
});

export type ZendeskFullApiSchemaTicketsResponse = {
  tickets?: ReadonlyArray<ZendeskFullApiSchemaTicketObject>;
};

export type ZendeskFullApiSchemaPermissionPoliciesResponse = {
  policies?: ReadonlyArray<ZendeskFullApiSchemaPermissionPolicy>;
};

export type ZendeskFullApiSchemaDefinitionsResponse = {
  definitions?: {
  conditions_all?: ReadonlyArray<{
  group?: string;
  nullable?: boolean;
  operators?: ReadonlyArray<{
  terminal?: boolean;
  title?: string;
  value?: string;
}>;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  enabled?: boolean;
  title?: string;
  value?: string;
}>;
}>;
  conditions_any?: ReadonlyArray<{
  group?: string;
  nullable?: boolean;
  operators?: ReadonlyArray<{
  terminal?: boolean;
  title?: string;
  value?: string;
}>;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  enabled?: boolean;
  title?: string;
  value?: string;
}>;
}>;
};
};

export type ZendeskFullApiSchemaQueuesResponse = {
  queues?: ReadonlyArray<ZendeskFullApiSchemaQueueObject>;
};

export type ZendeskFullApiSchemaRemoteAuthenticationsResponse = {
  remote_authentications?: ReadonlyArray<ZendeskFullApiSchemaRemoteAuthenticationObject>;
};

export type ZendeskFullApiSchemaResourceCollectionsResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  resource_collections?: ReadonlyArray<ZendeskFullApiSchemaResourceCollectionObject>;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeDefinitions = {
  definitions?: {
  conditions_all?: ReadonlyArray<{
  subject?: string;
  title?: string;
}>;
  conditions_any?: ReadonlyArray<{
  subject?: string;
  title?: string;
}>;
};
};

export type ZendeskFullApiSchemaSatisfactionReasonsResponse = {
  reasons?: ReadonlyArray<ZendeskFullApiSchemaSatisfactionReasonObject>;
};

export type ZendeskFullApiSchemaSatisfactionRatingsResponse = {
  satisfaction_ratings?: ReadonlyArray<ZendeskFullApiSchemaSatisfactionRatingObject>;
};

export type ZendeskFullApiSchemaSearchResponse = {
  count?: number;
  facets?: string | null;
  next_page?: string | null;
  previous_page?: string | null;
  results?: ReadonlyArray<ZendeskFullApiSchemaSearchResultObject>;
};

export type ZendeskFullApiSchemaSessionsResponse = {
  sessions?: ReadonlyArray<ZendeskFullApiSchemaSessionObject>;
};

export type ZendeskFullApiSchemaSharingAgreementsResponse = {
  sharing_agreements?: ReadonlyArray<ZendeskFullApiSchemaSharingAgreementObject>;
};

export type ZendeskFullApiSchemaTicketSkipsResponse = {
  skips?: ReadonlyArray<ZendeskFullApiSchemaTicketSkipObject>;
};

export type ZendeskFullApiSchemaSLAPoliciesResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  sla_policies?: ReadonlyArray<ZendeskFullApiSchemaSLAPolicyObject>;
};

export type ZendeskFullApiSchemaSupportAddressesResponse = {
  recipient_addresses?: ReadonlyArray<ZendeskFullApiSchemaSupportAddressObject>;
};

export type ZendeskFullApiSchemaSuspendedTicketsResponse = {
  suspended_tickets?: ReadonlyArray<ZendeskFullApiSchemaSuspendedTicketObject>;
};

export type ZendeskFullApiSchemaTagsResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  tags?: ReadonlyArray<ZendeskFullApiSchemaTagListTagObject>;
};

export type ZendeskFullApiSchemaTargetFailuresResponse = {
  target_failures?: ReadonlyArray<ZendeskFullApiSchemaTargetFailureObject>;
};

export type ZendeskFullApiSchemaTargetsResponse = {
  targets?: ReadonlyArray<ZendeskFullApiSchemaTargetObject>;
};

export type ZendeskFullApiSchemaTaskListTemplatesResponse = {
  links?: {
  next: string | null;
  prev: string | null;
};
  meta?: {
  after_cursor: string | null;
  before_cursor: string | null;
  has_more: boolean;
};
  task_list_templates?: ReadonlyArray<ZendeskFullApiSchemaTaskListTemplateObject>;
};

export type ZendeskFullApiSchemaTicketAuditsResponse = {
  after_cursor?: string;
  after_url?: string;
  audits?: ReadonlyArray<ZendeskFullApiSchemaTicketAuditObject>;
  before_cursor?: string;
  before_url?: string;
};

export type ZendeskFullApiSchemaListTicketCollaboratorsResponse = {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};

export type ZendeskFullApiSchemaListTicketEmailCCsResponse = {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};

export type ZendeskFullApiSchemaCustomFieldOptionsResponse = {
  count?: number;
  custom_field_options?: ReadonlyArray<ZendeskFullApiSchemaCustomFieldOptionObject>;
  next_page?: string | null;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaTicketFieldsResponse = {
  ticket_fields?: ReadonlyArray<ZendeskFullApiSchemaTicketFieldObject>;
};

export type ZendeskFullApiSchemaListTicketFollowersResponse = {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};

export type ZendeskFullApiSchemaTicketFormsResponse = {
  ticket_forms?: ReadonlyArray<ZendeskFullApiSchemaTicketFormObject>;
};

export type ZendeskFullApiSchemaListTicketIncidentsResponse = {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};

export type ZendeskFullApiSchemaTicketMetricEventsResponse = ({
  ticket_metric_events?: ReadonlyArray<ZendeskFullApiSchemaTicketMetricEventBaseObject>;
} & {
  count?: number;
  end_time?: number;
  next_page?: string;
});

export type ZendeskFullApiSchemaTicketMetricsResponse = {
  ticket_metrics?: ReadonlyArray<ZendeskFullApiSchemaTicketMetricObject>;
};

export type ZendeskFullApiSchemaSkillBasedRoutingTicketFulfilledResponse = {
  fulfilled_ticket_ids?: ReadonlyArray<number>;
};

export type ZendeskFullApiSchemaTriggerDefinitionResponse = {
  definitions?: ZendeskFullApiSchemaTriggerDefinitionObject;
};

export type ZendeskFullApiSchemaTriggerCategoriesResponse = {
  trigger_categories?: ReadonlyArray<ZendeskFullApiSchemaTriggerCategory>;
};

export type ZendeskFullApiSchemaPagination = {
  links?: {
  next?: string;
  prev?: string;
};
  meta?: {
  after_cursor?: string;
  before_cursor?: string;
  has_more?: boolean;
};
};

export type ZendeskFullApiSchemaTriggerRevisionsResponse = {
  after_cursor?: string;
  after_url?: string;
  before_cursor?: string;
  before_url?: string;
  count?: number;
  trigger_revisions?: ReadonlyArray<{
  author_id?: number;
  created_at?: string;
  diff?: {
  actions?: ReadonlyArray<ZendeskFullApiSchemaTriggerActionDiffObject>;
  active?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
  conditions?: ZendeskFullApiSchemaTriggerConditionDiffObject;
  description?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
  source_id?: number;
  target_id?: number;
  title?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
};
  id?: number;
  snapshot?: ZendeskFullApiSchemaTriggerSnapshotObject;
  url?: string;
}>;
};

export type ZendeskFullApiSchemaUserFieldsResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  user_fields?: ReadonlyArray<ZendeskFullApiSchemaUserFieldObject>;
};

export type ZendeskFullApiSchemaWorkspaceResponse = ({
  workspaces?: ReadonlyArray<ZendeskFullApiSchemaWorkspaceObject>;
} & ZendeskFullApiSchemaOffsetPaginationObject);

export type ZendeskFullApiSchemaTicketMergeInput = {
  ids: ReadonlyArray<number>;
  source_comment?: string;
  source_comment_is_public?: boolean;
  target_comment?: string;
  target_comment_is_public?: boolean;
};

export type ZendeskFullApiSchemaOrganizationsRelatedResponse = {
  organization_related?: ZendeskFullApiSchemaOrganizationMetadataObject;
};

export type ZendeskFullApiSchemaDeletedUserResponse = {
  deleted_user?: ZendeskFullApiSchemaDeletedUserObject;
};

export type ZendeskFullApiSchemaChannelFrameworkPushResultsResponse = {
  results?: ReadonlyArray<ZendeskFullApiSchemaChannelFrameworkResultObject>;
};

export type ZendeskFullApiSchemaPushNotificationDevicesRequest = {
  push_notification_devices?: ZendeskFullApiSchemaPushNotificationDevicesInput;
};

export type ZendeskFullApiSchemaTicketSkipCreation = {
  skip?: ZendeskFullApiSchemaTicketSkipObject;
};

export type ZendeskFullApiSchemaRecoverSuspendedTicketResponse = {
  ticket?: ReadonlyArray<ZendeskFullApiSchemaTicketObject>;
};

export type ZendeskFullApiSchemaRecoverSuspendedTicketsResponse = {
  tickets?: ReadonlyArray<ZendeskFullApiSchemaTicketObject>;
};

export type ZendeskFullApiSchemaTicketChatCommentRedactionResponse = {
  chat_event?: {
  id?: number;
  type?: string;
  value?: {
  chat_id?: string;
  history?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  visitor_id?: string;
};
};
};

export type ZendeskFullApiSchemaAttachmentResponse = {
  attachment?: ZendeskFullApiSchemaAttachmentObject;
};

export type ZendeskFullApiSchemaTicketCommentResponse = {
  comment?: ZendeskFullApiSchemaTicketCommentObject;
};

export type ZendeskFullApiSchemaRenewSessionResponse = {
  authenticity_token?: string;
};

export type ZendeskFullApiSchemaGroupSLAPolicyFilterDefinitionResponse = {
  definitions?: {
  all?: ReadonlyArray<{
  group?: string;
  operators?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  title?: string;
  value?: string;
  values?: {
  list?: ReadonlyArray<{
  title?: string;
  value?: number | null;
}>;
  type?: string;
};
}>;
};
};

export type ZendeskFullApiSchemaResourceCollectionResponse = {
  resource_collection?: ZendeskFullApiSchemaResourceCollectionObject;
};

export type ZendeskFullApiSchemaSLAPolicyFilterDefinitionResponse = {
  definitions?: {
  all?: ReadonlyArray<{
  group?: string;
  operators?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  target?: string | null;
  title?: string;
  value?: string;
  values?: {
  list?: ReadonlyArray<{
  title?: string;
  value?: string | null;
}>;
  type?: string;
};
}>;
  any?: ReadonlyArray<{
  group?: string;
  operators?: ReadonlyArray<{
  title?: string;
  value?: string;
}>;
  target?: string | null;
  title?: string;
  value?: string;
  values?: {
  list?: ReadonlyArray<{
  title?: string;
  value?: string | null;
}>;
  type?: string;
};
}>;
};
};

export type ZendeskFullApiSchemaAccountSettingsResponse = {
  settings?: ZendeskFullApiSchemaAccountSettingsObject;
};

export type ZendeskFullApiSchemaActivityResponse = {
  activity?: ZendeskFullApiSchemaActivityObject;
};

export type ZendeskFullApiSchemaAuditLogResponse = {
  audit_log?: ZendeskFullApiSchemaAuditLogObject;
};

export type ZendeskFullApiSchemaBrandAgentResponse = {
  brand_agent?: ZendeskFullApiSchemaBrandAgentObject;
};

export type ZendeskFullApiSchemaMacroApplyTicketResponse = {
  result?: {
  ticket?: {
  assignee_id?: number;
  comment?: {
  body?: string;
  public?: boolean;
  scoped_body?: ReadonlyArray<ReadonlyArray<string>>;
};
  fields?: {
  id?: number;
  value?: string;
};
  group_id?: number;
  id?: number;
  url?: string;
};
};
};

export type ZendeskFullApiSchemaSessionResponse = {
  session?: ReadonlyArray<ZendeskFullApiSchemaSessionObject>;
};

export type ZendeskFullApiSchemaCurrentUserResponse = {
  user?: (ZendeskFullApiSchemaUserObject & {
  authenticity_token?: string;
});
};

export type ZendeskFullApiSchemaUserSettingsResponse = {
  settings?: {
  admin_center?: {
  has_admin_center_side_nav_open?: boolean;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | boolean | undefined;
};
  lotus?: {
  agent_workspace_theme_preference?: "0" | "1" | "2";
  agent_workspace_theme_preference_for_conversation_panel?: "0" | "1" | "2";
  keyboard_shortcuts_enabled?: boolean;
  macro_shortcuts_enabled?: boolean;
  show_onboarding_tooltips?: boolean;
  two_factor_authentication?: boolean;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | "0" | "1" | "2" | boolean | undefined;
};
  shared_views_order?: ReadonlyArray<number> | null;
};
};

export type ZendeskFullApiSchemaMacroResponse = {
  macro?: ZendeskFullApiSchemaMacroObject;
};

export type ZendeskFullApiSchemaEmailNotificationResponse = {
  email_notification?: ZendeskFullApiSchemaEmailNotificationObject;
};

export type ZendeskFullApiSchemaGlobalClientResponse = {
  global_client?: ZendeskFullApiSchemaGlobalClientObject;
};

export type ZendeskFullApiSchemaItamAssetStatusResponse = {
  status?: ZendeskFullApiSchemaItamAssetStatus;
};

export type ZendeskFullApiSchemaTicketFieldsShowManyResponse = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
  ticket_fields: ReadonlyArray<ZendeskFullApiSchemaTicketFieldObject>;
};

export type ZendeskFullApiSchemaTwitterChannelResponse = {
  monitored_twitter_handle?: ZendeskFullApiSchemaTwitterChannelObject;
};

export type ZendeskFullApiSchemaPermissionPolicyResponse = {
  policy?: ZendeskFullApiSchemaPermissionPolicy;
};

export type ZendeskFullApiSchemaSatisfactionReasonResponse = {
  reason?: ReadonlyArray<ZendeskFullApiSchemaSatisfactionReasonObject>;
};

export type ZendeskFullApiSchemaSecuritySettingsResponse = {
  security_settings?: ZendeskFullApiSchemaSecuritySettingsObject;
};

export type ZendeskFullApiSchemaTargetFailureResponse = {
  target_failure?: ZendeskFullApiSchemaTargetFailureObject;
};

export type ZendeskFullApiSchemaTicketAuditResponse = {
  audit?: ZendeskFullApiSchemaTicketAuditObject;
};

export type ZendeskFullApiSchemaTicketMetricsByTicketMetricIdResponse = {
  ticket_metric?: ReadonlyArray<ZendeskFullApiSchemaTicketMetricObject>;
};

export type ZendeskFullApiSchemaComplianceDeletionStatusesResponse = {
  compliance_deletion_statuses?: ReadonlyArray<ZendeskFullApiSchemaComplianceDeletionStatusObject>;
};

export type ZendeskFullApiSchemaUserRelatedResponse = {
  user_related?: ZendeskFullApiSchemaUserRelatedObject;
};

export type ZendeskFullApiSchemaSuspendedTicketsAttachmentsResponse = {
  upload?: {
  attachments?: ReadonlyArray<ZendeskFullApiSchemaAttachmentObject>;
  token?: string;
};
};

export type ZendeskFullApiSchemaTicketBulkImportRequest = {
  tickets?: ReadonlyArray<ZendeskFullApiSchemaTicketImportInput>;
};

export type ZendeskFullApiSchemaTicketImportRequest = {
  ticket?: ZendeskFullApiSchemaTicketImportInput;
};

export type ZendeskFullApiSchemaTicketRelatedInformation = {
  followup_source_ids?: ReadonlyArray<string>;
  from_archive?: boolean;
  incidents?: number;
  jira_issue_ids?: ReadonlyArray<string>;
  topic_id?: string | null;
};

export type ZendeskFullApiSchemaTicketsCreateRequest = {
  tickets?: ReadonlyArray<ZendeskFullApiSchemaTicketObject>;
};

export type ZendeskFullApiSchemaTicketsUpdateRequest = ({
  ticket: (ZendeskFullApiSchemaTicketObject & {
  additional_tags?: ReadonlyArray<string>;
  remove_tags?: ReadonlyArray<string>;
});
} | {
  tickets: ReadonlyArray<(ZendeskFullApiSchemaTicketObject & {
  additional_tags?: ReadonlyArray<string>;
  id: number;
  remove_tags?: ReadonlyArray<string>;
})>;
});

export type ZendeskFullApiSchemaTriggerRevisionResponse = {
  trigger_revision?: {
  author_id?: number;
  created_at?: string;
  id?: number;
  snapshot?: {
  actions?: ReadonlyArray<ZendeskFullApiSchemaTriggerActionObject>;
  active?: boolean;
  conditions?: ZendeskFullApiSchemaTriggerConditionsObject;
  description?: string | null;
  title?: string;
};
  url?: string;
};
};

export type ZendeskFullApiSchemaAccessRuleUpdateRequest = {
  access_rule?: {
  conditions?: {
  all?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleCondition>;
  any?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleCondition>;
};
  description?: string;
  title?: string;
};
};

export type ZendeskFullApiSchemaAttachmentUpdateRequest = {
  attachment?: ZendeskFullApiSchemaAttachmentUpdateInput;
};

export type ZendeskFullApiSchemaBrandUpdateRequest = {
  brand?: ZendeskFullApiSchemaBrandObject;
};

export type ZendeskFullApiSchemaUserSettingsUpdateRequest = {
  settings: {
  admin_center?: {
  has_admin_center_side_nav_open?: boolean;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | boolean | undefined;
};
  lotus?: {
  agent_workspace_theme_preference?: "0" | "1" | "2";
  agent_workspace_theme_preference_for_conversation_panel?: "0" | "1" | "2";
  keyboard_shortcuts_enabled?: boolean;
  macro_shortcuts_enabled?: boolean;
  show_onboarding_tooltips?: boolean;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | "0" | "1" | "2" | boolean | undefined;
};
  shared_views_order?: ReadonlyArray<number> | null;
};
};

export type ZendeskFullApiSchemaCustomObjectRecordAttachmentUpdateRequest = {
  custom_object_record_attachment: {
  malware_access_override: boolean;
};
};

export type ZendeskFullApiSchemaCustomStatusUpdateRequest = {
  custom_status?: ZendeskFullApiSchemaCustomStatusUpdateInput;
};

export type ZendeskFullApiSchemaMacroUpdateManyInput = {
  macros?: ReadonlyArray<{
  active?: boolean;
  id: number;
  position?: number;
}>;
};

export type ZendeskFullApiSchemaObjectTriggerBulkUpdateRequest = {
  triggers?: ReadonlyArray<ZendeskFullApiSchemaObjectTriggerBulkUpdateItem>;
};

export type ZendeskFullApiSchemaTriggerBulkUpdateRequest = {
  triggers?: ReadonlyArray<ZendeskFullApiSchemaTriggerBulkUpdateItem>;
};

export type ZendeskFullApiSchemaUserUpdateRequest = {
  user: ZendeskFullApiSchemaUserUpdateInput;
};

export type ZendeskFullApiSchemaPermissionPolicyUpdateRequest = {
  policy?: {
  records?: {
  create?: ZendeskFullApiSchemaPermissionAction;
  delete?: ZendeskFullApiSchemaPermissionAction;
  read?: ZendeskFullApiSchemaPermissionAction;
  update?: ZendeskFullApiSchemaPermissionAction;
};
};
};

export type ZendeskFullApiSchemaTaskListTemplateUpdateRequest = {
  task_list_template: {
  description?: string;
  is_active?: boolean;
  is_required?: boolean;
  name?: string;
  tasks?: ReadonlyArray<({
  _destroy: true;
  id: string;
} | {
  description?: string;
  id: string;
  name?: string;
  position?: number;
  required?: boolean;
} | {
  description?: string;
  name: string;
  position?: number;
  required?: boolean;
})>;
};
};

export type ZendeskFullApiSchemaTicketUpdateRequest = {
  system_metadata?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  ticket?: ZendeskFullApiSchemaTicketObject;
};

export type ZendeskFullApiSchemaTicketUpdateResponse = {
  audit?: ZendeskFullApiSchemaAuditObject;
  ticket?: ZendeskFullApiSchemaTicketObject;
};

export type ZendeskFullApiSchemaUpdateTicketFormStatusesParams = {
  ticket_form_status: ReadonlyArray<ZendeskFullApiSchemaTicketFormStatusesUpdateParams>;
};

export type ZendeskFullApiSchemaTriggerCategoryRequest = {
  name?: string;
  position?: number;
};

export type ZendeskFullApiSchemaAttachmentUploadResponse = {
  upload?: {
  attachment?: ZendeskFullApiSchemaAttachmentObject;
  attachments?: ReadonlyArray<ZendeskFullApiSchemaAttachmentObject>;
  token?: string;
};
};

export type ZendeskFullApiSchemaCustomObjectRecordsUpsertRequest = {
  custom_object_record?: ZendeskFullApiSchemaCustomObjectRecord;
};

export type ZendeskFullApiSchemaCustomObjectRecord = {
  created_at?: string;
  created_by_user_id?: string;
  custom_object_fields?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  custom_object_key?: string;
  external_id?: string | null;
  id?: string;
  name: string;
  photo?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  updated_at?: string;
  updated_by_user_id?: string;
  url?: string;
};

export type ZendeskFullApiSchemaOrganizationObject = {
  created_at?: string;
  details?: string | null;
  domain_names?: ReadonlyArray<string>;
  external_id?: string | null;
  group_id?: number | null;
  id?: number;
  name: string;
  notes?: string | null;
  organization_fields?: {
  readonly [key: string]: (string | number) | undefined;
} | null;
  shared_comments?: boolean;
  shared_tickets?: boolean;
  tags?: ReadonlyArray<string>;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaUserObject = (ZendeskFullApiSchemaUserForAdmin | ZendeskFullApiSchemaUserForEndUser);

export type ZendeskFullApiSchemaTriggerCategoryBatchRequest = {
  id: string;
  position: number;
};

export type ZendeskFullApiSchemaTriggerBatchRequest = {
  active?: boolean;
  category_id?: string;
  id: string;
  position?: number;
};

export type ZendeskFullApiSchemaBatchErrorItem = (ZendeskFullApiSchemaError & {
  trigger_id?: string;
});

export type ZendeskFullApiSchemaTriggerCategory = {
  created_at?: string;
  id?: string;
  name?: string;
  position?: number;
  updated_at?: string;
};

export type ZendeskFullApiSchemaTriggerObject = {
  actions: ReadonlyArray<ZendeskFullApiSchemaTriggerActionObject>;
  active?: boolean;
  all?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionObject>;
  any?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionObject>;
  brand_id?: number;
  category?: {
  name?: string;
  position?: number;
};
  category_id?: string | null;
  conditions?: ZendeskFullApiSchemaTriggerConditionsObject;
  created_at?: string;
  default?: boolean;
  description?: string;
  id?: number;
  position?: number;
  raw_title?: string;
  restriction?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  title: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaJobStatusObject = {
  id?: string;
  job_type?: string;
  message?: string | null;
  progress?: number | null;
  results?: (ReadonlyArray<ZendeskFullApiSchemaJobStatusResultObject> | null | {
  success: boolean;
});
  status?: string;
  total?: number | null;
  url?: string;
};

export type ZendeskFullApiSchemaBulkSkillBasedRoutingAttributeValueJob = {
  action: string;
  attributes: {
  attribute_values?: ReadonlyArray<ZendeskFullApiSchemaSkillBasedRoutingAttributeValueObject>;
};
  items: ReadonlyArray<number>;
};

export type ZendeskFullApiSchemaOAuthClientObject = {
  company?: string;
  created_at?: string;
  description?: string;
  global?: boolean;
  id?: number;
  identifier: string;
  kind?: string;
  logo_url?: string;
  name: string;
  redirect_uri?: ReadonlyArray<string>;
  secret?: string;
  updated_at?: string;
  url?: string;
  user_id: number;
};

export type ZendeskFullApiSchemaTicketFormObject = {
  active?: boolean;
  agent_conditions?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  created_at?: string;
  default?: boolean;
  deleted_at?: string;
  display_name?: string;
  end_user_conditions?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  end_user_visible?: boolean;
  id?: number;
  in_all_brands?: boolean;
  name: string;
  position?: number;
  raw_display_name?: string;
  raw_name?: string;
  restricted_brand_ids?: ReadonlyArray<number>;
  ticket_field_ids?: ReadonlyArray<number>;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaCountOrganizationObject = {
  refreshed_at?: string;
  value?: number;
};

export type ZendeskFullApiSchemaTagCountObject = {
  refreshed_at?: string;
  value?: number;
};

export type ZendeskFullApiSchemaAccessRuleCondition = {
  field?: string;
  operator?: "is" | "is_not" | "greater_than" | "less_than" | "greater_than_equal" | "less_than_equal" | "includes" | "not_includes" | "matches" | "present";
  value?: (string | number | number | boolean | ZendeskFullApiSchemaJsonValue);
};

export type ZendeskFullApiSchemaAccessRule = {
  conditions?: {
  all?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleCondition>;
  any?: ReadonlyArray<ZendeskFullApiSchemaAccessRuleCondition>;
};
  created_at?: string;
  description?: string;
  id?: number;
  title?: string;
  updated_at?: string;
};

export type ZendeskFullApiSchemaMacroAttachmentObject = {
  content_type?: string;
  content_url?: string;
  created_at?: string;
  filename?: string;
  id?: number;
  size?: number;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeObject = {
  created_at?: string;
  id?: string;
  name: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeValueObject = {
  agent_skill_priority?: "NORMAL" | "HIGH";
  attribute_id?: string;
  created_at?: string;
  id?: string;
  name?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaAutomationObject = {
  actions?: ReadonlyArray<ZendeskFullApiSchemaActionObject>;
  active?: boolean;
  conditions?: ZendeskFullApiSchemaConditionsObject;
  created_at?: string;
  default?: boolean;
  id?: number;
  position?: number;
  raw_title?: string;
  title?: string;
  updated_at?: string;
};

export type ZendeskFullApiSchemaBookmarkInput = {
  ticket_id?: number;
};

export type ZendeskFullApiSchemaBookmarkObject = {
  created_at?: string;
  id?: number;
  ticket?: ZendeskFullApiSchemaTicketObject;
  url?: string;
};

export type ZendeskFullApiSchemaBrandObject = {
  active?: boolean;
  brand_url?: string;
  created_at?: string;
  default?: boolean;
  has_help_center?: boolean;
  help_center_state?: "enabled" | "disabled" | "restricted";
  host_mapping?: string;
  id?: number;
  is_deleted?: boolean;
  logo?: ZendeskFullApiSchemaAttachmentObject;
  name: string;
  signature_template?: string;
  subdomain: string;
  ticket_form_ids?: ReadonlyArray<number>;
  updated_at?: string;
  url?: string;
  user_separation?: "account" | "brand";
};

export type ZendeskFullApiSchemaCustomObjectCreateInput = {
  allows_attachments?: boolean;
  allows_photos?: boolean;
  description?: string;
  include_in_list_view?: boolean;
  key?: string;
  title?: string;
  title_pluralized?: string;
};

export type ZendeskFullApiSchemaCustomObject = {
  allows_attachments?: boolean;
  allows_photos?: boolean;
  created_at?: string;
  created_by_user_id?: string;
  description?: string;
  include_in_list_view: boolean;
  key: string;
  raw_description?: string;
  raw_title?: string;
  raw_title_pluralized?: string;
  title: string;
  title_pluralized: string;
  updated_at?: string;
  updated_by_user_id?: string;
  url?: string;
};

export type ZendeskFullApiSchemaCustomObjectField = (ZendeskFullApiSchemaCustomFieldObject & {
  properties?: ZendeskFullApiSchemaCustomObjectFieldPropertiesObject;
  readonly?: boolean;
  relationship_target_type?: string;
  required?: boolean;
});

export type ZendeskFullApiSchemaCustomObjectRecordAttachment = {
  content_type?: string;
  content_url?: string;
  created_at?: string;
  created_by?: string;
  custom_object_record_id?: string;
  filename?: string;
  id?: string;
  malware_access_override?: boolean;
  malware_scan_completed_at?: string | null;
  malware_scan_status?: "malware_found" | "malware_not_found" | "failed_to_scan" | "not_scanned";
  size?: number;
};

export type ZendeskFullApiSchemaCustomRoleObject = {
  configuration?: ZendeskFullApiSchemaCustomRoleConfigurationObject;
  created_at?: string;
  description?: string;
  id?: number;
  name: string;
  role_type: number;
  team_member_count?: number;
  updated_at?: string;
};

export type ZendeskFullApiSchemaCustomStatusCreateInput = (ZendeskFullApiSchemaCustomStatusUpdateInput & {
  status_category?: "new" | "open" | "pending" | "hold" | "solved";
});

export type ZendeskFullApiSchemaCustomStatusObject = {
  active?: boolean;
  agent_label: string;
  created_at?: string;
  default?: boolean;
  description?: string;
  end_user_description?: string;
  end_user_label?: string;
  id?: number;
  raw_agent_label?: string;
  raw_description?: string;
  raw_end_user_description?: string;
  raw_end_user_label?: string;
  status_category: "new" | "open" | "pending" | "hold" | "solved";
  updated_at?: string;
};

export type ZendeskFullApiSchemaConditionsObject = {
  all?: ReadonlyArray<ZendeskFullApiSchemaConditionObject>;
  any?: ReadonlyArray<ZendeskFullApiSchemaConditionObject>;
};

export type ZendeskFullApiSchemaDynamicContentObject = {
  created_at?: string;
  default_locale_id: number;
  id?: number;
  name: string;
  outdated?: boolean;
  placeholder?: string;
  updated_at?: string;
  url?: string;
  variants: ReadonlyArray<ZendeskFullApiSchemaDynamicContentVariantObject>;
};

export type ZendeskFullApiSchemaDynamicContentVariantObject = {
  active?: boolean;
  content: string;
  created_at?: string;
  default?: boolean;
  id?: number;
  locale_id: number;
  outdated?: boolean;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaUserIdentityObject = {
  brand_id?: number;
  created_at?: string;
  deliverable_state?: string;
  id?: number;
  primary?: boolean;
  type: "email" | "twitter" | "facebook" | "google" | "phone_number" | "agent_forwarding" | "any_channel" | "foreign" | "sdk" | "messaging";
  undeliverable_count?: number;
  updated_at?: string;
  url?: string;
  user_id: number;
  value: string;
  verification_method?: "none" | "low" | "sso" | "embed" | "full";
  verified?: boolean;
  verified_at?: string | null;
};

export type ZendeskFullApiSchemaGroupObject = {
  created_at?: string;
  default?: boolean;
  deleted?: boolean;
  description?: string;
  id?: number;
  is_public?: boolean;
  name: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaGroupMembershipObject = {
  created_at?: string;
  default?: boolean;
  group_id: number;
  id?: number;
  updated_at?: string;
  url?: string;
  user_id: number;
};

export type ZendeskFullApiSchemaGroupSLAPolicyObject = {
  created_at?: string;
  description?: string;
  filter: ZendeskFullApiSchemaGroupSLAPolicyFilterObject;
  id?: string;
  policy_metrics?: ReadonlyArray<ZendeskFullApiSchemaGroupSLAPolicyMetricObject>;
  position?: number;
  title: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaItamAsset = {
  asset_tag?: string | null;
  asset_type_id: string;
  created_at?: string;
  custom_field_values?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  external_id?: string | null;
  id?: string;
  location_id?: string | null;
  manufacturer?: string | null;
  model?: string | null;
  name: string;
  notes?: string | null;
  organization_id?: number | null;
  purchase_cost?: number | null;
  purchase_date?: string | null;
  serial_number?: string | null;
  status_id: string;
  updated_at?: string;
  url?: string;
  user_id?: number | null;
  vendor?: string | null;
  warranty_expiration?: string | null;
};

export type ZendeskFullApiSchemaItamAssetType = {
  created_at?: string;
  created_by_user_id?: number;
  description?: string | null;
  external_id?: string | null;
  field_keys?: ReadonlyArray<string>;
  hierarchy_depth?: number;
  id?: string;
  is_standard?: boolean;
  name: string;
  parent_id: string;
  updated_at?: string;
  updated_by_user_id?: number;
  url?: string;
};

export type ZendeskFullApiSchemaItamAssetField = ZendeskFullApiSchemaCustomObjectField;

export type ZendeskFullApiSchemaItamAssetLocation = {
  created_at?: string;
  external_id?: string | null;
  id?: string;
  name: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaActionObject = {
  field?: string;
  value?: string;
};

export type ZendeskFullApiSchemaMacroCommonObject = {
  actions: ReadonlyArray<ZendeskFullApiSchemaActionObject>;
  active?: boolean;
  created_at?: string;
  default?: boolean;
  description?: string | null;
  id?: number;
  position?: number;
  raw_title?: string;
  restriction?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  title: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaUserInput = (ZendeskFullApiSchemaUserCreateInput | ZendeskFullApiSchemaUserMergeInput);

export type ZendeskFullApiSchemaOauthTokenObject = {
  client_id?: number;
  created_at?: string;
  expires_at?: string;
  id?: number;
  refresh_token?: string;
  refresh_token_expires_at?: string;
  scopes?: ReadonlyArray<string>;
  token?: string;
  url?: string;
  used_at?: string;
  user_id?: number;
};

export type ZendeskFullApiSchemaObjectTriggerObject = {
  actions: ReadonlyArray<ZendeskFullApiSchemaTriggerActionObject>;
  active?: boolean;
  conditions: ZendeskFullApiSchemaTriggerConditionsObject;
  created_at?: string;
  default?: boolean;
  description?: string;
  id?: number;
  position?: number;
  raw_title?: string;
  title: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaOrganizationFieldObject = (ZendeskFullApiSchemaCustomFieldObject & {
  relationship_target_type?: string;
});

export type ZendeskFullApiSchemaOrganizationMembershipObject = {
  created_at?: string;
  default: boolean | null;
  id?: number;
  organization_id: number;
  organization_name?: string;
  updated_at?: string;
  url?: string;
  user_id: number;
  view_tickets?: boolean;
};

export type ZendeskFullApiSchemaOrganizationSubscriptionInput = {
  organization_id?: number;
  user_id?: number;
};

export type ZendeskFullApiSchemaOrganizationSubscriptionObject = {
  created_at?: string;
  id?: number;
  organization_id?: number;
  user_id?: number;
};

export type ZendeskFullApiSchemaCustomFieldOptionObject = {
  allow_solving?: boolean;
  id?: number;
  name: string;
  position?: number;
  raw_name?: string;
  url?: string;
  value: string;
};

export type ZendeskFullApiSchemaQueueObject = {
  created_at?: string;
  definition?: {
  all?: ReadonlyArray<{
  field?: string;
  operator?: string;
  value?: string;
}>;
  any?: ReadonlyArray<{
  field?: string;
  operator?: string;
  value?: string;
}>;
};
  description?: string;
  id?: string;
  name?: string;
  order?: number;
  primary_groups?: {
  count?: number;
  groups?: ReadonlyArray<{
  id?: number;
  name?: string;
}>;
};
  priority?: number;
  secondary_groups?: {
  count?: number;
  groups?: ReadonlyArray<{
  id?: number;
  name?: string;
}>;
};
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaRequestObject = {
  assignee_id?: number;
  can_be_solved_by_me?: boolean;
  collaborator_ids?: ReadonlyArray<number>;
  created_at?: string;
  custom_fields?: ReadonlyArray<{
  id?: number;
  value?: string;
}>;
  custom_status_id?: number;
  description?: string;
  due_at?: string;
  email_cc_ids?: ReadonlyArray<number>;
  followup_source_id?: number;
  group_id?: number;
  id?: number;
  is_public?: boolean;
  organization_id?: number;
  priority?: string;
  recipient?: string;
  requester_id?: number;
  solved?: boolean;
  status?: string;
  subject: string;
  ticket_form_id?: number;
  type?: string;
  updated_at?: string;
  url?: string;
  via?: ZendeskFullApiSchemaTicketAuditViaObject;
};

export type ZendeskFullApiSchemaSharingAgreementObject = {
  created_at?: string;
  id?: number;
  name?: string;
  partner_name?: string | null;
  remote_subdomain?: string;
  status?: string;
  type?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaSLAPolicyObject = {
  created_at?: string;
  description?: string;
  filter: ZendeskFullApiSchemaSLAPolicyFilterObject;
  id?: number;
  policy_metrics?: ReadonlyArray<ZendeskFullApiSchemaSLAPolicyMetricObject>;
  position?: number;
  title: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaSupportAddressObject = {
  brand_id?: number;
  cname_status?: "unknown" | "verified" | "failed";
  created_at?: string;
  default?: boolean;
  dns_results?: "verified" | "failed";
  domain_verification_code?: string;
  domain_verification_status?: "unknown" | "verified" | "failed";
  email: string;
  forwarding_status?: "unknown" | "waiting" | "verified" | "failed";
  id?: number;
  name?: string;
  spf_status?: "unknown" | "verified" | "failed";
  updated_at?: string;
};

export type ZendeskFullApiSchemaTargetObject = (ZendeskFullApiSchemaTargetCommonFields & (ZendeskFullApiSchemaTargetBasecamp | ZendeskFullApiSchemaTargetCampfire | ZendeskFullApiSchemaTargetClickatell | ZendeskFullApiSchemaTargetEmail | ZendeskFullApiSchemaTargetFlowdock | ZendeskFullApiSchemaTargetGetSatisfaction | ZendeskFullApiSchemaTargetJira | ZendeskFullApiSchemaTargetPivotal | ZendeskFullApiSchemaTargetTwitter | ZendeskFullApiSchemaTargetURL | ZendeskFullApiSchemaTargetHTTP | ZendeskFullApiSchemaTargetYammer));

export type ZendeskFullApiSchemaTaskListObject = {
  created_at?: string;
  description?: string;
  id?: string;
  is_required?: boolean;
  name: string;
  task_count?: number;
  task_list_template_id: string;
  ticket_id: string;
  updated_at?: string;
};

export type ZendeskFullApiSchemaTaskListTemplateObject = {
  created_at?: string;
  description?: string;
  id?: string;
  is_active?: boolean;
  is_required?: boolean;
  name: string;
  task_count?: number;
  tasks?: ReadonlyArray<ZendeskFullApiSchemaTaskObject>;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaTicketObject = {
  additional_collaborators?: ReadonlyArray<ZendeskFullApiSchemaCollaboratorObject>;
  allow_attachments?: boolean;
  allow_channelback?: boolean;
  assignee_email?: string;
  assignee_id?: number | null;
  attribute_value_ids?: ReadonlyArray<number>;
  brand_id?: number | null;
  collaborator_ids?: ReadonlyArray<number>;
  collaborators?: ReadonlyArray<ZendeskFullApiSchemaCollaboratorObject>;
  comment?: ZendeskFullApiSchemaTicketCommentObject;
  created_at?: string;
  custom_fields?: ReadonlyArray<ZendeskFullApiSchemaTicketFieldValueInput>;
  custom_status_id?: number | null;
  description?: string;
  due_at?: string | null;
  email_cc_ids?: ReadonlyArray<number>;
  email_ccs?: ReadonlyArray<ZendeskFullApiSchemaEmailCCObject> | null;
  encoded_id?: string;
  external_id?: string | null;
  fields?: ReadonlyArray<ZendeskFullApiSchemaTicketFieldValueInput>;
  follower_ids?: ReadonlyArray<number>;
  followers?: ReadonlyArray<ZendeskFullApiSchemaFollowerObject>;
  followup_ids?: ReadonlyArray<number>;
  forum_topic_id?: number;
  from_messaging_channel?: boolean;
  generated_timestamp?: number;
  group_id?: number | null;
  has_incidents?: boolean;
  id?: number;
  is_public?: boolean;
  macro_id?: number;
  macro_ids?: ReadonlyArray<number>;
  metadata?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  organization_id?: number | null;
  origin_zrn?: string;
  priority?: "urgent" | "high" | "normal" | "low";
  problem_id?: number | null;
  raw_subject?: string;
  recipient?: string;
  requester?: (string | number | {
  email?: string;
  locale?: string;
  locale_id?: number;
  name?: string;
  organization_id?: number;
  role?: string;
  verified?: boolean;
});
  requester_id?: number | null;
  safe_update?: boolean;
  satisfaction_probability?: number;
  satisfaction_rating?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  sharing_agreement_ids?: ReadonlyArray<number>;
  sharing_agreements?: (ZendeskFullApiSchemaSharingAgreementInput | ReadonlyArray<ZendeskFullApiSchemaSharingAgreementInput>);
  status?: "new" | "open" | "pending" | "hold" | "solved" | "closed";
  subject?: string | null;
  submitter_id?: number | null;
  support_type?: "agent" | "ai_agent";
  suspended_ticket_id?: number;
  suspension_type_id?: number;
  system_metadata?: {
  client?: string;
  ip_address?: string;
};
  tags?: (ReadonlyArray<string> | string);
  tde_workspace?: {
  previous_workspace?: {
  id?: number;
  title?: string;
};
  type?: "ADD" | "CHANGE" | "DELETE";
  workspace?: {
  id?: number;
  title?: string;
};
};
  ticket_form_id?: number | null;
  tpe_voice_comment?: {
  agent_id?: number | null;
  answering_machine_detection_status?: string | null;
  app_id?: number;
  app_name?: string | null;
  author_id?: number;
  call_connected_at?: string | null;
  call_disposition?: string | null;
  call_ended_at?: string | null;
  call_id?: number;
  call_recording_consent?: string | null;
  call_recording_consent_action?: string | null;
  call_recording_consent_keypress?: string | null;
  call_started_at?: string;
  call_type?: string | null;
  callback_number?: string | null;
  callback_requested_at?: string | null;
  completion_status?: string | null;
  connection_attempts?: number | null;
  consultation_time?: number | null;
  direction?: string;
  disconnection_reason?: string | null;
  dnis?: string | null;
  duration?: number | null;
  end_user_id?: number | null;
  end_user_location?: string | null;
  exceeded_queue_time?: boolean | null;
  extension?: string | null;
  external_id?: string;
  from_line?: string;
  from_line_nickname?: string | null;
  hold_time?: number | null;
  intent?: string | null;
  ivr_destination_group_name?: string | null;
  ivr_time_spent?: number | null;
  language?: string | null;
  line_type?: string;
  longest_hold_time?: number | null;
  number_of_holds?: number | null;
  outside_business_hours?: boolean | null;
  overflowed_to?: string | null;
  phone_name?: string | null;
  public?: boolean;
  quality_score?: number | null;
  queue_name?: string | null;
  queue_time?: number | null;
  recorded?: boolean;
  recording_time?: number | null;
  recording_type?: string;
  recording_url?: string | null;
  sentiment_agent?: string | null;
  sentiment_call?: string | null;
  sentiment_customer?: string | null;
  sentiment_trend?: string | null;
  short_summary?: string | null;
  summary?: string | null;
  talk_time?: number | null;
  time_to_answer?: number | null;
  title?: string;
  to_line?: string;
  to_line_nickname?: string | null;
  transcript?: string | null;
  via_id?: number;
  video_recording_url?: string | null;
  voicemail?: boolean | null;
  voicemail_requested_at?: string | null;
  wait_time?: number | null;
};
  type?: "problem" | "incident" | "question" | "task";
  updated_at?: string;
  updated_stamp?: string;
  url?: string;
  via?: ZendeskFullApiSchemaViaObject;
  via_followup_source_id?: number;
  via_id?: number;
  voice_comment?: {
  answered_by_id?: number | null;
  call_duration?: number;
  from?: string;
  location?: string | null;
  recording_url?: string | null;
  to?: string;
  transcription_text?: string | null;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | number | null | number | string | string | null | undefined;
};
};

export type ZendeskFullApiSchemaTicketFieldObject = {
  active?: boolean;
  agent_can_edit?: boolean;
  agent_description?: string;
  collapsed_for_agents?: boolean;
  created_at?: string;
  creator_app_name?: string;
  creator_user_id?: number;
  custom_field_options?: ReadonlyArray<ZendeskFullApiSchemaCustomFieldOptionObject>;
  custom_statuses?: ReadonlyArray<ZendeskFullApiSchemaTicketFieldCustomStatusObject>;
  description?: string;
  editable_in_portal?: boolean;
  id?: number;
  position?: number;
  raw_description?: string;
  raw_title?: string;
  raw_title_in_portal?: string;
  regexp_for_validation?: string | null;
  relationship_filter?: {};
  relationship_target_type?: string;
  removable?: boolean;
  required?: boolean;
  required_in_portal?: boolean;
  sub_type_id?: number;
  system_field_options?: ReadonlyArray<ZendeskFullApiSchemaSystemFieldOptionObject>;
  tag?: string | null;
  title: string;
  title_in_portal?: string;
  type: string;
  updated_at?: string;
  url?: string;
  visible_in_portal?: boolean;
};

export type ZendeskFullApiSchemaTicketFormStatusesCreateParams = {
  custom_status_id: number;
};

export type ZendeskFullApiSchemaTicketFormStatusObject = {
  custom_status_id?: number;
  id?: string;
  ticket_form_id?: number;
};

export type ZendeskFullApiSchemaTicketCreateVoicemailTicketInput = (ZendeskFullApiSchemaTicketObject & {
  additional_tags?: ReadonlyArray<string>;
  remove_tags?: ReadonlyArray<string>;
  via_id?: 44 | 45 | 46;
  voice_comment?: ZendeskFullApiSchemaTicketCreateVoicemailTicketVoiceCommentInput;
});

export type ZendeskFullApiSchemaSatisfactionRatingObject = {
  assignee_id: number;
  comment?: string;
  created_at?: string;
  group_id: number;
  id?: number;
  reason?: string;
  reason_code?: number;
  reason_id?: number;
  requester_id: number;
  score: string;
  ticket_id: number;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaTrialAccountObject = {
  name?: string;
  subdomain?: string;
  url?: string;
};

export type ZendeskFullApiSchemaUserFieldObject = (ZendeskFullApiSchemaCustomFieldObject & {
  relationship_target_type?: string;
});

export type ZendeskFullApiSchemaViewObject = {
  active?: boolean;
  conditions?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  created_at?: string;
  default?: boolean;
  description?: string;
  execution?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  id?: number;
  position?: number;
  restriction?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  title?: string;
  updated_at?: string;
};

export type ZendeskFullApiSchemaError = {
  code: string;
  detail?: string;
  id?: string;
  links?: {};
  source?: {};
  status?: string;
  title: string;
};

export type ZendeskFullApiSchemaLocaleObject = {
  created_at?: string;
  id?: number;
  locale?: string;
  name?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaSearchResultObject = {
  created_at?: string;
  default?: boolean;
  deleted?: boolean;
  description?: string;
  id?: number;
  name?: string;
  result_type?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaCustomObjectRecordFilteredSearchCondition = {
  field_key?: {
  operator?: string;
  value?: (string | number | ReadonlyArray<(string | number)>);
} | null;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | {
  operator?: string;
  value?: (string | number | ReadonlyArray<(string | number)>);
} | null | undefined;
};

export type ZendeskFullApiSchemaItamAssetFilteredSearchCondition = {
  field_key?: {
  operator?: string;
  value?: (string | number | ReadonlyArray<(string | number)>);
} | null;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | {
  operator?: string;
  value?: (string | number | ReadonlyArray<(string | number)>);
} | null | undefined;
};

export type ZendeskFullApiSchemaRelationshipFilterDefinition = {
  conditions_all?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionDefinitionObjectAll>;
  conditions_any?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionDefinitionObjectAny>;
};

export type ZendeskFullApiSchemaTaskObject = {
  created_at?: string;
  description?: string;
  id?: string;
  name: string;
  position?: number;
  required?: boolean;
  updated_at?: string;
};

export type ZendeskFullApiSchemaUserEntitlementObject = {
  is_active?: boolean;
  name?: string;
};

export type ZendeskFullApiSchemaViewCountObject = {
  active?: boolean;
  fresh?: boolean;
  pretty?: string;
  url?: string;
  value?: number | null;
  view_id?: number;
};

export type ZendeskFullApiSchemaGlobalClientTokenSummaryObject = {
  id?: number;
  last_used_at?: string;
  tokens_count?: number;
};

export type ZendeskFullApiSchemaIncrementalSkillBasedRoutingAttributeValue = {
  attribute_id?: string;
  id?: string;
  name?: string;
  time?: string;
  type?: string;
};

export type ZendeskFullApiSchemaIncrementalSkillBasedRoutingAttribute = {
  id?: string;
  name?: string;
  time?: string;
  type?: string;
};

export type ZendeskFullApiSchemaIncrementalSkillBasedRoutingInstanceValue = {
  attribute_value_id?: string;
  id?: string;
  instance_id?: string;
  time?: string;
  type?: string;
};

export type ZendeskFullApiSchemaTicketMetricEventBaseObject = {
  deleted?: boolean;
  id?: number;
  instance_id?: number;
  metric?: "agent_work_time" | "pausable_update_time" | "periodic_update_time" | "reply_time" | "requester_wait_time" | "resolution_time" | "group_ownership_time";
  ticket_id?: number;
  time?: string;
  type?: "activate" | "pause" | "fulfill" | "apply_sla" | "apply_group_sla" | "breach" | "update_status" | "measure";
};

export type ZendeskFullApiSchemaAccessRuleFieldDefinition = {
  group?: string;
  metadata?: {
  collection_key?: string;
  field_id?: number | null;
  item_key?: string;
  source?: string | null;
  url?: string;
};
  nullable?: boolean;
  operators?: ReadonlyArray<{
  format?: string;
  terminal?: boolean;
  title?: string;
  value?: string;
}>;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  dynamic?: boolean;
  enabled?: boolean;
  title?: string;
  value?: string;
}>;
};

export type ZendeskFullApiSchemaOffsetPaginationObject = {
  count?: number;
  next_page?: string | null;
  previous_page?: string | null;
};

export type ZendeskFullApiSchemaActivityObject = {
  actor?: ZendeskFullApiSchemaUserObject;
  actor_id?: number;
  created_at?: string;
  id?: number;
  object?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  target?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  title?: string;
  updated_at?: string;
  url?: string;
  user?: ZendeskFullApiSchemaUserObject;
  user_id?: number;
  verb?: string;
};

export type ZendeskFullApiSchemaSkillBasedRoutingAttributeValueWithoutPriorityObject = {
  attribute_id?: string;
  created_at?: string;
  id?: string;
  name?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaAuditLogObject = {
  action?: string;
  action_label?: string;
  actor_id?: number;
  actor_name?: string;
  change_description?: string;
  created_at?: string;
  id?: number;
  ip_address?: string;
  source_id?: number;
  source_label?: string;
  source_type?: string;
  url?: string;
};

export type ZendeskFullApiSchemaTicketAuditObject = {
  author_id?: number;
  created_at?: string;
  events?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  id?: number;
  metadata?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  ticket_id?: number;
  via?: ZendeskFullApiSchemaTicketAuditViaObject;
};

export type ZendeskFullApiSchemaBrandAgentObject = {
  brand_id: number;
  created_at?: string;
  id?: string;
  updated_at?: string;
  url?: string;
  user_id: number;
};

export type ZendeskFullApiSchemaTicketCommentObject = {
  add_short_url?: boolean;
  attachments?: ReadonlyArray<ZendeskFullApiSchemaAttachmentObject>;
  audit_id?: number;
  author_id?: number | null;
  body?: string;
  channel_back?: string;
  channel_source_id?: string | null;
  created_at?: string;
  html_body?: string;
  id?: number;
  metadata?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  plain_body?: string;
  public?: boolean;
  translate_to?: string | null;
  type?: string;
  uploads?: ReadonlyArray<string>;
  via?: ZendeskFullApiSchemaTicketAuditViaObject;
};

export type ZendeskFullApiSchemaConversationLogObject = {
  attachments: ReadonlyArray<ZendeskFullApiSchemaAttachmentObject>;
  author: {
  type?: "user" | "agent" | "bot";
  "zen:sunco:user_id"?: string;
  "zen:support:user_id"?: number;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | "user" | "agent" | "bot" | string | number | undefined;
};
  content: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  created_at: string;
  id: string;
  metadata: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  reference: string;
  type: string;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | ReadonlyArray<ZendeskFullApiSchemaAttachmentObject> | {
  type?: "user" | "agent" | "bot";
  "zen:sunco:user_id"?: string;
  "zen:support:user_id"?: number;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | "user" | "agent" | "bot" | string | number | undefined;
} | {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | string | undefined;
};

export type ZendeskFullApiSchemaDeletedUserObject = {
  active: boolean;
  created_at: string;
  email: string;
  id: number;
  locale: string;
  locale_id: number;
  name: string;
  organization_id: number;
  phone: string | null;
  photo: {} | null;
  role: string;
  separation?: {
  brand_id?: number;
  scope?: "account" | "brand";
} | null;
  shared_phone_number: string | null;
  time_zone: string;
  updated_at: string;
  url: string;
};

export type ZendeskFullApiSchemaEmailNotificationObject = {
  comment_id?: number;
  created_at?: string;
  email_id?: string;
  message_id?: string;
  notification_id?: number;
  recipients?: ReadonlyArray<ZendeskFullApiSchemaRecipientObject>;
  ticket_id?: number;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaGlobalClientObject = {
  company?: string;
  description?: string;
  id?: number;
  identifier?: string;
  kind?: string;
  logo_url?: string;
  name?: string;
};

export type ZendeskFullApiSchemaCursorPaginationMeta = {
  links?: {
  next: string | null;
  prev: string | null;
};
  meta?: {
  after_cursor: string | null;
  before_cursor: string | null;
  has_more: boolean;
};
};

export type ZendeskFullApiSchemaItamAssetStatus = {
  created_at?: string;
  external_id?: string | null;
  id?: string;
  name?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaManySkillBasedRoutingAttributeValues = {
  agent_id?: number;
  agent_skill_priority?: "NORMAL" | "HIGH";
  attribute_id?: string;
  attribute_value_id?: string;
  created_at?: string;
  id?: string;
  name?: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaTwitterChannelObject = {
  allow_reply?: boolean;
  avatar_url?: string;
  brand_id?: number;
  can_reply?: boolean;
  created_at?: string;
  id: number;
  name?: string;
  screen_name: string;
  twitter_user_id: number;
  updated_at?: string;
};

export type ZendeskFullApiSchemaObjectTriggerDefinitionObject = {
  actions?: ReadonlyArray<ZendeskFullApiSchemaObjectTriggerActionDefinitionObject>;
  conditions_all?: ReadonlyArray<ZendeskFullApiSchemaObjectTriggerConditionDefinitionObjectAll>;
  conditions_any?: ReadonlyArray<ZendeskFullApiSchemaObjectTriggerConditionDefinitionObjectAny>;
};

export type ZendeskFullApiSchemaPermissionPolicy = {
  id?: string;
  records?: {
  create?: ZendeskFullApiSchemaPermissionAction;
  delete?: ZendeskFullApiSchemaPermissionAction;
  read?: ZendeskFullApiSchemaPermissionAction;
  update?: ZendeskFullApiSchemaPermissionAction;
};
  role_name?: string;
};

export type ZendeskFullApiSchemaRemoteAuthenticationObject = {
  agent: boolean;
  agent_primary: boolean;
  auth_flow?: "PKCE" | "authorization_code";
  auth_mode: 2 | 3 | 4;
  auth_mode_name?: "saml" | "jwt" | "oidc";
  auth_url?: string;
  auto_discovery?: boolean;
  brand_id?: number;
  can_display_button_to_end_users: boolean;
  can_display_button_to_team_members: boolean;
  client_id?: string;
  end_user: boolean;
  end_user_primary: boolean;
  fingerprint?: string;
  id?: number;
  ip_ranges?: string | null;
  is_active?: boolean;
  issuer_url?: string;
  jwks_url?: string;
  label?: string;
  masked_client_secret?: string;
  masked_secret?: string;
  name: string;
  priority?: number;
  remote_login_url: string;
  remote_logout_url: string;
  scope?: string;
  token_url?: string;
  update_external_ids?: boolean;
  user_info_url?: string;
};

export type ZendeskFullApiSchemaResourceCollectionObject = {
  created_at?: string;
  id?: number;
  resources?: ReadonlyArray<{
  deleted?: boolean;
  identifier?: string;
  resource_id?: number;
  type?: string;
}>;
  updated_at?: string;
};

export type ZendeskFullApiSchemaSatisfactionReasonObject = {
  created_at?: string;
  deleted_at?: string;
  id?: number;
  raw_value?: string;
  reason_code?: number;
  updated_at?: string;
  url?: string;
  value: string;
};

export type ZendeskFullApiSchemaSessionObject = {
  authenticated_at?: string | null;
  id: number;
  last_seen_at?: string | null;
  url?: string | null;
  user_id?: number | null;
};

export type ZendeskFullApiSchemaTicketSkipObject = {
  created_at?: string;
  id?: number;
  reason?: string;
  ticket?: ZendeskFullApiSchemaTicketObject;
  ticket_id?: number;
  updated_at?: string;
  user_id?: number;
};

export type ZendeskFullApiSchemaSuspendedTicketObject = {
  attachments?: ReadonlyArray<ZendeskFullApiSchemaAttachmentObject> | null;
  author?: ZendeskFullApiSchemaAuthorObject;
  brand_id?: number;
  cause?: string;
  cause_id?: number;
  content?: string;
  created_at?: string;
  error_messages?: ReadonlyArray<{}> | null;
  id?: number;
  message_id?: string;
  recipient?: string;
  subject?: string;
  ticket_id?: number;
  updated_at?: string;
  url?: string;
  via?: ZendeskFullApiSchemaViaObject;
};

export type ZendeskFullApiSchemaTagListTagObject = {
  count?: number;
  name?: string;
};

export type ZendeskFullApiSchemaTargetFailureObject = {
  consecutive_failure_count?: number;
  created_at?: string;
  id?: number;
  raw_request?: string;
  raw_response?: string;
  status_code?: number;
  target_name?: string;
  url?: string;
};

export type ZendeskFullApiSchemaTicketMetricObject = {
  agent_wait_time_in_minutes?: ZendeskFullApiSchemaTicketMetricTimeObject;
  assigned_at?: string;
  assignee_stations?: number;
  assignee_updated_at?: string;
  created_at?: string;
  custom_status_updated_at?: string;
  first_resolution_time_in_minutes?: ZendeskFullApiSchemaTicketMetricTimeObject;
  full_resolution_time_in_minutes?: ZendeskFullApiSchemaTicketMetricTimeObject;
  group_stations?: number;
  id?: number;
  initially_assigned_at?: string;
  latest_comment_added_at?: string;
  on_hold_time_in_minutes?: ZendeskFullApiSchemaTicketMetricTimeObject;
  reopens?: number;
  replies?: number;
  reply_time_in_minutes?: ZendeskFullApiSchemaTicketMetricTimeObject;
  reply_time_in_seconds?: ZendeskFullApiSchemaTicketMetricTimeObject;
  requester_updated_at?: string;
  requester_wait_time_in_minutes?: ZendeskFullApiSchemaTicketMetricTimeObject;
  solved_at?: string;
  status_updated_at?: string;
  ticket_id?: number;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaTriggerDefinitionObject = {
  actions?: ReadonlyArray<ZendeskFullApiSchemaTriggerActionDefinitionObject>;
  conditions_all?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionDefinitionObjectAll>;
  conditions_any?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionDefinitionObjectAny>;
};

export type ZendeskFullApiSchemaTriggerActionDiffObject = {
  field?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
  value?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
};

export type ZendeskFullApiSchemaTriggerChangeObject = {
  change?: string;
  content?: (boolean | string | number | ReadonlyArray<(string | number | boolean)>);
};

export type ZendeskFullApiSchemaTriggerConditionDiffObject = {
  field?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
  operator?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
  value?: ReadonlyArray<ZendeskFullApiSchemaTriggerChangeObject>;
};

export type ZendeskFullApiSchemaTriggerSnapshotObject = {
  actions?: ReadonlyArray<ZendeskFullApiSchemaTriggerActionObject>;
  active?: boolean;
  conditions?: ZendeskFullApiSchemaTriggerConditionsObject;
  description?: string | null;
  title?: string;
};

export type ZendeskFullApiSchemaOrganizationMetadataObject = {
  tickets_count?: number;
  users_count?: number;
};

export type ZendeskFullApiSchemaChannelFrameworkResultObject = {
  external_resource_id?: string;
  status?: ZendeskFullApiSchemaChannelFrameworkResultStatusObject;
};

export type ZendeskFullApiSchemaPushNotificationDevicesInput = ReadonlyArray<string>;

export type ZendeskFullApiSchemaAttachmentObject = (ZendeskFullApiSchemaAttachmentBaseObject & ZendeskFullApiSchemaAttachmentThumbnails);

export type ZendeskFullApiSchemaAccountSettingsObject = {
  active_features?: ZendeskFullApiSchemaAccountSettingsActiveFeaturesObject;
  agents?: ZendeskFullApiSchemaAccountSettingsAgentObject;
  api?: ZendeskFullApiSchemaAccountSettingsApiObject;
  apps?: ZendeskFullApiSchemaAccountSettingsAppsObject;
  billing?: ZendeskFullApiSchemaAccountSettingsBillingObject;
  branding?: ZendeskFullApiSchemaAccountSettingsBrandingObject;
  brands?: ZendeskFullApiSchemaAccountSettingsBrandsObject;
  cdn?: ZendeskFullApiSchemaAccountSettingsCdnObject;
  chat?: ZendeskFullApiSchemaAccountSettingsChatObject;
  cross_sell?: ZendeskFullApiSchemaAccountSettingsCrossSellObject;
  device_metadata?: ZendeskFullApiSchemaAccountSettingsDeviceObject;
  email?: ZendeskFullApiSchemaAccountSettingsEmailObject;
  google_apps?: ZendeskFullApiSchemaAccountSettingsGoogleAppsObject;
  groups?: ZendeskFullApiSchemaAccountSettingsGroupObject;
  knowledge?: ZendeskFullApiSchemaAccountSettingsKnowledgeObject;
  limits?: ZendeskFullApiSchemaAccountSettingsLimitsObject;
  localization?: ZendeskFullApiSchemaAccountSettingsLocalizationObject;
  lotus?: ZendeskFullApiSchemaAccountSettingsLotusObject;
  messaging_inactivity?: ZendeskFullApiSchemaAccountSettingsMessageInactivityObject;
  metrics?: ZendeskFullApiSchemaAccountSettingsMetricsObject;
  onboarding?: ZendeskFullApiSchemaAccountSettingsOnboardingObject;
  routing?: ZendeskFullApiSchemaAccountSettingsRoutingObject;
  rule?: ZendeskFullApiSchemaAccountSettingsRuleObject;
  side_conversations?: ZendeskFullApiSchemaAccountSettingsSideConversationsObject;
  statistics?: ZendeskFullApiSchemaAccountSettingsStatisticsObject;
  ticket_form?: ZendeskFullApiSchemaAccountSettingsTicketFormObject;
  tickets?: ZendeskFullApiSchemaAccountSettingsTicketObject;
  twitter?: ZendeskFullApiSchemaAccountSettingsTwitterObject;
  user?: ZendeskFullApiSchemaAccountSettingsUserObject;
  voice?: ZendeskFullApiSchemaAccountSettingsVoiceObject;
};

export type ZendeskFullApiSchemaSecuritySettingsObject = {
  admins_can_set_user_passwords?: boolean;
  agent_session_timeout?: number;
  assumable?: boolean;
  assumable_account_type?: boolean;
  assumption_duration?: "off" | "day" | "week" | "month" | "year" | "always";
  assumption_expiration?: string | null;
  authentication?: {
  agent?: (ZendeskFullApiSchemaRoleAuthenticationObject & {
  office_365_allowed_tids?: string;
  office_365_enforce_tid?: boolean;
  password?: {
  disallow_local_part_from_email?: boolean;
  failed_attempts_allowed?: number;
  is_available?: boolean;
  max_sequence?: number | null;
  password_complexity?: number;
  password_duration?: number | null;
  password_history_length?: number | null;
  password_in_mixed_case?: boolean;
  password_length?: number;
};
  remote_bypass?: number;
});
  end_user?: (ZendeskFullApiSchemaRoleAuthenticationObject & {
  facebook_login?: boolean;
});
};
  csp_blocking_enabled?: boolean;
  email_agent_when_sensitive_fields_changed?: boolean;
  end_user_session_timeout?: number;
  ip?: {
  enable_agent_ip_restrictions?: boolean;
  ip_ranges?: string;
  ip_restriction_enabled?: boolean;
};
  maximum_session_duration?: number;
  maximum_session_duration_enabled?: boolean;
  mobile_app_access?: boolean;
  mobile_app_session_timeout?: number;
  two_factor_last_update?: string;
};

export type ZendeskFullApiSchemaComplianceDeletionStatusObject = {
  account_subdomain: string;
  action: string;
  application: string;
  created_at: string;
  executer_id: number | null;
  user_id: number;
};

export type ZendeskFullApiSchemaUserRelatedObject = {
  assigned_tickets?: number;
  ccd_tickets?: number;
  organization_subscriptions?: number;
  requested_tickets?: number;
};

export type ZendeskFullApiSchemaTicketImportInput = {
  assignee_id?: number;
  brand_id?: number | null;
  collaborators?: ReadonlyArray<ZendeskFullApiSchemaCollaboratorObject>;
  comment?: ({
  value?: string;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | string | undefined;
} & ZendeskFullApiSchemaTicketCommentObject);
  comments?: ReadonlyArray<({
  value?: string;
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | string | undefined;
} & ZendeskFullApiSchemaTicketCommentObject)>;
  created_at?: string;
  custom_fields?: ReadonlyArray<ZendeskFullApiSchemaTicketFieldValueInput>;
  custom_status_id?: number;
  description?: string;
  email_ccs?: ReadonlyArray<ZendeskFullApiSchemaEmailCCObject> | null;
  external_id?: string;
  followers?: ReadonlyArray<ZendeskFullApiSchemaFollowerObject>;
  group_id?: number;
  priority?: ZendeskFullApiSchemaTicketPriorityEnum;
  recipient?: string;
  requester_id?: number;
  solved_at?: string;
  status?: "new" | "open" | "pending" | "hold" | "solved" | "closed";
  subject?: string;
  tags?: ReadonlyArray<string>;
  updated_at?: string;
  via?: {
  channel?: string;
  source?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
};
};

export type ZendeskFullApiSchemaTriggerActionObject = {
  field?: string;
  value?: (string | number | ReadonlyArray<(string | number)>);
};

export type ZendeskFullApiSchemaTriggerConditionsObject = {
  all?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionObject> | null;
  any?: ReadonlyArray<ZendeskFullApiSchemaTriggerConditionObject> | null;
};

export type ZendeskFullApiSchemaAttachmentUpdateInput = {
  malware_access_override?: boolean;
};

export type ZendeskFullApiSchemaCustomStatusUpdateInput = {
  active?: boolean;
  agent_label?: string;
  description?: string;
  end_user_description?: string;
  end_user_label?: string;
};

export type ZendeskFullApiSchemaObjectTriggerBulkUpdateItem = {
  active?: boolean;
  id: number;
  position?: number;
};

export type ZendeskFullApiSchemaTriggerBulkUpdateItem = {
  active?: boolean;
  category_id?: string;
  id: number;
  position?: number;
};

export type ZendeskFullApiSchemaUserUpdateInput = {
  agent_brand_ids?: ReadonlyArray<number> | null;
  alias?: string | null;
  custom_role_id?: number | null;
  default_group_id?: number | null;
  details?: string | null;
  email?: string;
  external_id?: string | null;
  group_id?: number | null;
  identities?: ReadonlyArray<ZendeskFullApiSchemaUserIdentityInput>;
  language?: string | null;
  locale?: string | null;
  locale_id?: number | null;
  moderator?: boolean | null;
  name?: string;
  notes?: string | null;
  only_private_comments?: boolean | null;
  organization_id?: number | null;
  organization_ids?: ReadonlyArray<number> | null;
  phone?: string | null;
  photo?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  remote_photo_url?: string | null;
  role?: string;
  shared_phone_number?: boolean | null;
  signature?: string | null;
  skip_verify_email?: boolean | null;
  suspended?: boolean | null;
  tags?: ReadonlyArray<string> | null;
  ticket_restriction?: string | null;
  time_zone?: string | null;
  user_fields?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  verified?: boolean | null;
};

export type ZendeskFullApiSchemaPermissionAction = {
  allowed?: boolean;
  rule_id?: number | null;
};

export type ZendeskFullApiSchemaAuditObject = {
  author_id?: number;
  created_at?: string;
  events?: ReadonlyArray<{
  body?: string;
  field_name?: string;
  id?: number;
  type?: string;
  value?: (string | number);
}>;
  id?: number;
  metadata?: {};
  ticket_id?: number;
  via?: ZendeskFullApiSchemaViaObject;
};

export type ZendeskFullApiSchemaTicketFormStatusesUpdateParams = {
  _destroy?: string;
  custom_status_id?: number;
  id?: string;
};

export type ZendeskFullApiSchemaUserForAdmin = {
  active?: boolean;
  agent_brand_ids?: ReadonlyArray<number>;
  alias?: string;
  chat_only?: boolean;
  created_at?: string;
  custom_role_id?: number | null;
  default_group_id?: number;
  details?: string;
  email?: string;
  external_id?: string | null;
  iana_time_zone?: string;
  id?: number;
  last_login_at?: string;
  locale?: string;
  locale_id?: number;
  moderator?: boolean;
  name: string;
  notes?: string;
  only_private_comments?: boolean;
  organization_id?: number | null;
  phone?: string | null;
  photo?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  remote_photo_url?: string;
  report_csv?: boolean;
  restricted_agent?: boolean;
  role?: string;
  role_type?: number | null;
  separation?: {
  brand_id?: number;
  scope: "account" | "brand";
};
  shared?: boolean;
  shared_agent?: boolean;
  shared_phone_number?: boolean | null;
  signature?: string;
  suspended?: boolean;
  suspension_details?: {
  channels: ReadonlyArray<"all" | "messaging">;
} | null;
  tags?: ReadonlyArray<string>;
  ticket_restriction?: string | null;
  time_zone?: string;
  two_factor_auth_enabled?: boolean | null;
  updated_at?: string;
  url?: string;
  user_fields?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  verified?: boolean;
};

export type ZendeskFullApiSchemaUserForEndUser = {
  created_at?: string;
  email?: string;
  iana_time_zone?: string;
  id?: number;
  locale?: string;
  locale_id?: number;
  name: string;
  organization_id?: number;
  phone?: string;
  photo?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
  role?: string;
  shared_phone_number?: boolean;
  time_zone?: string;
  updated_at?: string;
  url?: string;
  verified?: boolean;
};

export type ZendeskFullApiSchemaTriggerConditionObject = {
  field?: string;
  operator?: string;
  value?: (string | number | ReadonlyArray<(string | number)>);
};

export type ZendeskFullApiSchemaJobStatusResultObject = (ZendeskFullApiSchemaCreateResourceResult | ZendeskFullApiSchemaUpdateResourceResult | ZendeskFullApiSchemaFailedResult);

export type ZendeskFullApiSchemaCustomFieldObject = {
  active?: boolean;
  created_at?: string;
  custom_field_options?: ReadonlyArray<ZendeskFullApiSchemaCustomFieldOptionObject>;
  description?: string;
  id?: number;
  key: string;
  position?: number;
  raw_description?: string;
  raw_title?: string;
  regexp_for_validation?: string | null;
  relationship_filter?: {};
  system?: boolean;
  tag?: string;
  title: string;
  type: string;
  updated_at?: string;
  url?: string;
};

export type ZendeskFullApiSchemaCustomObjectFieldPropertiesObject = {
  allowed_currencies?: ReadonlyArray<string>;
  autoincrement_enabled?: boolean;
  autoincrement_next_sequence?: number;
  autoincrement_padding?: number;
  autoincrement_prefix?: string;
  cascade_permissions_enabled?: boolean;
  is_unique?: boolean;
  rollup_aggregated_field?: string | null;
  rollup_aggregated_field_title?: string;
  rollup_aggregation_type?: "COUNT" | "SUM" | "MIN" | "MAX";
  rollup_child_object?: string;
  rollup_filter_criteria?: {} | null;
};

export type ZendeskFullApiSchemaCustomRoleConfigurationObject = {
  actions_access?: string;
  assign_tickets_to_any_group?: boolean;
  capacity_rules_access?: string;
  chat_access?: boolean;
  end_user_list_access?: string;
  end_user_profile_access?: string;
  execute_it_asset_management_actions?: boolean;
  explore_access?: string;
  export_views?: boolean;
  forum_access?: string;
  forum_access_restricted_content?: boolean;
  group_access?: boolean;
  light_agent?: boolean;
  macro_access?: string;
  manage_api_credentials?: boolean;
  manage_business_rules?: boolean;
  manage_contextual_workspaces?: boolean;
  manage_dynamic_content?: boolean;
  manage_extensions_and_channels?: boolean;
  manage_facebook?: boolean;
  manage_organization_fields?: boolean;
  manage_ticket_fields?: boolean;
  manage_ticket_forms?: boolean;
  manage_ticket_settings?: boolean;
  manage_user_fields?: boolean;
  manage_user_own_contacts?: boolean;
  manage_user_own_forwarding_numbers?: boolean;
  manage_user_own_photo?: boolean;
  moderate_forums?: boolean;
  modify_closed_tickets?: boolean;
  organization_editing?: boolean;
  organization_notes_editing?: boolean;
  report_access?: string;
  side_conversation_create?: boolean;
  ticket_access?: string;
  ticket_comment_access?: string;
  ticket_deletion?: boolean;
  ticket_editing?: boolean;
  ticket_merge?: boolean;
  ticket_tag_editing?: boolean;
  twitter_search_access?: boolean;
  update_api_settings?: boolean;
  update_user_own_alias?: boolean;
  update_user_own_name?: boolean;
  update_user_own_signature?: boolean;
  user_view_access?: string;
  view_access?: string;
  view_access_logs?: boolean;
  view_audit_logs?: boolean;
  view_deleted_tickets?: boolean;
  view_filter_tickets?: boolean;
  voice_access?: boolean;
  voice_dashboard_access?: boolean;
};

export type ZendeskFullApiSchemaConditionObject = {
  field?: string;
  operator?: string;
  value?: string;
};

export type ZendeskFullApiSchemaGroupSLAPolicyFilterObject = {
  all?: ReadonlyArray<ZendeskFullApiSchemaGroupSLAPolicyFilterConditionObject>;
};

export type ZendeskFullApiSchemaGroupSLAPolicyMetricObject = {
  business_hours?: boolean;
  metric?: string;
  priority?: string;
  target?: number;
};

export type ZendeskFullApiSchemaUserCreateInput = {
  active_brand_id?: number | null;
  agent_brand_ids?: ReadonlyArray<number>;
  alias?: string | null;
  custom_role_id?: number | null;
  default_group_id?: number | null;
  details?: string | null;
  email?: string;
  external_id?: string | null;
  group_id?: number | null;
  group_ids?: ReadonlyArray<number>;
  identities?: ReadonlyArray<ZendeskFullApiSchemaUserIdentityInput>;
  language?: string | null;
  locale?: string | null;
  locale_id?: number | null;
  moderator?: boolean | null;
  name: string;
  notes?: string | null;
  only_private_comments?: boolean | null;
  organization?: {
  name: string;
};
  organization_id?: number | null;
  organization_ids?: ReadonlyArray<number> | null;
  organization_name?: string | null;
  password?: string;
  phone?: string | null;
  remote_photo_url?: string | null;
  role?: string;
  separation?: ({
  scope: "account";
} | {
  brand_id: number;
  scope: "brand";
});
  shared_phone_number?: boolean | null;
  signature?: string | null;
  skip_verify_email?: boolean | null;
  suspended?: boolean | null;
  tags?: ReadonlyArray<string> | null;
  ticket_restriction?: string | null;
  time_zone?: string | null;
  user_fields?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  verified?: boolean | null;
};

export type ZendeskFullApiSchemaUserMergeInput = {
  active_brand_id?: number | null;
  agent_brand_ids?: ReadonlyArray<number>;
  alias?: string | null;
  custom_role_id?: number | null;
  default_group_id?: number | null;
  details?: string | null;
  email?: string;
  external_id?: string | null;
  group_id?: number | null;
  group_ids?: ReadonlyArray<number>;
  id?: number;
  identities?: ReadonlyArray<ZendeskFullApiSchemaUserIdentityInput>;
  language?: string | null;
  locale?: string | null;
  locale_id?: number | null;
  moderator?: boolean | null;
  name?: string;
  notes?: string | null;
  only_private_comments?: boolean | null;
  organization?: {
  name: string;
};
  organization_id?: number | null;
  organization_ids?: ReadonlyArray<number> | null;
  organization_name?: string | null;
  password?: string;
  phone?: string | null;
  remote_photo_url?: string | null;
  role?: string;
  shared_phone_number?: boolean | null;
  signature?: string | null;
  skip_verify_email?: boolean | null;
  suspended?: boolean | null;
  tags?: ReadonlyArray<string> | null;
  ticket_restriction?: string | null;
  time_zone?: string | null;
  user_fields?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
} | null;
  verified?: boolean | null;
};

export type ZendeskFullApiSchemaTicketAuditViaObject = {
  channel?: string;
  source?: {
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
};
};

export type ZendeskFullApiSchemaSLAPolicyFilterObject = {
  all?: ReadonlyArray<ZendeskFullApiSchemaSLAPolicyFilterConditionObject>;
  any?: ReadonlyArray<ZendeskFullApiSchemaSLAPolicyFilterConditionObject>;
};

export type ZendeskFullApiSchemaSLAPolicyMetricObject = {
  business_hours?: boolean;
  metric?: string;
  priority?: string;
  target?: number;
};

export type ZendeskFullApiSchemaTargetCommonFields = {
  active?: boolean;
  created_at?: string;
  id?: number;
  title: string;
  type: string;
};

export type ZendeskFullApiSchemaTargetBasecamp = {
  message_id?: string;
  password?: string;
  project_id: string;
  resource: string;
  target_url: string;
  todo_list_id?: string;
  token: string;
  username?: string;
};

export type ZendeskFullApiSchemaTargetCampfire = {
  preserve_format?: boolean;
  room: string;
  ssl?: boolean;
  subdomain: string;
  token: string;
};

export type ZendeskFullApiSchemaTargetClickatell = {
  api_id: string;
  attribute?: string;
  from?: string;
  method?: string;
  password: string;
  target_url?: string;
  to: string;
  us_small_business_account?: string;
  username: string;
};

export type ZendeskFullApiSchemaTargetEmail = {
  email: string;
  subject: string;
};

export type ZendeskFullApiSchemaTargetFlowdock = {
  api_token: string;
};

export type ZendeskFullApiSchemaTargetGetSatisfaction = {
  account_name: string;
  email: string;
  password: string;
  target_url?: string;
};

export type ZendeskFullApiSchemaTargetJira = {
  password: string;
  target_url: string;
  username: string;
};

export type ZendeskFullApiSchemaTargetPivotal = {
  owner_by?: string;
  project_id: string;
  requested_by?: string;
  story_labels?: string;
  story_title: string;
  story_type: string;
  token: string;
};

export type ZendeskFullApiSchemaTargetTwitter = {
  secret?: string;
  token?: string;
};

export type ZendeskFullApiSchemaTargetURL = {
  attribute: string;
  method?: string;
  password?: string;
  target_url: string;
  username?: string;
};

export type ZendeskFullApiSchemaTargetHTTP = {
  content_type: string;
  method: string;
  password?: string;
  target_url: string;
  username?: string;
};

export type ZendeskFullApiSchemaTargetYammer = {
  group_id?: string;
  token?: string;
};

export type ZendeskFullApiSchemaCollaboratorObject = {
  email?: string;
  name?: string;
};

export type ZendeskFullApiSchemaTicketFieldValueInput = {
  id: number;
  value?: (string | number | boolean | ReadonlyArray<string>);
};

export type ZendeskFullApiSchemaEmailCCObject = (ZendeskFullApiSchemaFollowerObject & {
  action?: "put" | "delete";
  user_email?: string;
  user_id?: number;
  user_name?: string;
});

export type ZendeskFullApiSchemaFollowerObject = {
  action?: "put" | "delete";
  user_email?: string;
  user_id?: number;
  user_name?: string | null;
};

export type ZendeskFullApiSchemaSharingAgreementInput = {
  custom_fields?: ReadonlyArray<ZendeskFullApiSchemaTicketFieldValueInput>;
  id?: number;
};

export type ZendeskFullApiSchemaViaObject = {
  channel?: (string | number);
  source?: {
  from?: {
  address?: string | null;
  id?: number | null;
  name?: string | null;
  title?: string | null;
};
  rel?: string | null;
  to?: {
  address?: string;
  name?: string;
};
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | {
  address?: string | null;
  id?: number | null;
  name?: string | null;
  title?: string | null;
} | string | null | {
  address?: string;
  name?: string;
} | undefined;
};
};

export type ZendeskFullApiSchemaTicketFieldCustomStatusObject = {
  active?: boolean;
  agent_label?: string;
  created_at?: string;
  default?: boolean;
  description?: string;
  end_user_description?: string;
  end_user_label?: string;
  id?: number;
  status_category?: "new" | "open" | "pending" | "hold" | "solved";
  updated_at?: string;
};

export type ZendeskFullApiSchemaSystemFieldOptionObject = {
  name?: string;
  value?: string;
};

export type ZendeskFullApiSchemaTicketCreateVoicemailTicketVoiceCommentInput = {
  answered_by_id?: number;
  call_duration?: number;
  from?: string;
  location?: string;
  public?: boolean;
  recording_type?: "call" | "voicemail" | "ai";
  recording_url?: string;
  started_at?: string;
  to?: string;
  transcription_text?: string;
};

export type ZendeskFullApiSchemaTriggerConditionDefinitionObjectAll = {
  group?: string;
  nullable?: boolean;
  operators?: ReadonlyArray<{
  terminal?: boolean;
  title?: string;
  value?: string;
}>;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  enabled?: boolean;
  title?: string;
  value?: string;
}>;
};

export type ZendeskFullApiSchemaTriggerConditionDefinitionObjectAny = {
  group?: string;
  nullable?: boolean;
  operators?: ReadonlyArray<{
  terminal?: boolean;
  title?: string;
  value?: string;
}>;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
};

export type ZendeskFullApiSchemaRecipientObject = {
  delivery_status?: {
  code?: string;
  id?: number;
  message?: string;
  name?: string;
};
  email_address?: string;
  user_id?: number;
};

export type ZendeskFullApiSchemaObjectTriggerActionDefinitionObject = {
  group?: string;
  nullable?: boolean;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  enabled?: boolean;
  format?: string;
  title?: string;
  value?: string;
}>;
};

export type ZendeskFullApiSchemaObjectTriggerConditionDefinitionObjectAll = {
  group?: string;
  nullable?: boolean;
  operators?: ReadonlyArray<{
  format?: string;
  terminal?: boolean;
  title?: string;
  value?: string;
}>;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  enabled?: boolean;
  title?: string;
  value?: string;
}>;
};

export type ZendeskFullApiSchemaObjectTriggerConditionDefinitionObjectAny = {
  group?: string;
  nullable?: boolean;
  operators?: ReadonlyArray<{
  format?: string;
  terminal?: boolean;
  title?: string;
  value?: string;
}>;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  enabled?: boolean;
  title?: string;
  value?: string;
}>;
};

export type ZendeskFullApiSchemaAuthorObject = {
  email?: string;
  id?: number;
  name?: string;
};

export type ZendeskFullApiSchemaTicketMetricTimeObject = {
  business?: number;
  calendar?: number;
};

export type ZendeskFullApiSchemaTriggerActionDefinitionObject = {
  group?: string;
  nullable?: boolean;
  repeatable?: boolean;
  subject?: string;
  title?: string;
  type?: string;
  values?: ReadonlyArray<{
  enabled?: boolean;
  title?: string;
  value?: string;
}>;
};

export type ZendeskFullApiSchemaChannelFrameworkResultStatusObject = {
  code?: string;
  description?: string;
};

export type ZendeskFullApiSchemaAttachmentBaseObject = {
  content_type?: string;
  content_url?: string;
  deleted?: boolean;
  file_name?: string;
  height?: number;
  id?: number;
  inline?: boolean;
  malware_access_override?: boolean;
  malware_scan_result?: string;
  mapped_content_url?: string;
  size?: number;
  url?: string;
  width?: number;
};

export type ZendeskFullApiSchemaAttachmentThumbnails = {
  thumbnails?: ReadonlyArray<ZendeskFullApiSchemaAttachmentBaseObject>;
};

export type ZendeskFullApiSchemaAccountSettingsActiveFeaturesObject = {
  agent_forwarding?: boolean;
  allow_ccs?: boolean;
  allow_email_template_customization?: boolean;
  automatic_answers?: boolean;
  bcc_archiving?: boolean;
  benchmark_opt_out?: boolean;
  business_hours?: boolean;
  chat?: boolean;
  chat_about_my_ticket?: boolean;
  csat_reason_code?: boolean;
  custom_dkim_domain?: boolean;
  customer_context_as_default?: boolean;
  customer_satisfaction?: boolean;
  customer_satisfaction_survey?: boolean;
  dynamic_contents?: boolean;
  explore?: boolean;
  explore_on_support_ent_plan?: boolean;
  explore_on_support_pro_plan?: boolean;
  facebook?: boolean;
  facebook_login?: boolean;
  fallback_composer?: boolean;
  forum_analytics?: boolean;
  good_data_and_explore?: boolean;
  google_login?: boolean;
  is_abusive?: boolean;
  light_agents?: boolean;
  markdown?: boolean;
  on_hold_status?: boolean;
  organization_access_enabled?: boolean;
  rich_content_in_emails?: boolean;
  sandbox?: boolean;
  satisfaction_prediction?: boolean;
  suspended_ticket_notification?: boolean;
  ticket_forms?: boolean;
  ticket_tagging?: boolean;
  topic_suggestion?: boolean;
  twitter?: boolean;
  twitter_login?: boolean;
  user_org_fields?: boolean;
  user_tagging?: boolean;
  voice?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsAgentObject = {
  agent_home?: boolean;
  agent_workspace?: boolean;
  aw_self_serve_migration_enabled?: boolean;
  focus_mode?: boolean;
  idle_timeout_enabled?: boolean;
  unified_agent_statuses?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsApiObject = {
  accepted_api_agreement?: boolean;
  api_password_access_end_users?: boolean;
  api_token_access?: string;
};

export type ZendeskFullApiSchemaAccountSettingsAppsObject = {
  create_private?: boolean;
  create_public?: boolean;
  use?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsBillingObject = {
  backend?: string;
};

export type ZendeskFullApiSchemaAccountSettingsBrandingObject = {
  favicon_url?: string | null;
  header_color?: string;
  header_logo_url?: string | null;
  page_background_color?: string;
  tab_background_color?: string;
  text_color?: string;
};

export type ZendeskFullApiSchemaAccountSettingsBrandsObject = {
  default_brand_id?: number;
  end_user_across_brand_requests?: boolean;
  end_user_upgrade_brand_association_behavior?: string;
  new_agent_brand_association_behavior?: string;
  require_brand_on_new_tickets?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsCdnObject = {
  cdn_provider?: string;
  fallback_cdn_provider?: string;
  hosts?: ReadonlyArray<{
  name?: string;
  url?: string;
}>;
};

export type ZendeskFullApiSchemaAccountSettingsChatObject = {
  available?: boolean;
  enabled?: boolean;
  integrated?: boolean;
  maximum_request_count?: number;
  welcome_message?: string;
};

export type ZendeskFullApiSchemaAccountSettingsCrossSellObject = {
  show_chat_tooltip?: boolean;
  xsell_source?: string | null;
};

export type ZendeskFullApiSchemaAccountSettingsDeviceObject = {
  enabled?: boolean;
  hide_ip?: boolean;
  hide_location?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsEmailObject = {
  accept_wildcard_emails?: boolean;
  custom_dkim_domain?: boolean;
  email_sender_authentication?: boolean;
  email_sender_authentication_profile?: "default" | "enhanced";
  email_status?: boolean;
  email_template_photos?: boolean;
  email_template_selection?: boolean;
  gmail_actions?: boolean;
  html_mail_template?: string;
  mail_delimiter?: string;
  modern_email_template?: boolean;
  multi_recipient_email_tickets?: boolean;
  no_mail_delimiter?: boolean;
  personalized_replies?: boolean;
  rich_content_in_emails?: boolean;
  send_gmail_messages_via_gmail?: boolean;
  text_mail_template?: string;
};

export type ZendeskFullApiSchemaAccountSettingsGoogleAppsObject = {
  has_google_apps?: boolean;
  has_google_apps_admin?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsGroupObject = {
  check_group_name_uniqueness?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsKnowledgeObject = {
  default_search_filters_brands?: string;
  default_search_filters_categories?: string;
  default_search_filters_external_content_sources?: string;
  default_search_filters_locales?: string;
  default_search_filters_sections?: string;
  generative_answers?: boolean;
  require_article_templates?: boolean;
  search_articles?: boolean;
  search_community_posts?: boolean;
  search_external_content?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsLimitsObject = {
  attachment_size?: number;
};

export type ZendeskFullApiSchemaAccountSettingsLocalizationObject = {
  locale_ids?: ReadonlyArray<number>;
};

export type ZendeskFullApiSchemaAccountSettingsLotusObject = {
  pod_id?: number;
  prefer_lotus?: boolean;
  reporting?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsMessageInactivityObject = {
  default_localized_messages?: {
  pre_solved_message_1?: string;
  pre_solved_message_2?: string;
  solved_message?: string;
};
  enabled?: boolean;
  end_session?: boolean;
  reminders?: ReadonlyArray<{
  message: string;
  tags?: ReadonlyArray<string>;
  ticket_status_id?: number | null;
  timeout?: number | null;
}>;
  ticket_status_id?: number;
  timeout?: number;
};

export type ZendeskFullApiSchemaAccountSettingsMetricsObject = {
  account_size?: string;
};

export type ZendeskFullApiSchemaAccountSettingsOnboardingObject = {
  checklist_onboarding_version?: number;
  onboarding_segments?: string | null;
  product_sign_up?: string | null;
};

export type ZendeskFullApiSchemaAccountSettingsRoutingObject = {
  autorouting_tag?: string;
  enabled?: boolean;
  max_email_capacity?: number;
  max_messaging_capacity?: number;
  reassignment_messaging_enabled?: boolean;
  reassignment_messaging_timeout?: number;
  reassignment_talk_timeout?: number;
};

export type ZendeskFullApiSchemaAccountSettingsRuleObject = {
  macro_most_used?: boolean;
  macro_order?: string;
  skill_based_filtered_views?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  using_skill_based_routing?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsSideConversationsObject = {
  email_channel?: boolean;
  msteams_channel?: boolean;
  show_in_context_panel?: boolean;
  slack_channel?: boolean;
  tickets_channel?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsStatisticsObject = {
  forum?: boolean;
  rule_usage?: boolean;
  search?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsTicketFormObject = {
  raw_ticket_forms_instructions?: string;
  ticket_forms_instructions?: string;
};

export type ZendeskFullApiSchemaAccountSettingsTicketObject = {
  accepted_new_collaboration_tos?: boolean;
  agent_collision?: boolean;
  agent_invitation_enabled?: boolean;
  agent_ticket_deletion?: boolean;
  allow_group_reset?: boolean;
  assign_default_organization?: boolean;
  assign_tickets_upon_solve?: boolean;
  auto_translation_enabled?: boolean;
  auto_updated_ccs_followers_rules?: boolean;
  chat_sla_enablement?: boolean;
  collaboration?: boolean;
  comments_public_by_default?: boolean;
  default_solved_ticket_reassignment_strategy?: string;
  default_to_draft_mode?: boolean;
  email_attachments?: boolean;
  emoji_autocompletion?: boolean;
  follower_and_email_cc_collaborations?: boolean;
  has_color_text?: boolean;
  is_first_comment_private_enabled?: boolean;
  light_agent_email_ccs_allowed?: boolean;
  list_empty_views?: boolean;
  list_newest_comments_first?: boolean;
  markdown_ticket_comments?: boolean;
  maximum_personal_views_to_list?: number;
  modern_ticket_reassignment?: boolean;
  private_attachments?: boolean;
  rich_text_comments?: boolean;
  show_modern_ticket_reassignment?: boolean;
  status_hold?: boolean;
  tagging?: boolean;
  using_skill_based_routing?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsTwitterObject = {
  shorten_url?: string;
};

export type ZendeskFullApiSchemaAccountSettingsUserObject = {
  agent_created_welcome_emails?: boolean;
  end_user_phone_number_validation?: boolean;
  have_gravatars_enabled?: boolean;
  language_selection?: boolean;
  multiple_organizations?: boolean;
  tagging?: boolean;
  time_zone_selection?: boolean;
};

export type ZendeskFullApiSchemaAccountSettingsVoiceObject = {
  agent_confirmation_when_forwarding?: boolean;
  agent_wrap_up_after_calls?: boolean;
  enabled?: boolean;
  logging?: boolean;
  maximum_queue_size?: number;
  maximum_queue_wait_time?: number;
  only_during_business_hours?: boolean;
  outbound_enabled?: boolean;
  recordings_public?: boolean;
  uk_mobile_forwarding?: boolean;
};

export type ZendeskFullApiSchemaRoleAuthenticationObject = {
  enforce_sso?: boolean;
  google_login?: boolean;
  office_365_login?: boolean;
  primary_external_auth?: string | null;
  remote_login?: boolean;
  security_policy_id?: number;
  security_policy_name?: "low" | "medium" | "high" | "recommended" | "custom";
  sso_auto_redirect?: boolean;
  two_factor_enforce?: boolean;
  zendesk_login?: boolean;
};

export type ZendeskFullApiSchemaTicketPriorityEnum = "urgent" | "high" | "normal" | "low";

export type ZendeskFullApiSchemaUserIdentityInput = {
  primary?: boolean;
  type: "email" | "twitter" | "facebook" | "google" | "phone_number" | "agent_forwarding" | "any_channel" | "foreign" | "sdk" | "messaging";
  value: string;
  verification_method?: "none" | "low" | "sso" | "embed" | "full";
  verified?: boolean;
};

export type ZendeskFullApiSchemaCreateResourceResult = {
  id: number;
  index: number;
};

export type ZendeskFullApiSchemaUpdateResourceResult = {
  action: string;
  id: number;
  status: string;
  success: boolean;
};

export type ZendeskFullApiSchemaFailedResult = {
  action: string;
  details: string;
  error: string;
  id: number;
  success: boolean;
};

export type ZendeskFullApiSchemaGroupSLAPolicyFilterConditionObject = {
  field?: string;
  operator?: string;
  value?: ReadonlyArray<(string | number)>;
};

export type ZendeskFullApiSchemaSLAPolicyFilterConditionObject = {
  field?: string;
  operator?: string;
  value?: (string | ReadonlyArray<(string | number)>);
};

export interface ZendeskFullApiOperationQueryMap {
  "AddOrganizationTags": {};
  "AutocompleteCustomObjectRecordSearch": {
  name?: string;
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
  field_id?: string;
  source?: string;
  "filter[dynamic_values]"?: {
  readonly [key: string]: number | undefined;
};
  requester_id?: number;
  assignee_id?: number;
  organization_id?: number;
};
  "AutocompleteOrganizations": {
  name: string;
  field_id?: string;
  source?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "AutocompleteProblems": {
  text?: string;
};
  "AutocompleteTags": {
  name?: string;
};
  "AutocompleteTagsPost": {
  name?: string;
  per_page?: number;
};
  "AutocompleteUsers": {
  name?: string;
  phone?: string;
  filter?: "assignable" | "requester";
  field_id?: string;
  source?: string;
  include?: string;
  per_page?: number;
  brand_id?: number;
};
  "AutocompleteUsersPost": {
  include?: string;
  filter?: string;
  per_page?: number;
};
  "BatchOperateTriggerCategories": {};
  "BulkDeleteAutomations": {
  ids?: ReadonlyArray<number>;
};
  "BulkDeleteSessionsByUserId": {};
  "BulkDeleteTickets": {
  ids: string;
};
  "BulkDeleteViews": {
  ids: string;
};
  "BulkPermanentlyDeleteTickets": {
  ids: string;
};
  "BulkRestoreDeletedTickets": {
  ids: string;
};
  "BulkSetAgentAttributeValuesJob": {};
  "BulkUpdateDefaultCustomStatus": {};
  "ChangeOwnPassword": {
  brand_id?: number;
};
  "CheckHostMappingValidity": {
  host_mapping: string;
  subdomain: string;
};
  "CheckHostMappingValidityForExistingBrand": {};
  "ClientGenerateSecret": {};
  "CloneTicketForm": {};
  "CountActivities": {};
  "CountAuditsForTicket": {};
  "CountCustomObjectRecords": {};
  "CountDeletedUsers": {};
  "CountGroups": {};
  "CountGroupUsers": {
  role?: string;
  "role[]"?: string;
  permission_set?: number;
};
  "CountOrganizations": {
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "CountOrganizationTickets": {};
  "CountOrganizationUsers": {
  role?: string;
  "role[]"?: string;
  permission_set?: number;
};
  "CountSatisfactionRatings": {};
  "CountSearchResults": {
  query: string;
};
  "CountTags": {};
  "CountTicketComments": {};
  "CountTicketFields": {};
  "CountTickets": {};
  "CountUserAssignedTickets": {};
  "CountUserCCDTickets": {};
  "CountUserGroups": {};
  "CountUserOrganizations": {};
  "CountUsers": {
  role?: string;
  "role[]"?: string;
  permission_set?: number;
};
  "CountViews": {};
  "CreateAccessRule": {};
  "CreateApprovalRequest": {};
  "CreateAssociatedMacroAttachment": {};
  "CreateAttribute": {};
  "CreateAttributeValue": {};
  "CreateAutomation": {};
  "CreateBookmark": {};
  "CreateBrand": {};
  "CreateCustomObject": {};
  "CreateCustomObjectField": {};
  "CreateCustomObjectRecord": {};
  "CreateCustomObjectRecordAttachment": {};
  "CreateCustomRole": {};
  "CreateCustomStatus": {};
  "CreateDeletionSchedule": {};
  "CreateDynamicContent": {};
  "CreateDynamicContentVariant": {};
  "CreateEndUserIdentity": {
  "type[]"?: "email" | "phone_number";
  brand_id?: number;
};
  "CreateGroup": {};
  "CreateGroupMembership": {};
  "CreateGroupSLAPolicy": {};
  "CreateItamAsset": {};
  "CreateItamAssetType": {};
  "CreateItamAssetTypeField": {};
  "CreateItamLocation": {};
  "CreateMacro": {};
  "CreateMacroAttachment": {};
  "CreateManyDynamicContentVariants": {};
  "CreateManyOrganizationMemberships": {};
  "CreateManyOrganizations": {};
  "CreateManyUsers": {};
  "CreateOAuthClient": {};
  "CreateOAuthToken": {
  client_id?: number;
  global_client_id?: number;
  all?: boolean;
};
  "CreateObjectTrigger": {};
  "CreateOrganization": {};
  "CreateOrganizationField": {};
  "CreateOrganizationMembership": {};
  "CreateOrganizationMerge": {};
  "CreateOrganizationSubscription": {};
  "CreateOrUpdateManyUsers": {};
  "CreateOrUpdateOrganization": {};
  "CreateOrUpdateTicketFieldOption": {};
  "CreateOrUpdateUser": {};
  "CreateOrUpdateUserFieldOption": {};
  "CreateQueue": {};
  "CreateRequest": {};
  "CreateResourceCollection": {};
  "CreateSharingAgreement": {};
  "CreateSLAPolicy": {};
  "CreateSupportAddress": {};
  "CreateTarget": {};
  "CreateTaskList": {};
  "CreateTaskListTemplate": {};
  "CreateTicket": {
  include?: string;
};
  "CreateTicketContentPin": {};
  "CreateTicketField": {};
  "CreateTicketForm": {};
  "CreateTicketFormStatuses": {};
  "CreateTicketFormStatusesForCustomStatus": {};
  "CreateTicketFromTweet": {};
  "CreateTicketOrVoicemailTicket": {};
  "CreateTicketSatisfactionRating": {};
  "CreateTokenForGrantType": {};
  "CreateTrialAccount": {};
  "CreateTrigger": {};
  "CreateTriggerCategory": {};
  "CreateUser": {};
  "CreateUserField": {};
  "CreateUserGroupMembership": {};
  "CreateUserIdentity": {
  brand_id?: number;
};
  "CreateUserOrganizationMembership": {};
  "CreateView": {};
  "CreateWorkspace": {};
  "CustomObjectFieldsLimit": {};
  "CustomObjectRecordBulkJobs": {};
  "CustomObjectRecordsLimit": {};
  "CustomObjectsLimit": {};
  "DeleteAccessRule": {};
  "DeleteAttachment": {};
  "DeleteAttribute": {};
  "DeleteAttributeValue": {};
  "DeleteAuthenticatedSession": {};
  "DeleteAutomation": {};
  "DeleteBookmark": {};
  "DeleteBrand": {};
  "DeleteBrandAgentById": {};
  "DeleteBrandLogo": {};
  "DeleteClient": {};
  "DeleteCustomObject": {};
  "DeleteCustomObjectField": {};
  "DeleteCustomObjectRecord": {};
  "DeleteCustomObjectRecordAttachment": {};
  "DeleteCustomObjectRecordByExternalIdOrName": {
  external_id?: string;
  name?: string;
};
  "DeleteCustomRoleById": {};
  "DeleteCustomStatus": {};
  "DeleteDeletionSchedule": {};
  "DeleteDynamicContentItem": {};
  "DeleteDynamicContentVariant": {};
  "DeleteEndUserIdentity": {};
  "DeleteGroup": {};
  "DeleteGroupMembership": {};
  "DeleteGroupSLAPolicy": {};
  "DeleteItamAsset": {};
  "DeleteItamAssetType": {};
  "DeleteItamAssetTypeField": {};
  "DeleteItamLocation": {};
  "DeleteMacro": {};
  "DeleteManyMacros": {
  ids: ReadonlyArray<number>;
};
  "DeleteManyObjectTriggers": {
  ids: string;
};
  "DeleteManyOrganizationMemberships": {
  ids?: ReadonlyArray<number>;
};
  "DeleteManyOrganizations": {
  ids?: string;
  external_ids?: string;
};
  "DeleteManyTriggers": {
  ids: string;
};
  "DeleteObjectTrigger": {};
  "DeleteOrganization": {};
  "DeleteOrganizationField": {};
  "DeleteOrganizationMembership": {};
  "DeleteOrganizationSubscription": {};
  "DeleteQueue": {};
  "DeleteRecipientAddress": {};
  "DeleteResourceCollection": {};
  "DeleteSession": {};
  "DeleteSharingAgreement": {};
  "DeleteSLAPolicy": {};
  "DeleteSuspendedTicket": {};
  "DeleteSuspendedTickets": {
  ids: string;
};
  "DeleteTagsTicket": {
  tags?: string;
};
  "DeleteTarget": {};
  "DeleteTaskListTemplate": {};
  "DeleteTicket": {};
  "DeleteTicketContentPin": {};
  "DeleteTicketField": {
  creator?: boolean;
};
  "DeleteTicketFieldOption": {};
  "DeleteTicketForm": {};
  "DeleteTicketFormStatusById": {};
  "DeleteTicketFormStatuses": {};
  "DeleteTicketPermanently": {};
  "DeleteTrigger": {};
  "DeleteTriggerCategory": {};
  "DeleteUpload": {};
  "DeleteUser": {};
  "DeleteUserField": {};
  "DeleteUserFieldOption": {};
  "DeleteUserGroupMembership": {};
  "DeleteUserIdentity": {};
  "DeleteUserOrganizationMembership": {};
  "DeleteUserTags": {};
  "DeleteView": {};
  "DeleteWorkspace": {};
  "DestroyManyUsers": {
  ids?: string;
  external_ids?: string;
  brand_id?: ("0" | number);
};
  "DestroyManyWorkspaces": {
  ids: ReadonlyArray<number>;
};
  "DetectBestLocale": {};
  "DownloadCustomObjectRecordAttachment": {
  inline?: boolean;
};
  "DynamicContentListVariants": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
};
  "ExecuteView": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  sort_by?: string;
  sort_order?: string;
  include?: string;
  exclude?: string;
  group_by?: string;
};
  "ExportAuditLogs": {
  "filter[source_type]"?: string;
  "filter[source_id]"?: number;
  "filter[actor_id]"?: number;
  "filter[ip_address]"?: string;
  "filter[created_at]"?: string;
  "filter[action]"?: string;
};
  "ExportSearchResults": {
  query: string;
  "page[size]"?: number;
  "page[after]"?: string;
  "filter[type]"?: string;
  include?: string;
};
  "ExportSuspendedTickets": {};
  "ExportView": {};
  "FilteredSearchCustomObjectRecords": {
  query?: string;
  sort?: string;
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
};
  "FilteredSearchItamAssets": {
  query?: string;
  sort?: string;
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
};
  "GetDeletionSchedule": {};
  "GetObjectTrigger": {};
  "GetRelationshipFilterDefinitions": {
  source_type?: string;
};
  "GetSourcesByTarget": {};
  "GetTasksByTaskListTemplateId": {};
  "GettingTwicketStatus": {
  ids?: string;
};
  "GetTrigger": {};
  "GetUserEntitlementsFull": {};
  "GetUserPasswordRequirements": {};
  "GetViewCount": {};
  "GetViewCounts": {
  ids: string;
};
  "GlobalOAuthClientsTokenSummary": {
  global_client_id?: number;
  include_expired?: boolean;
};
  "GroupMembershipBulkCreate": {};
  "GroupMembershipBulkDelete": {
  ids?: string;
};
  "GroupMembershipSetDefault": {};
  "IncrementalCustomObjectRecordExportCursor": {
  start_time?: number;
  cursor?: string;
  per_page?: number;
  "filter[exclude_deleted]"?: boolean;
};
  "IncrementalOrganizationExport": {
  start_time: number;
  per_page?: number;
};
  "IncrementalSampleExport": {
  start_time: number;
};
  "IncrementalSkilBasedRoutingAttributesExport": {};
  "IncrementalSkilBasedRoutingAttributeValuesExport": {};
  "IncrementalSkilBasedRoutingInstanceValuesExport": {};
  "IncrementalTicketEvents": {
  start_time: number;
  support_type_scope?: string;
  include?: string;
};
  "IncrementalTicketExportCursor": {
  start_time?: number;
  cursor?: string;
  support_type_scope?: string;
};
  "IncrementalTicketExportTime": {
  start_time: number;
  support_type_scope?: string;
};
  "IncrementalUserExportCursor": {
  start_time?: number;
  cursor?: string;
  per_page?: number;
};
  "IncrementalUserExportTime": {
  start_time: number;
  per_page?: number;
};
  "ItamAssetBulkJobs": {};
  "ListAccessRuleDefinitions": {};
  "ListAccessRules": {};
  "ListAccountAttributes": {
  include?: string;
};
  "ListActiveAutomations": {};
  "ListActiveMacros": {
  include?: string;
  access?: string;
  category?: number;
  group_id?: number;
  sort_by?: string;
  sort_order?: string;
};
  "ListActiveObjectTriggers": {
  sort_by?: string;
  sort_order?: string;
};
  "ListActiveTriggers": {
  sort?: string;
  sort_by?: string;
  sort_order?: string;
  category_id?: string;
};
  "ListActiveViews": {
  access?: string;
  group_id?: number;
  sort_by?: string;
  sort_order?: string;
};
  "ListActivities": {
  since?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  sort?: string;
  per_page?: number;
  include?: string;
};
  "ListAGentAttributeValues": {};
  "ListApprovalRequests": {
  "filter[status]"?: string;
  "filter[assignee_user_id]"?: string;
  "filter[assignee_group_id]"?: string;
  before_cursor?: string;
  after_cursor?: string;
};
  "ListAssignableGroupMemberships": {};
  "ListAssignableGroupMembershipsByGroup": {};
  "ListAssignableGroups": {};
  "ListAttributeValues": {};
  "ListAuditLogs": {
  "filter[source_type]"?: string;
  "filter[source_id]"?: number;
  "filter[actor_id]"?: number;
  "filter[ip_address]"?: string;
  "filter[created_at]"?: string;
  "filter[action]"?: string;
  sort_by?: string;
  sort_order?: string;
  sort?: string;
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  per_page?: number;
};
  "ListAuditsForTicket": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  sort?: string;
  include?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
  filter_events?: ReadonlyArray<string>;
  sort_order?: "asc" | "desc";
};
  "ListAutomations": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  active?: boolean;
  include?: string;
};
  "ListAvailablePublicLocales": {};
  "ListBookmarks": {};
  "ListBrandAgents": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
};
  "ListBrandAgentsByBrand": {};
  "ListBrands": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  assignable_from?: number;
  include_deleted?: boolean;
};
  "ListCCDRequests": {
  sort_by?: string;
  sort_order?: string;
};
  "ListComments": {
  since?: string;
  role?: string;
};
  "ListCompactViews": {};
  "ListConversationLogForTicket": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
};
  "ListCurrentUserOAuthClients": {};
  "ListCustomObjectFields": {
  include_standard_fields?: boolean;
};
  "ListCustomObjectRecordAttachments": {};
  "ListCustomObjectRecords": {
  "filter[ids]"?: string;
  "filter[external_ids]"?: string;
  sort?: string;
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
};
  "ListCustomObjects": {
  include_ui_path?: boolean;
};
  "ListCustomRoles": {};
  "ListCustomStatuses": {
  status_categories?: string;
  active?: boolean;
  default?: boolean;
};
  "ListDeletedTickets": {
  sort_by?: "id" | "subject" | "deleted_at" | "created_at" | "updated_at" | "status" | "requester" | "requester.name" | "group" | "assignee" | "assignee.name";
  sort_order?: "asc" | "desc";
  support_type_scope?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
};
  "ListDeletedUsers": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
};
  "ListDeletionSchedules": {};
  "ListDynamicContents": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
};
  "ListEmailNotifications": {
  filter: {
  comment_id?: number;
  notification_id?: number;
  ticket_id?: number;
};
  per_page?: number;
  sort?: string;
};
  "ListEndUserIdentities": {
  "type[]"?: "email" | "phone_number";
};
  "ListGlobalOAuthClients": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
};
  "ListGroupMemberships": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include?: string;
};
  "ListGroupMembershipsByGroup": {};
  "ListGroups": {
  exclude_deleted?: boolean;
  include?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ListGroupSLAPolicies": {};
  "ListGroupUsers": {
  role?: string;
  "role[]"?: string;
  permission_set?: number;
  external_id?: string;
};
  "ListItamAssets": {
  "filter[ids]"?: string;
  "filter[external_ids]"?: string;
};
  "ListItamAssetTypeFields": {};
  "ListItamAssetTypes": {};
  "ListItamLocations": {};
  "ListItamStatuses": {};
  "ListJobStatuses": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
};
  "ListLocales": {};
  "ListLocalesForAgent": {};
  "ListMacroActionDefinitions": {};
  "ListMacroAttachments": {};
  "ListMacroCategories": {};
  "ListMacros": {
  include?: string;
  access?: string;
  active?: boolean;
  category?: number;
  group_id?: number;
  only_viewable?: boolean;
  sort_by?: string;
  sort_order?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
};
  "ListMacrosActions": {};
  "ListManyAgentsAttributeValues": {
  "filter[agent_ids]": string;
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
};
  "ListMonitoredTwitterHandles": {};
  "ListOAuthClients": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
};
  "ListOAuthTokens": {
  client_id?: number;
  global_client_id?: number;
  all?: boolean;
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
};
  "ListObjectTriggers": {
  active?: boolean;
  sort_by?: string;
  sort_order?: string;
};
  "ListObjectTriggersDefinitions": {};
  "ListOpenRequests": {
  sort_by?: string;
  sort_order?: string;
};
  "ListOrganizationFields": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  resolve_dc?: boolean;
};
  "ListOrganizationMemberships": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include?: string;
};
  "ListOrganizationMembershipsByOrganization": {};
  "ListOrganizationMerges": {};
  "ListOrganizationRequests": {
  sort_by?: string;
  sort_order?: string;
};
  "ListOrganizations": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ListOrganizationSubscriptions": {};
  "ListOrganizationSubscriptionsByOrganization": {};
  "ListOrganizationTags": {};
  "ListOrganizationTickets": {};
  "ListOrganizationUsers": {
  role?: string;
  "role[]"?: string;
  permission_set?: number;
  external_id?: string;
  sort_by?: "id" | "name" | "created_at" | "updated_at";
  sort_order?: "asc" | "desc";
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
};
  "ListPermissionPolicies": {};
  "ListQueueDefinitions": {};
  "ListQueues": {};
  "ListRecentTickets": {};
  "ListRemoteAuthentications": {
  brand_id?: number;
};
  "ListRequests": {
  sort_by?: string;
  sort_order?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
};
  "ListResourceCollections": {
  per_page?: number;
};
  "ListResourceTags": {};
  "ListRoutingAttributeDefinitions": {};
  "ListSatisfactionRatingReasons": {};
  "ListSatisfactionRatings": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
};
  "ListSearchResults": {
  query: string;
  sort_by?: string;
  sort_order?: string;
  include?: string;
};
  "ListSessions": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
};
  "ListSharingAgreements": {};
  "ListSkips": {
  sort_order?: "asc" | "desc";
};
  "ListSLAPolicies": {};
  "ListSolvedRequests": {
  sort_by?: string;
  sort_order?: string;
};
  "ListSupportAddresses": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include?: string;
};
  "ListSuspendedTickets": {
  sort_by?: string;
  sort_order?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
};
  "ListTags": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
};
  "ListTargetFailures": {};
  "ListTargets": {};
  "ListTaskListTemplates": {};
  "ListTicketAttributeValues": {};
  "ListTicketAudits": {
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
};
  "ListTicketCollaborators": {};
  "ListTicketComments": {
  include_inline_images?: boolean;
  include?: string;
  per_page?: number;
  sort_order?: "asc" | "desc";
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
};
  "ListTicketContentPins": {
  ticket_id?: string;
};
  "ListTicketEmailCCs": {};
  "ListTicketFieldOptions": {};
  "ListTicketFields": {
  locale?: string;
  creator?: boolean;
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ListTicketFollowers": {};
  "ListTicketForms": {
  active?: boolean;
  end_user_visible?: boolean;
  fallback_to_default?: boolean;
  form_type?: "standard" | "service_catalog" | "all";
  associated_to_brand?: boolean;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
  locale?: string;
};
  "ListTicketFormStatuses": {
  ticket_form_id?: string;
  filter?: {
  custom_status_id?: string;
  id?: string;
};
};
  "ListTicketIncidents": {};
  "ListTicketMetricEvents": {
  start_time: number;
  include_changes?: boolean;
  exclude_deleted?: boolean;
};
  "ListTicketMetrics": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
};
  "ListTicketProblems": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ListTickets": {
  external_id?: string;
  sort_by?: "id" | "subject" | "deleted_at" | "created_at" | "updated_at" | "status" | "requester" | "requester.name" | "group" | "assignee" | "assignee.name";
  sort_order?: "asc" | "desc";
  support_type_scope?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include?: string;
  start_time?: number;
};
  "ListTicketsFromView": {
  sort_by?: string;
  sort_order?: string;
};
  "ListTicketsFullfilledByUser": {
  ticket_ids: number;
};
  "ListTicketSkips": {
  sort_order?: "asc" | "desc";
};
  "ListTicketSkipsByTicket": {
  sort_order?: "asc" | "desc";
};
  "ListTriggerActionConditionDefinitions": {};
  "ListTriggerCategories": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: "position" | "-position" | "name" | "-name" | "created_at" | "-created_at" | "updated_at" | "-updated_at";
  include?: "rule_counts";
};
  "ListTriggerRevisions": {};
  "ListTriggers": {
  active?: boolean;
  sort?: string;
  sort_by?: string;
  sort_order?: string;
  category_id?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  include?: string;
};
  "ListUserAssignedTickets": {};
  "ListUserBrandAgents": {};
  "ListUserCCDTickets": {};
  "ListUserFieldOptions": {};
  "ListUserFields": {
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  resolve_dc?: boolean;
};
  "ListUserFollowedTickets": {
  sort_by?: "id" | "subject" | "deleted_at" | "created_at" | "updated_at" | "status" | "requester" | "requester.name" | "group" | "assignee" | "assignee.name";
  sort_order?: "asc" | "desc";
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  exclude_archived?: boolean;
};
  "ListUserGroupMemberships": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  include?: string;
  per_page?: number;
};
  "ListUserGroups": {
  exclude_deleted?: boolean;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ListUserIdentities": {
  type?: ReadonlyArray<"agent_forwarding" | "any_channel" | "email" | "facebook" | "foreign" | "messaging" | "microsoft" | "phone_number" | "sdk" | "twitter">;
  page?: {
  after?: string;
  before?: string;
  size?: number;
};
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ListUserOrganizationMemberships": {
  include?: string;
};
  "ListUserOrganizations": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ListUserOrganizationSubscriptions": {};
  "ListUserRequestedTickets": {
  sort_by?: "id" | "subject" | "deleted_at" | "created_at" | "updated_at" | "status" | "requester" | "requester.name" | "group" | "assignee" | "assignee.name";
  sort_order?: "asc" | "desc";
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  include?: string;
  exclude_archived?: boolean;
  exclude_count?: boolean;
};
  "ListUserRequests": {
  sort_by?: string;
  sort_order?: string;
};
  "ListUsers": {
  role?: string;
  "role[]"?: string;
  permission_set?: number;
  external_id?: string;
  include?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  sort?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
  brand_id?: number;
};
  "ListUserSessions": {};
  "ListUserTags": {};
  "ListViewDefinitions": {};
  "ListViews": {
  access?: string;
  active?: boolean;
  group_id?: number;
  sort?: string;
  sort_by?: string;
  sort_order?: string;
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
};
  "ListViewsById": {
  ids: string;
  active?: boolean;
};
  "ListWorkspaces": {};
  "LogoutManyUsers": {
  ids?: string;
};
  "MakeEndUserIdentityPrimary": {};
  "MakeTicketCommentPrivate": {};
  "MakeTicketCommentPrivateFromAudits": {};
  "MakeUserIdentityPrimary": {};
  "MarkManyTicketsAsSpam": {
  ids: string;
};
  "MarkTicketAsSpamAndSuspendRequester": {};
  "MergeEndUsers": {};
  "MergeTicketsIntoTargetTicket": {};
  "OpenTicketInAgentBrowser": {};
  "OpenUsersProfileInAgentBrowser": {};
  "OrganizationRelated": {};
  "PermanentlyDeleteUser": {};
  "PreviewCount": {};
  "PreviewViews": {
  page?: (number | {
  after?: string;
  before?: string;
  size?: number;
});
  per_page?: number;
  include?: string;
  exclude?: string;
};
  "PushContentToSupport": {};
  "PushNotificationDevices": {};
  "PutTagsTicket": {};
  "PutUserTags": {};
  "RecordNewSkip": {
  sort_order?: "asc" | "desc";
};
  "RecoverSuspendedTicket": {};
  "RecoverSuspendedTickets": {
  ids: string;
};
  "RedactChatComment": {};
  "RedactChatCommentAttachment": {};
  "RedactCommentAttachment": {};
  "RedactStringInComment": {};
  "RedactTicketCommentInAgentWorkspace": {};
  "RemoveOrganizationTags": {};
  "RenewCurrentSession": {};
  "ReorderCustomObjectFields": {};
  "ReorderGroupSLAPolicies": {
  group_sla_policy_ids?: ReadonlyArray<string>;
};
  "ReorderOrganizationField": {};
  "ReorderQueues": {};
  "ReorderSLAPolicies": {
  sla_policy_ids?: ReadonlyArray<number>;
};
  "ReorderTicketFields": {};
  "ReorderTicketForms": {};
  "ReorderTriggers": {};
  "ReorderUserField": {};
  "ReorderWorkspaces": {};
  "ReportChannelbackError": {};
  "RequestEndUserVerification": {};
  "RequestUserCreate": {};
  "RequestUserVerification": {
  brand_id?: number;
};
  "RestoreDeletedTicket": {};
  "RetrieveGroupSLAPolicyFilterDefinitionItems": {};
  "RetrieveResourceCollection": {};
  "RetrieveSLAPolicyFilterDefinitionItems": {};
  "RevokeCurrentOAuthToken": {};
  "RevokeOAuthToken": {};
  "SearchAutomations": {
  query: string;
  active?: boolean;
  sort_by?: string;
  sort_order?: string;
  include?: string;
};
  "SearchCustomObjectRecords": {
  query?: string;
  sort?: string;
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
};
  "SearchItamAssets": {
  query: string;
  sort?: string;
  "page[before]"?: string;
  "page[after]"?: string;
  "page[size]"?: number;
};
  "SearchMacro": {
  include?: string;
  access?: string;
  active?: boolean;
  category?: number;
  group_id?: number;
  only_viewable?: boolean;
  sort_by?: string;
  sort_order?: string;
  query: string;
};
  "SearchObjectTriggers": {
  query?: string;
  filter?: string;
  active?: boolean;
  sort?: string;
  sort_by?: string;
  sort_order?: string;
  include?: string;
};
  "SearchOrganizations": {
  external_id?: number;
  name?: string;
};
  "SearchRequests": {
  query?: string;
};
  "SearchTriggers": {
  query?: string;
  filter?: string;
  active?: boolean;
  sort?: string;
  sort_by?: string;
  sort_order?: string;
  include?: string;
};
  "SearchUsers": {
  page?: number;
  per_page?: number;
  query?: string;
  external_id?: string;
  brand_id?: number;
  include?: string;
};
  "SearchViews": {
  query: string;
  access?: string;
  active?: boolean;
  group_id?: number;
  sort_by?: string;
  sort_order?: string;
  include?: string;
};
  "SetAgentAttributeValues": {};
  "SetOrganizationAsDefault": {};
  "SetOrganizationMembershipAsDefault": {};
  "SetOrganizationTags": {};
  "SetTagsTicket": {};
  "SetTicketAttributeValues": {};
  "SetUserPassword": {};
  "SetUserTags": {};
  "ShowAccessRule": {};
  "ShowAccountSettings": {
  authenticity_token?: string;
};
  "ShowActivity": {};
  "ShowAttachment": {};
  "ShowAttribute": {};
  "ShowAttributeValue": {};
  "ShowAuditLog": {};
  "ShowAutomation": {};
  "ShowBrand": {};
  "ShowBrandAgentById": {};
  "ShowChangesToTicket": {
  normalize_comment?: boolean;
};
  "ShowClient": {};
  "ShowComment": {};
  "ShowCurrentLocale": {};
  "ShowCurrentlyAuthenticatedSession": {};
  "ShowCurrentToken": {};
  "ShowCurrentUser": {
  include?: string;
};
  "ShowCurrentUserSettings": {};
  "ShowCustomObject": {
  include_permissions_metadata?: boolean;
  include_ui_path?: boolean;
};
  "ShowCustomObjectField": {
  include_standard_fields?: boolean;
};
  "ShowCustomObjectRecord": {};
  "ShowCustomRoleById": {};
  "ShowCustomStatus": {};
  "ShowDeletedUser": {};
  "ShowDerivedMacro": {
  macro_id: number;
  ticket_id: number;
};
  "ShowDynamicContentItem": {};
  "ShowDynamicContentVariant": {};
  "ShowEmailNotification": {};
  "ShowEndUserIdentity": {};
  "ShowGlobalClient": {};
  "ShowGroupById": {
  include?: string;
};
  "ShowGroupMembershipById": {};
  "ShowGroupSLAPolicy": {};
  "ShowItamAsset": {};
  "ShowItamAssetType": {};
  "ShowItamAssetTypeField": {};
  "ShowItamLocation": {};
  "ShowItamStatus": {};
  "ShowJobStatus": {};
  "ShowLocaleById": {};
  "ShowMacro": {};
  "ShowMacroAttachment": {};
  "ShowManyDynamicContents": {
  identifiers?: string;
};
  "ShowManyEmailNotifications": {
  ids?: string;
  comment_ids?: string;
  ticket_ids?: string;
};
  "ShowManyJobStatuses": {
  ids: string;
};
  "ShowManyOrganizations": {
  ids?: string;
  external_ids?: string;
};
  "ShowManyTicketFields": {
  ids?: string;
  keys?: string;
  creator?: boolean;
  exclude_sub_selection_options?: boolean;
};
  "ShowManyTicketForms": {
  ids: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
  active?: boolean;
  end_user_visible?: boolean;
  fallback_to_default?: boolean;
  associated_to_brand?: boolean;
};
  "ShowManyTicketFormStatuses": {
  ids: string;
};
  "ShowManyUserFields": {
  keys?: string;
};
  "ShowManyUsers": {
  ids?: string;
  external_ids?: string;
  include_deleted?: boolean;
  brand_id?: number;
  include?: string;
};
  "ShowMonitoredTwitterHandle": {};
  "ShowOrganization": {
  include?: string;
  include_boundary_indicators?: boolean;
  include_item_cursors?: boolean;
};
  "ShowOrganizationField": {};
  "ShowOrganizationMembershipById": {};
  "ShowOrganizationMembershipByUserId": {};
  "ShowOrganizationMerge": {};
  "ShowOrganizationSubscription": {};
  "ShowPermissionPolicy": {};
  "ShowQueueById": {};
  "ShowRequest": {};
  "ShowSatisfactionRating": {};
  "ShowSatisfactionRatings": {};
  "ShowSecuritySettings": {
  brand_id?: number;
};
  "ShowSession": {};
  "ShowSharingAgreement": {};
  "ShowSLAPolicy": {};
  "ShowSupportAddress": {};
  "ShowSuspendedTickets": {};
  "ShowTarget": {};
  "ShowTargetFailure": {};
  "ShowTaskList": {};
  "ShowTaskListTemplate": {};
  "ShowTicket": {
  include?: string;
  reduced_payload_size?: boolean;
  remove_duplicate_fields?: boolean;
};
  "ShowTicketAfterChanges": {
  normalize_comment?: boolean;
};
  "ShowTicketAudit": {};
  "ShowTicketByMessagingConversationId": {};
  "ShowTicketfield": {
  creator?: boolean;
};
  "ShowTicketFieldOption": {};
  "ShowTicketForm": {};
  "ShowTicketMetrics": {};
  "ShowTicketMetricsByTicket": {};
  "ShowToken": {};
  "ShowTriggerCategoryById": {};
  "ShowUser": {
  include?: string;
};
  "ShowUserBrandAgentById": {};
  "ShowUserComplianceDeletionStatuses": {
  application?: string;
};
  "ShowUserField": {};
  "ShowUserFieldOption": {};
  "ShowUserGroupMembershipById": {};
  "ShowUserIdentity": {};
  "ShowUserRelated": {};
  "ShowView": {
  include?: string;
};
  "ShowWorkspace": {};
  "SuspendedTicketsAttachments": {};
  "TicketBulkImport": {
  archive_immediately?: boolean;
};
  "TicketFormTicketFormStatuses": {};
  "TicketImport": {
  archive_immediately?: boolean;
};
  "TicketRelatedInformation": {};
  "TicketsCreateMany": {};
  "TicketsShowMany": {
  ids: string;
  include?: string;
};
  "TicketsUpdateMany": {
  ids?: string;
};
  "TriggerRevision": {};
  "UnassignOrganization": {};
  "UpdateAccessRule": {};
  "UpdateAccountSettings": {};
  "UpdateAttachment": {};
  "UpdateAttribute": {};
  "UpdateAttributeValue": {};
  "UpdateAutomation": {};
  "UpdateBrand": {};
  "UpdateBrandLogo": {};
  "UpdateClient": {};
  "UpdateCurrentUserSettings": {};
  "UpdateCustomObject": {};
  "UpdateCustomObjectField": {};
  "UpdateCustomObjectRecord": {};
  "UpdateCustomObjectRecordAttachment": {};
  "UpdateCustomRoleById": {};
  "UpdateCustomStatus": {};
  "UpdateDeletionSchedule": {};
  "UpdateDynamicContentItem": {};
  "UpdateDynamicContentVariant": {};
  "UpdateGroup": {};
  "UpdateGroupSLAPolicy": {};
  "UpdateItamAsset": {};
  "UpdateItamAssetType": {};
  "UpdateItamAssetTypeField": {};
  "UpdateItamLocation": {};
  "UpdateMacro": {};
  "UpdateManyAutomations": {};
  "UpdateManyDynamicContentVariants": {};
  "UpdateManyMacros": {};
  "UpdateManyObjectTriggers": {};
  "UpdateManyOrganizations": {
  ids?: string;
  external_ids?: string;
};
  "UpdateManyTriggers": {};
  "UpdateManyUsers": {
  ids?: string;
  external_ids?: string;
  brand_id?: number;
};
  "UpdateManyViews": {};
  "UpdateObjectTrigger": {};
  "UpdateOrganization": {};
  "UpdateOrganizationField": {};
  "UpdatePermissionPolicy": {};
  "UpdateQueue": {};
  "UpdateRequest": {};
  "UpdateResourceCollection": {};
  "UpdateSharingAgreement": {};
  "UpdateSLAPolicy": {};
  "UpdateSupportAddress": {};
  "UpdateTarget": {};
  "UpdateTaskListTemplate": {};
  "UpdateTicket": {};
  "UpdateTicketField": {
  creator?: boolean;
};
  "UpdateTicketForm": {};
  "UpdateTicketFormStatusById": {};
  "UpdateTicketFormStatuses": {};
  "UpdateTrigger": {};
  "UpdateTriggerCategory": {};
  "UpdateUser": {};
  "UpdateUserField": {};
  "UpdateUserIdentity": {};
  "UpdateView": {};
  "UpdateWorkspace": {};
  "UploadFiles": {
  filename: string;
};
  "UpsertCustomObjectRecordByExternalIdOrName": {
  external_id?: string;
  name?: string;
};
  "ValidateToken": {};
  "VerifySubdomainAvailability": {
  subdomain: string;
};
  "VerifySupportAddressForwarding": {};
  "VerifyUserIdentity": {};
}

export interface ZendeskFullApiOperationQueryRequiredMap {
  "AddOrganizationTags": false;
  "AutocompleteCustomObjectRecordSearch": false;
  "AutocompleteOrganizations": true;
  "AutocompleteProblems": false;
  "AutocompleteTags": false;
  "AutocompleteTagsPost": false;
  "AutocompleteUsers": false;
  "AutocompleteUsersPost": false;
  "BatchOperateTriggerCategories": false;
  "BulkDeleteAutomations": false;
  "BulkDeleteSessionsByUserId": false;
  "BulkDeleteTickets": true;
  "BulkDeleteViews": true;
  "BulkPermanentlyDeleteTickets": true;
  "BulkRestoreDeletedTickets": true;
  "BulkSetAgentAttributeValuesJob": false;
  "BulkUpdateDefaultCustomStatus": false;
  "ChangeOwnPassword": false;
  "CheckHostMappingValidity": true;
  "CheckHostMappingValidityForExistingBrand": false;
  "ClientGenerateSecret": false;
  "CloneTicketForm": false;
  "CountActivities": false;
  "CountAuditsForTicket": false;
  "CountCustomObjectRecords": false;
  "CountDeletedUsers": false;
  "CountGroups": false;
  "CountGroupUsers": false;
  "CountOrganizations": false;
  "CountOrganizationTickets": false;
  "CountOrganizationUsers": false;
  "CountSatisfactionRatings": false;
  "CountSearchResults": true;
  "CountTags": false;
  "CountTicketComments": false;
  "CountTicketFields": false;
  "CountTickets": false;
  "CountUserAssignedTickets": false;
  "CountUserCCDTickets": false;
  "CountUserGroups": false;
  "CountUserOrganizations": false;
  "CountUsers": false;
  "CountViews": false;
  "CreateAccessRule": false;
  "CreateApprovalRequest": false;
  "CreateAssociatedMacroAttachment": false;
  "CreateAttribute": false;
  "CreateAttributeValue": false;
  "CreateAutomation": false;
  "CreateBookmark": false;
  "CreateBrand": false;
  "CreateCustomObject": false;
  "CreateCustomObjectField": false;
  "CreateCustomObjectRecord": false;
  "CreateCustomObjectRecordAttachment": false;
  "CreateCustomRole": false;
  "CreateCustomStatus": false;
  "CreateDeletionSchedule": false;
  "CreateDynamicContent": false;
  "CreateDynamicContentVariant": false;
  "CreateEndUserIdentity": false;
  "CreateGroup": false;
  "CreateGroupMembership": false;
  "CreateGroupSLAPolicy": false;
  "CreateItamAsset": false;
  "CreateItamAssetType": false;
  "CreateItamAssetTypeField": false;
  "CreateItamLocation": false;
  "CreateMacro": false;
  "CreateMacroAttachment": false;
  "CreateManyDynamicContentVariants": false;
  "CreateManyOrganizationMemberships": false;
  "CreateManyOrganizations": false;
  "CreateManyUsers": false;
  "CreateOAuthClient": false;
  "CreateOAuthToken": false;
  "CreateObjectTrigger": false;
  "CreateOrganization": false;
  "CreateOrganizationField": false;
  "CreateOrganizationMembership": false;
  "CreateOrganizationMerge": false;
  "CreateOrganizationSubscription": false;
  "CreateOrUpdateManyUsers": false;
  "CreateOrUpdateOrganization": false;
  "CreateOrUpdateTicketFieldOption": false;
  "CreateOrUpdateUser": false;
  "CreateOrUpdateUserFieldOption": false;
  "CreateQueue": false;
  "CreateRequest": false;
  "CreateResourceCollection": false;
  "CreateSharingAgreement": false;
  "CreateSLAPolicy": false;
  "CreateSupportAddress": false;
  "CreateTarget": false;
  "CreateTaskList": false;
  "CreateTaskListTemplate": false;
  "CreateTicket": false;
  "CreateTicketContentPin": false;
  "CreateTicketField": false;
  "CreateTicketForm": false;
  "CreateTicketFormStatuses": false;
  "CreateTicketFormStatusesForCustomStatus": false;
  "CreateTicketFromTweet": false;
  "CreateTicketOrVoicemailTicket": false;
  "CreateTicketSatisfactionRating": false;
  "CreateTokenForGrantType": false;
  "CreateTrialAccount": false;
  "CreateTrigger": false;
  "CreateTriggerCategory": false;
  "CreateUser": false;
  "CreateUserField": false;
  "CreateUserGroupMembership": false;
  "CreateUserIdentity": false;
  "CreateUserOrganizationMembership": false;
  "CreateView": false;
  "CreateWorkspace": false;
  "CustomObjectFieldsLimit": false;
  "CustomObjectRecordBulkJobs": false;
  "CustomObjectRecordsLimit": false;
  "CustomObjectsLimit": false;
  "DeleteAccessRule": false;
  "DeleteAttachment": false;
  "DeleteAttribute": false;
  "DeleteAttributeValue": false;
  "DeleteAuthenticatedSession": false;
  "DeleteAutomation": false;
  "DeleteBookmark": false;
  "DeleteBrand": false;
  "DeleteBrandAgentById": false;
  "DeleteBrandLogo": false;
  "DeleteClient": false;
  "DeleteCustomObject": false;
  "DeleteCustomObjectField": false;
  "DeleteCustomObjectRecord": false;
  "DeleteCustomObjectRecordAttachment": false;
  "DeleteCustomObjectRecordByExternalIdOrName": false;
  "DeleteCustomRoleById": false;
  "DeleteCustomStatus": false;
  "DeleteDeletionSchedule": false;
  "DeleteDynamicContentItem": false;
  "DeleteDynamicContentVariant": false;
  "DeleteEndUserIdentity": false;
  "DeleteGroup": false;
  "DeleteGroupMembership": false;
  "DeleteGroupSLAPolicy": false;
  "DeleteItamAsset": false;
  "DeleteItamAssetType": false;
  "DeleteItamAssetTypeField": false;
  "DeleteItamLocation": false;
  "DeleteMacro": false;
  "DeleteManyMacros": true;
  "DeleteManyObjectTriggers": true;
  "DeleteManyOrganizationMemberships": false;
  "DeleteManyOrganizations": false;
  "DeleteManyTriggers": true;
  "DeleteObjectTrigger": false;
  "DeleteOrganization": false;
  "DeleteOrganizationField": false;
  "DeleteOrganizationMembership": false;
  "DeleteOrganizationSubscription": false;
  "DeleteQueue": false;
  "DeleteRecipientAddress": false;
  "DeleteResourceCollection": false;
  "DeleteSession": false;
  "DeleteSharingAgreement": false;
  "DeleteSLAPolicy": false;
  "DeleteSuspendedTicket": false;
  "DeleteSuspendedTickets": true;
  "DeleteTagsTicket": false;
  "DeleteTarget": false;
  "DeleteTaskListTemplate": false;
  "DeleteTicket": false;
  "DeleteTicketContentPin": false;
  "DeleteTicketField": false;
  "DeleteTicketFieldOption": false;
  "DeleteTicketForm": false;
  "DeleteTicketFormStatusById": false;
  "DeleteTicketFormStatuses": false;
  "DeleteTicketPermanently": false;
  "DeleteTrigger": false;
  "DeleteTriggerCategory": false;
  "DeleteUpload": false;
  "DeleteUser": false;
  "DeleteUserField": false;
  "DeleteUserFieldOption": false;
  "DeleteUserGroupMembership": false;
  "DeleteUserIdentity": false;
  "DeleteUserOrganizationMembership": false;
  "DeleteUserTags": false;
  "DeleteView": false;
  "DeleteWorkspace": false;
  "DestroyManyUsers": false;
  "DestroyManyWorkspaces": true;
  "DetectBestLocale": false;
  "DownloadCustomObjectRecordAttachment": false;
  "DynamicContentListVariants": false;
  "ExecuteView": false;
  "ExportAuditLogs": false;
  "ExportSearchResults": true;
  "ExportSuspendedTickets": false;
  "ExportView": false;
  "FilteredSearchCustomObjectRecords": false;
  "FilteredSearchItamAssets": false;
  "GetDeletionSchedule": false;
  "GetObjectTrigger": false;
  "GetRelationshipFilterDefinitions": false;
  "GetSourcesByTarget": false;
  "GetTasksByTaskListTemplateId": false;
  "GettingTwicketStatus": false;
  "GetTrigger": false;
  "GetUserEntitlementsFull": false;
  "GetUserPasswordRequirements": false;
  "GetViewCount": false;
  "GetViewCounts": true;
  "GlobalOAuthClientsTokenSummary": false;
  "GroupMembershipBulkCreate": false;
  "GroupMembershipBulkDelete": false;
  "GroupMembershipSetDefault": false;
  "IncrementalCustomObjectRecordExportCursor": false;
  "IncrementalOrganizationExport": true;
  "IncrementalSampleExport": true;
  "IncrementalSkilBasedRoutingAttributesExport": false;
  "IncrementalSkilBasedRoutingAttributeValuesExport": false;
  "IncrementalSkilBasedRoutingInstanceValuesExport": false;
  "IncrementalTicketEvents": true;
  "IncrementalTicketExportCursor": false;
  "IncrementalTicketExportTime": true;
  "IncrementalUserExportCursor": false;
  "IncrementalUserExportTime": true;
  "ItamAssetBulkJobs": false;
  "ListAccessRuleDefinitions": false;
  "ListAccessRules": false;
  "ListAccountAttributes": false;
  "ListActiveAutomations": false;
  "ListActiveMacros": false;
  "ListActiveObjectTriggers": false;
  "ListActiveTriggers": false;
  "ListActiveViews": false;
  "ListActivities": false;
  "ListAGentAttributeValues": false;
  "ListApprovalRequests": false;
  "ListAssignableGroupMemberships": false;
  "ListAssignableGroupMembershipsByGroup": false;
  "ListAssignableGroups": false;
  "ListAttributeValues": false;
  "ListAuditLogs": false;
  "ListAuditsForTicket": false;
  "ListAutomations": false;
  "ListAvailablePublicLocales": false;
  "ListBookmarks": false;
  "ListBrandAgents": false;
  "ListBrandAgentsByBrand": false;
  "ListBrands": false;
  "ListCCDRequests": false;
  "ListComments": false;
  "ListCompactViews": false;
  "ListConversationLogForTicket": false;
  "ListCurrentUserOAuthClients": false;
  "ListCustomObjectFields": false;
  "ListCustomObjectRecordAttachments": false;
  "ListCustomObjectRecords": false;
  "ListCustomObjects": false;
  "ListCustomRoles": false;
  "ListCustomStatuses": false;
  "ListDeletedTickets": false;
  "ListDeletedUsers": false;
  "ListDeletionSchedules": false;
  "ListDynamicContents": false;
  "ListEmailNotifications": true;
  "ListEndUserIdentities": false;
  "ListGlobalOAuthClients": false;
  "ListGroupMemberships": false;
  "ListGroupMembershipsByGroup": false;
  "ListGroups": false;
  "ListGroupSLAPolicies": false;
  "ListGroupUsers": false;
  "ListItamAssets": false;
  "ListItamAssetTypeFields": false;
  "ListItamAssetTypes": false;
  "ListItamLocations": false;
  "ListItamStatuses": false;
  "ListJobStatuses": false;
  "ListLocales": false;
  "ListLocalesForAgent": false;
  "ListMacroActionDefinitions": false;
  "ListMacroAttachments": false;
  "ListMacroCategories": false;
  "ListMacros": false;
  "ListMacrosActions": false;
  "ListManyAgentsAttributeValues": true;
  "ListMonitoredTwitterHandles": false;
  "ListOAuthClients": false;
  "ListOAuthTokens": false;
  "ListObjectTriggers": false;
  "ListObjectTriggersDefinitions": false;
  "ListOpenRequests": false;
  "ListOrganizationFields": false;
  "ListOrganizationMemberships": false;
  "ListOrganizationMembershipsByOrganization": false;
  "ListOrganizationMerges": false;
  "ListOrganizationRequests": false;
  "ListOrganizations": false;
  "ListOrganizationSubscriptions": false;
  "ListOrganizationSubscriptionsByOrganization": false;
  "ListOrganizationTags": false;
  "ListOrganizationTickets": false;
  "ListOrganizationUsers": false;
  "ListPermissionPolicies": false;
  "ListQueueDefinitions": false;
  "ListQueues": false;
  "ListRecentTickets": false;
  "ListRemoteAuthentications": false;
  "ListRequests": false;
  "ListResourceCollections": false;
  "ListResourceTags": false;
  "ListRoutingAttributeDefinitions": false;
  "ListSatisfactionRatingReasons": false;
  "ListSatisfactionRatings": false;
  "ListSearchResults": true;
  "ListSessions": false;
  "ListSharingAgreements": false;
  "ListSkips": false;
  "ListSLAPolicies": false;
  "ListSolvedRequests": false;
  "ListSupportAddresses": false;
  "ListSuspendedTickets": false;
  "ListTags": false;
  "ListTargetFailures": false;
  "ListTargets": false;
  "ListTaskListTemplates": false;
  "ListTicketAttributeValues": false;
  "ListTicketAudits": false;
  "ListTicketCollaborators": false;
  "ListTicketComments": false;
  "ListTicketContentPins": false;
  "ListTicketEmailCCs": false;
  "ListTicketFieldOptions": false;
  "ListTicketFields": false;
  "ListTicketFollowers": false;
  "ListTicketForms": false;
  "ListTicketFormStatuses": false;
  "ListTicketIncidents": false;
  "ListTicketMetricEvents": true;
  "ListTicketMetrics": false;
  "ListTicketProblems": false;
  "ListTickets": false;
  "ListTicketsFromView": false;
  "ListTicketsFullfilledByUser": true;
  "ListTicketSkips": false;
  "ListTicketSkipsByTicket": false;
  "ListTriggerActionConditionDefinitions": false;
  "ListTriggerCategories": false;
  "ListTriggerRevisions": false;
  "ListTriggers": false;
  "ListUserAssignedTickets": false;
  "ListUserBrandAgents": false;
  "ListUserCCDTickets": false;
  "ListUserFieldOptions": false;
  "ListUserFields": false;
  "ListUserFollowedTickets": false;
  "ListUserGroupMemberships": false;
  "ListUserGroups": false;
  "ListUserIdentities": false;
  "ListUserOrganizationMemberships": false;
  "ListUserOrganizations": false;
  "ListUserOrganizationSubscriptions": false;
  "ListUserRequestedTickets": false;
  "ListUserRequests": false;
  "ListUsers": false;
  "ListUserSessions": false;
  "ListUserTags": false;
  "ListViewDefinitions": false;
  "ListViews": false;
  "ListViewsById": true;
  "ListWorkspaces": false;
  "LogoutManyUsers": false;
  "MakeEndUserIdentityPrimary": false;
  "MakeTicketCommentPrivate": false;
  "MakeTicketCommentPrivateFromAudits": false;
  "MakeUserIdentityPrimary": false;
  "MarkManyTicketsAsSpam": true;
  "MarkTicketAsSpamAndSuspendRequester": false;
  "MergeEndUsers": false;
  "MergeTicketsIntoTargetTicket": false;
  "OpenTicketInAgentBrowser": false;
  "OpenUsersProfileInAgentBrowser": false;
  "OrganizationRelated": false;
  "PermanentlyDeleteUser": false;
  "PreviewCount": false;
  "PreviewViews": false;
  "PushContentToSupport": false;
  "PushNotificationDevices": false;
  "PutTagsTicket": false;
  "PutUserTags": false;
  "RecordNewSkip": false;
  "RecoverSuspendedTicket": false;
  "RecoverSuspendedTickets": true;
  "RedactChatComment": false;
  "RedactChatCommentAttachment": false;
  "RedactCommentAttachment": false;
  "RedactStringInComment": false;
  "RedactTicketCommentInAgentWorkspace": false;
  "RemoveOrganizationTags": false;
  "RenewCurrentSession": false;
  "ReorderCustomObjectFields": false;
  "ReorderGroupSLAPolicies": false;
  "ReorderOrganizationField": false;
  "ReorderQueues": false;
  "ReorderSLAPolicies": false;
  "ReorderTicketFields": false;
  "ReorderTicketForms": false;
  "ReorderTriggers": false;
  "ReorderUserField": false;
  "ReorderWorkspaces": false;
  "ReportChannelbackError": false;
  "RequestEndUserVerification": false;
  "RequestUserCreate": false;
  "RequestUserVerification": false;
  "RestoreDeletedTicket": false;
  "RetrieveGroupSLAPolicyFilterDefinitionItems": false;
  "RetrieveResourceCollection": false;
  "RetrieveSLAPolicyFilterDefinitionItems": false;
  "RevokeCurrentOAuthToken": false;
  "RevokeOAuthToken": false;
  "SearchAutomations": true;
  "SearchCustomObjectRecords": false;
  "SearchItamAssets": true;
  "SearchMacro": true;
  "SearchObjectTriggers": false;
  "SearchOrganizations": false;
  "SearchRequests": false;
  "SearchTriggers": false;
  "SearchUsers": false;
  "SearchViews": true;
  "SetAgentAttributeValues": false;
  "SetOrganizationAsDefault": false;
  "SetOrganizationMembershipAsDefault": false;
  "SetOrganizationTags": false;
  "SetTagsTicket": false;
  "SetTicketAttributeValues": false;
  "SetUserPassword": false;
  "SetUserTags": false;
  "ShowAccessRule": false;
  "ShowAccountSettings": false;
  "ShowActivity": false;
  "ShowAttachment": false;
  "ShowAttribute": false;
  "ShowAttributeValue": false;
  "ShowAuditLog": false;
  "ShowAutomation": false;
  "ShowBrand": false;
  "ShowBrandAgentById": false;
  "ShowChangesToTicket": false;
  "ShowClient": false;
  "ShowComment": false;
  "ShowCurrentLocale": false;
  "ShowCurrentlyAuthenticatedSession": false;
  "ShowCurrentToken": false;
  "ShowCurrentUser": false;
  "ShowCurrentUserSettings": false;
  "ShowCustomObject": false;
  "ShowCustomObjectField": false;
  "ShowCustomObjectRecord": false;
  "ShowCustomRoleById": false;
  "ShowCustomStatus": false;
  "ShowDeletedUser": false;
  "ShowDerivedMacro": true;
  "ShowDynamicContentItem": false;
  "ShowDynamicContentVariant": false;
  "ShowEmailNotification": false;
  "ShowEndUserIdentity": false;
  "ShowGlobalClient": false;
  "ShowGroupById": false;
  "ShowGroupMembershipById": false;
  "ShowGroupSLAPolicy": false;
  "ShowItamAsset": false;
  "ShowItamAssetType": false;
  "ShowItamAssetTypeField": false;
  "ShowItamLocation": false;
  "ShowItamStatus": false;
  "ShowJobStatus": false;
  "ShowLocaleById": false;
  "ShowMacro": false;
  "ShowMacroAttachment": false;
  "ShowManyDynamicContents": false;
  "ShowManyEmailNotifications": false;
  "ShowManyJobStatuses": true;
  "ShowManyOrganizations": false;
  "ShowManyTicketFields": false;
  "ShowManyTicketForms": true;
  "ShowManyTicketFormStatuses": true;
  "ShowManyUserFields": false;
  "ShowManyUsers": false;
  "ShowMonitoredTwitterHandle": false;
  "ShowOrganization": false;
  "ShowOrganizationField": false;
  "ShowOrganizationMembershipById": false;
  "ShowOrganizationMembershipByUserId": false;
  "ShowOrganizationMerge": false;
  "ShowOrganizationSubscription": false;
  "ShowPermissionPolicy": false;
  "ShowQueueById": false;
  "ShowRequest": false;
  "ShowSatisfactionRating": false;
  "ShowSatisfactionRatings": false;
  "ShowSecuritySettings": false;
  "ShowSession": false;
  "ShowSharingAgreement": false;
  "ShowSLAPolicy": false;
  "ShowSupportAddress": false;
  "ShowSuspendedTickets": false;
  "ShowTarget": false;
  "ShowTargetFailure": false;
  "ShowTaskList": false;
  "ShowTaskListTemplate": false;
  "ShowTicket": false;
  "ShowTicketAfterChanges": false;
  "ShowTicketAudit": false;
  "ShowTicketByMessagingConversationId": false;
  "ShowTicketfield": false;
  "ShowTicketFieldOption": false;
  "ShowTicketForm": false;
  "ShowTicketMetrics": false;
  "ShowTicketMetricsByTicket": false;
  "ShowToken": false;
  "ShowTriggerCategoryById": false;
  "ShowUser": false;
  "ShowUserBrandAgentById": false;
  "ShowUserComplianceDeletionStatuses": false;
  "ShowUserField": false;
  "ShowUserFieldOption": false;
  "ShowUserGroupMembershipById": false;
  "ShowUserIdentity": false;
  "ShowUserRelated": false;
  "ShowView": false;
  "ShowWorkspace": false;
  "SuspendedTicketsAttachments": false;
  "TicketBulkImport": false;
  "TicketFormTicketFormStatuses": false;
  "TicketImport": false;
  "TicketRelatedInformation": false;
  "TicketsCreateMany": false;
  "TicketsShowMany": true;
  "TicketsUpdateMany": false;
  "TriggerRevision": false;
  "UnassignOrganization": false;
  "UpdateAccessRule": false;
  "UpdateAccountSettings": false;
  "UpdateAttachment": false;
  "UpdateAttribute": false;
  "UpdateAttributeValue": false;
  "UpdateAutomation": false;
  "UpdateBrand": false;
  "UpdateBrandLogo": false;
  "UpdateClient": false;
  "UpdateCurrentUserSettings": false;
  "UpdateCustomObject": false;
  "UpdateCustomObjectField": false;
  "UpdateCustomObjectRecord": false;
  "UpdateCustomObjectRecordAttachment": false;
  "UpdateCustomRoleById": false;
  "UpdateCustomStatus": false;
  "UpdateDeletionSchedule": false;
  "UpdateDynamicContentItem": false;
  "UpdateDynamicContentVariant": false;
  "UpdateGroup": false;
  "UpdateGroupSLAPolicy": false;
  "UpdateItamAsset": false;
  "UpdateItamAssetType": false;
  "UpdateItamAssetTypeField": false;
  "UpdateItamLocation": false;
  "UpdateMacro": false;
  "UpdateManyAutomations": false;
  "UpdateManyDynamicContentVariants": false;
  "UpdateManyMacros": false;
  "UpdateManyObjectTriggers": false;
  "UpdateManyOrganizations": false;
  "UpdateManyTriggers": false;
  "UpdateManyUsers": false;
  "UpdateManyViews": false;
  "UpdateObjectTrigger": false;
  "UpdateOrganization": false;
  "UpdateOrganizationField": false;
  "UpdatePermissionPolicy": false;
  "UpdateQueue": false;
  "UpdateRequest": false;
  "UpdateResourceCollection": false;
  "UpdateSharingAgreement": false;
  "UpdateSLAPolicy": false;
  "UpdateSupportAddress": false;
  "UpdateTarget": false;
  "UpdateTaskListTemplate": false;
  "UpdateTicket": false;
  "UpdateTicketField": false;
  "UpdateTicketForm": false;
  "UpdateTicketFormStatusById": false;
  "UpdateTicketFormStatuses": false;
  "UpdateTrigger": false;
  "UpdateTriggerCategory": false;
  "UpdateUser": false;
  "UpdateUserField": false;
  "UpdateUserIdentity": false;
  "UpdateView": false;
  "UpdateWorkspace": false;
  "UploadFiles": true;
  "UpsertCustomObjectRecordByExternalIdOrName": false;
  "ValidateToken": false;
  "VerifySubdomainAvailability": true;
  "VerifySupportAddressForwarding": false;
  "VerifyUserIdentity": false;
}

export interface ZendeskFullApiOperationRequestBodyMap {
  "AddOrganizationTags": never;
  "AutocompleteCustomObjectRecordSearch": never;
  "AutocompleteOrganizations": never;
  "AutocompleteProblems": {
  text?: string;
};
  "AutocompleteTags": never;
  "AutocompleteTagsPost": {
  name?: string;
};
  "AutocompleteUsers": never;
  "AutocompleteUsersPost": {
  brand_id?: number;
  field_id?: number;
  filter?: ("assignable" | "requester" | {
  dynamic_values?: {};
});
  name?: string;
  phone?: string;
  source?: string;
};
  "BatchOperateTriggerCategories": ZendeskFullApiSchemaBatchJobRequest;
  "BulkDeleteAutomations": never;
  "BulkDeleteSessionsByUserId": never;
  "BulkDeleteTickets": never;
  "BulkDeleteViews": never;
  "BulkPermanentlyDeleteTickets": never;
  "BulkRestoreDeletedTickets": never;
  "BulkSetAgentAttributeValuesJob": ZendeskFullApiSchemaBulkSkillBasedRoutingAttributeValuesRequest;
  "BulkUpdateDefaultCustomStatus": ZendeskFullApiSchemaBulkUpdateDefaultCustomStatusRequest;
  "ChangeOwnPassword": never;
  "CheckHostMappingValidity": never;
  "CheckHostMappingValidityForExistingBrand": never;
  "ClientGenerateSecret": never;
  "CloneTicketForm": never;
  "CountActivities": never;
  "CountAuditsForTicket": never;
  "CountCustomObjectRecords": never;
  "CountDeletedUsers": never;
  "CountGroups": never;
  "CountGroupUsers": never;
  "CountOrganizations": never;
  "CountOrganizationTickets": never;
  "CountOrganizationUsers": never;
  "CountSatisfactionRatings": never;
  "CountSearchResults": never;
  "CountTags": never;
  "CountTicketComments": never;
  "CountTicketFields": never;
  "CountTickets": never;
  "CountUserAssignedTickets": never;
  "CountUserCCDTickets": never;
  "CountUserGroups": never;
  "CountUserOrganizations": never;
  "CountUsers": never;
  "CountViews": never;
  "CreateAccessRule": ZendeskFullApiSchemaAccessRuleCreateRequest;
  "CreateApprovalRequest": ZendeskFullApiSchemaApprovalRequestCreateRequest;
  "CreateAssociatedMacroAttachment": never;
  "CreateAttribute": never;
  "CreateAttributeValue": never;
  "CreateAutomation": never;
  "CreateBookmark": ZendeskFullApiSchemaBookmarkCreateRequest;
  "CreateBrand": ZendeskFullApiSchemaBrandCreateRequest;
  "CreateCustomObject": ZendeskFullApiSchemaCustomObjectsCreateRequest;
  "CreateCustomObjectField": ZendeskFullApiSchemaCustomObjectFieldsCreateRequest;
  "CreateCustomObjectRecord": ZendeskFullApiSchemaCustomObjectRecordsCreateRequest;
  "CreateCustomObjectRecordAttachment": {
  uploaded_data: string;
};
  "CreateCustomRole": never;
  "CreateCustomStatus": ZendeskFullApiSchemaCustomStatusCreateRequest;
  "CreateDeletionSchedule": {
  deletion_schedule?: ZendeskFullApiSchemaDeletionSchedule;
};
  "CreateDynamicContent": never;
  "CreateDynamicContentVariant": never;
  "CreateEndUserIdentity": never;
  "CreateGroup": never;
  "CreateGroupMembership": never;
  "CreateGroupSLAPolicy": never;
  "CreateItamAsset": ZendeskFullApiSchemaItamAssetCreateRequest;
  "CreateItamAssetType": ZendeskFullApiSchemaItamAssetTypeCreateRequest;
  "CreateItamAssetTypeField": ZendeskFullApiSchemaItamAssetFieldCreateRequest;
  "CreateItamLocation": ZendeskFullApiSchemaItamAssetLocationCreateRequest;
  "CreateMacro": {
  macro?: ZendeskFullApiSchemaMacroInput;
};
  "CreateMacroAttachment": never;
  "CreateManyDynamicContentVariants": never;
  "CreateManyOrganizationMemberships": never;
  "CreateManyOrganizations": never;
  "CreateManyUsers": ZendeskFullApiSchemaUsersRequest;
  "CreateOAuthClient": never;
  "CreateOAuthToken": never;
  "CreateObjectTrigger": ZendeskFullApiSchemaObjectTriggerRequest;
  "CreateOrganization": ZendeskFullApiSchemaCreateOrganizationRequest;
  "CreateOrganizationField": never;
  "CreateOrganizationMembership": never;
  "CreateOrganizationMerge": ZendeskFullApiSchemaOrganizationMergeRequest;
  "CreateOrganizationSubscription": ZendeskFullApiSchemaOrganizationSubscriptionCreateRequest;
  "CreateOrUpdateManyUsers": ZendeskFullApiSchemaUsersRequest;
  "CreateOrUpdateOrganization": never;
  "CreateOrUpdateTicketFieldOption": never;
  "CreateOrUpdateUser": ZendeskFullApiSchemaUserRequest;
  "CreateOrUpdateUserFieldOption": never;
  "CreateQueue": never;
  "CreateRequest": never;
  "CreateResourceCollection": never;
  "CreateSharingAgreement": never;
  "CreateSLAPolicy": never;
  "CreateSupportAddress": never;
  "CreateTarget": never;
  "CreateTaskList": ZendeskFullApiSchemaTaskListCreateRequest;
  "CreateTaskListTemplate": ZendeskFullApiSchemaTaskListTemplateCreateRequest;
  "CreateTicket": ZendeskFullApiSchemaTicketCreateRequest;
  "CreateTicketContentPin": {
  ticket_content_pin?: {
  content_id: string;
  content_type: string;
  locale?: string;
  ticket_id: string;
};
};
  "CreateTicketField": never;
  "CreateTicketForm": never;
  "CreateTicketFormStatuses": ZendeskFullApiSchemaTicketFormStatusesParams;
  "CreateTicketFormStatusesForCustomStatus": {
  ticket_form_status?: ReadonlyArray<{
  ticket_form_id?: number;
}>;
};
  "CreateTicketFromTweet": never;
  "CreateTicketOrVoicemailTicket": ZendeskFullApiSchemaTicketCreateVoicemailTicketRequest;
  "CreateTicketSatisfactionRating": never;
  "CreateTokenForGrantType": never;
  "CreateTrialAccount": never;
  "CreateTrigger": ZendeskFullApiSchemaTriggerWithCategoryRequest;
  "CreateTriggerCategory": {
  trigger_category?: {
  name: string;
  position?: number;
};
};
  "CreateUser": ZendeskFullApiSchemaUserRequest;
  "CreateUserField": never;
  "CreateUserGroupMembership": never;
  "CreateUserIdentity": never;
  "CreateUserOrganizationMembership": never;
  "CreateView": never;
  "CreateWorkspace": {
  workspace?: ZendeskFullApiSchemaWorkspaceInput;
};
  "CustomObjectFieldsLimit": never;
  "CustomObjectRecordBulkJobs": ZendeskFullApiSchemaCustomObjectRecordsBulkCreateRequest;
  "CustomObjectRecordsLimit": never;
  "CustomObjectsLimit": never;
  "DeleteAccessRule": never;
  "DeleteAttachment": never;
  "DeleteAttribute": never;
  "DeleteAttributeValue": never;
  "DeleteAuthenticatedSession": never;
  "DeleteAutomation": never;
  "DeleteBookmark": never;
  "DeleteBrand": never;
  "DeleteBrandAgentById": never;
  "DeleteBrandLogo": never;
  "DeleteClient": never;
  "DeleteCustomObject": never;
  "DeleteCustomObjectField": never;
  "DeleteCustomObjectRecord": never;
  "DeleteCustomObjectRecordAttachment": never;
  "DeleteCustomObjectRecordByExternalIdOrName": never;
  "DeleteCustomRoleById": never;
  "DeleteCustomStatus": never;
  "DeleteDeletionSchedule": never;
  "DeleteDynamicContentItem": never;
  "DeleteDynamicContentVariant": never;
  "DeleteEndUserIdentity": never;
  "DeleteGroup": never;
  "DeleteGroupMembership": never;
  "DeleteGroupSLAPolicy": never;
  "DeleteItamAsset": never;
  "DeleteItamAssetType": never;
  "DeleteItamAssetTypeField": never;
  "DeleteItamLocation": never;
  "DeleteMacro": never;
  "DeleteManyMacros": never;
  "DeleteManyObjectTriggers": never;
  "DeleteManyOrganizationMemberships": never;
  "DeleteManyOrganizations": never;
  "DeleteManyTriggers": never;
  "DeleteObjectTrigger": never;
  "DeleteOrganization": never;
  "DeleteOrganizationField": never;
  "DeleteOrganizationMembership": never;
  "DeleteOrganizationSubscription": never;
  "DeleteQueue": never;
  "DeleteRecipientAddress": never;
  "DeleteResourceCollection": never;
  "DeleteSession": never;
  "DeleteSharingAgreement": never;
  "DeleteSLAPolicy": never;
  "DeleteSuspendedTicket": never;
  "DeleteSuspendedTickets": never;
  "DeleteTagsTicket": never;
  "DeleteTarget": never;
  "DeleteTaskListTemplate": never;
  "DeleteTicket": never;
  "DeleteTicketContentPin": never;
  "DeleteTicketField": never;
  "DeleteTicketFieldOption": never;
  "DeleteTicketForm": never;
  "DeleteTicketFormStatusById": never;
  "DeleteTicketFormStatuses": {
  id?: ReadonlyArray<string>;
};
  "DeleteTicketPermanently": never;
  "DeleteTrigger": never;
  "DeleteTriggerCategory": never;
  "DeleteUpload": never;
  "DeleteUser": never;
  "DeleteUserField": never;
  "DeleteUserFieldOption": never;
  "DeleteUserGroupMembership": never;
  "DeleteUserIdentity": never;
  "DeleteUserOrganizationMembership": never;
  "DeleteUserTags": never;
  "DeleteView": never;
  "DeleteWorkspace": never;
  "DestroyManyUsers": never;
  "DestroyManyWorkspaces": never;
  "DetectBestLocale": never;
  "DownloadCustomObjectRecordAttachment": never;
  "DynamicContentListVariants": never;
  "ExecuteView": never;
  "ExportAuditLogs": never;
  "ExportSearchResults": never;
  "ExportSuspendedTickets": never;
  "ExportView": never;
  "FilteredSearchCustomObjectRecords": (ZendeskFullApiSchemaCustomObjectRecordsFilteredSearchRequestBasic | ZendeskFullApiSchemaCustomObjectRecordsFilteredSearchRequestComplex);
  "FilteredSearchItamAssets": (ZendeskFullApiSchemaItamAssetFilteredSearchRequestBasic | ZendeskFullApiSchemaItamAssetFilteredSearchRequestComplex);
  "GetDeletionSchedule": never;
  "GetObjectTrigger": never;
  "GetRelationshipFilterDefinitions": never;
  "GetSourcesByTarget": never;
  "GetTasksByTaskListTemplateId": never;
  "GettingTwicketStatus": never;
  "GetTrigger": never;
  "GetUserEntitlementsFull": never;
  "GetUserPasswordRequirements": never;
  "GetViewCount": never;
  "GetViewCounts": never;
  "GlobalOAuthClientsTokenSummary": never;
  "GroupMembershipBulkCreate": never;
  "GroupMembershipBulkDelete": never;
  "GroupMembershipSetDefault": never;
  "IncrementalCustomObjectRecordExportCursor": never;
  "IncrementalOrganizationExport": never;
  "IncrementalSampleExport": never;
  "IncrementalSkilBasedRoutingAttributesExport": never;
  "IncrementalSkilBasedRoutingAttributeValuesExport": never;
  "IncrementalSkilBasedRoutingInstanceValuesExport": never;
  "IncrementalTicketEvents": never;
  "IncrementalTicketExportCursor": never;
  "IncrementalTicketExportTime": never;
  "IncrementalUserExportCursor": never;
  "IncrementalUserExportTime": never;
  "ItamAssetBulkJobs": ZendeskFullApiSchemaItamAssetBulkJobRequest;
  "ListAccessRuleDefinitions": never;
  "ListAccessRules": never;
  "ListAccountAttributes": never;
  "ListActiveAutomations": never;
  "ListActiveMacros": never;
  "ListActiveObjectTriggers": never;
  "ListActiveTriggers": never;
  "ListActiveViews": never;
  "ListActivities": never;
  "ListAGentAttributeValues": never;
  "ListApprovalRequests": never;
  "ListAssignableGroupMemberships": never;
  "ListAssignableGroupMembershipsByGroup": never;
  "ListAssignableGroups": never;
  "ListAttributeValues": never;
  "ListAuditLogs": never;
  "ListAuditsForTicket": never;
  "ListAutomations": never;
  "ListAvailablePublicLocales": never;
  "ListBookmarks": never;
  "ListBrandAgents": never;
  "ListBrandAgentsByBrand": never;
  "ListBrands": never;
  "ListCCDRequests": never;
  "ListComments": never;
  "ListCompactViews": never;
  "ListConversationLogForTicket": never;
  "ListCurrentUserOAuthClients": never;
  "ListCustomObjectFields": never;
  "ListCustomObjectRecordAttachments": never;
  "ListCustomObjectRecords": never;
  "ListCustomObjects": never;
  "ListCustomRoles": never;
  "ListCustomStatuses": never;
  "ListDeletedTickets": never;
  "ListDeletedUsers": never;
  "ListDeletionSchedules": never;
  "ListDynamicContents": never;
  "ListEmailNotifications": never;
  "ListEndUserIdentities": never;
  "ListGlobalOAuthClients": never;
  "ListGroupMemberships": never;
  "ListGroupMembershipsByGroup": never;
  "ListGroups": never;
  "ListGroupSLAPolicies": never;
  "ListGroupUsers": never;
  "ListItamAssets": never;
  "ListItamAssetTypeFields": never;
  "ListItamAssetTypes": never;
  "ListItamLocations": never;
  "ListItamStatuses": never;
  "ListJobStatuses": never;
  "ListLocales": never;
  "ListLocalesForAgent": never;
  "ListMacroActionDefinitions": never;
  "ListMacroAttachments": never;
  "ListMacroCategories": never;
  "ListMacros": never;
  "ListMacrosActions": never;
  "ListManyAgentsAttributeValues": never;
  "ListMonitoredTwitterHandles": never;
  "ListOAuthClients": never;
  "ListOAuthTokens": never;
  "ListObjectTriggers": never;
  "ListObjectTriggersDefinitions": never;
  "ListOpenRequests": never;
  "ListOrganizationFields": never;
  "ListOrganizationMemberships": never;
  "ListOrganizationMembershipsByOrganization": never;
  "ListOrganizationMerges": never;
  "ListOrganizationRequests": never;
  "ListOrganizations": never;
  "ListOrganizationSubscriptions": never;
  "ListOrganizationSubscriptionsByOrganization": never;
  "ListOrganizationTags": never;
  "ListOrganizationTickets": never;
  "ListOrganizationUsers": never;
  "ListPermissionPolicies": never;
  "ListQueueDefinitions": never;
  "ListQueues": never;
  "ListRecentTickets": never;
  "ListRemoteAuthentications": never;
  "ListRequests": never;
  "ListResourceCollections": never;
  "ListResourceTags": never;
  "ListRoutingAttributeDefinitions": never;
  "ListSatisfactionRatingReasons": never;
  "ListSatisfactionRatings": never;
  "ListSearchResults": never;
  "ListSessions": never;
  "ListSharingAgreements": never;
  "ListSkips": never;
  "ListSLAPolicies": never;
  "ListSolvedRequests": never;
  "ListSupportAddresses": never;
  "ListSuspendedTickets": never;
  "ListTags": never;
  "ListTargetFailures": never;
  "ListTargets": never;
  "ListTaskListTemplates": never;
  "ListTicketAttributeValues": never;
  "ListTicketAudits": never;
  "ListTicketCollaborators": never;
  "ListTicketComments": never;
  "ListTicketContentPins": never;
  "ListTicketEmailCCs": never;
  "ListTicketFieldOptions": never;
  "ListTicketFields": never;
  "ListTicketFollowers": never;
  "ListTicketForms": never;
  "ListTicketFormStatuses": never;
  "ListTicketIncidents": never;
  "ListTicketMetricEvents": never;
  "ListTicketMetrics": never;
  "ListTicketProblems": never;
  "ListTickets": never;
  "ListTicketsFromView": never;
  "ListTicketsFullfilledByUser": never;
  "ListTicketSkips": never;
  "ListTicketSkipsByTicket": never;
  "ListTriggerActionConditionDefinitions": never;
  "ListTriggerCategories": never;
  "ListTriggerRevisions": never;
  "ListTriggers": never;
  "ListUserAssignedTickets": never;
  "ListUserBrandAgents": never;
  "ListUserCCDTickets": never;
  "ListUserFieldOptions": never;
  "ListUserFields": never;
  "ListUserFollowedTickets": never;
  "ListUserGroupMemberships": never;
  "ListUserGroups": never;
  "ListUserIdentities": never;
  "ListUserOrganizationMemberships": never;
  "ListUserOrganizations": never;
  "ListUserOrganizationSubscriptions": never;
  "ListUserRequestedTickets": never;
  "ListUserRequests": never;
  "ListUsers": never;
  "ListUserSessions": never;
  "ListUserTags": never;
  "ListViewDefinitions": never;
  "ListViews": never;
  "ListViewsById": never;
  "ListWorkspaces": never;
  "LogoutManyUsers": never;
  "MakeEndUserIdentityPrimary": never;
  "MakeTicketCommentPrivate": never;
  "MakeTicketCommentPrivateFromAudits": never;
  "MakeUserIdentityPrimary": never;
  "MarkManyTicketsAsSpam": never;
  "MarkTicketAsSpamAndSuspendRequester": never;
  "MergeEndUsers": ZendeskFullApiSchemaUserRequest;
  "MergeTicketsIntoTargetTicket": ZendeskFullApiSchemaTicketMergeInput;
  "OpenTicketInAgentBrowser": never;
  "OpenUsersProfileInAgentBrowser": never;
  "OrganizationRelated": never;
  "PermanentlyDeleteUser": never;
  "PreviewCount": never;
  "PreviewViews": never;
  "PushContentToSupport": never;
  "PushNotificationDevices": ZendeskFullApiSchemaPushNotificationDevicesRequest;
  "PutTagsTicket": never;
  "PutUserTags": never;
  "RecordNewSkip": never;
  "RecoverSuspendedTicket": never;
  "RecoverSuspendedTickets": never;
  "RedactChatComment": never;
  "RedactChatCommentAttachment": never;
  "RedactCommentAttachment": never;
  "RedactStringInComment": never;
  "RedactTicketCommentInAgentWorkspace": never;
  "RemoveOrganizationTags": never;
  "RenewCurrentSession": never;
  "ReorderCustomObjectFields": never;
  "ReorderGroupSLAPolicies": never;
  "ReorderOrganizationField": never;
  "ReorderQueues": never;
  "ReorderSLAPolicies": never;
  "ReorderTicketFields": never;
  "ReorderTicketForms": never;
  "ReorderTriggers": never;
  "ReorderUserField": never;
  "ReorderWorkspaces": {
  ids?: ReadonlyArray<number>;
};
  "ReportChannelbackError": never;
  "RequestEndUserVerification": never;
  "RequestUserCreate": ZendeskFullApiSchemaUserRequest;
  "RequestUserVerification": never;
  "RestoreDeletedTicket": never;
  "RetrieveGroupSLAPolicyFilterDefinitionItems": never;
  "RetrieveResourceCollection": never;
  "RetrieveSLAPolicyFilterDefinitionItems": never;
  "RevokeCurrentOAuthToken": never;
  "RevokeOAuthToken": never;
  "SearchAutomations": never;
  "SearchCustomObjectRecords": never;
  "SearchItamAssets": never;
  "SearchMacro": never;
  "SearchObjectTriggers": never;
  "SearchOrganizations": never;
  "SearchRequests": never;
  "SearchTriggers": never;
  "SearchUsers": never;
  "SearchViews": never;
  "SetAgentAttributeValues": never;
  "SetOrganizationAsDefault": never;
  "SetOrganizationMembershipAsDefault": never;
  "SetOrganizationTags": never;
  "SetTagsTicket": never;
  "SetTicketAttributeValues": never;
  "SetUserPassword": never;
  "SetUserTags": never;
  "ShowAccessRule": never;
  "ShowAccountSettings": never;
  "ShowActivity": never;
  "ShowAttachment": never;
  "ShowAttribute": never;
  "ShowAttributeValue": never;
  "ShowAuditLog": never;
  "ShowAutomation": never;
  "ShowBrand": never;
  "ShowBrandAgentById": never;
  "ShowChangesToTicket": never;
  "ShowClient": never;
  "ShowComment": never;
  "ShowCurrentLocale": never;
  "ShowCurrentlyAuthenticatedSession": never;
  "ShowCurrentToken": never;
  "ShowCurrentUser": never;
  "ShowCurrentUserSettings": never;
  "ShowCustomObject": never;
  "ShowCustomObjectField": never;
  "ShowCustomObjectRecord": never;
  "ShowCustomRoleById": never;
  "ShowCustomStatus": never;
  "ShowDeletedUser": never;
  "ShowDerivedMacro": never;
  "ShowDynamicContentItem": never;
  "ShowDynamicContentVariant": never;
  "ShowEmailNotification": never;
  "ShowEndUserIdentity": never;
  "ShowGlobalClient": never;
  "ShowGroupById": never;
  "ShowGroupMembershipById": never;
  "ShowGroupSLAPolicy": never;
  "ShowItamAsset": never;
  "ShowItamAssetType": never;
  "ShowItamAssetTypeField": never;
  "ShowItamLocation": never;
  "ShowItamStatus": never;
  "ShowJobStatus": never;
  "ShowLocaleById": never;
  "ShowMacro": never;
  "ShowMacroAttachment": never;
  "ShowManyDynamicContents": never;
  "ShowManyEmailNotifications": never;
  "ShowManyJobStatuses": never;
  "ShowManyOrganizations": never;
  "ShowManyTicketFields": never;
  "ShowManyTicketForms": never;
  "ShowManyTicketFormStatuses": never;
  "ShowManyUserFields": never;
  "ShowManyUsers": never;
  "ShowMonitoredTwitterHandle": never;
  "ShowOrganization": never;
  "ShowOrganizationField": never;
  "ShowOrganizationMembershipById": never;
  "ShowOrganizationMembershipByUserId": never;
  "ShowOrganizationMerge": never;
  "ShowOrganizationSubscription": never;
  "ShowPermissionPolicy": never;
  "ShowQueueById": never;
  "ShowRequest": never;
  "ShowSatisfactionRating": never;
  "ShowSatisfactionRatings": never;
  "ShowSecuritySettings": never;
  "ShowSession": never;
  "ShowSharingAgreement": never;
  "ShowSLAPolicy": never;
  "ShowSupportAddress": never;
  "ShowSuspendedTickets": never;
  "ShowTarget": never;
  "ShowTargetFailure": never;
  "ShowTaskList": never;
  "ShowTaskListTemplate": never;
  "ShowTicket": never;
  "ShowTicketAfterChanges": never;
  "ShowTicketAudit": never;
  "ShowTicketByMessagingConversationId": never;
  "ShowTicketfield": never;
  "ShowTicketFieldOption": never;
  "ShowTicketForm": never;
  "ShowTicketMetrics": never;
  "ShowTicketMetricsByTicket": never;
  "ShowToken": never;
  "ShowTriggerCategoryById": never;
  "ShowUser": never;
  "ShowUserBrandAgentById": never;
  "ShowUserComplianceDeletionStatuses": never;
  "ShowUserField": never;
  "ShowUserFieldOption": never;
  "ShowUserGroupMembershipById": never;
  "ShowUserIdentity": never;
  "ShowUserRelated": never;
  "ShowView": never;
  "ShowWorkspace": never;
  "SuspendedTicketsAttachments": never;
  "TicketBulkImport": ZendeskFullApiSchemaTicketBulkImportRequest;
  "TicketFormTicketFormStatuses": never;
  "TicketImport": ZendeskFullApiSchemaTicketImportRequest;
  "TicketRelatedInformation": never;
  "TicketsCreateMany": ZendeskFullApiSchemaTicketsCreateRequest;
  "TicketsShowMany": never;
  "TicketsUpdateMany": ZendeskFullApiSchemaTicketsUpdateRequest;
  "TriggerRevision": never;
  "UnassignOrganization": never;
  "UpdateAccessRule": ZendeskFullApiSchemaAccessRuleUpdateRequest;
  "UpdateAccountSettings": never;
  "UpdateAttachment": ZendeskFullApiSchemaAttachmentUpdateRequest;
  "UpdateAttribute": never;
  "UpdateAttributeValue": never;
  "UpdateAutomation": never;
  "UpdateBrand": ZendeskFullApiSchemaBrandUpdateRequest;
  "UpdateBrandLogo": {
  "brand[logo][uploaded_data]": string;
};
  "UpdateClient": never;
  "UpdateCurrentUserSettings": ZendeskFullApiSchemaUserSettingsUpdateRequest;
  "UpdateCustomObject": never;
  "UpdateCustomObjectField": never;
  "UpdateCustomObjectRecord": never;
  "UpdateCustomObjectRecordAttachment": ZendeskFullApiSchemaCustomObjectRecordAttachmentUpdateRequest;
  "UpdateCustomRoleById": never;
  "UpdateCustomStatus": ZendeskFullApiSchemaCustomStatusUpdateRequest;
  "UpdateDeletionSchedule": {
  deletion_schedule?: ZendeskFullApiSchemaDeletionSchedule;
};
  "UpdateDynamicContentItem": never;
  "UpdateDynamicContentVariant": never;
  "UpdateGroup": never;
  "UpdateGroupSLAPolicy": never;
  "UpdateItamAsset": never;
  "UpdateItamAssetType": never;
  "UpdateItamAssetTypeField": never;
  "UpdateItamLocation": never;
  "UpdateMacro": {
  macro?: ZendeskFullApiSchemaMacroInput;
};
  "UpdateManyAutomations": never;
  "UpdateManyDynamicContentVariants": never;
  "UpdateManyMacros": ZendeskFullApiSchemaMacroUpdateManyInput;
  "UpdateManyObjectTriggers": ZendeskFullApiSchemaObjectTriggerBulkUpdateRequest;
  "UpdateManyOrganizations": never;
  "UpdateManyTriggers": ZendeskFullApiSchemaTriggerBulkUpdateRequest;
  "UpdateManyUsers": (ZendeskFullApiSchemaUserUpdateRequest | ZendeskFullApiSchemaUsersRequest);
  "UpdateManyViews": never;
  "UpdateObjectTrigger": ZendeskFullApiSchemaObjectTriggerRequest;
  "UpdateOrganization": never;
  "UpdateOrganizationField": never;
  "UpdatePermissionPolicy": ZendeskFullApiSchemaPermissionPolicyUpdateRequest;
  "UpdateQueue": never;
  "UpdateRequest": never;
  "UpdateResourceCollection": never;
  "UpdateSharingAgreement": never;
  "UpdateSLAPolicy": never;
  "UpdateSupportAddress": never;
  "UpdateTarget": never;
  "UpdateTaskListTemplate": ZendeskFullApiSchemaTaskListTemplateUpdateRequest;
  "UpdateTicket": ZendeskFullApiSchemaTicketUpdateRequest;
  "UpdateTicketField": never;
  "UpdateTicketForm": never;
  "UpdateTicketFormStatusById": ZendeskFullApiSchemaUpdateTicketFormStatusesParams;
  "UpdateTicketFormStatuses": ZendeskFullApiSchemaUpdateTicketFormStatusesParams;
  "UpdateTrigger": ZendeskFullApiSchemaTriggerWithCategoryRequest;
  "UpdateTriggerCategory": {
  trigger_category?: ZendeskFullApiSchemaTriggerCategoryRequest;
};
  "UpdateUser": ZendeskFullApiSchemaUserUpdateRequest;
  "UpdateUserField": never;
  "UpdateUserIdentity": never;
  "UpdateView": never;
  "UpdateWorkspace": {
  workspace?: ZendeskFullApiSchemaWorkspaceInput;
};
  "UploadFiles": never;
  "UpsertCustomObjectRecordByExternalIdOrName": ZendeskFullApiSchemaCustomObjectRecordsUpsertRequest;
  "ValidateToken": never;
  "VerifySubdomainAvailability": never;
  "VerifySupportAddressForwarding": never;
  "VerifyUserIdentity": never;
}

export interface ZendeskFullApiOperationRequestBodyRequiredMap {
  "AddOrganizationTags": false;
  "AutocompleteCustomObjectRecordSearch": false;
  "AutocompleteOrganizations": false;
  "AutocompleteProblems": false;
  "AutocompleteTags": false;
  "AutocompleteTagsPost": false;
  "AutocompleteUsers": false;
  "AutocompleteUsersPost": true;
  "BatchOperateTriggerCategories": true;
  "BulkDeleteAutomations": false;
  "BulkDeleteSessionsByUserId": false;
  "BulkDeleteTickets": false;
  "BulkDeleteViews": false;
  "BulkPermanentlyDeleteTickets": false;
  "BulkRestoreDeletedTickets": false;
  "BulkSetAgentAttributeValuesJob": true;
  "BulkUpdateDefaultCustomStatus": false;
  "ChangeOwnPassword": false;
  "CheckHostMappingValidity": false;
  "CheckHostMappingValidityForExistingBrand": false;
  "ClientGenerateSecret": false;
  "CloneTicketForm": false;
  "CountActivities": false;
  "CountAuditsForTicket": false;
  "CountCustomObjectRecords": false;
  "CountDeletedUsers": false;
  "CountGroups": false;
  "CountGroupUsers": false;
  "CountOrganizations": false;
  "CountOrganizationTickets": false;
  "CountOrganizationUsers": false;
  "CountSatisfactionRatings": false;
  "CountSearchResults": false;
  "CountTags": false;
  "CountTicketComments": false;
  "CountTicketFields": false;
  "CountTickets": false;
  "CountUserAssignedTickets": false;
  "CountUserCCDTickets": false;
  "CountUserGroups": false;
  "CountUserOrganizations": false;
  "CountUsers": false;
  "CountViews": false;
  "CreateAccessRule": true;
  "CreateApprovalRequest": true;
  "CreateAssociatedMacroAttachment": false;
  "CreateAttribute": false;
  "CreateAttributeValue": false;
  "CreateAutomation": false;
  "CreateBookmark": false;
  "CreateBrand": false;
  "CreateCustomObject": false;
  "CreateCustomObjectField": false;
  "CreateCustomObjectRecord": false;
  "CreateCustomObjectRecordAttachment": false;
  "CreateCustomRole": false;
  "CreateCustomStatus": false;
  "CreateDeletionSchedule": true;
  "CreateDynamicContent": false;
  "CreateDynamicContentVariant": false;
  "CreateEndUserIdentity": false;
  "CreateGroup": false;
  "CreateGroupMembership": false;
  "CreateGroupSLAPolicy": false;
  "CreateItamAsset": false;
  "CreateItamAssetType": false;
  "CreateItamAssetTypeField": false;
  "CreateItamLocation": false;
  "CreateMacro": false;
  "CreateMacroAttachment": false;
  "CreateManyDynamicContentVariants": false;
  "CreateManyOrganizationMemberships": false;
  "CreateManyOrganizations": false;
  "CreateManyUsers": true;
  "CreateOAuthClient": false;
  "CreateOAuthToken": false;
  "CreateObjectTrigger": true;
  "CreateOrganization": true;
  "CreateOrganizationField": false;
  "CreateOrganizationMembership": false;
  "CreateOrganizationMerge": true;
  "CreateOrganizationSubscription": false;
  "CreateOrUpdateManyUsers": true;
  "CreateOrUpdateOrganization": false;
  "CreateOrUpdateTicketFieldOption": false;
  "CreateOrUpdateUser": true;
  "CreateOrUpdateUserFieldOption": false;
  "CreateQueue": false;
  "CreateRequest": false;
  "CreateResourceCollection": false;
  "CreateSharingAgreement": false;
  "CreateSLAPolicy": false;
  "CreateSupportAddress": false;
  "CreateTarget": false;
  "CreateTaskList": false;
  "CreateTaskListTemplate": false;
  "CreateTicket": false;
  "CreateTicketContentPin": true;
  "CreateTicketField": false;
  "CreateTicketForm": false;
  "CreateTicketFormStatuses": false;
  "CreateTicketFormStatusesForCustomStatus": false;
  "CreateTicketFromTweet": false;
  "CreateTicketOrVoicemailTicket": false;
  "CreateTicketSatisfactionRating": false;
  "CreateTokenForGrantType": false;
  "CreateTrialAccount": false;
  "CreateTrigger": true;
  "CreateTriggerCategory": true;
  "CreateUser": true;
  "CreateUserField": false;
  "CreateUserGroupMembership": false;
  "CreateUserIdentity": false;
  "CreateUserOrganizationMembership": false;
  "CreateView": false;
  "CreateWorkspace": false;
  "CustomObjectFieldsLimit": false;
  "CustomObjectRecordBulkJobs": false;
  "CustomObjectRecordsLimit": false;
  "CustomObjectsLimit": false;
  "DeleteAccessRule": false;
  "DeleteAttachment": false;
  "DeleteAttribute": false;
  "DeleteAttributeValue": false;
  "DeleteAuthenticatedSession": false;
  "DeleteAutomation": false;
  "DeleteBookmark": false;
  "DeleteBrand": false;
  "DeleteBrandAgentById": false;
  "DeleteBrandLogo": false;
  "DeleteClient": false;
  "DeleteCustomObject": false;
  "DeleteCustomObjectField": false;
  "DeleteCustomObjectRecord": false;
  "DeleteCustomObjectRecordAttachment": false;
  "DeleteCustomObjectRecordByExternalIdOrName": false;
  "DeleteCustomRoleById": false;
  "DeleteCustomStatus": false;
  "DeleteDeletionSchedule": false;
  "DeleteDynamicContentItem": false;
  "DeleteDynamicContentVariant": false;
  "DeleteEndUserIdentity": false;
  "DeleteGroup": false;
  "DeleteGroupMembership": false;
  "DeleteGroupSLAPolicy": false;
  "DeleteItamAsset": false;
  "DeleteItamAssetType": false;
  "DeleteItamAssetTypeField": false;
  "DeleteItamLocation": false;
  "DeleteMacro": false;
  "DeleteManyMacros": false;
  "DeleteManyObjectTriggers": false;
  "DeleteManyOrganizationMemberships": false;
  "DeleteManyOrganizations": false;
  "DeleteManyTriggers": false;
  "DeleteObjectTrigger": false;
  "DeleteOrganization": false;
  "DeleteOrganizationField": false;
  "DeleteOrganizationMembership": false;
  "DeleteOrganizationSubscription": false;
  "DeleteQueue": false;
  "DeleteRecipientAddress": false;
  "DeleteResourceCollection": false;
  "DeleteSession": false;
  "DeleteSharingAgreement": false;
  "DeleteSLAPolicy": false;
  "DeleteSuspendedTicket": false;
  "DeleteSuspendedTickets": false;
  "DeleteTagsTicket": false;
  "DeleteTarget": false;
  "DeleteTaskListTemplate": false;
  "DeleteTicket": false;
  "DeleteTicketContentPin": false;
  "DeleteTicketField": false;
  "DeleteTicketFieldOption": false;
  "DeleteTicketForm": false;
  "DeleteTicketFormStatusById": false;
  "DeleteTicketFormStatuses": false;
  "DeleteTicketPermanently": false;
  "DeleteTrigger": false;
  "DeleteTriggerCategory": false;
  "DeleteUpload": false;
  "DeleteUser": false;
  "DeleteUserField": false;
  "DeleteUserFieldOption": false;
  "DeleteUserGroupMembership": false;
  "DeleteUserIdentity": false;
  "DeleteUserOrganizationMembership": false;
  "DeleteUserTags": false;
  "DeleteView": false;
  "DeleteWorkspace": false;
  "DestroyManyUsers": false;
  "DestroyManyWorkspaces": false;
  "DetectBestLocale": false;
  "DownloadCustomObjectRecordAttachment": false;
  "DynamicContentListVariants": false;
  "ExecuteView": false;
  "ExportAuditLogs": false;
  "ExportSearchResults": false;
  "ExportSuspendedTickets": false;
  "ExportView": false;
  "FilteredSearchCustomObjectRecords": false;
  "FilteredSearchItamAssets": true;
  "GetDeletionSchedule": false;
  "GetObjectTrigger": false;
  "GetRelationshipFilterDefinitions": false;
  "GetSourcesByTarget": false;
  "GetTasksByTaskListTemplateId": false;
  "GettingTwicketStatus": false;
  "GetTrigger": false;
  "GetUserEntitlementsFull": false;
  "GetUserPasswordRequirements": false;
  "GetViewCount": false;
  "GetViewCounts": false;
  "GlobalOAuthClientsTokenSummary": false;
  "GroupMembershipBulkCreate": false;
  "GroupMembershipBulkDelete": false;
  "GroupMembershipSetDefault": false;
  "IncrementalCustomObjectRecordExportCursor": false;
  "IncrementalOrganizationExport": false;
  "IncrementalSampleExport": false;
  "IncrementalSkilBasedRoutingAttributesExport": false;
  "IncrementalSkilBasedRoutingAttributeValuesExport": false;
  "IncrementalSkilBasedRoutingInstanceValuesExport": false;
  "IncrementalTicketEvents": false;
  "IncrementalTicketExportCursor": false;
  "IncrementalTicketExportTime": false;
  "IncrementalUserExportCursor": false;
  "IncrementalUserExportTime": false;
  "ItamAssetBulkJobs": false;
  "ListAccessRuleDefinitions": false;
  "ListAccessRules": false;
  "ListAccountAttributes": false;
  "ListActiveAutomations": false;
  "ListActiveMacros": false;
  "ListActiveObjectTriggers": false;
  "ListActiveTriggers": false;
  "ListActiveViews": false;
  "ListActivities": false;
  "ListAGentAttributeValues": false;
  "ListApprovalRequests": false;
  "ListAssignableGroupMemberships": false;
  "ListAssignableGroupMembershipsByGroup": false;
  "ListAssignableGroups": false;
  "ListAttributeValues": false;
  "ListAuditLogs": false;
  "ListAuditsForTicket": false;
  "ListAutomations": false;
  "ListAvailablePublicLocales": false;
  "ListBookmarks": false;
  "ListBrandAgents": false;
  "ListBrandAgentsByBrand": false;
  "ListBrands": false;
  "ListCCDRequests": false;
  "ListComments": false;
  "ListCompactViews": false;
  "ListConversationLogForTicket": false;
  "ListCurrentUserOAuthClients": false;
  "ListCustomObjectFields": false;
  "ListCustomObjectRecordAttachments": false;
  "ListCustomObjectRecords": false;
  "ListCustomObjects": false;
  "ListCustomRoles": false;
  "ListCustomStatuses": false;
  "ListDeletedTickets": false;
  "ListDeletedUsers": false;
  "ListDeletionSchedules": false;
  "ListDynamicContents": false;
  "ListEmailNotifications": false;
  "ListEndUserIdentities": false;
  "ListGlobalOAuthClients": false;
  "ListGroupMemberships": false;
  "ListGroupMembershipsByGroup": false;
  "ListGroups": false;
  "ListGroupSLAPolicies": false;
  "ListGroupUsers": false;
  "ListItamAssets": false;
  "ListItamAssetTypeFields": false;
  "ListItamAssetTypes": false;
  "ListItamLocations": false;
  "ListItamStatuses": false;
  "ListJobStatuses": false;
  "ListLocales": false;
  "ListLocalesForAgent": false;
  "ListMacroActionDefinitions": false;
  "ListMacroAttachments": false;
  "ListMacroCategories": false;
  "ListMacros": false;
  "ListMacrosActions": false;
  "ListManyAgentsAttributeValues": false;
  "ListMonitoredTwitterHandles": false;
  "ListOAuthClients": false;
  "ListOAuthTokens": false;
  "ListObjectTriggers": false;
  "ListObjectTriggersDefinitions": false;
  "ListOpenRequests": false;
  "ListOrganizationFields": false;
  "ListOrganizationMemberships": false;
  "ListOrganizationMembershipsByOrganization": false;
  "ListOrganizationMerges": false;
  "ListOrganizationRequests": false;
  "ListOrganizations": false;
  "ListOrganizationSubscriptions": false;
  "ListOrganizationSubscriptionsByOrganization": false;
  "ListOrganizationTags": false;
  "ListOrganizationTickets": false;
  "ListOrganizationUsers": false;
  "ListPermissionPolicies": false;
  "ListQueueDefinitions": false;
  "ListQueues": false;
  "ListRecentTickets": false;
  "ListRemoteAuthentications": false;
  "ListRequests": false;
  "ListResourceCollections": false;
  "ListResourceTags": false;
  "ListRoutingAttributeDefinitions": false;
  "ListSatisfactionRatingReasons": false;
  "ListSatisfactionRatings": false;
  "ListSearchResults": false;
  "ListSessions": false;
  "ListSharingAgreements": false;
  "ListSkips": false;
  "ListSLAPolicies": false;
  "ListSolvedRequests": false;
  "ListSupportAddresses": false;
  "ListSuspendedTickets": false;
  "ListTags": false;
  "ListTargetFailures": false;
  "ListTargets": false;
  "ListTaskListTemplates": false;
  "ListTicketAttributeValues": false;
  "ListTicketAudits": false;
  "ListTicketCollaborators": false;
  "ListTicketComments": false;
  "ListTicketContentPins": false;
  "ListTicketEmailCCs": false;
  "ListTicketFieldOptions": false;
  "ListTicketFields": false;
  "ListTicketFollowers": false;
  "ListTicketForms": false;
  "ListTicketFormStatuses": false;
  "ListTicketIncidents": false;
  "ListTicketMetricEvents": false;
  "ListTicketMetrics": false;
  "ListTicketProblems": false;
  "ListTickets": false;
  "ListTicketsFromView": false;
  "ListTicketsFullfilledByUser": false;
  "ListTicketSkips": false;
  "ListTicketSkipsByTicket": false;
  "ListTriggerActionConditionDefinitions": false;
  "ListTriggerCategories": false;
  "ListTriggerRevisions": false;
  "ListTriggers": false;
  "ListUserAssignedTickets": false;
  "ListUserBrandAgents": false;
  "ListUserCCDTickets": false;
  "ListUserFieldOptions": false;
  "ListUserFields": false;
  "ListUserFollowedTickets": false;
  "ListUserGroupMemberships": false;
  "ListUserGroups": false;
  "ListUserIdentities": false;
  "ListUserOrganizationMemberships": false;
  "ListUserOrganizations": false;
  "ListUserOrganizationSubscriptions": false;
  "ListUserRequestedTickets": false;
  "ListUserRequests": false;
  "ListUsers": false;
  "ListUserSessions": false;
  "ListUserTags": false;
  "ListViewDefinitions": false;
  "ListViews": false;
  "ListViewsById": false;
  "ListWorkspaces": false;
  "LogoutManyUsers": false;
  "MakeEndUserIdentityPrimary": false;
  "MakeTicketCommentPrivate": false;
  "MakeTicketCommentPrivateFromAudits": false;
  "MakeUserIdentityPrimary": false;
  "MarkManyTicketsAsSpam": false;
  "MarkTicketAsSpamAndSuspendRequester": false;
  "MergeEndUsers": true;
  "MergeTicketsIntoTargetTicket": false;
  "OpenTicketInAgentBrowser": false;
  "OpenUsersProfileInAgentBrowser": false;
  "OrganizationRelated": false;
  "PermanentlyDeleteUser": false;
  "PreviewCount": false;
  "PreviewViews": false;
  "PushContentToSupport": false;
  "PushNotificationDevices": false;
  "PutTagsTicket": false;
  "PutUserTags": false;
  "RecordNewSkip": false;
  "RecoverSuspendedTicket": false;
  "RecoverSuspendedTickets": false;
  "RedactChatComment": false;
  "RedactChatCommentAttachment": false;
  "RedactCommentAttachment": false;
  "RedactStringInComment": false;
  "RedactTicketCommentInAgentWorkspace": false;
  "RemoveOrganizationTags": false;
  "RenewCurrentSession": false;
  "ReorderCustomObjectFields": false;
  "ReorderGroupSLAPolicies": false;
  "ReorderOrganizationField": false;
  "ReorderQueues": false;
  "ReorderSLAPolicies": false;
  "ReorderTicketFields": false;
  "ReorderTicketForms": false;
  "ReorderTriggers": false;
  "ReorderUserField": false;
  "ReorderWorkspaces": false;
  "ReportChannelbackError": false;
  "RequestEndUserVerification": false;
  "RequestUserCreate": true;
  "RequestUserVerification": false;
  "RestoreDeletedTicket": false;
  "RetrieveGroupSLAPolicyFilterDefinitionItems": false;
  "RetrieveResourceCollection": false;
  "RetrieveSLAPolicyFilterDefinitionItems": false;
  "RevokeCurrentOAuthToken": false;
  "RevokeOAuthToken": false;
  "SearchAutomations": false;
  "SearchCustomObjectRecords": false;
  "SearchItamAssets": false;
  "SearchMacro": false;
  "SearchObjectTriggers": false;
  "SearchOrganizations": false;
  "SearchRequests": false;
  "SearchTriggers": false;
  "SearchUsers": false;
  "SearchViews": false;
  "SetAgentAttributeValues": false;
  "SetOrganizationAsDefault": false;
  "SetOrganizationMembershipAsDefault": false;
  "SetOrganizationTags": false;
  "SetTagsTicket": false;
  "SetTicketAttributeValues": false;
  "SetUserPassword": false;
  "SetUserTags": false;
  "ShowAccessRule": false;
  "ShowAccountSettings": false;
  "ShowActivity": false;
  "ShowAttachment": false;
  "ShowAttribute": false;
  "ShowAttributeValue": false;
  "ShowAuditLog": false;
  "ShowAutomation": false;
  "ShowBrand": false;
  "ShowBrandAgentById": false;
  "ShowChangesToTicket": false;
  "ShowClient": false;
  "ShowComment": false;
  "ShowCurrentLocale": false;
  "ShowCurrentlyAuthenticatedSession": false;
  "ShowCurrentToken": false;
  "ShowCurrentUser": false;
  "ShowCurrentUserSettings": false;
  "ShowCustomObject": false;
  "ShowCustomObjectField": false;
  "ShowCustomObjectRecord": false;
  "ShowCustomRoleById": false;
  "ShowCustomStatus": false;
  "ShowDeletedUser": false;
  "ShowDerivedMacro": false;
  "ShowDynamicContentItem": false;
  "ShowDynamicContentVariant": false;
  "ShowEmailNotification": false;
  "ShowEndUserIdentity": false;
  "ShowGlobalClient": false;
  "ShowGroupById": false;
  "ShowGroupMembershipById": false;
  "ShowGroupSLAPolicy": false;
  "ShowItamAsset": false;
  "ShowItamAssetType": false;
  "ShowItamAssetTypeField": false;
  "ShowItamLocation": false;
  "ShowItamStatus": false;
  "ShowJobStatus": false;
  "ShowLocaleById": false;
  "ShowMacro": false;
  "ShowMacroAttachment": false;
  "ShowManyDynamicContents": false;
  "ShowManyEmailNotifications": false;
  "ShowManyJobStatuses": false;
  "ShowManyOrganizations": false;
  "ShowManyTicketFields": false;
  "ShowManyTicketForms": false;
  "ShowManyTicketFormStatuses": false;
  "ShowManyUserFields": false;
  "ShowManyUsers": false;
  "ShowMonitoredTwitterHandle": false;
  "ShowOrganization": false;
  "ShowOrganizationField": false;
  "ShowOrganizationMembershipById": false;
  "ShowOrganizationMembershipByUserId": false;
  "ShowOrganizationMerge": false;
  "ShowOrganizationSubscription": false;
  "ShowPermissionPolicy": false;
  "ShowQueueById": false;
  "ShowRequest": false;
  "ShowSatisfactionRating": false;
  "ShowSatisfactionRatings": false;
  "ShowSecuritySettings": false;
  "ShowSession": false;
  "ShowSharingAgreement": false;
  "ShowSLAPolicy": false;
  "ShowSupportAddress": false;
  "ShowSuspendedTickets": false;
  "ShowTarget": false;
  "ShowTargetFailure": false;
  "ShowTaskList": false;
  "ShowTaskListTemplate": false;
  "ShowTicket": false;
  "ShowTicketAfterChanges": false;
  "ShowTicketAudit": false;
  "ShowTicketByMessagingConversationId": false;
  "ShowTicketfield": false;
  "ShowTicketFieldOption": false;
  "ShowTicketForm": false;
  "ShowTicketMetrics": false;
  "ShowTicketMetricsByTicket": false;
  "ShowToken": false;
  "ShowTriggerCategoryById": false;
  "ShowUser": false;
  "ShowUserBrandAgentById": false;
  "ShowUserComplianceDeletionStatuses": false;
  "ShowUserField": false;
  "ShowUserFieldOption": false;
  "ShowUserGroupMembershipById": false;
  "ShowUserIdentity": false;
  "ShowUserRelated": false;
  "ShowView": false;
  "ShowWorkspace": false;
  "SuspendedTicketsAttachments": false;
  "TicketBulkImport": false;
  "TicketFormTicketFormStatuses": false;
  "TicketImport": false;
  "TicketRelatedInformation": false;
  "TicketsCreateMany": false;
  "TicketsShowMany": false;
  "TicketsUpdateMany": true;
  "TriggerRevision": false;
  "UnassignOrganization": false;
  "UpdateAccessRule": true;
  "UpdateAccountSettings": false;
  "UpdateAttachment": false;
  "UpdateAttribute": false;
  "UpdateAttributeValue": false;
  "UpdateAutomation": false;
  "UpdateBrand": false;
  "UpdateBrandLogo": false;
  "UpdateClient": false;
  "UpdateCurrentUserSettings": true;
  "UpdateCustomObject": false;
  "UpdateCustomObjectField": false;
  "UpdateCustomObjectRecord": false;
  "UpdateCustomObjectRecordAttachment": false;
  "UpdateCustomRoleById": false;
  "UpdateCustomStatus": false;
  "UpdateDeletionSchedule": true;
  "UpdateDynamicContentItem": false;
  "UpdateDynamicContentVariant": false;
  "UpdateGroup": false;
  "UpdateGroupSLAPolicy": false;
  "UpdateItamAsset": false;
  "UpdateItamAssetType": false;
  "UpdateItamAssetTypeField": false;
  "UpdateItamLocation": false;
  "UpdateMacro": false;
  "UpdateManyAutomations": false;
  "UpdateManyDynamicContentVariants": false;
  "UpdateManyMacros": false;
  "UpdateManyObjectTriggers": true;
  "UpdateManyOrganizations": false;
  "UpdateManyTriggers": true;
  "UpdateManyUsers": true;
  "UpdateManyViews": false;
  "UpdateObjectTrigger": true;
  "UpdateOrganization": false;
  "UpdateOrganizationField": false;
  "UpdatePermissionPolicy": true;
  "UpdateQueue": false;
  "UpdateRequest": false;
  "UpdateResourceCollection": false;
  "UpdateSharingAgreement": false;
  "UpdateSLAPolicy": false;
  "UpdateSupportAddress": false;
  "UpdateTarget": false;
  "UpdateTaskListTemplate": false;
  "UpdateTicket": false;
  "UpdateTicketField": false;
  "UpdateTicketForm": false;
  "UpdateTicketFormStatusById": false;
  "UpdateTicketFormStatuses": false;
  "UpdateTrigger": true;
  "UpdateTriggerCategory": true;
  "UpdateUser": true;
  "UpdateUserField": false;
  "UpdateUserIdentity": false;
  "UpdateView": false;
  "UpdateWorkspace": false;
  "UploadFiles": false;
  "UpsertCustomObjectRecordByExternalIdOrName": false;
  "ValidateToken": false;
  "VerifySubdomainAvailability": false;
  "VerifySupportAddressForwarding": false;
  "VerifyUserIdentity": false;
}

export interface ZendeskFullApiOperationResponseMap {
  "AddOrganizationTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "AutocompleteCustomObjectRecordSearch": ZendeskFullApiSchemaCustomObjectRecordsResponse;
  "AutocompleteOrganizations": ZendeskFullApiSchemaOrganizationsResponse;
  "AutocompleteProblems": ZendeskFullApiSchemaListTicketProblemsResponse;
  "AutocompleteTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "AutocompleteTagsPost": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "AutocompleteUsers": ZendeskFullApiSchemaUsersResponse;
  "AutocompleteUsersPost": ZendeskFullApiSchemaUsersResponse;
  "BatchOperateTriggerCategories": ZendeskFullApiSchemaBatchJobResponse;
  "BulkDeleteAutomations": void;
  "BulkDeleteSessionsByUserId": void;
  "BulkDeleteTickets": ZendeskFullApiSchemaJobStatusResponse;
  "BulkDeleteViews": void;
  "BulkPermanentlyDeleteTickets": ZendeskFullApiSchemaJobStatusResponse;
  "BulkRestoreDeletedTickets": string;
  "BulkSetAgentAttributeValuesJob": ZendeskFullApiSchemaJobStatusResponse;
  "BulkUpdateDefaultCustomStatus": ZendeskFullApiSchemaBulkUpdateDefaultCustomStatusResponse;
  "ChangeOwnPassword": string;
  "CheckHostMappingValidity": ZendeskFullApiSchemaHostMappingObject;
  "CheckHostMappingValidityForExistingBrand": ZendeskFullApiSchemaHostMappingObject;
  "ClientGenerateSecret": ZendeskFullApiSchemaOauthClientResponse;
  "CloneTicketForm": ZendeskFullApiSchemaTicketFormResponse;
  "CountActivities": ZendeskFullApiSchemaActivitiesCountResponse;
  "CountAuditsForTicket": ZendeskFullApiSchemaTicketAuditsCountResponse;
  "CountCustomObjectRecords": {
  count?: {
  readonly [key: string]: {
  refreshed_at?: string;
  value?: number;
} | undefined;
};
};
  "CountDeletedUsers": ZendeskFullApiSchemaCountResponse;
  "CountGroups": ZendeskFullApiSchemaGroupsCountObject;
  "CountGroupUsers": ZendeskFullApiSchemaCountResponse;
  "CountOrganizations": ZendeskFullApiSchemaCountOrganizationResponse;
  "CountOrganizationTickets": {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};
  "CountOrganizationUsers": ZendeskFullApiSchemaCountResponse;
  "CountSatisfactionRatings": ZendeskFullApiSchemaSatisfactionRatingsCountResponse;
  "CountSearchResults": ZendeskFullApiSchemaSearchCountResponse;
  "CountTags": ZendeskFullApiSchemaTagCountResponse;
  "CountTicketComments": ZendeskFullApiSchemaTicketCommentsCountResponse;
  "CountTicketFields": ZendeskFullApiSchemaTicketFieldCountResponse;
  "CountTickets": {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};
  "CountUserAssignedTickets": {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};
  "CountUserCCDTickets": {
  count?: {
  refreshed_at?: string;
  value?: number;
};
};
  "CountUserGroups": ZendeskFullApiSchemaGroupsCountObject;
  "CountUserOrganizations": ZendeskFullApiSchemaCountOrganizationResponse;
  "CountUsers": ZendeskFullApiSchemaCountResponse;
  "CountViews": ZendeskFullApiSchemaViewsCountResponse;
  "CreateAccessRule": ZendeskFullApiSchemaAccessRuleResponse;
  "CreateApprovalRequest": ZendeskFullApiSchemaApprovalRequestSimpleResponse;
  "CreateAssociatedMacroAttachment": ZendeskFullApiSchemaMacroAttachmentResponse;
  "CreateAttribute": ZendeskFullApiSchemaSkillBasedRoutingAttributeResponse;
  "CreateAttributeValue": ZendeskFullApiSchemaSkillBasedRoutingAttributeValueResponse;
  "CreateAutomation": ZendeskFullApiSchemaAutomationResponse;
  "CreateBookmark": ZendeskFullApiSchemaBookmarkResponse;
  "CreateBrand": ZendeskFullApiSchemaBrandResponse;
  "CreateCustomObject": ZendeskFullApiSchemaCustomObjectResponse;
  "CreateCustomObjectField": ZendeskFullApiSchemaCustomObjectFieldResponse;
  "CreateCustomObjectRecord": ZendeskFullApiSchemaCustomObjectRecordResponse;
  "CreateCustomObjectRecordAttachment": ZendeskFullApiSchemaCustomObjectRecordAttachmentResponse;
  "CreateCustomRole": ZendeskFullApiSchemaCustomRoleResponse;
  "CreateCustomStatus": ZendeskFullApiSchemaCustomStatusResponse;
  "CreateDeletionSchedule": {
  deletion_schedule?: ZendeskFullApiSchemaDeletionSchedule;
};
  "CreateDynamicContent": ZendeskFullApiSchemaDynamicContentResponse;
  "CreateDynamicContentVariant": ZendeskFullApiSchemaDynamicContentVariantResponse;
  "CreateEndUserIdentity": ZendeskFullApiSchemaUserIdentityResponse;
  "CreateGroup": ZendeskFullApiSchemaGroupResponse;
  "CreateGroupMembership": ZendeskFullApiSchemaGroupMembershipResponse;
  "CreateGroupSLAPolicy": ZendeskFullApiSchemaGroupSLAPolicyResponse;
  "CreateItamAsset": ZendeskFullApiSchemaItamAssetResponse;
  "CreateItamAssetType": ZendeskFullApiSchemaItamAssetTypeResponse;
  "CreateItamAssetTypeField": ZendeskFullApiSchemaItamAssetFieldResponse;
  "CreateItamLocation": ZendeskFullApiSchemaItamAssetLocationResponse;
  "CreateMacro": {
  macro?: ZendeskFullApiSchemaMacroObject;
};
  "CreateMacroAttachment": ZendeskFullApiSchemaMacroAttachmentResponse;
  "CreateManyDynamicContentVariants": ZendeskFullApiSchemaDynamicContentVariantsResponse;
  "CreateManyOrganizationMemberships": ZendeskFullApiSchemaJobStatusResponse;
  "CreateManyOrganizations": ZendeskFullApiSchemaJobStatusResponse;
  "CreateManyUsers": ZendeskFullApiSchemaJobStatusResponse;
  "CreateOAuthClient": ZendeskFullApiSchemaOauthClientResponse;
  "CreateOAuthToken": ZendeskFullApiSchemaOAuthTokenResponse;
  "CreateObjectTrigger": ZendeskFullApiSchemaObjectTriggerResponse;
  "CreateOrganization": ZendeskFullApiSchemaOrganizationResponse;
  "CreateOrganizationField": ZendeskFullApiSchemaOrganizationFieldResponse;
  "CreateOrganizationMembership": ZendeskFullApiSchemaOrganizationMembershipResponse;
  "CreateOrganizationMerge": ZendeskFullApiSchemaOrganizationMergeResponse;
  "CreateOrganizationSubscription": ZendeskFullApiSchemaOrganizationSubscriptionResponse;
  "CreateOrUpdateManyUsers": ZendeskFullApiSchemaJobStatusResponse;
  "CreateOrUpdateOrganization": ZendeskFullApiSchemaOrganizationResponse;
  "CreateOrUpdateTicketFieldOption": ZendeskFullApiSchemaCustomFieldOptionResponse;
  "CreateOrUpdateUser": ZendeskFullApiSchemaUserResponse;
  "CreateOrUpdateUserFieldOption": ZendeskFullApiSchemaCustomFieldOptionResponse;
  "CreateQueue": ZendeskFullApiSchemaQueueResponse;
  "CreateRequest": ZendeskFullApiSchemaRequestResponse;
  "CreateResourceCollection": ZendeskFullApiSchemaJobStatusResponse;
  "CreateSharingAgreement": ZendeskFullApiSchemaSharingAgreementResponse;
  "CreateSLAPolicy": ZendeskFullApiSchemaSLAPolicyResponse;
  "CreateSupportAddress": ZendeskFullApiSchemaSupportAddressResponse;
  "CreateTarget": ZendeskFullApiSchemaTargetResponse;
  "CreateTaskList": ZendeskFullApiSchemaTaskListByTicketIdResponse;
  "CreateTaskListTemplate": ZendeskFullApiSchemaTaskListTemplateResponse;
  "CreateTicket": ZendeskFullApiSchemaTicketResponse;
  "CreateTicketContentPin": ZendeskFullApiSchemaTicketContentPin;
  "CreateTicketField": ZendeskFullApiSchemaTicketFieldResponse;
  "CreateTicketForm": ZendeskFullApiSchemaTicketFormResponse;
  "CreateTicketFormStatuses": ZendeskFullApiSchemaTicketFormStatusesResponse;
  "CreateTicketFormStatusesForCustomStatus": ZendeskFullApiSchemaTicketFormStatusesResponse;
  "CreateTicketFromTweet": string;
  "CreateTicketOrVoicemailTicket": ZendeskFullApiSchemaTicketResponse;
  "CreateTicketSatisfactionRating": ZendeskFullApiSchemaSatisfactionRatingResponse;
  "CreateTokenForGrantType": ZendeskFullApiSchemaOAuthTokenForGrantTypesObject;
  "CreateTrialAccount": ZendeskFullApiSchemaTrialAccountResponse;
  "CreateTrigger": ZendeskFullApiSchemaTriggerResponse;
  "CreateTriggerCategory": ZendeskFullApiSchemaTriggerCategoryResponse;
  "CreateUser": ZendeskFullApiSchemaUserResponse;
  "CreateUserField": ZendeskFullApiSchemaUserFieldResponse;
  "CreateUserGroupMembership": ZendeskFullApiSchemaGroupMembershipResponse;
  "CreateUserIdentity": ZendeskFullApiSchemaUserIdentityResponse;
  "CreateUserOrganizationMembership": ZendeskFullApiSchemaOrganizationMembershipResponse;
  "CreateView": ZendeskFullApiSchemaViewResponse;
  "CreateWorkspace": {
  workspace?: ZendeskFullApiSchemaWorkspaceObject;
};
  "CustomObjectFieldsLimit": ZendeskFullApiSchemaCustomObjectLimitsResponse;
  "CustomObjectRecordBulkJobs": ZendeskFullApiSchemaCustomObjectRecordsJobsResponse;
  "CustomObjectRecordsLimit": ZendeskFullApiSchemaCustomObjectLimitsResponse;
  "CustomObjectsLimit": ZendeskFullApiSchemaCustomObjectLimitsResponse;
  "DeleteAccessRule": void;
  "DeleteAttachment": void;
  "DeleteAttribute": void;
  "DeleteAttributeValue": void;
  "DeleteAuthenticatedSession": void;
  "DeleteAutomation": void;
  "DeleteBookmark": void;
  "DeleteBrand": void;
  "DeleteBrandAgentById": void;
  "DeleteBrandLogo": void;
  "DeleteClient": void;
  "DeleteCustomObject": void;
  "DeleteCustomObjectField": void;
  "DeleteCustomObjectRecord": void;
  "DeleteCustomObjectRecordAttachment": {
  error?: string;
};
  "DeleteCustomObjectRecordByExternalIdOrName": void;
  "DeleteCustomRoleById": void;
  "DeleteCustomStatus": void;
  "DeleteDeletionSchedule": void;
  "DeleteDynamicContentItem": void;
  "DeleteDynamicContentVariant": void;
  "DeleteEndUserIdentity": void;
  "DeleteGroup": void;
  "DeleteGroupMembership": void;
  "DeleteGroupSLAPolicy": void;
  "DeleteItamAsset": void;
  "DeleteItamAssetType": void;
  "DeleteItamAssetTypeField": void;
  "DeleteItamLocation": void;
  "DeleteMacro": void;
  "DeleteManyMacros": void;
  "DeleteManyObjectTriggers": void;
  "DeleteManyOrganizationMemberships": ZendeskFullApiSchemaJobStatusResponse;
  "DeleteManyOrganizations": ZendeskFullApiSchemaJobStatusResponse;
  "DeleteManyTriggers": void;
  "DeleteObjectTrigger": void;
  "DeleteOrganization": void;
  "DeleteOrganizationField": void;
  "DeleteOrganizationMembership": void;
  "DeleteOrganizationSubscription": void;
  "DeleteQueue": void;
  "DeleteRecipientAddress": void;
  "DeleteResourceCollection": ZendeskFullApiSchemaJobStatusResponse;
  "DeleteSession": void;
  "DeleteSharingAgreement": void;
  "DeleteSLAPolicy": void;
  "DeleteSuspendedTicket": void;
  "DeleteSuspendedTickets": void;
  "DeleteTagsTicket": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "DeleteTarget": void;
  "DeleteTaskListTemplate": void;
  "DeleteTicket": void;
  "DeleteTicketContentPin": ZendeskFullApiSchemaTicketContentPin;
  "DeleteTicketField": void;
  "DeleteTicketFieldOption": void;
  "DeleteTicketForm": void;
  "DeleteTicketFormStatusById": void;
  "DeleteTicketFormStatuses": void;
  "DeleteTicketPermanently": ZendeskFullApiSchemaJobStatusResponse;
  "DeleteTrigger": void;
  "DeleteTriggerCategory": ZendeskFullApiSchemaErrors;
  "DeleteUpload": void;
  "DeleteUser": ZendeskFullApiSchemaUserResponse;
  "DeleteUserField": void;
  "DeleteUserFieldOption": void;
  "DeleteUserGroupMembership": void;
  "DeleteUserIdentity": void;
  "DeleteUserOrganizationMembership": void;
  "DeleteUserTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "DeleteView": void;
  "DeleteWorkspace": void;
  "DestroyManyUsers": ZendeskFullApiSchemaJobStatusResponse;
  "DestroyManyWorkspaces": string;
  "DetectBestLocale": ZendeskFullApiSchemaLocaleResponse;
  "DownloadCustomObjectRecordAttachment": string;
  "DynamicContentListVariants": ZendeskFullApiSchemaDynamicContentVariantsResponse;
  "ExecuteView": ZendeskFullApiSchemaViewResponse;
  "ExportAuditLogs": string;
  "ExportSearchResults": ZendeskFullApiSchemaSearchExportResponse;
  "ExportSuspendedTickets": ZendeskFullApiSchemaSuspendedTicketsExportResponse;
  "ExportView": ZendeskFullApiSchemaViewExportResponse;
  "FilteredSearchCustomObjectRecords": ZendeskFullApiSchemaCustomObjectRecordsResponse;
  "FilteredSearchItamAssets": ZendeskFullApiSchemaItamAssetsResponse;
  "GetDeletionSchedule": {
  deletion_schedule?: ZendeskFullApiSchemaDeletionSchedule;
};
  "GetObjectTrigger": ZendeskFullApiSchemaObjectTriggerResponse;
  "GetRelationshipFilterDefinitions": ZendeskFullApiSchemaRelationshipFilterDefinitionResponse;
  "GetSourcesByTarget": ZendeskFullApiSchemaReverseLookupResponse;
  "GetTasksByTaskListTemplateId": ZendeskFullApiSchemaTasksByTaskListTemplateIdResponse;
  "GettingTwicketStatus": ZendeskFullApiSchemaTwitterChannelTwicketStatusResponse;
  "GetTrigger": ZendeskFullApiSchemaTriggerResponse;
  "GetUserEntitlementsFull": ZendeskFullApiSchemaUserEntitlementsFullResponse;
  "GetUserPasswordRequirements": ZendeskFullApiSchemaUserPasswordRequirementsResponse;
  "GetViewCount": ZendeskFullApiSchemaViewCountResponse;
  "GetViewCounts": ZendeskFullApiSchemaViewCountsResponse;
  "GlobalOAuthClientsTokenSummary": ZendeskFullApiSchemaGlobalClientsTokenSummaryResponse;
  "GroupMembershipBulkCreate": ZendeskFullApiSchemaJobStatusResponse;
  "GroupMembershipBulkDelete": ZendeskFullApiSchemaJobStatusResponse;
  "GroupMembershipSetDefault": ZendeskFullApiSchemaGroupMembershipsResponse;
  "IncrementalCustomObjectRecordExportCursor": ZendeskFullApiSchemaIncrementalCustomObjectRecordsResponse;
  "IncrementalOrganizationExport": ZendeskFullApiSchemaExportIncrementalOrganizationsResponse;
  "IncrementalSampleExport": ZendeskFullApiSchemaTimeBasedExportIncrementalTicketsResponse;
  "IncrementalSkilBasedRoutingAttributesExport": ZendeskFullApiSchemaIncrementalSkillBasedRouting;
  "IncrementalSkilBasedRoutingAttributeValuesExport": ZendeskFullApiSchemaIncrementalSkillBasedRouting;
  "IncrementalSkilBasedRoutingInstanceValuesExport": ZendeskFullApiSchemaIncrementalSkillBasedRouting;
  "IncrementalTicketEvents": ZendeskFullApiSchemaExportIncrementalTicketEventsResponse;
  "IncrementalTicketExportCursor": ZendeskFullApiSchemaCursorBasedExportIncrementalTicketsResponse;
  "IncrementalTicketExportTime": ZendeskFullApiSchemaTimeBasedExportIncrementalTicketsResponse;
  "IncrementalUserExportCursor": ZendeskFullApiSchemaCursorBasedExportIncrementalUsersResponse;
  "IncrementalUserExportTime": ZendeskFullApiSchemaTimeBasedExportIncrementalUsersResponse;
  "ItamAssetBulkJobs": ZendeskFullApiSchemaItamAssetBulkJobResponse;
  "ListAccessRuleDefinitions": ZendeskFullApiSchemaAccessRuleDefinitionsResponse;
  "ListAccessRules": ZendeskFullApiSchemaAccessRulesResponse;
  "ListAccountAttributes": ZendeskFullApiSchemaSkillBasedRoutingAttributesResponse;
  "ListActiveAutomations": ZendeskFullApiSchemaAutomationsResponse;
  "ListActiveMacros": ZendeskFullApiSchemaMacrosResponse;
  "ListActiveObjectTriggers": ZendeskFullApiSchemaObjectTriggersResponse;
  "ListActiveTriggers": ZendeskFullApiSchemaTriggersResponse;
  "ListActiveViews": ZendeskFullApiSchemaViewsResponse;
  "ListActivities": ZendeskFullApiSchemaActivitiesResponse;
  "ListAGentAttributeValues": ZendeskFullApiSchemaSkillBasedRoutingAttributeValuesResponse;
  "ListApprovalRequests": ZendeskFullApiSchemaApprovalRequestsListResponse;
  "ListAssignableGroupMemberships": ZendeskFullApiSchemaGroupMembershipsResponse;
  "ListAssignableGroupMembershipsByGroup": ZendeskFullApiSchemaGroupMembershipsResponse;
  "ListAssignableGroups": ZendeskFullApiSchemaGroupsResponse;
  "ListAttributeValues": ZendeskFullApiSchemaSkillBasedRoutingAttributeValuesWithoutPriorityResponse;
  "ListAuditLogs": ZendeskFullApiSchemaAuditLogsResponse;
  "ListAuditsForTicket": ZendeskFullApiSchemaTicketAuditsResponseNoneCursor;
  "ListAutomations": ZendeskFullApiSchemaAutomationsResponse;
  "ListAvailablePublicLocales": ZendeskFullApiSchemaLocalesResponse;
  "ListBookmarks": ZendeskFullApiSchemaBookmarksResponse;
  "ListBrandAgents": ZendeskFullApiSchemaBrandAgentsResponse;
  "ListBrandAgentsByBrand": ZendeskFullApiSchemaBrandAgentsResponse;
  "ListBrands": ZendeskFullApiSchemaBrandsResponse;
  "ListCCDRequests": ZendeskFullApiSchemaRequestsResponse;
  "ListComments": ZendeskFullApiSchemaTicketCommentsResponse;
  "ListCompactViews": ZendeskFullApiSchemaViewsResponse;
  "ListConversationLogForTicket": ZendeskFullApiSchemaConversationLogResponse;
  "ListCurrentUserOAuthClients": ZendeskFullApiSchemaOAuthClientsResponse;
  "ListCustomObjectFields": ZendeskFullApiSchemaCustomObjectFieldsResponse;
  "ListCustomObjectRecordAttachments": ZendeskFullApiSchemaCustomObjectRecordAttachmentsResponse;
  "ListCustomObjectRecords": ZendeskFullApiSchemaCustomObjectRecordsResponse;
  "ListCustomObjects": ZendeskFullApiSchemaCustomObjectsResponse;
  "ListCustomRoles": ZendeskFullApiSchemaCustomRolesResponse;
  "ListCustomStatuses": ZendeskFullApiSchemaCustomStatusesResponse;
  "ListDeletedTickets": ZendeskFullApiSchemaListDeletedTicketsResponse;
  "ListDeletedUsers": ZendeskFullApiSchemaDeletedUsersResponse;
  "ListDeletionSchedules": {
  deletion_schedules?: ReadonlyArray<ZendeskFullApiSchemaDeletionSchedule>;
};
  "ListDynamicContents": ZendeskFullApiSchemaDynamicContentsResponse;
  "ListEmailNotifications": ZendeskFullApiSchemaEmailNotificationsResponse;
  "ListEndUserIdentities": ZendeskFullApiSchemaUserIdentitiesResponse;
  "ListGlobalOAuthClients": ZendeskFullApiSchemaGlobalClientsResponse;
  "ListGroupMemberships": ZendeskFullApiSchemaGroupMembershipsResponse;
  "ListGroupMembershipsByGroup": ZendeskFullApiSchemaGroupMembershipsResponse;
  "ListGroups": ZendeskFullApiSchemaGroupsResponse;
  "ListGroupSLAPolicies": ZendeskFullApiSchemaGroupSLAPoliciesResponse;
  "ListGroupUsers": ZendeskFullApiSchemaUsersResponse;
  "ListItamAssets": ZendeskFullApiSchemaItamAssetsResponse;
  "ListItamAssetTypeFields": ZendeskFullApiSchemaItamAssetTypeFieldsResponse;
  "ListItamAssetTypes": ZendeskFullApiSchemaItamAssetTypesResponse;
  "ListItamLocations": ZendeskFullApiSchemaItamAssetLocationsResponse;
  "ListItamStatuses": ZendeskFullApiSchemaItamAssetStatusesResponse;
  "ListJobStatuses": ZendeskFullApiSchemaJobStatusesResponse;
  "ListLocales": ZendeskFullApiSchemaLocalesResponse;
  "ListLocalesForAgent": ZendeskFullApiSchemaLocalesResponse;
  "ListMacroActionDefinitions": {
  definitions?: {
  actions?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
};
};
  "ListMacroAttachments": ZendeskFullApiSchemaMacroAttachmentsResponse;
  "ListMacroCategories": ZendeskFullApiSchemaMacroCategoriesResponse;
  "ListMacros": ZendeskFullApiSchemaMacrosResponse;
  "ListMacrosActions": {
  actions?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
};
  "ListManyAgentsAttributeValues": ZendeskFullApiSchemaManySkillBasedRoutingAttributeValuesResponse;
  "ListMonitoredTwitterHandles": ZendeskFullApiSchemaTwitterChannelsResponse;
  "ListOAuthClients": ZendeskFullApiSchemaOAuthClientsResponse;
  "ListOAuthTokens": ZendeskFullApiSchemaOAuthTokensResponse;
  "ListObjectTriggers": ZendeskFullApiSchemaObjectTriggersResponse;
  "ListObjectTriggersDefinitions": ZendeskFullApiSchemaObjectTriggerDefinitionResponse;
  "ListOpenRequests": ZendeskFullApiSchemaRequestsResponse;
  "ListOrganizationFields": ZendeskFullApiSchemaOrganizationFieldsResponse;
  "ListOrganizationMemberships": ZendeskFullApiSchemaOrganizationMembershipsResponse;
  "ListOrganizationMembershipsByOrganization": ZendeskFullApiSchemaOrganizationMembershipsResponse;
  "ListOrganizationMerges": ZendeskFullApiSchemaOrganizationMergeListResponse;
  "ListOrganizationRequests": ZendeskFullApiSchemaRequestsResponse;
  "ListOrganizations": ZendeskFullApiSchemaOrganizationsResponse;
  "ListOrganizationSubscriptions": ZendeskFullApiSchemaOrganizationSubscriptionsResponse;
  "ListOrganizationSubscriptionsByOrganization": ZendeskFullApiSchemaOrganizationSubscriptionsResponse;
  "ListOrganizationTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "ListOrganizationTickets": ZendeskFullApiSchemaTicketsResponse;
  "ListOrganizationUsers": ZendeskFullApiSchemaUsersResponse;
  "ListPermissionPolicies": ZendeskFullApiSchemaPermissionPoliciesResponse;
  "ListQueueDefinitions": ZendeskFullApiSchemaDefinitionsResponse;
  "ListQueues": ZendeskFullApiSchemaQueuesResponse;
  "ListRecentTickets": ZendeskFullApiSchemaTicketsResponse;
  "ListRemoteAuthentications": ZendeskFullApiSchemaRemoteAuthenticationsResponse;
  "ListRequests": ZendeskFullApiSchemaRequestsResponse;
  "ListResourceCollections": ZendeskFullApiSchemaResourceCollectionsResponse;
  "ListResourceTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "ListRoutingAttributeDefinitions": ZendeskFullApiSchemaSkillBasedRoutingAttributeDefinitions;
  "ListSatisfactionRatingReasons": ZendeskFullApiSchemaSatisfactionReasonsResponse;
  "ListSatisfactionRatings": ZendeskFullApiSchemaSatisfactionRatingsResponse;
  "ListSearchResults": ZendeskFullApiSchemaSearchResponse;
  "ListSessions": ZendeskFullApiSchemaSessionsResponse;
  "ListSharingAgreements": ZendeskFullApiSchemaSharingAgreementsResponse;
  "ListSkips": ZendeskFullApiSchemaTicketSkipsResponse;
  "ListSLAPolicies": ZendeskFullApiSchemaSLAPoliciesResponse;
  "ListSolvedRequests": ZendeskFullApiSchemaRequestsResponse;
  "ListSupportAddresses": ZendeskFullApiSchemaSupportAddressesResponse;
  "ListSuspendedTickets": ZendeskFullApiSchemaSuspendedTicketsResponse;
  "ListTags": ZendeskFullApiSchemaTagsResponse;
  "ListTargetFailures": ZendeskFullApiSchemaTargetFailuresResponse;
  "ListTargets": ZendeskFullApiSchemaTargetsResponse;
  "ListTaskListTemplates": ZendeskFullApiSchemaTaskListTemplatesResponse;
  "ListTicketAttributeValues": ZendeskFullApiSchemaSkillBasedRoutingAttributeValuesResponse;
  "ListTicketAudits": ZendeskFullApiSchemaTicketAuditsResponse;
  "ListTicketCollaborators": ZendeskFullApiSchemaListTicketCollaboratorsResponse;
  "ListTicketComments": ZendeskFullApiSchemaTicketCommentsResponse;
  "ListTicketContentPins": {
  count?: number;
  ticket_content_pins?: ReadonlyArray<ZendeskFullApiSchemaTicketContentPin>;
};
  "ListTicketEmailCCs": ZendeskFullApiSchemaListTicketEmailCCsResponse;
  "ListTicketFieldOptions": ZendeskFullApiSchemaCustomFieldOptionsResponse;
  "ListTicketFields": ZendeskFullApiSchemaTicketFieldsResponse;
  "ListTicketFollowers": ZendeskFullApiSchemaListTicketFollowersResponse;
  "ListTicketForms": ZendeskFullApiSchemaTicketFormsResponse;
  "ListTicketFormStatuses": ZendeskFullApiSchemaTicketFormStatusesResponse;
  "ListTicketIncidents": ZendeskFullApiSchemaListTicketIncidentsResponse;
  "ListTicketMetricEvents": ZendeskFullApiSchemaTicketMetricEventsResponse;
  "ListTicketMetrics": ZendeskFullApiSchemaTicketMetricsResponse;
  "ListTicketProblems": ZendeskFullApiSchemaListTicketProblemsResponse;
  "ListTickets": ZendeskFullApiSchemaTicketsResponse;
  "ListTicketsFromView": ZendeskFullApiSchemaTicketsResponse;
  "ListTicketsFullfilledByUser": ZendeskFullApiSchemaSkillBasedRoutingTicketFulfilledResponse;
  "ListTicketSkips": ZendeskFullApiSchemaTicketSkipsResponse;
  "ListTicketSkipsByTicket": ZendeskFullApiSchemaTicketSkipsResponse;
  "ListTriggerActionConditionDefinitions": ZendeskFullApiSchemaTriggerDefinitionResponse;
  "ListTriggerCategories": (ZendeskFullApiSchemaTriggerCategoriesResponse & ZendeskFullApiSchemaPagination);
  "ListTriggerRevisions": ZendeskFullApiSchemaTriggerRevisionsResponse;
  "ListTriggers": ZendeskFullApiSchemaTriggersResponse;
  "ListUserAssignedTickets": ZendeskFullApiSchemaTicketsResponse;
  "ListUserBrandAgents": ZendeskFullApiSchemaBrandAgentsResponse;
  "ListUserCCDTickets": ZendeskFullApiSchemaTicketsResponse;
  "ListUserFieldOptions": ZendeskFullApiSchemaCustomFieldOptionsResponse;
  "ListUserFields": ZendeskFullApiSchemaUserFieldsResponse;
  "ListUserFollowedTickets": ZendeskFullApiSchemaTicketsResponse;
  "ListUserGroupMemberships": ZendeskFullApiSchemaGroupMembershipsResponse;
  "ListUserGroups": ZendeskFullApiSchemaGroupsResponse;
  "ListUserIdentities": ZendeskFullApiSchemaUserIdentitiesResponse;
  "ListUserOrganizationMemberships": ZendeskFullApiSchemaOrganizationMembershipsResponse;
  "ListUserOrganizations": ZendeskFullApiSchemaOrganizationsResponse;
  "ListUserOrganizationSubscriptions": ZendeskFullApiSchemaOrganizationSubscriptionsResponse;
  "ListUserRequestedTickets": ZendeskFullApiSchemaTicketsResponse;
  "ListUserRequests": ZendeskFullApiSchemaRequestsResponse;
  "ListUsers": ZendeskFullApiSchemaUsersResponse;
  "ListUserSessions": ZendeskFullApiSchemaSessionsResponse;
  "ListUserTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "ListViewDefinitions": {
  definitions?: {
  conditions_all?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  conditions_any?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  groupables?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  output?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
  sortables?: ReadonlyArray<{
  readonly [key: string]: ZendeskFullApiSchemaJsonValue | undefined;
}>;
};
};
  "ListViews": ZendeskFullApiSchemaViewsResponse;
  "ListViewsById": ZendeskFullApiSchemaViewsResponse;
  "ListWorkspaces": ZendeskFullApiSchemaWorkspaceResponse;
  "LogoutManyUsers": string;
  "MakeEndUserIdentityPrimary": ZendeskFullApiSchemaUserIdentitiesResponse;
  "MakeTicketCommentPrivate": string;
  "MakeTicketCommentPrivateFromAudits": string;
  "MakeUserIdentityPrimary": ZendeskFullApiSchemaUserIdentitiesResponse;
  "MarkManyTicketsAsSpam": ZendeskFullApiSchemaJobStatusResponse;
  "MarkTicketAsSpamAndSuspendRequester": string;
  "MergeEndUsers": ZendeskFullApiSchemaUserResponse;
  "MergeTicketsIntoTargetTicket": ZendeskFullApiSchemaJobStatusResponse;
  "OpenTicketInAgentBrowser": string;
  "OpenUsersProfileInAgentBrowser": string;
  "OrganizationRelated": ZendeskFullApiSchemaOrganizationsRelatedResponse;
  "PermanentlyDeleteUser": ZendeskFullApiSchemaDeletedUserResponse;
  "PreviewCount": ZendeskFullApiSchemaViewCountResponse;
  "PreviewViews": ZendeskFullApiSchemaViewResponse;
  "PushContentToSupport": ZendeskFullApiSchemaChannelFrameworkPushResultsResponse;
  "PushNotificationDevices": string;
  "PutTagsTicket": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "PutUserTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "RecordNewSkip": ZendeskFullApiSchemaTicketSkipCreation;
  "RecoverSuspendedTicket": ZendeskFullApiSchemaRecoverSuspendedTicketResponse;
  "RecoverSuspendedTickets": ZendeskFullApiSchemaRecoverSuspendedTicketsResponse;
  "RedactChatComment": ZendeskFullApiSchemaTicketChatCommentRedactionResponse;
  "RedactChatCommentAttachment": ZendeskFullApiSchemaTicketChatCommentRedactionResponse;
  "RedactCommentAttachment": ZendeskFullApiSchemaAttachmentResponse;
  "RedactStringInComment": ZendeskFullApiSchemaTicketCommentResponse;
  "RedactTicketCommentInAgentWorkspace": ZendeskFullApiSchemaTicketCommentResponse;
  "RemoveOrganizationTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "RenewCurrentSession": ZendeskFullApiSchemaRenewSessionResponse;
  "ReorderCustomObjectFields": string;
  "ReorderGroupSLAPolicies": string;
  "ReorderOrganizationField": string;
  "ReorderQueues": void;
  "ReorderSLAPolicies": string;
  "ReorderTicketFields": string;
  "ReorderTicketForms": ZendeskFullApiSchemaTicketFormsResponse;
  "ReorderTriggers": ZendeskFullApiSchemaTriggerResponse;
  "ReorderUserField": string;
  "ReorderWorkspaces": string;
  "ReportChannelbackError": string;
  "RequestEndUserVerification": string;
  "RequestUserCreate": string;
  "RequestUserVerification": string;
  "RestoreDeletedTicket": string;
  "RetrieveGroupSLAPolicyFilterDefinitionItems": ZendeskFullApiSchemaGroupSLAPolicyFilterDefinitionResponse;
  "RetrieveResourceCollection": ZendeskFullApiSchemaResourceCollectionResponse;
  "RetrieveSLAPolicyFilterDefinitionItems": ZendeskFullApiSchemaSLAPolicyFilterDefinitionResponse;
  "RevokeCurrentOAuthToken": void;
  "RevokeOAuthToken": void;
  "SearchAutomations": ZendeskFullApiSchemaAutomationsResponse;
  "SearchCustomObjectRecords": ZendeskFullApiSchemaCustomObjectRecordsResponse;
  "SearchItamAssets": ZendeskFullApiSchemaItamAssetsResponse;
  "SearchMacro": ZendeskFullApiSchemaMacrosResponse;
  "SearchObjectTriggers": ZendeskFullApiSchemaObjectTriggersResponse;
  "SearchOrganizations": ZendeskFullApiSchemaOrganizationsResponse;
  "SearchRequests": ZendeskFullApiSchemaRequestsResponse;
  "SearchTriggers": ZendeskFullApiSchemaTriggersResponse;
  "SearchUsers": ZendeskFullApiSchemaUsersResponse;
  "SearchViews": ZendeskFullApiSchemaViewsResponse;
  "SetAgentAttributeValues": ZendeskFullApiSchemaSkillBasedRoutingAttributeValuesWithoutPriorityResponse;
  "SetOrganizationAsDefault": ZendeskFullApiSchemaOrganizationMembershipResponse;
  "SetOrganizationMembershipAsDefault": ZendeskFullApiSchemaOrganizationMembershipsResponse;
  "SetOrganizationTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "SetTagsTicket": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "SetTicketAttributeValues": ZendeskFullApiSchemaSkillBasedRoutingAttributeValuesResponse;
  "SetUserPassword": string;
  "SetUserTags": ZendeskFullApiSchemaTagsByObjectIdResponse;
  "ShowAccessRule": ZendeskFullApiSchemaAccessRuleResponse;
  "ShowAccountSettings": ZendeskFullApiSchemaAccountSettingsResponse;
  "ShowActivity": ZendeskFullApiSchemaActivityResponse;
  "ShowAttachment": ZendeskFullApiSchemaAttachmentResponse;
  "ShowAttribute": ZendeskFullApiSchemaSkillBasedRoutingAttributeResponse;
  "ShowAttributeValue": ZendeskFullApiSchemaSkillBasedRoutingAttributeValueResponse;
  "ShowAuditLog": ZendeskFullApiSchemaAuditLogResponse;
  "ShowAutomation": ZendeskFullApiSchemaAutomationResponse;
  "ShowBrand": ZendeskFullApiSchemaBrandResponse;
  "ShowBrandAgentById": ZendeskFullApiSchemaBrandAgentResponse;
  "ShowChangesToTicket": ZendeskFullApiSchemaMacroApplyTicketResponse;
  "ShowClient": ZendeskFullApiSchemaOauthClientResponse;
  "ShowComment": ZendeskFullApiSchemaTicketCommentResponse;
  "ShowCurrentLocale": ZendeskFullApiSchemaLocaleResponse;
  "ShowCurrentlyAuthenticatedSession": ZendeskFullApiSchemaSessionResponse;
  "ShowCurrentToken": ZendeskFullApiSchemaOAuthTokenResponse;
  "ShowCurrentUser": ZendeskFullApiSchemaCurrentUserResponse;
  "ShowCurrentUserSettings": ZendeskFullApiSchemaUserSettingsResponse;
  "ShowCustomObject": ZendeskFullApiSchemaCustomObjectResponse;
  "ShowCustomObjectField": ZendeskFullApiSchemaCustomObjectFieldResponse;
  "ShowCustomObjectRecord": ZendeskFullApiSchemaCustomObjectRecordResponse;
  "ShowCustomRoleById": ZendeskFullApiSchemaCustomRoleResponse;
  "ShowCustomStatus": ZendeskFullApiSchemaCustomStatusResponse;
  "ShowDeletedUser": ZendeskFullApiSchemaDeletedUserResponse;
  "ShowDerivedMacro": ZendeskFullApiSchemaMacroResponse;
  "ShowDynamicContentItem": ZendeskFullApiSchemaDynamicContentResponse;
  "ShowDynamicContentVariant": ZendeskFullApiSchemaDynamicContentVariantResponse;
  "ShowEmailNotification": ZendeskFullApiSchemaEmailNotificationResponse;
  "ShowEndUserIdentity": ZendeskFullApiSchemaUserIdentityResponse;
  "ShowGlobalClient": ZendeskFullApiSchemaGlobalClientResponse;
  "ShowGroupById": ZendeskFullApiSchemaGroupResponse;
  "ShowGroupMembershipById": ZendeskFullApiSchemaGroupMembershipResponse;
  "ShowGroupSLAPolicy": ZendeskFullApiSchemaGroupSLAPolicyResponse;
  "ShowItamAsset": ZendeskFullApiSchemaItamAssetResponse;
  "ShowItamAssetType": ZendeskFullApiSchemaItamAssetTypeResponse;
  "ShowItamAssetTypeField": ZendeskFullApiSchemaItamAssetFieldResponse;
  "ShowItamLocation": ZendeskFullApiSchemaItamAssetLocationResponse;
  "ShowItamStatus": ZendeskFullApiSchemaItamAssetStatusResponse;
  "ShowJobStatus": ZendeskFullApiSchemaJobStatusResponse;
  "ShowLocaleById": ZendeskFullApiSchemaLocaleResponse;
  "ShowMacro": ZendeskFullApiSchemaMacroResponse;
  "ShowMacroAttachment": ZendeskFullApiSchemaMacroAttachmentResponse;
  "ShowManyDynamicContents": ZendeskFullApiSchemaDynamicContentsResponse;
  "ShowManyEmailNotifications": ZendeskFullApiSchemaEmailNotificationResponse;
  "ShowManyJobStatuses": ZendeskFullApiSchemaJobStatusesResponse;
  "ShowManyOrganizations": ZendeskFullApiSchemaOrganizationsResponse;
  "ShowManyTicketFields": ZendeskFullApiSchemaTicketFieldsShowManyResponse;
  "ShowManyTicketForms": ZendeskFullApiSchemaTicketFormsResponse;
  "ShowManyTicketFormStatuses": ZendeskFullApiSchemaTicketFormStatusesResponse;
  "ShowManyUserFields": ZendeskFullApiSchemaUserFieldsResponse;
  "ShowManyUsers": ZendeskFullApiSchemaUsersResponse;
  "ShowMonitoredTwitterHandle": ZendeskFullApiSchemaTwitterChannelResponse;
  "ShowOrganization": ZendeskFullApiSchemaOrganizationResponse;
  "ShowOrganizationField": ZendeskFullApiSchemaOrganizationFieldResponse;
  "ShowOrganizationMembershipById": ZendeskFullApiSchemaOrganizationMembershipResponse;
  "ShowOrganizationMembershipByUserId": ZendeskFullApiSchemaOrganizationMembershipResponse;
  "ShowOrganizationMerge": ZendeskFullApiSchemaOrganizationMergeResponse;
  "ShowOrganizationSubscription": ZendeskFullApiSchemaOrganizationSubscriptionResponse;
  "ShowPermissionPolicy": ZendeskFullApiSchemaPermissionPolicyResponse;
  "ShowQueueById": ZendeskFullApiSchemaQueueResponse;
  "ShowRequest": ZendeskFullApiSchemaRequestResponse;
  "ShowSatisfactionRating": ZendeskFullApiSchemaSatisfactionRatingResponse;
  "ShowSatisfactionRatings": ZendeskFullApiSchemaSatisfactionReasonResponse;
  "ShowSecuritySettings": ZendeskFullApiSchemaSecuritySettingsResponse;
  "ShowSession": ZendeskFullApiSchemaSessionResponse;
  "ShowSharingAgreement": ZendeskFullApiSchemaSharingAgreementResponse;
  "ShowSLAPolicy": ZendeskFullApiSchemaSLAPolicyResponse;
  "ShowSupportAddress": ZendeskFullApiSchemaSupportAddressResponse;
  "ShowSuspendedTickets": ZendeskFullApiSchemaSuspendedTicketsResponse;
  "ShowTarget": ZendeskFullApiSchemaTargetResponse;
  "ShowTargetFailure": ZendeskFullApiSchemaTargetFailureResponse;
  "ShowTaskList": ZendeskFullApiSchemaTaskListByTicketIdResponse;
  "ShowTaskListTemplate": ZendeskFullApiSchemaTaskListTemplateResponse;
  "ShowTicket": ZendeskFullApiSchemaTicketResponse;
  "ShowTicketAfterChanges": ZendeskFullApiSchemaMacroApplyTicketResponse;
  "ShowTicketAudit": ZendeskFullApiSchemaTicketAuditResponse;
  "ShowTicketByMessagingConversationId": ZendeskFullApiSchemaTicketResponse;
  "ShowTicketfield": ZendeskFullApiSchemaTicketFieldResponse;
  "ShowTicketFieldOption": ZendeskFullApiSchemaCustomFieldOptionResponse;
  "ShowTicketForm": ZendeskFullApiSchemaTicketFormResponse;
  "ShowTicketMetrics": ZendeskFullApiSchemaTicketMetricsByTicketMetricIdResponse;
  "ShowTicketMetricsByTicket": ZendeskFullApiSchemaTicketMetricsByTicketMetricIdResponse;
  "ShowToken": ZendeskFullApiSchemaOAuthTokenResponse;
  "ShowTriggerCategoryById": ZendeskFullApiSchemaTriggerCategoryResponse;
  "ShowUser": ZendeskFullApiSchemaUserResponse;
  "ShowUserBrandAgentById": ZendeskFullApiSchemaBrandAgentResponse;
  "ShowUserComplianceDeletionStatuses": ZendeskFullApiSchemaComplianceDeletionStatusesResponse;
  "ShowUserField": ZendeskFullApiSchemaUserFieldResponse;
  "ShowUserFieldOption": ZendeskFullApiSchemaCustomFieldOptionResponse;
  "ShowUserGroupMembershipById": ZendeskFullApiSchemaGroupMembershipResponse;
  "ShowUserIdentity": ZendeskFullApiSchemaUserIdentityResponse;
  "ShowUserRelated": ZendeskFullApiSchemaUserRelatedResponse;
  "ShowView": ZendeskFullApiSchemaViewResponse;
  "ShowWorkspace": {
  workspace?: ZendeskFullApiSchemaWorkspaceObject;
};
  "SuspendedTicketsAttachments": ZendeskFullApiSchemaSuspendedTicketsAttachmentsResponse;
  "TicketBulkImport": ZendeskFullApiSchemaJobStatusResponse;
  "TicketFormTicketFormStatuses": ZendeskFullApiSchemaTicketFormStatusesResponse;
  "TicketImport": ZendeskFullApiSchemaTicketResponse;
  "TicketRelatedInformation": ZendeskFullApiSchemaTicketRelatedInformation;
  "TicketsCreateMany": ZendeskFullApiSchemaJobStatusResponse;
  "TicketsShowMany": ZendeskFullApiSchemaTicketsResponse;
  "TicketsUpdateMany": ZendeskFullApiSchemaJobStatusResponse;
  "TriggerRevision": ZendeskFullApiSchemaTriggerRevisionResponse;
  "UnassignOrganization": void;
  "UpdateAccessRule": ZendeskFullApiSchemaAccessRuleResponse;
  "UpdateAccountSettings": ZendeskFullApiSchemaAccountSettingsResponse;
  "UpdateAttachment": ZendeskFullApiSchemaAttachmentResponse;
  "UpdateAttribute": ZendeskFullApiSchemaSkillBasedRoutingAttributeResponse;
  "UpdateAttributeValue": ZendeskFullApiSchemaSkillBasedRoutingAttributeValueResponse;
  "UpdateAutomation": ZendeskFullApiSchemaAutomationResponse;
  "UpdateBrand": ZendeskFullApiSchemaBrandResponse;
  "UpdateBrandLogo": ZendeskFullApiSchemaBrandResponse;
  "UpdateClient": ZendeskFullApiSchemaOauthClientResponse;
  "UpdateCurrentUserSettings": ZendeskFullApiSchemaUserSettingsResponse;
  "UpdateCustomObject": ZendeskFullApiSchemaCustomObjectResponse;
  "UpdateCustomObjectField": ZendeskFullApiSchemaCustomObjectFieldResponse;
  "UpdateCustomObjectRecord": ZendeskFullApiSchemaCustomObjectRecordResponse;
  "UpdateCustomObjectRecordAttachment": ZendeskFullApiSchemaCustomObjectRecordAttachmentResponse;
  "UpdateCustomRoleById": ZendeskFullApiSchemaCustomRoleResponse;
  "UpdateCustomStatus": ZendeskFullApiSchemaCustomStatusResponse;
  "UpdateDeletionSchedule": {
  deletion_schedule?: ZendeskFullApiSchemaDeletionSchedule;
};
  "UpdateDynamicContentItem": ZendeskFullApiSchemaDynamicContentResponse;
  "UpdateDynamicContentVariant": ZendeskFullApiSchemaDynamicContentVariantResponse;
  "UpdateGroup": ZendeskFullApiSchemaGroupResponse;
  "UpdateGroupSLAPolicy": ZendeskFullApiSchemaGroupSLAPolicyResponse;
  "UpdateItamAsset": ZendeskFullApiSchemaItamAssetResponse;
  "UpdateItamAssetType": ZendeskFullApiSchemaItamAssetTypeResponse;
  "UpdateItamAssetTypeField": ZendeskFullApiSchemaItamAssetFieldResponse;
  "UpdateItamLocation": ZendeskFullApiSchemaItamAssetLocationResponse;
  "UpdateMacro": {
  macro?: ZendeskFullApiSchemaMacroObject;
};
  "UpdateManyAutomations": ZendeskFullApiSchemaAutomationsResponse;
  "UpdateManyDynamicContentVariants": ZendeskFullApiSchemaDynamicContentVariantsResponse;
  "UpdateManyMacros": ZendeskFullApiSchemaMacrosResponse;
  "UpdateManyObjectTriggers": ZendeskFullApiSchemaObjectTriggersResponse;
  "UpdateManyOrganizations": ZendeskFullApiSchemaJobStatusResponse;
  "UpdateManyTriggers": ZendeskFullApiSchemaTriggersResponse;
  "UpdateManyUsers": ZendeskFullApiSchemaJobStatusResponse;
  "UpdateManyViews": ZendeskFullApiSchemaViewsResponse;
  "UpdateObjectTrigger": ZendeskFullApiSchemaObjectTriggerResponse;
  "UpdateOrganization": ZendeskFullApiSchemaOrganizationResponse;
  "UpdateOrganizationField": ZendeskFullApiSchemaOrganizationFieldResponse;
  "UpdatePermissionPolicy": ZendeskFullApiSchemaPermissionPolicyResponse;
  "UpdateQueue": ZendeskFullApiSchemaQueueResponse;
  "UpdateRequest": ZendeskFullApiSchemaRequestResponse;
  "UpdateResourceCollection": ZendeskFullApiSchemaJobStatusResponse;
  "UpdateSharingAgreement": ZendeskFullApiSchemaSharingAgreementResponse;
  "UpdateSLAPolicy": ZendeskFullApiSchemaSLAPolicyResponse;
  "UpdateSupportAddress": ZendeskFullApiSchemaSupportAddressResponse;
  "UpdateTarget": ZendeskFullApiSchemaTargetResponse;
  "UpdateTaskListTemplate": ZendeskFullApiSchemaTaskListTemplateResponse;
  "UpdateTicket": ZendeskFullApiSchemaTicketUpdateResponse;
  "UpdateTicketField": ZendeskFullApiSchemaTicketFieldResponse;
  "UpdateTicketForm": ZendeskFullApiSchemaTicketFormResponse;
  "UpdateTicketFormStatusById": ZendeskFullApiSchemaTicketFormStatusesResponse;
  "UpdateTicketFormStatuses": ZendeskFullApiSchemaTicketFormStatusesResponse;
  "UpdateTrigger": ZendeskFullApiSchemaTriggerResponse;
  "UpdateTriggerCategory": ZendeskFullApiSchemaTriggerCategoryResponse;
  "UpdateUser": ZendeskFullApiSchemaUserResponse;
  "UpdateUserField": ZendeskFullApiSchemaUserFieldResponse;
  "UpdateUserIdentity": ZendeskFullApiSchemaUserIdentityResponse;
  "UpdateView": ZendeskFullApiSchemaViewResponse;
  "UpdateWorkspace": {
  workspace?: ZendeskFullApiSchemaWorkspaceObject;
};
  "UploadFiles": ZendeskFullApiSchemaAttachmentUploadResponse;
  "UpsertCustomObjectRecordByExternalIdOrName": ZendeskFullApiSchemaCustomObjectRecordResponse;
  "ValidateToken": string;
  "VerifySubdomainAvailability": {
  success?: boolean;
};
  "VerifySupportAddressForwarding": string;
  "VerifyUserIdentity": ZendeskFullApiSchemaUserIdentityResponse;
}
