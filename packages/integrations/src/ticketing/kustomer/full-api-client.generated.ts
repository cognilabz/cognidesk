// Generated from official @cognidesk/integrations API documentation.
// Do not edit by hand; run scripts/generate-ticketing-provider-coverage.mjs after checking upstream docs.

import type { KustomerOperationRequestInput } from "./index.js";
import type {
  KustomerFullApiOperationQueryMap,
  KustomerFullApiOperationQueryRequiredMap,
  KustomerFullApiOperationRequestBodyMap,
  KustomerFullApiOperationRequestBodyRequiredMap,
  KustomerFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createKustomerFullApiAppsGeneratedClient,
  KustomerFullApiAppsGeneratedFunctionNames,
  type KustomerFullApiAppsGeneratedClient,
  type KustomerFullApiAppsOperationPathParamMap,
  type KustomerFullApiAppsOperationRequestMap,
} from "./full-api.generated/client/apps-chunk.generated.js";
import {
  createKustomerFullApiArticlesGeneratedClient,
  KustomerFullApiArticlesGeneratedFunctionNames,
  type KustomerFullApiArticlesGeneratedClient,
  type KustomerFullApiArticlesOperationPathParamMap,
  type KustomerFullApiArticlesOperationRequestMap,
} from "./full-api.generated/client/articles-chunk.generated.js";
import {
  createKustomerFullApiArticlesPublicGeneratedClient,
  KustomerFullApiArticlesPublicGeneratedFunctionNames,
  type KustomerFullApiArticlesPublicGeneratedClient,
  type KustomerFullApiArticlesPublicOperationPathParamMap,
  type KustomerFullApiArticlesPublicOperationRequestMap,
} from "./full-api.generated/client/articles-public-chunk.generated.js";
import {
  createKustomerFullApiArticlesSchedulesGeneratedClient,
  KustomerFullApiArticlesSchedulesGeneratedFunctionNames,
  type KustomerFullApiArticlesSchedulesGeneratedClient,
  type KustomerFullApiArticlesSchedulesOperationPathParamMap,
  type KustomerFullApiArticlesSchedulesOperationRequestMap,
} from "./full-api.generated/client/articles-schedules-chunk.generated.js";
import {
  createKustomerFullApiArticlesVersioningAndLanguagesGeneratedClient,
  KustomerFullApiArticlesVersioningAndLanguagesGeneratedFunctionNames,
  type KustomerFullApiArticlesVersioningAndLanguagesGeneratedClient,
  type KustomerFullApiArticlesVersioningAndLanguagesOperationPathParamMap,
  type KustomerFullApiArticlesVersioningAndLanguagesOperationRequestMap,
} from "./full-api.generated/client/articles-versioning-and-languages-chunk.generated.js";
import {
  createKustomerFullApiAttachmentsGeneratedClient,
  KustomerFullApiAttachmentsGeneratedFunctionNames,
  type KustomerFullApiAttachmentsGeneratedClient,
  type KustomerFullApiAttachmentsOperationPathParamMap,
  type KustomerFullApiAttachmentsOperationRequestMap,
} from "./full-api.generated/client/attachments-chunk.generated.js";
import {
  createKustomerFullApiAuditLogsGeneratedClient,
  KustomerFullApiAuditLogsGeneratedFunctionNames,
  type KustomerFullApiAuditLogsGeneratedClient,
  type KustomerFullApiAuditLogsOperationPathParamMap,
  type KustomerFullApiAuditLogsOperationRequestMap,
} from "./full-api.generated/client/audit-logs-chunk.generated.js";
import {
  createKustomerFullApiAuthSettingsGeneratedClient,
  KustomerFullApiAuthSettingsGeneratedFunctionNames,
  type KustomerFullApiAuthSettingsGeneratedClient,
  type KustomerFullApiAuthSettingsOperationPathParamMap,
  type KustomerFullApiAuthSettingsOperationRequestMap,
} from "./full-api.generated/client/auth-settings-chunk.generated.js";
import {
  createKustomerFullApiAuthTokensGeneratedClient,
  KustomerFullApiAuthTokensGeneratedFunctionNames,
  type KustomerFullApiAuthTokensGeneratedClient,
  type KustomerFullApiAuthTokensOperationPathParamMap,
  type KustomerFullApiAuthTokensOperationRequestMap,
} from "./full-api.generated/client/auth-tokens-chunk.generated.js";
import {
  createKustomerFullApiAutomationsGeneratedClient,
  KustomerFullApiAutomationsGeneratedFunctionNames,
  type KustomerFullApiAutomationsGeneratedClient,
  type KustomerFullApiAutomationsOperationPathParamMap,
  type KustomerFullApiAutomationsOperationRequestMap,
} from "./full-api.generated/client/automations-chunk.generated.js";
import {
  createKustomerFullApiBrandsGeneratedClient,
  KustomerFullApiBrandsGeneratedFunctionNames,
  type KustomerFullApiBrandsGeneratedClient,
  type KustomerFullApiBrandsOperationPathParamMap,
  type KustomerFullApiBrandsOperationRequestMap,
} from "./full-api.generated/client/brands-chunk.generated.js";
import {
  createKustomerFullApiBulkOperationsGeneratedClient,
  KustomerFullApiBulkOperationsGeneratedFunctionNames,
  type KustomerFullApiBulkOperationsGeneratedClient,
  type KustomerFullApiBulkOperationsOperationPathParamMap,
  type KustomerFullApiBulkOperationsOperationRequestMap,
} from "./full-api.generated/client/bulk-operations-chunk.generated.js";
import {
  createKustomerFullApiBusinessSchedulesGeneratedClient,
  KustomerFullApiBusinessSchedulesGeneratedFunctionNames,
  type KustomerFullApiBusinessSchedulesGeneratedClient,
  type KustomerFullApiBusinessSchedulesOperationPathParamMap,
  type KustomerFullApiBusinessSchedulesOperationRequestMap,
} from "./full-api.generated/client/business-schedules-chunk.generated.js";
import {
  createKustomerFullApiCardsGeneratedClient,
  KustomerFullApiCardsGeneratedFunctionNames,
  type KustomerFullApiCardsGeneratedClient,
  type KustomerFullApiCardsOperationPathParamMap,
  type KustomerFullApiCardsOperationRequestMap,
} from "./full-api.generated/client/cards-chunk.generated.js";
import {
  createKustomerFullApiCategoriesGeneratedClient,
  KustomerFullApiCategoriesGeneratedFunctionNames,
  type KustomerFullApiCategoriesGeneratedClient,
  type KustomerFullApiCategoriesOperationPathParamMap,
  type KustomerFullApiCategoriesOperationRequestMap,
} from "./full-api.generated/client/categories-chunk.generated.js";
import {
  createKustomerFullApiCategoriesInternalGeneratedClient,
  KustomerFullApiCategoriesInternalGeneratedFunctionNames,
  type KustomerFullApiCategoriesInternalGeneratedClient,
  type KustomerFullApiCategoriesInternalOperationPathParamMap,
  type KustomerFullApiCategoriesInternalOperationRequestMap,
} from "./full-api.generated/client/categories-internal-chunk.generated.js";
import {
  createKustomerFullApiCategoriesPublicGeneratedClient,
  KustomerFullApiCategoriesPublicGeneratedFunctionNames,
  type KustomerFullApiCategoriesPublicGeneratedClient,
  type KustomerFullApiCategoriesPublicOperationPathParamMap,
  type KustomerFullApiCategoriesPublicOperationRequestMap,
} from "./full-api.generated/client/categories-public-chunk.generated.js";
import {
  createKustomerFullApiChatSettingsGeneratedClient,
  KustomerFullApiChatSettingsGeneratedFunctionNames,
  type KustomerFullApiChatSettingsGeneratedClient,
  type KustomerFullApiChatSettingsOperationPathParamMap,
  type KustomerFullApiChatSettingsOperationRequestMap,
} from "./full-api.generated/client/chat-settings-chunk.generated.js";
import {
  createKustomerFullApiCompaniesGeneratedClient,
  KustomerFullApiCompaniesGeneratedFunctionNames,
  type KustomerFullApiCompaniesGeneratedClient,
  type KustomerFullApiCompaniesOperationPathParamMap,
  type KustomerFullApiCompaniesOperationRequestMap,
} from "./full-api.generated/client/companies-chunk.generated.js";
import {
  createKustomerFullApiCompaniesBulkGeneratedClient,
  KustomerFullApiCompaniesBulkGeneratedFunctionNames,
  type KustomerFullApiCompaniesBulkGeneratedClient,
  type KustomerFullApiCompaniesBulkOperationPathParamMap,
  type KustomerFullApiCompaniesBulkOperationRequestMap,
} from "./full-api.generated/client/companies-bulk-chunk.generated.js";
import {
  createKustomerFullApiConversationsGeneratedClient,
  KustomerFullApiConversationsGeneratedFunctionNames,
  type KustomerFullApiConversationsGeneratedClient,
  type KustomerFullApiConversationsOperationPathParamMap,
  type KustomerFullApiConversationsOperationRequestMap,
} from "./full-api.generated/client/conversations-chunk.generated.js";
import {
  createKustomerFullApiConversationsBulkGeneratedClient,
  KustomerFullApiConversationsBulkGeneratedFunctionNames,
  type KustomerFullApiConversationsBulkGeneratedClient,
  type KustomerFullApiConversationsBulkOperationPathParamMap,
  type KustomerFullApiConversationsBulkOperationRequestMap,
} from "./full-api.generated/client/conversations-bulk-chunk.generated.js";
import {
  createKustomerFullApiConversationsForwardsGeneratedClient,
  KustomerFullApiConversationsForwardsGeneratedFunctionNames,
  type KustomerFullApiConversationsForwardsGeneratedClient,
  type KustomerFullApiConversationsForwardsOperationPathParamMap,
  type KustomerFullApiConversationsForwardsOperationRequestMap,
} from "./full-api.generated/client/conversations-forwards-chunk.generated.js";
import {
  createKustomerFullApiConversationsMessagesGeneratedClient,
  KustomerFullApiConversationsMessagesGeneratedFunctionNames,
  type KustomerFullApiConversationsMessagesGeneratedClient,
  type KustomerFullApiConversationsMessagesOperationPathParamMap,
  type KustomerFullApiConversationsMessagesOperationRequestMap,
} from "./full-api.generated/client/conversations-messages-chunk.generated.js";
import {
  createKustomerFullApiConversationsNotesGeneratedClient,
  KustomerFullApiConversationsNotesGeneratedFunctionNames,
  type KustomerFullApiConversationsNotesGeneratedClient,
  type KustomerFullApiConversationsNotesOperationPathParamMap,
  type KustomerFullApiConversationsNotesOperationRequestMap,
} from "./full-api.generated/client/conversations-notes-chunk.generated.js";
import {
  createKustomerFullApiConversationsTagsGeneratedClient,
  KustomerFullApiConversationsTagsGeneratedFunctionNames,
  type KustomerFullApiConversationsTagsGeneratedClient,
  type KustomerFullApiConversationsTagsOperationPathParamMap,
  type KustomerFullApiConversationsTagsOperationRequestMap,
} from "./full-api.generated/client/conversations-tags-chunk.generated.js";
import {
  createKustomerFullApiConversationsTimeGeneratedClient,
  KustomerFullApiConversationsTimeGeneratedFunctionNames,
  type KustomerFullApiConversationsTimeGeneratedClient,
  type KustomerFullApiConversationsTimeOperationPathParamMap,
  type KustomerFullApiConversationsTimeOperationRequestMap,
} from "./full-api.generated/client/conversations-time-chunk.generated.js";
import {
  createKustomerFullApiCustomAttributesGeneratedClient,
  KustomerFullApiCustomAttributesGeneratedFunctionNames,
  type KustomerFullApiCustomAttributesGeneratedClient,
  type KustomerFullApiCustomAttributesOperationPathParamMap,
  type KustomerFullApiCustomAttributesOperationRequestMap,
} from "./full-api.generated/client/custom-attributes-chunk.generated.js";
import {
  createKustomerFullApiCustomersGeneratedClient,
  KustomerFullApiCustomersGeneratedFunctionNames,
  type KustomerFullApiCustomersGeneratedClient,
  type KustomerFullApiCustomersOperationPathParamMap,
  type KustomerFullApiCustomersOperationRequestMap,
} from "./full-api.generated/client/customers-chunk.generated.js";
import {
  createKustomerFullApiCustomersBulkGeneratedClient,
  KustomerFullApiCustomersBulkGeneratedFunctionNames,
  type KustomerFullApiCustomersBulkGeneratedClient,
  type KustomerFullApiCustomersBulkOperationPathParamMap,
  type KustomerFullApiCustomersBulkOperationRequestMap,
} from "./full-api.generated/client/customers-bulk-chunk.generated.js";
import {
  createKustomerFullApiCustomersConversationsGeneratedClient,
  KustomerFullApiCustomersConversationsGeneratedFunctionNames,
  type KustomerFullApiCustomersConversationsGeneratedClient,
  type KustomerFullApiCustomersConversationsOperationPathParamMap,
  type KustomerFullApiCustomersConversationsOperationRequestMap,
} from "./full-api.generated/client/customers-conversations-chunk.generated.js";
import {
  createKustomerFullApiCustomersDraftsGeneratedClient,
  KustomerFullApiCustomersDraftsGeneratedFunctionNames,
  type KustomerFullApiCustomersDraftsGeneratedClient,
  type KustomerFullApiCustomersDraftsOperationPathParamMap,
  type KustomerFullApiCustomersDraftsOperationRequestMap,
} from "./full-api.generated/client/customers-drafts-chunk.generated.js";
import {
  createKustomerFullApiCustomersEventsGeneratedClient,
  KustomerFullApiCustomersEventsGeneratedFunctionNames,
  type KustomerFullApiCustomersEventsGeneratedClient,
  type KustomerFullApiCustomersEventsOperationPathParamMap,
  type KustomerFullApiCustomersEventsOperationRequestMap,
} from "./full-api.generated/client/customers-events-chunk.generated.js";
import {
  createKustomerFullApiCustomersKObjectsGeneratedClient,
  KustomerFullApiCustomersKObjectsGeneratedFunctionNames,
  type KustomerFullApiCustomersKObjectsGeneratedClient,
  type KustomerFullApiCustomersKObjectsOperationPathParamMap,
  type KustomerFullApiCustomersKObjectsOperationRequestMap,
} from "./full-api.generated/client/customers-kobjects-chunk.generated.js";
import {
  createKustomerFullApiCustomersMergesGeneratedClient,
  KustomerFullApiCustomersMergesGeneratedFunctionNames,
  type KustomerFullApiCustomersMergesGeneratedClient,
  type KustomerFullApiCustomersMergesOperationPathParamMap,
  type KustomerFullApiCustomersMergesOperationRequestMap,
} from "./full-api.generated/client/customers-merges-chunk.generated.js";
import {
  createKustomerFullApiCustomersMessagesGeneratedClient,
  KustomerFullApiCustomersMessagesGeneratedFunctionNames,
  type KustomerFullApiCustomersMessagesGeneratedClient,
  type KustomerFullApiCustomersMessagesOperationPathParamMap,
  type KustomerFullApiCustomersMessagesOperationRequestMap,
} from "./full-api.generated/client/customers-messages-chunk.generated.js";
import {
  createKustomerFullApiCustomersNotesGeneratedClient,
  KustomerFullApiCustomersNotesGeneratedFunctionNames,
  type KustomerFullApiCustomersNotesGeneratedClient,
  type KustomerFullApiCustomersNotesOperationPathParamMap,
  type KustomerFullApiCustomersNotesOperationRequestMap,
} from "./full-api.generated/client/customers-notes-chunk.generated.js";
import {
  createKustomerFullApiCustomersUnmaskingWindowsGeneratedClient,
  KustomerFullApiCustomersUnmaskingWindowsGeneratedFunctionNames,
  type KustomerFullApiCustomersUnmaskingWindowsGeneratedClient,
  type KustomerFullApiCustomersUnmaskingWindowsOperationPathParamMap,
  type KustomerFullApiCustomersUnmaskingWindowsOperationRequestMap,
} from "./full-api.generated/client/customers-unmasking-windows-chunk.generated.js";
import {
  createKustomerFullApiDraftsGeneratedClient,
  KustomerFullApiDraftsGeneratedFunctionNames,
  type KustomerFullApiDraftsGeneratedClient,
  type KustomerFullApiDraftsOperationPathParamMap,
  type KustomerFullApiDraftsOperationRequestMap,
} from "./full-api.generated/client/drafts-chunk.generated.js";
import {
  createKustomerFullApiDraftsAttachmentsGeneratedClient,
  KustomerFullApiDraftsAttachmentsGeneratedFunctionNames,
  type KustomerFullApiDraftsAttachmentsGeneratedClient,
  type KustomerFullApiDraftsAttachmentsOperationPathParamMap,
  type KustomerFullApiDraftsAttachmentsOperationRequestMap,
} from "./full-api.generated/client/drafts-attachments-chunk.generated.js";
import {
  createKustomerFullApiEvaluationRunsGeneratedClient,
  KustomerFullApiEvaluationRunsGeneratedFunctionNames,
  type KustomerFullApiEvaluationRunsGeneratedClient,
  type KustomerFullApiEvaluationRunsOperationPathParamMap,
  type KustomerFullApiEvaluationRunsOperationRequestMap,
} from "./full-api.generated/client/evaluation-runs-chunk.generated.js";
import {
  createKustomerFullApiEvaluationTestCaseResultsGeneratedClient,
  KustomerFullApiEvaluationTestCaseResultsGeneratedFunctionNames,
  type KustomerFullApiEvaluationTestCaseResultsGeneratedClient,
  type KustomerFullApiEvaluationTestCaseResultsOperationPathParamMap,
  type KustomerFullApiEvaluationTestCaseResultsOperationRequestMap,
} from "./full-api.generated/client/evaluation-test-case-results-chunk.generated.js";
import {
  createKustomerFullApiEvaluationTestCasesGeneratedClient,
  KustomerFullApiEvaluationTestCasesGeneratedFunctionNames,
  type KustomerFullApiEvaluationTestCasesGeneratedClient,
  type KustomerFullApiEvaluationTestCasesOperationPathParamMap,
  type KustomerFullApiEvaluationTestCasesOperationRequestMap,
} from "./full-api.generated/client/evaluation-test-cases-chunk.generated.js";
import {
  createKustomerFullApiEvaluationsGeneratedClient,
  KustomerFullApiEvaluationsGeneratedFunctionNames,
  type KustomerFullApiEvaluationsGeneratedClient,
  type KustomerFullApiEvaluationsOperationPathParamMap,
  type KustomerFullApiEvaluationsOperationRequestMap,
} from "./full-api.generated/client/evaluations-chunk.generated.js";
import {
  createKustomerFullApiFormsGeneratedClient,
  KustomerFullApiFormsGeneratedFunctionNames,
  type KustomerFullApiFormsGeneratedClient,
  type KustomerFullApiFormsOperationPathParamMap,
  type KustomerFullApiFormsOperationRequestMap,
} from "./full-api.generated/client/forms-chunk.generated.js";
import {
  createKustomerFullApiForwardsAttachmentsGeneratedClient,
  KustomerFullApiForwardsAttachmentsGeneratedFunctionNames,
  type KustomerFullApiForwardsAttachmentsGeneratedClient,
  type KustomerFullApiForwardsAttachmentsOperationPathParamMap,
  type KustomerFullApiForwardsAttachmentsOperationRequestMap,
} from "./full-api.generated/client/forwards-attachments-chunk.generated.js";
import {
  createKustomerFullApiHooksEmailHooksGeneratedClient,
  KustomerFullApiHooksEmailHooksGeneratedFunctionNames,
  type KustomerFullApiHooksEmailHooksGeneratedClient,
  type KustomerFullApiHooksEmailHooksOperationPathParamMap,
  type KustomerFullApiHooksEmailHooksOperationRequestMap,
} from "./full-api.generated/client/hooks-email-hooks-chunk.generated.js";
import {
  createKustomerFullApiHooksFormHooksGeneratedClient,
  KustomerFullApiHooksFormHooksGeneratedFunctionNames,
  type KustomerFullApiHooksFormHooksGeneratedClient,
  type KustomerFullApiHooksFormHooksOperationPathParamMap,
  type KustomerFullApiHooksFormHooksOperationRequestMap,
} from "./full-api.generated/client/hooks-form-hooks-chunk.generated.js";
import {
  createKustomerFullApiHooksWebHooksGeneratedClient,
  KustomerFullApiHooksWebHooksGeneratedFunctionNames,
  type KustomerFullApiHooksWebHooksGeneratedClient,
  type KustomerFullApiHooksWebHooksOperationPathParamMap,
  type KustomerFullApiHooksWebHooksOperationRequestMap,
} from "./full-api.generated/client/hooks-web-hooks-chunk.generated.js";
import {
  createKustomerFullApiKlassesGeneratedClient,
  KustomerFullApiKlassesGeneratedFunctionNames,
  type KustomerFullApiKlassesGeneratedClient,
  type KustomerFullApiKlassesOperationPathParamMap,
  type KustomerFullApiKlassesOperationRequestMap,
} from "./full-api.generated/client/klasses-chunk.generated.js";
import {
  createKustomerFullApiKnowledgeBasesGeneratedClient,
  KustomerFullApiKnowledgeBasesGeneratedFunctionNames,
  type KustomerFullApiKnowledgeBasesGeneratedClient,
  type KustomerFullApiKnowledgeBasesOperationPathParamMap,
  type KustomerFullApiKnowledgeBasesOperationRequestMap,
} from "./full-api.generated/client/knowledge-bases-chunk.generated.js";
import {
  createKustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient,
  KustomerFullApiKnowledgeBasesCustomDomainsGeneratedFunctionNames,
  type KustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient,
  type KustomerFullApiKnowledgeBasesCustomDomainsOperationPathParamMap,
  type KustomerFullApiKnowledgeBasesCustomDomainsOperationRequestMap,
} from "./full-api.generated/client/knowledge-bases-custom-domains-chunk.generated.js";
import {
  createKustomerFullApiKObjectsCustomObjectsGeneratedClient,
  KustomerFullApiKObjectsCustomObjectsGeneratedFunctionNames,
  type KustomerFullApiKObjectsCustomObjectsGeneratedClient,
  type KustomerFullApiKObjectsCustomObjectsOperationPathParamMap,
  type KustomerFullApiKObjectsCustomObjectsOperationRequestMap,
} from "./full-api.generated/client/kobjects-custom-objects-chunk.generated.js";
import {
  createKustomerFullApiKObjectsCustomObjectsBulkGeneratedClient,
  KustomerFullApiKObjectsCustomObjectsBulkGeneratedFunctionNames,
  type KustomerFullApiKObjectsCustomObjectsBulkGeneratedClient,
  type KustomerFullApiKObjectsCustomObjectsBulkOperationPathParamMap,
  type KustomerFullApiKObjectsCustomObjectsBulkOperationRequestMap,
} from "./full-api.generated/client/kobjects-custom-objects-bulk-chunk.generated.js";
import {
  createKustomerFullApiKViewsKlassViewsGeneratedClient,
  KustomerFullApiKViewsKlassViewsGeneratedFunctionNames,
  type KustomerFullApiKViewsKlassViewsGeneratedClient,
  type KustomerFullApiKViewsKlassViewsOperationPathParamMap,
  type KustomerFullApiKViewsKlassViewsOperationRequestMap,
} from "./full-api.generated/client/kviews-klass-views-chunk.generated.js";
import {
  createKustomerFullApiMediaGeneratedClient,
  KustomerFullApiMediaGeneratedFunctionNames,
  type KustomerFullApiMediaGeneratedClient,
  type KustomerFullApiMediaOperationPathParamMap,
  type KustomerFullApiMediaOperationRequestMap,
} from "./full-api.generated/client/media-chunk.generated.js";
import {
  createKustomerFullApiMessagesGeneratedClient,
  KustomerFullApiMessagesGeneratedFunctionNames,
  type KustomerFullApiMessagesGeneratedClient,
  type KustomerFullApiMessagesOperationPathParamMap,
  type KustomerFullApiMessagesOperationRequestMap,
} from "./full-api.generated/client/messages-chunk.generated.js";
import {
  createKustomerFullApiMessagesBulkGeneratedClient,
  KustomerFullApiMessagesBulkGeneratedFunctionNames,
  type KustomerFullApiMessagesBulkGeneratedClient,
  type KustomerFullApiMessagesBulkOperationPathParamMap,
  type KustomerFullApiMessagesBulkOperationRequestMap,
} from "./full-api.generated/client/messages-bulk-chunk.generated.js";
import {
  createKustomerFullApiMetricsGeneratedClient,
  KustomerFullApiMetricsGeneratedFunctionNames,
  type KustomerFullApiMetricsGeneratedClient,
  type KustomerFullApiMetricsOperationPathParamMap,
  type KustomerFullApiMetricsOperationRequestMap,
} from "./full-api.generated/client/metrics-chunk.generated.js";
import {
  createKustomerFullApiNotesGeneratedClient,
  KustomerFullApiNotesGeneratedFunctionNames,
  type KustomerFullApiNotesGeneratedClient,
  type KustomerFullApiNotesOperationPathParamMap,
  type KustomerFullApiNotesOperationRequestMap,
} from "./full-api.generated/client/notes-chunk.generated.js";
import {
  createKustomerFullApiNotesBulkGeneratedClient,
  KustomerFullApiNotesBulkGeneratedFunctionNames,
  type KustomerFullApiNotesBulkGeneratedClient,
  type KustomerFullApiNotesBulkOperationPathParamMap,
  type KustomerFullApiNotesBulkOperationRequestMap,
} from "./full-api.generated/client/notes-bulk-chunk.generated.js";
import {
  createKustomerFullApiNotesConversationsGeneratedClient,
  KustomerFullApiNotesConversationsGeneratedFunctionNames,
  type KustomerFullApiNotesConversationsGeneratedClient,
  type KustomerFullApiNotesConversationsOperationPathParamMap,
  type KustomerFullApiNotesConversationsOperationRequestMap,
} from "./full-api.generated/client/notes-conversations-chunk.generated.js";
import {
  createKustomerFullApiNotificationsGeneratedClient,
  KustomerFullApiNotificationsGeneratedFunctionNames,
  type KustomerFullApiNotificationsGeneratedClient,
  type KustomerFullApiNotificationsOperationPathParamMap,
  type KustomerFullApiNotificationsOperationRequestMap,
} from "./full-api.generated/client/notifications-chunk.generated.js";
import {
  createKustomerFullApiNotificationsLogsGeneratedClient,
  KustomerFullApiNotificationsLogsGeneratedFunctionNames,
  type KustomerFullApiNotificationsLogsGeneratedClient,
  type KustomerFullApiNotificationsLogsOperationPathParamMap,
  type KustomerFullApiNotificationsLogsOperationRequestMap,
} from "./full-api.generated/client/notifications-logs-chunk.generated.js";
import {
  createKustomerFullApiNotificationsSettingsGeneratedClient,
  KustomerFullApiNotificationsSettingsGeneratedFunctionNames,
  type KustomerFullApiNotificationsSettingsGeneratedClient,
  type KustomerFullApiNotificationsSettingsOperationPathParamMap,
  type KustomerFullApiNotificationsSettingsOperationRequestMap,
} from "./full-api.generated/client/notifications-settings-chunk.generated.js";
import {
  createKustomerFullApiOutboundWebHooksGeneratedClient,
  KustomerFullApiOutboundWebHooksGeneratedFunctionNames,
  type KustomerFullApiOutboundWebHooksGeneratedClient,
  type KustomerFullApiOutboundWebHooksOperationPathParamMap,
  type KustomerFullApiOutboundWebHooksOperationRequestMap,
} from "./full-api.generated/client/outbound-web-hooks-chunk.generated.js";
import {
  createKustomerFullApiOutboundWebHooksTransactionsGeneratedClient,
  KustomerFullApiOutboundWebHooksTransactionsGeneratedFunctionNames,
  type KustomerFullApiOutboundWebHooksTransactionsGeneratedClient,
  type KustomerFullApiOutboundWebHooksTransactionsOperationPathParamMap,
  type KustomerFullApiOutboundWebHooksTransactionsOperationRequestMap,
} from "./full-api.generated/client/outbound-web-hooks-transactions-chunk.generated.js";
import {
  createKustomerFullApiQueueRulesGeneratedClient,
  KustomerFullApiQueueRulesGeneratedFunctionNames,
  type KustomerFullApiQueueRulesGeneratedClient,
  type KustomerFullApiQueueRulesOperationPathParamMap,
  type KustomerFullApiQueueRulesOperationRequestMap,
} from "./full-api.generated/client/queue-rules-chunk.generated.js";
import {
  createKustomerFullApiQueuesGeneratedClient,
  KustomerFullApiQueuesGeneratedFunctionNames,
  type KustomerFullApiQueuesGeneratedClient,
  type KustomerFullApiQueuesOperationPathParamMap,
  type KustomerFullApiQueuesOperationRequestMap,
} from "./full-api.generated/client/queues-chunk.generated.js";
import {
  createKustomerFullApiRoleGroupsGeneratedClient,
  KustomerFullApiRoleGroupsGeneratedFunctionNames,
  type KustomerFullApiRoleGroupsGeneratedClient,
  type KustomerFullApiRoleGroupsOperationPathParamMap,
  type KustomerFullApiRoleGroupsOperationRequestMap,
} from "./full-api.generated/client/role-groups-chunk.generated.js";
import {
  createKustomerFullApiRoutesGeneratedClient,
  KustomerFullApiRoutesGeneratedFunctionNames,
  type KustomerFullApiRoutesGeneratedClient,
  type KustomerFullApiRoutesOperationPathParamMap,
  type KustomerFullApiRoutesOperationRequestMap,
} from "./full-api.generated/client/routes-chunk.generated.js";
import {
  createKustomerFullApiRoutingUserStatusesGeneratedClient,
  KustomerFullApiRoutingUserStatusesGeneratedFunctionNames,
  type KustomerFullApiRoutingUserStatusesGeneratedClient,
  type KustomerFullApiRoutingUserStatusesOperationPathParamMap,
  type KustomerFullApiRoutingUserStatusesOperationRequestMap,
} from "./full-api.generated/client/routing-user-statuses-chunk.generated.js";
import {
  createKustomerFullApiSatisfactionGeneratedClient,
  KustomerFullApiSatisfactionGeneratedFunctionNames,
  type KustomerFullApiSatisfactionGeneratedClient,
  type KustomerFullApiSatisfactionOperationPathParamMap,
  type KustomerFullApiSatisfactionOperationRequestMap,
} from "./full-api.generated/client/satisfaction-chunk.generated.js";
import {
  createKustomerFullApiSearchGeneratedClient,
  KustomerFullApiSearchGeneratedFunctionNames,
  type KustomerFullApiSearchGeneratedClient,
  type KustomerFullApiSearchOperationPathParamMap,
  type KustomerFullApiSearchOperationRequestMap,
} from "./full-api.generated/client/search-chunk.generated.js";
import {
  createKustomerFullApiSearchFiltersGeneratedClient,
  KustomerFullApiSearchFiltersGeneratedFunctionNames,
  type KustomerFullApiSearchFiltersGeneratedClient,
  type KustomerFullApiSearchFiltersOperationPathParamMap,
  type KustomerFullApiSearchFiltersOperationRequestMap,
} from "./full-api.generated/client/search-filters-chunk.generated.js";
import {
  createKustomerFullApiSearchFiltersFoldersGeneratedClient,
  KustomerFullApiSearchFiltersFoldersGeneratedFunctionNames,
  type KustomerFullApiSearchFiltersFoldersGeneratedClient,
  type KustomerFullApiSearchFiltersFoldersOperationPathParamMap,
  type KustomerFullApiSearchFiltersFoldersOperationRequestMap,
} from "./full-api.generated/client/search-filters-folders-chunk.generated.js";
import {
  createKustomerFullApiSearchFiltersPinnedGeneratedClient,
  KustomerFullApiSearchFiltersPinnedGeneratedFunctionNames,
  type KustomerFullApiSearchFiltersPinnedGeneratedClient,
  type KustomerFullApiSearchFiltersPinnedOperationPathParamMap,
  type KustomerFullApiSearchFiltersPinnedOperationRequestMap,
} from "./full-api.generated/client/search-filters-pinned-chunk.generated.js";
import {
  createKustomerFullApiSettingsGeneratedClient,
  KustomerFullApiSettingsGeneratedFunctionNames,
  type KustomerFullApiSettingsGeneratedClient,
  type KustomerFullApiSettingsOperationPathParamMap,
  type KustomerFullApiSettingsOperationRequestMap,
} from "./full-api.generated/client/settings-chunk.generated.js";
import {
  createKustomerFullApiSettingsSpecificUserGeneratedClient,
  KustomerFullApiSettingsSpecificUserGeneratedFunctionNames,
  type KustomerFullApiSettingsSpecificUserGeneratedClient,
  type KustomerFullApiSettingsSpecificUserOperationPathParamMap,
  type KustomerFullApiSettingsSpecificUserOperationRequestMap,
} from "./full-api.generated/client/settings-specific-user-chunk.generated.js";
import {
  createKustomerFullApiShortcutsGeneratedClient,
  KustomerFullApiShortcutsGeneratedFunctionNames,
  type KustomerFullApiShortcutsGeneratedClient,
  type KustomerFullApiShortcutsOperationPathParamMap,
  type KustomerFullApiShortcutsOperationRequestMap,
} from "./full-api.generated/client/shortcuts-chunk.generated.js";
import {
  createKustomerFullApiShortcutsCategoriesGeneratedClient,
  KustomerFullApiShortcutsCategoriesGeneratedFunctionNames,
  type KustomerFullApiShortcutsCategoriesGeneratedClient,
  type KustomerFullApiShortcutsCategoriesOperationPathParamMap,
  type KustomerFullApiShortcutsCategoriesOperationRequestMap,
} from "./full-api.generated/client/shortcuts-categories-chunk.generated.js";
import {
  createKustomerFullApiSLAsGeneratedClient,
  KustomerFullApiSLAsGeneratedFunctionNames,
  type KustomerFullApiSLAsGeneratedClient,
  type KustomerFullApiSLAsOperationPathParamMap,
  type KustomerFullApiSLAsOperationRequestMap,
} from "./full-api.generated/client/slas-chunk.generated.js";
import {
  createKustomerFullApiSnippetsGeneratedClient,
  KustomerFullApiSnippetsGeneratedFunctionNames,
  type KustomerFullApiSnippetsGeneratedClient,
  type KustomerFullApiSnippetsOperationPathParamMap,
  type KustomerFullApiSnippetsOperationRequestMap,
} from "./full-api.generated/client/snippets-chunk.generated.js";
import {
  createKustomerFullApiSnoozesGeneratedClient,
  KustomerFullApiSnoozesGeneratedFunctionNames,
  type KustomerFullApiSnoozesGeneratedClient,
  type KustomerFullApiSnoozesOperationPathParamMap,
  type KustomerFullApiSnoozesOperationRequestMap,
} from "./full-api.generated/client/snoozes-chunk.generated.js";
import {
  createKustomerFullApiSpamGeneratedClient,
  KustomerFullApiSpamGeneratedFunctionNames,
  type KustomerFullApiSpamGeneratedClient,
  type KustomerFullApiSpamOperationPathParamMap,
  type KustomerFullApiSpamOperationRequestMap,
} from "./full-api.generated/client/spam-chunk.generated.js";
import {
  createKustomerFullApiSubStatusesGeneratedClient,
  KustomerFullApiSubStatusesGeneratedFunctionNames,
  type KustomerFullApiSubStatusesGeneratedClient,
  type KustomerFullApiSubStatusesOperationPathParamMap,
  type KustomerFullApiSubStatusesOperationRequestMap,
} from "./full-api.generated/client/sub-statuses-chunk.generated.js";
import {
  createKustomerFullApiSummariesGeneratedClient,
  KustomerFullApiSummariesGeneratedFunctionNames,
  type KustomerFullApiSummariesGeneratedClient,
  type KustomerFullApiSummariesOperationPathParamMap,
  type KustomerFullApiSummariesOperationRequestMap,
} from "./full-api.generated/client/summaries-chunk.generated.js";
import {
  createKustomerFullApiTagsKnowledgeBaseGeneratedClient,
  KustomerFullApiTagsKnowledgeBaseGeneratedFunctionNames,
  type KustomerFullApiTagsKnowledgeBaseGeneratedClient,
  type KustomerFullApiTagsKnowledgeBaseOperationPathParamMap,
  type KustomerFullApiTagsKnowledgeBaseOperationRequestMap,
} from "./full-api.generated/client/tags-knowledge-base-chunk.generated.js";
import {
  createKustomerFullApiTeamRoutingSettingsGeneratedClient,
  KustomerFullApiTeamRoutingSettingsGeneratedFunctionNames,
  type KustomerFullApiTeamRoutingSettingsGeneratedClient,
  type KustomerFullApiTeamRoutingSettingsOperationPathParamMap,
  type KustomerFullApiTeamRoutingSettingsOperationRequestMap,
} from "./full-api.generated/client/team-routing-settings-chunk.generated.js";
import {
  createKustomerFullApiTeamsGeneratedClient,
  KustomerFullApiTeamsGeneratedFunctionNames,
  type KustomerFullApiTeamsGeneratedClient,
  type KustomerFullApiTeamsOperationPathParamMap,
  type KustomerFullApiTeamsOperationRequestMap,
} from "./full-api.generated/client/teams-chunk.generated.js";
import {
  createKustomerFullApiTeamsByIDGeneratedClient,
  KustomerFullApiTeamsByIDGeneratedFunctionNames,
  type KustomerFullApiTeamsByIDGeneratedClient,
  type KustomerFullApiTeamsByIDOperationPathParamMap,
  type KustomerFullApiTeamsByIDOperationRequestMap,
} from "./full-api.generated/client/teams-by-id-chunk.generated.js";
import {
  createKustomerFullApiTemplatesGeneratedClient,
  KustomerFullApiTemplatesGeneratedFunctionNames,
  type KustomerFullApiTemplatesGeneratedClient,
  type KustomerFullApiTemplatesOperationPathParamMap,
  type KustomerFullApiTemplatesOperationRequestMap,
} from "./full-api.generated/client/templates-chunk.generated.js";
import {
  createKustomerFullApiThemesGeneratedClient,
  KustomerFullApiThemesGeneratedFunctionNames,
  type KustomerFullApiThemesGeneratedClient,
  type KustomerFullApiThemesOperationPathParamMap,
  type KustomerFullApiThemesOperationRequestMap,
} from "./full-api.generated/client/themes-chunk.generated.js";
import {
  createKustomerFullApiThemesDraftsAndRevisionsGeneratedClient,
  KustomerFullApiThemesDraftsAndRevisionsGeneratedFunctionNames,
  type KustomerFullApiThemesDraftsAndRevisionsGeneratedClient,
  type KustomerFullApiThemesDraftsAndRevisionsOperationPathParamMap,
  type KustomerFullApiThemesDraftsAndRevisionsOperationRequestMap,
} from "./full-api.generated/client/themes-drafts-and-revisions-chunk.generated.js";
import {
  createKustomerFullApiThemesThemeFilesGeneratedClient,
  KustomerFullApiThemesThemeFilesGeneratedFunctionNames,
  type KustomerFullApiThemesThemeFilesGeneratedClient,
  type KustomerFullApiThemesThemeFilesOperationPathParamMap,
  type KustomerFullApiThemesThemeFilesOperationRequestMap,
} from "./full-api.generated/client/themes-theme-files-chunk.generated.js";
import {
  createKustomerFullApiTrackingEventsGeneratedClient,
  KustomerFullApiTrackingEventsGeneratedFunctionNames,
  type KustomerFullApiTrackingEventsGeneratedClient,
  type KustomerFullApiTrackingEventsOperationPathParamMap,
  type KustomerFullApiTrackingEventsOperationRequestMap,
} from "./full-api.generated/client/tracking-events-chunk.generated.js";
import {
  createKustomerFullApiUsersGeneratedClient,
  KustomerFullApiUsersGeneratedFunctionNames,
  type KustomerFullApiUsersGeneratedClient,
  type KustomerFullApiUsersOperationPathParamMap,
  type KustomerFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";
import {
  createKustomerFullApiUsersByIDGeneratedClient,
  KustomerFullApiUsersByIDGeneratedFunctionNames,
  type KustomerFullApiUsersByIDGeneratedClient,
  type KustomerFullApiUsersByIDOperationPathParamMap,
  type KustomerFullApiUsersByIDOperationRequestMap,
} from "./full-api.generated/client/users-by-id-chunk.generated.js";
import {
  createKustomerFullApiWorkItemsGeneratedClient,
  KustomerFullApiWorkItemsGeneratedFunctionNames,
  type KustomerFullApiWorkItemsGeneratedClient,
  type KustomerFullApiWorkItemsOperationPathParamMap,
  type KustomerFullApiWorkItemsOperationRequestMap,
} from "./full-api.generated/client/work-items-chunk.generated.js";
import {
  createKustomerFullApiWorkSessionsGeneratedClient,
  KustomerFullApiWorkSessionsGeneratedFunctionNames,
  type KustomerFullApiWorkSessionsGeneratedClient,
  type KustomerFullApiWorkSessionsOperationPathParamMap,
  type KustomerFullApiWorkSessionsOperationRequestMap,
} from "./full-api.generated/client/work-sessions-chunk.generated.js";
import {
  createKustomerFullApiWorkSessionsBySessionIDGeneratedClient,
  KustomerFullApiWorkSessionsBySessionIDGeneratedFunctionNames,
  type KustomerFullApiWorkSessionsBySessionIDGeneratedClient,
  type KustomerFullApiWorkSessionsBySessionIDOperationPathParamMap,
  type KustomerFullApiWorkSessionsBySessionIDOperationRequestMap,
} from "./full-api.generated/client/work-sessions-by-session-id-chunk.generated.js";
import {
  createKustomerFullApiWorkSessionsCurrentGeneratedClient,
  KustomerFullApiWorkSessionsCurrentGeneratedFunctionNames,
  type KustomerFullApiWorkSessionsCurrentGeneratedClient,
  type KustomerFullApiWorkSessionsCurrentOperationPathParamMap,
  type KustomerFullApiWorkSessionsCurrentOperationRequestMap,
} from "./full-api.generated/client/work-sessions-current-chunk.generated.js";
import {
  createKustomerFullApiWorkflowProcessesErrorsGeneratedClient,
  KustomerFullApiWorkflowProcessesErrorsGeneratedFunctionNames,
  type KustomerFullApiWorkflowProcessesErrorsGeneratedClient,
  type KustomerFullApiWorkflowProcessesErrorsOperationPathParamMap,
  type KustomerFullApiWorkflowProcessesErrorsOperationRequestMap,
} from "./full-api.generated/client/workflow-processes-errors-chunk.generated.js";
import {
  createKustomerFullApiWorkflowVariablesGeneratedClient,
  KustomerFullApiWorkflowVariablesGeneratedFunctionNames,
  type KustomerFullApiWorkflowVariablesGeneratedClient,
  type KustomerFullApiWorkflowVariablesOperationPathParamMap,
  type KustomerFullApiWorkflowVariablesOperationRequestMap,
} from "./full-api.generated/client/workflow-variables-chunk.generated.js";
import {
  createKustomerFullApiWorkflowsGeneratedClient,
  KustomerFullApiWorkflowsGeneratedFunctionNames,
  type KustomerFullApiWorkflowsGeneratedClient,
  type KustomerFullApiWorkflowsOperationPathParamMap,
  type KustomerFullApiWorkflowsOperationRequestMap,
} from "./full-api.generated/client/workflows-chunk.generated.js";

export type KustomerFullApiPathParamValue = string | number;
export interface KustomerFullApiOperationPathParamMap extends KustomerFullApiAppsOperationPathParamMap, KustomerFullApiArticlesOperationPathParamMap, KustomerFullApiArticlesPublicOperationPathParamMap, KustomerFullApiArticlesSchedulesOperationPathParamMap, KustomerFullApiArticlesVersioningAndLanguagesOperationPathParamMap, KustomerFullApiAttachmentsOperationPathParamMap, KustomerFullApiAuditLogsOperationPathParamMap, KustomerFullApiAuthSettingsOperationPathParamMap, KustomerFullApiAuthTokensOperationPathParamMap, KustomerFullApiAutomationsOperationPathParamMap, KustomerFullApiBrandsOperationPathParamMap, KustomerFullApiBulkOperationsOperationPathParamMap, KustomerFullApiBusinessSchedulesOperationPathParamMap, KustomerFullApiCardsOperationPathParamMap, KustomerFullApiCategoriesOperationPathParamMap, KustomerFullApiCategoriesInternalOperationPathParamMap, KustomerFullApiCategoriesPublicOperationPathParamMap, KustomerFullApiChatSettingsOperationPathParamMap, KustomerFullApiCompaniesOperationPathParamMap, KustomerFullApiCompaniesBulkOperationPathParamMap, KustomerFullApiConversationsOperationPathParamMap, KustomerFullApiConversationsBulkOperationPathParamMap, KustomerFullApiConversationsForwardsOperationPathParamMap, KustomerFullApiConversationsMessagesOperationPathParamMap, KustomerFullApiConversationsNotesOperationPathParamMap, KustomerFullApiConversationsTagsOperationPathParamMap, KustomerFullApiConversationsTimeOperationPathParamMap, KustomerFullApiCustomAttributesOperationPathParamMap, KustomerFullApiCustomersOperationPathParamMap, KustomerFullApiCustomersBulkOperationPathParamMap, KustomerFullApiCustomersConversationsOperationPathParamMap, KustomerFullApiCustomersDraftsOperationPathParamMap, KustomerFullApiCustomersEventsOperationPathParamMap, KustomerFullApiCustomersKObjectsOperationPathParamMap, KustomerFullApiCustomersMergesOperationPathParamMap, KustomerFullApiCustomersMessagesOperationPathParamMap, KustomerFullApiCustomersNotesOperationPathParamMap, KustomerFullApiCustomersUnmaskingWindowsOperationPathParamMap, KustomerFullApiDraftsOperationPathParamMap, KustomerFullApiDraftsAttachmentsOperationPathParamMap, KustomerFullApiEvaluationRunsOperationPathParamMap, KustomerFullApiEvaluationTestCaseResultsOperationPathParamMap, KustomerFullApiEvaluationTestCasesOperationPathParamMap, KustomerFullApiEvaluationsOperationPathParamMap, KustomerFullApiFormsOperationPathParamMap, KustomerFullApiForwardsAttachmentsOperationPathParamMap, KustomerFullApiHooksEmailHooksOperationPathParamMap, KustomerFullApiHooksFormHooksOperationPathParamMap, KustomerFullApiHooksWebHooksOperationPathParamMap, KustomerFullApiKlassesOperationPathParamMap, KustomerFullApiKnowledgeBasesOperationPathParamMap, KustomerFullApiKnowledgeBasesCustomDomainsOperationPathParamMap, KustomerFullApiKObjectsCustomObjectsOperationPathParamMap, KustomerFullApiKObjectsCustomObjectsBulkOperationPathParamMap, KustomerFullApiKViewsKlassViewsOperationPathParamMap, KustomerFullApiMediaOperationPathParamMap, KustomerFullApiMessagesOperationPathParamMap, KustomerFullApiMessagesBulkOperationPathParamMap, KustomerFullApiMetricsOperationPathParamMap, KustomerFullApiNotesOperationPathParamMap, KustomerFullApiNotesBulkOperationPathParamMap, KustomerFullApiNotesConversationsOperationPathParamMap, KustomerFullApiNotificationsOperationPathParamMap, KustomerFullApiNotificationsLogsOperationPathParamMap, KustomerFullApiNotificationsSettingsOperationPathParamMap, KustomerFullApiOutboundWebHooksOperationPathParamMap, KustomerFullApiOutboundWebHooksTransactionsOperationPathParamMap, KustomerFullApiQueueRulesOperationPathParamMap, KustomerFullApiQueuesOperationPathParamMap, KustomerFullApiRoleGroupsOperationPathParamMap, KustomerFullApiRoutesOperationPathParamMap, KustomerFullApiRoutingUserStatusesOperationPathParamMap, KustomerFullApiSatisfactionOperationPathParamMap, KustomerFullApiSearchOperationPathParamMap, KustomerFullApiSearchFiltersOperationPathParamMap, KustomerFullApiSearchFiltersFoldersOperationPathParamMap, KustomerFullApiSearchFiltersPinnedOperationPathParamMap, KustomerFullApiSettingsOperationPathParamMap, KustomerFullApiSettingsSpecificUserOperationPathParamMap, KustomerFullApiShortcutsOperationPathParamMap, KustomerFullApiShortcutsCategoriesOperationPathParamMap, KustomerFullApiSLAsOperationPathParamMap, KustomerFullApiSnippetsOperationPathParamMap, KustomerFullApiSnoozesOperationPathParamMap, KustomerFullApiSpamOperationPathParamMap, KustomerFullApiSubStatusesOperationPathParamMap, KustomerFullApiSummariesOperationPathParamMap, KustomerFullApiTagsKnowledgeBaseOperationPathParamMap, KustomerFullApiTeamRoutingSettingsOperationPathParamMap, KustomerFullApiTeamsOperationPathParamMap, KustomerFullApiTeamsByIDOperationPathParamMap, KustomerFullApiTemplatesOperationPathParamMap, KustomerFullApiThemesOperationPathParamMap, KustomerFullApiThemesDraftsAndRevisionsOperationPathParamMap, KustomerFullApiThemesThemeFilesOperationPathParamMap, KustomerFullApiTrackingEventsOperationPathParamMap, KustomerFullApiUsersOperationPathParamMap, KustomerFullApiUsersByIDOperationPathParamMap, KustomerFullApiWorkItemsOperationPathParamMap, KustomerFullApiWorkSessionsOperationPathParamMap, KustomerFullApiWorkSessionsBySessionIDOperationPathParamMap, KustomerFullApiWorkSessionsCurrentOperationPathParamMap, KustomerFullApiWorkflowProcessesErrorsOperationPathParamMap, KustomerFullApiWorkflowVariablesOperationPathParamMap, KustomerFullApiWorkflowsOperationPathParamMap {}

export type KustomerFullApiOperationKey = keyof KustomerFullApiOperationPathParamMap & string;

export type KustomerFullApiOperationQueryInput<OperationKey extends KustomerFullApiOperationKey> =
  KustomerFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: KustomerFullApiOperationQueryMap[OperationKey] }
    : { query?: KustomerFullApiOperationQueryMap[OperationKey] };

