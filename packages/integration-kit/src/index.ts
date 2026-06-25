export {
  defineIntegration,
  defineIntegrationProviderPackage,
  createOperationBindingReport,
  isProviderNamespacedOperationAlias,
  providerOperationAliasNamespaces,
} from "./contracts.js";
export type {
  DefinedIntegration,
  DefineIntegrationInput,
  ExactIntegrationOperationHandlers,
  IntegrationOperationContext,
  IntegrationOperationHandler,
  IntegrationOperationHandlers,
  IntegrationProviderProfileAttachment,
  ManifestOperationAlias,
  OperationBindingReport,
  ProviderManifestAuthorInput,
  ProviderNamespacedOperationAlias,
} from "./contracts.js";

export {
  contactCenterCategoryProfile,
  contactCenterOperationAliasMap,
  ecommerceCategoryProfile,
  ecommerceOperationAliasMap,
  emailCategoryProfile,
  emailOperationAliasMap,
  getIntegrationCategoryProfile,
  handoffCategoryProfile,
  integrationCategoryOperationAliasMaps,
  integrationCategoryProfiles,
  integrationCategoryProfilesByCategory,
  messagingCategoryProfile,
  requireIntegrationCategoryProfile,
  smsCategoryProfile,
  smsOperationAliasMap,
  ticketingCategoryProfile,
  ticketingOperationAliasMap,
  voiceCategoryProfile,
  voiceOperationAliasMap,
  workplaceCategoryProfile,
  workplaceOperationAliasMap,
} from "./category-profiles.js";
export type {
  CategoryCoverageLevel,
  CategoryOperationAliasMap,
  ContactCenterOperationAlias,
  EcommerceOperationAlias,
  EmailOperationAlias,
  IntegrationCategoryProfile,
  IntegrationCategoryProfileId,
  OperationSchemaDescriptor,
  ProviderCapabilityCoverage,
  SmsOperationAlias,
  TicketingOperationAlias,
  VoiceOperationAlias,
  WorkplaceOperationAlias,
} from "./category-profiles.js";

export {
  IntegrationError,
  integrationErrorToJSON,
  normalizeIntegrationError,
} from "./errors.js";
export type {
  IntegrationErrorCode,
  IntegrationErrorContext,
  NormalizedIntegrationErrorShape,
} from "./errors.js";

export {
  assertIntegrationReady,
  credentialConfigured,
  credentialMissing,
  credentialNotRequired,
  credentialStatusesFromManifest,
  summarizeIntegrationReadiness,
} from "./readiness.js";
export type { IntegrationReadinessSummary } from "./readiness.js";

export {
  collectIntegrationPages,
  integrationPage,
} from "./pagination.js";
export type {
  CursorPaginationInput,
  IntegrationPage,
  OffsetPaginationInput,
  PageInfo,
} from "./pagination.js";

export {
  parsedWebhookEvent,
  rejectedWebhook,
  skippedWebhookVerification,
  verifiedWebhook,
} from "./webhooks.js";
export type {
  ParsedWebhookEvent,
  WebhookHandlerResult,
  WebhookVerificationResult,
  WebhookVerificationStatus,
} from "./webhooks.js";

export { createOperationInstrumentation } from "./instrumentation.js";
export type {
  IntegrationInstrumentationEvent,
  IntegrationInstrumentationHooks,
} from "./instrumentation.js";

export {
  providerJsonRequest,
  providerRequestUrl,
} from "./http.js";
export type {
  ProviderHttpMethod,
  ProviderJsonRequestInput,
  ProviderJsonRetryOptions,
  ProviderQueryValue,
} from "./http.js";

export type {
  CategoryDataSourceDeclaration,
  CategoryEventDeclaration,
  CategoryOperationDeclaration,
  CategoryOperationLevel,
  CategoryOutputDeclaration,
  ChannelCapabilityDeclaration,
  ProviderCredentialRequirement,
  ProviderCredentialStatus,
  ProviderCredentialStatusInput,
  ProviderManifest,
  ProviderManifestInput,
  ProviderOperationDeclaration,
  ProviderOperationDeclarationInput,
} from "@cognidesk/core";
