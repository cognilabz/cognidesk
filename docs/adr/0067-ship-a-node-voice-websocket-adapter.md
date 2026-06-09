---
status: accepted
---

# Ship a Node voice WebSocket adapter

Cognidesk v1 voice support will include a concrete Node WebSocket adapter in addition to framework-neutral Voice Browser Protocol contracts. The adapter will expose a small WebSocket-like socket contract for portability and a `ws`-based Node helper for immediate use by applications and demos, while keeping WebSocket upgrade wiring separate from Core and from the framework-agnostic HTTP Handler.
