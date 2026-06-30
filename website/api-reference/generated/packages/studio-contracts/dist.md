# packages/studio-contracts/dist

## Type Aliases

### StudioActionAudience

```ts
type StudioActionAudience = StudioChannelAudience;
```

***

### StudioAgentIntrospection

```ts
type StudioAgentIntrospection = z.infer<typeof StudioAgentIntrospectionSchema>;
```

***

### StudioCapabilityAvailability

```ts
type StudioCapabilityAvailability = z.infer<typeof StudioCapabilityAvailabilitySchema>;
```

***

### StudioChannelAudience

```ts
type StudioChannelAudience = z.infer<typeof StudioChannelAudienceSchema>;
```

***

### StudioChannelBehaviorPolicy

```ts
type StudioChannelBehaviorPolicy = z.infer<typeof StudioChannelBehaviorPolicySchema>;
```

***

### StudioChannelCapability

```ts
type StudioChannelCapability = z.infer<typeof StudioChannelCapabilitySchema>;
```

***

### StudioChannelConfiguration

```ts
type StudioChannelConfiguration = z.infer<typeof StudioChannelConfigurationSchema>;
```

***

### StudioChannelFlowActivation

```ts
type StudioChannelFlowActivation = z.infer<typeof StudioChannelFlowActivationSchema>;
```

***

### StudioChannelHandoffPolicy

```ts
type StudioChannelHandoffPolicy = z.infer<typeof StudioChannelHandoffPolicySchema>;
```

***

### StudioChannelOutboundPolicy

```ts
type StudioChannelOutboundPolicy = z.infer<typeof StudioChannelOutboundPolicySchema>;
```

***

### StudioChannelPolicyDetail

```ts
type StudioChannelPolicyDetail = z.infer<typeof StudioChannelPolicyDetailSchema>;
```

***

### StudioChannelSetConfiguration

```ts
type StudioChannelSetConfiguration = z.infer<typeof StudioChannelSetConfigurationSchema>;
```

***

### StudioConfigurationMutationOperation

```ts
type StudioConfigurationMutationOperation = z.infer<typeof StudioConfigurationMutationOperationSchema>;
```

***

### StudioConfigurationMutationRequest

```ts
type StudioConfigurationMutationRequest = z.infer<typeof StudioConfigurationMutationRequestSchema>;
```

***

### StudioConfigurationMutationResult

```ts
type StudioConfigurationMutationResult = z.infer<typeof StudioConfigurationMutationResultSchema>;
```

***

### StudioConfigurationSurface

```ts
type StudioConfigurationSurface = z.infer<typeof StudioConfigurationSurfaceSchema>;
```

***

### StudioConversationSummary

```ts
type StudioConversationSummary = z.infer<typeof StudioConversationSummarySchema>;
```

***

### StudioDashboardArtifact

```ts
type StudioDashboardArtifact = z.infer<typeof StudioDashboardArtifactSchema>;
```

***

### StudioDashboardDataCapability

```ts
type StudioDashboardDataCapability = z.infer<typeof StudioDashboardDataCapabilitySchema>;
```

***

### StudioDashboardDataQuery

```ts
type StudioDashboardDataQuery = z.infer<typeof StudioDashboardDataQuerySchema>;
```

***

### StudioDashboardDataset

```ts
type StudioDashboardDataset = z.infer<typeof StudioDashboardDatasetSchema>;
```

***

### StudioDashboardSpec

```ts
type StudioDashboardSpec = z.infer<typeof StudioDashboardSpecSchema>;
```

***

### StudioDashboardWidget

```ts
type StudioDashboardWidget = z.infer<typeof StudioDashboardWidgetSchema>;
```

***

### StudioJourneyGraph

```ts
type StudioJourneyGraph = z.infer<typeof StudioJourneyGraphSchema>;
```

***

### StudioJourneySummary

```ts
type StudioJourneySummary = z.infer<typeof StudioJourneySummarySchema>;
```

***

### StudioKnowledgeSummary

```ts
type StudioKnowledgeSummary = z.infer<typeof StudioKnowledgeSummarySchema>;
```

***

### StudioOperatorClientEvent

```ts
type StudioOperatorClientEvent = z.infer<typeof StudioOperatorClientEventSchema>;
```

***

### StudioOperatorReasoningEffort

```ts
type StudioOperatorReasoningEffort = z.infer<typeof StudioOperatorReasoningEffortSchema>;
```

***

### StudioOperatorServerEvent

```ts
type StudioOperatorServerEvent = z.infer<typeof StudioOperatorServerEventSchema>;
```

***

### StudioOperatorSessionId

```ts
type StudioOperatorSessionId = z.infer<typeof StudioOperatorSessionIdSchema>;
```

***

### StudioOperatorSurface

```ts
type StudioOperatorSurface = z.infer<typeof StudioOperatorSurfaceSchema>;
```

***

### StudioPermission

```ts
type StudioPermission = z.infer<typeof StudioPermissionSchema>;
```

***

### StudioProviderCoverageScope

```ts
type StudioProviderCoverageScope = z.infer<typeof StudioProviderCoverageScopeSchema>;
```

***

### StudioProviderCredentialStatus

```ts
type StudioProviderCredentialStatus = z.infer<typeof StudioProviderCredentialStatusSchema>;
```

***

### StudioProviderDirection

```ts
type StudioProviderDirection = z.infer<typeof StudioProviderDirectionSchema>;
```

***

### StudioProviderPackageSummary

```ts
type StudioProviderPackageSummary = z.infer<typeof StudioProviderPackageSummarySchema>;
```

***

### StudioProviderReadiness

```ts
type StudioProviderReadiness = z.infer<typeof StudioProviderReadinessSchema>;
```

***

### StudioProviderTrustLevel

```ts
type StudioProviderTrustLevel = z.infer<typeof StudioProviderTrustLevelSchema>;
```

***

### StudioRole

```ts
type StudioRole = z.infer<typeof StudioRoleSchema>;
```

***

### StudioTargetManifest

```ts
type StudioTargetManifest = z.infer<typeof StudioTargetManifestSchema>;
```

***

### StudioTargetManifestInput

```ts
type StudioTargetManifestInput = z.input<typeof StudioTargetManifestSchema>;
```

***

### StudioTargetOverlay

```ts
type StudioTargetOverlay = z.infer<typeof StudioTargetOverlaySchema>;
```

***

### StudioTelemetryMetricPoint

```ts
type StudioTelemetryMetricPoint = z.infer<typeof StudioTelemetryMetricPointSchema>;
```

***

### StudioToolSummary

```ts
type StudioToolSummary = z.infer<typeof StudioToolSummarySchema>;
```

***

### StudioTraceSummary

```ts
type StudioTraceSummary = z.infer<typeof StudioTraceSummarySchema>;
```

***

### StudioWidgetSummary

```ts
type StudioWidgetSummary = z.infer<typeof StudioWidgetSummarySchema>;
```

## Variables

### permissionsByRole

```ts
const permissionsByRole: Record<StudioRole, StudioPermission[]>;
```

***

### StudioActionAudienceSchema

```ts
const StudioActionAudienceSchema: z.ZodEnum<{
  customer-facing: "customer-facing";
  internal-support: "internal-support";
  mixed: "mixed";
}>;
```

***

### StudioAgentIntrospectionSchema

