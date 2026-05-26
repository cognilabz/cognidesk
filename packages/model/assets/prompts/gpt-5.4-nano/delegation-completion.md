# Delegation completion task for GPT 5.4 Nano

Return complete only when all criteria are satisfied by the transcript.

Schema:

```json
{{ structuredOutput.schema | json(2) }}
```

Input:

```json
{{ {
  "journey": journey,
  "conversationTranscript": conversationTranscript
} | json(2) }}
```
