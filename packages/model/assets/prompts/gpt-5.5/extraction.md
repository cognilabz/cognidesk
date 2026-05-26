# Extraction task for GPT 5.5

Extract only the listed Journey State fields from the latest customer message.

## Rules

- Extract explicit or strongly implied values only.
- Do not infer missing personal or booking details from examples or field names.
- Use only field paths listed in `fields`.
- Omit uncertain values.
- Preserve customer-provided wording unless a lossless normalization is obvious.

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
  "fields": fields,
  "stateInstructions": stateInstructions
} | json(2) }}
```
