# integrations/help-center/cognidesk/dist

## Interfaces

### CognideskHelpCenterIntegrationOptions

#### Extends

- [`CreateHelpCenterClientOptions`](dist/runtime.md#createhelpcenterclientoptions)

#### Properties

##### client?

```ts
optional client?: HelpCenterClient;
```

##### fetch?

```ts
optional fetch?: {
  (input, init?): Promise<Response>;
  (input, init?): Promise<Response>;
};
```

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `URL` \| `RequestInfo` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `Request` \| `URL` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Inherited from

[`CreateHelpCenterClientOptions`](dist/runtime.md#createhelpcenterclientoptions).[`fetch`](dist/runtime.md#fetch)

##### providerClient?

```ts
optional providerClient?: HelpCenterProviderClient;
```

###### Inherited from

[`CreateHelpCenterClientOptions`](dist/runtime.md#createhelpcenterclientoptions).[`providerClient`](dist/runtime.md#providerclient)

##### retry?

```ts
optional retry?:
  | number
  | ProviderJsonRetryOptions;
```

###### Inherited from

[`CreateHelpCenterClientOptions`](dist/runtime.md#createhelpcenterclientoptions).[`retry`](dist/runtime.md#retry)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`CreateHelpCenterClientOptions`](dist/runtime.md#createhelpcenterclientoptions).[`signal`](dist/runtime.md#signal)

##### source

```ts
source: HelpCenterSource;
```

##### sourceClientFactory?

```ts
optional sourceClientFactory?: HelpCenterSourceClientFactory;
```

###### Inherited from

[`CreateHelpCenterClientOptions`](dist/runtime.md#createhelpcenterclientoptions).[`sourceClientFactory`](dist/runtime.md#sourceclientfactory)

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

###### Inherited from

[`CreateHelpCenterClientOptions`](dist/runtime.md#createhelpcenterclientoptions).[`timeoutMs`](dist/runtime.md#timeoutms)

***

### ParseHelpCenterWebhookOperationInput

#### Properties

##### options?

```ts
optional options?: ParseHelpCenterWebhookOptions;
```

##### request

```ts
request: Request;
```

## Functions

### createCognideskHelpCenterIntegration()

```ts
function createCognideskHelpCenterIntegration(options): DefinedIntegration<never, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CognideskHelpCenterIntegrationOptions`](#cognideskhelpcenterintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<`never`, `unknown`, `never`\>

## References

### cognideskHelpCenterProviderManifest

Re-exports [cognideskHelpCenterProviderManifest](dist/manifest.md#cognideskhelpcenterprovidermanifest)

***

### createDefaultHelpCenterSourceClient

Re-exports [createDefaultHelpCenterSourceClient](dist/runtime.md#createdefaulthelpcentersourceclient)

***

### createHelpCenterClient

Re-exports [createHelpCenterClient](dist/runtime.md#createhelpcenterclient)

***

### CreateHelpCenterClientOptions

Re-exports [CreateHelpCenterClientOptions](dist/runtime.md#createhelpcenterclientoptions)

***

### createHelpCenterSourceClientFactory

Re-exports [createHelpCenterSourceClientFactory](dist/runtime.md#createhelpcentersourceclientfactory)

***

### createHttpHelpCenterSourceClient

Re-exports [createHttpHelpCenterSourceClient](dist/runtime.md#createhttphelpcentersourceclient)

***

### createUnconfiguredHelpCenterProviderClient

Re-exports [createUnconfiguredHelpCenterProviderClient](dist/runtime.md#createunconfiguredhelpcenterproviderclient)

***

### defineHelpCenterSource

Re-exports [defineHelpCenterSource](dist/runtime.md#definehelpcentersource)

***

### guardHelpCenterFetch

Re-exports [guardHelpCenterFetch](dist/runtime.md#guardhelpcenterfetch)

***

### HelpCenterArticle

Re-exports [HelpCenterArticle](dist/runtime.md#helpcenterarticle)

***

### HelpCenterClient

Re-exports [HelpCenterClient](dist/runtime.md#helpcenterclient)

***

### helpCenterCredentialStatuses

Re-exports [helpCenterCredentialStatuses](dist/runtime.md#helpcentercredentialstatuses)

***

### HelpCenterCredentialStatusInput

Re-exports [HelpCenterCredentialStatusInput](dist/runtime.md#helpcentercredentialstatusinput)

***

### HelpCenterHttpEndpoints

Re-exports [HelpCenterHttpEndpoints](dist/runtime.md#helpcenterhttpendpoints)

***

### HelpCenterHttpMethod

Re-exports [HelpCenterHttpMethod](dist/runtime.md#helpcenterhttpmethod)

***

### HelpCenterIngestionEvent

Re-exports [HelpCenterIngestionEvent](dist/runtime.md#helpcenteringestionevent)

***

### HelpCenterJsonObject

Re-exports [HelpCenterJsonObject](dist/runtime.md#helpcenterjsonobject)

***

### HelpCenterJsonPrimitive

Re-exports [HelpCenterJsonPrimitive](dist/runtime.md#helpcenterjsonprimitive)

***

### HelpCenterJsonValue

Re-exports [HelpCenterJsonValue](dist/runtime.md#helpcenterjsonvalue)

***

### HelpCenterProviderClient

Re-exports [HelpCenterProviderClient](dist/runtime.md#helpcenterproviderclient)

***

### HelpCenterProviderExtensionFields

Re-exports [HelpCenterProviderExtensionFields](dist/runtime.md#helpcenterproviderextensionfields)

***

### HelpCenterProviderExtensionValue

Re-exports [HelpCenterProviderExtensionValue](dist/runtime.md#helpcenterproviderextensionvalue)

***

### HelpCenterProviderPayload

Re-exports [HelpCenterProviderPayload](dist/runtime.md#helpcenterproviderpayload)

***

### HelpCenterProviderQuery

Re-exports [HelpCenterProviderQuery](dist/runtime.md#helpcenterproviderquery)

***

### HelpCenterProviderResponse

Re-exports [HelpCenterProviderResponse](dist/runtime.md#helpcenterproviderresponse)

***

### HelpCenterSearchEvent

Re-exports [HelpCenterSearchEvent](dist/runtime.md#helpcentersearchevent)

***

### HelpCenterSearchInput

Re-exports [HelpCenterSearchInput](dist/runtime.md#helpcentersearchinput)

***

### HelpCenterSearchResult

Re-exports [HelpCenterSearchResult](dist/runtime.md#helpcentersearchresult)

***

### HelpCenterSource

Re-exports [HelpCenterSource](dist/runtime.md#helpcentersource)

***

### HelpCenterSourceClientFactory

Re-exports [HelpCenterSourceClientFactory](dist/runtime.md#helpcentersourceclientfactory)

***

### HelpCenterWebhookPayload

Re-exports [HelpCenterWebhookPayload](dist/runtime.md#helpcenterwebhookpayload)

***

### HttpHelpCenterSource

Re-exports [HttpHelpCenterSource](dist/runtime.md#httphelpcentersource)

***

### LocalHelpCenterSource

Re-exports [LocalHelpCenterSource](dist/runtime.md#localhelpcentersource)

***

### normalizeHelpCenterIngestionEvent

Re-exports [normalizeHelpCenterIngestionEvent](dist/runtime.md#normalizehelpcenteringestionevent)

***

### normalizeHelpCenterSearchEvent

Re-exports [normalizeHelpCenterSearchEvent](dist/runtime.md#normalizehelpcentersearchevent)

***

### parseHelpCenterWebhook

Re-exports [parseHelpCenterWebhook](dist/runtime.md#parsehelpcenterwebhook)

***

### ParseHelpCenterWebhookOptions

Re-exports [ParseHelpCenterWebhookOptions](dist/runtime.md#parsehelpcenterwebhookoptions)

***

### ProviderJsonRetryOptions

Re-exports [ProviderJsonRetryOptions](dist/runtime.md#providerjsonretryoptions)

***

### validateHelpCenterWebhookSignature

Re-exports [validateHelpCenterWebhookSignature](dist/runtime.md#validatehelpcenterwebhooksignature)
