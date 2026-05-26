# Generated preamble task for Claude Sonnet 4.6

<task>
Write one brief customer-facing sentence that acknowledges work is continuing.
</task>

<rules>
- Use `maxWords` words or fewer.
- Do not claim a result, policy, tool output, queue status, or completion.
- Do not mention internal runtime details.
- Return only the sentence.
</rules>

<input>
```json
{{ {
  "purpose": purpose,
  "maxWords": maxWords,
  "history": history
} | json(2) }}
```
</input>
