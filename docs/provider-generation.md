# Provider Generation

Provider Integration work should use generated artifacts whenever the provider publishes a stable machine-readable source of truth. Handwritten docs are reserved for product narrative, architecture, trade-offs, and examples.

## Generated Layers

Provider API surfaces are generated from official provider specs or checked inventories when available:

```bash
pnpm providers:generate:list
pnpm providers:generate
```

Use a scoped generator during development when only one provider changed:

```bash
pnpm providers:generate -- --only=generate-elevenlabs-full-api
```

The generated source files are committed and published from `@cognidesk/integrations`. Consumer installs must not fetch upstream specs or generate provider code.

Generated provider files expose the provider's raw API surface; they do not decide the Cognidesk category semantics by themselves. A generated integration normally has four layers:

- `full-api-*.generated.ts`: generated operation catalog, typed request/response maps, and per-operation `fullApi` functions from the provider source of truth
- `client.ts` and `contracts.ts`: handwritten or scaffolded convenience adapter for the common SDK path, plus the typed `requestOperation` escape hatch into generated operations
- `manifest.ts`: handwritten provider capabilities, coverage claims, credential requirements, privacy notes, limitations, and evidence
- Integration Category Profile attachment: automatic SDK metadata from `defineIntegrationProviderPackage`, based on the manifest category and declared capabilities

Do not manually edit generated files to add Cognidesk behavior. Add provider semantics in `client.ts`, `contracts.ts`, `manifest.ts`, webhooks/readiness helpers, or a generator template that emits those handwritten-layer files. Duplicate provider `operationId` values are acceptable in raw specs as long as the generated stable operation IDs and function names remain unique.

The generated/manual boundary is reviewed package-wide by `packages/integrations/test/generated-surface-integrity.test.ts`. A real duplicate is a repeated stable SDK operation key, repeated generated function name, stale generated chunk, missing schema/client/operation export, or generated API surface that is not represented in provider metadata. A typed helper that overlaps a generated endpoint, such as `sendMessage()` next to a provider-native generated create-message operation, is acceptable when the helper is the friendly Cognidesk SDK path and the generated API remains available as the raw provider escape hatch.

Voice Speech Provider API inventories are generated when the provider exposes a stable official spec or model:

```bash
node scripts/generate-speech-provider-apis.mjs
```

That script currently generates:

- AWS Speech from official AWS Smithy models for Transcribe Streaming, Transcribe, and Polly
- Google Cloud Speech from Speech-to-Text and Text-to-Speech v1 Discovery documents
- Deepgram Speech from Deepgram's official OpenAPI document
- Azure Speech from Microsoft `azure-rest-api-specs` Speech data-plane files

The generated voice files expose operation inventories and caller interfaces. They do not replace the handwritten Cognidesk speech pipeline adapters, because buffering, audio format conversion, turn boundaries, browser protocol events, and background LLM handoff are Cognidesk behavior rather than provider OpenAPI behavior. Azure short-audio STT/TTS remains handwritten against Microsoft REST docs because those exact adapter endpoints are not represented in the generated Azure swagger bundle.

The public Provider Integration Catalog is generated from built Provider Manifests:

```bash
pnpm --filter @cognidesk/integrations build
pnpm providers:catalog
```

The generator writes `website/guides/provider-integrations-catalog.md`. Do not edit that catalog by hand; change the provider manifest, rebuild, and regenerate the catalog instead.

The API reference is generated from built declaration files:

```bash
pnpm --filter @cognidesk/integrations build
pnpm docs:generate
```

`pnpm docs:generate` also refreshes the Provider Integration Catalog before running TypeDoc.

## What Stays Handwritten

Keep these documents handwritten because they explain intent rather than mirror manifest data:

- guides such as `website/guides/voice.md` and `website/guides/provider-packages.md`
- release workflow notes such as `docs/releasing.md`
- ADRs and coverage audits that justify a boundary or trade-off
- examples, migration notes, and provider setup narratives

When a provider has no official machine-readable spec, do not imply full-provider coverage through prose. Declare the scoped `coverage.scope` in the manifest, cite evidence, and generate only the catalog entry from that manifest.

## Verification

Before releasing generated provider changes, run:

```bash
pnpm --filter @cognidesk/integrations build
pnpm docs:generate
pnpm --filter @cognidesk/integrations test
pnpm --filter @cognidesk/integrations typecheck
pnpm --dir packages/integrations test -- generated-surface-integrity
```

Run `pnpm docs:build` when MkDocs is installed in the environment.
