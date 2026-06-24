# integrations/voice/twilio/dist

## Interfaces

### ParseTwilioVoiceWebhookOptions

#### Properties

##### authToken?

```ts
optional authToken?: string;
```

##### publicUrl?

```ts
optional publicUrl?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

***

### TwilioAccountResource

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### friendly\_name?

```ts
optional friendly_name?: string;
```

##### friendlyName?

```ts
optional friendlyName?: string;
```

##### sid

```ts
sid: string;
```

##### status?

```ts
optional status?: string;
```

***

### TwilioCallEndInput

#### Properties

##### status?

```ts
optional status?: TwilioCallUpdateStatus;
```

##### statusCallback?

```ts
optional statusCallback?: string;
```

##### statusCallbackMethod?

```ts
optional statusCallbackMethod?: "GET" | "POST";
```

***

### TwilioCallRedirectInput

#### Properties

##### fallbackMethod?

```ts
optional fallbackMethod?: "GET" | "POST";
```

##### fallbackUrl?

```ts
optional fallbackUrl?: string;
```

##### method?

```ts
optional method?: "GET" | "POST";
```

##### statusCallback?

```ts
optional statusCallback?: string;
```

##### statusCallbackMethod?

```ts
optional statusCallbackMethod?: "GET" | "POST";
```

##### twiml?

```ts
optional twiml?: string;
```

##### url?

```ts
optional url?: string;
```

***

### TwilioCallResource

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### account\_sid?

```ts
optional account_sid?: string;
```

##### accountSid?

```ts
optional accountSid?: string;
```

##### direction?

```ts
optional direction?: string;
```

##### from?

```ts
optional from?: string;
```

##### sid

```ts
sid: string;
```

##### status?

```ts
optional status?: string;
```

##### to?

```ts
optional to?: string;
```

***

### TwilioCallUpdateInput

#### Properties

##### fallbackMethod?

```ts
optional fallbackMethod?: "GET" | "POST";
```

##### fallbackUrl?

```ts
optional fallbackUrl?: string;
```

##### method?

```ts
optional method?: "GET" | "POST";
```

##### status?

```ts
optional status?: TwilioCallUpdateStatus;
```

##### statusCallback?

```ts
optional statusCallback?: string;
```

##### statusCallbackMethod?

```ts
optional statusCallbackMethod?: "GET" | "POST";
```

##### timeLimitSeconds?

```ts
optional timeLimitSeconds?: number;
```

##### twiml?

```ts
optional twiml?: string;
```

##### url?

```ts
optional url?: string;
```

***

### TwilioMediaStreamTwiMLOptions

#### Properties

##### customParameters?

```ts
optional customParameters?: Record<string, string>;
```

##### mode?

```ts
optional mode?: "start" | "connect";
```

##### name?

```ts
optional name?: string;
```

##### statusCallback?

```ts
optional statusCallback?: string;
```

##### track?

```ts
optional track?: "inbound_track" | "outbound_track" | "both_tracks";
```

##### websocketUrl

```ts
websocketUrl: string;
```

***

### TwilioOutboundCallInput

#### Properties

##### applicationSid?

```ts
optional applicationSid?: string;
```

##### from

```ts
from: string;
```

##### machineDetection?

```ts
optional machineDetection?: "Enable" | "DetectMessageEnd";
```

##### metadata?

```ts
optional metadata?: Record<string, string>;
```

##### method?

```ts
optional method?: "GET" | "POST";
```

##### sendDigits?

```ts
optional sendDigits?: string;
```

##### statusCallback?

```ts
optional statusCallback?: string;
```

##### statusCallbackEvent?

```ts
optional statusCallbackEvent?: TwilioCallStatusCallbackEvent[];
```

##### statusCallbackMethod?

```ts
optional statusCallbackMethod?: "GET" | "POST";
```

##### timeoutSeconds?

```ts
optional timeoutSeconds?: number;
```

##### to

```ts
to: string;
```

##### twiml?

```ts
optional twiml?: string;
```

##### url?

```ts
optional url?: string;
```

***

### TwilioVoiceClient

#### Methods

##### createOutboundCall()

```ts
createOutboundCall(input): Promise<TwilioCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TwilioOutboundCallInput`](#twiliooutboundcallinput) |

###### Returns

`Promise`\<[`TwilioCallResource`](#twiliocallresource)\>

##### endCall()

```ts
endCall(callSid, input?): Promise<TwilioCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callSid` | `string` |
| `input?` | [`TwilioCallEndInput`](#twiliocallendinput) |

###### Returns

`Promise`\<[`TwilioCallResource`](#twiliocallresource)\>

##### fetchAccount()

```ts
fetchAccount(): Promise<TwilioAccountResource>;
```

###### Returns

`Promise`\<[`TwilioAccountResource`](#twilioaccountresource)\>

##### fetchCall()

```ts
fetchCall(callSid): Promise<TwilioCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callSid` | `string` |

###### Returns

`Promise`\<[`TwilioCallResource`](#twiliocallresource)\>

##### getRawClient()

```ts
getRawClient(): Promise<TwilioVoiceRawClient>;
```

###### Returns

`Promise`\<[`TwilioVoiceRawClient`](#twiliovoicerawclient)\>

##### redirectCall()

```ts
redirectCall(callSid, input): Promise<TwilioCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callSid` | `string` |
| `input` | [`TwilioCallRedirectInput`](#twiliocallredirectinput) |

###### Returns

`Promise`\<[`TwilioCallResource`](#twiliocallresource)\>

##### updateCall()

```ts
updateCall(callSid, input): Promise<TwilioCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callSid` | `string` |
| `input` | [`TwilioCallUpdateInput`](#twiliocallupdateinput) |

###### Returns

`Promise`\<[`TwilioCallResource`](#twiliocallresource)\>

***

### TwilioVoiceClientOptions

#### Properties

##### accountSid

```ts
accountSid: string;
```

##### apiKeySecret?

```ts
optional apiKeySecret?: string;
```

##### apiKeySid?

```ts
optional apiKeySid?: string;
```

##### authToken?

```ts
optional authToken?: string;
```

##### rawClient?

```ts
optional rawClient?: TwilioVoiceRawClient;
```

***

### TwilioVoiceRawClient

#### Properties

##### api?

```ts
optional api?: {
  accounts: {
     fetch: Promise<TwilioAccountResource>;
  };
};
```

###### accounts()

```ts
accounts(accountSid): {
  fetch: Promise<TwilioAccountResource>;
};
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `accountSid` | `string` |

