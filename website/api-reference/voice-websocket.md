# @cognidesk/voice-websocket

Voice WebSocket adapter for browser connections.

!!! info "Auto-generated from source"
    The complete type reference is generated from TypeScript declarations. Run `pnpm docs:generate` to regenerate.

## Overview

Node.js adapter that implements the Cognidesk Voice Browser Protocol over WebSocket. Handles voice session lifecycle, audio delta transport, and client control events.

## Voice Browser Protocol

The adapter implements a structured JSON protocol over WebSocket:

- Voice Audio Deltas (16-bit PCM, mono, 24 kHz)
- Session control events (start, stop, interrupt)
- Status and error events
- Transcript notifications

---

## Full type reference

Open the generated [`@cognidesk/voice-websocket` type reference](generated/packages/voice-websocket/dist.md).
