# packages/storage/dist/conformance

## Interfaces

### StorageAdapterConformanceOptions

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TStorage` *extends* [`StorageAdapter`](../../core/dist.md#storageadapter) | [`StorageAdapter`](../../core/dist.md#storageadapter) |

#### Properties

##### cleanup?

```ts
optional cleanup?: (storage) => void | Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `storage` | `TStorage` |

###### Returns

`void` \| `Promise`\<`void`\>

##### createStorage

```ts
createStorage: () => TStorage | Promise<TStorage>;
```

###### Returns

`TStorage` \| `Promise`\<`TStorage`\>

##### name

```ts
name: string;
```

## Functions

### defineStorageAdapterConformanceSuite()

```ts
function defineStorageAdapterConformanceSuite<TStorage>(options): void;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TStorage` *extends* [`StorageAdapter`](../../core/dist.md#storageadapter) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`StorageAdapterConformanceOptions`](#storageadapterconformanceoptions)\<`TStorage`\> |

#### Returns

`void`
