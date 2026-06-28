# Security And Admin

Studio is an operations surface, so the security model has to be explicit. The default local setup is convenient for development, but production use should treat Studio as an authenticated control plane with access to runtime metadata, telemetry, artifacts, and bounded source workflows.

## Roles

Studio uses roles to separate read access, dashboard work, operator work, and administration.

| Role | Intended access |
|------|-----------------|
| Viewer | Read target status, conversations, agent facts, and dashboards. |
| Dashboard editor | Create, revise, save, publish, and delete dashboard artifacts. |
| Operator | Run Operator sessions and perform allowed source/artifact workflows. |
| Admin | Manage users, permissions, credential grants, operator sessions, and audit-oriented records. |

## Admin surface

The Admin area is for operational governance:

- User and role management.
- Credential grant visibility.
- Operator session review.
- Audit-oriented records.
- Production readiness checks.

## Credentials

Credentials should be granted narrowly. Studio should know which credential exists, what scope it has, when it expires, and what actions it can support. The target configuration surface can expose credential readiness without leaking secrets into the browser.

Production deployments should:

- Set a strong `BETTER_AUTH_SECRET`.
- Set a strong `STUDIO_OPERATOR_RUNTIME_SECRET` on Studio and the operator runtime.
- Complete the first-boot Admin setup, set explicit bootstrap admin credentials, or provision users externally.
- Configure artifact storage explicitly.
- Avoid local MinIO credentials outside development.
- Treat `COGNIDESK_STUDIO_TARGET_TOKEN` as a service credential.
- Review the target manifest allowlist before enabling Operator workflows.

## Source and sandbox boundaries

Operator source workflows should be constrained by:

| Boundary | Purpose |
|----------|---------|
| Source allowlist | Prevents edits outside approved target paths. |
| Disposable sandbox | Keeps operator work isolated from the main checkout until reviewed. |
| Validation commands | Ensures checks are known, repeatable, and target-specific. |
| Credential grants | Prevents arbitrary environment access. |
| Artifact review | Keeps generated dashboards and data inspectable before publication. |

These boundaries are why Studio can be useful for non-engineers and still remain compatible with engineering review. Operators can ask higher-level questions, but durable changes still pass through explicit files, commands, artifacts, and permissions.
