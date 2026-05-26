# Compaction task for GPT 5.4 Nano

Create concise durable memory. Keep stable facts, open questions, active commitments, and goals. Drop transient wording. Do not invent facts.

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
