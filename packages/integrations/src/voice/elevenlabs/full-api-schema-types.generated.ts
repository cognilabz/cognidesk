// Generated provider schema DTOs for ElevenLabsFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type ElevenLabsFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type ElevenLabsFullApiSchemaJsonValue = ElevenLabsFullApiSchemaJsonPrimitive | readonly ElevenLabsFullApiSchemaJsonValue[] | { readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined };

export type ElevenLabsFullApiSchemaGetSpeechHistoryResponseModel = {
  history: ReadonlyArray<ElevenLabsFullApiSchemaSpeechHistoryItemResponseModel>;
  last_history_item_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
  scanned_until?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSpeechHistoryItemResponseModel = {
  history_item_id: string;
  request_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  model_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_category?: ("premade" | "cloned" | "generated" | "professional" | ElevenLabsFullApiSchemaJsonValue);
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
  date_unix: number;
  character_count_change_from: number;
  character_count_change_to: number;
  content_type: string;
  state: "created" | "deleted" | "processing";
  settings?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  feedback?: (ElevenLabsFullApiSchemaFeedbackResponseModel | ElevenLabsFullApiSchemaJsonValue);
  share_link_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source?: ("TTS" | "STS" | "Projects" | "PD" | "AN" | "Dubbing" | "PlayAPI" | "ConvAI" | "VoiceGeneration" | "InVPC" | "Flows" | ElevenLabsFullApiSchemaJsonValue);
  alignments?: (ElevenLabsFullApiSchemaHistoryAlignmentsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  dialogue?: (ReadonlyArray<ElevenLabsFullApiSchemaDialogueInputResponseModel> | ElevenLabsFullApiSchemaJsonValue);
  output_format?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDeleteHistoryItemResponse = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyDownloadHistoryItemsV1HistoryDownloadPost = {
  history_item_ids: ReadonlyArray<string>;
  output_format?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAllowedOutputFormats = "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";

export type ElevenLabsFullApiSchemaBodySoundGenerationV1SoundGenerationPost = {
  text: string;
  loop?: boolean;
  duration_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  prompt_influence?: (number | ElevenLabsFullApiSchemaJsonValue);
  model_id?: string;
};

export type ElevenLabsFullApiSchemaBodyAudioIsolationV1AudioIsolationPost = {
  audio: string;
  file_format?: ("pcm_s16le_16" | "other" | ElevenLabsFullApiSchemaJsonValue);
  preview_b64?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaHTTPValidationError = {
  detail?: ReadonlyArray<ElevenLabsFullApiSchemaValidationError>;
};

export type ElevenLabsFullApiSchemaGetAudioIsolationHistoryResponseModel = {
  items: ReadonlyArray<ElevenLabsFullApiSchemaAudioIsolationHistoryItemResponseModel>;
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaBodyAudioIsolationStreamV1AudioIsolationStreamPost = {
  audio: string;
  file_format?: ("pcm_s16le_16" | "other" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDeleteSampleResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyTextToSpeechFull = {
  text: string;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_settings?: (ElevenLabsFullApiSchemaVoiceSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel> | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  previous_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  next_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  previous_request_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  next_request_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  use_pvc_as_ivc?: boolean;
  apply_text_normalization?: "auto" | "on" | "off";
  apply_language_text_normalization?: boolean;
};

export type ElevenLabsFullApiSchemaBodyTextToSpeechFullWithTimestamps = {
  text: string;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_settings?: (ElevenLabsFullApiSchemaVoiceSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel>;
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  previous_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  next_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  previous_request_ids?: ReadonlyArray<string>;
  next_request_ids?: ReadonlyArray<string>;
  use_pvc_as_ivc?: boolean;
  apply_text_normalization?: "auto" | "on" | "off";
  apply_language_text_normalization?: boolean;
};

export type ElevenLabsFullApiSchemaAudioWithTimestampsResponseModel = {
  audio_base64: string;
  alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
  normalized_alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyTextToSpeechStream = {
  text: string;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_settings?: (ElevenLabsFullApiSchemaVoiceSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel> | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  previous_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  next_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  previous_request_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  next_request_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  use_pvc_as_ivc?: boolean;
  apply_text_normalization?: "auto" | "on" | "off";
  apply_language_text_normalization?: boolean;
};

export type ElevenLabsFullApiSchemaBodyTextToSpeechStreamWithTimestamps = {
  text: string;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_settings?: (ElevenLabsFullApiSchemaVoiceSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel> | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  previous_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  next_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  previous_request_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  next_request_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  use_pvc_as_ivc?: boolean;
  apply_text_normalization?: "auto" | "on" | "off";
  apply_language_text_normalization?: boolean;
};

export type ElevenLabsFullApiSchemaStreamingAudioChunkWithTimestampsResponseModel = {
  audio_base64: string;
  alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
  normalized_alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyTextToDialogueMultiVoiceV1TextToDialoguePost = {
  inputs: ReadonlyArray<ElevenLabsFullApiSchemaDialogueInput>;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  settings?: (ElevenLabsFullApiSchemaModelSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel> | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  apply_text_normalization?: "auto" | "on" | "off";
};

export type ElevenLabsFullApiSchemaBodyTextToDialogueMultiVoiceStreamingV1TextToDialogueStreamPost = {
  inputs: ReadonlyArray<ElevenLabsFullApiSchemaDialogueInput>;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  settings?: (ElevenLabsFullApiSchemaModelSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel> | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  apply_text_normalization?: "auto" | "on" | "off";
};

export type ElevenLabsFullApiSchemaBodyTextToDialogueStreamWithTimestamps = {
  inputs: ReadonlyArray<ElevenLabsFullApiSchemaDialogueInput>;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  settings?: (ElevenLabsFullApiSchemaModelSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel> | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  apply_text_normalization?: "auto" | "on" | "off";
};

export type ElevenLabsFullApiSchemaStreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel = {
  audio_base64: string;
  alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
  normalized_alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
  voice_segments: ReadonlyArray<ElevenLabsFullApiSchemaVoiceSegment>;
};

export type ElevenLabsFullApiSchemaBodyTextToDialogueFullWithTimestamps = {
  inputs: ReadonlyArray<ElevenLabsFullApiSchemaDialogueInput>;
  model_id?: string;
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  settings?: (ElevenLabsFullApiSchemaModelSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel> | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  apply_text_normalization?: "auto" | "on" | "off";
};

export type ElevenLabsFullApiSchemaAudioWithTimestampsAndVoiceSegmentsResponseModel = {
  audio_base64: string;
  alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
  normalized_alignment?: (ElevenLabsFullApiSchemaCharacterAlignmentResponseModel | ElevenLabsFullApiSchemaJsonValue);
  voice_segments: ReadonlyArray<ElevenLabsFullApiSchemaVoiceSegment>;
};

export type ElevenLabsFullApiSchemaBodySpeechToSpeechV1SpeechToSpeechVoiceIdPost = {
  audio: string;
  model_id?: string;
  voice_settings?: (string | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  remove_background_noise?: boolean;
  file_format?: ("pcm_s16le_16" | "other" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodySpeechToSpeechStreamingV1SpeechToSpeechVoiceIdStreamPost = {
  audio: string;
  model_id?: string;
  voice_settings?: (string | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  remove_background_noise?: boolean;
  file_format?: ("pcm_s16le_16" | "other" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoicePreviewsRequestModel = {
  voice_description: string;
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
  auto_generate_text?: boolean;
  loudness?: number;
  quality?: number;
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  guidance_scale?: number;
  should_enhance?: boolean;
};

export type ElevenLabsFullApiSchemaVoicePreviewsResponseModel = {
  previews: ReadonlyArray<ElevenLabsFullApiSchemaVoicePreviewResponseModel>;
  text: string;
};

export type ElevenLabsFullApiSchemaBodyCreateANewVoiceFromVoicePreviewV1TextToVoicePost = {
  voice_name: string;
  voice_description: string;
  generated_voice_id: string;
  labels?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  played_not_selected_voice_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceResponseModel = {
  voice_id: string;
  name: string;
  samples?: (ReadonlyArray<ElevenLabsFullApiSchemaSampleResponseModel> | ElevenLabsFullApiSchemaJsonValue);
  category: "generated" | "cloned" | "premade" | "professional" | "famous" | "high_quality";
  fine_tuning?: (ElevenLabsFullApiSchemaFineTuningResponseModel | ElevenLabsFullApiSchemaJsonValue);
  labels: {
  readonly [key: string]: string | undefined;
};
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  preview_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  available_for_tiers: ReadonlyArray<string>;
  settings?: (ElevenLabsFullApiSchemaVoiceSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  sharing?: (ElevenLabsFullApiSchemaVoiceSharingResponseModel | ElevenLabsFullApiSchemaJsonValue);
  high_quality_base_model_ids: ReadonlyArray<string>;
  verified_languages?: (ReadonlyArray<ElevenLabsFullApiSchemaVerifiedVoiceLanguageResponseModel> | ElevenLabsFullApiSchemaJsonValue);
  collection_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  safety_control?: ("NONE" | "BAN" | "CAPTCHA" | "ENTERPRISE_BAN" | "ENTERPRISE_CAPTCHA" | ElevenLabsFullApiSchemaJsonValue);
  voice_verification?: (ElevenLabsFullApiSchemaVoiceVerificationResponseModel | ElevenLabsFullApiSchemaJsonValue);
  permission_on_resource?: (string | ElevenLabsFullApiSchemaJsonValue);
  is_owner?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  is_legacy?: boolean;
  is_mixed?: boolean;
  favorited_at_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  created_at_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  is_bookmarked?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  recording_quality?: ("studio" | "good" | "ok" | "poor" | "bad" | ElevenLabsFullApiSchemaJsonValue);
  labelling_status?: ("in_review" | "review_complete" | ElevenLabsFullApiSchemaJsonValue);
  recording_quality_reason?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceDesignRequestModel = {
  voice_description: string;
  model_id?: "eleven_multilingual_ttv_v2" | "eleven_ttv_v3";
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
  auto_generate_text?: boolean;
  loudness?: number;
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  guidance_scale?: number;
  stream_previews?: boolean;
  should_enhance?: boolean;
  remixing_session_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  remixing_session_iteration_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  quality?: (number | ElevenLabsFullApiSchemaJsonValue);
  reference_audio_base64?: (string | ElevenLabsFullApiSchemaJsonValue);
  prompt_strength?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceRemixRequestModel = {
  voice_description: string;
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
  auto_generate_text?: boolean;
  loudness?: number;
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  guidance_scale?: number;
  stream_previews?: boolean;
  remixing_session_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  remixing_session_iteration_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  prompt_strength?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUserResponseModel = {
  user_id: string;
  subscription: ElevenLabsFullApiSchemaSubscriptionResponseModel;
  is_new_user: boolean;
  xi_api_key?: (string | ElevenLabsFullApiSchemaJsonValue);
  can_use_delayed_payment_methods: boolean;
  is_onboarding_completed: boolean;
  is_onboarding_checklist_completed: boolean;
  show_compliance_terms?: boolean;
  first_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  is_api_key_hashed?: boolean;
  xi_api_key_preview?: (string | ElevenLabsFullApiSchemaJsonValue);
  referral_link_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  partnerstack_partner_default_link?: (string | ElevenLabsFullApiSchemaJsonValue);
  created_at: number;
  seat_type: ElevenLabsFullApiSchemaSeatType;
};

export type ElevenLabsFullApiSchemaExtendedSubscriptionResponseModel = {
  tier: string;
  character_count: number;
  character_limit: number;
  max_character_limit_extension: (number | ElevenLabsFullApiSchemaJsonValue);
  max_credit_limit_extension: (number | "unlimited");
  can_extend_character_limit: boolean;
  allowed_to_extend_character_limit: boolean;
  next_character_count_reset_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_slots_used: number;
  professional_voice_slots_used: number;
  voice_limit: number;
  max_voice_add_edits?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_add_edit_counter: number;
  professional_voice_limit: number;
  can_extend_voice_limit: boolean;
  can_use_instant_voice_cloning: boolean;
  can_use_professional_voice_cloning: boolean;
  currency?: (ElevenLabsFullApiSchemaCurrency | ElevenLabsFullApiSchemaJsonValue);
  current_overage: ElevenLabsFullApiSchemaPrice;
  status: ElevenLabsFullApiSchemaSubscriptionStatusType;
  billing_period?: (ElevenLabsFullApiSchemaBillingPeriod | ElevenLabsFullApiSchemaJsonValue);
  character_refresh_period?: (ElevenLabsFullApiSchemaCharacterRefreshPeriod | ElevenLabsFullApiSchemaJsonValue);
  next_invoice?: (ElevenLabsFullApiSchemaInvoiceResponseModel | ElevenLabsFullApiSchemaJsonValue);
  open_invoices: ReadonlyArray<ElevenLabsFullApiSchemaInvoiceResponseModel>;
  has_open_invoices: boolean;
  pending_change?: (ElevenLabsFullApiSchemaPendingSubscriptionSwitchResponseModel | ElevenLabsFullApiSchemaPendingCancellationResponseModel | ElevenLabsFullApiSchemaJsonValue);
  has_used_starter_coupon_on_account?: boolean;
  has_used_creator_coupon_on_account?: boolean;
};

export type ElevenLabsFullApiSchemaVoiceSettingsResponseModel = {
  stability?: (number | ElevenLabsFullApiSchemaJsonValue);
  use_speaker_boost?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  similarity_boost?: (number | ElevenLabsFullApiSchemaJsonValue);
  style?: (number | ElevenLabsFullApiSchemaJsonValue);
  speed?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaEditVoiceSettingsResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaGetVoicesResponseModel = {
  voices: ReadonlyArray<ElevenLabsFullApiSchemaVoiceResponseModel>;
};

export type ElevenLabsFullApiSchemaDeleteVoiceResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaGetVoicesV2ResponseModel = {
  voices: ReadonlyArray<ElevenLabsFullApiSchemaVoiceResponseModel>;
  has_more: boolean;
  total_count: number;
  next_page_token?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyAddVoiceV1VoicesAddPost = {
  name: string;
  files: ReadonlyArray<string>;
  remove_background_noise?: boolean;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  labels?: ({
  readonly [key: string]: string | undefined;
} | string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAddVoiceIVCResponseModel = {
  voice_id: string;
  requires_verification: boolean;
};

export type ElevenLabsFullApiSchemaBodyEditVoiceV1VoicesVoiceIdEditPost = {
  name: string;
  files?: ReadonlyArray<string>;
  remove_background_noise?: boolean;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  labels?: ({
  readonly [key: string]: string | undefined;
} | string | ElevenLabsFullApiSchemaJsonValue);
  moderate_metadata?: boolean;
};

export type ElevenLabsFullApiSchemaEditVoiceResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyAddSharedVoiceV1VoicesAddPublicUserIdVoiceIdPost = {
  new_name: string;
  bookmarked?: boolean;
};

export type ElevenLabsFullApiSchemaAddVoiceResponseModel = {
  voice_id: string;
};

export type ElevenLabsFullApiSchemaBodyCreatePodcastV1StudioPodcastsPost = {
  model_id: string;
  mode: (ElevenLabsFullApiSchemaPodcastConversationMode | ElevenLabsFullApiSchemaPodcastBulletinMode);
  source: (ElevenLabsFullApiSchemaPodcastTextSource | ElevenLabsFullApiSchemaPodcastURLSource | ReadonlyArray<(ElevenLabsFullApiSchemaPodcastTextSource | ElevenLabsFullApiSchemaPodcastURLSource)>);
  quality_preset?: ElevenLabsFullApiSchemaQualityPresetType;
  duration_scale?: "short" | "default" | "long";
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  intro?: (string | ElevenLabsFullApiSchemaJsonValue);
  outro?: (string | ElevenLabsFullApiSchemaJsonValue);
  instructions_prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  highlights?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  callback_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  apply_text_normalization?: ("auto" | "on" | "off" | "apply_english" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPodcastProjectResponseModel = {
  project: ElevenLabsFullApiSchemaProjectResponseModel;
};

export type ElevenLabsFullApiSchemaBodyVideoToMusicV1MusicVideoToMusicPost = {
  videos: ReadonlyArray<string>;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  tags?: ReadonlyArray<string>;
  model_id?: "music_v1" | "music_v2";
  sign_with_c2pa?: boolean;
};

export type ElevenLabsFullApiSchemaBodyCreatePronunciationDictionariesV1StudioProjectsProjectIdPronunciationDictionariesPost = {
  pronunciation_dictionary_locators: ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorDBModel>;
  invalidate_affected_text?: boolean;
};

export type ElevenLabsFullApiSchemaCreatePronunciationDictionaryResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaGetProjectsResponseModel = {
  projects: ReadonlyArray<ElevenLabsFullApiSchemaProjectResponseModel>;
};

export type ElevenLabsFullApiSchemaBodyCreateStudioProjectV1StudioProjectsPost = {
  name: string;
  default_title_voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  default_paragraph_voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  default_model_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  from_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  from_document?: (string | ElevenLabsFullApiSchemaJsonValue);
  from_content_json?: string;
  quality_preset?: ElevenLabsFullApiSchemaQualityPresetType;
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  author?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  genres?: ReadonlyArray<string>;
  target_audience?: ("children" | "young adult" | "adult" | "all ages" | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  original_publication_date?: (string | ElevenLabsFullApiSchemaJsonValue);
  mature_content?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  isbn_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  acx_volume_normalization?: boolean;
  volume_normalization?: boolean;
  pronunciation_dictionary_locators?: ReadonlyArray<string>;
  callback_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  fiction?: ("fiction" | "non-fiction" | ElevenLabsFullApiSchemaJsonValue);
  apply_text_normalization?: ("auto" | "on" | "off" | "apply_english" | ElevenLabsFullApiSchemaJsonValue);
  auto_convert?: boolean;
  auto_assign_voices?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  source_type?: ("blank" | "book" | "article" | "genfm" | "video" | "screenplay" | ElevenLabsFullApiSchemaJsonValue);
  voice_settings?: ReadonlyArray<string>;
  create_publishing_read?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAddProjectResponseModel = {
  project: ElevenLabsFullApiSchemaProjectResponseModel;
};

export type ElevenLabsFullApiSchemaBodyUpdateStudioProjectV1StudioProjectsProjectIdPost = {
  name: string;
  default_title_voice_id: string;
  default_paragraph_voice_id: string;
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  author?: (string | ElevenLabsFullApiSchemaJsonValue);
  isbn_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  volume_normalization?: boolean;
};

export type ElevenLabsFullApiSchemaEditProjectResponseModel = {
  project: ElevenLabsFullApiSchemaProjectResponseModel;
};

export type ElevenLabsFullApiSchemaProjectExtendedResponseModel = {
  project_id: string;
  name: string;
  create_date_unix: number;
  created_by_user_id: (string | ElevenLabsFullApiSchemaJsonValue);
  default_title_voice_ref_id: string;
  default_paragraph_voice_ref_id: string;
  default_model_id: string;
  last_conversion_date_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  can_be_downloaded: boolean;
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  author?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  genres?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  cover_image_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  target_audience?: ("children" | "young adult" | "adult" | "all ages" | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  original_publication_date?: (string | ElevenLabsFullApiSchemaJsonValue);
  mature_content?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  isbn_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  volume_normalization: boolean;
  state: "creating" | "default" | "converting" | "in_queue";
  access_level: "admin" | "editor" | "commenter" | "viewer";
  fiction?: ("fiction" | "non-fiction" | ElevenLabsFullApiSchemaJsonValue);
  quality_check_on: boolean;
  quality_check_on_when_bulk_convert: boolean;
  creation_meta?: (ElevenLabsFullApiSchemaProjectCreationMetaResponseModel | ElevenLabsFullApiSchemaJsonValue);
  source_type?: ("blank" | "book" | "article" | "genfm" | "video" | "screenplay" | ElevenLabsFullApiSchemaJsonValue);
  chapters_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  captions_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  caption_style?: (ElevenLabsFullApiSchemaCaptionStyleModel | ElevenLabsFullApiSchemaJsonValue);
  caption_style_template_overrides?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaCaptionStyleModel | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  public_share_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  aspect_ratio?: ("16:9" | "9:16" | "4:5" | "1:1" | ElevenLabsFullApiSchemaJsonValue);
  agent_settings?: (ElevenLabsFullApiSchemaStudioAgentSettingsModel | ElevenLabsFullApiSchemaJsonValue);
  quality_preset: ElevenLabsFullApiSchemaQualityPresetType;
  chapters: ReadonlyArray<ElevenLabsFullApiSchemaChapterResponseModel>;
  pronunciation_dictionary_versions: ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryVersionResponseModel>;
  pronunciation_dictionary_locators: ReadonlyArray<ElevenLabsFullApiSchemaPronunciationDictionaryLocatorResponseModel>;
  apply_text_normalization: "auto" | "on" | "off" | "apply_english";
  experimental?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  assets: ReadonlyArray<(ElevenLabsFullApiSchemaProjectVideoResponseModel | ElevenLabsFullApiSchemaProjectExternalAudioResponseModel | ElevenLabsFullApiSchemaProjectImageResponseModel)>;
  voices: ReadonlyArray<ElevenLabsFullApiSchemaProjectVoiceResponseModel>;
  base_voices?: (ReadonlyArray<ElevenLabsFullApiSchemaVoiceResponseModel> | ElevenLabsFullApiSchemaJsonValue);
  publishing_read?: (ElevenLabsFullApiSchemaDirectPublishingReadResponseModel | ElevenLabsFullApiSchemaJsonValue);
  default_title_voice_id: string;
  default_paragraph_voice_id: string;
};

export type ElevenLabsFullApiSchemaDeleteProjectResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyUpdateStudioProjectContentV1StudioProjectsProjectIdContentPost = {
  from_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  from_document?: (string | ElevenLabsFullApiSchemaJsonValue);
  from_content_json?: string;
  auto_convert?: boolean;
};

export type ElevenLabsFullApiSchemaConvertProjectResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaProjectSnapshotsResponseModel = {
  snapshots: ReadonlyArray<ElevenLabsFullApiSchemaProjectSnapshotResponseModel>;
};

export type ElevenLabsFullApiSchemaProjectSnapshotExtendedResponseModel = {
  project_snapshot_id: string;
  project_id: string;
  created_at_unix: number;
  name: string;
  audio_upload?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  zip_upload?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  character_alignments: ReadonlyArray<ElevenLabsFullApiSchemaCharacterAlignmentModel>;
  audio_duration_secs: number;
};

export type ElevenLabsFullApiSchemaBodyStreamStudioProjectAudioV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamPost = {
  convert_to_mpeg?: boolean;
};

export type ElevenLabsFullApiSchemaGetChaptersResponseModel = {
  chapters: ReadonlyArray<ElevenLabsFullApiSchemaChapterResponseModel>;
};

export type ElevenLabsFullApiSchemaBodyCreateChapterV1StudioProjectsProjectIdChaptersPost = {
  name: string;
  from_url?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAddChapterResponseModel = {
  chapter: ElevenLabsFullApiSchemaChapterWithContentResponseModel;
};

export type ElevenLabsFullApiSchemaChapterWithContentResponseModel = {
  chapter_id: string;
  name: string;
  last_conversion_date_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  conversion_progress?: (number | ElevenLabsFullApiSchemaJsonValue);
  can_be_downloaded: boolean;
  state: "default" | "converting";
  has_video?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  has_visual_content?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  voice_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  statistics?: (ElevenLabsFullApiSchemaChapterStatisticsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  last_conversion_error?: (string | ElevenLabsFullApiSchemaJsonValue);
  content: ElevenLabsFullApiSchemaChapterContentResponseModel;
};

export type ElevenLabsFullApiSchemaBodyUpdateChapterV1StudioProjectsProjectIdChaptersChapterIdPost = {
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  content?: (ElevenLabsFullApiSchemaChapterContentInputModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaEditChapterResponseModel = {
  chapter: ElevenLabsFullApiSchemaChapterWithContentResponseModel;
};

export type ElevenLabsFullApiSchemaDeleteChapterResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaConvertChapterResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaChapterSnapshotsResponseModel = {
  snapshots: ReadonlyArray<ElevenLabsFullApiSchemaChapterSnapshotResponseModel>;
};

export type ElevenLabsFullApiSchemaChapterSnapshotExtendedResponseModel = {
  chapter_snapshot_id: string;
  project_id: string;
  chapter_id: string;
  created_at_unix: number;
  name: string;
  character_alignments: ReadonlyArray<ElevenLabsFullApiSchemaCharacterAlignmentModel>;
};

export type ElevenLabsFullApiSchemaBodyStreamChapterAudioV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost = {
  convert_to_mpeg?: boolean;
};

export type ElevenLabsFullApiSchemaProjectMutedTracksResponseModel = {
  chapter_ids: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaDubbingResource = {
  id: string;
  version: number;
  source_language: string;
  target_languages: ReadonlyArray<string>;
  input: ElevenLabsFullApiSchemaDubbingMediaReference;
  background: (ElevenLabsFullApiSchemaDubbingMediaReference | ElevenLabsFullApiSchemaJsonValue);
  foreground: (ElevenLabsFullApiSchemaDubbingMediaReference | ElevenLabsFullApiSchemaJsonValue);
  speaker_tracks: {
  readonly [key: string]: ElevenLabsFullApiSchemaSpeakerTrack | undefined;
};
  speaker_segments: {
  readonly [key: string]: ElevenLabsFullApiSchemaSpeakerSegment | undefined;
};
  renders: {
  readonly [key: string]: ElevenLabsFullApiSchemaRender | undefined;
};
};

export type ElevenLabsFullApiSchemaBodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost = {
  language: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLanguageAddedResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaSegmentCreatePayload = {
  start_time: number;
  end_time: number;
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
  translations?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSegmentCreateResponse = {
  version: number;
  new_segment: string;
};

export type ElevenLabsFullApiSchemaSegmentUpdatePayload = {
  start_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  end_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSegmentUpdateResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaBodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost = {
  segment_ids: ReadonlyArray<string>;
  speaker_id: string;
};

export type ElevenLabsFullApiSchemaSegmentMigrationResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaSegmentDeleteResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaBodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost = {
  segments: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaSegmentTranscriptionResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaBodyTranslatesAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdTranslatePost = {
  segments: ReadonlyArray<string>;
  languages: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSegmentTranslationResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaBodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost = {
  segments: ReadonlyArray<string>;
  languages: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSegmentDubResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaBodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch = {
  speaker_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_stability?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_similarity?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_style?: (number | ElevenLabsFullApiSchemaJsonValue);
  languages?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSpeakerUpdatedResponse = {
  version: number;
};

export type ElevenLabsFullApiSchemaBodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost = {
  speaker_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_stability?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_similarity?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_style?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSpeakerCreatedResponse = {
  version: number;
  speaker_id: string;
};

export type ElevenLabsFullApiSchemaSimilarVoicesForSpeakerResponse = {
  voices: ReadonlyArray<ElevenLabsFullApiSchemaSimilarVoice>;
};

export type ElevenLabsFullApiSchemaBodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost = {
  render_type: ElevenLabsFullApiSchemaRenderType;
  normalize_volume?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDubbingRenderResponseModel = {
  version: number;
  render_id: string;
};

export type ElevenLabsFullApiSchemaDubbingMetadataPageResponseModel = {
  dubs: ReadonlyArray<ElevenLabsFullApiSchemaDubbingMetadataResponse>;
  next_cursor: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaBodyDubAVideoOrAnAudioFileV1DubbingPost = {
  file?: (string | ElevenLabsFullApiSchemaJsonValue);
  csv_file?: (string | ElevenLabsFullApiSchemaJsonValue);
  foreground_audio_file?: (string | ElevenLabsFullApiSchemaJsonValue);
  background_audio_file?: (string | ElevenLabsFullApiSchemaJsonValue);
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_lang?: string;
  target_lang?: (string | ElevenLabsFullApiSchemaJsonValue);
  target_accent?: (string | ElevenLabsFullApiSchemaJsonValue);
  num_speakers?: number;
  watermark?: boolean;
  start_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  end_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  highest_resolution?: boolean;
  drop_background_audio?: boolean;
  use_profanity_filter?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  dubbing_studio?: boolean;
  disable_voice_cloning?: boolean;
  mode?: "automatic" | "manual";
  csv_fps?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDoDubbingResponseModel = {
  dubbing_id: string;
  expected_duration_sec: number;
};

export type ElevenLabsFullApiSchemaDubbingMetadataResponse = {
  dubbing_id: string;
  name: string;
  status: string;
  source_language: (string | ElevenLabsFullApiSchemaJsonValue);
  target_languages: ReadonlyArray<string>;
  editable?: boolean;
  created_at: string;
  media_metadata?: (ElevenLabsFullApiSchemaDubbingMediaMetadata | ElevenLabsFullApiSchemaJsonValue);
  error?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDeleteDubbingResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaDubbingTranscriptResponseModel = {
  language: string;
  utterances: ReadonlyArray<ElevenLabsFullApiSchemaDubbingTranscriptUtterance>;
};

export type ElevenLabsFullApiSchemaDubbingTranscriptsResponseModel = {
  transcript_format: "srt" | "webvtt" | "json";
  srt?: (string | ElevenLabsFullApiSchemaJsonValue);
  webvtt?: (string | ElevenLabsFullApiSchemaJsonValue);
  json?: (ElevenLabsFullApiSchemaDubbingTranscript | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaModelResponseModel = {
  model_id: string;
  name: string;
  can_be_finetuned: boolean;
  can_do_text_to_speech: boolean;
  can_do_voice_conversion: boolean;
  can_use_style: boolean;
  can_use_speaker_boost: boolean;
  serves_pro_voices: boolean;
  token_cost_factor: number;
  description: string;
  requires_alpha_access: boolean;
  max_characters_request_free_user: number;
  max_characters_request_subscribed_user: number;
  maximum_text_length_per_request: number;
  languages: ReadonlyArray<ElevenLabsFullApiSchemaLanguageResponseModel>;
  model_rates: ElevenLabsFullApiSchemaModelRatesResponseModel;
  concurrency_group: string;
};

export type ElevenLabsFullApiSchemaBodyCreatesAudioNativeEnabledProjectV1AudioNativePost = {
  name: string;
  image?: (string | ElevenLabsFullApiSchemaJsonValue);
  author?: (string | ElevenLabsFullApiSchemaJsonValue);
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  small?: boolean;
  text_color?: (string | ElevenLabsFullApiSchemaJsonValue);
  background_color?: (string | ElevenLabsFullApiSchemaJsonValue);
  sessionization?: number;
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  model_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  file?: string;
  auto_convert?: boolean;
  apply_text_normalization?: ("auto" | "on" | "off" | "apply_english" | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaAudioNativeCreateProjectResponseModel = {
  project_id: string;
  converting: boolean;
  html_snippet: string;
};

export type ElevenLabsFullApiSchemaGetAudioNativeProjectSettingsResponseModel = {
  enabled: boolean;
  snapshot_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  settings?: (ElevenLabsFullApiSchemaAudioNativeProjectSettingsResponseModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyUpdateAudioNativeProjectContentV1AudioNativeProjectIdContentPost = {
  file?: string;
  auto_convert?: boolean;
  auto_publish?: boolean;
};

export type ElevenLabsFullApiSchemaAudioNativeEditContentResponseModel = {
  project_id: string;
  converting: boolean;
  publishing: boolean;
  html_snippet: string;
};

export type ElevenLabsFullApiSchemaBodyUpdateAudioNativeContentFromURLV1AudioNativeContentPost = {
  url: string;
  author?: (string | ElevenLabsFullApiSchemaJsonValue);
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetLibraryVoicesResponseModel = {
  voices: ReadonlyArray<ElevenLabsFullApiSchemaLibraryVoiceResponseModel>;
  has_more: boolean;
  total_count?: number;
  last_sort_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyGetSimilarLibraryVoicesV1SimilarVoicesPost = {
  audio_file?: string;
  similarity_threshold?: (number | ElevenLabsFullApiSchemaJsonValue);
  top_k?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBreakdownTypes = "none" | "voice" | "voice_multiplier" | "user" | "groups" | "api_keys" | "all_api_keys" | "product_type" | "model" | "resource" | "request_queue" | "region" | "subresource_id" | "reporting_workspace_id" | "has_api_key" | "request_source";

export type ElevenLabsFullApiSchemaUsageAggregationInterval = "hour" | "day" | "week" | "month" | "cumulative";

export type ElevenLabsFullApiSchemaMetricType = "credits" | "tts_characters" | "minutes_used" | "request_count" | "ttfb_avg" | "ttfb_p95" | "fiat_units_spent" | "concurrency" | "concurrency_average";

export type ElevenLabsFullApiSchemaUsageCharactersResponseModel = {
  time: ReadonlyArray<number>;
  usage: {
  readonly [key: string]: ReadonlyArray<number> | undefined;
};
};

export type ElevenLabsFullApiSchemaBodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromFilePost = {
  name: string;
  file?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  workspace_access?: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAddPronunciationDictionaryResponseModel = {
  id: string;
  name: string;
  created_by: string;
  creation_time_unix: number;
  version_id: string;
  version_rules_num: number;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  permission_on_resource: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromRulesPost = {
  rules: ReadonlyArray<(ElevenLabsFullApiSchemaPronunciationDictionaryAliasRuleRequestModel | ElevenLabsFullApiSchemaPronunciationDictionaryPhonemeRuleRequestModel)>;
  name: string;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  workspace_access?: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyUpdatePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdPatch = {
  archived?: boolean;
  name?: string;
};

export type ElevenLabsFullApiSchemaGetPronunciationDictionaryMetadataResponseModel = {
  id: string;
  latest_version_id: string;
  latest_version_rules_num: number;
  name: string;
  permission_on_resource: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
  created_by: string;
  creation_time_unix: number;
  archived_time_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetPronunciationDictionaryWithRulesResponseModel = {
  id: string;
  latest_version_id: string;
  latest_version_rules_num: number;
  name: string;
  permission_on_resource: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
  created_by: string;
  creation_time_unix: number;
  archived_time_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  rules: ReadonlyArray<(ElevenLabsFullApiSchemaPronunciationDictionaryAliasRuleResponseModel | ElevenLabsFullApiSchemaPronunciationDictionaryPhonemeRuleResponseModel)>;
};

export type ElevenLabsFullApiSchemaBodySetRulesOnThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdSetRulesPost = {
  rules: ReadonlyArray<(ElevenLabsFullApiSchemaPronunciationDictionaryAliasRuleRequestModel | ElevenLabsFullApiSchemaPronunciationDictionaryPhonemeRuleRequestModel)>;
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryRulesResponseModel = {
  id: string;
  version_id: string;
  version_rules_num: number;
};

export type ElevenLabsFullApiSchemaBodyAddRulesToThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdAddRulesPost = {
  rules: ReadonlyArray<(ElevenLabsFullApiSchemaPronunciationDictionaryAliasRuleRequestModel | ElevenLabsFullApiSchemaPronunciationDictionaryPhonemeRuleRequestModel)>;
};

export type ElevenLabsFullApiSchemaBodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost = {
  rule_strings: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaGetPronunciationDictionariesMetadataResponseModel = {
  pronunciation_dictionaries: ReadonlyArray<ElevenLabsFullApiSchemaGetPronunciationDictionaryMetadataResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaWorkspaceApiKeyListResponseModel = {
  "api-keys": ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceApiKeyResponseModel>;
};

export type ElevenLabsFullApiSchemaBodyCreateServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysPost = {
  name: string;
  permissions: (ReadonlyArray<ElevenLabsFullApiSchemaPermissionType> | "all");
  character_limit?: (number | ElevenLabsFullApiSchemaJsonValue);
  allowed_ips?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWorkspaceCreateApiKeyResponseModel = {
  "xi-api-key": string;
  key_id: string;
};

export type ElevenLabsFullApiSchemaBodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatch = {
  is_enabled?: (boolean | "no_update");
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  permissions?: (ReadonlyArray<ElevenLabsFullApiSchemaPermissionType> | "all" | "no_update");
  character_limit?: (number | "no_update" | ElevenLabsFullApiSchemaJsonValue);
  allowed_ips?: (ReadonlyArray<string> | "clear" | "no_update");
};

export type ElevenLabsFullApiSchemaWorkspaceAuditLogsPageResponse = {
  entries: ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceAuditLogEntryResponse>;
  has_more: boolean;
  next_cursor: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateOAuth2ClientCredsRequest = {
  name: string;
  auth_type?: "oauth2_client_credentials";
  provider: string;
  client_id: string;
  token_url: string;
  scopes?: ReadonlyArray<string>;
  extra_params?: {
  readonly [key: string]: string | undefined;
};
  basic_auth_in_header?: boolean;
  client_secret: string;
  custom_headers?: {
  readonly [key: string]: string | undefined;
};
};

export type ElevenLabsFullApiSchemaCreateCustomHeaderAuthRequest = {
  name: string;
  auth_type?: "custom_header_auth";
  provider: string;
  header_name: string;
  token: string;
};

export type ElevenLabsFullApiSchemaCreateBasicAuthRequest = {
  name: string;
  auth_type?: "basic_auth";
  provider: string;
  username: string;
  password: string;
};

export type ElevenLabsFullApiSchemaCreateBearerAuthRequest = {
  name: string;
  auth_type?: "bearer_auth";
  provider: string;
  token: string;
};

export type ElevenLabsFullApiSchemaCreateOAuth2JWTRequest = {
  name: string;
  auth_type?: "oauth2_jwt";
  provider: string;
  algorithm?: "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512";
  key_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  issuer: string;
  audience: string;
  subject: string;
  expiration_seconds?: number;
  extra_params?: {
  readonly [key: string]: string | undefined;
};
  token_url: string;
  scopes?: ReadonlyArray<string>;
  token_response_field?: "access_token" | "id_token";
  secret_key: string;
};

export type ElevenLabsFullApiSchemaCreatePrivateKeyJWTRequest = {
  name: string;
  auth_type?: "private_key_jwt";
  provider: string;
  algorithm?: "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512";
  key_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  issuer: string;
  audience: string;
  subject: string;
  expiration_seconds?: number;
  extra_params?: {
  readonly [key: string]: string | undefined;
};
  secret_key: string;
};

export type ElevenLabsFullApiSchemaCreateMTLSAuthRequest = {
  name: string;
  auth_type?: "mtls";
  provider: string;
  client_certificate: string;
  client_key: string;
  ca_certificate?: (string | ElevenLabsFullApiSchemaJsonValue);
  key_passphrase?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaOAuth2ClientCredsResponse = {
  name: string;
  auth_type?: "oauth2_client_credentials";
  provider: string;
  client_id: string;
  token_url: string;
  scopes?: ReadonlyArray<string>;
  extra_params?: {
  readonly [key: string]: string | undefined;
};
  basic_auth_in_header?: boolean;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
  custom_headers?: {
  readonly [key: string]: string | undefined;
};
};

export type ElevenLabsFullApiSchemaBasicAuthResponse = {
  name: string;
  auth_type?: "basic_auth";
  provider: string;
  username: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBearerAuthResponse = {
  name: string;
  auth_type?: "bearer_auth";
  provider: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaOAuth2JWTResponse = {
  name: string;
  auth_type?: "oauth2_jwt";
  provider: string;
  algorithm?: "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512";
  key_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  issuer: string;
  audience: string;
  subject: string;
  expiration_seconds?: number;
  extra_params?: {
  readonly [key: string]: string | undefined;
};
  token_url: string;
  scopes?: ReadonlyArray<string>;
  token_response_field?: "access_token" | "id_token";
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPrivateKeyJWTResponse = {
  name: string;
  auth_type?: "private_key_jwt";
  provider: string;
  algorithm?: "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512";
  key_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  issuer: string;
  audience: string;
  subject: string;
  expiration_seconds?: number;
  extra_params?: {
  readonly [key: string]: string | undefined;
};
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMTLSAuthResponse = {
  name: string;
  auth_type?: "mtls";
  provider: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCustomHeaderAuthResponse = {
  name: string;
  auth_type?: "custom_header_auth";
  provider: string;
  header_name: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaApiIntegrationOAuth2AuthCodeResponse = {
  name: string;
  auth_type?: "api_integration_oauth2_auth_code";
  provider: string;
  token_url: string;
  scopes?: ReadonlyArray<string>;
  scope_separator?: " " | ",";
  expires_at: string;
  integration_id: string;
  credential_id: string;
  status?: ElevenLabsFullApiSchemaOAuthConnectionStatus;
  status_detail?: (string | ElevenLabsFullApiSchemaJsonValue);
  status_updated_at?: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaApiIntegrationOAuth2CustomAppResponse = {
  name: string;
  auth_type?: "api_integration_oauth2_custom_app";
  provider: string;
  token_url: string;
  scopes?: ReadonlyArray<string>;
  scope_separator?: " " | ",";
  expires_at: string;
  integration_id: string;
  credential_id: string;
  status?: ElevenLabsFullApiSchemaOAuthConnectionStatus;
  status_detail?: (string | ElevenLabsFullApiSchemaJsonValue);
  status_updated_at?: string;
  client_id: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWhatsAppAuthResponse = {
  name: string;
  auth_type?: "whatsapp_auth";
  provider?: "whatsapp";
  phone_number_id: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSlackBotAuthResponse = {
  name: string;
  auth_type?: "slack_bot_auth";
  provider?: "Slack";
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUrlSecretAuthResponse = {
  name: string;
  auth_type?: "url_secret";
  provider: string;
  id: string;
  used_by?: (ElevenLabsFullApiSchemaAuthConnectionDependencies | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaListAuthConnectionsResponse = {
  auth_connections: ReadonlyArray<(ElevenLabsFullApiSchemaOAuth2ClientCredsResponse | ElevenLabsFullApiSchemaBasicAuthResponse | ElevenLabsFullApiSchemaBearerAuthResponse | ElevenLabsFullApiSchemaOAuth2JWTResponse | ElevenLabsFullApiSchemaPrivateKeyJWTResponse | ElevenLabsFullApiSchemaMTLSAuthResponse | ElevenLabsFullApiSchemaCustomHeaderAuthResponse | ElevenLabsFullApiSchemaApiIntegrationOAuth2AuthCodeResponse | ElevenLabsFullApiSchemaApiIntegrationOAuth2CustomAppResponse | ElevenLabsFullApiSchemaWhatsAppAuthResponse | ElevenLabsFullApiSchemaSlackBotAuthResponse | ElevenLabsFullApiSchemaUrlSecretAuthResponse)>;
};

export type ElevenLabsFullApiSchemaUpdateOAuth2ClientCredsRequest = {
  auth_type?: "oauth2_client_credentials";
  provider?: (string | ElevenLabsFullApiSchemaJsonValue);
  client_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  scopes?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  extra_params?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  basic_auth_in_header?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  client_secret?: (string | ElevenLabsFullApiSchemaJsonValue);
  custom_headers?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUpdateBasicAuthRequest = {
  auth_type?: "basic_auth";
  provider?: (string | ElevenLabsFullApiSchemaJsonValue);
  username?: (string | ElevenLabsFullApiSchemaJsonValue);
  password?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUpdateOAuth2JWTRequest = {
  auth_type?: "oauth2_jwt";
  provider?: (string | ElevenLabsFullApiSchemaJsonValue);
  algorithm?: ("HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | ElevenLabsFullApiSchemaJsonValue);
  key_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  issuer?: (string | ElevenLabsFullApiSchemaJsonValue);
  audience?: (string | ElevenLabsFullApiSchemaJsonValue);
  subject?: (string | ElevenLabsFullApiSchemaJsonValue);
  expiration_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  extra_params?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  scopes?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  token_response_field?: ("access_token" | "id_token" | ElevenLabsFullApiSchemaJsonValue);
  secret_key?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWorkspaceServiceAccountListResponseModel = {
  "service-accounts": ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceServiceAccountResponseModel>;
};

export type ElevenLabsFullApiSchemaWorkspaceGroupResponseModel = {
  name: string;
  id: string;
  members: ReadonlyArray<string>;
  permissions: (ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceGroupPermission> | ElevenLabsFullApiSchemaJsonValue);
  group_usage_limit?: (number | "unlimited" | ElevenLabsFullApiSchemaJsonValue);
  group_pvc_limit?: (number | "unlimited" | ElevenLabsFullApiSchemaJsonValue);
  character_count?: (number | ElevenLabsFullApiSchemaJsonValue);
  scim_external_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  is_scim_synced?: boolean;
  scim_frozen?: boolean;
};

export type ElevenLabsFullApiSchemaWorkspaceGroupByNameResponseModel = {
  name: string;
  id: string;
  members_emails: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaBodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost = {
  email: string;
};

export type ElevenLabsFullApiSchemaDeleteWorkspaceGroupMemberResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyAddMemberToUserGroupV1WorkspaceGroupsGroupIdMembersPost = {
  email: string;
};

export type ElevenLabsFullApiSchemaAddWorkspaceGroupMemberResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyInviteUserV1WorkspaceInvitesAddPost = {
  email: string;
  workspace_permission?: (string | ElevenLabsFullApiSchemaJsonValue);
  seat_type?: (ElevenLabsFullApiSchemaSeatType | ElevenLabsFullApiSchemaJsonValue);
  group_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAddWorkspaceInviteResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyInviteMultipleUsersV1WorkspaceInvitesAddBulkPost = {
  emails: ReadonlyArray<string>;
  seat_type?: (ElevenLabsFullApiSchemaSeatType | ElevenLabsFullApiSchemaJsonValue);
  group_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyDeleteExistingInvitationV1WorkspaceInvitesDelete = {
  email: string;
};

export type ElevenLabsFullApiSchemaDeleteWorkspaceInviteResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyUpdateMemberV1WorkspaceMembersPost = {
  email: string;
  is_locked?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  workspace_role?: (ElevenLabsFullApiSchemaSeatType | ElevenLabsFullApiSchemaJsonValue);
  workspace_seat_type?: (ElevenLabsFullApiSchemaSeatType | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUpdateWorkspaceMemberResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaWorkspaceResourceType = "voice" | "voice_collection" | "pronunciation_dictionary" | "dubbing" | "project" | "convai_agents" | "convai_knowledge_base_documents" | "convai_tools" | "convai_settings" | "convai_secrets" | "workspace_auth_connections" | "convai_phone_numbers" | "convai_mcp_servers" | "convai_api_integration_connections" | "convai_api_integration_trigger_connections" | "convai_batch_calls" | "convai_agent_response_tests" | "convai_test_suite_invocations" | "convai_crawl_jobs" | "convai_crawl_tasks" | "convai_whatsapp_accounts" | "convai_agent_versions" | "convai_agent_branches" | "convai_agent_versions_deployments" | "convai_memory_entries" | "convai_coaching_proposals" | "convai_templates" | "dashboard" | "dashboard_configuration" | "convai_agent_drafts" | "resource_locators" | "assets" | "content_generations" | "content_templates" | "songs" | "transcription_tasks" | "avatars" | "avatar_video_generations" | "resource_collection" | "studio_projects";

export type ElevenLabsFullApiSchemaResourceMetadataResponseModel = {
  resource_id: string;
  resource_name: (string | ElevenLabsFullApiSchemaJsonValue);
  resource_type: ElevenLabsFullApiSchemaWorkspaceResourceType;
  creator_user_id: (string | ElevenLabsFullApiSchemaJsonValue);
  anonymous_access_level_override: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
  role_to_group_ids: {
  readonly [key: string]: ReadonlyArray<string> | undefined;
};
  share_options: ReadonlyArray<ElevenLabsFullApiSchemaShareOptionResponseModel>;
};

export type ElevenLabsFullApiSchemaBodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost = {
  role: "admin" | "editor" | "commenter" | "viewer";
  resource_type: ElevenLabsFullApiSchemaWorkspaceResourceType;
  user_email?: (string | ElevenLabsFullApiSchemaJsonValue);
  group_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  workspace_api_key_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyUnshareWorkspaceResourceV1WorkspaceResourcesResourceIdUnsharePost = {
  resource_type: ElevenLabsFullApiSchemaWorkspaceResourceType;
  user_email?: (string | ElevenLabsFullApiSchemaJsonValue);
  group_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  workspace_api_key_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWorkspaceWebhookListResponseModel = {
  webhooks: ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceWebhookResponseModel>;
};

export type ElevenLabsFullApiSchemaBodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost = {
  settings: ElevenLabsFullApiSchemaWebhookHMACSettings;
};

export type ElevenLabsFullApiSchemaWorkspaceCreateWebhookResponseModel = {
  webhook_id: string;
  webhook_secret?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyUpdateWorkspaceWebhookV1WorkspaceWebhooksWebhookIdPatch = {
  is_disabled: boolean;
  name: string;
  retry_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  request_headers?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPatchWorkspaceWebhookResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaDeleteWorkspaceWebhookResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodySpeechToTextV1SpeechToTextPost = {
  model_id: "scribe_v1" | "scribe_v2";
  file?: (string | ElevenLabsFullApiSchemaJsonValue);
  language_code?: (string | ElevenLabsFullApiSchemaJsonValue);
  tag_audio_events?: boolean;
  num_speakers?: (number | ElevenLabsFullApiSchemaJsonValue);
  timestamps_granularity?: "none" | "word" | "character";
  diarize?: boolean;
  diarization_threshold?: (number | ElevenLabsFullApiSchemaJsonValue);
  additional_formats?: ElevenLabsFullApiSchemaAdditionalFormats;
  file_format?: "pcm_s16le_16" | "other";
  cloud_storage_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  webhook?: boolean;
  webhook_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  temperature?: (number | ElevenLabsFullApiSchemaJsonValue);
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  use_multi_channel?: boolean;
  webhook_metadata?: (string | {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  entity_detection?: (string | ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  no_verbatim?: boolean;
  use_speaker_library?: boolean;
  detect_speaker_roles?: boolean;
  entity_redaction?: (string | ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  entity_redaction_mode?: string;
  keyterms?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaSpeechToTextChunkResponseModel = {
  language_code: string;
  language_probability: number;
  text: string;
  words: ReadonlyArray<ElevenLabsFullApiSchemaSpeechToTextWordResponseModel>;
  channel_index?: (number | ElevenLabsFullApiSchemaJsonValue);
  additional_formats?: (ReadonlyArray<(ElevenLabsFullApiSchemaAdditionalFormatResponseModel | ElevenLabsFullApiSchemaJsonValue)> | ElevenLabsFullApiSchemaJsonValue);
  transcription_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  entities?: (ReadonlyArray<ElevenLabsFullApiSchemaDetectedEntity> | ElevenLabsFullApiSchemaJsonValue);
  audio_duration_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMultichannelSpeechToTextResponseModel = {
  transcripts: ReadonlyArray<ElevenLabsFullApiSchemaSpeechToTextChunkResponseModel>;
  transcription_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  audio_duration_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSingleUseTokenResponseModel = {
  token: string;
};

export type ElevenLabsFullApiSchemaBodyCreateForcedAlignmentV1ForcedAlignmentPost = {
  file: string;
  text: string;
};

export type ElevenLabsFullApiSchemaForcedAlignmentResponseModel = {
  characters: ReadonlyArray<ElevenLabsFullApiSchemaForcedAlignmentCharacterResponseModel>;
  words: ReadonlyArray<ElevenLabsFullApiSchemaForcedAlignmentWordResponseModel>;
  loss: number;
};

export type ElevenLabsFullApiSchemaConversationSignedUrlResponseModel = {
  signed_url: string;
};

export type ElevenLabsFullApiSchemaTokenResponseModel = {
  token: string;
};

export type ElevenLabsFullApiSchemaBodyHandleAnOutboundCallViaTwilioV1ConvaiTwilioOutboundCallPost = {
  agent_id: string;
  agent_phone_number_id: string;
  to_number: string;
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput | ElevenLabsFullApiSchemaJsonValue);
  call_recording_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  telephony_call_config?: ElevenLabsFullApiSchemaTelephonyCallConfig;
};

export type ElevenLabsFullApiSchemaTwilioOutboundCallResponse = {
  success: boolean;
  message: string;
  conversation_id: (string | ElevenLabsFullApiSchemaJsonValue);
  callSid: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyRegisterATwilioCallAndReturnTwiMLV1ConvaiTwilioRegisterCallPost = {
  agent_id: string;
  from_number: string;
  to_number: string;
  direction?: ElevenLabsFullApiSchemaTelephonyDirection;
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyHandleAnOutboundCallViaExotelV1ConvaiExotelOutboundCallPost = {
  agent_id: string;
  agent_phone_number_id: string;
  to_number: string;
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput | ElevenLabsFullApiSchemaJsonValue);
  telephony_call_config?: ElevenLabsFullApiSchemaTelephonyCallConfig;
};

export type ElevenLabsFullApiSchemaExotelOutboundCallResponse = {
  success: boolean;
  message: string;
  conversation_id: (string | ElevenLabsFullApiSchemaJsonValue);
  callSid: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost = {
  whatsapp_phone_number_id: string;
  whatsapp_user_id: string;
  whatsapp_call_permission_request_template_name: string;
  whatsapp_call_permission_request_template_language_code: string;
  agent_id: string;
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWhatsAppOutboundCallResponse = {
  success: boolean;
  message: string;
  conversation_id: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodySendAnOutboundMessageViaWhatsAppV1ConvaiWhatsappOutboundMessagePost = {
  whatsapp_phone_number_id: string;
  whatsapp_user_id: string;
  template_name: string;
  template_language_code: string;
  template_params: ReadonlyArray<(ElevenLabsFullApiSchemaWhatsAppTemplateHeaderComponentParams | ElevenLabsFullApiSchemaWhatsAppTemplateBodyComponentParams | ElevenLabsFullApiSchemaWhatsAppTemplateButtonComponentParams)>;
  agent_id: string;
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWhatsAppOutboundMessageResponse = {
  conversation_id: string;
};

export type ElevenLabsFullApiSchemaBodyCreateAgentV1ConvaiAgentsCreatePost = {
  conversation_config: ElevenLabsFullApiSchemaConversationalConfigAPIModelInput;
  platform_settings?: (ElevenLabsFullApiSchemaAgentPlatformSettingsRequestModel | ElevenLabsFullApiSchemaJsonValue);
  workflow?: ElevenLabsFullApiSchemaAgentWorkflowRequestModel;
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  tags?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateAgentResponseModel = {
  agent_id: string;
};

export type ElevenLabsFullApiSchemaAgentSummaryBatchSuccessfulResponseModel = {
  status: "success";
  data: ElevenLabsFullApiSchemaAgentSummaryResponseModel;
};

export type ElevenLabsFullApiSchemaBatchFailureResponseModel = {
  status: "failure";
  error_code: number;
  error_status: string;
  error_message: string;
};

export type ElevenLabsFullApiSchemaGetAgentResponseModel = {
  agent_id: string;
  name: string;
  conversation_config: ElevenLabsFullApiSchemaConversationalConfigAPIModelOutput;
  metadata: ElevenLabsFullApiSchemaAgentMetadataResponseModel;
  platform_settings?: ElevenLabsFullApiSchemaAgentPlatformSettingsResponseModel;
  phone_numbers?: ReadonlyArray<(ElevenLabsFullApiSchemaGetPhoneNumberTwilioResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberExotelResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberSIPTrunkResponseModel)>;
  whatsapp_accounts?: ReadonlyArray<ElevenLabsFullApiSchemaGetWhatsAppAccountResponse>;
  workflow?: ElevenLabsFullApiSchemaAgentWorkflowResponseModel;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
  tags?: ReadonlyArray<string>;
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  main_branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyPatchesAnAgentSettingsV1ConvaiAgentsAgentIdPatch = {
  conversation_config?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  platform_settings?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  workflow?: ElevenLabsFullApiSchemaAgentWorkflowRequestModel;
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  tags?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  version_description?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetAgentEmbedResponseModel = {
  agent_id: string;
  widget_config: ElevenLabsFullApiSchemaWidgetConfigResponseModel;
};

export type ElevenLabsFullApiSchemaGetAgentLinkResponseModel = {
  agent_id: string;
  token?: (ElevenLabsFullApiSchemaConversationTokenResponseModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyPostAgentAvatarV1ConvaiAgentsAgentIdAvatarPost = {
  avatar_file: string;
};

export type ElevenLabsFullApiSchemaPostAgentAvatarResponseModel = {
  agent_id: string;
  avatar_url?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSortDirection = "asc" | "desc";

export type ElevenLabsFullApiSchemaAgentSortBy = "name" | "created_at" | "call_count_7d";

export type ElevenLabsFullApiSchemaGetAgentsPageResponseModel = {
  agents: ReadonlyArray<ElevenLabsFullApiSchemaAgentSummaryResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaGetAgentKnowledgebaseSizeResponseModel = {
  number_of_pages: number;
};

export type ElevenLabsFullApiSchemaLLMUsageCalculatorRequestModel = {
  prompt_length?: (number | ElevenLabsFullApiSchemaJsonValue);
  number_of_pages?: (number | ElevenLabsFullApiSchemaJsonValue);
  rag_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLLMUsageCalculatorResponseModel = {
  llm_prices: ReadonlyArray<ElevenLabsFullApiSchemaLLMUsageCalculatorLLMResponseModel>;
};

export type ElevenLabsFullApiSchemaBodyDuplicateAgentV1ConvaiAgentsAgentIdDuplicatePost = {
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodySimulatesAConversationV1ConvaiAgentsAgentIdSimulateConversationPost = {
  simulation_specification: ElevenLabsFullApiSchemaConversationSimulationSpecification;
  extra_evaluation_criteria?: (ReadonlyArray<ElevenLabsFullApiSchemaPromptEvaluationCriteria> | ElevenLabsFullApiSchemaJsonValue);
  new_turns_limit?: number;
};

export type ElevenLabsFullApiSchemaAgentSimulatedChatTestResponseModel = {
  simulated_conversation: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptResponseModel>;
  analysis: ElevenLabsFullApiSchemaConversationHistoryAnalysisCommonModel;
};

export type ElevenLabsFullApiSchemaBodySimulatesAConversationStreamV1ConvaiAgentsAgentIdSimulateConversationStreamPost = {
  simulation_specification: ElevenLabsFullApiSchemaConversationSimulationSpecification;
  extra_evaluation_criteria?: (ReadonlyArray<ElevenLabsFullApiSchemaPromptEvaluationCriteria> | ElevenLabsFullApiSchemaJsonValue);
  new_turns_limit?: number;
};

export type ElevenLabsFullApiSchemaCreateResponseUnitTestRequest = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataInput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "llm";
  success_condition?: string;
  success_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentSuccessfulResponseExample>;
  failure_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentFailureResponseExample>;
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateToolCallUnitTestRequest = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataInput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "tool";
  tool_call_parameters?: (ElevenLabsFullApiSchemaUnitTestToolCallEvaluationModelInput | ElevenLabsFullApiSchemaJsonValue);
  check_any_tool_matches?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateSimulationTestRequest = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataInput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "simulation";
  success_condition?: (string | ElevenLabsFullApiSchemaJsonValue);
  success_conditions?: ReadonlyArray<string>;
  simulation_scenario?: string;
  simulation_max_turns?: number;
  simulation_environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  tool_mock_config?: ElevenLabsFullApiSchemaSimulationToolMockBehaviorConfig;
  evaluation_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  simulated_user_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateAgentTestResponseModel = {
  id: string;
};

export type ElevenLabsFullApiSchemaBodyCreateAgentTestFolderV1ConvaiAgentTestingFoldersPost = {
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateAgentTestFolderResponseModel = {
  id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaGetAgentTestFolderResponseModel = {
  id: string;
  name: string;
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaAgentTestFolderPathSegmentResponseModel>;
  children_count?: number;
};

export type ElevenLabsFullApiSchemaBodyUpdateAgentTestFolderV1ConvaiAgentTestingFoldersFolderIdPatch = {
  name: string;
};

export type ElevenLabsFullApiSchemaBodyBulkMoveTestsToFolderV1ConvaiAgentTestingBulkMovePost = {
  entity_ids: ReadonlyArray<string>;
  move_to?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetResponseUnitTestResponseModel = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataOutput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "llm";
  success_condition?: string;
  success_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentSuccessfulResponseExample>;
  failure_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentFailureResponseExample>;
  id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaGetToolCallUnitTestResponseModel = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataOutput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "tool";
  tool_call_parameters?: (ElevenLabsFullApiSchemaUnitTestToolCallEvaluationModelOutput | ElevenLabsFullApiSchemaJsonValue);
  check_any_tool_matches?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaGetSimulationTestResponseModel = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataOutput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "simulation";
  success_condition?: (string | ElevenLabsFullApiSchemaJsonValue);
  success_conditions?: ReadonlyArray<string>;
  simulation_scenario?: string;
  simulation_max_turns?: number;
  simulation_environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  tool_mock_config?: ElevenLabsFullApiSchemaSimulationToolMockBehaviorConfig;
  evaluation_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  simulated_user_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaUpdateResponseUnitTestRequest = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataInput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "llm";
  success_condition?: string;
  success_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentSuccessfulResponseExample>;
  failure_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentFailureResponseExample>;
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUpdateToolCallUnitTestRequest = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataInput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "tool";
  tool_call_parameters?: (ElevenLabsFullApiSchemaUnitTestToolCallEvaluationModelInput | ElevenLabsFullApiSchemaJsonValue);
  check_any_tool_matches?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUpdateSimulationTestRequest = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataInput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "simulation";
  success_condition?: (string | ElevenLabsFullApiSchemaJsonValue);
  success_conditions?: ReadonlyArray<string>;
  simulation_scenario?: string;
  simulation_max_turns?: number;
  simulation_environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  tool_mock_config?: ElevenLabsFullApiSchemaSimulationToolMockBehaviorConfig;
  evaluation_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  simulated_user_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaListTestsByIdsRequestModel = {
  test_ids: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaGetTestsSummariesByIdsResponseModel = {
  tests: {
  readonly [key: string]: ElevenLabsFullApiSchemaUnitTestSummaryResponseModel | undefined;
};
};

export type ElevenLabsFullApiSchemaTestType = "llm" | "tool" | "simulation" | "folder";

export type ElevenLabsFullApiSchemaTestSharingMode = "all" | "shared_with_me";

export type ElevenLabsFullApiSchemaGetTestsPageResponseModel = {
  tests: ReadonlyArray<ElevenLabsFullApiSchemaUnitTestSummaryResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaGetTestInvocationsPageResponseModel = {
  meta?: ElevenLabsFullApiSchemaListResponseMeta;
  results: ReadonlyArray<ElevenLabsFullApiSchemaTestInvocationSummaryResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaRunAgentTestsRequestModel = {
  tests: ReadonlyArray<ElevenLabsFullApiSchemaSingleTestRunRequestModel>;
  agent_config_override?: (ElevenLabsFullApiSchemaAdhocAgentConfigOverrideForTestRequestModel | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  repeat_count?: number;
};

export type ElevenLabsFullApiSchemaGetTestSuiteInvocationResponseModel = {
  id: string;
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  created_at?: number;
  folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  repeat_count?: number;
  bucketing_status?: (ElevenLabsFullApiSchemaBucketingStatus | ElevenLabsFullApiSchemaJsonValue);
  result_groups?: ReadonlyArray<ElevenLabsFullApiSchemaTestRunResultSummary>;
  test_runs: ReadonlyArray<ElevenLabsFullApiSchemaUnitTestRunResponseModel>;
};

export type ElevenLabsFullApiSchemaResubmitTestsRequestModel = {
  test_run_ids: ReadonlyArray<string>;
  agent_config_override?: (ElevenLabsFullApiSchemaAdhocAgentConfigOverrideForTestRequestModel | ElevenLabsFullApiSchemaJsonValue);
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaEvaluationSuccessResult = "success" | "failure" | "unknown";

export type ElevenLabsFullApiSchemaConversationInitiationSource = "unknown" | "android_sdk" | "node_js_sdk" | "react_native_sdk" | "react_sdk" | "js_sdk" | "python_sdk" | "widget" | "sip_trunk" | "twilio" | "exotel" | "genesys" | "swift_sdk" | "whatsapp" | "twilio_sms" | "flutter_sdk" | "zendesk_integration" | "slack_integration" | "telegram_integration" | "intercom_integration" | "freshdesk_integration" | "template_preview" | "genesys_bot_connector";

export type ElevenLabsFullApiSchemaGetConversationsPageResponseModel = {
  conversations: ReadonlyArray<ElevenLabsFullApiSchemaConversationSummaryResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaUsersSortBy = "last_contact_unix_secs" | "conversation_count";

export type ElevenLabsFullApiSchemaGetConversationUsersPageResponseModel = {
  users: ReadonlyArray<ElevenLabsFullApiSchemaConversationUserResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaGetConversationResponseModel = {
  agent_id: string;
  agent_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_product?: string;
  status: "initiated" | "in-progress" | "processing" | "done" | "failed";
  user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  metadata: ElevenLabsFullApiSchemaConversationHistoryMetadataCommonModel;
  analysis?: (ElevenLabsFullApiSchemaConversationHistoryAnalysisCommonModel | ElevenLabsFullApiSchemaJsonValue);
  visited_agents?: ReadonlyArray<ElevenLabsFullApiSchemaVisitedAgentRef>;
  conversation_initiation_client_data?: ElevenLabsFullApiSchemaConversationInitiationClientDataRequestOutput;
  environment?: string;
  conversation_id: string;
  has_audio: boolean;
  has_user_audio: boolean;
  has_response_audio: boolean;
  transcript: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptResponseModel>;
  tag_ids?: ReadonlyArray<string>;
  otlp_traces?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetSIPLogMessagesResponse = {
  sip_messages: ReadonlyArray<ElevenLabsFullApiSchemaSIPLogMessage>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more?: boolean;
};

export type ElevenLabsFullApiSchemaConversationFeedbackRequestModel = {
  feedback?: (ElevenLabsFullApiSchemaUserFeedbackScore | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMessageSearchSortBy = "search_score" | "created_at";

export type ElevenLabsFullApiSchemaMessagesSearchResponse = {
  meta?: ElevenLabsFullApiSchemaListResponseMeta;
  results: ReadonlyArray<ElevenLabsFullApiSchemaMessagesSearchResult>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaAssignConversationTagsRequestModel = {
  tag_ids: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaGetConversationTagsPageResponseModel = {
  conversation_tags: ReadonlyArray<ElevenLabsFullApiSchemaConversationTagResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaCreateConversationTagRequestModel = {
  title: string;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationTagResponseModel = {
  tag_id: string;
  workspace_id: string;
  owner_user_id: string;
  title: string;
  description: (string | ElevenLabsFullApiSchemaJsonValue);
  created_at_unix_secs: number;
};

export type ElevenLabsFullApiSchemaPatchConversationTagRequestModel = {
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateTwilioPhoneNumberRequest = {
  phone_number: string;
  label: string;
  supports_inbound?: boolean;
  supports_outbound?: boolean;
  provider?: "twilio";
  sid: string;
  token: string;
  region_config?: (ElevenLabsFullApiSchemaRegionConfigRequest | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateExotelPhoneNumberRequest = {
  phone_number: string;
  label: string;
  supports_inbound?: boolean;
  supports_outbound?: boolean;
  provider?: "exotel";
  account_sid: string;
  api_key: string;
  api_token: string;
  api_subdomain: ElevenLabsFullApiSchemaExotelApiSubdomain;
  app_id: string;
  applet_url?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateSIPTrunkPhoneNumberRequestV2 = {
  phone_number: string;
  label: string;
  supports_inbound?: boolean;
  supports_outbound?: boolean;
  provider?: "sip_trunk";
  inbound_trunk_config?: (ElevenLabsFullApiSchemaInboundSIPTrunkConfigRequestModel | ElevenLabsFullApiSchemaJsonValue);
  outbound_trunk_config?: (ElevenLabsFullApiSchemaOutboundSIPTrunkConfigRequestModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreatePhoneNumberResponseModel = {
  phone_number_id: string;
};

export type ElevenLabsFullApiSchemaTelephonyProvider = "twilio" | "sip_trunk" | "exotel";

export type ElevenLabsFullApiSchemaGetPhoneNumberTwilioResponseModel = {
  phone_number: string;
  label: string;
  supports_inbound?: boolean;
  supports_outbound?: boolean;
  phone_number_id: string;
  assigned_agent?: (ElevenLabsFullApiSchemaPhoneNumberAgentInfo | ElevenLabsFullApiSchemaJsonValue);
  provider?: "twilio";
};

export type ElevenLabsFullApiSchemaGetPhoneNumberExotelResponseModel = {
  phone_number: string;
  label: string;
  supports_inbound?: boolean;
  supports_outbound?: boolean;
  phone_number_id: string;
  assigned_agent?: (ElevenLabsFullApiSchemaPhoneNumberAgentInfo | ElevenLabsFullApiSchemaJsonValue);
  provider?: "exotel";
};

export type ElevenLabsFullApiSchemaGetPhoneNumberSIPTrunkResponseModel = {
  phone_number: string;
  label: string;
  supports_inbound?: boolean;
  supports_outbound?: boolean;
  phone_number_id: string;
  assigned_agent?: (ElevenLabsFullApiSchemaPhoneNumberAgentInfo | ElevenLabsFullApiSchemaJsonValue);
  provider?: "sip_trunk";
  provider_config?: (ElevenLabsFullApiSchemaGetPhoneNumberOutboundSIPTrunkConfigResponseModel | ElevenLabsFullApiSchemaJsonValue);
  outbound_trunk?: (ElevenLabsFullApiSchemaGetPhoneNumberOutboundSIPTrunkConfigResponseModel | ElevenLabsFullApiSchemaJsonValue);
  inbound_trunk?: (ElevenLabsFullApiSchemaGetPhoneNumberInboundSIPTrunkConfigResponseModel | ElevenLabsFullApiSchemaJsonValue);
  livekit_stack: ElevenLabsFullApiSchemaLivekitStackType;
  store_sip_messages?: boolean;
};

export type ElevenLabsFullApiSchemaUpdatePhoneNumberRequest = {
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  label?: (string | ElevenLabsFullApiSchemaJsonValue);
  inbound_trunk_config?: (ElevenLabsFullApiSchemaInboundSIPTrunkConfigRequestModel | ElevenLabsFullApiSchemaJsonValue);
  outbound_trunk_config?: (ElevenLabsFullApiSchemaOutboundSIPTrunkConfigRequestModel | ElevenLabsFullApiSchemaJsonValue);
  livekit_stack?: (ElevenLabsFullApiSchemaLivekitStackType | ElevenLabsFullApiSchemaJsonValue);
  store_sip_messages?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLLMUsageCalculatorPublicRequestModel = {
  prompt_length: number;
  number_of_pages: number;
  rag_enabled: boolean;
};

export type ElevenLabsFullApiSchemaLLMListResponseModelInput = {
  llms: ReadonlyArray<ElevenLabsFullApiSchemaLLMInfoModelInput>;
  default_deprecation_config: ElevenLabsFullApiSchemaLLMDeprecationConfigModel;
};

export type ElevenLabsFullApiSchemaBodyUploadFileV1ConvaiConversationsConversationIdFilesPost = {
  file: string;
};

export type ElevenLabsFullApiSchemaConvAIFileUploadResponseModel = {
  file_id: string;
};

export type ElevenLabsFullApiSchemaGetLiveCountResponse = {
  count: number;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseSummaryBatchSuccessfulResponseModel = {
  status: "success";
  data: (ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryURLResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFileResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryTextResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFolderResponseModel);
};

export type ElevenLabsFullApiSchemaBodyAddToKnowledgeBaseV1ConvaiKnowledgeBasePost = {
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  url?: string;
  file?: string;
};

export type ElevenLabsFullApiSchemaAddKnowledgeBaseResponseModel = {
  id: string;
  name: string;
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentSummaryResponseModel>;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseDocumentType = "file" | "url" | "text" | "folder";

export type ElevenLabsFullApiSchemaKnowledgeBaseSortBy = "name" | "created_at" | "updated_at" | "size";

export type ElevenLabsFullApiSchemaGetKnowledgeBaseListResponseModel = {
  documents: ReadonlyArray<(ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryURLResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFileResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryTextResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFolderResponseModel)>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaBodyCreateURLDocumentV1ConvaiKnowledgeBaseUrlPost = {
  url: string;
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_auto_sync?: boolean;
  auto_remove?: boolean;
};

export type ElevenLabsFullApiSchemaBodyCreateFileDocumentV1ConvaiKnowledgeBaseFilePost = {
  file: string;
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost = {
  text: string;
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyCreateFolderV1ConvaiKnowledgeBaseFolderPost = {
  name: string;
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_auto_sync?: boolean;
  auto_remove?: boolean;
};

export type ElevenLabsFullApiSchemaBodyUpdateDocumentV1ConvaiKnowledgeBaseDocumentationIdPatch = {
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  content?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseURLResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentResponseModel>;
  type: "url";
  url: string;
  extracted_inner_html: string;
  auto_sync_info?: (ElevenLabsFullApiSchemaAutoSyncInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseFileResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentResponseModel>;
  type: "file";
  extracted_inner_html: string;
  filename: string;
  external_sync_info?: (ElevenLabsFullApiSchemaExternalFileSyncInfo | ElevenLabsFullApiSchemaJsonValue);
  is_frozen?: boolean;
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseTextResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentResponseModel>;
  type: "text";
  extracted_inner_html: string;
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseFolderResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentResponseModel>;
  type: "folder";
  children_count: number;
  auto_sync_info?: (ElevenLabsFullApiSchemaAutoSyncInfo | ElevenLabsFullApiSchemaJsonValue);
  external_sync_info?: (ElevenLabsFullApiSchemaExternalFolderSyncInfo | ElevenLabsFullApiSchemaJsonValue);
  is_frozen?: boolean;
};

export type ElevenLabsFullApiSchemaBodyUpdateFileDocumentV1ConvaiKnowledgeBaseDocumentationIdUpdateFilePatch = {
  file: string;
};

export type ElevenLabsFullApiSchemaBodyComputeRAGIndexesInBatchV1ConvaiKnowledgeBaseRagIndexPost = {
  items: ReadonlyArray<ElevenLabsFullApiSchemaGetOrCreateRAGIndexRequestModel>;
};

export type ElevenLabsFullApiSchemaRAGIndexBatchSuccessfulResponseModel = {
  status: "success";
  data: ElevenLabsFullApiSchemaRAGDocumentIndexResponseModel;
};

export type ElevenLabsFullApiSchemaRAGIndexOverviewResponseModel = {
  total_used_bytes: number;
  total_max_bytes: number;
  models: ReadonlyArray<ElevenLabsFullApiSchemaRAGIndexOverviewEmbeddingModelResponseModel>;
};

export type ElevenLabsFullApiSchemaRAGIndexRequestModel = {
  model: ElevenLabsFullApiSchemaEmbeddingModelEnum;
};

export type ElevenLabsFullApiSchemaRAGDocumentIndexResponseModel = {
  id: string;
  model: ElevenLabsFullApiSchemaEmbeddingModelEnum;
  status: ElevenLabsFullApiSchemaRAGIndexStatus;
  progress_percentage: number;
  document_model_index_usage: ElevenLabsFullApiSchemaRAGDocumentIndexUsage;
};

export type ElevenLabsFullApiSchemaRAGDocumentIndexesResponseModel = {
  indexes: ReadonlyArray<ElevenLabsFullApiSchemaRAGDocumentIndexResponseModel>;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseContentSearchResponseModel = {
  results: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseContentSearchResult>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaKnowledgeBaseDependentType = "direct" | "transitive" | "all";

export type ElevenLabsFullApiSchemaGetKnowledgeBaseDependentAgentsResponseModel = {
  agents: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  branches?: ReadonlyArray<ElevenLabsFullApiSchemaDependentBranchInfo>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseSourceFileUrlResponseModel = {
  signed_url: string;
};

export type ElevenLabsFullApiSchemaEmbeddingModelEnum = "e5_mistral_7b_instruct" | "multilingual_e5_large_instruct";

export type ElevenLabsFullApiSchemaKnowledgeBaseDocumentChunkResponseModel = {
  id: string;
  name: string;
  content: string;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseDocumentChunksResponseModel = {
  chunks: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseDocumentChunkResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyMoveEntityToFolderV1ConvaiKnowledgeBaseDocumentIdMovePost = {
  move_to?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyBulkMoveEntitiesToFolderV1ConvaiKnowledgeBaseBulkMovePost = {
  document_ids: ReadonlyArray<string>;
  move_to?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetAgentTopicsResponseModel = {
  topics: ReadonlyArray<ElevenLabsFullApiSchemaAgentTopicResponseModel>;
  window_start_unix_secs: number;
  window_end_unix_secs: number;
};

export type ElevenLabsFullApiSchemaToolRequestModel = {
  tool_config: (ElevenLabsFullApiSchemaWebhookToolConfigInput | ElevenLabsFullApiSchemaClientToolConfigInput | ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaMCPToolConfigInput);
  response_mocks?: (ReadonlyArray<ElevenLabsFullApiSchemaToolResponseMockConfigInput> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaToolResponseModel = {
  id: string;
  tool_config: (ElevenLabsFullApiSchemaWebhookToolConfigOutput | ElevenLabsFullApiSchemaClientToolConfigOutput | ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaMCPToolConfigOutput);
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  usage_stats: ElevenLabsFullApiSchemaToolUsageStatsResponseModel;
  response_mocks?: (ReadonlyArray<ElevenLabsFullApiSchemaToolResponseMockConfigOutput> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaToolTypeFilter = "webhook" | "client" | "api_integration_webhook";

export type ElevenLabsFullApiSchemaToolSortBy = "name" | "created_at";

export type ElevenLabsFullApiSchemaToolsResponseModel = {
  tools: ReadonlyArray<ElevenLabsFullApiSchemaToolResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaGetToolDependentAgentsResponseModel = {
  agents: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  branches?: ReadonlyArray<ElevenLabsFullApiSchemaDependentBranchInfo>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaGetToolExecutionsPageResponseModel = {
  executions: ReadonlyArray<ElevenLabsFullApiSchemaToolExecutionResponseModel>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaGetConvAISettingsResponseModel = {
  conversation_initiation_client_data_webhook?: (ElevenLabsFullApiSchemaConversationInitiationClientDataWebhook | ElevenLabsFullApiSchemaJsonValue);
  webhooks?: ElevenLabsFullApiSchemaConvAIWebhooks;
  can_use_mcp_servers?: boolean;
  rag_retention_period_days?: number;
  conversation_embedding_retention_days?: (number | ElevenLabsFullApiSchemaJsonValue);
  default_livekit_stack?: ElevenLabsFullApiSchemaLivekitStackType;
};

export type ElevenLabsFullApiSchemaPatchConvAISettingsRequest = {
  conversation_initiation_client_data_webhook?: (ElevenLabsFullApiSchemaConversationInitiationClientDataWebhook | ElevenLabsFullApiSchemaJsonValue);
  webhooks?: ElevenLabsFullApiSchemaConvAIWebhooks;
  can_use_mcp_servers?: boolean;
  rag_retention_period_days?: number;
  conversation_embedding_retention_days?: (number | ElevenLabsFullApiSchemaJsonValue);
  default_livekit_stack?: ElevenLabsFullApiSchemaLivekitStackType;
};

export type ElevenLabsFullApiSchemaGetConvAIDashboardSettingsResponseModel = {
  charts?: ReadonlyArray<(ElevenLabsFullApiSchemaDashboardCallSuccessChartModel | ElevenLabsFullApiSchemaDashboardCriteriaChartModel | ElevenLabsFullApiSchemaDashboardDataCollectionChartModel)>;
};

export type ElevenLabsFullApiSchemaPatchConvAIDashboardSettingsRequest = {
  charts?: ReadonlyArray<(ElevenLabsFullApiSchemaDashboardCallSuccessChartModel | ElevenLabsFullApiSchemaDashboardCriteriaChartModel | ElevenLabsFullApiSchemaDashboardDataCollectionChartModel)>;
};

export type ElevenLabsFullApiSchemaPostWorkspaceSecretRequest = {
  type: "new";
  name: string;
  value: string;
};

export type ElevenLabsFullApiSchemaPostWorkspaceSecretResponseModel = {
  type: "stored";
  secret_id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaGetWorkspaceSecretsResponseModel = {
  secrets: ReadonlyArray<ElevenLabsFullApiSchemaConvAIWorkspaceStoredSecretConfig>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConvAIWorkspaceStoredSecretConfig = {
  type: "stored";
  secret_id: string;
  name: string;
  used_by: ElevenLabsFullApiSchemaConvAIStoredSecretDependencies;
};

export type ElevenLabsFullApiSchemaPatchWorkspaceSecretRequest = {
  type: "update";
  name: string;
  value: string;
};

export type ElevenLabsFullApiSchemaGetSecretDependenciesResponseModel = {
  dependencies: (ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableToolIdentifier | ElevenLabsFullApiSchemaDependentUnknownToolIdentifier)> | ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)> | ReadonlyArray<ElevenLabsFullApiSchemaDependentPhoneNumberIdentifier>);
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodySubmitABatchCallRequestV1ConvaiBatchCallingSubmitPost = {
  call_name: string;
  agent_id: string;
  recipients: ReadonlyArray<ElevenLabsFullApiSchemaOutboundCallRecipient>;
  scheduled_time_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  agent_phone_number_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  whatsapp_params?: (ElevenLabsFullApiSchemaBatchCallWhatsAppParams | ElevenLabsFullApiSchemaJsonValue);
  timezone?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  telephony_call_config?: ElevenLabsFullApiSchemaTelephonyCallConfig;
  target_concurrency_limit?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBatchCallResponse = {
  id: string;
  phone_number_id: (string | ElevenLabsFullApiSchemaJsonValue);
  phone_provider: (ElevenLabsFullApiSchemaTelephonyProvider | ElevenLabsFullApiSchemaJsonValue);
  whatsapp_params: (ElevenLabsFullApiSchemaBatchCallWhatsAppParams | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  agent_id: string;
  branch_id: (string | ElevenLabsFullApiSchemaJsonValue);
  environment: (string | ElevenLabsFullApiSchemaJsonValue);
  created_at_unix: number;
  scheduled_time_unix: number;
  timezone: (string | ElevenLabsFullApiSchemaJsonValue);
  total_calls_dispatched: number;
  total_calls_scheduled: number;
  total_calls_finished: number;
  last_updated_at_unix: number;
  status: ElevenLabsFullApiSchemaBatchCallStatus;
  retry_count: number;
  telephony_call_config: ElevenLabsFullApiSchemaTelephonyCallConfig;
  target_concurrency_limit: (number | ElevenLabsFullApiSchemaJsonValue);
  agent_name: string;
  branch_name: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWorkspaceBatchCallsResponse = {
  batch_calls: ReadonlyArray<ElevenLabsFullApiSchemaBatchCallResponse>;
  next_doc?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more?: boolean;
};

export type ElevenLabsFullApiSchemaBatchCallDetailedResponse = {
  id: string;
  phone_number_id: (string | ElevenLabsFullApiSchemaJsonValue);
  phone_provider: (ElevenLabsFullApiSchemaTelephonyProvider | ElevenLabsFullApiSchemaJsonValue);
  whatsapp_params: (ElevenLabsFullApiSchemaBatchCallWhatsAppParams | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  agent_id: string;
  branch_id: (string | ElevenLabsFullApiSchemaJsonValue);
  environment: (string | ElevenLabsFullApiSchemaJsonValue);
  created_at_unix: number;
  scheduled_time_unix: number;
  timezone: (string | ElevenLabsFullApiSchemaJsonValue);
  total_calls_dispatched: number;
  total_calls_scheduled: number;
  total_calls_finished: number;
  last_updated_at_unix: number;
  status: ElevenLabsFullApiSchemaBatchCallStatus;
  retry_count: number;
  telephony_call_config: ElevenLabsFullApiSchemaTelephonyCallConfig;
  target_concurrency_limit: (number | ElevenLabsFullApiSchemaJsonValue);
  agent_name: string;
  branch_name: (string | ElevenLabsFullApiSchemaJsonValue);
  recipients: ReadonlyArray<ElevenLabsFullApiSchemaOutboundCallRecipientResponseModel>;
};

export type ElevenLabsFullApiSchemaBodyHandleAnOutboundCallViaSIPTrunkV1ConvaiSipTrunkOutboundCallPost = {
  agent_id: string;
  agent_phone_number_id: string;
  to_number: string;
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput | ElevenLabsFullApiSchemaJsonValue);
  telephony_call_config?: ElevenLabsFullApiSchemaTelephonyCallConfig;
};

export type ElevenLabsFullApiSchemaSIPTrunkOutboundCallResponse = {
  success: boolean;
  message: string;
  conversation_id: (string | ElevenLabsFullApiSchemaJsonValue);
  sip_call_id: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMCPServerRequestModel = {
  config: ElevenLabsFullApiSchemaMCPServerConfigInput;
};

export type ElevenLabsFullApiSchemaMCPServerResponseModel = {
  id: string;
  config: ElevenLabsFullApiSchemaMCPServerConfigOutput;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
  dependent_agents?: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  metadata: ElevenLabsFullApiSchemaMCPServerMetadataResponseModel;
};

export type ElevenLabsFullApiSchemaMCPServersResponseModel = {
  mcp_servers: ReadonlyArray<ElevenLabsFullApiSchemaMCPServerResponseModel>;
};

export type ElevenLabsFullApiSchemaMCPServerConfigUpdateRequestModel = {
  approval_policy?: (ElevenLabsFullApiSchemaMCPApprovalPolicy | ElevenLabsFullApiSchemaJsonValue);
  force_pre_tool_speech?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  pre_tool_speech?: (ElevenLabsFullApiSchemaPreToolSpeechMode | ElevenLabsFullApiSchemaJsonValue);
  disable_interruptions?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: (ElevenLabsFullApiSchemaToolCallSoundBehavior | ElevenLabsFullApiSchemaJsonValue);
  execution_mode?: (ElevenLabsFullApiSchemaToolExecutionMode | ElevenLabsFullApiSchemaJsonValue);
  response_timeout_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  request_headers?: ({
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIDynamicVariable | ElevenLabsFullApiSchemaConvAIEnvVarLocator) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  disable_compression?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  secret_token?: (ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaJsonValue);
  auth_connection?: (ElevenLabsFullApiSchemaAuthConnectionLocator | ElevenLabsFullApiSchemaEnvironmentAuthConnectionLocator | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaListMCPToolsResponseModel = {
  success: boolean;
  tools: ReadonlyArray<ElevenLabsFullApiSchemaTool>;
  error_message?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMCPApprovalPolicyUpdateRequestModel = {
  approval_policy: ElevenLabsFullApiSchemaMCPApprovalPolicy;
};

export type ElevenLabsFullApiSchemaMCPToolAddApprovalRequestModel = {
  tool_name: string;
  tool_description: string;
  input_schema?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  approval_policy?: ElevenLabsFullApiSchemaMCPToolApprovalPolicy;
};

export type ElevenLabsFullApiSchemaMCPToolConfigOverrideCreateRequestModel = {
  force_pre_tool_speech?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  pre_tool_speech?: (ElevenLabsFullApiSchemaPreToolSpeechMode | ElevenLabsFullApiSchemaJsonValue);
  disable_interruptions?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: (ElevenLabsFullApiSchemaToolCallSoundBehavior | ElevenLabsFullApiSchemaJsonValue);
  execution_mode?: (ElevenLabsFullApiSchemaToolExecutionMode | ElevenLabsFullApiSchemaJsonValue);
  response_timeout_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  assignments?: (ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment> | ElevenLabsFullApiSchemaJsonValue);
  input_overrides?: ({
  readonly [key: string]: (ElevenLabsFullApiSchemaConstantSchemaOverride | ElevenLabsFullApiSchemaDynamicVariableSchemaOverride | ElevenLabsFullApiSchemaLLMSchemaOverride | ElevenLabsFullApiSchemaOmitSchemaOverride) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  response_mocks?: (ReadonlyArray<ElevenLabsFullApiSchemaToolResponseMockConfigInput> | ElevenLabsFullApiSchemaJsonValue);
  tool_name: string;
};

export type ElevenLabsFullApiSchemaMCPToolConfigOverrideOutput = {
  tool_name: string;
  force_pre_tool_speech?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  pre_tool_speech?: (ElevenLabsFullApiSchemaPreToolSpeechMode | ElevenLabsFullApiSchemaJsonValue);
  disable_interruptions?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: (ElevenLabsFullApiSchemaToolCallSoundBehavior | ElevenLabsFullApiSchemaJsonValue);
  execution_mode?: (ElevenLabsFullApiSchemaToolExecutionMode | ElevenLabsFullApiSchemaJsonValue);
  response_timeout_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  input_overrides?: ({
  readonly [key: string]: (ElevenLabsFullApiSchemaConstantSchemaOverride | ElevenLabsFullApiSchemaDynamicVariableSchemaOverride | ElevenLabsFullApiSchemaLLMSchemaOverride | ElevenLabsFullApiSchemaOmitSchemaOverride) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  response_mocks?: (ReadonlyArray<ElevenLabsFullApiSchemaToolResponseMockConfigOutput> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMCPToolConfigOverrideUpdateRequestModel = {
  force_pre_tool_speech?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  pre_tool_speech?: (ElevenLabsFullApiSchemaPreToolSpeechMode | ElevenLabsFullApiSchemaJsonValue);
  disable_interruptions?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: (ElevenLabsFullApiSchemaToolCallSoundBehavior | ElevenLabsFullApiSchemaJsonValue);
  execution_mode?: (ElevenLabsFullApiSchemaToolExecutionMode | ElevenLabsFullApiSchemaJsonValue);
  response_timeout_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  assignments?: (ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment> | ElevenLabsFullApiSchemaJsonValue);
  input_overrides?: ({
  readonly [key: string]: (ElevenLabsFullApiSchemaConstantSchemaOverride | ElevenLabsFullApiSchemaDynamicVariableSchemaOverride | ElevenLabsFullApiSchemaLLMSchemaOverride | ElevenLabsFullApiSchemaOmitSchemaOverride) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  response_mocks?: (ReadonlyArray<ElevenLabsFullApiSchemaToolResponseMockConfigInput> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetWhatsAppAccountResponse = {
  business_account_id: string;
  phone_number_id: string;
  business_account_name: string;
  phone_number_name: string;
  phone_number: string;
  assigned_agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_messaging?: boolean;
  enable_audio_message_response?: boolean;
  assigned_agent_name: (string | ElevenLabsFullApiSchemaJsonValue);
  is_token_expired?: boolean;
};

export type ElevenLabsFullApiSchemaUpdateWhatsAppAccountRequest = {
  assigned_agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_messaging?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  enable_audio_message_response?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaListWhatsAppAccountsResponse = {
  items: ReadonlyArray<ElevenLabsFullApiSchemaGetWhatsAppAccountResponse>;
};

export type ElevenLabsFullApiSchemaBodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost = {
  parent_version_id: string;
  name: string;
  description: string;
  conversation_config?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  platform_settings?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  workflow?: (ElevenLabsFullApiSchemaAgentWorkflowRequestModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCreateAgentBranchResponseModel = {
  created_branch_id: string;
  created_version_id: string;
};

export type ElevenLabsFullApiSchemaListResponseAgentBranchSummary = {
  meta?: ElevenLabsFullApiSchemaListResponseMeta;
  results: ReadonlyArray<ElevenLabsFullApiSchemaAgentBranchSummary>;
};

export type ElevenLabsFullApiSchemaAgentBranchResponse = {
  id: string;
  name: string;
  agent_id: string;
  description: string;
  created_at: number;
  last_committed_at: number;
  is_archived: boolean;
  protection_status?: ElevenLabsFullApiSchemaBranchProtectionStatus;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
  current_live_percentage?: number;
  parent_branch?: (ElevenLabsFullApiSchemaAgentBranchBasicInfo | ElevenLabsFullApiSchemaJsonValue);
  most_recent_versions?: ReadonlyArray<ElevenLabsFullApiSchemaAgentVersionMetadata>;
};

export type ElevenLabsFullApiSchemaBodyUpdateAgentBranchV1ConvaiAgentsAgentIdBranchesBranchIdPatch = {
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  is_archived?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  protection_status?: (ElevenLabsFullApiSchemaBranchProtectionStatus | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentVersionMetadata = {
  id: string;
  agent_id: string;
  branch_id: string;
  version_description: string;
  seq_no_in_branch: number;
  time_committed_secs: number;
  parents: ElevenLabsFullApiSchemaAgentVersionParents;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyMergeABranchIntoATargetBranchV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergePost = {
  archive_source_branch?: boolean;
  force?: boolean;
};

export type ElevenLabsFullApiSchemaBodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost = {
  deployment_request: ElevenLabsFullApiSchemaAgentDeploymentRequest;
};

export type ElevenLabsFullApiSchemaAgentDeploymentResponse = {
  traffic_percentage_branch_id_map?: {
  readonly [key: string]: number | undefined;
};
};

export type ElevenLabsFullApiSchemaBodyCreateAgentDraftV1ConvaiAgentsAgentIdDraftsPost = {
  conversation_config: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  platform_settings: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  workflow: ElevenLabsFullApiSchemaAgentWorkflowRequestModel;
  name: string;
  tags?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaListSpeechEnginesResponse = {
  speech_engines: ReadonlyArray<ElevenLabsFullApiSchemaSpeechEngineSummaryResponse>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaCreateSpeechEngineRequest = {
  name?: string;
  speech_engine: ElevenLabsFullApiSchemaSpeechEngineConfig;
  asr?: ElevenLabsFullApiSchemaASRConversationalConfig;
  tts?: ElevenLabsFullApiSchemaTTSConversationalConfigInput;
  turn?: ElevenLabsFullApiSchemaBaseTurnConfig;
  conversation?: ElevenLabsFullApiSchemaConversationConfigInput;
  privacy?: ElevenLabsFullApiSchemaPrivacyConfigInput;
  call_limits?: ElevenLabsFullApiSchemaAgentCallLimits;
  language?: string;
  tags?: ReadonlyArray<string>;
  overrides?: ElevenLabsFullApiSchemaSpeechEngineConversationInitiationClientDataConfig;
};

export type ElevenLabsFullApiSchemaSpeechEngineResponse = {
  speech_engine_id: string;
  name: string;
  speech_engine: ElevenLabsFullApiSchemaSpeechEngineConfig;
  asr: ElevenLabsFullApiSchemaASRConversationalConfig;
  tts: ElevenLabsFullApiSchemaTTSConversationalConfigOutput;
  turn: ElevenLabsFullApiSchemaBaseTurnConfig;
  conversation: ElevenLabsFullApiSchemaConversationConfigOutput;
  privacy: ElevenLabsFullApiSchemaPrivacyConfigOutput;
  call_limits: ElevenLabsFullApiSchemaAgentCallLimits;
  language: string;
  tags: ReadonlyArray<string>;
  overrides: ElevenLabsFullApiSchemaSpeechEngineConversationInitiationClientDataConfig;
  metadata: ElevenLabsFullApiSchemaAgentMetadataDBModel;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUpdateSpeechEngineRequest = {
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  speech_engine?: (ElevenLabsFullApiSchemaSpeechEngineConfig | ElevenLabsFullApiSchemaJsonValue);
  asr?: (ElevenLabsFullApiSchemaASRConversationalConfig | ElevenLabsFullApiSchemaJsonValue);
  tts?: (ElevenLabsFullApiSchemaTTSConversationalConfigInput | ElevenLabsFullApiSchemaJsonValue);
  turn?: (ElevenLabsFullApiSchemaBaseTurnConfig | ElevenLabsFullApiSchemaJsonValue);
  conversation?: (ElevenLabsFullApiSchemaConversationConfigInput | ElevenLabsFullApiSchemaJsonValue);
  privacy?: (ElevenLabsFullApiSchemaPrivacyConfigInput | ElevenLabsFullApiSchemaJsonValue);
  call_limits?: (ElevenLabsFullApiSchemaAgentCallLimits | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  tags?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  overrides?: (ElevenLabsFullApiSchemaSpeechEngineConversationInitiationClientDataConfig | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRunConversationEvaluationsRequest = {
  evaluation_id: string;
  scope?: ElevenLabsFullApiSchemaAnalysisScope;
};

export type ElevenLabsFullApiSchemaEnvironmentVariablesListResponse = {
  environment_variables: ReadonlyArray<ElevenLabsFullApiSchemaEnvironmentVariableResponse>;
  next_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_more: boolean;
};

export type ElevenLabsFullApiSchemaCreateStringEnvironmentVariableRequest = {
  type: "string";
  label: string;
  values: {
  readonly [key: string]: string | undefined;
};
};

export type ElevenLabsFullApiSchemaCreateSecretEnvironmentVariableRequest = {
  type: "secret";
  label: string;
  values: {
  readonly [key: string]: ElevenLabsFullApiSchemaEnvironmentVariableSecretValueRequest | undefined;
};
};

export type ElevenLabsFullApiSchemaCreateAuthConnectionEnvironmentVariableRequest = {
  type: "auth_connection";
  label: string;
  values: {
  readonly [key: string]: ElevenLabsFullApiSchemaEnvironmentVariableAuthConnectionValueRequest | undefined;
};
};

export type ElevenLabsFullApiSchemaEnvironmentVariableResponse = {
  label: string;
  created_at_unix_secs: number;
  updated_at_unix_secs: number;
  created_by_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  type: "string" | "secret" | "auth_connection";
  id: string;
  workspace_id: string;
  values: ({
  readonly [key: string]: string | undefined;
} | {
  readonly [key: string]: ElevenLabsFullApiSchemaEnvironmentVariableSecretValue | undefined;
} | {
  readonly [key: string]: ElevenLabsFullApiSchemaEnvironmentVariableAuthConnectionValue | undefined;
});
};

export type ElevenLabsFullApiSchemaUpdateEnvironmentVariableRequest = {
  values: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaEnvironmentVariableSecretValueRequest | ElevenLabsFullApiSchemaEnvironmentVariableAuthConnectionValueRequest | ElevenLabsFullApiSchemaJsonValue) | undefined;
};
};

export type ElevenLabsFullApiSchemaBodyGenerateCompositionPlanV1MusicPlanPost = {
  prompt: string;
  music_length_ms?: (number | ElevenLabsFullApiSchemaJsonValue);
  source_composition_plan?: (ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaCompositionPlan | ElevenLabsFullApiSchemaJsonValue);
  model_id?: "music_v1" | "music_v2";
};

export type ElevenLabsFullApiSchemaMusicPrompt = {
  positive_global_styles: ReadonlyArray<string>;
  negative_global_styles: ReadonlyArray<string>;
  sections: ReadonlyArray<ElevenLabsFullApiSchemaSongSection>;
};

export type ElevenLabsFullApiSchemaCompositionPlan = {
  chunks: ReadonlyArray<(ElevenLabsFullApiSchemaGenerationChunkInput | ElevenLabsFullApiSchemaAudioRefChunk)>;
};

export type ElevenLabsFullApiSchemaBodyComposeMusicV1MusicPost = {
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  generation_mode?: (ElevenLabsFullApiSchemaMusicGenerationMode | ElevenLabsFullApiSchemaJsonValue);
  music_prompt?: (ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaJsonValue);
  lyrics_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  composition_plan?: ((ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaCompositionPlan) | ElevenLabsFullApiSchemaJsonValue);
  music_length_ms?: (number | ElevenLabsFullApiSchemaJsonValue);
  model_id?: "music_v1" | "music_v2";
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  force_instrumental?: boolean;
  finetune_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  finetune_strength?: number;
  use_phonetic_names?: boolean;
  respect_sections_durations?: boolean;
  store_for_inpainting?: boolean;
  sign_with_c2pa?: boolean;
};

export type ElevenLabsFullApiSchemaBodyComposeMusicWithADetailedResponseV1MusicDetailedPost = {
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  generation_mode?: (ElevenLabsFullApiSchemaMusicGenerationMode | ElevenLabsFullApiSchemaJsonValue);
  music_prompt?: (ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaJsonValue);
  lyrics_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  composition_plan?: ((ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaCompositionPlan) | ElevenLabsFullApiSchemaJsonValue);
  music_length_ms?: (number | ElevenLabsFullApiSchemaJsonValue);
  model_id?: "music_v1" | "music_v2";
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  force_instrumental?: boolean;
  finetune_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  finetune_strength?: number;
  use_phonetic_names?: boolean;
  respect_sections_durations?: boolean;
  store_for_inpainting?: boolean;
  with_timestamps?: boolean;
  sign_with_c2pa?: boolean;
  model_style_prefix?: "music" | "sfx";
};

export type ElevenLabsFullApiSchemaBodyStreamComposedMusicV1MusicStreamPost = {
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  generation_mode?: (ElevenLabsFullApiSchemaMusicGenerationMode | ElevenLabsFullApiSchemaJsonValue);
  music_prompt?: (ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaJsonValue);
  lyrics_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  composition_plan?: ((ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaCompositionPlan) | ElevenLabsFullApiSchemaJsonValue);
  music_length_ms?: (number | ElevenLabsFullApiSchemaJsonValue);
  model_id?: "music_v1" | "music_v2";
  seed?: (number | ElevenLabsFullApiSchemaJsonValue);
  force_instrumental?: boolean;
  finetune_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  finetune_strength?: number;
  use_phonetic_names?: boolean;
  store_for_inpainting?: boolean;
};

export type ElevenLabsFullApiSchemaBodyUploadMusicV1MusicUploadPost = {
  file: string;
  extract_composition_plan?: true | false | "music_v1" | "music_v2";
  with_timestamps?: boolean;
};

export type ElevenLabsFullApiSchemaMusicUploadResponse = {
  song_id: string;
  composition_plan?: (ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaCompositionPlan | ElevenLabsFullApiSchemaJsonValue);
  words_timestamps?: (ReadonlyArray<ElevenLabsFullApiSchemaWordTimestamp> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyStemSeparationV1MusicStemSeparationPost = {
  file: string;
  stem_variation_id?: "two_stems_v1" | "six_stems_v1";
  sign_with_c2pa?: boolean;
};

export type ElevenLabsFullApiSchemaCreateOrderRequest = {
  sandbox?: boolean;
};

export type ElevenLabsFullApiSchemaCreateOrderResponse = {
  order_id: ElevenLabsFullApiSchemaOrderId;
  sandbox?: boolean;
};

export type ElevenLabsFullApiSchemaOrderRequestState = "open" | "submitted" | "paid" | "accepted" | "rejected" | "done";

export type ElevenLabsFullApiSchemaListOrdersResponse = {
  orders: ReadonlyArray<ElevenLabsFullApiSchemaOrderSummary>;
};

export type ElevenLabsFullApiSchemaOrderResponse = {
  order_id: ElevenLabsFullApiSchemaOrderId;
  name: string;
  state: ElevenLabsFullApiSchemaOrderState;
  items: ReadonlyArray<ElevenLabsFullApiSchemaOrderItemInfo>;
  total_amount_usd?: (number | ElevenLabsFullApiSchemaJsonValue);
  sandbox?: boolean;
  created_at: string;
  submitted_at?: (string | ElevenLabsFullApiSchemaJsonValue);
  paid_at?: (string | ElevenLabsFullApiSchemaJsonValue);
  accepted_at?: (string | ElevenLabsFullApiSchemaJsonValue);
  completed_at?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyUpdateOrderV1ProductionsOrdersOrderIdPatch = {
  request: ElevenLabsFullApiSchemaUpdateOrderRequest;
};

export type ElevenLabsFullApiSchemaUpdateOrderResponse = {
  name: string;
};

export type ElevenLabsFullApiSchemaBodyRegisterMediaV1ProductionsOrdersOrderIdMediaPost = {
  declared_language: string;
  media?: (string | ElevenLabsFullApiSchemaJsonValue);
  media_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  media_url_filename?: (string | ElevenLabsFullApiSchemaJsonValue);
  media_url_content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRegisterMediaResponse = {
  media_id: ElevenLabsFullApiSchemaMediaId;
};

export type ElevenLabsFullApiSchemaOrderMediaResponse = {
  media_id: ElevenLabsFullApiSchemaMediaId;
  name: string;
  content_type: string;
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  signed_url: string;
};

export type ElevenLabsFullApiSchemaBodyUpsertOrderItemV1ProductionsOrdersOrderIdItemsPost = {
  request: ElevenLabsFullApiSchemaUpsertOrderItemRequest;
};

export type ElevenLabsFullApiSchemaUpsertOrderItemResponse = {
  item_id: ElevenLabsFullApiSchemaItemId;
  quote?: (ElevenLabsFullApiSchemaQuoteInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRemoveOrderItemResponse = {
  success: boolean;
};

export type ElevenLabsFullApiSchemaSubmitOrderResponse = {
  order_id: ElevenLabsFullApiSchemaOrderId;
  state: ElevenLabsFullApiSchemaOrderState;
  submitted_at: string;
};

export type ElevenLabsFullApiSchemaOrderDeliverablesResponse = {
  deliverables: ReadonlyArray<ElevenLabsFullApiSchemaDeliverableInfo>;
};

export type ElevenLabsFullApiSchemaLanguagesResponse = (ElevenLabsFullApiSchemaPairedLanguagesResponse | ElevenLabsFullApiSchemaSingleLanguagesResponse);

export type ElevenLabsFullApiSchemaBodyCreatePVCVoiceV1VoicesPvcPost = {
  name: string;
  language: string;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  labels?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyEditPVCVoiceV1VoicesPvcVoiceIdPost = {
  name?: string;
  language?: string;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  labels?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyAddSamplesToPVCVoiceV1VoicesPvcVoiceIdSamplesPost = {
  files: ReadonlyArray<string>;
  remove_background_noise?: boolean;
};

export type ElevenLabsFullApiSchemaSampleResponseModel = {
  sample_id: string;
  file_name: string;
  mime_type: string;
  size_bytes: number;
  hash: string;
  duration_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  remove_background_noise?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  has_isolated_audio?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  has_isolated_audio_preview?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  speaker_separation?: (ElevenLabsFullApiSchemaSpeakerSeparationResponseModel | ElevenLabsFullApiSchemaJsonValue);
  trim_start?: (number | ElevenLabsFullApiSchemaJsonValue);
  trim_end?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBodyUpdatePVCVoiceSampleV1VoicesPvcVoiceIdSamplesSampleIdPost = {
  remove_background_noise?: boolean;
  selected_speaker_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  trim_start_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  trim_end_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  file_name?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDeleteVoiceSampleResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaVoiceSamplePreviewResponseModel = {
  audio_base_64: string;
  voice_id: string;
  sample_id: string;
  media_type: string;
  duration_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceSampleVisualWaveformResponseModel = {
  sample_id: string;
  visual_waveform: ReadonlyArray<number>;
};

export type ElevenLabsFullApiSchemaSpeakerSeparationResponseModel = {
  voice_id: string;
  sample_id: string;
  status: "not_started" | "pending" | "completed" | "failed";
  speakers?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaSpeakerResponseModel | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  selected_speaker_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaStartSpeakerSeparationResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaSpeakerAudioResponseModel = {
  audio_base_64: string;
  media_type: string;
  duration_secs: number;
};

export type ElevenLabsFullApiSchemaBodyVerifyPVCVoiceCaptchaV1VoicesPvcVoiceIdCaptchaPost = {
  recording: string;
};

export type ElevenLabsFullApiSchemaVerifyPVCVoiceCaptchaResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyRunPVCTrainingV1VoicesPvcVoiceIdTrainPost = {
  model_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaStartPVCVoiceTrainingResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyRequestManualVerificationV1VoicesPvcVoiceIdVerificationPost = {
  files: ReadonlyArray<string>;
  extra_text?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRequestPVCManualVerificationResponseModel = {
  status: string;
};

export type ElevenLabsFullApiSchemaBodyGetWorkspaceUsageV1WorkspaceAnalyticsQueryUsageByProductOverTimePost = {
  start_time: number;
  end_time: number;
  interval_seconds?: number;
  group_by?: (ReadonlyArray<"product_type" | "model" | "voice_id" | "user_id" | "fiat_currency" | "fiat_charge_type" | "region" | "reporting_workspace_id" | "request_source" | "resource_id" | "subresource_id" | "request_queue_type" | "voice_multiplier" | "hashed_xi_api_key" | "billing_group_id"> | ElevenLabsFullApiSchemaJsonValue);
  filters?: (ReadonlyArray<ElevenLabsFullApiSchemaColumnFilter> | ElevenLabsFullApiSchemaJsonValue);
  time_zone?: string;
};

export type ElevenLabsFullApiSchemaWorkspaceAnalyticsQueryResponseModel = {
  columns: ReadonlyArray<string>;
  column_types: ReadonlyArray<"String" | "Float" | "DateTime" | "Int" | "Bool" | "JSON" | "Map">;
  rows: ReadonlyArray<ReadonlyArray<(string | number | number | boolean | string | ElevenLabsFullApiSchemaJsonValue)>>;
  column_units: ReadonlyArray<(ElevenLabsFullApiSchemaColumnUnit | ElevenLabsFullApiSchemaJsonValue)>;
};

export type ElevenLabsFullApiSchemaBodyListAPIRequestsV1WorkspaceAnalyticsRequestsPost = {
  start_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  end_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  limit?: number;
  sort?: ("asc" | "desc" | ElevenLabsFullApiSchemaJsonValue);
  filters?: (ReadonlyArray<ElevenLabsFullApiSchemaColumnFilter> | ElevenLabsFullApiSchemaJsonValue);
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaFeedbackResponseModel = {
  thumbs_up: boolean;
  feedback: string;
  emotions: boolean;
  inaccurate_clone: boolean;
  glitches: boolean;
  audio_quality: boolean;
  other: boolean;
  review_status?: string;
};

export type ElevenLabsFullApiSchemaHistoryAlignmentsResponseModel = {
  alignment: ElevenLabsFullApiSchemaHistoryAlignmentResponseModel;
  normalized_alignment: ElevenLabsFullApiSchemaHistoryAlignmentResponseModel;
};

export type ElevenLabsFullApiSchemaDialogueInputResponseModel = {
  text: string;
  voice_id: string;
  voice_name: string;
};

export type ElevenLabsFullApiSchemaValidationError = {
  loc: ReadonlyArray<(string | number)>;
  msg: string;
  type: string;
};

export type ElevenLabsFullApiSchemaAudioIsolationHistoryItemResponseModel = {
  id: string;
  title: (string | ElevenLabsFullApiSchemaJsonValue);
  created_at_unix: number;
  format: string;
  duration_seconds: (number | ElevenLabsFullApiSchemaJsonValue);
  download_url: (string | ElevenLabsFullApiSchemaJsonValue);
  icon_url: (string | ElevenLabsFullApiSchemaJsonValue);
  source_video_url: (string | ElevenLabsFullApiSchemaJsonValue);
  supports_video: boolean;
  processing: boolean;
  video_processing_failed: boolean;
  preview_b64: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorRequestModel = {
  pronunciation_dictionary_id: string;
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCharacterAlignmentResponseModel = {
  characters: ReadonlyArray<string>;
  character_start_times_seconds: ReadonlyArray<number>;
  character_end_times_seconds: ReadonlyArray<number>;
};

export type ElevenLabsFullApiSchemaDialogueInput = {
  text: string;
  voice_id: string;
};

export type ElevenLabsFullApiSchemaModelSettingsResponseModel = {
  stability?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceSegment = {
  voice_id: string;
  start_time_seconds: number;
  end_time_seconds: number;
  character_start_index: number;
  character_end_index: number;
  dialogue_input_index: number;
};

export type ElevenLabsFullApiSchemaVoicePreviewResponseModel = {
  audio_base_64: string;
  generated_voice_id: string;
  media_type: string;
  duration_secs: number;
  language: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaFineTuningResponseModel = {
  is_allowed_to_fine_tune: boolean;
  state: {
  readonly [key: string]: "not_started" | "queued" | "fine_tuning" | "fine_tuned" | "failed" | "delayed" | undefined;
};
  verification_failures: ReadonlyArray<string>;
  verification_attempts_count: number;
  manual_verification_requested: boolean;
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  progress?: ({
  readonly [key: string]: number | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  message?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  dataset_duration_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  verification_attempts?: (ReadonlyArray<ElevenLabsFullApiSchemaVerificationAttemptResponseModel> | ElevenLabsFullApiSchemaJsonValue);
  slice_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  manual_verification?: (ElevenLabsFullApiSchemaManualVerificationResponseModel | ElevenLabsFullApiSchemaJsonValue);
  max_verification_attempts?: (number | ElevenLabsFullApiSchemaJsonValue);
  next_max_verification_attempts_reset_unix_ms?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceSharingResponseModel = {
  status: "enabled" | "disabled" | "copied" | "copied_disabled";
  history_item_sample_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  date_unix: number;
  whitelisted_emails: ReadonlyArray<string>;
  public_owner_id: string;
  original_voice_id: string;
  financial_rewards_enabled: boolean;
  free_users_allowed: boolean;
  live_moderation_enabled: boolean;
  rate?: (number | ElevenLabsFullApiSchemaJsonValue);
  fiat_rate?: (number | ElevenLabsFullApiSchemaJsonValue);
  notice_period: number;
  disable_at_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_mixing_allowed: boolean;
  featured: boolean;
  category: "generated" | "cloned" | "premade" | "professional" | "famous" | "high_quality";
  reader_app_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  image_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  ban_reason?: (string | ElevenLabsFullApiSchemaJsonValue);
  liked_by_count: number;
  cloned_by_count: number;
  name: string;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  labels: {
  readonly [key: string]: string | undefined;
};
  review_status: "not_requested" | "pending" | "declined" | "allowed" | "allowed_with_changes";
  review_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  enabled_in_library: boolean;
  instagram_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  twitter_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  youtube_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  tiktok_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  moderation_check?: (ElevenLabsFullApiSchemaVoiceSharingModerationCheckResponseModel | ElevenLabsFullApiSchemaJsonValue);
  reader_restricted_on?: (ReadonlyArray<ElevenLabsFullApiSchemaReaderResourceResponseModel> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVerifiedVoiceLanguageResponseModel = {
  language: string;
  model_id: string;
  accent?: (string | ElevenLabsFullApiSchemaJsonValue);
  locale?: (string | ElevenLabsFullApiSchemaJsonValue);
  preview_url?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceVerificationResponseModel = {
  requires_verification: boolean;
  is_verified: boolean;
  verification_failures: ReadonlyArray<string>;
  verification_attempts_count: number;
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  verification_attempts?: (ReadonlyArray<ElevenLabsFullApiSchemaVerificationAttemptResponseModel> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSubscriptionResponseModel = {
  tier: string;
  character_count: number;
  character_limit: number;
  max_character_limit_extension: (number | ElevenLabsFullApiSchemaJsonValue);
  max_credit_limit_extension: (number | "unlimited");
  can_extend_character_limit: boolean;
  allowed_to_extend_character_limit: boolean;
  next_character_count_reset_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_slots_used: number;
  professional_voice_slots_used: number;
  voice_limit: number;
  max_voice_add_edits?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_add_edit_counter: number;
  professional_voice_limit: number;
  can_extend_voice_limit: boolean;
  can_use_instant_voice_cloning: boolean;
  can_use_professional_voice_cloning: boolean;
  currency?: (ElevenLabsFullApiSchemaCurrency | ElevenLabsFullApiSchemaJsonValue);
  current_overage: ElevenLabsFullApiSchemaPrice;
  status: ElevenLabsFullApiSchemaSubscriptionStatusType;
  billing_period?: (ElevenLabsFullApiSchemaBillingPeriod | ElevenLabsFullApiSchemaJsonValue);
  character_refresh_period?: (ElevenLabsFullApiSchemaCharacterRefreshPeriod | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSeatType = "workspace_admin" | "workspace_member" | "workspace_lite_member";

export type ElevenLabsFullApiSchemaCurrency = "usd" | "eur" | "inr" | "pln";

export type ElevenLabsFullApiSchemaPrice = {
  amount: string;
  currency: ElevenLabsFullApiSchemaCurrency;
};

export type ElevenLabsFullApiSchemaSubscriptionStatusType = "trialing" | "active" | "incomplete" | "past_due" | "free" | "free_disabled";

export type ElevenLabsFullApiSchemaBillingPeriod = "monthly_period" | "3_month_period" | "6_month_period" | "annual_period";

export type ElevenLabsFullApiSchemaCharacterRefreshPeriod = "monthly_period" | "3_month_period" | "6_month_period" | "annual_period";

export type ElevenLabsFullApiSchemaInvoiceResponseModel = {
  amount_due_cents: number;
  subtotal_cents?: (number | ElevenLabsFullApiSchemaJsonValue);
  tax_cents?: (number | ElevenLabsFullApiSchemaJsonValue);
  discount_percent_off?: (number | ElevenLabsFullApiSchemaJsonValue);
  discount_amount_off?: (number | ElevenLabsFullApiSchemaJsonValue);
  discounts: ReadonlyArray<ElevenLabsFullApiSchemaDiscountResponseModel>;
  next_payment_attempt_unix: number;
  payment_intent_status: ("canceled" | "processing" | "requires_action" | "requires_capture" | "requires_confirmation" | "requires_payment_method" | "succeeded" | ElevenLabsFullApiSchemaJsonValue);
  payment_intent_statusses: ReadonlyArray<"canceled" | "processing" | "requires_action" | "requires_capture" | "requires_confirmation" | "requires_payment_method" | "succeeded">;
};

export type ElevenLabsFullApiSchemaPendingSubscriptionSwitchResponseModel = {
  kind?: "change";
  next_tier: "free" | "starter" | "creator" | "pro" | "growing_business" | "scale_2024_08_10" | "grant_tier_1_2025_07_23" | "grant_tier_2_2025_07_23" | "trial" | "enterprise";
  next_billing_period: ElevenLabsFullApiSchemaBillingPeriod;
  timestamp_seconds: number;
};

export type ElevenLabsFullApiSchemaPendingCancellationResponseModel = {
  kind?: "cancellation";
  timestamp_seconds: number;
};

export type ElevenLabsFullApiSchemaPodcastConversationMode = {
  type: "conversation";
  conversation: ElevenLabsFullApiSchemaPodcastConversationModeData;
};

export type ElevenLabsFullApiSchemaPodcastBulletinMode = {
  type: "bulletin";
  bulletin: ElevenLabsFullApiSchemaPodcastBulletinModeData;
};

export type ElevenLabsFullApiSchemaPodcastTextSource = {
  type: "text";
  text: string;
};

export type ElevenLabsFullApiSchemaPodcastURLSource = {
  type: "url";
  url: string;
};

export type ElevenLabsFullApiSchemaQualityPresetType = "standard" | "high" | "ultra" | "ultra_lossless";

export type ElevenLabsFullApiSchemaProjectResponseModel = {
  project_id: string;
  name: string;
  create_date_unix: number;
  created_by_user_id: (string | ElevenLabsFullApiSchemaJsonValue);
  default_title_voice_ref_id: string;
  default_paragraph_voice_ref_id: string;
  default_model_id: string;
  last_conversion_date_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  can_be_downloaded: boolean;
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  author?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  genres?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  cover_image_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  target_audience?: ("children" | "young adult" | "adult" | "all ages" | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  original_publication_date?: (string | ElevenLabsFullApiSchemaJsonValue);
  mature_content?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  isbn_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  volume_normalization: boolean;
  state: "creating" | "default" | "converting" | "in_queue";
  access_level: "admin" | "editor" | "commenter" | "viewer";
  fiction?: ("fiction" | "non-fiction" | ElevenLabsFullApiSchemaJsonValue);
  quality_check_on: boolean;
  quality_check_on_when_bulk_convert: boolean;
  creation_meta?: (ElevenLabsFullApiSchemaProjectCreationMetaResponseModel | ElevenLabsFullApiSchemaJsonValue);
  source_type?: ("blank" | "book" | "article" | "genfm" | "video" | "screenplay" | ElevenLabsFullApiSchemaJsonValue);
  chapters_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  captions_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  caption_style?: (ElevenLabsFullApiSchemaCaptionStyleModel | ElevenLabsFullApiSchemaJsonValue);
  caption_style_template_overrides?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaCaptionStyleModel | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  public_share_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  aspect_ratio?: ("16:9" | "9:16" | "4:5" | "1:1" | ElevenLabsFullApiSchemaJsonValue);
  agent_settings?: (ElevenLabsFullApiSchemaStudioAgentSettingsModel | ElevenLabsFullApiSchemaJsonValue);
  default_title_voice_id: string;
  default_paragraph_voice_id: string;
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryVersionLocatorDBModel = {
  pronunciation_dictionary_id: string;
  version_id: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaProjectCreationMetaResponseModel = {
  creation_progress: number;
  status: "pending" | "creating" | "finished" | "failed";
  type: "blank" | "generate_podcast" | "auto_assign_voices" | "dub_video" | "import_speech";
};

export type ElevenLabsFullApiSchemaCaptionStyleModel = {
  template?: (ElevenLabsFullApiSchemaCaptionStyleTemplateModel | ElevenLabsFullApiSchemaJsonValue);
  text_font?: (string | ElevenLabsFullApiSchemaJsonValue);
  text_scale?: (number | ElevenLabsFullApiSchemaJsonValue);
  text_color?: (string | ElevenLabsFullApiSchemaJsonValue);
  text_align?: ("start" | "center" | "end" | ElevenLabsFullApiSchemaJsonValue);
  text_style?: ("normal" | "italic" | ElevenLabsFullApiSchemaJsonValue);
  text_weight?: ("normal" | "bold" | "900" | ElevenLabsFullApiSchemaJsonValue);
  text_transform?: ("none" | "uppercase" | ElevenLabsFullApiSchemaJsonValue);
  text_blend_mode?: ("normal" | "difference" | "multiply" | ElevenLabsFullApiSchemaJsonValue);
  text_shadow?: (ElevenLabsFullApiSchemaStudioTextStyleShadowModel | ElevenLabsFullApiSchemaJsonValue);
  text_outline?: (ElevenLabsFullApiSchemaStudioTextStyleOutlineModel | ElevenLabsFullApiSchemaJsonValue);
  background_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  background_color?: (string | ElevenLabsFullApiSchemaJsonValue);
  background_opacity?: (number | ElevenLabsFullApiSchemaJsonValue);
  word_highlights_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  word_highlights_color?: (string | ElevenLabsFullApiSchemaJsonValue);
  word_highlights_background_color?: (string | ElevenLabsFullApiSchemaJsonValue);
  word_highlights_opacity?: (number | ElevenLabsFullApiSchemaJsonValue);
  section_animation?: (ElevenLabsFullApiSchemaCaptionStyleSectionAnimationModel | ElevenLabsFullApiSchemaJsonValue);
  word_animation?: (ElevenLabsFullApiSchemaCaptionStyleWordAnimationModel | ElevenLabsFullApiSchemaJsonValue);
  character_animation?: (ElevenLabsFullApiSchemaCaptionStyleCharacterAnimationModel | ElevenLabsFullApiSchemaJsonValue);
  width_pct?: (number | ElevenLabsFullApiSchemaJsonValue);
  horizontal_placement?: (ElevenLabsFullApiSchemaCaptionStyleHorizontalPlacementModel | ElevenLabsFullApiSchemaJsonValue);
  vertical_placement?: (ElevenLabsFullApiSchemaCaptionStyleVerticalPlacementModel | ElevenLabsFullApiSchemaJsonValue);
  auto_break_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  max_lines_per_section?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_words_per_line?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaStudioAgentSettingsModel = {
  tool_settings?: {
  readonly [key: string]: ElevenLabsFullApiSchemaStudioAgentToolSettingsModel | undefined;
};
};

export type ElevenLabsFullApiSchemaChapterResponseModel = {
  chapter_id: string;
  name: string;
  last_conversion_date_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  conversion_progress?: (number | ElevenLabsFullApiSchemaJsonValue);
  can_be_downloaded: boolean;
  state: "default" | "converting";
  has_video?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  has_visual_content?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  voice_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  statistics?: (ElevenLabsFullApiSchemaChapterStatisticsResponseModel | ElevenLabsFullApiSchemaJsonValue);
  last_conversion_error?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryVersionResponseModel = {
  version_id: string;
  version_rules_num: number;
  pronunciation_dictionary_id: string;
  dictionary_name: string;
  version_name: string;
  permission_on_resource: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
  created_by: string;
  creation_time_unix: number;
  archived_time_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryLocatorResponseModel = {
  pronunciation_dictionary_id: string;
  version_id: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaProjectVideoResponseModel = {
  video_id: string;
  filename: string;
  signed_url: (string | ElevenLabsFullApiSchemaJsonValue);
  signed_preview_url: (string | ElevenLabsFullApiSchemaJsonValue);
  offset_ms: number;
  duration_ms: number;
  volume_gain_db: number;
  muted: boolean;
  fade_in_ms?: number;
  fade_out_ms?: number;
  width: number;
  height: number;
  codec: string;
  order: string;
  created_at_ms: number;
  updated_at_ms: number;
  error?: (string | ElevenLabsFullApiSchemaJsonValue);
  thumbnail_interval_seconds: number;
  thumbnail_size: ReadonlyArray<number>;
  thumbnail_sheets: ReadonlyArray<ElevenLabsFullApiSchemaProjectVideoThumbnailSheetResponseModel>;
  start_time_ms: number;
  end_time_ms: (number | ElevenLabsFullApiSchemaJsonValue);
  asset_preview_signed_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_video_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_asset_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_platform_asset_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  pending_blocks_metadata?: (ElevenLabsFullApiSchemaPendingBlocksMetadataModel | ElevenLabsFullApiSchemaJsonValue);
  pending_external_audios_metadata?: (ElevenLabsFullApiSchemaPendingExternalAudiosMetadataModel | ElevenLabsFullApiSchemaJsonValue);
  speech_imported?: boolean;
  pending_task?: (ElevenLabsFullApiSchemaPendingClipTask | ElevenLabsFullApiSchemaJsonValue);
  audio_track_ready?: boolean;
  export_format_ready?: boolean;
  current_snapshot_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_context?: (ElevenLabsFullApiSchemaGenerationSourceContext | ElevenLabsFullApiSchemaJsonValue);
  analysis?: (ElevenLabsFullApiSchemaVideoAnalysis | ElevenLabsFullApiSchemaJsonValue);
  transcription?: (ElevenLabsFullApiSchemaAssetTranscription | ElevenLabsFullApiSchemaJsonValue);
  type?: "video";
  canvas_placement?: ElevenLabsFullApiSchemaCanvasPlacement;
  animation?: ElevenLabsFullApiSchemaClipAnimation;
  playback_speed?: number;
  opacity?: number;
  track_id?: string;
  preview_job_progress: number;
  import_speech_progress: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaProjectExternalAudioResponseModel = {
  external_audio_id: string;
  filename: string;
  signed_url: (string | ElevenLabsFullApiSchemaJsonValue);
  offset_ms: number;
  duration_ms: number;
  start_time_ms: number;
  end_time_ms: (number | ElevenLabsFullApiSchemaJsonValue);
  order: string;
  track_id: string;
  created_at_ms: number;
  updated_at_ms: number;
  volume_gain_db?: number;
  muted?: boolean;
  fade_in_ms?: number;
  fade_out_ms?: number;
  source_external_audio_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_asset_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_platform_asset_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  pending_blocks_metadata?: (ElevenLabsFullApiSchemaPendingBlocksMetadataModel | ElevenLabsFullApiSchemaJsonValue);
  pending_external_audios_metadata?: (ElevenLabsFullApiSchemaPendingExternalAudiosMetadataModel | ElevenLabsFullApiSchemaJsonValue);
  speech_imported?: boolean;
  pending_task?: (ElevenLabsFullApiSchemaPendingClipTask | ElevenLabsFullApiSchemaJsonValue);
  error?: (string | ElevenLabsFullApiSchemaJsonValue);
  current_snapshot_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_context?: ((ElevenLabsFullApiSchemaSongSourceContext | ElevenLabsFullApiSchemaMusicExploreSongSourceContext | ElevenLabsFullApiSchemaSfxSourceContext) | ElevenLabsFullApiSchemaJsonValue);
  analysis?: (ElevenLabsFullApiSchemaAudioAnalysis | ElevenLabsFullApiSchemaJsonValue);
  transcription?: (ElevenLabsFullApiSchemaAssetTranscription | ElevenLabsFullApiSchemaJsonValue);
  type?: "audio";
  import_speech_progress: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaProjectImageResponseModel = {
  image_id: string;
  filename: string;
  signed_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  thumbnail_signed_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  type?: "image";
  source?: "upload";
  file_size_bytes: number;
  width: number;
  height: number;
  track_id?: string;
  offset_ms: number;
  duration_ms: number;
  order: string;
  canvas_placement: ElevenLabsFullApiSchemaCanvasPlacement;
  animation?: ElevenLabsFullApiSchemaClipAnimation;
  opacity?: number;
  created_at_ms: number;
  updated_at_ms: number;
  current_snapshot_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_asset_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_platform_asset_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  error?: (string | ElevenLabsFullApiSchemaJsonValue);
  pending_task?: (ElevenLabsFullApiSchemaPendingClipTask | ElevenLabsFullApiSchemaJsonValue);
  analysis?: (ElevenLabsFullApiSchemaImageAnalysis | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaProjectVoiceResponseModel = {
  project_voice_ref_id: string;
  voice_id: string;
  alias: string;
  stability: number;
  similarity_boost: number;
  style: number;
  is_pinned: boolean;
  use_speaker_boost: boolean;
  volume_gain: number;
  speed: number;
};

export type ElevenLabsFullApiSchemaDirectPublishingReadResponseModel = {
  read_id: string;
  created_at_unix: number;
  updated_at_unix: number;
  word_count: number;
  char_count: number;
  chapters: ReadonlyArray<ElevenLabsFullApiSchemaReadMetadataChapterDBModel>;
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  author?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  article_image_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  locale?: (string | ElevenLabsFullApiSchemaJsonValue);
  display_mode?: ("text" | "audio-only" | "text-with-audio" | ElevenLabsFullApiSchemaJsonValue);
  genre?: (ReadonlyArray<"Fantasy" | "Romance" | "Science Fiction" | "Mystery and Thriller" | "Action and Adventure" | "Dystopia" | "Business and Economics" | "Technology" | "Christian & Inspirational" | "Horror" | "Biography and Memoir" | "Education and Learning" | "History" | "Children's Literature" | "Young Adult" | "Fairy Tales and Folklore" | "Fan Fiction" | "General Fiction" | "Health and Wellness" | "Historical Fiction" | "Humor" | "Literary Classics" | "Philosophy" | "Poetry" | "Politics and Government" | "Psychology" | "Science and Nature" | "Self-Help" | "Spirituality and Religion" | "Travel" | "True Crime" | "Other"> | ElevenLabsFullApiSchemaJsonValue);
  fiction?: (string | ElevenLabsFullApiSchemaJsonValue);
  content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  original_file_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  target_audience?: ("children" | "young adult" | "adult" | "all ages" | ElevenLabsFullApiSchemaJsonValue);
  mature_content?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  safesearch_adult?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  origin?: (string | ElevenLabsFullApiSchemaJsonValue);
  publication_date?: (string | ElevenLabsFullApiSchemaJsonValue);
  isbn?: (string | ElevenLabsFullApiSchemaJsonValue);
  ean?: (string | ElevenLabsFullApiSchemaJsonValue);
  legal_terms?: (ElevenLabsFullApiSchemaReadLegalTerms | ElevenLabsFullApiSchemaJsonValue);
  content_guidelines_terms?: (ElevenLabsFullApiSchemaReadLegalTerms | ElevenLabsFullApiSchemaJsonValue);
  last_updated_from_project_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  publishing_project_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  publishing_state?: string;
  publisher_profile_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  quality_score?: (number | ElevenLabsFullApiSchemaJsonValue);
  publisher?: (string | ElevenLabsFullApiSchemaJsonValue);
  copyright?: (string | ElevenLabsFullApiSchemaJsonValue);
  subtitle?: (string | ElevenLabsFullApiSchemaJsonValue);
  distribution_territories?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  edition?: (string | ElevenLabsFullApiSchemaJsonValue);
  contributors?: (ReadonlyArray<ElevenLabsFullApiSchemaContributor> | ElevenLabsFullApiSchemaJsonValue);
  payout_type?: ("none" | "engagement_based" | "fixed_payout" | ElevenLabsFullApiSchemaJsonValue);
  list_price?: (number | ElevenLabsFullApiSchemaJsonValue);
  currency?: ("usd" | ElevenLabsFullApiSchemaJsonValue);
  original_audio_project_export_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  original_audio_document_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  series_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  volume?: (number | ElevenLabsFullApiSchemaJsonValue);
  published_at_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  read_slug?: (string | ElevenLabsFullApiSchemaJsonValue);
  preview_audio_object?: (ElevenLabsFullApiSchemaPreviewAudioDBModel | ElevenLabsFullApiSchemaJsonValue);
  sample_config?: (ElevenLabsFullApiSchemaSampleConfigDBModel | ElevenLabsFullApiSchemaJsonValue);
  review?: (ElevenLabsFullApiSchemaReviewResponseModel | ElevenLabsFullApiSchemaJsonValue);
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  can_use_assistant?: boolean;
  is_voice_changer_on?: boolean;
};

export type ElevenLabsFullApiSchemaProjectSnapshotResponseModel = {
  project_snapshot_id: string;
  project_id: string;
  created_at_unix: number;
  name: string;
  audio_upload?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  zip_upload?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCharacterAlignmentModel = {
  characters: ReadonlyArray<string>;
  character_start_times_seconds: ReadonlyArray<number>;
  character_end_times_seconds: ReadonlyArray<number>;
};

export type ElevenLabsFullApiSchemaChapterStatisticsResponseModel = {
  characters_unconverted: number;
  characters_converted: number;
  paragraphs_converted: number;
  paragraphs_unconverted: number;
  credits_needed_to_convert?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_statistics?: (ReadonlyArray<ElevenLabsFullApiSchemaVoiceStatisticsResponseModel> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaChapterContentResponseModel = {
  blocks: ReadonlyArray<ElevenLabsFullApiSchemaChapterContentBlockResponseModel>;
};

export type ElevenLabsFullApiSchemaChapterContentInputModel = {
  blocks: ReadonlyArray<ElevenLabsFullApiSchemaChapterContentBlockInputModel>;
};

export type ElevenLabsFullApiSchemaChapterSnapshotResponseModel = {
  chapter_snapshot_id: string;
  project_id: string;
  chapter_id: string;
  created_at_unix: number;
  name: string;
};

export type ElevenLabsFullApiSchemaDubbingMediaReference = {
  src: string;
  content_type: string;
  bucket_name: string;
  random_path_slug: string;
  duration_secs: number;
  is_audio: boolean;
  url: string;
};

export type ElevenLabsFullApiSchemaSpeakerTrack = {
  id: string;
  media_ref: ElevenLabsFullApiSchemaDubbingMediaReference;
  speaker_name: string;
  voices: {
  readonly [key: string]: string | undefined;
};
  segments: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaSpeakerSegment = {
  id: string;
  start_time: number;
  end_time: number;
  text: string;
  subtitles: ReadonlyArray<ElevenLabsFullApiSchemaSegmentSubtitleFrame>;
  dubs: {
  readonly [key: string]: ElevenLabsFullApiSchemaDubbedSegment | undefined;
};
};

export type ElevenLabsFullApiSchemaRender = {
  id: string;
  version: number;
  language: (string | ElevenLabsFullApiSchemaJsonValue);
  type: (ElevenLabsFullApiSchemaRenderType | ElevenLabsFullApiSchemaJsonValue);
  media_ref: (ElevenLabsFullApiSchemaDubbingMediaReference | ElevenLabsFullApiSchemaJsonValue);
  status: "complete" | "processing" | "failed";
};

export type ElevenLabsFullApiSchemaSimilarVoice = {
  voice_id: string;
  name: string;
  category: ElevenLabsFullApiSchemaVOICECATEGORY;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  preview_url?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRenderType = "mp4" | "aac" | "mp3" | "wav" | "aaf" | "tracks_zip" | "clips_zip" | "zip";

export type ElevenLabsFullApiSchemaDubbingMediaMetadata = {
  content_type: string;
  duration: number;
};

export type ElevenLabsFullApiSchemaDubbingTranscriptUtterance = {
  text?: string;
  speaker_id?: string;
  start_s?: number;
  end_s?: number;
  words?: ReadonlyArray<ElevenLabsFullApiSchemaDubbingTranscriptWord>;
};

export type ElevenLabsFullApiSchemaDubbingTranscript = {
  language: string;
  utterances: ReadonlyArray<ElevenLabsFullApiSchemaDubbingTranscriptUtterance>;
};

export type ElevenLabsFullApiSchemaLanguageResponseModel = {
  language_id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaModelRatesResponseModel = {
  character_cost_multiplier: number;
  cost_discount_multiplier?: number;
};

export type ElevenLabsFullApiSchemaAudioNativeProjectSettingsResponseModel = {
  title: string;
  image: string;
  author: string;
  small: boolean;
  text_color: string;
  background_color: string;
  sessionization: number;
  audio_path?: (string | ElevenLabsFullApiSchemaJsonValue);
  audio_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  status?: "processing" | "ready";
};

export type ElevenLabsFullApiSchemaLibraryVoiceResponseModel = {
  public_owner_id: string;
  voice_id: string;
  date_unix: number;
  name: string;
  accent: string;
  gender: string;
  age: string;
  descriptive: string;
  use_case: string;
  category: "generated" | "cloned" | "premade" | "professional" | "famous" | "high_quality";
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  locale?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  preview_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  usage_character_count_1y: number;
  usage_character_count_7d: number;
  play_api_usage_character_count_1y: number;
  cloned_by_count: number;
  rate?: (number | ElevenLabsFullApiSchemaJsonValue);
  fiat_rate?: (number | ElevenLabsFullApiSchemaJsonValue);
  free_users_allowed: boolean;
  live_moderation_enabled: boolean;
  featured: boolean;
  verified_languages?: (ReadonlyArray<ElevenLabsFullApiSchemaVerifiedVoiceLanguageResponseModel> | ElevenLabsFullApiSchemaJsonValue);
  notice_period?: (number | ElevenLabsFullApiSchemaJsonValue);
  instagram_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  twitter_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  youtube_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  tiktok_username?: (string | ElevenLabsFullApiSchemaJsonValue);
  image_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  is_added_by_user?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  is_bookmarked?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryAliasRuleRequestModel = {
  string_to_replace: string;
  case_sensitive?: boolean;
  word_boundaries?: boolean;
  type: "alias";
  alias: string;
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryPhonemeRuleRequestModel = {
  string_to_replace: string;
  case_sensitive?: boolean;
  word_boundaries?: boolean;
  type: "phoneme";
  phoneme: string;
  alphabet: string;
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryAliasRuleResponseModel = {
  string_to_replace: string;
  case_sensitive?: boolean;
  word_boundaries?: boolean;
  type: "alias";
  alias: string;
};

export type ElevenLabsFullApiSchemaPronunciationDictionaryPhonemeRuleResponseModel = {
  string_to_replace: string;
  case_sensitive?: boolean;
  word_boundaries?: boolean;
  type: "phoneme";
  phoneme: string;
  alphabet: string;
};

export type ElevenLabsFullApiSchemaWorkspaceApiKeyResponseModel = {
  name: string;
  hint: string;
  key_id: string;
  service_account_user_id: string;
  created_at_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  is_disabled?: boolean;
  permissions?: (ReadonlyArray<ElevenLabsFullApiSchemaPermissionType> | ElevenLabsFullApiSchemaJsonValue);
  disable_reason?: (ElevenLabsFullApiSchemaLockReason | ElevenLabsFullApiSchemaJsonValue);
  character_limit?: (number | ElevenLabsFullApiSchemaJsonValue);
  character_count?: (number | ElevenLabsFullApiSchemaJsonValue);
  hashed_xi_api_key: string;
  allowed_ips?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPermissionType = "text_to_speech" | "speech_to_speech" | "speech_to_text" | "models_read" | "models_write" | "voices_read" | "voices_write" | "speech_history_read" | "speech_history_write" | "sound_generation" | "audio_isolation" | "voice_generation" | "dubbing_read" | "dubbing_write" | "pronunciation_dictionaries_read" | "pronunciation_dictionaries_write" | "user_read" | "user_write" | "projects_read" | "projects_write" | "audio_native_read" | "audio_native_write" | "workspace_read" | "workspace_write" | "forced_alignment" | "convai_read" | "convai_write" | "music_generation" | "image_video_generation" | "add_voice_from_voice_library" | "create_instant_voice_clone" | "create_professional_voice_clone" | "publish_voice_to_voice_library" | "share_voice_externally" | "create_user_api_key" | "workspace_analytics_full_read" | "webhooks_write" | "service_account_write" | "group_members_manage" | "workspace_members_read" | "workspace_members_invite" | "workspace_members_remove" | "terms_of_service_accept" | "audit_log_read" | "copy_resources_cross_workspace";

export type ElevenLabsFullApiSchemaWorkspaceAuditLogEntryResponse = {
  metadata?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  time?: number;
  activity_id: (ElevenLabsFullApiSchemaAccountChangeActivityId | ElevenLabsFullApiSchemaAuthenticationActivityId | ElevenLabsFullApiSchemaEntityManagementActivityId | ElevenLabsFullApiSchemaUserAccessManagementActivityId | ElevenLabsFullApiSchemaGroupManagementActivityId);
  activity_name: string;
  category_name?: string;
  category_uid?: number;
  class_name?: string;
  class_uid?: number;
  severity_id?: ElevenLabsFullApiSchemaSeverityId;
  status_id: ElevenLabsFullApiSchemaStatusId;
  actor: ElevenLabsFullApiSchemaActorModel;
  device?: (ElevenLabsFullApiSchemaDeviceModel | ElevenLabsFullApiSchemaJsonValue);
  http_request?: (ElevenLabsFullApiSchemaHttpRequestModel | ElevenLabsFullApiSchemaJsonValue);
  message: string;
  unmapped?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  id: string;
  time_dt: string;
  type_uid: number;
  type_name: string;
};

export type ElevenLabsFullApiSchemaAuthConnectionDependencies = {
  tools?: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableToolIdentifier | ElevenLabsFullApiSchemaDependentUnknownToolIdentifier)>;
  mcp_servers?: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableMCPServerIdentifier | ElevenLabsFullApiSchemaDependentUnknownMCPServerIdentifier)>;
  integration_connections?: ReadonlyArray<ElevenLabsFullApiSchemaDependentIntegrationConnectionIdentifier>;
};

export type ElevenLabsFullApiSchemaOAuthConnectionStatus = "active" | "refresh_failed" | "revoked";

export type ElevenLabsFullApiSchemaWorkspaceServiceAccountResponseModel = {
  service_account_user_id: string;
  name: string;
  created_at_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  "api-keys": ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceApiKeyResponseModel>;
  default_sharing_groups?: ReadonlyArray<ElevenLabsFullApiSchemaDefaultSharingGroupResponseModel>;
};

export type ElevenLabsFullApiSchemaWorkspaceGroupPermission = "text_to_speech" | "speech_to_speech" | "speech_to_text" | "voice_lab" | "sound_effects" | "projects" | "voiceover_studio" | "dubbing" | "audio_native" | "conversational_ai" | "conversational_ai_read" | "voice_isolator" | "ai_speech_classifier" | "add_voice_from_voice_library" | "create_instant_voice_clone" | "create_professional_voice_clone" | "create_user_api_key" | "publish_studio_project" | "music" | "image_video_generation" | "share_voice_externally" | "publish_voice_to_voice_library" | "view_fiat_balance" | "workspace_analytics_full_read" | "service_accounts_manage" | "webhooks_manage" | "group_members_manage" | "workspace_members_invite" | "workspace_members_remove" | "terms_of_service_accept" | "audit_log_read" | "copy_resources_cross_workspace" | "voice_design";

export type ElevenLabsFullApiSchemaShareOptionResponseModel = {
  name: string;
  id: string;
  type: "user" | "group" | "key";
};

export type ElevenLabsFullApiSchemaWorkspaceWebhookResponseModel = {
  name: string;
  webhook_id: string;
  webhook_url: string;
  is_disabled: boolean;
  is_auto_disabled: boolean;
  created_at_unix: number;
  auth_type: ElevenLabsFullApiSchemaWebhookAuthMethodType;
  usage?: (ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceWebhookUsageResponseModel> | ElevenLabsFullApiSchemaJsonValue);
  most_recent_failure_error_code?: (number | ElevenLabsFullApiSchemaJsonValue);
  most_recent_failure_timestamp?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWebhookHMACSettings = {
  auth_type: "hmac";
  name: string;
  webhook_url: string;
  request_headers?: ({
  readonly [key: string]: string | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAdditionalFormats = ReadonlyArray<ElevenLabsFullApiSchemaExportOptions>;

export type ElevenLabsFullApiSchemaSpeechToTextWordResponseModel = {
  text: string;
  start?: (number | ElevenLabsFullApiSchemaJsonValue);
  end?: (number | ElevenLabsFullApiSchemaJsonValue);
  type: "word" | "spacing" | "audio_event";
  speaker_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  logprob: number;
  characters?: (ReadonlyArray<ElevenLabsFullApiSchemaSpeechToTextCharacterResponseModel> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAdditionalFormatResponseModel = {
  requested_format: string;
  file_extension: string;
  content_type: string;
  is_base64_encoded: boolean;
  content: string;
};

export type ElevenLabsFullApiSchemaDetectedEntity = {
  text: string;
  entity_type: string;
  start_char: number;
  end_char: number;
};

export type ElevenLabsFullApiSchemaForcedAlignmentCharacterResponseModel = {
  text: string;
  start: number;
  end: number;
};

export type ElevenLabsFullApiSchemaForcedAlignmentWordResponseModel = {
  text: string;
  start: number;
  end: number;
  loss: number;
};

export type ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput = {
  conversation_config_override?: ElevenLabsFullApiSchemaConversationConfigClientOverrideInput;
  custom_llm_extra_body?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_info?: ElevenLabsFullApiSchemaConversationInitiationSourceInfo;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  starting_workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
};

export type ElevenLabsFullApiSchemaTelephonyCallConfig = {
  ringing_timeout_secs?: number;
};

export type ElevenLabsFullApiSchemaTelephonyDirection = "inbound" | "outbound";

export type ElevenLabsFullApiSchemaWhatsAppTemplateHeaderComponentParams = {
  type?: "header";
  parameters: ReadonlyArray<(ElevenLabsFullApiSchemaWhatsAppTemplateTextParam | ElevenLabsFullApiSchemaWhatsAppTemplateImageParam | ElevenLabsFullApiSchemaWhatsAppTemplateDocumentParam | ElevenLabsFullApiSchemaWhatsAppTemplateLocationParam)>;
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateBodyComponentParams = {
  type?: "body";
  parameters: ReadonlyArray<ElevenLabsFullApiSchemaWhatsAppTemplateTextParam>;
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateButtonComponentParams = {
  type?: "button";
  parameters: ReadonlyArray<ElevenLabsFullApiSchemaWhatsAppTemplateTextParam>;
  index: number;
  sub_type: string;
};

export type ElevenLabsFullApiSchemaConversationalConfigAPIModelInput = {
  asr?: ElevenLabsFullApiSchemaASRConversationalConfig;
  turn?: ElevenLabsFullApiSchemaTurnConfig;
  tts?: ElevenLabsFullApiSchemaTTSConversationalConfigInput;
  conversation?: ElevenLabsFullApiSchemaConversationConfigInput;
  language_presets?: {
  readonly [key: string]: ElevenLabsFullApiSchemaLanguagePresetInput | undefined;
};
  vad?: ElevenLabsFullApiSchemaVADConfig;
  agent?: ElevenLabsFullApiSchemaAgentConfigAPIModelInput;
};

export type ElevenLabsFullApiSchemaAgentPlatformSettingsRequestModel = {
  evaluation?: ElevenLabsFullApiSchemaEvaluationSettingsInput;
  widget?: ElevenLabsFullApiSchemaWidgetConfigInput;
  data_collection?: {
  readonly [key: string]: ElevenLabsFullApiSchemaAnalysisProperty | undefined;
};
  data_collection_scopes?: {
  readonly [key: string]: ElevenLabsFullApiSchemaAnalysisScope | undefined;
};
  overrides?: ElevenLabsFullApiSchemaConversationInitiationClientDataConfigInput;
  workspace_overrides?: ElevenLabsFullApiSchemaAgentWorkspaceOverridesInput;
  testing?: ElevenLabsFullApiSchemaAgentTestingSettings;
  archived?: boolean;
  guardrails?: ElevenLabsFullApiSchemaGuardrailsV1Input;
  summary_language?: (string | ElevenLabsFullApiSchemaJsonValue);
  auth?: ElevenLabsFullApiSchemaAuthSettings;
  call_limits?: ElevenLabsFullApiSchemaAgentCallLimits;
  privacy?: ElevenLabsFullApiSchemaPrivacyConfigInput;
  trust_context?: ElevenLabsFullApiSchemaAgentTrustContext;
  analysis_llm?: ElevenLabsFullApiSchemaLLM;
  topic_discovery?: ElevenLabsFullApiSchemaTopicDiscoverySettings;
};

export type ElevenLabsFullApiSchemaAgentWorkflowRequestModel = {
  edges?: {
  readonly [key: string]: ElevenLabsFullApiSchemaWorkflowEdgeModelInput | undefined;
};
  nodes?: {
  readonly [key: string]: (ElevenLabsFullApiSchemaWorkflowStartNodeModelInput | ElevenLabsFullApiSchemaWorkflowEndNodeModelInput | ElevenLabsFullApiSchemaWorkflowPhoneNumberNodeModelInput | ElevenLabsFullApiSchemaWorkflowOverrideAgentNodeModelInput | ElevenLabsFullApiSchemaWorkflowStandaloneAgentNodeModelInput | ElevenLabsFullApiSchemaWorkflowToolNodeModelInput) | undefined;
};
  prevent_subagent_loops?: boolean;
};

export type ElevenLabsFullApiSchemaAgentSummaryResponseModel = {
  agent_id: string;
  name: string;
  tags: ReadonlyArray<string>;
  created_at_unix_secs: number;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  last_call_time_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  archived?: boolean;
};

export type ElevenLabsFullApiSchemaConversationalConfigAPIModelOutput = {
  asr?: ElevenLabsFullApiSchemaASRConversationalConfig;
  turn?: ElevenLabsFullApiSchemaTurnConfig;
  tts?: ElevenLabsFullApiSchemaTTSConversationalConfigOutput;
  conversation?: ElevenLabsFullApiSchemaConversationConfigOutput;
  language_presets?: {
  readonly [key: string]: ElevenLabsFullApiSchemaLanguagePresetOutput | undefined;
};
  vad?: ElevenLabsFullApiSchemaVADConfig;
  agent?: ElevenLabsFullApiSchemaAgentConfigAPIModelOutput;
};

export type ElevenLabsFullApiSchemaAgentMetadataResponseModel = {
  created_at_unix_secs: number;
  updated_at_unix_secs: number;
};

export type ElevenLabsFullApiSchemaAgentPlatformSettingsResponseModel = {
  evaluation?: ElevenLabsFullApiSchemaEvaluationSettingsOutput;
  widget?: ElevenLabsFullApiSchemaWidgetConfigOutput;
  data_collection?: {
  readonly [key: string]: ElevenLabsFullApiSchemaAnalysisProperty | undefined;
};
  data_collection_scopes?: {
  readonly [key: string]: ElevenLabsFullApiSchemaAnalysisScope | undefined;
};
  overrides?: ElevenLabsFullApiSchemaConversationInitiationClientDataConfigOutput;
  workspace_overrides?: ElevenLabsFullApiSchemaAgentWorkspaceOverridesOutput;
  testing?: ElevenLabsFullApiSchemaAgentTestingSettings;
  archived?: boolean;
  guardrails?: ElevenLabsFullApiSchemaGuardrailsV1Output;
  summary_language?: (string | ElevenLabsFullApiSchemaJsonValue);
  auth?: ElevenLabsFullApiSchemaAuthSettings;
  call_limits?: ElevenLabsFullApiSchemaAgentCallLimits;
  privacy?: ElevenLabsFullApiSchemaPrivacyConfigOutput;
  trust_context?: ElevenLabsFullApiSchemaAgentTrustContext;
  analysis_llm?: ElevenLabsFullApiSchemaLLM;
  topic_discovery?: ElevenLabsFullApiSchemaTopicDiscoverySettings;
  safety?: ElevenLabsFullApiSchemaSafetyResponseModel;
};

export type ElevenLabsFullApiSchemaAgentWorkflowResponseModel = {
  edges: {
  readonly [key: string]: ElevenLabsFullApiSchemaWorkflowEdgeModelOutput | undefined;
};
  nodes: {
  readonly [key: string]: (ElevenLabsFullApiSchemaWorkflowStartNodeModelOutput | ElevenLabsFullApiSchemaWorkflowEndNodeModelOutput | ElevenLabsFullApiSchemaWorkflowPhoneNumberNodeModelOutput | ElevenLabsFullApiSchemaWorkflowOverrideAgentNodeModelOutput | ElevenLabsFullApiSchemaWorkflowStandaloneAgentNodeModelOutput | ElevenLabsFullApiSchemaWorkflowToolNodeModelOutput) | undefined;
};
  prevent_subagent_loops: boolean;
};

export type ElevenLabsFullApiSchemaResourceAccessInfo = {
  is_creator: boolean;
  creator_name: string;
  creator_email: string;
  role: "admin" | "editor" | "commenter" | "viewer";
  anonymous_access_level_override?: ("admin" | "editor" | "commenter" | "viewer" | ElevenLabsFullApiSchemaJsonValue);
  access_source?: ("creator" | "explicit" | "workspace_admin" | "workspace_default" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWidgetConfigResponseModel = {
  variant?: ElevenLabsFullApiSchemaEmbedVariant;
  placement?: ElevenLabsFullApiSchemaWidgetPlacement;
  expandable?: ElevenLabsFullApiSchemaWidgetExpandable;
  avatar?: (ElevenLabsFullApiSchemaOrbAvatar | ElevenLabsFullApiSchemaURLAvatar | ElevenLabsFullApiSchemaImageAvatar);
  feedback_mode?: ElevenLabsFullApiSchemaWidgetFeedbackMode;
  end_feedback?: (ElevenLabsFullApiSchemaWidgetEndFeedbackConfig | ElevenLabsFullApiSchemaJsonValue);
  bg_color?: string;
  text_color?: string;
  btn_color?: string;
  btn_text_color?: string;
  border_color?: string;
  focus_color?: string;
  border_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  btn_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  action_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  start_call_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  end_call_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  expand_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  listening_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  speaking_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  shareable_page_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  shareable_page_show_terms?: boolean;
  terms_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_html?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_key?: (string | ElevenLabsFullApiSchemaJsonValue);
  show_avatar_when_collapsed?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  disable_banner?: boolean;
  override_link?: (string | ElevenLabsFullApiSchemaJsonValue);
  markdown_link_allowed_hosts?: ReadonlyArray<ElevenLabsFullApiSchemaAllowlistItem>;
  markdown_link_include_www?: boolean;
  markdown_link_allow_http?: boolean;
  mic_muting_enabled?: boolean;
  transcript_enabled?: boolean;
  text_input_enabled?: boolean;
  conversation_mode_toggle_enabled?: boolean;
  default_expanded?: boolean;
  always_expanded?: boolean;
  dismissible?: boolean;
  show_agent_status?: boolean;
  show_conversation_id?: boolean;
  strip_audio_tags?: boolean;
  syntax_highlight_theme?: ("light" | "dark" | ElevenLabsFullApiSchemaJsonValue);
  text_contents?: ElevenLabsFullApiSchemaWidgetTextContents;
  styles?: ElevenLabsFullApiSchemaWidgetStyles;
  language: string;
  supported_language_overrides?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  language_presets?: {
  readonly [key: string]: ElevenLabsFullApiSchemaWidgetLanguagePresetResponse | undefined;
};
  text_only?: boolean;
  supports_text_only?: boolean;
  first_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  use_rtc?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  file_input_config?: ElevenLabsFullApiSchemaFileInputConfig;
};

export type ElevenLabsFullApiSchemaConversationTokenResponseModel = {
  agent_id: string;
  conversation_token: string;
  expiration_time_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  conversation_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  purpose: ElevenLabsFullApiSchemaConversationTokenPurpose;
  token_requester_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLLMUsageCalculatorLLMResponseModel = {
  llm: ElevenLabsFullApiSchemaLLM;
  price_per_minute: number;
};

export type ElevenLabsFullApiSchemaConversationSimulationSpecification = {
  simulated_user_config: ElevenLabsFullApiSchemaAgentConfigAPIModelInput;
  tool_mock_config?: {
  readonly [key: string]: ElevenLabsFullApiSchemaToolMockConfig | undefined;
};
  partial_conversation_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
};

export type ElevenLabsFullApiSchemaPromptEvaluationCriteria = {
  id: string;
  name: string;
  type?: "prompt";
  conversation_goal_prompt: string;
  use_knowledge_base?: boolean;
  scope?: ElevenLabsFullApiSchemaAnalysisScope;
  llm?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptResponseModel = {
  role: "user" | "agent";
  agent_metadata?: (ElevenLabsFullApiSchemaAgentMetadata | ElevenLabsFullApiSchemaJsonValue);
  message?: (string | ElevenLabsFullApiSchemaJsonValue);
  multivoice_message?: (ElevenLabsFullApiSchemaConversationHistoryMultivoiceMessageModel | ElevenLabsFullApiSchemaJsonValue);
  tool_calls?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallCommonModelOutput>;
  tool_results?: ReadonlyArray<(ElevenLabsFullApiSchemaConversationHistoryTranscriptOtherToolsResultCommonModel | ElevenLabsFullApiSchemaConversationHistoryTranscriptSystemToolResultCommonModelOutput | ElevenLabsFullApiSchemaConversationHistoryTranscriptApiIntegrationWebhookToolsResultCommonModelOutput | ElevenLabsFullApiSchemaConversationHistoryTranscriptWorkflowToolsResultCommonModelOutput)>;
  feedback?: (ElevenLabsFullApiSchemaUserFeedback | ElevenLabsFullApiSchemaJsonValue);
  llm_override?: (string | ElevenLabsFullApiSchemaJsonValue);
  time_in_call_secs: number;
  conversation_turn_metrics?: (ElevenLabsFullApiSchemaConversationTurnMetrics | ElevenLabsFullApiSchemaJsonValue);
  rag_retrieval_info?: (ElevenLabsFullApiSchemaRagRetrievalInfo | ElevenLabsFullApiSchemaJsonValue);
  llm_usage?: (ElevenLabsFullApiSchemaLLMUsageOutput | ElevenLabsFullApiSchemaJsonValue);
  interrupted?: boolean;
  original_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_medium?: (ElevenLabsFullApiSchemaChatSourceMedium | ElevenLabsFullApiSchemaJsonValue);
  source_event_id?: (number | ElevenLabsFullApiSchemaJsonValue);
  used_static_kb_document_ids?: ReadonlyArray<string>;
  user_identifier?: (string | ElevenLabsFullApiSchemaJsonValue);
  file_input?: (ElevenLabsFullApiSchemaConversationHistoryTranscriptFileInputResponseModel | ElevenLabsFullApiSchemaJsonValue);
  contextual_update_info?: (ElevenLabsFullApiSchemaContextualUpdateInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryAnalysisCommonModel = {
  evaluation_criteria_results?: {
  readonly [key: string]: ElevenLabsFullApiSchemaConversationHistoryEvaluationCriteriaResultCommonModel | undefined;
};
  data_collection_results?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDataCollectionResultCommonModel | undefined;
};
  evaluation_criteria_results_list?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryEvaluationCriteriaResultCommonModel>;
  data_collection_results_list?: ReadonlyArray<ElevenLabsFullApiSchemaDataCollectionResultCommonModel>;
  call_successful: ElevenLabsFullApiSchemaEvaluationSuccessResult;
  transcript_summary: string;
  call_summary_title?: (string | ElevenLabsFullApiSchemaJsonValue);
  scoped?: ReadonlyArray<ElevenLabsFullApiSchemaScopedAnalysisResult>;
};

export type ElevenLabsFullApiSchemaTestFromConversationMetadataInput = {
  conversation_id: string;
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  original_agent_reply?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput>;
};

export type ElevenLabsFullApiSchemaDynamicVariableValueTypeInput = (string | number | number | boolean | ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableNestedValueTypeInput> | ElevenLabsFullApiSchemaJsonValue);

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelInput = {
  role: "user" | "agent";
  agent_metadata?: (ElevenLabsFullApiSchemaAgentMetadata | ElevenLabsFullApiSchemaJsonValue);
  message?: (string | ElevenLabsFullApiSchemaJsonValue);
  multivoice_message?: (ElevenLabsFullApiSchemaConversationHistoryMultivoiceMessageModel | ElevenLabsFullApiSchemaJsonValue);
  tool_calls?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallCommonModelInput>;
  tool_results?: ReadonlyArray<(ElevenLabsFullApiSchemaConversationHistoryTranscriptOtherToolsResultCommonModel | ElevenLabsFullApiSchemaConversationHistoryTranscriptSystemToolResultCommonModelInput | ElevenLabsFullApiSchemaConversationHistoryTranscriptApiIntegrationWebhookToolsResultCommonModelInput | ElevenLabsFullApiSchemaConversationHistoryTranscriptWorkflowToolsResultCommonModelInput)>;
  feedback?: (ElevenLabsFullApiSchemaUserFeedback | ElevenLabsFullApiSchemaJsonValue);
  llm_override?: (string | ElevenLabsFullApiSchemaJsonValue);
  time_in_call_secs: number;
  conversation_turn_metrics?: (ElevenLabsFullApiSchemaConversationTurnMetrics | ElevenLabsFullApiSchemaJsonValue);
  rag_retrieval_info?: (ElevenLabsFullApiSchemaRagRetrievalInfo | ElevenLabsFullApiSchemaJsonValue);
  llm_usage?: (ElevenLabsFullApiSchemaLLMUsageInput | ElevenLabsFullApiSchemaJsonValue);
  interrupted?: boolean;
  original_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_medium?: (ElevenLabsFullApiSchemaChatSourceMedium | ElevenLabsFullApiSchemaJsonValue);
  source_event_id?: (number | ElevenLabsFullApiSchemaJsonValue);
  used_static_kb_document_ids?: ReadonlyArray<string>;
  user_identifier?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentSuccessfulResponseExample = {
  response: string;
  type: "success";
};

export type ElevenLabsFullApiSchemaAgentFailureResponseExample = {
  response: string;
  type: "failure";
};

export type ElevenLabsFullApiSchemaUnitTestToolCallEvaluationModelInput = {
  parameters?: ReadonlyArray<ElevenLabsFullApiSchemaUnitTestToolCallParameter>;
  referenced_tool?: (ElevenLabsFullApiSchemaReferencedToolCommonModel | ElevenLabsFullApiSchemaJsonValue);
  verify_absence?: boolean;
  workflow_node_transition?: (ElevenLabsFullApiSchemaUnitTestWorkflowNodeTransitionEvaluationNodeId | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSimulationToolMockBehaviorConfig = {
  mocking_strategy?: ElevenLabsFullApiSchemaMockingStrategy;
  fallback_strategy?: ElevenLabsFullApiSchemaMockNoMatchBehavior;
  mocked_tool_ids?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaLLM = "gpt-4o-mini" | "gpt-4o" | "gpt-4" | "gpt-4-turbo" | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-5" | "gpt-5.1" | "gpt-5.2" | "gpt-5.2-chat-latest" | "gpt-5.4" | "gpt-5.4-mini" | "gpt-5.4-nano" | "gpt-5.5" | "gpt-5-mini" | "gpt-5-nano" | "gpt-3.5-turbo" | "gemini-1.5-pro" | "gemini-1.5-flash" | "gemini-2.0-flash" | "gemini-2.0-flash-lite" | "gemini-2.5-flash-lite" | "gemini-2.5-flash" | "gemini-3-pro-preview" | "gemini-3-flash-preview" | "gemini-3.1-pro-preview" | "gemini-3.1-flash-lite-preview" | "gemini-3.1-flash-lite" | "gemini-3.5-flash" | "claude-sonnet-4-5" | "claude-opus-4-7" | "claude-sonnet-4-6" | "claude-sonnet-4" | "claude-haiku-4-5" | "claude-3-7-sonnet" | "claude-3-5-sonnet" | "claude-3-5-sonnet-v1" | "claude-3-haiku" | "grok-beta" | "custom-llm" | "qwen3-4b" | "qwen3-30b-a3b" | "qwen36-35b-a3b" | "qwen35-397b-a17b" | "gpt-oss-20b" | "gpt-oss-120b" | "glm-45-air-fp8" | "gemini-2.5-flash-preview-09-2025" | "gemini-2.5-flash-lite-preview-09-2025" | "gemini-2.5-flash-preview-05-20" | "gemini-2.5-flash-preview-04-17" | "gemini-2.5-flash-lite-preview-06-17" | "gemini-2.0-flash-lite-001" | "gemini-2.0-flash-001" | "gemini-1.5-flash-002" | "gemini-1.5-flash-001" | "gemini-1.5-pro-002" | "gemini-1.5-pro-001" | "claude-sonnet-4@20250514" | "claude-sonnet-4-5@20250929" | "claude-haiku-4-5@20251001" | "claude-3-7-sonnet@20250219" | "claude-3-5-sonnet@20240620" | "claude-3-5-sonnet-v2@20241022" | "claude-3-haiku@20240307" | "gpt-5-2025-08-07" | "gpt-5.1-2025-11-13" | "gpt-5.2-2025-12-11" | "gpt-5.4-2026-03-05" | "gpt-5.4-mini-2026-03-17" | "gpt-5.4-nano-2026-03-17" | "gpt-5.5-2026-04-23" | "gpt-5-mini-2025-08-07" | "gpt-5-nano-2025-08-07" | "gpt-4.1-2025-04-14" | "gpt-4.1-mini-2025-04-14" | "gpt-4.1-nano-2025-04-14" | "gpt-4o-mini-2024-07-18" | "gpt-4o-2024-11-20" | "gpt-4o-2024-08-06" | "gpt-4o-2024-05-13" | "gpt-4-0613" | "gpt-4-0314" | "gpt-4-turbo-2024-04-09" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-1106" | "watt-tool-8b" | "watt-tool-70b";

export type ElevenLabsFullApiSchemaAgentTestFolderPathSegmentResponseModel = {
  id: string;
  name?: string;
};

export type ElevenLabsFullApiSchemaTestFromConversationMetadataOutput = {
  conversation_id: string;
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  original_agent_reply?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput>;
};

export type ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput = (string | number | number | boolean | ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableNestedValueTypeOutput> | ElevenLabsFullApiSchemaJsonValue);

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput = {
  role: "user" | "agent";
  agent_metadata?: (ElevenLabsFullApiSchemaAgentMetadata | ElevenLabsFullApiSchemaJsonValue);
  message?: (string | ElevenLabsFullApiSchemaJsonValue);
  multivoice_message?: (ElevenLabsFullApiSchemaConversationHistoryMultivoiceMessageModel | ElevenLabsFullApiSchemaJsonValue);
  tool_calls?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallCommonModelOutput>;
  tool_results?: ReadonlyArray<(ElevenLabsFullApiSchemaConversationHistoryTranscriptOtherToolsResultCommonModel | ElevenLabsFullApiSchemaConversationHistoryTranscriptSystemToolResultCommonModelOutput | ElevenLabsFullApiSchemaConversationHistoryTranscriptApiIntegrationWebhookToolsResultCommonModelOutput | ElevenLabsFullApiSchemaConversationHistoryTranscriptWorkflowToolsResultCommonModelOutput)>;
  feedback?: (ElevenLabsFullApiSchemaUserFeedback | ElevenLabsFullApiSchemaJsonValue);
  llm_override?: (string | ElevenLabsFullApiSchemaJsonValue);
  time_in_call_secs: number;
  conversation_turn_metrics?: (ElevenLabsFullApiSchemaConversationTurnMetrics | ElevenLabsFullApiSchemaJsonValue);
  rag_retrieval_info?: (ElevenLabsFullApiSchemaRagRetrievalInfo | ElevenLabsFullApiSchemaJsonValue);
  llm_usage?: (ElevenLabsFullApiSchemaLLMUsageOutput | ElevenLabsFullApiSchemaJsonValue);
  interrupted?: boolean;
  original_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_medium?: (ElevenLabsFullApiSchemaChatSourceMedium | ElevenLabsFullApiSchemaJsonValue);
  source_event_id?: (number | ElevenLabsFullApiSchemaJsonValue);
  used_static_kb_document_ids?: ReadonlyArray<string>;
  user_identifier?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUnitTestToolCallEvaluationModelOutput = {
  parameters?: ReadonlyArray<ElevenLabsFullApiSchemaUnitTestToolCallParameter>;
  referenced_tool?: (ElevenLabsFullApiSchemaReferencedToolCommonModel | ElevenLabsFullApiSchemaJsonValue);
  verify_absence?: boolean;
  workflow_node_transition?: (ElevenLabsFullApiSchemaUnitTestWorkflowNodeTransitionEvaluationNodeId | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUnitTestSummaryResponseModel = {
  id: string;
  name: string;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
  created_at_unix_secs: number;
  last_updated_at_unix_secs: number;
  type: ElevenLabsFullApiSchemaTestType;
  entity_type?: ElevenLabsFullApiSchemaAgentTestEntityType;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaAgentTestFolderPathSegmentResponseModel>;
  children_count?: (number | ElevenLabsFullApiSchemaJsonValue);
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaListResponseMeta = {
  total?: (number | ElevenLabsFullApiSchemaJsonValue);
  page?: (number | ElevenLabsFullApiSchemaJsonValue);
  page_size?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTestInvocationSummaryResponseModel = {
  id: string;
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  created_at_unix_secs: number;
  test_run_count: number;
  passed_count: number;
  failed_count: number;
  pending_count: number;
  title: string;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
  repeat_count?: number;
};

export type ElevenLabsFullApiSchemaSingleTestRunRequestModel = {
  test_id: string;
  workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  root_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  root_folder_name?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAdhocAgentConfigOverrideForTestRequestModel = {
  conversation_config: ElevenLabsFullApiSchemaConversationalConfigAPIModelInput;
  platform_settings: ElevenLabsFullApiSchemaAgentPlatformSettingsRequestModel;
  workflow?: (ElevenLabsFullApiSchemaAgentWorkflowRequestModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBucketingStatus = "pending" | "completed" | "failed";

export type ElevenLabsFullApiSchemaTestRunResultSummary = {
  test_id: string;
  test_name: string;
  workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  buckets: ReadonlyArray<ElevenLabsFullApiSchemaTestRunResultBucket>;
};

export type ElevenLabsFullApiSchemaUnitTestRunResponseModel = {
  test_run_id: string;
  test_info?: ((ElevenLabsFullApiSchemaResponseUnitTestModel | ElevenLabsFullApiSchemaToolCallUnitTestModel | ElevenLabsFullApiSchemaSimulationTestModel) | ElevenLabsFullApiSchemaJsonValue);
  test_invocation_id: string;
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  status: ElevenLabsFullApiSchemaTestRunStatus;
  agent_responses?: (ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput> | ElevenLabsFullApiSchemaJsonValue);
  test_id: string;
  test_name?: string;
  condition_result?: (ElevenLabsFullApiSchemaTestConditionResultCommonModel | ElevenLabsFullApiSchemaJsonValue);
  last_updated_at_unix?: number;
  metadata?: (ElevenLabsFullApiSchemaTestRunMetadata | ElevenLabsFullApiSchemaJsonValue);
  root_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  root_folder_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationSummaryResponseModel = {
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_id: string;
  start_time_unix_secs: number;
  call_duration_secs: number;
  message_count: number;
  status: "initiated" | "in-progress" | "processing" | "done" | "failed";
  termination_reason?: string;
  call_successful: ElevenLabsFullApiSchemaEvaluationSuccessResult;
  transcript_summary?: (string | ElevenLabsFullApiSchemaJsonValue);
  call_summary_title?: (string | ElevenLabsFullApiSchemaJsonValue);
  main_language?: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  tool_names?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  direction?: (ElevenLabsFullApiSchemaTelephonyDirection | ElevenLabsFullApiSchemaJsonValue);
  rating?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationUserResponseModel = {
  user_id: string;
  last_contact_unix_secs: number;
  first_contact_unix_secs: number;
  conversation_count: number;
  last_contact_agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  last_contact_conversation_id: string;
  last_contact_agent_name?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryMetadataCommonModel = {
  start_time_unix_secs: number;
  accepted_time_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_duration_secs: number;
  cost?: (number | ElevenLabsFullApiSchemaJsonValue);
  deletion_settings?: ElevenLabsFullApiSchemaConversationDeletionSettings;
  feedback?: ElevenLabsFullApiSchemaConversationHistoryFeedbackCommonModel;
  authorization_method?: ElevenLabsFullApiSchemaAuthorizationMethod;
  charging?: ElevenLabsFullApiSchemaConversationChargingCommonModel;
  phone_call?: ((ElevenLabsFullApiSchemaConversationHistoryTwilioPhoneCallModel | ElevenLabsFullApiSchemaConversationHistoryExotelPhoneCallModel | ElevenLabsFullApiSchemaConversationHistorySIPTrunkingPhoneCallModel) | ElevenLabsFullApiSchemaJsonValue);
  batch_call?: (ElevenLabsFullApiSchemaConversationHistoryBatchCallModel | ElevenLabsFullApiSchemaJsonValue);
  termination_reason?: string;
  error?: (ElevenLabsFullApiSchemaConversationHistoryErrorCommonModel | ElevenLabsFullApiSchemaJsonValue);
  warnings?: ReadonlyArray<string>;
  main_language?: (string | ElevenLabsFullApiSchemaJsonValue);
  rag_usage?: (ElevenLabsFullApiSchemaConversationHistoryRagUsageCommonModel | ElevenLabsFullApiSchemaJsonValue);
  text_only?: boolean;
  features_usage?: ElevenLabsFullApiSchemaFeaturesUsageCommonModel;
  eleven_assistant?: ElevenLabsFullApiSchemaConversationHistoryElevenAssistantCommonModel;
  initiator_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_initiation_source?: ElevenLabsFullApiSchemaConversationInitiationSource;
  conversation_initiation_source_version?: (string | ElevenLabsFullApiSchemaJsonValue);
  timezone?: (string | ElevenLabsFullApiSchemaJsonValue);
  async_metadata?: (ElevenLabsFullApiSchemaAsyncConversationMetadata | ElevenLabsFullApiSchemaJsonValue);
  whatsapp?: (ElevenLabsFullApiSchemaWhatsAppConversationInfo | ElevenLabsFullApiSchemaJsonValue);
  sms?: (ElevenLabsFullApiSchemaSMSConversationInfo | ElevenLabsFullApiSchemaJsonValue);
  agent_created_from?: ElevenLabsFullApiSchemaAgentDefinitionSource;
  agent_last_updated_from?: ElevenLabsFullApiSchemaAgentDefinitionSource;
  voice_rewards?: ReadonlyArray<ElevenLabsFullApiSchemaConversationVoiceRewardModel>;
};

export type ElevenLabsFullApiSchemaVisitedAgentRef = {
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationInitiationClientDataRequestOutput = {
  conversation_config_override?: ElevenLabsFullApiSchemaConversationConfigClientOverrideOutput;
  custom_llm_extra_body?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_info?: ElevenLabsFullApiSchemaConversationInitiationSourceInfo;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  starting_workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
};

export type ElevenLabsFullApiSchemaSIPLogMessage = {
  call_id: string;
  phone_numbers: ReadonlyArray<string>;
  local_address: string;
  remote_address: string;
  transport: string;
  raw_message: string;
  error_message: string;
  direction: ElevenLabsFullApiSchemaSIPLogMessageDirection;
  created_at_unix_micro: number;
};

export type ElevenLabsFullApiSchemaUserFeedbackScore = "like" | "dislike";

export type ElevenLabsFullApiSchemaMessagesSearchResult = {
  conversation_id: string;
  agent_id: string;
  agent_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  transcript_index: number;
  chunk_text: string;
  chunk_highlights?: (ReadonlyArray<ElevenLabsFullApiSchemaSearchHighlightSegment> | ElevenLabsFullApiSchemaJsonValue);
  score: number;
  conversation_start_time_unix_secs: number;
};

export type ElevenLabsFullApiSchemaRegionConfigRequest = {
  region_id: ElevenLabsFullApiSchemaTwilioRegionId;
  token: string;
  edge_location: ElevenLabsFullApiSchemaTwilioEdgeLocation;
};

export type ElevenLabsFullApiSchemaExotelApiSubdomain = "api.in.exotel.com" | "api.exotel.com";

export type ElevenLabsFullApiSchemaInboundSIPTrunkConfigRequestModel = {
  allowed_addresses?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  allowed_numbers?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  media_encryption?: ElevenLabsFullApiSchemaSIPMediaEncryptionEnum;
  credentials?: (ElevenLabsFullApiSchemaSIPTrunkCredentialsRequestModel | ElevenLabsFullApiSchemaJsonValue);
  remote_domains?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  attributes_to_headers?: {
  readonly [key: string]: string | undefined;
};
};

export type ElevenLabsFullApiSchemaOutboundSIPTrunkConfigRequestModel = {
  address: string;
  transport?: ElevenLabsFullApiSchemaSIPTrunkTransportEnum;
  media_encryption?: ElevenLabsFullApiSchemaSIPMediaEncryptionEnum;
  headers?: {
  readonly [key: string]: string | undefined;
};
  attributes_to_headers?: {
  readonly [key: string]: string | undefined;
};
  credentials?: (ElevenLabsFullApiSchemaSIPTrunkCredentialsRequestModel | ElevenLabsFullApiSchemaJsonValue);
  enabled_codecs?: ReadonlyArray<ElevenLabsFullApiSchemaMediaCodec>;
};

export type ElevenLabsFullApiSchemaPhoneNumberAgentInfo = {
  agent_id: string;
  agent_name: string;
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetPhoneNumberOutboundSIPTrunkConfigResponseModel = {
  address: string;
  transport: ElevenLabsFullApiSchemaSIPTrunkTransportEnum;
  media_encryption: ElevenLabsFullApiSchemaSIPMediaEncryptionEnum;
  headers?: {
  readonly [key: string]: string | undefined;
};
  attributes_to_headers?: {
  readonly [key: string]: string | undefined;
};
  has_auth_credentials: boolean;
  username?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_outbound_trunk?: boolean;
  enabled_codecs?: ReadonlyArray<ElevenLabsFullApiSchemaMediaCodec>;
};

export type ElevenLabsFullApiSchemaGetPhoneNumberInboundSIPTrunkConfigResponseModel = {
  allowed_addresses: ReadonlyArray<string>;
  allowed_numbers: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  media_encryption: ElevenLabsFullApiSchemaSIPMediaEncryptionEnum;
  has_auth_credentials: boolean;
  username?: (string | ElevenLabsFullApiSchemaJsonValue);
  remote_domains?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  attributes_to_headers?: {
  readonly [key: string]: string | undefined;
};
};

export type ElevenLabsFullApiSchemaLivekitStackType = "standard" | "static";

export type ElevenLabsFullApiSchemaLLMInfoModelInput = {
  llm: ElevenLabsFullApiSchemaLLM;
  is_checkpoint: boolean;
  max_tokens_limit: number;
  max_context_limit: number;
  supports_image_input: boolean;
  supports_document_input: boolean;
  supports_parallel_tool_calls: boolean;
  available_reasoning_efforts?: (ReadonlyArray<ElevenLabsFullApiSchemaLLMReasoningEffort> | ElevenLabsFullApiSchemaJsonValue);
  deprecation_info?: (ElevenLabsFullApiSchemaLLMDeprecationInfoModel | ElevenLabsFullApiSchemaJsonValue);
  regional_processing_surcharge?: (ElevenLabsFullApiSchemaRegionalProcessingSurchargeInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLLMDeprecationConfigModel = {
  warning_start_days: number;
  fallback_start_days: number;
  fallback_complete_days: number;
  fallback_start_percentage: number;
  fallback_complete_percentage: number;
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryURLResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentSummaryResponseModel>;
  dependent_agents: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  type: "url";
  url: string;
  auto_sync_info?: (ElevenLabsFullApiSchemaAutoSyncInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFileResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentSummaryResponseModel>;
  dependent_agents: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  type: "file";
  external_sync_info?: (ElevenLabsFullApiSchemaExternalFileSyncInfo | ElevenLabsFullApiSchemaJsonValue);
  is_frozen?: boolean;
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryTextResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentSummaryResponseModel>;
  dependent_agents: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  type: "text";
};

export type ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFolderResponseModel = {
  id: string;
  name: string;
  metadata: ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel;
  supported_usages: ReadonlyArray<ElevenLabsFullApiSchemaDocumentUsageModeEnum>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
  folder_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folder_path?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentSummaryResponseModel>;
  dependent_agents: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  type: "folder";
  children_count: number;
  auto_sync_info?: (ElevenLabsFullApiSchemaAutoSyncInfo | ElevenLabsFullApiSchemaJsonValue);
  external_sync_info?: (ElevenLabsFullApiSchemaExternalFolderSyncInfo | ElevenLabsFullApiSchemaJsonValue);
  is_frozen?: boolean;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentSummaryResponseModel = {
  id: string;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseDocumentMetadataResponseModel = {
  created_at_unix_secs: number;
  last_updated_at_unix_secs: number;
  size_bytes: number;
};

export type ElevenLabsFullApiSchemaDocumentUsageModeEnum = "prompt" | "auto";

export type ElevenLabsFullApiSchemaKnowledgeBaseFolderPathSegmentResponseModel = {
  id: string;
  name: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAutoSyncInfo = {
  minimum_frequency_days?: number;
  auto_remove?: boolean;
  consec_failures?: number;
  next_refresh_by?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaExternalFileSyncInfo = {
  type: ElevenLabsFullApiSchemaExternalSyncType;
  source_entity_id: string;
  integration_connection_id: string;
  source_parent_entity_id: string;
  source_mime_type: string;
  source_modified_time: string;
  root_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaExternalFolderSyncInfo = {
  type: ElevenLabsFullApiSchemaExternalSyncType;
  source_entity_id: string;
  integration_connection_id: string;
  root_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  sync_cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  last_sync_at?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGetOrCreateRAGIndexRequestModel = {
  document_id: string;
  create_if_missing: boolean;
  model: ElevenLabsFullApiSchemaEmbeddingModelEnum;
};

export type ElevenLabsFullApiSchemaRAGIndexOverviewEmbeddingModelResponseModel = {
  model: ElevenLabsFullApiSchemaEmbeddingModelEnum;
  used_bytes: number;
};

export type ElevenLabsFullApiSchemaRAGIndexStatus = "new" | "created" | "processing" | "failed" | "succeeded" | "rag_limit_exceeded" | "document_too_small" | "cannot_index_folder";

export type ElevenLabsFullApiSchemaRAGDocumentIndexUsage = {
  used_bytes: number;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseContentSearchResult = {
  document: (ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryURLResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFileResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryTextResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseSummaryFolderResponseModel);
  search_snippet?: (ReadonlyArray<ElevenLabsFullApiSchemaSearchHighlightSegment> | ElevenLabsFullApiSchemaJsonValue);
  score: number;
};

export type ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier = {
  referenced_resource_ids?: ReadonlyArray<string>;
  id: string;
  name: string;
  type?: "available";
  created_at_unix_secs: number;
  access_level: "admin" | "editor" | "commenter" | "viewer";
};

export type ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier = {
  referenced_resource_ids?: ReadonlyArray<string>;
  id: string;
  type?: "unknown";
};

export type ElevenLabsFullApiSchemaDependentBranchInfo = {
  agent_id: string;
  agent_name: string;
  branch_id: string;
  branch_name: string;
  is_main: boolean;
};

export type ElevenLabsFullApiSchemaAgentTopicResponseModel = {
  topic_id: string;
  label: string;
  description: string;
  conversation_count: number;
  parent_topic_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  x_2d?: (number | ElevenLabsFullApiSchemaJsonValue);
  y_2d?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWebhookToolConfigInput = {
  type?: "webhook";
  name: string;
  description: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  dynamic_variables?: ElevenLabsFullApiSchemaDynamicVariablesConfigInput;
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
  api_schema: ElevenLabsFullApiSchemaWebhookToolApiSchemaConfigInput;
};

export type ElevenLabsFullApiSchemaClientToolConfigInput = {
  type?: "client";
  name: string;
  description: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  parameters?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyInput | ElevenLabsFullApiSchemaJsonValue);
  expects_response?: boolean;
  dynamic_variables?: ElevenLabsFullApiSchemaDynamicVariablesConfigInput;
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
};

export type ElevenLabsFullApiSchemaSystemToolConfigInput = {
  type?: "system";
  name: string;
  description?: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  params: (ElevenLabsFullApiSchemaEndCallToolConfig | ElevenLabsFullApiSchemaLanguageDetectionToolConfig | ElevenLabsFullApiSchemaTransferToAgentToolConfig | ElevenLabsFullApiSchemaTransferToNumberToolConfigInput | ElevenLabsFullApiSchemaSkipTurnToolConfig | ElevenLabsFullApiSchemaPlayDTMFToolConfig | ElevenLabsFullApiSchemaVoicemailDetectionToolConfig | ElevenLabsFullApiSchemaKnowledgeBaseRagToolConfig | ElevenLabsFullApiSchemaStartProcedureToolConfigInput | ElevenLabsFullApiSchemaEndProcedureToolConfigInput);
};

export type ElevenLabsFullApiSchemaMCPToolConfigInput = {
  type?: "mcp";
  name: string;
  description: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  integration_type: ElevenLabsFullApiSchemaIntegrationType;
  parameters?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyInput | ElevenLabsFullApiSchemaJsonValue);
  approval_policy?: ElevenLabsFullApiSchemaMCPApprovalPolicy;
  mcp_tool_name: string;
  mcp_tool_description: string;
  mcp_server_id: string;
  mcp_server_name: string;
  mcp_input_schema?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
  input_overrides?: ({
  readonly [key: string]: (ElevenLabsFullApiSchemaConstantSchemaOverride | ElevenLabsFullApiSchemaDynamicVariableSchemaOverride | ElevenLabsFullApiSchemaLLMSchemaOverride | ElevenLabsFullApiSchemaOmitSchemaOverride) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaToolResponseMockConfigInput = {
  parameter_conditions?: ReadonlyArray<ElevenLabsFullApiSchemaUnitTestToolCallParameter>;
  mock_result: string;
};

export type ElevenLabsFullApiSchemaWebhookToolConfigOutput = {
  type?: "webhook";
  name: string;
  description: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  dynamic_variables?: ElevenLabsFullApiSchemaDynamicVariablesConfigOutput;
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
  api_schema: ElevenLabsFullApiSchemaWebhookToolApiSchemaConfigOutput;
};

export type ElevenLabsFullApiSchemaClientToolConfigOutput = {
  type?: "client";
  name: string;
  description: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  parameters?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyOutput | ElevenLabsFullApiSchemaJsonValue);
  expects_response?: boolean;
  dynamic_variables?: ElevenLabsFullApiSchemaDynamicVariablesConfigOutput;
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
};

export type ElevenLabsFullApiSchemaSystemToolConfigOutput = {
  type?: "system";
  name: string;
  description?: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  params: (ElevenLabsFullApiSchemaEndCallToolConfig | ElevenLabsFullApiSchemaLanguageDetectionToolConfig | ElevenLabsFullApiSchemaTransferToAgentToolConfig | ElevenLabsFullApiSchemaTransferToNumberToolConfigOutput | ElevenLabsFullApiSchemaSkipTurnToolConfig | ElevenLabsFullApiSchemaPlayDTMFToolConfig | ElevenLabsFullApiSchemaVoicemailDetectionToolConfig | ElevenLabsFullApiSchemaKnowledgeBaseRagToolConfig | ElevenLabsFullApiSchemaStartProcedureToolConfigOutput | ElevenLabsFullApiSchemaEndProcedureToolConfigOutput);
};

export type ElevenLabsFullApiSchemaMCPToolConfigOutput = {
  type?: "mcp";
  name: string;
  description: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  integration_type: ElevenLabsFullApiSchemaIntegrationType;
  parameters?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyOutput | ElevenLabsFullApiSchemaJsonValue);
  approval_policy?: ElevenLabsFullApiSchemaMCPApprovalPolicy;
  mcp_tool_name: string;
  mcp_tool_description: string;
  mcp_server_id: string;
  mcp_server_name: string;
  mcp_input_schema?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
  input_overrides?: ({
  readonly [key: string]: (ElevenLabsFullApiSchemaConstantSchemaOverride | ElevenLabsFullApiSchemaDynamicVariableSchemaOverride | ElevenLabsFullApiSchemaLLMSchemaOverride | ElevenLabsFullApiSchemaOmitSchemaOverride) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaToolUsageStatsResponseModel = {
  total_calls?: number;
  avg_latency_secs: number;
};

export type ElevenLabsFullApiSchemaToolResponseMockConfigOutput = {
  parameter_conditions?: ReadonlyArray<ElevenLabsFullApiSchemaUnitTestToolCallParameter>;
  mock_result: string;
};

export type ElevenLabsFullApiSchemaToolExecutionResponseModel = {
  tool_id: string;
  tool_request_id: string;
  conversation_id: string;
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  timestamp: number;
  latency_secs: number;
  is_error?: boolean;
  request_payload?: (string | ElevenLabsFullApiSchemaJsonValue);
  response_payload?: (string | ElevenLabsFullApiSchemaJsonValue);
  error_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  error_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  id: string;
  tool_call_details?: ((ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallWebhookDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallClientDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallMCPDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallApiIntegrationWebhookDetailsOutput) | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationInitiationClientDataWebhook = {
  url: string;
  request_headers: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator) | undefined;
};
};

export type ElevenLabsFullApiSchemaConvAIWebhooks = {
  post_call_webhook_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  events?: ReadonlyArray<ElevenLabsFullApiSchemaWebhookEventType>;
  transcript_format?: ElevenLabsFullApiSchemaWebhookTranscriptFormat;
  send_audio?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDashboardCallSuccessChartModel = {
  name: string;
  type?: "call_success";
};

export type ElevenLabsFullApiSchemaDashboardCriteriaChartModel = {
  name: string;
  type?: "criteria";
  criteria_id: string;
};

export type ElevenLabsFullApiSchemaDashboardDataCollectionChartModel = {
  name: string;
  type?: "data_collection";
  data_collection_id: string;
};

export type ElevenLabsFullApiSchemaConvAIStoredSecretDependencies = {
  tools: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableToolIdentifier | ElevenLabsFullApiSchemaDependentUnknownToolIdentifier)>;
  tools_has_more?: boolean;
  agents: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableAgentIdentifier | ElevenLabsFullApiSchemaDependentUnknownAgentIdentifier)>;
  agents_has_more?: boolean;
  phone_numbers?: ReadonlyArray<ElevenLabsFullApiSchemaDependentPhoneNumberIdentifier>;
  phone_numbers_has_more?: boolean;
  mcp_servers?: ReadonlyArray<(ElevenLabsFullApiSchemaDependentAvailableMCPServerIdentifier | ElevenLabsFullApiSchemaDependentUnknownMCPServerIdentifier)>;
  others: ReadonlyArray<ElevenLabsFullApiSchemaSecretDependencyType>;
};

export type ElevenLabsFullApiSchemaDependentAvailableToolIdentifier = {
  id: string;
  name: string;
  type?: "available";
  created_at_unix_secs: number;
  access_level: "admin" | "editor" | "commenter" | "viewer";
};

export type ElevenLabsFullApiSchemaDependentUnknownToolIdentifier = {
  type?: "unknown";
  id: string;
};

export type ElevenLabsFullApiSchemaDependentPhoneNumberIdentifier = {
  phone_number_id: string;
  phone_number: string;
  label: string;
  provider: ElevenLabsFullApiSchemaTelephonyProvider;
};

export type ElevenLabsFullApiSchemaOutboundCallRecipient = {
  id?: (string | ElevenLabsFullApiSchemaJsonValue);
  phone_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  whatsapp_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataRequestInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBatchCallWhatsAppParams = {
  whatsapp_phone_number_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  whatsapp_call_permission_request_template_name: string;
  whatsapp_call_permission_request_template_language_code: string;
};

export type ElevenLabsFullApiSchemaBatchCallStatus = "pending" | "in_progress" | "completed" | "failed" | "cancelled";

export type ElevenLabsFullApiSchemaOutboundCallRecipientResponseModel = {
  id: string;
  phone_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  whatsapp_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  status: ElevenLabsFullApiSchemaBatchCallRecipientStatus;
  created_at_unix: number;
  updated_at_unix: number;
  conversation_id: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_initiation_client_data?: (ElevenLabsFullApiSchemaConversationInitiationClientDataInternal | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMCPServerConfigInput = {
  approval_policy?: ElevenLabsFullApiSchemaMCPApprovalPolicy;
  tool_approval_hashes?: ReadonlyArray<ElevenLabsFullApiSchemaMCPToolApprovalHash>;
  transport?: ElevenLabsFullApiSchemaMCPServerTransport;
  url: (string | ElevenLabsFullApiSchemaConvAISecretLocator);
  secret_token?: (ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIUserSecretDBModel | ElevenLabsFullApiSchemaJsonValue);
  request_headers?: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIDynamicVariable | ElevenLabsFullApiSchemaConvAIEnvVarLocator) | undefined;
};
  auth_connection?: (ElevenLabsFullApiSchemaAuthConnectionLocator | ElevenLabsFullApiSchemaEnvironmentAuthConnectionLocator | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  description?: string;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  disable_interruptions?: boolean;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
  response_timeout_secs?: number;
  tool_config_overrides?: ReadonlyArray<ElevenLabsFullApiSchemaMCPToolConfigOverrideInput>;
  disable_compression?: boolean;
};

export type ElevenLabsFullApiSchemaMCPServerConfigOutput = {
  approval_policy?: ElevenLabsFullApiSchemaMCPApprovalPolicy;
  tool_approval_hashes?: ReadonlyArray<ElevenLabsFullApiSchemaMCPToolApprovalHash>;
  transport?: ElevenLabsFullApiSchemaMCPServerTransport;
  url: (string | ElevenLabsFullApiSchemaConvAISecretLocator);
  secret_token?: (ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIUserSecretDBModel | ElevenLabsFullApiSchemaJsonValue);
  request_headers?: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIDynamicVariable | ElevenLabsFullApiSchemaConvAIEnvVarLocator) | undefined;
};
  auth_connection?: (ElevenLabsFullApiSchemaAuthConnectionLocator | ElevenLabsFullApiSchemaEnvironmentAuthConnectionLocator | ElevenLabsFullApiSchemaJsonValue);
  name: string;
  description?: string;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  disable_interruptions?: boolean;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
  response_timeout_secs?: number;
  tool_config_overrides?: ReadonlyArray<ElevenLabsFullApiSchemaMCPToolConfigOverrideOutput>;
  disable_compression?: boolean;
};

export type ElevenLabsFullApiSchemaMCPServerMetadataResponseModel = {
  created_at: number;
  owner_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMCPApprovalPolicy = "auto_approve_all" | "require_approval_all" | "require_approval_per_tool";

export type ElevenLabsFullApiSchemaPreToolSpeechMode = "auto" | "force" | "off";

export type ElevenLabsFullApiSchemaToolCallSoundType = "typing" | "elevator1" | "elevator2" | "elevator3" | "elevator4";

export type ElevenLabsFullApiSchemaToolCallSoundBehavior = "auto" | "always";

export type ElevenLabsFullApiSchemaToolExecutionMode = "immediate" | "post_tool_speech" | "async";

export type ElevenLabsFullApiSchemaConvAISecretLocator = {
  secret_id: string;
};

export type ElevenLabsFullApiSchemaConvAIDynamicVariable = {
  variable_name: string;
};

export type ElevenLabsFullApiSchemaConvAIEnvVarLocator = {
  env_var_label: string;
};

export type ElevenLabsFullApiSchemaAuthConnectionLocator = {
  auth_connection_id: string;
};

export type ElevenLabsFullApiSchemaEnvironmentAuthConnectionLocator = {
  env_var_label: string;
};

export type ElevenLabsFullApiSchemaTool = {
  name: string;
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  inputSchema: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  outputSchema?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  icons?: (ReadonlyArray<ElevenLabsFullApiSchemaIcon> | ElevenLabsFullApiSchemaJsonValue);
  annotations?: (ElevenLabsFullApiSchemaToolAnnotations | ElevenLabsFullApiSchemaJsonValue);
  _meta?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  execution?: (ElevenLabsFullApiSchemaToolExecution | ElevenLabsFullApiSchemaJsonValue);
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | string | (string | ElevenLabsFullApiSchemaJsonValue) | {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue) | (ReadonlyArray<ElevenLabsFullApiSchemaIcon> | ElevenLabsFullApiSchemaJsonValue) | (ElevenLabsFullApiSchemaToolAnnotations | ElevenLabsFullApiSchemaJsonValue) | (ElevenLabsFullApiSchemaToolExecution | ElevenLabsFullApiSchemaJsonValue) | undefined;
};

export type ElevenLabsFullApiSchemaMCPToolApprovalPolicy = "auto_approved" | "requires_approval";

export type ElevenLabsFullApiSchemaDynamicVariableAssignment = {
  source?: "response";
  dynamic_variable: string;
  value_path: string;
  sanitize?: boolean;
  preserve_native_type?: boolean;
};

export type ElevenLabsFullApiSchemaConstantSchemaOverride = {
  source?: "constant";
  constant_value: (string | number | number | boolean | ReadonlyArray<(string | number | number | boolean)>);
};

export type ElevenLabsFullApiSchemaDynamicVariableSchemaOverride = {
  source?: "dynamic_variable";
  dynamic_variable: string;
};

export type ElevenLabsFullApiSchemaLLMSchemaOverride = {
  source?: "llm";
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaOmitSchemaOverride = {
  source?: "omit";
};

export type ElevenLabsFullApiSchemaAgentBranchSummary = {
  id: string;
  name: string;
  agent_id: string;
  description: string;
  created_at: number;
  last_committed_at: number;
  is_archived: boolean;
  protection_status?: ElevenLabsFullApiSchemaBranchProtectionStatus;
  access_info?: (ElevenLabsFullApiSchemaResourceAccessInfo | ElevenLabsFullApiSchemaJsonValue);
  current_live_percentage?: number;
  parent_branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  draft_exists?: boolean;
};

export type ElevenLabsFullApiSchemaBranchProtectionStatus = "writer_perms_required" | "admin_perms_required";

export type ElevenLabsFullApiSchemaAgentBranchBasicInfo = {
  id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaAgentVersionParents = {
  in_branch_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  out_of_branch_parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  merged_into_branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  merged_from_branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  merged_from_version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  rebased_from_version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentDeploymentRequest = {
  requests: ReadonlyArray<ElevenLabsFullApiSchemaAgentDeploymentRequestItem>;
};

export type ElevenLabsFullApiSchemaSpeechEngineSummaryResponse = {
  speech_engine_id: string;
  name: string;
  created_at_unix_secs: number;
  tags: ReadonlyArray<string>;
  access_info: ElevenLabsFullApiSchemaResourceAccessInfo;
};

export type ElevenLabsFullApiSchemaSpeechEngineConfig = {
  ws_url: string;
  request_headers?: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIDynamicVariable) | undefined;
};
};

export type ElevenLabsFullApiSchemaASRConversationalConfig = {
  quality?: ElevenLabsFullApiSchemaASRQuality;
  provider?: ElevenLabsFullApiSchemaASRProvider;
  user_input_audio_format?: ElevenLabsFullApiSchemaASRInputFormat;
  keywords?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaTTSConversationalConfigInput = {
  model_id?: ElevenLabsFullApiSchemaTTSConversationalModel;
  voice_id?: string;
  supported_voices?: ReadonlyArray<ElevenLabsFullApiSchemaSupportedVoice>;
  expressive_mode?: boolean;
  suggested_audio_tags?: ReadonlyArray<ElevenLabsFullApiSchemaSuggestedAudioTag>;
  agent_output_audio_format?: ElevenLabsFullApiSchemaTTSOutputFormat;
  optimize_streaming_latency?: ElevenLabsFullApiSchemaTTSOptimizeStreamingLatency;
  stability?: number;
  speed?: number;
  similarity_boost?: number;
  text_normalisation_type?: ElevenLabsFullApiSchemaTextNormalisationType;
  pronunciation_dictionary_locators?: ReadonlyArray<ElevenLabsFullApiSchemaPydanticPronunciationDictionaryVersionLocator>;
  enable_phoneme_tags?: boolean;
};

export type ElevenLabsFullApiSchemaBaseTurnConfig = {
  turn_timeout?: number;
  initial_wait_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  silence_end_call_timeout?: number;
  mode?: ElevenLabsFullApiSchemaTurnMode;
  turn_eagerness?: ElevenLabsFullApiSchemaTurnEagerness;
  spelling_patience?: ElevenLabsFullApiSchemaSpellingPatience;
  speculative_turn?: boolean;
  retranscribe_on_turn_timeout?: boolean;
  turn_model?: ElevenLabsFullApiSchemaTurnModel;
  interruption_ignore_terms?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaConversationConfigInput = {
  text_only?: boolean;
  max_duration_seconds?: number;
  client_events?: ReadonlyArray<ElevenLabsFullApiSchemaClientEvent>;
  file_input?: ElevenLabsFullApiSchemaFileInputConfig;
  monitoring_enabled?: boolean;
  monitoring_events?: ReadonlyArray<ElevenLabsFullApiSchemaClientEvent>;
  background_sound?: ElevenLabsFullApiSchemaBackgroundSoundConfig;
  source_attribution?: boolean;
};

export type ElevenLabsFullApiSchemaPrivacyConfigInput = {
  record_voice?: boolean;
  retention_days?: number;
  delete_transcript_and_pii?: boolean;
  delete_audio?: boolean;
  apply_to_existing_conversations?: boolean;
  zero_retention_mode?: boolean;
  conversation_history_redaction?: ElevenLabsFullApiSchemaConversationHistoryRedactionConfig;
};

export type ElevenLabsFullApiSchemaAgentCallLimits = {
  agent_concurrency_limit?: number;
  daily_limit?: number;
  bursting_enabled?: boolean;
};

export type ElevenLabsFullApiSchemaSpeechEngineConversationInitiationClientDataConfig = {
  first_message?: boolean;
};

export type ElevenLabsFullApiSchemaTTSConversationalConfigOutput = {
  model_id?: ElevenLabsFullApiSchemaTTSConversationalModel;
  voice_id?: string;
  supported_voices?: ReadonlyArray<ElevenLabsFullApiSchemaSupportedVoice>;
  expressive_mode?: boolean;
  suggested_audio_tags?: ReadonlyArray<ElevenLabsFullApiSchemaSuggestedAudioTag>;
  agent_output_audio_format?: ElevenLabsFullApiSchemaTTSOutputFormat;
  optimize_streaming_latency?: ElevenLabsFullApiSchemaTTSOptimizeStreamingLatency;
  stability?: number;
  speed?: number;
  similarity_boost?: number;
  text_normalisation_type?: ElevenLabsFullApiSchemaTextNormalisationType;
  pronunciation_dictionary_locators?: ReadonlyArray<ElevenLabsFullApiSchemaPydanticPronunciationDictionaryVersionLocator>;
  enable_phoneme_tags?: boolean;
};

export type ElevenLabsFullApiSchemaConversationConfigOutput = {
  text_only?: boolean;
  max_duration_seconds?: number;
  client_events?: ReadonlyArray<ElevenLabsFullApiSchemaClientEvent>;
  file_input?: ElevenLabsFullApiSchemaFileInputConfig;
  monitoring_enabled?: boolean;
  monitoring_events?: ReadonlyArray<ElevenLabsFullApiSchemaClientEvent>;
  background_sound?: ElevenLabsFullApiSchemaBackgroundSoundConfig;
  source_attribution?: boolean;
};

export type ElevenLabsFullApiSchemaPrivacyConfigOutput = {
  record_voice?: boolean;
  retention_days?: number;
  delete_transcript_and_pii?: boolean;
  delete_audio?: boolean;
  apply_to_existing_conversations?: boolean;
  zero_retention_mode?: boolean;
  conversation_history_redaction?: ElevenLabsFullApiSchemaConversationHistoryRedactionConfig;
};

export type ElevenLabsFullApiSchemaAgentMetadataDBModel = {
  created_at_unix_secs: number;
  updated_at_unix_secs: number;
  created_from?: ElevenLabsFullApiSchemaAgentDefinitionSource;
  last_updated_from?: ElevenLabsFullApiSchemaAgentDefinitionSource;
};

export type ElevenLabsFullApiSchemaAnalysisScope = "conversation" | "agent";

export type ElevenLabsFullApiSchemaEnvironmentVariableSecretValueRequest = {
  secret_id: string;
};

export type ElevenLabsFullApiSchemaEnvironmentVariableAuthConnectionValueRequest = {
  auth_connection_id: string;
};

export type ElevenLabsFullApiSchemaEnvironmentVariableSecretValue = {
  secret_id: string;
};

export type ElevenLabsFullApiSchemaEnvironmentVariableAuthConnectionValue = {
  auth_connection_id: string;
};

export type ElevenLabsFullApiSchemaSongSection = {
  section_name: string;
  positive_local_styles: ReadonlyArray<string>;
  negative_local_styles: ReadonlyArray<string>;
  duration_ms: number;
  lines: ReadonlyArray<string>;
  source_from?: (ElevenLabsFullApiSchemaSectionSource | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaGenerationChunkInput = {
  text: string;
  duration_ms: number;
  positive_styles: ReadonlyArray<string>;
  negative_styles?: ReadonlyArray<string>;
  context_adherence?: "low" | "medium" | "high";
  conditioning_ref?: (ElevenLabsFullApiSchemaAudioRefChunk | ElevenLabsFullApiSchemaJsonValue);
  condition_strength?: ("low" | "medium" | "high" | "xhigh" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAudioRefChunk = {
  song_id: string;
  range: ElevenLabsFullApiSchemaTimeRange;
};

export type ElevenLabsFullApiSchemaMusicGenerationMode = "track" | "loop" | "ambience" | "video_to_music";

export type ElevenLabsFullApiSchemaWordTimestamp = {
  word: string;
  start_ms: number;
  end_ms: number;
};

export type ElevenLabsFullApiSchemaOrderId = string;

export type ElevenLabsFullApiSchemaOrderSummary = {
  order_id: ElevenLabsFullApiSchemaOrderId;
  name: string;
  state: ElevenLabsFullApiSchemaOrderState;
  total_amount_usd?: (number | ElevenLabsFullApiSchemaJsonValue);
  sandbox?: boolean;
  submitted_at?: (string | ElevenLabsFullApiSchemaJsonValue);
  updated_at?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaOrderState = "open" | "submitted" | "paid" | "accepted" | "rejected" | "done";

export type ElevenLabsFullApiSchemaOrderItemInfo = {
  item_id: ElevenLabsFullApiSchemaItemId;
  item: ElevenLabsFullApiSchemaOrderItemRequestOutput;
  quote?: (ElevenLabsFullApiSchemaQuoteInfo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUpdateOrderRequest = {
  name: string;
};

export type ElevenLabsFullApiSchemaMediaId = string;

export type ElevenLabsFullApiSchemaUpsertOrderItemRequest = {
  item: ElevenLabsFullApiSchemaOrderItemRequestInput;
  item_id?: (ElevenLabsFullApiSchemaItemId | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaItemId = string;

export type ElevenLabsFullApiSchemaQuoteInfo = {
  amount_usd: number;
};

export type ElevenLabsFullApiSchemaDeliverableInfo = {
  signed_url: string;
  content_type: string;
  name: string;
  version?: number;
};

export type ElevenLabsFullApiSchemaPairedLanguagesResponse = {
  kind?: "pair";
  language_pairs: ReadonlyArray<ElevenLabsFullApiSchemaLanguagePairInfo>;
};

export type ElevenLabsFullApiSchemaSingleLanguagesResponse = {
  kind?: "single";
  languages: ReadonlyArray<ElevenLabsFullApiSchemaLanguageInfo>;
};

export type ElevenLabsFullApiSchemaSpeakerResponseModel = {
  speaker_id: string;
  duration_secs: number;
  utterances?: (ReadonlyArray<ElevenLabsFullApiSchemaUtteranceResponseModel> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaColumnFilter = {
  column: string;
  operation: "in" | "not_in" | "le" | "ge" | "lt" | "gt" | "eq" | "neq";
  values: ReadonlyArray<(string | number | number | string | boolean | ElevenLabsFullApiSchemaJsonValue)>;
};

export type ElevenLabsFullApiSchemaColumnUnit = "ms" | "s" | "min" | "duration" | "credits" | "usd" | "eur" | "inr" | "pln" | "ratio" | "rating";

export type ElevenLabsFullApiSchemaHistoryAlignmentResponseModel = {
  characters: ReadonlyArray<string>;
  character_start_times_seconds: ReadonlyArray<number>;
  character_end_times_seconds: ReadonlyArray<number>;
};

export type ElevenLabsFullApiSchemaVerificationAttemptResponseModel = {
  text: string;
  date_unix: number;
  accepted: boolean;
  similarity: number;
  levenshtein_distance: number;
  recording?: (ElevenLabsFullApiSchemaRecordingResponseModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaManualVerificationResponseModel = {
  extra_text: string;
  request_time_unix: number;
  files: ReadonlyArray<ElevenLabsFullApiSchemaManualVerificationFileResponseModel>;
};

export type ElevenLabsFullApiSchemaVoiceSharingModerationCheckResponseModel = {
  date_checked_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  name_value?: (string | ElevenLabsFullApiSchemaJsonValue);
  name_check?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  description_value?: (string | ElevenLabsFullApiSchemaJsonValue);
  description_check?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  sample_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  sample_checks?: (ReadonlyArray<number> | ElevenLabsFullApiSchemaJsonValue);
  captcha_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  captcha_checks?: (ReadonlyArray<number> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaReaderResourceResponseModel = {
  resource_type: "read" | "collection";
  resource_id: string;
};

export type ElevenLabsFullApiSchemaDiscountResponseModel = {
  discount_percent_off?: (number | ElevenLabsFullApiSchemaJsonValue);
  discount_amount_off?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPodcastConversationModeData = {
  host_voice_id: string;
  guest_voice_id: string;
};

export type ElevenLabsFullApiSchemaPodcastBulletinModeData = {
  host_voice_id: string;
};

export type ElevenLabsFullApiSchemaCaptionStyleTemplateModel = {
  key: string;
  label: string;
  requires_high_fps?: boolean;
};

export type ElevenLabsFullApiSchemaStudioTextStyleShadowModel = {
  enabled: boolean;
  color: string;
  opacity: number;
  blur: number;
  offset_x: number;
  offset_y: number;
};

export type ElevenLabsFullApiSchemaStudioTextStyleOutlineModel = {
  enabled: boolean;
  color: string;
  opacity: number;
  width: number;
};

export type ElevenLabsFullApiSchemaCaptionStyleSectionAnimationModel = {
  enter_type: "none" | "fade" | "scale" | "pop" | "slide_up" | "slide_down";
  exit_type: "none" | "fade" | "scale" | "pop" | "slide_up" | "slide_down";
};

export type ElevenLabsFullApiSchemaCaptionStyleWordAnimationModel = {
  enter_type: "none" | "fade" | "scale" | "pop" | "slide_up" | "slide_down";
  exit_type: "none" | "fade" | "scale" | "pop" | "slide_up" | "slide_down";
};

export type ElevenLabsFullApiSchemaCaptionStyleCharacterAnimationModel = {
  enter_type: "none" | "fade";
  exit_type: "none" | "fade";
};

export type ElevenLabsFullApiSchemaCaptionStyleHorizontalPlacementModel = {
  align: "left" | "center" | "right";
  translate_pct: number;
};

export type ElevenLabsFullApiSchemaCaptionStyleVerticalPlacementModel = {
  align: "top" | "center" | "bottom";
  translate_pct: number;
};

export type ElevenLabsFullApiSchemaStudioAgentToolSettingsModel = {
  skip_confirmation?: boolean;
};

export type ElevenLabsFullApiSchemaProjectVideoThumbnailSheetResponseModel = {
  start_thumbnail_index: number;
  thumbnail_count: number;
  signed_cloud_url: string;
};

export type ElevenLabsFullApiSchemaPendingBlocksMetadataModel = {
  target_global_offset_ms: (number | ElevenLabsFullApiSchemaJsonValue);
  block_ids: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaPendingExternalAudiosMetadataModel = {
  target_global_offset_ms: (number | ElevenLabsFullApiSchemaJsonValue);
  external_audio_ids: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaPendingClipTask = {
  type: "preprocessing" | "speech_import" | "dubbing" | "video_to_music" | "media_generation";
  progress?: number;
  started_at_ms?: number;
  updated_at_ms?: number;
  metadata?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
};

export type ElevenLabsFullApiSchemaGenerationSourceContext = {
  source_type?: "generation";
  generation_id: string;
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  model_id: string;
  model_provider?: (string | ElevenLabsFullApiSchemaJsonValue);
  generation_session_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  session_iteration_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  model_parameters?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  extend_video?: (ElevenLabsFullApiSchemaReferenceVideo | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVideoAnalysis = {
  status: "processing" | "completed" | "failed";
  data: (ElevenLabsFullApiSchemaVideoAnalysisResult | ElevenLabsFullApiSchemaJsonValue);
  updated_at_ms?: number;
};

export type ElevenLabsFullApiSchemaAssetTranscription = {
  status: "processing" | "completed" | "failed";
  data: (ElevenLabsFullApiSchemaAssetTranscriptionData | ElevenLabsFullApiSchemaJsonValue);
  updated_at_ms?: number;
};

export type ElevenLabsFullApiSchemaCanvasPlacement = {
  x_relative?: number;
  y_relative?: number;
  scale_x?: number;
  scale_y?: number;
  pivot_x?: number;
  pivot_y?: number;
  skew_x?: number;
  skew_y?: number;
  crop_top?: number;
  crop_right?: number;
  crop_bottom?: number;
  crop_left?: number;
  flip_x?: boolean;
  flip_y?: boolean;
};

export type ElevenLabsFullApiSchemaClipAnimation = {
  enter_effect?: "none" | "fade" | "float" | "gentle_float" | "zoom_in" | "drop" | "slide_left" | "slide_right" | "slide_up" | "slide_down" | "pop" | "bounce" | "spin" | "slide_bounce";
  enter_duration_ms?: number;
  exit_effect?: "none" | "fade" | "float" | "gentle_float" | "zoom_in" | "drop" | "slide_left" | "slide_right" | "slide_up" | "slide_down" | "pop" | "bounce" | "spin" | "slide_bounce";
  exit_duration_ms?: number;
};

export type ElevenLabsFullApiSchemaSongSourceContext = {
  source_type?: "song";
  song_id: string;
  chat_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  genres?: ReadonlyArray<string>;
  languages?: ReadonlyArray<string>;
  is_explicit?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  bpm?: (number | ElevenLabsFullApiSchemaJsonValue);
  generation_settings?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaMusicExploreSongSourceContext = {
  source_type?: "music_explore_song";
  music_explore_song_id: string;
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  bpm?: (number | ElevenLabsFullApiSchemaJsonValue);
  vocals?: (string | ElevenLabsFullApiSchemaJsonValue);
  lyrics?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSfxSourceContext = {
  source_type?: "sfx";
  sound_generation_history_item_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
  generation_config?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAudioAnalysis = {
  status: "processing" | "completed" | "failed";
  data: (ElevenLabsFullApiSchemaAudioAnalysisResult | ElevenLabsFullApiSchemaJsonValue);
  updated_at_ms?: number;
};

export type ElevenLabsFullApiSchemaImageAnalysis = {
  status: "processing" | "completed" | "failed";
  data: (ElevenLabsFullApiSchemaImageAnalysisResult | ElevenLabsFullApiSchemaJsonValue);
  updated_at_ms?: number;
};

export type ElevenLabsFullApiSchemaReadMetadataChapterDBModel = {
  chapter_name: string;
  word_count: number;
  char_count: number;
  starting_char_offset: number;
  has_parsed_html?: boolean;
  has_summary?: boolean;
  duration_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  file_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  is_fallback_name?: boolean;
};

export type ElevenLabsFullApiSchemaReadLegalTerms = {
  terms?: (string | ElevenLabsFullApiSchemaJsonValue);
  start_date?: (string | ElevenLabsFullApiSchemaJsonValue);
  end_date?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaContributor = {
  name: string;
  role: string;
  bio?: (string | ElevenLabsFullApiSchemaJsonValue);
  profile_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPreviewAudioDBModel = {
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  text?: (string | ElevenLabsFullApiSchemaJsonValue);
  audio_url: string;
  hls_manifest_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  dash_manifest_url?: (string | ElevenLabsFullApiSchemaJsonValue);
  is_auto_generated?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  generated_at_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSampleConfigDBModel = {
  is_sample?: boolean;
  parent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  parent_type?: ("read" | "collection" | ElevenLabsFullApiSchemaJsonValue);
  chapter_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaReviewResponseModel = {
  review_status: "approved" | "edits_required" | "rejected";
  reviewed_at_unix: number;
  reviewed_by?: (string | ElevenLabsFullApiSchemaJsonValue);
  reject_reasons?: (ReadonlyArray<"lacks_structure" | "doesnt_open" | "not_literary_work" | "language_not_supported" | "too_short" | "duplicate" | "promotional" | "formatting_issues" | "low_quality" | "metadata_incomplete" | "metadata_inaccurate" | "typos" | "review_error" | "spam" | "legal_violation" | "content_policy" | "public_domain" | "other"> | ElevenLabsFullApiSchemaJsonValue);
  scores_breakdown?: ({
  readonly [key: string]: number | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  rejected_details?: (string | ElevenLabsFullApiSchemaJsonValue);
  explanation?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceStatisticsResponseModel = {
  project_voice_ref_id: string;
  characters_unconverted: number;
  characters_converted: number;
  credits_needed_to_convert?: (number | ElevenLabsFullApiSchemaJsonValue);
  voice_id: string;
};

export type ElevenLabsFullApiSchemaChapterContentBlockResponseModel = {
  block_id: string;
  nodes: ReadonlyArray<(ElevenLabsFullApiSchemaChapterContentBlockTtsNodeResponseModel | ElevenLabsFullApiSchemaChapterContentBlockExtendableNodeResponseModel)>;
};

export type ElevenLabsFullApiSchemaChapterContentBlockInputModel = {
  sub_type?: ("p" | "h1" | "h2" | "h3" | ElevenLabsFullApiSchemaJsonValue);
  nodes: ReadonlyArray<ElevenLabsFullApiSchemaChapterContentParagraphTtsNodeInputModel>;
  block_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSegmentSubtitleFrame = {
  start_time: number;
  end_time: number;
  lines: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaDubbedSegment = {
  start_time: number;
  end_time: number;
  text: (string | ElevenLabsFullApiSchemaJsonValue);
  subtitles: ReadonlyArray<ElevenLabsFullApiSchemaSegmentSubtitleFrame>;
  audio_stale: boolean;
  media_ref: (ElevenLabsFullApiSchemaDubbingMediaReference | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVOICECATEGORY = "premade" | "cloned" | "generated" | "professional" | "famous";

export type ElevenLabsFullApiSchemaDubbingTranscriptWord = {
  text?: string;
  word_type?: string;
  start_s?: number;
  end_s?: number;
  characters?: ReadonlyArray<ElevenLabsFullApiSchemaDubbingTranscriptCharacter>;
};

export type ElevenLabsFullApiSchemaLockReason = "trial_ended" | "subscription_downgrade" | "exposed_publicly" | "self_disabled";

export type ElevenLabsFullApiSchemaAccountChangeActivityId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 99;

export type ElevenLabsFullApiSchemaAuthenticationActivityId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 99;

export type ElevenLabsFullApiSchemaEntityManagementActivityId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 99;

export type ElevenLabsFullApiSchemaUserAccessManagementActivityId = 0 | 1 | 2 | 99;

export type ElevenLabsFullApiSchemaGroupManagementActivityId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 99;

export type ElevenLabsFullApiSchemaSeverityId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 99;

export type ElevenLabsFullApiSchemaStatusId = 0 | 1 | 2 | 99;

export type ElevenLabsFullApiSchemaActorModel = {
  user: ElevenLabsFullApiSchemaUserModel;
  app_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  app_uid?: (string | ElevenLabsFullApiSchemaJsonValue);
  session?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDeviceModel = {
  ip?: (string | ElevenLabsFullApiSchemaJsonValue);
  hostname?: (string | ElevenLabsFullApiSchemaJsonValue);
  type_id?: number;
};

export type ElevenLabsFullApiSchemaHttpRequestModel = {
  http_method: string;
  url: ElevenLabsFullApiSchemaUrlModel;
  user_agent?: (string | ElevenLabsFullApiSchemaJsonValue);
  x_forwarded_for?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDependentAvailableMCPServerIdentifier = {
  id: string;
  name: string;
  type?: "available";
  created_at_unix_secs: number;
  access_level: "admin" | "editor" | "commenter" | "viewer";
};

export type ElevenLabsFullApiSchemaDependentUnknownMCPServerIdentifier = {
  id: string;
  type?: "unknown";
};

export type ElevenLabsFullApiSchemaDependentIntegrationConnectionIdentifier = {
  id: string;
  name: string;
};

export type ElevenLabsFullApiSchemaDefaultSharingGroupResponseModel = {
  group: ElevenLabsFullApiSchemaWorkspaceGroupResponseModel;
  permission_level: "admin" | "editor" | "viewer";
};

export type ElevenLabsFullApiSchemaWebhookAuthMethodType = "hmac" | "oauth2" | "mtls";

export type ElevenLabsFullApiSchemaWorkspaceWebhookUsageResponseModel = {
  usage_type: ElevenLabsFullApiSchemaWebhookUsageType;
};

export type ElevenLabsFullApiSchemaExportOptions = (ElevenLabsFullApiSchemaSegmentedJsonExportOptions | ElevenLabsFullApiSchemaDocxExportOptions | ElevenLabsFullApiSchemaPdfExportOptions | ElevenLabsFullApiSchemaTxtExportOptions | ElevenLabsFullApiSchemaHtmlExportOptions | ElevenLabsFullApiSchemaSrtExportOptions);

export type ElevenLabsFullApiSchemaSpeechToTextCharacterResponseModel = {
  text: string;
  start?: (number | ElevenLabsFullApiSchemaJsonValue);
  end?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationConfigClientOverrideInput = {
  asr?: (ElevenLabsFullApiSchemaASRConversationalConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  turn?: (ElevenLabsFullApiSchemaTurnConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  tts?: (ElevenLabsFullApiSchemaTTSConversationalConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  conversation?: (ElevenLabsFullApiSchemaConversationConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  agent?: (ElevenLabsFullApiSchemaAgentConfigOverrideInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationInitiationSourceInfo = {
  source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  version?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateTextParam = {
  parameter_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  type?: "text";
  text: string;
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateImageParam = {
  type?: "image";
  image: ElevenLabsFullApiSchemaWhatsAppTemplateImageParamDetails;
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateDocumentParam = {
  type?: "document";
  document: ElevenLabsFullApiSchemaWhatsAppTemplateDocumentParamDetails;
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateLocationParam = {
  type?: "location";
  location: ElevenLabsFullApiSchemaWhatsAppTemplateLocationParamDetails;
};

export type ElevenLabsFullApiSchemaTurnConfig = {
  turn_timeout?: number;
  initial_wait_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  silence_end_call_timeout?: number;
  mode?: ElevenLabsFullApiSchemaTurnMode;
  turn_eagerness?: ElevenLabsFullApiSchemaTurnEagerness;
  spelling_patience?: ElevenLabsFullApiSchemaSpellingPatience;
  speculative_turn?: boolean;
  retranscribe_on_turn_timeout?: boolean;
  turn_model?: ElevenLabsFullApiSchemaTurnModel;
  interruption_ignore_terms?: ReadonlyArray<string>;
  soft_timeout_config?: ElevenLabsFullApiSchemaSoftTimeoutConfig;
};

export type ElevenLabsFullApiSchemaLanguagePresetInput = {
  overrides: ElevenLabsFullApiSchemaConversationConfigClientOverrideInput;
  first_message_translation?: (ElevenLabsFullApiSchemaLanguagePresetTranslation | ElevenLabsFullApiSchemaJsonValue);
  soft_timeout_translation?: (ElevenLabsFullApiSchemaLanguagePresetTranslation | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVADConfig = {
  background_voice_detection?: boolean;
};

export type ElevenLabsFullApiSchemaAgentConfigAPIModelInput = {
  first_message?: string;
  language?: string;
  hinglish_mode?: boolean;
  dynamic_variables?: ElevenLabsFullApiSchemaDynamicVariablesConfigInput;
  disable_first_message_interruptions?: boolean;
  max_conversation_duration_message?: string;
  text_behavior_overrides?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaBehaviorOverride | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  prompt?: ElevenLabsFullApiSchemaPromptAgentAPIModelInput;
};

export type ElevenLabsFullApiSchemaEvaluationSettingsInput = {
  criteria?: ReadonlyArray<ElevenLabsFullApiSchemaPromptEvaluationCriteria>;
};

export type ElevenLabsFullApiSchemaWidgetConfigInput = {
  variant?: ElevenLabsFullApiSchemaEmbedVariant;
  placement?: ElevenLabsFullApiSchemaWidgetPlacement;
  expandable?: ElevenLabsFullApiSchemaWidgetExpandable;
  avatar?: (ElevenLabsFullApiSchemaOrbAvatar | ElevenLabsFullApiSchemaURLAvatar | ElevenLabsFullApiSchemaImageAvatar);
  feedback_mode?: ElevenLabsFullApiSchemaWidgetFeedbackMode;
  end_feedback?: (ElevenLabsFullApiSchemaWidgetEndFeedbackConfig | ElevenLabsFullApiSchemaJsonValue);
  bg_color?: string;
  text_color?: string;
  btn_color?: string;
  btn_text_color?: string;
  border_color?: string;
  focus_color?: string;
  border_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  btn_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  action_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  start_call_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  end_call_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  expand_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  listening_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  speaking_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  shareable_page_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  shareable_page_show_terms?: boolean;
  terms_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_html?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_key?: (string | ElevenLabsFullApiSchemaJsonValue);
  show_avatar_when_collapsed?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  disable_banner?: boolean;
  override_link?: (string | ElevenLabsFullApiSchemaJsonValue);
  markdown_link_allowed_hosts?: ReadonlyArray<ElevenLabsFullApiSchemaAllowlistItem>;
  markdown_link_include_www?: boolean;
  markdown_link_allow_http?: boolean;
  mic_muting_enabled?: boolean;
  transcript_enabled?: boolean;
  text_input_enabled?: boolean;
  conversation_mode_toggle_enabled?: boolean;
  default_expanded?: boolean;
  always_expanded?: boolean;
  dismissible?: boolean;
  show_agent_status?: boolean;
  show_conversation_id?: boolean;
  strip_audio_tags?: boolean;
  syntax_highlight_theme?: ("light" | "dark" | ElevenLabsFullApiSchemaJsonValue);
  text_contents?: ElevenLabsFullApiSchemaWidgetTextContents;
  styles?: ElevenLabsFullApiSchemaWidgetStyles;
  language_selector?: boolean;
  supports_text_only?: boolean;
  custom_avatar_path?: (string | ElevenLabsFullApiSchemaJsonValue);
  language_presets?: {
  readonly [key: string]: ElevenLabsFullApiSchemaWidgetLanguagePreset | undefined;
};
};

export type ElevenLabsFullApiSchemaAnalysisProperty = {
  type: "boolean" | "string" | "integer" | "number";
  description?: string;
  enum?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  is_system_provided?: boolean;
  dynamic_variable?: string;
  allowed_values_dynamic_variable?: string;
  constant_value?: (string | number | number | boolean);
  is_omitted?: boolean;
  llm?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationInitiationClientDataConfigInput = {
  conversation_config_override?: ElevenLabsFullApiSchemaConversationConfigClientOverrideConfigInput;
  custom_llm_extra_body?: boolean;
  enable_conversation_initiation_client_data_from_webhook?: boolean;
  enable_starting_workflow_node_id_from_client?: boolean;
};

export type ElevenLabsFullApiSchemaAgentWorkspaceOverridesInput = {
  conversation_initiation_client_data_webhook?: (ElevenLabsFullApiSchemaConversationInitiationClientDataWebhook | ElevenLabsFullApiSchemaJsonValue);
  webhooks?: ElevenLabsFullApiSchemaConvAIWebhooks;
};

export type ElevenLabsFullApiSchemaAgentTestingSettings = {
  attached_tests?: ReadonlyArray<ElevenLabsFullApiSchemaAttachedTestModel>;
};

export type ElevenLabsFullApiSchemaGuardrailsV1Input = {
  version?: "1";
  focus?: ElevenLabsFullApiSchemaFocusGuardrail;
  prompt_injection?: ElevenLabsFullApiSchemaPromptInjectionGuardrail;
  content?: ElevenLabsFullApiSchemaContentGuardrailInput;
  moderation?: (ElevenLabsFullApiSchemaModerationGuardrailInput | ElevenLabsFullApiSchemaJsonValue);
  custom?: ElevenLabsFullApiSchemaCustomGuardrailInput;
};

export type ElevenLabsFullApiSchemaAuthSettings = {
  enable_auth?: boolean;
  allowlist?: ReadonlyArray<ElevenLabsFullApiSchemaAllowlistItem>;
  require_origin_header?: boolean;
  shareable_token?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentTrustContext = "unknown" | "low" | "high";

export type ElevenLabsFullApiSchemaTopicDiscoverySettings = {};

export type ElevenLabsFullApiSchemaWorkflowEdgeModelInput = {
  source: string;
  target: string;
  forward_condition?: ((ElevenLabsFullApiSchemaWorkflowUnconditionalModelInput | ElevenLabsFullApiSchemaWorkflowLLMConditionModelInput | ElevenLabsFullApiSchemaWorkflowResultConditionModelInput | ElevenLabsFullApiSchemaWorkflowExpressionConditionModelInput) | ElevenLabsFullApiSchemaJsonValue);
  backward_condition?: ((ElevenLabsFullApiSchemaWorkflowUnconditionalModelInput | ElevenLabsFullApiSchemaWorkflowLLMConditionModelInput | ElevenLabsFullApiSchemaWorkflowResultConditionModelInput | ElevenLabsFullApiSchemaWorkflowExpressionConditionModelInput) | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWorkflowStartNodeModelInput = {
  type?: "start";
  position?: ElevenLabsFullApiSchemaPositionInput;
  edge_order?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaWorkflowEndNodeModelInput = {
  type?: "end";
  position?: ElevenLabsFullApiSchemaPositionInput;
  edge_order?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaWorkflowPhoneNumberNodeModelInput = {
  custom_sip_headers?: ReadonlyArray<(ElevenLabsFullApiSchemaCustomSIPHeader | ElevenLabsFullApiSchemaCustomSIPHeaderWithDynamicVariable)>;
  transfer_destination: (ElevenLabsFullApiSchemaPhoneNumberTransferDestination | ElevenLabsFullApiSchemaSIPUriTransferDestination | ElevenLabsFullApiSchemaPhoneNumberDynamicVariableTransferDestination | ElevenLabsFullApiSchemaSIPUriDynamicVariableTransferDestination);
  transfer_type?: ElevenLabsFullApiSchemaTransferTypeEnum;
  post_dial_digits?: ((ElevenLabsFullApiSchemaPostDialDigitsStatic | ElevenLabsFullApiSchemaPostDialDigitsDynamicVariable) | ElevenLabsFullApiSchemaJsonValue);
  type?: "phone_number";
  position?: ElevenLabsFullApiSchemaPositionInput;
  edge_order?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaWorkflowOverrideAgentNodeModelInput = {
  conversation_config?: ElevenLabsFullApiSchemaConversationalConfigAPIModelWorkflowOverrideInput;
  additional_prompt?: string;
  additional_knowledge_base?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator>;
  additional_tool_ids?: ReadonlyArray<string>;
  type?: "override_agent";
  position?: ElevenLabsFullApiSchemaPositionInput;
  edge_order?: ReadonlyArray<string>;
  label: string;
  entry_behavior?: ElevenLabsFullApiSchemaEntryBehavior;
};

export type ElevenLabsFullApiSchemaWorkflowStandaloneAgentNodeModelInput = {
  type?: "standalone_agent";
  position?: ElevenLabsFullApiSchemaPositionInput;
  edge_order?: ReadonlyArray<string>;
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  delay_ms?: number;
  transfer_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_transferred_agent_first_message?: boolean;
  preserve_client_tts_overrides?: boolean;
};

export type ElevenLabsFullApiSchemaWorkflowToolNodeModelInput = {
  type?: "tool";
  position?: ElevenLabsFullApiSchemaPositionInput;
  edge_order?: ReadonlyArray<string>;
  tools?: ReadonlyArray<ElevenLabsFullApiSchemaWorkflowToolLocator>;
};

export type ElevenLabsFullApiSchemaLanguagePresetOutput = {
  overrides: ElevenLabsFullApiSchemaConversationConfigClientOverrideOutput;
  first_message_translation?: (ElevenLabsFullApiSchemaLanguagePresetTranslation | ElevenLabsFullApiSchemaJsonValue);
  soft_timeout_translation?: (ElevenLabsFullApiSchemaLanguagePresetTranslation | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentConfigAPIModelOutput = {
  first_message?: string;
  language?: string;
  hinglish_mode?: boolean;
  dynamic_variables?: ElevenLabsFullApiSchemaDynamicVariablesConfigOutput;
  disable_first_message_interruptions?: boolean;
  max_conversation_duration_message?: string;
  text_behavior_overrides?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaBehaviorOverride | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  prompt?: ElevenLabsFullApiSchemaPromptAgentAPIModelOutput;
};

export type ElevenLabsFullApiSchemaEvaluationSettingsOutput = {
  criteria?: ReadonlyArray<ElevenLabsFullApiSchemaPromptEvaluationCriteria>;
};

export type ElevenLabsFullApiSchemaWidgetConfigOutput = {
  variant?: ElevenLabsFullApiSchemaEmbedVariant;
  placement?: ElevenLabsFullApiSchemaWidgetPlacement;
  expandable?: ElevenLabsFullApiSchemaWidgetExpandable;
  avatar?: (ElevenLabsFullApiSchemaOrbAvatar | ElevenLabsFullApiSchemaURLAvatar | ElevenLabsFullApiSchemaImageAvatar);
  feedback_mode?: ElevenLabsFullApiSchemaWidgetFeedbackMode;
  end_feedback?: (ElevenLabsFullApiSchemaWidgetEndFeedbackConfig | ElevenLabsFullApiSchemaJsonValue);
  bg_color?: string;
  text_color?: string;
  btn_color?: string;
  btn_text_color?: string;
  border_color?: string;
  focus_color?: string;
  border_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  btn_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  action_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  start_call_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  end_call_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  expand_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  listening_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  speaking_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  shareable_page_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  shareable_page_show_terms?: boolean;
  terms_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_html?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_key?: (string | ElevenLabsFullApiSchemaJsonValue);
  show_avatar_when_collapsed?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  disable_banner?: boolean;
  override_link?: (string | ElevenLabsFullApiSchemaJsonValue);
  markdown_link_allowed_hosts?: ReadonlyArray<ElevenLabsFullApiSchemaAllowlistItem>;
  markdown_link_include_www?: boolean;
  markdown_link_allow_http?: boolean;
  mic_muting_enabled?: boolean;
  transcript_enabled?: boolean;
  text_input_enabled?: boolean;
  conversation_mode_toggle_enabled?: boolean;
  default_expanded?: boolean;
  always_expanded?: boolean;
  dismissible?: boolean;
  show_agent_status?: boolean;
  show_conversation_id?: boolean;
  strip_audio_tags?: boolean;
  syntax_highlight_theme?: ("light" | "dark" | ElevenLabsFullApiSchemaJsonValue);
  text_contents?: ElevenLabsFullApiSchemaWidgetTextContents;
  styles?: ElevenLabsFullApiSchemaWidgetStyles;
  language_selector?: boolean;
  supports_text_only?: boolean;
  custom_avatar_path?: (string | ElevenLabsFullApiSchemaJsonValue);
  language_presets?: {
  readonly [key: string]: ElevenLabsFullApiSchemaWidgetLanguagePreset | undefined;
};
};

export type ElevenLabsFullApiSchemaConversationInitiationClientDataConfigOutput = {
  conversation_config_override?: ElevenLabsFullApiSchemaConversationConfigClientOverrideConfigOutput;
  custom_llm_extra_body?: boolean;
  enable_conversation_initiation_client_data_from_webhook?: boolean;
  enable_starting_workflow_node_id_from_client?: boolean;
};

export type ElevenLabsFullApiSchemaAgentWorkspaceOverridesOutput = {
  conversation_initiation_client_data_webhook?: (ElevenLabsFullApiSchemaConversationInitiationClientDataWebhook | ElevenLabsFullApiSchemaJsonValue);
  webhooks?: ElevenLabsFullApiSchemaConvAIWebhooks;
};

export type ElevenLabsFullApiSchemaGuardrailsV1Output = {
  version?: "1";
  focus?: ElevenLabsFullApiSchemaFocusGuardrail;
  prompt_injection?: ElevenLabsFullApiSchemaPromptInjectionGuardrail;
  content?: ElevenLabsFullApiSchemaContentGuardrailOutput;
  moderation?: (ElevenLabsFullApiSchemaModerationGuardrailOutput | ElevenLabsFullApiSchemaJsonValue);
  custom?: ElevenLabsFullApiSchemaCustomGuardrailOutput;
};

export type ElevenLabsFullApiSchemaSafetyResponseModel = {
  is_blocked_ivc?: boolean;
  is_blocked_non_ivc?: boolean;
  ignore_safety_evaluation?: boolean;
};

export type ElevenLabsFullApiSchemaWorkflowEdgeModelOutput = {
  source: string;
  target: string;
  forward_condition: ((ElevenLabsFullApiSchemaWorkflowUnconditionalModelOutput | ElevenLabsFullApiSchemaWorkflowLLMConditionModelOutput | ElevenLabsFullApiSchemaWorkflowResultConditionModelOutput | ElevenLabsFullApiSchemaWorkflowExpressionConditionModelOutput) | ElevenLabsFullApiSchemaJsonValue);
  backward_condition: ((ElevenLabsFullApiSchemaWorkflowUnconditionalModelOutput | ElevenLabsFullApiSchemaWorkflowLLMConditionModelOutput | ElevenLabsFullApiSchemaWorkflowResultConditionModelOutput | ElevenLabsFullApiSchemaWorkflowExpressionConditionModelOutput) | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWorkflowStartNodeModelOutput = {
  type: "start";
  position: ElevenLabsFullApiSchemaPositionOutput;
  edge_order: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaWorkflowEndNodeModelOutput = {
  type: "end";
  position: ElevenLabsFullApiSchemaPositionOutput;
  edge_order: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaWorkflowPhoneNumberNodeModelOutput = {
  custom_sip_headers: ReadonlyArray<(ElevenLabsFullApiSchemaCustomSIPHeader | ElevenLabsFullApiSchemaCustomSIPHeaderWithDynamicVariable)>;
  transfer_destination: (ElevenLabsFullApiSchemaPhoneNumberTransferDestination | ElevenLabsFullApiSchemaSIPUriTransferDestination | ElevenLabsFullApiSchemaPhoneNumberDynamicVariableTransferDestination | ElevenLabsFullApiSchemaSIPUriDynamicVariableTransferDestination);
  transfer_type: ElevenLabsFullApiSchemaTransferTypeEnum;
  post_dial_digits: ((ElevenLabsFullApiSchemaPostDialDigitsStatic | ElevenLabsFullApiSchemaPostDialDigitsDynamicVariable) | ElevenLabsFullApiSchemaJsonValue);
  type: "phone_number";
  position: ElevenLabsFullApiSchemaPositionOutput;
  edge_order: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaWorkflowOverrideAgentNodeModelOutput = {
  conversation_config: ElevenLabsFullApiSchemaConversationalConfigAPIModelWorkflowOverrideOutput;
  additional_prompt: string;
  additional_knowledge_base: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator>;
  additional_tool_ids: ReadonlyArray<string>;
  type: "override_agent";
  position: ElevenLabsFullApiSchemaPositionOutput;
  edge_order: ReadonlyArray<string>;
  label: string;
  entry_behavior: ElevenLabsFullApiSchemaEntryBehavior;
};

export type ElevenLabsFullApiSchemaWorkflowStandaloneAgentNodeModelOutput = {
  type: "standalone_agent";
  position: ElevenLabsFullApiSchemaPositionOutput;
  edge_order: ReadonlyArray<string>;
  agent_id: (string | ElevenLabsFullApiSchemaJsonValue);
  node_id: (string | ElevenLabsFullApiSchemaJsonValue);
  delay_ms: number;
  transfer_message: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_transferred_agent_first_message: boolean;
  preserve_client_tts_overrides: boolean;
};

export type ElevenLabsFullApiSchemaWorkflowToolNodeModelOutput = {
  type: "tool";
  position: ElevenLabsFullApiSchemaPositionOutput;
  edge_order: ReadonlyArray<string>;
  tools: ReadonlyArray<ElevenLabsFullApiSchemaWorkflowToolLocator>;
};

export type ElevenLabsFullApiSchemaEmbedVariant = "tiny" | "compact" | "full" | "expandable";

export type ElevenLabsFullApiSchemaWidgetPlacement = "top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right";

export type ElevenLabsFullApiSchemaWidgetExpandable = "never" | "mobile" | "desktop" | "always";

export type ElevenLabsFullApiSchemaOrbAvatar = {
  type?: "orb";
  color_1?: string;
  color_2?: string;
};

export type ElevenLabsFullApiSchemaURLAvatar = {
  type?: "url";
  custom_url?: string;
};

export type ElevenLabsFullApiSchemaImageAvatar = {
  type?: "image";
  url?: string;
};

export type ElevenLabsFullApiSchemaWidgetFeedbackMode = "none" | "during" | "end";

export type ElevenLabsFullApiSchemaWidgetEndFeedbackConfig = {
  type?: ElevenLabsFullApiSchemaWidgetEndFeedbackType;
};

export type ElevenLabsFullApiSchemaAllowlistItem = {
  hostname: string;
};

export type ElevenLabsFullApiSchemaWidgetTextContents = {
  main_label?: (string | ElevenLabsFullApiSchemaJsonValue);
  start_call?: (string | ElevenLabsFullApiSchemaJsonValue);
  start_chat?: (string | ElevenLabsFullApiSchemaJsonValue);
  new_call?: (string | ElevenLabsFullApiSchemaJsonValue);
  end_call?: (string | ElevenLabsFullApiSchemaJsonValue);
  mute_microphone?: (string | ElevenLabsFullApiSchemaJsonValue);
  change_language?: (string | ElevenLabsFullApiSchemaJsonValue);
  collapse?: (string | ElevenLabsFullApiSchemaJsonValue);
  expand?: (string | ElevenLabsFullApiSchemaJsonValue);
  copied?: (string | ElevenLabsFullApiSchemaJsonValue);
  accept_terms?: (string | ElevenLabsFullApiSchemaJsonValue);
  dismiss_terms?: (string | ElevenLabsFullApiSchemaJsonValue);
  listening_status?: (string | ElevenLabsFullApiSchemaJsonValue);
  speaking_status?: (string | ElevenLabsFullApiSchemaJsonValue);
  connecting_status?: (string | ElevenLabsFullApiSchemaJsonValue);
  chatting_status?: (string | ElevenLabsFullApiSchemaJsonValue);
  input_label?: (string | ElevenLabsFullApiSchemaJsonValue);
  input_placeholder?: (string | ElevenLabsFullApiSchemaJsonValue);
  input_placeholder_text_only?: (string | ElevenLabsFullApiSchemaJsonValue);
  input_placeholder_new_conversation?: (string | ElevenLabsFullApiSchemaJsonValue);
  user_ended_conversation?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_ended_conversation?: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  error_occurred?: (string | ElevenLabsFullApiSchemaJsonValue);
  copy_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  initiate_feedback?: (string | ElevenLabsFullApiSchemaJsonValue);
  request_follow_up_feedback?: (string | ElevenLabsFullApiSchemaJsonValue);
  thanks_for_feedback?: (string | ElevenLabsFullApiSchemaJsonValue);
  thanks_for_feedback_details?: (string | ElevenLabsFullApiSchemaJsonValue);
  follow_up_feedback_placeholder?: (string | ElevenLabsFullApiSchemaJsonValue);
  submit?: (string | ElevenLabsFullApiSchemaJsonValue);
  go_back?: (string | ElevenLabsFullApiSchemaJsonValue);
  send_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  text_mode?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_mode?: (string | ElevenLabsFullApiSchemaJsonValue);
  switched_to_text_mode?: (string | ElevenLabsFullApiSchemaJsonValue);
  switched_to_voice_mode?: (string | ElevenLabsFullApiSchemaJsonValue);
  copy?: (string | ElevenLabsFullApiSchemaJsonValue);
  download?: (string | ElevenLabsFullApiSchemaJsonValue);
  wrap?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_working?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_done?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_error?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWidgetStyles = {
  base?: (string | ElevenLabsFullApiSchemaJsonValue);
  base_hover?: (string | ElevenLabsFullApiSchemaJsonValue);
  base_active?: (string | ElevenLabsFullApiSchemaJsonValue);
  base_border?: (string | ElevenLabsFullApiSchemaJsonValue);
  base_subtle?: (string | ElevenLabsFullApiSchemaJsonValue);
  base_primary?: (string | ElevenLabsFullApiSchemaJsonValue);
  base_error?: (string | ElevenLabsFullApiSchemaJsonValue);
  accent?: (string | ElevenLabsFullApiSchemaJsonValue);
  accent_hover?: (string | ElevenLabsFullApiSchemaJsonValue);
  accent_active?: (string | ElevenLabsFullApiSchemaJsonValue);
  accent_border?: (string | ElevenLabsFullApiSchemaJsonValue);
  accent_subtle?: (string | ElevenLabsFullApiSchemaJsonValue);
  accent_primary?: (string | ElevenLabsFullApiSchemaJsonValue);
  overlay_padding?: (number | ElevenLabsFullApiSchemaJsonValue);
  button_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  input_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  bubble_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  sheet_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  compact_sheet_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
  dropdown_sheet_radius?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWidgetLanguagePresetResponse = {
  first_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  text_contents?: (ElevenLabsFullApiSchemaWidgetTextContents | ElevenLabsFullApiSchemaJsonValue);
  terms_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_html?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_key?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaFileInputConfig = {
  enabled?: boolean;
  max_files_per_conversation?: number;
};

export type ElevenLabsFullApiSchemaConversationTokenPurpose = "signed_url" | "shareable_link";

export type ElevenLabsFullApiSchemaToolMockConfig = {
  default_return_value?: string;
  default_is_error?: boolean;
};

export type ElevenLabsFullApiSchemaAgentMetadata = {
  agent_id: string;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryMultivoiceMessageModel = {
  parts: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryMultivoiceMessagePartModel>;
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallCommonModelOutput = {
  type?: (ElevenLabsFullApiSchemaToolType | ElevenLabsFullApiSchemaJsonValue);
  request_id: string;
  tool_name: string;
  params_as_json: string;
  tool_has_been_called: boolean;
  tool_details?: ((ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallWebhookDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallClientDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallMCPDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallApiIntegrationWebhookDetailsOutput) | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptOtherToolsResultCommonModel = {
  request_id: string;
  tool_name: string;
  result_value: string;
  is_error: boolean;
  is_blocked?: boolean;
  tool_has_been_called: boolean;
  tool_latency_secs?: number;
  error_type?: string;
  raw_error_message?: string;
  dynamic_variable_updates?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel>;
  type?: ("client" | "webhook" | "mcp" | "code" | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptSystemToolResultCommonModelOutput = {
  request_id: string;
  tool_name: string;
  result_value: string;
  is_error: boolean;
  is_blocked?: boolean;
  tool_has_been_called: boolean;
  tool_latency_secs?: number;
  error_type?: string;
  raw_error_message?: string;
  dynamic_variable_updates?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel>;
  type: "system";
  result?: ((ElevenLabsFullApiSchemaEndCallToolResultModel | ElevenLabsFullApiSchemaLanguageDetectionToolResultModel | ElevenLabsFullApiSchemaTransferToAgentToolResultSuccessModel | ElevenLabsFullApiSchemaTransferToAgentToolResultErrorModel | ElevenLabsFullApiSchemaTransferToNumberResultTwilioSuccessModel | ElevenLabsFullApiSchemaTransferToNumberResultSipSuccessModel | ElevenLabsFullApiSchemaTransferToNumberResultExotelSuccessModel | ElevenLabsFullApiSchemaTransferToNumberResultErrorModel | ElevenLabsFullApiSchemaSkipTurnToolResponseModel | ElevenLabsFullApiSchemaPlayDTMFResultSuccessModel | ElevenLabsFullApiSchemaPlayDTMFResultErrorModel | ElevenLabsFullApiSchemaVoiceMailDetectionResultSuccessModel | ElevenLabsFullApiSchemaTestToolResultModel | ElevenLabsFullApiSchemaKnowledgeBaseRagToolResultModel) | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptApiIntegrationWebhookToolsResultCommonModelOutput = {
  request_id: string;
  tool_name: string;
  result_value: string;
  is_error: boolean;
  is_blocked: boolean;
  tool_has_been_called: boolean;
  tool_latency_secs: number;
  error_type: string;
  raw_error_message: string;
  dynamic_variable_updates: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel>;
  type: "api_integration_webhook";
  integration_id: string;
  credential_id: string;
  integration_connection_id: string;
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptWorkflowToolsResultCommonModelOutput = {
  request_id: string;
  tool_name: string;
  result_value: string;
  is_error: boolean;
  is_blocked?: boolean;
  tool_has_been_called: boolean;
  tool_latency_secs?: number;
  error_type?: string;
  raw_error_message?: string;
  dynamic_variable_updates?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel>;
  type: "workflow";
  result?: (ElevenLabsFullApiSchemaWorkflowToolResponseModelOutput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUserFeedback = {
  score: ElevenLabsFullApiSchemaUserFeedbackScore;
  time_in_call_secs: number;
};

export type ElevenLabsFullApiSchemaConversationTurnMetrics = {
  metrics?: {
  readonly [key: string]: ElevenLabsFullApiSchemaMetricRecord | undefined;
};
  convai_asr_provider?: (string | ElevenLabsFullApiSchemaJsonValue);
  convai_tts_model?: (string | ElevenLabsFullApiSchemaJsonValue);
  convai_tts_cascade?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRagRetrievalInfo = {
  chunks: ReadonlyArray<ElevenLabsFullApiSchemaRagChunkMetadata>;
  embedding_model: ElevenLabsFullApiSchemaEmbeddingModelEnum;
  retrieval_query: string;
  rag_latency_secs: number;
  used_chunk_ids?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaLLMUsageOutput = {
  model_usage?: {
  readonly [key: string]: ElevenLabsFullApiSchemaLLMInputOutputTokensUsage | undefined;
};
};

export type ElevenLabsFullApiSchemaChatSourceMedium = "audio" | "text" | "image" | "file";

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptFileInputResponseModel = {
  file_id: string;
  original_filename: string;
  mime_type: string;
  file_url: string;
};

export type ElevenLabsFullApiSchemaContextualUpdateInfo = {
  context_id: string;
  is_superseded?: boolean;
};

export type ElevenLabsFullApiSchemaConversationHistoryEvaluationCriteriaResultCommonModel = {
  criteria_id: string;
  result: ElevenLabsFullApiSchemaEvaluationSuccessResult;
  rationale: string;
};

export type ElevenLabsFullApiSchemaDataCollectionResultCommonModel = {
  data_collection_id: string;
  value?: ElevenLabsFullApiSchemaJsonValue;
  json_schema?: (ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | ElevenLabsFullApiSchemaJsonValue);
  rationale: string;
};

export type ElevenLabsFullApiSchemaScopedAnalysisResult = {
  scope: ElevenLabsFullApiSchemaAnalysisScope;
  source_agent_id: string;
  source_branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  evaluation_criteria_results?: {
  readonly [key: string]: ElevenLabsFullApiSchemaConversationHistoryEvaluationCriteriaResultCommonModel | undefined;
};
  data_collection_results?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDataCollectionResultCommonModel | undefined;
};
  successful: ElevenLabsFullApiSchemaEvaluationSuccessResult;
};

export type ElevenLabsFullApiSchemaDynamicVariableNestedValueTypeInput = (string | number | number | boolean | ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableNestedValueTypeInput> | ElevenLabsFullApiSchemaJsonValue);

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallCommonModelInput = {
  type?: (ElevenLabsFullApiSchemaToolType | ElevenLabsFullApiSchemaJsonValue);
  request_id: string;
  tool_name: string;
  params_as_json: string;
  tool_has_been_called: boolean;
  tool_details?: ((ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallWebhookDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallClientDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallMCPDetails | ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallApiIntegrationWebhookDetailsInput) | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptSystemToolResultCommonModelInput = {
  request_id: string;
  tool_name: string;
  result_value: string;
  is_error: boolean;
  is_blocked?: boolean;
  tool_has_been_called: boolean;
  tool_latency_secs?: number;
  error_type?: string;
  raw_error_message?: string;
  dynamic_variable_updates?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel>;
  type: "system";
  result?: ((ElevenLabsFullApiSchemaEndCallToolResultModel | ElevenLabsFullApiSchemaLanguageDetectionToolResultModel | ElevenLabsFullApiSchemaTransferToAgentToolResultSuccessModel | ElevenLabsFullApiSchemaTransferToAgentToolResultErrorModel | ElevenLabsFullApiSchemaTransferToNumberResultTwilioSuccessModel | ElevenLabsFullApiSchemaTransferToNumberResultSipSuccessModel | ElevenLabsFullApiSchemaTransferToNumberResultExotelSuccessModel | ElevenLabsFullApiSchemaTransferToNumberResultErrorModel | ElevenLabsFullApiSchemaSkipTurnToolResponseModel | ElevenLabsFullApiSchemaPlayDTMFResultSuccessModel | ElevenLabsFullApiSchemaPlayDTMFResultErrorModel | ElevenLabsFullApiSchemaVoiceMailDetectionResultSuccessModel | ElevenLabsFullApiSchemaTestToolResultModel | ElevenLabsFullApiSchemaKnowledgeBaseRagToolResultModel) | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptApiIntegrationWebhookToolsResultCommonModelInput = {
  request_id: string;
  tool_name: string;
  result_value: string;
  is_error: boolean;
  is_blocked?: boolean;
  tool_has_been_called: boolean;
  tool_latency_secs?: number;
  error_type?: string;
  raw_error_message?: string;
  dynamic_variable_updates?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel>;
  type: "api_integration_webhook";
  integration_id?: string;
  credential_id?: string;
  integration_connection_id?: string;
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptWorkflowToolsResultCommonModelInput = {
  request_id: string;
  tool_name: string;
  result_value: string;
  is_error: boolean;
  is_blocked?: boolean;
  tool_has_been_called: boolean;
  tool_latency_secs?: number;
  error_type?: string;
  raw_error_message?: string;
  dynamic_variable_updates?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel>;
  type: "workflow";
  result?: (ElevenLabsFullApiSchemaWorkflowToolResponseModelInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLLMUsageInput = {
  model_usage?: {
  readonly [key: string]: ElevenLabsFullApiSchemaLLMInputOutputTokensUsage | undefined;
};
};

export type ElevenLabsFullApiSchemaUnitTestToolCallParameter = {
  eval: (ElevenLabsFullApiSchemaLLMParameterEvaluationStrategy | ElevenLabsFullApiSchemaRegexParameterEvaluationStrategy | ElevenLabsFullApiSchemaExactParameterEvaluationStrategy | ElevenLabsFullApiSchemaMatchAnythingParameterEvaluationStrategy);
  path: string;
};

export type ElevenLabsFullApiSchemaReferencedToolCommonModel = {
  id: string;
  type: "system" | "webhook" | "client" | "workflow" | "api_integration_webhook" | "mcp" | "code";
};

export type ElevenLabsFullApiSchemaUnitTestWorkflowNodeTransitionEvaluationNodeId = {
  type?: "node_id";
  agent_id: string;
  target_node_id: string;
};

export type ElevenLabsFullApiSchemaMockingStrategy = "all" | "selected" | "none";

export type ElevenLabsFullApiSchemaMockNoMatchBehavior = "call_real_tool" | "raise_error";

export type ElevenLabsFullApiSchemaDynamicVariableNestedValueTypeOutput = (string | number | number | boolean | ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableNestedValueTypeOutput> | ElevenLabsFullApiSchemaJsonValue);

export type ElevenLabsFullApiSchemaAgentTestEntityType = "test" | "folder";

export type ElevenLabsFullApiSchemaTestRunResultBucket = {
  test_run_ids: ReadonlyArray<string>;
  title: string;
  reason: string;
  status: ElevenLabsFullApiSchemaTestRunStatus;
};

export type ElevenLabsFullApiSchemaResponseUnitTestModel = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataOutput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "llm";
  success_condition?: string;
  success_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentSuccessfulResponseExample>;
  failure_examples?: ReadonlyArray<ElevenLabsFullApiSchemaAgentFailureResponseExample>;
};

export type ElevenLabsFullApiSchemaToolCallUnitTestModel = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataOutput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "tool";
  tool_call_parameters?: (ElevenLabsFullApiSchemaUnitTestToolCallEvaluationModelOutput | ElevenLabsFullApiSchemaJsonValue);
  check_any_tool_matches?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSimulationTestModel = {
  from_conversation_metadata?: (ElevenLabsFullApiSchemaTestFromConversationMetadataOutput | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
  chat_history?: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptCommonModelOutput>;
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  type?: "simulation";
  success_condition?: (string | ElevenLabsFullApiSchemaJsonValue);
  success_conditions?: ReadonlyArray<string>;
  simulation_scenario?: string;
  simulation_max_turns?: number;
  simulation_environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  tool_mock_config?: ElevenLabsFullApiSchemaSimulationToolMockBehaviorConfig;
  evaluation_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  simulated_user_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTestRunStatus = "pending" | "passed" | "failed";

export type ElevenLabsFullApiSchemaTestConditionResultCommonModel = {
  result: ElevenLabsFullApiSchemaEvaluationSuccessResult;
  rationale?: (ElevenLabsFullApiSchemaTestConditionRationaleCommonModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTestRunMetadata = {
  workspace_id: string;
  test_name: string;
  ran_by_user_email: string;
  test_type?: "llm" | "tool_call" | "simulation";
};

export type ElevenLabsFullApiSchemaConversationDeletionSettings = {
  deletion_time_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  deleted_logs_at_time_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  deleted_audio_at_time_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  deleted_transcript_at_time_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  delete_transcript_and_pii?: boolean;
  delete_audio?: boolean;
};

export type ElevenLabsFullApiSchemaConversationHistoryFeedbackCommonModel = {
  type?: (ElevenLabsFullApiSchemaConversationFeedbackType | ElevenLabsFullApiSchemaJsonValue);
  overall_score?: (ElevenLabsFullApiSchemaUserFeedbackScore | ElevenLabsFullApiSchemaJsonValue);
  likes?: number;
  dislikes?: number;
  rating?: (number | ElevenLabsFullApiSchemaJsonValue);
  comment?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAuthorizationMethod = "invalid" | "public" | "authorization_header" | "signed_url" | "shareable_link" | "livekit_token" | "livekit_token_website" | "genesys_api_key" | "whatsapp" | "sms";

export type ElevenLabsFullApiSchemaConversationChargingCommonModel = {
  dev_discount?: boolean;
  is_burst?: boolean;
  tier?: (string | ElevenLabsFullApiSchemaJsonValue);
  llm_usage?: ElevenLabsFullApiSchemaLLMCategoryUsage;
  llm_price?: (number | ElevenLabsFullApiSchemaJsonValue);
  llm_charge?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_charge?: (number | ElevenLabsFullApiSchemaJsonValue);
  free_minutes_consumed?: number;
  free_llm_dollars_consumed?: number;
  tts_usage?: (ElevenLabsFullApiSchemaConversationTTSUsageModel | ElevenLabsFullApiSchemaJsonValue);
  asr_usage?: (ElevenLabsFullApiSchemaConversationASRUsageModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTwilioPhoneCallModel = {
  direction: ElevenLabsFullApiSchemaTelephonyDirection;
  phone_number_id: string;
  agent_number: string;
  external_number: string;
  type: "twilio";
  stream_sid: string;
  call_sid: string;
};

export type ElevenLabsFullApiSchemaConversationHistoryExotelPhoneCallModel = {
  direction: ElevenLabsFullApiSchemaTelephonyDirection;
  phone_number_id: string;
  agent_number: string;
  external_number: string;
  type?: "exotel";
  stream_sid: string;
  call_sid: string;
};

export type ElevenLabsFullApiSchemaConversationHistorySIPTrunkingPhoneCallModel = {
  direction: ElevenLabsFullApiSchemaTelephonyDirection;
  phone_number_id: string;
  agent_number: string;
  external_number: string;
  type: "sip_trunking";
  call_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  call_sid: string;
  sip_header_dynamic_variables?: {
  readonly [key: string]: string | undefined;
};
};

export type ElevenLabsFullApiSchemaConversationHistoryBatchCallModel = {
  batch_call_id: string;
  batch_call_recipient_id: string;
};

export type ElevenLabsFullApiSchemaConversationHistoryErrorCommonModel = {
  code: number;
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryRagUsageCommonModel = {
  usage_count: number;
  embedding_model: string;
};

export type ElevenLabsFullApiSchemaFeaturesUsageCommonModel = {
  language_detection?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  transfer_to_agent?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  transfer_to_number?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  multivoice?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  dtmf_tones?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  external_mcp_servers?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  pii_zrm_workspace?: boolean;
  pii_zrm_agent?: boolean;
  tool_dynamic_variable_updates?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  is_livekit?: boolean;
  voicemail_detection?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  dtmf_input?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  workflow?: ElevenLabsFullApiSchemaWorkflowFeaturesUsageCommonModel;
  agent_testing?: ElevenLabsFullApiSchemaTestsFeatureUsageCommonModel;
  versioning?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  file_input?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
};

export type ElevenLabsFullApiSchemaConversationHistoryElevenAssistantCommonModel = {
  is_eleven_assistant?: boolean;
};

export type ElevenLabsFullApiSchemaAsyncConversationMetadata = {
  delivery_status: "pending" | "success" | "failed";
  delivery_timestamp: number;
  delivery_error?: (string | ElevenLabsFullApiSchemaJsonValue);
  external_system: string;
  external_id: string;
  external_link?: (string | ElevenLabsFullApiSchemaJsonValue);
  retry_count?: number;
  last_retry_timestamp?: (number | ElevenLabsFullApiSchemaJsonValue);
  last_processed_external_message_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWhatsAppConversationInfo = {
  direction?: "inbound" | "outbound" | "unknown";
  whatsapp_phone_number_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  whatsapp_user_id: string;
  awaiting_first_user_message?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSMSConversationInfo = {
  direction: "inbound" | "outbound";
  phone_number_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  sms_user_phone_number: string;
  agent_phone_number?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentDefinitionSource = "cli" | "ui" | "api" | "template" | "unknown";

export type ElevenLabsFullApiSchemaConversationVoiceRewardModel = {
  voice_id: string;
  reward_usd_cents: number;
};

export type ElevenLabsFullApiSchemaConversationConfigClientOverrideOutput = {
  asr?: (ElevenLabsFullApiSchemaASRConversationalConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  turn?: (ElevenLabsFullApiSchemaTurnConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  tts?: (ElevenLabsFullApiSchemaTTSConversationalConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  conversation?: (ElevenLabsFullApiSchemaConversationConfigOverride | ElevenLabsFullApiSchemaJsonValue);
  agent?: (ElevenLabsFullApiSchemaAgentConfigOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSIPLogMessageDirection = "in" | "out";

export type ElevenLabsFullApiSchemaSearchHighlightSegment = {
  value: string;
  is_hit: boolean;
};

export type ElevenLabsFullApiSchemaTwilioRegionId = "us1" | "ie1" | "au1";

export type ElevenLabsFullApiSchemaTwilioEdgeLocation = "ashburn" | "dublin" | "frankfurt" | "sao-paulo" | "singapore" | "sydney" | "tokyo" | "umatilla" | "roaming";

export type ElevenLabsFullApiSchemaSIPMediaEncryptionEnum = "disabled" | "allowed" | "required";

export type ElevenLabsFullApiSchemaSIPTrunkCredentialsRequestModel = {
  username: string;
  password?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSIPTrunkTransportEnum = "auto" | "udp" | "tcp" | "tls";

export type ElevenLabsFullApiSchemaMediaCodec = "G722/8000" | "PCMU/8000" | "PCMA/8000";

export type ElevenLabsFullApiSchemaLLMReasoningEffort = "none" | "minimal" | "low" | "medium" | "high" | "xhigh";

export type ElevenLabsFullApiSchemaLLMDeprecationInfoModel = {
  llm: ElevenLabsFullApiSchemaLLM;
  is_deprecated: boolean;
  is_in_warning_period?: boolean;
  is_in_fallback_period?: boolean;
  fallback_percentage?: number;
  provider_deprecation_date?: (string | ElevenLabsFullApiSchemaJsonValue);
  replacement_model?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  deprecation_config?: (ElevenLabsFullApiSchemaLLMDeprecationConfigModel | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRegionalProcessingSurchargeInfo = {
  multiplier: number;
};

export type ElevenLabsFullApiSchemaExternalSyncType = "google_drive";

export type ElevenLabsFullApiSchemaToolErrorHandlingMode = "auto" | "summarized" | "passthrough" | "hide";

export type ElevenLabsFullApiSchemaDynamicVariablesConfigInput = {
  dynamic_variable_placeholders?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
};
};

export type ElevenLabsFullApiSchemaWebhookToolApiSchemaConfigInput = {
  request_headers?: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIDynamicVariable | ElevenLabsFullApiSchemaConvAIEnvVarLocator) | undefined;
};
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path_params_schema?: {
  readonly [key: string]: ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | undefined;
};
  query_params_schema?: (ElevenLabsFullApiSchemaQueryParamsJsonSchema | ElevenLabsFullApiSchemaJsonValue);
  request_body_schema?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyInput | ElevenLabsFullApiSchemaJsonValue);
  response_body_schema?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyInput | ElevenLabsFullApiSchemaJsonValue);
  content_type?: "application/json" | "application/x-www-form-urlencoded";
  auth_resolved_params?: ReadonlyArray<string>;
  auth_connection?: (ElevenLabsFullApiSchemaAuthConnectionLocator | ElevenLabsFullApiSchemaEnvironmentAuthConnectionLocator | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaObjectJsonSchemaPropertyInput = {
  type?: "object";
  required?: ReadonlyArray<string>;
  description?: string;
  properties?: {
  readonly [key: string]: (ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | ElevenLabsFullApiSchemaObjectJsonSchemaPropertyInput | ElevenLabsFullApiSchemaArrayJsonSchemaPropertyInput) | undefined;
};
  required_constraints?: (ElevenLabsFullApiSchemaRequiredConstraints | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaEndCallToolConfig = {
  system_tool_type?: "end_call";
};

export type ElevenLabsFullApiSchemaLanguageDetectionToolConfig = {
  system_tool_type?: "language_detection";
};

export type ElevenLabsFullApiSchemaTransferToAgentToolConfig = {
  system_tool_type?: "transfer_to_agent";
  transfers: ReadonlyArray<ElevenLabsFullApiSchemaAgentTransfer>;
};

export type ElevenLabsFullApiSchemaTransferToNumberToolConfigInput = {
  system_tool_type?: "transfer_to_number";
  transfers: ReadonlyArray<ElevenLabsFullApiSchemaPhoneNumberTransfer>;
  enable_client_message?: boolean;
};

export type ElevenLabsFullApiSchemaSkipTurnToolConfig = {
  system_tool_type?: "skip_turn";
};

export type ElevenLabsFullApiSchemaPlayDTMFToolConfig = {
  system_tool_type?: "play_keypad_touch_tone";
  use_out_of_band_dtmf?: boolean;
  suppress_turn_after_dtmf?: boolean;
};

export type ElevenLabsFullApiSchemaVoicemailDetectionToolConfig = {
  system_tool_type?: "voicemail_detection";
  voicemail_message?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaKnowledgeBaseRagToolConfig = {
  system_tool_type?: "knowledge_base_rag";
};

export type ElevenLabsFullApiSchemaStartProcedureToolConfigInput = {
  system_tool_type?: "start_procedure";
  procedures?: {
  readonly [key: string]: ElevenLabsFullApiSchemaProcedureAtVersionInput | undefined;
};
};

export type ElevenLabsFullApiSchemaEndProcedureToolConfigInput = {
  system_tool_type?: "end_procedure";
  procedures?: {
  readonly [key: string]: ElevenLabsFullApiSchemaProcedureAtVersionInput | undefined;
};
};

export type ElevenLabsFullApiSchemaIntegrationType = "mcp_server" | "mcp_integration";

export type ElevenLabsFullApiSchemaDynamicVariablesConfigOutput = {
  dynamic_variable_placeholders?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
};

export type ElevenLabsFullApiSchemaWebhookToolApiSchemaConfigOutput = {
  request_headers?: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIDynamicVariable | ElevenLabsFullApiSchemaConvAIEnvVarLocator) | undefined;
};
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path_params_schema?: {
  readonly [key: string]: ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | undefined;
};
  query_params_schema?: (ElevenLabsFullApiSchemaQueryParamsJsonSchema | ElevenLabsFullApiSchemaJsonValue);
  request_body_schema?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyOutput | ElevenLabsFullApiSchemaJsonValue);
  response_body_schema?: (ElevenLabsFullApiSchemaObjectJsonSchemaPropertyOutput | ElevenLabsFullApiSchemaJsonValue);
  content_type?: "application/json" | "application/x-www-form-urlencoded";
  auth_resolved_params?: ReadonlyArray<string>;
  auth_connection?: (ElevenLabsFullApiSchemaAuthConnectionLocator | ElevenLabsFullApiSchemaEnvironmentAuthConnectionLocator | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaObjectJsonSchemaPropertyOutput = {
  type?: "object";
  required?: ReadonlyArray<string>;
  description?: string;
  properties?: {
  readonly [key: string]: (ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | ElevenLabsFullApiSchemaObjectJsonSchemaPropertyOutput | ElevenLabsFullApiSchemaArrayJsonSchemaPropertyOutput) | undefined;
};
  required_constraints?: (ElevenLabsFullApiSchemaRequiredConstraints | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTransferToNumberToolConfigOutput = {
  system_tool_type?: "transfer_to_number";
  transfers: ReadonlyArray<ElevenLabsFullApiSchemaPhoneNumberTransfer>;
  enable_client_message?: boolean;
};

export type ElevenLabsFullApiSchemaStartProcedureToolConfigOutput = {
  system_tool_type?: "start_procedure";
  procedures?: {
  readonly [key: string]: ElevenLabsFullApiSchemaProcedureAtVersionOutput | undefined;
};
};

export type ElevenLabsFullApiSchemaEndProcedureToolConfigOutput = {
  system_tool_type?: "end_procedure";
  procedures?: {
  readonly [key: string]: ElevenLabsFullApiSchemaProcedureAtVersionOutput | undefined;
};
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallWebhookDetails = {
  type?: "webhook";
  method: string;
  url: string;
  headers?: {
  readonly [key: string]: string | undefined;
};
  path_params?: {
  readonly [key: string]: string | undefined;
};
  query_params?: {
  readonly [key: string]: string | undefined;
};
  body?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallClientDetails = {
  type?: "client";
  parameters: string;
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallMCPDetails = {
  type?: "mcp";
  mcp_server_id: string;
  mcp_server_name: string;
  integration_type: string;
  parameters?: {
  readonly [key: string]: string | undefined;
};
  approval_policy: string;
  requires_approval?: boolean;
  mcp_tool_name?: string;
  mcp_tool_description?: string;
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallApiIntegrationWebhookDetailsOutput = {
  type: "api_integration_webhook";
  integration_id: string;
  credential_id: string;
  integration_connection_id: string;
  webhook_details: ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallWebhookDetails;
};

export type ElevenLabsFullApiSchemaWebhookEventType = "transcript" | "audio" | "call_initiation_failure";

export type ElevenLabsFullApiSchemaWebhookTranscriptFormat = "json" | "opentelemetry";

export type ElevenLabsFullApiSchemaSecretDependencyType = "conversation_initiation_webhook";

export type ElevenLabsFullApiSchemaBatchCallRecipientStatus = "pending" | "dispatched" | "initiated" | "in_progress" | "completed" | "failed" | "cancelled" | "voicemail";

export type ElevenLabsFullApiSchemaConversationInitiationClientDataInternal = {
  conversation_config_override?: ElevenLabsFullApiSchemaConversationConfigClientOverrideOutput;
  custom_llm_extra_body?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  source_info?: ElevenLabsFullApiSchemaConversationInitiationSourceInfo;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  starting_workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: {
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
};
  tool_mock_config?: ElevenLabsFullApiSchemaOrchestratorToolMockBehaviorConfig;
};

export type ElevenLabsFullApiSchemaMCPToolApprovalHash = {
  tool_name: string;
  tool_hash: string;
  approval_policy?: ElevenLabsFullApiSchemaMCPToolApprovalPolicy;
};

export type ElevenLabsFullApiSchemaMCPServerTransport = "SSE" | "STREAMABLE_HTTP";

export type ElevenLabsFullApiSchemaConvAIUserSecretDBModel = {
  id: string;
  name: string;
  encrypted_value: string;
  nonce: string;
};

export type ElevenLabsFullApiSchemaMCPToolConfigOverrideInput = {
  tool_name: string;
  force_pre_tool_speech?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  pre_tool_speech?: (ElevenLabsFullApiSchemaPreToolSpeechMode | ElevenLabsFullApiSchemaJsonValue);
  disable_interruptions?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: (ElevenLabsFullApiSchemaToolCallSoundBehavior | ElevenLabsFullApiSchemaJsonValue);
  execution_mode?: (ElevenLabsFullApiSchemaToolExecutionMode | ElevenLabsFullApiSchemaJsonValue);
  response_timeout_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  input_overrides?: ({
  readonly [key: string]: (ElevenLabsFullApiSchemaConstantSchemaOverride | ElevenLabsFullApiSchemaDynamicVariableSchemaOverride | ElevenLabsFullApiSchemaLLMSchemaOverride | ElevenLabsFullApiSchemaOmitSchemaOverride) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  response_mocks?: (ReadonlyArray<ElevenLabsFullApiSchemaToolResponseMockConfigInput> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaIcon = {
  src: string;
  mimeType?: (string | ElevenLabsFullApiSchemaJsonValue);
  sizes?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | string | (string | ElevenLabsFullApiSchemaJsonValue) | (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue) | undefined;
};

export type ElevenLabsFullApiSchemaToolAnnotations = {
  title?: (string | ElevenLabsFullApiSchemaJsonValue);
  readOnlyHint?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  destructiveHint?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  idempotentHint?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  openWorldHint?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | (string | ElevenLabsFullApiSchemaJsonValue) | (boolean | ElevenLabsFullApiSchemaJsonValue) | undefined;
};

export type ElevenLabsFullApiSchemaToolExecution = {
  taskSupport?: ("forbidden" | "optional" | "required" | ElevenLabsFullApiSchemaJsonValue);
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | ("forbidden" | "optional" | "required" | ElevenLabsFullApiSchemaJsonValue) | undefined;
};

export type ElevenLabsFullApiSchemaAgentDeploymentRequestItem = {
  branch_id: string;
  deployment_strategy: ElevenLabsFullApiSchemaAgentDeploymentPercentageStrategy;
};

export type ElevenLabsFullApiSchemaASRQuality = "high";

export type ElevenLabsFullApiSchemaASRProvider = "elevenlabs" | "scribe_realtime";

export type ElevenLabsFullApiSchemaASRInputFormat = "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_44100" | "pcm_48000" | "ulaw_8000";

export type ElevenLabsFullApiSchemaTTSConversationalModel = "eleven_turbo_v2" | "eleven_turbo_v2_5" | "eleven_flash_v2" | "eleven_flash_v2_5" | "eleven_multilingual_v2" | "eleven_v3_conversational";

export type ElevenLabsFullApiSchemaSupportedVoice = {
  label: string;
  voice_id: string;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  model_family?: (ElevenLabsFullApiSchemaTTSModelFamily | ElevenLabsFullApiSchemaJsonValue);
  optimize_streaming_latency?: (ElevenLabsFullApiSchemaTTSOptimizeStreamingLatency | ElevenLabsFullApiSchemaJsonValue);
  stability?: (number | ElevenLabsFullApiSchemaJsonValue);
  speed?: (number | ElevenLabsFullApiSchemaJsonValue);
  similarity_boost?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSuggestedAudioTag = {
  tag: string;
  description?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTTSOutputFormat = "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_44100" | "pcm_48000" | "ulaw_8000";

export type ElevenLabsFullApiSchemaTTSOptimizeStreamingLatency = 0 | 1 | 2 | 3 | 4;

export type ElevenLabsFullApiSchemaTextNormalisationType = "system_prompt" | "elevenlabs";

export type ElevenLabsFullApiSchemaPydanticPronunciationDictionaryVersionLocator = {
  pronunciation_dictionary_id: string;
  version_id: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTurnMode = "silence" | "turn";

export type ElevenLabsFullApiSchemaTurnEagerness = "patient" | "normal" | "eager";

export type ElevenLabsFullApiSchemaSpellingPatience = "auto" | "off";

export type ElevenLabsFullApiSchemaTurnModel = "turn_v2" | "turn_v3";

export type ElevenLabsFullApiSchemaClientEvent = "conversation_initiation_metadata" | "asr_initiation_metadata" | "ping" | "audio" | "interruption" | "user_transcript" | "tentative_user_transcript" | "agent_response" | "agent_response_correction" | "client_tool_call" | "mcp_tool_call" | "mcp_connection_status" | "agent_tool_request" | "agent_tool_response" | "agent_tool_response_full_payload" | "agent_response_metadata" | "vad_score" | "agent_chat_response_part" | "client_error" | "guardrail_triggered" | "dtmf_request" | "agent_response_complete" | "internal_turn_probability" | "internal_tentative_agent_response";

export type ElevenLabsFullApiSchemaBackgroundSoundConfig = {
  source_type?: (ElevenLabsFullApiSchemaBackgroundSoundSourceType | ElevenLabsFullApiSchemaJsonValue);
  source_id?: (ElevenLabsFullApiSchemaBackgroundSoundPresetId | ElevenLabsFullApiSchemaJsonValue);
  volume?: number;
  crossfade_loop?: boolean;
};

export type ElevenLabsFullApiSchemaConversationHistoryRedactionConfig = {
  enabled?: boolean;
  entities?: ReadonlyArray<ElevenLabsFullApiSchemaConfigEntityType>;
};

export type ElevenLabsFullApiSchemaSectionSource = {
  song_id: string;
  range: ElevenLabsFullApiSchemaTimeRange;
  negative_ranges?: ReadonlyArray<ElevenLabsFullApiSchemaTimeRange>;
};

export type ElevenLabsFullApiSchemaTimeRange = {
  start_ms: number;
  end_ms: number;
};

export type ElevenLabsFullApiSchemaOrderItemRequestOutput = (ElevenLabsFullApiSchemaDubOrderItemRequest | ElevenLabsFullApiSchemaSubtitleOrderItemRequest);

export type ElevenLabsFullApiSchemaOrderItemRequestInput = (ElevenLabsFullApiSchemaDubOrderItemRequest | ElevenLabsFullApiSchemaSubtitleOrderItemRequest);

export type ElevenLabsFullApiSchemaLanguagePairInfo = {
  source_language: ElevenLabsFullApiSchemaLanguageInfo;
  destination_languages: ReadonlyArray<ElevenLabsFullApiSchemaLanguageInfo>;
};

export type ElevenLabsFullApiSchemaLanguageInfo = {
  code: string;
  label: string;
};

export type ElevenLabsFullApiSchemaUtteranceResponseModel = {
  start: number;
  end: number;
};

export type ElevenLabsFullApiSchemaRecordingResponseModel = {
  recording_id: string;
  mime_type: string;
  size_bytes: number;
  upload_date_unix: number;
  transcription: string;
};

export type ElevenLabsFullApiSchemaManualVerificationFileResponseModel = {
  file_id: string;
  file_name: string;
  mime_type: string;
  size_bytes: number;
  upload_date_unix: number;
};

export type ElevenLabsFullApiSchemaReferenceVideo = {
  generation_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  content_asset_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  template_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  studio_clip?: (ElevenLabsFullApiSchemaStudioClipReference | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVideoAnalysisResult = {
  title: string;
  description: string;
  content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  overall_pacing?: (string | ElevenLabsFullApiSchemaJsonValue);
  subjects?: ReadonlyArray<ElevenLabsFullApiSchemaVideoSubject>;
  segments?: ReadonlyArray<ElevenLabsFullApiSchemaVideoSegment>;
  key_moments?: ReadonlyArray<ElevenLabsFullApiSchemaVideoKeyMoment>;
};

export type ElevenLabsFullApiSchemaAssetTranscriptionData = {
  language_code: string;
  text: string;
  words: ReadonlyArray<string>;
  word_start_times_ms: ReadonlyArray<number>;
  word_end_times_ms: ReadonlyArray<number>;
  word_speaker_ids: ReadonlyArray<(string | ElevenLabsFullApiSchemaJsonValue)>;
};

export type ElevenLabsFullApiSchemaAudioAnalysisResult = {
  title: string;
  description: string;
  content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  overall_pacing?: (string | ElevenLabsFullApiSchemaJsonValue);
  segments?: ReadonlyArray<ElevenLabsFullApiSchemaAudioSegment>;
  key_moments?: ReadonlyArray<ElevenLabsFullApiSchemaAudioKeyMoment>;
};

export type ElevenLabsFullApiSchemaImageAnalysisResult = {
  title: string;
  description: string;
  content_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  mood_and_style?: (string | ElevenLabsFullApiSchemaJsonValue);
  composition_notes?: (string | ElevenLabsFullApiSchemaJsonValue);
  visible_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  subjects?: ReadonlyArray<ElevenLabsFullApiSchemaImageSubject>;
};

export type ElevenLabsFullApiSchemaChapterContentBlockTtsNodeResponseModel = {
  type: "tts_node";
  project_voice_ref_id: string;
  text: string;
  voice_id: string;
};

export type ElevenLabsFullApiSchemaChapterContentBlockExtendableNodeResponseModel = {
  type: "_other";
};

export type ElevenLabsFullApiSchemaChapterContentParagraphTtsNodeInputModel = {
  type: "tts_node";
  text: string;
  voice_id: string;
};

export type ElevenLabsFullApiSchemaDubbingTranscriptCharacter = {
  text?: string;
  start_s?: number;
  end_s?: number;
};

export type ElevenLabsFullApiSchemaUserModel = {
  name?: (string | ElevenLabsFullApiSchemaJsonValue);
  uid?: (string | ElevenLabsFullApiSchemaJsonValue);
  type_id?: ElevenLabsFullApiSchemaUserTypeId;
  type?: (string | ElevenLabsFullApiSchemaJsonValue);
  email_addr?: (string | ElevenLabsFullApiSchemaJsonValue);
  full_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  domain?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaUrlModel = {
  url_string?: (string | ElevenLabsFullApiSchemaJsonValue);
  scheme?: (string | ElevenLabsFullApiSchemaJsonValue);
  hostname?: (string | ElevenLabsFullApiSchemaJsonValue);
  port?: (number | ElevenLabsFullApiSchemaJsonValue);
  path?: (string | ElevenLabsFullApiSchemaJsonValue);
  query_string?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWebhookUsageType = "ConvAI Agent Settings" | "ConvAI Settings" | "Voice Library Removal Notices" | "Speech to Text" | "Agent QA Evaluations";

export type ElevenLabsFullApiSchemaSegmentedJsonExportOptions = {
  include_speakers?: boolean;
  include_timestamps?: boolean;
  format: "segmented_json";
  segment_on_silence_longer_than_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_duration_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_chars?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDocxExportOptions = {
  include_speakers?: boolean;
  include_timestamps?: boolean;
  format: "docx";
  segment_on_silence_longer_than_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_duration_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_chars?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPdfExportOptions = {
  include_speakers?: boolean;
  include_timestamps?: boolean;
  format: "pdf";
  segment_on_silence_longer_than_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_duration_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_chars?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTxtExportOptions = {
  max_characters_per_line?: (number | ElevenLabsFullApiSchemaJsonValue);
  include_speakers?: boolean;
  include_timestamps?: boolean;
  format: "txt";
  segment_on_silence_longer_than_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_duration_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_chars?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaHtmlExportOptions = {
  include_speakers?: boolean;
  include_timestamps?: boolean;
  format: "html";
  segment_on_silence_longer_than_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_duration_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_chars?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSrtExportOptions = {
  max_characters_per_line?: (number | ElevenLabsFullApiSchemaJsonValue);
  include_speakers?: boolean;
  include_timestamps?: boolean;
  format: "srt";
  segment_on_silence_longer_than_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_duration_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_segment_chars?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaASRConversationalConfigOverride = {
  keywords?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTurnConfigOverride = {
  soft_timeout_config?: (ElevenLabsFullApiSchemaSoftTimeoutConfigOverride | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTTSConversationalConfigOverride = {
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  stability?: (number | ElevenLabsFullApiSchemaJsonValue);
  speed?: (number | ElevenLabsFullApiSchemaJsonValue);
  similarity_boost?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationConfigOverride = {
  text_only?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentConfigOverrideInput = {
  first_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  max_conversation_duration_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  prompt?: (ElevenLabsFullApiSchemaPromptAgentAPIModelOverrideInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateImageParamDetails = {
  link: string;
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateDocumentParamDetails = {
  link: string;
  filename?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWhatsAppTemplateLocationParamDetails = {
  latitude: string;
  longitude: string;
  name: string;
  address: string;
};

export type ElevenLabsFullApiSchemaSoftTimeoutConfig = {
  timeout_seconds?: number;
  message?: string;
  additional_soft_timeout_messages?: ReadonlyArray<string>;
  use_llm_generated_message?: boolean;
  randomize_fillers?: boolean;
  max_soft_timeouts_per_generation?: number;
  llm_generated_message_prompt_override?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLanguagePresetTranslation = {
  source_hash: string;
  text: string;
};

export type ElevenLabsFullApiSchemaBehaviorOverride = {
  verbosity?: (ElevenLabsFullApiSchemaVerbosity | ElevenLabsFullApiSchemaJsonValue);
  output_format?: (ElevenLabsFullApiSchemaOutputFormat | ElevenLabsFullApiSchemaJsonValue);
  interaction_budget?: (ElevenLabsFullApiSchemaInteractionBudget | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPromptAgentAPIModelInput = {
  prompt?: string;
  llm?: ElevenLabsFullApiSchemaLLM;
  reasoning_effort?: (ElevenLabsFullApiSchemaLLMReasoningEffort | ElevenLabsFullApiSchemaJsonValue);
  thinking_budget?: (number | ElevenLabsFullApiSchemaJsonValue);
  temperature?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_tokens?: number;
  tool_ids?: ReadonlyArray<string>;
  built_in_tools?: ElevenLabsFullApiSchemaBuiltInToolsInput;
  mcp_server_ids?: ReadonlyArray<string>;
  native_mcp_server_ids?: ReadonlyArray<string>;
  knowledge_base?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator>;
  custom_llm?: (ElevenLabsFullApiSchemaCustomLLM | ElevenLabsFullApiSchemaJsonValue);
  ignore_default_personality?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  rag?: ElevenLabsFullApiSchemaRagConfig;
  timezone?: (string | ElevenLabsFullApiSchemaJsonValue);
  backup_llm_config?: (ElevenLabsFullApiSchemaBackupLLMDefault | ElevenLabsFullApiSchemaBackupLLMDisabled | ElevenLabsFullApiSchemaBackupLLMOverride);
  cascade_timeout_seconds?: number;
  tools?: ReadonlyArray<(ElevenLabsFullApiSchemaWebhookToolConfigInput | ElevenLabsFullApiSchemaClientToolConfigInput | ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaMCPToolConfigInput | ElevenLabsFullApiSchemaApiIntegrationWebhookToolConfigInput | ElevenLabsFullApiSchemaSMBToolConfig)>;
};

export type ElevenLabsFullApiSchemaWidgetLanguagePreset = {
  text_contents?: (ElevenLabsFullApiSchemaWidgetTextContents | ElevenLabsFullApiSchemaJsonValue);
  terms_text?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_html?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_key?: (string | ElevenLabsFullApiSchemaJsonValue);
  terms_translation?: (ElevenLabsFullApiSchemaWidgetTermsTranslation | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationConfigClientOverrideConfigInput = {
  asr?: ElevenLabsFullApiSchemaASRConversationalConfigOverrideConfig;
  turn?: ElevenLabsFullApiSchemaTurnConfigOverrideConfig;
  tts?: ElevenLabsFullApiSchemaTTSConversationalConfigOverrideConfig;
  conversation?: ElevenLabsFullApiSchemaConversationConfigOverrideConfig;
  agent?: ElevenLabsFullApiSchemaAgentConfigOverrideConfig;
};

export type ElevenLabsFullApiSchemaAttachedTestModel = {
  test_id: string;
  workflow_node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaFocusGuardrail = {
  is_enabled?: boolean;
};

export type ElevenLabsFullApiSchemaPromptInjectionGuardrail = {
  is_enabled?: boolean;
};

export type ElevenLabsFullApiSchemaContentGuardrailInput = {
  execution_mode?: ElevenLabsFullApiSchemaGuardrailExecutionMode;
  config?: ElevenLabsFullApiSchemaContentConfig;
  trigger_action?: (ElevenLabsFullApiSchemaEndCallTriggerAction | ElevenLabsFullApiSchemaRetryTriggerAction);
};

export type ElevenLabsFullApiSchemaModerationGuardrailInput = {
  execution_mode?: ElevenLabsFullApiSchemaGuardrailExecutionMode;
  config?: ElevenLabsFullApiSchemaModerationConfig;
};

export type ElevenLabsFullApiSchemaCustomGuardrailInput = {
  config?: ElevenLabsFullApiSchemaCustomGuardrailsConfigInput;
};

export type ElevenLabsFullApiSchemaWorkflowUnconditionalModelInput = {
  label?: (string | ElevenLabsFullApiSchemaJsonValue);
  type?: "unconditional";
};

export type ElevenLabsFullApiSchemaWorkflowLLMConditionModelInput = {
  label?: (string | ElevenLabsFullApiSchemaJsonValue);
  type?: "llm";
  condition: string;
};

export type ElevenLabsFullApiSchemaWorkflowResultConditionModelInput = {
  label?: (string | ElevenLabsFullApiSchemaJsonValue);
  type?: "result";
  successful: boolean;
};

export type ElevenLabsFullApiSchemaWorkflowExpressionConditionModelInput = {
  label?: (string | ElevenLabsFullApiSchemaJsonValue);
  type?: "expression";
  expression: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaPositionInput = {
  x?: number;
  y?: number;
};

export type ElevenLabsFullApiSchemaCustomSIPHeader = {
  type?: "static";
  key: string;
  value: string;
};

export type ElevenLabsFullApiSchemaCustomSIPHeaderWithDynamicVariable = {
  type: "dynamic";
  key: string;
  value: string;
};

export type ElevenLabsFullApiSchemaPhoneNumberTransferDestination = {
  type?: "phone";
  phone_number: string;
};

export type ElevenLabsFullApiSchemaSIPUriTransferDestination = {
  type?: "sip_uri";
  sip_uri: string;
};

export type ElevenLabsFullApiSchemaPhoneNumberDynamicVariableTransferDestination = {
  type?: "phone_dynamic_variable";
  phone_number: string;
};

export type ElevenLabsFullApiSchemaSIPUriDynamicVariableTransferDestination = {
  type?: "sip_uri_dynamic_variable";
  sip_uri: string;
};

export type ElevenLabsFullApiSchemaTransferTypeEnum = "blind" | "conference" | "sip_refer";

export type ElevenLabsFullApiSchemaPostDialDigitsStatic = {
  type?: "static";
  value: string;
};

export type ElevenLabsFullApiSchemaPostDialDigitsDynamicVariable = {
  type?: "dynamic";
  value: string;
};

export type ElevenLabsFullApiSchemaConversationalConfigAPIModelWorkflowOverrideInput = {
  asr?: (ElevenLabsFullApiSchemaASRConversationalConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  turn?: (ElevenLabsFullApiSchemaTurnConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  tts?: (ElevenLabsFullApiSchemaTTSConversationalConfigWorkflowOverrideInput | ElevenLabsFullApiSchemaJsonValue);
  conversation?: (ElevenLabsFullApiSchemaConversationConfigWorkflowOverrideInput | ElevenLabsFullApiSchemaJsonValue);
  language_presets?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaLanguagePresetInput | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  vad?: (ElevenLabsFullApiSchemaVADConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  agent?: (ElevenLabsFullApiSchemaAgentConfigAPIModelWorkflowOverrideInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaKnowledgeBaseLocator = {
  type: ElevenLabsFullApiSchemaKnowledgeBaseDocumentType;
  name: string;
  id: string;
  usage_mode?: ElevenLabsFullApiSchemaDocumentUsageModeEnum;
};

export type ElevenLabsFullApiSchemaEntryBehavior = "generate_immediately" | "wait_for_user" | "auto";

export type ElevenLabsFullApiSchemaWorkflowToolLocator = {
  tool_id: string;
};

export type ElevenLabsFullApiSchemaPromptAgentAPIModelOutput = {
  prompt?: string;
  llm?: ElevenLabsFullApiSchemaLLM;
  reasoning_effort?: (ElevenLabsFullApiSchemaLLMReasoningEffort | ElevenLabsFullApiSchemaJsonValue);
  thinking_budget?: (number | ElevenLabsFullApiSchemaJsonValue);
  temperature?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_tokens?: number;
  tool_ids?: ReadonlyArray<string>;
  built_in_tools?: ElevenLabsFullApiSchemaBuiltInToolsOutput;
  mcp_server_ids?: ReadonlyArray<string>;
  native_mcp_server_ids?: ReadonlyArray<string>;
  knowledge_base?: ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator>;
  custom_llm?: (ElevenLabsFullApiSchemaCustomLLM | ElevenLabsFullApiSchemaJsonValue);
  ignore_default_personality?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  rag?: ElevenLabsFullApiSchemaRagConfig;
  timezone?: (string | ElevenLabsFullApiSchemaJsonValue);
  backup_llm_config?: (ElevenLabsFullApiSchemaBackupLLMDefault | ElevenLabsFullApiSchemaBackupLLMDisabled | ElevenLabsFullApiSchemaBackupLLMOverride);
  cascade_timeout_seconds?: number;
  tools?: ReadonlyArray<(ElevenLabsFullApiSchemaWebhookToolConfigOutput | ElevenLabsFullApiSchemaClientToolConfigOutput | ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaMCPToolConfigOutput | ElevenLabsFullApiSchemaApiIntegrationWebhookToolConfigOutput | ElevenLabsFullApiSchemaSMBToolConfig)>;
};

export type ElevenLabsFullApiSchemaConversationConfigClientOverrideConfigOutput = {
  asr?: ElevenLabsFullApiSchemaASRConversationalConfigOverrideConfig;
  turn?: ElevenLabsFullApiSchemaTurnConfigOverrideConfig;
  tts?: ElevenLabsFullApiSchemaTTSConversationalConfigOverrideConfig;
  conversation?: ElevenLabsFullApiSchemaConversationConfigOverrideConfig;
  agent?: ElevenLabsFullApiSchemaAgentConfigOverrideConfig;
};

export type ElevenLabsFullApiSchemaContentGuardrailOutput = {
  execution_mode?: ElevenLabsFullApiSchemaGuardrailExecutionMode;
  config?: ElevenLabsFullApiSchemaContentConfig;
  trigger_action?: (ElevenLabsFullApiSchemaEndCallTriggerAction | ElevenLabsFullApiSchemaRetryTriggerAction);
};

export type ElevenLabsFullApiSchemaModerationGuardrailOutput = {
  execution_mode?: ElevenLabsFullApiSchemaGuardrailExecutionMode;
  config?: ElevenLabsFullApiSchemaModerationConfig;
};

export type ElevenLabsFullApiSchemaCustomGuardrailOutput = {
  config?: ElevenLabsFullApiSchemaCustomGuardrailsConfigOutput;
};

export type ElevenLabsFullApiSchemaWorkflowUnconditionalModelOutput = {
  label: (string | ElevenLabsFullApiSchemaJsonValue);
  type: "unconditional";
};

export type ElevenLabsFullApiSchemaWorkflowLLMConditionModelOutput = {
  label: (string | ElevenLabsFullApiSchemaJsonValue);
  type: "llm";
  condition: string;
};

export type ElevenLabsFullApiSchemaWorkflowResultConditionModelOutput = {
  label: (string | ElevenLabsFullApiSchemaJsonValue);
  type: "result";
  successful: boolean;
};

export type ElevenLabsFullApiSchemaWorkflowExpressionConditionModelOutput = {
  label: (string | ElevenLabsFullApiSchemaJsonValue);
  type: "expression";
  expression: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaPositionOutput = {
  x: number;
  y: number;
};

export type ElevenLabsFullApiSchemaConversationalConfigAPIModelWorkflowOverrideOutput = {
  asr?: (ElevenLabsFullApiSchemaASRConversationalConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  turn?: (ElevenLabsFullApiSchemaTurnConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  tts?: (ElevenLabsFullApiSchemaTTSConversationalConfigWorkflowOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
  conversation?: (ElevenLabsFullApiSchemaConversationConfigWorkflowOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
  language_presets?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaLanguagePresetOutput | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  vad?: (ElevenLabsFullApiSchemaVADConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  agent?: (ElevenLabsFullApiSchemaAgentConfigAPIModelWorkflowOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaWidgetEndFeedbackType = "rating";

export type ElevenLabsFullApiSchemaConversationHistoryMultivoiceMessagePartModel = {
  text: string;
  voice_label: (string | ElevenLabsFullApiSchemaJsonValue);
  time_in_call_secs: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaToolType = "system" | "webhook" | "client" | "mcp" | "workflow" | "api_integration_webhook" | "api_integration_mcp" | "smb";

export type ElevenLabsFullApiSchemaDynamicVariableUpdateCommonModel = {
  variable_name: string;
  old_value: (string | ElevenLabsFullApiSchemaJsonValue);
  new_value: string;
  updated_at: number;
  tool_name: string;
  tool_request_id: string;
};

export type ElevenLabsFullApiSchemaEndCallToolResultModel = {
  result_type?: "end_call_success";
  status?: "success";
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
  message?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaLanguageDetectionToolResultModel = {
  result_type?: "language_detection_success";
  status?: "success";
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTransferToAgentToolResultSuccessModel = {
  result_type?: "transfer_to_agent_success";
  status?: "success";
  from_agent: string;
  to_agent: string;
  to_node?: (string | ElevenLabsFullApiSchemaJsonValue);
  condition: string;
  delay_ms?: number;
  transfer_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_transferred_agent_first_message?: boolean;
  branch_info?: ((ElevenLabsFullApiSchemaTransferBranchInfoTrafficSplit | ElevenLabsFullApiSchemaTransferBranchInfoDefaultingToMain) | ElevenLabsFullApiSchemaJsonValue);
  preserve_client_tts_overrides?: boolean;
};

export type ElevenLabsFullApiSchemaTransferToAgentToolResultErrorModel = {
  result_type?: "transfer_to_agent_error";
  status?: "error";
  from_agent: string;
  error: string;
};

export type ElevenLabsFullApiSchemaTransferToNumberResultTwilioSuccessModel = {
  result_type?: "transfer_to_number_twilio_success";
  status?: "success";
  transfer_number: string;
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
  client_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_message: string;
  conference_name: string;
  post_dial_digits?: (string | ElevenLabsFullApiSchemaJsonValue);
  note?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTransferToNumberResultSipSuccessModel = {
  result_type?: "transfer_to_number_sip_success";
  status?: "success";
  transfer_number: string;
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
  note?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTransferToNumberResultExotelSuccessModel = {
  result_type?: "transfer_to_number_exotel_success";
  status?: "success";
  transfer_number: string;
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  note?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTransferToNumberResultErrorModel = {
  result_type?: "transfer_to_number_error";
  status?: "error";
  error: string;
  details?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSkipTurnToolResponseModel = {
  result_type?: "skip_turn_success";
  status?: "success";
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPlayDTMFResultSuccessModel = {
  result_type?: "play_dtmf_success";
  status?: "success";
  dtmf_tones: string;
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPlayDTMFResultErrorModel = {
  result_type?: "play_dtmf_error";
  status?: "error";
  error: string;
  details?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVoiceMailDetectionResultSuccessModel = {
  result_type?: "voicemail_detection_success";
  status?: "success";
  voicemail_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  reason?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTestToolResultModel = {
  result_type?: "testing_tool_result";
  status?: "success";
  reason?: string;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseRagToolResultModel = {
  result_type?: "knowledge_base_rag_success";
  status?: ElevenLabsFullApiSchemaKnowledgeBaseRagToolStatus;
  chunk_count?: number;
  message?: string;
};

export type ElevenLabsFullApiSchemaWorkflowToolResponseModelOutput = {
  steps?: ReadonlyArray<(ElevenLabsFullApiSchemaWorkflowToolEdgeStepModel | ElevenLabsFullApiSchemaWorkflowToolNestedToolsStepModelOutput | ElevenLabsFullApiSchemaWorkflowToolMaxIterationsExceededStepModel)>;
};

export type ElevenLabsFullApiSchemaMetricRecord = {
  elapsed_time: number;
};

export type ElevenLabsFullApiSchemaRagChunkMetadata = {
  document_id: string;
  chunk_id: string;
  vector_distance: number;
};

export type ElevenLabsFullApiSchemaLLMInputOutputTokensUsage = {
  input?: ElevenLabsFullApiSchemaLLMTokensCategoryUsage;
  input_cache_read?: ElevenLabsFullApiSchemaLLMTokensCategoryUsage;
  input_cache_write?: ElevenLabsFullApiSchemaLLMTokensCategoryUsage;
  output_total?: ElevenLabsFullApiSchemaLLMTokensCategoryUsage;
};

export type ElevenLabsFullApiSchemaLiteralJsonSchemaProperty = {
  type: "boolean" | "string" | "integer" | "number";
  description?: string;
  enum?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  is_system_provided?: boolean;
  dynamic_variable?: string;
  allowed_values_dynamic_variable?: string;
  constant_value?: (string | number | number | boolean);
  is_omitted?: boolean;
};

export type ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallApiIntegrationWebhookDetailsInput = {
  type?: "api_integration_webhook";
  integration_id?: string;
  credential_id?: string;
  integration_connection_id?: string;
  webhook_details: ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallWebhookDetails;
};

export type ElevenLabsFullApiSchemaWorkflowToolResponseModelInput = {
  steps?: ReadonlyArray<(ElevenLabsFullApiSchemaWorkflowToolEdgeStepModel | ElevenLabsFullApiSchemaWorkflowToolNestedToolsStepModelInput | ElevenLabsFullApiSchemaWorkflowToolMaxIterationsExceededStepModel)>;
};

export type ElevenLabsFullApiSchemaLLMParameterEvaluationStrategy = {
  type: "llm";
  description: string;
};

export type ElevenLabsFullApiSchemaRegexParameterEvaluationStrategy = {
  type: "regex";
  pattern: string;
};

export type ElevenLabsFullApiSchemaExactParameterEvaluationStrategy = {
  type: "exact";
  expected_value: string;
};

export type ElevenLabsFullApiSchemaMatchAnythingParameterEvaluationStrategy = {
  type: "anything";
};

export type ElevenLabsFullApiSchemaTestConditionRationaleCommonModel = {
  messages?: ReadonlyArray<string>;
  summary?: string;
};

export type ElevenLabsFullApiSchemaConversationFeedbackType = "thumbs" | "rating";

export type ElevenLabsFullApiSchemaLLMCategoryUsage = {
  irreversible_generation?: ElevenLabsFullApiSchemaLLMUsageOutput;
  initiated_generation?: ElevenLabsFullApiSchemaLLMUsageOutput;
};

export type ElevenLabsFullApiSchemaConversationTTSUsageModel = {
  primary_tts_model?: (string | ElevenLabsFullApiSchemaJsonValue);
  total_audio_output_seconds?: number;
  total_characters?: number;
  per_voice_usage?: ReadonlyArray<ElevenLabsFullApiSchemaConversationVoiceUsageModel>;
};

export type ElevenLabsFullApiSchemaConversationASRUsageModel = {
  asr_model?: (string | ElevenLabsFullApiSchemaJsonValue);
  total_transcription_calls?: number;
  total_audio_input_seconds?: number;
};

export type ElevenLabsFullApiSchemaFeatureStatusCommonModel = {
  enabled?: boolean;
  used?: boolean;
};

export type ElevenLabsFullApiSchemaWorkflowFeaturesUsageCommonModel = {
  enabled?: boolean;
  tool_node?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  standalone_agent_node?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  phone_number_node?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
  end_node?: ElevenLabsFullApiSchemaFeatureStatusCommonModel;
};

export type ElevenLabsFullApiSchemaTestsFeatureUsageCommonModel = {
  enabled?: boolean;
  tests_ran_after_last_modification?: boolean;
  tests_ran_in_last_7_days?: boolean;
};

export type ElevenLabsFullApiSchemaAgentConfigOverrideOutput = {
  first_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  max_conversation_duration_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  prompt?: (ElevenLabsFullApiSchemaPromptAgentAPIModelOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaQueryParamsJsonSchema = {
  properties: {
  readonly [key: string]: ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | undefined;
};
  required?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaArrayJsonSchemaPropertyInput = {
  type?: "array";
  description?: string;
  items?: (ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | ElevenLabsFullApiSchemaObjectJsonSchemaPropertyInput | ElevenLabsFullApiSchemaArrayJsonSchemaPropertyInput);
  dynamic_variable?: string;
  constant_value?: (ReadonlyArray<(string | number | number | boolean)> | ElevenLabsFullApiSchemaJsonValue);
  is_omitted?: boolean;
};

export type ElevenLabsFullApiSchemaRequiredConstraints = {
  any_of?: ReadonlyArray<ElevenLabsFullApiSchemaRequiredConstraint>;
  all_of?: ReadonlyArray<ElevenLabsFullApiSchemaRequiredConstraint>;
};

export type ElevenLabsFullApiSchemaAgentTransfer = {
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  node_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  condition: string;
  delay_ms?: number;
  transfer_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  enable_transferred_agent_first_message?: boolean;
  is_workflow_node_transfer?: boolean;
  preserve_client_tts_overrides?: boolean;
};

export type ElevenLabsFullApiSchemaPhoneNumberTransfer = {
  custom_sip_headers?: ReadonlyArray<(ElevenLabsFullApiSchemaCustomSIPHeader | ElevenLabsFullApiSchemaCustomSIPHeaderWithDynamicVariable)>;
  transfer_destination: (ElevenLabsFullApiSchemaPhoneNumberTransferDestination | ElevenLabsFullApiSchemaSIPUriTransferDestination | ElevenLabsFullApiSchemaPhoneNumberDynamicVariableTransferDestination | ElevenLabsFullApiSchemaSIPUriDynamicVariableTransferDestination);
  transfer_type?: ElevenLabsFullApiSchemaTransferTypeEnum;
  post_dial_digits?: ((ElevenLabsFullApiSchemaPostDialDigitsStatic | ElevenLabsFullApiSchemaPostDialDigitsDynamicVariable) | ElevenLabsFullApiSchemaJsonValue);
  phone_number?: (string | ElevenLabsFullApiSchemaJsonValue);
  condition: string;
};

export type ElevenLabsFullApiSchemaProcedureAtVersionInput = {
  procedure_id: string;
  name: string;
  content: string;
  type?: ElevenLabsFullApiSchemaProcedureType;
  guardrails?: ReadonlyArray<ElevenLabsFullApiSchemaCustomGuardrailConfig>;
  agent_id: string;
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaArrayJsonSchemaPropertyOutput = {
  type?: "array";
  description?: string;
  items?: (ElevenLabsFullApiSchemaLiteralJsonSchemaProperty | ElevenLabsFullApiSchemaObjectJsonSchemaPropertyOutput | ElevenLabsFullApiSchemaArrayJsonSchemaPropertyOutput);
  dynamic_variable?: string;
  constant_value?: (ReadonlyArray<(string | number | number | boolean)> | ElevenLabsFullApiSchemaJsonValue);
  is_omitted?: boolean;
};

export type ElevenLabsFullApiSchemaProcedureAtVersionOutput = {
  procedure_id: string;
  name: string;
  content: string;
  type?: ElevenLabsFullApiSchemaProcedureType;
  guardrails?: ReadonlyArray<ElevenLabsFullApiSchemaCustomGuardrailConfig>;
  agent_id: string;
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaOrchestratorToolMockBehaviorConfig = {
  mocking_strategy?: ElevenLabsFullApiSchemaMockingStrategy;
  fallback_strategy?: ElevenLabsFullApiSchemaMockNoMatchBehavior;
  mocked_tool_names?: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaAgentDeploymentPercentageStrategy = {
  type?: "percentage";
  traffic_percentage: number;
};

export type ElevenLabsFullApiSchemaTTSModelFamily = "turbo" | "flash" | "multilingual" | "v3_conversational";

export type ElevenLabsFullApiSchemaBackgroundSoundSourceType = "preset";

export type ElevenLabsFullApiSchemaBackgroundSoundPresetId = "office2" | "office1" | "restaurant" | "city" | "typing" | "elevator1" | "elevator2" | "elevator3" | "elevator4";

export type ElevenLabsFullApiSchemaConfigEntityType = "name" | "name.name_given" | "name.name_family" | "name.name_other" | "email_address" | "contact_number" | "dob" | "age" | "religious_belief" | "political_opinion" | "sexual_orientation" | "ethnicity_race" | "marital_status" | "occupation" | "physical_attribute" | "language" | "username" | "password" | "url" | "organization" | "financial_id" | "financial_id.payment_card" | "financial_id.payment_card.payment_card_number" | "financial_id.payment_card.payment_card_expiration_date" | "financial_id.payment_card.payment_card_cvv" | "financial_id.bank_account" | "financial_id.bank_account.bank_account_number" | "financial_id.bank_account.bank_routing_number" | "financial_id.bank_account.swift_bic_code" | "financial_id.financial_id_other" | "location" | "location.location_address" | "location.location_city" | "location.location_postal_code" | "location.location_coordinate" | "location.location_state" | "location.location_country" | "location.location_other" | "date" | "date_interval" | "unique_id" | "unique_id.government_issued_id" | "unique_id.account_number" | "unique_id.vehicle_id" | "unique_id.healthcare_number" | "unique_id.healthcare_number.medical_record_number" | "unique_id.healthcare_number.health_plan_beneficiary_number" | "unique_id.device_id" | "unique_id.unique_id_other" | "medical" | "medical.medical_condition" | "medical.medication" | "medical.medical_procedure" | "medical.medical_measurement" | "medical.medical_other";

export type ElevenLabsFullApiSchemaDubOrderItemRequest = {
  kind?: "dub";
  media_id: ElevenLabsFullApiSchemaMediaId;
  source_language: string;
  destination_languages: ReadonlyArray<string>;
  include_captions: boolean;
  include_source_captions: boolean;
  instructions?: (string | ElevenLabsFullApiSchemaJsonValue);
  captions_sdh?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSubtitleOrderItemRequest = {
  kind?: "subtitles";
  media_ids: ReadonlyArray<ElevenLabsFullApiSchemaMediaId>;
  source_language: string;
  destination_languages: ReadonlyArray<string>;
  cue_options?: ElevenLabsFullApiSchemaCueOptionsRequest;
  sdh?: boolean;
  instructions?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaStudioClipReference = {
  project_id: string;
  chapter_id: string;
  clip_type: "video" | "image" | "external_audio" | "tts_node";
  clip_id: string;
  block_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  preview_url?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVideoSubject = {
  name: string;
  description: string;
};

export type ElevenLabsFullApiSchemaVideoSegment = {
  start_ms: number;
  end_ms: number;
  description: string;
  subjects?: ReadonlyArray<string>;
  shot_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  camera_movement?: (string | ElevenLabsFullApiSchemaJsonValue);
  transition_in?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_speech?: boolean;
  has_music?: boolean;
  pacing?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVideoKeyMoment = {
  timestamp_ms: number;
  type: string;
  description: string;
};

export type ElevenLabsFullApiSchemaAudioSegment = {
  start_ms: number;
  end_ms: number;
  description: string;
  segment_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  has_speech?: boolean;
  has_music?: boolean;
  pacing?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAudioKeyMoment = {
  timestamp_ms: number;
  type: string;
  description: string;
};

export type ElevenLabsFullApiSchemaImageSubject = {
  name: string;
  description: string;
};

export type ElevenLabsFullApiSchemaUserTypeId = 0 | 1 | 2 | 3 | 4 | 99;

export type ElevenLabsFullApiSchemaSoftTimeoutConfigOverride = {
  message?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPromptAgentAPIModelOverrideInput = {
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  llm?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  tool_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  native_mcp_server_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  knowledge_base?: (ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVerbosity = "auto" | "concise" | "thorough";

export type ElevenLabsFullApiSchemaOutputFormat = "plain_text" | "markdown";

export type ElevenLabsFullApiSchemaInteractionBudget = "realtime" | "5_minutes" | "10_minutes" | "1_hour";

export type ElevenLabsFullApiSchemaBuiltInToolsInput = {
  end_call?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  language_detection?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_agent?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_number?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  skip_turn?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  play_keypad_touch_tone?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  voicemail_detection?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCustomLLM = {
  url: string;
  model_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  api_key?: (ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIEnvVarLocator | ElevenLabsFullApiSchemaJsonValue);
  auth_connection?: (ElevenLabsFullApiSchemaAuthConnectionLocator | ElevenLabsFullApiSchemaEnvironmentAuthConnectionLocator | ElevenLabsFullApiSchemaJsonValue);
  request_headers?: {
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAISecretLocator | ElevenLabsFullApiSchemaConvAIDynamicVariable | ElevenLabsFullApiSchemaConvAIEnvVarLocator) | undefined;
};
  api_version?: (string | ElevenLabsFullApiSchemaJsonValue);
  api_type?: ElevenLabsFullApiSchemaCustomLLMAPIType;
};

export type ElevenLabsFullApiSchemaRagConfig = {
  enabled?: boolean;
  embedding_model?: ElevenLabsFullApiSchemaEmbeddingModelEnum;
  max_vector_distance?: number;
  max_documents_length?: number;
  max_retrieved_rag_chunks_count?: number;
  num_candidates?: (number | ElevenLabsFullApiSchemaJsonValue);
  query_rewrite_prompt_override?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBackupLLMDefault = {
  preference?: "default";
};

export type ElevenLabsFullApiSchemaBackupLLMDisabled = {
  preference?: "disabled";
};

export type ElevenLabsFullApiSchemaBackupLLMOverride = {
  preference?: "override";
  order: ReadonlyArray<ElevenLabsFullApiSchemaLLM>;
};

export type ElevenLabsFullApiSchemaApiIntegrationWebhookToolConfigInput = {
  type?: "api_integration_webhook";
  name: string;
  description: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  dynamic_variables?: ElevenLabsFullApiSchemaDynamicVariablesConfigInput;
  execution_mode?: ElevenLabsFullApiSchemaToolExecutionMode;
  tool_version?: string;
  api_integration_id: string;
  api_integration_connection_id: string;
  api_schema_overrides?: (ElevenLabsFullApiSchemaApiIntegrationWebhookOverrides | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSMBToolConfig = {
  type?: "smb";
  name: string;
  description?: string;
  response_timeout_secs?: number;
  disable_interruptions?: boolean;
  force_pre_tool_speech?: boolean;
  pre_tool_speech?: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments?: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound?: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior?: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode?: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  enabled?: boolean;
  params: (ElevenLabsFullApiSchemaSearchClientsParams | ElevenLabsFullApiSchemaListClientsParams | ElevenLabsFullApiSchemaGetClientByPhoneParams | ElevenLabsFullApiSchemaCreateClientParams | ElevenLabsFullApiSchemaUpdateClientParams | ElevenLabsFullApiSchemaDeleteClientParams | ElevenLabsFullApiSchemaListStaffParams | ElevenLabsFullApiSchemaCreateStaffParams | ElevenLabsFullApiSchemaUpdateStaffParams | ElevenLabsFullApiSchemaDeleteStaffParams | ElevenLabsFullApiSchemaListAssetsParams | ElevenLabsFullApiSchemaCreateAssetParams | ElevenLabsFullApiSchemaUpdateAssetParams | ElevenLabsFullApiSchemaDeleteAssetParams | ElevenLabsFullApiSchemaListServicesParams | ElevenLabsFullApiSchemaCreateServiceParams | ElevenLabsFullApiSchemaUpdateServiceParams | ElevenLabsFullApiSchemaDeleteServiceParams | ElevenLabsFullApiSchemaListProductsParams | ElevenLabsFullApiSchemaCreateProductParams | ElevenLabsFullApiSchemaUpdateProductParams | ElevenLabsFullApiSchemaDeleteProductParams | ElevenLabsFullApiSchemaCheckServiceAvailabilityParams | ElevenLabsFullApiSchemaCreateClientAppointmentParams | ElevenLabsFullApiSchemaGetClientAppointmentsParams | ElevenLabsFullApiSchemaGetAppointmentByConfirmationNumberParams | ElevenLabsFullApiSchemaListGroupSessionsParams | ElevenLabsFullApiSchemaScheduleGroupSessionParams | ElevenLabsFullApiSchemaRegisterForGroupSessionParams | ElevenLabsFullApiSchemaCancelGroupSessionRegistrationParams | ElevenLabsFullApiSchemaUpdateGroupSessionSeatsParams | ElevenLabsFullApiSchemaCancelGroupSessionForAllParams | ElevenLabsFullApiSchemaDeleteGroupSessionParams | ElevenLabsFullApiSchemaListCalendarEventsParams | ElevenLabsFullApiSchemaUpdateCalendarEventParams | ElevenLabsFullApiSchemaCancelCalendarEventParams | ElevenLabsFullApiSchemaRestoreCalendarEventParams | ElevenLabsFullApiSchemaDeleteCalendarEventParams | ElevenLabsFullApiSchemaListCustomerFacingAgentsParams | ElevenLabsFullApiSchemaListAgentRulesParams | ElevenLabsFullApiSchemaCreateAgentRuleParams | ElevenLabsFullApiSchemaUpdateAgentRuleParams | ElevenLabsFullApiSchemaDeleteAgentRuleParams | ElevenLabsFullApiSchemaListHolidaysParams | ElevenLabsFullApiSchemaCreateHolidayParams | ElevenLabsFullApiSchemaUpdateHolidayParams | ElevenLabsFullApiSchemaDeleteHolidayParams | ElevenLabsFullApiSchemaGetScheduleParams | ElevenLabsFullApiSchemaSubmitBusinessInfoParams | ElevenLabsFullApiSchemaUpdateBusinessInfoParams | ElevenLabsFullApiSchemaUpdateCustomerFacingConfigParams | ElevenLabsFullApiSchemaGetAnalyticsSummaryParams | ElevenLabsFullApiSchemaGetBookingPageSettingsParams | ElevenLabsFullApiSchemaUpdateBookingPageSettingsParams | ElevenLabsFullApiSchemaUpdateBookingPageAppearanceParams | ElevenLabsFullApiSchemaGetBookingSlugStatusParams | ElevenLabsFullApiSchemaSetBookingSlugParams | ElevenLabsFullApiSchemaListClientInteractionsParams | ElevenLabsFullApiSchemaCreateClientInteractionParams | ElevenLabsFullApiSchemaDeleteClientInteractionParams | ElevenLabsFullApiSchemaListLocationsParams | ElevenLabsFullApiSchemaCreateLocationParams | ElevenLabsFullApiSchemaUpdateLocationParams | ElevenLabsFullApiSchemaDeleteLocationParams | ElevenLabsFullApiSchemaLeaveMessageParams | ElevenLabsFullApiSchemaReportKnowledgeGapParams | ElevenLabsFullApiSchemaOptInSmsReminderParams | ElevenLabsFullApiSchemaOptOutSmsReminderParams);
};

export type ElevenLabsFullApiSchemaWidgetTermsTranslation = {
  source_hash: string;
  text: string;
};

export type ElevenLabsFullApiSchemaASRConversationalConfigOverrideConfig = {
  keywords?: boolean;
};

export type ElevenLabsFullApiSchemaTurnConfigOverrideConfig = {
  soft_timeout_config?: ElevenLabsFullApiSchemaSoftTimeoutConfigOverrideConfig;
};

export type ElevenLabsFullApiSchemaTTSConversationalConfigOverrideConfig = {
  voice_id?: boolean;
  stability?: boolean;
  speed?: boolean;
  similarity_boost?: boolean;
};

export type ElevenLabsFullApiSchemaConversationConfigOverrideConfig = {
  text_only?: boolean;
};

export type ElevenLabsFullApiSchemaAgentConfigOverrideConfig = {
  first_message?: boolean;
  language?: boolean;
  max_conversation_duration_message?: boolean;
  prompt?: ElevenLabsFullApiSchemaPromptAgentAPIModelOverrideConfig;
};

export type ElevenLabsFullApiSchemaGuardrailExecutionMode = "streaming" | "blocking";

export type ElevenLabsFullApiSchemaContentConfig = {
  sexual?: ElevenLabsFullApiSchemaContentThresholdGuardrail;
  violence?: ElevenLabsFullApiSchemaContentThresholdGuardrail;
  harassment?: ElevenLabsFullApiSchemaContentThresholdGuardrail;
  self_harm?: ElevenLabsFullApiSchemaContentThresholdGuardrail;
  profanity?: ElevenLabsFullApiSchemaContentThresholdGuardrail;
  religion_or_politics?: ElevenLabsFullApiSchemaContentThresholdGuardrail;
  medical_and_legal_information?: ElevenLabsFullApiSchemaContentThresholdGuardrail;
};

export type ElevenLabsFullApiSchemaEndCallTriggerAction = {
  type?: "end_call";
};

export type ElevenLabsFullApiSchemaRetryTriggerAction = {
  type?: "retry";
  feedback?: string;
};

export type ElevenLabsFullApiSchemaModerationConfig = {
  sexual?: ElevenLabsFullApiSchemaThresholdGuardrail;
  violence?: ElevenLabsFullApiSchemaThresholdGuardrail;
  violence_graphic?: ElevenLabsFullApiSchemaThresholdGuardrail;
  harassment?: ElevenLabsFullApiSchemaThresholdGuardrail;
  harassment_threatening?: ElevenLabsFullApiSchemaThresholdGuardrail;
  hate?: ElevenLabsFullApiSchemaThresholdGuardrail;
  hate_threatening?: ElevenLabsFullApiSchemaThresholdGuardrail;
  self_harm_instructions?: ElevenLabsFullApiSchemaThresholdGuardrail;
  self_harm?: ElevenLabsFullApiSchemaThresholdGuardrail;
  self_harm_intent?: ElevenLabsFullApiSchemaThresholdGuardrail;
  sexual_minors?: ElevenLabsFullApiSchemaThresholdGuardrail;
};

export type ElevenLabsFullApiSchemaCustomGuardrailsConfigInput = {
  configs?: ReadonlyArray<ElevenLabsFullApiSchemaCustomGuardrailConfig>;
};

export type ElevenLabsFullApiSchemaASTNodeInput = (ElevenLabsFullApiSchemaASTStringNodeInput | ElevenLabsFullApiSchemaASTNumberNodeInput | ElevenLabsFullApiSchemaASTBooleanNodeInput | ElevenLabsFullApiSchemaASTNullNodeInput | ElevenLabsFullApiSchemaASTLLMNodeInput | ElevenLabsFullApiSchemaASTDynamicVariableNodeInput | ElevenLabsFullApiSchemaASTOrOperatorNodeInput | ElevenLabsFullApiSchemaASTAndOperatorNodeInput | ElevenLabsFullApiSchemaASTEqualsOperatorNodeInput | ElevenLabsFullApiSchemaASTNotEqualsOperatorNodeInput | ElevenLabsFullApiSchemaASTGreaterThanOperatorNodeInput | ElevenLabsFullApiSchemaASTLessThanOperatorNodeInput | ElevenLabsFullApiSchemaASTGreaterThanOrEqualsOperatorNodeInput | ElevenLabsFullApiSchemaASTLessThanOrEqualsOperatorNodeInput | ElevenLabsFullApiSchemaASTAdditionOperatorNodeInput | ElevenLabsFullApiSchemaASTSubtractionOperatorNodeInput | ElevenLabsFullApiSchemaASTMultiplicationOperatorNodeInput | ElevenLabsFullApiSchemaASTDivisionOperatorNodeInput | ElevenLabsFullApiSchemaASTConditionalOperatorNodeInput);

export type ElevenLabsFullApiSchemaASRConversationalConfigWorkflowOverride = {
  quality?: (ElevenLabsFullApiSchemaASRQuality | ElevenLabsFullApiSchemaJsonValue);
  provider?: (ElevenLabsFullApiSchemaASRProvider | ElevenLabsFullApiSchemaJsonValue);
  user_input_audio_format?: (ElevenLabsFullApiSchemaASRInputFormat | ElevenLabsFullApiSchemaJsonValue);
  keywords?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTurnConfigWorkflowOverride = {
  turn_timeout?: (number | ElevenLabsFullApiSchemaJsonValue);
  initial_wait_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  silence_end_call_timeout?: (number | ElevenLabsFullApiSchemaJsonValue);
  mode?: (ElevenLabsFullApiSchemaTurnMode | ElevenLabsFullApiSchemaJsonValue);
  turn_eagerness?: (ElevenLabsFullApiSchemaTurnEagerness | ElevenLabsFullApiSchemaJsonValue);
  spelling_patience?: (ElevenLabsFullApiSchemaSpellingPatience | ElevenLabsFullApiSchemaJsonValue);
  speculative_turn?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  retranscribe_on_turn_timeout?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  turn_model?: (ElevenLabsFullApiSchemaTurnModel | ElevenLabsFullApiSchemaJsonValue);
  interruption_ignore_terms?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  soft_timeout_config?: (ElevenLabsFullApiSchemaSoftTimeoutConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTTSConversationalConfigWorkflowOverrideInput = {
  model_id?: (ElevenLabsFullApiSchemaTTSConversationalModel | ElevenLabsFullApiSchemaJsonValue);
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  supported_voices?: (ReadonlyArray<ElevenLabsFullApiSchemaSupportedVoice> | ElevenLabsFullApiSchemaJsonValue);
  expressive_mode?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  suggested_audio_tags?: (ReadonlyArray<ElevenLabsFullApiSchemaSuggestedAudioTag> | ElevenLabsFullApiSchemaJsonValue);
  agent_output_audio_format?: (ElevenLabsFullApiSchemaTTSOutputFormat | ElevenLabsFullApiSchemaJsonValue);
  optimize_streaming_latency?: (ElevenLabsFullApiSchemaTTSOptimizeStreamingLatency | ElevenLabsFullApiSchemaJsonValue);
  stability?: (number | ElevenLabsFullApiSchemaJsonValue);
  speed?: (number | ElevenLabsFullApiSchemaJsonValue);
  similarity_boost?: (number | ElevenLabsFullApiSchemaJsonValue);
  text_normalisation_type?: (ElevenLabsFullApiSchemaTextNormalisationType | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPydanticPronunciationDictionaryVersionLocator> | ElevenLabsFullApiSchemaJsonValue);
  enable_phoneme_tags?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationConfigWorkflowOverrideInput = {
  text_only?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  max_duration_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  client_events?: (ReadonlyArray<ElevenLabsFullApiSchemaClientEvent> | ElevenLabsFullApiSchemaJsonValue);
  file_input?: (ElevenLabsFullApiSchemaFileInputConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  monitoring_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  monitoring_events?: (ReadonlyArray<ElevenLabsFullApiSchemaClientEvent> | ElevenLabsFullApiSchemaJsonValue);
  background_sound?: (ElevenLabsFullApiSchemaBackgroundSoundConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  source_attribution?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaVADConfigWorkflowOverride = {
  background_voice_detection?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentConfigAPIModelWorkflowOverrideInput = {
  first_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  hinglish_mode?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: (ElevenLabsFullApiSchemaDynamicVariablesConfigWorkflowOverrideInput | ElevenLabsFullApiSchemaJsonValue);
  disable_first_message_interruptions?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  max_conversation_duration_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  text_behavior_overrides?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaBehaviorOverride | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  prompt?: (ElevenLabsFullApiSchemaPromptAgentAPIModelWorkflowOverrideInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBuiltInToolsOutput = {
  end_call?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  language_detection?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_agent?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_number?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  skip_turn?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  play_keypad_touch_tone?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  voicemail_detection?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaApiIntegrationWebhookToolConfigOutput = {
  type: "api_integration_webhook";
  name: string;
  description: string;
  response_timeout_secs: number;
  disable_interruptions: boolean;
  force_pre_tool_speech: boolean;
  pre_tool_speech: ElevenLabsFullApiSchemaPreToolSpeechMode;
  assignments: ReadonlyArray<ElevenLabsFullApiSchemaDynamicVariableAssignment>;
  tool_call_sound: (ElevenLabsFullApiSchemaToolCallSoundType | ElevenLabsFullApiSchemaJsonValue);
  tool_call_sound_behavior: ElevenLabsFullApiSchemaToolCallSoundBehavior;
  tool_error_handling_mode: ElevenLabsFullApiSchemaToolErrorHandlingMode;
  dynamic_variables: ElevenLabsFullApiSchemaDynamicVariablesConfigOutput;
  execution_mode: ElevenLabsFullApiSchemaToolExecutionMode;
  tool_version: string;
  api_integration_id: string;
  api_integration_connection_id: string;
  api_schema_overrides: (ElevenLabsFullApiSchemaApiIntegrationWebhookOverrides | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCustomGuardrailsConfigOutput = {
  configs?: ReadonlyArray<ElevenLabsFullApiSchemaCustomGuardrailConfig>;
};

export type ElevenLabsFullApiSchemaASTNodeOutput = (ElevenLabsFullApiSchemaASTStringNodeOutput | ElevenLabsFullApiSchemaASTNumberNodeOutput | ElevenLabsFullApiSchemaASTBooleanNodeOutput | ElevenLabsFullApiSchemaASTNullNodeOutput | ElevenLabsFullApiSchemaASTLLMNodeOutput | ElevenLabsFullApiSchemaASTDynamicVariableNodeOutput | ElevenLabsFullApiSchemaASTOrOperatorNodeOutput | ElevenLabsFullApiSchemaASTAndOperatorNodeOutput | ElevenLabsFullApiSchemaASTEqualsOperatorNodeOutput | ElevenLabsFullApiSchemaASTNotEqualsOperatorNodeOutput | ElevenLabsFullApiSchemaASTGreaterThanOperatorNodeOutput | ElevenLabsFullApiSchemaASTLessThanOperatorNodeOutput | ElevenLabsFullApiSchemaASTGreaterThanOrEqualsOperatorNodeOutput | ElevenLabsFullApiSchemaASTLessThanOrEqualsOperatorNodeOutput | ElevenLabsFullApiSchemaASTAdditionOperatorNodeOutput | ElevenLabsFullApiSchemaASTSubtractionOperatorNodeOutput | ElevenLabsFullApiSchemaASTMultiplicationOperatorNodeOutput | ElevenLabsFullApiSchemaASTDivisionOperatorNodeOutput | ElevenLabsFullApiSchemaASTConditionalOperatorNodeOutput);

export type ElevenLabsFullApiSchemaTTSConversationalConfigWorkflowOverrideOutput = {
  model_id?: (ElevenLabsFullApiSchemaTTSConversationalModel | ElevenLabsFullApiSchemaJsonValue);
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  supported_voices?: (ReadonlyArray<ElevenLabsFullApiSchemaSupportedVoice> | ElevenLabsFullApiSchemaJsonValue);
  expressive_mode?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  suggested_audio_tags?: (ReadonlyArray<ElevenLabsFullApiSchemaSuggestedAudioTag> | ElevenLabsFullApiSchemaJsonValue);
  agent_output_audio_format?: (ElevenLabsFullApiSchemaTTSOutputFormat | ElevenLabsFullApiSchemaJsonValue);
  optimize_streaming_latency?: (ElevenLabsFullApiSchemaTTSOptimizeStreamingLatency | ElevenLabsFullApiSchemaJsonValue);
  stability?: (number | ElevenLabsFullApiSchemaJsonValue);
  speed?: (number | ElevenLabsFullApiSchemaJsonValue);
  similarity_boost?: (number | ElevenLabsFullApiSchemaJsonValue);
  text_normalisation_type?: (ElevenLabsFullApiSchemaTextNormalisationType | ElevenLabsFullApiSchemaJsonValue);
  pronunciation_dictionary_locators?: (ReadonlyArray<ElevenLabsFullApiSchemaPydanticPronunciationDictionaryVersionLocator> | ElevenLabsFullApiSchemaJsonValue);
  enable_phoneme_tags?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaConversationConfigWorkflowOverrideOutput = {
  text_only?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  max_duration_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  client_events?: (ReadonlyArray<ElevenLabsFullApiSchemaClientEvent> | ElevenLabsFullApiSchemaJsonValue);
  file_input?: (ElevenLabsFullApiSchemaFileInputConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  monitoring_enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  monitoring_events?: (ReadonlyArray<ElevenLabsFullApiSchemaClientEvent> | ElevenLabsFullApiSchemaJsonValue);
  background_sound?: (ElevenLabsFullApiSchemaBackgroundSoundConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  source_attribution?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaAgentConfigAPIModelWorkflowOverrideOutput = {
  first_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  hinglish_mode?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  dynamic_variables?: (ElevenLabsFullApiSchemaDynamicVariablesConfigWorkflowOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
  disable_first_message_interruptions?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  max_conversation_duration_message?: (string | ElevenLabsFullApiSchemaJsonValue);
  text_behavior_overrides?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaBehaviorOverride | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  prompt?: (ElevenLabsFullApiSchemaPromptAgentAPIModelWorkflowOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaTransferBranchInfoTrafficSplit = {
  branch_reason: "traffic_split";
  branch_id: string;
  traffic_percentage: number;
};

export type ElevenLabsFullApiSchemaTransferBranchInfoDefaultingToMain = {
  branch_reason: "defaulting_to_main";
  branch_id: string;
};

export type ElevenLabsFullApiSchemaKnowledgeBaseRagToolStatus = "success" | "no_documents" | "no_results";

export type ElevenLabsFullApiSchemaWorkflowToolEdgeStepModel = {
  step_latency_secs: number;
  type?: "edge";
  edge_id: string;
  target_node_id: string;
};

export type ElevenLabsFullApiSchemaWorkflowToolNestedToolsStepModelOutput = {
  step_latency_secs: number;
  type?: "nested_tools";
  node_id: string;
  requests: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallCommonModelOutput>;
  results: ReadonlyArray<(ElevenLabsFullApiSchemaConversationHistoryTranscriptOtherToolsResultCommonModel | ElevenLabsFullApiSchemaConversationHistoryTranscriptSystemToolResultCommonModelOutput | ElevenLabsFullApiSchemaConversationHistoryTranscriptApiIntegrationWebhookToolsResultCommonModelOutput | ElevenLabsFullApiSchemaConversationHistoryTranscriptWorkflowToolsResultCommonModelOutput)>;
  is_successful: boolean;
};

export type ElevenLabsFullApiSchemaWorkflowToolMaxIterationsExceededStepModel = {
  step_latency_secs: number;
  type?: "max_iterations_exceeded";
  max_iterations: number;
};

export type ElevenLabsFullApiSchemaLLMTokensCategoryUsage = {
  tokens?: number;
  price?: number;
};

export type ElevenLabsFullApiSchemaWorkflowToolNestedToolsStepModelInput = {
  step_latency_secs: number;
  type?: "nested_tools";
  node_id: string;
  requests: ReadonlyArray<ElevenLabsFullApiSchemaConversationHistoryTranscriptToolCallCommonModelInput>;
  results: ReadonlyArray<(ElevenLabsFullApiSchemaConversationHistoryTranscriptOtherToolsResultCommonModel | ElevenLabsFullApiSchemaConversationHistoryTranscriptSystemToolResultCommonModelInput | ElevenLabsFullApiSchemaConversationHistoryTranscriptApiIntegrationWebhookToolsResultCommonModelInput | ElevenLabsFullApiSchemaConversationHistoryTranscriptWorkflowToolsResultCommonModelInput)>;
  is_successful: boolean;
};

export type ElevenLabsFullApiSchemaConversationVoiceUsageModel = {
  voice_id: string;
  audio_output_seconds?: number;
};

export type ElevenLabsFullApiSchemaPromptAgentAPIModelOverrideOutput = {
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  llm?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  tool_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  native_mcp_server_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  knowledge_base?: (ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRequiredConstraint = {
  required: ReadonlyArray<string>;
};

export type ElevenLabsFullApiSchemaProcedureType = "free_form" | "deterministic";

export type ElevenLabsFullApiSchemaCustomGuardrailConfig = {
  is_enabled?: boolean;
  name: string;
  prompt: string;
  execution_mode?: ElevenLabsFullApiSchemaGuardrailExecutionMode;
  model?: "gemini-2.5-flash-lite" | "gemini-2.5-flash" | "gemini-3.1-flash-lite" | "gemini-3.5-flash" | "claude-haiku-4-5" | "claude-sonnet-4-6" | "gpt-5.4-nano" | "gpt-5.4-mini";
  history_message_count?: number;
  trigger_action?: (ElevenLabsFullApiSchemaEndCallTriggerAction | ElevenLabsFullApiSchemaRetryTriggerAction);
};

export type ElevenLabsFullApiSchemaCueOptionsRequest = {
  min_duration_ms?: number;
  max_duration_ms?: number;
  max_lines_per_cue?: number;
  max_chars_per_line?: number;
  max_chars_per_s?: (number | ElevenLabsFullApiSchemaJsonValue);
  min_gap_between_cues_frames?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaCustomLLMAPIType = "chat_completions" | "responses";

export type ElevenLabsFullApiSchemaApiIntegrationWebhookOverrides = {
  schema_overrides?: ({
  readonly [key: string]: (ElevenLabsFullApiSchemaConstantSchemaOverride | ElevenLabsFullApiSchemaDynamicVariableSchemaOverride | ElevenLabsFullApiSchemaLLMSchemaOverride | ElevenLabsFullApiSchemaOmitSchemaOverride) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  request_headers?: ({
  readonly [key: string]: (string | ElevenLabsFullApiSchemaConvAIDynamicVariable) | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
  response_filter_mode?: (ElevenLabsFullApiSchemaResponseFilterMode | ElevenLabsFullApiSchemaJsonValue);
  response_filters?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaSearchClientsParams = {
  smb_tool_type?: "search_clients";
};

export type ElevenLabsFullApiSchemaListClientsParams = {
  smb_tool_type?: "list_clients";
};

export type ElevenLabsFullApiSchemaGetClientByPhoneParams = {
  smb_tool_type?: "get_client_by_phone";
};

export type ElevenLabsFullApiSchemaCreateClientParams = {
  smb_tool_type?: "create_client";
};

export type ElevenLabsFullApiSchemaUpdateClientParams = {
  smb_tool_type?: "update_client";
};

export type ElevenLabsFullApiSchemaDeleteClientParams = {
  smb_tool_type?: "delete_client";
};

export type ElevenLabsFullApiSchemaListStaffParams = {
  list_kwargs?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  smb_tool_type?: "list_staff";
};

export type ElevenLabsFullApiSchemaCreateStaffParams = {
  smb_tool_type?: "create_staff";
};

export type ElevenLabsFullApiSchemaUpdateStaffParams = {
  smb_tool_type?: "update_staff";
};

export type ElevenLabsFullApiSchemaDeleteStaffParams = {
  smb_tool_type?: "delete_staff";
};

export type ElevenLabsFullApiSchemaListAssetsParams = {
  list_kwargs?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  smb_tool_type?: "list_assets";
};

export type ElevenLabsFullApiSchemaCreateAssetParams = {
  smb_tool_type?: "create_asset";
};

export type ElevenLabsFullApiSchemaUpdateAssetParams = {
  smb_tool_type?: "update_asset";
};

export type ElevenLabsFullApiSchemaDeleteAssetParams = {
  smb_tool_type?: "delete_asset";
};

export type ElevenLabsFullApiSchemaListServicesParams = {
  list_kwargs?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  smb_tool_type?: "list_services";
};

export type ElevenLabsFullApiSchemaCreateServiceParams = {
  smb_tool_type?: "create_service";
};

export type ElevenLabsFullApiSchemaUpdateServiceParams = {
  smb_tool_type?: "update_service";
};

export type ElevenLabsFullApiSchemaDeleteServiceParams = {
  smb_tool_type?: "delete_service";
};

export type ElevenLabsFullApiSchemaListProductsParams = {
  list_kwargs?: {
  readonly [key: string]: ElevenLabsFullApiSchemaJsonValue | undefined;
};
  smb_tool_type?: "list_products";
};

export type ElevenLabsFullApiSchemaCreateProductParams = {
  smb_tool_type?: "create_product";
};

export type ElevenLabsFullApiSchemaUpdateProductParams = {
  smb_tool_type?: "update_product";
};

export type ElevenLabsFullApiSchemaDeleteProductParams = {
  smb_tool_type?: "delete_product";
};

export type ElevenLabsFullApiSchemaCheckServiceAvailabilityParams = {
  smb_tool_type?: "check_service_availability";
};

export type ElevenLabsFullApiSchemaCreateClientAppointmentParams = {
  smb_tool_type?: "create_client_appointment";
};

export type ElevenLabsFullApiSchemaGetClientAppointmentsParams = {
  smb_tool_type?: "get_client_appointments";
  include_cancelled?: boolean;
};

export type ElevenLabsFullApiSchemaGetAppointmentByConfirmationNumberParams = {
  smb_tool_type?: "get_appointment_by_confirmation_number";
};

export type ElevenLabsFullApiSchemaListGroupSessionsParams = {
  smb_tool_type?: "list_group_sessions";
};

export type ElevenLabsFullApiSchemaScheduleGroupSessionParams = {
  smb_tool_type?: "schedule_group_session";
};

export type ElevenLabsFullApiSchemaRegisterForGroupSessionParams = {
  smb_tool_type?: "register_for_group_session";
};

export type ElevenLabsFullApiSchemaCancelGroupSessionRegistrationParams = {
  smb_tool_type?: "cancel_group_session_registration";
};

export type ElevenLabsFullApiSchemaUpdateGroupSessionSeatsParams = {
  smb_tool_type?: "update_group_session_seats";
};

export type ElevenLabsFullApiSchemaCancelGroupSessionForAllParams = {
  smb_tool_type?: "cancel_group_session_for_all";
};

export type ElevenLabsFullApiSchemaDeleteGroupSessionParams = {
  smb_tool_type?: "delete_group_session";
};

export type ElevenLabsFullApiSchemaListCalendarEventsParams = {
  smb_tool_type?: "list_calendar_events";
  include_cancelled?: boolean;
};

export type ElevenLabsFullApiSchemaUpdateCalendarEventParams = {
  smb_tool_type?: "update_calendar_event";
};

export type ElevenLabsFullApiSchemaCancelCalendarEventParams = {
  smb_tool_type?: "cancel_calendar_event";
};

export type ElevenLabsFullApiSchemaRestoreCalendarEventParams = {
  smb_tool_type?: "restore_calendar_event";
};

export type ElevenLabsFullApiSchemaDeleteCalendarEventParams = {
  smb_tool_type?: "delete_calendar_event";
};

export type ElevenLabsFullApiSchemaListCustomerFacingAgentsParams = {
  smb_tool_type?: "list_customer_facing_agents";
};

export type ElevenLabsFullApiSchemaListAgentRulesParams = {
  smb_tool_type?: "list_agent_rules";
};

export type ElevenLabsFullApiSchemaCreateAgentRuleParams = {
  smb_tool_type?: "create_agent_rule";
};

export type ElevenLabsFullApiSchemaUpdateAgentRuleParams = {
  smb_tool_type?: "update_agent_rule";
};

export type ElevenLabsFullApiSchemaDeleteAgentRuleParams = {
  smb_tool_type?: "delete_agent_rule";
};

export type ElevenLabsFullApiSchemaListHolidaysParams = {
  smb_tool_type?: "list_holidays";
};

export type ElevenLabsFullApiSchemaCreateHolidayParams = {
  smb_tool_type?: "create_holiday";
};

export type ElevenLabsFullApiSchemaUpdateHolidayParams = {
  smb_tool_type?: "update_holiday";
};

export type ElevenLabsFullApiSchemaDeleteHolidayParams = {
  smb_tool_type?: "delete_holiday";
};

export type ElevenLabsFullApiSchemaGetScheduleParams = {
  smb_tool_type?: "get_schedule";
  include_location_filter?: boolean;
};

export type ElevenLabsFullApiSchemaSubmitBusinessInfoParams = {
  smb_tool_type?: "submit_business_info";
};

export type ElevenLabsFullApiSchemaUpdateBusinessInfoParams = {
  smb_tool_type?: "update_business_info";
};

export type ElevenLabsFullApiSchemaUpdateCustomerFacingConfigParams = {
  smb_tool_type?: "update_customer_facing_config";
};

export type ElevenLabsFullApiSchemaGetAnalyticsSummaryParams = {
  smb_tool_type?: "get_analytics_summary";
};

export type ElevenLabsFullApiSchemaGetBookingPageSettingsParams = {
  smb_tool_type?: "get_booking_page_settings";
};

export type ElevenLabsFullApiSchemaUpdateBookingPageSettingsParams = {
  smb_tool_type?: "update_booking_page_settings";
};

export type ElevenLabsFullApiSchemaUpdateBookingPageAppearanceParams = {
  smb_tool_type?: "update_booking_page_appearance";
};

export type ElevenLabsFullApiSchemaGetBookingSlugStatusParams = {
  smb_tool_type?: "get_booking_slug_status";
};

export type ElevenLabsFullApiSchemaSetBookingSlugParams = {
  smb_tool_type?: "set_booking_slug";
};

export type ElevenLabsFullApiSchemaListClientInteractionsParams = {
  smb_tool_type?: "list_client_interactions";
};

export type ElevenLabsFullApiSchemaCreateClientInteractionParams = {
  smb_tool_type?: "create_client_interaction";
};

export type ElevenLabsFullApiSchemaDeleteClientInteractionParams = {
  smb_tool_type?: "delete_client_interaction";
};

export type ElevenLabsFullApiSchemaListLocationsParams = {
  smb_tool_type?: "list_locations";
};

export type ElevenLabsFullApiSchemaCreateLocationParams = {
  smb_tool_type?: "create_location";
};

export type ElevenLabsFullApiSchemaUpdateLocationParams = {
  smb_tool_type?: "update_location";
};

export type ElevenLabsFullApiSchemaDeleteLocationParams = {
  smb_tool_type?: "delete_location";
};

export type ElevenLabsFullApiSchemaLeaveMessageParams = {
  smb_tool_type?: "leave_message";
};

export type ElevenLabsFullApiSchemaReportKnowledgeGapParams = {
  smb_tool_type?: "report_knowledge_gap";
};

export type ElevenLabsFullApiSchemaOptInSmsReminderParams = {
  smb_tool_type?: "opt_in_sms_reminder";
};

export type ElevenLabsFullApiSchemaOptOutSmsReminderParams = {
  smb_tool_type?: "opt_out_sms_reminder";
};

export type ElevenLabsFullApiSchemaSoftTimeoutConfigOverrideConfig = {
  message?: boolean;
};

export type ElevenLabsFullApiSchemaPromptAgentAPIModelOverrideConfig = {
  prompt?: boolean;
  llm?: boolean;
  tool_ids?: boolean;
  native_mcp_server_ids?: boolean;
  knowledge_base?: boolean;
};

export type ElevenLabsFullApiSchemaContentThresholdGuardrail = {
  is_enabled?: boolean;
  threshold?: (number | "low" | "medium" | "high");
};

export type ElevenLabsFullApiSchemaThresholdGuardrail = {
  is_enabled?: boolean;
  threshold?: number;
};

export type ElevenLabsFullApiSchemaASTStringNodeInput = {
  type?: "string_literal";
  value: string;
};

export type ElevenLabsFullApiSchemaASTNumberNodeInput = {
  type?: "number_literal";
  value: number;
};

export type ElevenLabsFullApiSchemaASTBooleanNodeInput = {
  type?: "boolean_literal";
  value: boolean;
};

export type ElevenLabsFullApiSchemaASTNullNodeInput = {
  type?: "null_literal";
};

export type ElevenLabsFullApiSchemaASTLLMNodeInput = ({
  type?: "llm";
  value_schema: ElevenLabsFullApiSchemaLLMLiteralJsonSchemaProperty;
} | {
  type?: "llm";
  prompt: string;
});

export type ElevenLabsFullApiSchemaASTDynamicVariableNodeInput = {
  type?: "dynamic_variable";
  name: string;
};

export type ElevenLabsFullApiSchemaASTOrOperatorNodeInput = {
  type?: "or_operator";
  children: ReadonlyArray<ElevenLabsFullApiSchemaASTNodeInput>;
};

export type ElevenLabsFullApiSchemaASTAndOperatorNodeInput = {
  type?: "and_operator";
  children: ReadonlyArray<ElevenLabsFullApiSchemaASTNodeInput>;
};

export type ElevenLabsFullApiSchemaASTEqualsOperatorNodeInput = {
  type?: "eq_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTNotEqualsOperatorNodeInput = {
  type?: "neq_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTGreaterThanOperatorNodeInput = {
  type?: "gt_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTLessThanOperatorNodeInput = {
  type?: "lt_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTGreaterThanOrEqualsOperatorNodeInput = {
  type?: "gte_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTLessThanOrEqualsOperatorNodeInput = {
  type?: "lte_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTAdditionOperatorNodeInput = {
  type?: "add_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTSubtractionOperatorNodeInput = {
  type?: "sub_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTMultiplicationOperatorNodeInput = {
  type?: "mul_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTDivisionOperatorNodeInput = {
  type?: "div_operator";
  left: ElevenLabsFullApiSchemaASTNodeInput;
  right: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaASTConditionalOperatorNodeInput = {
  type?: "conditional_operator";
  condition: ElevenLabsFullApiSchemaASTNodeInput;
  trueExpression: ElevenLabsFullApiSchemaASTNodeInput;
  falseExpression: ElevenLabsFullApiSchemaASTNodeInput;
};

export type ElevenLabsFullApiSchemaSoftTimeoutConfigWorkflowOverride = {
  timeout_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  message?: (string | ElevenLabsFullApiSchemaJsonValue);
  additional_soft_timeout_messages?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  use_llm_generated_message?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  randomize_fillers?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  max_soft_timeouts_per_generation?: (number | ElevenLabsFullApiSchemaJsonValue);
  llm_generated_message_prompt_override?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaFileInputConfigWorkflowOverride = {
  enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  max_files_per_conversation?: (number | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBackgroundSoundConfigWorkflowOverride = {
  source_type?: (ElevenLabsFullApiSchemaBackgroundSoundSourceType | ElevenLabsFullApiSchemaJsonValue);
  source_id?: (ElevenLabsFullApiSchemaBackgroundSoundPresetId | ElevenLabsFullApiSchemaJsonValue);
  volume?: (number | ElevenLabsFullApiSchemaJsonValue);
  crossfade_loop?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaDynamicVariablesConfigWorkflowOverrideInput = {
  dynamic_variable_placeholders?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeInput | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPromptAgentAPIModelWorkflowOverrideInput = {
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  llm?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  reasoning_effort?: (ElevenLabsFullApiSchemaLLMReasoningEffort | ElevenLabsFullApiSchemaJsonValue);
  thinking_budget?: (number | ElevenLabsFullApiSchemaJsonValue);
  temperature?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_tokens?: (number | ElevenLabsFullApiSchemaJsonValue);
  tool_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  built_in_tools?: (ElevenLabsFullApiSchemaBuiltInToolsWorkflowOverrideInput | ElevenLabsFullApiSchemaJsonValue);
  mcp_server_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  native_mcp_server_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  knowledge_base?: (ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator> | ElevenLabsFullApiSchemaJsonValue);
  custom_llm?: (ElevenLabsFullApiSchemaCustomLLM | ElevenLabsFullApiSchemaJsonValue);
  ignore_default_personality?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  rag?: (ElevenLabsFullApiSchemaRagConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  timezone?: (string | ElevenLabsFullApiSchemaJsonValue);
  backup_llm_config?: (ElevenLabsFullApiSchemaBackupLLMDefault | ElevenLabsFullApiSchemaBackupLLMDisabled | ElevenLabsFullApiSchemaBackupLLMOverride | ElevenLabsFullApiSchemaJsonValue);
  cascade_timeout_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  tools?: (ReadonlyArray<(ElevenLabsFullApiSchemaWebhookToolConfigInput | ElevenLabsFullApiSchemaClientToolConfigInput | ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaMCPToolConfigInput | ElevenLabsFullApiSchemaApiIntegrationWebhookToolConfigInput | ElevenLabsFullApiSchemaSMBToolConfig)> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaASTStringNodeOutput = {
  type: "string_literal";
  value: string;
};

export type ElevenLabsFullApiSchemaASTNumberNodeOutput = {
  type: "number_literal";
  value: number;
};

export type ElevenLabsFullApiSchemaASTBooleanNodeOutput = {
  type: "boolean_literal";
  value: boolean;
};

export type ElevenLabsFullApiSchemaASTNullNodeOutput = {
  type: "null_literal";
};

export type ElevenLabsFullApiSchemaASTLLMNodeOutput = {
  type: "llm";
  value_schema: ElevenLabsFullApiSchemaLLMLiteralJsonSchemaProperty;
  prompt: string;
};

export type ElevenLabsFullApiSchemaASTDynamicVariableNodeOutput = {
  type: "dynamic_variable";
  name: string;
};

export type ElevenLabsFullApiSchemaASTOrOperatorNodeOutput = {
  type: "or_operator";
  children: ReadonlyArray<ElevenLabsFullApiSchemaASTNodeOutput>;
};

export type ElevenLabsFullApiSchemaASTAndOperatorNodeOutput = {
  type: "and_operator";
  children: ReadonlyArray<ElevenLabsFullApiSchemaASTNodeOutput>;
};

export type ElevenLabsFullApiSchemaASTEqualsOperatorNodeOutput = {
  type: "eq_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTNotEqualsOperatorNodeOutput = {
  type: "neq_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTGreaterThanOperatorNodeOutput = {
  type: "gt_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTLessThanOperatorNodeOutput = {
  type: "lt_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTGreaterThanOrEqualsOperatorNodeOutput = {
  type: "gte_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTLessThanOrEqualsOperatorNodeOutput = {
  type: "lte_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTAdditionOperatorNodeOutput = {
  type: "add_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTSubtractionOperatorNodeOutput = {
  type: "sub_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTMultiplicationOperatorNodeOutput = {
  type: "mul_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTDivisionOperatorNodeOutput = {
  type: "div_operator";
  left: ElevenLabsFullApiSchemaASTNodeOutput;
  right: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaASTConditionalOperatorNodeOutput = {
  type: "conditional_operator";
  condition: ElevenLabsFullApiSchemaASTNodeOutput;
  trueExpression: ElevenLabsFullApiSchemaASTNodeOutput;
  falseExpression: ElevenLabsFullApiSchemaASTNodeOutput;
};

export type ElevenLabsFullApiSchemaDynamicVariablesConfigWorkflowOverrideOutput = {
  dynamic_variable_placeholders?: ({
  readonly [key: string]: ElevenLabsFullApiSchemaDynamicVariableValueTypeOutput | undefined;
} | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaPromptAgentAPIModelWorkflowOverrideOutput = {
  prompt?: (string | ElevenLabsFullApiSchemaJsonValue);
  llm?: (ElevenLabsFullApiSchemaLLM | ElevenLabsFullApiSchemaJsonValue);
  reasoning_effort?: (ElevenLabsFullApiSchemaLLMReasoningEffort | ElevenLabsFullApiSchemaJsonValue);
  thinking_budget?: (number | ElevenLabsFullApiSchemaJsonValue);
  temperature?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_tokens?: (number | ElevenLabsFullApiSchemaJsonValue);
  tool_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  built_in_tools?: (ElevenLabsFullApiSchemaBuiltInToolsWorkflowOverrideOutput | ElevenLabsFullApiSchemaJsonValue);
  mcp_server_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  native_mcp_server_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  knowledge_base?: (ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseLocator> | ElevenLabsFullApiSchemaJsonValue);
  custom_llm?: (ElevenLabsFullApiSchemaCustomLLM | ElevenLabsFullApiSchemaJsonValue);
  ignore_default_personality?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  rag?: (ElevenLabsFullApiSchemaRagConfigWorkflowOverride | ElevenLabsFullApiSchemaJsonValue);
  timezone?: (string | ElevenLabsFullApiSchemaJsonValue);
  backup_llm_config?: (ElevenLabsFullApiSchemaBackupLLMDefault | ElevenLabsFullApiSchemaBackupLLMDisabled | ElevenLabsFullApiSchemaBackupLLMOverride | ElevenLabsFullApiSchemaJsonValue);
  cascade_timeout_seconds?: (number | ElevenLabsFullApiSchemaJsonValue);
  tools?: (ReadonlyArray<(ElevenLabsFullApiSchemaWebhookToolConfigOutput | ElevenLabsFullApiSchemaClientToolConfigOutput | ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaMCPToolConfigOutput | ElevenLabsFullApiSchemaApiIntegrationWebhookToolConfigOutput | ElevenLabsFullApiSchemaSMBToolConfig)> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaResponseFilterMode = "all" | "allow" | "hide_all";

export type ElevenLabsFullApiSchemaLLMLiteralJsonSchemaProperty = {
  type: "boolean" | "string" | "integer" | "number";
  description: string;
  enum?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBuiltInToolsWorkflowOverrideInput = {
  end_call?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  language_detection?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_agent?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_number?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  skip_turn?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  play_keypad_touch_tone?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
  voicemail_detection?: (ElevenLabsFullApiSchemaSystemToolConfigInput | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaRagConfigWorkflowOverride = {
  enabled?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  embedding_model?: (ElevenLabsFullApiSchemaEmbeddingModelEnum | ElevenLabsFullApiSchemaJsonValue);
  max_vector_distance?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_documents_length?: (number | ElevenLabsFullApiSchemaJsonValue);
  max_retrieved_rag_chunks_count?: (number | ElevenLabsFullApiSchemaJsonValue);
  num_candidates?: (number | ElevenLabsFullApiSchemaJsonValue);
  query_rewrite_prompt_override?: (string | ElevenLabsFullApiSchemaJsonValue);
};

export type ElevenLabsFullApiSchemaBuiltInToolsWorkflowOverrideOutput = {
  end_call?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  language_detection?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_agent?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  transfer_to_number?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  skip_turn?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  play_keypad_touch_tone?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
  voicemail_detection?: (ElevenLabsFullApiSchemaSystemToolConfigOutput | ElevenLabsFullApiSchemaJsonValue);
};

export interface ElevenLabsFullApiOperationQueryMap {
  "GET /v1/history": {
  page_size?: number;
  start_after_history_item_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  model_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  date_before_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  date_after_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  sort_direction?: ("asc" | "desc" | ElevenLabsFullApiSchemaJsonValue);
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  source?: ("TTS" | "STS" | "Flows" | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/history/{history_item_id}": {};
  "DELETE /v1/history/{history_item_id}": {};
  "GET /v1/history/{history_item_id}/audio": {};
  "POST /v1/history/download": {};
  "POST /v1/sound-generation": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
};
  "POST /v1/audio-isolation": {};
  "GET /v1/audio-isolation/history": {
  page_size?: number;
  page?: number;
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "DELETE /v1/audio-isolation/history/{history_item_id}": {};
  "POST /v1/audio-isolation/stream": {};
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}": {};
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio": {};
  "POST /v1/text-to-speech/{voice_id}": {
  enable_logging?: boolean;
  optimize_streaming_latency?: (number | ElevenLabsFullApiSchemaJsonValue);
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
};
  "POST /v1/text-to-speech/{voice_id}/with-timestamps": {
  enable_logging?: boolean;
  optimize_streaming_latency?: (number | ElevenLabsFullApiSchemaJsonValue);
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
};
  "POST /v1/text-to-speech/{voice_id}/stream": {
  enable_logging?: boolean;
  optimize_streaming_latency?: (number | ElevenLabsFullApiSchemaJsonValue);
  output_format?: "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
};
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps": {
  enable_logging?: boolean;
  optimize_streaming_latency?: (number | ElevenLabsFullApiSchemaJsonValue);
  output_format?: "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
};
  "POST /v1/text-to-dialogue": {
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
  enable_logging?: boolean;
};
  "POST /v1/text-to-dialogue/stream": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
  enable_logging?: boolean;
};
  "POST /v1/text-to-dialogue/stream/with-timestamps": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
  enable_logging?: boolean;
};
  "POST /v1/text-to-dialogue/with-timestamps": {
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
  enable_logging?: boolean;
};
  "POST /v1/speech-to-speech/{voice_id}": {
  enable_logging?: boolean;
  optimize_streaming_latency?: (number | ElevenLabsFullApiSchemaJsonValue);
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
};
  "POST /v1/speech-to-speech/{voice_id}/stream": {
  enable_logging?: boolean;
  optimize_streaming_latency?: (number | ElevenLabsFullApiSchemaJsonValue);
  output_format?: "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
};
  "POST /v1/text-to-voice/create-previews": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
};
  "POST /v1/text-to-voice": {};
  "POST /v1/text-to-voice/design": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
};
  "POST /v1/text-to-voice/{voice_id}/remix": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
};
  "GET /v1/text-to-voice/{generated_voice_id}/stream": {};
  "GET /v1/user": {};
  "GET /v1/user/subscription": {};
  "GET /v1/voices/settings/default": {};
  "GET /v1/voices/{voice_id}/settings": {};
  "POST /v1/voices/{voice_id}/settings/edit": {};
  "GET /v1/voices": {
  show_legacy?: (boolean | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/voices/{voice_id}": {
  with_settings?: boolean;
};
  "DELETE /v1/voices/{voice_id}": {};
  "GET /v2/voices": {
  next_page_token?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  sort?: (string | ElevenLabsFullApiSchemaJsonValue);
  sort_direction?: (string | ElevenLabsFullApiSchemaJsonValue);
  voice_type?: (string | ElevenLabsFullApiSchemaJsonValue);
  category?: (string | ElevenLabsFullApiSchemaJsonValue);
  fine_tuning_state?: (string | ElevenLabsFullApiSchemaJsonValue);
  collection_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  include_total_count?: boolean;
  voice_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/voices/add": {};
  "POST /v1/voices/{voice_id}/edit": {};
  "POST /v1/voices/add/{public_user_id}/{voice_id}": {};
  "POST /v1/studio/podcasts": {};
  "POST /v1/music/video-to-music": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
};
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries": {};
  "GET /v1/studio/projects": {};
  "POST /v1/studio/projects": {};
  "POST /v1/studio/projects/{project_id}": {};
  "GET /v1/studio/projects/{project_id}": {
  share_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "DELETE /v1/studio/projects/{project_id}": {};
  "POST /v1/studio/projects/{project_id}/content": {};
  "POST /v1/studio/projects/{project_id}/convert": {};
  "GET /v1/studio/projects/{project_id}/snapshots": {};
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}": {};
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream": {};
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive": {};
  "GET /v1/studio/projects/{project_id}/chapters": {};
  "POST /v1/studio/projects/{project_id}/chapters": {};
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}": {};
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}": {};
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}": {};
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert": {};
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots": {};
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}": {};
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream": {};
  "GET /v1/studio/projects/{project_id}/muted-tracks": {};
  "GET /v1/dubbing/resource/{dubbing_id}": {};
  "POST /v1/dubbing/resource/{dubbing_id}/language": {};
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment": {};
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}": {};
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments": {};
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}": {};
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe": {};
  "POST /v1/dubbing/resource/{dubbing_id}/translate": {};
  "POST /v1/dubbing/resource/{dubbing_id}/dub": {};
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}": {};
  "POST /v1/dubbing/resource/{dubbing_id}/speaker": {};
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices": {};
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}": {};
  "GET /v1/dubbing": {
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  dubbing_status?: "dubbing" | "dubbed" | "failed";
  filter_by_creator?: "personal" | "others" | "all";
  order_by?: "created_at";
  order_direction?: "DESCENDING" | "ASCENDING";
};
  "POST /v1/dubbing": {};
  "GET /v1/dubbing/{dubbing_id}": {};
  "DELETE /v1/dubbing/{dubbing_id}": {};
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}": {};
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}": {
  format_type?: "srt" | "webvtt" | "json";
};
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}": {};
  "GET /v1/models": {};
  "POST /v1/audio-native": {};
  "GET /v1/audio-native/{project_id}/settings": {};
  "POST /v1/audio-native/{project_id}/content": {};
  "POST /v1/audio-native/content": {};
  "GET /v1/shared-voices": {
  page_size?: number;
  category?: "professional" | "famous" | "high_quality";
  gender?: (string | ElevenLabsFullApiSchemaJsonValue);
  age?: (string | ElevenLabsFullApiSchemaJsonValue);
  accent?: (string | ElevenLabsFullApiSchemaJsonValue);
  language?: (string | ElevenLabsFullApiSchemaJsonValue);
  locale?: (string | ElevenLabsFullApiSchemaJsonValue);
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  use_cases?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  descriptives?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  featured?: boolean;
  min_notice_period_days?: (number | ElevenLabsFullApiSchemaJsonValue);
  include_custom_rates?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  include_live_moderated?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  reader_app_enabled?: boolean;
  owner_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  sort?: "created_date" | "usage_character_count_1y" | "trending" | "cloned_by_count";
  page?: number;
};
  "POST /v1/similar-voices": {};
  "GET /v1/usage/character-stats": {
  start_unix: number;
  end_unix: number;
  include_workspace_metrics?: boolean;
  breakdown_type?: ElevenLabsFullApiSchemaBreakdownTypes;
  aggregation_interval?: ElevenLabsFullApiSchemaUsageAggregationInterval;
  aggregation_bucket_size?: (number | ElevenLabsFullApiSchemaJsonValue);
  metric?: ElevenLabsFullApiSchemaMetricType;
};
  "POST /v1/pronunciation-dictionaries/add-from-file": {};
  "POST /v1/pronunciation-dictionaries/add-from-rules": {};
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": {};
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": {};
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules": {};
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules": {};
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules": {};
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download": {};
  "GET /v1/pronunciation-dictionaries": {
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  sort?: ("creation_time_unix" | "name" | ElevenLabsFullApiSchemaJsonValue);
  sort_direction?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/workspaces/api-keys/disable": {
  api_key_name: string;
};
  "GET /v1/service-accounts/{service_account_user_id}/api-keys": {};
  "POST /v1/service-accounts/{service_account_user_id}/api-keys": {};
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": {};
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": {};
  "GET /v1/workspace/audit-logs": {
  limit?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  time_from_unix_ms?: (number | ElevenLabsFullApiSchemaJsonValue);
  time_to_unix_ms?: (number | ElevenLabsFullApiSchemaJsonValue);
  actor_uid?: (string | ElevenLabsFullApiSchemaJsonValue);
  class_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  activity_name?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/workspace/auth-connections": {};
  "GET /v1/workspace/auth-connections": {};
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}": {};
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}": {};
  "GET /v1/service-accounts": {};
  "GET /v1/workspace/groups": {};
  "GET /v1/workspace/groups/search": {
  name: string;
};
  "POST /v1/workspace/groups/{group_id}/members/remove": {};
  "POST /v1/workspace/groups/{group_id}/members": {};
  "POST /v1/workspace/invites/add": {};
  "POST /v1/workspace/invites/add-bulk": {};
  "DELETE /v1/workspace/invites": {};
  "POST /v1/workspace/members": {};
  "GET /v1/workspace/resources/{resource_id}": {
  resource_type: ElevenLabsFullApiSchemaWorkspaceResourceType;
};
  "POST /v1/workspace/resources/{resource_id}/share": {};
  "POST /v1/workspace/resources/{resource_id}/unshare": {};
  "GET /v1/workspace/webhooks": {
  include_usages?: boolean;
};
  "POST /v1/workspace/webhooks": {};
  "PATCH /v1/workspace/webhooks/{webhook_id}": {};
  "DELETE /v1/workspace/webhooks/{webhook_id}": {};
  "POST /v1/speech-to-text": {
  enable_logging?: boolean;
};
  "GET /v1/speech-to-text/transcripts/{transcription_id}": {};
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}": {};
  "POST /v1/single-use-token/{token_type}": {};
  "POST /v1/forced-alignment": {};
  "GET /v1/convai/conversation/get-signed-url": {
  agent_id: string;
  include_conversation_id?: boolean;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/conversation/get_signed_url": {
  agent_id: string;
  include_conversation_id?: boolean;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/conversation/token": {
  agent_id: string;
  participant_name?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/twilio/outbound-call": {};
  "POST /v1/convai/twilio/register-call": {};
  "POST /v1/convai/exotel/outbound-call": {};
  "POST /v1/convai/whatsapp/outbound-call": {};
  "POST /v1/convai/whatsapp/outbound-message": {};
  "POST /v1/convai/agents/create": {
  enable_versioning?: boolean;
};
  "GET /v1/convai/agents/summaries": {
  agent_ids: ReadonlyArray<string>;
};
  "GET /v1/convai/agents/{agent_id}": {
  version_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "PATCH /v1/convai/agents/{agent_id}": {
  enable_versioning_if_not_enabled?: boolean;
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "DELETE /v1/convai/agents/{agent_id}": {};
  "GET /v1/convai/agents/{agent_id}/widget": {
  conversation_signature?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/agents/{agent_id}/link": {};
  "POST /v1/convai/agents/{agent_id}/avatar": {};
  "GET /v1/convai/agents": {
  page_size?: number;
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  archived?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  show_only_owned_agents?: boolean;
  created_by_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  sort_direction?: ElevenLabsFullApiSchemaSortDirection;
  sort_by?: (ElevenLabsFullApiSchemaAgentSortBy | ElevenLabsFullApiSchemaJsonValue);
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size": {};
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate": {};
  "POST /v1/convai/agents/{agent_id}/duplicate": {};
  "POST /v1/convai/agents/{agent_id}/simulate-conversation": {};
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream": {};
  "POST /v1/convai/agent-testing/create": {};
  "POST /v1/convai/agent-testing/folders": {};
  "GET /v1/convai/agent-testing/folders/{folder_id}": {};
  "PATCH /v1/convai/agent-testing/folders/{folder_id}": {};
  "DELETE /v1/convai/agent-testing/folders/{folder_id}": {
  force?: boolean;
};
  "POST /v1/convai/agent-testing/bulk-move": {};
  "GET /v1/convai/agent-testing/{test_id}": {};
  "PUT /v1/convai/agent-testing/{test_id}": {};
  "DELETE /v1/convai/agent-testing/{test_id}": {};
  "POST /v1/convai/agent-testing/summaries": {};
  "GET /v1/convai/agent-testing": {
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  types?: (ReadonlyArray<ElevenLabsFullApiSchemaTestType> | ElevenLabsFullApiSchemaJsonValue);
  include_folders?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  sort_mode?: "default" | "folders_first";
  sharing_mode?: ElevenLabsFullApiSchemaTestSharingMode;
};
  "GET /v1/convai/test-invocations": {
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/agents/{agent_id}/run-tests": {};
  "GET /v1/convai/test-invocations/{test_invocation_id}": {};
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit": {};
  "GET /v1/convai/conversations": {
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  call_successful?: (ElevenLabsFullApiSchemaEvaluationSuccessResult | ElevenLabsFullApiSchemaJsonValue);
  call_start_before_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_start_after_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_duration_min_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_duration_max_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  rating_max?: (number | ElevenLabsFullApiSchemaJsonValue);
  rating_min?: (number | ElevenLabsFullApiSchemaJsonValue);
  has_feedback_comment?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  evaluation_params?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  data_collection_params?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  tool_names?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  tool_names_successful?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  tool_names_errored?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  main_languages?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  summary_mode?: "exclude" | "include";
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  text_only?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  topic_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  exclude_statuses?: (ReadonlyArray<"initiated" | "in-progress" | "processing" | "done" | "failed"> | ElevenLabsFullApiSchemaJsonValue);
  tag_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  workflow_node_entered_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  termination_reasons?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/users": {
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  call_start_before_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_start_after_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  sort_by?: ElevenLabsFullApiSchemaUsersSortBy;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/conversations/{conversation_id}": {
  format?: "json" | "opentelemetry";
};
  "DELETE /v1/convai/conversations/{conversation_id}": {};
  "GET /v1/convai/conversations/{conversation_id}/sip-messages": {
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/conversations/{conversation_id}/audio": {};
  "POST /v1/convai/conversations/{conversation_id}/feedback": {};
  "GET /v1/convai/conversations/messages/text-search": {
  text_query: string;
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  call_successful?: (ElevenLabsFullApiSchemaEvaluationSuccessResult | ElevenLabsFullApiSchemaJsonValue);
  call_start_before_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_start_after_unix?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_duration_min_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  call_duration_max_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  rating_max?: (number | ElevenLabsFullApiSchemaJsonValue);
  rating_min?: (number | ElevenLabsFullApiSchemaJsonValue);
  has_feedback_comment?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  evaluation_params?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  data_collection_params?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  tool_names?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  tool_names_successful?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  tool_names_errored?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  main_languages?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  summary_mode?: "exclude" | "include";
  conversation_initiation_source?: (ElevenLabsFullApiSchemaConversationInitiationSource | ElevenLabsFullApiSchemaJsonValue);
  text_only?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  topic_ids?: (ReadonlyArray<string> | ElevenLabsFullApiSchemaJsonValue);
  sort_by?: ElevenLabsFullApiSchemaMessageSearchSortBy;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/conversations/messages/smart-search": {
  text_query: string;
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/conversations/{conversation_id}/tags": {};
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}": {};
  "GET /v1/convai/tags": {
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/tags": {};
  "GET /v1/convai/tags/{tag_id}": {};
  "PATCH /v1/convai/tags/{tag_id}": {};
  "DELETE /v1/convai/tags/{tag_id}": {};
  "POST /v1/convai/phone-numbers": {};
  "GET /v1/convai/phone-numbers": {
  provider?: (ElevenLabsFullApiSchemaTelephonyProvider | ElevenLabsFullApiSchemaJsonValue);
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/phone-numbers/{phone_number_id}": {};
  "DELETE /v1/convai/phone-numbers/{phone_number_id}": {};
  "PATCH /v1/convai/phone-numbers/{phone_number_id}": {};
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages": {
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/llm-usage/calculate": {};
  "GET /v1/convai/llm/list": {};
  "POST /v1/convai/conversations/{conversation_id}/files": {};
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}": {};
  "GET /v1/convai/analytics/live-count": {
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/knowledge-base/summaries": {
  document_ids: ReadonlyArray<string>;
};
  "POST /v1/convai/knowledge-base": {
  agent_id?: string;
};
  "GET /v1/convai/knowledge-base": {
  page_size?: number;
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  show_only_owned_documents?: boolean;
  created_by_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  types?: (ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseDocumentType> | ElevenLabsFullApiSchemaJsonValue);
  parent_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  ancestor_folder_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  folders_first?: boolean;
  sort_direction?: ElevenLabsFullApiSchemaSortDirection;
  sort_by?: (ElevenLabsFullApiSchemaKnowledgeBaseSortBy | ElevenLabsFullApiSchemaJsonValue);
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/knowledge-base/url": {};
  "POST /v1/convai/knowledge-base/file": {};
  "POST /v1/convai/knowledge-base/text": {};
  "POST /v1/convai/knowledge-base/folder": {};
  "PATCH /v1/convai/knowledge-base/{documentation_id}": {};
  "GET /v1/convai/knowledge-base/{documentation_id}": {
  agent_id?: string;
};
  "DELETE /v1/convai/knowledge-base/{documentation_id}": {
  force?: boolean;
};
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file": {};
  "POST /v1/convai/knowledge-base/rag-index": {};
  "GET /v1/convai/knowledge-base/rag-index": {};
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh": {};
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index": {};
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index": {};
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}": {};
  "GET /v1/convai/knowledge-base/search": {
  query: string;
  page_size?: number;
  types?: (ReadonlyArray<ElevenLabsFullApiSchemaKnowledgeBaseDocumentType> | ElevenLabsFullApiSchemaJsonValue);
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents": {
  dependent_type?: ElevenLabsFullApiSchemaKnowledgeBaseDependentType;
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/knowledge-base/{documentation_id}/content": {};
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url": {};
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}": {
  embedding_model?: (ElevenLabsFullApiSchemaEmbeddingModelEnum | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks": {
  embedding_model: ElevenLabsFullApiSchemaEmbeddingModelEnum;
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/knowledge-base/{document_id}/move": {};
  "POST /v1/convai/knowledge-base/bulk-move": {};
  "GET /v1/convai/agents/{agent_id}/topics": {
  from_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
  to_unix_secs?: (number | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/tools": {};
  "GET /v1/convai/tools": {
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: (number | ElevenLabsFullApiSchemaJsonValue);
  show_only_owned_documents?: boolean;
  created_by_user_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  types?: (ReadonlyArray<ElevenLabsFullApiSchemaToolTypeFilter> | ElevenLabsFullApiSchemaJsonValue);
  sort_direction?: ElevenLabsFullApiSchemaSortDirection;
  sort_by?: (ElevenLabsFullApiSchemaToolSortBy | ElevenLabsFullApiSchemaJsonValue);
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/tools/{tool_id}": {};
  "PATCH /v1/convai/tools/{tool_id}": {};
  "DELETE /v1/convai/tools/{tool_id}": {
  force?: boolean;
};
  "GET /v1/convai/tools/{tool_id}/dependent-agents": {
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
};
  "GET /v1/convai/tools/{tool_id}/executions": {
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  is_error?: (boolean | ElevenLabsFullApiSchemaJsonValue);
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  branch_id?: (string | ElevenLabsFullApiSchemaJsonValue);
  start_time?: (number | ElevenLabsFullApiSchemaJsonValue);
  end_time?: (number | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/settings": {};
  "PATCH /v1/convai/settings": {};
  "GET /v1/convai/settings/dashboard": {};
  "PATCH /v1/convai/settings/dashboard": {};
  "POST /v1/convai/secrets": {};
  "GET /v1/convai/secrets": {
  page_size?: (number | ElevenLabsFullApiSchemaJsonValue);
  dependency_limit?: (number | ElevenLabsFullApiSchemaJsonValue);
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/secrets/{secret_id}": {};
  "DELETE /v1/convai/secrets/{secret_id}": {};
  "PATCH /v1/convai/secrets/{secret_id}": {};
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}": {
  page_size?: number;
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/batch-calling/submit": {};
  "GET /v1/convai/batch-calling/workspace": {
  limit?: number;
  last_doc?: (string | ElevenLabsFullApiSchemaJsonValue);
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/convai/batch-calling/{batch_id}": {};
  "DELETE /v1/convai/batch-calling/{batch_id}": {};
  "POST /v1/convai/batch-calling/{batch_id}/cancel": {};
  "POST /v1/convai/batch-calling/{batch_id}/retry": {};
  "POST /v1/convai/sip-trunk/outbound-call": {};
  "POST /v1/convai/mcp-servers": {};
  "GET /v1/convai/mcp-servers": {};
  "GET /v1/convai/mcp-servers/{mcp_server_id}": {};
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}": {};
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}": {};
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools": {};
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy": {};
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals": {};
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}": {};
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs": {};
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": {};
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": {};
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": {};
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}": {};
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}": {};
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}": {};
  "GET /v1/convai/whatsapp-accounts": {
  agent_id?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/agents/{agent_id}/branches": {};
  "GET /v1/convai/agents/{agent_id}/branches": {
  include_archived?: boolean;
  limit?: number;
};
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}": {};
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}": {};
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}": {};
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge": {
  target_branch_id: string;
};
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase": {};
  "POST /v1/convai/agents/{agent_id}/deployments": {};
  "POST /v1/convai/agents/{agent_id}/drafts": {
  branch_id: string;
};
  "DELETE /v1/convai/agents/{agent_id}/drafts": {
  branch_id: string;
};
  "GET /v1/speech-engine": {
  page_size?: number;
  search?: (string | ElevenLabsFullApiSchemaJsonValue);
  sort_direction?: ElevenLabsFullApiSchemaSortDirection;
  sort_by?: (ElevenLabsFullApiSchemaAgentSortBy | ElevenLabsFullApiSchemaJsonValue);
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/speech-engine": {};
  "GET /v1/speech-engine/{speech_engine_id}": {};
  "PATCH /v1/speech-engine/{speech_engine_id}": {};
  "DELETE /v1/speech-engine/{speech_engine_id}": {};
  "POST /v1/convai/conversations/{conversation_id}/analysis/run": {};
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run": {};
  "GET /v1/convai/environment-variables": {
  cursor?: (string | ElevenLabsFullApiSchemaJsonValue);
  page_size?: number;
  label?: (string | ElevenLabsFullApiSchemaJsonValue);
  environment?: (string | ElevenLabsFullApiSchemaJsonValue);
  type?: ("string" | "secret" | "auth_connection" | ElevenLabsFullApiSchemaJsonValue);
};
  "POST /v1/convai/environment-variables": {};
  "GET /v1/convai/environment-variables/{env_var_id}": {};
  "PATCH /v1/convai/environment-variables/{env_var_id}": {};
  "POST /v1/music/plan": {};
  "POST /v1/music": {
  output_format?: "auto" | "mp3_48000_128" | "mp3_48000_192" | "mp3_48000_240" | "mp3_48000_320" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
};
  "POST /v1/music/detailed": {
  output_format?: "auto" | "mp3_48000_128" | "mp3_48000_192" | "mp3_48000_240" | "mp3_48000_320" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
};
  "POST /v1/music/stream": {
  output_format?: "auto" | "mp3_48000_128" | "mp3_48000_192" | "mp3_48000_240" | "mp3_48000_320" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
};
  "POST /v1/music/upload": {};
  "POST /v1/music/stem-separation": {
  output_format?: ElevenLabsFullApiSchemaAllowedOutputFormats;
};
  "POST /v1/productions/orders": {};
  "GET /v1/productions/orders": {
  page_size?: number;
  offset?: number;
  status?: (ReadonlyArray<ElevenLabsFullApiSchemaOrderRequestState> | ElevenLabsFullApiSchemaJsonValue);
  start_date?: (string | ElevenLabsFullApiSchemaJsonValue);
  end_date?: (string | ElevenLabsFullApiSchemaJsonValue);
};
  "GET /v1/productions/orders/{order_id}": {};
  "PATCH /v1/productions/orders/{order_id}": {};
  "POST /v1/productions/orders/{order_id}/media": {};
  "GET /v1/productions/orders/{order_id}/media/{media_id}": {};
  "POST /v1/productions/orders/{order_id}/items": {};
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}": {};
  "POST /v1/productions/orders/{order_id}/submit": {};
  "GET /v1/productions/orders/{order_id}/deliverables": {};
  "GET /v1/productions/orders/languages/{order_item_kind}": {};
  "POST /v1/voices/pvc": {};
  "POST /v1/voices/pvc/{voice_id}": {};
  "POST /v1/voices/pvc/{voice_id}/samples": {};
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}": {};
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}": {};
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio": {
  remove_background_noise?: boolean;
};
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform": {};
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers": {};
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers": {};
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio": {};
  "GET /v1/voices/pvc/{voice_id}/captcha": {};
  "POST /v1/voices/pvc/{voice_id}/captcha": {};
  "POST /v1/voices/pvc/{voice_id}/train": {};
  "POST /v1/voices/pvc/{voice_id}/verification": {};
  "POST /v1/workspace/analytics/query/usage-by-product-over-time": {};
  "POST /v1/workspace/analytics/requests": {};
  "GET /docs": {};
}

export interface ElevenLabsFullApiOperationQueryRequiredMap {
  "GET /v1/history": false;
  "GET /v1/history/{history_item_id}": false;
  "DELETE /v1/history/{history_item_id}": false;
  "GET /v1/history/{history_item_id}/audio": false;
  "POST /v1/history/download": false;
  "POST /v1/sound-generation": false;
  "POST /v1/audio-isolation": false;
  "GET /v1/audio-isolation/history": false;
  "DELETE /v1/audio-isolation/history/{history_item_id}": false;
  "POST /v1/audio-isolation/stream": false;
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}": false;
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio": false;
  "POST /v1/text-to-speech/{voice_id}": false;
  "POST /v1/text-to-speech/{voice_id}/with-timestamps": false;
  "POST /v1/text-to-speech/{voice_id}/stream": false;
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps": false;
  "POST /v1/text-to-dialogue": false;
  "POST /v1/text-to-dialogue/stream": false;
  "POST /v1/text-to-dialogue/stream/with-timestamps": false;
  "POST /v1/text-to-dialogue/with-timestamps": false;
  "POST /v1/speech-to-speech/{voice_id}": false;
  "POST /v1/speech-to-speech/{voice_id}/stream": false;
  "POST /v1/text-to-voice/create-previews": false;
  "POST /v1/text-to-voice": false;
  "POST /v1/text-to-voice/design": false;
  "POST /v1/text-to-voice/{voice_id}/remix": false;
  "GET /v1/text-to-voice/{generated_voice_id}/stream": false;
  "GET /v1/user": false;
  "GET /v1/user/subscription": false;
  "GET /v1/voices/settings/default": false;
  "GET /v1/voices/{voice_id}/settings": false;
  "POST /v1/voices/{voice_id}/settings/edit": false;
  "GET /v1/voices": false;
  "GET /v1/voices/{voice_id}": false;
  "DELETE /v1/voices/{voice_id}": false;
  "GET /v2/voices": false;
  "POST /v1/voices/add": false;
  "POST /v1/voices/{voice_id}/edit": false;
  "POST /v1/voices/add/{public_user_id}/{voice_id}": false;
  "POST /v1/studio/podcasts": false;
  "POST /v1/music/video-to-music": false;
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries": false;
  "GET /v1/studio/projects": false;
  "POST /v1/studio/projects": false;
  "POST /v1/studio/projects/{project_id}": false;
  "GET /v1/studio/projects/{project_id}": false;
  "DELETE /v1/studio/projects/{project_id}": false;
  "POST /v1/studio/projects/{project_id}/content": false;
  "POST /v1/studio/projects/{project_id}/convert": false;
  "GET /v1/studio/projects/{project_id}/snapshots": false;
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}": false;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream": false;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive": false;
  "GET /v1/studio/projects/{project_id}/chapters": false;
  "POST /v1/studio/projects/{project_id}/chapters": false;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}": false;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}": false;
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}": false;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert": false;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots": false;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}": false;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream": false;
  "GET /v1/studio/projects/{project_id}/muted-tracks": false;
  "GET /v1/dubbing/resource/{dubbing_id}": false;
  "POST /v1/dubbing/resource/{dubbing_id}/language": false;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment": false;
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}": false;
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments": false;
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}": false;
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe": false;
  "POST /v1/dubbing/resource/{dubbing_id}/translate": false;
  "POST /v1/dubbing/resource/{dubbing_id}/dub": false;
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}": false;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker": false;
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices": false;
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}": false;
  "GET /v1/dubbing": false;
  "POST /v1/dubbing": false;
  "GET /v1/dubbing/{dubbing_id}": false;
  "DELETE /v1/dubbing/{dubbing_id}": false;
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}": false;
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}": false;
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}": false;
  "GET /v1/models": false;
  "POST /v1/audio-native": false;
  "GET /v1/audio-native/{project_id}/settings": false;
  "POST /v1/audio-native/{project_id}/content": false;
  "POST /v1/audio-native/content": false;
  "GET /v1/shared-voices": false;
  "POST /v1/similar-voices": false;
  "GET /v1/usage/character-stats": true;
  "POST /v1/pronunciation-dictionaries/add-from-file": false;
  "POST /v1/pronunciation-dictionaries/add-from-rules": false;
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": false;
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": false;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules": false;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules": false;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules": false;
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download": false;
  "GET /v1/pronunciation-dictionaries": false;
  "POST /v1/workspaces/api-keys/disable": true;
  "GET /v1/service-accounts/{service_account_user_id}/api-keys": false;
  "POST /v1/service-accounts/{service_account_user_id}/api-keys": false;
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": false;
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": false;
  "GET /v1/workspace/audit-logs": false;
  "POST /v1/workspace/auth-connections": false;
  "GET /v1/workspace/auth-connections": false;
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}": false;
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}": false;
  "GET /v1/service-accounts": false;
  "GET /v1/workspace/groups": false;
  "GET /v1/workspace/groups/search": true;
  "POST /v1/workspace/groups/{group_id}/members/remove": false;
  "POST /v1/workspace/groups/{group_id}/members": false;
  "POST /v1/workspace/invites/add": false;
  "POST /v1/workspace/invites/add-bulk": false;
  "DELETE /v1/workspace/invites": false;
  "POST /v1/workspace/members": false;
  "GET /v1/workspace/resources/{resource_id}": true;
  "POST /v1/workspace/resources/{resource_id}/share": false;
  "POST /v1/workspace/resources/{resource_id}/unshare": false;
  "GET /v1/workspace/webhooks": false;
  "POST /v1/workspace/webhooks": false;
  "PATCH /v1/workspace/webhooks/{webhook_id}": false;
  "DELETE /v1/workspace/webhooks/{webhook_id}": false;
  "POST /v1/speech-to-text": false;
  "GET /v1/speech-to-text/transcripts/{transcription_id}": false;
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}": false;
  "POST /v1/single-use-token/{token_type}": false;
  "POST /v1/forced-alignment": false;
  "GET /v1/convai/conversation/get-signed-url": true;
  "GET /v1/convai/conversation/get_signed_url": true;
  "GET /v1/convai/conversation/token": true;
  "POST /v1/convai/twilio/outbound-call": false;
  "POST /v1/convai/twilio/register-call": false;
  "POST /v1/convai/exotel/outbound-call": false;
  "POST /v1/convai/whatsapp/outbound-call": false;
  "POST /v1/convai/whatsapp/outbound-message": false;
  "POST /v1/convai/agents/create": false;
  "GET /v1/convai/agents/summaries": true;
  "GET /v1/convai/agents/{agent_id}": false;
  "PATCH /v1/convai/agents/{agent_id}": false;
  "DELETE /v1/convai/agents/{agent_id}": false;
  "GET /v1/convai/agents/{agent_id}/widget": false;
  "GET /v1/convai/agents/{agent_id}/link": false;
  "POST /v1/convai/agents/{agent_id}/avatar": false;
  "GET /v1/convai/agents": false;
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size": false;
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate": false;
  "POST /v1/convai/agents/{agent_id}/duplicate": false;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation": false;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream": false;
  "POST /v1/convai/agent-testing/create": false;
  "POST /v1/convai/agent-testing/folders": false;
  "GET /v1/convai/agent-testing/folders/{folder_id}": false;
  "PATCH /v1/convai/agent-testing/folders/{folder_id}": false;
  "DELETE /v1/convai/agent-testing/folders/{folder_id}": false;
  "POST /v1/convai/agent-testing/bulk-move": false;
  "GET /v1/convai/agent-testing/{test_id}": false;
  "PUT /v1/convai/agent-testing/{test_id}": false;
  "DELETE /v1/convai/agent-testing/{test_id}": false;
  "POST /v1/convai/agent-testing/summaries": false;
  "GET /v1/convai/agent-testing": false;
  "GET /v1/convai/test-invocations": false;
  "POST /v1/convai/agents/{agent_id}/run-tests": false;
  "GET /v1/convai/test-invocations/{test_invocation_id}": false;
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit": false;
  "GET /v1/convai/conversations": false;
  "GET /v1/convai/users": false;
  "GET /v1/convai/conversations/{conversation_id}": false;
  "DELETE /v1/convai/conversations/{conversation_id}": false;
  "GET /v1/convai/conversations/{conversation_id}/sip-messages": false;
  "GET /v1/convai/conversations/{conversation_id}/audio": false;
  "POST /v1/convai/conversations/{conversation_id}/feedback": false;
  "GET /v1/convai/conversations/messages/text-search": true;
  "GET /v1/convai/conversations/messages/smart-search": true;
  "POST /v1/convai/conversations/{conversation_id}/tags": false;
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}": false;
  "GET /v1/convai/tags": false;
  "POST /v1/convai/tags": false;
  "GET /v1/convai/tags/{tag_id}": false;
  "PATCH /v1/convai/tags/{tag_id}": false;
  "DELETE /v1/convai/tags/{tag_id}": false;
  "POST /v1/convai/phone-numbers": false;
  "GET /v1/convai/phone-numbers": false;
  "GET /v1/convai/phone-numbers/{phone_number_id}": false;
  "DELETE /v1/convai/phone-numbers/{phone_number_id}": false;
  "PATCH /v1/convai/phone-numbers/{phone_number_id}": false;
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages": false;
  "POST /v1/convai/llm-usage/calculate": false;
  "GET /v1/convai/llm/list": false;
  "POST /v1/convai/conversations/{conversation_id}/files": false;
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}": false;
  "GET /v1/convai/analytics/live-count": false;
  "GET /v1/convai/knowledge-base/summaries": true;
  "POST /v1/convai/knowledge-base": false;
  "GET /v1/convai/knowledge-base": false;
  "POST /v1/convai/knowledge-base/url": false;
  "POST /v1/convai/knowledge-base/file": false;
  "POST /v1/convai/knowledge-base/text": false;
  "POST /v1/convai/knowledge-base/folder": false;
  "PATCH /v1/convai/knowledge-base/{documentation_id}": false;
  "GET /v1/convai/knowledge-base/{documentation_id}": false;
  "DELETE /v1/convai/knowledge-base/{documentation_id}": false;
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file": false;
  "POST /v1/convai/knowledge-base/rag-index": false;
  "GET /v1/convai/knowledge-base/rag-index": false;
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh": false;
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index": false;
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}": false;
  "GET /v1/convai/knowledge-base/search": true;
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/content": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks": true;
  "POST /v1/convai/knowledge-base/{document_id}/move": false;
  "POST /v1/convai/knowledge-base/bulk-move": false;
  "GET /v1/convai/agents/{agent_id}/topics": false;
  "POST /v1/convai/tools": false;
  "GET /v1/convai/tools": false;
  "GET /v1/convai/tools/{tool_id}": false;
  "PATCH /v1/convai/tools/{tool_id}": false;
  "DELETE /v1/convai/tools/{tool_id}": false;
  "GET /v1/convai/tools/{tool_id}/dependent-agents": false;
  "GET /v1/convai/tools/{tool_id}/executions": false;
  "GET /v1/convai/settings": false;
  "PATCH /v1/convai/settings": false;
  "GET /v1/convai/settings/dashboard": false;
  "PATCH /v1/convai/settings/dashboard": false;
  "POST /v1/convai/secrets": false;
  "GET /v1/convai/secrets": false;
  "GET /v1/convai/secrets/{secret_id}": false;
  "DELETE /v1/convai/secrets/{secret_id}": false;
  "PATCH /v1/convai/secrets/{secret_id}": false;
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}": false;
  "POST /v1/convai/batch-calling/submit": false;
  "GET /v1/convai/batch-calling/workspace": false;
  "GET /v1/convai/batch-calling/{batch_id}": false;
  "DELETE /v1/convai/batch-calling/{batch_id}": false;
  "POST /v1/convai/batch-calling/{batch_id}/cancel": false;
  "POST /v1/convai/batch-calling/{batch_id}/retry": false;
  "POST /v1/convai/sip-trunk/outbound-call": false;
  "POST /v1/convai/mcp-servers": false;
  "GET /v1/convai/mcp-servers": false;
  "GET /v1/convai/mcp-servers/{mcp_server_id}": false;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}": false;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}": false;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools": false;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy": false;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals": false;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}": false;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs": false;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": false;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": false;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": false;
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}": false;
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}": false;
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}": false;
  "GET /v1/convai/whatsapp-accounts": false;
  "POST /v1/convai/agents/{agent_id}/branches": false;
  "GET /v1/convai/agents/{agent_id}/branches": false;
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}": false;
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}": false;
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}": false;
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge": true;
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase": false;
  "POST /v1/convai/agents/{agent_id}/deployments": false;
  "POST /v1/convai/agents/{agent_id}/drafts": true;
  "DELETE /v1/convai/agents/{agent_id}/drafts": true;
  "GET /v1/speech-engine": false;
  "POST /v1/speech-engine": false;
  "GET /v1/speech-engine/{speech_engine_id}": false;
  "PATCH /v1/speech-engine/{speech_engine_id}": false;
  "DELETE /v1/speech-engine/{speech_engine_id}": false;
  "POST /v1/convai/conversations/{conversation_id}/analysis/run": false;
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run": false;
  "GET /v1/convai/environment-variables": false;
  "POST /v1/convai/environment-variables": false;
  "GET /v1/convai/environment-variables/{env_var_id}": false;
  "PATCH /v1/convai/environment-variables/{env_var_id}": false;
  "POST /v1/music/plan": false;
  "POST /v1/music": false;
  "POST /v1/music/detailed": false;
  "POST /v1/music/stream": false;
  "POST /v1/music/upload": false;
  "POST /v1/music/stem-separation": false;
  "POST /v1/productions/orders": false;
  "GET /v1/productions/orders": false;
  "GET /v1/productions/orders/{order_id}": false;
  "PATCH /v1/productions/orders/{order_id}": false;
  "POST /v1/productions/orders/{order_id}/media": false;
  "GET /v1/productions/orders/{order_id}/media/{media_id}": false;
  "POST /v1/productions/orders/{order_id}/items": false;
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}": false;
  "POST /v1/productions/orders/{order_id}/submit": false;
  "GET /v1/productions/orders/{order_id}/deliverables": false;
  "GET /v1/productions/orders/languages/{order_item_kind}": false;
  "POST /v1/voices/pvc": false;
  "POST /v1/voices/pvc/{voice_id}": false;
  "POST /v1/voices/pvc/{voice_id}/samples": false;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}": false;
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers": false;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio": false;
  "GET /v1/voices/pvc/{voice_id}/captcha": false;
  "POST /v1/voices/pvc/{voice_id}/captcha": false;
  "POST /v1/voices/pvc/{voice_id}/train": false;
  "POST /v1/voices/pvc/{voice_id}/verification": false;
  "POST /v1/workspace/analytics/query/usage-by-product-over-time": false;
  "POST /v1/workspace/analytics/requests": false;
  "GET /docs": false;
}

export interface ElevenLabsFullApiOperationRequestBodyMap {
  "GET /v1/history": never;
  "GET /v1/history/{history_item_id}": never;
  "DELETE /v1/history/{history_item_id}": never;
  "GET /v1/history/{history_item_id}/audio": never;
  "POST /v1/history/download": ElevenLabsFullApiSchemaBodyDownloadHistoryItemsV1HistoryDownloadPost;
  "POST /v1/sound-generation": ElevenLabsFullApiSchemaBodySoundGenerationV1SoundGenerationPost;
  "POST /v1/audio-isolation": ElevenLabsFullApiSchemaBodyAudioIsolationV1AudioIsolationPost;
  "GET /v1/audio-isolation/history": never;
  "DELETE /v1/audio-isolation/history/{history_item_id}": never;
  "POST /v1/audio-isolation/stream": ElevenLabsFullApiSchemaBodyAudioIsolationStreamV1AudioIsolationStreamPost;
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}": never;
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio": never;
  "POST /v1/text-to-speech/{voice_id}": ElevenLabsFullApiSchemaBodyTextToSpeechFull;
  "POST /v1/text-to-speech/{voice_id}/with-timestamps": ElevenLabsFullApiSchemaBodyTextToSpeechFullWithTimestamps;
  "POST /v1/text-to-speech/{voice_id}/stream": ElevenLabsFullApiSchemaBodyTextToSpeechStream;
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps": ElevenLabsFullApiSchemaBodyTextToSpeechStreamWithTimestamps;
  "POST /v1/text-to-dialogue": ElevenLabsFullApiSchemaBodyTextToDialogueMultiVoiceV1TextToDialoguePost;
  "POST /v1/text-to-dialogue/stream": ElevenLabsFullApiSchemaBodyTextToDialogueMultiVoiceStreamingV1TextToDialogueStreamPost;
  "POST /v1/text-to-dialogue/stream/with-timestamps": ElevenLabsFullApiSchemaBodyTextToDialogueStreamWithTimestamps;
  "POST /v1/text-to-dialogue/with-timestamps": ElevenLabsFullApiSchemaBodyTextToDialogueFullWithTimestamps;
  "POST /v1/speech-to-speech/{voice_id}": ElevenLabsFullApiSchemaBodySpeechToSpeechV1SpeechToSpeechVoiceIdPost;
  "POST /v1/speech-to-speech/{voice_id}/stream": ElevenLabsFullApiSchemaBodySpeechToSpeechStreamingV1SpeechToSpeechVoiceIdStreamPost;
  "POST /v1/text-to-voice/create-previews": ElevenLabsFullApiSchemaVoicePreviewsRequestModel;
  "POST /v1/text-to-voice": ElevenLabsFullApiSchemaBodyCreateANewVoiceFromVoicePreviewV1TextToVoicePost;
  "POST /v1/text-to-voice/design": ElevenLabsFullApiSchemaVoiceDesignRequestModel;
  "POST /v1/text-to-voice/{voice_id}/remix": ElevenLabsFullApiSchemaVoiceRemixRequestModel;
  "GET /v1/text-to-voice/{generated_voice_id}/stream": never;
  "GET /v1/user": never;
  "GET /v1/user/subscription": never;
  "GET /v1/voices/settings/default": never;
  "GET /v1/voices/{voice_id}/settings": never;
  "POST /v1/voices/{voice_id}/settings/edit": ElevenLabsFullApiSchemaVoiceSettingsResponseModel;
  "GET /v1/voices": never;
  "GET /v1/voices/{voice_id}": never;
  "DELETE /v1/voices/{voice_id}": never;
  "GET /v2/voices": never;
  "POST /v1/voices/add": ElevenLabsFullApiSchemaBodyAddVoiceV1VoicesAddPost;
  "POST /v1/voices/{voice_id}/edit": ElevenLabsFullApiSchemaBodyEditVoiceV1VoicesVoiceIdEditPost;
  "POST /v1/voices/add/{public_user_id}/{voice_id}": ElevenLabsFullApiSchemaBodyAddSharedVoiceV1VoicesAddPublicUserIdVoiceIdPost;
  "POST /v1/studio/podcasts": ElevenLabsFullApiSchemaBodyCreatePodcastV1StudioPodcastsPost;
  "POST /v1/music/video-to-music": ElevenLabsFullApiSchemaBodyVideoToMusicV1MusicVideoToMusicPost;
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries": ElevenLabsFullApiSchemaBodyCreatePronunciationDictionariesV1StudioProjectsProjectIdPronunciationDictionariesPost;
  "GET /v1/studio/projects": never;
  "POST /v1/studio/projects": ElevenLabsFullApiSchemaBodyCreateStudioProjectV1StudioProjectsPost;
  "POST /v1/studio/projects/{project_id}": ElevenLabsFullApiSchemaBodyUpdateStudioProjectV1StudioProjectsProjectIdPost;
  "GET /v1/studio/projects/{project_id}": never;
  "DELETE /v1/studio/projects/{project_id}": never;
  "POST /v1/studio/projects/{project_id}/content": ElevenLabsFullApiSchemaBodyUpdateStudioProjectContentV1StudioProjectsProjectIdContentPost;
  "POST /v1/studio/projects/{project_id}/convert": never;
  "GET /v1/studio/projects/{project_id}/snapshots": never;
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}": never;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream": ElevenLabsFullApiSchemaBodyStreamStudioProjectAudioV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamPost;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive": never;
  "GET /v1/studio/projects/{project_id}/chapters": never;
  "POST /v1/studio/projects/{project_id}/chapters": ElevenLabsFullApiSchemaBodyCreateChapterV1StudioProjectsProjectIdChaptersPost;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}": never;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}": ElevenLabsFullApiSchemaBodyUpdateChapterV1StudioProjectsProjectIdChaptersChapterIdPost;
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}": never;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert": never;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots": never;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}": never;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream": ElevenLabsFullApiSchemaBodyStreamChapterAudioV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost;
  "GET /v1/studio/projects/{project_id}/muted-tracks": never;
  "GET /v1/dubbing/resource/{dubbing_id}": never;
  "POST /v1/dubbing/resource/{dubbing_id}/language": ElevenLabsFullApiSchemaBodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment": ElevenLabsFullApiSchemaSegmentCreatePayload;
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}": ElevenLabsFullApiSchemaSegmentUpdatePayload;
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments": ElevenLabsFullApiSchemaBodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost;
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}": never;
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe": ElevenLabsFullApiSchemaBodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost;
  "POST /v1/dubbing/resource/{dubbing_id}/translate": ElevenLabsFullApiSchemaBodyTranslatesAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdTranslatePost;
  "POST /v1/dubbing/resource/{dubbing_id}/dub": ElevenLabsFullApiSchemaBodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost;
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}": ElevenLabsFullApiSchemaBodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker": ElevenLabsFullApiSchemaBodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost;
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices": never;
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}": ElevenLabsFullApiSchemaBodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost;
  "GET /v1/dubbing": never;
  "POST /v1/dubbing": ElevenLabsFullApiSchemaBodyDubAVideoOrAnAudioFileV1DubbingPost;
  "GET /v1/dubbing/{dubbing_id}": never;
  "DELETE /v1/dubbing/{dubbing_id}": never;
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}": never;
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}": never;
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}": never;
  "GET /v1/models": never;
  "POST /v1/audio-native": ElevenLabsFullApiSchemaBodyCreatesAudioNativeEnabledProjectV1AudioNativePost;
  "GET /v1/audio-native/{project_id}/settings": never;
  "POST /v1/audio-native/{project_id}/content": ElevenLabsFullApiSchemaBodyUpdateAudioNativeProjectContentV1AudioNativeProjectIdContentPost;
  "POST /v1/audio-native/content": ElevenLabsFullApiSchemaBodyUpdateAudioNativeContentFromURLV1AudioNativeContentPost;
  "GET /v1/shared-voices": never;
  "POST /v1/similar-voices": ElevenLabsFullApiSchemaBodyGetSimilarLibraryVoicesV1SimilarVoicesPost;
  "GET /v1/usage/character-stats": never;
  "POST /v1/pronunciation-dictionaries/add-from-file": ElevenLabsFullApiSchemaBodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromFilePost;
  "POST /v1/pronunciation-dictionaries/add-from-rules": ElevenLabsFullApiSchemaBodyAddAPronunciationDictionaryV1PronunciationDictionariesAddFromRulesPost;
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": ElevenLabsFullApiSchemaBodyUpdatePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdPatch;
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": never;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules": ElevenLabsFullApiSchemaBodySetRulesOnThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdSetRulesPost;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules": ElevenLabsFullApiSchemaBodyAddRulesToThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdAddRulesPost;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules": ElevenLabsFullApiSchemaBodyRemoveRulesFromThePronunciationDictionaryV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesPost;
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download": never;
  "GET /v1/pronunciation-dictionaries": never;
  "POST /v1/workspaces/api-keys/disable": never;
  "GET /v1/service-accounts/{service_account_user_id}/api-keys": never;
  "POST /v1/service-accounts/{service_account_user_id}/api-keys": ElevenLabsFullApiSchemaBodyCreateServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysPost;
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": ElevenLabsFullApiSchemaBodyEditServiceAccountApiKeyV1ServiceAccountsServiceAccountUserIdApiKeysApiKeyIdPatch;
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": never;
  "GET /v1/workspace/audit-logs": never;
  "POST /v1/workspace/auth-connections": (ElevenLabsFullApiSchemaCreateOAuth2ClientCredsRequest | ElevenLabsFullApiSchemaCreateCustomHeaderAuthRequest | ElevenLabsFullApiSchemaCreateBasicAuthRequest | ElevenLabsFullApiSchemaCreateBearerAuthRequest | ElevenLabsFullApiSchemaCreateOAuth2JWTRequest | ElevenLabsFullApiSchemaCreatePrivateKeyJWTRequest | ElevenLabsFullApiSchemaCreateMTLSAuthRequest);
  "GET /v1/workspace/auth-connections": never;
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}": (ElevenLabsFullApiSchemaUpdateOAuth2ClientCredsRequest | ElevenLabsFullApiSchemaUpdateBasicAuthRequest | ElevenLabsFullApiSchemaUpdateOAuth2JWTRequest);
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}": never;
  "GET /v1/service-accounts": never;
  "GET /v1/workspace/groups": never;
  "GET /v1/workspace/groups/search": never;
  "POST /v1/workspace/groups/{group_id}/members/remove": ElevenLabsFullApiSchemaBodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost;
  "POST /v1/workspace/groups/{group_id}/members": ElevenLabsFullApiSchemaBodyAddMemberToUserGroupV1WorkspaceGroupsGroupIdMembersPost;
  "POST /v1/workspace/invites/add": ElevenLabsFullApiSchemaBodyInviteUserV1WorkspaceInvitesAddPost;
  "POST /v1/workspace/invites/add-bulk": ElevenLabsFullApiSchemaBodyInviteMultipleUsersV1WorkspaceInvitesAddBulkPost;
  "DELETE /v1/workspace/invites": ElevenLabsFullApiSchemaBodyDeleteExistingInvitationV1WorkspaceInvitesDelete;
  "POST /v1/workspace/members": ElevenLabsFullApiSchemaBodyUpdateMemberV1WorkspaceMembersPost;
  "GET /v1/workspace/resources/{resource_id}": never;
  "POST /v1/workspace/resources/{resource_id}/share": ElevenLabsFullApiSchemaBodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost;
  "POST /v1/workspace/resources/{resource_id}/unshare": ElevenLabsFullApiSchemaBodyUnshareWorkspaceResourceV1WorkspaceResourcesResourceIdUnsharePost;
  "GET /v1/workspace/webhooks": never;
  "POST /v1/workspace/webhooks": ElevenLabsFullApiSchemaBodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost;
  "PATCH /v1/workspace/webhooks/{webhook_id}": ElevenLabsFullApiSchemaBodyUpdateWorkspaceWebhookV1WorkspaceWebhooksWebhookIdPatch;
  "DELETE /v1/workspace/webhooks/{webhook_id}": never;
  "POST /v1/speech-to-text": ElevenLabsFullApiSchemaBodySpeechToTextV1SpeechToTextPost;
  "GET /v1/speech-to-text/transcripts/{transcription_id}": never;
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}": never;
  "POST /v1/single-use-token/{token_type}": never;
  "POST /v1/forced-alignment": ElevenLabsFullApiSchemaBodyCreateForcedAlignmentV1ForcedAlignmentPost;
  "GET /v1/convai/conversation/get-signed-url": never;
  "GET /v1/convai/conversation/get_signed_url": never;
  "GET /v1/convai/conversation/token": never;
  "POST /v1/convai/twilio/outbound-call": ElevenLabsFullApiSchemaBodyHandleAnOutboundCallViaTwilioV1ConvaiTwilioOutboundCallPost;
  "POST /v1/convai/twilio/register-call": ElevenLabsFullApiSchemaBodyRegisterATwilioCallAndReturnTwiMLV1ConvaiTwilioRegisterCallPost;
  "POST /v1/convai/exotel/outbound-call": ElevenLabsFullApiSchemaBodyHandleAnOutboundCallViaExotelV1ConvaiExotelOutboundCallPost;
  "POST /v1/convai/whatsapp/outbound-call": ElevenLabsFullApiSchemaBodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost;
  "POST /v1/convai/whatsapp/outbound-message": ElevenLabsFullApiSchemaBodySendAnOutboundMessageViaWhatsAppV1ConvaiWhatsappOutboundMessagePost;
  "POST /v1/convai/agents/create": ElevenLabsFullApiSchemaBodyCreateAgentV1ConvaiAgentsCreatePost;
  "GET /v1/convai/agents/summaries": never;
  "GET /v1/convai/agents/{agent_id}": never;
  "PATCH /v1/convai/agents/{agent_id}": ElevenLabsFullApiSchemaBodyPatchesAnAgentSettingsV1ConvaiAgentsAgentIdPatch;
  "DELETE /v1/convai/agents/{agent_id}": never;
  "GET /v1/convai/agents/{agent_id}/widget": never;
  "GET /v1/convai/agents/{agent_id}/link": never;
  "POST /v1/convai/agents/{agent_id}/avatar": ElevenLabsFullApiSchemaBodyPostAgentAvatarV1ConvaiAgentsAgentIdAvatarPost;
  "GET /v1/convai/agents": never;
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size": never;
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate": ElevenLabsFullApiSchemaLLMUsageCalculatorRequestModel;
  "POST /v1/convai/agents/{agent_id}/duplicate": ElevenLabsFullApiSchemaBodyDuplicateAgentV1ConvaiAgentsAgentIdDuplicatePost;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation": ElevenLabsFullApiSchemaBodySimulatesAConversationV1ConvaiAgentsAgentIdSimulateConversationPost;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream": ElevenLabsFullApiSchemaBodySimulatesAConversationStreamV1ConvaiAgentsAgentIdSimulateConversationStreamPost;
  "POST /v1/convai/agent-testing/create": (ElevenLabsFullApiSchemaCreateResponseUnitTestRequest | ElevenLabsFullApiSchemaCreateToolCallUnitTestRequest | ElevenLabsFullApiSchemaCreateSimulationTestRequest);
  "POST /v1/convai/agent-testing/folders": ElevenLabsFullApiSchemaBodyCreateAgentTestFolderV1ConvaiAgentTestingFoldersPost;
  "GET /v1/convai/agent-testing/folders/{folder_id}": never;
  "PATCH /v1/convai/agent-testing/folders/{folder_id}": ElevenLabsFullApiSchemaBodyUpdateAgentTestFolderV1ConvaiAgentTestingFoldersFolderIdPatch;
  "DELETE /v1/convai/agent-testing/folders/{folder_id}": never;
  "POST /v1/convai/agent-testing/bulk-move": ElevenLabsFullApiSchemaBodyBulkMoveTestsToFolderV1ConvaiAgentTestingBulkMovePost;
  "GET /v1/convai/agent-testing/{test_id}": never;
  "PUT /v1/convai/agent-testing/{test_id}": (ElevenLabsFullApiSchemaUpdateResponseUnitTestRequest | ElevenLabsFullApiSchemaUpdateToolCallUnitTestRequest | ElevenLabsFullApiSchemaUpdateSimulationTestRequest);
  "DELETE /v1/convai/agent-testing/{test_id}": never;
  "POST /v1/convai/agent-testing/summaries": ElevenLabsFullApiSchemaListTestsByIdsRequestModel;
  "GET /v1/convai/agent-testing": never;
  "GET /v1/convai/test-invocations": never;
  "POST /v1/convai/agents/{agent_id}/run-tests": ElevenLabsFullApiSchemaRunAgentTestsRequestModel;
  "GET /v1/convai/test-invocations/{test_invocation_id}": never;
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit": ElevenLabsFullApiSchemaResubmitTestsRequestModel;
  "GET /v1/convai/conversations": never;
  "GET /v1/convai/users": never;
  "GET /v1/convai/conversations/{conversation_id}": never;
  "DELETE /v1/convai/conversations/{conversation_id}": never;
  "GET /v1/convai/conversations/{conversation_id}/sip-messages": never;
  "GET /v1/convai/conversations/{conversation_id}/audio": never;
  "POST /v1/convai/conversations/{conversation_id}/feedback": ElevenLabsFullApiSchemaConversationFeedbackRequestModel;
  "GET /v1/convai/conversations/messages/text-search": never;
  "GET /v1/convai/conversations/messages/smart-search": never;
  "POST /v1/convai/conversations/{conversation_id}/tags": ElevenLabsFullApiSchemaAssignConversationTagsRequestModel;
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}": never;
  "GET /v1/convai/tags": never;
  "POST /v1/convai/tags": ElevenLabsFullApiSchemaCreateConversationTagRequestModel;
  "GET /v1/convai/tags/{tag_id}": never;
  "PATCH /v1/convai/tags/{tag_id}": ElevenLabsFullApiSchemaPatchConversationTagRequestModel;
  "DELETE /v1/convai/tags/{tag_id}": never;
  "POST /v1/convai/phone-numbers": (ElevenLabsFullApiSchemaCreateTwilioPhoneNumberRequest | ElevenLabsFullApiSchemaCreateExotelPhoneNumberRequest | ElevenLabsFullApiSchemaCreateSIPTrunkPhoneNumberRequestV2);
  "GET /v1/convai/phone-numbers": never;
  "GET /v1/convai/phone-numbers/{phone_number_id}": never;
  "DELETE /v1/convai/phone-numbers/{phone_number_id}": never;
  "PATCH /v1/convai/phone-numbers/{phone_number_id}": ElevenLabsFullApiSchemaUpdatePhoneNumberRequest;
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages": never;
  "POST /v1/convai/llm-usage/calculate": ElevenLabsFullApiSchemaLLMUsageCalculatorPublicRequestModel;
  "GET /v1/convai/llm/list": never;
  "POST /v1/convai/conversations/{conversation_id}/files": ElevenLabsFullApiSchemaBodyUploadFileV1ConvaiConversationsConversationIdFilesPost;
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}": never;
  "GET /v1/convai/analytics/live-count": never;
  "GET /v1/convai/knowledge-base/summaries": never;
  "POST /v1/convai/knowledge-base": ElevenLabsFullApiSchemaBodyAddToKnowledgeBaseV1ConvaiKnowledgeBasePost;
  "GET /v1/convai/knowledge-base": never;
  "POST /v1/convai/knowledge-base/url": ElevenLabsFullApiSchemaBodyCreateURLDocumentV1ConvaiKnowledgeBaseUrlPost;
  "POST /v1/convai/knowledge-base/file": ElevenLabsFullApiSchemaBodyCreateFileDocumentV1ConvaiKnowledgeBaseFilePost;
  "POST /v1/convai/knowledge-base/text": ElevenLabsFullApiSchemaBodyCreateTextDocumentV1ConvaiKnowledgeBaseTextPost;
  "POST /v1/convai/knowledge-base/folder": ElevenLabsFullApiSchemaBodyCreateFolderV1ConvaiKnowledgeBaseFolderPost;
  "PATCH /v1/convai/knowledge-base/{documentation_id}": ElevenLabsFullApiSchemaBodyUpdateDocumentV1ConvaiKnowledgeBaseDocumentationIdPatch;
  "GET /v1/convai/knowledge-base/{documentation_id}": never;
  "DELETE /v1/convai/knowledge-base/{documentation_id}": never;
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file": ElevenLabsFullApiSchemaBodyUpdateFileDocumentV1ConvaiKnowledgeBaseDocumentationIdUpdateFilePatch;
  "POST /v1/convai/knowledge-base/rag-index": ElevenLabsFullApiSchemaBodyComputeRAGIndexesInBatchV1ConvaiKnowledgeBaseRagIndexPost;
  "GET /v1/convai/knowledge-base/rag-index": never;
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh": never;
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index": ElevenLabsFullApiSchemaRAGIndexRequestModel;
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index": never;
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}": never;
  "GET /v1/convai/knowledge-base/search": never;
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents": never;
  "GET /v1/convai/knowledge-base/{documentation_id}/content": never;
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url": never;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}": never;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks": never;
  "POST /v1/convai/knowledge-base/{document_id}/move": ElevenLabsFullApiSchemaBodyMoveEntityToFolderV1ConvaiKnowledgeBaseDocumentIdMovePost;
  "POST /v1/convai/knowledge-base/bulk-move": ElevenLabsFullApiSchemaBodyBulkMoveEntitiesToFolderV1ConvaiKnowledgeBaseBulkMovePost;
  "GET /v1/convai/agents/{agent_id}/topics": never;
  "POST /v1/convai/tools": ElevenLabsFullApiSchemaToolRequestModel;
  "GET /v1/convai/tools": never;
  "GET /v1/convai/tools/{tool_id}": never;
  "PATCH /v1/convai/tools/{tool_id}": ElevenLabsFullApiSchemaToolRequestModel;
  "DELETE /v1/convai/tools/{tool_id}": never;
  "GET /v1/convai/tools/{tool_id}/dependent-agents": never;
  "GET /v1/convai/tools/{tool_id}/executions": never;
  "GET /v1/convai/settings": never;
  "PATCH /v1/convai/settings": ElevenLabsFullApiSchemaPatchConvAISettingsRequest;
  "GET /v1/convai/settings/dashboard": never;
  "PATCH /v1/convai/settings/dashboard": ElevenLabsFullApiSchemaPatchConvAIDashboardSettingsRequest;
  "POST /v1/convai/secrets": ElevenLabsFullApiSchemaPostWorkspaceSecretRequest;
  "GET /v1/convai/secrets": never;
  "GET /v1/convai/secrets/{secret_id}": never;
  "DELETE /v1/convai/secrets/{secret_id}": never;
  "PATCH /v1/convai/secrets/{secret_id}": ElevenLabsFullApiSchemaPatchWorkspaceSecretRequest;
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}": never;
  "POST /v1/convai/batch-calling/submit": ElevenLabsFullApiSchemaBodySubmitABatchCallRequestV1ConvaiBatchCallingSubmitPost;
  "GET /v1/convai/batch-calling/workspace": never;
  "GET /v1/convai/batch-calling/{batch_id}": never;
  "DELETE /v1/convai/batch-calling/{batch_id}": never;
  "POST /v1/convai/batch-calling/{batch_id}/cancel": never;
  "POST /v1/convai/batch-calling/{batch_id}/retry": never;
  "POST /v1/convai/sip-trunk/outbound-call": ElevenLabsFullApiSchemaBodyHandleAnOutboundCallViaSIPTrunkV1ConvaiSipTrunkOutboundCallPost;
  "POST /v1/convai/mcp-servers": ElevenLabsFullApiSchemaMCPServerRequestModel;
  "GET /v1/convai/mcp-servers": never;
  "GET /v1/convai/mcp-servers/{mcp_server_id}": never;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}": never;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}": ElevenLabsFullApiSchemaMCPServerConfigUpdateRequestModel;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools": never;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy": ElevenLabsFullApiSchemaMCPApprovalPolicyUpdateRequestModel;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals": ElevenLabsFullApiSchemaMCPToolAddApprovalRequestModel;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}": never;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs": ElevenLabsFullApiSchemaMCPToolConfigOverrideCreateRequestModel;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": never;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": ElevenLabsFullApiSchemaMCPToolConfigOverrideUpdateRequestModel;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": never;
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}": never;
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}": ElevenLabsFullApiSchemaUpdateWhatsAppAccountRequest;
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}": never;
  "GET /v1/convai/whatsapp-accounts": never;
  "POST /v1/convai/agents/{agent_id}/branches": ElevenLabsFullApiSchemaBodyCreateANewBranchV1ConvaiAgentsAgentIdBranchesPost;
  "GET /v1/convai/agents/{agent_id}/branches": never;
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}": never;
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}": ElevenLabsFullApiSchemaBodyUpdateAgentBranchV1ConvaiAgentsAgentIdBranchesBranchIdPatch;
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}": never;
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge": ElevenLabsFullApiSchemaBodyMergeABranchIntoATargetBranchV1ConvaiAgentsAgentIdBranchesSourceBranchIdMergePost;
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase": never;
  "POST /v1/convai/agents/{agent_id}/deployments": ElevenLabsFullApiSchemaBodyCreateOrUpdateDeploymentsV1ConvaiAgentsAgentIdDeploymentsPost;
  "POST /v1/convai/agents/{agent_id}/drafts": ElevenLabsFullApiSchemaBodyCreateAgentDraftV1ConvaiAgentsAgentIdDraftsPost;
  "DELETE /v1/convai/agents/{agent_id}/drafts": never;
  "GET /v1/speech-engine": never;
  "POST /v1/speech-engine": ElevenLabsFullApiSchemaCreateSpeechEngineRequest;
  "GET /v1/speech-engine/{speech_engine_id}": never;
  "PATCH /v1/speech-engine/{speech_engine_id}": ElevenLabsFullApiSchemaUpdateSpeechEngineRequest;
  "DELETE /v1/speech-engine/{speech_engine_id}": never;
  "POST /v1/convai/conversations/{conversation_id}/analysis/run": never;
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run": ElevenLabsFullApiSchemaRunConversationEvaluationsRequest;
  "GET /v1/convai/environment-variables": never;
  "POST /v1/convai/environment-variables": (ElevenLabsFullApiSchemaCreateStringEnvironmentVariableRequest | ElevenLabsFullApiSchemaCreateSecretEnvironmentVariableRequest | ElevenLabsFullApiSchemaCreateAuthConnectionEnvironmentVariableRequest);
  "GET /v1/convai/environment-variables/{env_var_id}": never;
  "PATCH /v1/convai/environment-variables/{env_var_id}": ElevenLabsFullApiSchemaUpdateEnvironmentVariableRequest;
  "POST /v1/music/plan": ElevenLabsFullApiSchemaBodyGenerateCompositionPlanV1MusicPlanPost;
  "POST /v1/music": ElevenLabsFullApiSchemaBodyComposeMusicV1MusicPost;
  "POST /v1/music/detailed": ElevenLabsFullApiSchemaBodyComposeMusicWithADetailedResponseV1MusicDetailedPost;
  "POST /v1/music/stream": ElevenLabsFullApiSchemaBodyStreamComposedMusicV1MusicStreamPost;
  "POST /v1/music/upload": ElevenLabsFullApiSchemaBodyUploadMusicV1MusicUploadPost;
  "POST /v1/music/stem-separation": ElevenLabsFullApiSchemaBodyStemSeparationV1MusicStemSeparationPost;
  "POST /v1/productions/orders": (ElevenLabsFullApiSchemaCreateOrderRequest | ElevenLabsFullApiSchemaJsonValue);
  "GET /v1/productions/orders": never;
  "GET /v1/productions/orders/{order_id}": never;
  "PATCH /v1/productions/orders/{order_id}": ElevenLabsFullApiSchemaBodyUpdateOrderV1ProductionsOrdersOrderIdPatch;
  "POST /v1/productions/orders/{order_id}/media": ElevenLabsFullApiSchemaBodyRegisterMediaV1ProductionsOrdersOrderIdMediaPost;
  "GET /v1/productions/orders/{order_id}/media/{media_id}": never;
  "POST /v1/productions/orders/{order_id}/items": ElevenLabsFullApiSchemaBodyUpsertOrderItemV1ProductionsOrdersOrderIdItemsPost;
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}": never;
  "POST /v1/productions/orders/{order_id}/submit": never;
  "GET /v1/productions/orders/{order_id}/deliverables": never;
  "GET /v1/productions/orders/languages/{order_item_kind}": never;
  "POST /v1/voices/pvc": ElevenLabsFullApiSchemaBodyCreatePVCVoiceV1VoicesPvcPost;
  "POST /v1/voices/pvc/{voice_id}": ElevenLabsFullApiSchemaBodyEditPVCVoiceV1VoicesPvcVoiceIdPost;
  "POST /v1/voices/pvc/{voice_id}/samples": ElevenLabsFullApiSchemaBodyAddSamplesToPVCVoiceV1VoicesPvcVoiceIdSamplesPost;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}": ElevenLabsFullApiSchemaBodyUpdatePVCVoiceSampleV1VoicesPvcVoiceIdSamplesSampleIdPost;
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}": never;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio": never;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform": never;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers": never;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers": never;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio": never;
  "GET /v1/voices/pvc/{voice_id}/captcha": never;
  "POST /v1/voices/pvc/{voice_id}/captcha": ElevenLabsFullApiSchemaBodyVerifyPVCVoiceCaptchaV1VoicesPvcVoiceIdCaptchaPost;
  "POST /v1/voices/pvc/{voice_id}/train": ElevenLabsFullApiSchemaBodyRunPVCTrainingV1VoicesPvcVoiceIdTrainPost;
  "POST /v1/voices/pvc/{voice_id}/verification": ElevenLabsFullApiSchemaBodyRequestManualVerificationV1VoicesPvcVoiceIdVerificationPost;
  "POST /v1/workspace/analytics/query/usage-by-product-over-time": ElevenLabsFullApiSchemaBodyGetWorkspaceUsageV1WorkspaceAnalyticsQueryUsageByProductOverTimePost;
  "POST /v1/workspace/analytics/requests": ElevenLabsFullApiSchemaBodyListAPIRequestsV1WorkspaceAnalyticsRequestsPost;
  "GET /docs": never;
}

export interface ElevenLabsFullApiOperationRequestBodyRequiredMap {
  "GET /v1/history": false;
  "GET /v1/history/{history_item_id}": false;
  "DELETE /v1/history/{history_item_id}": false;
  "GET /v1/history/{history_item_id}/audio": false;
  "POST /v1/history/download": true;
  "POST /v1/sound-generation": true;
  "POST /v1/audio-isolation": true;
  "GET /v1/audio-isolation/history": false;
  "DELETE /v1/audio-isolation/history/{history_item_id}": false;
  "POST /v1/audio-isolation/stream": true;
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}": false;
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio": false;
  "POST /v1/text-to-speech/{voice_id}": true;
  "POST /v1/text-to-speech/{voice_id}/with-timestamps": true;
  "POST /v1/text-to-speech/{voice_id}/stream": true;
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps": true;
  "POST /v1/text-to-dialogue": true;
  "POST /v1/text-to-dialogue/stream": true;
  "POST /v1/text-to-dialogue/stream/with-timestamps": true;
  "POST /v1/text-to-dialogue/with-timestamps": true;
  "POST /v1/speech-to-speech/{voice_id}": true;
  "POST /v1/speech-to-speech/{voice_id}/stream": true;
  "POST /v1/text-to-voice/create-previews": true;
  "POST /v1/text-to-voice": true;
  "POST /v1/text-to-voice/design": true;
  "POST /v1/text-to-voice/{voice_id}/remix": true;
  "GET /v1/text-to-voice/{generated_voice_id}/stream": false;
  "GET /v1/user": false;
  "GET /v1/user/subscription": false;
  "GET /v1/voices/settings/default": false;
  "GET /v1/voices/{voice_id}/settings": false;
  "POST /v1/voices/{voice_id}/settings/edit": true;
  "GET /v1/voices": false;
  "GET /v1/voices/{voice_id}": false;
  "DELETE /v1/voices/{voice_id}": false;
  "GET /v2/voices": false;
  "POST /v1/voices/add": true;
  "POST /v1/voices/{voice_id}/edit": true;
  "POST /v1/voices/add/{public_user_id}/{voice_id}": true;
  "POST /v1/studio/podcasts": true;
  "POST /v1/music/video-to-music": true;
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries": true;
  "GET /v1/studio/projects": false;
  "POST /v1/studio/projects": true;
  "POST /v1/studio/projects/{project_id}": true;
  "GET /v1/studio/projects/{project_id}": false;
  "DELETE /v1/studio/projects/{project_id}": false;
  "POST /v1/studio/projects/{project_id}/content": false;
  "POST /v1/studio/projects/{project_id}/convert": false;
  "GET /v1/studio/projects/{project_id}/snapshots": false;
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}": false;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream": false;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive": false;
  "GET /v1/studio/projects/{project_id}/chapters": false;
  "POST /v1/studio/projects/{project_id}/chapters": true;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}": false;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}": false;
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}": false;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert": false;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots": false;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}": false;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream": false;
  "GET /v1/studio/projects/{project_id}/muted-tracks": false;
  "GET /v1/dubbing/resource/{dubbing_id}": false;
  "POST /v1/dubbing/resource/{dubbing_id}/language": true;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment": true;
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}": true;
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments": true;
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}": false;
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe": true;
  "POST /v1/dubbing/resource/{dubbing_id}/translate": true;
  "POST /v1/dubbing/resource/{dubbing_id}/dub": true;
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}": false;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker": false;
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices": false;
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}": true;
  "GET /v1/dubbing": false;
  "POST /v1/dubbing": false;
  "GET /v1/dubbing/{dubbing_id}": false;
  "DELETE /v1/dubbing/{dubbing_id}": false;
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}": false;
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}": false;
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}": false;
  "GET /v1/models": false;
  "POST /v1/audio-native": true;
  "GET /v1/audio-native/{project_id}/settings": false;
  "POST /v1/audio-native/{project_id}/content": false;
  "POST /v1/audio-native/content": true;
  "GET /v1/shared-voices": false;
  "POST /v1/similar-voices": false;
  "GET /v1/usage/character-stats": false;
  "POST /v1/pronunciation-dictionaries/add-from-file": true;
  "POST /v1/pronunciation-dictionaries/add-from-rules": true;
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": false;
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": false;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules": true;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules": true;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules": true;
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download": false;
  "GET /v1/pronunciation-dictionaries": false;
  "POST /v1/workspaces/api-keys/disable": false;
  "GET /v1/service-accounts/{service_account_user_id}/api-keys": false;
  "POST /v1/service-accounts/{service_account_user_id}/api-keys": true;
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": false;
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": false;
  "GET /v1/workspace/audit-logs": false;
  "POST /v1/workspace/auth-connections": true;
  "GET /v1/workspace/auth-connections": false;
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}": true;
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}": false;
  "GET /v1/service-accounts": false;
  "GET /v1/workspace/groups": false;
  "GET /v1/workspace/groups/search": false;
  "POST /v1/workspace/groups/{group_id}/members/remove": true;
  "POST /v1/workspace/groups/{group_id}/members": true;
  "POST /v1/workspace/invites/add": true;
  "POST /v1/workspace/invites/add-bulk": true;
  "DELETE /v1/workspace/invites": true;
  "POST /v1/workspace/members": true;
  "GET /v1/workspace/resources/{resource_id}": false;
  "POST /v1/workspace/resources/{resource_id}/share": true;
  "POST /v1/workspace/resources/{resource_id}/unshare": true;
  "GET /v1/workspace/webhooks": false;
  "POST /v1/workspace/webhooks": true;
  "PATCH /v1/workspace/webhooks/{webhook_id}": true;
  "DELETE /v1/workspace/webhooks/{webhook_id}": false;
  "POST /v1/speech-to-text": true;
  "GET /v1/speech-to-text/transcripts/{transcription_id}": false;
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}": false;
  "POST /v1/single-use-token/{token_type}": false;
  "POST /v1/forced-alignment": true;
  "GET /v1/convai/conversation/get-signed-url": false;
  "GET /v1/convai/conversation/get_signed_url": false;
  "GET /v1/convai/conversation/token": false;
  "POST /v1/convai/twilio/outbound-call": true;
  "POST /v1/convai/twilio/register-call": true;
  "POST /v1/convai/exotel/outbound-call": true;
  "POST /v1/convai/whatsapp/outbound-call": true;
  "POST /v1/convai/whatsapp/outbound-message": true;
  "POST /v1/convai/agents/create": true;
  "GET /v1/convai/agents/summaries": false;
  "GET /v1/convai/agents/{agent_id}": false;
  "PATCH /v1/convai/agents/{agent_id}": false;
  "DELETE /v1/convai/agents/{agent_id}": false;
  "GET /v1/convai/agents/{agent_id}/widget": false;
  "GET /v1/convai/agents/{agent_id}/link": false;
  "POST /v1/convai/agents/{agent_id}/avatar": true;
  "GET /v1/convai/agents": false;
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size": false;
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate": true;
  "POST /v1/convai/agents/{agent_id}/duplicate": false;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation": true;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream": true;
  "POST /v1/convai/agent-testing/create": true;
  "POST /v1/convai/agent-testing/folders": true;
  "GET /v1/convai/agent-testing/folders/{folder_id}": false;
  "PATCH /v1/convai/agent-testing/folders/{folder_id}": true;
  "DELETE /v1/convai/agent-testing/folders/{folder_id}": false;
  "POST /v1/convai/agent-testing/bulk-move": true;
  "GET /v1/convai/agent-testing/{test_id}": false;
  "PUT /v1/convai/agent-testing/{test_id}": true;
  "DELETE /v1/convai/agent-testing/{test_id}": false;
  "POST /v1/convai/agent-testing/summaries": true;
  "GET /v1/convai/agent-testing": false;
  "GET /v1/convai/test-invocations": false;
  "POST /v1/convai/agents/{agent_id}/run-tests": true;
  "GET /v1/convai/test-invocations/{test_invocation_id}": false;
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit": true;
  "GET /v1/convai/conversations": false;
  "GET /v1/convai/users": false;
  "GET /v1/convai/conversations/{conversation_id}": false;
  "DELETE /v1/convai/conversations/{conversation_id}": false;
  "GET /v1/convai/conversations/{conversation_id}/sip-messages": false;
  "GET /v1/convai/conversations/{conversation_id}/audio": false;
  "POST /v1/convai/conversations/{conversation_id}/feedback": true;
  "GET /v1/convai/conversations/messages/text-search": false;
  "GET /v1/convai/conversations/messages/smart-search": false;
  "POST /v1/convai/conversations/{conversation_id}/tags": true;
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}": false;
  "GET /v1/convai/tags": false;
  "POST /v1/convai/tags": true;
  "GET /v1/convai/tags/{tag_id}": false;
  "PATCH /v1/convai/tags/{tag_id}": true;
  "DELETE /v1/convai/tags/{tag_id}": false;
  "POST /v1/convai/phone-numbers": true;
  "GET /v1/convai/phone-numbers": false;
  "GET /v1/convai/phone-numbers/{phone_number_id}": false;
  "DELETE /v1/convai/phone-numbers/{phone_number_id}": false;
  "PATCH /v1/convai/phone-numbers/{phone_number_id}": true;
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages": false;
  "POST /v1/convai/llm-usage/calculate": true;
  "GET /v1/convai/llm/list": false;
  "POST /v1/convai/conversations/{conversation_id}/files": true;
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}": false;
  "GET /v1/convai/analytics/live-count": false;
  "GET /v1/convai/knowledge-base/summaries": false;
  "POST /v1/convai/knowledge-base": false;
  "GET /v1/convai/knowledge-base": false;
  "POST /v1/convai/knowledge-base/url": true;
  "POST /v1/convai/knowledge-base/file": true;
  "POST /v1/convai/knowledge-base/text": true;
  "POST /v1/convai/knowledge-base/folder": true;
  "PATCH /v1/convai/knowledge-base/{documentation_id}": false;
  "GET /v1/convai/knowledge-base/{documentation_id}": false;
  "DELETE /v1/convai/knowledge-base/{documentation_id}": false;
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file": true;
  "POST /v1/convai/knowledge-base/rag-index": true;
  "GET /v1/convai/knowledge-base/rag-index": false;
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh": false;
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index": true;
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index": false;
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}": false;
  "GET /v1/convai/knowledge-base/search": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/content": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}": false;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks": false;
  "POST /v1/convai/knowledge-base/{document_id}/move": false;
  "POST /v1/convai/knowledge-base/bulk-move": true;
  "GET /v1/convai/agents/{agent_id}/topics": false;
  "POST /v1/convai/tools": true;
  "GET /v1/convai/tools": false;
  "GET /v1/convai/tools/{tool_id}": false;
  "PATCH /v1/convai/tools/{tool_id}": true;
  "DELETE /v1/convai/tools/{tool_id}": false;
  "GET /v1/convai/tools/{tool_id}/dependent-agents": false;
  "GET /v1/convai/tools/{tool_id}/executions": false;
  "GET /v1/convai/settings": false;
  "PATCH /v1/convai/settings": true;
  "GET /v1/convai/settings/dashboard": false;
  "PATCH /v1/convai/settings/dashboard": true;
  "POST /v1/convai/secrets": true;
  "GET /v1/convai/secrets": false;
  "GET /v1/convai/secrets/{secret_id}": false;
  "DELETE /v1/convai/secrets/{secret_id}": false;
  "PATCH /v1/convai/secrets/{secret_id}": true;
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}": false;
  "POST /v1/convai/batch-calling/submit": true;
  "GET /v1/convai/batch-calling/workspace": false;
  "GET /v1/convai/batch-calling/{batch_id}": false;
  "DELETE /v1/convai/batch-calling/{batch_id}": false;
  "POST /v1/convai/batch-calling/{batch_id}/cancel": false;
  "POST /v1/convai/batch-calling/{batch_id}/retry": false;
  "POST /v1/convai/sip-trunk/outbound-call": true;
  "POST /v1/convai/mcp-servers": true;
  "GET /v1/convai/mcp-servers": false;
  "GET /v1/convai/mcp-servers/{mcp_server_id}": false;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}": false;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}": true;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools": false;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy": true;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals": true;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}": false;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs": true;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": false;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": true;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": false;
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}": false;
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}": true;
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}": false;
  "GET /v1/convai/whatsapp-accounts": false;
  "POST /v1/convai/agents/{agent_id}/branches": true;
  "GET /v1/convai/agents/{agent_id}/branches": false;
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}": false;
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}": false;
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}": false;
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge": false;
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase": false;
  "POST /v1/convai/agents/{agent_id}/deployments": true;
  "POST /v1/convai/agents/{agent_id}/drafts": true;
  "DELETE /v1/convai/agents/{agent_id}/drafts": false;
  "GET /v1/speech-engine": false;
  "POST /v1/speech-engine": true;
  "GET /v1/speech-engine/{speech_engine_id}": false;
  "PATCH /v1/speech-engine/{speech_engine_id}": true;
  "DELETE /v1/speech-engine/{speech_engine_id}": false;
  "POST /v1/convai/conversations/{conversation_id}/analysis/run": false;
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run": true;
  "GET /v1/convai/environment-variables": false;
  "POST /v1/convai/environment-variables": true;
  "GET /v1/convai/environment-variables/{env_var_id}": false;
  "PATCH /v1/convai/environment-variables/{env_var_id}": true;
  "POST /v1/music/plan": true;
  "POST /v1/music": false;
  "POST /v1/music/detailed": false;
  "POST /v1/music/stream": false;
  "POST /v1/music/upload": true;
  "POST /v1/music/stem-separation": true;
  "POST /v1/productions/orders": false;
  "GET /v1/productions/orders": false;
  "GET /v1/productions/orders/{order_id}": false;
  "PATCH /v1/productions/orders/{order_id}": true;
  "POST /v1/productions/orders/{order_id}/media": true;
  "GET /v1/productions/orders/{order_id}/media/{media_id}": false;
  "POST /v1/productions/orders/{order_id}/items": true;
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}": false;
  "POST /v1/productions/orders/{order_id}/submit": false;
  "GET /v1/productions/orders/{order_id}/deliverables": false;
  "GET /v1/productions/orders/languages/{order_item_kind}": false;
  "POST /v1/voices/pvc": true;
  "POST /v1/voices/pvc/{voice_id}": false;
  "POST /v1/voices/pvc/{voice_id}/samples": true;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}": false;
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers": false;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers": false;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio": false;
  "GET /v1/voices/pvc/{voice_id}/captcha": false;
  "POST /v1/voices/pvc/{voice_id}/captcha": true;
  "POST /v1/voices/pvc/{voice_id}/train": false;
  "POST /v1/voices/pvc/{voice_id}/verification": true;
  "POST /v1/workspace/analytics/query/usage-by-product-over-time": true;
  "POST /v1/workspace/analytics/requests": false;
  "GET /docs": false;
}

export interface ElevenLabsFullApiOperationResponseMap {
  "GET /v1/history": ElevenLabsFullApiSchemaGetSpeechHistoryResponseModel;
  "GET /v1/history/{history_item_id}": ElevenLabsFullApiSchemaSpeechHistoryItemResponseModel;
  "DELETE /v1/history/{history_item_id}": ElevenLabsFullApiSchemaDeleteHistoryItemResponse;
  "GET /v1/history/{history_item_id}/audio": string;
  "POST /v1/history/download": string;
  "POST /v1/sound-generation": string;
  "POST /v1/audio-isolation": ElevenLabsFullApiSchemaHTTPValidationError;
  "GET /v1/audio-isolation/history": ElevenLabsFullApiSchemaGetAudioIsolationHistoryResponseModel;
  "DELETE /v1/audio-isolation/history/{history_item_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/audio-isolation/stream": ElevenLabsFullApiSchemaHTTPValidationError;
  "DELETE /v1/voices/{voice_id}/samples/{sample_id}": ElevenLabsFullApiSchemaDeleteSampleResponseModel;
  "GET /v1/voices/{voice_id}/samples/{sample_id}/audio": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/text-to-speech/{voice_id}": string;
  "POST /v1/text-to-speech/{voice_id}/with-timestamps": ElevenLabsFullApiSchemaAudioWithTimestampsResponseModel;
  "POST /v1/text-to-speech/{voice_id}/stream": string;
  "POST /v1/text-to-speech/{voice_id}/stream/with-timestamps": ElevenLabsFullApiSchemaStreamingAudioChunkWithTimestampsResponseModel;
  "POST /v1/text-to-dialogue": string;
  "POST /v1/text-to-dialogue/stream": string;
  "POST /v1/text-to-dialogue/stream/with-timestamps": ElevenLabsFullApiSchemaStreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel;
  "POST /v1/text-to-dialogue/with-timestamps": ElevenLabsFullApiSchemaAudioWithTimestampsAndVoiceSegmentsResponseModel;
  "POST /v1/speech-to-speech/{voice_id}": string;
  "POST /v1/speech-to-speech/{voice_id}/stream": string;
  "POST /v1/text-to-voice/create-previews": ElevenLabsFullApiSchemaVoicePreviewsResponseModel;
  "POST /v1/text-to-voice": ElevenLabsFullApiSchemaVoiceResponseModel;
  "POST /v1/text-to-voice/design": ElevenLabsFullApiSchemaVoicePreviewsResponseModel;
  "POST /v1/text-to-voice/{voice_id}/remix": ElevenLabsFullApiSchemaVoicePreviewsResponseModel;
  "GET /v1/text-to-voice/{generated_voice_id}/stream": string;
  "GET /v1/user": ElevenLabsFullApiSchemaUserResponseModel;
  "GET /v1/user/subscription": ElevenLabsFullApiSchemaExtendedSubscriptionResponseModel;
  "GET /v1/voices/settings/default": ElevenLabsFullApiSchemaVoiceSettingsResponseModel;
  "GET /v1/voices/{voice_id}/settings": ElevenLabsFullApiSchemaVoiceSettingsResponseModel;
  "POST /v1/voices/{voice_id}/settings/edit": ElevenLabsFullApiSchemaEditVoiceSettingsResponseModel;
  "GET /v1/voices": ElevenLabsFullApiSchemaGetVoicesResponseModel;
  "GET /v1/voices/{voice_id}": ElevenLabsFullApiSchemaVoiceResponseModel;
  "DELETE /v1/voices/{voice_id}": ElevenLabsFullApiSchemaDeleteVoiceResponseModel;
  "GET /v2/voices": ElevenLabsFullApiSchemaGetVoicesV2ResponseModel;
  "POST /v1/voices/add": ElevenLabsFullApiSchemaAddVoiceIVCResponseModel;
  "POST /v1/voices/{voice_id}/edit": ElevenLabsFullApiSchemaEditVoiceResponseModel;
  "POST /v1/voices/add/{public_user_id}/{voice_id}": ElevenLabsFullApiSchemaAddVoiceResponseModel;
  "POST /v1/studio/podcasts": ElevenLabsFullApiSchemaPodcastProjectResponseModel;
  "POST /v1/music/video-to-music": string;
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries": ElevenLabsFullApiSchemaCreatePronunciationDictionaryResponseModel;
  "GET /v1/studio/projects": ElevenLabsFullApiSchemaGetProjectsResponseModel;
  "POST /v1/studio/projects": ElevenLabsFullApiSchemaAddProjectResponseModel;
  "POST /v1/studio/projects/{project_id}": ElevenLabsFullApiSchemaEditProjectResponseModel;
  "GET /v1/studio/projects/{project_id}": ElevenLabsFullApiSchemaProjectExtendedResponseModel;
  "DELETE /v1/studio/projects/{project_id}": ElevenLabsFullApiSchemaDeleteProjectResponseModel;
  "POST /v1/studio/projects/{project_id}/content": ElevenLabsFullApiSchemaEditProjectResponseModel;
  "POST /v1/studio/projects/{project_id}/convert": ElevenLabsFullApiSchemaConvertProjectResponseModel;
  "GET /v1/studio/projects/{project_id}/snapshots": ElevenLabsFullApiSchemaProjectSnapshotsResponseModel;
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}": ElevenLabsFullApiSchemaProjectSnapshotExtendedResponseModel;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive": string;
  "GET /v1/studio/projects/{project_id}/chapters": ElevenLabsFullApiSchemaGetChaptersResponseModel;
  "POST /v1/studio/projects/{project_id}/chapters": ElevenLabsFullApiSchemaAddChapterResponseModel;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}": ElevenLabsFullApiSchemaChapterWithContentResponseModel;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}": ElevenLabsFullApiSchemaEditChapterResponseModel;
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}": ElevenLabsFullApiSchemaDeleteChapterResponseModel;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert": ElevenLabsFullApiSchemaConvertChapterResponseModel;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots": ElevenLabsFullApiSchemaChapterSnapshotsResponseModel;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}": ElevenLabsFullApiSchemaChapterSnapshotExtendedResponseModel;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream": string;
  "GET /v1/studio/projects/{project_id}/muted-tracks": ElevenLabsFullApiSchemaProjectMutedTracksResponseModel;
  "GET /v1/dubbing/resource/{dubbing_id}": ElevenLabsFullApiSchemaDubbingResource;
  "POST /v1/dubbing/resource/{dubbing_id}/language": ElevenLabsFullApiSchemaLanguageAddedResponse;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment": ElevenLabsFullApiSchemaSegmentCreateResponse;
  "PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}": ElevenLabsFullApiSchemaSegmentUpdateResponse;
  "POST /v1/dubbing/resource/{dubbing_id}/migrate-segments": ElevenLabsFullApiSchemaSegmentMigrationResponse;
  "DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}": ElevenLabsFullApiSchemaSegmentDeleteResponse;
  "POST /v1/dubbing/resource/{dubbing_id}/transcribe": ElevenLabsFullApiSchemaSegmentTranscriptionResponse;
  "POST /v1/dubbing/resource/{dubbing_id}/translate": ElevenLabsFullApiSchemaSegmentTranslationResponse;
  "POST /v1/dubbing/resource/{dubbing_id}/dub": ElevenLabsFullApiSchemaSegmentDubResponse;
  "PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}": ElevenLabsFullApiSchemaSpeakerUpdatedResponse;
  "POST /v1/dubbing/resource/{dubbing_id}/speaker": ElevenLabsFullApiSchemaSpeakerCreatedResponse;
  "GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices": ElevenLabsFullApiSchemaSimilarVoicesForSpeakerResponse;
  "POST /v1/dubbing/resource/{dubbing_id}/render/{language}": ElevenLabsFullApiSchemaDubbingRenderResponseModel;
  "GET /v1/dubbing": ElevenLabsFullApiSchemaDubbingMetadataPageResponseModel;
  "POST /v1/dubbing": ElevenLabsFullApiSchemaDoDubbingResponseModel;
  "GET /v1/dubbing/{dubbing_id}": ElevenLabsFullApiSchemaDubbingMetadataResponse;
  "DELETE /v1/dubbing/{dubbing_id}": ElevenLabsFullApiSchemaDeleteDubbingResponseModel;
  "GET /v1/dubbing/{dubbing_id}/audio/{language_code}": string;
  "GET /v1/dubbing/{dubbing_id}/transcript/{language_code}": (ElevenLabsFullApiSchemaDubbingTranscriptResponseModel | string);
  "GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}": ElevenLabsFullApiSchemaDubbingTranscriptsResponseModel;
  "GET /v1/models": ReadonlyArray<ElevenLabsFullApiSchemaModelResponseModel>;
  "POST /v1/audio-native": ElevenLabsFullApiSchemaAudioNativeCreateProjectResponseModel;
  "GET /v1/audio-native/{project_id}/settings": ElevenLabsFullApiSchemaGetAudioNativeProjectSettingsResponseModel;
  "POST /v1/audio-native/{project_id}/content": ElevenLabsFullApiSchemaAudioNativeEditContentResponseModel;
  "POST /v1/audio-native/content": ElevenLabsFullApiSchemaAudioNativeEditContentResponseModel;
  "GET /v1/shared-voices": ElevenLabsFullApiSchemaGetLibraryVoicesResponseModel;
  "POST /v1/similar-voices": ElevenLabsFullApiSchemaGetLibraryVoicesResponseModel;
  "GET /v1/usage/character-stats": ElevenLabsFullApiSchemaUsageCharactersResponseModel;
  "POST /v1/pronunciation-dictionaries/add-from-file": ElevenLabsFullApiSchemaAddPronunciationDictionaryResponseModel;
  "POST /v1/pronunciation-dictionaries/add-from-rules": ElevenLabsFullApiSchemaAddPronunciationDictionaryResponseModel;
  "PATCH /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": ElevenLabsFullApiSchemaGetPronunciationDictionaryMetadataResponseModel;
  "GET /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}": ElevenLabsFullApiSchemaGetPronunciationDictionaryWithRulesResponseModel;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/set-rules": ElevenLabsFullApiSchemaPronunciationDictionaryRulesResponseModel;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/add-rules": ElevenLabsFullApiSchemaPronunciationDictionaryRulesResponseModel;
  "POST /v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/remove-rules": ElevenLabsFullApiSchemaPronunciationDictionaryRulesResponseModel;
  "GET /v1/pronunciation-dictionaries/{dictionary_id}/{version_id}/download": string;
  "GET /v1/pronunciation-dictionaries": ElevenLabsFullApiSchemaGetPronunciationDictionariesMetadataResponseModel;
  "POST /v1/workspaces/api-keys/disable": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/service-accounts/{service_account_user_id}/api-keys": ElevenLabsFullApiSchemaWorkspaceApiKeyListResponseModel;
  "POST /v1/service-accounts/{service_account_user_id}/api-keys": ElevenLabsFullApiSchemaWorkspaceCreateApiKeyResponseModel;
  "PATCH /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": ElevenLabsFullApiSchemaJsonValue;
  "DELETE /v1/service-accounts/{service_account_user_id}/api-keys/{api_key_id}": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/workspace/audit-logs": ElevenLabsFullApiSchemaWorkspaceAuditLogsPageResponse;
  "POST /v1/workspace/auth-connections": (ElevenLabsFullApiSchemaOAuth2ClientCredsResponse | ElevenLabsFullApiSchemaBasicAuthResponse | ElevenLabsFullApiSchemaBearerAuthResponse | ElevenLabsFullApiSchemaOAuth2JWTResponse | ElevenLabsFullApiSchemaPrivateKeyJWTResponse | ElevenLabsFullApiSchemaMTLSAuthResponse | ElevenLabsFullApiSchemaCustomHeaderAuthResponse | ElevenLabsFullApiSchemaApiIntegrationOAuth2AuthCodeResponse | ElevenLabsFullApiSchemaApiIntegrationOAuth2CustomAppResponse | ElevenLabsFullApiSchemaWhatsAppAuthResponse | ElevenLabsFullApiSchemaSlackBotAuthResponse | ElevenLabsFullApiSchemaUrlSecretAuthResponse);
  "GET /v1/workspace/auth-connections": ElevenLabsFullApiSchemaListAuthConnectionsResponse;
  "PATCH /v1/workspace/auth-connections/{auth_connection_id}": (ElevenLabsFullApiSchemaOAuth2ClientCredsResponse | ElevenLabsFullApiSchemaBasicAuthResponse | ElevenLabsFullApiSchemaBearerAuthResponse | ElevenLabsFullApiSchemaOAuth2JWTResponse | ElevenLabsFullApiSchemaPrivateKeyJWTResponse | ElevenLabsFullApiSchemaMTLSAuthResponse | ElevenLabsFullApiSchemaCustomHeaderAuthResponse | ElevenLabsFullApiSchemaApiIntegrationOAuth2AuthCodeResponse | ElevenLabsFullApiSchemaApiIntegrationOAuth2CustomAppResponse | ElevenLabsFullApiSchemaWhatsAppAuthResponse | ElevenLabsFullApiSchemaSlackBotAuthResponse | ElevenLabsFullApiSchemaUrlSecretAuthResponse);
  "DELETE /v1/workspace/auth-connections/{auth_connection_id}": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/service-accounts": ElevenLabsFullApiSchemaWorkspaceServiceAccountListResponseModel;
  "GET /v1/workspace/groups": {
  readonly [key: string]: ElevenLabsFullApiSchemaWorkspaceGroupResponseModel | undefined;
};
  "GET /v1/workspace/groups/search": ReadonlyArray<ElevenLabsFullApiSchemaWorkspaceGroupByNameResponseModel>;
  "POST /v1/workspace/groups/{group_id}/members/remove": ElevenLabsFullApiSchemaDeleteWorkspaceGroupMemberResponseModel;
  "POST /v1/workspace/groups/{group_id}/members": ElevenLabsFullApiSchemaAddWorkspaceGroupMemberResponseModel;
  "POST /v1/workspace/invites/add": ElevenLabsFullApiSchemaAddWorkspaceInviteResponseModel;
  "POST /v1/workspace/invites/add-bulk": ElevenLabsFullApiSchemaAddWorkspaceInviteResponseModel;
  "DELETE /v1/workspace/invites": ElevenLabsFullApiSchemaDeleteWorkspaceInviteResponseModel;
  "POST /v1/workspace/members": ElevenLabsFullApiSchemaUpdateWorkspaceMemberResponseModel;
  "GET /v1/workspace/resources/{resource_id}": ElevenLabsFullApiSchemaResourceMetadataResponseModel;
  "POST /v1/workspace/resources/{resource_id}/share": ElevenLabsFullApiSchemaJsonValue;
  "POST /v1/workspace/resources/{resource_id}/unshare": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/workspace/webhooks": ElevenLabsFullApiSchemaWorkspaceWebhookListResponseModel;
  "POST /v1/workspace/webhooks": ElevenLabsFullApiSchemaWorkspaceCreateWebhookResponseModel;
  "PATCH /v1/workspace/webhooks/{webhook_id}": ElevenLabsFullApiSchemaPatchWorkspaceWebhookResponseModel;
  "DELETE /v1/workspace/webhooks/{webhook_id}": ElevenLabsFullApiSchemaDeleteWorkspaceWebhookResponseModel;
  "POST /v1/speech-to-text": (ElevenLabsFullApiSchemaSpeechToTextChunkResponseModel | ElevenLabsFullApiSchemaMultichannelSpeechToTextResponseModel);
  "GET /v1/speech-to-text/transcripts/{transcription_id}": (ElevenLabsFullApiSchemaSpeechToTextChunkResponseModel | ElevenLabsFullApiSchemaMultichannelSpeechToTextResponseModel);
  "DELETE /v1/speech-to-text/transcripts/{transcription_id}": ElevenLabsFullApiSchemaJsonValue;
  "POST /v1/single-use-token/{token_type}": ElevenLabsFullApiSchemaSingleUseTokenResponseModel;
  "POST /v1/forced-alignment": ElevenLabsFullApiSchemaForcedAlignmentResponseModel;
  "GET /v1/convai/conversation/get-signed-url": ElevenLabsFullApiSchemaConversationSignedUrlResponseModel;
  "GET /v1/convai/conversation/get_signed_url": ElevenLabsFullApiSchemaConversationSignedUrlResponseModel;
  "GET /v1/convai/conversation/token": ElevenLabsFullApiSchemaTokenResponseModel;
  "POST /v1/convai/twilio/outbound-call": ElevenLabsFullApiSchemaTwilioOutboundCallResponse;
  "POST /v1/convai/twilio/register-call": string;
  "POST /v1/convai/exotel/outbound-call": ElevenLabsFullApiSchemaExotelOutboundCallResponse;
  "POST /v1/convai/whatsapp/outbound-call": ElevenLabsFullApiSchemaWhatsAppOutboundCallResponse;
  "POST /v1/convai/whatsapp/outbound-message": ElevenLabsFullApiSchemaWhatsAppOutboundMessageResponse;
  "POST /v1/convai/agents/create": ElevenLabsFullApiSchemaCreateAgentResponseModel;
  "GET /v1/convai/agents/summaries": {
  readonly [key: string]: (ElevenLabsFullApiSchemaAgentSummaryBatchSuccessfulResponseModel | ElevenLabsFullApiSchemaBatchFailureResponseModel) | undefined;
};
  "GET /v1/convai/agents/{agent_id}": ElevenLabsFullApiSchemaGetAgentResponseModel;
  "PATCH /v1/convai/agents/{agent_id}": ElevenLabsFullApiSchemaGetAgentResponseModel;
  "DELETE /v1/convai/agents/{agent_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "GET /v1/convai/agents/{agent_id}/widget": ElevenLabsFullApiSchemaGetAgentEmbedResponseModel;
  "GET /v1/convai/agents/{agent_id}/link": ElevenLabsFullApiSchemaGetAgentLinkResponseModel;
  "POST /v1/convai/agents/{agent_id}/avatar": ElevenLabsFullApiSchemaPostAgentAvatarResponseModel;
  "GET /v1/convai/agents": ElevenLabsFullApiSchemaGetAgentsPageResponseModel;
  "GET /v1/convai/agent/{agent_id}/knowledge-base/size": ElevenLabsFullApiSchemaGetAgentKnowledgebaseSizeResponseModel;
  "POST /v1/convai/agent/{agent_id}/llm-usage/calculate": ElevenLabsFullApiSchemaLLMUsageCalculatorResponseModel;
  "POST /v1/convai/agents/{agent_id}/duplicate": ElevenLabsFullApiSchemaCreateAgentResponseModel;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation": ElevenLabsFullApiSchemaAgentSimulatedChatTestResponseModel;
  "POST /v1/convai/agents/{agent_id}/simulate-conversation/stream": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/convai/agent-testing/create": ElevenLabsFullApiSchemaCreateAgentTestResponseModel;
  "POST /v1/convai/agent-testing/folders": ElevenLabsFullApiSchemaCreateAgentTestFolderResponseModel;
  "GET /v1/convai/agent-testing/folders/{folder_id}": ElevenLabsFullApiSchemaGetAgentTestFolderResponseModel;
  "PATCH /v1/convai/agent-testing/folders/{folder_id}": ElevenLabsFullApiSchemaGetAgentTestFolderResponseModel;
  "DELETE /v1/convai/agent-testing/folders/{folder_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/convai/agent-testing/bulk-move": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/convai/agent-testing/{test_id}": (ElevenLabsFullApiSchemaGetResponseUnitTestResponseModel | ElevenLabsFullApiSchemaGetToolCallUnitTestResponseModel | ElevenLabsFullApiSchemaGetSimulationTestResponseModel);
  "PUT /v1/convai/agent-testing/{test_id}": (ElevenLabsFullApiSchemaGetResponseUnitTestResponseModel | ElevenLabsFullApiSchemaGetToolCallUnitTestResponseModel | ElevenLabsFullApiSchemaGetSimulationTestResponseModel);
  "DELETE /v1/convai/agent-testing/{test_id}": ElevenLabsFullApiSchemaJsonValue;
  "POST /v1/convai/agent-testing/summaries": ElevenLabsFullApiSchemaGetTestsSummariesByIdsResponseModel;
  "GET /v1/convai/agent-testing": ElevenLabsFullApiSchemaGetTestsPageResponseModel;
  "GET /v1/convai/test-invocations": ElevenLabsFullApiSchemaGetTestInvocationsPageResponseModel;
  "POST /v1/convai/agents/{agent_id}/run-tests": ElevenLabsFullApiSchemaGetTestSuiteInvocationResponseModel;
  "GET /v1/convai/test-invocations/{test_invocation_id}": ElevenLabsFullApiSchemaGetTestSuiteInvocationResponseModel;
  "POST /v1/convai/test-invocations/{test_invocation_id}/resubmit": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/convai/conversations": ElevenLabsFullApiSchemaGetConversationsPageResponseModel;
  "GET /v1/convai/users": ElevenLabsFullApiSchemaGetConversationUsersPageResponseModel;
  "GET /v1/convai/conversations/{conversation_id}": ElevenLabsFullApiSchemaGetConversationResponseModel;
  "DELETE /v1/convai/conversations/{conversation_id}": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/convai/conversations/{conversation_id}/sip-messages": ElevenLabsFullApiSchemaGetSIPLogMessagesResponse;
  "GET /v1/convai/conversations/{conversation_id}/audio": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/convai/conversations/{conversation_id}/feedback": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/convai/conversations/messages/text-search": ElevenLabsFullApiSchemaMessagesSearchResponse;
  "GET /v1/convai/conversations/messages/smart-search": ElevenLabsFullApiSchemaMessagesSearchResponse;
  "POST /v1/convai/conversations/{conversation_id}/tags": ElevenLabsFullApiSchemaHTTPValidationError;
  "DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "GET /v1/convai/tags": ElevenLabsFullApiSchemaGetConversationTagsPageResponseModel;
  "POST /v1/convai/tags": ElevenLabsFullApiSchemaConversationTagResponseModel;
  "GET /v1/convai/tags/{tag_id}": ElevenLabsFullApiSchemaConversationTagResponseModel;
  "PATCH /v1/convai/tags/{tag_id}": ElevenLabsFullApiSchemaConversationTagResponseModel;
  "DELETE /v1/convai/tags/{tag_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/convai/phone-numbers": ElevenLabsFullApiSchemaCreatePhoneNumberResponseModel;
  "GET /v1/convai/phone-numbers": ReadonlyArray<(ElevenLabsFullApiSchemaGetPhoneNumberTwilioResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberExotelResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberSIPTrunkResponseModel)>;
  "GET /v1/convai/phone-numbers/{phone_number_id}": (ElevenLabsFullApiSchemaGetPhoneNumberTwilioResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberExotelResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberSIPTrunkResponseModel);
  "DELETE /v1/convai/phone-numbers/{phone_number_id}": ElevenLabsFullApiSchemaJsonValue;
  "PATCH /v1/convai/phone-numbers/{phone_number_id}": (ElevenLabsFullApiSchemaGetPhoneNumberTwilioResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberExotelResponseModel | ElevenLabsFullApiSchemaGetPhoneNumberSIPTrunkResponseModel);
  "GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages": ElevenLabsFullApiSchemaGetSIPLogMessagesResponse;
  "POST /v1/convai/llm-usage/calculate": ElevenLabsFullApiSchemaLLMUsageCalculatorResponseModel;
  "GET /v1/convai/llm/list": ElevenLabsFullApiSchemaLLMListResponseModelInput;
  "POST /v1/convai/conversations/{conversation_id}/files": ElevenLabsFullApiSchemaConvAIFileUploadResponseModel;
  "DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}": ElevenLabsFullApiSchemaConvAIFileUploadResponseModel;
  "GET /v1/convai/analytics/live-count": ElevenLabsFullApiSchemaGetLiveCountResponse;
  "GET /v1/convai/knowledge-base/summaries": {
  readonly [key: string]: (ElevenLabsFullApiSchemaKnowledgeBaseSummaryBatchSuccessfulResponseModel | ElevenLabsFullApiSchemaBatchFailureResponseModel) | undefined;
};
  "POST /v1/convai/knowledge-base": ElevenLabsFullApiSchemaAddKnowledgeBaseResponseModel;
  "GET /v1/convai/knowledge-base": ElevenLabsFullApiSchemaGetKnowledgeBaseListResponseModel;
  "POST /v1/convai/knowledge-base/url": ElevenLabsFullApiSchemaAddKnowledgeBaseResponseModel;
  "POST /v1/convai/knowledge-base/file": ElevenLabsFullApiSchemaAddKnowledgeBaseResponseModel;
  "POST /v1/convai/knowledge-base/text": ElevenLabsFullApiSchemaAddKnowledgeBaseResponseModel;
  "POST /v1/convai/knowledge-base/folder": ElevenLabsFullApiSchemaAddKnowledgeBaseResponseModel;
  "PATCH /v1/convai/knowledge-base/{documentation_id}": (ElevenLabsFullApiSchemaGetKnowledgeBaseURLResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFileResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseTextResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFolderResponseModel);
  "GET /v1/convai/knowledge-base/{documentation_id}": (ElevenLabsFullApiSchemaGetKnowledgeBaseURLResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFileResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseTextResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFolderResponseModel);
  "DELETE /v1/convai/knowledge-base/{documentation_id}": ElevenLabsFullApiSchemaJsonValue;
  "PATCH /v1/convai/knowledge-base/{documentation_id}/update-file": (ElevenLabsFullApiSchemaGetKnowledgeBaseURLResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFileResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseTextResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFolderResponseModel);
  "POST /v1/convai/knowledge-base/rag-index": {
  readonly [key: string]: (ElevenLabsFullApiSchemaRAGIndexBatchSuccessfulResponseModel | ElevenLabsFullApiSchemaBatchFailureResponseModel) | undefined;
};
  "GET /v1/convai/knowledge-base/rag-index": ElevenLabsFullApiSchemaRAGIndexOverviewResponseModel;
  "POST /v1/convai/knowledge-base/{documentation_id}/refresh": (ElevenLabsFullApiSchemaGetKnowledgeBaseURLResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFileResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseTextResponseModel | ElevenLabsFullApiSchemaGetKnowledgeBaseFolderResponseModel);
  "POST /v1/convai/knowledge-base/{documentation_id}/rag-index": ElevenLabsFullApiSchemaRAGDocumentIndexResponseModel;
  "GET /v1/convai/knowledge-base/{documentation_id}/rag-index": ElevenLabsFullApiSchemaRAGDocumentIndexesResponseModel;
  "DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}": ElevenLabsFullApiSchemaRAGDocumentIndexResponseModel;
  "GET /v1/convai/knowledge-base/search": ElevenLabsFullApiSchemaKnowledgeBaseContentSearchResponseModel;
  "GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents": ElevenLabsFullApiSchemaGetKnowledgeBaseDependentAgentsResponseModel;
  "GET /v1/convai/knowledge-base/{documentation_id}/content": string;
  "GET /v1/convai/knowledge-base/{documentation_id}/source-file-url": ElevenLabsFullApiSchemaKnowledgeBaseSourceFileUrlResponseModel;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}": ElevenLabsFullApiSchemaKnowledgeBaseDocumentChunkResponseModel;
  "GET /v1/convai/knowledge-base/{documentation_id}/chunks": ElevenLabsFullApiSchemaKnowledgeBaseDocumentChunksResponseModel;
  "POST /v1/convai/knowledge-base/{document_id}/move": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/convai/knowledge-base/bulk-move": ElevenLabsFullApiSchemaHTTPValidationError;
  "GET /v1/convai/agents/{agent_id}/topics": ElevenLabsFullApiSchemaGetAgentTopicsResponseModel;
  "POST /v1/convai/tools": ElevenLabsFullApiSchemaToolResponseModel;
  "GET /v1/convai/tools": ElevenLabsFullApiSchemaToolsResponseModel;
  "GET /v1/convai/tools/{tool_id}": ElevenLabsFullApiSchemaToolResponseModel;
  "PATCH /v1/convai/tools/{tool_id}": ElevenLabsFullApiSchemaToolResponseModel;
  "DELETE /v1/convai/tools/{tool_id}": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/convai/tools/{tool_id}/dependent-agents": ElevenLabsFullApiSchemaGetToolDependentAgentsResponseModel;
  "GET /v1/convai/tools/{tool_id}/executions": ElevenLabsFullApiSchemaGetToolExecutionsPageResponseModel;
  "GET /v1/convai/settings": ElevenLabsFullApiSchemaGetConvAISettingsResponseModel;
  "PATCH /v1/convai/settings": ElevenLabsFullApiSchemaGetConvAISettingsResponseModel;
  "GET /v1/convai/settings/dashboard": ElevenLabsFullApiSchemaGetConvAIDashboardSettingsResponseModel;
  "PATCH /v1/convai/settings/dashboard": ElevenLabsFullApiSchemaGetConvAIDashboardSettingsResponseModel;
  "POST /v1/convai/secrets": ElevenLabsFullApiSchemaPostWorkspaceSecretResponseModel;
  "GET /v1/convai/secrets": ElevenLabsFullApiSchemaGetWorkspaceSecretsResponseModel;
  "GET /v1/convai/secrets/{secret_id}": ElevenLabsFullApiSchemaConvAIWorkspaceStoredSecretConfig;
  "DELETE /v1/convai/secrets/{secret_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "PATCH /v1/convai/secrets/{secret_id}": ElevenLabsFullApiSchemaPostWorkspaceSecretResponseModel;
  "GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}": ElevenLabsFullApiSchemaGetSecretDependenciesResponseModel;
  "POST /v1/convai/batch-calling/submit": ElevenLabsFullApiSchemaBatchCallResponse;
  "GET /v1/convai/batch-calling/workspace": ElevenLabsFullApiSchemaWorkspaceBatchCallsResponse;
  "GET /v1/convai/batch-calling/{batch_id}": ElevenLabsFullApiSchemaBatchCallDetailedResponse;
  "DELETE /v1/convai/batch-calling/{batch_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/convai/batch-calling/{batch_id}/cancel": ElevenLabsFullApiSchemaBatchCallResponse;
  "POST /v1/convai/batch-calling/{batch_id}/retry": ElevenLabsFullApiSchemaBatchCallResponse;
  "POST /v1/convai/sip-trunk/outbound-call": ElevenLabsFullApiSchemaSIPTrunkOutboundCallResponse;
  "POST /v1/convai/mcp-servers": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "GET /v1/convai/mcp-servers": ElevenLabsFullApiSchemaMCPServersResponseModel;
  "GET /v1/convai/mcp-servers/{mcp_server_id}": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}": ElevenLabsFullApiSchemaJsonValue;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tools": ElevenLabsFullApiSchemaListMCPToolsResponseModel;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": ElevenLabsFullApiSchemaMCPToolConfigOverrideOutput;
  "PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}": ElevenLabsFullApiSchemaMCPServerResponseModel;
  "GET /v1/convai/whatsapp-accounts/{phone_number_id}": ElevenLabsFullApiSchemaGetWhatsAppAccountResponse;
  "PATCH /v1/convai/whatsapp-accounts/{phone_number_id}": ElevenLabsFullApiSchemaJsonValue;
  "DELETE /v1/convai/whatsapp-accounts/{phone_number_id}": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/convai/whatsapp-accounts": ElevenLabsFullApiSchemaListWhatsAppAccountsResponse;
  "POST /v1/convai/agents/{agent_id}/branches": ElevenLabsFullApiSchemaCreateAgentBranchResponseModel;
  "GET /v1/convai/agents/{agent_id}/branches": ElevenLabsFullApiSchemaListResponseAgentBranchSummary;
  "GET /v1/convai/agents/{agent_id}/branches/{branch_id}": ElevenLabsFullApiSchemaAgentBranchResponse;
  "PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}": ElevenLabsFullApiSchemaAgentBranchResponse;
  "GET /v1/convai/agents/{agent_id}/versions/{version_id}": ElevenLabsFullApiSchemaAgentVersionMetadata;
  "POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge": ElevenLabsFullApiSchemaJsonValue;
  "POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase": ElevenLabsFullApiSchemaJsonValue;
  "POST /v1/convai/agents/{agent_id}/deployments": ElevenLabsFullApiSchemaAgentDeploymentResponse;
  "POST /v1/convai/agents/{agent_id}/drafts": ElevenLabsFullApiSchemaJsonValue;
  "DELETE /v1/convai/agents/{agent_id}/drafts": ElevenLabsFullApiSchemaJsonValue;
  "GET /v1/speech-engine": ElevenLabsFullApiSchemaListSpeechEnginesResponse;
  "POST /v1/speech-engine": ElevenLabsFullApiSchemaSpeechEngineResponse;
  "GET /v1/speech-engine/{speech_engine_id}": ElevenLabsFullApiSchemaSpeechEngineResponse;
  "PATCH /v1/speech-engine/{speech_engine_id}": ElevenLabsFullApiSchemaSpeechEngineResponse;
  "DELETE /v1/speech-engine/{speech_engine_id}": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/convai/conversations/{conversation_id}/analysis/run": ElevenLabsFullApiSchemaGetConversationResponseModel;
  "POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run": ElevenLabsFullApiSchemaGetConversationResponseModel;
  "GET /v1/convai/environment-variables": ElevenLabsFullApiSchemaEnvironmentVariablesListResponse;
  "POST /v1/convai/environment-variables": ElevenLabsFullApiSchemaEnvironmentVariableResponse;
  "GET /v1/convai/environment-variables/{env_var_id}": ElevenLabsFullApiSchemaEnvironmentVariableResponse;
  "PATCH /v1/convai/environment-variables/{env_var_id}": ElevenLabsFullApiSchemaEnvironmentVariableResponse;
  "POST /v1/music/plan": (ElevenLabsFullApiSchemaMusicPrompt | ElevenLabsFullApiSchemaCompositionPlan);
  "POST /v1/music": string;
  "POST /v1/music/detailed": string;
  "POST /v1/music/stream": string;
  "POST /v1/music/upload": ElevenLabsFullApiSchemaMusicUploadResponse;
  "POST /v1/music/stem-separation": string;
  "POST /v1/productions/orders": ElevenLabsFullApiSchemaCreateOrderResponse;
  "GET /v1/productions/orders": ElevenLabsFullApiSchemaListOrdersResponse;
  "GET /v1/productions/orders/{order_id}": ElevenLabsFullApiSchemaOrderResponse;
  "PATCH /v1/productions/orders/{order_id}": ElevenLabsFullApiSchemaUpdateOrderResponse;
  "POST /v1/productions/orders/{order_id}/media": ElevenLabsFullApiSchemaRegisterMediaResponse;
  "GET /v1/productions/orders/{order_id}/media/{media_id}": ElevenLabsFullApiSchemaOrderMediaResponse;
  "POST /v1/productions/orders/{order_id}/items": ElevenLabsFullApiSchemaUpsertOrderItemResponse;
  "DELETE /v1/productions/orders/{order_id}/items/{item_id}": ElevenLabsFullApiSchemaRemoveOrderItemResponse;
  "POST /v1/productions/orders/{order_id}/submit": ElevenLabsFullApiSchemaSubmitOrderResponse;
  "GET /v1/productions/orders/{order_id}/deliverables": ElevenLabsFullApiSchemaOrderDeliverablesResponse;
  "GET /v1/productions/orders/languages/{order_item_kind}": ElevenLabsFullApiSchemaLanguagesResponse;
  "POST /v1/voices/pvc": ElevenLabsFullApiSchemaAddVoiceResponseModel;
  "POST /v1/voices/pvc/{voice_id}": ElevenLabsFullApiSchemaAddVoiceResponseModel;
  "POST /v1/voices/pvc/{voice_id}/samples": ReadonlyArray<ElevenLabsFullApiSchemaSampleResponseModel>;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}": ElevenLabsFullApiSchemaAddVoiceResponseModel;
  "DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}": ElevenLabsFullApiSchemaDeleteVoiceSampleResponseModel;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio": ElevenLabsFullApiSchemaVoiceSamplePreviewResponseModel;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform": ElevenLabsFullApiSchemaVoiceSampleVisualWaveformResponseModel;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers": ElevenLabsFullApiSchemaSpeakerSeparationResponseModel;
  "POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers": ElevenLabsFullApiSchemaStartSpeakerSeparationResponseModel;
  "GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio": ElevenLabsFullApiSchemaSpeakerAudioResponseModel;
  "GET /v1/voices/pvc/{voice_id}/captcha": ElevenLabsFullApiSchemaHTTPValidationError;
  "POST /v1/voices/pvc/{voice_id}/captcha": ElevenLabsFullApiSchemaVerifyPVCVoiceCaptchaResponseModel;
  "POST /v1/voices/pvc/{voice_id}/train": ElevenLabsFullApiSchemaStartPVCVoiceTrainingResponseModel;
  "POST /v1/voices/pvc/{voice_id}/verification": ElevenLabsFullApiSchemaRequestPVCManualVerificationResponseModel;
  "POST /v1/workspace/analytics/query/usage-by-product-over-time": ElevenLabsFullApiSchemaWorkspaceAnalyticsQueryResponseModel;
  "POST /v1/workspace/analytics/requests": ElevenLabsFullApiSchemaWorkspaceAnalyticsQueryResponseModel;
  "GET /docs": ElevenLabsFullApiSchemaJsonValue;
}
