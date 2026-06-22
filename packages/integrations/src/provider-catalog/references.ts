import type { IntegrationProviderReference } from "./types.js";
import { cobrowsingProviderReferences } from "./categories/cobrowsing.js";
import { communityProviderReferences } from "./categories/community.js";
import { contactCenterProviderReferences } from "./categories/contact-center.js";
import { ecommerceProviderReferences } from "./categories/ecommerce.js";
import { emailProviderReferences } from "./categories/email.js";
import { formProviderReferences } from "./categories/form.js";
import { helpCenterProviderReferences } from "./categories/help-center.js";
import { marketplaceProviderReferences } from "./categories/marketplace.js";
import { messagingProviderReferences } from "./categories/messaging.js";
import { reviewProviderReferences } from "./categories/review.js";
import { smsProviderReferences } from "./categories/sms.js";
import { socialProviderReferences } from "./categories/social.js";
import { ticketingProviderReferences } from "./categories/ticketing.js";
import { voiceProviderReferences } from "./categories/voice.js";
import { workplaceProviderReferences } from "./categories/workplace.js";

export const integrationProviderReferences = [
  ...cobrowsingProviderReferences,
  ...communityProviderReferences,
  ...contactCenterProviderReferences,
  ...ecommerceProviderReferences,
  ...emailProviderReferences,
  ...formProviderReferences,
  ...helpCenterProviderReferences,
  ...marketplaceProviderReferences,
  ...messagingProviderReferences,
  ...reviewProviderReferences,
  ...smsProviderReferences,
  ...socialProviderReferences,
  ...ticketingProviderReferences,
  ...voiceProviderReferences,
  ...workplaceProviderReferences,
] as const satisfies readonly IntegrationProviderReference[];

export type IntegrationProviderId = typeof integrationProviderReferences[number]["id"];

export const integrationProviderCategories = [...new Set(integrationProviderReferences.map((provider) => provider.category))].sort();

export function getIntegrationProviderReference(id: string): IntegrationProviderReference | undefined {
  return integrationProviderReferences.find((provider) => provider.id === id);
}

export function requireIntegrationProviderReference(id: string): IntegrationProviderReference {
  const reference = getIntegrationProviderReference(id);
  if (!reference) throw new Error(`Unknown Cognidesk provider integration '${id}'.`);
  return reference;
}

export function isIntegrationProviderReferenceAvailable(idOrReference: string | IntegrationProviderReference): boolean {
  const id = typeof idOrReference === "string" ? idOrReference : idOrReference.id;
  return integrationProviderReferences.some((provider) => provider.id === id);
}
