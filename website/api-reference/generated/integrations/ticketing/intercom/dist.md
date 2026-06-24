# integrations/ticketing/intercom/dist

## Interfaces

### IntercomTicketingClient

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

### IntercomTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### rawClient?

```ts
optional rawClient?: any;
```

## Type Aliases

### IntercomTicketingOperationAlias

```ts
type IntercomTicketingOperationAlias = string;
```

## Variables

### intercomTicketingProviderOperations

```ts
const intercomTicketingProviderOperations: ProviderOperationDeclarationInput[];
```

## Functions

### createIntercomTicketingClient()

```ts
function createIntercomTicketingClient(options?): IntercomTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`IntercomTicketingClientOptions`](#intercomticketingclientoptions) |

#### Returns

[`IntercomTicketingClient`](#intercomticketingclient)

***

### createIntercomTicketingOperationHandlers()

```ts
function createIntercomTicketingOperationHandlers(rawClient): IntegrationOperationHandlers;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawClient` | `any` |

#### Returns

[`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)

## References

### intercomTicketingProviderManifest

Re-exports [intercomTicketingProviderManifest](dist/manifest.md#intercomticketingprovidermanifest)
