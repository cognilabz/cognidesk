// Generated provider schema DTOs for SlackWebApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type SlackWebApiSchemaJsonPrimitive = string | number | boolean | null;
export type SlackWebApiSchemaJsonValue = SlackWebApiSchemaJsonPrimitive | readonly SlackWebApiSchemaJsonValue[] | { readonly [key: string]: SlackWebApiSchemaJsonValue | undefined };

export type SlackWebApiSchemaDefsOkTrue = true;

export type SlackWebApiSchemaDefsChannelId = string;

export type SlackWebApiSchemaDefsTeam = string;

export type SlackWebApiSchemaObjsChannel = {
  accepted_user?: SlackWebApiSchemaDefsUserId;
  created: number;
  creator: SlackWebApiSchemaDefsUserId;
  id: SlackWebApiSchemaDefsChannelId;
  is_archived?: boolean;
  is_channel: boolean;
  is_frozen?: boolean;
  is_general?: boolean;
  is_member?: boolean;
  is_moved?: number;
  is_mpim: boolean;
  is_non_threadable?: boolean;
  is_org_shared: boolean;
  is_pending_ext_shared?: boolean;
  is_private: boolean;
  is_read_only?: boolean;
  is_shared: boolean;
  is_thread_only?: boolean;
  last_read?: SlackWebApiSchemaDefsTs;
  latest?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaObjsMessage;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  members: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
  name: string;
  name_normalized: string;
  num_members?: number;
  pending_shared?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  previous_names?: ReadonlyArray<SlackWebApiSchemaDefsChannelName>;
  priority?: number;
  purpose: {
  creator: SlackWebApiSchemaDefsTopicPurposeCreator;
  last_set: number;
  value: string;
};
  topic: {
  creator: SlackWebApiSchemaDefsTopicPurposeCreator;
  last_set: number;
  value: string;
};
  unlinked?: number;
  unread_count?: number;
  unread_count_display?: number;
};

export type SlackWebApiSchemaObjsResources = {
  excluded_ids?: ReadonlyArray<ReadonlyArray<{
  "0"?: SlackWebApiSchemaDefsChannel;
  "1"?: SlackWebApiSchemaDefsTeam;
}>>;
  ids: ReadonlyArray<ReadonlyArray<{
  "0"?: SlackWebApiSchemaDefsChannel;
  "1"?: SlackWebApiSchemaDefsTeam;
}>>;
  wildcard?: boolean;
};

export type SlackWebApiSchemaObjsScopes = ReadonlyArray<string>;

export type SlackWebApiSchemaDefsBotId = string;

export type SlackWebApiSchemaDefsUserId = string;

export type SlackWebApiSchemaDefsAppId = string;

export type SlackWebApiSchemaDefsChannel = string;

export type SlackWebApiSchemaDefsTs = string;

export type SlackWebApiSchemaObjsMessage = {
  attachments?: ReadonlyArray<{
  fallback?: string;
  id: number;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
}>;
  blocks?: SlackWebApiSchemaBlocks;
  bot_id?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaDefsBotId;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  bot_profile?: SlackWebApiSchemaObjsBotProfile;
  client_msg_id?: string;
  comment?: SlackWebApiSchemaObjsComment;
  display_as_bot?: boolean;
  file?: SlackWebApiSchemaObjsFile;
  files?: ReadonlyArray<SlackWebApiSchemaObjsFile>;
  icons?: {
  emoji?: string;
  image_64?: string;
};
  inviter?: SlackWebApiSchemaDefsUserId;
  is_delayed_message?: boolean;
  is_intro?: boolean;
  is_starred?: boolean;
  last_read?: SlackWebApiSchemaDefsTs;
  latest_reply?: SlackWebApiSchemaDefsTs;
  name?: string;
  old_name?: string;
  parent_user_id?: SlackWebApiSchemaDefsUserId;
  permalink?: string;
  pinned_to?: ReadonlyArray<SlackWebApiSchemaDefsChannel>;
  purpose?: string;
  reactions?: ReadonlyArray<SlackWebApiSchemaObjsReaction>;
  reply_count?: number;
  reply_users?: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
  reply_users_count?: number;
  source_team?: SlackWebApiSchemaDefsWorkspaceId;
  subscribed?: boolean;
  subtype?: string;
  team?: SlackWebApiSchemaDefsWorkspaceId;
  text: string;
  thread_ts?: SlackWebApiSchemaDefsTs;
  topic?: string;
  ts: SlackWebApiSchemaDefsTs;
  type: string;
  unread_count?: number;
  upload?: boolean;
  user?: SlackWebApiSchemaDefsUserId;
  user_profile?: SlackWebApiSchemaObjsUserProfileShort;
  user_team?: SlackWebApiSchemaDefsWorkspaceId;
  username?: string;
};

export type SlackWebApiSchemaObjsBotProfile = {
  app_id: SlackWebApiSchemaDefsAppId;
  deleted: boolean;
  icons: {
  image_36: string;
  image_48: string;
  image_72: string;
};
  id: SlackWebApiSchemaDefsBotId;
  name: string;
  team_id: SlackWebApiSchemaDefsTeam;
  updated: number;
};

export type SlackWebApiSchemaObjsConversation = ReadonlyArray<{
  "0"?: {
  accepted_user?: SlackWebApiSchemaDefsUserId;
  connected_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsWorkspaceId>;
  conversation_host_id?: SlackWebApiSchemaDefsWorkspaceId;
  created: number;
  creator: SlackWebApiSchemaDefsUserId;
  display_counts?: {
  display_counts: number;
  guest_counts: number;
};
  enterprise_id?: SlackWebApiSchemaDefsEnterpriseId;
  has_pins?: boolean;
  id: SlackWebApiSchemaDefsChannel;
  internal_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  is_archived: boolean;
  is_channel: boolean;
  is_ext_shared?: boolean;
  is_frozen?: boolean;
  is_general: boolean;
  is_global_shared?: boolean;
  is_group: boolean;
  is_im: boolean;
  is_member?: boolean;
  is_moved?: number;
  is_mpim: false;
  is_non_threadable?: boolean;
  is_open?: boolean;
  is_org_default?: boolean;
  is_org_mandatory?: boolean;
  is_org_shared: boolean;
  is_pending_ext_shared?: boolean;
  is_private: boolean;
  is_read_only?: boolean;
  is_shared: boolean;
  is_starred?: boolean;
  is_thread_only?: boolean;
  last_read?: SlackWebApiSchemaDefsTs;
  latest?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaObjsMessage;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  members?: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
  name: string;
  name_normalized: string;
  num_members?: number;
  parent_conversation?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaDefsChannel;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  pending_connected_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  pending_shared?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  pin_count?: number;
  previous_names?: ReadonlyArray<SlackWebApiSchemaDefsChannelName>;
  priority?: number;
  purpose: {
  creator: SlackWebApiSchemaDefsTopicPurposeCreator;
  last_set: number;
  value: string;
};
  shared_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  shares?: ReadonlyArray<{
  accepted_user?: SlackWebApiSchemaDefsUserId;
  is_active: boolean;
  team: SlackWebApiSchemaObjsTeam;
  user: SlackWebApiSchemaDefsUserId;
}>;
  timezone_count?: number;
  topic: {
  creator: SlackWebApiSchemaDefsTopicPurposeCreator;
  last_set: number;
  value: string;
};
  unlinked?: number;
  unread_count?: number;
  unread_count_display?: number;
  use_case?: string;
  user?: SlackWebApiSchemaDefsUserId;
  version?: number;
};
  "1"?: {
  accepted_user?: SlackWebApiSchemaDefsUserId;
  connected_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  conversation_host_id?: SlackWebApiSchemaDefsWorkspaceId;
  created: number;
  creator: SlackWebApiSchemaDefsUserId;
  display_counts?: {
  display_counts: number;
  guest_counts: number;
};
  id: SlackWebApiSchemaDefsChannel;
  internal_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  is_archived: boolean;
  is_channel: boolean;
  is_ext_shared?: boolean;
  is_frozen?: boolean;
  is_general: boolean;
  is_group: boolean;
  is_im: boolean;
  is_member?: boolean;
  is_moved?: number;
  is_mpim: true;
  is_non_threadable?: boolean;
  is_open?: boolean;
  is_org_shared: boolean;
  is_pending_ext_shared?: boolean;
  is_private: boolean;
  is_read_only?: boolean;
  is_shared: boolean;
  is_starred?: boolean;
  is_thread_only?: boolean;
  last_read?: SlackWebApiSchemaDefsTs;
  latest?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaObjsMessage;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  members?: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
  name: string;
  name_normalized: string;
  num_members?: number;
  parent_conversation?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaDefsChannel;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  pending_connected_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  pending_shared?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  pin_count?: number;
  previous_names?: ReadonlyArray<SlackWebApiSchemaDefsChannelName>;
  priority?: number;
  purpose: {
  creator: SlackWebApiSchemaDefsTopicPurposeCreator;
  last_set: number;
  value: string;
};
  shared_team_ids?: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
  shares?: ReadonlyArray<{
  accepted_user?: SlackWebApiSchemaDefsUserId;
  is_active: boolean;
  team: SlackWebApiSchemaObjsTeam;
  user: SlackWebApiSchemaDefsUserId;
}>;
  timezone_count?: number;
  topic: {
  creator: SlackWebApiSchemaDefsTopicPurposeCreator;
  last_set: number;
  value: string;
};
  unlinked?: number;
  unread_count?: number;
  unread_count_display?: number;
  user?: SlackWebApiSchemaDefsUserId;
  version?: number;
};
  "2"?: {
  created: number;
  has_pins?: boolean;
  id: SlackWebApiSchemaDefsDmId;
  is_archived?: boolean;
  is_ext_shared?: boolean;
  is_frozen?: boolean;
  is_im: boolean;
  is_open?: boolean;
  is_org_shared: boolean;
  is_shared?: boolean;
  is_starred?: boolean;
  is_user_deleted?: boolean;
  last_read?: SlackWebApiSchemaDefsTs;
  latest?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaObjsMessage;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  parent_conversation?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaDefsChannel;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  pin_count?: number;
  priority: number;
  shares?: ReadonlyArray<{
  date_create: number;
  id: SlackWebApiSchemaDefsTeam;
  is_active: boolean;
  name: string;
  team: SlackWebApiSchemaObjsTeam;
}>;
  unread_count?: number;
  unread_count_display?: number;
  user: SlackWebApiSchemaDefsUserId;
  version?: number;
};
}>;

export type SlackWebApiSchemaDefsDmId = string;

export type SlackWebApiSchemaObjsUserProfileShort = {
  avatar_hash: string;
  display_name: string;
  display_name_normalized?: string;
  first_name: string | null;
  image_72: string;
  is_restricted: boolean;
  is_ultra_restricted: boolean;
  name: string;
  real_name: string;
  real_name_normalized?: string;
  team: SlackWebApiSchemaDefsWorkspaceId;
};

export type SlackWebApiSchemaObjsComments = ReadonlyArray<SlackWebApiSchemaJsonValue>;

