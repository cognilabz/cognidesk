// Generated provider schema DTOs for DiscordHttpApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type DiscordHttpApiSchemaJsonPrimitive = string | number | boolean | null;
export type DiscordHttpApiSchemaJsonValue = DiscordHttpApiSchemaJsonPrimitive | readonly DiscordHttpApiSchemaJsonValue[] | { readonly [key: string]: DiscordHttpApiSchemaJsonValue | undefined };

export type DiscordHttpApiSchemaPrivateApplicationResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string;
  type: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationTypes);
  cover_image?: string;
  primary_sku_id?: DiscordHttpApiSchemaSnowflakeType;
  bot?: DiscordHttpApiSchemaUserResponse;
  slug?: string;
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
  rpc_origins?: ReadonlyArray<string>;
  bot_public?: boolean;
  bot_require_code_grant?: boolean;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  custom_install_url?: string;
  install_params?: DiscordHttpApiSchemaApplicationOAuth2InstallParamsResponse;
  integration_types_config?: {
  readonly [key: string]: DiscordHttpApiSchemaApplicationIntegrationTypeConfigurationResponse | undefined;
};
  verify_key: string;
  flags: number;
  flags_new: string;
  max_participants?: number | null;
  tags?: ReadonlyArray<string>;
  redirect_uris: ReadonlyArray<string>;
  interactions_endpoint_url: string | null;
  role_connections_verification_url: string | null;
  owner: DiscordHttpApiSchemaUserResponse;
  approximate_guild_count: number;
  approximate_user_install_count: number;
  approximate_user_authorization_count: number;
  event_webhooks_url?: string | null;
  event_webhooks_status?: DiscordHttpApiSchemaApplicationEventWebhooksStatus;
  event_webhooks_types?: ReadonlyArray<"APPLICATION_AUTHORIZED" | "APPLICATION_DEAUTHORIZED" | "ENTITLEMENT_CREATE" | "ENTITLEMENT_DELETE" | "ENTITLEMENT_UPDATE" | "GAME_DIRECT_MESSAGE_CREATE" | "GAME_DIRECT_MESSAGE_DELETE" | "GAME_DIRECT_MESSAGE_UPDATE" | "LOBBY_MESSAGE_CREATE" | "LOBBY_MESSAGE_DELETE" | "LOBBY_MESSAGE_UPDATE" | "QUEST_USER_ENROLLMENT">;
  explicit_content_filter: DiscordHttpApiSchemaApplicationExplicitContentFilterTypes;
  team: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaTeamResponse);
};

export type DiscordHttpApiSchemaApplicationFormPartial = {
  description?: {
  default: string;
  localizations?: {
  readonly [key: string]: string | undefined;
} | null;
} | null;
  icon?: string | null;
  cover_image?: string | null;
  team_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  flags?: number | null;
  interactions_endpoint_url?: string | null;
  explicit_content_filter?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationExplicitContentFilterTypes);
  max_participants?: number | null;
  type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationTypes);
  tags?: ReadonlyArray<string> | null;
  custom_install_url?: string | null;
  install_params?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationOAuth2InstallParams);
  role_connections_verification_url?: string | null;
  integration_types_config?: {
  readonly [key: string]: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationIntegrationTypeConfiguration) | undefined;
} | null;
  event_webhooks_status?: (DiscordHttpApiSchemaJsonValue | 1 | 2);
  event_webhooks_url?: string | null;
  event_webhooks_types?: ReadonlyArray<"APPLICATION_AUTHORIZED" | "APPLICATION_DEAUTHORIZED" | "ENTITLEMENT_CREATE" | "ENTITLEMENT_DELETE" | "ENTITLEMENT_UPDATE" | "GAME_DIRECT_MESSAGE_CREATE" | "GAME_DIRECT_MESSAGE_DELETE" | "GAME_DIRECT_MESSAGE_UPDATE" | "LOBBY_MESSAGE_CREATE" | "LOBBY_MESSAGE_DELETE" | "LOBBY_MESSAGE_UPDATE" | "QUEST_USER_ENROLLMENT"> | null;
};

export type DiscordHttpApiSchemaEmbeddedActivityInstance = {
  application_id: DiscordHttpApiSchemaSnowflakeType;
  instance_id: string;
  launch_id: string;
  location: (DiscordHttpApiSchemaGuildChannelLocation | DiscordHttpApiSchemaPrivateChannelLocation);
  users: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
};

export type DiscordHttpApiSchemaActivitiesAttachmentResponse = {
  attachment: DiscordHttpApiSchemaAttachmentResponse;
};

export type DiscordHttpApiSchemaApplicationCommandResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  application_id: DiscordHttpApiSchemaSnowflakeType;
  version: DiscordHttpApiSchemaSnowflakeType;
  default_member_permissions: string | null;
  type: DiscordHttpApiSchemaApplicationCommandType;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
  dm_permission?: boolean;
  contexts?: ReadonlyArray<DiscordHttpApiSchemaInteractionContextType> | null;
  integration_types?: ReadonlyArray<DiscordHttpApiSchemaApplicationIntegrationType>;
  options?: ReadonlyArray<(DiscordHttpApiSchemaApplicationCommandAttachmentOptionResponse | DiscordHttpApiSchemaApplicationCommandBooleanOptionResponse | DiscordHttpApiSchemaApplicationCommandChannelOptionResponse | DiscordHttpApiSchemaApplicationCommandIntegerOptionResponse | DiscordHttpApiSchemaApplicationCommandMentionableOptionResponse | DiscordHttpApiSchemaApplicationCommandNumberOptionResponse | DiscordHttpApiSchemaApplicationCommandRoleOptionResponse | DiscordHttpApiSchemaApplicationCommandStringOptionResponse | DiscordHttpApiSchemaApplicationCommandSubcommandGroupOptionResponse | DiscordHttpApiSchemaApplicationCommandSubcommandOptionResponse | DiscordHttpApiSchemaApplicationCommandUserOptionResponse)>;
  nsfw?: boolean;
  handler?: DiscordHttpApiSchemaApplicationCommandHandler;
};

export type DiscordHttpApiSchemaApplicationCommandUpdateRequest = {
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description?: string | null;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  options?: ReadonlyArray<(DiscordHttpApiSchemaApplicationCommandAttachmentOption | DiscordHttpApiSchemaApplicationCommandBooleanOption | DiscordHttpApiSchemaApplicationCommandChannelOption | DiscordHttpApiSchemaApplicationCommandIntegerOption | DiscordHttpApiSchemaApplicationCommandMentionableOption | DiscordHttpApiSchemaApplicationCommandNumberOption | DiscordHttpApiSchemaApplicationCommandRoleOption | DiscordHttpApiSchemaApplicationCommandStringOption | DiscordHttpApiSchemaApplicationCommandSubcommandGroupOption | DiscordHttpApiSchemaApplicationCommandSubcommandOption | DiscordHttpApiSchemaApplicationCommandUserOption)> | null;
  default_member_permissions?: number | null;
  dm_permission?: boolean | null;
  contexts?: ReadonlyArray<DiscordHttpApiSchemaInteractionContextType> | null;
  integration_types?: ReadonlyArray<DiscordHttpApiSchemaApplicationIntegrationType> | null;
  handler?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandHandler);
  type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandType);
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaApplicationCommandCreateRequest = {
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description?: string | null;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  options?: ReadonlyArray<(DiscordHttpApiSchemaApplicationCommandAttachmentOption | DiscordHttpApiSchemaApplicationCommandBooleanOption | DiscordHttpApiSchemaApplicationCommandChannelOption | DiscordHttpApiSchemaApplicationCommandIntegerOption | DiscordHttpApiSchemaApplicationCommandMentionableOption | DiscordHttpApiSchemaApplicationCommandNumberOption | DiscordHttpApiSchemaApplicationCommandRoleOption | DiscordHttpApiSchemaApplicationCommandStringOption | DiscordHttpApiSchemaApplicationCommandSubcommandGroupOption | DiscordHttpApiSchemaApplicationCommandSubcommandOption | DiscordHttpApiSchemaApplicationCommandUserOption)> | null;
  default_member_permissions?: number | null;
  dm_permission?: boolean | null;
  contexts?: ReadonlyArray<DiscordHttpApiSchemaInteractionContextType> | null;
  integration_types?: ReadonlyArray<DiscordHttpApiSchemaApplicationIntegrationType> | null;
  handler?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandHandler);
  type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandType);
};

export type DiscordHttpApiSchemaRatelimitedResponse = (DiscordHttpApiSchemaError & {
  retry_after: number;
  global: boolean;
});

export type DiscordHttpApiSchemaApplicationCommandPatchRequestPartial = {
  name?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description?: string | null;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  options?: ReadonlyArray<(DiscordHttpApiSchemaApplicationCommandAttachmentOption | DiscordHttpApiSchemaApplicationCommandBooleanOption | DiscordHttpApiSchemaApplicationCommandChannelOption | DiscordHttpApiSchemaApplicationCommandIntegerOption | DiscordHttpApiSchemaApplicationCommandMentionableOption | DiscordHttpApiSchemaApplicationCommandNumberOption | DiscordHttpApiSchemaApplicationCommandRoleOption | DiscordHttpApiSchemaApplicationCommandStringOption | DiscordHttpApiSchemaApplicationCommandSubcommandGroupOption | DiscordHttpApiSchemaApplicationCommandSubcommandOption | DiscordHttpApiSchemaApplicationCommandUserOption)> | null;
  default_member_permissions?: number | null;
  dm_permission?: boolean | null;
  contexts?: ReadonlyArray<DiscordHttpApiSchemaInteractionContextType> | null;
  integration_types?: ReadonlyArray<DiscordHttpApiSchemaApplicationIntegrationType> | null;
  handler?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandHandler);
};

export type DiscordHttpApiSchemaListApplicationEmojisResponse = {
  items: ReadonlyArray<DiscordHttpApiSchemaEmojiResponse>;
};

export type DiscordHttpApiSchemaEmojiResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  user?: DiscordHttpApiSchemaUserResponse;
  roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  require_colons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
};

export type DiscordHttpApiSchemaSnowflakeType = string;

export type DiscordHttpApiSchemaEntitlementResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  sku_id: DiscordHttpApiSchemaSnowflakeType;
  application_id: DiscordHttpApiSchemaSnowflakeType;
  user_id: DiscordHttpApiSchemaSnowflakeType;
  guild_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  deleted: boolean;
  starts_at: string | null;
  ends_at: string | null;
  type: DiscordHttpApiSchemaEntitlementTypes;
  fulfilled_at?: string | null;
  fulfillment_status?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaEntitlementTenantFulfillmentStatusResponse);
  consumed?: boolean;
  gifter_user_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  parent_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaCreateEntitlementRequestData = {
  sku_id: DiscordHttpApiSchemaSnowflakeType;
  owner_id: DiscordHttpApiSchemaSnowflakeType;
  owner_type: DiscordHttpApiSchemaEntitlementOwnerTypes;
};

export type DiscordHttpApiSchemaCommandPermissionsResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  application_id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  permissions: ReadonlyArray<DiscordHttpApiSchemaCommandPermissionResponse>;
};

export type DiscordHttpApiSchemaApplicationCommandPermission = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: DiscordHttpApiSchemaApplicationCommandPermissionType;
  permission: boolean;
};

export type DiscordHttpApiSchemaApplicationRoleConnectionsMetadataItemResponse = {
  type: DiscordHttpApiSchemaMetadataItemTypes;
  key: string;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
};

export type DiscordHttpApiSchemaApplicationRoleConnectionsMetadataItemRequest = {
  type: DiscordHttpApiSchemaMetadataItemTypes;
  key: string;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | null | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | null | undefined;
} | null;
};

export type DiscordHttpApiSchemaGuildChannelResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 0 | 2 | 4 | 5 | 13 | 14 | 15;
  last_message_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  flags: number;
  last_pin_timestamp?: string | null;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  parent_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  rate_limit_per_user?: number;
  bitrate?: number;
  user_limit?: number;
  rtc_region?: string | null;
  video_quality_mode?: DiscordHttpApiSchemaVideoQualityModes;
  permissions?: string;
  topic?: string | null;
  default_auto_archive_duration?: DiscordHttpApiSchemaThreadAutoArchiveDuration;
  default_thread_rate_limit_per_user?: number;
  position: number;
  permission_overwrites?: ReadonlyArray<DiscordHttpApiSchemaChannelPermissionOverwriteResponse>;
  nsfw?: boolean;
  available_tags?: ReadonlyArray<DiscordHttpApiSchemaForumTagResponse>;
  default_reaction_emoji?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaDefaultReactionEmojiResponse);
  default_sort_order?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSortOrder);
  default_forum_layout?: DiscordHttpApiSchemaForumLayout;
  default_tag_setting?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSearchTagSetting);
};

export type DiscordHttpApiSchemaPrivateChannelResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 1;
  last_message_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  flags: number;
  last_pin_timestamp?: string | null;
  recipients: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
};

export type DiscordHttpApiSchemaPrivateGroupChannelResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 3;
  last_message_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  flags: number;
  last_pin_timestamp?: string | null;
  recipients: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
  name: string | null;
  icon: string | null;
  owner_id: DiscordHttpApiSchemaSnowflakeType;
  managed?: boolean;
  application_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaThreadResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 10 | 11 | 12;
  last_message_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  flags: number;
  last_pin_timestamp?: string | null;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  parent_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  rate_limit_per_user?: number;
  bitrate?: number;
  user_limit?: number;
  rtc_region?: string | null;
  video_quality_mode?: DiscordHttpApiSchemaVideoQualityModes;
  permissions?: string;
  owner_id: DiscordHttpApiSchemaSnowflakeType;
  thread_metadata: DiscordHttpApiSchemaThreadMetadataResponse;
  message_count: number;
  member_count: number;
  total_message_sent: number;
  applied_tags?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  member?: DiscordHttpApiSchemaThreadMemberResponse;
};

export type DiscordHttpApiSchemaUpdateDMRequestPartial = {
  name?: string | null;
};

export type DiscordHttpApiSchemaUpdateGroupDMRequestPartial = {
  name?: string | null;
  icon?: string | null;
};

export type DiscordHttpApiSchemaUpdateGuildChannelRequestPartial = {
  type?: (DiscordHttpApiSchemaJsonValue | 0 | 2 | 4 | 5 | 13 | 14 | 15);
  name?: string;
  position?: number | null;
  topic?: string | null;
  bitrate?: number | null;
  user_limit?: number | null;
  nsfw?: boolean | null;
  rate_limit_per_user?: number | null;
  parent_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  permission_overwrites?: ReadonlyArray<DiscordHttpApiSchemaChannelPermissionOverwriteRequest> | null;
  rtc_region?: string | null;
  video_quality_mode?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaVideoQualityModes);
  default_auto_archive_duration?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadAutoArchiveDuration);
  default_reaction_emoji?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUpdateDefaultReactionEmojiRequest);
  default_thread_rate_limit_per_user?: number | null;
  default_sort_order?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSortOrder);
  default_forum_layout?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaForumLayout);
  default_tag_setting?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSearchTagSetting);
  flags?: number | null;
  available_tags?: ReadonlyArray<DiscordHttpApiSchemaUpdateThreadTagRequest> | null;
};

export type DiscordHttpApiSchemaUpdateThreadRequestPartial = {
  name?: string | null;
  archived?: boolean | null;
  locked?: boolean | null;
  invitable?: boolean | null;
  auto_archive_duration?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadAutoArchiveDuration);
  rate_limit_per_user?: number | null;
  flags?: number | null;
  applied_tags?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  bitrate?: number | null;
  user_limit?: number | null;
  rtc_region?: string | null;
  video_quality_mode?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaVideoQualityModes);
};

export type DiscordHttpApiSchemaChannelFollowerResponse = {
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  webhook_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaFriendInviteResponse = {
  type: 2;
  code: string;
  inviter?: DiscordHttpApiSchemaUserResponse;
  max_age?: number;
  created_at?: string;
  expires_at: string | null;
  friends_count?: number;
  channel: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaInviteChannelResponse);
  is_contact?: boolean;
  uses?: number;
  max_uses?: number;
  flags?: number;
};

export type DiscordHttpApiSchemaGroupDMInviteResponse = {
  type: 1;
  code: string;
  inviter?: DiscordHttpApiSchemaUserResponse;
  max_age?: number;
  created_at?: string;
  expires_at: string | null;
  channel: DiscordHttpApiSchemaInviteChannelResponse;
  approximate_member_count?: number | null;
};

export type DiscordHttpApiSchemaGuildInviteResponse = {
  type: 0;
  code: string;
  inviter?: DiscordHttpApiSchemaUserResponse;
  max_age?: number;
  created_at?: string;
  expires_at: string | null;
  is_contact?: boolean;
  flags?: number;
  guild: DiscordHttpApiSchemaInviteGuildResponse;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  channel: DiscordHttpApiSchemaInviteChannelResponse;
  target_type?: DiscordHttpApiSchemaInviteTargetTypes;
  target_user?: DiscordHttpApiSchemaUserResponse;
  target_application?: DiscordHttpApiSchemaInviteApplicationResponse;
  guild_scheduled_event?: DiscordHttpApiSchemaScheduledEventResponse;
  uses?: number;
  max_uses?: number;
  temporary?: boolean;
  approximate_member_count?: number | null;
  approximate_presence_count?: number | null;
  is_nickname_changeable?: boolean;
  roles?: ReadonlyArray<DiscordHttpApiSchemaInviteGuildRoleResponse> | null;
};

export type DiscordHttpApiSchemaCreateGroupDMInviteRequest = {
  max_age?: number | null;
};

export type DiscordHttpApiSchemaCreateGuildInviteRequest = {
  max_age?: number | null;
  temporary?: boolean | null;
  max_uses?: number | null;
  unique?: boolean | null;
  target_user_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  target_application_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  target_type?: (DiscordHttpApiSchemaJsonValue | 1 | 2);
  role_ids?: (string | ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | DiscordHttpApiSchemaJsonValue);
};

export type DiscordHttpApiSchemaMessageResponse = {
  type: DiscordHttpApiSchemaMessageType;
  content: string;
  mentions: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
  mention_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  attachments: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentResponse>;
  embeds: ReadonlyArray<DiscordHttpApiSchemaMessageEmbedResponse>;
  timestamp: string;
  edited_timestamp: string | null;
  flags: number;
  components: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentResponse | DiscordHttpApiSchemaContainerComponentResponse | DiscordHttpApiSchemaFileComponentResponse | DiscordHttpApiSchemaMediaGalleryComponentResponse | DiscordHttpApiSchemaSectionComponentResponse | DiscordHttpApiSchemaSeparatorComponentResponse | DiscordHttpApiSchemaTextDisplayComponentResponse)>;
  stickers?: ReadonlyArray<(DiscordHttpApiSchemaGuildStickerResponse | DiscordHttpApiSchemaStandardStickerResponse)>;
  sticker_items?: ReadonlyArray<DiscordHttpApiSchemaMessageStickerItemResponse>;
  id: DiscordHttpApiSchemaSnowflakeType;
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  author: DiscordHttpApiSchemaUserResponse;
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  call?: DiscordHttpApiSchemaMessageCallResponse;
  activity?: DiscordHttpApiSchemaMessageActivityResponse;
  application?: DiscordHttpApiSchemaBasicApplicationResponseWithBot;
  application_id?: DiscordHttpApiSchemaSnowflakeType;
  interaction?: DiscordHttpApiSchemaMessageInteractionResponse;
  nonce?: (number | string);
  webhook_id?: DiscordHttpApiSchemaSnowflakeType;
  message_reference?: DiscordHttpApiSchemaMessageReferenceResponse;
  thread?: DiscordHttpApiSchemaThreadResponse;
  mention_channels?: ReadonlyArray<DiscordHttpApiSchemaMessageMentionChannelResponse>;
  role_subscription_data?: DiscordHttpApiSchemaMessageRoleSubscriptionDataResponse;
  purchase_notification?: DiscordHttpApiSchemaPurchaseNotificationResponse;
  position?: number;
  resolved?: DiscordHttpApiSchemaResolvedObjectsResponse;
  poll?: DiscordHttpApiSchemaPollResponse;
  shared_client_theme?: DiscordHttpApiSchemaCustomClientThemeResponse;
  interaction_metadata?: (DiscordHttpApiSchemaApplicationCommandInteractionMetadataResponse | DiscordHttpApiSchemaMessageComponentInteractionMetadataResponse | DiscordHttpApiSchemaModalSubmitInteractionMetadataResponse);
  message_snapshots?: ReadonlyArray<DiscordHttpApiSchemaMessageSnapshotResponse>;
  reactions?: ReadonlyArray<DiscordHttpApiSchemaMessageReactionResponse>;
  referenced_message?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaBasicMessageResponse);
};

export type DiscordHttpApiSchemaMessageCreateRequest = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  sticker_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  flags?: number | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
  poll?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollCreateRequest);
  shared_client_theme?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaCustomClientThemeShareRequest);
  message_reference?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageReferenceRequest);
  nonce?: (number | string | DiscordHttpApiSchemaJsonValue);
  enforce_nonce?: boolean | null;
  tts?: boolean | null;
};

export type DiscordHttpApiSchemaPinnedMessagesResponse = {
  items: ReadonlyArray<DiscordHttpApiSchemaPinnedMessageResponse>;
  has_more: boolean;
};

export type DiscordHttpApiSchemaMessageEditRequestPartial = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  flags?: number | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  sticker_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
};

export type DiscordHttpApiSchemaReactionTypes = (0 | 1);

export type DiscordHttpApiSchemaUserResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  username: string;
  avatar: string | null;
  discriminator: string;
  public_flags: number;
  flags: DiscordHttpApiSchemaInt53Type;
  bot?: boolean;
  system?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  global_name: string | null;
  avatar_decoration_data?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserAvatarDecorationResponse);
  collectibles?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserCollectiblesResponse);
  primary_guild: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserPrimaryGuildResponse);
};

export type DiscordHttpApiSchemaCreateTextThreadWithMessageRequest = {
  name: string;
  auto_archive_duration?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadAutoArchiveDuration);
  rate_limit_per_user?: number | null;
};

export type DiscordHttpApiSchemaChannelPermissionOverwrites = (0 | 1);

export type DiscordHttpApiSchemaPollAnswerDetailsResponse = {
  users: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
};

export type DiscordHttpApiSchemaSoundboardSoundSendRequest = {
  sound_id: DiscordHttpApiSchemaSnowflakeType;
  source_guild_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaThreadMemberResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  user_id: DiscordHttpApiSchemaSnowflakeType;
  join_timestamp: string;
  flags: number;
  member?: DiscordHttpApiSchemaGuildMemberResponse;
};

export type DiscordHttpApiSchemaCreateForumThreadRequest = {
  name: string;
  auto_archive_duration?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadAutoArchiveDuration);
  rate_limit_per_user?: number | null;
  applied_tags?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  message: DiscordHttpApiSchemaBaseCreateMessageCreateRequest;
};

export type DiscordHttpApiSchemaCreateTextThreadWithoutMessageRequest = {
  name: string;
  auto_archive_duration?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadAutoArchiveDuration);
  rate_limit_per_user?: number | null;
  type?: (DiscordHttpApiSchemaJsonValue | 10 | 11 | 12);
  invitable?: boolean | null;
};

export type DiscordHttpApiSchemaCreatedThreadResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 10 | 11 | 12;
  last_message_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  flags: number;
  last_pin_timestamp?: string | null;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  parent_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  rate_limit_per_user?: number;
  bitrate?: number;
  user_limit?: number;
  rtc_region?: string | null;
  video_quality_mode?: DiscordHttpApiSchemaVideoQualityModes;
  permissions?: string;
  owner_id: DiscordHttpApiSchemaSnowflakeType;
  thread_metadata: DiscordHttpApiSchemaThreadMetadataResponse;
  message_count: number;
  member_count: number;
  total_message_sent: number;
  applied_tags?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  member?: DiscordHttpApiSchemaThreadMemberResponse;
};

export type DiscordHttpApiSchemaThreadsResponse = {
  threads: ReadonlyArray<DiscordHttpApiSchemaThreadResponse>;
  members: ReadonlyArray<DiscordHttpApiSchemaThreadMemberResponse>;
  has_more: boolean;
  first_messages?: ReadonlyArray<DiscordHttpApiSchemaMessageResponse>;
};

export type DiscordHttpApiSchemaThreadSearchTagSetting = ("match_all" | "match_some");

export type DiscordHttpApiSchemaThreadSortingMode = ("relevance" | "creation_time" | "last_message_time" | "archive_time");

export type DiscordHttpApiSchemaSortingOrder = ("asc" | "desc");

export type DiscordHttpApiSchemaThreadSearchResponse = {
  threads: ReadonlyArray<DiscordHttpApiSchemaThreadResponse>;
  members: ReadonlyArray<DiscordHttpApiSchemaThreadMemberResponse>;
  has_more: boolean;
  first_messages?: ReadonlyArray<DiscordHttpApiSchemaMessageResponse>;
  total_results: number;
};

export type DiscordHttpApiSchemaTypingIndicatorResponse = {};

export type DiscordHttpApiSchemaApplicationIncomingWebhookResponse = {
  application_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  avatar: string | null;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  guild_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  type: 3;
  user?: DiscordHttpApiSchemaUserResponse;
};

export type DiscordHttpApiSchemaChannelFollowerWebhookResponse = {
  application_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  avatar: string | null;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  guild_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  type: 2;
  user?: DiscordHttpApiSchemaUserResponse;
  source_guild?: DiscordHttpApiSchemaWebhookSourceGuildResponse;
  source_channel?: DiscordHttpApiSchemaWebhookSourceChannelResponse;
};

export type DiscordHttpApiSchemaGuildIncomingWebhookResponse = {
  application_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  avatar: string | null;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  guild_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  type: 1;
  user?: DiscordHttpApiSchemaUserResponse;
  token?: string;
  url?: string;
};

export type DiscordHttpApiSchemaGatewayResponse = {
  url: string;
};

export type DiscordHttpApiSchemaGatewayBotResponse = {
  url: string;
  session_start_limit: DiscordHttpApiSchemaGatewayBotSessionStartLimitResponse;
  shards: number;
};

export type DiscordHttpApiSchemaGuildTemplateResponse = {
  code: string;
  name: string;
  description: string | null;
  usage_count: number;
  creator_id: DiscordHttpApiSchemaSnowflakeType;
  creator: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserResponse);
  created_at: string;
  updated_at: string;
  source_guild_id: DiscordHttpApiSchemaSnowflakeType;
  serialized_source_guild: DiscordHttpApiSchemaGuildTemplateSnapshotResponse;
  is_dirty: boolean | null;
};

export type DiscordHttpApiSchemaGuildWithCountsResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string | null;
  home_header: string | null;
  splash: string | null;
  discovery_splash: string | null;
  features: ReadonlyArray<DiscordHttpApiSchemaGuildFeatures>;
  banner: string | null;
  owner_id: DiscordHttpApiSchemaSnowflakeType;
  application_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  region: string;
  afk_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  afk_timeout: DiscordHttpApiSchemaAfkTimeouts;
  system_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  system_channel_flags: number;
  widget_enabled: boolean;
  widget_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  verification_level: DiscordHttpApiSchemaVerificationLevels;
  roles: ReadonlyArray<DiscordHttpApiSchemaGuildRoleResponse>;
  default_message_notifications: DiscordHttpApiSchemaUserNotificationSettings;
  mfa_level: DiscordHttpApiSchemaGuildMFALevel;
  explicit_content_filter: DiscordHttpApiSchemaGuildExplicitContentFilterTypes;
  max_presences: number | null;
  max_members: number;
  max_stage_video_channel_users: number;
  max_video_channel_users: number;
  vanity_url_code: string | null;
  premium_tier: DiscordHttpApiSchemaPremiumGuildTiers;
  premium_subscription_count: number;
  preferred_locale: DiscordHttpApiSchemaAvailableLocalesEnum;
  rules_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  safety_alerts_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  public_updates_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  premium_progress_bar_enabled: boolean;
  premium_progress_bar_enabled_user_updated_at?: string | null;
  nsfw: boolean;
  nsfw_level: DiscordHttpApiSchemaGuildNSFWContentLevel;
  emojis: ReadonlyArray<DiscordHttpApiSchemaEmojiResponse>;
  stickers: ReadonlyArray<DiscordHttpApiSchemaGuildStickerResponse>;
  incidents_data: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildIncidentsDataResponse);
  approximate_member_count?: number | null;
  approximate_presence_count?: number | null;
};

export type DiscordHttpApiSchemaGuildPatchRequestPartial = {
  name?: string;
  description?: string | null;
  region?: string | null;
  icon?: string | null;
  verification_level?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaVerificationLevels);
  default_message_notifications?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserNotificationSettings);
  explicit_content_filter?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildExplicitContentFilterTypes);
  preferred_locale?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaAvailableLocalesEnum);
  afk_timeout?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaAfkTimeouts);
  afk_channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  system_channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  splash?: string | null;
  banner?: string | null;
  system_channel_flags?: number | null;
  features?: ReadonlyArray<string | null> | null;
  discovery_splash?: string | null;
  home_header?: string | null;
  rules_channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  safety_alerts_channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  public_updates_channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  premium_progress_bar_enabled?: boolean | null;
};

export type DiscordHttpApiSchemaGuildResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string | null;
  home_header: string | null;
  splash: string | null;
  discovery_splash: string | null;
  features: ReadonlyArray<DiscordHttpApiSchemaGuildFeatures>;
  banner: string | null;
  owner_id: DiscordHttpApiSchemaSnowflakeType;
  application_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  region: string;
  afk_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  afk_timeout: DiscordHttpApiSchemaAfkTimeouts;
  system_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  system_channel_flags: number;
  widget_enabled: boolean;
  widget_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  verification_level: DiscordHttpApiSchemaVerificationLevels;
  roles: ReadonlyArray<DiscordHttpApiSchemaGuildRoleResponse>;
  default_message_notifications: DiscordHttpApiSchemaUserNotificationSettings;
  mfa_level: DiscordHttpApiSchemaGuildMFALevel;
  explicit_content_filter: DiscordHttpApiSchemaGuildExplicitContentFilterTypes;
  max_presences: number | null;
  max_members: number;
  max_stage_video_channel_users: number;
  max_video_channel_users: number;
  vanity_url_code: string | null;
  premium_tier: DiscordHttpApiSchemaPremiumGuildTiers;
  premium_subscription_count: number;
  preferred_locale: DiscordHttpApiSchemaAvailableLocalesEnum;
  rules_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  safety_alerts_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  public_updates_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  premium_progress_bar_enabled: boolean;
  premium_progress_bar_enabled_user_updated_at?: string | null;
  nsfw: boolean;
  nsfw_level: DiscordHttpApiSchemaGuildNSFWContentLevel;
  emojis: ReadonlyArray<DiscordHttpApiSchemaEmojiResponse>;
  stickers: ReadonlyArray<DiscordHttpApiSchemaGuildStickerResponse>;
  incidents_data: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildIncidentsDataResponse);
};

export type DiscordHttpApiSchemaAuditLogActionTypes = (1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82 | 83 | 84 | 85 | 90 | 91 | 92 | 100 | 101 | 102 | 110 | 111 | 112 | 121 | 130 | 131 | 132 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 150 | 151 | 163 | 164 | 165 | 166 | 167 | 171 | 172 | 180 | 190 | 191 | 192 | 193 | 200 | 201 | 202 | 211);

export type DiscordHttpApiSchemaGuildAuditLogResponse = {
  audit_log_entries: ReadonlyArray<DiscordHttpApiSchemaAuditLogEntryResponse>;
  users: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
  integrations: ReadonlyArray<(DiscordHttpApiSchemaPartialDiscordIntegrationResponse | DiscordHttpApiSchemaPartialExternalConnectionIntegrationResponse | DiscordHttpApiSchemaPartialGuildSubscriptionIntegrationResponse)>;
  webhooks: ReadonlyArray<(DiscordHttpApiSchemaApplicationIncomingWebhookResponse | DiscordHttpApiSchemaChannelFollowerWebhookResponse | DiscordHttpApiSchemaGuildIncomingWebhookResponse)>;
  guild_scheduled_events: ReadonlyArray<(DiscordHttpApiSchemaExternalScheduledEventResponse | DiscordHttpApiSchemaStageScheduledEventResponse | DiscordHttpApiSchemaVoiceScheduledEventResponse)>;
  threads: ReadonlyArray<DiscordHttpApiSchemaThreadResponse>;
  application_commands: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandResponse>;
  auto_moderation_rules: ReadonlyArray<(DiscordHttpApiSchemaDefaultKeywordRuleResponse | DiscordHttpApiSchemaKeywordRuleResponse | DiscordHttpApiSchemaMLSpamRuleResponse | DiscordHttpApiSchemaMentionSpamRuleResponse | DiscordHttpApiSchemaUserProfileRuleResponse | DiscordHttpApiSchemaJsonValue)>;
};

export type DiscordHttpApiSchemaDefaultKeywordRuleResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  creator_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageActionResponse | DiscordHttpApiSchemaFlagToChannelActionResponse | DiscordHttpApiSchemaQuarantineUserActionResponse | DiscordHttpApiSchemaUserCommunicationDisabledActionResponse)>;
  trigger_type: 4;
  enabled: boolean;
  exempt_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  exempt_channels: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  trigger_metadata: DiscordHttpApiSchemaDefaultKeywordListTriggerMetadataResponse;
};

export type DiscordHttpApiSchemaKeywordRuleResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  creator_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageActionResponse | DiscordHttpApiSchemaFlagToChannelActionResponse | DiscordHttpApiSchemaQuarantineUserActionResponse | DiscordHttpApiSchemaUserCommunicationDisabledActionResponse)>;
  trigger_type: 1;
  enabled: boolean;
  exempt_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  exempt_channels: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  trigger_metadata: DiscordHttpApiSchemaKeywordTriggerMetadataResponse;
};

export type DiscordHttpApiSchemaMLSpamRuleResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  creator_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageActionResponse | DiscordHttpApiSchemaFlagToChannelActionResponse | DiscordHttpApiSchemaQuarantineUserActionResponse | DiscordHttpApiSchemaUserCommunicationDisabledActionResponse)>;
  trigger_type: 3;
  enabled: boolean;
  exempt_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  exempt_channels: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  trigger_metadata: DiscordHttpApiSchemaMLSpamTriggerMetadataResponse;
};

export type DiscordHttpApiSchemaMentionSpamRuleResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  creator_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageActionResponse | DiscordHttpApiSchemaFlagToChannelActionResponse | DiscordHttpApiSchemaQuarantineUserActionResponse | DiscordHttpApiSchemaUserCommunicationDisabledActionResponse)>;
  trigger_type: 5;
  enabled: boolean;
  exempt_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  exempt_channels: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  trigger_metadata: DiscordHttpApiSchemaMentionSpamTriggerMetadataResponse;
};

export type DiscordHttpApiSchemaUserProfileRuleResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  creator_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageActionResponse | DiscordHttpApiSchemaFlagToChannelActionResponse | DiscordHttpApiSchemaQuarantineUserActionResponse | DiscordHttpApiSchemaUserCommunicationDisabledActionResponse)>;
  trigger_type: 6;
  enabled: boolean;
  exempt_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  exempt_channels: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  trigger_metadata: DiscordHttpApiSchemaUserProfileMetadataResponse;
};

export type DiscordHttpApiSchemaDefaultKeywordListUpsertRequest = {
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type: 4;
  trigger_metadata: DiscordHttpApiSchemaDefaultKeywordListTriggerMetadata;
};

export type DiscordHttpApiSchemaKeywordUpsertRequest = {
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type: 1;
  trigger_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaKeywordTriggerMetadata);
};

export type DiscordHttpApiSchemaMLSpamUpsertRequest = {
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type: 3;
  trigger_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMLSpamTriggerMetadata);
};

export type DiscordHttpApiSchemaMentionSpamUpsertRequest = {
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type: 5;
  trigger_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMentionSpamTriggerMetadata);
};

export type DiscordHttpApiSchemaUserProfileUpsertRequest = {
  name: string;
  event_type: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type: 6;
  trigger_metadata: DiscordHttpApiSchemaUserProfileMetadata;
};

export type DiscordHttpApiSchemaDefaultKeywordListUpsertRequestPartial = {
  name?: string;
  event_type?: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type?: 4;
  trigger_metadata?: DiscordHttpApiSchemaDefaultKeywordListTriggerMetadata;
};

export type DiscordHttpApiSchemaKeywordUpsertRequestPartial = {
  name?: string;
  event_type?: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type?: 1;
  trigger_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaKeywordTriggerMetadata);
};

export type DiscordHttpApiSchemaMLSpamUpsertRequestPartial = {
  name?: string;
  event_type?: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type?: 3;
  trigger_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMLSpamTriggerMetadata);
};

export type DiscordHttpApiSchemaMentionSpamUpsertRequestPartial = {
  name?: string;
  event_type?: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type?: 5;
  trigger_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMentionSpamTriggerMetadata);
};

export type DiscordHttpApiSchemaUserProfileUpsertRequestPartial = {
  name?: string;
  event_type?: DiscordHttpApiSchemaAutomodEventType;
  actions?: ReadonlyArray<(DiscordHttpApiSchemaBlockMessageAction | DiscordHttpApiSchemaFlagToChannelAction | DiscordHttpApiSchemaQuarantineUserAction | DiscordHttpApiSchemaUserCommunicationDisabledAction)> | null;
  enabled?: boolean | null;
  exempt_roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  exempt_channels?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  trigger_type?: 6;
  trigger_metadata?: DiscordHttpApiSchemaUserProfileMetadata;
};

export type DiscordHttpApiSchemaGuildBanResponse = {
  user: DiscordHttpApiSchemaUserResponse;
  reason: string | null;
};

export type DiscordHttpApiSchemaBanUserFromGuildRequest = {
  delete_message_seconds?: number | null;
  delete_message_days?: number | null;
};

export type DiscordHttpApiSchemaUnbanUserFromGuildRequest = {};

export type DiscordHttpApiSchemaBulkBanUsersRequest = {
  user_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  delete_message_seconds?: number | null;
};

export type DiscordHttpApiSchemaBulkBanUsersResponse = {
  banned_users: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  failed_users: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
};

export type DiscordHttpApiSchemaCreateGuildChannelRequest = {
  type?: (DiscordHttpApiSchemaJsonValue | 0 | 2 | 4 | 5 | 13 | 14 | 15);
  name: string;
  position?: number | null;
  topic?: string | null;
  bitrate?: number | null;
  user_limit?: number | null;
  nsfw?: boolean | null;
  rate_limit_per_user?: number | null;
  parent_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  permission_overwrites?: ReadonlyArray<DiscordHttpApiSchemaChannelPermissionOverwriteRequest> | null;
  rtc_region?: string | null;
  video_quality_mode?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaVideoQualityModes);
  default_auto_archive_duration?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadAutoArchiveDuration);
  default_reaction_emoji?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUpdateDefaultReactionEmojiRequest);
  default_thread_rate_limit_per_user?: number | null;
  default_sort_order?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSortOrder);
  default_forum_layout?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaForumLayout);
  default_tag_setting?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSearchTagSetting);
  available_tags?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaCreateOrUpdateThreadTagRequest)> | null;
};

export type DiscordHttpApiSchemaGuildIncidentActionsRequest = {
  invites_disabled_until?: string | null;
  dms_disabled_until?: string | null;
};

export type DiscordHttpApiSchemaGuildIncidentsDataResponse = {
  invites_disabled_until: string | null;
  dms_disabled_until: string | null;
};

export type DiscordHttpApiSchemaDiscordIntegrationResponse = {
  type: "discord";
  name: string | null;
  account: DiscordHttpApiSchemaAccountResponse;
  enabled: boolean;
  id: DiscordHttpApiSchemaSnowflakeType;
  application: DiscordHttpApiSchemaIntegrationApplicationResponse;
  scopes: ReadonlyArray<"applications.commands" | "bot" | "webhook.incoming">;
  user?: DiscordHttpApiSchemaUserResponse;
};

export type DiscordHttpApiSchemaExternalConnectionIntegrationResponse = {
  type: "twitch" | "youtube";
  name: string | null;
  account: DiscordHttpApiSchemaAccountResponse;
  enabled: boolean;
  id: string;
  user: DiscordHttpApiSchemaUserResponse;
  revoked?: boolean;
  expire_behavior?: DiscordHttpApiSchemaIntegrationExpireBehaviorTypes;
  expire_grace_period?: DiscordHttpApiSchemaIntegrationExpireGracePeriodTypes;
  subscriber_count?: number;
  synced_at?: string;
  role_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  syncing?: boolean;
  enable_emoticons?: boolean;
};

export type DiscordHttpApiSchemaGuildSubscriptionIntegrationResponse = {
  type: "guild_subscription";
  name: string | null;
  account: DiscordHttpApiSchemaAccountResponse;
  enabled: boolean;
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaGuildMemberResponse = {
  avatar: string | null;
  avatar_decoration_data?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserAvatarDecorationResponse);
  banner: string | null;
  communication_disabled_until: string | null;
  flags: number;
  joined_at: string;
  nick: string | null;
  pending: boolean;
  premium_since: string | null;
  roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  collectibles?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserCollectiblesResponse);
  user: DiscordHttpApiSchemaUserResponse;
  mute: boolean;
  deaf: boolean;
};

export type DiscordHttpApiSchemaPrivateGuildMemberResponse = {
  avatar: string | null;
  avatar_decoration_data?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserAvatarDecorationResponse);
  banner: string | null;
  communication_disabled_until: string | null;
  flags: number;
  joined_at: string;
  nick: string | null;
  pending: boolean;
  premium_since: string | null;
  roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  collectibles?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserCollectiblesResponse);
  user: DiscordHttpApiSchemaUserResponse;
  mute: boolean;
  deaf: boolean;
  permissions?: string;
};

export type DiscordHttpApiSchemaBotAddGuildMemberRequest = {
  nick?: string | null;
  roles?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  mute?: boolean | null;
  deaf?: boolean | null;
  access_token: string;
  flags?: number | null;
};

export type DiscordHttpApiSchemaSortingMode = ("relevance" | "timestamp");

export type DiscordHttpApiSchemaAuthorType = ("user" | "bot" | "webhook" | "-user" | "-bot" | "-webhook");

export type DiscordHttpApiSchemaHasOption = ("link" | "embed" | "file" | "image" | "video" | "sound" | "sticker" | "poll" | "snapshot" | "-link" | "-embed" | "-file" | "-image" | "-video" | "-sound" | "-sticker" | "-poll" | "-snapshot");

export type DiscordHttpApiSchemaSearchableEmbedType = ("image" | "video" | "gif" | "sound" | "article");

export type DiscordHttpApiSchemaGuildSearchResponse = {
  messages: ReadonlyArray<ReadonlyArray<DiscordHttpApiSchemaSearchMessageResponse>>;
  doing_deep_historical_index: boolean;
  total_results: number;
  threads?: ReadonlyArray<DiscordHttpApiSchemaThreadResponse> | null;
  members?: ReadonlyArray<DiscordHttpApiSchemaThreadMemberResponse> | null;
  documents_indexed?: number | null;
};

export type DiscordHttpApiSchemaGuildHomeSettingsResponse = {
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  enabled: boolean;
  welcome_message?: DiscordHttpApiSchemaWelcomeMessageResponse;
  new_member_actions: ReadonlyArray<DiscordHttpApiSchemaNewMemberActionResponse>;
  resource_channels: ReadonlyArray<DiscordHttpApiSchemaResourceChannelResponse>;
};

export type DiscordHttpApiSchemaUserGuildOnboardingResponse = {
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  prompts: ReadonlyArray<DiscordHttpApiSchemaOnboardingPromptResponse>;
  default_channel_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  enabled: boolean;
  mode: DiscordHttpApiSchemaGuildOnboardingMode;
};

export type DiscordHttpApiSchemaUpdateGuildOnboardingRequest = {
  prompts?: ReadonlyArray<DiscordHttpApiSchemaUpdateOnboardingPromptRequest> | null;
  enabled?: boolean | null;
  default_channel_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  mode?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildOnboardingMode);
};

export type DiscordHttpApiSchemaGuildOnboardingResponse = {
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  prompts: ReadonlyArray<DiscordHttpApiSchemaOnboardingPromptResponse>;
  default_channel_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  enabled: boolean;
  mode: DiscordHttpApiSchemaGuildOnboardingMode;
};

export type DiscordHttpApiSchemaGuildPreviewResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string | null;
  home_header: string | null;
  splash: string | null;
  discovery_splash: string | null;
  features: ReadonlyArray<DiscordHttpApiSchemaGuildFeatures>;
  approximate_member_count: number;
  approximate_presence_count: number;
  emojis: ReadonlyArray<DiscordHttpApiSchemaEmojiResponse>;
  stickers: ReadonlyArray<DiscordHttpApiSchemaGuildStickerResponse>;
};

export type DiscordHttpApiSchemaGuildPruneResponse = {
  pruned: number | null;
};

export type DiscordHttpApiSchemaPruneGuildRequest = {
  days?: number | null;
  compute_prune_count?: boolean | null;
  include_roles?: (string | ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | DiscordHttpApiSchemaJsonValue);
};

export type DiscordHttpApiSchemaVoiceRegionResponse = {
  id: string;
  name: string;
  custom: boolean;
  deprecated: boolean;
  optimal: boolean;
};

export type DiscordHttpApiSchemaGuildJoinRequestApplicationStatus = ("STARTED" | "SUBMITTED" | "REJECTED" | "APPROVED");

export type DiscordHttpApiSchemaGuildJoinRequestsListResponse = {
  total?: number;
  guild_join_requests?: ReadonlyArray<DiscordHttpApiSchemaGuildJoinRequestResponse>;
};

export type DiscordHttpApiSchemaGuildJoinRequestResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  created_at: string;
  reviewed_at: string | null;
  application_status: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildJoinRequestApplicationStatus);
  rejection_reason: string | null;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  user_id: DiscordHttpApiSchemaSnowflakeType;
  user?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserResponse);
  form_responses?: ReadonlyArray<(DiscordHttpApiSchemaMultipleChoiceFormFieldResponse | DiscordHttpApiSchemaParagraphFormFieldResponse | DiscordHttpApiSchemaTermsFormFieldResponse | DiscordHttpApiSchemaTextInputFormFieldResponse)> | null;
  actioned_by_user?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserResponse);
};

export type DiscordHttpApiSchemaGuildRoleResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  permissions: string;
  position: number;
  color: number;
  colors: DiscordHttpApiSchemaGuildRoleColorsResponse;
  hoist: boolean;
  managed: boolean;
  mentionable: boolean;
  icon: string | null;
  unicode_emoji: string | null;
  tags?: DiscordHttpApiSchemaGuildRoleTagsResponse;
  flags: number;
};

export type DiscordHttpApiSchemaCreateRoleRequest = {
  name?: string | null;
  permissions?: number | null;
  color?: number | null;
  colors?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRoleColors);
  hoist?: boolean | null;
  mentionable?: boolean | null;
  icon?: string | null;
  unicode_emoji?: string | null;
};

export type DiscordHttpApiSchemaUpdateRolePositionsRequest = {
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  position?: number | null;
};

export type DiscordHttpApiSchemaUpdateRoleRequestPartial = {
  name?: string | null;
  permissions?: number | null;
  color?: number | null;
  colors?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRoleColors);
  hoist?: boolean | null;
  mentionable?: boolean | null;
  icon?: string | null;
  unicode_emoji?: string | null;
};

export type DiscordHttpApiSchemaExternalScheduledEventResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  description: string | null;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator?: DiscordHttpApiSchemaUserResponse;
  image: string | null;
  scheduled_start_time: string;
  scheduled_end_time: string | null;
  status: DiscordHttpApiSchemaGuildScheduledEventStatuses;
  entity_type: 3;
  entity_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRuleResponse);
  user_count?: number;
  privacy_level: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  user_rsvp?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaScheduledEventUserResponse);
  guild_scheduled_event_exceptions: ReadonlyArray<DiscordHttpApiSchemaGuildScheduledEventExceptionResponse>;
  entity_metadata: DiscordHttpApiSchemaEntityMetadataExternalResponse;
};

export type DiscordHttpApiSchemaStageScheduledEventResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  description: string | null;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator?: DiscordHttpApiSchemaUserResponse;
  image: string | null;
  scheduled_start_time: string;
  scheduled_end_time: string | null;
  status: DiscordHttpApiSchemaGuildScheduledEventStatuses;
  entity_type: 1;
  entity_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRuleResponse);
  user_count?: number;
  privacy_level: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  user_rsvp?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaScheduledEventUserResponse);
  guild_scheduled_event_exceptions: ReadonlyArray<DiscordHttpApiSchemaGuildScheduledEventExceptionResponse>;
  entity_metadata: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaEntityMetadataStageInstanceResponse);
};

export type DiscordHttpApiSchemaVoiceScheduledEventResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  description: string | null;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator?: DiscordHttpApiSchemaUserResponse;
  image: string | null;
  scheduled_start_time: string;
  scheduled_end_time: string | null;
  status: DiscordHttpApiSchemaGuildScheduledEventStatuses;
  entity_type: 2;
  entity_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRuleResponse);
  user_count?: number;
  privacy_level: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  user_rsvp?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaScheduledEventUserResponse);
  guild_scheduled_event_exceptions: ReadonlyArray<DiscordHttpApiSchemaGuildScheduledEventExceptionResponse>;
  entity_metadata: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaEntityMetadataVoiceResponse);
};

export type DiscordHttpApiSchemaExternalScheduledEventCreateRequest = {
  name: string;
  description?: string | null;
  image?: string | null;
  scheduled_start_time: string;
  scheduled_end_time?: string | null;
  privacy_level: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  entity_type: 3;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRule);
  entity_metadata: DiscordHttpApiSchemaEntityMetadataExternal;
};

export type DiscordHttpApiSchemaStageScheduledEventCreateRequest = {
  name: string;
  description?: string | null;
  image?: string | null;
  scheduled_start_time: string;
  scheduled_end_time?: string | null;
  privacy_level: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  entity_type: 1;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRule);
  entity_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaEntityMetadataStageInstance);
};

export type DiscordHttpApiSchemaVoiceScheduledEventCreateRequest = {
  name: string;
  description?: string | null;
  image?: string | null;
  scheduled_start_time: string;
  scheduled_end_time?: string | null;
  privacy_level: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  entity_type: 2;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRule);
  entity_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaEntityMetadataVoice);
};

export type DiscordHttpApiSchemaExternalScheduledEventPatchRequestPartial = {
  status?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildScheduledEventStatuses);
  name?: string;
  description?: string | null;
  image?: string | null;
  scheduled_start_time?: string;
  scheduled_end_time?: string | null;
  entity_type?: (DiscordHttpApiSchemaJsonValue | 3);
  privacy_level?: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRule);
  entity_metadata?: DiscordHttpApiSchemaEntityMetadataExternal;
};

export type DiscordHttpApiSchemaStageScheduledEventPatchRequestPartial = {
  status?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildScheduledEventStatuses);
  name?: string;
  description?: string | null;
  image?: string | null;
  scheduled_start_time?: string;
  scheduled_end_time?: string | null;
  entity_type?: (DiscordHttpApiSchemaJsonValue | 1);
  privacy_level?: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRule);
  entity_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaEntityMetadataStageInstance);
};

export type DiscordHttpApiSchemaVoiceScheduledEventPatchRequestPartial = {
  status?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildScheduledEventStatuses);
  name?: string;
  description?: string | null;
  image?: string | null;
  scheduled_start_time?: string;
  scheduled_end_time?: string | null;
  entity_type?: (DiscordHttpApiSchemaJsonValue | 2);
  privacy_level?: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRule);
  entity_metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaEntityMetadataVoice);
};

export type DiscordHttpApiSchemaGuildScheduledEventExceptionCreateRequest = {
  scheduled_start_time?: string | null;
  scheduled_end_time?: string | null;
  original_scheduled_start_time: string;
  is_canceled?: boolean | null;
};

export type DiscordHttpApiSchemaGuildScheduledEventExceptionResponse = {
  event_id: DiscordHttpApiSchemaSnowflakeType;
  event_exception_id: DiscordHttpApiSchemaSnowflakeType;
  scheduled_start_time: string | null;
  scheduled_end_time: string | null;
  is_canceled: boolean;
};

export type DiscordHttpApiSchemaGuildScheduledEventExceptionPatchRequestPartial = {
  scheduled_start_time?: string | null;
  scheduled_end_time?: string | null;
  is_canceled?: boolean | null;
};

export type DiscordHttpApiSchemaScheduledEventUserResponse = {
  guild_scheduled_event_id: DiscordHttpApiSchemaSnowflakeType;
  guild_scheduled_event_exception_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  user_id: DiscordHttpApiSchemaSnowflakeType;
  user?: DiscordHttpApiSchemaUserResponse;
  member?: DiscordHttpApiSchemaGuildMemberResponse;
  response: DiscordHttpApiSchemaGuildScheduledEventUserResponses;
};

export type DiscordHttpApiSchemaScheduledEventUserCountResponse = {
  guild_scheduled_event_count: number;
  guild_scheduled_event_exception_counts: {
  readonly [key: string]: number | undefined;
};
};

export type DiscordHttpApiSchemaListGuildSoundboardSoundsResponse = {
  items: ReadonlyArray<DiscordHttpApiSchemaSoundboardSoundResponse>;
};

export type DiscordHttpApiSchemaSoundboardCreateRequest = {
  name: string;
  volume?: number | null;
  emoji_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name?: string | null;
  sound: string;
};

export type DiscordHttpApiSchemaSoundboardSoundResponse = {
  name: string;
  sound_id: DiscordHttpApiSchemaSnowflakeType;
  volume: number;
  emoji_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name: string | null;
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
  available: boolean;
  user?: DiscordHttpApiSchemaUserResponse;
};

export type DiscordHttpApiSchemaSoundboardPatchRequestPartial = {
  name?: string;
  volume?: number | null;
  emoji_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name?: string | null;
};

export type DiscordHttpApiSchemaGuildStickerResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  tags: string;
  type: 2;
  format_type: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaStickerFormatTypes);
  description: string | null;
  available: boolean;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  user?: DiscordHttpApiSchemaUserResponse;
};

export type DiscordHttpApiSchemaVanityURLResponse = {
  code: string | null;
  uses: number;
  error?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaVanityURLErrorResponse);
};

export type DiscordHttpApiSchemaVoiceStateResponse = {
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  deaf: boolean;
  guild_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  member?: DiscordHttpApiSchemaGuildMemberResponse;
  mute: boolean;
  request_to_speak_timestamp: string | null;
  suppress: boolean;
  self_stream: boolean | null;
  self_deaf: boolean;
  self_mute: boolean;
  self_video: boolean;
  session_id: string;
  user_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaUpdateSelfVoiceStateRequestPartial = {
  request_to_speak_timestamp?: string | null;
  suppress?: boolean | null;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaUpdateVoiceStateRequestPartial = {
  suppress?: boolean | null;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaGuildWelcomeScreenResponse = {
  description: string | null;
  welcome_channels: ReadonlyArray<DiscordHttpApiSchemaGuildWelcomeScreenChannelResponse>;
};

export type DiscordHttpApiSchemaWelcomeScreenPatchRequestPartial = {
  description?: string | null;
  welcome_channels?: ReadonlyArray<DiscordHttpApiSchemaGuildWelcomeChannel> | null;
  enabled?: boolean | null;
};

export type DiscordHttpApiSchemaWidgetSettingsResponse = {
  enabled: boolean;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaWidgetResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  instant_invite: string | null;
  channels: ReadonlyArray<DiscordHttpApiSchemaWidgetChannel>;
  members: ReadonlyArray<DiscordHttpApiSchemaWidgetMember>;
  presence_count: number;
};

export type DiscordHttpApiSchemaWidgetImageStyles = ("shield" | "banner1" | "banner2" | "banner3" | "banner4");

export type DiscordHttpApiSchemaApplicationCommandAutocompleteCallbackRequest = {
  type: 8;
  data: (DiscordHttpApiSchemaInteractionApplicationCommandAutocompleteCallbackIntegerData | DiscordHttpApiSchemaInteractionApplicationCommandAutocompleteCallbackNumberData | DiscordHttpApiSchemaInteractionApplicationCommandAutocompleteCallbackStringData);
};

export type DiscordHttpApiSchemaCreateMessageInteractionCallbackRequest = {
  type: 4 | 5;
  data?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaIncomingWebhookInteractionRequest);
};

export type DiscordHttpApiSchemaLaunchActivityInteractionCallbackRequest = {
  type: 12;
};

export type DiscordHttpApiSchemaModalInteractionCallbackRequest = {
  type: 9;
  data: DiscordHttpApiSchemaModalInteractionCallbackRequestData;
};

export type DiscordHttpApiSchemaPongInteractionCallbackRequest = {
  type: 1;
};

export type DiscordHttpApiSchemaSocialLayerSKUPurchaseEligibilityInteractionCallbackRequest = {
  type: 13;
  data: DiscordHttpApiSchemaSocialLayerSKUPurchaseEligibilityCallbackData;
};

export type DiscordHttpApiSchemaUpdateMessageInteractionCallbackRequest = {
  type: 6 | 7;
  data?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaIncomingWebhookUpdateForInteractionCallbackRequestPartial);
};

export type DiscordHttpApiSchemaInteractionCallbackResponse = {
  interaction: DiscordHttpApiSchemaInteractionResponse;
  resource?: (DiscordHttpApiSchemaCreateMessageInteractionCallbackResponse | DiscordHttpApiSchemaLaunchActivityInteractionCallbackResponse | DiscordHttpApiSchemaUpdateMessageInteractionCallbackResponse);
};

export type DiscordHttpApiSchemaTargetUsersJobStatusResponse = {
  status: DiscordHttpApiSchemaTargetUsersJobStatusTypes;
  total_users: DiscordHttpApiSchemaUInt32Type;
  processed_users: DiscordHttpApiSchemaUInt32Type;
  created_at: string | null;
  completed_at: string | null;
  error_message: string | null;
};

export type DiscordHttpApiSchemaLobbyResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  application_id: DiscordHttpApiSchemaSnowflakeType;
  metadata: {
  readonly [key: string]: string | undefined;
} | null;
  members: ReadonlyArray<DiscordHttpApiSchemaLobbyMemberResponse>;
  linked_channel?: DiscordHttpApiSchemaGuildChannelResponse;
  flags: DiscordHttpApiSchemaUInt32Type;
  override_event_webhooks_url?: string | null;
};

