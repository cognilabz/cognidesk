import {
  CapabilityAvailabilitySchema,
  ChannelPolicyConfigSchema,
  ChannelSetConfigSchema,
  ProviderCredentialStatusSchema,
  ProviderManifestSchema,
  ProviderReadinessSchema,
  type CapabilityAvailability,
  type CognideskRuntime,
  type CompiledAgent,
  type ProviderCredentialStatus,
  type ProviderManifest,
  type ProviderReadiness,
  type RuntimeConfigurationSource,
} from "@cognidesk/core";
import {
  StudioConfigurationSurfaceSchema,
  type StudioConfigurationSurface,
} from "@cognidesk/studio-contracts";
import type {
  StudioAdapterConfigurationSource,
  StudioAdapterRuntime,
} from "./types.js";

export function introspectConfiguration(
  targetId: string,
  agent: CompiledAgent,
  configuration: StudioAdapterConfigurationSource = {},
  runtimeSource: RuntimeConfigurationSource = {},
): StudioConfigurationSurface {
  const agentConfiguration = agent.configuration ?? {};
  const channels = mergeByKey([
    ...Object.entries(agent.channels ?? {}).map(([channel, policy]) => ChannelPolicyConfigSchema.parse({
      id: channel,
      channel,
      policies: isPlainRecord(policy) ? policy : { value: policy },
    })),
    ...(agentConfiguration.channels ?? []).map((channel) => ChannelPolicyConfigSchema.parse(channel)),
    ...(runtimeSource.channels ?? []).map((channel) => ChannelPolicyConfigSchema.parse(channel)),
    ...(configuration.channels ?? []).map((channel) => ChannelPolicyConfigSchema.parse(channel)),
  ], (channel) => channel.id);
  const channelSets = mergeByKey([
    ...(agentConfiguration.channelSets ?? []).map((channelSet) => ChannelSetConfigSchema.parse(channelSet)),
    ...(runtimeSource.channelSets ?? []).map((channelSet) => ChannelSetConfigSchema.parse(channelSet)),
    ...(configuration.channelSets ?? []).map((channelSet) => ChannelSetConfigSchema.parse(channelSet)),
  ], (channelSet) => channelSet.id);
  const providerPackages = mergeByKey([
    ...(agentConfiguration.providerPackages ?? []).map((providerPackage) => ProviderManifestSchema.parse(providerPackage)),
    ...(runtimeSource.providerPackages ?? []).map((providerPackage) => ProviderManifestSchema.parse(providerPackage)),
    ...(configuration.providerPackages ?? []).map((providerPackage) => ProviderManifestSchema.parse(providerPackage)),
  ], (providerPackage) => providerPackage.id);
  const capabilityAvailability = mergeByKey([
    ...(agentConfiguration.capabilityAvailability ?? []).map((availability) => CapabilityAvailabilitySchema.parse(availability)),
    ...(runtimeSource.capabilityAvailability ?? []).map((availability) => CapabilityAvailabilitySchema.parse(availability)),
    ...(configuration.capabilityAvailability ?? []).map((availability) => CapabilityAvailabilitySchema.parse(availability)),
  ], capabilityAvailabilityKey);
  const credentialStatuses = mergeByKey([
    ...(agentConfiguration.credentialStatuses ?? []).map((credentialStatus) => ProviderCredentialStatusSchema.parse(credentialStatus)),
    ...(runtimeSource.credentialStatuses ?? []).map((credentialStatus) => ProviderCredentialStatusSchema.parse(credentialStatus)),
    ...(configuration.credentialStatuses ?? []).map((credentialStatus) => ProviderCredentialStatusSchema.parse(credentialStatus)),
  ], credentialStatusKey);
  const configuredProviderReadiness = mergeByKey([
    ...(agentConfiguration.providerReadiness ?? []).map((readiness) => sanitizeProviderReadiness(
      ProviderReadinessSchema.parse(readiness),
      providerPackages,
    )),
    ...(runtimeSource.providerReadiness ?? []).map((readiness) => sanitizeProviderReadiness(
      ProviderReadinessSchema.parse(readiness),
      providerPackages,
    )),
    ...(configuration.providerReadiness ?? []).map((readiness) => sanitizeProviderReadiness(
      ProviderReadinessSchema.parse(readiness),
      providerPackages,
    )),
  ], (readiness) => readiness.providerPackageId);
  const providerReadiness: ProviderReadiness[] = configuredProviderReadiness.length > 0
    ? configuredProviderReadiness
    : deriveProviderReadiness(providerPackages, capabilityAvailability, credentialStatuses);

  return StudioConfigurationSurfaceSchema.parse({
    targetId,
    channelSets: channelSets.map((channelSet) => ({
      id: channelSet.id,
      ...(channelSet.label ? { label: channelSet.label } : {}),
      enabled: channelSet.enabled,
      channelIds: channelSet.channelIds,
      channels: channelSet.channels,
      ...(channelSet.conversationContinuity ? { conversationContinuity: channelSet.conversationContinuity } : {}),
      ...(channelSet.metadata ? { metadata: channelSet.metadata } : {}),
    })),
    channels: channels.map((channel) => ({
      id: channel.id,
      channel: channel.channel,
      ...(channel.audience ? { audience: channel.audience } : {}),
      enabled: channel.enabled,
      channelSetIds: channel.channelSetIds,
      providerPackageIds: channel.providerPackageIds,
      enabledCapabilities: channel.enabledCapabilities,
      policyIds: Object.keys(channel.policies),
      policyDetails: Object.entries(channel.policies).map(([id, value]) => ({
        id,
        owner: policyOwner(value),
        value,
      })),
      flowActivations: channel.flowActivations,
      ...(channel.behavior ? { behavior: channel.behavior } : {}),
      ...(channel.outbound ? { outbound: channel.outbound } : {}),
      ...(channel.handoff ? { handoff: channel.handoff } : {}),
      ...(channel.metadata ? { metadata: channel.metadata } : {}),
    })),
    providerPackages: providerPackages.map((providerPackage) => ({
      id: providerPackage.id,
      name: providerPackage.name,
      packageName: providerPackage.packageName,
      provider: providerPackage.provider,
      category: providerPackage.category,
      trustLevel: providerPackage.trustLevel,
      directions: providerPackage.directions,
      channelAudiences: providerPackage.channelAudiences,
      coverage: providerPackage.coverage,
      capabilities: providerPackage.capabilities.map((capability) => ({
        capability: capability.capability,
        ...(capability.label ? { label: capability.label } : {}),
        ...(capability.description ? { description: capability.description } : {}),
        extension: capability.extension ?? false,
        audiences: capability.audiences ?? [],
        requiresCredential: capability.requiresCredential ?? false,
        sideEffect: capability.sideEffect ?? false,
        exposesSensitiveData: capability.exposesSensitiveData ?? false,
        changesWorkflow: capability.changesWorkflow ?? false,
        providerObjects: (capability.providerObjects ?? []).map((providerObject) => ({
          kind: providerObject.kind,
          ...(providerObject.label ? { label: providerObject.label } : {}),
          ...(providerObject.description ? { description: providerObject.description } : {}),
          ...(providerObject.schemaName ? { schemaName: providerObject.schemaName } : {}),
          ...(providerObject.metadata ? { metadata: providerObject.metadata } : {}),
        })),
        ...(capability.metadata ? { metadata: capability.metadata } : {}),
      })),
      credentialRequirements: providerPackage.credentialRequirements.map((credential) => ({
        id: credential.id,
        ...(credential.label ? { label: credential.label } : {}),
        ...(credential.description ? { description: credential.description } : {}),
        scopes: credential.scopes,
        required: credential.required,
        ...(credential.metadata ? { metadata: credential.metadata } : {}),
      })),
      privacyNotes: providerPackage.privacyNotes,
      limitations: providerPackage.limitations,
      maintainers: providerPackage.maintainers,
      ...(providerPackage.metadata ? { metadata: providerPackage.metadata } : {}),
    })),
    capabilityAvailability,
    credentialStatuses,
    providerReadiness,
    policyIds: [
      ...new Set([
        ...channels.flatMap((channel) => Object.keys(channel.policies)),
        ...(agentConfiguration.policyIds ?? []),
        ...(configuration.policyIds ?? []),
      ]),
    ],
    capturedAt: new Date().toISOString(),
  });
}

