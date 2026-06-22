# Require provider conformance evidence

Provider Integrations must be able to prove local Cognidesk contract conformance separately from live external-partner readiness. The test harness will check Provider Package names and manifest-only import paths, Provider Manifest shape, Channel Capability vocabulary, credential-status safety, fail-closed policy behavior, and optional live partner checks; live checks without configured partner credentials or test tenants must report `credential-blocked` rather than passing as best-effort mocks.
