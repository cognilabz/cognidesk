# integrations/messaging/discord/dist

## Classes

### DiscordGatewayService

#### Constructors

##### Constructor

```ts
new DiscordGatewayService(options): DiscordGatewayService;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DiscordGatewayServiceOptions`](#discordgatewayserviceoptions) |

###### Returns

[`DiscordGatewayService`](#discordgatewayservice)

#### Methods

##### continueConversation()

```ts
continueConversation(conversationId, options?): Promise<ContinueConversationInDiscordResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |
| `options?` | [`ContinueConversationInDiscordOptions`](#continueconversationindiscordoptions) |

###### Returns

`Promise`\<[`ContinueConversationInDiscordResult`](#continueconversationindiscordresult)\>

##### start()

```ts
start(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

##### status()

```ts
status(): DiscordGatewayStatus;
```

###### Returns

[`DiscordGatewayStatus`](#discordgatewaystatus)

##### stop()

```ts
stop(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

***

### DiscordSqliteStore

#### Implements

- [`DiscordGatewayStore`](#discordgatewaystore)

#### Constructors

##### Constructor

```ts
new DiscordSqliteStore(options): DiscordSqliteStore;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DiscordSqliteStoreOptions`](#discordsqlitestoreoptions) |

###### Returns

[`DiscordSqliteStore`](#discordsqlitestore)

#### Methods

##### close()

```ts
close(): void;
```

###### Returns

`void`

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`close`](#close-1)

##### deactivateBinding()

```ts
deactivateBinding(discordThreadId): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`deactivateBinding`](#deactivatebinding-1)

##### getBindingByThreadId()

```ts
getBindingByThreadId(discordThreadId): Promise<DiscordThreadBinding>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`getBindingByThreadId`](#getbindingbythreadid-1)

##### getLastMirroredOffset()

```ts
getLastMirroredOffset(discordThreadId): Promise<number>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |

###### Returns

`Promise`\<`number`\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`getLastMirroredOffset`](#getlastmirroredoffset-1)

##### hasMirroredEvent()

```ts
hasMirroredEvent(discordThreadId, runtimeEventId): Promise<boolean>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |
| `runtimeEventId` | `string` |

###### Returns

`Promise`\<`boolean`\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`hasMirroredEvent`](#hasmirroredevent-1)

##### initialize()

```ts
initialize(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`initialize`](#initialize-1)

##### listActiveBindings()

```ts
listActiveBindings(): Promise<DiscordThreadBinding[]>;
```

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)[]\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`listActiveBindings`](#listactivebindings-1)

##### listActiveBindingsForConversation()

```ts
listActiveBindingsForConversation(conversationId): Promise<DiscordThreadBinding[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)[]\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`listActiveBindingsForConversation`](#listactivebindingsforconversation-1)

##### recordMirroredEvent()

```ts
recordMirroredEvent(input): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RecordMirroredEventInput`](#recordmirroredeventinput) |

###### Returns

`Promise`\<`void`\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`recordMirroredEvent`](#recordmirroredevent-1)

##### upsertBinding()

```ts
upsertBinding(input): Promise<DiscordThreadBinding>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `active?`: `boolean`; `conversationId`: `string`; `discordThreadId`: `string`; `discordVoiceChannelId?`: `string`; `discordVoiceChannelName?`: `string`; `guildId`: `string`; `parentChannelId`: `string`; `starterUserId?`: `string`; `threadName?`: `string`; \} |
| `input.active?` | `boolean` |
| `input.conversationId` | `string` |
| `input.discordThreadId` | `string` |
| `input.discordVoiceChannelId?` | `string` |
| `input.discordVoiceChannelName?` | `string` |
| `input.guildId` | `string` |
| `input.parentChannelId` | `string` |
| `input.starterUserId?` | `string` |
| `input.threadName?` | `string` |

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)\>

###### Implementation of

[`DiscordGatewayStore`](#discordgatewaystore).[`upsertBinding`](#upsertbinding-1)

## Interfaces

### ContinueConversationInDiscordOptions

#### Properties

##### voice?

```ts
optional voice?: boolean;
```

***

### ContinueConversationInDiscordResult

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### discordThreadId

```ts
discordThreadId: string;
```

##### discordThreadUrl

```ts
discordThreadUrl: string;
```

##### discordVoiceChannelId?

```ts
optional discordVoiceChannelId?: string;
```

##### discordVoiceChannelUrl?

```ts
optional discordVoiceChannelUrl?: string;
```

##### enabled

```ts
enabled: true;
```

##### ready

```ts
ready: boolean;
```

***

### DiscordAllowedMentions

#### Properties

##### parse?

```ts
optional parse?: ("roles" | "users" | "everyone")[];
```

##### replied\_user?

```ts
optional replied_user?: boolean;
```

##### roles?

```ts
optional roles?: string[];
```

##### users?

```ts
optional users?: string[];
```

***

### DiscordApplicationResource

#### Indexable

```ts
[key: string]: DiscordMessagingProviderExtensionValue
```

#### Properties

##### bot\_public?

```ts
optional bot_public?: boolean;
```

##### bot\_require\_code\_grant?

```ts
optional bot_require_code_grant?: boolean;
```

##### description?

```ts
optional description?: string;
```

##### id?

```ts
optional id?: string;
```

##### name?

```ts
optional name?: string;
```

##### verify\_key?

```ts
optional verify_key?: string;
```

***

### DiscordChannelResource

#### Indexable

```ts
[key: string]: DiscordMessagingProviderExtensionValue
```

#### Properties

##### guild\_id?

```ts
optional guild_id?: string;
```

##### id?

```ts
optional id?: string;
```

##### message?

```ts
optional message?: DiscordMessageResource;
```

##### name?

```ts
optional name?: string;
```

##### parent\_id?

```ts
optional parent_id?: string;
```

##### thread\_metadata?

```ts
optional thread_metadata?: DiscordMessagingJsonObject;
```

##### topic?

```ts
optional topic?: string;
```

##### type?

```ts
optional type?: number;
```

***

### DiscordCreateForumPostInput

#### Extends

- [`DiscordMessageInput`](#discordmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: DiscordMessagingJsonObject;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`additionalFields`](#additionalfields-2)

##### allowedMentions?

```ts
optional allowedMentions?: DiscordAllowedMentions;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`allowedMentions`](#allowedmentions-2)

##### appliedTags?

```ts
optional appliedTags?: string[];
```

##### attachments?

```ts
optional attachments?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`attachments`](#attachments-2)

##### autoArchiveDuration?

```ts
optional autoArchiveDuration?: number;
```

##### channelId

```ts
channelId: string;
```

##### components?

```ts
optional components?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`components`](#components-2)

##### content?

```ts
optional content?: string;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`content`](#content-2)

##### embeds?

```ts
optional embeds?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`embeds`](#embeds-2)

##### flags?

```ts
optional flags?: number;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`flags`](#flags-2)

##### messageReference?

```ts
optional messageReference?: DiscordMessagingJsonObject;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`messageReference`](#messagereference-2)

##### name

```ts
name: string;
```

##### rateLimitPerUser?

```ts
optional rateLimitPerUser?: number;
```

##### reason?

```ts
optional reason?: string;
```

##### stickerIds?

```ts
optional stickerIds?: string[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`stickerIds`](#stickerids-2)

##### tts?

```ts
optional tts?: boolean;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`tts`](#tts-2)

***

### DiscordCreateThreadInput

#### Properties

##### autoArchiveDuration?

```ts
optional autoArchiveDuration?: number;
```

##### channelId

```ts
channelId: string;
```

##### invitable?

```ts
optional invitable?: boolean;
```

##### name

```ts
name: string;
```

##### rateLimitPerUser?

```ts
optional rateLimitPerUser?: number;
```

##### reason?

```ts
optional reason?: string;
```

##### type?

```ts
optional type?: number;
```

***

### DiscordCredentialStatusInput

#### Properties

##### applicationId?

```ts
optional applicationId?: string;
```

##### botInstalled?

```ts
optional botInstalled?: boolean;
```

##### botToken?

```ts
optional botToken?: string;
```

##### channelId?

```ts
optional channelId?: string;
```

##### channelPermissionGranted?

```ts
optional channelPermissionGranted?: boolean;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### guildId?

```ts
optional guildId?: string;
```

##### publicKey?

```ts
optional publicKey?: string;
```

##### requiredScopes?

```ts
optional requiredScopes?: string[];
```

##### scopes?

```ts
optional scopes?: string[];
```

##### webhookUrl?

```ts
optional webhookUrl?: string;
```

***

### DiscordExecuteWebhookInput

#### Extends

- [`DiscordMessageInput`](#discordmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: DiscordMessagingJsonObject;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`additionalFields`](#additionalfields-2)

##### allowedMentions?

```ts
optional allowedMentions?: DiscordAllowedMentions;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`allowedMentions`](#allowedmentions-2)

##### attachments?

```ts
optional attachments?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`attachments`](#attachments-2)

##### components?

```ts
optional components?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`components`](#components-2)

##### content?

```ts
optional content?: string;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`content`](#content-2)

##### embeds?

```ts
optional embeds?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`embeds`](#embeds-2)

##### flags?

```ts
optional flags?: number;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`flags`](#flags-2)

##### messageReference?

```ts
optional messageReference?: DiscordMessagingJsonObject;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`messageReference`](#messagereference-2)

##### stickerIds?

```ts
optional stickerIds?: string[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`stickerIds`](#stickerids-2)

##### threadId?

```ts
optional threadId?: string;
```

##### tts?

```ts
optional tts?: boolean;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`tts`](#tts-2)

##### wait?

```ts
optional wait?: boolean;
```

##### webhookUrl

```ts
webhookUrl: string;
```

***

### DiscordGatewayClientOptions

#### Properties

##### clientOptions?

```ts
optional clientOptions?: ClientOptions;
```

***

### DiscordGatewayServiceConfig

#### Properties

##### applicationId

```ts
applicationId: string;
```

##### guildId

```ts
guildId: string;
```

##### mirrorPollIntervalMs

```ts
mirrorPollIntervalMs: number;
```

##### supportChannelId

```ts
supportChannelId: string;
```

##### threadAutoArchiveDuration

```ts
threadAutoArchiveDuration: DiscordThreadAutoArchiveDuration;
```

##### webAppUrl

```ts
webAppUrl: string;
```

***

### DiscordGatewayServiceCopy

#### Properties

##### promptFallbackMessage?

```ts
optional promptFallbackMessage?: (input) => string;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `conversationId`: `string`; `conversationUrl`: `string`; \} |
| `input.conversationId` | `string` |
| `input.conversationUrl` | `string` |

###### Returns

`string`

##### sourceThreadNamePrefix?

```ts
optional sourceThreadNamePrefix?: string;
```

##### supportThreadNamePrefix?

```ts
optional supportThreadNamePrefix?: string;
```

##### turnFailureMessage?

```ts
optional turnFailureMessage?: (input) => string;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `conversationUrl`: `string`; `discordThreadId`: `string`; \} |
| `input.conversationUrl` | `string` |
| `input.discordThreadId` | `string` |

###### Returns

`string`

##### voiceChannelNamePrefix?

```ts
optional voiceChannelNamePrefix?: string;
```

##### voiceHandoffMessage?

```ts
optional voiceHandoffMessage?: (input) => string;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `conversationId`: `string`; `conversationUrl`: `string`; `discordThreadId`: `string`; `discordThreadUrl`: `string`; `discordVoiceChannelId`: `string`; `discordVoiceChannelUrl`: `string`; \} |
| `input.conversationId` | `string` |
| `input.conversationUrl` | `string` |
| `input.discordThreadId` | `string` |
| `input.discordThreadUrl` | `string` |
| `input.discordVoiceChannelId` | `string` |
| `input.discordVoiceChannelUrl` | `string` |

###### Returns

`string`

##### voiceMessagePrefix?

```ts
optional voiceMessagePrefix?: string;
```

##### webMessagePrefix?

```ts
optional webMessagePrefix?: string;
```

***

### DiscordGatewayServiceOptions

#### Properties

##### agentId

```ts
agentId: string;
```

##### botToken

```ts
botToken: string;
```

##### config

```ts
config: DiscordGatewayServiceConfig;
```

##### copy?

```ts
optional copy?: DiscordGatewayServiceCopy;
```

##### runtime

```ts
runtime: CognideskRuntime;
```

##### store

```ts
store: DiscordGatewayStore;
```

***

### DiscordGatewayStatus

#### Properties

##### applicationId

```ts
applicationId: string;
```

##### botUser?

```ts
optional botUser?: {
  id: string;
  tag: string;
};
```

###### id

```ts
id: string;
```

###### tag

```ts
tag: string;
```

##### enabled

```ts
enabled: true;
```

##### guildId

```ts
guildId: string;
```

##### ready

```ts
ready: boolean;
```

##### supportChannelId

```ts
supportChannelId: string;
```

***

### DiscordGatewayStore

#### Methods

##### close()

```ts
close(): void;
```

###### Returns

`void`

##### deactivateBinding()

```ts
deactivateBinding(discordThreadId): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |

###### Returns

`Promise`\<`void`\>

##### getBindingByThreadId()

```ts
getBindingByThreadId(discordThreadId): Promise<DiscordThreadBinding>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)\>

##### getLastMirroredOffset()

```ts
getLastMirroredOffset(discordThreadId): Promise<number>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |

###### Returns

`Promise`\<`number`\>

##### hasMirroredEvent()

```ts
hasMirroredEvent(discordThreadId, runtimeEventId): Promise<boolean>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordThreadId` | `string` |
| `runtimeEventId` | `string` |

###### Returns

`Promise`\<`boolean`\>

##### initialize()

```ts
initialize(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

##### listActiveBindings()

```ts
listActiveBindings(): Promise<DiscordThreadBinding[]>;
```

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)[]\>

##### listActiveBindingsForConversation()

```ts
listActiveBindingsForConversation(conversationId): Promise<DiscordThreadBinding[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)[]\>

##### recordMirroredEvent()

```ts
recordMirroredEvent(input): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RecordMirroredEventInput`](#recordmirroredeventinput) |

###### Returns

`Promise`\<`void`\>

##### upsertBinding()

```ts
upsertBinding(input): Promise<DiscordThreadBinding>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `active?`: `boolean`; `conversationId`: `string`; `discordThreadId`: `string`; `discordVoiceChannelId?`: `string`; `discordVoiceChannelName?`: `string`; `guildId`: `string`; `parentChannelId`: `string`; `starterUserId?`: `string`; `threadName?`: `string`; \} |
| `input.active?` | `boolean` |
| `input.conversationId` | `string` |
| `input.discordThreadId` | `string` |
| `input.discordVoiceChannelId?` | `string` |
| `input.discordVoiceChannelName?` | `string` |
| `input.guildId` | `string` |
| `input.parentChannelId` | `string` |
| `input.starterUserId?` | `string` |
| `input.threadName?` | `string` |

###### Returns

`Promise`\<[`DiscordThreadBinding`](#discordthreadbinding)\>

***

### DiscordGetChannelInput

#### Properties

##### channelId

```ts
channelId: string;
```

***

### DiscordGetGuildInput

#### Properties

##### guildId

```ts
guildId: string;
```

***

### DiscordGuildResource

#### Indexable

```ts
[key: string]: DiscordMessagingProviderExtensionValue
```

#### Properties

##### features?

```ts
optional features?: string[];
```

##### icon?

```ts
optional icon?: string;
```

##### id?

```ts
optional id?: string;
```

##### name?

```ts
optional name?: string;
```

##### owner\_id?

```ts
optional owner_id?: string;
```

***

### DiscordInteractionPayload

#### Indexable

```ts
[key: string]: DiscordMessagingProviderExtensionValue
```

#### Properties

##### application\_id?

```ts
optional application_id?: string;
```

##### channel\_id?

```ts
optional channel_id?: string;
```

##### data?

```ts
optional data?: DiscordMessagingJsonObject;
```

##### guild\_id?

```ts
optional guild_id?: string;
```

##### id?

```ts
optional id?: string;
```

##### member?

```ts
optional member?: DiscordMessagingProviderExtensionValue;
```

##### message?

```ts
optional message?: DiscordMessageResource;
```

##### token?

```ts
optional token?: string;
```

##### type?

```ts
optional type?: number;
```

##### user?

```ts
optional user?: DiscordUserResource;
```

***

### DiscordListMessagesInput

#### Properties

##### after?

```ts
optional after?: string;
```

##### around?

```ts
optional around?: string;
```

##### before?

```ts
optional before?: string;
```

##### channelId

```ts
channelId: string;
```

##### limit?

```ts
optional limit?: number;
```

***

### DiscordLiveCheckOptions

#### Extends

- [`DiscordMessagingClientOptions`](#discordmessagingclientoptions)

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`DiscordMessagingClientOptions`](#discordmessagingclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### apiVersion?

```ts
optional apiVersion?: string;
```

###### Inherited from

[`DiscordMessagingClientOptions`](#discordmessagingclientoptions).[`apiVersion`](#apiversion-1)

##### applicationId?

```ts
optional applicationId?: string;
```

##### botToken?

```ts
optional botToken?: string;
```

###### Inherited from

[`DiscordMessagingClientOptions`](#discordmessagingclientoptions).[`botToken`](#bottoken-3)

##### channelId?

```ts
optional channelId?: string;
```

##### client?

```ts
optional client?: Pick<DiscordMessagingClient, "getCurrentBot" | "getCurrentApplication" | "getGuild" | "getChannel">;
```

##### guildId?

```ts
optional guildId?: string;
```

##### rest?

```ts
optional rest?: DiscordRestLike;
```

###### Inherited from

[`DiscordMessagingClientOptions`](#discordmessagingclientoptions).[`rest`](#rest-2)

***

### DiscordMessageInput

#### Extended by

- [`DiscordCreateForumPostInput`](#discordcreateforumpostinput)
- [`DiscordExecuteWebhookInput`](#discordexecutewebhookinput)
- [`DiscordSendChannelMessageInput`](#discordsendchannelmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: DiscordMessagingJsonObject;
```

##### allowedMentions?

```ts
optional allowedMentions?: DiscordAllowedMentions;
```

##### attachments?

```ts
optional attachments?: DiscordMessagingJsonValue[];
```

##### components?

```ts
optional components?: DiscordMessagingJsonValue[];
```

##### content?

```ts
optional content?: string;
```

##### embeds?

```ts
optional embeds?: DiscordMessagingJsonValue[];
```

##### flags?

```ts
optional flags?: number;
```

##### messageReference?

```ts
optional messageReference?: DiscordMessagingJsonObject;
```

##### stickerIds?

```ts
optional stickerIds?: string[];
```

##### tts?

```ts
optional tts?: boolean;
```

***

### DiscordMessageResource

#### Indexable

```ts
[key: string]: DiscordMessagingProviderExtensionValue
```

#### Properties

##### attachments?

```ts
optional attachments?: DiscordMessagingJsonValue[];
```

##### author?

```ts
optional author?: DiscordUserResource;
```

##### channel\_id?

```ts
optional channel_id?: string;
```

##### components?

```ts
optional components?: DiscordMessagingJsonValue[];
```

##### content?

```ts
optional content?: string;
```

##### edited\_timestamp?

```ts
optional edited_timestamp?: string;
```

##### embeds?

```ts
optional embeds?: DiscordMessagingJsonValue[];
```

##### flags?

```ts
optional flags?: number;
```

##### guild\_id?

```ts
optional guild_id?: string;
```

##### id?

```ts
optional id?: string;
```

##### mention\_everyone?

```ts
optional mention_everyone?: boolean;
```

##### mentions?

```ts
optional mentions?: DiscordMessagingJsonValue[];
```

##### thread?

```ts
optional thread?: DiscordChannelResource;
```

##### timestamp?

```ts
optional timestamp?: string;
```

##### tts?

```ts
optional tts?: boolean;
```

***

### DiscordMessagingClient

#### Properties

##### rest

```ts
rest: DiscordRestLike | REST;
```

#### Methods

##### createForumPost()

```ts
createForumPost(input): Promise<DiscordChannelResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DiscordCreateForumPostInput`](#discordcreateforumpostinput) |

###### Returns

`Promise`\<[`DiscordChannelResource`](#discordchannelresource)\>

##### createGatewayClient()

```ts
createGatewayClient(options?): Client;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`DiscordGatewayClientOptions`](#discordgatewayclientoptions) |

###### Returns

`Client`

##### createThread()

```ts
createThread(input): Promise<DiscordChannelResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DiscordCreateThreadInput`](#discordcreatethreadinput) |

###### Returns

`Promise`\<[`DiscordChannelResource`](#discordchannelresource)\>

##### executeWebhook()

```ts
executeWebhook(input): Promise<
  | Record<string, never>
| DiscordMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DiscordExecuteWebhookInput`](#discordexecutewebhookinput) |

###### Returns

`Promise`\<
  \| `Record`\<`string`, `never`\>
  \| [`DiscordMessageResource`](#discordmessageresource)\>

##### getChannel()

```ts
getChannel(channelId): Promise<DiscordChannelResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelId` | `string` |

###### Returns

`Promise`\<[`DiscordChannelResource`](#discordchannelresource)\>

##### getCurrentApplication()

```ts
getCurrentApplication(): Promise<DiscordApplicationResource>;
```

###### Returns

`Promise`\<[`DiscordApplicationResource`](#discordapplicationresource)\>

##### getCurrentBot()

```ts
getCurrentBot(): Promise<DiscordUserResource>;
```

###### Returns

`Promise`\<[`DiscordUserResource`](#discorduserresource)\>

##### getGuild()

```ts
getGuild(guildId): Promise<DiscordGuildResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `guildId` | `string` |

###### Returns

`Promise`\<[`DiscordGuildResource`](#discordguildresource)\>

##### listChannelMessages()

```ts
listChannelMessages(input): Promise<DiscordMessageResource[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DiscordListMessagesInput`](#discordlistmessagesinput) |

###### Returns

`Promise`\<[`DiscordMessageResource`](#discordmessageresource)[]\>

##### sendChannelMessage()

```ts
sendChannelMessage(input): Promise<DiscordMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DiscordSendChannelMessageInput`](#discordsendchannelmessageinput) |

###### Returns

`Promise`\<[`DiscordMessageResource`](#discordmessageresource)\>

***

### DiscordMessagingClientOptions

#### Extended by

- [`DiscordLiveCheckOptions`](#discordlivecheckoptions)

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### botToken?

```ts
optional botToken?: string;
```

##### rest?

```ts
optional rest?: DiscordRestLike;
```

***

### DiscordMessagingJsonObject

#### Indexable

```ts
[key: string]: DiscordMessagingProviderExtensionValue
```

***

### DiscordParsedInteractionRequest

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### payload

```ts
payload: DiscordInteractionPayload;
```

##### rawBody

```ts
rawBody: string;
```

##### validSignature?

```ts
optional validSignature?: boolean;
```

***

### DiscordRestLike

#### Methods

##### get()

```ts
get(route, options?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `route` | `string` |
| `options?` | [`DiscordRestOptions`](#discordrestoptions) |

###### Returns

`Promise`\<`unknown`\>

##### post()

```ts
post(route, options?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `route` | `string` |
| `options?` | [`DiscordRestOptions`](#discordrestoptions) |

###### Returns

`Promise`\<`unknown`\>

***

### DiscordRestOptions

#### Properties

##### auth?

```ts
optional auth?: boolean;
```

##### body?

```ts
optional body?: DiscordMessagingProviderPayload;
```

##### query?

```ts
optional query?: URLSearchParams;
```

##### reason?

```ts
optional reason?: string;
```

***

### DiscordSendChannelMessageInput

#### Extends

- [`DiscordMessageInput`](#discordmessageinput)

#### Properties

##### additionalFields?

```ts
optional additionalFields?: DiscordMessagingJsonObject;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`additionalFields`](#additionalfields-2)

##### allowedMentions?

```ts
optional allowedMentions?: DiscordAllowedMentions;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`allowedMentions`](#allowedmentions-2)

##### attachments?

```ts
optional attachments?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`attachments`](#attachments-2)

##### channelId

```ts
channelId: string;
```

##### components?

```ts
optional components?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`components`](#components-2)

##### content?

```ts
optional content?: string;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`content`](#content-2)

##### embeds?

```ts
optional embeds?: DiscordMessagingJsonValue[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`embeds`](#embeds-2)

##### flags?

```ts
optional flags?: number;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`flags`](#flags-2)

##### messageReference?

```ts
optional messageReference?: DiscordMessagingJsonObject;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`messageReference`](#messagereference-2)

##### stickerIds?

```ts
optional stickerIds?: string[];
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`stickerIds`](#stickerids-2)

##### tts?

```ts
optional tts?: boolean;
```

###### Inherited from

[`DiscordMessageInput`](#discordmessageinput).[`tts`](#tts-2)

***

### DiscordSqliteStoreOptions

#### Properties

##### filename

```ts
filename: string;
```

***

### DiscordThreadBinding

#### Properties

##### active

```ts
active: boolean;
```

##### conversationId

```ts
conversationId: string;
```

##### createdAt

```ts
createdAt: string;
```

##### discordThreadId

```ts
discordThreadId: string;
```

##### discordVoiceChannelId?

```ts
optional discordVoiceChannelId?: string;
```

##### discordVoiceChannelName?

```ts
optional discordVoiceChannelName?: string;
```

##### guildId

```ts
guildId: string;
```

##### parentChannelId

```ts
parentChannelId: string;
```

##### starterUserId?

```ts
optional starterUserId?: string;
```

##### threadName?

```ts
optional threadName?: string;
```

##### updatedAt

```ts
updatedAt: string;
```

***

### DiscordUserResource

#### Indexable

```ts
[key: string]: DiscordMessagingProviderExtensionValue
```

#### Properties

##### avatar?

```ts
optional avatar?: string;
```

##### bot?

```ts
optional bot?: boolean;
```

##### discriminator?

```ts
optional discriminator?: string;
```

##### global\_name?

```ts
optional global_name?: string;
```

##### id?

```ts
optional id?: string;
```

##### system?

```ts
optional system?: boolean;
```

##### username?

```ts
optional username?: string;
```

***

### NormalizeDiscordChannelEventInput

#### Properties

##### interaction

```ts
interaction: DiscordParsedInteractionRequest;
```

##### receivedAt?

```ts
optional receivedAt?: string;
```

***

### ParseDiscordInteractionOptions

#### Extended by

- [`ParseDiscordInteractionRequestInput`](#parsediscordinteractionrequestinput)

#### Properties

##### publicKey?

```ts
optional publicKey?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

***

### ParseDiscordInteractionRequestInput

#### Extends

- [`ParseDiscordInteractionOptions`](#parsediscordinteractionoptions)

#### Properties

##### publicKey?

```ts
optional publicKey?: string;
```

###### Inherited from

[`ParseDiscordInteractionOptions`](#parsediscordinteractionoptions).[`publicKey`](#publickey-1)

##### request

```ts
request: Request;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

###### Inherited from

[`ParseDiscordInteractionOptions`](#parsediscordinteractionoptions).[`requireSignature`](#requiresignature)

***

### RecordMirroredEventInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### direction

```ts
direction: DiscordMirrorDirection;
```

##### discordMessageId?

```ts
optional discordMessageId?: string;
```

##### discordThreadId

```ts
discordThreadId: string;
```

##### runtimeEventId

```ts
runtimeEventId: string;
```

##### runtimeEventOffset

```ts
runtimeEventOffset: number;
```

***

### ValidateDiscordInteractionSignatureInput

#### Properties

##### publicKey

```ts
publicKey: string;
```

##### rawBody

```ts
rawBody: string | Buffer<ArrayBufferLike>;
```

##### signature

```ts
signature: string;
```

##### timestamp

```ts
timestamp: string;
```

## Type Aliases

### DiscordChannelEvent

```ts
type DiscordChannelEvent = ChannelEventEnvelopeInput<Record<string, unknown>, unknown>;
```

***

### DiscordMessagingJsonPrimitive

```ts
type DiscordMessagingJsonPrimitive = string | number | boolean | null;
```

***

### DiscordMessagingJsonValue

```ts
type DiscordMessagingJsonValue =
  | DiscordMessagingJsonPrimitive
  | DiscordMessagingJsonObject
  | readonly DiscordMessagingJsonValue[];
```

***

### DiscordMessagingProviderExtensionValue

```ts
type DiscordMessagingProviderExtensionValue =
  | DiscordMessagingJsonValue
  | object
  | undefined;
```

***

### DiscordMessagingProviderPayload

```ts
type DiscordMessagingProviderPayload = DiscordMessagingJsonObject | object;
```

***

### DiscordMirrorDirection

```ts
type DiscordMirrorDirection = "discord-to-runtime" | "runtime-to-discord";
```

***

### DiscordMirrorItem

```ts
type DiscordMirrorItem =
  | {
  event: Extract<RuntimeEvent, {
     type: "message.completed";
  }>;
  kind: "message";
  origin: DiscordMirrorMessageOrigin;
  role: "user" | "assistant";
  text: string;
}
  | {
  event: Extract<RuntimeEvent, {
     type: "ui.prompted";
  }>;
  kind: "prompt";
};
```

***

### DiscordMirrorMessageOrigin

```ts
type DiscordMirrorMessageOrigin = "web" | "voice" | "discord";
```

***

### DiscordThreadAutoArchiveDuration

```ts
type DiscordThreadAutoArchiveDuration = 60 | 1440 | 4320 | 10080;
```

## Variables

### createDiscordIntegration

```ts
const createDiscordIntegration: typeof createDiscordMessagingIntegration;
```

***

### createDiscordIntegrationOperationHandlers

```ts
const createDiscordIntegrationOperationHandlers: typeof createDiscordMessagingOperationHandlers;
```

## Functions

### collectDiscordMirrorItems()

```ts
function collectDiscordMirrorItems(events): DiscordMirrorItem[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `events` | [`RuntimeEvent`](../../../packages/core/dist.md#runtimeevent)[] |

#### Returns

[`DiscordMirrorItem`](#discordmirroritem)[]

***

### createDiscordGatewayService()

```ts
function createDiscordGatewayService(options): DiscordGatewayService;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DiscordGatewayServiceOptions`](#discordgatewayserviceoptions) |

#### Returns

[`DiscordGatewayService`](#discordgatewayservice)

***

### createDiscordMessagingClient()

```ts
function createDiscordMessagingClient(options): DiscordMessagingClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DiscordMessagingClientOptions`](#discordmessagingclientoptions) |

#### Returns

[`DiscordMessagingClient`](#discordmessagingclient)

***

### createDiscordMessagingIntegration()

```ts
function createDiscordMessagingIntegration(options): DefinedIntegration<{
  capabilities: [{
     audiences: ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validates Ed25519-signed Discord outgoing-webhook interaction requests.";
     exposesSensitiveData: true;
     label: "Receive Discord interactions";
     providerObjects: [{
        kind: "discordInteraction";
        label: "Discord Interaction";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends bot-token-authenticated Discord channel messages through discord.js REST.post(Routes.channelMessages).";
     exposesSensitiveData: true;
     label: "Send Discord channel messages";
     providerObjects: [{
        kind: "discordMessage";
        label: "Discord Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "thread";
     changesWorkflow: true;
     description: "Creates Discord text-channel threads or forum/media channel posts selected by SDK configuration.";
     exposesSensitiveData: true;
     label: "Create Discord support threads";
     providerObjects: [{
        kind: "discordThread";
        label: "Discord Thread";
      }, {
        kind: "discordForumPost";
        label: "Discord Forum Post";
      }, {
        kind: "discordMediaPost";
        label: "Discord Media Channel Post";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "messaging";
  channelAudiences: ["customer-facing", "mixed"];
  coverage: {
     evidence: [{
        label: "discord.js package";
        url: "https://www.npmjs.com/package/discord.js";
      }, {
        label: "Discord API reference";
        url: "https://docs.discord.com/developers/reference";
      }, {
        label: "Discord message resource";
        url: "https://docs.discord.com/developers/resources/message";
      }, {
        label: "Discord channel/thread endpoints";
        url: "https://docs.discord.com/developers/resources/channel";
     }];
     notes: ["Coverage is a Cognidesk support workflow adapter backed by discord.js REST, discord.js Routes helpers, and an optional discord.js Gateway service for live support-thread handoff.", "Typed operations cover channel messages, text/forum/media-channel threads, webhook execution with strict Discord webhook URL validation, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification.", "The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store.", "This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage.", "Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side Discord bot token used by discord.js REST and Routes SDK helpers for channel, guild, bot, and application calls.";
     id: "discord-bot-token";
     label: "Discord bot token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["bot", "applications.commands"];
   }, {
     description: "SDK-user-owned Discord application ID used to identify commands, interactions, and installation readiness.";
     id: "discord-application-id";
     label: "Discord application ID";
     required: true;
   }, {
     description: "Ed25519 public key from the Discord Developer Portal for validating interaction endpoint requests.";
     id: "discord-public-key";
     label: "Discord interaction public key";
     required: true;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "messaging.discord";
  limitations: ["Available Discord operations depend on the SDK user's Discord application, bot installation, OAuth scopes, role permissions, channel permissions, forum settings, and rate limits.", "The optional Gateway service requires Discord Gateway access with Message Content Intent enabled when message text is mirrored into Cognidesk.", "Discord Webhook Events subscriptions, slash command registration, broader REST administration, voice, and local RPC/IPC remain outside this package.", "Discord interaction endpoint requests must fail closed when signature verification is required but the public key or signature headers are missing or invalid."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiBaseUrl: "https://discord.com/api";
     channelCoverage: {
        botApplicationGuildChannelReads: "sdk-owned-rest-read";
        channelMessages: "sdk-owned-rest-send-list";
        forumPosts: "sdk-owned-rest-create";
        gatewayEvents: "sdk-owned-discord-js-gateway-service";
        interactionsEndpoint: "typed-verify-parse";
        threads: "sdk-owned-rest-create";
        voiceGatewayAndRpc: "not-covered";
        webhookEventsSubscriptions: "not-covered";
        webhookExecution: "sdk-owned-rest-webhook-execute";
     };
     defaultApiVersion: "10";
     gatewayService: {
        messageIngress: "discord-js-messageCreate";
        runtimeMirror: "cognidesk-runtime-event-list";
        sourceId: "discord-gateway";
        store: "bundled-libsql-sqlite-binding-store";
     };
     implementation: {
        operationMethodMap: {
           discord.application.read: "REST.get(Routes.oauth2CurrentApplication)";
           discord.bot.read: "REST.get(Routes.user)";
           discord.channel-messages.list: "REST.get(Routes.channelMessages)";
           discord.channel.read: "REST.get(Routes.channel)";
           discord.forum-post.create: "REST.post(Routes.threads)";
           discord.guild.read: "REST.get(Routes.guild)";
           discord.interaction-signature.verify: "validateDiscordInteractionSignature";
           discord.interaction.receive: "parseDiscordInteractionRequest";
           discord.message.send: "REST.post(Routes.channelMessages)";
           discord.thread.create: "REST.post(Routes.threads)";
           discord.webhook.execute: "REST.post(Routes.webhook)";
        };
        sdkPackage: "discord.js";
        sdkRuntimeSurface: "REST + Routes + Client gateway";
        sdkVersionRange: "^14.26.4";
        strategy: "official-sdk-support-slice";
        strictExceptions: {
           discord.interaction-signature.verify: "Signature verification is local Ed25519 protocol handling, not an outbound provider SDK call.";
           discord.interaction.receive: "Interaction parsing and Ed25519 signature verification are local protocol handling, not outbound provider SDK calls.";
           discord.webhook.execute: "Webhook URLs are validated against the configured Discord API origin, parsed into webhook id/token, dispatched through discord.js REST with auth disabled, and rejected before dispatch when the URL is not a Discord webhook execution URL.";
        };
     };
     integrationEntryPoints: {
        manifest: "@cognidesk/integration-messaging-discord/manifest";
        runtime: "@cognidesk/integration-messaging-discord/runtime";
     };
     integrationName: "Discord Integration";
     integrationPackageName: "@cognidesk/integration-messaging-discord";
     interactionSignatureHeaders: readonly ["x-signature-ed25519", "x-signature-timestamp"];
     providerClient: {
        importPolicy: "runtime-entrypoint-only";
        package: "discord.js";
        versionRange: "^14.26.4";
     };
  };
  name: "Discord Messaging Support";
  operations: [{
     alias: "discord.interaction.receive";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "ParseDiscordInteractionRequestInput";
     outputSchemaName: "DiscordParsedInteractionRequest";
     providerObject: "discordInteraction";
     requiresCredential: true;
   }, {
     alias: "discord.message.send";
     capability: "send";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     inputSchemaName: "DiscordSendChannelMessageInput";
     outputSchemaName: "DiscordMessageResource";
     providerObject: "discordMessage";
     providerOperation: "REST.post(Routes.channelMessages)";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "discord.thread.create";
     capability: "thread";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordCreateThreadInput";
     outputSchemaName: "DiscordChannelResource";
     providerObject: "discordThread";
     providerOperation: "REST.post(Routes.threads)";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-messaging-discord";
  privacyNotes: ["Discord messages, user IDs, guild IDs, channel IDs, thread IDs, usernames, attachments, embeds, interaction payloads, and mirrored runtime transcripts can contain customer and moderator data.", "Discord bot tokens, public keys, application IDs, guild/channel routing, webhook URLs, consent, moderation, retention, and transcript policy stay SDK-user-owned configuration."];
  provider: "discord";
  trustLevel: "official";
}, unknown, {
  discord.application.read: () => Promise<DiscordApplicationResource>;
  discord.bot.read: () => Promise<DiscordUserResource>;
  discord.channel-messages.list: (input) => Promise<DiscordMessageResource[]>;
  discord.channel.read: (input) => Promise<DiscordChannelResource>;
  discord.forum-post.create: (input, _context) => Promise<DiscordChannelResource>;
  discord.guild.read: (input) => Promise<DiscordGuildResource>;
  discord.interaction-signature.verify: (input) => Promise<boolean>;
  discord.interaction.receive: (input) => Promise<DiscordParsedInteractionRequest>;
  discord.message.send: (input, _context) => Promise<DiscordMessageResource>;
  discord.thread.create: (input, _context) => Promise<DiscordChannelResource>;
  discord.webhook.execute: (input, _context) => Promise<
     | Record<string, never>
    | DiscordMessageResource>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `DiscordMessagingIntegrationOptions` |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `audiences`: \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validates Ed25519-signed Discord outgoing-webhook interaction requests."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Discord interactions"`;
     `providerObjects`: \[\{
        `kind`: `"discordInteraction"`;
        `label`: `"Discord Interaction"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"send"`;
     `description`: `"Sends bot-token-authenticated Discord channel messages through discord.js REST.post(Routes.channelMessages)."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Send Discord channel messages"`;
     `providerObjects`: \[\{
        `kind`: `"discordMessage"`;
        `label`: `"Discord Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: \[`"customer-facing"`, `"mixed"`\];
     `capability`: `"thread"`;
     `changesWorkflow`: `true`;
     `description`: `"Creates Discord text-channel threads or forum/media channel posts selected by SDK configuration."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Create Discord support threads"`;
     `providerObjects`: \[\{
        `kind`: `"discordThread"`;
        `label`: `"Discord Thread"`;
      \}, \{
        `kind`: `"discordForumPost"`;
        `label`: `"Discord Forum Post"`;
      \}, \{
        `kind`: `"discordMediaPost"`;
        `label`: `"Discord Media Channel Post"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"messaging"`;
  `channelAudiences`: \[`"customer-facing"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"discord.js package"`;
        `url`: `"https://www.npmjs.com/package/discord.js"`;
      \}, \{
        `label`: `"Discord API reference"`;
        `url`: `"https://docs.discord.com/developers/reference"`;
      \}, \{
        `label`: `"Discord message resource"`;
        `url`: `"https://docs.discord.com/developers/resources/message"`;
      \}, \{
        `label`: `"Discord channel/thread endpoints"`;
        `url`: `"https://docs.discord.com/developers/resources/channel"`;
     \}\];
     `notes`: \[`"Coverage is a Cognidesk support workflow adapter backed by discord.js REST, discord.js Routes helpers, and an optional discord.js Gateway service for live support-thread handoff."`, `"Typed operations cover channel messages, text/forum/media-channel threads, webhook execution with strict Discord webhook URL validation, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification."`, `"The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store."`, `"This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage."`, `"Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `description`: `"Server-side Discord bot token used by discord.js REST and Routes SDK helpers for channel, guild, bot, and application calls."`;
     `id`: `"discord-bot-token"`;
     `label`: `"Discord bot token"`;
     `metadata`: \{
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: \[`"bot"`, `"applications.commands"`\];
   \}, \{
     `description`: `"SDK-user-owned Discord application ID used to identify commands, interactions, and installation readiness."`;
     `id`: `"discord-application-id"`;
     `label`: `"Discord application ID"`;
     `required`: `true`;
   \}, \{
     `description`: `"Ed25519 public key from the Discord Developer Portal for validating interaction endpoint requests."`;
     `id`: `"discord-public-key"`;
     `label`: `"Discord interaction public key"`;
     `required`: `true`;
  \}\];
  `directions`: \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"messaging.discord"`;
  `limitations`: \[`"Available Discord operations depend on the SDK user's Discord application, bot installation, OAuth scopes, role permissions, channel permissions, forum settings, and rate limits."`, `"The optional Gateway service requires Discord Gateway access with Message Content Intent enabled when message text is mirrored into Cognidesk."`, `"Discord Webhook Events subscriptions, slash command registration, broader REST administration, voice, and local RPC/IPC remain outside this package."`, `"Discord interaction endpoint requests must fail closed when signature verification is required but the public key or signature headers are missing or invalid."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `apiBaseUrl`: `"https://discord.com/api"`;
     `channelCoverage`: \{
        `botApplicationGuildChannelReads`: `"sdk-owned-rest-read"`;
        `channelMessages`: `"sdk-owned-rest-send-list"`;
        `forumPosts`: `"sdk-owned-rest-create"`;
        `gatewayEvents`: `"sdk-owned-discord-js-gateway-service"`;
        `interactionsEndpoint`: `"typed-verify-parse"`;
        `threads`: `"sdk-owned-rest-create"`;
        `voiceGatewayAndRpc`: `"not-covered"`;
        `webhookEventsSubscriptions`: `"not-covered"`;
        `webhookExecution`: `"sdk-owned-rest-webhook-execute"`;
     \};
     `defaultApiVersion`: `"10"`;
     `gatewayService`: \{
        `messageIngress`: `"discord-js-messageCreate"`;
        `runtimeMirror`: `"cognidesk-runtime-event-list"`;
        `sourceId`: `"discord-gateway"`;
        `store`: `"bundled-libsql-sqlite-binding-store"`;
     \};
     `implementation`: \{
        `operationMethodMap`: \{
           `discord.application.read`: `"REST.get(Routes.oauth2CurrentApplication)"`;
           `discord.bot.read`: `"REST.get(Routes.user)"`;
           `discord.channel-messages.list`: `"REST.get(Routes.channelMessages)"`;
           `discord.channel.read`: `"REST.get(Routes.channel)"`;
           `discord.forum-post.create`: `"REST.post(Routes.threads)"`;
           `discord.guild.read`: `"REST.get(Routes.guild)"`;
           `discord.interaction-signature.verify`: `"validateDiscordInteractionSignature"`;
           `discord.interaction.receive`: `"parseDiscordInteractionRequest"`;
           `discord.message.send`: `"REST.post(Routes.channelMessages)"`;
           `discord.thread.create`: `"REST.post(Routes.threads)"`;
           `discord.webhook.execute`: `"REST.post(Routes.webhook)"`;
        \};
        `sdkPackage`: `"discord.js"`;
        `sdkRuntimeSurface`: `"REST + Routes + Client gateway"`;
        `sdkVersionRange`: `"^14.26.4"`;
        `strategy`: `"official-sdk-support-slice"`;
        `strictExceptions`: \{
           `discord.interaction-signature.verify`: `"Signature verification is local Ed25519 protocol handling, not an outbound provider SDK call."`;
           `discord.interaction.receive`: `"Interaction parsing and Ed25519 signature verification are local protocol handling, not outbound provider SDK calls."`;
           `discord.webhook.execute`: `"Webhook URLs are validated against the configured Discord API origin, parsed into webhook id/token, dispatched through discord.js REST with auth disabled, and rejected before dispatch when the URL is not a Discord webhook execution URL."`;
        \};
     \};
     `integrationEntryPoints`: \{
        `manifest`: `"@cognidesk/integration-messaging-discord/manifest"`;
        `runtime`: `"@cognidesk/integration-messaging-discord/runtime"`;
     \};
     `integrationName`: `"Discord Integration"`;
     `integrationPackageName`: `"@cognidesk/integration-messaging-discord"`;
     `interactionSignatureHeaders`: readonly \[`"x-signature-ed25519"`, `"x-signature-timestamp"`\];
     `providerClient`: \{
        `importPolicy`: `"runtime-entrypoint-only"`;
        `package`: `"discord.js"`;
        `versionRange`: `"^14.26.4"`;
     \};
  \};
  `name`: `"Discord Messaging Support"`;
  `operations`: \[\{
     `alias`: `"discord.interaction.receive"`;
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `inputSchemaName`: `"ParseDiscordInteractionRequestInput"`;
     `outputSchemaName`: `"DiscordParsedInteractionRequest"`;
     `providerObject`: `"discordInteraction"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"discord.message.send"`;
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `externallyVisible`: `true`;
     `inputSchemaName`: `"DiscordSendChannelMessageInput"`;
     `outputSchemaName`: `"DiscordMessageResource"`;
     `providerObject`: `"discordMessage"`;
     `providerOperation`: `"REST.post(Routes.channelMessages)"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"discord.thread.create"`;
     `capability`: `"thread"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `extension`: `true`;
     `inputSchemaName`: `"DiscordCreateThreadInput"`;
     `outputSchemaName`: `"DiscordChannelResource"`;
     `providerObject`: `"discordThread"`;
     `providerOperation`: `"REST.post(Routes.threads)"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-messaging-discord"`;
  `privacyNotes`: \[`"Discord messages, user IDs, guild IDs, channel IDs, thread IDs, usernames, attachments, embeds, interaction payloads, and mirrored runtime transcripts can contain customer and moderator data."`, `"Discord bot tokens, public keys, application IDs, guild/channel routing, webhook URLs, consent, moderation, retention, and transcript policy stay SDK-user-owned configuration."`\];
  `provider`: `"discord"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `discord.application.read`: () => `Promise`\<[`DiscordApplicationResource`](#discordapplicationresource)\>;
  `discord.bot.read`: () => `Promise`\<[`DiscordUserResource`](#discorduserresource)\>;
  `discord.channel-messages.list`: (`input`) => `Promise`\<[`DiscordMessageResource`](#discordmessageresource)[]\>;
  `discord.channel.read`: (`input`) => `Promise`\<[`DiscordChannelResource`](#discordchannelresource)\>;
  `discord.forum-post.create`: (`input`, `_context`) => `Promise`\<[`DiscordChannelResource`](#discordchannelresource)\>;
  `discord.guild.read`: (`input`) => `Promise`\<[`DiscordGuildResource`](#discordguildresource)\>;
  `discord.interaction-signature.verify`: (`input`) => `Promise`\<`boolean`\>;
  `discord.interaction.receive`: (`input`) => `Promise`\<[`DiscordParsedInteractionRequest`](#discordparsedinteractionrequest)\>;
  `discord.message.send`: (`input`, `_context`) => `Promise`\<[`DiscordMessageResource`](#discordmessageresource)\>;
  `discord.thread.create`: (`input`, `_context`) => `Promise`\<[`DiscordChannelResource`](#discordchannelresource)\>;
  `discord.webhook.execute`: (`input`, `_context`) => `Promise`\<
     \| `Record`\<`string`, `never`\>
    \| [`DiscordMessageResource`](#discordmessageresource)\>;
\}\>

***

### createDiscordMessagingLiveChecks()

```ts
function createDiscordMessagingLiveChecks(options): (
  | {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        bot: boolean;
        id: string;
        username: string;
     };
  }>;
}
  | {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        id: string;
        name: string;
     };
  }>;
})[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DiscordLiveCheckOptions`](#discordlivecheckoptions) |

#### Returns

(
  \| \{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `bot`: `boolean`;
        `id`: `string`;
        `username`: `string`;
     \};
  \}\>;
\}
  \| \{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `id`: `string`;
        `name`: `string`;
     \};
  \}\>;
\})[]

***

### createDiscordMessagingOperationHandlers()

```ts
function createDiscordMessagingOperationHandlers(options): {
  discord.application.read: () => Promise<DiscordApplicationResource>;
  discord.bot.read: () => Promise<DiscordUserResource>;
  discord.channel-messages.list: (input) => Promise<DiscordMessageResource[]>;
  discord.channel.read: (input) => Promise<DiscordChannelResource>;
  discord.forum-post.create: (input, _context) => Promise<DiscordChannelResource>;
  discord.guild.read: (input) => Promise<DiscordGuildResource>;
  discord.interaction-signature.verify: (input) => Promise<boolean>;
  discord.interaction.receive: (input) => Promise<DiscordParsedInteractionRequest>;
  discord.message.send: (input, _context) => Promise<DiscordMessageResource>;
  discord.thread.create: (input, _context) => Promise<DiscordChannelResource>;
  discord.webhook.execute: (input, _context) => Promise<
     | Record<string, never>
    | DiscordMessageResource>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `DiscordMessagingIntegrationOptions` |

#### Returns

```ts
{
  discord.application.read: () => Promise<DiscordApplicationResource>;
  discord.bot.read: () => Promise<DiscordUserResource>;
  discord.channel-messages.list: (input) => Promise<DiscordMessageResource[]>;
  discord.channel.read: (input) => Promise<DiscordChannelResource>;
  discord.forum-post.create: (input, _context) => Promise<DiscordChannelResource>;
  discord.guild.read: (input) => Promise<DiscordGuildResource>;
  discord.interaction-signature.verify: (input) => Promise<boolean>;
  discord.interaction.receive: (input) => Promise<DiscordParsedInteractionRequest>;
  discord.message.send: (input, _context) => Promise<DiscordMessageResource>;
  discord.thread.create: (input, _context) => Promise<DiscordChannelResource>;
  discord.webhook.execute: (input, _context) => Promise<
     | Record<string, never>
    | DiscordMessageResource>;
}
```

| Name | Type |
| ------ | ------ |
| `discord.application.read()` | () => `Promise`\<[`DiscordApplicationResource`](#discordapplicationresource)\> |
| `discord.bot.read()` | () => `Promise`\<[`DiscordUserResource`](#discorduserresource)\> |
| `discord.channel-messages.list()` | (`input`) => `Promise`\<[`DiscordMessageResource`](#discordmessageresource)[]\> |
| `discord.channel.read()` | (`input`) => `Promise`\<[`DiscordChannelResource`](#discordchannelresource)\> |
| `discord.forum-post.create()` | (`input`, `_context`) => `Promise`\<[`DiscordChannelResource`](#discordchannelresource)\> |
| `discord.guild.read()` | (`input`) => `Promise`\<[`DiscordGuildResource`](#discordguildresource)\> |
| `discord.interaction-signature.verify()` | (`input`) => `Promise`\<`boolean`\> |
| `discord.interaction.receive()` | (`input`) => `Promise`\<[`DiscordParsedInteractionRequest`](#discordparsedinteractionrequest)\> |
| `discord.message.send()` | (`input`, `_context`) => `Promise`\<[`DiscordMessageResource`](#discordmessageresource)\> |
| `discord.thread.create()` | (`input`, `_context`) => `Promise`\<[`DiscordChannelResource`](#discordchannelresource)\> |
| `discord.webhook.execute()` | (`input`, `_context`) => `Promise`\< \| `Record`\<`string`, `never`\> \| [`DiscordMessageResource`](#discordmessageresource)\> |

***

### createDiscordSqliteStore()

```ts
function createDiscordSqliteStore(options): DiscordSqliteStore;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DiscordSqliteStoreOptions`](#discordsqlitestoreoptions) |

#### Returns

[`DiscordSqliteStore`](#discordsqlitestore)

***

### discordInteractionPongResponse()

```ts
function discordInteractionPongResponse(): {
  type: number;
};
```

#### Returns

```ts
{
  type: number;
}
```

| Name | Type |
| ------ | ------ |
| `type` | `number` |

***

### discordMessageBody()

```ts
function discordMessageBody(input): {
  allowed_mentions: DiscordAllowedMentions;
  attachments: DiscordMessagingJsonValue[];
  components: DiscordMessagingJsonValue[];
  content: string;
  embeds: DiscordMessagingJsonValue[];
  flags: number;
  message_reference: DiscordMessagingJsonObject;
  sticker_ids: string[];
  tts: boolean;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DiscordMessageInput`](#discordmessageinput) |

#### Returns

```ts
{
  allowed_mentions: DiscordAllowedMentions;
  attachments: DiscordMessagingJsonValue[];
  components: DiscordMessagingJsonValue[];
  content: string;
  embeds: DiscordMessagingJsonValue[];
  flags: number;
  message_reference: DiscordMessagingJsonObject;
  sticker_ids: string[];
  tts: boolean;
}
```

| Name | Type |
| ------ | ------ |
| `allowed_mentions` | [`DiscordAllowedMentions`](#discordallowedmentions) |
| `attachments` | [`DiscordMessagingJsonValue`](#discordmessagingjsonvalue)[] |
| `components` | [`DiscordMessagingJsonValue`](#discordmessagingjsonvalue)[] |
| `content` | `string` |
| `embeds` | [`DiscordMessagingJsonValue`](#discordmessagingjsonvalue)[] |
| `flags` | `number` |
| `message_reference` | [`DiscordMessagingJsonObject`](#discordmessagingjsonobject) |
| `sticker_ids` | `string`[] |
| `tts` | `boolean` |

***

### discordMessagingCredentialStatuses()

```ts
function discordMessagingCredentialStatuses(input): {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DiscordCredentialStatusInput`](#discordcredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

***

### discordThreadUrl()

```ts
function discordThreadUrl(guildId, threadId): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `guildId` | `string` |
| `threadId` | `string` |

#### Returns

`string`

***

### discordWebhookUrl()

```ts
function discordWebhookUrl(webhookUrl, apiBaseUrl): URL;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `webhookUrl` | `string` |
| `apiBaseUrl` | `string` |

#### Returns

`URL`

***

### normalizeDiscordInteractionChannelEvent()

```ts
function normalizeDiscordInteractionChannelEvent(input): DiscordChannelEvent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`NormalizeDiscordChannelEventInput`](#normalizediscordchanneleventinput) |

#### Returns

[`DiscordChannelEvent`](#discordchannelevent)

***

### parseDiscordInteractionRequest()

```ts
function parseDiscordInteractionRequest(request, options?): Promise<DiscordParsedInteractionRequest>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseDiscordInteractionOptions`](#parsediscordinteractionoptions) |

#### Returns

`Promise`\<[`DiscordParsedInteractionRequest`](#discordparsedinteractionrequest)\>

***

### validateDiscordInteractionSignature()

```ts
function validateDiscordInteractionSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateDiscordInteractionSignatureInput`](#validatediscordinteractionsignatureinput) |

#### Returns

`boolean`

## References

### discordIntegrationManifest

Renames and re-exports [discordMessagingProviderManifest](dist/manifest.md#discordmessagingprovidermanifest)

***

### discordMessagingManifestInput

Re-exports [discordMessagingManifestInput](dist/manifest.md#discordmessagingmanifestinput)

***

### discordMessagingOperationAliases

Re-exports [discordMessagingOperationAliases](dist/manifest.md#discordmessagingoperationaliases)

***

### discordMessagingProviderManifest

Re-exports [discordMessagingProviderManifest](dist/manifest.md#discordmessagingprovidermanifest)
