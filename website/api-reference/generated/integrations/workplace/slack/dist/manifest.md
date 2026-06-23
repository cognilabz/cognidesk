# integrations/workplace/slack/dist/manifest

## Variables

### slackWorkplaceManifestInput

```ts
const slackWorkplaceManifestInput: {
  capabilities: [{
     audiences: ["internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Slack Events API and interactivity payloads for SDK-user-owned support flows.";
     exposesSensitiveData: true;
     label: "Receive Slack events";
     providerObjects: [{
        kind: "slackEvent";
        label: "Slack Event";
      }, {
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "send";
     description: "Posts channel-visible support messages through @slack/web-api chat.postMessage.";
     exposesSensitiveData: true;
     label: "Post Slack messages";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "notify";
     description: "Posts Slack ephemeral messages for internal agent-assist workflows when Slack provides a target user.";
     exposesSensitiveData: true;
     label: "Post Slack agent-assist notifications";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "thread";
     description: "Associates messages with Slack thread timestamps and reads thread replies.";
     exposesSensitiveData: true;
     label: "Use Slack threads";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
      }, {
        kind: "workplaceThread";
        label: "Workplace Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "media";
     description: "Runs Slack's external upload URL and complete-upload sequence for SDK-user-selected file sharing.";
     exposesSensitiveData: true;
     label: "Upload Slack files";
     providerObjects: [{
        kind: "workplaceFile";
        label: "Workplace File";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Slack conversation history or thread replies for SDK-user-selected channels and windows.";
     exposesSensitiveData: true;
     label: "Read Slack conversation history";
     providerObjects: [{
        kind: "workplaceThread";
        label: "Workplace Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Slack messages through chat.update when SDK-user policy permits mutation.";
     exposesSensitiveData: true;
     label: "Update Slack messages";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "slack.request-signature";
     description: "Validates Slack X-Slack-Signature and X-Slack-Request-Timestamp values.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Slack request signatures";
     providerObjects: [{
        kind: "slackSignedRequest";
        label: "Slack Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "workplace";
  channelAudiences: ["internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Slack Web API package";
        url: "https://www.npmjs.com/package/@slack/web-api";
      }, {
        label: "Slack Web API methods";
        url: "https://docs.slack.dev/reference/methods/";
      }, {
        label: "Slack chat.postMessage";
        url: "https://docs.slack.dev/reference/methods/chat.postMessage/";
      }, {
        label: "Slack chat.update";
        url: "https://docs.slack.dev/reference/methods/chat.update/";
      }, {
        label: "Slack conversations.replies";
        url: "https://docs.slack.dev/reference/methods/conversations.replies/";
      }, {
        label: "Slack files.getUploadURLExternal";
        url: "https://docs.slack.dev/reference/methods/files.getUploadURLExternal/";
      }, {
        label: "Slack external file upload flow";
        url: "https://docs.slack.dev/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay/";
      }, {
        label: "Slack Events API";
        url: "https://docs.slack.dev/apis/events-api/";
      }, {
        label: "Slack request verification";
        url: "https://docs.slack.dev/authentication/verifying-requests-from-slack/";
      }, {
        label: "Slack Web API rate limits";
        url: "https://docs.slack.dev/apis/web-api/rate-limits";
     }];
     notes: ["Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package.", "Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness.", "This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage.", "Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side bot token used by @slack/web-api for Web API calls.";
     id: "slack-bot-token";
     label: "Slack bot token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["chat:write", "chat:write.public", "channels:history", "groups:history", "im:history", "mpim:history", "files:write"];
   }, {
     description: "Server-side signing secret used to validate Slack Events API and interactivity requests.";
     id: "slack-signing-secret";
     label: "Slack signing secret";
     required: true;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "workplace.slack";
  limitations: ["Available Slack operations depend on the SDK user's app scopes, workspace policy, channel membership, Enterprise Grid policy, and user targets for ephemeral messages.", "Slack rate limits vary by method, workspace, Marketplace approval, commercial distribution, and install date; SDK users own pagination, Retry-After handling, retry, and backoff policy.", "Customer visibility, agent-assist routing, approval, retention, redaction, and escalation behavior remain SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        authReadiness: "sdk-owned-read";
        chatMessages: "sdk-owned-post-update";
        ephemeralMessages: "sdk-owned-post";
        eventsInteractivity: "typed-parse-verify";
        externalFileUpload: "sdk-owned-upload";
        incomingWebhooks: "not-covered";
        oauth: "not-covered";
        socketMode: "not-covered";
        threadReplies: "sdk-owned-read";
     };
     providerClient: {
        importPolicy: "runtime-entrypoint-only";
        package: "@slack/web-api";
        versionRange: "^7.17.0";
     };
  };
  name: "Slack";
  operations: [{
     alias: "workplace.message.receive";
     capability: "receive";
     exposesSensitiveData: true;
     inputSchemaName: "ParseSlackSignedRequestInput";
     outputSchemaName: "SlackSignedRequest";
     providerObject: "workplaceMessage";
     requiresCredential: true;
   }, {
     alias: "workplace.thread.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     inputSchemaName: "SlackConversationsRepliesInput";
     outputSchemaName: "SlackConversationsRepliesResponse";
     providerObject: "workplaceThread";
     providerOperation: "conversations.replies";
     requiresCredential: true;
   }, {
     alias: "workplace.message.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     inputSchemaName: "SlackPostMessageInput";
     outputSchemaName: "SlackPostMessageResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.postMessage";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.reply";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     inputSchemaName: "SlackPostMessageInput";
     outputSchemaName: "SlackPostMessageResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.postMessage";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     inputSchemaName: "SlackUpdateMessageInput";
     outputSchemaName: "SlackUpdateMessageResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.update";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.file.upload";
     capability: "media";
     exposesSensitiveData: true;
     inputSchemaName: "SlackUploadExternalFileInput";
     outputSchemaName: "SlackCompleteUploadExternalResponse";
     providerObject: "workplaceFile";
     providerOperation: "files.getUploadURLExternal/files.completeUploadExternal";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.notification.send";
     capability: "notify";
     exposesSensitiveData: true;
     inputSchemaName: "SlackPostEphemeralInput";
     outputSchemaName: "SlackPostEphemeralResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.postEphemeral";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "slack.request-signature";
     capability: "slack.request-signature";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "ValidateSlackRequestSignatureInput";
     outputSchemaName: "WebhookVerificationResult";
     providerObject: "slackSignedRequest";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-workplace-slack";
  privacyNotes: ["Slack messages, channel identifiers, user identifiers, event payloads, interaction payloads, files, and workspace metadata can contain internal support context and customer data.", "Slack bot tokens and signing secrets stay server-side and are represented in Studio only as credential readiness."];
  provider: "slack";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Slack Events API and interactivity payloads for SDK-user-owned support flows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Slack events"`; `providerObjects`: \[\{ `kind`: `"slackEvent"`; `label`: `"Slack Event"`; \}, \{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Posts channel-visible support messages through @slack/web-api chat.postMessage."`; `exposesSensitiveData`: `true`; `label`: `"Post Slack messages"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"notify"`; `description`: `"Posts Slack ephemeral messages for internal agent-assist workflows when Slack provides a target user."`; `exposesSensitiveData`: `true`; `label`: `"Post Slack agent-assist notifications"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Associates messages with Slack thread timestamps and reads thread replies."`; `exposesSensitiveData`: `true`; `label`: `"Use Slack threads"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}, \{ `kind`: `"workplaceThread"`; `label`: `"Workplace Thread"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"media"`; `description`: `"Runs Slack's external upload URL and complete-upload sequence for SDK-user-selected file sharing."`; `exposesSensitiveData`: `true`; `label`: `"Upload Slack files"`; `providerObjects`: \[\{ `kind`: `"workplaceFile"`; `label`: `"Workplace File"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Slack conversation history or thread replies for SDK-user-selected channels and windows."`; `exposesSensitiveData`: `true`; `label`: `"Read Slack conversation history"`; `providerObjects`: \[\{ `kind`: `"workplaceThread"`; `label`: `"Workplace Thread"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Slack messages through chat.update when SDK-user policy permits mutation."`; `exposesSensitiveData`: `true`; `label`: `"Update Slack messages"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"slack.request-signature"`; `description`: `"Validates Slack X-Slack-Signature and X-Slack-Request-Timestamp values."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Slack request signatures"`; `providerObjects`: \[\{ `kind`: `"slackSignedRequest"`; `label`: `"Slack Signed Request"`; \}\]; `requiresCredential`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"workplace"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Slack Web API package"`; `url`: `"https://www.npmjs.com/package/@slack/web-api"`; \}, \{ `label`: `"Slack Web API methods"`; `url`: `"https://docs.slack.dev/reference/methods/"`; \}, \{ `label`: `"Slack chat.postMessage"`; `url`: `"https://docs.slack.dev/reference/methods/chat.postMessage/"`; \}, \{ `label`: `"Slack chat.update"`; `url`: `"https://docs.slack.dev/reference/methods/chat.update/"`; \}, \{ `label`: `"Slack conversations.replies"`; `url`: `"https://docs.slack.dev/reference/methods/conversations.replies/"`; \}, \{ `label`: `"Slack files.getUploadURLExternal"`; `url`: `"https://docs.slack.dev/reference/methods/files.getUploadURLExternal/"`; \}, \{ `label`: `"Slack external file upload flow"`; `url`: `"https://docs.slack.dev/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay/"`; \}, \{ `label`: `"Slack Events API"`; `url`: `"https://docs.slack.dev/apis/events-api/"`; \}, \{ `label`: `"Slack request verification"`; `url`: `"https://docs.slack.dev/authentication/verifying-requests-from-slack/"`; \}, \{ `label`: `"Slack Web API rate limits"`; `url`: `"https://docs.slack.dev/apis/web-api/rate-limits"`; \}\]; `notes`: \[`"Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package."`, `"Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness."`, `"This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage."`, `"Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Slack Web API package"`; `url`: `"https://www.npmjs.com/package/@slack/web-api"`; \}, \{ `label`: `"Slack Web API methods"`; `url`: `"https://docs.slack.dev/reference/methods/"`; \}, \{ `label`: `"Slack chat.postMessage"`; `url`: `"https://docs.slack.dev/reference/methods/chat.postMessage/"`; \}, \{ `label`: `"Slack chat.update"`; `url`: `"https://docs.slack.dev/reference/methods/chat.update/"`; \}, \{ `label`: `"Slack conversations.replies"`; `url`: `"https://docs.slack.dev/reference/methods/conversations.replies/"`; \}, \{ `label`: `"Slack files.getUploadURLExternal"`; `url`: `"https://docs.slack.dev/reference/methods/files.getUploadURLExternal/"`; \}, \{ `label`: `"Slack external file upload flow"`; `url`: `"https://docs.slack.dev/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay/"`; \}, \{ `label`: `"Slack Events API"`; `url`: `"https://docs.slack.dev/apis/events-api/"`; \}, \{ `label`: `"Slack request verification"`; `url`: `"https://docs.slack.dev/authentication/verifying-requests-from-slack/"`; \}, \{ `label`: `"Slack Web API rate limits"`; `url`: `"https://docs.slack.dev/apis/web-api/rate-limits"`; \}\] |
| `coverage.notes` | \[`"Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package."`, `"Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness."`, `"This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage."`, `"Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"Server-side bot token used by @slack/web-api for Web API calls."`; `id`: `"slack-bot-token"`; `label`: `"Slack bot token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"chat:write"`, `"chat:write.public"`, `"channels:history"`, `"groups:history"`, `"im:history"`, `"mpim:history"`, `"files:write"`\]; \}, \{ `description`: `"Server-side signing secret used to validate Slack Events API and interactivity requests."`; `id`: `"slack-signing-secret"`; `label`: `"Slack signing secret"`; `required`: `true`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"workplace.slack"` |
| <a id="property-limitations"></a> `limitations` | \[`"Available Slack operations depend on the SDK user's app scopes, workspace policy, channel membership, Enterprise Grid policy, and user targets for ephemeral messages."`, `"Slack rate limits vary by method, workspace, Marketplace approval, commercial distribution, and install date; SDK users own pagination, Retry-After handling, retry, and backoff policy."`, `"Customer visibility, agent-assist routing, approval, retention, redaction, and escalation behavior remain SDK-user configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `authReadiness`: `"sdk-owned-read"`; `chatMessages`: `"sdk-owned-post-update"`; `ephemeralMessages`: `"sdk-owned-post"`; `eventsInteractivity`: `"typed-parse-verify"`; `externalFileUpload`: `"sdk-owned-upload"`; `incomingWebhooks`: `"not-covered"`; `oauth`: `"not-covered"`; `socketMode`: `"not-covered"`; `threadReplies`: `"sdk-owned-read"`; \}; `providerClient`: \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"@slack/web-api"`; `versionRange`: `"^7.17.0"`; \}; \} |
| `metadata.channelCoverage` | \{ `authReadiness`: `"sdk-owned-read"`; `chatMessages`: `"sdk-owned-post-update"`; `ephemeralMessages`: `"sdk-owned-post"`; `eventsInteractivity`: `"typed-parse-verify"`; `externalFileUpload`: `"sdk-owned-upload"`; `incomingWebhooks`: `"not-covered"`; `oauth`: `"not-covered"`; `socketMode`: `"not-covered"`; `threadReplies`: `"sdk-owned-read"`; \} |
| `metadata.channelCoverage.authReadiness` | `"sdk-owned-read"` |
| `metadata.channelCoverage.chatMessages` | `"sdk-owned-post-update"` |
| `metadata.channelCoverage.ephemeralMessages` | `"sdk-owned-post"` |
| `metadata.channelCoverage.eventsInteractivity` | `"typed-parse-verify"` |
| `metadata.channelCoverage.externalFileUpload` | `"sdk-owned-upload"` |
| `metadata.channelCoverage.incomingWebhooks` | `"not-covered"` |
| `metadata.channelCoverage.oauth` | `"not-covered"` |
| `metadata.channelCoverage.socketMode` | `"not-covered"` |
| `metadata.channelCoverage.threadReplies` | `"sdk-owned-read"` |
| `metadata.providerClient` | \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"@slack/web-api"`; `versionRange`: `"^7.17.0"`; \} |
| `metadata.providerClient.importPolicy` | `"runtime-entrypoint-only"` |
| `metadata.providerClient.package` | `"@slack/web-api"` |
| `metadata.providerClient.versionRange` | `"^7.17.0"` |
| <a id="property-name"></a> `name` | `"Slack"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"workplace.message.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"ParseSlackSignedRequestInput"`; `outputSchemaName`: `"SlackSignedRequest"`; `providerObject`: `"workplaceMessage"`; `requiresCredential`: `true`; \}, \{ `alias`: `"workplace.thread.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackConversationsRepliesInput"`; `outputSchemaName`: `"SlackConversationsRepliesResponse"`; `providerObject`: `"workplaceThread"`; `providerOperation`: `"conversations.replies"`; `requiresCredential`: `true`; \}, \{ `alias`: `"workplace.message.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `inputSchemaName`: `"SlackPostMessageInput"`; `outputSchemaName`: `"SlackPostMessageResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.postMessage"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.reply"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `inputSchemaName`: `"SlackPostMessageInput"`; `outputSchemaName`: `"SlackPostMessageResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.postMessage"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackUpdateMessageInput"`; `outputSchemaName`: `"SlackUpdateMessageResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.update"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.file.upload"`; `capability`: `"media"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackUploadExternalFileInput"`; `outputSchemaName`: `"SlackCompleteUploadExternalResponse"`; `providerObject`: `"workplaceFile"`; `providerOperation`: `"files.getUploadURLExternal/files.completeUploadExternal"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.notification.send"`; `capability`: `"notify"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackPostEphemeralInput"`; `outputSchemaName`: `"SlackPostEphemeralResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.postEphemeral"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"slack.request-signature"`; `capability`: `"slack.request-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"ValidateSlackRequestSignatureInput"`; `outputSchemaName`: `"WebhookVerificationResult"`; `providerObject`: `"slackSignedRequest"`; `requiresCredential`: `true`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-workplace-slack"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Slack messages, channel identifiers, user identifiers, event payloads, interaction payloads, files, and workspace metadata can contain internal support context and customer data."`, `"Slack bot tokens and signing secrets stay server-side and are represented in Studio only as credential readiness."`\] |
| <a id="property-provider"></a> `provider` | `"slack"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### slackWorkplaceOperationAliases

```ts
const slackWorkplaceOperationAliases: readonly ["workplace.message.receive", "workplace.thread.read", "workplace.message.send", "workplace.message.reply", "workplace.message.update", "workplace.file.upload", "workplace.notification.send", "slack.request-signature"];
```

***

### slackWorkplaceProviderManifest

```ts
const slackWorkplaceProviderManifest: {
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
     audiences: ["internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Slack Events API and interactivity payloads for SDK-user-owned support flows.";
     exposesSensitiveData: true;
     label: "Receive Slack events";
     providerObjects: [{
        kind: "slackEvent";
        label: "Slack Event";
      }, {
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "send";
     description: "Posts channel-visible support messages through @slack/web-api chat.postMessage.";
     exposesSensitiveData: true;
     label: "Post Slack messages";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "notify";
     description: "Posts Slack ephemeral messages for internal agent-assist workflows when Slack provides a target user.";
     exposesSensitiveData: true;
     label: "Post Slack agent-assist notifications";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "thread";
     description: "Associates messages with Slack thread timestamps and reads thread replies.";
     exposesSensitiveData: true;
     label: "Use Slack threads";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
      }, {
        kind: "workplaceThread";
        label: "Workplace Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "media";
     description: "Runs Slack's external upload URL and complete-upload sequence for SDK-user-selected file sharing.";
     exposesSensitiveData: true;
     label: "Upload Slack files";
     providerObjects: [{
        kind: "workplaceFile";
        label: "Workplace File";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Slack conversation history or thread replies for SDK-user-selected channels and windows.";
     exposesSensitiveData: true;
     label: "Read Slack conversation history";
     providerObjects: [{
        kind: "workplaceThread";
        label: "Workplace Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Slack messages through chat.update when SDK-user policy permits mutation.";
     exposesSensitiveData: true;
     label: "Update Slack messages";
     providerObjects: [{
        kind: "workplaceMessage";
        label: "Workplace Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "slack.request-signature";
     description: "Validates Slack X-Slack-Signature and X-Slack-Request-Timestamp values.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Slack request signatures";
     providerObjects: [{
        kind: "slackSignedRequest";
        label: "Slack Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "workplace";
  channelAudiences: ["internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Slack Web API package";
        url: "https://www.npmjs.com/package/@slack/web-api";
      }, {
        label: "Slack Web API methods";
        url: "https://docs.slack.dev/reference/methods/";
      }, {
        label: "Slack chat.postMessage";
        url: "https://docs.slack.dev/reference/methods/chat.postMessage/";
      }, {
        label: "Slack chat.update";
        url: "https://docs.slack.dev/reference/methods/chat.update/";
      }, {
        label: "Slack conversations.replies";
        url: "https://docs.slack.dev/reference/methods/conversations.replies/";
      }, {
        label: "Slack files.getUploadURLExternal";
        url: "https://docs.slack.dev/reference/methods/files.getUploadURLExternal/";
      }, {
        label: "Slack external file upload flow";
        url: "https://docs.slack.dev/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay/";
      }, {
        label: "Slack Events API";
        url: "https://docs.slack.dev/apis/events-api/";
      }, {
        label: "Slack request verification";
        url: "https://docs.slack.dev/authentication/verifying-requests-from-slack/";
      }, {
        label: "Slack Web API rate limits";
        url: "https://docs.slack.dev/apis/web-api/rate-limits";
     }];
     notes: ["Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package.", "Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness.", "This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage.", "Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side bot token used by @slack/web-api for Web API calls.";
     id: "slack-bot-token";
     label: "Slack bot token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["chat:write", "chat:write.public", "channels:history", "groups:history", "im:history", "mpim:history", "files:write"];
   }, {
     description: "Server-side signing secret used to validate Slack Events API and interactivity requests.";
     id: "slack-signing-secret";
     label: "Slack signing secret";
     required: true;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "workplace.slack";
  limitations: ["Available Slack operations depend on the SDK user's app scopes, workspace policy, channel membership, Enterprise Grid policy, and user targets for ephemeral messages.", "Slack rate limits vary by method, workspace, Marketplace approval, commercial distribution, and install date; SDK users own pagination, Retry-After handling, retry, and backoff policy.", "Customer visibility, agent-assist routing, approval, retention, redaction, and escalation behavior remain SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        authReadiness: "sdk-owned-read";
        chatMessages: "sdk-owned-post-update";
        ephemeralMessages: "sdk-owned-post";
        eventsInteractivity: "typed-parse-verify";
        externalFileUpload: "sdk-owned-upload";
        incomingWebhooks: "not-covered";
        oauth: "not-covered";
        socketMode: "not-covered";
        threadReplies: "sdk-owned-read";
     };
     providerClient: {
        importPolicy: "runtime-entrypoint-only";
        package: "@slack/web-api";
        versionRange: "^7.17.0";
     };
  };
  name: "Slack";
  operations: [{
     alias: "workplace.message.receive";
     capability: "receive";
     exposesSensitiveData: true;
     inputSchemaName: "ParseSlackSignedRequestInput";
     outputSchemaName: "SlackSignedRequest";
     providerObject: "workplaceMessage";
     requiresCredential: true;
   }, {
     alias: "workplace.thread.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     inputSchemaName: "SlackConversationsRepliesInput";
     outputSchemaName: "SlackConversationsRepliesResponse";
     providerObject: "workplaceThread";
     providerOperation: "conversations.replies";
     requiresCredential: true;
   }, {
     alias: "workplace.message.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     inputSchemaName: "SlackPostMessageInput";
     outputSchemaName: "SlackPostMessageResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.postMessage";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.reply";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     inputSchemaName: "SlackPostMessageInput";
     outputSchemaName: "SlackPostMessageResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.postMessage";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     inputSchemaName: "SlackUpdateMessageInput";
     outputSchemaName: "SlackUpdateMessageResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.update";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.file.upload";
     capability: "media";
     exposesSensitiveData: true;
     inputSchemaName: "SlackUploadExternalFileInput";
     outputSchemaName: "SlackCompleteUploadExternalResponse";
     providerObject: "workplaceFile";
     providerOperation: "files.getUploadURLExternal/files.completeUploadExternal";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "workplace.notification.send";
     capability: "notify";
     exposesSensitiveData: true;
     inputSchemaName: "SlackPostEphemeralInput";
     outputSchemaName: "SlackPostEphemeralResponse";
     providerObject: "workplaceMessage";
     providerOperation: "chat.postEphemeral";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "slack.request-signature";
     capability: "slack.request-signature";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "ValidateSlackRequestSignatureInput";
     outputSchemaName: "WebhookVerificationResult";
     providerObject: "slackSignedRequest";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-workplace-slack";
  privacyNotes: ["Slack messages, channel identifiers, user identifiers, event payloads, interaction payloads, files, and workspace metadata can contain internal support context and customer data.", "Slack bot tokens and signing secrets stay server-side and are represented in Studio only as credential readiness."];
  provider: "slack";
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
| `capabilities` | \[\{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Slack Events API and interactivity payloads for SDK-user-owned support flows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Slack events"`; `providerObjects`: \[\{ `kind`: `"slackEvent"`; `label`: `"Slack Event"`; \}, \{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Posts channel-visible support messages through @slack/web-api chat.postMessage."`; `exposesSensitiveData`: `true`; `label`: `"Post Slack messages"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"notify"`; `description`: `"Posts Slack ephemeral messages for internal agent-assist workflows when Slack provides a target user."`; `exposesSensitiveData`: `true`; `label`: `"Post Slack agent-assist notifications"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"thread"`; `description`: `"Associates messages with Slack thread timestamps and reads thread replies."`; `exposesSensitiveData`: `true`; `label`: `"Use Slack threads"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}, \{ `kind`: `"workplaceThread"`; `label`: `"Workplace Thread"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"media"`; `description`: `"Runs Slack's external upload URL and complete-upload sequence for SDK-user-selected file sharing."`; `exposesSensitiveData`: `true`; `label`: `"Upload Slack files"`; `providerObjects`: \[\{ `kind`: `"workplaceFile"`; `label`: `"Workplace File"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Slack conversation history or thread replies for SDK-user-selected channels and windows."`; `exposesSensitiveData`: `true`; `label`: `"Read Slack conversation history"`; `providerObjects`: \[\{ `kind`: `"workplaceThread"`; `label`: `"Workplace Thread"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Slack messages through chat.update when SDK-user policy permits mutation."`; `exposesSensitiveData`: `true`; `label`: `"Update Slack messages"`; `providerObjects`: \[\{ `kind`: `"workplaceMessage"`; `label`: `"Workplace Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"slack.request-signature"`; `description`: `"Validates Slack X-Slack-Signature and X-Slack-Request-Timestamp values."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Slack request signatures"`; `providerObjects`: \[\{ `kind`: `"slackSignedRequest"`; `label`: `"Slack Signed Request"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"workplace"` |
| `channelAudiences` | \[`"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Slack Web API package"`; `url`: `"https://www.npmjs.com/package/@slack/web-api"`; \}, \{ `label`: `"Slack Web API methods"`; `url`: `"https://docs.slack.dev/reference/methods/"`; \}, \{ `label`: `"Slack chat.postMessage"`; `url`: `"https://docs.slack.dev/reference/methods/chat.postMessage/"`; \}, \{ `label`: `"Slack chat.update"`; `url`: `"https://docs.slack.dev/reference/methods/chat.update/"`; \}, \{ `label`: `"Slack conversations.replies"`; `url`: `"https://docs.slack.dev/reference/methods/conversations.replies/"`; \}, \{ `label`: `"Slack files.getUploadURLExternal"`; `url`: `"https://docs.slack.dev/reference/methods/files.getUploadURLExternal/"`; \}, \{ `label`: `"Slack external file upload flow"`; `url`: `"https://docs.slack.dev/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay/"`; \}, \{ `label`: `"Slack Events API"`; `url`: `"https://docs.slack.dev/apis/events-api/"`; \}, \{ `label`: `"Slack request verification"`; `url`: `"https://docs.slack.dev/authentication/verifying-requests-from-slack/"`; \}, \{ `label`: `"Slack Web API rate limits"`; `url`: `"https://docs.slack.dev/apis/web-api/rate-limits"`; \}\]; `notes`: \[`"Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package."`, `"Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness."`, `"This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage."`, `"Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Slack Web API package"`; `url`: `"https://www.npmjs.com/package/@slack/web-api"`; \}, \{ `label`: `"Slack Web API methods"`; `url`: `"https://docs.slack.dev/reference/methods/"`; \}, \{ `label`: `"Slack chat.postMessage"`; `url`: `"https://docs.slack.dev/reference/methods/chat.postMessage/"`; \}, \{ `label`: `"Slack chat.update"`; `url`: `"https://docs.slack.dev/reference/methods/chat.update/"`; \}, \{ `label`: `"Slack conversations.replies"`; `url`: `"https://docs.slack.dev/reference/methods/conversations.replies/"`; \}, \{ `label`: `"Slack files.getUploadURLExternal"`; `url`: `"https://docs.slack.dev/reference/methods/files.getUploadURLExternal/"`; \}, \{ `label`: `"Slack external file upload flow"`; `url`: `"https://docs.slack.dev/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay/"`; \}, \{ `label`: `"Slack Events API"`; `url`: `"https://docs.slack.dev/apis/events-api/"`; \}, \{ `label`: `"Slack request verification"`; `url`: `"https://docs.slack.dev/authentication/verifying-requests-from-slack/"`; \}, \{ `label`: `"Slack Web API rate limits"`; `url`: `"https://docs.slack.dev/apis/web-api/rate-limits"`; \}\] |
| `coverage.notes` | \[`"Coverage is a Cognidesk support workflow adapter backed by Slack's official @slack/web-api package."`, `"Typed operations cover Slack Events API/interactivity request parsing, signed request validation, chat.postMessage, chat.postEphemeral, chat.update, conversations.replies, the external file upload sequence, and auth.test readiness."`, `"This package intentionally does not clone Slack's archived generated Web API spec and does not claim full Slack platform coverage."`, `"Slack Socket Mode, OAuth installation flows, incoming webhook delivery, SCIM, Audit Logs, Legal Holds, workflow runtime behavior, and broad admin APIs are separate extension surfaces or future packages."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side bot token used by @slack/web-api for Web API calls."`; `id`: `"slack-bot-token"`; `label`: `"Slack bot token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"chat:write"`, `"chat:write.public"`, `"channels:history"`, `"groups:history"`, `"im:history"`, `"mpim:history"`, `"files:write"`\]; \}, \{ `description`: `"Server-side signing secret used to validate Slack Events API and interactivity requests."`; `id`: `"slack-signing-secret"`; `label`: `"Slack signing secret"`; `required`: `true`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"workplace.slack"` |
| `limitations` | \[`"Available Slack operations depend on the SDK user's app scopes, workspace policy, channel membership, Enterprise Grid policy, and user targets for ephemeral messages."`, `"Slack rate limits vary by method, workspace, Marketplace approval, commercial distribution, and install date; SDK users own pagination, Retry-After handling, retry, and backoff policy."`, `"Customer visibility, agent-assist routing, approval, retention, redaction, and escalation behavior remain SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `authReadiness`: `"sdk-owned-read"`; `chatMessages`: `"sdk-owned-post-update"`; `ephemeralMessages`: `"sdk-owned-post"`; `eventsInteractivity`: `"typed-parse-verify"`; `externalFileUpload`: `"sdk-owned-upload"`; `incomingWebhooks`: `"not-covered"`; `oauth`: `"not-covered"`; `socketMode`: `"not-covered"`; `threadReplies`: `"sdk-owned-read"`; \}; `providerClient`: \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"@slack/web-api"`; `versionRange`: `"^7.17.0"`; \}; \} |
| `metadata.channelCoverage` | \{ `authReadiness`: `"sdk-owned-read"`; `chatMessages`: `"sdk-owned-post-update"`; `ephemeralMessages`: `"sdk-owned-post"`; `eventsInteractivity`: `"typed-parse-verify"`; `externalFileUpload`: `"sdk-owned-upload"`; `incomingWebhooks`: `"not-covered"`; `oauth`: `"not-covered"`; `socketMode`: `"not-covered"`; `threadReplies`: `"sdk-owned-read"`; \} |
| `metadata.channelCoverage.authReadiness` | `"sdk-owned-read"` |
| `metadata.channelCoverage.chatMessages` | `"sdk-owned-post-update"` |
| `metadata.channelCoverage.ephemeralMessages` | `"sdk-owned-post"` |
| `metadata.channelCoverage.eventsInteractivity` | `"typed-parse-verify"` |
| `metadata.channelCoverage.externalFileUpload` | `"sdk-owned-upload"` |
| `metadata.channelCoverage.incomingWebhooks` | `"not-covered"` |
| `metadata.channelCoverage.oauth` | `"not-covered"` |
| `metadata.channelCoverage.socketMode` | `"not-covered"` |
| `metadata.channelCoverage.threadReplies` | `"sdk-owned-read"` |
| `metadata.providerClient` | \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"@slack/web-api"`; `versionRange`: `"^7.17.0"`; \} |
| `metadata.providerClient.importPolicy` | `"runtime-entrypoint-only"` |
| `metadata.providerClient.package` | `"@slack/web-api"` |
| `metadata.providerClient.versionRange` | `"^7.17.0"` |
| `name` | `"Slack"` |
| `operations` | \[\{ `alias`: `"workplace.message.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"ParseSlackSignedRequestInput"`; `outputSchemaName`: `"SlackSignedRequest"`; `providerObject`: `"workplaceMessage"`; `requiresCredential`: `true`; \}, \{ `alias`: `"workplace.thread.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackConversationsRepliesInput"`; `outputSchemaName`: `"SlackConversationsRepliesResponse"`; `providerObject`: `"workplaceThread"`; `providerOperation`: `"conversations.replies"`; `requiresCredential`: `true`; \}, \{ `alias`: `"workplace.message.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `inputSchemaName`: `"SlackPostMessageInput"`; `outputSchemaName`: `"SlackPostMessageResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.postMessage"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.reply"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `inputSchemaName`: `"SlackPostMessageInput"`; `outputSchemaName`: `"SlackPostMessageResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.postMessage"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.message.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackUpdateMessageInput"`; `outputSchemaName`: `"SlackUpdateMessageResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.update"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.file.upload"`; `capability`: `"media"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackUploadExternalFileInput"`; `outputSchemaName`: `"SlackCompleteUploadExternalResponse"`; `providerObject`: `"workplaceFile"`; `providerOperation`: `"files.getUploadURLExternal/files.completeUploadExternal"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"workplace.notification.send"`; `capability`: `"notify"`; `exposesSensitiveData`: `true`; `inputSchemaName`: `"SlackPostEphemeralInput"`; `outputSchemaName`: `"SlackPostEphemeralResponse"`; `providerObject`: `"workplaceMessage"`; `providerOperation`: `"chat.postEphemeral"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"slack.request-signature"`; `capability`: `"slack.request-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"ValidateSlackRequestSignatureInput"`; `outputSchemaName`: `"WebhookVerificationResult"`; `providerObject`: `"slackSignedRequest"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-workplace-slack"` |
| `privacyNotes` | \[`"Slack messages, channel identifiers, user identifiers, event payloads, interaction payloads, files, and workspace metadata can contain internal support context and customer data."`, `"Slack bot tokens and signing secrets stay server-side and are represented in Studio only as credential readiness."`\] |
| `provider` | `"slack"` |
| `trustLevel` | `"official"` |