export type DiscordHttpApiSchemaLobbyMemberRequest = {
  id: DiscordHttpApiSchemaSnowflakeType;
  metadata?: {
  readonly [key: string]: string | undefined;
} | null;
  flags?: (DiscordHttpApiSchemaJsonValue | 1);
};

export type DiscordHttpApiSchemaLobbyGuildInviteResponse = {
  code: string;
};

export type DiscordHttpApiSchemaBulkLobbyMemberRequest = {
  id: DiscordHttpApiSchemaSnowflakeType;
  metadata?: {
  readonly [key: string]: string | undefined;
} | null;
  flags?: (DiscordHttpApiSchemaJsonValue | 1);
  remove_member?: boolean | null;
};

export type DiscordHttpApiSchemaLobbyMemberResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  metadata: {
  readonly [key: string]: string | undefined;
} | null;
  flags: number;
};

export type DiscordHttpApiSchemaLobbyMessageResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: DiscordHttpApiSchemaMessageType;
  content: string;
  lobby_id: DiscordHttpApiSchemaSnowflakeType;
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  author: DiscordHttpApiSchemaUserResponse;
  metadata?: {
  readonly [key: string]: string | undefined;
};
  moderation_metadata?: {
  readonly [key: string]: string | undefined;
};
  flags: number;
  application_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaSDKMessageRequest = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  sticker_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  flags?: number | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
  poll?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollCreateRequest);
  shared_client_theme?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaCustomClientThemeShareRequest);
  message_reference?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageReferenceRequest);
  nonce?: (number | string | DiscordHttpApiSchemaJsonValue);
  enforce_nonce?: boolean | null;
  tts?: boolean | null;
};

export type DiscordHttpApiSchemaOAuth2GetAuthorizationResponse = {
  application: DiscordHttpApiSchemaApplicationResponse;
  expires: string;
  scopes: ReadonlyArray<DiscordHttpApiSchemaOAuth2Scopes>;
  user?: DiscordHttpApiSchemaUserResponse;
};

export type DiscordHttpApiSchemaOAuth2GetKeys = {
  keys: ReadonlyArray<DiscordHttpApiSchemaOAuth2Key>;
};

export type DiscordHttpApiSchemaOAuth2GetOpenIDConnectUserInfoResponse = {
  sub: string;
  email?: string | null;
  email_verified?: boolean;
  preferred_username?: string;
  nickname?: string | null;
  picture?: string;
  locale?: string;
};

export type DiscordHttpApiSchemaApplicationIdentityProviderAuthType = ("OIDC" | "EPIC_ONLINE_SERVICES_ACCESS_TOKEN" | "EPIC_ONLINE_SERVICES_ID_TOKEN" | "STEAM_SESSION_TICKET" | "UNITY_SERVICES_ID_TOKEN" | "DISCORD_BOT_ISSUED_ACCESS_TOKEN" | "APPLE_ID_TOKEN" | "PLAYSTATION_NETWORK_ID_TOKEN");

export type DiscordHttpApiSchemaProvisionalTokenResponse = {
  token_type: string;
  access_token: string;
  expires_in: number;
  scope: string;
  id_token: string;
  refresh_token?: string | null;
  scopes?: ReadonlyArray<string> | null;
  expires_at_s?: number | null;
};

export type DiscordHttpApiSchemaSubscriptionResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  user_id: DiscordHttpApiSchemaSnowflakeType;
  sku_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  renewal_sku_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  entitlement_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  current_period_start: string;
  current_period_end: string;
  status: DiscordHttpApiSchemaSubscriptionResponseStatusType;
  canceled_at: string | null;
  country?: string | null;
};

export type DiscordHttpApiSchemaStageInstancesPrivacyLevels = (1 | 2);

export type DiscordHttpApiSchemaStageInstanceResponse = {
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  topic: string;
  privacy_level: DiscordHttpApiSchemaStageInstancesPrivacyLevels;
  id: DiscordHttpApiSchemaSnowflakeType;
  discoverable_disabled: boolean;
  guild_scheduled_event_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaStickerPackCollectionResponse = {
  sticker_packs: ReadonlyArray<DiscordHttpApiSchemaStickerPackResponse>;
};

export type DiscordHttpApiSchemaStickerPackResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  sku_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  description: string | null;
  stickers: ReadonlyArray<DiscordHttpApiSchemaStandardStickerResponse>;
  cover_sticker_id?: DiscordHttpApiSchemaSnowflakeType;
  banner_asset_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaStandardStickerResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  tags: string;
  type: 1;
  format_type: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaStickerFormatTypes);
  description: string | null;
  pack_id: DiscordHttpApiSchemaSnowflakeType;
  sort_value: number;
};

export type DiscordHttpApiSchemaUserPIIResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  username: string;
  avatar: string | null;
  discriminator: string;
  public_flags: number;
  flags: DiscordHttpApiSchemaInt53Type;
  bot?: boolean;
  system?: boolean;
  banner?: string | null;
  accent_color?: number | null;
  global_name: string | null;
  avatar_decoration_data?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserAvatarDecorationResponse);
  collectibles?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserCollectiblesResponse);
  primary_guild?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserPrimaryGuildResponse);
  mfa_enabled: boolean;
  locale: DiscordHttpApiSchemaAvailableLocalesEnum;
  premium_type?: DiscordHttpApiSchemaPremiumTypes;
  email?: string | null;
  verified?: boolean;
};

export type DiscordHttpApiSchemaBotAccountPatchRequest = {
  username: string;
  avatar?: string | null;
  banner?: string | null;
};

export type DiscordHttpApiSchemaApplicationUserRoleConnectionResponse = {
  platform_name?: string;
  platform_username?: string | null;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};

export type DiscordHttpApiSchemaUpdateApplicationUserRoleConnectionRequest = {
  platform_name?: string | null;
  platform_username?: string | null;
  metadata?: {
  readonly [key: string]: string | undefined;
} | null;
};

export type DiscordHttpApiSchemaCreatePrivateChannelRequest = {
  recipient_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  access_tokens?: ReadonlyArray<string> | null;
  nicks?: {
  readonly [key: string]: string | null | undefined;
} | null;
};

export type DiscordHttpApiSchemaConnectedAccountResponse = {
  id: string;
  name: string | null;
  type: DiscordHttpApiSchemaConnectedAccountProviders;
  friend_sync: boolean;
  integrations?: ReadonlyArray<DiscordHttpApiSchemaConnectedAccountIntegrationResponse>;
  show_activity: boolean;
  two_way_link: boolean;
  verified: boolean;
  visibility: DiscordHttpApiSchemaConnectedAccountVisibility;
  revoked?: boolean;
};

export type DiscordHttpApiSchemaMyGuildResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  banner: string | null;
  owner: boolean;
  permissions: string;
  features: ReadonlyArray<DiscordHttpApiSchemaGuildFeatures>;
  approximate_member_count?: number | null;
  approximate_presence_count?: number | null;
};

export type DiscordHttpApiSchemaIncomingWebhookRequestPartial = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
  poll?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollCreateRequest);
  tts?: boolean | null;
  flags?: number | null;
  username?: string | null;
  avatar_url?: string | null;
  thread_name?: string | null;
  applied_tags?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
};

export type DiscordHttpApiSchemaIncomingWebhookUpdateRequestPartial = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
  poll?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollCreateRequest);
  flags?: number | null;
};

export type DiscordHttpApiSchemaGithubWebhook = {
  action?: string | null;
  ref?: string | null;
  ref_type?: string | null;
  comment?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubComment);
  issue?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubIssue);
  pull_request?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubIssue);
  repository?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubRepository);
  forkee?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubRepository);
  sender: DiscordHttpApiSchemaGithubUser;
  member?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubUser);
  release?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubRelease);
  head_commit?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubCommit);
  commits?: ReadonlyArray<DiscordHttpApiSchemaGithubCommit> | null;
  forced?: boolean | null;
  compare?: string | null;
  review?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubReview);
  check_run?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubCheckRun);
  check_suite?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubCheckSuite);
  discussion?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubDiscussion);
  answer?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubComment);
};

export type DiscordHttpApiSchemaSlackWebhook = {
  text?: string | null;
  username?: string | null;
  icon_url?: string | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaWebhookSlackEmbed> | null;
};

export type DiscordHttpApiSchemaApplicationTypes = 4;

export type DiscordHttpApiSchemaApplicationOAuth2InstallParamsResponse = {
  scopes: ReadonlyArray<"applications.commands" | "bot">;
  permissions: string;
};

export type DiscordHttpApiSchemaApplicationIntegrationTypeConfigurationResponse = {
  oauth2_install_params?: DiscordHttpApiSchemaApplicationOAuth2InstallParamsResponse;
};

export type DiscordHttpApiSchemaApplicationEventWebhooksStatus = (1 | 2 | 3);

export type DiscordHttpApiSchemaApplicationExplicitContentFilterTypes = (0 | 1);

export type DiscordHttpApiSchemaTeamResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  icon: string | null;
  name: string;
  owner_user_id: DiscordHttpApiSchemaSnowflakeType;
  members: ReadonlyArray<DiscordHttpApiSchemaTeamMemberResponse>;
};

export type DiscordHttpApiSchemaApplicationOAuth2InstallParams = {
  scopes?: ReadonlyArray<"applications.commands" | "bot"> | null;
  permissions?: number | null;
};

export type DiscordHttpApiSchemaApplicationIntegrationTypeConfiguration = {
  oauth2_install_params?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationOAuth2InstallParams);
};

export type DiscordHttpApiSchemaGuildChannelLocation = {
  id: string;
  kind: "gc";
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaPrivateChannelLocation = {
  id: string;
  kind: "pc";
  channel_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaAttachmentResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  width?: number;
  height?: number;
  duration_secs?: number;
  waveform?: string;
  description?: string;
  content_type?: string;
  ephemeral?: boolean;
  flags?: number;
  placeholder?: string;
  placeholder_version?: number;
  title?: string | null;
  application?: DiscordHttpApiSchemaApplicationResponse;
  clip_created_at?: string;
  clip_participants?: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
};

export type DiscordHttpApiSchemaApplicationCommandType = (1 | 2 | 3 | 4);

export type DiscordHttpApiSchemaInteractionContextType = (0 | 1 | 2);

export type DiscordHttpApiSchemaApplicationIntegrationType = (0 | 1);

export type DiscordHttpApiSchemaApplicationCommandAttachmentOptionResponse = {
  type: 11;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
};

export type DiscordHttpApiSchemaApplicationCommandBooleanOptionResponse = {
  type: 5;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
};

export type DiscordHttpApiSchemaApplicationCommandChannelOptionResponse = {
  type: 7;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
  channel_types?: ReadonlyArray<DiscordHttpApiSchemaChannelTypes>;
};

export type DiscordHttpApiSchemaApplicationCommandIntegerOptionResponse = {
  type: 4;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
  autocomplete?: boolean;
  choices?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandOptionIntegerChoiceResponse>;
  min_value?: DiscordHttpApiSchemaInt53Type;
  max_value?: DiscordHttpApiSchemaInt53Type;
};

export type DiscordHttpApiSchemaApplicationCommandMentionableOptionResponse = {
  type: 9;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
};

export type DiscordHttpApiSchemaApplicationCommandNumberOptionResponse = {
  type: 10;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
  autocomplete?: boolean;
  choices?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandOptionNumberChoiceResponse>;
  min_value?: number;
  max_value?: number;
};

export type DiscordHttpApiSchemaApplicationCommandRoleOptionResponse = {
  type: 8;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
};

export type DiscordHttpApiSchemaApplicationCommandStringOptionResponse = {
  type: 3;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
  autocomplete?: boolean;
  choices?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandOptionStringChoiceResponse>;
  min_length?: number;
  max_length?: number;
};

export type DiscordHttpApiSchemaApplicationCommandSubcommandGroupOptionResponse = {
  type: 2;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
  options?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandSubcommandOptionResponse>;
};

export type DiscordHttpApiSchemaApplicationCommandSubcommandOptionResponse = {
  type: 1;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
  options?: ReadonlyArray<(DiscordHttpApiSchemaApplicationCommandAttachmentOptionResponse | DiscordHttpApiSchemaApplicationCommandBooleanOptionResponse | DiscordHttpApiSchemaApplicationCommandChannelOptionResponse | DiscordHttpApiSchemaApplicationCommandIntegerOptionResponse | DiscordHttpApiSchemaApplicationCommandMentionableOptionResponse | DiscordHttpApiSchemaApplicationCommandNumberOptionResponse | DiscordHttpApiSchemaApplicationCommandRoleOptionResponse | DiscordHttpApiSchemaApplicationCommandStringOptionResponse | DiscordHttpApiSchemaApplicationCommandUserOptionResponse)>;
};

export type DiscordHttpApiSchemaApplicationCommandUserOptionResponse = {
  type: 6;
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localized?: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean;
};

export type DiscordHttpApiSchemaApplicationCommandHandler = (1 | 2);

export type DiscordHttpApiSchemaApplicationCommandAttachmentOption = {
  type: 11;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
};

export type DiscordHttpApiSchemaApplicationCommandBooleanOption = {
  type: 5;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
};

export type DiscordHttpApiSchemaApplicationCommandChannelOption = {
  type: 7;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
  channel_types?: ReadonlyArray<DiscordHttpApiSchemaChannelTypes> | null;
};

export type DiscordHttpApiSchemaApplicationCommandIntegerOption = {
  type: 4;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
  autocomplete?: boolean | null;
  choices?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandOptionIntegerChoice> | null;
  min_value?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaInt53Type);
  max_value?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaInt53Type);
};

export type DiscordHttpApiSchemaApplicationCommandMentionableOption = {
  type: 9;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
};

export type DiscordHttpApiSchemaApplicationCommandNumberOption = {
  type: 10;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
  autocomplete?: boolean | null;
  choices?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandOptionNumberChoice> | null;
  min_value?: number | null;
  max_value?: number | null;
};

export type DiscordHttpApiSchemaApplicationCommandRoleOption = {
  type: 8;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
};

export type DiscordHttpApiSchemaApplicationCommandStringOption = {
  type: 3;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
  autocomplete?: boolean | null;
  min_length?: number | null;
  max_length?: number | null;
  choices?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandOptionStringChoice> | null;
};

export type DiscordHttpApiSchemaApplicationCommandSubcommandGroupOption = {
  type: 2;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
  options?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandSubcommandOption> | null;
};

export type DiscordHttpApiSchemaApplicationCommandSubcommandOption = {
  type: 1;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
  options?: ReadonlyArray<(DiscordHttpApiSchemaApplicationCommandAttachmentOption | DiscordHttpApiSchemaApplicationCommandBooleanOption | DiscordHttpApiSchemaApplicationCommandChannelOption | DiscordHttpApiSchemaApplicationCommandIntegerOption | DiscordHttpApiSchemaApplicationCommandMentionableOption | DiscordHttpApiSchemaApplicationCommandNumberOption | DiscordHttpApiSchemaApplicationCommandRoleOption | DiscordHttpApiSchemaApplicationCommandStringOption | DiscordHttpApiSchemaApplicationCommandUserOption)> | null;
};

export type DiscordHttpApiSchemaApplicationCommandUserOption = {
  type: 6;
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  description: string;
  description_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  required?: boolean | null;
};

export type DiscordHttpApiSchemaError = {
  code: number;
  message: string;
};

export type DiscordHttpApiSchemaEntitlementTypes = (8 | 10);

export type DiscordHttpApiSchemaEntitlementTenantFulfillmentStatusResponse = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7);

export type DiscordHttpApiSchemaEntitlementOwnerTypes = (1 | 2);

export type DiscordHttpApiSchemaCommandPermissionResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: DiscordHttpApiSchemaApplicationCommandPermissionType;
  permission: boolean;
};

export type DiscordHttpApiSchemaApplicationCommandPermissionType = (1 | 2 | 3);

export type DiscordHttpApiSchemaMetadataItemTypes = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8);

export type DiscordHttpApiSchemaVideoQualityModes = (1 | 2);

export type DiscordHttpApiSchemaThreadAutoArchiveDuration = (60 | 1440 | 4320 | 10080);

export type DiscordHttpApiSchemaChannelPermissionOverwriteResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: DiscordHttpApiSchemaChannelPermissionOverwrites;
  allow: string;
  deny: string;
};

export type DiscordHttpApiSchemaForumTagResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  moderated: boolean;
  emoji_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name: string | null;
};

export type DiscordHttpApiSchemaDefaultReactionEmojiResponse = {
  emoji_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name: string | null;
};

export type DiscordHttpApiSchemaThreadSortOrder = (0 | 1);

export type DiscordHttpApiSchemaForumLayout = (0 | 1 | 2);

export type DiscordHttpApiSchemaThreadMetadataResponse = {
  archived: boolean;
  archive_timestamp: string | null;
  auto_archive_duration: DiscordHttpApiSchemaThreadAutoArchiveDuration;
  locked: boolean;
  create_timestamp?: string;
  invitable?: boolean;
};

export type DiscordHttpApiSchemaChannelPermissionOverwriteRequest = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaChannelPermissionOverwrites);
  allow?: number | null;
  deny?: number | null;
};

export type DiscordHttpApiSchemaUpdateDefaultReactionEmojiRequest = {
  emoji_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name?: string | null;
};

export type DiscordHttpApiSchemaUpdateThreadTagRequest = {
  name: string;
  emoji_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name?: string | null;
  moderated?: boolean | null;
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaInviteChannelResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: DiscordHttpApiSchemaChannelTypes;
  name: string | null;
  icon?: string;
  recipients?: ReadonlyArray<DiscordHttpApiSchemaInviteChannelRecipientResponse>;
};

export type DiscordHttpApiSchemaInviteGuildResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  splash: string | null;
  banner: string | null;
  description: string | null;
  icon: string | null;
  features: ReadonlyArray<DiscordHttpApiSchemaGuildFeatures>;
  verification_level: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaVerificationLevels);
  vanity_url_code: string | null;
  nsfw_level: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildNSFWContentLevel);
  nsfw: boolean | null;
  premium_subscription_count: number;
};

export type DiscordHttpApiSchemaInviteTargetTypes = (1 | 2 | 3);

export type DiscordHttpApiSchemaInviteApplicationResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string;
  type: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationTypes);
  cover_image?: string;
  primary_sku_id?: DiscordHttpApiSchemaSnowflakeType;
  bot?: DiscordHttpApiSchemaUserResponse;
  slug?: string;
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
  rpc_origins?: ReadonlyArray<string>;
  bot_public?: boolean;
  bot_require_code_grant?: boolean;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  custom_install_url?: string;
  install_params?: DiscordHttpApiSchemaApplicationOAuth2InstallParamsResponse;
  integration_types_config?: {
  readonly [key: string]: DiscordHttpApiSchemaApplicationIntegrationTypeConfigurationResponse | undefined;
};
  verify_key: string;
  flags: number;
  flags_new: string;
  max_participants?: number | null;
  tags?: ReadonlyArray<string>;
};

export type DiscordHttpApiSchemaScheduledEventResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  description: string | null;
  channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  creator?: DiscordHttpApiSchemaUserResponse;
  image: string | null;
  scheduled_start_time: string;
  scheduled_end_time: string | null;
  status: DiscordHttpApiSchemaGuildScheduledEventStatuses;
  entity_type: DiscordHttpApiSchemaGuildScheduledEventEntityTypes;
  entity_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  recurrence_rule: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRecurrenceRuleResponse);
  user_count?: number;
  privacy_level: DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels;
  user_rsvp?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaScheduledEventUserResponse);
  guild_scheduled_event_exceptions: ReadonlyArray<DiscordHttpApiSchemaGuildScheduledEventExceptionResponse>;
};

export type DiscordHttpApiSchemaInviteGuildRoleResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  position: number;
  color: number;
  colors: DiscordHttpApiSchemaGuildRoleColorsResponse;
  icon: string | null;
  unicode_emoji: string | null;
  permissions?: string;
};

export type DiscordHttpApiSchemaMessageType = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 31 | 32 | 36 | 37 | 38 | 39 | 46 | 55);

export type DiscordHttpApiSchemaMessageAttachmentResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  width?: number;
  height?: number;
  duration_secs?: number;
  waveform?: string;
  description?: string;
  content_type?: string;
  ephemeral?: boolean;
  flags?: number;
  placeholder?: string;
  placeholder_version?: number;
  title?: string | null;
  application?: DiscordHttpApiSchemaApplicationResponse;
  clip_created_at?: string;
  clip_participants?: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
};

export type DiscordHttpApiSchemaMessageEmbedResponse = {
  type: string;
  url?: string;
  title?: string;
  description?: string;
  color?: number;
  timestamp?: string;
  fields?: ReadonlyArray<DiscordHttpApiSchemaMessageEmbedFieldResponse>;
  author?: DiscordHttpApiSchemaMessageEmbedAuthorResponse;
  provider?: DiscordHttpApiSchemaMessageEmbedProviderResponse;
  image?: DiscordHttpApiSchemaMessageEmbedImageResponse;
  thumbnail?: DiscordHttpApiSchemaMessageEmbedImageResponse;
  video?: DiscordHttpApiSchemaMessageEmbedVideoResponse;
  footer?: DiscordHttpApiSchemaMessageEmbedFooterResponse;
  flags?: number | null;
  components?: ReadonlyArray<DiscordHttpApiSchemaContainerComponentResponse>;
};

export type DiscordHttpApiSchemaActionRowComponentResponse = {
  type: 1;
  id: number;
  components: ReadonlyArray<(DiscordHttpApiSchemaButtonComponentResponse | DiscordHttpApiSchemaChannelSelectComponentResponse | DiscordHttpApiSchemaMentionableSelectComponentResponse | DiscordHttpApiSchemaRoleSelectComponentResponse | DiscordHttpApiSchemaStringSelectComponentResponse | DiscordHttpApiSchemaTextInputComponentResponse | DiscordHttpApiSchemaUserSelectComponentResponse)>;
};

export type DiscordHttpApiSchemaContainerComponentResponse = {
  type: 17;
  id: number;
  accent_color: number | null;
  components: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentResponse | DiscordHttpApiSchemaFileComponentResponse | DiscordHttpApiSchemaMediaGalleryComponentResponse | DiscordHttpApiSchemaSectionComponentResponse | DiscordHttpApiSchemaSeparatorComponentResponse | DiscordHttpApiSchemaTextDisplayComponentResponse)>;
  spoiler: boolean;
};

export type DiscordHttpApiSchemaFileComponentResponse = {
  type: 13;
  id: number;
  file: DiscordHttpApiSchemaUnfurledMediaResponse;
  name: string | null;
  size: number | null;
  spoiler: boolean;
};

export type DiscordHttpApiSchemaMediaGalleryComponentResponse = {
  type: 12;
  id: number;
  items: ReadonlyArray<DiscordHttpApiSchemaMediaGalleryItemResponse>;
};

export type DiscordHttpApiSchemaSectionComponentResponse = {
  type: 9;
  id: number;
  components: ReadonlyArray<DiscordHttpApiSchemaTextDisplayComponentResponse>;
  accessory: (DiscordHttpApiSchemaButtonComponentResponse | DiscordHttpApiSchemaThumbnailComponentResponse);
};

export type DiscordHttpApiSchemaSeparatorComponentResponse = {
  type: 14;
  id: number;
  spacing: DiscordHttpApiSchemaMessageComponentSeparatorSpacingSize;
  divider: boolean;
};

export type DiscordHttpApiSchemaTextDisplayComponentResponse = {
  type: 10;
  id: number;
  content: string;
};

export type DiscordHttpApiSchemaMessageStickerItemResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  format_type: DiscordHttpApiSchemaStickerFormatTypes;
};

export type DiscordHttpApiSchemaMessageCallResponse = {
  ended_timestamp?: string | null;
  participants: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
};

export type DiscordHttpApiSchemaMessageActivityResponse = {
  type: DiscordHttpApiSchemaActivityActionTypes;
  party_id?: string;
};

export type DiscordHttpApiSchemaBasicApplicationResponseWithBot = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string;
  type: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationTypes);
  cover_image?: string;
  primary_sku_id?: DiscordHttpApiSchemaSnowflakeType;
  bot?: DiscordHttpApiSchemaUserResponse;
};

export type DiscordHttpApiSchemaMessageInteractionResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: DiscordHttpApiSchemaInteractionTypes;
  name: string;
  user?: DiscordHttpApiSchemaUserResponse;
  name_localized?: string;
};

export type DiscordHttpApiSchemaMessageReferenceResponse = {
  type: DiscordHttpApiSchemaMessageReferenceType;
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  message_id?: DiscordHttpApiSchemaSnowflakeType;
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaMessageMentionChannelResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  type: DiscordHttpApiSchemaChannelTypes;
  guild_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaMessageRoleSubscriptionDataResponse = {
  role_subscription_listing_id: DiscordHttpApiSchemaSnowflakeType;
  tier_name: string;
  total_months_subscribed: number;
  is_renewal: boolean;
};

export type DiscordHttpApiSchemaPurchaseNotificationResponse = {
  type: DiscordHttpApiSchemaPurchaseType;
  guild_product_purchase?: DiscordHttpApiSchemaGuildProductPurchaseResponse;
};

export type DiscordHttpApiSchemaResolvedObjectsResponse = {
  users?: {
  readonly [key: string]: DiscordHttpApiSchemaUserResponse | undefined;
} | null;
  members?: {
  readonly [key: string]: DiscordHttpApiSchemaBasicGuildMemberResponse | undefined;
} | null;
  channels?: {
  readonly [key: string]: (DiscordHttpApiSchemaGuildChannelResponse | DiscordHttpApiSchemaPrivateChannelResponse | DiscordHttpApiSchemaPrivateGroupChannelResponse | DiscordHttpApiSchemaThreadResponse) | undefined;
} | null;
  roles?: {
  readonly [key: string]: DiscordHttpApiSchemaGuildRoleResponse | undefined;
} | null;
};

export type DiscordHttpApiSchemaPollResponse = {
  question: DiscordHttpApiSchemaPollMediaResponse;
  answers: ReadonlyArray<DiscordHttpApiSchemaPollAnswerResponse>;
  expiry: string;
  allow_multiselect: boolean;
  layout_type: DiscordHttpApiSchemaPollLayoutTypes;
  results: DiscordHttpApiSchemaPollResultsResponse;
};

export type DiscordHttpApiSchemaCustomClientThemeResponse = {
  colors: ReadonlyArray<string>;
  gradient_angle: number;
  base_mix: number;
  base_theme: DiscordHttpApiSchemaMessageShareCustomUserThemeBaseTheme;
};

export type DiscordHttpApiSchemaApplicationCommandInteractionMetadataResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 2;
  user?: DiscordHttpApiSchemaUserResponse;
  authorizing_integration_owners: {
  readonly [key: string]: DiscordHttpApiSchemaSnowflakeType | undefined;
};
  original_response_message_id?: DiscordHttpApiSchemaSnowflakeType;
  target_user?: DiscordHttpApiSchemaUserResponse;
  target_message_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaMessageComponentInteractionMetadataResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 3;
  user?: DiscordHttpApiSchemaUserResponse;
  authorizing_integration_owners: {
  readonly [key: string]: DiscordHttpApiSchemaSnowflakeType | undefined;
};
  original_response_message_id?: DiscordHttpApiSchemaSnowflakeType;
  interacted_message_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaModalSubmitInteractionMetadataResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: 5;
  user?: DiscordHttpApiSchemaUserResponse;
  authorizing_integration_owners: {
  readonly [key: string]: DiscordHttpApiSchemaSnowflakeType | undefined;
};
  original_response_message_id?: DiscordHttpApiSchemaSnowflakeType;
  triggering_interaction_metadata: (DiscordHttpApiSchemaApplicationCommandInteractionMetadataResponse | DiscordHttpApiSchemaMessageComponentInteractionMetadataResponse);
};

export type DiscordHttpApiSchemaMessageSnapshotResponse = {
  message: DiscordHttpApiSchemaMinimalContentMessageResponse;
};

export type DiscordHttpApiSchemaMessageReactionResponse = {
  emoji: DiscordHttpApiSchemaMessageReactionEmojiResponse;
  count: number;
  count_details: DiscordHttpApiSchemaMessageReactionCountDetailsResponse;
  burst_colors: ReadonlyArray<string>;
  me_burst: boolean;
  me: boolean;
};

