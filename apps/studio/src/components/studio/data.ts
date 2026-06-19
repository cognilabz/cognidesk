import type { StudioAgentIntrospection, StudioConfigurationSurface, StudioJourneySummary } from "@cognidesk/studio-contracts";
import type { StudioConversationRow } from "./types";

export function journeyRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.journeys.map((journey) => [
    journey.id,
    journey.kind === "delegation" ? "Delegation" : "State Machine",
    String(journey.graph.states.length),
    String(journey.tools.length),
    String(journey.knowledge.length),
    journey.stickiness,
  ]) ?? [];
}

export function journeyComplexity(introspection: StudioAgentIntrospection | null) {
  return introspection?.journeys.map((journey) => ({
    name: truncate(journey.id, 16),
    states: journey.graph.states.length,
    tools: journey.tools.length,
    knowledge: journey.knowledge.length,
  })) ?? [];
}

export function journeyKindDistribution(introspection: StudioAgentIntrospection | null) {
  if (!introspection) return [];
  const stateMachine = introspection.journeys.filter((journey) => journey.kind === "stateMachine").length;
  const delegation = introspection.journeys.filter((journey) => journey.kind === "delegation").length;
  return [
    { name: "State Machine", value: stateMachine },
    { name: "Delegation", value: delegation },
  ].filter((entry) => entry.value > 0);
}

export function telemetryRows(introspection: StudioAgentIntrospection | null) {
  if (!introspection) return [];
  return [
    ["Agent", introspection.agent.id],
    ["Captured", introspection.capturedAt],
    ["Journeys", String(introspection.agent.journeyCount)],
    ["Tools", String(introspection.agent.toolCount)],
    ["Knowledge sources", String(introspection.agent.knowledgeCount)],
    ["Widgets", String(introspection.agent.widgetCount)],
  ];
}

export function agentPolicyRows(introspection: StudioAgentIntrospection | null) {
  if (!introspection) return [];
  return [
    ["Persona", summarizePolicyValue(introspection.agent.persona)],
    ["Channel policies", summarizePolicyValue(introspection.agent.channelPolicies)],
    ["Handoff policy", summarizePolicyValue(introspection.agent.handoffPolicy)],
  ];
}

export function conversationLifecycleDistribution(conversations: StudioConversationRow[]) {
  return ["active", "handoff", "closed"].map((lifecycle) => ({
    name: labelLifecycle(lifecycle),
    value: conversations.filter((conversation) => conversation.lifecycle === lifecycle).length,
  })).filter((entry) => entry.value > 0);
}

export function conversationJourneyActivity(conversations: StudioConversationRow[]) {
  const byJourney = new Map<string, { journey: string; conversations: number; events: number }>();
  for (const conversation of conversations) {
    const journey = conversation.activeJourneyId ?? "unassigned";
    const current = byJourney.get(journey) ?? { journey: truncate(journey, 18), conversations: 0, events: 0 };
    current.conversations += 1;
    current.events += conversation.eventCount ?? 0;
    byJourney.set(journey, current);
  }
  return Array.from(byJourney.values()).sort((left, right) => right.conversations - left.conversations);
}

export function conversationRows(conversations: StudioConversationRow[]) {
  return conversations.map((conversation) => [
    conversation.customerLabel,
    labelLifecycle(conversation.lifecycle),
    conversation.activeJourneyId ?? "-",
    String(conversation.eventCount ?? 0),
    conversation.summary,
  ]);
}

export function toolRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.tools.map((tool) => [
    tool.name,
    tool.sideEffect ? "Yes" : "No",
    tool.description ?? "-",
  ]) ?? [];
}

export function knowledgeRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.knowledge.map((source) => [source.name]) ?? [];
}

export function widgetRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.widgets.map((widget) => [widget.kind]) ?? [];
}

export function channelConfigurationRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.channels.map((channel) => [
    channel.id ?? channel.channel,
    channel.channel,
    channel.audience ?? "-",
    channel.enabled ? "Enabled" : "Disabled",
    channel.channelSetIds.join(", ") || "-",
    channel.providerPackageIds.join(", ") || "-",
    channel.enabledCapabilities.join(", ") || "-",
    channel.policyIds.join(", ") || "-",
    summarizeOptionalRecord(channel.metadata),
  ]) ?? [];
}

