import type { ProviderCategory } from "@cognidesk/core";

import { contactCenterCategoryProfile } from "./category-profiles/contact-center.js";
import { ecommerceCategoryProfile } from "./category-profiles/ecommerce.js";
import { emailCategoryProfile } from "./category-profiles/email.js";
import { handoffCategoryProfile } from "./category-profiles/handoff.js";
import { messagingCategoryProfile } from "./category-profiles/messaging.js";
import { smsCategoryProfile } from "./category-profiles/sms.js";
import {
  categoryOperationAliasMap,
  type IntegrationCategoryProfile,
} from "./category-profiles/shared.js";
import { ticketingCategoryProfile } from "./category-profiles/ticketing.js";
import { voiceCategoryProfile } from "./category-profiles/voice.js";
import { workplaceCategoryProfile } from "./category-profiles/workplace.js";

export { contactCenterCategoryProfile } from "./category-profiles/contact-center.js";
export { ecommerceCategoryProfile } from "./category-profiles/ecommerce.js";
export { emailCategoryProfile } from "./category-profiles/email.js";
export { handoffCategoryProfile } from "./category-profiles/handoff.js";
export { messagingCategoryProfile } from "./category-profiles/messaging.js";
export { smsCategoryProfile } from "./category-profiles/sms.js";
export {
  categoryOperationAliasMap,
  categoryOperationAliases,
  categoryProfilesCoreIntegrationNote,
  defineIntegrationCategoryProfile,
  deriveProviderCapabilityCoverage,
  findCategoryOperation,
  operation,
} from "./category-profiles/shared.js";
export type {
  CategoryCoverageLevel,
  CategoryOperationAliasMap,
  IntegrationCategoryProfile,
  OperationSchemaDescriptor,
  ProviderCapabilityCoverage,
} from "./category-profiles/shared.js";
export { ticketingCategoryProfile } from "./category-profiles/ticketing.js";
export { voiceCategoryProfile } from "./category-profiles/voice.js";
export { workplaceCategoryProfile } from "./category-profiles/workplace.js";

export const emailOperationAliasMap = categoryOperationAliasMap(emailCategoryProfile);
export type EmailOperationAlias = keyof typeof emailOperationAliasMap;

export const workplaceOperationAliasMap = categoryOperationAliasMap(workplaceCategoryProfile);
export type WorkplaceOperationAlias = keyof typeof workplaceOperationAliasMap;

export const ticketingOperationAliasMap = categoryOperationAliasMap(ticketingCategoryProfile);
export type TicketingOperationAlias = keyof typeof ticketingOperationAliasMap;

export const ecommerceOperationAliasMap = categoryOperationAliasMap(ecommerceCategoryProfile);
export type EcommerceOperationAlias = keyof typeof ecommerceOperationAliasMap;

export const smsOperationAliasMap = categoryOperationAliasMap(smsCategoryProfile);
export type SmsOperationAlias = keyof typeof smsOperationAliasMap;

export const voiceOperationAliasMap = categoryOperationAliasMap(voiceCategoryProfile);
export type VoiceOperationAlias = keyof typeof voiceOperationAliasMap;

export const contactCenterOperationAliasMap = categoryOperationAliasMap(contactCenterCategoryProfile);
export type ContactCenterOperationAlias = keyof typeof contactCenterOperationAliasMap;

export const integrationCategoryOperationAliasMaps = {
  email: emailOperationAliasMap,
  workplace: workplaceOperationAliasMap,
  ticketing: ticketingOperationAliasMap,
  ecommerce: ecommerceOperationAliasMap,
  sms: smsOperationAliasMap,
  voice: voiceOperationAliasMap,
  "contact-center": contactCenterOperationAliasMap,
} as const;

export const integrationCategoryProfiles = [
  ticketingCategoryProfile,
  emailCategoryProfile,
  workplaceCategoryProfile,
  ecommerceCategoryProfile,
  voiceCategoryProfile,
  messagingCategoryProfile,
  smsCategoryProfile,
  contactCenterCategoryProfile,
  handoffCategoryProfile,
] as const;

export type IntegrationCategoryProfileId = typeof integrationCategoryProfiles[number]["id"];

export const integrationCategoryProfilesByCategory = Object.fromEntries(
  integrationCategoryProfiles.flatMap((profile) => [
    [profile.category, profile],
    [profile.id, profile],
  ]),
) as Readonly<Record<string, IntegrationCategoryProfile>>;

export function getIntegrationCategoryProfile(category: ProviderCategory | IntegrationCategoryProfileId): IntegrationCategoryProfile | undefined {
  return integrationCategoryProfilesByCategory[category];
}

export function requireIntegrationCategoryProfile(category: ProviderCategory | IntegrationCategoryProfileId): IntegrationCategoryProfile {
  const profile = getIntegrationCategoryProfile(category);
  if (!profile) throw new Error(`Unknown integration category profile '${category}'.`);
  return profile;
}
