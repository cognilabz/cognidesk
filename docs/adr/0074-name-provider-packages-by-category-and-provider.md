---
Status: accepted; expanded by ADR-0085
---

# Name provider packages by category and provider

ADR-0085 is the current source of truth for official provider package naming, SDK-backed runtime boundaries, explicit registration, and catalog/runtime separation.

The restored decision uses separate packages named `@cognidesk/integration-{provider-category}-{provider}`, such as `@cognidesk/integration-voice-twilio`, `@cognidesk/integration-email-gmail`, `@cognidesk/integration-ticketing-zendesk`, `@cognidesk/integration-workplace-slack`, and `@cognidesk/integration-contact-center-genesys-cloud`, while provider-neutral SDK/runtime packages keep their existing package style.
