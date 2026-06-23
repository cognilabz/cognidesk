# integrations/video/zoom/dist/runtime

## Interfaces

### ParseZoomWebhookRequestOptions

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

##### webhookSecretToken?

```ts
optional webhookSecretToken?: string;
```

***

### ValidateZoomWebhookSignatureInput

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

##### webhookSecretToken

```ts
webhookSecretToken: string;
```

***

### ZoomCreateMeetingInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: ZoomVideoProviderExtensionFields;
```

##### agenda?

```ts
optional agenda?: string;
```

##### duration?

```ts
optional duration?: number;
```

##### password?

```ts
optional password?: string;
```

##### recurrence?

```ts
optional recurrence?: ZoomMeetingRecurrence;
```

##### scheduleFor?

```ts
optional scheduleFor?: string;
```

##### settings?

```ts
optional settings?: ZoomVideoJsonObject;
```

##### startTime?

```ts
optional startTime?: string;
```

##### templateId?

```ts
optional templateId?: string;
```

##### timezone?

```ts
optional timezone?: string;
```

##### topic?

```ts
optional topic?: string;
```

##### trackingFields?

```ts
optional trackingFields?: ZoomTrackingField[];
```

##### type?

```ts
optional type?: ZoomMeetingType;
```

***

### ZoomCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### expiresAt?

```ts
optional expiresAt?: string;
```

##### scopes?

```ts
optional scopes?: string[];
```

##### webhookSecretToken?

```ts
optional webhookSecretToken?: string;
```

***

### ZoomDeleteMeetingInput

#### Properties

##### occurrenceId?

```ts
optional occurrenceId?: string;
```

##### scheduleForReminder?

```ts
optional scheduleForReminder?: boolean;
```

***

### ZoomGetMeetingInput

#### Properties

##### occurrenceId?

```ts
optional occurrenceId?: string;
```

##### showPreviousOccurrences?

```ts
optional showPreviousOccurrences?: boolean;
```

***

### ZoomListMeetingsInput

#### Properties

##### from?

```ts
optional from?: string;
```

##### nextPageToken?

```ts
optional nextPageToken?: string;
```

##### pageNumber?

```ts
optional pageNumber?: number;
```

##### pageSize?

```ts
optional pageSize?: number;
```

##### timezone?

```ts
optional timezone?: string;
```

##### to?

```ts
optional to?: string;
```

##### type?

```ts
optional type?: ZoomListMeetingType;
```

***

### ZoomListMeetingsResponse

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

#### Properties

##### meetings

```ts
meetings: ZoomMeetingResource[];
```

##### next\_page\_token?

```ts
optional next_page_token?: string;
```

##### page\_count?

```ts
optional page_count?: number;
```

##### page\_number?

```ts
optional page_number?: number;
```

##### page\_size?

```ts
optional page_size?: number;
```

##### total\_records?

```ts
optional total_records?: number;
```

***

### ZoomLiveCheckOptions

#### Extends

- [`ZoomVideoClientOptions`](#zoomvideoclientoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

###### Inherited from

[`ZoomVideoClientOptions`](#zoomvideoclientoptions).[`accessToken`](#accesstoken-2)

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

###### Inherited from

[`ZoomVideoClientOptions`](#zoomvideoclientoptions).[`apiBaseUrl`](#apibaseurl-1)

##### client?

```ts
optional client?: Pick<ZoomVideoClient, "getCurrentUser">;
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

[`ZoomVideoClientOptions`](#zoomvideoclientoptions).[`fetch`](#fetch-1)

##### userId?

```ts
optional userId?: string;
```

###### Inherited from

[`ZoomVideoClientOptions`](#zoomvideoclientoptions).[`userId`](#userid-1)

***

### ZoomMeetingRecurrence

#### Properties

##### end\_date\_time?

```ts
optional end_date_time?: string;
```

##### end\_times?

```ts
optional end_times?: number;
```

##### monthly\_day?

```ts
optional monthly_day?: number;
```

##### monthly\_week?

```ts
optional monthly_week?: ZoomMonthlyWeek;
```

##### monthly\_week\_day?

```ts
optional monthly_week_day?: ZoomWeekday;
```

##### repeat\_interval?

```ts
optional repeat_interval?: number;
```

##### type

```ts
type: ZoomRecurrenceType;
```

##### weekly\_days?

```ts
optional weekly_days?: string;
```

***

### ZoomMeetingResource

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

#### Properties

##### agenda?

```ts
optional agenda?: string;
```

##### duration?

```ts
optional duration?: number;
```

##### host\_email?

```ts
optional host_email?: string;
```

##### host\_id?

```ts
optional host_id?: string;
```

##### id?

```ts
optional id?: string | number;
```

##### join\_url?

```ts
optional join_url?: string;
```

##### password?

```ts
optional password?: string;
```

##### settings?

```ts
optional settings?: ZoomVideoJsonObject;
```

##### start\_time?

```ts
optional start_time?: string;
```

##### start\_url?

```ts
optional start_url?: string;
```

##### status?

```ts
optional status?: ZoomMeetingStatus;
```

##### timezone?

```ts
optional timezone?: string;
```

##### topic?

```ts
optional topic?: string;
```

##### type?

```ts
optional type?: ZoomMeetingType;
```

##### uuid?

```ts
optional uuid?: string;
```

***

### ZoomMeetingsApiGeneratedClient

#### Extends

- `ZoomMeetingsApiArchivingGeneratedClient`.`ZoomMeetingsApiCloudRecordingGeneratedClient`.`ZoomMeetingsApiDevicesGeneratedClient`.`ZoomMeetingsApiH323DevicesGeneratedClient`.`ZoomMeetingsApiInMeetingAppsGeneratedClient`.`ZoomMeetingsApiInMeetingFeaturesGeneratedClient`.`ZoomMeetingsApiInvitationRegistrationGeneratedClient`.`ZoomMeetingsApiLiveStreamingGeneratedClient`.`ZoomMeetingsApiMeetingsGeneratedClient`.`ZoomMeetingsApiPACGeneratedClient`.`ZoomMeetingsApiPollsGeneratedClient`.`ZoomMeetingsApiReportsGeneratedClient`.`ZoomMeetingsApiSIPPhoneGeneratedClient`.`ZoomMeetingsApiSummariesGeneratedClient`.`ZoomMeetingsApiSurveysGeneratedClient`.`ZoomMeetingsApiTemplatesGeneratedClient`.`ZoomMeetingsApiTrackingFieldGeneratedClient`.`ZoomMeetingsApiTSPGeneratedClient`.`ZoomMeetingsApiWebinarsGeneratedClient`

#### Methods

##### AddBatchRegistrants()

```ts
AddBatchRegistrants(...args): Promise<{
  registrants?: readonly {
     email?: string;
     join_url?: string;
     participant_pin_code?: number;
     registrant_id?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/batch_registrants"`\>\] |

###### Returns

`Promise`\<\{
  `registrants?`: readonly \{
     `email?`: `string`;
     `join_url?`: `string`;
     `participant_pin_code?`: `number`;
     `registrant_id?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.AddBatchRegistrants
```

##### AddBatchWebinarRegistrants()

```ts
AddBatchWebinarRegistrants(...args): Promise<{
  registrants?: readonly {
     email?: string;
     join_url?: string;
     registrant_id?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/batch_registrants"`\>\] |

###### Returns

`Promise`\<\{
  `registrants?`: readonly \{
     `email?`: `string`;
     `join_url?`: `string`;
     `registrant_id?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.AddBatchWebinarRegistrants
```

##### AddDevice()

```ts
AddDevice(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /devices"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.AddDevice
```

##### AnalyticsDetails()

```ts
AnalyticsDetails(...args): Promise<{
  analytics_details?: readonly {
     date_time?: string;
     duration?: number;
     email?: string;
     name?: string;
  }[];
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/recordings/analytics_details"`\>\] |

###### Returns

`Promise`\<\{
  `analytics_details?`: readonly \{
     `date_time?`: `string`;
     `duration?`: `number`;
     `email?`: `string`;
     `name?`: `string`;
  \}[];
  `from?`: `string`;
  `next_page_token?`: `string`;
  `page_size?`: `number`;
  `to?`: `string`;
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.AnalyticsDetails
```

##### AnalyticsSummary()

```ts
AnalyticsSummary(...args): Promise<{
  analytics_summary?: readonly {
     date?: string;
     downloads_total_count?: number;
     views_total_count?: number;
  }[];
  from?: string;
  to?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/recordings/analytics_summary"`\>\] |

###### Returns

`Promise`\<\{
  `analytics_summary?`: readonly \{
     `date?`: `string`;
     `downloads_total_count?`: `number`;
     `views_total_count?`: `number`;
  \}[];
  `from?`: `string`;
  `to?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.AnalyticsSummary
```

##### AssginGroup()

```ts
AssginGroup(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /devices/{deviceId}/assign_group"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.AssginGroup
```

##### AssigndevicetoauserCommonarea()

```ts
AssigndevicetoauserCommonarea(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /devices/zpa/assignment"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.AssigndevicetoauserCommonarea
```

##### ChangeDeviceAssociation()

```ts
ChangeDeviceAssociation(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /devices/{deviceId}/assignment"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.ChangeDeviceAssociation
```

##### CreateBatchPolls()

```ts
CreateBatchPolls(...args): Promise<{
  polls?: readonly {
     anonymous?: boolean;
     id?: string;
     poll_type?: 1 | 2 | 3;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        case_sensitive?: boolean;
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
           prompt_right_answers?: readonly string[];
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        right_answers?: readonly string[];
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     status?: "started" | "ended" | "notstart" | "sharing";
     title?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/batch_polls"`\>\] |

###### Returns

`Promise`\<\{
  `polls?`: readonly \{
     `anonymous?`: `boolean`;
     `id?`: `string`;
     `poll_type?`: `1` \| `2` \| `3`;
     `questions?`: readonly \{
        `answer_max_character?`: `number`;
        `answer_min_character?`: `number`;
        `answer_required?`: `boolean`;
        `answers?`: readonly `string`[];
        `case_sensitive?`: `boolean`;
        `name?`: `string`;
        `prompts?`: readonly \{
           `prompt_question?`: `string`;
           `prompt_right_answers?`: readonly `string`[];
        \}[];
        `rating_max_label?`: `string`;
        `rating_max_value?`: `number`;
        `rating_min_label?`: `string`;
        `rating_min_value?`: `number`;
        `right_answers?`: readonly `string`[];
        `show_as_dropdown?`: `boolean`;
        `type?`:   \| `"single"`
           \| `"multiple"`
           \| `"matching"`
           \| `"rank_order"`
           \| `"short_answer"`
           \| `"long_answer"`
           \| `"fill_in_the_blank"`
           \| `"rating_scale"`;
     \}[];
     `status?`: `"started"` \| `"ended"` \| `"notstart"` \| `"sharing"`;
     `title?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiPollsGeneratedClient.CreateBatchPolls
```

##### CreateWebinarBrandingNameTag()

```ts
CreateWebinarBrandingNameTag(...args): Promise<{
  accent_color?: string;
  background_color?: string;
  id?: string;
  is_default?: boolean;
  name?: string;
  text_color?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/branding/name_tags"`\>\] |

###### Returns

`Promise`\<\{
  `accent_color?`: `string`;
  `background_color?`: `string`;
  `id?`: `string`;
  `is_default?`: `boolean`;
  `name?`: `string`;
  `text_color?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.CreateWebinarBrandingNameTag
```

##### DeleteArchivedFiles()

```ts
DeleteArchivedFiles(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /past_meetings/{meetingUUID}/archive_files"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiArchivingGeneratedClient.DeleteArchivedFiles
```

##### DeleteDevice()

```ts
DeleteDevice(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /devices/{deviceId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.DeleteDevice
```

##### DeleteMeetingChatMessageById()

```ts
DeleteMeetingChatMessageById(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /live_meetings/{meetingId}/chat/messages/{messageId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiInMeetingFeaturesGeneratedClient.DeleteMeetingChatMessageById
```

##### Deletemeetingorwebinarsummary()

```ts
Deletemeetingorwebinarsummary(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/meeting_summary"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiSummariesGeneratedClient.Deletemeetingorwebinarsummary
```

##### DeleteMeetingTranscript()

```ts
DeleteMeetingTranscript(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/transcript"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.DeleteMeetingTranscript
```

##### DeleteSIPPhonePhones()

```ts
DeleteSIPPhonePhones(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /sip_phones/phones/{phoneId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiSIPPhoneGeneratedClient.DeleteSIPPhonePhones
```

##### DeleteWebinarBrandingNameTag()

```ts
DeleteWebinarBrandingNameTag(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/branding/name_tags"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.DeleteWebinarBrandingNameTag
```

##### DeleteWebinarBrandingVB()

```ts
DeleteWebinarBrandingVB(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/branding/virtual_backgrounds"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.DeleteWebinarBrandingVB
```

##### DeleteWebinarBrandingWallpaper()

```ts
DeleteWebinarBrandingWallpaper(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/branding/wallpaper"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.DeleteWebinarBrandingWallpaper
```

##### DeleteWebinarChatMessageById()

```ts
DeleteWebinarChatMessageById(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /live_webinars/{webinarId}/chat/messages/{messageId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.DeleteWebinarChatMessageById
```

##### DeleteWebinarRegistrant()

```ts
DeleteWebinarRegistrant(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/registrants/{registrantId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.DeleteWebinarRegistrant
```

##### DeleteZpaDeviceByVendorAndMacAddress()

```ts
DeleteZpaDeviceByVendorAndMacAddress(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.DeleteZpaDeviceByVendorAndMacAddress
```

##### DeviceCreate()

```ts
DeviceCreate(...args): Promise<{
  id?: string;
} & {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /h323/devices"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
\} & \{
  `encryption`: `"auto"` \| `"yes"` \| `"no"`;
  `ip`: `string`;
  `name`: `string`;
  `protocol`: `"H.323"` \| `"SIP"`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiH323DevicesGeneratedClient.DeviceCreate
```

##### DeviceDelete()

```ts
DeviceDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /h323/devices/{deviceId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiH323DevicesGeneratedClient.DeviceDelete
```

##### DeviceList()

```ts
DeviceList(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  devices?: readonly {
     id?: string;
   } & {
     encryption: "auto" | "yes" | "no";
     ip: string;
     name: string;
     protocol: "H.323" | "SIP";
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /h323/devices"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `devices?`: readonly \{
     `id?`: `string`;
   \} & \{
     `encryption`: `"auto"` \| `"yes"` \| `"no"`;
     `ip`: `string`;
     `name`: `string`;
     `protocol`: `"H.323"` \| `"SIP"`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiH323DevicesGeneratedClient.DeviceList
```

##### DeviceUpdate()

```ts
DeviceUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /h323/devices/{deviceId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiH323DevicesGeneratedClient.DeviceUpdate
```

##### EnableSIPPhonePhones()

```ts
EnableSIPPhonePhones(...args): Promise<{
  authorization_name?: string;
  display_number?: string;
  domain?: string;
  password?: string;
  phone_id?: string;
  registration_expire_time?: number;
  server?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_2?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_3?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  user_email?: string;
  user_name?: string;
  voice_mail?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /sip_phones/phones"`\>\] |

###### Returns

`Promise`\<\{
  `authorization_name?`: `string`;
  `display_number?`: `string`;
  `domain?`: `string`;
  `password?`: `string`;
  `phone_id?`: `string`;
  `registration_expire_time?`: `number`;
  `server?`: \{
     `proxy_server?`: `string`;
     `register_server?`: `string`;
     `transport_protocol?`: `"UDP"` \| `"TCP"` \| `"TLS"` \| `"AUTO"`;
  \};
  `server_2?`: \{
     `proxy_server?`: `string`;
     `register_server?`: `string`;
     `transport_protocol?`: `"UDP"` \| `"TCP"` \| `"TLS"` \| `"AUTO"`;
  \};
  `server_3?`: \{
     `proxy_server?`: `string`;
     `register_server?`: `string`;
     `transport_protocol?`: `"UDP"` \| `"TCP"` \| `"TLS"` \| `"AUTO"`;
  \};
  `user_email?`: `string`;
  `user_name?`: `string`;
  `voice_mail?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiSIPPhoneGeneratedClient.EnableSIPPhonePhones
```

##### Getameetingsummary()

```ts
Getameetingsummary(...args): Promise<{
  edited_summary?: {
     next_steps?: readonly string[];
     summary_details?: string;
     summary_overview?: string;
  };
  meeting_end_time?: string;
  meeting_host_email?: string;
  meeting_host_id?: string;
  meeting_id?: number;
  meeting_start_time?: string;
  meeting_topic?: string;
  meeting_uuid?: string;
  next_steps?: readonly string[];
  summary_content?: string;
  summary_created_time?: string;
  summary_details?: readonly {
     label?: string;
     summary?: string;
  }[];
  summary_doc_url?: string;
  summary_end_time?: string;
  summary_last_modified_time?: string;
  summary_last_modified_user_email?: string;
  summary_last_modified_user_id?: string;
  summary_overview?: string;
  summary_start_time?: string;
  summary_title?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/meeting_summary"`\>\] |

###### Returns

`Promise`\<\{
  `edited_summary?`: \{
     `next_steps?`: readonly `string`[];
     `summary_details?`: `string`;
     `summary_overview?`: `string`;
  \};
  `meeting_end_time?`: `string`;
  `meeting_host_email?`: `string`;
  `meeting_host_id?`: `string`;
  `meeting_id?`: `number`;
  `meeting_start_time?`: `string`;
  `meeting_topic?`: `string`;
  `meeting_uuid?`: `string`;
  `next_steps?`: readonly `string`[];
  `summary_content?`: `string`;
  `summary_created_time?`: `string`;
  `summary_details?`: readonly \{
     `label?`: `string`;
     `summary?`: `string`;
  \}[];
  `summary_doc_url?`: `string`;
  `summary_end_time?`: `string`;
  `summary_last_modified_time?`: `string`;
  `summary_last_modified_user_email?`: `string`;
  `summary_last_modified_user_id?`: `string`;
  `summary_overview?`: `string`;
  `summary_start_time?`: `string`;
  `summary_title?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiSummariesGeneratedClient.Getameetingsummary
```

##### GetArchivedFiles()

```ts
GetArchivedFiles(...args): Promise<{
  account_name: string;
  archive_files: readonly {
     auto_delete?: boolean;
     download_url: string;
     encryption_fingerprint: string;
     file_extension: string;
     file_path?: string;
     file_size: number;
     file_type:   | "MP4"
        | "M4A"
        | "CHAT"
        | "CC"
        | "CHAT_MESSAGE"
        | "TRANSCRIPT"
        | "SUB_GROUP_MEMBER_LOG"
        | "AIC_COVERSATION";
     id: string;
     individual: boolean;
     number_of_messages?: number;
     participant_email?: string;
     participant_join_time: string;
     participant_leave_time: string;
     recording_type:   | "shared_screen_with_speaker_view"
        | "audio_only"
        | "chat_file"
        | "closed_caption"
        | "chat_message"
        | "audio_transcript"
        | "aic_conversation";
     status: "failed" | "completed" | "processing";
     storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
  }[];
  complete_time:   | {
   }
     | "";
  duration: number;
  duration_in_second: number;
  group_id?: string;
  host_id: string;
  id: number;
  is_breakout_room: boolean;
  meeting_type: "internal" | "external";
  parent_meeting_id?: string;
  physical_files?: readonly {
     download_url?: string;
     file_id?: string;
     file_name?: string;
     file_size?: number;
  }[];
  recording_count: number;
  start_time: string;
  status: "completed" | "processing";
  timezone: string;
  topic: string;
  total_size: number;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
  uuid: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_meetings/{meetingUUID}/archive_files"`\>\] |

###### Returns

`Promise`\<\{
  `account_name`: `string`;
  `archive_files`: readonly \{
     `auto_delete?`: `boolean`;
     `download_url`: `string`;
     `encryption_fingerprint`: `string`;
     `file_extension`: `string`;
     `file_path?`: `string`;
     `file_size`: `number`;
     `file_type`:   \| `"MP4"`
        \| `"M4A"`
        \| `"CHAT"`
        \| `"CC"`
        \| `"CHAT_MESSAGE"`
        \| `"TRANSCRIPT"`
        \| `"SUB_GROUP_MEMBER_LOG"`
        \| `"AIC_COVERSATION"`;
     `id`: `string`;
     `individual`: `boolean`;
     `number_of_messages?`: `number`;
     `participant_email?`: `string`;
     `participant_join_time`: `string`;
     `participant_leave_time`: `string`;
     `recording_type`:   \| `"shared_screen_with_speaker_view"`
        \| `"audio_only"`
        \| `"chat_file"`
        \| `"closed_caption"`
        \| `"chat_message"`
        \| `"audio_transcript"`
        \| `"aic_conversation"`;
     `status`: `"failed"` \| `"completed"` \| `"processing"`;
     `storage_location?`: `"US"` \| `"AU"` \| `"BR"` \| `"CA"` \| `"EU"` \| `"IN"` \| `"JP"` \| `"SG"` \| `"CH"`;
  \}[];
  `complete_time`:   \| \{
   \}
     \| `""`;
  `duration`: `number`;
  `duration_in_second`: `number`;
  `group_id?`: `string`;
  `host_id`: `string`;
  `id`: `number`;
  `is_breakout_room`: `boolean`;
  `meeting_type`: `"internal"` \| `"external"`;
  `parent_meeting_id?`: `string`;
  `physical_files?`: readonly \{
     `download_url?`: `string`;
     `file_id?`: `string`;
     `file_name?`: `string`;
     `file_size?`: `number`;
  \}[];
  `recording_count`: `number`;
  `start_time`: `string`;
  `status`: `"completed"` \| `"processing"`;
  `timezone`: `string`;
  `topic`: `string`;
  `total_size`: `number`;
  `type`: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `100`;
  `uuid`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiArchivingGeneratedClient.GetArchivedFiles
```

##### GetArchivedFileStatistics()

```ts
GetArchivedFileStatistics(...args): Promise<{
  from?: string;
  statistic_by_file_extension?: {
     json_file_count?: number;
     m4a_file_count?: number;
     mp4_file_count?: number;
     txt_file_count?: number;
     vtt_file_count?: number;
  };
  statistic_by_file_status?: {
     completed_file_count?: number;
     failed_file_count?: number;
     processing_file_count?: number;
  };
  to?: string;
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /archive_files/statistics"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `statistic_by_file_extension?`: \{
     `json_file_count?`: `number`;
     `m4a_file_count?`: `number`;
     `mp4_file_count?`: `number`;
     `txt_file_count?`: `number`;
     `vtt_file_count?`: `number`;
  \};
  `statistic_by_file_status?`: \{
     `completed_file_count?`: `number`;
     `failed_file_count?`: `number`;
     `processing_file_count?`: `number`;
  \};
  `to?`: `string`;
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiArchivingGeneratedClient.GetArchivedFileStatistics
```

##### GetBillingInvoicesReports()

```ts
GetBillingInvoicesReports(...args): Promise<{
  currency?: string;
  invoices?: readonly {
     end_date?: string;
     invoice_charge_name?: string;
     invoice_number?: string;
     quantity?: number;
     start_date?: string;
     tax_amount?: string;
     total_amount?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/billing/invoices"`\>\] |

###### Returns

`Promise`\<\{
  `currency?`: `string`;
  `invoices?`: readonly \{
     `end_date?`: `string`;
     `invoice_charge_name?`: `string`;
     `invoice_number?`: `string`;
     `quantity?`: `number`;
     `start_date?`: `string`;
     `tax_amount?`: `string`;
     `total_amount?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.GetBillingInvoicesReports
```

##### GetBillingReport()

```ts
GetBillingReport(...args): Promise<{
  billing_reports?: readonly {
     end_date?: string;
     id?: string;
     start_date?: string;
     tax_amount?: string;
     total_amount?: string;
     type?: 0 | 1;
  }[];
  currency?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/billing"`\>\] |

###### Returns

`Promise`\<\{
  `billing_reports?`: readonly \{
     `end_date?`: `string`;
     `id?`: `string`;
     `start_date?`: `string`;
     `tax_amount?`: `string`;
     `total_amount?`: `string`;
     `type?`: `0` \| `1`;
  \}[];
  `currency?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.GetBillingReport
```

##### GetDevice()

```ts
GetDevice(...args): Promise<{
  app_version?: string;
  connected_to_zdm?: boolean;
  device_id?: string;
  device_name?: string;
  device_status?: -1 | 0 | 1;
  device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  enrolled_in_zdm?: boolean;
  last_online?: string;
  mac_address?: string;
  model?: string;
  platform_os?: string;
  room_id?: string;
  room_name?: string;
  sdk_version?: string;
  serial_number?: string;
  tag?: string;
  user_email?: string;
  vendor?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /devices/{deviceId}"`\>\] |

###### Returns

`Promise`\<\{
  `app_version?`: `string`;
  `connected_to_zdm?`: `boolean`;
  `device_id?`: `string`;
  `device_name?`: `string`;
  `device_status?`: `-1` \| `0` \| `1`;
  `device_type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6`;
  `enrolled_in_zdm?`: `boolean`;
  `last_online?`: `string`;
  `mac_address?`: `string`;
  `model?`: `string`;
  `platform_os?`: `string`;
  `room_id?`: `string`;
  `room_name?`: `string`;
  `sdk_version?`: `string`;
  `serial_number?`: `string`;
  `tag?`: `string`;
  `user_email?`: `string`;
  `vendor?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.GetDevice
```

##### Getdisclaimerreport()

```ts
Getdisclaimerreport(...args): Promise<{
  disclaimer_records?: readonly {
     client_type?: string;
     disclaimer_status?: "Agree" | "Cancel" | "Passive Agree" | "Decline Attend";
     disclaimer_type?: string;
     display_name?: string;
     group_ids?: readonly string[];
     is_guest?: boolean;
     is_zoom_event?: boolean;
     meeting_id?: string;
     meeting_number?: number;
     time?: string;
     user_email?: string;
  }[];
  next_page_token?: string;
  page_size?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/disclaimer"`\>\] |

###### Returns

`Promise`\<\{
  `disclaimer_records?`: readonly \{
     `client_type?`: `string`;
     `disclaimer_status?`: `"Agree"` \| `"Cancel"` \| `"Passive Agree"` \| `"Decline Attend"`;
     `disclaimer_type?`: `string`;
     `display_name?`: `string`;
     `group_ids?`: readonly `string`[];
     `is_guest?`: `boolean`;
     `is_zoom_event?`: `boolean`;
     `meeting_id?`: `string`;
     `meeting_number?`: `number`;
     `time?`: `string`;
     `user_email?`: `string`;
  \}[];
  `next_page_token?`: `string`;
  `page_size?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.Getdisclaimerreport
```

##### Gethistorymeetingandwebinarlist()

```ts
Gethistorymeetingandwebinarlist(...args): Promise<{
  history_meetings?: readonly {
     create_time?: string;
     custom_fields?: readonly {
        key?: string;
        value?: string;
     }[];
     department?: string;
     duration?: number;
     end_time?: string;
     feature_used?: {
        annotation?: boolean;
        avatar?: boolean;
        breakout_room?: boolean;
        closed_caption?: boolean;
        color_themes?: boolean;
        document_collaboration?: boolean;
        file_sharing?: boolean;
        gen_ai_virtual_background?: boolean;
        immersive_scene?: boolean;
        in_meeting_chat?: boolean;
        join_by_room?: boolean;
        language_interpretation?: boolean;
        live_transcription?: boolean;
        live_translation?: boolean;
        meeting_questions?: boolean;
        meeting_summary?: boolean;
        meeting_wallpaper?: boolean;
        multi_share?: boolean;
        multi_speaker?: boolean;
        personalized_audio_isolation?: boolean;
        poll?: boolean;
        portrait_lighting?: boolean;
        raise_hand?: boolean;
        reaction?: boolean;
        record_to_cloud?: boolean;
        record_to_computer?: boolean;
        registration?: boolean;
        remote_control?: boolean;
        screen_sharing?: boolean;
        smart_recording?: boolean;
        switch_to_mobile?: boolean;
        telephone_usage?: boolean;
        video_on?: boolean;
        virtual_background?: boolean;
        waiting_room?: boolean;
        whiteboard?: boolean;
        zoom_apps?: boolean;
     };
     group?: readonly string[];
     host_display_name?: string;
     host_email?: string;
     max_concurrent_views?: number;
     meeting_id?: number;
     meeting_uuid?: string;
     participants?: number;
     source?: string;
     start_time?: string;
     topic?: string;
     total_participant_minutes?: number;
     tracking_fields?: readonly {
        field?: string;
        value?: string;
     }[];
     type?: "Meeting" | "Webinar";
     unique_viewers?: number;
  }[];
  next_page_token?: string;
  page_size?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/history_meetings"`\>\] |

###### Returns

`Promise`\<\{
  `history_meetings?`: readonly \{
     `create_time?`: `string`;
     `custom_fields?`: readonly \{
        `key?`: `string`;
        `value?`: `string`;
     \}[];
     `department?`: `string`;
     `duration?`: `number`;
     `end_time?`: `string`;
     `feature_used?`: \{
        `annotation?`: `boolean`;
        `avatar?`: `boolean`;
        `breakout_room?`: `boolean`;
        `closed_caption?`: `boolean`;
        `color_themes?`: `boolean`;
        `document_collaboration?`: `boolean`;
        `file_sharing?`: `boolean`;
        `gen_ai_virtual_background?`: `boolean`;
        `immersive_scene?`: `boolean`;
        `in_meeting_chat?`: `boolean`;
        `join_by_room?`: `boolean`;
        `language_interpretation?`: `boolean`;
        `live_transcription?`: `boolean`;
        `live_translation?`: `boolean`;
        `meeting_questions?`: `boolean`;
        `meeting_summary?`: `boolean`;
        `meeting_wallpaper?`: `boolean`;
        `multi_share?`: `boolean`;
        `multi_speaker?`: `boolean`;
        `personalized_audio_isolation?`: `boolean`;
        `poll?`: `boolean`;
        `portrait_lighting?`: `boolean`;
        `raise_hand?`: `boolean`;
        `reaction?`: `boolean`;
        `record_to_cloud?`: `boolean`;
        `record_to_computer?`: `boolean`;
        `registration?`: `boolean`;
        `remote_control?`: `boolean`;
        `screen_sharing?`: `boolean`;
        `smart_recording?`: `boolean`;
        `switch_to_mobile?`: `boolean`;
        `telephone_usage?`: `boolean`;
        `video_on?`: `boolean`;
        `virtual_background?`: `boolean`;
        `waiting_room?`: `boolean`;
        `whiteboard?`: `boolean`;
        `zoom_apps?`: `boolean`;
     \};
     `group?`: readonly `string`[];
     `host_display_name?`: `string`;
     `host_email?`: `string`;
     `max_concurrent_views?`: `number`;
     `meeting_id?`: `number`;
     `meeting_uuid?`: `string`;
     `participants?`: `number`;
     `source?`: `string`;
     `start_time?`: `string`;
     `topic?`: `string`;
     `total_participant_minutes?`: `number`;
     `tracking_fields?`: readonly \{
        `field?`: `string`;
        `value?`: `string`;
     \}[];
     `type?`: `"Meeting"` \| `"Webinar"`;
     `unique_viewers?`: `number`;
  \}[];
  `next_page_token?`: `string`;
  `page_size?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.Gethistorymeetingandwebinarlist
```

##### GetMeetingLiveStreamDetails()

```ts
GetMeetingLiveStreamDetails(...args): Promise<{
  page_url?: string;
  resolution?: string;
  stream_key?: string;
  stream_url?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/livestream"`\>\] |

###### Returns

`Promise`\<\{
  `page_url?`: `string`;
  `resolution?`: `string`;
  `stream_key?`: `string`;
  `stream_url?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiLiveStreamingGeneratedClient.GetMeetingLiveStreamDetails
```

##### GetMeetingTranscript()

```ts
GetMeetingTranscript(...args): Promise<{
  account_id?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  can_download?: boolean;
  download_restriction_reason?:   | "DELETED_OR_TRASHED"
     | "UNSUPPORTED"
     | "NO_TRANSCRIPT_DATA"
     | "NOT_READY";
  download_url?: string;
  host_id?: string;
  meeting_id?: string;
  meeting_topic?: string;
  transcript_created_time?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/transcript"`\>\] |

###### Returns

`Promise`\<\{
  `account_id?`: `string`;
  `auto_delete?`: `boolean`;
  `auto_delete_date?`: `string`;
  `can_download?`: `boolean`;
  `download_restriction_reason?`:   \| `"DELETED_OR_TRASHED"`
     \| `"UNSUPPORTED"`
     \| `"NO_TRANSCRIPT_DATA"`
     \| `"NOT_READY"`;
  `download_url?`: `string`;
  `host_id?`: `string`;
  `meeting_id?`: `string`;
  `meeting_topic?`: `string`;
  `transcript_created_time?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.GetMeetingTranscript
```

##### Getremotesupportreport()

```ts
Getremotesupportreport(...args): Promise<{
  next_page_token?: string;
  page_size?: number;
  remote_support_logs?: readonly {
     duration?: string;
     end_time?: string;
     meeting_host_id?: string;
     meeting_number?: number;
     meeting_start_time?: string;
     meeting_uuid?: string;
     request_time?: string;
     start_time?: string;
     supportee_email?: string;
     supportee_name?: string;
     supporter_email?: string;
     supporter_name?: string;
     topic?: string;
     wait_time?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/remote_support"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_size?`: `number`;
  `remote_support_logs?`: readonly \{
     `duration?`: `string`;
     `end_time?`: `string`;
     `meeting_host_id?`: `string`;
     `meeting_number?`: `number`;
     `meeting_start_time?`: `string`;
     `meeting_uuid?`: `string`;
     `request_time?`: `string`;
     `start_time?`: `string`;
     `supportee_email?`: `string`;
     `supportee_name?`: `string`;
     `supporter_email?`: `string`;
     `supporter_name?`: `string`;
     `topic?`: `string`;
     `wait_time?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.Getremotesupportreport
```

##### GetSipDialingWithPasscode()

```ts
GetSipDialingWithPasscode(...args): Promise<{
  expire_in?: number;
  paid_crc_plan_participant?: boolean;
  participant_identifier_code?: string;
  sip_dialing?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/sip_dialing"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `number`;
  `paid_crc_plan_participant?`: `boolean`;
  `participant_identifier_code?`: `string`;
  `sip_dialing?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.GetSipDialingWithPasscode
```

##### GetTrackingSources()

```ts
GetTrackingSources(...args): Promise<{
  total_records?: number;
  tracking_sources?: readonly {
     id?: string;
     registration_count?: number;
     source_name?: string;
     tracking_url?: string;
     visitor_count?: number;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/tracking_sources"`\>\] |

###### Returns

`Promise`\<\{
  `total_records?`: `number`;
  `tracking_sources?`: readonly \{
     `id?`: `string`;
     `registration_count?`: `number`;
     `source_name?`: `string`;
     `tracking_url?`: `string`;
     `visitor_count?`: `number`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.GetTrackingSources
```

##### GetWebinarBranding()

```ts
GetWebinarBranding(...args): Promise<{
  name_tags?: readonly {
     accent_color?: string;
     background_color?: string;
     id?: string;
     is_default?: boolean;
     name?: string;
     text_color?: string;
  }[];
  virtual_backgrounds?: readonly {
     id?: string;
     is_default?: boolean;
     name?: string;
  }[];
  wallpaper?: {
     id?: string;
  };
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/branding"`\>\] |

###### Returns

`Promise`\<\{
  `name_tags?`: readonly \{
     `accent_color?`: `string`;
     `background_color?`: `string`;
     `id?`: `string`;
     `is_default?`: `boolean`;
     `name?`: `string`;
     `text_color?`: `string`;
  \}[];
  `virtual_backgrounds?`: readonly \{
     `id?`: `string`;
     `is_default?`: `boolean`;
     `name?`: `string`;
  \}[];
  `wallpaper?`: \{
     `id?`: `string`;
  \};
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.GetWebinarBranding
```

##### GetWebinarLiveStreamDetails()

```ts
GetWebinarLiveStreamDetails(...args): Promise<{
  page_url?: string;
  resolution?: string;
  stream_key?: string;
  stream_url?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/livestream"`\>\] |

###### Returns

`Promise`\<\{
  `page_url?`: `string`;
  `resolution?`: `string`;
  `stream_key?`: `string`;
  `stream_url?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.GetWebinarLiveStreamDetails
```

##### GetWebinarSipDialingWithPasscode()

```ts
GetWebinarSipDialingWithPasscode(...args): Promise<{
  expire_in?: number;
  paid_crc_plan_participant?: boolean;
  participant_identifier_code?: string;
  sip_dialing?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/sip_dialing"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `number`;
  `paid_crc_plan_participant?`: `boolean`;
  `participant_identifier_code?`: `string`;
  `sip_dialing?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.GetWebinarSipDialingWithPasscode
```

##### Getzdmgroupinfo()

```ts
Getzdmgroupinfo(...args): Promise<{
  groups?: readonly {
     description?: string;
     name?: string;
     zdm_group_id?: string;
  }[];
  next_page_token?: string;
  page_size?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /devices/groups"`\>\] |

###### Returns

`Promise`\<\{
  `groups?`: readonly \{
     `description?`: `string`;
     `name?`: `string`;
     `zdm_group_id?`: `string`;
  \}[];
  `next_page_token?`: `string`;
  `page_size?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.Getzdmgroupinfo
```

##### GetZpaDeviceListProfileSettingOfaUser()

```ts
GetZpaDeviceListProfileSettingOfaUser(...args): Promise<{
  device_infos?: readonly {
     device_id?: string;
     device_type?: string;
     model?: string;
     policy?: {
        call_control?: {
           status?: "unsupported" | "on" | "off";
        };
        hot_desking?: {
           status?: "online" | "offline";
        };
     };
     status?: "online" | "offline";
     vendor?: string;
  }[];
  language?: string;
  timezone?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /devices/zpa/settings"`\>\] |

###### Returns

`Promise`\<\{
  `device_infos?`: readonly \{
     `device_id?`: `string`;
     `device_type?`: `string`;
     `model?`: `string`;
     `policy?`: \{
        `call_control?`: \{
           `status?`: `"unsupported"` \| `"on"` \| `"off"`;
        \};
        `hot_desking?`: \{
           `status?`: `"online"` \| `"offline"`;
        \};
     \};
     `status?`: `"online"` \| `"offline"`;
     `vendor?`: `string`;
  \}[];
  `language?`: `string`;
  `timezone?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.GetZpaDeviceListProfileSettingOfaUser
```

##### GetZpaVersioninfo()

```ts
GetZpaVersioninfo(...args): Promise<{
  app_versions?: readonly string[];
  firmware_versions?: readonly {
     model?: string;
     vendor?: string;
     version?: string;
     warn_info?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /devices/zpa/zdm_groups/{zdmGroupId}/versions"`\>\] |

###### Returns

`Promise`\<\{
  `app_versions?`: readonly `string`[];
  `firmware_versions?`: readonly \{
     `model?`: `string`;
     `vendor?`: `string`;
     `version?`: `string`;
     `warn_info?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.GetZpaVersioninfo
```

##### InMeetingControl()

```ts
InMeetingControl(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /live_meetings/{meetingId}/events"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiInMeetingFeaturesGeneratedClient.InMeetingControl
```

##### ListArchivedFiles()

```ts
ListArchivedFiles(...args): Promise<{
  from?: string;
  meetings?: readonly {
     account_name: string;
     archive_files: readonly {
        auto_delete?: boolean;
        download_url: string;
        encryption_fingerprint: string;
        file_extension: string;
        file_path?: string;
        file_size: number;
        file_type:   | "MP4"
           | "M4A"
           | "CHAT"
           | "CC"
           | "CHAT_MESSAGE"
           | "TRANSCRIPT"
           | "SUB_GROUP_MEMBER_LOG"
           | "AIC_COVERSATION";
        id: string;
        individual: boolean;
        number_of_messages?: number;
        participant_email?: string;
        participant_join_time: string;
        participant_leave_time: string;
        recording_type:   | "shared_screen_with_speaker_view"
           | "audio_only"
           | "chat_file"
           | "closed_caption"
           | "chat_message"
           | "audio_transcript"
           | "aic_conversation";
        status: "failed" | "completed" | "processing";
        storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
     }[];
     complete_time:   | {
      }
        | "";
     duration: number;
     duration_in_second: number;
     group_id?: string;
     host_id: string;
     id: number;
     is_breakout_room: boolean;
     meeting_type: "internal" | "external";
     parent_meeting_id?: string;
     physical_files?: readonly {
        download_url?: string;
        file_id?: string;
        file_name?: string;
        file_size?: number;
     }[];
     recording_count: number;
     start_time: string;
     status: "completed" | "processing";
     timezone: string;
     topic: string;
     total_size: number;
     type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
     uuid: string;
  }[];
  next_page_token?: string;
  page_size?: number;
  to?: string;
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /archive_files"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `meetings?`: readonly \{
     `account_name`: `string`;
     `archive_files`: readonly \{
        `auto_delete?`: `boolean`;
        `download_url`: `string`;
        `encryption_fingerprint`: `string`;
        `file_extension`: `string`;
        `file_path?`: `string`;
        `file_size`: `number`;
        `file_type`:   \| `"MP4"`
           \| `"M4A"`
           \| `"CHAT"`
           \| `"CC"`
           \| `"CHAT_MESSAGE"`
           \| `"TRANSCRIPT"`
           \| `"SUB_GROUP_MEMBER_LOG"`
           \| `"AIC_COVERSATION"`;
        `id`: `string`;
        `individual`: `boolean`;
        `number_of_messages?`: `number`;
        `participant_email?`: `string`;
        `participant_join_time`: `string`;
        `participant_leave_time`: `string`;
        `recording_type`:   \| `"shared_screen_with_speaker_view"`
           \| `"audio_only"`
           \| `"chat_file"`
           \| `"closed_caption"`
           \| `"chat_message"`
           \| `"audio_transcript"`
           \| `"aic_conversation"`;
        `status`: `"failed"` \| `"completed"` \| `"processing"`;
        `storage_location?`: `"US"` \| `"AU"` \| `"BR"` \| `"CA"` \| `"EU"` \| `"IN"` \| `"JP"` \| `"SG"` \| `"CH"`;
     \}[];
     `complete_time`:   \| \{
      \}
        \| `""`;
     `duration`: `number`;
     `duration_in_second`: `number`;
     `group_id?`: `string`;
     `host_id`: `string`;
     `id`: `number`;
     `is_breakout_room`: `boolean`;
     `meeting_type`: `"internal"` \| `"external"`;
     `parent_meeting_id?`: `string`;
     `physical_files?`: readonly \{
        `download_url?`: `string`;
        `file_id?`: `string`;
        `file_name?`: `string`;
        `file_size?`: `number`;
     \}[];
     `recording_count`: `number`;
     `start_time`: `string`;
     `status`: `"completed"` \| `"processing"`;
     `timezone`: `string`;
     `topic`: `string`;
     `total_size`: `number`;
     `type`: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `100`;
     `uuid`: `string`;
  \}[];
  `next_page_token?`: `string`;
  `page_size?`: `number`;
  `to?`: `string`;
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiArchivingGeneratedClient.ListArchivedFiles
```

##### ListDevices()

```ts
ListDevices(...args): Promise<{
  devices?: readonly {
     app_version?: string;
     connected_to_zdm?: boolean;
     device_id?: string;
     device_name?: string;
     device_status?: -1 | 0 | 1;
     device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
     enrolled_in_zdm?: boolean;
     last_online?: string;
     mac_address?: string;
     model?: string;
     platform_os?: string;
     room_id?: string;
     room_name?: string;
     serial_number?: string;
     skd_version?: string;
     tag?: string;
     user_email?: string;
     vendor?: string;
  }[];
  next_page_token?: string;
  page_size?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /devices"`\>\] |

###### Returns

`Promise`\<\{
  `devices?`: readonly \{
     `app_version?`: `string`;
     `connected_to_zdm?`: `boolean`;
     `device_id?`: `string`;
     `device_name?`: `string`;
     `device_status?`: `-1` \| `0` \| `1`;
     `device_type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6`;
     `enrolled_in_zdm?`: `boolean`;
     `last_online?`: `string`;
     `mac_address?`: `string`;
     `model?`: `string`;
     `platform_os?`: `string`;
     `room_id?`: `string`;
     `room_name?`: `string`;
     `serial_number?`: `string`;
     `skd_version?`: `string`;
     `tag?`: `string`;
     `user_email?`: `string`;
     `vendor?`: `string`;
  \}[];
  `next_page_token?`: `string`;
  `page_size?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.ListDevices
```

##### Listmeetingsummaries()

```ts
Listmeetingsummaries(...args): Promise<{
  from?: string;
  next_page_token?: string;
  page_size?: number;
  summaries?: readonly {
     meeting_end_time?: string;
     meeting_host_email?: string;
     meeting_host_id?: string;
     meeting_id?: number;
     meeting_start_time?: string;
     meeting_topic?: string;
     meeting_uuid?: string;
     summary_created_time?: string;
     summary_end_time?: string;
     summary_last_modified_time?: string;
     summary_start_time?: string;
  }[];
  to?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/meeting_summaries"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `next_page_token?`: `string`;
  `page_size?`: `number`;
  `summaries?`: readonly \{
     `meeting_end_time?`: `string`;
     `meeting_host_email?`: `string`;
     `meeting_host_id?`: `string`;
     `meeting_id?`: `number`;
     `meeting_start_time?`: `string`;
     `meeting_topic?`: `string`;
     `meeting_uuid?`: `string`;
     `summary_created_time?`: `string`;
     `summary_end_time?`: `string`;
     `summary_last_modified_time?`: `string`;
     `summary_start_time?`: `string`;
  \}[];
  `to?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiSummariesGeneratedClient.Listmeetingsummaries
```

##### ListMeetingTemplates()

```ts
ListMeetingTemplates(...args): Promise<{
  templates?: readonly {
     id?: string;
     name?: string;
     type?: number;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/meeting_templates"`\>\] |

###### Returns

`Promise`\<\{
  `templates?`: readonly \{
     `id?`: `string`;
     `name?`: `string`;
     `type?`: `number`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTemplatesGeneratedClient.ListMeetingTemplates
```

##### ListPastMeetingPolls()

```ts
ListPastMeetingPolls(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_meetings/{meetingId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `date_time?`: `string`;
        `polling_id?`: `string`;
        `question?`: `string`;
     \}[];
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiPollsGeneratedClient.ListPastMeetingPolls
```

##### ListPastMeetingQA()

```ts
ListPastMeetingQA(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_meetings/{meetingId}/qa"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `question?`: `string`;
     \}[];
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.ListPastMeetingQA
```

##### ListPastWebinarPollResults()

```ts
ListPastWebinarPollResults(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_webinars/{webinarId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `date_time?`: `string`;
        `polling_id?`: `string`;
        `question?`: `string`;
     \}[];
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.ListPastWebinarPollResults
```

##### ListPastWebinarQA()

```ts
ListPastWebinarQA(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_webinars/{webinarId}/qa"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `question?`: `string`;
     \}[];
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.ListPastWebinarQA
```

##### ListSIPPhonePhones()

```ts
ListSIPPhonePhones(...args): Promise<{
  next_page_token?: string;
  page_size?: number;
  phones?: readonly {
     authorization_name?: string;
     display_number?: string;
     domain?: string;
     password?: string;
     phone_id?: string;
     registration_expire_time?: number;
     server?: {
        proxy_server?: string;
        register_server?: string;
        transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
     };
     server_2?: {
        proxy_server?: string;
        register_server?: string;
        transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
     };
     server_3?: {
        proxy_server?: string;
        register_server?: string;
        transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
     };
     user_email?: string;
     user_name?: string;
     voice_mail?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /sip_phones/phones"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_size?`: `number`;
  `phones?`: readonly \{
     `authorization_name?`: `string`;
     `display_number?`: `string`;
     `domain?`: `string`;
     `password?`: `string`;
     `phone_id?`: `string`;
     `registration_expire_time?`: `number`;
     `server?`: \{
        `proxy_server?`: `string`;
        `register_server?`: `string`;
        `transport_protocol?`: `"UDP"` \| `"TCP"` \| `"TLS"` \| `"AUTO"`;
     \};
     `server_2?`: \{
        `proxy_server?`: `string`;
        `register_server?`: `string`;
        `transport_protocol?`: `"UDP"` \| `"TCP"` \| `"TLS"` \| `"AUTO"`;
     \};
     `server_3?`: \{
        `proxy_server?`: `string`;
        `register_server?`: `string`;
        `transport_protocol?`: `"UDP"` \| `"TCP"` \| `"TLS"` \| `"AUTO"`;
     \};
     `user_email?`: `string`;
     `user_name?`: `string`;
     `voice_mail?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiSIPPhoneGeneratedClient.ListSIPPhonePhones
```

##### ListUpcomingMeeting()

```ts
ListUpcomingMeeting(...args): Promise<{
  meetings?: readonly {
     created_at?: string;
     duration?: number;
     id?: number;
     is_all_day?: boolean;
     is_host?: boolean;
     join_url?: string;
     passcode?: string;
     start_time?: string;
     timezone?: string;
     topic?: string;
     type?: 1 | 2 | 3 | 8;
     use_pmi?: boolean;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/upcoming_meetings"`\>\] |

###### Returns

`Promise`\<\{
  `meetings?`: readonly \{
     `created_at?`: `string`;
     `duration?`: `number`;
     `id?`: `number`;
     `is_all_day?`: `boolean`;
     `is_host?`: `boolean`;
     `join_url?`: `string`;
     `passcode?`: `string`;
     `start_time?`: `string`;
     `timezone?`: `string`;
     `topic?`: `string`;
     `type?`: `1` \| `2` \| `3` \| `8`;
     `use_pmi?`: `boolean`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.ListUpcomingMeeting
```

##### ListWebinarParticipants()

```ts
ListWebinarParticipants(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  participants?: readonly {
     duration?: number;
     failover?: boolean;
     id?: string;
     internal_user?: boolean;
     join_time?: string;
     leave_time?: string;
     name?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_webinars/{webinarId}/participants"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_size?`: `number`;
  `participants?`: readonly \{
     `duration?`: `number`;
     `failover?`: `boolean`;
     `id?`: `string`;
     `internal_user?`: `boolean`;
     `join_time?`: `string`;
     `leave_time?`: `string`;
     `name?`: `string`;
     `registrant_id?`: `string`;
     `status?`: `"in_meeting"` \| `"in_waiting_room"`;
     `user_email?`: `string`;
     `user_id?`: `string`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.ListWebinarParticipants
```

##### ListWebinarTemplates()

```ts
ListWebinarTemplates(...args): Promise<{
  templates?: readonly {
     id?: string;
     name?: string;
     type?: number;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/webinar_templates"`\>\] |

###### Returns

`Promise`\<\{
  `templates?`: readonly \{
     `id?`: `string`;
     `name?`: `string`;
     `type?`: `number`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.ListWebinarTemplates
```

##### Meeting()

```ts
Meeting(...args): Promise<{
  agenda?: string;
  assistant_id?: string;
  chat_join_url?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  dynamic_host_key?: string;
  encrypted_password?: string;
  h323_password?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  pmi?: string;
  pre_schedule?: boolean;
  pstn_password?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
  };
  registration_url?: string;
  settings?: {
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_manage_cloud_recording?: boolean;
     alternative_host_manage_meeting_summary?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     alternative_hosts_email_notification?: boolean;
     approval_type?: 0 | 1 | 2;
     approved_or_denied_countries_or_regions?: {
        approved_list?: readonly string[];
        denied_list?: readonly string[];
        enable?: boolean;
        method?: "approve" | "deny";
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_exception?: readonly {
        email?: string;
        join_url?: string;
        name?: string;
     }[];
     authentication_name?: string;
     authentication_option?: string;
     auto_add_recording_to_video_management?: {
        channels?: readonly {
           channel_id: string;
           name?: string;
        }[];
        enable: boolean;
     };
     auto_recording?: "none" | "local" | "cloud";
     auto_start_ai_companion_questions?: boolean;
     auto_start_meeting_summary?: boolean;
     breakout_room?: {
        enable?: boolean;
        rooms?: readonly {
           name?: string;
           participants?: readonly string[];
        }[];
     };
     calendar_type?: 1 | 2;
     close_registration?: boolean;
     cn_meeting?: boolean;
     contact_email?: string;
     contact_name?: string;
     continuous_meeting_chat?: {
        auto_add_invited_external_users?: boolean;
        auto_add_meeting_participants?: boolean;
        channel_id?: string;
        enable?: boolean;
     };
     custom_keys?: readonly {
        key?: string;
        value?: string;
     }[];
     device_testing?: boolean;
     disable_participant_video?: boolean;
     email_in_attendee_report?: boolean;
     email_notification?: boolean;
     encryption_type?: "enhanced_encryption" | "e2ee";
     enforce_login?: boolean;
     enforce_login_domains?: string;
     focus_mode?: boolean;
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree";
     }[];
     host_save_video_order?: boolean;
     host_video?: boolean;
     in_meeting?: boolean;
     internal_meeting?: boolean;
     jbh_time?: 0 | 5 | 10 | 15;
     join_before_host?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     meeting_invitees?: readonly {
        email?: string;
        internal_user?: boolean;
     }[];
     mute_upon_entry?: boolean;
     participant_focused_meeting?: boolean;
     participant_video?: boolean;
     private_meeting?: boolean;
     push_change_to_calendar?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_submit_questions?: boolean;
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        enable?: boolean;
        question_visibility?: "all" | "answered";
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     resources?: readonly {
        permission_level?: "editor" | "commenter" | "viewer";
        resource_id?: string;
        resource_type?: "whiteboard";
     }[];
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     summary_template_id?: string;
     use_pmi?: boolean;
     waiting_room?: boolean;
     waiting_room_options?: {
        mode: "custom" | "follow_setting";
        who_goes_to_waiting_room?:   | "everyone"
           | "users_not_in_account"
           | "users_not_in_account_or_whitelisted_domains"
           | "users_not_on_invite"
           | "users_not_in_org";
     };
     watermark?: boolean;
     who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
     who_will_receive_summary?: 1 | 2 | 3 | 4;
  };
  start_time?: string;
  start_url?: string;
  status?: "started" | "waiting";
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  type?: 1 | 2 | 3 | 4 | 8 | 10;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}"`\>\] |

###### Returns

`Promise`\<\{
  `agenda?`: `string`;
  `assistant_id?`: `string`;
  `chat_join_url?`: `string`;
  `created_at?`: `string`;
  `creation_source?`: `"other"` \| `"open_api"` \| `"web_portal"`;
  `duration?`: `number`;
  `dynamic_host_key?`: `string`;
  `encrypted_password?`: `string`;
  `h323_password?`: `string`;
  `host_email?`: `string`;
  `host_id?`: `string`;
  `id?`: `number`;
  `join_url?`: `string`;
  `occurrences?`: readonly \{
     `duration?`: `number`;
     `occurrence_id?`: `string`;
     `start_time?`: `string`;
     `status?`: `"available"` \| `"deleted"`;
  \}[];
  `password?`: `string`;
  `pmi?`: `string`;
  `pre_schedule?`: `boolean`;
  `pstn_password?`: `string`;
  `recurrence?`: \{
     `end_date_time?`: `string`;
     `end_times?`: `number`;
     `monthly_day?`: `number`;
     `monthly_week?`: `-1` \| `1` \| `2` \| `3` \| `4`;
     `monthly_week_day?`: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     `repeat_interval?`: `number`;
     `type`: `1` \| `2` \| `3`;
     `weekly_days?`: `"2"` \| `"1"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"`;
  \};
  `registration_url?`: `string`;
  `settings?`: \{
     `additional_data_center_regions?`: readonly `string`[];
     `allow_host_control_participant_mute_state?`: `boolean`;
     `allow_multiple_devices?`: `boolean`;
     `alternative_host_manage_cloud_recording?`: `boolean`;
     `alternative_host_manage_meeting_summary?`: `boolean`;
     `alternative_host_update_polls?`: `boolean`;
     `alternative_hosts?`: `string`;
     `alternative_hosts_email_notification?`: `boolean`;
     `approval_type?`: `0` \| `1` \| `2`;
     `approved_or_denied_countries_or_regions?`: \{
        `approved_list?`: readonly `string`[];
        `denied_list?`: readonly `string`[];
        `enable?`: `boolean`;
        `method?`: `"approve"` \| `"deny"`;
     \};
     `audio?`: `"both"` \| `"telephony"` \| `"voip"` \| `"thirdParty"`;
     `audio_conference_info?`: `string`;
     `authentication_domains?`: `string`;
     `authentication_exception?`: readonly \{
        `email?`: `string`;
        `join_url?`: `string`;
        `name?`: `string`;
     \}[];
     `authentication_name?`: `string`;
     `authentication_option?`: `string`;
     `auto_add_recording_to_video_management?`: \{
        `channels?`: readonly \{
           `channel_id`: `string`;
           `name?`: `string`;
        \}[];
        `enable`: `boolean`;
     \};
     `auto_recording?`: `"none"` \| `"local"` \| `"cloud"`;
     `auto_start_ai_companion_questions?`: `boolean`;
     `auto_start_meeting_summary?`: `boolean`;
     `breakout_room?`: \{
        `enable?`: `boolean`;
        `rooms?`: readonly \{
           `name?`: `string`;
           `participants?`: readonly `string`[];
        \}[];
     \};
     `calendar_type?`: `1` \| `2`;
     `close_registration?`: `boolean`;
     `cn_meeting?`: `boolean`;
     `contact_email?`: `string`;
     `contact_name?`: `string`;
     `continuous_meeting_chat?`: \{
        `auto_add_invited_external_users?`: `boolean`;
        `auto_add_meeting_participants?`: `boolean`;
        `channel_id?`: `string`;
        `enable?`: `boolean`;
     \};
     `custom_keys?`: readonly \{
        `key?`: `string`;
        `value?`: `string`;
     \}[];
     `device_testing?`: `boolean`;
     `disable_participant_video?`: `boolean`;
     `email_in_attendee_report?`: `boolean`;
     `email_notification?`: `boolean`;
     `encryption_type?`: `"enhanced_encryption"` \| `"e2ee"`;
     `enforce_login?`: `boolean`;
     `enforce_login_domains?`: `string`;
     `focus_mode?`: `boolean`;
     `global_dial_in_countries?`: readonly `string`[];
     `global_dial_in_numbers?`: readonly \{
        `city?`: `string`;
        `country?`: `string`;
        `country_name?`: `string`;
        `number?`: `string`;
        `type?`: `"toll"` \| `"tollfree"`;
     \}[];
     `host_save_video_order?`: `boolean`;
     `host_video?`: `boolean`;
     `in_meeting?`: `boolean`;
     `internal_meeting?`: `boolean`;
     `jbh_time?`: `0` \| `5` \| `10` \| `15`;
     `join_before_host?`: `boolean`;
     `language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `interpreter_languages?`: `string`;
           `languages?`: `string`;
        \}[];
     \};
     `meeting_authentication?`: `boolean`;
     `meeting_invitees?`: readonly \{
        `email?`: `string`;
        `internal_user?`: `boolean`;
     \}[];
     `mute_upon_entry?`: `boolean`;
     `participant_focused_meeting?`: `boolean`;
     `participant_video?`: `boolean`;
     `private_meeting?`: `boolean`;
     `push_change_to_calendar?`: `boolean`;
     `question_and_answer?`: \{
        `allow_anonymous_questions?`: `boolean`;
        `allow_submit_questions?`: `boolean`;
        `attendees_can_comment?`: `boolean`;
        `attendees_can_upvote?`: `boolean`;
        `enable?`: `boolean`;
        `question_visibility?`: `"all"` \| `"answered"`;
     \};
     `registrants_confirmation_email?`: `boolean`;
     `registrants_email_notification?`: `boolean`;
     `registration_type?`: `1` \| `2` \| `3`;
     `request_permission_to_unmute_participants?`: `boolean`;
     `resources?`: readonly \{
        `permission_level?`: `"editor"` \| `"commenter"` \| `"viewer"`;
        `resource_id?`: `string`;
        `resource_type?`: `"whiteboard"`;
     \}[];
     `show_join_info?`: `boolean`;
     `show_share_button?`: `boolean`;
     `sign_language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `sign_language?`: `string`;
        \}[];
     \};
     `summary_template_id?`: `string`;
     `use_pmi?`: `boolean`;
     `waiting_room?`: `boolean`;
     `waiting_room_options?`: \{
        `mode`: `"custom"` \| `"follow_setting"`;
        `who_goes_to_waiting_room?`:   \| `"everyone"`
           \| `"users_not_in_account"`
           \| `"users_not_in_account_or_whitelisted_domains"`
           \| `"users_not_on_invite"`
           \| `"users_not_in_org"`;
     \};
     `watermark?`: `boolean`;
     `who_can_ask_questions?`: `1` \| `2` \| `3` \| `4` \| `5`;
     `who_will_receive_summary?`: `1` \| `2` \| `3` \| `4`;
  \};
  `start_time?`: `string`;
  `start_url?`: `string`;
  `status?`: `"started"` \| `"waiting"`;
  `template_id?`: `string`;
  `timezone?`: `string`;
  `topic?`: `string`;
  `tracking_fields?`: readonly \{
     `field?`: `string`;
     `value?`: `string`;
     `visible?`: `boolean`;
  \}[];
  `type?`: `1` \| `2` \| `3` \| `4` \| `8` \| `10`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.Meeting
```

##### MeetingAppAdd()

```ts
MeetingAppAdd(...args): Promise<{
  app_id?: string;
  id?: number;
  start_time?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/open_apps"`\>\] |

###### Returns

`Promise`\<\{
  `app_id?`: `string`;
  `id?`: `number`;
  `start_time?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInMeetingAppsGeneratedClient.MeetingAppAdd
```

##### MeetingAppDelete()

```ts
MeetingAppDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/open_apps"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiInMeetingAppsGeneratedClient.MeetingAppDelete
```

##### MeetingCreate()

```ts
MeetingCreate(...args): Promise<{
  agenda?: string;
  assistant_id?: string;
  chat_join_url?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  dynamic_host_key?: string;
  encrypted_password?: string;
  h323_password?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  pmi?: string;
  pre_schedule?: boolean;
  pstn_password?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
  };
  registration_url?: string;
  settings?: {
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_manage_cloud_recording?: boolean;
     alternative_host_manage_meeting_summary?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     alternative_hosts_email_notification?: boolean;
     approval_type?: 0 | 1 | 2;
     approved_or_denied_countries_or_regions?: {
        approved_list?: readonly string[];
        denied_list?: readonly string[];
        enable?: boolean;
        method?: "approve" | "deny";
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_exception?: readonly {
        email?: string;
        join_url?: string;
        name?: string;
     }[];
     authentication_name?: string;
     authentication_option?: string;
     auto_add_recording_to_video_management?: {
        channels?: readonly {
           channel_id: string;
           name?: string;
        }[];
        enable: boolean;
     };
     auto_recording?: "none" | "local" | "cloud";
     auto_start_ai_companion_questions?: boolean;
     auto_start_meeting_summary?: boolean;
     breakout_room?: {
        enable?: boolean;
        rooms?: readonly {
           name?: string;
           participants?: readonly string[];
        }[];
     };
     calendar_type?: 1 | 2;
     close_registration?: boolean;
     cn_meeting?: boolean;
     contact_email?: string;
     contact_name?: string;
     continuous_meeting_chat?: {
        auto_add_invited_external_users?: boolean;
        auto_add_meeting_participants?: boolean;
        channel_id?: string;
        enable?: boolean;
     };
     custom_keys?: readonly {
        key?: string;
        value?: string;
     }[];
     device_testing?: boolean;
     disable_participant_video?: boolean;
     email_in_attendee_report?: boolean;
     email_notification?: boolean;
     encryption_type?: "enhanced_encryption" | "e2ee";
     enforce_login?: boolean;
     enforce_login_domains?: string;
     focus_mode?: boolean;
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree";
     }[];
     host_save_video_order?: boolean;
     host_video?: boolean;
     in_meeting?: boolean;
     internal_meeting?: boolean;
     jbh_time?: 0 | 5 | 10 | 15;
     join_before_host?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     meeting_invitees?: readonly {
        email?: string;
     }[];
     mute_upon_entry?: boolean;
     participant_focused_meeting?: boolean;
     participant_video?: boolean;
     private_meeting?: boolean;
     push_change_to_calendar?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_submit_questions?: boolean;
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        enable?: boolean;
        question_visibility?: "all" | "answered";
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     resources?: readonly {
        permission_level?: "editor" | "commenter" | "viewer";
        resource_id?: string;
        resource_type?: "whiteboard";
     }[];
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     summary_template_id?: string;
     use_pmi?: boolean;
     waiting_room?: boolean;
     waiting_room_options?: {
        mode: "custom" | "follow_setting";
        who_goes_to_waiting_room?:   | "everyone"
           | "users_not_in_account"
           | "users_not_in_account_or_whitelisted_domains"
           | "users_not_on_invite"
           | "users_not_in_org";
     };
     watermark?: boolean;
     who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
     who_will_receive_summary?: 1 | 2 | 3 | 4;
  };
  start_time?: string;
  start_url?: string;
  status?: "started" | "waiting";
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  type?: 1 | 2 | 3 | 8 | 10;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /users/{userId}/meetings"`\>\] |

###### Returns

`Promise`\<\{
  `agenda?`: `string`;
  `assistant_id?`: `string`;
  `chat_join_url?`: `string`;
  `created_at?`: `string`;
  `creation_source?`: `"other"` \| `"open_api"` \| `"web_portal"`;
  `duration?`: `number`;
  `dynamic_host_key?`: `string`;
  `encrypted_password?`: `string`;
  `h323_password?`: `string`;
  `host_email?`: `string`;
  `host_id?`: `string`;
  `id?`: `number`;
  `join_url?`: `string`;
  `occurrences?`: readonly \{
     `duration?`: `number`;
     `occurrence_id?`: `string`;
     `start_time?`: `string`;
     `status?`: `"available"` \| `"deleted"`;
  \}[];
  `password?`: `string`;
  `pmi?`: `string`;
  `pre_schedule?`: `boolean`;
  `pstn_password?`: `string`;
  `recurrence?`: \{
     `end_date_time?`: `string`;
     `end_times?`: `number`;
     `monthly_day?`: `number`;
     `monthly_week?`: `-1` \| `1` \| `2` \| `3` \| `4`;
     `monthly_week_day?`: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     `repeat_interval?`: `number`;
     `type`: `1` \| `2` \| `3`;
     `weekly_days?`: `"2"` \| `"1"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"`;
  \};
  `registration_url?`: `string`;
  `settings?`: \{
     `additional_data_center_regions?`: readonly `string`[];
     `allow_host_control_participant_mute_state?`: `boolean`;
     `allow_multiple_devices?`: `boolean`;
     `alternative_host_manage_cloud_recording?`: `boolean`;
     `alternative_host_manage_meeting_summary?`: `boolean`;
     `alternative_host_update_polls?`: `boolean`;
     `alternative_hosts?`: `string`;
     `alternative_hosts_email_notification?`: `boolean`;
     `approval_type?`: `0` \| `1` \| `2`;
     `approved_or_denied_countries_or_regions?`: \{
        `approved_list?`: readonly `string`[];
        `denied_list?`: readonly `string`[];
        `enable?`: `boolean`;
        `method?`: `"approve"` \| `"deny"`;
     \};
     `audio?`: `"both"` \| `"telephony"` \| `"voip"` \| `"thirdParty"`;
     `audio_conference_info?`: `string`;
     `authentication_domains?`: `string`;
     `authentication_exception?`: readonly \{
        `email?`: `string`;
        `join_url?`: `string`;
        `name?`: `string`;
     \}[];
     `authentication_name?`: `string`;
     `authentication_option?`: `string`;
     `auto_add_recording_to_video_management?`: \{
        `channels?`: readonly \{
           `channel_id`: `string`;
           `name?`: `string`;
        \}[];
        `enable`: `boolean`;
     \};
     `auto_recording?`: `"none"` \| `"local"` \| `"cloud"`;
     `auto_start_ai_companion_questions?`: `boolean`;
     `auto_start_meeting_summary?`: `boolean`;
     `breakout_room?`: \{
        `enable?`: `boolean`;
        `rooms?`: readonly \{
           `name?`: `string`;
           `participants?`: readonly `string`[];
        \}[];
     \};
     `calendar_type?`: `1` \| `2`;
     `close_registration?`: `boolean`;
     `cn_meeting?`: `boolean`;
     `contact_email?`: `string`;
     `contact_name?`: `string`;
     `continuous_meeting_chat?`: \{
        `auto_add_invited_external_users?`: `boolean`;
        `auto_add_meeting_participants?`: `boolean`;
        `channel_id?`: `string`;
        `enable?`: `boolean`;
     \};
     `custom_keys?`: readonly \{
        `key?`: `string`;
        `value?`: `string`;
     \}[];
     `device_testing?`: `boolean`;
     `disable_participant_video?`: `boolean`;
     `email_in_attendee_report?`: `boolean`;
     `email_notification?`: `boolean`;
     `encryption_type?`: `"enhanced_encryption"` \| `"e2ee"`;
     `enforce_login?`: `boolean`;
     `enforce_login_domains?`: `string`;
     `focus_mode?`: `boolean`;
     `global_dial_in_countries?`: readonly `string`[];
     `global_dial_in_numbers?`: readonly \{
        `city?`: `string`;
        `country?`: `string`;
        `country_name?`: `string`;
        `number?`: `string`;
        `type?`: `"toll"` \| `"tollfree"`;
     \}[];
     `host_save_video_order?`: `boolean`;
     `host_video?`: `boolean`;
     `in_meeting?`: `boolean`;
     `internal_meeting?`: `boolean`;
     `jbh_time?`: `0` \| `5` \| `10` \| `15`;
     `join_before_host?`: `boolean`;
     `language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `interpreter_languages?`: `string`;
           `languages?`: `string`;
        \}[];
     \};
     `meeting_authentication?`: `boolean`;
     `meeting_invitees?`: readonly \{
        `email?`: `string`;
     \}[];
     `mute_upon_entry?`: `boolean`;
     `participant_focused_meeting?`: `boolean`;
     `participant_video?`: `boolean`;
     `private_meeting?`: `boolean`;
     `push_change_to_calendar?`: `boolean`;
     `question_and_answer?`: \{
        `allow_anonymous_questions?`: `boolean`;
        `allow_submit_questions?`: `boolean`;
        `attendees_can_comment?`: `boolean`;
        `attendees_can_upvote?`: `boolean`;
        `enable?`: `boolean`;
        `question_visibility?`: `"all"` \| `"answered"`;
     \};
     `registrants_confirmation_email?`: `boolean`;
     `registrants_email_notification?`: `boolean`;
     `registration_type?`: `1` \| `2` \| `3`;
     `request_permission_to_unmute_participants?`: `boolean`;
     `resources?`: readonly \{
        `permission_level?`: `"editor"` \| `"commenter"` \| `"viewer"`;
        `resource_id?`: `string`;
        `resource_type?`: `"whiteboard"`;
     \}[];
     `show_join_info?`: `boolean`;
     `show_share_button?`: `boolean`;
     `sign_language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `sign_language?`: `string`;
        \}[];
     \};
     `summary_template_id?`: `string`;
     `use_pmi?`: `boolean`;
     `waiting_room?`: `boolean`;
     `waiting_room_options?`: \{
        `mode`: `"custom"` \| `"follow_setting"`;
        `who_goes_to_waiting_room?`:   \| `"everyone"`
           \| `"users_not_in_account"`
           \| `"users_not_in_account_or_whitelisted_domains"`
           \| `"users_not_on_invite"`
           \| `"users_not_in_org"`;
     \};
     `watermark?`: `boolean`;
     `who_can_ask_questions?`: `1` \| `2` \| `3` \| `4` \| `5`;
     `who_will_receive_summary?`: `1` \| `2` \| `3` \| `4`;
  \};
  `start_time?`: `string`;
  `start_url?`: `string`;
  `status?`: `"started"` \| `"waiting"`;
  `template_id?`: `string`;
  `timezone?`: `string`;
  `topic?`: `string`;
  `tracking_fields?`: readonly \{
     `field?`: `string`;
     `value?`: `string`;
     `visible?`: `boolean`;
  \}[];
  `type?`: `1` \| `2` \| `3` \| `8` \| `10`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.MeetingCreate
```

##### MeetingDelete()

```ts
MeetingDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.MeetingDelete
```

##### MeetingInvitation()

```ts
MeetingInvitation(...args): Promise<{
  invitation?: string;
  sip_links?: readonly string[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/invitation"`\>\] |

###### Returns

`Promise`\<\{
  `invitation?`: `string`;
  `sip_links?`: readonly `string`[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingInvitation
```

##### MeetingInviteLinksCreate()

```ts
MeetingInviteLinksCreate(...args): Promise<{
  attendees?: readonly {
     join_url?: string;
     name?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/invite_links"`\>\] |

###### Returns

`Promise`\<\{
  `attendees?`: readonly \{
     `join_url?`: `string`;
     `name?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingInviteLinksCreate
```

##### MeetingLiveStreamingJoinToken()

```ts
MeetingLiveStreamingJoinToken(...args): Promise<{
  expire_in?: 120;
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/jointoken/live_streaming"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `120`;
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiLiveStreamingGeneratedClient.MeetingLiveStreamingJoinToken
```

##### MeetingLiveStreamStatusUpdate()

```ts
MeetingLiveStreamStatusUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /meetings/{meetingId}/livestream/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiLiveStreamingGeneratedClient.MeetingLiveStreamStatusUpdate
```

##### MeetingLiveStreamUpdate()

```ts
MeetingLiveStreamUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /meetings/{meetingId}/livestream"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiLiveStreamingGeneratedClient.MeetingLiveStreamUpdate
```

##### MeetingLocalArchivingArchiveToken()

```ts
MeetingLocalArchivingArchiveToken(...args): Promise<{
  expire_in?: 120;
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/jointoken/local_archiving"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `120`;
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiArchivingGeneratedClient.MeetingLocalArchivingArchiveToken
```

##### MeetingLocalRecordingJoinToken()

```ts
MeetingLocalRecordingJoinToken(...args): Promise<{
  expire_in?: 120;
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/jointoken/local_recording"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `120`;
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInMeetingFeaturesGeneratedClient.MeetingLocalRecordingJoinToken
```

##### MeetingPollCreate()

```ts
MeetingPollCreate(...args): Promise<{
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `status?`: `"started"` \| `"ended"` \| `"notstart"` \| `"sharing"`;
\} & \{
  `anonymous?`: `boolean`;
  `poll_type?`: `1` \| `2` \| `3`;
  `questions?`: readonly \{
     `answer_max_character?`: `number`;
     `answer_min_character?`: `number`;
     `answer_required?`: `boolean`;
     `answers?`: readonly `string`[];
     `case_sensitive?`: `boolean`;
     `name?`: `string`;
     `prompts?`: readonly \{
        `prompt_question?`: `string`;
        `prompt_right_answers?`: readonly `string`[];
     \}[];
     `rating_max_label?`: `string`;
     `rating_max_value?`: `number`;
     `rating_min_label?`: `string`;
     `rating_min_value?`: `number`;
     `right_answers?`: readonly `string`[];
     `show_as_dropdown?`: `boolean`;
     `type?`:   \| `"single"`
        \| `"multiple"`
        \| `"matching"`
        \| `"rank_order"`
        \| `"short_answer"`
        \| `"long_answer"`
        \| `"fill_in_the_blank"`
        \| `"rating_scale"`;
  \}[];
  `title?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiPollsGeneratedClient.MeetingPollCreate
```

##### MeetingPollDelete()

```ts
MeetingPollDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/polls/{pollId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiPollsGeneratedClient.MeetingPollDelete
```

##### MeetingPollGet()

```ts
MeetingPollGet(...args): Promise<{
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/polls/{pollId}"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `status?`: `"started"` \| `"ended"` \| `"notstart"` \| `"sharing"` \| `"deactivated"`;
\} & \{
  `anonymous?`: `boolean`;
  `poll_type?`: `1` \| `2` \| `3`;
  `questions?`: readonly \{
     `answer_max_character?`: `number`;
     `answer_min_character?`: `number`;
     `answer_required?`: `boolean`;
     `answers?`: readonly `string`[];
     `case_sensitive?`: `boolean`;
     `name?`: `string`;
     `prompts?`: readonly \{
        `prompt_question?`: `string`;
        `prompt_right_answers?`: readonly `string`[];
     \}[];
     `rating_max_label?`: `string`;
     `rating_max_value?`: `number`;
     `rating_min_label?`: `string`;
     `rating_min_value?`: `number`;
     `right_answers?`: readonly `string`[];
     `show_as_dropdown?`: `boolean`;
     `type?`:   \| `"single"`
        \| `"multiple"`
        \| `"matching"`
        \| `"rank_order"`
        \| `"short_answer"`
        \| `"long_answer"`
        \| `"fill_in_the_blank"`
        \| `"rating_scale"`;
  \}[];
  `title?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiPollsGeneratedClient.MeetingPollGet
```

##### MeetingPolls()

```ts
MeetingPolls(...args): Promise<{
  polls?: readonly {
     id?: string;
     status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
   } & {
     anonymous?: boolean;
     poll_type?: 1 | 2 | 3;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        case_sensitive?: boolean;
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
           prompt_right_answers?: readonly string[];
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        right_answers?: readonly string[];
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     title?: string;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `polls?`: readonly \{
     `id?`: `string`;
     `status?`: `"started"` \| `"ended"` \| `"notstart"` \| `"sharing"` \| `"deactivated"`;
   \} & \{
     `anonymous?`: `boolean`;
     `poll_type?`: `1` \| `2` \| `3`;
     `questions?`: readonly \{
        `answer_max_character?`: `number`;
        `answer_min_character?`: `number`;
        `answer_required?`: `boolean`;
        `answers?`: readonly `string`[];
        `case_sensitive?`: `boolean`;
        `name?`: `string`;
        `prompts?`: readonly \{
           `prompt_question?`: `string`;
           `prompt_right_answers?`: readonly `string`[];
        \}[];
        `rating_max_label?`: `string`;
        `rating_max_value?`: `number`;
        `rating_min_label?`: `string`;
        `rating_min_value?`: `number`;
        `right_answers?`: readonly `string`[];
        `show_as_dropdown?`: `boolean`;
        `type?`:   \| `"single"`
           \| `"multiple"`
           \| `"matching"`
           \| `"rank_order"`
           \| `"short_answer"`
           \| `"long_answer"`
           \| `"fill_in_the_blank"`
           \| `"rating_scale"`;
     \}[];
     `title?`: `string`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiPollsGeneratedClient.MeetingPolls
```

##### MeetingPollUpdate()

```ts
MeetingPollUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /meetings/{meetingId}/polls/{pollId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiPollsGeneratedClient.MeetingPollUpdate
```

##### MeetingRecordingRegistrantCreate()

```ts
MeetingRecordingRegistrantCreate(...args): Promise<{
  id?: number;
  registrant_id?: string;
  share_url?: string;
  topic?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/recordings/registrants"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `registrant_id?`: `string`;
  `share_url?`: `string`;
  `topic?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.MeetingRecordingRegistrantCreate
```

##### MeetingRecordingRegistrants()

```ts
MeetingRecordingRegistrants(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/recordings/registrants"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `registrants?`: readonly \{
     `id?`: `string`;
   \} & \{
     `address?`: `string`;
     `city?`: `string`;
     `comments?`: `string`;
     `country?`: `string`;
     `custom_questions?`: readonly \{
        `title?`: `string`;
        `value?`: `string`;
     \}[];
     `email`: `string`;
     `first_name`: `string`;
     `industry?`: `string`;
     `job_title?`: `string`;
     `last_name?`: `string`;
     `no_of_employees?`:   \| `""`
        \| `"1-20"`
        \| `"21-50"`
        \| `"51-100"`
        \| `"101-250"`
        \| `"251-500"`
        \| `"501-1,000"`
        \| `"1,001-5,000"`
        \| `"5,001-10,000"`
        \| `"More than 10,000"`;
     `org?`: `string`;
     `phone?`: `string`;
     `purchasing_time_frame?`:   \| `""`
        \| `"Within a month"`
        \| `"1-3 months"`
        \| `"4-6 months"`
        \| `"More than 6 months"`
        \| `"No timeframe"`;
     `role_in_purchase_process?`:   \| `""`
        \| `"Decision Maker"`
        \| `"Evaluator/Recommender"`
        \| `"Influencer"`
        \| `"Not involved"`;
     `state?`: `string`;
     `status?`: `"pending"` \| `"approved"` \| `"denied"`;
     `zip?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.MeetingRecordingRegistrants
```

##### MeetingRecordingRegistrantStatus()

```ts
MeetingRecordingRegistrantStatus(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /meetings/{meetingId}/recordings/registrants/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.MeetingRecordingRegistrantStatus
```

##### MeetingRegistrantCreate()

```ts
MeetingRegistrantCreate(...args): Promise<{
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: string;
  }[];
  participant_pin_code?: number;
  registrant_id?: string;
  start_time?: string;
  topic?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /meetings/{meetingId}/registrants"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `join_url?`: `string`;
  `occurrences?`: readonly \{
     `duration?`: `number`;
     `occurrence_id?`: `string`;
     `start_time?`: `string`;
     `status?`: `string`;
  \}[];
  `participant_pin_code?`: `number`;
  `registrant_id?`: `string`;
  `start_time?`: `string`;
  `topic?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingRegistrantCreate
```

##### Meetingregistrantdelete()

```ts
Meetingregistrantdelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/registrants/{registrantId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.Meetingregistrantdelete
```

##### MeetingRegistrantGet()

```ts
MeetingRegistrantGet(...args): Promise<{
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
} & {
  create_time?: string;
  join_url?: string;
  participant_pin_code?: number;
  status?: "pending" | "approved" | "denied";
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/registrants/{registrantId}"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
\} & \{
  `address?`: `string`;
  `city?`: `string`;
  `comments?`: `string`;
  `country?`: `string`;
  `custom_questions?`: readonly \{
     `title?`: `string`;
     `value?`: `string`;
  \}[];
  `email`: `string`;
  `first_name`: `string`;
  `industry?`: `string`;
  `job_title?`: `string`;
  `last_name?`: `string`;
  `no_of_employees?`:   \| `""`
     \| `"1-20"`
     \| `"21-50"`
     \| `"51-100"`
     \| `"101-250"`
     \| `"251-500"`
     \| `"501-1,000"`
     \| `"1,001-5,000"`
     \| `"5,001-10,000"`
     \| `"More than 10,000"`;
  `org?`: `string`;
  `phone?`: `string`;
  `purchasing_time_frame?`:   \| `""`
     \| `"Within a month"`
     \| `"1-3 months"`
     \| `"4-6 months"`
     \| `"More than 6 months"`
     \| `"No timeframe"`;
  `role_in_purchase_process?`:   \| `""`
     \| `"Decision Maker"`
     \| `"Evaluator/Recommender"`
     \| `"Influencer"`
     \| `"Not involved"`;
  `state?`: `string`;
  `status?`: `"pending"` \| `"approved"` \| `"denied"`;
  `zip?`: `string`;
\} & \{
  `create_time?`: `string`;
  `join_url?`: `string`;
  `participant_pin_code?`: `number`;
  `status?`: `"pending"` \| `"approved"` \| `"denied"`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingRegistrantGet
```

##### MeetingRegistrantQuestionUpdate()

```ts
MeetingRegistrantQuestionUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /meetings/{meetingId}/registrants/questions"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingRegistrantQuestionUpdate
```

##### MeetingRegistrants()

```ts
MeetingRegistrants(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
   } & {
     create_time?: string;
     join_url?: string;
     participant_pin_code?: number;
     status?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/registrants"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `registrants?`: readonly \{
     `id?`: `string`;
   \} & \{
     `address?`: `string`;
     `city?`: `string`;
     `comments?`: `string`;
     `country?`: `string`;
     `custom_questions?`: readonly \{
        `title?`: `string`;
        `value?`: `string`;
     \}[];
     `email`: `string`;
     `first_name`: `string`;
     `industry?`: `string`;
     `job_title?`: `string`;
     `last_name?`: `string`;
     `no_of_employees?`:   \| `""`
        \| `"1-20"`
        \| `"21-50"`
        \| `"51-100"`
        \| `"101-250"`
        \| `"251-500"`
        \| `"501-1,000"`
        \| `"1,001-5,000"`
        \| `"5,001-10,000"`
        \| `"More than 10,000"`;
     `org?`: `string`;
     `phone?`: `string`;
     `purchasing_time_frame?`:   \| `""`
        \| `"Within a month"`
        \| `"1-3 months"`
        \| `"4-6 months"`
        \| `"More than 6 months"`
        \| `"No timeframe"`;
     `role_in_purchase_process?`:   \| `""`
        \| `"Decision Maker"`
        \| `"Evaluator/Recommender"`
        \| `"Influencer"`
        \| `"Not involved"`;
     `state?`: `string`;
     `status?`: `"pending"` \| `"approved"` \| `"denied"`;
     `zip?`: `string`;
   \} & \{
     `create_time?`: `string`;
     `join_url?`: `string`;
     `participant_pin_code?`: `number`;
     `status?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingRegistrants
```

##### MeetingRegistrantsQuestionsGet()

```ts
MeetingRegistrantsQuestionsGet(...args): Promise<{
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "single";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/registrants/questions"`\>\] |

###### Returns

`Promise`\<\{
  `custom_questions?`: readonly \{
     `answers?`: readonly `string`[];
     `required?`: `boolean`;
     `title?`: `string`;
     `type?`: `"short"` \| `"single"`;
  \}[];
  `questions?`: readonly \{
     `field_name?`:   \| `"state"`
        \| `"phone"`
        \| `"last_name"`
        \| `"address"`
        \| `"city"`
        \| `"country"`
        \| `"zip"`
        \| `"industry"`
        \| `"org"`
        \| `"job_title"`
        \| `"purchasing_time_frame"`
        \| `"role_in_purchase_process"`
        \| `"no_of_employees"`
        \| `"comments"`;
     `required?`: `boolean`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingRegistrantsQuestionsGet
```

##### MeetingRegistrantStatus()

```ts
MeetingRegistrantStatus(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /meetings/{meetingId}/registrants/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiInvitationRegistrationGeneratedClient.MeetingRegistrantStatus
```

##### MeetingRTMSStatusUpdate()

```ts
MeetingRTMSStatusUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /live_meetings/{meetingId}/rtms_app/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.MeetingRTMSStatusUpdate
```

##### Meetings()

```ts
Meetings(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  meetings?: readonly {
     agenda?: string;
     created_at?: string;
     duration?: number;
     host_id?: string;
     id?: number;
     join_url?: string;
     pmi?: string;
     start_time?: string;
     timezone?: string;
     topic?: string;
     type?: 1 | 2 | 3 | 8;
     uuid?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/meetings"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `meetings?`: readonly \{
     `agenda?`: `string`;
     `created_at?`: `string`;
     `duration?`: `number`;
     `host_id?`: `string`;
     `id?`: `number`;
     `join_url?`: `string`;
     `pmi?`: `string`;
     `start_time?`: `string`;
     `timezone?`: `string`;
     `topic?`: `string`;
     `type?`: `1` \| `2` \| `3` \| `8`;
     `uuid?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.Meetings
```

##### MeetingStatus()

```ts
MeetingStatus(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /meetings/{meetingId}/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.MeetingStatus
```

##### MeetingSurveyDelete()

```ts
MeetingSurveyDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/survey"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiSurveysGeneratedClient.MeetingSurveyDelete
```

##### MeetingSurveyGet()

```ts
MeetingSurveyGet(...args): Promise<{
  custom_survey?: {
     anonymous?: boolean;
     feedback?: string;
     numbered_questions?: boolean;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     show_question_type?: boolean;
     title?: string;
  };
  show_in_the_browser?: boolean;
  third_party_survey?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/survey"`\>\] |

###### Returns

`Promise`\<\{
  `custom_survey?`: \{
     `anonymous?`: `boolean`;
     `feedback?`: `string`;
     `numbered_questions?`: `boolean`;
     `questions?`: readonly \{
        `answer_max_character?`: `number`;
        `answer_min_character?`: `number`;
        `answer_required?`: `boolean`;
        `answers?`: readonly `string`[];
        `name?`: `string`;
        `prompts?`: readonly \{
           `prompt_question?`: `string`;
        \}[];
        `rating_max_label?`: `string`;
        `rating_max_value?`: `number`;
        `rating_min_label?`: `string`;
        `rating_min_value?`: `number`;
        `show_as_dropdown?`: `boolean`;
        `type?`:   \| `"single"`
           \| `"multiple"`
           \| `"matching"`
           \| `"rank_order"`
           \| `"short_answer"`
           \| `"long_answer"`
           \| `"fill_in_the_blank"`
           \| `"rating_scale"`;
     \}[];
     `show_question_type?`: `boolean`;
     `title?`: `string`;
  \};
  `show_in_the_browser?`: `boolean`;
  `third_party_survey?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiSurveysGeneratedClient.MeetingSurveyGet
```

##### MeetingSurveyUpdate()

```ts
MeetingSurveyUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /meetings/{meetingId}/survey"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiSurveysGeneratedClient.MeetingSurveyUpdate
```

##### MeetingTemplateCreate()

```ts
MeetingTemplateCreate(...args): Promise<{
  id?: string;
  name?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /users/{userId}/meeting_templates"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `name?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTemplatesGeneratedClient.MeetingTemplateCreate
```

##### MeetingToken()

```ts
MeetingToken(...args): Promise<{
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/token"`\>\] |

###### Returns

`Promise`\<\{
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiInMeetingFeaturesGeneratedClient.MeetingToken
```

##### MeetingUpdate()

```ts
MeetingUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /meetings/{meetingId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.MeetingUpdate
```

##### PastMeetingDetails()

```ts
PastMeetingDetails(...args): Promise<{
  dept?: string;
  duration?: number;
  end_time?: string;
  has_meeting_summary?: boolean;
  host_id?: string;
  id?: number;
  participants_count?: number;
  source?: string;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  type?: 0 | 1 | 2 | 3 | 4 | 7 | 8;
  user_email?: string;
  user_name?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_meetings/{meetingId}"`\>\] |

###### Returns

`Promise`\<\{
  `dept?`: `string`;
  `duration?`: `number`;
  `end_time?`: `string`;
  `has_meeting_summary?`: `boolean`;
  `host_id?`: `string`;
  `id?`: `number`;
  `participants_count?`: `number`;
  `source?`: `string`;
  `start_time?`: `string`;
  `topic?`: `string`;
  `total_minutes?`: `number`;
  `type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `7` \| `8`;
  `user_email?`: `string`;
  `user_name?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.PastMeetingDetails
```

##### PastMeetingParticipants()

```ts
PastMeetingParticipants(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  participants?: readonly {
     duration?: number;
     failover?: boolean;
     id?: string;
     internal_user?: boolean;
     join_time?: string;
     leave_time?: string;
     name?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_meetings/{meetingId}/participants"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_size?`: `number`;
  `participants?`: readonly \{
     `duration?`: `number`;
     `failover?`: `boolean`;
     `id?`: `string`;
     `internal_user?`: `boolean`;
     `join_time?`: `string`;
     `leave_time?`: `string`;
     `name?`: `string`;
     `registrant_id?`: `string`;
     `status?`: `"in_meeting"` \| `"in_waiting_room"`;
     `user_email?`: `string`;
     `user_id?`: `string`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.PastMeetingParticipants
```

##### PastMeetings()

```ts
PastMeetings(...args): Promise<{
  meetings?: readonly {
     start_time?: string;
     uuid?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_meetings/{meetingId}/instances"`\>\] |

###### Returns

`Promise`\<\{
  `meetings?`: readonly \{
     `start_time?`: `string`;
     `uuid?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiMeetingsGeneratedClient.PastMeetings
```

##### PastWebinars()

```ts
PastWebinars(...args): Promise<{
  webinars?: readonly {
     start_time?: string;
     uuid?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_webinars/{webinarId}/instances"`\>\] |

###### Returns

`Promise`\<\{
  `webinars?`: readonly \{
     `start_time?`: `string`;
     `uuid?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.PastWebinars
```

##### RecordingDelete()

```ts
RecordingDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/recordings"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingDelete
```

##### RecordingDeleteOne()

```ts
RecordingDeleteOne(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /meetings/{meetingId}/recordings/{recordingId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingDeleteOne
```

##### RecordingGet()

```ts
RecordingGet(...args): Promise<{
  account_id?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  duration?: number;
  external_storage_addr?: string;
  host_id?: string;
  id?: number;
  instance_id?: string;
  rc_meeting_zone_name?: string;
  rc_zone?: string;
  recording_count?: number;
  recording_play_passcode?: string;
  service_name?: string;
  start_time?: string;
  topic?: string;
  total_size?: number;
  type?: "2" | "1" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
  uuid?: string;
  zone_instance_id?: string;
} & {
  recording_files?: readonly {
     deleted_time?: string;
     download_url?: string;
     file_extension?: "MP4" | "M4A" | "CSV" | "TXT" | "VTT" | "JSON" | "JPG";
     file_path?: string;
     file_size?: number;
     file_type?:   | "MP4"
        | "M4A"
        | "CHAT"
        | "CC"
        | "CHAT_MESSAGE"
        | "TRANSCRIPT"
        | "CSV"
        | "TB"
        | "SUMMARY";
     id?: string;
     meeting_id?: string;
     play_url?: string;
     recording_end?: string;
     recording_start?: string;
     recording_type?:   | "summary"
        | "shared_screen_with_speaker_view"
        | "audio_only"
        | "chat_file"
        | "closed_caption"
        | "audio_transcript"
        | "shared_screen_with_speaker_view(CC)"
        | "shared_screen_with_gallery_view"
        | "active_speaker"
        | "gallery_view"
        | "shared_screen"
        | "poll"
        | "host_video"
        | "timeline"
        | "thumbnail"
        | "audio_interpretation"
        | "summary_next_steps"
        | "summary_smart_chapters"
        | "sign_interpretation"
        | "production_studio";
     status?: "completed";
  }[];
} & {
  download_access_token?: string;
  password?: string;
  recording_play_passcode?: string;
} & {
  participant_audio_files?: readonly {
     download_url?: string;
     file_name?: string;
     file_path?: string;
     file_size?: number;
     file_type?: string;
     id?: string;
     play_url?: string;
     recording_end?: string;
     recording_start?: string;
     status?: "completed";
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/recordings"`\>\] |

###### Returns

`Promise`\<\{
  `account_id?`: `string`;
  `auto_delete?`: `boolean`;
  `auto_delete_date?`: `string`;
  `duration?`: `number`;
  `external_storage_addr?`: `string`;
  `host_id?`: `string`;
  `id?`: `number`;
  `instance_id?`: `string`;
  `rc_meeting_zone_name?`: `string`;
  `rc_zone?`: `string`;
  `recording_count?`: `number`;
  `recording_play_passcode?`: `string`;
  `service_name?`: `string`;
  `start_time?`: `string`;
  `topic?`: `string`;
  `total_size?`: `number`;
  `type?`: `"2"` \| `"1"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"` \| `"8"` \| `"9"` \| `"99"`;
  `uuid?`: `string`;
  `zone_instance_id?`: `string`;
\} & \{
  `recording_files?`: readonly \{
     `deleted_time?`: `string`;
     `download_url?`: `string`;
     `file_extension?`: `"MP4"` \| `"M4A"` \| `"CSV"` \| `"TXT"` \| `"VTT"` \| `"JSON"` \| `"JPG"`;
     `file_path?`: `string`;
     `file_size?`: `number`;
     `file_type?`:   \| `"MP4"`
        \| `"M4A"`
        \| `"CHAT"`
        \| `"CC"`
        \| `"CHAT_MESSAGE"`
        \| `"TRANSCRIPT"`
        \| `"CSV"`
        \| `"TB"`
        \| `"SUMMARY"`;
     `id?`: `string`;
     `meeting_id?`: `string`;
     `play_url?`: `string`;
     `recording_end?`: `string`;
     `recording_start?`: `string`;
     `recording_type?`:   \| `"summary"`
        \| `"shared_screen_with_speaker_view"`
        \| `"audio_only"`
        \| `"chat_file"`
        \| `"closed_caption"`
        \| `"audio_transcript"`
        \| `"shared_screen_with_speaker_view(CC)"`
        \| `"shared_screen_with_gallery_view"`
        \| `"active_speaker"`
        \| `"gallery_view"`
        \| `"shared_screen"`
        \| `"poll"`
        \| `"host_video"`
        \| `"timeline"`
        \| `"thumbnail"`
        \| `"audio_interpretation"`
        \| `"summary_next_steps"`
        \| `"summary_smart_chapters"`
        \| `"sign_interpretation"`
        \| `"production_studio"`;
     `status?`: `"completed"`;
  \}[];
\} & \{
  `download_access_token?`: `string`;
  `password?`: `string`;
  `recording_play_passcode?`: `string`;
\} & \{
  `participant_audio_files?`: readonly \{
     `download_url?`: `string`;
     `file_name?`: `string`;
     `file_path?`: `string`;
     `file_size?`: `number`;
     `file_type?`: `string`;
     `id?`: `string`;
     `play_url?`: `string`;
     `recording_end?`: `string`;
     `recording_start?`: `string`;
     `status?`: `"completed"`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingGet
```

##### RecordingRegistrantQuestionUpdate()

```ts
RecordingRegistrantQuestionUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /meetings/{meetingId}/recordings/registrants/questions"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingRegistrantQuestionUpdate
```

##### RecordingRegistrantsQuestionsGet()

```ts
RecordingRegistrantsQuestionsGet(...args): Promise<{
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "single" | "multiple";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/recordings/registrants/questions"`\>\] |

###### Returns

`Promise`\<\{
  `custom_questions?`: readonly \{
     `answers?`: readonly `string`[];
     `required?`: `boolean`;
     `title?`: `string`;
     `type?`: `"short"` \| `"single"` \| `"multiple"`;
  \}[];
  `questions?`: readonly \{
     `field_name?`:   \| `"state"`
        \| `"phone"`
        \| `"last_name"`
        \| `"address"`
        \| `"city"`
        \| `"country"`
        \| `"zip"`
        \| `"industry"`
        \| `"org"`
        \| `"job_title"`
        \| `"purchasing_time_frame"`
        \| `"role_in_purchase_process"`
        \| `"no_of_employees"`
        \| `"comments"`;
     `required?`: `boolean`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingRegistrantsQuestionsGet
```

##### RecordingSettingsUpdate()

```ts
RecordingSettingsUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /meetings/{meetingId}/recordings/settings"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingSettingsUpdate
```

##### RecordingSettingUpdate()

```ts
RecordingSettingUpdate(...args): Promise<{
  approval_type?: 0 | 1 | 2;
  authentication_domains?: string;
  authentication_name?: string;
  authentication_option?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  on_demand?: boolean;
  password?: string;
  recording_authentication?: boolean;
  send_email_to_host?: boolean;
  share_recording?: "none" | "publicly" | "internally";
  show_social_share_buttons?: boolean;
  topic?: string;
  viewer_download?: boolean;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /meetings/{meetingId}/recordings/settings"`\>\] |

###### Returns

`Promise`\<\{
  `approval_type?`: `0` \| `1` \| `2`;
  `authentication_domains?`: `string`;
  `authentication_name?`: `string`;
  `authentication_option?`: `string`;
  `auto_delete?`: `boolean`;
  `auto_delete_date?`: `string`;
  `on_demand?`: `boolean`;
  `password?`: `string`;
  `recording_authentication?`: `boolean`;
  `send_email_to_host?`: `boolean`;
  `share_recording?`: `"none"` \| `"publicly"` \| `"internally"`;
  `show_social_share_buttons?`: `boolean`;
  `topic?`: `string`;
  `viewer_download?`: `boolean`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingSettingUpdate
```

##### RecordingsList()

```ts
RecordingsList(...args): Promise<{
  from?: string;
  to?: string;
} & {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  meetings?: readonly {
     account_id?: string;
     auto_delete?: boolean;
     auto_delete_date?: string;
     duration?: number;
     host_id?: string;
     id?: number;
     recording_count?: number;
     recording_play_passcode?: string;
     start_time?: string;
     topic?: string;
     total_size?: number;
     type?: "2" | "1" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
     uuid?: string;
   } & {
     recording_files?: readonly {
        deleted_time?: string;
        download_url?: string;
        file_extension?: "MP4" | "M4A" | "CSV" | "TXT" | "VTT" | "JSON" | "JPG";
        file_path?: string;
        file_size?: number;
        file_type?:   | "MP4"
           | "M4A"
           | "CHAT"
           | "CC"
           | "CHAT_MESSAGE"
           | "TRANSCRIPT"
           | "CSV"
           | "TB"
           | "SUMMARY";
        id?: string;
        meeting_id?: string;
        play_url?: string;
        recording_end?: string;
        recording_start?: string;
        recording_type?:   | "summary"
           | "shared_screen_with_speaker_view"
           | "audio_only"
           | "chat_file"
           | "closed_caption"
           | "audio_transcript"
           | "shared_screen_with_speaker_view(CC)"
           | "shared_screen_with_gallery_view"
           | "active_speaker"
           | "gallery_view"
           | "shared_screen"
           | "poll"
           | "host_video"
           | "timeline"
           | "thumbnail"
           | "audio_interpretation"
           | "summary_next_steps"
           | "summary_smart_chapters"
           | "sign_interpretation"
           | "production_studio";
        status?: "completed";
     }[];
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/recordings"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `to?`: `string`;
\} & \{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `meetings?`: readonly \{
     `account_id?`: `string`;
     `auto_delete?`: `boolean`;
     `auto_delete_date?`: `string`;
     `duration?`: `number`;
     `host_id?`: `string`;
     `id?`: `number`;
     `recording_count?`: `number`;
     `recording_play_passcode?`: `string`;
     `start_time?`: `string`;
     `topic?`: `string`;
     `total_size?`: `number`;
     `type?`: `"2"` \| `"1"` \| `"3"` \| `"4"` \| `"5"` \| `"6"` \| `"7"` \| `"8"` \| `"9"` \| `"99"`;
     `uuid?`: `string`;
   \} & \{
     `recording_files?`: readonly \{
        `deleted_time?`: `string`;
        `download_url?`: `string`;
        `file_extension?`: `"MP4"` \| `"M4A"` \| `"CSV"` \| `"TXT"` \| `"VTT"` \| `"JSON"` \| `"JPG"`;
        `file_path?`: `string`;
        `file_size?`: `number`;
        `file_type?`:   \| `"MP4"`
           \| `"M4A"`
           \| `"CHAT"`
           \| `"CC"`
           \| `"CHAT_MESSAGE"`
           \| `"TRANSCRIPT"`
           \| `"CSV"`
           \| `"TB"`
           \| `"SUMMARY"`;
        `id?`: `string`;
        `meeting_id?`: `string`;
        `play_url?`: `string`;
        `recording_end?`: `string`;
        `recording_start?`: `string`;
        `recording_type?`:   \| `"summary"`
           \| `"shared_screen_with_speaker_view"`
           \| `"audio_only"`
           \| `"chat_file"`
           \| `"closed_caption"`
           \| `"audio_transcript"`
           \| `"shared_screen_with_speaker_view(CC)"`
           \| `"shared_screen_with_gallery_view"`
           \| `"active_speaker"`
           \| `"gallery_view"`
           \| `"shared_screen"`
           \| `"poll"`
           \| `"host_video"`
           \| `"timeline"`
           \| `"thumbnail"`
           \| `"audio_interpretation"`
           \| `"summary_next_steps"`
           \| `"summary_smart_chapters"`
           \| `"sign_interpretation"`
           \| `"production_studio"`;
        `status?`: `"completed"`;
     \}[];
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingsList
```

##### RecordingStatusUpdate()

```ts
RecordingStatusUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /meetings/{meetingUUID}/recordings/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingStatusUpdate
```

##### RecordingStatusUpdateOne()

```ts
RecordingStatusUpdateOne(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /meetings/{meetingId}/recordings/{recordingId}/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiCloudRecordingGeneratedClient.RecordingStatusUpdateOne
```

##### ReportCloudRecording()

```ts
ReportCloudRecording(...args): Promise<{
  from?: string;
  to?: string;
} & {
  cloud_recording_storage?: readonly {
     date?: string;
     free_usage?: string;
     plan_usage?: string;
     usage?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/cloud_recording"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `to?`: `string`;
\} & \{
  `cloud_recording_storage?`: readonly \{
     `date?`: `string`;
     `free_usage?`: `string`;
     `plan_usage?`: `string`;
     `usage?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportCloudRecording
```

##### ReportDaily()

```ts
ReportDaily(...args): Promise<{
  dates?: readonly {
     date?: string;
     meeting_minutes?: number;
     meetings?: number;
     new_users?: number;
     participants?: number;
  }[];
  month?: number;
  year?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/daily"`\>\] |

###### Returns

`Promise`\<\{
  `dates?`: readonly \{
     `date?`: `string`;
     `meeting_minutes?`: `number`;
     `meetings?`: `number`;
     `new_users?`: `number`;
     `participants?`: `number`;
  \}[];
  `month?`: `number`;
  `year?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportDaily
```

##### ReportMeetingactivitylogs()

```ts
ReportMeetingactivitylogs(...args): Promise<{
  meeting_activity_logs?: readonly {
     activity_category: string;
     activity_detail: string;
     activity_time: string;
     meeting_number: string;
     operator: string;
     operator_email: string;
  }[];
  next_page_token?: string;
  page_size?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/meeting_activities"`\>\] |

###### Returns

`Promise`\<\{
  `meeting_activity_logs?`: readonly \{
     `activity_category`: `string`;
     `activity_detail`: `string`;
     `activity_time`: `string`;
     `meeting_number`: `string`;
     `operator`: `string`;
     `operator_email`: `string`;
  \}[];
  `next_page_token?`: `string`;
  `page_size?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportMeetingactivitylogs
```

##### ReportMeetingDetails()

```ts
ReportMeetingDetails(...args): Promise<{
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  dept?: string;
  duration?: number;
  end_time?: string;
  id?: number;
  participants_count?: number;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
  }[];
  type?: number;
  user_email?: string;
  user_name?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/meetings/{meetingId}"`\>\] |

###### Returns

`Promise`\<\{
  `custom_keys?`: readonly \{
     `key?`: `string`;
     `value?`: `string`;
  \}[];
  `dept?`: `string`;
  `duration?`: `number`;
  `end_time?`: `string`;
  `id?`: `number`;
  `participants_count?`: `number`;
  `start_time?`: `string`;
  `topic?`: `string`;
  `total_minutes?`: `number`;
  `tracking_fields?`: readonly \{
     `field?`: `string`;
     `value?`: `string`;
  \}[];
  `type?`: `number`;
  `user_email?`: `string`;
  `user_name?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportMeetingDetails
```

##### ReportMeetingParticipants()

```ts
ReportMeetingParticipants(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  participants?: readonly {
     bo_mtg_id?: string;
     customer_key?: string;
     duration?: number;
     failover?: boolean;
     id?: string;
     join_time?: string;
     leave_time?: string;
     name?: string;
     participant_user_id?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/meetings/{meetingId}/participants"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `participants?`: readonly \{
     `bo_mtg_id?`: `string`;
     `customer_key?`: `string`;
     `duration?`: `number`;
     `failover?`: `boolean`;
     `id?`: `string`;
     `join_time?`: `string`;
     `leave_time?`: `string`;
     `name?`: `string`;
     `participant_user_id?`: `string`;
     `registrant_id?`: `string`;
     `status?`: `"in_meeting"` \| `"in_waiting_room"`;
     `user_email?`: `string`;
     `user_id?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportMeetingParticipants
```

##### ReportMeetingPolls()

```ts
ReportMeetingPolls(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/meetings/{meetingId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `first_name?`: `string`;
     `last_name?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `date_time?`: `string`;
        `polling_id?`: `string`;
        `question?`: `string`;
     \}[];
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportMeetingPolls
```

##### ReportMeetingQA()

```ts
ReportMeetingQA(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        answer_details?: readonly {
           content?: string;
           create_time?: string;
           email?: string;
           name?: string;
           type?:   | "default"
              | "host_answered_publicly"
              | "host_answered_privately"
              | "participant_commented"
              | "host_answered";
           user_id?: string;
        }[];
        create_time?: string;
        question?: string;
        question_id?: string;
        question_status?: "open" | "answered" | "default" | "deleted" | "dismissed";
     }[];
     user_id?: string;
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/meetings/{meetingId}/qa"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `answer_details?`: readonly \{
           `content?`: `string`;
           `create_time?`: `string`;
           `email?`: `string`;
           `name?`: `string`;
           `type?`:   \| `"default"`
              \| `"host_answered_publicly"`
              \| `"host_answered_privately"`
              \| `"participant_commented"`
              \| `"host_answered"`;
           `user_id?`: `string`;
        \}[];
        `create_time?`: `string`;
        `question?`: `string`;
        `question_id?`: `string`;
        `question_status?`: `"open"` \| `"answered"` \| `"default"` \| `"deleted"` \| `"dismissed"`;
     \}[];
     `user_id?`: `string`;
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportMeetingQA
```

##### ReportMeetings()

```ts
ReportMeetings(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  from?: string;
  meetings?: readonly {
     custom_keys?: readonly {
        key?: string;
        value?: string;
     }[];
     duration?: number;
     end_time?: string;
     has_chat?: boolean;
     has_recording?: boolean;
     has_screen_share?: boolean;
     host_name?: string;
     host_organization?: string;
     id?: number;
     join_time?: string;
     join_waiting_room_time?: string;
     leave_time?: string;
     meeting_encryption_status?: 1 | 2;
     participants_count?: number;
     participants_count_my_account?: number;
     schedule_time?: string;
     session_key?: string;
     source?: string;
     start_time?: string;
     topic?: string;
     total_minutes?: number;
     type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
     user_email?: string;
     user_name?: string;
     uuid?: string;
  }[];
  next_page_token?: string;
  to?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/users/{userId}/meetings"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `from?`: `string`;
  `meetings?`: readonly \{
     `custom_keys?`: readonly \{
        `key?`: `string`;
        `value?`: `string`;
     \}[];
     `duration?`: `number`;
     `end_time?`: `string`;
     `has_chat?`: `boolean`;
     `has_recording?`: `boolean`;
     `has_screen_share?`: `boolean`;
     `host_name?`: `string`;
     `host_organization?`: `string`;
     `id?`: `number`;
     `join_time?`: `string`;
     `join_waiting_room_time?`: `string`;
     `leave_time?`: `string`;
     `meeting_encryption_status?`: `1` \| `2`;
     `participants_count?`: `number`;
     `participants_count_my_account?`: `number`;
     `schedule_time?`: `string`;
     `session_key?`: `string`;
     `source?`: `string`;
     `start_time?`: `string`;
     `topic?`: `string`;
     `total_minutes?`: `number`;
     `type?`: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9`;
     `user_email?`: `string`;
     `user_name?`: `string`;
     `uuid?`: `string`;
  \}[];
  `next_page_token?`: `string`;
  `to?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportMeetings
```

##### ReportMeetingSurvey()

```ts
ReportMeetingSurvey(...args): Promise<{
  meeting_id?: number;
  meeting_uuid?: string;
  start_time?: string;
  survey_answers?: readonly {
     answer_details?: readonly {
        answer?: string;
        date_time?: string;
        question?: string;
        question_id?: string;
     }[];
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
  }[];
  survey_id?: string;
  survey_name?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/meetings/{meetingId}/survey"`\>\] |

###### Returns

`Promise`\<\{
  `meeting_id?`: `number`;
  `meeting_uuid?`: `string`;
  `start_time?`: `string`;
  `survey_answers?`: readonly \{
     `answer_details?`: readonly \{
        `answer?`: `string`;
        `date_time?`: `string`;
        `question?`: `string`;
        `question_id?`: `string`;
     \}[];
     `email?`: `string`;
     `first_name?`: `string`;
     `last_name?`: `string`;
     `name?`: `string`;
  \}[];
  `survey_id?`: `string`;
  `survey_name?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportMeetingSurvey
```

##### ReportOperationLogs()

```ts
ReportOperationLogs(...args): Promise<{
  next_page_token?: string;
  page_size?: number;
} & {
  operation_logs?: readonly {
     action?: string;
     category_type?: string;
     operation_detail?: string;
     operator?: string;
     time?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/operationlogs"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_size?`: `number`;
\} & \{
  `operation_logs?`: readonly \{
     `action?`: `string`;
     `category_type?`: `string`;
     `operation_detail?`: `string`;
     `operator?`: `string`;
     `time?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportOperationLogs
```

##### ReportSignInSignOutActivities()

```ts
ReportSignInSignOutActivities(...args): Promise<{
  activity_logs?: readonly {
     client_type?: string;
     email?: string;
     ip_address?: string;
     time?: string;
     type?: "Sign in" | "Sign out";
     version?: string;
  }[];
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/activities"`\>\] |

###### Returns

`Promise`\<\{
  `activity_logs?`: readonly \{
     `client_type?`: `string`;
     `email?`: `string`;
     `ip_address?`: `string`;
     `time?`: `string`;
     `type?`: `"Sign in"` \| `"Sign out"`;
     `version?`: `string`;
  \}[];
  `from?`: `string`;
  `next_page_token?`: `string`;
  `page_size?`: `number`;
  `to?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportSignInSignOutActivities
```

##### ReportTelephone()

```ts
ReportTelephone(...args): Promise<{
  from?: string;
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  to?: string;
  total_records?: number;
} & {
  telephony_usage?: readonly {
     call_in_number?: string;
     country_name?: string;
     dept?: string;
     duration?: number;
     end_time?: string;
     host_email?: string;
     host_id?: string;
     host_name?: string;
     meeting_id?: number;
     meeting_type?: string;
     phone_number?: string;
     rate?: number;
     signaled_number?: string;
     start_time?: string;
     total?: number;
     type?:   | "toll-free"
        | "call-out"
        | "call-in"
        | "US toll-number"
        | "global toll-number"
        | "premium"
        | "premium call-in"
        | "Toll";
     uuid?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/telephone"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_size?`: `number`;
  `to?`: `string`;
  `total_records?`: `number`;
\} & \{
  `telephony_usage?`: readonly \{
     `call_in_number?`: `string`;
     `country_name?`: `string`;
     `dept?`: `string`;
     `duration?`: `number`;
     `end_time?`: `string`;
     `host_email?`: `string`;
     `host_id?`: `string`;
     `host_name?`: `string`;
     `meeting_id?`: `number`;
     `meeting_type?`: `string`;
     `phone_number?`: `string`;
     `rate?`: `number`;
     `signaled_number?`: `string`;
     `start_time?`: `string`;
     `total?`: `number`;
     `type?`:   \| `"toll-free"`
        \| `"call-out"`
        \| `"call-in"`
        \| `"US toll-number"`
        \| `"global toll-number"`
        \| `"premium"`
        \| `"premium call-in"`
        \| `"Toll"`;
     `uuid?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportTelephone
```

##### ReportUpcomingEvents()

```ts
ReportUpcomingEvents(...args): Promise<{
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  upcoming_events?: readonly {
     dept?: string;
     host_id?: string;
     host_name?: string;
     id?: string;
     start_time?: string;
     topic?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/upcoming_events"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `next_page_token?`: `string`;
  `page_size?`: `number`;
  `to?`: `string`;
  `upcoming_events?`: readonly \{
     `dept?`: `string`;
     `host_id?`: `string`;
     `host_name?`: `string`;
     `id?`: `string`;
     `start_time?`: `string`;
     `topic?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportUpcomingEvents
```

##### ReportUsers()

```ts
ReportUsers(...args): Promise<{
  from?: string;
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  to?: string;
  total_records?: number;
} & {
  total_meeting_minutes?: number;
  total_meetings?: number;
  total_participants?: number;
  users?: readonly {
     custom_attributes?: readonly {
        key?: string;
        name?: string;
        value?: string;
     }[];
     dept?: string;
     email?: string;
     id?: string;
     meeting_minutes?: number;
     meetings?: number;
     participants?: number;
     type?: number;
     user_name?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/users"`\>\] |

###### Returns

`Promise`\<\{
  `from?`: `string`;
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `to?`: `string`;
  `total_records?`: `number`;
\} & \{
  `total_meeting_minutes?`: `number`;
  `total_meetings?`: `number`;
  `total_participants?`: `number`;
  `users?`: readonly \{
     `custom_attributes?`: readonly \{
        `key?`: `string`;
        `name?`: `string`;
        `value?`: `string`;
     \}[];
     `dept?`: `string`;
     `email?`: `string`;
     `id?`: `string`;
     `meeting_minutes?`: `number`;
     `meetings?`: `number`;
     `participants?`: `number`;
     `type?`: `number`;
     `user_name?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportUsers
```

##### ReportWebinarDetails()

```ts
ReportWebinarDetails(...args): Promise<{
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  dept?: string;
  duration?: number;
  end_time?: string;
  id?: number;
  participants_count?: number;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
  }[];
  type?: number;
  user_email?: string;
  user_name?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/webinars/{webinarId}"`\>\] |

###### Returns

`Promise`\<\{
  `custom_keys?`: readonly \{
     `key?`: `string`;
     `value?`: `string`;
  \}[];
  `dept?`: `string`;
  `duration?`: `number`;
  `end_time?`: `string`;
  `id?`: `number`;
  `participants_count?`: `number`;
  `start_time?`: `string`;
  `topic?`: `string`;
  `total_minutes?`: `number`;
  `tracking_fields?`: readonly \{
     `field?`: `string`;
     `value?`: `string`;
  \}[];
  `type?`: `number`;
  `user_email?`: `string`;
  `user_name?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportWebinarDetails
```

##### ReportWebinarParticipants()

```ts
ReportWebinarParticipants(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  participants?: readonly {
     bo_mtg_id?: string;
     customer_key?: string;
     duration?: number;
     failover?: boolean;
     id?: string;
     join_time?: string;
     leave_time?: string;
     name?: string;
     participant_user_id?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/webinars/{webinarId}/participants"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `participants?`: readonly \{
     `bo_mtg_id?`: `string`;
     `customer_key?`: `string`;
     `duration?`: `number`;
     `failover?`: `boolean`;
     `id?`: `string`;
     `join_time?`: `string`;
     `leave_time?`: `string`;
     `name?`: `string`;
     `participant_user_id?`: `string`;
     `registrant_id?`: `string`;
     `status?`: `"in_meeting"` \| `"in_waiting_room"`;
     `user_email?`: `string`;
     `user_id?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportWebinarParticipants
```

##### ReportWebinarPolls()

```ts
ReportWebinarPolls(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/webinars/{webinarId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `first_name?`: `string`;
     `last_name?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `date_time?`: `string`;
        `polling_id?`: `string`;
        `question?`: `string`;
     \}[];
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportWebinarPolls
```

##### ReportWebinarQA()

```ts
ReportWebinarQA(...args): Promise<{
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        answer_details?: readonly {
           content?: string;
           create_time?: string;
           email?: string;
           name?: string;
           type?:   | "default"
              | "host_answered_publicly"
              | "host_answered_privately"
              | "participant_commented"
              | "host_answered";
           user_id?: string;
        }[];
        create_time?: string;
        question?: string;
        question_id?: string;
        question_status?: "open" | "answered" | "default" | "deleted" | "dismissed";
     }[];
     user_id?: string;
  }[];
  start_time?: string;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/webinars/{webinarId}/qa"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `questions?`: readonly \{
     `email?`: `string`;
     `name?`: `string`;
     `question_details?`: readonly \{
        `answer?`: `string`;
        `answer_details?`: readonly \{
           `content?`: `string`;
           `create_time?`: `string`;
           `email?`: `string`;
           `name?`: `string`;
           `type?`:   \| `"default"`
              \| `"host_answered_publicly"`
              \| `"host_answered_privately"`
              \| `"participant_commented"`
              \| `"host_answered"`;
           `user_id?`: `string`;
        \}[];
        `create_time?`: `string`;
        `question?`: `string`;
        `question_id?`: `string`;
        `question_status?`: `"open"` \| `"answered"` \| `"default"` \| `"deleted"` \| `"dismissed"`;
     \}[];
     `user_id?`: `string`;
  \}[];
  `start_time?`: `string`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportWebinarQA
```

##### ReportWebinarSurvey()

```ts
ReportWebinarSurvey(...args): Promise<{
  start_time?: string;
  survey_answers?: readonly {
     answer_details?: readonly {
        answer?: string;
        date_time?: string;
        question?: string;
        question_id?: string;
     }[];
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
  }[];
  survey_id?: string;
  survey_name?: string;
  webinar_id?: number;
  webinar_uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /report/webinars/{webinarId}/survey"`\>\] |

###### Returns

`Promise`\<\{
  `start_time?`: `string`;
  `survey_answers?`: readonly \{
     `answer_details?`: readonly \{
        `answer?`: `string`;
        `date_time?`: `string`;
        `question?`: `string`;
        `question_id?`: `string`;
     \}[];
     `email?`: `string`;
     `first_name?`: `string`;
     `last_name?`: `string`;
     `name?`: `string`;
  \}[];
  `survey_id?`: `string`;
  `survey_name?`: `string`;
  `webinar_id?`: `number`;
  `webinar_uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiReportsGeneratedClient.ReportWebinarSurvey
```

##### SetWebinarBrandingVB()

```ts
SetWebinarBrandingVB(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /webinars/{webinarId}/branding/virtual_backgrounds"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.SetWebinarBrandingVB
```

##### TrackingfieldCreate()

```ts
TrackingfieldCreate(...args): Promise<{
  id?: string;
} & {
  field?: string;
  recommended_values?: readonly string[];
  required?: boolean;
  visible?: boolean;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /tracking_fields"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
\} & \{
  `field?`: `string`;
  `recommended_values?`: readonly `string`[];
  `required?`: `boolean`;
  `visible?`: `boolean`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTrackingFieldGeneratedClient.TrackingfieldCreate
```

##### TrackingfieldDelete()

```ts
TrackingfieldDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /tracking_fields/{fieldId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiTrackingFieldGeneratedClient.TrackingfieldDelete
```

##### TrackingfieldGet()

```ts
TrackingfieldGet(...args): Promise<{
  field?: string;
  id?: string;
  recommended_values?: readonly string[];
  required?: boolean;
  visible?: boolean;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /tracking_fields/{fieldId}"`\>\] |

###### Returns

`Promise`\<\{
  `field?`: `string`;
  `id?`: `string`;
  `recommended_values?`: readonly `string`[];
  `required?`: `boolean`;
  `visible?`: `boolean`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTrackingFieldGeneratedClient.TrackingfieldGet
```

##### TrackingfieldList()

```ts
TrackingfieldList(...args): Promise<{
  total_records?: number;
  tracking_fields?: readonly {
     field?: string;
     id?: string;
     recommended_values?: readonly string[];
     required?: boolean;
     visible?: boolean;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /tracking_fields"`\>\] |

###### Returns

`Promise`\<\{
  `total_records?`: `number`;
  `tracking_fields?`: readonly \{
     `field?`: `string`;
     `id?`: `string`;
     `recommended_values?`: readonly `string`[];
     `required?`: `boolean`;
     `visible?`: `boolean`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTrackingFieldGeneratedClient.TrackingfieldList
```

##### TrackingfieldUpdate()

```ts
TrackingfieldUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /tracking_fields/{fieldId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiTrackingFieldGeneratedClient.TrackingfieldUpdate
```

##### Tsp()

```ts
Tsp(...args): Promise<{
  dial_in_number_unrestricted?: boolean;
  dial_in_numbers?: readonly {
     code?: string;
     number?: string;
     type?: string;
  }[];
  enable?: boolean;
  master_account_setting_extended?: boolean;
  modify_credential_forbidden?: boolean;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
  tsp_enabled?: boolean;
  tsp_provider?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /tsp"`\>\] |

###### Returns

`Promise`\<\{
  `dial_in_number_unrestricted?`: `boolean`;
  `dial_in_numbers?`: readonly \{
     `code?`: `string`;
     `number?`: `string`;
     `type?`: `string`;
  \}[];
  `enable?`: `boolean`;
  `master_account_setting_extended?`: `boolean`;
  `modify_credential_forbidden?`: `boolean`;
  `tsp_bridge?`: `"US_TSP_TB"` \| `"EU_TSP_TB"`;
  `tsp_enabled?`: `boolean`;
  `tsp_provider?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.Tsp
```

##### TspUpdate()

```ts
TspUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /tsp"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.TspUpdate
```

##### TspUrlUpdate()

```ts
TspUrlUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /users/{userId}/tsp/settings"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.TspUrlUpdate
```

##### UpdateArchivedFile()

```ts
UpdateArchivedFile(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /archive_files/{fileId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiArchivingGeneratedClient.UpdateArchivedFile
```

##### UpdateDevice()

```ts
UpdateDevice(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /devices/{deviceId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.UpdateDevice
```

##### UpdateMeetingChatMessageById()

```ts
UpdateMeetingChatMessageById(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /live_meetings/{meetingId}/chat/messages/{messageId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiInMeetingFeaturesGeneratedClient.UpdateMeetingChatMessageById
```

##### UpdateSIPPhonePhones()

```ts
UpdateSIPPhonePhones(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /sip_phones/phones/{phoneId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiSIPPhoneGeneratedClient.UpdateSIPPhonePhones
```

##### UpdateWebinarBrandingNameTag()

```ts
UpdateWebinarBrandingNameTag(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.UpdateWebinarBrandingNameTag
```

##### UpgradeZpasApp()

```ts
UpgradeZpasApp(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /devices/zpa/upgrade"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiDevicesGeneratedClient.UpgradeZpasApp
```

##### UploadWebinarBrandingVB()

```ts
UploadWebinarBrandingVB(...args): Promise<{
  id?: string;
  is_default?: boolean;
  name?: string;
  size?: number;
  type?: "image";
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/branding/virtual_backgrounds"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `is_default?`: `boolean`;
  `name?`: `string`;
  `size?`: `number`;
  `type?`: `"image"`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.UploadWebinarBrandingVB
```

##### UploadWebinarBrandingWallpaper()

```ts
UploadWebinarBrandingWallpaper(...args): Promise<{
  id?: string;
  name?: string;
  size?: number;
  type?: "image";
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/branding/wallpaper"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `name?`: `string`;
  `size?`: `number`;
  `type?`: `"image"`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.UploadWebinarBrandingWallpaper
```

##### UserPACs()

```ts
UserPACs(...args): Promise<{
  pac_accounts?: readonly {
     conference_id?: number;
     dedicated_dial_in_number?: readonly {
        country?: string;
        number?: string;
     }[];
     global_dial_in_numbers?: readonly {
        country?: string;
        number?: string;
     }[];
     listen_only_password?: string;
     participant_password?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/pac"`\>\] |

###### Returns

`Promise`\<\{
  `pac_accounts?`: readonly \{
     `conference_id?`: `number`;
     `dedicated_dial_in_number?`: readonly \{
        `country?`: `string`;
        `number?`: `string`;
     \}[];
     `global_dial_in_numbers?`: readonly \{
        `country?`: `string`;
        `number?`: `string`;
     \}[];
     `listen_only_password?`: `string`;
     `participant_password?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiPACGeneratedClient.UserPACs
```

##### UserTSP()

```ts
UserTSP(...args): Promise<{
  conference_code: string;
  dial_in_numbers?: readonly {
     code?: string;
     country_label?: string;
     number?: string;
     type?: "toll" | "tollfree" | "media_link";
  }[];
  id?: string;
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/tsp/{tspId}"`\>\] |

###### Returns

`Promise`\<\{
  `conference_code`: `string`;
  `dial_in_numbers?`: readonly \{
     `code?`: `string`;
     `country_label?`: `string`;
     `number?`: `string`;
     `type?`: `"toll"` \| `"tollfree"` \| `"media_link"`;
  \}[];
  `id?`: `string`;
  `leader_pin`: `string`;
  `tsp_bridge?`: `"US_TSP_TB"` \| `"EU_TSP_TB"`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.UserTSP
```

##### UserTSPCreate()

```ts
UserTSPCreate(...args): Promise<{
  id?: string;
} & {
  conference_code: string;
  dial_in_numbers?: readonly {
     code?: string;
     country_label?: string;
     number?: string;
     type?: "toll" | "tollfree" | "media_link";
  }[];
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /users/{userId}/tsp"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
\} & \{
  `conference_code`: `string`;
  `dial_in_numbers?`: readonly \{
     `code?`: `string`;
     `country_label?`: `string`;
     `number?`: `string`;
     `type?`: `"toll"` \| `"tollfree"` \| `"media_link"`;
  \}[];
  `leader_pin`: `string`;
  `tsp_bridge?`: `"US_TSP_TB"` \| `"EU_TSP_TB"`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.UserTSPCreate
```

##### UserTSPDelete()

```ts
UserTSPDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /users/{userId}/tsp/{tspId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.UserTSPDelete
```

##### UserTSPs()

```ts
UserTSPs(...args): Promise<{
  tsp_accounts?: readonly {
     conference_code: string;
     dial_in_numbers?: readonly {
        code?: string;
        country_label?: string;
        number?: string;
        type?: "toll" | "tollfree" | "media_link";
     }[];
     id?: "2" | "1";
     leader_pin: string;
     tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/tsp"`\>\] |

###### Returns

`Promise`\<\{
  `tsp_accounts?`: readonly \{
     `conference_code`: `string`;
     `dial_in_numbers?`: readonly \{
        `code?`: `string`;
        `country_label?`: `string`;
        `number?`: `string`;
        `type?`: `"toll"` \| `"tollfree"` \| `"media_link"`;
     \}[];
     `id?`: `"2"` \| `"1"`;
     `leader_pin`: `string`;
     `tsp_bridge?`: `"US_TSP_TB"` \| `"EU_TSP_TB"`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.UserTSPs
```

##### UserTSPUpdate()

```ts
UserTSPUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /users/{userId}/tsp/{tspId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiTSPGeneratedClient.UserTSPUpdate
```

##### Webinar()

```ts
Webinar(...args): Promise<{
  agenda?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  encrypted_passcode?: string;
  h323_passcode?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  is_simulive?: boolean;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  record_file_id?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: string;
  };
  registration_url?: string;
  settings?: {
     add_audio_watermark?: boolean;
     add_watermark?: boolean;
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     approval_type?: 0 | 1 | 2;
     attendees_and_panelists_reminder_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_name?: string;
     authentication_option?: string;
     auto_recording?: "none" | "local" | "cloud";
     close_registration?: boolean;
     contact_email?: string;
     contact_name?: string;
     email_in_attendee_report?: boolean;
     email_language?: string;
     enable_session_branding?: boolean;
     enforce_login?: boolean;
     enforce_login_domains?: string;
     follow_up_absentees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     follow_up_attendees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree" | "premium";
     }[];
     hd_video?: boolean;
     hd_video_for_attendees?: boolean;
     host_video?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     on_demand?: boolean;
     panelist_authentication?: boolean;
     panelists_invitation_email_notification?: boolean;
     panelists_video?: boolean;
     post_webinar_survey?: boolean;
     practice_session?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_auto_reply?: boolean;
        allow_submit_questions?: boolean;
        answer_questions?: "all" | "only";
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        auto_reply_text?: string;
        enable?: boolean;
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registrants_restrict_number?: number;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     send_1080p_video_to_attendees?: boolean;
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     survey_url?: string;
  };
  simulive_delay_start?: {
     enable?: boolean;
     time?: number;
     timeunit?: "second" | "minute";
  };
  start_time?: string;
  start_url?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  transition_to_live?: boolean;
  type?: 5 | 6 | 9;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}"`\>\] |

###### Returns

`Promise`\<\{
  `agenda?`: `string`;
  `created_at?`: `string`;
  `creation_source?`: `"other"` \| `"open_api"` \| `"web_portal"`;
  `duration?`: `number`;
  `encrypted_passcode?`: `string`;
  `h323_passcode?`: `string`;
  `host_email?`: `string`;
  `host_id?`: `string`;
  `id?`: `number`;
  `is_simulive?`: `boolean`;
  `join_url?`: `string`;
  `occurrences?`: readonly \{
     `duration?`: `number`;
     `occurrence_id?`: `string`;
     `start_time?`: `string`;
     `status?`: `"available"` \| `"deleted"`;
  \}[];
  `password?`: `string`;
  `record_file_id?`: `string`;
  `recurrence?`: \{
     `end_date_time?`: `string`;
     `end_times?`: `number`;
     `monthly_day?`: `number`;
     `monthly_week?`: `-1` \| `1` \| `2` \| `3` \| `4`;
     `monthly_week_day?`: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     `repeat_interval?`: `number`;
     `type`: `1` \| `2` \| `3`;
     `weekly_days?`: `string`;
  \};
  `registration_url?`: `string`;
  `settings?`: \{
     `add_audio_watermark?`: `boolean`;
     `add_watermark?`: `boolean`;
     `additional_data_center_regions?`: readonly `string`[];
     `allow_host_control_participant_mute_state?`: `boolean`;
     `allow_multiple_devices?`: `boolean`;
     `alternative_host_update_polls?`: `boolean`;
     `alternative_hosts?`: `string`;
     `approval_type?`: `0` \| `1` \| `2`;
     `attendees_and_panelists_reminder_email_notification?`: \{
        `enable?`: `boolean`;
        `type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     \};
     `audio?`: `"both"` \| `"telephony"` \| `"voip"` \| `"thirdParty"`;
     `audio_conference_info?`: `string`;
     `authentication_domains?`: `string`;
     `authentication_name?`: `string`;
     `authentication_option?`: `string`;
     `auto_recording?`: `"none"` \| `"local"` \| `"cloud"`;
     `close_registration?`: `boolean`;
     `contact_email?`: `string`;
     `contact_name?`: `string`;
     `email_in_attendee_report?`: `boolean`;
     `email_language?`: `string`;
     `enable_session_branding?`: `boolean`;
     `enforce_login?`: `boolean`;
     `enforce_login_domains?`: `string`;
     `follow_up_absentees_email_notification?`: \{
        `enable?`: `boolean`;
        `type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     \};
     `follow_up_attendees_email_notification?`: \{
        `enable?`: `boolean`;
        `type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     \};
     `global_dial_in_countries?`: readonly `string`[];
     `global_dial_in_numbers?`: readonly \{
        `city?`: `string`;
        `country?`: `string`;
        `country_name?`: `string`;
        `number?`: `string`;
        `type?`: `"toll"` \| `"tollfree"` \| `"premium"`;
     \}[];
     `hd_video?`: `boolean`;
     `hd_video_for_attendees?`: `boolean`;
     `host_video?`: `boolean`;
     `language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `interpreter_languages?`: `string`;
           `languages?`: `string`;
        \}[];
     \};
     `meeting_authentication?`: `boolean`;
     `on_demand?`: `boolean`;
     `panelist_authentication?`: `boolean`;
     `panelists_invitation_email_notification?`: `boolean`;
     `panelists_video?`: `boolean`;
     `post_webinar_survey?`: `boolean`;
     `practice_session?`: `boolean`;
     `question_and_answer?`: \{
        `allow_anonymous_questions?`: `boolean`;
        `allow_auto_reply?`: `boolean`;
        `allow_submit_questions?`: `boolean`;
        `answer_questions?`: `"all"` \| `"only"`;
        `attendees_can_comment?`: `boolean`;
        `attendees_can_upvote?`: `boolean`;
        `auto_reply_text?`: `string`;
        `enable?`: `boolean`;
     \};
     `registrants_confirmation_email?`: `boolean`;
     `registrants_email_notification?`: `boolean`;
     `registrants_restrict_number?`: `number`;
     `registration_type?`: `1` \| `2` \| `3`;
     `request_permission_to_unmute_participants?`: `boolean`;
     `send_1080p_video_to_attendees?`: `boolean`;
     `show_join_info?`: `boolean`;
     `show_share_button?`: `boolean`;
     `sign_language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `sign_language?`: `string`;
        \}[];
     \};
     `survey_url?`: `string`;
  \};
  `simulive_delay_start?`: \{
     `enable?`: `boolean`;
     `time?`: `number`;
     `timeunit?`: `"second"` \| `"minute"`;
  \};
  `start_time?`: `string`;
  `start_url?`: `string`;
  `template_id?`: `string`;
  `timezone?`: `string`;
  `topic?`: `string`;
  `tracking_fields?`: readonly \{
     `field?`: `string`;
     `value?`: `string`;
     `visible?`: `boolean`;
  \}[];
  `transition_to_live?`: `boolean`;
  `type?`: `5` \| `6` \| `9`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.Webinar
```

##### WebinarAbsentees()

```ts
WebinarAbsentees(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
   } & {
     create_time?: string;
     join_url?: string;
     status?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /past_webinars/{webinarId}/absentees"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `registrants?`: readonly \{
     `id?`: `string`;
   \} & \{
     `address?`: `string`;
     `city?`: `string`;
     `comments?`: `string`;
     `country?`: `string`;
     `custom_questions?`: readonly \{
        `title?`: `string`;
        `value?`: `string`;
     \}[];
     `email`: `string`;
     `first_name`: `string`;
     `industry?`: `string`;
     `job_title?`: `string`;
     `last_name?`: `string`;
     `no_of_employees?`:   \| `""`
        \| `"1-20"`
        \| `"21-50"`
        \| `"51-100"`
        \| `"101-250"`
        \| `"251-500"`
        \| `"501-1,000"`
        \| `"1,001-5,000"`
        \| `"5,001-10,000"`
        \| `"More than 10,000"`;
     `org?`: `string`;
     `phone?`: `string`;
     `purchasing_time_frame?`:   \| `""`
        \| `"Within a month"`
        \| `"1-3 months"`
        \| `"4-6 months"`
        \| `"More than 6 months"`
        \| `"No timeframe"`;
     `role_in_purchase_process?`:   \| `""`
        \| `"Decision Maker"`
        \| `"Evaluator/Recommender"`
        \| `"Influencer"`
        \| `"Not involved"`;
     `state?`: `string`;
     `status?`: `"pending"` \| `"approved"` \| `"denied"`;
     `zip?`: `string`;
   \} & \{
     `create_time?`: `string`;
     `join_url?`: `string`;
     `status?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarAbsentees
```

##### WebinarCreate()

```ts
WebinarCreate(...args): Promise<{
  agenda?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  encrypted_passcode?: string;
  h323_passcode?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  is_simulive?: boolean;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  record_file_id?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: string;
  };
  registration_url?: string;
  settings?: {
     add_audio_watermark?: boolean;
     add_watermark?: boolean;
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     approval_type?: 0 | 1 | 2;
     attendees_and_panelists_reminder_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_name?: string;
     authentication_option?: string;
     auto_recording?: "none" | "local" | "cloud";
     close_registration?: boolean;
     contact_email?: string;
     contact_name?: string;
     email_in_attendee_report?: boolean;
     email_language?: string;
     enable_session_branding?: boolean;
     enforce_login?: boolean;
     enforce_login_domains?: string;
     follow_up_absentees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     follow_up_attendees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree" | "premium";
     }[];
     hd_video?: boolean;
     hd_video_for_attendees?: boolean;
     host_video?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     on_demand?: boolean;
     panelist_authentication?: boolean;
     panelists_invitation_email_notification?: boolean;
     panelists_video?: boolean;
     post_webinar_survey?: boolean;
     practice_session?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_auto_reply?: boolean;
        allow_submit_questions?: boolean;
        answer_questions?: "all" | "only";
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        auto_reply_text?: string;
        enable?: boolean;
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registrants_restrict_number?: number;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     send_1080p_video_to_attendees?: boolean;
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     survey_url?: string;
  };
  simulive_delay_start?: {
     enable?: boolean;
     time?: number;
     timeunit?: string;
  };
  start_time?: string;
  start_url?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  transition_to_live?: boolean;
  type?: 5 | 6 | 9;
  uuid?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /users/{userId}/webinars"`\>\] |

###### Returns

`Promise`\<\{
  `agenda?`: `string`;
  `created_at?`: `string`;
  `creation_source?`: `"other"` \| `"open_api"` \| `"web_portal"`;
  `duration?`: `number`;
  `encrypted_passcode?`: `string`;
  `h323_passcode?`: `string`;
  `host_email?`: `string`;
  `host_id?`: `string`;
  `id?`: `number`;
  `is_simulive?`: `boolean`;
  `join_url?`: `string`;
  `occurrences?`: readonly \{
     `duration?`: `number`;
     `occurrence_id?`: `string`;
     `start_time?`: `string`;
     `status?`: `"available"` \| `"deleted"`;
  \}[];
  `password?`: `string`;
  `record_file_id?`: `string`;
  `recurrence?`: \{
     `end_date_time?`: `string`;
     `end_times?`: `number`;
     `monthly_day?`: `number`;
     `monthly_week?`: `-1` \| `1` \| `2` \| `3` \| `4`;
     `monthly_week_day?`: `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     `repeat_interval?`: `number`;
     `type`: `1` \| `2` \| `3`;
     `weekly_days?`: `string`;
  \};
  `registration_url?`: `string`;
  `settings?`: \{
     `add_audio_watermark?`: `boolean`;
     `add_watermark?`: `boolean`;
     `additional_data_center_regions?`: readonly `string`[];
     `allow_host_control_participant_mute_state?`: `boolean`;
     `allow_multiple_devices?`: `boolean`;
     `alternative_host_update_polls?`: `boolean`;
     `alternative_hosts?`: `string`;
     `approval_type?`: `0` \| `1` \| `2`;
     `attendees_and_panelists_reminder_email_notification?`: \{
        `enable?`: `boolean`;
        `type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     \};
     `audio?`: `"both"` \| `"telephony"` \| `"voip"` \| `"thirdParty"`;
     `audio_conference_info?`: `string`;
     `authentication_domains?`: `string`;
     `authentication_name?`: `string`;
     `authentication_option?`: `string`;
     `auto_recording?`: `"none"` \| `"local"` \| `"cloud"`;
     `close_registration?`: `boolean`;
     `contact_email?`: `string`;
     `contact_name?`: `string`;
     `email_in_attendee_report?`: `boolean`;
     `email_language?`: `string`;
     `enable_session_branding?`: `boolean`;
     `enforce_login?`: `boolean`;
     `enforce_login_domains?`: `string`;
     `follow_up_absentees_email_notification?`: \{
        `enable?`: `boolean`;
        `type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     \};
     `follow_up_attendees_email_notification?`: \{
        `enable?`: `boolean`;
        `type?`: `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7`;
     \};
     `global_dial_in_countries?`: readonly `string`[];
     `global_dial_in_numbers?`: readonly \{
        `city?`: `string`;
        `country?`: `string`;
        `country_name?`: `string`;
        `number?`: `string`;
        `type?`: `"toll"` \| `"tollfree"` \| `"premium"`;
     \}[];
     `hd_video?`: `boolean`;
     `hd_video_for_attendees?`: `boolean`;
     `host_video?`: `boolean`;
     `language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `interpreter_languages?`: `string`;
           `languages?`: `string`;
        \}[];
     \};
     `meeting_authentication?`: `boolean`;
     `on_demand?`: `boolean`;
     `panelist_authentication?`: `boolean`;
     `panelists_invitation_email_notification?`: `boolean`;
     `panelists_video?`: `boolean`;
     `post_webinar_survey?`: `boolean`;
     `practice_session?`: `boolean`;
     `question_and_answer?`: \{
        `allow_anonymous_questions?`: `boolean`;
        `allow_auto_reply?`: `boolean`;
        `allow_submit_questions?`: `boolean`;
        `answer_questions?`: `"all"` \| `"only"`;
        `attendees_can_comment?`: `boolean`;
        `attendees_can_upvote?`: `boolean`;
        `auto_reply_text?`: `string`;
        `enable?`: `boolean`;
     \};
     `registrants_confirmation_email?`: `boolean`;
     `registrants_email_notification?`: `boolean`;
     `registrants_restrict_number?`: `number`;
     `registration_type?`: `1` \| `2` \| `3`;
     `request_permission_to_unmute_participants?`: `boolean`;
     `send_1080p_video_to_attendees?`: `boolean`;
     `show_join_info?`: `boolean`;
     `show_share_button?`: `boolean`;
     `sign_language_interpretation?`: \{
        `enable?`: `boolean`;
        `interpreters?`: readonly \{
           `email?`: `string`;
           `sign_language?`: `string`;
        \}[];
     \};
     `survey_url?`: `string`;
  \};
  `simulive_delay_start?`: \{
     `enable?`: `boolean`;
     `time?`: `number`;
     `timeunit?`: `string`;
  \};
  `start_time?`: `string`;
  `start_url?`: `string`;
  `template_id?`: `string`;
  `timezone?`: `string`;
  `topic?`: `string`;
  `tracking_fields?`: readonly \{
     `field?`: `string`;
     `value?`: `string`;
     `visible?`: `boolean`;
  \}[];
  `transition_to_live?`: `boolean`;
  `type?`: `5` \| `6` \| `9`;
  `uuid?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarCreate
```

##### WebinarDelete()

```ts
WebinarDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarDelete
```

##### WebinarInviteLinksCreate()

```ts
WebinarInviteLinksCreate(...args): Promise<{
  attendees?: readonly {
     join_url?: string;
     name?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/invite_links"`\>\] |

###### Returns

`Promise`\<\{
  `attendees?`: readonly \{
     `join_url?`: `string`;
     `name?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarInviteLinksCreate
```

##### WebinarLiveStreamingJoinToken()

```ts
WebinarLiveStreamingJoinToken(...args): Promise<{
  expire_in?: 120;
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/jointoken/live_streaming"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `120`;
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarLiveStreamingJoinToken
```

##### WebinarLiveStreamStatusUpdate()

```ts
WebinarLiveStreamStatusUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /webinars/{webinarId}/livestream/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarLiveStreamStatusUpdate
```

##### WebinarLiveStreamUpdate()

```ts
WebinarLiveStreamUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /webinars/{webinarId}/livestream"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarLiveStreamUpdate
```

##### WebinarLocalArchivingArchiveToken()

```ts
WebinarLocalArchivingArchiveToken(...args): Promise<{
  expire_in?: 120;
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/jointoken/local_archiving"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `120`;
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarLocalArchivingArchiveToken
```

##### WebinarLocalRecordingJoinToken()

```ts
WebinarLocalRecordingJoinToken(...args): Promise<{
  expire_in?: 120;
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/jointoken/local_recording"`\>\] |

###### Returns

`Promise`\<\{
  `expire_in?`: `120`;
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarLocalRecordingJoinToken
```

##### WebinarPanelistCreate()

```ts
WebinarPanelistCreate(...args): Promise<{
  id?: string;
  updated_at?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/panelists"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `updated_at?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPanelistCreate
```

##### WebinarPanelistDelete()

```ts
WebinarPanelistDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/panelists/{panelistId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPanelistDelete
```

##### WebinarPanelists()

```ts
WebinarPanelists(...args): Promise<{
  panelists?: readonly {
     id?: string;
   } & {
     email?: string;
     name?: string;
   } & {
     join_url?: string;
   } & {
     name_tag_description?: string;
     name_tag_id?: string;
     name_tag_name?: string;
     name_tag_pronouns?: string;
     virtual_background_id?: string;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/panelists"`\>\] |

###### Returns

`Promise`\<\{
  `panelists?`: readonly \{
     `id?`: `string`;
   \} & \{
     `email?`: `string`;
     `name?`: `string`;
   \} & \{
     `join_url?`: `string`;
   \} & \{
     `name_tag_description?`: `string`;
     `name_tag_id?`: `string`;
     `name_tag_name?`: `string`;
     `name_tag_pronouns?`: `string`;
     `virtual_background_id?`: `string`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPanelists
```

##### WebinarPanelistsDelete()

```ts
WebinarPanelistsDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/panelists"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPanelistsDelete
```

##### WebinarPollCreate()

```ts
WebinarPollCreate(...args): Promise<{
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `status?`: `"started"` \| `"ended"` \| `"notstart"` \| `"sharing"`;
\} & \{
  `anonymous?`: `boolean`;
  `poll_type?`: `1` \| `2` \| `3`;
  `questions?`: readonly \{
     `answer_max_character?`: `number`;
     `answer_min_character?`: `number`;
     `answer_required?`: `boolean`;
     `answers?`: readonly `string`[];
     `case_sensitive?`: `boolean`;
     `name?`: `string`;
     `prompts?`: readonly \{
        `prompt_question?`: `string`;
        `prompt_right_answers?`: readonly `string`[];
     \}[];
     `rating_max_label?`: `string`;
     `rating_max_value?`: `number`;
     `rating_min_label?`: `string`;
     `rating_min_value?`: `number`;
     `right_answers?`: readonly `string`[];
     `show_as_dropdown?`: `boolean`;
     `type?`:   \| `"single"`
        \| `"multiple"`
        \| `"matching"`
        \| `"rank_order"`
        \| `"short_answer"`
        \| `"long_answer"`
        \| `"fill_in_the_blank"`
        \| `"rating_scale"`;
  \}[];
  `title?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPollCreate
```

##### WebinarPollDelete()

```ts
WebinarPollDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/polls/{pollId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPollDelete
```

##### WebinarPollGet()

```ts
WebinarPollGet(...args): Promise<{
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/polls/{pollId}"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `status?`: `"started"` \| `"ended"` \| `"notstart"` \| `"sharing"` \| `"deactivated"`;
\} & \{
  `anonymous?`: `boolean`;
  `poll_type?`: `1` \| `2` \| `3`;
  `questions?`: readonly \{
     `answer_max_character?`: `number`;
     `answer_min_character?`: `number`;
     `answer_required?`: `boolean`;
     `answers?`: readonly `string`[];
     `case_sensitive?`: `boolean`;
     `name?`: `string`;
     `prompts?`: readonly \{
        `prompt_question?`: `string`;
        `prompt_right_answers?`: readonly `string`[];
     \}[];
     `rating_max_label?`: `string`;
     `rating_max_value?`: `number`;
     `rating_min_label?`: `string`;
     `rating_min_value?`: `number`;
     `right_answers?`: readonly `string`[];
     `show_as_dropdown?`: `boolean`;
     `type?`:   \| `"single"`
        \| `"multiple"`
        \| `"matching"`
        \| `"rank_order"`
        \| `"short_answer"`
        \| `"long_answer"`
        \| `"fill_in_the_blank"`
        \| `"rating_scale"`;
  \}[];
  `title?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPollGet
```

##### WebinarPolls()

```ts
WebinarPolls(...args): Promise<{
  polls?: readonly {
     id?: string;
     status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
   } & {
     anonymous?: boolean;
     poll_type?: 1 | 2 | 3;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        case_sensitive?: boolean;
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
           prompt_right_answers?: readonly string[];
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        right_answers?: readonly string[];
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     title?: string;
  }[];
  total_records?: number;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/polls"`\>\] |

###### Returns

`Promise`\<\{
  `polls?`: readonly \{
     `id?`: `string`;
     `status?`: `"started"` \| `"ended"` \| `"notstart"` \| `"sharing"` \| `"deactivated"`;
   \} & \{
     `anonymous?`: `boolean`;
     `poll_type?`: `1` \| `2` \| `3`;
     `questions?`: readonly \{
        `answer_max_character?`: `number`;
        `answer_min_character?`: `number`;
        `answer_required?`: `boolean`;
        `answers?`: readonly `string`[];
        `case_sensitive?`: `boolean`;
        `name?`: `string`;
        `prompts?`: readonly \{
           `prompt_question?`: `string`;
           `prompt_right_answers?`: readonly `string`[];
        \}[];
        `rating_max_label?`: `string`;
        `rating_max_value?`: `number`;
        `rating_min_label?`: `string`;
        `rating_min_value?`: `number`;
        `right_answers?`: readonly `string`[];
        `show_as_dropdown?`: `boolean`;
        `type?`:   \| `"single"`
           \| `"multiple"`
           \| `"matching"`
           \| `"rank_order"`
           \| `"short_answer"`
           \| `"long_answer"`
           \| `"fill_in_the_blank"`
           \| `"rating_scale"`;
     \}[];
     `title?`: `string`;
  \}[];
  `total_records?`: `number`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPolls
```

##### WebinarPollUpdate()

```ts
WebinarPollUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /webinars/{webinarId}/polls/{pollId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarPollUpdate
```

##### WebinarRegistrantCreate()

```ts
WebinarRegistrantCreate(...args): Promise<{
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: string;
  }[];
  registrant_id?: string;
  start_time?: string;
  topic?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /webinars/{webinarId}/registrants"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `number`;
  `join_url?`: `string`;
  `occurrences?`: readonly \{
     `duration?`: `number`;
     `occurrence_id?`: `string`;
     `start_time?`: `string`;
     `status?`: `string`;
  \}[];
  `registrant_id?`: `string`;
  `start_time?`: `string`;
  `topic?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarRegistrantCreate
```

##### WebinarRegistrantGet()

```ts
WebinarRegistrantGet(...args): Promise<{
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
} & {
  language?:   | "en-US"
     | "de-DE"
     | "es-ES"
     | "fr-FR"
     | "jp-JP"
     | "pt-PT"
     | "ru-RU"
     | "zh-CN"
     | "zh-TW"
     | "ko-KO"
     | "it-IT"
     | "vi-VN"
     | "pl-PL"
     | "Tr-TR";
} & {
  create_time?: string;
  join_url?: string;
  status?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/registrants/{registrantId}"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
\} & \{
  `address?`: `string`;
  `city?`: `string`;
  `comments?`: `string`;
  `country?`: `string`;
  `custom_questions?`: readonly \{
     `title?`: `string`;
     `value?`: `string`;
  \}[];
  `email`: `string`;
  `first_name`: `string`;
  `industry?`: `string`;
  `job_title?`: `string`;
  `last_name?`: `string`;
  `no_of_employees?`:   \| `""`
     \| `"1-20"`
     \| `"21-50"`
     \| `"51-100"`
     \| `"101-250"`
     \| `"251-500"`
     \| `"501-1,000"`
     \| `"1,001-5,000"`
     \| `"5,001-10,000"`
     \| `"More than 10,000"`;
  `org?`: `string`;
  `phone?`: `string`;
  `purchasing_time_frame?`:   \| `""`
     \| `"Within a month"`
     \| `"1-3 months"`
     \| `"4-6 months"`
     \| `"More than 6 months"`
     \| `"No timeframe"`;
  `role_in_purchase_process?`:   \| `""`
     \| `"Decision Maker"`
     \| `"Evaluator/Recommender"`
     \| `"Influencer"`
     \| `"Not involved"`;
  `state?`: `string`;
  `status?`: `"pending"` \| `"approved"` \| `"denied"`;
  `zip?`: `string`;
\} & \{
  `language?`:   \| `"en-US"`
     \| `"de-DE"`
     \| `"es-ES"`
     \| `"fr-FR"`
     \| `"jp-JP"`
     \| `"pt-PT"`
     \| `"ru-RU"`
     \| `"zh-CN"`
     \| `"zh-TW"`
     \| `"ko-KO"`
     \| `"it-IT"`
     \| `"vi-VN"`
     \| `"pl-PL"`
     \| `"Tr-TR"`;
\} & \{
  `create_time?`: `string`;
  `join_url?`: `string`;
  `status?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarRegistrantGet
```

##### WebinarRegistrantQuestionUpdate()

```ts
WebinarRegistrantQuestionUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /webinars/{webinarId}/registrants/questions"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarRegistrantQuestionUpdate
```

##### WebinarRegistrants()

```ts
WebinarRegistrants(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
   } & {
     create_time?: string;
     join_url?: string;
     status?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/registrants"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `registrants?`: readonly \{
     `id?`: `string`;
   \} & \{
     `address?`: `string`;
     `city?`: `string`;
     `comments?`: `string`;
     `country?`: `string`;
     `custom_questions?`: readonly \{
        `title?`: `string`;
        `value?`: `string`;
     \}[];
     `email`: `string`;
     `first_name`: `string`;
     `industry?`: `string`;
     `job_title?`: `string`;
     `last_name?`: `string`;
     `no_of_employees?`:   \| `""`
        \| `"1-20"`
        \| `"21-50"`
        \| `"51-100"`
        \| `"101-250"`
        \| `"251-500"`
        \| `"501-1,000"`
        \| `"1,001-5,000"`
        \| `"5,001-10,000"`
        \| `"More than 10,000"`;
     `org?`: `string`;
     `phone?`: `string`;
     `purchasing_time_frame?`:   \| `""`
        \| `"Within a month"`
        \| `"1-3 months"`
        \| `"4-6 months"`
        \| `"More than 6 months"`
        \| `"No timeframe"`;
     `role_in_purchase_process?`:   \| `""`
        \| `"Decision Maker"`
        \| `"Evaluator/Recommender"`
        \| `"Influencer"`
        \| `"Not involved"`;
     `state?`: `string`;
     `status?`: `"pending"` \| `"approved"` \| `"denied"`;
     `zip?`: `string`;
   \} & \{
     `create_time?`: `string`;
     `join_url?`: `string`;
     `status?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarRegistrants
```

##### WebinarRegistrantsQuestionsGet()

```ts
WebinarRegistrantsQuestionsGet(...args): Promise<{
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "multiple" | "single_radio" | "single_dropdown";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/registrants/questions"`\>\] |

###### Returns

`Promise`\<\{
  `custom_questions?`: readonly \{
     `answers?`: readonly `string`[];
     `required?`: `boolean`;
     `title?`: `string`;
     `type?`: `"short"` \| `"multiple"` \| `"single_radio"` \| `"single_dropdown"`;
  \}[];
  `questions?`: readonly \{
     `field_name?`:   \| `"state"`
        \| `"phone"`
        \| `"last_name"`
        \| `"address"`
        \| `"city"`
        \| `"country"`
        \| `"zip"`
        \| `"industry"`
        \| `"org"`
        \| `"job_title"`
        \| `"purchasing_time_frame"`
        \| `"role_in_purchase_process"`
        \| `"no_of_employees"`
        \| `"comments"`;
     `required?`: `boolean`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarRegistrantsQuestionsGet
```

##### WebinarRegistrantStatus()

```ts
WebinarRegistrantStatus(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /webinars/{webinarId}/registrants/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarRegistrantStatus
```

##### Webinars()

```ts
Webinars(...args): Promise<{
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  webinars?: readonly {
     agenda?: string;
     created_at?: string;
     duration?: number;
     host_id?: string;
     id?: number;
     is_events_webinar?: boolean;
     is_simulive?: boolean;
     join_url?: string;
     start_time?: string;
     timezone?: string;
     topic?: string;
     type?: 5 | 6 | 9;
     uuid?: string;
  }[];
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /users/{userId}/webinars"`\>\] |

###### Returns

`Promise`\<\{
  `next_page_token?`: `string`;
  `page_count?`: `number`;
  `page_number?`: `number`;
  `page_size?`: `number`;
  `total_records?`: `number`;
\} & \{
  `webinars?`: readonly \{
     `agenda?`: `string`;
     `created_at?`: `string`;
     `duration?`: `number`;
     `host_id?`: `string`;
     `id?`: `number`;
     `is_events_webinar?`: `boolean`;
     `is_simulive?`: `boolean`;
     `join_url?`: `string`;
     `start_time?`: `string`;
     `timezone?`: `string`;
     `topic?`: `string`;
     `type?`: `5` \| `6` \| `9`;
     `uuid?`: `string`;
  \}[];
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.Webinars
```

##### WebinarStatus()

```ts
WebinarStatus(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PUT /webinars/{webinarId}/status"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarStatus
```

##### WebinarSurveyDelete()

```ts
WebinarSurveyDelete(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"DELETE /webinars/{webinarId}/survey"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarSurveyDelete
```

##### WebinarSurveyGet()

```ts
WebinarSurveyGet(...args): Promise<{
  custom_survey?: {
     anonymous?: boolean;
     feedback?: string;
     numbered_questions?: boolean;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     show_question_type?: boolean;
     title?: string;
  };
  show_in_the_browser?: boolean;
  show_in_the_follow_up_email?: boolean;
  third_party_survey?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/survey"`\>\] |

###### Returns

`Promise`\<\{
  `custom_survey?`: \{
     `anonymous?`: `boolean`;
     `feedback?`: `string`;
     `numbered_questions?`: `boolean`;
     `questions?`: readonly \{
        `answer_max_character?`: `number`;
        `answer_min_character?`: `number`;
        `answer_required?`: `boolean`;
        `answers?`: readonly `string`[];
        `name?`: `string`;
        `prompts?`: readonly \{
           `prompt_question?`: `string`;
        \}[];
        `rating_max_label?`: `string`;
        `rating_max_value?`: `number`;
        `rating_min_label?`: `string`;
        `rating_min_value?`: `number`;
        `show_as_dropdown?`: `boolean`;
        `type?`:   \| `"single"`
           \| `"multiple"`
           \| `"matching"`
           \| `"rank_order"`
           \| `"short_answer"`
           \| `"long_answer"`
           \| `"fill_in_the_blank"`
           \| `"rating_scale"`;
     \}[];
     `show_question_type?`: `boolean`;
     `title?`: `string`;
  \};
  `show_in_the_browser?`: `boolean`;
  `show_in_the_follow_up_email?`: `boolean`;
  `third_party_survey?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarSurveyGet
```

##### WebinarSurveyUpdate()

```ts
WebinarSurveyUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /webinars/{webinarId}/survey"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarSurveyUpdate
```

##### WebinarTemplateCreate()

```ts
WebinarTemplateCreate(...args): Promise<{
  id?: string;
  name?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"POST /users/{userId}/webinar_templates"`\>\] |

###### Returns

`Promise`\<\{
  `id?`: `string`;
  `name?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarTemplateCreate
```

##### WebinarToken()

```ts
WebinarToken(...args): Promise<{
  token?: string;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"GET /webinars/{webinarId}/token"`\>\] |

###### Returns

`Promise`\<\{
  `token?`: `string`;
\}\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarToken
```

##### WebinarUpdate()

```ts
WebinarUpdate(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`ZoomMeetingsApiOperationInput`\<`"PATCH /webinars/{webinarId}"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
ZoomMeetingsApiWebinarsGeneratedClient.WebinarUpdate
```

***

### ZoomMeetingsApiOperation

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

### ZoomMeetingsApiOperationQueryMap

#### Properties

##### DELETE /devices/\{deviceId\}

```ts
DELETE /devices/{deviceId}: {
};
```

##### DELETE /devices/zpa/vendors/\{vendor\}/mac\_addresses/\{macAddress\}

```ts
DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}: {
};
```

##### DELETE /h323/devices/\{deviceId\}

```ts
DELETE /h323/devices/{deviceId}: {
};
```

##### DELETE /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
DELETE /live_meetings/{meetingId}/chat/messages/{messageId}: {
  file_ids?: string;
};
```

###### file\_ids?

```ts
optional file_ids?: string;
```

##### DELETE /live\_webinars/\{webinarId\}/chat/messages/\{messageId\}

```ts
DELETE /live_webinars/{webinarId}/chat/messages/{messageId}: {
  file_ids?: string;
};
```

###### file\_ids?

```ts
optional file_ids?: string;
```

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: {
  cancel_meeting_reminder?: boolean;
  occurrence_id?: string;
  schedule_for_reminder?: boolean;
};
```

###### cancel\_meeting\_reminder?

```ts
optional cancel_meeting_reminder?: boolean;
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

###### schedule\_for\_reminder?

```ts
optional schedule_for_reminder?: boolean;
```

##### DELETE /meetings/\{meetingId\}/meeting\_summary

```ts
DELETE /meetings/{meetingId}/meeting_summary: {
};
```

##### DELETE /meetings/\{meetingId\}/open\_apps

```ts
DELETE /meetings/{meetingId}/open_apps: {
};
```

##### DELETE /meetings/\{meetingId\}/polls/\{pollId\}

```ts
DELETE /meetings/{meetingId}/polls/{pollId}: {
};
```

##### DELETE /meetings/\{meetingId\}/recordings

```ts
DELETE /meetings/{meetingId}/recordings: {
  action?: "delete" | "trash";
};
```

###### action?

```ts
optional action?: "delete" | "trash";
```

##### DELETE /meetings/\{meetingId\}/recordings/\{recordingId\}

```ts
DELETE /meetings/{meetingId}/recordings/{recordingId}: {
  action?: "delete" | "trash";
};
```

###### action?

```ts
optional action?: "delete" | "trash";
```

##### DELETE /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
DELETE /meetings/{meetingId}/registrants/{registrantId}: {
  occurrence_id?: string;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### DELETE /meetings/\{meetingId\}/survey

```ts
DELETE /meetings/{meetingId}/survey: {
};
```

##### DELETE /meetings/\{meetingId\}/transcript

```ts
DELETE /meetings/{meetingId}/transcript: {
};
```

##### DELETE /past\_meetings/\{meetingUUID\}/archive\_files

```ts
DELETE /past_meetings/{meetingUUID}/archive_files: {
};
```

##### DELETE /sip\_phones/phones/\{phoneId\}

```ts
DELETE /sip_phones/phones/{phoneId}: {
};
```

##### DELETE /tracking\_fields/\{fieldId\}

```ts
DELETE /tracking_fields/{fieldId}: {
};
```

##### DELETE /users/\{userId\}/tsp/\{tspId\}

```ts
DELETE /users/{userId}/tsp/{tspId}: {
};
```

##### DELETE /webinars/\{webinarId\}

```ts
DELETE /webinars/{webinarId}: {
  cancel_webinar_reminder?: boolean;
  occurrence_id?: string;
};
```

###### cancel\_webinar\_reminder?

```ts
optional cancel_webinar_reminder?: boolean;
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### DELETE /webinars/\{webinarId\}/branding/name\_tags

```ts
DELETE /webinars/{webinarId}/branding/name_tags: {
  name_tag_ids?: string;
};
```

###### name\_tag\_ids?

```ts
optional name_tag_ids?: string;
```

##### DELETE /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
DELETE /webinars/{webinarId}/branding/virtual_backgrounds: {
  ids?: string;
};
```

###### ids?

```ts
optional ids?: string;
```

##### DELETE /webinars/\{webinarId\}/branding/wallpaper

```ts
DELETE /webinars/{webinarId}/branding/wallpaper: {
};
```

##### DELETE /webinars/\{webinarId\}/panelists

```ts
DELETE /webinars/{webinarId}/panelists: {
};
```

##### DELETE /webinars/\{webinarId\}/panelists/\{panelistId\}

```ts
DELETE /webinars/{webinarId}/panelists/{panelistId}: {
};
```

##### DELETE /webinars/\{webinarId\}/polls/\{pollId\}

```ts
DELETE /webinars/{webinarId}/polls/{pollId}: {
};
```

##### DELETE /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
DELETE /webinars/{webinarId}/registrants/{registrantId}: {
  occurrence_id?: string;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### DELETE /webinars/\{webinarId\}/survey

```ts
DELETE /webinars/{webinarId}/survey: {
};
```

##### GET /archive\_files

```ts
GET /archive_files: {
  from?: string;
  group_id?: string;
  group_ids?: string;
  next_page_token?: string;
  page_size?: number;
  query_date_type?: "meeting_start_time" | "archive_complete_time";
  to?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### group\_id?

```ts
optional group_id?: string;
```

###### group\_ids?

```ts
optional group_ids?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### query\_date\_type?

```ts
optional query_date_type?: "meeting_start_time" | "archive_complete_time";
```

###### to?

```ts
optional to?: string;
```

##### GET /archive\_files/statistics

```ts
GET /archive_files/statistics: {
  from?: string;
  to?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### to?

```ts
optional to?: string;
```

##### GET /devices

```ts
GET /devices: {
  device_model?: string;
  device_status?: -1 | 0 | 1;
  device_type?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
  device_vendor?: string;
  is_enrolled_in_zdm?: boolean;
  next_page_token?: string;
  page_size?: number;
  platform_os?: "win" | "mac" | "ipad" | "iphone" | "android" | "linux";
  search_text?: string;
};
```

###### device\_model?

```ts
optional device_model?: string;
```

###### device\_status?

```ts
optional device_status?: -1 | 0 | 1;
```

###### device\_type?

```ts
optional device_type?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
```

###### device\_vendor?

```ts
optional device_vendor?: string;
```

###### is\_enrolled\_in\_zdm?

```ts
optional is_enrolled_in_zdm?: boolean;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### platform\_os?

```ts
optional platform_os?: "win" | "mac" | "ipad" | "iphone" | "android" | "linux";
```

###### search\_text?

```ts
optional search_text?: string;
```

##### GET /devices/\{deviceId\}

```ts
GET /devices/{deviceId}: {
};
```

##### GET /devices/groups

```ts
GET /devices/groups: {
  next_page_token?: string;
  page_size?: number;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /devices/zpa/settings

```ts
GET /devices/zpa/settings: {
  user_id?: string;
};
```

###### user\_id?

```ts
optional user_id?: string;
```

##### GET /devices/zpa/zdm\_groups/\{zdmGroupId\}/versions

```ts
GET /devices/zpa/zdm_groups/{zdmGroupId}/versions: {
};
```

##### GET /h323/devices

```ts
GET /h323/devices: {
  next_page_token?: string;
  page_number?: number;
  page_size?: number;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: {
  occurrence_id?: string;
  show_previous_occurrences?: boolean;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

###### show\_previous\_occurrences?

```ts
optional show_previous_occurrences?: boolean;
```

##### GET /meetings/\{meetingId\}/invitation

```ts
GET /meetings/{meetingId}/invitation: {
};
```

##### GET /meetings/\{meetingId\}/jointoken/live\_streaming

```ts
GET /meetings/{meetingId}/jointoken/live_streaming: {
};
```

##### GET /meetings/\{meetingId\}/jointoken/local\_archiving

```ts
GET /meetings/{meetingId}/jointoken/local_archiving: {
};
```

##### GET /meetings/\{meetingId\}/jointoken/local\_recording

```ts
GET /meetings/{meetingId}/jointoken/local_recording: {
  bypass_waiting_room?: boolean;
};
```

###### bypass\_waiting\_room?

```ts
optional bypass_waiting_room?: boolean;
```

##### GET /meetings/\{meetingId\}/livestream

```ts
GET /meetings/{meetingId}/livestream: {
};
```

##### GET /meetings/\{meetingId\}/meeting\_summary

```ts
GET /meetings/{meetingId}/meeting_summary: {
};
```

##### GET /meetings/\{meetingId\}/polls

```ts
GET /meetings/{meetingId}/polls: {
  anonymous?: boolean;
};
```

###### anonymous?

```ts
optional anonymous?: boolean;
```

##### GET /meetings/\{meetingId\}/polls/\{pollId\}

```ts
GET /meetings/{meetingId}/polls/{pollId}: {
};
```

##### GET /meetings/\{meetingId\}/recordings

```ts
GET /meetings/{meetingId}/recordings: {
  include_fields?: string;
  ttl?: number;
};
```

###### include\_fields?

```ts
optional include_fields?: string;
```

###### ttl?

```ts
optional ttl?: number;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_details

```ts
GET /meetings/{meetingId}/recordings/analytics_details: {
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  type?: "by_view" | "by_download";
};
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

###### type?

```ts
optional type?: "by_view" | "by_download";
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_summary

```ts
GET /meetings/{meetingId}/recordings/analytics_summary: {
  from?: string;
  to?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### to?

```ts
optional to?: string;
```

##### GET /meetings/\{meetingId\}/recordings/registrants

```ts
GET /meetings/{meetingId}/recordings/registrants: {
  next_page_token?: string;
  page_number?: number;
  page_size?: number;
  status?: "pending" | "approved" | "denied";
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### status?

```ts
optional status?: "pending" | "approved" | "denied";
```

##### GET /meetings/\{meetingId\}/recordings/registrants/questions

```ts
GET /meetings/{meetingId}/recordings/registrants/questions: {
};
```

##### GET /meetings/\{meetingId\}/recordings/settings

```ts
GET /meetings/{meetingId}/recordings/settings: {
};
```

##### GET /meetings/\{meetingId\}/registrants

```ts
GET /meetings/{meetingId}/registrants: {
  next_page_token?: string;
  occurrence_id?: string;
  page_number?: number;
  page_size?: number;
  status?: "pending" | "approved" | "denied";
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### status?

```ts
optional status?: "pending" | "approved" | "denied";
```

##### GET /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
GET /meetings/{meetingId}/registrants/{registrantId}: {
};
```

##### GET /meetings/\{meetingId\}/registrants/questions

```ts
GET /meetings/{meetingId}/registrants/questions: {
};
```

##### GET /meetings/\{meetingId\}/survey

```ts
GET /meetings/{meetingId}/survey: {
};
```

##### GET /meetings/\{meetingId\}/token

```ts
GET /meetings/{meetingId}/token: {
  type?: "closed_caption_token";
};
```

###### type?

```ts
optional type?: "closed_caption_token";
```

##### GET /meetings/\{meetingId\}/transcript

```ts
GET /meetings/{meetingId}/transcript: {
};
```

##### GET /meetings/meeting\_summaries

```ts
GET /meetings/meeting_summaries: {
  from?: string;
  next_page_token?: string;
  page_size?: number;
  time_filter_field?: "summary_start_time" | "summary_created_time";
  to?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### time\_filter\_field?

```ts
optional time_filter_field?: "summary_start_time" | "summary_created_time";
```

###### to?

```ts
optional to?: string;
```

##### GET /past\_meetings/\{meetingId\}

```ts
GET /past_meetings/{meetingId}: {
};
```

##### GET /past\_meetings/\{meetingId\}/instances

```ts
GET /past_meetings/{meetingId}/instances: {
  from?: string;
  to?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### to?

```ts
optional to?: string;
```

##### GET /past\_meetings/\{meetingId\}/participants

```ts
GET /past_meetings/{meetingId}/participants: {
  next_page_token?: string;
  page_size?: number;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /past\_meetings/\{meetingId\}/polls

```ts
GET /past_meetings/{meetingId}/polls: {
};
```

##### GET /past\_meetings/\{meetingId\}/qa

```ts
GET /past_meetings/{meetingId}/qa: {
};
```

##### GET /past\_meetings/\{meetingUUID\}/archive\_files

```ts
GET /past_meetings/{meetingUUID}/archive_files: {
};
```

##### GET /past\_webinars/\{webinarId\}/absentees

```ts
GET /past_webinars/{webinarId}/absentees: {
  next_page_token?: string;
  occurrence_id?: string;
  page_size?: number;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /past\_webinars/\{webinarId\}/instances

```ts
GET /past_webinars/{webinarId}/instances: {
};
```

##### GET /past\_webinars/\{webinarId\}/participants

```ts
GET /past_webinars/{webinarId}/participants: {
  next_page_token?: string;
  page_size?: number;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /past\_webinars/\{webinarId\}/polls

```ts
GET /past_webinars/{webinarId}/polls: {
};
```

##### GET /past\_webinars/\{webinarId\}/qa

```ts
GET /past_webinars/{webinarId}/qa: {
};
```

##### GET /report/activities

```ts
GET /report/activities: {
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

##### GET /report/billing

```ts
GET /report/billing: {
};
```

##### GET /report/billing/invoices

```ts
GET /report/billing/invoices: {
  billing_id: string;
};
```

###### billing\_id

```ts
billing_id: string;
```

##### GET /report/cloud\_recording

```ts
GET /report/cloud_recording: {
  from: string;
  group_id?: string;
  to: string;
};
```

###### from

```ts
from: string;
```

###### group\_id?

```ts
optional group_id?: string;
```

###### to

```ts
to: string;
```

##### GET /report/daily

```ts
GET /report/daily: {
  group_id?: string;
  month?: number;
  year?: number;
};
```

###### group\_id?

```ts
optional group_id?: string;
```

###### month?

```ts
optional month?: number;
```

###### year?

```ts
optional year?: number;
```

##### GET /report/disclaimer

```ts
GET /report/disclaimer: {
  disclaimer_type?:   | "summary"
     | "query"
     | "recording"
     | "all"
     | "login"
     | "joinMeeting"
     | "remoteControl"
     | "meetingConnector"
     | "archive"
     | "AICompanion"
     | "caption"
     | "joinSDKMeeting"
     | "NDI"
     | "joinWebinar"
     | "internalMMRGuestJoin"
     | "liveStream"
     | "phoneACR"
     | "viewBOActivity"
     | "webinarBO"
     | "unmuteAudio"
     | "joinOnZoom"
     | "GDPR"
     | "chinaMeeting"
     | "zappJoin"
     | "softUpdateReminder";
  from: string;
  group_id?: string;
  next_page_token?: string;
  page_size?: number;
  search_value?: string;
  to: string;
};
```

###### disclaimer\_type?

```ts
optional disclaimer_type?:
  | "summary"
  | "query"
  | "recording"
  | "all"
  | "login"
  | "joinMeeting"
  | "remoteControl"
  | "meetingConnector"
  | "archive"
  | "AICompanion"
  | "caption"
  | "joinSDKMeeting"
  | "NDI"
  | "joinWebinar"
  | "internalMMRGuestJoin"
  | "liveStream"
  | "phoneACR"
  | "viewBOActivity"
  | "webinarBO"
  | "unmuteAudio"
  | "joinOnZoom"
  | "GDPR"
  | "chinaMeeting"
  | "zappJoin"
  | "softUpdateReminder";
```

###### from

```ts
from: string;
```

###### group\_id?

```ts
optional group_id?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### search\_value?

```ts
optional search_value?: string;
```

###### to

```ts
to: string;
```

##### GET /report/history\_meetings

```ts
GET /report/history_meetings: {
  date_type?: "start_time" | "end_time";
  from: string;
  group_id?: string;
  meeting_feature?:   | "annotation"
     | "closed_caption"
     | "poll"
     | "whiteboard"
     | "reaction"
     | "screen_sharing"
     | "video_on"
     | "remote_control"
     | "language_interpretation"
     | "telephone_usage"
     | "in_meeting_chat"
     | "join_by_room"
     | "waiting_room"
     | "live_transcription"
     | "zoom_apps"
     | "raise_hand"
     | "virtual_background"
     | "immersive_scene"
     | "avatar"
     | "switch_to_mobile"
     | "file_sharing"
     | "meeting_summary"
     | "meeting_questions"
     | "record_to_computer"
     | "record_to_cloud"
     | "live_translation"
     | "registration"
     | "smart_recording"
     | "multi_speaker"
     | "meeting_wallpaper"
     | "gen_ai_virtual_background"
     | "multi_share"
     | "document_collaboration"
     | "portrait_lighting"
     | "personalized_audio_isolation"
     | "color_themes";
  meeting_type?: "all" | "meeting" | "webinar";
  next_page_token?: string;
  page_size?: number;
  report_type?: "all" | "poll" | "survey" | "qa" | "resource" | "reaction";
  search_key?: string;
  to: string;
};
```

###### date\_type?

```ts
optional date_type?: "start_time" | "end_time";
```

###### from

```ts
from: string;
```

###### group\_id?

```ts
optional group_id?: string;
```

###### meeting\_feature?

```ts
optional meeting_feature?:
  | "annotation"
  | "closed_caption"
  | "poll"
  | "whiteboard"
  | "reaction"
  | "screen_sharing"
  | "video_on"
  | "remote_control"
  | "language_interpretation"
  | "telephone_usage"
  | "in_meeting_chat"
  | "join_by_room"
  | "waiting_room"
  | "live_transcription"
  | "zoom_apps"
  | "raise_hand"
  | "virtual_background"
  | "immersive_scene"
  | "avatar"
  | "switch_to_mobile"
  | "file_sharing"
  | "meeting_summary"
  | "meeting_questions"
  | "record_to_computer"
  | "record_to_cloud"
  | "live_translation"
  | "registration"
  | "smart_recording"
  | "multi_speaker"
  | "meeting_wallpaper"
  | "gen_ai_virtual_background"
  | "multi_share"
  | "document_collaboration"
  | "portrait_lighting"
  | "personalized_audio_isolation"
  | "color_themes";
```

###### meeting\_type?

```ts
optional meeting_type?: "all" | "meeting" | "webinar";
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### report\_type?

```ts
optional report_type?: "all" | "poll" | "survey" | "qa" | "resource" | "reaction";
```

###### search\_key?

```ts
optional search_key?: string;
```

###### to

```ts
to: string;
```

##### GET /report/meeting\_activities

```ts
GET /report/meeting_activities: {
  activity_type:   | "All Activities"
     | "Meeting Created"
     | "Meeting Started"
     | "User Join"
     | "User Left"
     | "Remote Control"
     | "In-Meeting Chat"
     | "Meeting Ended";
  from: string;
  meeting_number?: string;
  next_page_token?: string;
  page_size?: number;
  search_key?: string;
  to: string;
};
```

###### activity\_type

```ts
activity_type:
  | "All Activities"
  | "Meeting Created"
  | "Meeting Started"
  | "User Join"
  | "User Left"
  | "Remote Control"
  | "In-Meeting Chat"
  | "Meeting Ended";
```

###### from

```ts
from: string;
```

###### meeting\_number?

```ts
optional meeting_number?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### search\_key?

```ts
optional search_key?: string;
```

###### to

```ts
to: string;
```

##### GET /report/meetings/\{meetingId\}

```ts
GET /report/meetings/{meetingId}: {
};
```

##### GET /report/meetings/\{meetingId\}/participants

```ts
GET /report/meetings/{meetingId}/participants: {
  include_fields?: "registrant_id";
  next_page_token?: string;
  page_size?: number;
};
```

###### include\_fields?

```ts
optional include_fields?: "registrant_id";
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /report/meetings/\{meetingId\}/polls

```ts
GET /report/meetings/{meetingId}/polls: {
};
```

##### GET /report/meetings/\{meetingId\}/qa

```ts
GET /report/meetings/{meetingId}/qa: {
};
```

##### GET /report/meetings/\{meetingId\}/survey

```ts
GET /report/meetings/{meetingId}/survey: {
};
```

##### GET /report/operationlogs

```ts
GET /report/operationlogs: {
  category_type?:   | "user"
     | "recording"
     | "role"
     | "all"
     | "webinar"
     | "user_settings"
     | "account"
     | "billing"
     | "im"
     | "phone_contacts"
     | "sub_account"
     | "zoom_rooms";
  from: string;
  next_page_token?: string;
  page_size?: number;
  to: string;
};
```

###### category\_type?

```ts
optional category_type?:
  | "user"
  | "recording"
  | "role"
  | "all"
  | "webinar"
  | "user_settings"
  | "account"
  | "billing"
  | "im"
  | "phone_contacts"
  | "sub_account"
  | "zoom_rooms";
```

###### from

```ts
from: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to

```ts
to: string;
```

##### GET /report/remote\_support

```ts
GET /report/remote_support: {
  from: string;
  next_page_token?: string;
  page_size?: string;
  to: string;
};
```

###### from

```ts
from: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: string;
```

###### to

```ts
to: string;
```

##### GET /report/telephone

```ts
GET /report/telephone: {
  from: string;
  next_page_token?: string;
  page_number?: number;
  page_size?: number;
  query_date_type?: "meeting_start_time" | "start_time" | "end_time" | "meeting_end_time";
  to: string;
  type?: "2" | "1" | "3";
};
```

###### from

```ts
from: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### query\_date\_type?

```ts
optional query_date_type?: "meeting_start_time" | "start_time" | "end_time" | "meeting_end_time";
```

###### to

```ts
to: string;
```

###### type?

```ts
optional type?: "2" | "1" | "3";
```

##### GET /report/upcoming\_events

```ts
GET /report/upcoming_events: {
  from: string;
  group_id?: string;
  next_page_token?: string;
  page_size?: number;
  to: string;
  type?: "all" | "meeting" | "webinar";
};
```

###### from

```ts
from: string;
```

###### group\_id?

```ts
optional group_id?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to

```ts
to: string;
```

###### type?

```ts
optional type?: "all" | "meeting" | "webinar";
```

##### GET /report/users

```ts
GET /report/users: {
  from: string;
  group_id?: string;
  next_page_token?: string;
  page_number?: number;
  page_size?: number;
  to: string;
  type?: "active" | "inactive";
};
```

###### from

```ts
from: string;
```

###### group\_id?

```ts
optional group_id?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to

```ts
to: string;
```

###### type?

```ts
optional type?: "active" | "inactive";
```

##### GET /report/users/\{userId\}/meetings

```ts
GET /report/users/{userId}/meetings: {
  from: string;
  next_page_token?: string;
  page_size?: number;
  to: string;
  type?: "past" | "pastOne" | "pastJoined";
};
```

###### from

```ts
from: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to

```ts
to: string;
```

###### type?

```ts
optional type?: "past" | "pastOne" | "pastJoined";
```

##### GET /report/webinars/\{webinarId\}

```ts
GET /report/webinars/{webinarId}: {
};
```

##### GET /report/webinars/\{webinarId\}/participants

```ts
GET /report/webinars/{webinarId}/participants: {
  include_fields?: "registrant_id";
  next_page_token?: string;
  page_size?: number;
};
```

###### include\_fields?

```ts
optional include_fields?: "registrant_id";
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /report/webinars/\{webinarId\}/polls

```ts
GET /report/webinars/{webinarId}/polls: {
};
```

##### GET /report/webinars/\{webinarId\}/qa

```ts
GET /report/webinars/{webinarId}/qa: {
};
```

##### GET /report/webinars/\{webinarId\}/survey

```ts
GET /report/webinars/{webinarId}/survey: {
};
```

##### GET /sip\_phones/phones

```ts
GET /sip_phones/phones: {
  next_page_token?: string;
  page_size?: number;
  search_key?: string;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### search\_key?

```ts
optional search_key?: string;
```

##### GET /tracking\_fields

```ts
GET /tracking_fields: {
};
```

##### GET /tracking\_fields/\{fieldId\}

```ts
GET /tracking_fields/{fieldId}: {
};
```

##### GET /tsp

```ts
GET /tsp: {
};
```

##### GET /users/\{userId\}/meeting\_templates

```ts
GET /users/{userId}/meeting_templates: {
};
```

##### GET /users/\{userId\}/meetings

```ts
GET /users/{userId}/meetings: {
  from?: string;
  next_page_token?: string;
  page_number?: number;
  page_size?: number;
  timezone?: string;
  to?: string;
  type?:   | "live"
     | "scheduled"
     | "upcoming"
     | "upcoming_meetings"
     | "previous_meetings";
};
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### timezone?

```ts
optional timezone?: string;
```

###### to?

```ts
optional to?: string;
```

###### type?

```ts
optional type?:
  | "live"
  | "scheduled"
  | "upcoming"
  | "upcoming_meetings"
  | "previous_meetings";
```

##### GET /users/\{userId\}/pac

```ts
GET /users/{userId}/pac: {
};
```

##### GET /users/\{userId\}/recordings

```ts
GET /users/{userId}/recordings: {
  from?: string;
  mc?: string;
  meeting_id?: number;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  trash?: boolean;
  trash_type?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### mc?

```ts
optional mc?: string;
```

###### meeting\_id?

```ts
optional meeting_id?: number;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

###### trash?

```ts
optional trash?: boolean;
```

###### trash\_type?

```ts
optional trash_type?: string;
```

##### GET /users/\{userId\}/tsp

```ts
GET /users/{userId}/tsp: {
};
```

##### GET /users/\{userId\}/tsp/\{tspId\}

```ts
GET /users/{userId}/tsp/{tspId}: {
};
```

##### GET /users/\{userId\}/upcoming\_meetings

```ts
GET /users/{userId}/upcoming_meetings: {
};
```

##### GET /users/\{userId\}/webinar\_templates

```ts
GET /users/{userId}/webinar_templates: {
};
```

##### GET /users/\{userId\}/webinars

```ts
GET /users/{userId}/webinars: {
  include_events_webinar?: boolean;
  page_number?: number;
  page_size?: number;
  type?: "scheduled" | "upcoming";
};
```

###### include\_events\_webinar?

```ts
optional include_events_webinar?: boolean;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### type?

```ts
optional type?: "scheduled" | "upcoming";
```

##### GET /webinars/\{webinarId\}

```ts
GET /webinars/{webinarId}: {
  occurrence_id?: string;
  show_previous_occurrences?: boolean;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

###### show\_previous\_occurrences?

```ts
optional show_previous_occurrences?: boolean;
```

##### GET /webinars/\{webinarId\}/branding

```ts
GET /webinars/{webinarId}/branding: {
};
```

##### GET /webinars/\{webinarId\}/jointoken/live\_streaming

```ts
GET /webinars/{webinarId}/jointoken/live_streaming: {
};
```

##### GET /webinars/\{webinarId\}/jointoken/local\_archiving

```ts
GET /webinars/{webinarId}/jointoken/local_archiving: {
};
```

##### GET /webinars/\{webinarId\}/jointoken/local\_recording

```ts
GET /webinars/{webinarId}/jointoken/local_recording: {
};
```

##### GET /webinars/\{webinarId\}/livestream

```ts
GET /webinars/{webinarId}/livestream: {
};
```

##### GET /webinars/\{webinarId\}/panelists

```ts
GET /webinars/{webinarId}/panelists: {
};
```

##### GET /webinars/\{webinarId\}/polls

```ts
GET /webinars/{webinarId}/polls: {
  anonymous?: boolean;
};
```

###### anonymous?

```ts
optional anonymous?: boolean;
```

##### GET /webinars/\{webinarId\}/polls/\{pollId\}

```ts
GET /webinars/{webinarId}/polls/{pollId}: {
};
```

##### GET /webinars/\{webinarId\}/registrants

```ts
GET /webinars/{webinarId}/registrants: {
  next_page_token?: string;
  occurrence_id?: string;
  page_number?: number;
  page_size?: number;
  status?: "pending" | "approved" | "denied";
  tracking_source_id?: string;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### status?

```ts
optional status?: "pending" | "approved" | "denied";
```

###### tracking\_source\_id?

```ts
optional tracking_source_id?: string;
```

##### GET /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
GET /webinars/{webinarId}/registrants/{registrantId}: {
  occurrence_id?: string;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### GET /webinars/\{webinarId\}/registrants/questions

```ts
GET /webinars/{webinarId}/registrants/questions: {
};
```

##### GET /webinars/\{webinarId\}/survey

```ts
GET /webinars/{webinarId}/survey: {
};
```

##### GET /webinars/\{webinarId\}/token

```ts
GET /webinars/{webinarId}/token: {
  type?: "closed_caption_token";
};
```

###### type?

```ts
optional type?: "closed_caption_token";
```

##### GET /webinars/\{webinarId\}/tracking\_sources

```ts
GET /webinars/{webinarId}/tracking_sources: {
};
```

##### PATCH /archive\_files/\{fileId\}

```ts
PATCH /archive_files/{fileId}: {
};
```

##### PATCH /devices/\{deviceId\}

```ts
PATCH /devices/{deviceId}: {
};
```

##### PATCH /devices/\{deviceId\}/assign\_group

```ts
PATCH /devices/{deviceId}/assign_group: {
  group_id: string;
};
```

###### group\_id

```ts
group_id: string;
```

##### PATCH /devices/\{deviceId\}/assignment

```ts
PATCH /devices/{deviceId}/assignment: {
};
```

##### PATCH /h323/devices/\{deviceId\}

```ts
PATCH /h323/devices/{deviceId}: {
};
```

##### PATCH /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
PATCH /live_meetings/{meetingId}/chat/messages/{messageId}: {
};
```

##### PATCH /live\_meetings/\{meetingId\}/events

```ts
PATCH /live_meetings/{meetingId}/events: {
};
```

##### PATCH /live\_meetings/\{meetingId\}/rtms\_app/status

```ts
PATCH /live_meetings/{meetingId}/rtms_app/status: {
};
```

##### PATCH /meetings/\{meetingId\}

```ts
PATCH /meetings/{meetingId}: {
  occurrence_id?: string;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### PATCH /meetings/\{meetingId\}/livestream

```ts
PATCH /meetings/{meetingId}/livestream: {
};
```

##### PATCH /meetings/\{meetingId\}/livestream/status

```ts
PATCH /meetings/{meetingId}/livestream/status: {
};
```

##### PATCH /meetings/\{meetingId\}/recordings/registrants/questions

```ts
PATCH /meetings/{meetingId}/recordings/registrants/questions: {
};
```

##### PATCH /meetings/\{meetingId\}/recordings/settings

```ts
PATCH /meetings/{meetingId}/recordings/settings: {
};
```

##### PATCH /meetings/\{meetingId\}/registrants/questions

```ts
PATCH /meetings/{meetingId}/registrants/questions: {
};
```

##### PATCH /meetings/\{meetingId\}/survey

```ts
PATCH /meetings/{meetingId}/survey: {
};
```

##### PATCH /sip\_phones/phones/\{phoneId\}

```ts
PATCH /sip_phones/phones/{phoneId}: {
};
```

##### PATCH /tracking\_fields/\{fieldId\}

```ts
PATCH /tracking_fields/{fieldId}: {
};
```

##### PATCH /tsp

```ts
PATCH /tsp: {
};
```

##### PATCH /users/\{userId\}/tsp/\{tspId\}

```ts
PATCH /users/{userId}/tsp/{tspId}: {
};
```

##### PATCH /users/\{userId\}/tsp/settings

```ts
PATCH /users/{userId}/tsp/settings: {
};
```

##### PATCH /webinars/\{webinarId\}

```ts
PATCH /webinars/{webinarId}: {
  occurrence_id?: string;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### PATCH /webinars/\{webinarId\}/branding/name\_tags/\{nameTagId\}

```ts
PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}: {
};
```

##### PATCH /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
PATCH /webinars/{webinarId}/branding/virtual_backgrounds: {
  id?: string;
  set_default_for_all_panelists?: boolean;
};
```

###### id?

```ts
optional id?: string;
```

###### set\_default\_for\_all\_panelists?

```ts
optional set_default_for_all_panelists?: boolean;
```

##### PATCH /webinars/\{webinarId\}/livestream

```ts
PATCH /webinars/{webinarId}/livestream: {
};
```

##### PATCH /webinars/\{webinarId\}/livestream/status

```ts
PATCH /webinars/{webinarId}/livestream/status: {
};
```

##### PATCH /webinars/\{webinarId\}/registrants/questions

```ts
PATCH /webinars/{webinarId}/registrants/questions: {
};
```

##### PATCH /webinars/\{webinarId\}/survey

```ts
PATCH /webinars/{webinarId}/survey: {
};
```

##### POST /devices

```ts
POST /devices: {
};
```

##### POST /devices/zpa/assignment

```ts
POST /devices/zpa/assignment: {
};
```

##### POST /devices/zpa/upgrade

```ts
POST /devices/zpa/upgrade: {
};
```

##### POST /h323/devices

```ts
POST /h323/devices: {
};
```

##### POST /meetings/\{meetingId\}/batch\_polls

```ts
POST /meetings/{meetingId}/batch_polls: {
};
```

##### POST /meetings/\{meetingId\}/batch\_registrants

```ts
POST /meetings/{meetingId}/batch_registrants: {
};
```

##### POST /meetings/\{meetingId\}/invite\_links

```ts
POST /meetings/{meetingId}/invite_links: {
};
```

##### POST /meetings/\{meetingId\}/open\_apps

```ts
POST /meetings/{meetingId}/open_apps: {
};
```

##### POST /meetings/\{meetingId\}/polls

```ts
POST /meetings/{meetingId}/polls: {
};
```

##### POST /meetings/\{meetingId\}/recordings/registrants

```ts
POST /meetings/{meetingId}/recordings/registrants: {
};
```

##### POST /meetings/\{meetingId\}/registrants

```ts
POST /meetings/{meetingId}/registrants: {
  occurrence_ids?: string;
};
```

###### occurrence\_ids?

```ts
optional occurrence_ids?: string;
```

##### POST /meetings/\{meetingId\}/sip\_dialing

```ts
POST /meetings/{meetingId}/sip_dialing: {
};
```

##### POST /sip\_phones/phones

```ts
POST /sip_phones/phones: {
};
```

##### POST /tracking\_fields

```ts
POST /tracking_fields: {
};
```

##### POST /users/\{userId\}/meeting\_templates

```ts
POST /users/{userId}/meeting_templates: {
};
```

##### POST /users/\{userId\}/meetings

```ts
POST /users/{userId}/meetings: {
};
```

##### POST /users/\{userId\}/tsp

```ts
POST /users/{userId}/tsp: {
};
```

##### POST /users/\{userId\}/webinar\_templates

```ts
POST /users/{userId}/webinar_templates: {
};
```

##### POST /users/\{userId\}/webinars

```ts
POST /users/{userId}/webinars: {
};
```

##### POST /webinars/\{webinarId\}/batch\_registrants

```ts
POST /webinars/{webinarId}/batch_registrants: {
};
```

##### POST /webinars/\{webinarId\}/branding/name\_tags

```ts
POST /webinars/{webinarId}/branding/name_tags: {
};
```

##### POST /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
POST /webinars/{webinarId}/branding/virtual_backgrounds: {
};
```

##### POST /webinars/\{webinarId\}/branding/wallpaper

```ts
POST /webinars/{webinarId}/branding/wallpaper: {
};
```

##### POST /webinars/\{webinarId\}/invite\_links

```ts
POST /webinars/{webinarId}/invite_links: {
};
```

##### POST /webinars/\{webinarId\}/panelists

```ts
POST /webinars/{webinarId}/panelists: {
};
```

##### POST /webinars/\{webinarId\}/polls

```ts
POST /webinars/{webinarId}/polls: {
};
```

##### POST /webinars/\{webinarId\}/registrants

```ts
POST /webinars/{webinarId}/registrants: {
  occurrence_ids?: string;
};
```

###### occurrence\_ids?

```ts
optional occurrence_ids?: string;
```

##### POST /webinars/\{webinarId\}/sip\_dialing

```ts
POST /webinars/{webinarId}/sip_dialing: {
};
```

##### PUT /meetings/\{meetingId\}/polls/\{pollId\}

```ts
PUT /meetings/{meetingId}/polls/{pollId}: {
};
```

##### PUT /meetings/\{meetingId\}/recordings/\{recordingId\}/status

```ts
PUT /meetings/{meetingId}/recordings/{recordingId}/status: {
};
```

##### PUT /meetings/\{meetingId\}/recordings/registrants/status

```ts
PUT /meetings/{meetingId}/recordings/registrants/status: {
};
```

##### PUT /meetings/\{meetingId\}/registrants/status

```ts
PUT /meetings/{meetingId}/registrants/status: {
  occurrence_id?: string;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### PUT /meetings/\{meetingId\}/status

```ts
PUT /meetings/{meetingId}/status: {
};
```

##### PUT /meetings/\{meetingUUID\}/recordings/status

```ts
PUT /meetings/{meetingUUID}/recordings/status: {
};
```

##### PUT /webinars/\{webinarId\}/polls/\{pollId\}

```ts
PUT /webinars/{webinarId}/polls/{pollId}: {
};
```

##### PUT /webinars/\{webinarId\}/registrants/status

```ts
PUT /webinars/{webinarId}/registrants/status: {
  occurrence_id?: string;
};
```

###### occurrence\_id?

```ts
optional occurrence_id?: string;
```

##### PUT /webinars/\{webinarId\}/status

```ts
PUT /webinars/{webinarId}/status: {
};
```

***

### ZoomMeetingsApiOperationQueryRequiredMap

#### Properties

##### DELETE /devices/\{deviceId\}

```ts
DELETE /devices/{deviceId}: false;
```

##### DELETE /devices/zpa/vendors/\{vendor\}/mac\_addresses/\{macAddress\}

```ts
DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}: false;
```

##### DELETE /h323/devices/\{deviceId\}

```ts
DELETE /h323/devices/{deviceId}: false;
```

##### DELETE /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
DELETE /live_meetings/{meetingId}/chat/messages/{messageId}: false;
```

##### DELETE /live\_webinars/\{webinarId\}/chat/messages/\{messageId\}

```ts
DELETE /live_webinars/{webinarId}/chat/messages/{messageId}: false;
```

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: false;
```

##### DELETE /meetings/\{meetingId\}/meeting\_summary

```ts
DELETE /meetings/{meetingId}/meeting_summary: false;
```

##### DELETE /meetings/\{meetingId\}/open\_apps

```ts
DELETE /meetings/{meetingId}/open_apps: false;
```

##### DELETE /meetings/\{meetingId\}/polls/\{pollId\}

```ts
DELETE /meetings/{meetingId}/polls/{pollId}: false;
```

##### DELETE /meetings/\{meetingId\}/recordings

```ts
DELETE /meetings/{meetingId}/recordings: false;
```

##### DELETE /meetings/\{meetingId\}/recordings/\{recordingId\}

```ts
DELETE /meetings/{meetingId}/recordings/{recordingId}: false;
```

##### DELETE /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
DELETE /meetings/{meetingId}/registrants/{registrantId}: false;
```

##### DELETE /meetings/\{meetingId\}/survey

```ts
DELETE /meetings/{meetingId}/survey: false;
```

##### DELETE /meetings/\{meetingId\}/transcript

```ts
DELETE /meetings/{meetingId}/transcript: false;
```

##### DELETE /past\_meetings/\{meetingUUID\}/archive\_files

```ts
DELETE /past_meetings/{meetingUUID}/archive_files: false;
```

##### DELETE /sip\_phones/phones/\{phoneId\}

```ts
DELETE /sip_phones/phones/{phoneId}: false;
```

##### DELETE /tracking\_fields/\{fieldId\}

```ts
DELETE /tracking_fields/{fieldId}: false;
```

##### DELETE /users/\{userId\}/tsp/\{tspId\}

```ts
DELETE /users/{userId}/tsp/{tspId}: false;
```

##### DELETE /webinars/\{webinarId\}

```ts
DELETE /webinars/{webinarId}: false;
```

##### DELETE /webinars/\{webinarId\}/branding/name\_tags

```ts
DELETE /webinars/{webinarId}/branding/name_tags: false;
```

##### DELETE /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
DELETE /webinars/{webinarId}/branding/virtual_backgrounds: false;
```

##### DELETE /webinars/\{webinarId\}/branding/wallpaper

```ts
DELETE /webinars/{webinarId}/branding/wallpaper: false;
```

##### DELETE /webinars/\{webinarId\}/panelists

```ts
DELETE /webinars/{webinarId}/panelists: false;
```

##### DELETE /webinars/\{webinarId\}/panelists/\{panelistId\}

```ts
DELETE /webinars/{webinarId}/panelists/{panelistId}: false;
```

##### DELETE /webinars/\{webinarId\}/polls/\{pollId\}

```ts
DELETE /webinars/{webinarId}/polls/{pollId}: false;
```

##### DELETE /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
DELETE /webinars/{webinarId}/registrants/{registrantId}: false;
```

##### DELETE /webinars/\{webinarId\}/survey

```ts
DELETE /webinars/{webinarId}/survey: false;
```

##### GET /archive\_files

```ts
GET /archive_files: false;
```

##### GET /archive\_files/statistics

```ts
GET /archive_files/statistics: false;
```

##### GET /devices

```ts
GET /devices: false;
```

##### GET /devices/\{deviceId\}

```ts
GET /devices/{deviceId}: false;
```

##### GET /devices/groups

```ts
GET /devices/groups: false;
```

##### GET /devices/zpa/settings

```ts
GET /devices/zpa/settings: false;
```

##### GET /devices/zpa/zdm\_groups/\{zdmGroupId\}/versions

```ts
GET /devices/zpa/zdm_groups/{zdmGroupId}/versions: false;
```

##### GET /h323/devices

```ts
GET /h323/devices: false;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: false;
```

##### GET /meetings/\{meetingId\}/invitation

```ts
GET /meetings/{meetingId}/invitation: false;
```

##### GET /meetings/\{meetingId\}/jointoken/live\_streaming

```ts
GET /meetings/{meetingId}/jointoken/live_streaming: false;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_archiving

```ts
GET /meetings/{meetingId}/jointoken/local_archiving: false;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_recording

```ts
GET /meetings/{meetingId}/jointoken/local_recording: false;
```

##### GET /meetings/\{meetingId\}/livestream

```ts
GET /meetings/{meetingId}/livestream: false;
```

##### GET /meetings/\{meetingId\}/meeting\_summary

```ts
GET /meetings/{meetingId}/meeting_summary: false;
```

##### GET /meetings/\{meetingId\}/polls

```ts
GET /meetings/{meetingId}/polls: false;
```

##### GET /meetings/\{meetingId\}/polls/\{pollId\}

```ts
GET /meetings/{meetingId}/polls/{pollId}: false;
```

##### GET /meetings/\{meetingId\}/recordings

```ts
GET /meetings/{meetingId}/recordings: false;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_details

```ts
GET /meetings/{meetingId}/recordings/analytics_details: false;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_summary

```ts
GET /meetings/{meetingId}/recordings/analytics_summary: false;
```

##### GET /meetings/\{meetingId\}/recordings/registrants

```ts
GET /meetings/{meetingId}/recordings/registrants: false;
```

##### GET /meetings/\{meetingId\}/recordings/registrants/questions

```ts
GET /meetings/{meetingId}/recordings/registrants/questions: false;
```

##### GET /meetings/\{meetingId\}/recordings/settings

```ts
GET /meetings/{meetingId}/recordings/settings: false;
```

##### GET /meetings/\{meetingId\}/registrants

```ts
GET /meetings/{meetingId}/registrants: false;
```

##### GET /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
GET /meetings/{meetingId}/registrants/{registrantId}: false;
```

##### GET /meetings/\{meetingId\}/registrants/questions

```ts
GET /meetings/{meetingId}/registrants/questions: false;
```

##### GET /meetings/\{meetingId\}/survey

```ts
GET /meetings/{meetingId}/survey: false;
```

##### GET /meetings/\{meetingId\}/token

```ts
GET /meetings/{meetingId}/token: false;
```

##### GET /meetings/\{meetingId\}/transcript

```ts
GET /meetings/{meetingId}/transcript: false;
```

##### GET /meetings/meeting\_summaries

```ts
GET /meetings/meeting_summaries: false;
```

##### GET /past\_meetings/\{meetingId\}

```ts
GET /past_meetings/{meetingId}: false;
```

##### GET /past\_meetings/\{meetingId\}/instances

```ts
GET /past_meetings/{meetingId}/instances: false;
```

##### GET /past\_meetings/\{meetingId\}/participants

```ts
GET /past_meetings/{meetingId}/participants: false;
```

##### GET /past\_meetings/\{meetingId\}/polls

```ts
GET /past_meetings/{meetingId}/polls: false;
```

##### GET /past\_meetings/\{meetingId\}/qa

```ts
GET /past_meetings/{meetingId}/qa: false;
```

##### GET /past\_meetings/\{meetingUUID\}/archive\_files

```ts
GET /past_meetings/{meetingUUID}/archive_files: false;
```

##### GET /past\_webinars/\{webinarId\}/absentees

```ts
GET /past_webinars/{webinarId}/absentees: false;
```

##### GET /past\_webinars/\{webinarId\}/instances

```ts
GET /past_webinars/{webinarId}/instances: false;
```

##### GET /past\_webinars/\{webinarId\}/participants

```ts
GET /past_webinars/{webinarId}/participants: false;
```

##### GET /past\_webinars/\{webinarId\}/polls

```ts
GET /past_webinars/{webinarId}/polls: false;
```

##### GET /past\_webinars/\{webinarId\}/qa

```ts
GET /past_webinars/{webinarId}/qa: false;
```

##### GET /report/activities

```ts
GET /report/activities: false;
```

##### GET /report/billing

```ts
GET /report/billing: false;
```

##### GET /report/billing/invoices

```ts
GET /report/billing/invoices: true;
```

##### GET /report/cloud\_recording

```ts
GET /report/cloud_recording: true;
```

##### GET /report/daily

```ts
GET /report/daily: false;
```

##### GET /report/disclaimer

```ts
GET /report/disclaimer: true;
```

##### GET /report/history\_meetings

```ts
GET /report/history_meetings: true;
```

##### GET /report/meeting\_activities

```ts
GET /report/meeting_activities: true;
```

##### GET /report/meetings/\{meetingId\}

```ts
GET /report/meetings/{meetingId}: false;
```

##### GET /report/meetings/\{meetingId\}/participants

```ts
GET /report/meetings/{meetingId}/participants: false;
```

##### GET /report/meetings/\{meetingId\}/polls

```ts
GET /report/meetings/{meetingId}/polls: false;
```

##### GET /report/meetings/\{meetingId\}/qa

```ts
GET /report/meetings/{meetingId}/qa: false;
```

##### GET /report/meetings/\{meetingId\}/survey

```ts
GET /report/meetings/{meetingId}/survey: false;
```

##### GET /report/operationlogs

```ts
GET /report/operationlogs: true;
```

##### GET /report/remote\_support

```ts
GET /report/remote_support: true;
```

##### GET /report/telephone

```ts
GET /report/telephone: true;
```

##### GET /report/upcoming\_events

```ts
GET /report/upcoming_events: true;
```

##### GET /report/users

```ts
GET /report/users: true;
```

##### GET /report/users/\{userId\}/meetings

```ts
GET /report/users/{userId}/meetings: true;
```

##### GET /report/webinars/\{webinarId\}

```ts
GET /report/webinars/{webinarId}: false;
```

##### GET /report/webinars/\{webinarId\}/participants

```ts
GET /report/webinars/{webinarId}/participants: false;
```

##### GET /report/webinars/\{webinarId\}/polls

```ts
GET /report/webinars/{webinarId}/polls: false;
```

##### GET /report/webinars/\{webinarId\}/qa

```ts
GET /report/webinars/{webinarId}/qa: false;
```

##### GET /report/webinars/\{webinarId\}/survey

```ts
GET /report/webinars/{webinarId}/survey: false;
```

##### GET /sip\_phones/phones

```ts
GET /sip_phones/phones: false;
```

##### GET /tracking\_fields

```ts
GET /tracking_fields: false;
```

##### GET /tracking\_fields/\{fieldId\}

```ts
GET /tracking_fields/{fieldId}: false;
```

##### GET /tsp

```ts
GET /tsp: false;
```

##### GET /users/\{userId\}/meeting\_templates

```ts
GET /users/{userId}/meeting_templates: false;
```

##### GET /users/\{userId\}/meetings

```ts
GET /users/{userId}/meetings: false;
```

##### GET /users/\{userId\}/pac

```ts
GET /users/{userId}/pac: false;
```

##### GET /users/\{userId\}/recordings

```ts
GET /users/{userId}/recordings: false;
```

##### GET /users/\{userId\}/tsp

```ts
GET /users/{userId}/tsp: false;
```

##### GET /users/\{userId\}/tsp/\{tspId\}

```ts
GET /users/{userId}/tsp/{tspId}: false;
```

##### GET /users/\{userId\}/upcoming\_meetings

```ts
GET /users/{userId}/upcoming_meetings: false;
```

##### GET /users/\{userId\}/webinar\_templates

```ts
GET /users/{userId}/webinar_templates: false;
```

##### GET /users/\{userId\}/webinars

```ts
GET /users/{userId}/webinars: false;
```

##### GET /webinars/\{webinarId\}

```ts
GET /webinars/{webinarId}: false;
```

##### GET /webinars/\{webinarId\}/branding

```ts
GET /webinars/{webinarId}/branding: false;
```

##### GET /webinars/\{webinarId\}/jointoken/live\_streaming

```ts
GET /webinars/{webinarId}/jointoken/live_streaming: false;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_archiving

```ts
GET /webinars/{webinarId}/jointoken/local_archiving: false;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_recording

```ts
GET /webinars/{webinarId}/jointoken/local_recording: false;
```

##### GET /webinars/\{webinarId\}/livestream

```ts
GET /webinars/{webinarId}/livestream: false;
```

##### GET /webinars/\{webinarId\}/panelists

```ts
GET /webinars/{webinarId}/panelists: false;
```

##### GET /webinars/\{webinarId\}/polls

```ts
GET /webinars/{webinarId}/polls: false;
```

##### GET /webinars/\{webinarId\}/polls/\{pollId\}

```ts
GET /webinars/{webinarId}/polls/{pollId}: false;
```

##### GET /webinars/\{webinarId\}/registrants

```ts
GET /webinars/{webinarId}/registrants: false;
```

##### GET /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
GET /webinars/{webinarId}/registrants/{registrantId}: false;
```

##### GET /webinars/\{webinarId\}/registrants/questions

```ts
GET /webinars/{webinarId}/registrants/questions: false;
```

##### GET /webinars/\{webinarId\}/survey

```ts
GET /webinars/{webinarId}/survey: false;
```

##### GET /webinars/\{webinarId\}/token

```ts
GET /webinars/{webinarId}/token: false;
```

##### GET /webinars/\{webinarId\}/tracking\_sources

```ts
GET /webinars/{webinarId}/tracking_sources: false;
```

##### PATCH /archive\_files/\{fileId\}

```ts
PATCH /archive_files/{fileId}: false;
```

##### PATCH /devices/\{deviceId\}

```ts
PATCH /devices/{deviceId}: false;
```

##### PATCH /devices/\{deviceId\}/assign\_group

```ts
PATCH /devices/{deviceId}/assign_group: true;
```

##### PATCH /devices/\{deviceId\}/assignment

```ts
PATCH /devices/{deviceId}/assignment: false;
```

##### PATCH /h323/devices/\{deviceId\}

```ts
PATCH /h323/devices/{deviceId}: false;
```

##### PATCH /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
PATCH /live_meetings/{meetingId}/chat/messages/{messageId}: false;
```

##### PATCH /live\_meetings/\{meetingId\}/events

```ts
PATCH /live_meetings/{meetingId}/events: false;
```

##### PATCH /live\_meetings/\{meetingId\}/rtms\_app/status

```ts
PATCH /live_meetings/{meetingId}/rtms_app/status: false;
```

##### PATCH /meetings/\{meetingId\}

```ts
PATCH /meetings/{meetingId}: false;
```

##### PATCH /meetings/\{meetingId\}/livestream

```ts
PATCH /meetings/{meetingId}/livestream: false;
```

##### PATCH /meetings/\{meetingId\}/livestream/status

```ts
PATCH /meetings/{meetingId}/livestream/status: false;
```

##### PATCH /meetings/\{meetingId\}/recordings/registrants/questions

```ts
PATCH /meetings/{meetingId}/recordings/registrants/questions: false;
```

##### PATCH /meetings/\{meetingId\}/recordings/settings

```ts
PATCH /meetings/{meetingId}/recordings/settings: false;
```

##### PATCH /meetings/\{meetingId\}/registrants/questions

```ts
PATCH /meetings/{meetingId}/registrants/questions: false;
```

##### PATCH /meetings/\{meetingId\}/survey

```ts
PATCH /meetings/{meetingId}/survey: false;
```

##### PATCH /sip\_phones/phones/\{phoneId\}

```ts
PATCH /sip_phones/phones/{phoneId}: false;
```

##### PATCH /tracking\_fields/\{fieldId\}

```ts
PATCH /tracking_fields/{fieldId}: false;
```

##### PATCH /tsp

```ts
PATCH /tsp: false;
```

##### PATCH /users/\{userId\}/tsp/\{tspId\}

```ts
PATCH /users/{userId}/tsp/{tspId}: false;
```

##### PATCH /users/\{userId\}/tsp/settings

```ts
PATCH /users/{userId}/tsp/settings: false;
```

##### PATCH /webinars/\{webinarId\}

```ts
PATCH /webinars/{webinarId}: false;
```

##### PATCH /webinars/\{webinarId\}/branding/name\_tags/\{nameTagId\}

```ts
PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}: false;
```

##### PATCH /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
PATCH /webinars/{webinarId}/branding/virtual_backgrounds: false;
```

##### PATCH /webinars/\{webinarId\}/livestream

```ts
PATCH /webinars/{webinarId}/livestream: false;
```

##### PATCH /webinars/\{webinarId\}/livestream/status

```ts
PATCH /webinars/{webinarId}/livestream/status: false;
```

##### PATCH /webinars/\{webinarId\}/registrants/questions

```ts
PATCH /webinars/{webinarId}/registrants/questions: false;
```

##### PATCH /webinars/\{webinarId\}/survey

```ts
PATCH /webinars/{webinarId}/survey: false;
```

##### POST /devices

```ts
POST /devices: false;
```

##### POST /devices/zpa/assignment

```ts
POST /devices/zpa/assignment: false;
```

##### POST /devices/zpa/upgrade

```ts
POST /devices/zpa/upgrade: false;
```

##### POST /h323/devices

```ts
POST /h323/devices: false;
```

##### POST /meetings/\{meetingId\}/batch\_polls

```ts
POST /meetings/{meetingId}/batch_polls: false;
```

##### POST /meetings/\{meetingId\}/batch\_registrants

```ts
POST /meetings/{meetingId}/batch_registrants: false;
```

##### POST /meetings/\{meetingId\}/invite\_links

```ts
POST /meetings/{meetingId}/invite_links: false;
```

##### POST /meetings/\{meetingId\}/open\_apps

```ts
POST /meetings/{meetingId}/open_apps: false;
```

##### POST /meetings/\{meetingId\}/polls

```ts
POST /meetings/{meetingId}/polls: false;
```

##### POST /meetings/\{meetingId\}/recordings/registrants

```ts
POST /meetings/{meetingId}/recordings/registrants: false;
```

##### POST /meetings/\{meetingId\}/registrants

```ts
POST /meetings/{meetingId}/registrants: false;
```

##### POST /meetings/\{meetingId\}/sip\_dialing

```ts
POST /meetings/{meetingId}/sip_dialing: false;
```

##### POST /sip\_phones/phones

```ts
POST /sip_phones/phones: false;
```

##### POST /tracking\_fields

```ts
POST /tracking_fields: false;
```

##### POST /users/\{userId\}/meeting\_templates

```ts
POST /users/{userId}/meeting_templates: false;
```

##### POST /users/\{userId\}/meetings

```ts
POST /users/{userId}/meetings: false;
```

##### POST /users/\{userId\}/tsp

```ts
POST /users/{userId}/tsp: false;
```

##### POST /users/\{userId\}/webinar\_templates

```ts
POST /users/{userId}/webinar_templates: false;
```

##### POST /users/\{userId\}/webinars

```ts
POST /users/{userId}/webinars: false;
```

##### POST /webinars/\{webinarId\}/batch\_registrants

```ts
POST /webinars/{webinarId}/batch_registrants: false;
```

##### POST /webinars/\{webinarId\}/branding/name\_tags

```ts
POST /webinars/{webinarId}/branding/name_tags: false;
```

##### POST /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
POST /webinars/{webinarId}/branding/virtual_backgrounds: false;
```

##### POST /webinars/\{webinarId\}/branding/wallpaper

```ts
POST /webinars/{webinarId}/branding/wallpaper: false;
```

##### POST /webinars/\{webinarId\}/invite\_links

```ts
POST /webinars/{webinarId}/invite_links: false;
```

##### POST /webinars/\{webinarId\}/panelists

```ts
POST /webinars/{webinarId}/panelists: false;
```

##### POST /webinars/\{webinarId\}/polls

```ts
POST /webinars/{webinarId}/polls: false;
```

##### POST /webinars/\{webinarId\}/registrants

```ts
POST /webinars/{webinarId}/registrants: false;
```

##### POST /webinars/\{webinarId\}/sip\_dialing

```ts
POST /webinars/{webinarId}/sip_dialing: false;
```

##### PUT /meetings/\{meetingId\}/polls/\{pollId\}

```ts
PUT /meetings/{meetingId}/polls/{pollId}: false;
```

##### PUT /meetings/\{meetingId\}/recordings/\{recordingId\}/status

```ts
PUT /meetings/{meetingId}/recordings/{recordingId}/status: false;
```

##### PUT /meetings/\{meetingId\}/recordings/registrants/status

```ts
PUT /meetings/{meetingId}/recordings/registrants/status: false;
```

##### PUT /meetings/\{meetingId\}/registrants/status

```ts
PUT /meetings/{meetingId}/registrants/status: false;
```

##### PUT /meetings/\{meetingId\}/status

```ts
PUT /meetings/{meetingId}/status: false;
```

##### PUT /meetings/\{meetingUUID\}/recordings/status

```ts
PUT /meetings/{meetingUUID}/recordings/status: false;
```

##### PUT /webinars/\{webinarId\}/polls/\{pollId\}

```ts
PUT /webinars/{webinarId}/polls/{pollId}: false;
```

##### PUT /webinars/\{webinarId\}/registrants/status

```ts
PUT /webinars/{webinarId}/registrants/status: false;
```

##### PUT /webinars/\{webinarId\}/status

```ts
PUT /webinars/{webinarId}/status: false;
```

***

### ZoomMeetingsApiOperationRequestBodyMap

#### Properties

##### DELETE /devices/\{deviceId\}

```ts
DELETE /devices/{deviceId}: never;
```

##### DELETE /devices/zpa/vendors/\{vendor\}/mac\_addresses/\{macAddress\}

```ts
DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}: never;
```

##### DELETE /h323/devices/\{deviceId\}

```ts
DELETE /h323/devices/{deviceId}: never;
```

##### DELETE /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
DELETE /live_meetings/{meetingId}/chat/messages/{messageId}: never;
```

##### DELETE /live\_webinars/\{webinarId\}/chat/messages/\{messageId\}

```ts
DELETE /live_webinars/{webinarId}/chat/messages/{messageId}: never;
```

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: never;
```

##### DELETE /meetings/\{meetingId\}/meeting\_summary

```ts
DELETE /meetings/{meetingId}/meeting_summary: never;
```

##### DELETE /meetings/\{meetingId\}/open\_apps

```ts
DELETE /meetings/{meetingId}/open_apps: never;
```

##### DELETE /meetings/\{meetingId\}/polls/\{pollId\}

```ts
DELETE /meetings/{meetingId}/polls/{pollId}: never;
```

##### DELETE /meetings/\{meetingId\}/recordings

```ts
DELETE /meetings/{meetingId}/recordings: never;
```

##### DELETE /meetings/\{meetingId\}/recordings/\{recordingId\}

```ts
DELETE /meetings/{meetingId}/recordings/{recordingId}: never;
```

##### DELETE /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
DELETE /meetings/{meetingId}/registrants/{registrantId}: never;
```

##### DELETE /meetings/\{meetingId\}/survey

```ts
DELETE /meetings/{meetingId}/survey: never;
```

##### DELETE /meetings/\{meetingId\}/transcript

```ts
DELETE /meetings/{meetingId}/transcript: never;
```

##### DELETE /past\_meetings/\{meetingUUID\}/archive\_files

```ts
DELETE /past_meetings/{meetingUUID}/archive_files: never;
```

##### DELETE /sip\_phones/phones/\{phoneId\}

```ts
DELETE /sip_phones/phones/{phoneId}: never;
```

##### DELETE /tracking\_fields/\{fieldId\}

```ts
DELETE /tracking_fields/{fieldId}: never;
```

##### DELETE /users/\{userId\}/tsp/\{tspId\}

```ts
DELETE /users/{userId}/tsp/{tspId}: never;
```

##### DELETE /webinars/\{webinarId\}

```ts
DELETE /webinars/{webinarId}: never;
```

##### DELETE /webinars/\{webinarId\}/branding/name\_tags

```ts
DELETE /webinars/{webinarId}/branding/name_tags: never;
```

##### DELETE /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
DELETE /webinars/{webinarId}/branding/virtual_backgrounds: never;
```

##### DELETE /webinars/\{webinarId\}/branding/wallpaper

```ts
DELETE /webinars/{webinarId}/branding/wallpaper: never;
```

##### DELETE /webinars/\{webinarId\}/panelists

```ts
DELETE /webinars/{webinarId}/panelists: never;
```

##### DELETE /webinars/\{webinarId\}/panelists/\{panelistId\}

```ts
DELETE /webinars/{webinarId}/panelists/{panelistId}: never;
```

##### DELETE /webinars/\{webinarId\}/polls/\{pollId\}

```ts
DELETE /webinars/{webinarId}/polls/{pollId}: never;
```

##### DELETE /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
DELETE /webinars/{webinarId}/registrants/{registrantId}: never;
```

##### DELETE /webinars/\{webinarId\}/survey

```ts
DELETE /webinars/{webinarId}/survey: never;
```

##### GET /archive\_files

```ts
GET /archive_files: never;
```

##### GET /archive\_files/statistics

```ts
GET /archive_files/statistics: never;
```

##### GET /devices

```ts
GET /devices: never;
```

##### GET /devices/\{deviceId\}

```ts
GET /devices/{deviceId}: never;
```

##### GET /devices/groups

```ts
GET /devices/groups: never;
```

##### GET /devices/zpa/settings

```ts
GET /devices/zpa/settings: never;
```

##### GET /devices/zpa/zdm\_groups/\{zdmGroupId\}/versions

```ts
GET /devices/zpa/zdm_groups/{zdmGroupId}/versions: never;
```

##### GET /h323/devices

```ts
GET /h323/devices: never;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: never;
```

##### GET /meetings/\{meetingId\}/invitation

```ts
GET /meetings/{meetingId}/invitation: never;
```

##### GET /meetings/\{meetingId\}/jointoken/live\_streaming

```ts
GET /meetings/{meetingId}/jointoken/live_streaming: never;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_archiving

```ts
GET /meetings/{meetingId}/jointoken/local_archiving: never;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_recording

```ts
GET /meetings/{meetingId}/jointoken/local_recording: never;
```

##### GET /meetings/\{meetingId\}/livestream

```ts
GET /meetings/{meetingId}/livestream: never;
```

##### GET /meetings/\{meetingId\}/meeting\_summary

```ts
GET /meetings/{meetingId}/meeting_summary: never;
```

##### GET /meetings/\{meetingId\}/polls

```ts
GET /meetings/{meetingId}/polls: never;
```

##### GET /meetings/\{meetingId\}/polls/\{pollId\}

```ts
GET /meetings/{meetingId}/polls/{pollId}: never;
```

##### GET /meetings/\{meetingId\}/recordings

```ts
GET /meetings/{meetingId}/recordings: never;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_details

```ts
GET /meetings/{meetingId}/recordings/analytics_details: never;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_summary

```ts
GET /meetings/{meetingId}/recordings/analytics_summary: never;
```

##### GET /meetings/\{meetingId\}/recordings/registrants

```ts
GET /meetings/{meetingId}/recordings/registrants: never;
```

##### GET /meetings/\{meetingId\}/recordings/registrants/questions

```ts
GET /meetings/{meetingId}/recordings/registrants/questions: never;
```

##### GET /meetings/\{meetingId\}/recordings/settings

```ts
GET /meetings/{meetingId}/recordings/settings: never;
```

##### GET /meetings/\{meetingId\}/registrants

```ts
GET /meetings/{meetingId}/registrants: never;
```

##### GET /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
GET /meetings/{meetingId}/registrants/{registrantId}: never;
```

##### GET /meetings/\{meetingId\}/registrants/questions

```ts
GET /meetings/{meetingId}/registrants/questions: never;
```

##### GET /meetings/\{meetingId\}/survey

```ts
GET /meetings/{meetingId}/survey: never;
```

##### GET /meetings/\{meetingId\}/token

```ts
GET /meetings/{meetingId}/token: never;
```

##### GET /meetings/\{meetingId\}/transcript

```ts
GET /meetings/{meetingId}/transcript: never;
```

##### GET /meetings/meeting\_summaries

```ts
GET /meetings/meeting_summaries: never;
```

##### GET /past\_meetings/\{meetingId\}

```ts
GET /past_meetings/{meetingId}: never;
```

##### GET /past\_meetings/\{meetingId\}/instances

```ts
GET /past_meetings/{meetingId}/instances: never;
```

##### GET /past\_meetings/\{meetingId\}/participants

```ts
GET /past_meetings/{meetingId}/participants: never;
```

##### GET /past\_meetings/\{meetingId\}/polls

```ts
GET /past_meetings/{meetingId}/polls: never;
```

##### GET /past\_meetings/\{meetingId\}/qa

```ts
GET /past_meetings/{meetingId}/qa: never;
```

##### GET /past\_meetings/\{meetingUUID\}/archive\_files

```ts
GET /past_meetings/{meetingUUID}/archive_files: never;
```

##### GET /past\_webinars/\{webinarId\}/absentees

```ts
GET /past_webinars/{webinarId}/absentees: never;
```

##### GET /past\_webinars/\{webinarId\}/instances

```ts
GET /past_webinars/{webinarId}/instances: never;
```

##### GET /past\_webinars/\{webinarId\}/participants

```ts
GET /past_webinars/{webinarId}/participants: never;
```

##### GET /past\_webinars/\{webinarId\}/polls

```ts
GET /past_webinars/{webinarId}/polls: never;
```

##### GET /past\_webinars/\{webinarId\}/qa

```ts
GET /past_webinars/{webinarId}/qa: never;
```

##### GET /report/activities

```ts
GET /report/activities: never;
```

##### GET /report/billing

```ts
GET /report/billing: never;
```

##### GET /report/billing/invoices

```ts
GET /report/billing/invoices: never;
```

##### GET /report/cloud\_recording

```ts
GET /report/cloud_recording: never;
```

##### GET /report/daily

```ts
GET /report/daily: never;
```

##### GET /report/disclaimer

```ts
GET /report/disclaimer: never;
```

##### GET /report/history\_meetings

```ts
GET /report/history_meetings: never;
```

##### GET /report/meeting\_activities

```ts
GET /report/meeting_activities: never;
```

##### GET /report/meetings/\{meetingId\}

```ts
GET /report/meetings/{meetingId}: never;
```

##### GET /report/meetings/\{meetingId\}/participants

```ts
GET /report/meetings/{meetingId}/participants: never;
```

##### GET /report/meetings/\{meetingId\}/polls

```ts
GET /report/meetings/{meetingId}/polls: never;
```

##### GET /report/meetings/\{meetingId\}/qa

```ts
GET /report/meetings/{meetingId}/qa: never;
```

##### GET /report/meetings/\{meetingId\}/survey

```ts
GET /report/meetings/{meetingId}/survey: never;
```

##### GET /report/operationlogs

```ts
GET /report/operationlogs: never;
```

##### GET /report/remote\_support

```ts
GET /report/remote_support: never;
```

##### GET /report/telephone

```ts
GET /report/telephone: never;
```

##### GET /report/upcoming\_events

```ts
GET /report/upcoming_events: never;
```

##### GET /report/users

```ts
GET /report/users: never;
```

##### GET /report/users/\{userId\}/meetings

```ts
GET /report/users/{userId}/meetings: never;
```

##### GET /report/webinars/\{webinarId\}

```ts
GET /report/webinars/{webinarId}: never;
```

##### GET /report/webinars/\{webinarId\}/participants

```ts
GET /report/webinars/{webinarId}/participants: never;
```

##### GET /report/webinars/\{webinarId\}/polls

```ts
GET /report/webinars/{webinarId}/polls: never;
```

##### GET /report/webinars/\{webinarId\}/qa

```ts
GET /report/webinars/{webinarId}/qa: never;
```

##### GET /report/webinars/\{webinarId\}/survey

```ts
GET /report/webinars/{webinarId}/survey: never;
```

##### GET /sip\_phones/phones

```ts
GET /sip_phones/phones: never;
```

##### GET /tracking\_fields

```ts
GET /tracking_fields: never;
```

##### GET /tracking\_fields/\{fieldId\}

```ts
GET /tracking_fields/{fieldId}: never;
```

##### GET /tsp

```ts
GET /tsp: never;
```

##### GET /users/\{userId\}/meeting\_templates

```ts
GET /users/{userId}/meeting_templates: never;
```

##### GET /users/\{userId\}/meetings

```ts
GET /users/{userId}/meetings: never;
```

##### GET /users/\{userId\}/pac

```ts
GET /users/{userId}/pac: never;
```

##### GET /users/\{userId\}/recordings

```ts
GET /users/{userId}/recordings: never;
```

##### GET /users/\{userId\}/tsp

```ts
GET /users/{userId}/tsp: never;
```

##### GET /users/\{userId\}/tsp/\{tspId\}

```ts
GET /users/{userId}/tsp/{tspId}: never;
```

##### GET /users/\{userId\}/upcoming\_meetings

```ts
GET /users/{userId}/upcoming_meetings: never;
```

##### GET /users/\{userId\}/webinar\_templates

```ts
GET /users/{userId}/webinar_templates: never;
```

##### GET /users/\{userId\}/webinars

```ts
GET /users/{userId}/webinars: never;
```

##### GET /webinars/\{webinarId\}

```ts
GET /webinars/{webinarId}: never;
```

##### GET /webinars/\{webinarId\}/branding

```ts
GET /webinars/{webinarId}/branding: never;
```

##### GET /webinars/\{webinarId\}/jointoken/live\_streaming

```ts
GET /webinars/{webinarId}/jointoken/live_streaming: never;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_archiving

```ts
GET /webinars/{webinarId}/jointoken/local_archiving: never;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_recording

```ts
GET /webinars/{webinarId}/jointoken/local_recording: never;
```

##### GET /webinars/\{webinarId\}/livestream

```ts
GET /webinars/{webinarId}/livestream: never;
```

##### GET /webinars/\{webinarId\}/panelists

```ts
GET /webinars/{webinarId}/panelists: never;
```

##### GET /webinars/\{webinarId\}/polls

```ts
GET /webinars/{webinarId}/polls: never;
```

##### GET /webinars/\{webinarId\}/polls/\{pollId\}

```ts
GET /webinars/{webinarId}/polls/{pollId}: never;
```

##### GET /webinars/\{webinarId\}/registrants

```ts
GET /webinars/{webinarId}/registrants: never;
```

##### GET /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
GET /webinars/{webinarId}/registrants/{registrantId}: never;
```

##### GET /webinars/\{webinarId\}/registrants/questions

```ts
GET /webinars/{webinarId}/registrants/questions: never;
```

##### GET /webinars/\{webinarId\}/survey

```ts
GET /webinars/{webinarId}/survey: never;
```

##### GET /webinars/\{webinarId\}/token

```ts
GET /webinars/{webinarId}/token: never;
```

##### GET /webinars/\{webinarId\}/tracking\_sources

```ts
GET /webinars/{webinarId}/tracking_sources: never;
```

##### PATCH /archive\_files/\{fileId\}

```ts
PATCH /archive_files/{fileId}: {
  auto_delete: boolean;
};
```

###### auto\_delete

```ts
auto_delete: boolean;
```

##### PATCH /devices/\{deviceId\}

```ts
PATCH /devices/{deviceId}: {
  device_name: string;
  device_type?: 0 | 1 | 3;
  room_id?: string;
  tag?: string;
};
```

###### device\_name

```ts
device_name: string;
```

###### device\_type?

```ts
optional device_type?: 0 | 1 | 3;
```

###### room\_id?

```ts
optional room_id?: string;
```

###### tag?

```ts
optional tag?: string;
```

##### PATCH /devices/\{deviceId\}/assign\_group

```ts
PATCH /devices/{deviceId}/assign_group: never;
```

##### PATCH /devices/\{deviceId\}/assignment

```ts
PATCH /devices/{deviceId}/assignment: {
  app_type?: "ZR" | "ZRC" | "ZRP" | "ZRW";
  room_id?: string;
};
```

###### app\_type?

```ts
optional app_type?: "ZR" | "ZRC" | "ZRP" | "ZRW";
```

###### room\_id?

```ts
optional room_id?: string;
```

##### PATCH /h323/devices/\{deviceId\}

```ts
PATCH /h323/devices/{deviceId}: {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
};
```

###### encryption

```ts
encryption: "auto" | "yes" | "no";
```

###### ip

```ts
ip: string;
```

###### name

```ts
name: string;
```

###### protocol

```ts
protocol: "H.323" | "SIP";
```

##### PATCH /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
PATCH /live_meetings/{meetingId}/chat/messages/{messageId}: {
  message_content: string;
};
```

###### message\_content

```ts
message_content: string;
```

##### PATCH /live\_meetings/\{meetingId\}/events

```ts
PATCH /live_meetings/{meetingId}/events: {
  method?:   | "recording.start"
     | "recording.stop"
     | "recording.pause"
     | "recording.resume"
     | "participant.invite"
     | "participant.invite.callout"
     | "participant.invite.room_system_callout"
     | "waiting_room.update"
     | "ai_companion.start"
     | "ai_companion.stop"
     | "ai_companion.disable"
     | "participant.remove";
  params?: {
     ai_companion_mode?: "summary" | "all" | "questions";
     call_type?: string;
     contacts?: readonly {
        email?: string;
        id?: string;
     }[];
     delete_meeting_assets?: boolean;
     device_ip?: string;
     h323_headers?: {
        from_display_name?: string;
        to_display_name?: string;
     };
     invite_options?: {
        require_greeting?: boolean;
        require_pressing_one?: boolean;
     };
     invitee_name?: string;
     participant_uuid?: string;
     phone_number?: string;
     retain_meeting_transcript?: boolean;
     sip_headers?: {
        additional_headers?: readonly {
           key?: string;
           value?: string;
        }[];
        from_display_name?: string;
        from_uri?: string;
        to_display_name?: string;
     };
     waiting_room_description?: string;
     waiting_room_title?: string;
  };
};
```

###### method?

```ts
optional method?:
  | "recording.start"
  | "recording.stop"
  | "recording.pause"
  | "recording.resume"
  | "participant.invite"
  | "participant.invite.callout"
  | "participant.invite.room_system_callout"
  | "waiting_room.update"
  | "ai_companion.start"
  | "ai_companion.stop"
  | "ai_companion.disable"
  | "participant.remove";
```

###### params?

```ts
optional params?: {
  ai_companion_mode?: "summary" | "all" | "questions";
  call_type?: string;
  contacts?: readonly {
     email?: string;
     id?: string;
  }[];
  delete_meeting_assets?: boolean;
  device_ip?: string;
  h323_headers?: {
     from_display_name?: string;
     to_display_name?: string;
  };
  invite_options?: {
     require_greeting?: boolean;
     require_pressing_one?: boolean;
  };
  invitee_name?: string;
  participant_uuid?: string;
  phone_number?: string;
  retain_meeting_transcript?: boolean;
  sip_headers?: {
     additional_headers?: readonly {
        key?: string;
        value?: string;
     }[];
     from_display_name?: string;
     from_uri?: string;
     to_display_name?: string;
  };
  waiting_room_description?: string;
  waiting_room_title?: string;
};
```

###### params.ai\_companion\_mode?

```ts
optional ai_companion_mode?: "summary" | "all" | "questions";
```

###### params.call\_type?

```ts
optional call_type?: string;
```

###### params.contacts?

```ts
optional contacts?: readonly {
  email?: string;
  id?: string;
}[];
```

###### params.delete\_meeting\_assets?

```ts
optional delete_meeting_assets?: boolean;
```

###### params.device\_ip?

```ts
optional device_ip?: string;
```

###### params.h323\_headers?

```ts
optional h323_headers?: {
  from_display_name?: string;
  to_display_name?: string;
};
```

###### params.h323\_headers.from\_display\_name?

```ts
optional from_display_name?: string;
```

###### params.h323\_headers.to\_display\_name?

```ts
optional to_display_name?: string;
```

###### params.invite\_options?

```ts
optional invite_options?: {
  require_greeting?: boolean;
  require_pressing_one?: boolean;
};
```

###### params.invite\_options.require\_greeting?

```ts
optional require_greeting?: boolean;
```

###### params.invite\_options.require\_pressing\_one?

```ts
optional require_pressing_one?: boolean;
```

###### params.invitee\_name?

```ts
optional invitee_name?: string;
```

###### params.participant\_uuid?

```ts
optional participant_uuid?: string;
```

###### params.phone\_number?

```ts
optional phone_number?: string;
```

###### params.retain\_meeting\_transcript?

```ts
optional retain_meeting_transcript?: boolean;
```

###### params.sip\_headers?

```ts
optional sip_headers?: {
  additional_headers?: readonly {
     key?: string;
     value?: string;
  }[];
  from_display_name?: string;
  from_uri?: string;
  to_display_name?: string;
};
```

###### params.sip\_headers.additional\_headers?

```ts
optional additional_headers?: readonly {
  key?: string;
  value?: string;
}[];
```

###### params.sip\_headers.from\_display\_name?

```ts
optional from_display_name?: string;
```

###### params.sip\_headers.from\_uri?

```ts
optional from_uri?: string;
```

###### params.sip\_headers.to\_display\_name?

```ts
optional to_display_name?: string;
```

###### params.waiting\_room\_description?

```ts
optional waiting_room_description?: string;
```

###### params.waiting\_room\_title?

```ts
optional waiting_room_title?: string;
```

##### PATCH /live\_meetings/\{meetingId\}/rtms\_app/status

```ts
PATCH /live_meetings/{meetingId}/rtms_app/status: {
  action?: "stop" | "start" | "pause" | "resume";
  settings?: {
     client_id: string;
     participant_user_id?: string;
  };
};
```

###### action?

```ts
optional action?: "stop" | "start" | "pause" | "resume";
```

###### settings?

```ts
optional settings?: {
  client_id: string;
  participant_user_id?: string;
};
```

###### settings.client\_id

```ts
client_id: string;
```

###### settings.participant\_user\_id?

```ts
optional participant_user_id?: string;
```

##### PATCH /meetings/\{meetingId\}

```ts
PATCH /meetings/{meetingId}: {
  agenda?: string;
  duration?: number;
  password?: string;
  pre_schedule?: boolean;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
  };
  schedule_for?: string;
  settings?: {
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_manage_cloud_recording?: boolean;
     alternative_host_manage_meeting_summary?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     alternative_hosts_email_notification?: boolean;
     approval_type?: 0 | 1 | 2;
     approved_or_denied_countries_or_regions?: {
        approved_list?: readonly string[];
        denied_list?: readonly string[];
        enable?: boolean;
        method?: "approve" | "deny";
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_exception?: readonly {
        email?: string;
        join_url?: string;
        name?: string;
     }[];
     authentication_name?: string;
     authentication_option?: string;
     auto_add_recording_to_video_management?: {
        channels?: readonly {
           channel_id: string;
           name?: string;
        }[];
        enable: boolean;
     };
     auto_recording?: "none" | "local" | "cloud";
     auto_start_ai_companion_questions?: boolean;
     auto_start_meeting_summary?: boolean;
     breakout_room?: {
        enable?: boolean;
        rooms?: readonly {
           name?: string;
           participants?: readonly string[];
        }[];
     };
     calendar_type?: 1 | 2;
     close_registration?: boolean;
     cn_meeting?: boolean;
     contact_email?: string;
     contact_name?: string;
     continuous_meeting_chat?: {
        auto_add_invited_external_users?: boolean;
        auto_add_meeting_participants?: boolean;
        enable?: boolean;
     };
     custom_keys?: readonly {
        key?: string;
        value?: string;
     }[];
     device_testing?: boolean;
     disable_participant_video?: boolean;
     email_in_attendee_report?: boolean;
     email_notification?: boolean;
     encryption_type?: "enhanced_encryption" | "e2ee";
     enforce_login?: boolean;
     enforce_login_domains?: string;
     focus_mode?: boolean;
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree";
     }[];
     host_save_video_order?: boolean;
     host_video?: boolean;
     in_meeting?: boolean;
     internal_meeting?: boolean;
     jbh_time?: 0 | 5 | 10 | 15;
     join_before_host?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     meeting_invitees?: readonly {
        email?: string;
     }[];
     mute_upon_entry?: boolean;
     participant_focused_meeting?: boolean;
     participant_video?: boolean;
     private_meeting?: boolean;
     push_change_to_calendar?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_submit_questions?: boolean;
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        enable?: boolean;
        question_visibility?: "all" | "answered";
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     resources?: readonly {
        permission_level?: "editor" | "commenter" | "viewer";
        resource_id?: string;
        resource_type?: "whiteboard";
     }[];
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     summary_template_id?: string;
     use_pmi?: boolean;
     waiting_room?: boolean;
     waiting_room_options?: {
        mode: "custom" | "follow_setting";
        who_goes_to_waiting_room?:   | "everyone"
           | "users_not_in_account"
           | "users_not_in_account_or_whitelisted_domains"
           | "users_not_on_invite"
           | "users_not_in_org";
     };
     watermark?: boolean;
     who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
     who_will_receive_summary?: 1 | 2 | 3 | 4;
  };
  start_time?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
  }[];
  type?: 1 | 2 | 3 | 8 | 10;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### duration?

```ts
optional duration?: number;
```

###### password?

```ts
optional password?: string;
```

###### pre\_schedule?

```ts
optional pre_schedule?: boolean;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
```

###### schedule\_for?

```ts
optional schedule_for?: string;
```

###### settings?

```ts
optional settings?: {
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
     approved_list?: readonly string[];
     denied_list?: readonly string[];
     enable?: boolean;
     method?: "approve" | "deny";
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: readonly {
     email?: string;
     join_url?: string;
     name?: string;
  }[];
  authentication_name?: string;
  authentication_option?: string;
  auto_add_recording_to_video_management?: {
     channels?: readonly {
        channel_id: string;
        name?: string;
     }[];
     enable: boolean;
  };
  auto_recording?: "none" | "local" | "cloud";
  auto_start_ai_companion_questions?: boolean;
  auto_start_meeting_summary?: boolean;
  breakout_room?: {
     enable?: boolean;
     rooms?: readonly {
        name?: string;
        participants?: readonly string[];
     }[];
  };
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  continuous_meeting_chat?: {
     auto_add_invited_external_users?: boolean;
     auto_add_meeting_participants?: boolean;
     enable?: boolean;
  };
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  device_testing?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  enforce_login?: boolean;
  enforce_login_domains?: string;
  focus_mode?: boolean;
  global_dial_in_countries?: readonly string[];
  global_dial_in_numbers?: readonly {
     city?: string;
     country?: string;
     country_name?: string;
     number?: string;
     type?: "toll" | "tollfree";
  }[];
  host_save_video_order?: boolean;
  host_video?: boolean;
  in_meeting?: boolean;
  internal_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  meeting_invitees?: readonly {
     email?: string;
  }[];
  mute_upon_entry?: boolean;
  participant_focused_meeting?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  push_change_to_calendar?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_submit_questions?: boolean;
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     enable?: boolean;
     question_visibility?: "all" | "answered";
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  resources?: readonly {
     permission_level?: "editor" | "commenter" | "viewer";
     resource_id?: string;
     resource_type?: "whiteboard";
  }[];
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  summary_template_id?: string;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
     mode: "custom" | "follow_setting";
     who_goes_to_waiting_room?:   | "everyone"
        | "users_not_in_account"
        | "users_not_in_account_or_whitelisted_domains"
        | "users_not_on_invite"
        | "users_not_in_org";
  };
  watermark?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
};
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_manage\_cloud\_recording?

```ts
optional alternative_host_manage_cloud_recording?: boolean;
```

###### settings.alternative\_host\_manage\_meeting\_summary?

```ts
optional alternative_host_manage_meeting_summary?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.alternative\_hosts\_email\_notification?

```ts
optional alternative_hosts_email_notification?: boolean;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.approved\_or\_denied\_countries\_or\_regions?

```ts
optional approved_or_denied_countries_or_regions?: {
  approved_list?: readonly string[];
  denied_list?: readonly string[];
  enable?: boolean;
  method?: "approve" | "deny";
};
```

###### settings.approved\_or\_denied\_countries\_or\_regions.approved\_list?

```ts
optional approved_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.denied\_list?

```ts
optional denied_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.enable?

```ts
optional enable?: boolean;
```

###### settings.approved\_or\_denied\_countries\_or\_regions.method?

```ts
optional method?: "approve" | "deny";
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_exception?

```ts
optional authentication_exception?: readonly {
  email?: string;
  join_url?: string;
  name?: string;
}[];
```

###### settings.authentication\_name?

```ts
optional authentication_name?: string;
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_add\_recording\_to\_video\_management?

```ts
optional auto_add_recording_to_video_management?: {
  channels?: readonly {
     channel_id: string;
     name?: string;
  }[];
  enable: boolean;
};
```

###### settings.auto\_add\_recording\_to\_video\_management.channels?

```ts
optional channels?: readonly {
  channel_id: string;
  name?: string;
}[];
```

###### settings.auto\_add\_recording\_to\_video\_management.enable

```ts
enable: boolean;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.auto\_start\_ai\_companion\_questions?

```ts
optional auto_start_ai_companion_questions?: boolean;
```

###### settings.auto\_start\_meeting\_summary?

```ts
optional auto_start_meeting_summary?: boolean;
```

###### settings.breakout\_room?

```ts
optional breakout_room?: {
  enable?: boolean;
  rooms?: readonly {
     name?: string;
     participants?: readonly string[];
  }[];
};
```

###### settings.breakout\_room.enable?

```ts
optional enable?: boolean;
```

###### settings.breakout\_room.rooms?

```ts
optional rooms?: readonly {
  name?: string;
  participants?: readonly string[];
}[];
```

###### settings.calendar\_type?

```ts
optional calendar_type?: 1 | 2;
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.cn\_meeting?

```ts
optional cn_meeting?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.continuous\_meeting\_chat?

```ts
optional continuous_meeting_chat?: {
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
  enable?: boolean;
};
```

###### settings.continuous\_meeting\_chat.auto\_add\_invited\_external\_users?

```ts
optional auto_add_invited_external_users?: boolean;
```

###### settings.continuous\_meeting\_chat.auto\_add\_meeting\_participants?

```ts
optional auto_add_meeting_participants?: boolean;
```

###### settings.continuous\_meeting\_chat.enable?

```ts
optional enable?: boolean;
```

###### settings.custom\_keys?

```ts
optional custom_keys?: readonly {
  key?: string;
  value?: string;
}[];
```

###### settings.device\_testing?

```ts
optional device_testing?: boolean;
```

###### settings.disable\_participant\_video?

```ts
optional disable_participant_video?: boolean;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_notification?

```ts
optional email_notification?: boolean;
```

###### settings.encryption\_type?

```ts
optional encryption_type?: "enhanced_encryption" | "e2ee";
```

###### settings.enforce\_login?

```ts
optional enforce_login?: boolean;
```

###### settings.enforce\_login\_domains?

```ts
optional enforce_login_domains?: string;
```

###### settings.focus\_mode?

```ts
optional focus_mode?: boolean;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.global\_dial\_in\_numbers?

```ts
optional global_dial_in_numbers?: readonly {
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree";
}[];
```

###### settings.host\_save\_video\_order?

```ts
optional host_save_video_order?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.in\_meeting?

```ts
optional in_meeting?: boolean;
```

###### settings.internal\_meeting?

```ts
optional internal_meeting?: boolean;
```

###### settings.jbh\_time?

```ts
optional jbh_time?: 0 | 5 | 10 | 15;
```

###### settings.join\_before\_host?

```ts
optional join_before_host?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.meeting\_invitees?

```ts
optional meeting_invitees?: readonly {
  email?: string;
}[];
```

###### settings.mute\_upon\_entry?

```ts
optional mute_upon_entry?: boolean;
```

###### settings.participant\_focused\_meeting?

```ts
optional participant_focused_meeting?: boolean;
```

###### settings.participant\_video?

```ts
optional participant_video?: boolean;
```

###### settings.private\_meeting?

```ts
optional private_meeting?: boolean;
```

###### settings.push\_change\_to\_calendar?

```ts
optional push_change_to_calendar?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_submit_questions?: boolean;
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  enable?: boolean;
  question_visibility?: "all" | "answered";
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.question\_and\_answer.question\_visibility?

```ts
optional question_visibility?: "all" | "answered";
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.resources?

```ts
optional resources?: readonly {
  permission_level?: "editor" | "commenter" | "viewer";
  resource_id?: string;
  resource_type?: "whiteboard";
}[];
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.summary\_template\_id?

```ts
optional summary_template_id?: string;
```

###### settings.use\_pmi?

```ts
optional use_pmi?: boolean;
```

###### settings.waiting\_room?

```ts
optional waiting_room?: boolean;
```

###### settings.waiting\_room\_options?

```ts
optional waiting_room_options?: {
  mode: "custom" | "follow_setting";
  who_goes_to_waiting_room?:   | "everyone"
     | "users_not_in_account"
     | "users_not_in_account_or_whitelisted_domains"
     | "users_not_on_invite"
     | "users_not_in_org";
};
```

###### settings.waiting\_room\_options.mode

```ts
mode: "custom" | "follow_setting";
```

###### settings.waiting\_room\_options.who\_goes\_to\_waiting\_room?

```ts
optional who_goes_to_waiting_room?:
  | "everyone"
  | "users_not_in_account"
  | "users_not_in_account_or_whitelisted_domains"
  | "users_not_on_invite"
  | "users_not_in_org";
```

###### settings.watermark?

```ts
optional watermark?: boolean;
```

###### settings.who\_can\_ask\_questions?

```ts
optional who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
```

###### settings.who\_will\_receive\_summary?

```ts
optional who_will_receive_summary?: 1 | 2 | 3 | 4;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### template\_id?

```ts
optional template_id?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
}[];
```

###### type?

```ts
optional type?: 1 | 2 | 3 | 8 | 10;
```

##### PATCH /meetings/\{meetingId\}/livestream

```ts
PATCH /meetings/{meetingId}/livestream: {
  page_url: string;
  resolution?: string;
  stream_key: string;
  stream_url: string;
};
```

###### page\_url

```ts
page_url: string;
```

###### resolution?

```ts
optional resolution?: string;
```

###### stream\_key

```ts
stream_key: string;
```

###### stream\_url

```ts
stream_url: string;
```

##### PATCH /meetings/\{meetingId\}/livestream/status

```ts
PATCH /meetings/{meetingId}/livestream/status: {
  action?: "mode" | "stop" | "start";
  settings?: {
     active_speaker_name?: boolean;
     close_caption?: "off" | "burnt-in" | "embedded";
     display_name?: string;
     layout?: "gallery_view" | "follow_host" | "speaker_view";
  };
};
```

###### action?

```ts
optional action?: "mode" | "stop" | "start";
```

###### settings?

```ts
optional settings?: {
  active_speaker_name?: boolean;
  close_caption?: "off" | "burnt-in" | "embedded";
  display_name?: string;
  layout?: "gallery_view" | "follow_host" | "speaker_view";
};
```

###### settings.active\_speaker\_name?

```ts
optional active_speaker_name?: boolean;
```

###### settings.close\_caption?

```ts
optional close_caption?: "off" | "burnt-in" | "embedded";
```

###### settings.display\_name?

```ts
optional display_name?: string;
```

###### settings.layout?

```ts
optional layout?: "gallery_view" | "follow_host" | "speaker_view";
```

##### PATCH /meetings/\{meetingId\}/recordings/registrants/questions

```ts
PATCH /meetings/{meetingId}/recordings/registrants/questions: {
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "single" | "multiple";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
};
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  answers?: readonly string[];
  required?: boolean;
  title?: string;
  type?: "short" | "single" | "multiple";
}[];
```

###### questions?

```ts
optional questions?: readonly {
  field_name?:   | "state"
     | "phone"
     | "last_name"
     | "address"
     | "city"
     | "country"
     | "zip"
     | "industry"
     | "org"
     | "job_title"
     | "purchasing_time_frame"
     | "role_in_purchase_process"
     | "no_of_employees"
     | "comments";
  required?: boolean;
}[];
```

##### PATCH /meetings/\{meetingId\}/recordings/settings

```ts
PATCH /meetings/{meetingId}/recordings/settings: {
  approval_type?: 0 | 1 | 2;
  authentication_domains?: string;
  authentication_option?: string;
  auto_delete?: boolean;
  on_demand?: boolean;
  password?: string;
  recording_authentication?: boolean;
  send_email_to_host?: boolean;
  share_recording?: "none" | "publicly" | "internally";
  show_social_share_buttons?: boolean;
  topic?: string;
  viewer_download?: boolean;
};
```

###### approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### authentication\_option?

```ts
optional authentication_option?: string;
```

###### auto\_delete?

```ts
optional auto_delete?: boolean;
```

###### on\_demand?

```ts
optional on_demand?: boolean;
```

###### password?

```ts
optional password?: string;
```

###### recording\_authentication?

```ts
optional recording_authentication?: boolean;
```

###### send\_email\_to\_host?

```ts
optional send_email_to_host?: boolean;
```

###### share\_recording?

```ts
optional share_recording?: "none" | "publicly" | "internally";
```

###### show\_social\_share\_buttons?

```ts
optional show_social_share_buttons?: boolean;
```

###### topic?

```ts
optional topic?: string;
```

###### viewer\_download?

```ts
optional viewer_download?: boolean;
```

##### PATCH /meetings/\{meetingId\}/registrants/questions

```ts
PATCH /meetings/{meetingId}/registrants/questions: {
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "single";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
};
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  answers?: readonly string[];
  required?: boolean;
  title?: string;
  type?: "short" | "single";
}[];
```

###### questions?

```ts
optional questions?: readonly {
  field_name?:   | "state"
     | "phone"
     | "last_name"
     | "address"
     | "city"
     | "country"
     | "zip"
     | "industry"
     | "org"
     | "job_title"
     | "purchasing_time_frame"
     | "role_in_purchase_process"
     | "no_of_employees"
     | "comments";
  required?: boolean;
}[];
```

##### PATCH /meetings/\{meetingId\}/survey

```ts
PATCH /meetings/{meetingId}/survey: {
  custom_survey?: {
     anonymous?: boolean;
     feedback?: string;
     numbered_questions?: boolean;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     show_question_type?: boolean;
     title?: string;
  };
  show_in_the_browser?: boolean;
  third_party_survey?: string;
};
```

###### custom\_survey?

```ts
optional custom_survey?: {
  anonymous?: boolean;
  feedback?: string;
  numbered_questions?: boolean;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  show_question_type?: boolean;
  title?: string;
};
```

###### custom\_survey.anonymous?

```ts
optional anonymous?: boolean;
```

###### custom\_survey.feedback?

```ts
optional feedback?: string;
```

###### custom\_survey.numbered\_questions?

```ts
optional numbered_questions?: boolean;
```

###### custom\_survey.questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### custom\_survey.show\_question\_type?

```ts
optional show_question_type?: boolean;
```

###### custom\_survey.title?

```ts
optional title?: string;
```

###### show\_in\_the\_browser?

```ts
optional show_in_the_browser?: boolean;
```

###### third\_party\_survey?

```ts
optional third_party_survey?: string;
```

##### PATCH /sip\_phones/phones/\{phoneId\}

```ts
PATCH /sip_phones/phones/{phoneId}: {
  authorization_name?: string;
  display_number?: string;
  domain?: string;
  password?: string;
  registration_expire_time?: number;
  server?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_2?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_3?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  user_name?: string;
  voice_mail?: string;
};
```

###### authorization\_name?

```ts
optional authorization_name?: string;
```

###### display\_number?

```ts
optional display_number?: string;
```

###### domain?

```ts
optional domain?: string;
```

###### password?

```ts
optional password?: string;
```

###### registration\_expire\_time?

```ts
optional registration_expire_time?: number;
```

###### server?

```ts
optional server?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server.register\_server?

```ts
optional register_server?: string;
```

###### server.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### server\_2?

```ts
optional server_2?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server\_2.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server\_2.register\_server?

```ts
optional register_server?: string;
```

###### server\_2.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### server\_3?

```ts
optional server_3?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server\_3.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server\_3.register\_server?

```ts
optional register_server?: string;
```

###### server\_3.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### user\_name?

```ts
optional user_name?: string;
```

###### voice\_mail?

```ts
optional voice_mail?: string;
```

##### PATCH /tracking\_fields/\{fieldId\}

```ts
PATCH /tracking_fields/{fieldId}: {
  field?: string;
  recommended_values?: readonly string[];
  required?: boolean;
  visible?: boolean;
};
```

###### field?

```ts
optional field?: string;
```

###### recommended\_values?

```ts
optional recommended_values?: readonly string[];
```

###### required?

```ts
optional required?: boolean;
```

###### visible?

```ts
optional visible?: boolean;
```

##### PATCH /tsp

```ts
PATCH /tsp: {
  dial_in_number_unrestricted?: boolean;
  enable?: boolean;
  master_account_setting_extended?: boolean;
  modify_credential_forbidden?: boolean;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
  tsp_enabled?: boolean;
  tsp_provider?: string;
};
```

###### dial\_in\_number\_unrestricted?

```ts
optional dial_in_number_unrestricted?: boolean;
```

###### enable?

```ts
optional enable?: boolean;
```

###### master\_account\_setting\_extended?

```ts
optional master_account_setting_extended?: boolean;
```

###### modify\_credential\_forbidden?

```ts
optional modify_credential_forbidden?: boolean;
```

###### tsp\_bridge?

```ts
optional tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
```

###### tsp\_enabled?

```ts
optional tsp_enabled?: boolean;
```

###### tsp\_provider?

```ts
optional tsp_provider?: string;
```

##### PATCH /users/\{userId\}/tsp/\{tspId\}

```ts
PATCH /users/{userId}/tsp/{tspId}: {
  conference_code: string;
  dial_in_numbers?: readonly {
     code?: string;
     country_label?: string;
     number?: string;
     type?: "toll" | "tollfree" | "media_link";
  }[];
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
};
```

###### conference\_code

```ts
conference_code: string;
```

###### dial\_in\_numbers?

```ts
optional dial_in_numbers?: readonly {
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}[];
```

###### leader\_pin

```ts
leader_pin: string;
```

###### tsp\_bridge?

```ts
optional tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
```

##### PATCH /users/\{userId\}/tsp/settings

```ts
PATCH /users/{userId}/tsp/settings: {
  audio_url?: string;
};
```

###### audio\_url?

```ts
optional audio_url?: string;
```

##### PATCH /webinars/\{webinarId\}

```ts
PATCH /webinars/{webinarId}: {
  agenda?: string;
  duration?: number;
  is_simulive?: boolean;
  password?: string;
  record_file_id?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
  };
  schedule_for?: string;
  settings?: {
     add_audio_watermark?: boolean;
     add_watermark?: boolean;
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     approval_type?: 0 | 1 | 2;
     attendees_and_panelists_reminder_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_option?: string;
     auto_recording?: "none" | "local" | "cloud";
     close_registration?: boolean;
     contact_email?: string;
     contact_name?: string;
     email_in_attendee_report?: boolean;
     email_language?: string;
     enable_session_branding?: boolean;
     enforce_login?: boolean;
     enforce_login_domains?: string;
     follow_up_absentees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     follow_up_attendees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     global_dial_in_countries?: readonly string[];
     hd_video?: boolean;
     hd_video_for_attendees?: boolean;
     host_video?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     notify_registrants?: boolean;
     on_demand?: boolean;
     panelist_authentication?: boolean;
     panelists_invitation_email_notification?: boolean;
     panelists_video?: boolean;
     post_webinar_survey?: boolean;
     practice_session?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_auto_reply?: boolean;
        allow_submit_questions?: boolean;
        answer_questions?: "all" | "only";
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        auto_reply_text?: string;
        enable?: boolean;
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registrants_restrict_number?: number;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     send_1080p_video_to_attendees?: boolean;
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     survey_url?: string;
  };
  simulive_delay_start?: {
     enable?: boolean;
     time?: number;
     timeunit?: "second" | "minute";
  };
  start_time?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
  }[];
  transition_to_live?: boolean;
  type?: 5 | 6 | 9;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### duration?

```ts
optional duration?: number;
```

###### is\_simulive?

```ts
optional is_simulive?: boolean;
```

###### password?

```ts
optional password?: string;
```

###### record\_file\_id?

```ts
optional record_file_id?: string;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
```

###### schedule\_for?

```ts
optional schedule_for?: string;
```

###### settings?

```ts
optional settings?: {
  add_audio_watermark?: boolean;
  add_watermark?: boolean;
  additional_data_center_regions?: readonly string[];
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_option?: string;
  auto_recording?: "none" | "local" | "cloud";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_in_attendee_report?: boolean;
  email_language?: string;
  enable_session_branding?: boolean;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  follow_up_attendees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  global_dial_in_countries?: readonly string[];
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  notify_registrants?: boolean;
  on_demand?: boolean;
  panelist_authentication?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_auto_reply?: boolean;
     allow_submit_questions?: boolean;
     answer_questions?: "all" | "only";
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     auto_reply_text?: string;
     enable?: boolean;
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  send_1080p_video_to_attendees?: boolean;
  show_join_info?: boolean;
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  survey_url?: string;
};
```

###### settings.add\_audio\_watermark?

```ts
optional add_audio_watermark?: boolean;
```

###### settings.add\_watermark?

```ts
optional add_watermark?: boolean;
```

###### settings.additional\_data\_center\_regions?

```ts
optional additional_data_center_regions?: readonly string[];
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification?

```ts
optional attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_language?

```ts
optional email_language?: string;
```

###### settings.enable\_session\_branding?

```ts
optional enable_session_branding?: boolean;
```

###### settings.enforce\_login?

```ts
optional enforce_login?: boolean;
```

###### settings.enforce\_login\_domains?

```ts
optional enforce_login_domains?: string;
```

###### settings.follow\_up\_absentees\_email\_notification?

```ts
optional follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_absentees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_absentees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.follow\_up\_attendees\_email\_notification?

```ts
optional follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_attendees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_attendees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.hd\_video?

```ts
optional hd_video?: boolean;
```

###### settings.hd\_video\_for\_attendees?

```ts
optional hd_video_for_attendees?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.notify\_registrants?

```ts
optional notify_registrants?: boolean;
```

###### settings.on\_demand?

```ts
optional on_demand?: boolean;
```

###### settings.panelist\_authentication?

```ts
optional panelist_authentication?: boolean;
```

###### settings.panelists\_invitation\_email\_notification?

```ts
optional panelists_invitation_email_notification?: boolean;
```

###### settings.panelists\_video?

```ts
optional panelists_video?: boolean;
```

###### settings.post\_webinar\_survey?

```ts
optional post_webinar_survey?: boolean;
```

###### settings.practice\_session?

```ts
optional practice_session?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_auto_reply?: boolean;
  allow_submit_questions?: boolean;
  answer_questions?: "all" | "only";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_auto\_reply?

```ts
optional allow_auto_reply?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.answer\_questions?

```ts
optional answer_questions?: "all" | "only";
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.auto\_reply\_text?

```ts
optional auto_reply_text?: string;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registrants\_restrict\_number?

```ts
optional registrants_restrict_number?: number;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.send\_1080p\_video\_to\_attendees?

```ts
optional send_1080p_video_to_attendees?: boolean;
```

###### settings.show\_join\_info?

```ts
optional show_join_info?: boolean;
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.survey\_url?

```ts
optional survey_url?: string;
```

###### simulive\_delay\_start?

```ts
optional simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: "second" | "minute";
};
```

###### simulive\_delay\_start.enable?

```ts
optional enable?: boolean;
```

###### simulive\_delay\_start.time?

```ts
optional time?: number;
```

###### simulive\_delay\_start.timeunit?

```ts
optional timeunit?: "second" | "minute";
```

###### start\_time?

```ts
optional start_time?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
}[];
```

###### transition\_to\_live?

```ts
optional transition_to_live?: boolean;
```

###### type?

```ts
optional type?: 5 | 6 | 9;
```

##### PATCH /webinars/\{webinarId\}/branding/name\_tags/\{nameTagId\}

```ts
PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}: {
  accent_color?: string;
  background_color?: string;
  is_default?: boolean;
  name?: string;
  set_default_for_all_panelists?: boolean;
  text_color?: string;
};
```

###### accent\_color?

```ts
optional accent_color?: string;
```

###### background\_color?

```ts
optional background_color?: string;
```

###### is\_default?

```ts
optional is_default?: boolean;
```

###### name?

```ts
optional name?: string;
```

###### set\_default\_for\_all\_panelists?

```ts
optional set_default_for_all_panelists?: boolean;
```

###### text\_color?

```ts
optional text_color?: string;
```

##### PATCH /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
PATCH /webinars/{webinarId}/branding/virtual_backgrounds: never;
```

##### PATCH /webinars/\{webinarId\}/livestream

```ts
PATCH /webinars/{webinarId}/livestream: {
  page_url: string;
  resolution?: string;
  stream_key: string;
  stream_url: string;
};
```

###### page\_url

```ts
page_url: string;
```

###### resolution?

```ts
optional resolution?: string;
```

###### stream\_key

```ts
stream_key: string;
```

###### stream\_url

```ts
stream_url: string;
```

##### PATCH /webinars/\{webinarId\}/livestream/status

```ts
PATCH /webinars/{webinarId}/livestream/status: {
  action?: "stop" | "start";
  settings?: {
     active_speaker_name?: boolean;
     close_caption?: "off" | "burnt-in" | "embedded";
     display_name?: string;
  };
};
```

###### action?

```ts
optional action?: "stop" | "start";
```

###### settings?

```ts
optional settings?: {
  active_speaker_name?: boolean;
  close_caption?: "off" | "burnt-in" | "embedded";
  display_name?: string;
};
```

###### settings.active\_speaker\_name?

```ts
optional active_speaker_name?: boolean;
```

###### settings.close\_caption?

```ts
optional close_caption?: "off" | "burnt-in" | "embedded";
```

###### settings.display\_name?

```ts
optional display_name?: string;
```

##### PATCH /webinars/\{webinarId\}/registrants/questions

```ts
PATCH /webinars/{webinarId}/registrants/questions: {
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "multiple" | "single_radio" | "single_dropdown";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
};
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  answers?: readonly string[];
  required?: boolean;
  title?: string;
  type?: "short" | "multiple" | "single_radio" | "single_dropdown";
}[];
```

###### questions?

```ts
optional questions?: readonly {
  field_name?:   | "state"
     | "phone"
     | "last_name"
     | "address"
     | "city"
     | "country"
     | "zip"
     | "industry"
     | "org"
     | "job_title"
     | "purchasing_time_frame"
     | "role_in_purchase_process"
     | "no_of_employees"
     | "comments";
  required?: boolean;
}[];
```

##### PATCH /webinars/\{webinarId\}/survey

```ts
PATCH /webinars/{webinarId}/survey: {
  custom_survey?: {
     anonymous?: boolean;
     feedback?: string;
     numbered_questions?: boolean;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     show_question_type?: boolean;
     title?: string;
  };
  show_in_the_browser?: boolean;
  show_in_the_follow_up_email?: boolean;
  third_party_survey?: string;
};
```

###### custom\_survey?

```ts
optional custom_survey?: {
  anonymous?: boolean;
  feedback?: string;
  numbered_questions?: boolean;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  show_question_type?: boolean;
  title?: string;
};
```

###### custom\_survey.anonymous?

```ts
optional anonymous?: boolean;
```

###### custom\_survey.feedback?

```ts
optional feedback?: string;
```

###### custom\_survey.numbered\_questions?

```ts
optional numbered_questions?: boolean;
```

###### custom\_survey.questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### custom\_survey.show\_question\_type?

```ts
optional show_question_type?: boolean;
```

###### custom\_survey.title?

```ts
optional title?: string;
```

###### show\_in\_the\_browser?

```ts
optional show_in_the_browser?: boolean;
```

###### show\_in\_the\_follow\_up\_email?

```ts
optional show_in_the_follow_up_email?: boolean;
```

###### third\_party\_survey?

```ts
optional third_party_survey?: string;
```

##### POST /devices

```ts
POST /devices: {
  device_name: string;
  device_type: 0 | 1 | 5;
  extension_number?: string;
  mac_address: string;
  model: string;
  room_id?: string;
  serial_number: string;
  tag?: string;
  user_email?: string;
  vendor: string;
  zdm_group_id?: string;
};
```

###### device\_name

```ts
device_name: string;
```

###### device\_type

```ts
device_type: 0 | 1 | 5;
```

###### extension\_number?

```ts
optional extension_number?: string;
```

###### mac\_address

```ts
mac_address: string;
```

###### model

```ts
model: string;
```

###### room\_id?

```ts
optional room_id?: string;
```

###### serial\_number

```ts
serial_number: string;
```

###### tag?

```ts
optional tag?: string;
```

###### user\_email?

```ts
optional user_email?: string;
```

###### vendor

```ts
vendor: string;
```

###### zdm\_group\_id?

```ts
optional zdm_group_id?: string;
```

##### POST /devices/zpa/assignment

```ts
POST /devices/zpa/assignment: {
  extension_number?: string;
  mac_address: string;
  vendor: string;
};
```

###### extension\_number?

```ts
optional extension_number?: string;
```

###### mac\_address

```ts
mac_address: string;
```

###### vendor

```ts
vendor: string;
```

##### POST /devices/zpa/upgrade

```ts
POST /devices/zpa/upgrade: {
  data:   | {
     firmware_versions?: readonly {
        model?: string;
        vendor?: string;
        version?: string;
     }[];
     upgrade_type: "UPGRADE_FIRMWARE";
   }
     | {
     app_version?: string;
     upgrade_type: "UPGRADE_APP";
   };
  zdm_group_id: string;
};
```

###### data

```ts
data:
  | {
  firmware_versions?: readonly {
     model?: string;
     vendor?: string;
     version?: string;
  }[];
  upgrade_type: "UPGRADE_FIRMWARE";
}
  | {
  app_version?: string;
  upgrade_type: "UPGRADE_APP";
};
```

###### zdm\_group\_id

```ts
zdm_group_id: string;
```

##### POST /h323/devices

```ts
POST /h323/devices: {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
};
```

###### encryption

```ts
encryption: "auto" | "yes" | "no";
```

###### ip

```ts
ip: string;
```

###### name

```ts
name: string;
```

###### protocol

```ts
protocol: "H.323" | "SIP";
```

##### POST /meetings/\{meetingId\}/batch\_polls

```ts
POST /meetings/{meetingId}/batch_polls: {
  polls?: readonly {
     anonymous?: boolean;
     poll_type?: 1 | 2 | 3;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        case_sensitive?: boolean;
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
           prompt_right_answers?: readonly string[];
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        right_answers?: readonly string[];
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     title?: string;
  }[];
};
```

###### polls?

```ts
optional polls?: readonly {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
}[];
```

##### POST /meetings/\{meetingId\}/batch\_registrants

```ts
POST /meetings/{meetingId}/batch_registrants: {
  auto_approve?: boolean;
  registrants?: readonly {
     email: string;
     first_name: string;
     last_name?: string;
  }[];
  registrants_confirmation_email?: boolean;
};
```

###### auto\_approve?

```ts
optional auto_approve?: boolean;
```

###### registrants?

```ts
optional registrants?: readonly {
  email: string;
  first_name: string;
  last_name?: string;
}[];
```

###### registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

##### POST /meetings/\{meetingId\}/invite\_links

```ts
POST /meetings/{meetingId}/invite_links: {
  attendees?: readonly {
     disable_audio?: boolean;
     disable_video?: boolean;
     name: string;
  }[];
  ttl?: number;
};
```

###### attendees?

```ts
optional attendees?: readonly {
  disable_audio?: boolean;
  disable_video?: boolean;
  name: string;
}[];
```

###### ttl?

```ts
optional ttl?: number;
```

##### POST /meetings/\{meetingId\}/open\_apps

```ts
POST /meetings/{meetingId}/open_apps: never;
```

##### POST /meetings/\{meetingId\}/polls

```ts
POST /meetings/{meetingId}/polls: {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### POST /meetings/\{meetingId\}/recordings/registrants

```ts
POST /meetings/{meetingId}/recordings/registrants: {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
};
```

###### address?

```ts
optional address?: string;
```

###### city?

```ts
optional city?: string;
```

###### comments?

```ts
optional comments?: string;
```

###### country?

```ts
optional country?: string;
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  title?: string;
  value?: string;
}[];
```

###### email

```ts
email: string;
```

###### first\_name

```ts
first_name: string;
```

###### industry?

```ts
optional industry?: string;
```

###### job\_title?

```ts
optional job_title?: string;
```

###### last\_name?

```ts
optional last_name?: string;
```

###### no\_of\_employees?

```ts
optional no_of_employees?:
  | ""
  | "1-20"
  | "21-50"
  | "51-100"
  | "101-250"
  | "251-500"
  | "501-1,000"
  | "1,001-5,000"
  | "5,001-10,000"
  | "More than 10,000";
```

###### org?

```ts
optional org?: string;
```

###### phone?

```ts
optional phone?: string;
```

###### purchasing\_time\_frame?

```ts
optional purchasing_time_frame?:
  | ""
  | "Within a month"
  | "1-3 months"
  | "4-6 months"
  | "More than 6 months"
  | "No timeframe";
```

###### role\_in\_purchase\_process?

```ts
optional role_in_purchase_process?:
  | ""
  | "Decision Maker"
  | "Evaluator/Recommender"
  | "Influencer"
  | "Not involved";
```

###### state?

```ts
optional state?: string;
```

###### status?

```ts
optional status?: "pending" | "approved" | "denied";
```

###### zip?

```ts
optional zip?: string;
```

##### POST /meetings/\{meetingId\}/registrants

```ts
POST /meetings/{meetingId}/registrants: {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000"
     | "101-500"
     | "500-1,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  zip?: string;
} & {
  language?:   | "en-US"
     | "de-DE"
     | "es-ES"
     | "fr-FR"
     | "jp-JP"
     | "pt-PT"
     | "ru-RU"
     | "zh-CN"
     | "zh-TW"
     | "ko-KO"
     | "it-IT"
     | "vi-VN"
     | "pl-PL"
     | "Tr-TR";
} & {
  auto_approve?: boolean;
};
```

###### Type Declaration

###### address?

```ts
optional address?: string;
```

###### city?

```ts
optional city?: string;
```

###### comments?

```ts
optional comments?: string;
```

###### country?

```ts
optional country?: string;
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  title?: string;
  value?: string;
}[];
```

###### email

```ts
email: string;
```

###### first\_name

```ts
first_name: string;
```

###### industry?

```ts
optional industry?: string;
```

###### job\_title?

```ts
optional job_title?: string;
```

###### last\_name?

```ts
optional last_name?: string;
```

###### no\_of\_employees?

```ts
optional no_of_employees?:
  | ""
  | "1-20"
  | "21-50"
  | "51-100"
  | "1,001-5,000"
  | "5,001-10,000"
  | "More than 10,000"
  | "101-500"
  | "500-1,000";
```

###### org?

```ts
optional org?: string;
```

###### phone?

```ts
optional phone?: string;
```

###### purchasing\_time\_frame?

```ts
optional purchasing_time_frame?:
  | ""
  | "Within a month"
  | "1-3 months"
  | "4-6 months"
  | "More than 6 months"
  | "No timeframe";
```

###### role\_in\_purchase\_process?

```ts
optional role_in_purchase_process?:
  | ""
  | "Decision Maker"
  | "Evaluator/Recommender"
  | "Influencer"
  | "Not involved";
```

###### state?

```ts
optional state?: string;
```

###### zip?

```ts
optional zip?: string;
```

###### Type Declaration

###### language?

```ts
optional language?:
  | "en-US"
  | "de-DE"
  | "es-ES"
  | "fr-FR"
  | "jp-JP"
  | "pt-PT"
  | "ru-RU"
  | "zh-CN"
  | "zh-TW"
  | "ko-KO"
  | "it-IT"
  | "vi-VN"
  | "pl-PL"
  | "Tr-TR";
```

###### Type Declaration

###### auto\_approve?

```ts
optional auto_approve?: boolean;
```

##### POST /meetings/\{meetingId\}/sip\_dialing

```ts
POST /meetings/{meetingId}/sip_dialing: {
  passcode?: string;
};
```

###### passcode?

```ts
optional passcode?: string;
```

##### POST /sip\_phones/phones

```ts
POST /sip_phones/phones: {
  authorization_name: string;
  display_number?: string;
  domain: string;
  password: string;
  registration_expire_time?: number;
  server: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_2?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_3?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  user_email: string;
  user_name: string;
  voice_mail?: string;
};
```

###### authorization\_name

```ts
authorization_name: string;
```

###### display\_number?

```ts
optional display_number?: string;
```

###### domain

```ts
domain: string;
```

###### password

```ts
password: string;
```

###### registration\_expire\_time?

```ts
optional registration_expire_time?: number;
```

###### server

```ts
server: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server.register\_server?

```ts
optional register_server?: string;
```

###### server.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### server\_2?

```ts
optional server_2?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server\_2.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server\_2.register\_server?

```ts
optional register_server?: string;
```

###### server\_2.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### server\_3?

```ts
optional server_3?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server\_3.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server\_3.register\_server?

```ts
optional register_server?: string;
```

###### server\_3.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### user\_email

```ts
user_email: string;
```

###### user\_name

```ts
user_name: string;
```

###### voice\_mail?

```ts
optional voice_mail?: string;
```

##### POST /tracking\_fields

```ts
POST /tracking_fields: {
  field?: string;
  recommended_values?: readonly string[];
  required?: boolean;
  visible?: boolean;
};
```

###### field?

```ts
optional field?: string;
```

###### recommended\_values?

```ts
optional recommended_values?: readonly string[];
```

###### required?

```ts
optional required?: boolean;
```

###### visible?

```ts
optional visible?: boolean;
```

##### POST /users/\{userId\}/meeting\_templates

```ts
POST /users/{userId}/meeting_templates: {
  meeting_id?: number;
  name?: string;
  overwrite?: boolean;
  save_recurrence?: boolean;
};
```

###### meeting\_id?

```ts
optional meeting_id?: number;
```

###### name?

```ts
optional name?: string;
```

###### overwrite?

```ts
optional overwrite?: boolean;
```

###### save\_recurrence?

```ts
optional save_recurrence?: boolean;
```

##### POST /users/\{userId\}/meetings

```ts
POST /users/{userId}/meetings: {
  agenda?: string;
  default_password?: boolean;
  duration?: number;
  password?: string;
  pre_schedule?: boolean;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
  };
  schedule_for?: string;
  settings?: {
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_manage_cloud_recording?: boolean;
     alternative_host_manage_meeting_summary?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     alternative_hosts_email_notification?: boolean;
     approval_type?: 0 | 1 | 2;
     approved_or_denied_countries_or_regions?: {
        approved_list?: readonly string[];
        denied_list?: readonly string[];
        enable?: boolean;
        method?: "approve" | "deny";
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_exception?: readonly {
        email?: string;
        name?: string;
     }[];
     authentication_option?: string;
     auto_add_recording_to_video_management?: {
        channels?: readonly {
           channel_id: string;
           name?: string;
        }[];
        enable: boolean;
     };
     auto_recording?: "none" | "local" | "cloud";
     auto_start_ai_companion_questions?: boolean;
     auto_start_meeting_summary?: boolean;
     breakout_room?: {
        enable?: boolean;
        rooms?: readonly {
           name?: string;
           participants?: readonly string[];
        }[];
     };
     calendar_type?: 1 | 2;
     close_registration?: boolean;
     cn_meeting?: boolean;
     contact_email?: string;
     contact_name?: string;
     continuous_meeting_chat?: {
        auto_add_invited_external_users?: boolean;
        auto_add_meeting_participants?: boolean;
        enable?: boolean;
     };
     device_testing?: boolean;
     disable_participant_video?: boolean;
     email_in_attendee_report?: boolean;
     email_notification?: boolean;
     encryption_type?: "enhanced_encryption" | "e2ee";
     focus_mode?: boolean;
     global_dial_in_countries?: readonly string[];
     host_save_video_order?: boolean;
     host_video?: boolean;
     in_meeting?: boolean;
     internal_meeting?: boolean;
     jbh_time?: 0 | 5 | 10 | 15;
     join_before_host?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     meeting_invitees?: readonly {
        email?: string;
     }[];
     mute_upon_entry?: boolean;
     participant_focused_meeting?: boolean;
     participant_video?: boolean;
     private_meeting?: boolean;
     push_change_to_calendar?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_submit_questions?: boolean;
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        enable?: boolean;
        question_visibility?: "all" | "answered";
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     resources?: readonly {
        permission_level?: "editor" | "commenter" | "viewer";
        resource_id?: string;
        resource_type?: "whiteboard";
     }[];
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     summary_template_id?: string;
     use_pmi?: boolean;
     waiting_room?: boolean;
     waiting_room_options?: {
        mode: "custom" | "follow_setting";
        who_goes_to_waiting_room?:   | "everyone"
           | "users_not_in_account"
           | "users_not_in_account_or_whitelisted_domains"
           | "users_not_on_invite"
           | "users_not_in_org";
     };
     watermark?: boolean;
     who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
     who_will_receive_summary?: 1 | 2 | 3 | 4;
  };
  start_time?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field: string;
     value?: string;
  }[];
  type?: 1 | 2 | 3 | 8 | 10;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### default\_password?

```ts
optional default_password?: boolean;
```

###### duration?

```ts
optional duration?: number;
```

###### password?

```ts
optional password?: string;
```

###### pre\_schedule?

```ts
optional pre_schedule?: boolean;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
```

###### schedule\_for?

```ts
optional schedule_for?: string;
```

###### settings?

```ts
optional settings?: {
  additional_data_center_regions?: readonly string[];
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
     approved_list?: readonly string[];
     denied_list?: readonly string[];
     enable?: boolean;
     method?: "approve" | "deny";
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: readonly {
     email?: string;
     name?: string;
  }[];
  authentication_option?: string;
  auto_add_recording_to_video_management?: {
     channels?: readonly {
        channel_id: string;
        name?: string;
     }[];
     enable: boolean;
  };
  auto_recording?: "none" | "local" | "cloud";
  auto_start_ai_companion_questions?: boolean;
  auto_start_meeting_summary?: boolean;
  breakout_room?: {
     enable?: boolean;
     rooms?: readonly {
        name?: string;
        participants?: readonly string[];
     }[];
  };
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  continuous_meeting_chat?: {
     auto_add_invited_external_users?: boolean;
     auto_add_meeting_participants?: boolean;
     enable?: boolean;
  };
  device_testing?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  focus_mode?: boolean;
  global_dial_in_countries?: readonly string[];
  host_save_video_order?: boolean;
  host_video?: boolean;
  in_meeting?: boolean;
  internal_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  meeting_invitees?: readonly {
     email?: string;
  }[];
  mute_upon_entry?: boolean;
  participant_focused_meeting?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  push_change_to_calendar?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_submit_questions?: boolean;
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     enable?: boolean;
     question_visibility?: "all" | "answered";
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  resources?: readonly {
     permission_level?: "editor" | "commenter" | "viewer";
     resource_id?: string;
     resource_type?: "whiteboard";
  }[];
  show_join_info?: boolean;
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  summary_template_id?: string;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
     mode: "custom" | "follow_setting";
     who_goes_to_waiting_room?:   | "everyone"
        | "users_not_in_account"
        | "users_not_in_account_or_whitelisted_domains"
        | "users_not_on_invite"
        | "users_not_in_org";
  };
  watermark?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
};
```

###### settings.additional\_data\_center\_regions?

```ts
optional additional_data_center_regions?: readonly string[];
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_manage\_cloud\_recording?

```ts
optional alternative_host_manage_cloud_recording?: boolean;
```

###### settings.alternative\_host\_manage\_meeting\_summary?

```ts
optional alternative_host_manage_meeting_summary?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.alternative\_hosts\_email\_notification?

```ts
optional alternative_hosts_email_notification?: boolean;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.approved\_or\_denied\_countries\_or\_regions?

```ts
optional approved_or_denied_countries_or_regions?: {
  approved_list?: readonly string[];
  denied_list?: readonly string[];
  enable?: boolean;
  method?: "approve" | "deny";
};
```

###### settings.approved\_or\_denied\_countries\_or\_regions.approved\_list?

```ts
optional approved_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.denied\_list?

```ts
optional denied_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.enable?

```ts
optional enable?: boolean;
```

###### settings.approved\_or\_denied\_countries\_or\_regions.method?

```ts
optional method?: "approve" | "deny";
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_exception?

```ts
optional authentication_exception?: readonly {
  email?: string;
  name?: string;
}[];
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_add\_recording\_to\_video\_management?

```ts
optional auto_add_recording_to_video_management?: {
  channels?: readonly {
     channel_id: string;
     name?: string;
  }[];
  enable: boolean;
};
```

###### settings.auto\_add\_recording\_to\_video\_management.channels?

```ts
optional channels?: readonly {
  channel_id: string;
  name?: string;
}[];
```

###### settings.auto\_add\_recording\_to\_video\_management.enable

```ts
enable: boolean;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.auto\_start\_ai\_companion\_questions?

```ts
optional auto_start_ai_companion_questions?: boolean;
```

###### settings.auto\_start\_meeting\_summary?

```ts
optional auto_start_meeting_summary?: boolean;
```

###### settings.breakout\_room?

```ts
optional breakout_room?: {
  enable?: boolean;
  rooms?: readonly {
     name?: string;
     participants?: readonly string[];
  }[];
};
```

###### settings.breakout\_room.enable?

```ts
optional enable?: boolean;
```

###### settings.breakout\_room.rooms?

```ts
optional rooms?: readonly {
  name?: string;
  participants?: readonly string[];
}[];
```

###### settings.calendar\_type?

```ts
optional calendar_type?: 1 | 2;
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.cn\_meeting?

```ts
optional cn_meeting?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.continuous\_meeting\_chat?

```ts
optional continuous_meeting_chat?: {
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
  enable?: boolean;
};
```

###### settings.continuous\_meeting\_chat.auto\_add\_invited\_external\_users?

```ts
optional auto_add_invited_external_users?: boolean;
```

###### settings.continuous\_meeting\_chat.auto\_add\_meeting\_participants?

```ts
optional auto_add_meeting_participants?: boolean;
```

###### settings.continuous\_meeting\_chat.enable?

```ts
optional enable?: boolean;
```

###### settings.device\_testing?

```ts
optional device_testing?: boolean;
```

###### settings.disable\_participant\_video?

```ts
optional disable_participant_video?: boolean;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_notification?

```ts
optional email_notification?: boolean;
```

###### settings.encryption\_type?

```ts
optional encryption_type?: "enhanced_encryption" | "e2ee";
```

###### settings.focus\_mode?

```ts
optional focus_mode?: boolean;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.host\_save\_video\_order?

```ts
optional host_save_video_order?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.in\_meeting?

```ts
optional in_meeting?: boolean;
```

###### settings.internal\_meeting?

```ts
optional internal_meeting?: boolean;
```

###### settings.jbh\_time?

```ts
optional jbh_time?: 0 | 5 | 10 | 15;
```

###### settings.join\_before\_host?

```ts
optional join_before_host?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.meeting\_invitees?

```ts
optional meeting_invitees?: readonly {
  email?: string;
}[];
```

###### settings.mute\_upon\_entry?

```ts
optional mute_upon_entry?: boolean;
```

###### settings.participant\_focused\_meeting?

```ts
optional participant_focused_meeting?: boolean;
```

###### settings.participant\_video?

```ts
optional participant_video?: boolean;
```

###### settings.private\_meeting?

```ts
optional private_meeting?: boolean;
```

###### settings.push\_change\_to\_calendar?

```ts
optional push_change_to_calendar?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_submit_questions?: boolean;
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  enable?: boolean;
  question_visibility?: "all" | "answered";
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.question\_and\_answer.question\_visibility?

```ts
optional question_visibility?: "all" | "answered";
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.resources?

```ts
optional resources?: readonly {
  permission_level?: "editor" | "commenter" | "viewer";
  resource_id?: string;
  resource_type?: "whiteboard";
}[];
```

###### settings.show\_join\_info?

```ts
optional show_join_info?: boolean;
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.summary\_template\_id?

```ts
optional summary_template_id?: string;
```

###### settings.use\_pmi?

```ts
optional use_pmi?: boolean;
```

###### settings.waiting\_room?

```ts
optional waiting_room?: boolean;
```

###### settings.waiting\_room\_options?

```ts
optional waiting_room_options?: {
  mode: "custom" | "follow_setting";
  who_goes_to_waiting_room?:   | "everyone"
     | "users_not_in_account"
     | "users_not_in_account_or_whitelisted_domains"
     | "users_not_on_invite"
     | "users_not_in_org";
};
```

###### settings.waiting\_room\_options.mode

```ts
mode: "custom" | "follow_setting";
```

###### settings.waiting\_room\_options.who\_goes\_to\_waiting\_room?

```ts
optional who_goes_to_waiting_room?:
  | "everyone"
  | "users_not_in_account"
  | "users_not_in_account_or_whitelisted_domains"
  | "users_not_on_invite"
  | "users_not_in_org";
```

###### settings.watermark?

```ts
optional watermark?: boolean;
```

###### settings.who\_can\_ask\_questions?

```ts
optional who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
```

###### settings.who\_will\_receive\_summary?

```ts
optional who_will_receive_summary?: 1 | 2 | 3 | 4;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### template\_id?

```ts
optional template_id?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field: string;
  value?: string;
}[];
```

###### type?

```ts
optional type?: 1 | 2 | 3 | 8 | 10;
```

##### POST /users/\{userId\}/tsp

```ts
POST /users/{userId}/tsp: {
  conference_code: string;
  dial_in_numbers?: readonly {
     code?: string;
     country_label?: string;
     number?: string;
     type?: "toll" | "tollfree" | "media_link";
  }[];
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
};
```

###### conference\_code

```ts
conference_code: string;
```

###### dial\_in\_numbers?

```ts
optional dial_in_numbers?: readonly {
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}[];
```

###### leader\_pin

```ts
leader_pin: string;
```

###### tsp\_bridge?

```ts
optional tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
```

##### POST /users/\{userId\}/webinar\_templates

```ts
POST /users/{userId}/webinar_templates: {
  name?: string;
  overwrite?: boolean;
  save_recurrence?: boolean;
  webinar_id?: number;
};
```

###### name?

```ts
optional name?: string;
```

###### overwrite?

```ts
optional overwrite?: boolean;
```

###### save\_recurrence?

```ts
optional save_recurrence?: boolean;
```

###### webinar\_id?

```ts
optional webinar_id?: number;
```

##### POST /users/\{userId\}/webinars

```ts
POST /users/{userId}/webinars: {
  agenda?: string;
  default_passcode?: boolean;
  duration?: number;
  is_simulive?: boolean;
  password?: string;
  record_file_id?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: string;
  };
  schedule_for?: string;
  settings?: {
     add_audio_watermark?: boolean;
     add_watermark?: boolean;
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     approval_type?: 0 | 1 | 2;
     attendees_and_panelists_reminder_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_option?: string;
     auto_recording?: "none" | "local" | "cloud";
     close_registration?: boolean;
     contact_email?: string;
     contact_name?: string;
     email_in_attendee_report?: boolean;
     email_language?: string;
     enable_session_branding?: boolean;
     enforce_login?: boolean;
     enforce_login_domains?: string;
     follow_up_absentees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     follow_up_attendees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     global_dial_in_countries?: readonly string[];
     hd_video?: boolean;
     hd_video_for_attendees?: boolean;
     host_video?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     on_demand?: boolean;
     panelist_authentication?: boolean;
     panelists_invitation_email_notification?: boolean;
     panelists_video?: boolean;
     post_webinar_survey?: boolean;
     practice_session?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_auto_reply?: boolean;
        allow_submit_questions?: boolean;
        answer_questions?: "all" | "only";
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        auto_reply_text?: string;
        enable?: boolean;
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registrants_restrict_number?: number;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     send_1080p_video_to_attendees?: boolean;
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     survey_url?: string;
  };
  simulive_delay_start?: {
     enable?: boolean;
     time?: number;
     timeunit?: "second" | "minute";
  };
  start_time?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field: string;
     value?: string;
  }[];
  transition_to_live?: boolean;
  type?: 5 | 6 | 9;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### default\_passcode?

```ts
optional default_passcode?: boolean;
```

###### duration?

```ts
optional duration?: number;
```

###### is\_simulive?

```ts
optional is_simulive?: boolean;
```

###### password?

```ts
optional password?: string;
```

###### record\_file\_id?

```ts
optional record_file_id?: string;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: string;
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: string;
```

###### schedule\_for?

```ts
optional schedule_for?: string;
```

###### settings?

```ts
optional settings?: {
  add_audio_watermark?: boolean;
  add_watermark?: boolean;
  additional_data_center_regions?: readonly string[];
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_option?: string;
  auto_recording?: "none" | "local" | "cloud";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_in_attendee_report?: boolean;
  email_language?: string;
  enable_session_branding?: boolean;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  follow_up_attendees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  global_dial_in_countries?: readonly string[];
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  on_demand?: boolean;
  panelist_authentication?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_auto_reply?: boolean;
     allow_submit_questions?: boolean;
     answer_questions?: "all" | "only";
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     auto_reply_text?: string;
     enable?: boolean;
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  send_1080p_video_to_attendees?: boolean;
  show_join_info?: boolean;
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  survey_url?: string;
};
```

###### settings.add\_audio\_watermark?

```ts
optional add_audio_watermark?: boolean;
```

###### settings.add\_watermark?

```ts
optional add_watermark?: boolean;
```

###### settings.additional\_data\_center\_regions?

```ts
optional additional_data_center_regions?: readonly string[];
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification?

```ts
optional attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_language?

```ts
optional email_language?: string;
```

###### settings.enable\_session\_branding?

```ts
optional enable_session_branding?: boolean;
```

###### settings.enforce\_login?

```ts
optional enforce_login?: boolean;
```

###### settings.enforce\_login\_domains?

```ts
optional enforce_login_domains?: string;
```

###### settings.follow\_up\_absentees\_email\_notification?

```ts
optional follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_absentees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_absentees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.follow\_up\_attendees\_email\_notification?

```ts
optional follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_attendees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_attendees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.hd\_video?

```ts
optional hd_video?: boolean;
```

###### settings.hd\_video\_for\_attendees?

```ts
optional hd_video_for_attendees?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.on\_demand?

```ts
optional on_demand?: boolean;
```

###### settings.panelist\_authentication?

```ts
optional panelist_authentication?: boolean;
```

###### settings.panelists\_invitation\_email\_notification?

```ts
optional panelists_invitation_email_notification?: boolean;
```

###### settings.panelists\_video?

```ts
optional panelists_video?: boolean;
```

###### settings.post\_webinar\_survey?

```ts
optional post_webinar_survey?: boolean;
```

###### settings.practice\_session?

```ts
optional practice_session?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_auto_reply?: boolean;
  allow_submit_questions?: boolean;
  answer_questions?: "all" | "only";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_auto\_reply?

```ts
optional allow_auto_reply?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.answer\_questions?

```ts
optional answer_questions?: "all" | "only";
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.auto\_reply\_text?

```ts
optional auto_reply_text?: string;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registrants\_restrict\_number?

```ts
optional registrants_restrict_number?: number;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.send\_1080p\_video\_to\_attendees?

```ts
optional send_1080p_video_to_attendees?: boolean;
```

###### settings.show\_join\_info?

```ts
optional show_join_info?: boolean;
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.survey\_url?

```ts
optional survey_url?: string;
```

###### simulive\_delay\_start?

```ts
optional simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: "second" | "minute";
};
```

###### simulive\_delay\_start.enable?

```ts
optional enable?: boolean;
```

###### simulive\_delay\_start.time?

```ts
optional time?: number;
```

###### simulive\_delay\_start.timeunit?

```ts
optional timeunit?: "second" | "minute";
```

###### start\_time?

```ts
optional start_time?: string;
```

###### template\_id?

```ts
optional template_id?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field: string;
  value?: string;
}[];
```

###### transition\_to\_live?

```ts
optional transition_to_live?: boolean;
```

###### type?

```ts
optional type?: 5 | 6 | 9;
```

##### POST /webinars/\{webinarId\}/batch\_registrants

```ts
POST /webinars/{webinarId}/batch_registrants: {
  auto_approve?: boolean;
  registrants?: readonly {
     email: string;
     first_name: string;
     last_name?: string;
  }[];
};
```

###### auto\_approve?

```ts
optional auto_approve?: boolean;
```

###### registrants?

```ts
optional registrants?: readonly {
  email: string;
  first_name: string;
  last_name?: string;
}[];
```

##### POST /webinars/\{webinarId\}/branding/name\_tags

```ts
POST /webinars/{webinarId}/branding/name_tags: {
  accent_color: string;
  background_color: string;
  is_default?: boolean;
  name: string;
  set_default_for_all_panelists?: boolean;
  text_color: string;
};
```

###### accent\_color

```ts
accent_color: string;
```

###### background\_color

```ts
background_color: string;
```

###### is\_default?

```ts
optional is_default?: boolean;
```

###### name

```ts
name: string;
```

###### set\_default\_for\_all\_panelists?

```ts
optional set_default_for_all_panelists?: boolean;
```

###### text\_color

```ts
text_color: string;
```

##### POST /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
POST /webinars/{webinarId}/branding/virtual_backgrounds: {
  default?: boolean;
  file: string;
  set_default_for_all_panelists?: boolean;
};
```

###### default?

```ts
optional default?: boolean;
```

###### file

```ts
file: string;
```

###### set\_default\_for\_all\_panelists?

```ts
optional set_default_for_all_panelists?: boolean;
```

##### POST /webinars/\{webinarId\}/branding/wallpaper

```ts
POST /webinars/{webinarId}/branding/wallpaper: {
  file: string;
};
```

###### file

```ts
file: string;
```

##### POST /webinars/\{webinarId\}/invite\_links

```ts
POST /webinars/{webinarId}/invite_links: {
  attendees?: readonly {
     disable_audio?: boolean;
     disable_video?: boolean;
     name: string;
  }[];
  ttl?: number;
};
```

###### attendees?

```ts
optional attendees?: readonly {
  disable_audio?: boolean;
  disable_video?: boolean;
  name: string;
}[];
```

###### ttl?

```ts
optional ttl?: number;
```

##### POST /webinars/\{webinarId\}/panelists

```ts
POST /webinars/{webinarId}/panelists: {
  panelists?: readonly {
     email?: string;
     name?: string;
   } & {
     name_tag_description?: string;
     name_tag_id?: string;
     name_tag_name?: string;
     name_tag_pronouns?: string;
     virtual_background_id?: string;
  }[];
};
```

###### panelists?

```ts
optional panelists?: readonly {
  email?: string;
  name?: string;
} & {
  name_tag_description?: string;
  name_tag_id?: string;
  name_tag_name?: string;
  name_tag_pronouns?: string;
  virtual_background_id?: string;
}[];
```

##### POST /webinars/\{webinarId\}/polls

```ts
POST /webinars/{webinarId}/polls: {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### POST /webinars/\{webinarId\}/registrants

```ts
POST /webinars/{webinarId}/registrants: {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  language?:   | "en-US"
     | "de-DE"
     | "es-ES"
     | "fr-FR"
     | "jp-JP"
     | "pt-PT"
     | "ru-RU"
     | "zh-CN"
     | "zh-TW"
     | "ko-KO"
     | "it-IT"
     | "vi-VN"
     | "pl-PL"
     | "Tr-TR";
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000"
     | "101-500"
     | "500-1,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  source_id?: string;
  state?: string;
  zip?: string;
};
```

###### address?

```ts
optional address?: string;
```

###### city?

```ts
optional city?: string;
```

###### comments?

```ts
optional comments?: string;
```

###### country?

```ts
optional country?: string;
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  title?: string;
  value?: string;
}[];
```

###### email

```ts
email: string;
```

###### first\_name

```ts
first_name: string;
```

###### industry?

```ts
optional industry?: string;
```

###### job\_title?

```ts
optional job_title?: string;
```

###### language?

```ts
optional language?:
  | "en-US"
  | "de-DE"
  | "es-ES"
  | "fr-FR"
  | "jp-JP"
  | "pt-PT"
  | "ru-RU"
  | "zh-CN"
  | "zh-TW"
  | "ko-KO"
  | "it-IT"
  | "vi-VN"
  | "pl-PL"
  | "Tr-TR";
```

###### last\_name?

```ts
optional last_name?: string;
```

###### no\_of\_employees?

```ts
optional no_of_employees?:
  | ""
  | "1-20"
  | "21-50"
  | "51-100"
  | "1,001-5,000"
  | "5,001-10,000"
  | "More than 10,000"
  | "101-500"
  | "500-1,000";
```

###### org?

```ts
optional org?: string;
```

###### phone?

```ts
optional phone?: string;
```

###### purchasing\_time\_frame?

```ts
optional purchasing_time_frame?:
  | ""
  | "Within a month"
  | "1-3 months"
  | "4-6 months"
  | "More than 6 months"
  | "No timeframe";
```

###### role\_in\_purchase\_process?

```ts
optional role_in_purchase_process?:
  | ""
  | "Decision Maker"
  | "Evaluator/Recommender"
  | "Influencer"
  | "Not involved";
```

###### source\_id?

```ts
optional source_id?: string;
```

###### state?

```ts
optional state?: string;
```

###### zip?

```ts
optional zip?: string;
```

##### POST /webinars/\{webinarId\}/sip\_dialing

```ts
POST /webinars/{webinarId}/sip_dialing: {
  passcode?: string;
};
```

###### passcode?

```ts
optional passcode?: string;
```

##### PUT /meetings/\{meetingId\}/polls/\{pollId\}

```ts
PUT /meetings/{meetingId}/polls/{pollId}: {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### PUT /meetings/\{meetingId\}/recordings/\{recordingId\}/status

```ts
PUT /meetings/{meetingId}/recordings/{recordingId}/status: {
  action?: "recover";
};
```

###### action?

```ts
optional action?: "recover";
```

##### PUT /meetings/\{meetingId\}/recordings/registrants/status

```ts
PUT /meetings/{meetingId}/recordings/registrants/status: {
  action: "approve" | "deny";
  registrants?: readonly {
     id?: string;
  }[];
};
```

###### action

```ts
action: "approve" | "deny";
```

###### registrants?

```ts
optional registrants?: readonly {
  id?: string;
}[];
```

##### PUT /meetings/\{meetingId\}/registrants/status

```ts
PUT /meetings/{meetingId}/registrants/status: {
  action: "approve" | "deny" | "cancel";
  registrants?: readonly {
     email?: string;
     id?: string;
  }[];
};
```

###### action

```ts
action: "approve" | "deny" | "cancel";
```

###### registrants?

```ts
optional registrants?: readonly {
  email?: string;
  id?: string;
}[];
```

##### PUT /meetings/\{meetingId\}/status

```ts
PUT /meetings/{meetingId}/status: {
  action?: "recover" | "end";
};
```

###### action?

```ts
optional action?: "recover" | "end";
```

##### PUT /meetings/\{meetingUUID\}/recordings/status

```ts
PUT /meetings/{meetingUUID}/recordings/status: {
  action?: "recover";
};
```

###### action?

```ts
optional action?: "recover";
```

##### PUT /webinars/\{webinarId\}/polls/\{pollId\}

```ts
PUT /webinars/{webinarId}/polls/{pollId}: {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### PUT /webinars/\{webinarId\}/registrants/status

```ts
PUT /webinars/{webinarId}/registrants/status: {
  action: "approve" | "deny" | "cancel";
  registrants?: readonly {
     email?: string;
     id?: string;
  }[];
};
```

###### action

```ts
action: "approve" | "deny" | "cancel";
```

###### registrants?

```ts
optional registrants?: readonly {
  email?: string;
  id?: string;
}[];
```

##### PUT /webinars/\{webinarId\}/status

```ts
PUT /webinars/{webinarId}/status: {
  action?: "end";
};
```

###### action?

```ts
optional action?: "end";
```

***

### ZoomMeetingsApiOperationRequestBodyRequiredMap

#### Properties

##### DELETE /devices/\{deviceId\}

```ts
DELETE /devices/{deviceId}: false;
```

##### DELETE /devices/zpa/vendors/\{vendor\}/mac\_addresses/\{macAddress\}

```ts
DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}: false;
```

##### DELETE /h323/devices/\{deviceId\}

```ts
DELETE /h323/devices/{deviceId}: false;
```

##### DELETE /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
DELETE /live_meetings/{meetingId}/chat/messages/{messageId}: false;
```

##### DELETE /live\_webinars/\{webinarId\}/chat/messages/\{messageId\}

```ts
DELETE /live_webinars/{webinarId}/chat/messages/{messageId}: false;
```

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: false;
```

##### DELETE /meetings/\{meetingId\}/meeting\_summary

```ts
DELETE /meetings/{meetingId}/meeting_summary: false;
```

##### DELETE /meetings/\{meetingId\}/open\_apps

```ts
DELETE /meetings/{meetingId}/open_apps: false;
```

##### DELETE /meetings/\{meetingId\}/polls/\{pollId\}

```ts
DELETE /meetings/{meetingId}/polls/{pollId}: false;
```

##### DELETE /meetings/\{meetingId\}/recordings

```ts
DELETE /meetings/{meetingId}/recordings: false;
```

##### DELETE /meetings/\{meetingId\}/recordings/\{recordingId\}

```ts
DELETE /meetings/{meetingId}/recordings/{recordingId}: false;
```

##### DELETE /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
DELETE /meetings/{meetingId}/registrants/{registrantId}: false;
```

##### DELETE /meetings/\{meetingId\}/survey

```ts
DELETE /meetings/{meetingId}/survey: false;
```

##### DELETE /meetings/\{meetingId\}/transcript

```ts
DELETE /meetings/{meetingId}/transcript: false;
```

##### DELETE /past\_meetings/\{meetingUUID\}/archive\_files

```ts
DELETE /past_meetings/{meetingUUID}/archive_files: false;
```

##### DELETE /sip\_phones/phones/\{phoneId\}

```ts
DELETE /sip_phones/phones/{phoneId}: false;
```

##### DELETE /tracking\_fields/\{fieldId\}

```ts
DELETE /tracking_fields/{fieldId}: false;
```

##### DELETE /users/\{userId\}/tsp/\{tspId\}

```ts
DELETE /users/{userId}/tsp/{tspId}: false;
```

##### DELETE /webinars/\{webinarId\}

```ts
DELETE /webinars/{webinarId}: false;
```

##### DELETE /webinars/\{webinarId\}/branding/name\_tags

```ts
DELETE /webinars/{webinarId}/branding/name_tags: false;
```

##### DELETE /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
DELETE /webinars/{webinarId}/branding/virtual_backgrounds: false;
```

##### DELETE /webinars/\{webinarId\}/branding/wallpaper

```ts
DELETE /webinars/{webinarId}/branding/wallpaper: false;
```

##### DELETE /webinars/\{webinarId\}/panelists

```ts
DELETE /webinars/{webinarId}/panelists: false;
```

##### DELETE /webinars/\{webinarId\}/panelists/\{panelistId\}

```ts
DELETE /webinars/{webinarId}/panelists/{panelistId}: false;
```

##### DELETE /webinars/\{webinarId\}/polls/\{pollId\}

```ts
DELETE /webinars/{webinarId}/polls/{pollId}: false;
```

##### DELETE /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
DELETE /webinars/{webinarId}/registrants/{registrantId}: false;
```

##### DELETE /webinars/\{webinarId\}/survey

```ts
DELETE /webinars/{webinarId}/survey: false;
```

##### GET /archive\_files

```ts
GET /archive_files: false;
```

##### GET /archive\_files/statistics

```ts
GET /archive_files/statistics: false;
```

##### GET /devices

```ts
GET /devices: false;
```

##### GET /devices/\{deviceId\}

```ts
GET /devices/{deviceId}: false;
```

##### GET /devices/groups

```ts
GET /devices/groups: false;
```

##### GET /devices/zpa/settings

```ts
GET /devices/zpa/settings: false;
```

##### GET /devices/zpa/zdm\_groups/\{zdmGroupId\}/versions

```ts
GET /devices/zpa/zdm_groups/{zdmGroupId}/versions: false;
```

##### GET /h323/devices

```ts
GET /h323/devices: false;
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: false;
```

##### GET /meetings/\{meetingId\}/invitation

```ts
GET /meetings/{meetingId}/invitation: false;
```

##### GET /meetings/\{meetingId\}/jointoken/live\_streaming

```ts
GET /meetings/{meetingId}/jointoken/live_streaming: false;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_archiving

```ts
GET /meetings/{meetingId}/jointoken/local_archiving: false;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_recording

```ts
GET /meetings/{meetingId}/jointoken/local_recording: false;
```

##### GET /meetings/\{meetingId\}/livestream

```ts
GET /meetings/{meetingId}/livestream: false;
```

##### GET /meetings/\{meetingId\}/meeting\_summary

```ts
GET /meetings/{meetingId}/meeting_summary: false;
```

##### GET /meetings/\{meetingId\}/polls

```ts
GET /meetings/{meetingId}/polls: false;
```

##### GET /meetings/\{meetingId\}/polls/\{pollId\}

```ts
GET /meetings/{meetingId}/polls/{pollId}: false;
```

##### GET /meetings/\{meetingId\}/recordings

```ts
GET /meetings/{meetingId}/recordings: false;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_details

```ts
GET /meetings/{meetingId}/recordings/analytics_details: false;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_summary

```ts
GET /meetings/{meetingId}/recordings/analytics_summary: false;
```

##### GET /meetings/\{meetingId\}/recordings/registrants

```ts
GET /meetings/{meetingId}/recordings/registrants: false;
```

##### GET /meetings/\{meetingId\}/recordings/registrants/questions

```ts
GET /meetings/{meetingId}/recordings/registrants/questions: false;
```

##### GET /meetings/\{meetingId\}/recordings/settings

```ts
GET /meetings/{meetingId}/recordings/settings: false;
```

##### GET /meetings/\{meetingId\}/registrants

```ts
GET /meetings/{meetingId}/registrants: false;
```

##### GET /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
GET /meetings/{meetingId}/registrants/{registrantId}: false;
```

##### GET /meetings/\{meetingId\}/registrants/questions

```ts
GET /meetings/{meetingId}/registrants/questions: false;
```

##### GET /meetings/\{meetingId\}/survey

```ts
GET /meetings/{meetingId}/survey: false;
```

##### GET /meetings/\{meetingId\}/token

```ts
GET /meetings/{meetingId}/token: false;
```

##### GET /meetings/\{meetingId\}/transcript

```ts
GET /meetings/{meetingId}/transcript: false;
```

##### GET /meetings/meeting\_summaries

```ts
GET /meetings/meeting_summaries: false;
```

##### GET /past\_meetings/\{meetingId\}

```ts
GET /past_meetings/{meetingId}: false;
```

##### GET /past\_meetings/\{meetingId\}/instances

```ts
GET /past_meetings/{meetingId}/instances: false;
```

##### GET /past\_meetings/\{meetingId\}/participants

```ts
GET /past_meetings/{meetingId}/participants: false;
```

##### GET /past\_meetings/\{meetingId\}/polls

```ts
GET /past_meetings/{meetingId}/polls: false;
```

##### GET /past\_meetings/\{meetingId\}/qa

```ts
GET /past_meetings/{meetingId}/qa: false;
```

##### GET /past\_meetings/\{meetingUUID\}/archive\_files

```ts
GET /past_meetings/{meetingUUID}/archive_files: false;
```

##### GET /past\_webinars/\{webinarId\}/absentees

```ts
GET /past_webinars/{webinarId}/absentees: false;
```

##### GET /past\_webinars/\{webinarId\}/instances

```ts
GET /past_webinars/{webinarId}/instances: false;
```

##### GET /past\_webinars/\{webinarId\}/participants

```ts
GET /past_webinars/{webinarId}/participants: false;
```

##### GET /past\_webinars/\{webinarId\}/polls

```ts
GET /past_webinars/{webinarId}/polls: false;
```

##### GET /past\_webinars/\{webinarId\}/qa

```ts
GET /past_webinars/{webinarId}/qa: false;
```

##### GET /report/activities

```ts
GET /report/activities: false;
```

##### GET /report/billing

```ts
GET /report/billing: false;
```

##### GET /report/billing/invoices

```ts
GET /report/billing/invoices: false;
```

##### GET /report/cloud\_recording

```ts
GET /report/cloud_recording: false;
```

##### GET /report/daily

```ts
GET /report/daily: false;
```

##### GET /report/disclaimer

```ts
GET /report/disclaimer: false;
```

##### GET /report/history\_meetings

```ts
GET /report/history_meetings: false;
```

##### GET /report/meeting\_activities

```ts
GET /report/meeting_activities: false;
```

##### GET /report/meetings/\{meetingId\}

```ts
GET /report/meetings/{meetingId}: false;
```

##### GET /report/meetings/\{meetingId\}/participants

```ts
GET /report/meetings/{meetingId}/participants: false;
```

##### GET /report/meetings/\{meetingId\}/polls

```ts
GET /report/meetings/{meetingId}/polls: false;
```

##### GET /report/meetings/\{meetingId\}/qa

```ts
GET /report/meetings/{meetingId}/qa: false;
```

##### GET /report/meetings/\{meetingId\}/survey

```ts
GET /report/meetings/{meetingId}/survey: false;
```

##### GET /report/operationlogs

```ts
GET /report/operationlogs: false;
```

##### GET /report/remote\_support

```ts
GET /report/remote_support: false;
```

##### GET /report/telephone

```ts
GET /report/telephone: false;
```

##### GET /report/upcoming\_events

```ts
GET /report/upcoming_events: false;
```

##### GET /report/users

```ts
GET /report/users: false;
```

##### GET /report/users/\{userId\}/meetings

```ts
GET /report/users/{userId}/meetings: false;
```

##### GET /report/webinars/\{webinarId\}

```ts
GET /report/webinars/{webinarId}: false;
```

##### GET /report/webinars/\{webinarId\}/participants

```ts
GET /report/webinars/{webinarId}/participants: false;
```

##### GET /report/webinars/\{webinarId\}/polls

```ts
GET /report/webinars/{webinarId}/polls: false;
```

##### GET /report/webinars/\{webinarId\}/qa

```ts
GET /report/webinars/{webinarId}/qa: false;
```

##### GET /report/webinars/\{webinarId\}/survey

```ts
GET /report/webinars/{webinarId}/survey: false;
```

##### GET /sip\_phones/phones

```ts
GET /sip_phones/phones: false;
```

##### GET /tracking\_fields

```ts
GET /tracking_fields: false;
```

##### GET /tracking\_fields/\{fieldId\}

```ts
GET /tracking_fields/{fieldId}: false;
```

##### GET /tsp

```ts
GET /tsp: false;
```

##### GET /users/\{userId\}/meeting\_templates

```ts
GET /users/{userId}/meeting_templates: false;
```

##### GET /users/\{userId\}/meetings

```ts
GET /users/{userId}/meetings: false;
```

##### GET /users/\{userId\}/pac

```ts
GET /users/{userId}/pac: false;
```

##### GET /users/\{userId\}/recordings

```ts
GET /users/{userId}/recordings: false;
```

##### GET /users/\{userId\}/tsp

```ts
GET /users/{userId}/tsp: false;
```

##### GET /users/\{userId\}/tsp/\{tspId\}

```ts
GET /users/{userId}/tsp/{tspId}: false;
```

##### GET /users/\{userId\}/upcoming\_meetings

```ts
GET /users/{userId}/upcoming_meetings: false;
```

##### GET /users/\{userId\}/webinar\_templates

```ts
GET /users/{userId}/webinar_templates: false;
```

##### GET /users/\{userId\}/webinars

```ts
GET /users/{userId}/webinars: false;
```

##### GET /webinars/\{webinarId\}

```ts
GET /webinars/{webinarId}: false;
```

##### GET /webinars/\{webinarId\}/branding

```ts
GET /webinars/{webinarId}/branding: false;
```

##### GET /webinars/\{webinarId\}/jointoken/live\_streaming

```ts
GET /webinars/{webinarId}/jointoken/live_streaming: false;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_archiving

```ts
GET /webinars/{webinarId}/jointoken/local_archiving: false;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_recording

```ts
GET /webinars/{webinarId}/jointoken/local_recording: false;
```

##### GET /webinars/\{webinarId\}/livestream

```ts
GET /webinars/{webinarId}/livestream: false;
```

##### GET /webinars/\{webinarId\}/panelists

```ts
GET /webinars/{webinarId}/panelists: false;
```

##### GET /webinars/\{webinarId\}/polls

```ts
GET /webinars/{webinarId}/polls: false;
```

##### GET /webinars/\{webinarId\}/polls/\{pollId\}

```ts
GET /webinars/{webinarId}/polls/{pollId}: false;
```

##### GET /webinars/\{webinarId\}/registrants

```ts
GET /webinars/{webinarId}/registrants: false;
```

##### GET /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
GET /webinars/{webinarId}/registrants/{registrantId}: false;
```

##### GET /webinars/\{webinarId\}/registrants/questions

```ts
GET /webinars/{webinarId}/registrants/questions: false;
```

##### GET /webinars/\{webinarId\}/survey

```ts
GET /webinars/{webinarId}/survey: false;
```

##### GET /webinars/\{webinarId\}/token

```ts
GET /webinars/{webinarId}/token: false;
```

##### GET /webinars/\{webinarId\}/tracking\_sources

```ts
GET /webinars/{webinarId}/tracking_sources: false;
```

##### PATCH /archive\_files/\{fileId\}

```ts
PATCH /archive_files/{fileId}: false;
```

##### PATCH /devices/\{deviceId\}

```ts
PATCH /devices/{deviceId}: false;
```

##### PATCH /devices/\{deviceId\}/assign\_group

```ts
PATCH /devices/{deviceId}/assign_group: false;
```

##### PATCH /devices/\{deviceId\}/assignment

```ts
PATCH /devices/{deviceId}/assignment: false;
```

##### PATCH /h323/devices/\{deviceId\}

```ts
PATCH /h323/devices/{deviceId}: false;
```

##### PATCH /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
PATCH /live_meetings/{meetingId}/chat/messages/{messageId}: false;
```

##### PATCH /live\_meetings/\{meetingId\}/events

```ts
PATCH /live_meetings/{meetingId}/events: false;
```

##### PATCH /live\_meetings/\{meetingId\}/rtms\_app/status

```ts
PATCH /live_meetings/{meetingId}/rtms_app/status: false;
```

##### PATCH /meetings/\{meetingId\}

```ts
PATCH /meetings/{meetingId}: false;
```

##### PATCH /meetings/\{meetingId\}/livestream

```ts
PATCH /meetings/{meetingId}/livestream: false;
```

##### PATCH /meetings/\{meetingId\}/livestream/status

```ts
PATCH /meetings/{meetingId}/livestream/status: false;
```

##### PATCH /meetings/\{meetingId\}/recordings/registrants/questions

```ts
PATCH /meetings/{meetingId}/recordings/registrants/questions: false;
```

##### PATCH /meetings/\{meetingId\}/recordings/settings

```ts
PATCH /meetings/{meetingId}/recordings/settings: false;
```

##### PATCH /meetings/\{meetingId\}/registrants/questions

```ts
PATCH /meetings/{meetingId}/registrants/questions: false;
```

##### PATCH /meetings/\{meetingId\}/survey

```ts
PATCH /meetings/{meetingId}/survey: false;
```

##### PATCH /sip\_phones/phones/\{phoneId\}

```ts
PATCH /sip_phones/phones/{phoneId}: false;
```

##### PATCH /tracking\_fields/\{fieldId\}

```ts
PATCH /tracking_fields/{fieldId}: false;
```

##### PATCH /tsp

```ts
PATCH /tsp: false;
```

##### PATCH /users/\{userId\}/tsp/\{tspId\}

```ts
PATCH /users/{userId}/tsp/{tspId}: false;
```

##### PATCH /users/\{userId\}/tsp/settings

```ts
PATCH /users/{userId}/tsp/settings: false;
```

##### PATCH /webinars/\{webinarId\}

```ts
PATCH /webinars/{webinarId}: false;
```

##### PATCH /webinars/\{webinarId\}/branding/name\_tags/\{nameTagId\}

```ts
PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}: false;
```

##### PATCH /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
PATCH /webinars/{webinarId}/branding/virtual_backgrounds: false;
```

##### PATCH /webinars/\{webinarId\}/livestream

```ts
PATCH /webinars/{webinarId}/livestream: false;
```

##### PATCH /webinars/\{webinarId\}/livestream/status

```ts
PATCH /webinars/{webinarId}/livestream/status: false;
```

##### PATCH /webinars/\{webinarId\}/registrants/questions

```ts
PATCH /webinars/{webinarId}/registrants/questions: false;
```

##### PATCH /webinars/\{webinarId\}/survey

```ts
PATCH /webinars/{webinarId}/survey: false;
```

##### POST /devices

```ts
POST /devices: false;
```

##### POST /devices/zpa/assignment

```ts
POST /devices/zpa/assignment: false;
```

##### POST /devices/zpa/upgrade

```ts
POST /devices/zpa/upgrade: false;
```

##### POST /h323/devices

```ts
POST /h323/devices: false;
```

##### POST /meetings/\{meetingId\}/batch\_polls

```ts
POST /meetings/{meetingId}/batch_polls: false;
```

##### POST /meetings/\{meetingId\}/batch\_registrants

```ts
POST /meetings/{meetingId}/batch_registrants: false;
```

##### POST /meetings/\{meetingId\}/invite\_links

```ts
POST /meetings/{meetingId}/invite_links: false;
```

##### POST /meetings/\{meetingId\}/open\_apps

```ts
POST /meetings/{meetingId}/open_apps: false;
```

##### POST /meetings/\{meetingId\}/polls

```ts
POST /meetings/{meetingId}/polls: false;
```

##### POST /meetings/\{meetingId\}/recordings/registrants

```ts
POST /meetings/{meetingId}/recordings/registrants: false;
```

##### POST /meetings/\{meetingId\}/registrants

```ts
POST /meetings/{meetingId}/registrants: false;
```

##### POST /meetings/\{meetingId\}/sip\_dialing

```ts
POST /meetings/{meetingId}/sip_dialing: false;
```

##### POST /sip\_phones/phones

```ts
POST /sip_phones/phones: false;
```

##### POST /tracking\_fields

```ts
POST /tracking_fields: false;
```

##### POST /users/\{userId\}/meeting\_templates

```ts
POST /users/{userId}/meeting_templates: false;
```

##### POST /users/\{userId\}/meetings

```ts
POST /users/{userId}/meetings: false;
```

##### POST /users/\{userId\}/tsp

```ts
POST /users/{userId}/tsp: false;
```

##### POST /users/\{userId\}/webinar\_templates

```ts
POST /users/{userId}/webinar_templates: false;
```

##### POST /users/\{userId\}/webinars

```ts
POST /users/{userId}/webinars: false;
```

##### POST /webinars/\{webinarId\}/batch\_registrants

```ts
POST /webinars/{webinarId}/batch_registrants: false;
```

##### POST /webinars/\{webinarId\}/branding/name\_tags

```ts
POST /webinars/{webinarId}/branding/name_tags: false;
```

##### POST /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
POST /webinars/{webinarId}/branding/virtual_backgrounds: false;
```

##### POST /webinars/\{webinarId\}/branding/wallpaper

```ts
POST /webinars/{webinarId}/branding/wallpaper: false;
```

##### POST /webinars/\{webinarId\}/invite\_links

```ts
POST /webinars/{webinarId}/invite_links: false;
```

##### POST /webinars/\{webinarId\}/panelists

```ts
POST /webinars/{webinarId}/panelists: false;
```

##### POST /webinars/\{webinarId\}/polls

```ts
POST /webinars/{webinarId}/polls: false;
```

##### POST /webinars/\{webinarId\}/registrants

```ts
POST /webinars/{webinarId}/registrants: false;
```

##### POST /webinars/\{webinarId\}/sip\_dialing

```ts
POST /webinars/{webinarId}/sip_dialing: false;
```

##### PUT /meetings/\{meetingId\}/polls/\{pollId\}

```ts
PUT /meetings/{meetingId}/polls/{pollId}: false;
```

##### PUT /meetings/\{meetingId\}/recordings/\{recordingId\}/status

```ts
PUT /meetings/{meetingId}/recordings/{recordingId}/status: false;
```

##### PUT /meetings/\{meetingId\}/recordings/registrants/status

```ts
PUT /meetings/{meetingId}/recordings/registrants/status: false;
```

##### PUT /meetings/\{meetingId\}/registrants/status

```ts
PUT /meetings/{meetingId}/registrants/status: false;
```

##### PUT /meetings/\{meetingId\}/status

```ts
PUT /meetings/{meetingId}/status: false;
```

##### PUT /meetings/\{meetingUUID\}/recordings/status

```ts
PUT /meetings/{meetingUUID}/recordings/status: false;
```

##### PUT /webinars/\{webinarId\}/polls/\{pollId\}

```ts
PUT /webinars/{webinarId}/polls/{pollId}: false;
```

##### PUT /webinars/\{webinarId\}/registrants/status

```ts
PUT /webinars/{webinarId}/registrants/status: false;
```

##### PUT /webinars/\{webinarId\}/status

```ts
PUT /webinars/{webinarId}/status: false;
```

***

### ZoomMeetingsApiOperationResponseMap

#### Properties

##### DELETE /devices/\{deviceId\}

```ts
DELETE /devices/{deviceId}: void;
```

##### DELETE /devices/zpa/vendors/\{vendor\}/mac\_addresses/\{macAddress\}

```ts
DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}: void;
```

##### DELETE /h323/devices/\{deviceId\}

```ts
DELETE /h323/devices/{deviceId}: void;
```

##### DELETE /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
DELETE /live_meetings/{meetingId}/chat/messages/{messageId}: void;
```

##### DELETE /live\_webinars/\{webinarId\}/chat/messages/\{messageId\}

```ts
DELETE /live_webinars/{webinarId}/chat/messages/{messageId}: void;
```

##### DELETE /meetings/\{meetingId\}

```ts
DELETE /meetings/{meetingId}: void;
```

##### DELETE /meetings/\{meetingId\}/meeting\_summary

```ts
DELETE /meetings/{meetingId}/meeting_summary: void;
```

##### DELETE /meetings/\{meetingId\}/open\_apps

```ts
DELETE /meetings/{meetingId}/open_apps: void;
```

##### DELETE /meetings/\{meetingId\}/polls/\{pollId\}

```ts
DELETE /meetings/{meetingId}/polls/{pollId}: void;
```

##### DELETE /meetings/\{meetingId\}/recordings

```ts
DELETE /meetings/{meetingId}/recordings: void;
```

##### DELETE /meetings/\{meetingId\}/recordings/\{recordingId\}

```ts
DELETE /meetings/{meetingId}/recordings/{recordingId}: void;
```

##### DELETE /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
DELETE /meetings/{meetingId}/registrants/{registrantId}: void;
```

##### DELETE /meetings/\{meetingId\}/survey

```ts
DELETE /meetings/{meetingId}/survey: void;
```

##### DELETE /meetings/\{meetingId\}/transcript

```ts
DELETE /meetings/{meetingId}/transcript: void;
```

##### DELETE /past\_meetings/\{meetingUUID\}/archive\_files

```ts
DELETE /past_meetings/{meetingUUID}/archive_files: void;
```

##### DELETE /sip\_phones/phones/\{phoneId\}

```ts
DELETE /sip_phones/phones/{phoneId}: void;
```

##### DELETE /tracking\_fields/\{fieldId\}

```ts
DELETE /tracking_fields/{fieldId}: void;
```

##### DELETE /users/\{userId\}/tsp/\{tspId\}

```ts
DELETE /users/{userId}/tsp/{tspId}: void;
```

##### DELETE /webinars/\{webinarId\}

```ts
DELETE /webinars/{webinarId}: void;
```

##### DELETE /webinars/\{webinarId\}/branding/name\_tags

```ts
DELETE /webinars/{webinarId}/branding/name_tags: void;
```

##### DELETE /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
DELETE /webinars/{webinarId}/branding/virtual_backgrounds: void;
```

##### DELETE /webinars/\{webinarId\}/branding/wallpaper

```ts
DELETE /webinars/{webinarId}/branding/wallpaper: void;
```

##### DELETE /webinars/\{webinarId\}/panelists

```ts
DELETE /webinars/{webinarId}/panelists: void;
```

##### DELETE /webinars/\{webinarId\}/panelists/\{panelistId\}

```ts
DELETE /webinars/{webinarId}/panelists/{panelistId}: void;
```

##### DELETE /webinars/\{webinarId\}/polls/\{pollId\}

```ts
DELETE /webinars/{webinarId}/polls/{pollId}: void;
```

##### DELETE /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
DELETE /webinars/{webinarId}/registrants/{registrantId}: void;
```

##### DELETE /webinars/\{webinarId\}/survey

```ts
DELETE /webinars/{webinarId}/survey: void;
```

##### GET /archive\_files

```ts
GET /archive_files: {
  from?: string;
  meetings?: readonly {
     account_name: string;
     archive_files: readonly {
        auto_delete?: boolean;
        download_url: string;
        encryption_fingerprint: string;
        file_extension: string;
        file_path?: string;
        file_size: number;
        file_type:   | "MP4"
           | "M4A"
           | "CHAT"
           | "CC"
           | "CHAT_MESSAGE"
           | "TRANSCRIPT"
           | "SUB_GROUP_MEMBER_LOG"
           | "AIC_COVERSATION";
        id: string;
        individual: boolean;
        number_of_messages?: number;
        participant_email?: string;
        participant_join_time: string;
        participant_leave_time: string;
        recording_type:   | "shared_screen_with_speaker_view"
           | "audio_only"
           | "chat_file"
           | "closed_caption"
           | "chat_message"
           | "audio_transcript"
           | "aic_conversation";
        status: "failed" | "completed" | "processing";
        storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
     }[];
     complete_time:   | {
      }
        | "";
     duration: number;
     duration_in_second: number;
     group_id?: string;
     host_id: string;
     id: number;
     is_breakout_room: boolean;
     meeting_type: "internal" | "external";
     parent_meeting_id?: string;
     physical_files?: readonly {
        download_url?: string;
        file_id?: string;
        file_name?: string;
        file_size?: number;
     }[];
     recording_count: number;
     start_time: string;
     status: "completed" | "processing";
     timezone: string;
     topic: string;
     total_size: number;
     type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
     uuid: string;
  }[];
  next_page_token?: string;
  page_size?: number;
  to?: string;
  total_records?: number;
};
```

###### from?

```ts
optional from?: string;
```

###### meetings?

```ts
optional meetings?: readonly {
  account_name: string;
  archive_files: readonly {
     auto_delete?: boolean;
     download_url: string;
     encryption_fingerprint: string;
     file_extension: string;
     file_path?: string;
     file_size: number;
     file_type:   | "MP4"
        | "M4A"
        | "CHAT"
        | "CC"
        | "CHAT_MESSAGE"
        | "TRANSCRIPT"
        | "SUB_GROUP_MEMBER_LOG"
        | "AIC_COVERSATION";
     id: string;
     individual: boolean;
     number_of_messages?: number;
     participant_email?: string;
     participant_join_time: string;
     participant_leave_time: string;
     recording_type:   | "shared_screen_with_speaker_view"
        | "audio_only"
        | "chat_file"
        | "closed_caption"
        | "chat_message"
        | "audio_transcript"
        | "aic_conversation";
     status: "failed" | "completed" | "processing";
     storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
  }[];
  complete_time:   | {
   }
     | "";
  duration: number;
  duration_in_second: number;
  group_id?: string;
  host_id: string;
  id: number;
  is_breakout_room: boolean;
  meeting_type: "internal" | "external";
  parent_meeting_id?: string;
  physical_files?: readonly {
     download_url?: string;
     file_id?: string;
     file_name?: string;
     file_size?: number;
  }[];
  recording_count: number;
  start_time: string;
  status: "completed" | "processing";
  timezone: string;
  topic: string;
  total_size: number;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
  uuid: string;
}[];
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /archive\_files/statistics

```ts
GET /archive_files/statistics: {
  from?: string;
  statistic_by_file_extension?: {
     json_file_count?: number;
     m4a_file_count?: number;
     mp4_file_count?: number;
     txt_file_count?: number;
     vtt_file_count?: number;
  };
  statistic_by_file_status?: {
     completed_file_count?: number;
     failed_file_count?: number;
     processing_file_count?: number;
  };
  to?: string;
  total_records?: number;
};
```

###### from?

```ts
optional from?: string;
```

###### statistic\_by\_file\_extension?

```ts
optional statistic_by_file_extension?: {
  json_file_count?: number;
  m4a_file_count?: number;
  mp4_file_count?: number;
  txt_file_count?: number;
  vtt_file_count?: number;
};
```

###### statistic\_by\_file\_extension.json\_file\_count?

```ts
optional json_file_count?: number;
```

###### statistic\_by\_file\_extension.m4a\_file\_count?

```ts
optional m4a_file_count?: number;
```

###### statistic\_by\_file\_extension.mp4\_file\_count?

```ts
optional mp4_file_count?: number;
```

###### statistic\_by\_file\_extension.txt\_file\_count?

```ts
optional txt_file_count?: number;
```

###### statistic\_by\_file\_extension.vtt\_file\_count?

```ts
optional vtt_file_count?: number;
```

###### statistic\_by\_file\_status?

```ts
optional statistic_by_file_status?: {
  completed_file_count?: number;
  failed_file_count?: number;
  processing_file_count?: number;
};
```

###### statistic\_by\_file\_status.completed\_file\_count?

```ts
optional completed_file_count?: number;
```

###### statistic\_by\_file\_status.failed\_file\_count?

```ts
optional failed_file_count?: number;
```

###### statistic\_by\_file\_status.processing\_file\_count?

```ts
optional processing_file_count?: number;
```

###### to?

```ts
optional to?: string;
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /devices

```ts
GET /devices: {
  devices?: readonly {
     app_version?: string;
     connected_to_zdm?: boolean;
     device_id?: string;
     device_name?: string;
     device_status?: -1 | 0 | 1;
     device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
     enrolled_in_zdm?: boolean;
     last_online?: string;
     mac_address?: string;
     model?: string;
     platform_os?: string;
     room_id?: string;
     room_name?: string;
     serial_number?: string;
     skd_version?: string;
     tag?: string;
     user_email?: string;
     vendor?: string;
  }[];
  next_page_token?: string;
  page_size?: number;
};
```

###### devices?

```ts
optional devices?: readonly {
  app_version?: string;
  connected_to_zdm?: boolean;
  device_id?: string;
  device_name?: string;
  device_status?: -1 | 0 | 1;
  device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  enrolled_in_zdm?: boolean;
  last_online?: string;
  mac_address?: string;
  model?: string;
  platform_os?: string;
  room_id?: string;
  room_name?: string;
  serial_number?: string;
  skd_version?: string;
  tag?: string;
  user_email?: string;
  vendor?: string;
}[];
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /devices/\{deviceId\}

```ts
GET /devices/{deviceId}: {
  app_version?: string;
  connected_to_zdm?: boolean;
  device_id?: string;
  device_name?: string;
  device_status?: -1 | 0 | 1;
  device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  enrolled_in_zdm?: boolean;
  last_online?: string;
  mac_address?: string;
  model?: string;
  platform_os?: string;
  room_id?: string;
  room_name?: string;
  sdk_version?: string;
  serial_number?: string;
  tag?: string;
  user_email?: string;
  vendor?: string;
};
```

###### app\_version?

```ts
optional app_version?: string;
```

###### connected\_to\_zdm?

```ts
optional connected_to_zdm?: boolean;
```

###### device\_id?

```ts
optional device_id?: string;
```

###### device\_name?

```ts
optional device_name?: string;
```

###### device\_status?

```ts
optional device_status?: -1 | 0 | 1;
```

###### device\_type?

```ts
optional device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
```

###### enrolled\_in\_zdm?

```ts
optional enrolled_in_zdm?: boolean;
```

###### last\_online?

```ts
optional last_online?: string;
```

###### mac\_address?

```ts
optional mac_address?: string;
```

###### model?

```ts
optional model?: string;
```

###### platform\_os?

```ts
optional platform_os?: string;
```

###### room\_id?

```ts
optional room_id?: string;
```

###### room\_name?

```ts
optional room_name?: string;
```

###### sdk\_version?

```ts
optional sdk_version?: string;
```

###### serial\_number?

```ts
optional serial_number?: string;
```

###### tag?

```ts
optional tag?: string;
```

###### user\_email?

```ts
optional user_email?: string;
```

###### vendor?

```ts
optional vendor?: string;
```

##### GET /devices/groups

```ts
GET /devices/groups: {
  groups?: readonly {
     description?: string;
     name?: string;
     zdm_group_id?: string;
  }[];
  next_page_token?: string;
  page_size?: number;
};
```

###### groups?

```ts
optional groups?: readonly {
  description?: string;
  name?: string;
  zdm_group_id?: string;
}[];
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /devices/zpa/settings

```ts
GET /devices/zpa/settings: {
  device_infos?: readonly {
     device_id?: string;
     device_type?: string;
     model?: string;
     policy?: {
        call_control?: {
           status?: "unsupported" | "on" | "off";
        };
        hot_desking?: {
           status?: "online" | "offline";
        };
     };
     status?: "online" | "offline";
     vendor?: string;
  }[];
  language?: string;
  timezone?: string;
};
```

###### device\_infos?

```ts
optional device_infos?: readonly {
  device_id?: string;
  device_type?: string;
  model?: string;
  policy?: {
     call_control?: {
        status?: "unsupported" | "on" | "off";
     };
     hot_desking?: {
        status?: "online" | "offline";
     };
  };
  status?: "online" | "offline";
  vendor?: string;
}[];
```

###### language?

```ts
optional language?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

##### GET /devices/zpa/zdm\_groups/\{zdmGroupId\}/versions

```ts
GET /devices/zpa/zdm_groups/{zdmGroupId}/versions: {
  app_versions?: readonly string[];
  firmware_versions?: readonly {
     model?: string;
     vendor?: string;
     version?: string;
     warn_info?: string;
  }[];
};
```

###### app\_versions?

```ts
optional app_versions?: readonly string[];
```

###### firmware\_versions?

```ts
optional firmware_versions?: readonly {
  model?: string;
  vendor?: string;
  version?: string;
  warn_info?: string;
}[];
```

##### GET /h323/devices

```ts
GET /h323/devices: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  devices?: readonly {
     id?: string;
   } & {
     encryption: "auto" | "yes" | "no";
     ip: string;
     name: string;
     protocol: "H.323" | "SIP";
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### devices?

```ts
optional devices?: readonly {
  id?: string;
} & {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
}[];
```

##### GET /meetings/\{meetingId\}

```ts
GET /meetings/{meetingId}: {
  agenda?: string;
  assistant_id?: string;
  chat_join_url?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  dynamic_host_key?: string;
  encrypted_password?: string;
  h323_password?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  pmi?: string;
  pre_schedule?: boolean;
  pstn_password?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
  };
  registration_url?: string;
  settings?: {
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_manage_cloud_recording?: boolean;
     alternative_host_manage_meeting_summary?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     alternative_hosts_email_notification?: boolean;
     approval_type?: 0 | 1 | 2;
     approved_or_denied_countries_or_regions?: {
        approved_list?: readonly string[];
        denied_list?: readonly string[];
        enable?: boolean;
        method?: "approve" | "deny";
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_exception?: readonly {
        email?: string;
        join_url?: string;
        name?: string;
     }[];
     authentication_name?: string;
     authentication_option?: string;
     auto_add_recording_to_video_management?: {
        channels?: readonly {
           channel_id: string;
           name?: string;
        }[];
        enable: boolean;
     };
     auto_recording?: "none" | "local" | "cloud";
     auto_start_ai_companion_questions?: boolean;
     auto_start_meeting_summary?: boolean;
     breakout_room?: {
        enable?: boolean;
        rooms?: readonly {
           name?: string;
           participants?: readonly string[];
        }[];
     };
     calendar_type?: 1 | 2;
     close_registration?: boolean;
     cn_meeting?: boolean;
     contact_email?: string;
     contact_name?: string;
     continuous_meeting_chat?: {
        auto_add_invited_external_users?: boolean;
        auto_add_meeting_participants?: boolean;
        channel_id?: string;
        enable?: boolean;
     };
     custom_keys?: readonly {
        key?: string;
        value?: string;
     }[];
     device_testing?: boolean;
     disable_participant_video?: boolean;
     email_in_attendee_report?: boolean;
     email_notification?: boolean;
     encryption_type?: "enhanced_encryption" | "e2ee";
     enforce_login?: boolean;
     enforce_login_domains?: string;
     focus_mode?: boolean;
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree";
     }[];
     host_save_video_order?: boolean;
     host_video?: boolean;
     in_meeting?: boolean;
     internal_meeting?: boolean;
     jbh_time?: 0 | 5 | 10 | 15;
     join_before_host?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     meeting_invitees?: readonly {
        email?: string;
        internal_user?: boolean;
     }[];
     mute_upon_entry?: boolean;
     participant_focused_meeting?: boolean;
     participant_video?: boolean;
     private_meeting?: boolean;
     push_change_to_calendar?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_submit_questions?: boolean;
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        enable?: boolean;
        question_visibility?: "all" | "answered";
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     resources?: readonly {
        permission_level?: "editor" | "commenter" | "viewer";
        resource_id?: string;
        resource_type?: "whiteboard";
     }[];
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     summary_template_id?: string;
     use_pmi?: boolean;
     waiting_room?: boolean;
     waiting_room_options?: {
        mode: "custom" | "follow_setting";
        who_goes_to_waiting_room?:   | "everyone"
           | "users_not_in_account"
           | "users_not_in_account_or_whitelisted_domains"
           | "users_not_on_invite"
           | "users_not_in_org";
     };
     watermark?: boolean;
     who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
     who_will_receive_summary?: 1 | 2 | 3 | 4;
  };
  start_time?: string;
  start_url?: string;
  status?: "started" | "waiting";
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  type?: 1 | 2 | 3 | 4 | 8 | 10;
  uuid?: string;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### assistant\_id?

```ts
optional assistant_id?: string;
```

###### chat\_join\_url?

```ts
optional chat_join_url?: string;
```

###### created\_at?

```ts
optional created_at?: string;
```

###### creation\_source?

```ts
optional creation_source?: "other" | "open_api" | "web_portal";
```

###### duration?

```ts
optional duration?: number;
```

###### dynamic\_host\_key?

```ts
optional dynamic_host_key?: string;
```

###### encrypted\_password?

```ts
optional encrypted_password?: string;
```

###### h323\_password?

```ts
optional h323_password?: string;
```

###### host\_email?

```ts
optional host_email?: string;
```

###### host\_id?

```ts
optional host_id?: string;
```

###### id?

```ts
optional id?: number;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### occurrences?

```ts
optional occurrences?: readonly {
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}[];
```

###### password?

```ts
optional password?: string;
```

###### pmi?

```ts
optional pmi?: string;
```

###### pre\_schedule?

```ts
optional pre_schedule?: boolean;
```

###### pstn\_password?

```ts
optional pstn_password?: string;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
```

###### registration\_url?

```ts
optional registration_url?: string;
```

###### settings?

```ts
optional settings?: {
  additional_data_center_regions?: readonly string[];
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
     approved_list?: readonly string[];
     denied_list?: readonly string[];
     enable?: boolean;
     method?: "approve" | "deny";
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: readonly {
     email?: string;
     join_url?: string;
     name?: string;
  }[];
  authentication_name?: string;
  authentication_option?: string;
  auto_add_recording_to_video_management?: {
     channels?: readonly {
        channel_id: string;
        name?: string;
     }[];
     enable: boolean;
  };
  auto_recording?: "none" | "local" | "cloud";
  auto_start_ai_companion_questions?: boolean;
  auto_start_meeting_summary?: boolean;
  breakout_room?: {
     enable?: boolean;
     rooms?: readonly {
        name?: string;
        participants?: readonly string[];
     }[];
  };
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  continuous_meeting_chat?: {
     auto_add_invited_external_users?: boolean;
     auto_add_meeting_participants?: boolean;
     channel_id?: string;
     enable?: boolean;
  };
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  device_testing?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  enforce_login?: boolean;
  enforce_login_domains?: string;
  focus_mode?: boolean;
  global_dial_in_countries?: readonly string[];
  global_dial_in_numbers?: readonly {
     city?: string;
     country?: string;
     country_name?: string;
     number?: string;
     type?: "toll" | "tollfree";
  }[];
  host_save_video_order?: boolean;
  host_video?: boolean;
  in_meeting?: boolean;
  internal_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  meeting_invitees?: readonly {
     email?: string;
     internal_user?: boolean;
  }[];
  mute_upon_entry?: boolean;
  participant_focused_meeting?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  push_change_to_calendar?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_submit_questions?: boolean;
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     enable?: boolean;
     question_visibility?: "all" | "answered";
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  resources?: readonly {
     permission_level?: "editor" | "commenter" | "viewer";
     resource_id?: string;
     resource_type?: "whiteboard";
  }[];
  show_join_info?: boolean;
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  summary_template_id?: string;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
     mode: "custom" | "follow_setting";
     who_goes_to_waiting_room?:   | "everyone"
        | "users_not_in_account"
        | "users_not_in_account_or_whitelisted_domains"
        | "users_not_on_invite"
        | "users_not_in_org";
  };
  watermark?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
};
```

###### settings.additional\_data\_center\_regions?

```ts
optional additional_data_center_regions?: readonly string[];
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_manage\_cloud\_recording?

```ts
optional alternative_host_manage_cloud_recording?: boolean;
```

###### settings.alternative\_host\_manage\_meeting\_summary?

```ts
optional alternative_host_manage_meeting_summary?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.alternative\_hosts\_email\_notification?

```ts
optional alternative_hosts_email_notification?: boolean;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.approved\_or\_denied\_countries\_or\_regions?

```ts
optional approved_or_denied_countries_or_regions?: {
  approved_list?: readonly string[];
  denied_list?: readonly string[];
  enable?: boolean;
  method?: "approve" | "deny";
};
```

###### settings.approved\_or\_denied\_countries\_or\_regions.approved\_list?

```ts
optional approved_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.denied\_list?

```ts
optional denied_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.enable?

```ts
optional enable?: boolean;
```

###### settings.approved\_or\_denied\_countries\_or\_regions.method?

```ts
optional method?: "approve" | "deny";
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_exception?

```ts
optional authentication_exception?: readonly {
  email?: string;
  join_url?: string;
  name?: string;
}[];
```

###### settings.authentication\_name?

```ts
optional authentication_name?: string;
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_add\_recording\_to\_video\_management?

```ts
optional auto_add_recording_to_video_management?: {
  channels?: readonly {
     channel_id: string;
     name?: string;
  }[];
  enable: boolean;
};
```

###### settings.auto\_add\_recording\_to\_video\_management.channels?

```ts
optional channels?: readonly {
  channel_id: string;
  name?: string;
}[];
```

###### settings.auto\_add\_recording\_to\_video\_management.enable

```ts
enable: boolean;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.auto\_start\_ai\_companion\_questions?

```ts
optional auto_start_ai_companion_questions?: boolean;
```

###### settings.auto\_start\_meeting\_summary?

```ts
optional auto_start_meeting_summary?: boolean;
```

###### settings.breakout\_room?

```ts
optional breakout_room?: {
  enable?: boolean;
  rooms?: readonly {
     name?: string;
     participants?: readonly string[];
  }[];
};
```

###### settings.breakout\_room.enable?

```ts
optional enable?: boolean;
```

###### settings.breakout\_room.rooms?

```ts
optional rooms?: readonly {
  name?: string;
  participants?: readonly string[];
}[];
```

###### settings.calendar\_type?

```ts
optional calendar_type?: 1 | 2;
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.cn\_meeting?

```ts
optional cn_meeting?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.continuous\_meeting\_chat?

```ts
optional continuous_meeting_chat?: {
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
  channel_id?: string;
  enable?: boolean;
};
```

###### settings.continuous\_meeting\_chat.auto\_add\_invited\_external\_users?

```ts
optional auto_add_invited_external_users?: boolean;
```

###### settings.continuous\_meeting\_chat.auto\_add\_meeting\_participants?

```ts
optional auto_add_meeting_participants?: boolean;
```

###### settings.continuous\_meeting\_chat.channel\_id?

```ts
optional channel_id?: string;
```

###### settings.continuous\_meeting\_chat.enable?

```ts
optional enable?: boolean;
```

###### settings.custom\_keys?

```ts
optional custom_keys?: readonly {
  key?: string;
  value?: string;
}[];
```

###### settings.device\_testing?

```ts
optional device_testing?: boolean;
```

###### settings.disable\_participant\_video?

```ts
optional disable_participant_video?: boolean;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_notification?

```ts
optional email_notification?: boolean;
```

###### settings.encryption\_type?

```ts
optional encryption_type?: "enhanced_encryption" | "e2ee";
```

###### settings.enforce\_login?

```ts
optional enforce_login?: boolean;
```

###### settings.enforce\_login\_domains?

```ts
optional enforce_login_domains?: string;
```

###### settings.focus\_mode?

```ts
optional focus_mode?: boolean;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.global\_dial\_in\_numbers?

```ts
optional global_dial_in_numbers?: readonly {
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree";
}[];
```

###### settings.host\_save\_video\_order?

```ts
optional host_save_video_order?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.in\_meeting?

```ts
optional in_meeting?: boolean;
```

###### settings.internal\_meeting?

```ts
optional internal_meeting?: boolean;
```

###### settings.jbh\_time?

```ts
optional jbh_time?: 0 | 5 | 10 | 15;
```

###### settings.join\_before\_host?

```ts
optional join_before_host?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.meeting\_invitees?

```ts
optional meeting_invitees?: readonly {
  email?: string;
  internal_user?: boolean;
}[];
```

###### settings.mute\_upon\_entry?

```ts
optional mute_upon_entry?: boolean;
```

###### settings.participant\_focused\_meeting?

```ts
optional participant_focused_meeting?: boolean;
```

###### settings.participant\_video?

```ts
optional participant_video?: boolean;
```

###### settings.private\_meeting?

```ts
optional private_meeting?: boolean;
```

###### settings.push\_change\_to\_calendar?

```ts
optional push_change_to_calendar?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_submit_questions?: boolean;
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  enable?: boolean;
  question_visibility?: "all" | "answered";
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.question\_and\_answer.question\_visibility?

```ts
optional question_visibility?: "all" | "answered";
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.resources?

```ts
optional resources?: readonly {
  permission_level?: "editor" | "commenter" | "viewer";
  resource_id?: string;
  resource_type?: "whiteboard";
}[];
```

###### settings.show\_join\_info?

```ts
optional show_join_info?: boolean;
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.summary\_template\_id?

```ts
optional summary_template_id?: string;
```

###### settings.use\_pmi?

```ts
optional use_pmi?: boolean;
```

###### settings.waiting\_room?

```ts
optional waiting_room?: boolean;
```

###### settings.waiting\_room\_options?

```ts
optional waiting_room_options?: {
  mode: "custom" | "follow_setting";
  who_goes_to_waiting_room?:   | "everyone"
     | "users_not_in_account"
     | "users_not_in_account_or_whitelisted_domains"
     | "users_not_on_invite"
     | "users_not_in_org";
};
```

###### settings.waiting\_room\_options.mode

```ts
mode: "custom" | "follow_setting";
```

###### settings.waiting\_room\_options.who\_goes\_to\_waiting\_room?

```ts
optional who_goes_to_waiting_room?:
  | "everyone"
  | "users_not_in_account"
  | "users_not_in_account_or_whitelisted_domains"
  | "users_not_on_invite"
  | "users_not_in_org";
```

###### settings.watermark?

```ts
optional watermark?: boolean;
```

###### settings.who\_can\_ask\_questions?

```ts
optional who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
```

###### settings.who\_will\_receive\_summary?

```ts
optional who_will_receive_summary?: 1 | 2 | 3 | 4;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### start\_url?

```ts
optional start_url?: string;
```

###### status?

```ts
optional status?: "started" | "waiting";
```

###### template\_id?

```ts
optional template_id?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
  visible?: boolean;
}[];
```

###### type?

```ts
optional type?: 1 | 2 | 3 | 4 | 8 | 10;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /meetings/\{meetingId\}/invitation

```ts
GET /meetings/{meetingId}/invitation: {
  invitation?: string;
  sip_links?: readonly string[];
};
```

###### invitation?

```ts
optional invitation?: string;
```

###### sip\_links?

```ts
optional sip_links?: readonly string[];
```

##### GET /meetings/\{meetingId\}/jointoken/live\_streaming

```ts
GET /meetings/{meetingId}/jointoken/live_streaming: {
  expire_in?: 120;
  token?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: 120;
```

###### token?

```ts
optional token?: string;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_archiving

```ts
GET /meetings/{meetingId}/jointoken/local_archiving: {
  expire_in?: 120;
  token?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: 120;
```

###### token?

```ts
optional token?: string;
```

##### GET /meetings/\{meetingId\}/jointoken/local\_recording

```ts
GET /meetings/{meetingId}/jointoken/local_recording: {
  expire_in?: 120;
  token?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: 120;
```

###### token?

```ts
optional token?: string;
```

##### GET /meetings/\{meetingId\}/livestream

```ts
GET /meetings/{meetingId}/livestream: {
  page_url?: string;
  resolution?: string;
  stream_key?: string;
  stream_url?: string;
};
```

###### page\_url?

```ts
optional page_url?: string;
```

###### resolution?

```ts
optional resolution?: string;
```

###### stream\_key?

```ts
optional stream_key?: string;
```

###### stream\_url?

```ts
optional stream_url?: string;
```

##### GET /meetings/\{meetingId\}/meeting\_summary

```ts
GET /meetings/{meetingId}/meeting_summary: {
  edited_summary?: {
     next_steps?: readonly string[];
     summary_details?: string;
     summary_overview?: string;
  };
  meeting_end_time?: string;
  meeting_host_email?: string;
  meeting_host_id?: string;
  meeting_id?: number;
  meeting_start_time?: string;
  meeting_topic?: string;
  meeting_uuid?: string;
  next_steps?: readonly string[];
  summary_content?: string;
  summary_created_time?: string;
  summary_details?: readonly {
     label?: string;
     summary?: string;
  }[];
  summary_doc_url?: string;
  summary_end_time?: string;
  summary_last_modified_time?: string;
  summary_last_modified_user_email?: string;
  summary_last_modified_user_id?: string;
  summary_overview?: string;
  summary_start_time?: string;
  summary_title?: string;
};
```

###### edited\_summary?

```ts
optional edited_summary?: {
  next_steps?: readonly string[];
  summary_details?: string;
  summary_overview?: string;
};
```

###### edited\_summary.next\_steps?

```ts
optional next_steps?: readonly string[];
```

###### edited\_summary.summary\_details?

```ts
optional summary_details?: string;
```

###### edited\_summary.summary\_overview?

```ts
optional summary_overview?: string;
```

###### meeting\_end\_time?

```ts
optional meeting_end_time?: string;
```

###### meeting\_host\_email?

```ts
optional meeting_host_email?: string;
```

###### meeting\_host\_id?

```ts
optional meeting_host_id?: string;
```

###### meeting\_id?

```ts
optional meeting_id?: number;
```

###### meeting\_start\_time?

```ts
optional meeting_start_time?: string;
```

###### meeting\_topic?

```ts
optional meeting_topic?: string;
```

###### meeting\_uuid?

```ts
optional meeting_uuid?: string;
```

###### next\_steps?

```ts
optional next_steps?: readonly string[];
```

###### summary\_content?

```ts
optional summary_content?: string;
```

###### summary\_created\_time?

```ts
optional summary_created_time?: string;
```

###### summary\_details?

```ts
optional summary_details?: readonly {
  label?: string;
  summary?: string;
}[];
```

###### summary\_doc\_url?

```ts
optional summary_doc_url?: string;
```

###### summary\_end\_time?

```ts
optional summary_end_time?: string;
```

###### summary\_last\_modified\_time?

```ts
optional summary_last_modified_time?: string;
```

###### summary\_last\_modified\_user\_email?

```ts
optional summary_last_modified_user_email?: string;
```

###### summary\_last\_modified\_user\_id?

```ts
optional summary_last_modified_user_id?: string;
```

###### summary\_overview?

```ts
optional summary_overview?: string;
```

###### summary\_start\_time?

```ts
optional summary_start_time?: string;
```

###### summary\_title?

```ts
optional summary_title?: string;
```

##### GET /meetings/\{meetingId\}/polls

```ts
GET /meetings/{meetingId}/polls: {
  polls?: readonly {
     id?: string;
     status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
   } & {
     anonymous?: boolean;
     poll_type?: 1 | 2 | 3;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        case_sensitive?: boolean;
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
           prompt_right_answers?: readonly string[];
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        right_answers?: readonly string[];
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     title?: string;
  }[];
  total_records?: number;
};
```

###### polls?

```ts
optional polls?: readonly {
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /meetings/\{meetingId\}/polls/\{pollId\}

```ts
GET /meetings/{meetingId}/polls/{pollId}: {
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### status?

```ts
optional status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
```

###### Type Declaration

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### GET /meetings/\{meetingId\}/recordings

```ts
GET /meetings/{meetingId}/recordings: {
  account_id?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  duration?: number;
  external_storage_addr?: string;
  host_id?: string;
  id?: number;
  instance_id?: string;
  rc_meeting_zone_name?: string;
  rc_zone?: string;
  recording_count?: number;
  recording_play_passcode?: string;
  service_name?: string;
  start_time?: string;
  topic?: string;
  total_size?: number;
  type?: "2" | "1" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
  uuid?: string;
  zone_instance_id?: string;
} & {
  recording_files?: readonly {
     deleted_time?: string;
     download_url?: string;
     file_extension?: "MP4" | "M4A" | "CSV" | "TXT" | "VTT" | "JSON" | "JPG";
     file_path?: string;
     file_size?: number;
     file_type?:   | "MP4"
        | "M4A"
        | "CHAT"
        | "CC"
        | "CHAT_MESSAGE"
        | "TRANSCRIPT"
        | "CSV"
        | "TB"
        | "SUMMARY";
     id?: string;
     meeting_id?: string;
     play_url?: string;
     recording_end?: string;
     recording_start?: string;
     recording_type?:   | "summary"
        | "shared_screen_with_speaker_view"
        | "audio_only"
        | "chat_file"
        | "closed_caption"
        | "audio_transcript"
        | "shared_screen_with_speaker_view(CC)"
        | "shared_screen_with_gallery_view"
        | "active_speaker"
        | "gallery_view"
        | "shared_screen"
        | "poll"
        | "host_video"
        | "timeline"
        | "thumbnail"
        | "audio_interpretation"
        | "summary_next_steps"
        | "summary_smart_chapters"
        | "sign_interpretation"
        | "production_studio";
     status?: "completed";
  }[];
} & {
  download_access_token?: string;
  password?: string;
  recording_play_passcode?: string;
} & {
  participant_audio_files?: readonly {
     download_url?: string;
     file_name?: string;
     file_path?: string;
     file_size?: number;
     file_type?: string;
     id?: string;
     play_url?: string;
     recording_end?: string;
     recording_start?: string;
     status?: "completed";
  }[];
};
```

###### Type Declaration

###### account\_id?

```ts
optional account_id?: string;
```

###### auto\_delete?

```ts
optional auto_delete?: boolean;
```

###### auto\_delete\_date?

```ts
optional auto_delete_date?: string;
```

###### duration?

```ts
optional duration?: number;
```

###### external\_storage\_addr?

```ts
optional external_storage_addr?: string;
```

###### host\_id?

```ts
optional host_id?: string;
```

###### id?

```ts
optional id?: number;
```

###### instance\_id?

```ts
optional instance_id?: string;
```

###### rc\_meeting\_zone\_name?

```ts
optional rc_meeting_zone_name?: string;
```

###### rc\_zone?

```ts
optional rc_zone?: string;
```

###### recording\_count?

```ts
optional recording_count?: number;
```

###### recording\_play\_passcode?

```ts
optional recording_play_passcode?: string;
```

###### service\_name?

```ts
optional service_name?: string;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### total\_size?

```ts
optional total_size?: number;
```

###### type?

```ts
optional type?: "2" | "1" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
```

###### uuid?

```ts
optional uuid?: string;
```

###### zone\_instance\_id?

```ts
optional zone_instance_id?: string;
```

###### Type Declaration

###### recording\_files?

```ts
optional recording_files?: readonly {
  deleted_time?: string;
  download_url?: string;
  file_extension?: "MP4" | "M4A" | "CSV" | "TXT" | "VTT" | "JSON" | "JPG";
  file_path?: string;
  file_size?: number;
  file_type?:   | "MP4"
     | "M4A"
     | "CHAT"
     | "CC"
     | "CHAT_MESSAGE"
     | "TRANSCRIPT"
     | "CSV"
     | "TB"
     | "SUMMARY";
  id?: string;
  meeting_id?: string;
  play_url?: string;
  recording_end?: string;
  recording_start?: string;
  recording_type?:   | "summary"
     | "shared_screen_with_speaker_view"
     | "audio_only"
     | "chat_file"
     | "closed_caption"
     | "audio_transcript"
     | "shared_screen_with_speaker_view(CC)"
     | "shared_screen_with_gallery_view"
     | "active_speaker"
     | "gallery_view"
     | "shared_screen"
     | "poll"
     | "host_video"
     | "timeline"
     | "thumbnail"
     | "audio_interpretation"
     | "summary_next_steps"
     | "summary_smart_chapters"
     | "sign_interpretation"
     | "production_studio";
  status?: "completed";
}[];
```

###### Type Declaration

###### download\_access\_token?

```ts
optional download_access_token?: string;
```

###### password?

```ts
optional password?: string;
```

###### recording\_play\_passcode?

```ts
optional recording_play_passcode?: string;
```

###### Type Declaration

###### participant\_audio\_files?

```ts
optional participant_audio_files?: readonly {
  download_url?: string;
  file_name?: string;
  file_path?: string;
  file_size?: number;
  file_type?: string;
  id?: string;
  play_url?: string;
  recording_end?: string;
  recording_start?: string;
  status?: "completed";
}[];
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_details

```ts
GET /meetings/{meetingId}/recordings/analytics_details: {
  analytics_details?: readonly {
     date_time?: string;
     duration?: number;
     email?: string;
     name?: string;
  }[];
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  total_records?: number;
};
```

###### analytics\_details?

```ts
optional analytics_details?: readonly {
  date_time?: string;
  duration?: number;
  email?: string;
  name?: string;
}[];
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /meetings/\{meetingId\}/recordings/analytics\_summary

```ts
GET /meetings/{meetingId}/recordings/analytics_summary: {
  analytics_summary?: readonly {
     date?: string;
     downloads_total_count?: number;
     views_total_count?: number;
  }[];
  from?: string;
  to?: string;
};
```

###### analytics\_summary?

```ts
optional analytics_summary?: readonly {
  date?: string;
  downloads_total_count?: number;
  views_total_count?: number;
}[];
```

###### from?

```ts
optional from?: string;
```

###### to?

```ts
optional to?: string;
```

##### GET /meetings/\{meetingId\}/recordings/registrants

```ts
GET /meetings/{meetingId}/recordings/registrants: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### registrants?

```ts
optional registrants?: readonly {
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
}[];
```

##### GET /meetings/\{meetingId\}/recordings/registrants/questions

```ts
GET /meetings/{meetingId}/recordings/registrants/questions: {
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "single" | "multiple";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
};
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  answers?: readonly string[];
  required?: boolean;
  title?: string;
  type?: "short" | "single" | "multiple";
}[];
```

###### questions?

```ts
optional questions?: readonly {
  field_name?:   | "state"
     | "phone"
     | "last_name"
     | "address"
     | "city"
     | "country"
     | "zip"
     | "industry"
     | "org"
     | "job_title"
     | "purchasing_time_frame"
     | "role_in_purchase_process"
     | "no_of_employees"
     | "comments";
  required?: boolean;
}[];
```

##### GET /meetings/\{meetingId\}/recordings/settings

```ts
GET /meetings/{meetingId}/recordings/settings: {
  approval_type?: 0 | 1 | 2;
  authentication_domains?: string;
  authentication_name?: string;
  authentication_option?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  on_demand?: boolean;
  password?: string;
  recording_authentication?: boolean;
  send_email_to_host?: boolean;
  share_recording?: "none" | "publicly" | "internally";
  show_social_share_buttons?: boolean;
  topic?: string;
  viewer_download?: boolean;
};
```

###### approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### authentication\_name?

```ts
optional authentication_name?: string;
```

###### authentication\_option?

```ts
optional authentication_option?: string;
```

###### auto\_delete?

```ts
optional auto_delete?: boolean;
```

###### auto\_delete\_date?

```ts
optional auto_delete_date?: string;
```

###### on\_demand?

```ts
optional on_demand?: boolean;
```

###### password?

```ts
optional password?: string;
```

###### recording\_authentication?

```ts
optional recording_authentication?: boolean;
```

###### send\_email\_to\_host?

```ts
optional send_email_to_host?: boolean;
```

###### share\_recording?

```ts
optional share_recording?: "none" | "publicly" | "internally";
```

###### show\_social\_share\_buttons?

```ts
optional show_social_share_buttons?: boolean;
```

###### topic?

```ts
optional topic?: string;
```

###### viewer\_download?

```ts
optional viewer_download?: boolean;
```

##### GET /meetings/\{meetingId\}/registrants

```ts
GET /meetings/{meetingId}/registrants: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
   } & {
     create_time?: string;
     join_url?: string;
     participant_pin_code?: number;
     status?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### registrants?

```ts
optional registrants?: readonly {
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
} & {
  create_time?: string;
  join_url?: string;
  participant_pin_code?: number;
  status?: string;
}[];
```

##### GET /meetings/\{meetingId\}/registrants/\{registrantId\}

```ts
GET /meetings/{meetingId}/registrants/{registrantId}: {
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
} & {
  create_time?: string;
  join_url?: string;
  participant_pin_code?: number;
  status?: "pending" | "approved" | "denied";
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### Type Declaration

###### address?

```ts
optional address?: string;
```

###### city?

```ts
optional city?: string;
```

###### comments?

```ts
optional comments?: string;
```

###### country?

```ts
optional country?: string;
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  title?: string;
  value?: string;
}[];
```

###### email

```ts
email: string;
```

###### first\_name

```ts
first_name: string;
```

###### industry?

```ts
optional industry?: string;
```

###### job\_title?

```ts
optional job_title?: string;
```

###### last\_name?

```ts
optional last_name?: string;
```

###### no\_of\_employees?

```ts
optional no_of_employees?:
  | ""
  | "1-20"
  | "21-50"
  | "51-100"
  | "101-250"
  | "251-500"
  | "501-1,000"
  | "1,001-5,000"
  | "5,001-10,000"
  | "More than 10,000";
```

###### org?

```ts
optional org?: string;
```

###### phone?

```ts
optional phone?: string;
```

###### purchasing\_time\_frame?

```ts
optional purchasing_time_frame?:
  | ""
  | "Within a month"
  | "1-3 months"
  | "4-6 months"
  | "More than 6 months"
  | "No timeframe";
```

###### role\_in\_purchase\_process?

```ts
optional role_in_purchase_process?:
  | ""
  | "Decision Maker"
  | "Evaluator/Recommender"
  | "Influencer"
  | "Not involved";
```

###### state?

```ts
optional state?: string;
```

###### status?

```ts
optional status?: "pending" | "approved" | "denied";
```

###### zip?

```ts
optional zip?: string;
```

###### Type Declaration

###### create\_time?

```ts
optional create_time?: string;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### participant\_pin\_code?

```ts
optional participant_pin_code?: number;
```

###### status?

```ts
optional status?: "pending" | "approved" | "denied";
```

##### GET /meetings/\{meetingId\}/registrants/questions

```ts
GET /meetings/{meetingId}/registrants/questions: {
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "single";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
};
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  answers?: readonly string[];
  required?: boolean;
  title?: string;
  type?: "short" | "single";
}[];
```

###### questions?

```ts
optional questions?: readonly {
  field_name?:   | "state"
     | "phone"
     | "last_name"
     | "address"
     | "city"
     | "country"
     | "zip"
     | "industry"
     | "org"
     | "job_title"
     | "purchasing_time_frame"
     | "role_in_purchase_process"
     | "no_of_employees"
     | "comments";
  required?: boolean;
}[];
```

##### GET /meetings/\{meetingId\}/survey

```ts
GET /meetings/{meetingId}/survey: {
  custom_survey?: {
     anonymous?: boolean;
     feedback?: string;
     numbered_questions?: boolean;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     show_question_type?: boolean;
     title?: string;
  };
  show_in_the_browser?: boolean;
  third_party_survey?: string;
};
```

###### custom\_survey?

```ts
optional custom_survey?: {
  anonymous?: boolean;
  feedback?: string;
  numbered_questions?: boolean;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  show_question_type?: boolean;
  title?: string;
};
```

###### custom\_survey.anonymous?

```ts
optional anonymous?: boolean;
```

###### custom\_survey.feedback?

```ts
optional feedback?: string;
```

###### custom\_survey.numbered\_questions?

```ts
optional numbered_questions?: boolean;
```

###### custom\_survey.questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### custom\_survey.show\_question\_type?

```ts
optional show_question_type?: boolean;
```

###### custom\_survey.title?

```ts
optional title?: string;
```

###### show\_in\_the\_browser?

```ts
optional show_in_the_browser?: boolean;
```

###### third\_party\_survey?

```ts
optional third_party_survey?: string;
```

##### GET /meetings/\{meetingId\}/token

```ts
GET /meetings/{meetingId}/token: {
  token?: string;
};
```

###### token?

```ts
optional token?: string;
```

##### GET /meetings/\{meetingId\}/transcript

```ts
GET /meetings/{meetingId}/transcript: {
  account_id?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  can_download?: boolean;
  download_restriction_reason?:   | "DELETED_OR_TRASHED"
     | "UNSUPPORTED"
     | "NO_TRANSCRIPT_DATA"
     | "NOT_READY";
  download_url?: string;
  host_id?: string;
  meeting_id?: string;
  meeting_topic?: string;
  transcript_created_time?: string;
};
```

###### account\_id?

```ts
optional account_id?: string;
```

###### auto\_delete?

```ts
optional auto_delete?: boolean;
```

###### auto\_delete\_date?

```ts
optional auto_delete_date?: string;
```

###### can\_download?

```ts
optional can_download?: boolean;
```

###### download\_restriction\_reason?

```ts
optional download_restriction_reason?:
  | "DELETED_OR_TRASHED"
  | "UNSUPPORTED"
  | "NO_TRANSCRIPT_DATA"
  | "NOT_READY";
```

###### download\_url?

```ts
optional download_url?: string;
```

###### host\_id?

```ts
optional host_id?: string;
```

###### meeting\_id?

```ts
optional meeting_id?: string;
```

###### meeting\_topic?

```ts
optional meeting_topic?: string;
```

###### transcript\_created\_time?

```ts
optional transcript_created_time?: string;
```

##### GET /meetings/meeting\_summaries

```ts
GET /meetings/meeting_summaries: {
  from?: string;
  next_page_token?: string;
  page_size?: number;
  summaries?: readonly {
     meeting_end_time?: string;
     meeting_host_email?: string;
     meeting_host_id?: string;
     meeting_id?: number;
     meeting_start_time?: string;
     meeting_topic?: string;
     meeting_uuid?: string;
     summary_created_time?: string;
     summary_end_time?: string;
     summary_last_modified_time?: string;
     summary_start_time?: string;
  }[];
  to?: string;
};
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### summaries?

```ts
optional summaries?: readonly {
  meeting_end_time?: string;
  meeting_host_email?: string;
  meeting_host_id?: string;
  meeting_id?: number;
  meeting_start_time?: string;
  meeting_topic?: string;
  meeting_uuid?: string;
  summary_created_time?: string;
  summary_end_time?: string;
  summary_last_modified_time?: string;
  summary_start_time?: string;
}[];
```

###### to?

```ts
optional to?: string;
```

##### GET /past\_meetings/\{meetingId\}

```ts
GET /past_meetings/{meetingId}: {
  dept?: string;
  duration?: number;
  end_time?: string;
  has_meeting_summary?: boolean;
  host_id?: string;
  id?: number;
  participants_count?: number;
  source?: string;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  type?: 0 | 1 | 2 | 3 | 4 | 7 | 8;
  user_email?: string;
  user_name?: string;
  uuid?: string;
};
```

###### dept?

```ts
optional dept?: string;
```

###### duration?

```ts
optional duration?: number;
```

###### end\_time?

```ts
optional end_time?: string;
```

###### has\_meeting\_summary?

```ts
optional has_meeting_summary?: boolean;
```

###### host\_id?

```ts
optional host_id?: string;
```

###### id?

```ts
optional id?: number;
```

###### participants\_count?

```ts
optional participants_count?: number;
```

###### source?

```ts
optional source?: string;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### total\_minutes?

```ts
optional total_minutes?: number;
```

###### type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 7 | 8;
```

###### user\_email?

```ts
optional user_email?: string;
```

###### user\_name?

```ts
optional user_name?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /past\_meetings/\{meetingId\}/instances

```ts
GET /past_meetings/{meetingId}/instances: {
  meetings?: readonly {
     start_time?: string;
     uuid?: string;
  }[];
};
```

###### meetings?

```ts
optional meetings?: readonly {
  start_time?: string;
  uuid?: string;
}[];
```

##### GET /past\_meetings/\{meetingId\}/participants

```ts
GET /past_meetings/{meetingId}/participants: {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  participants?: readonly {
     duration?: number;
     failover?: boolean;
     id?: string;
     internal_user?: boolean;
     join_time?: string;
     leave_time?: string;
     name?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
  total_records?: number;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### participants?

```ts
optional participants?: readonly {
  duration?: number;
  failover?: boolean;
  id?: string;
  internal_user?: boolean;
  join_time?: string;
  leave_time?: string;
  name?: string;
  registrant_id?: string;
  status?: "in_meeting" | "in_waiting_room";
  user_email?: string;
  user_id?: string;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /past\_meetings/\{meetingId\}/polls

```ts
GET /past_meetings/{meetingId}/polls: {
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     date_time?: string;
     polling_id?: string;
     question?: string;
  }[];
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /past\_meetings/\{meetingId\}/qa

```ts
GET /past_meetings/{meetingId}/qa: {
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     question?: string;
  }[];
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /past\_meetings/\{meetingUUID\}/archive\_files

```ts
GET /past_meetings/{meetingUUID}/archive_files: {
  account_name: string;
  archive_files: readonly {
     auto_delete?: boolean;
     download_url: string;
     encryption_fingerprint: string;
     file_extension: string;
     file_path?: string;
     file_size: number;
     file_type:   | "MP4"
        | "M4A"
        | "CHAT"
        | "CC"
        | "CHAT_MESSAGE"
        | "TRANSCRIPT"
        | "SUB_GROUP_MEMBER_LOG"
        | "AIC_COVERSATION";
     id: string;
     individual: boolean;
     number_of_messages?: number;
     participant_email?: string;
     participant_join_time: string;
     participant_leave_time: string;
     recording_type:   | "shared_screen_with_speaker_view"
        | "audio_only"
        | "chat_file"
        | "closed_caption"
        | "chat_message"
        | "audio_transcript"
        | "aic_conversation";
     status: "failed" | "completed" | "processing";
     storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
  }[];
  complete_time:   | {
   }
     | "";
  duration: number;
  duration_in_second: number;
  group_id?: string;
  host_id: string;
  id: number;
  is_breakout_room: boolean;
  meeting_type: "internal" | "external";
  parent_meeting_id?: string;
  physical_files?: readonly {
     download_url?: string;
     file_id?: string;
     file_name?: string;
     file_size?: number;
  }[];
  recording_count: number;
  start_time: string;
  status: "completed" | "processing";
  timezone: string;
  topic: string;
  total_size: number;
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
  uuid: string;
};
```

###### account\_name

```ts
account_name: string;
```

###### archive\_files

```ts
archive_files: readonly {
  auto_delete?: boolean;
  download_url: string;
  encryption_fingerprint: string;
  file_extension: string;
  file_path?: string;
  file_size: number;
  file_type:   | "MP4"
     | "M4A"
     | "CHAT"
     | "CC"
     | "CHAT_MESSAGE"
     | "TRANSCRIPT"
     | "SUB_GROUP_MEMBER_LOG"
     | "AIC_COVERSATION";
  id: string;
  individual: boolean;
  number_of_messages?: number;
  participant_email?: string;
  participant_join_time: string;
  participant_leave_time: string;
  recording_type:   | "shared_screen_with_speaker_view"
     | "audio_only"
     | "chat_file"
     | "closed_caption"
     | "chat_message"
     | "audio_transcript"
     | "aic_conversation";
  status: "failed" | "completed" | "processing";
  storage_location?: "US" | "AU" | "BR" | "CA" | "EU" | "IN" | "JP" | "SG" | "CH";
}[];
```

###### complete\_time

```ts
complete_time:
  | {
}
  | "";
```

###### duration

```ts
duration: number;
```

###### duration\_in\_second

```ts
duration_in_second: number;
```

###### group\_id?

```ts
optional group_id?: string;
```

###### host\_id

```ts
host_id: string;
```

###### id

```ts
id: number;
```

###### is\_breakout\_room

```ts
is_breakout_room: boolean;
```

###### meeting\_type

```ts
meeting_type: "internal" | "external";
```

###### parent\_meeting\_id?

```ts
optional parent_meeting_id?: string;
```

###### physical\_files?

```ts
optional physical_files?: readonly {
  download_url?: string;
  file_id?: string;
  file_name?: string;
  file_size?: number;
}[];
```

###### recording\_count

```ts
recording_count: number;
```

###### start\_time

```ts
start_time: string;
```

###### status

```ts
status: "completed" | "processing";
```

###### timezone

```ts
timezone: string;
```

###### topic

```ts
topic: string;
```

###### total\_size

```ts
total_size: number;
```

###### type

```ts
type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
```

###### uuid

```ts
uuid: string;
```

##### GET /past\_webinars/\{webinarId\}/absentees

```ts
GET /past_webinars/{webinarId}/absentees: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
   } & {
     create_time?: string;
     join_url?: string;
     status?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### registrants?

```ts
optional registrants?: readonly {
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
} & {
  create_time?: string;
  join_url?: string;
  status?: string;
}[];
```

##### GET /past\_webinars/\{webinarId\}/instances

```ts
GET /past_webinars/{webinarId}/instances: {
  webinars?: readonly {
     start_time?: string;
     uuid?: string;
  }[];
};
```

###### webinars?

```ts
optional webinars?: readonly {
  start_time?: string;
  uuid?: string;
}[];
```

##### GET /past\_webinars/\{webinarId\}/participants

```ts
GET /past_webinars/{webinarId}/participants: {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  participants?: readonly {
     duration?: number;
     failover?: boolean;
     id?: string;
     internal_user?: boolean;
     join_time?: string;
     leave_time?: string;
     name?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
  total_records?: number;
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### participants?

```ts
optional participants?: readonly {
  duration?: number;
  failover?: boolean;
  id?: string;
  internal_user?: boolean;
  join_time?: string;
  leave_time?: string;
  name?: string;
  registrant_id?: string;
  status?: "in_meeting" | "in_waiting_room";
  user_email?: string;
  user_id?: string;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /past\_webinars/\{webinarId\}/polls

```ts
GET /past_webinars/{webinarId}/polls: {
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     date_time?: string;
     polling_id?: string;
     question?: string;
  }[];
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /past\_webinars/\{webinarId\}/qa

```ts
GET /past_webinars/{webinarId}/qa: {
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     question?: string;
  }[];
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /report/activities

```ts
GET /report/activities: {
  activity_logs?: readonly {
     client_type?: string;
     email?: string;
     ip_address?: string;
     time?: string;
     type?: "Sign in" | "Sign out";
     version?: string;
  }[];
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
};
```

###### activity\_logs?

```ts
optional activity_logs?: readonly {
  client_type?: string;
  email?: string;
  ip_address?: string;
  time?: string;
  type?: "Sign in" | "Sign out";
  version?: string;
}[];
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

##### GET /report/billing

```ts
GET /report/billing: {
  billing_reports?: readonly {
     end_date?: string;
     id?: string;
     start_date?: string;
     tax_amount?: string;
     total_amount?: string;
     type?: 0 | 1;
  }[];
  currency?: string;
};
```

###### billing\_reports?

```ts
optional billing_reports?: readonly {
  end_date?: string;
  id?: string;
  start_date?: string;
  tax_amount?: string;
  total_amount?: string;
  type?: 0 | 1;
}[];
```

###### currency?

```ts
optional currency?: string;
```

##### GET /report/billing/invoices

```ts
GET /report/billing/invoices: {
  currency?: string;
  invoices?: readonly {
     end_date?: string;
     invoice_charge_name?: string;
     invoice_number?: string;
     quantity?: number;
     start_date?: string;
     tax_amount?: string;
     total_amount?: string;
  }[];
};
```

###### currency?

```ts
optional currency?: string;
```

###### invoices?

```ts
optional invoices?: readonly {
  end_date?: string;
  invoice_charge_name?: string;
  invoice_number?: string;
  quantity?: number;
  start_date?: string;
  tax_amount?: string;
  total_amount?: string;
}[];
```

##### GET /report/cloud\_recording

```ts
GET /report/cloud_recording: {
  from?: string;
  to?: string;
} & {
  cloud_recording_storage?: readonly {
     date?: string;
     free_usage?: string;
     plan_usage?: string;
     usage?: string;
  }[];
};
```

###### Type Declaration

###### from?

```ts
optional from?: string;
```

###### to?

```ts
optional to?: string;
```

###### Type Declaration

###### cloud\_recording\_storage?

```ts
optional cloud_recording_storage?: readonly {
  date?: string;
  free_usage?: string;
  plan_usage?: string;
  usage?: string;
}[];
```

##### GET /report/daily

```ts
GET /report/daily: {
  dates?: readonly {
     date?: string;
     meeting_minutes?: number;
     meetings?: number;
     new_users?: number;
     participants?: number;
  }[];
  month?: number;
  year?: number;
};
```

###### dates?

```ts
optional dates?: readonly {
  date?: string;
  meeting_minutes?: number;
  meetings?: number;
  new_users?: number;
  participants?: number;
}[];
```

###### month?

```ts
optional month?: number;
```

###### year?

```ts
optional year?: number;
```

##### GET /report/disclaimer

```ts
GET /report/disclaimer: {
  disclaimer_records?: readonly {
     client_type?: string;
     disclaimer_status?: "Agree" | "Cancel" | "Passive Agree" | "Decline Attend";
     disclaimer_type?: string;
     display_name?: string;
     group_ids?: readonly string[];
     is_guest?: boolean;
     is_zoom_event?: boolean;
     meeting_id?: string;
     meeting_number?: number;
     time?: string;
     user_email?: string;
  }[];
  next_page_token?: string;
  page_size?: number;
};
```

###### disclaimer\_records?

```ts
optional disclaimer_records?: readonly {
  client_type?: string;
  disclaimer_status?: "Agree" | "Cancel" | "Passive Agree" | "Decline Attend";
  disclaimer_type?: string;
  display_name?: string;
  group_ids?: readonly string[];
  is_guest?: boolean;
  is_zoom_event?: boolean;
  meeting_id?: string;
  meeting_number?: number;
  time?: string;
  user_email?: string;
}[];
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /report/history\_meetings

```ts
GET /report/history_meetings: {
  history_meetings?: readonly {
     create_time?: string;
     custom_fields?: readonly {
        key?: string;
        value?: string;
     }[];
     department?: string;
     duration?: number;
     end_time?: string;
     feature_used?: {
        annotation?: boolean;
        avatar?: boolean;
        breakout_room?: boolean;
        closed_caption?: boolean;
        color_themes?: boolean;
        document_collaboration?: boolean;
        file_sharing?: boolean;
        gen_ai_virtual_background?: boolean;
        immersive_scene?: boolean;
        in_meeting_chat?: boolean;
        join_by_room?: boolean;
        language_interpretation?: boolean;
        live_transcription?: boolean;
        live_translation?: boolean;
        meeting_questions?: boolean;
        meeting_summary?: boolean;
        meeting_wallpaper?: boolean;
        multi_share?: boolean;
        multi_speaker?: boolean;
        personalized_audio_isolation?: boolean;
        poll?: boolean;
        portrait_lighting?: boolean;
        raise_hand?: boolean;
        reaction?: boolean;
        record_to_cloud?: boolean;
        record_to_computer?: boolean;
        registration?: boolean;
        remote_control?: boolean;
        screen_sharing?: boolean;
        smart_recording?: boolean;
        switch_to_mobile?: boolean;
        telephone_usage?: boolean;
        video_on?: boolean;
        virtual_background?: boolean;
        waiting_room?: boolean;
        whiteboard?: boolean;
        zoom_apps?: boolean;
     };
     group?: readonly string[];
     host_display_name?: string;
     host_email?: string;
     max_concurrent_views?: number;
     meeting_id?: number;
     meeting_uuid?: string;
     participants?: number;
     source?: string;
     start_time?: string;
     topic?: string;
     total_participant_minutes?: number;
     tracking_fields?: readonly {
        field?: string;
        value?: string;
     }[];
     type?: "Meeting" | "Webinar";
     unique_viewers?: number;
  }[];
  next_page_token?: string;
  page_size?: number;
};
```

###### history\_meetings?

```ts
optional history_meetings?: readonly {
  create_time?: string;
  custom_fields?: readonly {
     key?: string;
     value?: string;
  }[];
  department?: string;
  duration?: number;
  end_time?: string;
  feature_used?: {
     annotation?: boolean;
     avatar?: boolean;
     breakout_room?: boolean;
     closed_caption?: boolean;
     color_themes?: boolean;
     document_collaboration?: boolean;
     file_sharing?: boolean;
     gen_ai_virtual_background?: boolean;
     immersive_scene?: boolean;
     in_meeting_chat?: boolean;
     join_by_room?: boolean;
     language_interpretation?: boolean;
     live_transcription?: boolean;
     live_translation?: boolean;
     meeting_questions?: boolean;
     meeting_summary?: boolean;
     meeting_wallpaper?: boolean;
     multi_share?: boolean;
     multi_speaker?: boolean;
     personalized_audio_isolation?: boolean;
     poll?: boolean;
     portrait_lighting?: boolean;
     raise_hand?: boolean;
     reaction?: boolean;
     record_to_cloud?: boolean;
     record_to_computer?: boolean;
     registration?: boolean;
     remote_control?: boolean;
     screen_sharing?: boolean;
     smart_recording?: boolean;
     switch_to_mobile?: boolean;
     telephone_usage?: boolean;
     video_on?: boolean;
     virtual_background?: boolean;
     waiting_room?: boolean;
     whiteboard?: boolean;
     zoom_apps?: boolean;
  };
  group?: readonly string[];
  host_display_name?: string;
  host_email?: string;
  max_concurrent_views?: number;
  meeting_id?: number;
  meeting_uuid?: string;
  participants?: number;
  source?: string;
  start_time?: string;
  topic?: string;
  total_participant_minutes?: number;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
  }[];
  type?: "Meeting" | "Webinar";
  unique_viewers?: number;
}[];
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /report/meeting\_activities

```ts
GET /report/meeting_activities: {
  meeting_activity_logs?: readonly {
     activity_category: string;
     activity_detail: string;
     activity_time: string;
     meeting_number: string;
     operator: string;
     operator_email: string;
  }[];
  next_page_token?: string;
  page_size?: number;
};
```

###### meeting\_activity\_logs?

```ts
optional meeting_activity_logs?: readonly {
  activity_category: string;
  activity_detail: string;
  activity_time: string;
  meeting_number: string;
  operator: string;
  operator_email: string;
}[];
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

##### GET /report/meetings/\{meetingId\}

```ts
GET /report/meetings/{meetingId}: {
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  dept?: string;
  duration?: number;
  end_time?: string;
  id?: number;
  participants_count?: number;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
  }[];
  type?: number;
  user_email?: string;
  user_name?: string;
  uuid?: string;
};
```

###### custom\_keys?

```ts
optional custom_keys?: readonly {
  key?: string;
  value?: string;
}[];
```

###### dept?

```ts
optional dept?: string;
```

###### duration?

```ts
optional duration?: number;
```

###### end\_time?

```ts
optional end_time?: string;
```

###### id?

```ts
optional id?: number;
```

###### participants\_count?

```ts
optional participants_count?: number;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### total\_minutes?

```ts
optional total_minutes?: number;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
}[];
```

###### type?

```ts
optional type?: number;
```

###### user\_email?

```ts
optional user_email?: string;
```

###### user\_name?

```ts
optional user_name?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /report/meetings/\{meetingId\}/participants

```ts
GET /report/meetings/{meetingId}/participants: {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  participants?: readonly {
     bo_mtg_id?: string;
     customer_key?: string;
     duration?: number;
     failover?: boolean;
     id?: string;
     join_time?: string;
     leave_time?: string;
     name?: string;
     participant_user_id?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### participants?

```ts
optional participants?: readonly {
  bo_mtg_id?: string;
  customer_key?: string;
  duration?: number;
  failover?: boolean;
  id?: string;
  join_time?: string;
  leave_time?: string;
  name?: string;
  participant_user_id?: string;
  registrant_id?: string;
  status?: "in_meeting" | "in_waiting_room";
  user_email?: string;
  user_id?: string;
}[];
```

##### GET /report/meetings/\{meetingId\}/polls

```ts
GET /report/meetings/{meetingId}/polls: {
  id?: number;
  questions?: readonly {
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     date_time?: string;
     polling_id?: string;
     question?: string;
  }[];
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /report/meetings/\{meetingId\}/qa

```ts
GET /report/meetings/{meetingId}/qa: {
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        answer_details?: readonly {
           content?: string;
           create_time?: string;
           email?: string;
           name?: string;
           type?:   | "default"
              | "host_answered_publicly"
              | "host_answered_privately"
              | "participant_commented"
              | "host_answered";
           user_id?: string;
        }[];
        create_time?: string;
        question?: string;
        question_id?: string;
        question_status?: "open" | "answered" | "default" | "deleted" | "dismissed";
     }[];
     user_id?: string;
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     answer_details?: readonly {
        content?: string;
        create_time?: string;
        email?: string;
        name?: string;
        type?:   | "default"
           | "host_answered_publicly"
           | "host_answered_privately"
           | "participant_commented"
           | "host_answered";
        user_id?: string;
     }[];
     create_time?: string;
     question?: string;
     question_id?: string;
     question_status?: "open" | "answered" | "default" | "deleted" | "dismissed";
  }[];
  user_id?: string;
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /report/meetings/\{meetingId\}/survey

```ts
GET /report/meetings/{meetingId}/survey: {
  meeting_id?: number;
  meeting_uuid?: string;
  start_time?: string;
  survey_answers?: readonly {
     answer_details?: readonly {
        answer?: string;
        date_time?: string;
        question?: string;
        question_id?: string;
     }[];
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
  }[];
  survey_id?: string;
  survey_name?: string;
};
```

###### meeting\_id?

```ts
optional meeting_id?: number;
```

###### meeting\_uuid?

```ts
optional meeting_uuid?: string;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### survey\_answers?

```ts
optional survey_answers?: readonly {
  answer_details?: readonly {
     answer?: string;
     date_time?: string;
     question?: string;
     question_id?: string;
  }[];
  email?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
}[];
```

###### survey\_id?

```ts
optional survey_id?: string;
```

###### survey\_name?

```ts
optional survey_name?: string;
```

##### GET /report/operationlogs

```ts
GET /report/operationlogs: {
  next_page_token?: string;
  page_size?: number;
} & {
  operation_logs?: readonly {
     action?: string;
     category_type?: string;
     operation_detail?: string;
     operator?: string;
     time?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### Type Declaration

###### operation\_logs?

```ts
optional operation_logs?: readonly {
  action?: string;
  category_type?: string;
  operation_detail?: string;
  operator?: string;
  time?: string;
}[];
```

##### GET /report/remote\_support

```ts
GET /report/remote_support: {
  next_page_token?: string;
  page_size?: number;
  remote_support_logs?: readonly {
     duration?: string;
     end_time?: string;
     meeting_host_id?: string;
     meeting_number?: number;
     meeting_start_time?: string;
     meeting_uuid?: string;
     request_time?: string;
     start_time?: string;
     supportee_email?: string;
     supportee_name?: string;
     supporter_email?: string;
     supporter_name?: string;
     topic?: string;
     wait_time?: string;
  }[];
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### remote\_support\_logs?

```ts
optional remote_support_logs?: readonly {
  duration?: string;
  end_time?: string;
  meeting_host_id?: string;
  meeting_number?: number;
  meeting_start_time?: string;
  meeting_uuid?: string;
  request_time?: string;
  start_time?: string;
  supportee_email?: string;
  supportee_name?: string;
  supporter_email?: string;
  supporter_name?: string;
  topic?: string;
  wait_time?: string;
}[];
```

##### GET /report/telephone

```ts
GET /report/telephone: {
  from?: string;
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  to?: string;
  total_records?: number;
} & {
  telephony_usage?: readonly {
     call_in_number?: string;
     country_name?: string;
     dept?: string;
     duration?: number;
     end_time?: string;
     host_email?: string;
     host_id?: string;
     host_name?: string;
     meeting_id?: number;
     meeting_type?: string;
     phone_number?: string;
     rate?: number;
     signaled_number?: string;
     start_time?: string;
     total?: number;
     type?:   | "toll-free"
        | "call-out"
        | "call-in"
        | "US toll-number"
        | "global toll-number"
        | "premium"
        | "premium call-in"
        | "Toll";
     uuid?: string;
  }[];
};
```

###### Type Declaration

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### telephony\_usage?

```ts
optional telephony_usage?: readonly {
  call_in_number?: string;
  country_name?: string;
  dept?: string;
  duration?: number;
  end_time?: string;
  host_email?: string;
  host_id?: string;
  host_name?: string;
  meeting_id?: number;
  meeting_type?: string;
  phone_number?: string;
  rate?: number;
  signaled_number?: string;
  start_time?: string;
  total?: number;
  type?:   | "toll-free"
     | "call-out"
     | "call-in"
     | "US toll-number"
     | "global toll-number"
     | "premium"
     | "premium call-in"
     | "Toll";
  uuid?: string;
}[];
```

##### GET /report/upcoming\_events

```ts
GET /report/upcoming_events: {
  from?: string;
  next_page_token?: string;
  page_size?: number;
  to?: string;
  upcoming_events?: readonly {
     dept?: string;
     host_id?: string;
     host_name?: string;
     id?: string;
     start_time?: string;
     topic?: string;
  }[];
};
```

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

###### upcoming\_events?

```ts
optional upcoming_events?: readonly {
  dept?: string;
  host_id?: string;
  host_name?: string;
  id?: string;
  start_time?: string;
  topic?: string;
}[];
```

##### GET /report/users

```ts
GET /report/users: {
  from?: string;
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  to?: string;
  total_records?: number;
} & {
  total_meeting_minutes?: number;
  total_meetings?: number;
  total_participants?: number;
  users?: readonly {
     custom_attributes?: readonly {
        key?: string;
        name?: string;
        value?: string;
     }[];
     dept?: string;
     email?: string;
     id?: string;
     meeting_minutes?: number;
     meetings?: number;
     participants?: number;
     type?: number;
     user_name?: string;
  }[];
};
```

###### Type Declaration

###### from?

```ts
optional from?: string;
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### to?

```ts
optional to?: string;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### total\_meeting\_minutes?

```ts
optional total_meeting_minutes?: number;
```

###### total\_meetings?

```ts
optional total_meetings?: number;
```

###### total\_participants?

```ts
optional total_participants?: number;
```

###### users?

```ts
optional users?: readonly {
  custom_attributes?: readonly {
     key?: string;
     name?: string;
     value?: string;
  }[];
  dept?: string;
  email?: string;
  id?: string;
  meeting_minutes?: number;
  meetings?: number;
  participants?: number;
  type?: number;
  user_name?: string;
}[];
```

##### GET /report/users/\{userId\}/meetings

```ts
GET /report/users/{userId}/meetings: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  from?: string;
  meetings?: readonly {
     custom_keys?: readonly {
        key?: string;
        value?: string;
     }[];
     duration?: number;
     end_time?: string;
     has_chat?: boolean;
     has_recording?: boolean;
     has_screen_share?: boolean;
     host_name?: string;
     host_organization?: string;
     id?: number;
     join_time?: string;
     join_waiting_room_time?: string;
     leave_time?: string;
     meeting_encryption_status?: 1 | 2;
     participants_count?: number;
     participants_count_my_account?: number;
     schedule_time?: string;
     session_key?: string;
     source?: string;
     start_time?: string;
     topic?: string;
     total_minutes?: number;
     type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
     user_email?: string;
     user_name?: string;
     uuid?: string;
  }[];
  next_page_token?: string;
  to?: string;
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### from?

```ts
optional from?: string;
```

###### meetings?

```ts
optional meetings?: readonly {
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  duration?: number;
  end_time?: string;
  has_chat?: boolean;
  has_recording?: boolean;
  has_screen_share?: boolean;
  host_name?: string;
  host_organization?: string;
  id?: number;
  join_time?: string;
  join_waiting_room_time?: string;
  leave_time?: string;
  meeting_encryption_status?: 1 | 2;
  participants_count?: number;
  participants_count_my_account?: number;
  schedule_time?: string;
  session_key?: string;
  source?: string;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  user_email?: string;
  user_name?: string;
  uuid?: string;
}[];
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### to?

```ts
optional to?: string;
```

##### GET /report/webinars/\{webinarId\}

```ts
GET /report/webinars/{webinarId}: {
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  dept?: string;
  duration?: number;
  end_time?: string;
  id?: number;
  participants_count?: number;
  start_time?: string;
  topic?: string;
  total_minutes?: number;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
  }[];
  type?: number;
  user_email?: string;
  user_name?: string;
  uuid?: string;
};
```

###### custom\_keys?

```ts
optional custom_keys?: readonly {
  key?: string;
  value?: string;
}[];
```

###### dept?

```ts
optional dept?: string;
```

###### duration?

```ts
optional duration?: number;
```

###### end\_time?

```ts
optional end_time?: string;
```

###### id?

```ts
optional id?: number;
```

###### participants\_count?

```ts
optional participants_count?: number;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### total\_minutes?

```ts
optional total_minutes?: number;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
}[];
```

###### type?

```ts
optional type?: number;
```

###### user\_email?

```ts
optional user_email?: string;
```

###### user\_name?

```ts
optional user_name?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /report/webinars/\{webinarId\}/participants

```ts
GET /report/webinars/{webinarId}/participants: {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  participants?: readonly {
     bo_mtg_id?: string;
     customer_key?: string;
     duration?: number;
     failover?: boolean;
     id?: string;
     join_time?: string;
     leave_time?: string;
     name?: string;
     participant_user_id?: string;
     registrant_id?: string;
     status?: "in_meeting" | "in_waiting_room";
     user_email?: string;
     user_id?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### participants?

```ts
optional participants?: readonly {
  bo_mtg_id?: string;
  customer_key?: string;
  duration?: number;
  failover?: boolean;
  id?: string;
  join_time?: string;
  leave_time?: string;
  name?: string;
  participant_user_id?: string;
  registrant_id?: string;
  status?: "in_meeting" | "in_waiting_room";
  user_email?: string;
  user_id?: string;
}[];
```

##### GET /report/webinars/\{webinarId\}/polls

```ts
GET /report/webinars/{webinarId}/polls: {
  id?: number;
  questions?: readonly {
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        date_time?: string;
        polling_id?: string;
        question?: string;
     }[];
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     date_time?: string;
     polling_id?: string;
     question?: string;
  }[];
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /report/webinars/\{webinarId\}/qa

```ts
GET /report/webinars/{webinarId}/qa: {
  id?: number;
  questions?: readonly {
     email?: string;
     name?: string;
     question_details?: readonly {
        answer?: string;
        answer_details?: readonly {
           content?: string;
           create_time?: string;
           email?: string;
           name?: string;
           type?:   | "default"
              | "host_answered_publicly"
              | "host_answered_privately"
              | "participant_commented"
              | "host_answered";
           user_id?: string;
        }[];
        create_time?: string;
        question?: string;
        question_id?: string;
        question_status?: "open" | "answered" | "default" | "deleted" | "dismissed";
     }[];
     user_id?: string;
  }[];
  start_time?: string;
  uuid?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### questions?

```ts
optional questions?: readonly {
  email?: string;
  name?: string;
  question_details?: readonly {
     answer?: string;
     answer_details?: readonly {
        content?: string;
        create_time?: string;
        email?: string;
        name?: string;
        type?:   | "default"
           | "host_answered_publicly"
           | "host_answered_privately"
           | "participant_commented"
           | "host_answered";
        user_id?: string;
     }[];
     create_time?: string;
     question?: string;
     question_id?: string;
     question_status?: "open" | "answered" | "default" | "deleted" | "dismissed";
  }[];
  user_id?: string;
}[];
```

###### start\_time?

```ts
optional start_time?: string;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /report/webinars/\{webinarId\}/survey

```ts
GET /report/webinars/{webinarId}/survey: {
  start_time?: string;
  survey_answers?: readonly {
     answer_details?: readonly {
        answer?: string;
        date_time?: string;
        question?: string;
        question_id?: string;
     }[];
     email?: string;
     first_name?: string;
     last_name?: string;
     name?: string;
  }[];
  survey_id?: string;
  survey_name?: string;
  webinar_id?: number;
  webinar_uuid?: string;
};
```

###### start\_time?

```ts
optional start_time?: string;
```

###### survey\_answers?

```ts
optional survey_answers?: readonly {
  answer_details?: readonly {
     answer?: string;
     date_time?: string;
     question?: string;
     question_id?: string;
  }[];
  email?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
}[];
```

###### survey\_id?

```ts
optional survey_id?: string;
```

###### survey\_name?

```ts
optional survey_name?: string;
```

###### webinar\_id?

```ts
optional webinar_id?: number;
```

###### webinar\_uuid?

```ts
optional webinar_uuid?: string;
```

##### GET /sip\_phones/phones

```ts
GET /sip_phones/phones: {
  next_page_token?: string;
  page_size?: number;
  phones?: readonly {
     authorization_name?: string;
     display_number?: string;
     domain?: string;
     password?: string;
     phone_id?: string;
     registration_expire_time?: number;
     server?: {
        proxy_server?: string;
        register_server?: string;
        transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
     };
     server_2?: {
        proxy_server?: string;
        register_server?: string;
        transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
     };
     server_3?: {
        proxy_server?: string;
        register_server?: string;
        transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
     };
     user_email?: string;
     user_name?: string;
     voice_mail?: string;
  }[];
};
```

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### phones?

```ts
optional phones?: readonly {
  authorization_name?: string;
  display_number?: string;
  domain?: string;
  password?: string;
  phone_id?: string;
  registration_expire_time?: number;
  server?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_2?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_3?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  user_email?: string;
  user_name?: string;
  voice_mail?: string;
}[];
```

##### GET /tracking\_fields

```ts
GET /tracking_fields: {
  total_records?: number;
  tracking_fields?: readonly {
     field?: string;
     id?: string;
     recommended_values?: readonly string[];
     required?: boolean;
     visible?: boolean;
  }[];
};
```

###### total\_records?

```ts
optional total_records?: number;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  id?: string;
  recommended_values?: readonly string[];
  required?: boolean;
  visible?: boolean;
}[];
```

##### GET /tracking\_fields/\{fieldId\}

```ts
GET /tracking_fields/{fieldId}: {
  field?: string;
  id?: string;
  recommended_values?: readonly string[];
  required?: boolean;
  visible?: boolean;
};
```

###### field?

```ts
optional field?: string;
```

###### id?

```ts
optional id?: string;
```

###### recommended\_values?

```ts
optional recommended_values?: readonly string[];
```

###### required?

```ts
optional required?: boolean;
```

###### visible?

```ts
optional visible?: boolean;
```

##### GET /tsp

```ts
GET /tsp: {
  dial_in_number_unrestricted?: boolean;
  dial_in_numbers?: readonly {
     code?: string;
     number?: string;
     type?: string;
  }[];
  enable?: boolean;
  master_account_setting_extended?: boolean;
  modify_credential_forbidden?: boolean;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
  tsp_enabled?: boolean;
  tsp_provider?: string;
};
```

###### dial\_in\_number\_unrestricted?

```ts
optional dial_in_number_unrestricted?: boolean;
```

###### dial\_in\_numbers?

```ts
optional dial_in_numbers?: readonly {
  code?: string;
  number?: string;
  type?: string;
}[];
```

###### enable?

```ts
optional enable?: boolean;
```

###### master\_account\_setting\_extended?

```ts
optional master_account_setting_extended?: boolean;
```

###### modify\_credential\_forbidden?

```ts
optional modify_credential_forbidden?: boolean;
```

###### tsp\_bridge?

```ts
optional tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
```

###### tsp\_enabled?

```ts
optional tsp_enabled?: boolean;
```

###### tsp\_provider?

```ts
optional tsp_provider?: string;
```

##### GET /users/\{userId\}/meeting\_templates

```ts
GET /users/{userId}/meeting_templates: {
  templates?: readonly {
     id?: string;
     name?: string;
     type?: number;
  }[];
  total_records?: number;
};
```

###### templates?

```ts
optional templates?: readonly {
  id?: string;
  name?: string;
  type?: number;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /users/\{userId\}/meetings

```ts
GET /users/{userId}/meetings: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  meetings?: readonly {
     agenda?: string;
     created_at?: string;
     duration?: number;
     host_id?: string;
     id?: number;
     join_url?: string;
     pmi?: string;
     start_time?: string;
     timezone?: string;
     topic?: string;
     type?: 1 | 2 | 3 | 8;
     uuid?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### meetings?

```ts
optional meetings?: readonly {
  agenda?: string;
  created_at?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  join_url?: string;
  pmi?: string;
  start_time?: string;
  timezone?: string;
  topic?: string;
  type?: 1 | 2 | 3 | 8;
  uuid?: string;
}[];
```

##### GET /users/\{userId\}/pac

```ts
GET /users/{userId}/pac: {
  pac_accounts?: readonly {
     conference_id?: number;
     dedicated_dial_in_number?: readonly {
        country?: string;
        number?: string;
     }[];
     global_dial_in_numbers?: readonly {
        country?: string;
        number?: string;
     }[];
     listen_only_password?: string;
     participant_password?: string;
  }[];
};
```

###### pac\_accounts?

```ts
optional pac_accounts?: readonly {
  conference_id?: number;
  dedicated_dial_in_number?: readonly {
     country?: string;
     number?: string;
  }[];
  global_dial_in_numbers?: readonly {
     country?: string;
     number?: string;
  }[];
  listen_only_password?: string;
  participant_password?: string;
}[];
```

##### GET /users/\{userId\}/recordings

```ts
GET /users/{userId}/recordings: {
  from?: string;
  to?: string;
} & {
  next_page_token?: string;
  page_count?: number;
  page_size?: number;
  total_records?: number;
} & {
  meetings?: readonly {
     account_id?: string;
     auto_delete?: boolean;
     auto_delete_date?: string;
     duration?: number;
     host_id?: string;
     id?: number;
     recording_count?: number;
     recording_play_passcode?: string;
     start_time?: string;
     topic?: string;
     total_size?: number;
     type?: "2" | "1" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
     uuid?: string;
   } & {
     recording_files?: readonly {
        deleted_time?: string;
        download_url?: string;
        file_extension?: "MP4" | "M4A" | "CSV" | "TXT" | "VTT" | "JSON" | "JPG";
        file_path?: string;
        file_size?: number;
        file_type?:   | "MP4"
           | "M4A"
           | "CHAT"
           | "CC"
           | "CHAT_MESSAGE"
           | "TRANSCRIPT"
           | "CSV"
           | "TB"
           | "SUMMARY";
        id?: string;
        meeting_id?: string;
        play_url?: string;
        recording_end?: string;
        recording_start?: string;
        recording_type?:   | "summary"
           | "shared_screen_with_speaker_view"
           | "audio_only"
           | "chat_file"
           | "closed_caption"
           | "audio_transcript"
           | "shared_screen_with_speaker_view(CC)"
           | "shared_screen_with_gallery_view"
           | "active_speaker"
           | "gallery_view"
           | "shared_screen"
           | "poll"
           | "host_video"
           | "timeline"
           | "thumbnail"
           | "audio_interpretation"
           | "summary_next_steps"
           | "summary_smart_chapters"
           | "sign_interpretation"
           | "production_studio";
        status?: "completed";
     }[];
  }[];
};
```

###### Type Declaration

###### from?

```ts
optional from?: string;
```

###### to?

```ts
optional to?: string;
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### meetings?

```ts
optional meetings?: readonly {
  account_id?: string;
  auto_delete?: boolean;
  auto_delete_date?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  recording_count?: number;
  recording_play_passcode?: string;
  start_time?: string;
  topic?: string;
  total_size?: number;
  type?: "2" | "1" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "99";
  uuid?: string;
} & {
  recording_files?: readonly {
     deleted_time?: string;
     download_url?: string;
     file_extension?: "MP4" | "M4A" | "CSV" | "TXT" | "VTT" | "JSON" | "JPG";
     file_path?: string;
     file_size?: number;
     file_type?:   | "MP4"
        | "M4A"
        | "CHAT"
        | "CC"
        | "CHAT_MESSAGE"
        | "TRANSCRIPT"
        | "CSV"
        | "TB"
        | "SUMMARY";
     id?: string;
     meeting_id?: string;
     play_url?: string;
     recording_end?: string;
     recording_start?: string;
     recording_type?:   | "summary"
        | "shared_screen_with_speaker_view"
        | "audio_only"
        | "chat_file"
        | "closed_caption"
        | "audio_transcript"
        | "shared_screen_with_speaker_view(CC)"
        | "shared_screen_with_gallery_view"
        | "active_speaker"
        | "gallery_view"
        | "shared_screen"
        | "poll"
        | "host_video"
        | "timeline"
        | "thumbnail"
        | "audio_interpretation"
        | "summary_next_steps"
        | "summary_smart_chapters"
        | "sign_interpretation"
        | "production_studio";
     status?: "completed";
  }[];
}[];
```

##### GET /users/\{userId\}/tsp

```ts
GET /users/{userId}/tsp: {
  tsp_accounts?: readonly {
     conference_code: string;
     dial_in_numbers?: readonly {
        code?: string;
        country_label?: string;
        number?: string;
        type?: "toll" | "tollfree" | "media_link";
     }[];
     id?: "2" | "1";
     leader_pin: string;
     tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
  }[];
};
```

###### tsp\_accounts?

```ts
optional tsp_accounts?: readonly {
  conference_code: string;
  dial_in_numbers?: readonly {
     code?: string;
     country_label?: string;
     number?: string;
     type?: "toll" | "tollfree" | "media_link";
  }[];
  id?: "2" | "1";
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
}[];
```

##### GET /users/\{userId\}/tsp/\{tspId\}

```ts
GET /users/{userId}/tsp/{tspId}: {
  conference_code: string;
  dial_in_numbers?: readonly {
     code?: string;
     country_label?: string;
     number?: string;
     type?: "toll" | "tollfree" | "media_link";
  }[];
  id?: string;
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
};
```

###### conference\_code

```ts
conference_code: string;
```

###### dial\_in\_numbers?

```ts
optional dial_in_numbers?: readonly {
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}[];
```

###### id?

```ts
optional id?: string;
```

###### leader\_pin

```ts
leader_pin: string;
```

###### tsp\_bridge?

```ts
optional tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
```

##### GET /users/\{userId\}/upcoming\_meetings

```ts
GET /users/{userId}/upcoming_meetings: {
  meetings?: readonly {
     created_at?: string;
     duration?: number;
     id?: number;
     is_all_day?: boolean;
     is_host?: boolean;
     join_url?: string;
     passcode?: string;
     start_time?: string;
     timezone?: string;
     topic?: string;
     type?: 1 | 2 | 3 | 8;
     use_pmi?: boolean;
  }[];
  total_records?: number;
};
```

###### meetings?

```ts
optional meetings?: readonly {
  created_at?: string;
  duration?: number;
  id?: number;
  is_all_day?: boolean;
  is_host?: boolean;
  join_url?: string;
  passcode?: string;
  start_time?: string;
  timezone?: string;
  topic?: string;
  type?: 1 | 2 | 3 | 8;
  use_pmi?: boolean;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /users/\{userId\}/webinar\_templates

```ts
GET /users/{userId}/webinar_templates: {
  templates?: readonly {
     id?: string;
     name?: string;
     type?: number;
  }[];
  total_records?: number;
};
```

###### templates?

```ts
optional templates?: readonly {
  id?: string;
  name?: string;
  type?: number;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /users/\{userId\}/webinars

```ts
GET /users/{userId}/webinars: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  webinars?: readonly {
     agenda?: string;
     created_at?: string;
     duration?: number;
     host_id?: string;
     id?: number;
     is_events_webinar?: boolean;
     is_simulive?: boolean;
     join_url?: string;
     start_time?: string;
     timezone?: string;
     topic?: string;
     type?: 5 | 6 | 9;
     uuid?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### webinars?

```ts
optional webinars?: readonly {
  agenda?: string;
  created_at?: string;
  duration?: number;
  host_id?: string;
  id?: number;
  is_events_webinar?: boolean;
  is_simulive?: boolean;
  join_url?: string;
  start_time?: string;
  timezone?: string;
  topic?: string;
  type?: 5 | 6 | 9;
  uuid?: string;
}[];
```

##### GET /webinars/\{webinarId\}

```ts
GET /webinars/{webinarId}: {
  agenda?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  encrypted_passcode?: string;
  h323_passcode?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  is_simulive?: boolean;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  record_file_id?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: string;
  };
  registration_url?: string;
  settings?: {
     add_audio_watermark?: boolean;
     add_watermark?: boolean;
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     approval_type?: 0 | 1 | 2;
     attendees_and_panelists_reminder_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_name?: string;
     authentication_option?: string;
     auto_recording?: "none" | "local" | "cloud";
     close_registration?: boolean;
     contact_email?: string;
     contact_name?: string;
     email_in_attendee_report?: boolean;
     email_language?: string;
     enable_session_branding?: boolean;
     enforce_login?: boolean;
     enforce_login_domains?: string;
     follow_up_absentees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     follow_up_attendees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree" | "premium";
     }[];
     hd_video?: boolean;
     hd_video_for_attendees?: boolean;
     host_video?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     on_demand?: boolean;
     panelist_authentication?: boolean;
     panelists_invitation_email_notification?: boolean;
     panelists_video?: boolean;
     post_webinar_survey?: boolean;
     practice_session?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_auto_reply?: boolean;
        allow_submit_questions?: boolean;
        answer_questions?: "all" | "only";
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        auto_reply_text?: string;
        enable?: boolean;
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registrants_restrict_number?: number;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     send_1080p_video_to_attendees?: boolean;
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     survey_url?: string;
  };
  simulive_delay_start?: {
     enable?: boolean;
     time?: number;
     timeunit?: "second" | "minute";
  };
  start_time?: string;
  start_url?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  transition_to_live?: boolean;
  type?: 5 | 6 | 9;
  uuid?: string;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### created\_at?

```ts
optional created_at?: string;
```

###### creation\_source?

```ts
optional creation_source?: "other" | "open_api" | "web_portal";
```

###### duration?

```ts
optional duration?: number;
```

###### encrypted\_passcode?

```ts
optional encrypted_passcode?: string;
```

###### h323\_passcode?

```ts
optional h323_passcode?: string;
```

###### host\_email?

```ts
optional host_email?: string;
```

###### host\_id?

```ts
optional host_id?: string;
```

###### id?

```ts
optional id?: number;
```

###### is\_simulive?

```ts
optional is_simulive?: boolean;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### occurrences?

```ts
optional occurrences?: readonly {
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}[];
```

###### password?

```ts
optional password?: string;
```

###### record\_file\_id?

```ts
optional record_file_id?: string;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: string;
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: string;
```

###### registration\_url?

```ts
optional registration_url?: string;
```

###### settings?

```ts
optional settings?: {
  add_audio_watermark?: boolean;
  add_watermark?: boolean;
  additional_data_center_regions?: readonly string[];
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_name?: string;
  authentication_option?: string;
  auto_recording?: "none" | "local" | "cloud";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_in_attendee_report?: boolean;
  email_language?: string;
  enable_session_branding?: boolean;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  follow_up_attendees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  global_dial_in_countries?: readonly string[];
  global_dial_in_numbers?: readonly {
     city?: string;
     country?: string;
     country_name?: string;
     number?: string;
     type?: "toll" | "tollfree" | "premium";
  }[];
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  on_demand?: boolean;
  panelist_authentication?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_auto_reply?: boolean;
     allow_submit_questions?: boolean;
     answer_questions?: "all" | "only";
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     auto_reply_text?: string;
     enable?: boolean;
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  send_1080p_video_to_attendees?: boolean;
  show_join_info?: boolean;
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  survey_url?: string;
};
```

###### settings.add\_audio\_watermark?

```ts
optional add_audio_watermark?: boolean;
```

###### settings.add\_watermark?

```ts
optional add_watermark?: boolean;
```

###### settings.additional\_data\_center\_regions?

```ts
optional additional_data_center_regions?: readonly string[];
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification?

```ts
optional attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_name?

```ts
optional authentication_name?: string;
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_language?

```ts
optional email_language?: string;
```

###### settings.enable\_session\_branding?

```ts
optional enable_session_branding?: boolean;
```

###### settings.enforce\_login?

```ts
optional enforce_login?: boolean;
```

###### settings.enforce\_login\_domains?

```ts
optional enforce_login_domains?: string;
```

###### settings.follow\_up\_absentees\_email\_notification?

```ts
optional follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_absentees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_absentees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.follow\_up\_attendees\_email\_notification?

```ts
optional follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_attendees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_attendees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.global\_dial\_in\_numbers?

```ts
optional global_dial_in_numbers?: readonly {
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree" | "premium";
}[];
```

###### settings.hd\_video?

```ts
optional hd_video?: boolean;
```

###### settings.hd\_video\_for\_attendees?

```ts
optional hd_video_for_attendees?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.on\_demand?

```ts
optional on_demand?: boolean;
```

###### settings.panelist\_authentication?

```ts
optional panelist_authentication?: boolean;
```

###### settings.panelists\_invitation\_email\_notification?

```ts
optional panelists_invitation_email_notification?: boolean;
```

###### settings.panelists\_video?

```ts
optional panelists_video?: boolean;
```

###### settings.post\_webinar\_survey?

```ts
optional post_webinar_survey?: boolean;
```

###### settings.practice\_session?

```ts
optional practice_session?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_auto_reply?: boolean;
  allow_submit_questions?: boolean;
  answer_questions?: "all" | "only";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_auto\_reply?

```ts
optional allow_auto_reply?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.answer\_questions?

```ts
optional answer_questions?: "all" | "only";
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.auto\_reply\_text?

```ts
optional auto_reply_text?: string;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registrants\_restrict\_number?

```ts
optional registrants_restrict_number?: number;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.send\_1080p\_video\_to\_attendees?

```ts
optional send_1080p_video_to_attendees?: boolean;
```

###### settings.show\_join\_info?

```ts
optional show_join_info?: boolean;
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.survey\_url?

```ts
optional survey_url?: string;
```

###### simulive\_delay\_start?

```ts
optional simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: "second" | "minute";
};
```

###### simulive\_delay\_start.enable?

```ts
optional enable?: boolean;
```

###### simulive\_delay\_start.time?

```ts
optional time?: number;
```

###### simulive\_delay\_start.timeunit?

```ts
optional timeunit?: "second" | "minute";
```

###### start\_time?

```ts
optional start_time?: string;
```

###### start\_url?

```ts
optional start_url?: string;
```

###### template\_id?

```ts
optional template_id?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
  visible?: boolean;
}[];
```

###### transition\_to\_live?

```ts
optional transition_to_live?: boolean;
```

###### type?

```ts
optional type?: 5 | 6 | 9;
```

###### uuid?

```ts
optional uuid?: string;
```

##### GET /webinars/\{webinarId\}/branding

```ts
GET /webinars/{webinarId}/branding: {
  name_tags?: readonly {
     accent_color?: string;
     background_color?: string;
     id?: string;
     is_default?: boolean;
     name?: string;
     text_color?: string;
  }[];
  virtual_backgrounds?: readonly {
     id?: string;
     is_default?: boolean;
     name?: string;
  }[];
  wallpaper?: {
     id?: string;
  };
};
```

###### name\_tags?

```ts
optional name_tags?: readonly {
  accent_color?: string;
  background_color?: string;
  id?: string;
  is_default?: boolean;
  name?: string;
  text_color?: string;
}[];
```

###### virtual\_backgrounds?

```ts
optional virtual_backgrounds?: readonly {
  id?: string;
  is_default?: boolean;
  name?: string;
}[];
```

###### wallpaper?

```ts
optional wallpaper?: {
  id?: string;
};
```

###### wallpaper.id?

```ts
optional id?: string;
```

##### GET /webinars/\{webinarId\}/jointoken/live\_streaming

```ts
GET /webinars/{webinarId}/jointoken/live_streaming: {
  expire_in?: 120;
  token?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: 120;
```

###### token?

```ts
optional token?: string;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_archiving

```ts
GET /webinars/{webinarId}/jointoken/local_archiving: {
  expire_in?: 120;
  token?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: 120;
```

###### token?

```ts
optional token?: string;
```

##### GET /webinars/\{webinarId\}/jointoken/local\_recording

```ts
GET /webinars/{webinarId}/jointoken/local_recording: {
  expire_in?: 120;
  token?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: 120;
```

###### token?

```ts
optional token?: string;
```

##### GET /webinars/\{webinarId\}/livestream

```ts
GET /webinars/{webinarId}/livestream: {
  page_url?: string;
  resolution?: string;
  stream_key?: string;
  stream_url?: string;
};
```

###### page\_url?

```ts
optional page_url?: string;
```

###### resolution?

```ts
optional resolution?: string;
```

###### stream\_key?

```ts
optional stream_key?: string;
```

###### stream\_url?

```ts
optional stream_url?: string;
```

##### GET /webinars/\{webinarId\}/panelists

```ts
GET /webinars/{webinarId}/panelists: {
  panelists?: readonly {
     id?: string;
   } & {
     email?: string;
     name?: string;
   } & {
     join_url?: string;
   } & {
     name_tag_description?: string;
     name_tag_id?: string;
     name_tag_name?: string;
     name_tag_pronouns?: string;
     virtual_background_id?: string;
  }[];
  total_records?: number;
};
```

###### panelists?

```ts
optional panelists?: readonly {
  id?: string;
} & {
  email?: string;
  name?: string;
} & {
  join_url?: string;
} & {
  name_tag_description?: string;
  name_tag_id?: string;
  name_tag_name?: string;
  name_tag_pronouns?: string;
  virtual_background_id?: string;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /webinars/\{webinarId\}/polls

```ts
GET /webinars/{webinarId}/polls: {
  polls?: readonly {
     id?: string;
     status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
   } & {
     anonymous?: boolean;
     poll_type?: 1 | 2 | 3;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        case_sensitive?: boolean;
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
           prompt_right_answers?: readonly string[];
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        right_answers?: readonly string[];
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     title?: string;
  }[];
  total_records?: number;
};
```

###### polls?

```ts
optional polls?: readonly {
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
}[];
```

###### total\_records?

```ts
optional total_records?: number;
```

##### GET /webinars/\{webinarId\}/polls/\{pollId\}

```ts
GET /webinars/{webinarId}/polls/{pollId}: {
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### status?

```ts
optional status?: "started" | "ended" | "notstart" | "sharing" | "deactivated";
```

###### Type Declaration

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### GET /webinars/\{webinarId\}/registrants

```ts
GET /webinars/{webinarId}/registrants: {
  next_page_token?: string;
  page_count?: number;
  page_number?: number;
  page_size?: number;
  total_records?: number;
} & {
  registrants?: readonly {
     id?: string;
   } & {
     address?: string;
     city?: string;
     comments?: string;
     country?: string;
     custom_questions?: readonly {
        title?: string;
        value?: string;
     }[];
     email: string;
     first_name: string;
     industry?: string;
     job_title?: string;
     last_name?: string;
     no_of_employees?:   | ""
        | "1-20"
        | "21-50"
        | "51-100"
        | "101-250"
        | "251-500"
        | "501-1,000"
        | "1,001-5,000"
        | "5,001-10,000"
        | "More than 10,000";
     org?: string;
     phone?: string;
     purchasing_time_frame?:   | ""
        | "Within a month"
        | "1-3 months"
        | "4-6 months"
        | "More than 6 months"
        | "No timeframe";
     role_in_purchase_process?:   | ""
        | "Decision Maker"
        | "Evaluator/Recommender"
        | "Influencer"
        | "Not involved";
     state?: string;
     status?: "pending" | "approved" | "denied";
     zip?: string;
   } & {
     create_time?: string;
     join_url?: string;
     status?: string;
  }[];
};
```

###### Type Declaration

###### next\_page\_token?

```ts
optional next_page_token?: string;
```

###### page\_count?

```ts
optional page_count?: number;
```

###### page\_number?

```ts
optional page_number?: number;
```

###### page\_size?

```ts
optional page_size?: number;
```

###### total\_records?

```ts
optional total_records?: number;
```

###### Type Declaration

###### registrants?

```ts
optional registrants?: readonly {
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
} & {
  create_time?: string;
  join_url?: string;
  status?: string;
}[];
```

##### GET /webinars/\{webinarId\}/registrants/\{registrantId\}

```ts
GET /webinars/{webinarId}/registrants/{registrantId}: {
  id?: string;
} & {
  address?: string;
  city?: string;
  comments?: string;
  country?: string;
  custom_questions?: readonly {
     title?: string;
     value?: string;
  }[];
  email: string;
  first_name: string;
  industry?: string;
  job_title?: string;
  last_name?: string;
  no_of_employees?:   | ""
     | "1-20"
     | "21-50"
     | "51-100"
     | "101-250"
     | "251-500"
     | "501-1,000"
     | "1,001-5,000"
     | "5,001-10,000"
     | "More than 10,000";
  org?: string;
  phone?: string;
  purchasing_time_frame?:   | ""
     | "Within a month"
     | "1-3 months"
     | "4-6 months"
     | "More than 6 months"
     | "No timeframe";
  role_in_purchase_process?:   | ""
     | "Decision Maker"
     | "Evaluator/Recommender"
     | "Influencer"
     | "Not involved";
  state?: string;
  status?: "pending" | "approved" | "denied";
  zip?: string;
} & {
  language?:   | "en-US"
     | "de-DE"
     | "es-ES"
     | "fr-FR"
     | "jp-JP"
     | "pt-PT"
     | "ru-RU"
     | "zh-CN"
     | "zh-TW"
     | "ko-KO"
     | "it-IT"
     | "vi-VN"
     | "pl-PL"
     | "Tr-TR";
} & {
  create_time?: string;
  join_url?: string;
  status?: string;
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### Type Declaration

###### address?

```ts
optional address?: string;
```

###### city?

```ts
optional city?: string;
```

###### comments?

```ts
optional comments?: string;
```

###### country?

```ts
optional country?: string;
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  title?: string;
  value?: string;
}[];
```

###### email

```ts
email: string;
```

###### first\_name

```ts
first_name: string;
```

###### industry?

```ts
optional industry?: string;
```

###### job\_title?

```ts
optional job_title?: string;
```

###### last\_name?

```ts
optional last_name?: string;
```

###### no\_of\_employees?

```ts
optional no_of_employees?:
  | ""
  | "1-20"
  | "21-50"
  | "51-100"
  | "101-250"
  | "251-500"
  | "501-1,000"
  | "1,001-5,000"
  | "5,001-10,000"
  | "More than 10,000";
```

###### org?

```ts
optional org?: string;
```

###### phone?

```ts
optional phone?: string;
```

###### purchasing\_time\_frame?

```ts
optional purchasing_time_frame?:
  | ""
  | "Within a month"
  | "1-3 months"
  | "4-6 months"
  | "More than 6 months"
  | "No timeframe";
```

###### role\_in\_purchase\_process?

```ts
optional role_in_purchase_process?:
  | ""
  | "Decision Maker"
  | "Evaluator/Recommender"
  | "Influencer"
  | "Not involved";
```

###### state?

```ts
optional state?: string;
```

###### status?

```ts
optional status?: "pending" | "approved" | "denied";
```

###### zip?

```ts
optional zip?: string;
```

###### Type Declaration

###### language?

```ts
optional language?:
  | "en-US"
  | "de-DE"
  | "es-ES"
  | "fr-FR"
  | "jp-JP"
  | "pt-PT"
  | "ru-RU"
  | "zh-CN"
  | "zh-TW"
  | "ko-KO"
  | "it-IT"
  | "vi-VN"
  | "pl-PL"
  | "Tr-TR";
```

###### Type Declaration

###### create\_time?

```ts
optional create_time?: string;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### status?

```ts
optional status?: string;
```

##### GET /webinars/\{webinarId\}/registrants/questions

```ts
GET /webinars/{webinarId}/registrants/questions: {
  custom_questions?: readonly {
     answers?: readonly string[];
     required?: boolean;
     title?: string;
     type?: "short" | "multiple" | "single_radio" | "single_dropdown";
  }[];
  questions?: readonly {
     field_name?:   | "state"
        | "phone"
        | "last_name"
        | "address"
        | "city"
        | "country"
        | "zip"
        | "industry"
        | "org"
        | "job_title"
        | "purchasing_time_frame"
        | "role_in_purchase_process"
        | "no_of_employees"
        | "comments";
     required?: boolean;
  }[];
};
```

###### custom\_questions?

```ts
optional custom_questions?: readonly {
  answers?: readonly string[];
  required?: boolean;
  title?: string;
  type?: "short" | "multiple" | "single_radio" | "single_dropdown";
}[];
```

###### questions?

```ts
optional questions?: readonly {
  field_name?:   | "state"
     | "phone"
     | "last_name"
     | "address"
     | "city"
     | "country"
     | "zip"
     | "industry"
     | "org"
     | "job_title"
     | "purchasing_time_frame"
     | "role_in_purchase_process"
     | "no_of_employees"
     | "comments";
  required?: boolean;
}[];
```

##### GET /webinars/\{webinarId\}/survey

```ts
GET /webinars/{webinarId}/survey: {
  custom_survey?: {
     anonymous?: boolean;
     feedback?: string;
     numbered_questions?: boolean;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     show_question_type?: boolean;
     title?: string;
  };
  show_in_the_browser?: boolean;
  show_in_the_follow_up_email?: boolean;
  third_party_survey?: string;
};
```

###### custom\_survey?

```ts
optional custom_survey?: {
  anonymous?: boolean;
  feedback?: string;
  numbered_questions?: boolean;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  show_question_type?: boolean;
  title?: string;
};
```

###### custom\_survey.anonymous?

```ts
optional anonymous?: boolean;
```

###### custom\_survey.feedback?

```ts
optional feedback?: string;
```

###### custom\_survey.numbered\_questions?

```ts
optional numbered_questions?: boolean;
```

###### custom\_survey.questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### custom\_survey.show\_question\_type?

```ts
optional show_question_type?: boolean;
```

###### custom\_survey.title?

```ts
optional title?: string;
```

###### show\_in\_the\_browser?

```ts
optional show_in_the_browser?: boolean;
```

###### show\_in\_the\_follow\_up\_email?

```ts
optional show_in_the_follow_up_email?: boolean;
```

###### third\_party\_survey?

```ts
optional third_party_survey?: string;
```

##### GET /webinars/\{webinarId\}/token

```ts
GET /webinars/{webinarId}/token: {
  token?: string;
};
```

###### token?

```ts
optional token?: string;
```

##### GET /webinars/\{webinarId\}/tracking\_sources

```ts
GET /webinars/{webinarId}/tracking_sources: {
  total_records?: number;
  tracking_sources?: readonly {
     id?: string;
     registration_count?: number;
     source_name?: string;
     tracking_url?: string;
     visitor_count?: number;
  }[];
};
```

###### total\_records?

```ts
optional total_records?: number;
```

###### tracking\_sources?

```ts
optional tracking_sources?: readonly {
  id?: string;
  registration_count?: number;
  source_name?: string;
  tracking_url?: string;
  visitor_count?: number;
}[];
```

##### PATCH /archive\_files/\{fileId\}

```ts
PATCH /archive_files/{fileId}: void;
```

##### PATCH /devices/\{deviceId\}

```ts
PATCH /devices/{deviceId}: void;
```

##### PATCH /devices/\{deviceId\}/assign\_group

```ts
PATCH /devices/{deviceId}/assign_group: void;
```

##### PATCH /devices/\{deviceId\}/assignment

```ts
PATCH /devices/{deviceId}/assignment: void;
```

##### PATCH /h323/devices/\{deviceId\}

```ts
PATCH /h323/devices/{deviceId}: void;
```

##### PATCH /live\_meetings/\{meetingId\}/chat/messages/\{messageId\}

```ts
PATCH /live_meetings/{meetingId}/chat/messages/{messageId}: void;
```

##### PATCH /live\_meetings/\{meetingId\}/events

```ts
PATCH /live_meetings/{meetingId}/events: void;
```

##### PATCH /live\_meetings/\{meetingId\}/rtms\_app/status

```ts
PATCH /live_meetings/{meetingId}/rtms_app/status: void;
```

##### PATCH /meetings/\{meetingId\}

```ts
PATCH /meetings/{meetingId}: void;
```

##### PATCH /meetings/\{meetingId\}/livestream

```ts
PATCH /meetings/{meetingId}/livestream: void;
```

##### PATCH /meetings/\{meetingId\}/livestream/status

```ts
PATCH /meetings/{meetingId}/livestream/status: void;
```

##### PATCH /meetings/\{meetingId\}/recordings/registrants/questions

```ts
PATCH /meetings/{meetingId}/recordings/registrants/questions: void;
```

##### PATCH /meetings/\{meetingId\}/recordings/settings

```ts
PATCH /meetings/{meetingId}/recordings/settings: void;
```

##### PATCH /meetings/\{meetingId\}/registrants/questions

```ts
PATCH /meetings/{meetingId}/registrants/questions: void;
```

##### PATCH /meetings/\{meetingId\}/survey

```ts
PATCH /meetings/{meetingId}/survey: void;
```

##### PATCH /sip\_phones/phones/\{phoneId\}

```ts
PATCH /sip_phones/phones/{phoneId}: void;
```

##### PATCH /tracking\_fields/\{fieldId\}

```ts
PATCH /tracking_fields/{fieldId}: void;
```

##### PATCH /tsp

```ts
PATCH /tsp: void;
```

##### PATCH /users/\{userId\}/tsp/\{tspId\}

```ts
PATCH /users/{userId}/tsp/{tspId}: void;
```

##### PATCH /users/\{userId\}/tsp/settings

```ts
PATCH /users/{userId}/tsp/settings: void;
```

##### PATCH /webinars/\{webinarId\}

```ts
PATCH /webinars/{webinarId}: void;
```

##### PATCH /webinars/\{webinarId\}/branding/name\_tags/\{nameTagId\}

```ts
PATCH /webinars/{webinarId}/branding/name_tags/{nameTagId}: void;
```

##### PATCH /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
PATCH /webinars/{webinarId}/branding/virtual_backgrounds: void;
```

##### PATCH /webinars/\{webinarId\}/livestream

```ts
PATCH /webinars/{webinarId}/livestream: void;
```

##### PATCH /webinars/\{webinarId\}/livestream/status

```ts
PATCH /webinars/{webinarId}/livestream/status: void;
```

##### PATCH /webinars/\{webinarId\}/registrants/questions

```ts
PATCH /webinars/{webinarId}/registrants/questions: void;
```

##### PATCH /webinars/\{webinarId\}/survey

```ts
PATCH /webinars/{webinarId}/survey: void;
```

##### POST /devices

```ts
POST /devices: void;
```

##### POST /devices/zpa/assignment

```ts
POST /devices/zpa/assignment: void;
```

##### POST /devices/zpa/upgrade

```ts
POST /devices/zpa/upgrade: void;
```

##### POST /h323/devices

```ts
POST /h323/devices: {
  id?: string;
} & {
  encryption: "auto" | "yes" | "no";
  ip: string;
  name: string;
  protocol: "H.323" | "SIP";
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### Type Declaration

###### encryption

```ts
encryption: "auto" | "yes" | "no";
```

###### ip

```ts
ip: string;
```

###### name

```ts
name: string;
```

###### protocol

```ts
protocol: "H.323" | "SIP";
```

##### POST /meetings/\{meetingId\}/batch\_polls

```ts
POST /meetings/{meetingId}/batch_polls: {
  polls?: readonly {
     anonymous?: boolean;
     id?: string;
     poll_type?: 1 | 2 | 3;
     questions?: readonly {
        answer_max_character?: number;
        answer_min_character?: number;
        answer_required?: boolean;
        answers?: readonly string[];
        case_sensitive?: boolean;
        name?: string;
        prompts?: readonly {
           prompt_question?: string;
           prompt_right_answers?: readonly string[];
        }[];
        rating_max_label?: string;
        rating_max_value?: number;
        rating_min_label?: string;
        rating_min_value?: number;
        right_answers?: readonly string[];
        show_as_dropdown?: boolean;
        type?:   | "single"
           | "multiple"
           | "matching"
           | "rank_order"
           | "short_answer"
           | "long_answer"
           | "fill_in_the_blank"
           | "rating_scale";
     }[];
     status?: "started" | "ended" | "notstart" | "sharing";
     title?: string;
  }[];
};
```

###### polls?

```ts
optional polls?: readonly {
  anonymous?: boolean;
  id?: string;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  status?: "started" | "ended" | "notstart" | "sharing";
  title?: string;
}[];
```

##### POST /meetings/\{meetingId\}/batch\_registrants

```ts
POST /meetings/{meetingId}/batch_registrants: {
  registrants?: readonly {
     email?: string;
     join_url?: string;
     participant_pin_code?: number;
     registrant_id?: string;
  }[];
};
```

###### registrants?

```ts
optional registrants?: readonly {
  email?: string;
  join_url?: string;
  participant_pin_code?: number;
  registrant_id?: string;
}[];
```

##### POST /meetings/\{meetingId\}/invite\_links

```ts
POST /meetings/{meetingId}/invite_links: {
  attendees?: readonly {
     join_url?: string;
     name?: string;
  }[];
};
```

###### attendees?

```ts
optional attendees?: readonly {
  join_url?: string;
  name?: string;
}[];
```

##### POST /meetings/\{meetingId\}/open\_apps

```ts
POST /meetings/{meetingId}/open_apps: {
  app_id?: string;
  id?: number;
  start_time?: string;
};
```

###### app\_id?

```ts
optional app_id?: string;
```

###### id?

```ts
optional id?: number;
```

###### start\_time?

```ts
optional start_time?: string;
```

##### POST /meetings/\{meetingId\}/polls

```ts
POST /meetings/{meetingId}/polls: {
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### status?

```ts
optional status?: "started" | "ended" | "notstart" | "sharing";
```

###### Type Declaration

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### POST /meetings/\{meetingId\}/recordings/registrants

```ts
POST /meetings/{meetingId}/recordings/registrants: {
  id?: number;
  registrant_id?: string;
  share_url?: string;
  topic?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### registrant\_id?

```ts
optional registrant_id?: string;
```

###### share\_url?

```ts
optional share_url?: string;
```

###### topic?

```ts
optional topic?: string;
```

##### POST /meetings/\{meetingId\}/registrants

```ts
POST /meetings/{meetingId}/registrants: {
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: string;
  }[];
  participant_pin_code?: number;
  registrant_id?: string;
  start_time?: string;
  topic?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### occurrences?

```ts
optional occurrences?: readonly {
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: string;
}[];
```

###### participant\_pin\_code?

```ts
optional participant_pin_code?: number;
```

###### registrant\_id?

```ts
optional registrant_id?: string;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### topic?

```ts
optional topic?: string;
```

##### POST /meetings/\{meetingId\}/sip\_dialing

```ts
POST /meetings/{meetingId}/sip_dialing: {
  expire_in?: number;
  paid_crc_plan_participant?: boolean;
  participant_identifier_code?: string;
  sip_dialing?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: number;
```

###### paid\_crc\_plan\_participant?

```ts
optional paid_crc_plan_participant?: boolean;
```

###### participant\_identifier\_code?

```ts
optional participant_identifier_code?: string;
```

###### sip\_dialing?

```ts
optional sip_dialing?: string;
```

##### POST /sip\_phones/phones

```ts
POST /sip_phones/phones: {
  authorization_name?: string;
  display_number?: string;
  domain?: string;
  password?: string;
  phone_id?: string;
  registration_expire_time?: number;
  server?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_2?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  server_3?: {
     proxy_server?: string;
     register_server?: string;
     transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
  };
  user_email?: string;
  user_name?: string;
  voice_mail?: string;
};
```

###### authorization\_name?

```ts
optional authorization_name?: string;
```

###### display\_number?

```ts
optional display_number?: string;
```

###### domain?

```ts
optional domain?: string;
```

###### password?

```ts
optional password?: string;
```

###### phone\_id?

```ts
optional phone_id?: string;
```

###### registration\_expire\_time?

```ts
optional registration_expire_time?: number;
```

###### server?

```ts
optional server?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server.register\_server?

```ts
optional register_server?: string;
```

###### server.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### server\_2?

```ts
optional server_2?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server\_2.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server\_2.register\_server?

```ts
optional register_server?: string;
```

###### server\_2.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### server\_3?

```ts
optional server_3?: {
  proxy_server?: string;
  register_server?: string;
  transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
};
```

###### server\_3.proxy\_server?

```ts
optional proxy_server?: string;
```

###### server\_3.register\_server?

```ts
optional register_server?: string;
```

###### server\_3.transport\_protocol?

```ts
optional transport_protocol?: "UDP" | "TCP" | "TLS" | "AUTO";
```

###### user\_email?

```ts
optional user_email?: string;
```

###### user\_name?

```ts
optional user_name?: string;
```

###### voice\_mail?

```ts
optional voice_mail?: string;
```

##### POST /tracking\_fields

```ts
POST /tracking_fields: {
  id?: string;
} & {
  field?: string;
  recommended_values?: readonly string[];
  required?: boolean;
  visible?: boolean;
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### Type Declaration

###### field?

```ts
optional field?: string;
```

###### recommended\_values?

```ts
optional recommended_values?: readonly string[];
```

###### required?

```ts
optional required?: boolean;
```

###### visible?

```ts
optional visible?: boolean;
```

##### POST /users/\{userId\}/meeting\_templates

```ts
POST /users/{userId}/meeting_templates: {
  id?: string;
  name?: string;
};
```

###### id?

```ts
optional id?: string;
```

###### name?

```ts
optional name?: string;
```

##### POST /users/\{userId\}/meetings

```ts
POST /users/{userId}/meetings: {
  agenda?: string;
  assistant_id?: string;
  chat_join_url?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  dynamic_host_key?: string;
  encrypted_password?: string;
  h323_password?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  pmi?: string;
  pre_schedule?: boolean;
  pstn_password?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
  };
  registration_url?: string;
  settings?: {
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_manage_cloud_recording?: boolean;
     alternative_host_manage_meeting_summary?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     alternative_hosts_email_notification?: boolean;
     approval_type?: 0 | 1 | 2;
     approved_or_denied_countries_or_regions?: {
        approved_list?: readonly string[];
        denied_list?: readonly string[];
        enable?: boolean;
        method?: "approve" | "deny";
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_exception?: readonly {
        email?: string;
        join_url?: string;
        name?: string;
     }[];
     authentication_name?: string;
     authentication_option?: string;
     auto_add_recording_to_video_management?: {
        channels?: readonly {
           channel_id: string;
           name?: string;
        }[];
        enable: boolean;
     };
     auto_recording?: "none" | "local" | "cloud";
     auto_start_ai_companion_questions?: boolean;
     auto_start_meeting_summary?: boolean;
     breakout_room?: {
        enable?: boolean;
        rooms?: readonly {
           name?: string;
           participants?: readonly string[];
        }[];
     };
     calendar_type?: 1 | 2;
     close_registration?: boolean;
     cn_meeting?: boolean;
     contact_email?: string;
     contact_name?: string;
     continuous_meeting_chat?: {
        auto_add_invited_external_users?: boolean;
        auto_add_meeting_participants?: boolean;
        channel_id?: string;
        enable?: boolean;
     };
     custom_keys?: readonly {
        key?: string;
        value?: string;
     }[];
     device_testing?: boolean;
     disable_participant_video?: boolean;
     email_in_attendee_report?: boolean;
     email_notification?: boolean;
     encryption_type?: "enhanced_encryption" | "e2ee";
     enforce_login?: boolean;
     enforce_login_domains?: string;
     focus_mode?: boolean;
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree";
     }[];
     host_save_video_order?: boolean;
     host_video?: boolean;
     in_meeting?: boolean;
     internal_meeting?: boolean;
     jbh_time?: 0 | 5 | 10 | 15;
     join_before_host?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     meeting_invitees?: readonly {
        email?: string;
     }[];
     mute_upon_entry?: boolean;
     participant_focused_meeting?: boolean;
     participant_video?: boolean;
     private_meeting?: boolean;
     push_change_to_calendar?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_submit_questions?: boolean;
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        enable?: boolean;
        question_visibility?: "all" | "answered";
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     resources?: readonly {
        permission_level?: "editor" | "commenter" | "viewer";
        resource_id?: string;
        resource_type?: "whiteboard";
     }[];
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     summary_template_id?: string;
     use_pmi?: boolean;
     waiting_room?: boolean;
     waiting_room_options?: {
        mode: "custom" | "follow_setting";
        who_goes_to_waiting_room?:   | "everyone"
           | "users_not_in_account"
           | "users_not_in_account_or_whitelisted_domains"
           | "users_not_on_invite"
           | "users_not_in_org";
     };
     watermark?: boolean;
     who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
     who_will_receive_summary?: 1 | 2 | 3 | 4;
  };
  start_time?: string;
  start_url?: string;
  status?: "started" | "waiting";
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  type?: 1 | 2 | 3 | 8 | 10;
  uuid?: string;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### assistant\_id?

```ts
optional assistant_id?: string;
```

###### chat\_join\_url?

```ts
optional chat_join_url?: string;
```

###### created\_at?

```ts
optional created_at?: string;
```

###### creation\_source?

```ts
optional creation_source?: "other" | "open_api" | "web_portal";
```

###### duration?

```ts
optional duration?: number;
```

###### dynamic\_host\_key?

```ts
optional dynamic_host_key?: string;
```

###### encrypted\_password?

```ts
optional encrypted_password?: string;
```

###### h323\_password?

```ts
optional h323_password?: string;
```

###### host\_email?

```ts
optional host_email?: string;
```

###### host\_id?

```ts
optional host_id?: string;
```

###### id?

```ts
optional id?: number;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### occurrences?

```ts
optional occurrences?: readonly {
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}[];
```

###### password?

```ts
optional password?: string;
```

###### pmi?

```ts
optional pmi?: string;
```

###### pre\_schedule?

```ts
optional pre_schedule?: boolean;
```

###### pstn\_password?

```ts
optional pstn_password?: string;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: "2" | "1" | "3" | "4" | "5" | "6" | "7";
```

###### registration\_url?

```ts
optional registration_url?: string;
```

###### settings?

```ts
optional settings?: {
  additional_data_center_regions?: readonly string[];
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_manage_cloud_recording?: boolean;
  alternative_host_manage_meeting_summary?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  alternative_hosts_email_notification?: boolean;
  approval_type?: 0 | 1 | 2;
  approved_or_denied_countries_or_regions?: {
     approved_list?: readonly string[];
     denied_list?: readonly string[];
     enable?: boolean;
     method?: "approve" | "deny";
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_exception?: readonly {
     email?: string;
     join_url?: string;
     name?: string;
  }[];
  authentication_name?: string;
  authentication_option?: string;
  auto_add_recording_to_video_management?: {
     channels?: readonly {
        channel_id: string;
        name?: string;
     }[];
     enable: boolean;
  };
  auto_recording?: "none" | "local" | "cloud";
  auto_start_ai_companion_questions?: boolean;
  auto_start_meeting_summary?: boolean;
  breakout_room?: {
     enable?: boolean;
     rooms?: readonly {
        name?: string;
        participants?: readonly string[];
     }[];
  };
  calendar_type?: 1 | 2;
  close_registration?: boolean;
  cn_meeting?: boolean;
  contact_email?: string;
  contact_name?: string;
  continuous_meeting_chat?: {
     auto_add_invited_external_users?: boolean;
     auto_add_meeting_participants?: boolean;
     channel_id?: string;
     enable?: boolean;
  };
  custom_keys?: readonly {
     key?: string;
     value?: string;
  }[];
  device_testing?: boolean;
  disable_participant_video?: boolean;
  email_in_attendee_report?: boolean;
  email_notification?: boolean;
  encryption_type?: "enhanced_encryption" | "e2ee";
  enforce_login?: boolean;
  enforce_login_domains?: string;
  focus_mode?: boolean;
  global_dial_in_countries?: readonly string[];
  global_dial_in_numbers?: readonly {
     city?: string;
     country?: string;
     country_name?: string;
     number?: string;
     type?: "toll" | "tollfree";
  }[];
  host_save_video_order?: boolean;
  host_video?: boolean;
  in_meeting?: boolean;
  internal_meeting?: boolean;
  jbh_time?: 0 | 5 | 10 | 15;
  join_before_host?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  meeting_invitees?: readonly {
     email?: string;
  }[];
  mute_upon_entry?: boolean;
  participant_focused_meeting?: boolean;
  participant_video?: boolean;
  private_meeting?: boolean;
  push_change_to_calendar?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_submit_questions?: boolean;
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     enable?: boolean;
     question_visibility?: "all" | "answered";
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  resources?: readonly {
     permission_level?: "editor" | "commenter" | "viewer";
     resource_id?: string;
     resource_type?: "whiteboard";
  }[];
  show_join_info?: boolean;
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  summary_template_id?: string;
  use_pmi?: boolean;
  waiting_room?: boolean;
  waiting_room_options?: {
     mode: "custom" | "follow_setting";
     who_goes_to_waiting_room?:   | "everyone"
        | "users_not_in_account"
        | "users_not_in_account_or_whitelisted_domains"
        | "users_not_on_invite"
        | "users_not_in_org";
  };
  watermark?: boolean;
  who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
  who_will_receive_summary?: 1 | 2 | 3 | 4;
};
```

###### settings.additional\_data\_center\_regions?

```ts
optional additional_data_center_regions?: readonly string[];
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_manage\_cloud\_recording?

```ts
optional alternative_host_manage_cloud_recording?: boolean;
```

###### settings.alternative\_host\_manage\_meeting\_summary?

```ts
optional alternative_host_manage_meeting_summary?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.alternative\_hosts\_email\_notification?

```ts
optional alternative_hosts_email_notification?: boolean;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.approved\_or\_denied\_countries\_or\_regions?

```ts
optional approved_or_denied_countries_or_regions?: {
  approved_list?: readonly string[];
  denied_list?: readonly string[];
  enable?: boolean;
  method?: "approve" | "deny";
};
```

###### settings.approved\_or\_denied\_countries\_or\_regions.approved\_list?

```ts
optional approved_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.denied\_list?

```ts
optional denied_list?: readonly string[];
```

###### settings.approved\_or\_denied\_countries\_or\_regions.enable?

```ts
optional enable?: boolean;
```

###### settings.approved\_or\_denied\_countries\_or\_regions.method?

```ts
optional method?: "approve" | "deny";
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_exception?

```ts
optional authentication_exception?: readonly {
  email?: string;
  join_url?: string;
  name?: string;
}[];
```

###### settings.authentication\_name?

```ts
optional authentication_name?: string;
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_add\_recording\_to\_video\_management?

```ts
optional auto_add_recording_to_video_management?: {
  channels?: readonly {
     channel_id: string;
     name?: string;
  }[];
  enable: boolean;
};
```

###### settings.auto\_add\_recording\_to\_video\_management.channels?

```ts
optional channels?: readonly {
  channel_id: string;
  name?: string;
}[];
```

###### settings.auto\_add\_recording\_to\_video\_management.enable

```ts
enable: boolean;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.auto\_start\_ai\_companion\_questions?

```ts
optional auto_start_ai_companion_questions?: boolean;
```

###### settings.auto\_start\_meeting\_summary?

```ts
optional auto_start_meeting_summary?: boolean;
```

###### settings.breakout\_room?

```ts
optional breakout_room?: {
  enable?: boolean;
  rooms?: readonly {
     name?: string;
     participants?: readonly string[];
  }[];
};
```

###### settings.breakout\_room.enable?

```ts
optional enable?: boolean;
```

###### settings.breakout\_room.rooms?

```ts
optional rooms?: readonly {
  name?: string;
  participants?: readonly string[];
}[];
```

###### settings.calendar\_type?

```ts
optional calendar_type?: 1 | 2;
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.cn\_meeting?

```ts
optional cn_meeting?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.continuous\_meeting\_chat?

```ts
optional continuous_meeting_chat?: {
  auto_add_invited_external_users?: boolean;
  auto_add_meeting_participants?: boolean;
  channel_id?: string;
  enable?: boolean;
};
```

###### settings.continuous\_meeting\_chat.auto\_add\_invited\_external\_users?

```ts
optional auto_add_invited_external_users?: boolean;
```

###### settings.continuous\_meeting\_chat.auto\_add\_meeting\_participants?

```ts
optional auto_add_meeting_participants?: boolean;
```

###### settings.continuous\_meeting\_chat.channel\_id?

```ts
optional channel_id?: string;
```

###### settings.continuous\_meeting\_chat.enable?

```ts
optional enable?: boolean;
```

###### settings.custom\_keys?

```ts
optional custom_keys?: readonly {
  key?: string;
  value?: string;
}[];
```

###### settings.device\_testing?

```ts
optional device_testing?: boolean;
```

###### settings.disable\_participant\_video?

```ts
optional disable_participant_video?: boolean;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_notification?

```ts
optional email_notification?: boolean;
```

###### settings.encryption\_type?

```ts
optional encryption_type?: "enhanced_encryption" | "e2ee";
```

###### settings.enforce\_login?

```ts
optional enforce_login?: boolean;
```

###### settings.enforce\_login\_domains?

```ts
optional enforce_login_domains?: string;
```

###### settings.focus\_mode?

```ts
optional focus_mode?: boolean;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.global\_dial\_in\_numbers?

```ts
optional global_dial_in_numbers?: readonly {
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree";
}[];
```

###### settings.host\_save\_video\_order?

```ts
optional host_save_video_order?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.in\_meeting?

```ts
optional in_meeting?: boolean;
```

###### settings.internal\_meeting?

```ts
optional internal_meeting?: boolean;
```

###### settings.jbh\_time?

```ts
optional jbh_time?: 0 | 5 | 10 | 15;
```

###### settings.join\_before\_host?

```ts
optional join_before_host?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.meeting\_invitees?

```ts
optional meeting_invitees?: readonly {
  email?: string;
}[];
```

###### settings.mute\_upon\_entry?

```ts
optional mute_upon_entry?: boolean;
```

###### settings.participant\_focused\_meeting?

```ts
optional participant_focused_meeting?: boolean;
```

###### settings.participant\_video?

```ts
optional participant_video?: boolean;
```

###### settings.private\_meeting?

```ts
optional private_meeting?: boolean;
```

###### settings.push\_change\_to\_calendar?

```ts
optional push_change_to_calendar?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_submit_questions?: boolean;
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  enable?: boolean;
  question_visibility?: "all" | "answered";
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.question\_and\_answer.question\_visibility?

```ts
optional question_visibility?: "all" | "answered";
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.resources?

```ts
optional resources?: readonly {
  permission_level?: "editor" | "commenter" | "viewer";
  resource_id?: string;
  resource_type?: "whiteboard";
}[];
```

###### settings.show\_join\_info?

```ts
optional show_join_info?: boolean;
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.summary\_template\_id?

```ts
optional summary_template_id?: string;
```

###### settings.use\_pmi?

```ts
optional use_pmi?: boolean;
```

###### settings.waiting\_room?

```ts
optional waiting_room?: boolean;
```

###### settings.waiting\_room\_options?

```ts
optional waiting_room_options?: {
  mode: "custom" | "follow_setting";
  who_goes_to_waiting_room?:   | "everyone"
     | "users_not_in_account"
     | "users_not_in_account_or_whitelisted_domains"
     | "users_not_on_invite"
     | "users_not_in_org";
};
```

###### settings.waiting\_room\_options.mode

```ts
mode: "custom" | "follow_setting";
```

###### settings.waiting\_room\_options.who\_goes\_to\_waiting\_room?

```ts
optional who_goes_to_waiting_room?:
  | "everyone"
  | "users_not_in_account"
  | "users_not_in_account_or_whitelisted_domains"
  | "users_not_on_invite"
  | "users_not_in_org";
```

###### settings.watermark?

```ts
optional watermark?: boolean;
```

###### settings.who\_can\_ask\_questions?

```ts
optional who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
```

###### settings.who\_will\_receive\_summary?

```ts
optional who_will_receive_summary?: 1 | 2 | 3 | 4;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### start\_url?

```ts
optional start_url?: string;
```

###### status?

```ts
optional status?: "started" | "waiting";
```

###### template\_id?

```ts
optional template_id?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
  visible?: boolean;
}[];
```

###### type?

```ts
optional type?: 1 | 2 | 3 | 8 | 10;
```

###### uuid?

```ts
optional uuid?: string;
```

##### POST /users/\{userId\}/tsp

```ts
POST /users/{userId}/tsp: {
  id?: string;
} & {
  conference_code: string;
  dial_in_numbers?: readonly {
     code?: string;
     country_label?: string;
     number?: string;
     type?: "toll" | "tollfree" | "media_link";
  }[];
  leader_pin: string;
  tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### Type Declaration

###### conference\_code

```ts
conference_code: string;
```

###### dial\_in\_numbers?

```ts
optional dial_in_numbers?: readonly {
  code?: string;
  country_label?: string;
  number?: string;
  type?: "toll" | "tollfree" | "media_link";
}[];
```

###### leader\_pin

```ts
leader_pin: string;
```

###### tsp\_bridge?

```ts
optional tsp_bridge?: "US_TSP_TB" | "EU_TSP_TB";
```

##### POST /users/\{userId\}/webinar\_templates

```ts
POST /users/{userId}/webinar_templates: {
  id?: string;
  name?: string;
};
```

###### id?

```ts
optional id?: string;
```

###### name?

```ts
optional name?: string;
```

##### POST /users/\{userId\}/webinars

```ts
POST /users/{userId}/webinars: {
  agenda?: string;
  created_at?: string;
  creation_source?: "other" | "open_api" | "web_portal";
  duration?: number;
  encrypted_passcode?: string;
  h323_passcode?: string;
  host_email?: string;
  host_id?: string;
  id?: number;
  is_simulive?: boolean;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: "available" | "deleted";
  }[];
  password?: string;
  record_file_id?: string;
  recurrence?: {
     end_date_time?: string;
     end_times?: number;
     monthly_day?: number;
     monthly_week?: -1 | 1 | 2 | 3 | 4;
     monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
     repeat_interval?: number;
     type: 1 | 2 | 3;
     weekly_days?: string;
  };
  registration_url?: string;
  settings?: {
     add_audio_watermark?: boolean;
     add_watermark?: boolean;
     additional_data_center_regions?: readonly string[];
     allow_host_control_participant_mute_state?: boolean;
     allow_multiple_devices?: boolean;
     alternative_host_update_polls?: boolean;
     alternative_hosts?: string;
     approval_type?: 0 | 1 | 2;
     attendees_and_panelists_reminder_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     audio?: "both" | "telephony" | "voip" | "thirdParty";
     audio_conference_info?: string;
     authentication_domains?: string;
     authentication_name?: string;
     authentication_option?: string;
     auto_recording?: "none" | "local" | "cloud";
     close_registration?: boolean;
     contact_email?: string;
     contact_name?: string;
     email_in_attendee_report?: boolean;
     email_language?: string;
     enable_session_branding?: boolean;
     enforce_login?: boolean;
     enforce_login_domains?: string;
     follow_up_absentees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     follow_up_attendees_email_notification?: {
        enable?: boolean;
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
     };
     global_dial_in_countries?: readonly string[];
     global_dial_in_numbers?: readonly {
        city?: string;
        country?: string;
        country_name?: string;
        number?: string;
        type?: "toll" | "tollfree" | "premium";
     }[];
     hd_video?: boolean;
     hd_video_for_attendees?: boolean;
     host_video?: boolean;
     language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           interpreter_languages?: string;
           languages?: string;
        }[];
     };
     meeting_authentication?: boolean;
     on_demand?: boolean;
     panelist_authentication?: boolean;
     panelists_invitation_email_notification?: boolean;
     panelists_video?: boolean;
     post_webinar_survey?: boolean;
     practice_session?: boolean;
     question_and_answer?: {
        allow_anonymous_questions?: boolean;
        allow_auto_reply?: boolean;
        allow_submit_questions?: boolean;
        answer_questions?: "all" | "only";
        attendees_can_comment?: boolean;
        attendees_can_upvote?: boolean;
        auto_reply_text?: string;
        enable?: boolean;
     };
     registrants_confirmation_email?: boolean;
     registrants_email_notification?: boolean;
     registrants_restrict_number?: number;
     registration_type?: 1 | 2 | 3;
     request_permission_to_unmute_participants?: boolean;
     send_1080p_video_to_attendees?: boolean;
     show_join_info?: boolean;
     show_share_button?: boolean;
     sign_language_interpretation?: {
        enable?: boolean;
        interpreters?: readonly {
           email?: string;
           sign_language?: string;
        }[];
     };
     survey_url?: string;
  };
  simulive_delay_start?: {
     enable?: boolean;
     time?: number;
     timeunit?: string;
  };
  start_time?: string;
  start_url?: string;
  template_id?: string;
  timezone?: string;
  topic?: string;
  tracking_fields?: readonly {
     field?: string;
     value?: string;
     visible?: boolean;
  }[];
  transition_to_live?: boolean;
  type?: 5 | 6 | 9;
  uuid?: string;
};
```

###### agenda?

```ts
optional agenda?: string;
```

###### created\_at?

```ts
optional created_at?: string;
```

###### creation\_source?

```ts
optional creation_source?: "other" | "open_api" | "web_portal";
```

###### duration?

```ts
optional duration?: number;
```

###### encrypted\_passcode?

```ts
optional encrypted_passcode?: string;
```

###### h323\_passcode?

```ts
optional h323_passcode?: string;
```

###### host\_email?

```ts
optional host_email?: string;
```

###### host\_id?

```ts
optional host_id?: string;
```

###### id?

```ts
optional id?: number;
```

###### is\_simulive?

```ts
optional is_simulive?: boolean;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### occurrences?

```ts
optional occurrences?: readonly {
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: "available" | "deleted";
}[];
```

###### password?

```ts
optional password?: string;
```

###### record\_file\_id?

```ts
optional record_file_id?: string;
```

###### recurrence?

```ts
optional recurrence?: {
  end_date_time?: string;
  end_times?: number;
  monthly_day?: number;
  monthly_week?: -1 | 1 | 2 | 3 | 4;
  monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  repeat_interval?: number;
  type: 1 | 2 | 3;
  weekly_days?: string;
};
```

###### recurrence.end\_date\_time?

```ts
optional end_date_time?: string;
```

###### recurrence.end\_times?

```ts
optional end_times?: number;
```

###### recurrence.monthly\_day?

```ts
optional monthly_day?: number;
```

###### recurrence.monthly\_week?

```ts
optional monthly_week?: -1 | 1 | 2 | 3 | 4;
```

###### recurrence.monthly\_week\_day?

```ts
optional monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### recurrence.repeat\_interval?

```ts
optional repeat_interval?: number;
```

###### recurrence.type

```ts
type: 1 | 2 | 3;
```

###### recurrence.weekly\_days?

```ts
optional weekly_days?: string;
```

###### registration\_url?

```ts
optional registration_url?: string;
```

###### settings?

```ts
optional settings?: {
  add_audio_watermark?: boolean;
  add_watermark?: boolean;
  additional_data_center_regions?: readonly string[];
  allow_host_control_participant_mute_state?: boolean;
  allow_multiple_devices?: boolean;
  alternative_host_update_polls?: boolean;
  alternative_hosts?: string;
  approval_type?: 0 | 1 | 2;
  attendees_and_panelists_reminder_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  audio?: "both" | "telephony" | "voip" | "thirdParty";
  audio_conference_info?: string;
  authentication_domains?: string;
  authentication_name?: string;
  authentication_option?: string;
  auto_recording?: "none" | "local" | "cloud";
  close_registration?: boolean;
  contact_email?: string;
  contact_name?: string;
  email_in_attendee_report?: boolean;
  email_language?: string;
  enable_session_branding?: boolean;
  enforce_login?: boolean;
  enforce_login_domains?: string;
  follow_up_absentees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  follow_up_attendees_email_notification?: {
     enable?: boolean;
     type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  };
  global_dial_in_countries?: readonly string[];
  global_dial_in_numbers?: readonly {
     city?: string;
     country?: string;
     country_name?: string;
     number?: string;
     type?: "toll" | "tollfree" | "premium";
  }[];
  hd_video?: boolean;
  hd_video_for_attendees?: boolean;
  host_video?: boolean;
  language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        interpreter_languages?: string;
        languages?: string;
     }[];
  };
  meeting_authentication?: boolean;
  on_demand?: boolean;
  panelist_authentication?: boolean;
  panelists_invitation_email_notification?: boolean;
  panelists_video?: boolean;
  post_webinar_survey?: boolean;
  practice_session?: boolean;
  question_and_answer?: {
     allow_anonymous_questions?: boolean;
     allow_auto_reply?: boolean;
     allow_submit_questions?: boolean;
     answer_questions?: "all" | "only";
     attendees_can_comment?: boolean;
     attendees_can_upvote?: boolean;
     auto_reply_text?: string;
     enable?: boolean;
  };
  registrants_confirmation_email?: boolean;
  registrants_email_notification?: boolean;
  registrants_restrict_number?: number;
  registration_type?: 1 | 2 | 3;
  request_permission_to_unmute_participants?: boolean;
  send_1080p_video_to_attendees?: boolean;
  show_join_info?: boolean;
  show_share_button?: boolean;
  sign_language_interpretation?: {
     enable?: boolean;
     interpreters?: readonly {
        email?: string;
        sign_language?: string;
     }[];
  };
  survey_url?: string;
};
```

###### settings.add\_audio\_watermark?

```ts
optional add_audio_watermark?: boolean;
```

###### settings.add\_watermark?

```ts
optional add_watermark?: boolean;
```

###### settings.additional\_data\_center\_regions?

```ts
optional additional_data_center_regions?: readonly string[];
```

###### settings.allow\_host\_control\_participant\_mute\_state?

```ts
optional allow_host_control_participant_mute_state?: boolean;
```

###### settings.allow\_multiple\_devices?

```ts
optional allow_multiple_devices?: boolean;
```

###### settings.alternative\_host\_update\_polls?

```ts
optional alternative_host_update_polls?: boolean;
```

###### settings.alternative\_hosts?

```ts
optional alternative_hosts?: string;
```

###### settings.approval\_type?

```ts
optional approval_type?: 0 | 1 | 2;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification?

```ts
optional attendees_and_panelists_reminder_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.attendees\_and\_panelists\_reminder\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.audio?

```ts
optional audio?: "both" | "telephony" | "voip" | "thirdParty";
```

###### settings.audio\_conference\_info?

```ts
optional audio_conference_info?: string;
```

###### settings.authentication\_domains?

```ts
optional authentication_domains?: string;
```

###### settings.authentication\_name?

```ts
optional authentication_name?: string;
```

###### settings.authentication\_option?

```ts
optional authentication_option?: string;
```

###### settings.auto\_recording?

```ts
optional auto_recording?: "none" | "local" | "cloud";
```

###### settings.close\_registration?

```ts
optional close_registration?: boolean;
```

###### settings.contact\_email?

```ts
optional contact_email?: string;
```

###### settings.contact\_name?

```ts
optional contact_name?: string;
```

###### settings.email\_in\_attendee\_report?

```ts
optional email_in_attendee_report?: boolean;
```

###### settings.email\_language?

```ts
optional email_language?: string;
```

###### settings.enable\_session\_branding?

```ts
optional enable_session_branding?: boolean;
```

###### settings.enforce\_login?

```ts
optional enforce_login?: boolean;
```

###### settings.enforce\_login\_domains?

```ts
optional enforce_login_domains?: string;
```

###### settings.follow\_up\_absentees\_email\_notification?

```ts
optional follow_up_absentees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_absentees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_absentees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.follow\_up\_attendees\_email\_notification?

```ts
optional follow_up_attendees_email_notification?: {
  enable?: boolean;
  type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
```

###### settings.follow\_up\_attendees\_email\_notification.enable?

```ts
optional enable?: boolean;
```

###### settings.follow\_up\_attendees\_email\_notification.type?

```ts
optional type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

###### settings.global\_dial\_in\_countries?

```ts
optional global_dial_in_countries?: readonly string[];
```

###### settings.global\_dial\_in\_numbers?

```ts
optional global_dial_in_numbers?: readonly {
  city?: string;
  country?: string;
  country_name?: string;
  number?: string;
  type?: "toll" | "tollfree" | "premium";
}[];
```

###### settings.hd\_video?

```ts
optional hd_video?: boolean;
```

###### settings.hd\_video\_for\_attendees?

```ts
optional hd_video_for_attendees?: boolean;
```

###### settings.host\_video?

```ts
optional host_video?: boolean;
```

###### settings.language\_interpretation?

```ts
optional language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     interpreter_languages?: string;
     languages?: string;
  }[];
};
```

###### settings.language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  interpreter_languages?: string;
  languages?: string;
}[];
```

###### settings.meeting\_authentication?

```ts
optional meeting_authentication?: boolean;
```

###### settings.on\_demand?

```ts
optional on_demand?: boolean;
```

###### settings.panelist\_authentication?

```ts
optional panelist_authentication?: boolean;
```

###### settings.panelists\_invitation\_email\_notification?

```ts
optional panelists_invitation_email_notification?: boolean;
```

###### settings.panelists\_video?

```ts
optional panelists_video?: boolean;
```

###### settings.post\_webinar\_survey?

```ts
optional post_webinar_survey?: boolean;
```

###### settings.practice\_session?

```ts
optional practice_session?: boolean;
```

###### settings.question\_and\_answer?

```ts
optional question_and_answer?: {
  allow_anonymous_questions?: boolean;
  allow_auto_reply?: boolean;
  allow_submit_questions?: boolean;
  answer_questions?: "all" | "only";
  attendees_can_comment?: boolean;
  attendees_can_upvote?: boolean;
  auto_reply_text?: string;
  enable?: boolean;
};
```

###### settings.question\_and\_answer.allow\_anonymous\_questions?

```ts
optional allow_anonymous_questions?: boolean;
```

###### settings.question\_and\_answer.allow\_auto\_reply?

```ts
optional allow_auto_reply?: boolean;
```

###### settings.question\_and\_answer.allow\_submit\_questions?

```ts
optional allow_submit_questions?: boolean;
```

###### settings.question\_and\_answer.answer\_questions?

```ts
optional answer_questions?: "all" | "only";
```

###### settings.question\_and\_answer.attendees\_can\_comment?

```ts
optional attendees_can_comment?: boolean;
```

###### settings.question\_and\_answer.attendees\_can\_upvote?

```ts
optional attendees_can_upvote?: boolean;
```

###### settings.question\_and\_answer.auto\_reply\_text?

```ts
optional auto_reply_text?: string;
```

###### settings.question\_and\_answer.enable?

```ts
optional enable?: boolean;
```

###### settings.registrants\_confirmation\_email?

```ts
optional registrants_confirmation_email?: boolean;
```

###### settings.registrants\_email\_notification?

```ts
optional registrants_email_notification?: boolean;
```

###### settings.registrants\_restrict\_number?

```ts
optional registrants_restrict_number?: number;
```

###### settings.registration\_type?

```ts
optional registration_type?: 1 | 2 | 3;
```

###### settings.request\_permission\_to\_unmute\_participants?

```ts
optional request_permission_to_unmute_participants?: boolean;
```

###### settings.send\_1080p\_video\_to\_attendees?

```ts
optional send_1080p_video_to_attendees?: boolean;
```

###### settings.show\_join\_info?

```ts
optional show_join_info?: boolean;
```

###### settings.show\_share\_button?

```ts
optional show_share_button?: boolean;
```

###### settings.sign\_language\_interpretation?

```ts
optional sign_language_interpretation?: {
  enable?: boolean;
  interpreters?: readonly {
     email?: string;
     sign_language?: string;
  }[];
};
```

###### settings.sign\_language\_interpretation.enable?

```ts
optional enable?: boolean;
```

###### settings.sign\_language\_interpretation.interpreters?

```ts
optional interpreters?: readonly {
  email?: string;
  sign_language?: string;
}[];
```

###### settings.survey\_url?

```ts
optional survey_url?: string;
```

###### simulive\_delay\_start?

```ts
optional simulive_delay_start?: {
  enable?: boolean;
  time?: number;
  timeunit?: string;
};
```

###### simulive\_delay\_start.enable?

```ts
optional enable?: boolean;
```

###### simulive\_delay\_start.time?

```ts
optional time?: number;
```

###### simulive\_delay\_start.timeunit?

```ts
optional timeunit?: string;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### start\_url?

```ts
optional start_url?: string;
```

###### template\_id?

```ts
optional template_id?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

###### topic?

```ts
optional topic?: string;
```

###### tracking\_fields?

```ts
optional tracking_fields?: readonly {
  field?: string;
  value?: string;
  visible?: boolean;
}[];
```

###### transition\_to\_live?

```ts
optional transition_to_live?: boolean;
```

###### type?

```ts
optional type?: 5 | 6 | 9;
```

###### uuid?

```ts
optional uuid?: string;
```

##### POST /webinars/\{webinarId\}/batch\_registrants

```ts
POST /webinars/{webinarId}/batch_registrants: {
  registrants?: readonly {
     email?: string;
     join_url?: string;
     registrant_id?: string;
  }[];
};
```

###### registrants?

```ts
optional registrants?: readonly {
  email?: string;
  join_url?: string;
  registrant_id?: string;
}[];
```

##### POST /webinars/\{webinarId\}/branding/name\_tags

```ts
POST /webinars/{webinarId}/branding/name_tags: {
  accent_color?: string;
  background_color?: string;
  id?: string;
  is_default?: boolean;
  name?: string;
  text_color?: string;
};
```

###### accent\_color?

```ts
optional accent_color?: string;
```

###### background\_color?

```ts
optional background_color?: string;
```

###### id?

```ts
optional id?: string;
```

###### is\_default?

```ts
optional is_default?: boolean;
```

###### name?

```ts
optional name?: string;
```

###### text\_color?

```ts
optional text_color?: string;
```

##### POST /webinars/\{webinarId\}/branding/virtual\_backgrounds

```ts
POST /webinars/{webinarId}/branding/virtual_backgrounds: {
  id?: string;
  is_default?: boolean;
  name?: string;
  size?: number;
  type?: "image";
};
```

###### id?

```ts
optional id?: string;
```

###### is\_default?

```ts
optional is_default?: boolean;
```

###### name?

```ts
optional name?: string;
```

###### size?

```ts
optional size?: number;
```

###### type?

```ts
optional type?: "image";
```

##### POST /webinars/\{webinarId\}/branding/wallpaper

```ts
POST /webinars/{webinarId}/branding/wallpaper: {
  id?: string;
  name?: string;
  size?: number;
  type?: "image";
};
```

###### id?

```ts
optional id?: string;
```

###### name?

```ts
optional name?: string;
```

###### size?

```ts
optional size?: number;
```

###### type?

```ts
optional type?: "image";
```

##### POST /webinars/\{webinarId\}/invite\_links

```ts
POST /webinars/{webinarId}/invite_links: {
  attendees?: readonly {
     join_url?: string;
     name?: string;
  }[];
};
```

###### attendees?

```ts
optional attendees?: readonly {
  join_url?: string;
  name?: string;
}[];
```

##### POST /webinars/\{webinarId\}/panelists

```ts
POST /webinars/{webinarId}/panelists: {
  id?: string;
  updated_at?: string;
};
```

###### id?

```ts
optional id?: string;
```

###### updated\_at?

```ts
optional updated_at?: string;
```

##### POST /webinars/\{webinarId\}/polls

```ts
POST /webinars/{webinarId}/polls: {
  id?: string;
  status?: "started" | "ended" | "notstart" | "sharing";
} & {
  anonymous?: boolean;
  poll_type?: 1 | 2 | 3;
  questions?: readonly {
     answer_max_character?: number;
     answer_min_character?: number;
     answer_required?: boolean;
     answers?: readonly string[];
     case_sensitive?: boolean;
     name?: string;
     prompts?: readonly {
        prompt_question?: string;
        prompt_right_answers?: readonly string[];
     }[];
     rating_max_label?: string;
     rating_max_value?: number;
     rating_min_label?: string;
     rating_min_value?: number;
     right_answers?: readonly string[];
     show_as_dropdown?: boolean;
     type?:   | "single"
        | "multiple"
        | "matching"
        | "rank_order"
        | "short_answer"
        | "long_answer"
        | "fill_in_the_blank"
        | "rating_scale";
  }[];
  title?: string;
};
```

###### Type Declaration

###### id?

```ts
optional id?: string;
```

###### status?

```ts
optional status?: "started" | "ended" | "notstart" | "sharing";
```

###### Type Declaration

###### anonymous?

```ts
optional anonymous?: boolean;
```

###### poll\_type?

```ts
optional poll_type?: 1 | 2 | 3;
```

###### questions?

```ts
optional questions?: readonly {
  answer_max_character?: number;
  answer_min_character?: number;
  answer_required?: boolean;
  answers?: readonly string[];
  case_sensitive?: boolean;
  name?: string;
  prompts?: readonly {
     prompt_question?: string;
     prompt_right_answers?: readonly string[];
  }[];
  rating_max_label?: string;
  rating_max_value?: number;
  rating_min_label?: string;
  rating_min_value?: number;
  right_answers?: readonly string[];
  show_as_dropdown?: boolean;
  type?:   | "single"
     | "multiple"
     | "matching"
     | "rank_order"
     | "short_answer"
     | "long_answer"
     | "fill_in_the_blank"
     | "rating_scale";
}[];
```

###### title?

```ts
optional title?: string;
```

##### POST /webinars/\{webinarId\}/registrants

```ts
POST /webinars/{webinarId}/registrants: {
  id?: number;
  join_url?: string;
  occurrences?: readonly {
     duration?: number;
     occurrence_id?: string;
     start_time?: string;
     status?: string;
  }[];
  registrant_id?: string;
  start_time?: string;
  topic?: string;
};
```

###### id?

```ts
optional id?: number;
```

###### join\_url?

```ts
optional join_url?: string;
```

###### occurrences?

```ts
optional occurrences?: readonly {
  duration?: number;
  occurrence_id?: string;
  start_time?: string;
  status?: string;
}[];
```

###### registrant\_id?

```ts
optional registrant_id?: string;
```

###### start\_time?

```ts
optional start_time?: string;
```

###### topic?

```ts
optional topic?: string;
```

##### POST /webinars/\{webinarId\}/sip\_dialing

```ts
POST /webinars/{webinarId}/sip_dialing: {
  expire_in?: number;
  paid_crc_plan_participant?: boolean;
  participant_identifier_code?: string;
  sip_dialing?: string;
};
```

###### expire\_in?

```ts
optional expire_in?: number;
```

###### paid\_crc\_plan\_participant?

```ts
optional paid_crc_plan_participant?: boolean;
```

###### participant\_identifier\_code?

```ts
optional participant_identifier_code?: string;
```

###### sip\_dialing?

```ts
optional sip_dialing?: string;
```

##### PUT /meetings/\{meetingId\}/polls/\{pollId\}

```ts
PUT /meetings/{meetingId}/polls/{pollId}: void;
```

##### PUT /meetings/\{meetingId\}/recordings/\{recordingId\}/status

```ts
PUT /meetings/{meetingId}/recordings/{recordingId}/status: void;
```

##### PUT /meetings/\{meetingId\}/recordings/registrants/status

```ts
PUT /meetings/{meetingId}/recordings/registrants/status: void;
```

##### PUT /meetings/\{meetingId\}/registrants/status

```ts
PUT /meetings/{meetingId}/registrants/status: void;
```

##### PUT /meetings/\{meetingId\}/status

```ts
PUT /meetings/{meetingId}/status: void;
```

##### PUT /meetings/\{meetingUUID\}/recordings/status

```ts
PUT /meetings/{meetingUUID}/recordings/status: void;
```

##### PUT /webinars/\{webinarId\}/polls/\{pollId\}

```ts
PUT /webinars/{webinarId}/polls/{pollId}: void;
```

##### PUT /webinars/\{webinarId\}/registrants/status

```ts
PUT /webinars/{webinarId}/registrants/status: void;
```

##### PUT /webinars/\{webinarId\}/status

```ts
PUT /webinars/{webinarId}/status: void;
```

***

### ZoomOperationRequestInput

#### Properties

##### body?

```ts
optional body?: ZoomVideoProviderPayload;
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
optional query?: ZoomVideoProviderQuery;
```

***

### ZoomResource

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

***

### ZoomSignedWebhookRequest

#### Properties

##### contentType?

```ts
optional contentType?: string;
```

##### event?

```ts
optional event?: string;
```

##### json?

```ts
optional json?: ZoomWebhookEvent;
```

##### payload?

```ts
optional payload?: {
[key: string]: ZoomVideoProviderExtensionValue;
  account_id?: string;
  object?: ZoomVideoProviderExtensionValue;
  plainToken?: string;
};
```

###### Index Signature

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

###### account\_id?

```ts
optional account_id?: string;
```

###### object?

```ts
optional object?: ZoomVideoProviderExtensionValue;
```

###### plainToken?

```ts
optional plainToken?: string;
```

##### rawBody

```ts
rawBody: string;
```

##### urlValidationResponse?

```ts
optional urlValidationResponse?: ZoomWebhookValidationResponse;
```

***

### ZoomTrackingField

#### Properties

##### field

```ts
field: string;
```

##### value

```ts
value: string;
```

***

### ZoomUpdateMeetingInput

#### Properties

##### additionalFields?

```ts
optional additionalFields?: ZoomVideoProviderExtensionFields;
```

##### agenda?

```ts
optional agenda?: string;
```

##### duration?

```ts
optional duration?: number;
```

##### password?

```ts
optional password?: string;
```

##### recurrence?

```ts
optional recurrence?: ZoomMeetingRecurrence;
```

##### scheduleFor?

```ts
optional scheduleFor?: string;
```

##### settings?

```ts
optional settings?: ZoomVideoJsonObject;
```

##### startTime?

```ts
optional startTime?: string;
```

##### timezone?

```ts
optional timezone?: string;
```

##### topic?

```ts
optional topic?: string;
```

##### trackingFields?

```ts
optional trackingFields?: ZoomTrackingField[];
```

##### type?

```ts
optional type?: ZoomMeetingType;
```

***

### ZoomUserResource

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

#### Properties

##### account\_id?

```ts
optional account_id?: string;
```

##### email?

```ts
optional email?: string;
```

##### first\_name?

```ts
optional first_name?: string;
```

##### id?

```ts
optional id?: string;
```

##### last\_name?

```ts
optional last_name?: string;
```

##### status?

```ts
optional status?: string;
```

##### type?

```ts
optional type?: number;
```

***

### ZoomVideoClient

#### Properties

##### meetingsApi

```ts
meetingsApi: ZoomMeetingsApiGeneratedClient;
```

##### requestOperation

```ts
requestOperation: ZoomMeetingsGeneratedOperationCaller;
```

#### Methods

##### createMeeting()

```ts
createMeeting(input): Promise<ZoomMeetingResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZoomCreateMeetingInput`](#zoomcreatemeetinginput) |

###### Returns

`Promise`\<[`ZoomMeetingResource`](#zoommeetingresource)\>

##### deleteMeeting()

```ts
deleteMeeting(meetingId, input?): Promise<Record<string, never>>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `meetingId` | `string` \| `number` |
| `input?` | [`ZoomDeleteMeetingInput`](#zoomdeletemeetinginput) |

###### Returns

`Promise`\<`Record`\<`string`, `never`\>\>

##### getCurrentUser()

```ts
getCurrentUser(): Promise<ZoomUserResource>;
```

###### Returns

`Promise`\<[`ZoomUserResource`](#zoomuserresource)\>

##### getMeeting()

```ts
getMeeting(meetingId, input?): Promise<ZoomMeetingResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `meetingId` | `string` \| `number` |
| `input?` | [`ZoomGetMeetingInput`](#zoomgetmeetinginput) |

###### Returns

`Promise`\<[`ZoomMeetingResource`](#zoommeetingresource)\>

##### listMeetings()

```ts
listMeetings(input?): Promise<ZoomListMeetingsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`ZoomListMeetingsInput`](#zoomlistmeetingsinput) |

###### Returns

`Promise`\<[`ZoomListMeetingsResponse`](#zoomlistmeetingsresponse)\>

##### updateMeeting()

```ts
updateMeeting(meetingId, input): Promise<ZoomMeetingResource>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `meetingId` | `string` \| `number` |
| `input` | [`ZoomUpdateMeetingInput`](#zoomupdatemeetinginput) |

###### Returns

`Promise`\<[`ZoomMeetingResource`](#zoommeetingresource)\>

***

### ZoomVideoClientOptions

#### Extended by

- [`ZoomLiveCheckOptions`](#zoomlivecheckoptions)

#### Properties

##### accessToken

```ts
accessToken: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
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

##### userId?

```ts
optional userId?: string;
```

***

### ZoomVideoJsonObject

#### Extended by

- [`ZoomVideoProviderExtensionFields`](#zoomvideoproviderextensionfields)
- [`ZoomVideoProviderResponse`](#zoomvideoproviderresponse)

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

***

### ZoomVideoProviderExtensionFields

#### Extends

- [`ZoomVideoJsonObject`](#zoomvideojsonobject)

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

***

### ZoomVideoProviderResponse

#### Extends

- [`ZoomVideoJsonObject`](#zoomvideojsonobject)

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

***

### ZoomWebhookEvent

#### Indexable

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

#### Properties

##### event?

```ts
optional event?: string;
```

##### event\_ts?

```ts
optional event_ts?: number;
```

##### payload?

```ts
optional payload?: {
[key: string]: ZoomVideoProviderExtensionValue;
  account_id?: string;
  object?: ZoomVideoProviderExtensionValue;
  plainToken?: string;
};
```

###### Index Signature

```ts
[key: string]: ZoomVideoProviderExtensionValue
```

###### account\_id?

```ts
optional account_id?: string;
```

###### object?

```ts
optional object?: ZoomVideoProviderExtensionValue;
```

###### plainToken?

```ts
optional plainToken?: string;
```

***

### ZoomWebhookValidationInput

#### Properties

##### plainToken

```ts
plainToken: string;
```

##### webhookSecretToken

```ts
webhookSecretToken: string;
```

***

### ZoomWebhookValidationResponse

#### Properties

##### encryptedToken

```ts
encryptedToken: string;
```

##### plainToken

```ts
plainToken: string;
```

## Type Aliases

### ZoomHttpMethod

```ts
type ZoomHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### ZoomListMeetingType

```ts
type ZoomListMeetingType =
  | "scheduled"
  | "live"
  | "upcoming"
  | "upcoming_meetings"
  | "previous_meetings";
```

***

### ZoomMeetingsApiOperationUid

```ts
type ZoomMeetingsApiOperationUid = typeof ZOOM_MEETINGS_API_OPERATION_UIDS[number];
```

***

### ZoomMeetingsApiSchemaJsonPrimitive

```ts
type ZoomMeetingsApiSchemaJsonPrimitive = string | number | boolean | null;
```

***

### ZoomMeetingsApiSchemaJsonValue

```ts
type ZoomMeetingsApiSchemaJsonValue =
  | ZoomMeetingsApiSchemaJsonPrimitive
  | readonly ZoomMeetingsApiSchemaJsonValue[]
  | {
[key: string]: ZoomMeetingsApiSchemaJsonValue;
};
```

***

### ZoomMeetingsGeneratedOperationCaller

```ts
type ZoomMeetingsGeneratedOperationCaller = <OperationKey>(operationKey, ...args) => Promise<ZoomMeetingsApiOperationResponseMap[OperationKey]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `OperationKey` *extends* `ZoomMeetingsApiOperationKey` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `operationKey` | `OperationKey` |
| ...`args` | `ZoomMeetingsApiOperationArgs`\<`OperationKey`\> |

#### Returns

`Promise`\<[`ZoomMeetingsApiOperationResponseMap`](#zoommeetingsapioperationresponsemap)\[`OperationKey`\]\>

***

### ZoomMeetingStatus

```ts
type ZoomMeetingStatus = "waiting" | "started" | "finished";
```

***

### ZoomMeetingType

```ts
type ZoomMeetingType = 1 | 2 | 3 | 8 | 10;
```

***

### ZoomMonthlyWeek

```ts
type ZoomMonthlyWeek = -1 | 1 | 2 | 3 | 4;
```

***

### ZoomRecurrenceType

```ts
type ZoomRecurrenceType = 1 | 2 | 3;
```

***

### ZoomVideoJsonPrimitive

```ts
type ZoomVideoJsonPrimitive = string | number | boolean | null;
```

***

### ZoomVideoJsonValue

```ts
type ZoomVideoJsonValue =
  | ZoomVideoJsonPrimitive
  | ZoomVideoJsonObject
  | readonly ZoomVideoJsonValue[];
```

***

### ZoomVideoProviderExtensionValue

```ts
type ZoomVideoProviderExtensionValue = ZoomVideoJsonValue | object | undefined;
```

***

### ZoomVideoProviderPayload

```ts
type ZoomVideoProviderPayload = ZoomVideoJsonObject | object;
```

***

### ZoomVideoProviderQuery

```ts
type ZoomVideoProviderQuery = Record<string, ZoomVideoProviderExtensionValue>;
```

***

### ZoomWeekday

```ts
type ZoomWeekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

## Variables

### ZOOM\_MEETINGS\_API\_DOCS\_SOURCE

```ts
const ZOOM_MEETINGS_API_DOCS_SOURCE: "https://developers.zoom.us/docs/api/meetings/" = "https://developers.zoom.us/docs/api/meetings/";
```

***

### ZOOM\_MEETINGS\_API\_GENERATED\_AT

```ts
const ZOOM_MEETINGS_API_GENERATED_AT: "2026-06-18" = "2026-06-18";
```

***

### ZOOM\_MEETINGS\_API\_GENERATED\_FUNCTION\_COUNT

```ts
const ZOOM_MEETINGS_API_GENERATED_FUNCTION_COUNT: 184;
```

***

### ZOOM\_MEETINGS\_API\_GENERATED\_FUNCTION\_NAMES

```ts
const ZOOM_MEETINGS_API_GENERATED_FUNCTION_NAMES: readonly ["ListArchivedFiles", "GetArchivedFileStatistics", "UpdateArchivedFile", "MeetingLocalArchivingArchiveToken", "GetArchivedFiles", "DeleteArchivedFiles", "RecordingGet", "RecordingDelete", "AnalyticsDetails", "AnalyticsSummary", "MeetingRecordingRegistrants", "MeetingRecordingRegistrantCreate", "RecordingRegistrantsQuestionsGet", "RecordingRegistrantQuestionUpdate", "MeetingRecordingRegistrantStatus", "RecordingSettingUpdate", "RecordingSettingsUpdate", "RecordingDeleteOne", "RecordingStatusUpdateOne", "GetMeetingTranscript", "DeleteMeetingTranscript", "RecordingStatusUpdate", "RecordingsList", "ListDevices", "AddDevice", "Getzdmgroupinfo", "AssigndevicetoauserCommonarea", "GetZpaDeviceListProfileSettingOfaUser", "UpgradeZpasApp", "DeleteZpaDeviceByVendorAndMacAddress", "GetZpaVersioninfo", "GetDevice", "DeleteDevice", "UpdateDevice", "AssginGroup", "ChangeDeviceAssociation", "DeviceList", "DeviceCreate", "DeviceDelete", "DeviceUpdate", "MeetingAppAdd", "MeetingAppDelete", "DeleteMeetingChatMessageById", "UpdateMeetingChatMessageById", "InMeetingControl", "MeetingLocalRecordingJoinToken", "MeetingToken", "AddBatchRegistrants", "MeetingInvitation", "MeetingInviteLinksCreate", "MeetingRegistrants", "MeetingRegistrantCreate", "MeetingRegistrantsQuestionsGet", "MeetingRegistrantQuestionUpdate", "MeetingRegistrantStatus", "MeetingRegistrantGet", "Meetingregistrantdelete", "MeetingLiveStreamingJoinToken", "GetMeetingLiveStreamDetails", "MeetingLiveStreamUpdate", "MeetingLiveStreamStatusUpdate", "MeetingRTMSStatusUpdate", "Meeting", "MeetingDelete", "MeetingUpdate", "GetSipDialingWithPasscode", "MeetingStatus", "PastMeetingDetails", "PastMeetings", "PastMeetingParticipants", "ListPastMeetingQA", "Meetings", "MeetingCreate", "ListUpcomingMeeting", "UserPACs", "CreateBatchPolls", "MeetingPolls", "MeetingPollCreate", "MeetingPollGet", "MeetingPollUpdate", "MeetingPollDelete", "ListPastMeetingPolls", "ReportSignInSignOutActivities", "GetBillingReport", "GetBillingInvoicesReports", "ReportCloudRecording", "ReportDaily", "Getdisclaimerreport", "Gethistorymeetingandwebinarlist", "ReportMeetingactivitylogs", "ReportMeetingDetails", "ReportMeetingParticipants", "ReportMeetingPolls", "ReportMeetingQA", "ReportMeetingSurvey", "ReportOperationLogs", "Getremotesupportreport", "ReportTelephone", "ReportUpcomingEvents", "ReportUsers", "ReportMeetings", "ReportWebinarDetails", "ReportWebinarParticipants", "ReportWebinarPolls", "ReportWebinarQA", "ReportWebinarSurvey", "ListSIPPhonePhones", "EnableSIPPhonePhones", "DeleteSIPPhonePhones", "UpdateSIPPhonePhones", "Listmeetingsummaries", "Getameetingsummary", "Deletemeetingorwebinarsummary", "MeetingSurveyGet", "MeetingSurveyDelete", "MeetingSurveyUpdate", "ListMeetingTemplates", "MeetingTemplateCreate", "TrackingfieldList", "TrackingfieldCreate", "TrackingfieldGet", "TrackingfieldDelete", "TrackingfieldUpdate", "Tsp", "TspUpdate", "UserTSPs", "UserTSPCreate", "TspUrlUpdate", "UserTSP", "UserTSPDelete", "UserTSPUpdate", "DeleteWebinarChatMessageById", "WebinarAbsentees", "PastWebinars", "ListWebinarParticipants", "ListPastWebinarPollResults", "ListPastWebinarQA", "ListWebinarTemplates", "WebinarTemplateCreate", "Webinars", "WebinarCreate", "Webinar", "WebinarDelete", "WebinarUpdate", "AddBatchWebinarRegistrants", "GetWebinarBranding", "CreateWebinarBrandingNameTag", "DeleteWebinarBrandingNameTag", "UpdateWebinarBrandingNameTag", "UploadWebinarBrandingVB", "DeleteWebinarBrandingVB", "SetWebinarBrandingVB", "UploadWebinarBrandingWallpaper", "DeleteWebinarBrandingWallpaper", "WebinarInviteLinksCreate", "WebinarLiveStreamingJoinToken", "WebinarLocalArchivingArchiveToken", "WebinarLocalRecordingJoinToken", "GetWebinarLiveStreamDetails", "WebinarLiveStreamUpdate", "WebinarLiveStreamStatusUpdate", "WebinarPanelists", "WebinarPanelistCreate", "WebinarPanelistsDelete", "WebinarPanelistDelete", "WebinarPolls", "WebinarPollCreate", "WebinarPollGet", "WebinarPollUpdate", "WebinarPollDelete", "WebinarRegistrants", "WebinarRegistrantCreate", "WebinarRegistrantsQuestionsGet", "WebinarRegistrantQuestionUpdate", "WebinarRegistrantStatus", "WebinarRegistrantGet", "DeleteWebinarRegistrant", "GetWebinarSipDialingWithPasscode", "WebinarStatus", "WebinarSurveyGet", "WebinarSurveyDelete", "WebinarSurveyUpdate", "WebinarToken", "GetTrackingSources"];
```

***

### ZOOM\_MEETINGS\_API\_OPENAPI\_VERSION

```ts
const ZOOM_MEETINGS_API_OPENAPI_VERSION: "3.0.0" = "3.0.0";
```

***

### ZOOM\_MEETINGS\_API\_OPERATION\_BY\_ID

```ts
const ZOOM_MEETINGS_API_OPERATION_BY_ID: Map<string, ZoomMeetingsApiOperation>;
```

***

### ZOOM\_MEETINGS\_API\_OPERATION\_BY\_UID

```ts
const ZOOM_MEETINGS_API_OPERATION_BY_UID: Map<string, ZoomMeetingsApiOperation>;
```

***

### ZOOM\_MEETINGS\_API\_OPERATION\_COUNT

```ts
const ZOOM_MEETINGS_API_OPERATION_COUNT: 184 = 184;
```

***

### ZOOM\_MEETINGS\_API\_OPERATIONS

```ts
const ZOOM_MEETINGS_API_OPERATIONS: readonly ZoomMeetingsApiOperation[];
```

***

### ZOOM\_MEETINGS\_API\_PATH\_COUNT

```ts
const ZOOM_MEETINGS_API_PATH_COUNT: 129 = 129;
```

***

### ZOOM\_MEETINGS\_API\_SPEC\_SOURCE

```ts
const ZOOM_MEETINGS_API_SPEC_SOURCE: "https://developers.zoom.us/api-hub/meetings/methods/endpoints.json" = "https://developers.zoom.us/api-hub/meetings/methods/endpoints.json";
```

***

### ZOOM\_MEETINGS\_API\_SPEC\_VERSION

```ts
const ZOOM_MEETINGS_API_SPEC_VERSION: "2" = "2";
```

***

### zoomVideoIntegration

```ts
const zoomVideoIntegration: DefinedIntegration<{
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
     description: "Creates Zoom meetings through SDK-user-selected scheduling or escalation workflows.";
     exposesSensitiveData: true;
     label: "Schedule Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Zoom meeting resources with SDK-user-supplied topic, timing, recurrence, and settings.";
     exposesSensitiveData: true;
     label: "Create Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Lists Zoom meetings and reads meeting details by meeting ID.";
     exposesSensitiveData: true;
     label: "Read Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes Zoom meetings when SDK-user lifecycle or retention policy permits deletion.";
     exposesSensitiveData: true;
     label: "Delete Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Zoom meeting fields, recurrence, tracking fields, or settings when SDK-user policy permits mutation.";
     exposesSensitiveData: true;
     label: "Update Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Zoom webhook payloads for SDK-user-owned meeting lifecycle workflows.";
     exposesSensitiveData: true;
     label: "Receive Zoom webhooks";
     providerObjects: readonly [{
        kind: "zoomWebhookEvent";
        label: "Zoom Webhook Event";
      }, {
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "zoom.request-signature";
     description: "Validates Zoom x-zm-signature and x-zm-request-timestamp values and supports endpoint URL validation challenges.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Zoom webhook signatures";
     providerObjects: readonly [{
        kind: "zoomSignedRequest";
        label: "Zoom Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "video";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Zoom Meetings API Hub OpenAPI";
        url: "https://developers.zoom.us/api-hub/meetings/methods/endpoints.json";
      }, {
        label: "Zoom Meetings API reference";
        url: "https://developers.zoom.us/docs/api/meetings/";
      }, {
        label: "Zoom webhooks reference";
        url: "https://developers.zoom.us/docs/api/rest/webhook-reference/";
      }, {
        label: "Zoom webhook validation";
        url: "https://developers.zoom.us/docs/api/rest/webhook-reference/#validate-your-webhook-endpoint";
     }];
     notes: readonly ["Coverage includes generated per-operation functions for every operation in Zoom's official Meetings API Hub OpenAPI spec.", "Typed convenience helpers remain available for meetings create/list/read/update/delete, current-user readiness, webhook URL-validation handling, and x-zm-signature verification.", "This package is a generated Zoom Meetings API domain slice, not full Zoom platform coverage. Zoom Phone, Contact Center, Team Chat, Rooms, Marketplace app management outside the Meetings API Hub, account administration beyond this spec, and full webhook/event catalogs remain separate Zoom surfaces.", "The SDK user owns OAuth scopes, host delegation, account plan/admin settings, meeting lifecycle policy, recording/transcript consent, retention, deletion, and participant disclosure decisions."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side OAuth access token for Zoom REST API meeting and user endpoints.";
     id: "zoom-oauth-access-token";
     label: "Zoom OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["meeting:write", "meeting:read", "user:read", "meeting:write:meeting", "meeting:read:list_meetings", "meeting:read:meeting", "meeting:update:meeting", "meeting:delete:meeting", "user:read:user"];
   }, {
     description: "Server-side secret token used to validate Zoom webhook request signatures.";
     id: "zoom-webhook-secret-token";
     label: "Zoom webhook secret token";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "video.zoom";
  limitations: readonly ["Available meeting operations depend on the SDK user's Zoom OAuth scopes, account plan, account-level settings, admin policy, and delegated host permissions.", "This package does not choose whether a video workflow is inbound, outbound, customer-facing, internal, recorded, retained, or escalated; those decisions remain SDK-user configuration.", "Live meeting media transport, captions, cloud recording retrieval, and telephony dial-out are outside this package's REST and webhook foundation."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        currentUser: "typed-read";
        meetings: "typed-create-list-read-update-delete";
        meetingsApiHub: "generated-constrained-support-slice";
        meetingsRecordingsRegistrantsReportsDevicesTspWebinars: "generated-full-surface-where-present-in-meetings-api-hub";
        webhooks: "typed-validate-parse";
        webhookUrlValidation: "typed-response";
        zoomPhoneContactCenterTeamChatRoomsCalendar: "provider-supported-not-typed-separate-surface";
     };
     generatedProviderSliceVerification: {
        allowlist: readonly ["Archiving", "Cloud Recording", "Devices", "H323 Devices", "In-Meeting Apps", "In-Meeting Features", "Invitation & Registration", "Live streaming", "Meetings", "PAC", "Polls", "Reports", "SIP Phone", "Summaries", "Surveys", "Templates", "Tracking Field", "TSP", "Webinars"];
        apiVersion: "2";
        coverageArtifact: "docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json";
        documentedOperationCount: 184;
        documentedPathCount: 129;
        functionCatalogArtifact: "docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json";
        functionCatalogChecksumSha256: "8934aa5f43e3a15d5a087dcf663854d41bb013d38aee8d65171b967bcc43202b";
        generatedFunctionCount: 184;
        implementedOperationCount: 184;
        operationCatalogArtifact: "docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json";
        operationCatalogChecksumSha256: "d32cdc0636126fef0491cfd13f95219359be167d339a57b4b4322f7be1146392";
        provider: "zoom-meetings-api-hub";
        sourceChecksumSha256: "07acb50f2a3f070b161ed57fbd9ca9ae83db42a6c1fa538f36b7e1c8300b6b06";
        unimplementedOperationCount: 0;
        verifiedAt: "2026-06-21";
     };
     sdkViability: {
        checkedAt: "2026-06-21";
        decision: "no-official-maintained-server-rest-sdk-found";
        rejectedSdkPackages: readonly [{
           packageName: "@zoom/meetingsdk";
           reason: "Official browser Meeting SDK for embedding/joining meetings, not a server REST API client.";
         }, {
           packageName: "@zoom/videosdk";
           reason: "Official browser Video SDK for custom video experiences, not the Zoom Meetings REST API.";
         }, {
           packageName: "@zoom/rtms";
           reason: "Official Node real-time media streams SDK, not scheduling/resource REST management.";
        }];
     };
  };
  name: "Zoom Meetings";
  operations: readonly [{
     alias: "video.meeting.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
     sideEffect: true;
   }, {
     alias: "video.meeting.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
   }, {
     alias: "video.meeting.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
   }, {
     alias: "video.meeting.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
     sideEffect: true;
   }, {
     alias: "video.meeting.delete";
     capability: "delete-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
     sideEffect: true;
   }, {
     alias: "video.user.current.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "zoomUser";
   }, {
     alias: "zoom.meetings.request";
     capability: "read-provider-object";
     extension: true;
     metadata: {
        supportSliceEscapeHatch: true;
     };
     providerObject: "zoomMeetingsApiOperation";
   }, {
     alias: "zoom.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zoomWebhookEvent";
  }];
  packageName: "@cognidesk/integration-video-zoom";
  privacyNotes: readonly ["Zoom meetings and webhooks can contain participant identifiers, host details, invite links, meeting metadata, chat-capable workflow context, and recording-related event metadata.", "Zoom OAuth access tokens and webhook secret tokens stay server-side and are represented in Studio only as credential readiness.", "User consent, meeting disclosure, recording enablement, transcript use, retention, and deletion are owned by the SDK user's Zoom account configuration and application policy."];
  provider: "zoom";
  trustLevel: "official";
}, ZoomVideoIntegrationContext, {
  video.meeting.create: (input, context) => Promise<ZoomMeetingResource>;
  video.meeting.delete: (input, context) => Promise<Record<string, never>>;
  video.meeting.list: (input, context) => Promise<ZoomListMeetingsResponse>;
  video.meeting.read: (input, context) => Promise<ZoomMeetingResource>;
  video.meeting.update: (input, context) => Promise<ZoomMeetingResource>;
  video.user.current.read: (_input, context) => Promise<ZoomUserResource>;
  zoom.meetings.request: <OperationKey>(input, context) => Promise<ZoomMeetingsApiOperationResponseMap[OperationKey]>;
  zoom.webhook.parse: (input) => Promise<ZoomSignedWebhookRequest>;
}>;
```

***

### zoomVideoOperationHandlers

```ts
const zoomVideoOperationHandlers: {
  video.meeting.create: (input, context) => Promise<ZoomMeetingResource>;
  video.meeting.delete: (input, context) => Promise<Record<string, never>>;
  video.meeting.list: (input, context) => Promise<ZoomListMeetingsResponse>;
  video.meeting.read: (input, context) => Promise<ZoomMeetingResource>;
  video.meeting.update: (input, context) => Promise<ZoomMeetingResource>;
  video.user.current.read: (_input, context) => Promise<ZoomUserResource>;
  zoom.meetings.request: <OperationKey>(input, context) => Promise<ZoomMeetingsApiOperationResponseMap[OperationKey]>;
  zoom.webhook.parse: (input) => Promise<ZoomSignedWebhookRequest>;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-videomeetingcreate"></a> `video.meeting.create()` | (`input`, `context`) => `Promise`\<[`ZoomMeetingResource`](#zoommeetingresource)\> |
| <a id="property-videomeetingdelete"></a> `video.meeting.delete()` | (`input`, `context`) => `Promise`\<`Record`\<`string`, `never`\>\> |
| <a id="property-videomeetinglist"></a> `video.meeting.list()` | (`input`, `context`) => `Promise`\<[`ZoomListMeetingsResponse`](#zoomlistmeetingsresponse)\> |
| <a id="property-videomeetingread"></a> `video.meeting.read()` | (`input`, `context`) => `Promise`\<[`ZoomMeetingResource`](#zoommeetingresource)\> |
| <a id="property-videomeetingupdate"></a> `video.meeting.update()` | (`input`, `context`) => `Promise`\<[`ZoomMeetingResource`](#zoommeetingresource)\> |
| <a id="property-videousercurrentread"></a> `video.user.current.read()` | (`_input`, `context`) => `Promise`\<[`ZoomUserResource`](#zoomuserresource)\> |
| <a id="property-zoommeetingsrequest"></a> `zoom.meetings.request()` | \<`OperationKey`\>(`input`, `context`) => `Promise`\<[`ZoomMeetingsApiOperationResponseMap`](#zoommeetingsapioperationresponsemap)\[`OperationKey`\]\> |
| <a id="property-zoomwebhookparse"></a> `zoom.webhook.parse()` | (`input`) => `Promise`\<[`ZoomSignedWebhookRequest`](#zoomsignedwebhookrequest)\> |

## Functions

### createZoomMeetingsApiGeneratedClient()

```ts
function createZoomMeetingsApiGeneratedClient(callOperation): ZoomMeetingsApiGeneratedClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callOperation` | [`ZoomMeetingsGeneratedOperationCaller`](#zoommeetingsgeneratedoperationcaller) |

#### Returns

[`ZoomMeetingsApiGeneratedClient`](#zoommeetingsapigeneratedclient)

***

### createZoomVideoClient()

```ts
function createZoomVideoClient(options): ZoomVideoClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZoomVideoClientOptions`](#zoomvideoclientoptions) |

#### Returns

[`ZoomVideoClient`](#zoomvideoclient)

***

### createZoomVideoLiveChecks()

```ts
function createZoomVideoLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        accountId: string;
        email: string;
        status: string;
        userId: string;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ZoomLiveCheckOptions`](#zoomlivecheckoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `accountId`: `string`;
        `email`: `string`;
        `status`: `string`;
        `userId`: `string`;
     \};
  \}\>;
\}[]

***

### createZoomWebhookValidationResponse()

```ts
function createZoomWebhookValidationResponse(input): ZoomWebhookValidationResponse;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ZoomWebhookValidationInput`](#zoomwebhookvalidationinput) |

#### Returns

[`ZoomWebhookValidationResponse`](#zoomwebhookvalidationresponse)

***

### parseZoomWebhookRequest()

```ts
function parseZoomWebhookRequest(request, options?): Promise<ZoomSignedWebhookRequest>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseZoomWebhookRequestOptions`](#parsezoomwebhookrequestoptions) |

#### Returns

`Promise`\<[`ZoomSignedWebhookRequest`](#zoomsignedwebhookrequest)\>

***

### validateZoomWebhookSignature()

```ts
function validateZoomWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ValidateZoomWebhookSignatureInput`](#validatezoomwebhooksignatureinput) |

#### Returns

`boolean`

***

### zoomVideoCredentialStatuses()

```ts
function zoomVideoCredentialStatuses(input): {
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
| `input` | [`ZoomCredentialStatusInput`](#zoomcredentialstatusinput) |

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
