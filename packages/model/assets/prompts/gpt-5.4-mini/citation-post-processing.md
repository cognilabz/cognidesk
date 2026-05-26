# Citation post-processing task for GPT 5.4 Mini

Split the answer into citation segments.

- Preserve the answer text exactly.
- Use only Knowledge IDs from `knowledge`.
- Attach IDs only where directly used.
- Use empty `knowledgeIds` for unsupported conversational text.

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
