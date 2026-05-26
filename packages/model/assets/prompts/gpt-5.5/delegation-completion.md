# Delegation completion task for GPT 5.5

Decide whether the active delegation Journey is complete. Return complete only when every completion criterion is satisfied by the transcript.

## Output schema

```json
{{ structuredOutput.schema | json(2) }}
```

## Input

```json
{{ {
  "journey": journey,
  "conversationTranscript": conversationTranscript
} | json(2) }}
```
