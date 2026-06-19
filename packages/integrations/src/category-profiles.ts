import type { ProviderCategory } from "@cognidesk/core";

import { contactCenterCategoryProfile } from "./category-profiles/contact-center.js";
import { emailCategoryProfile } from "./category-profiles/email.js";
import { handoffCategoryProfile } from "./category-profiles/handoff.js";
import { messagingCategoryProfile } from "./category-profiles/messaging.js";
import { smsCategoryProfile } from "./category-profiles/sms.js";
import type { IntegrationCategoryProfile } from "./category-profiles/shared.js";
import { ticketingCategoryProfile } from "./category-profiles/ticketing.js";
import { voiceCategoryProfile } from "./category-profiles/voice.js";

export { contactCenterCategoryProfile } from "./category-profiles/contact-center.js";
export { emailCategoryProfile } from "./category-profiles/email.js";
export { handoffCategoryProfile } from "./category-profiles/handoff.js";
export { messagingCategoryProfile } from "./category-profiles/messaging.js";
export { smsCategoryProfile } from "./category-profiles/sms.js";
export {
  categoryOperationAliases,
  categoryProfilesCoreIntegrationNote,
  defineIntegrationCategoryProfile,
  deriveProviderCapabilityCoverage,
  findCategoryOperation,
} from "./category-profiles/shared.js";
export type {
  CategoryCoverageLevel,
  IntegrationCategoryProfile,
  OperationSchemaDescriptor,
  ProviderCapabilityCoverage,
} from "./category-profiles/shared.js";
export { ticketingCategoryProfile } from "./category-profiles/ticketing.js";
export { voiceCategoryProfile } from "./category-profiles/voice.js";

export const integrationCategoryProfiles = [
  ticketingCategoryProfile,
  emailCategoryProfile,
  voiceCategoryProfile,
  messagingCategoryProfile,
  smsCategoryProfile,
  contactCenterCategoryProfile,
  handoffCategoryProfile,
] as const;

export type IntegrationCategoryProfileId = typeof integrationCategoryProfiles[number]["id"];

export const integrationCategoryProfilesByCategory = Object.fromEntries(
  integrationCategoryProfiles.map((profile) => [profile.category, profile]),
) as Readonly<Record<string, IntegrationCategoryProfile>>;

export function getIntegrationCategoryProfile(category: ProviderCategory): IntegrationCategoryProfile | undefined {
  return integrationCategoryProfilesByCategory[category];
}

export function requireIntegrationCategoryProfile(category: ProviderCategory): IntegrationCategoryProfile {
  const profile = getIntegrationCategoryProfile(category);
  if (!profile) throw new Error(`Unknown integration category profile '${category}'.`);
  return profile;
}
