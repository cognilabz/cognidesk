---
status: accepted
---

# Make voice realtime-first with Cognidesk control surface

Cognidesk Voice Conversations will use the realtime voice model as the live conversational loop while Cognidesk remains authoritative through a server-side Voice Control Tool Surface. The realtime model may use Voice Runtime Context, Voice Knowledge Projections, Voice Tool Projections, Voice Journey Proposals, Voice Background Work, and Voice Preambles to keep the call responsive, while chat-oriented model roles are reserved for validation, fallback, repair, summaries, and explicit background work rather than every spoken exchange.

This reaffirms the separate Voice Turn Pipeline decision and rejects the current implementation shape where finalized transcripts are routinely passed through the chat-oriented `handleUserMessage` pipeline before speech. Browser clients still speak only the Cognidesk Voice Browser Protocol; provider realtime details, tool privacy, Journey validation, side-effect confirmation, Runtime Events, and durable state remain server-controlled.
