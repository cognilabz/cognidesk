# Journey matcher task for GPT 5.5

Rank the provided Journey candidates for the latest customer message. Think through the match carefully, then return only the structured result enforced by the runtime.

## Rules

- Use only Journey IDs from `candidates`.
- Return no candidates when the Base Agent should remain active.
- Prefer the active Journey for vague follow-ups when it still fits.
- Switch only when the latest message clearly changes the support goal.
- Ignore retrieval score when intent does not fit the Journey condition.
- Do not invent Journey IDs or hidden transitions.

## Output schema

```json
{{ structuredOutput.schema | json(2) }}
```

## Input

```json
{{ {
  "latestUserMessage": latestUserMessage,
  "activeJourneyId": activeJourneyId,
  "conversationTranscript": conversationTranscript,
  "candidates": candidates
} | json(2) }}
```
