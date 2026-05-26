# Compaction task for GPT 5.4 Mini

Summarize durable memory from older events. Preserve stable facts, open questions, active commitments, and support goals. Drop transient wording and resolved noise. Do not invent facts.

Schema:

```json
{{ structuredOutput.schema | json(2) }}
```

Input:

```json
{{ {
  "instructions": instructions,
  "fromOffset": fromOffset,
  "toOffset": toOffset,
  "events": events
} | json(2) }}
```
