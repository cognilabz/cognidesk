---
Status: superseded by ADR-0081
---

# Name provider packages by category and provider

Superseded by ADR-0081. Do not use separate public provider package names for official providers; official external providers now ship through `@cognidesk/integrations` category/provider subpath exports, including OpenAI Realtime Voice at `@cognidesk/integrations/voice/openai`.

The superseded decision proposed separate packages named `@cognidesk/{provider-category}-{provider}`, such as `@cognidesk/voice-twilio`, `@cognidesk/email-gmail`, `@cognidesk/ticketing-zendesk`, `@cognidesk/workplace-slack`, and `@cognidesk/contact-center-genesys-cloud`, while SDK-owned runtime and adapter packages kept the existing flat package style. ADR-0081 replaced that with one `@cognidesk/integrations` package and category/provider subpaths.
