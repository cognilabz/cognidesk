# Voice SDK-First Integration Migration

Status: implementation in progress under tracking issue #40.

This workstream covers the cloud speech and voice AI integrations currently owned by:

- `packages/integrations/src/voice/aws-speech`
- `packages/integrations/src/voice/azure-speech`
- `packages/integrations/src/voice/google-speech`
- `packages/integrations/src/voice/openai`

## Dependency Gate

The provider package implementation depends on these foundation workstreams:

- Issue #20: nested provider workspaces and independent provider releases.
- Issue #21: `@cognidesk/integration-kit` executable operation contracts and reusable provider conformance tests.
- Issue #22: metadata-only integration catalog and explicit runtime registration.

Repository state after reconciliation:

- `pnpm-workspace.yaml` includes nested provider workspaces at `integrations/*/*`.
- `packages/integration-kit` provides manifest/handler binding, readiness helpers, category profiles, and conformance helpers.
- `@cognidesk/integration-voice-aws-speech`, `@cognidesk/integration-voice-azure-speech`, and `@cognidesk/integration-voice-google-speech` live under `integrations/voice/*`.
- `@cognidesk/integration-voice-openai` remains the canonical OpenAI Realtime voice package, lives at `integrations/voice/openai`, and now carries provider manifest metadata.

Old monolith deletion should wait until replacement package tests, catalog/docs, and smoke checks pass.

## Naming And Voice Boundary

The ChatGPT package-shape rule applies here: source directories live under `integrations/{category}/{provider}`, while public package names are flattened but keep the integration category visible. That means the canonical OpenAI Realtime package is `integrations/voice/openai` published as `@cognidesk/integration-voice-openai`, not `@cognidesk/openai` and not a retained `@cognidesk/integrations/voice/openai` subpath.

The package and manifest must make the integration identity visible:

- `package.json` declares `cognidesk.release = "independent-provider"`, `cognidesk.category = "voice"`, and `cognidesk.provider = "openai"`.
- The manifest metadata includes `integrationName = "OpenAI Realtime Voice Integration"`, `integrationPackageName = "@cognidesk/integration-voice-openai"`, and explicit `/manifest` and `/runtime` entry points.
- Manifest-only imports stay SDK-free; runtime imports own the official `openai` SDK.

`@cognidesk/voice-websocket` is different on purpose. It is the browser-facing Cognidesk voice transport and session protocol, not an external Provider Integration. It stays in `packages/voice-websocket`, remains excluded from provider-package conformance as infrastructure, and should not be moved to `integrations/voice/websocket`.

The current duplicate `packages/integrations/src/voice/openai` path is old monolith residue. It exists only until the `@cognidesk/integration-voice-openai` replacement, catalog/docs, application imports, and smoke checks pass; issue #27 then removes the monolith import surface rather than bridging it.

## Verified SDK Targets

The candidate packages were checked against npm on 2026-06-21:

| Provider | Target package | Version seen | Decision |
| --- | --- | ---: | --- |
| AWS Speech | `@aws-sdk/client-transcribe-streaming` | `3.1073.0` | Use for Amazon Transcribe Streaming. |
| AWS Speech | `@aws-sdk/client-polly` | `3.1073.0` | Use for Amazon Polly synthesis. |
| Azure Speech | `microsoft-cognitiveservices-speech-sdk` | `1.50.0` | Use for speech recognizer/synthesizer flows after Node/runtime compatibility spike. |
| Google Speech | `@google-cloud/speech` | `7.4.0` | Use for Speech-to-Text; pair with `@google-cloud/text-to-speech` or document why direct TTS remains necessary. |
| OpenAI Voice | `openai` | `^6.44.0` in `@cognidesk/integration-voice-openai` | Keep the official OpenAI client and consolidate around one voice adapter package. |

## Current State By Provider

### AWS Speech

Current code already has an SDK-shaped seam:

- `createAwsSdkSpeechClient()` accepts structural AWS SDK command clients and command constructors.
- Transcription maps Cognidesk buffered PCM into `StartStreamTranscriptionCommand` input and normalizes final transcript events.
- Synthesis maps Cognidesk text into `SynthesizeSpeechCommand`, normalizes audio streams, and resamples Polly PCM where needed.
- The manifest currently imports generated operation counts and still exposes generated full API inventory from the monolith.

Migration target:

- Create `@cognidesk/integration-voice-aws-speech`.
- Add `@aws-sdk/client-transcribe-streaming` and `@aws-sdk/client-polly` as package-local dependencies.
- Keep structural client injection and expose created AWS clients as the raw-client escape hatch.
- Remove generated full-provider clones from the migrated package surface.
- Keep Cognidesk normalized voice events, `SpeechPipelineVoiceProvider` behavior, credential readiness, Polly PCM resampling, and Transcribe final-result aggregation tests.

### Azure Speech

Current code is still direct REST:

- `createAzureSpeechClient()` posts short-audio WAV to Azure Speech-to-Text REST.
- TTS posts SSML to the Azure Text-to-Speech REST endpoint.
- The manifest advertises generated azure-rest-api-specs inventory, while the actual STT/TTS adapter uses endpoints outside that generated surface.

