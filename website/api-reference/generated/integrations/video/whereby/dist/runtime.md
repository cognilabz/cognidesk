# integrations/video/whereby/dist/runtime

## Interfaces

### ParseWherebyWebhookRequestOptions

#### Properties

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### timestampToleranceSeconds?

```ts
optional timestampToleranceSeconds?: number;
```

##### verifier?

```ts
optional verifier?: (input) => boolean | Promise<boolean>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `rawBody`: `string`; `request`: `Request`; `signatureHeader`: `string`; \} |
| `input.rawBody` | `string` |
| `input.request` | `Request` |
| `input.signatureHeader` | `string` |

###### Returns

`boolean` \| `Promise`\<`boolean`\>

##### webhookSigningSecret?

```ts
optional webhookSigningSecret?: string;
```

***

### ValidateWherebyWebhookSignatureInput

#### Properties

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### rawBody

```ts
rawBody: string | Buffer<ArrayBufferLike>;
```

##### signatureHeader

```ts
signatureHeader: string;
```

##### timestampToleranceSeconds?

```ts
optional timestampToleranceSeconds?: number;
```

##### webhookSigningSecret

```ts
webhookSigningSecret: string;
```

***

### WherebyAccessLinkInput

#### Properties

##### validForSeconds?

```ts
optional validForSeconds?: number;
```

***

### WherebyAccessLinkResource

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### accessLink

```ts
accessLink: string;
```

##### expires

```ts
expires: number;
```

***

### WherebyCreateMeetingInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: WherebyVideoProviderExtensionFields;
```

##### endDate

```ts
endDate: string;
```

##### fields?

```ts
optional fields?: WherebyMeetingField[];
```

##### isLocked?

```ts
optional isLocked?: boolean;
```

##### liveTranscription?

```ts
optional liveTranscription?: WherebyLiveTranscriptionOptions;
```

##### recording?

```ts
optional recording?: WherebyRecordingOptions;
```

##### roomMode?

```ts
optional roomMode?: WherebyRoomMode;
```

##### roomNamePattern?

```ts
optional roomNamePattern?: WherebyRoomNamePattern;
```

##### roomNamePrefix?

```ts
optional roomNamePrefix?: string;
```

##### streaming?

```ts
optional streaming?: WherebyStreamingOptions;
```

##### templateType?

```ts
optional templateType?: "viewerMode";
```

***

### WherebyCreateSummaryInput

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### template?

```ts
optional template?: string;
```

##### transcriptionId

```ts
transcriptionId: string;
```

***

### WherebyCreateTranscriptionInput

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### recordingId

```ts
recordingId: string;
```

***

### WherebyCredentialStatusInput

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

##### organizationId?

```ts
optional organizationId?: string;
```

##### roomTemplateConfigured?

```ts
optional roomTemplateConfigured?: boolean;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### subdomain?

```ts
optional subdomain?: string;
```

##### webhookSigningSecret?

```ts
optional webhookSigningSecret?: string;
```

***

### WherebyCursorListInput

#### Properties

##### cursor?

```ts
optional cursor?: string;
```

##### limit?

```ts
optional limit?: number;
```

***

### WherebyFullApiGeneratedClient

#### Methods

##### BulkDeleteRecordings()

```ts
BulkDeleteRecordings(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"POST /recordings/bulk-delete"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### BulkDeleteTranscriptions()

```ts
BulkDeleteTranscriptions(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"POST /transcriptions/bulk-delete"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### CreateMeeting()

```ts
CreateMeeting(...args): Promise<WherebyFullApiSchemaMeeting>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"POST /meetings"`\>\] |

###### Returns

`Promise`\<[`WherebyFullApiSchemaMeeting`](#wherebyfullapischemameeting)\>

##### CreateSummary()

```ts
CreateSummary(...args): Promise<{
  summaryId?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"POST /summaries"`\>\] |

###### Returns

`Promise`\<\{
  `summaryId?`: `string`;
\}\>

##### CreateTranscription()

```ts
CreateTranscription(...args): Promise<{
  transcriptionId?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"POST /transcriptions"`\>\] |

###### Returns

`Promise`\<\{
  `transcriptionId?`: `string`;
\}\>

##### DeleteMeeting()

```ts
DeleteMeeting(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"DELETE /meetings/{meetingId}"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### DeleteRecording()

```ts
DeleteRecording(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"DELETE /recordings/{recordingId}"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### DeleteSummary()

```ts
DeleteSummary(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"DELETE /summaries/{summaryId}"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### DeleteTranscription()

```ts
DeleteTranscription(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"DELETE /transcriptions/{transcriptionId}"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### GetDetailsForAParticipantInASession()

```ts
GetDetailsForAParticipantInASession(...args): Promise<readonly {
  displayName: string;
  sampleRateMs: number;
  samples: {
  };
  timeStamp: string;
  userAgent: string;
  userRole: string;
}[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /insights/participant"`\>\] |

###### Returns

`Promise`\<readonly \{
  `displayName`: `string`;
  `sampleRateMs`: `number`;
  `samples`: \{
  \};
  `timeStamp`: `string`;
  `userAgent`: `string`;
  `userRole`: `string`;
\}[]\>

##### GetMeeting()

```ts
GetMeeting(...args): Promise<WherebyFullApiSchemaMeeting>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /meetings/{meetingId}"`\>\] |

###### Returns

`Promise`\<[`WherebyFullApiSchemaMeeting`](#wherebyfullapischemameeting)\>

##### GetMeetings()

```ts
GetMeetings(...args): Promise<{
  cursor: string;
  results: readonly WherebyFullApiSchemaMeeting[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /meetings"`\>\] |

###### Returns

`Promise`\<\{
  `cursor`: `string`;
  `results`: readonly [`WherebyFullApiSchemaMeeting`](#wherebyfullapischemameeting)[];
\}\>

##### GetParticipants()

```ts
GetParticipants(...args): Promise<{
  cursor?: string;
  results?: readonly {
     comment?: string;
     deviceId: string;
     displayName: string;
     externalId: string;
     joinedAt: string;
     leftAt: string;
     participantId: string;
     rating?: number;
     roleName: string;
     roomSessionId: string;
     tags?: readonly string[];
     userId: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /insights/participants"`\>\] |

###### Returns

`Promise`\<\{
  `cursor?`: `string`;
  `results?`: readonly \{
     `comment?`: `string`;
     `deviceId`: `string`;
     `displayName`: `string`;
     `externalId`: `string`;
     `joinedAt`: `string`;
     `leftAt`: `string`;
     `participantId`: `string`;
     `rating?`: `number`;
     `roleName`: `string`;
     `roomSessionId`: `string`;
     `tags?`: readonly `string`[];
     `userId`: `string`;
  \}[];
\}\>

##### GetRecording()

```ts
GetRecording(...args): Promise<WherebyFullApiSchemaRecording>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /recordings/{recordingId}"`\>\] |

###### Returns

`Promise`\<[`WherebyFullApiSchemaRecording`](#wherebyfullapischemarecording)\>

##### GetRecordingAccessLink()

```ts
GetRecordingAccessLink(...args): Promise<{
  accessLink: string;
  expires: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /recordings/{recordingId}/access-link"`\>\] |

###### Returns

`Promise`\<\{
  `accessLink`: `string`;
  `expires`: `number`;
\}\>

##### GetRecordings()

```ts
GetRecordings(...args): Promise<{
  cursor: string;
  results: readonly WherebyFullApiSchemaRecording[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /recordings"`\>\] |

###### Returns

`Promise`\<\{
  `cursor`: `string`;
  `results`: readonly [`WherebyFullApiSchemaRecording`](#wherebyfullapischemarecording)[];
\}\>

##### GetRoomInsights()

```ts
GetRoomInsights(...args): Promise<{
  cursor?: string;
  results?: readonly {
     createdAt: string;
     endAt: string;
     firstSessionStartedAt: string;
     lastSessionStartedAt: string;
     rating?: number;
     roomName: string;
     totalParticipantMinutes: number;
     totalRatings?: number;
     totalRecorderMinutes: number;
     totalSessions: number;
     totalStreamerMinutes: number;
     totalUniqueParticipants: number;
     totalUniqueRecorders: number;
     totalUniqueStreamers: number;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /insights/rooms"`\>\] |

###### Returns

`Promise`\<\{
  `cursor?`: `string`;
  `results?`: readonly \{
     `createdAt`: `string`;
     `endAt`: `string`;
     `firstSessionStartedAt`: `string`;
     `lastSessionStartedAt`: `string`;
     `rating?`: `number`;
     `roomName`: `string`;
     `totalParticipantMinutes`: `number`;
     `totalRatings?`: `number`;
     `totalRecorderMinutes`: `number`;
     `totalSessions`: `number`;
     `totalStreamerMinutes`: `number`;
     `totalUniqueParticipants`: `number`;
     `totalUniqueRecorders`: `number`;
     `totalUniqueStreamers`: `number`;
  \}[];
\}\>

##### GetRoomSessionInsights()

```ts
GetRoomSessionInsights(...args): Promise<{
  cursor?: string;
  results?: readonly {
     endedAt?: string;
     rating?: number;
     roomName: string;
     roomSessionId: string;
     startedAt?: string;
     totalParticipantMinutes: number;
     totalRatings?: number;
     totalRecorderMinutes: number;
     totalStreamerMinutes: number;
     totalUniqueParticipants: number;
     totalUniqueRecorders: number;
     totalUniqueStreamers: number;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /insights/room-sessions"`\>\] |

###### Returns

`Promise`\<\{
  `cursor?`: `string`;
  `results?`: readonly \{
     `endedAt?`: `string`;
     `rating?`: `number`;
     `roomName`: `string`;
     `roomSessionId`: `string`;
     `startedAt?`: `string`;
     `totalParticipantMinutes`: `number`;
     `totalRatings?`: `number`;
     `totalRecorderMinutes`: `number`;
     `totalStreamerMinutes`: `number`;
     `totalUniqueParticipants`: `number`;
     `totalUniqueRecorders`: `number`;
     `totalUniqueStreamers`: `number`;
  \}[];
\}\>

##### GetSummaries()

```ts
GetSummaries(...args): Promise<{
  results: readonly WherebyFullApiSchemaSummary[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /summaries"`\>\] |

###### Returns

`Promise`\<\{
  `results`: readonly [`WherebyFullApiSchemaSummary`](#wherebyfullapischemasummary)[];
\}\>

##### GetSummary()

```ts
GetSummary(...args): Promise<WherebyFullApiSchemaSummary>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /summaries/{summaryId}"`\>\] |

###### Returns

`Promise`\<[`WherebyFullApiSchemaSummary`](#wherebyfullapischemasummary)\>

##### GetTranscription()

```ts
GetTranscription(...args): Promise<WherebyFullApiSchemaTranscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /transcriptions/{transcriptionId}"`\>\] |

###### Returns

`Promise`\<[`WherebyFullApiSchemaTranscription`](#wherebyfullapischematranscription)\>

##### GetTranscriptionAccessLink()

```ts
GetTranscriptionAccessLink(...args): Promise<{
  accessLink: string;
  expires: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /transcriptions/{transcriptionId}/access-link"`\>\] |

###### Returns

`Promise`\<\{
  `accessLink`: `string`;
  `expires`: `number`;
\}\>

##### GetTranscriptions()

```ts
GetTranscriptions(...args): Promise<{
  results: readonly WherebyFullApiSchemaTranscription[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"GET /transcriptions"`\>\] |