export type DiscordHttpApiSchemaBasicMessageResponse = {
  type: DiscordHttpApiSchemaMessageType;
  content: string;
  mentions: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
  mention_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  attachments: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentResponse>;
  embeds: ReadonlyArray<DiscordHttpApiSchemaMessageEmbedResponse>;
  timestamp: string;
  edited_timestamp: string | null;
  flags: number;
  components: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentResponse | DiscordHttpApiSchemaContainerComponentResponse | DiscordHttpApiSchemaFileComponentResponse | DiscordHttpApiSchemaMediaGalleryComponentResponse | DiscordHttpApiSchemaSectionComponentResponse | DiscordHttpApiSchemaSeparatorComponentResponse | DiscordHttpApiSchemaTextDisplayComponentResponse)>;
  stickers?: ReadonlyArray<(DiscordHttpApiSchemaGuildStickerResponse | DiscordHttpApiSchemaStandardStickerResponse)>;
  sticker_items?: ReadonlyArray<DiscordHttpApiSchemaMessageStickerItemResponse>;
  id: DiscordHttpApiSchemaSnowflakeType;
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  author: DiscordHttpApiSchemaUserResponse;
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  call?: DiscordHttpApiSchemaMessageCallResponse;
  activity?: DiscordHttpApiSchemaMessageActivityResponse;
  application?: DiscordHttpApiSchemaBasicApplicationResponseWithBot;
  application_id?: DiscordHttpApiSchemaSnowflakeType;
  interaction?: DiscordHttpApiSchemaMessageInteractionResponse;
  nonce?: (number | string);
  webhook_id?: DiscordHttpApiSchemaSnowflakeType;
  message_reference?: DiscordHttpApiSchemaMessageReferenceResponse;
  thread?: DiscordHttpApiSchemaThreadResponse;
  mention_channels?: ReadonlyArray<DiscordHttpApiSchemaMessageMentionChannelResponse>;
  role_subscription_data?: DiscordHttpApiSchemaMessageRoleSubscriptionDataResponse;
  purchase_notification?: DiscordHttpApiSchemaPurchaseNotificationResponse;
  position?: number;
  resolved?: DiscordHttpApiSchemaResolvedObjectsResponse;
  poll?: DiscordHttpApiSchemaPollResponse;
  shared_client_theme?: DiscordHttpApiSchemaCustomClientThemeResponse;
  interaction_metadata?: (DiscordHttpApiSchemaApplicationCommandInteractionMetadataResponse | DiscordHttpApiSchemaMessageComponentInteractionMetadataResponse | DiscordHttpApiSchemaModalSubmitInteractionMetadataResponse);
  message_snapshots?: ReadonlyArray<DiscordHttpApiSchemaMessageSnapshotResponse>;
};

export type DiscordHttpApiSchemaRichEmbed = {
  type?: string | null;
  url?: string | null;
  title?: string | null;
  color?: number | null;
  timestamp?: string | null;
  description?: string | null;
  author?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRichEmbedAuthor);
  image?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRichEmbedImage);
  thumbnail?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRichEmbedThumbnail);
  footer?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRichEmbedFooter);
  fields?: ReadonlyArray<DiscordHttpApiSchemaRichEmbedField> | null;
  provider?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRichEmbedProvider);
  video?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaRichEmbedVideo);
};

export type DiscordHttpApiSchemaMessageAllowedMentionsRequest = {
  parse?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaAllowedMentionTypes)> | null;
  users?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)> | null;
  roles?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)> | null;
  replied_user?: boolean | null;
};

export type DiscordHttpApiSchemaActionRowComponentForMessageRequest = {
  type: 1;
  id?: number | null;
  components: ReadonlyArray<(DiscordHttpApiSchemaButtonComponentForMessageRequest | DiscordHttpApiSchemaChannelSelectComponentForMessageRequest | DiscordHttpApiSchemaMentionableSelectComponentForMessageRequest | DiscordHttpApiSchemaRoleSelectComponentForMessageRequest | DiscordHttpApiSchemaStringSelectComponentForMessageRequest | DiscordHttpApiSchemaUserSelectComponentForMessageRequest)>;
};

export type DiscordHttpApiSchemaContainerComponentForMessageRequest = {
  type: 17;
  id?: number | null;
  accent_color?: number | null;
  components: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)>;
  spoiler?: boolean | null;
};

export type DiscordHttpApiSchemaFileComponentForMessageRequest = {
  type: 13;
  id?: number | null;
  spoiler?: boolean | null;
  file: DiscordHttpApiSchemaUnfurledMediaRequestWithAttachmentReferenceRequired;
};

export type DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest = {
  type: 12;
  id?: number | null;
  items: ReadonlyArray<DiscordHttpApiSchemaMediaGalleryItemRequest>;
};

export type DiscordHttpApiSchemaSectionComponentForMessageRequest = {
  type: 9;
  id?: number | null;
  components: ReadonlyArray<DiscordHttpApiSchemaTextDisplayComponentForMessageRequest>;
  accessory: (DiscordHttpApiSchemaButtonComponentForMessageRequest | DiscordHttpApiSchemaThumbnailComponentForMessageRequest);
};

export type DiscordHttpApiSchemaSeparatorComponentForMessageRequest = {
  type: 14;
  id?: number | null;
  spacing?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageComponentSeparatorSpacingSize);
  divider?: boolean | null;
};

export type DiscordHttpApiSchemaTextDisplayComponentForMessageRequest = {
  type: 10;
  id?: number | null;
  content: string;
};

export type DiscordHttpApiSchemaMessageAttachmentRequest = {
  id: DiscordHttpApiSchemaSnowflakeType;
  filename?: string | null;
  description?: string | null;
  duration_secs?: number | null;
  waveform?: string | null;
  title?: string | null;
  is_remix?: boolean | null;
};

export type DiscordHttpApiSchemaPollCreateRequest = {
  question: DiscordHttpApiSchemaPollMedia;
  answers: ReadonlyArray<DiscordHttpApiSchemaPollAnswerCreateRequest>;
  allow_multiselect?: boolean | null;
  layout_type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollLayoutTypes);
  duration?: number | null;
};

export type DiscordHttpApiSchemaCustomClientThemeShareRequest = {
  colors: ReadonlyArray<string>;
  gradient_angle: number;
  base_mix: number;
  base_theme?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageShareCustomUserThemeBaseTheme);
};

export type DiscordHttpApiSchemaMessageReferenceRequest = {
  guild_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  message_id: DiscordHttpApiSchemaSnowflakeType;
  fail_if_not_exists?: boolean | null;
  type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageReferenceType);
};

export type DiscordHttpApiSchemaPinnedMessageResponse = {
  pinned_at: string;
  message: DiscordHttpApiSchemaMessageResponse;
};

export type DiscordHttpApiSchemaInt53Type = number;

export type DiscordHttpApiSchemaUserAvatarDecorationResponse = {
  asset: string;
  sku_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};

export type DiscordHttpApiSchemaUserCollectiblesResponse = {
  nameplate: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserNameplateResponse);
};

export type DiscordHttpApiSchemaUserPrimaryGuildResponse = {
  identity_guild_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  identity_enabled: boolean | null;
  tag: string | null;
  badge: string | null;
};

export type DiscordHttpApiSchemaBaseCreateMessageCreateRequest = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  sticker_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  flags?: number | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
  poll?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollCreateRequest);
  shared_client_theme?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaCustomClientThemeShareRequest);
};

export type DiscordHttpApiSchemaWebhookSourceGuildResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  icon: string | null;
  name: string;
};

export type DiscordHttpApiSchemaWebhookSourceChannelResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
};

export type DiscordHttpApiSchemaGatewayBotSessionStartLimitResponse = {
  max_concurrency: number;
  remaining: number;
  reset_after: number;
  total: number;
};

export type DiscordHttpApiSchemaGuildTemplateSnapshotResponse = {
  name: string;
  description: string | null;
  region: string | null;
  verification_level: DiscordHttpApiSchemaVerificationLevels;
  default_message_notifications: DiscordHttpApiSchemaUserNotificationSettings;
  explicit_content_filter: DiscordHttpApiSchemaGuildExplicitContentFilterTypes;
  preferred_locale: DiscordHttpApiSchemaAvailableLocalesEnum;
  afk_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  afk_timeout: DiscordHttpApiSchemaAfkTimeouts;
  system_channel_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  system_channel_flags: number;
  roles: ReadonlyArray<DiscordHttpApiSchemaGuildTemplateRoleResponse>;
  channels: ReadonlyArray<DiscordHttpApiSchemaGuildTemplateChannelResponse>;
};

export type DiscordHttpApiSchemaGuildFeatures = ("ANIMATED_BANNER" | "ANIMATED_ICON" | "APPLICATION_COMMAND_PERMISSIONS_V2" | "AUTO_MODERATION" | "BANNER" | "COMMUNITY" | "CREATOR_MONETIZABLE_PROVISIONAL" | "CREATOR_STORE_PAGE" | "DEVELOPER_SUPPORT_SERVER" | "DISCOVERABLE" | "FEATURABLE" | "INVITES_DISABLED" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "RAID_ALERTS_DISABLED" | "ROLE_ICONS" | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" | "ROLE_SUBSCRIPTIONS_ENABLED" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED" | "OFFICIAL_GAME_GUILD");

export type DiscordHttpApiSchemaAfkTimeouts = (60 | 300 | 900 | 1800 | 3600);

export type DiscordHttpApiSchemaVerificationLevels = (0 | 1 | 2 | 3 | 4);

export type DiscordHttpApiSchemaUserNotificationSettings = (0 | 1);

export type DiscordHttpApiSchemaGuildMFALevel = (0 | 1);

export type DiscordHttpApiSchemaGuildExplicitContentFilterTypes = (0 | 1 | 2);

export type DiscordHttpApiSchemaPremiumGuildTiers = (0 | 1 | 2 | 3);

export type DiscordHttpApiSchemaAvailableLocalesEnum = ("ar" | "bg" | "cs" | "da" | "de" | "el" | "en-GB" | "en-US" | "es-419" | "es-ES" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt-BR" | "ro" | "ru" | "sv-SE" | "th" | "tr" | "uk" | "vi" | "zh-CN" | "zh-TW");

export type DiscordHttpApiSchemaGuildNSFWContentLevel = (0 | 1 | 2 | 3);

export type DiscordHttpApiSchemaAuditLogEntryResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  action_type: DiscordHttpApiSchemaAuditLogActionTypes;
  user_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  target_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  changes?: ReadonlyArray<DiscordHttpApiSchemaAuditLogObjectChangeResponse>;
  options?: {
  readonly [key: string]: string | undefined;
};
  reason?: string;
};

export type DiscordHttpApiSchemaPartialDiscordIntegrationResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: "discord";
  name: string | null;
  account: DiscordHttpApiSchemaAccountResponse;
  application_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaPartialExternalConnectionIntegrationResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: "twitch" | "youtube";
  name: string | null;
  account: DiscordHttpApiSchemaAccountResponse;
};

export type DiscordHttpApiSchemaPartialGuildSubscriptionIntegrationResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: "guild_subscription";
  name: string | null;
  account: DiscordHttpApiSchemaAccountResponse;
};

export type DiscordHttpApiSchemaAutomodEventType = (1 | 2);

export type DiscordHttpApiSchemaBlockMessageActionResponse = {
  type: 1;
  metadata: DiscordHttpApiSchemaBlockMessageActionMetadataResponse;
};

export type DiscordHttpApiSchemaFlagToChannelActionResponse = {
  type: 2;
  metadata: DiscordHttpApiSchemaFlagToChannelActionMetadataResponse;
};

export type DiscordHttpApiSchemaQuarantineUserActionResponse = {
  type: 4;
  metadata: DiscordHttpApiSchemaQuarantineUserActionMetadataResponse;
};

export type DiscordHttpApiSchemaUserCommunicationDisabledActionResponse = {
  type: 3;
  metadata: DiscordHttpApiSchemaUserCommunicationDisabledActionMetadataResponse;
};

export type DiscordHttpApiSchemaDefaultKeywordListTriggerMetadataResponse = {
  allow_list: ReadonlyArray<string>;
  presets: ReadonlyArray<DiscordHttpApiSchemaAutomodKeywordPresetType>;
};

export type DiscordHttpApiSchemaKeywordTriggerMetadataResponse = {
  keyword_filter: ReadonlyArray<string>;
  regex_patterns: ReadonlyArray<string>;
  allow_list: ReadonlyArray<string>;
};

export type DiscordHttpApiSchemaMLSpamTriggerMetadataResponse = {};

export type DiscordHttpApiSchemaMentionSpamTriggerMetadataResponse = {
  mention_total_limit: number;
  mention_raid_protection_enabled: boolean;
};

export type DiscordHttpApiSchemaUserProfileMetadataResponse = {
  keyword_filter: ReadonlyArray<string>;
  regex_patterns: ReadonlyArray<string>;
  allow_list: ReadonlyArray<string>;
};

export type DiscordHttpApiSchemaBlockMessageAction = {
  type: 1;
  metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaBlockMessageActionMetadata);
};

export type DiscordHttpApiSchemaFlagToChannelAction = {
  type: 2;
  metadata: DiscordHttpApiSchemaFlagToChannelActionMetadata;
};

export type DiscordHttpApiSchemaQuarantineUserAction = {
  type: 4;
  metadata?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaQuarantineUserActionMetadata);
};

export type DiscordHttpApiSchemaUserCommunicationDisabledAction = {
  type: 3;
  metadata: DiscordHttpApiSchemaUserCommunicationDisabledActionMetadata;
};

export type DiscordHttpApiSchemaDefaultKeywordListTriggerMetadata = {
  allow_list?: ReadonlyArray<string> | null;
  presets?: ReadonlyArray<DiscordHttpApiSchemaAutomodKeywordPresetType> | null;
};

export type DiscordHttpApiSchemaKeywordTriggerMetadata = {
  keyword_filter?: ReadonlyArray<string> | null;
  regex_patterns?: ReadonlyArray<string> | null;
  allow_list?: ReadonlyArray<string> | null;
};

export type DiscordHttpApiSchemaMLSpamTriggerMetadata = {};

export type DiscordHttpApiSchemaMentionSpamTriggerMetadata = {
  mention_total_limit?: number | null;
  mention_raid_protection_enabled?: boolean | null;
};

export type DiscordHttpApiSchemaUserProfileMetadata = {
  keyword_filter?: ReadonlyArray<string> | null;
  regex_patterns?: ReadonlyArray<string> | null;
  allow_list?: ReadonlyArray<string> | null;
};

export type DiscordHttpApiSchemaCreateOrUpdateThreadTagRequest = {
  name: string;
  emoji_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name?: string | null;
  moderated?: boolean | null;
};

export type DiscordHttpApiSchemaAccountResponse = {
  id: string;
  name: string | null;
};

export type DiscordHttpApiSchemaIntegrationApplicationResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string;
  type: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationTypes);
  cover_image?: string;
  primary_sku_id?: DiscordHttpApiSchemaSnowflakeType;
  bot?: DiscordHttpApiSchemaUserResponse;
};

export type DiscordHttpApiSchemaIntegrationExpireBehaviorTypes = (0 | 1);

export type DiscordHttpApiSchemaIntegrationExpireGracePeriodTypes = (1 | 3 | 7 | 14 | 30);

export type DiscordHttpApiSchemaSearchMessageResponse = {
  type: DiscordHttpApiSchemaMessageType;
  content: string;
  mentions: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
  mention_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  attachments: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentResponse>;
  embeds: ReadonlyArray<DiscordHttpApiSchemaMessageEmbedResponse>;
  timestamp: string;
  edited_timestamp: string | null;
  flags: number;
  components: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentResponse | DiscordHttpApiSchemaContainerComponentResponse | DiscordHttpApiSchemaFileComponentResponse | DiscordHttpApiSchemaMediaGalleryComponentResponse | DiscordHttpApiSchemaSectionComponentResponse | DiscordHttpApiSchemaSeparatorComponentResponse | DiscordHttpApiSchemaTextDisplayComponentResponse)>;
  stickers?: ReadonlyArray<(DiscordHttpApiSchemaGuildStickerResponse | DiscordHttpApiSchemaStandardStickerResponse)>;
  sticker_items?: ReadonlyArray<DiscordHttpApiSchemaMessageStickerItemResponse>;
  id: DiscordHttpApiSchemaSnowflakeType;
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  author: DiscordHttpApiSchemaUserResponse;
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  call?: DiscordHttpApiSchemaMessageCallResponse;
  activity?: DiscordHttpApiSchemaMessageActivityResponse;
  application?: DiscordHttpApiSchemaBasicApplicationResponseWithBot;
  application_id?: DiscordHttpApiSchemaSnowflakeType;
  interaction?: DiscordHttpApiSchemaMessageInteractionResponse;
  nonce?: (number | string);
  webhook_id?: DiscordHttpApiSchemaSnowflakeType;
  message_reference?: DiscordHttpApiSchemaMessageReferenceResponse;
  thread?: DiscordHttpApiSchemaThreadResponse;
  mention_channels?: ReadonlyArray<DiscordHttpApiSchemaMessageMentionChannelResponse>;
  role_subscription_data?: DiscordHttpApiSchemaMessageRoleSubscriptionDataResponse;
  purchase_notification?: DiscordHttpApiSchemaPurchaseNotificationResponse;
  position?: number;
  resolved?: DiscordHttpApiSchemaResolvedObjectsResponse;
  poll?: DiscordHttpApiSchemaPollResponse;
  shared_client_theme?: DiscordHttpApiSchemaCustomClientThemeResponse;
  interaction_metadata?: (DiscordHttpApiSchemaApplicationCommandInteractionMetadataResponse | DiscordHttpApiSchemaMessageComponentInteractionMetadataResponse | DiscordHttpApiSchemaModalSubmitInteractionMetadataResponse);
  message_snapshots?: ReadonlyArray<DiscordHttpApiSchemaMessageSnapshotResponse>;
  reactions?: ReadonlyArray<DiscordHttpApiSchemaMessageReactionResponse>;
  referenced_message?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaBasicMessageResponse);
  hit: boolean;
};

export type DiscordHttpApiSchemaWelcomeMessageResponse = {
  author_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  message: string;
};

export type DiscordHttpApiSchemaNewMemberActionResponse = {
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  action_type: DiscordHttpApiSchemaNewMemberActionType;
  title: string;
  description: string;
  emoji?: DiscordHttpApiSchemaSettingsEmojiResponse;
  icon?: string;
};

export type DiscordHttpApiSchemaResourceChannelResponse = {
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  title: string;
  emoji?: DiscordHttpApiSchemaSettingsEmojiResponse;
  icon?: string;
  description: string;
};

export type DiscordHttpApiSchemaOnboardingPromptResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  title: string;
  options: ReadonlyArray<DiscordHttpApiSchemaOnboardingPromptOptionResponse>;
  single_select: boolean;
  required: boolean;
  in_onboarding: boolean;
  type: DiscordHttpApiSchemaOnboardingPromptType;
};

export type DiscordHttpApiSchemaGuildOnboardingMode = (0 | 1);

export type DiscordHttpApiSchemaUpdateOnboardingPromptRequest = {
  title: string;
  options: ReadonlyArray<DiscordHttpApiSchemaOnboardingPromptOptionRequest>;
  single_select?: boolean | null;
  required?: boolean | null;
  in_onboarding?: boolean | null;
  type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaOnboardingPromptType);
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaMultipleChoiceFormFieldResponse = {
  field_type: "MULTIPLE_CHOICE";
  label?: string;
  description?: string;
  required?: boolean;
  choices: ReadonlyArray<string>;
  response?: number;
};

export type DiscordHttpApiSchemaParagraphFormFieldResponse = {
  field_type: "PARAGRAPH";
  label?: string;
  description?: string;
  required?: boolean;
  placeholder?: string;
  response?: string;
};

export type DiscordHttpApiSchemaTermsFormFieldResponse = {
  field_type: "TERMS";
  label?: string;
  description?: string;
  required?: boolean;
  values: ReadonlyArray<string>;
  response?: boolean;
};

export type DiscordHttpApiSchemaTextInputFormFieldResponse = {
  field_type: "TEXT_INPUT";
  label?: string;
  description?: string;
  required?: boolean;
  placeholder?: string;
  response?: string;
};

export type DiscordHttpApiSchemaGuildRoleColorsResponse = {
  primary_color: number;
  secondary_color: number | null;
  tertiary_color: number | null;
};

export type DiscordHttpApiSchemaGuildRoleTagsResponse = {
  premium_subscriber?: DiscordHttpApiSchemaJsonValue;
  bot_id?: DiscordHttpApiSchemaSnowflakeType;
  integration_id?: DiscordHttpApiSchemaSnowflakeType;
  subscription_listing_id?: DiscordHttpApiSchemaSnowflakeType;
  available_for_purchase?: DiscordHttpApiSchemaJsonValue;
  guild_connections?: DiscordHttpApiSchemaJsonValue;
};

export type DiscordHttpApiSchemaRoleColors = {
  primary_color?: number | null;
  secondary_color?: number | null;
  tertiary_color?: number | null;
};

export type DiscordHttpApiSchemaGuildScheduledEventStatuses = (1 | 2 | 3 | 4);

export type DiscordHttpApiSchemaRecurrenceRuleResponse = {
  start: string;
  end?: string | null;
  frequency: DiscordHttpApiSchemaRecurrenceRuleFrequencies;
  interval: number;
  by_weekday: ReadonlyArray<DiscordHttpApiSchemaRecurrenceRuleWeekdays> | null;
  by_n_weekday: ReadonlyArray<DiscordHttpApiSchemaByNWeekdayResponse> | null;
  by_month: ReadonlyArray<DiscordHttpApiSchemaRecurrenceRuleMonths> | null;
  by_month_day: ReadonlyArray<number> | null;
  by_year_day?: ReadonlyArray<number> | null;
  count?: number | null;
};

export type DiscordHttpApiSchemaGuildScheduledEventPrivacyLevels = 2;

export type DiscordHttpApiSchemaEntityMetadataExternalResponse = {
  location: string;
};

export type DiscordHttpApiSchemaEntityMetadataStageInstanceResponse = {};

export type DiscordHttpApiSchemaEntityMetadataVoiceResponse = {};

export type DiscordHttpApiSchemaRecurrenceRule = {
  start: string;
  end?: string | null;
  frequency: DiscordHttpApiSchemaRecurrenceRuleFrequencies;
  interval?: number | null;
  by_weekday?: ReadonlyArray<DiscordHttpApiSchemaRecurrenceRuleWeekdays> | null;
  by_n_weekday?: ReadonlyArray<DiscordHttpApiSchemaByNWeekday> | null;
  by_month?: ReadonlyArray<DiscordHttpApiSchemaRecurrenceRuleMonths> | null;
  by_month_day?: ReadonlyArray<number> | null;
  by_year_day?: ReadonlyArray<number> | null;
  count?: number | null;
};

export type DiscordHttpApiSchemaEntityMetadataExternal = {
  location: string;
};

export type DiscordHttpApiSchemaEntityMetadataStageInstance = {};

export type DiscordHttpApiSchemaEntityMetadataVoice = {};

export type DiscordHttpApiSchemaGuildScheduledEventUserResponses = (0 | 1);

export type DiscordHttpApiSchemaStickerFormatTypes = (1 | 2 | 3 | 4);

export type DiscordHttpApiSchemaVanityURLErrorResponse = {
  message: string;
  code: number;
};

export type DiscordHttpApiSchemaGuildWelcomeScreenChannelResponse = {
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  description: string;
  emoji_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name: string | null;
};

export type DiscordHttpApiSchemaGuildWelcomeChannel = {
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  description: string;
  emoji_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name?: string | null;
};

export type DiscordHttpApiSchemaWidgetChannel = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  position: number;
};

export type DiscordHttpApiSchemaWidgetMember = {
  id: string;
  username: string;
  discriminator: DiscordHttpApiSchemaWidgetUserDiscriminator;
  avatar: DiscordHttpApiSchemaJsonValue;
  status: string;
  avatar_url: string;
  activity?: DiscordHttpApiSchemaWidgetActivity;
  deaf?: boolean;
  mute?: boolean;
  self_deaf?: boolean;
  self_mute?: boolean;
  suppress?: boolean;
  channel_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaInteractionApplicationCommandAutocompleteCallbackIntegerData = {
  choices?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandOptionIntegerChoice)> | null;
};

export type DiscordHttpApiSchemaInteractionApplicationCommandAutocompleteCallbackNumberData = {
  choices?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandOptionNumberChoice)> | null;
};

export type DiscordHttpApiSchemaInteractionApplicationCommandAutocompleteCallbackStringData = {
  choices?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationCommandOptionStringChoice)> | null;
};

export type DiscordHttpApiSchemaIncomingWebhookInteractionRequest = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
  poll?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollCreateRequest);
  tts?: boolean | null;
  flags?: number | null;
};

export type DiscordHttpApiSchemaModalInteractionCallbackRequestData = {
  custom_id: string;
  title: string;
  components: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForModalRequest | DiscordHttpApiSchemaLabelComponentForModalRequest | DiscordHttpApiSchemaTextDisplayComponentForModalRequest)>;
};

export type DiscordHttpApiSchemaSocialLayerSKUPurchaseEligibilityCallbackData = {
  eligible: boolean;
  ineligible_reason?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSKUIneligibilityReason);
  ineligible_reason_description?: string | null;
};

export type DiscordHttpApiSchemaIncomingWebhookUpdateForInteractionCallbackRequestPartial = {
  content?: string | null;
  embeds?: ReadonlyArray<DiscordHttpApiSchemaRichEmbed> | null;
  allowed_mentions?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaMessageAllowedMentionsRequest);
  components?: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentForMessageRequest | DiscordHttpApiSchemaContainerComponentForMessageRequest | DiscordHttpApiSchemaFileComponentForMessageRequest | DiscordHttpApiSchemaMediaGalleryComponentForMessageRequest | DiscordHttpApiSchemaSectionComponentForMessageRequest | DiscordHttpApiSchemaSeparatorComponentForMessageRequest | DiscordHttpApiSchemaTextDisplayComponentForMessageRequest)> | null;
  attachments?: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentRequest> | null;
  flags?: number | null;
};

export type DiscordHttpApiSchemaInteractionResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  type: DiscordHttpApiSchemaInteractionTypes;
  activity_instance_id?: string | null;
  response_message_id?: DiscordHttpApiSchemaSnowflakeType;
  response_message_loading?: boolean;
  response_message_ephemeral?: boolean;
  channel_id?: DiscordHttpApiSchemaSnowflakeType;
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaCreateMessageInteractionCallbackResponse = {
  type: 4;
  message: DiscordHttpApiSchemaMessageResponse;
};

export type DiscordHttpApiSchemaLaunchActivityInteractionCallbackResponse = {
  type: 12;
  activity_instance: DiscordHttpApiSchemaActivityInstanceCallbackResponse;
};

export type DiscordHttpApiSchemaUpdateMessageInteractionCallbackResponse = {
  type: 7;
  message: DiscordHttpApiSchemaMessageResponse;
};

export type DiscordHttpApiSchemaTargetUsersJobStatusTypes = (0 | 1 | 2 | 3);

export type DiscordHttpApiSchemaUInt32Type = number;

export type DiscordHttpApiSchemaApplicationResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
  description: string;
  type: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaApplicationTypes);
  cover_image?: string;
  primary_sku_id?: DiscordHttpApiSchemaSnowflakeType;
  bot?: DiscordHttpApiSchemaUserResponse;
  slug?: string;
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
  rpc_origins?: ReadonlyArray<string>;
  bot_public?: boolean;
  bot_require_code_grant?: boolean;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  custom_install_url?: string;
  install_params?: DiscordHttpApiSchemaApplicationOAuth2InstallParamsResponse;
  integration_types_config?: {
  readonly [key: string]: DiscordHttpApiSchemaApplicationIntegrationTypeConfigurationResponse | undefined;
};
  verify_key: string;
  flags: number;
  flags_new: string;
  max_participants?: number | null;
  tags?: ReadonlyArray<string>;
};

