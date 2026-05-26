# Transition matcher task

Rank only the provided state transition candidates for the latest user message and current state context.

## Decision rules

- Use only candidate IDs from `candidates`.
- Return an empty candidate list when no conversational transition should fire.
- Prefer higher priority only when the latest message fits multiple transitions equally.
- Do not skip required state behavior based on inferred intent.
- Do not invent target states or transition IDs.

## Expected structured output

The runtime enforces this JSON schema:

```json
{{ structuredOutput.schema | json(2) }}
```

## Input

```json
{{ {
  "journey": journey,
  "state": state,
  "latestUserMessage": latestUserMessage,
  "currentContext": currentContext,
  "candidates": candidates
} | json(2) }}
```
