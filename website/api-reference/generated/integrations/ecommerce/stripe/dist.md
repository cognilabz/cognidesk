# integrations/ecommerce/stripe/dist

## Interfaces

### StripeCancelSubscriptionInput

#### Extends

- [`StripeIdInput`](#stripeidinput)

#### Properties

##### expand?

```ts
optional expand?: string[];
```

###### Inherited from

[`StripeIdInput`](#stripeidinput).[`expand`](#expand-1)

##### id

```ts
id: string;
```

###### Inherited from

[`StripeIdInput`](#stripeidinput).[`id`](#id-1)

##### options?

```ts
optional options?: StripeRequestOptions;
```

###### Inherited from

[`StripeIdInput`](#stripeidinput).[`options`](#options-3)

##### params?

```ts
optional params?: SubscriptionCancelParams;
```

***

### StripeCreatePaymentIntentInput

#### Properties

##### options?

```ts
optional options?: StripeRequestOptions;
```

##### params

```ts
params: PaymentIntentCreateParams;
```

***

### StripeCreateRefundInput

#### Properties

##### options?

```ts
optional options?: StripeRequestOptions;
```

##### params

```ts
params: RefundCreateParams;
```

***

### StripeCredentialStatusInput

#### Properties

##### connectMode?

```ts
optional connectMode?: StripeConnectMode;
```

##### requiredScopes?

```ts
optional requiredScopes?: string[];
```

##### restrictedKeyScopes?

```ts
optional restrictedKeyScopes?: string[];
```

##### secretKeyConfigured?

```ts
optional secretKeyConfigured?: boolean;
```

##### stripeAccountConfigured?

```ts
optional stripeAccountConfigured?: boolean;
```

##### webhookSigningSecretConfigured?

```ts
optional webhookSigningSecretConfigured?: boolean;
```

***

### StripeEcommerceClient

#### Properties

##### rawClient

```ts
rawClient: Stripe;
```

#### Methods

##### cancelSubscription()

```ts
cancelSubscription(input): Promise<Response<Subscription>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeCancelSubscriptionInput`](#stripecancelsubscriptioninput) |

###### Returns

`Promise`\<`Response`\<`Subscription`\>\>

##### closeDispute()

```ts
closeDispute(input): Promise<Response<Dispute>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`Dispute`\>\>

##### createPaymentIntent()

```ts
createPaymentIntent(input): Promise<Response<PaymentIntent>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeCreatePaymentIntentInput`](#stripecreatepaymentintentinput) |

###### Returns

`Promise`\<`Response`\<`PaymentIntent`\>\>

##### createRefund()

```ts
createRefund(input): Promise<Response<Refund>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeCreateRefundInput`](#stripecreaterefundinput) |

###### Returns

`Promise`\<`Response`\<`Refund`\>\>

##### createWebhookEndpoint()

```ts
createWebhookEndpoint(input): Promise<Response<WebhookEndpoint>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `options?`: [`StripeRequestOptions`](#striperequestoptions); `params`: `WebhookEndpointCreateParams`; \} |
| `input.options?` | [`StripeRequestOptions`](#striperequestoptions) |
| `input.params` | `WebhookEndpointCreateParams` |

###### Returns

`Promise`\<`Response`\<`WebhookEndpoint`\>\>

##### deleteWebhookEndpoint()

```ts
deleteWebhookEndpoint(input): Promise<Response<DeletedWebhookEndpoint>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`DeletedWebhookEndpoint`\>\>

##### getAccount()

```ts
getAccount(options?): Promise<Account>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`StripeRequestOptions`](#striperequestoptions) |

###### Returns

`Promise`\<`Account`\>

##### getCheckoutSession()

```ts
getCheckoutSession(input): Promise<Response<Session>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`Session`\>\>

##### getCustomer()

```ts
getCustomer(input): Promise<Response<any>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`any`\>\>

##### getDispute()

```ts
getDispute(input): Promise<Response<Dispute>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`Dispute`\>\>

##### getInvoice()

```ts
getInvoice(input): Promise<Response<Invoice>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`Invoice`\>\>

##### getPaymentIntent()

```ts
getPaymentIntent(input): Promise<Response<PaymentIntent>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`PaymentIntent`\>\>

##### getRefund()

```ts
getRefund(input): Promise<Response<Refund>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`Refund`\>\>

##### getSubscription()

```ts
getSubscription(input): Promise<Response<Subscription>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`Subscription`\>\>

##### getWebhookEndpoint()

```ts
getWebhookEndpoint(input): Promise<Response<WebhookEndpoint>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) |

###### Returns

`Promise`\<`Response`\<`WebhookEndpoint`\>\>

##### listCheckoutSessions()

```ts
listCheckoutSessions(input?): Promise<ApiList<Session>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`StripeListInput`](#stripelistinput) |

###### Returns

`Promise`\<`ApiList`\<`Session`\>\>

##### listRefunds()

```ts
listRefunds(input?): Promise<ApiList<Refund>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`StripeListInput`](#stripelistinput) |

###### Returns

`Promise`\<`ApiList`\<`Refund`\>\>

##### listWebhookEndpoints()

```ts
listWebhookEndpoints(input?): Promise<ApiList<WebhookEndpoint>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`StripeListInput`](#stripelistinput) |

###### Returns

`Promise`\<`ApiList`\<`WebhookEndpoint`\>\>

##### parseWebhook()

```ts
parseWebhook(input): Promise<{
  event: Event;
  rawBody: string;
  signatureHeader: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeWebhookParseInput`](#stripewebhookparseinput) |

###### Returns

`Promise`\<\{
  `event`: `Event`;
  `rawBody`: `string`;
  `signatureHeader`: `string`;
\}\>

##### searchCustomers()

```ts
searchCustomers(input): Promise<ApiSearchResult<Customer>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeSearchCustomersInput`](#stripesearchcustomersinput) |

###### Returns

`Promise`\<`ApiSearchResult`\<`Customer`\>\>

##### updateDispute()

```ts
updateDispute(input): Promise<Response<Dispute>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) & \{ `params`: `DisputeUpdateParams`; \} |

###### Returns

`Promise`\<`Response`\<`Dispute`\>\>

##### updateSubscription()

```ts
updateSubscription(input): Promise<Response<Subscription>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeUpdateSubscriptionInput`](#stripeupdatesubscriptioninput) |

###### Returns

`Promise`\<`Response`\<`Subscription`\>\>

##### updateWebhookEndpoint()

```ts
updateWebhookEndpoint(input): Promise<Response<WebhookEndpoint>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`StripeIdInput`](#stripeidinput) & \{ `params`: `WebhookEndpointUpdateParams`; \} |

###### Returns

`Promise`\<`Response`\<`WebhookEndpoint`\>\>

***

### StripeEcommerceClientOptions

#### Properties

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### maxNetworkRetries?

```ts
optional maxNetworkRetries?: number;
```

##### rawClient?

```ts
optional rawClient?: Stripe;
```

##### secretKey

```ts
secretKey: string;
```

##### stripeAccount?

```ts
optional stripeAccount?: string;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

***

### StripeIdInput

#### Extended by

- [`StripeCancelSubscriptionInput`](#stripecancelsubscriptioninput)
- [`StripeUpdateSubscriptionInput`](#stripeupdatesubscriptioninput)

#### Properties

##### expand?

```ts
optional expand?: string[];
```

##### id

```ts
id: string;
```

##### options?

```ts
optional options?: StripeRequestOptions;
```

***

### StripeListInput

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### ending\_before?

```ts
optional ending_before?: string;
```

##### expand?

```ts
optional expand?: string[];
```

##### limit?

```ts
optional limit?: number;
```

##### options?

```ts
optional options?: StripeRequestOptions;
```

##### starting\_after?

```ts
optional starting_after?: string;
```

***

### StripeRawClientInput

#### Properties

##### rawClientOnly?

```ts
optional rawClientOnly?: boolean;
```

***

### StripeRequestOptions

#### Properties

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### stripeAccount?

```ts
optional stripeAccount?: string;
```

***

### StripeSearchCustomersInput

#### Properties

##### expand?

```ts
optional expand?: string[];
```

##### limit?

```ts
optional limit?: number;
```

##### options?

```ts
optional options?: StripeRequestOptions;
```

##### page?

```ts
optional page?: string;
```

##### query

```ts
query: string;
```

***

### StripeUpdateSubscriptionInput

#### Extends

- [`StripeIdInput`](#stripeidinput)

#### Properties

##### expand?

```ts
optional expand?: string[];
```

###### Inherited from

[`StripeIdInput`](#stripeidinput).[`expand`](#expand-1)

##### id

```ts
id: string;
```

###### Inherited from

[`StripeIdInput`](#stripeidinput).[`id`](#id-1)

##### options?

```ts
optional options?: StripeRequestOptions;
```

###### Inherited from

[`StripeIdInput`](#stripeidinput).[`options`](#options-3)

##### params

```ts
params: SubscriptionUpdateParams;
```

***

### StripeWebhookParseInput

#### Properties

##### request

```ts
request: string | Request | Buffer<ArrayBufferLike>;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### signatureHeader?

```ts
optional signatureHeader?: string;
```

##### signingSecret?

```ts
optional signingSecret?: string;
```

##### toleranceSeconds?

```ts
optional toleranceSeconds?: number;
```

## Type Aliases

### StripeConnectMode

```ts
type StripeConnectMode = "none" | "platform" | "connected-account" | "organization";
```

***

### StripeWebhookEndpointManageInput

```ts
type StripeWebhookEndpointManageInput =
  | {
  action: "create";
  options?: StripeRequestOptions;
  params: Stripe.WebhookEndpointCreateParams;
}
  | {
  action: "get";
} & StripeIdInput
  | {
  action: "list";
} & StripeListInput
  | {
  action: "update";
  params: Stripe.WebhookEndpointUpdateParams;
} & StripeIdInput
  | {
  action: "delete";
} & StripeIdInput;
```

## Functions

### createStripeEcommerceClient()

```ts
function createStripeEcommerceClient(options): StripeEcommerceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`StripeEcommerceClientOptions`](#stripeecommerceclientoptions) |

#### Returns

[`StripeEcommerceClient`](#stripeecommerceclient)

***

### createStripeEcommerceIntegration()

```ts
function createStripeEcommerceIntegration(options): DefinedIntegration<{
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Stripe webhook events for SDK-user-owned commerce and payment support workflows.";
     exposesSensitiveData: true;
     label: "Receive Stripe events";
     providerObjects: [{
        kind: "stripeEvent";
        label: "Stripe Event";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads customers, Checkout Sessions, PaymentIntents, subscriptions, invoices, refunds, and disputes.";
     exposesSensitiveData: true;
     label: "Read Stripe commerce records";
     providerObjects: [{
        kind: "stripeCustomer";
        label: "Stripe Customer";
      }, {
        kind: "stripeCheckoutSession";
        label: "Stripe Checkout Session";
      }, {
        kind: "stripePaymentIntent";
        label: "Stripe PaymentIntent";
      }, {
        kind: "stripeSubscription";
        label: "Stripe Subscription";
      }, {
        kind: "stripeInvoice";
        label: "Stripe Invoice";
      }, {
        kind: "stripeRefund";
        label: "Stripe Refund";
      }, {
        kind: "stripeDispute";
        label: "Stripe Dispute";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Lists and searches support-relevant Stripe objects with SDK-user-supplied filters.";
     exposesSensitiveData: true;
     label: "Search Stripe commerce records";
     providerObjects: [{
        kind: "stripeCustomer";
        label: "Stripe Customer";
      }, {
        kind: "stripeCheckoutSession";
        label: "Stripe Checkout Session";
      }, {
        kind: "stripePaymentIntent";
        label: "Stripe PaymentIntent";
     }];
     requiresCredential: true;
  }];
  category: "ecommerce";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Stripe API reference";
        url: "https://docs.stripe.com/api";
      }, {
        label: "Stripe Node SDK";
        url: "https://github.com/stripe/stripe-node";
      }, {
        label: "Stripe webhook signature verification";
        url: "https://docs.stripe.com/webhooks/signature";
     }];
     notes: ["Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK.", "The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage.", "Generated Stripe full-provider API clones are intentionally not part of this package."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side Stripe secret or restricted key selected and owned by the SDK user.";
     id: "stripe-secret-key";
     label: "Stripe secret key";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["customers:read", "payment_intents:read", "checkout_sessions:read", "subscriptions:read", "invoices:read", "refunds:read", "disputes:read", "subscriptions:write", "webhook_endpoints:read", "webhook_endpoints:write"];
   }, {
     description: "Endpoint signing secret used to validate Stripe-Signature headers against the raw request body.";
     id: "stripe-webhook-signing-secret";
     label: "Stripe webhook signing secret";
     required: true;
   }, {
     description: "SDK-user-selected account context for platform or connected-account routing.";
     id: "stripe-connect-mode";
     label: "Stripe Connect mode";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "ecommerce.stripe";
  limitations: ["The SDK user chooses Stripe account mode, restricted-key permissions, event destinations, webhook subscriptions, checkout UI, refund policy, dispute evidence policy, consent, and retention.", "This package provides normalized support-operation foundations and raw-client access; it does not decide when to charge, refund, cancel, submit evidence, or expose payment data to an operator."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     defaultApiVersion: "2026-05-27.dahlia";
     docs: "https://docs.stripe.com/api";
     implementation: {
        generatedFullProviderApiClone: false;
        rawClientEscapeHatch: true;
        sdkPackage: "stripe";
        strategy: "official-sdk";
     };
     rawProviderRequest: {
        acknowledgementRequired: true;
        capability: "ecommerce.payments";
        coverage: "escape-hatch-not-full-provider-api";
     };
     sdkPackage: "stripe";
  };
  name: "Stripe";
  operations: [{
     alias: "ecommerce.event.receive";
     capability: "receive";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeEvent";
     }];
   }, {
     alias: "ecommerce.order.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCheckoutSession";
     }];
     providerOperation: "checkout.sessions.retrieve";
   }, {
     alias: "ecommerce.order.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCheckoutSession";
     }];
     providerOperation: "checkout.sessions.list";
  }];
  packageName: "@cognidesk/integration-ecommerce-stripe";
  privacyNotes: ["Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata.", "Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."];
  provider: "stripe";
  trustLevel: "official";
}, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`StripeEcommerceClientOptions`](#stripeecommerceclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validates and parses Stripe webhook events for SDK-user-owned commerce and payment support workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Stripe events"`;
     `providerObjects`: \[\{
        `kind`: `"stripeEvent"`;
        `label`: `"Stripe Event"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads customers, Checkout Sessions, PaymentIntents, subscriptions, invoices, refunds, and disputes."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Stripe commerce records"`;
     `providerObjects`: \[\{
        `kind`: `"stripeCustomer"`;
        `label`: `"Stripe Customer"`;
      \}, \{
        `kind`: `"stripeCheckoutSession"`;
        `label`: `"Stripe Checkout Session"`;
      \}, \{
        `kind`: `"stripePaymentIntent"`;
        `label`: `"Stripe PaymentIntent"`;
      \}, \{
        `kind`: `"stripeSubscription"`;
        `label`: `"Stripe Subscription"`;
      \}, \{
        `kind`: `"stripeInvoice"`;
        `label`: `"Stripe Invoice"`;
      \}, \{
        `kind`: `"stripeRefund"`;
        `label`: `"Stripe Refund"`;
      \}, \{
        `kind`: `"stripeDispute"`;
        `label`: `"Stripe Dispute"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Lists and searches support-relevant Stripe objects with SDK-user-supplied filters."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Stripe commerce records"`;
     `providerObjects`: \[\{
        `kind`: `"stripeCustomer"`;
        `label`: `"Stripe Customer"`;
      \}, \{
        `kind`: `"stripeCheckoutSession"`;
        `label`: `"Stripe Checkout Session"`;
      \}, \{
        `kind`: `"stripePaymentIntent"`;
        `label`: `"Stripe PaymentIntent"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"ecommerce"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Stripe API reference"`;
        `url`: `"https://docs.stripe.com/api"`;
      \}, \{
        `label`: `"Stripe Node SDK"`;
        `url`: `"https://github.com/stripe/stripe-node"`;
      \}, \{
        `label`: `"Stripe webhook signature verification"`;
        `url`: `"https://docs.stripe.com/webhooks/signature"`;
     \}\];
     `notes`: \[`"Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK."`, `"The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage."`, `"Generated Stripe full-provider API clones are intentionally not part of this package."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `description`: `"Server-side Stripe secret or restricted key selected and owned by the SDK user."`;
     `id`: `"stripe-secret-key"`;
     `label`: `"Stripe secret key"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: \[`"customers:read"`, `"payment_intents:read"`, `"checkout_sessions:read"`, `"subscriptions:read"`, `"invoices:read"`, `"refunds:read"`, `"disputes:read"`, `"subscriptions:write"`, `"webhook_endpoints:read"`, `"webhook_endpoints:write"`\];
   \}, \{
     `description`: `"Endpoint signing secret used to validate Stripe-Signature headers against the raw request body."`;
     `id`: `"stripe-webhook-signing-secret"`;
     `label`: `"Stripe webhook signing secret"`;
     `required`: `true`;
   \}, \{
     `description`: `"SDK-user-selected account context for platform or connected-account routing."`;
     `id`: `"stripe-connect-mode"`;
     `label`: `"Stripe Connect mode"`;
     `required`: `false`;
  \}\];
  `directions`: \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"ecommerce.stripe"`;
  `limitations`: \[`"The SDK user chooses Stripe account mode, restricted-key permissions, event destinations, webhook subscriptions, checkout UI, refund policy, dispute evidence policy, consent, and retention."`, `"This package provides normalized support-operation foundations and raw-client access; it does not decide when to charge, refund, cancel, submit evidence, or expose payment data to an operator."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `defaultApiVersion`: `"2026-05-27.dahlia"`;
     `docs`: `"https://docs.stripe.com/api"`;
     `implementation`: \{
        `generatedFullProviderApiClone`: `false`;
        `rawClientEscapeHatch`: `true`;
        `sdkPackage`: `"stripe"`;
        `strategy`: `"official-sdk"`;
     \};
     `rawProviderRequest`: \{
        `acknowledgementRequired`: `true`;
        `capability`: `"ecommerce.payments"`;
        `coverage`: `"escape-hatch-not-full-provider-api"`;
     \};
     `sdkPackage`: `"stripe"`;
  \};
  `name`: `"Stripe"`;
  `operations`: \[\{
     `alias`: `"ecommerce.event.receive"`;
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"stripeEvent"`;
     \}\];
   \}, \{
     `alias`: `"ecommerce.order.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"stripeCheckoutSession"`;
     \}\];
     `providerOperation`: `"checkout.sessions.retrieve"`;
   \}, \{
     `alias`: `"ecommerce.order.search"`;
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"stripeCheckoutSession"`;
     \}\];
     `providerOperation`: `"checkout.sessions.list"`;
  \}\];
  `packageName`: `"@cognidesk/integration-ecommerce-stripe"`;
  `privacyNotes`: \[`"Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata."`, `"Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."`\];
  `provider`: `"stripe"`;
  `trustLevel`: `"official"`;
\}, `unknown`, `never`\>

***

### createStripeEcommerceIntegrationFromClient()

```ts
function createStripeEcommerceIntegrationFromClient(client): DefinedIntegration<{
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Stripe webhook events for SDK-user-owned commerce and payment support workflows.";
     exposesSensitiveData: true;
     label: "Receive Stripe events";
     providerObjects: [{
        kind: "stripeEvent";
        label: "Stripe Event";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads customers, Checkout Sessions, PaymentIntents, subscriptions, invoices, refunds, and disputes.";
     exposesSensitiveData: true;
     label: "Read Stripe commerce records";
     providerObjects: [{
        kind: "stripeCustomer";
        label: "Stripe Customer";
      }, {
        kind: "stripeCheckoutSession";
        label: "Stripe Checkout Session";
      }, {
        kind: "stripePaymentIntent";
        label: "Stripe PaymentIntent";
      }, {
        kind: "stripeSubscription";
        label: "Stripe Subscription";
      }, {
        kind: "stripeInvoice";
        label: "Stripe Invoice";
      }, {
        kind: "stripeRefund";
        label: "Stripe Refund";
      }, {
        kind: "stripeDispute";
        label: "Stripe Dispute";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Lists and searches support-relevant Stripe objects with SDK-user-supplied filters.";
     exposesSensitiveData: true;
     label: "Search Stripe commerce records";
     providerObjects: [{
        kind: "stripeCustomer";
        label: "Stripe Customer";
      }, {
        kind: "stripeCheckoutSession";
        label: "Stripe Checkout Session";
      }, {
        kind: "stripePaymentIntent";
        label: "Stripe PaymentIntent";
     }];
     requiresCredential: true;
  }];
  category: "ecommerce";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Stripe API reference";
        url: "https://docs.stripe.com/api";
      }, {
        label: "Stripe Node SDK";
        url: "https://github.com/stripe/stripe-node";
      }, {
        label: "Stripe webhook signature verification";
        url: "https://docs.stripe.com/webhooks/signature";
     }];
     notes: ["Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK.", "The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage.", "Generated Stripe full-provider API clones are intentionally not part of this package."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side Stripe secret or restricted key selected and owned by the SDK user.";
     id: "stripe-secret-key";
     label: "Stripe secret key";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["customers:read", "payment_intents:read", "checkout_sessions:read", "subscriptions:read", "invoices:read", "refunds:read", "disputes:read", "subscriptions:write", "webhook_endpoints:read", "webhook_endpoints:write"];
   }, {
     description: "Endpoint signing secret used to validate Stripe-Signature headers against the raw request body.";
     id: "stripe-webhook-signing-secret";
     label: "Stripe webhook signing secret";
     required: true;
   }, {
     description: "SDK-user-selected account context for platform or connected-account routing.";
     id: "stripe-connect-mode";
     label: "Stripe Connect mode";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "ecommerce.stripe";
  limitations: ["The SDK user chooses Stripe account mode, restricted-key permissions, event destinations, webhook subscriptions, checkout UI, refund policy, dispute evidence policy, consent, and retention.", "This package provides normalized support-operation foundations and raw-client access; it does not decide when to charge, refund, cancel, submit evidence, or expose payment data to an operator."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     defaultApiVersion: "2026-05-27.dahlia";
     docs: "https://docs.stripe.com/api";
     implementation: {
        generatedFullProviderApiClone: false;
        rawClientEscapeHatch: true;
        sdkPackage: "stripe";
        strategy: "official-sdk";
     };
     rawProviderRequest: {
        acknowledgementRequired: true;
        capability: "ecommerce.payments";
        coverage: "escape-hatch-not-full-provider-api";
     };
     sdkPackage: "stripe";
  };
  name: "Stripe";
  operations: [{
     alias: "ecommerce.event.receive";
     capability: "receive";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeEvent";
     }];
   }, {
     alias: "ecommerce.order.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCheckoutSession";
     }];
     providerOperation: "checkout.sessions.retrieve";
   }, {
     alias: "ecommerce.order.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCheckoutSession";
     }];
     providerOperation: "checkout.sessions.list";
  }];
  packageName: "@cognidesk/integration-ecommerce-stripe";
  privacyNotes: ["Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata.", "Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."];
  provider: "stripe";
  trustLevel: "official";
}, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | [`StripeEcommerceClient`](#stripeecommerceclient) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validates and parses Stripe webhook events for SDK-user-owned commerce and payment support workflows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Stripe events"`;
     `providerObjects`: \[\{
        `kind`: `"stripeEvent"`;
        `label`: `"Stripe Event"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"read-provider-object"`;
     `description`: `"Reads customers, Checkout Sessions, PaymentIntents, subscriptions, invoices, refunds, and disputes."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Read Stripe commerce records"`;
     `providerObjects`: \[\{
        `kind`: `"stripeCustomer"`;
        `label`: `"Stripe Customer"`;
      \}, \{
        `kind`: `"stripeCheckoutSession"`;
        `label`: `"Stripe Checkout Session"`;
      \}, \{
        `kind`: `"stripePaymentIntent"`;
        `label`: `"Stripe PaymentIntent"`;
      \}, \{
        `kind`: `"stripeSubscription"`;
        `label`: `"Stripe Subscription"`;
      \}, \{
        `kind`: `"stripeInvoice"`;
        `label`: `"Stripe Invoice"`;
      \}, \{
        `kind`: `"stripeRefund"`;
        `label`: `"Stripe Refund"`;
      \}, \{
        `kind`: `"stripeDispute"`;
        `label`: `"Stripe Dispute"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"search-provider-object"`;
     `description`: `"Lists and searches support-relevant Stripe objects with SDK-user-supplied filters."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Search Stripe commerce records"`;
     `providerObjects`: \[\{
        `kind`: `"stripeCustomer"`;
        `label`: `"Stripe Customer"`;
      \}, \{
        `kind`: `"stripeCheckoutSession"`;
        `label`: `"Stripe Checkout Session"`;
      \}, \{
        `kind`: `"stripePaymentIntent"`;
        `label`: `"Stripe PaymentIntent"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"ecommerce"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Stripe API reference"`;
        `url`: `"https://docs.stripe.com/api"`;
      \}, \{
        `label`: `"Stripe Node SDK"`;
        `url`: `"https://github.com/stripe/stripe-node"`;
      \}, \{
        `label`: `"Stripe webhook signature verification"`;
        `url`: `"https://docs.stripe.com/webhooks/signature"`;
     \}\];
     `notes`: \[`"Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK."`, `"The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage."`, `"Generated Stripe full-provider API clones are intentionally not part of this package."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `description`: `"Server-side Stripe secret or restricted key selected and owned by the SDK user."`;
     `id`: `"stripe-secret-key"`;
     `label`: `"Stripe secret key"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission-labels"`;
     \};
     `required`: `true`;
     `scopes`: \[`"customers:read"`, `"payment_intents:read"`, `"checkout_sessions:read"`, `"subscriptions:read"`, `"invoices:read"`, `"refunds:read"`, `"disputes:read"`, `"subscriptions:write"`, `"webhook_endpoints:read"`, `"webhook_endpoints:write"`\];
   \}, \{
     `description`: `"Endpoint signing secret used to validate Stripe-Signature headers against the raw request body."`;
     `id`: `"stripe-webhook-signing-secret"`;
     `label`: `"Stripe webhook signing secret"`;
     `required`: `true`;
   \}, \{
     `description`: `"SDK-user-selected account context for platform or connected-account routing."`;
     `id`: `"stripe-connect-mode"`;
     `label`: `"Stripe Connect mode"`;
     `required`: `false`;
  \}\];
  `directions`: \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"ecommerce.stripe"`;
  `limitations`: \[`"The SDK user chooses Stripe account mode, restricted-key permissions, event destinations, webhook subscriptions, checkout UI, refund policy, dispute evidence policy, consent, and retention."`, `"This package provides normalized support-operation foundations and raw-client access; it does not decide when to charge, refund, cancel, submit evidence, or expose payment data to an operator."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `defaultApiVersion`: `"2026-05-27.dahlia"`;
     `docs`: `"https://docs.stripe.com/api"`;
     `implementation`: \{
        `generatedFullProviderApiClone`: `false`;
        `rawClientEscapeHatch`: `true`;
        `sdkPackage`: `"stripe"`;
        `strategy`: `"official-sdk"`;
     \};
     `rawProviderRequest`: \{
        `acknowledgementRequired`: `true`;
        `capability`: `"ecommerce.payments"`;
        `coverage`: `"escape-hatch-not-full-provider-api"`;
     \};
     `sdkPackage`: `"stripe"`;
  \};
  `name`: `"Stripe"`;
  `operations`: \[\{
     `alias`: `"ecommerce.event.receive"`;
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"stripeEvent"`;
     \}\];
   \}, \{
     `alias`: `"ecommerce.order.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"stripeCheckoutSession"`;
     \}\];
     `providerOperation`: `"checkout.sessions.retrieve"`;
   \}, \{
     `alias`: `"ecommerce.order.search"`;
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"stripeCheckoutSession"`;
     \}\];
     `providerOperation`: `"checkout.sessions.list"`;
  \}\];
  `packageName`: `"@cognidesk/integration-ecommerce-stripe"`;
  `privacyNotes`: \[`"Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata."`, `"Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."`\];
  `provider`: `"stripe"`;
  `trustLevel`: `"official"`;
\}, `unknown`, `never`\>

***

### createStripeEcommerceLiveChecks()

```ts
function createStripeEcommerceLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: unknown;
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `client`: `Pick`\<[`StripeEcommerceClient`](#stripeecommerceclient), `"getAccount"`\>; \} |
| `options.client` | `Pick`\<[`StripeEcommerceClient`](#stripeecommerceclient), `"getAccount"`\> |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: `unknown`;
  \}\>;
\}[]

***

### parseStripeWebhook()

```ts
function parseStripeWebhook(rawClient, input): Promise<{
  event: Event;
  rawBody: string;
  signatureHeader: string;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawClient` | `Stripe` |
| `input` | [`StripeWebhookParseInput`](#stripewebhookparseinput) |

#### Returns

`Promise`\<\{
  `event`: `Event`;
  `rawBody`: `string`;
  `signatureHeader`: `string`;
\}\>

***

### stripeEcommerceCredentialStatuses()

```ts
function stripeEcommerceCredentialStatuses(input): {
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
| `input` | [`StripeCredentialStatusInput`](#stripecredentialstatusinput) |

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

## References

### defaultStripeApiVersion

Re-exports [defaultStripeApiVersion](dist/manifest.md#defaultstripeapiversion)

***

### stripeEcommerceProviderManifest

Re-exports [stripeEcommerceProviderManifest](dist/manifest.md#stripeecommerceprovidermanifest)