```ts
const StudioAgentIntrospectionSchema: z.ZodObject<{
  agent: z.ZodObject<{
     behavior: z.ZodOptional<z.ZodUnknown>;
     channelPolicies: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     handoffPolicy: z.ZodOptional<z.ZodUnknown>;
     id: z.ZodString;
     instructions: z.ZodString;
     journeyCount: z.ZodNumber;
     knowledgeCount: z.ZodNumber;
     logLevel: z.ZodOptional<z.ZodString>;
     persona: z.ZodOptional<z.ZodUnknown>;
     toolCount: z.ZodNumber;
     widgetCount: z.ZodNumber;
  }, z.core.$strip>;
  capturedAt: z.ZodString;
  configurationSurface: z.ZodOptional<z.ZodObject<{
     capabilityAvailability: z.ZodDefault<z.ZodArray<z.ZodObject<{
        blockers: z.ZodDefault<z.ZodArray<...>>;
        capability: z.ZodOptional<z.ZodString>;
        enabledForAgents: z.ZodDefault<z.ZodArray<...>>;
        enabledForChannels: z.ZodDefault<z.ZodArray<...>>;
        enabledForJourneys: z.ZodDefault<z.ZodArray<...>>;
        enabledForTools: z.ZodDefault<z.ZodArray<...>>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        providerPackageId: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<{
           blocked: ...;
           configured: ...;
           enabled: ...;
           installed: ...;
           registry-available: ...;
        }>;
     }, z.core.$strip>>>;
     capturedAt: z.ZodString;
     channels: z.ZodDefault<z.ZodArray<z.ZodObject<{
        audience: z.ZodOptional<z.ZodEnum<...>>;
        behavior: z.ZodOptional<z.ZodObject<..., ...>>;
        channel: z.ZodString;
        channelSetIds: z.ZodDefault<z.ZodArray<...>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        enabledCapabilities: z.ZodDefault<z.ZodArray<...>>;
        flowActivations: z.ZodDefault<z.ZodArray<...>>;
        handoff: z.ZodOptional<z.ZodObject<..., ...>>;
        id: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        outbound: z.ZodOptional<z.ZodObject<..., ...>>;
        policyDetails: z.ZodDefault<z.ZodArray<...>>;
        policyIds: z.ZodDefault<z.ZodArray<...>>;
        providerPackageIds: z.ZodDefault<z.ZodArray<...>>;
     }, z.core.$strip>>>;
     channelSets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        channelIds: z.ZodDefault<z.ZodArray<...>>;
        channels: z.ZodDefault<z.ZodArray<...>>;
        conversationContinuity: z.ZodOptional<z.ZodObject<..., ...>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
     }, z.core.$strip>>>;
     credentialStatuses: z.ZodDefault<z.ZodArray<z.ZodObject<{
        expiresAt: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
        providerPackageId: z.ZodOptional<z.ZodString>;
        requirementId: z.ZodString;
        scopes: z.ZodDefault<z.ZodArray<...>>;
        state: z.ZodEnum<{
           configured: ...;
           expired: ...;
           insufficient-scope: ...;
           missing: ...;
           not-required: ...;
           permission-blocked: ...;
           required: ...;
           unavailable: ...;
        }>;
     }, z.core.$strip>>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackages: z.ZodDefault<z.ZodArray<z.ZodObject<{
        capabilities: z.ZodArray<z.ZodObject<..., ...>>;
        category: z.ZodString;
        channelAudiences: z.ZodArray<z.ZodEnum<...>>;
        coverage: z.ZodDefault<z.ZodObject<..., ...>>;
        credentialRequirements: z.ZodDefault<z.ZodArray<...>>;
        directions: z.ZodArray<z.ZodEnum<...>>;
        id: z.ZodString;
        limitations: z.ZodDefault<z.ZodArray<...>>;
        maintainers: z.ZodDefault<z.ZodArray<...>>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        name: z.ZodString;
        packageName: z.ZodString;
        privacyNotes: z.ZodDefault<z.ZodArray<...>>;
        provider: z.ZodString;
        trustLevel: z.ZodEnum<{
           community: ...;
           experimental: ...;
           official: ...;
           verified: ...;
        }>;
     }, z.core.$strip>>>;
     providerReadiness: z.ZodDefault<z.ZodArray<z.ZodObject<{
        blockers: z.ZodDefault<z.ZodDefault<...>>;
        checkedAt: z.ZodOptional<z.ZodString>;
        checkSource: z.ZodOptional<z.ZodString>;
        live: z.ZodOptional<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        providerPackageId: z.ZodString;
        remediationActions: z.ZodDefault<z.ZodArray<...>>;
        sandbox: z.ZodOptional<z.ZodBoolean>;
        status: z.ZodEnum<{
           blocked: ...;
           configured: ...;
           full-api-verified: ...;
           live-verified: ...;
           not-configured: ...;
           ready: ...;
           sandbox-verified: ...;
           scoped-verified: ...;
           unknown: ...;
        }>;
     }, z.core.$strip>>>;
     targetId: z.ZodString;
  }, z.core.$strip>>;
  journeys: z.ZodArray<z.ZodObject<{
     alwaysInclude: z.ZodBoolean;
     condition: z.ZodString;
     delegation: z.ZodOptional<z.ZodObject<{
        completeWhen: z.ZodArray<z.ZodString>;
        goal: z.ZodString;
        instructions: z.ZodOptional<z.ZodString>;
        tools: z.ZodArray<z.ZodObject<{
           description: ...;
           name: ...;
           sideEffect: ...;
        }, z.core.$strip>>;
     }, z.core.$strip>>;
     examples: z.ZodArray<z.ZodString>;
     graph: z.ZodObject<{
        alternateEntries: z.ZodOptional<z.ZodArray<z.ZodObject<{
           description: ...;
           priority: ...;
           stateId: ...;
        }, z.core.$strip>>>;
        id: z.ZodString;
        initialStateId: z.ZodOptional<z.ZodString>;
        kind: z.ZodEnum<{
           delegation: "delegation";
           stateMachine: "stateMachine";
        }>;
        states: z.ZodArray<z.ZodObject<{
           actions: z.ZodArray<...>;
           collected: z.ZodArray<...>;
           id: z.ZodString;
           initialStateId: z.ZodOptional<...>;
           instructions: z.ZodOptional<...>;
           parentId: z.ZodOptional<...>;
           requiresVisit: z.ZodBoolean;
           summary: z.ZodOptional<...>;
           transitions: z.ZodArray<...>;
           type: z.ZodEnum<...>;
        }, z.core.$strip>>;
     }, z.core.$strip>;
     id: z.ZodString;
     kind: z.ZodEnum<{
        delegation: "delegation";
        stateMachine: "stateMachine";
     }>;
     knowledge: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        documentCount: z.ZodOptional<z.ZodNumber>;
        documents: z.ZodOptional<z.ZodArray<z.ZodObject<..., ...>>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        name: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>;
     mermaid: z.ZodString;
     priority: z.ZodNumber;
     stickiness: z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
     }>;
     tags: z.ZodArray<z.ZodString>;
     tools: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        sideEffect: z.ZodBoolean;
     }, z.core.$strip>>;
  }, z.core.$strip>>;
  knowledge: z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     documentCount: z.ZodOptional<z.ZodNumber>;
     documents: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
        contentSnippet: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     name: z.ZodString;
     title: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  targetId: z.ZodString;
  tools: z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     name: z.ZodString;
     sideEffect: z.ZodBoolean;
  }, z.core.$strip>>;
  widgets: z.ZodArray<z.ZodObject<{
     kind: z.ZodString;
  }, z.core.$strip>>;
}, z.core.$strip>;
```

***

### StudioCapabilityAvailabilitySchema

```ts
const StudioCapabilityAvailabilitySchema: z.ZodObject<{
  blockers: z.ZodDefault<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodDefault<z.ZodEnum<{
        missing-configuration: "missing-configuration";
        missing-credentials: "missing-credentials";
        missing-policy: "missing-policy";
        permission-blocked: "permission-blocked";
        provider-unsupported: "provider-unsupported";
        unknown: "unknown";
     }>>;
     message: z.ZodString;
  }, z.core.$strip>>>;
  capability: z.ZodOptional<z.ZodString>;
  enabledForAgents: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabledForChannels: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabledForJourneys: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabledForTools: z.ZodDefault<z.ZodArray<z.ZodString>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  status: z.ZodEnum<{
     blocked: "blocked";
     configured: "configured";
     enabled: "enabled";
     installed: "installed";
     registry-available: "registry-available";
  }>;
}, z.core.$strip>;
```

***

### StudioChannelAudienceSchema

```ts
const StudioChannelAudienceSchema: z.ZodEnum<{
  customer-facing: "customer-facing";
  internal-support: "internal-support";
  mixed: "mixed";
}>;
```

***

### StudioChannelBehaviorPolicySchema

```ts
const StudioChannelBehaviorPolicySchema: z.ZodObject<{
  allowMarkdown: z.ZodOptional<z.ZodBoolean>;
  allowWidgets: z.ZodOptional<z.ZodBoolean>;
  approval: z.ZodOptional<z.ZodUnknown>;
  draftFirst: z.ZodOptional<z.ZodBoolean>;
  handoff: z.ZodOptional<z.ZodUnknown>;
  maxCharacters: z.ZodOptional<z.ZodNumber>;
  maxWords: z.ZodOptional<z.ZodNumber>;
  media: z.ZodOptional<z.ZodUnknown>;
  sensitiveData: z.ZodOptional<z.ZodUnknown>;
  tone: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
```

***

### StudioChannelCapabilitySchema

