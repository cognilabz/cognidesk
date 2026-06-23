import type { IntegrationProviderReference } from "../types.js";

export const emailProviderReferences = [
  {
    "id": "email.imap",
    "category": "email",
    "provider": "imap",
    "importPath": "@cognidesk/integrations/email/imap",
    "modulePath": "./email/imap/index.js",
    "manifestExport": "imapEmailProviderManifest"
  },
  {
    "id": "email.mailgun",
    "category": "email",
    "provider": "mailgun",
    "importPath": "@cognidesk/integrations/email/mailgun",
    "modulePath": "./email/mailgun/index.js",
    "manifestExport": "mailgunEmailProviderManifest"
  },
  {
    "id": "email.outlook",
    "category": "email",
    "provider": "outlook",
    "importPath": "@cognidesk/integration-email-outlook/manifest",
    "modulePath": "./email/outlook/manifest.js",
    "manifestExport": "outlookEmailProviderManifest"
  },
  {
    "id": "email.postmark",
    "category": "email",
    "provider": "postmark",
    "importPath": "@cognidesk/integrations/email/postmark",
    "modulePath": "./email/postmark/index.js",
    "manifestExport": "postmarkEmailProviderManifest"
  },
  {
    "id": "email.ses",
    "category": "email",
    "provider": "ses",
    "importPath": "@cognidesk/integrations/email/ses",
    "modulePath": "./email/ses/index.js",
    "manifestExport": "sesEmailProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
