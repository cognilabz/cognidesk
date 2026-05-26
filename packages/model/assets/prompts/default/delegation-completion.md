# Delegation completion task

Decide whether the active Delegation Journey is complete.

Return complete only when all completion criteria are satisfied by the conversation. If the conversation is still ambiguous, incomplete, or waiting for the customer, return incomplete.

## Expected structured output

The runtime enforces this JSON schema:

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
