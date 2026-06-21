import type {
  WhatsAppApiResponse,
  WhatsAppBusinessProfileResponse,
  WhatsAppMediaResource,
  WhatsAppMessagingClient,
  WhatsAppMessagingClientOptions,
  WhatsAppMessagingJsonValue,
  WhatsAppPhoneNumberResource,
} from "../contracts.js";
import { buildWhatsAppMessageBody, stripUndefined } from "./payload.js";
import { whatsappDownload, whatsappGraphUrl, whatsappRequest } from "./request.js";

export function createWhatsAppMessagingClient(options: WhatsAppMessagingClientOptions): WhatsAppMessagingClient {
  const graphApiBaseUrl = (options.graphApiBaseUrl ?? "https://graph.facebook.com").replace(/\/+$/, "");
  const graphApiVersion = options.graphApiVersion ?? "v25.0";
  const fetchImpl = options.fetch ?? fetch;

  return {
    async sendMessage(input) {
      return whatsappRequest<WhatsAppApiResponse>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, `/${options.phoneNumberId}/messages`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: buildWhatsAppMessageBody(input),
      });
    },
    async uploadMedia(input) {
      const form = new FormData();
      form.set("messaging_product", input.messagingProduct ?? "whatsapp");
      form.set("type", input.type);
      form.set("file", input.file, input.filename);
      return whatsappRequest<WhatsAppMediaResource>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, `/${options.phoneNumberId}/media`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: form,
      });
    },
    async getMedia(mediaId) {
      return whatsappRequest<WhatsAppMediaResource>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, `/${mediaId}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async downloadMedia(input) {
      const media = typeof input === "string" ? await this.getMedia(input) : input;
      if (!media.url) throw new Error("WhatsApp media metadata did not include a download URL.");
      return whatsappDownload({ url: media.url, options, fetch: fetchImpl });
    },
    async getPhoneNumber(fields = [
      "id",
      "display_phone_number",
      "verified_name",
      "quality_rating",
      "platform_type",
      "code_verification_status",
    ]) {
      const url = whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, `/${options.phoneNumberId}`);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return whatsappRequest<WhatsAppPhoneNumberResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getBusinessProfile(fields = [
      "about",
      "address",
      "description",
      "email",
      "profile_picture_url",
      "websites",
      "vertical",
    ]) {
      const url = whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, `/${options.phoneNumberId}/whatsapp_business_profile`);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return whatsappRequest<WhatsAppBusinessProfileResponse>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateBusinessProfile(input) {
      return whatsappRequest<{ success?: boolean; [key: string]: WhatsAppMessagingJsonValue | undefined }>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, `/${options.phoneNumberId}/whatsapp_business_profile`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: stripUndefined({
          messaging_product: input.messagingProduct ?? "whatsapp",
          about: input.about,
          address: input.address,
          description: input.description,
          email: input.email,
          profile_picture_handle: input.profilePictureHandle,
          websites: input.websites,
          vertical: input.vertical,
        }),
      });
    },
  };
}
