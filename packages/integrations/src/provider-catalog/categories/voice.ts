import type { IntegrationProviderReference } from "../types.js";

export const voiceProviderReferences = [
  {
    "id": "voice.azure-speech",
    "category": "voice",
    "provider": "azure-speech",
    "importPath": "@cognidesk/integrations/voice/azure-speech",
    "modulePath": "./voice/azure-speech/index.js",
    "manifestExport": "azureSpeechProviderManifest"
  },
  {
    "id": "voice.aws-speech",
    "category": "voice",
    "provider": "aws-speech",
    "importPath": "@cognidesk/integrations/voice/aws-speech",
    "modulePath": "./voice/aws-speech/index.js",
    "manifestExport": "awsSpeechProviderManifest"
  },
  {
    "id": "voice.google-speech",
    "category": "voice",
    "provider": "google-speech",
    "importPath": "@cognidesk/integrations/voice/google-speech",
    "modulePath": "./voice/google-speech/index.js",
    "manifestExport": "googleSpeechProviderManifest"
  },
  {
    "id": "voice.openai",
    "category": "voice",
    "provider": "openai",
    "importPath": "@cognidesk/integrations/voice/openai",
    "modulePath": "./voice/openai/index.js",
    "manifestExport": "openAIVoiceProviderManifest"
  },
  {
    "id": "voice.sip",
    "category": "voice",
    "provider": "sip",
    "importPath": "@cognidesk/integrations/voice/sip",
    "modulePath": "./voice/sip/index.js",
    "manifestExport": "sipVoiceProviderManifest"
  },
] as const satisfies readonly IntegrationProviderReference[];
