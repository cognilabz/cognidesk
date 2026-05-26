# Delegation completion task for Claude Sonnet 4.6

<task>
Decide whether the active Delegation Journey is complete.
</task>

<rules>
- Return complete only when all completion criteria are satisfied by the conversation.
- Return incomplete when criteria are ambiguous, partially satisfied, or waiting for customer input.
- Use only the provided transcript and Journey criteria.
</rules>

<schema>
```json
{{ structuredOutput.schema | json(2) }}
```
</schema>

<input>
```json
{{ {
  "journey": journey,
  "conversationTranscript": conversationTranscript
} | json(2) }}
```
</input>
