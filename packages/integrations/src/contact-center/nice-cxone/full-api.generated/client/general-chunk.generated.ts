// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiGeneralOperationKeys = [
  "admin-general-api-docs:get-apiversion:GET:/apiversion",
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo",
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles",
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit",
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes",
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings",
  "admin-general-api-docs:GetCountries:GET:/countries",
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states",
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types",
  "admin-general-api-docs:RetrieveAFile:GET:/files",
  "admin-general-api-docs:UploadFile:POST:/files",
  "admin-general-api-docs:MoveFile:PUT:/files",
  "admin-general-api-docs:DeleteFile:DELETE:/files",
  "admin-general-api-docs:GetExternalfiles:GET:/files/external",
  "admin-general-api-docs:postexternalfiles:POST:/files/external",
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external",
  "admin-general-api-docs:ReturnFolder:GET:/folders",
  "admin-general-api-docs:DeleteFolder:DELETE:/folders",
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities",
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources",
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources",
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation",
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation",
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities",
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}",
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}",
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}",
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills",
  "admin-general-api-docs:ReturnsLocations:GET:/locations",
  "admin-general-api-docs:getMediaTypes:GET:/media-types",
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}",
  "admin-general-api-docs:MessageTemplates:GET:/message-templates",
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates",
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}",
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}",
  "admin-general-api-docs:getPermissions:GET:/permissions",
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}",
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes",
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact",
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact",
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}",
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}",
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles",
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}",
  "admin-general-api-docs:get-script:GET:/scripts",
  "admin-general-api-docs:create-script:POST:/scripts",
  "admin-general-api-docs:delete-script:DELETE:/scripts",
  "admin-general-api-docs:update-script:PUT:/scripts",
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}",
  "admin-general-api-docs:get-search-script:GET:/scripts/search",
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files",
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files",
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files",
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files",
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search",
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick",
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName",
  "admin-general-api-docs:post-start-script:POST:/scripts/start",
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders",
  "admin-general-api-docs:getServerTime:GET:/server-time",
  "admin-general-api-docs:ReturnsTags:GET:/tags",
  "admin-general-api-docs:CreatesTag:POST:/tags",
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}",
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}",
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact",
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact",
  "admin-general-api-docs:Timezones:GET:/timezones",
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones",
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones",
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes",
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes",
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers",
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}",
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}",
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}"
] as const;
export type NiceCxoneFullApiGeneralOperationKey = typeof NiceCxoneFullApiGeneralOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiGeneralOperationPathParamMap {
  "admin-general-api-docs:get-apiversion:GET:/apiversion": {};
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo": {};
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles": {};
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit": {};
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes": {};
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:GetCountries:GET:/countries": {};
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states": { "countryId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types": {};
  "admin-general-api-docs:RetrieveAFile:GET:/files": {};
  "admin-general-api-docs:UploadFile:POST:/files": {};
  "admin-general-api-docs:MoveFile:PUT:/files": {};
  "admin-general-api-docs:DeleteFile:DELETE:/files": {};
  "admin-general-api-docs:GetExternalfiles:GET:/files/external": {};
  "admin-general-api-docs:postexternalfiles:POST:/files/external": {};
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external": {};
  "admin-general-api-docs:ReturnFolder:GET:/folders": {};
  "admin-general-api-docs:DeleteFolder:DELETE:/folders": {};
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities": {};
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources": {};
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources": {};
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation": {};
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation": {};
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities": {};
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}": { "hoursOfOperationProfileId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}": { "hoursOfOperationProfileId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}": { "hoursOfOperationProfileId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills": { "hoursOfOperationProfileId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:ReturnsLocations:GET:/locations": {};
  "admin-general-api-docs:getMediaTypes:GET:/media-types": {};
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}": { "mediaTypeId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:MessageTemplates:GET:/message-templates": {};
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates": {};
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}": { "templateId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}": { "templateId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:getPermissions:GET:/permissions": {};
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}": { "agentId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes": {};
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact": {};
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact": {};
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}": { "pointOfContactId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}": { "pointOfContactId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles": {};
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}": { "profileId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:get-script:GET:/scripts": {};
  "admin-general-api-docs:create-script:POST:/scripts": {};
  "admin-general-api-docs:delete-script:DELETE:/scripts": {};
  "admin-general-api-docs:update-script:PUT:/scripts": {};
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}": { "scriptId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:get-search-script:GET:/scripts/search": {};
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files": {};
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files": {};
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files": {};
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files": {};
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search": {};
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick": {};
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName": {};
  "admin-general-api-docs:post-start-script:POST:/scripts/start": {};
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders": {};
  "admin-general-api-docs:getServerTime:GET:/server-time": {};
  "admin-general-api-docs:ReturnsTags:GET:/tags": {};
  "admin-general-api-docs:CreatesTag:POST:/tags": {};
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}": { "tagId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}": { "tagId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact": {};
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact": {};
  "admin-general-api-docs:Timezones:GET:/timezones": {};
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones": {};
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones": {};
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes": {};
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes": {};
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers": {};
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}": { "suppressedContactId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}": { "suppressedContactId": NiceCxoneFullApiPathParamValue };
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}": { "suppressedContactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiGeneralOperationRequestMap {
  "admin-general-api-docs:get-apiversion:GET:/apiversion": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-apiversion:GET:/apiversion">;
  "admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo">;
  "admin-general-api-docs:BrandingProfiles:GET:/branding-profiles": NiceCxoneFullApiOperationInput<"admin-general-api-docs:BrandingProfiles:GET:/branding-profiles">;
  "admin-general-api-docs:BusinessUnitInfo:GET:/business-unit": NiceCxoneFullApiOperationInput<"admin-general-api-docs:BusinessUnitInfo:GET:/business-unit">;
  "admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes">;
  "admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings">;
  "admin-general-api-docs:GetCountries:GET:/countries": NiceCxoneFullApiOperationInput<"admin-general-api-docs:GetCountries:GET:/countries">;
  "admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states": NiceCxoneFullApiOperationInput<"admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states">;
  "admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types": NiceCxoneFullApiOperationInput<"admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types">;
  "admin-general-api-docs:RetrieveAFile:GET:/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:RetrieveAFile:GET:/files">;
  "admin-general-api-docs:UploadFile:POST:/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:UploadFile:POST:/files">;
  "admin-general-api-docs:MoveFile:PUT:/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:MoveFile:PUT:/files">;
  "admin-general-api-docs:DeleteFile:DELETE:/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:DeleteFile:DELETE:/files">;
  "admin-general-api-docs:GetExternalfiles:GET:/files/external": NiceCxoneFullApiOperationInput<"admin-general-api-docs:GetExternalfiles:GET:/files/external">;
  "admin-general-api-docs:postexternalfiles:POST:/files/external": NiceCxoneFullApiOperationInput<"admin-general-api-docs:postexternalfiles:POST:/files/external">;
  "admin-general-api-docs:putexteranlfiles:PUT:/files/external": NiceCxoneFullApiOperationInput<"admin-general-api-docs:putexteranlfiles:PUT:/files/external">;
  "admin-general-api-docs:ReturnFolder:GET:/folders": NiceCxoneFullApiOperationInput<"admin-general-api-docs:ReturnFolder:GET:/folders">;
  "admin-general-api-docs:DeleteFolder:DELETE:/folders": NiceCxoneFullApiOperationInput<"admin-general-api-docs:DeleteFolder:DELETE:/folders">;
  "admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities": NiceCxoneFullApiOperationInput<"admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities">;
  "admin-general-api-docs:GetHiringSources:GET:/hiring-sources": NiceCxoneFullApiOperationInput<"admin-general-api-docs:GetHiringSources:GET:/hiring-sources">;
  "admin-general-api-docs:CreateHiringScource:POST:/hiring-sources": NiceCxoneFullApiOperationInput<"admin-general-api-docs:CreateHiringScource:POST:/hiring-sources">;
  "admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation">;
  "admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation": NiceCxoneFullApiOperationInput<"admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation">;
  "admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities">;
  "admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}">;
  "admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}">;
  "admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}">;
  "admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills": NiceCxoneFullApiOperationInput<"admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills">;
  "admin-general-api-docs:ReturnsLocations:GET:/locations": NiceCxoneFullApiOperationInput<"admin-general-api-docs:ReturnsLocations:GET:/locations">;
  "admin-general-api-docs:getMediaTypes:GET:/media-types": NiceCxoneFullApiOperationInput<"admin-general-api-docs:getMediaTypes:GET:/media-types">;
  "admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}">;
  "admin-general-api-docs:MessageTemplates:GET:/message-templates": NiceCxoneFullApiOperationInput<"admin-general-api-docs:MessageTemplates:GET:/message-templates">;
  "admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates": NiceCxoneFullApiOperationInput<"admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates">;
  "admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}">;
  "admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}">;
  "admin-general-api-docs:getPermissions:GET:/permissions": NiceCxoneFullApiOperationInput<"admin-general-api-docs:getPermissions:GET:/permissions">;
  "admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}">;
  "admin-general-api-docs:PhoneCodes:GET:/phone-codes": NiceCxoneFullApiOperationInput<"admin-general-api-docs:PhoneCodes:GET:/phone-codes">;
  "admin-general-api-docs:getPointsOfContact:GET:/points-of-contact": NiceCxoneFullApiOperationInput<"admin-general-api-docs:getPointsOfContact:GET:/points-of-contact">;
  "admin-general-api-docs:post-points-of-contact:POST:/points-of-contact": NiceCxoneFullApiOperationInput<"admin-general-api-docs:post-points-of-contact:POST:/points-of-contact">;
  "admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}">;
  "admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}">;
  "admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles": NiceCxoneFullApiOperationInput<"admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles">;
  "admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}">;
  "admin-general-api-docs:get-script:GET:/scripts": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-script:GET:/scripts">;
  "admin-general-api-docs:create-script:POST:/scripts": NiceCxoneFullApiOperationInput<"admin-general-api-docs:create-script:POST:/scripts">;
  "admin-general-api-docs:delete-script:DELETE:/scripts": NiceCxoneFullApiOperationInput<"admin-general-api-docs:delete-script:DELETE:/scripts">;
  "admin-general-api-docs:update-script:PUT:/scripts": NiceCxoneFullApiOperationInput<"admin-general-api-docs:update-script:PUT:/scripts">;
  "admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}">;
  "admin-general-api-docs:get-search-script:GET:/scripts/search": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-search-script:GET:/scripts/search">;
  "admin-general-api-docs:get_/scripts/files:GET:/scripts/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get_/scripts/files:GET:/scripts/files">;
  "admin-general-api-docs:post_/scripts/files:POST:/scripts/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:post_/scripts/files:POST:/scripts/files">;
  "admin-general-api-docs:put_/scripts/files:PUT:/scripts/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:put_/scripts/files:PUT:/scripts/files">;
  "admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files": NiceCxoneFullApiOperationInput<"admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files">;
  "admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search">;
  "admin-general-api-docs:post-kick-script:POST:/scripts/kick": NiceCxoneFullApiOperationInput<"admin-general-api-docs:post-kick-script:POST:/scripts/kick">;
  "admin-general-api-docs:get-script-history:GET:/scripts/historyByName": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-script-history:GET:/scripts/historyByName">;
  "admin-general-api-docs:post-start-script:POST:/scripts/start": NiceCxoneFullApiOperationInput<"admin-general-api-docs:post-start-script:POST:/scripts/start">;
  "admin-general-api-docs:get-scripts-folders:GET:/script-folders": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-scripts-folders:GET:/script-folders">;
  "admin-general-api-docs:getServerTime:GET:/server-time": NiceCxoneFullApiOperationInput<"admin-general-api-docs:getServerTime:GET:/server-time">;
  "admin-general-api-docs:ReturnsTags:GET:/tags": NiceCxoneFullApiOperationInput<"admin-general-api-docs:ReturnsTags:GET:/tags">;
  "admin-general-api-docs:CreatesTag:POST:/tags": NiceCxoneFullApiOperationInput<"admin-general-api-docs:CreatesTag:POST:/tags">;
  "admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}">;
  "admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}">;
  "admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact">;
  "admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact": NiceCxoneFullApiOperationInput<"admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact">;
  "admin-general-api-docs:Timezones:GET:/timezones": NiceCxoneFullApiOperationInput<"admin-general-api-docs:Timezones:GET:/timezones">;
  "admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones">;
  "admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones": NiceCxoneFullApiOperationInput<"admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones">;
  "admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes">;
  "admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes": NiceCxoneFullApiOperationInput<"admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes">;
  "admin-general-api-docs:get-phone-numbers:GET:/phone-numbers": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-phone-numbers:GET:/phone-numbers">;
  "admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}">;
  "admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}">;
  "admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}": NiceCxoneFullApiOperationInput<"admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}">;
}

