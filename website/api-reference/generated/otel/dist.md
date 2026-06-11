# otel/dist

## Interfaces

### CognideskDemoTelemetrySeedHandle

#### Methods

##### shutdown()

```ts
shutdown(): void;
```

###### Returns

`void`

***

### CognideskDemoTelemetrySeedOptions

#### Properties

##### intervalMillis?

```ts
optional intervalMillis?: number;
```

##### serviceName?

```ts
optional serviceName?: string;
```

##### serviceVersion?

```ts
optional serviceVersion?: string;
```

***

### CognideskOtelHandle

#### Properties

##### sdk

```ts
sdk: NodeSDK;
```

#### Methods

##### shutdown()

```ts
shutdown(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

***

### CognideskOtelOptions

#### Properties

##### environment?

```ts
optional environment?: string;
```

##### installShutdownHooks?

```ts
optional installShutdownHooks?: boolean;
```

##### metricExportIntervalMillis?

```ts
optional metricExportIntervalMillis?: number;
```

##### metricsEndpoint?

```ts
optional metricsEndpoint?: string;
```

##### otlpEndpoint?

```ts
optional otlpEndpoint?: string;
```

##### resourceAttributes?

```ts
optional resourceAttributes?: Record<string, string | number | boolean>;
```

##### serviceName

```ts
serviceName: string;
```

##### serviceVersion?

```ts
optional serviceVersion?: string;
```

##### tracesEndpoint?

```ts
optional tracesEndpoint?: string;
```

## Functions

### startCognideskDemoTelemetrySeed()

```ts
function startCognideskDemoTelemetrySeed(options?): CognideskDemoTelemetrySeedHandle;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`CognideskDemoTelemetrySeedOptions`](#cognideskdemotelemetryseedoptions) |

#### Returns

[`CognideskDemoTelemetrySeedHandle`](#cognideskdemotelemetryseedhandle)

***

### startCognideskOtel()

```ts
function startCognideskOtel(options): CognideskOtelHandle;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CognideskOtelOptions`](#cognideskoteloptions) |

#### Returns

[`CognideskOtelHandle`](#cognideskotelhandle)
