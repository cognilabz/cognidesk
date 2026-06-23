import {
  describe,
  expect,
  it,
  parseOutlookWebhook,
  validateOutlookWebhookClientState,
  verifyOutlookWebhookValidationToken,
} from "./helpers.js";

describe("@cognidesk/integration-email-outlook", () => {
  it("validates and parses Microsoft Graph change notifications", async () => {
    const body = JSON.stringify({
      value: [{
        subscriptionId: "sub_1",
        changeType: "created",
        clientState: "client-state",
        resource: "users/support@example.test/messages/message_1",
        resourceData: {
          "@odata.type": "#Microsoft.Graph.Message",
          "@odata.id": "users/support@example.test/messages/message_1",
          id: "message_1",
          "@odata.etag": "etag_1",
        },
      }, {
        subscriptionId: "sub_2",
        lifecycleEvent: "reauthorizationRequired",
        clientState: "client-state",
        resource: "users/support@example.test/messages",
      }],
      validationTokens: ["jwt-header.jwt-body.jwt-signature"],
    });
    const request = new Request("https://example.test/outlook/webhook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
    });

    expect(validateOutlookWebhookClientState({
      expectedClientState: "client-state",
      actualClientState: "client-state",
    })).toBe(true);
    const parsed = await parseOutlookWebhook(request, { clientState: "client-state" });
    expect(parsed.notifications).toHaveLength(2);
    expect(parsed.validationTokens).toEqual(["jwt-header.jwt-body.jwt-signature"]);
    expect(parsed.notifications[0]?.resourceData).toMatchObject({ id: "message_1" });
    expect(parsed.notifications[1]?.lifecycleEvent).toBe("reauthorizationRequired");
  });

  it("rejects mismatched clientState values and returns validation challenges", async () => {
    const request = new Request("https://example.test/outlook/webhook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: [{ subscriptionId: "sub_1", clientState: "wrong" }],
      }),
    });

    await expect(parseOutlookWebhook(request, { clientState: "expected" }))
      .rejects.toThrow("Microsoft Graph webhook clientState validation failed.");
    expect(validateOutlookWebhookClientState({
      expectedClientState: "expected",
      actualClientState: "wrong",
    })).toBe(false);
    expect(verifyOutlookWebhookValidationToken({ validationToken: "plain%20challenge" })).toBe("plain challenge");
  });
});
