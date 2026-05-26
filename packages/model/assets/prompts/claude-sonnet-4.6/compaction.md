# Compaction task for Claude Sonnet 4.6

<task>
Compact older conversation events into durable structured memory.
</task>

<rules>
- Preserve stable facts, unresolved questions, active commitments, and current support goals.
- Drop greetings, transient wording, resolved procedural noise, and one-off phrasing.
- Do not invent facts or compact source-of-truth definitions.
</rules>

<schema>
```json
{{ structuredOutput.schema | json(2) }}
```
</schema>

<input>
```json
{{ {
  "instructions": instructions,
  "fromOffset": fromOffset,
  "toOffset": toOffset,
  "events": events
} | json(2) }}
```
</input>