export type KustomerFullApiOperationBodyInput<OperationKey extends KustomerFullApiOperationKey> =
  [KustomerFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : KustomerFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: KustomerFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: KustomerFullApiOperationRequestBodyMap[OperationKey] };

export type KustomerFullApiOperationInput<OperationKey extends KustomerFullApiOperationKey> = Omit<KustomerOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends KustomerFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: KustomerFullApiOperationPathParamMap[OperationKey] }
) & KustomerFullApiOperationQueryInput<OperationKey> & KustomerFullApiOperationBodyInput<OperationKey>;

export interface KustomerFullApiOperationRequestMap extends KustomerFullApiAppsOperationRequestMap, KustomerFullApiArticlesOperationRequestMap, KustomerFullApiArticlesPublicOperationRequestMap, KustomerFullApiArticlesSchedulesOperationRequestMap, KustomerFullApiArticlesVersioningAndLanguagesOperationRequestMap, KustomerFullApiAttachmentsOperationRequestMap, KustomerFullApiAuditLogsOperationRequestMap, KustomerFullApiAuthSettingsOperationRequestMap, KustomerFullApiAuthTokensOperationRequestMap, KustomerFullApiAutomationsOperationRequestMap, KustomerFullApiBrandsOperationRequestMap, KustomerFullApiBulkOperationsOperationRequestMap, KustomerFullApiBusinessSchedulesOperationRequestMap, KustomerFullApiCardsOperationRequestMap, KustomerFullApiCategoriesOperationRequestMap, KustomerFullApiCategoriesInternalOperationRequestMap, KustomerFullApiCategoriesPublicOperationRequestMap, KustomerFullApiChatSettingsOperationRequestMap, KustomerFullApiCompaniesOperationRequestMap, KustomerFullApiCompaniesBulkOperationRequestMap, KustomerFullApiConversationsOperationRequestMap, KustomerFullApiConversationsBulkOperationRequestMap, KustomerFullApiConversationsForwardsOperationRequestMap, KustomerFullApiConversationsMessagesOperationRequestMap, KustomerFullApiConversationsNotesOperationRequestMap, KustomerFullApiConversationsTagsOperationRequestMap, KustomerFullApiConversationsTimeOperationRequestMap, KustomerFullApiCustomAttributesOperationRequestMap, KustomerFullApiCustomersOperationRequestMap, KustomerFullApiCustomersBulkOperationRequestMap, KustomerFullApiCustomersConversationsOperationRequestMap, KustomerFullApiCustomersDraftsOperationRequestMap, KustomerFullApiCustomersEventsOperationRequestMap, KustomerFullApiCustomersKObjectsOperationRequestMap, KustomerFullApiCustomersMergesOperationRequestMap, KustomerFullApiCustomersMessagesOperationRequestMap, KustomerFullApiCustomersNotesOperationRequestMap, KustomerFullApiCustomersUnmaskingWindowsOperationRequestMap, KustomerFullApiDraftsOperationRequestMap, KustomerFullApiDraftsAttachmentsOperationRequestMap, KustomerFullApiEvaluationRunsOperationRequestMap, KustomerFullApiEvaluationTestCaseResultsOperationRequestMap, KustomerFullApiEvaluationTestCasesOperationRequestMap, KustomerFullApiEvaluationsOperationRequestMap, KustomerFullApiFormsOperationRequestMap, KustomerFullApiForwardsAttachmentsOperationRequestMap, KustomerFullApiHooksEmailHooksOperationRequestMap, KustomerFullApiHooksFormHooksOperationRequestMap, KustomerFullApiHooksWebHooksOperationRequestMap, KustomerFullApiKlassesOperationRequestMap, KustomerFullApiKnowledgeBasesOperationRequestMap, KustomerFullApiKnowledgeBasesCustomDomainsOperationRequestMap, KustomerFullApiKObjectsCustomObjectsOperationRequestMap, KustomerFullApiKObjectsCustomObjectsBulkOperationRequestMap, KustomerFullApiKViewsKlassViewsOperationRequestMap, KustomerFullApiMediaOperationRequestMap, KustomerFullApiMessagesOperationRequestMap, KustomerFullApiMessagesBulkOperationRequestMap, KustomerFullApiMetricsOperationRequestMap, KustomerFullApiNotesOperationRequestMap, KustomerFullApiNotesBulkOperationRequestMap, KustomerFullApiNotesConversationsOperationRequestMap, KustomerFullApiNotificationsOperationRequestMap, KustomerFullApiNotificationsLogsOperationRequestMap, KustomerFullApiNotificationsSettingsOperationRequestMap, KustomerFullApiOutboundWebHooksOperationRequestMap, KustomerFullApiOutboundWebHooksTransactionsOperationRequestMap, KustomerFullApiQueueRulesOperationRequestMap, KustomerFullApiQueuesOperationRequestMap, KustomerFullApiRoleGroupsOperationRequestMap, KustomerFullApiRoutesOperationRequestMap, KustomerFullApiRoutingUserStatusesOperationRequestMap, KustomerFullApiSatisfactionOperationRequestMap, KustomerFullApiSearchOperationRequestMap, KustomerFullApiSearchFiltersOperationRequestMap, KustomerFullApiSearchFiltersFoldersOperationRequestMap, KustomerFullApiSearchFiltersPinnedOperationRequestMap, KustomerFullApiSettingsOperationRequestMap, KustomerFullApiSettingsSpecificUserOperationRequestMap, KustomerFullApiShortcutsOperationRequestMap, KustomerFullApiShortcutsCategoriesOperationRequestMap, KustomerFullApiSLAsOperationRequestMap, KustomerFullApiSnippetsOperationRequestMap, KustomerFullApiSnoozesOperationRequestMap, KustomerFullApiSpamOperationRequestMap, KustomerFullApiSubStatusesOperationRequestMap, KustomerFullApiSummariesOperationRequestMap, KustomerFullApiTagsKnowledgeBaseOperationRequestMap, KustomerFullApiTeamRoutingSettingsOperationRequestMap, KustomerFullApiTeamsOperationRequestMap, KustomerFullApiTeamsByIDOperationRequestMap, KustomerFullApiTemplatesOperationRequestMap, KustomerFullApiThemesOperationRequestMap, KustomerFullApiThemesDraftsAndRevisionsOperationRequestMap, KustomerFullApiThemesThemeFilesOperationRequestMap, KustomerFullApiTrackingEventsOperationRequestMap, KustomerFullApiUsersOperationRequestMap, KustomerFullApiUsersByIDOperationRequestMap, KustomerFullApiWorkItemsOperationRequestMap, KustomerFullApiWorkSessionsOperationRequestMap, KustomerFullApiWorkSessionsBySessionIDOperationRequestMap, KustomerFullApiWorkSessionsCurrentOperationRequestMap, KustomerFullApiWorkflowProcessesErrorsOperationRequestMap, KustomerFullApiWorkflowVariablesOperationRequestMap, KustomerFullApiWorkflowsOperationRequestMap {}

