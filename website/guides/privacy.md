# Privacy

Cognidesk privacy settings are session-start controls. Pass them when you create
a Conversation, and the runtime stores the settings in the Conversation context
so later messages, voice segments, Channel Events, replay, telemetry, snapshots,
and Studio adapter reads use the same policy.

The SDK intentionally ships with no default PII mask rules. Applications decide
which values are sensitive in their domain and provide explicit masks or privacy
hooks.

## Session privacy settings

```typescript
const conversation = await runtime.createConversation({
  agentId: "support",
  channel: "chat",
  context: {
    customerId: customer.id,
  },
  privacy: {
    traceContent: "none",
    customerRelationVisibility: "id",
    masks: [
      {
        name: "email",
        pattern: "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}",
        flags: "gi",
        replacement: "[email]",
      },
      {
        name: "phone",
        pattern: "(^|[^A-Z0-9])(\\+?\\d[\\d ().-]{6,}\\d)(?=$|[^A-Z0-9])",
        flags: "gi",
        replacement: "$1[phone]",
      },
    ],
  },
});
```

| Setting | Values | Effect |
|---------|--------|--------|
| `enabled` | `true`, `false` | Turns SDK-managed masking off when set to `false`. Custom hooks still run. |
| `traceContent` | `full`, `redacted`, `none` | Controls content in stored events, replay, snapshots, and telemetry. |
| `customerRelationVisibility` | `id`, `none` | Controls whether Studio/adapter surfaces may expose a generic customer relation id. |
| `masks` | app-defined rules | Applies explicit regex replacements before content is stored or exported. |

## Trace content levels

`traceContent: "full"` keeps content unchanged unless masks or hooks are
configured.

`traceContent: "redacted"` keeps the same event shape but applies your explicit
masks and privacy hooks to strings.

`traceContent: "none"` removes message and content-heavy payloads from traces
and telemetry while preserving structural workflow events. You can still see
which Journey and state ran, which tool/action completed, and lifecycle events,
but raw user and assistant message text is not stored in trace surfaces.

## Customer relation

Cognidesk derives the generic customer relation from existing Conversation
context. Use either `context.customerId` or `context.customer.id`; do not pass a
second customer field just for Studio.

```typescript
await runtime.createConversation({
  agentId: "support",
  context: {
    customerId: "customer_123",
  },
  privacy: {
    traceContent: "redacted",
    customerRelationVisibility: "id",
  },
});
```

Studio adapter surfaces expose only `{ id }` when a customer id exists and the
session privacy allows it. If `traceContent` is `none`, the relation is hidden
unless `customerRelationVisibility: "id"` is set explicitly.

## Transport and UI

HTTP clients can pass the same object to `POST /api/conversations`,
`POST /api/voice/conversations`, and Channel Event `createConversation`
payloads:

```json
{
  "agentId": "support",
  "context": { "customerId": "customer_123" },
  "privacy": {
    "traceContent": "none",
    "customerRelationVisibility": "none",
    "masks": [
      { "name": "email", "pattern": "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "flags": "gi", "replacement": "[email]" }
    ]
  }
}
```

React UIs can pass `privacy` to `ChatWidget`, `useChat`, or `useVoice` when the
widget or hook may create a new Conversation.

## Consent UI pattern

Consent is application state, not a separate redaction layer. A frontend should
collect the user's choice, persist it if appropriate, and then either pass a
`RuntimePrivacySettings` object to the session-start call or omit `privacy`.
Core still performs all masking, event redaction, replay redaction, snapshot
redaction, telemetry redaction, and privacy-hook execution.

```typescript
type DemoConsent = "consent" | "no";

const consent = localStorage.getItem("myapp.privacyConsent.v1") as DemoConsent | null;

const privacy = consent === "no"
  ? {
      traceContent: "none",
      customerRelationVisibility: "none",
      masks: [
        {
          name: "email",
          pattern: "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}",
          flags: "gi",
          replacement: "[email]",
        },
      ],
    } as const
  : undefined;

await client.createConversation({
  agentId: "support",
  context: {},
  ...(privacy ? { privacy } : {}),
});
```

Use the UI to choose policy. Do not re-implement message, event, telemetry, or
replay redaction in the UI. That would create duplicate behavior that can drift
from the SDK runtime.

## Hooks

Use `RuntimeOptions.privacy` for organization-wide hooks and optional baseline
settings. Hooks are useful for non-regex decisions, provider-specific payloads,
or application policies that need customer or tenant context.

```typescript
const runtime = createRuntime({
  storage,
  agent,
  models,
  privacy: {
    async redactConversationContext({ context }) {
      return keepSupportSafeCustomerFields(context);
    },
    async redactTelemetryAttributes({ attributes }) {
      return scrubTelemetry(attributes);
    },
  },
});
```

Keep deterministic masks for syntax-shaped values such as IDs, email addresses,
phone numbers, account numbers, or booking references. Use hooks when the
decision depends on meaning, policy, tenant configuration, or external customer
metadata.
