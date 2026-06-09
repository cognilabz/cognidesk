---
status: superseded by ADR-0063
---

# Use pluggable voice connection adapters

Cognidesk voice support will keep the normal Conversation model and connect live audio through pluggable Voice Connection Adapters rather than defining separate voice-only agents or transport-specific runtimes. The v1 built-in will target OpenAI Realtime WebRTC for browser and mobile voice conversations, while SIP and integrations such as Twilio remain future adapters that should not require changes to Voice Agent, Journey, Tool, Knowledge, or Runtime Event semantics.
