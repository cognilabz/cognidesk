# Cognidesk Telemetry

Telemetry sources are query backends, not raw OTLP collectors. Use configured
Prometheus-compatible metric sources for counters, rates, durations, and error
ratios. Use Tempo-compatible trace sources for spans, trace timelines, tool
latency, model latency, and failure investigation.

Correlate Cognidesk runtime events with telemetry through `traceId` and `spanId`
when available. If telemetry contradicts runtime events, surface the mismatch
instead of smoothing it over.
