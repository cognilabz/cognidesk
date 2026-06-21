---
Status: superseded by ADR-0081; package naming restored and replaced by ADR-0085
---

# Name provider packages by category and provider

Superseded by ADR-0081, then restored and replaced by ADR-0085. ADR-0085 is the current source of truth for official provider package naming, SDK-backed runtime boundaries, explicit registration, and removal of old aggregate imports.

The superseded decision proposed separate packages named `@cognidesk/{provider-category}-{provider}`, such as `@cognidesk/voice-twilio`, `@cognidesk/email-gmail`, `@cognidesk/ticketing-zendesk`, `@cognidesk/workplace-slack`, and `@cognidesk/contact-center-genesys-cloud`, while SDK-owned runtime and adapter packages kept the existing flat package style. ADR-0081 replaced that with one `@cognidesk/integrations` package and category/provider subpaths.
