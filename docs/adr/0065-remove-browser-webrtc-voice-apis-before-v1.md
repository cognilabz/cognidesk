---
status: accepted
---

# Remove browser WebRTC voice APIs before v1

Cognidesk will remove the browser-facing WebRTC SDP voice API before v1 rather than deprecating it, because the browser contract has intentionally moved to the Cognidesk Voice Browser Protocol over WebSocket. This avoids compatibility debt around a short-lived design while keeping provider transports, including OpenAI Realtime WebSocket, behind Voice Connection Adapters.
