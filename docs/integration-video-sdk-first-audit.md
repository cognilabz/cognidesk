# Video Integrations SDK-First Audit

Date: 2026-06-21

Tracking issue: https://github.com/cognilabz/cognidesk/issues/42

Former monolith paths lived under `packages/integrations/src/video/*`.

## Foundation Baseline

This workstream is based on the combined foundation stack `codex/integrations-foundation-stack`.

- #20 nested workspaces, #21 integration kit, #22 metadata catalog, #19 architecture ADR, #26 provider migration matrix, and #28 guardrails/CI/docs are treated as committed foundation.
- `integrations/video/zoom` and `integrations/video/whereby` are nested provider workspaces that publish independently.
- The old `@cognidesk/integrations/video/*` imports are not bridged from the new packages. Migration support should be documentation/codemods and #27 cleanup, not runtime compatibility shims.

## Existing Surface

| Provider | Former monolith module | Former implementation | Former coverage metadata |
| --- | --- | --- | --- |
| Zoom | Zoom video entry in the old aggregate integrations package | Hand-written REST helpers plus generated per-operation functions from Zoom Meetings API Hub. Webhook signature validation and endpoint URL validation are local helpers. | `provider-api-subset`; source `https://developers.zoom.us/api-hub/meetings/methods/endpoints.json`; API version `2`; generated 2026-06-18; 129 paths / 184 operations. |
| Whereby | Whereby video entry in the old aggregate integrations package | Hand-written REST helpers plus generated per-operation functions from Whereby REST OpenAPI. Webhook signature validation is a local helper. | `full-provider-api` for the REST API only; source `https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json`; API version `v1`; generated 2026-06-18; 20 paths / 27 operations. |

## Implemented Split Packages

| Provider | New package | Strategy | Manifest-only boundary |
| --- | --- | --- | --- |
| Zoom | `@cognidesk/integration-video-zoom` from `integrations/video/zoom` | Constrained generated Zoom Meetings API Hub REST support slice plus normalized meeting helpers, current-user readiness, and webhook helpers. No Zoom browser/media SDK dependency. | `@cognidesk/integration-video-zoom/manifest` exports only `zoomVideoProviderManifest`; package import smoke confirms no client/generated-client exports. |
| Whereby | `@cognidesk/integration-video-whereby` from `integrations/video/whereby` | Constrained generated Whereby REST support slice plus normalized meeting/theme/recording/transcription/summary/insights helpers, readiness, and webhook helpers. No Whereby browser/media SDK dependency. | `@cognidesk/integration-video-whereby/manifest` exports only `wherebyVideoProviderManifest`; package import smoke confirms no client/generated-client exports. |

Both packages use `@cognidesk/integration-kit` and export `*VideoIntegration` definitions whose handler keys must exactly match manifest operation aliases.

Fresh upstream source checksums captured on 2026-06-21:

| Provider | Source | SHA-256 |
| --- | --- | --- |
| Zoom Meetings API Hub | `https://developers.zoom.us/api-hub/meetings/methods/endpoints.json` | `07acb50f2a3f070b161ed57fbd9ca9ae83db42a6c1fa538f36b7e1c8300b6b06` |
| Whereby REST OpenAPI | `https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json` | `3d9aec0774ff42f149cfc67e94ae9b70c617957e278a5e89920807274d8cd77d` |

Current generated local artifact checksums:

| File | SHA-256 |
| --- | --- |
| `integrations/video/zoom/src/meetings-api-operations.generated.ts` | `1b01b13fba3e37da0b2c13c96e4f98137103ecb9108c8f877550df6fe2325a01` |
| `integrations/video/zoom/src/meetings-api-client.generated.ts` | `f235938e3a0d70c99c6412b33ce0505a01cf60e2bfb20da3343654b326cc4541` |
| `integrations/video/whereby/src/full-api-operations.generated.ts` | `7fc1ac349d8d41e13102e7df9c3e9ad4b26a4e273d6fd72036c9b9dd6f425577` |
| `integrations/video/whereby/src/full-api-client.generated.ts` | `8df17c0efdc1e64628c804285f27751cba66f955ec51ecb0e78bc3ac2092026c` |

## SDK Viability Matrix

