# integrations/contact-center/zoom/dist/manifest

## Variables

### zoomContactCenterOperationAliases

```ts
const zoomContactCenterOperationAliases: readonly ["contact-center.handoff.request", "contact-center.contact.start", "contact-center.contact.read", "zoom.request"];
```

***

### zoomContactCenterProviderManifest

```ts
const zoomContactCenterProviderManifest: {
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
  capabilities: [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: false;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Zoom Contact Center REST OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
      }, {
        label: "Zoom Contact Center Webhooks OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json";
      }, {
        label: "Zoom Contact Center SDK for web";
        url: "https://developers.zoom.us/docs/contact-center/web/get-started/";
      }, {
        label: "Zoom Apps SDK";
        url: "https://github.com/zoom/appssdk";
      }, {
        label: "Zoom RTMS SDK";
        url: "https://github.com/zoom/rtms";
     }];
     notes: ["No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs.", "@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface.", "Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "zoom-contact-center-api-base";
     label: "Zoom Contact Center API base URL";
     required: true;
   }, {
     id: "zoom-contact-center-api-access";
     label: "Zoom OAuth/API access";
     required: true;
   }, {
     id: "zoom-contact-center-routing";
     label: "Zoom queue/channel routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.zoom";
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
           id: "Startworkitemengagement";
           method: "POST";
           path: "/contact_center/engagement";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "contact-center.contact.read";
           checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
           id: "getEngagement";
           method: "GET";
           path: "/contact_center/engagements/{engagementId}";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "zoom.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.4.0";
              license: "SEE LICENSE IN LICENSE.md";
              package: "@zoom/rivet";
              reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
              result: "server-sdk-without-contact-center-management-namespace";
            }, {
              checkedVersion: "0.16.38";
              license: "MIT";
              package: "@zoom/appssdk";
              reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
              result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
            }, {
              checkedVersion: "1.1.0";
              license: "MIT";
              package: "@zoom/rtms";
              reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
              result: "media-streaming-sdk-not-contact-center-management-client";
            }, {
              package: "@zoom/contact-center";
              reason: "No public npm package exists under this likely official Contact Center SDK name.";
              result: "not-published";
           }];
           defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-contact-center-management-sdk";
           typedClientOverride: "ZoomContactCenterProviderClient";
        };
        runtimePolicy: {
           defaultClient: "built-in-provider-rest-adapter";
           extensionRequests: "built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation";
           failClosed: true;
           requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
           reviewedRestOperations: readonly ["Startworkitemengagement", "getEngagement"];
        };
        sdkDecision: "No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "ZoomContactCenterProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.4.0";
           license: "SEE LICENSE IN LICENSE.md";
           package: "@zoom/rivet";
           reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
           result: "server-sdk-without-contact-center-management-namespace";
         }, {
           checkedVersion: "0.16.38";
           license: "MIT";
           package: "@zoom/appssdk";
           reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
           result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
         }, {
           checkedVersion: "1.1.0";
           license: "MIT";
           package: "@zoom/rtms";
           reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
           result: "media-streaming-sdk-not-contact-center-management-client";
         }, {
           package: "@zoom/contact-center";
           reason: "No public npm package exists under this likely official Contact Center SDK name.";
           result: "not-published";
        }];
        defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-contact-center-management-sdk";
        typedClientOverride: "ZoomContactCenterProviderClient";
     };
  };
  name: "Zoom Contact Center";
  operations: [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.read";
     capability: "read-provider-object";
     providerObject: "contact";
   }, {
     alias: "zoom.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-zoom";
  provider: "zoom";
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
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Contact Center SDK for web"`; `url`: `"https://developers.zoom.us/docs/contact-center/web/get-started/"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}, \{ `label`: `"Zoom RTMS SDK"`; `url`: `"https://github.com/zoom/rtms"`; \}\]; `notes`: \[`"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs."`, `"@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface."`, `"Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Contact Center SDK for web"`; `url`: `"https://developers.zoom.us/docs/contact-center/web/get-started/"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}, \{ `label`: `"Zoom RTMS SDK"`; `url`: `"https://github.com/zoom/rtms"`; \}\] |
| `coverage.notes` | \[`"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs."`, `"@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface."`, `"Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"zoom-contact-center-api-base"`; `label`: `"Zoom Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-api-access"`; `label`: `"Zoom OAuth/API access"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-routing"`; `label`: `"Zoom queue/channel routing configuration"`; `required`: `false`; \}\] |
| `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.zoom"` |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \}; `sdkDecision`: `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"ZoomContactCenterProviderClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \}; `sdkDecision`: `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-contact-center-management-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"ZoomContactCenterProviderClient"` |
| `metadata.implementation.runtimePolicy` | \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \} |
| `metadata.implementation.runtimePolicy.defaultClient` | `"built-in-provider-rest-adapter"` |
| `metadata.implementation.runtimePolicy.extensionRequests` | `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"` |
| `metadata.implementation.runtimePolicy.failClosed` | `true` |
| `metadata.implementation.runtimePolicy.requestOptions` | readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\] |
| `metadata.implementation.runtimePolicy.reviewedRestOperations` | readonly \[`"Startworkitemengagement"`, `"getEngagement"`\] |
| `metadata.implementation.sdkDecision` | `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"ZoomContactCenterProviderClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"ZoomContactCenterProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-contact-center-management-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"ZoomContactCenterProviderClient"` |
| `name` | `"Zoom Contact Center"` |
| `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.read"`; `capability`: `"read-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"zoom.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-zoom"` |
| `provider` | `"zoom"` |
| `trustLevel` | `"official"` |

