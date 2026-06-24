# integrations/marketplace/amazon/dist

## Interfaces

### AmazonAddress

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### AddressLine1?

```ts
optional AddressLine1?: string;
```

##### AddressLine2?

```ts
optional AddressLine2?: string;
```

##### AddressLine3?

```ts
optional AddressLine3?: string;
```

##### AddressType?

```ts
optional AddressType?: string;
```

##### City?

```ts
optional City?: string;
```

##### CountryCode?

```ts
optional CountryCode?: string;
```

##### County?

```ts
optional County?: string;
```

##### District?

```ts
optional District?: string;
```

##### Name?

```ts
optional Name?: string;
```

##### Phone?

```ts
optional Phone?: string;
```

##### PostalCode?

```ts
optional PostalCode?: string;
```

##### StateOrRegion?

```ts
optional StateOrRegion?: string;
```

***

### AmazonAwsSigningOptions

#### Properties

##### accessKeyId

```ts
accessKeyId: string;
```

##### region

```ts
region: string;
```

##### secretAccessKey

```ts
secretAccessKey: string;
```

##### service?

```ts
optional service?: string;
```

##### sessionToken?

```ts
optional sessionToken?: string;
```

***

### AmazonBuyerInfo

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### BuyerCounty?

```ts
optional BuyerCounty?: string;
```

##### BuyerEmail?

```ts
optional BuyerEmail?: string;
```

##### BuyerName?

```ts
optional BuyerName?: string;
```

##### BuyerTaxInfo?

```ts
optional BuyerTaxInfo?: {
  CompanyLegalName?: string;
  TaxClassifications?: {
     Name?: string;
     Value?: string;
  }[];
  TaxingRegion?: string;
};
```

###### CompanyLegalName?

```ts
optional CompanyLegalName?: string;
```

###### TaxClassifications?

```ts
optional TaxClassifications?: {
  Name?: string;
  Value?: string;
}[];
```

###### TaxingRegion?

```ts
optional TaxingRegion?: string;
```

##### PurchaseOrderNumber?

```ts
optional PurchaseOrderNumber?: string;
```

***

### AmazonCreateSubscriptionInput

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### destinationId

```ts
destinationId: string;
```

##### ~~marketplaceIds?~~

```ts
optional marketplaceIds?: string[];
```

###### Deprecated

Amazon Notifications createSubscription does not accept marketplaceIds as a query parameter. Use processingDirective.eventFilter when supported by the notification type.

##### notificationType

```ts
notificationType: string;
```

##### payloadVersion?

```ts
optional payloadVersion?: string;
```

##### processingDirective?

```ts
optional processingDirective?: AmazonMarketplaceJsonObject;
```

***

### AmazonCredentialStatusInput

#### Properties

##### accessTokenConfigured?

```ts
optional accessTokenConfigured?: boolean;
```

##### awsRegion?

```ts
optional awsRegion?: string;
```

##### awsRoleConfigured?

