# integrations/workplace/teams/dist/manifest

## Variables

### teamsWorkplaceManifestInput

```ts
const teamsWorkplaceManifestInput: {
  capabilities: [{
     audiences: ["internal-support", "mixed"];
     capability: "receive";
     description: "Validates Microsoft Graph change notification clientState values and parses Teams chatMessage notifications for SDK-user-owned workflows.";
     exposesSensitiveData: true;
     label: "Receive Teams change notifications";
     providerObjects: [{
        kind: "teamsChangeNotification";
        label: "Teams Change Notification";
      }, {
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "send";
     description: "Sends channel or chat messages through Microsoft Graph chatMessage endpoints with delegated permissions when SDK-user policy permits workplace-visible output.";
     exposesSensitiveData: true;
     label: "Send Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "notify";
     description: "Posts SDK-user-routed Teams messages for internal agent-assist, supervisor review, and workplace collaboration flows.";
     exposesSensitiveData: true;
     label: "Support internal agent assist";
     providerObjects: [{
        kind: "teamsAgentAssistMessage";
        label: "Teams Agent Assist Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "thread";
     description: "Associates support context with Teams channel threads, replies, and chat message identifiers selected by SDK-user configuration.";
     exposesSensitiveData: true;
     label: "Use Teams conversations";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
      }, {
        kind: "teamsThread";
        label: "Teams Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Teams channel or chat messages where Microsoft Graph permissions, resource-specific consent, and tenant policy allow access.";
     exposesSensitiveData: true;
     label: "Read Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
      }, {
        kind: "teamsUser";
        label: "Microsoft Graph User";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Microsoft Graph change-notification subscriptions for SDK-user-selected Teams resources; renewal and deletion lifecycle stays SDK-user-owned.";
     exposesSensitiveData: true;
     label: "Create Graph subscriptions";
     providerObjects: [{
        kind: "teamsGraphSubscription";
        label: "Microsoft Graph Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Teams chatMessage resources through Microsoft Graph: delegated permissions can update message properties, while application permissions are limited to policyViolation updates.";
     exposesSensitiveData: true;
     label: "Update Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "workplace";
  channelAudiences: ["internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Microsoft Graph JavaScript client";
        url: "https://www.npmjs.com/package/@microsoft/microsoft-graph-client";
      }, {
        label: "Microsoft Graph send channel message";
        url: "https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph send chat message";
        url: "https://learn.microsoft.com/en-us/graph/api/chat-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph send channel reply";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list channel messages";
        url: "https://learn.microsoft.com/en-us/graph/api/channel-list-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list channel replies";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph get chatMessage";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-get?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph update chatMessage";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-update?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph create subscription";
        url: "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph webhook subscription lifecycle";
        url: "https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks";
     }];
     notes: ["Coverage includes SDK-backed Microsoft Graph Teams support workflows: channel and chat messages, channel replies, message updates, subscriptions, current-user readiness, and change notifications.", "The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers.", "This is not full Microsoft Graph coverage. Files/Drive, calendar, identity/admin, security, calls, meetings, app catalog breadth, and broader Graph resources remain outside this Teams adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side delegated Microsoft Graph OAuth access token for normal Teams chatMessage sends and /me readiness calls.";
     id: "microsoft-graph-oauth-access-token";
     label: "Microsoft Graph OAuth access token";
     metadata: {
        privilegeGuidance: "Normal Teams sends require delegated Microsoft Graph permissions; application permissions and resource-specific consent have narrower documented behavior and admin-consent requirements.";
        scopeKind: "mixed-auth-mode";
     };
     required: true;
     scopes: ["User.Read", "ChatMessage.Send", "ChannelMessage.Send", "Chat.Read", "Chat.ReadWrite", "ChannelMessage.Read.All", "ChannelMessage.Read.Group", "ChatMessage.Read.Chat", "ChannelMessage.ReadWrite"];
   }, {
     description: "SDK-user-owned tenant where the Teams resources, delegated users, app registration, and consent live.";
     id: "microsoft-graph-tenant";
     label: "Microsoft Entra tenant";
     required: true;
   }, {
     description: "SDK-user-owned Microsoft Entra app registration with delegated or application permissions and tenant/admin consent.";
     id: "microsoft-graph-app-registration";
     label: "Microsoft Graph app registration";
     required: true;
   }, {
     description: "SDK-user-owned secret used to validate Microsoft Graph change notification payloads.";
     id: "microsoft-graph-change-notification-client-state";
     label: "Graph change notification clientState";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "workplace.teams";
  limitations: ["Available operations depend on the SDK user's Microsoft Entra tenant, Teams licensing, Graph OAuth scopes, delegated versus application permission mode, resource-specific consent, tenant/admin consent, channel membership, and Teams policy.", "Normal channel/chat message sends reject application permission mode; Microsoft documents application send permissions for migration/import scenarios, which this package does not implement.", "Microsoft Graph channel and chat message APIs are intended for messages people will read; this package does not use Teams as an application log or choose automation volume policy.", "This package provides transport, parsing, and readiness helpers only; customer/internal visibility, agent assist, approval, retention, redaction, escalation, and human handoff are SDK-user policy.", "Subscription renewal, deletion, reauthorization timing, encrypted resource data decryption, and retry policy remain SDK-user integration responsibilities."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        applicationMigrationSend: "provider-supported-not-typed";
        changeNotifications: "typed-validate-parse";
        channelMessages: "sdk-owned-send-list-get-update";
        channelReplies: "sdk-owned-send-list";
        chatMessages: "sdk-owned-send-list-get-update";
        currentUser: "sdk-owned-read";
        graphSubscriptions: "sdk-owned-create";
     };
     implementation: {
        manifestOnlyExport: "@cognidesk/integration-workplace-teams/manifest";
        rawClientEscapeHatch: "rawClient";
        sdkPackage: "@microsoft/microsoft-graph-client";
        strategy: "official-sdk";
     };
  };
  name: "Microsoft Teams";
  operations: [{
     alias: "workplace.message.receive";
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive Teams change notifications";
     providerObject: "teamsChangeNotification";
   }, {
     alias: "workplace.thread.read";
     capability: "thread";
     exposesSensitiveData: true;
     label: "Read Teams thread messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "workplace.message.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Teams message";
     providerObject: "teamsChatMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.reply";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Teams channel reply";
     providerObject: "teamsChatMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Update Teams message";
     providerObject: "teamsChatMessage";
     sideEffect: true;
   }, {
     alias: "workplace.notification.send";
     capability: "notify";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send internal Teams notification";
     providerObject: "teamsAgentAssistMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.user.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read current Microsoft Graph user";
     providerObject: "teamsUser";
   }, {
     alias: "teams.channelMessages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams channel messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.channelReplies.list";
     capability: "thread";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams channel replies";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.channelMessage.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Teams channel message";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.chatMessages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams chat messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.chatMessage.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Teams chat message";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.subscription.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Create Microsoft Graph Teams subscription";
     providerObject: "teamsGraphSubscription";
     sideEffect: true;
   }, {
     alias: "teams.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Teams webhook";
     providerObject: "teamsChangeNotification";
   }, {
     alias: "teams.rawGraph.request";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Run raw Microsoft Graph request";
     metadata: {
        rawClientEscapeHatch: true;
     };
     providerObject: "teamsGraphResource";
  }];
  packageName: "@cognidesk/integration-workplace-teams";
  privacyNotes: ["Teams messages, channel identifiers, chat identifiers, user identifiers, mentions, attachments, reactions, hosted content references, and change notification payloads can contain internal support context and customer data.", "Microsoft Graph OAuth tokens, app credentials, tenant identifiers, and change notification clientState secrets stay server-side and are represented in Studio only as credential readiness.", "Internal visibility, agent-assist routing, transcript use, retention, legal hold, deletion, and escalation policy remain SDK-user-owned Microsoft Teams, Microsoft Purview, and Cognidesk configuration."];
  provider: "teams";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates Microsoft Graph change notification clientState values and parses Teams chatMessage notifications for SDK-user-owned workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Teams change notifications"`; `providerObjects`: \[\{ `kind`: `"teamsChangeNotification"`; `label`: `"Teams Change Notification"`; \}, \{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends channel or chat messages through Microsoft Graph chatMessage endpoints with delegated permissions when SDK-user policy permits workplace-visible output."`; `exposesSensitiveData`: `true`; `label`: `"Send Teams messages"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"notify"`; `description`: `"Posts SDK-user-routed Teams messages for internal agent-assist, supervisor review, and workplace collaboration flows."`; `exposesSensitiveData`: `true`; `label`: `"Support internal agent assist"`; `providerObjects`: \[\{ `kind`: `"teamsAgentAssistMessage"`; `label`: `"Teams Agent Assist Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Associates support context with Teams channel threads, replies, and chat message identifiers selected by SDK-user configuration."`; `exposesSensitiveData`: `true`; `label`: `"Use Teams conversations"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}, \{ `kind`: `"teamsThread"`; `label`: `"Teams Thread"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Teams channel or chat messages where Microsoft Graph permissions, resource-specific consent, and tenant policy allow access."`; `exposesSensitiveData`: `true`; `label`: `"Read Teams messages"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}, \{ `kind`: `"teamsUser"`; `label`: `"Microsoft Graph User"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Microsoft Graph change-notification subscriptions for SDK-user-selected Teams resources; renewal and deletion lifecycle stays SDK-user-owned."`; `exposesSensitiveData`: `true`; `label`: `"Create Graph subscriptions"`; `providerObjects`: \[\{ `kind`: `"teamsGraphSubscription"`; `label`: `"Microsoft Graph Subscription"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Teams chatMessage resources through Microsoft Graph: delegated permissions can update message properties, while application permissions are limited to policyViolation updates."`; `exposesSensitiveData`: `true`; `label`: `"Update Teams messages"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"workplace"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph send channel message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send chat message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chat-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send channel reply"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel messages"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-list-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel replies"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph get chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-get?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph update chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-update?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\]; `notes`: \[`"Coverage includes SDK-backed Microsoft Graph Teams support workflows: channel and chat messages, channel replies, message updates, subscriptions, current-user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Files/Drive, calendar, identity/admin, security, calls, meetings, app catalog breadth, and broader Graph resources remain outside this Teams adapter."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph send channel message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send chat message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chat-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send channel reply"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel messages"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-list-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel replies"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph get chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-get?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph update chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-update?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\] |
| `coverage.notes` | \[`"Coverage includes SDK-backed Microsoft Graph Teams support workflows: channel and chat messages, channel replies, message updates, subscriptions, current-user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Files/Drive, calendar, identity/admin, security, calls, meetings, app catalog breadth, and broader Graph resources remain outside this Teams adapter."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"Server-side delegated Microsoft Graph OAuth access token for normal Teams chatMessage sends and /me readiness calls."`; `id`: `"microsoft-graph-oauth-access-token"`; `label`: `"Microsoft Graph OAuth access token"`; `metadata`: \{ `privilegeGuidance`: `"Normal Teams sends require delegated Microsoft Graph permissions; application permissions and resource-specific consent have narrower documented behavior and admin-consent requirements."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; `scopes`: \[`"User.Read"`, `"ChatMessage.Send"`, `"ChannelMessage.Send"`, `"Chat.Read"`, `"Chat.ReadWrite"`, `"ChannelMessage.Read.All"`, `"ChannelMessage.Read.Group"`, `"ChatMessage.Read.Chat"`, `"ChannelMessage.ReadWrite"`\]; \}, \{ `description`: `"SDK-user-owned tenant where the Teams resources, delegated users, app registration, and consent live."`; `id`: `"microsoft-graph-tenant"`; `label`: `"Microsoft Entra tenant"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned Microsoft Entra app registration with delegated or application permissions and tenant/admin consent."`; `id`: `"microsoft-graph-app-registration"`; `label`: `"Microsoft Graph app registration"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned secret used to validate Microsoft Graph change notification payloads."`; `id`: `"microsoft-graph-change-notification-client-state"`; `label`: `"Graph change notification clientState"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"workplace.teams"` |
| <a id="property-limitations"></a> `limitations` | \[`"Available operations depend on the SDK user's Microsoft Entra tenant, Teams licensing, Graph OAuth scopes, delegated versus application permission mode, resource-specific consent, tenant/admin consent, channel membership, and Teams policy."`, `"Normal channel/chat message sends reject application permission mode; Microsoft documents application send permissions for migration/import scenarios, which this package does not implement."`, `"Microsoft Graph channel and chat message APIs are intended for messages people will read; this package does not use Teams as an application log or choose automation volume policy."`, `"This package provides transport, parsing, and readiness helpers only; customer/internal visibility, agent assist, approval, retention, redaction, escalation, and human handoff are SDK-user policy."`, `"Subscription renewal, deletion, reauthorization timing, encrypted resource data decryption, and retry policy remain SDK-user integration responsibilities."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `applicationMigrationSend`: `"provider-supported-not-typed"`; `changeNotifications`: `"typed-validate-parse"`; `channelMessages`: `"sdk-owned-send-list-get-update"`; `channelReplies`: `"sdk-owned-send-list"`; `chatMessages`: `"sdk-owned-send-list-get-update"`; `currentUser`: `"sdk-owned-read"`; `graphSubscriptions`: `"sdk-owned-create"`; \}; `implementation`: \{ `manifestOnlyExport`: `"@cognidesk/integration-workplace-teams/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `applicationMigrationSend`: `"provider-supported-not-typed"`; `changeNotifications`: `"typed-validate-parse"`; `channelMessages`: `"sdk-owned-send-list-get-update"`; `channelReplies`: `"sdk-owned-send-list"`; `chatMessages`: `"sdk-owned-send-list-get-update"`; `currentUser`: `"sdk-owned-read"`; `graphSubscriptions`: `"sdk-owned-create"`; \} |
| `metadata.channelCoverage.applicationMigrationSend` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.changeNotifications` | `"typed-validate-parse"` |
| `metadata.channelCoverage.channelMessages` | `"sdk-owned-send-list-get-update"` |
| `metadata.channelCoverage.channelReplies` | `"sdk-owned-send-list"` |
| `metadata.channelCoverage.chatMessages` | `"sdk-owned-send-list-get-update"` |
| `metadata.channelCoverage.currentUser` | `"sdk-owned-read"` |
| `metadata.channelCoverage.graphSubscriptions` | `"sdk-owned-create"` |
| `metadata.implementation` | \{ `manifestOnlyExport`: `"@cognidesk/integration-workplace-teams/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.manifestOnlyExport` | `"@cognidesk/integration-workplace-teams/manifest"` |
| `metadata.implementation.rawClientEscapeHatch` | `"rawClient"` |
| `metadata.implementation.sdkPackage` | `"@microsoft/microsoft-graph-client"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| <a id="property-name"></a> `name` | `"Microsoft Teams"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"workplace.message.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive Teams change notifications"`; `providerObject`: `"teamsChangeNotification"`; \}, \{ `alias`: `"workplace.thread.read"`; `capability`: `"thread"`; `exposesSensitiveData`: `true`; `label`: `"Read Teams thread messages"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"workplace.message.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send Teams message"`; `providerObject`: `"teamsChatMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.reply"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send Teams channel reply"`; `providerObject`: `"teamsChatMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Update Teams message"`; `providerObject`: `"teamsChatMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.notification.send"`; `capability`: `"notify"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send internal Teams notification"`; `providerObject`: `"teamsAgentAssistMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.user.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read current Microsoft Graph user"`; `providerObject`: `"teamsUser"`; \}, \{ `alias`: `"teams.channelMessages.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Teams channel messages"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.channelReplies.list"`; `capability`: `"thread"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Teams channel replies"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.channelMessage.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Teams channel message"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.chatMessages.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Teams chat messages"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.chatMessage.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Teams chat message"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.subscription.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Create Microsoft Graph Teams subscription"`; `providerObject`: `"teamsGraphSubscription"`; `sideEffect`: `true`; \}, \{ `alias`: `"teams.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse Teams webhook"`; `providerObject`: `"teamsChangeNotification"`; \}, \{ `alias`: `"teams.rawGraph.request"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Run raw Microsoft Graph request"`; `metadata`: \{ `rawClientEscapeHatch`: `true`; \}; `providerObject`: `"teamsGraphResource"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-workplace-teams"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Teams messages, channel identifiers, chat identifiers, user identifiers, mentions, attachments, reactions, hosted content references, and change notification payloads can contain internal support context and customer data."`, `"Microsoft Graph OAuth tokens, app credentials, tenant identifiers, and change notification clientState secrets stay server-side and are represented in Studio only as credential readiness."`, `"Internal visibility, agent-assist routing, transcript use, retention, legal hold, deletion, and escalation policy remain SDK-user-owned Microsoft Teams, Microsoft Purview, and Cognidesk configuration."`\] |
| <a id="property-provider"></a> `provider` | `"teams"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### teamsWorkplaceOperationAliases

```ts
const teamsWorkplaceOperationAliases: {
  channelMessageGet: "teams.channelMessage.get";
  channelMessagesList: "teams.channelMessages.list";
  channelRepliesList: "teams.channelReplies.list";
  chatMessageGet: "teams.chatMessage.get";
  chatMessagesList: "teams.chatMessages.list";
  messageReply: "workplace.message.reply";
  messageSend: "workplace.message.send";
  messageUpdate: "workplace.message.update";
  notificationSend: "workplace.notification.send";
  rawGraphRequest: "teams.rawGraph.request";
  receive: "workplace.message.receive";
  subscriptionCreate: "teams.subscription.create";
  threadRead: "workplace.thread.read";
  userRead: "workplace.user.read";
  webhookParse: "teams.webhook.parse";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-channelmessageget"></a> `channelMessageGet` | `"teams.channelMessage.get"` |
| <a id="property-channelmessageslist"></a> `channelMessagesList` | `"teams.channelMessages.list"` |
| <a id="property-channelreplieslist"></a> `channelRepliesList` | `"teams.channelReplies.list"` |
| <a id="property-chatmessageget"></a> `chatMessageGet` | `"teams.chatMessage.get"` |
| <a id="property-chatmessageslist"></a> `chatMessagesList` | `"teams.chatMessages.list"` |
| <a id="property-messagereply"></a> `messageReply` | `"workplace.message.reply"` |
| <a id="property-messagesend"></a> `messageSend` | `"workplace.message.send"` |
| <a id="property-messageupdate"></a> `messageUpdate` | `"workplace.message.update"` |
| <a id="property-notificationsend"></a> `notificationSend` | `"workplace.notification.send"` |
| <a id="property-rawgraphrequest"></a> `rawGraphRequest` | `"teams.rawGraph.request"` |
| <a id="property-receive"></a> `receive` | `"workplace.message.receive"` |
| <a id="property-subscriptioncreate"></a> `subscriptionCreate` | `"teams.subscription.create"` |
| <a id="property-threadread"></a> `threadRead` | `"workplace.thread.read"` |
| <a id="property-userread"></a> `userRead` | `"workplace.user.read"` |
| <a id="property-webhookparse"></a> `webhookParse` | `"teams.webhook.parse"` |

***

### teamsWorkplaceProviderManifest

```ts
const teamsWorkplaceProviderManifest: {
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
     type: "unknown" | "community" | "official" | "partner";
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
     audiences: ["internal-support", "mixed"];
     capability: "receive";
     description: "Validates Microsoft Graph change notification clientState values and parses Teams chatMessage notifications for SDK-user-owned workflows.";
     exposesSensitiveData: true;
     label: "Receive Teams change notifications";
     providerObjects: [{
        kind: "teamsChangeNotification";
        label: "Teams Change Notification";
      }, {
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "send";
     description: "Sends channel or chat messages through Microsoft Graph chatMessage endpoints with delegated permissions when SDK-user policy permits workplace-visible output.";
     exposesSensitiveData: true;
     label: "Send Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "notify";
     description: "Posts SDK-user-routed Teams messages for internal agent-assist, supervisor review, and workplace collaboration flows.";
     exposesSensitiveData: true;
     label: "Support internal agent assist";
     providerObjects: [{
        kind: "teamsAgentAssistMessage";
        label: "Teams Agent Assist Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "thread";
     description: "Associates support context with Teams channel threads, replies, and chat message identifiers selected by SDK-user configuration.";
     exposesSensitiveData: true;
     label: "Use Teams conversations";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
      }, {
        kind: "teamsThread";
        label: "Teams Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Teams channel or chat messages where Microsoft Graph permissions, resource-specific consent, and tenant policy allow access.";
     exposesSensitiveData: true;
     label: "Read Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
      }, {
        kind: "teamsUser";
        label: "Microsoft Graph User";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Microsoft Graph change-notification subscriptions for SDK-user-selected Teams resources; renewal and deletion lifecycle stays SDK-user-owned.";
     exposesSensitiveData: true;
     label: "Create Graph subscriptions";
     providerObjects: [{
        kind: "teamsGraphSubscription";
        label: "Microsoft Graph Subscription";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Teams chatMessage resources through Microsoft Graph: delegated permissions can update message properties, while application permissions are limited to policyViolation updates.";
     exposesSensitiveData: true;
     label: "Update Teams messages";
     providerObjects: [{
        kind: "teamsChatMessage";
        label: "Teams Chat Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "workplace";
  channelAudiences: ["internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Microsoft Graph JavaScript client";
        url: "https://www.npmjs.com/package/@microsoft/microsoft-graph-client";
      }, {
        label: "Microsoft Graph send channel message";
        url: "https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph send chat message";
        url: "https://learn.microsoft.com/en-us/graph/api/chat-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph send channel reply";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list channel messages";
        url: "https://learn.microsoft.com/en-us/graph/api/channel-list-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list channel replies";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph get chatMessage";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-get?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph update chatMessage";
        url: "https://learn.microsoft.com/en-us/graph/api/chatmessage-update?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph create subscription";
        url: "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph webhook subscription lifecycle";
        url: "https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks";
     }];
     notes: ["Coverage includes SDK-backed Microsoft Graph Teams support workflows: channel and chat messages, channel replies, message updates, subscriptions, current-user readiness, and change notifications.", "The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers.", "This is not full Microsoft Graph coverage. Files/Drive, calendar, identity/admin, security, calls, meetings, app catalog breadth, and broader Graph resources remain outside this Teams adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side delegated Microsoft Graph OAuth access token for normal Teams chatMessage sends and /me readiness calls.";
     id: "microsoft-graph-oauth-access-token";
     label: "Microsoft Graph OAuth access token";
     metadata: {
        privilegeGuidance: "Normal Teams sends require delegated Microsoft Graph permissions; application permissions and resource-specific consent have narrower documented behavior and admin-consent requirements.";
        scopeKind: "mixed-auth-mode";
     };
     required: true;
     scopes: ["User.Read", "ChatMessage.Send", "ChannelMessage.Send", "Chat.Read", "Chat.ReadWrite", "ChannelMessage.Read.All", "ChannelMessage.Read.Group", "ChatMessage.Read.Chat", "ChannelMessage.ReadWrite"];
   }, {
     description: "SDK-user-owned tenant where the Teams resources, delegated users, app registration, and consent live.";
     id: "microsoft-graph-tenant";
     label: "Microsoft Entra tenant";
     required: true;
   }, {
     description: "SDK-user-owned Microsoft Entra app registration with delegated or application permissions and tenant/admin consent.";
     id: "microsoft-graph-app-registration";
     label: "Microsoft Graph app registration";
     required: true;
   }, {
     description: "SDK-user-owned secret used to validate Microsoft Graph change notification payloads.";
     id: "microsoft-graph-change-notification-client-state";
     label: "Graph change notification clientState";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "workplace.teams";
  limitations: ["Available operations depend on the SDK user's Microsoft Entra tenant, Teams licensing, Graph OAuth scopes, delegated versus application permission mode, resource-specific consent, tenant/admin consent, channel membership, and Teams policy.", "Normal channel/chat message sends reject application permission mode; Microsoft documents application send permissions for migration/import scenarios, which this package does not implement.", "Microsoft Graph channel and chat message APIs are intended for messages people will read; this package does not use Teams as an application log or choose automation volume policy.", "This package provides transport, parsing, and readiness helpers only; customer/internal visibility, agent assist, approval, retention, redaction, escalation, and human handoff are SDK-user policy.", "Subscription renewal, deletion, reauthorization timing, encrypted resource data decryption, and retry policy remain SDK-user integration responsibilities."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        applicationMigrationSend: "provider-supported-not-typed";
        changeNotifications: "typed-validate-parse";
        channelMessages: "sdk-owned-send-list-get-update";
        channelReplies: "sdk-owned-send-list";
        chatMessages: "sdk-owned-send-list-get-update";
        currentUser: "sdk-owned-read";
        graphSubscriptions: "sdk-owned-create";
     };
     implementation: {
        manifestOnlyExport: "@cognidesk/integration-workplace-teams/manifest";
        rawClientEscapeHatch: "rawClient";
        sdkPackage: "@microsoft/microsoft-graph-client";
        strategy: "official-sdk";
     };
  };
  name: "Microsoft Teams";
  operations: [{
     alias: "workplace.message.receive";
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive Teams change notifications";
     providerObject: "teamsChangeNotification";
   }, {
     alias: "workplace.thread.read";
     capability: "thread";
     exposesSensitiveData: true;
     label: "Read Teams thread messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "workplace.message.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Teams message";
     providerObject: "teamsChatMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.reply";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Teams channel reply";
     providerObject: "teamsChatMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Update Teams message";
     providerObject: "teamsChatMessage";
     sideEffect: true;
   }, {
     alias: "workplace.notification.send";
     capability: "notify";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send internal Teams notification";
     providerObject: "teamsAgentAssistMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "workplace.user.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read current Microsoft Graph user";
     providerObject: "teamsUser";
   }, {
     alias: "teams.channelMessages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams channel messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.channelReplies.list";
     capability: "thread";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams channel replies";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.channelMessage.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Teams channel message";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.chatMessages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Teams chat messages";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.chatMessage.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Teams chat message";
     providerObject: "teamsChatMessage";
   }, {
     alias: "teams.subscription.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Create Microsoft Graph Teams subscription";
     providerObject: "teamsGraphSubscription";
     sideEffect: true;
   }, {
     alias: "teams.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Teams webhook";
     providerObject: "teamsChangeNotification";
   }, {
     alias: "teams.rawGraph.request";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Run raw Microsoft Graph request";
     metadata: {
        rawClientEscapeHatch: true;
     };
     providerObject: "teamsGraphResource";
  }];
  packageName: "@cognidesk/integration-workplace-teams";
  privacyNotes: ["Teams messages, channel identifiers, chat identifiers, user identifiers, mentions, attachments, reactions, hosted content references, and change notification payloads can contain internal support context and customer data.", "Microsoft Graph OAuth tokens, app credentials, tenant identifiers, and change notification clientState secrets stay server-side and are represented in Studio only as credential readiness.", "Internal visibility, agent-assist routing, transcript use, retention, legal hold, deletion, and escalation policy remain SDK-user-owned Microsoft Teams, Microsoft Purview, and Cognidesk configuration."];
  provider: "teams";
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
| `maintainers` | \{ `name`: `string`; `type`: `"unknown"` \| `"community"` \| `"official"` \| `"partner"`; `url?`: `string`; \}[] |
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
| `capabilities` | \[\{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates Microsoft Graph change notification clientState values and parses Teams chatMessage notifications for SDK-user-owned workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Teams change notifications"`; `providerObjects`: \[\{ `kind`: `"teamsChangeNotification"`; `label`: `"Teams Change Notification"`; \}, \{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends channel or chat messages through Microsoft Graph chatMessage endpoints with delegated permissions when SDK-user policy permits workplace-visible output."`; `exposesSensitiveData`: `true`; `label`: `"Send Teams messages"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"notify"`; `description`: `"Posts SDK-user-routed Teams messages for internal agent-assist, supervisor review, and workplace collaboration flows."`; `exposesSensitiveData`: `true`; `label`: `"Support internal agent assist"`; `providerObjects`: \[\{ `kind`: `"teamsAgentAssistMessage"`; `label`: `"Teams Agent Assist Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Associates support context with Teams channel threads, replies, and chat message identifiers selected by SDK-user configuration."`; `exposesSensitiveData`: `true`; `label`: `"Use Teams conversations"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}, \{ `kind`: `"teamsThread"`; `label`: `"Teams Thread"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Teams channel or chat messages where Microsoft Graph permissions, resource-specific consent, and tenant policy allow access."`; `exposesSensitiveData`: `true`; `label`: `"Read Teams messages"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}, \{ `kind`: `"teamsUser"`; `label`: `"Microsoft Graph User"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Microsoft Graph change-notification subscriptions for SDK-user-selected Teams resources; renewal and deletion lifecycle stays SDK-user-owned."`; `exposesSensitiveData`: `true`; `label`: `"Create Graph subscriptions"`; `providerObjects`: \[\{ `kind`: `"teamsGraphSubscription"`; `label`: `"Microsoft Graph Subscription"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Teams chatMessage resources through Microsoft Graph: delegated permissions can update message properties, while application permissions are limited to policyViolation updates."`; `exposesSensitiveData`: `true`; `label`: `"Update Teams messages"`; `providerObjects`: \[\{ `kind`: `"teamsChatMessage"`; `label`: `"Teams Chat Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"workplace"` |
| `channelAudiences` | \[`"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph send channel message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send chat message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chat-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send channel reply"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel messages"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-list-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel replies"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph get chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-get?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph update chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-update?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\]; `notes`: \[`"Coverage includes SDK-backed Microsoft Graph Teams support workflows: channel and chat messages, channel replies, message updates, subscriptions, current-user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Files/Drive, calendar, identity/admin, security, calls, meetings, app catalog breadth, and broader Graph resources remain outside this Teams adapter."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph send channel message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send chat message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chat-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph send channel reply"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-post-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel messages"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/channel-list-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list channel replies"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-list-replies?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph get chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-get?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph update chatMessage"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/chatmessage-update?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\] |
| `coverage.notes` | \[`"Coverage includes SDK-backed Microsoft Graph Teams support workflows: channel and chat messages, channel replies, message updates, subscriptions, current-user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Files/Drive, calendar, identity/admin, security, calls, meetings, app catalog breadth, and broader Graph resources remain outside this Teams adapter."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side delegated Microsoft Graph OAuth access token for normal Teams chatMessage sends and /me readiness calls."`; `id`: `"microsoft-graph-oauth-access-token"`; `label`: `"Microsoft Graph OAuth access token"`; `metadata`: \{ `privilegeGuidance`: `"Normal Teams sends require delegated Microsoft Graph permissions; application permissions and resource-specific consent have narrower documented behavior and admin-consent requirements."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; `scopes`: \[`"User.Read"`, `"ChatMessage.Send"`, `"ChannelMessage.Send"`, `"Chat.Read"`, `"Chat.ReadWrite"`, `"ChannelMessage.Read.All"`, `"ChannelMessage.Read.Group"`, `"ChatMessage.Read.Chat"`, `"ChannelMessage.ReadWrite"`\]; \}, \{ `description`: `"SDK-user-owned tenant where the Teams resources, delegated users, app registration, and consent live."`; `id`: `"microsoft-graph-tenant"`; `label`: `"Microsoft Entra tenant"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned Microsoft Entra app registration with delegated or application permissions and tenant/admin consent."`; `id`: `"microsoft-graph-app-registration"`; `label`: `"Microsoft Graph app registration"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned secret used to validate Microsoft Graph change notification payloads."`; `id`: `"microsoft-graph-change-notification-client-state"`; `label`: `"Graph change notification clientState"`; `required`: `false`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"workplace.teams"` |
| `limitations` | \[`"Available operations depend on the SDK user's Microsoft Entra tenant, Teams licensing, Graph OAuth scopes, delegated versus application permission mode, resource-specific consent, tenant/admin consent, channel membership, and Teams policy."`, `"Normal channel/chat message sends reject application permission mode; Microsoft documents application send permissions for migration/import scenarios, which this package does not implement."`, `"Microsoft Graph channel and chat message APIs are intended for messages people will read; this package does not use Teams as an application log or choose automation volume policy."`, `"This package provides transport, parsing, and readiness helpers only; customer/internal visibility, agent assist, approval, retention, redaction, escalation, and human handoff are SDK-user policy."`, `"Subscription renewal, deletion, reauthorization timing, encrypted resource data decryption, and retry policy remain SDK-user integration responsibilities."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `applicationMigrationSend`: `"provider-supported-not-typed"`; `changeNotifications`: `"typed-validate-parse"`; `channelMessages`: `"sdk-owned-send-list-get-update"`; `channelReplies`: `"sdk-owned-send-list"`; `chatMessages`: `"sdk-owned-send-list-get-update"`; `currentUser`: `"sdk-owned-read"`; `graphSubscriptions`: `"sdk-owned-create"`; \}; `implementation`: \{ `manifestOnlyExport`: `"@cognidesk/integration-workplace-teams/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `applicationMigrationSend`: `"provider-supported-not-typed"`; `changeNotifications`: `"typed-validate-parse"`; `channelMessages`: `"sdk-owned-send-list-get-update"`; `channelReplies`: `"sdk-owned-send-list"`; `chatMessages`: `"sdk-owned-send-list-get-update"`; `currentUser`: `"sdk-owned-read"`; `graphSubscriptions`: `"sdk-owned-create"`; \} |
| `metadata.channelCoverage.applicationMigrationSend` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.changeNotifications` | `"typed-validate-parse"` |
| `metadata.channelCoverage.channelMessages` | `"sdk-owned-send-list-get-update"` |
| `metadata.channelCoverage.channelReplies` | `"sdk-owned-send-list"` |
| `metadata.channelCoverage.chatMessages` | `"sdk-owned-send-list-get-update"` |
| `metadata.channelCoverage.currentUser` | `"sdk-owned-read"` |
| `metadata.channelCoverage.graphSubscriptions` | `"sdk-owned-create"` |
| `metadata.implementation` | \{ `manifestOnlyExport`: `"@cognidesk/integration-workplace-teams/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.manifestOnlyExport` | `"@cognidesk/integration-workplace-teams/manifest"` |
| `metadata.implementation.rawClientEscapeHatch` | `"rawClient"` |
| `metadata.implementation.sdkPackage` | `"@microsoft/microsoft-graph-client"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `name` | `"Microsoft Teams"` |
| `operations` | \[\{ `alias`: `"workplace.message.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive Teams change notifications"`; `providerObject`: `"teamsChangeNotification"`; \}, \{ `alias`: `"workplace.thread.read"`; `capability`: `"thread"`; `exposesSensitiveData`: `true`; `label`: `"Read Teams thread messages"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"workplace.message.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send Teams message"`; `providerObject`: `"teamsChatMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.reply"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send Teams channel reply"`; `providerObject`: `"teamsChatMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Update Teams message"`; `providerObject`: `"teamsChatMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.notification.send"`; `capability`: `"notify"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send internal Teams notification"`; `providerObject`: `"teamsAgentAssistMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.user.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read current Microsoft Graph user"`; `providerObject`: `"teamsUser"`; \}, \{ `alias`: `"teams.channelMessages.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Teams channel messages"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.channelReplies.list"`; `capability`: `"thread"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Teams channel replies"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.channelMessage.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Teams channel message"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.chatMessages.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Teams chat messages"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.chatMessage.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Teams chat message"`; `providerObject`: `"teamsChatMessage"`; \}, \{ `alias`: `"teams.subscription.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Create Microsoft Graph Teams subscription"`; `providerObject`: `"teamsGraphSubscription"`; `sideEffect`: `true`; \}, \{ `alias`: `"teams.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse Teams webhook"`; `providerObject`: `"teamsChangeNotification"`; \}, \{ `alias`: `"teams.rawGraph.request"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Run raw Microsoft Graph request"`; `metadata`: \{ `rawClientEscapeHatch`: `true`; \}; `providerObject`: `"teamsGraphResource"`; \}\] |
| `packageName` | `"@cognidesk/integration-workplace-teams"` |
| `privacyNotes` | \[`"Teams messages, channel identifiers, chat identifiers, user identifiers, mentions, attachments, reactions, hosted content references, and change notification payloads can contain internal support context and customer data."`, `"Microsoft Graph OAuth tokens, app credentials, tenant identifiers, and change notification clientState secrets stay server-side and are represented in Studio only as credential readiness."`, `"Internal visibility, agent-assist routing, transcript use, retention, legal hold, deletion, and escalation policy remain SDK-user-owned Microsoft Teams, Microsoft Purview, and Cognidesk configuration."`\] |
| `provider` | `"teams"` |
| `trustLevel` | `"official"` |
