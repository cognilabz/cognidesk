# SDK-first voice and SMS integration migration workstream

Tracking issue: #41.

Status: final replacement implemented as split SDK-backed provider packages in this branch. The old monolith sources, tests, package exports, build entries, and legacy runtime-loader references for these five providers were removed after replacement package verification passed.

Last verified: 2026-06-21 with `npm view`, published package type archives, package tests, typechecks, builds, and built `/manifest` import smokes.

## Foundation

This branch reconciles the #20 and #21 foundation needed by #41:

- `pnpm-workspace.yaml` includes `integrations/*/*` nested provider workspaces.
- `packages/integration-kit` provides `defineIntegration()` manifest/handler binding, readiness/webhook result primitives, and shared speech-pipeline helpers.
- Provider packages use `/manifest` exports that do not import provider SDK runtime modules.
- Runtime package entrypoints support SDK client injection and expose `getRawClient()` as the raw upstream SDK escape hatch.
- No old `@cognidesk/integrations/*` compatibility bridge is added.

#22, #26, and #28 remain relevant for broader catalog/docs/CI rollout. This branch uses the split manifests as the source of truth and does not add an old-import bridge.

## Current owned surfaces

| Current path | Target package | Current transport | Verified SDK candidate | Migration decision |
| --- | --- | --- | --- | --- |
| `packages/integrations/src/voice/deepgram` | `@cognidesk/integration-voice-deepgram` | Handwritten REST STT/TTS plus generated Deepgram REST inventory | `@deepgram/sdk@5.4.0` | Viable. Use SDK for STT/TTS and expose the SDK client as the raw escape hatch. Drop generated full-provider clone from the replacement package. |
| `packages/integrations/src/voice/elevenlabs` | `@cognidesk/integration-voice-elevenlabs` | Handwritten REST/WebSocket helpers plus generated ElevenLabs REST OpenAPI clone | `@elevenlabs/elevenlabs-js@2.53.1` | Viable. Use SDK for Text to Speech, Speech to Text, models, voices, history, and Conversational AI. Reclassify coverage as normalized adapter plus raw SDK access, not Cognidesk-owned `full-provider-api`. |
| `packages/integrations/src/voice/twilio` | `@cognidesk/integration-voice-twilio` | Handwritten REST/TwiML/webhook helpers plus generated Twilio Voice-domain clone | `twilio@6.0.2` | Viable. Use the helper library for calls, TwiML, and request validation. Keep this as a separate voice package from SMS. |
| `packages/integrations/src/sms/twilio` | `@cognidesk/integration-sms-twilio` | Handwritten REST/webhook helpers plus generated Twilio Messaging-domain clone | `twilio@6.0.2` | Viable. Use the helper library for messages, incoming numbers, and request validation. Keep this as a separate SMS package from voice. |
| `packages/integrations/src/voice/vonage` | `@cognidesk/integration-voice-vonage` | Handwritten REST/webhook helpers plus generated Vonage voice REST bundle | `@vonage/server-sdk@3.27.0` | Viable with dependency caveat. The server SDK exposes Voice, Applications, Conversations, and Numbers APIs used by the current bundle, but it also depends on unrelated Vonage modules. Recheck whether service-specific `@vonage/voice`, `@vonage/applications`, `@vonage/conversations`, and `@vonage/numbers` better satisfy the per-category dependency rule before finalizing. |

## Verified SDK seams

- Deepgram: `DeepgramClient` from `@deepgram/sdk` exposes `client.listen.v1.media.transcribeFile(uploadable, request)` and `client.speak.v1.audio.generate(request)`. The package has ESM/CJS exports and Node 18+ published types.
- ElevenLabs: `ElevenLabsClient` from `@elevenlabs/elevenlabs-js` exposes `textToSpeech.convert`, `textToSpeech.stream`, `textToSpeech.convertWithTimestamps`, `speechToText.convert`, `speechToText.transcripts.get/delete`, `voices`, `models`, `history`, and `conversationalAi`.
- Twilio: `twilio` exposes the REST client with `messages`, `calls`, and `incomingPhoneNumbers`, `twilio.twiml.VoiceResponse`, and webhook helpers `validateRequest` and `validateRequestWithBody`.
- Vonage: `Vonage` from `@vonage/server-sdk` exposes `voice`, `applications`, `conversations`, and `numbers`, along with additional modules that may be too broad for a category-scoped provider package.

## Provider migration notes

### Deepgram voice

