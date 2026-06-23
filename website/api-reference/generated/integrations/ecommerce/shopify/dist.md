# integrations/ecommerce/shopify/dist

## Interfaces

### ShopifyConnection

#### Type Parameters

| Type Parameter |
| ------ |
| `TNode` |

#### Properties

##### edges?

```ts
optional edges?: {
  node?: TNode;
}[];
```

###### node?

```ts
optional node?: TNode;
```

##### pageInfo?

```ts
optional pageInfo?: {
  endCursor?: string;
  hasNextPage?: boolean;
};
```

###### endCursor?

```ts
optional endCursor?: string;
```

###### hasNextPage?

```ts
optional hasNextPage?: boolean;
```

***

### ShopifyCredentialStatusInput

#### Properties

##### adminAccessConfigured?

```ts
optional adminAccessConfigured?: boolean;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### shopDomain?

```ts
optional shopDomain?: string;
```

##### webhookSecretConfigured?

```ts
optional webhookSecretConfigured?: boolean;
```

***

### ShopifyDraftOrderCreateResult

#### Properties

##### draftOrder?

```ts
optional draftOrder?: Record<string, unknown>;
```

##### userErrors

```ts
userErrors: {
  field?: string[];
  message: string;
}[];
```

###### field?

```ts
optional field?: string[];
```

###### message

```ts
message: string;
```

***

### ShopifyDraftOrderInput

#### Properties

##### input

```ts
input: Record<string, unknown>;
```

***

### ShopifyEcommerceClient

#### Properties

##### rawClient

```ts
rawClient: AdminApiClient;
```

#### Methods

##### createDraftOrder()

```ts
createDraftOrder(input): Promise<ShopifyDraftOrderCreateResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyDraftOrderInput`](#shopifydraftorderinput) |

###### Returns

`Promise`\<[`ShopifyDraftOrderCreateResult`](#shopifydraftordercreateresult)\>

##### getCustomer()

```ts
getCustomer(input): Promise<Record<string, unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyIdInput`](#shopifyidinput) |

###### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

##### getOrder()

```ts
getOrder(input): Promise<Record<string, unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyIdInput`](#shopifyidinput) |

###### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

##### getProduct()

```ts
getProduct(input): Promise<Record<string, unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyIdInput`](#shopifyidinput) |

###### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

##### getShop()

```ts
getShop(): Promise<Record<string, unknown>>;
```

###### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

##### graphql()

```ts
graphql<TData>(input): Promise<ShopifyGraphqlResponse<TData>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TData` | `Record`\<`string`, `unknown`\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyGraphqlInput`](#shopifygraphqlinput) |

###### Returns

`Promise`\<[`ShopifyGraphqlResponse`](#shopifygraphqlresponse)\<`TData`\>\>

##### parseWebhook()

```ts
parseWebhook(input): Promise<ShopifyWebhook>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyWebhookParseInput`](#shopifywebhookparseinput) |

###### Returns

`Promise`\<[`ShopifyWebhook`](#shopifywebhook)\>

##### searchCustomers()

```ts
searchCustomers(input?): Promise<ShopifySearchResult<Record<string, unknown>>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ShopifySearchInput`](#shopifysearchinput) |

###### Returns

`Promise`\<[`ShopifySearchResult`](#shopifysearchresult)\<`Record`\<`string`, `unknown`\>\>\>

##### searchOrders()

```ts
searchOrders(input?): Promise<ShopifySearchResult<Record<string, unknown>>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ShopifySearchInput`](#shopifysearchinput) |

###### Returns

`Promise`\<[`ShopifySearchResult`](#shopifysearchresult)\<`Record`\<`string`, `unknown`\>\>\>

##### searchProducts()

```ts
searchProducts(input?): Promise<ShopifySearchResult<Record<string, unknown>>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ShopifySearchInput`](#shopifysearchinput) |

###### Returns

`Promise`\<[`ShopifySearchResult`](#shopifysearchresult)\<`Record`\<`string`, `unknown`\>\>\>

***

### ShopifyEcommerceClientOptions

#### Properties

##### adminAccessToken

```ts
adminAccessToken: string;
```

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### fetch?

```ts
optional fetch?: {
  (input, init?): Promise<Response>;
  (input, init?): Promise<Response>;
};
```

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `URL` \| `RequestInfo` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `Request` \| `URL` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

##### rawClient?

```ts
optional rawClient?: AdminApiClient;
```

##### shopDomain

```ts
shopDomain: string;
```

***

### ShopifyGraphqlInput

#### Properties

##### operationName?

```ts
optional operationName?: string;
```

##### query

```ts
query: string;
```

##### variables?

```ts
optional variables?: ShopifyGraphqlVariables;
```

***

### ShopifyGraphqlResponse

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TData` | `Record`\<`string`, `unknown`\> |

#### Properties

##### data?

```ts
optional data?: TData;
```

##### errors?

```ts
optional errors?: unknown;
```

##### extensions?

```ts
optional extensions?: Record<string, unknown>;
```

##### headers?

```ts
optional headers?: Headers;
```

***

### ShopifyIdInput

#### Properties

##### id

```ts
id: string;
```

***

### ShopifySearchInput

#### Properties

##### after?

```ts
optional after?: string;
```

##### first?

```ts
optional first?: number;
```

##### query?

```ts
optional query?: string;
```

***

### ShopifySearchResult

#### Type Parameters

| Type Parameter |
| ------ |
| `TNode` |

#### Properties

##### endCursor?

```ts
optional endCursor?: string;
```

##### hasNextPage

```ts
hasNextPage: boolean;
```

##### nodes

```ts
nodes: TNode[];
```

***

### ShopifyWebhook

#### Properties

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### payload?

```ts
optional payload?: unknown;
```

##### rawBody

```ts
rawBody: string;
```

##### shopDomain?

```ts
optional shopDomain?: string;
```

##### topic?

```ts
optional topic?: string;
```

##### webhookId?

```ts
optional webhookId?: string;
```

***

### ShopifyWebhookParseInput

#### Properties

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### hmac?

```ts
optional hmac?: string;
```

##### request

```ts
request: string | Request | Buffer<ArrayBufferLike>;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### shopDomain?

```ts
optional shopDomain?: string;
```

##### topic?

```ts
optional topic?: string;
```

##### webhookId?

```ts
optional webhookId?: string;
```

##### webhookSecret?

```ts
optional webhookSecret?: string;
```

## Type Aliases

### ShopifyAdminApiClient

```ts
type ShopifyAdminApiClient = ReturnType<typeof createAdminApiClient>;
```

***

### ShopifyGraphqlVariables

```ts
type ShopifyGraphqlVariables = Record<string, unknown>;
```

***

### ShopifyRawAdminGraphqlInput

```ts
type ShopifyRawAdminGraphqlInput = Partial<ShopifyGraphqlInput>;
```

## Functions

### createShopifyEcommerceClient()

```ts
function createShopifyEcommerceClient(options): ShopifyEcommerceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ShopifyEcommerceClientOptions`](#shopifyecommerceclientoptions) |

#### Returns

[`ShopifyEcommerceClient`](#shopifyecommerceclient)

***

### createShopifyEcommerceIntegration()

```ts
function createShopifyEcommerceIntegration(options): DefinedIntegration<{
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
  }];
  packageName: "@cognidesk/integration-ecommerce-shopify";
  privacyNotes: ["Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata.", "Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."];
  provider: "shopify";
  trustLevel: "official";
}, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ShopifyEcommerceClientOptions`](#shopifyecommerceclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validates and parses Shopify webhooks for SDK-user-owned commerce support workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Shopify webhooks"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyWebhook"`;
        `label`: `"Shopify Webhook"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Shopify Admin GraphQL records such as shop, order, customer, product, and draft order nodes."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Shopify records"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyShop"`;
        `label`: `"Shopify Shop"`;
      \}, \{
        `kind`: `"shopifyOrder"`;
        `label`: `"Shopify Order"`;
      \}, \{
        `kind`: `"shopifyCustomer"`;
        `label`: `"Shopify Customer"`;
      \}, \{
        `kind`: `"shopifyProduct"`;
        `label`: `"Shopify Product"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Searches Shopify orders, customers, and products with SDK-user-supplied Admin GraphQL queries."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Shopify records"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyOrder"`;
        `label`: `"Shopify Order"`;
      \}, \{
        `kind`: `"shopifyCustomer"`;
        `label`: `"Shopify Customer"`;
      \}, \{
        `kind`: `"shopifyProduct"`;
        `label`: `"Shopify Product"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates Shopify draft orders through Admin GraphQL when SDK-user policy permits commerce mutations."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Shopify draft orders"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyDraftOrder"`;
        `label`: `"Shopify Draft Order"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`\];
     `capability`: `"ecommerce.graphql"`;
     `description`: `"Runs SDK-user-selected raw Admin GraphQL operations against the configured Shopify shop as an explicit escape hatch."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Run Shopify Admin GraphQL"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyGraphqlResult"`;
        `label`: `"Shopify GraphQL Result"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"ecommerce"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Shopify Admin GraphQL API reference"`;
        `url`: `"https://shopify.dev/docs/api/admin-graphql/latest"`;
      \}, \{
        `label`: `"Shopify Admin API client"`;
        `url`: `"https://www.npmjs.com/package/@shopify/admin-api-client"`;
      \}, \{
        `label`: `"Shopify webhook HMAC validation"`;
        `url`: `"https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook"`;
     \}\];
     `notes`: \[`"Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client."`, `"The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied."`, `"Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `description`: `"The SDK user's Shopify admin shop domain, for example example.myshopify.com."`;
     `id`: `"shopify-shop-domain"`;
     `label`: `"Shopify shop domain"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side Admin API access token with SDK-user-selected scopes."`;
     `id`: `"shopify-admin-access"`;
     `label`: `"Shopify Admin API access"`;
     `metadata`: \{
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: \[`"read_orders"`, `"read_customers"`, `"read_products"`, `"write_draft_orders"`\];
   \}, \{
     `description`: `"Server-side secret used to validate Shopify webhook HMAC signatures."`;
     `id`: `"shopify-webhook-secret"`;
     `label`: `"Shopify webhook secret"`;
     `required`: `false`;
  \}\];
  `directions`: \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"ecommerce.shopify"`;
  `limitations`: \[`"The SDK user chooses Admin API version, scopes, webhook topics, customer visibility, fulfillment behavior, consent rules, and retention policy."`, `"This package provides normalized Admin GraphQL support operations and signature checks; it does not decide when to create draft orders, contact customers, issue discounts, refund orders, or expose commerce data."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `defaultGraphqlAdminApiVersion`: `"2026-04"`;
     `docs`: `"https://shopify.dev/docs/api/admin-graphql/latest"`;
     `implementation`: \{
        `generatedFullProviderApiClone`: `false`;
        `optionalBroaderSdkPackage`: `"@shopify/shopify-api"`;
        `rawClientEscapeHatch`: `true`;
        `sdkPackage`: `"@shopify/admin-api-client"`;
        `strategy`: `"official-sdk"`;
     \};
     `rawProviderRequest`: \{
        `acknowledgementRequired`: `true`;
        `capability`: `"ecommerce.graphql"`;
        `coverage`: `"escape-hatch-not-full-provider-api"`;
     \};
     `sdkPackage`: `"@shopify/admin-api-client"`;
  \};
  `name`: `"Shopify"`;
  `operations`: \[\{
     `alias`: `"ecommerce.event.receive"`;
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"shopifyWebhook"`;
     \}\];
   \}, \{
     `alias`: `"ecommerce.order.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"shopifyOrder"`;
     \}\];
     `providerOperation`: `"AdminGraphQL node Order"`;
   \}, \{
     `alias`: `"ecommerce.order.search"`;
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"shopifyOrder"`;
     \}\];
     `providerOperation`: `"AdminGraphQL orders"`;
  \}\];
  `packageName`: `"@cognidesk/integration-ecommerce-shopify"`;
  `privacyNotes`: \[`"Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata."`, `"Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."`\];
  `provider`: `"shopify"`;
  `trustLevel`: `"official"`;
\}, `unknown`, `never`\>

***

### createShopifyEcommerceIntegrationFromClient()

```ts
function createShopifyEcommerceIntegrationFromClient(client): DefinedIntegration<{
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
  }];
  packageName: "@cognidesk/integration-ecommerce-shopify";
  privacyNotes: ["Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata.", "Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."];
  provider: "shopify";
  trustLevel: "official";
}, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`ShopifyEcommerceClient`](#shopifyecommerceclient) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validates and parses Shopify webhooks for SDK-user-owned commerce support workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Shopify webhooks"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyWebhook"`;
        `label`: `"Shopify Webhook"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads Shopify Admin GraphQL records such as shop, order, customer, product, and draft order nodes."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Shopify records"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyShop"`;
        `label`: `"Shopify Shop"`;
      \}, \{
        `kind`: `"shopifyOrder"`;
        `label`: `"Shopify Order"`;
      \}, \{
        `kind`: `"shopifyCustomer"`;
        `label`: `"Shopify Customer"`;
      \}, \{
        `kind`: `"shopifyProduct"`;
        `label`: `"Shopify Product"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Searches Shopify orders, customers, and products with SDK-user-supplied Admin GraphQL queries."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Shopify records"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyOrder"`;
        `label`: `"Shopify Order"`;
      \}, \{
        `kind`: `"shopifyCustomer"`;
        `label`: `"Shopify Customer"`;
      \}, \{
        `kind`: `"shopifyProduct"`;
        `label`: `"Shopify Product"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates Shopify draft orders through Admin GraphQL when SDK-user policy permits commerce mutations."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Shopify draft orders"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyDraftOrder"`;
        `label`: `"Shopify Draft Order"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`\];
     `capability`: `"ecommerce.graphql"`;
     `description`: `"Runs SDK-user-selected raw Admin GraphQL operations against the configured Shopify shop as an explicit escape hatch."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Run Shopify Admin GraphQL"`;
     `providerObjects`: \[\{
        `kind`: `"shopifyGraphqlResult"`;
        `label`: `"Shopify GraphQL Result"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"ecommerce"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Shopify Admin GraphQL API reference"`;
        `url`: `"https://shopify.dev/docs/api/admin-graphql/latest"`;
      \}, \{
        `label`: `"Shopify Admin API client"`;
        `url`: `"https://www.npmjs.com/package/@shopify/admin-api-client"`;
      \}, \{
        `label`: `"Shopify webhook HMAC validation"`;
        `url`: `"https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook"`;
     \}\];
     `notes`: \[`"Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client."`, `"The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied."`, `"Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `description`: `"The SDK user's Shopify admin shop domain, for example example.myshopify.com."`;
     `id`: `"shopify-shop-domain"`;
     `label`: `"Shopify shop domain"`;
     `required`: `true`;
   \}, \{
     `description`: `"Server-side Admin API access token with SDK-user-selected scopes."`;
     `id`: `"shopify-admin-access"`;
     `label`: `"Shopify Admin API access"`;
     `metadata`: \{
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: \[`"read_orders"`, `"read_customers"`, `"read_products"`, `"write_draft_orders"`\];
   \}, \{
     `description`: `"Server-side secret used to validate Shopify webhook HMAC signatures."`;
     `id`: `"shopify-webhook-secret"`;
     `label`: `"Shopify webhook secret"`;
     `required`: `false`;
  \}\];
  `directions`: \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"ecommerce.shopify"`;
  `limitations`: \[`"The SDK user chooses Admin API version, scopes, webhook topics, customer visibility, fulfillment behavior, consent rules, and retention policy."`, `"This package provides normalized Admin GraphQL support operations and signature checks; it does not decide when to create draft orders, contact customers, issue discounts, refund orders, or expose commerce data."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `defaultGraphqlAdminApiVersion`: `"2026-04"`;
     `docs`: `"https://shopify.dev/docs/api/admin-graphql/latest"`;
     `implementation`: \{
        `generatedFullProviderApiClone`: `false`;
        `optionalBroaderSdkPackage`: `"@shopify/shopify-api"`;
        `rawClientEscapeHatch`: `true`;
        `sdkPackage`: `"@shopify/admin-api-client"`;
        `strategy`: `"official-sdk"`;
     \};
     `rawProviderRequest`: \{
        `acknowledgementRequired`: `true`;
        `capability`: `"ecommerce.graphql"`;
        `coverage`: `"escape-hatch-not-full-provider-api"`;
     \};
     `sdkPackage`: `"@shopify/admin-api-client"`;
  \};
  `name`: `"Shopify"`;
  `operations`: \[\{
     `alias`: `"ecommerce.event.receive"`;
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"shopifyWebhook"`;
     \}\];
   \}, \{
     `alias`: `"ecommerce.order.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"shopifyOrder"`;
     \}\];
     `providerOperation`: `"AdminGraphQL node Order"`;
   \}, \{
     `alias`: `"ecommerce.order.search"`;
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"shopifyOrder"`;
     \}\];
     `providerOperation`: `"AdminGraphQL orders"`;
  \}\];
  `packageName`: `"@cognidesk/integration-ecommerce-shopify"`;
  `privacyNotes`: \[`"Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata."`, `"Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata."`\];
  `provider`: `"shopify"`;
  `trustLevel`: `"official"`;
\}, `unknown`, `never`\>

***

### createShopifyEcommerceLiveChecks()

```ts
function createShopifyEcommerceLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        id: unknown;
        myshopifyDomain: unknown;
        name: unknown;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `client`: `Pick`\<[`ShopifyEcommerceClient`](#shopifyecommerceclient), `"getShop"`\>; \} |
| `options.client` | `Pick`\<[`ShopifyEcommerceClient`](#shopifyecommerceclient), `"getShop"`\> |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `id`: `unknown`;
        `myshopifyDomain`: `unknown`;
        `name`: `unknown`;
     \};
  \}\>;
\}[]