***

### zoomContactCenterProviderManifestInput

```ts
const zoomContactCenterProviderManifestInput: {
  capabilities: [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: false;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Zoom Contact Center REST OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
      }, {
        label: "Zoom Contact Center Webhooks OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json";
      }, {
        label: "Zoom Contact Center SDK for web";
        url: "https://developers.zoom.us/docs/contact-center/web/get-started/";
      }, {
        label: "Zoom Apps SDK";
        url: "https://github.com/zoom/appssdk";
      }, {
        label: "Zoom RTMS SDK";
        url: "https://github.com/zoom/rtms";
     }];
     notes: ["No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs.", "@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface.", "Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "zoom-contact-center-api-base";
     label: "Zoom Contact Center API base URL";
     required: true;
   }, {
     id: "zoom-contact-center-api-access";
     label: "Zoom OAuth/API access";
     required: true;
   }, {
     id: "zoom-contact-center-routing";
     label: "Zoom queue/channel routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.zoom";
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
           id: "Startworkitemengagement";
           method: "POST";
           path: "/contact_center/engagement";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "contact-center.contact.read";
           checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
           id: "getEngagement";
           method: "GET";
           path: "/contact_center/engagements/{engagementId}";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "zoom.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.4.0";
              license: "SEE LICENSE IN LICENSE.md";
              package: "@zoom/rivet";
              reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
              result: "server-sdk-without-contact-center-management-namespace";
            }, {
              checkedVersion: "0.16.38";
              license: "MIT";
              package: "@zoom/appssdk";
              reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
              result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
            }, {
              checkedVersion: "1.1.0";
              license: "MIT";
              package: "@zoom/rtms";
              reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
              result: "media-streaming-sdk-not-contact-center-management-client";
            }, {
              package: "@zoom/contact-center";
              reason: "No public npm package exists under this likely official Contact Center SDK name.";
              result: "not-published";
           }];
           defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-contact-center-management-sdk";
           typedClientOverride: "ZoomContactCenterProviderClient";
        };
        runtimePolicy: {
           defaultClient: "built-in-provider-rest-adapter";
           extensionRequests: "built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation";
           failClosed: true;
           requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
           reviewedRestOperations: readonly ["Startworkitemengagement", "getEngagement"];
        };
        sdkDecision: "No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "ZoomContactCenterProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.4.0";
           license: "SEE LICENSE IN LICENSE.md";
           package: "@zoom/rivet";
           reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
           result: "server-sdk-without-contact-center-management-namespace";
         }, {
           checkedVersion: "0.16.38";
           license: "MIT";
           package: "@zoom/appssdk";
           reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
           result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
         }, {
           checkedVersion: "1.1.0";
           license: "MIT";
           package: "@zoom/rtms";
           reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
           result: "media-streaming-sdk-not-contact-center-management-client";
         }, {
           package: "@zoom/contact-center";
           reason: "No public npm package exists under this likely official Contact Center SDK name.";
           result: "not-published";
        }];
        defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-contact-center-management-sdk";
        typedClientOverride: "ZoomContactCenterProviderClient";
     };
  };
  name: "Zoom Contact Center";
  operations: [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.read";
     capability: "read-provider-object";
     providerObject: "contact";
   }, {
     alias: "zoom.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-zoom";
  provider: "zoom";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Contact Center SDK for web"`; `url`: `"https://developers.zoom.us/docs/contact-center/web/get-started/"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}, \{ `label`: `"Zoom RTMS SDK"`; `url`: `"https://github.com/zoom/rtms"`; \}\]; `notes`: \[`"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs."`, `"@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface."`, `"Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Contact Center SDK for web"`; `url`: `"https://developers.zoom.us/docs/contact-center/web/get-started/"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}, \{ `label`: `"Zoom RTMS SDK"`; `url`: `"https://github.com/zoom/rtms"`; \}\] |