export type KustomerFullApiOperationArgs<OperationKey extends KustomerFullApiOperationKey> = {} extends KustomerFullApiOperationPathParamMap[OperationKey]
  ? [input?: KustomerFullApiOperationRequestMap[OperationKey]]
  : [input: KustomerFullApiOperationRequestMap[OperationKey]];

export type KustomerGeneratedOperationCaller = <OperationKey extends KustomerFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: KustomerFullApiOperationArgs<OperationKey>
) => Promise<KustomerFullApiOperationResponseMap[OperationKey]>;

export interface KustomerFullApiGeneratedClient extends KustomerFullApiAppsGeneratedClient, KustomerFullApiArticlesGeneratedClient, KustomerFullApiArticlesPublicGeneratedClient, KustomerFullApiArticlesSchedulesGeneratedClient, KustomerFullApiArticlesVersioningAndLanguagesGeneratedClient, KustomerFullApiAttachmentsGeneratedClient, KustomerFullApiAuditLogsGeneratedClient, KustomerFullApiAuthSettingsGeneratedClient, KustomerFullApiAuthTokensGeneratedClient, KustomerFullApiAutomationsGeneratedClient, KustomerFullApiBrandsGeneratedClient, KustomerFullApiBulkOperationsGeneratedClient, KustomerFullApiBusinessSchedulesGeneratedClient, KustomerFullApiCardsGeneratedClient, KustomerFullApiCategoriesGeneratedClient, KustomerFullApiCategoriesInternalGeneratedClient, KustomerFullApiCategoriesPublicGeneratedClient, KustomerFullApiChatSettingsGeneratedClient, KustomerFullApiCompaniesGeneratedClient, KustomerFullApiCompaniesBulkGeneratedClient, KustomerFullApiConversationsGeneratedClient, KustomerFullApiConversationsBulkGeneratedClient, KustomerFullApiConversationsForwardsGeneratedClient, KustomerFullApiConversationsMessagesGeneratedClient, KustomerFullApiConversationsNotesGeneratedClient, KustomerFullApiConversationsTagsGeneratedClient, KustomerFullApiConversationsTimeGeneratedClient, KustomerFullApiCustomAttributesGeneratedClient, KustomerFullApiCustomersGeneratedClient, KustomerFullApiCustomersBulkGeneratedClient, KustomerFullApiCustomersConversationsGeneratedClient, KustomerFullApiCustomersDraftsGeneratedClient, KustomerFullApiCustomersEventsGeneratedClient, KustomerFullApiCustomersKObjectsGeneratedClient, KustomerFullApiCustomersMergesGeneratedClient, KustomerFullApiCustomersMessagesGeneratedClient, KustomerFullApiCustomersNotesGeneratedClient, KustomerFullApiCustomersUnmaskingWindowsGeneratedClient, KustomerFullApiDraftsGeneratedClient, KustomerFullApiDraftsAttachmentsGeneratedClient, KustomerFullApiEvaluationRunsGeneratedClient, KustomerFullApiEvaluationTestCaseResultsGeneratedClient, KustomerFullApiEvaluationTestCasesGeneratedClient, KustomerFullApiEvaluationsGeneratedClient, KustomerFullApiFormsGeneratedClient, KustomerFullApiForwardsAttachmentsGeneratedClient, KustomerFullApiHooksEmailHooksGeneratedClient, KustomerFullApiHooksFormHooksGeneratedClient, KustomerFullApiHooksWebHooksGeneratedClient, KustomerFullApiKlassesGeneratedClient, KustomerFullApiKnowledgeBasesGeneratedClient, KustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient, KustomerFullApiKObjectsCustomObjectsGeneratedClient, KustomerFullApiKObjectsCustomObjectsBulkGeneratedClient, KustomerFullApiKViewsKlassViewsGeneratedClient, KustomerFullApiMediaGeneratedClient, KustomerFullApiMessagesGeneratedClient, KustomerFullApiMessagesBulkGeneratedClient, KustomerFullApiMetricsGeneratedClient, KustomerFullApiNotesGeneratedClient, KustomerFullApiNotesBulkGeneratedClient, KustomerFullApiNotesConversationsGeneratedClient, KustomerFullApiNotificationsGeneratedClient, KustomerFullApiNotificationsLogsGeneratedClient, KustomerFullApiNotificationsSettingsGeneratedClient, KustomerFullApiOutboundWebHooksGeneratedClient, KustomerFullApiOutboundWebHooksTransactionsGeneratedClient, KustomerFullApiQueueRulesGeneratedClient, KustomerFullApiQueuesGeneratedClient, KustomerFullApiRoleGroupsGeneratedClient, KustomerFullApiRoutesGeneratedClient, KustomerFullApiRoutingUserStatusesGeneratedClient, KustomerFullApiSatisfactionGeneratedClient, KustomerFullApiSearchGeneratedClient, KustomerFullApiSearchFiltersGeneratedClient, KustomerFullApiSearchFiltersFoldersGeneratedClient, KustomerFullApiSearchFiltersPinnedGeneratedClient, KustomerFullApiSettingsGeneratedClient, KustomerFullApiSettingsSpecificUserGeneratedClient, KustomerFullApiShortcutsGeneratedClient, KustomerFullApiShortcutsCategoriesGeneratedClient, KustomerFullApiSLAsGeneratedClient, KustomerFullApiSnippetsGeneratedClient, KustomerFullApiSnoozesGeneratedClient, KustomerFullApiSpamGeneratedClient, KustomerFullApiSubStatusesGeneratedClient, KustomerFullApiSummariesGeneratedClient, KustomerFullApiTagsKnowledgeBaseGeneratedClient, KustomerFullApiTeamRoutingSettingsGeneratedClient, KustomerFullApiTeamsGeneratedClient, KustomerFullApiTeamsByIDGeneratedClient, KustomerFullApiTemplatesGeneratedClient, KustomerFullApiThemesGeneratedClient, KustomerFullApiThemesDraftsAndRevisionsGeneratedClient, KustomerFullApiThemesThemeFilesGeneratedClient, KustomerFullApiTrackingEventsGeneratedClient, KustomerFullApiUsersGeneratedClient, KustomerFullApiUsersByIDGeneratedClient, KustomerFullApiWorkItemsGeneratedClient, KustomerFullApiWorkSessionsGeneratedClient, KustomerFullApiWorkSessionsBySessionIDGeneratedClient, KustomerFullApiWorkSessionsCurrentGeneratedClient, KustomerFullApiWorkflowProcessesErrorsGeneratedClient, KustomerFullApiWorkflowVariablesGeneratedClient, KustomerFullApiWorkflowsGeneratedClient {}

