# Keep connection execution outside Core

OpenAPI and MCP connection discovery, contract verification, auth brokering, and operation execution will live in `@cognidesk/connections` rather than `@cognidesk/core`. Core may consume normalized Tool, capability, approval, and event metadata, but it remains transport-neutral and provider-neutral while Provider Integrations opt into connection-backed execution when they need it.
