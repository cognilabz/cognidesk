# Cognidesk Telemetry

Telemetry sources are query backends, not raw OTLP collectors. Use configured
Prometheus-compatible metric sources for counters, rates, durations, and error
ratios. Use Tempo-compatible trace sources for spans, trace timelines, tool
latency, model latency, and failure investigation.

Use `/api/studio/data` for both text reports and dashboards. Trace sources may
contain arbitrary SDK, provider, runtime, span-event, and model metadata; do not
assume a fixed schema. Preserve and inspect raw trace payloads when the user asks
why something happened. Use flat span rows for aggregation, grouping, and charts.

For `telemetry.traces`, request complete traces with `params.traceId` or
`params.traceIds`. For search-backed reports, pass a TraceQL/search query and
`params.includeTraceData: true` so Studio hydrates matching traces and returns
both `rawTraces` and flat `spans`.

Correlate Cognidesk runtime events with telemetry through `traceId` and `spanId`
when available. If telemetry contradicts runtime events, surface the mismatch
instead of smoothing it over.
