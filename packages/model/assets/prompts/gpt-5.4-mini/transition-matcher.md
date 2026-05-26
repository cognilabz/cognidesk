# Transition matcher task for GPT 5.4 Mini

Rank only the provided transition candidates.

- Use only IDs from `candidates`.
- Return an empty list when no transition should fire.
- Prefer priority only when multiple candidates fit equally.
- Do not skip required state behavior.

Schema:

```json
{{ structuredOutput.schema | json(2) }}
```

Input:

```json
{{ {
  "journey": journey,
  "state": state,
  "latestUserMessage": latestUserMessage,
  "currentContext": currentContext,
  "candidates": candidates
} | json(2) }}
```
