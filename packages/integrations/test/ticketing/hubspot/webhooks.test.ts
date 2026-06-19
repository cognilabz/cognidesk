import { describe, expect, it } from "vitest";
import {
  createHubSpotV3Signature,
  parseHubSpotSignedRequest,
  parseHubSpotWebhookPayload,
  validateHubSpotV3Signature,
} from "../../../src/ticketing/hubspot/index.js";

describe("@cognidesk/integrations HubSpot webhooks", () => {
  it("validates HubSpot v3 signatures and parses signed webhook payloads", async () => {
    const clientSecret = "client-secret";
    const timestamp = "1781690400000";
    const body = JSON.stringify([{
      eventId: 1,
      portalId: 42,
      appId: 24,
      subscriptionType: "ticket.propertyChange",
      objectId: 123,
      occurredAt: 1781690399999,
    }]);
    const requestUri = "https://example.test/hubspot/webhooks?email=agent%40example.test";
    const signature = createHubSpotV3Signature({
      clientSecret,
      method: "POST",
      requestUri,
      rawBody: body,
      timestamp,
    });

    expect(validateHubSpotV3Signature({
      clientSecret,
      method: "POST",
      requestUri,
      rawBody: body,
      timestamp,
      signature,
      now: Number(timestamp),
    })).toBe(true);
    expect(validateHubSpotV3Signature({
      clientSecret,
      method: "POST",
      requestUri,
      rawBody: `${body}\n`,
      timestamp,
      signature,
      now: Number(timestamp),
    })).toBe(false);
    expect(validateHubSpotV3Signature({
      clientSecret,
      method: "POST",
      requestUri,
      rawBody: body,
      timestamp: "1000",
      signature,
      now: Number(timestamp),
    })).toBe(false);

    const request = new Request(requestUri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hubspot-signature-v3": signature,
        "x-hubspot-request-timestamp": timestamp,
      },
      body,
    });
    const parsed = await parseHubSpotSignedRequest(request, {
      clientSecret,
      now: Number(timestamp),
    });
    expect(parsed.events).toHaveLength(1);
    expect(parsed.events[0]).toMatchObject({ portalId: 42, objectId: 123 });
    expect(parseHubSpotWebhookPayload(body)).toEqual(parsed.events);
  });
});