export type SlackWebApiSchemaObjsFile = {
  channels?: ReadonlyArray<SlackWebApiSchemaDefsChannelId>;
  comments_count?: number;
  created?: number;
  date_delete?: number;
  display_as_bot?: boolean;
  editable?: boolean;
  editor?: SlackWebApiSchemaDefsUserId;
  external_id?: string;
  external_type?: string;
  external_url?: string;
  filetype?: string;
  groups?: ReadonlyArray<SlackWebApiSchemaDefsGroupId>;
  has_rich_preview?: boolean;
  id?: SlackWebApiSchemaDefsFileId;
  image_exif_rotation?: number;
  ims?: ReadonlyArray<SlackWebApiSchemaDefsDmId>;
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  is_tombstoned?: boolean;
  last_editor?: SlackWebApiSchemaDefsUserId;
  mimetype?: string;
  mode?: string;
  name?: string;
  non_owner_editable?: boolean;
  num_stars?: number;
  original_h?: number;
  original_w?: number;
  permalink?: string;
  permalink_public?: string;
  pinned_info?: SlackWebApiSchemaDefsPinnedInfo;
  pinned_to?: ReadonlyArray<SlackWebApiSchemaDefsChannel>;
  pretty_type?: string;
  preview?: string;
  public_url_shared?: boolean;
  reactions?: ReadonlyArray<SlackWebApiSchemaObjsReaction>;
  shares?: {
  private?: SlackWebApiSchemaJsonValue;
  public?: SlackWebApiSchemaJsonValue;
};
  size?: number;
  source_team?: SlackWebApiSchemaDefsTeam;
  state?: string;
  thumb_1024?: string;
  thumb_1024_h?: number;
  thumb_1024_w?: number;
  thumb_160?: string;
  thumb_360?: string;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_480?: string;
  thumb_480_h?: number;
  thumb_480_w?: number;
  thumb_64?: string;
  thumb_720?: string;
  thumb_720_h?: number;
  thumb_720_w?: number;
  thumb_80?: string;
  thumb_800?: string;
  thumb_800_h?: number;
  thumb_800_w?: number;
  thumb_960?: string;
  thumb_960_h?: number;
  thumb_960_w?: number;
  thumb_tiny?: string;
  timestamp?: number;
  title?: string;
  updated?: number;
  url_private?: string;
  url_private_download?: string;
  user?: string;
  user_team?: SlackWebApiSchemaDefsTeam;
  username?: string;
};

export type SlackWebApiSchemaObjsPaging = {
  count?: number;
  page: number;
  pages?: number;
  per_page?: number;
  spill?: number;
  total: number;
};

export type SlackWebApiSchemaObjsResponseMetadata = ReadonlyArray<{
  "0"?: {
  next_cursor: string;
};
  "1"?: {
  messages: ReadonlyArray<string>;
  warnings: ReadonlyArray<"method_deprecated">;
};
  "2"?: {
  messages: ReadonlyArray<string>;
  next_cursor: string;
  warnings: ReadonlyArray<"method_deprecated">;
};
}>;

export type SlackWebApiSchemaObjsComment = {
  comment: string;
  created: number;
  id: SlackWebApiSchemaDefsCommentId;
  is_intro: boolean;
  is_starred?: boolean;
  num_stars?: number;
  pinned_info?: SlackWebApiSchemaDefsPinnedInfo;
  pinned_to?: ReadonlyArray<SlackWebApiSchemaDefsChannel>;
  reactions?: ReadonlyArray<SlackWebApiSchemaObjsReaction>;
  timestamp: number;
  user: SlackWebApiSchemaDefsUserId;
};

export type SlackWebApiSchemaObjsReminder = {
  complete_ts?: number;
  creator: SlackWebApiSchemaDefsUserId;
  id: SlackWebApiSchemaDefsReminderId;
  recurring: boolean;
  text: string;
  time?: number;
  user: SlackWebApiSchemaDefsUserId;
};

export type SlackWebApiSchemaDefsGroupId = string;

export type SlackWebApiSchemaObjsTeam = {
  archived?: boolean;
  avatar_base_url?: string;
  created?: number;
  date_create?: number;
  deleted?: boolean;
  description?: string | null;
  discoverable?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaJsonValue;
  "1"?: string;
}>;
  domain: string;
  email_domain: string;
  enterprise_id?: SlackWebApiSchemaDefsEnterpriseId;
  enterprise_name?: SlackWebApiSchemaDefsEnterpriseName;
  external_org_migrations?: SlackWebApiSchemaObjsExternalOrgMigrations;
  has_compliance_export?: boolean;
  icon: SlackWebApiSchemaObjsIcon;
  id: SlackWebApiSchemaDefsWorkspaceId;
  is_assigned?: boolean;
  is_enterprise?: number;
  is_over_storage_limit?: boolean;
  limit_ts?: number;
  locale?: string;
  messages_count?: number;
  msg_edit_window_mins?: number;
  name: string;
  over_integrations_limit?: boolean;
  over_storage_limit?: boolean;
  pay_prod_cur?: string;
  plan?: "" | "std" | "plus" | "compliance" | "enterprise";
  primary_owner?: SlackWebApiSchemaObjsPrimaryOwner;
  sso_provider?: {
  label?: string;
  name?: string;
  type?: string;
};
};

export type SlackWebApiSchemaObjsTeamProfileField = {
  field_name?: string | null;
  hint: string;
  id: string;
  is_hidden?: boolean;
  label: string;
  options?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaJsonValue;
  "1"?: SlackWebApiSchemaObjsTeamProfileFieldOption;
}>;
  ordering: number;
  possible_values?: ReadonlyArray<string> | null;
  type: "text" | "date" | "link" | "mailto" | "options_list" | "user";
};

export type SlackWebApiSchemaObjsSubteam = {
  auto_provision: boolean;
  auto_type: ReadonlyArray<{
  "0"?: SlackWebApiSchemaJsonValue;
  "1"?: "owner" | "admin";
}>;
  channel_count?: number;
  created_by: SlackWebApiSchemaDefsUserId;
  date_create: number;
  date_delete: number;
  date_update: number;
  deleted_by: ReadonlyArray<{
  "0"?: SlackWebApiSchemaJsonValue;
  "1"?: SlackWebApiSchemaDefsUserId;
}>;
  description: string;
  enterprise_subteam_id: string;
  handle: string;
  id: SlackWebApiSchemaDefsSubteamId;
  is_external: boolean;
  is_subteam: boolean;
  is_usergroup: boolean;
  name: string;
  prefs: {
  channels: ReadonlyArray<SlackWebApiSchemaDefsChannelId>;
  groups: ReadonlyArray<SlackWebApiSchemaDefsGroupId>;
};
  team_id: SlackWebApiSchemaDefsTeam;
  updated_by: SlackWebApiSchemaDefsUserId;
  user_count?: number;
  users?: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
};

export type SlackWebApiSchemaObjsUser = ReadonlyArray<{
  "0"?: {
  color?: string;
  deleted?: boolean;
  enterprise_user?: SlackWebApiSchemaObjsEnterpriseUser;
  has_2fa?: boolean;
  id: SlackWebApiSchemaDefsUserId;
  is_admin?: boolean;
  is_app_user: boolean;
  is_bot: boolean;
  is_external?: boolean;
  is_forgotten?: boolean;
  is_invited_user?: boolean;
  is_owner?: boolean;
  is_primary_owner?: boolean;
  is_restricted?: boolean;
  is_stranger?: boolean;
  is_ultra_restricted?: boolean;
  locale?: string;
  name: string;
  presence?: string;
  profile: SlackWebApiSchemaObjsUserProfile;
  real_name?: string;
  team?: SlackWebApiSchemaDefsWorkspaceId;
  team_id?: SlackWebApiSchemaDefsWorkspaceId;
  team_profile?: {
  fields: ReadonlyArray<SlackWebApiSchemaObjsTeamProfileField>;
};
  two_factor_type?: string;
  tz?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaJsonValue;
  "1"?: string;
}>;
  tz_label?: string;
  tz_offset?: number;
  updated: number;
};
  "1"?: {
  color?: string;
  deleted?: boolean;
  enterprise_user?: SlackWebApiSchemaObjsEnterpriseUser;
  has_2fa?: boolean;
  id: SlackWebApiSchemaDefsUserId;
  is_admin?: boolean;
  is_app_user: boolean;
  is_bot: boolean;
  is_external?: boolean;
  is_forgotten?: boolean;
  is_owner?: boolean;
  is_primary_owner?: boolean;
  is_restricted?: boolean;
  is_stranger?: boolean;
  is_ultra_restricted?: boolean;
  locale?: string;
  name: string;
  presence?: string;
  profile: SlackWebApiSchemaObjsUserProfile;
  real_name?: string;
  team_id?: SlackWebApiSchemaDefsWorkspaceId;
  team_profile?: {
  fields: ReadonlyArray<SlackWebApiSchemaObjsTeamProfileField>;
};
  teams?: ReadonlyArray<SlackWebApiSchemaDefsWorkspaceId>;
  two_factor_type?: string;
  tz?: ReadonlyArray<{
  "0"?: SlackWebApiSchemaJsonValue;
  "1"?: string;
}>;
  tz_label?: string;
  tz_offset?: number;
  updated: number;
};
}>;

export type SlackWebApiSchemaObjsUserProfile = {
  always_active?: boolean;
  api_app_id?: SlackWebApiSchemaDefsOptionalAppId;
  avatar_hash: string;
  bot_id?: SlackWebApiSchemaDefsBotId;
  display_name: string;
  display_name_normalized: string;
  email?: string | null;
  fields: (ReadonlyArray<{}> | ReadonlyArray<{}>) | null;
  first_name?: string | null;
  guest_expiration_ts?: number | null;
  guest_invited_by?: string | null;
  image_1024?: string | null;
  image_192?: string | null;
  image_24?: string | null;
  image_32?: string | null;
  image_48?: string | null;
  image_512?: string | null;
  image_72?: string | null;
  image_original?: string | null;
  is_app_user?: boolean;
  is_custom_image?: boolean;
  is_restricted?: boolean | null;
  is_ultra_restricted?: boolean | null;
  last_avatar_image_hash?: string;
  last_name?: string | null;
  memberships_count?: number;
  name?: string | null;
  phone: string;
  pronouns?: string;
  real_name: string;
  real_name_normalized: string;
  skype: string;
  status_default_emoji?: string;
  status_default_text?: string;
  status_default_text_canonical?: string | null;
  status_emoji: string;
  status_expiration?: number;
  status_text: string;
  status_text_canonical?: string | null;
  team?: SlackWebApiSchemaDefsWorkspaceId;
  title: string;
  updated?: number;
  user_id?: string;
  username?: string | null;
};

export type SlackWebApiSchemaDefsChannelName = string;

export type SlackWebApiSchemaDefsTopicPurposeCreator = string;

export type SlackWebApiSchemaBlocks = ReadonlyArray<{
  type: string;
  readonly [key: string]: SlackWebApiSchemaJsonValue | string | undefined;
}>;

export type SlackWebApiSchemaObjsReaction = {
  count: number;
  name: string;
  users: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
  readonly [key: string]: SlackWebApiSchemaJsonValue | number | string | ReadonlyArray<SlackWebApiSchemaDefsUserId> | undefined;
};

export type SlackWebApiSchemaDefsWorkspaceId = string;

export type SlackWebApiSchemaDefsEnterpriseId = string;

export type SlackWebApiSchemaDefsFileId = string;

