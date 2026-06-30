# integrations/messaging/whatsapp/dist/manifest

## Variables

### whatsappMessagingProviderManifest

```ts
const whatsappMessagingProviderManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: Record<string, unknown>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "mixed" | "internal-support")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official" | "community" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "mixed" | "internal-support";
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: Record<string, unknown>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validates and parses WhatsApp Business Platform webhook payloads after the SDK user's Meta app is subscribed to the WABA messages webhook.";
     exposesSensitiveData: true;
     label: "Receive WhatsApp webhooks";
     providerObjects: readonly [{
        kind: "whatsappWebhook";
        label: "WhatsApp Webhook";
      }, {
        kind: "whatsappMessage";
        label: "WhatsApp Message";
      }, {
        kind: "whatsappStatus";
        label: "WhatsApp Message Status";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends WhatsApp messages through the configured Graph API adapter or provider client when SDK-user policy permits outbound contact: free-form service messages inside the customer service window or approved templates outside it.";
     exposesSensitiveData: true;
     label: "Send WhatsApp messages";
     providerObjects: readonly [{
        kind: "whatsappMessage";
        label: "WhatsApp Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds Cloud API message request payloads for SDK-user-configured approval workflows.";
     exposesSensitiveData: true;
     label: "Build WhatsApp message payloads";
     providerObjects: readonly [{
        kind: "whatsappMessageDraft";
        label: "WhatsApp Message Draft";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "media";
     description: "Uploads media, reads media metadata, and downloads media bytes through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     label: "Use WhatsApp media";
     providerObjects: readonly [{
        kind: "whatsappMedia";
        label: "WhatsApp Media";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "attach";
     description: "References uploaded WhatsApp media IDs in outbound messages selected by SDK configuration.";
     exposesSensitiveData: true;
     label: "Attach WhatsApp media";
     providerObjects: readonly [{
        kind: "whatsappMedia";
        label: "WhatsApp Media";
      }, {
        kind: "whatsappMessage";
        label: "WhatsApp Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads WhatsApp Business phone-number readiness and business profile resources through the configured Graph API adapter or provider client for Studio-visible configuration and support diagnostics.";
     exposesSensitiveData: true;
     label: "Read WhatsApp phone number and profile";
     providerObjects: readonly [{
        kind: "whatsappPhoneNumber";
        label: "WhatsApp Business Phone Number";
      }, {
        kind: "whatsappBusinessProfile";
        label: "WhatsApp Business Profile";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user configuration permits profile changes.";
     exposesSensitiveData: true;
     label: "Update WhatsApp business profile";
     providerObjects: readonly [{
        kind: "whatsappBusinessProfile";
        label: "WhatsApp Business Profile";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "whatsapp.webhook-signature";
     description: "Validates Meta X-Hub-Signature-256 webhook signatures with the SDK user's app secret.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate WhatsApp webhook signatures";
     providerObjects: readonly [{
        kind: "whatsappSignedWebhook";
        label: "WhatsApp Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "messaging";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "WhatsApp Cloud API get started";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started";
      }, {
        label: "WhatsApp template fundamentals";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview";
      }, {
        label: "WhatsApp media";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media/";
      }, {
        label: "WhatsApp business profiles";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/business-profiles";
      }, {
        label: "WhatsApp business phone numbers";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers";
      }, {
        label: "WhatsApp webhooks";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/";
      }, {
        label: "WhatsApp permissions";
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions/";
     }];
     notes: readonly ["Coverage is typed for selected WhatsApp Business Platform support workflows: provider REST adapter message sends, template payload construction, media upload/get/download, phone-number readiness, business profile get/update, webhook challenge handling, and X-Hub-Signature-256 validation.", "This is not full WhatsApp Business Platform coverage; template CRUD/listing, Flows, commerce, Calling API, groups, phone-number registration and management, WABA account management, analytics, and broader Business Management APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Meta access token used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client.";
     id: "whatsapp-access-token";
     label: "WhatsApp Business access token";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["whatsapp_business_messaging", "whatsapp_business_management"];
   }, {
     description: "Meta phone_number_id used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client.";
     id: "whatsapp-phone-number-id";
     label: "WhatsApp Business phone number ID";
     required: true;
   }, {
     description: "Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries.";
     id: "whatsapp-app-secret";
     label: "Meta app secret";
     required: true;
   }, {
     description: "SDK-user-owned token checked during Meta webhook endpoint verification.";
     id: "whatsapp-webhook-verify-token";
     label: "Webhook verify token";
     required: false;
   }, {
     description: "SDK-user-confirmed Meta app subscription to the WhatsApp Business Account messages webhook field.";
     id: "whatsapp-waba-webhook-subscription";
     label: "WhatsApp WABA messages webhook subscription";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "messaging.whatsapp";
  limitations: readonly ["Available operations depend on the SDK user's Meta app, WhatsApp Business Account, phone number registration, WABA messages webhook subscription, access token scopes, business verification, templates, quality limits, and messaging windows.", "Free-form WhatsApp service messages are for the customer service window; SDK users must select approved templates for outbound contact outside that window.", "Opt-in, outbound-contact policy, template selection, human escalation, media retention, redaction, and deletion behavior are SDK-user configuration.", "This package provides a built-in Graph API REST adapter when accessToken and phoneNumberId are configured; hosts may still inject an approved WhatsApp/Meta provider client and own automation, promotional messaging, consent, retry, and rate-limit policies."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-18";
        fullMetaGraphCoverage: false;
        fullProviderApi: false;
        generatedFromOfficialSpec: true;
        implementedOperationCount: 7;
        operationCatalog: "docs/provider-coverage/whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json";
        selectedOperationCount: 7;
        sourceOperationCount: 113;
        sourcePathCount: 78;
        sourceSpec: "https://raw.githubusercontent.com/facebook/openapi/main/business-messaging-api_v23.0.yaml";
     };
     channelCoverage: {
        businessProfile: "provider-rest-adapter-read-update";
        cloudApiMessages: "provider-rest-adapter-send";
        flowsCommerceCallingGroups: "provider-supported-not-typed";
        media: "provider-rest-adapter-upload-get-download";
        phoneNumberReadiness: "provider-rest-adapter-read";
        templateCrud: "provider-supported-not-typed";
        templatePayloads: "typed-build-only";
        webhooks: "typed-challenge-verify-parse";
     };
     implementation: {
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        officialMaintainedServerSdkAvailable: false;
        packageOwnedRestClient: true;
        providerClient: "WhatsAppMessagingProviderClient";
        runtimePackage: "@cognidesk/integration-messaging-whatsapp/runtime";
        sdkDecision: {
           checkedAt: "2026-06-25";
           rejectedSdkPackages: readonly [{
              packageName: "whatsapp";
              reason: "Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only.";
            }, {
              packageName: "facebook-nodejs-business-sdk";
              reason: "Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client.";
           }];
           result: "no-maintained-official-sdk-rest-adapter-selected";
        };
        strategy: "no-official-maintained-server-sdk-rest-adapter";
        verifiedAt: "2026-06-25";
     };
     providerClient: {
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        importPolicy: "provider-client-override-supported";
        interface: "WhatsAppMessagingProviderClient";
        package: "built-in-or-host-provided";
        sdkDecision: {
           checkedAt: "2026-06-25";
           rejectedSdkPackages: readonly [{
              packageName: "whatsapp";
              reason: "Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only.";
            }, {
              packageName: "facebook-nodejs-business-sdk";
              reason: "Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client.";
           }];
           result: "no-maintained-official-sdk-rest-adapter-selected";
        };
     };
  };
  name: "WhatsApp Business Platform";
  operations: readonly [{
     alias: "messaging.message.receive";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validate and parse an inbound WhatsApp Business Platform webhook request.";
     exposesSensitiveData: true;
     label: "Normalize inbound WhatsApp webhook";
     providerObject: "messagingMessage";
     providerOperation: "parseWhatsAppWebhook";
     requiresCredential: true;
   }, {
     alias: "messaging.message.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send a WhatsApp message through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send WhatsApp message";
     providerObject: "messagingMessage";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messaging.template.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Send an SDK-user-selected approved WhatsApp message template.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send WhatsApp template";
     providerObject: "messagingTemplate";
     providerOperation: "sendMessage";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "messaging.draft.create";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Build a WhatsApp Cloud API message payload for review or later send.";
     exposesSensitiveData: true;
     label: "Build WhatsApp message payload";
     providerObject: "messagingMessage";
     providerOperation: "buildMessagePayload";
   }, {
     alias: "messaging.media.send";
     audiences: readonly ["customer-facing", "mixed"];
     capability: "attach";
     description: "Upload media for use in WhatsApp messages through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Upload WhatsApp media";
     providerObject: "mediaAttachment";
     providerOperation: "uploadMedia";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "whatsapp.phoneNumber.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read WhatsApp Business phone-number readiness metadata through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read WhatsApp phone number";
     providerObject: "whatsappPhoneNumber";
     providerOperation: "getPhoneNumber";
     requiresCredential: true;
   }, {
     alias: "whatsapp.businessProfile.read";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Read WhatsApp Business profile fields for support diagnostics through the configured Graph API adapter or provider client.";
     exposesSensitiveData: true;
     extension: true;
     label: "Read WhatsApp business profile";
     providerObject: "whatsappBusinessProfile";
     providerOperation: "getBusinessProfile";
     requiresCredential: true;
   }, {
     alias: "whatsapp.businessProfile.update";
     audiences: readonly ["internal-support"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Update WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user policy permits.";
     exposesSensitiveData: true;
     extension: true;
     label: "Update WhatsApp business profile";
     providerObject: "whatsappBusinessProfile";
     providerOperation: "updateBusinessProfile";
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "whatsapp.webhook-signature";
     audiences: readonly ["internal-support"];
     capability: "whatsapp.webhook-signature";
     description: "Validate Meta X-Hub-Signature-256 for WhatsApp webhook delivery.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate WhatsApp webhook signature";
     providerObject: "whatsappSignedWebhook";
     providerOperation: "validateWhatsAppWebhookSignature";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-messaging-whatsapp";
  privacyNotes: readonly ["WhatsApp messages, contact identifiers, phone numbers, profile names, media metadata, message statuses, and webhook payloads can contain customer data.", "Meta access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as credential readiness."];
  provider: "whatsapp";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses WhatsApp Business Platform webhook payloads after the SDK user's Meta app is subscribed to the WABA messages webhook."`; `exposesSensitiveData`: `true`; `label`: `"Receive WhatsApp webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappWebhook"`; `label`: `"WhatsApp Webhook"`; \}, \{ `kind`: `"whatsappMessage"`; `label`: `"WhatsApp Message"`; \}, \{ `kind`: `"whatsappStatus"`; `label`: `"WhatsApp Message Status"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends WhatsApp messages through the configured Graph API adapter or provider client when SDK-user policy permits outbound contact: free-form service messages inside the customer service window or approved templates outside it."`; `exposesSensitiveData`: `true`; `label`: `"Send WhatsApp messages"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappMessage"`; `label`: `"WhatsApp Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds Cloud API message request payloads for SDK-user-configured approval workflows."`; `exposesSensitiveData`: `true`; `label`: `"Build WhatsApp message payloads"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappMessageDraft"`; `label`: `"WhatsApp Message Draft"`; \}\]; `requiresCredential`: `false`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"media"`; `description`: `"Uploads media, reads media metadata, and downloads media bytes through the configured Graph API adapter or provider client."`; `exposesSensitiveData`: `true`; `label`: `"Use WhatsApp media"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappMedia"`; `label`: `"WhatsApp Media"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"attach"`; `description`: `"References uploaded WhatsApp media IDs in outbound messages selected by SDK configuration."`; `exposesSensitiveData`: `true`; `label`: `"Attach WhatsApp media"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappMedia"`; `label`: `"WhatsApp Media"`; \}, \{ `kind`: `"whatsappMessage"`; `label`: `"WhatsApp Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads WhatsApp Business phone-number readiness and business profile resources through the configured Graph API adapter or provider client for Studio-visible configuration and support diagnostics."`; `exposesSensitiveData`: `true`; `label`: `"Read WhatsApp phone number and profile"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappPhoneNumber"`; `label`: `"WhatsApp Business Phone Number"`; \}, \{ `kind`: `"whatsappBusinessProfile"`; `label`: `"WhatsApp Business Profile"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user configuration permits profile changes."`; `exposesSensitiveData`: `true`; `label`: `"Update WhatsApp business profile"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappBusinessProfile"`; `label`: `"WhatsApp Business Profile"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"whatsapp.webhook-signature"`; `description`: `"Validates Meta X-Hub-Signature-256 webhook signatures with the SDK user's app secret."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate WhatsApp webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"whatsappSignedWebhook"`; `label`: `"WhatsApp Signed Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"messaging"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"WhatsApp Cloud API get started"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started"`; \}, \{ `label`: `"WhatsApp template fundamentals"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview"`; \}, \{ `label`: `"WhatsApp media"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media/"`; \}, \{ `label`: `"WhatsApp business profiles"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/business-profiles"`; \}, \{ `label`: `"WhatsApp business phone numbers"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers"`; \}, \{ `label`: `"WhatsApp webhooks"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/"`; \}, \{ `label`: `"WhatsApp permissions"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions/"`; \}\]; `notes`: readonly \[`"Coverage is typed for selected WhatsApp Business Platform support workflows: provider REST adapter message sends, template payload construction, media upload/get/download, phone-number readiness, business profile get/update, webhook challenge handling, and X-Hub-Signature-256 validation."`, `"This is not full WhatsApp Business Platform coverage; template CRUD/listing, Flows, commerce, Calling API, groups, phone-number registration and management, WABA account management, analytics, and broader Business Management APIs remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"WhatsApp Cloud API get started"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started"`; \}, \{ `label`: `"WhatsApp template fundamentals"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview"`; \}, \{ `label`: `"WhatsApp media"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media/"`; \}, \{ `label`: `"WhatsApp business profiles"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/business-profiles"`; \}, \{ `label`: `"WhatsApp business phone numbers"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers"`; \}, \{ `label`: `"WhatsApp webhooks"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/"`; \}, \{ `label`: `"WhatsApp permissions"`; `url`: `"https://developers.facebook.com/documentation/business-messaging/whatsapp/permissions/"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for selected WhatsApp Business Platform support workflows: provider REST adapter message sends, template payload construction, media upload/get/download, phone-number readiness, business profile get/update, webhook challenge handling, and X-Hub-Signature-256 validation."`, `"This is not full WhatsApp Business Platform coverage; template CRUD/listing, Flows, commerce, Calling API, groups, phone-number registration and management, WABA account management, analytics, and broader Business Management APIs remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side Meta access token used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client."`; `id`: `"whatsapp-access-token"`; `label`: `"WhatsApp Business access token"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"whatsapp_business_messaging"`, `"whatsapp_business_management"`\]; \}, \{ `description`: `"Meta phone_number_id used by the built-in Graph API adapter or an injected WhatsApp/Meta provider client."`; `id`: `"whatsapp-phone-number-id"`; `label`: `"WhatsApp Business phone number ID"`; `required`: `true`; \}, \{ `description`: `"Server-side app secret used to validate X-Hub-Signature-256 webhook deliveries."`; `id`: `"whatsapp-app-secret"`; `label`: `"Meta app secret"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned token checked during Meta webhook endpoint verification."`; `id`: `"whatsapp-webhook-verify-token"`; `label`: `"Webhook verify token"`; `required`: `false`; \}, \{ `description`: `"SDK-user-confirmed Meta app subscription to the WhatsApp Business Account messages webhook field."`; `id`: `"whatsapp-waba-webhook-subscription"`; `label`: `"WhatsApp WABA messages webhook subscription"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"messaging.whatsapp"` |
