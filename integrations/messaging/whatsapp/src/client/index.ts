import type {
  WhatsAppApiResponse,
  WhatsAppBusinessProfileResponse,
  WhatsAppMediaResource,
  WhatsAppMessagingClient,
  WhatsAppMessagingClientOptions,
  WhatsAppMessagingJsonValue,
  WhatsAppMessagingProviderClient,
  WhatsAppPhoneNumberResource,
} from "../contracts.js";
import { buildWhatsAppMessageBody, stripUndefined } from "./payload.js";
import { whatsappDownload, whatsappGraphUrl, whatsappRequest } from "./request.js";

export function createWhatsAppMessagingClient(options: WhatsAppMessagingClientOptions = {}): WhatsAppMessagingClient {
  const providerClient = requireWhatsAppMessagingProviderClient(
    options.providerClient ?? createWhatsAppGraphProviderClient(options),
  );

  return {
    providerClient,
    sendMessage(input) {
      return providerClient.sendMessage(input);
    },
    uploadMedia(input) {
      return providerClient.uploadMedia(input);
    },
    getMedia(mediaId) {
      return providerClient.getMedia(mediaId);
    },
    downloadMedia(input) {
      return providerClient.downloadMedia(input);
    },
    getPhoneNumber(fields) {
      return providerClient.getPhoneNumber(fields);
    },
    getBusinessProfile(fields) {
      return providerClient.getBusinessProfile(fields);
    },
    updateBusinessProfile(input) {
      return providerClient.updateBusinessProfile(input);
    },
  };
}

function requireWhatsAppMessagingProviderClient(client: WhatsAppMessagingProviderClient): WhatsAppMessagingProviderClient {
  for (const method of [
    "sendMessage",
    "uploadMedia",
    "getMedia",
    "downloadMedia",
    "getPhoneNumber",
    "getBusinessProfile",
    "updateBusinessProfile",
  ] as const) {
    if (typeof client[method] !== "function") {
      throw new Error(`WhatsApp/Meta providerClient must implement ${method}().`);
    }
  }
  return client;
}

export function createWhatsAppGraphProviderClient(options: WhatsAppMessagingClientOptions): WhatsAppMessagingProviderClient {
  const accessToken = requireConfiguredWhatsAppOption(options.accessToken, "accessToken");
  const phoneNumberId = requireConfiguredWhatsAppOption(options.phoneNumberId, "phoneNumberId");
  const graphApiBaseUrl = (options.graphApiBaseUrl ?? options.baseUrl ?? "https://graph.facebook.com").replace(/\/+$/, "");
  const graphApiVersion = options.graphApiVersion ?? "v25.0";
  const fetchImpl = options.fetch ?? fetch;
  const graphOptions = {
    accessToken,
    ...(options.signal ? { signal: options.signal } : {}),
    ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
    ...(options.retry !== undefined ? { retry: options.retry } : {}),
  };

  return {
    sendMessage(input) {
      return whatsappRequest<WhatsAppApiResponse>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, [phoneNumberId], "/messages"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: buildWhatsAppMessageBody(input),
      });
    },
    uploadMedia(input) {
      const form = new FormData();
      form.set("messaging_product", input.messagingProduct ?? "whatsapp");
      form.set("type", input.type);
      form.set("file", input.file, input.filename);
      return whatsappRequest<WhatsAppMediaResource>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, [phoneNumberId], "/media"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: form,
      });
    },
    getMedia(mediaId) {
      return whatsappRequest<WhatsAppMediaResource>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, [mediaId]),
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    async downloadMedia(input) {
      const media = typeof input === "string" ? await this.getMedia(input) : input;
      if (!media.url) throw new Error("WhatsApp media metadata did not include a download URL.");
      return whatsappDownload({ url: media.url, options: graphOptions, fetch: fetchImpl });
    },
    getPhoneNumber(fields = [
      "id",
      "display_phone_number",
      "verified_name",
      "quality_rating",
      "platform_type",
      "code_verification_status",
    ]) {
      const url = whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, [phoneNumberId]);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return whatsappRequest<WhatsAppPhoneNumberResource>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    getBusinessProfile(fields = [
      "about",
      "address",
      "description",
      "email",
      "profile_picture_url",
      "websites",
      "vertical",
    ]) {
      const url = whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, [phoneNumberId], "/whatsapp_business_profile");
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return whatsappRequest<WhatsAppBusinessProfileResponse>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    updateBusinessProfile(input) {
      return whatsappRequest<{ success?: boolean; [key: string]: WhatsAppMessagingJsonValue | undefined }>({
        url: whatsappGraphUrl(graphApiBaseUrl, graphApiVersion, [phoneNumberId], "/whatsapp_business_profile"),
        method: "POST",
        options: graphOptions,
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

function requireConfiguredWhatsAppOption(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`WhatsApp built-in Graph API adapter requires ${name}; pass ${name} or providerClient.`);
  }
  return value;
}
