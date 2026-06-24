# integrations/ticketing/hubspot/dist

## Interfaces

### HubSpotTicketingClient

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

### HubSpotTicketingClientOptions

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

### HubSpotTicketingOperationAlias

```ts
type HubSpotTicketingOperationAlias = string;
```

## Variables

### hubSpotTicketingProviderOperations

```ts
const hubSpotTicketingProviderOperations: ProviderOperationDeclarationInput[];
```

## Functions

### createHubSpotTicketingClient()

```ts
function createHubSpotTicketingClient(options?): HubSpotTicketingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`HubSpotTicketingClientOptions`](#hubspotticketingclientoptions) |

#### Returns

[`HubSpotTicketingClient`](#hubspotticketingclient)

***

### createHubSpotTicketingOperationHandlers()

```ts
function createHubSpotTicketingOperationHandlers(rawClient): IntegrationOperationHandlers;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawClient` | `any` |

#### Returns

[`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)

## References

### hubSpotTicketingProviderManifest

Re-exports [hubSpotTicketingProviderManifest](dist/manifest.md#hubspotticketingprovidermanifest)
