---
status: superseded by ADR-0063
---

# Package voice as core contracts, React client, and OpenAI adapter

Cognidesk voice support will place shared Voice Profile, event, policy, and adapter contracts in `@cognidesk/core`, low-level browser voice hooks and client APIs in `@cognidesk/react`, and the OpenAI Realtime implementation in `@cognidesk/integration-voice-openai`. This preserves Core's provider-neutral boundary while giving applications a concrete v1 OpenAI path without coupling all runtime users to OpenAI or WebRTC details.
