# Place Studio as an optional monorepo app

Cognidesk Studio will live in the Cognidesk workspace as `apps/studio`, while remaining a separately runnable optional app rather than a runtime dependency or reusable package. Keeping Studio in the monorepo lets it track SDK types, runtime event contracts, OTel conventions, and demo integrations closely, while the optional app boundary preserves transport neutrality and allows Cognidesk SDK applications to run without Studio.