export const KUSTOMER_FULL_API_GENERATED_FUNCTION_COUNT = 410 as const;
export const KUSTOMER_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...KustomerFullApiAppsGeneratedFunctionNames,
  ...KustomerFullApiArticlesGeneratedFunctionNames,
  ...KustomerFullApiArticlesPublicGeneratedFunctionNames,
  ...KustomerFullApiArticlesSchedulesGeneratedFunctionNames,
  ...KustomerFullApiArticlesVersioningAndLanguagesGeneratedFunctionNames,
  ...KustomerFullApiAttachmentsGeneratedFunctionNames,
  ...KustomerFullApiAuditLogsGeneratedFunctionNames,
  ...KustomerFullApiAuthSettingsGeneratedFunctionNames,
  ...KustomerFullApiAuthTokensGeneratedFunctionNames,
  ...KustomerFullApiAutomationsGeneratedFunctionNames,
  ...KustomerFullApiBrandsGeneratedFunctionNames,
  ...KustomerFullApiBulkOperationsGeneratedFunctionNames,
  ...KustomerFullApiBusinessSchedulesGeneratedFunctionNames,
  ...KustomerFullApiCardsGeneratedFunctionNames,
  ...KustomerFullApiCategoriesGeneratedFunctionNames,
  ...KustomerFullApiCategoriesInternalGeneratedFunctionNames,
  ...KustomerFullApiCategoriesPublicGeneratedFunctionNames,
  ...KustomerFullApiChatSettingsGeneratedFunctionNames,
  ...KustomerFullApiCompaniesGeneratedFunctionNames,
  ...KustomerFullApiCompaniesBulkGeneratedFunctionNames,
  ...KustomerFullApiConversationsGeneratedFunctionNames,
  ...KustomerFullApiConversationsBulkGeneratedFunctionNames,
  ...KustomerFullApiConversationsForwardsGeneratedFunctionNames,
  ...KustomerFullApiConversationsMessagesGeneratedFunctionNames,
  ...KustomerFullApiConversationsNotesGeneratedFunctionNames,
  ...KustomerFullApiConversationsTagsGeneratedFunctionNames,
  ...KustomerFullApiConversationsTimeGeneratedFunctionNames,
  ...KustomerFullApiCustomAttributesGeneratedFunctionNames,
  ...KustomerFullApiCustomersGeneratedFunctionNames,
  ...KustomerFullApiCustomersBulkGeneratedFunctionNames,
  ...KustomerFullApiCustomersConversationsGeneratedFunctionNames,
  ...KustomerFullApiCustomersDraftsGeneratedFunctionNames,
  ...KustomerFullApiCustomersEventsGeneratedFunctionNames,
  ...KustomerFullApiCustomersKObjectsGeneratedFunctionNames,
  ...KustomerFullApiCustomersMergesGeneratedFunctionNames,
  ...KustomerFullApiCustomersMessagesGeneratedFunctionNames,
  ...KustomerFullApiCustomersNotesGeneratedFunctionNames,
  ...KustomerFullApiCustomersUnmaskingWindowsGeneratedFunctionNames,
  ...KustomerFullApiDraftsGeneratedFunctionNames,
  ...KustomerFullApiDraftsAttachmentsGeneratedFunctionNames,
  ...KustomerFullApiEvaluationRunsGeneratedFunctionNames,
  ...KustomerFullApiEvaluationTestCaseResultsGeneratedFunctionNames,
  ...KustomerFullApiEvaluationTestCasesGeneratedFunctionNames,
  ...KustomerFullApiEvaluationsGeneratedFunctionNames,
  ...KustomerFullApiFormsGeneratedFunctionNames,
  ...KustomerFullApiForwardsAttachmentsGeneratedFunctionNames,
  ...KustomerFullApiHooksEmailHooksGeneratedFunctionNames,
  ...KustomerFullApiHooksFormHooksGeneratedFunctionNames,
  ...KustomerFullApiHooksWebHooksGeneratedFunctionNames,
  ...KustomerFullApiKlassesGeneratedFunctionNames,
  ...KustomerFullApiKnowledgeBasesGeneratedFunctionNames,
  ...KustomerFullApiKnowledgeBasesCustomDomainsGeneratedFunctionNames,
  ...KustomerFullApiKObjectsCustomObjectsGeneratedFunctionNames,
  ...KustomerFullApiKObjectsCustomObjectsBulkGeneratedFunctionNames,
  ...KustomerFullApiKViewsKlassViewsGeneratedFunctionNames,
  ...KustomerFullApiMediaGeneratedFunctionNames,
  ...KustomerFullApiMessagesGeneratedFunctionNames,
  ...KustomerFullApiMessagesBulkGeneratedFunctionNames,
  ...KustomerFullApiMetricsGeneratedFunctionNames,
  ...KustomerFullApiNotesGeneratedFunctionNames,
  ...KustomerFullApiNotesBulkGeneratedFunctionNames,
  ...KustomerFullApiNotesConversationsGeneratedFunctionNames,
  ...KustomerFullApiNotificationsGeneratedFunctionNames,
  ...KustomerFullApiNotificationsLogsGeneratedFunctionNames,
  ...KustomerFullApiNotificationsSettingsGeneratedFunctionNames,
  ...KustomerFullApiOutboundWebHooksGeneratedFunctionNames,
  ...KustomerFullApiOutboundWebHooksTransactionsGeneratedFunctionNames,
  ...KustomerFullApiQueueRulesGeneratedFunctionNames,
  ...KustomerFullApiQueuesGeneratedFunctionNames,
  ...KustomerFullApiRoleGroupsGeneratedFunctionNames,
  ...KustomerFullApiRoutesGeneratedFunctionNames,
  ...KustomerFullApiRoutingUserStatusesGeneratedFunctionNames,
  ...KustomerFullApiSatisfactionGeneratedFunctionNames,
  ...KustomerFullApiSearchGeneratedFunctionNames,
  ...KustomerFullApiSearchFiltersGeneratedFunctionNames,
  ...KustomerFullApiSearchFiltersFoldersGeneratedFunctionNames,
  ...KustomerFullApiSearchFiltersPinnedGeneratedFunctionNames,
  ...KustomerFullApiSettingsGeneratedFunctionNames,
  ...KustomerFullApiSettingsSpecificUserGeneratedFunctionNames,
  ...KustomerFullApiShortcutsGeneratedFunctionNames,
  ...KustomerFullApiShortcutsCategoriesGeneratedFunctionNames,
  ...KustomerFullApiSLAsGeneratedFunctionNames,
  ...KustomerFullApiSnippetsGeneratedFunctionNames,
  ...KustomerFullApiSnoozesGeneratedFunctionNames,
  ...KustomerFullApiSpamGeneratedFunctionNames,
  ...KustomerFullApiSubStatusesGeneratedFunctionNames,
  ...KustomerFullApiSummariesGeneratedFunctionNames,
  ...KustomerFullApiTagsKnowledgeBaseGeneratedFunctionNames,
  ...KustomerFullApiTeamRoutingSettingsGeneratedFunctionNames,
  ...KustomerFullApiTeamsGeneratedFunctionNames,
  ...KustomerFullApiTeamsByIDGeneratedFunctionNames,
  ...KustomerFullApiTemplatesGeneratedFunctionNames,
  ...KustomerFullApiThemesGeneratedFunctionNames,
  ...KustomerFullApiThemesDraftsAndRevisionsGeneratedFunctionNames,
  ...KustomerFullApiThemesThemeFilesGeneratedFunctionNames,
  ...KustomerFullApiTrackingEventsGeneratedFunctionNames,
  ...KustomerFullApiUsersGeneratedFunctionNames,
  ...KustomerFullApiUsersByIDGeneratedFunctionNames,
  ...KustomerFullApiWorkItemsGeneratedFunctionNames,
  ...KustomerFullApiWorkSessionsGeneratedFunctionNames,
  ...KustomerFullApiWorkSessionsBySessionIDGeneratedFunctionNames,
  ...KustomerFullApiWorkSessionsCurrentGeneratedFunctionNames,
  ...KustomerFullApiWorkflowProcessesErrorsGeneratedFunctionNames,
  ...KustomerFullApiWorkflowVariablesGeneratedFunctionNames,
  ...KustomerFullApiWorkflowsGeneratedFunctionNames,
] as const satisfies readonly (keyof KustomerFullApiGeneratedClient)[];

