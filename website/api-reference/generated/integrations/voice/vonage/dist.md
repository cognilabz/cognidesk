# integrations/voice/vonage/dist

## Interfaces

### ParseVonageWebhookInput

#### Extends

- [`ParseVonageWebhookOptions`](#parsevonagewebhookoptions)

#### Properties

##### expectedApiKey?

```ts
optional expectedApiKey?: string;
```

###### Inherited from

[`ParseVonageWebhookOptions`](#parsevonagewebhookoptions).[`expectedApiKey`](#expectedapikey-1)

##### rawBody?

```ts
optional rawBody?: string;
```

###### Inherited from

[`ParseVonageWebhookOptions`](#parsevonagewebhookoptions).[`rawBody`](#rawbody-1)

##### request

```ts
request: Request;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

###### Inherited from

[`ParseVonageWebhookOptions`](#parsevonagewebhookoptions).[`requireSignature`](#requiresignature-1)

##### signatureSecret?

```ts
optional signatureSecret?: string;
```

###### Inherited from

[`ParseVonageWebhookOptions`](#parsevonagewebhookoptions).[`signatureSecret`](#signaturesecret-1)

***

### ParseVonageWebhookOptions

#### Extended by

- [`ParseVonageWebhookInput`](#parsevonagewebhookinput)

#### Properties

##### expectedApiKey?

```ts
optional expectedApiKey?: string;
```

##### rawBody?

```ts
optional rawBody?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### signatureSecret?

```ts
optional signatureSecret?: string;
```

***

### VonageCallResource

#### Extends

- [`VonageJsonObject`](#vonagejsonobject)

#### Indexable

```ts
[key: string]: VonageJsonValue
```

#### Properties

##### direction?

```ts
optional direction?: string;
```

##### status?

```ts
optional status?: string;
```

##### uuid?

```ts
optional uuid?: string;
```

***

### VonageCallTransferInput

#### Properties

##### action

```ts
action: "transfer";
```

##### destination

```ts
destination: VonageCallTransferDestination;
```

***

### VonageCallTransferOperationInput

#### Properties

##### transfer?

```ts
optional transfer?: VonageCallTransferInput;
```

##### update?

```ts
optional update?: VonageCallTransferInput;
```

##### uuid

```ts
uuid: string;
```

***

### VonageJsonObject

#### Extended by

- [`VonageCallResource`](#vonagecallresource)

#### Indexable

```ts
[key: string]: VonageJsonValue
```

***

### VonageOutboundCallInput

#### Properties

##### advancedMachineDetection?

```ts
optional advancedMachineDetection?: Record<string, unknown>;
```

##### answerMethod?

```ts
optional answerMethod?: "GET" | "POST";
```

##### answerUrl?

```ts
optional answerUrl?: string[];
```

##### eventMethod?

```ts
optional eventMethod?: "GET" | "POST";
```

##### eventUrl?

```ts
optional eventUrl?: string[];
```

##### from?

```ts
optional from?: VonageEndpoint;
```

##### ncco?

```ts
optional ncco?: VonageNccoAction[];
```

##### randomFromNumber?

```ts
optional randomFromNumber?: boolean;
```

##### to

```ts
to: VonageEndpoint[];
```

***

### VonageRawClient

#### Properties

##### voice?

```ts
optional voice?: {
  createOutboundCall: Promise<VonageCallResource>;
  getCall: Promise<VonageCallResource>;
  transferCallWithNCCO?: Promise<VonageCallControlResult>;
  transferCallWithURL: Promise<VonageCallControlResult>;
};
```

###### createOutboundCall()

```ts
createOutboundCall(input): Promise<VonageCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<[`VonageCallResource`](#vonagecallresource)\>

###### getCall()

```ts
getCall(uuid): Promise<VonageCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |

###### Returns

`Promise`\<[`VonageCallResource`](#vonagecallresource)\>

###### transferCallWithNCCO()?

```ts
optional transferCallWithNCCO(uuid, ncco): Promise<VonageCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| `ncco` | [`VonageJsonObject`](#vonagejsonobject)[] |

###### Returns

`Promise`\<[`VonageCallControlResult`](#vonagecallcontrolresult)\>

###### transferCallWithURL()

```ts
transferCallWithURL(uuid, url): Promise<VonageCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| `url` | `string` |

###### Returns

`Promise`\<[`VonageCallControlResult`](#vonagecallcontrolresult)\>

***

### VonageVoiceClient

#### Methods

##### createOutboundCall()

```ts
createOutboundCall(input): Promise<VonageCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`VonageOutboundCallInput`](#vonageoutboundcallinput) |

###### Returns

`Promise`\<[`VonageCallResource`](#vonagecallresource)\>

##### fetchCall()

```ts
fetchCall(uuid): Promise<VonageCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |

###### Returns

`Promise`\<[`VonageCallResource`](#vonagecallresource)\>

##### getRawClient()

```ts
getRawClient(): Promise<VonageRawClient>;
```

###### Returns

`Promise`\<[`VonageRawClient`](#vonagerawclient)\>

##### transferCall()

```ts
transferCall(uuid, input): Promise<VonageCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| `input` | [`VonageCallTransferInput`](#vonagecalltransferinput) |

###### Returns

`Promise`\<[`VonageCallControlResult`](#vonagecallcontrolresult)\>

##### updateCall()

```ts
updateCall(uuid, input): Promise<VonageCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| `input` | [`VonageCallTransferInput`](#vonagecalltransferinput) |

###### Returns

`Promise`\<[`VonageCallControlResult`](#vonagecallcontrolresult)\>

***

### VonageVoiceClientOptions

#### Extended by

- [`VonageVoiceIntegrationOptions`](#vonagevoiceintegrationoptions)

#### Properties

##### applicationId

```ts
applicationId: string;
```

##### defaultEventUrl?

```ts
optional defaultEventUrl?: string[];
```

##### jwt?

```ts
optional jwt?: string;
```

##### jwtOptions?

```ts
optional jwtOptions?: Record<string, unknown>;
```

##### privateKey?

```ts
optional privateKey?: string;
```

##### rawClient?

```ts
optional rawClient?: VonageRawClient;
```

##### signatureSecret?

```ts
optional signatureSecret?: string;
```

***

### VonageVoiceIntegrationOptions

#### Extends

- [`VonageVoiceClientOptions`](#vonagevoiceclientoptions)

#### Properties

##### applicationId

```ts
applicationId: string;
```

###### Inherited from

[`VonageVoiceClientOptions`](#vonagevoiceclientoptions).[`applicationId`](#applicationid)

##### defaultEventUrl?

```ts
optional defaultEventUrl?: string[];
```

###### Inherited from

[`VonageVoiceClientOptions`](#vonagevoiceclientoptions).[`defaultEventUrl`](#defaulteventurl)

##### expectedApiKey?

```ts
optional expectedApiKey?: string;
```

##### jwt?

```ts
optional jwt?: string;
```

###### Inherited from

[`VonageVoiceClientOptions`](#vonagevoiceclientoptions).[`jwt`](#jwt)

##### jwtOptions?

```ts
optional jwtOptions?: Record<string, unknown>;
```

###### Inherited from

[`VonageVoiceClientOptions`](#vonagevoiceclientoptions).[`jwtOptions`](#jwtoptions)

##### privateKey?

```ts
optional privateKey?: string;
```

###### Inherited from

[`VonageVoiceClientOptions`](#vonagevoiceclientoptions).[`privateKey`](#privatekey)

##### rawClient?

```ts
optional rawClient?: VonageRawClient;
```

###### Inherited from

[`VonageVoiceClientOptions`](#vonagevoiceclientoptions).[`rawClient`](#rawclient)

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### signatureSecret?

```ts
optional signatureSecret?: string;
```

###### Inherited from

[`VonageVoiceClientOptions`](#vonagevoiceclientoptions).[`signatureSecret`](#signaturesecret-2)

##### voiceClient?

```ts
optional voiceClient?: VonageVoiceClient;
```

***

### VonageWebhook

#### Properties

##### conversationUuid?

```ts
optional conversationUuid?: string;
```

##### from?

```ts
optional from?: string;
```

##### raw

```ts
raw: VonageJsonObject;
```

##### status?

```ts
optional status?: string;
```

##### to?

```ts
optional to?: string;
```

##### type

```ts
type: "event" | "answer" | "fallback";
```

##### uuid?

```ts
optional uuid?: string;
```

## Type Aliases

### VonageCallControlResult

```ts
type VonageCallControlResult = VonageJsonObject | void;
```

***

### VonageCallTransferDestination

```ts
type VonageCallTransferDestination =
  | {
  type: "url";
  url: string[];
}
  | {
  ncco: VonageNccoAction[];
  type: "ncco";
};
```

***

### VonageCallUpdateInput

```ts
type VonageCallUpdateInput = VonageCallTransferInput;
```

***

### VonageEndpoint

```ts
type VonageEndpoint =
  | {
  number: string;
  type: "phone";
}
  | {
  type: "sip";
  uri: string;
}
  | {
  contentType?: string;
  headers?: Record<string, string>;
  type: "websocket";
  uri: string;
}
  | {
  type: "app";
  user: string;
};
```

***

### VonageJsonPrimitive

```ts
type VonageJsonPrimitive = string | number | boolean | null;
```

***

### VonageJsonValue

```ts
type VonageJsonValue =
  | VonageJsonPrimitive
  | VonageJsonObject
  | VonageJsonValue[];
```

***

### VonageNccoAction

```ts
type VonageNccoAction =
  | {
  action: "talk";
  bargeIn?: boolean;
  text: string;
  voiceName?: string;
}
  | {
  action: "connect";
  endpoint: VonageEndpoint[];
  eventUrl?: string[];
  from?: string;
}
  | {
  action: "stream";
  bargeIn?: boolean;
  streamUrl: string[];
}
  | {
  action: "input";
  eventUrl: string[];
  type?: string[];
};
```

## Variables

### createVonageIntegration

```ts
const createVonageIntegration: typeof createVonageVoiceIntegration;
```

***

### createVonageIntegrationOperationHandlers

```ts
const createVonageIntegrationOperationHandlers: typeof createVonageVoiceOperationHandlers;
```

***

### vonageVoiceIntegration

```ts
const vonageVoiceIntegration: DefinedIntegration<{
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
     scope:   | "provider-api-subset"
        | "support-workflow-subset"
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
     | "inbound-only"
     | "outbound-only"
     | "bidirectional"
     | "receive-only"
    | "send-only")[];
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
     audiences: readonly ["customer-facing"];
     capability: "receive";
     description: "Parses Vonage answer, event, and fallback callbacks.";
     exposesSensitiveData: true;
     label: "Receive voice webhooks";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Creates outbound calls through the Vonage Voice SDK.";
     exposesSensitiveData: true;
     label: "Create outbound calls";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Builds NCCO websocket/talk actions for Cognidesk voice sessions.";
     label: "NCCO voice media";
     providerObjects: readonly [{
        kind: "vonageNcco";
        label: "Vonage NCCO";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     description: "Transfers active calls through Vonage's documented modify-call action.";
     label: "Transfer active calls";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "voice.webhook-signature";
     description: "Validates signed Vonage callbacks when configured by the SDK user.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Vonage webhooks";
     providerObjects: readonly [{
        kind: "vonageWebhook";
        label: "Vonage Webhook";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Vonage Server SDK package";
        url: "https://www.npmjs.com/package/@vonage/server-sdk";
      }, {
        label: "Vonage Voice API reference";
        url: "https://developer.vonage.com/en/api/voice";
      }, {
        label: "Vonage Voice webhooks";
        url: "https://developer.vonage.com/en/voice/voice-api/webhook-reference";
      }, {
        label: "Vonage NCCO reference";
        url: "https://developer.vonage.com/en/voice/voice-api/ncco-reference";
     }];
     notes: readonly ["Implements normalized Vonage Voice call-control, NCCO, webhook, readiness, and raw SDK access with the official Vonage server SDK.", "Raw Vonage SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage.", "Broader Vonage platform products, Client SDK behavior, consent, retention, and telephony policy remain SDK-user/provider configuration."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Vonage Application ID and private key/JWT credentials used by the official SDK.";
     id: "vonage-application";
     label: "Vonage application credentials";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "Optional signature secret or JWT verification setup for signed Vonage callbacks.";
     id: "vonage-webhook-signature";
     label: "Vonage webhook signature secret";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "voice.vonage";
  limitations: readonly ["Live call readiness depends on the SDK user's Vonage application, numbers, webhook URLs, regions, and account permissions."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        dependencyCaveat: "The server SDK includes multiple Vonage product modules; reassess service-specific packages before tightening dependency budgets.";
        sdkPackage: "@vonage/server-sdk";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "3.27.0";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "Vonage Voice";
  operations: readonly [{
     alias: "voice.call.answer";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive voice webhook";
     providerObject: "vonageCall";
     providerOperation: "parseWebhook";
   }, {
     alias: "voice.call.start";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Create outbound call";
     providerObject: "vonageCall";
     providerOperation: "createOutboundCall";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "voice.call.transfer";
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     label: "Transfer call";
     providerObject: "vonageCall";
     providerOperation: "transferCallWithURL";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-vonage";
  privacyNotes: readonly ["Phone numbers, call metadata, webhook parameters, NCCO URLs, and conversation identifiers can contain customer data and are exchanged with Vonage.", "Vonage credentials stay server-side and are never issued to browsers by this package."];
  provider: "vonage";
  trustLevel: "official";
}, unknown, {
  voice.call.answer: (input) => Promise<VonageWebhook>;
  voice.call.start: (input) => Promise<VonageCallResource>;
  voice.call.transfer: (input) => Promise<VonageCallControlResult>;
}>;
```

## Functions

### createVonageVoiceClient()

```ts
function createVonageVoiceClient(options): VonageVoiceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VonageVoiceClientOptions`](#vonagevoiceclientoptions) |

#### Returns

[`VonageVoiceClient`](#vonagevoiceclient)

***

### createVonageVoiceIntegration()

```ts
function createVonageVoiceIntegration(options): DefinedIntegration<{
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
  capabilities: readonly [{
     audiences: readonly ["customer-facing"];
     capability: "receive";
     description: "Parses Vonage answer, event, and fallback callbacks.";
     exposesSensitiveData: true;
     label: "Receive voice webhooks";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Creates outbound calls through the Vonage Voice SDK.";
     exposesSensitiveData: true;
     label: "Create outbound calls";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Builds NCCO websocket/talk actions for Cognidesk voice sessions.";
     label: "NCCO voice media";
     providerObjects: readonly [{
        kind: "vonageNcco";
        label: "Vonage NCCO";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     description: "Transfers active calls through Vonage's documented modify-call action.";
     label: "Transfer active calls";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "voice.webhook-signature";
     description: "Validates signed Vonage callbacks when configured by the SDK user.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Vonage webhooks";
     providerObjects: readonly [{
        kind: "vonageWebhook";
        label: "Vonage Webhook";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Vonage Server SDK package";
        url: "https://www.npmjs.com/package/@vonage/server-sdk";
      }, {
        label: "Vonage Voice API reference";
        url: "https://developer.vonage.com/en/api/voice";
      }, {
        label: "Vonage Voice webhooks";
        url: "https://developer.vonage.com/en/voice/voice-api/webhook-reference";
      }, {
        label: "Vonage NCCO reference";
        url: "https://developer.vonage.com/en/voice/voice-api/ncco-reference";
     }];
     notes: readonly ["Implements normalized Vonage Voice call-control, NCCO, webhook, readiness, and raw SDK access with the official Vonage server SDK.", "Raw Vonage SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage.", "Broader Vonage platform products, Client SDK behavior, consent, retention, and telephony policy remain SDK-user/provider configuration."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Vonage Application ID and private key/JWT credentials used by the official SDK.";
     id: "vonage-application";
     label: "Vonage application credentials";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "Optional signature secret or JWT verification setup for signed Vonage callbacks.";
     id: "vonage-webhook-signature";
     label: "Vonage webhook signature secret";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "voice.vonage";
  limitations: readonly ["Live call readiness depends on the SDK user's Vonage application, numbers, webhook URLs, regions, and account permissions."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        dependencyCaveat: "The server SDK includes multiple Vonage product modules; reassess service-specific packages before tightening dependency budgets.";
        sdkPackage: "@vonage/server-sdk";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "3.27.0";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "Vonage Voice";
  operations: readonly [{
     alias: "voice.call.answer";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive voice webhook";
     providerObject: "vonageCall";
     providerOperation: "parseWebhook";
   }, {
     alias: "voice.call.start";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Create outbound call";
     providerObject: "vonageCall";
     providerOperation: "createOutboundCall";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "voice.call.transfer";
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     label: "Transfer call";
     providerObject: "vonageCall";
     providerOperation: "transferCallWithURL";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-vonage";
  privacyNotes: readonly ["Phone numbers, call metadata, webhook parameters, NCCO URLs, and conversation identifiers can contain customer data and are exchanged with Vonage.", "Vonage credentials stay server-side and are never issued to browsers by this package."];
  provider: "vonage";
  trustLevel: "official";
}, unknown, {
  voice.call.answer: (input) => Promise<VonageWebhook>;
  voice.call.start: (input) => Promise<VonageCallResource>;
  voice.call.transfer: (input) => Promise<VonageCallControlResult>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VonageVoiceIntegrationOptions`](#vonagevoiceintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
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
     `metadata?`: `Record`\<`string`, `unknown`\>;
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
  `metadata?`: `Record`\<`string`, `unknown`\>;
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
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
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
\} & \{
  `capabilities`: readonly \[\{
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"receive"`;
     `description`: `"Parses Vonage answer, event, and fallback callbacks."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive voice webhooks"`;
     `providerObjects`: readonly \[\{
        `kind`: `"vonageCall"`;
        `label`: `"Vonage Call"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `description`: `"Creates outbound calls through the Vonage Voice SDK."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create outbound calls"`;
     `providerObjects`: readonly \[\{
        `kind`: `"vonageCall"`;
        `label`: `"Vonage Call"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\];
     `capability`: `"media"`;
     `description`: `"Builds NCCO websocket/talk actions for Cognidesk voice sessions."`;
     `label`: `"NCCO voice media"`;
     `providerObjects`: readonly \[\{
        `kind`: `"vonageNcco"`;
        `label`: `"Vonage NCCO"`;
     \}\];
     `requiresCredential`: `false`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"transfer"`;
     `changesWorkflow`: `true`;
     `description`: `"Transfers active calls through Vonage's documented modify-call action."`;
     `label`: `"Transfer active calls"`;
     `providerObjects`: readonly \[\{
        `kind`: `"vonageCall"`;
        `label`: `"Vonage Call"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"voice.webhook-signature"`;
     `description`: `"Validates signed Vonage callbacks when configured by the SDK user."`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `label`: `"Validate Vonage webhooks"`;
     `providerObjects`: readonly \[\{
        `kind`: `"vonageWebhook"`;
        `label`: `"Vonage Webhook"`;
     \}\];
     `requiresCredential`: `true`;
  \}\];
  `category`: `"voice"`;
  `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: readonly \[\{
        `label`: `"Vonage Server SDK package"`;
        `url`: `"https://www.npmjs.com/package/@vonage/server-sdk"`;
      \}, \{
        `label`: `"Vonage Voice API reference"`;
        `url`: `"https://developer.vonage.com/en/api/voice"`;
      \}, \{
        `label`: `"Vonage Voice webhooks"`;
        `url`: `"https://developer.vonage.com/en/voice/voice-api/webhook-reference"`;
      \}, \{
        `label`: `"Vonage NCCO reference"`;
        `url`: `"https://developer.vonage.com/en/voice/voice-api/ncco-reference"`;
     \}\];
     `notes`: readonly \[`"Implements normalized Vonage Voice call-control, NCCO, webhook, readiness, and raw SDK access with the official Vonage server SDK."`, `"Raw Vonage SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage."`, `"Broader Vonage platform products, Client SDK behavior, consent, retention, and telephony policy remain SDK-user/provider configuration."`\];
     `scope`: `"provider-api-subset"`;
  \};
  `credentialRequirements`: readonly \[\{
     `description`: `"Vonage Application ID and private key/JWT credentials used by the official SDK."`;
     `id`: `"vonage-application"`;
     `label`: `"Vonage application credentials"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission"`;
     \};
     `required`: `true`;
   \}, \{
     `description`: `"Optional signature secret or JWT verification setup for signed Vonage callbacks."`;
     `id`: `"vonage-webhook-signature"`;
     `label`: `"Vonage webhook signature secret"`;
     `metadata`: \{
        `scopeKind`: `"provider-permission"`;
     \};
     `required`: `false`;
  \}\];
  `directions`: readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
  `id`: `"voice.vonage"`;
  `limitations`: readonly \[`"Live call readiness depends on the SDK user's Vonage application, numbers, webhook URLs, regions, and account permissions."`\];
  `maintainers`: readonly \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementation`: \{
        `dependencyCaveat`: `"The server SDK includes multiple Vonage product modules; reassess service-specific packages before tightening dependency budgets."`;
        `sdkPackage`: `"@vonage/server-sdk"`;
        `strategy`: `"official-sdk"`;
        `verifiedAt`: `"2026-06-21"`;
        `verifiedVersion`: `"3.27.0"`;
     \};
     `rawClient`: \{
        `coverage`: `"upstream-sdk"`;
        `export`: `"getRawClient"`;
     \};
  \};
  `name`: `"Vonage Voice"`;
  `operations`: readonly \[\{
     `alias`: `"voice.call.answer"`;
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive voice webhook"`;
     `providerObject`: `"vonageCall"`;
     `providerOperation`: `"parseWebhook"`;
   \}, \{
     `alias`: `"voice.call.start"`;
     `audiences`: readonly \[`"customer-facing"`\];
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `label`: `"Create outbound call"`;
     `providerObject`: `"vonageCall"`;
     `providerOperation`: `"createOutboundCall"`;
     `requiresApproval`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"voice.call.transfer"`;
     `audiences`: readonly \[`"internal-support"`\];
     `capability`: `"transfer"`;
     `changesWorkflow`: `true`;
     `label`: `"Transfer call"`;
     `providerObject`: `"vonageCall"`;
     `providerOperation`: `"transferCallWithURL"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-voice-vonage"`;
  `privacyNotes`: readonly \[`"Phone numbers, call metadata, webhook parameters, NCCO URLs, and conversation identifiers can contain customer data and are exchanged with Vonage."`, `"Vonage credentials stay server-side and are never issued to browsers by this package."`\];
  `provider`: `"vonage"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `voice.call.answer`: (`input`) => `Promise`\<[`VonageWebhook`](#vonagewebhook)\>;
  `voice.call.start`: (`input`) => `Promise`\<[`VonageCallResource`](#vonagecallresource)\>;
  `voice.call.transfer`: (`input`) => `Promise`\<[`VonageCallControlResult`](#vonagecallcontrolresult)\>;
\}\>

***

### createVonageVoiceOperationHandlers()

```ts
function createVonageVoiceOperationHandlers(options): {
  voice.call.answer: (input) => Promise<VonageWebhook>;
  voice.call.start: (input) => Promise<VonageCallResource>;
  voice.call.transfer: (input) => Promise<VonageCallControlResult>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`VonageVoiceIntegrationOptions`](#vonagevoiceintegrationoptions) |

#### Returns

```ts
{
  voice.call.answer: (input) => Promise<VonageWebhook>;
  voice.call.start: (input) => Promise<VonageCallResource>;
  voice.call.transfer: (input) => Promise<VonageCallControlResult>;
}
```

| Name | Type |
| ------ | ------ |
| `voice.call.answer()` | (`input`) => `Promise`\<[`VonageWebhook`](#vonagewebhook)\> |
| `voice.call.start()` | (`input`) => `Promise`\<[`VonageCallResource`](#vonagecallresource)\> |
| `voice.call.transfer()` | (`input`) => `Promise`\<[`VonageCallControlResult`](#vonagecallcontrolresult)\> |

***

### createVonageWebSocketNcco()

```ts
function createVonageWebSocketNcco(input): VonageNccoAction[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `contentType?`: `string`; `headers?`: `Record`\<`string`, `string`\>; `websocketUrl`: `string`; \} |
| `input.contentType?` | `string` |
| `input.headers?` | `Record`\<`string`, `string`\> |
| `input.websocketUrl` | `string` |

#### Returns

[`VonageNccoAction`](#vonagenccoaction)[]

***

### parseVonageWebhook()

```ts
function parseVonageWebhook(request, options?): Promise<VonageWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseVonageWebhookOptions`](#parsevonagewebhookoptions) |

#### Returns

`Promise`\<[`VonageWebhook`](#vonagewebhook)\>

***

### verifyVonageWebhookJwt()

```ts
function verifyVonageWebhookJwt(
   token,
   signatureSecret,
   expectedApiKey?): VonageJsonObject;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `string` |
| `signatureSecret` | `string` |
| `expectedApiKey?` | `string` |

#### Returns

[`VonageJsonObject`](#vonagejsonobject)

***

### verifyVonageWebhookPayload()

```ts
function verifyVonageWebhookPayload(rawBody, claims): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawBody` | `string` |
| `claims` | [`VonageJsonObject`](#vonagejsonobject) |

#### Returns

`boolean`

***

### vonageVoiceCredentialStatuses()

```ts
function vonageVoiceCredentialStatuses(input): {
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
| `input` | \{ `applicationId?`: `string`; `jwt?`: `string`; `privateKey?`: `string`; `signatureSecret?`: `string`; \} |
| `input.applicationId?` | `string` |
| `input.jwt?` | `string` |
| `input.privateKey?` | `string` |
| `input.signatureSecret?` | `string` |

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

### vonageVoiceProviderManifest

Re-exports [vonageVoiceProviderManifest](dist/manifest.md#vonagevoiceprovidermanifest)
