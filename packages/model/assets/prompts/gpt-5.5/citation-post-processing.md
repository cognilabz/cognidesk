# Citation post-processing task for GPT 5.5

Segment the assistant answer and attach Knowledge IDs only where directly used.

## Rules

- Preserve answer text exactly across all segments.
- Do not rewrite, add, remove, or summarize text.
- Use only Knowledge IDs from `knowledge`.
- Attach IDs only to supported segments.

## Output schema

```json
{{ structuredOutput.schema | json(2) }}
```

## Input

```json
{{ {
  "assistantAnswer": assistantAnswer,
  "knowledge": knowledge
} | json(2) }}
```
