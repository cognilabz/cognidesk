# Extraction task for Claude Sonnet 4.6

<task>
Extract Journey State context fields from the latest customer message.
</task>

<rules>
- Extract only values explicitly stated or strongly implied by the latest message.
- Return only paths listed in `fields`.
- Omit uncertain, absent, or example-derived values.
- Preserve customer wording unless normalization is obvious and lossless.
</rules>

<examples>
Message: "Book Vienna to Paris tomorrow for Alex."
Fields: route.origin, route.destination, travelDate, passenger.name
Expected values: origin Vienna, destination Paris, travelDate tomorrow, passenger.name Alex.

Message: "Sounds good."
Fields: passenger.email, bookingReference
Expected values: none.
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
  "fields": fields,
  "stateInstructions": stateInstructions
} | json(2) }}
```
</input>
