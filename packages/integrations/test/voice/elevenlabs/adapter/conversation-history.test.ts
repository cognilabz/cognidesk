import {
  ELEVENLABS_API_FAMILIES,
  ELEVENLABS_API_SPEC_SOURCES,
  ELEVENLABS_FULL_API_GENERATED_FUNCTION_COUNT,
  ELEVENLABS_FULL_API_OPERATION_COUNT,
  ELEVENLABS_FULL_API_PATH_COUNT,
  createElevenLabsSpeechVoiceProvider,
  createElevenLabsVoiceClient,
  createElevenLabsVoiceLiveChecks,
  describe,
  elevenLabsVoiceCredentialStatuses,
  elevenLabsVoiceProviderManifest,
  expect,
  fakeVoiceSession,
  it,
  runProviderConformance,
  type VoiceProviderEvent,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("creates Conversational AI signed URLs and reads conversation resources", async () => {
      const fetchMock = vi.fn(async (url: string) => {
        if (url.includes("/get-signed-url")) {
          return new Response(JSON.stringify({ signed_url: "wss://signed.example.test", conversation_id: "conv_123" }), { status: 200 });
        }
        if (url.endsWith("/audio")) {
          return new Response(new Uint8Array([7, 8, 9]), { status: 200 });
        }
        if (url.includes("/convai/conversations?")) {
          return new Response(JSON.stringify({ conversations: [{ agent_id: "agent_123", conversation_id: "conv_123" }] }), { status: 200 });
        }
        return new Response(JSON.stringify({ agent_id: "agent_123", conversation_id: "conv_123", transcript: [] }), { status: 200 });
      });
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      const signed = await client.getConversationSignedUrl({
        agentId: "agent_123",
        includeConversationId: true,
        environment: "production",
      });
      const conversations = await client.listConversations({
        agentId: "agent_123",
        pageSize: 10,
        toolNames: ["lookup_order"],
        mainLanguages: ["en", "de"],
      });
      const details = await client.getConversation("conv_123");
      const audio = await client.getConversationAudio("conv_123");
  
      expect(signed).toMatchObject({ signed_url: "wss://signed.example.test", conversation_id: "conv_123" });
      expect(conversations.conversations[0]?.conversation_id).toBe("conv_123");
      expect(details.agent_id).toBe("agent_123");
      expect(new Uint8Array(audio)).toEqual(new Uint8Array([7, 8, 9]));
      expect(fetchMock.mock.calls[0]?.[0]).toBe(
        "https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=agent_123&include_conversation_id=true&environment=production",
      );
      expect(fetchMock.mock.calls[1]?.[0]).toBe(
        "https://api.elevenlabs.io/v1/convai/conversations?agent_id=agent_123&page_size=10&tool_names=lookup_order&main_languages=en&main_languages=de",
      );
    });

  it("covers history, token, user, and subscription helpers", async () => {
      const fetchMock = vi.fn(async (url: string) => {
        if (url.endsWith("/audio") || url.endsWith("/download")) {
          return new Response(new Uint8Array([7, 7]), { status: 200 });
        }
        return new Response(JSON.stringify({
          history: [],
          subscription: { tier: "creator" },
          xi_api_key: "token",
        }), { status: 200 });
      });
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      await client.listHistory({ pageSize: 5, voiceId: "voice_123" });
      await client.getHistoryItem("hist_123");
      await client.getHistoryAudio("hist_123");
      await client.downloadHistoryItems({ historyItemIds: ["hist_123"] });
      await client.deleteHistoryItem("hist_123");
      await client.createSingleUseToken({ tokenType: "tts_websocket" });
      await client.getUser();
      await client.getUserSubscription();
  
      expect(fetchMock.mock.calls.map((call) => call[0])).toEqual([
        "https://api.elevenlabs.io/v1/history?page_size=5&voice_id=voice_123",
        "https://api.elevenlabs.io/v1/history/hist_123",
        "https://api.elevenlabs.io/v1/history/hist_123/audio",
        "https://api.elevenlabs.io/v1/history/download",
        "https://api.elevenlabs.io/v1/history/hist_123",
        "https://api.elevenlabs.io/v1/single-use-token/tts_websocket",
        "https://api.elevenlabs.io/v1/user",
        "https://api.elevenlabs.io/v1/user/subscription",
      ]);
      expect((fetchMock.mock.calls[4] as unknown[])[1]).toMatchObject({ method: "DELETE" });
    });
});
