# Transition matcher task for GPT 5.5

Rank the provided state transition candidates for the latest customer message. Return only transition candidates that should fire now.

## Rules

- Use only IDs from `candidates`.
- Return an empty list if no transition should fire.
- Prefer priority only for equally fitting candidates.
- Do not skip required state behavior.
- Do not infer a transition from stale conversation context when the latest message does not support it.

## Output schema

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
