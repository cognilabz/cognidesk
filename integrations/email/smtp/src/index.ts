export { smtpEmailProviderManifest } from "./manifest.js";
export { smtpEmailCredentialStatuses, type SmtpCredentialStatusInput } from "./credentials.js";
export {
  createSmtpEmailClient,
  createSmtpEmailIntegration,
  htmlEmailFromText,
  type SmtpEmailClient,
  type SmtpEmailClientOptions,
  type SmtpEmailDefaults,
  type SmtpEmailMessageInput,
  type SmtpEmailSendResult,
  type SmtpRawSendInfo,
  type SmtpRawTransport,
  type SmtpTransportAuth,
  type SmtpTransportOptions,
  type SmtpTransportReadiness,
} from "./client.js";
