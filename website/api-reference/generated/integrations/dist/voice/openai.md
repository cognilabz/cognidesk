# integrations/dist/voice/openai

## Interfaces

### OpenAIRealtimeFactoryInput

#### Properties

##### client

```ts
client: OpenAI;
```

##### model

```ts
model: "gpt-realtime-2";
```

***

### OpenAIRealtimeSocket

#### Methods

##### close()

```ts
close(props?): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | \{ `code`: `number`; `reason`: `string`; \} |
| `props.code?` | `number` |
| `props.reason?` | `string` |

###### Returns

`void`

##### on()

###### Call Signature

```ts
on(event, listener): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"event"` |
| `listener` | (`event`) => `void` |

###### Returns

`void`

###### Call Signature

```ts
on(event, listener): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`error`) => `void` |

###### Returns

`void`

##### send()

```ts
send(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `RealtimeClientEvent` |

###### Returns

`void`

***

### OpenAIVoiceProviderOptions

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

##### baseURL?

```ts
optional baseURL?: string;
```

##### client?

```ts
optional client?: OpenAI;
```

##### model?

```ts
optional model?: "gpt-realtime-2";
```

##### realtime?

```ts
optional realtime?: OpenAIRealtimeFactory;
```

##### sessionDefaults?

```ts
optional sessionDefaults?: Partial<RealtimeSessionCreateRequest>;
```

##### transcriptionLanguage?

```ts
optional transcriptionLanguage?: string;
```

##### voice?

```ts
optional voice?: string;
```

***

### VoiceOpenaiJsonObject

#### Extended by

- [`VoiceOpenaiProviderExtensionFields`](#voiceopenaiproviderextensionfields)
- [`VoiceOpenaiProviderResponse`](#voiceopenaiproviderresponse)

#### Indexable

```ts
[key: string]: VoiceOpenaiProviderExtensionValue
```

***

### VoiceOpenaiProviderExtensionFields

#### Extends

- [`VoiceOpenaiJsonObject`](#voiceopenaijsonobject)

#### Indexable

```ts
[key: string]: VoiceOpenaiProviderExtensionValue
```

***

### VoiceOpenaiProviderResponse

#### Extends

- [`VoiceOpenaiJsonObject`](#voiceopenaijsonobject)

#### Indexable

```ts
[key: string]: VoiceOpenaiProviderExtensionValue
```

## Type Aliases

### OpenAIRealtimeFactory

```ts
type OpenAIRealtimeFactory = (input) => Promise<OpenAIRealtimeSocket>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OpenAIRealtimeFactoryInput`](#openairealtimefactoryinput) |

#### Returns

`Promise`\<[`OpenAIRealtimeSocket`](#openairealtimesocket)\>

***

### VoiceOpenaiJsonPrimitive

```ts
type VoiceOpenaiJsonPrimitive = string | number | boolean | null;
```

***

### VoiceOpenaiJsonValue

```ts
type VoiceOpenaiJsonValue =
  | VoiceOpenaiJsonPrimitive
  | VoiceOpenaiJsonObject
  | readonly VoiceOpenaiJsonValue[];
