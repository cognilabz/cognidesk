# storage-sqlite/dist

## Classes

### SqliteStorageAdapter

#### Implements

- [`StorageAdapter`](../core/dist.md#storageadapter)

#### Constructors

##### Constructor

```ts
new SqliteStorageAdapter(options): SqliteStorageAdapter;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SqliteStorageOptions`](#sqlitestorageoptions) |

###### Returns

[`SqliteStorageAdapter`](#sqlitestorageadapter)

#### Properties

##### options

```ts
readonly options: SqliteStorageOptions;
```

#### Methods

##### appendEvent()

```ts
appendEvent<TEvent>(event): Promise<RuntimeEvent>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `TEvent` *extends* [`RuntimeEventInput`](../core/dist.md#runtimeeventinput) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `TEvent` |

###### Returns

`Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)\>

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`appendEvent`](../core/dist.md#appendevent)

##### close()

```ts
close(): void;
```

###### Returns

`void`

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
| `input` | [`CreateConversationInput`](../core/dist.md#createconversationinput)\<`TConversationContext`\> |

###### Returns

`Promise`\<[`ConversationRecord`](../core/dist.md#conversationrecord)\<`TConversationContext`\>\>

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`createConversation`](../core/dist.md#createconversation-1)

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

`Promise`\<[`ConversationRecord`](../core/dist.md#conversationrecord)\<`TConversationContext`\>\>

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`getConversation`](../core/dist.md#getconversation)

##### getSnapshot()

```ts
getSnapshot(conversationId): Promise<RuntimeSnapshot>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`RuntimeSnapshot`](../core/dist.md#runtimesnapshot)\>

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`getSnapshot`](../core/dist.md#getsnapshot-1)

##### initialize()

```ts
initialize(): void;
```

###### Returns

`void`

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`initialize`](../core/dist.md#initialize-1)

##### listEvents()

```ts
listEvents(options): Promise<RuntimeEvent[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ListEventsOptions`](../core/dist.md#listeventsoptions) |

###### Returns

`Promise`\<[`RuntimeEvent`](../core/dist.md#runtimeevent)[]\>

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`listEvents`](../core/dist.md#listevents-1)

##### saveSnapshot()

```ts
saveSnapshot(snapshot): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `snapshot` | [`RuntimeSnapshot`](../core/dist.md#runtimesnapshot) |

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`saveSnapshot`](../core/dist.md#savesnapshot)

##### updateConversationLifecycle()

```ts
updateConversationLifecycle(conversationId, lifecycle): Promise<ConversationRecord<unknown>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `lifecycle` | [`ConversationLifecycle`](../core/dist.md#conversationlifecycle) |

###### Returns

`Promise`\<[`ConversationRecord`](../core/dist.md#conversationrecord)\<`unknown`\>\>

###### Implementation of

[`StorageAdapter`](../core/dist.md#storageadapter).[`updateConversationLifecycle`](../core/dist.md#updateconversationlifecycle)

## Interfaces

### SqliteStorageOptions

#### Properties

##### busyTimeoutMs?

```ts
optional busyTimeoutMs?: number;
```

##### filename

```ts
filename: string;
```

##### journalMode?

```ts
optional journalMode?: "delete" | "wal" | "memory";
```

## Functions

### createSqliteStorage()

```ts
function createSqliteStorage(options): SqliteStorageAdapter;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SqliteStorageOptions`](#sqlitestorageoptions) |

#### Returns

[`SqliteStorageAdapter`](#sqlitestorageadapter)
