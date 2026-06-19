import {
  expect,
  it,
  parseTeamsChangeNotificationRequest,
  teamsChangeNotificationValidationResponse,
  validateTeamsChangeNotificationClientState,
} from "./helpers.js";

export function registerTeamsChangeNotificationTests() {
  it("parses Graph validation tokens and validates change notification clientState", async () => {
    const validationRequest = new Request("https://example.test/teams/notifications?validationToken=opaque%20token", {
      method: "POST",
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
    const validation = await parseTeamsChangeNotificationRequest(validationRequest);
    expect(validation.validationToken).toBe("opaque token");
    const response = teamsChangeNotificationValidationResponse(validation.validationToken ?? "");
    expect(response.status).toBe(200);
    await expect(response.text()).resolves.toBe("opaque token");

    const payload = {
      value: [{
        subscriptionId: "subscription_123",
        clientState: "secret-state",
        changeType: "created",
        resource: "teams/team_123/channels/channel_123/messages/message_123",
        tenantId: "tenant_123",
        resourceData: { id: "message_123", "@odata.type": "#Microsoft.Graph.chatMessage" },
      }],
    };
    const notificationRequest = new Request("https://example.test/teams/notifications", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const parsed = await parseTeamsChangeNotificationRequest(notificationRequest, {
      clientState: "secret-state",
      requireClientState: true,
    });

    expect(parsed.notifications).toHaveLength(1);
    expect(parsed.validClientState).toBe(true);
    expect(validateTeamsChangeNotificationClientState({
      notifications: parsed.notifications,
      clientState: "secret-state",
    })).toBe(true);
  });

  it("rejects mismatched Graph change notification clientState values", async () => {
    const request = new Request("https://example.test/teams/notifications", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value: [{
          subscriptionId: "subscription_123",
          clientState: "wrong-state",
          changeType: "updated",
          resourceData: { id: "message_123" },
        }],
      }),
    });

    await expect(parseTeamsChangeNotificationRequest(request, {
      clientState: "secret-state",
      requireClientState: true,
    })).rejects.toThrow("clientState validation failed");
  });
}
