---
Status: superseded by ADR-0085
---

# Place category profiles in the integration package

Superseded by ADR-0085. Concrete category profile defaults and helper metadata now belong in the shared integration kit or metadata-only catalog, while executable provider runtimes live in independent provider/category packages.

Cognidesk will keep the shared Integration Category Profile, Category Operation Catalog, and Provider Capability Coverage types in Core, while publishing concrete category profiles such as ticketing, email, voice, messaging, contact center, and handoff from `@cognidesk/integrations`. This keeps Core provider-neutral and alias-agnostic while still giving Provider Integrations useful category-specific defaults such as `ticket.read`, `email.draft.create`, or `voice.call.hangup`; Core and Studio reason over declared metadata such as Channel Capability, Provider Object, audience, side effects, policy, privacy, conformance, and coverage rather than hard-coding category runtime behavior.

Provider Integrations may implement partial, standard, or full coverage of a category profile and may declare extensions, but extensions must remain visible, schema-described, policy-governed, and conformance-visible. Category profiles are therefore product ergonomics and integration authoring defaults, not runtime permission grants or SDK-owned business policy.
