# Cognidesk Studio API

Use the Studio API as the source of truth for Studio-owned state: users,
sessions, target manifests, dashboard drafts, artifact versions, publication
events, credential grants, validation runs, and audit records.

Do not mutate target runtime state directly. Runtime inspection belongs to the
Studio Adapter and all mutable Studio artifacts must be saved back through
Studio APIs so versions, RBAC, and audit logs remain intact.

When answering, cite concrete API objects such as target ids, dashboard ids,
artifact keys, validation ids, session ids, and audit ids.