```ts
const StudioChannelCapabilitySchema: z.ZodObject<{
  audiences: z.ZodDefault<z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>>;
  capability: z.ZodString;
  changesWorkflow: z.ZodDefault<z.ZodBoolean>;
  description: z.ZodOptional<z.ZodString>;
  exposesSensitiveData: z.ZodDefault<z.ZodBoolean>;
  extension: z.ZodDefault<z.ZodBoolean>;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     kind: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  requiresCredential: z.ZodDefault<z.ZodBoolean>;
  sideEffect: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### StudioChannelConfigurationSchema

```ts
const StudioChannelConfigurationSchema: z.ZodObject<{
  audience: z.ZodOptional<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  behavior: z.ZodOptional<z.ZodObject<{
     allowMarkdown: z.ZodOptional<z.ZodBoolean>;
     allowWidgets: z.ZodOptional<z.ZodBoolean>;
     approval: z.ZodOptional<z.ZodUnknown>;
     draftFirst: z.ZodOptional<z.ZodBoolean>;
     handoff: z.ZodOptional<z.ZodUnknown>;
     maxCharacters: z.ZodOptional<z.ZodNumber>;
     maxWords: z.ZodOptional<z.ZodNumber>;
     media: z.ZodOptional<z.ZodUnknown>;
     sensitiveData: z.ZodOptional<z.ZodUnknown>;
     tone: z.ZodOptional<z.ZodString>;
  }, z.core.$loose>>;
  channel: z.ZodString;
  channelSetIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabled: z.ZodDefault<z.ZodBoolean>;
  enabledCapabilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
  flowActivations: z.ZodDefault<z.ZodArray<z.ZodObject<{
     enabled: z.ZodDefault<z.ZodBoolean>;
     journeyId: z.ZodString;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     reason: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  handoff: z.ZodOptional<z.ZodObject<{
     destinations: z.ZodDefault<z.ZodArray<z.ZodString>>;
     enabled: z.ZodDefault<z.ZodBoolean>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     sdkControlled: z.ZodOptional<z.ZodBoolean>;
  }, z.core.$strip>>;
  id: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound: z.ZodOptional<z.ZodObject<{
     enabled: z.ZodDefault<z.ZodBoolean>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     requiresProviderOutboundSupport: z.ZodDefault<z.ZodBoolean>;
  }, z.core.$strip>>;
  policyDetails: z.ZodDefault<z.ZodArray<z.ZodObject<{
     id: z.ZodString;
     owner: z.ZodOptional<z.ZodString>;
     value: z.ZodUnknown;
  }, z.core.$strip>>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
```

***

### StudioChannelFlowActivationSchema

```ts
const StudioChannelFlowActivationSchema: z.ZodObject<{
  enabled: z.ZodDefault<z.ZodBoolean>;
  journeyId: z.ZodString;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### StudioChannelHandoffPolicySchema

```ts
const StudioChannelHandoffPolicySchema: z.ZodObject<{
  destinations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  enabled: z.ZodDefault<z.ZodBoolean>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  sdkControlled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### StudioChannelOutboundPolicySchema

```ts
const StudioChannelOutboundPolicySchema: z.ZodObject<{
  enabled: z.ZodDefault<z.ZodBoolean>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  requiresProviderOutboundSupport: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
```

***

### StudioChannelPolicyDetailSchema

```ts
const StudioChannelPolicyDetailSchema: z.ZodObject<{
  id: z.ZodString;
  owner: z.ZodOptional<z.ZodString>;
  value: z.ZodUnknown;
}, z.core.$strip>;
```

***

### StudioChannelSetConfigurationSchema

```ts
const StudioChannelSetConfigurationSchema: z.ZodObject<{
  channelIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  channels: z.ZodDefault<z.ZodArray<z.ZodString>>;
  conversationContinuity: z.ZodOptional<z.ZodObject<{
     crossChannel: z.ZodDefault<z.ZodBoolean>;
     mode: z.ZodDefault<z.ZodEnum<{
        link-existing: "link-existing";
        new-conversation: "new-conversation";
        sdk-decides: "sdk-decides";
     }>>;
     policy: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  enabled: z.ZodDefault<z.ZodBoolean>;
  id: z.ZodString;
  label: z.ZodOptional<z.ZodString>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
```

***

### StudioConfigurationMutationOperationSchema

```ts
const StudioConfigurationMutationOperationSchema: z.ZodObject<{
  channelId: z.ZodOptional<z.ZodString>;
  channelSetId: z.ZodOptional<z.ZodString>;
  journeyId: z.ZodOptional<z.ZodString>;
  op: z.ZodString;
  policyId: z.ZodOptional<z.ZodString>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  value: z.ZodOptional<z.ZodUnknown>;
}, z.core.$loose>;
```

***

### StudioConfigurationMutationRequestSchema

```ts
const StudioConfigurationMutationRequestSchema: z.ZodObject<{
  actor: z.ZodOptional<z.ZodObject<{
     id: z.ZodOptional<z.ZodString>;
     role: z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        dashboard_editor: "dashboard_editor";
        operator: "operator";
        viewer: "viewer";
     }>>;
  }, z.core.$loose>>;
  operations: z.ZodArray<z.ZodObject<{
     channelId: z.ZodOptional<z.ZodString>;
     channelSetId: z.ZodOptional<z.ZodString>;
     journeyId: z.ZodOptional<z.ZodString>;
     op: z.ZodString;
     policyId: z.ZodOptional<z.ZodString>;
     providerPackageId: z.ZodOptional<z.ZodString>;
     value: z.ZodOptional<z.ZodUnknown>;
  }, z.core.$loose>>;
  reason: z.ZodString;
  requestId: z.ZodOptional<z.ZodString>;
  targetId: z.ZodString;
}, z.core.$loose>;
```

***

### StudioConfigurationMutationResultSchema

```ts
const StudioConfigurationMutationResultSchema: z.ZodObject<{
  accepted: z.ZodBoolean;
  applied: z.ZodDefault<z.ZodBoolean>;
  blockers: z.ZodDefault<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodDefault<z.ZodEnum<{
        missing-configuration: "missing-configuration";
        missing-credentials: "missing-credentials";
        missing-policy: "missing-policy";
        permission-blocked: "permission-blocked";
        provider-unsupported: "provider-unsupported";
        unknown: "unknown";
        validation: "validation";
     }>>;
     message: z.ZodString;
  }, z.core.$strip>>>;
  message: z.ZodOptional<z.ZodString>;
  requestId: z.ZodString;
  status: z.ZodEnum<{
     accepted: "accepted";
     applied: "applied";
     rejected: "rejected";
     unsupported: "unsupported";
     validation-failed: "validation-failed";
  }>;
  targetId: z.ZodString;
}, z.core.$loose>;
```

***

### StudioConfigurationSurfaceSchema

```ts
const StudioConfigurationSurfaceSchema: z.ZodObject<{
  capabilityAvailability: z.ZodDefault<z.ZodArray<z.ZodObject<{
     blockers: z.ZodDefault<z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        kind: z.ZodDefault<...>;
        message: z.ZodString;
     }, z.core.$strip>>>;
     capability: z.ZodOptional<z.ZodString>;
     enabledForAgents: z.ZodDefault<z.ZodArray<z.ZodString>>;
     enabledForChannels: z.ZodDefault<z.ZodArray<z.ZodString>>;
     enabledForJourneys: z.ZodDefault<z.ZodArray<z.ZodString>>;
     enabledForTools: z.ZodDefault<z.ZodArray<z.ZodString>>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerPackageId: z.ZodOptional<z.ZodString>;
     status: z.ZodEnum<{
        blocked: "blocked";
        configured: "configured";
        enabled: "enabled";
        installed: "installed";
        registry-available: "registry-available";
     }>;
  }, z.core.$strip>>>;
  capturedAt: z.ZodString;
  channels: z.ZodDefault<z.ZodArray<z.ZodObject<{
     audience: z.ZodOptional<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>;
     behavior: z.ZodOptional<z.ZodObject<{
        allowMarkdown: z.ZodOptional<z.ZodBoolean>;
        allowWidgets: z.ZodOptional<z.ZodBoolean>;
        approval: z.ZodOptional<z.ZodUnknown>;
        draftFirst: z.ZodOptional<z.ZodBoolean>;
        handoff: z.ZodOptional<z.ZodUnknown>;
        maxCharacters: z.ZodOptional<z.ZodNumber>;
        maxWords: z.ZodOptional<z.ZodNumber>;
        media: z.ZodOptional<z.ZodUnknown>;
        sensitiveData: z.ZodOptional<z.ZodUnknown>;
        tone: z.ZodOptional<z.ZodString>;
     }, z.core.$loose>>;
     channel: z.ZodString;
     channelSetIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     enabled: z.ZodDefault<z.ZodBoolean>;
     enabledCapabilities: z.ZodDefault<z.ZodArray<z.ZodString>>;
     flowActivations: z.ZodDefault<z.ZodArray<z.ZodObject<{
        enabled: z.ZodDefault<...>;
        journeyId: z.ZodString;
        metadata: z.ZodOptional<...>;
        policyIds: z.ZodDefault<...>;
        providerPackageIds: z.ZodDefault<...>;
        reason: z.ZodOptional<...>;
     }, z.core.$strip>>>;
     handoff: z.ZodOptional<z.ZodObject<{
        destinations: z.ZodDefault<z.ZodArray<...>>;
        enabled: z.ZodDefault<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        policyIds: z.ZodDefault<z.ZodArray<...>>;
        providerPackageIds: z.ZodDefault<z.ZodArray<...>>;
        sdkControlled: z.ZodOptional<z.ZodBoolean>;
     }, z.core.$strip>>;
     id: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outbound: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        policyIds: z.ZodDefault<z.ZodArray<...>>;
        providerPackageIds: z.ZodDefault<z.ZodArray<...>>;
        requiresProviderOutboundSupport: z.ZodDefault<z.ZodBoolean>;
     }, z.core.$strip>>;
     policyDetails: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        owner: z.ZodOptional<...>;
        value: z.ZodUnknown;
     }, z.core.$strip>>>;
     policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     providerPackageIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  }, z.core.$strip>>>;
  channelSets: z.ZodDefault<z.ZodArray<z.ZodObject<{
     channelIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
     channels: z.ZodDefault<z.ZodArray<z.ZodString>>;
     conversationContinuity: z.ZodOptional<z.ZodObject<{
        crossChannel: z.ZodDefault<z.ZodBoolean>;
        mode: z.ZodDefault<z.ZodEnum<...>>;
        policy: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>;
     enabled: z.ZodDefault<z.ZodBoolean>;
     id: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  }, z.core.$strip>>>;
  credentialStatuses: z.ZodDefault<z.ZodArray<z.ZodObject<{
     expiresAt: z.ZodOptional<z.ZodString>;
     message: z.ZodOptional<z.ZodString>;
     providerPackageId: z.ZodOptional<z.ZodString>;
     requirementId: z.ZodString;
     scopes: z.ZodDefault<z.ZodArray<z.ZodString>>;
     state: z.ZodEnum<{
        configured: "configured";
        expired: "expired";
        insufficient-scope: "insufficient-scope";
        missing: "missing";
        not-required: "not-required";
        permission-blocked: "permission-blocked";
        required: "required";
        unavailable: "unavailable";
     }>;
  }, z.core.$strip>>>;
  policyIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  providerPackages: z.ZodDefault<z.ZodArray<z.ZodObject<{
     capabilities: z.ZodArray<z.ZodObject<{
        audiences: z.ZodDefault<z.ZodArray<...>>;
        capability: z.ZodString;
        changesWorkflow: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        exposesSensitiveData: z.ZodDefault<z.ZodBoolean>;
        extension: z.ZodDefault<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        providerObjects: z.ZodDefault<z.ZodArray<...>>;
        requiresCredential: z.ZodDefault<z.ZodBoolean>;
        sideEffect: z.ZodDefault<z.ZodBoolean>;
     }, z.core.$strip>>;
     category: z.ZodString;
     channelAudiences: z.ZodArray<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>;
     coverage: z.ZodDefault<z.ZodObject<{
        evidence: z.ZodDefault<z.ZodArray<...>>;
        notes: z.ZodDefault<z.ZodArray<...>>;
        scope: z.ZodEnum<{
           connector-required: ...;
           full-provider-api: ...;
           local-protocol: ...;
           provider-api-subset: ...;
           support-workflow-subset: ...;
        }>;
     }, z.core.$strip>>;
     credentialRequirements: z.ZodDefault<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<...>;
        id: z.ZodString;
        label: z.ZodOptional<...>;
        metadata: z.ZodOptional<...>;
        required: z.ZodDefault<...>;
        scopes: z.ZodDefault<...>;
     }, z.core.$strip>>>;
     directions: z.ZodArray<z.ZodEnum<{
        bidirectional: "bidirectional";
        inbound-only: "inbound-only";
        outbound-only: "outbound-only";
        receive-only: "receive-only";
        send-only: "send-only";
     }>>;
     id: z.ZodString;
     limitations: z.ZodDefault<z.ZodArray<z.ZodString>>;
     maintainers: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodDefault<...>;
        url: z.ZodOptional<...>;
     }, z.core.$strip>>>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     name: z.ZodString;
     packageName: z.ZodString;
     privacyNotes: z.ZodDefault<z.ZodArray<z.ZodString>>;
     provider: z.ZodString;
     trustLevel: z.ZodEnum<{
        community: "community";
        experimental: "experimental";
        official: "official";
        verified: "verified";
     }>;
  }, z.core.$strip>>>;
  providerReadiness: z.ZodDefault<z.ZodArray<z.ZodObject<{
     blockers: z.ZodDefault<z.ZodDefault<z.ZodArray<z.ZodObject<{
        code: ...;
        kind: ...;
        message: ...;
     }, z.core.$strip>>>>;
     checkedAt: z.ZodOptional<z.ZodString>;
     checkSource: z.ZodOptional<z.ZodString>;
     live: z.ZodOptional<z.ZodBoolean>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerPackageId: z.ZodString;
     remediationActions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodDefault<...>;
        label: z.ZodString;
        metadata: z.ZodOptional<...>;
     }, z.core.$strip>>>;
     sandbox: z.ZodOptional<z.ZodBoolean>;
     status: z.ZodEnum<{
        blocked: "blocked";
        configured: "configured";
        full-api-verified: "full-api-verified";
        live-verified: "live-verified";
        not-configured: "not-configured";
        ready: "ready";
        sandbox-verified: "sandbox-verified";
        scoped-verified: "scoped-verified";
        unknown: "unknown";
     }>;
  }, z.core.$strip>>>;
  targetId: z.ZodString;
}, z.core.$strip>;
```

***

### StudioConversationSummarySchema

```ts
const StudioConversationSummarySchema: z.ZodObject<{
  activeJourneyId: z.ZodOptional<z.ZodString>;
  activeStateIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  agentId: z.ZodString;
  createdAt: z.ZodString;
  eventCount: z.ZodOptional<z.ZodNumber>;
  id: z.ZodString;
  lifecycle: z.ZodEnum<{
     active: "active";
     closed: "closed";
     handoff: "handoff";
  }>;
  traceIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
  updatedAt: z.ZodString;
}, z.core.$strip>;
```

***

### StudioDashboardArtifactSchema

```ts
const StudioDashboardArtifactSchema: z.ZodObject<{
  artifactKey: z.ZodString;
  createdAt: z.ZodString;
  datasets: z.ZodDefault<z.ZodArray<z.ZodObject<{
     capturedAt: z.ZodString;
     data: z.ZodUnknown;
     description: z.ZodOptional<z.ZodString>;
     id: z.ZodString;
     mode: z.ZodDefault<z.ZodEnum<{
        live: "live";
        static: "static";
     }>>;
     refreshMs: z.ZodOptional<z.ZodNumber>;
     source: z.ZodObject<{
        capability: z.ZodEnum<{
           cognidesk.agent: "cognidesk.agent";
           cognidesk.configuration: "cognidesk.configuration";
           cognidesk.conversations: "cognidesk.conversations";
           cognidesk.events: "cognidesk.events";
           cognidesk.snapshots: "cognidesk.snapshots";
           telemetry.metrics: "telemetry.metrics";
           telemetry.traces: "telemetry.traces";
        }>;
        params: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        targetId: z.ZodString;
     }, z.core.$strip>;
     title: z.ZodString;
  }, z.core.$strip>>>;
  description: z.ZodOptional<z.ZodString>;
  id: z.ZodString;
  ownerUserId: z.ZodString;
  publishedAt: z.ZodOptional<z.ZodString>;
  renderer: z.ZodObject<{
     entry: z.ZodDefault<z.ZodString>;
     kind: z.ZodLiteral<"react-component">;
     spec: z.ZodOptional<z.ZodObject<{
        layout: z.ZodDefault<z.ZodEnum<{
           comparison: "comparison";
           operations: "operations";
           overview: "overview";
           timeseries: "timeseries";
        }>>;
        summary: z.ZodOptional<z.ZodString>;
        widgets: z.ZodDefault<z.ZodArray<z.ZodObject<{
           columns: ...;
           datasetId: ...;
           description: ...;
           id: ...;
           kind: ...;
           labelPath: ...;
           limit: ...;
           series: ...;
           title: ...;
           tone: ...;
           unit: ...;
           valuePath: ...;
           xPath: ...;
           yPath: ...;
        }, z.core.$loose>>>;
     }, z.core.$loose>>;
  }, z.core.$strip>;
  slug: z.ZodString;
  status: z.ZodEnum<{
     archived: "archived";
     draft: "draft";
     published: "published";
  }>;
  targetId: z.ZodString;
  title: z.ZodString;
  updatedAt: z.ZodString;
  version: z.ZodNumber;
}, z.core.$strip>;
```

***

### StudioDashboardDataCapabilitySchema

```ts
const StudioDashboardDataCapabilitySchema: z.ZodEnum<{
  cognidesk.agent: "cognidesk.agent";
  cognidesk.configuration: "cognidesk.configuration";
  cognidesk.conversations: "cognidesk.conversations";
  cognidesk.events: "cognidesk.events";
  cognidesk.snapshots: "cognidesk.snapshots";
  telemetry.metrics: "telemetry.metrics";
  telemetry.traces: "telemetry.traces";
}>;
```

***

### StudioDashboardDataQuerySchema

```ts
const StudioDashboardDataQuerySchema: z.ZodObject<{
  capability: z.ZodEnum<{
     cognidesk.agent: "cognidesk.agent";
     cognidesk.configuration: "cognidesk.configuration";
     cognidesk.conversations: "cognidesk.conversations";
     cognidesk.events: "cognidesk.events";
     cognidesk.snapshots: "cognidesk.snapshots";
     telemetry.metrics: "telemetry.metrics";
     telemetry.traces: "telemetry.traces";
  }>;
  params: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  targetId: z.ZodString;
}, z.core.$strip>;
```

***

### StudioDashboardDatasetSchema

```ts
const StudioDashboardDatasetSchema: z.ZodObject<{
  capturedAt: z.ZodString;
  data: z.ZodUnknown;
  description: z.ZodOptional<z.ZodString>;
  id: z.ZodString;
  mode: z.ZodDefault<z.ZodEnum<{
     live: "live";
     static: "static";
  }>>;
  refreshMs: z.ZodOptional<z.ZodNumber>;
  source: z.ZodObject<{
     capability: z.ZodEnum<{
        cognidesk.agent: "cognidesk.agent";
        cognidesk.configuration: "cognidesk.configuration";
        cognidesk.conversations: "cognidesk.conversations";
        cognidesk.events: "cognidesk.events";
        cognidesk.snapshots: "cognidesk.snapshots";
        telemetry.metrics: "telemetry.metrics";
        telemetry.traces: "telemetry.traces";
     }>;
     params: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     targetId: z.ZodString;
  }, z.core.$strip>;
  title: z.ZodString;
}, z.core.$strip>;
```

***

### StudioDashboardSpecSchema

```ts
const StudioDashboardSpecSchema: z.ZodObject<{
  layout: z.ZodDefault<z.ZodEnum<{
     comparison: "comparison";
     operations: "operations";
     overview: "overview";
     timeseries: "timeseries";
  }>>;
  summary: z.ZodOptional<z.ZodString>;
  widgets: z.ZodDefault<z.ZodArray<z.ZodObject<{
     columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        path: z.ZodString;
     }, z.core.$strip>>>;
     datasetId: z.ZodOptional<z.ZodString>;
     description: z.ZodOptional<z.ZodString>;
     id: z.ZodString;
     kind: z.ZodEnum<{
        bar: "bar";
        donut: "donut";
        insight: "insight";
        line: "line";
        metric: "metric";
        table: "table";
     }>;
     labelPath: z.ZodOptional<z.ZodString>;
     limit: z.ZodOptional<z.ZodNumber>;
     series: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        path: z.ZodString;
     }, z.core.$strip>>>;
     title: z.ZodString;
     tone: z.ZodOptional<z.ZodEnum<{
        amber: "amber";
        blue: "blue";
        green: "green";
        red: "red";
        slate: "slate";
        teal: "teal";
        violet: "violet";
     }>>;
     unit: z.ZodOptional<z.ZodString>;
     valuePath: z.ZodOptional<z.ZodString>;
     xPath: z.ZodOptional<z.ZodString>;
     yPath: z.ZodOptional<z.ZodString>;
  }, z.core.$loose>>>;
}, z.core.$loose>;
```

***

### StudioDashboardWidgetSchema

```ts
const StudioDashboardWidgetSchema: z.ZodObject<{
  columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
     label: z.ZodString;
     path: z.ZodString;
  }, z.core.$strip>>>;
  datasetId: z.ZodOptional<z.ZodString>;
  description: z.ZodOptional<z.ZodString>;
  id: z.ZodString;
  kind: z.ZodEnum<{
     bar: "bar";
     donut: "donut";
     insight: "insight";
     line: "line";
     metric: "metric";
     table: "table";
  }>;
  labelPath: z.ZodOptional<z.ZodString>;
  limit: z.ZodOptional<z.ZodNumber>;
  series: z.ZodOptional<z.ZodArray<z.ZodObject<{
     label: z.ZodString;
     path: z.ZodString;
  }, z.core.$strip>>>;
  title: z.ZodString;
  tone: z.ZodOptional<z.ZodEnum<{
     amber: "amber";
     blue: "blue";
     green: "green";
     red: "red";
     slate: "slate";
     teal: "teal";
     violet: "violet";
  }>>;
  unit: z.ZodOptional<z.ZodString>;
  valuePath: z.ZodOptional<z.ZodString>;
  xPath: z.ZodOptional<z.ZodString>;
  yPath: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