export type DiscordHttpApiSchemaOAuth2Scopes = ("identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "activities.invites.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write" | "openid");

export type DiscordHttpApiSchemaOAuth2Key = {
  kty: string;
  use: string;
  kid: string;
  n: string;
  e: string;
  alg: string;
};

export type DiscordHttpApiSchemaSubscriptionResponseStatusType = (0 | 1 | 2);

export type DiscordHttpApiSchemaPremiumTypes = (0 | 1 | 2 | 3);

export type DiscordHttpApiSchemaConnectedAccountProviders = ("battlenet" | "bluesky" | "bungie" | "ebay" | "epicgames" | "facebook" | "github" | "instagram" | "mastodon" | "leagueoflegends" | "paypal" | "playstation" | "reddit" | "riotgames" | "roblox" | "skype" | "spotify" | "steam" | "tiktok" | "twitch" | "twitter" | "xbox" | "youtube" | "domain");

export type DiscordHttpApiSchemaConnectedAccountIntegrationResponse = {
  id: string;
  type: DiscordHttpApiSchemaIntegrationTypes;
  account: DiscordHttpApiSchemaAccountResponse;
  guild: DiscordHttpApiSchemaConnectedAccountGuildResponse;
};

export type DiscordHttpApiSchemaConnectedAccountVisibility = (0 | 1);

export type DiscordHttpApiSchemaGithubComment = {
  id: number;
  html_url: string;
  user: DiscordHttpApiSchemaGithubUser;
  commit_id?: string | null;
  body: string;
};

export type DiscordHttpApiSchemaGithubIssue = {
  id: number;
  number: number;
  html_url: string;
  user: DiscordHttpApiSchemaGithubUser;
  title: string;
  body?: string | null;
  pull_request?: DiscordHttpApiSchemaJsonValue;
};

export type DiscordHttpApiSchemaGithubRepository = {
  id: number;
  html_url: string;
  name: string;
  full_name: string;
};

export type DiscordHttpApiSchemaGithubUser = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
};

export type DiscordHttpApiSchemaGithubRelease = {
  id: number;
  tag_name: string;
  html_url: string;
  author: DiscordHttpApiSchemaGithubUser;
};

export type DiscordHttpApiSchemaGithubCommit = {
  id: string;
  url: string;
  message: string;
  author: DiscordHttpApiSchemaGithubAuthor;
};

export type DiscordHttpApiSchemaGithubReview = {
  user: DiscordHttpApiSchemaGithubUser;
  body?: string | null;
  html_url: string;
  state: string;
};

export type DiscordHttpApiSchemaGithubCheckRun = {
  conclusion?: string | null;
  name: string;
  html_url: string;
  check_suite: DiscordHttpApiSchemaGithubCheckSuite;
  details_url?: string | null;
  output?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGithubCheckRunOutput);
  pull_requests?: ReadonlyArray<DiscordHttpApiSchemaGithubCheckPullRequest> | null;
};

export type DiscordHttpApiSchemaGithubCheckSuite = {
  conclusion?: string | null;
  head_branch?: string | null;
  head_sha: string;
  pull_requests?: ReadonlyArray<DiscordHttpApiSchemaGithubCheckPullRequest> | null;
  app: DiscordHttpApiSchemaGithubCheckApp;
};

export type DiscordHttpApiSchemaGithubDiscussion = {
  title: string;
  number: number;
  html_url: string;
  answer_html_url?: string | null;
  body?: string | null;
  user: DiscordHttpApiSchemaGithubUser;
};

export type DiscordHttpApiSchemaWebhookSlackEmbed = {
  title?: string | null;
  title_link?: string | null;
  text?: string | null;
  color?: string | null;
  ts?: number | null;
  pretext?: string | null;
  footer?: string | null;
  footer_icon?: string | null;
  author_name?: string | null;
  author_link?: string | null;
  author_icon?: string | null;
  image_url?: string | null;
  thumb_url?: string | null;
  fields?: ReadonlyArray<DiscordHttpApiSchemaWebhookSlackEmbedField> | null;
};

export type DiscordHttpApiSchemaTeamMemberResponse = {
  user: DiscordHttpApiSchemaUserResponse;
  team_id: DiscordHttpApiSchemaSnowflakeType;
  membership_state: DiscordHttpApiSchemaTeamMembershipStates;
  role: DiscordHttpApiSchemaTeamMemberRoles;
  permissions: ReadonlyArray<string>;
};

export type DiscordHttpApiSchemaChannelTypes = (1 | 3 | 0 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15);

export type DiscordHttpApiSchemaApplicationCommandOptionIntegerChoiceResponse = {
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  value: DiscordHttpApiSchemaInt53Type;
};

export type DiscordHttpApiSchemaApplicationCommandOptionNumberChoiceResponse = {
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  value: number;
};

export type DiscordHttpApiSchemaApplicationCommandOptionStringChoiceResponse = {
  name: string;
  name_localized?: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  value: string;
};

export type DiscordHttpApiSchemaApplicationCommandOptionIntegerChoice = {
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  value: DiscordHttpApiSchemaInt53Type;
};

export type DiscordHttpApiSchemaApplicationCommandOptionNumberChoice = {
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  value: number;
};

export type DiscordHttpApiSchemaApplicationCommandOptionStringChoice = {
  name: string;
  name_localizations?: {
  readonly [key: string]: string | undefined;
} | null;
  value: string;
};

export type DiscordHttpApiSchemaInviteChannelRecipientResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  username: string;
  avatar: string | null;
};

export type DiscordHttpApiSchemaGuildScheduledEventEntityTypes = (0 | 1 | 2 | 3);

export type DiscordHttpApiSchemaMessageEmbedFieldResponse = {
  name: string;
  value: string;
  inline: boolean;
};

export type DiscordHttpApiSchemaMessageEmbedAuthorResponse = {
  name: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
};

export type DiscordHttpApiSchemaMessageEmbedProviderResponse = {
  name: string;
  url?: string;
};

export type DiscordHttpApiSchemaMessageEmbedImageResponse = {
  url?: string;
  proxy_url?: string;
  width?: DiscordHttpApiSchemaUInt32Type;
  height?: DiscordHttpApiSchemaUInt32Type;
  content_type?: string;
  placeholder?: string;
  placeholder_version?: DiscordHttpApiSchemaUInt32Type;
  description?: string;
  flags?: DiscordHttpApiSchemaUInt32Type;
};

export type DiscordHttpApiSchemaMessageEmbedVideoResponse = {
  url?: string;
  proxy_url?: string;
  width?: DiscordHttpApiSchemaUInt32Type;
  height?: DiscordHttpApiSchemaUInt32Type;
  content_type?: string;
  placeholder?: string;
  placeholder_version?: DiscordHttpApiSchemaUInt32Type;
  description?: string;
  flags?: DiscordHttpApiSchemaUInt32Type;
};

export type DiscordHttpApiSchemaMessageEmbedFooterResponse = {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
};

export type DiscordHttpApiSchemaButtonComponentResponse = {
  type: 2;
  id: number;
  custom_id?: string;
  style: DiscordHttpApiSchemaButtonStyleTypes;
  label?: string;
  disabled?: boolean;
  emoji?: DiscordHttpApiSchemaComponentEmojiResponse;
  url?: string | null;
  sku_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaChannelSelectComponentResponse = {
  type: 8;
  id: number;
  custom_id: string;
  placeholder?: string;
  min_values: number;
  max_values: number;
  disabled?: boolean;
  channel_types?: ReadonlyArray<DiscordHttpApiSchemaChannelTypes>;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaChannelSelectDefaultValueResponse>;
};

export type DiscordHttpApiSchemaMentionableSelectComponentResponse = {
  type: 7;
  id: number;
  custom_id: string;
  placeholder?: string;
  min_values: number;
  max_values: number;
  disabled?: boolean;
  default_values?: ReadonlyArray<(DiscordHttpApiSchemaRoleSelectDefaultValueResponse | DiscordHttpApiSchemaUserSelectDefaultValueResponse)>;
};

export type DiscordHttpApiSchemaRoleSelectComponentResponse = {
  type: 6;
  id: number;
  custom_id: string;
  placeholder?: string;
  min_values: number;
  max_values: number;
  disabled?: boolean;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaRoleSelectDefaultValueResponse>;
};

export type DiscordHttpApiSchemaStringSelectComponentResponse = {
  type: 3;
  id: number;
  custom_id: string;
  placeholder?: string;
  min_values: number;
  max_values: number;
  disabled?: boolean;
  options: ReadonlyArray<DiscordHttpApiSchemaStringSelectOptionResponse>;
};

export type DiscordHttpApiSchemaTextInputComponentResponse = {
  type: 4;
  id: number;
  custom_id: string;
  style: DiscordHttpApiSchemaTextInputStyleTypes;
  label: string | null;
  value?: string;
  placeholder?: string;
  required?: boolean;
  min_length: number | null;
  max_length: number | null;
};

export type DiscordHttpApiSchemaUserSelectComponentResponse = {
  type: 5;
  id: number;
  custom_id: string;
  placeholder?: string;
  min_values: number;
  max_values: number;
  disabled?: boolean;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaUserSelectDefaultValueResponse>;
};

export type DiscordHttpApiSchemaUnfurledMediaResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  url: string;
  proxy_url: string;
  width?: number | null;
  height?: number | null;
  content_type?: string | null;
  attachment_id?: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaMediaGalleryItemResponse = {
  media: DiscordHttpApiSchemaUnfurledMediaResponse;
  description: string | null;
  spoiler: boolean;
};

export type DiscordHttpApiSchemaThumbnailComponentResponse = {
  type: 11;
  id: number;
  media: DiscordHttpApiSchemaUnfurledMediaResponse;
  description: string | null;
  spoiler: boolean;
};

export type DiscordHttpApiSchemaMessageComponentSeparatorSpacingSize = (1 | 2);

export type DiscordHttpApiSchemaActivityActionTypes = (1 | 2 | 3 | 5 | 6);

export type DiscordHttpApiSchemaInteractionTypes = (1 | 2 | 3 | 4 | 5 | 6);

export type DiscordHttpApiSchemaMessageReferenceType = 0;

export type DiscordHttpApiSchemaPurchaseType = 0;

export type DiscordHttpApiSchemaGuildProductPurchaseResponse = {
  listing_id: DiscordHttpApiSchemaSnowflakeType;
  product_name: string;
};

export type DiscordHttpApiSchemaBasicGuildMemberResponse = {
  avatar: string | null;
  avatar_decoration_data?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserAvatarDecorationResponse);
  banner: string | null;
  communication_disabled_until: string | null;
  flags: number;
  joined_at: string;
  nick: string | null;
  pending: boolean;
  premium_since: string | null;
  roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  collectibles?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaUserCollectiblesResponse);
};

export type DiscordHttpApiSchemaPollMediaResponse = {
  text?: string;
  emoji?: DiscordHttpApiSchemaMessageReactionEmojiResponse;
};

export type DiscordHttpApiSchemaPollAnswerResponse = {
  answer_id: number;
  poll_media: DiscordHttpApiSchemaPollMediaResponse;
};

export type DiscordHttpApiSchemaPollLayoutTypes = 1;

export type DiscordHttpApiSchemaPollResultsResponse = {
  answer_counts: ReadonlyArray<DiscordHttpApiSchemaPollResultsEntryResponse>;
  is_finalized: boolean;
};

export type DiscordHttpApiSchemaMessageShareCustomUserThemeBaseTheme = (0 | 1 | 2 | 3 | 4);

export type DiscordHttpApiSchemaMinimalContentMessageResponse = {
  type: DiscordHttpApiSchemaMessageType;
  content: string;
  mentions: ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
  mention_roles: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  attachments: ReadonlyArray<DiscordHttpApiSchemaMessageAttachmentResponse>;
  embeds: ReadonlyArray<DiscordHttpApiSchemaMessageEmbedResponse>;
  timestamp: string;
  edited_timestamp: string | null;
  flags: number;
  components: ReadonlyArray<(DiscordHttpApiSchemaActionRowComponentResponse | DiscordHttpApiSchemaContainerComponentResponse | DiscordHttpApiSchemaFileComponentResponse | DiscordHttpApiSchemaMediaGalleryComponentResponse | DiscordHttpApiSchemaSectionComponentResponse | DiscordHttpApiSchemaSeparatorComponentResponse | DiscordHttpApiSchemaTextDisplayComponentResponse)>;
  stickers?: ReadonlyArray<(DiscordHttpApiSchemaGuildStickerResponse | DiscordHttpApiSchemaStandardStickerResponse)>;
  sticker_items?: ReadonlyArray<DiscordHttpApiSchemaMessageStickerItemResponse>;
};

export type DiscordHttpApiSchemaMessageReactionEmojiResponse = {
  id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  name: string | null;
  animated?: boolean;
};

export type DiscordHttpApiSchemaMessageReactionCountDetailsResponse = {
  burst: number;
  normal: number;
};

export type DiscordHttpApiSchemaRichEmbedAuthor = {
  name?: string | null;
  url?: string | null;
  icon_url?: string | null;
};

export type DiscordHttpApiSchemaRichEmbedImage = {
  url?: string | null;
  width?: number | null;
  height?: number | null;
  placeholder?: string | null;
  placeholder_version?: number | null;
  is_animated?: boolean | null;
  description?: string | null;
};

export type DiscordHttpApiSchemaRichEmbedThumbnail = {
  url?: string | null;
  width?: number | null;
  height?: number | null;
  placeholder?: string | null;
  placeholder_version?: number | null;
  is_animated?: boolean | null;
  description?: string | null;
};

export type DiscordHttpApiSchemaRichEmbedFooter = {
  text?: string | null;
  icon_url?: string | null;
};

export type DiscordHttpApiSchemaRichEmbedField = {
  name: string;
  value: string;
  inline?: boolean | null;
};

export type DiscordHttpApiSchemaRichEmbedProvider = {
  name?: string | null;
  url?: string | null;
};

export type DiscordHttpApiSchemaRichEmbedVideo = {
  url?: string | null;
  width?: number | null;
  height?: number | null;
  placeholder?: string | null;
  placeholder_version?: number | null;
  is_animated?: boolean | null;
  description?: string | null;
};

export type DiscordHttpApiSchemaAllowedMentionTypes = ("users" | "roles" | "everyone");

export type DiscordHttpApiSchemaButtonComponentForMessageRequest = {
  type: 2;
  id?: number | null;
  custom_id?: string | null;
  style: DiscordHttpApiSchemaButtonStyleTypes;
  label?: string | null;
  disabled?: boolean | null;
  url?: string | null;
  sku_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaComponentEmojiForRequest);
};

export type DiscordHttpApiSchemaChannelSelectComponentForMessageRequest = {
  type: 8;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaChannelSelectDefaultValue> | null;
  channel_types?: ReadonlyArray<DiscordHttpApiSchemaChannelTypes> | null;
};

export type DiscordHttpApiSchemaMentionableSelectComponentForMessageRequest = {
  type: 7;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<(DiscordHttpApiSchemaRoleSelectDefaultValue | DiscordHttpApiSchemaUserSelectDefaultValue)> | null;
};

export type DiscordHttpApiSchemaRoleSelectComponentForMessageRequest = {
  type: 6;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaRoleSelectDefaultValue> | null;
};

export type DiscordHttpApiSchemaStringSelectComponentForMessageRequest = {
  type: 3;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  options: ReadonlyArray<DiscordHttpApiSchemaStringSelectOptionForRequest>;
};

export type DiscordHttpApiSchemaUserSelectComponentForMessageRequest = {
  type: 5;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaUserSelectDefaultValue> | null;
};

export type DiscordHttpApiSchemaUnfurledMediaRequestWithAttachmentReferenceRequired = {
  url: string;
};

export type DiscordHttpApiSchemaMediaGalleryItemRequest = {
  description?: string | null;
  spoiler?: boolean | null;
  media: DiscordHttpApiSchemaUnfurledMediaRequest;
};

export type DiscordHttpApiSchemaThumbnailComponentForMessageRequest = {
  type: 11;
  id?: number | null;
  description?: string | null;
  spoiler?: boolean | null;
  media: DiscordHttpApiSchemaUnfurledMediaRequest;
};

export type DiscordHttpApiSchemaPollMedia = {
  text?: string | null;
  emoji?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollEmoji);
};

export type DiscordHttpApiSchemaPollAnswerCreateRequest = {
  poll_media: DiscordHttpApiSchemaPollMediaCreateRequest;
};

export type DiscordHttpApiSchemaUserNameplateResponse = {
  sku_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  asset: string;
  label: string;
  palette: DiscordHttpApiSchemaNameplatePalette;
};

export type DiscordHttpApiSchemaGuildTemplateRoleResponse = {
  id: number;
  name: string;
  permissions: string;
  color: number;
  colors: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaGuildTemplateRoleColorsResponse);
  hoist: boolean;
  mentionable: boolean;
  icon: string | null;
  unicode_emoji: string | null;
};

export type DiscordHttpApiSchemaGuildTemplateChannelResponse = {
  id: number | null;
  type: 0 | 2 | 4 | 15;
  name: string | null;
  position: number | null;
  topic: string | null;
  bitrate: number;
  user_limit: number;
  nsfw: boolean;
  rate_limit_per_user: number;
  parent_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  default_auto_archive_duration: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadAutoArchiveDuration);
  permission_overwrites: ReadonlyArray<DiscordHttpApiSchemaChannelPermissionOverwriteResponse>;
  available_tags: ReadonlyArray<DiscordHttpApiSchemaGuildTemplateChannelTags> | null;
  template: string;
  default_reaction_emoji: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaDefaultReactionEmojiResponse);
  default_thread_rate_limit_per_user: number | null;
  default_sort_order: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSortOrder);
  default_forum_layout: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaForumLayout);
  default_tag_setting: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaThreadSearchTagSetting);
  theme_color: number | null;
};

export type DiscordHttpApiSchemaAuditLogObjectChangeResponse = {
  key: string | null;
  new_value?: DiscordHttpApiSchemaJsonValue;
  old_value?: DiscordHttpApiSchemaJsonValue;
};

export type DiscordHttpApiSchemaBlockMessageActionMetadataResponse = {
  custom_message?: string;
};

export type DiscordHttpApiSchemaFlagToChannelActionMetadataResponse = {
  channel_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaQuarantineUserActionMetadataResponse = {};

export type DiscordHttpApiSchemaUserCommunicationDisabledActionMetadataResponse = {
  duration_seconds: number;
};

export type DiscordHttpApiSchemaAutomodKeywordPresetType = (1 | 2 | 3);

export type DiscordHttpApiSchemaBlockMessageActionMetadata = {
  custom_message?: string | null;
};

export type DiscordHttpApiSchemaFlagToChannelActionMetadata = {
  channel_id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaQuarantineUserActionMetadata = {};

export type DiscordHttpApiSchemaUserCommunicationDisabledActionMetadata = {
  duration_seconds?: number | null;
};

export type DiscordHttpApiSchemaNewMemberActionType = (0 | 1);

export type DiscordHttpApiSchemaSettingsEmojiResponse = {
  id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  name: string | null;
  animated: boolean;
};

export type DiscordHttpApiSchemaOnboardingPromptOptionResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  title: string;
  description: string;
  emoji: DiscordHttpApiSchemaSettingsEmojiResponse;
  role_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  channel_ids: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
};

export type DiscordHttpApiSchemaOnboardingPromptType = (0 | 1);

export type DiscordHttpApiSchemaOnboardingPromptOptionRequest = {
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  title: string;
  description?: string | null;
  emoji_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name?: string | null;
  emoji_animated?: boolean | null;
  role_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
  channel_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType> | null;
};

export type DiscordHttpApiSchemaRecurrenceRuleFrequencies = (3 | 2 | 1 | 0);

export type DiscordHttpApiSchemaRecurrenceRuleWeekdays = (0 | 1 | 2 | 3 | 4 | 5 | 6);

export type DiscordHttpApiSchemaByNWeekdayResponse = {
  n: number;
  day: DiscordHttpApiSchemaRecurrenceRuleWeekdays;
};

export type DiscordHttpApiSchemaRecurrenceRuleMonths = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);

export type DiscordHttpApiSchemaByNWeekday = {
  n: number;
  day: DiscordHttpApiSchemaRecurrenceRuleWeekdays;
};

export type DiscordHttpApiSchemaWidgetUserDiscriminator = "0000";

export type DiscordHttpApiSchemaWidgetActivity = {
  name: string;
};

export type DiscordHttpApiSchemaActionRowComponentForModalRequest = {
  type: 1;
  id?: number | null;
  components: ReadonlyArray<DiscordHttpApiSchemaTextInputComponentForModalRequest>;
};

export type DiscordHttpApiSchemaLabelComponentForModalRequest = {
  type: 18;
  id?: number | null;
  label: string;
  description?: string | null;
  component: (DiscordHttpApiSchemaChannelSelectComponentForModalRequest | DiscordHttpApiSchemaCheckboxComponentForModalRequest | DiscordHttpApiSchemaCheckboxGroupComponentForModalRequest | DiscordHttpApiSchemaFileUploadComponentForModalRequest | DiscordHttpApiSchemaMentionableSelectComponentForModalRequest | DiscordHttpApiSchemaRadioGroupComponentForModalRequest | DiscordHttpApiSchemaRoleSelectComponentForModalRequest | DiscordHttpApiSchemaStringSelectComponentForModalRequest | DiscordHttpApiSchemaTextInputComponentForModalRequest | DiscordHttpApiSchemaUserSelectComponentForModalRequest);
};

export type DiscordHttpApiSchemaTextDisplayComponentForModalRequest = {
  type: 10;
  id?: number | null;
  content: string;
};

export type DiscordHttpApiSchemaSKUIneligibilityReason = (0 | 1 | 2);

export type DiscordHttpApiSchemaActivityInstanceCallbackResponse = {
  id: string;
};

export type DiscordHttpApiSchemaIntegrationTypes = ("discord" | "twitch" | "youtube" | "guild_subscription");

export type DiscordHttpApiSchemaConnectedAccountGuildResponse = {
  id: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  icon: string | null;
};

export type DiscordHttpApiSchemaGithubAuthor = {
  username?: string | null;
  name: string;
};

export type DiscordHttpApiSchemaGithubCheckRunOutput = {
  title?: string | null;
  summary?: string | null;
};

export type DiscordHttpApiSchemaGithubCheckPullRequest = {
  number: number;
};

export type DiscordHttpApiSchemaGithubCheckApp = {
  name: string;
};

export type DiscordHttpApiSchemaWebhookSlackEmbedField = {
  name?: string | null;
  value?: string | null;
  inline?: boolean | null;
};

export type DiscordHttpApiSchemaTeamMembershipStates = (1 | 2);

export type DiscordHttpApiSchemaTeamMemberRoles = ("admin" | "developer" | "read_only");

export type DiscordHttpApiSchemaButtonStyleTypes = (1 | 2 | 3 | 4 | 5 | 6);

export type DiscordHttpApiSchemaComponentEmojiResponse = {
  id?: DiscordHttpApiSchemaSnowflakeType;
  name: string;
  animated?: boolean;
};

