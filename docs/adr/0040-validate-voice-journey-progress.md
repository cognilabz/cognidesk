---
status: proposed
---

# Validate voice journey progress

Cognidesk will initially let the Voice Turn Pipeline produce Voice Journey Proposals rather than allowing the realtime voice model to mutate Journey state directly. Cognidesk validates proposed collected values, transitions, clarifications, completions, and tool requests against schemas, Journey Policy, confirmations, side-effect rules, and Channel Compatibility before recording state changes; this preserves workflow safety while leaving room to revise the boundary after latency and behavior testing.
