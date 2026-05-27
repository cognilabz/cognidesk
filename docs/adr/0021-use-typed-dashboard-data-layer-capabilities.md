# Use typed dashboard data layer capabilities

The Studio Dashboard Data Layer will expose named, schema-validated capabilities rather than a generic wrapper around arbitrary Studio API endpoints. This lets generated dashboards query metrics, traces, runtime events, conversations, and Agent metadata with target scoping, permissions, and rate limits while avoiding a broad internal API client inside browser-run artifacts.
