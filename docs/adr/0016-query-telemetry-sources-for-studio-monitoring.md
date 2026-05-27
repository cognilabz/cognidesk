# Query telemetry sources for Studio monitoring

Cognidesk Studio monitoring dashboards will query configured telemetry sources for traces and metrics rather than reading directly from OTLP collector ingestion endpoints. The Runtime SDK still emits OpenTelemetry signals, but Studio needs query semantics, aggregation, retention, and trace lookup from backends such as Prometheus-compatible metrics stores and Tempo-compatible trace stores.
