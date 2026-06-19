import type { ProviderManifest } from "@cognidesk/core";

import { requireIntegrationProviderReference } from "./references.js";
import type { IntegrationProviderReference } from "./types.js";

async function importProviderModule(reference: IntegrationProviderReference) {
  switch (reference.id) {
    case "cobrowsing.cognidesk":
      return import("../cobrowsing/cognidesk/index.js");
    case "community.discord":
      return import("../community/discord/index.js");
    case "community.forum":
      return import("../community/forum/index.js");
    case "contactCenter.8x8":
      return import("../contact-center/8x8/index.js");
    case "contactCenter.aircall":
      return import("../contact-center/aircall/index.js");
    case "contactCenter.amazon-connect":
      return import("../contact-center/amazon-connect/index.js");
    case "contactCenter.five9":
      return import("../contact-center/five9/index.js");
    case "contactCenter.genesys-cloud":
      return import("../contact-center/genesys-cloud/index.js");
    case "contactCenter.genesys-engage":
      return import("../contact-center/genesys-engage/index.js");
    case "contactCenter.genesys-pureconnect":
      return import("../contact-center/genesys-pureconnect/index.js");
    case "contactCenter.nextiva":
      return import("../contact-center/nextiva/index.js");
    case "contactCenter.nice-cxone":
      return import("../contact-center/nice-cxone/index.js");
    case "contactCenter.ringcentral":
      return import("../contact-center/ringcentral/index.js");
    case "contactCenter.talkdesk":
      return import("../contact-center/talkdesk/index.js");
    case "contactCenter.zoom":
      return import("../contact-center/zoom/index.js");
    case "ecommerce.shopify":
      return import("../ecommerce/shopify/index.js");
    case "ecommerce.stripe":
      return import("../ecommerce/stripe/index.js");
    case "email.gmail":
      return import("../email/gmail/index.js");
    case "email.imap":
      return import("../email/imap/index.js");
    case "email.mailgun":
      return import("../email/mailgun/index.js");
    case "email.outlook":
      return import("../email/outlook/index.js");
    case "email.postmark":
      return import("../email/postmark/index.js");
    case "email.ses":
      return import("../email/ses/index.js");
    case "form.cognidesk":
      return import("../form/cognidesk/index.js");
    case "helpcenter.cognidesk":
      return import("../help-center/cognidesk/index.js");
    case "marketplace.amazon":
      return import("../marketplace/amazon/index.js");
    case "marketplace.ebay":
      return import("../marketplace/ebay/index.js");
    case "messaging.rcs":
      return import("../messaging/rcs/index.js");
    case "messaging.whatsapp":
      return import("../messaging/whatsapp/index.js");
    case "review.appstore":
      return import("../review/appstore/index.js");
    case "review.googleplay":
      return import("../review/googleplay/index.js");
    case "sms.twilio":
      return import("../sms/twilio/index.js");
    case "social.instagram":
      return import("../social/instagram/index.js");
    case "social.messenger":
      return import("../social/messenger/index.js");
    case "social.tiktok":
      return import("../social/tiktok/index.js");
    case "ticketing.dynamics365":
      return import("../ticketing/dynamics365/index.js");
    case "ticketing.freshdesk":
      return import("../ticketing/freshdesk/index.js");
    case "ticketing.front":
      return import("../ticketing/front/index.js");
    case "ticketing.gorgias":
      return import("../ticketing/gorgias/index.js");
    case "ticketing.help-scout":
      return import("../ticketing/help-scout/index.js");
    case "ticketing.hubspot":
      return import("../ticketing/hubspot/index.js");
    case "ticketing.intercom":
      return import("../ticketing/intercom/index.js");
    case "ticketing.kustomer":
      return import("../ticketing/kustomer/index.js");
    case "ticketing.oracle-service":
      return import("../ticketing/oracle-service/index.js");
    case "ticketing.pega-customer-service":
      return import("../ticketing/pega-customer-service/index.js");
    case "ticketing.salesforce":
      return import("../ticketing/salesforce/index.js");
    case "ticketing.sap-service-cloud":
      return import("../ticketing/sap-service-cloud/index.js");
    case "ticketing.servicenow":
      return import("../ticketing/servicenow/index.js");
    case "ticketing.zendesk":
      return import("../ticketing/zendesk/index.js");
    case "ticketing.zoho-desk":
      return import("../ticketing/zoho-desk/index.js");
    case "video.whereby":
      return import("../video/whereby/index.js");
    case "video.zoom":
      return import("../video/zoom/index.js");
    case "voice.elevenlabs":
      return import("../voice/elevenlabs/index.js");
    case "voice.azure-speech":
      return import("../voice/azure-speech/index.js");
    case "voice.aws-speech":
      return import("../voice/aws-speech/index.js");
    case "voice.deepgram":
      return import("../voice/deepgram/index.js");
    case "voice.google-speech":
      return import("../voice/google-speech/index.js");
    case "voice.openai":
      return import("../voice/openai/index.js");
    case "voice.sip":
      return import("../voice/sip/index.js");
    case "voice.twilio":
      return import("../voice/twilio/index.js");
    case "voice.vonage":
      return import("../voice/vonage/index.js");
    case "workplace.slack":
      return import("../workplace/slack/index.js");
    case "workplace.teams":
      return import("../workplace/teams/index.js");
    default:
      throw new Error(`Unknown Cognidesk provider integration '${reference.id}'.`);
  }
}


export type IntegrationProviderModule = Awaited<ReturnType<typeof importProviderModule>>;

export async function loadProviderIntegration(idOrReference: string | IntegrationProviderReference): Promise<IntegrationProviderModule> {
  const reference = typeof idOrReference === "string"
    ? requireIntegrationProviderReference(idOrReference)
    : idOrReference;
  return importProviderModule(reference);
}

export async function loadProviderIntegrationManifest(idOrReference: string | IntegrationProviderReference): Promise<ProviderManifest> {
  const reference = typeof idOrReference === "string"
    ? requireIntegrationProviderReference(idOrReference)
    : idOrReference;
  const module = await loadProviderIntegration(reference);
  const manifest = Reflect.get(module, reference.manifestExport) as ProviderManifest | undefined;
  if (!manifest) throw new Error(`Provider integration '${reference.id}' did not export manifest '${reference.manifestExport}'.`);
  return manifest;
}
