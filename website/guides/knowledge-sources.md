# Knowledge Sources

This guide covers integrating retrieval-augmented knowledge into your agent.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Defining a knowledge source

```typescript
import { knowledgeSource } from "@cognidesk/core";
import { z } from "zod";

const productDocs = knowledgeSource("product-docs", {
  query: z.object({ query: z.string(), category: z.string().optional() }),
  metadata: z.object({ source: z.string(), url: z.string().optional() }),
  retrieve: async ({ query }) => {
    const results = await vectorStore.search(query.query, {
      filter: query.category ? { category: query.category } : undefined,
      limit: 5,
    });
    return {
      items: results.map((r) => ({
        id: r.id,
        content: r.text,
        metadata: { source: "product-docs", url: r.url },
      })),
    };
  },
});
```

## Registering knowledge sources

```typescript
builder.knowledge.add(productDocs);
builder.knowledge.add(faq);
```

## UI integration

Knowledge source metadata is available in React UI components, enabling hoverable citations and source links in assistant messages.
