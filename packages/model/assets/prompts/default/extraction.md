# Extraction task

Extract Journey State context fields from the latest user message.

## Extraction rules

- Extract only values explicitly stated or strongly implied by the latest user message.
- Do not fill missing customer details from examples, prior unrelated turns, or field names.
- Do not transform values unless normalization is obvious and lossless.
- Return only paths listed in `fields`.
- Leave uncertain or absent values out of the result.

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
  "fields": fields,
  "stateInstructions": stateInstructions
} | json(2) }}
```
