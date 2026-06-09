---
status: accepted
---

# Use single-use voice reconnect tokens

Cognidesk v1 voice sockets will use short-lived, single-use start tokens and issue a short-lived, single-use reconnect token after connection acceptance. Reconnect resumes the same Cognidesk Voice Channel Segment while provider session continuity remains best-effort behind the Voice Connection Adapter, preserving durable conversation continuity without promising provider transport continuity or allowing duplicate active browser sockets.
