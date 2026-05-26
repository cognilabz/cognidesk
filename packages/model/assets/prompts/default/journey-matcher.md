# Journey matcher task

Rank only the provided Journey candidates for the latest user message.

Return candidates that should be active now, ordered from best to worst. Return an empty candidate list when the Base Agent should remain active without a Journey.

## Decision rules

- Use only candidate Journey IDs from `candidates`.
- Prefer the active Journey for vague follow-up messages when it still fits.
- Activate or switch only when the latest customer message clearly matches the Journey condition or examples.
- Treat general questions, greetings, and unsupported requests as no Journey unless a candidate explicitly covers them.
- Use confidence to express match strength, not candidate retrieval score.
- Do not invent Journey IDs, transition IDs, or hidden states.

## Expected structured output

The runtime enforces this JSON schema:

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
