import {
  amazonMarketplaceCredentialStatuses,
  describe,
  expect,
  it,
  refreshAmazonLwaAccessToken,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("reports Studio-visible readiness without exposing credential values", () => {
    const statuses = amazonMarketplaceCredentialStatuses({
      lwaClientConfigured: true,
      refreshTokenConfigured: true,
      awsRoleConfigured: true,
      awsRegion: "us-east-1",
      marketplaceId: "ATVPDKIKX0DER",
      notificationDestinationConfigured: true,
      notificationSignatureConfigured: true,
    });

    expect(statuses).toHaveLength(6);
    expect(statuses.every((status) => status.state === "configured")).toBe(true);
    expect(JSON.stringify(statuses)).not.toContain("refresh-token-value");
    const tokenStatus = statuses.find((status) => status.requirementId === "amazon-lwa-token");
    expect(tokenStatus?.scopes ?? []).not.toEqual(expect.arrayContaining([
      "sellingpartnerapi::orders",
      "sellingpartnerapi::sellers",
      "sellingpartnerapi::solicitations",
    ]));
  });

  it("does not require AWS role or SigV4 material when SP-API signing is disabled", () => {
    const statuses = amazonMarketplaceCredentialStatuses({
      lwaClientConfigured: true,
      refreshTokenConfigured: true,
      marketplaceId: "ATVPDKIKX0DER",
      notificationDestinationConfigured: true,
      notificationSignatureConfigured: true,
    });

    expect(statuses.find((status) => status.requirementId === "amazon-aws-role-region"))
      .toMatchObject({
        state: "not-required",
        message: expect.stringContaining("only when the SDK user enables SigV4"),
      });
  });

  it("refreshes Login with Amazon access tokens", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ access_token: "access", token_type: "bearer", expires_in: 3600 }), { status: 200 })
    );

    await expect(refreshAmazonLwaAccessToken({
      refreshToken: "refresh-token",
      lwaClientId: "client-id",
      lwaClientSecret: "client-secret",
      fetch: fetchMock as unknown as typeof fetch,
    })).resolves.toMatchObject({ access_token: "access" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.amazon.com/auth/o2/token",
      expect.objectContaining({ method: "POST" }),
    );
    const body = ((fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams }).body;
    expect(body.get("grant_type")).toBe("refresh_token");
    expect(body.get("refresh_token")).toBe("refresh-token");
  });
});
