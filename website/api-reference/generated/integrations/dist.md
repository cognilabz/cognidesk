# integrations/dist

## Interfaces

### IntegrationProviderProfileAttachment

#### Properties

##### conformant

```ts
conformant: boolean;
```

##### coverage

```ts
coverage: "full" | "partial" | "standard";
```

##### extensionOperations

```ts
extensionOperations: string[];
```

##### id

```ts
id: string;
```

##### matchedOperations

```ts
matchedOperations: string[];
```

##### missingOptionalOperations

```ts
missingOptionalOperations: string[];
```

##### missingRecommendedOperations

```ts
missingRecommendedOperations: string[];
```

##### missingRequiredOperations

```ts
missingRequiredOperations: string[];
```

***

### IntegrationProviderReference

#### Properties

##### category

```ts
category: string;
```

##### id

```ts
id: string;
```

##### importPath

```ts
importPath: string;
```

##### manifestExport

```ts
manifestExport: string;
```

##### modulePath

```ts
modulePath: string;
```

##### provider

```ts
provider: string;
```

***

### IntegrationProviderRuntimeLoaderRegistration

#### Properties

##### id

```ts
id: string;
```

##### load

```ts
load: IntegrationProviderRuntimeLoader;
```

***

### IntegrationProviderRuntimeRegistry

#### Methods

##### has()

