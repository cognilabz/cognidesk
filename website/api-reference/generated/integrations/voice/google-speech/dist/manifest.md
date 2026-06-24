# integrations/voice/google-speech/dist/manifest

## Variables

### googleSpeechIntegration

```ts
const googleSpeechIntegration: DefinedIntegration<{
  capabilities: (
     | {
     audiences: "customer-facing"[];
     capability: string;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     audiences: ("customer-facing" | "internal-support")[];
     capability: string;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect?: never;
  })[];
  category: string;
  channelAudiences: ("customer-facing" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url: string;
     }[];
     notes: string[];
     scope: "provider-api-subset";
  };
  credentialRequirements: {
     description: string;
     id: string;
     label: string;
     required: true;
  }[];
  directions: ("receive-only" | "send-only" | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official";
  }[];
  metadata: {
     channelCoverage: {
        backgroundModelProvider: string;
        browserVoiceProtocol: string;
        fullGoogleCloudSpeechSdk: string;
        longAudioSynthesis: string;
        longRunningRecognize: string;
        speechToText: string;
        streamingRecognize: string;
        textToSpeech: string;
     };
     implementation: {
        adapterCoverage: string[];
        rawClientEscapeHatch: boolean;
        sdkPackages: string[];
        strategy: string;
     };
     integrationEntryPoints: {
        manifest: string;
        runtime: string;
     };
     integrationName: string;
     integrationPackageName: string;
  };
  name: string;
  operations: (
     | {
     alias: string;
     capability: string;
     exposesSensitiveData: true;
     externallyVisible?: never;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect?: never;
   }
     | {
     alias: string;
     capability: string;
     exposesSensitiveData?: never;
     externallyVisible: true;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect: true;
  })[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "official";
}, unknown, never>;
```

***

### googleSpeechManifestInput