###### Returns

```ts
{
  fetch: Promise<TwilioAccountResource>;
}
```

| Name | Type |
| ------ | ------ |
| `fetch()` | () => `Promise`\<[`TwilioAccountResource`](#twilioaccountresource)\> |

##### calls

```ts
calls: {
  create: Promise<TwilioCallResource>;
  get?: {
     fetch: Promise<TwilioCallResource>;
     update: Promise<TwilioCallResource>;
  };
};
```

###### create()

```ts
create(input): Promise<TwilioCallResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<[`TwilioCallResource`](#twiliocallresource)\>

###### get()?

```ts
optional get(sid): {
  fetch: Promise<TwilioCallResource>;
  update: Promise<TwilioCallResource>;
};
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sid` | `string` |

###### Returns

```ts
{
  fetch: Promise<TwilioCallResource>;
  update: Promise<TwilioCallResource>;
}
```

| Name | Type |
| ------ | ------ |
| `fetch()` | () => `Promise`\<[`TwilioCallResource`](#twiliocallresource)\> |
| `update()` | (`input`) => `Promise`\<[`TwilioCallResource`](#twiliocallresource)\> |

***

### TwilioVoiceWebhook

#### Properties

##### accountSid?

```ts
optional accountSid?: string;
```

##### callSid?

```ts
optional callSid?: string;
```

##### callStatus?

```ts
optional callStatus?: TwilioCallStatus;
```

##### direction?

```ts
optional direction?: string;
```

##### from?

```ts
optional from?: string;
```

##### raw

```ts
raw: Record<string, string>;
```

##### to?

```ts
optional to?: string;
```

## Type Aliases

### TwilioCallStatus

```ts
type TwilioCallStatus =
  | "queued"
  | "initiated"
  | "ringing"
  | "in-progress"
  | "completed"
  | "busy"
  | "failed"
  | "no-answer"
  | "canceled";
```

***

### TwilioCallStatusCallbackEvent

```ts
type TwilioCallStatusCallbackEvent = "initiated" | "ringing" | "answered" | "completed";
```

***

### TwilioCallUpdateStatus

```ts
type TwilioCallUpdateStatus = "canceled" | "completed";
```

## Variables

### twilioVoiceIntegration

```ts
const twilioVoiceIntegration: DefinedIntegration<{
  capabilities: {
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
  channelAudiences: ("customer-facing" | "mixed" | "internal-support")[];
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
     audience?: "customer-facing" | "mixed" | "internal-support";
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
     audiences: readonly ["customer-facing"];
     capability: "receive";
     description: "Accepts and parses Twilio Voice webhooks for SDK-user-owned Cognidesk voice handling.";
     exposesSensitiveData: true;
     label: "Receive voice webhooks";
     providerObjects: readonly [{
        kind: "twilioCall";
        label: "Twilio Call";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Creates outbound calls through the Twilio helper library.";
     exposesSensitiveData: true;
     label: "Create outbound calls";
     providerObjects: readonly [{
        kind: "twilioCall";
        label: "Twilio Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Builds TwiML for Cognidesk-owned voice websocket media streams while preserving Twilio track constraints.";
     label: "Media Stream TwiML";
     providerObjects: readonly [{
        kind: "twilioMediaStream";
        label: "Twilio Media Stream";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     description: "Redirects or ends active Twilio calls through the Call resource.";
     label: "Redirect or end calls";
     providerObjects: readonly [{
        kind: "twilioCall";
        label: "Twilio Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "twilio.webhook-signature";
     description: "Validates X-Twilio-Signature for form-encoded Twilio Voice webhooks.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Twilio webhooks";
     providerObjects: readonly [{
        kind: "twilioWebhook";
        label: "Twilio Webhook";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Twilio Node helper library";
        url: "https://www.npmjs.com/package/twilio";
      }, {
        label: "Twilio Programmable Voice API";
        url: "https://www.twilio.com/docs/voice/api";
      }, {
        label: "Twilio Call Resource";
        url: "https://www.twilio.com/docs/voice/api/call-resource";
      }, {
        label: "Twilio webhook security";
        url: "https://www.twilio.com/docs/usage/webhooks/webhooks-security";
     }];
     notes: readonly ["Implements normalized call-control, TwiML media stream, webhook, readiness, and raw Twilio helper-client access with the official Twilio Node helper library.", "Twilio Voice and Twilio SMS are separate Cognidesk category packages even though they use the same upstream helper library.", "Conferences, queues, recordings, transcription lifecycle, SIP trunks, Voice Insights, and ConversationRelay remain available only through raw Twilio client access or future normalized operations."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Twilio Account SID used by the helper library.";
     id: "twilio-account";
     label: "Twilio Account SID";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "Twilio Auth Token or API key credentials used for Voice REST calls.";
     id: "twilio-rest-api-credentials";
     label: "Twilio REST API credentials";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "Primary Twilio Auth Token used to validate X-Twilio-Signature webhook requests.";
     id: "twilio-webhook-auth-token";
     label: "Twilio webhook Auth Token";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "voice.twilio";
  limitations: readonly ["Live call readiness depends on the SDK user's Twilio account, voice-capable numbers, regions, webhooks, and account permissions."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        sdkPackage: "twilio";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "6.0.2";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "Twilio Programmable Voice";
  operations: readonly [{
     alias: "voice.call.answer";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive voice webhook";
     providerObject: "twilioCall";
     providerOperation: "parseWebhook";
   }, {
     alias: "voice.call.start";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Create outbound call";
     providerObject: "twilioCall";
     providerOperation: "createOutboundCall";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "voice.call.redirect";
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     label: "Redirect call";
     providerObject: "twilioCall";
     providerOperation: "redirectCall";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-twilio";
  privacyNotes: readonly ["Phone numbers, call metadata, webhook parameters, and Media Stream audio metadata are exchanged with Twilio.", "Twilio credentials stay server-side and are never issued to browsers by this package."];
  provider: "twilio";
  trustLevel: "official";
}, unknown, {
  voice.call.answer: (request, context) => Promise<TwilioVoiceWebhook>;
  voice.call.redirect: (input, context) => Promise<TwilioCallResource>;
  voice.call.start: (input, context) => Promise<TwilioCallResource>;
}>;
```

## Functions

### createTwilioMediaStreamTwiML()

```ts
function createTwilioMediaStreamTwiML(options): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TwilioMediaStreamTwiMLOptions`](#twiliomediastreamtwimloptions) |

#### Returns

`string`

***

### createTwilioVoiceClient()

```ts
function createTwilioVoiceClient(options): TwilioVoiceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TwilioVoiceClientOptions`](#twiliovoiceclientoptions) |

#### Returns

[`TwilioVoiceClient`](#twiliovoiceclient)

***

### parseTwilioVoiceWebhook()

```ts
function parseTwilioVoiceWebhook(request, options?): Promise<TwilioVoiceWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseTwilioVoiceWebhookOptions`](#parsetwiliovoicewebhookoptions) |

#### Returns

`Promise`\<[`TwilioVoiceWebhook`](#twiliovoicewebhook)\>

***

### twilioVoiceCredentialStatuses()

```ts
function twilioVoiceCredentialStatuses(input): {
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
| `input` | \{ `accountSid?`: `string`; `apiKeySecret?`: `string`; `apiKeySid?`: `string`; `authToken?`: `string`; `webhookAuthToken?`: `string`; \} |
| `input.accountSid?` | `string` |
| `input.apiKeySecret?` | `string` |
| `input.apiKeySid?` | `string` |
| `input.authToken?` | `string` |
| `input.webhookAuthToken?` | `string` |

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

### validateTwilioRequestSignature()

```ts
function validateTwilioRequestSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `authToken`: `string`; `params`: `Record`\<`string`, `string`\>; `signature`: `string`; `url`: `string`; \} |
| `input.authToken` | `string` |
| `input.params` | `Record`\<`string`, `string`\> |
| `input.signature` | `string` |
| `input.url` | `string` |

#### Returns

`boolean`

## References

### twilioVoiceProviderManifest

Re-exports [twilioVoiceProviderManifest](dist/manifest.md#twiliovoiceprovidermanifest)
