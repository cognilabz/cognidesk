---
status: accepted
---

# Validate voice journey progress

Cognidesk will initially let the Voice Turn Pipeline produce Voice Journey Proposals rather than allowing the realtime voice model to mutate Journey state directly. Cognidesk validates proposed collected values, transitions, clarifications, completions, and tool requests against schemas, Journey Policy, confirmations, side-effect rules, and Channel Compatibility before recording state changes; this preserves workflow safety while leaving room to revise the boundary after latency and behavior testing.

The first implementation exposes this through the server-owned Voice Control Tool Surface. Realtime voice sessions submit `submit_voice_journey_proposal` calls, Cognidesk runs workflow progress as cancellable Voice Background Work, and Realtime receives sanitized completion notifications rather than mutating Journey state directly.
