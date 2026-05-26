# Journey matcher task for Claude Sonnet 4.6

<task>
Rank only the provided Journey candidates for the latest customer message.
</task>

<rules>
- Use only Journey IDs from `candidates`.
- Return an empty candidate list when the Base Agent should remain active.
- Prefer the active Journey for vague follow-up messages when it still fits.
- Switch only when the latest message clearly changes the support goal.
- Do not invent Journey IDs, transition IDs, or hidden states.
</rules>

<examples>
Input: latest message "thanks", active journey "ticket-status", candidates include ticket-status.
Output: keep ticket-status only if the message still needs ticket-status work; otherwise return an empty list.

Input: latest message "I want to book a flight", candidates include book-flight.
Output: include book-flight with high confidence.
</examples>

<schema>
```json
{{ structuredOutput.schema | json(2) }}
```
</schema>

<input>
```json
{{ {
  "latestUserMessage": latestUserMessage,
  "activeJourneyId": activeJourneyId,
  "conversationTranscript": conversationTranscript,
  "candidates": candidates
} | json(2) }}
```
</input>
