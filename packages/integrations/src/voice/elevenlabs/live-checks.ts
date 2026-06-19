import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { createElevenLabsVoiceClient } from "./client.js";
import type { ElevenLabsCredentialStatusInput, ElevenLabsLiveCheckOptions } from "./contracts.js";
import { elevenLabsVoiceProviderManifest } from "./manifest.js";

export function elevenLabsVoiceCredentialStatuses(
  input: ElevenLabsCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const configured = Boolean(input.apiKey);
  return [{
    providerPackageId: elevenLabsVoiceProviderManifest.id,
    requirementId: "elevenlabs-api-key",
    state: configured ? "configured" : "missing",
    message: configured
      ? "ElevenLabs API key is configured."
      : "An ElevenLabs API key is required for server-side voice API requests.",
  }];
}

export function createElevenLabsVoiceLiveChecks(options: ElevenLabsLiveCheckOptions) {
  return [{
    id: "models",
    description: "ElevenLabs API key can access the models endpoint.",
    requiredCredentialIds: ["elevenlabs-api-key"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createElevenLabsVoiceClient(options);
      const models = await client.listModels();
      if (context.signal?.aborted) throw new Error("ElevenLabs live models check aborted.");
      return {
        details: {
          modelCount: models.length,
          textToSpeechModels: models.filter((model) => model.can_do_text_to_speech).length,
        },
      };
    },
  }];
}
