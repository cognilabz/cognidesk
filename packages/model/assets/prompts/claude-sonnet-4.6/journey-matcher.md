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
Input: latest message "thanks", active journey "order-update", candidates include order-update.
Output: keep order-update only if the message still needs order-update work; otherwise return an empty list.

Input: latest message "I need to change my delivery address", candidates include delivery-change.
Output: include delivery-change with high confidence.
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