export type DiscordHttpApiSchemaChannelSelectDefaultValueResponse = {
  type: "channel";
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaRoleSelectDefaultValueResponse = {
  type: "role";
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaUserSelectDefaultValueResponse = {
  type: "user";
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaStringSelectOptionResponse = {
  label: string;
  value: string;
  description?: string;
  emoji?: DiscordHttpApiSchemaComponentEmojiResponse;
  default?: boolean;
};

export type DiscordHttpApiSchemaTextInputStyleTypes = (1 | 2);

export type DiscordHttpApiSchemaPollResultsEntryResponse = {
  id: number;
  count: number;
  me_voted: boolean;
};

export type DiscordHttpApiSchemaComponentEmojiForRequest = {
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  name: string;
};

export type DiscordHttpApiSchemaChannelSelectDefaultValue = {
  type: "channel";
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaRoleSelectDefaultValue = {
  type: "role";
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaUserSelectDefaultValue = {
  type: "user";
  id: DiscordHttpApiSchemaSnowflakeType;
};

export type DiscordHttpApiSchemaStringSelectOptionForRequest = {
  label: string;
  value: string;
  description?: string | null;
  default?: boolean | null;
  emoji?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaComponentEmojiForRequest);
};

export type DiscordHttpApiSchemaUnfurledMediaRequest = {
  url: string;
};

export type DiscordHttpApiSchemaPollEmoji = {
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  name?: string | null;
  animated?: boolean | null;
};

export type DiscordHttpApiSchemaPollMediaCreateRequest = {
  text?: string | null;
  emoji?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaPollEmojiCreateRequest);
};

export type DiscordHttpApiSchemaNameplatePalette = ("crimson" | "berry" | "sky" | "teal" | "forest" | "bubble_gum" | "violet" | "cobalt" | "clover" | "lemon" | "white" | "black");

export type DiscordHttpApiSchemaGuildTemplateRoleColorsResponse = {
  primary_color: number;
  secondary_color: number | null;
  tertiary_color: number | null;
};

export type DiscordHttpApiSchemaGuildTemplateChannelTags = {
  id: number | null;
  name: string;
  emoji_id: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  emoji_name: string | null;
  moderated: boolean | null;
};

export type DiscordHttpApiSchemaTextInputComponentForModalRequest = {
  type: 4;
  id?: number | null;
  custom_id: string;
  style: DiscordHttpApiSchemaTextInputStyleTypes;
  label?: string | null;
  value?: string | null;
  placeholder?: string | null;
  required?: boolean | null;
  min_length?: number | null;
  max_length?: number | null;
};

export type DiscordHttpApiSchemaChannelSelectComponentForModalRequest = {
  type: 8;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaChannelSelectDefaultValue> | null;
  channel_types?: ReadonlyArray<DiscordHttpApiSchemaChannelTypes> | null;
};

export type DiscordHttpApiSchemaCheckboxComponentForModalRequest = {
  type: 23;
  id?: number | null;
  custom_id: string;
  default?: boolean | null;
};

export type DiscordHttpApiSchemaCheckboxGroupComponentForModalRequest = {
  type: 22;
  id?: number | null;
  custom_id: string;
  min_values?: number | null;
  max_values?: number | null;
  required?: boolean | null;
  options: ReadonlyArray<DiscordHttpApiSchemaCheckboxGroupOptionForRequest>;
};

export type DiscordHttpApiSchemaFileUploadComponentForModalRequest = {
  type: 19;
  id?: number | null;
  custom_id: string;
  min_values?: number | null;
  max_values?: number | null;
  required?: boolean | null;
};

export type DiscordHttpApiSchemaMentionableSelectComponentForModalRequest = {
  type: 7;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<(DiscordHttpApiSchemaRoleSelectDefaultValue | DiscordHttpApiSchemaUserSelectDefaultValue)> | null;
};

export type DiscordHttpApiSchemaRadioGroupComponentForModalRequest = {
  type: 21;
  id?: number | null;
  custom_id: string;
  required?: boolean | null;
  options: ReadonlyArray<DiscordHttpApiSchemaRadioGroupOptionForRequest>;
};

export type DiscordHttpApiSchemaRoleSelectComponentForModalRequest = {
  type: 6;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaRoleSelectDefaultValue> | null;
};

export type DiscordHttpApiSchemaStringSelectComponentForModalRequest = {
  type: 3;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  options: ReadonlyArray<DiscordHttpApiSchemaStringSelectOptionForRequest>;
};

export type DiscordHttpApiSchemaUserSelectComponentForModalRequest = {
  type: 5;
  id?: number | null;
  custom_id: string;
  placeholder?: string | null;
  min_values?: number | null;
  max_values?: number | null;
  disabled?: boolean | null;
  required?: boolean | null;
  default_values?: ReadonlyArray<DiscordHttpApiSchemaUserSelectDefaultValue> | null;
};

export type DiscordHttpApiSchemaPollEmojiCreateRequest = {
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  name?: string | null;
  animated?: boolean | null;
};

export type DiscordHttpApiSchemaCheckboxGroupOptionForRequest = {
  label: string;
  value: string;
  description?: string | null;
  default?: boolean | null;
};

export type DiscordHttpApiSchemaRadioGroupOptionForRequest = {
  label: string;
  value: string;
  description?: string | null;
  default?: boolean | null;
};

export interface DiscordHttpApiOperationQueryMap {
  "GET /applications/@me": {};
  "PATCH /applications/@me": {};
  "GET /applications/{application_id}": {};
  "PATCH /applications/{application_id}": {};
  "GET /applications/{application_id}/activity-instances/{instance_id}": {};
  "POST /applications/{application_id}/attachment": {};
  "GET /applications/{application_id}/commands": {
  with_localizations?: boolean;
};
  "PUT /applications/{application_id}/commands": {};
  "POST /applications/{application_id}/commands": {};
  "GET /applications/{application_id}/commands/{command_id}": {};
  "DELETE /applications/{application_id}/commands/{command_id}": {};
  "PATCH /applications/{application_id}/commands/{command_id}": {};
  "GET /applications/{application_id}/emojis": {};
  "POST /applications/{application_id}/emojis": {};
  "GET /applications/{application_id}/emojis/{emoji_id}": {};
  "DELETE /applications/{application_id}/emojis/{emoji_id}": {};
  "PATCH /applications/{application_id}/emojis/{emoji_id}": {};
  "GET /applications/{application_id}/entitlements": {
  user_id?: DiscordHttpApiSchemaSnowflakeType;
  sku_ids?: (string | ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)>);
  guild_id?: DiscordHttpApiSchemaSnowflakeType;
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
  exclude_ended?: boolean;
  exclude_deleted?: boolean;
  only_active?: boolean;
};
  "POST /applications/{application_id}/entitlements": {};
  "GET /applications/{application_id}/entitlements/{entitlement_id}": {};
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}": {};
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume": {};
  "GET /applications/{application_id}/guilds/{guild_id}/commands": {
  with_localizations?: boolean;
};
  "PUT /applications/{application_id}/guilds/{guild_id}/commands": {};
  "POST /applications/{application_id}/guilds/{guild_id}/commands": {};
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions": {};
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": {};
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": {};
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": {};
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": {};
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": {};
  "GET /applications/{application_id}/role-connections/metadata": {};
  "PUT /applications/{application_id}/role-connections/metadata": {};
  "GET /channels/{channel_id}": {};
  "DELETE /channels/{channel_id}": {};
  "PATCH /channels/{channel_id}": {};
  "POST /channels/{channel_id}/followers": {};
  "GET /channels/{channel_id}/invites": {};
  "POST /channels/{channel_id}/invites": {};
  "GET /channels/{channel_id}/messages": {
  around?: DiscordHttpApiSchemaSnowflakeType;
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
};
  "POST /channels/{channel_id}/messages": {};
  "POST /channels/{channel_id}/messages/bulk-delete": {};
  "GET /channels/{channel_id}/messages/pins": {
  before?: string;
  limit?: number;
};
  "PUT /channels/{channel_id}/messages/pins/{message_id}": {};
  "DELETE /channels/{channel_id}/messages/pins/{message_id}": {};
  "GET /channels/{channel_id}/messages/{message_id}": {};
  "DELETE /channels/{channel_id}/messages/{message_id}": {};
  "PATCH /channels/{channel_id}/messages/{message_id}": {};
  "POST /channels/{channel_id}/messages/{message_id}/crosspost": {};
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions": {};
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": {
  after?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
  type?: DiscordHttpApiSchemaReactionTypes;
};
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": {};
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": {};
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": {};
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": {};
  "POST /channels/{channel_id}/messages/{message_id}/threads": {};
  "PUT /channels/{channel_id}/permissions/{overwrite_id}": {};
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}": {};
  "GET /channels/{channel_id}/pins": {};
  "PUT /channels/{channel_id}/pins/{message_id}": {};
  "DELETE /channels/{channel_id}/pins/{message_id}": {};
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}": {
  after?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
};
  "POST /channels/{channel_id}/polls/{message_id}/expire": {};
  "PUT /channels/{channel_id}/recipients/{user_id}": {};
  "DELETE /channels/{channel_id}/recipients/{user_id}": {};
  "POST /channels/{channel_id}/send-soundboard-sound": {};
  "GET /channels/{channel_id}/thread-members": {
  with_member?: boolean;
  limit?: number;
  after?: DiscordHttpApiSchemaSnowflakeType;
};
  "PUT /channels/{channel_id}/thread-members/@me": {};
  "DELETE /channels/{channel_id}/thread-members/@me": {};
  "GET /channels/{channel_id}/thread-members/{user_id}": {
  with_member?: boolean;
};
  "PUT /channels/{channel_id}/thread-members/{user_id}": {};
  "DELETE /channels/{channel_id}/thread-members/{user_id}": {};
  "POST /channels/{channel_id}/threads": {};
  "GET /channels/{channel_id}/threads/archived/private": {
  before?: string;
  limit?: number;
};
  "GET /channels/{channel_id}/threads/archived/public": {
  before?: string;
  limit?: number;
};
  "GET /channels/{channel_id}/threads/search": {
  name?: string;
  slop?: number;
  min_id?: DiscordHttpApiSchemaSnowflakeType;
  max_id?: DiscordHttpApiSchemaSnowflakeType;
  tag?: (string | ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>);
  tag_setting?: DiscordHttpApiSchemaThreadSearchTagSetting;
  archived?: boolean;
  sort_by?: DiscordHttpApiSchemaThreadSortingMode;
  sort_order?: DiscordHttpApiSchemaSortingOrder;
  limit?: number;
  offset?: number;
};
  "POST /channels/{channel_id}/typing": {};
  "GET /channels/{channel_id}/users/@me/threads/archived/private": {
  before?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
};
  "PUT /channels/{channel_id}/voice-status": {};
  "GET /channels/{channel_id}/webhooks": {};
  "POST /channels/{channel_id}/webhooks": {};
  "GET /gateway": {};
  "GET /gateway/bot": {};
  "GET /guilds/templates/{code}": {};
  "GET /guilds/{guild_id}": {
  with_counts?: boolean;
};
  "PATCH /guilds/{guild_id}": {};
  "GET /guilds/{guild_id}/audit-logs": {
  user_id?: DiscordHttpApiSchemaSnowflakeType;
  target_id?: DiscordHttpApiSchemaSnowflakeType;
  action_type?: DiscordHttpApiSchemaAuditLogActionTypes;
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
};
  "GET /guilds/{guild_id}/auto-moderation/rules": {};
  "POST /guilds/{guild_id}/auto-moderation/rules": {};
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}": {};
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}": {};
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}": {};
  "GET /guilds/{guild_id}/bans": {
  limit?: number;
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
};
  "GET /guilds/{guild_id}/bans/{user_id}": {};
  "PUT /guilds/{guild_id}/bans/{user_id}": {};
  "DELETE /guilds/{guild_id}/bans/{user_id}": {};
  "POST /guilds/{guild_id}/bulk-ban": {};
  "GET /guilds/{guild_id}/channels": {};
  "POST /guilds/{guild_id}/channels": {};
  "PATCH /guilds/{guild_id}/channels": {};
  "GET /guilds/{guild_id}/emojis": {};
  "POST /guilds/{guild_id}/emojis": {};
  "GET /guilds/{guild_id}/emojis/{emoji_id}": {};
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}": {};
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}": {};
  "PUT /guilds/{guild_id}/incident-actions": {};
  "GET /guilds/{guild_id}/integrations": {};
  "DELETE /guilds/{guild_id}/integrations/{integration_id}": {};
  "GET /guilds/{guild_id}/invites": {};
  "GET /guilds/{guild_id}/members": {
  limit?: number;
  after?: number;
};
  "PATCH /guilds/{guild_id}/members/@me": {};
  "GET /guilds/{guild_id}/members/search": {
  limit?: number;
  query: string;
};
  "GET /guilds/{guild_id}/members/{user_id}": {};
  "PUT /guilds/{guild_id}/members/{user_id}": {};
  "DELETE /guilds/{guild_id}/members/{user_id}": {};
  "PATCH /guilds/{guild_id}/members/{user_id}": {};
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}": {};
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}": {};
  "GET /guilds/{guild_id}/messages/search": {
  sort_by?: DiscordHttpApiSchemaSortingMode;
  sort_order?: DiscordHttpApiSchemaSortingOrder;
  content?: string;
  slop?: number;
  author_id?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  author_type?: ReadonlyArray<DiscordHttpApiSchemaAuthorType>;
  mentions?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  mentions_role_id?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  replied_to_user_id?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  replied_to_message_id?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
  mention_everyone?: boolean;
  min_id?: DiscordHttpApiSchemaSnowflakeType;
  max_id?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
  offset?: number;
  has?: ReadonlyArray<DiscordHttpApiSchemaHasOption>;
  link_hostname?: ReadonlyArray<string>;
  embed_provider?: ReadonlyArray<string>;
  embed_type?: ReadonlyArray<DiscordHttpApiSchemaSearchableEmbedType>;
  attachment_extension?: ReadonlyArray<string>;
  attachment_filename?: ReadonlyArray<string>;
  pinned?: boolean;
  include_nsfw?: boolean;
  channel_id?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
};
  "GET /guilds/{guild_id}/new-member-welcome": {};
  "GET /guilds/{guild_id}/onboarding": {};
  "PUT /guilds/{guild_id}/onboarding": {};
  "GET /guilds/{guild_id}/preview": {};
  "GET /guilds/{guild_id}/prune": {
  days?: number;
  include_roles?: (string | ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)>);
};
  "POST /guilds/{guild_id}/prune": {};
  "GET /guilds/{guild_id}/regions": {};
  "GET /guilds/{guild_id}/requests": {
  status?: DiscordHttpApiSchemaGuildJoinRequestApplicationStatus;
  limit?: number;
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
};
  "PATCH /guilds/{guild_id}/requests/{request_id}": {};
  "GET /guilds/{guild_id}/roles": {};
  "POST /guilds/{guild_id}/roles": {};
  "PATCH /guilds/{guild_id}/roles": {};
  "GET /guilds/{guild_id}/roles/member-counts": {};
  "GET /guilds/{guild_id}/roles/{role_id}": {};
  "DELETE /guilds/{guild_id}/roles/{role_id}": {};
  "PATCH /guilds/{guild_id}/roles/{role_id}": {};
  "GET /guilds/{guild_id}/scheduled-events": {
  with_user_count?: boolean;
};
  "POST /guilds/{guild_id}/scheduled-events": {};
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": {
  with_user_count?: boolean;
};
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": {};
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": {};
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions": {};
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": {};
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": {};
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": {
  with_member?: boolean;
  limit?: number;
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
};
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts": {
  guild_scheduled_event_exception_ids?: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
};
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users": {
  with_member?: boolean;
  limit?: number;
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
};
  "GET /guilds/{guild_id}/soundboard-sounds": {};
  "POST /guilds/{guild_id}/soundboard-sounds": {};
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}": {};
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}": {};
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}": {};
  "GET /guilds/{guild_id}/stickers": {};
  "POST /guilds/{guild_id}/stickers": {};
  "GET /guilds/{guild_id}/stickers/{sticker_id}": {};
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}": {};
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}": {};
  "GET /guilds/{guild_id}/templates": {};
  "POST /guilds/{guild_id}/templates": {};
  "PUT /guilds/{guild_id}/templates/{code}": {};
  "DELETE /guilds/{guild_id}/templates/{code}": {};
  "PATCH /guilds/{guild_id}/templates/{code}": {};
  "GET /guilds/{guild_id}/threads/active": {};
  "GET /guilds/{guild_id}/vanity-url": {};
  "GET /guilds/{guild_id}/voice-states/@me": {};
  "PATCH /guilds/{guild_id}/voice-states/@me": {};
  "GET /guilds/{guild_id}/voice-states/{user_id}": {};
  "PATCH /guilds/{guild_id}/voice-states/{user_id}": {};
  "GET /guilds/{guild_id}/webhooks": {};
  "GET /guilds/{guild_id}/welcome-screen": {};
  "PATCH /guilds/{guild_id}/welcome-screen": {};
  "GET /guilds/{guild_id}/widget": {};
  "PATCH /guilds/{guild_id}/widget": {};
  "GET /guilds/{guild_id}/widget.json": {};
  "GET /guilds/{guild_id}/widget.png": {
  style?: DiscordHttpApiSchemaWidgetImageStyles;
};
  "POST /interactions/{interaction_id}/{interaction_token}/callback": {
  with_response?: boolean;
};
  "GET /invites/{code}": {
  with_counts?: boolean;
  guild_scheduled_event_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "DELETE /invites/{code}": {};
  "GET /invites/{code}/target-users": {};
  "PUT /invites/{code}/target-users": {};
  "GET /invites/{code}/target-users/job-status": {};
  "PUT /lobbies": {};
  "POST /lobbies": {};
  "GET /lobbies/{lobby_id}": {};
  "DELETE /lobbies/{lobby_id}": {};
  "PATCH /lobbies/{lobby_id}": {};
  "PATCH /lobbies/{lobby_id}/channel-linking": {};
  "DELETE /lobbies/{lobby_id}/members/@me": {};
  "POST /lobbies/{lobby_id}/members/@me/invites": {};
  "POST /lobbies/{lobby_id}/members/bulk": {};
  "PUT /lobbies/{lobby_id}/members/{user_id}": {};
  "DELETE /lobbies/{lobby_id}/members/{user_id}": {};
  "POST /lobbies/{lobby_id}/members/{user_id}/invites": {};
  "GET /lobbies/{lobby_id}/messages": {
  limit?: number;
};
  "POST /lobbies/{lobby_id}/messages": {};
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": {};
  "GET /oauth2/@me": {};
  "GET /oauth2/applications/@me": {};
  "GET /oauth2/keys": {};
  "GET /oauth2/userinfo": {};
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": {};
  "POST /partner-sdk/provisional-accounts/unmerge": {};
  "POST /partner-sdk/provisional-accounts/unmerge/bot": {};
  "POST /partner-sdk/token": {};
  "POST /partner-sdk/token/bot": {};
  "GET /skus/{sku_id}/subscriptions": {
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
  user_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "GET /skus/{sku_id}/subscriptions/{subscription_id}": {
  user_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "GET /soundboard-default-sounds": {};
  "POST /stage-instances": {};
  "GET /stage-instances/{channel_id}": {};
  "DELETE /stage-instances/{channel_id}": {};
  "PATCH /stage-instances/{channel_id}": {};
  "GET /sticker-packs": {};
  "GET /sticker-packs/{pack_id}": {};
  "GET /stickers/{sticker_id}": {};
  "GET /users/@me": {};
  "PATCH /users/@me": {};
  "GET /users/@me/applications/{application_id}/entitlements": {
  sku_ids?: (string | ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)>);
  exclude_consumed?: boolean;
};
  "GET /users/@me/applications/{application_id}/role-connection": {};
  "PUT /users/@me/applications/{application_id}/role-connection": {};
  "DELETE /users/@me/applications/{application_id}/role-connection": {};
  "POST /users/@me/channels": {};
  "GET /users/@me/connections": {};
  "GET /users/@me/guilds": {
  before?: DiscordHttpApiSchemaSnowflakeType;
  after?: DiscordHttpApiSchemaSnowflakeType;
  limit?: number;
  with_counts?: boolean;
};
  "DELETE /users/@me/guilds/{guild_id}": {};
  "GET /users/@me/guilds/{guild_id}/member": {};
  "GET /users/{user_id}": {};
  "GET /voice/regions": {};
  "GET /webhooks/{webhook_id}": {};
  "DELETE /webhooks/{webhook_id}": {};
  "PATCH /webhooks/{webhook_id}": {};
  "GET /webhooks/{webhook_id}/{webhook_token}": {};
  "POST /webhooks/{webhook_id}/{webhook_token}": {
  wait?: boolean;
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
  with_components?: boolean;
};
  "DELETE /webhooks/{webhook_id}/{webhook_token}": {};
  "PATCH /webhooks/{webhook_id}/{webhook_token}": {};
  "POST /webhooks/{webhook_id}/{webhook_token}/github": {
  wait?: boolean;
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original": {
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original": {
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original": {
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
  with_components?: boolean;
};
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": {
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": {
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
};
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": {
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
  with_components?: boolean;
};
  "POST /webhooks/{webhook_id}/{webhook_token}/slack": {
  wait?: boolean;
  thread_id?: DiscordHttpApiSchemaSnowflakeType;
};
}

export interface DiscordHttpApiOperationQueryRequiredMap {
  "GET /applications/@me": false;
  "PATCH /applications/@me": false;
  "GET /applications/{application_id}": false;
  "PATCH /applications/{application_id}": false;
  "GET /applications/{application_id}/activity-instances/{instance_id}": false;
  "POST /applications/{application_id}/attachment": false;
  "GET /applications/{application_id}/commands": false;
  "PUT /applications/{application_id}/commands": false;
  "POST /applications/{application_id}/commands": false;
  "GET /applications/{application_id}/commands/{command_id}": false;
  "DELETE /applications/{application_id}/commands/{command_id}": false;
  "PATCH /applications/{application_id}/commands/{command_id}": false;
  "GET /applications/{application_id}/emojis": false;
  "POST /applications/{application_id}/emojis": false;
  "GET /applications/{application_id}/emojis/{emoji_id}": false;
  "DELETE /applications/{application_id}/emojis/{emoji_id}": false;
  "PATCH /applications/{application_id}/emojis/{emoji_id}": false;
  "GET /applications/{application_id}/entitlements": false;
  "POST /applications/{application_id}/entitlements": false;
  "GET /applications/{application_id}/entitlements/{entitlement_id}": false;
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}": false;
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume": false;
  "GET /applications/{application_id}/guilds/{guild_id}/commands": false;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands": false;
  "POST /applications/{application_id}/guilds/{guild_id}/commands": false;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions": false;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": false;
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": false;
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": false;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": false;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": false;
  "GET /applications/{application_id}/role-connections/metadata": false;
  "PUT /applications/{application_id}/role-connections/metadata": false;
  "GET /channels/{channel_id}": false;
  "DELETE /channels/{channel_id}": false;
  "PATCH /channels/{channel_id}": false;
  "POST /channels/{channel_id}/followers": false;
  "GET /channels/{channel_id}/invites": false;
  "POST /channels/{channel_id}/invites": false;
  "GET /channels/{channel_id}/messages": false;
  "POST /channels/{channel_id}/messages": false;
  "POST /channels/{channel_id}/messages/bulk-delete": false;
  "GET /channels/{channel_id}/messages/pins": false;
  "PUT /channels/{channel_id}/messages/pins/{message_id}": false;
  "DELETE /channels/{channel_id}/messages/pins/{message_id}": false;
  "GET /channels/{channel_id}/messages/{message_id}": false;
  "DELETE /channels/{channel_id}/messages/{message_id}": false;
  "PATCH /channels/{channel_id}/messages/{message_id}": false;
  "POST /channels/{channel_id}/messages/{message_id}/crosspost": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions": false;
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": false;
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": false;
  "POST /channels/{channel_id}/messages/{message_id}/threads": false;
  "PUT /channels/{channel_id}/permissions/{overwrite_id}": false;
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}": false;
  "GET /channels/{channel_id}/pins": false;
  "PUT /channels/{channel_id}/pins/{message_id}": false;
  "DELETE /channels/{channel_id}/pins/{message_id}": false;
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}": false;
  "POST /channels/{channel_id}/polls/{message_id}/expire": false;
  "PUT /channels/{channel_id}/recipients/{user_id}": false;
  "DELETE /channels/{channel_id}/recipients/{user_id}": false;
  "POST /channels/{channel_id}/send-soundboard-sound": false;
  "GET /channels/{channel_id}/thread-members": false;
  "PUT /channels/{channel_id}/thread-members/@me": false;
  "DELETE /channels/{channel_id}/thread-members/@me": false;
  "GET /channels/{channel_id}/thread-members/{user_id}": false;
  "PUT /channels/{channel_id}/thread-members/{user_id}": false;
  "DELETE /channels/{channel_id}/thread-members/{user_id}": false;
  "POST /channels/{channel_id}/threads": false;
  "GET /channels/{channel_id}/threads/archived/private": false;
  "GET /channels/{channel_id}/threads/archived/public": false;
  "GET /channels/{channel_id}/threads/search": false;
  "POST /channels/{channel_id}/typing": false;
  "GET /channels/{channel_id}/users/@me/threads/archived/private": false;
  "PUT /channels/{channel_id}/voice-status": false;
  "GET /channels/{channel_id}/webhooks": false;
  "POST /channels/{channel_id}/webhooks": false;
  "GET /gateway": false;
  "GET /gateway/bot": false;
  "GET /guilds/templates/{code}": false;
  "GET /guilds/{guild_id}": false;
  "PATCH /guilds/{guild_id}": false;
  "GET /guilds/{guild_id}/audit-logs": false;
  "GET /guilds/{guild_id}/auto-moderation/rules": false;
  "POST /guilds/{guild_id}/auto-moderation/rules": false;
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}": false;
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}": false;
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}": false;
  "GET /guilds/{guild_id}/bans": false;
  "GET /guilds/{guild_id}/bans/{user_id}": false;
  "PUT /guilds/{guild_id}/bans/{user_id}": false;
  "DELETE /guilds/{guild_id}/bans/{user_id}": false;
  "POST /guilds/{guild_id}/bulk-ban": false;
  "GET /guilds/{guild_id}/channels": false;
  "POST /guilds/{guild_id}/channels": false;
  "PATCH /guilds/{guild_id}/channels": false;
  "GET /guilds/{guild_id}/emojis": false;
  "POST /guilds/{guild_id}/emojis": false;
  "GET /guilds/{guild_id}/emojis/{emoji_id}": false;
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}": false;
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}": false;
  "PUT /guilds/{guild_id}/incident-actions": false;
  "GET /guilds/{guild_id}/integrations": false;
  "DELETE /guilds/{guild_id}/integrations/{integration_id}": false;
  "GET /guilds/{guild_id}/invites": false;
  "GET /guilds/{guild_id}/members": false;
  "PATCH /guilds/{guild_id}/members/@me": false;
  "GET /guilds/{guild_id}/members/search": true;
  "GET /guilds/{guild_id}/members/{user_id}": false;
  "PUT /guilds/{guild_id}/members/{user_id}": false;
  "DELETE /guilds/{guild_id}/members/{user_id}": false;
  "PATCH /guilds/{guild_id}/members/{user_id}": false;
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}": false;
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}": false;
  "GET /guilds/{guild_id}/messages/search": false;
  "GET /guilds/{guild_id}/new-member-welcome": false;
  "GET /guilds/{guild_id}/onboarding": false;
  "PUT /guilds/{guild_id}/onboarding": false;
  "GET /guilds/{guild_id}/preview": false;
  "GET /guilds/{guild_id}/prune": false;
  "POST /guilds/{guild_id}/prune": false;
  "GET /guilds/{guild_id}/regions": false;
  "GET /guilds/{guild_id}/requests": false;
  "PATCH /guilds/{guild_id}/requests/{request_id}": false;
  "GET /guilds/{guild_id}/roles": false;
  "POST /guilds/{guild_id}/roles": false;
  "PATCH /guilds/{guild_id}/roles": false;
  "GET /guilds/{guild_id}/roles/member-counts": false;
  "GET /guilds/{guild_id}/roles/{role_id}": false;
  "DELETE /guilds/{guild_id}/roles/{role_id}": false;
  "PATCH /guilds/{guild_id}/roles/{role_id}": false;
  "GET /guilds/{guild_id}/scheduled-events": false;
  "POST /guilds/{guild_id}/scheduled-events": false;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": false;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": false;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": false;
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions": false;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": false;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": false;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": false;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts": false;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users": false;
  "GET /guilds/{guild_id}/soundboard-sounds": false;
  "POST /guilds/{guild_id}/soundboard-sounds": false;
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}": false;
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}": false;
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}": false;
  "GET /guilds/{guild_id}/stickers": false;
  "POST /guilds/{guild_id}/stickers": false;
  "GET /guilds/{guild_id}/stickers/{sticker_id}": false;
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}": false;
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}": false;
  "GET /guilds/{guild_id}/templates": false;
  "POST /guilds/{guild_id}/templates": false;
  "PUT /guilds/{guild_id}/templates/{code}": false;
  "DELETE /guilds/{guild_id}/templates/{code}": false;
  "PATCH /guilds/{guild_id}/templates/{code}": false;
  "GET /guilds/{guild_id}/threads/active": false;
  "GET /guilds/{guild_id}/vanity-url": false;
  "GET /guilds/{guild_id}/voice-states/@me": false;
  "PATCH /guilds/{guild_id}/voice-states/@me": false;
  "GET /guilds/{guild_id}/voice-states/{user_id}": false;
  "PATCH /guilds/{guild_id}/voice-states/{user_id}": false;
  "GET /guilds/{guild_id}/webhooks": false;
  "GET /guilds/{guild_id}/welcome-screen": false;
  "PATCH /guilds/{guild_id}/welcome-screen": false;
  "GET /guilds/{guild_id}/widget": false;
  "PATCH /guilds/{guild_id}/widget": false;
  "GET /guilds/{guild_id}/widget.json": false;
  "GET /guilds/{guild_id}/widget.png": false;
  "POST /interactions/{interaction_id}/{interaction_token}/callback": false;
  "GET /invites/{code}": false;
  "DELETE /invites/{code}": false;
  "GET /invites/{code}/target-users": false;
  "PUT /invites/{code}/target-users": false;
  "GET /invites/{code}/target-users/job-status": false;
  "PUT /lobbies": false;
  "POST /lobbies": false;
  "GET /lobbies/{lobby_id}": false;
  "DELETE /lobbies/{lobby_id}": false;
  "PATCH /lobbies/{lobby_id}": false;
  "PATCH /lobbies/{lobby_id}/channel-linking": false;
  "DELETE /lobbies/{lobby_id}/members/@me": false;
  "POST /lobbies/{lobby_id}/members/@me/invites": false;
  "POST /lobbies/{lobby_id}/members/bulk": false;
  "PUT /lobbies/{lobby_id}/members/{user_id}": false;
  "DELETE /lobbies/{lobby_id}/members/{user_id}": false;
  "POST /lobbies/{lobby_id}/members/{user_id}/invites": false;
  "GET /lobbies/{lobby_id}/messages": false;
  "POST /lobbies/{lobby_id}/messages": false;
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": false;
  "GET /oauth2/@me": false;
  "GET /oauth2/applications/@me": false;
  "GET /oauth2/keys": false;
  "GET /oauth2/userinfo": false;
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": false;
  "POST /partner-sdk/provisional-accounts/unmerge": false;
  "POST /partner-sdk/provisional-accounts/unmerge/bot": false;
  "POST /partner-sdk/token": false;
  "POST /partner-sdk/token/bot": false;
  "GET /skus/{sku_id}/subscriptions": false;
  "GET /skus/{sku_id}/subscriptions/{subscription_id}": false;
  "GET /soundboard-default-sounds": false;
  "POST /stage-instances": false;
  "GET /stage-instances/{channel_id}": false;
  "DELETE /stage-instances/{channel_id}": false;
  "PATCH /stage-instances/{channel_id}": false;
  "GET /sticker-packs": false;
  "GET /sticker-packs/{pack_id}": false;
  "GET /stickers/{sticker_id}": false;
  "GET /users/@me": false;
  "PATCH /users/@me": false;
  "GET /users/@me/applications/{application_id}/entitlements": false;
  "GET /users/@me/applications/{application_id}/role-connection": false;
  "PUT /users/@me/applications/{application_id}/role-connection": false;
  "DELETE /users/@me/applications/{application_id}/role-connection": false;
  "POST /users/@me/channels": false;
  "GET /users/@me/connections": false;
  "GET /users/@me/guilds": false;
  "DELETE /users/@me/guilds/{guild_id}": false;
  "GET /users/@me/guilds/{guild_id}/member": false;
  "GET /users/{user_id}": false;
  "GET /voice/regions": false;
  "GET /webhooks/{webhook_id}": false;
  "DELETE /webhooks/{webhook_id}": false;
  "PATCH /webhooks/{webhook_id}": false;
  "GET /webhooks/{webhook_id}/{webhook_token}": false;
  "POST /webhooks/{webhook_id}/{webhook_token}": false;
  "DELETE /webhooks/{webhook_id}/{webhook_token}": false;
  "PATCH /webhooks/{webhook_id}/{webhook_token}": false;
  "POST /webhooks/{webhook_id}/{webhook_token}/github": false;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original": false;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original": false;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original": false;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": false;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": false;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": false;
  "POST /webhooks/{webhook_id}/{webhook_token}/slack": false;
}

