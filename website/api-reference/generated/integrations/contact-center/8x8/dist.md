# integrations/contact-center/8x8/dist

## Interfaces

### ConfiguredHandoffInput

#### Properties

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### payload?

```ts
optional payload?: unknown;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

***

### EightByEightClient

#### Methods

##### createHandoff()

```ts
createHandoff(input): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ConfiguredHandoffInput`](#configuredhandoffinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### endContact()

```ts
endContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EightByEightOperationInput`](#eightbyeightoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### readiness()

```ts
readiness(): Promise<ProviderJsonObject>;
```

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### startContact()

```ts
startContact(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EightByEightOperationInput`](#eightbyeightoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

##### updateAgentStatus()

```ts
updateAgentStatus(input?): Promise<ProviderJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EightByEightOperationInput`](#eightbyeightoperationinput) |

###### Returns

`Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>

***

### EightByEightClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl

```ts
apiBaseUrl: string;
```

##### apiKey?

```ts
optional apiKey?: string;
```

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
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

##### readinessPath?

```ts
optional readinessPath?: string;
```

***

### EightByEightOperationInput

#### Extended by

- [`ProviderExtensionRequestInput`](#providerextensionrequestinput)

#### Properties

##### body?

```ts
optional body?: unknown;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number | boolean>;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

***

### ProviderExtensionRequestInput

#### Extends

- [`EightByEightOperationInput`](#eightbyeightoperationinput)

#### Properties

##### allowMutation?

```ts
optional allowMutation?: boolean;
```

##### body?

```ts
optional body?: unknown;
```

###### Inherited from

[`EightByEightOperationInput`](#eightbyeightoperationinput).[`body`](#body)

##### classification?

```ts
optional classification?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`EightByEightOperationInput`](#eightbyeightoperationinput).[`headers`](#headers)

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

###### Inherited from

[`EightByEightOperationInput`](#eightbyeightoperationinput).[`idempotencyKey`](#idempotencykey-1)

##### method?

```ts
optional method?: ProviderHttpMethod;
```

##### operationId?

```ts
optional operationId?: string;
```

##### path?

```ts
optional path?: string;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number | boolean>;
```

###### Inherited from

[`EightByEightOperationInput`](#eightbyeightoperationinput).[`pathParams`](#pathparams)

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

###### Inherited from

[`EightByEightOperationInput`](#eightbyeightoperationinput).[`query`](#query-1)

## Type Aliases

### ProviderJsonObject

```ts
type ProviderJsonObject = Record<string, unknown>;
```

## Functions

### createEightByEightClient()

```ts
function createEightByEightClient(options): EightByEightClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`EightByEightClientOptions`](#eightbyeightclientoptions) |

#### Returns

[`EightByEightClient`](#eightbyeightclient)

***

### createEightByEightIntegration()

```ts
function createEightByEightIntegration(options): DefinedIntegration<{
  capabilities: readonly [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "agent";
        label: "agent";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "8x8 Contact Center Call API OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
      }, {
        label: "8x8 Contact Center Agent Status OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
     }];
     notes: readonly ["No viable official server-side JavaScript Contact Center SDK was verified; the package keeps selected official OpenAPI support operations instead of a full provider clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "8x8-contact-center-api-base";
     label: "8x8 Contact Center API base URL";
     required: true;
   }, {
     id: "8x8-contact-center-api-access";
     label: "8x8 Contact Center API access";
     required: true;
   }, {
     id: "8x8-contact-center-routing";
     label: "8x8 queue/campaign routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.8x8";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "contact-center.contact.start";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "placePhoneCall";
           method: "POST";
           path: "/tenants/{tenantId}/calls";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.contact.end";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "deletePhoneInteraction";
           method: "DELETE";
           path: "/tenants/{tenantId}/calls/{interactionId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.agent.status.update";
           checksum: "sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae";
           id: "setagentstatus";
           method: "PUT";
           path: "/tenants/{tenantId}/agentstatus/agents/{agentId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable official server-side JavaScript Contact Center SDK was verified; the package keeps selected official OpenAPI support operations instead of a full provider clone.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "8x8 Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.end";
     capability: "update-provider-object";
     providerObject: "contact";
   }, {
     alias: "contact-center.agent.status.update";
     capability: "update-provider-object";
     providerObject: "agent";
  }];
  packageName: "@cognidesk/integration-contact-center-8x8";
  provider: "8x8";
  trustLevel: "official";
}, unknown, {
  contact-center.agent.status.update: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.end: (input) => Promise<ProviderJsonObject>;
  contact-center.contact.start: (input) => Promise<ProviderJsonObject>;
  contact-center.handoff.request: (input) => Promise<ProviderJsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`EightByEightClientOptions`](#eightbyeightclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: readonly \[\{
     `capability`: `"handoff"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contactTransfer"`;
        `label`: `"contactTransfer"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"contact"`;
        `label`: `"contact"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: readonly \[\{
        `kind`: `"agent"`;
        `label`: `"agent"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"contact-center"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"8x8 Contact Center Call API OpenAPI"`;
        `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`;
      \}, \{
        `label`: `"8x8 Contact Center Agent Status OpenAPI"`;
        `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`;
     \}\];
     `notes`: readonly \[`"No viable official server-side JavaScript Contact Center SDK was verified; the package keeps selected official OpenAPI support operations instead of a full provider clone."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `id`: `"8x8-contact-center-api-base"`;
     `label`: `"8x8 Contact Center API base URL"`;
     `required`: `true`;
   \}, \{
     `id`: `"8x8-contact-center-api-access"`;
     `label`: `"8x8 Contact Center API access"`;
     `required`: `true`;
   \}, \{
     `id`: `"8x8-contact-center-routing"`;
     `label`: `"8x8 queue/campaign routing configuration"`;
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"contact-center.8x8"`;
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `allowedOperations`: readonly \[\{
           `alias`: `"contact-center.contact.start"`;
           `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`;
           `id`: `"placePhoneCall"`;
           `method`: `"POST"`;
           `path`: `"/tenants/{tenantId}/calls"`;
           `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`;
         \}, \{
           `alias`: `"contact-center.contact.end"`;
           `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`;
           `id`: `"deletePhoneInteraction"`;
           `method`: `"DELETE"`;
           `path`: `"/tenants/{tenantId}/calls/{interactionId}"`;
           `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`;
         \}, \{
           `alias`: `"contact-center.agent.status.update"`;
           `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`;
           `id`: `"setagentstatus"`;
           `method`: `"PUT"`;
           `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`;
           `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`;
        \}\];
        `implementationStrategy`: `"generated-support-slice"`;
        `sdkDecision`: `"No viable official server-side JavaScript Contact Center SDK was verified; the package keeps selected official OpenAPI support operations instead of a full provider clone."`;
        `verifiedAt`: `"2026-06-21"`;
     \};
     `manifestOnlySafe`: `true`;
  \};
  `name`: `"8x8 Contact Center"`;
  `operations`: readonly \[\{
     `alias`: `"contact-center.handoff.request"`;
     `capability`: `"handoff"`;
     `providerObject`: `"contactTransfer"`;
   \}, \{
     `alias`: `"contact-center.contact.start"`;
     `capability`: `"send"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"contact-center.contact.end"`;
     `capability`: `"update-provider-object"`;
     `providerObject`: `"contact"`;
   \}, \{
     `alias`: `"contact-center.agent.status.update"`;
     `capability`: `"update-provider-object"`;
     `providerObject`: `"agent"`;
  \}\];
  `packageName`: `"@cognidesk/integration-contact-center-8x8"`;
  `provider`: `"8x8"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `contact-center.agent.status.update`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.end`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.contact.start`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
  `contact-center.handoff.request`: (`input`) => `Promise`\<[`ProviderJsonObject`](#providerjsonobject)\>;
\}\>

## References

### eightByEightProviderManifest

Re-exports [eightByEightProviderManifest](dist/manifest.md#eightbyeightprovidermanifest)

***

### eightByEightProviderManifestInput

Re-exports [eightByEightProviderManifestInput](dist/manifest.md#eightbyeightprovidermanifestinput)

***

### eightByEightSupportSlice

Re-exports [eightByEightSupportSlice](dist/manifest.md#eightbyeightsupportslice)
