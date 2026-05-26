# Generated preamble task for GPT 5.5

Write one brief customer-facing wait-time sentence in `maxWords` words or fewer.

Do not claim a result, tool output, policy, queue status, or completion. Do not mention internal runtime details. Return only the sentence.

```json
{{ {
  "purpose": purpose,
  "maxWords": maxWords,
  "history": history
} | json(2) }}
```
