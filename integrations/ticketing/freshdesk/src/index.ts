export {
  createFreshworksFreshdeskProviderClient,
  createFreshworksFreshdeskSdkProviderClient,
  createFreshdeskRestProviderClient,
  createFreshdeskTicketingClient,
  createFreshdeskUnavailableClient,
  freshdeskApiBaseUrl,
} from "./client.js";
export type {
  FreshdeskJsonObject,
  FreshdeskJsonPrimitive,
  FreshdeskJsonRetryOptions,
  FreshdeskJsonValue,
  FreshdeskProviderPayload,
  FreshdeskTicketingClient,
  FreshdeskTicketingClientOptions,
  FreshdeskTicketingProviderClient,
  JsonObject,
  JsonPrimitive,
  JsonValue,
} from "./contracts.js";
export {
  createFreshdeskIntegration,
  createFreshdeskIntegrationOperationHandlers,
  createFreshdeskTicketingIntegration,
  createFreshdeskTicketingIntegrationOperationHandlers,
} from "./integration.js";
export { freshdeskTicketingProviderManifest } from "./manifest.js";
export {
  parseFreshdeskWebhookRequest,
  validateFreshdeskWebhookSecret,
} from "./webhooks.js";
export type { FreshdeskWebhookOptions } from "./webhooks.js";
