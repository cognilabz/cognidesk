# packages/storage/dist/postgres

## Classes

### PostgresStorageAdapter

#### Implements

- [`StorageAdapter`](../../core/dist.md#storageadapter)

#### Constructors

##### Constructor

```ts
new PostgresStorageAdapter(options): PostgresStorageAdapter;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PostgresStorageOptions`](#postgresstorageoptions) |

###### Returns

[`PostgresStorageAdapter`](#postgresstorageadapter)

#### Properties

##### options

```ts
readonly options: PostgresStorageOptions;
```

#### Methods

##### appendEvent()

```ts
appendEvent<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](../../core/dist.md#runtimeeventinput) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](../../core/dist.md#runtimeevent)\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`appendEvent`](../../core/dist.md#appendevent)

##### appendEventIfApprovalPending()

```ts
appendEventIfApprovalPending<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](../../core/dist.md#runtimeeventinput)\<`"approval.resolved"`\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](../../core/dist.md#runtimeevent)\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`appendEventIfApprovalPending`](../../core/dist.md#appendeventifapprovalpending)

##### appendEventIfNoActiveVoiceSegment()

```ts
appendEventIfNoActiveVoiceSegment<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](../../core/dist.md#runtimeeventinput)\<`"voice.segment.started"`\> |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](../../core/dist.md#runtimeevent)\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`appendEventIfNoActiveVoiceSegment`](../../core/dist.md#appendeventifnoactivevoicesegment)

##### close()

```ts
close(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

##### createConversation()

```ts
createConversation<TConversationContext>(input): Promise<ConversationRecord<TConversationContext>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CreateConversationInput`](../../core/dist.md#createconversationinput)\<`TConversationContext`\> |

###### Returns

`Promise`\<[`ConversationRecord`](../../core/dist.md#conversationrecord)\<`TConversationContext`\>\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`createConversation`](../../core/dist.md#createconversation-3)

##### getConversation()

```ts
getConversation<TConversationContext>(conversationId): Promise<ConversationRecord<TConversationContext>>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`ConversationRecord`](../../core/dist.md#conversationrecord)\<`TConversationContext`\>\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`getConversation`](../../core/dist.md#getconversation)

##### getSnapshot()

```ts
getSnapshot(conversationId): Promise<RuntimeSnapshot>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`RuntimeSnapshot`](../../core/dist.md#runtimesnapshot)\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`getSnapshot`](../../core/dist.md#getsnapshot-1)

##### initialize()

```ts
initialize(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`initialize`](../../core/dist.md#initialize-1)

##### listConversations()

```ts
listConversations<TConversationContext>(options?): Promise<ConversationRecord<TConversationContext>[]>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TConversationContext` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ListConversationsOptions`](../../core/dist.md#listconversationsoptions) |

###### Returns

`Promise`\<[`ConversationRecord`](../../core/dist.md#conversationrecord)\<`TConversationContext`\>[]\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`listConversations`](../../core/dist.md#listconversations-1)

##### listEvents()

```ts
listEvents(options): Promise<RuntimeEvent[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ListEventsOptions`](../../core/dist.md#listeventsoptions) |

###### Returns

`Promise`\<[`RuntimeEvent`](../../core/dist.md#runtimeevent)[]\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`listEvents`](../../core/dist.md#listevents-1)

##### saveSnapshot()

```ts
saveSnapshot(snapshot): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | [`RuntimeSnapshot`](../../core/dist.md#runtimesnapshot) |

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`saveSnapshot`](../../core/dist.md#savesnapshot)

##### updateConversationLifecycle()

```ts
updateConversationLifecycle(conversationId, lifecycle): Promise<ConversationRecord<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `lifecycle` | [`ConversationLifecycle`](../../core/dist.md#conversationlifecycle) |

###### Returns

`Promise`\<[`ConversationRecord`](../../core/dist.md#conversationrecord)\<`unknown`\>\>

###### Implementation of

[`StorageAdapter`](../../core/dist.md#storageadapter).[`updateConversationLifecycle`](../../core/dist.md#updateconversationlifecycle)

## Type Aliases

### PostgresStorageClient

```ts
type PostgresStorageClient = Pool | Client;
```

***

### PostgresStorageDatabase

```ts
type PostgresStorageDatabase = NodePgDatabase<typeof postgresStorageSchema>;
```

***

### PostgresStorageOptions

```ts
type PostgresStorageOptions =
  | {
  client?: never;
  connection?: never;
  db?: never;
  url: string;
}
  | {
  client?: never;
  connection: string | PoolConfig;
  db?: never;
  url?: never;
}
  | {
  client: PostgresStorageClient;
  connection?: never;
  db?: never;
  url?: never;
}
  | {
  client?: never;
  connection?: never;
  db: PostgresStorageDatabase;
  url?: never;
};
```

## Functions

### createPostgresStorage()

```ts
function createPostgresStorage(options): PostgresStorageAdapter;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PostgresStorageOptions`](#postgresstorageoptions) |

#### Returns

[`PostgresStorageAdapter`](#postgresstorageadapter)
