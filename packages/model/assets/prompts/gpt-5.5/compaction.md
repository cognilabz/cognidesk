# Compaction task for GPT 5.5

Create durable structured memory from older conversation events.

Preserve stable facts, open questions, active commitments, and support goals. Drop transient wording, resolved procedural noise, and greetings. Do not invent facts.

## Output schema

```json
{{ structuredOutput.schema | json(2) }}
```

## Input

```json
{{ {
  "instructions": instructions,
  "fromOffset": fromOffset,
  "toOffset": toOffset,
  "events": events
} | json(2) }}
```
