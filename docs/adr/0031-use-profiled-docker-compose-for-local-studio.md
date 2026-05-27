# Use profiled Docker Compose for local Studio

Cognidesk Studio local development will use a Docker Compose stack with profiles so the full Studio environment is reproducible without making the default path too heavy. The default stack should run Studio, MinIO for S3-compatible artifacts, the Flight Demo Studio Target, and the Studio Operator Runtime with local SQLite when appropriate; profiles can add Postgres for production-like database testing and OpenTelemetry infrastructure such as collector, Prometheus, and Tempo for telemetry dashboards.