```

***

### StudioJourneyGraphSchema

```ts
const StudioJourneyGraphSchema: z.ZodObject<{
  alternateEntries: z.ZodOptional<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     priority: z.ZodOptional<z.ZodNumber>;
     stateId: z.ZodString;
  }, z.core.$strip>>>;
  id: z.ZodString;
  initialStateId: z.ZodOptional<z.ZodString>;
  kind: z.ZodEnum<{
     delegation: "delegation";
     stateMachine: "stateMachine";
  }>;
  states: z.ZodArray<z.ZodObject<{
     actions: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodEnum<{
           entry: "entry";
           exit: "exit";
           transition: "transition";
        }>;
     }, z.core.$strip>>;
     collected: z.ZodArray<z.ZodObject<{
        extract: z.ZodBoolean;
        path: z.ZodString;
        required: z.ZodBoolean;
     }, z.core.$strip>>;
     id: z.ZodString;
     initialStateId: z.ZodOptional<z.ZodString>;
     instructions: z.ZodOptional<z.ZodString>;
     parentId: z.ZodOptional<z.ZodString>;
     requiresVisit: z.ZodBoolean;
     summary: z.ZodOptional<z.ZodString>;
     transitions: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        eventName: z.ZodOptional<z.ZodString>;
        kind: z.ZodEnum<{
           conversational: "conversational";
           event: "event";
        }>;
        priority: z.ZodOptional<z.ZodNumber>;
        targetId: z.ZodString;
     }, z.core.$strip>>;
     type: z.ZodEnum<{
        final: "final";
        parallel: "parallel";
        state: "state";
     }>;
  }, z.core.$strip>>;
}, z.core.$strip>;
```

***

### StudioJourneyGraphStateSchema

```ts
const StudioJourneyGraphStateSchema: z.ZodObject<{
  actions: z.ZodArray<z.ZodObject<{
     name: z.ZodString;
     type: z.ZodEnum<{
        entry: "entry";
        exit: "exit";
        transition: "transition";
     }>;
  }, z.core.$strip>>;
  collected: z.ZodArray<z.ZodObject<{
     extract: z.ZodBoolean;
     path: z.ZodString;
     required: z.ZodBoolean;
  }, z.core.$strip>>;
  id: z.ZodString;
  initialStateId: z.ZodOptional<z.ZodString>;
  instructions: z.ZodOptional<z.ZodString>;
  parentId: z.ZodOptional<z.ZodString>;
  requiresVisit: z.ZodBoolean;
  summary: z.ZodOptional<z.ZodString>;
  transitions: z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     eventName: z.ZodOptional<z.ZodString>;
     kind: z.ZodEnum<{
        conversational: "conversational";
        event: "event";
     }>;
     priority: z.ZodOptional<z.ZodNumber>;
     targetId: z.ZodString;
  }, z.core.$strip>>;
  type: z.ZodEnum<{
     final: "final";
     parallel: "parallel";
     state: "state";
  }>;
}, z.core.$strip>;
```

***

### StudioJourneySummarySchema

```ts
const StudioJourneySummarySchema: z.ZodObject<{
  alwaysInclude: z.ZodBoolean;
  condition: z.ZodString;
  delegation: z.ZodOptional<z.ZodObject<{
     completeWhen: z.ZodArray<z.ZodString>;
     goal: z.ZodString;
     instructions: z.ZodOptional<z.ZodString>;
     tools: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        sideEffect: z.ZodBoolean;
     }, z.core.$strip>>;
  }, z.core.$strip>>;
  examples: z.ZodArray<z.ZodString>;
  graph: z.ZodObject<{
     alternateEntries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        priority: z.ZodOptional<z.ZodNumber>;
        stateId: z.ZodString;
     }, z.core.$strip>>>;
     id: z.ZodString;
     initialStateId: z.ZodOptional<z.ZodString>;
     kind: z.ZodEnum<{
        delegation: "delegation";
        stateMachine: "stateMachine";
     }>;
     states: z.ZodArray<z.ZodObject<{
        actions: z.ZodArray<z.ZodObject<{
           name: z.ZodString;
           type: z.ZodEnum<...>;
        }, z.core.$strip>>;
        collected: z.ZodArray<z.ZodObject<{
           extract: z.ZodBoolean;
           path: z.ZodString;
           required: z.ZodBoolean;
        }, z.core.$strip>>;
        id: z.ZodString;
        initialStateId: z.ZodOptional<z.ZodString>;
        instructions: z.ZodOptional<z.ZodString>;
        parentId: z.ZodOptional<z.ZodString>;
        requiresVisit: z.ZodBoolean;
        summary: z.ZodOptional<z.ZodString>;
        transitions: z.ZodArray<z.ZodObject<{
           description: z.ZodOptional<...>;
           eventName: z.ZodOptional<...>;
           kind: z.ZodEnum<...>;
           priority: z.ZodOptional<...>;
           targetId: z.ZodString;
        }, z.core.$strip>>;
        type: z.ZodEnum<{
           final: "final";
           parallel: "parallel";
           state: "state";
        }>;
     }, z.core.$strip>>;
  }, z.core.$strip>;
  id: z.ZodString;
  kind: z.ZodEnum<{
     delegation: "delegation";
     stateMachine: "stateMachine";
  }>;
  knowledge: z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     documentCount: z.ZodOptional<z.ZodNumber>;
     documents: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
        contentSnippet: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        name: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     name: z.ZodString;
     title: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  mermaid: z.ZodString;
  priority: z.ZodNumber;
  stickiness: z.ZodEnum<{
     high: "high";
     low: "low";
     medium: "medium";
  }>;
  tags: z.ZodArray<z.ZodString>;
  tools: z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     name: z.ZodString;
     sideEffect: z.ZodBoolean;
  }, z.core.$strip>>;
}, z.core.$strip>;
```

***

### StudioKnowledgeSummarySchema

```ts
const StudioKnowledgeSummarySchema: z.ZodObject<{
  description: z.ZodOptional<z.ZodString>;
  documentCount: z.ZodOptional<z.ZodNumber>;
  documents: z.ZodOptional<z.ZodArray<z.ZodObject<{
     content: z.ZodOptional<z.ZodString>;
     contentSnippet: z.ZodOptional<z.ZodString>;
     id: z.ZodString;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     name: z.ZodOptional<z.ZodString>;
     title: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: z.ZodString;
  title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
```

***

### StudioOperatorClientEventSchema

```ts
const StudioOperatorClientEventSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
  message: z.ZodOptional<z.ZodString>;
  modelId: z.ZodOptional<z.ZodString>;
  reasoningEffort: z.ZodOptional<z.ZodEnum<{
     high: "high";
     low: "low";
     medium: "medium";
     minimal: "minimal";
     none: "none";
     xhigh: "xhigh";
  }>>;
  sessionId: z.ZodOptional<z.ZodString>;
  targetId: z.ZodString;
  type: z.ZodLiteral<"session.start">;
}, z.core.$strip>, z.ZodObject<{
  message: z.ZodString;
  modelId: z.ZodOptional<z.ZodString>;
  reasoningEffort: z.ZodOptional<z.ZodEnum<{
     high: "high";
     low: "low";
     medium: "medium";
     minimal: "minimal";
     none: "none";
     xhigh: "xhigh";
  }>>;
  sessionId: z.ZodString;
  type: z.ZodLiteral<"turn.start">;
}, z.core.$strip>, z.ZodObject<{
  sessionId: z.ZodString;
  type: z.ZodLiteral<"turn.interrupt">;
}, z.core.$strip>, z.ZodObject<{
  approvalId: z.ZodString;
  approved: z.ZodBoolean;
  payload: z.ZodOptional<z.ZodUnknown>;
  sessionId: z.ZodString;
  type: z.ZodLiteral<"approval.resolve">;
}, z.core.$strip>], "type">;
```

***

### StudioOperatorReasoningEffortSchema

```ts
const StudioOperatorReasoningEffortSchema: z.ZodEnum<{
  high: "high";
  low: "low";
  medium: "medium";
  minimal: "minimal";
  none: "none";
  xhigh: "xhigh";
}>;
```

***

### StudioOperatorServerEventSchema

```ts
const StudioOperatorServerEventSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
  modelId: z.ZodOptional<z.ZodString>;
  sessionId: z.ZodString;
  targetId: z.ZodString;
  type: z.ZodLiteral<"session.ready">;
}, z.core.$strip>, z.ZodObject<{
  category: z.ZodOptional<z.ZodString>;
  detail: z.ZodOptional<z.ZodString>;
  input: z.ZodOptional<z.ZodUnknown>;
  message: z.ZodString;
  output: z.ZodOptional<z.ZodUnknown>;
  sessionId: z.ZodString;
  surface: z.ZodOptional<z.ZodEnum<{
     approvals: "approvals";
     artifacts: "artifacts";
     conversation: "conversation";
     evidence: "evidence";
     sandbox_diff: "sandbox_diff";
     validation_runs: "validation_runs";
  }>>;
  type: z.ZodLiteral<"activity">;
}, z.core.$strip>, z.ZodObject<{
  delta: z.ZodString;
  sessionId: z.ZodString;
  type: z.ZodLiteral<"assistant.delta">;
}, z.core.$strip>, z.ZodObject<{
  artifact: z.ZodRecord<z.ZodString, z.ZodUnknown>;
  sessionId: z.ZodString;
  type: z.ZodLiteral<"artifact.upserted">;
}, z.core.$strip>, z.ZodObject<{
  sessionId: z.ZodString;
  summary: z.ZodString;
  type: z.ZodLiteral<"reasoning.summary">;
}, z.core.$strip>, z.ZodObject<{
  input: z.ZodOptional<z.ZodUnknown>;
  name: z.ZodString;
  sessionId: z.ZodString;
  type: z.ZodLiteral<"tool.started">;
}, z.core.$strip>, z.ZodObject<{
  name: z.ZodString;
  output: z.ZodOptional<z.ZodUnknown>;
  sessionId: z.ZodString;
  type: z.ZodLiteral<"tool.completed">;
}, z.core.$strip>, z.ZodObject<{
  files: z.ZodArray<z.ZodObject<{
     path: z.ZodString;
     status: z.ZodEnum<{
        added: "added";
        deleted: "deleted";
        modified: "modified";
        renamed: "renamed";
     }>;
  }, z.core.$strip>>;
  sessionId: z.ZodString;
  summary: z.ZodString;
  type: z.ZodLiteral<"sandbox.diff.updated">;
}, z.core.$strip>, z.ZodObject<{
  commandId: z.ZodString;
  exitCode: z.ZodNumber;
  output: z.ZodString;
  sessionId: z.ZodString;
  type: z.ZodLiteral<"validation.completed">;
}, z.core.$strip>, z.ZodObject<{
  action: z.ZodEnum<{
     create_pr: "create_pr";
     grant_credentials: "grant_credentials";
     publish_dashboard: "publish_dashboard";
     update_configuration: "update_configuration";
  }>;
  approvalId: z.ZodString;
  payload: z.ZodUnknown;
  sessionId: z.ZodString;
  title: z.ZodString;
  type: z.ZodLiteral<"approval.required">;
}, z.core.$strip>, z.ZodObject<{
  sessionId: z.ZodString;
  type: z.ZodLiteral<"turn.completed">;
}, z.core.$strip>, z.ZodObject<{
  message: z.ZodString;
  sessionId: z.ZodOptional<z.ZodString>;
  type: z.ZodLiteral<"error">;
}, z.core.$strip>], "type">;
```

***

### StudioOperatorSessionIdSchema

```ts
const StudioOperatorSessionIdSchema: z.ZodString;
```

***

### StudioOperatorSurfaceSchema

```ts
const StudioOperatorSurfaceSchema: z.ZodEnum<{
  approvals: "approvals";
  artifacts: "artifacts";
  conversation: "conversation";
  evidence: "evidence";
  sandbox_diff: "sandbox_diff";
  validation_runs: "validation_runs";
}>;
```

***

### StudioPermissionSchema

```ts
const StudioPermissionSchema: z.ZodEnum<{
  admin:manage: "admin:manage";
  dashboards:edit: "dashboards:edit";
  dashboards:publish: "dashboards:publish";
  operator:publish_code: "operator:publish_code";
  operator:use: "operator:use";
  studio:view: "studio:view";
}>;
```

***

### StudioProviderCoverageScopeSchema

```ts
const StudioProviderCoverageScopeSchema: z.ZodEnum<{
  connector-required: "connector-required";
  full-provider-api: "full-provider-api";
  local-protocol: "local-protocol";
  provider-api-subset: "provider-api-subset";
  support-workflow-subset: "support-workflow-subset";
}>;
```

***

### StudioProviderCredentialStatusSchema

```ts
const StudioProviderCredentialStatusSchema: z.ZodObject<{
  expiresAt: z.ZodOptional<z.ZodString>;
  message: z.ZodOptional<z.ZodString>;
  providerPackageId: z.ZodOptional<z.ZodString>;
  requirementId: z.ZodString;
  scopes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  state: z.ZodEnum<{
     configured: "configured";
     expired: "expired";
     insufficient-scope: "insufficient-scope";
     missing: "missing";
     not-required: "not-required";
     permission-blocked: "permission-blocked";
     required: "required";
     unavailable: "unavailable";
  }>;
}, z.core.$strip>;
```

***

### StudioProviderDirectionSchema

```ts
const StudioProviderDirectionSchema: z.ZodEnum<{
  bidirectional: "bidirectional";
  inbound-only: "inbound-only";
  outbound-only: "outbound-only";
  receive-only: "receive-only";
  send-only: "send-only";
}>;
```

***

### StudioProviderPackageSummarySchema

```ts
const StudioProviderPackageSummarySchema: z.ZodObject<{
  capabilities: z.ZodArray<z.ZodObject<{
     audiences: z.ZodDefault<z.ZodArray<z.ZodEnum<{
        customer-facing: "customer-facing";
        internal-support: "internal-support";
        mixed: "mixed";
     }>>>;
     capability: z.ZodString;
     changesWorkflow: z.ZodDefault<z.ZodBoolean>;
     description: z.ZodOptional<z.ZodString>;
     exposesSensitiveData: z.ZodDefault<z.ZodBoolean>;
     extension: z.ZodDefault<z.ZodBoolean>;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        kind: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<..., ...>>;
        schemaName: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>>;
     requiresCredential: z.ZodDefault<z.ZodBoolean>;
     sideEffect: z.ZodDefault<z.ZodBoolean>;
  }, z.core.$strip>>;
  category: z.ZodString;
  channelAudiences: z.ZodArray<z.ZodEnum<{
     customer-facing: "customer-facing";
     internal-support: "internal-support";
     mixed: "mixed";
  }>>;
  coverage: z.ZodDefault<z.ZodObject<{
     evidence: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
     }, z.core.$strip>>>;
     notes: z.ZodDefault<z.ZodArray<z.ZodString>>;
     scope: z.ZodEnum<{
        connector-required: "connector-required";
        full-provider-api: "full-provider-api";
        local-protocol: "local-protocol";
        provider-api-subset: "provider-api-subset";
        support-workflow-subset: "support-workflow-subset";
     }>;
  }, z.core.$strip>>;
  credentialRequirements: z.ZodDefault<z.ZodArray<z.ZodObject<{
     description: z.ZodOptional<z.ZodString>;
     id: z.ZodString;
     label: z.ZodOptional<z.ZodString>;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: z.ZodDefault<z.ZodBoolean>;
     scopes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  }, z.core.$strip>>>;
  directions: z.ZodArray<z.ZodEnum<{
     bidirectional: "bidirectional";
     inbound-only: "inbound-only";
     outbound-only: "outbound-only";
     receive-only: "receive-only";
     send-only: "send-only";
  }>>;
  id: z.ZodString;
  limitations: z.ZodDefault<z.ZodArray<z.ZodString>>;
  maintainers: z.ZodDefault<z.ZodArray<z.ZodObject<{
     name: z.ZodString;
     type: z.ZodDefault<z.ZodEnum<{
        community: "community";
        official: "official";
        partner: "partner";
        unknown: "unknown";
     }>>;
     url: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: z.ZodString;
  packageName: z.ZodString;
  privacyNotes: z.ZodDefault<z.ZodArray<z.ZodString>>;
  provider: z.ZodString;
  trustLevel: z.ZodEnum<{
     community: "community";
     experimental: "experimental";
     official: "official";
     verified: "verified";
  }>;
}, z.core.$strip>;
```

***

### StudioProviderReadinessSchema

```ts
const StudioProviderReadinessSchema: z.ZodObject<{
  blockers: z.ZodDefault<z.ZodDefault<z.ZodArray<z.ZodObject<{
     code: z.ZodString;
     kind: z.ZodDefault<z.ZodEnum<{
        missing-configuration: "missing-configuration";
        missing-credentials: "missing-credentials";
        missing-policy: "missing-policy";
        permission-blocked: "permission-blocked";
        provider-unsupported: "provider-unsupported";
        unknown: "unknown";
     }>>;
     message: z.ZodString;
  }, z.core.$strip>>>>;
  checkedAt: z.ZodOptional<z.ZodString>;
  checkSource: z.ZodOptional<z.ZodString>;
  live: z.ZodOptional<z.ZodBoolean>;
  metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId: z.ZodString;
  remediationActions: z.ZodDefault<z.ZodArray<z.ZodObject<{
     id: z.ZodString;
     kind: z.ZodDefault<z.ZodEnum<{
        authorize: "authorize";
        configure: "configure";
        contact-provider: "contact-provider";
        custom: "custom";
        read-docs: "read-docs";
        verify: "verify";
     }>>;
     label: z.ZodString;
     metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  }, z.core.$strip>>>;
  sandbox: z.ZodOptional<z.ZodBoolean>;
  status: z.ZodEnum<{
     blocked: "blocked";
     configured: "configured";
     full-api-verified: "full-api-verified";
     live-verified: "live-verified";
     not-configured: "not-configured";
     ready: "ready";
     sandbox-verified: "sandbox-verified";
     scoped-verified: "scoped-verified";
     unknown: "unknown";
  }>;
}, z.core.$strip>;
```

***

### StudioProviderTrustLevelSchema

```ts
const StudioProviderTrustLevelSchema: z.ZodEnum<{
  community: "community";
  experimental: "experimental";
  official: "official";
  verified: "verified";
}>;
```

***

### StudioRoleSchema

```ts
const StudioRoleSchema: z.ZodEnum<{
  admin: "admin";
  dashboard_editor: "dashboard_editor";
  operator: "operator";
  viewer: "viewer";
}>;
```

***

### StudioTargetManifestSchema

```ts
const StudioTargetManifestSchema: z.ZodObject<{
  code: z.ZodDefault<z.ZodObject<{
     allowedPaths: z.ZodDefault<z.ZodArray<z.ZodString>>;
     validationCommands: z.ZodDefault<z.ZodArray<z.ZodObject<{
        command: z.ZodString;
        id: z.ZodString;
        label: z.ZodString;
        workingDirectory: z.ZodDefault<z.ZodString>;
     }, z.core.$strip>>>;
  }, z.core.$strip>>;
  dashboards: z.ZodObject<{
     artifactBucket: z.ZodString;
     artifactPrefix: z.ZodDefault<z.ZodString>;
  }, z.core.$strip>;
  operator: z.ZodDefault<z.ZodObject<{
     allowedCredentialGrants: z.ZodDefault<z.ZodArray<z.ZodEnum<{
        artifact_store: "artifact_store";
        backend_service: "backend_service";
        github: "github";
        package_registry: "package_registry";
        studio_adapter: "studio_adapter";
        telemetry: "telemetry";
     }>>>;
     instructionsPath: z.ZodDefault<z.ZodString>;
     models: z.ZodDefault<z.ZodArray<z.ZodObject<{
        default: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        label: z.ZodString;
        model: z.ZodString;
        provider: z.ZodString;
     }, z.core.$strip>>>;
     skillPacks: z.ZodDefault<z.ZodArray<z.ZodString>>;
  }, z.core.$strip>>;
  runtime: z.ZodObject<{
     apiBasePath: z.ZodDefault<z.ZodString>;
     baseUrl: z.ZodString;
     serviceAuthHeader: z.ZodDefault<z.ZodString>;
     studioAdapterBasePath: z.ZodDefault<z.ZodString>;
  }, z.core.$strip>;
  source: z.ZodObject<{
     defaultBranch: z.ZodDefault<z.ZodString>;
     owner: z.ZodString;
     provider: z.ZodLiteral<"github">;
     repo: z.ZodString;
     root: z.ZodDefault<z.ZodString>;
  }, z.core.$strip>;
  target: z.ZodObject<{
     environment: z.ZodDefault<z.ZodString>;
     id: z.ZodString;
     name: z.ZodString;
  }, z.core.$strip>;
  telemetry: z.ZodDefault<z.ZodObject<{
     sources: z.ZodDefault<z.ZodArray<z.ZodObject<{
        baseUrl: z.ZodString;
        headers: z.ZodOptional<z.ZodRecord<..., ...>>;
        id: z.ZodString;
        kind: z.ZodEnum<{
           otel-http: ...;
           prometheus: ...;
           tempo: ...;
        }>;
        label: z.ZodString;
     }, z.core.$strip>>>;
  }, z.core.$strip>>;
  version: z.ZodLiteral<1>;
}, z.core.$strip>;
```

***

### StudioTargetOverlaySchema

```ts
const StudioTargetOverlaySchema: z.ZodObject<{
  code: z.ZodOptional<z.ZodObject<{
     allowedPaths: z.ZodOptional<z.ZodArray<z.ZodString>>;
     validationCommands: z.ZodOptional<z.ZodArray<z.ZodObject<{
        command: z.ZodString;
        id: z.ZodString;
        label: z.ZodString;
        workingDirectory: z.ZodDefault<z.ZodString>;
     }, z.core.$strip>>>;
  }, z.core.$strip>>;
  dashboards: z.ZodOptional<z.ZodObject<{
     artifactBucket: z.ZodOptional<z.ZodString>;
     artifactPrefix: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  operator: z.ZodOptional<z.ZodObject<{
     allowedCredentialGrants: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        artifact_store: "artifact_store";
        backend_service: "backend_service";
        github: "github";
        package_registry: "package_registry";
        studio_adapter: "studio_adapter";
        telemetry: "telemetry";
     }>>>;
     instructionsPath: z.ZodOptional<z.ZodString>;
     models: z.ZodOptional<z.ZodArray<z.ZodObject<{
        default: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        label: z.ZodString;
        model: z.ZodString;
        provider: z.ZodString;
     }, z.core.$strip>>>;
     skillPacks: z.ZodOptional<z.ZodArray<z.ZodString>>;
  }, z.core.$strip>>;
  runtime: z.ZodOptional<z.ZodObject<{
     apiBasePath: z.ZodOptional<z.ZodString>;
     baseUrl: z.ZodOptional<z.ZodString>;
     serviceAuthHeader: z.ZodOptional<z.ZodString>;
     studioAdapterBasePath: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  source: z.ZodOptional<z.ZodObject<{
     defaultBranch: z.ZodOptional<z.ZodString>;
     owner: z.ZodOptional<z.ZodString>;
     provider: z.ZodOptional<z.ZodLiteral<"github">>;
     repo: z.ZodOptional<z.ZodString>;
     root: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  target: z.ZodOptional<z.ZodObject<{
     environment: z.ZodOptional<z.ZodString>;
     id: z.ZodOptional<z.ZodString>;
     name: z.ZodOptional<z.ZodString>;
  }, z.core.$strip>>;
  telemetry: z.ZodOptional<z.ZodObject<{
     sources: z.ZodOptional<z.ZodArray<z.ZodObject<{
        baseUrl: z.ZodString;
        headers: z.ZodOptional<z.ZodRecord<..., ...>>;
        id: z.ZodString;
        kind: z.ZodEnum<{
           otel-http: ...;
           prometheus: ...;
           tempo: ...;
        }>;
        label: z.ZodString;
     }, z.core.$strip>>>;
  }, z.core.$strip>>;
  version: z.ZodOptional<z.ZodLiteral<1>>;
}, z.core.$strip>;
```

***

### StudioTelemetryMetricPointSchema

```ts
const StudioTelemetryMetricPointSchema: z.ZodObject<{
  labels: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
  timestamp: z.ZodString;
  value: z.ZodNumber;
}, z.core.$strip>;
```

***

### StudioToolSummarySchema

```ts
const StudioToolSummarySchema: z.ZodObject<{
  description: z.ZodOptional<z.ZodString>;
  name: z.ZodString;
  sideEffect: z.ZodBoolean;
}, z.core.$strip>;
```

***

### StudioTraceSummarySchema

```ts
const StudioTraceSummarySchema: z.ZodObject<{
  durationMs: z.ZodOptional<z.ZodNumber>;
  rootSpanName: z.ZodOptional<z.ZodString>;
  serviceName: z.ZodOptional<z.ZodString>;
  spanCount: z.ZodOptional<z.ZodNumber>;
  startedAt: z.ZodOptional<z.ZodString>;
  status: z.ZodDefault<z.ZodEnum<{
     error: "error";
     ok: "ok";
     unknown: "unknown";
  }>>;
  traceId: z.ZodString;
}, z.core.$strip>;
```

***

### StudioWidgetSummarySchema

```ts
const StudioWidgetSummarySchema: z.ZodObject<{
  kind: z.ZodString;
}, z.core.$strip>;
```

## Functions

### jsonResponse()

```ts
function jsonResponse<T>(value, init?): Response;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |
| `init?` | `ResponseInit` |

#### Returns

`Response`

***

### mergeStudioTargetManifest()

```ts
function mergeStudioTargetManifest(base, overlay?): {
  code: {
     allowedPaths: string[];
     validationCommands: {
        command: string;
        id: string;
        label: string;
        workingDirectory: string;
     }[];
  };
  dashboards: {
     artifactBucket: string;
     artifactPrefix: string;
  };
  operator: {
     allowedCredentialGrants: (
        | "telemetry"
        | "github"
        | "package_registry"
        | "artifact_store"
        | "studio_adapter"
       | "backend_service")[];
     instructionsPath: string;
     models: {
        default?: boolean;
        id: string;
        label: string;
        model: string;
        provider: string;
     }[];
     skillPacks: string[];
  };
  runtime: {
     apiBasePath: string;
     baseUrl: string;
     serviceAuthHeader: string;
     studioAdapterBasePath: string;
  };
  source: {
     defaultBranch: string;
     owner: string;
     provider: "github";
     repo: string;
     root: string;
  };
  target: {
     environment: string;
     id: string;
     name: string;
  };
  telemetry: {
     sources: {
        baseUrl: string;
        headers?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        id: string;
        kind: "prometheus" | "tempo" | "otel-http";
        label: string;
     }[];
  };
  version: 1;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `base` | \{ `code?`: \{ `allowedPaths?`: `string`[]; `validationCommands?`: \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory?`: `string`; \}[]; \}; `dashboards`: \{ `artifactBucket`: `string`; `artifactPrefix?`: `string`; \}; `operator?`: \{ `allowedCredentialGrants?`: ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[]; `instructionsPath?`: `string`; `models?`: \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[]; `skillPacks?`: `string`[]; \}; `runtime`: \{ `apiBasePath?`: `string`; `baseUrl`: `string`; `serviceAuthHeader?`: `string`; `studioAdapterBasePath?`: `string`; \}; `source`: \{ `defaultBranch?`: `string`; `owner`: `string`; `provider`: `"github"`; `repo`: `string`; `root?`: `string`; \}; `target`: \{ `environment?`: `string`; `id`: `string`; `name`: `string`; \}; `telemetry?`: \{ `sources?`: \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[]; \}; `version`: `1`; \} |
