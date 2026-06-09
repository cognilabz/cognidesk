---
status: superseded by ADR-0062
---

# Do not auto-reconnect v1 voice connections

Cognidesk v1 will not automatically reconnect a dropped WebRTC Voice Connection to the same Channel Segment. Connection drops should emit `voice.connection.failed` or end the voice segment while leaving the Conversation active so the application can start a new voice segment or continue in chat; this avoids unclear realtime session, audio continuity, and recording-reference semantics in v1, but should be revisited after real voice usage.