| `coverage.notes` | \[`"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs."`, `"@zoom/appssdk is an embedded Zoom Apps SDK, @zoom/rtms is media-streaming, and the Contact Center SDK is a browser/client integration surface."`, `"Runtime calls use a built-in REST adapter for reviewed operation IDs only, with ZoomContactCenterProviderClient.request available as a host-client exception."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"zoom-contact-center-api-base"`; `label`: `"Zoom Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-api-access"`; `label`: `"Zoom OAuth/API access"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-routing"`; `label`: `"Zoom queue/channel routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.zoom"` |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \}; `sdkDecision`: `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"ZoomContactCenterProviderClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \}; `sdkDecision`: `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-contact-center-management-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"ZoomContactCenterProviderClient"` |
| `metadata.implementation.runtimePolicy` | \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \} |
| `metadata.implementation.runtimePolicy.defaultClient` | `"built-in-provider-rest-adapter"` |
| `metadata.implementation.runtimePolicy.extensionRequests` | `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"` |
| `metadata.implementation.runtimePolicy.failClosed` | `true` |
| `metadata.implementation.runtimePolicy.requestOptions` | readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\] |
| `metadata.implementation.runtimePolicy.reviewedRestOperations` | readonly \[`"Startworkitemengagement"`, `"getEngagement"`\] |
| `metadata.implementation.sdkDecision` | `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"ZoomContactCenterProviderClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"ZoomContactCenterProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-contact-center-management-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"ZoomContactCenterProviderClient"` |
| <a id="property-name"></a> `name` | `"Zoom Contact Center"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.read"`; `capability`: `"read-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"zoom.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-zoom"` |
| <a id="property-provider"></a> `provider` | `"zoom"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### zoomContactCenterProviderSdkDecision

```ts
const zoomContactCenterProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     checkedVersion: "0.4.0";
     license: "SEE LICENSE IN LICENSE.md";
     package: "@zoom/rivet";
     reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
     result: "server-sdk-without-contact-center-management-namespace";
   }, {
     checkedVersion: "0.16.38";
     license: "MIT";
     package: "@zoom/appssdk";
     reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
     result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
   }, {
     checkedVersion: "1.1.0";
     license: "MIT";
     package: "@zoom/rtms";
     reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
     result: "media-streaming-sdk-not-contact-center-management-client";
   }, {
     package: "@zoom/contact-center";
     reason: "No public npm package exists under this likely official Contact Center SDK name.";
     result: "not-published";
  }];
  defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
  result: "no-suitable-contact-center-management-sdk";
  typedClientOverride: "ZoomContactCenterProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"` |
| <a id="property-result"></a> `result` | `"no-suitable-contact-center-management-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"ZoomContactCenterProviderClient"` |

***

### zoomContactCenterRestSupportSlice

```ts
const zoomContactCenterRestSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
   }, {
     alias: "contact-center.contact.start";
     checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
     id: "Startworkitemengagement";
     method: "POST";
     path: "/contact_center/engagement";
     source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
   }, {
     alias: "contact-center.contact.read";
     checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
     id: "getEngagement";
     method: "GET";
     path: "/contact_center/engagements/{engagementId}";
     source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
   }, {
     alias: "zoom.request";
     checksum: "not-applicable-host-configured";
     id: "providerExtensionRequest";
     method: "GET";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  implementationStrategy: "provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "0.4.0";
        license: "SEE LICENSE IN LICENSE.md";
        package: "@zoom/rivet";
        reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
        result: "server-sdk-without-contact-center-management-namespace";
      }, {
        checkedVersion: "0.16.38";
        license: "MIT";
        package: "@zoom/appssdk";
        reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
        result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
      }, {
        checkedVersion: "1.1.0";
        license: "MIT";
        package: "@zoom/rtms";
        reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
        result: "media-streaming-sdk-not-contact-center-management-client";
      }, {
        package: "@zoom/contact-center";
        reason: "No public npm package exists under this likely official Contact Center SDK name.";
        result: "not-published";
     }];
     defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
     result: "no-suitable-contact-center-management-sdk";
     typedClientOverride: "ZoomContactCenterProviderClient";
  };
  runtimePolicy: {
     defaultClient: "built-in-provider-rest-adapter";
     extensionRequests: "built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation";
     failClosed: true;
     requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
     reviewedRestOperations: readonly ["Startworkitemengagement", "getEngagement"];
  };
  sdkDecision: "No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-suitable-contact-center-management-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"ZoomContactCenterProviderClient"` |
| <a id="property-runtimepolicy"></a> `runtimePolicy` | \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \} |
| `runtimePolicy.defaultClient` | `"built-in-provider-rest-adapter"` |
| `runtimePolicy.extensionRequests` | `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"` |
| `runtimePolicy.failClosed` | `true` |
| `runtimePolicy.requestOptions` | readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\] |
| `runtimePolicy.reviewedRestOperations` | readonly \[`"Startworkitemengagement"`, `"getEngagement"`\] |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### zoomContactCenterSupportSlice