```ts
has(idOrReference): boolean;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrReference` | \| `string` \| [`IntegrationProviderReference`](#integrationproviderreference) |

###### Returns

`boolean`

##### loadProviderIntegration()

```ts
loadProviderIntegration(idOrReference): Promise<IntegrationProviderModule>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrReference` | \| `string` \| [`IntegrationProviderReference`](#integrationproviderreference) |

###### Returns

`Promise`\<[`IntegrationProviderModule`](#integrationprovidermodule)\>

##### loadProviderIntegrationManifest()

```ts
loadProviderIntegrationManifest(idOrReference): Promise<{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  trustLevel: "community" | "official" | "verified" | "experimental";
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrReference` | \| `string` \| [`IntegrationProviderReference`](#integrationproviderreference) |

###### Returns

`Promise`\<\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
        `schemaName?`: `string`;
     \}[];
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `category`: `string`;
  `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
  `coverage`: \{
     `evidence`: \{
        `label`: `string`;
        `url?`: `string`;
     \}[];
     `notes`: `string`[];
     `scope`:   \| `"support-workflow-subset"`
        \| `"provider-api-subset"`
        \| `"connector-required"`
        \| `"local-protocol"`
        \| `"full-provider-api"`;
  \};
  `credentialRequirements`: \{
     `description?`: `string`;
     `id`: `string`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `required`: `boolean`;
     `scopes`: `string`[];
  \}[];
  `directions`: (
     \| `"receive-only"`
     \| `"send-only"`
     \| `"inbound-only"`
     \| `"outbound-only"`
    \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations`: `string`[];
  `maintainers`: \{
     `name`: `string`;
     `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
     `url?`: `string`;
  \}[];
  `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
  `name`: `string`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension`: `boolean`;
     `externallyVisible?`: `boolean`;
     `inputSchema?`: `unknown`;
     `inputSchemaName?`: `string`;
     `inputSchemaRef?`: `string`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
        `schemaName?`: `string`;
     \}[];
     `providerOperation?`: `string`;
     `requiredPolicyIds?`: `string`[];
     `requiresApproval?`: `boolean`;
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `packageName`: `string`;
  `privacyNotes`: `string`[];
  `provider`: `string`;
  `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
\}\>

##### register()

```ts
register(registration): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `registration` | [`IntegrationProviderRuntimeLoaderRegistration`](#integrationproviderruntimeloaderregistration) |

###### Returns

`void`

##### registeredIds()

```ts
registeredIds(): readonly string[];
```

###### Returns

readonly `string`[]

## Type Aliases

### IntegrationProviderId

```ts
type IntegrationProviderId = typeof integrationProviderReferences[number]["id"];
```

***

### IntegrationProviderModule

```ts
type IntegrationProviderModule = Record<string, unknown>;
```

***

### IntegrationProviderRuntimeLoader

```ts
type IntegrationProviderRuntimeLoader = () => Promise<IntegrationProviderModule>;
```

#### Returns

`Promise`\<[`IntegrationProviderModule`](#integrationprovidermodule)\>

## Variables

### CategoryCoverageLevel

```ts
CategoryCoverageLevel: any;
```

***

### defaultIntegrationProviderRuntimeRegistry

```ts
const defaultIntegrationProviderRuntimeRegistry: IntegrationProviderRuntimeRegistry;
```

***

### integrationProviderCategories

```ts
const integrationProviderCategories: (
  | "cobrowsing"
  | "community"
  | "contactCenter"
  | "ecommerce"
  | "email"
  | "form"
  | "helpCenter"
  | "marketplace"
  | "messaging"
  | "review"
  | "sms"
  | "social"
  | "ticketing"
  | "video"
  | "voice"
  | "workplace")[];
```

***

### integrationProviderReferences

```ts
const integrationProviderReferences: readonly [{
  category: "cobrowsing";
  id: "cobrowsing.cognidesk";
  importPath: "@cognidesk/integrations/cobrowsing/cognidesk";
  manifestExport: "cognideskCobrowsingProviderManifest";
  modulePath: "./cobrowsing/cognidesk/index.js";
  provider: "cognidesk";
}, {
  category: "community";
  id: "community.forum";
  importPath: "@cognidesk/integrations/community/forum";
  manifestExport: "forumCommunityProviderManifest";
  modulePath: "./community/forum/index.js";
  provider: "forum";
}, {
  category: "contactCenter";
  id: "contactCenter.8x8";
  importPath: "@cognidesk/integrations/contact-center/8x8";
  manifestExport: "eightByEightContactCenterProviderManifest";
  modulePath: "./contact-center/8x8/index.js";
  provider: "8x8";
}, {
  category: "contactCenter";
  id: "contactCenter.aircall";
  importPath: "@cognidesk/integrations/contact-center/aircall";
  manifestExport: "aircallContactCenterProviderManifest";
  modulePath: "./contact-center/aircall/index.js";
  provider: "aircall";
}, {
  category: "contactCenter";
  id: "contactCenter.amazon-connect";
  importPath: "@cognidesk/integrations/contact-center/amazon-connect";
  manifestExport: "amazonConnectContactCenterProviderManifest";
  modulePath: "./contact-center/amazon-connect/index.js";
  provider: "amazon-connect";
}, {
  category: "contactCenter";
  id: "contactCenter.five9";
  importPath: "@cognidesk/integrations/contact-center/five9";
  manifestExport: "five9ContactCenterProviderManifest";
  modulePath: "./contact-center/five9/index.js";
  provider: "five9";
}, {
  category: "contactCenter";
  id: "contactCenter.genesys-cloud";
  importPath: "@cognidesk/integrations/contact-center/genesys-cloud";
  manifestExport: "genesysCloudContactCenterProviderManifest";
  modulePath: "./contact-center/genesys-cloud/index.js";
  provider: "genesys-cloud";
}, {
  category: "contactCenter";
  id: "contactCenter.genesys-engage";
  importPath: "@cognidesk/integrations/contact-center/genesys-engage";
  manifestExport: "genesysEngageContactCenterProviderManifest";
  modulePath: "./contact-center/genesys-engage/index.js";
  provider: "genesys-engage";
}, {
  category: "contactCenter";
  id: "contactCenter.genesys-pureconnect";
  importPath: "@cognidesk/integrations/contact-center/genesys-pureconnect";
  manifestExport: "genesysPureConnectContactCenterProviderManifest";
  modulePath: "./contact-center/genesys-pureconnect/index.js";
  provider: "genesys-pureconnect";
}, {
  category: "contactCenter";
  id: "contactCenter.nextiva";
  importPath: "@cognidesk/integrations/contact-center/nextiva";
  manifestExport: "nextivaContactCenterProviderManifest";
  modulePath: "./contact-center/nextiva/index.js";
  provider: "nextiva";
}, {
  category: "contactCenter";
  id: "contactCenter.nice-cxone";
  importPath: "@cognidesk/integrations/contact-center/nice-cxone";
  manifestExport: "niceCxoneContactCenterProviderManifest";
  modulePath: "./contact-center/nice-cxone/index.js";
  provider: "nice-cxone";
}, {
  category: "contactCenter";
  id: "contactCenter.ringcentral";
  importPath: "@cognidesk/integrations/contact-center/ringcentral";
  manifestExport: "ringCentralContactCenterProviderManifest";
  modulePath: "./contact-center/ringcentral/index.js";
  provider: "ringcentral";
}, {
  category: "contactCenter";
  id: "contactCenter.talkdesk";
  importPath: "@cognidesk/integrations/contact-center/talkdesk";
  manifestExport: "talkdeskContactCenterProviderManifest";
  modulePath: "./contact-center/talkdesk/index.js";
  provider: "talkdesk";
}, {
  category: "contactCenter";
  id: "contactCenter.zoom";
  importPath: "@cognidesk/integrations/contact-center/zoom";
  manifestExport: "zoomContactCenterProviderManifest";
  modulePath: "./contact-center/zoom/index.js";
  provider: "zoom";
}, {
  category: "email";
  id: "email.imap";
  importPath: "@cognidesk/integrations/email/imap";
  manifestExport: "imapEmailProviderManifest";
  modulePath: "./email/imap/index.js";
  provider: "imap";
}, {
  category: "email";
  id: "email.mailgun";
  importPath: "@cognidesk/integrations/email/mailgun";
  manifestExport: "mailgunEmailProviderManifest";
  modulePath: "./email/mailgun/index.js";
  provider: "mailgun";
}, {
  category: "email";
  id: "email.outlook";
  importPath: "@cognidesk/integration-email-outlook/manifest";
  manifestExport: "outlookEmailProviderManifest";
  modulePath: "./email/outlook/manifest.js";
  provider: "outlook";
}, {
  category: "email";
  id: "email.postmark";
  importPath: "@cognidesk/integrations/email/postmark";
  manifestExport: "postmarkEmailProviderManifest";
  modulePath: "./email/postmark/index.js";
  provider: "postmark";
}, {
  category: "email";
  id: "email.ses";
  importPath: "@cognidesk/integrations/email/ses";
  manifestExport: "sesEmailProviderManifest";
  modulePath: "./email/ses/index.js";
  provider: "ses";
}, {
  category: "form";
  id: "form.cognidesk";
  importPath: "@cognidesk/integrations/form/cognidesk";
  manifestExport: "cognideskFormsProviderManifest";
  modulePath: "./form/cognidesk/index.js";
  provider: "cognidesk";
}, {
  category: "helpCenter";
  id: "helpcenter.cognidesk";
  importPath: "@cognidesk/integrations/help-center/cognidesk";
  manifestExport: "cognideskHelpCenterProviderManifest";
  modulePath: "./help-center/cognidesk/index.js";
  provider: "cognidesk";
}, {
  category: "marketplace";
  id: "marketplace.amazon";
  importPath: "@cognidesk/integrations/marketplace/amazon";
  manifestExport: "amazonMarketplaceProviderManifest";
  modulePath: "./marketplace/amazon/index.js";
  provider: "amazon";
}, {
  category: "marketplace";
  id: "marketplace.ebay";
  importPath: "@cognidesk/integrations/marketplace/ebay";
  manifestExport: "ebayMarketplaceProviderManifest";
  modulePath: "./marketplace/ebay/index.js";
  provider: "ebay";
}, {
  category: "messaging";
  id: "messaging.rcs";
  importPath: "@cognidesk/integration-messaging-rcs/manifest";
  manifestExport: "rcsMessagingProviderManifest";
  modulePath: "integrations/messaging/rcs/src/manifest.js";
  provider: "rcs";
}, {
  category: "review";
  id: "review.appstore";
  importPath: "@cognidesk/integrations/review/appstore";
  manifestExport: "appStoreReviewsProviderManifest";
  modulePath: "./review/appstore/index.js";
  provider: "appstore";
}, {
  category: "review";
  id: "review.googleplay";
  importPath: "@cognidesk/integrations/review/googleplay";
  manifestExport: "googlePlayReviewsProviderManifest";
  modulePath: "./review/googleplay/index.js";
  provider: "googleplay";
}, {
  category: "sms";
  id: "sms.twilio";
  importPath: "@cognidesk/integrations/sms/twilio";
  manifestExport: "twilioSmsProviderManifest";
  modulePath: "./sms/twilio/index.js";
  provider: "twilio";
}, {
  category: "social";
  id: "social.tiktok";
  importPath: "@cognidesk/integration-social-tiktok/manifest";
  manifestExport: "tiktokSocialProviderManifest";
  modulePath: "integrations/social/tiktok/src/manifest.js";
  provider: "tiktok";
}, {
  category: "ticketing";
  id: "ticketing.dynamics365";
  importPath: "@cognidesk/integrations/ticketing/dynamics365";
  manifestExport: "dynamics365TicketingProviderManifest";
  modulePath: "./ticketing/dynamics365/index.js";
  provider: "dynamics365";
}, {
  category: "ticketing";
  id: "ticketing.freshdesk";
  importPath: "@cognidesk/integrations/ticketing/freshdesk";
  manifestExport: "freshdeskTicketingProviderManifest";
  modulePath: "./ticketing/freshdesk/index.js";
  provider: "freshdesk";
}, {
  category: "ticketing";
  id: "ticketing.front";
  importPath: "@cognidesk/integrations/ticketing/front";
  manifestExport: "frontTicketingProviderManifest";
  modulePath: "./ticketing/front/index.js";
  provider: "front";
}, {
  category: "ticketing";
  id: "ticketing.gorgias";
  importPath: "@cognidesk/integrations/ticketing/gorgias";
  manifestExport: "gorgiasTicketingProviderManifest";
  modulePath: "./ticketing/gorgias/index.js";
  provider: "gorgias";
}, {
  category: "ticketing";
  id: "ticketing.help-scout";
  importPath: "@cognidesk/integrations/ticketing/help-scout";
  manifestExport: "helpScoutTicketingProviderManifest";
  modulePath: "./ticketing/help-scout/index.js";
  provider: "help-scout";
}, {
  category: "ticketing";
  id: "ticketing.hubspot";
  importPath: "@cognidesk/integrations/ticketing/hubspot";
  manifestExport: "hubSpotTicketingProviderManifest";
  modulePath: "./ticketing/hubspot/index.js";
  provider: "hubspot";
}, {
  category: "ticketing";
  id: "ticketing.intercom";
  importPath: "@cognidesk/integrations/ticketing/intercom";
  manifestExport: "intercomTicketingProviderManifest";
  modulePath: "./ticketing/intercom/index.js";
  provider: "intercom";
}, {
  category: "ticketing";
  id: "ticketing.kustomer";
  importPath: "@cognidesk/integrations/ticketing/kustomer";
  manifestExport: "kustomerTicketingProviderManifest";
  modulePath: "./ticketing/kustomer/index.js";
  provider: "kustomer";
}, {
  category: "ticketing";
  id: "ticketing.oracle-service";
  importPath: "@cognidesk/integrations/ticketing/oracle-service";
  manifestExport: "oracleServiceTicketingProviderManifest";
  modulePath: "./ticketing/oracle-service/index.js";
  provider: "oracle-service";
}, {
  category: "ticketing";
  id: "ticketing.pega-customer-service";
  importPath: "@cognidesk/integrations/ticketing/pega-customer-service";
  manifestExport: "pegaCustomerServiceTicketingProviderManifest";
  modulePath: "./ticketing/pega-customer-service/index.js";
  provider: "pega-customer-service";
}, {
  category: "ticketing";
  id: "ticketing.salesforce";
  importPath: "@cognidesk/integrations/ticketing/salesforce";
  manifestExport: "salesforceTicketingProviderManifest";
  modulePath: "./ticketing/salesforce/index.js";
  provider: "salesforce";
}, {
  category: "ticketing";
  id: "ticketing.sap-service-cloud";
  importPath: "@cognidesk/integrations/ticketing/sap-service-cloud";
  manifestExport: "sapServiceCloudTicketingProviderManifest";
  modulePath: "./ticketing/sap-service-cloud/index.js";
  provider: "sap-service-cloud";
}, {
  category: "ticketing";
  id: "ticketing.servicenow";
  importPath: "@cognidesk/integrations/ticketing/servicenow";
  manifestExport: "serviceNowTicketingProviderManifest";
  modulePath: "./ticketing/servicenow/index.js";
  provider: "servicenow";
}, {
  category: "ticketing";
  id: "ticketing.zendesk";
  importPath: "@cognidesk/integrations/ticketing/zendesk";
  manifestExport: "zendeskTicketingProviderManifest";
  modulePath: "./ticketing/zendesk/index.js";
  provider: "zendesk";
}, {
  category: "ticketing";
  id: "ticketing.zoho-desk";
  importPath: "@cognidesk/integrations/ticketing/zoho-desk";
  manifestExport: "zohoDeskTicketingProviderManifest";
  modulePath: "./ticketing/zoho-desk/index.js";
  provider: "zoho-desk";
}, {
  category: "video";
  id: "video.whereby";
  importPath: "@cognidesk/integrations/video/whereby";
  manifestExport: "wherebyVideoProviderManifest";
  modulePath: "./video/whereby/index.js";
  provider: "whereby";
}, {
  category: "video";
  id: "video.zoom";
  importPath: "@cognidesk/integrations/video/zoom";
  manifestExport: "zoomVideoProviderManifest";
  modulePath: "./video/zoom/index.js";
  provider: "zoom";
}, {
  category: "voice";
  id: "voice.elevenlabs";
  importPath: "@cognidesk/integrations/voice/elevenlabs";
  manifestExport: "elevenLabsVoiceProviderManifest";
  modulePath: "./voice/elevenlabs/index.js";
  provider: "elevenlabs";
}, {
  category: "voice";
  id: "voice.azure-speech";
  importPath: "@cognidesk/integrations/voice/azure-speech";
  manifestExport: "azureSpeechProviderManifest";
  modulePath: "./voice/azure-speech/index.js";
  provider: "azure-speech";
}, {
  category: "voice";
  id: "voice.aws-speech";
  importPath: "@cognidesk/integrations/voice/aws-speech";
  manifestExport: "awsSpeechProviderManifest";
  modulePath: "./voice/aws-speech/index.js";
  provider: "aws-speech";
}, {
  category: "voice";
  id: "voice.deepgram";
  importPath: "@cognidesk/integrations/voice/deepgram";
  manifestExport: "deepgramSpeechProviderManifest";
  modulePath: "./voice/deepgram/index.js";
  provider: "deepgram";
}, {
  category: "voice";
  id: "voice.google-speech";
  importPath: "@cognidesk/integrations/voice/google-speech";
  manifestExport: "googleSpeechProviderManifest";
  modulePath: "./voice/google-speech/index.js";
  provider: "google-speech";
}, {
  category: "voice";
  id: "voice.openai";
  importPath: "@cognidesk/integrations/voice/openai";
  manifestExport: "openAIVoiceProviderManifest";
  modulePath: "./voice/openai/index.js";
  provider: "openai";
}, {
  category: "voice";
  id: "voice.sip";
  importPath: "@cognidesk/integrations/voice/sip";
  manifestExport: "sipVoiceProviderManifest";
  modulePath: "./voice/sip/index.js";
  provider: "sip";
}, {
  category: "voice";
  id: "voice.twilio";
  importPath: "@cognidesk/integrations/voice/twilio";
  manifestExport: "twilioVoiceProviderManifest";
  modulePath: "./voice/twilio/index.js";
  provider: "twilio";
}, {
  category: "voice";
  id: "voice.vonage";
  importPath: "@cognidesk/integrations/voice/vonage";
  manifestExport: "vonageVoiceProviderManifest";
  modulePath: "./voice/vonage/index.js";
  provider: "vonage";
}, {
  category: "workplace";
  id: "workplace.teams";
  importPath: "@cognidesk/integration-workplace-teams/manifest";
  manifestExport: "teamsWorkplaceProviderManifest";
  modulePath: "./workplace/teams/manifest.js";
  provider: "teams";
}];
```

## Functions

### createIntegrationProviderRuntimeRegistry()

```ts
function createIntegrationProviderRuntimeRegistry(registrations?): IntegrationProviderRuntimeRegistry;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `registrations?` | readonly [`IntegrationProviderRuntimeLoaderRegistration`](#integrationproviderruntimeloaderregistration)[] |

#### Returns

[`IntegrationProviderRuntimeRegistry`](#integrationproviderruntimeregistry)

***

### defineIntegrationProviderPackage()

```ts
function defineIntegrationProviderPackage<Manifest>(manifest): {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  trustLevel: "community" | "official" | "verified" | "experimental";
};
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Manifest` *extends* \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | `Manifest` |

#### Returns

```ts
{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  trustLevel: "community" | "official" | "verified" | "experimental";
}
```

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

***

### defineIntegrationProviderRuntimeLoader()

```ts
function defineIntegrationProviderRuntimeLoader(registration): IntegrationProviderRuntimeLoaderRegistration;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `registration` | [`IntegrationProviderRuntimeLoaderRegistration`](#integrationproviderruntimeloaderregistration) |

#### Returns

[`IntegrationProviderRuntimeLoaderRegistration`](#integrationproviderruntimeloaderregistration)

***

### getIntegrationProviderReference()

```ts
function getIntegrationProviderReference(id): IntegrationProviderReference;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

[`IntegrationProviderReference`](#integrationproviderreference)

***

### isIntegrationProviderReferenceAvailable()

```ts
function isIntegrationProviderReferenceAvailable(idOrReference): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrReference` | \| `string` \| [`IntegrationProviderReference`](#integrationproviderreference) |

#### Returns

`boolean`

***

### loadProviderIntegration()

```ts
function loadProviderIntegration(idOrReference): Promise<IntegrationProviderModule>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrReference` | \| `string` \| [`IntegrationProviderReference`](#integrationproviderreference) |

#### Returns

`Promise`\<[`IntegrationProviderModule`](#integrationprovidermodule)\>

***

### loadProviderIntegrationManifest()

```ts
function loadProviderIntegrationManifest(idOrReference): Promise<{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  trustLevel: "community" | "official" | "verified" | "experimental";
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrReference` | \| `string` \| [`IntegrationProviderReference`](#integrationproviderreference) |

#### Returns

`Promise`\<\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
        `schemaName?`: `string`;
     \}[];
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `category`: `string`;
  `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
  `coverage`: \{
     `evidence`: \{
        `label`: `string`;
        `url?`: `string`;
     \}[];
     `notes`: `string`[];
     `scope`:   \| `"support-workflow-subset"`
        \| `"provider-api-subset"`
        \| `"connector-required"`
        \| `"local-protocol"`
        \| `"full-provider-api"`;
  \};
  `credentialRequirements`: \{
     `description?`: `string`;
     `id`: `string`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `required`: `boolean`;
     `scopes`: `string`[];
  \}[];
  `directions`: (
     \| `"receive-only"`
     \| `"send-only"`
     \| `"inbound-only"`
     \| `"outbound-only"`
    \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations`: `string`[];
  `maintainers`: \{
     `name`: `string`;
     `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
     `url?`: `string`;
  \}[];
  `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
  `name`: `string`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension`: `boolean`;
     `externallyVisible?`: `boolean`;
     `inputSchema?`: `unknown`;
     `inputSchemaName?`: `string`;
     `inputSchemaRef?`: `string`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
        `schemaName?`: `string`;
     \}[];
     `providerOperation?`: `string`;
     `requiredPolicyIds?`: `string`[];
     `requiresApproval?`: `boolean`;
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `packageName`: `string`;
  `privacyNotes`: `string`[];
  `provider`: `string`;
  `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
\}\>

***

### registerProviderIntegrationLoader()

```ts
function registerProviderIntegrationLoader(registration): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `registration` | [`IntegrationProviderRuntimeLoaderRegistration`](#integrationproviderruntimeloaderregistration) |

#### Returns

`void`

***

### requireIntegrationProviderReference()

```ts
function requireIntegrationProviderReference(id): IntegrationProviderReference;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

[`IntegrationProviderReference`](#integrationproviderreference)

## References

### categoryOperationAliases

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### categoryOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### CategoryOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### categoryProfilesCoreIntegrationNote

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### contactCenterCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### ContactCenterOperationAlias

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### contactCenterOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### defineIntegrationCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### deriveProviderCapabilityCoverage

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### ecommerceCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### EcommerceOperationAlias

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### ecommerceOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### emailCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### EmailOperationAlias

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### emailOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### findCategoryOperation

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### getIntegrationCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### handoffCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### integrationCategoryOperationAliasMaps

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### IntegrationCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### IntegrationCategoryProfileId

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### integrationCategoryProfiles

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### integrationCategoryProfilesByCategory

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### messagingCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### operation

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### OperationSchemaDescriptor

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### ProviderCapabilityCoverage

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### requireIntegrationCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### smsCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### SmsOperationAlias

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### smsOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### ticketingCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### TicketingOperationAlias

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### ticketingOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### voiceCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### VoiceOperationAlias

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### voiceOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### workplaceCategoryProfile

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### WorkplaceOperationAlias

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)

***

### workplaceOperationAliasMap

Renames and re-exports [CategoryCoverageLevel](#categorycoveragelevel)
