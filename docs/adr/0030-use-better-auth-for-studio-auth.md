# Use Better Auth for Studio auth

Cognidesk Studio v1 will use Better Auth with the Drizzle adapter for Studio Auth. This aligns auth storage with the Studio Database, supports the SQLite local and Postgres production database path, and provides email/password sessions plus role-aware extension points without building a custom authentication stack. The first Admin user is bootstrapped from deployment configuration only when no users exist, then user and RBAC management moves to Studio Admin View; SSO and OIDC remain future Studio Auth integrations.
