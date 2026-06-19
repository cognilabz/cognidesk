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
  it("routes generated full API operations for JSON and binary ElevenLabs endpoints", async () => {
      const fetchMock = vi.fn(async (url: string) => {
        if (url.endsWith("/audio")) {
          return new Response(new Uint8Array([1, 2]), { status: 200 });
        }
        return new Response(JSON.stringify({ ok: true, url }), { status: 200 });
      });
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      const json = await client.fullApi.CreateAgentRoute({
        json: { conversation_config: {} },
      } as never);
      const bytes = await client.fullApi.GetConversationAudioRoute({
        pathParams: { conversation_id: "conv_123" },
        responseType: "arrayBuffer",
      }) as ArrayBuffer;

      expect(json).toMatchObject({ ok: true });
      expect(new Uint8Array(bytes)).toEqual(new Uint8Array([1, 2]));
      expect(fetchMock.mock.calls[0]?.[0]).toBe(
        "https://api.elevenlabs.io/v1/convai/agents/create",
      );
      expect((fetchMock.mock.calls[0] as unknown[])[1]).toMatchObject({
        method: "POST",
        headers: expect.objectContaining({
          "xi-api-key": "test-key",
          "content-type": "application/json",
        }),
        body: JSON.stringify({ conversation_config: {} }),
      });
      await expect(client.fullApi.GetModels({
        json: { invalid: true },
      } as never)).rejects.toThrow("GET ElevenLabs requests cannot include");
    });

  it("exposes every ElevenLabs REST OpenAPI operation through generated functions", async () => {
      const fetchMock = vi.fn(async (url: string) =>
        new Response(JSON.stringify({ ok: true, url }), { status: 200 })
      );
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: fetchMock as unknown as typeof fetch,
      });

      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires full agent config.
      await expect(client.fullApi.CreateAgentRoute({
        json: { conversation_config: {} },
      })).resolves.toMatchObject({ ok: true });
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires full phone-number config.
      await expect(client.fullApi.CreatePhoneNumberRoute({
        json: { phone_number: "+15551234567", label: "support" },
      })).resolves.toMatchObject({ ok: true });
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires full outbound call config.
      await expect(client.fullApi.HandleSipTrunkOutboundCall({
        json: { agent_id: "agent_123", agent_phone_number_id: "pn_123" },
      })).resolves.toMatchObject({ ok: true });
      await expect(client.fullApi.GetWorkspaceWebhooksRoute({
        query: { include_usages: true },
      })).resolves.toMatchObject({ ok: true });
      await expect(client.requestOperation("GET /v1/convai/batch-calling/{batch_id}", {
        pathParams: { batch_id: "batch_123" },
      })).resolves.toMatchObject({ ok: true });

      expect(fetchMock.mock.calls.map((call) => call[0])).toEqual([
        "https://api.elevenlabs.io/v1/convai/agents/create",
        "https://api.elevenlabs.io/v1/convai/phone-numbers",
        "https://api.elevenlabs.io/v1/convai/sip-trunk/outbound-call",
        "https://api.elevenlabs.io/v1/workspace/webhooks?include_usages=true",
        "https://api.elevenlabs.io/v1/convai/batch-calling/batch_123",
      ]);
      expect((fetchMock.mock.calls[0] as unknown[])[1]).toMatchObject({
        method: "POST",
        headers: expect.objectContaining({
          "xi-api-key": "test-key",
          "content-type": "application/json",
        }),
        body: JSON.stringify({ conversation_config: {} }),
      });
    });

  it("fails closed for unknown generated operations and missing path params", async () => {
      const client = createElevenLabsVoiceClient({
        apiKey: "test-key",
        fetch: vi.fn(async () => new Response("{}", { status: 200 })) as unknown as typeof fetch,
      });

      // @ts-expect-error Missing path params intentionally exercises runtime validation.
      await expect(client.fullApi.GetBatchCall()).rejects.toThrow("Missing ElevenLabs path parameter 'batch_id'");
      // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
      await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown ElevenLabs REST OpenAPI operation");
    });
});
