import { defineIntegrationProviderPackage as defineProviderPackage } from "@cognidesk/integration-kit";

export const whatsappWebMessagingProviderManifest = defineProviderPackage({
  id: "messaging.whatsapp-web",
  name: "WhatsApp Web Linked Device",
  packageName: "@cognidesk/integration-messaging-whatsapp",
  provider: "whatsapp-web",
  category: "messaging",
  trustLevel: "community",
  directions: ["send-only"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "local-protocol",
    notes: [
      "Sends WhatsApp text messages through a locally paired WhatsApp Web linked-device session.",
      "This adapter follows the same non-Business-API linked-device approach used by WhatsApp Web clients such as openclaw/wacli, but it does not shell out to the wacli binary.",
      "This adapter does not require a WhatsApp Business Account, Meta app, Cloud API token, or phone_number_id.",
      "This is not an official WhatsApp Business Platform integration; delivery, account limits, session health, and terms/compliance are owned by the SDK user.",
      "Inbound sync and local search are outside this initial send-only adapter scope.",
    ],
    evidence: [
      { label: "wacli GitHub", url: "https://github.com/openclaw/wacli" },
      { label: "Baileys introduction", url: "https://baileys.wiki/docs/intro/" },
      { label: "Baileys connecting", url: "https://baileys.wiki/docs/socket/connecting/" },
    ],
  },
  credentialRequirements: [
    {
      id: "whatsapp-web-auth-state",
      label: "WhatsApp Web auth state",
      description: "Local linked-device auth state directory used to reconnect to WhatsApp Web.",
      required: true,
    },
    {
      id: "whatsapp-web-linked-device-session",
      label: "WhatsApp linked-device session",
      description: "Pair the session from WhatsApp Linked Devices before sending messages.",
      required: true,
    },
    {
      id: "whatsapp-web-pairing-phone",
      label: "WhatsApp pairing phone",
      description: "Optional phone number used to request a WhatsApp Web pairing code instead of scanning a QR code.",
      required: false,
    },
  ],
  capabilities: [
    {
      capability: "send",
      label: "Send WhatsApp text messages via linked device",
      description: "Sends WhatsApp text messages through a locally authenticated WhatsApp Web linked-device session.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [{ kind: "whatsappWebMessage", label: "WhatsApp Web Message" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "provider-readiness",
      label: "Check WhatsApp Web session readiness",
      description: "Attempts to open the configured WhatsApp Web linked-device session.",
      audiences: ["internal-support"],
      providerObjects: [{ kind: "whatsappWebReadiness", label: "WhatsApp Web Readiness" }],
      requiresCredential: true,
      extension: true,
    },
  ],
  operations: [
    {
      alias: "whatsapp-web.message.send",
      capability: "send",
      providerObject: "whatsappWebMessage",
      providerOperation: "sendMessage",
      inputSchemaName: "WhatsAppWebSendTextInput",
      outputSchemaName: "WhatsAppWebSendTextResult",
      requiresCredential: true,
      sideEffect: true,
      externallyVisible: true,
      exposesSensitiveData: true,
      extension: true,
    },
    {
      alias: "whatsapp-web.readiness.check",
      capability: "provider-readiness",
      providerObject: "whatsappWebReadiness",
      providerOperation: "connect",
      outputSchemaName: "WhatsAppWebReadinessResult",
      requiresCredential: true,
      extension: true,
    },
  ],
  limits: [
    "Requires a previously paired WhatsApp linked-device session or an interactive first pairing.",
    "Only text sends are wrapped in this adapter; media, groups, sync, and search are outside the initial scope.",
    "Use with an account dedicated to automation or demos; do not link a personal inbox unless the operator understands the privacy and automation risk.",
  ],
  dataHandling: [
    "Outbound message text and recipient identifiers are sent through the local WhatsApp Web session.",
    "WhatsApp Web auth/session state is stored in the configured local auth state directory.",
  ],
  metadata: {
    implementationStrategy: "linked-device-websocket",
    protocol: "whatsapp-web-linked-device",
    runtimeLibrary: {
      name: "baileys",
      source: "WhiskeySockets/Baileys",
    },
  },
});