Migration target:

- Create `@cognidesk/integration-voice-azure-speech`.
- Add `microsoft-cognitiveservices-speech-sdk` as the package-local runtime dependency if the Node ESM/build spike passes.
- Preserve short buffered-audio pipeline semantics unless the shared voice contract gains a true streaming speech-provider operation.
- Keep direct REST only as an explicit fallback slice if the official SDK cannot support the Cognidesk buffered pipeline cleanly.
- Expose a raw Speech SDK client/config escape hatch without claiming full Azure Speech API coverage.

### Google Speech

Current code is direct REST:

- STT calls `https://speech.googleapis.com/v1/speech:recognize`.
- TTS calls `https://texttospeech.googleapis.com/v1/text:synthesize`.
- Auth is currently token/provider based and not the standard Google auth client shape.

Migration target:

- Create `@cognidesk/integration-voice-google-speech`.
- Add `@google-cloud/speech` for STT.
- Verify `@google-cloud/text-to-speech` for TTS before deciding whether TTS stays as a documented direct REST support slice.
- Preserve token/client injection, quota project behavior, normalized metadata, WAV stripping for Linear16, and synchronous pipeline constraints.
- Do not claim streaming recognize, long-running recognize, or long audio synthesis unless explicitly implemented.

### OpenAI Voice

Current state is split:

- `packages/integrations/src/voice/openai` exports the monolith `@cognidesk/integrations/voice/openai` adapter.
- `integrations/voice/openai` publishes `@cognidesk/integration-voice-openai` as the canonical OpenAI Realtime voice package.
- The monolith lazily imports `openai` only when a client is not injected, which is the right manifest-only import direction.

Migration target:

- Reconcile around the standalone package rather than creating a second OpenAI voice implementation.
- Align the package dependency to the workspace's selected `openai` version.
- Keep OpenAI Realtime WebSocket usage through the official `openai` client.
- Preserve session defaults, control-tool projection, normalized transcript/audio events, speech queue completion rules, and conformance tests.
- Ensure the manifest export can be imported without constructing an OpenAI client or opening a Realtime socket.

## Manifest-Only Import Rule

Provider package manifest entrypoints must be metadata-only. Importing a manifest or future catalog record must not initialize provider clients, load SDK runtime clients unnecessarily, open sockets, read credentials, or require provider-specific environment setup.

Allowed in manifest-only paths:

- Static manifest data.
- Cognidesk manifest/category types and helpers.
- Type-only imports that are erased from JavaScript output.
- Operation names, coverage notes, and official documentation evidence.

Disallowed in manifest-only paths:

- Runtime imports from `openai`, `@aws-sdk/*`, `microsoft-cognitiveservices-speech-sdk`, `@google-cloud/*`, or future provider SDKs.
- Client constructors.
- Credential resolution.
- Network or filesystem side effects.

## Dedicated GitHub Issue Body

```md
## Goal

Migrate cloud speech and voice AI integrations out of `@cognidesk/integrations` into SDK-backed voice provider packages while preserving Cognidesk's normalized voice operations.

## Scope

- Create `@cognidesk/integration-voice-aws-speech` using `@aws-sdk/client-transcribe-streaming` and `@aws-sdk/client-polly`.
- Create `@cognidesk/integration-voice-azure-speech` using `microsoft-cognitiveservices-speech-sdk` if the Node/ESM/runtime spike passes; otherwise document the unsupported SDK gap and retain a reviewed direct support slice.
- Create `@cognidesk/integration-voice-google-speech` using `@google-cloud/speech`; verify `@google-cloud/text-to-speech` for TTS before deciding whether direct TTS remains necessary.
- Reconcile OpenAI voice with the existing `@cognidesk/integration-voice-openai` package and the official `openai` client instead of duplicating the adapter.
- Remove generated full-provider clones from migrated voice packages.
- Preserve normalized Cognidesk voice events, speech pipeline behavior, readiness, mapper functions, raw-client escape hatches, and provider conformance tests.
- Keep manifest-only imports metadata-only and free of provider SDK runtime initialization.

## Blockers

- Depends on #20 for nested provider workspaces and independent provider releases.
- Depends on #21 for `@cognidesk/integration-kit` operation contracts and provider package conformance tests.
- Depends on #22 for metadata-only catalog and explicit runtime registration.

## Acceptance Criteria

- Each migrated voice package installs only its provider SDK dependencies plus shared Cognidesk packages.
- Manifest declarations exactly match executable operation handlers.
- Manifest-only imports do not initialize OpenAI, AWS, Azure, or Google clients.
- AWS uses official AWS SDK v3 clients for Transcribe Streaming and Polly.
- Azure uses the official Speech SDK where viable, with documented fallback if not.
- Google uses official Google Cloud Speech SDK for STT and has a verified TTS decision.
- OpenAI has one canonical standalone voice package backed by the official `openai` client.
- Raw provider clients remain accessible as escape hatches without expanding Cognidesk coverage claims to full provider APIs.
- Contract, package import, readiness, voice conformance, and package smoke tests pass.
```
