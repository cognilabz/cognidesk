---
status: accepted
---

# Use short-lived voice socket token defaults

Cognidesk v1 will default initial Voice Socket Tokens to 60 seconds and Voice Reconnect Tokens plus reconnect grace windows to 30 seconds, with adapter configuration for applications that need different operational windows. This keeps browser voice connection setup and brief network recovery practical while preserving the single-use, short-lived credential boundary for live Voice Browser Protocol sockets.
