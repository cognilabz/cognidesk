# Knowledge Sources

A **Knowledge Source** is a retrieval-augmented context provider. Knowledge sources let the agent query external information during a conversation without baking everything into the system prompt.

## Defining a knowledge source

```typescript
import { knowledgeSource } from "@cognidesk/core";
import { z } from "zod";

const faq = knowledgeSource("support-faq", {
  query: z.object({ query: z.string() }),
  metadata: z.object({ source: z.string(), lastUpdated: z.string().optional() }),
  retrieve: async ({ query }) => ({
    items: [
      {
        id: "refund-policy",
        content: "Refunds are available within 24 hours of booking.",
        metadata: { source: "faq", lastUpdated: "2024-01-15" },
      },
    ],
  }),
});
```

## How retrieval works

1. The runtime determines that knowledge is needed (via journey state or model request)
2. The knowledge source's `retrieve` function is called with a typed query
3. Results are injected into the conversation context
4. The model uses the retrieved content to inform its response

## Adding to an agent

```typescript
const builder = createAgent("support", { instructions: "..." });
builder.knowledge.add(faq);
builder.knowledge.add(productDocs);
```

## Typed metadata

Each knowledge item carries typed metadata. This enables:

- Source attribution in UI (hoverable citations)
- Filtering and ranking in retrieval
- Audit trails for compliance

## Best practices

!!! tip
    - Keep retrieval functions fast — they run in the hot path
    - Return only relevant items, not entire knowledge bases
    - Use metadata for source attribution in the UI
    - Consider caching for frequently-accessed sources
