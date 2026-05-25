# Keep the core runtime transport-neutral with strong built-in adapters

Cognidesk Core will expose runtime primitives without depending on a specific HTTP server, framework, streaming protocol, storage backend, or deployment target. The SDK may still provide strong built-in adapters for common use cases such as HTTP, SSE, storage, model providers, and local development, but those adapters remain optional conveniences around the transport-neutral runtime boundary.
