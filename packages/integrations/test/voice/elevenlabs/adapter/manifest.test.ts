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
  it("exports an official provider manifest for ElevenLabs voice", () => {
      expect(elevenLabsVoiceProviderManifest).toMatchObject({
        id: "voice.elevenlabs",
        packageName: "@cognidesk/integrations",
        category: "voice",
        provider: "elevenlabs",
        trustLevel: "official",
      });
      expect(elevenLabsVoiceProviderManifest.capabilities.map((capability) => capability.capability))
        .toEqual(expect.arrayContaining([
          "send",
          "receive",
          "media",
          "elevenlabs.conversation-signed-url",
          "elevenlabs.speech-to-text",
        ]));
      expect(elevenLabsVoiceProviderManifest.credentialRequirements.map((requirement) => requirement.id))
        .toEqual(["elevenlabs-api-key"]);
      expect(elevenLabsVoiceProviderManifest.coverage).toMatchObject({
        scope: "full-provider-api",
      });
      expect(elevenLabsVoiceProviderManifest.coverage.notes.join(" "))
        .toContain("every operation in ElevenLabs' official public REST OpenAPI");
      expect(elevenLabsVoiceProviderManifest.coverage.notes.join(" "))
        .toContain("WebSocket URL builders");
      expect(elevenLabsVoiceProviderManifest.coverage.notes.join(" "))
        .toContain("Realtime WebSocket protocol behavior is not represented");
      expect(elevenLabsVoiceProviderManifest.coverage.notes.join(" "))
        .not.toContain("not typed convenience surfaces");
      expect(elevenLabsVoiceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
        .toEqual(expect.arrayContaining([
          ELEVENLABS_API_SPEC_SOURCES.openapiJson,
          ELEVENLABS_API_SPEC_SOURCES.docsApiReference,
        ]));
      expect(ELEVENLABS_API_SPEC_SOURCES.openapiJson).toBe("https://api.elevenlabs.io/openapi.json");
      expect(elevenLabsVoiceProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
        provider: "elevenlabs-rest-openapi",
        apiVersion: "1.0",
        documentedPathCount: 253,
        documentedOperationCount: 317,
        implementedOperationCount: 317,
        unimplementedOperationCount: 0,
        generatedFunctionCount: 317,
      });
      expect(ELEVENLABS_FULL_API_PATH_COUNT).toBe(253);
      expect(ELEVENLABS_FULL_API_OPERATION_COUNT).toBe(317);
      expect(ELEVENLABS_FULL_API_GENERATED_FUNCTION_COUNT).toBe(317);
      expect(ELEVENLABS_API_FAMILIES).toEqual(expect.arrayContaining([
        "agents",
        "conversations",
        "text-to-speech",
        "speech-to-text",
        "speech-to-speech",
        "sound-generation",
        "audio-isolation",
        "forced-alignment",
        "history",
        "webhooks",
      ]));
    });
});
