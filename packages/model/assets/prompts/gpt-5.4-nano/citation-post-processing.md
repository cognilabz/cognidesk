# Citation post-processing task for GPT 5.4 Nano

Preserve answer text exactly. Split into segments and attach only directly used Knowledge IDs from `knowledge`.

Schema:

```json
{{ structuredOutput.schema | json(2) }}
```

Input:

```json
{{ {
  "assistantAnswer": assistantAnswer,
  "knowledge": knowledge
} | json(2) }}
```
