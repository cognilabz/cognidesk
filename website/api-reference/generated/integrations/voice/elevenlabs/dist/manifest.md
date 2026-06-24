# integrations/voice/elevenlabs/dist/manifest

## Variables

### elevenLabsVoiceProviderManifest

```ts
const elevenLabsVoiceProviderManifest: {
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
     | "send-only"
     | "receive-only"
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
     capability: "send";
     description: "Creates or streams speech audio with ElevenLabs Text to Speech.";
     exposesSensitiveData: true;
     label: "Create speech audio";
     providerObjects: readonly [{
        kind: "elevenlabsVoice";
        label: "ElevenLabs Voice";
      }, {
        kind: "elevenlabsSpeechGeneration";
        label: "ElevenLabs Speech Generation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "receive";
     description: "Creates signed URLs for authorized ElevenLabs Conversational AI sessions and reads conversation transcripts.";
     exposesSensitiveData: true;
     label: "Receive conversational voice";
     providerObjects: readonly [{
        kind: "elevenlabsConversation";
        label: "ElevenLabs Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Reads generated audio streams, conversation audio, speech timing alignments, and speech-to-text transcript resources.";
     exposesSensitiveData: true;
     label: "Voice media and transcripts";
     providerObjects: readonly [{
        kind: "elevenlabsAudio";
        label: "ElevenLabs Audio";
      }, {
        kind: "elevenlabsTranscript";
        label: "ElevenLabs Transcript";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "ElevenLabs JavaScript SDK package";
        url: "https://www.npmjs.com/package/@elevenlabs/elevenlabs-js";
      }, {
        label: "ElevenLabs API reference";
        url: "https://elevenlabs.io/docs/api-reference";
      }, {
        label: "ElevenLabs Speech to Text";
        url: "https://elevenlabs.io/docs/api-reference/speech-to-text/convert";
      }, {
        label: "ElevenLabs Text to Speech";
        url: "https://elevenlabs.io/docs/api-reference/text-to-speech/convert";
     }];
     notes: readonly ["Implements normalized Cognidesk speech, transcription, and conversational session helpers with the official ElevenLabs JavaScript SDK.", "Raw ElevenLabs SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage.", "Realtime WebSocket transport behavior, telephony carrier setup, workspace administration, retention, and live agent routing remain SDK-user/provider configuration."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side ElevenLabs credential used by the official SDK for voice API requests.";
     id: "elevenlabs-api-key";
     label: "ElevenLabs API key";
     metadata: {
        minimumAccess: readonly ["text-to-speech", "speech-to-text", "conversational-ai", "voices:read", "models:read"];
        scopeKind: "provider-permission";
     };
     required: true;
  }];
  directions: readonly ["send-only", "receive-only", "bidirectional"];
  id: "voice.elevenlabs";
  limitations: readonly ["Realtime WebSocket transport behavior, telephony setup, batch calling, call recording policy, consent, retention, and live agent routing remain SDK-user/provider configuration."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        sdkPackage: "@elevenlabs/elevenlabs-js";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "2.53.1";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "ElevenLabs Voice";
  operations: readonly [{
     alias: "voice.speak";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     label: "Create speech";
     providerObject: "elevenlabsAudio";
     providerOperation: "createSpeech";
     sideEffect: true;
   }, {
     alias: "voice.turn.finalize";
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Create transcript";
     providerObject: "elevenlabsTranscript";
     providerOperation: "createTranscript";
     sideEffect: true;
   }, {
     alias: "elevenlabs.conversation.authorize";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Create conversation signed URL";
     providerObject: "elevenlabsConversation";
     providerOperation: "createConversationSignedUrl";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-elevenlabs";
  privacyNotes: readonly ["Text prompts, generated speech, uploaded audio/video, transcript text, conversation IDs, and conversation audio can contain personal data and are sent to or read from ElevenLabs.", "ElevenLabs API keys must remain server-side. Use signed URLs or single-use tokens for browser/client conversation startup instead of exposing the API key."];
  provider: "elevenlabs";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"provider-api-subset"` \| `"support-workflow-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"provider-api-subset"` \| `"support-workflow-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"send-only"` \| `"receive-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Creates or streams speech audio with ElevenLabs Text to Speech."`; `exposesSensitiveData`: `true`; `label`: `"Create speech audio"`; `providerObjects`: readonly \[\{ `kind`: `"elevenlabsVoice"`; `label`: `"ElevenLabs Voice"`; \}, \{ `kind`: `"elevenlabsSpeechGeneration"`; `label`: `"ElevenLabs Speech Generation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Creates signed URLs for authorized ElevenLabs Conversational AI sessions and reads conversation transcripts."`; `exposesSensitiveData`: `true`; `label`: `"Receive conversational voice"`; `providerObjects`: readonly \[\{ `kind`: `"elevenlabsConversation"`; `label`: `"ElevenLabs Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"media"`; `description`: `"Reads generated audio streams, conversation audio, speech timing alignments, and speech-to-text transcript resources."`; `exposesSensitiveData`: `true`; `label`: `"Voice media and transcripts"`; `providerObjects`: readonly \[\{ `kind`: `"elevenlabsAudio"`; `label`: `"ElevenLabs Audio"`; \}, \{ `kind`: `"elevenlabsTranscript"`; `label`: `"ElevenLabs Transcript"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"ElevenLabs JavaScript SDK package"`; `url`: `"https://www.npmjs.com/package/@elevenlabs/elevenlabs-js"`; \}, \{ `label`: `"ElevenLabs API reference"`; `url`: `"https://elevenlabs.io/docs/api-reference"`; \}, \{ `label`: `"ElevenLabs Speech to Text"`; `url`: `"https://elevenlabs.io/docs/api-reference/speech-to-text/convert"`; \}, \{ `label`: `"ElevenLabs Text to Speech"`; `url`: `"https://elevenlabs.io/docs/api-reference/text-to-speech/convert"`; \}\]; `notes`: readonly \[`"Implements normalized Cognidesk speech, transcription, and conversational session helpers with the official ElevenLabs JavaScript SDK."`, `"Raw ElevenLabs SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage."`, `"Realtime WebSocket transport behavior, telephony carrier setup, workspace administration, retention, and live agent routing remain SDK-user/provider configuration."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"ElevenLabs JavaScript SDK package"`; `url`: `"https://www.npmjs.com/package/@elevenlabs/elevenlabs-js"`; \}, \{ `label`: `"ElevenLabs API reference"`; `url`: `"https://elevenlabs.io/docs/api-reference"`; \}, \{ `label`: `"ElevenLabs Speech to Text"`; `url`: `"https://elevenlabs.io/docs/api-reference/speech-to-text/convert"`; \}, \{ `label`: `"ElevenLabs Text to Speech"`; `url`: `"https://elevenlabs.io/docs/api-reference/text-to-speech/convert"`; \}\] |
| `coverage.notes` | readonly \[`"Implements normalized Cognidesk speech, transcription, and conversational session helpers with the official ElevenLabs JavaScript SDK."`, `"Raw ElevenLabs SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage."`, `"Realtime WebSocket transport behavior, telephony carrier setup, workspace administration, retention, and live agent routing remain SDK-user/provider configuration."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side ElevenLabs credential used by the official SDK for voice API requests."`; `id`: `"elevenlabs-api-key"`; `label`: `"ElevenLabs API key"`; `metadata`: \{ `minimumAccess`: readonly \[`"text-to-speech"`, `"speech-to-text"`, `"conversational-ai"`, `"voices:read"`, `"models:read"`\]; `scopeKind`: `"provider-permission"`; \}; `required`: `true`; \}\] |
| `directions` | readonly \[`"send-only"`, `"receive-only"`, `"bidirectional"`\] |
| `id` | `"voice.elevenlabs"` |
| `limitations` | readonly \[`"Realtime WebSocket transport behavior, telephony setup, batch calling, call recording policy, consent, retention, and live agent routing remain SDK-user/provider configuration."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `sdkPackage`: `"@elevenlabs/elevenlabs-js"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"2.53.1"`; \}; `rawClient`: \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \}; \} |
| `metadata.implementation` | \{ `sdkPackage`: `"@elevenlabs/elevenlabs-js"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"2.53.1"`; \} |
| `metadata.implementation.sdkPackage` | `"@elevenlabs/elevenlabs-js"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedVersion` | `"2.53.1"` |
| `metadata.rawClient` | \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \} |
| `metadata.rawClient.coverage` | `"upstream-sdk"` |
| `metadata.rawClient.export` | `"getRawClient"` |
| `name` | `"ElevenLabs Voice"` |
| `operations` | readonly \[\{ `alias`: `"voice.speak"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `exposesSensitiveData`: `true`; `label`: `"Create speech"`; `providerObject`: `"elevenlabsAudio"`; `providerOperation`: `"createSpeech"`; `sideEffect`: `true`; \}, \{ `alias`: `"voice.turn.finalize"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Create transcript"`; `providerObject`: `"elevenlabsTranscript"`; `providerOperation`: `"createTranscript"`; `sideEffect`: `true`; \}, \{ `alias`: `"elevenlabs.conversation.authorize"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Create conversation signed URL"`; `providerObject`: `"elevenlabsConversation"`; `providerOperation`: `"createConversationSignedUrl"`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-voice-elevenlabs"` |
| `privacyNotes` | readonly \[`"Text prompts, generated speech, uploaded audio/video, transcript text, conversation IDs, and conversation audio can contain personal data and are sent to or read from ElevenLabs."`, `"ElevenLabs API keys must remain server-side. Use signed URLs or single-use tokens for browser/client conversation startup instead of exposing the API key."`\] |
| `provider` | `"elevenlabs"` |
| `trustLevel` | `"official"` |