export function createKustomerFullApiGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiGeneratedClient {
  return Object.assign(
    {},
    createKustomerFullApiAppsGeneratedClient(callOperation),
    createKustomerFullApiArticlesGeneratedClient(callOperation),
    createKustomerFullApiArticlesPublicGeneratedClient(callOperation),
    createKustomerFullApiArticlesSchedulesGeneratedClient(callOperation),
    createKustomerFullApiArticlesVersioningAndLanguagesGeneratedClient(callOperation),
    createKustomerFullApiAttachmentsGeneratedClient(callOperation),
    createKustomerFullApiAuditLogsGeneratedClient(callOperation),
    createKustomerFullApiAuthSettingsGeneratedClient(callOperation),
    createKustomerFullApiAuthTokensGeneratedClient(callOperation),
    createKustomerFullApiAutomationsGeneratedClient(callOperation),
    createKustomerFullApiBrandsGeneratedClient(callOperation),
    createKustomerFullApiBulkOperationsGeneratedClient(callOperation),
    createKustomerFullApiBusinessSchedulesGeneratedClient(callOperation),
    createKustomerFullApiCardsGeneratedClient(callOperation),
    createKustomerFullApiCategoriesGeneratedClient(callOperation),
    createKustomerFullApiCategoriesInternalGeneratedClient(callOperation),
    createKustomerFullApiCategoriesPublicGeneratedClient(callOperation),
    createKustomerFullApiChatSettingsGeneratedClient(callOperation),
    createKustomerFullApiCompaniesGeneratedClient(callOperation),
    createKustomerFullApiCompaniesBulkGeneratedClient(callOperation),
    createKustomerFullApiConversationsGeneratedClient(callOperation),
    createKustomerFullApiConversationsBulkGeneratedClient(callOperation),
    createKustomerFullApiConversationsForwardsGeneratedClient(callOperation),
    createKustomerFullApiConversationsMessagesGeneratedClient(callOperation),
    createKustomerFullApiConversationsNotesGeneratedClient(callOperation),
    createKustomerFullApiConversationsTagsGeneratedClient(callOperation),
    createKustomerFullApiConversationsTimeGeneratedClient(callOperation),
    createKustomerFullApiCustomAttributesGeneratedClient(callOperation),
    createKustomerFullApiCustomersGeneratedClient(callOperation),
    createKustomerFullApiCustomersBulkGeneratedClient(callOperation),
    createKustomerFullApiCustomersConversationsGeneratedClient(callOperation),
    createKustomerFullApiCustomersDraftsGeneratedClient(callOperation),
    createKustomerFullApiCustomersEventsGeneratedClient(callOperation),
    createKustomerFullApiCustomersKObjectsGeneratedClient(callOperation),
    createKustomerFullApiCustomersMergesGeneratedClient(callOperation),
    createKustomerFullApiCustomersMessagesGeneratedClient(callOperation),
    createKustomerFullApiCustomersNotesGeneratedClient(callOperation),
    createKustomerFullApiCustomersUnmaskingWindowsGeneratedClient(callOperation),
    createKustomerFullApiDraftsGeneratedClient(callOperation),
    createKustomerFullApiDraftsAttachmentsGeneratedClient(callOperation),
    createKustomerFullApiEvaluationRunsGeneratedClient(callOperation),
    createKustomerFullApiEvaluationTestCaseResultsGeneratedClient(callOperation),
    createKustomerFullApiEvaluationTestCasesGeneratedClient(callOperation),
    createKustomerFullApiEvaluationsGeneratedClient(callOperation),
    createKustomerFullApiFormsGeneratedClient(callOperation),
    createKustomerFullApiForwardsAttachmentsGeneratedClient(callOperation),
    createKustomerFullApiHooksEmailHooksGeneratedClient(callOperation),
    createKustomerFullApiHooksFormHooksGeneratedClient(callOperation),
    createKustomerFullApiHooksWebHooksGeneratedClient(callOperation),
    createKustomerFullApiKlassesGeneratedClient(callOperation),
    createKustomerFullApiKnowledgeBasesGeneratedClient(callOperation),
    createKustomerFullApiKnowledgeBasesCustomDomainsGeneratedClient(callOperation),
    createKustomerFullApiKObjectsCustomObjectsGeneratedClient(callOperation),
    createKustomerFullApiKObjectsCustomObjectsBulkGeneratedClient(callOperation),
    createKustomerFullApiKViewsKlassViewsGeneratedClient(callOperation),
    createKustomerFullApiMediaGeneratedClient(callOperation),
    createKustomerFullApiMessagesGeneratedClient(callOperation),
    createKustomerFullApiMessagesBulkGeneratedClient(callOperation),
    createKustomerFullApiMetricsGeneratedClient(callOperation),
    createKustomerFullApiNotesGeneratedClient(callOperation),
    createKustomerFullApiNotesBulkGeneratedClient(callOperation),
    createKustomerFullApiNotesConversationsGeneratedClient(callOperation),
    createKustomerFullApiNotificationsGeneratedClient(callOperation),
    createKustomerFullApiNotificationsLogsGeneratedClient(callOperation),
    createKustomerFullApiNotificationsSettingsGeneratedClient(callOperation),
    createKustomerFullApiOutboundWebHooksGeneratedClient(callOperation),
    createKustomerFullApiOutboundWebHooksTransactionsGeneratedClient(callOperation),
    createKustomerFullApiQueueRulesGeneratedClient(callOperation),
    createKustomerFullApiQueuesGeneratedClient(callOperation),
    createKustomerFullApiRoleGroupsGeneratedClient(callOperation),
    createKustomerFullApiRoutesGeneratedClient(callOperation),
    createKustomerFullApiRoutingUserStatusesGeneratedClient(callOperation),
    createKustomerFullApiSatisfactionGeneratedClient(callOperation),
    createKustomerFullApiSearchGeneratedClient(callOperation),
    createKustomerFullApiSearchFiltersGeneratedClient(callOperation),
    createKustomerFullApiSearchFiltersFoldersGeneratedClient(callOperation),
    createKustomerFullApiSearchFiltersPinnedGeneratedClient(callOperation),
    createKustomerFullApiSettingsGeneratedClient(callOperation),
    createKustomerFullApiSettingsSpecificUserGeneratedClient(callOperation),
    createKustomerFullApiShortcutsGeneratedClient(callOperation),
    createKustomerFullApiShortcutsCategoriesGeneratedClient(callOperation),
    createKustomerFullApiSLAsGeneratedClient(callOperation),
    createKustomerFullApiSnippetsGeneratedClient(callOperation),
    createKustomerFullApiSnoozesGeneratedClient(callOperation),
    createKustomerFullApiSpamGeneratedClient(callOperation),
    createKustomerFullApiSubStatusesGeneratedClient(callOperation),
    createKustomerFullApiSummariesGeneratedClient(callOperation),
    createKustomerFullApiTagsKnowledgeBaseGeneratedClient(callOperation),
    createKustomerFullApiTeamRoutingSettingsGeneratedClient(callOperation),
    createKustomerFullApiTeamsGeneratedClient(callOperation),
    createKustomerFullApiTeamsByIDGeneratedClient(callOperation),
    createKustomerFullApiTemplatesGeneratedClient(callOperation),
    createKustomerFullApiThemesGeneratedClient(callOperation),
    createKustomerFullApiThemesDraftsAndRevisionsGeneratedClient(callOperation),
    createKustomerFullApiThemesThemeFilesGeneratedClient(callOperation),
    createKustomerFullApiTrackingEventsGeneratedClient(callOperation),
    createKustomerFullApiUsersGeneratedClient(callOperation),
    createKustomerFullApiUsersByIDGeneratedClient(callOperation),
    createKustomerFullApiWorkItemsGeneratedClient(callOperation),
    createKustomerFullApiWorkSessionsGeneratedClient(callOperation),
    createKustomerFullApiWorkSessionsBySessionIDGeneratedClient(callOperation),
    createKustomerFullApiWorkSessionsCurrentGeneratedClient(callOperation),
    createKustomerFullApiWorkflowProcessesErrorsGeneratedClient(callOperation),
    createKustomerFullApiWorkflowVariablesGeneratedClient(callOperation),
    createKustomerFullApiWorkflowsGeneratedClient(callOperation),
  ) as KustomerFullApiGeneratedClient;
}