| Provider | Candidate package | Maintainer/status evidence | Fit for current server REST adapter | Decision |
| --- | --- | --- | --- | --- |
| Zoom | `@zoom/meetingsdk` | npm latest `6.1.0`, modified 2026-06-02, maintainers include Zoom accounts. Zoom docs install it for Meeting SDK web via npm and describe it as an embedded web meeting/webinar experience: https://developers.zoom.us/docs/meeting-sdk/web/get-started/ and https://developers.zoom.us/docs/meeting-sdk/web/. | Not a REST scheduling/client replacement. It is a browser/web Meeting SDK for joining or embedding meetings. It should not be imported by server-side manifest-only or REST provider modules. | Do not use for `video.zoom` REST migration. Consider a separate browser/embed package only if product scope includes client-side meeting UI. |
| Zoom | `@zoom/videosdk` | npm latest `2.4.5`, modified 2026-06-01, Zoom-maintained. Zoom docs describe Video SDK web as custom video experiences using Zoom core technology: https://developers.zoom.us/docs/video-sdk/web/. | Not a Zoom Meetings REST API client and not equivalent to existing meeting scheduling, recording, registrant, report, and webhook surfaces. | Do not use for current REST provider. Consider only for a distinct custom-video/live-media integration. |
| Zoom | `@zoom/rtms` | npm latest `1.1.0`, modified 2026-04-16, Zoom-maintained. Docs describe Node bindings for real-time audio, video, and transcript streams, with Node >= 22 and platform constraints: https://zoom.github.io/rtms/js/. | Useful for real-time media stream workflows, but not a replacement for Meetings REST scheduling or current normalized operations. Heavy runtime/platform constraints also make manifest-only separation important. | Do not use for the current REST package. Track as a future `video.zoom-rtms` or live-media extension if needed. |
| Zoom | REST JavaScript client | npm search did not identify an official maintained Zoom REST API JavaScript client. Search results were unofficial or unrelated; official docs expose HTTP/OpenAPI REST endpoints at https://developers.zoom.us/docs/api/meetings/. | No viable official maintained REST SDK found. The current generated support slice remains the safest server-side strategy. | Keep a constrained generated Meetings API Hub support slice with source/version/checksum/allowlist metadata. |
| Whereby | `@whereby.com/browser-sdk` | npm latest `3.25.0`, modified 2026-06-19, maintained by Whereby. Docs install it for React/browser video UI: https://docs.whereby.com/whereby-for-web-browser/react-based-browser-sdk/quick-start. | Browser/media SDK, not a server REST client for meeting creation, recordings, transcriptions, summaries, insights, or webhooks. | Do not use for REST package. Consider a separate browser/embed package only if client-side video UI is in scope. |
| Whereby | `@whereby.com/core` | npm latest `1.14.0`, modified 2026-06-19, maintained by Whereby. Docs say it is intended for browser environments and needs WebRTC/media browser APIs, with Node requiring polyfills: https://docs.whereby.com/reference/core-sdk-reference. | Not a server REST client. | Do not use for REST package. |
| Whereby | `@whereby.com/assistant-sdk` | npm latest `1.2.86`, modified 2026-06-19, maintained by Whereby. Docs call it a Node.js-focused SDK for assistants and note closed beta / Enterprise availability: https://docs.whereby.com/reference/assistant-sdk-reference. | Useful for headless assistant/media workflows, not a replacement for REST meeting/resource management. Beta/plan gating makes it unsuitable as the default provider package dependency. | Do not use for current REST package. Track as optional future assistant/live-media extension only. |
| Whereby | REST JavaScript client | npm search did not identify an official maintained Whereby REST API client. Whereby REST docs show direct HTTP/fetch examples and require a server-side API key: https://docs.whereby.com/whereby-product-features/using-the-rest-api. | No viable official maintained REST SDK found. Existing direct/generated REST slice is appropriate. | Keep a constrained generated REST support slice with source/version/checksum/allowlist metadata. |

## Migration Decision

The final decision is to publish split provider packages as constrained generated REST support slices, not SDK-backed packages.

- `@cognidesk/integration-video-zoom` exposes the Zoom Meetings API Hub support slice, not full Zoom platform coverage.
- `@cognidesk/integration-video-whereby` exposes the Whereby REST support slice, not browser SDK/media coverage.
- Retained generated REST operation catalogs include source URL, provider API version, upstream source checksum, generated-at date, explicit operation allowlist, and generated artifact checksums.
- Neither package depends on `@zoom/meetingsdk`, `@zoom/videosdk`, `@zoom/rtms`, `@whereby.com/browser-sdk`, `@whereby.com/core`, or `@whereby.com/assistant-sdk`.
- Old monolith video provider exports, runtime loaders, provider references, source, tests, and generator scripts were removed after replacement package tests passed. The split packages intentionally do not provide old-import bridges.
