// Generated provider schema DTOs for GorgiasFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type GorgiasFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type GorgiasFullApiSchemaJsonValue = GorgiasFullApiSchemaJsonPrimitive | readonly GorgiasFullApiSchemaJsonValue[] | { readonly [key: string]: GorgiasFullApiSchemaJsonValue | undefined };

export type GorgiasFullApiSchemaAccount = {
  created_datetime?: string;
  deactivated_datetime?: string | null;
  domain?: string;
  settings?: ReadonlyArray<{
  id?: number;
  data?: GorgiasFullApiSchemaJsonValue;
  type: string;
}>;
  status?: {};
};

export type GorgiasFullApiSchemaAccountSettingSatisfactionSurveysTyped = {
  id?: number;
  data: {
  send_survey_for_chat?: boolean;
  send_survey_for_email?: boolean;
  send_survey_for_contact_form?: boolean;
  send_survey_for_help_center?: boolean;
  survey_email_html?: string;
  survey_email_text?: string;
  survey_interval?: number;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAutoMergeTyped = {
  id?: number;
  data: {
  tickets: {
  enabled: boolean;
  merging_window_days: number;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAutoSplitTyped = {
  id?: number;
  data: {
  email: {
  enabled: boolean;
  split_after_days?: number;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingBusinessHoursTyped = {
  id?: number;
  data: {
  business_hours?: ReadonlyArray<{
  days?: string;
  from_time?: string;
  to_time?: string;
}>;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingTicketAssignmentTyped = {
  id?: number;
  data: {
  assignment_channels?: ReadonlyArray<"google-business-messages" | "tiktok-shop" | "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-mention" | "instagram-direct-message" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "yotpo-review" | "whatsapp" | "custom-chat">;
  auto_assign_to_teams?: boolean;
  unassign_on_reply?: boolean;
  unassign_on_user_unavailability?: ReadonlyArray<"chat">;
  can_exceed_max_agent_capacity?: boolean;
  auto_assign_ticket_to_responding_agent?: boolean;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingViewsOrderingTyped = {
  id?: number;
  data: {
  views: {};
  view_sections: {};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAccessTyped = {
  id?: number;
  data: {
  signup_mode: "invite" | "allowed-domains";
  allowed_domains?: ReadonlyArray<string>;
  google_sso_enabled?: boolean;
  office365_sso_enabled?: boolean;
  two_fa_enforced_datetime?: string | null;
  skip_2fa_after_sso_datetime?: string | null;
  sso_enforced_datetime?: string | null;
  custom_sso_providers?: {
  readonly [key: string]: {
  name: string;
  client_id: string;
  client_secret: string;
  server_metadata_url: string;
} | undefined;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingViewsVisibilityTyped = {
  id?: number;
  data: {
  hidden_views: ReadonlyArray<number>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentsTableConfigTyped = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentsAvailabilityTableConfigTyped = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingChannelsTableConfigTyped = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingProductInsightsTableConfigTyped = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingInTicketSuggestionTyped = {
  id?: number;
  data: {
  is_demo_hidden: boolean | null;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentCostsTyped = {
  id?: number;
  data: {
  agent_cost_type: "yearly" | "hourly";
  agent_cost_per_ticket: number;
  agent_ticket_per_hour?: number | null;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingLimitsTyped = {
  id?: number;
  data: {
  max_integrations?: number;
  max_active_rules?: number;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingDefaultIntegrationTyped = {
  id?: number;
  data: {
  readonly [key: string]: GorgiasFullApiSchemaJsonValue | undefined;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingSatisfactionSurveysTyped2 = {
  id?: number;
  data: {
  send_survey_for_chat?: boolean;
  send_survey_for_email?: boolean;
  send_survey_for_contact_form?: boolean;
  send_survey_for_help_center?: boolean;
  survey_email_html?: string;
  survey_email_text?: string;
  survey_interval?: number;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAutoMergeTyped2 = {
  id?: number;
  data: {
  tickets: {
  enabled: boolean;
  merging_window_days: number;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAutoSplitTyped2 = {
  id?: number;
  data: {
  email: {
  enabled: boolean;
  split_after_days?: number;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingBusinessHoursTyped2 = {
  id?: number;
  data: {
  business_hours?: ReadonlyArray<{
  days?: string;
  from_time?: string;
  to_time?: string;
}>;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingTicketAssignmentTyped2 = {
  id?: number;
  data: {
  assignment_channels?: ReadonlyArray<"google-business-messages" | "tiktok-shop" | "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-mention" | "instagram-direct-message" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "yotpo-review" | "whatsapp" | "custom-chat">;
  auto_assign_to_teams?: boolean;
  unassign_on_reply?: boolean;
  unassign_on_user_unavailability?: ReadonlyArray<"chat">;
  can_exceed_max_agent_capacity?: boolean;
  auto_assign_ticket_to_responding_agent?: boolean;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingViewsOrderingTyped2 = {
  id?: number;
  data: {
  views: {};
  view_sections: {};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAccessTyped2 = {
  id?: number;
  data: {
  signup_mode: "invite" | "allowed-domains";
  allowed_domains?: ReadonlyArray<string>;
  google_sso_enabled?: boolean;
  office365_sso_enabled?: boolean;
  two_fa_enforced_datetime?: string | null;
  skip_2fa_after_sso_datetime?: string | null;
  sso_enforced_datetime?: string | null;
  custom_sso_providers?: {
  readonly [key: string]: {
  name: string;
  client_id: string;
  client_secret: string;
  server_metadata_url: string;
} | undefined;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingViewsVisibilityTyped2 = {
  id?: number;
  data: {
  hidden_views: ReadonlyArray<number>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentsTableConfigTyped2 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentsAvailabilityTableConfigTyped2 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingChannelsTableConfigTyped2 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingProductInsightsTableConfigTyped2 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingInTicketSuggestionTyped2 = {
  id?: number;
  data: {
  is_demo_hidden: boolean | null;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentCostsTyped2 = {
  id?: number;
  data: {
  agent_cost_type: "yearly" | "hourly";
  agent_cost_per_ticket: number;
  agent_ticket_per_hour?: number | null;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingLimitsTyped2 = {
  id?: number;
  data: {
  max_integrations?: number;
  max_active_rules?: number;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingDefaultIntegrationTyped2 = {
  id?: number;
  data: {
  readonly [key: string]: GorgiasFullApiSchemaJsonValue | undefined;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingSatisfactionSurveysTyped3 = {
  id?: number;
  data: {
  send_survey_for_chat?: boolean;
  send_survey_for_email?: boolean;
  send_survey_for_contact_form?: boolean;
  send_survey_for_help_center?: boolean;
  survey_email_html?: string;
  survey_email_text?: string;
  survey_interval?: number;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAutoMergeTyped3 = {
  id?: number;
  data: {
  tickets: {
  enabled: boolean;
  merging_window_days: number;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAutoSplitTyped3 = {
  id?: number;
  data: {
  email: {
  enabled: boolean;
  split_after_days?: number;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingBusinessHoursTyped3 = {
  id?: number;
  data: {
  business_hours?: ReadonlyArray<{
  days?: string;
  from_time?: string;
  to_time?: string;
}>;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingTicketAssignmentTyped3 = {
  id?: number;
  data: {
  assignment_channels?: ReadonlyArray<"google-business-messages" | "tiktok-shop" | "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-mention" | "instagram-direct-message" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "yotpo-review" | "whatsapp" | "custom-chat">;
  auto_assign_to_teams?: boolean;
  unassign_on_reply?: boolean;
  unassign_on_user_unavailability?: ReadonlyArray<"chat">;
  can_exceed_max_agent_capacity?: boolean;
  auto_assign_ticket_to_responding_agent?: boolean;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingViewsOrderingTyped3 = {
  id?: number;
  data: {
  views: {};
  view_sections: {};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAccessTyped3 = {
  id?: number;
  data: {
  signup_mode: "invite" | "allowed-domains";
  allowed_domains?: ReadonlyArray<string>;
  google_sso_enabled?: boolean;
  office365_sso_enabled?: boolean;
  two_fa_enforced_datetime?: string | null;
  skip_2fa_after_sso_datetime?: string | null;
  sso_enforced_datetime?: string | null;
  custom_sso_providers?: {
  readonly [key: string]: {
  name: string;
  client_id: string;
  client_secret: string;
  server_metadata_url: string;
} | undefined;
};
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingViewsVisibilityTyped3 = {
  id?: number;
  data: {
  hidden_views: ReadonlyArray<number>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentsTableConfigTyped3 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentsAvailabilityTableConfigTyped3 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingChannelsTableConfigTyped3 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingProductInsightsTableConfigTyped3 = {
  id?: number;
  data: {
  active_view: string;
  views: ReadonlyArray<{
  id: string;
  name: string;
  metrics: ReadonlyArray<{
  id: string;
  visibility: boolean | null;
}>;
  rows?: GorgiasFullApiSchemaJsonValue;
}>;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingInTicketSuggestionTyped3 = {
  id?: number;
  data: {
  is_demo_hidden: boolean | null;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingAgentCostsTyped3 = {
  id?: number;
  data: {
  agent_cost_type: "yearly" | "hourly";
  agent_cost_per_ticket: number;
  agent_ticket_per_hour?: number | null;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingLimitsTyped3 = {
  id?: number;
  data: {
  max_integrations?: number;
  max_active_rules?: number;
};
  type: string;
};

export type GorgiasFullApiSchemaAccountSettingDefaultIntegrationTyped3 = {
  id?: number;
  data: {
  readonly [key: string]: GorgiasFullApiSchemaJsonValue | undefined;
};
  type: string;
};

export type GorgiasFullApiSchemaCustomField = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaObjectType;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType | GorgiasFullApiSchemaManagedCustomerFieldType);
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition | GorgiasFullApiSchemaNumberDataTypeDefinition | GorgiasFullApiSchemaBooleanDataTypeDefinition);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaCursorPaginationMeta = {
  prev_cursor: string;
  next_cursor: string;
  total_resources: number;
};

export type GorgiasFullApiSchemaCreateCustomField = {
  external_id?: string;
  object_type: GorgiasFullApiSchemaObjectType2;
  label: string;
  description?: string;
  priority?: number;
  required?: boolean;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType2 | GorgiasFullApiSchemaManagedCustomerFieldType2);
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition2 | GorgiasFullApiSchemaNumberDataTypeDefinition2 | GorgiasFullApiSchemaBooleanDataTypeDefinition2);
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaCustomField2 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaObjectType2;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType2 | GorgiasFullApiSchemaManagedCustomerFieldType2);
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition2 | GorgiasFullApiSchemaNumberDataTypeDefinition2 | GorgiasFullApiSchemaBooleanDataTypeDefinition2);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaUpdateCustomFieldList = ReadonlyArray<GorgiasFullApiSchemaUpdateCustomFieldItem>;

export type GorgiasFullApiSchemaCustomField3 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaObjectType3;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType3 | GorgiasFullApiSchemaManagedCustomerFieldType3);
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition3 | GorgiasFullApiSchemaNumberDataTypeDefinition3 | GorgiasFullApiSchemaBooleanDataTypeDefinition3);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaCustomField4 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaObjectType4;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType4 | GorgiasFullApiSchemaManagedCustomerFieldType4);
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition4 | GorgiasFullApiSchemaNumberDataTypeDefinition4 | GorgiasFullApiSchemaBooleanDataTypeDefinition4);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaUpdateCustomField = {
  external_id?: string;
  object_type?: GorgiasFullApiSchemaObjectType5;
  label?: string;
  description?: string;
  priority?: number;
  required?: boolean;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType5 | GorgiasFullApiSchemaManagedCustomerFieldType5);
  definition?: (GorgiasFullApiSchemaTextDataTypeDefinition5 | GorgiasFullApiSchemaNumberDataTypeDefinition5 | GorgiasFullApiSchemaBooleanDataTypeDefinition5);
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaCustomField5 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaObjectType5;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType5 | GorgiasFullApiSchemaManagedCustomerFieldType5);
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition5 | GorgiasFullApiSchemaNumberDataTypeDefinition5 | GorgiasFullApiSchemaBooleanDataTypeDefinition5);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaCustomer = {
  id?: number;
  channels?: ReadonlyArray<{
  id?: number;
}>;
  created_datetime?: string | null;
  email?: string | null;
  external_id?: string | null;
  firstname?: string;
  integrations?: {};
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  lastname?: string;
  name?: string | null;
  note?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
  updated_datetime?: string | null;
};

export type GorgiasFullApiSchemaCustomerCustomFieldWithValue = {
  field: GorgiasFullApiSchemaCustomerCustomField;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaCustomerCustomFieldValue = {
  id: number;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaCustomerCustomFieldWithValue2 = {
  field: GorgiasFullApiSchemaCustomerCustomField2;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaCustomerCustomFieldWithValue3 = {
  field: GorgiasFullApiSchemaCustomerCustomField3;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaCustomer2 = {
  id?: number;
  channels?: ReadonlyArray<{
  id?: number;
}>;
  created_datetime?: string | null;
  email?: string | null;
  external_id?: string | null;
  firstname?: string;
  integrations?: {};
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  lastname?: string;
  name?: string | null;
  note?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
  updated_datetime?: string | null;
};

export type GorgiasFullApiSchemaEvent = {
  id?: number;
  context?: string | null;
  created_datetime?: string;
  data?: {};
  object_id?: number;
  object_type?: "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";
  type?: string;
  user_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaEvent2 = {
  id?: number;
  context?: string | null;
  created_datetime?: string;
  data?: {};
  object_id?: number;
  object_type?: "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";
  type?: string;
  user_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaIntegration = {
  id?: number;
  created_datetime?: string | null;
  deactivated_datetime?: string | null;
  description?: string | null;
  http?: {
  form?:  | null;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  request_content_type?: "application/json" | "application/x-www-form-urlencoded";
  response_content_type?: "application/json";
  triggers?: {
  "ticket-created"?: boolean;
  "ticket-updated"?: boolean;
  "ticket-message-created"?: boolean;
  "ticket-self-unsnoozed"?: boolean;
  "ticket-message-failed"?: boolean;
  "ticket-assignment-updated"?: boolean;
  "ticket-status-updated"?: boolean;
  "ticket-handed-over"?: boolean;
};
  url: string;
  oauth2?:  | null;
};
  name: string;
  type?: "http";
  updated_datetime?: string | null;
  user?: {
  id?: number;
};
  uri?: string;
  application_id?: string | null;
  managed?: boolean;
  business_hours_id?: number | null;
};

export type GorgiasFullApiSchemaIntegration2 = {
  id?: number;
  created_datetime?: string | null;
  deactivated_datetime?: string | null;
  description?: string | null;
  http?: {
  form?:  | null;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  request_content_type?: "application/json" | "application/x-www-form-urlencoded";
  response_content_type?: "application/json";
  triggers?: {
  "ticket-created"?: boolean;
  "ticket-updated"?: boolean;
  "ticket-message-created"?: boolean;
  "ticket-self-unsnoozed"?: boolean;
  "ticket-message-failed"?: boolean;
  "ticket-assignment-updated"?: boolean;
  "ticket-status-updated"?: boolean;
  "ticket-handed-over"?: boolean;
};
  url: string;
  oauth2?:  | null;
};
  name: string;
  type?: "http";
  updated_datetime?: string | null;
  user?: {
  id?: number;
};
  uri?: string;
  application_id?: string | null;
  managed?: boolean;
  business_hours_id?: number | null;
};

export type GorgiasFullApiSchemaIntegration3 = {
  id?: number;
  created_datetime?: string | null;
  deactivated_datetime?: string | null;
  description?: string | null;
  http?: {
  form?:  | null;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  request_content_type?: "application/json" | "application/x-www-form-urlencoded";
  response_content_type?: "application/json";
  triggers?: {
  "ticket-created"?: boolean;
  "ticket-updated"?: boolean;
  "ticket-message-created"?: boolean;
  "ticket-self-unsnoozed"?: boolean;
  "ticket-message-failed"?: boolean;
  "ticket-assignment-updated"?: boolean;
  "ticket-status-updated"?: boolean;
  "ticket-handed-over"?: boolean;
};
  url: string;
  oauth2?:  | null;
};
  name: string;
  type?: "http";
  updated_datetime?: string | null;
  user?: {
  id?: number;
};
  uri?: string;
  application_id?: string | null;
  managed?: boolean;
  business_hours_id?: number | null;
};

export type GorgiasFullApiSchemaIntegration4 = {
  id?: number;
  created_datetime?: string | null;
  deactivated_datetime?: string | null;
  description?: string | null;
  http?: {
  form?:  | null;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  request_content_type?: "application/json" | "application/x-www-form-urlencoded";
  response_content_type?: "application/json";
  triggers?: {
  "ticket-created"?: boolean;
  "ticket-updated"?: boolean;
  "ticket-message-created"?: boolean;
  "ticket-self-unsnoozed"?: boolean;
  "ticket-message-failed"?: boolean;
  "ticket-assignment-updated"?: boolean;
  "ticket-status-updated"?: boolean;
  "ticket-handed-over"?: boolean;
};
  url: string;
  oauth2?:  | null;
};
  name: string;
  type?: "http";
  updated_datetime?: string | null;
  user?: {
  id?: number;
};
  uri?: string;
  application_id?: string | null;
  managed?: boolean;
  business_hours_id?: number | null;
};

export type GorgiasFullApiSchemaJob = {
  id?: number;
  cancel_requested_datetime?: string | null;
  cancelled_datetime?: string | null;
  created_datetime?: string | null;
  ended_datetime?: string | null;
  failed_datetime?: string | null;
  info?: {};
  locked_datetime?: string | null;
  meta?: {} | null;
  params?: {
  apply_and_close?: boolean;
  end_datetime?: string | null;
  macro_id?: number;
  start_datetime?: string | null;
  ticket_ids?: ReadonlyArray<number>;
  url?: string;
  updates?: {};
  view?: {};
  view_id?: number;
  context?: {};
};
  scheduled_datetime?: string | null;
  started_datetime?: string | null;
  status?: "cancel_requested" | "canceled" | "done" | "errored" | "fatal_errored" | "pending" | "running" | "scheduled";
  type?: "applyMacro" | "deleteTicket" | "exportTicket" | "importMacro" | "exportMacro" | "updateTicket" | "exportTicketDrilldown" | "exportConvertCampaignSalesDrilldown";
  user_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaJob2 = {
  id?: number;
  cancel_requested_datetime?: string | null;
  cancelled_datetime?: string | null;
  created_datetime?: string | null;
  ended_datetime?: string | null;
  failed_datetime?: string | null;
  info?: {};
  locked_datetime?: string | null;
  meta?: {} | null;
  params?: {
  apply_and_close?: boolean;
  end_datetime?: string | null;
  macro_id?: number;
  start_datetime?: string | null;
  ticket_ids?: ReadonlyArray<number>;
  url?: string;
  updates?: {};
  view?: {};
  view_id?: number;
  context?: {};
};
  scheduled_datetime?: string | null;
  started_datetime?: string | null;
  status?: "cancel_requested" | "canceled" | "done" | "errored" | "fatal_errored" | "pending" | "running" | "scheduled";
  type?: "applyMacro" | "deleteTicket" | "exportTicket" | "importMacro" | "exportMacro" | "updateTicket" | "exportTicketDrilldown" | "exportConvertCampaignSalesDrilldown";
  user_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaJob3 = {
  id?: number;
  cancel_requested_datetime?: string | null;
  cancelled_datetime?: string | null;
  created_datetime?: string | null;
  ended_datetime?: string | null;
  failed_datetime?: string | null;
  info?: {};
  locked_datetime?: string | null;
  meta?: {} | null;
  params?: {
  apply_and_close?: boolean;
  end_datetime?: string | null;
  macro_id?: number;
  start_datetime?: string | null;
  ticket_ids?: ReadonlyArray<number>;
  url?: string;
  updates?: {};
  view?: {};
  view_id?: number;
  context?: {};
};
  scheduled_datetime?: string | null;
  started_datetime?: string | null;
  status?: "cancel_requested" | "canceled" | "done" | "errored" | "fatal_errored" | "pending" | "running" | "scheduled";
  type?: "applyMacro" | "deleteTicket" | "exportTicket" | "importMacro" | "exportMacro" | "updateTicket" | "exportTicketDrilldown" | "exportConvertCampaignSalesDrilldown";
  user_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaJob4 = {
  id?: number;
  cancel_requested_datetime?: string | null;
  cancelled_datetime?: string | null;
  created_datetime?: string | null;
  ended_datetime?: string | null;
  failed_datetime?: string | null;
  info?: {};
  locked_datetime?: string | null;
  meta?: {} | null;
  params?: {
  apply_and_close?: boolean;
  end_datetime?: string | null;
  macro_id?: number;
  start_datetime?: string | null;
  ticket_ids?: ReadonlyArray<number>;
  url?: string;
  updates?: {};
  view?: {};
  view_id?: number;
  context?: {};
};
  scheduled_datetime?: string | null;
  started_datetime?: string | null;
  status?: "cancel_requested" | "canceled" | "done" | "errored" | "fatal_errored" | "pending" | "running" | "scheduled";
  type?: "applyMacro" | "deleteTicket" | "exportTicket" | "importMacro" | "exportMacro" | "updateTicket" | "exportTicketDrilldown" | "exportConvertCampaignSalesDrilldown";
  user_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaMacro = {
  id?: number;
  external_id?: string | null;
  name?: string;
  intent?: "discount/request" | "exchange/request" | "exchange/status" | "feedback" | "order/damaged" | "order/cancel" | "order/change" | "order/wrong" | "other/no_reply" | "other/question" | "other/thanks" | "product/recommendation" | "product/question" | "refund/request" | "refund/status" | "return/request" | "return/status" | "shipping/change" | "shipping/delivery-issue" | "shipping/policy" | "shipping/status" | "stock/request" | "subscription/cancel" | "subscription/change";
  language?: string | null;
  usage?: number;
  actions?: ReadonlyArray<GorgiasFullApiSchemaMacroAction3>;
  created_datetime?: string | null;
  updated_datetime?: string | null;
  archived_datetime?: string | null;
  uri?: string;
};

export type GorgiasFullApiSchemaMacroAction = {
  arguments: {};
  description?: string | null;
  name: string;
  title: string;
  type?: "system" | "user";
};

export type GorgiasFullApiSchemaMacro2 = {
  id?: number;
  external_id?: string | null;
  name?: string;
  intent?: "discount/request" | "exchange/request" | "exchange/status" | "feedback" | "order/damaged" | "order/cancel" | "order/change" | "order/wrong" | "other/no_reply" | "other/question" | "other/thanks" | "product/recommendation" | "product/question" | "refund/request" | "refund/status" | "return/request" | "return/status" | "shipping/change" | "shipping/delivery-issue" | "shipping/policy" | "shipping/status" | "stock/request" | "subscription/cancel" | "subscription/change";
  language?: string | null;
  usage?: number;
  actions?: ReadonlyArray<GorgiasFullApiSchemaMacroAction>;
  created_datetime?: string | null;
  updated_datetime?: string | null;
  archived_datetime?: string | null;
  uri?: string;
};

export type GorgiasFullApiSchemaMacro3 = {
  id?: number;
  external_id?: string | null;
  name?: string;
  intent?: "discount/request" | "exchange/request" | "exchange/status" | "feedback" | "order/damaged" | "order/cancel" | "order/change" | "order/wrong" | "other/no_reply" | "other/question" | "other/thanks" | "product/recommendation" | "product/question" | "refund/request" | "refund/status" | "return/request" | "return/status" | "shipping/change" | "shipping/delivery-issue" | "shipping/policy" | "shipping/status" | "stock/request" | "subscription/cancel" | "subscription/change";
  language?: string | null;
  usage?: number;
  actions?: ReadonlyArray<GorgiasFullApiSchemaMacroAction4>;
  created_datetime?: string | null;
  updated_datetime?: string | null;
  archived_datetime?: string | null;
  uri?: string;
};

export type GorgiasFullApiSchemaMacroAction2 = {
  arguments: {};
  description?: string | null;
  name: string;
  title: string;
  type?: "system" | "user";
};

export type GorgiasFullApiSchemaMacro4 = {
  id?: number;
  external_id?: string | null;
  name?: string;
  intent?: "discount/request" | "exchange/request" | "exchange/status" | "feedback" | "order/damaged" | "order/cancel" | "order/change" | "order/wrong" | "other/no_reply" | "other/question" | "other/thanks" | "product/recommendation" | "product/question" | "refund/request" | "refund/status" | "return/request" | "return/status" | "shipping/change" | "shipping/delivery-issue" | "shipping/policy" | "shipping/status" | "stock/request" | "subscription/cancel" | "subscription/change";
  language?: string | null;
  usage?: number;
  actions?: ReadonlyArray<GorgiasFullApiSchemaMacroAction2>;
  created_datetime?: string | null;
  updated_datetime?: string | null;
  archived_datetime?: string | null;
  uri?: string;
};

export type GorgiasFullApiSchemaArchiveMacrosAsUser = {
  ids: ReadonlyArray<number>;
};

export type GorgiasFullApiSchemaArchiveMacrosAsUserResult = {
  data: ReadonlyArray<GorgiasFullApiSchemaArchiveMacroAsUserResult>;
};

export type GorgiasFullApiSchemaUnarchiveMacrosAsUser = {
  ids: ReadonlyArray<number>;
};

export type GorgiasFullApiSchemaUnarchiveMacrosAsUserResult = {
  data: ReadonlyArray<GorgiasFullApiSchemaUnArchiveMacroAsUserResult>;
};

export type GorgiasFullApiSchemaTicketMessage = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug | string);
  via: GorgiasFullApiSchemaTicketVia;
  source: GorgiasFullApiSchemaTicketMessageSource;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo;
};

export type GorgiasFullApiSchemaCursorPaginationMeta2 = {
  prev_cursor: string;
  next_cursor: string;
  total_resources: number;
};

export type GorgiasFullApiSchemaMetricCardStatusEnum = "published" | "deprecated";

export type GorgiasFullApiSchemaMetricCardIncludeEnum = "deprecated";

export type GorgiasFullApiSchemaMetricCardList = {
  data: ReadonlyArray<GorgiasFullApiSchemaMetricCard2>;
};

export type GorgiasFullApiSchemaMetricCard = {
  slug: GorgiasFullApiSchemaMetricCardSlugEnum;
  category: string;
  title: string;
  status: GorgiasFullApiSchemaMetricCardStatusEnum2;
  definition_revised_at: string;
  public: GorgiasFullApiSchemaMetricCardPublic;
  api?: GorgiasFullApiSchemaMetricCardApiMapping;
  aliases: ReadonlyArray<string>;
  related: ReadonlyArray<GorgiasFullApiSchemaMetricCardRef>;
  replaces: ReadonlyArray<GorgiasFullApiSchemaMetricCardRef>;
  used_in_reports: ReadonlyArray<string>;
};

export type GorgiasFullApiSchemaVoiceCallEvent = {
  id?: number;
  type?: "phone-call-answered" | "phone-call-ringing" | "phone-call-dial-failed" | "phone-call-agent-dialed" | "incoming-phone-call" | "outgoing-phone-call" | "completed-phone-call" | "call-recording" | "missed-phone-call" | "declined-phone-call" | "call-ending-triggered" | "voicemail-recording" | "phone-call-conversation-started" | "phone-call-forwarded-to-external-number" | "phone-call-forwarded-to-gorgias-number" | "phone-call-forwarded" | "message-played" | "outgoing-phone-call-connected" | "child-call-not_answered" | "phone-call-transfer-initiated" | "phone-call-transfer-failed" | "phone-call-enqueued" | "phone-call-enqueue-skipped" | "phone-call-dequeued" | "phone-call-wrap-up-started" | "phone-call-wrap-up-ended" | "ivr-menu-presented" | "ivr-option-selected" | "phone-call-deflected-to-sms" | "customer-field-conditional-evaluated" | "monitoring-started" | "monitoring-ended" | "monitoring-updated";
  account_id?: number;
  call_id?: number;
  user_id?: number;
  customer_id?: number;
  created_datetime?: string;
  meta?: {};
};

export type GorgiasFullApiSchemaVoiceCallEvent2 = {
  id?: number;
  type?: "phone-call-answered" | "phone-call-ringing" | "phone-call-dial-failed" | "phone-call-agent-dialed" | "incoming-phone-call" | "outgoing-phone-call" | "completed-phone-call" | "call-recording" | "missed-phone-call" | "declined-phone-call" | "call-ending-triggered" | "voicemail-recording" | "phone-call-conversation-started" | "phone-call-forwarded-to-external-number" | "phone-call-forwarded-to-gorgias-number" | "phone-call-forwarded" | "message-played" | "outgoing-phone-call-connected" | "child-call-not_answered" | "phone-call-transfer-initiated" | "phone-call-transfer-failed" | "phone-call-enqueued" | "phone-call-enqueue-skipped" | "phone-call-dequeued" | "phone-call-wrap-up-started" | "phone-call-wrap-up-ended" | "ivr-menu-presented" | "ivr-option-selected" | "phone-call-deflected-to-sms" | "customer-field-conditional-evaluated" | "monitoring-started" | "monitoring-ended" | "monitoring-updated";
  account_id?: number;
  call_id?: number;
  user_id?: number;
  customer_id?: number;
  created_datetime?: string;
  meta?: {};
};

export type GorgiasFullApiSchemaVoiceCallRecording = {
  id?: number;
  call_id?: number;
  external_id?: string;
  url?: string;
  duration?: number;
  type?: "call-recording" | "voicemail";
  created_datetime?: string;
  deleted_datetime?: string;
  deleted_by_user_id?: number;
  error_code?: "RECORDING_IS_PRIVATE";
  transcription_status?: "requested" | "completed" | "failed" | "recording_too_short" | "recording_too_long" | null | "low_quality_transcription";
};

export type GorgiasFullApiSchemaVoiceCallRecording2 = {
  id?: number;
  call_id?: number;
  external_id?: string;
  url?: string;
  duration?: number;
  type?: "call-recording" | "voicemail";
  created_datetime?: string;
  deleted_datetime?: string;
  deleted_by_user_id?: number;
  error_code?: "RECORDING_IS_PRIVATE";
  transcription_status?: "requested" | "completed" | "failed" | "recording_too_short" | "recording_too_long" | null | "low_quality_transcription";
};

export type GorgiasFullApiSchemaVoiceCall = {
  id: number;
  integration_id: number;
  ticket_id?: number;
  phone_number_id?: number;
  external_id: string;
  provider: string;
  status: "answered" | "connected" | "in-progress" | "initiated" | "queued" | "ringing" | "ending" | "busy" | "canceled" | "completed" | "failed" | "no-answer" | "missed";
  direction: "inbound" | "outbound";
  phone_number_source?: string;
  country_source?: string;
  phone_number_destination?: string;
  country_destination?: string;
  duration?: number;
  started_datetime?: string;
  created_datetime: string;
  updated_datetime?: string;
  initiated_by_agent_id?: number;
  last_answered_by_agent_id?: number;
  customer_id?: number;
  last_rang_agent_id?: number;
  has_voicemail?: boolean;
  has_call_recording?: boolean;
  summaries?: ReadonlyArray<{
  id: number;
  recording_id: number;
  summary: string;
  created_datetime: string;
}>;
  termination_status?: "answered" | "cancelled" | "missed" | "abandoned" | "callback-requested";
  queue_id?: number;
  status_in_queue?: string;
  answered_by_external_number?: string;
  answered_by_external_customer_id?: number;
  monitoring_status?: "listening" | "whispering" | "none";
  last_monitoring_agent_id?: number | null;
};

export type GorgiasFullApiSchemaVoiceCall2 = {
  id: number;
  integration_id: number;
  ticket_id?: number;
  phone_number_id?: number;
  external_id: string;
  provider: string;
  status: "answered" | "connected" | "in-progress" | "initiated" | "queued" | "ringing" | "ending" | "busy" | "canceled" | "completed" | "failed" | "no-answer" | "missed";
  direction: "inbound" | "outbound";
  phone_number_source?: string;
  country_source?: string;
  phone_number_destination?: string;
  country_destination?: string;
  duration?: number;
  started_datetime?: string;
  created_datetime: string;
  updated_datetime?: string;
  initiated_by_agent_id?: number;
  last_answered_by_agent_id?: number;
  customer_id?: number;
  last_rang_agent_id?: number;
  has_voicemail?: boolean;
  has_call_recording?: boolean;
  summaries?: ReadonlyArray<{
  id: number;
  recording_id: number;
  summary: string;
  created_datetime: string;
}>;
  termination_status?: "answered" | "cancelled" | "missed" | "abandoned" | "callback-requested";
  queue_id?: number;
  status_in_queue?: string;
  answered_by_external_number?: string;
  answered_by_external_customer_id?: number;
  monitoring_status?: "listening" | "whispering" | "none";
  last_monitoring_agent_id?: number | null;
};

export type GorgiasFullApiSchemaReportingStats = {
  query: (GorgiasFullApiSchemaTicketsClosedQuery | GorgiasFullApiSchemaTicketsCreatedQuery | GorgiasFullApiSchemaTicketsOpenQuery | GorgiasFullApiSchemaTicketsRepliedQuery | GorgiasFullApiSchemaOneTouchTicketsQuery | GorgiasFullApiSchemaZeroTouchTicketsQuery | GorgiasFullApiSchemaSatisfactionSurveysQuery | GorgiasFullApiSchemaResolutionTimeQuery | GorgiasFullApiSchemaMessagesSentQuery | GorgiasFullApiSchemaFirstResponseTimeQuery | GorgiasFullApiSchemaHumanFirstResponseTimeQuery | GorgiasFullApiSchemaResponseTimeQuery | GorgiasFullApiSchemaMessagesPerTicketQuery | GorgiasFullApiSchemaTicketHandleTimeQuery | GorgiasFullApiSchemaOnlineTimeQuery | GorgiasFullApiSchemaTagsQuery | GorgiasFullApiSchemaTicketFieldsQuery | GorgiasFullApiSchemaAutoQAQuery | GorgiasFullApiSchemaMessagesReceivedQuery | GorgiasFullApiSchemaWorkloadTicketsQuery | GorgiasFullApiSchemaVoiceCallsQuery | GorgiasFullApiSchemaVoiceAgentEventsQuery | GorgiasFullApiSchemaTicketSlaQuery | GorgiasFullApiSchemaKnowledgeInsightsQuery | GorgiasFullApiSchemaVoiceCallsSummaryQuery | GorgiasFullApiSchemaAiSalesAgentOrdersPerformanceQuery | GorgiasFullApiSchemaAiSalesAgentDiscountsQuery | GorgiasFullApiSchemaAiSalesAgentActivityQuery | GorgiasFullApiSchemaOverallAutomationRateQuery | GorgiasFullApiSchemaAIAgentAutomatedInteractionsQuery | GorgiasFullApiSchemaOverallAutomatedInteractionsQuery | GorgiasFullApiSchemaHandoverInteractionsQuery | GorgiasFullApiSchemaAiSalesAgentBuyThroughRateQuery | GorgiasFullApiSchemaAiSalesAgentConversionRateQuery | GorgiasFullApiSchemaAiAgentCoverageRateQuery | GorgiasFullApiSchemaAiAgentSuccessRateQuery | GorgiasFullApiSchemaOverallTimeSavedByAgentQuery | GorgiasFullApiSchemaTimeSavedByAiAgentQuery | GorgiasFullApiSchemaAiAgentTicketFieldsQuery | GorgiasFullApiSchemaOverallDecreaseInResolutionTimeQuery | GorgiasFullApiSchemaAIAgentDecreaseInResolutionTimeQuery | GorgiasFullApiSchemaFlowDatasetQuery | GorgiasFullApiSchemaAiAgentCsatQuery | GorgiasFullApiSchemaOverallDecreaseInFirstResponseTimeQuery | GorgiasFullApiSchemaAIAgentDecreaseInFirstResponseTimeQuery);
};

export type GorgiasFullApiSchemaAnalyticsReporting = {
  object: string;
  uri: string;
  data: ReadonlyArray<{
  readonly [key: string]: (boolean | string | number | ReadonlyArray<GorgiasFullApiSchemaJsonValue> | {}) | undefined;
}>;
  meta: GorgiasFullApiSchemaAnalyticsReportingMeta;
};

export type GorgiasFullApiSchemaRule = {
  id?: number;
  code?: string;
  code_ast?: {};
  created_datetime?: string;
  deactivated_datetime?: string | null;
  description?: string | null;
  event_types?: "ticket-created" | "ticket-updated" | "ticket-message-created" | "ticket-assigned" | "ticket-self-unsnoozed" | "satisfaction-survey-responded";
  name?: string;
  priority?: number;
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaRule2 = {
  id?: number;
  code?: string;
  code_ast?: {};
  created_datetime?: string;
  deactivated_datetime?: string | null;
  description?: string | null;
  event_types?: "ticket-created" | "ticket-updated" | "ticket-message-created" | "ticket-assigned" | "ticket-self-unsnoozed" | "satisfaction-survey-responded";
  name?: string;
  priority?: number;
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaRule3 = {
  id?: number;
  code?: string;
  code_ast?: {};
  created_datetime?: string;
  deactivated_datetime?: string | null;
  description?: string | null;
  event_types?: "ticket-created" | "ticket-updated" | "ticket-message-created" | "ticket-assigned" | "ticket-self-unsnoozed" | "satisfaction-survey-responded";
  name?: string;
  priority?: number;
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaRule4 = {
  id?: number;
  code?: string;
  code_ast?: {};
  created_datetime?: string;
  deactivated_datetime?: string | null;
  description?: string | null;
  event_types?: "ticket-created" | "ticket-updated" | "ticket-message-created" | "ticket-assigned" | "ticket-self-unsnoozed" | "satisfaction-survey-responded";
  name?: string;
  priority?: number;
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaRule5 = {
  id?: number;
  code?: string;
  code_ast?: {};
  created_datetime?: string;
  deactivated_datetime?: string | null;
  description?: string | null;
  event_types?: "ticket-created" | "ticket-updated" | "ticket-message-created" | "ticket-assigned" | "ticket-self-unsnoozed" | "satisfaction-survey-responded";
  name?: string;
  priority?: number;
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaSatisfactionSurvey = {
  id?: number;
  body_text?: string | null;
  created_datetime?: string | null;
  customer_id?: number;
  meta?: {} | null;
  score?: number | null;
  scored_datetime?: string | null;
  sent_datetime?: string | null;
  should_send_datetime?: string | null;
  ticket_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaSatisfactionSurvey2 = {
  id?: number;
  body_text?: string | null;
  created_datetime?: string | null;
  customer_id?: number;
  meta?: {} | null;
  score?: number | null;
  scored_datetime?: string | null;
  sent_datetime?: string | null;
  should_send_datetime?: string | null;
  ticket_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaSatisfactionSurvey3 = {
  id?: number;
  body_text?: string | null;
  created_datetime?: string | null;
  customer_id?: number;
  meta?: {} | null;
  score?: number | null;
  scored_datetime?: string | null;
  sent_datetime?: string | null;
  should_send_datetime?: string | null;
  ticket_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaSatisfactionSurvey4 = {
  id?: number;
  body_text?: string | null;
  created_datetime?: string | null;
  customer_id?: number;
  meta?: {} | null;
  score?: number | null;
  scored_datetime?: string | null;
  sent_datetime?: string | null;
  should_send_datetime?: string | null;
  ticket_id?: number;
  uri?: string;
};

export type GorgiasFullApiSchemaStatistic = {
  data?: {};
  meta?: {
  end_datetime: string;
  previous_end_datetime?: string;
  previous_start_datetime?: string;
  start_datetime: string;
};
};

export type GorgiasFullApiSchemaTag = {
  id: number;
  decoration: GorgiasFullApiSchemaTagDecoration;
  description: string;
  name: string;
  usage: number;
  uri: string;
  created_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaCursorPaginationMeta3 = {
  prev_cursor: string;
  next_cursor: string;
  total_resources: number;
};

export type GorgiasFullApiSchemaTag2 = {
  id: number;
  decoration: GorgiasFullApiSchemaTagDecoration2;
  description: string;
  name: string;
  usage: number;
  uri: string;
  created_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaTag3 = {
  id: number;
  decoration: GorgiasFullApiSchemaTagDecoration3;
  description: string;
  name: string;
  usage: number;
  uri: string;
  created_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaTag4 = {
  id: number;
  decoration: GorgiasFullApiSchemaTagDecoration4;
  description: string;
  name: string;
  usage: number;
  uri: string;
  created_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaTag5 = {
  id: number;
  decoration: GorgiasFullApiSchemaTagDecoration5;
  description: string;
  name: string;
  usage: number;
  uri: string;
  created_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaTeam = {
  id?: number;
  uri?: string;
  name?: string;
  description?: string | null;
  decoration?: {} | null;
  members?: ReadonlyArray<{
  id?: number;
  name?: string | null;
  email?: string | null;
  meta?:  | null;
}>;
  created_datetime?: string | null;
};

export type GorgiasFullApiSchemaTeam2 = {
  id?: number;
  uri?: string;
  name?: string;
  description?: string | null;
  decoration?: {} | null;
  members?: ReadonlyArray<{
  id?: number;
  name?: string | null;
  email?: string | null;
  meta?:  | null;
}>;
  created_datetime?: string | null;
};

export type GorgiasFullApiSchemaTeam3 = {
  id?: number;
  uri?: string;
  name?: string;
  description?: string | null;
  decoration?: {} | null;
  members?: ReadonlyArray<{
  id?: number;
  name?: string | null;
  email?: string | null;
  meta?:  | null;
}>;
  created_datetime?: string | null;
};

export type GorgiasFullApiSchemaTeam4 = {
  id?: number;
  uri?: string;
  name?: string;
  description?: string | null;
  decoration?: {} | null;
  members?: ReadonlyArray<{
  id?: number;
  name?: string | null;
  email?: string | null;
  meta?:  | null;
}>;
  created_datetime?: string | null;
};

export type GorgiasFullApiSchemaTicketCompact = {
  id: number;
  uri: string;
  external_id: string;
  language: string;
  status?: GorgiasFullApiSchemaTicketStatus;
  priority?: GorgiasFullApiSchemaTicketPriority;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug2 | string);
  via: GorgiasFullApiSchemaTicketVia2;
  from_agent: boolean;
  customer: GorgiasFullApiSchemaTicketCompactCustomer;
  assignee_user: GorgiasFullApiSchemaTicketUser;
  assignee_team: GorgiasFullApiSchemaTicketTeam;
  subject: string;
  summary?: GorgiasFullApiSchemaTicketSummary;
  excerpt: string;
  integrations: ReadonlyArray<GorgiasFullApiSchemaTicketCompactIntegration>;
  meta: GorgiasFullApiSchemaTicketMeta;
  tags: ReadonlyArray<GorgiasFullApiSchemaTicketTag>;
  messages_count: number;
  is_unread: boolean;
  spam: boolean;
  created_datetime: string;
  opened_datetime: string;
  last_received_message_datetime: string;
  last_message_datetime: string;
  last_sent_message_not_delivered: boolean;
  updated_datetime: string;
  closed_datetime: string;
  snooze_datetime: string;
  trashed_datetime: string;
  custom_fields?: {
  readonly [key: string]: GorgiasFullApiSchemaTicketCustomFieldValue4 | undefined;
};
};

export type GorgiasFullApiSchemaCursorPaginationMeta4 = {
  prev_cursor: string;
  next_cursor: string;
  total_resources: number;
};

export type GorgiasFullApiSchemaCreateTicket = {
  assignee_team?: GorgiasFullApiSchemaCreateTicketAssignee;
  assignee_user?: GorgiasFullApiSchemaCreateTicketAssignee;
  channel?: (GorgiasFullApiSchemaLegacyChannelSlug3 | string);
  closed_datetime?: string;
  created_datetime?: string;
  custom_fields?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketCustomField>;
  customer?: GorgiasFullApiSchemaCreateTicketCustomer;
  external_id?: string;
  from_agent?: boolean;
  language?: string;
  last_message_datetime?: string;
  last_received_message_datetime?: string;
  messages: ReadonlyArray<GorgiasFullApiSchemaCreateTicketMessage>;
  meta?: {
  readonly [key: string]: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>) | undefined;
};
  opened_datetime?: string;
  priority?: GorgiasFullApiSchemaTicketPriority2;
  snooze_datetime?: string;
  spam?: boolean;
  split_from?: number;
  status?: GorgiasFullApiSchemaTicketStatus2;
  subject?: string;
  tags?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketTag>;
  trashed_datetime?: string;
  updated_datetime?: string;
  via?: "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "helpdesk" | "help-center" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "rule" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";
  imported?: boolean;
};

export type GorgiasFullApiSchemaTicket = {
  id: number;
  uri: string;
  external_id: string;
  events: ReadonlyArray<GorgiasFullApiSchemaTicketEvent>;
  status?: GorgiasFullApiSchemaTicketStatus2;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug3 | string);
  via: GorgiasFullApiSchemaTicketVia3;
  from_agent: boolean;
  spam: boolean;
  imported: boolean;
  customer: GorgiasFullApiSchemaTicketCustomer;
  assignee_user: GorgiasFullApiSchemaTicketUser2;
  language: string;
  subject: string;
  summary?: GorgiasFullApiSchemaTicketSummary2;
  meta: GorgiasFullApiSchemaTicketMeta2;
  tags: ReadonlyArray<GorgiasFullApiSchemaTicketTag2>;
  custom_fields?: {
  readonly [key: string]: GorgiasFullApiSchemaTicketCustomFieldValue5 | undefined;
};
  messages: ReadonlyArray<GorgiasFullApiSchemaTicketMessage6>;
  created_datetime: string;
  processed_datetime: string;
  opened_datetime: string;
  last_received_message_datetime: string;
  last_message_datetime: string;
  updated_datetime: string;
  closed_datetime: string;
  trashed_datetime: string;
  snooze_datetime: string;
  satisfaction_survey: GorgiasFullApiSchemaTicketSatisfactionSurvey;
  reply_options: {
  readonly [key: string]: GorgiasFullApiSchemaTicketReplyOption | undefined;
};
  is_unread: boolean;
};

export type GorgiasFullApiSchemaTicketExtraAttribute = "custom_fields";

export type GorgiasFullApiSchemaTicket2 = {
  id: number;
  uri: string;
  external_id: string;
  events: ReadonlyArray<GorgiasFullApiSchemaTicketEvent2>;
  status?: GorgiasFullApiSchemaTicketStatus3;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug4 | string);
  via: GorgiasFullApiSchemaTicketVia4;
  from_agent: boolean;
  spam: boolean;
  imported: boolean;
  customer: GorgiasFullApiSchemaTicketCustomer2;
  assignee_user: GorgiasFullApiSchemaTicketUser3;
  language: string;
  subject: string;
  summary?: GorgiasFullApiSchemaTicketSummary3;
  meta: GorgiasFullApiSchemaTicketMeta3;
  tags: ReadonlyArray<GorgiasFullApiSchemaTicketTag3>;
  custom_fields?: {
  readonly [key: string]: GorgiasFullApiSchemaTicketCustomFieldValue6 | undefined;
};
  messages: ReadonlyArray<GorgiasFullApiSchemaTicketMessage7>;
  created_datetime: string;
  processed_datetime: string;
  opened_datetime: string;
  last_received_message_datetime: string;
  last_message_datetime: string;
  updated_datetime: string;
  closed_datetime: string;
  trashed_datetime: string;
  snooze_datetime: string;
  satisfaction_survey: GorgiasFullApiSchemaTicketSatisfactionSurvey2;
  reply_options: {
  readonly [key: string]: GorgiasFullApiSchemaTicketReplyOption2 | undefined;
};
  is_unread: boolean;
};

export type GorgiasFullApiSchemaUpdateTicket = {
  assignee_team?: GorgiasFullApiSchemaUpdateTicketAssigneeTeam;
  assignee_user?: GorgiasFullApiSchemaUpdateTicketAssigneeUser;
  channel?: (GorgiasFullApiSchemaLegacyChannelSlug5 | string);
  closed_datetime?: string;
  custom_fields?: ReadonlyArray<GorgiasFullApiSchemaUpdateTicketCustomField>;
  customer?: GorgiasFullApiSchemaUpdateTicketCustomer;
  external_id?: string;
  from_agent?: boolean;
  is_unread?: boolean;
  language?: string;
  last_message_datetime?: string;
  last_received_message_datetime?: string;
  meta?: {
  readonly [key: string]: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>) | undefined;
};
  opened_datetime?: string;
  priority?: GorgiasFullApiSchemaTicketPriority3;
  snooze_datetime?: string;
  spam?: boolean;
  status?: GorgiasFullApiSchemaTicketStatus4;
  subject?: string;
  tags?: ReadonlyArray<GorgiasFullApiSchemaUpdateTicketTag>;
  trashed_datetime?: string;
  updated_datetime?: string;
  via?: "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "helpdesk" | "help-center" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "rule" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";
};

export type GorgiasFullApiSchemaTicket3 = {
  id: number;
  uri: string;
  external_id: string;
  events: ReadonlyArray<GorgiasFullApiSchemaTicketEvent3>;
  status?: GorgiasFullApiSchemaTicketStatus4;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug5 | string);
  via: GorgiasFullApiSchemaTicketVia5;
  from_agent: boolean;
  spam: boolean;
  imported: boolean;
  customer: GorgiasFullApiSchemaTicketCustomer3;
  assignee_user: GorgiasFullApiSchemaTicketUser4;
  language: string;
  subject: string;
  summary?: GorgiasFullApiSchemaTicketSummary4;
  meta: GorgiasFullApiSchemaTicketMeta4;
  tags: ReadonlyArray<GorgiasFullApiSchemaTicketTag4>;
  custom_fields?: {
  readonly [key: string]: GorgiasFullApiSchemaTicketCustomFieldValue7 | undefined;
};
  messages: ReadonlyArray<GorgiasFullApiSchemaTicketMessage8>;
  created_datetime: string;
  processed_datetime: string;
  opened_datetime: string;
  last_received_message_datetime: string;
  last_message_datetime: string;
  updated_datetime: string;
  closed_datetime: string;
  trashed_datetime: string;
  snooze_datetime: string;
  satisfaction_survey: GorgiasFullApiSchemaTicketSatisfactionSurvey3;
  reply_options: {
  readonly [key: string]: GorgiasFullApiSchemaTicketReplyOption3 | undefined;
};
  is_unread: boolean;
};

export type GorgiasFullApiSchemaTicketCustomFieldValue = {
  field?: GorgiasFullApiSchemaTicketCustomField;
  id?: number;
  prediction?: GorgiasFullApiSchemaJsonValue;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaUpdateTicketCustomFieldValues = ReadonlyArray<GorgiasFullApiSchemaUpdateTicketCustomFieldValue>;

export type GorgiasFullApiSchemaTicketCustomFieldValue2 = {
  field?: GorgiasFullApiSchemaTicketCustomField2;
  id?: number;
  prediction?: GorgiasFullApiSchemaJsonValue;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketCustomFieldValue3 = {
  field?: GorgiasFullApiSchemaTicketCustomField3;
  id?: number;
  prediction?: GorgiasFullApiSchemaJsonValue;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessage2 = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug6 | string);
  via: GorgiasFullApiSchemaTicketVia6;
  source: GorgiasFullApiSchemaTicketMessageSource2;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer2;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity2;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent2>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer2;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment2>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro2>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError2;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo2;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo2;
};

export type GorgiasFullApiSchemaCursorPaginationMeta5 = {
  prev_cursor: string;
  next_cursor: string;
  total_resources: number;
};

export type GorgiasFullApiSchemaCreateMessage = {
  actions?: ReadonlyArray<(string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>)>;
  attachments?: ReadonlyArray<GorgiasFullApiSchemaCreateMessageAttachment>;
  body_html?: string;
  body_text?: string;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug7 | string);
  created_datetime?: string;
  deleted_datetime?: string;
  external_id?: string;
  failed_datetime?: string;
  from_agent: boolean;
  headers?: {
  readonly [key: string]: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>) | undefined;
};
  integration_id?: number;
  last_sending_error?: GorgiasFullApiSchemaCreateMessageLastSendingError;
  macros?: ReadonlyArray<GorgiasFullApiSchemaCreateMessageMacro>;
  message_id?: string;
  meta?: GorgiasFullApiSchemaCreateMessageMeta;
  opened_datetime?: string;
  public?: boolean;
  sent_datetime?: string;
  source?: GorgiasFullApiSchemaCreateMessageSource;
  stripped_html?: string;
  stripped_signature?: string;
  stripped_text?: string;
  subject?: string;
  via?: "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "helpdesk" | "help-center" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "rule" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";
  imported?: boolean;
  mention_ids?: ReadonlyArray<number>;
  receiver?: GorgiasFullApiSchemaCreateMessageCustomerOrUser;
  sender?: GorgiasFullApiSchemaCreateMessageCustomerOrUser;
};

export type GorgiasFullApiSchemaTicketMessage3 = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug7 | string);
  via: GorgiasFullApiSchemaTicketVia7;
  source: GorgiasFullApiSchemaTicketMessageSource3;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer3;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity3;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent3>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer3;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment3>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro3>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError3;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo3;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo3;
};

export type GorgiasFullApiSchemaTicketMessage4 = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug8 | string);
  via: GorgiasFullApiSchemaTicketVia8;
  source: GorgiasFullApiSchemaTicketMessageSource4;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer4;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity4;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent4>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer4;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment4>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro4>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError4;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo4;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo4;
};

export type GorgiasFullApiSchemaTicketMessage5 = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug9 | string);
  via: GorgiasFullApiSchemaTicketVia9;
  source: GorgiasFullApiSchemaTicketMessageSource5;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer5;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity5;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent5>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer5;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment5>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro5>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError5;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo5;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo5;
};

export type GorgiasFullApiSchemaFile = {
  content_type?: string;
  name?: string;
  size?: number;
  url?: string;
};

export type GorgiasFullApiSchemaUser = {
  id?: number;
  active?: boolean;
  bio?: string;
  created_datetime?: string;
  country?: string;
  deactivated_datetime?: string;
  email?: string;
  external_id?: string;
  firstname?: string;
  lastname?: string;
  language?: string;
  meta?: {
  sso?: "google" | "office365";
  profile_picture_url?: string | null;
};
  name?: string;
  role?: {
  name?: "admin" | "agent" | "basic-agent" | "bot" | "internal-agent" | "lite-agent" | "observer-agent";
};
  timezone?: string;
  updated_datetime?: string;
  client_id?: string;
};

export type GorgiasFullApiSchemaUser2 = {
  id?: number;
  active?: boolean;
  bio?: string;
  created_datetime?: string;
  country?: string;
  deactivated_datetime?: string;
  email?: string;
  external_id?: string;
  firstname?: string;
  lastname?: string;
  language?: string;
  meta?: {
  sso?: "google" | "office365";
  profile_picture_url?: string | null;
};
  name?: string;
  role?: {
  name?: "admin" | "agent" | "basic-agent" | "bot" | "internal-agent" | "lite-agent" | "observer-agent";
};
  timezone?: string;
  updated_datetime?: string;
  client_id?: string;
};

export type GorgiasFullApiSchemaUser3 = {
  id?: number;
  active?: boolean;
  bio?: string;
  created_datetime?: string;
  country?: string;
  deactivated_datetime?: string;
  email?: string;
  external_id?: string;
  firstname?: string;
  lastname?: string;
  language?: string;
  meta?: {
  sso?: "google" | "office365";
  profile_picture_url?: string | null;
};
  name?: string;
  role?: {
  name?: "admin" | "agent" | "basic-agent" | "bot" | "internal-agent" | "lite-agent" | "observer-agent";
};
  timezone?: string;
  updated_datetime?: string;
  client_id?: string;
};

export type GorgiasFullApiSchemaViewCategory = "system" | "user";

export type GorgiasFullApiSchemaView = {
  id: number;
  category?: string;
  created_datetime?: string;
  deactivated_datetime?: string;
  decoration?: GorgiasFullApiSchemaViewDecoration;
  fields?: ReadonlyArray<GorgiasFullApiSchemaViewField>;
  filters?: string;
  name?: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  search?: string;
  shared_with_teams?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithTeam>;
  shared_with_users?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithUser>;
  slug?: string;
  type?: GorgiasFullApiSchemaViewType;
  uri: string;
  visibility?: GorgiasFullApiSchemaViewVisibility;
};

export type GorgiasFullApiSchemaCursorPaginationMeta6 = {
  prev_cursor: string;
  next_cursor: string;
  total_resources: number;
};

export type GorgiasFullApiSchemaViewCreate = {
  decoration?: GorgiasFullApiSchemaViewDecoration2;
  fields?: ReadonlyArray<GorgiasFullApiSchemaViewField2>;
  filters?: string;
  name?: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  shared_with_teams?: ReadonlyArray<number>;
  shared_with_users?: ReadonlyArray<number>;
  slug: string;
  type?: GorgiasFullApiSchemaViewType2;
  visibility?: GorgiasFullApiSchemaViewVisibility2;
};

export type GorgiasFullApiSchemaView2 = {
  id: number;
  category?: string;
  created_datetime?: string;
  deactivated_datetime?: string;
  decoration?: GorgiasFullApiSchemaViewDecoration2;
  fields?: ReadonlyArray<GorgiasFullApiSchemaViewField2>;
  filters?: string;
  name?: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  search?: string;
  shared_with_teams?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithTeam2>;
  shared_with_users?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithUser2>;
  slug?: string;
  type?: GorgiasFullApiSchemaViewType2;
  uri: string;
  visibility?: GorgiasFullApiSchemaViewVisibility2;
};

export type GorgiasFullApiSchemaView3 = {
  id: number;
  category?: string;
  created_datetime?: string;
  deactivated_datetime?: string;
  decoration?: GorgiasFullApiSchemaViewDecoration3;
  fields?: ReadonlyArray<GorgiasFullApiSchemaViewField3>;
  filters?: string;
  name?: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  search?: string;
  shared_with_teams?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithTeam3>;
  shared_with_users?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithUser3>;
  slug?: string;
  type?: GorgiasFullApiSchemaViewType3;
  uri: string;
  visibility?: GorgiasFullApiSchemaViewVisibility3;
};

export type GorgiasFullApiSchemaViewUpdate = {
  decoration?: GorgiasFullApiSchemaViewDecoration4;
  fields?: ReadonlyArray<GorgiasFullApiSchemaViewField4>;
  filters?: string;
  name?: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  shared_with_teams?: ReadonlyArray<number>;
  shared_with_users?: ReadonlyArray<number>;
  slug?: string;
  type?: GorgiasFullApiSchemaViewType4;
  visibility?: GorgiasFullApiSchemaViewVisibility4;
};

export type GorgiasFullApiSchemaView4 = {
  id: number;
  category?: string;
  created_datetime?: string;
  deactivated_datetime?: string;
  decoration?: GorgiasFullApiSchemaViewDecoration4;
  fields?: ReadonlyArray<GorgiasFullApiSchemaViewField4>;
  filters?: string;
  name?: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  search?: string;
  shared_with_teams?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithTeam4>;
  shared_with_users?: ReadonlyArray<GorgiasFullApiSchemaViewSharedWithUser4>;
  slug?: string;
  type?: GorgiasFullApiSchemaViewType4;
  uri: string;
  visibility?: GorgiasFullApiSchemaViewVisibility4;
};

export type GorgiasFullApiSchemaViewItemsListRespMeta = {
  current_cursor?: string;
  next_items?: string;
  prev_items?: string;
};

export type GorgiasFullApiSchemaViewItemsListRespMeta2 = {
  current_cursor?: string;
  next_items?: string;
  prev_items?: string;
};

export type GorgiasFullApiSchemaWidget = {
  id?: number;
  context?: "ticket" | "customer" | "user";
  created_datetime?: string;
  deactivated_datetime?: string | null;
  integration_id?: number | null;
  app_id?: string | null;
  order?: number;
  template?: {};
  type?: "bigcommerce" | "custom" | "customer_external_data" | "http" | "magento2" | "recharge" | "shopify" | "smile" | "standalone" | "yotpo" | "klaviyo" | "stripe" | "woocommerce";
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaWidget2 = {
  id?: number;
  context?: "ticket" | "customer" | "user";
  created_datetime?: string;
  deactivated_datetime?: string | null;
  integration_id?: number | null;
  app_id?: string | null;
  order?: number;
  template?: {};
  type?: "bigcommerce" | "custom" | "customer_external_data" | "http" | "magento2" | "recharge" | "shopify" | "smile" | "standalone" | "yotpo" | "klaviyo" | "stripe" | "woocommerce";
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaWidget3 = {
  id?: number;
  context?: "ticket" | "customer" | "user";
  created_datetime?: string;
  deactivated_datetime?: string | null;
  integration_id?: number | null;
  app_id?: string | null;
  order?: number;
  template?: {};
  type?: "bigcommerce" | "custom" | "customer_external_data" | "http" | "magento2" | "recharge" | "shopify" | "smile" | "standalone" | "yotpo" | "klaviyo" | "stripe" | "woocommerce";
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaWidget4 = {
  id?: number;
  context?: "ticket" | "customer" | "user";
  created_datetime?: string;
  deactivated_datetime?: string | null;
  integration_id?: number | null;
  app_id?: string | null;
  order?: number;
  template?: {};
  type?: "bigcommerce" | "custom" | "customer_external_data" | "http" | "magento2" | "recharge" | "shopify" | "smile" | "standalone" | "yotpo" | "klaviyo" | "stripe" | "woocommerce";
  updated_datetime?: string;
  uri?: string;
};

export type GorgiasFullApiSchemaObjectType = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedTicketFieldType = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaManagedCustomerFieldType = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings | GorgiasFullApiSchemaDropdownInputSettingsSettings);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings;
};

export type GorgiasFullApiSchemaObjectType2 = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedTicketFieldType2 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaManagedCustomerFieldType2 = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition2 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings2 | GorgiasFullApiSchemaDropdownInputSettingsSettings2);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition2 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings2;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition2 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings2;
};

export type GorgiasFullApiSchemaUpdateCustomFieldItem = {
  external_id?: string;
  object_type?: GorgiasFullApiSchemaObjectType3;
  label?: string;
  description?: string;
  priority?: number;
  required?: boolean;
  requirement_type?: GorgiasFullApiSchemaRequirementType;
  managed_type?: (GorgiasFullApiSchemaManagedTicketFieldType3 | GorgiasFullApiSchemaManagedCustomerFieldType3);
  definition?: (GorgiasFullApiSchemaTextDataTypeDefinition3 | GorgiasFullApiSchemaNumberDataTypeDefinition3 | GorgiasFullApiSchemaBooleanDataTypeDefinition3);
  deactivated_datetime?: string;
  id: number;
};

export type GorgiasFullApiSchemaObjectType3 = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedTicketFieldType3 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaManagedCustomerFieldType3 = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition3 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings3 | GorgiasFullApiSchemaDropdownInputSettingsSettings3);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition3 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings3;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition3 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings3;
};

export type GorgiasFullApiSchemaObjectType4 = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedTicketFieldType4 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaManagedCustomerFieldType4 = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition4 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings4 | GorgiasFullApiSchemaDropdownInputSettingsSettings4);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition4 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings4;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition4 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings4;
};

export type GorgiasFullApiSchemaObjectType5 = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedTicketFieldType5 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaManagedCustomerFieldType5 = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition5 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings5 | GorgiasFullApiSchemaDropdownInputSettingsSettings5);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition5 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings5;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition5 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings5;
};

export type GorgiasFullApiSchemaCustomerCustomField = {
  id: number;
  external_id: string;
  object_type: GorgiasFullApiSchemaObjectType6;
  label: string;
  description: string;
  priority: number;
  required: boolean;
  managed_type: GorgiasFullApiSchemaManagedCustomerFieldType6;
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition6 | GorgiasFullApiSchemaNumberDataTypeDefinition6 | GorgiasFullApiSchemaBooleanDataTypeDefinition6);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime: string;
};

export type GorgiasFullApiSchemaCustomerCustomField2 = {
  id: number;
  external_id: string;
  object_type: GorgiasFullApiSchemaObjectType7;
  label: string;
  description: string;
  priority: number;
  required: boolean;
  managed_type: GorgiasFullApiSchemaManagedCustomerFieldType7;
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition7 | GorgiasFullApiSchemaNumberDataTypeDefinition7 | GorgiasFullApiSchemaBooleanDataTypeDefinition7);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime: string;
};

export type GorgiasFullApiSchemaCustomerCustomField3 = {
  id: number;
  external_id: string;
  object_type: GorgiasFullApiSchemaObjectType8;
  label: string;
  description: string;
  priority: number;
  required: boolean;
  managed_type: GorgiasFullApiSchemaManagedCustomerFieldType8;
  definition: (GorgiasFullApiSchemaTextDataTypeDefinition8 | GorgiasFullApiSchemaNumberDataTypeDefinition8 | GorgiasFullApiSchemaBooleanDataTypeDefinition8);
  created_datetime: string;
  updated_datetime: string;
  deactivated_datetime: string;
};

export type GorgiasFullApiSchemaMacroAction3 = {
  arguments: {};
  description?: string | null;
  name: string;
  title: string;
  type?: "system" | "user";
};

export type GorgiasFullApiSchemaMacroAction4 = {
  arguments: {};
  description?: string | null;
  name: string;
  title: string;
  type?: "system" | "user";
};

export type GorgiasFullApiSchemaArchiveMacroAsUserResult = {
  id: number;
  status: GorgiasFullApiSchemaArchiveMacroAsUserStatusEnum;
  error?: GorgiasFullApiSchemaMacroUsageError;
};

export type GorgiasFullApiSchemaUnArchiveMacroAsUserResult = {
  id: number;
  status: GorgiasFullApiSchemaUnarchiveMacroAsUserStatusEnum;
};

export type GorgiasFullApiSchemaLegacyChannelSlug = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaTicketVia = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketMessageSource = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer;
};

export type GorgiasFullApiSchemaMetricCard2 = {
  slug: GorgiasFullApiSchemaMetricCardSlugEnum2;
  category: string;
  title: string;
  status: GorgiasFullApiSchemaMetricCardStatusEnum;
  definition_revised_at: string;
  public: GorgiasFullApiSchemaMetricCardPublic2;
  api?: GorgiasFullApiSchemaMetricCardApiMapping2;
  aliases: ReadonlyArray<string>;
  related: ReadonlyArray<GorgiasFullApiSchemaMetricCardRef2>;
  replaces: ReadonlyArray<GorgiasFullApiSchemaMetricCardRef2>;
  used_in_reports: ReadonlyArray<string>;
};

export type GorgiasFullApiSchemaMetricCardSlugEnum = "abandoned-calls" | "accuracy" | "achievement-rate" | "agents-offline" | "agents-online" | "ai-agent-automation-rate" | "ai-agent-average-csat" | "ai-agent-closed-tickets" | "all-used-tags-all" | "all-used-tags-all-created" | "all-used-values" | "all-used-values-created" | "article-views" | "assigned-open-tickets" | "automated-interactions" | "average-csat" | "average-discount-amount" | "average-order-value" | "average-survey-score" | "average-talk-time" | "average-ticket-handle-time" | "average-wait-time" | "brand-voice" | "buy-through-rate" | "callback-requests" | "calls-in-queue" | "cancelled-calls" | "click-through-rate" | "closed-tickets" | "closed-tickets-per-hour" | "comment-highlights" | "communication-skills" | "contribution-to-total-sales" | "conversion-rate" | "coverage-rate" | "created-tickets" | "decrease-in-frt" | "decrease-in-resolution-time" | "discount-codes-applied" | "discount-usage" | "discounts-offered" | "efficiency" | "first-response-time" | "handover-interactions" | "human-response-time-after-ai-handoff" | "inbound-answered-per-agent" | "inbound-calls" | "inbound-declined" | "inbound-transferred" | "internal-compliance" | "language-proficiency" | "live-messages-sent" | "live-online-status" | "live-open-tickets" | "live-tickets-closed" | "live-tickets-created" | "live-tickets-replied" | "median-purchase-time" | "median-response-time" | "messages-per-ticket" | "messages-received" | "messages-sent" | "messages-sent-per-hour" | "messages-sent-per-macro" | "missed-calls" | "no-search-results-search-count" | "one-touch-tickets" | "online-time" | "open-tickets" | "orders-influenced" | "outbound-calls" | "overall-automation-rate" | "percent-abandoned-calls" | "percent-callback-requests" | "percent-cancelled-calls" | "percent-missed-calls" | "percent-sla-achievement-rate" | "percentage-of-closed-tickets" | "percentage-of-created-tickets" | "performance-per-article-views" | "product-recommendations" | "resolution-completeness" | "resolution-time" | "response-rate" | "revenue-per-interaction" | "reviewed-tickets" | "satisfaction-score" | "search-results" | "search-terms-with-results-articles-clicked" | "search-terms-with-results-click-through-rate" | "search-terms-with-results-search-count" | "searches" | "sla-achievement-rate" | "success-rate" | "surveys-sent" | "ticket-handle-time-per-agent" | "tickets-replied" | "tickets-replied-per-hour" | "tickets-with-achieved-slas" | "tickets-with-breached-slas" | "time-saved-by-agent" | "top-performer-frt" | "top-performers-closed-tickets" | "top-performers-csat" | "top-performers-resolution-time" | "top-used-tags-all" | "top-used-tags-all-created" | "top-used-tags-all-created-trend" | "top-used-tags-all-trend" | "top-used-values" | "top-used-values-created" | "top-used-values-created-trend" | "top-used-values-trend" | "total-calls" | "total-sales" | "unanswered-calls" | "unassigned-open-tickets" | "wait-time-per-call" | "zero-touch-tickets";

export type GorgiasFullApiSchemaMetricCardStatusEnum2 = "published" | "deprecated";

export type GorgiasFullApiSchemaMetricCardPublic = {
  definition: string;
  formula: string;
  computation_logic: ReadonlyArray<string>;
};

export type GorgiasFullApiSchemaMetricCardApiMapping = {
  scope: string;
  measures?: ReadonlyArray<string>;
  dimensions?: ReadonlyArray<string>;
  filters?: ReadonlyArray<GorgiasFullApiSchemaMetricCardApiFilter>;
};

export type GorgiasFullApiSchemaMetricCardRef = {
  slug: string;
  url: string;
};

export type GorgiasFullApiSchemaTicketsClosedQuery = {
  scope: "tickets-closed";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTicketsClosedFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTicketsClosedTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTicketsCreatedQuery = {
  scope: "tickets-created";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTicketsCreatedFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTicketsCreatedTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTicketsOpenQuery = {
  scope: "tickets-open";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTicketsOpenFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTicketsOpenTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTicketsRepliedQuery = {
  scope: "tickets-replied";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTicketsRepliedFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTicketsRepliedTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaOneTouchTicketsQuery = {
  scope: "one-touch-tickets";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaOneTouchTicketsFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaOneTouchTicketsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaZeroTouchTicketsQuery = {
  scope: "zero-touch-tickets";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaZeroTouchTicketsFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaZeroTouchTicketsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaSatisfactionSurveysQuery = {
  scope: "satisfaction-surveys";
  measures?: ReadonlyArray<"scoredSurveysCount" | "averageSurveyScore" | "satisfactionScore" | "responseRate" | "sentSurveysCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "surveyScore" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaSatisfactionSurveysFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaSatisfactionSurveysTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaResolutionTimeQuery = {
  scope: "resolution-time";
  measures?: ReadonlyArray<"medianResolutionTime" | "averageResolutionTime">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "resolutionTime" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaResolutionTimeFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaResolutionTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaMessagesSentQuery = {
  scope: "messages-sent";
  measures?: ReadonlyArray<"messagesCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaMessagesSentFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaMessagesSentTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaFirstResponseTimeQuery = {
  scope: "first-response-time";
  measures?: ReadonlyArray<"medianFirstResponseTime" | "averageFirstResponseTime">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "firstResponseTime" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaFirstResponseTimeFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaFirstResponseTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaHumanFirstResponseTimeQuery = {
  scope: "human-first-response-time";
  measures?: ReadonlyArray<"medianFirstResponseTime" | "averageFirstResponseTime">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "firstResponseTime" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaHumanFirstResponseTimeFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaHumanFirstResponseTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaResponseTimeQuery = {
  scope: "response-time";
  measures?: ReadonlyArray<"medianResponseTime">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaResponseTimeFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaResponseTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaMessagesPerTicketQuery = {
  scope: "messages-per-ticket";
  measures?: ReadonlyArray<"averageMessagesCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "messagesCount" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaMessagesPerTicketFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaMessagesPerTicketTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTicketHandleTimeQuery = {
  scope: "ticket-handle-time";
  measures?: ReadonlyArray<"averageHandleTime" | "handleTime">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "handleTime" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTicketHandleTimeFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTicketHandleTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaOnlineTimeQuery = {
  scope: "online-time";
  measures?: ReadonlyArray<"onlineTime">;
  dimensions?: ReadonlyArray<"agentId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaOnlineTimeFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTagsQuery = {
  scope: "tags";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId" | "tagId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTagsFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTagsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTicketFieldsQuery = {
  scope: "ticket-fields";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"customFieldValue">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTicketFieldsFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTicketFieldsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAutoQAQuery = {
  scope: "auto-qa";
  measures?: ReadonlyArray<"averageResolutionCompletenessScore" | "averageCommunicationSkillsScore" | "averageLanguageProficiencyScore" | "averageAccuracyScore" | "averageEfficiencyScore" | "averageInternalComplianceScore" | "averageBrandVoiceScore" | "ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId" | "ticketQAScorerUserId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaAutoQAFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaMessagesReceivedQuery = {
  scope: "messages-received";
  measures?: ReadonlyArray<"messagesCount">;
  dimensions?: ReadonlyArray<"ticketId" | "agentId" | "channel" | "integrationId" | "storeId">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaMessagesReceivedFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaMessagesReceivedTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaWorkloadTicketsQuery = {
  scope: "workload-tickets";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"ticketId" | "channel">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaWorkloadTicketsFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaVoiceCallsQuery = {
  scope: "voice-calls";
  measures?: ReadonlyArray<"voiceCallsCount" | "averageTalkTimeInSeconds" | "averageWaitTimeInSeconds" | "inboundCallsCount" | "outboundCallsCount" | "inboundAnsweredCallsCount" | "inboundUnansweredCallsCount" | "inboundMissedCallsCount" | "inboundAbandonedCallsCount" | "inboundCancelledCallsCount" | "inboundCallbackRequestedCallsCount" | "slaAchievementRate" | "breachedExposures" | "achievedExposures">;
  dimensions?: ReadonlyArray<"agentId" | "filteringAgentId" | "integrationId" | "queueId" | "customerId" | "createdDatetime" | "status" | "duration" | "source" | "destination" | "callDirection" | "talkTime" | "waitTime" | "voicemailAvailable" | "voicemailUrl" | "callRecordingAvailable" | "callRecordingUrl" | "displayStatus" | "queueName" | "ticketId" | "isPossibleSpam" | "callSlaStatus" | "callSlaStatusLabel">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaVoiceCallsFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaVoiceAgentEventsQuery = {
  scope: "voice-agent-events";
  measures?: ReadonlyArray<"voiceCallsCount">;
  dimensions?: ReadonlyArray<"agentId" | "integrationId" | "createdDatetime" | "ticketId" | "status" | "transferType" | "transferTargetAgentId" | "transferTargetExternalNumber" | "transferTargetQueueId" | "assignedAgentId" | "customerId" | "duration" | "source" | "destination" | "callDirection" | "voicemailAvailable" | "voicemailUrl" | "callRecordingAvailable" | "callRecordingUrl" | "displayStatus">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaVoiceAgentEventsFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTicketSlaQuery = {
  scope: "ticket-sla";
  measures?: ReadonlyArray<"ticketCount" | "slaAchievementRate">;
  dimensions?: ReadonlyArray<"status" | "channel">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaTicketSlaFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem | GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTicketSlaTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaKnowledgeInsightsQuery = {
  scope: "knowledge-insights";
  measures?: ReadonlyArray<"averageSurveyScore" | "ticketCount" | "interactionsCount">;
  dimensions?: ReadonlyArray<"ticketId" | "resourceType" | "resourceSourceId" | "resourceSourceSetId" | "resourceVersion" | "customFieldTop2LevelsValue" | "createdDatetime">;
  filters: ReadonlyArray<(GorgiasFullApiSchemaKnowledgeInsightsFilterItem | GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem)>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaVoiceCallsSummaryQuery = {
  scope: "voice-calls-summary";
  measures?: ReadonlyArray<"inboundVoiceCallsCount" | "outboundVoiceCallsCount" | "answeredVoiceCallsCount" | "cancelledVoiceCallsCount" | "abandonedVoiceCallsCount" | "missedVoiceCallsCount" | "unansweredVoiceCallsCount" | "callbackRequestedVoiceCallsCount" | "averageTalkTimeInSeconds" | "averageWaitTimeInSeconds" | "slaAchievementRate" | "breachedExposures" | "achievedExposures">;
  dimensions?: ReadonlyArray<GorgiasFullApiSchemaReportingStatsDimensionsEnum>;
  filters: ReadonlyArray<GorgiasFullApiSchemaVoiceCallsSummaryFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiSalesAgentOrdersPerformanceQuery = {
  scope: "ai-sales-agent-orders-performance";
  measures?: ReadonlyArray<"ordersInfluencedCount" | "totalSalesAmount" | "totalSalesAmountUsd" | "averageOrderValue" | "medianOrderValue" | "averagePurchaseTime" | "medianPurchaseTime">;
  dimensions?: ReadonlyArray<"channel" | "currency" | "storeIntegrationId" | "engagementType" | "ticketId" | "orderId" | "totalAmount" | "purchaseTime">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentOrdersPerformanceFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentOrdersPerformanceTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiSalesAgentDiscountsQuery = {
  scope: "ai-sales-agent-discounts";
  measures?: ReadonlyArray<"offeredDiscountCodesCount" | "appliedDiscountCodesCount" | "averageDiscountAmount" | "medianDiscountAmount" | "discountUsage">;
  dimensions?: ReadonlyArray<"channel" | "currency" | "storeIntegrationId" | "engagementType" | "ticketId" | "discountAmount" | "discountCodeOffered" | "discountCodeUsed">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentDiscountsFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentDiscountsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiSalesAgentActivityQuery = {
  scope: "ai-sales-agent-activity";
  measures?: ReadonlyArray<"revenuePerInteraction" | "recommendedProductCount" | "timesRecommended">;
  dimensions?: ReadonlyArray<"channel" | "storeIntegrationId" | "ticketId" | "engagementType" | "attributedRevenue" | "productRecommended" | "productId" | "productVariantIds">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentActivityFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentActivityTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaOverallAutomationRateQuery = {
  scope: "overall-automation-rate";
  measures?: ReadonlyArray<"automationRate">;
  dimensions?: ReadonlyArray<"automationFeatureType" | "channel" | "storeIntegrationId" | "aiAgentRole" | "orderManagementType" | "flowId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaOverallAutomationRateFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaOverallAutomationRateTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAIAgentAutomatedInteractionsQuery = {
  scope: "ai-agent-automated-interactions";
  measures?: ReadonlyArray<"automatedInteractionsCount">;
  dimensions?: ReadonlyArray<"aiAgentRole" | "engagementType" | "channel" | "storeIntegrationId" | "aiIntentCustomField" | "ticketId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAIAgentAutomatedInteractionsFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAIAgentAutomatedInteractionsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaOverallAutomatedInteractionsQuery = {
  scope: "overall-automated-interactions";
  measures?: ReadonlyArray<"automatedInteractionsCount">;
  dimensions?: ReadonlyArray<"automationFeatureType" | "orderManagementType" | "flowId" | "channel" | "storeIntegrationId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaOverallAutomatedInteractionsFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaOverallAutomatedInteractionsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaHandoverInteractionsQuery = {
  scope: "handover-interactions";
  measures?: ReadonlyArray<"handoverInteractionsCount">;
  dimensions?: ReadonlyArray<"automationFeatureType" | "aiAgentRole" | "engagementType" | "channel" | "storeIntegrationId" | "aiIntentCustomField" | "ticketId" | "orderManagementType" | "resourceSourceId" | "resourceSourceSetId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaHandoverInteractionsFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaHandoverInteractionsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiSalesAgentBuyThroughRateQuery = {
  scope: "ai-sales-agent-buy-through-rate";
  measures?: ReadonlyArray<"buyThroughRate" | "productBuyThroughRate">;
  dimensions?: ReadonlyArray<"channel" | "storeIntegrationId" | "engagementType" | "ticketId" | "productRecommended" | "boughtProducts" | "productId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentBuyThroughRateFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentBuyThroughRateTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiSalesAgentConversionRateQuery = {
  scope: "ai-sales-agent-conversion-rate";
  measures?: ReadonlyArray<"conversionRate">;
  dimensions?: ReadonlyArray<"channel" | "storeIntegrationId" | "engagementType" | "ticketId" | "aiIntentCustomField">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentConversionRateFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiSalesAgentConversionRateTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiAgentCoverageRateQuery = {
  scope: "ai-agent-coverage-rate";
  measures?: ReadonlyArray<"coverageRate">;
  dimensions?: ReadonlyArray<"channel" | "ticketId" | "aiAgentRole" | "aiIntentCustomField">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiAgentCoverageRateFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiAgentCoverageRateTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiAgentSuccessRateQuery = {
  scope: "ai-agent-success-rate";
  measures?: ReadonlyArray<"successRate" | "aiAgentTicketVolume">;
  dimensions?: ReadonlyArray<"channel" | "ticketId" | "aiAgentRole" | "storeIntegrationId" | "engagementType" | "aiIntentCustomField" | "resourceSourceId" | "resourceSourceSetId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiAgentSuccessRateFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiAgentSuccessRateTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaOverallTimeSavedByAgentQuery = {
  scope: "overall-time-saved-by-agent";
  measures?: ReadonlyArray<"averageTimeSavedByAgent" | "medianTimeSavedByAgent">;
  dimensions?: ReadonlyArray<"channel" | "automationFeatureType" | "orderManagementType" | "flowId" | "storeIntegrationId" | "ticketId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaOverallTimeSavedByAgentFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaOverallTimeSavedByAgentTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaTimeSavedByAiAgentQuery = {
  scope: "ai-agent-time-saved";
  measures?: ReadonlyArray<"averageTimeSavedByAgent" | "medianTimeSavedByAgent">;
  dimensions?: ReadonlyArray<"channel" | "aiAgentRole" | "storeIntegrationId" | "ticketId" | "engagementType">;
  filters: ReadonlyArray<GorgiasFullApiSchemaTimeSavedByAiAgentFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaTimeSavedByAiAgentTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiAgentTicketFieldsQuery = {
  scope: "ai-agent-ticket-fields";
  measures?: ReadonlyArray<"ticketCount">;
  dimensions?: ReadonlyArray<"aiAgentRole" | "aiOutcomeCustomField" | "channel" | "storeIntegrationId" | "ticketId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiAgentTicketFieldsFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiAgentTicketFieldsTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaOverallDecreaseInResolutionTimeQuery = {
  scope: "overall-decrease-in-resolution-time";
  measures?: ReadonlyArray<"averageDecreaseInResolutionTime" | "medianDecreaseInResolutionTime">;
  dimensions?: ReadonlyArray<"channel" | "automationFeatureType" | "orderManagementType" | "flowId" | "storeIntegrationId" | "ticketId" | "resolutionTime">;
  filters: ReadonlyArray<GorgiasFullApiSchemaOverallDecreaseInResolutionTimeFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaOverallDecreaseInResolutionTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAIAgentDecreaseInResolutionTimeQuery = {
  scope: "ai-agent-decrease-in-resolution-time";
  measures?: ReadonlyArray<"averageDecreaseInResolutionTime" | "medianDecreaseInResolutionTime">;
  dimensions?: ReadonlyArray<"channel" | "aiAgentRole" | "storeIntegrationId" | "ticketId" | "resolutionTime" | "aiIntentCustomField">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAIAgentDecreaseInResolutionTimeFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAIAgentDecreaseInResolutionTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaFlowDatasetQuery = {
  scope: "flow-dataset";
  measures?: ReadonlyArray<"dropOffCount" | "handoverInteractionsCount">;
  dimensions?: ReadonlyArray<"channel" | "flowId" | "storeIntegrationId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaFlowDatasetFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaFlowDatasetTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAiAgentCsatQuery = {
  scope: "ai-agent-csat";
  measures?: ReadonlyArray<"averageCSAT" | "medianCSAT">;
  dimensions?: ReadonlyArray<"channel" | "ticketId" | "aiAgentRole" | "storeIntegrationId" | "engagementType" | "surveyScore" | "resourceSourceId" | "resourceSourceSetId">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAiAgentCsatFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAiAgentCsatTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaOverallDecreaseInFirstResponseTimeQuery = {
  scope: "overall-decrease-in-first-response-time";
  measures?: ReadonlyArray<"averageDecreaseInFirstResponseTime" | "medianDecreaseInFirstResponseTime">;
  dimensions?: ReadonlyArray<"channel" | "automationFeatureType" | "orderManagementType" | "flowId" | "storeIntegrationId" | "ticketId" | "firstResponseTime">;
  filters: ReadonlyArray<GorgiasFullApiSchemaOverallDecreaseInFirstResponseTimeFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaOverallDecreaseInFirstResponseTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAIAgentDecreaseInFirstResponseTimeQuery = {
  scope: "ai-agent-decrease-in-first-response-time";
  measures?: ReadonlyArray<"averageDecreaseInFirstResponseTime" | "medianDecreaseInFirstResponseTime">;
  dimensions?: ReadonlyArray<"channel" | "aiAgentRole" | "engagementType" | "storeIntegrationId" | "ticketId" | "firstResponseTime" | "aiIntentCustomField">;
  filters: ReadonlyArray<GorgiasFullApiSchemaAIAgentDecreaseInFirstResponseTimeFilterItem>;
  time_dimensions?: ReadonlyArray<GorgiasFullApiSchemaAIAgentDecreaseInFirstResponseTimeTimeDimension>;
  timezone: string;
  order?: ReadonlyArray<ReadonlyArray<GorgiasFullApiSchemaJsonValue>>;
};

export type GorgiasFullApiSchemaAnalyticsReportingMeta = {
  scope: GorgiasFullApiSchemaReportingStatsScopesEnum;
  prev_cursor: string;
  next_cursor: string;
  total: number;
  offset: number;
  limit: number;
};

export type GorgiasFullApiSchemaTagDecoration = {
  color?: string;
};

export type GorgiasFullApiSchemaTagDecoration2 = {
  color?: string;
};

export type GorgiasFullApiSchemaTagDecoration3 = {
  color?: string;
};

export type GorgiasFullApiSchemaTagDecoration4 = {
  color?: string;
};

export type GorgiasFullApiSchemaTagDecoration5 = {
  color?: string;
};

export type GorgiasFullApiSchemaTicketStatus = "open" | "closed";

export type GorgiasFullApiSchemaTicketPriority = "critical" | "high" | "normal" | "low";

export type GorgiasFullApiSchemaLegacyChannelSlug2 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaTicketVia2 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketCompactCustomer = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketUser = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
  bio: string;
};

export type GorgiasFullApiSchemaTicketTeam = {
  id: number;
  name: string;
  decoration: {};
};

export type GorgiasFullApiSchemaTicketSummary = {
  content: string;
  created_datetime: string;
  updated_datetime: string;
  triggered_by: number;
};

export type GorgiasFullApiSchemaTicketCompactIntegration = {
  name: string;
  address: string;
  type: GorgiasFullApiSchemaIntegrationType;
};

export type GorgiasFullApiSchemaTicketMeta = GorgiasFullApiSchemaJsonValue;

export type GorgiasFullApiSchemaTicketTag = {
  id: number;
  name: string;
  decoration: GorgiasFullApiSchemaTicketTagDecoration;
};

export type GorgiasFullApiSchemaTicketCustomFieldValue4 = {
  field?: GorgiasFullApiSchemaTicketCustomField4;
  id?: number;
  prediction?: GorgiasFullApiSchemaJsonValue;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaCreateTicketAssignee = {
  id?: number;
};

export type GorgiasFullApiSchemaLegacyChannelSlug3 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaCreateTicketCustomField = {
  id: number;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaCreateTicketCustomer = {
  id?: number;
  email?: string;
  name?: string;
};

export type GorgiasFullApiSchemaCreateTicketMessage = {
  actions?: ReadonlyArray<(string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>)>;
  attachments?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketMessageAttachment>;
  body_html?: string;
  body_text?: string;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug3 | string);
  created_datetime?: string;
  deleted_datetime?: string;
  external_id?: string;
  failed_datetime?: string;
  from_agent: boolean;
  headers?: {
  readonly [key: string]: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>) | undefined;
};
  integration_id?: number;
  last_sending_error?: GorgiasFullApiSchemaCreateTicketMessageLastSendingError;
  macros?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketMessageMacro>;
  message_id?: string;
  meta?: GorgiasFullApiSchemaCreateTicketMessageMeta;
  opened_datetime?: string;
  public?: boolean;
  sent_datetime?: string;
  source?: GorgiasFullApiSchemaCreateTicketMessageSource;
  stripped_html?: string;
  stripped_signature?: string;
  stripped_text?: string;
  subject?: string;
  via?: "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "helpdesk" | "help-center" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "rule" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";
  mention_ids?: ReadonlyArray<number>;
  receiver?: GorgiasFullApiSchemaCreateTicketMessageCustomerOrUser;
  sender?: GorgiasFullApiSchemaCreateTicketMessageCustomerOrUser;
};

export type GorgiasFullApiSchemaTicketPriority2 = "critical" | "high" | "normal" | "low";

export type GorgiasFullApiSchemaTicketStatus2 = "open" | "closed";

export type GorgiasFullApiSchemaCreateTicketTag = {
  name: string;
  decoration?: GorgiasFullApiSchemaCreateTicketTagDecoration;
};

export type GorgiasFullApiSchemaTicketEvent = {
  id: number;
  type: string;
  user: GorgiasFullApiSchemaTicketEventUser;
  data: {};
  created_datetime: string;
};

export type GorgiasFullApiSchemaTicketVia3 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketCustomer = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
  channels: ReadonlyArray<GorgiasFullApiSchemaTicketCustomerChannel>;
  data: GorgiasFullApiSchemaJsonValue;
  customer: GorgiasFullApiSchemaJsonValue;
  integrations: {};
  external_id: string;
  note: string;
  external_data?: {
  readonly [key: string]: {} | undefined;
};
  ecommerce_data?: {
  readonly [key: string]: GorgiasFullApiSchemaShopperEcommerceData | undefined;
};
};

export type GorgiasFullApiSchemaTicketUser2 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
  bio: string;
};

export type GorgiasFullApiSchemaTicketSummary2 = {
  content: string;
  created_datetime: string;
  updated_datetime: string;
  triggered_by: number;
};

export type GorgiasFullApiSchemaTicketMeta2 = GorgiasFullApiSchemaJsonValue;

export type GorgiasFullApiSchemaTicketTag2 = {
  id: number;
  name: string;
  decoration: GorgiasFullApiSchemaTicketTagDecoration2;
};

export type GorgiasFullApiSchemaTicketCustomFieldValue5 = {
  field?: GorgiasFullApiSchemaTicketCustomField5;
  id?: number;
  prediction?: GorgiasFullApiSchemaJsonValue;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessage6 = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug3 | string);
  via: GorgiasFullApiSchemaTicketVia3;
  source: GorgiasFullApiSchemaTicketMessageSource6;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer6;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity6;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent6>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer6;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment6>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro6>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError6;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo6;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo6;
};

export type GorgiasFullApiSchemaTicketSatisfactionSurvey = {
  id: number;
  customer_id: number;
  ticket_id: number;
  sent_datetime: string;
  scored_datetime: string;
  should_send_datetime: string;
  created_datetime: string;
  score: number;
  body_text: string;
  meta: {};
};

export type GorgiasFullApiSchemaTicketReplyOption = {
  answerable: boolean;
  reason?: string;
  integrations?: ReadonlyArray<GorgiasFullApiSchemaTicketReplyOptionIntegration>;
};

export type GorgiasFullApiSchemaTicketEvent2 = {
  id: number;
  type: string;
  user: GorgiasFullApiSchemaTicketEventUser2;
  data: {};
  created_datetime: string;
};

export type GorgiasFullApiSchemaTicketStatus3 = "open" | "closed";

export type GorgiasFullApiSchemaLegacyChannelSlug4 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaTicketVia4 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketCustomer2 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
  channels: ReadonlyArray<GorgiasFullApiSchemaTicketCustomerChannel2>;
  data: GorgiasFullApiSchemaJsonValue;
  customer: GorgiasFullApiSchemaJsonValue;
  integrations: {};
  external_id: string;
  note: string;
  external_data?: {
  readonly [key: string]: {} | undefined;
};
  ecommerce_data?: {
  readonly [key: string]: GorgiasFullApiSchemaShopperEcommerceData2 | undefined;
};
};

export type GorgiasFullApiSchemaTicketUser3 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
  bio: string;
};

export type GorgiasFullApiSchemaTicketSummary3 = {
  content: string;
  created_datetime: string;
  updated_datetime: string;
  triggered_by: number;
};

export type GorgiasFullApiSchemaTicketMeta3 = GorgiasFullApiSchemaJsonValue;

export type GorgiasFullApiSchemaTicketTag3 = {
  id: number;
  name: string;
  decoration: GorgiasFullApiSchemaTicketTagDecoration3;
};

export type GorgiasFullApiSchemaTicketCustomFieldValue6 = {
  field?: GorgiasFullApiSchemaTicketCustomField6;
  id?: number;
  prediction?: GorgiasFullApiSchemaJsonValue;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessage7 = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug4 | string);
  via: GorgiasFullApiSchemaTicketVia4;
  source: GorgiasFullApiSchemaTicketMessageSource7;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer7;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity7;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent7>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer7;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment7>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro7>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError7;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo7;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo7;
};

export type GorgiasFullApiSchemaTicketSatisfactionSurvey2 = {
  id: number;
  customer_id: number;
  ticket_id: number;
  sent_datetime: string;
  scored_datetime: string;
  should_send_datetime: string;
  created_datetime: string;
  score: number;
  body_text: string;
  meta: {};
};

export type GorgiasFullApiSchemaTicketReplyOption2 = {
  answerable: boolean;
  reason?: string;
  integrations?: ReadonlyArray<GorgiasFullApiSchemaTicketReplyOptionIntegration2>;
};

export type GorgiasFullApiSchemaUpdateTicketAssigneeTeam = {
  id?: number;
};

export type GorgiasFullApiSchemaUpdateTicketAssigneeUser = {
  id?: number;
};

export type GorgiasFullApiSchemaLegacyChannelSlug5 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaUpdateTicketCustomField = {
  id: number;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaUpdateTicketCustomer = {
  id?: number;
  email?: string;
  name?: string;
};

export type GorgiasFullApiSchemaTicketPriority3 = "critical" | "high" | "normal" | "low";

export type GorgiasFullApiSchemaTicketStatus4 = "open" | "closed";

export type GorgiasFullApiSchemaUpdateTicketTag = {
  name: string;
  decoration?: GorgiasFullApiSchemaUpdateTicketTagDecoration;
};

export type GorgiasFullApiSchemaTicketEvent3 = {
  id: number;
  type: string;
  user: GorgiasFullApiSchemaTicketEventUser3;
  data: {};
  created_datetime: string;
};

export type GorgiasFullApiSchemaTicketVia5 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketCustomer3 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
  channels: ReadonlyArray<GorgiasFullApiSchemaTicketCustomerChannel3>;
  data: GorgiasFullApiSchemaJsonValue;
  customer: GorgiasFullApiSchemaJsonValue;
  integrations: {};
  external_id: string;
  note: string;
  external_data?: {
  readonly [key: string]: {} | undefined;
};
  ecommerce_data?: {
  readonly [key: string]: GorgiasFullApiSchemaShopperEcommerceData3 | undefined;
};
};

export type GorgiasFullApiSchemaTicketUser4 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
  bio: string;
};

export type GorgiasFullApiSchemaTicketSummary4 = {
  content: string;
  created_datetime: string;
  updated_datetime: string;
  triggered_by: number;
};

export type GorgiasFullApiSchemaTicketMeta4 = GorgiasFullApiSchemaJsonValue;

export type GorgiasFullApiSchemaTicketTag4 = {
  id: number;
  name: string;
  decoration: GorgiasFullApiSchemaTicketTagDecoration4;
};

export type GorgiasFullApiSchemaTicketCustomFieldValue7 = {
  field?: GorgiasFullApiSchemaTicketCustomField7;
  id?: number;
  prediction?: GorgiasFullApiSchemaJsonValue;
  value: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessage8 = {
  id: number;
  uri: string;
  message_id: string;
  ticket_id: number;
  external_id: string;
  public?: boolean;
  channel: (GorgiasFullApiSchemaLegacyChannelSlug5 | string);
  via: GorgiasFullApiSchemaTicketVia5;
  source: GorgiasFullApiSchemaTicketMessageSource8;
  sender: GorgiasFullApiSchemaTicketMessageUserOrCustomer8;
  auth_customer_identity: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity8;
  integration_id: number;
  intents: ReadonlyArray<GorgiasFullApiSchemaTicketMessageIntent8>;
  rule_id: number;
  from_agent: boolean;
  receiver: GorgiasFullApiSchemaTicketMessageUserOrCustomer8;
  subject: string;
  body_text: string;
  body_html: string;
  stripped_text: string;
  stripped_html: string;
  stripped_signature: string;
  attachments: ReadonlyArray<GorgiasFullApiSchemaTicketMessageAttachment8>;
  macros?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageMacro8>;
  actions: ReadonlyArray<{}>;
  headers?: {};
  imported: boolean;
  meta: GorgiasFullApiSchemaJsonValue;
  created_datetime: string;
  processed_datetime: string;
  deleted_datetime?: string;
  sent_datetime: string;
  failed_datetime: string;
  opened_datetime: string;
  last_sending_error: GorgiasFullApiSchemaTicketMessageSendingError8;
  is_retriable: boolean;
  replied_by?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo8;
  replied_to?: GorgiasFullApiSchemaTicketMessageRepliedByOrTo8;
};

export type GorgiasFullApiSchemaTicketSatisfactionSurvey3 = {
  id: number;
  customer_id: number;
  ticket_id: number;
  sent_datetime: string;
  scored_datetime: string;
  should_send_datetime: string;
  created_datetime: string;
  score: number;
  body_text: string;
  meta: {};
};

export type GorgiasFullApiSchemaTicketReplyOption3 = {
  answerable: boolean;
  reason?: string;
  integrations?: ReadonlyArray<GorgiasFullApiSchemaTicketReplyOptionIntegration3>;
};

export type GorgiasFullApiSchemaTicketCustomField = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaEventObjectType;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  requirement_type: GorgiasFullApiSchemaRequirementType2;
  managed_type?: GorgiasFullApiSchemaManagedTicketFieldType6;
  definition: (GorgiasFullApiSchemaDefinitionNumber | GorgiasFullApiSchemaDefinitionText | GorgiasFullApiSchemaDefinitionBoolean);
  created_datetime: string;
  updated_datetime?: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaUpdateTicketCustomFieldValue = {
  id: number;
  value: (string | boolean | number | number);
};

export type GorgiasFullApiSchemaTicketCustomField2 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaEventObjectType2;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  requirement_type: GorgiasFullApiSchemaRequirementType3;
  managed_type?: GorgiasFullApiSchemaManagedTicketFieldType7;
  definition: (GorgiasFullApiSchemaDefinitionNumber2 | GorgiasFullApiSchemaDefinitionText2 | GorgiasFullApiSchemaDefinitionBoolean2);
  created_datetime: string;
  updated_datetime?: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaTicketCustomField3 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaEventObjectType3;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  requirement_type: GorgiasFullApiSchemaRequirementType4;
  managed_type?: GorgiasFullApiSchemaManagedTicketFieldType8;
  definition: (GorgiasFullApiSchemaDefinitionNumber3 | GorgiasFullApiSchemaDefinitionText3 | GorgiasFullApiSchemaDefinitionBoolean3);
  created_datetime: string;
  updated_datetime?: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaLegacyChannelSlug6 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaTicketVia6 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketMessageSource2 = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress2>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress2>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress2>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress2;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer2 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity2 = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService2;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent2 = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment2 = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro2 = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError2 = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo2 = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource2;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer2;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer2;
};

export type GorgiasFullApiSchemaCreateMessageAttachment = {
  url: string;
  name: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>);
};

export type GorgiasFullApiSchemaLegacyChannelSlug7 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaCreateMessageLastSendingError = {
  error: string;
};

export type GorgiasFullApiSchemaCreateMessageMacro = {
  id: number;
};

export type GorgiasFullApiSchemaCreateMessageMeta = {
  relevant_content_indexes?: ReadonlyArray<number>;
  readonly [key: string]: GorgiasFullApiSchemaJsonValue | ReadonlyArray<number> | undefined;
};

export type GorgiasFullApiSchemaCreateMessageSource = {
  type?: GorgiasFullApiSchemaTicketMessageSourceType;
  from?: GorgiasFullApiSchemaCreateMessageSourcePerson;
  to?: ReadonlyArray<GorgiasFullApiSchemaCreateMessageSourcePerson>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaCreateMessageSourcePerson>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaCreateMessageSourcePerson>;
  extra?: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>);
};

export type GorgiasFullApiSchemaCreateMessageCustomerOrUser = {
  id?: number;
  email?: string;
  name?: string;
  external_id?: string;
  note?: string;
  timezone?: string;
  language?: string;
  meta?: {};
  channels?: ReadonlyArray<GorgiasFullApiSchemaCreateMessageCustomerChannel>;
};

export type GorgiasFullApiSchemaTicketVia7 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketMessageSource3 = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress3>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress3>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress3>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress3;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer3 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity3 = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService3;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent3 = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment3 = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro3 = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError3 = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo3 = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource3;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer3;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer3;
};

export type GorgiasFullApiSchemaLegacyChannelSlug8 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaTicketVia8 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketMessageSource4 = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress4>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress4>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress4>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress4;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer4 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity4 = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService4;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent4 = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment4 = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro4 = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError4 = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo4 = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource4;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer4;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer4;
};

export type GorgiasFullApiSchemaLegacyChannelSlug9 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";

export type GorgiasFullApiSchemaTicketVia9 = "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "gorgias_chat" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "offline_capture" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";

export type GorgiasFullApiSchemaTicketMessageSource5 = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress5>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress5>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress5>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress5;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer5 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity5 = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService5;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent5 = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment5 = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro5 = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError5 = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo5 = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource5;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer5;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer5;
};

export type GorgiasFullApiSchemaViewDecoration = {
  emoji?: string;
};

export type GorgiasFullApiSchemaViewField = "id" | "details" | "tags" | "customer" | "last_message" | "name" | "email" | "created" | "updated" | "assignee" | "assignee_team" | "channel" | "closed" | "language" | "last_received_message" | "integrations" | "snooze" | "status" | "subject" | "priority";

export type GorgiasFullApiSchemaViewSharedWithTeam = {
  id: number;
  name: string;
  decoration?: {};
};

export type GorgiasFullApiSchemaViewSharedWithUser = {
  id: number;
  name: string;
  meta?: {};
};

export type GorgiasFullApiSchemaViewType = "ticket-list" | "customer-list";

export type GorgiasFullApiSchemaViewVisibility = "public" | "shared" | "private";

export type GorgiasFullApiSchemaViewDecoration2 = {
  emoji?: string;
};

export type GorgiasFullApiSchemaViewField2 = "id" | "details" | "tags" | "customer" | "last_message" | "name" | "email" | "created" | "updated" | "assignee" | "assignee_team" | "channel" | "closed" | "language" | "last_received_message" | "integrations" | "snooze" | "status" | "subject" | "priority";

export type GorgiasFullApiSchemaViewType2 = "ticket-list" | "customer-list";

export type GorgiasFullApiSchemaViewVisibility2 = "public" | "shared" | "private";

export type GorgiasFullApiSchemaViewSharedWithTeam2 = {
  id: number;
  name: string;
  decoration?: {};
};

export type GorgiasFullApiSchemaViewSharedWithUser2 = {
  id: number;
  name: string;
  meta?: {};
};

export type GorgiasFullApiSchemaViewDecoration3 = {
  emoji?: string;
};

export type GorgiasFullApiSchemaViewField3 = "id" | "details" | "tags" | "customer" | "last_message" | "name" | "email" | "created" | "updated" | "assignee" | "assignee_team" | "channel" | "closed" | "language" | "last_received_message" | "integrations" | "snooze" | "status" | "subject" | "priority";

export type GorgiasFullApiSchemaViewSharedWithTeam3 = {
  id: number;
  name: string;
  decoration?: {};
};

export type GorgiasFullApiSchemaViewSharedWithUser3 = {
  id: number;
  name: string;
  meta?: {};
};

export type GorgiasFullApiSchemaViewType3 = "ticket-list" | "customer-list";

export type GorgiasFullApiSchemaViewVisibility3 = "public" | "shared" | "private";

export type GorgiasFullApiSchemaViewDecoration4 = {
  emoji?: string;
};

export type GorgiasFullApiSchemaViewField4 = "id" | "details" | "tags" | "customer" | "last_message" | "name" | "email" | "created" | "updated" | "assignee" | "assignee_team" | "channel" | "closed" | "language" | "last_received_message" | "integrations" | "snooze" | "status" | "subject" | "priority";

export type GorgiasFullApiSchemaViewType4 = "ticket-list" | "customer-list";

export type GorgiasFullApiSchemaViewVisibility4 = "public" | "shared" | "private";

export type GorgiasFullApiSchemaViewSharedWithTeam4 = {
  id: number;
  name: string;
  decoration?: {};
};

export type GorgiasFullApiSchemaViewSharedWithUser4 = {
  id: number;
  name: string;
  meta?: {};
};

export type GorgiasFullApiSchemaTextInputSettings = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaTextInputSettings2 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings2 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings2 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings2 = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaRequirementType = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaTextInputSettings3 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings3 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings3 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings3 = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaTextInputSettings4 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings4 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings4 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings4 = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaTextInputSettings5 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings5 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings5 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings5 = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaObjectType6 = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedCustomerFieldType6 = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition6 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings6 | GorgiasFullApiSchemaDropdownInputSettingsSettings6);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition6 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings6;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition6 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings6;
};

export type GorgiasFullApiSchemaObjectType7 = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedCustomerFieldType7 = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition7 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings7 | GorgiasFullApiSchemaDropdownInputSettingsSettings7);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition7 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings7;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition7 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings7;
};

export type GorgiasFullApiSchemaObjectType8 = "Ticket" | "Customer";

export type GorgiasFullApiSchemaManagedCustomerFieldType8 = "customer_type";

export type GorgiasFullApiSchemaTextDataTypeDefinition8 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaTextInputSettings8 | GorgiasFullApiSchemaDropdownInputSettingsSettings8);
};

export type GorgiasFullApiSchemaNumberDataTypeDefinition8 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaNumberInputSettings8;
};

export type GorgiasFullApiSchemaBooleanDataTypeDefinition8 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaBooleanDropdownInputSettings8;
};

export type GorgiasFullApiSchemaArchiveMacroAsUserStatusEnum = "archived" | "not_found" | "already_archived" | "macro_used";

export type GorgiasFullApiSchemaMacroUsageError = {
  data: GorgiasFullApiSchemaMacroUsageErrorData;
  msg: string;
};

export type GorgiasFullApiSchemaUnarchiveMacroAsUserStatusEnum = "unarchived" | "not_found" | "already_not_archived";

export type GorgiasFullApiSchemaTicketMessageSourceAddress = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaMetricCardSlugEnum2 = "abandoned-calls" | "accuracy" | "achievement-rate" | "agents-offline" | "agents-online" | "ai-agent-automation-rate" | "ai-agent-average-csat" | "ai-agent-closed-tickets" | "all-used-tags-all" | "all-used-tags-all-created" | "all-used-values" | "all-used-values-created" | "article-views" | "assigned-open-tickets" | "automated-interactions" | "average-csat" | "average-discount-amount" | "average-order-value" | "average-survey-score" | "average-talk-time" | "average-ticket-handle-time" | "average-wait-time" | "brand-voice" | "buy-through-rate" | "callback-requests" | "calls-in-queue" | "cancelled-calls" | "click-through-rate" | "closed-tickets" | "closed-tickets-per-hour" | "comment-highlights" | "communication-skills" | "contribution-to-total-sales" | "conversion-rate" | "coverage-rate" | "created-tickets" | "decrease-in-frt" | "decrease-in-resolution-time" | "discount-codes-applied" | "discount-usage" | "discounts-offered" | "efficiency" | "first-response-time" | "handover-interactions" | "human-response-time-after-ai-handoff" | "inbound-answered-per-agent" | "inbound-calls" | "inbound-declined" | "inbound-transferred" | "internal-compliance" | "language-proficiency" | "live-messages-sent" | "live-online-status" | "live-open-tickets" | "live-tickets-closed" | "live-tickets-created" | "live-tickets-replied" | "median-purchase-time" | "median-response-time" | "messages-per-ticket" | "messages-received" | "messages-sent" | "messages-sent-per-hour" | "messages-sent-per-macro" | "missed-calls" | "no-search-results-search-count" | "one-touch-tickets" | "online-time" | "open-tickets" | "orders-influenced" | "outbound-calls" | "overall-automation-rate" | "percent-abandoned-calls" | "percent-callback-requests" | "percent-cancelled-calls" | "percent-missed-calls" | "percent-sla-achievement-rate" | "percentage-of-closed-tickets" | "percentage-of-created-tickets" | "performance-per-article-views" | "product-recommendations" | "resolution-completeness" | "resolution-time" | "response-rate" | "revenue-per-interaction" | "reviewed-tickets" | "satisfaction-score" | "search-results" | "search-terms-with-results-articles-clicked" | "search-terms-with-results-click-through-rate" | "search-terms-with-results-search-count" | "searches" | "sla-achievement-rate" | "success-rate" | "surveys-sent" | "ticket-handle-time-per-agent" | "tickets-replied" | "tickets-replied-per-hour" | "tickets-with-achieved-slas" | "tickets-with-breached-slas" | "time-saved-by-agent" | "top-performer-frt" | "top-performers-closed-tickets" | "top-performers-csat" | "top-performers-resolution-time" | "top-used-tags-all" | "top-used-tags-all-created" | "top-used-tags-all-created-trend" | "top-used-tags-all-trend" | "top-used-values" | "top-used-values-created" | "top-used-values-created-trend" | "top-used-values-trend" | "total-calls" | "total-sales" | "unanswered-calls" | "unassigned-open-tickets" | "wait-time-per-call" | "zero-touch-tickets";

export type GorgiasFullApiSchemaMetricCardPublic2 = {
  definition: string;
  formula: string;
  computation_logic: ReadonlyArray<string>;
};

export type GorgiasFullApiSchemaMetricCardApiMapping2 = {
  scope: string;
  measures?: ReadonlyArray<string>;
  dimensions?: ReadonlyArray<string>;
  filters?: ReadonlyArray<GorgiasFullApiSchemaMetricCardApiFilter2>;
};

export type GorgiasFullApiSchemaMetricCardRef2 = {
  slug: string;
  url: string;
};

export type GorgiasFullApiSchemaMetricCardApiFilter = {
  member: string;
  values: ReadonlyArray<string>;
};

export type GorgiasFullApiSchemaTicketsClosedFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaBaseReportingStatsCustomFilterItem = {
  member: "customFields";
  values: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsCustomFilterValueItem>;
};

export type GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItem = {
  member: "tags";
  values: ReadonlyArray<GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItemValue>;
};

export type GorgiasFullApiSchemaTicketsClosedTimeDimension = {
  dimension: "closedDatetime" | "createdDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaTicketsCreatedFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTicketsCreatedTimeDimension = {
  dimension: "createdDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaTicketsOpenFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTicketsOpenTimeDimension = {
  dimension: "createdDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaTicketsRepliedFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTicketsRepliedTimeDimension = {
  dimension: "createdDatetime" | "sentDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaOneTouchTicketsFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaOneTouchTicketsTimeDimension = {
  dimension: "createdDatetime" | "closedDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaZeroTouchTicketsFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaZeroTouchTicketsTimeDimension = {
  dimension: "createdDatetime" | "closedDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaSatisfactionSurveysFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaSatisfactionSurveysTimeDimension = {
  dimension: "createdDatetime" | "sentDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaResolutionTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaResolutionTimeTimeDimension = {
  dimension: "createdDatetime" | "periodStart" | "closedDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaMessagesSentFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaMessagesSentTimeDimension = {
  dimension: "sentDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaFirstResponseTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaFirstResponseTimeTimeDimension = {
  dimension: "createdDatetime" | "firstAgentMessageDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaHumanFirstResponseTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaHumanFirstResponseTimeTimeDimension = {
  dimension: "createdDatetime" | "firstAgentMessageDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaResponseTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaResponseTimeTimeDimension = {
  dimension: "createdDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaMessagesPerTicketFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaMessagesPerTicketTimeDimension = {
  dimension: "createdDatetime" | "closedDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaTicketHandleTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTicketHandleTimeTimeDimension = {
  dimension: "createdDatetime" | "closedDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaOnlineTimeFilterItem = {
  member: "agentId" | "periodStart" | "periodEnd" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaBaseReportingStatsTimeDimension = {
  dimension: GorgiasFullApiSchemaReportingStatsTimeDimensionsEnum;
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaTagsFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "createdDatetime" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTagsTimeDimension = {
  dimension: "timestamp";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaTicketFieldsFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "integrationId" | "storeId" | "customFieldId" | "productId" | "createdDatetime" | "customFieldValueString" | "integrationChannelPair" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "score" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTicketFieldsTimeDimension = {
  dimension: "updatedDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAutoQAFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "status" | "ticketQAScorerUserId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaMessagesReceivedFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaMessagesReceivedTimeDimension = {
  dimension: "sentDatetime" | "periodStart";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaWorkloadTicketsFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "score" | "integrationId" | "communicationSkills" | "languageProficiency" | "resolutionCompleteness" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaVoiceCallsFilterItem = {
  member: "periodStart" | "periodEnd" | "integrationId" | "agentId" | "queueId" | "isDuringBusinessHours" | "callTerminationStatus" | "callDirection" | "storeId" | "displayStatus" | "callSlaStatus" | "talkTime" | "waitTime" | "isAnsweredByAgent" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaVoiceAgentEventsFilterItem = {
  member: "periodStart" | "periodEnd" | "integrationId" | "agentId" | "transferredCalls" | "declinedCalls" | "storeId" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTicketSlaFilterItem = {
  member: "periodStart" | "periodEnd" | "agentId" | "teamId" | "channel" | "integrationId" | "storeId" | "status" | "slaPolicyUuid" | "score" | "resolutionCompleteness" | "communicationSkills" | "languageProficiency" | "accuracy" | "efficiency" | "internalCompliance" | "brandVoice" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTicketSlaTimeDimension = {
  dimension: "anchorDatetime" | "periodStart" | "createdDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaKnowledgeInsightsFilterItem = {
  member: "periodStart" | "periodEnd" | "storeId" | "resourceSourceId" | "resourceSourceSetId" | "resourceVersion" | "customFieldId" | "customFieldValueString";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaReportingStatsDimensionsEnum = "agentId" | "filteringAgentId" | "assignedAgentId" | "integrationId" | "ticketId" | "channel" | "surveyScore" | "resolutionTime" | "firstResponseTime" | "messagesCount" | "handleTime" | "storeId" | "tagId" | "eventType" | "customFieldValue" | "customFieldTop2LevelsValue" | "queueId" | "customerId" | "createdDatetime" | "status" | "duration" | "source" | "destination" | "callDirection" | "talkTime" | "waitTime" | "voicemailAvailable" | "voicemailUrl" | "callRecordingAvailable" | "callRecordingUrl" | "displayStatus" | "queueName" | "transferTargetAgentId" | "transferTargetExternalNumber" | "transferType" | "transferTargetQueueId" | "resourceType" | "resourceSourceId" | "resourceSourceSetId" | "resourceVersion" | "isPossibleSpam" | "callSlaStatus" | "callSlaStatusLabel" | "statusName" | "campaignId" | "abVariant" | "articleId" | "articleTitle" | "articleSlug" | "localeCodes" | "searchQuery" | "helpCenterEventType" | "searchResultRange" | "currency" | "influencedProductId" | "productId" | "storeIntegrationId" | "engagementType" | "orderId" | "totalAmount" | "purchaseTime" | "automationFeatureType" | "aiAgentRole" | "orderManagementType" | "customField" | "discountAmount" | "discountCodeOffered" | "discountCodeUsed" | "attributedRevenue" | "productRecommended" | "productVariantIds" | "boughtProducts" | "aiIntentCustomField" | "aiOutcomeCustomField" | "flowId" | "macroId" | "macroName" | "ticketQAScorerUserId";

export type GorgiasFullApiSchemaVoiceCallsSummaryFilterItem = {
  member: "periodStart" | "periodEnd" | "integrationId" | "agentId" | "queueId" | "isDuringBusinessHours" | "agentIdFromTeamId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiSalesAgentOrdersPerformanceFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "engagementType" | "currency" | "orderId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiSalesAgentOrdersPerformanceTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiSalesAgentDiscountsFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "engagementType" | "currency";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiSalesAgentDiscountsTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiSalesAgentActivityFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "engagementType" | "productId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiSalesAgentActivityTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaOverallAutomationRateFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "automationFeatureType" | "aiAgentRole";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaOverallAutomationRateTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAIAgentAutomatedInteractionsFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "aiAgentRole" | "engagementType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAIAgentAutomatedInteractionsTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaOverallAutomatedInteractionsFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "automationFeatureType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaOverallAutomatedInteractionsTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaHandoverInteractionsFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "automationFeatureType" | "aiAgentRole" | "engagementType" | "resourceSourceId" | "resourceSourceSetId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaHandoverInteractionsTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiSalesAgentBuyThroughRateFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "engagementType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiSalesAgentBuyThroughRateTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiSalesAgentConversionRateFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "engagementType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiSalesAgentConversionRateTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiAgentCoverageRateFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "aiAgentRole" | "storeIntegrationId" | "engagementType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiAgentCoverageRateTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiAgentSuccessRateFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "aiAgentRole" | "storeIntegrationId" | "engagementType" | "resourceSourceId" | "resourceSourceSetId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiAgentSuccessRateTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaOverallTimeSavedByAgentFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "automationFeatureType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaOverallTimeSavedByAgentTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaTimeSavedByAiAgentFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "aiAgentRole" | "engagementType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaTimeSavedByAiAgentTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiAgentTicketFieldsFilterItem = {
  member: "periodStart" | "periodEnd" | "aiAgentRole" | "channel" | "storeIntegrationId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiAgentTicketFieldsTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaOverallDecreaseInResolutionTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "automationFeatureType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaOverallDecreaseInResolutionTimeTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAIAgentDecreaseInResolutionTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "aiAgentRole";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAIAgentDecreaseInResolutionTimeTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaFlowDatasetFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaFlowDatasetTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAiAgentCsatFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "aiAgentRole" | "storeIntegrationId" | "engagementType" | "resourceSourceId" | "resourceSourceSetId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAiAgentCsatTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaOverallDecreaseInFirstResponseTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "storeIntegrationId" | "automationFeatureType";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaOverallDecreaseInFirstResponseTimeTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaAIAgentDecreaseInFirstResponseTimeFilterItem = {
  member: "periodStart" | "periodEnd" | "channel" | "aiAgentRole" | "engagementType" | "storeIntegrationId";
  operator: GorgiasFullApiSchemaReportingStatsOperatorsEnum;
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaAIAgentDecreaseInFirstResponseTimeTimeDimension = {
  dimension: "eventDatetime";
  granularity: GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum;
};

export type GorgiasFullApiSchemaReportingStatsScopesEnum = "tickets-closed" | "tickets-created" | "tickets-open" | "tickets-replied" | "one-touch-tickets" | "zero-touch-tickets" | "satisfaction-surveys" | "resolution-time" | "messages-sent" | "first-response-time" | "human-first-response-time" | "response-time" | "messages-per-ticket" | "ticket-handle-time" | "online-time" | "tags" | "auto-qa" | "messages-received" | "messages-sent-per-macro" | "automation-rate" | "workload-tickets" | "automated-interactions" | "ticket-fields" | "voice-calls" | "voice-agent-events" | "ticket-sla" | "knowledge-insights" | "voice-calls-summary" | "voice-queue-exposure" | "user-availability-tracking" | "convert-campaign-events" | "convert-order-conversion" | "convert-campaign-order-events" | "help-center" | "ai-sales-agent-orders" | "ai-sales-agent-conversations" | "overall-automation-rate" | "ai-agent-automated-interactions" | "overall-automated-interactions" | "handover-interactions" | "ai-sales-agent-orders-performance" | "ai-sales-agent-discounts" | "ai-sales-agent-activity" | "ai-sales-agent-buy-through-rate" | "ai-sales-agent-conversion-rate" | "ai-agent-coverage-rate" | "ai-agent-success-rate" | "overall-time-saved-by-agent" | "ai-agent-time-saved" | "ai-agent-tickets-closed" | "ai-agent-ticket-fields" | "overall-decrease-in-resolution-time" | "ai-agent-decrease-in-resolution-time" | "flow-dataset" | "ai-agent-csat" | "overall-decrease-in-first-response-time" | "ai-agent-decrease-in-first-response-time" | "revenue";

export type GorgiasFullApiSchemaIntegrationType = "aircall" | "alloy" | "app" | "bigcommerce" | "ecom" | "email" | "facebook" | "gmail" | "gorgias_chat" | "http" | "klaviyo" | "magento2" | "outlook" | "phone" | "recharge" | "self_service" | "shopify" | "smile" | "smooch" | "smooch_inside" | "sms" | "twitter" | "whatsapp" | "yotpo" | "zendesk";

export type GorgiasFullApiSchemaTicketTagDecoration = {
  color?: string;
};

export type GorgiasFullApiSchemaTicketCustomField4 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaEventObjectType4;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  requirement_type: GorgiasFullApiSchemaRequirementType5;
  managed_type?: GorgiasFullApiSchemaManagedTicketFieldType9;
  definition: (GorgiasFullApiSchemaDefinitionNumber4 | GorgiasFullApiSchemaDefinitionText4 | GorgiasFullApiSchemaDefinitionBoolean4);
  created_datetime: string;
  updated_datetime?: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaCreateTicketMessageAttachment = {
  url: string;
  name: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>);
};

export type GorgiasFullApiSchemaCreateTicketMessageLastSendingError = {
  error: string;
};

export type GorgiasFullApiSchemaCreateTicketMessageMacro = {
  id: number;
};

export type GorgiasFullApiSchemaCreateTicketMessageMeta = {
  relevant_content_indexes?: ReadonlyArray<number>;
  readonly [key: string]: GorgiasFullApiSchemaJsonValue | ReadonlyArray<number> | undefined;
};

export type GorgiasFullApiSchemaCreateTicketMessageSource = {
  type?: GorgiasFullApiSchemaTicketMessageSourceType2;
  from?: GorgiasFullApiSchemaCreateTicketMessageSourcePerson;
  to?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketMessageSourcePerson>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketMessageSourcePerson>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketMessageSourcePerson>;
  extra?: (string | number | number | boolean | {} | ReadonlyArray<GorgiasFullApiSchemaJsonValue>);
};

export type GorgiasFullApiSchemaCreateTicketMessageCustomerOrUser = {
  id?: number;
  email?: string;
  name?: string;
  external_id?: string;
  note?: string;
  timezone?: string;
  language?: string;
  meta?: {};
  channels?: ReadonlyArray<GorgiasFullApiSchemaCreateTicketMessageCustomerChannel>;
};

export type GorgiasFullApiSchemaCreateTicketTagDecoration = {
  color?: string;
};

export type GorgiasFullApiSchemaTicketEventUser = {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  email: string;
};

export type GorgiasFullApiSchemaTicketCustomerChannel = {
  id: number;
  type: string;
  address: string;
  preferred?: boolean;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
  user: GorgiasFullApiSchemaTicketCustomerChannelCustomer;
  customer: GorgiasFullApiSchemaTicketCustomerChannelCustomer;
};

export type GorgiasFullApiSchemaShopperEcommerceData = {
  store: GorgiasFullApiSchemaStore;
  shopper: GorgiasFullApiSchemaShopper;
  orders: ReadonlyArray<GorgiasFullApiSchemaOrder>;
  addresses: ReadonlyArray<GorgiasFullApiSchemaShopperAddress>;
};

export type GorgiasFullApiSchemaTicketTagDecoration2 = {
  color?: string;
};

export type GorgiasFullApiSchemaTicketCustomField5 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaEventObjectType5;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  requirement_type: GorgiasFullApiSchemaRequirementType6;
  managed_type?: GorgiasFullApiSchemaManagedTicketFieldType10;
  definition: (GorgiasFullApiSchemaDefinitionNumber5 | GorgiasFullApiSchemaDefinitionText5 | GorgiasFullApiSchemaDefinitionBoolean5);
  created_datetime: string;
  updated_datetime?: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaTicketMessageSource6 = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress6>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress6>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress6>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress6;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer6 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity6 = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService6;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent6 = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment6 = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro6 = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError6 = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo6 = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource6;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer6;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer6;
};

export type GorgiasFullApiSchemaTicketReplyOptionIntegration = {
  id: number;
  name: string;
  address: string;
};

export type GorgiasFullApiSchemaTicketEventUser2 = {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  email: string;
};

export type GorgiasFullApiSchemaTicketCustomerChannel2 = {
  id: number;
  type: string;
  address: string;
  preferred?: boolean;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
  user: GorgiasFullApiSchemaTicketCustomerChannelCustomer2;
  customer: GorgiasFullApiSchemaTicketCustomerChannelCustomer2;
};

export type GorgiasFullApiSchemaShopperEcommerceData2 = {
  store: GorgiasFullApiSchemaStore2;
  shopper: GorgiasFullApiSchemaShopper2;
  orders: ReadonlyArray<GorgiasFullApiSchemaOrder2>;
  addresses: ReadonlyArray<GorgiasFullApiSchemaShopperAddress2>;
};

export type GorgiasFullApiSchemaTicketTagDecoration3 = {
  color?: string;
};

export type GorgiasFullApiSchemaTicketCustomField6 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaEventObjectType6;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  requirement_type: GorgiasFullApiSchemaRequirementType7;
  managed_type?: GorgiasFullApiSchemaManagedTicketFieldType11;
  definition: (GorgiasFullApiSchemaDefinitionNumber6 | GorgiasFullApiSchemaDefinitionText6 | GorgiasFullApiSchemaDefinitionBoolean6);
  created_datetime: string;
  updated_datetime?: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaTicketMessageSource7 = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress7>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress7>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress7>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress7;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer7 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity7 = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService7;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent7 = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment7 = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro7 = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError7 = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo7 = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource7;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer7;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer7;
};

export type GorgiasFullApiSchemaTicketReplyOptionIntegration2 = {
  id: number;
  name: string;
  address: string;
};

export type GorgiasFullApiSchemaUpdateTicketTagDecoration = {
  color?: string;
};

export type GorgiasFullApiSchemaTicketEventUser3 = {
  id: number;
  firstname: string;
  lastname: string;
  name: string;
  email: string;
};

export type GorgiasFullApiSchemaTicketCustomerChannel3 = {
  id: number;
  type: string;
  address: string;
  preferred?: boolean;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
  user: GorgiasFullApiSchemaTicketCustomerChannelCustomer3;
  customer: GorgiasFullApiSchemaTicketCustomerChannelCustomer3;
};

export type GorgiasFullApiSchemaShopperEcommerceData3 = {
  store: GorgiasFullApiSchemaStore3;
  shopper: GorgiasFullApiSchemaShopper3;
  orders: ReadonlyArray<GorgiasFullApiSchemaOrder3>;
  addresses: ReadonlyArray<GorgiasFullApiSchemaShopperAddress3>;
};

export type GorgiasFullApiSchemaTicketTagDecoration4 = {
  color?: string;
};

export type GorgiasFullApiSchemaTicketCustomField7 = {
  id: number;
  external_id?: string;
  object_type: GorgiasFullApiSchemaEventObjectType7;
  label: string;
  description?: string;
  priority: number;
  required: boolean;
  requirement_type: GorgiasFullApiSchemaRequirementType8;
  managed_type?: GorgiasFullApiSchemaManagedTicketFieldType12;
  definition: (GorgiasFullApiSchemaDefinitionNumber7 | GorgiasFullApiSchemaDefinitionText7 | GorgiasFullApiSchemaDefinitionBoolean7);
  created_datetime: string;
  updated_datetime?: string;
  deactivated_datetime?: string;
};

export type GorgiasFullApiSchemaTicketMessageSource8 = {
  type: string;
  to?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress8>;
  cc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress8>;
  bcc?: ReadonlyArray<GorgiasFullApiSchemaTicketMessageSourceAddress8>;
  from?: GorgiasFullApiSchemaTicketMessageSourceAddress8;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageUserOrCustomer8 = {
  id: number;
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  meta: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentity8 = {
  service: GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService8;
  identifier: string;
};

export type GorgiasFullApiSchemaTicketMessageIntent8 = {
  name: string;
  rejected: boolean;
  is_user_feedback: boolean;
};

export type GorgiasFullApiSchemaTicketMessageAttachment8 = {
  url: string;
  name?: string;
  size?: number;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
};

export type GorgiasFullApiSchemaTicketMessageMacro8 = {
  id: number;
};

export type GorgiasFullApiSchemaTicketMessageSendingError8 = {
  error: string;
};

export type GorgiasFullApiSchemaTicketMessageRepliedByOrTo8 = {
  integration_id: number;
  message_id: string;
  created_datetime: string;
  body_text: string;
  source: GorgiasFullApiSchemaTicketMessageSource8;
  customer: GorgiasFullApiSchemaTicketMessageUserOrCustomer8;
  user: GorgiasFullApiSchemaTicketMessageUserOrCustomer8;
};

export type GorgiasFullApiSchemaTicketReplyOptionIntegration3 = {
  id: number;
  name: string;
  address: string;
};

export type GorgiasFullApiSchemaEventObjectType = "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";

export type GorgiasFullApiSchemaRequirementType2 = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaManagedTicketFieldType6 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaDefinitionNumber = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaInputSettingsNumber;
};

export type GorgiasFullApiSchemaDefinitionText = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaInputSettingsText | GorgiasFullApiSchemaInputSettingsDropdownStr);
};

export type GorgiasFullApiSchemaDefinitionBoolean = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaInputSettingsDropdownBool;
};

export type GorgiasFullApiSchemaEventObjectType2 = "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";

export type GorgiasFullApiSchemaRequirementType3 = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaManagedTicketFieldType7 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaDefinitionNumber2 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaInputSettingsNumber2;
};

export type GorgiasFullApiSchemaDefinitionText2 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaInputSettingsText2 | GorgiasFullApiSchemaInputSettingsDropdownStr2);
};

export type GorgiasFullApiSchemaDefinitionBoolean2 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaInputSettingsDropdownBool2;
};

export type GorgiasFullApiSchemaEventObjectType3 = "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";

export type GorgiasFullApiSchemaRequirementType4 = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaManagedTicketFieldType8 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaDefinitionNumber3 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaInputSettingsNumber3;
};

export type GorgiasFullApiSchemaDefinitionText3 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaInputSettingsText3 | GorgiasFullApiSchemaInputSettingsDropdownStr3);
};

export type GorgiasFullApiSchemaDefinitionBoolean3 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaInputSettingsDropdownBool3;
};

export type GorgiasFullApiSchemaTicketMessageSourceAddress2 = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService2 = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaTicketMessageSourceType = "aircall" | "api" | "app" | "custom-chat" | "chat" | "chat-contact-form" | "chat-offline-capture" | "contact-form" | "email" | "facebook" | "facebook-comment" | "facebook-mention-comment" | "facebook-mention-post" | "facebook-message" | "facebook-messenger" | "facebook-post" | "facebook-review" | "facebook-review-comment" | "form" | "google-business-messages" | "help-center" | "help-center-contact-form" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-ad-media" | "instagram-comment" | "instagram-direct-message" | "instagram-media" | "instagram-mention-comment" | "instagram-mention-media" | "internal-note" | "ottspott-call" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "system-message" | "tiktok-shop" | "twilio" | "twitter-direct-message" | "twitter-mention-tweet" | "twitter-quoted-tweet" | "twitter-tweet" | "whatsapp-message" | "yotpo-review" | "yotpo-review-private-comment" | "yotpo-review-public-comment";

export type GorgiasFullApiSchemaCreateMessageSourcePerson = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaCreateMessageCustomerChannel = {
  type: string;
  address: string;
};

export type GorgiasFullApiSchemaTicketMessageSourceAddress3 = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService3 = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaTicketMessageSourceAddress4 = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService4 = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaTicketMessageSourceAddress5 = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService5 = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaTextInputSettings6 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings6 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings6 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings6 = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaTextInputSettings7 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings7 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings7 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings7 = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaTextInputSettings8 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaDropdownInputSettingsSettings8 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaNumberInputSettings8 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaBooleanDropdownInputSettings8 = {
  input_type: "dropdown";
  choices?: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaMacroUsageErrorData = {
  rules: ReadonlyArray<string>;
};

export type GorgiasFullApiSchemaMetricCardApiFilter2 = {
  member: string;
  values: ReadonlyArray<string>;
};

export type GorgiasFullApiSchemaReportingStatsOperatorsEnum = "one-of" | "not-one-of" | "all-of" | "afterDate" | "beforeDate" | "set" | "inDateRange" | "contains";

export type GorgiasFullApiSchemaBaseReportingStatsCustomFilterValueItem = {
  custom_field_id: number;
  operator: "one-of" | "not-one-of";
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaBaseReportingStatsRepeatableFilterItemValue = {
  operator: "one-of" | "not-one-of" | "all-of";
  values: (ReadonlyArray<string> | ReadonlyArray<number>);
};

export type GorgiasFullApiSchemaCubeTimeDimensionGranularitiesEnum = "day" | "week" | "month" | "hour";

export type GorgiasFullApiSchemaReportingStatsTimeDimensionsEnum = "closedDatetime" | "createdDatetime" | "sentDatetime" | "updatedDatetime" | "firstAgentMessageDatetime" | "timestamp" | "anchorDatetime" | "queuedDate" | "periodStart" | "eventDatetime";

export type GorgiasFullApiSchemaEventObjectType4 = "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";

export type GorgiasFullApiSchemaRequirementType5 = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaManagedTicketFieldType9 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaDefinitionNumber4 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaInputSettingsNumber4;
};

export type GorgiasFullApiSchemaDefinitionText4 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaInputSettingsText4 | GorgiasFullApiSchemaInputSettingsDropdownStr4);
};

export type GorgiasFullApiSchemaDefinitionBoolean4 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaInputSettingsDropdownBool4;
};

export type GorgiasFullApiSchemaTicketMessageSourceType2 = "aircall" | "api" | "app" | "custom-chat" | "chat" | "chat-contact-form" | "chat-offline-capture" | "contact-form" | "email" | "facebook" | "facebook-comment" | "facebook-mention-comment" | "facebook-mention-post" | "facebook-message" | "facebook-messenger" | "facebook-post" | "facebook-review" | "facebook-review-comment" | "form" | "google-business-messages" | "help-center" | "help-center-contact-form" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-ad-media" | "instagram-comment" | "instagram-direct-message" | "instagram-media" | "instagram-mention-comment" | "instagram-mention-media" | "internal-note" | "ottspott-call" | "phone" | "rule" | "self_service" | "shopify" | "sms" | "system-message" | "tiktok-shop" | "twilio" | "twitter-direct-message" | "twitter-mention-tweet" | "twitter-quoted-tweet" | "twitter-tweet" | "whatsapp-message" | "yotpo-review" | "yotpo-review-private-comment" | "yotpo-review-public-comment";

export type GorgiasFullApiSchemaCreateTicketMessageSourcePerson = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaCreateTicketMessageCustomerChannel = {
  type: string;
  address: string;
};

export type GorgiasFullApiSchemaTicketCustomerChannelCustomer = {
  id: number;
  name: string;
};

export type GorgiasFullApiSchemaStore = {
  id: number;
  currencies: ReadonlyArray<GorgiasFullApiSchemaCurrency>;
  default_currency: GorgiasFullApiSchemaCurrency;
  display_name: string;
  name: string;
  type: GorgiasFullApiSchemaStoreType;
  url: string;
  helpdesk_integration_id: number;
  uuid: string;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaShopper = {
  id: number;
  external_id: string;
  helpdesk_customer_id: number;
  email_address: string;
  phone_number: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthdate: string;
  status: GorgiasFullApiSchemaShopperStatus;
  accepts_marketing_email: boolean;
  accepts_marketing_sms: boolean;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaOrder = {
  id: number;
  external_id: string;
  shopper_external_id: string;
  number: number;
  name: string;
  currency: GorgiasFullApiSchemaCurrency;
  discount_codes: ReadonlyArray<string>;
  discount_amount: (number | string);
  subtotal_amount: (number | string);
  shipping_amount: (number | string);
  tax_amount: (number | string);
  total_amount: (number | string);
  external_status: string;
  external_fulfillment_status: string;
  external_payment_status: string;
  status: GorgiasFullApiSchemaStatus;
  payment_status: GorgiasFullApiSchemaPaymentStatus;
  billing_address: GorgiasFullApiSchemaShopperAddress;
  shipping_address: GorgiasFullApiSchemaShopperAddress;
  line_items: ReadonlyArray<GorgiasFullApiSchemaOrderLine>;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaShopperAddress = {
  id: number;
  external_id: string;
  shopper_external_id: string;
  preferred: boolean;
  line_1: string;
  line_2: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaEventObjectType5 = "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";

export type GorgiasFullApiSchemaRequirementType6 = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaManagedTicketFieldType10 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaDefinitionNumber5 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaInputSettingsNumber5;
};

export type GorgiasFullApiSchemaDefinitionText5 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaInputSettingsText5 | GorgiasFullApiSchemaInputSettingsDropdownStr5);
};

export type GorgiasFullApiSchemaDefinitionBoolean5 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaInputSettingsDropdownBool5;
};

export type GorgiasFullApiSchemaTicketMessageSourceAddress6 = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService6 = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaTicketCustomerChannelCustomer2 = {
  id: number;
  name: string;
};

export type GorgiasFullApiSchemaStore2 = {
  id: number;
  currencies: ReadonlyArray<GorgiasFullApiSchemaCurrency2>;
  default_currency: GorgiasFullApiSchemaCurrency2;
  display_name: string;
  name: string;
  type: GorgiasFullApiSchemaStoreType2;
  url: string;
  helpdesk_integration_id: number;
  uuid: string;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaShopper2 = {
  id: number;
  external_id: string;
  helpdesk_customer_id: number;
  email_address: string;
  phone_number: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthdate: string;
  status: GorgiasFullApiSchemaShopperStatus2;
  accepts_marketing_email: boolean;
  accepts_marketing_sms: boolean;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaOrder2 = {
  id: number;
  external_id: string;
  shopper_external_id: string;
  number: number;
  name: string;
  currency: GorgiasFullApiSchemaCurrency2;
  discount_codes: ReadonlyArray<string>;
  discount_amount: (number | string);
  subtotal_amount: (number | string);
  shipping_amount: (number | string);
  tax_amount: (number | string);
  total_amount: (number | string);
  external_status: string;
  external_fulfillment_status: string;
  external_payment_status: string;
  status: GorgiasFullApiSchemaStatus2;
  payment_status: GorgiasFullApiSchemaPaymentStatus2;
  billing_address: GorgiasFullApiSchemaShopperAddress2;
  shipping_address: GorgiasFullApiSchemaShopperAddress2;
  line_items: ReadonlyArray<GorgiasFullApiSchemaOrderLine2>;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaShopperAddress2 = {
  id: number;
  external_id: string;
  shopper_external_id: string;
  preferred: boolean;
  line_1: string;
  line_2: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaEventObjectType6 = "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";

export type GorgiasFullApiSchemaRequirementType7 = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaManagedTicketFieldType11 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaDefinitionNumber6 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaInputSettingsNumber6;
};

export type GorgiasFullApiSchemaDefinitionText6 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaInputSettingsText6 | GorgiasFullApiSchemaInputSettingsDropdownStr6);
};

export type GorgiasFullApiSchemaDefinitionBoolean6 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaInputSettingsDropdownBool6;
};

export type GorgiasFullApiSchemaTicketMessageSourceAddress7 = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService7 = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaTicketCustomerChannelCustomer3 = {
  id: number;
  name: string;
};

export type GorgiasFullApiSchemaStore3 = {
  id: number;
  currencies: ReadonlyArray<GorgiasFullApiSchemaCurrency3>;
  default_currency: GorgiasFullApiSchemaCurrency3;
  display_name: string;
  name: string;
  type: GorgiasFullApiSchemaStoreType3;
  url: string;
  helpdesk_integration_id: number;
  uuid: string;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaShopper3 = {
  id: number;
  external_id: string;
  helpdesk_customer_id: number;
  email_address: string;
  phone_number: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthdate: string;
  status: GorgiasFullApiSchemaShopperStatus3;
  accepts_marketing_email: boolean;
  accepts_marketing_sms: boolean;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaOrder3 = {
  id: number;
  external_id: string;
  shopper_external_id: string;
  number: number;
  name: string;
  currency: GorgiasFullApiSchemaCurrency3;
  discount_codes: ReadonlyArray<string>;
  discount_amount: (number | string);
  subtotal_amount: (number | string);
  shipping_amount: (number | string);
  tax_amount: (number | string);
  total_amount: (number | string);
  external_status: string;
  external_fulfillment_status: string;
  external_payment_status: string;
  status: GorgiasFullApiSchemaStatus3;
  payment_status: GorgiasFullApiSchemaPaymentStatus3;
  billing_address: GorgiasFullApiSchemaShopperAddress3;
  shipping_address: GorgiasFullApiSchemaShopperAddress3;
  line_items: ReadonlyArray<GorgiasFullApiSchemaOrderLine3>;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaShopperAddress3 = {
  id: number;
  external_id: string;
  shopper_external_id: string;
  preferred: boolean;
  line_1: string;
  line_2: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaEventObjectType7 = "Account" | "AccountSetting" | "Customer" | "CustomField" | "CustomFieldCondition" | "CustomUserAvailabilityStatus" | "CustomerExternalData" | "Integration" | "Macro" | "Order" | "Role" | "Rule" | "SatisfactionSurvey" | "Shopper" | "ShopperAddress" | "Subscription" | "Tag" | "Team" | "TicketMessage" | "Ticket" | "User" | "UserSetting" | "View" | "Widget";

export type GorgiasFullApiSchemaRequirementType8 = "visible" | "required" | "conditional";

export type GorgiasFullApiSchemaManagedTicketFieldType12 = "contact_reason" | "product" | "resolution" | "ai_intent" | "ai_outcome" | "ai_sales" | "ai_discount" | "ai_journey" | "managed_sentiment" | "call_status";

export type GorgiasFullApiSchemaDefinitionNumber7 = {
  data_type: "number";
  input_settings: GorgiasFullApiSchemaInputSettingsNumber7;
};

export type GorgiasFullApiSchemaDefinitionText7 = {
  data_type: "text";
  input_settings: (GorgiasFullApiSchemaInputSettingsText7 | GorgiasFullApiSchemaInputSettingsDropdownStr7);
};

export type GorgiasFullApiSchemaDefinitionBoolean7 = {
  data_type: "boolean";
  input_settings: GorgiasFullApiSchemaInputSettingsDropdownBool7;
};

export type GorgiasFullApiSchemaTicketMessageSourceAddress8 = {
  name?: string;
  address?: string;
};

export type GorgiasFullApiSchemaTicketMessageAuthCustomerIdentityService8 = {
  id: string;
  name: string;
};

export type GorgiasFullApiSchemaInputSettingsNumber = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaInputSettingsText = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownStr = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownBool = {
  input_type: "dropdown";
  choices: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaInputSettingsNumber2 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaInputSettingsText2 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownStr2 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownBool2 = {
  input_type: "dropdown";
  choices: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaInputSettingsNumber3 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaInputSettingsText3 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownStr3 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownBool3 = {
  input_type: "dropdown";
  choices: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaInputSettingsNumber4 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaInputSettingsText4 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownStr4 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownBool4 = {
  input_type: "dropdown";
  choices: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaCurrency = "AFN" | "EUR" | "ALL" | "DZD" | "USD" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "AZN" | "BSD" | "BHD" | "BDT" | "BBD" | "BYN" | "BZD" | "XOF" | "BMD" | "INR" | "BTN" | "BOB" | "BOV" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGN" | "BIF" | "CVE" | "KHR" | "XAF" | "CAD" | "KYD" | "CLP" | "CLF" | "CNY" | "COP" | "COU" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CUC" | "ANG" | "CZK" | "DKK" | "DJF" | "DOP" | "EGP" | "SVC" | "ERN" | "SZL" | "ETB" | "FKP" | "FJD" | "XPF" | "GMD" | "GEL" | "GHS" | "GIP" | "GTQ" | "GBP" | "GNF" | "GYD" | "HTG" | "HNL" | "HKD" | "HUF" | "ISK" | "IDR" | "XDR" | "IRR" | "IQD" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LBP" | "LSL" | "ZAR" | "LRD" | "LYD" | "CHF" | "MOP" | "MKD" | "MGA" | "MWK" | "MYR" | "MVR" | "MRU" | "MUR" | "XUA" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZN" | "MMK" | "NAD" | "NPR" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "QAR" | "RON" | "RUB" | "RWF" | "SHP" | "WST" | "STN" | "SAR" | "RSD" | "SCR" | "SLL" | "SLE" | "SGD" | "XSU" | "SBD" | "SOS" | "SSP" | "LKR" | "SDG" | "SRD" | "SEK" | "CHE" | "CHW" | "SYP" | "TWD" | "TJS" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRY" | "TMT" | "UGX" | "UAH" | "AED" | "USN" | "UYU" | "UYI" | "UYW" | "UZS" | "VUV" | "VES" | "VED" | "VND" | "YER" | "ZMW" | "ZWL" | "XBA" | "XBB" | "XBC" | "XBD" | "XTS" | "XXX" | "XAU" | "XPD" | "XPT" | "XAG";

export type GorgiasFullApiSchemaStoreType = "bigcommerce" | "magento" | "shopify" | "woocommerce";

export type GorgiasFullApiSchemaShopperStatus = "tax_exempt" | "veteran";

export type GorgiasFullApiSchemaStatus = "partially_fulfilled" | "completed" | "canceled" | "on_hold" | "awaiting_fulfillment" | "awaiting_payment" | "scheduled" | "order_pending";

export type GorgiasFullApiSchemaPaymentStatus = "refunded" | "partially_refunded" | "unpaid" | "voided" | "failed" | "manual_verification_required" | "customer_authentication_required" | "paid" | "declined" | "authorized";

export type GorgiasFullApiSchemaOrderLine = {
  id: number;
  title: string;
  taxable: boolean;
  requires_shipping: boolean;
  unit_price: (number | string);
  discount_amount: (number | string);
  discount_type: GorgiasFullApiSchemaDiscountType;
  discount_reason: string;
  quantity: number;
  total_amount: (number | string);
  product_options: {};
  fulfilled_quantity: number;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaInputSettingsNumber5 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaInputSettingsText5 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownStr5 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownBool5 = {
  input_type: "dropdown";
  choices: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaCurrency2 = "AFN" | "EUR" | "ALL" | "DZD" | "USD" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "AZN" | "BSD" | "BHD" | "BDT" | "BBD" | "BYN" | "BZD" | "XOF" | "BMD" | "INR" | "BTN" | "BOB" | "BOV" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGN" | "BIF" | "CVE" | "KHR" | "XAF" | "CAD" | "KYD" | "CLP" | "CLF" | "CNY" | "COP" | "COU" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CUC" | "ANG" | "CZK" | "DKK" | "DJF" | "DOP" | "EGP" | "SVC" | "ERN" | "SZL" | "ETB" | "FKP" | "FJD" | "XPF" | "GMD" | "GEL" | "GHS" | "GIP" | "GTQ" | "GBP" | "GNF" | "GYD" | "HTG" | "HNL" | "HKD" | "HUF" | "ISK" | "IDR" | "XDR" | "IRR" | "IQD" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LBP" | "LSL" | "ZAR" | "LRD" | "LYD" | "CHF" | "MOP" | "MKD" | "MGA" | "MWK" | "MYR" | "MVR" | "MRU" | "MUR" | "XUA" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZN" | "MMK" | "NAD" | "NPR" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "QAR" | "RON" | "RUB" | "RWF" | "SHP" | "WST" | "STN" | "SAR" | "RSD" | "SCR" | "SLL" | "SLE" | "SGD" | "XSU" | "SBD" | "SOS" | "SSP" | "LKR" | "SDG" | "SRD" | "SEK" | "CHE" | "CHW" | "SYP" | "TWD" | "TJS" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRY" | "TMT" | "UGX" | "UAH" | "AED" | "USN" | "UYU" | "UYI" | "UYW" | "UZS" | "VUV" | "VES" | "VED" | "VND" | "YER" | "ZMW" | "ZWL" | "XBA" | "XBB" | "XBC" | "XBD" | "XTS" | "XXX" | "XAU" | "XPD" | "XPT" | "XAG";

export type GorgiasFullApiSchemaStoreType2 = "bigcommerce" | "magento" | "shopify" | "woocommerce";

export type GorgiasFullApiSchemaShopperStatus2 = "tax_exempt" | "veteran";

export type GorgiasFullApiSchemaStatus2 = "partially_fulfilled" | "completed" | "canceled" | "on_hold" | "awaiting_fulfillment" | "awaiting_payment" | "scheduled" | "order_pending";

export type GorgiasFullApiSchemaPaymentStatus2 = "refunded" | "partially_refunded" | "unpaid" | "voided" | "failed" | "manual_verification_required" | "customer_authentication_required" | "paid" | "declined" | "authorized";

export type GorgiasFullApiSchemaOrderLine2 = {
  id: number;
  title: string;
  taxable: boolean;
  requires_shipping: boolean;
  unit_price: (number | string);
  discount_amount: (number | string);
  discount_type: GorgiasFullApiSchemaDiscountType2;
  discount_reason: string;
  quantity: number;
  total_amount: (number | string);
  product_options: {};
  fulfilled_quantity: number;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaInputSettingsNumber6 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaInputSettingsText6 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownStr6 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownBool6 = {
  input_type: "dropdown";
  choices: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaCurrency3 = "AFN" | "EUR" | "ALL" | "DZD" | "USD" | "AOA" | "XCD" | "ARS" | "AMD" | "AWG" | "AUD" | "AZN" | "BSD" | "BHD" | "BDT" | "BBD" | "BYN" | "BZD" | "XOF" | "BMD" | "INR" | "BTN" | "BOB" | "BOV" | "BAM" | "BWP" | "NOK" | "BRL" | "BND" | "BGN" | "BIF" | "CVE" | "KHR" | "XAF" | "CAD" | "KYD" | "CLP" | "CLF" | "CNY" | "COP" | "COU" | "KMF" | "CDF" | "NZD" | "CRC" | "HRK" | "CUP" | "CUC" | "ANG" | "CZK" | "DKK" | "DJF" | "DOP" | "EGP" | "SVC" | "ERN" | "SZL" | "ETB" | "FKP" | "FJD" | "XPF" | "GMD" | "GEL" | "GHS" | "GIP" | "GTQ" | "GBP" | "GNF" | "GYD" | "HTG" | "HNL" | "HKD" | "HUF" | "ISK" | "IDR" | "XDR" | "IRR" | "IQD" | "ILS" | "JMD" | "JPY" | "JOD" | "KZT" | "KES" | "KPW" | "KRW" | "KWD" | "KGS" | "LAK" | "LBP" | "LSL" | "ZAR" | "LRD" | "LYD" | "CHF" | "MOP" | "MKD" | "MGA" | "MWK" | "MYR" | "MVR" | "MRU" | "MUR" | "XUA" | "MXN" | "MXV" | "MDL" | "MNT" | "MAD" | "MZN" | "MMK" | "NAD" | "NPR" | "NIO" | "NGN" | "OMR" | "PKR" | "PAB" | "PGK" | "PYG" | "PEN" | "PHP" | "PLN" | "QAR" | "RON" | "RUB" | "RWF" | "SHP" | "WST" | "STN" | "SAR" | "RSD" | "SCR" | "SLL" | "SLE" | "SGD" | "XSU" | "SBD" | "SOS" | "SSP" | "LKR" | "SDG" | "SRD" | "SEK" | "CHE" | "CHW" | "SYP" | "TWD" | "TJS" | "TZS" | "THB" | "TOP" | "TTD" | "TND" | "TRY" | "TMT" | "UGX" | "UAH" | "AED" | "USN" | "UYU" | "UYI" | "UYW" | "UZS" | "VUV" | "VES" | "VED" | "VND" | "YER" | "ZMW" | "ZWL" | "XBA" | "XBB" | "XBC" | "XBD" | "XTS" | "XXX" | "XAU" | "XPD" | "XPT" | "XAG";

export type GorgiasFullApiSchemaStoreType3 = "bigcommerce" | "magento" | "shopify" | "woocommerce";

export type GorgiasFullApiSchemaShopperStatus3 = "tax_exempt" | "veteran";

export type GorgiasFullApiSchemaStatus3 = "partially_fulfilled" | "completed" | "canceled" | "on_hold" | "awaiting_fulfillment" | "awaiting_payment" | "scheduled" | "order_pending";

export type GorgiasFullApiSchemaPaymentStatus3 = "refunded" | "partially_refunded" | "unpaid" | "voided" | "failed" | "manual_verification_required" | "customer_authentication_required" | "paid" | "declined" | "authorized";

export type GorgiasFullApiSchemaOrderLine3 = {
  id: number;
  title: string;
  taxable: boolean;
  requires_shipping: boolean;
  unit_price: (number | string);
  discount_amount: (number | string);
  discount_type: GorgiasFullApiSchemaDiscountType3;
  discount_reason: string;
  quantity: number;
  total_amount: (number | string);
  product_options: {};
  fulfilled_quantity: number;
  created_datetime: string;
  updated_datetime: string;
  deleted_datetime: string;
};

export type GorgiasFullApiSchemaInputSettingsNumber7 = {
  input_type: "input_number";
  placeholder?: string;
  min?: (number | string);
  max?: (number | string);
};

export type GorgiasFullApiSchemaInputSettingsText7 = {
  input_type: "input";
  placeholder?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownStr7 = {
  input_type: "dropdown";
  choices: ReadonlyArray<string>;
  default?: string;
};

export type GorgiasFullApiSchemaInputSettingsDropdownBool7 = {
  input_type: "dropdown";
  choices: ReadonlyArray<boolean>;
  default?: boolean;
};

export type GorgiasFullApiSchemaDiscountType = "percentage" | "fixed_amount";

export type GorgiasFullApiSchemaDiscountType2 = "percentage" | "fixed_amount";

export type GorgiasFullApiSchemaDiscountType3 = "percentage" | "fixed_amount";

export interface GorgiasFullApiOperationQueryMap {
  "download-file": {};
  "get-account": {};
  "list-account-settings": {
  type?: string;
};
  "create-account-setting": {};
  "update-account-setting": {};
  "list-custom-fields": {
  object_type: "Ticket" | "Customer";
  search?: string;
  archived?: boolean;
  order_by?: "priority:asc" | "priority:desc";
  cursor?: string;
  limit?: number;
};
  "create-custom-field": {};
  "update-custom-fields": {};
  "get-custom-field": {};
  "update-custom-field": {};
  "delete-customers": {};
  "list-customers": {
  cursor?: string;
  email?: string | null;
  external_id?: string | null;
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  limit?: number;
  name?: string | null;
  order_by?: "created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc";
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
  view_id?: number;
  channel_type?: string;
  channel_address?: string;
};
  "create-customer": {};
  "list-customer-custom-fields-values": {};
  "update-customer-custom-field-values": {};
  "delete-customer-custom-field-value": {};
  "update-customer-custom-field-value": {};
  "update-customer-data": {};
  "delete-customer": {};
  "get-customer": {
  relationships?: ReadonlyArray<"custom_fields">;
};
  "update-customer": {};
  "merge-customers": {
  source_id: number;
  target_id: number;
};
  "list-events": {
  created_datetime?: {
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
};
  cursor?: string;
  limit?: number;
  object_id?: number;
  object_type?: "Account" | "AccountSetting" | "Macro" | "Tag" | "Customer" | "Team" | "View" | "Widget" | "CustomField" | "CustomFieldCondition" | "User" | "TicketMessage" | "Ticket" | "Rule" | "Integration" | "SatisfactionSurvey";
  order_by?: "created_datetime" | "created_datetime:asc" | "created_datetime:desc";
  types?: ReadonlyArray<"account-created" | "account-deactivated" | "account-setting-updated" | "account-updated" | "action-executed" | "custom-field-condition-created" | "custom-field-condition-deleted" | "custom-field-condition-disabled" | "custom-field-condition-enabled" | "custom-field-condition-updated" | "custom-field-created" | "custom-field-updated" | "customer-created" | "customer-deleted" | "customer-merged" | "customer-updated" | "integration-created" | "integration-deactivated" | "integration-deleted" | "integration-reactivated" | "integration-updated" | "macro-created" | "macro-deleted" | "macro-updated" | "rule-created" | "rule-deleted" | "rule-executed" | "rule-priority-updated" | "rule-updated" | "satisfaction-survey-responded" | "satisfaction-survey-sent" | "tag-created" | "tag-deleted" | "tag-merged" | "tag-renamed" | "tag-updated" | "team-created" | "team-deleted" | "team-updated" | "ticket-assigned" | "ticket-closed" | "ticket-created" | "ticket-customer-updated" | "ticket-deleted" | "ticket-excluded-from-auto-merge" | "ticket-excluded-from-csat" | "ticket-marked-spam" | "ticket-merged" | "ticket-message-created" | "ticket-message-deleted" | "ticket-message-failed" | "ticket-message-summary-created" | "ticket-message-updated" | "ticket-reopened" | "ticket-satisfaction-survey-skipped" | "ticket-self-unsnoozed" | "ticket-sla-policy-assigned" | "ticket-snoozed" | "ticket-split" | "ticket-subject-updated" | "ticket-tags-added" | "ticket-tags-removed" | "ticket-team-assigned" | "ticket-team-unassigned" | "ticket-trashed" | "ticket-unassigned" | "ticket-unmarked-spam" | "ticket-untrashed" | "ticket-updated" | "user-2fa-changed" | "user-created" | "user-deleted" | "user-invited" | "user-logged-in" | "user-logged-out" | "user-password-changed" | "user-password-reset" | "user-updated" | "view-created" | "view-deactivated" | "view-deleted" | "view-updated" | "widget-created" | "widget-deleted" | "widget-updated">;
  user_ids?: ReadonlyArray<number>;
};
  "get-event": {};
  "list-integrations": {
  cursor?: string;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc";
  type?: "email" | "gmail" | "outlook" | "app" | "aircall" | "facebook" | "gorgias_chat" | "phone" | "sms" | "twitter" | "yotpo" | "whatsapp" | "http" | "shopify" | "recharge" | "smile" | "smooch_inside" | "smooch" | "magento2" | "zendesk" | "klaviyo" | "bigcommerce" | "alloy" | "ecom";
};
  "create-integration": {};
  "delete-integration": {};
  "get-integration": {};
  "update-integration": {};
  "list-jobs": {
  cursor?: string;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc";
  status?: "cancel_requested" | "canceled" | "done" | "errored" | "fatal_errored" | "pending" | "running" | "scheduled";
  type?: "applyMacro" | "deleteTicket" | "exportTicket" | "importMacro" | "exportMacro" | "updateTicket" | "exportTicketDrilldown" | "exportConvertCampaignSalesDrilldown";
};
  "create-job": {};
  "cancel-job": {};
  "get-job": {};
  "update-job": {};
  "list-macros": {
  tags?: ReadonlyArray<string | null>;
  languages?: ReadonlyArray<string | null>;
  cursor?: string;
  limit?: number;
  message_id?: number | null;
  order_by?: "name" | "created_datetime" | "updated_datetime" | "usage" | "relevance" | "language" | "name:asc" | "name:desc" | "created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc" | "usage:asc" | "usage:desc" | "relevance:asc" | "relevance:desc" | "language:asc" | "language:desc";
  search?: string | null;
  ticket_id?: number | null;
  number_predictions?: number;
  archived?: boolean | null;
};
  "create-macro": {};
  "delete-macro": {};
  "get-macro": {};
  "update-macro": {};
  "bulk-archive-macros": {};
  "bulk-unarchive-macros": {};
  "list-messages": {
  cursor?: string | null;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc";
  ticket_id?: number | null;
};
  "search-metric-cards": {
  category?: string;
  status?: GorgiasFullApiSchemaMetricCardStatusEnum;
  q?: string;
  include?: GorgiasFullApiSchemaMetricCardIncludeEnum;
};
  "get-metric-card": {};
  "list-voice-call-events": {
  cursor?: string;
  limit?: number;
  call_id?: number;
};
  "get-voice-call-event": {};
  "list-voice-call-recordings": {
  cursor?: string;
  limit?: number;
  call_id?: number;
};
  "delete-voice-call-recording": {};
  "get-voice-call-recording": {};
  "list-voice-calls": {
  cursor?: string;
  limit?: number;
  ticket_id?: number;
};
  "get-voice-call": {};
  "get-statistic": {
  cursor?: string;
  limit?: number;
};
  "list-rules": {
  cursor?: string;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc";
};
  "create-rule": {};
  "delete-rule": {};
  "get-rule": {};
  "update-rule": {};
  "update-rules-priorities": {};
  "list-satisfaction-surveys": {
  cursor?: string;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc";
  ticket_id?: number | null;
};
  "create-satisfaction-survey": {};
  "get-satisfaction-survey": {};
  "update-satisfaction-survey": {};
  "search": {};
  "get-legacy-statistic": {};
  "download-legacy-statistic": {};
  "delete-tags": {};
  "list-tags": {
  order_by?: "created_datetime" | "name" | "usage" | "created_datetime:asc" | "created_datetime:desc" | "name:asc" | "name:desc" | "usage:asc,name:asc" | "usage:desc,name:desc";
  search?: string;
  cursor?: string;
  limit?: number;
};
  "create-tag": {};
  "merge-tags": {};
  "delete-tag": {};
  "get-tag": {};
  "update-tag": {};
  "list-teams": {
  cursor?: string;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc" | "name:asc" | "name:desc";
};
  "create-team": {};
  "delete-team": {};
  "get-team": {};
  "update-team": {};
  "list-tickets": {
  order_by?: "created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc";
  cursor?: string;
  customer_id?: number;
  trashed?: boolean;
  external_id?: string;
  limit?: number;
  view_id?: number;
  rule_id?: number;
  ticket_ids?: ReadonlyArray<number>;
};
  "create-ticket": {};
  "delete-ticket": {};
  "get-ticket": {
  relationships?: ReadonlyArray<GorgiasFullApiSchemaTicketExtraAttribute>;
};
  "update-ticket": {};
  "list-ticket-custom-fields": {};
  "update-ticket-custom-fields": {};
  "delete-ticket-custom-field": {};
  "update-ticket-custom-field": {};
  "list-ticket-messages": {};
  "create-ticket-message": {
  action?: "force" | "retry" | "cancel";
};
  "delete-ticket-message": {};
  "get-ticket-message": {};
  "update-ticket-message": {
  action?: "force" | "retry" | "cancel";
};
  "delete-ticket-tags": {};
  "list-ticket-tags": {};
  "create-ticket-tags": {};
  "update-ticket-tags": {};
  "post_/api/upload": {
  type?: "public_attachment" | "attachment" | "profile_picture" | "widget_picture";
};
  "list-users": {
  cursor?: string;
  external_id?: string;
  email?: string;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc" | "name:asc" | "name:desc" | "email:asc" | "email:desc" | "role.name:asc" | "role.name:desc";
  roles?: ReadonlyArray<"admin" | "agent" | "basic-agent" | "bot" | "internal-agent" | "lite-agent" | "observer-agent">;
  search?: string;
  available_first?: boolean;
};
  "create-user": {};
  "delete-user": {};
  "get-user": {};
  "update-user": {};
  "list-views": {
  order_by?: "created_datetime:asc" | "created_datetime:desc";
  cursor?: string;
  limit?: number;
  category?: GorgiasFullApiSchemaViewCategory;
};
  "create-view": {};
  "delete-view": {};
  "get-view": {};
  "update-view": {};
  "list-view-items": {
  cursor?: string;
  direction?: "prev" | "next";
  ignored_item?: number;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc" | "last_message_datetime:asc" | "last_message_datetime:desc" | "last_received_message_datetime:asc" | "last_received_message_datetime:desc" | "closed_datetime:asc" | "closed_datetime:desc" | "snooze_datetime:asc" | "snooze_datetime:desc" | "priority:asc" | "priority:desc";
};
  "update-view-items": {
  cursor?: string;
  direction?: "prev" | "next";
  ignored_item?: number;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc" | "last_message_datetime:asc" | "last_message_datetime:desc" | "last_received_message_datetime:asc" | "last_received_message_datetime:desc" | "closed_datetime:asc" | "closed_datetime:desc" | "snooze_datetime:asc" | "snooze_datetime:desc" | "priority:asc" | "priority:desc";
};
  "list-widgets": {
  cursor?: string;
  limit?: number;
  order_by?: "created_datetime:asc" | "created_datetime:desc" | "order:asc" | "order:desc";
  integration_id?: number | null;
  app_id?: string | null;
};
  "create-widget": {};
  "delete-widget": {};
  "get-widget": {};
  "update-widget": {};
}

export interface GorgiasFullApiOperationQueryRequiredMap {
  "download-file": false;
  "get-account": false;
  "list-account-settings": false;
  "create-account-setting": false;
  "update-account-setting": false;
  "list-custom-fields": true;
  "create-custom-field": false;
  "update-custom-fields": false;
  "get-custom-field": false;
  "update-custom-field": false;
  "delete-customers": false;
  "list-customers": false;
  "create-customer": false;
  "list-customer-custom-fields-values": false;
  "update-customer-custom-field-values": false;
  "delete-customer-custom-field-value": false;
  "update-customer-custom-field-value": false;
  "update-customer-data": false;
  "delete-customer": false;
  "get-customer": false;
  "update-customer": false;
  "merge-customers": true;
  "list-events": false;
  "get-event": false;
  "list-integrations": false;
  "create-integration": false;
  "delete-integration": false;
  "get-integration": false;
  "update-integration": false;
  "list-jobs": false;
  "create-job": false;
  "cancel-job": false;
  "get-job": false;
  "update-job": false;
  "list-macros": false;
  "create-macro": false;
  "delete-macro": false;
  "get-macro": false;
  "update-macro": false;
  "bulk-archive-macros": false;
  "bulk-unarchive-macros": false;
  "list-messages": false;
  "search-metric-cards": false;
  "get-metric-card": false;
  "list-voice-call-events": false;
  "get-voice-call-event": false;
  "list-voice-call-recordings": false;
  "delete-voice-call-recording": false;
  "get-voice-call-recording": false;
  "list-voice-calls": false;
  "get-voice-call": false;
  "get-statistic": false;
  "list-rules": false;
  "create-rule": false;
  "delete-rule": false;
  "get-rule": false;
  "update-rule": false;
  "update-rules-priorities": false;
  "list-satisfaction-surveys": false;
  "create-satisfaction-survey": false;
  "get-satisfaction-survey": false;
  "update-satisfaction-survey": false;
  "search": false;
  "get-legacy-statistic": false;
  "download-legacy-statistic": false;
  "delete-tags": false;
  "list-tags": false;
  "create-tag": false;
  "merge-tags": false;
  "delete-tag": false;
  "get-tag": false;
  "update-tag": false;
  "list-teams": false;
  "create-team": false;
  "delete-team": false;
  "get-team": false;
  "update-team": false;
  "list-tickets": false;
  "create-ticket": false;
  "delete-ticket": false;
  "get-ticket": false;
  "update-ticket": false;
  "list-ticket-custom-fields": false;
  "update-ticket-custom-fields": false;
  "delete-ticket-custom-field": false;
  "update-ticket-custom-field": false;
  "list-ticket-messages": false;
  "create-ticket-message": false;
  "delete-ticket-message": false;
  "get-ticket-message": false;
  "update-ticket-message": false;
  "delete-ticket-tags": false;
  "list-ticket-tags": false;
  "create-ticket-tags": false;
  "update-ticket-tags": false;
  "post_/api/upload": false;
  "list-users": false;
  "create-user": false;
  "delete-user": false;
  "get-user": false;
  "update-user": false;
  "list-views": false;
  "create-view": false;
  "delete-view": false;
  "get-view": false;
  "update-view": false;
  "list-view-items": false;
  "update-view-items": false;
  "list-widgets": false;
  "create-widget": false;
  "delete-widget": false;
  "get-widget": false;
  "update-widget": false;
}

export interface GorgiasFullApiOperationRequestBodyMap {
  "download-file": never;
  "get-account": never;
  "list-account-settings": never;
  "create-account-setting": {
  data?: GorgiasFullApiSchemaJsonValue;
  type: string;
};
  "update-account-setting": {
  data?: GorgiasFullApiSchemaJsonValue;
  type: string;
};
  "list-custom-fields": never;
  "create-custom-field": GorgiasFullApiSchemaCreateCustomField;
  "update-custom-fields": GorgiasFullApiSchemaUpdateCustomFieldList;
  "get-custom-field": never;
  "update-custom-field": GorgiasFullApiSchemaUpdateCustomField;
  "delete-customers": {
  ids: ReadonlyArray<number>;
};
  "list-customers": never;
  "create-customer": {
  channels: ReadonlyArray<{
  type: string;
  address: string;
  preferred: boolean;
}>;
  email?: string | null;
  external_id?: string | null;
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  name?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
};
  "list-customer-custom-fields-values": never;
  "update-customer-custom-field-values": ReadonlyArray<GorgiasFullApiSchemaCustomerCustomFieldValue>;
  "delete-customer-custom-field-value": never;
  "update-customer-custom-field-value": (string | number | boolean);
  "update-customer-data": {
  version?: string | null;
  data: GorgiasFullApiSchemaJsonValue;
};
  "delete-customer": never;
  "get-customer": never;
  "update-customer": {
  channels?: ReadonlyArray<{
  type: string;
  address: string;
  preferred: boolean;
}>;
  email?: string | null;
  external_id?: string | null;
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  name?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
};
  "merge-customers": {
  channels?: ReadonlyArray<{
  type: string;
  address: string;
  preferred: boolean;
}>;
  email?: string | null;
  external_id?: string | null;
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  name?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
};
  "list-events": never;
  "get-event": never;
  "list-integrations": never;
  "create-integration": {
  deactivated_datetime?: string | null;
  description?: string | null;
  http?: {
  form?:  | null;
  headers?:  | null;
  hmac_secret?: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  request_content_type: "application/json" | "application/x-www-form-urlencoded";
  response_content_type: "application/json";
  triggers?: {
  "ticket-created"?: boolean;
  "ticket-updated"?: boolean;
  "ticket-message-created"?: boolean;
  "ticket-self-unsnoozed"?: boolean;
  "ticket-message-failed"?: boolean;
  "ticket-assignment-updated"?: boolean;
  "ticket-status-updated"?: boolean;
  "ticket-handed-over"?: boolean;
};
  url: string;
};
  name: string;
  type: "http";
  managed?: boolean;
};
  "delete-integration": never;
  "get-integration": never;
  "update-integration": {
  deactivated_datetime?: string | null;
  description?: string | null;
  http?: {
  form?:  | null;
  headers?:  | null;
  hmac_secret?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "PATCH";
  request_content_type?: "application/json" | "application/x-www-form-urlencoded";
  response_content_type?: "application/json";
  triggers?: {
  "ticket-created"?: boolean;
  "ticket-updated"?: boolean;
  "ticket-message-created"?: boolean;
  "ticket-self-unsnoozed"?: boolean;
  "ticket-message-failed"?: boolean;
  "ticket-assignment-updated"?: boolean;
  "ticket-status-updated"?: boolean;
  "ticket-handed-over"?: boolean;
};
  url: string;
};
  name: string;
};
  "list-jobs": never;
  "create-job": {
  meta?: {} | null;
  params: {
  apply_and_close?: boolean;
  end_datetime?: string | null;
  macro_id?: number;
  start_datetime?: string | null;
  ticket_ids?: ReadonlyArray<number>;
  url?: string;
  updates?: {};
  view?: {};
  view_id?: number;
  context?: {};
};
  scheduled_datetime?: string | null;
  type: "applyMacro" | "deleteTicket" | "exportTicket" | "importMacro" | "exportMacro" | "updateTicket" | "exportTicketDrilldown" | "exportConvertCampaignSalesDrilldown";
};
  "cancel-job": never;
  "get-job": never;
  "update-job": {
  meta?: {} | null;
  params?: {
  apply_and_close?: boolean;
  end_datetime?: string | null;
  macro_id?: number;
  start_datetime?: string | null;
  ticket_ids?: ReadonlyArray<number>;
  url?: string;
  updates?: {};
  view?: {};
  view_id?: number;
  context?: {};
};
  scheduled_datetime?: string | null;
  status?: "cancel_requested" | "canceled" | "done" | "errored" | "fatal_errored" | "pending" | "running" | "scheduled";
};
  "list-macros": never;
  "create-macro": {
  external_id?: string | null;
  name: string;
  intent?: "discount/request" | "exchange/request" | "exchange/status" | "feedback" | "order/damaged" | "order/cancel" | "order/change" | "order/wrong" | "other/no_reply" | "other/question" | "other/thanks" | "product/recommendation" | "product/question" | "refund/request" | "refund/status" | "return/request" | "return/status" | "shipping/change" | "shipping/delivery-issue" | "shipping/policy" | "shipping/status" | "stock/request" | "subscription/cancel" | "subscription/change";
  language?: string | null;
  actions?: ReadonlyArray<GorgiasFullApiSchemaMacroAction>;
};
  "delete-macro": never;
  "get-macro": never;
  "update-macro": {
  external_id?: string | null;
  name?: string;
  intent?: "discount/request" | "exchange/request" | "exchange/status" | "feedback" | "order/damaged" | "order/cancel" | "order/change" | "order/wrong" | "other/no_reply" | "other/question" | "other/thanks" | "product/recommendation" | "product/question" | "refund/request" | "refund/status" | "return/request" | "return/status" | "shipping/change" | "shipping/delivery-issue" | "shipping/policy" | "shipping/status" | "stock/request" | "subscription/cancel" | "subscription/change";
  language?: string | null;
  actions?: ReadonlyArray<GorgiasFullApiSchemaMacroAction2>;
};
  "bulk-archive-macros": GorgiasFullApiSchemaArchiveMacrosAsUser;
  "bulk-unarchive-macros": GorgiasFullApiSchemaUnarchiveMacrosAsUser;
  "list-messages": never;
  "search-metric-cards": never;
  "get-metric-card": never;
  "list-voice-call-events": never;
  "get-voice-call-event": never;
  "list-voice-call-recordings": never;
  "delete-voice-call-recording": never;
  "get-voice-call-recording": never;
  "list-voice-calls": never;
  "get-voice-call": never;
  "get-statistic": GorgiasFullApiSchemaReportingStats;
  "list-rules": never;
  "create-rule": {
  code: string;
  code_ast?: {};
  deactivated_datetime?: string | null;
  description?: string | null;
  event_types?: "ticket-created" | "ticket-updated" | "ticket-message-created" | "ticket-assigned" | "ticket-self-unsnoozed" | "satisfaction-survey-responded";
  name: string;
  priority?: number;
};
  "delete-rule": never;
  "get-rule": never;
  "update-rule": {
  code?: string;
  code_ast?: {};
  deactivated_datetime?: string | null;
  description?: string | null;
  event_types?: "ticket-created" | "ticket-updated" | "ticket-message-created" | "ticket-assigned" | "ticket-self-unsnoozed" | "satisfaction-survey-responded";
  name?: string;
  priority?: number;
};
  "update-rules-priorities": {
  priorities: ReadonlyArray<{
  id: number;
  priority: number;
}>;
};
  "list-satisfaction-surveys": never;
  "create-satisfaction-survey": {
  body_text?: string | null;
  created_datetime?: string | null;
  customer_id: number;
  meta?: {} | null;
  score?: number | null;
  scored_datetime?: string | null;
  sent_datetime?: string | null;
  should_send_datetime?: string | null;
  ticket_id: number;
};
  "get-satisfaction-survey": never;
  "update-satisfaction-survey": {
  body_text?: string | null;
  created_datetime?: string | null;
  customer_id?: number;
  meta?: {} | null;
  score?: number | null;
  scored_datetime?: string | null;
  sent_datetime?: string | null;
  should_send_datetime?: string | null;
  ticket_id?: number;
};
  "search": {
  type: "agent" | "customer" | "customer_profile" | "customer_channel" | "customer_channel_email" | "customer_channel_phone" | "customers_by_phone" | "integration" | "team" | "tag";
  query?: string;
  size?: number;
};
  "get-legacy-statistic": {
  filters: {
  period?: {
  start_datetime: string;
  end_datetime: string;
};
  agents?: ReadonlyArray<number>;
  channels?: ReadonlyArray<string>;
  campaigns?: ReadonlyArray<string>;
  tags?: ReadonlyArray<number>;
  integrations?: ReadonlyArray<number>;
  score?: ReadonlyArray<number>;
};
};
  "download-legacy-statistic": {
  filters: {
  period?: {
  start_datetime: string;
  end_datetime: string;
};
  agents?: ReadonlyArray<number>;
  channels?: ReadonlyArray<string>;
  campaigns?: ReadonlyArray<string>;
  tags?: ReadonlyArray<number>;
  integrations?: ReadonlyArray<number>;
  score?: ReadonlyArray<number>;
};
};
  "delete-tags": {
  ids: ReadonlyArray<number>;
};
  "list-tags": never;
  "create-tag": {
  decoration?: {
  color: string;
};
  description?: string;
  name: string;
};
  "merge-tags": {
  source_tags_ids: ReadonlyArray<number>;
};
  "delete-tag": never;
  "get-tag": never;
  "update-tag": {
  name?: string;
  description?: string;
  decoration?: {
  color: string;
};
};
  "list-teams": never;
  "create-team": {
  name: string;
  description?: string | null;
  decoration?: {} | null;
  members?: ReadonlyArray<{
  id?: number;
  name?: string | null;
  email?: string | null;
  meta?:  | null;
}>;
};
  "delete-team": never;
  "get-team": never;
  "update-team": {
  name?: string;
  description?: string | null;
  decoration?: {} | null;
  members?: ReadonlyArray<{
  id?: number;
  name?: string | null;
  email?: string | null;
  meta?:  | null;
}>;
};
  "list-tickets": never;
  "create-ticket": GorgiasFullApiSchemaCreateTicket;
  "delete-ticket": never;
  "get-ticket": never;
  "update-ticket": GorgiasFullApiSchemaUpdateTicket;
  "list-ticket-custom-fields": never;
  "update-ticket-custom-fields": GorgiasFullApiSchemaUpdateTicketCustomFieldValues;
  "delete-ticket-custom-field": never;
  "update-ticket-custom-field": (string | number | boolean);
  "list-ticket-messages": never;
  "create-ticket-message": GorgiasFullApiSchemaCreateMessage;
  "delete-ticket-message": never;
  "get-ticket-message": never;
  "update-ticket-message": {
  attachments?: ReadonlyArray<{
  url: string;
  name: string;
  size: number | null;
  content_type: string;
  public?: boolean;
  extra?: GorgiasFullApiSchemaJsonValue;
}>;
  body_html?: string | null;
  body_text?: string | null;
  channel: "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "help-center" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "sms" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo-review";
  external_id?: string | null;
  failed_datetime?: string | null;
  from_agent: boolean;
  message_id?: string | null;
  receiver?: {
  id?: number;
  email?: string;
};
  sender?: {
  id?: number;
  email?: string;
};
  sent_datetime?: string | null;
  source?: {
  type?: string;
  to?: ReadonlyArray<{
  name?: string | null;
  address?: string;
}>;
  cc?: ReadonlyArray<{
  name?: string | null;
  address?: string;
}>;
  bcc?: ReadonlyArray<{
  name?: string | null;
  address?: string;
}>;
  from?: {
  name?: string | null;
  address?: string;
};
};
  subject?: string | null;
  via?: "aircall" | "api" | "chat" | "contact_form" | "email" | "facebook" | "facebook-mention" | "facebook-messenger" | "facebook-recommendations" | "form" | "help-center" | "helpdesk" | "instagram" | "instagram-ad-comment" | "instagram-comment" | "instagram-direct-message" | "instagram-mention" | "internal-note" | "phone" | "rule" | "shopify" | "sms" | "twilio" | "twitter" | "twitter-direct-message" | "whatsapp" | "yotpo" | "yotpo-review" | "zendesk";
};
  "delete-ticket-tags": {
  names?: ReadonlyArray<string>;
  ids?: ReadonlyArray<number>;
};
  "list-ticket-tags": never;
  "create-ticket-tags": {
  names?: ReadonlyArray<string>;
  ids?: ReadonlyArray<number>;
};
  "update-ticket-tags": {
  names?: ReadonlyArray<string>;
  ids?: ReadonlyArray<number>;
};
  "post_/api/upload": {
  file?: string;
};
  "list-users": never;
  "create-user": {
  bio?: string | null;
  country?: string | null;
  email: string;
  external_id?: string;
  language?: "fr" | "en";
  meta?: {
  sso?: "google" | "office365";
  profile_picture_url?: string | null;
};
  name: string;
  role: {
  name: "admin" | "agent" | "basic-agent" | "lite-agent" | "observer-agent";
};
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
};
  "delete-user": never;
  "get-user": never;
  "update-user": {
  bio?: string | null;
  country?: string | null;
  email?: string;
  external_id?: string;
  language?: "fr" | "en";
  meta?: {
  sso?: "google" | "office365";
  profile_picture_url?: string | null;
};
  name?: string;
  new_password?: string;
  old_password?: string;
  password_confirmation?: string;
  role?: {
  name: "admin" | "agent" | "basic-agent" | "lite-agent" | "observer-agent";
};
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
  two_fa_code?: string | null;
};
  "list-views": never;
  "create-view": GorgiasFullApiSchemaViewCreate;
  "delete-view": never;
  "get-view": never;
  "update-view": GorgiasFullApiSchemaViewUpdate;
  "list-view-items": never;
  "update-view-items": {
  view?: {
  category?: string | null;
  fields?: ReadonlyArray<"id" | "details" | "tags" | "customer" | "last_message" | "name" | "email" | "created" | "updated" | "assignee" | "assignee_team" | "channel" | "closed" | "language" | "last_received_message" | "integrations" | "snooze" | "status" | "subject" | "priority">;
  filters?: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  search?: string | null;
  type?: "ticket-list";
};
};
  "list-widgets": never;
  "create-widget": {
  context?: "ticket" | "customer" | "user";
  deactivated_datetime?: string | null;
  integration_id?: number | null;
  app_id?: string | null;
  order?: number;
  template: {};
  type: "bigcommerce" | "custom" | "customer_external_data" | "http" | "magento2" | "recharge" | "shopify" | "smile" | "standalone" | "yotpo" | "klaviyo" | "stripe" | "woocommerce";
};
  "delete-widget": never;
  "get-widget": never;
  "update-widget": {
  context?: "ticket" | "customer" | "user";
  deactivated_datetime?: string | null;
  integration_id?: number | null;
  app_id?: string | null;
  order?: number;
  template?: {};
  type?: "bigcommerce" | "custom" | "customer_external_data" | "http" | "magento2" | "recharge" | "shopify" | "smile" | "standalone" | "yotpo" | "klaviyo" | "stripe" | "woocommerce";
};
}

export interface GorgiasFullApiOperationRequestBodyRequiredMap {
  "download-file": false;
  "get-account": false;
  "list-account-settings": false;
  "create-account-setting": true;
  "update-account-setting": true;
  "list-custom-fields": false;
  "create-custom-field": true;
  "update-custom-fields": true;
  "get-custom-field": false;
  "update-custom-field": true;
  "delete-customers": true;
  "list-customers": false;
  "create-customer": true;
  "list-customer-custom-fields-values": false;
  "update-customer-custom-field-values": true;
  "delete-customer-custom-field-value": false;
  "update-customer-custom-field-value": true;
  "update-customer-data": true;
  "delete-customer": false;
  "get-customer": false;
  "update-customer": true;
  "merge-customers": true;
  "list-events": false;
  "get-event": false;
  "list-integrations": false;
  "create-integration": true;
  "delete-integration": false;
  "get-integration": false;
  "update-integration": true;
  "list-jobs": false;
  "create-job": true;
  "cancel-job": false;
  "get-job": false;
  "update-job": true;
  "list-macros": false;
  "create-macro": true;
  "delete-macro": false;
  "get-macro": false;
  "update-macro": true;
  "bulk-archive-macros": true;
  "bulk-unarchive-macros": true;
  "list-messages": false;
  "search-metric-cards": false;
  "get-metric-card": false;
  "list-voice-call-events": false;
  "get-voice-call-event": false;
  "list-voice-call-recordings": false;
  "delete-voice-call-recording": false;
  "get-voice-call-recording": false;
  "list-voice-calls": false;
  "get-voice-call": false;
  "get-statistic": true;
  "list-rules": false;
  "create-rule": true;
  "delete-rule": false;
  "get-rule": false;
  "update-rule": true;
  "update-rules-priorities": true;
  "list-satisfaction-surveys": false;
  "create-satisfaction-survey": true;
  "get-satisfaction-survey": false;
  "update-satisfaction-survey": true;
  "search": true;
  "get-legacy-statistic": true;
  "download-legacy-statistic": true;
  "delete-tags": true;
  "list-tags": false;
  "create-tag": true;
  "merge-tags": true;
  "delete-tag": false;
  "get-tag": false;
  "update-tag": true;
  "list-teams": false;
  "create-team": true;
  "delete-team": false;
  "get-team": false;
  "update-team": true;
  "list-tickets": false;
  "create-ticket": true;
  "delete-ticket": false;
  "get-ticket": false;
  "update-ticket": true;
  "list-ticket-custom-fields": false;
  "update-ticket-custom-fields": true;
  "delete-ticket-custom-field": false;
  "update-ticket-custom-field": true;
  "list-ticket-messages": false;
  "create-ticket-message": true;
  "delete-ticket-message": false;
  "get-ticket-message": false;
  "update-ticket-message": true;
  "delete-ticket-tags": true;
  "list-ticket-tags": false;
  "create-ticket-tags": true;
  "update-ticket-tags": true;
  "post_/api/upload": true;
  "list-users": false;
  "create-user": true;
  "delete-user": false;
  "get-user": false;
  "update-user": true;
  "list-views": false;
  "create-view": true;
  "delete-view": false;
  "get-view": false;
  "update-view": true;
  "list-view-items": false;
  "update-view-items": true;
  "list-widgets": false;
  "create-widget": true;
  "delete-widget": false;
  "get-widget": false;
  "update-widget": true;
}

export interface GorgiasFullApiOperationResponseMap {
  "download-file": GorgiasFullApiSchemaJsonValue;
  "get-account": GorgiasFullApiSchemaAccount;
  "list-account-settings": {
  data: ReadonlyArray<(GorgiasFullApiSchemaAccountSettingSatisfactionSurveysTyped | GorgiasFullApiSchemaAccountSettingAutoMergeTyped | GorgiasFullApiSchemaAccountSettingAutoSplitTyped | GorgiasFullApiSchemaAccountSettingBusinessHoursTyped | GorgiasFullApiSchemaAccountSettingTicketAssignmentTyped | GorgiasFullApiSchemaAccountSettingViewsOrderingTyped | GorgiasFullApiSchemaAccountSettingAccessTyped | GorgiasFullApiSchemaAccountSettingViewsVisibilityTyped | GorgiasFullApiSchemaAccountSettingAgentsTableConfigTyped | GorgiasFullApiSchemaAccountSettingAgentsAvailabilityTableConfigTyped | GorgiasFullApiSchemaAccountSettingChannelsTableConfigTyped | GorgiasFullApiSchemaAccountSettingProductInsightsTableConfigTyped | GorgiasFullApiSchemaAccountSettingInTicketSuggestionTyped | GorgiasFullApiSchemaAccountSettingAgentCostsTyped | GorgiasFullApiSchemaAccountSettingLimitsTyped | GorgiasFullApiSchemaAccountSettingDefaultIntegrationTyped)>;
};
  "create-account-setting": (GorgiasFullApiSchemaAccountSettingSatisfactionSurveysTyped2 | GorgiasFullApiSchemaAccountSettingAutoMergeTyped2 | GorgiasFullApiSchemaAccountSettingAutoSplitTyped2 | GorgiasFullApiSchemaAccountSettingBusinessHoursTyped2 | GorgiasFullApiSchemaAccountSettingTicketAssignmentTyped2 | GorgiasFullApiSchemaAccountSettingViewsOrderingTyped2 | GorgiasFullApiSchemaAccountSettingAccessTyped2 | GorgiasFullApiSchemaAccountSettingViewsVisibilityTyped2 | GorgiasFullApiSchemaAccountSettingAgentsTableConfigTyped2 | GorgiasFullApiSchemaAccountSettingAgentsAvailabilityTableConfigTyped2 | GorgiasFullApiSchemaAccountSettingChannelsTableConfigTyped2 | GorgiasFullApiSchemaAccountSettingProductInsightsTableConfigTyped2 | GorgiasFullApiSchemaAccountSettingInTicketSuggestionTyped2 | GorgiasFullApiSchemaAccountSettingAgentCostsTyped2 | GorgiasFullApiSchemaAccountSettingLimitsTyped2 | GorgiasFullApiSchemaAccountSettingDefaultIntegrationTyped2);
  "update-account-setting": (GorgiasFullApiSchemaAccountSettingSatisfactionSurveysTyped3 | GorgiasFullApiSchemaAccountSettingAutoMergeTyped3 | GorgiasFullApiSchemaAccountSettingAutoSplitTyped3 | GorgiasFullApiSchemaAccountSettingBusinessHoursTyped3 | GorgiasFullApiSchemaAccountSettingTicketAssignmentTyped3 | GorgiasFullApiSchemaAccountSettingViewsOrderingTyped3 | GorgiasFullApiSchemaAccountSettingAccessTyped3 | GorgiasFullApiSchemaAccountSettingViewsVisibilityTyped3 | GorgiasFullApiSchemaAccountSettingAgentsTableConfigTyped3 | GorgiasFullApiSchemaAccountSettingAgentsAvailabilityTableConfigTyped3 | GorgiasFullApiSchemaAccountSettingChannelsTableConfigTyped3 | GorgiasFullApiSchemaAccountSettingProductInsightsTableConfigTyped3 | GorgiasFullApiSchemaAccountSettingInTicketSuggestionTyped3 | GorgiasFullApiSchemaAccountSettingAgentCostsTyped3 | GorgiasFullApiSchemaAccountSettingLimitsTyped3 | GorgiasFullApiSchemaAccountSettingDefaultIntegrationTyped3);
  "list-custom-fields": {
  object: string;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaCustomField>;
  meta: GorgiasFullApiSchemaCursorPaginationMeta;
};
  "create-custom-field": GorgiasFullApiSchemaCustomField2;
  "update-custom-fields": ReadonlyArray<GorgiasFullApiSchemaCustomField3>;
  "get-custom-field": GorgiasFullApiSchemaCustomField4;
  "update-custom-field": GorgiasFullApiSchemaCustomField5;
  "delete-customers": void;
  "list-customers": ReadonlyArray<{
  id?: number;
  created_datetime?: string | null;
  email?: string | null;
  external_id?: string | null;
  firstname?: string;
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  lastname?: string;
  name?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
  updated_datetime?: string | null;
}>;
  "create-customer": GorgiasFullApiSchemaCustomer;
  "list-customer-custom-fields-values": ReadonlyArray<GorgiasFullApiSchemaCustomerCustomFieldWithValue>;
  "update-customer-custom-field-values": ReadonlyArray<GorgiasFullApiSchemaCustomerCustomFieldWithValue2>;
  "delete-customer-custom-field-value": void;
  "update-customer-custom-field-value": GorgiasFullApiSchemaCustomerCustomFieldWithValue3;
  "update-customer-data": void;
  "delete-customer": void;
  "get-customer": {
  id?: number;
  channels?: ReadonlyArray<{
  id?: number;
}>;
  created_datetime?: string | null;
  email?: string | null;
  external_id?: string | null;
  firstname?: string;
  integrations?: {};
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  lastname?: string;
  name?: string | null;
  note?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
  updated_datetime?: string | null;
  external_data?: ReadonlyArray<{}>;
  ecommerce_data?: {
  readonly [key: string]: {
  store?: {
  id?: number;
  currencies?: ReadonlyArray<"afn" | "eur" | "all" | "dzd" | "usd" | "aoa" | "xcd" | "ars" | "amd" | "awg" | "aud" | "azn" | "bsd" | "bhd" | "bdt" | "bbd" | "byn" | "bzd" | "xof" | "bmd" | "inr" | "btn" | "bob" | "bov" | "bam" | "bwp" | "nok" | "brl" | "bnd" | "bgn" | "bif" | "cve" | "khr" | "xaf" | "cad" | "kyd" | "clp" | "clf" | "cny" | "cop" | "cou" | "kmf" | "cdf" | "nzd" | "crc" | "hrk" | "cup" | "cuc" | "ang" | "czk" | "dkk" | "djf" | "dop" | "egp" | "svc" | "ern" | "szl" | "etb" | "fkp" | "fjd" | "xpf" | "gmd" | "gel" | "ghs" | "gip" | "gtq" | "gbp" | "gnf" | "gyd" | "htg" | "hnl" | "hkd" | "huf" | "isk" | "idr" | "xdr" | "irr" | "iqd" | "ils" | "jmd" | "jpy" | "jod" | "kzt" | "kes" | "kpw" | "krw" | "kwd" | "kgs" | "lak" | "lbp" | "lsl" | "zar" | "lrd" | "lyd" | "chf" | "mop" | "mkd" | "mga" | "mwk" | "myr" | "mvr" | "mru" | "mur" | "xua" | "mxn" | "mxv" | "mdl" | "mnt" | "mad" | "mzn" | "mmk" | "nad" | "npr" | "nio" | "ngn" | "omr" | "pkr" | "pab" | "pgk" | "pyg" | "pen" | "php" | "pln" | "qar" | "ron" | "rub" | "rwf" | "shp" | "wst" | "stn" | "sar" | "rsd" | "scr" | "sll" | "sle" | "sgd" | "xsu" | "sbd" | "sos" | "ssp" | "lkr" | "sdg" | "srd" | "sek" | "che" | "chw" | "syp" | "twd" | "tjs" | "tzs" | "thb" | "top" | "ttd" | "tnd" | "try" | "tmt" | "ugx" | "uah" | "aed" | "usn" | "uyu" | "uyi" | "uyw" | "uzs" | "vuv" | "ves" | "ved" | "vnd" | "yer" | "zmw" | "zwl" | "xba" | "xbb" | "xbc" | "xbd" | "xts" | "xxx" | "xau" | "xpd" | "xpt" | "xag">;
  default_currency?: "afn" | "eur" | "all" | "dzd" | "usd" | "aoa" | "xcd" | "ars" | "amd" | "awg" | "aud" | "azn" | "bsd" | "bhd" | "bdt" | "bbd" | "byn" | "bzd" | "xof" | "bmd" | "inr" | "btn" | "bob" | "bov" | "bam" | "bwp" | "nok" | "brl" | "bnd" | "bgn" | "bif" | "cve" | "khr" | "xaf" | "cad" | "kyd" | "clp" | "clf" | "cny" | "cop" | "cou" | "kmf" | "cdf" | "nzd" | "crc" | "hrk" | "cup" | "cuc" | "ang" | "czk" | "dkk" | "djf" | "dop" | "egp" | "svc" | "ern" | "szl" | "etb" | "fkp" | "fjd" | "xpf" | "gmd" | "gel" | "ghs" | "gip" | "gtq" | "gbp" | "gnf" | "gyd" | "htg" | "hnl" | "hkd" | "huf" | "isk" | "idr" | "xdr" | "irr" | "iqd" | "ils" | "jmd" | "jpy" | "jod" | "kzt" | "kes" | "kpw" | "krw" | "kwd" | "kgs" | "lak" | "lbp" | "lsl" | "zar" | "lrd" | "lyd" | "chf" | "mop" | "mkd" | "mga" | "mwk" | "myr" | "mvr" | "mru" | "mur" | "xua" | "mxn" | "mxv" | "mdl" | "mnt" | "mad" | "mzn" | "mmk" | "nad" | "npr" | "nio" | "ngn" | "omr" | "pkr" | "pab" | "pgk" | "pyg" | "pen" | "php" | "pln" | "qar" | "ron" | "rub" | "rwf" | "shp" | "wst" | "stn" | "sar" | "rsd" | "scr" | "sll" | "sle" | "sgd" | "xsu" | "sbd" | "sos" | "ssp" | "lkr" | "sdg" | "srd" | "sek" | "che" | "chw" | "syp" | "twd" | "tjs" | "tzs" | "thb" | "top" | "ttd" | "tnd" | "try" | "tmt" | "ugx" | "uah" | "aed" | "usn" | "uyu" | "uyi" | "uyw" | "uzs" | "vuv" | "ves" | "ved" | "vnd" | "yer" | "zmw" | "zwl" | "xba" | "xbb" | "xbc" | "xbd" | "xts" | "xxx" | "xau" | "xpd" | "xpt" | "xag";
  display_name?: string;
  name?: string;
  type?: "bigcommerce" | "magento" | "shopify" | "woocommerce";
  url?: string;
  helpdesk_integration_id?: number;
  uuid?: string;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  shopper?: {
  id?: number;
  external_id?: string;
  helpdesk_customer_id?: number;
  email_address?: string | null;
  phone_number?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  last_name?: string | null;
  birthdate?: string | null;
  status?: "tax_exempt" | "veteran";
  accepts_marketing_email?: boolean;
  accepts_marketing_sms?: boolean;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  orders?: ReadonlyArray<{
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  number?: number;
  name?: string;
  currency?: "afn" | "eur" | "all" | "dzd" | "usd" | "aoa" | "xcd" | "ars" | "amd" | "awg" | "aud" | "azn" | "bsd" | "bhd" | "bdt" | "bbd" | "byn" | "bzd" | "xof" | "bmd" | "inr" | "btn" | "bob" | "bov" | "bam" | "bwp" | "nok" | "brl" | "bnd" | "bgn" | "bif" | "cve" | "khr" | "xaf" | "cad" | "kyd" | "clp" | "clf" | "cny" | "cop" | "cou" | "kmf" | "cdf" | "nzd" | "crc" | "hrk" | "cup" | "cuc" | "ang" | "czk" | "dkk" | "djf" | "dop" | "egp" | "svc" | "ern" | "szl" | "etb" | "fkp" | "fjd" | "xpf" | "gmd" | "gel" | "ghs" | "gip" | "gtq" | "gbp" | "gnf" | "gyd" | "htg" | "hnl" | "hkd" | "huf" | "isk" | "idr" | "xdr" | "irr" | "iqd" | "ils" | "jmd" | "jpy" | "jod" | "kzt" | "kes" | "kpw" | "krw" | "kwd" | "kgs" | "lak" | "lbp" | "lsl" | "zar" | "lrd" | "lyd" | "chf" | "mop" | "mkd" | "mga" | "mwk" | "myr" | "mvr" | "mru" | "mur" | "xua" | "mxn" | "mxv" | "mdl" | "mnt" | "mad" | "mzn" | "mmk" | "nad" | "npr" | "nio" | "ngn" | "omr" | "pkr" | "pab" | "pgk" | "pyg" | "pen" | "php" | "pln" | "qar" | "ron" | "rub" | "rwf" | "shp" | "wst" | "stn" | "sar" | "rsd" | "scr" | "sll" | "sle" | "sgd" | "xsu" | "sbd" | "sos" | "ssp" | "lkr" | "sdg" | "srd" | "sek" | "che" | "chw" | "syp" | "twd" | "tjs" | "tzs" | "thb" | "top" | "ttd" | "tnd" | "try" | "tmt" | "ugx" | "uah" | "aed" | "usn" | "uyu" | "uyi" | "uyw" | "uzs" | "vuv" | "ves" | "ved" | "vnd" | "yer" | "zmw" | "zwl" | "xba" | "xbb" | "xbc" | "xbd" | "xts" | "xxx" | "xau" | "xpd" | "xpt" | "xag";
  discount_codes?: ReadonlyArray<string> | null;
  discount_amount?: number | null;
  subtotal_amount?: number | null;
  shipping_amount?: number | null;
  tax_amount?: number | null;
  total_amount?: number;
  external_status?: string | null;
  external_fulfillment_status?: string | null;
  external_payment_status?: string | null;
  status?: "partially_fulfilled" | "completed" | "canceled" | "on_hold" | "awaiting_fulfillment" | "awaiting_payment" | "scheduled" | "order_pending";
  payment_status?: "refunded" | "partially_refunded" | "unpaid" | "voided" | "failed" | "manual_verification_required" | "customer_authentication_required" | "paid" | "declined" | "authorized";
  billing_address?: {
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  preferred?: boolean;
  line_1?: string;
  line_2?: string | null;
  city?: string;
  state?: string | null;
  country?: string;
  zip_code?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  shipping_address?: {
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  preferred?: boolean;
  line_1?: string;
  line_2?: string | null;
  city?: string;
  state?: string | null;
  country?: string;
  zip_code?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  line_items?: ReadonlyArray<{
  id?: number;
  title?: string;
  taxable?: boolean | null;
  requires_shipping?: boolean | null;
  unit_price?: number;
  discount_amount?: number | null;
  discount_type?: "percentage" | "fixed_amount";
  discount_reason?: string | null;
  quantity?: number;
  total_amount?: number;
  product_options?: {} | null;
  fulfilled_quantity?: number | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
}>;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
}>;
  addresses?: ReadonlyArray<{
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  preferred?: boolean;
  line_1?: string;
  line_2?: string | null;
  city?: string;
  state?: string | null;
  country?: string;
  zip_code?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
}>;
} | undefined;
};
};
  "update-customer": GorgiasFullApiSchemaCustomer2;
  "merge-customers": {
  id?: number;
  channels?: ReadonlyArray<{
  id?: number;
}>;
  created_datetime?: string | null;
  email?: string | null;
  external_id?: string | null;
  firstname?: string;
  integrations?: {};
  language?: "aa" | "ab" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "ba" | "bm" | "eu" | "be" | "bn" | "bh" | "bi" | "bs" | "br" | "bg" | "my" | "ca" | "ch" | "ce" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "fy" | "ff" | "ka" | "de" | "gd" | "ga" | "gl" | "gv" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hr" | "hu" | "ig" | "is" | "io" | "ii" | "iu" | "ie" | "ia" | "id" | "ik" | "it" | "jv" | "ja" | "kl" | "kn" | "ks" | "kr" | "kk" | "km" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lb" | "lu" | "lg" | "mk" | "mh" | "ml" | "mi" | "mr" | "ms" | "mg" | "mt" | "mn" | "na" | "nv" | "nr" | "nd" | "ng" | "ne" | "nn" | "nb" | "no" | "ny" | "oc" | "oj" | "or" | "om" | "os" | "pa" | "fa" | "pi" | "pl" | "pt" | "ps" | "qu" | "rc" | "rm" | "ro" | "rn" | "ru" | "sg" | "sa" | "si" | "sk" | "sl" | "se" | "sm" | "sn" | "sd" | "so" | "st" | "es" | "sc" | "sr" | "ss" | "su" | "sw" | "sv" | "ty" | "ta" | "tt" | "te" | "tg" | "tl" | "th" | "bo" | "ti" | "to" | "tn" | "ts" | "tk" | "tr" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "cy" | "wa" | "wo" | "xh" | "yi" | "yo" | "za" | "zu";
  lastname?: string;
  name?: string | null;
  note?: string | null;
  timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
  updated_datetime?: string | null;
  external_data?: ReadonlyArray<{}>;
  ecommerce_data?: {
  readonly [key: string]: {
  store?: {
  id?: number;
  currencies?: ReadonlyArray<"afn" | "eur" | "all" | "dzd" | "usd" | "aoa" | "xcd" | "ars" | "amd" | "awg" | "aud" | "azn" | "bsd" | "bhd" | "bdt" | "bbd" | "byn" | "bzd" | "xof" | "bmd" | "inr" | "btn" | "bob" | "bov" | "bam" | "bwp" | "nok" | "brl" | "bnd" | "bgn" | "bif" | "cve" | "khr" | "xaf" | "cad" | "kyd" | "clp" | "clf" | "cny" | "cop" | "cou" | "kmf" | "cdf" | "nzd" | "crc" | "hrk" | "cup" | "cuc" | "ang" | "czk" | "dkk" | "djf" | "dop" | "egp" | "svc" | "ern" | "szl" | "etb" | "fkp" | "fjd" | "xpf" | "gmd" | "gel" | "ghs" | "gip" | "gtq" | "gbp" | "gnf" | "gyd" | "htg" | "hnl" | "hkd" | "huf" | "isk" | "idr" | "xdr" | "irr" | "iqd" | "ils" | "jmd" | "jpy" | "jod" | "kzt" | "kes" | "kpw" | "krw" | "kwd" | "kgs" | "lak" | "lbp" | "lsl" | "zar" | "lrd" | "lyd" | "chf" | "mop" | "mkd" | "mga" | "mwk" | "myr" | "mvr" | "mru" | "mur" | "xua" | "mxn" | "mxv" | "mdl" | "mnt" | "mad" | "mzn" | "mmk" | "nad" | "npr" | "nio" | "ngn" | "omr" | "pkr" | "pab" | "pgk" | "pyg" | "pen" | "php" | "pln" | "qar" | "ron" | "rub" | "rwf" | "shp" | "wst" | "stn" | "sar" | "rsd" | "scr" | "sll" | "sle" | "sgd" | "xsu" | "sbd" | "sos" | "ssp" | "lkr" | "sdg" | "srd" | "sek" | "che" | "chw" | "syp" | "twd" | "tjs" | "tzs" | "thb" | "top" | "ttd" | "tnd" | "try" | "tmt" | "ugx" | "uah" | "aed" | "usn" | "uyu" | "uyi" | "uyw" | "uzs" | "vuv" | "ves" | "ved" | "vnd" | "yer" | "zmw" | "zwl" | "xba" | "xbb" | "xbc" | "xbd" | "xts" | "xxx" | "xau" | "xpd" | "xpt" | "xag">;
  default_currency?: "afn" | "eur" | "all" | "dzd" | "usd" | "aoa" | "xcd" | "ars" | "amd" | "awg" | "aud" | "azn" | "bsd" | "bhd" | "bdt" | "bbd" | "byn" | "bzd" | "xof" | "bmd" | "inr" | "btn" | "bob" | "bov" | "bam" | "bwp" | "nok" | "brl" | "bnd" | "bgn" | "bif" | "cve" | "khr" | "xaf" | "cad" | "kyd" | "clp" | "clf" | "cny" | "cop" | "cou" | "kmf" | "cdf" | "nzd" | "crc" | "hrk" | "cup" | "cuc" | "ang" | "czk" | "dkk" | "djf" | "dop" | "egp" | "svc" | "ern" | "szl" | "etb" | "fkp" | "fjd" | "xpf" | "gmd" | "gel" | "ghs" | "gip" | "gtq" | "gbp" | "gnf" | "gyd" | "htg" | "hnl" | "hkd" | "huf" | "isk" | "idr" | "xdr" | "irr" | "iqd" | "ils" | "jmd" | "jpy" | "jod" | "kzt" | "kes" | "kpw" | "krw" | "kwd" | "kgs" | "lak" | "lbp" | "lsl" | "zar" | "lrd" | "lyd" | "chf" | "mop" | "mkd" | "mga" | "mwk" | "myr" | "mvr" | "mru" | "mur" | "xua" | "mxn" | "mxv" | "mdl" | "mnt" | "mad" | "mzn" | "mmk" | "nad" | "npr" | "nio" | "ngn" | "omr" | "pkr" | "pab" | "pgk" | "pyg" | "pen" | "php" | "pln" | "qar" | "ron" | "rub" | "rwf" | "shp" | "wst" | "stn" | "sar" | "rsd" | "scr" | "sll" | "sle" | "sgd" | "xsu" | "sbd" | "sos" | "ssp" | "lkr" | "sdg" | "srd" | "sek" | "che" | "chw" | "syp" | "twd" | "tjs" | "tzs" | "thb" | "top" | "ttd" | "tnd" | "try" | "tmt" | "ugx" | "uah" | "aed" | "usn" | "uyu" | "uyi" | "uyw" | "uzs" | "vuv" | "ves" | "ved" | "vnd" | "yer" | "zmw" | "zwl" | "xba" | "xbb" | "xbc" | "xbd" | "xts" | "xxx" | "xau" | "xpd" | "xpt" | "xag";
  display_name?: string;
  name?: string;
  type?: "bigcommerce" | "magento" | "shopify" | "woocommerce";
  url?: string;
  helpdesk_integration_id?: number;
  uuid?: string;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  shopper?: {
  id?: number;
  external_id?: string;
  helpdesk_customer_id?: number;
  email_address?: string | null;
  phone_number?: string | null;
  first_name?: string | null;
  middle_name?: string | null;
  last_name?: string | null;
  birthdate?: string | null;
  status?: "tax_exempt" | "veteran";
  accepts_marketing_email?: boolean;
  accepts_marketing_sms?: boolean;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  orders?: ReadonlyArray<{
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  number?: number;
  name?: string;
  currency?: "afn" | "eur" | "all" | "dzd" | "usd" | "aoa" | "xcd" | "ars" | "amd" | "awg" | "aud" | "azn" | "bsd" | "bhd" | "bdt" | "bbd" | "byn" | "bzd" | "xof" | "bmd" | "inr" | "btn" | "bob" | "bov" | "bam" | "bwp" | "nok" | "brl" | "bnd" | "bgn" | "bif" | "cve" | "khr" | "xaf" | "cad" | "kyd" | "clp" | "clf" | "cny" | "cop" | "cou" | "kmf" | "cdf" | "nzd" | "crc" | "hrk" | "cup" | "cuc" | "ang" | "czk" | "dkk" | "djf" | "dop" | "egp" | "svc" | "ern" | "szl" | "etb" | "fkp" | "fjd" | "xpf" | "gmd" | "gel" | "ghs" | "gip" | "gtq" | "gbp" | "gnf" | "gyd" | "htg" | "hnl" | "hkd" | "huf" | "isk" | "idr" | "xdr" | "irr" | "iqd" | "ils" | "jmd" | "jpy" | "jod" | "kzt" | "kes" | "kpw" | "krw" | "kwd" | "kgs" | "lak" | "lbp" | "lsl" | "zar" | "lrd" | "lyd" | "chf" | "mop" | "mkd" | "mga" | "mwk" | "myr" | "mvr" | "mru" | "mur" | "xua" | "mxn" | "mxv" | "mdl" | "mnt" | "mad" | "mzn" | "mmk" | "nad" | "npr" | "nio" | "ngn" | "omr" | "pkr" | "pab" | "pgk" | "pyg" | "pen" | "php" | "pln" | "qar" | "ron" | "rub" | "rwf" | "shp" | "wst" | "stn" | "sar" | "rsd" | "scr" | "sll" | "sle" | "sgd" | "xsu" | "sbd" | "sos" | "ssp" | "lkr" | "sdg" | "srd" | "sek" | "che" | "chw" | "syp" | "twd" | "tjs" | "tzs" | "thb" | "top" | "ttd" | "tnd" | "try" | "tmt" | "ugx" | "uah" | "aed" | "usn" | "uyu" | "uyi" | "uyw" | "uzs" | "vuv" | "ves" | "ved" | "vnd" | "yer" | "zmw" | "zwl" | "xba" | "xbb" | "xbc" | "xbd" | "xts" | "xxx" | "xau" | "xpd" | "xpt" | "xag";
  discount_codes?: ReadonlyArray<string> | null;
  discount_amount?: number | null;
  subtotal_amount?: number | null;
  shipping_amount?: number | null;
  tax_amount?: number | null;
  total_amount?: number;
  external_status?: string | null;
  external_fulfillment_status?: string | null;
  external_payment_status?: string | null;
  status?: "partially_fulfilled" | "completed" | "canceled" | "on_hold" | "awaiting_fulfillment" | "awaiting_payment" | "scheduled" | "order_pending";
  payment_status?: "refunded" | "partially_refunded" | "unpaid" | "voided" | "failed" | "manual_verification_required" | "customer_authentication_required" | "paid" | "declined" | "authorized";
  billing_address?: {
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  preferred?: boolean;
  line_1?: string;
  line_2?: string | null;
  city?: string;
  state?: string | null;
  country?: string;
  zip_code?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  shipping_address?: {
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  preferred?: boolean;
  line_1?: string;
  line_2?: string | null;
  city?: string;
  state?: string | null;
  country?: string;
  zip_code?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
};
  line_items?: ReadonlyArray<{
  id?: number;
  title?: string;
  taxable?: boolean | null;
  requires_shipping?: boolean | null;
  unit_price?: number;
  discount_amount?: number | null;
  discount_type?: "percentage" | "fixed_amount";
  discount_reason?: string | null;
  quantity?: number;
  total_amount?: number;
  product_options?: {} | null;
  fulfilled_quantity?: number | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
}>;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
}>;
  addresses?: ReadonlyArray<{
  id?: number;
  external_id?: string;
  shopper_external_id?: string;
  preferred?: boolean;
  line_1?: string;
  line_2?: string | null;
  city?: string;
  state?: string | null;
  country?: string;
  zip_code?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string | null;
  created_datetime?: string;
  updated_datetime?: string | null;
  deleted_datetime?: string | null;
}>;
} | undefined;
};
};
  "list-events": ReadonlyArray<GorgiasFullApiSchemaEvent>;
  "get-event": GorgiasFullApiSchemaEvent2;
  "list-integrations": {
  meta: {
  next_cursor: string | null;
  prev_cursor: string | null;
};
  object: GorgiasFullApiSchemaJsonValue;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaIntegration>;
};
  "create-integration": GorgiasFullApiSchemaIntegration2;
  "delete-integration": void;
  "get-integration": GorgiasFullApiSchemaIntegration3;
  "update-integration": GorgiasFullApiSchemaIntegration4;
  "list-jobs": {
  data: ReadonlyArray<GorgiasFullApiSchemaJob>;
  meta: {
  next_cursor?: string;
  prev_cursor?: string;
};
};
  "create-job": GorgiasFullApiSchemaJob2;
  "cancel-job": void;
  "get-job": GorgiasFullApiSchemaJob3;
  "update-job": GorgiasFullApiSchemaJob4;
  "list-macros": ReadonlyArray<GorgiasFullApiSchemaMacro>;
  "create-macro": GorgiasFullApiSchemaMacro2;
  "delete-macro": void;
  "get-macro": GorgiasFullApiSchemaMacro3;
  "update-macro": GorgiasFullApiSchemaMacro4;
  "bulk-archive-macros": GorgiasFullApiSchemaArchiveMacrosAsUserResult;
  "bulk-unarchive-macros": GorgiasFullApiSchemaUnarchiveMacrosAsUserResult;
  "list-messages": {
  object: string;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaTicketMessage>;
  meta: GorgiasFullApiSchemaCursorPaginationMeta2;
};
  "search-metric-cards": GorgiasFullApiSchemaMetricCardList;
  "get-metric-card": GorgiasFullApiSchemaMetricCard;
  "list-voice-call-events": ReadonlyArray<GorgiasFullApiSchemaVoiceCallEvent>;
  "get-voice-call-event": GorgiasFullApiSchemaVoiceCallEvent2;
  "list-voice-call-recordings": ReadonlyArray<GorgiasFullApiSchemaVoiceCallRecording>;
  "delete-voice-call-recording": void;
  "get-voice-call-recording": GorgiasFullApiSchemaVoiceCallRecording2;
  "list-voice-calls": {
  meta: {
  next_cursor: string | null;
  prev_cursor: string | null;
};
  object: GorgiasFullApiSchemaJsonValue;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaVoiceCall>;
};
  "get-voice-call": GorgiasFullApiSchemaVoiceCall2;
  "get-statistic": GorgiasFullApiSchemaAnalyticsReporting;
  "list-rules": ReadonlyArray<GorgiasFullApiSchemaRule>;
  "create-rule": GorgiasFullApiSchemaRule2;
  "delete-rule": void;
  "get-rule": GorgiasFullApiSchemaRule3;
  "update-rule": GorgiasFullApiSchemaRule4;
  "update-rules-priorities": ReadonlyArray<GorgiasFullApiSchemaRule5>;
  "list-satisfaction-surveys": ReadonlyArray<GorgiasFullApiSchemaSatisfactionSurvey>;
  "create-satisfaction-survey": GorgiasFullApiSchemaSatisfactionSurvey2;
  "get-satisfaction-survey": GorgiasFullApiSchemaSatisfactionSurvey3;
  "update-satisfaction-survey": GorgiasFullApiSchemaSatisfactionSurvey4;
  "search": {};
  "get-legacy-statistic": GorgiasFullApiSchemaStatistic;
  "download-legacy-statistic": string;
  "delete-tags": void;
  "list-tags": {
  object: string;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaTag>;
  meta: GorgiasFullApiSchemaCursorPaginationMeta3;
};
  "create-tag": GorgiasFullApiSchemaTag2;
  "merge-tags": GorgiasFullApiSchemaTag3;
  "delete-tag": void;
  "get-tag": GorgiasFullApiSchemaTag4;
  "update-tag": GorgiasFullApiSchemaTag5;
  "list-teams": ReadonlyArray<GorgiasFullApiSchemaTeam>;
  "create-team": GorgiasFullApiSchemaTeam2;
  "delete-team": void;
  "get-team": GorgiasFullApiSchemaTeam3;
  "update-team": GorgiasFullApiSchemaTeam4;
  "list-tickets": {
  object: string;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaTicketCompact>;
  meta: GorgiasFullApiSchemaCursorPaginationMeta4;
};
  "create-ticket": GorgiasFullApiSchemaTicket;
  "delete-ticket": void;
  "get-ticket": GorgiasFullApiSchemaTicket2;
  "update-ticket": GorgiasFullApiSchemaTicket3;
  "list-ticket-custom-fields": ReadonlyArray<GorgiasFullApiSchemaTicketCustomFieldValue>;
  "update-ticket-custom-fields": ReadonlyArray<GorgiasFullApiSchemaTicketCustomFieldValue2>;
  "delete-ticket-custom-field": void;
  "update-ticket-custom-field": GorgiasFullApiSchemaTicketCustomFieldValue3;
  "list-ticket-messages": {
  object: string;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaTicketMessage2>;
  meta: GorgiasFullApiSchemaCursorPaginationMeta5;
};
  "create-ticket-message": GorgiasFullApiSchemaTicketMessage3;
  "delete-ticket-message": void;
  "get-ticket-message": GorgiasFullApiSchemaTicketMessage4;
  "update-ticket-message": GorgiasFullApiSchemaTicketMessage5;
  "delete-ticket-tags": void;
  "list-ticket-tags": ReadonlyArray<{
  id?: number;
  created_datetime?: string;
  decoration?: {
  color: string;
};
  deleted_datetime?: string;
  description?: string;
  name?: string;
  usage?: number;
  uri?: string;
}>;
  "create-ticket-tags": GorgiasFullApiSchemaJsonValue;
  "update-ticket-tags": void;
  "post_/api/upload": ReadonlyArray<GorgiasFullApiSchemaFile>;
  "list-users": ReadonlyArray<GorgiasFullApiSchemaUser>;
  "create-user": GorgiasFullApiSchemaUser2;
  "delete-user": void;
  "get-user": void;
  "update-user": GorgiasFullApiSchemaUser3;
  "list-views": {
  object: string;
  uri: string;
  data: ReadonlyArray<GorgiasFullApiSchemaView>;
  meta: GorgiasFullApiSchemaCursorPaginationMeta6;
};
  "create-view": GorgiasFullApiSchemaView2;
  "delete-view": void;
  "get-view": GorgiasFullApiSchemaView3;
  "update-view": GorgiasFullApiSchemaView4;
  "list-view-items": {
  data?: ReadonlyArray<{
  id?: number;
  uri?: string;
  external_id?: string | null;
  language?: string | null;
  status?: string;
  priority?: string;
  channel?: string;
  via?: string;
  from_agent?: boolean;
  customer: {
  id?: number;
  email?: string | null;
  name?: string | null;
  firstname?: string;
  lastname?: string;
  meta?:  | null;
};
  assignee_user?: {
  id?: number;
  email?: string | null;
  name?: string | null;
  firstname?: string;
  lastname?: string;
  meta?:  | null;
  bio?: string | null;
};
  assignee_team?: {
  id?: number;
  name: string;
  decoration?:  | null;
};
  subject?: string | null;
  excerpt?: string;
  integrations?: ReadonlyArray<{}>;
  meta?:  | null;
  tags?: ReadonlyArray<{
  id?: number;
  name: string;
  uri?: string;
  decoration?:  | null;
}>;
  messages_count?: number;
  is_unread?: boolean;
  spam?: boolean | null;
  created_datetime?: string | null;
  opened_datetime?: string | null;
  last_received_message_datetime?: string | null;
  last_message_datetime?: string | null;
  updated_datetime?: string | null;
  closed_datetime?: string | null;
  snooze_datetime?: string | null;
  trashed_datetime?: string | null;
  last_sent_message_not_delivered?: boolean | null;
}>;
  meta?: GorgiasFullApiSchemaViewItemsListRespMeta;
};
  "update-view-items": {
  data?: ReadonlyArray<{
  id?: number;
  uri?: string;
  external_id?: string | null;
  language?: string | null;
  status?: string;
  priority?: string;
  channel?: string;
  via?: string;
  from_agent?: boolean;
  customer: {
  id?: number;
  email?: string | null;
  name?: string | null;
  firstname?: string;
  lastname?: string;
  meta?:  | null;
};
  assignee_user?: {
  id?: number;
  email?: string | null;
  name?: string | null;
  firstname?: string;
  lastname?: string;
  meta?:  | null;
  bio?: string | null;
};
  assignee_team?: {
  id?: number;
  name: string;
  decoration?:  | null;
};
  subject?: string | null;
  excerpt?: string;
  integrations?: ReadonlyArray<{}>;
  meta?:  | null;
  tags?: ReadonlyArray<{
  id?: number;
  name: string;
  uri?: string;
  decoration?:  | null;
}>;
  messages_count?: number;
  is_unread?: boolean;
  spam?: boolean | null;
  created_datetime?: string | null;
  opened_datetime?: string | null;
  last_received_message_datetime?: string | null;
  last_message_datetime?: string | null;
  updated_datetime?: string | null;
  closed_datetime?: string | null;
  snooze_datetime?: string | null;
  trashed_datetime?: string | null;
  last_sent_message_not_delivered?: boolean | null;
}>;
  meta?: GorgiasFullApiSchemaViewItemsListRespMeta2;
};
  "list-widgets": ReadonlyArray<GorgiasFullApiSchemaWidget>;
  "create-widget": GorgiasFullApiSchemaWidget2;
  "delete-widget": void;
  "get-widget": GorgiasFullApiSchemaWidget3;
  "update-widget": GorgiasFullApiSchemaWidget4;
}
