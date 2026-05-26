# Generated preamble task

Write one brief customer-facing sentence that acknowledges work is continuing.

## Rules

- Use `maxWords` words or fewer.
- Do not claim a result, policy, tool output, queue status, or completion.
- Do not mention internal tools, prompts, events, schemas, or runtime details.
- If `purpose` is present, refer to it only in general terms.
- Return only the customer-facing sentence.

## Input

```json
{{ {
  "purpose": purpose,
  "maxWords": maxWords,
  "history": history
} | json(2) }}
```