```ts
const zoomContactCenterSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
   }, {
     alias: "contact-center.contact.start";
     checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
     id: "Startworkitemengagement";
     method: "POST";
     path: "/contact_center/engagement";
     source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
   }, {
     alias: "contact-center.contact.read";
     checksum: "sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b";
     id: "getEngagement";
     method: "GET";
     path: "/contact_center/engagements/{engagementId}";
     source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
   }, {
     alias: "zoom.request";
     checksum: "not-applicable-host-configured";
     id: "providerExtensionRequest";
     method: "GET";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  implementationStrategy: "provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "0.4.0";
        license: "SEE LICENSE IN LICENSE.md";
        package: "@zoom/rivet";
        reason: "Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface.";
        result: "server-sdk-without-contact-center-management-namespace";
      }, {
        checkedVersion: "0.16.38";
        license: "MIT";
        package: "@zoom/appssdk";
        reason: "Browser Zoom Apps SDK, not server-side Contact Center management API client.";
        result: "embedded-zoom-apps-sdk-not-contact-center-management-client";
      }, {
        checkedVersion: "1.1.0";
        license: "MIT";
        package: "@zoom/rtms";
        reason: "Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations.";
        result: "media-streaming-sdk-not-contact-center-management-client";
      }, {
        package: "@zoom/contact-center";
        reason: "No public npm package exists under this likely official Contact Center SDK name.";
        result: "not-published";
     }];
     defaultRestPolicy: "fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override";
     result: "no-suitable-contact-center-management-sdk";
     typedClientOverride: "ZoomContactCenterProviderClient";
  };
  runtimePolicy: {
     defaultClient: "built-in-provider-rest-adapter";
     extensionRequests: "built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation";
     failClosed: true;
     requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
     reviewedRestOperations: readonly ["Startworkitemengagement", "getEngagement"];
  };
  sdkDecision: "No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind-1"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations-1"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:3a3127360fbe7ef88d7398e62795b502fb1f3b2ebc507b3fbf0d3ba6645a963b"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"zoom.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-implementationstrategy-1"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-providersdkdecision-1"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-contact-center-management-sdk"`; `typedClientOverride`: `"ZoomContactCenterProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.4.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@zoom/rivet"`; `reason`: `"Official server-side API wrapper exports meetings/users/phone/etc., but no contact-center export or /contact_center engagement endpoints for this package surface."`; `result`: `"server-sdk-without-contact-center-management-namespace"`; \}, \{ `checkedVersion`: `"0.16.38"`; `license`: `"MIT"`; `package`: `"@zoom/appssdk"`; `reason`: `"Browser Zoom Apps SDK, not server-side Contact Center management API client."`; `result`: `"embedded-zoom-apps-sdk-not-contact-center-management-client"`; \}, \{ `checkedVersion`: `"1.1.0"`; `license`: `"MIT"`; `package`: `"@zoom/rtms"`; `reason`: `"Node wrapper for Zoom RTMS media streaming C SDK, not Contact Center REST management operations."`; `result`: `"media-streaming-sdk-not-contact-center-management-client"`; \}, \{ `package`: `"@zoom/contact-center"`; `reason`: `"No public npm package exists under this likely official Contact Center SDK name."`; `result`: `"not-published"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-reviewed-contact-center-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-suitable-contact-center-management-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"ZoomContactCenterProviderClient"` |
| <a id="property-runtimepolicy-1"></a> `runtimePolicy` | \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `extensionRequests`: `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"`; `failClosed`: `true`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; `reviewedRestOperations`: readonly \[`"Startworkitemengagement"`, `"getEngagement"`\]; \} |
| `runtimePolicy.defaultClient` | `"built-in-provider-rest-adapter"` |
| `runtimePolicy.extensionRequests` | `"built-in REST rejects unreviewed paths; injected providerClient.request may handle host-reviewed extensions after method and mutation-policy validation"` |
| `runtimePolicy.failClosed` | `true` |
| `runtimePolicy.requestOptions` | readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\] |
| `runtimePolicy.reviewedRestOperations` | readonly \[`"Startworkitemengagement"`, `"getEngagement"`\] |
| <a id="property-sdkdecision-1"></a> `sdkDecision` | `"No maintained official server-side JavaScript SDK was verified for Zoom Contact Center management APIs; @zoom/appssdk is embedded Zoom Apps and @zoom/rtms is media-streaming, so this package uses reviewed REST operations with a providerClient host exception."` |
| <a id="property-verifiedat-1"></a> `verifiedAt` | `"2026-06-25"` |