export interface NiceCxoneFullApiGeneralGeneratedClient {
  AdminGeneralApiDocsGetApiversion(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-apiversion:GET:/apiversion">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-apiversion:GET:/apiversion"]>;
  AdminGeneralApiDocsGetApiversionreleaseinfo(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo"]>;
  AdminGeneralApiDocsBrandingProfiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:BrandingProfiles:GET:/branding-profiles">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:BrandingProfiles:GET:/branding-profiles"]>;
  AdminGeneralApiDocsBusinessUnitInfo(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:BusinessUnitInfo:GET:/business-unit">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:BusinessUnitInfo:GET:/business-unit"]>;
  AdminGeneralApiDocsGetBusinessUnitOutboundRoutes(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes"]>;
  AdminGeneralApiDocsGetAgentsIdAgentSettings(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings"]>;
  AdminGeneralApiDocsGetCountries(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetCountries:GET:/countries">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:GetCountries:GET:/countries"]>;
  AdminGeneralApiDocsGetsStatesProvinces(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states"]>;
  AdminGeneralApiDocsDataDefinitions(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types"]>;
  AdminGeneralApiDocsRetrieveAFile(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:RetrieveAFile:GET:/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:RetrieveAFile:GET:/files"]>;
  AdminGeneralApiDocsUploadFile(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:UploadFile:POST:/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:UploadFile:POST:/files"]>;
  AdminGeneralApiDocsMoveFile(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:MoveFile:PUT:/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:MoveFile:PUT:/files"]>;
  AdminGeneralApiDocsDeleteFile(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:DeleteFile:DELETE:/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:DeleteFile:DELETE:/files"]>;
  AdminGeneralApiDocsGetExternalfiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetExternalfiles:GET:/files/external">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:GetExternalfiles:GET:/files/external"]>;
  AdminGeneralApiDocsPostexternalfiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:postexternalfiles:POST:/files/external">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:postexternalfiles:POST:/files/external"]>;
  AdminGeneralApiDocsPutexteranlfiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:putexteranlfiles:PUT:/files/external">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:putexteranlfiles:PUT:/files/external"]>;
  AdminGeneralApiDocsReturnFolder(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:ReturnFolder:GET:/folders">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:ReturnFolder:GET:/folders"]>;
  AdminGeneralApiDocsDeleteFolder(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:DeleteFolder:DELETE:/folders">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:DeleteFolder:DELETE:/folders"]>;
  AdminGeneralApiDocsCategoriesAndPriorities(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities"]>;
  AdminGeneralApiDocsGetHiringSources(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetHiringSources:GET:/hiring-sources">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:GetHiringSources:GET:/hiring-sources"]>;
  AdminGeneralApiDocsCreateHiringScource(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CreateHiringScource:POST:/hiring-sources">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:CreateHiringScource:POST:/hiring-sources"]>;
  AdminGeneralApiDocsGetHoursOfOperation(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation"]>;
  AdminGeneralApiDocsPostHoursOfOperation(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation"]>;
  AdminGeneralApiDocsGetHoursOfOperationIdentities(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities"]>;
  AdminGeneralApiDocsGetHoursOfOperationById(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}"]>;
  AdminGeneralApiDocsUpdateHoursOfOperation(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}"]>;
  AdminGeneralApiDocsDeleteHoursOfOperation(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}"]>;
  AdminGeneralApiDocsUpdateHoursOfOperationSkills(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills"]>;
  AdminGeneralApiDocsReturnsLocations(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:ReturnsLocations:GET:/locations">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:ReturnsLocations:GET:/locations"]>;
  AdminGeneralApiDocsGetMediaTypes(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getMediaTypes:GET:/media-types">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:getMediaTypes:GET:/media-types"]>;
  AdminGeneralApiDocsGetMediaTypeById(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}"]>;
  AdminGeneralApiDocsMessageTemplates(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:MessageTemplates:GET:/message-templates">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:MessageTemplates:GET:/message-templates"]>;
  AdminGeneralApiDocsCreatesMessageTemplate(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates"]>;
  AdminGeneralApiDocsMessageTemplate(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}"]>;
  AdminGeneralApiDocsUpdatesMessageTemplate(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}"]>;
  AdminGeneralApiDocsGetPermissions(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getPermissions:GET:/permissions">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:getPermissions:GET:/permissions"]>;
  AdminGeneralApiDocsAgentPermissionsList(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}"]>;
  AdminGeneralApiDocsPhoneCodes(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:PhoneCodes:GET:/phone-codes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:PhoneCodes:GET:/phone-codes"]>;
  AdminGeneralApiDocsGetPointsOfContact(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getPointsOfContact:GET:/points-of-contact">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:getPointsOfContact:GET:/points-of-contact"]>;
  AdminGeneralApiDocsPostPointsOfContact(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-points-of-contact:POST:/points-of-contact">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:post-points-of-contact:POST:/points-of-contact"]>;
  AdminGeneralApiDocsGetPointOfContactById(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}"]>;
  AdminGeneralApiDocsPutPointsOfContactId(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}"]>;
  AdminGeneralApiDocsGetSecurityProfiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles"]>;
  AdminGeneralApiDocsGetSecurityProfilesID(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}"]>;
  AdminGeneralApiDocsGetScript(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-script:GET:/scripts">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-script:GET:/scripts"]>;
  AdminGeneralApiDocsCreateScript(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:create-script:POST:/scripts">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:create-script:POST:/scripts"]>;
  AdminGeneralApiDocsDeleteScript(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete-script:DELETE:/scripts">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:delete-script:DELETE:/scripts"]>;
  AdminGeneralApiDocsUpdateScript(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:update-script:PUT:/scripts">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:update-script:PUT:/scripts"]>;
  AdminGeneralApiDocsGetScriptsId(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}"]>;
  AdminGeneralApiDocsGetSearchScript(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-search-script:GET:/scripts/search">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-search-script:GET:/scripts/search"]>;
  AdminGeneralApiDocsGetScriptsFiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get_/scripts/files:GET:/scripts/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get_/scripts/files:GET:/scripts/files"]>;
  AdminGeneralApiDocsPostScriptsFiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post_/scripts/files:POST:/scripts/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:post_/scripts/files:POST:/scripts/files"]>;
  AdminGeneralApiDocsPutScriptsFiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put_/scripts/files:PUT:/scripts/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:put_/scripts/files:PUT:/scripts/files"]>;
  AdminGeneralApiDocsDeleteScriptsFiles(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files"]>;
  AdminGeneralApiDocsGetScriptsFilesSearch(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search"]>;
  AdminGeneralApiDocsPostKickScript(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-kick-script:POST:/scripts/kick">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:post-kick-script:POST:/scripts/kick"]>;
  AdminGeneralApiDocsGetScriptHistory(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-script-history:GET:/scripts/historyByName">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-script-history:GET:/scripts/historyByName"]>;
  AdminGeneralApiDocsPostStartScript(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-start-script:POST:/scripts/start">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:post-start-script:POST:/scripts/start"]>;
  AdminGeneralApiDocsGetScriptsFolders(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-scripts-folders:GET:/script-folders">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-scripts-folders:GET:/script-folders"]>;
  AdminGeneralApiDocsGetServerTime(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getServerTime:GET:/server-time">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:getServerTime:GET:/server-time"]>;
  AdminGeneralApiDocsReturnsTags(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:ReturnsTags:GET:/tags">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:ReturnsTags:GET:/tags"]>;
  AdminGeneralApiDocsCreatesTag(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CreatesTag:POST:/tags">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:CreatesTag:POST:/tags"]>;
  AdminGeneralApiDocsGetTagDetailsById(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}"]>;
  AdminGeneralApiDocsUpdatesTag(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}"]>;
  AdminGeneralApiDocsGetSuppressedContact(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact"]>;
  AdminGeneralApiDocsPostSuppressedContact(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact"]>;
  AdminGeneralApiDocsTimezones(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:Timezones:GET:/timezones">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:Timezones:GET:/timezones"]>;
  AdminGeneralApiDocsGetBusinessUnitTimeZones(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones"]>;
  AdminGeneralApiDocsPutBusinessUnitTimeZones(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones"]>;
  AdminGeneralApiDocsGetUnavailableCodes(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes"]>;
  AdminGeneralApiDocsPostUnavailableCodes(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes"]>;
  AdminGeneralApiDocsGetPhoneNumbers(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-phone-numbers:GET:/phone-numbers">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-phone-numbers:GET:/phone-numbers"]>;
  AdminGeneralApiDocsGetSuppressedContactId(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}"]>;
  AdminGeneralApiDocsPutSuppressedContactId(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}"]>;
  AdminGeneralApiDocsDeleteSuppressedContactId(...args: NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}"]>;
}

export const NiceCxoneFullApiGeneralGeneratedFunctionNames = [
  "AdminGeneralApiDocsGetApiversion",
  "AdminGeneralApiDocsGetApiversionreleaseinfo",
  "AdminGeneralApiDocsBrandingProfiles",
  "AdminGeneralApiDocsBusinessUnitInfo",
  "AdminGeneralApiDocsGetBusinessUnitOutboundRoutes",
  "AdminGeneralApiDocsGetAgentsIdAgentSettings",
  "AdminGeneralApiDocsGetCountries",
  "AdminGeneralApiDocsGetsStatesProvinces",
  "AdminGeneralApiDocsDataDefinitions",
  "AdminGeneralApiDocsRetrieveAFile",
  "AdminGeneralApiDocsUploadFile",
  "AdminGeneralApiDocsMoveFile",
  "AdminGeneralApiDocsDeleteFile",
  "AdminGeneralApiDocsGetExternalfiles",
  "AdminGeneralApiDocsPostexternalfiles",
  "AdminGeneralApiDocsPutexteranlfiles",
  "AdminGeneralApiDocsReturnFolder",
  "AdminGeneralApiDocsDeleteFolder",
  "AdminGeneralApiDocsCategoriesAndPriorities",
  "AdminGeneralApiDocsGetHiringSources",
  "AdminGeneralApiDocsCreateHiringScource",
  "AdminGeneralApiDocsGetHoursOfOperation",
  "AdminGeneralApiDocsPostHoursOfOperation",
  "AdminGeneralApiDocsGetHoursOfOperationIdentities",
  "AdminGeneralApiDocsGetHoursOfOperationById",
  "AdminGeneralApiDocsUpdateHoursOfOperation",
  "AdminGeneralApiDocsDeleteHoursOfOperation",
  "AdminGeneralApiDocsUpdateHoursOfOperationSkills",
  "AdminGeneralApiDocsReturnsLocations",
  "AdminGeneralApiDocsGetMediaTypes",
  "AdminGeneralApiDocsGetMediaTypeById",
  "AdminGeneralApiDocsMessageTemplates",
  "AdminGeneralApiDocsCreatesMessageTemplate",
  "AdminGeneralApiDocsMessageTemplate",
  "AdminGeneralApiDocsUpdatesMessageTemplate",
  "AdminGeneralApiDocsGetPermissions",
  "AdminGeneralApiDocsAgentPermissionsList",
  "AdminGeneralApiDocsPhoneCodes",
  "AdminGeneralApiDocsGetPointsOfContact",
  "AdminGeneralApiDocsPostPointsOfContact",
  "AdminGeneralApiDocsGetPointOfContactById",
  "AdminGeneralApiDocsPutPointsOfContactId",
  "AdminGeneralApiDocsGetSecurityProfiles",
  "AdminGeneralApiDocsGetSecurityProfilesID",
  "AdminGeneralApiDocsGetScript",
  "AdminGeneralApiDocsCreateScript",
  "AdminGeneralApiDocsDeleteScript",
  "AdminGeneralApiDocsUpdateScript",
  "AdminGeneralApiDocsGetScriptsId",
  "AdminGeneralApiDocsGetSearchScript",
  "AdminGeneralApiDocsGetScriptsFiles",
  "AdminGeneralApiDocsPostScriptsFiles",
  "AdminGeneralApiDocsPutScriptsFiles",
  "AdminGeneralApiDocsDeleteScriptsFiles",
  "AdminGeneralApiDocsGetScriptsFilesSearch",
  "AdminGeneralApiDocsPostKickScript",
  "AdminGeneralApiDocsGetScriptHistory",
  "AdminGeneralApiDocsPostStartScript",
  "AdminGeneralApiDocsGetScriptsFolders",
  "AdminGeneralApiDocsGetServerTime",
  "AdminGeneralApiDocsReturnsTags",
  "AdminGeneralApiDocsCreatesTag",
  "AdminGeneralApiDocsGetTagDetailsById",
  "AdminGeneralApiDocsUpdatesTag",
  "AdminGeneralApiDocsGetSuppressedContact",
  "AdminGeneralApiDocsPostSuppressedContact",
  "AdminGeneralApiDocsTimezones",
  "AdminGeneralApiDocsGetBusinessUnitTimeZones",
  "AdminGeneralApiDocsPutBusinessUnitTimeZones",
  "AdminGeneralApiDocsGetUnavailableCodes",
  "AdminGeneralApiDocsPostUnavailableCodes",
  "AdminGeneralApiDocsGetPhoneNumbers",
  "AdminGeneralApiDocsGetSuppressedContactId",
  "AdminGeneralApiDocsPutSuppressedContactId",
  "AdminGeneralApiDocsDeleteSuppressedContactId"
] as const satisfies readonly (keyof NiceCxoneFullApiGeneralGeneratedClient)[];

export function createNiceCxoneFullApiGeneralGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiGeneralGeneratedClient {
  return {
    AdminGeneralApiDocsGetApiversion: (...args) => callOperation("admin-general-api-docs:get-apiversion:GET:/apiversion", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-apiversion:GET:/apiversion">)),
    AdminGeneralApiDocsGetApiversionreleaseinfo: (...args) => callOperation("admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-apiversionreleaseinfo:GET:/apiversionreleaseinfo">)),
    AdminGeneralApiDocsBrandingProfiles: (...args) => callOperation("admin-general-api-docs:BrandingProfiles:GET:/branding-profiles", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:BrandingProfiles:GET:/branding-profiles">)),
    AdminGeneralApiDocsBusinessUnitInfo: (...args) => callOperation("admin-general-api-docs:BusinessUnitInfo:GET:/business-unit", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:BusinessUnitInfo:GET:/business-unit">)),
    AdminGeneralApiDocsGetBusinessUnitOutboundRoutes: (...args) => callOperation("admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-business-unit-outbound-routes:GET:/business-unit/outbound-routes">)),
    AdminGeneralApiDocsGetAgentsIdAgentSettings: (...args) => callOperation("admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-agents-id-agent-settings:GET:/agents/{agentId}/agent-settings">)),
    AdminGeneralApiDocsGetCountries: (...args) => callOperation("admin-general-api-docs:GetCountries:GET:/countries", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetCountries:GET:/countries">)),
    AdminGeneralApiDocsGetsStatesProvinces: (...args) => callOperation("admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetsStatesProvinces:GET:/countries/{countryId}/states">)),
    AdminGeneralApiDocsDataDefinitions: (...args) => callOperation("admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:DataDefinitions:GET:/data-definitions/data-types">)),
    AdminGeneralApiDocsRetrieveAFile: (...args) => callOperation("admin-general-api-docs:RetrieveAFile:GET:/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:RetrieveAFile:GET:/files">)),
    AdminGeneralApiDocsUploadFile: (...args) => callOperation("admin-general-api-docs:UploadFile:POST:/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:UploadFile:POST:/files">)),
    AdminGeneralApiDocsMoveFile: (...args) => callOperation("admin-general-api-docs:MoveFile:PUT:/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:MoveFile:PUT:/files">)),
    AdminGeneralApiDocsDeleteFile: (...args) => callOperation("admin-general-api-docs:DeleteFile:DELETE:/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:DeleteFile:DELETE:/files">)),
    AdminGeneralApiDocsGetExternalfiles: (...args) => callOperation("admin-general-api-docs:GetExternalfiles:GET:/files/external", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetExternalfiles:GET:/files/external">)),
    AdminGeneralApiDocsPostexternalfiles: (...args) => callOperation("admin-general-api-docs:postexternalfiles:POST:/files/external", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:postexternalfiles:POST:/files/external">)),
    AdminGeneralApiDocsPutexteranlfiles: (...args) => callOperation("admin-general-api-docs:putexteranlfiles:PUT:/files/external", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:putexteranlfiles:PUT:/files/external">)),
    AdminGeneralApiDocsReturnFolder: (...args) => callOperation("admin-general-api-docs:ReturnFolder:GET:/folders", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:ReturnFolder:GET:/folders">)),
    AdminGeneralApiDocsDeleteFolder: (...args) => callOperation("admin-general-api-docs:DeleteFolder:DELETE:/folders", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:DeleteFolder:DELETE:/folders">)),
    AdminGeneralApiDocsCategoriesAndPriorities: (...args) => callOperation("admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CategoriesAndPriorities:GET:/feedback-categories-and-priorities">)),
    AdminGeneralApiDocsGetHiringSources: (...args) => callOperation("admin-general-api-docs:GetHiringSources:GET:/hiring-sources", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetHiringSources:GET:/hiring-sources">)),
    AdminGeneralApiDocsCreateHiringScource: (...args) => callOperation("admin-general-api-docs:CreateHiringScource:POST:/hiring-sources", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CreateHiringScource:POST:/hiring-sources">)),
    AdminGeneralApiDocsGetHoursOfOperation: (...args) => callOperation("admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-hours-of-operation:GET:/hours-of-operation">)),
    AdminGeneralApiDocsPostHoursOfOperation: (...args) => callOperation("admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-hours-of-operation:POST:/hours-of-operation">)),
    AdminGeneralApiDocsGetHoursOfOperationIdentities: (...args) => callOperation("admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-hours-of-operation-identities:GET:/hours-of-operation/identities">)),
    AdminGeneralApiDocsGetHoursOfOperationById: (...args) => callOperation("admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-hours-of-operation-by-id:GET:/hours-of-operation/{hoursOfOperationProfileId}">)),
    AdminGeneralApiDocsUpdateHoursOfOperation: (...args) => callOperation("admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:update-hours-of-operation:PUT:/hours-of-operation/{hoursOfOperationProfileId}">)),
    AdminGeneralApiDocsDeleteHoursOfOperation: (...args) => callOperation("admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete-hours-of-operation:DELETE:/hours-of-operation/{hoursOfOperationProfileId}">)),
    AdminGeneralApiDocsUpdateHoursOfOperationSkills: (...args) => callOperation("admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:update-hours-of-operation-skills:PUT:/hours-of-operation/{hoursOfOperationProfileId}/skills">)),
    AdminGeneralApiDocsReturnsLocations: (...args) => callOperation("admin-general-api-docs:ReturnsLocations:GET:/locations", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:ReturnsLocations:GET:/locations">)),
    AdminGeneralApiDocsGetMediaTypes: (...args) => callOperation("admin-general-api-docs:getMediaTypes:GET:/media-types", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getMediaTypes:GET:/media-types">)),
    AdminGeneralApiDocsGetMediaTypeById: (...args) => callOperation("admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getMediaTypeById:GET:/media-types/{mediaTypeId}">)),
    AdminGeneralApiDocsMessageTemplates: (...args) => callOperation("admin-general-api-docs:MessageTemplates:GET:/message-templates", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:MessageTemplates:GET:/message-templates">)),
    AdminGeneralApiDocsCreatesMessageTemplate: (...args) => callOperation("admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CreatesMessageTemplate:POST:/message-templates">)),
    AdminGeneralApiDocsMessageTemplate: (...args) => callOperation("admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:MessageTemplate:GET:/message-templates/{templateId}">)),
    AdminGeneralApiDocsUpdatesMessageTemplate: (...args) => callOperation("admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:UpdatesMessageTemplate:PUT:/message-templates/{templateId}">)),
    AdminGeneralApiDocsGetPermissions: (...args) => callOperation("admin-general-api-docs:getPermissions:GET:/permissions", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getPermissions:GET:/permissions">)),
    AdminGeneralApiDocsAgentPermissionsList: (...args) => callOperation("admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:AgentPermissionsList:GET:/permissions/{agentId}">)),
    AdminGeneralApiDocsPhoneCodes: (...args) => callOperation("admin-general-api-docs:PhoneCodes:GET:/phone-codes", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:PhoneCodes:GET:/phone-codes">)),
    AdminGeneralApiDocsGetPointsOfContact: (...args) => callOperation("admin-general-api-docs:getPointsOfContact:GET:/points-of-contact", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getPointsOfContact:GET:/points-of-contact">)),
    AdminGeneralApiDocsPostPointsOfContact: (...args) => callOperation("admin-general-api-docs:post-points-of-contact:POST:/points-of-contact", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-points-of-contact:POST:/points-of-contact">)),
    AdminGeneralApiDocsGetPointOfContactById: (...args) => callOperation("admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getPointOfContactById:GET:/points-of-contact/{pointOfContactId}">)),
    AdminGeneralApiDocsPutPointsOfContactId: (...args) => callOperation("admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put-points-of-contact-id:PUT:/points-of-contact/{pointOfContactId}">)),
    AdminGeneralApiDocsGetSecurityProfiles: (...args) => callOperation("admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetSecurityProfiles:GET:/security-profiles">)),
    AdminGeneralApiDocsGetSecurityProfilesID: (...args) => callOperation("admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetSecurityProfilesID:GET:/security-profiles/{profileId}">)),
    AdminGeneralApiDocsGetScript: (...args) => callOperation("admin-general-api-docs:get-script:GET:/scripts", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-script:GET:/scripts">)),
    AdminGeneralApiDocsCreateScript: (...args) => callOperation("admin-general-api-docs:create-script:POST:/scripts", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:create-script:POST:/scripts">)),
    AdminGeneralApiDocsDeleteScript: (...args) => callOperation("admin-general-api-docs:delete-script:DELETE:/scripts", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete-script:DELETE:/scripts">)),
    AdminGeneralApiDocsUpdateScript: (...args) => callOperation("admin-general-api-docs:update-script:PUT:/scripts", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:update-script:PUT:/scripts">)),
    AdminGeneralApiDocsGetScriptsId: (...args) => callOperation("admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-scripts-id:GET:/scripts/{scriptId}">)),
    AdminGeneralApiDocsGetSearchScript: (...args) => callOperation("admin-general-api-docs:get-search-script:GET:/scripts/search", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-search-script:GET:/scripts/search">)),
    AdminGeneralApiDocsGetScriptsFiles: (...args) => callOperation("admin-general-api-docs:get_/scripts/files:GET:/scripts/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get_/scripts/files:GET:/scripts/files">)),
    AdminGeneralApiDocsPostScriptsFiles: (...args) => callOperation("admin-general-api-docs:post_/scripts/files:POST:/scripts/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post_/scripts/files:POST:/scripts/files">)),
    AdminGeneralApiDocsPutScriptsFiles: (...args) => callOperation("admin-general-api-docs:put_/scripts/files:PUT:/scripts/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put_/scripts/files:PUT:/scripts/files">)),
    AdminGeneralApiDocsDeleteScriptsFiles: (...args) => callOperation("admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete_/scripts/files:DELETE:/scripts/files">)),
    AdminGeneralApiDocsGetScriptsFilesSearch: (...args) => callOperation("admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get_/scripts/files/search:GET:/scripts/files/search">)),
    AdminGeneralApiDocsPostKickScript: (...args) => callOperation("admin-general-api-docs:post-kick-script:POST:/scripts/kick", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-kick-script:POST:/scripts/kick">)),
    AdminGeneralApiDocsGetScriptHistory: (...args) => callOperation("admin-general-api-docs:get-script-history:GET:/scripts/historyByName", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-script-history:GET:/scripts/historyByName">)),
    AdminGeneralApiDocsPostStartScript: (...args) => callOperation("admin-general-api-docs:post-start-script:POST:/scripts/start", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-start-script:POST:/scripts/start">)),
    AdminGeneralApiDocsGetScriptsFolders: (...args) => callOperation("admin-general-api-docs:get-scripts-folders:GET:/script-folders", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-scripts-folders:GET:/script-folders">)),
    AdminGeneralApiDocsGetServerTime: (...args) => callOperation("admin-general-api-docs:getServerTime:GET:/server-time", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:getServerTime:GET:/server-time">)),
    AdminGeneralApiDocsReturnsTags: (...args) => callOperation("admin-general-api-docs:ReturnsTags:GET:/tags", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:ReturnsTags:GET:/tags">)),
    AdminGeneralApiDocsCreatesTag: (...args) => callOperation("admin-general-api-docs:CreatesTag:POST:/tags", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:CreatesTag:POST:/tags">)),
    AdminGeneralApiDocsGetTagDetailsById: (...args) => callOperation("admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:GetTagDetailsById:GET:/tags/{tagId}">)),
    AdminGeneralApiDocsUpdatesTag: (...args) => callOperation("admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:UpdatesTag:PUT:/tags/{tagId}">)),
    AdminGeneralApiDocsGetSuppressedContact: (...args) => callOperation("admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-suppressed-contact:GET:/suppressed-contact">)),
    AdminGeneralApiDocsPostSuppressedContact: (...args) => callOperation("admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-suppressed-contact:POST:/suppressed-contact">)),
    AdminGeneralApiDocsTimezones: (...args) => callOperation("admin-general-api-docs:Timezones:GET:/timezones", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:Timezones:GET:/timezones">)),
    AdminGeneralApiDocsGetBusinessUnitTimeZones: (...args) => callOperation("admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-business-unit-time-zones:GET:/business-unit/time-zones">)),
    AdminGeneralApiDocsPutBusinessUnitTimeZones: (...args) => callOperation("admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put-business-unit-time-zones:PUT:/business-unit/time-zones">)),
    AdminGeneralApiDocsGetUnavailableCodes: (...args) => callOperation("admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-unavailable-codes:GET:/unavailable-codes">)),
    AdminGeneralApiDocsPostUnavailableCodes: (...args) => callOperation("admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:post-unavailable-codes:POST:/unavailable-codes">)),
    AdminGeneralApiDocsGetPhoneNumbers: (...args) => callOperation("admin-general-api-docs:get-phone-numbers:GET:/phone-numbers", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-phone-numbers:GET:/phone-numbers">)),
    AdminGeneralApiDocsGetSuppressedContactId: (...args) => callOperation("admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:get-suppressed-contact-id:GET:/suppressed-contact/{suppressedContactId}">)),
    AdminGeneralApiDocsPutSuppressedContactId: (...args) => callOperation("admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:put-suppressed-contact-id:PUT:/suppressed-contact/{suppressedContactId}">)),
    AdminGeneralApiDocsDeleteSuppressedContactId: (...args) => callOperation("admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-general-api-docs:delete-suppressed-contact-id:DELETE:/suppressed-contact/{suppressedContactId}">)),
  };
}