###### Returns

`Promise`\<\{
  `results`: readonly [`WherebyFullApiSchemaTranscription`](#wherebyfullapischematranscription)[];
\}\>

##### SetRoomBackground()

```ts
SetRoomBackground(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"PUT /rooms/{roomName}/theme/room-background"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### SetRoomColors()

```ts
SetRoomColors(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"PUT /rooms/{roomName}/theme/tokens"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### SetRoomKnockPageBackground()

```ts
SetRoomKnockPageBackground(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"PUT /rooms/{roomName}/theme/room-knock-page-background"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

##### SetRoomLogo()

```ts
SetRoomLogo(...args): Promise<{
  data?: {
     msLeft?: number;
  };
  error?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`WherebyFullApiOperationInput`\<`"PUT /rooms/{roomName}/theme/logo"`\>\] |

###### Returns

`Promise`\<\{
  `data?`: \{
     `msLeft?`: `number`;
  \};
  `error?`: `string`;
\}\>

***

### WherebyFullApiOperation

#### Properties

##### functionName

```ts
functionName: string;
```

##### method

```ts
method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

##### operationId

```ts
operationId: string;
```

##### path

```ts
path: string;
```

##### summary

```ts
summary: string;
```

##### tags

```ts
tags: readonly string[];
```

##### uid

```ts
uid: string;
```

***

### WherebyFullApiOperationQueryMap

#### Properties

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: {
};
```

##### DELETE /recordings/\{recordingId\}

```ts
DELETE /recordings/{recordingId}: {
};
```

##### DELETE /summaries/\{summaryId\}

```ts
DELETE /summaries/{summaryId}: {
};
```

##### DELETE /transcriptions/\{transcriptionId\}

```ts
DELETE /transcriptions/{transcriptionId}: {
};
```

##### GET /insights/participant

```ts
GET /insights/participant: {
  participantId: WherebyFullApiSchemaJsonValue;
  roomSessionId: WherebyFullApiSchemaJsonValue;
};
```

###### participantId

```ts
participantId: WherebyFullApiSchemaJsonValue;
```

###### roomSessionId

```ts
roomSessionId: WherebyFullApiSchemaJsonValue;
```

##### GET /insights/participants

```ts
GET /insights/participants: {
  cursor?: WherebyFullApiSchemaJsonValue;
  externalId?: WherebyFullApiSchemaJsonValue;
  limit?: number;
  roomSessionId: WherebyFullApiSchemaJsonValue;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
```

###### cursor?

```ts
optional cursor?: WherebyFullApiSchemaJsonValue;
```

###### externalId?

```ts
optional externalId?: WherebyFullApiSchemaJsonValue;
```

###### limit?

```ts
optional limit?: number;
```

###### roomSessionId

```ts
roomSessionId: WherebyFullApiSchemaJsonValue;
```

###### sortBy?

```ts
optional sortBy?: WherebyFullApiSchemaJsonValue;
```

##### GET /insights/room-sessions

```ts
GET /insights/room-sessions: {
  cursor?: WherebyFullApiSchemaJsonValue;
  limit?: number;
  roomName: WherebyFullApiSchemaJsonValue;
  roomSessionId?: WherebyFullApiSchemaJsonValue;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
```

###### cursor?

```ts
optional cursor?: WherebyFullApiSchemaJsonValue;
```

###### limit?

```ts
optional limit?: number;
```

###### roomName

```ts
roomName: WherebyFullApiSchemaJsonValue;
```

###### roomSessionId?

```ts
optional roomSessionId?: WherebyFullApiSchemaJsonValue;
```

###### sortBy?

```ts
optional sortBy?: WherebyFullApiSchemaJsonValue;
```

##### GET /insights/rooms

```ts
GET /insights/rooms: {
  createdAt?: {
     from?: string;
     to?: string;
  };
  cursor?: WherebyFullApiSchemaJsonValue;
  limit?: number;
  roomName?: {
     contains?: string;
     exact?: string;
     startsWith?: string;
  };
  sortBy?: WherebyFullApiSchemaJsonValue;
};
```

###### createdAt?

```ts
optional createdAt?: {
  from?: string;
  to?: string;
};
```

###### createdAt.from?

```ts
optional from?: string;
```

###### createdAt.to?

```ts
optional to?: string;
```

###### cursor?

```ts
optional cursor?: WherebyFullApiSchemaJsonValue;
```

###### limit?

```ts
optional limit?: number;
```

###### roomName?

```ts
optional roomName?: {
  contains?: string;
  exact?: string;
  startsWith?: string;
};
```

###### roomName.contains?

```ts
optional contains?: string;
```

###### roomName.exact?

```ts
optional exact?: string;
```

###### roomName.startsWith?

```ts
optional startsWith?: string;
```

###### sortBy?

```ts
optional sortBy?: WherebyFullApiSchemaJsonValue;
```

##### GET /meetings

```ts
GET /meetings: {
  cursor?: string;
  fields?: WherebyFullApiSchemaFields;
  limit?: number;
};
```

###### cursor?

```ts
optional cursor?: string;
```

###### fields?

```ts
optional fields?: WherebyFullApiSchemaFields;
```

###### limit?

```ts
optional limit?: number;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: {
  fields?: WherebyFullApiSchemaFields;
};
```

###### fields?

```ts
optional fields?: WherebyFullApiSchemaFields;
```

##### GET /recordings

```ts
GET /recordings: {
  cursor?: string;
  limit?: number;
  roomName?: string;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
```

###### cursor?

```ts
optional cursor?: string;
```

###### limit?

```ts
optional limit?: number;
```

###### roomName?

```ts
optional roomName?: string;
```

###### sortBy?

```ts
optional sortBy?: WherebyFullApiSchemaJsonValue;
```

##### GET /recordings/\{recordingId\}

```ts
GET /recordings/{recordingId}: {
};
```

##### GET /recordings/\{recordingId\}/access-link

```ts
GET /recordings/{recordingId}/access-link: {
  validForSeconds?: number;
};
```

###### validForSeconds?

```ts
optional validForSeconds?: number;
```

##### GET /summaries

```ts
GET /summaries: {
  cursor?: string;
  limit?: number;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
```

###### cursor?

```ts
optional cursor?: string;
```

###### limit?

```ts
optional limit?: number;
```

###### sortBy?

```ts
optional sortBy?: WherebyFullApiSchemaJsonValue;
```

##### GET /summaries/\{summaryId\}

```ts
GET /summaries/{summaryId}: {
};
```

##### GET /transcriptions

```ts
GET /transcriptions: {
  cursor?: string;
  limit?: number;
  roomName?: string;
  sortBy?: WherebyFullApiSchemaJsonValue;
};
```

###### cursor?

```ts
optional cursor?: string;
```

###### limit?

```ts
optional limit?: number;
```

###### roomName?

```ts
optional roomName?: string;
```

###### sortBy?

```ts
optional sortBy?: WherebyFullApiSchemaJsonValue;
```

##### GET /transcriptions/\{transcriptionId\}

```ts
GET /transcriptions/{transcriptionId}: {
};
```

##### GET /transcriptions/\{transcriptionId\}/access-link

```ts
GET /transcriptions/{transcriptionId}/access-link: {
  validForSeconds?: number;
};
```

###### validForSeconds?

```ts
optional validForSeconds?: number;
```

##### POST /meetings

```ts
POST /meetings: {
};
```

##### POST /recordings/bulk-delete

```ts
POST /recordings/bulk-delete: {
};
```

##### POST /summaries

```ts
POST /summaries: {
};
```

##### POST /transcriptions

```ts
POST /transcriptions: {
};
```

##### POST /transcriptions/bulk-delete

```ts
POST /transcriptions/bulk-delete: {
};
```

##### PUT /rooms/\{roomName\}/theme/logo

```ts
PUT /rooms/{roomName}/theme/logo: {
};
```

##### PUT /rooms/\{roomName\}/theme/room-background

```ts
PUT /rooms/{roomName}/theme/room-background: {
};
```

##### PUT /rooms/\{roomName\}/theme/room-knock-page-background

```ts
PUT /rooms/{roomName}/theme/room-knock-page-background: {
};
```

##### PUT /rooms/\{roomName\}/theme/tokens

```ts
PUT /rooms/{roomName}/theme/tokens: {
};
```

***

### WherebyFullApiOperationQueryRequiredMap

#### Properties

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: false;
```

##### DELETE /recordings/\{recordingId\}

```ts
DELETE /recordings/{recordingId}: false;
```

##### DELETE /summaries/\{summaryId\}

```ts
DELETE /summaries/{summaryId}: false;
```

##### DELETE /transcriptions/\{transcriptionId\}

```ts
DELETE /transcriptions/{transcriptionId}: false;
```

##### GET /insights/participant

```ts
GET /insights/participant: true;
```

##### GET /insights/participants

```ts
GET /insights/participants: true;
```

##### GET /insights/room-sessions

```ts
GET /insights/room-sessions: true;
```

##### GET /insights/rooms

```ts
GET /insights/rooms: false;
```

##### GET /meetings

```ts
GET /meetings: false;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: false;
```

##### GET /recordings

```ts
GET /recordings: false;
```

##### GET /recordings/\{recordingId\}

```ts
GET /recordings/{recordingId}: false;
```

##### GET /recordings/\{recordingId\}/access-link

```ts
GET /recordings/{recordingId}/access-link: false;
```

##### GET /summaries

```ts
GET /summaries: false;
```

##### GET /summaries/\{summaryId\}

```ts
GET /summaries/{summaryId}: false;
```

##### GET /transcriptions

```ts
GET /transcriptions: false;
```

##### GET /transcriptions/\{transcriptionId\}

```ts
GET /transcriptions/{transcriptionId}: false;
```

##### GET /transcriptions/\{transcriptionId\}/access-link

```ts
GET /transcriptions/{transcriptionId}/access-link: false;
```

##### POST /meetings

```ts
POST /meetings: false;
```

##### POST /recordings/bulk-delete

```ts
POST /recordings/bulk-delete: false;
```

##### POST /summaries

```ts
POST /summaries: false;
```

##### POST /transcriptions

```ts
POST /transcriptions: false;
```

##### POST /transcriptions/bulk-delete

```ts
POST /transcriptions/bulk-delete: false;
```

##### PUT /rooms/\{roomName\}/theme/logo

```ts
PUT /rooms/{roomName}/theme/logo: false;
```

##### PUT /rooms/\{roomName\}/theme/room-background

```ts
PUT /rooms/{roomName}/theme/room-background: false;
```

##### PUT /rooms/\{roomName\}/theme/room-knock-page-background

```ts
PUT /rooms/{roomName}/theme/room-knock-page-background: false;
```

##### PUT /rooms/\{roomName\}/theme/tokens

```ts
PUT /rooms/{roomName}/theme/tokens: false;
```

***

### WherebyFullApiOperationRequestBodyMap

#### Properties

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: never;
```

##### DELETE /recordings/\{recordingId\}

```ts
DELETE /recordings/{recordingId}: never;
```

##### DELETE /summaries/\{summaryId\}

```ts
DELETE /summaries/{summaryId}: never;
```

##### DELETE /transcriptions/\{transcriptionId\}

```ts
DELETE /transcriptions/{transcriptionId}: never;
```

##### GET /insights/participant

```ts
GET /insights/participant: never;
```

##### GET /insights/participants

```ts
GET /insights/participants: never;
```

##### GET /insights/room-sessions

```ts
GET /insights/room-sessions: never;
```

##### GET /insights/rooms

```ts
GET /insights/rooms: never;
```

##### GET /meetings

```ts
GET /meetings: never;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: never;
```

##### GET /recordings

```ts
GET /recordings: never;
```

##### GET /recordings/\{recordingId\}

```ts
GET /recordings/{recordingId}: never;
```

##### GET /recordings/\{recordingId\}/access-link

```ts
GET /recordings/{recordingId}/access-link: never;
```

##### GET /summaries

```ts
GET /summaries: never;
```

##### GET /summaries/\{summaryId\}

```ts
GET /summaries/{summaryId}: never;
```

##### GET /transcriptions

```ts
GET /transcriptions: never;
```

##### GET /transcriptions/\{transcriptionId\}

```ts
GET /transcriptions/{transcriptionId}: never;
```

##### GET /transcriptions/\{transcriptionId\}/access-link

```ts
GET /transcriptions/{transcriptionId}/access-link: never;
```

##### POST /meetings

```ts
POST /meetings: {
  endDate: string;
  fields?: WherebyFullApiSchemaFields;
  isLocked?: boolean;
  liveTranscription?: {
     destination: {
        accessKeyId?: string;
        accessKeySecret?: string;
        authenticationType?: "accessKey" | "roleBased";
        bucket?: string;
        oidcRoleArn?: string;
        provider: "whereby" | "s3";
        region?: string;
     };
     language?:   | "ca,"
        | "zh,"
        | "zh-TW,"
        | "cs,"
        | "da,"
        | "nl,"
        | "en,"
        | "en-US,"
        | "en-GB,"
        | "fi,"
        | "fr,"
        | "de,"
        | "de-CH,"
        | "el,"
        | "hi,"
        | "id,"
        | "it,"
        | "ja,"
        | "ko,"
        | "lv,"
        | "ms,"
        | "no,"
        | "pl,"
        | "pt,"
        | "pt-BR,"
        | "ro,"
        | "ru,"
        | "sk,"
        | "es,"
        | "sv,"
        | "th,"
        | "uk,"
        | "vi,";
     liveCaptions?: boolean;
     startTrigger: "none" | "automatic" | "automatic-2nd-participant" | "manual";
  };
  recording?: {
     destination: {
        accessKeyId?: string;
        accessKeySecret?: string;
        authenticationType?: "accessKey" | "roleBased";
        bucket?: string;
        fileFormat?: "mkv" | "mp4";
        oidcRoleArn?: string;
        provider: "whereby" | "s3";
     };
     startTrigger: "none" | "prompt" | "automatic" | "automatic-2nd-participant";
     type: "none" | "local" | "cloud";
  };
  roomMode?: "normal" | "group";
  roomNamePattern?: "uuid" | "human-short";
  roomNamePrefix?: string;
  startDate?: string;
  streaming?: {
     destination: {
        url: string;
     };
     startTrigger: "none" | "prompt" | "automatic";
  };
  templateType?: "viewerMode";
};
```

###### endDate

```ts
endDate: string;
```

###### fields?

```ts
optional fields?: WherebyFullApiSchemaFields;
```

###### isLocked?

```ts
optional isLocked?: boolean;
```

###### liveTranscription?

```ts
optional liveTranscription?: {
  destination: {
     accessKeyId?: string;
     accessKeySecret?: string;
     authenticationType?: "accessKey" | "roleBased";
     bucket?: string;
     oidcRoleArn?: string;
     provider: "whereby" | "s3";
     region?: string;
  };
  language?:   | "ca,"
     | "zh,"
     | "zh-TW,"
     | "cs,"
     | "da,"
     | "nl,"
     | "en,"
     | "en-US,"
     | "en-GB,"
     | "fi,"
     | "fr,"
     | "de,"
     | "de-CH,"
     | "el,"
     | "hi,"
     | "id,"
     | "it,"
     | "ja,"
     | "ko,"
     | "lv,"
     | "ms,"
     | "no,"
     | "pl,"
     | "pt,"
     | "pt-BR,"
     | "ro,"
     | "ru,"
     | "sk,"
     | "es,"
     | "sv,"
     | "th,"
     | "uk,"
     | "vi,";
  liveCaptions?: boolean;
  startTrigger: "none" | "automatic" | "automatic-2nd-participant" | "manual";
};
```

###### liveTranscription.destination

```ts
destination: {
  accessKeyId?: string;
  accessKeySecret?: string;
  authenticationType?: "accessKey" | "roleBased";
  bucket?: string;
  oidcRoleArn?: string;
  provider: "whereby" | "s3";
  region?: string;
};
```

###### liveTranscription.destination.accessKeyId?

```ts
optional accessKeyId?: string;
```

###### liveTranscription.destination.accessKeySecret?

```ts
optional accessKeySecret?: string;
```

###### liveTranscription.destination.authenticationType?

```ts
optional authenticationType?: "accessKey" | "roleBased";
```

###### liveTranscription.destination.bucket?

```ts
optional bucket?: string;
```

###### liveTranscription.destination.oidcRoleArn?

```ts
optional oidcRoleArn?: string;
```

###### liveTranscription.destination.provider

```ts
provider: "whereby" | "s3";
```

###### liveTranscription.destination.region?

```ts
optional region?: string;
```

###### liveTranscription.language?

```ts
optional language?:
  | "ca,"
  | "zh,"
  | "zh-TW,"
  | "cs,"
  | "da,"
  | "nl,"
  | "en,"
  | "en-US,"
  | "en-GB,"
  | "fi,"
  | "fr,"
  | "de,"
  | "de-CH,"
  | "el,"
  | "hi,"
  | "id,"
  | "it,"
  | "ja,"
  | "ko,"
  | "lv,"
  | "ms,"
  | "no,"
  | "pl,"
  | "pt,"
  | "pt-BR,"
  | "ro,"
  | "ru,"
  | "sk,"
  | "es,"
  | "sv,"
  | "th,"
  | "uk,"
  | "vi,";
```

###### liveTranscription.liveCaptions?

```ts
optional liveCaptions?: boolean;
```

###### liveTranscription.startTrigger

```ts
startTrigger: "none" | "automatic" | "automatic-2nd-participant" | "manual";
```

###### recording?

```ts
optional recording?: {
  destination: {
     accessKeyId?: string;
     accessKeySecret?: string;
     authenticationType?: "accessKey" | "roleBased";
     bucket?: string;
     fileFormat?: "mkv" | "mp4";
     oidcRoleArn?: string;
     provider: "whereby" | "s3";
  };
  startTrigger: "none" | "prompt" | "automatic" | "automatic-2nd-participant";
  type: "none" | "local" | "cloud";
};
```

###### recording.destination

```ts
destination: {
  accessKeyId?: string;
  accessKeySecret?: string;
  authenticationType?: "accessKey" | "roleBased";
  bucket?: string;
  fileFormat?: "mkv" | "mp4";
  oidcRoleArn?: string;
  provider: "whereby" | "s3";
};
```

###### recording.destination.accessKeyId?

```ts
optional accessKeyId?: string;
```

###### recording.destination.accessKeySecret?

```ts
optional accessKeySecret?: string;
```

###### recording.destination.authenticationType?

```ts
optional authenticationType?: "accessKey" | "roleBased";
```

###### recording.destination.bucket?

```ts
optional bucket?: string;
```

###### recording.destination.fileFormat?

```ts
optional fileFormat?: "mkv" | "mp4";
```

###### recording.destination.oidcRoleArn?

```ts
optional oidcRoleArn?: string;
```

###### recording.destination.provider

```ts
provider: "whereby" | "s3";
```

###### recording.startTrigger

```ts
startTrigger: "none" | "prompt" | "automatic" | "automatic-2nd-participant";
```

###### recording.type

```ts
type: "none" | "local" | "cloud";
```

###### roomMode?

```ts
optional roomMode?: "normal" | "group";
```

###### roomNamePattern?

```ts
optional roomNamePattern?: "uuid" | "human-short";
```

###### roomNamePrefix?

```ts
optional roomNamePrefix?: string;
```

###### startDate?

```ts
optional startDate?: string;
```

###### streaming?

```ts
optional streaming?: {
  destination: {
     url: string;
  };
  startTrigger: "none" | "prompt" | "automatic";
};
```

###### streaming.destination

```ts
destination: {
  url: string;
};
```

###### streaming.destination.url

```ts
url: string;
```

###### streaming.startTrigger

```ts
startTrigger: "none" | "prompt" | "automatic";
```

###### templateType?

```ts
optional templateType?: "viewerMode";
```

##### POST /recordings/bulk-delete

```ts
POST /recordings/bulk-delete: {
  recordingIds: readonly string[];
};
```

###### recordingIds

```ts
recordingIds: readonly string[];
```

##### POST /summaries

```ts
POST /summaries: {
  template?:   | "SOAP"
     | "Extended SOAP"
     | "General Narrative"
     | "General Bulleted"
     | "Educational Lecture"
     | "Educational Tutoring";
  transcriptionId: string;
};
```

###### template?

```ts
optional template?:
  | "SOAP"
  | "Extended SOAP"
  | "General Narrative"
  | "General Bulleted"
  | "Educational Lecture"
  | "Educational Tutoring";
```

###### transcriptionId

```ts
transcriptionId: string;
```

##### POST /transcriptions

```ts
POST /transcriptions: {
  recordingId: string;
};
```

###### recordingId

```ts
recordingId: string;
```

##### POST /transcriptions/bulk-delete

```ts
POST /transcriptions/bulk-delete: {
  transcriptionIds: readonly string[];
};
```

###### transcriptionIds

```ts
transcriptionIds: readonly string[];
```

##### PUT /rooms/\{roomName\}/theme/logo

```ts
PUT /rooms/{roomName}/theme/logo: {
  theme?: "default";
};
```

###### theme?

```ts
optional theme?: "default";
```

##### PUT /rooms/\{roomName\}/theme/room-background

```ts
PUT /rooms/{roomName}/theme/room-background: {
  palette?: "default" | "grey" | "purple" | "burgund";
  theme?: "default" | "mountains" | "characters" | "rocks";
};
```

###### palette?

```ts
optional palette?: "default" | "grey" | "purple" | "burgund";
```

###### theme?

```ts
optional theme?: "default" | "mountains" | "characters" | "rocks";
```

##### PUT /rooms/\{roomName\}/theme/room-knock-page-background

```ts
PUT /rooms/{roomName}/theme/room-knock-page-background: {
  palette?: "default" | "grey" | "purple" | "burgund";
  theme?: "default" | "mountains" | "characters" | "rocks";
};
```

###### palette?

```ts
optional palette?: "default" | "grey" | "purple" | "burgund";
```

###### theme?

```ts
optional theme?: "default" | "mountains" | "characters" | "rocks";
```

##### PUT /rooms/\{roomName\}/theme/tokens

```ts
PUT /rooms/{roomName}/theme/tokens: {
  tokens?: {
     colors?: {
        focus?: string;
        primary?: string;
        secondary?: string;
     };
  };
  tokensPreset?: "custom" | "default";
};
```

###### tokens?

```ts
optional tokens?: {
  colors?: {
     focus?: string;
     primary?: string;
     secondary?: string;
  };
};
```

###### tokens.colors?

```ts
optional colors?: {
  focus?: string;
  primary?: string;
  secondary?: string;
};
```

###### tokens.colors.focus?

```ts
optional focus?: string;
```

###### tokens.colors.primary?

```ts
optional primary?: string;
```

###### tokens.colors.secondary?

```ts
optional secondary?: string;
```

###### tokensPreset?

```ts
optional tokensPreset?: "custom" | "default";
```

***

### WherebyFullApiOperationRequestBodyRequiredMap

#### Properties

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: false;
```

##### DELETE /recordings/\{recordingId\}

```ts
DELETE /recordings/{recordingId}: false;
```

##### DELETE /summaries/\{summaryId\}

```ts
DELETE /summaries/{summaryId}: false;
```

##### DELETE /transcriptions/\{transcriptionId\}

```ts
DELETE /transcriptions/{transcriptionId}: false;
```

##### GET /insights/participant

```ts
GET /insights/participant: false;
```

##### GET /insights/participants

```ts
GET /insights/participants: false;
```

##### GET /insights/room-sessions

```ts
GET /insights/room-sessions: false;
```

##### GET /insights/rooms

```ts
GET /insights/rooms: false;
```

##### GET /meetings

```ts
GET /meetings: false;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: false;
```

##### GET /recordings

```ts
GET /recordings: false;
```

##### GET /recordings/\{recordingId\}

```ts
GET /recordings/{recordingId}: false;
```

##### GET /recordings/\{recordingId\}/access-link

```ts
GET /recordings/{recordingId}/access-link: false;
```

##### GET /summaries

```ts
GET /summaries: false;
```

##### GET /summaries/\{summaryId\}

```ts
GET /summaries/{summaryId}: false;
```

##### GET /transcriptions

```ts
GET /transcriptions: false;
```

##### GET /transcriptions/\{transcriptionId\}

```ts
GET /transcriptions/{transcriptionId}: false;
```

##### GET /transcriptions/\{transcriptionId\}/access-link

```ts
GET /transcriptions/{transcriptionId}/access-link: false;
```

##### POST /meetings

```ts
POST /meetings: false;
```

##### POST /recordings/bulk-delete

```ts
POST /recordings/bulk-delete: false;
```

##### POST /summaries

```ts
POST /summaries: false;
```

##### POST /transcriptions

```ts
POST /transcriptions: false;
```

##### POST /transcriptions/bulk-delete

```ts
POST /transcriptions/bulk-delete: false;
```

##### PUT /rooms/\{roomName\}/theme/logo

```ts
PUT /rooms/{roomName}/theme/logo: false;
```

##### PUT /rooms/\{roomName\}/theme/room-background

```ts
PUT /rooms/{roomName}/theme/room-background: false;
```

##### PUT /rooms/\{roomName\}/theme/room-knock-page-background

```ts
PUT /rooms/{roomName}/theme/room-knock-page-background: false;
```

##### PUT /rooms/\{roomName\}/theme/tokens

```ts
PUT /rooms/{roomName}/theme/tokens: false;
```

***

### WherebyFullApiOperationResponseMap

#### Properties

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### DELETE /recordings/\{recordingId\}

```ts
DELETE /recordings/{recordingId}: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### DELETE /summaries/\{summaryId\}

```ts
DELETE /summaries/{summaryId}: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### DELETE /transcriptions/\{transcriptionId\}

```ts
DELETE /transcriptions/{transcriptionId}: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### GET /insights/participant

```ts
GET /insights/participant: readonly {
  displayName: string;
  sampleRateMs: number;
  samples: {
  };
  timeStamp: string;
  userAgent: string;
  userRole: string;
}[];
```

##### GET /insights/participants

```ts
GET /insights/participants: {
  cursor?: string;
  results?: readonly {
     comment?: string;
     deviceId: string;
     displayName: string;
     externalId: string;
     joinedAt: string;
     leftAt: string;
     participantId: string;
     rating?: number;
     roleName: string;
     roomSessionId: string;
     tags?: readonly string[];
     userId: string;
  }[];
};
```

###### cursor?

```ts
optional cursor?: string;
```

###### results?

```ts
optional results?: readonly {
  comment?: string;
  deviceId: string;
  displayName: string;
  externalId: string;
  joinedAt: string;
  leftAt: string;
  participantId: string;
  rating?: number;
  roleName: string;
  roomSessionId: string;
  tags?: readonly string[];
  userId: string;
}[];
```

##### GET /insights/room-sessions

```ts
GET /insights/room-sessions: {
  cursor?: string;
  results?: readonly {
     endedAt?: string;
     rating?: number;
     roomName: string;
     roomSessionId: string;
     startedAt?: string;
     totalParticipantMinutes: number;
     totalRatings?: number;
     totalRecorderMinutes: number;
     totalStreamerMinutes: number;
     totalUniqueParticipants: number;
     totalUniqueRecorders: number;
     totalUniqueStreamers: number;
  }[];
};
```

###### cursor?

```ts
optional cursor?: string;
```

###### results?

```ts
optional results?: readonly {
  endedAt?: string;
  rating?: number;
  roomName: string;
  roomSessionId: string;
  startedAt?: string;
  totalParticipantMinutes: number;
  totalRatings?: number;
  totalRecorderMinutes: number;
  totalStreamerMinutes: number;
  totalUniqueParticipants: number;
  totalUniqueRecorders: number;
  totalUniqueStreamers: number;
}[];
```

##### GET /insights/rooms

```ts
GET /insights/rooms: {
  cursor?: string;
  results?: readonly {
     createdAt: string;
     endAt: string;
     firstSessionStartedAt: string;
     lastSessionStartedAt: string;
     rating?: number;
     roomName: string;
     totalParticipantMinutes: number;
     totalRatings?: number;
     totalRecorderMinutes: number;
     totalSessions: number;
     totalStreamerMinutes: number;
     totalUniqueParticipants: number;
     totalUniqueRecorders: number;
     totalUniqueStreamers: number;
  }[];
};
```

###### cursor?

```ts
optional cursor?: string;
```

###### results?

```ts
optional results?: readonly {
  createdAt: string;
  endAt: string;
  firstSessionStartedAt: string;
  lastSessionStartedAt: string;
  rating?: number;
  roomName: string;
  totalParticipantMinutes: number;
  totalRatings?: number;
  totalRecorderMinutes: number;
  totalSessions: number;
  totalStreamerMinutes: number;
  totalUniqueParticipants: number;
  totalUniqueRecorders: number;
  totalUniqueStreamers: number;
}[];
```

##### GET /meetings

```ts
GET /meetings: {
  cursor: string;
  results: readonly WherebyFullApiSchemaMeeting[];
};
```

###### cursor

```ts
cursor: string;
```

###### results

```ts
results: readonly WherebyFullApiSchemaMeeting[];
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: WherebyFullApiSchemaMeeting;
```

##### GET /recordings

```ts
GET /recordings: {
  cursor: string;
  results: readonly WherebyFullApiSchemaRecording[];
};
```

###### cursor

```ts
cursor: string;
```

###### results

```ts
results: readonly WherebyFullApiSchemaRecording[];
```

##### GET /recordings/\{recordingId\}

```ts
GET /recordings/{recordingId}: WherebyFullApiSchemaRecording;
```

##### GET /recordings/\{recordingId\}/access-link

```ts
GET /recordings/{recordingId}/access-link: {
  accessLink: string;
  expires: number;
};
```

###### accessLink

```ts
accessLink: string;
```

###### expires

```ts
expires: number;
```

##### GET /summaries

```ts
GET /summaries: {
  results: readonly WherebyFullApiSchemaSummary[];
};
```

###### results

```ts
results: readonly WherebyFullApiSchemaSummary[];
```

##### GET /summaries/\{summaryId\}

```ts
GET /summaries/{summaryId}: WherebyFullApiSchemaSummary;
```

##### GET /transcriptions

```ts
GET /transcriptions: {
  results: readonly WherebyFullApiSchemaTranscription[];
};
```

###### results

```ts
results: readonly WherebyFullApiSchemaTranscription[];
```

##### GET /transcriptions/\{transcriptionId\}

```ts
GET /transcriptions/{transcriptionId}: WherebyFullApiSchemaTranscription;
```

##### GET /transcriptions/\{transcriptionId\}/access-link

```ts
GET /transcriptions/{transcriptionId}/access-link: {
  accessLink: string;
  expires: number;
};
```

###### accessLink

```ts
accessLink: string;
```

###### expires

```ts
expires: number;
```

##### POST /meetings

```ts
POST /meetings: WherebyFullApiSchemaMeeting;
```

##### POST /recordings/bulk-delete

```ts
POST /recordings/bulk-delete: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### POST /summaries

```ts
POST /summaries: {
  summaryId?: string;
};
```

###### summaryId?

```ts
optional summaryId?: string;
```

##### POST /transcriptions

```ts
POST /transcriptions: {
  transcriptionId?: string;
};
```

###### transcriptionId?

```ts
optional transcriptionId?: string;
```

##### POST /transcriptions/bulk-delete

```ts
POST /transcriptions/bulk-delete: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### PUT /rooms/\{roomName\}/theme/logo

```ts
PUT /rooms/{roomName}/theme/logo: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### PUT /rooms/\{roomName\}/theme/room-background

```ts
PUT /rooms/{roomName}/theme/room-background: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### PUT /rooms/\{roomName\}/theme/room-knock-page-background

```ts
PUT /rooms/{roomName}/theme/room-knock-page-background: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

##### PUT /rooms/\{roomName\}/theme/tokens

```ts
PUT /rooms/{roomName}/theme/tokens: {
  data?: {
     msLeft?: number;
  };
  error?: string;
};
```

###### data?

```ts
optional data?: {
  msLeft?: number;
};
```

###### data.msLeft?

```ts
optional msLeft?: number;
```

###### error?

```ts
optional error?: string;
```

***

### WherebyGetMeetingInput

#### Properties

##### fields?

```ts
optional fields?: WherebyMeetingField[];
```

***

### WherebyInsightsListResponse

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### cursor

```ts
cursor: string;
```

##### results

```ts
results: WherebyVideoJsonObject[];
```

***

### WherebyInsightsQueryInput

#### Extended by

- [`WherebyParticipantInsightsInput`](#wherebyparticipantinsightsinput)

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### cursor?

```ts
optional cursor?: string;
```

##### limit?

```ts
optional limit?: number;
```

##### sortBy?

```ts
optional sortBy?: string;
```

***

### WherebyListMeetingsInput

#### Properties

##### cursor?

```ts
optional cursor?: string;
```

##### fields?

```ts
optional fields?: WherebyMeetingField[];
```

##### limit?

```ts
optional limit?: number;
```

***

### WherebyListMeetingsResponse

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### cursor

```ts
cursor: string;
```

##### results

```ts
results: WherebyMeetingResource[];
```

***

### WherebyListRecordingsResponse

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### cursor

```ts
cursor: string;
```

##### results

```ts
results: WherebyRecordingResource[];
```

***

### WherebyListSummariesResponse

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### cursor

```ts
cursor: string;
```

##### results

```ts
results: WherebySummaryResource[];
```

***

### WherebyListTranscriptionsResponse

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### cursor

```ts
cursor: string;
```

##### results

```ts
results: WherebyTranscriptionResource[];
```

***

### WherebyLiveCheckOptions

#### Extends

- [`WherebyVideoClientOptions`](#wherebyvideoclientoptions)

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`WherebyVideoClientOptions`](#wherebyvideoclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### apiKey

```ts
apiKey: string;
```

###### Inherited from

[`WherebyVideoClientOptions`](#wherebyvideoclientoptions).[`apiKey`](#apikey-2)

##### client?

```ts
optional client?: Pick<WherebyVideoClient, "listMeetings">;
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

[`WherebyVideoClientOptions`](#wherebyvideoclientoptions).[`fetch`](#fetch-1)

***

### WherebyLiveTranscriptionOptions

#### Properties

##### destination?

```ts
optional destination?: WherebyStorageDestination;
```

##### language?

```ts
optional language?: string;
```

##### liveCaptions?

```ts
optional liveCaptions?: boolean;
```

##### startTrigger?

```ts
optional startTrigger?: WherebyLiveTranscriptionStartTrigger;
```

***

### WherebyMeetingResource

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### endDate

```ts
endDate: string;
```

##### hostRoomUrl?

```ts
optional hostRoomUrl?: string;
```

##### meetingId

```ts
meetingId: string;
```

##### roomName?

```ts
optional roomName?: string;
```

##### roomUrl

```ts
roomUrl: string;
```

##### startDate?

```ts
optional startDate?: string;
```

##### viewerRoomUrl?

```ts
optional viewerRoomUrl?: string;
```

***

### WherebyOperationRequestInput

#### Properties

##### body?

```ts
optional body?: WherebyVideoProviderPayload;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number | boolean>;
```

##### query?

```ts
optional query?: WherebyVideoProviderQuery;
```

***

### WherebyParticipantInsightsInput

#### Extends

- [`WherebyInsightsQueryInput`](#wherebyinsightsqueryinput)

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### cursor?

```ts
optional cursor?: string;
```

###### Inherited from

[`WherebyInsightsQueryInput`](#wherebyinsightsqueryinput).[`cursor`](#cursor-2)

##### externalId?

```ts
optional externalId?: string;
```

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`WherebyInsightsQueryInput`](#wherebyinsightsqueryinput).[`limit`](#limit-1)

##### participantId?

```ts
optional participantId?: string;
```

##### roomSessionId?

```ts
optional roomSessionId?: string;
```

##### sortBy?

```ts
optional sortBy?: string;
```

###### Inherited from

[`WherebyInsightsQueryInput`](#wherebyinsightsqueryinput).[`sortBy`](#sortby)

***

### WherebyRecordingOptions

#### Properties

##### destination?

```ts
optional destination?: WherebyStorageDestination;
```

##### startTrigger?

```ts
optional startTrigger?: WherebyRecordingStartTrigger;
```

##### type

```ts
type: WherebyRecordingType;
```

***

### WherebyRecordingResource

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### endDate?

```ts
optional endDate?: string;
```

##### filename?

```ts
optional filename?: string;
```

##### recordingId

```ts
recordingId: string;
```

##### roomName?

```ts
optional roomName?: string;
```

##### roomSessionId?

```ts
optional roomSessionId?: string;
```

##### sizeInMegaBytes?

```ts
optional sizeInMegaBytes?: number;
```

##### startDate?

```ts
optional startDate?: string;
```

***

### WherebyResource

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

***

### WherebyRoomThemeTokensInput

#### Properties

##### tokens?

```ts
optional tokens?: {
[key: string]: WherebyVideoProviderExtensionValue;
  colors?: {
   [key: string]: WherebyVideoProviderExtensionValue;
     focus?: string;
     primary?: string;
     secondary?: string;
  };
};
```

###### Index Signature

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

###### colors?

```ts
optional colors?: {
[key: string]: WherebyVideoProviderExtensionValue;
  focus?: string;
  primary?: string;
  secondary?: string;
};
```

###### Index Signature

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

###### colors.focus?

```ts
optional focus?: string;
```

###### colors.primary?

```ts
optional primary?: string;
```

###### colors.secondary?

```ts
optional secondary?: string;
```

##### tokensPreset?

```ts
optional tokensPreset?: "custom" | "default";
```

***

### WherebySignedWebhookRequest

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### data?

```ts
optional data?: {
[key: string]: WherebyVideoProviderExtensionValue;
  displayName?: string;
  externalId?: string;
  meetingId?: string;
  metadata?: string;
  participantId?: string;
  recordingId?: string;
  roleName?: string;
  roomName?: string;
  roomSessionId?: string;
  status?: string;
  subdomain?: string;
  transcriptionId?: string;
};
```

###### Index Signature

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

###### displayName?

```ts
optional displayName?: string;
```

###### externalId?

```ts
optional externalId?: string;
```

###### meetingId?

```ts
optional meetingId?: string;
```

###### metadata?

```ts
optional metadata?: string;
```

###### participantId?

```ts
optional participantId?: string;
```

###### recordingId?

```ts
optional recordingId?: string;
```

###### roleName?

```ts
optional roleName?: string;
```

###### roomName?

```ts
optional roomName?: string;
```

###### roomSessionId?

```ts
optional roomSessionId?: string;
```

###### status?

```ts
optional status?: string;
```

###### subdomain?

```ts
optional subdomain?: string;
```

###### transcriptionId?

```ts
optional transcriptionId?: string;
```

##### eventType?

```ts
optional eventType?: string;
```

##### json?

```ts
optional json?: WherebyWebhookEvent;
```

##### rawBody

```ts
rawBody: string;
```

##### signatureHeader?

```ts
optional signatureHeader?: string;
```

##### verified

```ts
verified: boolean;
```

***

### WherebyStorageDestination

#### Properties

##### accessKeyId?

```ts
optional accessKeyId?: string;
```

##### accessKeySecret?

```ts
optional accessKeySecret?: string;
```

##### authenticationType?

```ts
optional authenticationType?: WherebyStorageAuthenticationType;
```

##### bucket?

```ts
optional bucket?: string;
```

##### oidcRoleArn?

```ts
optional oidcRoleArn?: string;
```

##### provider

```ts
provider: WherebyStorageProvider;
```

##### region?

```ts
optional region?: string;
```

***

### WherebyStreamingOptions

#### Properties

##### destination?

```ts
optional destination?: {
  url: string;
};
```

###### url

```ts
url: string;
```

##### startTrigger?

```ts
optional startTrigger?: WherebyStreamingStartTrigger;
```

***

### WherebySummaryResource

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### state?

```ts
optional state?: string;
```

##### summaryId

```ts
summaryId: string;
```

##### text?

```ts
optional text?: string;
```

##### transcriptionId?

```ts
optional transcriptionId?: string;
```

***

### WherebyTranscriptionResource

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### createdAt?

```ts
optional createdAt?: string;
```

##### durationInSeconds?

```ts
optional durationInSeconds?: number;
```

##### endDate?

```ts
optional endDate?: string;
```

##### recordingId?

```ts
optional recordingId?: string;
```

##### roomName?

```ts
optional roomName?: string;
```

##### roomSessionId?

```ts
optional roomSessionId?: string;
```

##### startDate?

```ts
optional startDate?: string;
```

##### state?

```ts
optional state?: "ready" | "failed" | "in_progress";
```

##### storageType?

```ts
optional storageType?: "WHEREBY_HOSTED" | "SELF_HOSTED";
```

##### transcriptionId

```ts
transcriptionId: string;
```

##### type?

```ts
optional type?: "LIVE_TRANSCRIPTION" | "RECORDING_TRANSCRIPTION";
```

***

### WherebyVideoClient

#### Properties

##### fullApi

```ts
fullApi: WherebyFullApiGeneratedClient;
```

##### requestOperation

```ts
requestOperation: WherebyGeneratedOperationCaller;
```

#### Methods

##### bulkDeleteRecordings()

```ts
bulkDeleteRecordings(recordingIds): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `recordingIds` | `string`[] |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### bulkDeleteTranscriptions()

```ts
bulkDeleteTranscriptions(transcriptionIds): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `transcriptionIds` | `string`[] |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### createMeeting()

```ts
createMeeting(input): Promise<WherebyMeetingResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WherebyCreateMeetingInput`](#wherebycreatemeetinginput) |

###### Returns

`Promise`\<[`WherebyMeetingResource`](#wherebymeetingresource)\>

##### createSummary()

```ts
createSummary(input): Promise<WherebySummaryResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WherebyCreateSummaryInput`](#wherebycreatesummaryinput) |

###### Returns

`Promise`\<[`WherebySummaryResource`](#wherebysummaryresource)\>

##### createTranscription()

```ts
createTranscription(input): Promise<WherebyTranscriptionResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WherebyCreateTranscriptionInput`](#wherebycreatetranscriptioninput) |

###### Returns

`Promise`\<[`WherebyTranscriptionResource`](#wherebytranscriptionresource)\>

##### deleteMeeting()

```ts
deleteMeeting(meetingId): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `meetingId` | `string` |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### deleteRecording()

```ts
deleteRecording(recordingId): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `recordingId` | `string` |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### deleteSummary()

```ts
deleteSummary(summaryId): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `summaryId` | `string` |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### deleteTranscription()

```ts
deleteTranscription(transcriptionId): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `transcriptionId` | `string` |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### getMeeting()

```ts
getMeeting(meetingId, input?): Promise<WherebyMeetingResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `meetingId` | `string` |
| `input?` | [`WherebyGetMeetingInput`](#wherebygetmeetinginput) |

###### Returns

`Promise`\<[`WherebyMeetingResource`](#wherebymeetingresource)\>

##### getParticipantInsights()

```ts
getParticipantInsights(input): Promise<WherebyVideoJsonObject[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WherebyParticipantInsightsInput`](#wherebyparticipantinsightsinput) & \{ `participantId`: `string`; `roomSessionId`: `string`; \} |

###### Returns

`Promise`\<[`WherebyVideoJsonObject`](#wherebyvideojsonobject)[]\>

##### getRecording()

```ts
getRecording(recordingId): Promise<WherebyRecordingResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `recordingId` | `string` |

###### Returns

`Promise`\<[`WherebyRecordingResource`](#wherebyrecordingresource)\>

##### getRecordingAccessLink()

```ts
getRecordingAccessLink(recordingId, input?): Promise<WherebyAccessLinkResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `recordingId` | `string` |
| `input?` | [`WherebyAccessLinkInput`](#wherebyaccesslinkinput) |

###### Returns

`Promise`\<[`WherebyAccessLinkResource`](#wherebyaccesslinkresource)\>

##### getRoomInsights()

```ts
getRoomInsights(input?): Promise<WherebyInsightsListResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`WherebyInsightsQueryInput`](#wherebyinsightsqueryinput) |

###### Returns

`Promise`\<[`WherebyInsightsListResponse`](#wherebyinsightslistresponse)\>

##### getRoomSessionInsights()

```ts
getRoomSessionInsights(input): Promise<WherebyInsightsListResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WherebyInsightsQueryInput`](#wherebyinsightsqueryinput) & \{ `roomName`: `string`; \} |

###### Returns

`Promise`\<[`WherebyInsightsListResponse`](#wherebyinsightslistresponse)\>

##### getSummary()

```ts
getSummary(summaryId): Promise<WherebySummaryResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `summaryId` | `string` |

###### Returns

`Promise`\<[`WherebySummaryResource`](#wherebysummaryresource)\>

##### getTranscription()

```ts
getTranscription(transcriptionId): Promise<WherebyTranscriptionResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `transcriptionId` | `string` |

###### Returns

`Promise`\<[`WherebyTranscriptionResource`](#wherebytranscriptionresource)\>

##### getTranscriptionAccessLink()

```ts
getTranscriptionAccessLink(transcriptionId, input?): Promise<WherebyAccessLinkResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `transcriptionId` | `string` |
| `input?` | [`WherebyAccessLinkInput`](#wherebyaccesslinkinput) |

###### Returns

`Promise`\<[`WherebyAccessLinkResource`](#wherebyaccesslinkresource)\>

##### listMeetings()

```ts
listMeetings(input?): Promise<WherebyListMeetingsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`WherebyListMeetingsInput`](#wherebylistmeetingsinput) |

###### Returns

`Promise`\<[`WherebyListMeetingsResponse`](#wherebylistmeetingsresponse)\>

##### listParticipants()

```ts
listParticipants(input): Promise<WherebyInsightsListResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`WherebyParticipantInsightsInput`](#wherebyparticipantinsightsinput) |

###### Returns

`Promise`\<[`WherebyInsightsListResponse`](#wherebyinsightslistresponse)\>

##### listRecordings()

```ts
listRecordings(input?): Promise<WherebyListRecordingsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`WherebyCursorListInput`](#wherebycursorlistinput) |

###### Returns

`Promise`\<[`WherebyListRecordingsResponse`](#wherebylistrecordingsresponse)\>

##### listSummaries()

```ts
listSummaries(input?): Promise<WherebyListSummariesResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`WherebyCursorListInput`](#wherebycursorlistinput) |

###### Returns

`Promise`\<[`WherebyListSummariesResponse`](#wherebylistsummariesresponse)\>

##### listTranscriptions()

```ts
listTranscriptions(input?): Promise<WherebyListTranscriptionsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`WherebyCursorListInput`](#wherebycursorlistinput) |

###### Returns

`Promise`\<[`WherebyListTranscriptionsResponse`](#wherebylisttranscriptionsresponse)\>

##### setRoomBackground()

```ts
setRoomBackground(roomName, input): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomName` | `string` |
| `input` | [`WherebyThemeMediaInput`](#wherebythememediainput) |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### setRoomKnockPageBackground()

```ts
setRoomKnockPageBackground(roomName, input): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomName` | `string` |
| `input` | [`WherebyThemeMediaInput`](#wherebythememediainput) |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### setRoomLogo()

```ts
setRoomLogo(roomName, input): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomName` | `string` |
| `input` | [`WherebyThemeMediaInput`](#wherebythememediainput) |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### setRoomThemeTokens()

```ts
setRoomThemeTokens(roomName, input): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `roomName` | `string` |
| `input` | [`WherebyRoomThemeTokensInput`](#wherebyroomthemetokensinput) |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

***

### WherebyVideoClientOptions

#### Extended by

- [`WherebyLiveCheckOptions`](#wherebylivecheckoptions)

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### apiKey

```ts
apiKey: string;
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

***

### WherebyVideoJsonObject

#### Extended by

- [`WherebyVideoProviderExtensionFields`](#wherebyvideoproviderextensionfields)
- [`WherebyVideoProviderResponse`](#wherebyvideoproviderresponse)

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

***

### WherebyVideoProviderExtensionFields

#### Extends

- [`WherebyVideoJsonObject`](#wherebyvideojsonobject)

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

***

### WherebyVideoProviderResponse

#### Extends

- [`WherebyVideoJsonObject`](#wherebyvideojsonobject)

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

***

### WherebyWebhookEvent

#### Indexable

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

#### Properties

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### createdAt?

```ts
optional createdAt?: string;
```

##### data?

```ts
optional data?: {
[key: string]: WherebyVideoProviderExtensionValue;
  displayName?: string;
  externalId?: string;
  meetingId?: string;
  metadata?: string;
  participantId?: string;
  recordingId?: string;
  roleName?: string;
  roomName?: string;
  roomSessionId?: string;
  status?: string;
  subdomain?: string;
  transcriptionId?: string;
};
```

###### Index Signature

```ts
[key: string]: WherebyVideoProviderExtensionValue
```

###### displayName?

```ts
optional displayName?: string;
```

###### externalId?

```ts
optional externalId?: string;
```

###### meetingId?

```ts
optional meetingId?: string;
```

###### metadata?

```ts
optional metadata?: string;
```

###### participantId?

```ts
optional participantId?: string;
```

###### recordingId?

```ts
optional recordingId?: string;
```

###### roleName?

```ts
optional roleName?: string;
```

###### roomName?

```ts
optional roomName?: string;
```

###### roomSessionId?

```ts
optional roomSessionId?: string;
```

###### status?

```ts
optional status?: string;
```

###### subdomain?

```ts
optional subdomain?: string;
```

###### transcriptionId?

```ts
optional transcriptionId?: string;
```

##### id

```ts
id: string;
```

##### type

```ts
type: string;
```

## Type Aliases

### WherebyFullApiOperationUid

```ts
type WherebyFullApiOperationUid = typeof WHEREBY_FULL_API_OPERATION_UIDS[number];
```

***

### WherebyFullApiSchemaFields

```ts
type WherebyFullApiSchemaFields = ReadonlyArray<"hostRoomUrl" | "viewerRoomUrl">;
```

***

### WherebyFullApiSchemaJsonPrimitive

```ts
type WherebyFullApiSchemaJsonPrimitive = string | number | boolean | null;
```

***

### WherebyFullApiSchemaJsonValue

```ts
type WherebyFullApiSchemaJsonValue =
  | WherebyFullApiSchemaJsonPrimitive
  | readonly WherebyFullApiSchemaJsonValue[]
  | {
[key: string]: WherebyFullApiSchemaJsonValue;
};
```

***

### WherebyFullApiSchemaMeeting

```ts
type WherebyFullApiSchemaMeeting = {
  endDate: string;
  hostRoomUrl?: string;
  meetingId: string;
  roomName?: string;
  roomUrl: string;
  startDate?: string;
  viewerRoomUrl?: string;
};
```

#### Properties

##### endDate

```ts
endDate: string;
```

##### hostRoomUrl?

```ts
optional hostRoomUrl?: string;
```

##### meetingId

```ts
meetingId: string;
```

##### roomName?

```ts
optional roomName?: string;
```

##### roomUrl

```ts
roomUrl: string;
```

##### startDate?

```ts
optional startDate?: string;
```

##### viewerRoomUrl?

```ts
optional viewerRoomUrl?: string;
```

***

### WherebyFullApiSchemaRecording

```ts
type WherebyFullApiSchemaRecording = {
};
```

***

### WherebyFullApiSchemaSummary

```ts
type WherebyFullApiSchemaSummary = {
};
```

***

### WherebyFullApiSchemaTranscription

```ts
type WherebyFullApiSchemaTranscription = {
  createdAt: string;
  durationInSeconds?: number;
  endDate: string;
  filename?: string;
  roomName: string;
  roomSessionId: string;
  startDate: string;
  state: "ready" | "failed" | "in_progress";
  storageType?: "WHEREBY_HOSTED" | "SELF_HOSTED";
  transcriptionId: string;
  type: "LIVE_TRANSCRIPTION" | "RECORDING_TRANSCRIPTION";
};
```

#### Properties

##### createdAt

```ts
createdAt: string;
```

##### durationInSeconds?

```ts
optional durationInSeconds?: number;
```

##### endDate

```ts
endDate: string;
```

##### filename?

```ts
optional filename?: string;
```

##### roomName

```ts
roomName: string;
```

##### roomSessionId

```ts
roomSessionId: string;
```

##### startDate

```ts
startDate: string;
```

##### state

```ts
state: "ready" | "failed" | "in_progress";
```

##### storageType?

```ts
optional storageType?: "WHEREBY_HOSTED" | "SELF_HOSTED";
```

##### transcriptionId

```ts
transcriptionId: string;
```

##### type

```ts
type: "LIVE_TRANSCRIPTION" | "RECORDING_TRANSCRIPTION";
```

***

### WherebyGeneratedOperationCaller

```ts
type WherebyGeneratedOperationCaller = <OperationKey>(operationKey, ...args) => Promise<WherebyFullApiOperationResponseMap[OperationKey]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `OperationKey` *extends* `WherebyFullApiOperationKey` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `operationKey` | `OperationKey` |
| ...`args` | `WherebyFullApiOperationArgs`\<`OperationKey`\> |

#### Returns

`Promise`\<[`WherebyFullApiOperationResponseMap`](#wherebyfullapioperationresponsemap)\[`OperationKey`\]\>

***

### WherebyHttpMethod

```ts
type WherebyHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### WherebyLiveTranscriptionStartTrigger

```ts
type WherebyLiveTranscriptionStartTrigger = "none" | "manual" | "automatic" | "automatic-2nd-participant";
```

***

### WherebyMeetingField

```ts
type WherebyMeetingField = "hostRoomUrl" | "viewerRoomUrl";
```

***

### WherebyRecordingStartTrigger

```ts
type WherebyRecordingStartTrigger = "none" | "prompt" | "automatic" | "automatic-2nd-participant";
```

***

### WherebyRecordingType

```ts
type WherebyRecordingType = "none" | "local" | "cloud";
```

***

### WherebyRoomMode

```ts
type WherebyRoomMode = "normal" | "group";
```

***

### WherebyRoomNamePattern

```ts
type WherebyRoomNamePattern = "uuid" | "human-short";
```

***

### WherebyStorageAuthenticationType

```ts
type WherebyStorageAuthenticationType = "accessKey" | "roleBased";
```

***

### WherebyStorageProvider

```ts
type WherebyStorageProvider = "s3" | "whereby";
```

***

### WherebyStreamingStartTrigger

```ts
type WherebyStreamingStartTrigger = "none" | "prompt" | "automatic";
```

***

### WherebyTemplateType

```ts
type WherebyTemplateType = "viewerMode";
```

***

### WherebyThemeMediaInput

```ts
type WherebyThemeMediaInput = FormData | WherebyVideoJsonObject;
```

***

### WherebyVideoJsonPrimitive

```ts
type WherebyVideoJsonPrimitive = string | number | boolean | null;
```

***

### WherebyVideoJsonValue

```ts
type WherebyVideoJsonValue =
  | WherebyVideoJsonPrimitive
  | WherebyVideoJsonObject
  | readonly WherebyVideoJsonValue[];
```

***

### WherebyVideoProviderExtensionValue

```ts
type WherebyVideoProviderExtensionValue = WherebyVideoJsonValue | object | undefined;
```

***

### WherebyVideoProviderPayload

```ts
type WherebyVideoProviderPayload = WherebyVideoJsonObject | object;
```

***

### WherebyVideoProviderQuery

```ts
type WherebyVideoProviderQuery = Record<string, WherebyVideoProviderExtensionValue>;
```

## Variables

### WHEREBY\_FULL\_API\_DOCS\_SOURCE

```ts
const WHEREBY_FULL_API_DOCS_SOURCE: "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings" = "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings";
```

***

### WHEREBY\_FULL\_API\_GENERATED\_AT

```ts
const WHEREBY_FULL_API_GENERATED_AT: "2026-06-18" = "2026-06-18";
```

***

### WHEREBY\_FULL\_API\_GENERATED\_FUNCTION\_COUNT

```ts
const WHEREBY_FULL_API_GENERATED_FUNCTION_COUNT: 27;
```

***

### WHEREBY\_FULL\_API\_GENERATED\_FUNCTION\_NAMES

```ts
const WHEREBY_FULL_API_GENERATED_FUNCTION_NAMES: readonly ["CreateMeeting", "GetMeetings", "DeleteMeeting", "GetMeeting", "GetRecordings", "DeleteRecording", "GetRecording", "GetRecordingAccessLink", "BulkDeleteRecordings", "CreateTranscription", "GetTranscriptions", "DeleteTranscription", "GetTranscription", "GetTranscriptionAccessLink", "BulkDeleteTranscriptions", "CreateSummary", "GetSummaries", "DeleteSummary", "GetSummary", "SetRoomColors", "SetRoomLogo", "SetRoomBackground", "SetRoomKnockPageBackground", "GetRoomInsights", "GetRoomSessionInsights", "GetParticipants", "GetDetailsForAParticipantInASession"];
```

***

### WHEREBY\_FULL\_API\_OPENAPI\_VERSION

```ts
const WHEREBY_FULL_API_OPENAPI_VERSION: "3.0.0" = "3.0.0";
```

***

### WHEREBY\_FULL\_API\_OPERATION\_BY\_ID

```ts
const WHEREBY_FULL_API_OPERATION_BY_ID: Map<string, WherebyFullApiOperation>;
```

***

### WHEREBY\_FULL\_API\_OPERATION\_BY\_UID

```ts
const WHEREBY_FULL_API_OPERATION_BY_UID: Map<string, WherebyFullApiOperation>;
```

***

### WHEREBY\_FULL\_API\_OPERATION\_COUNT

```ts
const WHEREBY_FULL_API_OPERATION_COUNT: 27 = 27;
```

***

### WHEREBY\_FULL\_API\_OPERATIONS

```ts
const WHEREBY_FULL_API_OPERATIONS: readonly WherebyFullApiOperation[];
```

***

### WHEREBY\_FULL\_API\_PATH\_COUNT

```ts
const WHEREBY_FULL_API_PATH_COUNT: 20 = 20;
```

***

### WHEREBY\_FULL\_API\_SPEC\_SOURCE

```ts
const WHEREBY_FULL_API_SPEC_SOURCE: "https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json" = "https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json";
```

***

### WHEREBY\_FULL\_API\_SPEC\_VERSION

```ts
const WHEREBY_FULL_API_SPEC_VERSION: "v1" = "v1";
```

***

### wherebyVideoIntegration

```ts
const wherebyVideoIntegration: DefinedIntegration<{
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: Record<string, unknown>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "provider-api-subset"
        | "support-workflow-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "inbound-only"
     | "outbound-only"
     | "bidirectional"
     | "receive-only"
    | "send-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official" | "community" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: Record<string, unknown>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "schedule";
     changesWorkflow: true;
     description: "Creates transient Whereby Embedded meeting rooms from SDK-user-owned scheduling and escalation policy.";
     exposesSensitiveData: true;
     label: "Schedule Whereby video rooms";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Whereby transient meeting rooms, transcription jobs, and summary jobs with SDK-user-provided recording, transcription, and retention policy.";
     exposesSensitiveData: true;
     label: "Create Whereby meetings";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
      }, {
        kind: "wherebyTranscription";
        label: "Whereby Transcription";
      }, {
        kind: "wherebySummary";
        label: "Whereby Summary";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Lists and reads Whereby transient meetings, recordings, transcription metadata/access links, and beta summaries for SDK-user-selected support workflows.";
     exposesSensitiveData: true;
     label: "Read Whereby meetings";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
      }, {
        kind: "wherebyRecording";
        label: "Whereby Recording";
      }, {
        kind: "wherebyTranscription";
        label: "Whereby Transcription";
      }, {
        kind: "wherebySummary";
        label: "Whereby Summary";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes Whereby transient meetings, recordings, transcriptions, and beta summaries when SDK-user lifecycle or retention policy permits deletion.";
     label: "Delete Whereby meetings";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
      }, {
        kind: "wherebyRecording";
        label: "Whereby Recording";
      }, {
        kind: "wherebyTranscription";
        label: "Whereby Transcription";
      }, {
        kind: "wherebySummary";
        label: "Whereby Summary";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates supported Whereby room configuration such as theme color tokens for SDK-user-owned branded room experiences.";
     label: "Update Whereby room theme";
     providerObjects: readonly [{
        kind: "wherebyRoomTheme";
        label: "Whereby Room Theme";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Whereby room, session, recording, transcription, and assistant webhook events.";
     exposesSensitiveData: true;
     label: "Receive Whereby webhooks";
     providerObjects: readonly [{
        kind: "wherebyWebhookEvent";
        label: "Whereby Webhook Event";
      }, {
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "whereby.request-signature";
     description: "Validates Whereby-Signature timestamp and v1 HMAC values with replay protection.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Whereby webhook signatures";
     providerObjects: readonly [{
        kind: "wherebySignedRequest";
        label: "Whereby Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "video";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Whereby REST OpenAPI spec";
        url: "https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json";
      }, {
        label: "Whereby REST meetings API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings";
      }, {
        label: "Whereby REST recordings API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/recordings";
      }, {
        label: "Whereby REST transcriptions API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/transcriptions";
      }, {
        label: "Whereby REST summaries API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/summaries";
      }, {
        label: "Whereby webhooks reference";
        url: "https://docs.whereby.com/reference/webhooks-reference";
     }];
     notes: readonly ["Coverage includes generated per-operation functions for every operation in Whereby's official public REST OpenAPI spec.", "Typed convenience helpers remain available for meetings, room theme tokens/media, recordings, transcriptions, beta summaries, insights, signed webhook parsing, and live readiness checks.", "This support slice is limited to the Whereby REST API surface; browser/mobile SDK behavior, live media transport, embedded UI control, assistants, web-component APIs, React/React Native SDKs, camera effects, customer S3 policy, and webhook event catalogs are separate Whereby surfaces.", "The SDK user owns consent, recording/transcription/summarization eligibility, data retention, host/viewer URL distribution, room branding policy, and feature-gated beta availability decisions."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side API key used as a bearer token for Whereby Embedded REST API calls.";
     id: "whereby-api-key";
     label: "Whereby API key";
     required: true;
   }, {
     description: "SDK-user-selected Embedded organization or subdomain used for readiness display and room URL policy.";
     id: "whereby-organization";
     label: "Whereby organization/subdomain";
     required: false;
   }, {
     description: "SDK-user-owned room mode, room-name prefix, template type, host/viewer URL exposure, recording, transcription, and streaming policy.";
     id: "whereby-room-template";
     label: "Whereby room template policy";
     required: false;
   }, {
     description: "Endpoint signing secret from the Whereby Embedded dashboard used to validate Whereby-Signature HMAC headers.";
     id: "whereby-webhook-signing-secret";
     label: "Whereby webhook signing secret";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "video.whereby";
  limitations: readonly ["Whereby meetings are transient rooms controlled by the SDK user's Embedded account, API key, plan, dashboard configuration, and current Whereby feature availability.", "Whereby's documented meeting API supports create, list, get, and delete; meeting mutation is limited by Whereby to the documented room theme endpoints.", "This package provides REST and webhook primitives only; it does not decide channel eligibility, consent, recording/transcription policy, handoff timing, or which users receive host/viewer URLs."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        browserSdkLiveMediaEmbeddedUiAssistants: "provider-supported-not-typed-separate-surface";
        insights: "typed-list-read";
        meetings: "typed-create-list-read-delete";
        recordings: "typed-list-read-access-link-delete";
        restApiOperations: "generated-constrained-support-slice";
        roomTheme: "typed-update";
        summaries: "typed-create-list-read-delete";
        transcriptions: "typed-create-list-read-access-link-delete";
        webhooks: "typed-validate-parse";
     };
     docs: "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings";
     generatedSupportSliceVerification: {
        allowlist: readonly ["POST /meetings", "GET /meetings", "GET /meetings/{meetingId}", "DELETE /meetings/{meetingId}", "GET /recordings", "GET /recordings/{recordingId}", "GET /recordings/{recordingId}/access-link", "POST /recordings/bulk-delete", "DELETE /recordings/{recordingId}", "POST /transcriptions", "GET /transcriptions", "GET /transcriptions/{transcriptionId}", "GET /transcriptions/{transcriptionId}/access-link", "POST /transcriptions/bulk-delete", "DELETE /transcriptions/{transcriptionId}", "POST /summaries", "GET /summaries", "GET /summaries/{summaryId}", "DELETE /summaries/{summaryId}", "PUT /rooms/{roomName}/theme/tokens", "PUT /rooms/{roomName}/theme/logo", "PUT /rooms/{roomName}/theme/room-background", "PUT /rooms/{roomName}/theme/room-knock-page-background", "GET /insights/rooms", "GET /insights/room-sessions", "GET /insights/participants", "GET /insights/participant"];
        apiVersion: "v1";
        coverageArtifact: "docs/provider-coverage/whereby-full-api-2026-06-18.operations.json";
        documentedOperationCount: 27;
        documentedPathCount: 20;
        functionCatalogArtifact: "docs/provider-coverage/whereby-full-api-2026-06-18.functions.json";
        functionCatalogChecksumSha256: "d33fa387bc6cd105db3e21b743e68102d483b7e3dacd0b4c1bedd85be5bc07ef";
        generatedFunctionCount: 27;
        implementedOperationCount: 27;
        operationCatalogArtifact: "docs/provider-coverage/whereby-full-api-2026-06-18.operations.json";
        operationCatalogChecksumSha256: "690fac858b8041598c7297147e5635e227f86b1fd1545e047182839d5fd2803a";
        provider: "whereby-rest";
        sourceChecksumSha256: "3d9aec0774ff42f149cfc67e94ae9b70c617957e278a5e89920807274d8cd77d";
        unimplementedOperationCount: 0;
        verifiedAt: "2026-06-21";
     };
     sdkViability: {
        checkedAt: "2026-06-21";
        decision: "no-official-maintained-server-rest-sdk-found";
        rejectedSdkPackages: readonly [{
           packageName: "@whereby.com/browser-sdk";
           reason: "Official browser SDK for custom video UI, not a server REST API client.";
         }, {
           packageName: "@whereby.com/core";
           reason: "Official media/core SDK requiring browser or WebRTC polyfills, not a REST client.";
         }, {
           packageName: "@whereby.com/assistant-sdk";
           reason: "Official Node assistant/media SDK with beta/plan constraints, not REST resource management.";
        }];
     };
  };
  name: "Whereby Embedded";
  operations: readonly [{
     alias: "video.meeting.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
     sideEffect: true;
   }, {
     alias: "video.meeting.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
   }, {
     alias: "video.meeting.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
   }, {
     alias: "video.meeting.delete";
     capability: "delete-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
     sideEffect: true;
   }, {
     alias: "whereby.room-theme.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     extension: true;
     providerObject: "wherebyRoomTheme";
     sideEffect: true;
   }, {
     alias: "whereby.rest.request";
     capability: "read-provider-object";
     extension: true;
     metadata: {
        supportSliceEscapeHatch: true;
     };
     providerObject: "wherebyRestOperation";
   }, {
     alias: "whereby.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "wherebyWebhookEvent";
  }];
  packageName: "@cognidesk/integration-video-whereby";
  privacyNotes: readonly ["Whereby meeting URLs, host URLs, viewer URLs, room names, session IDs, participant identifiers, display names, metadata, external IDs, recording metadata, and transcription metadata can contain customer or support data.", "Whereby API keys and webhook signing secrets stay server-side and are represented in Studio only as readiness metadata.", "Consent for video, recording, transcription, streaming, assistant usage, outbound scheduling, retention, and deletion remains SDK-user-owned configuration."];
  provider: "whereby";
  trustLevel: "official";
}, WherebyVideoIntegrationContext, {
  video.meeting.create: (input, context) => Promise<WherebyMeetingResource>;
  video.meeting.delete: (input, context) => Promise<Record<string, never>>;
  video.meeting.list: (input, context) => Promise<WherebyListMeetingsResponse>;
  video.meeting.read: (input, context) => Promise<WherebyMeetingResource>;
  whereby.rest.request: <OperationKey>(input, context) => Promise<WherebyFullApiOperationResponseMap[OperationKey]>;
  whereby.room-theme.update: (input, context) => Promise<Record<string, never>>;
  whereby.webhook.parse: (input) => Promise<WherebySignedWebhookRequest>;
}>;
```

***

### wherebyVideoOperationHandlers

```ts
const wherebyVideoOperationHandlers: {
  video.meeting.create: (input, context) => Promise<WherebyMeetingResource>;
  video.meeting.delete: (input, context) => Promise<Record<string, never>>;
  video.meeting.list: (input, context) => Promise<WherebyListMeetingsResponse>;
  video.meeting.read: (input, context) => Promise<WherebyMeetingResource>;
  whereby.rest.request: <OperationKey>(input, context) => Promise<WherebyFullApiOperationResponseMap[OperationKey]>;
  whereby.room-theme.update: (input, context) => Promise<Record<string, never>>;
  whereby.webhook.parse: (input) => Promise<WherebySignedWebhookRequest>;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-videomeetingcreate"></a> `video.meeting.create()` | (`input`, `context`) => `Promise`\<[`WherebyMeetingResource`](#wherebymeetingresource)\> |
| <a id="property-videomeetingdelete"></a> `video.meeting.delete()` | (`input`, `context`) => `Promise`\<`Record`\<`string`, `never`\>\> |
| <a id="property-videomeetinglist"></a> `video.meeting.list()` | (`input`, `context`) => `Promise`\<[`WherebyListMeetingsResponse`](#wherebylistmeetingsresponse)\> |
| <a id="property-videomeetingread"></a> `video.meeting.read()` | (`input`, `context`) => `Promise`\<[`WherebyMeetingResource`](#wherebymeetingresource)\> |
| <a id="property-wherebyrestrequest"></a> `whereby.rest.request()` | \<`OperationKey`\>(`input`, `context`) => `Promise`\<[`WherebyFullApiOperationResponseMap`](#wherebyfullapioperationresponsemap)\[`OperationKey`\]\> |
| <a id="property-wherebyroom-themeupdate"></a> `whereby.room-theme.update()` | (`input`, `context`) => `Promise`\<`Record`\<`string`, `never`\>\> |
| <a id="property-wherebywebhookparse"></a> `whereby.webhook.parse()` | (`input`) => `Promise`\<[`WherebySignedWebhookRequest`](#wherebysignedwebhookrequest)\> |

## Functions

### createWherebyFullApiGeneratedClient()

```ts
function createWherebyFullApiGeneratedClient(callOperation): WherebyFullApiGeneratedClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callOperation` | [`WherebyGeneratedOperationCaller`](#wherebygeneratedoperationcaller) |

#### Returns

[`WherebyFullApiGeneratedClient`](#wherebyfullapigeneratedclient)

***

### createWherebyVideoClient()

```ts
function createWherebyVideoClient(options): WherebyVideoClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WherebyVideoClientOptions`](#wherebyvideoclientoptions) |

#### Returns

[`WherebyVideoClient`](#wherebyvideoclient)

***

### createWherebyVideoLiveChecks()

```ts
function createWherebyVideoLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        hasCursor: boolean;
        resultCount: number;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`WherebyLiveCheckOptions`](#wherebylivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `hasCursor`: `boolean`;
        `resultCount`: `number`;
     \};
  \}\>;
\}[]

***

### parseWherebySignatureHeader()

```ts
function parseWherebySignatureHeader(header): {
  signature: string;
  timestamp: string;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `header` | `string` |

#### Returns

```ts
{
  signature: string;
  timestamp: string;
}
```

| Name | Type |
| ------ | ------ |
| `signature` | `string` |
| `timestamp` | `string` |

***

### parseWherebyWebhookRequest()

```ts
function parseWherebyWebhookRequest(request, options?): Promise<WherebySignedWebhookRequest>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseWherebyWebhookRequestOptions`](#parsewherebywebhookrequestoptions) |

#### Returns

`Promise`\<[`WherebySignedWebhookRequest`](#wherebysignedwebhookrequest)\>

***

### validateWherebyWebhookSignature()

```ts
function validateWherebyWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateWherebyWebhookSignatureInput`](#validatewherebywebhooksignatureinput) |

#### Returns

`boolean`

***

### wherebyVideoCredentialStatuses()

```ts
function wherebyVideoCredentialStatuses(input): {
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
| `input` | [`WherebyCredentialStatusInput`](#wherebycredentialstatusinput) |

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
