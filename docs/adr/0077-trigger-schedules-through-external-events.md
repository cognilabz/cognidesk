---
status: superseded by ADR-0083
---

# Trigger schedules through External Events

Cognidesk schedules will wake the runtime by emitting typed External Events rather than executing delayed tool calls or provider operations directly. This keeps scheduled follow-ups, callbacks, reminders, SLA reactions, and outbound actions inside normal Journey routing, conversation state checks, policy, approval, privacy, and provider capability enforcement while leaving clock, queue, retry, and delivery mechanics to Schedule Adapters.
