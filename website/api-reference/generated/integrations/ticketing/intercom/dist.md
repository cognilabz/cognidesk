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
rawClient: IntercomTicketingRawClient;
```

#### Methods

##### getRawClient()

```ts
getRawClient(): IntercomTicketingRawClient;
```

###### Returns

[`IntercomTicketingRawClient`](#intercomticketingrawclient)

***

### IntercomTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### rawClient?

```ts
optional rawClient?: IntercomTicketingRawClient;
```

##### sdkOptions?

```ts
optional sdkOptions?: BaseClientOptions;
```

***

### IntercomTicketingRawClient

#### Properties

##### conversations

```ts
conversations: {
  find: unknown;
};
```

###### find()

```ts
find(request): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `FindConversationRequest` |

###### Returns

`unknown`

##### tickets

```ts
tickets: {
  create: unknown;
  get: unknown;
  reply: unknown;
  search: unknown;
  update: unknown;
};
```

###### create()

```ts
create(request): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `CreateTicketRequest` |

###### Returns

`unknown`

###### get()

```ts
get(request): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `FindTicketRequest` |

###### Returns

`unknown`

###### reply()

```ts
reply(request): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `ReplyToTicketRequest` |

###### Returns

`unknown`

###### search()

```ts
search(request): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `SearchRequest` |

###### Returns

`unknown`

###### update()

```ts
update(request): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `UpdateTicketRequest` |

###### Returns

`unknown`

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
| `rawClient` | [`IntercomTicketingRawClient`](#intercomticketingrawclient) |

#### Returns

[`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)

## References

### intercomTicketingProviderManifest

Re-exports [intercomTicketingProviderManifest](dist/manifest.md#intercomticketingprovidermanifest)
