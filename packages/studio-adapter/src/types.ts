import type {
  CapabilityAvailabilityInput,
  ChannelPolicyConfigInput,
  ChannelSetConfigInput,
  CognideskRuntime,
  CompiledAgent,
  ConversationRecord,
  ProviderCredentialStatusInput,
  ProviderManifestInput,
  ProviderReadinessInput,
  RuntimeConfigurationSource,
  RuntimeEvent,
  RuntimeSnapshot,
} from "@cognidesk/core";
import type {
  StudioAgentIntrospection,
  StudioConfigurationMutationRequest,
  StudioConfigurationMutationResult,
} from "@cognidesk/studio-contracts";

export interface StudioAdapterRuntime {
  listEvents(conversationId: string, afterOffset?: number): Promise<RuntimeEvent[]>;
  getSnapshot?(conversationId: string): Promise<RuntimeSnapshot | null>;
  configurationSource?(): RuntimeConfigurationSource;
}

export interface StudioAdapterConversationSource {
  listConversations?(input: {
    limit: number;
    agentId?: string;
  }): Promise<ConversationRecord[]>;
  getConversation?(conversationId: string): Promise<ConversationRecord | null>;
}

export interface StudioAdapterTelemetrySource {
  listTraceSummaries?(input: {
    traceId?: string;
    limit: number;
  }): Promise<unknown[]>;
  queryMetrics?(input: {
    query: string;
    range?: { from: string; to: string; stepSeconds?: number };
  }): Promise<unknown>;
}

export interface StudioAdapterConfigurationSource {
  channelSets?: ChannelSetConfigInput[];
  channels?: ChannelPolicyConfigInput[];
  providerPackages?: ProviderManifestInput[];
  capabilityAvailability?: CapabilityAvailabilityInput[];
  credentialStatuses?: ProviderCredentialStatusInput[];
  providerReadiness?: ProviderReadinessInput[];
  policyIds?: string[];
  updateConfiguration?(request: StudioConfigurationMutationRequest): Promise<StudioConfigurationMutationResult>;
}

export interface CreateCognideskStudioAdapterOptions {
  targetId: string;
  agent: CompiledAgent;
  runtime: StudioAdapterRuntime | CognideskRuntime;
  configuration?: StudioAdapterConfigurationSource;
  conversations?: StudioAdapterConversationSource;
  telemetry?: StudioAdapterTelemetrySource;
  basePath?: string;
  serviceToken?: string;
  allowUnauthenticated?: boolean;
  cors?: boolean;
}

export interface CognideskStudioAdapter {
  handle(request: Request): Promise<Response>;
  introspect(): StudioAgentIntrospection;
}
