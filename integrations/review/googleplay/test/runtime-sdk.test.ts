import { describe, expect, it, vi } from "vitest";
import { createGooglePlayReviewsClient } from "../src/client.js";

const sdkMock = vi.hoisted(() => {
  const setCredentials = vi.fn();
  const OAuth2 = vi.fn(function OAuth2(this: { setCredentials?: typeof setCredentials }) {
    this.setCredentials = setCredentials;
  });
  const list = vi.fn(async () => ({ data: { reviews: [] } }));
  const rawClient = { reviews: { list, get: vi.fn(), reply: vi.fn() } };
  const androidpublisher = vi.fn(() => rawClient);

  return {
    OAuth2,
    androidpublisher,
    list,
    rawClient,
    setCredentials,
  };
});

vi.mock("@googleapis/androidpublisher", () => ({
  auth: { OAuth2: sdkMock.OAuth2, JWT: vi.fn() },
  androidpublisher: sdkMock.androidpublisher,
}));

describe("@cognidesk/integration-review-googleplay official SDK runtime", () => {
  it("constructs and exposes the official @googleapis/androidpublisher raw client", async () => {
    const client = createGooglePlayReviewsClient({
      packageName: "com.example.app",
      accessToken: "access-token-1",
    });
    await client.listReviews({ maxResults: 1 });

    expect(sdkMock.androidpublisher).toHaveBeenCalledWith({ version: "v3" });
    expect(client.rawClient).toBe(sdkMock.rawClient);
    expect(sdkMock.OAuth2).toHaveBeenCalledTimes(1);
    expect(sdkMock.setCredentials).toHaveBeenCalledWith({ access_token: "access-token-1" });
    expect(sdkMock.list).toHaveBeenCalledWith(expect.objectContaining({
      packageName: "com.example.app",
      maxResults: 1,
      auth: expect.objectContaining({ setCredentials: sdkMock.setCredentials }),
    }));
  });
});
