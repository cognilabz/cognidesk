---
status: superseded by ADR-0063
---

# Browser supplies WebRTC offer to Cognidesk

The v1 Voice Browser Client will create the browser `RTCPeerConnection`, capture microphone media, create an offer SDP, and post that offer to Cognidesk's voice start route. Cognidesk then performs the server-mediated OpenAI Realtime setup and returns the answer SDP for the browser to apply, keeping provider session configuration and control-channel setup out of the browser.