export type SlackWebApiSchemaDefsPinnedInfo = {};

export type SlackWebApiSchemaDefsCommentId = string;

export type SlackWebApiSchemaDefsReminderId = string;

export type SlackWebApiSchemaDefsEnterpriseName = string;

export type SlackWebApiSchemaObjsExternalOrgMigrations = {
  current: ReadonlyArray<{
  date_started: number;
  team_id: string;
}>;
  date_updated: number;
};

export type SlackWebApiSchemaObjsIcon = {
  image_102?: string;
  image_132?: string;
  image_230?: string;
  image_34?: string;
  image_44?: string;
  image_68?: string;
  image_88?: string;
  image_default?: boolean;
};

export type SlackWebApiSchemaObjsPrimaryOwner = {
  email: string;
  id: string;
};

export type SlackWebApiSchemaObjsTeamProfileFieldOption = {
  is_custom?: boolean | null;
  is_multiple_entry?: boolean | null;
  is_protected?: boolean | null;
  is_scim?: boolean | null;
};

export type SlackWebApiSchemaDefsSubteamId = string;

export type SlackWebApiSchemaObjsEnterpriseUser = {
  enterprise_id: SlackWebApiSchemaDefsEnterpriseId;
  enterprise_name: SlackWebApiSchemaDefsEnterpriseName;
  id: SlackWebApiSchemaDefsEnterpriseUserId;
  is_admin: boolean;
  is_owner: boolean;
  teams: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
};

export type SlackWebApiSchemaDefsOptionalAppId = string;

export type SlackWebApiSchemaDefsEnterpriseUserId = string;

export interface SlackWebApiOperationQueryMap {
  "POST /admin.apps.approve": {};
  "GET /admin.apps.approved.list": {
  token: string;
  limit?: number;
  cursor?: string;
  team_id?: string;
  enterprise_id?: string;
};
  "GET /admin.apps.requests.list": {
  token: string;
  limit?: number;
  cursor?: string;
  team_id?: string;
};
  "POST /admin.apps.restrict": {};
  "GET /admin.apps.restricted.list": {
  token: string;
  limit?: number;
  cursor?: string;
  team_id?: string;
  enterprise_id?: string;
};
  "POST /admin.conversations.archive": {};
  "POST /admin.conversations.convertToPrivate": {};
  "POST /admin.conversations.create": {};
  "POST /admin.conversations.delete": {};
  "POST /admin.conversations.disconnectShared": {};
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo": {
  token: string;
  channel_ids?: string;
  team_ids?: string;
  limit?: number;
  cursor?: string;
};
  "GET /admin.conversations.getConversationPrefs": {
  channel_id: string;
};
  "GET /admin.conversations.getTeams": {
  channel_id: string;
  cursor?: string;
  limit?: number;
};
  "POST /admin.conversations.invite": {};
  "POST /admin.conversations.rename": {};
  "POST /admin.conversations.restrictAccess.addGroup": {};
  "GET /admin.conversations.restrictAccess.listGroups": {
  token: string;
  channel_id: string;
  team_id?: string;
};
  "POST /admin.conversations.restrictAccess.removeGroup": {};
  "GET /admin.conversations.search": {
  team_ids?: string;
  query?: string;
  limit?: number;
  cursor?: string;
  search_channel_types?: string;
  sort?: string;
  sort_dir?: string;
};
  "POST /admin.conversations.setConversationPrefs": {};
  "POST /admin.conversations.setTeams": {};
  "POST /admin.conversations.unarchive": {};
  "POST /admin.emoji.add": {};
  "POST /admin.emoji.addAlias": {};
  "GET /admin.emoji.list": {
  token: string;
  cursor?: string;
  limit?: number;
};
  "POST /admin.emoji.remove": {};
  "POST /admin.emoji.rename": {};
  "POST /admin.inviteRequests.approve": {};
  "GET /admin.inviteRequests.approved.list": {
  team_id?: string;
  cursor?: string;
  limit?: number;
};
  "GET /admin.inviteRequests.denied.list": {
  team_id?: string;
  cursor?: string;
  limit?: number;
};
  "POST /admin.inviteRequests.deny": {};
  "GET /admin.inviteRequests.list": {
  team_id?: string;
  cursor?: string;
  limit?: number;
};
  "GET /admin.teams.admins.list": {
  token: string;
  limit?: number;
  cursor?: string;
  team_id: string;
};
  "POST /admin.teams.create": {};
  "GET /admin.teams.list": {
  limit?: number;
  cursor?: string;
};
  "GET /admin.teams.owners.list": {
  token: string;
  team_id: string;
  limit?: number;
  cursor?: string;
};
  "GET /admin.teams.settings.info": {
  team_id: string;
};
  "POST /admin.teams.settings.setDefaultChannels": {};
  "POST /admin.teams.settings.setDescription": {};
  "POST /admin.teams.settings.setDiscoverability": {};
  "POST /admin.teams.settings.setIcon": {};
  "POST /admin.teams.settings.setName": {};
  "POST /admin.usergroups.addChannels": {};
  "POST /admin.usergroups.addTeams": {};
  "GET /admin.usergroups.listChannels": {
  usergroup_id: string;
  team_id?: string;
  include_num_members?: boolean;
};
  "POST /admin.usergroups.removeChannels": {};
  "POST /admin.users.assign": {};
  "POST /admin.users.invite": {};
  "GET /admin.users.list": {
  team_id: string;
  cursor?: string;
  limit?: number;
};
  "POST /admin.users.remove": {};
  "POST /admin.users.session.invalidate": {};
  "POST /admin.users.session.reset": {};
  "POST /admin.users.setAdmin": {};
  "POST /admin.users.setExpiration": {};
  "POST /admin.users.setOwner": {};
  "POST /admin.users.setRegular": {};
  "GET /api.test": {
  error?: string;
  foo?: string;
};
  "GET /apps.event.authorizations.list": {
  event_context: string;
  cursor?: string;
  limit?: number;
};
  "GET /apps.permissions.info": {
  token?: string;
};
  "GET /apps.permissions.request": {
  token: string;
  scopes: string;
  trigger_id: string;
};
  "GET /apps.permissions.resources.list": {
  token: string;
  cursor?: string;
  limit?: number;
};
  "GET /apps.permissions.scopes.list": {
  token: string;
};
  "GET /apps.permissions.users.list": {
  token: string;
  cursor?: string;
  limit?: number;
};
  "GET /apps.permissions.users.request": {
  token: string;
  scopes: string;
  trigger_id: string;
  user: string;
};
  "GET /apps.uninstall": {
  token?: string;
  client_id?: string;
  client_secret?: string;
};
  "GET /auth.revoke": {
  token: string;
  test?: boolean;
};
  "GET /auth.test": {};
  "GET /bots.info": {
  token: string;
  bot?: string;
};
  "POST /calls.add": {};
  "POST /calls.end": {};
  "GET /calls.info": {
  id: string;
};
  "POST /calls.participants.add": {};
  "POST /calls.participants.remove": {};
  "POST /calls.update": {};
  "POST /chat.delete": {};
  "POST /chat.deleteScheduledMessage": {};
  "GET /chat.getPermalink": {
  token: string;
  channel: string;
  message_ts: string;
};
  "POST /chat.meMessage": {};
  "POST /chat.postEphemeral": {};
  "POST /chat.postMessage": {};
  "POST /chat.scheduleMessage": {};
  "GET /chat.scheduledMessages.list": {
  channel?: string;
  latest?: number;
  oldest?: number;
  limit?: number;
  cursor?: string;
};
  "POST /chat.unfurl": {};
  "POST /chat.update": {};
  "POST /conversations.archive": {};
  "POST /conversations.close": {};
  "POST /conversations.create": {};
  "GET /conversations.history": {
  token?: string;
  channel?: string;
  latest?: number;
  oldest?: number;
  inclusive?: boolean;
  limit?: number;
  cursor?: string;
};
  "GET /conversations.info": {
  token?: string;
  channel?: string;
  include_locale?: boolean;
  include_num_members?: boolean;
};
  "POST /conversations.invite": {};
  "POST /conversations.join": {};
  "POST /conversations.kick": {};
  "POST /conversations.leave": {};
  "GET /conversations.list": {
  token?: string;
  exclude_archived?: boolean;
  types?: string;
  limit?: number;
  cursor?: string;
};
  "POST /conversations.mark": {};
  "GET /conversations.members": {
  token?: string;
  channel?: string;
  limit?: number;
  cursor?: string;
};
  "POST /conversations.open": {};
  "POST /conversations.rename": {};
  "GET /conversations.replies": {
  token?: string;
  channel?: string;
  ts?: number;
  latest?: number;
  oldest?: number;
  inclusive?: boolean;
  limit?: number;
  cursor?: string;
};
  "POST /conversations.setPurpose": {};
  "POST /conversations.setTopic": {};
  "POST /conversations.unarchive": {};
  "GET /dialog.open": {
  dialog: string;
  trigger_id: string;
};
  "POST /dnd.endDnd": {};
  "POST /dnd.endSnooze": {};
  "GET /dnd.info": {
  token?: string;
  user?: string;
};
  "POST /dnd.setSnooze": {};
  "GET /dnd.teamInfo": {
  token?: string;
  users?: string;
};
  "GET /emoji.list": {
  token: string;
};
  "POST /files.comments.delete": {};
  "POST /files.delete": {};
  "GET /files.info": {
  token?: string;
  file?: string;
  count?: string;
  page?: string;
  limit?: number;
  cursor?: string;
};
  "GET /files.list": {
  token?: string;
  user?: string;
  channel?: string;
  ts_from?: number;
  ts_to?: number;
  types?: string;
  count?: string;
  page?: string;
  show_files_hidden_by_limit?: boolean;
};
  "POST /files.remote.add": {};
  "GET /files.remote.info": {
  token?: string;
  file?: string;
  external_id?: string;
};
  "GET /files.remote.list": {
  token?: string;
  channel?: string;
  ts_from?: number;
  ts_to?: number;
  limit?: number;
  cursor?: string;
};
  "POST /files.remote.remove": {};
  "GET /files.remote.share": {
  token?: string;
  file?: string;
  external_id?: string;
  channels?: string;
};
  "POST /files.remote.update": {};
  "POST /files.revokePublicURL": {};
  "POST /files.sharedPublicURL": {};
  "POST /files.upload": {};
  "GET /migration.exchange": {
  token: string;
  users: string;
  team_id?: string;
  to_old?: boolean;
};
  "GET /oauth.access": {
  client_id?: string;
  client_secret?: string;
  code?: string;
  redirect_uri?: string;
  single_channel?: boolean;
};
  "GET /oauth.token": {
  client_id?: string;
  client_secret?: string;
  code?: string;
  redirect_uri?: string;
  single_channel?: boolean;
};
  "GET /oauth.v2.access": {
  client_id?: string;
  client_secret?: string;
  code: string;
  redirect_uri?: string;
};
  "POST /pins.add": {};
  "GET /pins.list": {
  token: string;
  channel: string;
};
  "POST /pins.remove": {};
  "POST /reactions.add": {};
  "GET /reactions.get": {
  token: string;
  channel?: string;
  file?: string;
  file_comment?: string;
  full?: boolean;
  timestamp?: string;
};
  "GET /reactions.list": {
  token: string;
  user?: string;
  full?: boolean;
  count?: number;
  page?: number;
  cursor?: string;
  limit?: number;
};
  "POST /reactions.remove": {};
  "POST /reminders.add": {};
  "POST /reminders.complete": {};
  "POST /reminders.delete": {};
  "GET /reminders.info": {
  token?: string;
  reminder?: string;
};
  "GET /reminders.list": {
  token?: string;
};
  "GET /rtm.connect": {
  token: string;
  batch_presence_aware?: boolean;
  presence_sub?: boolean;
};
  "GET /search.messages": {
  token: string;
  count?: number;
  highlight?: boolean;
  page?: number;
  query: string;
  sort?: string;
  sort_dir?: string;
};
  "POST /stars.add": {};
  "GET /stars.list": {
  token?: string;
  count?: string;
  page?: string;
  cursor?: string;
  limit?: number;
};
  "POST /stars.remove": {};
  "GET /team.accessLogs": {
  token: string;
  before?: string;
  count?: string;
  page?: string;
};
  "GET /team.billableInfo": {
  token: string;
  user?: string;
};
  "GET /team.info": {
  token: string;
  team?: string;
};
  "GET /team.integrationLogs": {
  token: string;
  app_id?: string;
  change_type?: string;
  count?: string;
  page?: string;
  service_id?: string;
  user?: string;
};
  "GET /team.profile.get": {
  token: string;
  visibility?: string;
};
  "POST /usergroups.create": {};
  "POST /usergroups.disable": {};
  "POST /usergroups.enable": {};
  "GET /usergroups.list": {
  include_users?: boolean;
  token: string;
  include_count?: boolean;
  include_disabled?: boolean;
};
  "POST /usergroups.update": {};
  "GET /usergroups.users.list": {
  token: string;
  include_disabled?: boolean;
  usergroup: string;
};
  "POST /usergroups.users.update": {};
  "GET /users.conversations": {
  token?: string;
  user?: string;
  types?: string;
  exclude_archived?: boolean;
  limit?: number;
  cursor?: string;
};
  "POST /users.deletePhoto": {};
  "GET /users.getPresence": {
  token: string;
  user?: string;
};
  "GET /users.identity": {
  token?: string;
};
  "GET /users.info": {
  token: string;
  include_locale?: boolean;
  user?: string;
};
  "GET /users.list": {
  token?: string;
  limit?: number;
  cursor?: string;
  include_locale?: boolean;
};
  "GET /users.lookupByEmail": {
  token: string;
  email: string;
};
  "GET /users.profile.get": {
  token: string;
  include_labels?: boolean;
  user?: string;
};
  "POST /users.profile.set": {};
  "POST /users.setActive": {};
  "POST /users.setPhoto": {};
  "POST /users.setPresence": {};
  "GET /views.open": {
  trigger_id: string;
  view: string;
};
  "GET /views.publish": {
  user_id: string;
  view: string;
  hash?: string;
};
  "GET /views.push": {
  trigger_id: string;
  view: string;
};
  "GET /views.update": {
  view_id?: string;
  external_id?: string;
  view?: string;
  hash?: string;
};
  "GET /workflows.stepCompleted": {
  workflow_step_execute_id: string;
  outputs?: string;
};
  "GET /workflows.stepFailed": {
  workflow_step_execute_id: string;
  error: string;
};
  "GET /workflows.updateStep": {
  workflow_step_edit_id: string;
  inputs?: string;
  outputs?: string;
  step_name?: string;
  step_image_url?: string;
};
}

