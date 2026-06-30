# integrations/sms/twilio/dist

## Interfaces

### ParseTwilioSmsWebhookOptions

#### Extended by

- [`ParseTwilioSmsWebhookRequestInput`](#parsetwiliosmswebhookrequestinput)

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

### ParseTwilioSmsWebhookRequestInput

#### Extends

- [`ParseTwilioSmsWebhookOptions`](#parsetwiliosmswebhookoptions)

#### Properties

##### authToken?

```ts
optional authToken?: string;
```

###### Inherited from

[`ParseTwilioSmsWebhookOptions`](#parsetwiliosmswebhookoptions).[`authToken`](#authtoken)

##### publicUrl?

```ts
optional publicUrl?: string;
```

###### Inherited from

[`ParseTwilioSmsWebhookOptions`](#parsetwiliosmswebhookoptions).[`publicUrl`](#publicurl)

##### request

```ts
request: Request;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

###### Inherited from

[`ParseTwilioSmsWebhookOptions`](#parsetwiliosmswebhookoptions).[`requireSignature`](#requiresignature)

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

##### sid?

```ts
optional sid?: string;
```

##### status?

```ts
optional status?: string;
```

***

### TwilioIncomingPhoneNumberResource

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### capabilities?

```ts
optional capabilities?: {
  fax?: boolean;
  mms?: boolean;
  sms?: boolean;
  voice?: boolean;
};
```

###### fax?

```ts
optional fax?: boolean;
```

###### mms?

```ts
optional mms?: boolean;
```

###### sms?

```ts
optional sms?: boolean;
```

###### voice?

```ts
optional voice?: boolean;
```

##### phone\_number?

```ts
optional phone_number?: string;
```

##### phoneNumber?

```ts
optional phoneNumber?: string;
```

##### sid?

```ts
optional sid?: string;
```

***

### TwilioListMessagesInput

#### Properties

##### dateSent?

```ts
optional dateSent?: string | Date;
```

##### dateSentAfter?

```ts
optional dateSentAfter?: string | Date;
```

##### dateSentBefore?

```ts
optional dateSentBefore?: string | Date;
```

##### from?

```ts
optional from?: string;
```

##### limit?

```ts
optional limit?: number;
```

##### pageSize?

```ts
optional pageSize?: number;
```

##### to?

```ts
optional to?: string;
```

***

### TwilioMessageListResource

#### Properties

##### messages

```ts
messages: TwilioMessageResource[];
```

***

### TwilioMessageResource

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

##### body?

```ts
optional body?: string;
```

##### direction?

```ts
optional direction?: string;
```

##### from?

```ts
optional from?: string;
```

##### messaging\_service\_sid?

```ts
optional messaging_service_sid?: string;
```

##### messagingServiceSid?

```ts
optional messagingServiceSid?: string;
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

### TwilioSendSmsInput

#### Properties

##### body?

```ts
optional body?: string;
```

##### contentSid?

```ts
optional contentSid?: string;
```

##### contentVariables?

```ts
optional contentVariables?: Record<string, unknown>;
```

##### from?

```ts
optional from?: string;
```

##### maxPrice?

```ts
optional maxPrice?: string | number;
```

##### mediaUrl?

```ts
optional mediaUrl?: string | string[];
```

##### messagingServiceSid?

```ts
optional messagingServiceSid?: string;
```

##### provideFeedback?

```ts
optional provideFeedback?: boolean;
```

##### scheduleType?

```ts
optional scheduleType?: "fixed";
```

##### sendAt?

```ts
optional sendAt?: string | Date;
```

##### shortenUrls?

```ts
optional shortenUrls?: boolean;
```

##### smartEncoded?

```ts
optional smartEncoded?: boolean;
```

##### statusCallback?

```ts
optional statusCallback?: string;
```

##### to

```ts
to: string;
```

##### validityPeriodSeconds?

```ts
optional validityPeriodSeconds?: number;
```

***

### TwilioSmsClient

#### Methods

##### fetchAccount()

```ts
fetchAccount(): Promise<TwilioAccountResource>;
```

###### Returns

`Promise`\<[`TwilioAccountResource`](#twilioaccountresource)\>

##### fetchMessage()

```ts
fetchMessage(messageSid): Promise<TwilioMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageSid` | `string` |

###### Returns

`Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>

##### getRawClient()

```ts
getRawClient(): Promise<TwilioSmsRawClient>;
```

###### Returns

`Promise`\<[`TwilioSmsRawClient`](#twiliosmsrawclient)\>

##### ~~getSdkClient()~~

```ts
getSdkClient(): Promise<TwilioSmsRawClient>;
```

###### Returns

`Promise`\<[`TwilioSmsRawClient`](#twiliosmsrawclient)\>

###### Deprecated

Use getRawClient.

##### listIncomingPhoneNumbers()

```ts
listIncomingPhoneNumbers(input?): Promise<TwilioIncomingPhoneNumberResource[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | \{ `phoneNumber?`: `string`; \} |
| `input.phoneNumber?` | `string` |

###### Returns

`Promise`\<[`TwilioIncomingPhoneNumberResource`](#twilioincomingphonenumberresource)[]\>

##### listMessages()

```ts
listMessages(input?): Promise<TwilioMessageListResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`TwilioListMessagesInput`](#twiliolistmessagesinput) |

###### Returns

`Promise`\<[`TwilioMessageListResource`](#twiliomessagelistresource)\>

##### sendMessage()

```ts
sendMessage(input): Promise<TwilioMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`TwilioSendSmsInput`](#twiliosendsmsinput) |

###### Returns

`Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>

##### updateMessageStatus()

```ts
updateMessageStatus(messageSid, status): Promise<TwilioMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageSid` | `string` |
| `status` | [`TwilioMessageStatusUpdate`](#twiliomessagestatusupdate) |

###### Returns

`Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>

***

### TwilioSmsClientOptions

#### Extended by

- [`TwilioSmsIntegrationOptions`](#twiliosmsintegrationoptions)

#### Properties

##### accountSid

```ts
accountSid: string;
```

##### authToken

```ts
authToken: string;
```

##### rawClient?

```ts
optional rawClient?: TwilioSmsRawClient;
```

##### ~~sdkClient?~~

```ts
optional sdkClient?: TwilioSmsRawClient;
```

###### Deprecated

Use rawClient.

***

### TwilioSmsIntegrationOptions

#### Extends

- [`TwilioSmsClientOptions`](#twiliosmsclientoptions)

#### Properties

##### accountSid

```ts
accountSid: string;
```

###### Inherited from

[`TwilioSmsClientOptions`](#twiliosmsclientoptions).[`accountSid`](#accountsid-1)

##### authToken

```ts
authToken: string;
```

###### Inherited from

[`TwilioSmsClientOptions`](#twiliosmsclientoptions).[`authToken`](#authtoken-2)

##### publicUrl?

```ts
optional publicUrl?: string;
```

##### rawClient?

```ts
optional rawClient?: TwilioSmsRawClient;
```

###### Inherited from

[`TwilioSmsClientOptions`](#twiliosmsclientoptions).[`rawClient`](#rawclient)

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### ~~sdkClient?~~

```ts
optional sdkClient?: TwilioSmsRawClient;
```

###### Deprecated

Use rawClient.

###### Inherited from

[`TwilioSmsClientOptions`](#twiliosmsclientoptions).[`sdkClient`](#sdkclient)

##### smsClient?

```ts
optional smsClient?: TwilioSmsClient;
```

##### webhookAuthToken?

```ts
optional webhookAuthToken?: string;
```

***

### TwilioSmsRawClient

#### Properties

##### api

```ts
api: {
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

##### incomingPhoneNumbers

```ts
incomingPhoneNumbers: {
  list: Promise<TwilioIncomingPhoneNumberResource[]>;
};
```

###### list()

```ts
list(input?): Promise<TwilioIncomingPhoneNumberResource[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | \{ \} |

###### Returns

`Promise`\<[`TwilioIncomingPhoneNumberResource`](#twilioincomingphonenumberresource)[]\>

##### messages

```ts
messages: {
  create: Promise<TwilioMessageResource>;
  get: {
     fetch: Promise<TwilioMessageResource>;
     update: Promise<TwilioMessageResource>;
  };
  list: Promise<TwilioMessageResource[]>;
};
```

###### create()

```ts
create(input): Promise<TwilioMessageResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `unknown` |

###### Returns

`Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>

###### get()

```ts
get(sid): {
  fetch: Promise<TwilioMessageResource>;
  update: Promise<TwilioMessageResource>;
};
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sid` | `string` |

###### Returns

```ts
{
  fetch: Promise<TwilioMessageResource>;
  update: Promise<TwilioMessageResource>;
}
```

| Name | Type |
| ------ | ------ |
| `fetch()` | () => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\> |
| `update()` | (`input`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\> |

###### list()

```ts
list(input?): Promise<TwilioMessageResource[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | \{ \} |

###### Returns

`Promise`\<[`TwilioMessageResource`](#twiliomessageresource)[]\>

***

### TwilioSmsWebhook

#### Properties

##### accountSid?

```ts
optional accountSid?: string;
```

##### body?

```ts
optional body?: string;
```

##### from?

```ts
optional from?: string;
```

##### media

```ts
media: {
  contentType?: string;
  url: string;
}[];
```

###### contentType?

```ts
optional contentType?: string;
```

###### url

```ts
url: string;
```

##### messageSid?

```ts
optional messageSid?: string;
```

##### messageStatus?

```ts
optional messageStatus?: string;
```

##### messagingServiceSid?

```ts
optional messagingServiceSid?: string;
```

##### numMedia?

```ts
optional numMedia?: number;
```

##### raw

```ts
raw: Record<string, string>;
```

##### smsSid?

```ts
optional smsSid?: string;
```

##### smsStatus?

```ts
optional smsStatus?: string;
```

##### to?

```ts
optional to?: string;
```

## Type Aliases

### TwilioMessageStatus

```ts
type TwilioMessageStatus =
  | "accepted"
  | "canceled"
  | "delivered"
  | "failed"
  | "partially_delivered"
  | "queued"
  | "read"
  | "received"
  | "receiving"
  | "scheduled"
  | "sending"
  | "sent"
  | "undelivered";
```

***

### TwilioMessageStatusUpdate

```ts
type TwilioMessageStatusUpdate = "canceled" | "cancelled";
```

***

### TwilioReadMessageInput

```ts
type TwilioReadMessageInput =
  | string
  | {
  messageSid: string;
};
```

***

### TwilioSmsSdkClient

```ts
type TwilioSmsSdkClient = TwilioSmsRawClient;
```

***

### TwilioSmsSdkIncomingPhoneNumberListOptions

```ts
type TwilioSmsSdkIncomingPhoneNumberListOptions = NonNullable<Parameters<TwilioSdkIncomingPhoneNumbers["list"]>[0]>;
```

***

### TwilioSmsSdkMessageCreateOptions

```ts
type TwilioSmsSdkMessageCreateOptions = Parameters<TwilioSdkMessages["create"]>[0];
```

***

### TwilioSmsSdkMessageListOptions

```ts
type TwilioSmsSdkMessageListOptions = NonNullable<Parameters<TwilioSdkMessages["list"]>[0]>;
```

***

### TwilioSmsSdkMessageUpdateOptions

```ts
type TwilioSmsSdkMessageUpdateOptions = Parameters<TwilioSdkMessageContext["update"]>[0];
```

## Variables

### createTwilioIntegration

```ts
const createTwilioIntegration: typeof createTwilioSmsIntegration;
```

***

### createTwilioIntegrationOperationHandlers

```ts
const createTwilioIntegrationOperationHandlers: typeof createTwilioSmsIntegrationOperationHandlers;
```

## Functions

### createTwilioSmsClient()

```ts
function createTwilioSmsClient(options): TwilioSmsClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TwilioSmsClientOptions`](#twiliosmsclientoptions) |

#### Returns

[`TwilioSmsClient`](#twiliosmsclient)

***

### createTwilioSmsIntegration()

```ts
function createTwilioSmsIntegration(options): {
  bindingReport: OperationBindingReport;
  client: TwilioSmsClient;
  getRawClient: () => Promise<TwilioSmsRawClient>;
  manifest: {
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
        scope:   | "support-workflow-subset"
           | "provider-api-subset"
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
        | "receive-only"
        | "send-only"
        | "inbound-only"
        | "outbound-only"
       | "bidirectional")[];
     id: string;
     limitations: string[];
     maintainers: {
        name: string;
        type: "community" | "official" | "unknown" | "partner";
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
     trustLevel: "community" | "official" | "verified" | "experimental";
   } & {
     capabilities: readonly [{
        audiences: readonly ["customer-facing"];
        capability: "receive";
        description: "Validates and parses Twilio Messaging webhooks for SDK-user-owned SMS/MMS handling.";
        exposesSensitiveData: true;
        label: "Receive inbound SMS/MMS";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Creates outbound SMS or MMS messages through the Twilio helper library.";
        exposesSensitiveData: true;
        label: "Send SMS/MMS messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "schedule";
        changesWorkflow: true;
        description: "Schedules outbound messages through Twilio's Message Scheduling fields when a Messaging Service SID, SendAt, and ScheduleType are supplied.";
        exposesSensitiveData: true;
        label: "Schedule SMS/MMS messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "read-provider-object";
        description: "Reads Twilio Message resources by Message SID.";
        exposesSensitiveData: true;
        label: "Read Twilio messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "search-provider-object";
        description: "Lists Twilio Message resources with SDK-user-supplied filters.";
        exposesSensitiveData: true;
        label: "List Twilio messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support"];
        capability: "twilio.webhook-signature";
        description: "Validates X-Twilio-Signature for form-encoded Twilio Messaging webhooks and status callbacks.";
        exposesSensitiveData: true;
        extension: true;
        label: "Validate Twilio webhooks";
        providerObjects: readonly [{
           kind: "twilioWebhook";
           label: "Twilio Webhook";
        }];
        requiresCredential: true;
     }];
     category: "sms";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "Twilio Node helper library";
           url: "https://www.npmjs.com/package/twilio";
         }, {
           label: "Twilio Messaging API overview";
           url: "https://www.twilio.com/docs/messaging/api";
         }, {
           label: "Twilio Message resource";
           url: "https://www.twilio.com/docs/messaging/api/message-resource";
         }, {
           label: "Twilio webhook security";
           url: "https://www.twilio.com/docs/usage/webhooks/webhooks-security";
        }];
        notes: readonly ["Implements normalized SMS/MMS send, read, list, cancel, readiness, webhook, and Twilio SDK client access with the official Twilio Node helper library.", "Twilio SMS and Twilio Voice are separate Cognidesk category packages even though they use the same upstream helper library.", "Messaging Services administration, Verify, Conversations, Content, Studio, toll-free/A2P compliance, pricing, and carrier policy remain available only through raw Twilio client access or future normalized operations."];
        scope: "provider-api-subset";
     };
     credentialRequirements: readonly [{
        description: "Server-side Twilio account credentials used for Messaging REST API calls and webhook signature validation.";
        id: "twilio-account";
        label: "Twilio Account SID and Auth Token";
        metadata: {
           scopeKind: "provider-permission";
        };
        required: true;
      }, {
        description: "A Twilio SMS/MMS-capable phone number or Messaging Service configured by the SDK user.";
        id: "twilio-sms-sender";
        label: "Twilio SMS/MMS-capable sender";
        metadata: {
           scopeKind: "internal-capability";
        };
        required: true;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "sms.twilio";
     limitations: readonly ["Live SMS readiness depends on the SDK user's Twilio account, SMS-capable sender, Messaging Service configuration, phone-number capabilities, regions, carrier registration, webhooks, and account permissions."];
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
        sdkClient: {
           coverage: "deprecated-raw-client-alias";
           export: "getSdkClient";
        };
     };
     name: "Twilio Programmable Messaging";
     operations: readonly [{
        alias: "sms.message.receive";
        audiences: readonly ["customer-facing"];
        capability: "receive";
        exposesSensitiveData: true;
        label: "Receive SMS";
        providerObject: "smsMessage";
        providerOperation: "parseWebhook";
      }, {
        alias: "sms.message.send";
        audiences: readonly ["customer-facing"];
        capability: "send";
        exposesSensitiveData: true;
        externallyVisible: true;
        label: "Send SMS";
        providerObject: "smsMessage";
        providerOperation: "sendMessage";
        requiresApproval: true;
        sideEffect: true;
      }, {
        alias: "sms.message.read";
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "read-provider-object";
        exposesSensitiveData: true;
        label: "Read SMS";
        providerObject: "smsMessage";
        providerOperation: "fetchMessage";
      }, {
        alias: "sms.message.search";
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "search-provider-object";
        exposesSensitiveData: true;
        label: "Search SMS";
        providerObject: "smsMessage";
        providerOperation: "listMessages";
     }];
     packageName: "@cognidesk/integration-sms-twilio";
     privacyNotes: readonly ["Phone numbers, message bodies, message metadata, webhook parameters, delivery status, and media URLs can contain customer data and are exchanged with Twilio.", "Twilio credentials stay server-side and are never issued to browsers by this package.", "Outbound SMS consent, opt-in/opt-out handling, quiet hours, campaign registration, content policy, retention, and regional compliance are SDK-user-owned responsibilities."];
     provider: "twilio";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "sms.message.receive"
     | "sms.message.send"
     | "sms.message.read"
    | "sms.message.search")[];
  operations: {
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  };
  getOperationHandler: {
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  }[Alias];
  requireOperationHandler: {
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TwilioSmsIntegrationOptions`](#twiliosmsintegrationoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  client: TwilioSmsClient;
  getRawClient: () => Promise<TwilioSmsRawClient>;
  manifest: {
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
        scope:   | "support-workflow-subset"
           | "provider-api-subset"
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
        | "receive-only"
        | "send-only"
        | "inbound-only"
        | "outbound-only"
       | "bidirectional")[];
     id: string;
     limitations: string[];
     maintainers: {
        name: string;
        type: "community" | "official" | "unknown" | "partner";
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
     trustLevel: "community" | "official" | "verified" | "experimental";
   } & {
     capabilities: readonly [{
        audiences: readonly ["customer-facing"];
        capability: "receive";
        description: "Validates and parses Twilio Messaging webhooks for SDK-user-owned SMS/MMS handling.";
        exposesSensitiveData: true;
        label: "Receive inbound SMS/MMS";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Creates outbound SMS or MMS messages through the Twilio helper library.";
        exposesSensitiveData: true;
        label: "Send SMS/MMS messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "schedule";
        changesWorkflow: true;
        description: "Schedules outbound messages through Twilio's Message Scheduling fields when a Messaging Service SID, SendAt, and ScheduleType are supplied.";
        exposesSensitiveData: true;
        label: "Schedule SMS/MMS messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "read-provider-object";
        description: "Reads Twilio Message resources by Message SID.";
        exposesSensitiveData: true;
        label: "Read Twilio messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "search-provider-object";
        description: "Lists Twilio Message resources with SDK-user-supplied filters.";
        exposesSensitiveData: true;
        label: "List Twilio messages";
        providerObjects: readonly [{
           kind: "twilioMessage";
           label: "Twilio Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support"];
        capability: "twilio.webhook-signature";
        description: "Validates X-Twilio-Signature for form-encoded Twilio Messaging webhooks and status callbacks.";
        exposesSensitiveData: true;
        extension: true;
        label: "Validate Twilio webhooks";
        providerObjects: readonly [{
           kind: "twilioWebhook";
           label: "Twilio Webhook";
        }];
        requiresCredential: true;
     }];
     category: "sms";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "Twilio Node helper library";
           url: "https://www.npmjs.com/package/twilio";
         }, {
           label: "Twilio Messaging API overview";
           url: "https://www.twilio.com/docs/messaging/api";
         }, {
           label: "Twilio Message resource";
           url: "https://www.twilio.com/docs/messaging/api/message-resource";
         }, {
           label: "Twilio webhook security";
           url: "https://www.twilio.com/docs/usage/webhooks/webhooks-security";
        }];
        notes: readonly ["Implements normalized SMS/MMS send, read, list, cancel, readiness, webhook, and Twilio SDK client access with the official Twilio Node helper library.", "Twilio SMS and Twilio Voice are separate Cognidesk category packages even though they use the same upstream helper library.", "Messaging Services administration, Verify, Conversations, Content, Studio, toll-free/A2P compliance, pricing, and carrier policy remain available only through raw Twilio client access or future normalized operations."];
        scope: "provider-api-subset";
     };
     credentialRequirements: readonly [{
        description: "Server-side Twilio account credentials used for Messaging REST API calls and webhook signature validation.";
        id: "twilio-account";
        label: "Twilio Account SID and Auth Token";
        metadata: {
           scopeKind: "provider-permission";
        };
        required: true;
      }, {
        description: "A Twilio SMS/MMS-capable phone number or Messaging Service configured by the SDK user.";
        id: "twilio-sms-sender";
        label: "Twilio SMS/MMS-capable sender";
        metadata: {
           scopeKind: "internal-capability";
        };
        required: true;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "sms.twilio";
     limitations: readonly ["Live SMS readiness depends on the SDK user's Twilio account, SMS-capable sender, Messaging Service configuration, phone-number capabilities, regions, carrier registration, webhooks, and account permissions."];
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
        sdkClient: {
           coverage: "deprecated-raw-client-alias";
           export: "getSdkClient";
        };
     };
     name: "Twilio Programmable Messaging";
     operations: readonly [{
        alias: "sms.message.receive";
        audiences: readonly ["customer-facing"];
        capability: "receive";
        exposesSensitiveData: true;
        label: "Receive SMS";
        providerObject: "smsMessage";
        providerOperation: "parseWebhook";
      }, {
        alias: "sms.message.send";
        audiences: readonly ["customer-facing"];
        capability: "send";
        exposesSensitiveData: true;
        externallyVisible: true;
        label: "Send SMS";
        providerObject: "smsMessage";
        providerOperation: "sendMessage";
        requiresApproval: true;
        sideEffect: true;
      }, {
        alias: "sms.message.read";
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "read-provider-object";
        exposesSensitiveData: true;
        label: "Read SMS";
        providerObject: "smsMessage";
        providerOperation: "fetchMessage";
      }, {
        alias: "sms.message.search";
        audiences: readonly ["customer-facing", "internal-support"];
        capability: "search-provider-object";
        exposesSensitiveData: true;
        label: "Search SMS";
        providerObject: "smsMessage";
        providerOperation: "listMessages";
     }];
     packageName: "@cognidesk/integration-sms-twilio";
     privacyNotes: readonly ["Phone numbers, message bodies, message metadata, webhook parameters, delivery status, and media URLs can contain customer data and are exchanged with Twilio.", "Twilio credentials stay server-side and are never issued to browsers by this package.", "Outbound SMS consent, opt-in/opt-out handling, quiet hours, campaign registration, content policy, retention, and regional compliance are SDK-user-owned responsibilities."];
     provider: "twilio";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "sms.message.receive"
     | "sms.message.send"
     | "sms.message.read"
    | "sms.message.search")[];
  operations: {
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  };
  getOperationHandler: {
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  }[Alias];
  requireOperationHandler: {
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
     sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
     sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
     sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `client` | [`TwilioSmsClient`](#twiliosmsclient) |
| `getRawClient()` | () => `Promise`\<[`TwilioSmsRawClient`](#twiliosmsrawclient)\> |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: readonly \[\{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Twilio Messaging webhooks for SDK-user-owned SMS/MMS handling."`; `exposesSensitiveData`: `true`; `label`: `"Receive inbound SMS/MMS"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Creates outbound SMS or MMS messages through the Twilio helper library."`; `exposesSensitiveData`: `true`; `label`: `"Send SMS/MMS messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"schedule"`; `changesWorkflow`: `true`; `description`: `"Schedules outbound messages through Twilio's Message Scheduling fields when a Messaging Service SID, SendAt, and ScheduleType are supplied."`; `exposesSensitiveData`: `true`; `label`: `"Schedule SMS/MMS messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Twilio Message resources by Message SID."`; `exposesSensitiveData`: `true`; `label`: `"Read Twilio messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists Twilio Message resources with SDK-user-supplied filters."`; `exposesSensitiveData`: `true`; `label`: `"List Twilio messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"twilio.webhook-signature"`; `description`: `"Validates X-Twilio-Signature for form-encoded Twilio Messaging webhooks and status callbacks."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Twilio webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"twilioWebhook"`; `label`: `"Twilio Webhook"`; \}\]; `requiresCredential`: `true`; \}\]; `category`: `"sms"`; `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `coverage`: \{ `evidence`: readonly \[\{ `label`: `"Twilio Node helper library"`; `url`: `"https://www.npmjs.com/package/twilio"`; \}, \{ `label`: `"Twilio Messaging API overview"`; `url`: `"https://www.twilio.com/docs/messaging/api"`; \}, \{ `label`: `"Twilio Message resource"`; `url`: `"https://www.twilio.com/docs/messaging/api/message-resource"`; \}, \{ `label`: `"Twilio webhook security"`; `url`: `"https://www.twilio.com/docs/usage/webhooks/webhooks-security"`; \}\]; `notes`: readonly \[`"Implements normalized SMS/MMS send, read, list, cancel, readiness, webhook, and Twilio SDK client access with the official Twilio Node helper library."`, `"Twilio SMS and Twilio Voice are separate Cognidesk category packages even though they use the same upstream helper library."`, `"Messaging Services administration, Verify, Conversations, Content, Studio, toll-free/A2P compliance, pricing, and carrier policy remain available only through raw Twilio client access or future normalized operations."`\]; `scope`: `"provider-api-subset"`; \}; `credentialRequirements`: readonly \[\{ `description`: `"Server-side Twilio account credentials used for Messaging REST API calls and webhook signature validation."`; `id`: `"twilio-account"`; `label`: `"Twilio Account SID and Auth Token"`; `metadata`: \{ `scopeKind`: `"provider-permission"`; \}; `required`: `true`; \}, \{ `description`: `"A Twilio SMS/MMS-capable phone number or Messaging Service configured by the SDK user."`; `id`: `"twilio-sms-sender"`; `label`: `"Twilio SMS/MMS-capable sender"`; `metadata`: \{ `scopeKind`: `"internal-capability"`; \}; `required`: `true`; \}\]; `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\]; `id`: `"sms.twilio"`; `limitations`: readonly \[`"Live SMS readiness depends on the SDK user's Twilio account, SMS-capable sender, Messaging Service configuration, phone-number capabilities, regions, carrier registration, webhooks, and account permissions."`\]; `maintainers`: readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `implementation`: \{ `sdkPackage`: `"twilio"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"6.0.2"`; \}; `rawClient`: \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \}; `sdkClient`: \{ `coverage`: `"deprecated-raw-client-alias"`; `export`: `"getSdkClient"`; \}; \}; `name`: `"Twilio Programmable Messaging"`; `operations`: readonly \[\{ `alias`: `"sms.message.receive"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"parseWebhook"`; \}, \{ `alias`: `"sms.message.send"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"sendMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sms.message.read"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"fetchMessage"`; \}, \{ `alias`: `"sms.message.search"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Search SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"listMessages"`; \}\]; `packageName`: `"@cognidesk/integration-sms-twilio"`; `privacyNotes`: readonly \[`"Phone numbers, message bodies, message metadata, webhook parameters, delivery status, and media URLs can contain customer data and are exchanged with Twilio."`, `"Twilio credentials stay server-side and are never issued to browsers by this package."`, `"Outbound SMS consent, opt-in/opt-out handling, quiet hours, campaign registration, content policy, retention, and regional compliance are SDK-user-owned responsibilities."`\]; `provider`: `"twilio"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | ( \| `"sms.message.receive"` \| `"sms.message.send"` \| `"sms.message.read"` \| `"sms.message.search"`)[] |
| `operations` | \{ `sms.message.read`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; `sms.message.receive`: (`input`, `_context`) => `Promise`\<[`TwilioSmsWebhook`](#twiliosmswebhook)\>; `sms.message.search`: (`input`, `_context`) => `Promise`\<[`TwilioMessageListResource`](#twiliomessagelistresource)\>; `sms.message.send`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; \} |
| `operations.sms.message.read()` | (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\> |
| `operations.sms.message.receive()` | (`input`, `_context`) => `Promise`\<[`TwilioSmsWebhook`](#twiliosmswebhook)\> |
| `operations.sms.message.search()` | (`input`, `_context`) => `Promise`\<[`TwilioMessageListResource`](#twiliomessagelistresource)\> |
| `operations.sms.message.send()` | (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\> |
| `getOperationHandler()` | (`alias`) => \{ `sms.message.read`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; `sms.message.receive`: (`input`, `_context`) => `Promise`\<[`TwilioSmsWebhook`](#twiliosmswebhook)\>; `sms.message.search`: (`input`, `_context`) => `Promise`\<[`TwilioMessageListResource`](#twiliomessagelistresource)\>; `sms.message.send`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `sms.message.read`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; `sms.message.receive`: (`input`, `_context`) => `Promise`\<[`TwilioSmsWebhook`](#twiliosmswebhook)\>; `sms.message.search`: (`input`, `_context`) => `Promise`\<[`TwilioMessageListResource`](#twiliomessagelistresource)\>; `sms.message.send`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `sms.message.read`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; `sms.message.receive`: (`input`, `_context`) => `Promise`\<[`TwilioSmsWebhook`](#twiliosmswebhook)\>; `sms.message.search`: (`input`, `_context`) => `Promise`\<[`TwilioMessageListResource`](#twiliomessagelistresource)\>; `sms.message.send`: (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\>; \}\[`Alias`\]\>\>\> |

***

### createTwilioSmsIntegrationOperationHandlers()

```ts
function createTwilioSmsIntegrationOperationHandlers(options): {
  sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
  sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
  sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
  sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TwilioSmsIntegrationOptions`](#twiliosmsintegrationoptions) |

#### Returns

```ts
{
  sms.message.read: (input, _context) => Promise<TwilioMessageResource>;
  sms.message.receive: (input, _context) => Promise<TwilioSmsWebhook>;
  sms.message.search: (input, _context) => Promise<TwilioMessageListResource>;
  sms.message.send: (input, _context) => Promise<TwilioMessageResource>;
}
```

| Name | Type |
| ------ | ------ |
| `sms.message.read()` | (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\> |
| `sms.message.receive()` | (`input`, `_context`) => `Promise`\<[`TwilioSmsWebhook`](#twiliosmswebhook)\> |
| `sms.message.search()` | (`input`, `_context`) => `Promise`\<[`TwilioMessageListResource`](#twiliomessagelistresource)\> |
| `sms.message.send()` | (`input`, `_context`) => `Promise`\<[`TwilioMessageResource`](#twiliomessageresource)\> |

***

### parseTwilioSmsWebhook()

```ts
function parseTwilioSmsWebhook(request, options?): Promise<TwilioSmsWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseTwilioSmsWebhookOptions`](#parsetwiliosmswebhookoptions) |

#### Returns

`Promise`\<[`TwilioSmsWebhook`](#twiliosmswebhook)\>

***

### twilioSmsCredentialStatuses()

```ts
function twilioSmsCredentialStatuses(input): {
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
| `input` | \{ `accountSid?`: `string`; `authToken?`: `string`; `fromNumber?`: `string`; `messagingServiceSid?`: `string`; \} |
| `input.accountSid?` | `string` |
| `input.authToken?` | `string` |
| `input.fromNumber?` | `string` |
| `input.messagingServiceSid?` | `string` |

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

### twilioSmsProviderManifest

Re-exports [twilioSmsProviderManifest](dist/manifest.md#twiliosmsprovidermanifest)
