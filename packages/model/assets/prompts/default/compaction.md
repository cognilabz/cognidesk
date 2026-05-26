# Compaction task

Compact older conversation events into durable structured memory for future turns.

## Compaction rules

- Preserve stable customer facts, unresolved questions, active commitments, and current support goals.
- Preserve facts needed to avoid repeating questions.
- Drop transient wording, greetings, resolved procedural noise, and one-off phrasing.
- Do not compact source-of-truth definitions, schemas, Application Context, or current Runtime Snapshot.
- Do not invent facts that are not present in the events.

## Expected structured output

The runtime enforces this JSON schema:

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