export interface SlackWebApiOperationQueryRequiredMap {
  "POST /admin.apps.approve": false;
  "GET /admin.apps.approved.list": true;
  "GET /admin.apps.requests.list": true;
  "POST /admin.apps.restrict": false;
  "GET /admin.apps.restricted.list": true;
  "POST /admin.conversations.archive": false;
  "POST /admin.conversations.convertToPrivate": false;
  "POST /admin.conversations.create": false;
  "POST /admin.conversations.delete": false;
  "POST /admin.conversations.disconnectShared": false;
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo": true;
  "GET /admin.conversations.getConversationPrefs": true;
  "GET /admin.conversations.getTeams": true;
  "POST /admin.conversations.invite": false;
  "POST /admin.conversations.rename": false;
  "POST /admin.conversations.restrictAccess.addGroup": false;
  "GET /admin.conversations.restrictAccess.listGroups": true;
  "POST /admin.conversations.restrictAccess.removeGroup": false;
  "GET /admin.conversations.search": false;
  "POST /admin.conversations.setConversationPrefs": false;
  "POST /admin.conversations.setTeams": false;
  "POST /admin.conversations.unarchive": false;
  "POST /admin.emoji.add": false;
  "POST /admin.emoji.addAlias": false;
  "GET /admin.emoji.list": true;
  "POST /admin.emoji.remove": false;
  "POST /admin.emoji.rename": false;
  "POST /admin.inviteRequests.approve": false;
  "GET /admin.inviteRequests.approved.list": false;
  "GET /admin.inviteRequests.denied.list": false;
  "POST /admin.inviteRequests.deny": false;
  "GET /admin.inviteRequests.list": false;
  "GET /admin.teams.admins.list": true;
  "POST /admin.teams.create": false;
  "GET /admin.teams.list": false;
  "GET /admin.teams.owners.list": true;
  "GET /admin.teams.settings.info": true;
  "POST /admin.teams.settings.setDefaultChannels": false;
  "POST /admin.teams.settings.setDescription": false;
  "POST /admin.teams.settings.setDiscoverability": false;
  "POST /admin.teams.settings.setIcon": false;
  "POST /admin.teams.settings.setName": false;
  "POST /admin.usergroups.addChannels": false;
  "POST /admin.usergroups.addTeams": false;
  "GET /admin.usergroups.listChannels": true;
  "POST /admin.usergroups.removeChannels": false;
  "POST /admin.users.assign": false;
  "POST /admin.users.invite": false;
  "GET /admin.users.list": true;
  "POST /admin.users.remove": false;
  "POST /admin.users.session.invalidate": false;
  "POST /admin.users.session.reset": false;
  "POST /admin.users.setAdmin": false;
  "POST /admin.users.setExpiration": false;
  "POST /admin.users.setOwner": false;
  "POST /admin.users.setRegular": false;
  "GET /api.test": false;
  "GET /apps.event.authorizations.list": true;
  "GET /apps.permissions.info": false;
  "GET /apps.permissions.request": true;
  "GET /apps.permissions.resources.list": true;
  "GET /apps.permissions.scopes.list": true;
  "GET /apps.permissions.users.list": true;
  "GET /apps.permissions.users.request": true;
  "GET /apps.uninstall": false;
  "GET /auth.revoke": true;
  "GET /auth.test": false;
  "GET /bots.info": true;
  "POST /calls.add": false;
  "POST /calls.end": false;
  "GET /calls.info": true;
  "POST /calls.participants.add": false;
  "POST /calls.participants.remove": false;
  "POST /calls.update": false;
  "POST /chat.delete": false;
  "POST /chat.deleteScheduledMessage": false;
  "GET /chat.getPermalink": true;
  "POST /chat.meMessage": false;
  "POST /chat.postEphemeral": false;
  "POST /chat.postMessage": false;
  "POST /chat.scheduleMessage": false;
  "GET /chat.scheduledMessages.list": false;
  "POST /chat.unfurl": false;
  "POST /chat.update": false;
  "POST /conversations.archive": false;
  "POST /conversations.close": false;
  "POST /conversations.create": false;
  "GET /conversations.history": false;
  "GET /conversations.info": false;
  "POST /conversations.invite": false;
  "POST /conversations.join": false;
  "POST /conversations.kick": false;
  "POST /conversations.leave": false;
  "GET /conversations.list": false;
  "POST /conversations.mark": false;
  "GET /conversations.members": false;
  "POST /conversations.open": false;
  "POST /conversations.rename": false;
  "GET /conversations.replies": false;
  "POST /conversations.setPurpose": false;
  "POST /conversations.setTopic": false;
  "POST /conversations.unarchive": false;
  "GET /dialog.open": true;
  "POST /dnd.endDnd": false;
  "POST /dnd.endSnooze": false;
  "GET /dnd.info": false;
  "POST /dnd.setSnooze": false;
  "GET /dnd.teamInfo": false;
  "GET /emoji.list": true;
  "POST /files.comments.delete": false;
  "POST /files.delete": false;
  "GET /files.info": false;
  "GET /files.list": false;
  "POST /files.remote.add": false;
  "GET /files.remote.info": false;
  "GET /files.remote.list": false;
  "POST /files.remote.remove": false;
  "GET /files.remote.share": false;
  "POST /files.remote.update": false;
  "POST /files.revokePublicURL": false;
  "POST /files.sharedPublicURL": false;
  "POST /files.upload": false;
  "GET /migration.exchange": true;
  "GET /oauth.access": false;
  "GET /oauth.token": false;
  "GET /oauth.v2.access": true;
  "POST /pins.add": false;
  "GET /pins.list": true;
  "POST /pins.remove": false;
  "POST /reactions.add": false;
  "GET /reactions.get": true;
  "GET /reactions.list": true;
  "POST /reactions.remove": false;
  "POST /reminders.add": false;
  "POST /reminders.complete": false;
  "POST /reminders.delete": false;
  "GET /reminders.info": false;
  "GET /reminders.list": false;
  "GET /rtm.connect": true;
  "GET /search.messages": true;
  "POST /stars.add": false;
  "GET /stars.list": false;
  "POST /stars.remove": false;
  "GET /team.accessLogs": true;
  "GET /team.billableInfo": true;
  "GET /team.info": true;
  "GET /team.integrationLogs": true;
  "GET /team.profile.get": true;
  "POST /usergroups.create": false;
  "POST /usergroups.disable": false;
  "POST /usergroups.enable": false;
  "GET /usergroups.list": true;
  "POST /usergroups.update": false;
  "GET /usergroups.users.list": true;
  "POST /usergroups.users.update": false;
  "GET /users.conversations": false;
  "POST /users.deletePhoto": false;
  "GET /users.getPresence": true;
  "GET /users.identity": false;
  "GET /users.info": true;
  "GET /users.list": false;
  "GET /users.lookupByEmail": true;
  "GET /users.profile.get": true;
  "POST /users.profile.set": false;
  "POST /users.setActive": false;
  "POST /users.setPhoto": false;
  "POST /users.setPresence": false;
  "GET /views.open": true;
  "GET /views.publish": true;
  "GET /views.push": true;
  "GET /views.update": false;
  "GET /workflows.stepCompleted": true;
  "GET /workflows.stepFailed": true;
  "GET /workflows.updateStep": true;
}

