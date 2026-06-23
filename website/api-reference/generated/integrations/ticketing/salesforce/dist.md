# integrations/ticketing/salesforce/dist

## Interfaces

### SalesforceTicketingClient

#### Properties

##### integration

```ts
integration: DefinedIntegration<ProviderManifestAuthorInput>;
```

##### rawClient

```ts
rawClient: any;
```

***

### SalesforceTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### instanceUrl?

```ts
optional instanceUrl?: string;
```

##### rawClient?

```ts
optional rawClient?: any;
```

## Type Aliases

### SalesforceTicketingOperationAlias

```ts
type SalesforceTicketingOperationAlias = string;
```

## Variables

### salesforceTicketingProviderOperations

```ts
const salesforceTicketingProviderOperations: ProviderOperationDeclarationInput[];
```

## Functions

### createSalesforceTicketingClient()

```ts
function createSalesforceTicketingClient(options?): SalesforceTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`SalesforceTicketingClientOptions`](#salesforceticketingclientoptions) |

#### Returns

[`SalesforceTicketingClient`](#salesforceticketingclient)

***

### createSalesforceTicketingOperationHandlers()

```ts
function createSalesforceTicketingOperationHandlers(rawClient): IntegrationOperationHandlers;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawClient` | `any` |

#### Returns

[`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)

## References

### salesforceTicketingProviderManifest

Re-exports [salesforceTicketingProviderManifest](dist/manifest.md#salesforceticketingprovidermanifest)
