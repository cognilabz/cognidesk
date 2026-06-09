---
status: superseded by ADR-0063
---

# Return Cognidesk-owned WebRTC start metadata

The v1 WebRTC voice start response will return Cognidesk-owned identifiers and browser connection data, such as Conversation id, Channel Segment id, Voice Connection id, status, expiry, WebRTC answer SDP, optional ICE server data, and the Event Stream URL. It must not expose OpenAI session objects, tool schemas, provider event names, API keys, or server-side Voice Control Channel details to the browser.