export interface SlackWebApiOperationRequestBodyMap {
  "POST /admin.apps.approve": {
  app_id?: string;
  request_id?: string;
  team_id?: string;
};
  "GET /admin.apps.approved.list": never;
  "GET /admin.apps.requests.list": never;
  "POST /admin.apps.restrict": {
  app_id?: string;
  request_id?: string;
  team_id?: string;
};
  "GET /admin.apps.restricted.list": never;
  "POST /admin.conversations.archive": {
  channel_id: string;
};
  "POST /admin.conversations.convertToPrivate": {
  channel_id: string;
};
  "POST /admin.conversations.create": {
  name: string;
  description?: string;
  is_private: boolean;
  org_wide?: boolean;
  team_id?: string;
};
  "POST /admin.conversations.delete": {
  channel_id: string;
};
  "POST /admin.conversations.disconnectShared": {
  channel_id: string;
  leaving_team_ids?: string;
};
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo": never;
  "GET /admin.conversations.getConversationPrefs": never;
  "GET /admin.conversations.getTeams": never;
  "POST /admin.conversations.invite": {
  user_ids: string;
  channel_id: string;
};
  "POST /admin.conversations.rename": {
  channel_id: string;
  name: string;
};
  "POST /admin.conversations.restrictAccess.addGroup": {
  token: string;
  team_id?: string;
  group_id: string;
  channel_id: string;
};
  "GET /admin.conversations.restrictAccess.listGroups": never;
  "POST /admin.conversations.restrictAccess.removeGroup": {
  token: string;
  team_id: string;
  group_id: string;
  channel_id: string;
};
  "GET /admin.conversations.search": never;
  "POST /admin.conversations.setConversationPrefs": {
  channel_id: string;
  prefs: string;
};
  "POST /admin.conversations.setTeams": {
  channel_id: string;
  team_id?: string;
  target_team_ids?: string;
  org_channel?: boolean;
};
  "POST /admin.conversations.unarchive": {
  channel_id: string;
};
  "POST /admin.emoji.add": {
  token: string;
  name: string;
  url: string;
};
  "POST /admin.emoji.addAlias": {
  token: string;
  name: string;
  alias_for: string;
};
  "GET /admin.emoji.list": never;
  "POST /admin.emoji.remove": {
  token: string;
  name: string;
};
  "POST /admin.emoji.rename": {
  token: string;
  name: string;
  new_name: string;
};
  "POST /admin.inviteRequests.approve": {
  team_id?: string;
  invite_request_id: string;
};
  "GET /admin.inviteRequests.approved.list": never;
  "GET /admin.inviteRequests.denied.list": never;
  "POST /admin.inviteRequests.deny": {
  team_id?: string;
  invite_request_id: string;
};
  "GET /admin.inviteRequests.list": never;
  "GET /admin.teams.admins.list": never;
  "POST /admin.teams.create": {
  team_domain: string;
  team_name: string;
  team_description?: string;
  team_discoverability?: string;
};
  "GET /admin.teams.list": never;
  "GET /admin.teams.owners.list": never;
  "GET /admin.teams.settings.info": never;
  "POST /admin.teams.settings.setDefaultChannels": {
  token: string;
  team_id: string;
  channel_ids: string;
};
  "POST /admin.teams.settings.setDescription": {
  team_id: string;
  description: string;
};
  "POST /admin.teams.settings.setDiscoverability": {
  team_id: string;
  discoverability: string;
};
  "POST /admin.teams.settings.setIcon": {
  token: string;
  image_url: string;
  team_id: string;
};
  "POST /admin.teams.settings.setName": {
  team_id: string;
  name: string;
};
  "POST /admin.usergroups.addChannels": {
  usergroup_id: string;
  team_id?: string;
  channel_ids: string;
};
  "POST /admin.usergroups.addTeams": {
  usergroup_id: string;
  team_ids: string;
  auto_provision?: boolean;
};
  "GET /admin.usergroups.listChannels": never;
  "POST /admin.usergroups.removeChannels": {
  usergroup_id: string;
  channel_ids: string;
};
  "POST /admin.users.assign": {
  team_id: string;
  user_id: string;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
  channel_ids?: string;
};
  "POST /admin.users.invite": {
  team_id: string;
  email: string;
  channel_ids: string;
  custom_message?: string;
  real_name?: string;
  resend?: boolean;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
  guest_expiration_ts?: string;
};
  "GET /admin.users.list": never;
  "POST /admin.users.remove": {
  team_id: string;
  user_id: string;
};
  "POST /admin.users.session.invalidate": {
  team_id: string;
  session_id: number;
};
  "POST /admin.users.session.reset": {
  user_id: string;
  mobile_only?: boolean;
  web_only?: boolean;
};
  "POST /admin.users.setAdmin": {
  team_id: string;
  user_id: string;
};
  "POST /admin.users.setExpiration": {
  team_id: string;
  user_id: string;
  expiration_ts: number;
};
  "POST /admin.users.setOwner": {
  team_id: string;
  user_id: string;
};
  "POST /admin.users.setRegular": {
  team_id: string;
  user_id: string;
};
  "GET /api.test": never;
  "GET /apps.event.authorizations.list": never;
  "GET /apps.permissions.info": never;
  "GET /apps.permissions.request": never;
  "GET /apps.permissions.resources.list": never;
  "GET /apps.permissions.scopes.list": never;
  "GET /apps.permissions.users.list": never;
  "GET /apps.permissions.users.request": never;
  "GET /apps.uninstall": never;
  "GET /auth.revoke": never;
  "GET /auth.test": never;
  "GET /bots.info": never;
  "POST /calls.add": {
  external_unique_id: string;
  external_display_id?: string;
  join_url: string;
  desktop_app_join_url?: string;
  date_start?: number;
  title?: string;
  created_by?: string;
  users?: string;
};
  "POST /calls.end": {
  id: string;
  duration?: number;
};
  "GET /calls.info": never;
  "POST /calls.participants.add": {
  id: string;
  users: string;
};
  "POST /calls.participants.remove": {
  id: string;
  users: string;
};
  "POST /calls.update": {
  id: string;
  title?: string;
  join_url?: string;
  desktop_app_join_url?: string;
};
  "POST /chat.delete": {
  ts?: number;
  channel?: string;
  as_user?: boolean;
};
  "POST /chat.deleteScheduledMessage": {
  as_user?: boolean;
  channel: string;
  scheduled_message_id: string;
};
  "GET /chat.getPermalink": never;
  "POST /chat.meMessage": {
  channel?: string;
  text?: string;
};
  "POST /chat.postEphemeral": {
  as_user?: boolean;
  attachments?: string;
  blocks?: string;
  channel: string;
  icon_emoji?: string;
  icon_url?: string;
  link_names?: boolean;
  parse?: string;
  text?: string;
  thread_ts?: string;
  user: string;
  username?: string;
};
  "POST /chat.postMessage": {
  as_user?: string;
  attachments?: string;
  blocks?: string;
  channel: string;
  icon_emoji?: string;
  icon_url?: string;
  link_names?: boolean;
  mrkdwn?: boolean;
  parse?: string;
  reply_broadcast?: boolean;
  text?: string;
  thread_ts?: string;
  unfurl_links?: boolean;
  unfurl_media?: boolean;
  username?: string;
};
  "POST /chat.scheduleMessage": {
  channel?: string;
  text?: string;
  post_at?: string;
  parse?: string;
  as_user?: boolean;
  link_names?: boolean;
  attachments?: string;
  blocks?: string;
  unfurl_links?: boolean;
  unfurl_media?: boolean;
  thread_ts?: number;
  reply_broadcast?: boolean;
};
  "GET /chat.scheduledMessages.list": never;
  "POST /chat.unfurl": {
  channel: string;
  ts: string;
  unfurls?: string;
  user_auth_message?: string;
  user_auth_required?: boolean;
  user_auth_url?: string;
};
  "POST /chat.update": {
  as_user?: string;
  attachments?: string;
  blocks?: string;
  channel: string;
  link_names?: string;
  parse?: string;
  text?: string;
  ts: string;
};
  "POST /conversations.archive": {
  channel?: string;
};
  "POST /conversations.close": {
  channel?: string;
};
  "POST /conversations.create": {
  name?: string;
  is_private?: boolean;
};
  "GET /conversations.history": never;
  "GET /conversations.info": never;
  "POST /conversations.invite": {
  channel?: string;
  users?: string;
};
  "POST /conversations.join": {
  channel?: string;
};
  "POST /conversations.kick": {
  channel?: string;
  user?: string;
};
  "POST /conversations.leave": {
  channel?: string;
};
  "GET /conversations.list": never;
  "POST /conversations.mark": {
  channel?: string;
  ts?: number;
};
  "GET /conversations.members": never;
  "POST /conversations.open": {
  channel?: string;
  users?: string;
  return_im?: boolean;
};
  "POST /conversations.rename": {
  channel?: string;
  name?: string;
};
  "GET /conversations.replies": never;
  "POST /conversations.setPurpose": {
  channel?: string;
  purpose?: string;
};
  "POST /conversations.setTopic": {
  channel?: string;
  topic?: string;
};
  "POST /conversations.unarchive": {
  channel?: string;
};
  "GET /dialog.open": never;
  "POST /dnd.endDnd": never;
  "POST /dnd.endSnooze": never;
  "GET /dnd.info": never;
  "POST /dnd.setSnooze": {
  token: string;
  num_minutes: string;
};
  "GET /dnd.teamInfo": never;
  "GET /emoji.list": never;
  "POST /files.comments.delete": {
  file?: string;
  id?: string;
};
  "POST /files.delete": {
  file?: string;
};
  "GET /files.info": never;
  "GET /files.list": never;
  "POST /files.remote.add": {
  token?: string;
  external_id?: string;
  title?: string;
  filetype?: string;
  external_url?: string;
  preview_image?: string;
  indexable_file_contents?: string;
};
  "GET /files.remote.info": never;
  "GET /files.remote.list": never;
  "POST /files.remote.remove": {
  token?: string;
  file?: string;
  external_id?: string;
};
  "GET /files.remote.share": never;
  "POST /files.remote.update": {
  token?: string;
  file?: string;
  external_id?: string;
  title?: string;
  filetype?: string;
  external_url?: string;
  preview_image?: string;
  indexable_file_contents?: string;
};
  "POST /files.revokePublicURL": {
  file?: string;
};
  "POST /files.sharedPublicURL": {
  file?: string;
};
  "POST /files.upload": {
  token?: string;
  file?: string;
  content?: string;
  filetype?: string;
  filename?: string;
  title?: string;
  initial_comment?: string;
  channels?: string;
  thread_ts?: number;
};
  "GET /migration.exchange": never;
  "GET /oauth.access": never;
  "GET /oauth.token": never;
  "GET /oauth.v2.access": never;
  "POST /pins.add": {
  channel: string;
  timestamp?: string;
};
  "GET /pins.list": never;
  "POST /pins.remove": {
  channel: string;
  timestamp?: string;
};
  "POST /reactions.add": {
  channel: string;
  name: string;
  timestamp: string;
};
  "GET /reactions.get": never;
  "GET /reactions.list": never;
  "POST /reactions.remove": {
  name: string;
  file?: string;
  file_comment?: string;
  channel?: string;
  timestamp?: string;
};
  "POST /reminders.add": {
  text: string;
  time: string;
  user?: string;
};
  "POST /reminders.complete": {
  reminder?: string;
};
  "POST /reminders.delete": {
  reminder?: string;
};
  "GET /reminders.info": never;
  "GET /reminders.list": never;
  "GET /rtm.connect": never;
  "GET /search.messages": never;
  "POST /stars.add": {
  channel?: string;
  file?: string;
  file_comment?: string;
  timestamp?: string;
};
  "GET /stars.list": never;
  "POST /stars.remove": {
  channel?: string;
  file?: string;
  file_comment?: string;
  timestamp?: string;
};
  "GET /team.accessLogs": never;
  "GET /team.billableInfo": never;
  "GET /team.info": never;
  "GET /team.integrationLogs": never;
  "GET /team.profile.get": never;
  "POST /usergroups.create": {
  channels?: string;
  description?: string;
  handle?: string;
  include_count?: boolean;
  name: string;
};
  "POST /usergroups.disable": {
  include_count?: boolean;
  usergroup: string;
};
  "POST /usergroups.enable": {
  include_count?: boolean;
  usergroup: string;
};
  "GET /usergroups.list": never;
  "POST /usergroups.update": {
  handle?: string;
  description?: string;
  channels?: string;
  include_count?: boolean;
  usergroup: string;
  name?: string;
};
  "GET /usergroups.users.list": never;
  "POST /usergroups.users.update": {
  include_count?: boolean;
  usergroup: string;
  users: string;
};
  "GET /users.conversations": never;
  "POST /users.deletePhoto": {
  token: string;
};
  "GET /users.getPresence": never;
  "GET /users.identity": never;
  "GET /users.info": never;
  "GET /users.list": never;
  "GET /users.lookupByEmail": never;
  "GET /users.profile.get": never;
  "POST /users.profile.set": {
  name?: string;
  profile?: string;
  user?: string;
  value?: string;
};
  "POST /users.setActive": never;
  "POST /users.setPhoto": {
  token: string;
  crop_w?: string;
  crop_x?: string;
  crop_y?: string;
  image?: string;
};
  "POST /users.setPresence": {
  presence: string;
};
  "GET /views.open": never;
  "GET /views.publish": never;
  "GET /views.push": never;
  "GET /views.update": never;
  "GET /workflows.stepCompleted": never;
  "GET /workflows.stepFailed": never;
  "GET /workflows.updateStep": never;
}

