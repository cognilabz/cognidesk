# integrations/workplace/slack/dist

## Interfaces

### NormalizeSlackChannelEventInput

#### Properties

##### defaultChannelId?

```ts
optional defaultChannelId?: string;
```

##### receivedAt?

```ts
optional receivedAt?: string;
```

##### signedRequest

```ts
signedRequest: SlackSignedRequest;
```

***

### ParseSlackSignedRequestInput

#### Extends

- [`ParseSlackSignedRequestOptions`](#parseslacksignedrequestoptions)

#### Properties

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

###### Inherited from

[`ParseSlackSignedRequestOptions`](#parseslacksignedrequestoptions).[`nowSeconds`](#nowseconds-1)

##### request

```ts
request: Request;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

###### Inherited from

[`ParseSlackSignedRequestOptions`](#parseslacksignedrequestoptions).[`requireSignature`](#requiresignature-1)

##### signingSecret?

```ts
optional signingSecret?: string;
```

###### Inherited from

[`ParseSlackSignedRequestOptions`](#parseslacksignedrequestoptions).[`signingSecret`](#signingsecret-1)

##### timestampToleranceSeconds?

```ts
optional timestampToleranceSeconds?: number;
```

###### Inherited from

[`ParseSlackSignedRequestOptions`](#parseslacksignedrequestoptions).[`timestampToleranceSeconds`](#timestamptoleranceseconds-1)

***

### ParseSlackSignedRequestOptions

#### Extended by

- [`ParseSlackSignedRequestInput`](#parseslacksignedrequestinput)

#### Properties

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### signingSecret?

```ts
optional signingSecret?: string;
```

##### timestampToleranceSeconds?

```ts
optional timestampToleranceSeconds?: number;
```

***

### SlackApiResponse

#### Extended by

- [`SlackAuthTestResponse`](#slackauthtestresponse)
- [`SlackCompleteUploadExternalResponse`](#slackcompleteuploadexternalresponse)
- [`SlackConversationsRepliesResponse`](#slackconversationsrepliesresponse)
- [`SlackGetUploadUrlExternalResponse`](#slackgetuploadurlexternalresponse)
- [`SlackPostEphemeralResponse`](#slackpostephemeralresponse)
- [`SlackPostMessageResponse`](#slackpostmessageresponse)
- [`SlackUpdateMessageResponse`](#slackupdatemessageresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### error?

```ts
optional error?: string;
```

##### needed?

```ts
optional needed?: string;
```

##### ok

```ts
ok: boolean;
```

##### provided?

```ts
optional provided?: string;
```

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

##### warning?

```ts
optional warning?: string;
```

***

### SlackAuthTestResponse

#### Extends

- [`SlackApiResponse`](#slackapiresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### bot\_id?

```ts
optional bot_id?: string;
```

##### enterprise\_id?

```ts
optional enterprise_id?: string;
```

##### error?

```ts
optional error?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`error`](#error)

##### needed?

```ts
optional needed?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`needed`](#needed)

##### ok

```ts
ok: boolean;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`ok`](#ok)

##### provided?

```ts
optional provided?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`provided`](#provided)

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`response_metadata`](#response_metadata)

##### team?

```ts
optional team?: string;
```

##### team\_id?

```ts
optional team_id?: string;
```

##### url?

```ts
optional url?: string;
```

##### user?

```ts
optional user?: string;
```

##### user\_id?

```ts
optional user_id?: string;
```

##### warning?

```ts
optional warning?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`warning`](#warning)

***

### SlackCompleteUploadExternalInput

#### Extends

- [`SlackProviderRequestOptions`](#slackproviderrequestoptions)

#### Properties

##### channelId?

```ts
optional channelId?: string;
```

##### files

```ts
files: {
  id: string;
  title?: string;
}[];
```

###### id

```ts
id: string;
```

###### title?

```ts
optional title?: string;
```

##### initialComment?

```ts
optional initialComment?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackProviderRequestOptions`](#slackproviderrequestoptions).[`signal`](#signal-6)

##### threadTs?

```ts
optional threadTs?: string;
```

***

### SlackCompleteUploadExternalResponse

#### Extends

- [`SlackApiResponse`](#slackapiresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### error?

```ts
optional error?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`error`](#error)

##### files?

```ts
optional files?: SlackFileResource[];
```

##### needed?

```ts
optional needed?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`needed`](#needed)

##### ok

```ts
ok: boolean;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`ok`](#ok)

##### provided?

```ts
optional provided?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`provided`](#provided)

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`response_metadata`](#response_metadata)

##### warning?

```ts
optional warning?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`warning`](#warning)

***

### SlackConversationsRepliesInput

#### Extends

- [`SlackProviderRequestOptions`](#slackproviderrequestoptions)

#### Properties

##### channel

```ts
channel: string;
```

##### cursor?

```ts
optional cursor?: string;
```

##### inclusive?

```ts
optional inclusive?: boolean;
```

##### latest?

```ts
optional latest?: string;
```

##### limit?

```ts
optional limit?: number;
```

##### oldest?

```ts
optional oldest?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackProviderRequestOptions`](#slackproviderrequestoptions).[`signal`](#signal-6)

##### ts

```ts
ts: string;
```

***

### SlackConversationsRepliesResponse

#### Extends

- [`SlackApiResponse`](#slackapiresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### error?

```ts
optional error?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`error`](#error)

##### has\_more?

```ts
optional has_more?: boolean;
```

##### messages?

```ts
optional messages?: SlackMessageResource[];
```

##### needed?

```ts
optional needed?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`needed`](#needed)

##### ok

```ts
ok: boolean;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`ok`](#ok)

##### provided?

```ts
optional provided?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`provided`](#provided)

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`response_metadata`](#response_metadata)

##### warning?

```ts
optional warning?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`warning`](#warning)

***

### SlackCredentialStatusInput

#### Extends

- [`SlackWorkplaceCredentials`](#slackworkplacecredentials)

#### Properties

##### botToken?

```ts
optional botToken?: string;
```

###### Inherited from

[`SlackWorkplaceCredentials`](#slackworkplacecredentials).[`botToken`](#bottoken-3)

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### signingSecret?

```ts
optional signingSecret?: string;
```

###### Inherited from

[`SlackWorkplaceCredentials`](#slackworkplacecredentials).[`signingSecret`](#signingsecret-5)

***

### SlackFileResource

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### filetype?

```ts
optional filetype?: string;
```

##### id?

```ts
optional id?: string;
```

##### mimetype?

```ts
optional mimetype?: string;
```

##### name?

```ts
optional name?: string;
```

##### title?

```ts
optional title?: string;
```

##### url\_private?

```ts
optional url_private?: string;
```

***

### SlackGetUploadUrlExternalInput

#### Extends

- [`SlackProviderRequestOptions`](#slackproviderrequestoptions)

#### Extended by

- [`SlackUploadExternalFileInput`](#slackuploadexternalfileinput)

#### Properties

##### altTxt?

```ts
optional altTxt?: string;
```

##### filename

```ts
filename: string;
```

##### length

```ts
length: number;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackProviderRequestOptions`](#slackproviderrequestoptions).[`signal`](#signal-6)

##### snippetType?

```ts
optional snippetType?: string;
```

***

### SlackGetUploadUrlExternalResponse

#### Extends

- [`SlackApiResponse`](#slackapiresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### error?

```ts
optional error?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`error`](#error)

##### file\_id?

```ts
optional file_id?: string;
```

##### needed?

```ts
optional needed?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`needed`](#needed)

##### ok

```ts
ok: boolean;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`ok`](#ok)

##### provided?

```ts
optional provided?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`provided`](#provided)

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`response_metadata`](#response_metadata)

##### upload\_url?

```ts
optional upload_url?: string;
```

##### warning?

```ts
optional warning?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`warning`](#warning)

***

### SlackLiveCheckOptions

#### Extends

- `Omit`\<[`SlackWorkplaceClientOptions`](#slackworkplaceclientoptions), `"client"`\>

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`SlackWorkplaceClientOptions`](#slackworkplaceclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### botToken?

```ts
optional botToken?: string;
```

###### Inherited from

[`SlackWorkplaceCredentials`](#slackworkplacecredentials).[`botToken`](#bottoken-3)

##### client?

```ts
optional client?: Pick<SlackWorkplaceClient, "authTest">;
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

[`SlackWorkplaceClientOptions`](#slackworkplaceclientoptions).[`fetch`](#fetch-1)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackWorkplaceClientOptions`](#slackworkplaceclientoptions).[`signal`](#signal-10)

##### signingSecret?

```ts
optional signingSecret?: string;
```

###### Inherited from

[`SlackWorkplaceCredentials`](#slackworkplacecredentials).[`signingSecret`](#signingsecret-5)

##### webClientOptions?

```ts
optional webClientOptions?: WebClientOptions;
```

###### Inherited from

[`SlackWorkplaceClientOptions`](#slackworkplaceclientoptions).[`webClientOptions`](#webclientoptions-1)

***

### SlackMessageResource

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### attachments?

```ts
optional attachments?: SlackWorkplaceJsonValue[];
```

##### blocks?

```ts
optional blocks?: SlackWorkplaceJsonValue[];
```

##### channel?

```ts
optional channel?: string;
```

##### subtype?

```ts
optional subtype?: string;
```

##### text?

```ts
optional text?: string;
```

##### thread\_ts?

```ts
optional thread_ts?: string;
```

##### ts?

```ts
optional ts?: string;
```

##### type?

```ts
optional type?: string;
```

##### user?

```ts
optional user?: string;
```

##### username?

```ts
optional username?: string;
```

***

### SlackPostEphemeralInput

#### Extends

- [`SlackProviderRequestOptions`](#slackproviderrequestoptions)

#### Properties

##### attachments?

```ts
optional attachments?: SlackWorkplaceJsonValue[];
```

##### blocks?

```ts
optional blocks?: SlackWorkplaceJsonValue[];
```

##### channel

```ts
channel: string;
```

##### mrkdwn?

```ts
optional mrkdwn?: boolean;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackProviderRequestOptions`](#slackproviderrequestoptions).[`signal`](#signal-6)

##### text?

```ts
optional text?: string;
```

##### threadTs?

```ts
optional threadTs?: string;
```

##### user

```ts
user: string;
```

***

### SlackPostEphemeralResponse

#### Extends

- [`SlackApiResponse`](#slackapiresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### error?

```ts
optional error?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`error`](#error)

##### message\_ts?

```ts
optional message_ts?: string;
```

##### needed?

```ts
optional needed?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`needed`](#needed)

##### ok

```ts
ok: boolean;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`ok`](#ok)

##### provided?

```ts
optional provided?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`provided`](#provided)

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`response_metadata`](#response_metadata)

##### warning?

```ts
optional warning?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`warning`](#warning)

***

### SlackPostMessageInput

#### Extends

- [`SlackProviderRequestOptions`](#slackproviderrequestoptions)

#### Properties

##### attachments?

```ts
optional attachments?: SlackWorkplaceJsonValue[];
```

##### blocks?

```ts
optional blocks?: SlackWorkplaceJsonValue[];
```

##### channel

```ts
channel: string;
```

##### metadata?

```ts
optional metadata?: SlackWorkplaceJsonObject;
```

##### mrkdwn?

```ts
optional mrkdwn?: boolean;
```

##### replyBroadcast?

```ts
optional replyBroadcast?: boolean;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackProviderRequestOptions`](#slackproviderrequestoptions).[`signal`](#signal-6)

##### text?

```ts
optional text?: string;
```

##### threadTs?

```ts
optional threadTs?: string;
```

##### unfurlLinks?

```ts
optional unfurlLinks?: boolean;
```

##### unfurlMedia?

```ts
optional unfurlMedia?: boolean;
```

***

### SlackPostMessageResponse

#### Extends

- [`SlackApiResponse`](#slackapiresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### channel?

```ts
optional channel?: string;
```

##### error?

```ts
optional error?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`error`](#error)

##### message?

```ts
optional message?: SlackMessageResource;
```

##### needed?

```ts
optional needed?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`needed`](#needed)

##### ok

```ts
ok: boolean;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`ok`](#ok)

##### provided?

```ts
optional provided?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`provided`](#provided)

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`response_metadata`](#response_metadata)

##### ts?

```ts
optional ts?: string;
```

##### warning?

```ts
optional warning?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`warning`](#warning)

***

### SlackProviderRequestOptions

#### Extended by

- [`SlackCompleteUploadExternalInput`](#slackcompleteuploadexternalinput)
- [`SlackConversationsRepliesInput`](#slackconversationsrepliesinput)
- [`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput)
- [`SlackPostEphemeralInput`](#slackpostephemeralinput)
- [`SlackPostMessageInput`](#slackpostmessageinput)
- [`SlackUpdateMessageInput`](#slackupdatemessageinput)
- [`SlackUploadExternalFileBytesInput`](#slackuploadexternalfilebytesinput)

#### Properties

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### SlackSignedRequest

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### form?

```ts
optional form?: Record<string, string>;
```

##### json?

```ts
optional json?: unknown;
```

##### payload?

```ts
optional payload?: unknown;
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

### SlackUpdateMessageInput

#### Extends

- [`SlackProviderRequestOptions`](#slackproviderrequestoptions)

#### Properties

##### attachments?

```ts
optional attachments?: SlackWorkplaceJsonValue[];
```

##### blocks?

```ts
optional blocks?: SlackWorkplaceJsonValue[];
```

##### channel

```ts
channel: string;
```

##### metadata?

```ts
optional metadata?: SlackWorkplaceJsonObject;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackProviderRequestOptions`](#slackproviderrequestoptions).[`signal`](#signal-6)

##### text?

```ts
optional text?: string;
```

##### ts

```ts
ts: string;
```

***

### SlackUpdateMessageResponse

#### Extends

- [`SlackApiResponse`](#slackapiresponse)

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

#### Properties

##### channel?

```ts
optional channel?: string;
```

##### error?

```ts
optional error?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`error`](#error)

##### message?

```ts
optional message?: SlackMessageResource;
```

##### needed?

```ts
optional needed?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`needed`](#needed)

##### ok

```ts
ok: boolean;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`ok`](#ok)

##### provided?

```ts
optional provided?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`provided`](#provided)

##### response\_metadata?

```ts
optional response_metadata?: {
[key: string]: SlackWorkplaceProviderExtensionValue;
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
};
```

###### Index Signature

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

###### messages?

```ts
optional messages?: string[];
```

###### next\_cursor?

```ts
optional next_cursor?: string;
```

###### warnings?

```ts
optional warnings?: string[];
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`response_metadata`](#response_metadata)

##### text?

```ts
optional text?: string;
```

##### ts?

```ts
optional ts?: string;
```

##### warning?

```ts
optional warning?: string;
```

###### Inherited from

[`SlackApiResponse`](#slackapiresponse).[`warning`](#warning)

***

### SlackUploadExternalFileBytesInput

#### Extends

- [`SlackProviderRequestOptions`](#slackproviderrequestoptions)

#### Properties

##### body

```ts
body: BodyInit;
```

##### contentType?

```ts
optional contentType?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackProviderRequestOptions`](#slackproviderrequestoptions).[`signal`](#signal-6)

##### uploadUrl

```ts
uploadUrl: string;
```

***

### SlackUploadExternalFileInput

#### Extends

- [`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput)

#### Properties

##### altTxt?

```ts
optional altTxt?: string;
```

###### Inherited from

[`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput).[`altTxt`](#alttxt)

##### body

```ts
body: BodyInit;
```

##### channelId?

```ts
optional channelId?: string;
```

##### contentType?

```ts
optional contentType?: string;
```

##### filename

```ts
filename: string;
```

###### Inherited from

[`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput).[`filename`](#filename)

##### initialComment?

```ts
optional initialComment?: string;
```

##### length

```ts
length: number;
```

###### Inherited from

[`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput).[`length`](#length)

##### signal?

```ts
optional signal?: AbortSignal;
```

###### Inherited from

[`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput).[`signal`](#signal-2)

##### snippetType?

```ts
optional snippetType?: string;
```

###### Inherited from

[`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput).[`snippetType`](#snippettype)

##### threadTs?

```ts
optional threadTs?: string;
```

##### title?

```ts
optional title?: string;
```

***

### SlackWorkplaceClient

#### Properties

##### webClient

```ts
webClient: WebClient;
```

#### Methods

##### apiCall()

```ts
apiCall<T>(method, options?): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`SlackApiResponse`](#slackapiresponse) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `options?` | [`SlackWorkplaceJsonObject`](#slackworkplacejsonobject) |

###### Returns

`Promise`\<`T`\>

##### authTest()

```ts
authTest(input?): Promise<SlackAuthTestResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`SlackProviderRequestOptions`](#slackproviderrequestoptions) |

###### Returns

`Promise`\<[`SlackAuthTestResponse`](#slackauthtestresponse)\>

##### completeUploadExternal()

```ts
completeUploadExternal(input): Promise<SlackCompleteUploadExternalResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackCompleteUploadExternalInput`](#slackcompleteuploadexternalinput) |

###### Returns

`Promise`\<[`SlackCompleteUploadExternalResponse`](#slackcompleteuploadexternalresponse)\>

##### conversationsReplies()

```ts
conversationsReplies(input): Promise<SlackConversationsRepliesResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackConversationsRepliesInput`](#slackconversationsrepliesinput) |

###### Returns

`Promise`\<[`SlackConversationsRepliesResponse`](#slackconversationsrepliesresponse)\>

##### getUploadUrlExternal()

```ts
getUploadUrlExternal(input): Promise<SlackGetUploadUrlExternalResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackGetUploadUrlExternalInput`](#slackgetuploadurlexternalinput) |

###### Returns

`Promise`\<[`SlackGetUploadUrlExternalResponse`](#slackgetuploadurlexternalresponse)\>

##### postEphemeralMessage()

```ts
postEphemeralMessage(input): Promise<SlackPostEphemeralResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackPostEphemeralInput`](#slackpostephemeralinput) |

###### Returns

`Promise`\<[`SlackPostEphemeralResponse`](#slackpostephemeralresponse)\>

##### postInternalAssistMessage()

```ts
postInternalAssistMessage(input): Promise<SlackPostEphemeralResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackPostEphemeralInput`](#slackpostephemeralinput) |

###### Returns

`Promise`\<[`SlackPostEphemeralResponse`](#slackpostephemeralresponse)\>

##### postMessage()

```ts
postMessage(input): Promise<SlackPostMessageResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackPostMessageInput`](#slackpostmessageinput) |

###### Returns

`Promise`\<[`SlackPostMessageResponse`](#slackpostmessageresponse)\>

##### updateMessage()

```ts
updateMessage(input): Promise<SlackUpdateMessageResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackUpdateMessageInput`](#slackupdatemessageinput) |

###### Returns

`Promise`\<[`SlackUpdateMessageResponse`](#slackupdatemessageresponse)\>

##### uploadExternalFile()

```ts
uploadExternalFile(input): Promise<SlackCompleteUploadExternalResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackUploadExternalFileInput`](#slackuploadexternalfileinput) |

###### Returns

`Promise`\<[`SlackCompleteUploadExternalResponse`](#slackcompleteuploadexternalresponse)\>

##### uploadExternalFileBytes()

```ts
uploadExternalFileBytes(input): Promise<Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackUploadExternalFileBytesInput`](#slackuploadexternalfilebytesinput) |

###### Returns

`Promise`\<`Response`\>

***

### SlackWorkplaceClientOptions

#### Extends

- [`SlackWorkplaceCredentials`](#slackworkplacecredentials)

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### botToken?

```ts
optional botToken?: string;
```

###### Inherited from

[`SlackWorkplaceCredentials`](#slackworkplacecredentials).[`botToken`](#bottoken-3)

##### client?

```ts
optional client?: WebClient;
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

##### signal?

```ts
optional signal?: AbortSignal;
```

##### signingSecret?

```ts
optional signingSecret?: string;
```

###### Inherited from

[`SlackWorkplaceCredentials`](#slackworkplacecredentials).[`signingSecret`](#signingsecret-5)

##### webClientOptions?

```ts
optional webClientOptions?: WebClientOptions;
```

***

### SlackWorkplaceCredentials

#### Extended by

- [`SlackCredentialStatusInput`](#slackcredentialstatusinput)
- [`SlackWorkplaceClientOptions`](#slackworkplaceclientoptions)

#### Properties

##### botToken?

```ts
optional botToken?: string;
```

##### signingSecret?

```ts
optional signingSecret?: string;
```

***

### SlackWorkplaceJsonObject

#### Indexable

```ts
[key: string]: SlackWorkplaceProviderExtensionValue
```

***

### ValidateSlackRequestSignatureInput

#### Properties

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### rawBody

```ts
rawBody: string | Buffer<ArrayBufferLike>;
```

##### signature

```ts
signature: string;
```

##### signingSecret?

```ts
optional signingSecret?: string;
```

##### timestamp

```ts
timestamp: string | number;
```

##### timestampToleranceSeconds?

```ts
optional timestampToleranceSeconds?: number;
```

##### version?

```ts
optional version?: "v0";
```

## Type Aliases

### SlackChannelEvent

```ts
type SlackChannelEvent = ChannelEventEnvelopeInput<Record<string, unknown>, unknown>;
```

***

### SlackWorkplaceJsonPrimitive

```ts
type SlackWorkplaceJsonPrimitive = string | number | boolean | null;
```

***

### SlackWorkplaceJsonValue

```ts
type SlackWorkplaceJsonValue =
  | SlackWorkplaceJsonPrimitive
  | SlackWorkplaceJsonObject
  | readonly SlackWorkplaceJsonValue[];
```

***

### SlackWorkplaceProviderExtensionValue

```ts
type SlackWorkplaceProviderExtensionValue =
  | SlackWorkplaceJsonValue
  | object
  | undefined;
```

## Functions

### createSlackWorkplaceClient()

```ts
function createSlackWorkplaceClient(options): SlackWorkplaceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SlackWorkplaceClientOptions`](#slackworkplaceclientoptions) |

#### Returns

[`SlackWorkplaceClient`](#slackworkplaceclient)

***

### createSlackWorkplaceIntegration()

```ts
function createSlackWorkplaceIntegration(options): DefinedIntegration<{
  capabilities: [{
     audiences: ["internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Slack Events API and interactivity payloads for SDK-user-owned support flows.";
     exposesSensitiveData: true;
     label: "Receive Slack events";
     providerObjects: [{
        kind: "slackEvent";
        label: "Slack Event";
      }, {
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "send";
     description: "Posts channel-visible support messages through @slack/web-api chat.postMessage.";
     exposesSensitiveData: true;
     label: "Post Slack messages";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "notify";
     description: "Posts Slack ephemeral messages for internal agent-assist workflows when Slack provides a target user.";
     exposesSensitiveData: true;
     label: "Post Slack agent-assist notifications";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "workplace";
  channelAudiences: ["internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Slack Web API package";
        url: "https://www.npmjs.com/package/@slack/web-api";
      }, {
        label: "Slack Web API methods";
        url: "https://docs.slack.dev/reference/methods/";
      }, {
        label: "Slack chat.postMessage";
        url: "https://docs.slack.dev/reference/methods/chat.postMessage/";
      }, {
        label: "Slack chat.update";
        url: "https://docs.slack.dev/reference/methods/chat.update/";
     }];
     notes: ["Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package.", "Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness.", "This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage.", "Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side bot token used by @slack/web-api for Web API calls.";
     id: "slack-bot-token";
     label: "Slack bot token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["chat:write", "chat:write.public", "channels:history", "groups:history", "im:history", "mpim:history", "files:write"];
   }, {
     description: "Server-side signing secret used to validate Slack Events API and interactivity requests.";
     id: "slack-signing-secret";
     label: "Slack signing secret";
     required: true;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "workplace.slack";
  limitations: ["Available Slack operations depend on the SDK user's app scopes, workspace policy, channel membership, Enterprise Grid policy, and user targets for ephemeral messages.", "Slack rate limits vary by method, workspace, Marketplace approval, commercial distribution, and install date; SDK users own pagination, Retry-After handling, retry, and backoff policy.", "Customer visibility, agent-assist routing, approval, retention, redaction, and escalation behavior remain SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        authReadiness: "sdk-owned-read";
        chatMessages: "sdk-owned-post-update";
        ephemeralMessages: "sdk-owned-post";
        eventsInteractivity: "typed-parse-verify";
        externalFileUpload: "sdk-owned-upload";
        incomingWebhooks: "not-covered";
        oauth: "not-covered";
        socketMode: "not-covered";
        threadReplies: "sdk-owned-read";
     };
     providerClient: {
        importPolicy: "runtime-entrypoint-only";
        package: "@slack/web-api";
        versionRange: "^7.17.0";
     };
  };
  name: "Slack";
  operations: [{
     alias: "workplace.message.receive";
     capability: "receive";
     exposesSensitiveData: true;
     inputSchemaName: "ParseSlackSignedRequestInput";
     outputSchemaName: "SlackSignedRequest";
     providerObject: "workplaceMessage";
     requiresCredential: true;
   }, {
     alias: "workplace.thread.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     inputSchemaName: "SlackConversationsRepliesInput";
     outputSchemaName: "SlackConversationsRepliesResponse";
     providerObject: "workplaceThread";
     providerOperation: "conversations.replies";
     requiresCredential: true;
   }, {
     alias: "workplace.message.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     inputSchemaName: "SlackPostMessageInput";
     outputSchemaName: "SlackPostMessageResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.postMessage";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-workplace-slack";
  privacyNotes: ["Slack messages, channel identifiers, user identifiers, event payloads, interaction payloads, files, and workspace metadata can contain internal support context and customer data.", "Slack bot tokens and signing secrets stay server-side and are represented in Studio only as credential readiness."];
  provider: "slack";
  trustLevel: "official";
}, SlackWorkplaceCredentials, {
  slack.request-signature: (input) => Promise<boolean>;
  workplace.file.upload: (input, context) => Promise<SlackCompleteUploadExternalResponse>;
  workplace.message.receive: (input) => Promise<SlackSignedRequest>;
  workplace.message.reply: (input, context) => Promise<SlackPostMessageResponse>;
  workplace.message.send: (input, context) => Promise<SlackPostMessageResponse>;
  workplace.message.update: (input, context) => Promise<SlackUpdateMessageResponse>;
  workplace.notification.send: (input, context) => Promise<SlackPostEphemeralResponse>;
  workplace.thread.read: (input, context) => Promise<SlackConversationsRepliesResponse>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `SlackWorkplaceIntegrationOptions` |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"receive"`;
     `description`: `"Validates and parses Slack Events API and interactivity payloads for SDK-user-owned support flows."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Receive Slack events"`;
     `providerObjects`: \[\{
        `kind`: `"slackEvent"`;
        `label`: `"Slack Event"`;
      \}, \{
        `kind`: `"workplaceMessage"`;
        `label`: `"Workplace Message"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`, `"mixed"`\];
     `capability`: `"send"`;
     `description`: `"Posts channel-visible support messages through @slack/web-api chat.postMessage."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Post Slack messages"`;
     `providerObjects`: \[\{
        `kind`: `"workplaceMessage"`;
        `label`: `"Workplace Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `audiences`: \[`"internal-support"`\];
     `capability`: `"notify"`;
     `description`: `"Posts Slack ephemeral messages for internal agent-assist workflows when Slack provides a target user."`;
     `exposesSensitiveData`: `true`;
     `label`: `"Post Slack agent-assist notifications"`;
     `providerObjects`: \[\{
        `kind`: `"workplaceMessage"`;
        `label`: `"Workplace Message"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"workplace"`;
  `channelAudiences`: \[`"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Slack Web API package"`;
        `url`: `"https://www.npmjs.com/package/@slack/web-api"`;
      \}, \{
        `label`: `"Slack Web API methods"`;
        `url`: `"https://docs.slack.dev/reference/methods/"`;
      \}, \{
        `label`: `"Slack chat.postMessage"`;
        `url`: `"https://docs.slack.dev/reference/methods/chat.postMessage/"`;
      \}, \{
        `label`: `"Slack chat.update"`;
        `url`: `"https://docs.slack.dev/reference/methods/chat.update/"`;
     \}\];
     `notes`: \[`"Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package."`, `"Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness."`, `"This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage."`, `"Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `description`: `"Server-side bot token used by @slack/web-api for Web API calls."`;
     `id`: `"slack-bot-token"`;
     `label`: `"Slack bot token"`;
     `metadata`: \{
        `scopeKind`: `"provider-oauth-scopes"`;
     \};
     `required`: `true`;
     `scopes`: \[`"chat:write"`, `"chat:write.public"`, `"channels:history"`, `"groups:history"`, `"im:history"`, `"mpim:history"`, `"files:write"`\];
   \}, \{
     `description`: `"Server-side signing secret used to validate Slack Events API and interactivity requests."`;
     `id`: `"slack-signing-secret"`;
     `label`: `"Slack signing secret"`;
     `required`: `true`;
  \}\];
  `directions`: \[`"receive-only"`, `"send-only"`, `"bidirectional"`\];
  `id`: `"workplace.slack"`;
  `limitations`: \[`"Available Slack operations depend on the SDK user's app scopes, workspace policy, channel membership, Enterprise Grid policy, and user targets for ephemeral messages."`, `"Slack rate limits vary by method, workspace, Marketplace approval, commercial distribution, and install date; SDK users own pagination, Retry-After handling, retry, and backoff policy."`, `"Customer visibility, agent-assist routing, approval, retention, redaction, and escalation behavior remain SDK-user configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `channelCoverage`: \{
        `authReadiness`: `"sdk-owned-read"`;
        `chatMessages`: `"sdk-owned-post-update"`;
        `ephemeralMessages`: `"sdk-owned-post"`;
        `eventsInteractivity`: `"typed-parse-verify"`;
        `externalFileUpload`: `"sdk-owned-upload"`;
        `incomingWebhooks`: `"not-covered"`;
        `oauth`: `"not-covered"`;
        `socketMode`: `"not-covered"`;
        `threadReplies`: `"sdk-owned-read"`;
     \};
     `providerClient`: \{
        `importPolicy`: `"runtime-entrypoint-only"`;
        `package`: `"@slack/web-api"`;
        `versionRange`: `"^7.17.0"`;
     \};
  \};
  `name`: `"Slack"`;
  `operations`: \[\{
     `alias`: `"workplace.message.receive"`;
     `capability`: `"receive"`;
     `exposesSensitiveData`: `true`;
     `inputSchemaName`: `"ParseSlackSignedRequestInput"`;
     `outputSchemaName`: `"SlackSignedRequest"`;
     `providerObject`: `"workplaceMessage"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"workplace.thread.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `inputSchemaName`: `"SlackConversationsRepliesInput"`;
     `outputSchemaName`: `"SlackConversationsRepliesResponse"`;
     `providerObject`: `"workplaceThread"`;
     `providerOperation`: `"conversations.replies"`;
     `requiresCredential`: `true`;
   \}, \{
     `alias`: `"workplace.message.send"`;
     `capability`: `"send"`;
     `exposesSensitiveData`: `true`;
     `externallyVisible`: `true`;
     `inputSchemaName`: `"SlackPostMessageInput"`;
     `outputSchemaName`: `"SlackPostMessageResponse"`;
     `providerObject`: `"workplaceMessage"`;
     `providerOperation`: `"chat.postMessage"`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-workplace-slack"`;
  `privacyNotes`: \[`"Slack messages, channel identifiers, user identifiers, event payloads, interaction payloads, files, and workspace metadata can contain internal support context and customer data."`, `"Slack bot tokens and signing secrets stay server-side and are represented in Studio only as credential readiness."`\];
  `provider`: `"slack"`;
  `trustLevel`: `"official"`;
\}, [`SlackWorkplaceCredentials`](#slackworkplacecredentials), \{
  `slack.request-signature`: (`input`) => `Promise`\<`boolean`\>;
  `workplace.file.upload`: (`input`, `context`) => `Promise`\<[`SlackCompleteUploadExternalResponse`](#slackcompleteuploadexternalresponse)\>;
  `workplace.message.receive`: (`input`) => `Promise`\<[`SlackSignedRequest`](#slacksignedrequest)\>;
  `workplace.message.reply`: (`input`, `context`) => `Promise`\<[`SlackPostMessageResponse`](#slackpostmessageresponse)\>;
  `workplace.message.send`: (`input`, `context`) => `Promise`\<[`SlackPostMessageResponse`](#slackpostmessageresponse)\>;
  `workplace.message.update`: (`input`, `context`) => `Promise`\<[`SlackUpdateMessageResponse`](#slackupdatemessageresponse)\>;
  `workplace.notification.send`: (`input`, `context`) => `Promise`\<[`SlackPostEphemeralResponse`](#slackpostephemeralresponse)\>;
  `workplace.thread.read`: (`input`, `context`) => `Promise`\<[`SlackConversationsRepliesResponse`](#slackconversationsrepliesresponse)\>;
\}\>

***

### createSlackWorkplaceLiveChecks()

```ts
function createSlackWorkplaceLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        botId: string;
        team: string;
        teamId: string;
        user: string;
        userId: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SlackLiveCheckOptions`](#slacklivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `botId`: `string`;
        `team`: `string`;
        `teamId`: `string`;
        `user`: `string`;
        `userId`: `string`;
     \};
  \}\>;
\}[]

***

### createSlackWorkplaceOperationHandlers()

```ts
function createSlackWorkplaceOperationHandlers(options): {
  slack.request-signature: (input) => Promise<boolean>;
  workplace.file.upload: (input, context) => Promise<SlackCompleteUploadExternalResponse>;
  workplace.message.receive: (input) => Promise<SlackSignedRequest>;
  workplace.message.reply: (input, context) => Promise<SlackPostMessageResponse>;
  workplace.message.send: (input, context) => Promise<SlackPostMessageResponse>;
  workplace.message.update: (input, context) => Promise<SlackUpdateMessageResponse>;
  workplace.notification.send: (input, context) => Promise<SlackPostEphemeralResponse>;
  workplace.thread.read: (input, context) => Promise<SlackConversationsRepliesResponse>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `SlackWorkplaceIntegrationOptions` |

#### Returns

```ts
{
  slack.request-signature: (input) => Promise<boolean>;
  workplace.file.upload: (input, context) => Promise<SlackCompleteUploadExternalResponse>;
  workplace.message.receive: (input) => Promise<SlackSignedRequest>;
  workplace.message.reply: (input, context) => Promise<SlackPostMessageResponse>;
  workplace.message.send: (input, context) => Promise<SlackPostMessageResponse>;
  workplace.message.update: (input, context) => Promise<SlackUpdateMessageResponse>;
  workplace.notification.send: (input, context) => Promise<SlackPostEphemeralResponse>;
  workplace.thread.read: (input, context) => Promise<SlackConversationsRepliesResponse>;
}
```

| Name | Type |
| ------ | ------ |
| `slack.request-signature()` | (`input`) => `Promise`\<`boolean`\> |
| `workplace.file.upload()` | (`input`, `context`) => `Promise`\<[`SlackCompleteUploadExternalResponse`](#slackcompleteuploadexternalresponse)\> |
| `workplace.message.receive()` | (`input`) => `Promise`\<[`SlackSignedRequest`](#slacksignedrequest)\> |
| `workplace.message.reply()` | (`input`, `context`) => `Promise`\<[`SlackPostMessageResponse`](#slackpostmessageresponse)\> |
| `workplace.message.send()` | (`input`, `context`) => `Promise`\<[`SlackPostMessageResponse`](#slackpostmessageresponse)\> |
| `workplace.message.update()` | (`input`, `context`) => `Promise`\<[`SlackUpdateMessageResponse`](#slackupdatemessageresponse)\> |
| `workplace.notification.send()` | (`input`, `context`) => `Promise`\<[`SlackPostEphemeralResponse`](#slackpostephemeralresponse)\> |
| `workplace.thread.read()` | (`input`, `context`) => `Promise`\<[`SlackConversationsRepliesResponse`](#slackconversationsrepliesresponse)\> |

***

### normalizeSlackChannelEvent()

```ts
function normalizeSlackChannelEvent(input): SlackChannelEvent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`NormalizeSlackChannelEventInput`](#normalizeslackchanneleventinput) |

#### Returns

[`SlackChannelEvent`](#slackchannelevent)

***

### parseSlackSignedRequest()

```ts
function parseSlackSignedRequest(request, options?): Promise<SlackSignedRequest>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseSlackSignedRequestOptions`](#parseslacksignedrequestoptions) |

#### Returns

`Promise`\<[`SlackSignedRequest`](#slacksignedrequest)\>

***

### slackWorkplaceCredentialStatuses()

```ts
function slackWorkplaceCredentialStatuses(input): {
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
| `input` | [`SlackCredentialStatusInput`](#slackcredentialstatusinput) |

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

### stripUndefined()

```ts
function stripUndefined(input): SlackWorkplaceJsonObject;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SlackWorkplaceJsonObject`](#slackworkplacejsonobject) |

#### Returns

[`SlackWorkplaceJsonObject`](#slackworkplacejsonobject)

***

### validateSlackRequestSignature()

```ts
function validateSlackRequestSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateSlackRequestSignatureInput`](#validateslackrequestsignatureinput) |

#### Returns

`boolean`

## References

### slackWorkplaceManifestInput

Re-exports [slackWorkplaceManifestInput](dist/manifest.md#slackworkplacemanifestinput)

***

### slackWorkplaceOperationAliases

Re-exports [slackWorkplaceOperationAliases](dist/manifest.md#slackworkplaceoperationaliases)

***

### slackWorkplaceProviderManifest

Re-exports [slackWorkplaceProviderManifest](dist/manifest.md#slackworkplaceprovidermanifest)
