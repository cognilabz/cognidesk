# integrations/dist

## Interfaces

### IntegrationCategoryProfile

#### Extends

- [`IntegrationCategoryProfile`](../core/dist.md#integrationcategoryprofile)

#### Properties

##### capabilities

```ts
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
```

###### audiences?

```ts
optional audiences?: ("customer-facing" | "internal-support" | "mixed")[];
```

###### capability

```ts
capability: string;
```

###### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

###### description?

```ts
optional description?: string;
```

###### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

###### extension?

```ts
optional extension?: boolean;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerObjects?

```ts
optional providerObjects?: {
  description?: string;
  kind: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  schemaName?: string;
}[];
```

###### requiresCredential?

```ts
optional requiresCredential?: boolean;
```

###### sideEffect?

```ts
optional sideEffect?: boolean;
```

###### Inherited from

```ts
IntegrationCategoryProfile$1.capabilities
```

##### category

```ts
category: ProviderCategory;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.category
```

##### dataSources

```ts
dataSources: {
  capability: string;
  description?: string;
  exposesSensitiveData?: boolean;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias?: string;
  providerObjects: string[];
}[];
```

###### capability

```ts
capability: string;
```

###### description?

```ts
optional description?: string;
```

###### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

###### id

```ts
id: string;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### operationAlias?

```ts
optional operationAlias?: string;
```

###### providerObjects

```ts
providerObjects: string[];
```

###### Overrides

```ts
IntegrationCategoryProfile$1.dataSources
```

##### description

```ts
description: string;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.description
```

##### events

```ts
events: {
  capability?: string;
  description?: string;
  direction: "outbound" | "bidirectional" | "inbound" | "internal";
  kind: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias?: string;
  providerObject?: string;
}[];
```

###### capability?

```ts
optional capability?: string;
```

###### description?

```ts
optional description?: string;
```

###### direction

```ts
direction: "outbound" | "bidirectional" | "inbound" | "internal";
```

###### kind

```ts
kind: string;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### operationAlias?

```ts
optional operationAlias?: string;
```

###### providerObject?

```ts
optional providerObject?: string;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.events
```

##### id

```ts
id: string;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.id
```

##### label

```ts
label: string;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.label
```

##### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### Inherited from

```ts
IntegrationCategoryProfile$1.metadata
```

##### notes

```ts
notes: string[];
```

###### Overrides

```ts
IntegrationCategoryProfile$1.notes
```

##### operations

```ts
operations: {
  alias: string;
  audience?: "customer-facing" | "internal-support" | "mixed";
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  externallyVisible?: boolean;
  inputSchema?: unknown;
  inputSchemaName?: string;
  inputSchemaRef?: string;
  label?: string;
  level: "optional" | "extension" | "required" | "recommended";
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
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### alias

```ts
alias: string;
```

###### audience?

```ts
optional audience?: "customer-facing" | "internal-support" | "mixed";
```

###### audiences?

```ts
optional audiences?: ("customer-facing" | "internal-support" | "mixed")[];
```

###### capability

```ts
capability: string;
```

###### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

###### description?

```ts
optional description?: string;
```

###### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

###### externallyVisible?

```ts
optional externallyVisible?: boolean;
```

###### inputSchema?

```ts
optional inputSchema?: unknown;
```

###### inputSchemaName?

```ts
optional inputSchemaName?: string;
```

###### inputSchemaRef?

```ts
optional inputSchemaRef?: string;
```

###### label?

```ts
optional label?: string;
```

###### level

```ts
level: "optional" | "extension" | "required" | "recommended";
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outputSchema?

```ts
optional outputSchema?: unknown;
```

###### outputSchemaName?

```ts
optional outputSchemaName?: string;
```

###### outputSchemaRef?

```ts
optional outputSchemaRef?: string;
```

###### providerObject?

```ts
optional providerObject?: string;
```

###### providerObjects?

```ts
optional providerObjects?: {
  description?: string;
  kind: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  schemaName?: string;
}[];
```

###### requiredPolicyIds?

```ts
optional requiredPolicyIds?: string[];
```

###### requiresApproval?

```ts
optional requiresApproval?: boolean;
```

###### requiresCredential?

```ts
optional requiresCredential?: boolean;
```

###### sideEffect?

```ts
optional sideEffect?: boolean;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.operations
```

##### outputs

```ts
outputs: {
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  externallyVisible?: boolean;
  intent: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  operationAlias?: string;
  providerObject?: string;
  requiresApproval?: boolean;
  sideEffect?: boolean;
}[];
```

###### capability

```ts
capability: string;
```

###### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

###### description?

```ts
optional description?: string;
```

###### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

###### externallyVisible?

```ts
optional externallyVisible?: boolean;
```

###### intent

```ts
intent: string;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### operationAlias?

```ts
optional operationAlias?: string;
```

###### providerObject?

```ts
optional providerObject?: string;
```

###### requiresApproval?

```ts
optional requiresApproval?: boolean;
```

###### sideEffect?

```ts
optional sideEffect?: boolean;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.outputs
```

##### providerObjects

```ts
providerObjects: {
  description?: string;
  kind: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  schemaName?: string;
}[];
```

###### description?

```ts
optional description?: string;
```

###### kind

```ts
kind: string;
```

###### label?

```ts
optional label?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### schemaName?

```ts
optional schemaName?: string;
```

###### Overrides

```ts
IntegrationCategoryProfile$1.providerObjects
```

***

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

### OperationSchemaDescriptor

#### Properties

##### description?

```ts
optional description?: string;
```

##### kind

```ts
kind: "schema-ref";
```

##### ref

```ts
ref: string;
```

***

### ProviderCapabilityCoverage

#### Properties

##### category

```ts
category: ProviderCategory;
```

##### coverageLevel

```ts
coverageLevel: CategoryCoverageLevel;
```

##### missingOptionalOperationAliases

```ts
missingOptionalOperationAliases: readonly string[];
```

##### missingRecommendedOperationAliases

```ts
missingRecommendedOperationAliases: readonly string[];
```

##### missingRequiredOperationAliases

```ts
missingRequiredOperationAliases: readonly string[];
```

##### profileId

```ts
profileId: string;
```

##### supportedOperationAliases

```ts
supportedOperationAliases: readonly string[];
```

## Type Aliases

### CategoryCoverageLevel

```ts
type CategoryCoverageLevel = "not-conformant" | "partial" | "standard" | "full";
```

***

### IntegrationCategoryProfileId

```ts
type IntegrationCategoryProfileId = typeof integrationCategoryProfiles[number]["id"];
```

***

### IntegrationProviderId

```ts
type IntegrationProviderId = typeof integrationProviderReferences[number]["id"];
```

***

### IntegrationProviderModule

```ts
type IntegrationProviderModule = Awaited<ReturnType<typeof importProviderModule>>;
```

## Variables

### categoryProfilesCoreIntegrationNote

```ts
const categoryProfilesCoreIntegrationNote: "Core owns the shared IntegrationCategoryProfile contract; @cognidesk/integrations owns the concrete category profiles per ADR-0084." = "Core owns the shared IntegrationCategoryProfile contract; @cognidesk/integrations owns the concrete category profiles per ADR-0084.";
```

***

### contactCenterCategoryProfile

```ts
const contactCenterCategoryProfile: IntegrationCategoryProfile;
```

***

### emailCategoryProfile

```ts
const emailCategoryProfile: IntegrationCategoryProfile;
```

***

### handoffCategoryProfile

```ts
const handoffCategoryProfile: IntegrationCategoryProfile;
```

***

### integrationCategoryProfiles

```ts
const integrationCategoryProfiles: readonly [IntegrationCategoryProfile, IntegrationCategoryProfile, IntegrationCategoryProfile, IntegrationCategoryProfile, IntegrationCategoryProfile, IntegrationCategoryProfile, IntegrationCategoryProfile];
```

***

### integrationCategoryProfilesByCategory

```ts
const integrationCategoryProfilesByCategory: Readonly<Record<string, IntegrationCategoryProfile>>;
```

***

### integrationProviderCategories

```ts
const integrationProviderCategories: (
  | "voice"
  | "email"
  | "ticketing"
  | "contactCenter"
  | "messaging"
  | "sms"
  | "workplace"
  | "social"
  | "form"
  | "helpCenter"
  | "community"
  | "ecommerce"
  | "marketplace"
  | "review"
  | "video"
  | "cobrowsing")[];
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
  id: "community.discord";
  importPath: "@cognidesk/integrations/community/discord";
  manifestExport: "discordCommunityProviderManifest";
  modulePath: "./community/discord/index.js";
  provider: "discord";
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
  category: "ecommerce";
  id: "ecommerce.shopify";
  importPath: "@cognidesk/integrations/ecommerce/shopify";
  manifestExport: "shopifyEcommerceProviderManifest";
  modulePath: "./ecommerce/shopify/index.js";
  provider: "shopify";
}, {
  category: "ecommerce";
  id: "ecommerce.stripe";
  importPath: "@cognidesk/integrations/ecommerce/stripe";
  manifestExport: "stripeEcommerceProviderManifest";
  modulePath: "./ecommerce/stripe/index.js";
  provider: "stripe";
}, {
  category: "email";
  id: "email.gmail";
  importPath: "@cognidesk/integrations/email/gmail";
  manifestExport: "gmailEmailProviderManifest";
  modulePath: "./email/gmail/index.js";
  provider: "gmail";
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
  importPath: "@cognidesk/integrations/email/outlook";
  manifestExport: "outlookEmailProviderManifest";
  modulePath: "./email/outlook/index.js";
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
  importPath: "@cognidesk/integrations/messaging/rcs";
  manifestExport: "rcsMessagingProviderManifest";
  modulePath: "./messaging/rcs/index.js";
  provider: "rcs";
}, {
  category: "messaging";
  id: "messaging.whatsapp";
  importPath: "@cognidesk/integrations/messaging/whatsapp";
  manifestExport: "whatsappMessagingProviderManifest";
  modulePath: "./messaging/whatsapp/index.js";
  provider: "whatsapp";
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
  id: "social.instagram";
  importPath: "@cognidesk/integrations/social/instagram";
  manifestExport: "instagramSocialProviderManifest";
  modulePath: "./social/instagram/index.js";
  provider: "instagram";
}, {
  category: "social";
  id: "social.messenger";
  importPath: "@cognidesk/integrations/social/messenger";
  manifestExport: "messengerSocialProviderManifest";
  modulePath: "./social/messenger/index.js";
  provider: "messenger";
}, {
  category: "social";
  id: "social.tiktok";
  importPath: "@cognidesk/integrations/social/tiktok";
  manifestExport: "tiktokSocialProviderManifest";
  modulePath: "./social/tiktok/index.js";
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
  id: "workplace.slack";
  importPath: "@cognidesk/integrations/workplace/slack";
  manifestExport: "slackWorkplaceProviderManifest";
  modulePath: "./workplace/slack/index.js";
  provider: "slack";
}, {
  category: "workplace";
  id: "workplace.teams";
  importPath: "@cognidesk/integrations/workplace/teams";
  manifestExport: "teamsWorkplaceProviderManifest";
  modulePath: "./workplace/teams/index.js";
  provider: "teams";
}];
```

***

### messagingCategoryProfile

```ts
const messagingCategoryProfile: IntegrationCategoryProfile;
```

***

### smsCategoryProfile

```ts
const smsCategoryProfile: IntegrationCategoryProfile;
```

***

### ticketingCategoryProfile

```ts
const ticketingCategoryProfile: IntegrationCategoryProfile;
```

***

### voiceCategoryProfile

```ts
const voiceCategoryProfile: IntegrationCategoryProfile;
```

## Functions

### categoryOperationAliases()

```ts
function categoryOperationAliases(profile, level?): readonly string[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `profile` | [`IntegrationCategoryProfile`](#integrationcategoryprofile) |
| `level?` | `"optional"` \| `"extension"` \| `"required"` \| `"recommended"` |

#### Returns

readonly `string`[]

***

### defineIntegrationCategoryProfile()

```ts
function defineIntegrationCategoryProfile(profile): IntegrationCategoryProfile;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `profile` | `ConcreteIntegrationCategoryProfileInput` |

#### Returns

[`IntegrationCategoryProfile`](#integrationcategoryprofile)

***

### defineIntegrationProviderPackage()

```ts
function defineIntegrationProviderPackage(manifest): {
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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} |
| `manifest.capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `manifest.category` | `string` |
| `manifest.channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `manifest.coverage?` | \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `manifest.coverage.evidence?` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `manifest.coverage.notes?` | `string`[] |
| `manifest.coverage.scope?` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `manifest.credentialRequirements?` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[] |
| `manifest.directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `manifest.id` | `string` |
| `manifest.limitations?` | `string`[] |
| `manifest.maintainers?` | \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `manifest.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `manifest.name` | `string` |
| `manifest.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `manifest.packageName` | `string` |
| `manifest.privacyNotes?` | `string`[] |
| `manifest.provider` | `string` |
| `manifest.trustLevel?` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

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

### deriveProviderCapabilityCoverage()

```ts
function deriveProviderCapabilityCoverage(profile, supportedOperationAliases): ProviderCapabilityCoverage;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `profile` | [`IntegrationCategoryProfile`](#integrationcategoryprofile) |
| `supportedOperationAliases` | readonly `string`[] |

#### Returns

[`ProviderCapabilityCoverage`](#providercapabilitycoverage)

***

### findCategoryOperation()

```ts
function findCategoryOperation(profile, alias): {
  alias: string;
  audience?: "customer-facing" | "internal-support" | "mixed";
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  externallyVisible?: boolean;
  inputSchema?: unknown;
  inputSchemaName?: string;
  inputSchemaRef?: string;
  label?: string;
  level: "optional" | "extension" | "required" | "recommended";
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
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `profile` | [`IntegrationCategoryProfile`](#integrationcategoryprofile) |
| `alias` | `string` |

#### Returns

```ts
{
  alias: string;
  audience?: "customer-facing" | "internal-support" | "mixed";
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  externallyVisible?: boolean;
  inputSchema?: unknown;
  inputSchemaName?: string;
  inputSchemaRef?: string;
  label?: string;
  level: "optional" | "extension" | "required" | "recommended";
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
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}
```

| Name | Type |
| ------ | ------ |
| `alias` | `string` |
| `audience?` | `"customer-facing"` \| `"internal-support"` \| `"mixed"` |
| `audiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `capability` | `string` |
| `changesWorkflow?` | `boolean` |
| `description?` | `string` |
| `exposesSensitiveData?` | `boolean` |
| `externallyVisible?` | `boolean` |
| `inputSchema?` | `unknown` |
| `inputSchemaName?` | `string` |
| `inputSchemaRef?` | `string` |
| `label?` | `string` |
| `level` | `"optional"` \| `"extension"` \| `"required"` \| `"recommended"` |
| `metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `outputSchema?` | `unknown` |
| `outputSchemaName?` | `string` |
| `outputSchemaRef?` | `string` |
| `providerObject?` | `string` |
| `providerObjects?` | \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[] |
| `requiredPolicyIds?` | `string`[] |
| `requiresApproval?` | `boolean` |
| `requiresCredential?` | `boolean` |
| `sideEffect?` | `boolean` |

***

### getIntegrationCategoryProfile()

```ts
function getIntegrationCategoryProfile(category): IntegrationCategoryProfile;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `category` | [`ProviderCategory`](../core/dist.md#providercategory) |

#### Returns

[`IntegrationCategoryProfile`](#integrationcategoryprofile)

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
function loadProviderIntegration(idOrReference): Promise<Record<string, unknown>>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrReference` | \| `string` \| [`IntegrationProviderReference`](#integrationproviderreference) |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

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

### requireIntegrationCategoryProfile()

```ts
function requireIntegrationCategoryProfile(category): IntegrationCategoryProfile;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `category` | [`ProviderCategory`](../core/dist.md#providercategory) |

#### Returns

[`IntegrationCategoryProfile`](#integrationcategoryprofile)

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
