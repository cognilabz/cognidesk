# @cognidesk/model

Model provider adapters for LLM integration.

!!! info "Auto-generated from source"
    The complete type reference is generated from TypeScript declarations. Run `pnpm docs:generate` to regenerate.

## Overview

The model package provides adapters for connecting the Cognidesk runtime to LLM providers. It implements the `ModelAdapter` interface defined in `@cognidesk/core`.

## Supported provider inputs

- Any Vercel AI SDK compatible language model for runtime roles.
- Any Vercel AI SDK compatible embedding model for `journeyEmbedding`.
- Custom implementations of `ModelAdapter` from `@cognidesk/core`.

Use `createModelSet` to map concrete provider models into Cognidesk roles such as `response`, `matcher`, `extraction`, `citationPostProcessing`, `compaction`, and `journeyEmbedding`.

---

## Full type reference

Open the generated [`@cognidesk/model` type reference](generated/packages/model/dist.md).
