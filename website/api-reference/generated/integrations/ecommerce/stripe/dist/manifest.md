# integrations/ecommerce/stripe/dist/manifest

## Variables

### defaultStripeApiVersion

```ts
const defaultStripeApiVersion: "2026-05-27.dahlia" = "2026-05-27.dahlia";
```

***

### stripeEcommerceProviderManifest

```ts
const stripeEcommerceProviderManifest: {
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
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Checkout Sessions, PaymentIntents, and refunds when SDK-user policy permits.";
     exposesSensitiveData: true;
     label: "Create Stripe payment support actions";
     providerObjects: [{
        kind: "stripeCheckoutSession";
        label: "Stripe Checkout Session";
      }, {
        kind: "stripePaymentIntent";
        label: "Stripe PaymentIntent";
      }, {
        kind: "stripeRefund";
        label: "Stripe Refund";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates subscriptions and manages webhook endpoints when SDK-user policy permits.";
     exposesSensitiveData: true;
     label: "Update Stripe support records";
     providerObjects: [{
        kind: "stripeSubscription";
        label: "Stripe Subscription";
      }, {
        kind: "stripeWebhookEndpoint";
        label: "Stripe Webhook Endpoint";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "ecommerce.payments";
     description: "Exposes the configured official Stripe SDK client for SDK-user-owned advanced operations.";
     exposesSensitiveData: true;
     extension: true;
     label: "Stripe raw SDK escape hatch";
     providerObjects: [{
        kind: "stripeRawClient";
        label: "Stripe SDK Client";
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
   }, {
     alias: "ecommerce.customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCustomer";
     }];
     providerOperation: "customers.retrieve";
   }, {
     alias: "ecommerce.customer.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCustomer";
     }];
     providerOperation: "customers.search";
   }, {
     alias: "ecommerce.payment.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripePaymentIntent";
     }];
     providerOperation: "paymentIntents.retrieve";
   }, {
     alias: "ecommerce.refund.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObjects: [{
        kind: "stripeRefund";
     }];
     providerOperation: "refunds.create";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "ecommerce.refund.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeRefund";
     }];
     providerOperation: "refunds.retrieve";
   }, {
     alias: "ecommerce.subscription.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeSubscription";
     }];
     providerOperation: "subscriptions.retrieve";
   }, {
     alias: "ecommerce.subscription.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObjects: [{
        kind: "stripeSubscription";
     }];
     providerOperation: "subscriptions.update";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "ecommerce.invoice.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeInvoice";
     }];
     providerOperation: "invoices.retrieve";
   }, {
     alias: "ecommerce.webhookEndpoint.manage";
     capability: "update-provider-object";
     changesWorkflow: true;
     providerObjects: [{
        kind: "stripeWebhookEndpoint";
     }];
     providerOperation: "webhookEndpoints";
     sideEffect: true;
   }, {
     alias: "stripe.rawClient";
     capability: "ecommerce.payments";
     exposesSensitiveData: true;
     extension: true;
     providerObjects: [{
        kind: "stripeRawClient";
     }];
  }];
  packageName: "@cognidesk/integration-ecommerce-stripe";
  privacyNotes: ["Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata.", "Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."];
  provider: "stripe";
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
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Stripe webhook events for SDK-user-owned commerce and payment support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Stripe events"`; `providerObjects`: \[\{ `kind`: `"stripeEvent"`; `label`: `"Stripe Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads customers, Checkout Sessions, PaymentIntents, subscriptions, invoices, refunds, and disputes."`; `exposesSensitiveData`: `true`; `label`: `"Read Stripe commerce records"`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; `label`: `"Stripe Customer"`; \}, \{ `kind`: `"stripeCheckoutSession"`; `label`: `"Stripe Checkout Session"`; \}, \{ `kind`: `"stripePaymentIntent"`; `label`: `"Stripe PaymentIntent"`; \}, \{ `kind`: `"stripeSubscription"`; `label`: `"Stripe Subscription"`; \}, \{ `kind`: `"stripeInvoice"`; `label`: `"Stripe Invoice"`; \}, \{ `kind`: `"stripeRefund"`; `label`: `"Stripe Refund"`; \}, \{ `kind`: `"stripeDispute"`; `label`: `"Stripe Dispute"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists and searches support-relevant Stripe objects with SDK-user-supplied filters."`; `exposesSensitiveData`: `true`; `label`: `"Search Stripe commerce records"`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; `label`: `"Stripe Customer"`; \}, \{ `kind`: `"stripeCheckoutSession"`; `label`: `"Stripe Checkout Session"`; \}, \{ `kind`: `"stripePaymentIntent"`; `label`: `"Stripe PaymentIntent"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Checkout Sessions, PaymentIntents, and refunds when SDK-user policy permits."`; `exposesSensitiveData`: `true`; `label`: `"Create Stripe payment support actions"`; `providerObjects`: \[\{ `kind`: `"stripeCheckoutSession"`; `label`: `"Stripe Checkout Session"`; \}, \{ `kind`: `"stripePaymentIntent"`; `label`: `"Stripe PaymentIntent"`; \}, \{ `kind`: `"stripeRefund"`; `label`: `"Stripe Refund"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates subscriptions and manages webhook endpoints when SDK-user policy permits."`; `exposesSensitiveData`: `true`; `label`: `"Update Stripe support records"`; `providerObjects`: \[\{ `kind`: `"stripeSubscription"`; `label`: `"Stripe Subscription"`; \}, \{ `kind`: `"stripeWebhookEndpoint"`; `label`: `"Stripe Webhook Endpoint"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"ecommerce.payments"`; `description`: `"Exposes the configured official Stripe SDK client for SDK-user-owned advanced operations."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Stripe raw SDK escape hatch"`; `providerObjects`: \[\{ `kind`: `"stripeRawClient"`; `label`: `"Stripe SDK Client"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"ecommerce"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Stripe API reference"`; `url`: `"https://docs.stripe.com/api"`; \}, \{ `label`: `"Stripe Node SDK"`; `url`: `"https://github.com/stripe/stripe-node"`; \}, \{ `label`: `"Stripe webhook signature verification"`; `url`: `"https://docs.stripe.com/webhooks/signature"`; \}\]; `notes`: \[`"Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK."`, `"The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage."`, `"Generated Stripe full-provider API clones are intentionally not part of this package."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Stripe API reference"`; `url`: `"https://docs.stripe.com/api"`; \}, \{ `label`: `"Stripe Node SDK"`; `url`: `"https://github.com/stripe/stripe-node"`; \}, \{ `label`: `"Stripe webhook signature verification"`; `url`: `"https://docs.stripe.com/webhooks/signature"`; \}\] |
| `coverage.notes` | \[`"Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK."`, `"The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage."`, `"Generated Stripe full-provider API clones are intentionally not part of this package."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side Stripe secret or restricted key selected and owned by the SDK user."`; `id`: `"stripe-secret-key"`; `label`: `"Stripe secret key"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"customers:read"`, `"payment_intents:read"`, `"checkout_sessions:read"`, `"subscriptions:read"`, `"invoices:read"`, `"refunds:read"`, `"disputes:read"`, `"subscriptions:write"`, `"webhook_endpoints:read"`, `"webhook_endpoints:write"`\]; \}, \{ `description`: `"Endpoint signing secret used to validate Stripe-Signature headers against the raw request body."`; `id`: `"stripe-webhook-signing-secret"`; `label`: `"Stripe webhook signing secret"`; `required`: `true`; \}, \{ `description`: `"SDK-user-selected account context for platform or connected-account routing."`; `id`: `"stripe-connect-mode"`; `label`: `"Stripe Connect mode"`; `required`: `false`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"ecommerce.stripe"` |
| `limitations` | \[`"The SDK user chooses Stripe account mode, restricted-key permissions, event destinations, webhook subscriptions, checkout UI, refund policy, dispute evidence policy, consent, and retention."`, `"This package provides normalized support-operation foundations and raw-client access; it does not decide when to charge, refund, cancel, submit evidence, or expose payment data to an operator."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `defaultApiVersion`: `"2026-05-27.dahlia"`; `docs`: `"https://docs.stripe.com/api"`; `implementation`: \{ `generatedFullProviderApiClone`: `false`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"stripe"`; `strategy`: `"official-sdk"`; \}; `rawProviderRequest`: \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.payments"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \}; `sdkPackage`: `"stripe"`; \} |
| `metadata.defaultApiVersion` | `"2026-05-27.dahlia"` |
| `metadata.docs` | `"https://docs.stripe.com/api"` |
| `metadata.implementation` | \{ `generatedFullProviderApiClone`: `false`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"stripe"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.generatedFullProviderApiClone` | `false` |
| `metadata.implementation.rawClientEscapeHatch` | `true` |
| `metadata.implementation.sdkPackage` | `"stripe"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.rawProviderRequest` | \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.payments"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \} |
| `metadata.rawProviderRequest.acknowledgementRequired` | `true` |
| `metadata.rawProviderRequest.capability` | `"ecommerce.payments"` |
| `metadata.rawProviderRequest.coverage` | `"escape-hatch-not-full-provider-api"` |
| `metadata.sdkPackage` | `"stripe"` |
| `name` | `"Stripe"` |
| `operations` | \[\{ `alias`: `"ecommerce.event.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeEvent"`; \}\]; \}, \{ `alias`: `"ecommerce.order.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCheckoutSession"`; \}\]; `providerOperation`: `"checkout.sessions.retrieve"`; \}, \{ `alias`: `"ecommerce.order.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCheckoutSession"`; \}\]; `providerOperation`: `"checkout.sessions.list"`; \}, \{ `alias`: `"ecommerce.customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; \}\]; `providerOperation`: `"customers.retrieve"`; \}, \{ `alias`: `"ecommerce.customer.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; \}\]; `providerOperation`: `"customers.search"`; \}, \{ `alias`: `"ecommerce.payment.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripePaymentIntent"`; \}\]; `providerOperation`: `"paymentIntents.retrieve"`; \}, \{ `alias`: `"ecommerce.refund.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObjects`: \[\{ `kind`: `"stripeRefund"`; \}\]; `providerOperation`: `"refunds.create"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ecommerce.refund.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeRefund"`; \}\]; `providerOperation`: `"refunds.retrieve"`; \}, \{ `alias`: `"ecommerce.subscription.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeSubscription"`; \}\]; `providerOperation`: `"subscriptions.retrieve"`; \}, \{ `alias`: `"ecommerce.subscription.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObjects`: \[\{ `kind`: `"stripeSubscription"`; \}\]; `providerOperation`: `"subscriptions.update"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ecommerce.invoice.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeInvoice"`; \}\]; `providerOperation`: `"invoices.retrieve"`; \}, \{ `alias`: `"ecommerce.webhookEndpoint.manage"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `providerObjects`: \[\{ `kind`: `"stripeWebhookEndpoint"`; \}\]; `providerOperation`: `"webhookEndpoints"`; `sideEffect`: `true`; \}, \{ `alias`: `"stripe.rawClient"`; `capability`: `"ecommerce.payments"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObjects`: \[\{ `kind`: `"stripeRawClient"`; \}\]; \}\] |
| `packageName` | `"@cognidesk/integration-ecommerce-stripe"` |
| `privacyNotes` | \[`"Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata."`, `"Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."`\] |
| `provider` | `"stripe"` |
| `trustLevel` | `"official"` |

***

### stripeEcommerceProviderManifestInput

```ts
const stripeEcommerceProviderManifestInput: {
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
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Checkout Sessions, PaymentIntents, and refunds when SDK-user policy permits.";
     exposesSensitiveData: true;
     label: "Create Stripe payment support actions";
     providerObjects: [{
        kind: "stripeCheckoutSession";
        label: "Stripe Checkout Session";
      }, {
        kind: "stripePaymentIntent";
        label: "Stripe PaymentIntent";
      }, {
        kind: "stripeRefund";
        label: "Stripe Refund";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates subscriptions and manages webhook endpoints when SDK-user policy permits.";
     exposesSensitiveData: true;
     label: "Update Stripe support records";
     providerObjects: [{
        kind: "stripeSubscription";
        label: "Stripe Subscription";
      }, {
        kind: "stripeWebhookEndpoint";
        label: "Stripe Webhook Endpoint";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "ecommerce.payments";
     description: "Exposes the configured official Stripe SDK client for SDK-user-owned advanced operations.";
     exposesSensitiveData: true;
     extension: true;
     label: "Stripe raw SDK escape hatch";
     providerObjects: [{
        kind: "stripeRawClient";
        label: "Stripe SDK Client";
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
   }, {
     alias: "ecommerce.customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCustomer";
     }];
     providerOperation: "customers.retrieve";
   }, {
     alias: "ecommerce.customer.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeCustomer";
     }];
     providerOperation: "customers.search";
   }, {
     alias: "ecommerce.payment.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripePaymentIntent";
     }];
     providerOperation: "paymentIntents.retrieve";
   }, {
     alias: "ecommerce.refund.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObjects: [{
        kind: "stripeRefund";
     }];
     providerOperation: "refunds.create";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "ecommerce.refund.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeRefund";
     }];
     providerOperation: "refunds.retrieve";
   }, {
     alias: "ecommerce.subscription.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeSubscription";
     }];
     providerOperation: "subscriptions.retrieve";
   }, {
     alias: "ecommerce.subscription.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObjects: [{
        kind: "stripeSubscription";
     }];
     providerOperation: "subscriptions.update";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "ecommerce.invoice.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "stripeInvoice";
     }];
     providerOperation: "invoices.retrieve";
   }, {
     alias: "ecommerce.webhookEndpoint.manage";
     capability: "update-provider-object";
     changesWorkflow: true;
     providerObjects: [{
        kind: "stripeWebhookEndpoint";
     }];
     providerOperation: "webhookEndpoints";
     sideEffect: true;
   }, {
     alias: "stripe.rawClient";
     capability: "ecommerce.payments";
     exposesSensitiveData: true;
     extension: true;
     providerObjects: [{
        kind: "stripeRawClient";
     }];
  }];
  packageName: "@cognidesk/integration-ecommerce-stripe";
  privacyNotes: ["Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata.", "Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."];
  provider: "stripe";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Stripe webhook events for SDK-user-owned commerce and payment support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Stripe events"`; `providerObjects`: \[\{ `kind`: `"stripeEvent"`; `label`: `"Stripe Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads customers, Checkout Sessions, PaymentIntents, subscriptions, invoices, refunds, and disputes."`; `exposesSensitiveData`: `true`; `label`: `"Read Stripe commerce records"`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; `label`: `"Stripe Customer"`; \}, \{ `kind`: `"stripeCheckoutSession"`; `label`: `"Stripe Checkout Session"`; \}, \{ `kind`: `"stripePaymentIntent"`; `label`: `"Stripe PaymentIntent"`; \}, \{ `kind`: `"stripeSubscription"`; `label`: `"Stripe Subscription"`; \}, \{ `kind`: `"stripeInvoice"`; `label`: `"Stripe Invoice"`; \}, \{ `kind`: `"stripeRefund"`; `label`: `"Stripe Refund"`; \}, \{ `kind`: `"stripeDispute"`; `label`: `"Stripe Dispute"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists and searches support-relevant Stripe objects with SDK-user-supplied filters."`; `exposesSensitiveData`: `true`; `label`: `"Search Stripe commerce records"`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; `label`: `"Stripe Customer"`; \}, \{ `kind`: `"stripeCheckoutSession"`; `label`: `"Stripe Checkout Session"`; \}, \{ `kind`: `"stripePaymentIntent"`; `label`: `"Stripe PaymentIntent"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Checkout Sessions, PaymentIntents, and refunds when SDK-user policy permits."`; `exposesSensitiveData`: `true`; `label`: `"Create Stripe payment support actions"`; `providerObjects`: \[\{ `kind`: `"stripeCheckoutSession"`; `label`: `"Stripe Checkout Session"`; \}, \{ `kind`: `"stripePaymentIntent"`; `label`: `"Stripe PaymentIntent"`; \}, \{ `kind`: `"stripeRefund"`; `label`: `"Stripe Refund"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates subscriptions and manages webhook endpoints when SDK-user policy permits."`; `exposesSensitiveData`: `true`; `label`: `"Update Stripe support records"`; `providerObjects`: \[\{ `kind`: `"stripeSubscription"`; `label`: `"Stripe Subscription"`; \}, \{ `kind`: `"stripeWebhookEndpoint"`; `label`: `"Stripe Webhook Endpoint"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"ecommerce.payments"`; `description`: `"Exposes the configured official Stripe SDK client for SDK-user-owned advanced operations."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Stripe raw SDK escape hatch"`; `providerObjects`: \[\{ `kind`: `"stripeRawClient"`; `label`: `"Stripe SDK Client"`; \}\]; `requiresCredential`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ecommerce"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Stripe API reference"`; `url`: `"https://docs.stripe.com/api"`; \}, \{ `label`: `"Stripe Node SDK"`; `url`: `"https://github.com/stripe/stripe-node"`; \}, \{ `label`: `"Stripe webhook signature verification"`; `url`: `"https://docs.stripe.com/webhooks/signature"`; \}\]; `notes`: \[`"Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK."`, `"The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage."`, `"Generated Stripe full-provider API clones are intentionally not part of this package."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Stripe API reference"`; `url`: `"https://docs.stripe.com/api"`; \}, \{ `label`: `"Stripe Node SDK"`; `url`: `"https://github.com/stripe/stripe-node"`; \}, \{ `label`: `"Stripe webhook signature verification"`; `url`: `"https://docs.stripe.com/webhooks/signature"`; \}\] |
| `coverage.notes` | \[`"Coverage is limited to Cognidesk-normalized Stripe commerce support operations backed by the official Stripe SDK."`, `"The official Stripe SDK remains available as an explicit raw-client escape hatch; raw SDK coverage is not Cognidesk adapter coverage."`, `"Generated Stripe full-provider API clones are intentionally not part of this package."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"Server-side Stripe secret or restricted key selected and owned by the SDK user."`; `id`: `"stripe-secret-key"`; `label`: `"Stripe secret key"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"customers:read"`, `"payment_intents:read"`, `"checkout_sessions:read"`, `"subscriptions:read"`, `"invoices:read"`, `"refunds:read"`, `"disputes:read"`, `"subscriptions:write"`, `"webhook_endpoints:read"`, `"webhook_endpoints:write"`\]; \}, \{ `description`: `"Endpoint signing secret used to validate Stripe-Signature headers against the raw request body."`; `id`: `"stripe-webhook-signing-secret"`; `label`: `"Stripe webhook signing secret"`; `required`: `true`; \}, \{ `description`: `"SDK-user-selected account context for platform or connected-account routing."`; `id`: `"stripe-connect-mode"`; `label`: `"Stripe Connect mode"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ecommerce.stripe"` |
| <a id="property-limitations"></a> `limitations` | \[`"The SDK user chooses Stripe account mode, restricted-key permissions, event destinations, webhook subscriptions, checkout UI, refund policy, dispute evidence policy, consent, and retention."`, `"This package provides normalized support-operation foundations and raw-client access; it does not decide when to charge, refund, cancel, submit evidence, or expose payment data to an operator."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `defaultApiVersion`: `"2026-05-27.dahlia"`; `docs`: `"https://docs.stripe.com/api"`; `implementation`: \{ `generatedFullProviderApiClone`: `false`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"stripe"`; `strategy`: `"official-sdk"`; \}; `rawProviderRequest`: \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.payments"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \}; `sdkPackage`: `"stripe"`; \} |
| `metadata.defaultApiVersion` | `"2026-05-27.dahlia"` |
| `metadata.docs` | `"https://docs.stripe.com/api"` |
| `metadata.implementation` | \{ `generatedFullProviderApiClone`: `false`; `rawClientEscapeHatch`: `true`; `sdkPackage`: `"stripe"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.generatedFullProviderApiClone` | `false` |
| `metadata.implementation.rawClientEscapeHatch` | `true` |
| `metadata.implementation.sdkPackage` | `"stripe"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.rawProviderRequest` | \{ `acknowledgementRequired`: `true`; `capability`: `"ecommerce.payments"`; `coverage`: `"escape-hatch-not-full-provider-api"`; \} |
| `metadata.rawProviderRequest.acknowledgementRequired` | `true` |
| `metadata.rawProviderRequest.capability` | `"ecommerce.payments"` |
| `metadata.rawProviderRequest.coverage` | `"escape-hatch-not-full-provider-api"` |
| `metadata.sdkPackage` | `"stripe"` |
| <a id="property-name"></a> `name` | `"Stripe"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ecommerce.event.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeEvent"`; \}\]; \}, \{ `alias`: `"ecommerce.order.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCheckoutSession"`; \}\]; `providerOperation`: `"checkout.sessions.retrieve"`; \}, \{ `alias`: `"ecommerce.order.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCheckoutSession"`; \}\]; `providerOperation`: `"checkout.sessions.list"`; \}, \{ `alias`: `"ecommerce.customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; \}\]; `providerOperation`: `"customers.retrieve"`; \}, \{ `alias`: `"ecommerce.customer.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeCustomer"`; \}\]; `providerOperation`: `"customers.search"`; \}, \{ `alias`: `"ecommerce.payment.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripePaymentIntent"`; \}\]; `providerOperation`: `"paymentIntents.retrieve"`; \}, \{ `alias`: `"ecommerce.refund.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObjects`: \[\{ `kind`: `"stripeRefund"`; \}\]; `providerOperation`: `"refunds.create"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ecommerce.refund.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeRefund"`; \}\]; `providerOperation`: `"refunds.retrieve"`; \}, \{ `alias`: `"ecommerce.subscription.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeSubscription"`; \}\]; `providerOperation`: `"subscriptions.retrieve"`; \}, \{ `alias`: `"ecommerce.subscription.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObjects`: \[\{ `kind`: `"stripeSubscription"`; \}\]; `providerOperation`: `"subscriptions.update"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ecommerce.invoice.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"stripeInvoice"`; \}\]; `providerOperation`: `"invoices.retrieve"`; \}, \{ `alias`: `"ecommerce.webhookEndpoint.manage"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `providerObjects`: \[\{ `kind`: `"stripeWebhookEndpoint"`; \}\]; `providerOperation`: `"webhookEndpoints"`; `sideEffect`: `true`; \}, \{ `alias`: `"stripe.rawClient"`; `capability`: `"ecommerce.payments"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObjects`: \[\{ `kind`: `"stripeRawClient"`; \}\]; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ecommerce-stripe"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Stripe records can include customer contact data, billing/shipping addresses, payment state, subscription terms, invoice history, refund reasons, dispute evidence, and account metadata."`, `"Secret keys, Connect account routing, and webhook signing secrets stay server-side; Studio receives only readiness state and policy-visible metadata."`\] |
| <a id="property-provider"></a> `provider` | `"stripe"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
