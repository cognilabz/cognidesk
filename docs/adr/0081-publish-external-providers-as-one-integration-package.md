---
Status: superseded by ADR-0085
---

# Publish external providers as one integration package

This ADR is historical. ADR-0085 supersedes the former one-package publication direction: official SDK-backed provider runtimes now ship as independent `@cognidesk/integration-{category}-{provider}` packages, with provider-neutral metadata in `@cognidesk/integration-catalog` and shared contracts in `@cognidesk/integration-kit`.

Do not use `@cognidesk/integrations` or its category/provider subpaths for new provider runtime imports, and do not add an old-import compatibility bridge. Follow ADR-0085 for current package boundaries, migration rules, and release policy.
