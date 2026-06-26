import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-email-gmail official SDK runtime", () => {
  it("constructs and exposes the official @googleapis/gmail raw client", async () => {
    vi.resetModules();

    const setCredentials = vi.fn();
    const OAuth2 = vi.fn(function OAuth2(this: { setCredentials?: typeof setCredentials }) {
      this.setCredentials = setCredentials;
    });
    const rawClient = { marker: "official-gmail-client" };
    const gmail = vi.fn(() => rawClient);

    vi.doMock("@googleapis/gmail", () => ({
      auth: { OAuth2 },
      gmail,
    }));

    try {
      const { createGmailEmailClient, gmailAuth } = await import("../src/client.js");

      const client = createGmailEmailClient({
        accessToken: "access-token-1",
        rootUrl: "https://gmail.example.test/",
      });

      expect(gmailAuth.OAuth2).toBe(OAuth2);
      expect(OAuth2).toHaveBeenCalledTimes(1);
      expect(setCredentials).toHaveBeenCalledWith({ access_token: "access-token-1" });
      expect(gmail).toHaveBeenCalledWith({
        version: "v1",
        rootUrl: "https://gmail.example.test/",
        auth: expect.objectContaining({ setCredentials }),
      });
      expect(client.rawClient).toBe(rawClient);
    } finally {
      vi.doUnmock("@googleapis/gmail");
      vi.resetModules();
    }
  });
});
