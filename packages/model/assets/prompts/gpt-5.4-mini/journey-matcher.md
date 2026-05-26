# Journey matcher task for GPT 5.4 Mini

Rank only the provided Journey candidates for the latest user message.

- Use only IDs from `candidates`.
- Return an empty list when no Journey should be active.
- Prefer the active Journey for vague follow-ups when it still fits.
- Switch only on a clear topic or goal change.
- Do not invent IDs.

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
