# integrations/help-center/cognidesk/dist

## Interfaces

### CognideskHelpCenterIntegrationOptions

#### Properties

##### source

```ts
source: HelpCenterSource;
```

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

### createHelpCenterClient

Re-exports [createHelpCenterClient](dist/runtime.md#createhelpcenterclient)

***

### defineHelpCenterSource

Re-exports [defineHelpCenterSource](dist/runtime.md#definehelpcentersource)

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

### validateHelpCenterWebhookSignature

Re-exports [validateHelpCenterWebhookSignature](dist/runtime.md#validatehelpcenterwebhooksignature)