| `base.code?` | \{ `allowedPaths?`: `string`[]; `validationCommands?`: \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory?`: `string`; \}[]; \} |
| `base.code.allowedPaths?` | `string`[] |
| `base.code.validationCommands?` | \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory?`: `string`; \}[] |
| `base.dashboards?` | \{ `artifactBucket`: `string`; `artifactPrefix?`: `string`; \} |
| `base.dashboards.artifactBucket?` | `string` |
| `base.dashboards.artifactPrefix?` | `string` |
| `base.operator?` | \{ `allowedCredentialGrants?`: ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[]; `instructionsPath?`: `string`; `models?`: \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[]; `skillPacks?`: `string`[]; \} |
| `base.operator.allowedCredentialGrants?` | ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[] |
| `base.operator.instructionsPath?` | `string` |
| `base.operator.models?` | \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[] |
| `base.operator.skillPacks?` | `string`[] |
| `base.runtime?` | \{ `apiBasePath?`: `string`; `baseUrl`: `string`; `serviceAuthHeader?`: `string`; `studioAdapterBasePath?`: `string`; \} |
| `base.runtime.apiBasePath?` | `string` |
| `base.runtime.baseUrl?` | `string` |
| `base.runtime.serviceAuthHeader?` | `string` |
| `base.runtime.studioAdapterBasePath?` | `string` |
| `base.source?` | \{ `defaultBranch?`: `string`; `owner`: `string`; `provider`: `"github"`; `repo`: `string`; `root?`: `string`; \} |
| `base.source.defaultBranch?` | `string` |
| `base.source.owner?` | `string` |
| `base.source.provider?` | `"github"` |
| `base.source.repo?` | `string` |
| `base.source.root?` | `string` |
| `base.target?` | \{ `environment?`: `string`; `id`: `string`; `name`: `string`; \} |
| `base.target.environment?` | `string` |
| `base.target.id?` | `string` |
| `base.target.name?` | `string` |
| `base.telemetry?` | \{ `sources?`: \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[]; \} |
| `base.telemetry.sources?` | \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[] |
| `base.version?` | `1` |
| `overlay?` | \{ `code?`: \{ `allowedPaths?`: `string`[]; `validationCommands?`: \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory`: `string`; \}[]; \}; `dashboards?`: \{ `artifactBucket?`: `string`; `artifactPrefix?`: `string`; \}; `operator?`: \{ `allowedCredentialGrants?`: ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[]; `instructionsPath?`: `string`; `models?`: \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[]; `skillPacks?`: `string`[]; \}; `runtime?`: \{ `apiBasePath?`: `string`; `baseUrl?`: `string`; `serviceAuthHeader?`: `string`; `studioAdapterBasePath?`: `string`; \}; `source?`: \{ `defaultBranch?`: `string`; `owner?`: `string`; `provider?`: `"github"`; `repo?`: `string`; `root?`: `string`; \}; `target?`: \{ `environment?`: `string`; `id?`: `string`; `name?`: `string`; \}; `telemetry?`: \{ `sources?`: \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[]; \}; `version?`: `1`; \} |
| `overlay.code?` | \{ `allowedPaths?`: `string`[]; `validationCommands?`: \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory`: `string`; \}[]; \} |
| `overlay.code.allowedPaths?` | `string`[] |
| `overlay.code.validationCommands?` | \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory`: `string`; \}[] |
| `overlay.dashboards?` | \{ `artifactBucket?`: `string`; `artifactPrefix?`: `string`; \} |
| `overlay.dashboards.artifactBucket?` | `string` |
| `overlay.dashboards.artifactPrefix?` | `string` |
| `overlay.operator?` | \{ `allowedCredentialGrants?`: ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[]; `instructionsPath?`: `string`; `models?`: \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[]; `skillPacks?`: `string`[]; \} |
| `overlay.operator.allowedCredentialGrants?` | ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[] |
| `overlay.operator.instructionsPath?` | `string` |
| `overlay.operator.models?` | \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[] |
| `overlay.operator.skillPacks?` | `string`[] |
| `overlay.runtime?` | \{ `apiBasePath?`: `string`; `baseUrl?`: `string`; `serviceAuthHeader?`: `string`; `studioAdapterBasePath?`: `string`; \} |
| `overlay.runtime.apiBasePath?` | `string` |
| `overlay.runtime.baseUrl?` | `string` |
| `overlay.runtime.serviceAuthHeader?` | `string` |
| `overlay.runtime.studioAdapterBasePath?` | `string` |
| `overlay.source?` | \{ `defaultBranch?`: `string`; `owner?`: `string`; `provider?`: `"github"`; `repo?`: `string`; `root?`: `string`; \} |
| `overlay.source.defaultBranch?` | `string` |
| `overlay.source.owner?` | `string` |
| `overlay.source.provider?` | `"github"` |
| `overlay.source.repo?` | `string` |
| `overlay.source.root?` | `string` |
| `overlay.target?` | \{ `environment?`: `string`; `id?`: `string`; `name?`: `string`; \} |
| `overlay.target.environment?` | `string` |
| `overlay.target.id?` | `string` |
| `overlay.target.name?` | `string` |
| `overlay.telemetry?` | \{ `sources?`: \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[]; \} |
| `overlay.telemetry.sources?` | \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[] |
| `overlay.version?` | `1` |

#### Returns

```ts
{
  code: {
     allowedPaths: string[];
     validationCommands: {
        command: string;
        id: string;
        label: string;
        workingDirectory: string;
     }[];
  };
  dashboards: {
     artifactBucket: string;
     artifactPrefix: string;
  };
  operator: {
     allowedCredentialGrants: (
        | "telemetry"
        | "github"
        | "package_registry"
        | "artifact_store"
        | "studio_adapter"
       | "backend_service")[];
     instructionsPath: string;
     models: {
        default?: boolean;
        id: string;
        label: string;
        model: string;
        provider: string;
     }[];
     skillPacks: string[];
  };
  runtime: {
     apiBasePath: string;
     baseUrl: string;
     serviceAuthHeader: string;
     studioAdapterBasePath: string;
  };
  source: {
     defaultBranch: string;
     owner: string;
     provider: "github";
     repo: string;
     root: string;
  };
  target: {
     environment: string;
     id: string;
     name: string;
  };
  telemetry: {
     sources: {
        baseUrl: string;
        headers?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        id: string;
        kind: "prometheus" | "tempo" | "otel-http";
        label: string;
     }[];
  };
  version: 1;
}
```

| Name | Type |
| ------ | ------ |
| `code` | \{ `allowedPaths`: `string`[]; `validationCommands`: \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory`: `string`; \}[]; \} |
| `code.allowedPaths` | `string`[] |
| `code.validationCommands` | \{ `command`: `string`; `id`: `string`; `label`: `string`; `workingDirectory`: `string`; \}[] |
| `dashboards` | \{ `artifactBucket`: `string`; `artifactPrefix`: `string`; \} |
| `dashboards.artifactBucket` | `string` |
| `dashboards.artifactPrefix` | `string` |
| `operator` | \{ `allowedCredentialGrants`: ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[]; `instructionsPath`: `string`; `models`: \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[]; `skillPacks`: `string`[]; \} |
| `operator.allowedCredentialGrants` | ( \| `"telemetry"` \| `"github"` \| `"package_registry"` \| `"artifact_store"` \| `"studio_adapter"` \| `"backend_service"`)[] |
| `operator.instructionsPath` | `string` |
| `operator.models` | \{ `default?`: `boolean`; `id`: `string`; `label`: `string`; `model`: `string`; `provider`: `string`; \}[] |
| `operator.skillPacks` | `string`[] |
| `runtime` | \{ `apiBasePath`: `string`; `baseUrl`: `string`; `serviceAuthHeader`: `string`; `studioAdapterBasePath`: `string`; \} |
| `runtime.apiBasePath` | `string` |
| `runtime.baseUrl` | `string` |
| `runtime.serviceAuthHeader` | `string` |
| `runtime.studioAdapterBasePath` | `string` |
| `source` | \{ `defaultBranch`: `string`; `owner`: `string`; `provider`: `"github"`; `repo`: `string`; `root`: `string`; \} |
| `source.defaultBranch` | `string` |
| `source.owner` | `string` |
| `source.provider` | `"github"` |
| `source.repo` | `string` |
| `source.root` | `string` |
| `target` | \{ `environment`: `string`; `id`: `string`; `name`: `string`; \} |
| `target.environment` | `string` |
| `target.id` | `string` |
| `target.name` | `string` |
| `telemetry` | \{ `sources`: \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[]; \} |
| `telemetry.sources` | \{ `baseUrl`: `string`; `headers?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>; `id`: `string`; `kind`: `"prometheus"` \| `"tempo"` \| `"otel-http"`; `label`: `string`; \}[] |
| `version` | `1` |

***

### roleHasPermission()

```ts
function roleHasPermission(role, permission): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `role` | `"operator"` \| `"viewer"` \| `"dashboard_editor"` \| `"admin"` |
| `permission` | \| `"studio:view"` \| `"dashboards:edit"` \| `"dashboards:publish"` \| `"operator:use"` \| `"operator:publish_code"` \| `"admin:manage"` |

#### Returns

`boolean`
