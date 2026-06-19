# Pin reviewed contracts for connection-backed providers

Connection-Backed Provider Integrations will use MCP or OpenAPI contracts as the preferred backing for equivalent provider functionality, but they will declare the reviewed contract version, digest, or compatibility range used for operation mapping. Runtime discovery may inspect live provider contracts and broker execution, but incompatible changes to reviewed operations, schemas, auth, or model-facing descriptions fail closed rather than silently changing Provider Integration behavior.