```ts
const googleSpeechManifestInput: {
  capabilities: (
     | {
     audiences: "customer-facing"[];
     capability: string;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     audiences: ("customer-facing" | "internal-support")[];
     capability: string;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect?: never;
  })[];
  category: string;
  channelAudiences: ("customer-facing" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url: string;
     }[];
     notes: string[];
     scope: "provider-api-subset";
  };
  credentialRequirements: {
     description: string;
     id: string;
     label: string;
     required: true;
  }[];
  directions: ("receive-only" | "send-only" | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official";
  }[];
  metadata: {
     channelCoverage: {
        backgroundModelProvider: string;
        browserVoiceProtocol: string;
        fullGoogleCloudSpeechSdk: string;
        longAudioSynthesis: string;
        longRunningRecognize: string;
        speechToText: string;
        streamingRecognize: string;
        textToSpeech: string;
     };
     implementation: {
        adapterCoverage: string[];
        rawClientEscapeHatch: boolean;
        sdkPackages: string[];
        strategy: string;
     };
     integrationEntryPoints: {
        manifest: string;
        runtime: string;
     };
     integrationName: string;
     integrationPackageName: string;
  };
  name: string;
  operations: (
     | {
     alias: string;
     capability: string;
     exposesSensitiveData: true;
     externallyVisible?: never;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect?: never;
   }
     | {
     alias: string;
     capability: string;
     exposesSensitiveData?: never;
     externallyVisible: true;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect: true;
  })[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | ( \| \{ `audiences`: `"customer-facing"`[]; `capability`: `string`; `description`: `string`; `exposesSensitiveData`: `true`; `label`: `string`; `providerObjects`: \{ `kind`: `string`; `label`: `string`; \}[]; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `audiences`: (`"customer-facing"` \| `"internal-support"`)[]; `capability`: `string`; `description`: `string`; `exposesSensitiveData`: `true`; `label`: `string`; `providerObjects`: \{ `kind`: `string`; `label`: `string`; \}[]; `requiresCredential`: `true`; `sideEffect?`: `never`; \})[] |
| <a id="property-category"></a> `category` | `string` |
| <a id="property-channelaudiences"></a> `channelAudiences` | (`"customer-facing"` \| `"mixed"`)[] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \{ `label`: `string`; `url`: `string`; \}[]; `notes`: `string`[]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | `"provider-api-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \{ `description`: `string`; `id`: `string`; `label`: `string`; `required`: `true`; \}[] |
| <a id="property-directions"></a> `directions` | (`"receive-only"` \| `"send-only"` \| `"bidirectional"`)[] |
| <a id="property-id"></a> `id` | `string` |
| <a id="property-limitations"></a> `limitations` | `string`[] |
| <a id="property-maintainers"></a> `maintainers` | \{ `name`: `string`; `type`: `"official"`; \}[] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullGoogleCloudSpeechSdk`: `string`; `longAudioSynthesis`: `string`; `longRunningRecognize`: `string`; `speechToText`: `string`; `streamingRecognize`: `string`; `textToSpeech`: `string`; \}; `implementation`: \{ `adapterCoverage`: `string`[]; `rawClientEscapeHatch`: `boolean`; `sdkPackages`: `string`[]; `strategy`: `string`; \}; `integrationEntryPoints`: \{ `manifest`: `string`; `runtime`: `string`; \}; `integrationName`: `string`; `integrationPackageName`: `string`; \} |
| `metadata.channelCoverage` | \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullGoogleCloudSpeechSdk`: `string`; `longAudioSynthesis`: `string`; `longRunningRecognize`: `string`; `speechToText`: `string`; `streamingRecognize`: `string`; `textToSpeech`: `string`; \} |
| `metadata.channelCoverage.backgroundModelProvider` | `string` |
| `metadata.channelCoverage.browserVoiceProtocol` | `string` |
| `metadata.channelCoverage.fullGoogleCloudSpeechSdk` | `string` |
| `metadata.channelCoverage.longAudioSynthesis` | `string` |
| `metadata.channelCoverage.longRunningRecognize` | `string` |
| `metadata.channelCoverage.speechToText` | `string` |
| `metadata.channelCoverage.streamingRecognize` | `string` |
| `metadata.channelCoverage.textToSpeech` | `string` |
| `metadata.implementation` | \{ `adapterCoverage`: `string`[]; `rawClientEscapeHatch`: `boolean`; `sdkPackages`: `string`[]; `strategy`: `string`; \} |
| `metadata.implementation.adapterCoverage` | `string`[] |
| `metadata.implementation.rawClientEscapeHatch` | `boolean` |
| `metadata.implementation.sdkPackages` | `string`[] |
| `metadata.implementation.strategy` | `string` |
| `metadata.integrationEntryPoints` | \{ `manifest`: `string`; `runtime`: `string`; \} |
| `metadata.integrationEntryPoints.manifest` | `string` |
| `metadata.integrationEntryPoints.runtime` | `string` |
| `metadata.integrationName` | `string` |
| `metadata.integrationPackageName` | `string` |
| <a id="property-name"></a> `name` | `string` |
| <a id="property-operations"></a> `operations` | ( \| \{ `alias`: `string`; `capability`: `string`; `exposesSensitiveData`: `true`; `externallyVisible?`: `never`; `providerObject`: `string`; `providerOperation`: `string`; `requiresCredential`: `true`; `sideEffect?`: `never`; \} \| \{ `alias`: `string`; `capability`: `string`; `exposesSensitiveData?`: `never`; `externallyVisible`: `true`; `providerObject`: `string`; `providerOperation`: `string`; `requiresCredential`: `true`; `sideEffect`: `true`; \})[] |
| <a id="property-packagename"></a> `packageName` | `string` |
| <a id="property-privacynotes"></a> `privacyNotes` | `string`[] |
| <a id="property-provider"></a> `provider` | `string` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### googleSpeechProviderManifest