| `limitations` | readonly \[`"Available operations depend on the SDK user's Meta app, WhatsApp Business Account, phone number registration, WABA messages webhook subscription, access token scopes, business verification, templates, quality limits, and messaging windows."`, `"Free-form WhatsApp service messages are for the customer service window; SDK users must select approved templates for outbound contact outside that window."`, `"Opt-in, outbound-contact policy, template selection, human escalation, media retention, redaction, and deletion behavior are SDK-user configuration."`, `"This package provides a built-in Graph API REST adapter when accessToken and phoneNumberId are configured; hosts may still inject an approved WhatsApp/Meta provider client and own automation, promotional messaging, consent, retry, and rate-limit policies."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `checkedAt`: `"2026-06-18"`; `fullMetaGraphCoverage`: `false`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `true`; `implementedOperationCount`: `7`; `operationCatalog`: `"docs/provider-coverage/whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `7`; `sourceOperationCount`: `113`; `sourcePathCount`: `78`; `sourceSpec`: `"https://raw.githubusercontent.com/facebook/openapi/main/business-messaging-api_v23.0.yaml"`; \}; `channelCoverage`: \{ `businessProfile`: `"provider-rest-adapter-read-update"`; `cloudApiMessages`: `"provider-rest-adapter-send"`; `flowsCommerceCallingGroups`: `"provider-supported-not-typed"`; `media`: `"provider-rest-adapter-upload-get-download"`; `phoneNumberReadiness`: `"provider-rest-adapter-read"`; `templateCrud`: `"provider-supported-not-typed"`; `templatePayloads`: `"typed-build-only"`; `webhooks`: `"typed-challenge-verify-parse"`; \}; `implementation`: \{ `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `officialMaintainedServerSdkAvailable`: `false`; `packageOwnedRestClient`: `true`; `providerClient`: `"WhatsAppMessagingProviderClient"`; `runtimePackage`: `"@cognidesk/integration-messaging-whatsapp/runtime"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\]; `result`: `"no-maintained-official-sdk-rest-adapter-selected"`; \}; `strategy`: `"no-official-maintained-server-sdk-rest-adapter"`; `verifiedAt`: `"2026-06-25"`; \}; `providerClient`: \{ `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"WhatsAppMessagingProviderClient"`; `package`: `"built-in-or-host-provided"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\]; `result`: `"no-maintained-official-sdk-rest-adapter-selected"`; \}; \}; \} |
| `metadata.apiCoverage` | \{ `checkedAt`: `"2026-06-18"`; `fullMetaGraphCoverage`: `false`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `true`; `implementedOperationCount`: `7`; `operationCatalog`: `"docs/provider-coverage/whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json"`; `selectedOperationCount`: `7`; `sourceOperationCount`: `113`; `sourcePathCount`: `78`; `sourceSpec`: `"https://raw.githubusercontent.com/facebook/openapi/main/business-messaging-api_v23.0.yaml"`; \} |
| `metadata.apiCoverage.checkedAt` | `"2026-06-18"` |
| `metadata.apiCoverage.fullMetaGraphCoverage` | `false` |
| `metadata.apiCoverage.fullProviderApi` | `false` |
| `metadata.apiCoverage.generatedFromOfficialSpec` | `true` |
| `metadata.apiCoverage.implementedOperationCount` | `7` |
| `metadata.apiCoverage.operationCatalog` | `"docs/provider-coverage/whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json"` |
| `metadata.apiCoverage.selectedOperationCount` | `7` |
| `metadata.apiCoverage.sourceOperationCount` | `113` |
| `metadata.apiCoverage.sourcePathCount` | `78` |
| `metadata.apiCoverage.sourceSpec` | `"https://raw.githubusercontent.com/facebook/openapi/main/business-messaging-api_v23.0.yaml"` |
| `metadata.channelCoverage` | \{ `businessProfile`: `"provider-rest-adapter-read-update"`; `cloudApiMessages`: `"provider-rest-adapter-send"`; `flowsCommerceCallingGroups`: `"provider-supported-not-typed"`; `media`: `"provider-rest-adapter-upload-get-download"`; `phoneNumberReadiness`: `"provider-rest-adapter-read"`; `templateCrud`: `"provider-supported-not-typed"`; `templatePayloads`: `"typed-build-only"`; `webhooks`: `"typed-challenge-verify-parse"`; \} |
| `metadata.channelCoverage.businessProfile` | `"provider-rest-adapter-read-update"` |
| `metadata.channelCoverage.cloudApiMessages` | `"provider-rest-adapter-send"` |
| `metadata.channelCoverage.flowsCommerceCallingGroups` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.media` | `"provider-rest-adapter-upload-get-download"` |
| `metadata.channelCoverage.phoneNumberReadiness` | `"provider-rest-adapter-read"` |
| `metadata.channelCoverage.templateCrud` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.templatePayloads` | `"typed-build-only"` |
| `metadata.channelCoverage.webhooks` | `"typed-challenge-verify-parse"` |
| `metadata.implementation` | \{ `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `officialMaintainedServerSdkAvailable`: `false`; `packageOwnedRestClient`: `true`; `providerClient`: `"WhatsAppMessagingProviderClient"`; `runtimePackage`: `"@cognidesk/integration-messaging-whatsapp/runtime"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\]; `result`: `"no-maintained-official-sdk-rest-adapter-selected"`; \}; `strategy`: `"no-official-maintained-server-sdk-rest-adapter"`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.defaultClientPolicy` | `"provider-rest-adapter-when-configured"` |
| `metadata.implementation.officialMaintainedServerSdkAvailable` | `false` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerClient` | `"WhatsAppMessagingProviderClient"` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-messaging-whatsapp/runtime"` |
| `metadata.implementation.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\]; `result`: `"no-maintained-official-sdk-rest-adapter-selected"`; \} |
| `metadata.implementation.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.sdkDecision.rejectedSdkPackages` | readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\] |
| `metadata.implementation.sdkDecision.result` | `"no-maintained-official-sdk-rest-adapter-selected"` |
| `metadata.implementation.strategy` | `"no-official-maintained-server-sdk-rest-adapter"` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `interface`: `"WhatsAppMessagingProviderClient"`; `package`: `"built-in-or-host-provided"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\]; `result`: `"no-maintained-official-sdk-rest-adapter-selected"`; \}; \} |
| `metadata.providerClient.defaultClientPolicy` | `"provider-rest-adapter-when-configured"` |
| `metadata.providerClient.importPolicy` | `"provider-client-override-supported"` |
| `metadata.providerClient.interface` | `"WhatsAppMessagingProviderClient"` |
| `metadata.providerClient.package` | `"built-in-or-host-provided"` |
| `metadata.providerClient.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\]; `result`: `"no-maintained-official-sdk-rest-adapter-selected"`; \} |
| `metadata.providerClient.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerClient.sdkDecision.rejectedSdkPackages` | readonly \[\{ `packageName`: `"whatsapp"`; `reason`: `"Official Meta WhatsApp Business Platform Node.js SDK for Cloud API, but the upstream repository and documentation mark the project archived/read-only."`; \}, \{ `packageName`: `"facebook-nodejs-business-sdk"`; `reason`: `"Official Meta Business SDK for broader Graph/Marketing API surfaces, not a maintained WhatsApp Cloud API messaging client."`; \}\] |
| `metadata.providerClient.sdkDecision.result` | `"no-maintained-official-sdk-rest-adapter-selected"` |
| `name` | `"WhatsApp Business Platform"` |
| `operations` | readonly \[\{ `alias`: `"messaging.message.receive"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validate and parse an inbound WhatsApp Business Platform webhook request."`; `exposesSensitiveData`: `true`; `label`: `"Normalize inbound WhatsApp webhook"`; `providerObject`: `"messagingMessage"`; `providerOperation`: `"parseWhatsAppWebhook"`; `requiresCredential`: `true`; \}, \{ `alias`: `"messaging.message.send"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Send a WhatsApp message through the configured Graph API adapter or provider client."`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send WhatsApp message"`; `providerObject`: `"messagingMessage"`; `providerOperation`: `"sendMessage"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"messaging.template.send"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Send an SDK-user-selected approved WhatsApp message template."`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send WhatsApp template"`; `providerObject`: `"messagingTemplate"`; `providerOperation`: `"sendMessage"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"messaging.draft.create"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Build a WhatsApp Cloud API message payload for review or later send."`; `exposesSensitiveData`: `true`; `label`: `"Build WhatsApp message payload"`; `providerObject`: `"messagingMessage"`; `providerOperation`: `"buildMessagePayload"`; \}, \{ `alias`: `"messaging.media.send"`; `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"attach"`; `description`: `"Upload media for use in WhatsApp messages through the configured Graph API adapter or provider client."`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Upload WhatsApp media"`; `providerObject`: `"mediaAttachment"`; `providerOperation`: `"uploadMedia"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"whatsapp.phoneNumber.read"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read WhatsApp Business phone-number readiness metadata through the configured Graph API adapter or provider client."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read WhatsApp phone number"`; `providerObject`: `"whatsappPhoneNumber"`; `providerOperation`: `"getPhoneNumber"`; `requiresCredential`: `true`; \}, \{ `alias`: `"whatsapp.businessProfile.read"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Read WhatsApp Business profile fields for support diagnostics through the configured Graph API adapter or provider client."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read WhatsApp business profile"`; `providerObject`: `"whatsappBusinessProfile"`; `providerOperation`: `"getBusinessProfile"`; `requiresCredential`: `true`; \}, \{ `alias`: `"whatsapp.businessProfile.update"`; `audiences`: readonly \[`"internal-support"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Update WhatsApp Business profile fields through the configured Graph API adapter or provider client when SDK-user policy permits."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Update WhatsApp business profile"`; `providerObject`: `"whatsappBusinessProfile"`; `providerOperation`: `"updateBusinessProfile"`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"whatsapp.webhook-signature"`; `audiences`: readonly \[`"internal-support"`\]; `capability`: `"whatsapp.webhook-signature"`; `description`: `"Validate Meta X-Hub-Signature-256 for WhatsApp webhook delivery."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate WhatsApp webhook signature"`; `providerObject`: `"whatsappSignedWebhook"`; `providerOperation`: `"validateWhatsAppWebhookSignature"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-messaging-whatsapp"` |
| `privacyNotes` | readonly \[`"WhatsApp messages, contact identifiers, phone numbers, profile names, media metadata, message statuses, and webhook payloads can contain customer data."`, `"Meta access tokens, app secrets, and webhook verify tokens stay server-side and are represented in Studio only as credential readiness."`\] |
| `provider` | `"whatsapp"` |
| `trustLevel` | `"official"` |
