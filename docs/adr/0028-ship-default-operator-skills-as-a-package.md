# Ship default Operator skills as a package

Cognidesk will ship the default Studio Operator Skill Pack as `@cognidesk/studio-operator-skills`, a reusable workspace package rather than burying it inside `apps/studio`. The Studio web app, Studio Operator Runtime, tests, documentation, and future hosted or external Operator runtimes should be able to consume the canonical Cognidesk SDK, Studio API, telemetry, dashboard, and source-map skills from the same package.
