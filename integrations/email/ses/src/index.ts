export { sesEmailProviderManifest } from "./manifest.js";
export { sesEmailCredentialStatuses, type SesCredentialStatusInput } from "./credentials.js";
export {
  createSesEmailClient,
  createSesEmailIntegration,
  createSesEmailLiveChecks,
  type SesEmailClient,
  type SesEmailClientOptions,
  type SesRawClients,
} from "./client.js";
export {
  parseSesSnsNotification,
  parseSesSqsRecord,
  type ParsedSesSnsNotification,
  type ParseSesSnsNotificationOptions,
  type SesSnsNotification,
} from "./sns.js";