export function runtimeConfigurationSource(runtime: StudioAdapterRuntime | CognideskRuntime): RuntimeConfigurationSource {
  const candidate = runtime as { configurationSource?: () => RuntimeConfigurationSource };
  return typeof candidate.configurationSource === "function" ? candidate.configurationSource() : {};
}

export function mutationRequestId() {
  return globalThis.crypto?.randomUUID?.() ?? `configuration-change-${Date.now()}`;
}

function mergeByKey<T>(items: T[], keyOf: (item: T) => string) {
  const byKey = new Map<string, T>();
  for (const item of items) byKey.set(keyOf(item), item);
  return [...byKey.values()];
}

function capabilityAvailabilityKey(availability: CapabilityAvailability) {
  return [
    availability.providerPackageId ?? "*",
    availability.capability ?? "*",
    availability.enabledForChannels.join(","),
    availability.enabledForAgents.join(","),
    availability.enabledForJourneys.join(","),
    availability.enabledForTools.join(","),
  ].join(":");
}

function credentialStatusKey(credential: ProviderCredentialStatus) {
  return `${credential.providerPackageId ?? "*"}:${credential.requirementId}`;
}

function deriveProviderReadiness(
  providerPackages: ProviderManifest[],
  capabilityAvailability: CapabilityAvailability[],
  credentialStatuses: ProviderCredentialStatus[],
): ProviderReadiness[] {
  return providerPackages.map((providerPackage) => {
    const blockers = [
      ...capabilityAvailability
        .filter((availability) => availability.providerPackageId === providerPackage.id && availability.status === "blocked")
        .flatMap((availability) => availability.blockers),
      ...credentialStatuses
        .filter((credentialStatus) => (
          credentialStatus.providerPackageId === providerPackage.id
          && ["missing", "expired", "insufficient-scope", "permission-blocked", "unavailable"].includes(credentialStatus.state)
        ))
        .map((credentialStatus) => ({
          code: `credential-${credentialStatus.state}`,
          message: credentialStatus.message ?? `Credential '${credentialStatus.requirementId}' is ${credentialStatus.state}.`,
          kind: "missing-credentials" as const,
        })),
    ];

    return ProviderReadinessSchema.parse({
      providerPackageId: providerPackage.id,
      status: blockers.length > 0 ? "blocked" : "configured",
      live: false,
      sandbox: false,
      blockers,
    });
  });
}

function sanitizeProviderReadiness(
  readiness: ProviderReadiness,
  providerPackages: ProviderManifest[],
): ProviderReadiness {
  if (readiness.status !== "full-api-verified") return readiness;
  const providerPackage = providerPackages.find((candidate) => candidate.id === readiness.providerPackageId);
  if (
    providerPackage?.coverage.scope === "full-provider-api"
    && providerPackage.coverage.evidence.some((evidence) => Boolean(evidence.url))
  ) {
    return readiness;
  }
  return ProviderReadinessSchema.parse({
    ...readiness,
    status: "scoped-verified",
    metadata: {
      ...(readiness.metadata ?? {}),
      downgradedFrom: "full-api-verified",
      downgradeReason: "Provider package does not declare full-provider-api coverage with URL evidence.",
    },
  });
}

function policyOwner(value: unknown): string | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;
  const owner = (value as { owner?: unknown }).owner;
  return typeof owner === "string" ? owner : undefined;
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
