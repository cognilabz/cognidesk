# integrations/cobrowsing/cognidesk/dist

## Interfaces

### CobrowsingConsentPolicy

#### Properties

##### evidenceRequired?

```ts
optional evidenceRequired?: boolean;
```

##### mode

```ts
mode: CobrowsingConsentMode;
```

##### promptId?

```ts
optional promptId?: string;
```

##### retentionDays?

```ts
optional retentionDays?: number;
```

***

### CobrowsingCredentialStatusInput

#### Properties

##### allowedOrigins?

```ts
optional allowedOrigins?: string[];
```

##### consentPolicyConfigured?

```ts
optional consentPolicyConfigured?: boolean;
```

##### recordingPolicyConfigured?

```ts
optional recordingPolicyConfigured?: boolean;
```

##### redactionPolicyConfigured?

```ts
optional redactionPolicyConfigured?: boolean;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### sessionStoreConfigured?

```ts
optional sessionStoreConfigured?: boolean;
```

##### sessionTokenSigningConfigured?

```ts
optional sessionTokenSigningConfigured?: boolean;
```

##### webhookVerifierConfigured?

```ts
optional webhookVerifierConfigured?: boolean;
```

***

### CobrowsingRecordingPolicy

#### Properties

##### mode

```ts
mode: CobrowsingRecordingMode;
```

##### requireSeparateConsent?

```ts
optional requireSeparateConsent?: boolean;
```

##### retentionDays?

```ts
optional retentionDays?: number;
```

***

### CobrowsingRedactionPolicy

#### Properties

##### enabled

```ts
enabled: boolean;
```

##### fieldNames?

```ts
optional fieldNames?: string[];
```

##### maskText?

```ts
optional maskText?: string;
```

##### selectors?

```ts
optional selectors?: string[];
```

***

### CobrowsingSecurityPolicy

#### Properties

##### allowedOrigins

```ts
allowedOrigins: string[];
```

##### consent

```ts
consent: CobrowsingConsentPolicy;
```

##### recording

```ts
recording: CobrowsingRecordingPolicy;
```

##### redaction

```ts
redaction: CobrowsingRedactionPolicy;
```

***

### CobrowsingSession

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### allowedOrigins

```ts
allowedOrigins: string[];
```

##### consent

```ts
consent: CobrowsingConsentPolicy;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### createdAt

```ts
createdAt: string;
```

##### customerId?

```ts
optional customerId?: string;
```

##### endedAt?

```ts
optional endedAt?: string;
```

##### endedBy?

```ts
optional endedBy?: string;
```

##### endReason?

```ts
optional endReason?: string;
```

##### id

```ts
id: string;
```

##### joinedAt?

```ts
optional joinedAt?: string;
```

##### metadata?

```ts
optional metadata?: CobrowsingSessionProviderExtensionFields;
```

##### origin

```ts
origin: string;
```

##### participants

```ts
participants: CobrowsingSessionParticipant[];
```

##### recording

```ts
recording: CobrowsingRecordingPolicy;
```

##### redaction

```ts
redaction: CobrowsingRedactionPolicy;
```

##### startedAt?

```ts
optional startedAt?: string;
```

##### status

```ts
status: CobrowsingSessionStatus;
```

##### updatedAt

```ts
updatedAt: string;
```

***

### CobrowsingSessionClientOptions

#### Properties

##### idFactory?

```ts
optional idFactory?: () => string;
```

###### Returns

`string`

##### now?

```ts
optional now?: () => Date;
```

###### Returns

`Date`

##### policy

```ts
policy: CobrowsingSecurityPolicy;
```

##### sessionTokenSharedSecret?

```ts
optional sessionTokenSharedSecret?: string;
```

##### store

```ts
store: CobrowsingSessionStore;
```

***

### CobrowsingSessionJsonObject

#### Extended by