export function channelSetRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.channelSets.map((channelSet) => [
    channelSet.label ?? channelSet.id,
    channelSet.enabled ? "Enabled" : "Disabled",
    channelSet.channelIds.join(", ") || "-",
    channelSet.channels.join(", ") || "-",
    channelSet.conversationContinuity
      ? `${channelSet.conversationContinuity.mode}${channelSet.conversationContinuity.crossChannel ? " / cross-channel" : ""}`
      : "-",
    summarizeOptionalRecord(channelSet.metadata),
  ]) ?? [];
}

export function channelFlowRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.channels.flatMap((channel) =>
    channel.flowActivations.map((activation) => [
      channel.id ?? channel.channel,
      activation.journeyId,
      activation.enabled ? "Enabled" : "Disabled",
      activation.policyIds.join(", ") || "-",
      activation.providerPackageIds.join(", ") || "-",
      activation.reason ?? "-",
      summarizeOptionalRecord(activation.metadata),
    ])
  ) ?? [];
}

export function channelPolicyRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.channels.flatMap((channel) =>
    channel.policyDetails.map((policy) => [
      channel.id ?? channel.channel,
      policy.id,
      policy.owner ?? "-",
      summarizePolicyValue(policy.value),
    ])
  ) ?? [];
}

export function channelBehaviorRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.channels
    .filter((channel) => channel.behavior)
    .map((channel) => [
      channel.id ?? channel.channel,
      channel.behavior?.tone ?? "-",
      channel.behavior?.maxWords !== undefined ? String(channel.behavior.maxWords) : "-",
      channel.behavior?.maxCharacters !== undefined ? String(channel.behavior.maxCharacters) : "-",
      channel.behavior?.allowMarkdown === undefined ? "-" : channel.behavior.allowMarkdown ? "Yes" : "No",
      channel.behavior?.allowWidgets === undefined ? "-" : channel.behavior.allowWidgets ? "Yes" : "No",
      channel.behavior?.draftFirst === undefined ? "-" : channel.behavior.draftFirst ? "Yes" : "No",
      summarizeBehaviorExtras(channel.behavior),
    ]) ?? [];
}

export function channelHandoffRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.channels.flatMap((channel) => {
    const rows = [];
    if (channel.outbound) {
      rows.push([
        channel.id ?? channel.channel,
        "Outbound",
        channel.outbound.enabled ? "Enabled" : "Disabled",
        channel.outbound.providerPackageIds.join(", ") || "-",
        channel.outbound.requiresProviderOutboundSupport ? "Required" : "Not required",
        channel.outbound.policyIds.join(", ") || "-",
        summarizeOptionalRecord(channel.outbound.metadata),
      ]);
    }
    if (channel.handoff) {
      rows.push([
        channel.id ?? channel.channel,
        "Handoff",
        channel.handoff.enabled ? "Enabled" : "Disabled",
        channel.handoff.providerPackageIds.join(", ") || channel.handoff.destinations.join(", ") || "-",
        channel.handoff.sdkControlled === undefined
          ? "Not specified"
          : channel.handoff.sdkControlled
            ? "SDK-user configured"
            : "Provider/adapter routed",
        channel.handoff.policyIds.join(", ") || "-",
        summarizeOptionalRecord(channel.handoff.metadata),
      ]);
    }
    return rows;
  }) ?? [];
}

export function providerReadinessRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.providerReadiness.map((readiness) => [
    readiness.providerPackageId,
    readiness.status,
    readiness.live ? "Yes" : "No",
    readiness.sandbox ? "Yes" : "No",
    readiness.checkSource ?? "-",
    readiness.checkedAt ?? "-",
    readiness.blockers.map((blocker) => `${blocker.kind}:${blocker.code}`).join(", ") || "-",
    readiness.remediationActions
      .map((action) => `${action.label}${action.metadata ? ` (${summarizeOptionalRecord(action.metadata)})` : ""}`)
      .join(", ") || "-",
    summarizeOptionalRecord(readiness.metadata),
  ]) ?? [];
}

