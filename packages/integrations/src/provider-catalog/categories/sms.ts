import type { IntegrationProviderReference } from "../types.js";

export const smsProviderReferences = [
  {
    "id": "sms.twilio",
    "category": "sms",
    "provider": "twilio",
    "importPath": "@cognidesk/integrations/sms/twilio",
    "modulePath": "./sms/twilio/index.js",
    "manifestExport": "twilioSmsProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