export interface SlackWebApiOperationRequestBodyRequiredMap {
  "POST /admin.apps.approve": false;
  "GET /admin.apps.approved.list": false;
  "GET /admin.apps.requests.list": false;
  "POST /admin.apps.restrict": false;
  "GET /admin.apps.restricted.list": false;
  "POST /admin.conversations.archive": true;
  "POST /admin.conversations.convertToPrivate": true;
  "POST /admin.conversations.create": true;
  "POST /admin.conversations.delete": true;
  "POST /admin.conversations.disconnectShared": true;
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo": false;
  "GET /admin.conversations.getConversationPrefs": false;
  "GET /admin.conversations.getTeams": false;
  "POST /admin.conversations.invite": true;
  "POST /admin.conversations.rename": true;
  "POST /admin.conversations.restrictAccess.addGroup": true;
  "GET /admin.conversations.restrictAccess.listGroups": false;
  "POST /admin.conversations.restrictAccess.removeGroup": true;
  "GET /admin.conversations.search": false;
  "POST /admin.conversations.setConversationPrefs": true;
  "POST /admin.conversations.setTeams": true;
  "POST /admin.conversations.unarchive": true;
  "POST /admin.emoji.add": true;
  "POST /admin.emoji.addAlias": true;
  "GET /admin.emoji.list": false;
  "POST /admin.emoji.remove": true;
  "POST /admin.emoji.rename": true;
  "POST /admin.inviteRequests.approve": true;
  "GET /admin.inviteRequests.approved.list": false;
  "GET /admin.inviteRequests.denied.list": false;
  "POST /admin.inviteRequests.deny": true;
  "GET /admin.inviteRequests.list": false;
  "GET /admin.teams.admins.list": false;
  "POST /admin.teams.create": true;
  "GET /admin.teams.list": false;
  "GET /admin.teams.owners.list": false;
  "GET /admin.teams.settings.info": false;
  "POST /admin.teams.settings.setDefaultChannels": true;
  "POST /admin.teams.settings.setDescription": true;
  "POST /admin.teams.settings.setDiscoverability": true;
  "POST /admin.teams.settings.setIcon": true;
  "POST /admin.teams.settings.setName": true;
  "POST /admin.usergroups.addChannels": true;
  "POST /admin.usergroups.addTeams": true;
  "GET /admin.usergroups.listChannels": false;
  "POST /admin.usergroups.removeChannels": true;
  "POST /admin.users.assign": true;
  "POST /admin.users.invite": true;
  "GET /admin.users.list": false;
  "POST /admin.users.remove": true;
  "POST /admin.users.session.invalidate": true;
  "POST /admin.users.session.reset": true;
  "POST /admin.users.setAdmin": true;
  "POST /admin.users.setExpiration": true;
  "POST /admin.users.setOwner": true;
  "POST /admin.users.setRegular": true;
  "GET /api.test": false;
  "GET /apps.event.authorizations.list": false;
  "GET /apps.permissions.info": false;
  "GET /apps.permissions.request": false;
  "GET /apps.permissions.resources.list": false;
  "GET /apps.permissions.scopes.list": false;
  "GET /apps.permissions.users.list": false;
  "GET /apps.permissions.users.request": false;
  "GET /apps.uninstall": false;
  "GET /auth.revoke": false;
  "GET /auth.test": false;
  "GET /bots.info": false;
  "POST /calls.add": true;
  "POST /calls.end": true;
  "GET /calls.info": false;
  "POST /calls.participants.add": true;
  "POST /calls.participants.remove": true;
  "POST /calls.update": true;
  "POST /chat.delete": false;
  "POST /chat.deleteScheduledMessage": true;
  "GET /chat.getPermalink": false;
  "POST /chat.meMessage": false;
  "POST /chat.postEphemeral": true;
  "POST /chat.postMessage": true;
  "POST /chat.scheduleMessage": false;
  "GET /chat.scheduledMessages.list": false;
  "POST /chat.unfurl": true;
  "POST /chat.update": true;
  "POST /conversations.archive": false;
  "POST /conversations.close": false;
  "POST /conversations.create": false;
  "GET /conversations.history": false;
  "GET /conversations.info": false;
  "POST /conversations.invite": false;
  "POST /conversations.join": false;
  "POST /conversations.kick": false;
  "POST /conversations.leave": false;
  "GET /conversations.list": false;
  "POST /conversations.mark": false;
  "GET /conversations.members": false;
  "POST /conversations.open": false;
  "POST /conversations.rename": false;
  "GET /conversations.replies": false;
  "POST /conversations.setPurpose": false;
  "POST /conversations.setTopic": false;
  "POST /conversations.unarchive": false;
  "GET /dialog.open": false;
  "POST /dnd.endDnd": false;
  "POST /dnd.endSnooze": false;
  "GET /dnd.info": false;
  "POST /dnd.setSnooze": true;
  "GET /dnd.teamInfo": false;
  "GET /emoji.list": false;
  "POST /files.comments.delete": false;
  "POST /files.delete": false;
  "GET /files.info": false;
  "GET /files.list": false;
  "POST /files.remote.add": false;
  "GET /files.remote.info": false;
  "GET /files.remote.list": false;
  "POST /files.remote.remove": false;
  "GET /files.remote.share": false;
  "POST /files.remote.update": false;
  "POST /files.revokePublicURL": false;
  "POST /files.sharedPublicURL": false;
  "POST /files.upload": false;
  "GET /migration.exchange": false;
  "GET /oauth.access": false;
  "GET /oauth.token": false;
  "GET /oauth.v2.access": false;
  "POST /pins.add": true;
  "GET /pins.list": false;
  "POST /pins.remove": true;
  "POST /reactions.add": true;
  "GET /reactions.get": false;
  "GET /reactions.list": false;
  "POST /reactions.remove": true;
  "POST /reminders.add": true;
  "POST /reminders.complete": false;
  "POST /reminders.delete": false;
  "GET /reminders.info": false;
  "GET /reminders.list": false;
  "GET /rtm.connect": false;
  "GET /search.messages": false;
  "POST /stars.add": false;
  "GET /stars.list": false;
  "POST /stars.remove": false;
  "GET /team.accessLogs": false;
  "GET /team.billableInfo": false;
  "GET /team.info": false;
  "GET /team.integrationLogs": false;
  "GET /team.profile.get": false;
  "POST /usergroups.create": true;
  "POST /usergroups.disable": true;
  "POST /usergroups.enable": true;
  "GET /usergroups.list": false;
  "POST /usergroups.update": true;
  "GET /usergroups.users.list": false;
  "POST /usergroups.users.update": true;
  "GET /users.conversations": false;
  "POST /users.deletePhoto": true;
  "GET /users.getPresence": false;
  "GET /users.identity": false;
  "GET /users.info": false;
  "GET /users.list": false;
  "GET /users.lookupByEmail": false;
  "GET /users.profile.get": false;
  "POST /users.profile.set": false;
  "POST /users.setActive": false;
  "POST /users.setPhoto": true;
  "POST /users.setPresence": true;
  "GET /views.open": false;
  "GET /views.publish": false;
  "GET /views.push": false;
  "GET /views.update": false;
  "GET /workflows.stepCompleted": false;
  "GET /workflows.stepFailed": false;
  "GET /workflows.updateStep": false;
}