```ts
optional awsRoleConfigured?: boolean;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### lwaClientConfigured?

```ts
optional lwaClientConfigured?: boolean;
```

##### marketplaceId?

```ts
optional marketplaceId?: string;
```

##### notificationDestinationConfigured?

```ts
optional notificationDestinationConfigured?: boolean;
```

##### notificationSignatureConfigured?

```ts
optional notificationSignatureConfigured?: boolean;
```

##### refreshTokenConfigured?

```ts
optional refreshTokenConfigured?: boolean;
```

##### scopes?

```ts
optional scopes?: string[];
```

***

### AmazonDeleteSubscriptionInput

#### Properties

##### notificationType

```ts
notificationType: string;
```

##### subscriptionId

```ts
subscriptionId: string;
```

***

### AmazonGetSubscriptionInput

#### Properties

##### notificationType

```ts
notificationType: string;
```

##### payloadVersion?

```ts
optional payloadVersion?: string;
```

***

### AmazonKnownOperationRequestMap

#### Properties

##### notifications:createSubscription

```ts
notifications:createSubscription: AmazonOperationRequestInput & {
  body: Omit<AmazonCreateSubscriptionInput, "notificationType">;
  pathParams: {
     notificationType: string;
  };
};
```

###### Type Declaration

###### body

```ts
body: Omit<AmazonCreateSubscriptionInput, "notificationType">;
```

###### pathParams

```ts
pathParams: {
  notificationType: string;
};
```

###### pathParams.notificationType

```ts
notificationType: string;
```

##### notifications:deleteSubscriptionById

```ts
notifications:deleteSubscriptionById: AmazonOperationRequestInput & {
  pathParams: {
     notificationType: string;
     subscriptionId: string;
  };
};
```

###### Type Declaration

###### pathParams

```ts
pathParams: {
  notificationType: string;
  subscriptionId: string;
};
```

###### pathParams.notificationType

```ts
notificationType: string;
```

###### pathParams.subscriptionId

```ts
subscriptionId: string;
```

##### notifications:getDestination

```ts
notifications:getDestination: AmazonOperationRequestInput & {
  pathParams: {
     destinationId: string;
  };
};
```

###### Type Declaration

###### pathParams

```ts
pathParams: {
  destinationId: string;
};
```

###### pathParams.destinationId

```ts
destinationId: string;
```

##### notifications:getDestinations

```ts
notifications:getDestinations: AmazonOperationRequestInput;
```

##### notifications:getSubscription

```ts
notifications:getSubscription: AmazonOperationRequestInput & {
  pathParams: {
     notificationType: string;
  };
  query?: {
     payloadVersion?: string;
  };
};
```

###### Type Declaration

###### pathParams

```ts
pathParams: {
  notificationType: string;
};
```

###### pathParams.notificationType

```ts
notificationType: string;
```

###### query?

```ts
optional query?: {
  payloadVersion?: string;
};
```

###### query.payloadVersion?

```ts
optional payloadVersion?: string;
```

##### ordersV0:getOrder

```ts
ordersV0:getOrder: AmazonOperationRequestInput & {
  pathParams: {
     orderId: string;
  };
};
```

###### Type Declaration

###### pathParams

```ts
pathParams: {
  orderId: string;
};
```

###### pathParams.orderId

```ts
orderId: string;
```

##### ordersV0:getOrderItems

```ts
ordersV0:getOrderItems: AmazonOperationRequestInput & {
  pathParams: {
     orderId: string;
  };
  query?: {
     NextToken?: string;
  };
};
```

###### Type Declaration

###### pathParams

```ts
pathParams: {
  orderId: string;
};
```

###### pathParams.orderId

```ts
orderId: string;
```

###### query?

```ts
optional query?: {
  NextToken?: string;
};
```

###### query.NextToken?

```ts
optional NextToken?: string;
```

##### ordersV0:getOrders

```ts
ordersV0:getOrders: AmazonOperationRequestInput & {
  query?: AmazonOrderSearchInput;
};
```

###### Type Declaration

###### query?

```ts
optional query?: AmazonOrderSearchInput;
```

##### sellers:getMarketplaceParticipations

```ts
sellers:getMarketplaceParticipations: AmazonOperationRequestInput;
```

##### tokens\_2021-03-01:createRestrictedDataToken

```ts
tokens_2021-03-01:createRestrictedDataToken: AmazonOperationRequestInput & {
  body: AmazonRestrictedDataTokenRequest;
};
```

###### Type Declaration

###### body

```ts
body: AmazonRestrictedDataTokenRequest;
```

***

### AmazonKnownOperationResponseMap

#### Properties

##### notifications:createSubscription

```ts
notifications:createSubscription: AmazonNotificationSubscriptionResponse;
```

##### notifications:deleteSubscriptionById

```ts
notifications:deleteSubscriptionById: Record<string, never>;
```

##### notifications:getDestination

```ts
notifications:getDestination: AmazonNotificationDestinationResponse;
```

##### notifications:getDestinations

```ts
notifications:getDestinations: AmazonNotificationDestinationsResponse;
```

##### notifications:getSubscription

```ts
notifications:getSubscription: AmazonNotificationSubscriptionResponse;
```

##### ordersV0:getOrder

```ts
ordersV0:getOrder: AmazonOrderResponse;
```

##### ordersV0:getOrderItems

```ts
ordersV0:getOrderItems: AmazonOrderItemsResponse;
```

##### ordersV0:getOrders

```ts
ordersV0:getOrders: AmazonOrdersResponse;
```

##### sellers:getMarketplaceParticipations

```ts
sellers:getMarketplaceParticipations: AmazonMarketplaceParticipationsResponse;
```

##### tokens\_2021-03-01:createRestrictedDataToken

```ts
tokens_2021-03-01:createRestrictedDataToken: AmazonRestrictedDataTokenResponse;
```

***

### AmazonLiveCheckOptions

#### Extends

- [`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`accessToken`](#accesstoken-1)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### aws?

```ts
optional aws?: AmazonAwsSigningOptions;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`aws`](#aws-1)

##### client?

```ts
optional client?: Pick<AmazonMarketplaceClient, "getMarketplaceParticipations">;
```

##### endpoint?

```ts
optional endpoint?: AmazonSpApiEndpoint;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`endpoint`](#endpoint-1)

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

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`fetch`](#fetch-1)

##### lwaClientId?

```ts
optional lwaClientId?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`lwaClientId`](#lwaclientid-1)

##### lwaClientSecret?

```ts
optional lwaClientSecret?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`lwaClientSecret`](#lwaclientsecret-1)

##### lwaTokenUrl?

```ts
optional lwaTokenUrl?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`lwaTokenUrl`](#lwatokenurl-1)

##### marketplaceId?

```ts
optional marketplaceId?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`marketplaceId`](#marketplaceid-2)

##### refreshToken?

```ts
optional refreshToken?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`refreshToken`](#refreshtoken-1)

##### region?

```ts
optional region?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`region`](#region-2)

##### restrictedDataToken?

```ts
optional restrictedDataToken?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`restrictedDataToken`](#restricteddatatoken-1)

##### restrictedDataTokenProvider?

```ts
optional restrictedDataTokenProvider?: (input) =>
  | string
  | AmazonRestrictedDataTokenResponse
  | Promise<
  | string
| AmazonRestrictedDataTokenResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AmazonRestrictedDataTokenRequest`](#amazonrestricteddatatokenrequest) |

###### Returns

  \| `string`
  \| [`AmazonRestrictedDataTokenResponse`](#amazonrestricteddatatokenresponse)
  \| `Promise`\<
  \| `string`
  \| [`AmazonRestrictedDataTokenResponse`](#amazonrestricteddatatokenresponse)\>

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`restrictedDataTokenProvider`](#restricteddatatokenprovider-1)

##### restrictedDataTokenTargetApplication?

```ts
optional restrictedDataTokenTargetApplication?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`restrictedDataTokenTargetApplication`](#restricteddatatokentargetapplication-1)

##### userAgent?

```ts
optional userAgent?: string;
```

###### Inherited from

[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions).[`userAgent`](#useragent-1)

***

### AmazonLwaTokenResponse

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### access\_token?

```ts
optional access_token?: string;
```

##### expires\_in?

```ts
optional expires_in?: number;
```

##### refresh\_token?

```ts
optional refresh_token?: string;
```

##### token\_type?

```ts
optional token_type?: string;
```

***

### AmazonMarketplaceClient

#### Methods

##### createProductReviewAndSellerFeedbackSolicitation()

```ts
createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds?): Promise<AmazonResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amazonOrderId` | `string` |
| `marketplaceIds?` | `string`[] |

###### Returns

`Promise`\<[`AmazonResource`](#amazonresource)\>

##### createRestrictedDataToken()

```ts
createRestrictedDataToken(input): Promise<AmazonRestrictedDataTokenResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AmazonRestrictedDataTokenRequest`](#amazonrestricteddatatokenrequest) |

###### Returns

`Promise`\<[`AmazonRestrictedDataTokenResponse`](#amazonrestricteddatatokenresponse)\>

##### createSubscription()

```ts
createSubscription(input): Promise<AmazonNotificationSubscriptionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AmazonCreateSubscriptionInput`](#amazoncreatesubscriptioninput) |

###### Returns

`Promise`\<[`AmazonNotificationSubscriptionResponse`](#amazonnotificationsubscriptionresponse)\>

##### deleteSubscription()

```ts
deleteSubscription(input): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AmazonDeleteSubscriptionInput`](#amazondeletesubscriptioninput) |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### getDestination()

```ts
getDestination(destinationId): Promise<AmazonNotificationDestinationResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `destinationId` | `string` |

###### Returns

`Promise`\<[`AmazonNotificationDestinationResponse`](#amazonnotificationdestinationresponse)\>

##### getDestinations()

```ts
getDestinations(): Promise<AmazonNotificationDestinationsResponse>;
```

###### Returns

`Promise`\<[`AmazonNotificationDestinationsResponse`](#amazonnotificationdestinationsresponse)\>

##### getMarketplaceParticipations()

```ts
getMarketplaceParticipations(input?): Promise<AmazonMarketplaceParticipationsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | \{ `signal?`: `AbortSignal`; \} |
| `input.signal?` | `AbortSignal` |

###### Returns

`Promise`\<[`AmazonMarketplaceParticipationsResponse`](#amazonmarketplaceparticipationsresponse)\>

##### getOrder()

```ts
getOrder(amazonOrderId): Promise<AmazonOrderResponse<AmazonOrder>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amazonOrderId` | `string` |

###### Returns

`Promise`\<[`AmazonOrderResponse`](#amazonorderresponse)\<[`AmazonOrder`](#amazonorder)\>\>

##### getOrderBuyerInfo()

```ts
getOrderBuyerInfo(amazonOrderId): Promise<AmazonOrderResponse<AmazonOrder & {
  BuyerInfo?: AmazonBuyerInfo;
}>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amazonOrderId` | `string` |

###### Returns

`Promise`\<[`AmazonOrderResponse`](#amazonorderresponse)\<[`AmazonOrder`](#amazonorder) & \{
  `BuyerInfo?`: [`AmazonBuyerInfo`](#amazonbuyerinfo);
\}\>\>

##### getOrderItems()

```ts
getOrderItems(amazonOrderId, input?): Promise<AmazonOrderItemsResponse<AmazonOrderItem>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amazonOrderId` | `string` |
| `input?` | \{ `nextToken?`: `string`; \} |
| `input.nextToken?` | `string` |

###### Returns

`Promise`\<[`AmazonOrderItemsResponse`](#amazonorderitemsresponse)\<[`AmazonOrderItem`](#amazonorderitem)\>\>

##### getOrderItemsBuyerInfo()

```ts
getOrderItemsBuyerInfo(amazonOrderId, input?): Promise<AmazonOrderItemsResponse<AmazonOrderItem & {
  BuyerInfo?: AmazonBuyerInfo;
}>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amazonOrderId` | `string` |
| `input?` | \{ `nextToken?`: `string`; \} |
| `input.nextToken?` | `string` |

###### Returns

`Promise`\<[`AmazonOrderItemsResponse`](#amazonorderitemsresponse)\<[`AmazonOrderItem`](#amazonorderitem) & \{
  `BuyerInfo?`: [`AmazonBuyerInfo`](#amazonbuyerinfo);
\}\>\>

##### getOrders()

```ts
getOrders(input?): Promise<AmazonOrdersResponse<AmazonOrder>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`AmazonOrderSearchInput`](#amazonordersearchinput) |

###### Returns

`Promise`\<[`AmazonOrdersResponse`](#amazonordersresponse)\<[`AmazonOrder`](#amazonorder)\>\>

##### getOrderV2026()

```ts
getOrderV2026(amazonOrderId, input?): Promise<AmazonOrderResponse<AmazonOrder>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amazonOrderId` | `string` |
| `input?` | [`AmazonOrdersV2026GetInput`](#amazonordersv2026getinput) |

###### Returns

`Promise`\<[`AmazonOrderResponse`](#amazonorderresponse)\<[`AmazonOrder`](#amazonorder)\>\>

##### getSolicitationActionsForOrder()

```ts
getSolicitationActionsForOrder(amazonOrderId, marketplaceIds?): Promise<AmazonSolicitationActionsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `amazonOrderId` | `string` |
| `marketplaceIds?` | `string`[] |

###### Returns

`Promise`\<[`AmazonSolicitationActionsResponse`](#amazonsolicitationactionsresponse)\>

##### getSubscription()

```ts
getSubscription(input): Promise<AmazonNotificationSubscriptionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AmazonGetSubscriptionInput`](#amazongetsubscriptioninput) |

###### Returns

`Promise`\<[`AmazonNotificationSubscriptionResponse`](#amazonnotificationsubscriptionresponse)\>

##### refreshAccessToken()

```ts
refreshAccessToken(): Promise<AmazonLwaTokenResponse>;
```

###### Returns

`Promise`\<[`AmazonLwaTokenResponse`](#amazonlwatokenresponse)\>

##### searchOrdersV2026()

```ts
searchOrdersV2026(input?): Promise<AmazonOrdersResponse<AmazonOrder>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`AmazonOrdersV2026SearchInput`](#amazonordersv2026searchinput) |

###### Returns

`Promise`\<[`AmazonOrdersResponse`](#amazonordersresponse)\<[`AmazonOrder`](#amazonorder)\>\>

***

### AmazonMarketplaceClientOptions

#### Extended by

- [`AmazonLiveCheckOptions`](#amazonlivecheckoptions)

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### aws?

```ts
optional aws?: AmazonAwsSigningOptions;
```

##### endpoint?

```ts
optional endpoint?: AmazonSpApiEndpoint;
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

##### lwaClientId?

```ts
optional lwaClientId?: string;
```

##### lwaClientSecret?

```ts
optional lwaClientSecret?: string;
```

##### lwaTokenUrl?

```ts
optional lwaTokenUrl?: string;
```

##### marketplaceId?

```ts
optional marketplaceId?: string;
```

##### refreshToken?

```ts
optional refreshToken?: string;
```

##### region?

```ts
optional region?: string;
```

##### restrictedDataToken?

```ts
optional restrictedDataToken?: string;
```

##### restrictedDataTokenProvider?

```ts
optional restrictedDataTokenProvider?: (input) =>
  | string
  | AmazonRestrictedDataTokenResponse
  | Promise<
  | string
| AmazonRestrictedDataTokenResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AmazonRestrictedDataTokenRequest`](#amazonrestricteddatatokenrequest) |

###### Returns

  \| `string`
  \| [`AmazonRestrictedDataTokenResponse`](#amazonrestricteddatatokenresponse)
  \| `Promise`\<
  \| `string`
  \| [`AmazonRestrictedDataTokenResponse`](#amazonrestricteddatatokenresponse)\>

##### restrictedDataTokenTargetApplication?

```ts
optional restrictedDataTokenTargetApplication?: string;
```

##### userAgent?

```ts
optional userAgent?: string;
```

***

### AmazonMarketplaceJsonObject

#### Extended by

- [`AmazonMarketplaceProviderExtensionFields`](#amazonmarketplaceproviderextensionfields)
- [`AmazonMarketplaceProviderResponse`](#amazonmarketplaceproviderresponse)

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

***

### AmazonMarketplaceParticipation

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### marketplace?

```ts
optional marketplace?: {
  countryCode?: string;
  defaultCurrencyCode?: string;
  defaultLanguageCode?: string;
  domainName?: string;
  id?: string;
  name?: string;
};
```

###### countryCode?

```ts
optional countryCode?: string;
```

###### defaultCurrencyCode?

```ts
optional defaultCurrencyCode?: string;
```

###### defaultLanguageCode?

```ts
optional defaultLanguageCode?: string;
```

###### domainName?

```ts
optional domainName?: string;
```

###### id?

```ts
optional id?: string;
```

###### name?

```ts
optional name?: string;
```

##### participation?

```ts
optional participation?: {
  hasSuspendedListings?: boolean;
  isParticipating?: boolean;
};
```

###### hasSuspendedListings?

```ts
optional hasSuspendedListings?: boolean;
```

###### isParticipating?

```ts
optional isParticipating?: boolean;
```

***

### AmazonMarketplaceParticipationsResponse

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

##### payload?

```ts
optional payload?: AmazonMarketplaceParticipation[];
```

***

### AmazonMarketplaceProviderExtensionFields

#### Extends

- [`AmazonMarketplaceJsonObject`](#amazonmarketplacejsonobject)

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

***

### AmazonMarketplaceProviderResponse

#### Extends

- [`AmazonMarketplaceJsonObject`](#amazonmarketplacejsonobject)

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

***

### AmazonMoney

#### Properties

##### Amount?

```ts
optional Amount?: string;
```

##### CurrencyCode?

```ts
optional CurrencyCode?: string;
```

***

### AmazonNotificationDestination

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### destinationId?

```ts
optional destinationId?: string;
```

##### name?

```ts
optional name?: string;
```

##### resource?

```ts
optional resource?: {
[providerField: string]: AmazonMarketplaceProviderExtensionValue;
  eventBridge?: {
     accountId?: string;
     name?: string;
     region?: string;
  };
  sqs?: {
     arn?: string;
  };
};
```

###### Index Signature

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

###### eventBridge?

```ts
optional eventBridge?: {
  accountId?: string;
  name?: string;
  region?: string;
};
```

###### eventBridge.accountId?

```ts
optional accountId?: string;
```

###### eventBridge.name?

```ts
optional name?: string;
```

###### eventBridge.region?

```ts
optional region?: string;
```

###### sqs?

```ts
optional sqs?: {
  arn?: string;
};
```

###### sqs.arn?

```ts
optional arn?: string;
```

***

### AmazonNotificationDestinationResponse

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

##### payload?

```ts
optional payload?: AmazonNotificationDestination;
```

***

### AmazonNotificationDestinationsResponse

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

##### payload?

```ts
optional payload?: AmazonNotificationDestination[];
```

***

### AmazonNotificationEnvelope

#### Properties

##### marketplaceId?

```ts
optional marketplaceId?: string;
```

##### notificationId?

```ts
optional notificationId?: string;
```

##### notificationType?

```ts
optional notificationType?: string;
```

##### payload

```ts
payload: unknown;
```

##### rawBody

```ts
rawBody: string;
```

##### sellerId?

```ts
optional sellerId?: string;
```

##### transport?

```ts
optional transport?: "direct" | "sns" | "sqs" | "eventbridge";
```

##### verifiedBy

```ts
verifiedBy: "signature" | "hook" | "shared-secret" | "unverified";
```

***

### AmazonNotificationSubscription

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
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

##### processingDirective?

```ts
optional processingDirective?: AmazonMarketplaceJsonObject;
```

##### subscriptionId?

```ts
optional subscriptionId?: string;
```

***

### AmazonNotificationSubscriptionResponse

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

##### payload?

```ts
optional payload?: AmazonNotificationSubscription;
```

***

### AmazonOperationRequestInput

#### Properties

##### body?

```ts
optional body?: AmazonMarketplaceProviderPayload;
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
optional query?: AmazonMarketplaceProviderQuery;
```

***

### AmazonOrder

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### AmazonOrderId?

```ts
optional AmazonOrderId?: string;
```

##### BuyerInfo?

```ts
optional BuyerInfo?: AmazonBuyerInfo;
```

##### CbaDisplayableShippingLabel?

```ts
optional CbaDisplayableShippingLabel?: string;
```

##### EarliestDeliveryDate?

```ts
optional EarliestDeliveryDate?: string;
```

##### EarliestShipDate?

```ts
optional EarliestShipDate?: string;
```

##### EasyShipShipmentStatus?

```ts
optional EasyShipShipmentStatus?: string;
```

##### FulfillmentChannel?

```ts
optional FulfillmentChannel?:
  | string & {
}
  | "AFN"
  | "MFN";
```

##### IsBusinessOrder?

```ts
optional IsBusinessOrder?: boolean;
```

##### IsGlobalExpressEnabled?

```ts
optional IsGlobalExpressEnabled?: boolean;
```

##### IsPremiumOrder?

```ts
optional IsPremiumOrder?: boolean;
```

##### IsPrime?

```ts
optional IsPrime?: boolean;
```

##### IsReplacementOrder?

```ts
optional IsReplacementOrder?: boolean;
```

##### LastUpdateDate?

```ts
optional LastUpdateDate?: string;
```

##### LatestDeliveryDate?

```ts
optional LatestDeliveryDate?: string;
```

##### LatestShipDate?

```ts
optional LatestShipDate?: string;
```

##### MarketplaceId?

```ts
optional MarketplaceId?: string;
```

##### NumberOfItemsShipped?

```ts
optional NumberOfItemsShipped?: number;
```

##### NumberOfItemsUnshipped?

```ts
optional NumberOfItemsUnshipped?: number;
```

##### OrderChannel?

```ts
optional OrderChannel?: string;
```

##### OrderStatus?

```ts
optional OrderStatus?:
  | string & {
}
  | AmazonOrderStatus;
```

##### OrderTotal?

```ts
optional OrderTotal?: AmazonMoney;
```

##### OrderType?

```ts
optional OrderType?: string;
```

##### PaymentMethod?

```ts
optional PaymentMethod?: string;
```

##### PaymentMethodDetails?

```ts
optional PaymentMethodDetails?: string[];
```

##### PurchaseDate?

```ts
optional PurchaseDate?: string;
```

##### ReplacedOrderId?

```ts
optional ReplacedOrderId?: string;
```

##### SalesChannel?

```ts
optional SalesChannel?: string;
```

##### SellerOrderId?

```ts
optional SellerOrderId?: string;
```

##### ShipmentServiceLevelCategory?

```ts
optional ShipmentServiceLevelCategory?: string;
```

##### ShippingAddress?

```ts
optional ShippingAddress?: AmazonAddress;
```

##### ShipServiceLevel?

```ts
optional ShipServiceLevel?: string;
```

***

### AmazonOrderItem

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### ASIN?

```ts
optional ASIN?: string;
```

##### BuyerInfo?

```ts
optional BuyerInfo?: AmazonBuyerInfo;
```

##### ConditionId?

```ts
optional ConditionId?: string;
```

##### ConditionNote?

```ts
optional ConditionNote?: string;
```

##### ConditionSubtypeId?

```ts
optional ConditionSubtypeId?: string;
```

##### ItemPrice?

```ts
optional ItemPrice?: AmazonMoney;
```

##### ItemTax?

```ts
optional ItemTax?: AmazonMoney;
```

##### OrderItemId?

```ts
optional OrderItemId?: string;
```

##### PointsGranted?

```ts
optional PointsGranted?: {
  PointsMonetaryValue?: AmazonMoney;
  PointsNumber?: number;
};
```

###### PointsMonetaryValue?

```ts
optional PointsMonetaryValue?: AmazonMoney;
```

###### PointsNumber?

```ts
optional PointsNumber?: number;
```

##### ProductInfo?

```ts
optional ProductInfo?: {
  NumberOfItems?: number;
};
```

###### NumberOfItems?

```ts
optional NumberOfItems?: number;
```

##### PromotionDiscount?

```ts
optional PromotionDiscount?: AmazonMoney;
```

##### QuantityOrdered?

```ts
optional QuantityOrdered?: number;
```

##### QuantityShipped?

```ts
optional QuantityShipped?: number;
```

##### SellerSKU?

```ts
optional SellerSKU?: string;
```

##### ShippingDiscount?

```ts
optional ShippingDiscount?: AmazonMoney;
```

##### ShippingPrice?

```ts
optional ShippingPrice?: AmazonMoney;
```

##### ShippingTax?

```ts
optional ShippingTax?: AmazonMoney;
```

##### Title?

```ts
optional Title?: string;
```

***

### AmazonOrderItemsPayload

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TItem` *extends* [`AmazonMarketplaceProviderExtensionValue`](#amazonmarketplaceproviderextensionvalue) | [`AmazonOrderItem`](#amazonorderitem) |

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### AmazonOrderId?

```ts
optional AmazonOrderId?: string;
```

##### NextToken?

```ts
optional NextToken?: string;
```

##### OrderItems?

```ts
optional OrderItems?: TItem[];
```

***

### AmazonOrderItemsResponse

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TItem` *extends* [`AmazonMarketplaceProviderExtensionValue`](#amazonmarketplaceproviderextensionvalue) | [`AmazonOrderItem`](#amazonorderitem) |

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

##### payload?

```ts
optional payload?: AmazonOrderItemsPayload<TItem>;
```

***

### AmazonOrderPayload

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOrder` *extends* [`AmazonMarketplaceProviderExtensionValue`](#amazonmarketplaceproviderextensionvalue) | [`AmazonOrder`](#amazonorder) |

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### Order?

```ts
optional Order?: TOrder;
```

***

### AmazonOrderResponse

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOrder` *extends* [`AmazonMarketplaceProviderExtensionValue`](#amazonmarketplaceproviderextensionvalue) | [`AmazonOrder`](#amazonorder) |

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

##### payload?

```ts
optional payload?: TOrder | AmazonOrderPayload<TOrder>;
```

***

### AmazonOrderSearchInput

#### Properties

##### amazonOrderIds?

```ts
optional amazonOrderIds?: string[];
```

##### buyerEmail?

```ts
optional buyerEmail?: string;
```

##### createdAfter?

```ts
optional createdAfter?: string;
```

##### createdBefore?

```ts
optional createdBefore?: string;
```

##### easyShipShipmentStatuses?

```ts
optional easyShipShipmentStatuses?: string[];
```

##### electronicInvoiceStatuses?

```ts
optional electronicInvoiceStatuses?: string[];
```

##### fulfillmentChannels?

```ts
optional fulfillmentChannels?: string[];
```

##### lastUpdatedAfter?

```ts
optional lastUpdatedAfter?: string;
```

##### lastUpdatedBefore?

```ts
optional lastUpdatedBefore?: string;
```

##### marketplaceIds?

```ts
optional marketplaceIds?: string[];
```

##### maxResultsPerPage?

```ts
optional maxResultsPerPage?: number;
```

##### nextToken?

```ts
optional nextToken?: string;
```

##### orderStatuses?

```ts
optional orderStatuses?: string[];
```

##### paymentMethods?

```ts
optional paymentMethods?: string[];
```

##### sellerOrderId?

```ts
optional sellerOrderId?: string;
```

***

### AmazonOrdersPayload

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOrder` *extends* [`AmazonMarketplaceProviderExtensionValue`](#amazonmarketplaceproviderextensionvalue) | [`AmazonOrder`](#amazonorder) |

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### CreatedBefore?

```ts
optional CreatedBefore?: string;
```

##### LastUpdatedBefore?

```ts
optional LastUpdatedBefore?: string;
```

##### NextToken?

```ts
optional NextToken?: string;
```

##### Orders?

```ts
optional Orders?: TOrder[];
```

***

### AmazonOrdersResponse

#### Extends

- [`AmazonRestCollection`](#amazonrestcollection)\<`TOrder`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOrder` *extends* [`AmazonMarketplaceProviderExtensionValue`](#amazonmarketplaceproviderextensionvalue) | [`AmazonOrder`](#amazonorder) |

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

###### Inherited from

[`AmazonRestCollection`](#amazonrestcollection).[`errors`](#errors-7)

##### payload?

```ts
optional payload?: AmazonOrdersPayload<TOrder>;
```

###### Overrides

[`AmazonRestCollection`](#amazonrestcollection).[`payload`](#payload-8)

***

### AmazonOrdersV2026GetInput

#### Properties

##### includedData?

```ts
optional includedData?: AmazonOrdersIncludedData[];
```

***

### AmazonOrdersV2026SearchInput

#### Properties

##### amazonOrderIds?

```ts
optional amazonOrderIds?: string[];
```

##### createdAfter?

```ts
optional createdAfter?: string;
```

##### createdBefore?

```ts
optional createdBefore?: string;
```

##### fulfilledBy?

```ts
optional fulfilledBy?:
  | string & {
}
  | "AMAZON"
  | "MERCHANT";
```

##### fulfillmentStatuses?

```ts
optional fulfillmentStatuses?: string[];
```

##### includedData?

```ts
optional includedData?: AmazonOrdersIncludedData[];
```

##### lastUpdatedAfter?

```ts
optional lastUpdatedAfter?: string;
```

##### lastUpdatedBefore?

```ts
optional lastUpdatedBefore?: string;
```

##### marketplaceIds?

```ts
optional marketplaceIds?: string[];
```

##### maxResultsPerPage?

```ts
optional maxResultsPerPage?: number;
```

##### paginationToken?

```ts
optional paginationToken?: string;
```

***

### AmazonResource

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

***

### AmazonRestCollection

#### Extended by

- [`AmazonOrdersResponse`](#amazonordersresponse)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TItem` *extends* [`AmazonMarketplaceProviderExtensionValue`](#amazonmarketplaceproviderextensionvalue) | [`AmazonMarketplaceJsonObject`](#amazonmarketplacejsonobject) |

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

##### payload?

```ts
optional payload?: {
[key: string]: AmazonMarketplaceProviderExtensionValue;
  NextToken?: string;
  OrderItems?: TItem[];
  Orders?: TItem[];
};
```

###### Index Signature

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### OrderItems?

```ts
optional OrderItems?: TItem[];
```

###### Orders?

```ts
optional Orders?: TItem[];
```

***

### AmazonRestrictedDataTokenRequest

#### Properties

##### restrictedResources

```ts
restrictedResources: AmazonRestrictedResource[];
```

##### targetApplication?

```ts
optional targetApplication?: string;
```

***

### AmazonRestrictedDataTokenResponse

#### Indexable

```ts
[key: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### expiresIn?

```ts
optional expiresIn?: number;
```

##### restrictedDataToken?

```ts
optional restrictedDataToken?: string;
```

***

### AmazonRestrictedResource

#### Properties

##### dataElements?

```ts
optional dataElements?: string[];
```

##### method

```ts
method: AmazonSpApiMethod;
```

##### path

```ts
path: string;
```

***

### AmazonSolicitationActionsResponse

#### Indexable

```ts
[providerField: string]: AmazonMarketplaceProviderExtensionValue
```

#### Properties

##### \_embedded?

```ts
optional _embedded?: AmazonMarketplaceJsonObject;
```

##### \_links?

```ts
optional _links?: {
  actions?: {
     href?: string;
     name?: string;
  }[];
  self?: {
     href?: string;
  };
};
```

###### actions?

```ts
optional actions?: {
  href?: string;
  name?: string;
}[];
```

###### self?

```ts
optional self?: {
  href?: string;
};
```

###### self.href?

```ts
optional href?: string;
```

##### errors?

```ts
optional errors?: AmazonSpApiError[];
```

***

### AmazonSpApiError

#### Properties

##### code?

```ts
optional code?: string;
```

##### details?

```ts
optional details?: string;
```

##### message?

```ts
optional message?: string;
```

***

### AmazonSpApiOfficialSdk

#### Properties

##### NotificationsSpApi?

```ts
optional NotificationsSpApi?: unknown;
```

##### Orders\_v2026SpApi?

```ts
optional Orders_v2026SpApi?: unknown;
```

##### OrdersSpApi?

```ts
optional OrdersSpApi?: unknown;
```

##### SellersSpApi?

```ts
optional SellersSpApi?: {
  ApiClient: (basePath?) => {
     enableAutoRetrievalAccessToken?: (clientId, clientSecret, refreshToken, accessToken?) => void;
  };
  SellersApi: (apiClient) => {
     getMarketplaceParticipations: () => Promise<unknown>;
  };
};
```

###### ApiClient

```ts
ApiClient: (basePath?) => {
  enableAutoRetrievalAccessToken?: (clientId, clientSecret, refreshToken, accessToken?) => void;
};
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `basePath?` | `string` |

###### Returns

```ts
{
  enableAutoRetrievalAccessToken?: (clientId, clientSecret, refreshToken, accessToken?) => void;
}
```

| Name | Type |
| ------ | ------ |
| `enableAutoRetrievalAccessToken()?` | (`clientId`, `clientSecret`, `refreshToken`, `accessToken?`) => `void` |

###### SellersApi

```ts
SellersApi: (apiClient) => {
  getMarketplaceParticipations: () => Promise<unknown>;
};
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiClient` | `unknown` |

###### Returns

```ts
{
  getMarketplaceParticipations: () => Promise<unknown>;
}
```

| Name | Type |
| ------ | ------ |
| `getMarketplaceParticipations()` | () => `Promise`\<`unknown`\> |

##### SolicitationsSpApi?

```ts
optional SolicitationsSpApi?: unknown;
```

##### TokensSpApi?

```ts
optional TokensSpApi?: unknown;
```

***

### ParseAmazonNotificationOptions

#### Properties

##### expectedSharedSecret?

```ts
optional expectedSharedSecret?: string;
```

##### expectedSignatureSecret?

```ts
optional expectedSignatureSecret?: string;
```

##### requireVerification?

```ts
optional requireVerification?: boolean;
```

##### sharedSecretHeaderName?

```ts
optional sharedSecretHeaderName?: string;
```

##### signatureHeaderName?

```ts
optional signatureHeaderName?: string;
```

##### verifyNotification?

```ts
optional verifyNotification?: (input) => boolean | Promise<boolean>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `headers`: `Headers`; `payload`: `unknown`; `rawBody`: `string`; \} |
| `input.headers` | `Headers` |
| `input.payload` | `unknown` |
| `input.rawBody` | `string` |

###### Returns

`boolean` \| `Promise`\<`boolean`\>

## Type Aliases

### AmazonKnownOperationUid

```ts
type AmazonKnownOperationUid = keyof AmazonKnownOperationRequestMap;
```

***

### AmazonMarketplaceJsonPrimitive

```ts
type AmazonMarketplaceJsonPrimitive = string | number | boolean | null;
```

***

### AmazonMarketplaceJsonValue

```ts
type AmazonMarketplaceJsonValue =
  | AmazonMarketplaceJsonPrimitive
  | AmazonMarketplaceJsonObject
  | readonly AmazonMarketplaceJsonValue[];
```

***

### AmazonMarketplaceProviderExtensionValue

```ts
type AmazonMarketplaceProviderExtensionValue =
  | AmazonMarketplaceJsonValue
  | object
  | undefined;
```

***

### AmazonMarketplaceProviderPayload

```ts
type AmazonMarketplaceProviderPayload = AmazonMarketplaceJsonObject | object;
```

***

### AmazonMarketplaceProviderQuery

```ts
type AmazonMarketplaceProviderQuery = Record<string, AmazonMarketplaceProviderExtensionValue>;
```

***

### AmazonOrdersIncludedData

```ts
type AmazonOrdersIncludedData =
  | "BUYER"
  | "RECIPIENT"
  | "FULFILLMENT"
  | "PROCEEDS"
  | "EXPENSE"
  | "PROMOTION"
  | "TAX"
  | "PAYMENT"
  | "CANCELLATION"
  | string & {
};
```

***

### AmazonOrderStatus

```ts
type AmazonOrderStatus =
  | "Pending"
  | "Unshipped"
  | "PartiallyShipped"
  | "Shipped"
  | "Canceled"
  | "Unfulfillable"
  | "InvoiceUnconfirmed"
  | "PendingAvailability";
```

***

### AmazonSpApiEndpoint

```ts
type AmazonSpApiEndpoint = "na" | "eu" | "fe";
```

***

### AmazonSpApiMethod

```ts
type AmazonSpApiMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
```

## Variables

### amazonMarketplaceIntegration

```ts
const amazonMarketplaceIntegration: DefinedIntegration<{
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
     description: "Parses SP-API notification payloads from SQS, EventBridge, or SDK-user webhooks after configured verification succeeds.";
     exposesSensitiveData: true;
     label: "Receive Amazon marketplace notifications";
     providerObjects: readonly [{
        kind: "amazonNotification";
        label: "Amazon Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads seller orders, order items, buyer information where authorized, solicitation metadata, seller participation, and notification configuration.";
     exposesSensitiveData: true;
     label: "Read Amazon marketplace records";
     providerObjects: readonly [{
        kind: "amazonOrder";
        label: "Amazon Order";
      }, {
        kind: "amazonOrderItem";
        label: "Amazon Order Item";
      }, {
        kind: "amazonBuyerInfo";
        label: "Amazon Buyer Info";
      }, {
        kind: "amazonSolicitation";
        label: "Amazon Solicitation";
      }, {
        kind: "amazonSellerAccount";
        label: "Amazon Seller Account";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches orders and notification resources with SDK-user-supplied marketplace, date, status, and pagination filters.";
     exposesSensitiveData: true;
     label: "Search Amazon marketplace records";
     providerObjects: readonly [{
        kind: "amazonOrder";
        label: "Amazon Order";
      }, {
        kind: "amazonNotificationSubscription";
        label: "Amazon Notification Subscription";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates review/feedback solicitations and notification subscriptions only when the SDK user's marketplace policy allows outbound actions.";
     exposesSensitiveData: true;
     label: "Create Amazon support actions";
     providerObjects: readonly [{
        kind: "amazonSolicitation";
        label: "Amazon Solicitation";
      }, {
        kind: "amazonNotificationSubscription";
        label: "Amazon Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes Amazon notification subscriptions only when the SDK user's marketplace policy allows subscription lifecycle changes.";
     exposesSensitiveData: true;
     label: "Delete Amazon support resources";
     providerObjects: readonly [{
        kind: "amazonNotificationSubscription";
        label: "Amazon Notification Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends supported Solicitations API review/feedback requests chosen by the SDK user's workflow.";
     exposesSensitiveData: true;
     label: "Send Amazon buyer solicitations";
     providerObjects: readonly [{
        kind: "amazonSolicitation";
        label: "Amazon Solicitation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.notification-signature";
     description: "Requires a SDK-user verifier, shared secret, or gateway signature policy before returning normalized Amazon notification payloads.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Amazon notification ingress";
     providerObjects: readonly [{
        kind: "amazonVerifiedNotification";
        label: "Amazon Verified Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "marketplace.sigv4";
     description: "Optionally signs SP-API REST requests with AWS SigV4 for SDK users that operate signed gateways or explicit authorization paths.";
     extension: true;
     label: "Sign Amazon SP-API requests";
     providerObjects: readonly [{
        kind: "amazonSignedRequest";
        label: "Amazon Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "marketplace";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Amazon official SP-API JavaScript SDK";
        url: "https://github.com/amzn/selling-partner-api-sdk";
      }, {
        label: "Amazon prebuilt JavaScript SDK tutorial";
        url: "https://developer-docs.amazon.com/sp-api/docs/automate-your-sp-api-calls-using-a-prebuilt-javascript-sdk";
      }, {
        label: "Amazon SP-API Orders v0 reference";
        url: "https://developer-docs.amazon.com/sp-api/reference/orders-v0";
      }, {
        label: "Amazon SP-API Orders v2026-01-01 reference";
        url: "https://developer-docs.amazon.com/sp-api/reference/orders-v2026-01-01";
      }, {
        label: "Amazon SP-API Restricted Data Token";
        url: "https://developer-docs.amazon.com/sp-api/reference/createrestricteddatatoken";
      }, {
        label: "Amazon SP-API Notifications API";
        url: "https://developer-docs.amazon.com/sp-api/docs/notifications-api";
     }];
     notes: readonly ["Coverage is limited to Cognidesk marketplace support primitives, not full Amazon SP-API ownership.", "The official Amazon JavaScript SDK is the preferred raw-client escape hatch, but this package keeps local helpers for RDT and normalized support operations because the SDK README notes RDT requires an extra step.", "Manifest/runtime exports do not expose Cognidesk-generated full-provider SP-API clones.", "Orders v0 remains available for existing SDK callers while Amazon's removal window remains relevant; v2026 order helpers are exposed for migration flows."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Login with Amazon client ID and secret owned by the SDK user for SP-API token refresh.";
     id: "amazon-lwa-client";
     label: "Amazon LWA client credentials";
     required: true;
   }, {
     description: "Seller-authorized refresh/access token for role-gated SP-API calls, or grantless token material for Notifications API operations.";
     id: "amazon-lwa-token";
     label: "Amazon LWA refresh or access token";
     required: true;
   }, {
     description: "Optional IAM role/region and SigV4 material for SDK users who operate through signed gateway paths.";
     id: "amazon-aws-role-region";
     label: "Amazon SP-API AWS role and region";
     required: false;
   }, {
     description: "SDK-user-selected Amazon marketplace such as ATVPDKIKX0DER or A1PA6795UKMFR9.";
     id: "amazon-marketplace-id";
     label: "Amazon marketplace ID";
     required: true;
   }, {
     description: "Notifications API destination, SQS/EventBridge routing, and SDK-user webhook gateway metadata.";
     id: "amazon-notification-destination";
     label: "Amazon notification destination";
     required: true;
   }, {
     description: "SDK-user-provided verifier, shared secret, or gateway signature policy for fail-closed notification ingestion.";
     id: "amazon-notification-signature";
     label: "Amazon notification verification";
     required: true;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "marketplace.amazon";
  limitations: readonly ["The SDK user chooses marketplaces, roles, restricted-data-token policy, notification topics, outbound solicitation rules, operator visibility, retention, consent, and redaction.", "Some SP-API operations require role approval, restricted data tokens, marketplace availability, or grantless authorization; this package exposes typed support foundations and does not decide seller eligibility.", "Amazon notification transports vary by destination; this package fails closed unless the SDK user configures a verifier, gateway signature, or shared-secret check appropriate to their ingress path."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        buyerInfoRdt: "typed-read-restricted";
        lwaTokenRefresh: "typed-token-refresh";
        notificationDestinations: "typed-read";
        notificationIngress: "typed-verify-parse";
        notificationSubscriptions: "typed-create-read-delete";
        orderItems: "typed-read";
        ordersV0: "typed-read-search";
        ordersV2026: "typed-read-search";
        rawSellingPartnerApi: "official-sdk-escape-hatch";
        restrictedDataTokens: "typed-create";
        sellerParticipation: "typed-read";
        sigv4Signing: "typed-sign";
        solicitations: "typed-read-create-send";
     };
     implementation: {
        caveats: readonly ["The npm package has no root types metadata; this package uses a local typed facade for raw SDK loading.", "RDT support remains local because the SDK README says some APIs need an extra RDT step."];
        sdkModifiedAt: "2026-05-29T13:03:51.597Z";
        sdkPackage: "@amazon-sp-api-release/amazon-sp-api-sdk-js";
        sdkRepository: "https://github.com/amzn/selling-partner-api-sdk";
        sdkVersionChecked: "1.9.0";
        strategy: "official-sdk-plus-support-slice";
     };
     supportSlice: {
        allowlist: (
           | "amazon.refreshAccessToken"
           | "amazon.createRestrictedDataToken"
           | "amazon.getOrders"
           | "amazon.getOrder"
           | "amazon.getOrderBuyerInfo"
           | "amazon.getOrderItems"
           | "amazon.getOrderItemsBuyerInfo"
           | "amazon.searchOrdersV2026"
           | "amazon.getOrderV2026"
           | "amazon.getSolicitationActionsForOrder"
           | "amazon.createProductReviewAndSellerFeedbackSolicitation"
           | "amazon.getMarketplaceParticipations"
           | "amazon.getDestinations"
           | "amazon.getDestination"
           | "amazon.createSubscription"
           | "amazon.getSubscription"
           | "amazon.deleteSubscription"
          | "amazon.parseNotificationWebhook")[];
        source: "local-reviewed-support-operations";
        verifiedAt: "2026-06-21";
     };
  };
  name: "Amazon Marketplace";
  operations: readonly [{
     alias: "amazon.refreshAccessToken";
     capability: "read-provider-object";
     extension: true;
     label: "Refresh Amazon LWA access token";
     providerOperation: "lwa.refreshAccessToken";
     requiresCredential: true;
   }, {
     alias: "amazon.createRestrictedDataToken";
     capability: "create-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Create Amazon restricted data token";
     providerOperation: "tokens.createRestrictedDataToken";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrders";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Search Amazon orders";
     providerOperation: "ordersV0.getOrders";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrder";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order";
     providerOperation: "ordersV0.getOrder";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderBuyerInfo";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order buyer info";
     providerOperation: "ordersV0.getOrderBuyerInfo";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderItems";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order items";
     providerOperation: "ordersV0.getOrderItems";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderItemsBuyerInfo";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon order item buyer info";
     providerOperation: "ordersV0.getOrderItemsBuyerInfo";
     requiresCredential: true;
   }, {
     alias: "amazon.searchOrdersV2026";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Search Amazon Orders v2026";
     providerOperation: "ordersV2026.searchOrders";
     requiresCredential: true;
   }, {
     alias: "amazon.getOrderV2026";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Amazon Orders v2026 order";
     providerOperation: "ordersV2026.getOrder";
     requiresCredential: true;
   }, {
     alias: "amazon.getSolicitationActionsForOrder";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon solicitation actions";
     providerOperation: "solicitations.getActionsForOrder";
     requiresCredential: true;
   }, {
     alias: "amazon.createProductReviewAndSellerFeedbackSolicitation";
     capability: "send";
     changesWorkflow: true;
     extension: true;
     label: "Create Amazon review and seller feedback solicitation";
     providerOperation: "solicitations.createProductReviewAndSellerFeedback";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "amazon.getMarketplaceParticipations";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon marketplace participations";
     providerOperation: "sellers.getMarketplaceParticipations";
     requiresCredential: true;
   }, {
     alias: "amazon.getDestinations";
     capability: "search-provider-object";
     extension: true;
     label: "List Amazon notification destinations";
     providerOperation: "notifications.getDestinations";
     requiresCredential: true;
   }, {
     alias: "amazon.getDestination";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon notification destination";
     providerOperation: "notifications.getDestination";
     requiresCredential: true;
   }, {
     alias: "amazon.createSubscription";
     capability: "create-provider-object";
     changesWorkflow: true;
     extension: true;
     label: "Create Amazon notification subscription";
     providerOperation: "notifications.createSubscription";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "amazon.getSubscription";
     capability: "read-provider-object";
     extension: true;
     label: "Read Amazon notification subscription";
     providerOperation: "notifications.getSubscription";
     requiresCredential: true;
   }, {
     alias: "amazon.deleteSubscription";
     capability: "delete-provider-object";
     changesWorkflow: true;
     extension: true;
     label: "Delete Amazon notification subscription";
     providerOperation: "notifications.deleteSubscription";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "amazon.parseNotificationWebhook";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Amazon notification webhook";
     providerOperation: "notifications.parseWebhook";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-marketplace-amazon";
  privacyNotes: readonly ["Amazon marketplace orders, order items, buyer information, seller account records, solicitations, and notifications can contain customer data, addresses, identifiers, and support context.", "LWA secrets, refresh tokens, access tokens, AWS role/signing material, notification shared secrets, and verifier logic stay server-side; Studio receives only readiness and capability metadata."];
  provider: "amazon";
  trustLevel: "official";
}, unknown, AmazonMarketplaceOperations>;
```

## Functions

### amazonMarketplaceCredentialStatuses()

```ts
function amazonMarketplaceCredentialStatuses(input): {
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
| `input` | [`AmazonCredentialStatusInput`](#amazoncredentialstatusinput) |

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

### createAmazonMarketplaceClient()

```ts
function createAmazonMarketplaceClient(options): AmazonMarketplaceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions) |

#### Returns

[`AmazonMarketplaceClient`](#amazonmarketplaceclient)

***

### createAmazonMarketplaceLiveChecks()

```ts
function createAmazonMarketplaceLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        marketplaceId: string;
        participations: string | number;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AmazonLiveCheckOptions`](#amazonlivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `marketplaceId`: `string`;
        `participations`: `string` \| `number`;
     \};
  \}\>;
\}[]

***

### createAmazonRestrictedDataToken()

```ts
function createAmazonRestrictedDataToken(options, input): Promise<AmazonRestrictedDataTokenResponse>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions) |
| `input` | [`AmazonRestrictedDataTokenRequest`](#amazonrestricteddatatokenrequest) |

#### Returns

`Promise`\<[`AmazonRestrictedDataTokenResponse`](#amazonrestricteddatatokenresponse)\>

***

### loadAmazonSpApiOfficialSdk()

```ts
function loadAmazonSpApiOfficialSdk(): Promise<AmazonSpApiOfficialSdk>;
```

#### Returns

`Promise`\<[`AmazonSpApiOfficialSdk`](#amazonspapiofficialsdk)\>

***

### parseAmazonMarketplaceNotificationWebhook()

```ts
function parseAmazonMarketplaceNotificationWebhook(request, options?): Promise<AmazonNotificationEnvelope>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseAmazonNotificationOptions`](#parseamazonnotificationoptions) |

#### Returns

`Promise`\<[`AmazonNotificationEnvelope`](#amazonnotificationenvelope)\>

***

### refreshAmazonLwaAccessToken()

```ts
function refreshAmazonLwaAccessToken(options): Promise<AmazonLwaTokenResponse>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `Pick`\<[`AmazonMarketplaceClientOptions`](#amazonmarketplaceclientoptions), \| `"refreshToken"` \| `"lwaClientId"` \| `"lwaClientSecret"` \| `"lwaTokenUrl"` \| `"fetch"`\> |

#### Returns

`Promise`\<[`AmazonLwaTokenResponse`](#amazonlwatokenresponse)\>

***

### signAmazonSpApiRequest()

```ts
function signAmazonSpApiRequest(input): Record<string, string>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `accessKeyId`: `string`; `body?`: `string`; `headers?`: `Record`\<`string`, `string`\>; `method`: `string`; `now?`: `Date`; `region`: `string`; `secretAccessKey`: `string`; `service?`: `string`; `sessionToken?`: `string`; `url`: `string`; \} |
| `input.accessKeyId` | `string` |
| `input.body?` | `string` |
| `input.headers?` | `Record`\<`string`, `string`\> |
| `input.method` | `string` |
| `input.now?` | `Date` |
| `input.region` | `string` |
| `input.secretAccessKey` | `string` |
| `input.service?` | `string` |
| `input.sessionToken?` | `string` |
| `input.url` | `string` |

#### Returns

`Record`\<`string`, `string`\>

***

### unwrapAmazonNotificationPayload()

```ts
function unwrapAmazonNotificationPayload(payload): unknown;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | `unknown` |

#### Returns

`unknown`

## References

### amazonMarketplaceOperationAliases

Re-exports [amazonMarketplaceOperationAliases](dist/manifest.md#amazonmarketplaceoperationaliases)

***

### amazonMarketplaceProviderManifest

Re-exports [amazonMarketplaceProviderManifest](dist/manifest.md#amazonmarketplaceprovidermanifest)