```

***

### VoiceOpenaiProviderExtensionValue

```ts
type VoiceOpenaiProviderExtensionValue = VoiceOpenaiJsonValue | object | undefined;
```

***

### VoiceOpenaiProviderPayload

```ts
type VoiceOpenaiProviderPayload = VoiceOpenaiJsonObject | object;
```

***

### VoiceOpenaiProviderQuery

```ts
type VoiceOpenaiProviderQuery = Record<string, VoiceOpenaiProviderExtensionValue>;
```

## Variables

### createOpenAIVoiceAdapter

```ts
const createOpenAIVoiceAdapter: typeof createOpenAIVoiceProvider;
```

***

### OPENAI\_REALTIME\_V1\_MODEL

```ts
const OPENAI_REALTIME_V1_MODEL: "gpt-realtime-2" = "gpt-realtime-2";
```

***

### openAIVoiceProviderManifest

```ts
const openAIVoiceProviderManifest: {
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
     audiences: ["customer-facing"];
     capability: "receive";
     description: "Receives customer speech and transcript events from an OpenAI Realtime session.";
     exposesSensitiveData: true;
     label: "Receive realtime speech";
     providerObjects: [{
        kind: "openaiRealtimeSession";
        label: "OpenAI Realtime Session";
      }, {
        kind: "voiceTranscript";
        label: "Voice Transcript";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing"];
     capability: "send";
     description: "Creates assistant audio responses through OpenAI Realtime.";
     exposesSensitiveData: true;
     label: "Send realtime speech";
     providerObjects: [{
        kind: "openaiRealtimeSession";
        label: "OpenAI Realtime Session";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing"];
     capability: "media";
     description: "Exchanges live audio, audio transcript, and response lifecycle events with OpenAI Realtime.";
     exposesSensitiveData: true;
     label: "Realtime audio media";
     providerObjects: [{
        kind: "openaiRealtimeSession";
        label: "OpenAI Realtime Session";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Projects SDK-user-approved Cognidesk control tools into the realtime voice session.";
     label: "Voice control tool calls";
     providerObjects: [{
        kind: "openaiRealtimeToolCall";
        label: "OpenAI Realtime Tool Call";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "voice";
  channelAudiences: ["customer-facing", "mixed"];
  coverage: {
     evidence: [{
        label: "OpenAI Realtime and audio guide";
        url: "https://developers.openai.com/api/docs/guides/realtime";
      }, {
        label: "OpenAI Realtime conversations guide";
        url: "https://developers.openai.com/api/docs/guides/realtime-conversations";
      }, {
        label: "OpenAI Realtime client events reference";
        url: "https://developers.openai.com/api/reference/resources/realtime/client-events/";
      }, {
        label: "OpenAI realtime models prompting guide";
        url: "https://developers.openai.com/api/docs/guides/realtime-models-prompting";
     }];
     notes: ["Implements a server-side OpenAI Realtime voice adapter for Cognidesk browser voice sessions, including session updates, audio events, speech responses, and function-tool outputs.", "The generic send and handoff capabilities mean OpenAI Realtime audio response events and Cognidesk-approved Realtime function tools only; they do not mean outbound telephony, carrier handoff, or full OpenAI API coverage.", "Does not implement the full OpenAI API surface, client-side ephemeral session issuance, transcription-only sessions, model administration, file/vector-store APIs, Responses API breadth, or telephony provider operations.", "Telephony numbers, outbound calling, consent, recording, retention, and OpenAI credential distribution remain SDK-user/provider configuration outside this package."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side OpenAI credential used to create realtime voice sessions.";
     id: "openai-api-key";
     label: "OpenAI API key";
     metadata: {
        minimumAccess: readonly ["model-capabilities:request", "prompts:read-write-if-used"];
        projectScoped: true;
        scopeModel: "openai-project-api-key-permissions";
     };
     required: true;
  }];
  directions: ["bidirectional"];
  id: "voice.openai";
  limitations: ["This package currently supports only gpt-realtime-2.", "Outbound call initiation, telephony numbers, consent, recording, and retention are supplied by the SDK user's channel/provider configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        ephemeralSessionIssuance: "not-covered";
        outboundCalling: "not-covered";
        realtimeAudio: "typed-session-events";
        realtimeToolCalls: "typed-projected";
        realtimeTranscript: "typed-selected";
        telephony: "not-covered";
        transcriptionOnlySessions: "not-covered";
     };
  };
  name: "OpenAI Realtime Voice";
  packageName: "@cognidesk/integrations";
  privacyNotes: ["Live audio, transcripts, instructions, and projected tool schemas are sent to OpenAI Realtime from the server.", "OpenAI credentials remain server-side and are never issued to the browser by this package."];
  provider: "openai";
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
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Receives customer speech and transcript events from an OpenAI Realtime session."`; `exposesSensitiveData`: `true`; `label`: `"Receive realtime speech"`; `providerObjects`: \[\{ `kind`: `"openaiRealtimeSession"`; `label`: `"OpenAI Realtime Session"`; \}, \{ `kind`: `"voiceTranscript"`; `label`: `"Voice Transcript"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Creates assistant audio responses through OpenAI Realtime."`; `exposesSensitiveData`: `true`; `label`: `"Send realtime speech"`; `providerObjects`: \[\{ `kind`: `"openaiRealtimeSession"`; `label`: `"OpenAI Realtime Session"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`\]; `capability`: `"media"`; `description`: `"Exchanges live audio, audio transcript, and response lifecycle events with OpenAI Realtime."`; `exposesSensitiveData`: `true`; `label`: `"Realtime audio media"`; `providerObjects`: \[\{ `kind`: `"openaiRealtimeSession"`; `label`: `"OpenAI Realtime Session"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Projects SDK-user-approved Cognidesk control tools into the realtime voice session."`; `label`: `"Voice control tool calls"`; `providerObjects`: \[\{ `kind`: `"openaiRealtimeToolCall"`; `label`: `"OpenAI Realtime Tool Call"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"OpenAI Realtime and audio guide"`; `url`: `"https://developers.openai.com/api/docs/guides/realtime"`; \}, \{ `label`: `"OpenAI Realtime conversations guide"`; `url`: `"https://developers.openai.com/api/docs/guides/realtime-conversations"`; \}, \{ `label`: `"OpenAI Realtime client events reference"`; `url`: `"https://developers.openai.com/api/reference/resources/realtime/client-events/"`; \}, \{ `label`: `"OpenAI realtime models prompting guide"`; `url`: `"https://developers.openai.com/api/docs/guides/realtime-models-prompting"`; \}\]; `notes`: \[`"Implements a server-side OpenAI Realtime voice adapter for Cognidesk browser voice sessions, including session updates, audio events, speech responses, and function-tool outputs."`, `"The generic send and handoff capabilities mean OpenAI Realtime audio response events and Cognidesk-approved Realtime function tools only; they do not mean outbound telephony, carrier handoff, or full OpenAI API coverage."`, `"Does not implement the full OpenAI API surface, client-side ephemeral session issuance, transcription-only sessions, model administration, file/vector-store APIs, Responses API breadth, or telephony provider operations."`, `"Telephony numbers, outbound calling, consent, recording, retention, and OpenAI credential distribution remain SDK-user/provider configuration outside this package."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"OpenAI Realtime and audio guide"`; `url`: `"https://developers.openai.com/api/docs/guides/realtime"`; \}, \{ `label`: `"OpenAI Realtime conversations guide"`; `url`: `"https://developers.openai.com/api/docs/guides/realtime-conversations"`; \}, \{ `label`: `"OpenAI Realtime client events reference"`; `url`: `"https://developers.openai.com/api/reference/resources/realtime/client-events/"`; \}, \{ `label`: `"OpenAI realtime models prompting guide"`; `url`: `"https://developers.openai.com/api/docs/guides/realtime-models-prompting"`; \}\] |
| `coverage.notes` | \[`"Implements a server-side OpenAI Realtime voice adapter for Cognidesk browser voice sessions, including session updates, audio events, speech responses, and function-tool outputs."`, `"The generic send and handoff capabilities mean OpenAI Realtime audio response events and Cognidesk-approved Realtime function tools only; they do not mean outbound telephony, carrier handoff, or full OpenAI API coverage."`, `"Does not implement the full OpenAI API surface, client-side ephemeral session issuance, transcription-only sessions, model administration, file/vector-store APIs, Responses API breadth, or telephony provider operations."`, `"Telephony numbers, outbound calling, consent, recording, retention, and OpenAI credential distribution remain SDK-user/provider configuration outside this package."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side OpenAI credential used to create realtime voice sessions."`; `id`: `"openai-api-key"`; `label`: `"OpenAI API key"`; `metadata`: \{ `minimumAccess`: readonly \[`"model-capabilities:request"`, `"prompts:read-write-if-used"`\]; `projectScoped`: `true`; `scopeModel`: `"openai-project-api-key-permissions"`; \}; `required`: `true`; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"voice.openai"` |
| `limitations` | \[`"This package currently supports only gpt-realtime-2."`, `"Outbound call initiation, telephony numbers, consent, recording, and retention are supplied by the SDK user's channel/provider configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `ephemeralSessionIssuance`: `"not-covered"`; `outboundCalling`: `"not-covered"`; `realtimeAudio`: `"typed-session-events"`; `realtimeToolCalls`: `"typed-projected"`; `realtimeTranscript`: `"typed-selected"`; `telephony`: `"not-covered"`; `transcriptionOnlySessions`: `"not-covered"`; \}; \} |
| `metadata.channelCoverage` | \{ `ephemeralSessionIssuance`: `"not-covered"`; `outboundCalling`: `"not-covered"`; `realtimeAudio`: `"typed-session-events"`; `realtimeToolCalls`: `"typed-projected"`; `realtimeTranscript`: `"typed-selected"`; `telephony`: `"not-covered"`; `transcriptionOnlySessions`: `"not-covered"`; \} |
| `metadata.channelCoverage.ephemeralSessionIssuance` | `"not-covered"` |
| `metadata.channelCoverage.outboundCalling` | `"not-covered"` |
| `metadata.channelCoverage.realtimeAudio` | `"typed-session-events"` |
| `metadata.channelCoverage.realtimeToolCalls` | `"typed-projected"` |
| `metadata.channelCoverage.realtimeTranscript` | `"typed-selected"` |
| `metadata.channelCoverage.telephony` | `"not-covered"` |
| `metadata.channelCoverage.transcriptionOnlySessions` | `"not-covered"` |
| `name` | `"OpenAI Realtime Voice"` |
| `packageName` | `"@cognidesk/integrations"` |
| `privacyNotes` | \[`"Live audio, transcripts, instructions, and projected tool schemas are sent to OpenAI Realtime from the server."`, `"OpenAI credentials remain server-side and are never issued to the browser by this package."`\] |
| `provider` | `"openai"` |
| `trustLevel` | `"official"` |

## Functions

### createOpenAIRealtimeSocket()

```ts
function createOpenAIRealtimeSocket(input): Promise<OpenAIRealtimeSocket>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OpenAIRealtimeFactoryInput`](#openairealtimefactoryinput) |

#### Returns

`Promise`\<[`OpenAIRealtimeSocket`](#openairealtimesocket)\>

***

### createOpenAIVoiceProvider()

```ts
function createOpenAIVoiceProvider(options?): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`OpenAIVoiceProviderOptions`](#openaivoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../../voice-websocket/dist.md#voiceprovider)