export function providerPackageRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.providerPackages.map((providerPackage) => [
    providerPackage.name,
    providerPackage.packageName,
    providerPackage.category,
    providerPackage.trustLevel,
    providerPackage.coverage.scope,
    providerPackage.directions.join(", "),
    providerPackage.channelAudiences.join(", "),
    providerPackage.capabilities
      .map((capability) => [
        capability.capability,
        capability.requiresCredential ? "credential" : "",
        capability.providerObjects
          .map((providerObject) => [
            providerObject.kind,
            providerObject.schemaName,
            providerObject.metadata ? summarizeOptionalRecord(providerObject.metadata) : "",
          ].filter(Boolean).join(":"))
          .filter(Boolean)
          .join("+"),
        capability.metadata ? summarizeOptionalRecord(capability.metadata) : "",
      ].filter(Boolean).join(" / "))
      .join(", "),
    providerPackage.credentialRequirements
      .map((credential) => [
        `${credential.id}${credential.required ? "" : " optional"}`,
        credential.metadata ? summarizeOptionalRecord(credential.metadata) : "",
      ].filter(Boolean).join(" / "))
      .join(", ") || "-",
    [providerPackage.coverage.notes.join(" | "), providerPackage.privacyNotes.join(" | ")]
      .filter(Boolean)
      .join(" | ") || "-",
    providerPackage.limitations.join(" | ") || "-",
    providerPackage.maintainers.map((maintainer) => `${maintainer.name}:${maintainer.type}`).join(", ") || "-",
    summarizeOptionalRecord(providerPackage.metadata),
  ]) ?? [];
}

export function capabilityAvailabilityRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.capabilityAvailability.map((availability) => [
    availability.providerPackageId ?? "-",
    availability.capability ?? "-",
    availability.status,
    [
      ...availability.enabledForChannels.map((channel) => `channel:${channel}`),
      ...availability.enabledForAgents.map((agent) => `agent:${agent}`),
      ...availability.enabledForJourneys.map((journey) => `journey:${journey}`),
      ...availability.enabledForTools.map((tool) => `tool:${tool}`),
    ].join(", ") || "-",
    availability.blockers.map((blocker) => `${blocker.kind}:${blocker.code}`).join(", ") || "-",
    summarizeOptionalRecord(availability.metadata),
  ]) ?? [];
}

export function providerCredentialRows(configuration: StudioConfigurationSurface | null) {
  return configuration?.credentialStatuses.map((credential) => [
    credential.providerPackageId ?? "-",
    credential.requirementId,
    credential.state,
    credential.scopes.join(", ") || "-",
    credential.expiresAt ?? "-",
    credential.message ?? "-",
  ]) ?? [];
}

export function activeJourneyRows(journey: StudioJourneySummary | null) {
  if (!journey) return [];
  return journey.graph.states.map((state) => [
    state.id,
    state.type,
    String(state.transitions.length),
    String(state.actions.length),
    state.requiresVisit ? "Yes" : "No",
  ]);
}

function truncate(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 1)}...` : value;
}

function labelLifecycle(value: string) {
  return value[0]?.toUpperCase() + value.slice(1);
}

function summarizePolicyValue(value: unknown) {
  if (!value || typeof value !== "object") return String(value ?? "-");
  if (Array.isArray(value)) return `${value.length} items`;
  const keys = Object.keys(value);
  return keys.length > 0 ? keys.slice(0, 6).join(", ") : "{}";
}

function summarizeOptionalRecord(value: unknown) {
  return value ? summarizePolicyValue(value) : "-";
}

function summarizeBehaviorExtras(behavior: StudioConfigurationSurface["channels"][number]["behavior"]) {
  if (!behavior) return "-";
  const known = new Set(["tone", "maxWords", "maxCharacters", "allowMarkdown", "allowWidgets", "draftFirst"]);
  const entries = Object.entries(behavior).filter(([key, value]) => !known.has(key) && value !== undefined);
  return entries.length > 0 ? entries.map(([key]) => key).slice(0, 6).join(", ") : "-";
}
