# @cognidesk/core

Core Cognidesk runtime APIs for agents, journeys, tools, knowledge, events, and conversations.

## Install

```bash
npm install @cognidesk/core
```

## Usage

```ts
import * as cognideskPackage from "@cognidesk/core";
```

This package is part of the Cognidesk SDK. It is designed to be composed with the other `@cognidesk/*` packages in application-owned runtimes, transports, storage, and user interfaces.

## Telemetry enrichment

Runtime telemetry emits OpenTelemetry spans and metrics. Model spans include provider token usage when the model adapter returns it:

- `cognidesk.model.usage.input_tokens`
- `cognidesk.model.usage.cached_input_tokens`
- `cognidesk.model.usage.output_tokens`
- `cognidesk.model.usage.reasoning_tokens`
- `cognidesk.model.usage.total_tokens`

Applications can add bounded span attributes, metric labels, span events, and custom metrics through `RuntimeOptions.telemetry`:

```ts
createRuntime({
  storage,
  agent,
  models,
  telemetry: {
    content: "redacted",
    customMetrics: [{
      name: "app.checkout.searches",
      kind: "counter",
      unit: "{search}",
    }],
    enrichSpan: ({ spanName }) => spanName === "cognidesk.model.generate"
      ? {
          attributes: { "app.customer_segment": "family" },
          metricAttributes: { "app.customer_segment": "family" },
          metrics: [{ name: "app.checkout.searches", value: 1 }],
        }
      : undefined,
  },
});
```

Tool implementations can use `context.telemetry.setAttributes(...)` and `context.telemetry.recordMetric(...)`. Custom metric names must be declared in `telemetry.customMetrics`; undeclared names are ignored. Attribute values are sanitized centrally: at most 32 attributes, key length 128, string value length 512, and array length 32.

## Public exports

- `@cognidesk/core`

## Links

- Documentation: https://cognidesk.cognilabz.com
- Repository: https://github.com/cognilabz/cognidesk/tree/main/packages/core
- Package docs: https://cognidesk.cognilabz.com/api-reference/
- License: Apache-2.0
