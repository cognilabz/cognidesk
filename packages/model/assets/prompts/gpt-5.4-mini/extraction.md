# Extraction task for GPT 5.4 Mini

Extract only listed field paths from the latest message.

- Extract explicit or strongly implied values only.
- You may resolve references such as "the cheaper option", "that one", or "the first one" only when `currentContext` and `stateInstructions` make the referenced value unambiguous.
- Omit uncertain or absent values.
- Do not infer missing personal details from examples or field names.
- Use only paths in `fields`.

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
