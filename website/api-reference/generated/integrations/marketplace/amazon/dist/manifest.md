# integrations/marketplace/amazon/dist/manifest

## Variables

### amazonMarketplaceOperationAliases

```ts
const amazonMarketplaceOperationAliases: {
  createProductReviewAndSellerFeedbackSolicitation: "amazon.createProductReviewAndSellerFeedbackSolicitation";
  createRestrictedDataToken: "amazon.createRestrictedDataToken";
  createSubscription: "amazon.createSubscription";
  deleteSubscription: "amazon.deleteSubscription";
  getDestination: "amazon.getDestination";
  getDestinations: "amazon.getDestinations";
  getMarketplaceParticipations: "amazon.getMarketplaceParticipations";
  getOrder: "amazon.getOrder";
  getOrderBuyerInfo: "amazon.getOrderBuyerInfo";
  getOrderItems: "amazon.getOrderItems";
  getOrderItemsBuyerInfo: "amazon.getOrderItemsBuyerInfo";
  getOrders: "amazon.getOrders";
  getOrderV2026: "amazon.getOrderV2026";
  getSolicitationActionsForOrder: "amazon.getSolicitationActionsForOrder";
  getSubscription: "amazon.getSubscription";
  parseNotificationWebhook: "amazon.parseNotificationWebhook";
  refreshAccessToken: "amazon.refreshAccessToken";
  searchOrdersV2026: "amazon.searchOrdersV2026";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-createproductreviewandsellerfeedbacksolicitation"></a> `createProductReviewAndSellerFeedbackSolicitation` | `"amazon.createProductReviewAndSellerFeedbackSolicitation"` |
| <a id="property-createrestricteddatatoken"></a> `createRestrictedDataToken` | `"amazon.createRestrictedDataToken"` |
| <a id="property-createsubscription"></a> `createSubscription` | `"amazon.createSubscription"` |
| <a id="property-deletesubscription"></a> `deleteSubscription` | `"amazon.deleteSubscription"` |
| <a id="property-getdestination"></a> `getDestination` | `"amazon.getDestination"` |
| <a id="property-getdestinations"></a> `getDestinations` | `"amazon.getDestinations"` |
| <a id="property-getmarketplaceparticipations"></a> `getMarketplaceParticipations` | `"amazon.getMarketplaceParticipations"` |
| <a id="property-getorder"></a> `getOrder` | `"amazon.getOrder"` |
| <a id="property-getorderbuyerinfo"></a> `getOrderBuyerInfo` | `"amazon.getOrderBuyerInfo"` |
| <a id="property-getorderitems"></a> `getOrderItems` | `"amazon.getOrderItems"` |
| <a id="property-getorderitemsbuyerinfo"></a> `getOrderItemsBuyerInfo` | `"amazon.getOrderItemsBuyerInfo"` |
| <a id="property-getorders"></a> `getOrders` | `"amazon.getOrders"` |
| <a id="property-getorderv2026"></a> `getOrderV2026` | `"amazon.getOrderV2026"` |
| <a id="property-getsolicitationactionsfororder"></a> `getSolicitationActionsForOrder` | `"amazon.getSolicitationActionsForOrder"` |
| <a id="property-getsubscription"></a> `getSubscription` | `"amazon.getSubscription"` |
| <a id="property-parsenotificationwebhook"></a> `parseNotificationWebhook` | `"amazon.parseNotificationWebhook"` |
| <a id="property-refreshaccesstoken"></a> `refreshAccessToken` | `"amazon.refreshAccessToken"` |
| <a id="property-searchordersv2026"></a> `searchOrdersV2026` | `"amazon.searchOrdersV2026"` |

***

### amazonMarketplaceProviderManifest

```ts
const amazonMarketplaceProviderManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
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
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Parses SP-API notification payloads from SQS, EventBridge, or SDK-user webhooks after configured verification succeeds.";
     exposesSensitiveData: true;
     label: "Receive Amazon marketplace notifications";
     providerObjects: readonly [{
        kind: "amazonNotification";
        label: "Amazon Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads seller orders, order items, buyer information where authorized, solicitation metadata, seller participation, and notification configuration.";
     exposesSensitiveData: true;
     label: "Read Amazon marketplace records";
     providerObjects: readonly [{
        kind: "amazonOrder";
        label: "Amazon Order";
      }, {
        kind: "amazonOrderItem";
        label: "Amazon Order Item";
      }, {
        kind: "amazonBuyerInfo";
        label: "Amazon Buyer Info";
      }, {
        kind: "amazonSolicitation";
        label: "Amazon Solicitation";
      }, {
        kind: "amazonSellerAccount";
        label: "Amazon Seller Account";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches orders and notification resources with SDK-user-supplied marketplace, date, status, and pagination filters.";
     exposesSensitiveData: true;
     label: "Search Amazon marketplace records";
     providerObjects: readonly [{
        kind: "amazonOrder";
        label: "Amazon Order";
      }, {
        kind: "amazonNotificationSubscription";
        label: "Amazon Notification Subscription";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates review/feedback solicitations and notification subscriptions only when the SDK user's marketplace policy allows outbound actions.";
     exposesSensitiveData: true;
     label: "Create Amazon support actions";
     providerObjects: readonly [{
        kind: "amazonSolicitation";
        label: "Amazon Solicitation";
      }, {
        kind: "amazonNotificationSubscription";
        label: "Amazon Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes Amazon notification subscriptions only when the SDK user's marketplace policy allows subscription lifecycle changes.";
     exposesSensitiveData: true;
     label: "Delete Amazon support resources";
     providerObjects: readonly [{
        kind: "amazonNotificationSubscription";
        label: "Amazon Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends supported Solicitations API review/feedback requests chosen by the SDK user's workflow.";
     exposesSensitiveData: true;
     label: "Send Amazon buyer solicitations";
     providerObjects: readonly [{
        kind: "amazonSolicitation";
        label: "Amazon Solicitation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.notification-signature";
     description: "Requires a SDK-user verifier, shared secret, or gateway signature policy before returning normalized Amazon notification payloads.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Amazon notification ingress";
     providerObjects: readonly [{
        kind: "amazonVerifiedNotification";
        label: "Amazon Verified Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.sigv4";
     description: "Optionally signs SP-API REST requests with AWS SigV4 for SDK users that operate signed gateways or explicit authorization paths.";
     extension: true;
     label: "Sign Amazon SP-API requests";
     providerObjects: readonly [{
        kind: "amazonSignedRequest";
        label: "Amazon Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "marketplace";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Amazon official SP-API JavaScript SDK";
        url: "https://github.com/amzn/selling-partner-api-sdk";
      }, {
        label: "Amazon prebuilt JavaScript SDK tutorial";
        url: "https://developer-docs.amazon.com/sp-api/docs/automate-your-sp-api-calls-using-a-prebuilt-javascript-sdk";
      }, {
        label: "Amazon SP-API Orders v0 reference";
        url: "https://developer-docs.amazon.com/sp-api/reference/orders-v0";
      }, {
        label: "Amazon SP-API Orders v2026-01-01 reference";
        url: "https://developer-docs.amazon.com/sp-api/reference/orders-v2026-01-01";
      }, {
        label: "Amazon SP-API Restricted Data Token";
        url: "https://developer-docs.amazon.com/sp-api/reference/createrestricteddatatoken";
      }, {
        label: "Amazon SP-API Notifications API";
        url: "https://developer-docs.amazon.com/sp-api/docs/notifications-api";
     }];
     notes: readonly ["Coverage is limited to Cognidesk marketplace support primitives, not full Amazon SP-API ownership.", "The official Amazon JavaScript SDK is the preferred raw-client escape hatch, but this package keeps local helpers for RDT and normalized support operations because the SDK README notes RDT requires an extra step.", "Manifest/runtime exports do not expose Cognidesk-generated full-provider SP-API clones.", "Orders v0 remains available for existing SDK callers while Amazon's removal window remains relevant; v2026 order helpers are exposed for migration flows."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Login with Amazon client ID and secret owned by the SDK user for SP-API token refresh.";
     id: "amazon-lwa-client";
     label: "Amazon LWA client credentials";
     required: true;
   }, {
     description: "Seller-authorized refresh/access token for role-gated SP-API calls, or grantless token material for Notifications API operations.";
     id: "amazon-lwa-token";
     label: "Amazon LWA refresh or access token";
     required: true;
   }, {
     description: "Optional IAM role/region and SigV4 material for SDK users who operate through signed gateway paths.";
     id: "amazon-aws-role-region";
     label: "Amazon SP-API AWS role and region";
     required: false;
   }, {
     description: "SDK-user-selected Amazon marketplace such as ATVPDKIKX0DER or A1PA6795UKMFR9.";
     id: "amazon-marketplace-id";
     label: "Amazon marketplace ID";
     required: true;
   }, {
     description: "Notifications API destination, SQS/EventBridge routing, and SDK-user webhook gateway metadata.";
     id: "amazon-notification-destination";
     label: "Amazon notification destination";
     required: true;
   }, {
     description: "SDK-user-provided verifier, shared secret, or gateway signature policy for fail-closed notification ingestion.";
     id: "amazon-notification-signature";
     label: "Amazon notification verification";
     required: true;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "marketplace.amazon";
  limitations: readonly ["The SDK user chooses marketplaces, roles, restricted-data-token policy, notification topics, outbound solicitation rules, operator visibility, retention, consent, and redaction.", "Some SP-API operations require role approval, restricted data tokens, marketplace availability, or grantless authorization; this package exposes typed support foundations and does not decide seller eligibility.", "Amazon notification transports vary by destination; this package fails closed unless the SDK user configures a verifier, gateway signature, or shared-secret check appropriate to their ingress path."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        buyerInfoRdt: "typed-read-restricted";
        lwaTokenRefresh: "typed-token-refresh";
        notificationDestinations: "typed-read";
        notificationIngress: "typed-verify-parse";
        notificationSubscriptions: "typed-create-read-delete";
        orderItems: "typed-read";
        ordersV0: "typed-read-search";
        ordersV2026: "typed-read-search";
        rawSellingPartnerApi: "official-sdk-escape-hatch";
        restrictedDataTokens: "typed-create";
        sellerParticipation: "typed-read";
        sigv4Signing: "typed-sign";
        solicitations: "typed-read-create-send";
     };
     implementation: {
        caveats: readonly ["The npm package has no root types metadata; this package uses a local typed facade for raw SDK loading.", "RDT support remains local because the SDK README says some APIs need an extra RDT step."];
        sdkModifiedAt: "2026-05-29T13:03:51.597Z";
        sdkPackage: "@amazon-sp-api-release/amazon-sp-api-sdk-js";
        sdkRepository: "https://github.com/amzn/selling-partner-api-sdk";
        sdkVersionChecked: "1.9.0";
        strategy: "official-sdk-plus-support-slice";
     };
     supportSlice: {
        allowlist: (
           | "amazon.refreshAccessToken"
           | "amazon.createRestrictedDataToken"
           | "amazon.getOrders"
           | "amazon.getOrder"
           | "amazon.getOrderBuyerInfo"
           | "amazon.getOrderItems"
           | "amazon.getOrderItemsBuyerInfo"
           | "amazon.searchOrdersV2026"
           | "amazon.getOrderV2026"
           | "amazon.getSolicitationActionsForOrder"
           | "amazon.createProductReviewAndSellerFeedbackSolicitation"
           | "amazon.getMarketplaceParticipations"
           | "amazon.getDestinations"
           | "amazon.getDestination"
           | "amazon.createSubscription"
           | "amazon.getSubscription"
           | "amazon.deleteSubscription"
          | "amazon.parseNotificationWebhook")[];
        source: "local-reviewed-support-operations";
        verifiedAt: "2026-06-21";
     };
  };
  name: "Amazon Marketplace";
  operations: readonly [{
     alias: "amazon.refreshAccessToken";
     capability: "read-provider-object";
     extension: true;
     label: "Refresh Amazon LWA access token";
     providerOperation: "lwa.refreshAccessToken";
     requiresCredential: true;
   }, {
     alias: "amazon.createRestrictedDataToken";
     capability: "create-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Create Amazon restricted data token";
     providerOperation: "tokens.createRestrictedDataToken";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrders";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Search Amazon orders";
     providerOperation: "ordersV0.getOrders";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrder";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order";
     providerOperation: "ordersV0.getOrder";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderBuyerInfo";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order buyer info";
     providerOperation: "ordersV0.getOrderBuyerInfo";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderItems";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order items";
     providerOperation: "ordersV0.getOrderItems";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderItemsBuyerInfo";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order item buyer info";
     providerOperation: "ordersV0.getOrderItemsBuyerInfo";
     requiresCredential: true;
   }, {
     alias: "amazon.searchOrdersV2026";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Search Amazon Orders v2026";
     providerOperation: "ordersV2026.searchOrders";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderV2026";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon Orders v2026 order";
     providerOperation: "ordersV2026.getOrder";
     requiresCredential: true;
   }, {
     alias: "amazon.getSolicitationActionsForOrder";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon solicitation actions";
     providerOperation: "solicitations.getActionsForOrder";
     requiresCredential: true;
   }, {
     alias: "amazon.createProductReviewAndSellerFeedbackSolicitation";
     capability: "send";
     changesWorkflow: true;
     extension: true;
     label: "Create Amazon review and seller feedback solicitation";
     providerOperation: "solicitations.createProductReviewAndSellerFeedback";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "amazon.getMarketplaceParticipations";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon marketplace participations";
     providerOperation: "sellers.getMarketplaceParticipations";
     requiresCredential: true;
   }, {
     alias: "amazon.getDestinations";
     capability: "search-provider-object";
     extension: true;
     label: "List Amazon notification destinations";
     providerOperation: "notifications.getDestinations";
     requiresCredential: true;
   }, {
     alias: "amazon.getDestination";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon notification destination";
     providerOperation: "notifications.getDestination";
     requiresCredential: true;
   }, {
     alias: "amazon.createSubscription";
     capability: "create-provider-object";
     changesWorkflow: true;
     extension: true;
     label: "Create Amazon notification subscription";
     providerOperation: "notifications.createSubscription";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "amazon.getSubscription";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon notification subscription";
     providerOperation: "notifications.getSubscription";
     requiresCredential: true;
   }, {
     alias: "amazon.deleteSubscription";
     capability: "delete-provider-object";
     changesWorkflow: true;
     extension: true;
     label: "Delete Amazon notification subscription";
     providerOperation: "notifications.deleteSubscription";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "amazon.parseNotificationWebhook";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Amazon notification webhook";
     providerOperation: "notifications.parseWebhook";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-marketplace-amazon";
  privacyNotes: readonly ["Amazon marketplace orders, order items, buyer information, seller account records, solicitations, and notifications can contain customer data, addresses, identifiers, and support context.", "LWA secrets, refresh tokens, access tokens, AWS role/signing material, notification shared secrets, and verifier logic stay server-side; Studio receives only readiness and capability metadata."];
  provider: "amazon";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
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
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses SP-API notification payloads from SQS, EventBridge, or SDK-user webhooks after configured verification succeeds."`; `exposesSensitiveData`: `true`; `label`: `"Receive Amazon marketplace notifications"`; `providerObjects`: readonly \[\{ `kind`: `"amazonNotification"`; `label`: `"Amazon Notification"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads seller orders, order items, buyer information where authorized, solicitation metadata, seller participation, and notification configuration."`; `exposesSensitiveData`: `true`; `label`: `"Read Amazon marketplace records"`; `providerObjects`: readonly \[\{ `kind`: `"amazonOrder"`; `label`: `"Amazon Order"`; \}, \{ `kind`: `"amazonOrderItem"`; `label`: `"Amazon Order Item"`; \}, \{ `kind`: `"amazonBuyerInfo"`; `label`: `"Amazon Buyer Info"`; \}, \{ `kind`: `"amazonSolicitation"`; `label`: `"Amazon Solicitation"`; \}, \{ `kind`: `"amazonSellerAccount"`; `label`: `"Amazon Seller Account"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches orders and notification resources with SDK-user-supplied marketplace, date, status, and pagination filters."`; `exposesSensitiveData`: `true`; `label`: `"Search Amazon marketplace records"`; `providerObjects`: readonly \[\{ `kind`: `"amazonOrder"`; `label`: `"Amazon Order"`; \}, \{ `kind`: `"amazonNotificationSubscription"`; `label`: `"Amazon Notification Subscription"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates review/feedback solicitations and notification subscriptions only when the SDK user's marketplace policy allows outbound actions."`; `exposesSensitiveData`: `true`; `label`: `"Create Amazon support actions"`; `providerObjects`: readonly \[\{ `kind`: `"amazonSolicitation"`; `label`: `"Amazon Solicitation"`; \}, \{ `kind`: `"amazonNotificationSubscription"`; `label`: `"Amazon Notification Subscription"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `description`: `"Deletes Amazon notification subscriptions only when the SDK user's marketplace policy allows subscription lifecycle changes."`; `exposesSensitiveData`: `true`; `label`: `"Delete Amazon support resources"`; `providerObjects`: readonly \[\{ `kind`: `"amazonNotificationSubscription"`; `label`: `"Amazon Notification Subscription"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends supported Solicitations API review/feedback requests chosen by the SDK user's workflow."`; `exposesSensitiveData`: `true`; `label`: `"Send Amazon buyer solicitations"`; `providerObjects`: readonly \[\{ `kind`: `"amazonSolicitation"`; `label`: `"Amazon Solicitation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"marketplace.notification-signature"`; `description`: `"Requires a SDK-user verifier, shared secret, or gateway signature policy before returning normalized Amazon notification payloads."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Amazon notification ingress"`; `providerObjects`: readonly \[\{ `kind`: `"amazonVerifiedNotification"`; `label`: `"Amazon Verified Notification"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"marketplace.sigv4"`; `description`: `"Optionally signs SP-API REST requests with AWS SigV4 for SDK users that operate signed gateways or explicit authorization paths."`; `extension`: `true`; `label`: `"Sign Amazon SP-API requests"`; `providerObjects`: readonly \[\{ `kind`: `"amazonSignedRequest"`; `label`: `"Amazon Signed Request"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"marketplace"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Amazon official SP-API JavaScript SDK"`; `url`: `"https://github.com/amzn/selling-partner-api-sdk"`; \}, \{ `label`: `"Amazon prebuilt JavaScript SDK tutorial"`; `url`: `"https://developer-docs.amazon.com/sp-api/docs/automate-your-sp-api-calls-using-a-prebuilt-javascript-sdk"`; \}, \{ `label`: `"Amazon SP-API Orders v0 reference"`; `url`: `"https://developer-docs.amazon.com/sp-api/reference/orders-v0"`; \}, \{ `label`: `"Amazon SP-API Orders v2026-01-01 reference"`; `url`: `"https://developer-docs.amazon.com/sp-api/reference/orders-v2026-01-01"`; \}, \{ `label`: `"Amazon SP-API Restricted Data Token"`; `url`: `"https://developer-docs.amazon.com/sp-api/reference/createrestricteddatatoken"`; \}, \{ `label`: `"Amazon SP-API Notifications API"`; `url`: `"https://developer-docs.amazon.com/sp-api/docs/notifications-api"`; \}\]; `notes`: readonly \[`"Coverage is limited to Cognidesk marketplace support primitives, not full Amazon SP-API ownership."`, `"The official Amazon JavaScript SDK is the preferred raw-client escape hatch, but this package keeps local helpers for RDT and normalized support operations because the SDK README notes RDT requires an extra step."`, `"Manifest/runtime exports do not expose Cognidesk-generated full-provider SP-API clones."`, `"Orders v0 remains available for existing SDK callers while Amazon's removal window remains relevant; v2026 order helpers are exposed for migration flows."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Amazon official SP-API JavaScript SDK"`; `url`: `"https://github.com/amzn/selling-partner-api-sdk"`; \}, \{ `label`: `"Amazon prebuilt JavaScript SDK tutorial"`; `url`: `"https://developer-docs.amazon.com/sp-api/docs/automate-your-sp-api-calls-using-a-prebuilt-javascript-sdk"`; \}, \{ `label`: `"Amazon SP-API Orders v0 reference"`; `url`: `"https://developer-docs.amazon.com/sp-api/reference/orders-v0"`; \}, \{ `label`: `"Amazon SP-API Orders v2026-01-01 reference"`; `url`: `"https://developer-docs.amazon.com/sp-api/reference/orders-v2026-01-01"`; \}, \{ `label`: `"Amazon SP-API Restricted Data Token"`; `url`: `"https://developer-docs.amazon.com/sp-api/reference/createrestricteddatatoken"`; \}, \{ `label`: `"Amazon SP-API Notifications API"`; `url`: `"https://developer-docs.amazon.com/sp-api/docs/notifications-api"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to Cognidesk marketplace support primitives, not full Amazon SP-API ownership."`, `"The official Amazon JavaScript SDK is the preferred raw-client escape hatch, but this package keeps local helpers for RDT and normalized support operations because the SDK README notes RDT requires an extra step."`, `"Manifest/runtime exports do not expose Cognidesk-generated full-provider SP-API clones."`, `"Orders v0 remains available for existing SDK callers while Amazon's removal window remains relevant; v2026 order helpers are exposed for migration flows."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Login with Amazon client ID and secret owned by the SDK user for SP-API token refresh."`; `id`: `"amazon-lwa-client"`; `label`: `"Amazon LWA client credentials"`; `required`: `true`; \}, \{ `description`: `"Seller-authorized refresh/access token for role-gated SP-API calls, or grantless token material for Notifications API operations."`; `id`: `"amazon-lwa-token"`; `label`: `"Amazon LWA refresh or access token"`; `required`: `true`; \}, \{ `description`: `"Optional IAM role/region and SigV4 material for SDK users who operate through signed gateway paths."`; `id`: `"amazon-aws-role-region"`; `label`: `"Amazon SP-API AWS role and region"`; `required`: `false`; \}, \{ `description`: `"SDK-user-selected Amazon marketplace such as ATVPDKIKX0DER or A1PA6795UKMFR9."`; `id`: `"amazon-marketplace-id"`; `label`: `"Amazon marketplace ID"`; `required`: `true`; \}, \{ `description`: `"Notifications API destination, SQS/EventBridge routing, and SDK-user webhook gateway metadata."`; `id`: `"amazon-notification-destination"`; `label`: `"Amazon notification destination"`; `required`: `true`; \}, \{ `description`: `"SDK-user-provided verifier, shared secret, or gateway signature policy for fail-closed notification ingestion."`; `id`: `"amazon-notification-signature"`; `label`: `"Amazon notification verification"`; `required`: `true`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"marketplace.amazon"` |
| `limitations` | readonly \[`"The SDK user chooses marketplaces, roles, restricted-data-token policy, notification topics, outbound solicitation rules, operator visibility, retention, consent, and redaction."`, `"Some SP-API operations require role approval, restricted data tokens, marketplace availability, or grantless authorization; this package exposes typed support foundations and does not decide seller eligibility."`, `"Amazon notification transports vary by destination; this package fails closed unless the SDK user configures a verifier, gateway signature, or shared-secret check appropriate to their ingress path."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `buyerInfoRdt`: `"typed-read-restricted"`; `lwaTokenRefresh`: `"typed-token-refresh"`; `notificationDestinations`: `"typed-read"`; `notificationIngress`: `"typed-verify-parse"`; `notificationSubscriptions`: `"typed-create-read-delete"`; `orderItems`: `"typed-read"`; `ordersV0`: `"typed-read-search"`; `ordersV2026`: `"typed-read-search"`; `rawSellingPartnerApi`: `"official-sdk-escape-hatch"`; `restrictedDataTokens`: `"typed-create"`; `sellerParticipation`: `"typed-read"`; `sigv4Signing`: `"typed-sign"`; `solicitations`: `"typed-read-create-send"`; \}; `implementation`: \{ `caveats`: readonly \[`"The npm package has no root types metadata; this package uses a local typed facade for raw SDK loading."`, `"RDT support remains local because the SDK README says some APIs need an extra RDT step."`\]; `sdkModifiedAt`: `"2026-05-29T13:03:51.597Z"`; `sdkPackage`: `"@amazon-sp-api-release/amazon-sp-api-sdk-js"`; `sdkRepository`: `"https://github.com/amzn/selling-partner-api-sdk"`; `sdkVersionChecked`: `"1.9.0"`; `strategy`: `"official-sdk-plus-support-slice"`; \}; `supportSlice`: \{ `allowlist`: ( \| `"amazon.refreshAccessToken"` \| `"amazon.createRestrictedDataToken"` \| `"amazon.getOrders"` \| `"amazon.getOrder"` \| `"amazon.getOrderBuyerInfo"` \| `"amazon.getOrderItems"` \| `"amazon.getOrderItemsBuyerInfo"` \| `"amazon.searchOrdersV2026"` \| `"amazon.getOrderV2026"` \| `"amazon.getSolicitationActionsForOrder"` \| `"amazon.createProductReviewAndSellerFeedbackSolicitation"` \| `"amazon.getMarketplaceParticipations"` \| `"amazon.getDestinations"` \| `"amazon.getDestination"` \| `"amazon.createSubscription"` \| `"amazon.getSubscription"` \| `"amazon.deleteSubscription"` \| `"amazon.parseNotificationWebhook"`)[]; `source`: `"local-reviewed-support-operations"`; `verifiedAt`: `"2026-06-21"`; \}; \} |
| `metadata.channelCoverage` | \{ `buyerInfoRdt`: `"typed-read-restricted"`; `lwaTokenRefresh`: `"typed-token-refresh"`; `notificationDestinations`: `"typed-read"`; `notificationIngress`: `"typed-verify-parse"`; `notificationSubscriptions`: `"typed-create-read-delete"`; `orderItems`: `"typed-read"`; `ordersV0`: `"typed-read-search"`; `ordersV2026`: `"typed-read-search"`; `rawSellingPartnerApi`: `"official-sdk-escape-hatch"`; `restrictedDataTokens`: `"typed-create"`; `sellerParticipation`: `"typed-read"`; `sigv4Signing`: `"typed-sign"`; `solicitations`: `"typed-read-create-send"`; \} |
| `metadata.channelCoverage.buyerInfoRdt` | `"typed-read-restricted"` |
| `metadata.channelCoverage.lwaTokenRefresh` | `"typed-token-refresh"` |
| `metadata.channelCoverage.notificationDestinations` | `"typed-read"` |
| `metadata.channelCoverage.notificationIngress` | `"typed-verify-parse"` |
| `metadata.channelCoverage.notificationSubscriptions` | `"typed-create-read-delete"` |
| `metadata.channelCoverage.orderItems` | `"typed-read"` |
| `metadata.channelCoverage.ordersV0` | `"typed-read-search"` |
| `metadata.channelCoverage.ordersV2026` | `"typed-read-search"` |
| `metadata.channelCoverage.rawSellingPartnerApi` | `"official-sdk-escape-hatch"` |
| `metadata.channelCoverage.restrictedDataTokens` | `"typed-create"` |
| `metadata.channelCoverage.sellerParticipation` | `"typed-read"` |
| `metadata.channelCoverage.sigv4Signing` | `"typed-sign"` |
| `metadata.channelCoverage.solicitations` | `"typed-read-create-send"` |
| `metadata.implementation` | \{ `caveats`: readonly \[`"The npm package has no root types metadata; this package uses a local typed facade for raw SDK loading."`, `"RDT support remains local because the SDK README says some APIs need an extra RDT step."`\]; `sdkModifiedAt`: `"2026-05-29T13:03:51.597Z"`; `sdkPackage`: `"@amazon-sp-api-release/amazon-sp-api-sdk-js"`; `sdkRepository`: `"https://github.com/amzn/selling-partner-api-sdk"`; `sdkVersionChecked`: `"1.9.0"`; `strategy`: `"official-sdk-plus-support-slice"`; \} |
| `metadata.implementation.caveats` | readonly \[`"The npm package has no root types metadata; this package uses a local typed facade for raw SDK loading."`, `"RDT support remains local because the SDK README says some APIs need an extra RDT step."`\] |
| `metadata.implementation.sdkModifiedAt` | `"2026-05-29T13:03:51.597Z"` |
| `metadata.implementation.sdkPackage` | `"@amazon-sp-api-release/amazon-sp-api-sdk-js"` |
| `metadata.implementation.sdkRepository` | `"https://github.com/amzn/selling-partner-api-sdk"` |
| `metadata.implementation.sdkVersionChecked` | `"1.9.0"` |
| `metadata.implementation.strategy` | `"official-sdk-plus-support-slice"` |
| `metadata.supportSlice` | \{ `allowlist`: ( \| `"amazon.refreshAccessToken"` \| `"amazon.createRestrictedDataToken"` \| `"amazon.getOrders"` \| `"amazon.getOrder"` \| `"amazon.getOrderBuyerInfo"` \| `"amazon.getOrderItems"` \| `"amazon.getOrderItemsBuyerInfo"` \| `"amazon.searchOrdersV2026"` \| `"amazon.getOrderV2026"` \| `"amazon.getSolicitationActionsForOrder"` \| `"amazon.createProductReviewAndSellerFeedbackSolicitation"` \| `"amazon.getMarketplaceParticipations"` \| `"amazon.getDestinations"` \| `"amazon.getDestination"` \| `"amazon.createSubscription"` \| `"amazon.getSubscription"` \| `"amazon.deleteSubscription"` \| `"amazon.parseNotificationWebhook"`)[]; `source`: `"local-reviewed-support-operations"`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.supportSlice.allowlist` | ( \| `"amazon.refreshAccessToken"` \| `"amazon.createRestrictedDataToken"` \| `"amazon.getOrders"` \| `"amazon.getOrder"` \| `"amazon.getOrderBuyerInfo"` \| `"amazon.getOrderItems"` \| `"amazon.getOrderItemsBuyerInfo"` \| `"amazon.searchOrdersV2026"` \| `"amazon.getOrderV2026"` \| `"amazon.getSolicitationActionsForOrder"` \| `"amazon.createProductReviewAndSellerFeedbackSolicitation"` \| `"amazon.getMarketplaceParticipations"` \| `"amazon.getDestinations"` \| `"amazon.getDestination"` \| `"amazon.createSubscription"` \| `"amazon.getSubscription"` \| `"amazon.deleteSubscription"` \| `"amazon.parseNotificationWebhook"`)[] |
| `metadata.supportSlice.source` | `"local-reviewed-support-operations"` |
| `metadata.supportSlice.verifiedAt` | `"2026-06-21"` |
| `name` | `"Amazon Marketplace"` |
| `operations` | readonly \[\{ `alias`: `"amazon.refreshAccessToken"`; `capability`: `"read-provider-object"`; `extension`: `true`; `label`: `"Refresh Amazon LWA access token"`; `providerOperation`: `"lwa.refreshAccessToken"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.createRestrictedDataToken"`; `capability`: `"create-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Create Amazon restricted data token"`; `providerOperation`: `"tokens.createRestrictedDataToken"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getOrders"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Search Amazon orders"`; `providerOperation`: `"ordersV0.getOrders"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getOrder"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Amazon order"`; `providerOperation`: `"ordersV0.getOrder"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getOrderBuyerInfo"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Amazon order buyer info"`; `providerOperation`: `"ordersV0.getOrderBuyerInfo"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getOrderItems"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Amazon order items"`; `providerOperation`: `"ordersV0.getOrderItems"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getOrderItemsBuyerInfo"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Amazon order item buyer info"`; `providerOperation`: `"ordersV0.getOrderItemsBuyerInfo"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.searchOrdersV2026"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Search Amazon Orders v2026"`; `providerOperation`: `"ordersV2026.searchOrders"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getOrderV2026"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Amazon Orders v2026 order"`; `providerOperation`: `"ordersV2026.getOrder"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getSolicitationActionsForOrder"`; `capability`: `"read-provider-object"`; `extension`: `true`; `label`: `"Read Amazon solicitation actions"`; `providerOperation`: `"solicitations.getActionsForOrder"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.createProductReviewAndSellerFeedbackSolicitation"`; `capability`: `"send"`; `changesWorkflow`: `true`; `extension`: `true`; `label`: `"Create Amazon review and seller feedback solicitation"`; `providerOperation`: `"solicitations.createProductReviewAndSellerFeedback"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"amazon.getMarketplaceParticipations"`; `capability`: `"read-provider-object"`; `extension`: `true`; `label`: `"Read Amazon marketplace participations"`; `providerOperation`: `"sellers.getMarketplaceParticipations"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getDestinations"`; `capability`: `"search-provider-object"`; `extension`: `true`; `label`: `"List Amazon notification destinations"`; `providerOperation`: `"notifications.getDestinations"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.getDestination"`; `capability`: `"read-provider-object"`; `extension`: `true`; `label`: `"Read Amazon notification destination"`; `providerOperation`: `"notifications.getDestination"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.createSubscription"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `label`: `"Create Amazon notification subscription"`; `providerOperation`: `"notifications.createSubscription"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"amazon.getSubscription"`; `capability`: `"read-provider-object"`; `extension`: `true`; `label`: `"Read Amazon notification subscription"`; `providerOperation`: `"notifications.getSubscription"`; `requiresCredential`: `true`; \}, \{ `alias`: `"amazon.deleteSubscription"`; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `label`: `"Delete Amazon notification subscription"`; `providerOperation`: `"notifications.deleteSubscription"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"amazon.parseNotificationWebhook"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse Amazon notification webhook"`; `providerOperation`: `"notifications.parseWebhook"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-marketplace-amazon"` |
| `privacyNotes` | readonly \[`"Amazon marketplace orders, order items, buyer information, seller account records, solicitations, and notifications can contain customer data, addresses, identifiers, and support context."`, `"LWA secrets, refresh tokens, access tokens, AWS role/signing material, notification shared secrets, and verifier logic stay server-side; Studio receives only readiness and capability metadata."`\] |
| `provider` | `"amazon"` |
| `trustLevel` | `"official"` |
