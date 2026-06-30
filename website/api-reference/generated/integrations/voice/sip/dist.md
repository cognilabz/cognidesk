# integrations/voice/sip/dist

## Interfaces

### DrachtioSrfSipGateway

#### Extends

- [`SipStackGateway`](#sipstackgateway)

#### Properties

##### rawClient

```ts
readonly rawClient: {
  dialogs: Map<string, Dialog>;
  sdkPackage: "drachtio-srf";
  srf: Srf;
};
```

###### dialogs

```ts
dialogs: Map<string, Dialog>;
```

###### sdkPackage

```ts
sdkPackage: "drachtio-srf";
```

###### srf

```ts
srf: Srf;
```

#### Methods

##### answerCall()?

```ts
optional answerCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipAnswerCallInput`](#sipanswercallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`answerCall`](#answercall-1)

##### checkReadiness()?

```ts
optional checkReadiness(context):
  | SipReadinessResult
| Promise<SipReadinessResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`SipStackReadinessContext`](#sipstackreadinesscontext) |

###### Returns

  \| [`SipReadinessResult`](#sipreadinessresult)
  \| `Promise`\<[`SipReadinessResult`](#sipreadinessresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`checkReadiness`](#checkreadiness-1)

##### createOutboundCall()?

```ts
optional createOutboundCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipOutboundCallInput`](#sipoutboundcallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`createOutboundCall`](#createoutboundcall-1)

##### hangupCall()?

```ts
optional hangupCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipHangupCallInput`](#siphangupcallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`hangupCall`](#hangupcall-1)

##### rejectCall()?

```ts
optional rejectCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRejectCallInput`](#siprejectcallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`rejectCall`](#rejectcall-1)

##### sendDtmf()?

```ts
optional sendDtmf(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipDtmfInput`](#sipdtmfinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`sendDtmf`](#senddtmf-1)

##### startRecording()?

```ts
optional startRecording(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRecordingControlInput`](#siprecordingcontrolinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`startRecording`](#startrecording-1)

##### stopRecording()?

```ts
optional stopRecording(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRecordingControlInput`](#siprecordingcontrolinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`stopRecording`](#stoprecording-1)

##### transferCall()?

```ts
optional transferCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipTransferCallInput`](#siptransfercallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`transferCall`](#transfercall-1)

##### updateMediaSession()?

```ts
optional updateMediaSession(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipMediaSessionUpdateInput`](#sipmediasessionupdateinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

###### Inherited from

[`SipStackGateway`](#sipstackgateway).[`updateMediaSession`](#updatemediasession-1)

***

### DrachtioSrfSipStackGatewayOptions

#### Properties

##### connect?

```ts
optional connect?: any;
```

##### dialogs?

```ts
optional dialogs?: Map<string, Dialog>;
```

##### srf?

```ts
optional srf?: any;
```

***

### ParseSipVoiceWebhookOperationInput

#### Properties

##### options?

```ts
optional options?: ParseSipVoiceWebhookOptions;
```

##### request

```ts
request: Request;
```

***

### ParseSipVoiceWebhookOptions

#### Properties

##### hmacSecret?

```ts
optional hmacSecret?: string;
```

##### requireSharedSecret?

```ts
optional requireSharedSecret?: boolean;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### sharedSecret?

```ts
optional sharedSecret?: string;
```

##### sharedSecretHeader?

```ts
optional sharedSecretHeader?: string;
```

##### signatureAlgorithm?

```ts
optional signatureAlgorithm?: "sha256" | "sha1" | "sha512";
```

##### signatureHeader?

```ts
optional signatureHeader?: string;
```

##### timestampHeader?

```ts
optional timestampHeader?: string;
```

***

### SipAddress

#### Properties

##### displayName?

```ts
optional displayName?: string;
```

##### uri

```ts
uri: string;
```

***

### SipAnswerCallInput

#### Extends

- [`SipCallReference`](#sipcallreference).[`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### answer?

```ts
optional answer?: SipSessionDescription;
```

##### callId

```ts
callId: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`callId`](#callid-2)

##### dialogId?

```ts
optional dialogId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`dialogId`](#dialogid-2)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`providerCallId`](#providercallid-2)

***

### SipCallControlHeaders

#### Extended by

- [`SipAnswerCallInput`](#sipanswercallinput)
- [`SipDtmfInput`](#sipdtmfinput)
- [`SipHangupCallInput`](#siphangupcallinput)
- [`SipMediaSessionUpdateInput`](#sipmediasessionupdateinput)
- [`SipOutboundCallInput`](#sipoutboundcallinput)
- [`SipRecordingControlInput`](#siprecordingcontrolinput)
- [`SipRejectCallInput`](#siprejectcallinput)
- [`SipTransferCallInput`](#siptransfercallinput)

#### Properties

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

***

### SipCallControlResult

#### Properties

##### callId

```ts
callId: string;
```

##### dialogId?

```ts
optional dialogId?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### localDescription?

```ts
optional localDescription?: SipSessionDescription;
```

##### providerCallId?

```ts
optional providerCallId?: string;
```

##### raw?

```ts
optional raw?: unknown;
```

##### remoteDescription?

```ts
optional remoteDescription?: SipSessionDescription;
```

##### state?

```ts
optional state?: SipCallState;
```

***

### SipCallReference

#### Extended by

- [`SipAnswerCallInput`](#sipanswercallinput)
- [`SipDtmfInput`](#sipdtmfinput)
- [`SipHangupCallInput`](#siphangupcallinput)
- [`SipMediaSessionUpdateInput`](#sipmediasessionupdateinput)
- [`SipRecordingControlInput`](#siprecordingcontrolinput)
- [`SipRejectCallInput`](#siprejectcallinput)
- [`SipTransferCallInput`](#siptransfercallinput)

#### Properties

##### callId

```ts
callId: string;
```

##### dialogId?

```ts
optional dialogId?: string;
```

##### providerCallId?

```ts
optional providerCallId?: string;
```

***

### SipCallStatusWebhookEvent

#### Extends

- `Omit`\<[`SipWebhookBaseEvent`](#sipwebhookbaseevent), `"type"`\>

#### Properties

##### callId?

```ts
optional callId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`callId`](#callid-13)

##### direction?

```ts
optional direction?: SipCallDirection;
```

##### from?

```ts
optional from?: string;
```

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`occurredAt`](#occurredat-4)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`providerCallId`](#providercallid-13)

##### raw

```ts
raw: SipVoiceProviderResponse;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`raw`](#raw-5)

##### reason?

```ts
optional reason?: string;
```

##### sdp?

```ts
optional sdp?: string;
```

##### status

```ts
status: SipCallState;
```

##### to?

```ts
optional to?: string;
```

##### type

```ts
type: "call.status";
```

***

### SipCallTransferWebhookEvent

#### Extends

- `Omit`\<[`SipWebhookBaseEvent`](#sipwebhookbaseevent), `"type"`\>

#### Properties

##### callId?

```ts
optional callId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`callId`](#callid-13)

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`occurredAt`](#occurredat-4)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`providerCallId`](#providercallid-13)

##### raw

```ts
raw: SipVoiceProviderResponse;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`raw`](#raw-5)

##### reason?

```ts
optional reason?: string;
```

##### target?

```ts
optional target?: string;
```

##### transferStatus

```ts
transferStatus: SipTransferStatus;
```

##### type

```ts
type: "call.transfer";
```

***

### SipCredentialStatusInput

#### Properties

##### authPassword?

```ts
optional authPassword?: string;
```

##### authUsername?

```ts
optional authUsername?: string;
```

##### domain?

```ts
optional domain?: string;
```

##### mediaEncryption?

```ts
optional mediaEncryption?: SipMediaEncryption;
```

##### outboundProxyUri?

```ts
optional outboundProxyUri?: string;
```

##### proxyUri?

```ts
optional proxyUri?: string;
```

##### registrarUri?

```ts
optional registrarUri?: string;
```

##### srtpEnabled?

```ts
optional srtpEnabled?: boolean;
```

##### tlsEnabled?

```ts
optional tlsEnabled?: boolean;
```

##### webhookCallbackUrl?

```ts
optional webhookCallbackUrl?: string;
```

##### webhookHmacSecret?

```ts
optional webhookHmacSecret?: string;
```

##### webhookSharedSecret?

```ts
optional webhookSharedSecret?: string;
```

***

### SipDtmfInput

#### Extends

- [`SipCallReference`](#sipcallreference).[`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### callId

```ts
callId: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`callId`](#callid-2)

##### dialogId?

```ts
optional dialogId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`dialogId`](#dialogid-2)

##### digits

```ts
digits: string;
```

##### durationMs?

```ts
optional durationMs?: number;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`providerCallId`](#providercallid-2)

***

### SipHangupCallInput

#### Extends

- [`SipCallReference`](#sipcallreference).[`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### callId

```ts
callId: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`callId`](#callid-2)

##### dialogId?

```ts
optional dialogId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`dialogId`](#dialogid-2)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`providerCallId`](#providercallid-2)

##### reason?

```ts
optional reason?: string;
```

***

### SipLiveCheckOptions

#### Properties

##### config

```ts
config: SipVoiceConfig;
```

##### gateway?

```ts
optional gateway?: Pick<SipStackGateway, "checkReadiness">;
```

***

### SipMediaSessionUpdateInput

#### Extends

- [`SipCallReference`](#sipcallreference).[`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### answer?

```ts
optional answer?: SipSessionDescription;
```

##### callId

```ts
callId: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`callId`](#callid-2)

##### dialogId?

```ts
optional dialogId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`dialogId`](#dialogid-2)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### offer?

```ts
optional offer?: SipSessionDescription;
```

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`providerCallId`](#providercallid-2)

##### reason?

```ts
optional reason?: "resume" | "hold" | "renegotiate";
```

***

### SipOutboundCallInput

#### Extends

- [`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### callbackUrl?

```ts
optional callbackUrl?: string;
```

##### from

```ts
from: string | SipAddress;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### mediaEncryption?

```ts
optional mediaEncryption?: SipMediaEncryption;
```

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### offer?

```ts
optional offer?: SipSessionDescription;
```

##### to

```ts
to: string | SipAddress;
```

##### transport?

```ts
optional transport?: SipTransport;
```

***

### SipReadinessResult

#### Properties

##### details?

```ts
optional details?: SipVoiceJsonObject;
```

##### missing?

```ts
optional missing?: string[];
```

##### ok

```ts
ok: boolean;
```

##### proxyReachable?

```ts
optional proxyReachable?: boolean;
```

##### registered?

```ts
optional registered?: boolean;
```

##### registrarReachable?

```ts
optional registrarReachable?: boolean;
```

##### srtpReady?

```ts
optional srtpReady?: boolean;
```

##### tlsReady?

```ts
optional tlsReady?: boolean;
```

##### webhookReachable?

```ts
optional webhookReachable?: boolean;
```

***

### SipRecordingControlInput

#### Extends

- [`SipCallReference`](#sipcallreference).[`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### callId

```ts
callId: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`callId`](#callid-2)

##### dialogId?

```ts
optional dialogId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`dialogId`](#dialogid-2)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`providerCallId`](#providercallid-2)

##### recordingId?

```ts
optional recordingId?: string;
```

***

### SipRecordingWebhookEvent

#### Extends

- `Omit`\<[`SipWebhookBaseEvent`](#sipwebhookbaseevent), `"type"`\>

#### Properties

##### callId?

```ts
optional callId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`callId`](#callid-13)

##### durationSeconds?

```ts
optional durationSeconds?: number;
```

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`occurredAt`](#occurredat-4)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`providerCallId`](#providercallid-13)

##### raw

```ts
raw: SipVoiceProviderResponse;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`raw`](#raw-5)

##### recordingId?

```ts
optional recordingId?: string;
```

##### recordingStatus

```ts
recordingStatus: SipRecordingStatus;
```

##### recordingUrl?

```ts
optional recordingUrl?: string;
```

##### type

```ts
type: "recording";
```

***

### SipRejectCallInput

#### Extends

- [`SipCallReference`](#sipcallreference).[`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### callId

```ts
callId: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`callId`](#callid-2)

##### dialogId?

```ts
optional dialogId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`dialogId`](#dialogid-2)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`providerCallId`](#providercallid-2)

##### reason?

```ts
optional reason?: string;
```

##### statusCode?

```ts
optional statusCode?: number;
```

***

### SipSessionDescription

#### Properties

##### contentType?

```ts
optional contentType?: "application/sdp";
```

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

##### sdp

```ts
sdp: string;
```

##### type

```ts
type: "answer" | "offer";
```

***

### SipStackGateway

#### Extended by

- [`DrachtioSrfSipGateway`](#drachtiosrfsipgateway)

#### Methods

##### answerCall()?

```ts
optional answerCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipAnswerCallInput`](#sipanswercallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### checkReadiness()?

```ts
optional checkReadiness(context):
  | SipReadinessResult
| Promise<SipReadinessResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`SipStackReadinessContext`](#sipstackreadinesscontext) |

###### Returns

  \| [`SipReadinessResult`](#sipreadinessresult)
  \| `Promise`\<[`SipReadinessResult`](#sipreadinessresult)\>

##### createOutboundCall()?

```ts
optional createOutboundCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipOutboundCallInput`](#sipoutboundcallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### hangupCall()?

```ts
optional hangupCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipHangupCallInput`](#siphangupcallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### rejectCall()?

```ts
optional rejectCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRejectCallInput`](#siprejectcallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### sendDtmf()?

```ts
optional sendDtmf(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipDtmfInput`](#sipdtmfinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### startRecording()?

```ts
optional startRecording(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRecordingControlInput`](#siprecordingcontrolinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### stopRecording()?

```ts
optional stopRecording(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRecordingControlInput`](#siprecordingcontrolinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### transferCall()?

```ts
optional transferCall(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipTransferCallInput`](#siptransfercallinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### updateMediaSession()?

```ts
optional updateMediaSession(input, context):
  | SipCallControlResult
| Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipMediaSessionUpdateInput`](#sipmediasessionupdateinput) |
| `context` | \{ `config`: [`SipVoiceConfig`](#sipvoiceconfig); `signal?`: `AbortSignal`; \} |
| `context.config` | [`SipVoiceConfig`](#sipvoiceconfig) |
| `context.signal?` | `AbortSignal` |

###### Returns

  \| [`SipCallControlResult`](#sipcallcontrolresult)
  \| `Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

***

### SipStackReadinessContext

#### Properties

##### config

```ts
config: SipVoiceConfig;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### SipTranscriptionWebhookEvent

#### Extends

- `Omit`\<[`SipWebhookBaseEvent`](#sipwebhookbaseevent), `"type"`\>

#### Properties

##### callId?

```ts
optional callId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`callId`](#callid-13)

##### confidence?

```ts
optional confidence?: number;
```

##### isFinal?

```ts
optional isFinal?: boolean;
```

##### occurredAt?

```ts
optional occurredAt?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`occurredAt`](#occurredat-4)

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`providerCallId`](#providercallid-13)

##### raw

```ts
raw: SipVoiceProviderResponse;
```

###### Inherited from

[`SipWebhookBaseEvent`](#sipwebhookbaseevent).[`raw`](#raw-5)

##### speaker?

```ts
optional speaker?: "unknown" | "customer" | "agent" | "assistant";
```

##### text?

```ts
optional text?: string;
```

##### transcriptionId?

```ts
optional transcriptionId?: string;
```

##### transcriptionStatus

```ts
transcriptionStatus: SipTranscriptionStatus;
```

##### type

```ts
type: "transcription";
```

***

### SipTransferCallInput

#### Extends

- [`SipCallReference`](#sipcallreference).[`SipCallControlHeaders`](#sipcallcontrolheaders)

#### Properties

##### callId

```ts
callId: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`callId`](#callid-2)

##### dialogId?

```ts
optional dialogId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`dialogId`](#dialogid-2)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`headers`](#headers-1)

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

###### Inherited from

[`SipCallControlHeaders`](#sipcallcontrolheaders).[`metadata`](#metadata-1)

##### mode?

```ts
optional mode?: "blind" | "attended";
```

##### providerCallId?

```ts
optional providerCallId?: string;
```

###### Inherited from

[`SipCallReference`](#sipcallreference).[`providerCallId`](#providercallid-2)

##### replacesCallId?

```ts
optional replacesCallId?: string;
```

##### target

```ts
target: string | SipAddress;
```

***

### SipVoiceClient

#### Methods

##### answerCall()

```ts
answerCall(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipAnswerCallInput`](#sipanswercallinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### checkReadiness()

```ts
checkReadiness(context?): Promise<SipReadinessResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipReadinessResult`](#sipreadinessresult)\>

##### createOutboundCall()

```ts
createOutboundCall(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipOutboundCallInput`](#sipoutboundcallinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### hangupCall()

```ts
hangupCall(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipHangupCallInput`](#siphangupcallinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### rejectCall()

```ts
rejectCall(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRejectCallInput`](#siprejectcallinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### sendDtmf()

```ts
sendDtmf(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipDtmfInput`](#sipdtmfinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### startRecording()

```ts
startRecording(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRecordingControlInput`](#siprecordingcontrolinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### stopRecording()

```ts
stopRecording(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipRecordingControlInput`](#siprecordingcontrolinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### transferCall()

```ts
transferCall(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipTransferCallInput`](#siptransfercallinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

##### updateMediaSession()

```ts
updateMediaSession(input, context?): Promise<SipCallControlResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SipMediaSessionUpdateInput`](#sipmediasessionupdateinput) |
| `context?` | \{ `signal?`: `AbortSignal`; \} |
| `context.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`SipCallControlResult`](#sipcallcontrolresult)\>

***

### SipVoiceClientOptions

#### Properties

##### config

```ts
config: SipVoiceConfig;
```

##### gateway?

```ts
optional gateway?: SipStackGateway;
```

***

### SipVoiceConfig

#### Properties

##### authPassword

```ts
authPassword: string;
```

##### authUsername

```ts
authUsername: string;
```

##### domain

```ts
domain: string;
```

##### localAddressOfRecord?

```ts
optional localAddressOfRecord?: string;
```

##### mediaEncryption?

```ts
optional mediaEncryption?: SipMediaEncryption;
```

##### metadata?

```ts
optional metadata?: SipVoiceProviderExtensionFields;
```

##### outboundProxyUri?

```ts
optional outboundProxyUri?: string;
```

##### proxyUri?

```ts
optional proxyUri?: string;
```

##### registrarUri

```ts
registrarUri: string;
```

##### srtpEnabled?

```ts
optional srtpEnabled?: boolean;
```

##### tlsEnabled?

```ts
optional tlsEnabled?: boolean;
```

##### transport?

```ts
optional transport?: SipTransport;
```

##### userAgent?

```ts
optional userAgent?: string;
```

##### webhookCallbackUrl?

```ts
optional webhookCallbackUrl?: string;
```

##### webhookHmacSecret?

```ts
optional webhookHmacSecret?: string;
```

##### webhookSharedSecret?

```ts
optional webhookSharedSecret?: string;
```

***

### SipVoiceIntegrationOptions

#### Properties

##### config

```ts
config: SipVoiceConfig;
```

##### gateway

```ts
gateway: SipStackGateway;
```

***

### SipVoiceJsonObject

#### Extended by

- [`SipVoiceProviderExtensionFields`](#sipvoiceproviderextensionfields)
- [`SipVoiceProviderResponse`](#sipvoiceproviderresponse)

#### Indexable

```ts
[key: string]: SipVoiceProviderExtensionValue
```

***

### SipVoiceProviderExtensionFields

#### Extends

- [`SipVoiceJsonObject`](#sipvoicejsonobject)

#### Indexable

```ts
[key: string]: SipVoiceProviderExtensionValue
```

***

### SipVoiceProviderResponse

#### Extends

- [`SipVoiceJsonObject`](#sipvoicejsonobject)

#### Indexable

```ts
[key: string]: SipVoiceProviderExtensionValue
```

***

### SipWebhookBaseEvent

#### Properties

##### callId?

```ts
optional callId?: string;
```

##### occurredAt?

```ts
optional occurredAt?: string;
```

##### providerCallId?

```ts
optional providerCallId?: string;
```

##### raw

```ts
raw: SipVoiceProviderResponse;
```

##### type

```ts
type: "recording" | "transcription" | "call.status" | "call.transfer";
```

## Type Aliases

### SipCallDirection

```ts
type SipCallDirection = "inbound" | "outbound";
```

***

### SipCallState

```ts
type SipCallState =
  | "new"
  | "inviting"
  | "ringing"
  | "answered"
  | "early-media"
  | "held"
  | "transferring"
  | "completed"
  | "failed";
```

***

### SipMediaEncryption

```ts
type SipMediaEncryption = "none" | "srtp" | "dtls-srtp";
```

***

### SipRecordingStatus

```ts
type SipRecordingStatus = "started" | "paused" | "resumed" | "completed" | "failed";
```

***

### SipTranscriptionStatus

```ts
type SipTranscriptionStatus = "partial" | "completed" | "failed";
```

***

### SipTransferStatus

```ts
type SipTransferStatus = "requested" | "accepted" | "completed" | "failed" | "cancelled";
```

***

### SipTransport

```ts
type SipTransport = "udp" | "tcp" | "tls" | "ws" | "wss";
```

***

### SipVoiceJsonPrimitive

```ts
type SipVoiceJsonPrimitive = string | number | boolean | null;
```

***

### SipVoiceJsonValue

```ts
type SipVoiceJsonValue =
  | SipVoiceJsonPrimitive
  | SipVoiceJsonObject
  | readonly SipVoiceJsonValue[];
```

***

### SipVoiceProviderExtensionValue

```ts
type SipVoiceProviderExtensionValue = SipVoiceJsonValue | object | undefined;
```

***

### SipVoiceProviderPayload

```ts
type SipVoiceProviderPayload = SipVoiceJsonObject | object;
```

***

### SipVoiceProviderQuery

```ts
type SipVoiceProviderQuery = Record<string, SipVoiceProviderExtensionValue>;
```

***

### SipWebhookEvent

```ts
type SipWebhookEvent =
  | SipCallStatusWebhookEvent
  | SipCallTransferWebhookEvent
  | SipRecordingWebhookEvent
  | SipTranscriptionWebhookEvent;
```

## Functions

### buildSipAddress()

```ts
function buildSipAddress(address): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `string` \| [`SipAddress`](#sipaddress) |

#### Returns

`string`

***

### createDrachtioSipStackGateway()

```ts
function createDrachtioSipStackGateway(options?): DrachtioSrfSipGateway;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`DrachtioSrfSipStackGatewayOptions`](#drachtiosrfsipstackgatewayoptions) |

#### Returns

[`DrachtioSrfSipGateway`](#drachtiosrfsipgateway)

***

### createSipVoiceClient()

```ts
function createSipVoiceClient(options): SipVoiceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SipVoiceClientOptions`](#sipvoiceclientoptions) |

#### Returns

[`SipVoiceClient`](#sipvoiceclient)

***

### createSipVoiceIntegration()

```ts
function createSipVoiceIntegration(options): DefinedIntegration<never, unknown, never>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SipVoiceIntegrationOptions`](#sipvoiceintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<`never`, `unknown`, `never`\>

***

### createSipVoiceLiveChecks()

```ts
function createSipVoiceLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        proxyReachable: boolean;
        registered: boolean;
        registrarReachable: boolean;
        srtpReady: boolean;
        tlsReady: boolean;
        webhookReachable: boolean;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SipLiveCheckOptions`](#siplivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `proxyReachable`: `boolean`;
        `registered`: `boolean`;
        `registrarReachable`: `boolean`;
        `srtpReady`: `boolean`;
        `tlsReady`: `boolean`;
        `webhookReachable`: `boolean`;
     \};
  \}\>;
\}[]

***

### parseSipVoiceWebhook()

```ts
function parseSipVoiceWebhook(request, options?): Promise<SipWebhookEvent>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseSipVoiceWebhookOptions`](#parsesipvoicewebhookoptions) |

#### Returns

`Promise`\<[`SipWebhookEvent`](#sipwebhookevent)\>

***

### sipVoiceCredentialStatuses()

```ts
function sipVoiceCredentialStatuses(input): {
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
| `input` | [`SipCredentialStatusInput`](#sipcredentialstatusinput) |

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

### validateSipWebhookSignature()

```ts
function validateSipWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `algorithm?`: `"sha256"` \| `"sha1"` \| `"sha512"`; `body`: `string`; `secret`: `string`; `signature`: `string`; \} |
| `input.algorithm?` | `"sha256"` \| `"sha1"` \| `"sha512"` |
| `input.body` | `string` |
| `input.secret` | `string` |
| `input.signature` | `string` |

#### Returns

`boolean`

## References

### createDrachtioSrfSipStackGateway

Renames and re-exports [createDrachtioSipStackGateway](#createdrachtiosipstackgateway)

***

### sipVoiceProviderManifest

Re-exports [sipVoiceProviderManifest](dist/manifest.md#sipvoiceprovidermanifest)
