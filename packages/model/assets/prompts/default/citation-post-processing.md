# Citation post-processing task

Split the assistant answer into citation segments and attach Knowledge IDs only where the segment uses that Knowledge item.

## Citation rules

- Preserve the assistant answer text exactly across segments.
- Do not rewrite, add, remove, or summarize the assistant answer.
- Attach a Knowledge ID only when that segment is directly supported by the item.
- Use an empty `knowledgeIds` array for unsupported or general conversational text.
- Use only Knowledge IDs from `knowledge`.

## Expected structured output

The runtime enforces this JSON schema:

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
