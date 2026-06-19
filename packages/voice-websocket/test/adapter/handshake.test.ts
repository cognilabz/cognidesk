import { describe, expect, it } from "vitest";
import { createInMemoryVoiceSessionStore, createVoiceSocketHandshake } from "../../src/index.js";
import { createTokenSequence, fakeStartVoiceResult } from "./helpers.js";

describe("@cognidesk/voice-websocket handshake", () => {
  it("creates short-lived single-use socket tokens from HTTP handshakes", async () => {
      const store = createInMemoryVoiceSessionStore({
        createToken: createTokenSequence("start-token", "reconnect-token"),
      });
      const handshake = createVoiceSocketHandshake({
        store,
        tokenTtlMs: 60_000,
      });

      const socket = await handshake.createSocket({
        result: fakeStartVoiceResult(),
        request: new Request("https://demo.test/api/voice/conversations"),
        basePath: "/api",
      });

      expect(socket).toEqual({
        url: "wss://demo.test/api/voice/connections/voice_connection_1/socket?token=start-token",
        token: "start-token",
        expiresAt: expect.any(String),
        protocol: "cognidesk.voice.v1",
      });
      const firstClaim = await store.claimToken({
        connectionId: "voice_connection_1",
        token: "start-token",
      });
      const secondClaim = await store.claimToken({
        connectionId: "voice_connection_1",
        token: "start-token",
      });
      expect(firstClaim?.session.id).toBe("voice_connection_1");
      expect(firstClaim?.reconnect).toBe(false);
      expect(secondClaim).toBeNull();
    });
});
