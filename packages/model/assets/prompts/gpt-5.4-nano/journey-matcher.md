# Journey matcher task for GPT 5.4 Nano

Rank provided Journey candidates. Use only candidate IDs. Return none if no Journey fits. Prefer active Journey for vague follow-ups. Do not invent IDs.

Schema:

```json
{{ structuredOutput.schema | json(2) }}
```

Input:

```json
{{ {
  "latestUserMessage": latestUserMessage,
  "activeJourneyId": activeJourneyId,
  "conversationTranscript": conversationTranscript,
  "candidates": candidates
} | json(2) }}
```