```ts
const googleSpeechProviderManifest: {
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
  capabilities: (
     | {
     audiences: "customer-facing"[];
     capability: string;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     audiences: ("customer-facing" | "internal-support")[];
     capability: string;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect?: never;
  })[];
  category: string;
  channelAudiences: ("customer-facing" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url: string;
     }[];
     notes: string[];
     scope: "provider-api-subset";
  };
  credentialRequirements: {
     description: string;
     id: string;
     label: string;
     required: true;
  }[];
  directions: ("receive-only" | "send-only" | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official";
  }[];
  metadata: {
     channelCoverage: {
        backgroundModelProvider: string;
        browserVoiceProtocol: string;
        fullGoogleCloudSpeechSdk: string;
        longAudioSynthesis: string;
        longRunningRecognize: string;
        speechToText: string;
        streamingRecognize: string;
        textToSpeech: string;
     };
     implementation: {
        adapterCoverage: string[];
        rawClientEscapeHatch: boolean;
        sdkPackages: string[];
        strategy: string;
     };
     integrationEntryPoints: {
        manifest: string;
        runtime: string;
     };
     integrationName: string;
     integrationPackageName: string;
  };
  name: string;
  operations: (
     | {
     alias: string;
     capability: string;
     exposesSensitiveData: true;
     externallyVisible?: never;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect?: never;
   }
     | {
     alias: string;
     capability: string;
     exposesSensitiveData?: never;
     externallyVisible: true;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect: true;
  })[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
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
| `capabilities` | ( \| \{ `audiences`: `"customer-facing"`[]; `capability`: `string`; `description`: `string`; `exposesSensitiveData`: `true`; `label`: `string`; `providerObjects`: \{ `kind`: `string`; `label`: `string`; \}[]; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `audiences`: (`"customer-facing"` \| `"internal-support"`)[]; `capability`: `string`; `description`: `string`; `exposesSensitiveData`: `true`; `label`: `string`; `providerObjects`: \{ `kind`: `string`; `label`: `string`; \}[]; `requiresCredential`: `true`; `sideEffect?`: `never`; \})[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url`: `string`; \}[]; `notes`: `string`[]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \{ `description`: `string`; `id`: `string`; `label`: `string`; `required`: `true`; \}[] |
| `directions` | (`"receive-only"` \| `"send-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"`; \}[] |
| `metadata` | \{ `channelCoverage`: \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullGoogleCloudSpeechSdk`: `string`; `longAudioSynthesis`: `string`; `longRunningRecognize`: `string`; `speechToText`: `string`; `streamingRecognize`: `string`; `textToSpeech`: `string`; \}; `implementation`: \{ `adapterCoverage`: `string`[]; `rawClientEscapeHatch`: `boolean`; `sdkPackages`: `string`[]; `strategy`: `string`; \}; `integrationEntryPoints`: \{ `manifest`: `string`; `runtime`: `string`; \}; `integrationName`: `string`; `integrationPackageName`: `string`; \} |
| `metadata.channelCoverage` | \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullGoogleCloudSpeechSdk`: `string`; `longAudioSynthesis`: `string`; `longRunningRecognize`: `string`; `speechToText`: `string`; `streamingRecognize`: `string`; `textToSpeech`: `string`; \} |
| `metadata.channelCoverage.backgroundModelProvider` | `string` |
| `metadata.channelCoverage.browserVoiceProtocol` | `string` |
| `metadata.channelCoverage.fullGoogleCloudSpeechSdk` | `string` |
| `metadata.channelCoverage.longAudioSynthesis` | `string` |
| `metadata.channelCoverage.longRunningRecognize` | `string` |
| `metadata.channelCoverage.speechToText` | `string` |
| `metadata.channelCoverage.streamingRecognize` | `string` |
| `metadata.channelCoverage.textToSpeech` | `string` |
| `metadata.implementation` | \{ `adapterCoverage`: `string`[]; `rawClientEscapeHatch`: `boolean`; `sdkPackages`: `string`[]; `strategy`: `string`; \} |
| `metadata.implementation.adapterCoverage` | `string`[] |
| `metadata.implementation.rawClientEscapeHatch` | `boolean` |
| `metadata.implementation.sdkPackages` | `string`[] |
| `metadata.implementation.strategy` | `string` |
| `metadata.integrationEntryPoints` | \{ `manifest`: `string`; `runtime`: `string`; \} |
| `metadata.integrationEntryPoints.manifest` | `string` |
| `metadata.integrationEntryPoints.runtime` | `string` |
| `metadata.integrationName` | `string` |
| `metadata.integrationPackageName` | `string` |
| `name` | `string` |
| `operations` | ( \| \{ `alias`: `string`; `capability`: `string`; `exposesSensitiveData`: `true`; `externallyVisible?`: `never`; `providerObject`: `string`; `providerOperation`: `string`; `requiresCredential`: `true`; `sideEffect?`: `never`; \} \| \{ `alias`: `string`; `capability`: `string`; `exposesSensitiveData?`: `never`; `externallyVisible`: `true`; `providerObject`: `string`; `providerOperation`: `string`; `requiresCredential`: `true`; `sideEffect`: `true`; \})[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` |
