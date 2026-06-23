import { generateAwsSpeech } from "./generate-speech-provider-apis/providers/aws-speech.mjs";
import { generateGoogleSpeech } from "./generate-speech-provider-apis/providers/google-speech.mjs";
import { generateAzureSpeech } from "./generate-speech-provider-apis/providers/azure-speech.mjs";

await generateAwsSpeech();
await generateGoogleSpeech();
await generateAzureSpeech();
