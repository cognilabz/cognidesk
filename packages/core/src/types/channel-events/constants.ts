type Extensible<T extends string> = T | (string & {});

export const coreChannelEventNatures = [
  "message",
  "voice.session.started",
  "voice.turn.finalized",
  "provider.object.updated",
  "operator.resume",
  "outbound.contact.requested",
  "channel.handoff.requested",
  "schedule.due",
  "output.resolution",
  "delivery.updated",
  "custom",
] as const;

export const channelEventDirections = [
  "inbound",
  "outbound",
  "internal",
] as const;

export const channelEventActorTypes = [
  "customer",
  "agent",
  "operator",
  "provider",
  "system",
  "scheduler",
  "application",
] as const;

export const coreChannelEventIntents = [
  "customer-message",
  "agent-message",
  "customer-voice-turn",
  "provider-update",
  "operator-resume",
  "outbound-contact",
  "channel-handoff",
  "scheduled-support-action",
  "output-resolution",
  "delivery-update",
  "handoff-review",
  "record-only",
] as const;

export const channelEventSourceTypes = [
  "provider-adapter",
  "application",
  "schedule-adapter",
  "operator-surface",
] as const;

export const channelEventIntakeStatuses = [
  "accepted",
  "ignored",
  "deferred",
  "handoff-review",
  "blocked",
] as const;

export const channelEventBindingStatuses = [
  "bound",
  "created",
  "unbound",
  "not-required",
  "blocked",
] as const;

export const channelEventBindingOutcomes = [
  "start-new",
  "resume-existing",
  "link-and-start-new",
  "ignore",
  "defer",
  "handoff-review",
  "blocked",
] as const;

export const channelEventHandlingDispositionKinds = [
  "no-op",
  "record-only",
  "deterministic-journey-event",
  "model-turn",
  "output-resolution",
  "provider-operation",
  "handoff-review",
] as const;

export const coreChannelOutputIntentKinds = [
  "message.reply",
  "message.draft",
  "internal.note",
  "voice.reply",
  "provider.operation",
  "provider.object.update",
  "approval.request",
  "artifact.create",
  "notification.send",
  "handoff.review",
  "custom",
] as const;

export const channelOutputProducerTypes = [
  "agent",
  "journey",
  "tool",
  "operator",
  "policy",
  "schedule",
  "application",
  "provider-adapter",
] as const;

export const channelOutputDeliveryModes = [
  "send",
  "draft",
  "provider-operation",
  "approval",
  "artifact",
  "notify",
  "handoff-review",
  "none",
] as const;

export const channelOutputResolutionOutcomes = [
  "send",
  "draft",
  "approval-required",
  "provider-operation",
  "artifact",
  "notify",
  "handoff-review",
  "defer",
  "block",
  "drop",
  "no-op",
] as const;

export const channelOutputResolutionStatuses = [
  "resolved",
  "pending",
  "deferred",
  "blocked",
  "no-op",
] as const;

export const coreChannelEventKinds = coreChannelEventNatures;
export const coreChannelEventDirections = channelEventDirections;
export const coreChannelEventActors = channelEventActorTypes;

export type CoreChannelEventNature = typeof coreChannelEventNatures[number];
export type ChannelEventNature = Extensible<CoreChannelEventNature>;
export type CoreChannelEventKind = CoreChannelEventNature;
export type ChannelEventKind = ChannelEventNature;
export type ChannelEventDirection = typeof channelEventDirections[number];
export type ChannelEventActorType = typeof channelEventActorTypes[number];
export type CoreChannelEventDirection = ChannelEventDirection;
export type CoreChannelEventActor = ChannelEventActorType;
export type CoreChannelEventIntent = typeof coreChannelEventIntents[number];
export type ChannelEventIntent = Extensible<CoreChannelEventIntent>;
export type ChannelEventSourceType = typeof channelEventSourceTypes[number];
export type ChannelEventIntakeStatus = typeof channelEventIntakeStatuses[number];
export type ChannelEventBindingStatus = typeof channelEventBindingStatuses[number];
export type ChannelEventBindingOutcome = typeof channelEventBindingOutcomes[number];
export type ChannelEventHandlingDispositionKind = typeof channelEventHandlingDispositionKinds[number];
export type ChannelEventHandlingDisposition = ChannelEventHandlingDispositionKind;
export type CoreChannelOutputIntentKind = typeof coreChannelOutputIntentKinds[number];
export type ChannelOutputIntentKind = Extensible<CoreChannelOutputIntentKind>;
export type ChannelOutputProducerType = typeof channelOutputProducerTypes[number];
export type ChannelOutputDeliveryMode = typeof channelOutputDeliveryModes[number];
export type ChannelOutputResolutionOutcome = typeof channelOutputResolutionOutcomes[number];
export type ChannelOutputResolutionStatus = typeof channelOutputResolutionStatuses[number];
