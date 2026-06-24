# integrations/ecommerce/shopify/dist/manifest

## Variables

### defaultShopifyGraphqlAdminApiVersion

```ts
const defaultShopifyGraphqlAdminApiVersion: "2026-04" = "2026-04";
```

***

### shopifyEcommerceProviderManifest

```ts
const shopifyEcommerceProviderManifest: {
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
  trustLevel: "community" | "official" | "verified" | "experimental";
} & {
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Shopify webhooks for SDK-user-owned commerce support workflows.";
     exposesSensitiveData: true;
     label: "Receive Shopify webhooks";
     providerObjects: [{
        kind: "shopifyWebhook";
        label: "Shopify Webhook";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Shopify Admin GraphQL records such as shop, order, customer, product, and draft order nodes.";
     exposesSensitiveData: true;
     label: "Read Shopify records";
     providerObjects: [{
        kind: "shopifyShop";
        label: "Shopify Shop";
      }, {
        kind: "shopifyOrder";
        label: "Shopify Order";
      }, {
        kind: "shopifyCustomer";
        label: "Shopify Customer";
      }, {
        kind: "shopifyProduct";
        label: "Shopify Product";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches Shopify orders, customers, and products with SDK-user-supplied Admin GraphQL queries.";
     exposesSensitiveData: true;
     label: "Search Shopify records";
     providerObjects: [{
        kind: "shopifyOrder";
        label: "Shopify Order";
      }, {
        kind: "shopifyCustomer";
        label: "Shopify Customer";
      }, {
        kind: "shopifyProduct";
        label: "Shopify Product";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Shopify draft orders through Admin GraphQL when SDK-user policy permits commerce mutations.";
     exposesSensitiveData: true;
     label: "Create Shopify draft orders";
     providerObjects: [{
        kind: "shopifyDraftOrder";
        label: "Shopify Draft Order";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "ecommerce.graphql";
     description: "Runs SDK-user-selected raw Admin GraphQL operations against the configured Shopify shop as an explicit escape hatch.";
     exposesSensitiveData: true;
     extension: true;
     label: "Run Shopify Admin GraphQL";
     providerObjects: [{
        kind: "shopifyGraphqlResult";
        label: "Shopify GraphQL Result";
     }];
     requiresCredential: true;
  }];
  category: "ecommerce";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Shopify Admin GraphQL API reference";
        url: "https://shopify.dev/docs/api/admin-graphql/latest";
      }, {
        label: "Shopify Admin API client";
        url: "https://www.npmjs.com/package/@shopify/admin-api-client";
      }, {
        label: "Shopify webhook HMAC validation";
        url: "https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook";
     }];
     notes: ["Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client.", "The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied.", "Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "The SDK user's Shopify admin shop domain, for example example.myshopify.com.";
     id: "shopify-shop-domain";
     label: "Shopify shop domain";
     required: true;
   }, {
     description: "Server-side Admin API access token with SDK-user-selected scopes.";
     id: "shopify-admin-access";
     label: "Shopify Admin API access";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["read_orders", "read_customers", "read_products", "write_draft_orders"];
   }, {
     description: "Server-side secret used to validate Shopify webhook HMAC signatures.";
     id: "shopify-webhook-secret";
     label: "Shopify webhook secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "ecommerce.shopify";
  limitations: ["The SDK user chooses Admin API version, scopes, webhook topics, customer visibility, fulfillment behavior, consent rules, and retention policy.", "This package provides normalized Admin GraphQL support operations and signature checks; it does not decide when to create draft orders, contact customers, issue discounts, refund orders, or expose commerce data."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     defaultGraphqlAdminApiVersion: "2026-04";
     docs: "https://shopify.dev/docs/api/admin-graphql/latest";
     implementation: {
        generatedFullProviderApiClone: false;
        optionalBroaderSdkPackage: "@shopify/shopify-api";
        rawClientEscapeHatch: true;
        sdkPackage: "@shopify/admin-api-client";
        strategy: "official-sdk";
     };
     rawProviderRequest: {
        acknowledgementRequired: true;
        capability: "ecommerce.graphql";
        coverage: "escape-hatch-not-full-provider-api";
     };
     sdkPackage: "@shopify/admin-api-client";
  };
  name: "Shopify";
  operations: [{
     alias: "ecommerce.event.receive";
     capability: "receive";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyWebhook";
     }];
   }, {
     alias: "ecommerce.order.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyOrder";
     }];
     providerOperation: "AdminGraphQL node Order";
   }, {
     alias: "ecommerce.order.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyOrder";
     }];
     providerOperation: "AdminGraphQL orders";
   }, {
     alias: "ecommerce.customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyCustomer";
     }];
     providerOperation: "AdminGraphQL customer";
   }, {
     alias: "ecommerce.customer.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyCustomer";
     }];
     providerOperation: "AdminGraphQL customers";
   }, {
     alias: "ecommerce.product.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyProduct";
     }];
     providerOperation: "AdminGraphQL node Product";
   }, {
     alias: "ecommerce.product.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyProduct";
     }];
     providerOperation: "AdminGraphQL products";
   }, {
     alias: "ecommerce.draftOrder.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObjects: [{
        kind: "shopifyDraftOrder";
     }];
     providerOperation: "AdminGraphQL draftOrderCreate";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "shopify.adminGraphql";
     capability: "ecommerce.graphql";
     exposesSensitiveData: true;
     extension: true;
     providerObjects: [{
        kind: "shopifyGraphqlResult";
     }];
  }];
  packageName: "@cognidesk/integration-ecommerce-shopify";
  privacyNotes: ["Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata.", "Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."];
  provider: "shopify";
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
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Shopify webhooks for SDK-user-owned commerce support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Shopify webhooks"`; `providerObjects`: \[\{ `kind`: `"shopifyWebhook"`; `label`: `"Shopify Webhook"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Shopify Admin GraphQL records such as shop, order, customer, product, and draft order nodes."`; `exposesSensitiveData`: `true`; `label`: `"Read Shopify records"`; `providerObjects`: \[\{ `kind`: `"shopifyShop"`; `label`: `"Shopify Shop"`; \}, \{ `kind`: `"shopifyOrder"`; `label`: `"Shopify Order"`; \}, \{ `kind`: `"shopifyCustomer"`; `label`: `"Shopify Customer"`; \}, \{ `kind`: `"shopifyProduct"`; `label`: `"Shopify Product"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches Shopify orders, customers, and products with SDK-user-supplied Admin GraphQL queries."`; `exposesSensitiveData`: `true`; `label`: `"Search Shopify records"`; `providerObjects`: \[\{ `kind`: `"shopifyOrder"`; `label`: `"Shopify Order"`; \}, \{ `kind`: `"shopifyCustomer"`; `label`: `"Shopify Customer"`; \}, \{ `kind`: `"shopifyProduct"`; `label`: `"Shopify Product"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Shopify draft orders through Admin GraphQL when SDK-user policy permits commerce mutations."`; `exposesSensitiveData`: `true`; `label`: `"Create Shopify draft orders"`; `providerObjects`: \[\{ `kind`: `"shopifyDraftOrder"`; `label`: `"Shopify Draft Order"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"ecommerce.graphql"`; `description`: `"Runs SDK-user-selected raw Admin GraphQL operations against the configured Shopify shop as an explicit escape hatch."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Run Shopify Admin GraphQL"`; `providerObjects`: \[\{ `kind`: `"shopifyGraphqlResult"`; `label`: `"Shopify GraphQL Result"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"ecommerce"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Shopify Admin GraphQL API reference"`; `url`: `"https://shopify.dev/docs/api/admin-graphql/latest"`; \}, \{ `label`: `"Shopify Admin API client"`; `url`: `"https://www.npmjs.com/package/@shopify/admin-api-client"`; \}, \{ `label`: `"Shopify webhook HMAC validation"`; `url`: `"https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook"`; \}\]; `notes`: \[`"Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client."`, `"The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied."`, `"Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Shopify Admin GraphQL API reference"`; `url`: `"https://shopify.dev/docs/api/admin-graphql/latest"`; \}, \{ `label`: `"Shopify Admin API client"`; `url`: `"https://www.npmjs.com/package/@shopify/admin-api-client"`; \}, \{ `label`: `"Shopify webhook HMAC validation"`; `url`: `"https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook"`; \}\] |
| `coverage.notes` | \[`"Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client."`, `"The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied."`, `"Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `description`: `"The SDK user's Shopify admin shop domain, for example example.myshopify.com."`; `id`: `"shopify-shop-domain"`; `label`: `"Shopify shop domain"`; `required`: `true`; \}, \{ `description`: `"Server-side Admin API access token with SDK-user-selected scopes."`; `id`: `"shopify-admin-access"`; `label`: `"Shopify Admin API access"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"read_orders"`, `"read_customers"`, `"read_products"`, `"write_draft_orders"`\]; \}, \{ `description`: `"Server-side secret used to validate Shopify webhook HMAC signatures."`; `id`: `"shopify-webhook-secret"`; `label`: `"Shopify webhook secret"`; `required`: `false`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"ecommerce.shopify"` |
| `limitations` | \[`"The SDK user chooses Admin API version, scopes, webhook topics, customer visibility, fulfillment behavior, consent rules, and retention policy."`, `"This package provides normalized Admin GraphQL support operations and signature checks; it does not decide when to create draft orders, contact customers, issue discounts, refund orders, or expose commerce data."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `defaultGraphqlAdminApiVersion`: `"2026-04"`; `docs`: `"https://shopify.dev/docs/api/admin-graphql/latest"`; `implementation`: \{ `generatedFullProviderApiClone`: `false`; `optionalBroaderSdkPackage`: `"@shopify/shopify-api"`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"@shopify/admin-api-client"`; `strategy`: `"official-sdk"`; \}; `rawProviderRequest`: \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.graphql"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \}; `sdkPackage`: `"@shopify/admin-api-client"`; \} |
| `metadata.defaultGraphqlAdminApiVersion` | `"2026-04"` |
| `metadata.docs` | `"https://shopify.dev/docs/api/admin-graphql/latest"` |
| `metadata.implementation` | \{ `generatedFullProviderApiClone`: `false`; `optionalBroaderSdkPackage`: `"@shopify/shopify-api"`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"@shopify/admin-api-client"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.generatedFullProviderApiClone` | `false` |
| `metadata.implementation.optionalBroaderSdkPackage` | `"@shopify/shopify-api"` |
| `metadata.implementation.rawClientEscapeHatch` | `true` |
| `metadata.implementation.sdkPackage` | `"@shopify/admin-api-client"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.rawProviderRequest` | \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.graphql"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \} |
| `metadata.rawProviderRequest.acknowledgementRequired` | `true` |
| `metadata.rawProviderRequest.capability` | `"ecommerce.graphql"` |
| `metadata.rawProviderRequest.coverage` | `"escape-hatch-not-full-provider-api"` |
| `metadata.sdkPackage` | `"@shopify/admin-api-client"` |
| `name` | `"Shopify"` |
| `operations` | \[\{ `alias`: `"ecommerce.event.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyWebhook"`; \}\]; \}, \{ `alias`: `"ecommerce.order.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyOrder"`; \}\]; `providerOperation`: `"AdminGraphQL node Order"`; \}, \{ `alias`: `"ecommerce.order.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyOrder"`; \}\]; `providerOperation`: `"AdminGraphQL orders"`; \}, \{ `alias`: `"ecommerce.customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyCustomer"`; \}\]; `providerOperation`: `"AdminGraphQL customer"`; \}, \{ `alias`: `"ecommerce.customer.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyCustomer"`; \}\]; `providerOperation`: `"AdminGraphQL customers"`; \}, \{ `alias`: `"ecommerce.product.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyProduct"`; \}\]; `providerOperation`: `"AdminGraphQL node Product"`; \}, \{ `alias`: `"ecommerce.product.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyProduct"`; \}\]; `providerOperation`: `"AdminGraphQL products"`; \}, \{ `alias`: `"ecommerce.draftOrder.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyDraftOrder"`; \}\]; `providerOperation`: `"AdminGraphQL draftOrderCreate"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"shopify.adminGraphql"`; `capability`: `"ecommerce.graphql"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyGraphqlResult"`; \}\]; \}\] |
| `packageName` | `"@cognidesk/integration-ecommerce-shopify"` |
| `privacyNotes` | \[`"Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata."`, `"Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."`\] |
| `provider` | `"shopify"` |
| `trustLevel` | `"official"` |

***

### shopifyEcommerceProviderManifestInput

```ts
const shopifyEcommerceProviderManifestInput: {
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Shopify webhooks for SDK-user-owned commerce support workflows.";
     exposesSensitiveData: true;
     label: "Receive Shopify webhooks";
     providerObjects: [{
        kind: "shopifyWebhook";
        label: "Shopify Webhook";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Shopify Admin GraphQL records such as shop, order, customer, product, and draft order nodes.";
     exposesSensitiveData: true;
     label: "Read Shopify records";
     providerObjects: [{
        kind: "shopifyShop";
        label: "Shopify Shop";
      }, {
        kind: "shopifyOrder";
        label: "Shopify Order";
      }, {
        kind: "shopifyCustomer";
        label: "Shopify Customer";
      }, {
        kind: "shopifyProduct";
        label: "Shopify Product";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches Shopify orders, customers, and products with SDK-user-supplied Admin GraphQL queries.";
     exposesSensitiveData: true;
     label: "Search Shopify records";
     providerObjects: [{
        kind: "shopifyOrder";
        label: "Shopify Order";
      }, {
        kind: "shopifyCustomer";
        label: "Shopify Customer";
      }, {
        kind: "shopifyProduct";
        label: "Shopify Product";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Shopify draft orders through Admin GraphQL when SDK-user policy permits commerce mutations.";
     exposesSensitiveData: true;
     label: "Create Shopify draft orders";
     providerObjects: [{
        kind: "shopifyDraftOrder";
        label: "Shopify Draft Order";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "ecommerce.graphql";
     description: "Runs SDK-user-selected raw Admin GraphQL operations against the configured Shopify shop as an explicit escape hatch.";
     exposesSensitiveData: true;
     extension: true;
     label: "Run Shopify Admin GraphQL";
     providerObjects: [{
        kind: "shopifyGraphqlResult";
        label: "Shopify GraphQL Result";
     }];
     requiresCredential: true;
  }];
  category: "ecommerce";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Shopify Admin GraphQL API reference";
        url: "https://shopify.dev/docs/api/admin-graphql/latest";
      }, {
        label: "Shopify Admin API client";
        url: "https://www.npmjs.com/package/@shopify/admin-api-client";
      }, {
        label: "Shopify webhook HMAC validation";
        url: "https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook";
     }];
     notes: ["Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client.", "The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied.", "Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "The SDK user's Shopify admin shop domain, for example example.myshopify.com.";
     id: "shopify-shop-domain";
     label: "Shopify shop domain";
     required: true;
   }, {
     description: "Server-side Admin API access token with SDK-user-selected scopes.";
     id: "shopify-admin-access";
     label: "Shopify Admin API access";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["read_orders", "read_customers", "read_products", "write_draft_orders"];
   }, {
     description: "Server-side secret used to validate Shopify webhook HMAC signatures.";
     id: "shopify-webhook-secret";
     label: "Shopify webhook secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "ecommerce.shopify";
  limitations: ["The SDK user chooses Admin API version, scopes, webhook topics, customer visibility, fulfillment behavior, consent rules, and retention policy.", "This package provides normalized Admin GraphQL support operations and signature checks; it does not decide when to create draft orders, contact customers, issue discounts, refund orders, or expose commerce data."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     defaultGraphqlAdminApiVersion: "2026-04";
     docs: "https://shopify.dev/docs/api/admin-graphql/latest";
     implementation: {
        generatedFullProviderApiClone: false;
        optionalBroaderSdkPackage: "@shopify/shopify-api";
        rawClientEscapeHatch: true;
        sdkPackage: "@shopify/admin-api-client";
        strategy: "official-sdk";
     };
     rawProviderRequest: {
        acknowledgementRequired: true;
        capability: "ecommerce.graphql";
        coverage: "escape-hatch-not-full-provider-api";
     };
     sdkPackage: "@shopify/admin-api-client";
  };
  name: "Shopify";
  operations: [{
     alias: "ecommerce.event.receive";
     capability: "receive";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyWebhook";
     }];
   }, {
     alias: "ecommerce.order.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyOrder";
     }];
     providerOperation: "AdminGraphQL node Order";
   }, {
     alias: "ecommerce.order.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyOrder";
     }];
     providerOperation: "AdminGraphQL orders";
   }, {
     alias: "ecommerce.customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyCustomer";
     }];
     providerOperation: "AdminGraphQL customer";
   }, {
     alias: "ecommerce.customer.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyCustomer";
     }];
     providerOperation: "AdminGraphQL customers";
   }, {
     alias: "ecommerce.product.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyProduct";
     }];
     providerOperation: "AdminGraphQL node Product";
   }, {
     alias: "ecommerce.product.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "shopifyProduct";
     }];
     providerOperation: "AdminGraphQL products";
   }, {
     alias: "ecommerce.draftOrder.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObjects: [{
        kind: "shopifyDraftOrder";
     }];
     providerOperation: "AdminGraphQL draftOrderCreate";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "shopify.adminGraphql";
     capability: "ecommerce.graphql";
     exposesSensitiveData: true;
     extension: true;
     providerObjects: [{
        kind: "shopifyGraphqlResult";
     }];
  }];
  packageName: "@cognidesk/integration-ecommerce-shopify";
  privacyNotes: ["Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata.", "Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."];
  provider: "shopify";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Shopify webhooks for SDK-user-owned commerce support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Shopify webhooks"`; `providerObjects`: \[\{ `kind`: `"shopifyWebhook"`; `label`: `"Shopify Webhook"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Shopify Admin GraphQL records such as shop, order, customer, product, and draft order nodes."`; `exposesSensitiveData`: `true`; `label`: `"Read Shopify records"`; `providerObjects`: \[\{ `kind`: `"shopifyShop"`; `label`: `"Shopify Shop"`; \}, \{ `kind`: `"shopifyOrder"`; `label`: `"Shopify Order"`; \}, \{ `kind`: `"shopifyCustomer"`; `label`: `"Shopify Customer"`; \}, \{ `kind`: `"shopifyProduct"`; `label`: `"Shopify Product"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches Shopify orders, customers, and products with SDK-user-supplied Admin GraphQL queries."`; `exposesSensitiveData`: `true`; `label`: `"Search Shopify records"`; `providerObjects`: \[\{ `kind`: `"shopifyOrder"`; `label`: `"Shopify Order"`; \}, \{ `kind`: `"shopifyCustomer"`; `label`: `"Shopify Customer"`; \}, \{ `kind`: `"shopifyProduct"`; `label`: `"Shopify Product"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Shopify draft orders through Admin GraphQL when SDK-user policy permits commerce mutations."`; `exposesSensitiveData`: `true`; `label`: `"Create Shopify draft orders"`; `providerObjects`: \[\{ `kind`: `"shopifyDraftOrder"`; `label`: `"Shopify Draft Order"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"ecommerce.graphql"`; `description`: `"Runs SDK-user-selected raw Admin GraphQL operations against the configured Shopify shop as an explicit escape hatch."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Run Shopify Admin GraphQL"`; `providerObjects`: \[\{ `kind`: `"shopifyGraphqlResult"`; `label`: `"Shopify GraphQL Result"`; \}\]; `requiresCredential`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ecommerce"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Shopify Admin GraphQL API reference"`; `url`: `"https://shopify.dev/docs/api/admin-graphql/latest"`; \}, \{ `label`: `"Shopify Admin API client"`; `url`: `"https://www.npmjs.com/package/@shopify/admin-api-client"`; \}, \{ `label`: `"Shopify webhook HMAC validation"`; `url`: `"https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook"`; \}\]; `notes`: \[`"Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client."`, `"The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied."`, `"Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Shopify Admin GraphQL API reference"`; `url`: `"https://shopify.dev/docs/api/admin-graphql/latest"`; \}, \{ `label`: `"Shopify Admin API client"`; `url`: `"https://www.npmjs.com/package/@shopify/admin-api-client"`; \}, \{ `label`: `"Shopify webhook HMAC validation"`; `url`: `"https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook"`; \}\] |
| `coverage.notes` | \[`"Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client."`, `"The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied."`, `"Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"The SDK user's Shopify admin shop domain, for example example.myshopify.com."`; `id`: `"shopify-shop-domain"`; `label`: `"Shopify shop domain"`; `required`: `true`; \}, \{ `description`: `"Server-side Admin API access token with SDK-user-selected scopes."`; `id`: `"shopify-admin-access"`; `label`: `"Shopify Admin API access"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"read_orders"`, `"read_customers"`, `"read_products"`, `"write_draft_orders"`\]; \}, \{ `description`: `"Server-side secret used to validate Shopify webhook HMAC signatures."`; `id`: `"shopify-webhook-secret"`; `label`: `"Shopify webhook secret"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ecommerce.shopify"` |
| <a id="property-limitations"></a> `limitations` | \[`"The SDK user chooses Admin API version, scopes, webhook topics, customer visibility, fulfillment behavior, consent rules, and retention policy."`, `"This package provides normalized Admin GraphQL support operations and signature checks; it does not decide when to create draft orders, contact customers, issue discounts, refund orders, or expose commerce data."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `defaultGraphqlAdminApiVersion`: `"2026-04"`; `docs`: `"https://shopify.dev/docs/api/admin-graphql/latest"`; `implementation`: \{ `generatedFullProviderApiClone`: `false`; `optionalBroaderSdkPackage`: `"@shopify/shopify-api"`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"@shopify/admin-api-client"`; `strategy`: `"official-sdk"`; \}; `rawProviderRequest`: \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.graphql"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \}; `sdkPackage`: `"@shopify/admin-api-client"`; \} |
| `metadata.defaultGraphqlAdminApiVersion` | `"2026-04"` |
| `metadata.docs` | `"https://shopify.dev/docs/api/admin-graphql/latest"` |
| `metadata.implementation` | \{ `generatedFullProviderApiClone`: `false`; `optionalBroaderSdkPackage`: `"@shopify/shopify-api"`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"@shopify/admin-api-client"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.generatedFullProviderApiClone` | `false` |
| `metadata.implementation.optionalBroaderSdkPackage` | `"@shopify/shopify-api"` |
| `metadata.implementation.rawClientEscapeHatch` | `true` |
| `metadata.implementation.sdkPackage` | `"@shopify/admin-api-client"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.rawProviderRequest` | \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.graphql"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \} |
| `metadata.rawProviderRequest.acknowledgementRequired` | `true` |
| `metadata.rawProviderRequest.capability` | `"ecommerce.graphql"` |
| `metadata.rawProviderRequest.coverage` | `"escape-hatch-not-full-provider-api"` |
| `metadata.sdkPackage` | `"@shopify/admin-api-client"` |
| <a id="property-name"></a> `name` | `"Shopify"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ecommerce.event.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyWebhook"`; \}\]; \}, \{ `alias`: `"ecommerce.order.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyOrder"`; \}\]; `providerOperation`: `"AdminGraphQL node Order"`; \}, \{ `alias`: `"ecommerce.order.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyOrder"`; \}\]; `providerOperation`: `"AdminGraphQL orders"`; \}, \{ `alias`: `"ecommerce.customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyCustomer"`; \}\]; `providerOperation`: `"AdminGraphQL customer"`; \}, \{ `alias`: `"ecommerce.customer.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyCustomer"`; \}\]; `providerOperation`: `"AdminGraphQL customers"`; \}, \{ `alias`: `"ecommerce.product.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyProduct"`; \}\]; `providerOperation`: `"AdminGraphQL node Product"`; \}, \{ `alias`: `"ecommerce.product.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyProduct"`; \}\]; `providerOperation`: `"AdminGraphQL products"`; \}, \{ `alias`: `"ecommerce.draftOrder.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyDraftOrder"`; \}\]; `providerOperation`: `"AdminGraphQL draftOrderCreate"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"shopify.adminGraphql"`; `capability`: `"ecommerce.graphql"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObjects`: \[\{ `kind`: `"shopifyGraphqlResult"`; \}\]; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ecommerce-shopify"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata."`, `"Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."`\] |
| <a id="property-provider"></a> `provider` | `"shopify"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
