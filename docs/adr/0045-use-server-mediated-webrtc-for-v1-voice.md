---
status: superseded by ADR-0063
---

# Use server-mediated WebRTC for v1 voice

Cognidesk's v1 WebRTC voice adapter will have the Cognidesk application server create the realtime provider call and attach it to a Conversation instead of giving the browser ownership of provider session setup. This keeps Voice Profile resolution, Conversation attachment, tool sideband setup, recording policy, safety identifiers, and audit events server-owned while the browser remains responsible for capturing and playing media.
