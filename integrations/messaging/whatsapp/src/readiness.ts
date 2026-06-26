import type { WhatsAppLiveCheckOptions } from "./contracts.js";
import { createWhatsAppMessagingClient } from "./client/index.js";

export function createWhatsAppMessagingLiveChecks(options: WhatsAppLiveCheckOptions) {
  return [{
    id: "phone-number",
    description: "Configured WhatsApp Graph API adapter or provider client can read the phone-number readiness resource.",
    requiredCredentialIds: ["whatsapp-access-token", "whatsapp-phone-number-id"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createWhatsAppMessagingClient(options);
      const phoneNumber = await client.getPhoneNumber();
      if (context.signal?.aborted) throw new Error("WhatsApp live phone-number check aborted.");
      return {
        details: {
          id: typeof phoneNumber.id === "string" ? phoneNumber.id : undefined,
          displayPhoneNumber: typeof phoneNumber.display_phone_number === "string"
            ? phoneNumber.display_phone_number
            : undefined,
          verifiedName: typeof phoneNumber.verified_name === "string" ? phoneNumber.verified_name : undefined,
          qualityRating: typeof phoneNumber.quality_rating === "string" ? phoneNumber.quality_rating : undefined,
          platformType: typeof phoneNumber.platform_type === "string" ? phoneNumber.platform_type : undefined,
        },
      };
    },
  }];
}
