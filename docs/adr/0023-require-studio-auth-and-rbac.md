# Require Studio auth and RBAC

Cognidesk Studio will include authentication and role-based access control in v1 rather than relying on self-hosted deployment trust. Studio can inspect sensitive runtime and telemetry data, run Studio Operator workflows, access source sandboxes, save dashboards, and prepare pull requests, so both Studio web actions and Studio Operator Runtime actions need explicit Studio User identity and RBAC checks.
