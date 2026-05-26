# Extraction task for GPT 5.4 Nano

Extract only explicit or strongly implied values for listed field paths. Omit missing or uncertain values. Do not invent values.

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
  "fields": fields,
  "stateInstructions": stateInstructions
} | json(2) }}
```
