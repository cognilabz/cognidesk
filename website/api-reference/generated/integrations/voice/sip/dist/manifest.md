# integrations/voice/sip/dist/manifest

## Variables

### sipVoiceProviderManifest

```ts
const sipVoiceProviderManifest: {
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
     scope:   | "local-protocol"
        | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
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
     type: "unknown" | "official" | "community" | "partner";
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
     description: "Accepts inbound SIP call events bridged from the SDK user's SIP stack into Cognidesk voice handling.";
     exposesSensitiveData: true;
     label: "Receive SIP calls";
     providerObjects: readonly [{
        kind: "sipCall";
        label: "SIP Call";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Defines outbound INVITE contracts for BYOC SIP providers and SDK-user-owned SIP stacks.";
     exposesSensitiveData: true;
     label: "Place SIP calls";
     providerObjects: readonly [{
        kind: "sipInvite";
        label: "SIP INVITE";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "media";
     description: "Carries SDP offer/answer data and TLS/SRTP readiness metadata for the SDK user's SIP/RTP bridge.";
     exposesSensitiveData: true;
     label: "SDP media negotiation";
     providerObjects: readonly [{
        kind: "sipDialog";
        label: "SIP Dialog";
      }, {
        kind: "sdpSessionDescription";
        label: "SDP Session Description";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     description: "Exposes REFER/re-INVITE style transfer contracts while leaving transfer policy to SDK configuration.";
     label: "SIP call transfer";
     providerObjects: readonly [{
        kind: "sipTransfer";
        label: "SIP Transfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "recording";
     changesWorkflow: true;
     description: "Normalizes recording lifecycle callbacks emitted by the SDK user's SIP media stack.";
     exposesSensitiveData: true;
     label: "Recording callbacks";
     providerObjects: readonly [{
        kind: "sipRecording";
        label: "SIP Recording";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "transcription";
     description: "Normalizes transcription callbacks emitted by the SDK user's SIP media or ASR stack.";
     exposesSensitiveData: true;
     label: "Transcription callbacks";
     providerObjects: readonly [{
        kind: "sipTranscription";
        label: "SIP Transcription";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "sip.webhook-signature";
     description: "Validates configurable shared-secret and HMAC headers before parsing generic SIP callback payloads.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate SIP callbacks";
     providerObjects: readonly [{
        kind: "sipWebhook";
        label: "SIP Webhook";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [];
     notes: readonly ["Defines a Cognidesk SIP stack gateway contract and callback normalizer for SDK-user-owned SIP/SBC/BYOC infrastructure.", "Does not implement a SIP transaction/dialog stack, registrar, SBC, RTP/SRTP media engine, or any specific provider's SIP/Voice REST API.", "Provider-specific SIP registration, INVITE/REFER/re-INVITE execution, media anchoring, recording, transcription, routing, consent, and retention remain SDK-user/provider gateway responsibilities."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "Registrar URI used by the SDK user's SIP stack to register or authenticate the endpoint.";
     id: "sip-registrar";
     label: "SIP registrar";
     required: true;
   }, {
     description: "Outbound proxy URI or SBC target used for INVITE, transfer, and call-control signaling.";
     id: "sip-proxy";
     label: "SIP proxy";
     required: false;
   }, {
     description: "SIP realm/domain used to construct and validate address-of-record values.";
     id: "sip-domain";
     label: "SIP domain";
     required: true;
   }, {
     description: "Auth username and password/secret supplied to the SDK user's chosen SIP stack.";
     id: "sip-auth";
     label: "SIP authentication";
     required: true;
   }, {
     description: "TLS must be enabled when the deployment requires encrypted SIP signaling.";
     id: "sip-tls";
     label: "SIP over TLS";
     required: true;
   }, {
     description: "SRTP must be enabled when the deployment requires encrypted RTP media.";
     id: "sip-srtp";
     label: "SRTP media";
     required: true;
   }, {
     description: "Public callback URL plus shared-secret or HMAC validation for call, transfer, recording, and transcription events.";
     id: "sip-webhook-callback";
     label: "SIP event callback";
     required: true;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "voice.sip";
  limitations: readonly ["A full SIP transaction/dialog stack is intentionally out of scope for this package.", "SDK users must bridge these contracts to their chosen SIP stack, SBC, PBX, or BYOC voice provider.", "Conversation routing, consent, recording policy, retention, and handoff remain SDK-user configuration."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     bridgeContract: "sip-stack-gateway";
     channelCoverage: {
        inboundInviteEvents: "sdk-owned-bridge-contract";
        outboundInvite: "sdk-owned-bridge-contract";
        recordingCallbacks: "sdk-owned-bridge-contract";
        sdpMedia: "sdk-owned-bridge-contract";
        sipGatewayContract: "sdk-owned-local-protocol";
        sipStack: "not-covered";
        transcriptionCallbacks: "sdk-owned-bridge-contract";
        transfer: "sdk-owned-bridge-contract";
     };
     secureMedia: readonly ["tls", "srtp"];
     webhookEvents: readonly ["call.status", "call.transfer", "recording", "transcription"];
  };
  name: "Generic SIP Voice Connection";
  operations: readonly [{
     alias: "sip.call.start";
     capability: "send";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Place SIP call";
     providerObject: "sipInvite";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.call.answer";
     capability: "receive";
     changesWorkflow: true;
     extension: true;
     label: "Answer SIP call";
     providerObject: "sipCall";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.call.hangup";
     capability: "send";
     changesWorkflow: true;
     extension: true;
     label: "Hang up SIP call";
     providerObject: "sipCall";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.call.transfer";
     capability: "transfer";
     changesWorkflow: true;
     extension: true;
     label: "Transfer SIP call";
     providerObject: "sipTransfer";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.recording.start";
     capability: "recording";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Start SIP recording";
     providerObject: "sipRecording";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.recording.stop";
     capability: "recording";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Stop SIP recording";
     providerObject: "sipRecording";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.dtmf.send";
     capability: "send";
     extension: true;
     label: "Send SIP DTMF";
     providerObject: "sipCall";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.media.update";
     capability: "media";
     exposesSensitiveData: true;
     extension: true;
     label: "Update SIP media session";
     providerObject: "sipDialog";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "sip.webhook.parse";
     capability: "sip.webhook-signature";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse SIP callback";
     providerObject: "sipWebhook";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-voice-sip";
  privacyNotes: readonly ["SIP addresses, call metadata, SDP media descriptions, recordings, and transcripts can contain personal data.", "This package does not implement a SIP stack or expose SIP credentials to browsers; SDK users supply and operate the SIP/SBC bridge."];
  provider: "sip";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"` \| `"receive-only"` \| `"send-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"unknown"` \| `"official"` \| `"community"` \| `"partner"`; `url?`: `string`; \}[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Accepts inbound SIP call events bridged from the SDK user's SIP stack into Cognidesk voice handling."`; `exposesSensitiveData`: `true`; `label`: `"Receive SIP calls"`; `providerObjects`: readonly \[\{ `kind`: `"sipCall"`; `label`: `"SIP Call"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Defines outbound INVITE contracts for BYOC SIP providers and SDK-user-owned SIP stacks."`; `exposesSensitiveData`: `true`; `label`: `"Place SIP calls"`; `providerObjects`: readonly \[\{ `kind`: `"sipInvite"`; `label`: `"SIP INVITE"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"media"`; `description`: `"Carries SDP offer/answer data and TLS/SRTP readiness metadata for the SDK user's SIP/RTP bridge."`; `exposesSensitiveData`: `true`; `label`: `"SDP media negotiation"`; `providerObjects`: readonly \[\{ `kind`: `"sipDialog"`; `label`: `"SIP Dialog"`; \}, \{ `kind`: `"sdpSessionDescription"`; `label`: `"SDP Session Description"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"transfer"`; `changesWorkflow`: `true`; `description`: `"Exposes REFER/re-INVITE style transfer contracts while leaving transfer policy to SDK configuration."`; `label`: `"SIP call transfer"`; `providerObjects`: readonly \[\{ `kind`: `"sipTransfer"`; `label`: `"SIP Transfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"recording"`; `changesWorkflow`: `true`; `description`: `"Normalizes recording lifecycle callbacks emitted by the SDK user's SIP media stack."`; `exposesSensitiveData`: `true`; `label`: `"Recording callbacks"`; `providerObjects`: readonly \[\{ `kind`: `"sipRecording"`; `label`: `"SIP Recording"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"transcription"`; `description`: `"Normalizes transcription callbacks emitted by the SDK user's SIP media or ASR stack."`; `exposesSensitiveData`: `true`; `label`: `"Transcription callbacks"`; `providerObjects`: readonly \[\{ `kind`: `"sipTranscription"`; `label`: `"SIP Transcription"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"sip.webhook-signature"`; `description`: `"Validates configurable shared-secret and HMAC headers before parsing generic SIP callback payloads."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate SIP callbacks"`; `providerObjects`: readonly \[\{ `kind`: `"sipWebhook"`; `label`: `"SIP Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\]; `notes`: readonly \[`"Defines a Cognidesk SIP stack gateway contract and callback normalizer for SDK-user-owned SIP/SBC/BYOC infrastructure."`, `"Does not implement a SIP transaction/dialog stack, registrar, SBC, RTP/SRTP media engine, or any specific provider's SIP/Voice REST API."`, `"Provider-specific SIP registration, INVITE/REFER/re-INVITE execution, media anchoring, recording, transcription, routing, consent, and retention remain SDK-user/provider gateway responsibilities."`\]; `scope`: `"local-protocol"`; \} |
