# Transition matcher task for Claude Sonnet 4.6

<task>
Rank only the provided state transition candidates for the latest customer message.
</task>

<rules>
- Use only candidate IDs from `candidates`.
- Return an empty list when no transition should fire.
- Prefer priority only when multiple candidates fit equally.
- Do not skip required state behavior.
</rules>

<examples>
Input: customer provides unrelated small talk, candidates require confirmation.
Output: empty candidates array.

Input: customer clearly confirms the pending action, candidates include a confirmation transition.
Output: include that transition.
</examples>

<schema>
```json
{{ structuredOutput.schema | json(2) }}
```
</schema>

<input>
```json
{{ {
  "journey": journey,
  "state": state,
  "latestUserMessage": latestUserMessage,
  "currentContext": currentContext,
  "candidates": candidates
} | json(2) }}
```
</input>
