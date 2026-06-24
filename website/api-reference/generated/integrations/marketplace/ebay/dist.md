# integrations/marketplace/ebay/dist

## Interfaces

### EbayAmount

#### Properties

##### currency?

```ts
optional currency?: string;
```

##### value?

```ts
optional value?: string;
```

***

### EbayBulkUpdateConversationsInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations

```ts
conversations: EbayMarketplaceJsonObject[];
```

***

### EbayConversation

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversationId?

```ts
optional conversationId?: string;
```

##### creationDate?

```ts
optional creationDate?: string;
```

##### lastModifiedDate?

```ts
optional lastModifiedDate?: string;
```

##### messages?

```ts
optional messages?: EbayMarketplaceJsonObject[];
```

##### status?

```ts
optional status?: string;
```

***

### EbayConversationsCollection

#### Extends

- [`EbayRestCollection`](#ebayrestcollection)\<[`EbayConversation`](#ebayconversation)\>

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: EbayConversation[];
```

###### Overrides

[`EbayRestCollection`](#ebayrestcollection).[`conversations`](#conversations-6)

##### href?

```ts
optional href?: string;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`href`](#href-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`limit`](#limit-9)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`offset`](#offset-8)

##### orders?

```ts
optional orders?: EbayConversation[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`orders`](#orders-5)

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: EbayConversation[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`paymentDisputeSummaries`](#paymentdisputesummaries-5)

##### total?

```ts
optional total?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`total`](#total-6)

***

### EbayConversationSearchInput

#### Properties

##### filter?

```ts
optional filter?: string | string[];
```

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

***

### EbayCreateSigningKeyInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### signingKeyCipher?

```ts
optional signingKeyCipher?: string;
```

***

### EbayCredentialStatusInput

#### Properties

##### accessTokenConfigured?

```ts
optional accessTokenConfigured?: boolean;
```

##### applicationAccessTokenConfigured?

```ts
optional applicationAccessTokenConfigured?: boolean;
```

##### clientIdConfigured?

```ts
optional clientIdConfigured?: boolean;
```

##### clientSecretConfigured?

```ts
optional clientSecretConfigured?: boolean;
```

##### digitalSignatureConfigured?

```ts
optional digitalSignatureConfigured?: boolean;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### marketplaceId?

```ts
optional marketplaceId?: string;
```

##### notificationVerificationTokenConfigured?

```ts
optional notificationVerificationTokenConfigured?: boolean;
```

##### requireDigitalSignatureForRefunds?

```ts
optional requireDigitalSignatureForRefunds?: boolean;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### sellerDomicileCountry?

```ts
optional sellerDomicileCountry?: string;
```

***

### EbayDigitalSignatureOptions

#### Properties

##### algorithm?

```ts
optional algorithm?: "rsa-v1_5-sha256";
```

##### created?

```ts
optional created?: number;
```

##### privateKey

```ts
privateKey: string;
```

##### publicKeyJwe

```ts
publicKeyJwe: string;
```

***

### EbayIssueRefundInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### comment?

```ts
optional comment?: string;
```

##### reasonForRefund

```ts
reasonForRefund: string;
```

##### refundItems?

```ts
optional refundItems?: EbayMarketplaceJsonObject[];
```

***

### EbayLiveCheckOptions

#### Extends

- [`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`accessToken`](#accesstoken-1)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### applicationAccessToken?

```ts
optional applicationAccessToken?: string;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`applicationAccessToken`](#applicationaccesstoken-1)

##### client?

```ts
optional client?: Pick<EbayMarketplaceClient, "getUser">;
```

##### digitalSignature?

```ts
optional digitalSignature?: EbayDigitalSignatureOptions;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`digitalSignature`](#digitalsignature-1)

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

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`fetch`](#fetch-1)

##### identityApiBaseUrl?

```ts
optional identityApiBaseUrl?: string;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`identityApiBaseUrl`](#identityapibaseurl-1)

##### keyManagementApiBaseUrl?

```ts
optional keyManagementApiBaseUrl?: string;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`keyManagementApiBaseUrl`](#keymanagementapibaseurl-1)

##### marketplaceId?

```ts
optional marketplaceId?: string;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`marketplaceId`](#marketplaceid-2)

##### requireDigitalSignatureForRefunds?

```ts
optional requireDigitalSignatureForRefunds?: boolean;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`requireDigitalSignatureForRefunds`](#requiredigitalsignatureforrefunds-2)

##### sellerDomicileCountry?

```ts
optional sellerDomicileCountry?: string;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`sellerDomicileCountry`](#sellerdomicilecountry-2)

##### signRequest?

```ts
optional signRequest?: EbayRequestSigner;
```

###### Inherited from

[`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions).[`signRequest`](#signrequest-1)

***

### EbayMarketplaceClient

#### Methods

##### acceptPaymentDispute()

```ts
acceptPaymentDispute(paymentDisputeId, input?): Promise<EbayPaymentDisputeActionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |
| `input?` | [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject) |

###### Returns

`Promise`\<[`EbayPaymentDisputeActionResponse`](#ebaypaymentdisputeactionresponse)\>

##### addPaymentDisputeEvidence()

```ts
addPaymentDisputeEvidence(paymentDisputeId, input): Promise<EbayPaymentDisputeActionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |
| `input` | [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject) |

###### Returns

`Promise`\<[`EbayPaymentDisputeActionResponse`](#ebaypaymentdisputeactionresponse)\>

##### bulkUpdateConversations()

```ts
bulkUpdateConversations(input): Promise<{
[providerField: string]: EbayMarketplaceJsonValue;
  conversations?: EbayConversation[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbayBulkUpdateConversationsInput`](#ebaybulkupdateconversationsinput) |

###### Returns

`Promise`\<\{
\[`providerField`: `string`\]: [`EbayMarketplaceJsonValue`](#ebaymarketplacejsonvalue);
  `conversations?`: [`EbayConversation`](#ebayconversation)[];
\}\>

##### contestPaymentDispute()

```ts
contestPaymentDispute(paymentDisputeId, input): Promise<EbayPaymentDisputeActionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |
| `input` | [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject) |

###### Returns

`Promise`\<[`EbayPaymentDisputeActionResponse`](#ebaypaymentdisputeactionresponse)\>

##### createNotificationDestination()

```ts
createNotificationDestination(input): Promise<EbayNotificationDestination>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbayNotificationDestinationInput`](#ebaynotificationdestinationinput) |

###### Returns

`Promise`\<[`EbayNotificationDestination`](#ebaynotificationdestination)\>

##### createNotificationSubscription()

```ts
createNotificationSubscription(input): Promise<EbayNotificationSubscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbayNotificationSubscriptionInput`](#ebaynotificationsubscriptioninput) |

###### Returns

`Promise`\<[`EbayNotificationSubscription`](#ebaynotificationsubscription)\>

##### createNotificationSubscriptionFilter()

```ts
createNotificationSubscriptionFilter(subscriptionId, input): Promise<EbayNotificationSubscriptionFilter>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `input` | [`EbayNotificationSubscriptionFilterInput`](#ebaynotificationsubscriptionfilterinput) |

###### Returns

`Promise`\<[`EbayNotificationSubscriptionFilter`](#ebaynotificationsubscriptionfilter)\>

##### createShippingFulfillment()

```ts
createShippingFulfillment(orderId, input): Promise<EbayShippingFulfillment>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `input` | [`EbayShippingFulfillmentInput`](#ebayshippingfulfillmentinput) |

###### Returns

`Promise`\<[`EbayShippingFulfillment`](#ebayshippingfulfillment)\>

##### createSigningKey()

```ts
createSigningKey(input?): Promise<EbaySigningKey>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EbayCreateSigningKeyInput`](#ebaycreatesigningkeyinput) |

###### Returns

`Promise`\<[`EbaySigningKey`](#ebaysigningkey)\>

##### deleteNotificationDestination()

```ts
deleteNotificationDestination(destinationId): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `destinationId` | `string` |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### deleteNotificationSubscription()

```ts
deleteNotificationSubscription(subscriptionId): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### deleteNotificationSubscriptionFilter()

```ts
deleteNotificationSubscriptionFilter(subscriptionId, filterId): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `filterId` | `string` |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### disableNotificationSubscription()

```ts
disableNotificationSubscription(subscriptionId): Promise<EbayNotificationSubscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`EbayNotificationSubscription`](#ebaynotificationsubscription)\>

##### enableNotificationSubscription()

```ts
enableNotificationSubscription(subscriptionId): Promise<EbayNotificationSubscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`EbayNotificationSubscription`](#ebaynotificationsubscription)\>

##### fetchPaymentDisputeEvidenceContent()

```ts
fetchPaymentDisputeEvidenceContent(paymentDisputeId): Promise<ArrayBuffer | EbayMarketplaceJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |

###### Returns

`Promise`\<`ArrayBuffer` \| [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject)\>

##### getConversation()

```ts
getConversation(conversationId): Promise<EbayConversation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `conversationId` | `string` |

###### Returns

`Promise`\<[`EbayConversation`](#ebayconversation)\>

##### getConversations()

```ts
getConversations(input?): Promise<EbayConversationsCollection>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EbayConversationSearchInput`](#ebayconversationsearchinput) |

###### Returns

`Promise`\<[`EbayConversationsCollection`](#ebayconversationscollection)\>

##### getNotificationConfig()

```ts
getNotificationConfig(): Promise<EbayNotificationConfig>;
```

###### Returns

`Promise`\<[`EbayNotificationConfig`](#ebaynotificationconfig)\>

##### getNotificationDestination()

```ts
getNotificationDestination(destinationId): Promise<EbayNotificationDestination>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `destinationId` | `string` |

###### Returns

`Promise`\<[`EbayNotificationDestination`](#ebaynotificationdestination)\>

##### getNotificationDestinations()

```ts
getNotificationDestinations(): Promise<EbayNotificationDestinationsCollection>;
```

###### Returns

`Promise`\<[`EbayNotificationDestinationsCollection`](#ebaynotificationdestinationscollection)\>

##### getNotificationPublicKey()

```ts
getNotificationPublicKey(publicKeyId): Promise<EbayNotificationPublicKey>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `publicKeyId` | `string` |

###### Returns

`Promise`\<[`EbayNotificationPublicKey`](#ebaynotificationpublickey)\>

##### getNotificationSubscription()

```ts
getNotificationSubscription(subscriptionId): Promise<EbayNotificationSubscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`EbayNotificationSubscription`](#ebaynotificationsubscription)\>

##### getNotificationSubscriptionFilter()

```ts
getNotificationSubscriptionFilter(subscriptionId, filterId): Promise<EbayNotificationSubscriptionFilter>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `filterId` | `string` |

###### Returns

`Promise`\<[`EbayNotificationSubscriptionFilter`](#ebaynotificationsubscriptionfilter)\>

##### getNotificationSubscriptions()

```ts
getNotificationSubscriptions(): Promise<EbayNotificationSubscriptionsCollection>;
```

###### Returns

`Promise`\<[`EbayNotificationSubscriptionsCollection`](#ebaynotificationsubscriptionscollection)\>

##### getNotificationTopic()

```ts
getNotificationTopic(topicId): Promise<{
[providerField: string]: EbayMarketplaceJsonValue;
  description?: string;
  supportedPayloadVersions?: string[];
  topicId?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `topicId` | `string` |

###### Returns

`Promise`\<\{
\[`providerField`: `string`\]: [`EbayMarketplaceJsonValue`](#ebaymarketplacejsonvalue);
  `description?`: `string`;
  `supportedPayloadVersions?`: `string`[];
  `topicId?`: `string`;
\}\>

##### getNotificationTopics()

```ts
getNotificationTopics(input?): Promise<EbayRestCollection<EbayMarketplaceJsonObject>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EbayNotificationTopicSearchInput`](#ebaynotificationtopicsearchinput) |

###### Returns

`Promise`\<[`EbayRestCollection`](#ebayrestcollection)\<[`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject)\>\>

##### getOrder()

```ts
getOrder(orderId): Promise<EbayOrder>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |

###### Returns

`Promise`\<[`EbayOrder`](#ebayorder)\>

##### getPaymentDispute()

```ts
getPaymentDispute(paymentDisputeId): Promise<EbayPaymentDispute>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |

###### Returns

`Promise`\<[`EbayPaymentDispute`](#ebaypaymentdispute)\>

##### getPaymentDisputeActivities()

```ts
getPaymentDisputeActivities(paymentDisputeId): Promise<EbayPaymentDisputeActivities>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |

###### Returns

`Promise`\<[`EbayPaymentDisputeActivities`](#ebaypaymentdisputeactivities)\>

##### getShippingFulfillment()

```ts
getShippingFulfillment(orderId, fulfillmentId): Promise<EbayShippingFulfillment>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `fulfillmentId` | `string` |

###### Returns

`Promise`\<[`EbayShippingFulfillment`](#ebayshippingfulfillment)\>

##### getShippingFulfillments()

```ts
getShippingFulfillments(orderId): Promise<EbayShippingFulfillmentsCollection>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |

###### Returns

`Promise`\<[`EbayShippingFulfillmentsCollection`](#ebayshippingfulfillmentscollection)\>

##### getSigningKey()

```ts
getSigningKey(signingKeyId): Promise<EbaySigningKey>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `signingKeyId` | `string` |

###### Returns

`Promise`\<[`EbaySigningKey`](#ebaysigningkey)\>

##### getSigningKeys()

```ts
getSigningKeys(): Promise<EbaySigningKeysCollection>;
```

###### Returns

`Promise`\<[`EbaySigningKeysCollection`](#ebaysigningkeyscollection)\>

##### getUser()

```ts
getUser(): Promise<EbayUser>;
```

###### Returns

`Promise`\<[`EbayUser`](#ebayuser)\>

##### issueRefund()

```ts
issueRefund(orderId, input): Promise<EbayRefund>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `orderId` | `string` |
| `input` | [`EbayIssueRefundInput`](#ebayissuerefundinput) |

###### Returns

`Promise`\<[`EbayRefund`](#ebayrefund)\>

##### searchOrders()

```ts
searchOrders(input?): Promise<EbayOrdersCollection>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EbayOrderSearchInput`](#ebayordersearchinput) |

###### Returns

`Promise`\<[`EbayOrdersCollection`](#ebayorderscollection)\>

##### searchPaymentDisputes()

```ts
searchPaymentDisputes(input?): Promise<EbayPaymentDisputesCollection>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`EbayPaymentDisputeSearchInput`](#ebaypaymentdisputesearchinput) |

###### Returns

`Promise`\<[`EbayPaymentDisputesCollection`](#ebaypaymentdisputescollection)\>

##### sendMessage()

```ts
sendMessage(input): Promise<EbayMessageResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbaySendMessageInput`](#ebaysendmessageinput) |

###### Returns

`Promise`\<[`EbayMessageResponse`](#ebaymessageresponse)\>

##### testNotificationSubscription()

```ts
testNotificationSubscription(subscriptionId): Promise<EbayNotificationSubscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |

###### Returns

`Promise`\<[`EbayNotificationSubscription`](#ebaynotificationsubscription)\>

##### updateConversation()

```ts
updateConversation(input): Promise<EbayConversation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbayUpdateConversationInput`](#ebayupdateconversationinput) |

###### Returns

`Promise`\<[`EbayConversation`](#ebayconversation)\>

##### updateNotificationConfig()

```ts
updateNotificationConfig(input): Promise<EbayNotificationConfig>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject) |

###### Returns

`Promise`\<[`EbayNotificationConfig`](#ebaynotificationconfig)\>

##### updateNotificationDestination()

```ts
updateNotificationDestination(destinationId, input): Promise<EbayNotificationDestination>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `destinationId` | `string` |
| `input` | [`EbayNotificationDestinationInput`](#ebaynotificationdestinationinput) |

###### Returns

`Promise`\<[`EbayNotificationDestination`](#ebaynotificationdestination)\>

##### updateNotificationSubscription()

```ts
updateNotificationSubscription(subscriptionId, input): Promise<EbayNotificationSubscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscriptionId` | `string` |
| `input` | [`EbayNotificationSubscriptionInput`](#ebaynotificationsubscriptioninput) |

###### Returns

`Promise`\<[`EbayNotificationSubscription`](#ebaynotificationsubscription)\>

##### updatePaymentDisputeEvidence()

```ts
updatePaymentDisputeEvidence(paymentDisputeId, input): Promise<EbayPaymentDisputeActionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |
| `input` | [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject) |

###### Returns

`Promise`\<[`EbayPaymentDisputeActionResponse`](#ebaypaymentdisputeactionresponse)\>

##### uploadPaymentDisputeEvidenceFile()

```ts
uploadPaymentDisputeEvidenceFile(paymentDisputeId, input): Promise<EbayPaymentDisputeActionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `paymentDisputeId` | `string` |
| `input` | [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject) |

###### Returns

`Promise`\<[`EbayPaymentDisputeActionResponse`](#ebaypaymentdisputeactionresponse)\>

***

### EbayMarketplaceClientOptions

#### Extended by

- [`EbayLiveCheckOptions`](#ebaylivecheckoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### applicationAccessToken?

```ts
optional applicationAccessToken?: string;
```

##### digitalSignature?

```ts
optional digitalSignature?: EbayDigitalSignatureOptions;
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

##### identityApiBaseUrl?

```ts
optional identityApiBaseUrl?: string;
```

##### keyManagementApiBaseUrl?

```ts
optional keyManagementApiBaseUrl?: string;
```

##### marketplaceId?

```ts
optional marketplaceId?: string;
```

##### requireDigitalSignatureForRefunds?

```ts
optional requireDigitalSignatureForRefunds?: boolean;
```

##### sellerDomicileCountry?

```ts
optional sellerDomicileCountry?: string;
```

##### signRequest?

```ts
optional signRequest?: EbayRequestSigner;
```

***

### EbayMarketplaceJsonObject

#### Extended by

- [`EbayMarketplaceProviderExtensionFields`](#ebaymarketplaceproviderextensionfields)
- [`EbayMarketplaceProviderResponse`](#ebaymarketplaceproviderresponse)

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

***

### EbayMarketplaceOperationInput

#### Properties

##### args?

```ts
optional args?: unknown[];
```

##### client?

```ts
optional client?: EbayMarketplaceClient;
```

***

### EbayMarketplaceProviderExtensionFields

#### Extends

- [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject)

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

***

### EbayMarketplaceProviderResponse

#### Extends

- [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject)

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

***

### EbayMessageResponse

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversationId?

```ts
optional conversationId?: string;
```

##### messageId?

```ts
optional messageId?: string;
```

##### status?

```ts
optional status?: string;
```

***

### EbayNotificationConfig

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### alertEmail?

```ts
optional alertEmail?: string;
```

##### alerts?

```ts
optional alerts?: EbayMarketplaceJsonObject[];
```

***

### EbayNotificationDestination

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### deliveryConfig?

```ts
optional deliveryConfig?: EbayMarketplaceJsonObject;
```

##### destinationId?

```ts
optional destinationId?: string;
```

##### destinationUrl?

```ts
optional destinationUrl?: string;
```

##### name?

```ts
optional name?: string;
```

##### status?

```ts
optional status?:
  | string & {
}
  | "ENABLED"
  | "DISABLED";
```

***

### EbayNotificationDestinationInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### deliveryConfig?

```ts
optional deliveryConfig?: EbayMarketplaceJsonObject;
```

##### destinationUrl?

```ts
optional destinationUrl?: string;
```

##### name?

```ts
optional name?: string;
```

##### status?

```ts
optional status?: string;
```

***

### EbayNotificationDestinationsCollection

#### Extends

- [`EbayRestCollection`](#ebayrestcollection)\<[`EbayNotificationDestination`](#ebaynotificationdestination)\>

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: EbayNotificationDestination[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`conversations`](#conversations-6)

##### destinations?

```ts
optional destinations?: EbayNotificationDestination[];
```

##### href?

```ts
optional href?: string;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`href`](#href-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`limit`](#limit-9)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`offset`](#offset-8)

##### orders?

```ts
optional orders?: EbayNotificationDestination[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`orders`](#orders-5)

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: EbayNotificationDestination[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`paymentDisputeSummaries`](#paymentdisputesummaries-5)

##### total?

```ts
optional total?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`total`](#total-6)

***

### EbayNotificationPublicKey

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### algorithm?

```ts
optional algorithm?: string;
```

##### key?

```ts
optional key?: string;
```

##### publicKey?

```ts
optional publicKey?: string;
```

***

### EbayNotificationSignatureHeader

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### alg?

```ts
optional alg?: string;
```

##### digest?

```ts
optional digest?: string;
```

##### kid?

```ts
optional kid?: string;
```

##### signature?

```ts
optional signature?: string;
```

***

### EbayNotificationSubscription

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### creationDate?

```ts
optional creationDate?: string;
```

##### destinationId?

```ts
optional destinationId?: string;
```

##### payloadVersion?

```ts
optional payloadVersion?: string;
```

##### status?

```ts
optional status?:
  | string & {
}
  | "ENABLED"
  | "DISABLED";
```

##### subscriptionId?

```ts
optional subscriptionId?: string;
```

##### topicId?

```ts
optional topicId?: string;
```

***

### EbayNotificationSubscriptionFilter

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### filter?

```ts
optional filter?: EbayMarketplaceJsonObject;
```

##### filterId?

```ts
optional filterId?: string;
```

##### filterType?

```ts
optional filterType?: string;
```

##### schemaVersion?

```ts
optional schemaVersion?: string;
```

***

### EbayNotificationSubscriptionFilterInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### filter?

```ts
optional filter?: EbayMarketplaceJsonObject;
```

##### filterType?

```ts
optional filterType?: string;
```

##### schemaVersion?

```ts
optional schemaVersion?: string;
```

***

### EbayNotificationSubscriptionInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### destinationId?

```ts
optional destinationId?: string;
```

##### payloadVersion?

```ts
optional payloadVersion?: string;
```

##### status?

```ts
optional status?: string;
```

##### topicId?

```ts
optional topicId?: string;
```

***

### EbayNotificationSubscriptionsCollection

#### Extends

- [`EbayRestCollection`](#ebayrestcollection)\<[`EbayNotificationSubscription`](#ebaynotificationsubscription)\>

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: EbayNotificationSubscription[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`conversations`](#conversations-6)

##### href?

```ts
optional href?: string;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`href`](#href-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`limit`](#limit-9)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`offset`](#offset-8)

##### orders?

```ts
optional orders?: EbayNotificationSubscription[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`orders`](#orders-5)

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: EbayNotificationSubscription[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`paymentDisputeSummaries`](#paymentdisputesummaries-5)

##### subscriptions?

```ts
optional subscriptions?: EbayNotificationSubscription[];
```

##### total?

```ts
optional total?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`total`](#total-6)

***

### EbayNotificationTopicSearchInput

#### Properties

##### continuation\_token?

```ts
optional continuation_token?: string;
```

##### continuationToken?

```ts
optional continuationToken?: string;
```

##### limit?

```ts
optional limit?: number;
```

***

### EbayNotificationWebhook

#### Properties

##### notificationId?

```ts
optional notificationId?: string;
```

##### payload

```ts
payload: unknown;
```

##### rawBody

```ts
rawBody: string;
```

##### signatureHeader?

```ts
optional signatureHeader?: EbayNotificationSignatureHeader;
```

##### topic?

```ts
optional topic?: string;
```

***

### EbayOrder

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### buyer?

```ts
optional buyer?: {
[providerField: string]: EbayMarketplaceJsonValue;
  taxAddress?: EbayMarketplaceJsonObject;
  username?: string;
};
```

###### Index Signature

```ts
[providerField: string]: EbayMarketplaceJsonValue
```

###### taxAddress?

```ts
optional taxAddress?: EbayMarketplaceJsonObject;
```

###### username?

```ts
optional username?: string;
```

##### creationDate?

```ts
optional creationDate?: string;
```

##### fulfillmentStartInstructions?

```ts
optional fulfillmentStartInstructions?: EbayMarketplaceJsonObject[];
```

##### lastModifiedDate?

```ts
optional lastModifiedDate?: string;
```

##### legacyOrderId?

```ts
optional legacyOrderId?: string;
```

##### lineItems?

```ts
optional lineItems?: EbayOrderLineItem[];
```

##### orderFulfillmentStatus?

```ts
optional orderFulfillmentStatus?: string;
```

##### orderId?

```ts
optional orderId?: string;
```

##### orderPaymentStatus?

```ts
optional orderPaymentStatus?: string;
```

##### paymentSummary?

```ts
optional paymentSummary?: EbayMarketplaceJsonObject;
```

##### pricingSummary?

```ts
optional pricingSummary?: {
[providerField: string]: EbayMarketplaceProviderExtensionValue;
  deliveryCost?: EbayAmount;
  priceSubtotal?: EbayAmount;
  total?: EbayAmount;
};
```

###### Index Signature

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

###### deliveryCost?

```ts
optional deliveryCost?: EbayAmount;
```

###### priceSubtotal?

```ts
optional priceSubtotal?: EbayAmount;
```

###### total?

```ts
optional total?: EbayAmount;
```

##### sellerId?

```ts
optional sellerId?: string;
```

***

### EbayOrderLineItem

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### appliedPromotions?

```ts
optional appliedPromotions?: {
  description?: string;
  discountAmount?: EbayAmount;
  promotionId?: string;
}[];
```

###### description?

```ts
optional description?: string;
```

###### discountAmount?

```ts
optional discountAmount?: EbayAmount;
```

###### promotionId?

```ts
optional promotionId?: string;
```

##### legacyItemId?

```ts
optional legacyItemId?: string;
```

##### lineItemCost?

```ts
optional lineItemCost?: EbayAmount;
```

##### lineItemId?

```ts
optional lineItemId?: string;
```

##### quantity?

```ts
optional quantity?: number;
```

##### sku?

```ts
optional sku?: string;
```

##### taxes?

```ts
optional taxes?: {
  amount?: EbayAmount;
  taxType?: string;
}[];
```

###### amount?

```ts
optional amount?: EbayAmount;
```

###### taxType?

```ts
optional taxType?: string;
```

##### title?

```ts
optional title?: string;
```

##### total?

```ts
optional total?: EbayAmount;
```

***

### EbayOrdersCollection

#### Extends

- [`EbayRestCollection`](#ebayrestcollection)\<[`EbayOrder`](#ebayorder)\>

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: EbayOrder[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`conversations`](#conversations-6)

##### href?

```ts
optional href?: string;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`href`](#href-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`limit`](#limit-9)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`offset`](#offset-8)

##### orders?

```ts
optional orders?: EbayOrder[];
```

###### Overrides

[`EbayRestCollection`](#ebayrestcollection).[`orders`](#orders-5)

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: EbayOrder[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`paymentDisputeSummaries`](#paymentdisputesummaries-5)

##### total?

```ts
optional total?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`total`](#total-6)

***

### EbayOrderSearchInput

#### Properties

##### fieldGroups?

```ts
optional fieldGroups?: string[];
```

##### filter?

```ts
optional filter?: string | string[];
```

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

##### orderIds?

```ts
optional orderIds?: string[];
```

***

### EbayPaymentDispute

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### amount?

```ts
optional amount?: EbayAmount;
```

##### buyerUsername?

```ts
optional buyerUsername?: string;
```

##### evidence?

```ts
optional evidence?: EbayMarketplaceJsonObject[];
```

##### openDate?

```ts
optional openDate?: string;
```

##### orderId?

```ts
optional orderId?: string;
```

##### paymentDisputeId?

```ts
optional paymentDisputeId?: string;
```

##### reason?

```ts
optional reason?: string;
```

##### respondByDate?

```ts
optional respondByDate?: string;
```

##### status?

```ts
optional status?: string;
```

***

### EbayPaymentDisputeActionResponse

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### actionId?

```ts
optional actionId?: string;
```

##### paymentDisputeId?

```ts
optional paymentDisputeId?: string;
```

##### status?

```ts
optional status?: string;
```

***

### EbayPaymentDisputeActivities

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### activities?

```ts
optional activities?: EbayPaymentDisputeActivity[];
```

***

### EbayPaymentDisputeActivity

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### activityDate?

```ts
optional activityDate?: string;
```

##### activityType?

```ts
optional activityType?: string;
```

##### actor?

```ts
optional actor?: string;
```

##### notes?

```ts
optional notes?: string;
```

***

### EbayPaymentDisputesCollection

#### Extends

- [`EbayRestCollection`](#ebayrestcollection)\<[`EbayPaymentDispute`](#ebaypaymentdispute)\>

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: EbayPaymentDispute[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`conversations`](#conversations-6)

##### href?

```ts
optional href?: string;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`href`](#href-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`limit`](#limit-9)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`offset`](#offset-8)

##### orders?

```ts
optional orders?: EbayPaymentDispute[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`orders`](#orders-5)

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: EbayPaymentDispute[];
```

###### Overrides

[`EbayRestCollection`](#ebayrestcollection).[`paymentDisputeSummaries`](#paymentdisputesummaries-5)

##### total?

```ts
optional total?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`total`](#total-6)

***

### EbayPaymentDisputeSearchInput

#### Properties

##### filter?

```ts
optional filter?: string | string[];
```

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

***

### EbayRefund

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### orderId?

```ts
optional orderId?: string;
```

##### refundAmount?

```ts
optional refundAmount?: EbayAmount;
```

##### refundDate?

```ts
optional refundDate?: string;
```

##### refundId?

```ts
optional refundId?: string;
```

##### refundStatus?

```ts
optional refundStatus?: string;
```

***

### EbayRestCollection

#### Extended by

- [`EbayConversationsCollection`](#ebayconversationscollection)
- [`EbayNotificationDestinationsCollection`](#ebaynotificationdestinationscollection)
- [`EbayNotificationSubscriptionsCollection`](#ebaynotificationsubscriptionscollection)
- [`EbayOrdersCollection`](#ebayorderscollection)
- [`EbayPaymentDisputesCollection`](#ebaypaymentdisputescollection)
- [`EbayShippingFulfillmentsCollection`](#ebayshippingfulfillmentscollection)
- [`EbaySigningKeysCollection`](#ebaysigningkeyscollection)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TItem` | [`EbayMarketplaceJsonObject`](#ebaymarketplacejsonobject) |

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: TItem[];
```

##### href?

```ts
optional href?: string;
```

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

##### orders?

```ts
optional orders?: TItem[];
```

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: TItem[];
```

##### total?

```ts
optional total?: number;
```

***

### EbaySelectedApiOperation

#### Properties

##### api

```ts
api:
  | "sell.fulfillment"
  | "commerce.message"
  | "commerce.notification"
  | "developer.key-management"
  | "commerce.identity";
```

##### functionName

```ts
functionName: keyof EbayMarketplaceClient;
```

##### method

```ts
method: "GET" | "POST" | "PUT" | "DELETE";
```

##### operationId

```ts
operationId: string;
```

##### path

```ts
path: string;
```

##### resource

```ts
resource: string;
```

##### specUrl

```ts
specUrl: string;
```

***

### EbaySendMessageInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### body?

```ts
optional body?: EbayMarketplaceProviderPayload;
```

##### conversationId?

```ts
optional conversationId?: string;
```

##### messageText?

```ts
optional messageText?: string;
```

##### recipient?

```ts
optional recipient?: string;
```

##### subject?

```ts
optional subject?: string;
```

***

### EbayShippingFulfillment

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### fulfillmentId?

```ts
optional fulfillmentId?: string;
```

##### lineItems?

```ts
optional lineItems?: {
  lineItemId?: string;
  quantity?: number;
}[];
```

###### lineItemId?

```ts
optional lineItemId?: string;
```

###### quantity?

```ts
optional quantity?: number;
```

##### shipmentTrackingNumber?

```ts
optional shipmentTrackingNumber?: string;
```

##### shippedDate?

```ts
optional shippedDate?: string;
```

##### shippingCarrierCode?

```ts
optional shippingCarrierCode?: string;
```

***

### EbayShippingFulfillmentInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### lineItemsById?

```ts
optional lineItemsById?: {
  lineItemId: string;
  quantity: number;
}[];
```

###### lineItemId

```ts
lineItemId: string;
```

###### quantity

```ts
quantity: number;
```

##### shippedDate?

```ts
optional shippedDate?: string;
```

##### shippingCarrierCode?

```ts
optional shippingCarrierCode?: string;
```

##### trackingNumber?

```ts
optional trackingNumber?: string;
```

***

### EbayShippingFulfillmentsCollection

#### Extends

- [`EbayRestCollection`](#ebayrestcollection)\<[`EbayShippingFulfillment`](#ebayshippingfulfillment)\>

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: EbayShippingFulfillment[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`conversations`](#conversations-6)

##### fulfillments?

```ts
optional fulfillments?: EbayShippingFulfillment[];
```

##### href?

```ts
optional href?: string;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`href`](#href-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`limit`](#limit-9)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`offset`](#offset-8)

##### orders?

```ts
optional orders?: EbayShippingFulfillment[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`orders`](#orders-5)

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: EbayShippingFulfillment[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`paymentDisputeSummaries`](#paymentdisputesummaries-5)

##### total?

```ts
optional total?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`total`](#total-6)

***

### EbaySignedRequestInput

#### Properties

##### body?

```ts
optional body?: string;
```

##### method

```ts
method: "GET" | "POST" | "PUT" | "DELETE";
```

##### url

```ts
url: string;
```

***

### EbaySigningKey

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### expirationDate?

```ts
optional expirationDate?: string;
```

##### publicKeyJwe?

```ts
optional publicKeyJwe?: string;
```

##### signingKeyCipher?

```ts
optional signingKeyCipher?: string;
```

##### signingKeyId?

```ts
optional signingKeyId?: string;
```

***

### EbaySigningKeysCollection

#### Extends

- [`EbayRestCollection`](#ebayrestcollection)\<[`EbaySigningKey`](#ebaysigningkey)\>

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversations?

```ts
optional conversations?: EbaySigningKey[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`conversations`](#conversations-6)

##### href?

```ts
optional href?: string;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`href`](#href-5)

##### limit?

```ts
optional limit?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`limit`](#limit-9)

##### offset?

```ts
optional offset?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`offset`](#offset-8)

##### orders?

```ts
optional orders?: EbaySigningKey[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`orders`](#orders-5)

##### paymentDisputeSummaries?

```ts
optional paymentDisputeSummaries?: EbaySigningKey[];
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`paymentDisputeSummaries`](#paymentdisputesummaries-5)

##### signingKeys?

```ts
optional signingKeys?: EbaySigningKey[];
```

##### total?

```ts
optional total?: number;
```

###### Inherited from

[`EbayRestCollection`](#ebayrestcollection).[`total`](#total-6)

***

### EbayUpdateConversationInput

#### Indexable

```ts
[key: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### conversationId?

```ts
optional conversationId?: string;
```

##### status?

```ts
optional status?: string;
```

***

### EbayUser

#### Indexable

```ts
[providerField: string]: EbayMarketplaceProviderExtensionValue
```

#### Properties

##### registrationMarketplaceId?

```ts
optional registrationMarketplaceId?: string;
```

##### status?

```ts
optional status?: string;
```

##### userId?

```ts
optional userId?: string;
```

##### username?

```ts
optional username?: string;
```

***

### ParseEbayNotificationWebhookOptions

#### Properties

##### expectedSharedSecret?

```ts
optional expectedSharedSecret?: string;
```

##### publicKey?

```ts
optional publicKey?: string;
```

##### requireEbaySignature?

```ts
optional requireEbaySignature?: boolean;
```

##### sharedSecretHeaderName?

```ts
optional sharedSecretHeaderName?: string;
```

##### verifySignature?

```ts
optional verifySignature?: (input) => boolean | Promise<boolean>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `rawBody`: `string`; `signatureHeader`: [`EbayNotificationSignatureHeader`](#ebaynotificationsignatureheader); \} |
| `input.rawBody` | `string` |
| `input.signatureHeader` | [`EbayNotificationSignatureHeader`](#ebaynotificationsignatureheader) |

###### Returns

`boolean` \| `Promise`\<`boolean`\>

## Type Aliases

### EbayMarketplaceJsonPrimitive

```ts
type EbayMarketplaceJsonPrimitive = string | number | boolean | null;
```

***

### EbayMarketplaceJsonValue

```ts
type EbayMarketplaceJsonValue =
  | EbayMarketplaceJsonPrimitive
  | EbayMarketplaceJsonObject
  | readonly EbayMarketplaceJsonValue[];
```

***

### EbayMarketplaceProviderExtensionValue

```ts
type EbayMarketplaceProviderExtensionValue =
  | EbayMarketplaceJsonValue
  | object
  | undefined;
```

***

### EbayMarketplaceProviderPayload

```ts
type EbayMarketplaceProviderPayload = EbayMarketplaceJsonObject | object;
```

***

### EbayMarketplaceProviderQuery

```ts
type EbayMarketplaceProviderQuery = Record<string, EbayMarketplaceProviderExtensionValue>;
```

***

### EbayRequestSigner

```ts
type EbayRequestSigner = (input) =>
  | Record<string, string>
| Promise<Record<string, string>>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbaySignedRequestInput`](#ebaysignedrequestinput) |

#### Returns

  \| `Record`\<`string`, `string`\>
  \| `Promise`\<`Record`\<`string`, `string`\>\>

## Variables

### EBAY\_SELECTED\_API\_GENERATED\_FUNCTION\_COUNT

```ts
const EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT: 45 = 45;
```

***

### EBAY\_SELECTED\_API\_OPERATION\_COUNT

```ts
const EBAY_SELECTED_API_OPERATION_COUNT: 45 = 45;
```

***

### EBAY\_SELECTED\_API\_PATH\_COUNT

```ts
const EBAY_SELECTED_API_PATH_COUNT: 34 = 34;
```

***

### EBAY\_SELECTED\_API\_VERIFICATION\_DATE

```ts
const EBAY_SELECTED_API_VERIFICATION_DATE: "2026-06-18" = "2026-06-18";
```

***

### ebayMarketplaceIntegration

```ts
const ebayMarketplaceIntegration: DefinedIntegration<{
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
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
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
     capability: "receive";
     description: "Validates eBay notification endpoint challenges and parses signed Notification API events for SDK-user-owned marketplace workflows.";
     exposesSensitiveData: true;
     label: "Receive eBay notifications";
     providerObjects: readonly [{
        kind: "ebayNotification";
        label: "eBay Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads eBay seller orders, shipping fulfillments, payment disputes, message conversations, account profile details, and notification destinations/subscriptions.";
     exposesSensitiveData: true;
     label: "Read eBay marketplace records";
     providerObjects: readonly [{
        kind: "ebayOrder";
        label: "eBay Order";
      }, {
        kind: "ebayShippingFulfillment";
        label: "eBay Shipping Fulfillment";
      }, {
        kind: "ebayPaymentDispute";
        label: "eBay Payment Dispute";
      }, {
        kind: "ebayConversation";
        label: "eBay Conversation";
      }, {
        kind: "ebayUser";
        label: "eBay User";
      }, {
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches orders, payment disputes, and message conversations with SDK-user-supplied eBay filters and pagination.";
     exposesSensitiveData: true;
     label: "Search eBay marketplace records";
     providerObjects: readonly [{
        kind: "ebayOrder";
        label: "eBay Order";
      }, {
        kind: "ebayPaymentDispute";
        label: "eBay Payment Dispute";
      }, {
        kind: "ebayConversation";
        label: "eBay Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates eBay conversations, payment-dispute evidence or outcomes, and notification destination/subscription lifecycle when SDK-user policy permits marketplace mutations.";
     exposesSensitiveData: true;
     label: "Update eBay marketplace records";
     providerObjects: readonly [{
        kind: "ebayConversation";
        label: "eBay Conversation";
      }, {
        kind: "ebayPaymentDispute";
        label: "eBay Payment Dispute";
      }, {
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes notification destinations, subscriptions, and filters only when the SDK user's marketplace policy allows lifecycle changes.";
     label: "Delete eBay marketplace resources";
     providerObjects: readonly [{
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates shipping fulfillments, buyer/seller messages, refunds, and payment-dispute actions only when SDK-user policy allows.";
     exposesSensitiveData: true;
     label: "Create eBay fulfillment and message records";
     providerObjects: readonly [{
        kind: "ebayShippingFulfillment";
        label: "eBay Shipping Fulfillment";
      }, {
        kind: "ebayMessage";
        label: "eBay Message";
      }, {
        kind: "ebayRefund";
        label: "eBay Refund";
      }, {
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends supported Commerce Message API messages to eBay conversations selected by the SDK user's workflow.";
     exposesSensitiveData: true;
     label: "Send eBay marketplace messages";
     providerObjects: readonly [{
        kind: "ebayMessage";
        label: "eBay Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.notification-signature";
     description: "Decodes X-EBAY-SIGNATURE, retrieves or accepts the SDK-user-cached public key, and verifies ECDSA/SHA1 payload signatures before parsing.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate eBay notification signatures";
     providerObjects: readonly [{
        kind: "ebaySignedNotification";
        label: "eBay Signed Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.digital-signature";
     changesWorkflow: true;
     description: "Adds Content-Digest, Signature, Signature-Input, and X-EBAY-SIGNATURE-KEY headers to issueRefund when EU/UK seller policy requires eBay HTTP Message Signatures.";
     extension: true;
     label: "Sign regulated eBay refund requests";
     providerObjects: readonly [{
        kind: "ebaySignedRequest";
        label: "eBay Signed Request";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.notification-challenge";
     description: "Computes the SHA-256 challengeResponse from challenge code, verification token, and endpoint URL for eBay destination setup.";
     extension: true;
     label: "Answer eBay notification challenges";
     providerObjects: readonly [{
        kind: "ebayNotificationChallenge";
        label: "eBay Notification Challenge";
     }];
     requiresCredential: true;
  }];
  category: "marketplace";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "eBay Sell Fulfillment API";
        url: "https://developer.ebay.com/develop/api/sell/fulfillment_api";
      }, {
        label: "eBay Digital Signatures for APIs";
        url: "https://developer.ebay.com/develop/guides/digital-signatures-for-apis";
      }, {
        label: "eBay Key Management API";
        url: "https://developer.ebay.com/api-docs/developer/key-management/resources/methods";
      }, {
        label: "eBay Commerce Notification API resources";
        url: "https://developer.ebay.com/api-docs/commerce/notification/resources/methods";
      }, {
        label: "eBay Commerce Notification API overview";
        url: "https://developer.ebay.com/api-docs/commerce/notification/overview.html";
      }, {
        label: "eBay Notification getPublicKey";
        url: "https://developer.ebay.com/api-docs/commerce/notification/resources/public_key/methods/getPublicKey";
      }, {
        label: "eBay OAuth client credentials grant flow";
        url: "https://developer.ebay.com/develop/guides-v2/authorization#the-client-credentials-grant-flow";
      }, {
        label: "eBay Commerce Message API";
        url: "https://developer.ebay.com/api-docs/commerce/message/resources/methods";
      }, {
        label: "eBay OpenAPI specifications";
        url: "https://developer.ebay.com/api-docs/static/gs_take-advantage-of-openapi.html";
      }, {
        label: "eBay Fulfillment OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json";
      }, {
        label: "eBay Commerce Message OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json";
      }, {
        label: "eBay Commerce Notification OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json";
      }, {
        label: "eBay Developer Key Management OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json";
      }, {
        label: "eBay Commerce Identity OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json";
     }];
     notes: readonly ["Coverage is limited to selected eBay marketplace support primitives: Sell Fulfillment order, shipping fulfillment, refund, and payment-dispute operations; Sell Commerce Message conversations; Commerce Notification destination/subscription/config/public-key operations; notification challenges; and signed notification parsing.", "The selected REST slice now covers every documented operation in the currently implemented Fulfillment, Commerce Message, Commerce Notification, Developer Key Management, and Commerce Identity resource groups, but does not claim full eBay platform coverage.", "The package does not implement full eBay API coverage for inventory/listing management, account policy breadth, marketing/promotions, analytics/reporting, taxonomy/metadata, media, translation, buy APIs, finances beyond supported fulfillment dispute routes, Negotiation/Leads/Charity/Media APIs, or older Trading/Browse/Finding surfaces.", "The Fulfillment API issueRefund path supports eBay HTTP Message Signature headers for EU/UK seller policy, but the SDK user must provide Key Management API signing material or a request signer.", "The SDK user owns OAuth grant/scopes, marketplace selection, notification topic and filter policy, public-key cache freshness, refund/dispute authority, outbound messaging policy, consent, redaction, and retention decisions."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side OAuth user token with SDK-user-selected Sell, Commerce Message, Identity, and Notification scopes.";
     id: "ebay-oauth-access-token";
     label: "eBay OAuth user access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://api.ebay.com/oauth/api_scope/sell.fulfillment", "https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly", "https://api.ebay.com/oauth/api_scope/commerce.message", "https://api.ebay.com/oauth/api_scope/commerce.identity.readonly", "https://api.ebay.com/oauth/api_scope/commerce.notification.subscription"];
   }, {
     description: "Client-credentials OAuth token with https://api.ebay.com/oauth/api_scope for Notification public-key retrieval.";
     id: "ebay-application-access-token";
     label: "eBay application access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://api.ebay.com/oauth/api_scope"];
   }, {
     description: "Application keyset client ID owned by the SDK user for OAuth and notification ownership metadata.";
     id: "ebay-client-id";
     label: "eBay application client ID";
     required: true;
   }, {
     description: "Application keyset client secret kept server-side by the SDK user for OAuth token lifecycle operations.";
     id: "ebay-client-secret";
     label: "eBay application client secret";
     required: true;
   }, {
     description: "SDK-user-selected marketplace such as EBAY_US or EBAY_DE, forwarded through X-EBAY-C-MARKETPLACE-ID where supported.";
     id: "ebay-marketplace-id";
     label: "eBay marketplace ID";
     required: true;
   }, {
     description: "Destination verification token used to answer eBay challenge_code requests for notification endpoints.";
     id: "ebay-notification-verification-token";
     label: "eBay notification verification token";
     required: true;
   }, {
     description: "Key Management API private key and public-key JWE required for issueRefund when EU/UK seller or SDK policy requires HTTP Message Signatures.";
     id: "ebay-digital-signature-key";
     label: "eBay digital signature keypair";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "marketplace.ebay";
  limitations: readonly ["The SDK user chooses marketplaces, OAuth flows, scopes, notification topics, subscription filters, operator visibility, outbound messaging policy, refund/dispute rules, retention, consent, and redaction.", "Some eBay APIs are entitlement, marketplace, scope, topic, or sandbox limited; this package exposes typed REST foundations and does not decide whether a seller is eligible for a specific action.", "The issueRefund method is fail-closed when EU/UK seller or SDK policy requires digital signatures and no eBay request signer or Key Management API signing key is configured.", "Notification signature verification requires a valid eBay public key retrieved by key ID from the Notification API or a SDK-user-provided verifier/cache implementation."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        conversationBulkUpdate: "typed-update";
        conversations: "typed-read-search-update";
        digitalSignatures: "typed-sign";
        inventoryMarketingAnalyticsBuyApis: "provider-supported-not-typed";
        keyManagementSigningKeys: "typed-create-read-list";
        messages: "typed-send";
        notificationChallenge: "typed-response";
        notificationConfig: "typed-read-update";
        notificationDestinations: "typed-create-read-list-update-delete";
        notificationFilters: "typed-create-read-delete";
        notificationSignatures: "typed-verify";
        notificationSubscriptions: "typed-create-read-list-update-enable-disable-test-delete";
        notificationTopics: "typed-read-list";
        orders: "typed-read-search";
        paymentDisputeEvidence: "typed-read-upload-add-update";
        paymentDisputes: "typed-read-search-update";
        refunds: "typed-create";
        shippingFulfillments: "typed-create-read-list";
        userProfile: "typed-read";
     };
     docs: "https://developer.ebay.com/api-docs";
     fulfillmentDocs: "https://developer.ebay.com/api-docs/sell/fulfillment/overview.html";
     generatedProviderSliceVerification: {
        apiVersion: string;
        coverageArtifact: "docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json";
        documentedOperationCount: 45;
        documentedPathCount: 34;
        functionCatalogArtifact: "docs/provider-coverage/ebay-selected-api-2026-06-18.functions.json";
        generatedFunctionCount: 45;
        implementedOperationCount: 45;
        operationCatalogArtifact: "docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json";
        provider: "ebay-selected-rest";
        unimplementedOperationCount: 0;
        verifiedAt: "2026-06-18";
     };
     implementation: {
        checkedAt: "2026-06-18";
        communityPackagesChecked: readonly [{
           decision: "not-adopted-community-client-not-official-default";
           package: "ebay-api";
           repository: "https://github.com/hendt/ebay-api";
           version: "9.5.2";
        }];
        officialUtilityPackagesChecked: readonly [{
           decision: "not-adopted-current-local-signer-is-smaller";
           package: "digital-signature-nodejs-sdk";
           repository: "https://github.com/eBay/digital-signature-nodejs-sdk";
           version: "3.0.1";
         }, {
           decision: "not-adopted-current-local-verifier-is-smaller";
           package: "event-notification-nodejs-sdk";
           repository: "https://github.com/eBay/event-notification-nodejs-sdk";
           version: "1.0.3";
        }];
        selectedApiCount: 5;
        strategy: "direct-support-slice";
     };
     notificationDocs: "https://developer.ebay.com/api-docs/commerce/notification/overview.html";
     supportSlice: {
        allowlist: {
           alias: `ebay.${string}`;
           api:   | "sell.fulfillment"
              | "commerce.message"
              | "commerce.notification"
              | "developer.key-management"
              | "commerce.identity";
           method: "GET" | "POST" | "PUT" | "DELETE";
           operationId: string;
           path: string;
        }[];
        source: "official-ebay-openapi-selected-rest-contracts";
        specs: {
           api:   | "sell.fulfillment"
              | "commerce.message"
              | "commerce.notification"
              | "developer.key-management"
              | "commerce.identity";
           operationCount: 15 | 5 | 21 | 3 | 1;
           pathCount: 14 | 5 | 12 | 2 | 1;
           specUrl:   | "https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json";
           version: "v1.20.7" | "1.0.0" | "v1.6.7" | "v1.0.0" | "v2.0.0";
        }[];
        verifiedAt: "2026-06-18";
     };
  };
  name: "eBay Marketplace";
  operations: {
     alias: `ebay.${string}`;
     capability: string;
     changesWorkflow: boolean;
     description: string;
     exposesSensitiveData: boolean;
     extension: boolean;
     label: keyof EbayMarketplaceClient;
     metadata: {
        api:   | "sell.fulfillment"
           | "commerce.message"
           | "commerce.notification"
           | "developer.key-management"
           | "commerce.identity";
        method: "GET" | "POST" | "PUT" | "DELETE";
        operationId: string;
        path: string;
        specUrl: string;
     };
     providerObject: string;
     providerOperation: string;
     requiresCredential: boolean;
     sideEffect: boolean;
  }[];
  packageName: "@cognidesk/integration-marketplace-ebay";
  privacyNotes: readonly ["eBay orders, buyer/seller conversations, shipping fulfillments, disputes, refunds, notifications, and account profile records can contain customer data, addresses, item details, and internal support context.", "OAuth tokens, keyset secrets, notification verification tokens, public-key caches, and gateway shared secrets stay server-side; Studio receives only readiness and capability metadata."];
  provider: "ebay";
  trustLevel: "official";
}, unknown, EbayMarketplaceOperations>;
```

***

### ebayMarketplaceProviderManifest

```ts
const ebayMarketplaceProviderManifest: {
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
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
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
     capability: "receive";
     description: "Validates eBay notification endpoint challenges and parses signed Notification API events for SDK-user-owned marketplace workflows.";
     exposesSensitiveData: true;
     label: "Receive eBay notifications";
     providerObjects: readonly [{
        kind: "ebayNotification";
        label: "eBay Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads eBay seller orders, shipping fulfillments, payment disputes, message conversations, account profile details, and notification destinations/subscriptions.";
     exposesSensitiveData: true;
     label: "Read eBay marketplace records";
     providerObjects: readonly [{
        kind: "ebayOrder";
        label: "eBay Order";
      }, {
        kind: "ebayShippingFulfillment";
        label: "eBay Shipping Fulfillment";
      }, {
        kind: "ebayPaymentDispute";
        label: "eBay Payment Dispute";
      }, {
        kind: "ebayConversation";
        label: "eBay Conversation";
      }, {
        kind: "ebayUser";
        label: "eBay User";
      }, {
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches orders, payment disputes, and message conversations with SDK-user-supplied eBay filters and pagination.";
     exposesSensitiveData: true;
     label: "Search eBay marketplace records";
     providerObjects: readonly [{
        kind: "ebayOrder";
        label: "eBay Order";
      }, {
        kind: "ebayPaymentDispute";
        label: "eBay Payment Dispute";
      }, {
        kind: "ebayConversation";
        label: "eBay Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates eBay conversations, payment-dispute evidence or outcomes, and notification destination/subscription lifecycle when SDK-user policy permits marketplace mutations.";
     exposesSensitiveData: true;
     label: "Update eBay marketplace records";
     providerObjects: readonly [{
        kind: "ebayConversation";
        label: "eBay Conversation";
      }, {
        kind: "ebayPaymentDispute";
        label: "eBay Payment Dispute";
      }, {
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes notification destinations, subscriptions, and filters only when the SDK user's marketplace policy allows lifecycle changes.";
     label: "Delete eBay marketplace resources";
     providerObjects: readonly [{
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates shipping fulfillments, buyer/seller messages, refunds, and payment-dispute actions only when SDK-user policy allows.";
     exposesSensitiveData: true;
     label: "Create eBay fulfillment and message records";
     providerObjects: readonly [{
        kind: "ebayShippingFulfillment";
        label: "eBay Shipping Fulfillment";
      }, {
        kind: "ebayMessage";
        label: "eBay Message";
      }, {
        kind: "ebayRefund";
        label: "eBay Refund";
      }, {
        kind: "ebayNotificationDestination";
        label: "eBay Notification Destination";
      }, {
        kind: "ebayNotificationSubscription";
        label: "eBay Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends supported Commerce Message API messages to eBay conversations selected by the SDK user's workflow.";
     exposesSensitiveData: true;
     label: "Send eBay marketplace messages";
     providerObjects: readonly [{
        kind: "ebayMessage";
        label: "eBay Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.notification-signature";
     description: "Decodes X-EBAY-SIGNATURE, retrieves or accepts the SDK-user-cached public key, and verifies ECDSA/SHA1 payload signatures before parsing.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate eBay notification signatures";
     providerObjects: readonly [{
        kind: "ebaySignedNotification";
        label: "eBay Signed Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.digital-signature";
     changesWorkflow: true;
     description: "Adds Content-Digest, Signature, Signature-Input, and X-EBAY-SIGNATURE-KEY headers to issueRefund when EU/UK seller policy requires eBay HTTP Message Signatures.";
     extension: true;
     label: "Sign regulated eBay refund requests";
     providerObjects: readonly [{
        kind: "ebaySignedRequest";
        label: "eBay Signed Request";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.notification-challenge";
     description: "Computes the SHA-256 challengeResponse from challenge code, verification token, and endpoint URL for eBay destination setup.";
     extension: true;
     label: "Answer eBay notification challenges";
     providerObjects: readonly [{
        kind: "ebayNotificationChallenge";
        label: "eBay Notification Challenge";
     }];
     requiresCredential: true;
  }];
  category: "marketplace";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "eBay Sell Fulfillment API";
        url: "https://developer.ebay.com/develop/api/sell/fulfillment_api";
      }, {
        label: "eBay Digital Signatures for APIs";
        url: "https://developer.ebay.com/develop/guides/digital-signatures-for-apis";
      }, {
        label: "eBay Key Management API";
        url: "https://developer.ebay.com/api-docs/developer/key-management/resources/methods";
      }, {
        label: "eBay Commerce Notification API resources";
        url: "https://developer.ebay.com/api-docs/commerce/notification/resources/methods";
      }, {
        label: "eBay Commerce Notification API overview";
        url: "https://developer.ebay.com/api-docs/commerce/notification/overview.html";
      }, {
        label: "eBay Notification getPublicKey";
        url: "https://developer.ebay.com/api-docs/commerce/notification/resources/public_key/methods/getPublicKey";
      }, {
        label: "eBay OAuth client credentials grant flow";
        url: "https://developer.ebay.com/develop/guides-v2/authorization#the-client-credentials-grant-flow";
      }, {
        label: "eBay Commerce Message API";
        url: "https://developer.ebay.com/api-docs/commerce/message/resources/methods";
      }, {
        label: "eBay OpenAPI specifications";
        url: "https://developer.ebay.com/api-docs/static/gs_take-advantage-of-openapi.html";
      }, {
        label: "eBay Fulfillment OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json";
      }, {
        label: "eBay Commerce Message OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json";
      }, {
        label: "eBay Commerce Notification OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json";
      }, {
        label: "eBay Developer Key Management OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json";
      }, {
        label: "eBay Commerce Identity OpenAPI 3 JSON";
        url: "https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json";
     }];
     notes: readonly ["Coverage is limited to selected eBay marketplace support primitives: Sell Fulfillment order, shipping fulfillment, refund, and payment-dispute operations; Sell Commerce Message conversations; Commerce Notification destination/subscription/config/public-key operations; notification challenges; and signed notification parsing.", "The selected REST slice now covers every documented operation in the currently implemented Fulfillment, Commerce Message, Commerce Notification, Developer Key Management, and Commerce Identity resource groups, but does not claim full eBay platform coverage.", "The package does not implement full eBay API coverage for inventory/listing management, account policy breadth, marketing/promotions, analytics/reporting, taxonomy/metadata, media, translation, buy APIs, finances beyond supported fulfillment dispute routes, Negotiation/Leads/Charity/Media APIs, or older Trading/Browse/Finding surfaces.", "The Fulfillment API issueRefund path supports eBay HTTP Message Signature headers for EU/UK seller policy, but the SDK user must provide Key Management API signing material or a request signer.", "The SDK user owns OAuth grant/scopes, marketplace selection, notification topic and filter policy, public-key cache freshness, refund/dispute authority, outbound messaging policy, consent, redaction, and retention decisions."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side OAuth user token with SDK-user-selected Sell, Commerce Message, Identity, and Notification scopes.";
     id: "ebay-oauth-access-token";
     label: "eBay OAuth user access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://api.ebay.com/oauth/api_scope/sell.fulfillment", "https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly", "https://api.ebay.com/oauth/api_scope/commerce.message", "https://api.ebay.com/oauth/api_scope/commerce.identity.readonly", "https://api.ebay.com/oauth/api_scope/commerce.notification.subscription"];
   }, {
     description: "Client-credentials OAuth token with https://api.ebay.com/oauth/api_scope for Notification public-key retrieval.";
     id: "ebay-application-access-token";
     label: "eBay application access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://api.ebay.com/oauth/api_scope"];
   }, {
     description: "Application keyset client ID owned by the SDK user for OAuth and notification ownership metadata.";
     id: "ebay-client-id";
     label: "eBay application client ID";
     required: true;
   }, {
     description: "Application keyset client secret kept server-side by the SDK user for OAuth token lifecycle operations.";
     id: "ebay-client-secret";
     label: "eBay application client secret";
     required: true;
   }, {
     description: "SDK-user-selected marketplace such as EBAY_US or EBAY_DE, forwarded through X-EBAY-C-MARKETPLACE-ID where supported.";
     id: "ebay-marketplace-id";
     label: "eBay marketplace ID";
     required: true;
   }, {
     description: "Destination verification token used to answer eBay challenge_code requests for notification endpoints.";
     id: "ebay-notification-verification-token";
     label: "eBay notification verification token";
     required: true;
   }, {
     description: "Key Management API private key and public-key JWE required for issueRefund when EU/UK seller or SDK policy requires HTTP Message Signatures.";
     id: "ebay-digital-signature-key";
     label: "eBay digital signature keypair";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "marketplace.ebay";
  limitations: readonly ["The SDK user chooses marketplaces, OAuth flows, scopes, notification topics, subscription filters, operator visibility, outbound messaging policy, refund/dispute rules, retention, consent, and redaction.", "Some eBay APIs are entitlement, marketplace, scope, topic, or sandbox limited; this package exposes typed REST foundations and does not decide whether a seller is eligible for a specific action.", "The issueRefund method is fail-closed when EU/UK seller or SDK policy requires digital signatures and no eBay request signer or Key Management API signing key is configured.", "Notification signature verification requires a valid eBay public key retrieved by key ID from the Notification API or a SDK-user-provided verifier/cache implementation."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        conversationBulkUpdate: "typed-update";
        conversations: "typed-read-search-update";
        digitalSignatures: "typed-sign";
        inventoryMarketingAnalyticsBuyApis: "provider-supported-not-typed";
        keyManagementSigningKeys: "typed-create-read-list";
        messages: "typed-send";
        notificationChallenge: "typed-response";
        notificationConfig: "typed-read-update";
        notificationDestinations: "typed-create-read-list-update-delete";
        notificationFilters: "typed-create-read-delete";
        notificationSignatures: "typed-verify";
        notificationSubscriptions: "typed-create-read-list-update-enable-disable-test-delete";
        notificationTopics: "typed-read-list";
        orders: "typed-read-search";
        paymentDisputeEvidence: "typed-read-upload-add-update";
        paymentDisputes: "typed-read-search-update";
        refunds: "typed-create";
        shippingFulfillments: "typed-create-read-list";
        userProfile: "typed-read";
     };
     docs: "https://developer.ebay.com/api-docs";
     fulfillmentDocs: "https://developer.ebay.com/api-docs/sell/fulfillment/overview.html";
     generatedProviderSliceVerification: {
        apiVersion: string;
        coverageArtifact: "docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json";
        documentedOperationCount: 45;
        documentedPathCount: 34;
        functionCatalogArtifact: "docs/provider-coverage/ebay-selected-api-2026-06-18.functions.json";
        generatedFunctionCount: 45;
        implementedOperationCount: 45;
        operationCatalogArtifact: "docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json";
        provider: "ebay-selected-rest";
        unimplementedOperationCount: 0;
        verifiedAt: "2026-06-18";
     };
     implementation: {
        checkedAt: "2026-06-18";
        communityPackagesChecked: readonly [{
           decision: "not-adopted-community-client-not-official-default";
           package: "ebay-api";
           repository: "https://github.com/hendt/ebay-api";
           version: "9.5.2";
        }];
        officialUtilityPackagesChecked: readonly [{
           decision: "not-adopted-current-local-signer-is-smaller";
           package: "digital-signature-nodejs-sdk";
           repository: "https://github.com/eBay/digital-signature-nodejs-sdk";
           version: "3.0.1";
         }, {
           decision: "not-adopted-current-local-verifier-is-smaller";
           package: "event-notification-nodejs-sdk";
           repository: "https://github.com/eBay/event-notification-nodejs-sdk";
           version: "1.0.3";
        }];
        selectedApiCount: 5;
        strategy: "direct-support-slice";
     };
     notificationDocs: "https://developer.ebay.com/api-docs/commerce/notification/overview.html";
     supportSlice: {
        allowlist: {
           alias: `ebay.${string}`;
           api:   | "sell.fulfillment"
              | "commerce.message"
              | "commerce.notification"
              | "developer.key-management"
              | "commerce.identity";
           method: "GET" | "POST" | "PUT" | "DELETE";
           operationId: string;
           path: string;
        }[];
        source: "official-ebay-openapi-selected-rest-contracts";
        specs: {
           api:   | "sell.fulfillment"
              | "commerce.message"
              | "commerce.notification"
              | "developer.key-management"
              | "commerce.identity";
           operationCount: 15 | 5 | 21 | 3 | 1;
           pathCount: 14 | 5 | 12 | 2 | 1;
           specUrl:   | "https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json"
              | "https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json";
           version: "v1.20.7" | "1.0.0" | "v1.6.7" | "v1.0.0" | "v2.0.0";
        }[];
        verifiedAt: "2026-06-18";
     };
  };
  name: "eBay Marketplace";
  operations: {
     alias: `ebay.${string}`;
     capability: string;
     changesWorkflow: boolean;
     description: string;
     exposesSensitiveData: boolean;
     extension: boolean;
     label: keyof EbayMarketplaceClient;
     metadata: {
        api:   | "sell.fulfillment"
           | "commerce.message"
           | "commerce.notification"
           | "developer.key-management"
           | "commerce.identity";
        method: "GET" | "POST" | "PUT" | "DELETE";
        operationId: string;
        path: string;
        specUrl: string;
     };
     providerObject: string;
     providerOperation: string;
     requiresCredential: boolean;
     sideEffect: boolean;
  }[];
  packageName: "@cognidesk/integration-marketplace-ebay";
  privacyNotes: readonly ["eBay orders, buyer/seller conversations, shipping fulfillments, disputes, refunds, notifications, and account profile records can contain customer data, addresses, item details, and internal support context.", "OAuth tokens, keyset secrets, notification verification tokens, public-key caches, and gateway shared secrets stay server-side; Studio receives only readiness and capability metadata."];
  provider: "ebay";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates eBay notification endpoint challenges and parses signed Notification API events for SDK-user-owned marketplace workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive eBay notifications"`; `providerObjects`: readonly \[\{ `kind`: `"ebayNotification"`; `label`: `"eBay Notification"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads eBay seller orders, shipping fulfillments, payment disputes, message conversations, account profile details, and notification destinations/subscriptions."`; `exposesSensitiveData`: `true`; `label`: `"Read eBay marketplace records"`; `providerObjects`: readonly \[\{ `kind`: `"ebayOrder"`; `label`: `"eBay Order"`; \}, \{ `kind`: `"ebayShippingFulfillment"`; `label`: `"eBay Shipping Fulfillment"`; \}, \{ `kind`: `"ebayPaymentDispute"`; `label`: `"eBay Payment Dispute"`; \}, \{ `kind`: `"ebayConversation"`; `label`: `"eBay Conversation"`; \}, \{ `kind`: `"ebayUser"`; `label`: `"eBay User"`; \}, \{ `kind`: `"ebayNotificationDestination"`; `label`: `"eBay Notification Destination"`; \}, \{ `kind`: `"ebayNotificationSubscription"`; `label`: `"eBay Notification Subscription"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches orders, payment disputes, and message conversations with SDK-user-supplied eBay filters and pagination."`; `exposesSensitiveData`: `true`; `label`: `"Search eBay marketplace records"`; `providerObjects`: readonly \[\{ `kind`: `"ebayOrder"`; `label`: `"eBay Order"`; \}, \{ `kind`: `"ebayPaymentDispute"`; `label`: `"eBay Payment Dispute"`; \}, \{ `kind`: `"ebayConversation"`; `label`: `"eBay Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates eBay conversations, payment-dispute evidence or outcomes, and notification destination/subscription lifecycle when SDK-user policy permits marketplace mutations."`; `exposesSensitiveData`: `true`; `label`: `"Update eBay marketplace records"`; `providerObjects`: readonly \[\{ `kind`: `"ebayConversation"`; `label`: `"eBay Conversation"`; \}, \{ `kind`: `"ebayPaymentDispute"`; `label`: `"eBay Payment Dispute"`; \}, \{ `kind`: `"ebayNotificationDestination"`; `label`: `"eBay Notification Destination"`; \}, \{ `kind`: `"ebayNotificationSubscription"`; `label`: `"eBay Notification Subscription"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `description`: `"Deletes notification destinations, subscriptions, and filters only when the SDK user's marketplace policy allows lifecycle changes."`; `label`: `"Delete eBay marketplace resources"`; `providerObjects`: readonly \[\{ `kind`: `"ebayNotificationDestination"`; `label`: `"eBay Notification Destination"`; \}, \{ `kind`: `"ebayNotificationSubscription"`; `label`: `"eBay Notification Subscription"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates shipping fulfillments, buyer/seller messages, refunds, and payment-dispute actions only when SDK-user policy allows."`; `exposesSensitiveData`: `true`; `label`: `"Create eBay fulfillment and message records"`; `providerObjects`: readonly \[\{ `kind`: `"ebayShippingFulfillment"`; `label`: `"eBay Shipping Fulfillment"`; \}, \{ `kind`: `"ebayMessage"`; `label`: `"eBay Message"`; \}, \{ `kind`: `"ebayRefund"`; `label`: `"eBay Refund"`; \}, \{ `kind`: `"ebayNotificationDestination"`; `label`: `"eBay Notification Destination"`; \}, \{ `kind`: `"ebayNotificationSubscription"`; `label`: `"eBay Notification Subscription"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends supported Commerce Message API messages to eBay conversations selected by the SDK user's workflow."`; `exposesSensitiveData`: `true`; `label`: `"Send eBay marketplace messages"`; `providerObjects`: readonly \[\{ `kind`: `"ebayMessage"`; `label`: `"eBay Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"marketplace.notification-signature"`; `description`: `"Decodes X-EBAY-SIGNATURE, retrieves or accepts the SDK-user-cached public key, and verifies ECDSA/SHA1 payload signatures before parsing."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate eBay notification signatures"`; `providerObjects`: readonly \[\{ `kind`: `"ebaySignedNotification"`; `label`: `"eBay Signed Notification"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"marketplace.digital-signature"`; `changesWorkflow`: `true`; `description`: `"Adds Content-Digest, Signature, Signature-Input, and X-EBAY-SIGNATURE-KEY headers to issueRefund when EU/UK seller policy requires eBay HTTP Message Signatures."`; `extension`: `true`; `label`: `"Sign regulated eBay refund requests"`; `providerObjects`: readonly \[\{ `kind`: `"ebaySignedRequest"`; `label`: `"eBay Signed Request"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"marketplace.notification-challenge"`; `description`: `"Computes the SHA-256 challengeResponse from challenge code, verification token, and endpoint URL for eBay destination setup."`; `extension`: `true`; `label`: `"Answer eBay notification challenges"`; `providerObjects`: readonly \[\{ `kind`: `"ebayNotificationChallenge"`; `label`: `"eBay Notification Challenge"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"marketplace"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"eBay Sell Fulfillment API"`; `url`: `"https://developer.ebay.com/develop/api/sell/fulfillment_api"`; \}, \{ `label`: `"eBay Digital Signatures for APIs"`; `url`: `"https://developer.ebay.com/develop/guides/digital-signatures-for-apis"`; \}, \{ `label`: `"eBay Key Management API"`; `url`: `"https://developer.ebay.com/api-docs/developer/key-management/resources/methods"`; \}, \{ `label`: `"eBay Commerce Notification API resources"`; `url`: `"https://developer.ebay.com/api-docs/commerce/notification/resources/methods"`; \}, \{ `label`: `"eBay Commerce Notification API overview"`; `url`: `"https://developer.ebay.com/api-docs/commerce/notification/overview.html"`; \}, \{ `label`: `"eBay Notification getPublicKey"`; `url`: `"https://developer.ebay.com/api-docs/commerce/notification/resources/public_key/methods/getPublicKey"`; \}, \{ `label`: `"eBay OAuth client credentials grant flow"`; `url`: `"https://developer.ebay.com/develop/guides-v2/authorization#the-client-credentials-grant-flow"`; \}, \{ `label`: `"eBay Commerce Message API"`; `url`: `"https://developer.ebay.com/api-docs/commerce/message/resources/methods"`; \}, \{ `label`: `"eBay OpenAPI specifications"`; `url`: `"https://developer.ebay.com/api-docs/static/gs_take-advantage-of-openapi.html"`; \}, \{ `label`: `"eBay Fulfillment OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json"`; \}, \{ `label`: `"eBay Commerce Message OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json"`; \}, \{ `label`: `"eBay Commerce Notification OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json"`; \}, \{ `label`: `"eBay Developer Key Management OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json"`; \}, \{ `label`: `"eBay Commerce Identity OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json"`; \}\]; `notes`: readonly \[`"Coverage is limited to selected eBay marketplace support primitives: Sell Fulfillment order, shipping fulfillment, refund, and payment-dispute operations; Sell Commerce Message conversations; Commerce Notification destination/subscription/config/public-key operations; notification challenges; and signed notification parsing."`, `"The selected REST slice now covers every documented operation in the currently implemented Fulfillment, Commerce Message, Commerce Notification, Developer Key Management, and Commerce Identity resource groups, but does not claim full eBay platform coverage."`, `"The package does not implement full eBay API coverage for inventory/listing management, account policy breadth, marketing/promotions, analytics/reporting, taxonomy/metadata, media, translation, buy APIs, finances beyond supported fulfillment dispute routes, Negotiation/Leads/Charity/Media APIs, or older Trading/Browse/Finding surfaces."`, `"The Fulfillment API issueRefund path supports eBay HTTP Message Signature headers for EU/UK seller policy, but the SDK user must provide Key Management API signing material or a request signer."`, `"The SDK user owns OAuth grant/scopes, marketplace selection, notification topic and filter policy, public-key cache freshness, refund/dispute authority, outbound messaging policy, consent, redaction, and retention decisions."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"eBay Sell Fulfillment API"`; `url`: `"https://developer.ebay.com/develop/api/sell/fulfillment_api"`; \}, \{ `label`: `"eBay Digital Signatures for APIs"`; `url`: `"https://developer.ebay.com/develop/guides/digital-signatures-for-apis"`; \}, \{ `label`: `"eBay Key Management API"`; `url`: `"https://developer.ebay.com/api-docs/developer/key-management/resources/methods"`; \}, \{ `label`: `"eBay Commerce Notification API resources"`; `url`: `"https://developer.ebay.com/api-docs/commerce/notification/resources/methods"`; \}, \{ `label`: `"eBay Commerce Notification API overview"`; `url`: `"https://developer.ebay.com/api-docs/commerce/notification/overview.html"`; \}, \{ `label`: `"eBay Notification getPublicKey"`; `url`: `"https://developer.ebay.com/api-docs/commerce/notification/resources/public_key/methods/getPublicKey"`; \}, \{ `label`: `"eBay OAuth client credentials grant flow"`; `url`: `"https://developer.ebay.com/develop/guides-v2/authorization#the-client-credentials-grant-flow"`; \}, \{ `label`: `"eBay Commerce Message API"`; `url`: `"https://developer.ebay.com/api-docs/commerce/message/resources/methods"`; \}, \{ `label`: `"eBay OpenAPI specifications"`; `url`: `"https://developer.ebay.com/api-docs/static/gs_take-advantage-of-openapi.html"`; \}, \{ `label`: `"eBay Fulfillment OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json"`; \}, \{ `label`: `"eBay Commerce Message OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json"`; \}, \{ `label`: `"eBay Commerce Notification OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json"`; \}, \{ `label`: `"eBay Developer Key Management OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json"`; \}, \{ `label`: `"eBay Commerce Identity OpenAPI 3 JSON"`; `url`: `"https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to selected eBay marketplace support primitives: Sell Fulfillment order, shipping fulfillment, refund, and payment-dispute operations; Sell Commerce Message conversations; Commerce Notification destination/subscription/config/public-key operations; notification challenges; and signed notification parsing."`, `"The selected REST slice now covers every documented operation in the currently implemented Fulfillment, Commerce Message, Commerce Notification, Developer Key Management, and Commerce Identity resource groups, but does not claim full eBay platform coverage."`, `"The package does not implement full eBay API coverage for inventory/listing management, account policy breadth, marketing/promotions, analytics/reporting, taxonomy/metadata, media, translation, buy APIs, finances beyond supported fulfillment dispute routes, Negotiation/Leads/Charity/Media APIs, or older Trading/Browse/Finding surfaces."`, `"The Fulfillment API issueRefund path supports eBay HTTP Message Signature headers for EU/UK seller policy, but the SDK user must provide Key Management API signing material or a request signer."`, `"The SDK user owns OAuth grant/scopes, marketplace selection, notification topic and filter policy, public-key cache freshness, refund/dispute authority, outbound messaging policy, consent, redaction, and retention decisions."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side OAuth user token with SDK-user-selected Sell, Commerce Message, Identity, and Notification scopes."`; `id`: `"ebay-oauth-access-token"`; `label`: `"eBay OAuth user access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"https://api.ebay.com/oauth/api_scope/sell.fulfillment"`, `"https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly"`, `"https://api.ebay.com/oauth/api_scope/commerce.message"`, `"https://api.ebay.com/oauth/api_scope/commerce.identity.readonly"`, `"https://api.ebay.com/oauth/api_scope/commerce.notification.subscription"`\]; \}, \{ `description`: `"Client-credentials OAuth token with https://api.ebay.com/oauth/api_scope for Notification public-key retrieval."`; `id`: `"ebay-application-access-token"`; `label`: `"eBay application access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"https://api.ebay.com/oauth/api_scope"`\]; \}, \{ `description`: `"Application keyset client ID owned by the SDK user for OAuth and notification ownership metadata."`; `id`: `"ebay-client-id"`; `label`: `"eBay application client ID"`; `required`: `true`; \}, \{ `description`: `"Application keyset client secret kept server-side by the SDK user for OAuth token lifecycle operations."`; `id`: `"ebay-client-secret"`; `label`: `"eBay application client secret"`; `required`: `true`; \}, \{ `description`: `"SDK-user-selected marketplace such as EBAY_US or EBAY_DE, forwarded through X-EBAY-C-MARKETPLACE-ID where supported."`; `id`: `"ebay-marketplace-id"`; `label`: `"eBay marketplace ID"`; `required`: `true`; \}, \{ `description`: `"Destination verification token used to answer eBay challenge_code requests for notification endpoints."`; `id`: `"ebay-notification-verification-token"`; `label`: `"eBay notification verification token"`; `required`: `true`; \}, \{ `description`: `"Key Management API private key and public-key JWE required for issueRefund when EU/UK seller or SDK policy requires HTTP Message Signatures."`; `id`: `"ebay-digital-signature-key"`; `label`: `"eBay digital signature keypair"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"marketplace.ebay"` |
| `limitations` | readonly \[`"The SDK user chooses marketplaces, OAuth flows, scopes, notification topics, subscription filters, operator visibility, outbound messaging policy, refund/dispute rules, retention, consent, and redaction."`, `"Some eBay APIs are entitlement, marketplace, scope, topic, or sandbox limited; this package exposes typed REST foundations and does not decide whether a seller is eligible for a specific action."`, `"The issueRefund method is fail-closed when EU/UK seller or SDK policy requires digital signatures and no eBay request signer or Key Management API signing key is configured."`, `"Notification signature verification requires a valid eBay public key retrieved by key ID from the Notification API or a SDK-user-provided verifier/cache implementation."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `conversationBulkUpdate`: `"typed-update"`; `conversations`: `"typed-read-search-update"`; `digitalSignatures`: `"typed-sign"`; `inventoryMarketingAnalyticsBuyApis`: `"provider-supported-not-typed"`; `keyManagementSigningKeys`: `"typed-create-read-list"`; `messages`: `"typed-send"`; `notificationChallenge`: `"typed-response"`; `notificationConfig`: `"typed-read-update"`; `notificationDestinations`: `"typed-create-read-list-update-delete"`; `notificationFilters`: `"typed-create-read-delete"`; `notificationSignatures`: `"typed-verify"`; `notificationSubscriptions`: `"typed-create-read-list-update-enable-disable-test-delete"`; `notificationTopics`: `"typed-read-list"`; `orders`: `"typed-read-search"`; `paymentDisputeEvidence`: `"typed-read-upload-add-update"`; `paymentDisputes`: `"typed-read-search-update"`; `refunds`: `"typed-create"`; `shippingFulfillments`: `"typed-create-read-list"`; `userProfile`: `"typed-read"`; \}; `docs`: `"https://developer.ebay.com/api-docs"`; `fulfillmentDocs`: `"https://developer.ebay.com/api-docs/sell/fulfillment/overview.html"`; `generatedProviderSliceVerification`: \{ `apiVersion`: `string`; `coverageArtifact`: `"docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json"`; `documentedOperationCount`: `45`; `documentedPathCount`: `34`; `functionCatalogArtifact`: `"docs/provider-coverage/ebay-selected-api-2026-06-18.functions.json"`; `generatedFunctionCount`: `45`; `implementedOperationCount`: `45`; `operationCatalogArtifact`: `"docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json"`; `provider`: `"ebay-selected-rest"`; `unimplementedOperationCount`: `0`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `checkedAt`: `"2026-06-18"`; `communityPackagesChecked`: readonly \[\{ `decision`: `"not-adopted-community-client-not-official-default"`; `package`: `"ebay-api"`; `repository`: `"https://github.com/hendt/ebay-api"`; `version`: `"9.5.2"`; \}\]; `officialUtilityPackagesChecked`: readonly \[\{ `decision`: `"not-adopted-current-local-signer-is-smaller"`; `package`: `"digital-signature-nodejs-sdk"`; `repository`: `"https://github.com/eBay/digital-signature-nodejs-sdk"`; `version`: `"3.0.1"`; \}, \{ `decision`: `"not-adopted-current-local-verifier-is-smaller"`; `package`: `"event-notification-nodejs-sdk"`; `repository`: `"https://github.com/eBay/event-notification-nodejs-sdk"`; `version`: `"1.0.3"`; \}\]; `selectedApiCount`: `5`; `strategy`: `"direct-support-slice"`; \}; `notificationDocs`: `"https://developer.ebay.com/api-docs/commerce/notification/overview.html"`; `supportSlice`: \{ `allowlist`: \{ `alias`: `` `ebay.${string}` ``; `api`: \| `"sell.fulfillment"` \| `"commerce.message"` \| `"commerce.notification"` \| `"developer.key-management"` \| `"commerce.identity"`; `method`: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"`; `operationId`: `string`; `path`: `string`; \}[]; `source`: `"official-ebay-openapi-selected-rest-contracts"`; `specs`: \{ `api`: \| `"sell.fulfillment"` \| `"commerce.message"` \| `"commerce.notification"` \| `"developer.key-management"` \| `"commerce.identity"`; `operationCount`: `15` \| `5` \| `21` \| `3` \| `1`; `pathCount`: `14` \| `5` \| `12` \| `2` \| `1`; `specUrl`: \| `"https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json"`; `version`: `"v1.20.7"` \| `"1.0.0"` \| `"v1.6.7"` \| `"v1.0.0"` \| `"v2.0.0"`; \}[]; `verifiedAt`: `"2026-06-18"`; \}; \} |
| `metadata.channelCoverage` | \{ `conversationBulkUpdate`: `"typed-update"`; `conversations`: `"typed-read-search-update"`; `digitalSignatures`: `"typed-sign"`; `inventoryMarketingAnalyticsBuyApis`: `"provider-supported-not-typed"`; `keyManagementSigningKeys`: `"typed-create-read-list"`; `messages`: `"typed-send"`; `notificationChallenge`: `"typed-response"`; `notificationConfig`: `"typed-read-update"`; `notificationDestinations`: `"typed-create-read-list-update-delete"`; `notificationFilters`: `"typed-create-read-delete"`; `notificationSignatures`: `"typed-verify"`; `notificationSubscriptions`: `"typed-create-read-list-update-enable-disable-test-delete"`; `notificationTopics`: `"typed-read-list"`; `orders`: `"typed-read-search"`; `paymentDisputeEvidence`: `"typed-read-upload-add-update"`; `paymentDisputes`: `"typed-read-search-update"`; `refunds`: `"typed-create"`; `shippingFulfillments`: `"typed-create-read-list"`; `userProfile`: `"typed-read"`; \} |
| `metadata.channelCoverage.conversationBulkUpdate` | `"typed-update"` |
| `metadata.channelCoverage.conversations` | `"typed-read-search-update"` |
| `metadata.channelCoverage.digitalSignatures` | `"typed-sign"` |
| `metadata.channelCoverage.inventoryMarketingAnalyticsBuyApis` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.keyManagementSigningKeys` | `"typed-create-read-list"` |
| `metadata.channelCoverage.messages` | `"typed-send"` |
| `metadata.channelCoverage.notificationChallenge` | `"typed-response"` |
| `metadata.channelCoverage.notificationConfig` | `"typed-read-update"` |
| `metadata.channelCoverage.notificationDestinations` | `"typed-create-read-list-update-delete"` |
| `metadata.channelCoverage.notificationFilters` | `"typed-create-read-delete"` |
| `metadata.channelCoverage.notificationSignatures` | `"typed-verify"` |
| `metadata.channelCoverage.notificationSubscriptions` | `"typed-create-read-list-update-enable-disable-test-delete"` |
| `metadata.channelCoverage.notificationTopics` | `"typed-read-list"` |
| `metadata.channelCoverage.orders` | `"typed-read-search"` |
| `metadata.channelCoverage.paymentDisputeEvidence` | `"typed-read-upload-add-update"` |
| `metadata.channelCoverage.paymentDisputes` | `"typed-read-search-update"` |
| `metadata.channelCoverage.refunds` | `"typed-create"` |
| `metadata.channelCoverage.shippingFulfillments` | `"typed-create-read-list"` |
| `metadata.channelCoverage.userProfile` | `"typed-read"` |
| `metadata.docs` | `"https://developer.ebay.com/api-docs"` |
| `metadata.fulfillmentDocs` | `"https://developer.ebay.com/api-docs/sell/fulfillment/overview.html"` |
| `metadata.generatedProviderSliceVerification` | \{ `apiVersion`: `string`; `coverageArtifact`: `"docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json"`; `documentedOperationCount`: `45`; `documentedPathCount`: `34`; `functionCatalogArtifact`: `"docs/provider-coverage/ebay-selected-api-2026-06-18.functions.json"`; `generatedFunctionCount`: `45`; `implementedOperationCount`: `45`; `operationCatalogArtifact`: `"docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json"`; `provider`: `"ebay-selected-rest"`; `unimplementedOperationCount`: `0`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.generatedProviderSliceVerification.apiVersion` | `string` |
| `metadata.generatedProviderSliceVerification.coverageArtifact` | `"docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json"` |
| `metadata.generatedProviderSliceVerification.documentedOperationCount` | `45` |
| `metadata.generatedProviderSliceVerification.documentedPathCount` | `34` |
| `metadata.generatedProviderSliceVerification.functionCatalogArtifact` | `"docs/provider-coverage/ebay-selected-api-2026-06-18.functions.json"` |
| `metadata.generatedProviderSliceVerification.generatedFunctionCount` | `45` |
| `metadata.generatedProviderSliceVerification.implementedOperationCount` | `45` |
| `metadata.generatedProviderSliceVerification.operationCatalogArtifact` | `"docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json"` |
| `metadata.generatedProviderSliceVerification.provider` | `"ebay-selected-rest"` |
| `metadata.generatedProviderSliceVerification.unimplementedOperationCount` | `0` |
| `metadata.generatedProviderSliceVerification.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `checkedAt`: `"2026-06-18"`; `communityPackagesChecked`: readonly \[\{ `decision`: `"not-adopted-community-client-not-official-default"`; `package`: `"ebay-api"`; `repository`: `"https://github.com/hendt/ebay-api"`; `version`: `"9.5.2"`; \}\]; `officialUtilityPackagesChecked`: readonly \[\{ `decision`: `"not-adopted-current-local-signer-is-smaller"`; `package`: `"digital-signature-nodejs-sdk"`; `repository`: `"https://github.com/eBay/digital-signature-nodejs-sdk"`; `version`: `"3.0.1"`; \}, \{ `decision`: `"not-adopted-current-local-verifier-is-smaller"`; `package`: `"event-notification-nodejs-sdk"`; `repository`: `"https://github.com/eBay/event-notification-nodejs-sdk"`; `version`: `"1.0.3"`; \}\]; `selectedApiCount`: `5`; `strategy`: `"direct-support-slice"`; \} |
| `metadata.implementation.checkedAt` | `"2026-06-18"` |
| `metadata.implementation.communityPackagesChecked` | readonly \[\{ `decision`: `"not-adopted-community-client-not-official-default"`; `package`: `"ebay-api"`; `repository`: `"https://github.com/hendt/ebay-api"`; `version`: `"9.5.2"`; \}\] |
| `metadata.implementation.officialUtilityPackagesChecked` | readonly \[\{ `decision`: `"not-adopted-current-local-signer-is-smaller"`; `package`: `"digital-signature-nodejs-sdk"`; `repository`: `"https://github.com/eBay/digital-signature-nodejs-sdk"`; `version`: `"3.0.1"`; \}, \{ `decision`: `"not-adopted-current-local-verifier-is-smaller"`; `package`: `"event-notification-nodejs-sdk"`; `repository`: `"https://github.com/eBay/event-notification-nodejs-sdk"`; `version`: `"1.0.3"`; \}\] |
| `metadata.implementation.selectedApiCount` | `5` |
| `metadata.implementation.strategy` | `"direct-support-slice"` |
| `metadata.notificationDocs` | `"https://developer.ebay.com/api-docs/commerce/notification/overview.html"` |
| `metadata.supportSlice` | \{ `allowlist`: \{ `alias`: `` `ebay.${string}` ``; `api`: \| `"sell.fulfillment"` \| `"commerce.message"` \| `"commerce.notification"` \| `"developer.key-management"` \| `"commerce.identity"`; `method`: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"`; `operationId`: `string`; `path`: `string`; \}[]; `source`: `"official-ebay-openapi-selected-rest-contracts"`; `specs`: \{ `api`: \| `"sell.fulfillment"` \| `"commerce.message"` \| `"commerce.notification"` \| `"developer.key-management"` \| `"commerce.identity"`; `operationCount`: `15` \| `5` \| `21` \| `3` \| `1`; `pathCount`: `14` \| `5` \| `12` \| `2` \| `1`; `specUrl`: \| `"https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json"`; `version`: `"v1.20.7"` \| `"1.0.0"` \| `"v1.6.7"` \| `"v1.0.0"` \| `"v2.0.0"`; \}[]; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.supportSlice.allowlist` | \{ `alias`: `` `ebay.${string}` ``; `api`: \| `"sell.fulfillment"` \| `"commerce.message"` \| `"commerce.notification"` \| `"developer.key-management"` \| `"commerce.identity"`; `method`: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"`; `operationId`: `string`; `path`: `string`; \}[] |
| `metadata.supportSlice.source` | `"official-ebay-openapi-selected-rest-contracts"` |
| `metadata.supportSlice.specs` | \{ `api`: \| `"sell.fulfillment"` \| `"commerce.message"` \| `"commerce.notification"` \| `"developer.key-management"` \| `"commerce.identity"`; `operationCount`: `15` \| `5` \| `21` \| `3` \| `1`; `pathCount`: `14` \| `5` \| `12` \| `2` \| `1`; `specUrl`: \| `"https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json"` \| `"https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json"`; `version`: `"v1.20.7"` \| `"1.0.0"` \| `"v1.6.7"` \| `"v1.0.0"` \| `"v2.0.0"`; \}[] |
| `metadata.supportSlice.verifiedAt` | `"2026-06-18"` |
| `name` | `"eBay Marketplace"` |
| `operations` | \{ `alias`: `` `ebay.${string}` ``; `capability`: `string`; `changesWorkflow`: `boolean`; `description`: `string`; `exposesSensitiveData`: `boolean`; `extension`: `boolean`; `label`: keyof [`EbayMarketplaceClient`](#ebaymarketplaceclient); `metadata`: \{ `api`: \| `"sell.fulfillment"` \| `"commerce.message"` \| `"commerce.notification"` \| `"developer.key-management"` \| `"commerce.identity"`; `method`: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"`; `operationId`: `string`; `path`: `string`; `specUrl`: `string`; \}; `providerObject`: `string`; `providerOperation`: `string`; `requiresCredential`: `boolean`; `sideEffect`: `boolean`; \}[] |
| `packageName` | `"@cognidesk/integration-marketplace-ebay"` |
| `privacyNotes` | readonly \[`"eBay orders, buyer/seller conversations, shipping fulfillments, disputes, refunds, notifications, and account profile records can contain customer data, addresses, item details, and internal support context."`, `"OAuth tokens, keyset secrets, notification verification tokens, public-key caches, and gateway shared secrets stay server-side; Studio receives only readiness and capability metadata."`\] |
| `provider` | `"ebay"` |
| `trustLevel` | `"official"` |

***

### ebaySelectedApiFunctionCatalog

```ts
const ebaySelectedApiFunctionCatalog: keyof EbayMarketplaceClient[];
```

***

### ebaySelectedApiOperationCatalog

```ts
const ebaySelectedApiOperationCatalog: readonly EbaySelectedApiOperation[];
```

***

### ebaySelectedApiSpecs

```ts
const ebaySelectedApiSpecs: readonly [{
  api: "sell.fulfillment";
  docsUrl: "https://developer.ebay.com/develop/api/sell/fulfillment_api";
  operationCount: 15;
  pathCount: 14;
  specUrl: "https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json";
  title: "Fulfillment API";
  version: "v1.20.7";
}, {
  api: "commerce.message";
  docsUrl: "https://developer.ebay.com/api-docs/commerce/message/resources/methods";
  operationCount: 5;
  pathCount: 5;
  specUrl: "https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json";
  title: "Message API";
  version: "1.0.0";
}, {
  api: "commerce.notification";
  docsUrl: "https://developer.ebay.com/api-docs/commerce/notification/resources/methods";
  operationCount: 21;
  pathCount: 12;
  specUrl: "https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json";
  title: "Notification API";
  version: "v1.6.7";
}, {
  api: "developer.key-management";
  docsUrl: "https://developer.ebay.com/api-docs/developer/key-management/resources/methods";
  operationCount: 3;
  pathCount: 2;
  specUrl: "https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json";
  title: "Key Management API";
  version: "v1.0.0";
}, {
  api: "commerce.identity";
  docsUrl: "https://developer.ebay.com/api-docs/commerce/identity/resources/user/methods/getUser";
  operationCount: 1;
  pathCount: 1;
  specUrl: "https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json";
  title: "Identity API";
  version: "v2.0.0";
}];
```

## Functions

### createEbayDigitalSignatureHeaders()

```ts
function createEbayDigitalSignatureHeaders(input): Record<string, string>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`EbaySignedRequestInput`](#ebaysignedrequestinput) & [`EbayDigitalSignatureOptions`](#ebaydigitalsignatureoptions) |

#### Returns

`Record`\<`string`, `string`\>

***

### createEbayMarketplaceClient()

```ts
function createEbayMarketplaceClient(options): EbayMarketplaceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`EbayMarketplaceClientOptions`](#ebaymarketplaceclientoptions) |

#### Returns

[`EbayMarketplaceClient`](#ebaymarketplaceclient)

***

### createEbayMarketplaceLiveChecks()

```ts
function createEbayMarketplaceLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        marketplaceId: string;
        userId: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`EbayLiveCheckOptions`](#ebaylivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `marketplaceId`: `string`;
        `userId`: `string`;
     \};
  \}\>;
\}[]

***

### createEbayNotificationChallengeResponse()

```ts
function createEbayNotificationChallengeResponse(input): {
  challengeResponse: string;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `challengeCode`: `string`; `endpoint`: `string`; `verificationToken`: `string`; \} |
| `input.challengeCode` | `string` |
| `input.endpoint` | `string` |
| `input.verificationToken` | `string` |

#### Returns

```ts
{
  challengeResponse: string;
}
```

| Name | Type |
| ------ | ------ |
| `challengeResponse` | `string` |

***

### ebayMarketplaceCredentialStatuses()

```ts
function ebayMarketplaceCredentialStatuses(input): {
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
| `input` | [`EbayCredentialStatusInput`](#ebaycredentialstatusinput) |

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

### ebayMarketplaceOperationAlias()

```ts
function ebayMarketplaceOperationAlias(functionName): `ebay.${string}`;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `functionName` | `string` |

#### Returns

`` `ebay.${string}` ``

***

### parseEbayNotificationSignatureHeader()

```ts
function parseEbayNotificationSignatureHeader(header): EbayNotificationSignatureHeader;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `header` | `string` |

#### Returns

[`EbayNotificationSignatureHeader`](#ebaynotificationsignatureheader)

***

### parseEbayNotificationWebhook()

```ts
function parseEbayNotificationWebhook(request, options?): Promise<EbayNotificationWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseEbayNotificationWebhookOptions`](#parseebaynotificationwebhookoptions) |

#### Returns

`Promise`\<[`EbayNotificationWebhook`](#ebaynotificationwebhook)\>

***

### verifyEbayNotificationSignature()

```ts
function verifyEbayNotificationSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `publicKey`: `string`; `rawBody`: `string` \| `Buffer`\<`ArrayBufferLike`\>; `signatureHeader`: \| `string` \| [`EbayNotificationSignatureHeader`](#ebaynotificationsignatureheader); \} |
| `input.publicKey` | `string` |
| `input.rawBody` | `string` \| `Buffer`\<`ArrayBufferLike`\> |
| `input.signatureHeader` | \| `string` \| [`EbayNotificationSignatureHeader`](#ebaynotificationsignatureheader) |

#### Returns

`boolean`
