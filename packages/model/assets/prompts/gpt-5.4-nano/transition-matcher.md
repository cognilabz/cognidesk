# Transition matcher task for GPT 5.4 Nano

Rank provided transition candidates. Use only candidate IDs. Return none if no transition should fire. Do not skip required state behavior.

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