export interface SlackWebApiOperationResponseMap {
  "POST /admin.apps.approve": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.apps.approved.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.apps.requests.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.apps.restrict": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.apps.restricted.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.conversations.archive": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.conversations.convertToPrivate": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.conversations.create": {
  channel_id?: SlackWebApiSchemaDefsChannelId;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.conversations.delete": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.conversations.disconnectShared": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /admin.conversations.ekm.listOriginalConnectedChannelInfo": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.conversations.getConversationPrefs": {
  ok: SlackWebApiSchemaDefsOkTrue;
  prefs?: {
  can_thread?: {
  type?: ReadonlyArray<string>;
  user?: ReadonlyArray<string>;
};
  who_can_post?: {
  type?: ReadonlyArray<string>;
  user?: ReadonlyArray<string>;
};
};
};
  "GET /admin.conversations.getTeams": {
  ok: SlackWebApiSchemaDefsOkTrue;
  response_metadata?: {
  next_cursor: string;
};
  team_ids: ReadonlyArray<SlackWebApiSchemaDefsTeam>;
};
  "POST /admin.conversations.invite": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.conversations.rename": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.conversations.restrictAccess.addGroup": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.conversations.restrictAccess.listGroups": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.conversations.restrictAccess.removeGroup": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.conversations.search": {
  channels: ReadonlyArray<SlackWebApiSchemaObjsChannel>;
  next_cursor: string;
};
  "POST /admin.conversations.setConversationPrefs": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.conversations.setTeams": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.conversations.unarchive": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /admin.emoji.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.emoji.addAlias": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.emoji.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.emoji.remove": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.emoji.rename": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.inviteRequests.approve": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.inviteRequests.approved.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.inviteRequests.denied.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.inviteRequests.deny": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.inviteRequests.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.teams.admins.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.teams.create": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.teams.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.teams.owners.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.teams.settings.info": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.teams.settings.setDefaultChannels": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.teams.settings.setDescription": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.teams.settings.setDiscoverability": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.teams.settings.setIcon": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.teams.settings.setName": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.usergroups.addChannels": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.usergroups.addTeams": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.usergroups.listChannels": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.usergroups.removeChannels": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.assign": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.invite": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /admin.users.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.remove": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.session.invalidate": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.session.reset": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.setAdmin": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.setExpiration": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.setOwner": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /admin.users.setRegular": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /api.test": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: {} | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /apps.event.authorizations.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /apps.permissions.info": {
  info: {
  app_home: {
  resources?: SlackWebApiSchemaObjsResources;
  scopes?: SlackWebApiSchemaObjsScopes;
};
  channel: {
  resources?: SlackWebApiSchemaObjsResources;
  scopes?: SlackWebApiSchemaObjsScopes;
};
  group: {
  resources?: SlackWebApiSchemaObjsResources;
  scopes?: SlackWebApiSchemaObjsScopes;
};
  im: {
  resources?: SlackWebApiSchemaObjsResources;
  scopes?: SlackWebApiSchemaObjsScopes;
};
  mpim: {
  resources?: SlackWebApiSchemaObjsResources;
  scopes?: SlackWebApiSchemaObjsScopes;
};
  team: {
  resources: SlackWebApiSchemaObjsResources;
  scopes: SlackWebApiSchemaObjsScopes;
};
};
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /apps.permissions.request": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /apps.permissions.resources.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  resources: ReadonlyArray<{
  id?: string;
  type?: string;
}>;
  response_metadata?: {
  next_cursor: string;
};
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | ReadonlyArray<{
  id?: string;
  type?: string;
}> | {
  next_cursor: string;
} | undefined;
};
  "GET /apps.permissions.scopes.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  scopes: {
  app_home?: SlackWebApiSchemaObjsScopes;
  channel?: SlackWebApiSchemaObjsScopes;
  group?: SlackWebApiSchemaObjsScopes;
  im?: SlackWebApiSchemaObjsScopes;
  mpim?: SlackWebApiSchemaObjsScopes;
  team?: SlackWebApiSchemaObjsScopes;
  user?: SlackWebApiSchemaObjsScopes;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaObjsScopes | undefined;
};
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | {
  app_home?: SlackWebApiSchemaObjsScopes;
  channel?: SlackWebApiSchemaObjsScopes;
  group?: SlackWebApiSchemaObjsScopes;
  im?: SlackWebApiSchemaObjsScopes;
  mpim?: SlackWebApiSchemaObjsScopes;
  team?: SlackWebApiSchemaObjsScopes;
  user?: SlackWebApiSchemaObjsScopes;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaObjsScopes | undefined;
} | undefined;
};
  "GET /apps.permissions.users.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /apps.permissions.users.request": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /apps.uninstall": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /auth.revoke": {
  ok: SlackWebApiSchemaDefsOkTrue;
  revoked: boolean;
};
  "GET /auth.test": {
  bot_id?: SlackWebApiSchemaDefsBotId;
  is_enterprise_install?: boolean;
  ok: SlackWebApiSchemaDefsOkTrue;
  team: string;
  team_id: SlackWebApiSchemaDefsTeam;
  url: string;
  user: string;
  user_id: SlackWebApiSchemaDefsUserId;
};
  "GET /bots.info": {
  bot: {
  app_id: SlackWebApiSchemaDefsAppId;
  deleted: boolean;
  icons: {
  image_36: string;
  image_48: string;
  image_72: string;
};
  id: SlackWebApiSchemaDefsBotId;
  name: string;
  updated: number;
  user_id?: SlackWebApiSchemaDefsUserId;
};
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /calls.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /calls.end": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /calls.info": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /calls.participants.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /calls.participants.remove": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /calls.update": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /chat.delete": {
  channel: SlackWebApiSchemaDefsChannel;
  ok: SlackWebApiSchemaDefsOkTrue;
  ts: SlackWebApiSchemaDefsTs;
};
  "POST /chat.deleteScheduledMessage": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /chat.getPermalink": {
  channel: SlackWebApiSchemaDefsChannel;
  ok: SlackWebApiSchemaDefsOkTrue;
  permalink: string;
};
  "POST /chat.meMessage": {
  channel?: SlackWebApiSchemaDefsChannel;
  ok: SlackWebApiSchemaDefsOkTrue;
  ts?: SlackWebApiSchemaDefsTs;
};
  "POST /chat.postEphemeral": {
  message_ts: SlackWebApiSchemaDefsTs;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /chat.postMessage": {
  channel: SlackWebApiSchemaDefsChannel;
  message: SlackWebApiSchemaObjsMessage;
  ok: SlackWebApiSchemaDefsOkTrue;
  ts: SlackWebApiSchemaDefsTs;
};
  "POST /chat.scheduleMessage": {
  channel: SlackWebApiSchemaDefsChannel;
  message: {
  bot_id: SlackWebApiSchemaDefsBotId;
  bot_profile?: SlackWebApiSchemaObjsBotProfile;
  team: SlackWebApiSchemaDefsTeam;
  text: string;
  type: string;
  user: SlackWebApiSchemaDefsUserId;
  username?: string;
};
  ok: SlackWebApiSchemaDefsOkTrue;
  post_at: number;
  scheduled_message_id: string;
};
  "GET /chat.scheduledMessages.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  response_metadata: {
  next_cursor: string;
};
  scheduled_messages: ReadonlyArray<{
  channel_id: SlackWebApiSchemaDefsChannelId;
  date_created: number;
  id: string;
  post_at: number;
  text?: string;
}>;
};
  "POST /chat.unfurl": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /chat.update": {
  channel: string;
  message: {
  attachments?: ReadonlyArray<{}>;
  blocks?: {};
  text: string;
};
  ok: SlackWebApiSchemaDefsOkTrue;
  text: string;
  ts: string;
};
  "POST /conversations.archive": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.close": {
  already_closed?: boolean;
  no_op?: boolean;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.create": {
  channel: SlackWebApiSchemaObjsConversation;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /conversations.history": {
  channel_actions_count: number;
  channel_actions_ts: ReadonlyArray<{
  "0"?: number;
  "1"?: SlackWebApiSchemaJsonValue;
}>;
  has_more: boolean;
  messages: ReadonlyArray<SlackWebApiSchemaObjsMessage>;
  ok: SlackWebApiSchemaDefsOkTrue;
  pin_count: number;
};
  "GET /conversations.info": {
  channel: SlackWebApiSchemaObjsConversation;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.invite": {
  channel: SlackWebApiSchemaObjsConversation;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.join": {
  channel: SlackWebApiSchemaObjsConversation;
  ok: SlackWebApiSchemaDefsOkTrue;
  response_metadata?: {
  warnings?: ReadonlyArray<string>;
};
  warning?: string;
};
  "POST /conversations.kick": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.leave": {
  not_in_channel?: true;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /conversations.list": {
  channels: ReadonlyArray<SlackWebApiSchemaObjsConversation>;
  ok: SlackWebApiSchemaDefsOkTrue;
  response_metadata?: {
  next_cursor: string;
};
};
  "POST /conversations.mark": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /conversations.members": {
  members: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
  ok: SlackWebApiSchemaDefsOkTrue;
  response_metadata: {
  next_cursor: string;
};
};
  "POST /conversations.open": {
  already_open?: boolean;
  channel: ReadonlyArray<{
  "0"?: SlackWebApiSchemaObjsConversation;
  "1"?: {
  created?: string;
  id: SlackWebApiSchemaDefsDmId;
  is_im?: boolean;
  is_open?: boolean;
  last_read?: SlackWebApiSchemaDefsTs;
  latest?: SlackWebApiSchemaObjsMessage;
  unread_count?: number;
  unread_count_display?: number;
  user?: SlackWebApiSchemaDefsUserId;
};
}>;
  no_op?: boolean;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.rename": {
  channel: SlackWebApiSchemaObjsConversation;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /conversations.replies": {
  has_more?: boolean;
  messages: ReadonlyArray<ReadonlyArray<{
  "0"?: {
  last_read?: SlackWebApiSchemaDefsTs;
  latest_reply?: SlackWebApiSchemaDefsTs;
  reply_count: number;
  reply_users?: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
  reply_users_count?: number;
  source_team?: SlackWebApiSchemaDefsTeam;
  subscribed: boolean;
  team?: SlackWebApiSchemaDefsTeam;
  text: string;
  thread_ts: SlackWebApiSchemaDefsTs;
  ts: SlackWebApiSchemaDefsTs;
  type: string;
  unread_count?: number;
  user: SlackWebApiSchemaDefsUserId;
  user_profile?: SlackWebApiSchemaObjsUserProfileShort;
  user_team?: SlackWebApiSchemaDefsTeam;
};
  "1"?: {
  is_starred?: boolean;
  parent_user_id: SlackWebApiSchemaDefsUserId;
  source_team?: SlackWebApiSchemaDefsTeam;
  team?: SlackWebApiSchemaDefsTeam;
  text: string;
  thread_ts: SlackWebApiSchemaDefsTs;
  ts: SlackWebApiSchemaDefsTs;
  type: string;
  user: SlackWebApiSchemaDefsUserId;
  user_profile?: SlackWebApiSchemaObjsUserProfileShort;
  user_team?: SlackWebApiSchemaDefsTeam;
};
}>>;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.setPurpose": {
  channel: SlackWebApiSchemaObjsConversation;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.setTopic": {
  channel: SlackWebApiSchemaObjsConversation;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /conversations.unarchive": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /dialog.open": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /dnd.endDnd": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /dnd.endSnooze": {
  dnd_enabled: boolean;
  next_dnd_end_ts: number;
  next_dnd_start_ts: number;
  ok: SlackWebApiSchemaDefsOkTrue;
  snooze_enabled: boolean;
};
  "GET /dnd.info": {
  dnd_enabled: boolean;
  next_dnd_end_ts: number;
  next_dnd_start_ts: number;
  ok: SlackWebApiSchemaDefsOkTrue;
  snooze_enabled?: boolean;
  snooze_endtime?: number;
  snooze_remaining?: number;
};
  "POST /dnd.setSnooze": {
  ok: SlackWebApiSchemaDefsOkTrue;
  snooze_enabled: boolean;
  snooze_endtime: number;
  snooze_remaining: number;
};
  "GET /dnd.teamInfo": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /emoji.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /files.comments.delete": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /files.delete": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /files.info": {
  comments: SlackWebApiSchemaObjsComments;
  content_html?: SlackWebApiSchemaJsonValue;
  editor?: SlackWebApiSchemaDefsUserId;
  file: SlackWebApiSchemaObjsFile;
  ok: SlackWebApiSchemaDefsOkTrue;
  paging?: SlackWebApiSchemaObjsPaging;
  response_metadata?: SlackWebApiSchemaObjsResponseMetadata;
};
  "GET /files.list": {
  files: ReadonlyArray<SlackWebApiSchemaObjsFile>;
  ok: SlackWebApiSchemaDefsOkTrue;
  paging: SlackWebApiSchemaObjsPaging;
};
  "POST /files.remote.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /files.remote.info": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /files.remote.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /files.remote.remove": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /files.remote.share": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /files.remote.update": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /files.revokePublicURL": {
  file: SlackWebApiSchemaObjsFile;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /files.sharedPublicURL": {
  file: SlackWebApiSchemaObjsFile;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /files.upload": {
  file: SlackWebApiSchemaObjsFile;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /migration.exchange": {
  enterprise_id: string;
  invalid_user_ids?: ReadonlyArray<string>;
  ok: SlackWebApiSchemaDefsOkTrue;
  team_id: SlackWebApiSchemaDefsTeam;
  user_id_map?: {
  readonly [key: string]: SlackWebApiSchemaJsonValue | undefined;
};
  readonly [key: string]: SlackWebApiSchemaJsonValue | string | ReadonlyArray<string> | SlackWebApiSchemaDefsOkTrue | SlackWebApiSchemaDefsTeam | {
  readonly [key: string]: SlackWebApiSchemaJsonValue | undefined;
} | undefined;
};
  "GET /oauth.access": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /oauth.token": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /oauth.v2.access": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /pins.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /pins.list": ReadonlyArray<{
  "0"?: {
  items: ReadonlyArray<{
  "0"?: {
  created?: number;
  created_by?: SlackWebApiSchemaDefsUserId;
  file?: SlackWebApiSchemaObjsFile;
  type?: "file";
};
  "1"?: {
  channel?: SlackWebApiSchemaDefsChannel;
  created?: number;
  created_by?: SlackWebApiSchemaDefsUserId;
  message?: SlackWebApiSchemaObjsMessage;
  type?: "message";
};
}>;
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "1"?: {
  count: number;
  ok: SlackWebApiSchemaDefsOkTrue;
};
}>;
  "POST /pins.remove": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /reactions.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /reactions.get": ReadonlyArray<{
  "0"?: {
  channel: SlackWebApiSchemaDefsChannel;
  message: SlackWebApiSchemaObjsMessage;
  ok: SlackWebApiSchemaDefsOkTrue;
  type: "message";
};
  "1"?: {
  file: SlackWebApiSchemaObjsFile;
  ok: SlackWebApiSchemaDefsOkTrue;
  type: "file";
};
  "2"?: {
  comment: SlackWebApiSchemaObjsComment;
  file: SlackWebApiSchemaObjsFile;
  ok: SlackWebApiSchemaDefsOkTrue;
  type: "file_comment";
};
}>;
  "GET /reactions.list": {
  items: ReadonlyArray<ReadonlyArray<{
  "0"?: {
  channel: SlackWebApiSchemaDefsChannel;
  message: SlackWebApiSchemaObjsMessage;
  type: "message";
};
  "1"?: {
  file: SlackWebApiSchemaObjsFile;
  type: "file";
};
  "2"?: {
  comment: SlackWebApiSchemaObjsComment;
  file: SlackWebApiSchemaObjsFile;
  type: "file_comment";
};
}>>;
  ok: SlackWebApiSchemaDefsOkTrue;
  paging?: SlackWebApiSchemaObjsPaging;
  response_metadata?: SlackWebApiSchemaObjsResponseMetadata;
};
  "POST /reactions.remove": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /reminders.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
  reminder: SlackWebApiSchemaObjsReminder;
};
  "POST /reminders.complete": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /reminders.delete": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /reminders.info": {
  ok: SlackWebApiSchemaDefsOkTrue;
  reminder: SlackWebApiSchemaObjsReminder;
};
  "GET /reminders.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  reminders: ReadonlyArray<SlackWebApiSchemaObjsReminder>;
};
  "GET /rtm.connect": {
  ok: SlackWebApiSchemaDefsOkTrue;
  self: {
  id: SlackWebApiSchemaDefsUserId;
  name: string;
};
  team: {
  domain: string;
  id: SlackWebApiSchemaDefsTeam;
  name: string;
};
  url: string;
};
  "GET /search.messages": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "POST /stars.add": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /stars.list": {
  items: ReadonlyArray<ReadonlyArray<{
  "0"?: {
  channel: SlackWebApiSchemaDefsChannel;
  date_create: number;
  message: SlackWebApiSchemaObjsMessage;
  type: "message";
};
  "1"?: {
  date_create: number;
  file: SlackWebApiSchemaObjsFile;
  type: "file";
};
  "2"?: {
  comment: SlackWebApiSchemaObjsComment;
  date_create: number;
  file: SlackWebApiSchemaObjsFile;
  type: "file_comment";
};
  "3"?: {
  channel: SlackWebApiSchemaDefsChannel;
  date_create: number;
  type: "channel";
};
  "4"?: {
  channel: SlackWebApiSchemaDefsDmId;
  date_create: number;
  type: "im";
};
  "5"?: {
  channel: SlackWebApiSchemaDefsGroupId;
  date_create: number;
  type: "group";
};
}>>;
  ok: SlackWebApiSchemaDefsOkTrue;
  paging?: SlackWebApiSchemaObjsPaging;
};
  "POST /stars.remove": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /team.accessLogs": {
  logins: ReadonlyArray<{
  count: number;
  country: string | null;
  date_first: number;
  date_last: number;
  ip: string | null;
  isp: string | null;
  region: string | null;
  user_agent: string;
  user_id: SlackWebApiSchemaDefsUserId;
  username: string;
}>;
  ok: SlackWebApiSchemaDefsOkTrue;
  paging: SlackWebApiSchemaObjsPaging;
};
  "GET /team.billableInfo": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /team.info": {
  ok: SlackWebApiSchemaDefsOkTrue;
  team: SlackWebApiSchemaObjsTeam;
};
  "GET /team.integrationLogs": {
  logs: ReadonlyArray<{
  admin_app_id?: SlackWebApiSchemaDefsAppId;
  app_id: SlackWebApiSchemaDefsAppId;
  app_type: string;
  change_type: string;
  channel?: SlackWebApiSchemaDefsChannel;
  date: string;
  scope: string;
  service_id?: string;
  service_type?: string;
  user_id: SlackWebApiSchemaDefsUserId;
  user_name: string;
}>;
  ok: SlackWebApiSchemaDefsOkTrue;
  paging: SlackWebApiSchemaObjsPaging;
};
  "GET /team.profile.get": {
  ok: SlackWebApiSchemaDefsOkTrue;
  profile: {
  fields: ReadonlyArray<SlackWebApiSchemaObjsTeamProfileField>;
};
};
  "POST /usergroups.create": {
  ok: SlackWebApiSchemaDefsOkTrue;
  usergroup: SlackWebApiSchemaObjsSubteam;
};
  "POST /usergroups.disable": {
  ok: SlackWebApiSchemaDefsOkTrue;
  usergroup: SlackWebApiSchemaObjsSubteam;
};
  "POST /usergroups.enable": {
  ok: SlackWebApiSchemaDefsOkTrue;
  usergroup: SlackWebApiSchemaObjsSubteam;
};
  "GET /usergroups.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  usergroups: ReadonlyArray<SlackWebApiSchemaObjsSubteam>;
};
  "POST /usergroups.update": {
  ok: SlackWebApiSchemaDefsOkTrue;
  usergroup: SlackWebApiSchemaObjsSubteam;
};
  "GET /usergroups.users.list": {
  ok: SlackWebApiSchemaDefsOkTrue;
  users: ReadonlyArray<SlackWebApiSchemaDefsUserId>;
};
  "POST /usergroups.users.update": {
  ok: SlackWebApiSchemaDefsOkTrue;
  usergroup: SlackWebApiSchemaObjsSubteam;
};
  "GET /users.conversations": {
  channels: ReadonlyArray<SlackWebApiSchemaObjsConversation>;
  ok: SlackWebApiSchemaDefsOkTrue;
  response_metadata?: {
  next_cursor: string;
};
  readonly [key: string]: SlackWebApiSchemaJsonValue | ReadonlyArray<SlackWebApiSchemaObjsConversation> | SlackWebApiSchemaDefsOkTrue | {
  next_cursor: string;
} | undefined;
};
  "POST /users.deletePhoto": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /users.getPresence": {
  auto_away?: boolean;
  connection_count?: number;
  last_activity?: number;
  manual_away?: boolean;
  ok: SlackWebApiSchemaDefsOkTrue;
  online?: boolean;
  presence: string;
  readonly [key: string]: SlackWebApiSchemaJsonValue | boolean | number | SlackWebApiSchemaDefsOkTrue | string | undefined;
};
  "GET /users.identity": ReadonlyArray<{
  "0"?: {
  ok: SlackWebApiSchemaDefsOkTrue;
  team: {
  id: SlackWebApiSchemaDefsTeam;
};
  user: {
  id: SlackWebApiSchemaDefsUserId;
  name: string;
};
};
  "1"?: {
  ok: SlackWebApiSchemaDefsOkTrue;
  team: {
  id: SlackWebApiSchemaDefsTeam;
};
  user: {
  email: string;
  id: SlackWebApiSchemaDefsUserId;
  name: string;
};
};
  "2"?: {
  ok: SlackWebApiSchemaDefsOkTrue;
  team: {
  id: SlackWebApiSchemaDefsTeam;
};
  user: {
  id: SlackWebApiSchemaDefsUserId;
  image_192: string;
  image_24: string;
  image_32: string;
  image_48: string;
  image_512: string;
  image_72: string;
  name: string;
};
};
  "3"?: {
  ok: SlackWebApiSchemaDefsOkTrue;
  team: {
  domain: string;
  id: SlackWebApiSchemaDefsTeam;
  image_102: string;
  image_132: string;
  image_230: string;
  image_34: string;
  image_44: string;
  image_68: string;
  image_88: string;
  image_default: boolean;
  name: string;
};
  user: {
  id: SlackWebApiSchemaDefsUserId;
  name: string;
};
};
}>;
  "GET /users.info": {
  ok: SlackWebApiSchemaDefsOkTrue;
  user: SlackWebApiSchemaObjsUser;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | SlackWebApiSchemaObjsUser | undefined;
};
  "GET /users.list": {
  cache_ts: number;
  members: ReadonlyArray<SlackWebApiSchemaObjsUser>;
  ok: SlackWebApiSchemaDefsOkTrue;
  response_metadata?: SlackWebApiSchemaObjsResponseMetadata;
};
  "GET /users.lookupByEmail": {
  ok: SlackWebApiSchemaDefsOkTrue;
  user: SlackWebApiSchemaObjsUser;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | SlackWebApiSchemaObjsUser | undefined;
};
  "GET /users.profile.get": {
  ok: SlackWebApiSchemaDefsOkTrue;
  profile: SlackWebApiSchemaObjsUserProfile;
};
  "POST /users.profile.set": {
  email_pending?: string;
  ok: SlackWebApiSchemaDefsOkTrue;
  profile: SlackWebApiSchemaObjsUserProfile;
  username: string;
};
  "POST /users.setActive": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "POST /users.setPhoto": {
  ok: SlackWebApiSchemaDefsOkTrue;
  profile: {
  avatar_hash: string;
  image_1024: string;
  image_192: string;
  image_24: string;
  image_32: string;
  image_48: string;
  image_512: string;
  image_72: string;
  image_original: string;
};
};
  "POST /users.setPresence": {
  ok: SlackWebApiSchemaDefsOkTrue;
};
  "GET /views.open": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /views.publish": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /views.push": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /views.update": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /workflows.stepCompleted": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /workflows.stepFailed": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
  "GET /workflows.updateStep": {
  ok: SlackWebApiSchemaDefsOkTrue;
  readonly [key: string]: SlackWebApiSchemaJsonValue | SlackWebApiSchemaDefsOkTrue | undefined;
};
}
