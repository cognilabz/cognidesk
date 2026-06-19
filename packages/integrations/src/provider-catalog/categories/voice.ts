import type { IntegrationProviderReference } from "../types.js";

export const voiceProviderReferences = [
  {
    "id": "voice.elevenlabs",
    "category": "voice",
    "provider": "elevenlabs",
    "importPath": "@cognidesk/integrations/voice/elevenlabs",
    "modulePath": "./voice/elevenlabs/index.js",
    "manifestExport": "elevenLabsVoiceProviderManifest"
  },
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
    "id": "voice.deepgram",
    "category": "voice",
    "provider": "deepgram",
    "importPath": "@cognidesk/integrations/voice/deepgram",
    "modulePath": "./voice/deepgram/index.js",
    "manifestExport": "deepgramSpeechProviderManifest"
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
  {
    "id": "voice.twilio",
    "category": "voice",
    "provider": "twilio",
    "importPath": "@cognidesk/integrations/voice/twilio",
    "modulePath": "./voice/twilio/index.js",
    "manifestExport": "twilioVoiceProviderManifest"
  },
  {
    "id": "voice.vonage",
    "category": "voice",
    "provider": "vonage",
    "importPath": "@cognidesk/integrations/voice/vonage",
    "modulePath": "./voice/vonage/index.js",
    "manifestExport": "vonageVoiceProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
