# integrations/voice/deepgram/dist/manifest

## Variables

### deepgramVoiceProviderManifest

```ts
const deepgramVoiceProviderManifest: {
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
     description: "Transcribes customer PCM/WAV voice input with Deepgram speech-to-text.";
     exposesSensitiveData: true;
     label: "Transcribe speech";
     providerObjects: readonly [{
        kind: "deepgramTranscript";
        label: "Deepgram Transcript";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Synthesizes Cognidesk assistant text with Deepgram text-to-speech.";
     exposesSensitiveData: true;
     label: "Synthesize speech";
     providerObjects: readonly [{
        kind: "deepgramSpeechSynthesis";
        label: "Deepgram Speech Synthesis";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Exchanges buffered PCM input and synthesized audio for Cognidesk voice sessions.";
     exposesSensitiveData: true;
     label: "Speech audio media";
     providerObjects: readonly [{
        kind: "voiceTranscript";
        label: "Voice Transcript";
      }, {
        kind: "voiceAudio";
        label: "Voice Audio";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Deepgram SDK package";
        url: "https://www.npmjs.com/package/@deepgram/sdk";
      }, {
        label: "Deepgram prerecorded audio STT";
        url: "https://developers.deepgram.com/docs/pre-recorded-audio";
      }, {
        label: "Deepgram Text-to-Speech REST";
        url: "https://developers.deepgram.com/docs/text-to-speech";
     }];
     notes: readonly ["Implements normalized Cognidesk speech-to-text and text-to-speech operations with the official Deepgram SDK.", "Raw Deepgram SDK access is exposed as an escape hatch, but Cognidesk does not claim ownership of the full Deepgram provider API.", "Deepgram Voice Agent, Flux streaming sessions, account administration, telephony setup, self-hosted deployment management, and custom model administration remain outside this normalized adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Deepgram API key used by the official SDK for speech API requests.";
     id: "deepgram-api-key";
     label: "Deepgram API key";
     metadata: {
        minimumAccess: readonly ["speech-to-text", "text-to-speech"];
        scopeKind: "provider-permission";
     };
     required: true;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "voice.deepgram";
  limitations: readonly ["This package implements SDK-backed STT/TTS for Cognidesk speech pipelines, not Deepgram Voice Agent or Flux websocket sessions.", "The background LLM is the Cognidesk Agent Model Set, not Deepgram."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        sdkPackage: "@deepgram/sdk";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "5.4.0";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "Deepgram Voice";
  operations: readonly [{
     alias: "voice.turn.finalize";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Transcribe speech";
     providerObject: "voiceTranscript";
     providerOperation: "listen.v1.media.transcribeFile";
   }, {
     alias: "voice.speak";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     label: "Synthesize speech";
     providerObject: "voiceAudio";
     providerOperation: "speak.v1.audio.generate";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-deepgram";
  privacyNotes: readonly ["Customer audio is sent to Deepgram for transcription, and assistant response text is sent to Deepgram for synthesis.", "Deepgram API keys remain server-side and are never issued to browsers by this package."];
  provider: "deepgram";
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
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Transcribes customer PCM/WAV voice input with Deepgram speech-to-text."`; `exposesSensitiveData`: `true`; `label`: `"Transcribe speech"`; `providerObjects`: readonly \[\{ `kind`: `"deepgramTranscript"`; `label`: `"Deepgram Transcript"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Synthesizes Cognidesk assistant text with Deepgram text-to-speech."`; `exposesSensitiveData`: `true`; `label`: `"Synthesize speech"`; `providerObjects`: readonly \[\{ `kind`: `"deepgramSpeechSynthesis"`; `label`: `"Deepgram Speech Synthesis"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"media"`; `description`: `"Exchanges buffered PCM input and synthesized audio for Cognidesk voice sessions."`; `exposesSensitiveData`: `true`; `label`: `"Speech audio media"`; `providerObjects`: readonly \[\{ `kind`: `"voiceTranscript"`; `label`: `"Voice Transcript"`; \}, \{ `kind`: `"voiceAudio"`; `label`: `"Voice Audio"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Deepgram SDK package"`; `url`: `"https://www.npmjs.com/package/@deepgram/sdk"`; \}, \{ `label`: `"Deepgram prerecorded audio STT"`; `url`: `"https://developers.deepgram.com/docs/pre-recorded-audio"`; \}, \{ `label`: `"Deepgram Text-to-Speech REST"`; `url`: `"https://developers.deepgram.com/docs/text-to-speech"`; \}\]; `notes`: readonly \[`"Implements normalized Cognidesk speech-to-text and text-to-speech operations with the official Deepgram SDK."`, `"Raw Deepgram SDK access is exposed as an escape hatch, but Cognidesk does not claim ownership of the full Deepgram provider API."`, `"Deepgram Voice Agent, Flux streaming sessions, account administration, telephony setup, self-hosted deployment management, and custom model administration remain outside this normalized adapter."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Deepgram SDK package"`; `url`: `"https://www.npmjs.com/package/@deepgram/sdk"`; \}, \{ `label`: `"Deepgram prerecorded audio STT"`; `url`: `"https://developers.deepgram.com/docs/pre-recorded-audio"`; \}, \{ `label`: `"Deepgram Text-to-Speech REST"`; `url`: `"https://developers.deepgram.com/docs/text-to-speech"`; \}\] |
| `coverage.notes` | readonly \[`"Implements normalized Cognidesk speech-to-text and text-to-speech operations with the official Deepgram SDK."`, `"Raw Deepgram SDK access is exposed as an escape hatch, but Cognidesk does not claim ownership of the full Deepgram provider API."`, `"Deepgram Voice Agent, Flux streaming sessions, account administration, telephony setup, self-hosted deployment management, and custom model administration remain outside this normalized adapter."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side Deepgram API key used by the official SDK for speech API requests."`; `id`: `"deepgram-api-key"`; `label`: `"Deepgram API key"`; `metadata`: \{ `minimumAccess`: readonly \[`"speech-to-text"`, `"text-to-speech"`\]; `scopeKind`: `"provider-permission"`; \}; `required`: `true`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"voice.deepgram"` |
| `limitations` | readonly \[`"This package implements SDK-backed STT/TTS for Cognidesk speech pipelines, not Deepgram Voice Agent or Flux websocket sessions."`, `"The background LLM is the Cognidesk Agent Model Set, not Deepgram."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `sdkPackage`: `"@deepgram/sdk"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"5.4.0"`; \}; `rawClient`: \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \}; \} |
| `metadata.implementation` | \{ `sdkPackage`: `"@deepgram/sdk"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"5.4.0"`; \} |
| `metadata.implementation.sdkPackage` | `"@deepgram/sdk"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedVersion` | `"5.4.0"` |
| `metadata.rawClient` | \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \} |
| `metadata.rawClient.coverage` | `"upstream-sdk"` |
| `metadata.rawClient.export` | `"getRawClient"` |
| `name` | `"Deepgram Voice"` |
| `operations` | readonly \[\{ `alias`: `"voice.turn.finalize"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Transcribe speech"`; `providerObject`: `"voiceTranscript"`; `providerOperation`: `"listen.v1.media.transcribeFile"`; \}, \{ `alias`: `"voice.speak"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `exposesSensitiveData`: `true`; `label`: `"Synthesize speech"`; `providerObject`: `"voiceAudio"`; `providerOperation`: `"speak.v1.audio.generate"`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-voice-deepgram"` |
| `privacyNotes` | readonly \[`"Customer audio is sent to Deepgram for transcription, and assistant response text is sent to Deepgram for synthesis."`, `"Deepgram API keys remain server-side and are never issued to browsers by this package."`\] |
| `provider` | `"deepgram"` |
| `trustLevel` | `"official"` |
