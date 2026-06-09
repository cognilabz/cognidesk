---
status: superseded by ADR-0063
---

# Ship low-level browser voice client APIs

Cognidesk v1 voice support will expose low-level browser hooks and client APIs for WebRTC voice connections rather than a prebuilt voice UI component. This keeps the React package focused on connection control, permission/error state, status observation, and chat continuation while applications own their voice interface design.
