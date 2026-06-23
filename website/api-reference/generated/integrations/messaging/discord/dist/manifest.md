# integrations/messaging/discord/dist/manifest

## Variables

### discordMessagingManifestInput

```ts
const discordMessagingManifestInput: {
  capabilities: [{
     audiences: ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validates Ed25519-signed Discord outgoing-webhook interaction requests.";
     exposesSensitiveData: true;
     label: "Receive Discord interactions";
     providerObjects: [{
        kind: "discordInteraction";
        label: "Discord Interaction";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends bot-token-authenticated Discord channel messages through discord.js REST helpers.";
     exposesSensitiveData: true;
     label: "Send Discord channel messages";
     providerObjects: [{
        kind: "discordMessage";
        label: "Discord Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "thread";
     changesWorkflow: true;
     description: "Creates Discord text-channel threads or forum/media channel posts selected by SDK configuration.";
     exposesSensitiveData: true;
     label: "Create Discord support threads";
     providerObjects: [{
        kind: "discordThread";
        label: "Discord Thread";
      }, {
        kind: "discordForumPost";
        label: "Discord Forum Post";
      }, {
        kind: "discordMediaPost";
        label: "Discord Media Channel Post";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "read-provider-object";
     description: "Reads Discord bot, application, guild, channel, and recent channel message records where bot permissions allow access.";
     exposesSensitiveData: true;
     label: "Read Discord channels and messages";
     providerObjects: [{
        kind: "discordBot";
        label: "Discord Bot";
      }, {
        kind: "discordApplication";
        label: "Discord Application";
      }, {
        kind: "discordGuild";
        label: "Discord Guild";
      }, {
        kind: "discordChannel";
        label: "Discord Channel";
      }, {
        kind: "discordMessage";
        label: "Discord Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "notify";
     description: "Uses SDK-user-selected Discord channels, threads, or Discord webhook URLs for moderator notification and messaging escalation workflows.";
     exposesSensitiveData: true;
     label: "Notify Discord moderators";
     providerObjects: [{
        kind: "discordMessage";
        label: "Discord Message";
      }, {
        kind: "discordWebhookMessage";
        label: "Discord Webhook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "discord.interaction-signature";
     description: "Validates X-Signature-Ed25519 and X-Signature-Timestamp headers with the SDK user's Discord application public key.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Discord interaction signatures";
     providerObjects: [{
        kind: "discordSignedInteraction";
        label: "Discord Signed Interaction";
     }];
     requiresCredential: true;
  }];
  category: "messaging";
  channelAudiences: ["customer-facing", "mixed"];
  coverage: {
     evidence: [{
        label: "discord.js package";
        url: "https://www.npmjs.com/package/discord.js";
      }, {
        label: "Discord API reference";
        url: "https://docs.discord.com/developers/reference";
      }, {
        label: "Discord message resource";
        url: "https://docs.discord.com/developers/resources/message";
      }, {
        label: "Discord channel/thread endpoints";
        url: "https://docs.discord.com/developers/resources/channel";
      }, {
        label: "Discord threads topic";
        url: "https://docs.discord.com/developers/topics/threads";
      }, {
        label: "Discord receiving and responding to interactions";
        url: "https://docs.discord.com/developers/interactions/receiving-and-responding";
      }, {
        label: "Discord Gateway events";
        url: "https://docs.discord.com/developers/events/gateway";
      }, {
        label: "Discord Voice connections";
        url: "https://docs.discord.com/developers/topics/voice-connections";
      }, {
        label: "Discord Webhook Events";
        url: "https://docs.discord.com/developers/events/webhook-events";
      }, {
        label: "Discord rate limits";
        url: "https://docs.discord.com/developers/topics/rate-limits";
     }];
     notes: ["Coverage is a Cognidesk support workflow adapter backed by discord.js, selected discord.js REST helpers, and an optional discord.js Gateway service for live support-thread handoff.", "Typed operations cover channel messages, text/forum/media-channel threads, webhook execution, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification.", "The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store.", "This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage.", "Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side Discord bot token used by discord.js REST helpers for channel, guild, bot, and application calls.";
     id: "discord-bot-token";
     label: "Discord bot token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["bot", "applications.commands"];
   }, {
     description: "SDK-user-owned Discord application ID used to identify commands, interactions, and installation readiness.";
     id: "discord-application-id";
     label: "Discord application ID";
     required: true;
   }, {
     description: "Ed25519 public key from the Discord Developer Portal for validating interaction endpoint requests.";
     id: "discord-public-key";
     label: "Discord interaction public key";
     required: true;
   }, {
     description: "Guild/server ID selected by SDK configuration for messaging support routing and live checks.";
     id: "discord-guild-id";
     label: "Discord guild ID";
     required: false;
   }, {
     description: "Channel, forum, or media channel ID selected by SDK configuration for message and thread operations.";
     id: "discord-channel-id";
     label: "Discord channel or forum ID";
     required: false;
   }, {
     description: "Optional SDK-user-owned webhook URL for Discord webhook delivery or webhook-based outbound messages.";
     id: "discord-webhook-url";
     label: "Discord webhook URL";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "messaging.discord";
  limitations: ["Available Discord operations depend on the SDK user's Discord application, bot installation, OAuth scopes, role permissions, channel permissions, forum settings, and rate limits.", "The optional Gateway service requires Discord Gateway access with Message Content Intent enabled when message text is mirrored into Cognidesk.", "Discord Webhook Events subscriptions, slash command registration, broader REST administration, voice, and local RPC/IPC remain outside this package.", "Discord interaction endpoint requests must fail closed when signature verification is required but the public key or signature headers are missing or invalid."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiBaseUrl: "https://discord.com/api";
     channelCoverage: {
        botApplicationGuildChannelReads: "sdk-owned-rest-read";
        channelMessages: "sdk-owned-rest-send-list";
        forumPosts: "sdk-owned-rest-create";
        gatewayEvents: "sdk-owned-discord-js-gateway-service";
        interactionsEndpoint: "typed-verify-parse";
        threads: "sdk-owned-rest-create";
        voiceGatewayAndRpc: "not-covered";
        webhookEventsSubscriptions: "not-covered";
        webhookExecution: "typed-fetch-send";
     };
     defaultApiVersion: "10";
     gatewayService: {
        messageIngress: "discord-js-messageCreate";
        runtimeMirror: "cognidesk-runtime-event-list";
        sourceId: "discord-gateway";
        store: "bundled-libsql-sqlite-binding-store";
     };
     integrationEntryPoints: {
        manifest: "@cognidesk/integration-messaging-discord/manifest";
        runtime: "@cognidesk/integration-messaging-discord/runtime";
     };
     integrationName: "Discord Integration";
     integrationPackageName: "@cognidesk/integration-messaging-discord";
     interactionSignatureHeaders: readonly ["x-signature-ed25519", "x-signature-timestamp"];
     providerClient: {
        importPolicy: "runtime-entrypoint-only";
        package: "discord.js";
        versionRange: "^14.26.4";
     };
  };
  name: "Discord Messaging Support";
  operations: [{
     alias: "discord.interaction.receive";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "ParseDiscordInteractionRequestInput";
     outputSchemaName: "DiscordParsedInteractionRequest";
     providerObject: "discordInteraction";
     requiresCredential: true;
   }, {
     alias: "discord.message.send";
     capability: "send";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     inputSchemaName: "DiscordSendChannelMessageInput";
     outputSchemaName: "DiscordMessageResource";
     providerObject: "discordMessage";
     providerOperation: "POST /channels/{channel.id}/messages";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "discord.thread.create";
     capability: "thread";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordCreateThreadInput";
     outputSchemaName: "DiscordChannelResource";
     providerObject: "discordThread";
     providerOperation: "POST /channels/{channel.id}/threads";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "discord.forum-post.create";
     capability: "thread";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordCreateForumPostInput";
     outputSchemaName: "DiscordChannelResource";
     providerObject: "discordForumPost";
     providerOperation: "POST /channels/{channel.id}/threads";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "discord.webhook.execute";
     capability: "notify";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordExecuteWebhookInput";
     outputSchemaName: "DiscordMessageResource";
     providerObject: "discordWebhookMessage";
     providerOperation: "POST /webhooks/{webhook.id}/{webhook.token}";
     requiresCredential: false;
     sideEffect: true;
   }, {
     alias: "discord.bot.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     outputSchemaName: "DiscordUserResource";
     providerObject: "discordBot";
     providerOperation: "GET /users/@me";
     requiresCredential: true;
   }, {
     alias: "discord.application.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     outputSchemaName: "DiscordApplicationResource";
     providerObject: "discordApplication";
     providerOperation: "GET /oauth2/applications/@me";
     requiresCredential: true;
   }, {
     alias: "discord.guild.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordGetGuildInput";
     outputSchemaName: "DiscordGuildResource";
     providerObject: "discordGuild";
     providerOperation: "GET /guilds/{guild.id}";
     requiresCredential: true;
   }, {
     alias: "discord.channel.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordGetChannelInput";
     outputSchemaName: "DiscordChannelResource";
     providerObject: "discordChannel";
     providerOperation: "GET /channels/{channel.id}";
     requiresCredential: true;
   }, {
     alias: "discord.channel-messages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordListMessagesInput";
     outputSchemaName: "DiscordMessageResource[]";
     providerObject: "discordMessage";
     providerOperation: "GET /channels/{channel.id}/messages";
     requiresCredential: true;
   }, {
     alias: "discord.interaction-signature.verify";
     capability: "discord.interaction-signature";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "ValidateDiscordInteractionSignatureInput";
     outputSchemaName: "boolean";
     providerObject: "discordSignedInteraction";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-messaging-discord";
  privacyNotes: ["Discord messages, user IDs, guild IDs, channel IDs, thread IDs, usernames, attachments, embeds, interaction payloads, and mirrored runtime transcripts can contain customer and moderator data.", "Discord bot tokens, public keys, application IDs, guild/channel routing, webhook URLs, consent, moderation, retention, and transcript policy stay SDK-user-owned configuration."];
  provider: "discord";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates Ed25519-signed Discord outgoing-webhook interaction requests."`; `exposesSensitiveData`: `true`; `label`: `"Receive Discord interactions"`; `providerObjects`: \[\{ `kind`: `"discordInteraction"`; `label`: `"Discord Interaction"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends bot-token-authenticated Discord channel messages through discord.js REST helpers."`; `exposesSensitiveData`: `true`; `label`: `"Send Discord channel messages"`; `providerObjects`: \[\{ `kind`: `"discordMessage"`; `label`: `"Discord Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"thread"`; `changesWorkflow`: `true`; `description`: `"Creates Discord text-channel threads or forum/media channel posts selected by SDK configuration."`; `exposesSensitiveData`: `true`; `label`: `"Create Discord support threads"`; `providerObjects`: \[\{ `kind`: `"discordThread"`; `label`: `"Discord Thread"`; \}, \{ `kind`: `"discordForumPost"`; `label`: `"Discord Forum Post"`; \}, \{ `kind`: `"discordMediaPost"`; `label`: `"Discord Media Channel Post"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Discord bot, application, guild, channel, and recent channel message records where bot permissions allow access."`; `exposesSensitiveData`: `true`; `label`: `"Read Discord channels and messages"`; `providerObjects`: \[\{ `kind`: `"discordBot"`; `label`: `"Discord Bot"`; \}, \{ `kind`: `"discordApplication"`; `label`: `"Discord Application"`; \}, \{ `kind`: `"discordGuild"`; `label`: `"Discord Guild"`; \}, \{ `kind`: `"discordChannel"`; `label`: `"Discord Channel"`; \}, \{ `kind`: `"discordMessage"`; `label`: `"Discord Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"notify"`; `description`: `"Uses SDK-user-selected Discord channels, threads, or Discord webhook URLs for moderator notification and messaging escalation workflows."`; `exposesSensitiveData`: `true`; `label`: `"Notify Discord moderators"`; `providerObjects`: \[\{ `kind`: `"discordMessage"`; `label`: `"Discord Message"`; \}, \{ `kind`: `"discordWebhookMessage"`; `label`: `"Discord Webhook Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"discord.interaction-signature"`; `description`: `"Validates X-Signature-Ed25519 and X-Signature-Timestamp headers with the SDK user's Discord application public key."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Discord interaction signatures"`; `providerObjects`: \[\{ `kind`: `"discordSignedInteraction"`; `label`: `"Discord Signed Interaction"`; \}\]; `requiresCredential`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"messaging"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"discord.js package"`; `url`: `"https://www.npmjs.com/package/discord.js"`; \}, \{ `label`: `"Discord API reference"`; `url`: `"https://docs.discord.com/developers/reference"`; \}, \{ `label`: `"Discord message resource"`; `url`: `"https://docs.discord.com/developers/resources/message"`; \}, \{ `label`: `"Discord channel/thread endpoints"`; `url`: `"https://docs.discord.com/developers/resources/channel"`; \}, \{ `label`: `"Discord threads topic"`; `url`: `"https://docs.discord.com/developers/topics/threads"`; \}, \{ `label`: `"Discord receiving and responding to interactions"`; `url`: `"https://docs.discord.com/developers/interactions/receiving-and-responding"`; \}, \{ `label`: `"Discord Gateway events"`; `url`: `"https://docs.discord.com/developers/events/gateway"`; \}, \{ `label`: `"Discord Voice connections"`; `url`: `"https://docs.discord.com/developers/topics/voice-connections"`; \}, \{ `label`: `"Discord Webhook Events"`; `url`: `"https://docs.discord.com/developers/events/webhook-events"`; \}, \{ `label`: `"Discord rate limits"`; `url`: `"https://docs.discord.com/developers/topics/rate-limits"`; \}\]; `notes`: \[`"Coverage is a Cognidesk support workflow adapter backed by discord.js, selected discord.js REST helpers, and an optional discord.js Gateway service for live support-thread handoff."`, `"Typed operations cover channel messages, text/forum/media-channel threads, webhook execution, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification."`, `"The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store."`, `"This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage."`, `"Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"discord.js package"`; `url`: `"https://www.npmjs.com/package/discord.js"`; \}, \{ `label`: `"Discord API reference"`; `url`: `"https://docs.discord.com/developers/reference"`; \}, \{ `label`: `"Discord message resource"`; `url`: `"https://docs.discord.com/developers/resources/message"`; \}, \{ `label`: `"Discord channel/thread endpoints"`; `url`: `"https://docs.discord.com/developers/resources/channel"`; \}, \{ `label`: `"Discord threads topic"`; `url`: `"https://docs.discord.com/developers/topics/threads"`; \}, \{ `label`: `"Discord receiving and responding to interactions"`; `url`: `"https://docs.discord.com/developers/interactions/receiving-and-responding"`; \}, \{ `label`: `"Discord Gateway events"`; `url`: `"https://docs.discord.com/developers/events/gateway"`; \}, \{ `label`: `"Discord Voice connections"`; `url`: `"https://docs.discord.com/developers/topics/voice-connections"`; \}, \{ `label`: `"Discord Webhook Events"`; `url`: `"https://docs.discord.com/developers/events/webhook-events"`; \}, \{ `label`: `"Discord rate limits"`; `url`: `"https://docs.discord.com/developers/topics/rate-limits"`; \}\] |
| `coverage.notes` | \[`"Coverage is a Cognidesk support workflow adapter backed by discord.js, selected discord.js REST helpers, and an optional discord.js Gateway service for live support-thread handoff."`, `"Typed operations cover channel messages, text/forum/media-channel threads, webhook execution, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification."`, `"The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store."`, `"This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage."`, `"Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"Server-side Discord bot token used by discord.js REST helpers for channel, guild, bot, and application calls."`; `id`: `"discord-bot-token"`; `label`: `"Discord bot token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"bot"`, `"applications.commands"`\]; \}, \{ `description`: `"SDK-user-owned Discord application ID used to identify commands, interactions, and installation readiness."`; `id`: `"discord-application-id"`; `label`: `"Discord application ID"`; `required`: `true`; \}, \{ `description`: `"Ed25519 public key from the Discord Developer Portal for validating interaction endpoint requests."`; `id`: `"discord-public-key"`; `label`: `"Discord interaction public key"`; `required`: `true`; \}, \{ `description`: `"Guild/server ID selected by SDK configuration for messaging support routing and live checks."`; `id`: `"discord-guild-id"`; `label`: `"Discord guild ID"`; `required`: `false`; \}, \{ `description`: `"Channel, forum, or media channel ID selected by SDK configuration for message and thread operations."`; `id`: `"discord-channel-id"`; `label`: `"Discord channel or forum ID"`; `required`: `false`; \}, \{ `description`: `"Optional SDK-user-owned webhook URL for Discord webhook delivery or webhook-based outbound messages."`; `id`: `"discord-webhook-url"`; `label`: `"Discord webhook URL"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"messaging.discord"` |
| <a id="property-limitations"></a> `limitations` | \[`"Available Discord operations depend on the SDK user's Discord application, bot installation, OAuth scopes, role permissions, channel permissions, forum settings, and rate limits."`, `"The optional Gateway service requires Discord Gateway access with Message Content Intent enabled when message text is mirrored into Cognidesk."`, `"Discord Webhook Events subscriptions, slash command registration, broader REST administration, voice, and local RPC/IPC remain outside this package."`, `"Discord interaction endpoint requests must fail closed when signature verification is required but the public key or signature headers are missing or invalid."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `apiBaseUrl`: `"https://discord.com/api"`; `channelCoverage`: \{ `botApplicationGuildChannelReads`: `"sdk-owned-rest-read"`; `channelMessages`: `"sdk-owned-rest-send-list"`; `forumPosts`: `"sdk-owned-rest-create"`; `gatewayEvents`: `"sdk-owned-discord-js-gateway-service"`; `interactionsEndpoint`: `"typed-verify-parse"`; `threads`: `"sdk-owned-rest-create"`; `voiceGatewayAndRpc`: `"not-covered"`; `webhookEventsSubscriptions`: `"not-covered"`; `webhookExecution`: `"typed-fetch-send"`; \}; `defaultApiVersion`: `"10"`; `gatewayService`: \{ `messageIngress`: `"discord-js-messageCreate"`; `runtimeMirror`: `"cognidesk-runtime-event-list"`; `sourceId`: `"discord-gateway"`; `store`: `"bundled-libsql-sqlite-binding-store"`; \}; `integrationEntryPoints`: \{ `manifest`: `"@cognidesk/integration-messaging-discord/manifest"`; `runtime`: `"@cognidesk/integration-messaging-discord/runtime"`; \}; `integrationName`: `"Discord Integration"`; `integrationPackageName`: `"@cognidesk/integration-messaging-discord"`; `interactionSignatureHeaders`: readonly \[`"x-signature-ed25519"`, `"x-signature-timestamp"`\]; `providerClient`: \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"discord.js"`; `versionRange`: `"^14.26.4"`; \}; \} |
| `metadata.apiBaseUrl` | `"https://discord.com/api"` |
| `metadata.channelCoverage` | \{ `botApplicationGuildChannelReads`: `"sdk-owned-rest-read"`; `channelMessages`: `"sdk-owned-rest-send-list"`; `forumPosts`: `"sdk-owned-rest-create"`; `gatewayEvents`: `"sdk-owned-discord-js-gateway-service"`; `interactionsEndpoint`: `"typed-verify-parse"`; `threads`: `"sdk-owned-rest-create"`; `voiceGatewayAndRpc`: `"not-covered"`; `webhookEventsSubscriptions`: `"not-covered"`; `webhookExecution`: `"typed-fetch-send"`; \} |
| `metadata.channelCoverage.botApplicationGuildChannelReads` | `"sdk-owned-rest-read"` |
| `metadata.channelCoverage.channelMessages` | `"sdk-owned-rest-send-list"` |
| `metadata.channelCoverage.forumPosts` | `"sdk-owned-rest-create"` |
| `metadata.channelCoverage.gatewayEvents` | `"sdk-owned-discord-js-gateway-service"` |
| `metadata.channelCoverage.interactionsEndpoint` | `"typed-verify-parse"` |
| `metadata.channelCoverage.threads` | `"sdk-owned-rest-create"` |
| `metadata.channelCoverage.voiceGatewayAndRpc` | `"not-covered"` |
| `metadata.channelCoverage.webhookEventsSubscriptions` | `"not-covered"` |
| `metadata.channelCoverage.webhookExecution` | `"typed-fetch-send"` |
| `metadata.defaultApiVersion` | `"10"` |
| `metadata.gatewayService` | \{ `messageIngress`: `"discord-js-messageCreate"`; `runtimeMirror`: `"cognidesk-runtime-event-list"`; `sourceId`: `"discord-gateway"`; `store`: `"bundled-libsql-sqlite-binding-store"`; \} |
| `metadata.gatewayService.messageIngress` | `"discord-js-messageCreate"` |
| `metadata.gatewayService.runtimeMirror` | `"cognidesk-runtime-event-list"` |
| `metadata.gatewayService.sourceId` | `"discord-gateway"` |
| `metadata.gatewayService.store` | `"bundled-libsql-sqlite-binding-store"` |
| `metadata.integrationEntryPoints` | \{ `manifest`: `"@cognidesk/integration-messaging-discord/manifest"`; `runtime`: `"@cognidesk/integration-messaging-discord/runtime"`; \} |
| `metadata.integrationEntryPoints.manifest` | `"@cognidesk/integration-messaging-discord/manifest"` |
| `metadata.integrationEntryPoints.runtime` | `"@cognidesk/integration-messaging-discord/runtime"` |
| `metadata.integrationName` | `"Discord Integration"` |
| `metadata.integrationPackageName` | `"@cognidesk/integration-messaging-discord"` |
| `metadata.interactionSignatureHeaders` | readonly \[`"x-signature-ed25519"`, `"x-signature-timestamp"`\] |
| `metadata.providerClient` | \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"discord.js"`; `versionRange`: `"^14.26.4"`; \} |
| `metadata.providerClient.importPolicy` | `"runtime-entrypoint-only"` |
| `metadata.providerClient.package` | `"discord.js"` |
| `metadata.providerClient.versionRange` | `"^14.26.4"` |
| <a id="property-name"></a> `name` | `"Discord Messaging Support"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"discord.interaction.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"ParseDiscordInteractionRequestInput"`; `outputSchemaName`: `"DiscordParsedInteractionRequest"`; `providerObject`: `"discordInteraction"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.message.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible`: `true`; `inputSchemaName`: `"DiscordSendChannelMessageInput"`; `outputSchemaName`: `"DiscordMessageResource"`; `providerObject`: `"discordMessage"`; `providerOperation`: `"POST /channels/{channel.id}/messages"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.thread.create"`; `capability`: `"thread"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordCreateThreadInput"`; `outputSchemaName`: `"DiscordChannelResource"`; `providerObject`: `"discordThread"`; `providerOperation`: `"POST /channels/{channel.id}/threads"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.forum-post.create"`; `capability`: `"thread"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordCreateForumPostInput"`; `outputSchemaName`: `"DiscordChannelResource"`; `providerObject`: `"discordForumPost"`; `providerOperation`: `"POST /channels/{channel.id}/threads"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.webhook.execute"`; `capability`: `"notify"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordExecuteWebhookInput"`; `outputSchemaName`: `"DiscordMessageResource"`; `providerObject`: `"discordWebhookMessage"`; `providerOperation`: `"POST /webhooks/{webhook.id}/{webhook.token}"`; `requiresCredential`: `false`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.bot.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `outputSchemaName`: `"DiscordUserResource"`; `providerObject`: `"discordBot"`; `providerOperation`: `"GET /users/@me"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.application.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `outputSchemaName`: `"DiscordApplicationResource"`; `providerObject`: `"discordApplication"`; `providerOperation`: `"GET /oauth2/applications/@me"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.guild.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordGetGuildInput"`; `outputSchemaName`: `"DiscordGuildResource"`; `providerObject`: `"discordGuild"`; `providerOperation`: `"GET /guilds/{guild.id}"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.channel.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordGetChannelInput"`; `outputSchemaName`: `"DiscordChannelResource"`; `providerObject`: `"discordChannel"`; `providerOperation`: `"GET /channels/{channel.id}"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.channel-messages.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordListMessagesInput"`; `outputSchemaName`: `"DiscordMessageResource[]"`; `providerObject`: `"discordMessage"`; `providerOperation`: `"GET /channels/{channel.id}/messages"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.interaction-signature.verify"`; `capability`: `"discord.interaction-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"ValidateDiscordInteractionSignatureInput"`; `outputSchemaName`: `"boolean"`; `providerObject`: `"discordSignedInteraction"`; `requiresCredential`: `true`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-messaging-discord"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Discord messages, user IDs, guild IDs, channel IDs, thread IDs, usernames, attachments, embeds, interaction payloads, and mirrored runtime transcripts can contain customer and moderator data."`, `"Discord bot tokens, public keys, application IDs, guild/channel routing, webhook URLs, consent, moderation, retention, and transcript policy stay SDK-user-owned configuration."`\] |
| <a id="property-provider"></a> `provider` | `"discord"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### discordMessagingOperationAliases

```ts
const discordMessagingOperationAliases: readonly ["discord.interaction.receive", "discord.message.send", "discord.thread.create", "discord.forum-post.create", "discord.webhook.execute", "discord.bot.read", "discord.application.read", "discord.guild.read", "discord.channel.read", "discord.channel-messages.list", "discord.interaction-signature.verify"];
```

***

### discordMessagingProviderManifest

```ts
const discordMessagingProviderManifest: {
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
  trustLevel: "community" | "verified" | "official" | "experimental";
} & {
  capabilities: [{
     audiences: ["customer-facing", "mixed"];
     capability: "receive";
     description: "Validates Ed25519-signed Discord outgoing-webhook interaction requests.";
     exposesSensitiveData: true;
     label: "Receive Discord interactions";
     providerObjects: [{
        kind: "discordInteraction";
        label: "Discord Interaction";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends bot-token-authenticated Discord channel messages through discord.js REST helpers.";
     exposesSensitiveData: true;
     label: "Send Discord channel messages";
     providerObjects: [{
        kind: "discordMessage";
        label: "Discord Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "thread";
     changesWorkflow: true;
     description: "Creates Discord text-channel threads or forum/media channel posts selected by SDK configuration.";
     exposesSensitiveData: true;
     label: "Create Discord support threads";
     providerObjects: [{
        kind: "discordThread";
        label: "Discord Thread";
      }, {
        kind: "discordForumPost";
        label: "Discord Forum Post";
      }, {
        kind: "discordMediaPost";
        label: "Discord Media Channel Post";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "read-provider-object";
     description: "Reads Discord bot, application, guild, channel, and recent channel message records where bot permissions allow access.";
     exposesSensitiveData: true;
     label: "Read Discord channels and messages";
     providerObjects: [{
        kind: "discordBot";
        label: "Discord Bot";
      }, {
        kind: "discordApplication";
        label: "Discord Application";
      }, {
        kind: "discordGuild";
        label: "Discord Guild";
      }, {
        kind: "discordChannel";
        label: "Discord Channel";
      }, {
        kind: "discordMessage";
        label: "Discord Message";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "notify";
     description: "Uses SDK-user-selected Discord channels, threads, or Discord webhook URLs for moderator notification and messaging escalation workflows.";
     exposesSensitiveData: true;
     label: "Notify Discord moderators";
     providerObjects: [{
        kind: "discordMessage";
        label: "Discord Message";
      }, {
        kind: "discordWebhookMessage";
        label: "Discord Webhook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["internal-support"];
     capability: "discord.interaction-signature";
     description: "Validates X-Signature-Ed25519 and X-Signature-Timestamp headers with the SDK user's Discord application public key.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Discord interaction signatures";
     providerObjects: [{
        kind: "discordSignedInteraction";
        label: "Discord Signed Interaction";
     }];
     requiresCredential: true;
  }];
  category: "messaging";
  channelAudiences: ["customer-facing", "mixed"];
  coverage: {
     evidence: [{
        label: "discord.js package";
        url: "https://www.npmjs.com/package/discord.js";
      }, {
        label: "Discord API reference";
        url: "https://docs.discord.com/developers/reference";
      }, {
        label: "Discord message resource";
        url: "https://docs.discord.com/developers/resources/message";
      }, {
        label: "Discord channel/thread endpoints";
        url: "https://docs.discord.com/developers/resources/channel";
      }, {
        label: "Discord threads topic";
        url: "https://docs.discord.com/developers/topics/threads";
      }, {
        label: "Discord receiving and responding to interactions";
        url: "https://docs.discord.com/developers/interactions/receiving-and-responding";
      }, {
        label: "Discord Gateway events";
        url: "https://docs.discord.com/developers/events/gateway";
      }, {
        label: "Discord Voice connections";
        url: "https://docs.discord.com/developers/topics/voice-connections";
      }, {
        label: "Discord Webhook Events";
        url: "https://docs.discord.com/developers/events/webhook-events";
      }, {
        label: "Discord rate limits";
        url: "https://docs.discord.com/developers/topics/rate-limits";
     }];
     notes: ["Coverage is a Cognidesk support workflow adapter backed by discord.js, selected discord.js REST helpers, and an optional discord.js Gateway service for live support-thread handoff.", "Typed operations cover channel messages, text/forum/media-channel threads, webhook execution, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification.", "The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store.", "This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage.", "Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Server-side Discord bot token used by discord.js REST helpers for channel, guild, bot, and application calls.";
     id: "discord-bot-token";
     label: "Discord bot token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["bot", "applications.commands"];
   }, {
     description: "SDK-user-owned Discord application ID used to identify commands, interactions, and installation readiness.";
     id: "discord-application-id";
     label: "Discord application ID";
     required: true;
   }, {
     description: "Ed25519 public key from the Discord Developer Portal for validating interaction endpoint requests.";
     id: "discord-public-key";
     label: "Discord interaction public key";
     required: true;
   }, {
     description: "Guild/server ID selected by SDK configuration for messaging support routing and live checks.";
     id: "discord-guild-id";
     label: "Discord guild ID";
     required: false;
   }, {
     description: "Channel, forum, or media channel ID selected by SDK configuration for message and thread operations.";
     id: "discord-channel-id";
     label: "Discord channel or forum ID";
     required: false;
   }, {
     description: "Optional SDK-user-owned webhook URL for Discord webhook delivery or webhook-based outbound messages.";
     id: "discord-webhook-url";
     label: "Discord webhook URL";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "messaging.discord";
  limitations: ["Available Discord operations depend on the SDK user's Discord application, bot installation, OAuth scopes, role permissions, channel permissions, forum settings, and rate limits.", "The optional Gateway service requires Discord Gateway access with Message Content Intent enabled when message text is mirrored into Cognidesk.", "Discord Webhook Events subscriptions, slash command registration, broader REST administration, voice, and local RPC/IPC remain outside this package.", "Discord interaction endpoint requests must fail closed when signature verification is required but the public key or signature headers are missing or invalid."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiBaseUrl: "https://discord.com/api";
     channelCoverage: {
        botApplicationGuildChannelReads: "sdk-owned-rest-read";
        channelMessages: "sdk-owned-rest-send-list";
        forumPosts: "sdk-owned-rest-create";
        gatewayEvents: "sdk-owned-discord-js-gateway-service";
        interactionsEndpoint: "typed-verify-parse";
        threads: "sdk-owned-rest-create";
        voiceGatewayAndRpc: "not-covered";
        webhookEventsSubscriptions: "not-covered";
        webhookExecution: "typed-fetch-send";
     };
     defaultApiVersion: "10";
     gatewayService: {
        messageIngress: "discord-js-messageCreate";
        runtimeMirror: "cognidesk-runtime-event-list";
        sourceId: "discord-gateway";
        store: "bundled-libsql-sqlite-binding-store";
     };
     integrationEntryPoints: {
        manifest: "@cognidesk/integration-messaging-discord/manifest";
        runtime: "@cognidesk/integration-messaging-discord/runtime";
     };
     integrationName: "Discord Integration";
     integrationPackageName: "@cognidesk/integration-messaging-discord";
     interactionSignatureHeaders: readonly ["x-signature-ed25519", "x-signature-timestamp"];
     providerClient: {
        importPolicy: "runtime-entrypoint-only";
        package: "discord.js";
        versionRange: "^14.26.4";
     };
  };
  name: "Discord Messaging Support";
  operations: [{
     alias: "discord.interaction.receive";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "ParseDiscordInteractionRequestInput";
     outputSchemaName: "DiscordParsedInteractionRequest";
     providerObject: "discordInteraction";
     requiresCredential: true;
   }, {
     alias: "discord.message.send";
     capability: "send";
     exposesSensitiveData: true;
     extension: true;
     externallyVisible: true;
     inputSchemaName: "DiscordSendChannelMessageInput";
     outputSchemaName: "DiscordMessageResource";
     providerObject: "discordMessage";
     providerOperation: "POST /channels/{channel.id}/messages";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "discord.thread.create";
     capability: "thread";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordCreateThreadInput";
     outputSchemaName: "DiscordChannelResource";
     providerObject: "discordThread";
     providerOperation: "POST /channels/{channel.id}/threads";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "discord.forum-post.create";
     capability: "thread";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordCreateForumPostInput";
     outputSchemaName: "DiscordChannelResource";
     providerObject: "discordForumPost";
     providerOperation: "POST /channels/{channel.id}/threads";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "discord.webhook.execute";
     capability: "notify";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordExecuteWebhookInput";
     outputSchemaName: "DiscordMessageResource";
     providerObject: "discordWebhookMessage";
     providerOperation: "POST /webhooks/{webhook.id}/{webhook.token}";
     requiresCredential: false;
     sideEffect: true;
   }, {
     alias: "discord.bot.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     outputSchemaName: "DiscordUserResource";
     providerObject: "discordBot";
     providerOperation: "GET /users/@me";
     requiresCredential: true;
   }, {
     alias: "discord.application.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     outputSchemaName: "DiscordApplicationResource";
     providerObject: "discordApplication";
     providerOperation: "GET /oauth2/applications/@me";
     requiresCredential: true;
   }, {
     alias: "discord.guild.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordGetGuildInput";
     outputSchemaName: "DiscordGuildResource";
     providerObject: "discordGuild";
     providerOperation: "GET /guilds/{guild.id}";
     requiresCredential: true;
   }, {
     alias: "discord.channel.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordGetChannelInput";
     outputSchemaName: "DiscordChannelResource";
     providerObject: "discordChannel";
     providerOperation: "GET /channels/{channel.id}";
     requiresCredential: true;
   }, {
     alias: "discord.channel-messages.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "DiscordListMessagesInput";
     outputSchemaName: "DiscordMessageResource[]";
     providerObject: "discordMessage";
     providerOperation: "GET /channels/{channel.id}/messages";
     requiresCredential: true;
   }, {
     alias: "discord.interaction-signature.verify";
     capability: "discord.interaction-signature";
     exposesSensitiveData: true;
     extension: true;
     inputSchemaName: "ValidateDiscordInteractionSignatureInput";
     outputSchemaName: "boolean";
     providerObject: "discordSignedInteraction";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-messaging-discord";
  privacyNotes: ["Discord messages, user IDs, guild IDs, channel IDs, thread IDs, usernames, attachments, embeds, interaction payloads, and mirrored runtime transcripts can contain customer and moderator data.", "Discord bot tokens, public keys, application IDs, guild/channel routing, webhook URLs, consent, moderation, retention, and transcript policy stay SDK-user-owned configuration."];
  provider: "discord";
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
| `trustLevel` | `"community"` \| `"verified"` \| `"official"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates Ed25519-signed Discord outgoing-webhook interaction requests."`; `exposesSensitiveData`: `true`; `label`: `"Receive Discord interactions"`; `providerObjects`: \[\{ `kind`: `"discordInteraction"`; `label`: `"Discord Interaction"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends bot-token-authenticated Discord channel messages through discord.js REST helpers."`; `exposesSensitiveData`: `true`; `label`: `"Send Discord channel messages"`; `providerObjects`: \[\{ `kind`: `"discordMessage"`; `label`: `"Discord Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"thread"`; `changesWorkflow`: `true`; `description`: `"Creates Discord text-channel threads or forum/media channel posts selected by SDK configuration."`; `exposesSensitiveData`: `true`; `label`: `"Create Discord support threads"`; `providerObjects`: \[\{ `kind`: `"discordThread"`; `label`: `"Discord Thread"`; \}, \{ `kind`: `"discordForumPost"`; `label`: `"Discord Forum Post"`; \}, \{ `kind`: `"discordMediaPost"`; `label`: `"Discord Media Channel Post"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Discord bot, application, guild, channel, and recent channel message records where bot permissions allow access."`; `exposesSensitiveData`: `true`; `label`: `"Read Discord channels and messages"`; `providerObjects`: \[\{ `kind`: `"discordBot"`; `label`: `"Discord Bot"`; \}, \{ `kind`: `"discordApplication"`; `label`: `"Discord Application"`; \}, \{ `kind`: `"discordGuild"`; `label`: `"Discord Guild"`; \}, \{ `kind`: `"discordChannel"`; `label`: `"Discord Channel"`; \}, \{ `kind`: `"discordMessage"`; `label`: `"Discord Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"notify"`; `description`: `"Uses SDK-user-selected Discord channels, threads, or Discord webhook URLs for moderator notification and messaging escalation workflows."`; `exposesSensitiveData`: `true`; `label`: `"Notify Discord moderators"`; `providerObjects`: \[\{ `kind`: `"discordMessage"`; `label`: `"Discord Message"`; \}, \{ `kind`: `"discordWebhookMessage"`; `label`: `"Discord Webhook Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"internal-support"`\]; `capability`: `"discord.interaction-signature"`; `description`: `"Validates X-Signature-Ed25519 and X-Signature-Timestamp headers with the SDK user's Discord application public key."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Discord interaction signatures"`; `providerObjects`: \[\{ `kind`: `"discordSignedInteraction"`; `label`: `"Discord Signed Interaction"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"messaging"` |
| `channelAudiences` | \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"discord.js package"`; `url`: `"https://www.npmjs.com/package/discord.js"`; \}, \{ `label`: `"Discord API reference"`; `url`: `"https://docs.discord.com/developers/reference"`; \}, \{ `label`: `"Discord message resource"`; `url`: `"https://docs.discord.com/developers/resources/message"`; \}, \{ `label`: `"Discord channel/thread endpoints"`; `url`: `"https://docs.discord.com/developers/resources/channel"`; \}, \{ `label`: `"Discord threads topic"`; `url`: `"https://docs.discord.com/developers/topics/threads"`; \}, \{ `label`: `"Discord receiving and responding to interactions"`; `url`: `"https://docs.discord.com/developers/interactions/receiving-and-responding"`; \}, \{ `label`: `"Discord Gateway events"`; `url`: `"https://docs.discord.com/developers/events/gateway"`; \}, \{ `label`: `"Discord Voice connections"`; `url`: `"https://docs.discord.com/developers/topics/voice-connections"`; \}, \{ `label`: `"Discord Webhook Events"`; `url`: `"https://docs.discord.com/developers/events/webhook-events"`; \}, \{ `label`: `"Discord rate limits"`; `url`: `"https://docs.discord.com/developers/topics/rate-limits"`; \}\]; `notes`: \[`"Coverage is a Cognidesk support workflow adapter backed by discord.js, selected discord.js REST helpers, and an optional discord.js Gateway service for live support-thread handoff."`, `"Typed operations cover channel messages, text/forum/media-channel threads, webhook execution, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification."`, `"The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store."`, `"This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage."`, `"Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"discord.js package"`; `url`: `"https://www.npmjs.com/package/discord.js"`; \}, \{ `label`: `"Discord API reference"`; `url`: `"https://docs.discord.com/developers/reference"`; \}, \{ `label`: `"Discord message resource"`; `url`: `"https://docs.discord.com/developers/resources/message"`; \}, \{ `label`: `"Discord channel/thread endpoints"`; `url`: `"https://docs.discord.com/developers/resources/channel"`; \}, \{ `label`: `"Discord threads topic"`; `url`: `"https://docs.discord.com/developers/topics/threads"`; \}, \{ `label`: `"Discord receiving and responding to interactions"`; `url`: `"https://docs.discord.com/developers/interactions/receiving-and-responding"`; \}, \{ `label`: `"Discord Gateway events"`; `url`: `"https://docs.discord.com/developers/events/gateway"`; \}, \{ `label`: `"Discord Voice connections"`; `url`: `"https://docs.discord.com/developers/topics/voice-connections"`; \}, \{ `label`: `"Discord Webhook Events"`; `url`: `"https://docs.discord.com/developers/events/webhook-events"`; \}, \{ `label`: `"Discord rate limits"`; `url`: `"https://docs.discord.com/developers/topics/rate-limits"`; \}\] |
| `coverage.notes` | \[`"Coverage is a Cognidesk support workflow adapter backed by discord.js, selected discord.js REST helpers, and an optional discord.js Gateway service for live support-thread handoff."`, `"Typed operations cover channel messages, text/forum/media-channel threads, webhook execution, selected bot/application/guild/channel reads, channel message listing, and Ed25519 interaction signature verification."`, `"The runtime export includes a Discord Gateway service that creates or reuses Discord threads, ingests customer messages through messageCreate events, mirrors Cognidesk runtime messages into threads, and records idempotency state through the bundled SQLite store."`, `"This package intentionally removes the generated Discord HTTP API clone and does not claim full Discord platform coverage."`, `"Discord bot installation, Gateway intents policy, channel permissions, moderation policy, retention, deletion, command registration lifecycle, voice/media transport, broad moderation/admin APIs, and Discord Webhook Events subscriptions remain SDK-user-owned configuration or future package surfaces."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side Discord bot token used by discord.js REST helpers for channel, guild, bot, and application calls."`; `id`: `"discord-bot-token"`; `label`: `"Discord bot token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"bot"`, `"applications.commands"`\]; \}, \{ `description`: `"SDK-user-owned Discord application ID used to identify commands, interactions, and installation readiness."`; `id`: `"discord-application-id"`; `label`: `"Discord application ID"`; `required`: `true`; \}, \{ `description`: `"Ed25519 public key from the Discord Developer Portal for validating interaction endpoint requests."`; `id`: `"discord-public-key"`; `label`: `"Discord interaction public key"`; `required`: `true`; \}, \{ `description`: `"Guild/server ID selected by SDK configuration for messaging support routing and live checks."`; `id`: `"discord-guild-id"`; `label`: `"Discord guild ID"`; `required`: `false`; \}, \{ `description`: `"Channel, forum, or media channel ID selected by SDK configuration for message and thread operations."`; `id`: `"discord-channel-id"`; `label`: `"Discord channel or forum ID"`; `required`: `false`; \}, \{ `description`: `"Optional SDK-user-owned webhook URL for Discord webhook delivery or webhook-based outbound messages."`; `id`: `"discord-webhook-url"`; `label`: `"Discord webhook URL"`; `required`: `false`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"messaging.discord"` |
| `limitations` | \[`"Available Discord operations depend on the SDK user's Discord application, bot installation, OAuth scopes, role permissions, channel permissions, forum settings, and rate limits."`, `"The optional Gateway service requires Discord Gateway access with Message Content Intent enabled when message text is mirrored into Cognidesk."`, `"Discord Webhook Events subscriptions, slash command registration, broader REST administration, voice, and local RPC/IPC remain outside this package."`, `"Discord interaction endpoint requests must fail closed when signature verification is required but the public key or signature headers are missing or invalid."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiBaseUrl`: `"https://discord.com/api"`; `channelCoverage`: \{ `botApplicationGuildChannelReads`: `"sdk-owned-rest-read"`; `channelMessages`: `"sdk-owned-rest-send-list"`; `forumPosts`: `"sdk-owned-rest-create"`; `gatewayEvents`: `"sdk-owned-discord-js-gateway-service"`; `interactionsEndpoint`: `"typed-verify-parse"`; `threads`: `"sdk-owned-rest-create"`; `voiceGatewayAndRpc`: `"not-covered"`; `webhookEventsSubscriptions`: `"not-covered"`; `webhookExecution`: `"typed-fetch-send"`; \}; `defaultApiVersion`: `"10"`; `gatewayService`: \{ `messageIngress`: `"discord-js-messageCreate"`; `runtimeMirror`: `"cognidesk-runtime-event-list"`; `sourceId`: `"discord-gateway"`; `store`: `"bundled-libsql-sqlite-binding-store"`; \}; `integrationEntryPoints`: \{ `manifest`: `"@cognidesk/integration-messaging-discord/manifest"`; `runtime`: `"@cognidesk/integration-messaging-discord/runtime"`; \}; `integrationName`: `"Discord Integration"`; `integrationPackageName`: `"@cognidesk/integration-messaging-discord"`; `interactionSignatureHeaders`: readonly \[`"x-signature-ed25519"`, `"x-signature-timestamp"`\]; `providerClient`: \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"discord.js"`; `versionRange`: `"^14.26.4"`; \}; \} |
| `metadata.apiBaseUrl` | `"https://discord.com/api"` |
| `metadata.channelCoverage` | \{ `botApplicationGuildChannelReads`: `"sdk-owned-rest-read"`; `channelMessages`: `"sdk-owned-rest-send-list"`; `forumPosts`: `"sdk-owned-rest-create"`; `gatewayEvents`: `"sdk-owned-discord-js-gateway-service"`; `interactionsEndpoint`: `"typed-verify-parse"`; `threads`: `"sdk-owned-rest-create"`; `voiceGatewayAndRpc`: `"not-covered"`; `webhookEventsSubscriptions`: `"not-covered"`; `webhookExecution`: `"typed-fetch-send"`; \} |
| `metadata.channelCoverage.botApplicationGuildChannelReads` | `"sdk-owned-rest-read"` |
| `metadata.channelCoverage.channelMessages` | `"sdk-owned-rest-send-list"` |
| `metadata.channelCoverage.forumPosts` | `"sdk-owned-rest-create"` |
| `metadata.channelCoverage.gatewayEvents` | `"sdk-owned-discord-js-gateway-service"` |
| `metadata.channelCoverage.interactionsEndpoint` | `"typed-verify-parse"` |
| `metadata.channelCoverage.threads` | `"sdk-owned-rest-create"` |
| `metadata.channelCoverage.voiceGatewayAndRpc` | `"not-covered"` |
| `metadata.channelCoverage.webhookEventsSubscriptions` | `"not-covered"` |
| `metadata.channelCoverage.webhookExecution` | `"typed-fetch-send"` |
| `metadata.defaultApiVersion` | `"10"` |
| `metadata.gatewayService` | \{ `messageIngress`: `"discord-js-messageCreate"`; `runtimeMirror`: `"cognidesk-runtime-event-list"`; `sourceId`: `"discord-gateway"`; `store`: `"bundled-libsql-sqlite-binding-store"`; \} |
| `metadata.gatewayService.messageIngress` | `"discord-js-messageCreate"` |
| `metadata.gatewayService.runtimeMirror` | `"cognidesk-runtime-event-list"` |
| `metadata.gatewayService.sourceId` | `"discord-gateway"` |
| `metadata.gatewayService.store` | `"bundled-libsql-sqlite-binding-store"` |
| `metadata.integrationEntryPoints` | \{ `manifest`: `"@cognidesk/integration-messaging-discord/manifest"`; `runtime`: `"@cognidesk/integration-messaging-discord/runtime"`; \} |
| `metadata.integrationEntryPoints.manifest` | `"@cognidesk/integration-messaging-discord/manifest"` |
| `metadata.integrationEntryPoints.runtime` | `"@cognidesk/integration-messaging-discord/runtime"` |
| `metadata.integrationName` | `"Discord Integration"` |
| `metadata.integrationPackageName` | `"@cognidesk/integration-messaging-discord"` |
| `metadata.interactionSignatureHeaders` | readonly \[`"x-signature-ed25519"`, `"x-signature-timestamp"`\] |
| `metadata.providerClient` | \{ `importPolicy`: `"runtime-entrypoint-only"`; `package`: `"discord.js"`; `versionRange`: `"^14.26.4"`; \} |
| `metadata.providerClient.importPolicy` | `"runtime-entrypoint-only"` |
| `metadata.providerClient.package` | `"discord.js"` |
| `metadata.providerClient.versionRange` | `"^14.26.4"` |
| `name` | `"Discord Messaging Support"` |
| `operations` | \[\{ `alias`: `"discord.interaction.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"ParseDiscordInteractionRequestInput"`; `outputSchemaName`: `"DiscordParsedInteractionRequest"`; `providerObject`: `"discordInteraction"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.message.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible`: `true`; `inputSchemaName`: `"DiscordSendChannelMessageInput"`; `outputSchemaName`: `"DiscordMessageResource"`; `providerObject`: `"discordMessage"`; `providerOperation`: `"POST /channels/{channel.id}/messages"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.thread.create"`; `capability`: `"thread"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordCreateThreadInput"`; `outputSchemaName`: `"DiscordChannelResource"`; `providerObject`: `"discordThread"`; `providerOperation`: `"POST /channels/{channel.id}/threads"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.forum-post.create"`; `capability`: `"thread"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordCreateForumPostInput"`; `outputSchemaName`: `"DiscordChannelResource"`; `providerObject`: `"discordForumPost"`; `providerOperation`: `"POST /channels/{channel.id}/threads"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.webhook.execute"`; `capability`: `"notify"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordExecuteWebhookInput"`; `outputSchemaName`: `"DiscordMessageResource"`; `providerObject`: `"discordWebhookMessage"`; `providerOperation`: `"POST /webhooks/{webhook.id}/{webhook.token}"`; `requiresCredential`: `false`; `sideEffect`: `true`; \}, \{ `alias`: `"discord.bot.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `outputSchemaName`: `"DiscordUserResource"`; `providerObject`: `"discordBot"`; `providerOperation`: `"GET /users/@me"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.application.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `outputSchemaName`: `"DiscordApplicationResource"`; `providerObject`: `"discordApplication"`; `providerOperation`: `"GET /oauth2/applications/@me"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.guild.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordGetGuildInput"`; `outputSchemaName`: `"DiscordGuildResource"`; `providerObject`: `"discordGuild"`; `providerOperation`: `"GET /guilds/{guild.id}"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.channel.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordGetChannelInput"`; `outputSchemaName`: `"DiscordChannelResource"`; `providerObject`: `"discordChannel"`; `providerOperation`: `"GET /channels/{channel.id}"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.channel-messages.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"DiscordListMessagesInput"`; `outputSchemaName`: `"DiscordMessageResource[]"`; `providerObject`: `"discordMessage"`; `providerOperation`: `"GET /channels/{channel.id}/messages"`; `requiresCredential`: `true`; \}, \{ `alias`: `"discord.interaction-signature.verify"`; `capability`: `"discord.interaction-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `inputSchemaName`: `"ValidateDiscordInteractionSignatureInput"`; `outputSchemaName`: `"boolean"`; `providerObject`: `"discordSignedInteraction"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-messaging-discord"` |
| `privacyNotes` | \[`"Discord messages, user IDs, guild IDs, channel IDs, thread IDs, usernames, attachments, embeds, interaction payloads, and mirrored runtime transcripts can contain customer and moderator data."`, `"Discord bot tokens, public keys, application IDs, guild/channel routing, webhook URLs, consent, moderation, retention, and transcript policy stay SDK-user-owned configuration."`\] |
| `provider` | `"discord"` |
| `trustLevel` | `"official"` |