- [`CobrowsingSessionProviderExtensionFields`](#cobrowsingsessionproviderextensionfields)
- [`CobrowsingSessionProviderResponse`](#cobrowsingsessionproviderresponse)

#### Indexable

```ts
[key: string]: CobrowsingSessionProviderExtensionValue
```

***

### CobrowsingSessionParticipant

#### Properties

##### displayName?

```ts
optional displayName?: string;
```

##### id

```ts
id: string;
```

##### joinedAt

```ts
joinedAt: string;
```

##### metadata?

```ts
optional metadata?: CobrowsingSessionProviderExtensionFields;
```

##### role

```ts
role: CobrowsingParticipantRole;
```

***

### CobrowsingSessionProviderExtensionFields

#### Extends

- [`CobrowsingSessionJsonObject`](#cobrowsingsessionjsonobject)

#### Indexable

```ts
[key: string]: CobrowsingSessionProviderExtensionValue
```

***

### CobrowsingSessionProviderResponse

#### Extends

- [`CobrowsingSessionJsonObject`](#cobrowsingsessionjsonobject)

#### Indexable

```ts
[key: string]: CobrowsingSessionProviderExtensionValue
```

***

### CobrowsingSessionStore

#### Methods

##### create()

```ts
create(session): Promise<CobrowsingSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `session` | [`CobrowsingSession`](#cobrowsingsession) |

###### Returns

`Promise`\<[`CobrowsingSession`](#cobrowsingsession)\>

##### get()

```ts
get(sessionId): Promise<CobrowsingSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sessionId` | `string` |

###### Returns

`Promise`\<[`CobrowsingSession`](#cobrowsingsession)\>

##### update()

```ts
update(session): Promise<CobrowsingSession>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `session` | [`CobrowsingSession`](#cobrowsingsession) |

###### Returns

`Promise`\<[`CobrowsingSession`](#cobrowsingsession)\>

***

### CobrowsingSessionTokenClaims

#### Properties

##### audience?

```ts
optional audience?: string;
```

##### expiresAt

```ts
expiresAt: number;
```

##### issuedAt

```ts
issuedAt: number;
```

##### metadata?

```ts
optional metadata?: CobrowsingSessionProviderExtensionFields;
```

##### origin

```ts
origin: string;
```

##### participantId?

```ts
optional participantId?: string;
```

##### role?

```ts
optional role?: CobrowsingParticipantRole;
```

##### sessionId

```ts
sessionId: string;
```

***

### CobrowsingSignedWebhookRequest

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### event

```ts
event: NormalizedCobrowsingEvent;
```

##### json

```ts
json: RawCobrowsingSessionEvent;
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

### CognideskCobrowsingIntegrationClient

#### Methods

##### createSession()

```ts
createSession(input): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CreateCobrowsingSessionInput`](#createcobrowsingsessioninput) |

###### Returns

`unknown`

##### endSession()

```ts
endSession(input): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EndCobrowsingSessionInput`](#endcobrowsingsessioninput) |

###### Returns

`unknown`

##### joinSession()

```ts
joinSession(input): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`JoinCobrowsingSessionInput`](#joincobrowsingsessioninput) |

###### Returns

`unknown`

***

### CognideskCobrowsingIntegrationOptions

#### Properties

##### client

```ts
client: CognideskCobrowsingIntegrationClient;
```

***

### CreateCobrowsingSessionInput

#### Properties

##### agentId?

```ts
optional agentId?: string;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### customerId?

```ts
optional customerId?: string;
```

##### id?

```ts
optional id?: string;
```

##### metadata?

```ts
optional metadata?: CobrowsingSessionProviderExtensionFields;
```

##### origin

```ts
origin: string;
```

##### policy?

```ts
optional policy?: Partial<CobrowsingSecurityPolicy>;
```

***

### CreateCobrowsingSessionTokenInput

#### Properties

##### claims

```ts
claims: Omit<CobrowsingSessionTokenClaims, "expiresAt" | "issuedAt"> & {
  expiresAt?: number;
  expiresInSeconds?: number;
  issuedAt?: number;
};
```

###### Type Declaration

###### expiresAt?

```ts
optional expiresAt?: number;
```

###### expiresInSeconds?

```ts
optional expiresInSeconds?: number;
```

###### issuedAt?

```ts
optional issuedAt?: number;
```

##### sharedSecret

```ts
sharedSecret: string;
```

***

### EndCobrowsingSessionInput

#### Properties

##### endedBy?

```ts
optional endedBy?: string;
```

##### reason?

```ts
optional reason?: string;
```

##### sessionId

```ts
sessionId: string;
```

***

### JoinCobrowsingSessionInput

#### Properties

##### displayName?

```ts
optional displayName?: string;
```

##### metadata?

```ts
optional metadata?: CobrowsingSessionProviderExtensionFields;
```

##### origin

```ts
origin: string;
```

##### participantId

```ts
participantId: string;
```

##### role

```ts
role: CobrowsingParticipantRole;
```

##### sessionId

```ts
sessionId: string;
```

##### sessionToken?

```ts
optional sessionToken?: string;
```

***

### NormalizedCobrowsingEvent

#### Properties

##### controlRequestId?

```ts
optional controlRequestId?: string;
```

##### data

```ts
data: CobrowsingSessionJsonObject;
```

##### id

```ts
id: string;
```

##### occurredAt

```ts
occurredAt: string;
```

##### origin?

```ts
optional origin?: string;
```

##### participantId?

```ts
optional participantId?: string;
```

##### raw

```ts
raw: RawCobrowsingSessionEvent;
```

##### rawType

```ts
rawType: string;
```

##### redactionRuleId?

```ts
optional redactionRuleId?: string;
```

##### role?

```ts
optional role?: CobrowsingParticipantRole;
```

##### sessionId

```ts
sessionId: string;
```

##### type

```ts
type: NormalizedCobrowsingEventType;
```

***

### ParseCobrowsingWebhookRequestOptions

#### Properties

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### sharedSecret?

```ts
optional sharedSecret?: string;
```

##### signatureHeaderName?

```ts
optional signatureHeaderName?: string;
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

***

### RawCobrowsingSessionEvent

#### Indexable

```ts
[key: string]: CobrowsingSessionProviderExtensionValue
```

#### Properties

##### createdAt?

```ts
optional createdAt?: string;
```

##### data?

```ts
optional data?: CobrowsingSessionJsonObject;
```

##### eventType?

```ts
optional eventType?: string;
```

##### id?

```ts
optional id?: string;
```

##### timestamp?

```ts
optional timestamp?: string;
```

##### type?

```ts
optional type?: string;
```

***

### ValidateCobrowsingSessionTokenInput

#### Properties

##### allowedOrigins?

```ts
optional allowedOrigins?: string[];
```

##### expectedAudience?

```ts
optional expectedAudience?: string;
```

##### expectedSessionId?

```ts
optional expectedSessionId?: string;
```

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### sharedSecret

```ts
sharedSecret: string;
```

##### token

```ts
token: string;
```

***

### ValidateCobrowsingSignedRequestInput

#### Properties

##### nowSeconds?

```ts
optional nowSeconds?: number;
```

##### rawBody

```ts
rawBody: string | Buffer<ArrayBufferLike>;
```

##### sharedSecret

```ts
sharedSecret: string;
```

##### signatureHeader

```ts
signatureHeader: string;
```

##### timestampToleranceSeconds?

```ts
optional timestampToleranceSeconds?: number;
```

## Type Aliases

### CobrowsingConsentMode

```ts
type CobrowsingConsentMode = "required" | "optional" | "not-required";
```

***

### CobrowsingParticipantRole

```ts
type CobrowsingParticipantRole = "customer" | "agent" | "observer";
```

***

### CobrowsingRecordingMode

```ts
type CobrowsingRecordingMode = "disabled" | "allowed" | "required";
```

***

### CobrowsingSessionJsonPrimitive

```ts
type CobrowsingSessionJsonPrimitive = string | number | boolean | null;
```

***

### CobrowsingSessionJsonValue

```ts
type CobrowsingSessionJsonValue =
  | CobrowsingSessionJsonPrimitive
  | CobrowsingSessionJsonObject
  | readonly CobrowsingSessionJsonValue[];
```

***

### CobrowsingSessionProviderExtensionValue

```ts
type CobrowsingSessionProviderExtensionValue =
  | CobrowsingSessionJsonValue
  | object
  | undefined;
```

***

### CobrowsingSessionProviderPayload

```ts
type CobrowsingSessionProviderPayload = CobrowsingSessionJsonObject | object;
```

***

### CobrowsingSessionProviderQuery

```ts
type CobrowsingSessionProviderQuery = Record<string, CobrowsingSessionProviderExtensionValue>;
```

***

### CobrowsingSessionStatus

```ts
type CobrowsingSessionStatus = "created" | "started" | "joined" | "ended";
```

***

### CobrowsingSessionTokenValidation

```ts
type CobrowsingSessionTokenValidation =
  | {
  claims: CobrowsingSessionTokenClaims;
  valid: true;
}
  | {
  reason: string;
  valid: false;
};
```

***

### NormalizedCobrowsingEventType

```ts
type NormalizedCobrowsingEventType =
  | "cobrowse.session.started"
  | "cobrowse.session.joined"
  | "cobrowse.session.ended"
  | "cobrowse.control.requested"
  | "cobrowse.redaction.applied"
  | "cobrowse.redaction.cleared";
```

## Functions

### cobrowsingCredentialStatuses()

```ts
function cobrowsingCredentialStatuses(input): {
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
| `input` | [`CobrowsingCredentialStatusInput`](#cobrowsingcredentialstatusinput) |

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

### createCobrowsingSessionClient()

```ts
function createCobrowsingSessionClient(options): {
  createSession: Promise<CobrowsingSession>;
  endSession: Promise<CobrowsingSession>;
  joinSession: Promise<CobrowsingSession>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CobrowsingSessionClientOptions`](#cobrowsingsessionclientoptions) |

#### Returns

```ts
{
  createSession: Promise<CobrowsingSession>;
  endSession: Promise<CobrowsingSession>;
  joinSession: Promise<CobrowsingSession>;
}
```

| Name | Type |
| ------ | ------ |
| `createSession()` | (`input`) => `Promise`\<[`CobrowsingSession`](#cobrowsingsession)\> |
| `endSession()` | (`input`) => `Promise`\<[`CobrowsingSession`](#cobrowsingsession)\> |
| `joinSession()` | (`input`) => `Promise`\<[`CobrowsingSession`](#cobrowsingsession)\> |

***

### createCobrowsingSessionToken()

```ts
function createCobrowsingSessionToken(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`CreateCobrowsingSessionTokenInput`](#createcobrowsingsessiontokeninput) |

#### Returns

`string`

***

### createCognideskCobrowsingIntegration()

```ts
function createCognideskCobrowsingIntegration(options): DefinedIntegration<never, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CognideskCobrowsingIntegrationOptions`](#cognideskcobrowsingintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<`never`, `unknown`, `never`\>

***

### createInMemoryCobrowsingSessionStore()

```ts
function createInMemoryCobrowsingSessionStore(initialSessions?): CobrowsingSessionStore;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initialSessions?` | [`CobrowsingSession`](#cobrowsingsession)[] |

#### Returns

[`CobrowsingSessionStore`](#cobrowsingsessionstore)

***

### normalizeCobrowsingEvent()

```ts
function normalizeCobrowsingEvent(input): NormalizedCobrowsingEvent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RawCobrowsingSessionEvent`](#rawcobrowsingsessionevent) |

#### Returns

[`NormalizedCobrowsingEvent`](#normalizedcobrowsingevent)

***

### parseCobrowsingSignatureHeader()

```ts
function parseCobrowsingSignatureHeader(header): {
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

### parseCobrowsingWebhookRequest()

```ts
function parseCobrowsingWebhookRequest(request, options?): Promise<CobrowsingSignedWebhookRequest>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseCobrowsingWebhookRequestOptions`](#parsecobrowsingwebhookrequestoptions) |

#### Returns

`Promise`\<[`CobrowsingSignedWebhookRequest`](#cobrowsingsignedwebhookrequest)\>

***

### signCobrowsingWebhook()

```ts
function signCobrowsingWebhook(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `body`: `string` \| `Buffer`\<`ArrayBufferLike`\>; `sharedSecret`: `string`; `timestamp`: `number`; \} |
| `input.body` | `string` \| `Buffer`\<`ArrayBufferLike`\> |
| `input.sharedSecret` | `string` |
| `input.timestamp` | `number` |

#### Returns

`string`

***

### validateCobrowsingSessionToken()

```ts
function validateCobrowsingSessionToken(input): CobrowsingSessionTokenValidation;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateCobrowsingSessionTokenInput`](#validatecobrowsingsessiontokeninput) |

#### Returns

[`CobrowsingSessionTokenValidation`](#cobrowsingsessiontokenvalidation)

***

### validateCobrowsingSignedRequest()

```ts
function validateCobrowsingSignedRequest(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateCobrowsingSignedRequestInput`](#validatecobrowsingsignedrequestinput) |

#### Returns

`boolean`

## References

### cognideskCobrowsingProviderManifest

Re-exports [cognideskCobrowsingProviderManifest](dist/manifest.md#cognideskcobrowsingprovidermanifest)
