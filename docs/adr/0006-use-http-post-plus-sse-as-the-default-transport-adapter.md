# Use HTTP POST plus SSE as the default transport adapter

Cognidesk Core remains transport-neutral, but the default HTTP Adapter will expose conversation submissions through POST endpoints and deliver Runtime Events, including chat message deltas, through SSE Streaming. This provides a simple browser-friendly default without making WebSockets or any HTTP framework part of the core runtime boundary.
