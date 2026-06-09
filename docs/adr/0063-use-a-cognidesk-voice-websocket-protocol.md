---
status: accepted
---

# Use a Cognidesk voice WebSocket protocol

Cognidesk v1 voice support will expose a Cognidesk-owned browser WebSocket protocol for live audio, control messages, acknowledgements, and reconnect tokens instead of requiring the browser to create WebRTC sessions or speak provider realtime protocols. The OpenAI voice adapter will use OpenAI Realtime WebSocket as its v1 Voice Provider Transport, keeping provider session details behind Voice Connection Adapters while preserving Cognidesk-owned Conversation, Channel Segment, Tool, Knowledge, transcript, interruption, and recording boundaries.