export interface DiscordHttpApiOperationRequestBodyMap {
  "GET /applications/@me": never;
  "PATCH /applications/@me": DiscordHttpApiSchemaApplicationFormPartial;
  "GET /applications/{application_id}": never;
  "PATCH /applications/{application_id}": DiscordHttpApiSchemaApplicationFormPartial;
  "GET /applications/{application_id}/activity-instances/{instance_id}": never;
  "POST /applications/{application_id}/attachment": {
  file: string;
};
  "GET /applications/{application_id}/commands": never;
  "PUT /applications/{application_id}/commands": ReadonlyArray<DiscordHttpApiSchemaApplicationCommandUpdateRequest> | null;
  "POST /applications/{application_id}/commands": DiscordHttpApiSchemaApplicationCommandCreateRequest;
  "GET /applications/{application_id}/commands/{command_id}": never;
  "DELETE /applications/{application_id}/commands/{command_id}": never;
  "PATCH /applications/{application_id}/commands/{command_id}": DiscordHttpApiSchemaApplicationCommandPatchRequestPartial;
  "GET /applications/{application_id}/emojis": never;
  "POST /applications/{application_id}/emojis": {
  name: string;
  image: string;
};
  "GET /applications/{application_id}/emojis/{emoji_id}": never;
  "DELETE /applications/{application_id}/emojis/{emoji_id}": never;
  "PATCH /applications/{application_id}/emojis/{emoji_id}": {
  name?: string;
};
  "GET /applications/{application_id}/entitlements": never;
  "POST /applications/{application_id}/entitlements": DiscordHttpApiSchemaCreateEntitlementRequestData;
  "GET /applications/{application_id}/entitlements/{entitlement_id}": never;
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}": never;
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume": never;
  "GET /applications/{application_id}/guilds/{guild_id}/commands": never;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands": ReadonlyArray<DiscordHttpApiSchemaApplicationCommandUpdateRequest> | null;
  "POST /applications/{application_id}/guilds/{guild_id}/commands": DiscordHttpApiSchemaApplicationCommandCreateRequest;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions": never;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": never;
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": never;
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": DiscordHttpApiSchemaApplicationCommandPatchRequestPartial;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": never;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": {
  permissions?: ReadonlyArray<DiscordHttpApiSchemaApplicationCommandPermission> | null;
};
  "GET /applications/{application_id}/role-connections/metadata": never;
  "PUT /applications/{application_id}/role-connections/metadata": ReadonlyArray<DiscordHttpApiSchemaApplicationRoleConnectionsMetadataItemRequest> | null;
  "GET /channels/{channel_id}": never;
  "DELETE /channels/{channel_id}": never;
  "PATCH /channels/{channel_id}": (DiscordHttpApiSchemaUpdateDMRequestPartial | DiscordHttpApiSchemaUpdateGroupDMRequestPartial | DiscordHttpApiSchemaUpdateGuildChannelRequestPartial | DiscordHttpApiSchemaUpdateThreadRequestPartial);
  "POST /channels/{channel_id}/followers": {
  webhook_channel_id: DiscordHttpApiSchemaSnowflakeType;
};
  "GET /channels/{channel_id}/invites": never;
  "POST /channels/{channel_id}/invites": (DiscordHttpApiSchemaCreateGroupDMInviteRequest | DiscordHttpApiSchemaCreateGuildInviteRequest);
  "GET /channels/{channel_id}/messages": never;
  "POST /channels/{channel_id}/messages": DiscordHttpApiSchemaMessageCreateRequest;
  "POST /channels/{channel_id}/messages/bulk-delete": {
  messages: ReadonlyArray<DiscordHttpApiSchemaSnowflakeType>;
};
  "GET /channels/{channel_id}/messages/pins": never;
  "PUT /channels/{channel_id}/messages/pins/{message_id}": never;
  "DELETE /channels/{channel_id}/messages/pins/{message_id}": never;
  "GET /channels/{channel_id}/messages/{message_id}": never;
  "DELETE /channels/{channel_id}/messages/{message_id}": never;
  "PATCH /channels/{channel_id}/messages/{message_id}": DiscordHttpApiSchemaMessageEditRequestPartial;
  "POST /channels/{channel_id}/messages/{message_id}/crosspost": never;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions": never;
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": never;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": never;
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": never;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": never;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": never;
  "POST /channels/{channel_id}/messages/{message_id}/threads": DiscordHttpApiSchemaCreateTextThreadWithMessageRequest;
  "PUT /channels/{channel_id}/permissions/{overwrite_id}": {
  type?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaChannelPermissionOverwrites);
  allow?: number | null;
  deny?: number | null;
};
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}": never;
  "GET /channels/{channel_id}/pins": never;
  "PUT /channels/{channel_id}/pins/{message_id}": never;
  "DELETE /channels/{channel_id}/pins/{message_id}": never;
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}": never;
  "POST /channels/{channel_id}/polls/{message_id}/expire": never;
  "PUT /channels/{channel_id}/recipients/{user_id}": {
  access_token?: string | null;
  nick?: string | null;
};
  "DELETE /channels/{channel_id}/recipients/{user_id}": never;
  "POST /channels/{channel_id}/send-soundboard-sound": DiscordHttpApiSchemaSoundboardSoundSendRequest;
  "GET /channels/{channel_id}/thread-members": never;
  "PUT /channels/{channel_id}/thread-members/@me": never;
  "DELETE /channels/{channel_id}/thread-members/@me": never;
  "GET /channels/{channel_id}/thread-members/{user_id}": never;
  "PUT /channels/{channel_id}/thread-members/{user_id}": never;
  "DELETE /channels/{channel_id}/thread-members/{user_id}": never;
  "POST /channels/{channel_id}/threads": (DiscordHttpApiSchemaCreateForumThreadRequest | DiscordHttpApiSchemaCreateTextThreadWithoutMessageRequest);
  "GET /channels/{channel_id}/threads/archived/private": never;
  "GET /channels/{channel_id}/threads/archived/public": never;
  "GET /channels/{channel_id}/threads/search": never;
  "POST /channels/{channel_id}/typing": never;
  "GET /channels/{channel_id}/users/@me/threads/archived/private": never;
  "PUT /channels/{channel_id}/voice-status": {
  status?: string | null;
};
  "GET /channels/{channel_id}/webhooks": never;
  "POST /channels/{channel_id}/webhooks": {
  name: string;
  avatar?: string | null;
};
  "GET /gateway": never;
  "GET /gateway/bot": never;
  "GET /guilds/templates/{code}": never;
  "GET /guilds/{guild_id}": never;
  "PATCH /guilds/{guild_id}": DiscordHttpApiSchemaGuildPatchRequestPartial;
  "GET /guilds/{guild_id}/audit-logs": never;
  "GET /guilds/{guild_id}/auto-moderation/rules": never;
  "POST /guilds/{guild_id}/auto-moderation/rules": (DiscordHttpApiSchemaDefaultKeywordListUpsertRequest | DiscordHttpApiSchemaKeywordUpsertRequest | DiscordHttpApiSchemaMLSpamUpsertRequest | DiscordHttpApiSchemaMentionSpamUpsertRequest | DiscordHttpApiSchemaUserProfileUpsertRequest);
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}": never;
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}": never;
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}": (DiscordHttpApiSchemaDefaultKeywordListUpsertRequestPartial | DiscordHttpApiSchemaKeywordUpsertRequestPartial | DiscordHttpApiSchemaMLSpamUpsertRequestPartial | DiscordHttpApiSchemaMentionSpamUpsertRequestPartial | DiscordHttpApiSchemaUserProfileUpsertRequestPartial);
  "GET /guilds/{guild_id}/bans": never;
  "GET /guilds/{guild_id}/bans/{user_id}": never;
  "PUT /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiSchemaBanUserFromGuildRequest;
  "DELETE /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiSchemaUnbanUserFromGuildRequest;
  "POST /guilds/{guild_id}/bulk-ban": DiscordHttpApiSchemaBulkBanUsersRequest;
  "GET /guilds/{guild_id}/channels": never;
  "POST /guilds/{guild_id}/channels": DiscordHttpApiSchemaCreateGuildChannelRequest;
  "PATCH /guilds/{guild_id}/channels": ReadonlyArray<{
  id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  position?: number | null;
  parent_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  lock_permissions?: boolean | null;
}>;
  "GET /guilds/{guild_id}/emojis": never;
  "POST /guilds/{guild_id}/emojis": {
  name: string;
  image: string;
  roles?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)> | null;
};
  "GET /guilds/{guild_id}/emojis/{emoji_id}": never;
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}": never;
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}": {
  name?: string;
  roles?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)> | null;
};
  "PUT /guilds/{guild_id}/incident-actions": DiscordHttpApiSchemaGuildIncidentActionsRequest;
  "GET /guilds/{guild_id}/integrations": never;
  "DELETE /guilds/{guild_id}/integrations/{integration_id}": never;
  "GET /guilds/{guild_id}/invites": never;
  "GET /guilds/{guild_id}/members": never;
  "PATCH /guilds/{guild_id}/members/@me": {
  nick?: string | null;
  avatar?: string | null;
  bio?: string | null;
  banner?: string | null;
};
  "GET /guilds/{guild_id}/members/search": never;
  "GET /guilds/{guild_id}/members/{user_id}": never;
  "PUT /guilds/{guild_id}/members/{user_id}": DiscordHttpApiSchemaBotAddGuildMemberRequest;
  "DELETE /guilds/{guild_id}/members/{user_id}": never;
  "PATCH /guilds/{guild_id}/members/{user_id}": {
  nick?: string | null;
  roles?: ReadonlyArray<(DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType)> | null;
  mute?: boolean | null;
  deaf?: boolean | null;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  communication_disabled_until?: string | null;
  flags?: number | null;
};
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}": never;
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}": never;
  "GET /guilds/{guild_id}/messages/search": never;
  "GET /guilds/{guild_id}/new-member-welcome": never;
  "GET /guilds/{guild_id}/onboarding": never;
  "PUT /guilds/{guild_id}/onboarding": DiscordHttpApiSchemaUpdateGuildOnboardingRequest;
  "GET /guilds/{guild_id}/preview": never;
  "GET /guilds/{guild_id}/prune": never;
  "POST /guilds/{guild_id}/prune": DiscordHttpApiSchemaPruneGuildRequest;
  "GET /guilds/{guild_id}/regions": never;
  "GET /guilds/{guild_id}/requests": never;
  "PATCH /guilds/{guild_id}/requests/{request_id}": {
  action?: DiscordHttpApiSchemaGuildJoinRequestApplicationStatus;
  rejection_reason?: string | null;
};
  "GET /guilds/{guild_id}/roles": never;
  "POST /guilds/{guild_id}/roles": DiscordHttpApiSchemaCreateRoleRequest;
  "PATCH /guilds/{guild_id}/roles": ReadonlyArray<DiscordHttpApiSchemaUpdateRolePositionsRequest>;
  "GET /guilds/{guild_id}/roles/member-counts": never;
  "GET /guilds/{guild_id}/roles/{role_id}": never;
  "DELETE /guilds/{guild_id}/roles/{role_id}": never;
  "PATCH /guilds/{guild_id}/roles/{role_id}": DiscordHttpApiSchemaUpdateRoleRequestPartial;
  "GET /guilds/{guild_id}/scheduled-events": never;
  "POST /guilds/{guild_id}/scheduled-events": (DiscordHttpApiSchemaExternalScheduledEventCreateRequest | DiscordHttpApiSchemaStageScheduledEventCreateRequest | DiscordHttpApiSchemaVoiceScheduledEventCreateRequest);
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": never;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": never;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": (DiscordHttpApiSchemaExternalScheduledEventPatchRequestPartial | DiscordHttpApiSchemaStageScheduledEventPatchRequestPartial | DiscordHttpApiSchemaVoiceScheduledEventPatchRequestPartial);
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions": DiscordHttpApiSchemaGuildScheduledEventExceptionCreateRequest;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": never;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": DiscordHttpApiSchemaGuildScheduledEventExceptionPatchRequestPartial;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": never;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts": never;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users": never;
  "GET /guilds/{guild_id}/soundboard-sounds": never;
  "POST /guilds/{guild_id}/soundboard-sounds": DiscordHttpApiSchemaSoundboardCreateRequest;
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}": never;
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}": never;
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}": DiscordHttpApiSchemaSoundboardPatchRequestPartial;
  "GET /guilds/{guild_id}/stickers": never;
  "POST /guilds/{guild_id}/stickers": {
  name: string;
  tags: string;
  description?: string | null;
  file: string;
};
  "GET /guilds/{guild_id}/stickers/{sticker_id}": never;
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}": never;
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}": {
  name?: string;
  tags?: string;
  description?: string | null;
};
  "GET /guilds/{guild_id}/templates": never;
  "POST /guilds/{guild_id}/templates": {
  name: string;
  description?: string | null;
};
  "PUT /guilds/{guild_id}/templates/{code}": never;
  "DELETE /guilds/{guild_id}/templates/{code}": never;
  "PATCH /guilds/{guild_id}/templates/{code}": {
  name?: string;
  description?: string | null;
};
  "GET /guilds/{guild_id}/threads/active": never;
  "GET /guilds/{guild_id}/vanity-url": never;
  "GET /guilds/{guild_id}/voice-states/@me": never;
  "PATCH /guilds/{guild_id}/voice-states/@me": DiscordHttpApiSchemaUpdateSelfVoiceStateRequestPartial;
  "GET /guilds/{guild_id}/voice-states/{user_id}": never;
  "PATCH /guilds/{guild_id}/voice-states/{user_id}": DiscordHttpApiSchemaUpdateVoiceStateRequestPartial;
  "GET /guilds/{guild_id}/webhooks": never;
  "GET /guilds/{guild_id}/welcome-screen": never;
  "PATCH /guilds/{guild_id}/welcome-screen": DiscordHttpApiSchemaWelcomeScreenPatchRequestPartial;
  "GET /guilds/{guild_id}/widget": never;
  "PATCH /guilds/{guild_id}/widget": {
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  enabled?: boolean | null;
};
  "GET /guilds/{guild_id}/widget.json": never;
  "GET /guilds/{guild_id}/widget.png": never;
  "POST /interactions/{interaction_id}/{interaction_token}/callback": (DiscordHttpApiSchemaApplicationCommandAutocompleteCallbackRequest | DiscordHttpApiSchemaCreateMessageInteractionCallbackRequest | DiscordHttpApiSchemaLaunchActivityInteractionCallbackRequest | DiscordHttpApiSchemaModalInteractionCallbackRequest | DiscordHttpApiSchemaPongInteractionCallbackRequest | DiscordHttpApiSchemaSocialLayerSKUPurchaseEligibilityInteractionCallbackRequest | DiscordHttpApiSchemaUpdateMessageInteractionCallbackRequest);
  "GET /invites/{code}": never;
  "DELETE /invites/{code}": never;
  "GET /invites/{code}/target-users": never;
  "PUT /invites/{code}/target-users": {
  target_users_file: string;
};
  "GET /invites/{code}/target-users/job-status": never;
  "PUT /lobbies": {
  idle_timeout_seconds?: number | null;
  lobby_metadata?: {
  readonly [key: string]: string | undefined;
} | null;
  member_metadata?: {
  readonly [key: string]: string | undefined;
} | null;
  secret: string;
  flags?: (DiscordHttpApiSchemaJsonValue | 1);
};
  "POST /lobbies": {
  idle_timeout_seconds?: number | null;
  members?: ReadonlyArray<DiscordHttpApiSchemaLobbyMemberRequest> | null;
  metadata?: {
  readonly [key: string]: string | undefined;
} | null;
  flags?: (DiscordHttpApiSchemaJsonValue | 1);
  override_event_webhooks_url?: string | null;
};
  "GET /lobbies/{lobby_id}": never;
  "DELETE /lobbies/{lobby_id}": never;
  "PATCH /lobbies/{lobby_id}": {
  idle_timeout_seconds?: number | null;
  metadata?: {
  readonly [key: string]: string | undefined;
} | null;
  members?: ReadonlyArray<DiscordHttpApiSchemaLobbyMemberRequest> | null;
  flags?: (DiscordHttpApiSchemaJsonValue | 1);
  override_event_webhooks_url?: string | null;
};
  "PATCH /lobbies/{lobby_id}/channel-linking": {
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};
  "DELETE /lobbies/{lobby_id}/members/@me": never;
  "POST /lobbies/{lobby_id}/members/@me/invites": never;
  "POST /lobbies/{lobby_id}/members/bulk": ReadonlyArray<DiscordHttpApiSchemaBulkLobbyMemberRequest> | null;
  "PUT /lobbies/{lobby_id}/members/{user_id}": {
  metadata?: {
  readonly [key: string]: string | undefined;
} | null;
  flags?: (DiscordHttpApiSchemaJsonValue | 1);
};
  "DELETE /lobbies/{lobby_id}/members/{user_id}": never;
  "POST /lobbies/{lobby_id}/members/{user_id}/invites": never;
  "GET /lobbies/{lobby_id}/messages": never;
  "POST /lobbies/{lobby_id}/messages": DiscordHttpApiSchemaSDKMessageRequest;
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": {
  readonly [key: string]: string | undefined;
};
  "GET /oauth2/@me": never;
  "GET /oauth2/applications/@me": never;
  "GET /oauth2/keys": never;
  "GET /oauth2/userinfo": never;
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": {
  readonly [key: string]: string | undefined;
};
  "POST /partner-sdk/provisional-accounts/unmerge": {
  client_id: DiscordHttpApiSchemaSnowflakeType;
  client_secret?: string | null;
  external_auth_token: string;
  external_auth_type: DiscordHttpApiSchemaApplicationIdentityProviderAuthType;
};
  "POST /partner-sdk/provisional-accounts/unmerge/bot": {
  external_user_id: string;
};
  "POST /partner-sdk/token": {
  client_id: DiscordHttpApiSchemaSnowflakeType;
  client_secret?: string | null;
  external_auth_token: string;
  external_auth_type: DiscordHttpApiSchemaApplicationIdentityProviderAuthType;
};
  "POST /partner-sdk/token/bot": {
  provisional_user_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  external_user_id: string;
  preferred_global_name?: string | null;
};
  "GET /skus/{sku_id}/subscriptions": never;
  "GET /skus/{sku_id}/subscriptions/{subscription_id}": never;
  "GET /soundboard-default-sounds": never;
  "POST /stage-instances": {
  topic: string;
  channel_id: DiscordHttpApiSchemaSnowflakeType;
  privacy_level?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaStageInstancesPrivacyLevels);
  guild_scheduled_event_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
  send_start_notification?: boolean | null;
};
  "GET /stage-instances/{channel_id}": never;
  "DELETE /stage-instances/{channel_id}": never;
  "PATCH /stage-instances/{channel_id}": {
  topic?: string;
  privacy_level?: DiscordHttpApiSchemaStageInstancesPrivacyLevels;
};
  "GET /sticker-packs": never;
  "GET /sticker-packs/{pack_id}": never;
  "GET /stickers/{sticker_id}": never;
  "GET /users/@me": never;
  "PATCH /users/@me": DiscordHttpApiSchemaBotAccountPatchRequest;
  "GET /users/@me/applications/{application_id}/entitlements": never;
  "GET /users/@me/applications/{application_id}/role-connection": never;
  "PUT /users/@me/applications/{application_id}/role-connection": DiscordHttpApiSchemaUpdateApplicationUserRoleConnectionRequest;
  "DELETE /users/@me/applications/{application_id}/role-connection": never;
  "POST /users/@me/channels": DiscordHttpApiSchemaCreatePrivateChannelRequest;
  "GET /users/@me/connections": never;
  "GET /users/@me/guilds": never;
  "DELETE /users/@me/guilds/{guild_id}": never;
  "GET /users/@me/guilds/{guild_id}/member": never;
  "GET /users/{user_id}": never;
  "GET /voice/regions": never;
  "GET /webhooks/{webhook_id}": never;
  "DELETE /webhooks/{webhook_id}": never;
  "PATCH /webhooks/{webhook_id}": {
  name?: string;
  avatar?: string | null;
  channel_id?: (DiscordHttpApiSchemaJsonValue | DiscordHttpApiSchemaSnowflakeType);
};
  "GET /webhooks/{webhook_id}/{webhook_token}": never;
  "POST /webhooks/{webhook_id}/{webhook_token}": (DiscordHttpApiSchemaIncomingWebhookRequestPartial | DiscordHttpApiSchemaIncomingWebhookUpdateRequestPartial);
  "DELETE /webhooks/{webhook_id}/{webhook_token}": never;
  "PATCH /webhooks/{webhook_id}/{webhook_token}": {
  name?: string;
  avatar?: string | null;
};
  "POST /webhooks/{webhook_id}/{webhook_token}/github": DiscordHttpApiSchemaGithubWebhook;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original": never;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original": never;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original": DiscordHttpApiSchemaIncomingWebhookUpdateRequestPartial;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": never;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": never;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": DiscordHttpApiSchemaIncomingWebhookUpdateRequestPartial;
  "POST /webhooks/{webhook_id}/{webhook_token}/slack": DiscordHttpApiSchemaSlackWebhook;
}

export interface DiscordHttpApiOperationRequestBodyRequiredMap {
  "GET /applications/@me": false;
  "PATCH /applications/@me": true;
  "GET /applications/{application_id}": false;
  "PATCH /applications/{application_id}": true;
  "GET /applications/{application_id}/activity-instances/{instance_id}": false;
  "POST /applications/{application_id}/attachment": true;
  "GET /applications/{application_id}/commands": false;
  "PUT /applications/{application_id}/commands": true;
  "POST /applications/{application_id}/commands": true;
  "GET /applications/{application_id}/commands/{command_id}": false;
  "DELETE /applications/{application_id}/commands/{command_id}": false;
  "PATCH /applications/{application_id}/commands/{command_id}": true;
  "GET /applications/{application_id}/emojis": false;
  "POST /applications/{application_id}/emojis": true;
  "GET /applications/{application_id}/emojis/{emoji_id}": false;
  "DELETE /applications/{application_id}/emojis/{emoji_id}": false;
  "PATCH /applications/{application_id}/emojis/{emoji_id}": true;
  "GET /applications/{application_id}/entitlements": false;
  "POST /applications/{application_id}/entitlements": true;
  "GET /applications/{application_id}/entitlements/{entitlement_id}": false;
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}": false;
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume": false;
  "GET /applications/{application_id}/guilds/{guild_id}/commands": false;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands": true;
  "POST /applications/{application_id}/guilds/{guild_id}/commands": true;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions": false;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": false;
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": false;
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": true;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": false;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": true;
  "GET /applications/{application_id}/role-connections/metadata": false;
  "PUT /applications/{application_id}/role-connections/metadata": true;
  "GET /channels/{channel_id}": false;
  "DELETE /channels/{channel_id}": false;
  "PATCH /channels/{channel_id}": true;
  "POST /channels/{channel_id}/followers": true;
  "GET /channels/{channel_id}/invites": false;
  "POST /channels/{channel_id}/invites": true;
  "GET /channels/{channel_id}/messages": false;
  "POST /channels/{channel_id}/messages": true;
  "POST /channels/{channel_id}/messages/bulk-delete": true;
  "GET /channels/{channel_id}/messages/pins": false;
  "PUT /channels/{channel_id}/messages/pins/{message_id}": false;
  "DELETE /channels/{channel_id}/messages/pins/{message_id}": false;
  "GET /channels/{channel_id}/messages/{message_id}": false;
  "DELETE /channels/{channel_id}/messages/{message_id}": false;
  "PATCH /channels/{channel_id}/messages/{message_id}": true;
  "POST /channels/{channel_id}/messages/{message_id}/crosspost": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions": false;
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": false;
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": false;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": false;
  "POST /channels/{channel_id}/messages/{message_id}/threads": true;
  "PUT /channels/{channel_id}/permissions/{overwrite_id}": true;
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}": false;
  "GET /channels/{channel_id}/pins": false;
  "PUT /channels/{channel_id}/pins/{message_id}": false;
  "DELETE /channels/{channel_id}/pins/{message_id}": false;
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}": false;
  "POST /channels/{channel_id}/polls/{message_id}/expire": false;
  "PUT /channels/{channel_id}/recipients/{user_id}": true;
  "DELETE /channels/{channel_id}/recipients/{user_id}": false;
  "POST /channels/{channel_id}/send-soundboard-sound": true;
  "GET /channels/{channel_id}/thread-members": false;
  "PUT /channels/{channel_id}/thread-members/@me": false;
  "DELETE /channels/{channel_id}/thread-members/@me": false;
  "GET /channels/{channel_id}/thread-members/{user_id}": false;
  "PUT /channels/{channel_id}/thread-members/{user_id}": false;
  "DELETE /channels/{channel_id}/thread-members/{user_id}": false;
  "POST /channels/{channel_id}/threads": true;
  "GET /channels/{channel_id}/threads/archived/private": false;
  "GET /channels/{channel_id}/threads/archived/public": false;
  "GET /channels/{channel_id}/threads/search": false;
  "POST /channels/{channel_id}/typing": false;
  "GET /channels/{channel_id}/users/@me/threads/archived/private": false;
  "PUT /channels/{channel_id}/voice-status": true;
  "GET /channels/{channel_id}/webhooks": false;
  "POST /channels/{channel_id}/webhooks": true;
  "GET /gateway": false;
  "GET /gateway/bot": false;
  "GET /guilds/templates/{code}": false;
  "GET /guilds/{guild_id}": false;
  "PATCH /guilds/{guild_id}": true;
  "GET /guilds/{guild_id}/audit-logs": false;
  "GET /guilds/{guild_id}/auto-moderation/rules": false;
  "POST /guilds/{guild_id}/auto-moderation/rules": true;
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}": false;
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}": false;
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}": true;
  "GET /guilds/{guild_id}/bans": false;
  "GET /guilds/{guild_id}/bans/{user_id}": false;
  "PUT /guilds/{guild_id}/bans/{user_id}": true;
  "DELETE /guilds/{guild_id}/bans/{user_id}": true;
  "POST /guilds/{guild_id}/bulk-ban": true;
  "GET /guilds/{guild_id}/channels": false;
  "POST /guilds/{guild_id}/channels": true;
  "PATCH /guilds/{guild_id}/channels": true;
  "GET /guilds/{guild_id}/emojis": false;
  "POST /guilds/{guild_id}/emojis": true;
  "GET /guilds/{guild_id}/emojis/{emoji_id}": false;
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}": false;
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}": true;
  "PUT /guilds/{guild_id}/incident-actions": true;
  "GET /guilds/{guild_id}/integrations": false;
  "DELETE /guilds/{guild_id}/integrations/{integration_id}": false;
  "GET /guilds/{guild_id}/invites": false;
  "GET /guilds/{guild_id}/members": false;
  "PATCH /guilds/{guild_id}/members/@me": true;
  "GET /guilds/{guild_id}/members/search": false;
  "GET /guilds/{guild_id}/members/{user_id}": false;
  "PUT /guilds/{guild_id}/members/{user_id}": true;
  "DELETE /guilds/{guild_id}/members/{user_id}": false;
  "PATCH /guilds/{guild_id}/members/{user_id}": true;
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}": false;
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}": false;
  "GET /guilds/{guild_id}/messages/search": false;
  "GET /guilds/{guild_id}/new-member-welcome": false;
  "GET /guilds/{guild_id}/onboarding": false;
  "PUT /guilds/{guild_id}/onboarding": true;
  "GET /guilds/{guild_id}/preview": false;
  "GET /guilds/{guild_id}/prune": false;
  "POST /guilds/{guild_id}/prune": true;
  "GET /guilds/{guild_id}/regions": false;
  "GET /guilds/{guild_id}/requests": false;
  "PATCH /guilds/{guild_id}/requests/{request_id}": true;
  "GET /guilds/{guild_id}/roles": false;
  "POST /guilds/{guild_id}/roles": true;
  "PATCH /guilds/{guild_id}/roles": true;
  "GET /guilds/{guild_id}/roles/member-counts": false;
  "GET /guilds/{guild_id}/roles/{role_id}": false;
  "DELETE /guilds/{guild_id}/roles/{role_id}": false;
  "PATCH /guilds/{guild_id}/roles/{role_id}": true;
  "GET /guilds/{guild_id}/scheduled-events": false;
  "POST /guilds/{guild_id}/scheduled-events": true;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": false;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": false;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": true;
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions": true;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": false;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": true;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": false;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts": false;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users": false;
  "GET /guilds/{guild_id}/soundboard-sounds": false;
  "POST /guilds/{guild_id}/soundboard-sounds": true;
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}": false;
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}": false;
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}": true;
  "GET /guilds/{guild_id}/stickers": false;
  "POST /guilds/{guild_id}/stickers": true;
  "GET /guilds/{guild_id}/stickers/{sticker_id}": false;
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}": false;
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}": true;
  "GET /guilds/{guild_id}/templates": false;
  "POST /guilds/{guild_id}/templates": true;
  "PUT /guilds/{guild_id}/templates/{code}": false;
  "DELETE /guilds/{guild_id}/templates/{code}": false;
  "PATCH /guilds/{guild_id}/templates/{code}": true;
  "GET /guilds/{guild_id}/threads/active": false;
  "GET /guilds/{guild_id}/vanity-url": false;
  "GET /guilds/{guild_id}/voice-states/@me": false;
  "PATCH /guilds/{guild_id}/voice-states/@me": true;
  "GET /guilds/{guild_id}/voice-states/{user_id}": false;
  "PATCH /guilds/{guild_id}/voice-states/{user_id}": true;
  "GET /guilds/{guild_id}/webhooks": false;
  "GET /guilds/{guild_id}/welcome-screen": false;
  "PATCH /guilds/{guild_id}/welcome-screen": true;
  "GET /guilds/{guild_id}/widget": false;
  "PATCH /guilds/{guild_id}/widget": true;
  "GET /guilds/{guild_id}/widget.json": false;
  "GET /guilds/{guild_id}/widget.png": false;
  "POST /interactions/{interaction_id}/{interaction_token}/callback": true;
  "GET /invites/{code}": false;
  "DELETE /invites/{code}": false;
  "GET /invites/{code}/target-users": false;
  "PUT /invites/{code}/target-users": true;
  "GET /invites/{code}/target-users/job-status": false;
  "PUT /lobbies": true;
  "POST /lobbies": true;
  "GET /lobbies/{lobby_id}": false;
  "DELETE /lobbies/{lobby_id}": false;
  "PATCH /lobbies/{lobby_id}": true;
  "PATCH /lobbies/{lobby_id}/channel-linking": true;
  "DELETE /lobbies/{lobby_id}/members/@me": false;
  "POST /lobbies/{lobby_id}/members/@me/invites": false;
  "POST /lobbies/{lobby_id}/members/bulk": true;
  "PUT /lobbies/{lobby_id}/members/{user_id}": true;
  "DELETE /lobbies/{lobby_id}/members/{user_id}": false;
  "POST /lobbies/{lobby_id}/members/{user_id}/invites": false;
  "GET /lobbies/{lobby_id}/messages": false;
  "POST /lobbies/{lobby_id}/messages": true;
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": true;
  "GET /oauth2/@me": false;
  "GET /oauth2/applications/@me": false;
  "GET /oauth2/keys": false;
  "GET /oauth2/userinfo": false;
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": true;
  "POST /partner-sdk/provisional-accounts/unmerge": true;
  "POST /partner-sdk/provisional-accounts/unmerge/bot": true;
  "POST /partner-sdk/token": true;
  "POST /partner-sdk/token/bot": true;
  "GET /skus/{sku_id}/subscriptions": false;
  "GET /skus/{sku_id}/subscriptions/{subscription_id}": false;
  "GET /soundboard-default-sounds": false;
  "POST /stage-instances": true;
  "GET /stage-instances/{channel_id}": false;
  "DELETE /stage-instances/{channel_id}": false;
  "PATCH /stage-instances/{channel_id}": true;
  "GET /sticker-packs": false;
  "GET /sticker-packs/{pack_id}": false;
  "GET /stickers/{sticker_id}": false;
  "GET /users/@me": false;
  "PATCH /users/@me": true;
  "GET /users/@me/applications/{application_id}/entitlements": false;
  "GET /users/@me/applications/{application_id}/role-connection": false;
  "PUT /users/@me/applications/{application_id}/role-connection": true;
  "DELETE /users/@me/applications/{application_id}/role-connection": false;
  "POST /users/@me/channels": true;
  "GET /users/@me/connections": false;
  "GET /users/@me/guilds": false;
  "DELETE /users/@me/guilds/{guild_id}": false;
  "GET /users/@me/guilds/{guild_id}/member": false;
  "GET /users/{user_id}": false;
  "GET /voice/regions": false;
  "GET /webhooks/{webhook_id}": false;
  "DELETE /webhooks/{webhook_id}": false;
  "PATCH /webhooks/{webhook_id}": true;
  "GET /webhooks/{webhook_id}/{webhook_token}": false;
  "POST /webhooks/{webhook_id}/{webhook_token}": true;
  "DELETE /webhooks/{webhook_id}/{webhook_token}": false;
  "PATCH /webhooks/{webhook_id}/{webhook_token}": true;
  "POST /webhooks/{webhook_id}/{webhook_token}/github": true;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original": false;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original": false;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original": true;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": false;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": false;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": true;
  "POST /webhooks/{webhook_id}/{webhook_token}/slack": true;
}

