import { z } from "zod";

export const coreConversationChannels = [
  "chat",
  "voice",
  "email",
  "ticketing",
  "contactCenter",
  "messaging",
  "sms",
  "workplace",
  "social",
  "form",
  "helpCenter",
  "community",
  "ecommerce",
  "marketplace",
  "review",
  "video",
  "cobrowsing",
  "rcs",
] as const;

export const coreProviderCategories = [
  "model",
  "storage",
  "chat",
  "voice",
  "email",
  "ticketing",
  "contactCenter",
  "handoff",
  "studio",
  "messaging",
  "sms",
  "workplace",
  "social",
  "form",
  "helpCenter",
  "community",
  "ecommerce",
  "marketplace",
  "review",
  "video",
  "cobrowsing",
  "rcs",
] as const;

export const coreChannelCapabilities = [
  "receive",
  "send",
  "draft",
  "thread",
  "attach",
  "media",
  "handoff",
  "schedule",
  "cleanup",
  "notify",
  "transfer",
  "artifact",
  "create-provider-object",
  "read-provider-object",
  "update-provider-object",
  "delete-provider-object",
  "search-provider-object",
  "link-provider-object",
] as const;

export const providerTrustLevels = [
  "official",
  "verified",
  "community",
  "experimental",
] as const;

export const providerDirections = [
  "receive-only",
  "send-only",
  "inbound-only",
  "outbound-only",
  "bidirectional",
] as const;

export const channelAudiences = [
  "customer-facing",
  "internal-support",
  "mixed",
] as const;

export const capabilityAvailabilityStatuses = [
  "registry-available",
  "installed",
  "configured",
  "enabled",
  "blocked",
] as const;

export const providerCredentialStatuses = [
  "not-required",
  "required",
  "configured",
  "missing",
  "expired",
  "insufficient-scope",
  "permission-blocked",
  "unavailable",
] as const;

export const categoryOperationLevels = [
  "required",
  "recommended",
  "optional",
  "extension",
] as const;

export const providerCapabilityCoverageLevels = [
  "partial",
  "standard",
  "full",
] as const;

export const categoryEventDirections = [
  "inbound",
  "outbound",
  "internal",
  "bidirectional",
] as const;

type Extensible<T extends string> = T | (string & {});

export type CoreConversationChannel = typeof coreConversationChannels[number];
export type ConversationChannelKind = Extensible<CoreConversationChannel>;
export type CoreProviderCategory = typeof coreProviderCategories[number];
export type ProviderCategory = Extensible<CoreProviderCategory>;
export type CoreChannelCapability = typeof coreChannelCapabilities[number];
export type ChannelCapability = Extensible<CoreChannelCapability>;
export type ProviderTrustLevel = typeof providerTrustLevels[number];
export type ProviderDirection = typeof providerDirections[number];
export type ChannelAudience = typeof channelAudiences[number];
export type ActionAudience = ChannelAudience;
export type CapabilityAvailabilityStatus = typeof capabilityAvailabilityStatuses[number];
export type ProviderCredentialState = typeof providerCredentialStatuses[number];
export type CategoryOperationLevel = typeof categoryOperationLevels[number];
export type ProviderCapabilityCoverage = typeof providerCapabilityCoverageLevels[number];
export type CategoryEventDirection = typeof categoryEventDirections[number];

export const ConversationChannelKindSchema = z.string().min(1);
export const ProviderCategorySchema = z.string().min(1);
export const CoreChannelCapabilitySchema = z.enum(coreChannelCapabilities);
export const ChannelCapabilitySchema = z.string().min(1);
export const ProviderTrustLevelSchema = z.enum(providerTrustLevels);
export const ProviderDirectionSchema = z.enum(providerDirections);
export const ChannelAudienceSchema = z.enum(channelAudiences);
export const ActionAudienceSchema = ChannelAudienceSchema;
export const CapabilityAvailabilityStatusSchema = z.enum(capabilityAvailabilityStatuses);
export const ProviderCredentialStateSchema = z.enum(providerCredentialStatuses);
export const CategoryOperationLevelSchema = z.enum(categoryOperationLevels);
export const ProviderCapabilityCoverageSchema = z.enum(providerCapabilityCoverageLevels);
export const CategoryEventDirectionSchema = z.enum(categoryEventDirections);
