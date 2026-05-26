# Citation post-processing task for Claude Sonnet 4.6

<task>
Split the assistant answer into citation segments and attach Knowledge IDs only where directly used.
</task>

<rules>
- Preserve the answer text exactly across segments.
- Do not rewrite, add, remove, or summarize text.
- Use only IDs from `knowledge`.
- Use empty `knowledgeIds` for unsupported or general text.
</rules>

<schema>
```json
{{ structuredOutput.schema | json(2) }}
```
</schema>

<input>
```json
{{ {
  "assistantAnswer": assistantAnswer,
  "knowledge": knowledge
} | json(2) }}
```
</input>