***

### normalizeShopifyShopDomain()

```ts
function normalizeShopifyShopDomain(shopDomain): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shopDomain` | `string` |

#### Returns

`string`

***

### parseShopifyWebhook()

```ts
function parseShopifyWebhook(input): Promise<{
  apiVersion?: string;
  payload?: unknown;
  rawBody: string;
  shopDomain?: string;
  topic?: string;
  webhookId?: string;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyWebhookParseInput`](#shopifywebhookparseinput) |

#### Returns

`Promise`\<\{
  `apiVersion?`: `string`;
  `payload?`: `unknown`;
  `rawBody`: `string`;
  `shopDomain?`: `string`;
  `topic?`: `string`;
  `webhookId?`: `string`;
\}\>

***

### shopifyEcommerceCredentialStatuses()

```ts
function shopifyEcommerceCredentialStatuses(input): {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ShopifyCredentialStatusInput`](#shopifycredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

***

### validateShopifyWebhookSignature()

```ts
function validateShopifyWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `hmac`: `string`; `rawBody`: `string` \| `Buffer`\<`ArrayBufferLike`\>; `webhookSecret`: `string`; \} |
| `input.hmac` | `string` |
| `input.rawBody` | `string` \| `Buffer`\<`ArrayBufferLike`\> |
| `input.webhookSecret` | `string` |

#### Returns

`boolean`

## References

### defaultShopifyGraphqlAdminApiVersion

Re-exports [defaultShopifyGraphqlAdminApiVersion](dist/manifest.md#defaultshopifygraphqladminapiversion)

***

### shopifyEcommerceProviderManifest

Re-exports [shopifyEcommerceProviderManifest](dist/manifest.md#shopifyecommerceprovidermanifest)