- Preserve `createDeepgramSpeechVoiceProvider`, `DeepgramSpeechClient`, credential readiness, STT/TTS result mappers, PCM WAV helpers, and the raw-client escape hatch.
- Replace handwritten fetch calls with an adapter over `DeepgramClient`, using `listen.v1.media.transcribeFile` for prerecorded PCM/WAV input and `speak.v1.audio.generate` for Aura TTS.
- Keep streaming Voice Agent and Flux out of scope unless a separate realtime adapter contract exists.
- Export a manifest-only entry that does not import `@deepgram/sdk` or instantiate `DeepgramClient`.

### ElevenLabs voice

- Preserve normalized speech provider behavior, signed URL helpers, transcript/conversation mappers, live-check credential states, and WebSocket URL constraints.
- Replace generated REST clone and direct request helpers with an `ElevenLabsClient` wrapper.
- Keep raw SDK access for advanced REST operations. Do not claim `full-provider-api` merely because the raw SDK is exposed.
- Manifest-only import must avoid `@elevenlabs/elevenlabs-js`, `node-fetch`, and `ws` runtime initialization.

### Twilio voice

- Preserve outbound call create/fetch/update/redirect/end semantics, Media Streams TwiML constraints, form webhook parsing/signature validation, readiness, and call status mappers.
- Use `twilio(accountSid, authTokenOrApiKey)` for `client.calls.create/fetch/update`, `twilio.twiml.VoiceResponse` for TwiML, and `twilio.validateRequest` or `validateRequestWithBody` for request signatures.
- Keep this separate from `@cognidesk/integration-sms-twilio`; shared local mapping helpers may live in an internal workspace only if they are not public provider packages.

### Twilio SMS

- Preserve send/list/fetch/cancel, scheduled send fail-closed validation, ContentSid/body/media exclusivity, webhook parsing/signature validation, account readiness, and incoming-number readiness.
- Use `client.messages.create/fetch/list/update` and `client.incomingPhoneNumbers.list`.
- Keep advanced Messaging Services, Verify, Conversations, Content, Studio, and compliance workflows as raw Twilio client access or explicit future normalized operations, not generated Cognidesk-owned clones.

### Vonage voice

- Preserve outbound call create/fetch/transfer, NCCO helpers, signed webhook parsing, JWT/basic auth handling, readiness, and fail-closed event URL behavior.
- Use `new Vonage(credentials, options).voice` for voice calls when `@vonage/server-sdk` is accepted.
- Because `@vonage/server-sdk` pulls many Vonage product modules, run a final dependency review against service-specific Vonage packages before adding it to `@cognidesk/integration-voice-vonage`.
- Keep broader Vonage platform products outside the voice package unless required by the current normalized voice surface.

## Manifest and package requirements

- Provider package names follow the #19 proposal: `@cognidesk/integration-voice-deepgram`, `@cognidesk/integration-voice-elevenlabs`, `@cognidesk/integration-voice-twilio`, `@cognidesk/integration-sms-twilio`, and `@cognidesk/integration-voice-vonage`.
- Manifest package names use the target split package names.
- Manifest-only exports must not import or initialize provider SDK clients.
- Runtime exports should support SDK client injection and expose the configured raw SDK client.
- Coverage metadata should separate normalized Cognidesk adapter operations from raw SDK availability.
- Replacement packages do not copy generated full-provider clones where the official SDK is viable.

## Verification

- `pnpm --filter @cognidesk/integration-kit test`
- `pnpm --filter @cognidesk/integration-kit typecheck`
- `pnpm --filter @cognidesk/integration-kit build`
- `pnpm --filter @cognidesk/integration-voice-deepgram typecheck`
- `pnpm --filter @cognidesk/integration-voice-elevenlabs typecheck`
- `pnpm --filter @cognidesk/integration-sms-twilio typecheck`
- `pnpm --filter @cognidesk/integration-voice-twilio typecheck`
- `pnpm --filter @cognidesk/integration-voice-vonage typecheck`
- `pnpm --filter @cognidesk/integration-voice-deepgram build`
- `pnpm --filter @cognidesk/integration-voice-elevenlabs build`
- `pnpm --filter @cognidesk/integration-sms-twilio build`
- `pnpm --filter @cognidesk/integration-voice-twilio build`
- `pnpm --filter @cognidesk/integration-voice-vonage build`
- `pnpm --filter @cognidesk/integration-kit --filter @cognidesk/integration-voice-deepgram --filter @cognidesk/integration-voice-elevenlabs --filter @cognidesk/integration-sms-twilio --filter @cognidesk/integration-voice-twilio --filter @cognidesk/integration-voice-vonage test`
- Built self-package `/manifest` import smokes for all five provider packages.
