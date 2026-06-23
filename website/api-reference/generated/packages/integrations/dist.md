# packages/integrations/dist

## Interfaces

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
const integrationProviderCategories: ("marketplace" | "voice" | "workplace")[];
```

***

### integrationProviderReferences

```ts
const integrationProviderReferences: readonly [{
  category: "marketplace";
  id: "marketplace.amazon";
  importPath: "@cognidesk/integration-marketplace-amazon/manifest";
  manifestExport: "amazonMarketplaceProviderManifest";
  modulePath: "integrations/marketplace/amazon/src/manifest.js";
  provider: "amazon";
}, {
  category: "marketplace";
  id: "marketplace.ebay";
  importPath: "@cognidesk/integration-marketplace-ebay/manifest";
  manifestExport: "ebayMarketplaceProviderManifest";
  modulePath: "integrations/marketplace/ebay/src/manifest.js";
  provider: "ebay";
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

### defineIntegrationProviderPackage

Re-exports [defineIntegrationProviderPackage](../integration-kit/dist.md#defineintegrationproviderpackage)

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

### IntegrationProviderProfileAttachment

Re-exports [IntegrationProviderProfileAttachment](../integration-kit/dist.md#integrationproviderprofileattachment)

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
