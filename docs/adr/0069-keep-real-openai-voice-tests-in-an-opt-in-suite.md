---
status: accepted
---

# Keep real OpenAI voice tests in an opt-in suite

Real OpenAI voice integration tests will live in a separate opt-in test suite and will not run as part of the default workspace test command. This allows Cognidesk to validate real Realtime voice behavior with an application-provided OpenAI API key while keeping normal unit and adapter tests deterministic, fast, and non-billable.