export interface DiscordHttpApiOperationResponseMap {
  "GET /applications/@me": DiscordHttpApiSchemaPrivateApplicationResponse;
  "PATCH /applications/@me": DiscordHttpApiSchemaPrivateApplicationResponse;
  "GET /applications/{application_id}": DiscordHttpApiSchemaPrivateApplicationResponse;
  "PATCH /applications/{application_id}": DiscordHttpApiSchemaPrivateApplicationResponse;
  "GET /applications/{application_id}/activity-instances/{instance_id}": DiscordHttpApiSchemaEmbeddedActivityInstance;
  "POST /applications/{application_id}/attachment": DiscordHttpApiSchemaActivitiesAttachmentResponse;
  "GET /applications/{application_id}/commands": ReadonlyArray<DiscordHttpApiSchemaApplicationCommandResponse> | null;
  "PUT /applications/{application_id}/commands": ReadonlyArray<DiscordHttpApiSchemaApplicationCommandResponse> | null;
  "POST /applications/{application_id}/commands": DiscordHttpApiSchemaApplicationCommandResponse;
  "GET /applications/{application_id}/commands/{command_id}": DiscordHttpApiSchemaApplicationCommandResponse;
  "DELETE /applications/{application_id}/commands/{command_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /applications/{application_id}/commands/{command_id}": DiscordHttpApiSchemaApplicationCommandResponse;
  "GET /applications/{application_id}/emojis": DiscordHttpApiSchemaListApplicationEmojisResponse;
  "POST /applications/{application_id}/emojis": DiscordHttpApiSchemaEmojiResponse;
  "GET /applications/{application_id}/emojis/{emoji_id}": DiscordHttpApiSchemaEmojiResponse;
  "DELETE /applications/{application_id}/emojis/{emoji_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /applications/{application_id}/emojis/{emoji_id}": DiscordHttpApiSchemaEmojiResponse;
  "GET /applications/{application_id}/entitlements": ReadonlyArray<DiscordHttpApiSchemaEntitlementResponse>;
  "POST /applications/{application_id}/entitlements": DiscordHttpApiSchemaEntitlementResponse;
  "GET /applications/{application_id}/entitlements/{entitlement_id}": DiscordHttpApiSchemaEntitlementResponse;
  "DELETE /applications/{application_id}/entitlements/{entitlement_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /applications/{application_id}/entitlements/{entitlement_id}/consume": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /applications/{application_id}/guilds/{guild_id}/commands": ReadonlyArray<DiscordHttpApiSchemaApplicationCommandResponse> | null;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands": ReadonlyArray<DiscordHttpApiSchemaApplicationCommandResponse> | null;
  "POST /applications/{application_id}/guilds/{guild_id}/commands": DiscordHttpApiSchemaApplicationCommandResponse;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/permissions": ReadonlyArray<DiscordHttpApiSchemaCommandPermissionsResponse>;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": DiscordHttpApiSchemaApplicationCommandResponse;
  "DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}": DiscordHttpApiSchemaApplicationCommandResponse;
  "GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": DiscordHttpApiSchemaCommandPermissionsResponse;
  "PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": DiscordHttpApiSchemaCommandPermissionsResponse;
  "GET /applications/{application_id}/role-connections/metadata": ReadonlyArray<DiscordHttpApiSchemaApplicationRoleConnectionsMetadataItemResponse> | null;
  "PUT /applications/{application_id}/role-connections/metadata": ReadonlyArray<DiscordHttpApiSchemaApplicationRoleConnectionsMetadataItemResponse> | null;
  "GET /channels/{channel_id}": (DiscordHttpApiSchemaGuildChannelResponse | DiscordHttpApiSchemaPrivateChannelResponse | DiscordHttpApiSchemaPrivateGroupChannelResponse | DiscordHttpApiSchemaThreadResponse);
  "DELETE /channels/{channel_id}": (DiscordHttpApiSchemaGuildChannelResponse | DiscordHttpApiSchemaPrivateChannelResponse | DiscordHttpApiSchemaPrivateGroupChannelResponse | DiscordHttpApiSchemaThreadResponse);
  "PATCH /channels/{channel_id}": (DiscordHttpApiSchemaGuildChannelResponse | DiscordHttpApiSchemaPrivateChannelResponse | DiscordHttpApiSchemaPrivateGroupChannelResponse | DiscordHttpApiSchemaThreadResponse);
  "POST /channels/{channel_id}/followers": DiscordHttpApiSchemaChannelFollowerResponse;
  "GET /channels/{channel_id}/invites": ReadonlyArray<(DiscordHttpApiSchemaFriendInviteResponse | DiscordHttpApiSchemaGroupDMInviteResponse | DiscordHttpApiSchemaGuildInviteResponse | DiscordHttpApiSchemaJsonValue)> | null;
  "POST /channels/{channel_id}/invites": (DiscordHttpApiSchemaFriendInviteResponse | DiscordHttpApiSchemaGroupDMInviteResponse | DiscordHttpApiSchemaGuildInviteResponse);
  "GET /channels/{channel_id}/messages": ReadonlyArray<DiscordHttpApiSchemaMessageResponse> | null;
  "POST /channels/{channel_id}/messages": DiscordHttpApiSchemaMessageResponse;
  "POST /channels/{channel_id}/messages/bulk-delete": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/messages/pins": DiscordHttpApiSchemaPinnedMessagesResponse;
  "PUT /channels/{channel_id}/messages/pins/{message_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /channels/{channel_id}/messages/pins/{message_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/messages/{message_id}": DiscordHttpApiSchemaMessageResponse;
  "DELETE /channels/{channel_id}/messages/{message_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /channels/{channel_id}/messages/{message_id}": DiscordHttpApiSchemaMessageResponse;
  "POST /channels/{channel_id}/messages/{message_id}/crosspost": DiscordHttpApiSchemaMessageResponse;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": ReadonlyArray<DiscordHttpApiSchemaUserResponse>;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}": DiscordHttpApiSchemaRatelimitedResponse;
  "PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /channels/{channel_id}/messages/{message_id}/threads": DiscordHttpApiSchemaThreadResponse;
  "PUT /channels/{channel_id}/permissions/{overwrite_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /channels/{channel_id}/permissions/{overwrite_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/pins": ReadonlyArray<DiscordHttpApiSchemaMessageResponse> | null;
  "PUT /channels/{channel_id}/pins/{message_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /channels/{channel_id}/pins/{message_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}": DiscordHttpApiSchemaPollAnswerDetailsResponse;
  "POST /channels/{channel_id}/polls/{message_id}/expire": DiscordHttpApiSchemaMessageResponse;
  "PUT /channels/{channel_id}/recipients/{user_id}": (DiscordHttpApiSchemaPrivateChannelResponse | DiscordHttpApiSchemaPrivateGroupChannelResponse);
  "DELETE /channels/{channel_id}/recipients/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /channels/{channel_id}/send-soundboard-sound": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/thread-members": ReadonlyArray<DiscordHttpApiSchemaThreadMemberResponse>;
  "PUT /channels/{channel_id}/thread-members/@me": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /channels/{channel_id}/thread-members/@me": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/thread-members/{user_id}": DiscordHttpApiSchemaThreadMemberResponse;
  "PUT /channels/{channel_id}/thread-members/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /channels/{channel_id}/thread-members/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /channels/{channel_id}/threads": DiscordHttpApiSchemaCreatedThreadResponse;
  "GET /channels/{channel_id}/threads/archived/private": DiscordHttpApiSchemaThreadsResponse;
  "GET /channels/{channel_id}/threads/archived/public": DiscordHttpApiSchemaThreadsResponse;
  "GET /channels/{channel_id}/threads/search": DiscordHttpApiSchemaThreadSearchResponse;
  "POST /channels/{channel_id}/typing": DiscordHttpApiSchemaTypingIndicatorResponse;
  "GET /channels/{channel_id}/users/@me/threads/archived/private": DiscordHttpApiSchemaThreadsResponse;
  "PUT /channels/{channel_id}/voice-status": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /channels/{channel_id}/webhooks": ReadonlyArray<(DiscordHttpApiSchemaApplicationIncomingWebhookResponse | DiscordHttpApiSchemaChannelFollowerWebhookResponse | DiscordHttpApiSchemaGuildIncomingWebhookResponse)> | null;
  "POST /channels/{channel_id}/webhooks": DiscordHttpApiSchemaGuildIncomingWebhookResponse;
  "GET /gateway": DiscordHttpApiSchemaGatewayResponse;
  "GET /gateway/bot": DiscordHttpApiSchemaGatewayBotResponse;
  "GET /guilds/templates/{code}": DiscordHttpApiSchemaGuildTemplateResponse;
  "GET /guilds/{guild_id}": DiscordHttpApiSchemaGuildWithCountsResponse;
  "PATCH /guilds/{guild_id}": DiscordHttpApiSchemaGuildResponse;
  "GET /guilds/{guild_id}/audit-logs": DiscordHttpApiSchemaGuildAuditLogResponse;
  "GET /guilds/{guild_id}/auto-moderation/rules": ReadonlyArray<(DiscordHttpApiSchemaDefaultKeywordRuleResponse | DiscordHttpApiSchemaKeywordRuleResponse | DiscordHttpApiSchemaMLSpamRuleResponse | DiscordHttpApiSchemaMentionSpamRuleResponse | DiscordHttpApiSchemaUserProfileRuleResponse | DiscordHttpApiSchemaJsonValue)> | null;
  "POST /guilds/{guild_id}/auto-moderation/rules": (DiscordHttpApiSchemaDefaultKeywordRuleResponse | DiscordHttpApiSchemaKeywordRuleResponse | DiscordHttpApiSchemaMLSpamRuleResponse | DiscordHttpApiSchemaMentionSpamRuleResponse | DiscordHttpApiSchemaUserProfileRuleResponse);
  "GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}": (DiscordHttpApiSchemaDefaultKeywordRuleResponse | DiscordHttpApiSchemaKeywordRuleResponse | DiscordHttpApiSchemaMLSpamRuleResponse | DiscordHttpApiSchemaMentionSpamRuleResponse | DiscordHttpApiSchemaUserProfileRuleResponse);
  "DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}": (DiscordHttpApiSchemaDefaultKeywordRuleResponse | DiscordHttpApiSchemaKeywordRuleResponse | DiscordHttpApiSchemaMLSpamRuleResponse | DiscordHttpApiSchemaMentionSpamRuleResponse | DiscordHttpApiSchemaUserProfileRuleResponse);
  "GET /guilds/{guild_id}/bans": ReadonlyArray<DiscordHttpApiSchemaGuildBanResponse> | null;
  "GET /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiSchemaGuildBanResponse;
  "PUT /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /guilds/{guild_id}/bans/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /guilds/{guild_id}/bulk-ban": DiscordHttpApiSchemaBulkBanUsersResponse;
  "GET /guilds/{guild_id}/channels": ReadonlyArray<(DiscordHttpApiSchemaGuildChannelResponse | DiscordHttpApiSchemaPrivateChannelResponse | DiscordHttpApiSchemaPrivateGroupChannelResponse | DiscordHttpApiSchemaThreadResponse)> | null;
  "POST /guilds/{guild_id}/channels": DiscordHttpApiSchemaGuildChannelResponse;
  "PATCH /guilds/{guild_id}/channels": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /guilds/{guild_id}/emojis": ReadonlyArray<DiscordHttpApiSchemaEmojiResponse> | null;
  "POST /guilds/{guild_id}/emojis": DiscordHttpApiSchemaEmojiResponse;
  "GET /guilds/{guild_id}/emojis/{emoji_id}": DiscordHttpApiSchemaEmojiResponse;
  "DELETE /guilds/{guild_id}/emojis/{emoji_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/emojis/{emoji_id}": DiscordHttpApiSchemaEmojiResponse;
  "PUT /guilds/{guild_id}/incident-actions": DiscordHttpApiSchemaGuildIncidentsDataResponse;
  "GET /guilds/{guild_id}/integrations": ReadonlyArray<(DiscordHttpApiSchemaDiscordIntegrationResponse | DiscordHttpApiSchemaExternalConnectionIntegrationResponse | DiscordHttpApiSchemaGuildSubscriptionIntegrationResponse)> | null;
  "DELETE /guilds/{guild_id}/integrations/{integration_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /guilds/{guild_id}/invites": ReadonlyArray<(DiscordHttpApiSchemaFriendInviteResponse | DiscordHttpApiSchemaGroupDMInviteResponse | DiscordHttpApiSchemaGuildInviteResponse | DiscordHttpApiSchemaJsonValue)> | null;
  "GET /guilds/{guild_id}/members": ReadonlyArray<DiscordHttpApiSchemaGuildMemberResponse>;
  "PATCH /guilds/{guild_id}/members/@me": DiscordHttpApiSchemaPrivateGuildMemberResponse;
  "GET /guilds/{guild_id}/members/search": ReadonlyArray<DiscordHttpApiSchemaGuildMemberResponse>;
  "GET /guilds/{guild_id}/members/{user_id}": DiscordHttpApiSchemaGuildMemberResponse;
  "PUT /guilds/{guild_id}/members/{user_id}": DiscordHttpApiSchemaGuildMemberResponse;
  "DELETE /guilds/{guild_id}/members/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/members/{user_id}": DiscordHttpApiSchemaGuildMemberResponse;
  "PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /guilds/{guild_id}/messages/search": DiscordHttpApiSchemaGuildSearchResponse;
  "GET /guilds/{guild_id}/new-member-welcome": DiscordHttpApiSchemaGuildHomeSettingsResponse;
  "GET /guilds/{guild_id}/onboarding": DiscordHttpApiSchemaUserGuildOnboardingResponse;
  "PUT /guilds/{guild_id}/onboarding": DiscordHttpApiSchemaGuildOnboardingResponse;
  "GET /guilds/{guild_id}/preview": DiscordHttpApiSchemaGuildPreviewResponse;
  "GET /guilds/{guild_id}/prune": DiscordHttpApiSchemaGuildPruneResponse;
  "POST /guilds/{guild_id}/prune": DiscordHttpApiSchemaGuildPruneResponse;
  "GET /guilds/{guild_id}/regions": ReadonlyArray<DiscordHttpApiSchemaVoiceRegionResponse> | null;
  "GET /guilds/{guild_id}/requests": DiscordHttpApiSchemaGuildJoinRequestsListResponse;
  "PATCH /guilds/{guild_id}/requests/{request_id}": DiscordHttpApiSchemaGuildJoinRequestResponse;
  "GET /guilds/{guild_id}/roles": ReadonlyArray<DiscordHttpApiSchemaGuildRoleResponse>;
  "POST /guilds/{guild_id}/roles": DiscordHttpApiSchemaGuildRoleResponse;
  "PATCH /guilds/{guild_id}/roles": ReadonlyArray<DiscordHttpApiSchemaGuildRoleResponse>;
  "GET /guilds/{guild_id}/roles/member-counts": {
  readonly [key: string]: number | undefined;
};
  "GET /guilds/{guild_id}/roles/{role_id}": DiscordHttpApiSchemaGuildRoleResponse;
  "DELETE /guilds/{guild_id}/roles/{role_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/roles/{role_id}": DiscordHttpApiSchemaGuildRoleResponse;
  "GET /guilds/{guild_id}/scheduled-events": ReadonlyArray<(DiscordHttpApiSchemaExternalScheduledEventResponse | DiscordHttpApiSchemaStageScheduledEventResponse | DiscordHttpApiSchemaVoiceScheduledEventResponse)> | null;
  "POST /guilds/{guild_id}/scheduled-events": (DiscordHttpApiSchemaExternalScheduledEventResponse | DiscordHttpApiSchemaStageScheduledEventResponse | DiscordHttpApiSchemaVoiceScheduledEventResponse);
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": (DiscordHttpApiSchemaExternalScheduledEventResponse | DiscordHttpApiSchemaStageScheduledEventResponse | DiscordHttpApiSchemaVoiceScheduledEventResponse);
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": (DiscordHttpApiSchemaExternalScheduledEventResponse | DiscordHttpApiSchemaStageScheduledEventResponse | DiscordHttpApiSchemaVoiceScheduledEventResponse);
  "POST /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions": DiscordHttpApiSchemaGuildScheduledEventExceptionResponse;
  "DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/exceptions/{exception_id}": DiscordHttpApiSchemaGuildScheduledEventExceptionResponse;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": ReadonlyArray<DiscordHttpApiSchemaScheduledEventUserResponse> | null;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users/counts": DiscordHttpApiSchemaScheduledEventUserCountResponse;
  "GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/{guild_scheduled_event_exception_id}/users": ReadonlyArray<DiscordHttpApiSchemaScheduledEventUserResponse> | null;
  "GET /guilds/{guild_id}/soundboard-sounds": DiscordHttpApiSchemaListGuildSoundboardSoundsResponse;
  "POST /guilds/{guild_id}/soundboard-sounds": DiscordHttpApiSchemaSoundboardSoundResponse;
  "GET /guilds/{guild_id}/soundboard-sounds/{sound_id}": DiscordHttpApiSchemaSoundboardSoundResponse;
  "DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}": DiscordHttpApiSchemaSoundboardSoundResponse;
  "GET /guilds/{guild_id}/stickers": ReadonlyArray<DiscordHttpApiSchemaGuildStickerResponse>;
  "POST /guilds/{guild_id}/stickers": DiscordHttpApiSchemaGuildStickerResponse;
  "GET /guilds/{guild_id}/stickers/{sticker_id}": DiscordHttpApiSchemaGuildStickerResponse;
  "DELETE /guilds/{guild_id}/stickers/{sticker_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /guilds/{guild_id}/stickers/{sticker_id}": DiscordHttpApiSchemaGuildStickerResponse;
  "GET /guilds/{guild_id}/templates": ReadonlyArray<DiscordHttpApiSchemaGuildTemplateResponse> | null;
  "POST /guilds/{guild_id}/templates": DiscordHttpApiSchemaGuildTemplateResponse;
  "PUT /guilds/{guild_id}/templates/{code}": DiscordHttpApiSchemaGuildTemplateResponse;
  "DELETE /guilds/{guild_id}/templates/{code}": DiscordHttpApiSchemaGuildTemplateResponse;
  "PATCH /guilds/{guild_id}/templates/{code}": DiscordHttpApiSchemaGuildTemplateResponse;
  "GET /guilds/{guild_id}/threads/active": DiscordHttpApiSchemaThreadsResponse;
  "GET /guilds/{guild_id}/vanity-url": DiscordHttpApiSchemaVanityURLResponse;
  "GET /guilds/{guild_id}/voice-states/@me": DiscordHttpApiSchemaVoiceStateResponse;
  "PATCH /guilds/{guild_id}/voice-states/@me": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /guilds/{guild_id}/voice-states/{user_id}": DiscordHttpApiSchemaVoiceStateResponse;
  "PATCH /guilds/{guild_id}/voice-states/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /guilds/{guild_id}/webhooks": ReadonlyArray<(DiscordHttpApiSchemaApplicationIncomingWebhookResponse | DiscordHttpApiSchemaChannelFollowerWebhookResponse | DiscordHttpApiSchemaGuildIncomingWebhookResponse)> | null;
  "GET /guilds/{guild_id}/welcome-screen": DiscordHttpApiSchemaGuildWelcomeScreenResponse;
  "PATCH /guilds/{guild_id}/welcome-screen": DiscordHttpApiSchemaGuildWelcomeScreenResponse;
  "GET /guilds/{guild_id}/widget": DiscordHttpApiSchemaWidgetSettingsResponse;
  "PATCH /guilds/{guild_id}/widget": DiscordHttpApiSchemaWidgetSettingsResponse;
  "GET /guilds/{guild_id}/widget.json": DiscordHttpApiSchemaWidgetResponse;
  "GET /guilds/{guild_id}/widget.png": string;
  "POST /interactions/{interaction_id}/{interaction_token}/callback": DiscordHttpApiSchemaInteractionCallbackResponse;
  "GET /invites/{code}": (DiscordHttpApiSchemaFriendInviteResponse | DiscordHttpApiSchemaGroupDMInviteResponse | DiscordHttpApiSchemaGuildInviteResponse);
  "DELETE /invites/{code}": (DiscordHttpApiSchemaFriendInviteResponse | DiscordHttpApiSchemaGroupDMInviteResponse | DiscordHttpApiSchemaGuildInviteResponse);
  "GET /invites/{code}/target-users": string;
  "PUT /invites/{code}/target-users": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /invites/{code}/target-users/job-status": DiscordHttpApiSchemaTargetUsersJobStatusResponse;
  "PUT /lobbies": DiscordHttpApiSchemaLobbyResponse;
  "POST /lobbies": DiscordHttpApiSchemaLobbyResponse;
  "GET /lobbies/{lobby_id}": DiscordHttpApiSchemaLobbyResponse;
  "DELETE /lobbies/{lobby_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /lobbies/{lobby_id}": DiscordHttpApiSchemaLobbyResponse;
  "PATCH /lobbies/{lobby_id}/channel-linking": DiscordHttpApiSchemaLobbyResponse;
  "DELETE /lobbies/{lobby_id}/members/@me": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /lobbies/{lobby_id}/members/@me/invites": DiscordHttpApiSchemaLobbyGuildInviteResponse;
  "POST /lobbies/{lobby_id}/members/bulk": ReadonlyArray<DiscordHttpApiSchemaLobbyMemberResponse> | null;
  "PUT /lobbies/{lobby_id}/members/{user_id}": DiscordHttpApiSchemaLobbyMemberResponse;
  "DELETE /lobbies/{lobby_id}/members/{user_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /lobbies/{lobby_id}/members/{user_id}/invites": DiscordHttpApiSchemaLobbyGuildInviteResponse;
  "GET /lobbies/{lobby_id}/messages": ReadonlyArray<DiscordHttpApiSchemaLobbyMessageResponse> | null;
  "POST /lobbies/{lobby_id}/messages": DiscordHttpApiSchemaLobbyMessageResponse;
  "PUT /lobbies/{lobby_id}/messages/{message_id}/moderation-metadata": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /oauth2/@me": DiscordHttpApiSchemaOAuth2GetAuthorizationResponse;
  "GET /oauth2/applications/@me": DiscordHttpApiSchemaPrivateApplicationResponse;
  "GET /oauth2/keys": DiscordHttpApiSchemaOAuth2GetKeys;
  "GET /oauth2/userinfo": DiscordHttpApiSchemaOAuth2GetOpenIDConnectUserInfoResponse;
  "PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /partner-sdk/provisional-accounts/unmerge": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /partner-sdk/provisional-accounts/unmerge/bot": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /partner-sdk/token": DiscordHttpApiSchemaProvisionalTokenResponse;
  "POST /partner-sdk/token/bot": DiscordHttpApiSchemaProvisionalTokenResponse;
  "GET /skus/{sku_id}/subscriptions": ReadonlyArray<DiscordHttpApiSchemaSubscriptionResponse>;
  "GET /skus/{sku_id}/subscriptions/{subscription_id}": DiscordHttpApiSchemaSubscriptionResponse;
  "GET /soundboard-default-sounds": ReadonlyArray<DiscordHttpApiSchemaSoundboardSoundResponse>;
  "POST /stage-instances": DiscordHttpApiSchemaStageInstanceResponse;
  "GET /stage-instances/{channel_id}": DiscordHttpApiSchemaStageInstanceResponse;
  "DELETE /stage-instances/{channel_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /stage-instances/{channel_id}": DiscordHttpApiSchemaStageInstanceResponse;
  "GET /sticker-packs": DiscordHttpApiSchemaStickerPackCollectionResponse;
  "GET /sticker-packs/{pack_id}": DiscordHttpApiSchemaStickerPackResponse;
  "GET /stickers/{sticker_id}": (DiscordHttpApiSchemaGuildStickerResponse | DiscordHttpApiSchemaStandardStickerResponse);
  "GET /users/@me": DiscordHttpApiSchemaUserPIIResponse;
  "PATCH /users/@me": DiscordHttpApiSchemaUserPIIResponse;
  "GET /users/@me/applications/{application_id}/entitlements": ReadonlyArray<DiscordHttpApiSchemaEntitlementResponse>;
  "GET /users/@me/applications/{application_id}/role-connection": DiscordHttpApiSchemaApplicationUserRoleConnectionResponse;
  "PUT /users/@me/applications/{application_id}/role-connection": DiscordHttpApiSchemaApplicationUserRoleConnectionResponse;
  "DELETE /users/@me/applications/{application_id}/role-connection": DiscordHttpApiSchemaRatelimitedResponse;
  "POST /users/@me/channels": (DiscordHttpApiSchemaPrivateChannelResponse | DiscordHttpApiSchemaPrivateGroupChannelResponse);
  "GET /users/@me/connections": ReadonlyArray<DiscordHttpApiSchemaConnectedAccountResponse> | null;
  "GET /users/@me/guilds": ReadonlyArray<DiscordHttpApiSchemaMyGuildResponse> | null;
  "DELETE /users/@me/guilds/{guild_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /users/@me/guilds/{guild_id}/member": DiscordHttpApiSchemaPrivateGuildMemberResponse;
  "GET /users/{user_id}": DiscordHttpApiSchemaUserResponse;
  "GET /voice/regions": ReadonlyArray<DiscordHttpApiSchemaVoiceRegionResponse> | null;
  "GET /webhooks/{webhook_id}": (DiscordHttpApiSchemaApplicationIncomingWebhookResponse | DiscordHttpApiSchemaChannelFollowerWebhookResponse | DiscordHttpApiSchemaGuildIncomingWebhookResponse);
  "DELETE /webhooks/{webhook_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /webhooks/{webhook_id}": (DiscordHttpApiSchemaApplicationIncomingWebhookResponse | DiscordHttpApiSchemaChannelFollowerWebhookResponse | DiscordHttpApiSchemaGuildIncomingWebhookResponse);
  "GET /webhooks/{webhook_id}/{webhook_token}": (DiscordHttpApiSchemaApplicationIncomingWebhookResponse | DiscordHttpApiSchemaChannelFollowerWebhookResponse | DiscordHttpApiSchemaGuildIncomingWebhookResponse);
  "POST /webhooks/{webhook_id}/{webhook_token}": DiscordHttpApiSchemaMessageResponse;
  "DELETE /webhooks/{webhook_id}/{webhook_token}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /webhooks/{webhook_id}/{webhook_token}": (DiscordHttpApiSchemaApplicationIncomingWebhookResponse | DiscordHttpApiSchemaChannelFollowerWebhookResponse | DiscordHttpApiSchemaGuildIncomingWebhookResponse);
  "POST /webhooks/{webhook_id}/{webhook_token}/github": DiscordHttpApiSchemaRatelimitedResponse;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original": DiscordHttpApiSchemaMessageResponse;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original": DiscordHttpApiSchemaMessageResponse;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": DiscordHttpApiSchemaMessageResponse;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": DiscordHttpApiSchemaRatelimitedResponse;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": DiscordHttpApiSchemaMessageResponse;
  "POST /webhooks/{webhook_id}/{webhook_token}/slack": string | null;
}
