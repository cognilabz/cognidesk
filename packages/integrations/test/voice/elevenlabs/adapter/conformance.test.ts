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
  it("reports live conformance as credential-blocked until ElevenLabs credentials are configured", async () => {
      const result = await runProviderConformance({
        manifest: elevenLabsVoiceProviderManifest,
        channels: [{
          id: "voice",
          channel: "voice",
          providerPackageIds: [elevenLabsVoiceProviderManifest.id],
          enabledCapabilities: ["send", "receive", "media", "elevenlabs.speech-to-text"],
        }],
        credentialStatuses: elevenLabsVoiceCredentialStatuses({}),
        live: {
          enabled: true,
          checks: createElevenLabsVoiceLiveChecks({
            apiKey: "missing",
            client: {
              async listModels() {
                return [{ model_id: "eleven_multilingual_v2", name: "Multilingual", can_do_text_to_speech: true }];
              },
            },
          }),
        },
      });

      expect(result.status).toBe("credential-blocked");
      expect(result.checks.some((check) =>
        check.id === "provider.live.models" && check.status === "credential-blocked"
      )).toBe(true);
    });

  it("passes provider conformance when ElevenLabs readiness and live check are configured", async () => {
      const result = await runProviderConformance({
        manifest: elevenLabsVoiceProviderManifest,
        channels: [{
          id: "voice",
          channel: "voice",
          providerPackageIds: [elevenLabsVoiceProviderManifest.id],
          enabledCapabilities: ["send", "receive", "media", "elevenlabs.conversation-signed-url"],
        }],
        credentialStatuses: elevenLabsVoiceCredentialStatuses({ apiKey: "configured" }),
        live: {
          enabled: true,
          checks: createElevenLabsVoiceLiveChecks({
            apiKey: "configured",
            client: {
              async listModels() {
                return [{ model_id: "eleven_multilingual_v2", name: "Multilingual", can_do_text_to_speech: true }];
              },
            },
          }),
        },
      });

      expect(result.status).toBe("passed");
      expect(result.checks).toContainEqual(expect.objectContaining({
        id: "provider.live.models",
        status: "passed",
      }));
    });
});
