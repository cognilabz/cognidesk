# Use an SDK-owned state machine Journey DSL

Cognidesk will define State Machine Journeys through its own TypeScript DSL rather than exposing raw xstate machines or reducing deterministic journeys to linear step lists. This preserves a Parlant-like SDK authoring experience while still supporting hierarchical and parallel statecharts, composable definitions, type-safe state references, typed Journey context, guards, actions, and compiled immutable runtime graphs.