| `coverage.evidence` | readonly \[\] |
| `coverage.notes` | readonly \[`"Defines a Cognidesk SIP stack gateway contract and callback normalizer for SDK-user-owned SIP/SBC/BYOC infrastructure."`, `"Does not implement a SIP transaction/dialog stack, registrar, SBC, RTP/SRTP media engine, or any specific provider's SIP/Voice REST API."`, `"Provider-specific SIP registration, INVITE/REFER/re-INVITE execution, media anchoring, recording, transcription, routing, consent, and retention remain SDK-user/provider gateway responsibilities."`\] |
| `coverage.scope` | `"local-protocol"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Registrar URI used by the SDK user's SIP stack to register or authenticate the endpoint."`; `id`: `"sip-registrar"`; `label`: `"SIP registrar"`; `required`: `true`; \}, \{ `description`: `"Outbound proxy URI or SBC target used for INVITE, transfer, and call-control signaling."`; `id`: `"sip-proxy"`; `label`: `"SIP proxy"`; `required`: `false`; \}, \{ `description`: `"SIP realm/domain used to construct and validate address-of-record values."`; `id`: `"sip-domain"`; `label`: `"SIP domain"`; `required`: `true`; \}, \{ `description`: `"Auth username and password/secret supplied to the SDK user's chosen SIP stack."`; `id`: `"sip-auth"`; `label`: `"SIP authentication"`; `required`: `true`; \}, \{ `description`: `"TLS must be enabled when the deployment requires encrypted SIP signaling."`; `id`: `"sip-tls"`; `label`: `"SIP over TLS"`; `required`: `true`; \}, \{ `description`: `"SRTP must be enabled when the deployment requires encrypted RTP media."`; `id`: `"sip-srtp"`; `label`: `"SRTP media"`; `required`: `true`; \}, \{ `description`: `"Public callback URL plus shared-secret or HMAC validation for call, transfer, recording, and transcription events."`; `id`: `"sip-webhook-callback"`; `label`: `"SIP event callback"`; `required`: `true`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"voice.sip"` |
| `limitations` | readonly \[`"A full SIP transaction/dialog stack is intentionally out of scope for this package."`, `"SDK users must bridge these contracts to their chosen SIP stack, SBC, PBX, or BYOC voice provider."`, `"Conversation routing, consent, recording policy, retention, and handoff remain SDK-user configuration."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `bridgeContract`: `"sip-stack-gateway"`; `channelCoverage`: \{ `inboundInviteEvents`: `"sdk-owned-bridge-contract"`; `outboundInvite`: `"sdk-owned-bridge-contract"`; `recordingCallbacks`: `"sdk-owned-bridge-contract"`; `sdpMedia`: `"sdk-owned-bridge-contract"`; `sipGatewayContract`: `"sdk-owned-local-protocol"`; `sipStack`: `"not-covered"`; `transcriptionCallbacks`: `"sdk-owned-bridge-contract"`; `transfer`: `"sdk-owned-bridge-contract"`; \}; `secureMedia`: readonly \[`"tls"`, `"srtp"`\]; `webhookEvents`: readonly \[`"call.status"`, `"call.transfer"`, `"recording"`, `"transcription"`\]; \} |
| `metadata.bridgeContract` | `"sip-stack-gateway"` |
| `metadata.channelCoverage` | \{ `inboundInviteEvents`: `"sdk-owned-bridge-contract"`; `outboundInvite`: `"sdk-owned-bridge-contract"`; `recordingCallbacks`: `"sdk-owned-bridge-contract"`; `sdpMedia`: `"sdk-owned-bridge-contract"`; `sipGatewayContract`: `"sdk-owned-local-protocol"`; `sipStack`: `"not-covered"`; `transcriptionCallbacks`: `"sdk-owned-bridge-contract"`; `transfer`: `"sdk-owned-bridge-contract"`; \} |
| `metadata.channelCoverage.inboundInviteEvents` | `"sdk-owned-bridge-contract"` |
| `metadata.channelCoverage.outboundInvite` | `"sdk-owned-bridge-contract"` |
| `metadata.channelCoverage.recordingCallbacks` | `"sdk-owned-bridge-contract"` |
| `metadata.channelCoverage.sdpMedia` | `"sdk-owned-bridge-contract"` |
| `metadata.channelCoverage.sipGatewayContract` | `"sdk-owned-local-protocol"` |
| `metadata.channelCoverage.sipStack` | `"not-covered"` |
| `metadata.channelCoverage.transcriptionCallbacks` | `"sdk-owned-bridge-contract"` |
| `metadata.channelCoverage.transfer` | `"sdk-owned-bridge-contract"` |
| `metadata.secureMedia` | readonly \[`"tls"`, `"srtp"`\] |
| `metadata.webhookEvents` | readonly \[`"call.status"`, `"call.transfer"`, `"recording"`, `"transcription"`\] |
| `name` | `"Generic SIP Voice Connection"` |
| `operations` | readonly \[\{ `alias`: `"sip.call.start"`; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Place SIP call"`; `providerObject`: `"sipInvite"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.call.answer"`; `capability`: `"receive"`; `changesWorkflow`: `true`; `extension`: `true`; `label`: `"Answer SIP call"`; `providerObject`: `"sipCall"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.call.hangup"`; `capability`: `"send"`; `changesWorkflow`: `true`; `extension`: `true`; `label`: `"Hang up SIP call"`; `providerObject`: `"sipCall"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.call.transfer"`; `capability`: `"transfer"`; `changesWorkflow`: `true`; `extension`: `true`; `label`: `"Transfer SIP call"`; `providerObject`: `"sipTransfer"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.recording.start"`; `capability`: `"recording"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Start SIP recording"`; `providerObject`: `"sipRecording"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.recording.stop"`; `capability`: `"recording"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Stop SIP recording"`; `providerObject`: `"sipRecording"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.dtmf.send"`; `capability`: `"send"`; `extension`: `true`; `label`: `"Send SIP DTMF"`; `providerObject`: `"sipCall"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.media.update"`; `capability`: `"media"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Update SIP media session"`; `providerObject`: `"sipDialog"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sip.webhook.parse"`; `capability`: `"sip.webhook-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse SIP callback"`; `providerObject`: `"sipWebhook"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-voice-sip"` |
| `privacyNotes` | readonly \[`"SIP addresses, call metadata, SDP media descriptions, recordings, and transcripts can contain personal data."`, `"This package does not implement a SIP stack or expose SIP credentials to browsers; SDK users supply and operate the SIP/SBC bridge."`\] |
| `provider` | `"sip"` |
| `trustLevel` | `"official"` |
