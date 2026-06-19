// Generated endpoint chunk for TwilioSmsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioSmsGeneratedOperationCaller,
  TwilioSmsFullApiOperationArgs,
  TwilioSmsFullApiOperationInput,
  TwilioSmsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioSmsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioSmsFullApiMessagingV1OperationKeys = [
  "messaging_v1:CreateAlphaSender",
  "messaging_v1:CreateBrandRegistrationOtp",
  "messaging_v1:CreateBrandRegistrations",
  "messaging_v1:CreateBrandVetting",
  "messaging_v1:CreateChannelSender",
  "messaging_v1:CreateDestinationAlphaSender",
  "messaging_v1:CreateExternalCampaign",
  "messaging_v1:CreateLinkshorteningMessagingService",
  "messaging_v1:CreatePhoneNumber",
  "messaging_v1:CreateService",
  "messaging_v1:CreateShortCode",
  "messaging_v1:CreateTollfreeVerification",
  "messaging_v1:CreateUsAppToPerson",
  "messaging_v1:DeleteAlphaSender",
  "messaging_v1:DeleteChannelSender",
  "messaging_v1:DeleteDestinationAlphaSender",
  "messaging_v1:DeleteDomainCertV4",
  "messaging_v1:DeleteLinkshorteningMessagingService",
  "messaging_v1:DeletePhoneNumber",
  "messaging_v1:DeleteService",
  "messaging_v1:DeleteShortCode",
  "messaging_v1:DeleteTollfreeVerification",
  "messaging_v1:DeleteUsAppToPerson",
  "messaging_v1:FetchAlphaSender",
  "messaging_v1:FetchBrandRegistrations",
  "messaging_v1:FetchBrandVetting",
  "messaging_v1:FetchChannelSender",
  "messaging_v1:FetchDeactivation",
  "messaging_v1:FetchDestinationAlphaSender",
  "messaging_v1:FetchDomainCertV4",
  "messaging_v1:FetchDomainConfig",
  "messaging_v1:FetchDomainConfigMessagingService",
  "messaging_v1:FetchDomainDnsValidation",
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation",
  "messaging_v1:FetchPhoneNumber",
  "messaging_v1:FetchService",
  "messaging_v1:FetchShortCode",
  "messaging_v1:FetchTollfreeVerification",
  "messaging_v1:FetchUsAppToPerson",
  "messaging_v1:FetchUsAppToPersonUsecase",
  "messaging_v1:FetchUsecase",
  "messaging_v1:ListAlphaSender",
  "messaging_v1:ListBrandRegistrations",
  "messaging_v1:ListBrandVetting",
  "messaging_v1:ListChannelSender",
  "messaging_v1:ListDestinationAlphaSender",
  "messaging_v1:ListPhoneNumber",
  "messaging_v1:ListService",
  "messaging_v1:ListShortCode",
  "messaging_v1:ListTollfreeVerification",
  "messaging_v1:ListUsAppToPerson",
  "messaging_v1:UpdateBrandRegistrations",
  "messaging_v1:UpdateDomainCertV4",
  "messaging_v1:UpdateDomainConfig",
  "messaging_v1:UpdateRequestManagedCert",
  "messaging_v1:UpdateService",
  "messaging_v1:UpdateTollfreeVerification",
  "messaging_v1:UpdateUsAppToPerson"
] as const;
export type TwilioSmsFullApiMessagingV1OperationKey = typeof TwilioSmsFullApiMessagingV1OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiMessagingV1OperationPathParamMap {
  "messaging_v1:CreateAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreateBrandRegistrationOtp": { "BrandRegistrationSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreateBrandRegistrations": {};
  "messaging_v1:CreateBrandVetting": { "BrandSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreateChannelSender": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreateDestinationAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreateExternalCampaign": {};
  "messaging_v1:CreateLinkshorteningMessagingService": { "DomainSid": TwilioSmsFullApiPathParamValue; "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreatePhoneNumber": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreateService": {};
  "messaging_v1:CreateShortCode": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:CreateTollfreeVerification": {};
  "messaging_v1:CreateUsAppToPerson": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteChannelSender": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteDestinationAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteDomainCertV4": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteLinkshorteningMessagingService": { "DomainSid": TwilioSmsFullApiPathParamValue; "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeletePhoneNumber": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteService": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteShortCode": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteTollfreeVerification": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:DeleteUsAppToPerson": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchBrandRegistrations": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchBrandVetting": { "BrandSid": TwilioSmsFullApiPathParamValue; "BrandVettingSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchChannelSender": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchDeactivation": {};
  "messaging_v1:FetchDestinationAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchDomainCertV4": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchDomainConfig": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchDomainConfigMessagingService": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchDomainDnsValidation": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchPhoneNumber": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchService": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchShortCode": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchTollfreeVerification": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchUsAppToPerson": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchUsAppToPersonUsecase": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:FetchUsecase": {};
  "messaging_v1:ListAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:ListBrandRegistrations": {};
  "messaging_v1:ListBrandVetting": { "BrandSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:ListChannelSender": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:ListDestinationAlphaSender": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:ListPhoneNumber": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:ListService": {};
  "messaging_v1:ListShortCode": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:ListTollfreeVerification": {};
  "messaging_v1:ListUsAppToPerson": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:UpdateBrandRegistrations": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:UpdateDomainCertV4": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:UpdateDomainConfig": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:UpdateRequestManagedCert": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:UpdateService": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:UpdateTollfreeVerification": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v1:UpdateUsAppToPerson": { "MessagingServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiMessagingV1OperationRequestMap {
  "messaging_v1:CreateAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:CreateAlphaSender">;
  "messaging_v1:CreateBrandRegistrationOtp": TwilioSmsFullApiOperationInput<"messaging_v1:CreateBrandRegistrationOtp">;
  "messaging_v1:CreateBrandRegistrations": TwilioSmsFullApiOperationInput<"messaging_v1:CreateBrandRegistrations">;
  "messaging_v1:CreateBrandVetting": TwilioSmsFullApiOperationInput<"messaging_v1:CreateBrandVetting">;
  "messaging_v1:CreateChannelSender": TwilioSmsFullApiOperationInput<"messaging_v1:CreateChannelSender">;
  "messaging_v1:CreateDestinationAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:CreateDestinationAlphaSender">;
  "messaging_v1:CreateExternalCampaign": TwilioSmsFullApiOperationInput<"messaging_v1:CreateExternalCampaign">;
  "messaging_v1:CreateLinkshorteningMessagingService": TwilioSmsFullApiOperationInput<"messaging_v1:CreateLinkshorteningMessagingService">;
  "messaging_v1:CreatePhoneNumber": TwilioSmsFullApiOperationInput<"messaging_v1:CreatePhoneNumber">;
  "messaging_v1:CreateService": TwilioSmsFullApiOperationInput<"messaging_v1:CreateService">;
  "messaging_v1:CreateShortCode": TwilioSmsFullApiOperationInput<"messaging_v1:CreateShortCode">;
  "messaging_v1:CreateTollfreeVerification": TwilioSmsFullApiOperationInput<"messaging_v1:CreateTollfreeVerification">;
  "messaging_v1:CreateUsAppToPerson": TwilioSmsFullApiOperationInput<"messaging_v1:CreateUsAppToPerson">;
  "messaging_v1:DeleteAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteAlphaSender">;
  "messaging_v1:DeleteChannelSender": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteChannelSender">;
  "messaging_v1:DeleteDestinationAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteDestinationAlphaSender">;
  "messaging_v1:DeleteDomainCertV4": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteDomainCertV4">;
  "messaging_v1:DeleteLinkshorteningMessagingService": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteLinkshorteningMessagingService">;
  "messaging_v1:DeletePhoneNumber": TwilioSmsFullApiOperationInput<"messaging_v1:DeletePhoneNumber">;
  "messaging_v1:DeleteService": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteService">;
  "messaging_v1:DeleteShortCode": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteShortCode">;
  "messaging_v1:DeleteTollfreeVerification": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteTollfreeVerification">;
  "messaging_v1:DeleteUsAppToPerson": TwilioSmsFullApiOperationInput<"messaging_v1:DeleteUsAppToPerson">;
  "messaging_v1:FetchAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:FetchAlphaSender">;
  "messaging_v1:FetchBrandRegistrations": TwilioSmsFullApiOperationInput<"messaging_v1:FetchBrandRegistrations">;
  "messaging_v1:FetchBrandVetting": TwilioSmsFullApiOperationInput<"messaging_v1:FetchBrandVetting">;
  "messaging_v1:FetchChannelSender": TwilioSmsFullApiOperationInput<"messaging_v1:FetchChannelSender">;
  "messaging_v1:FetchDeactivation": TwilioSmsFullApiOperationInput<"messaging_v1:FetchDeactivation">;
  "messaging_v1:FetchDestinationAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:FetchDestinationAlphaSender">;
  "messaging_v1:FetchDomainCertV4": TwilioSmsFullApiOperationInput<"messaging_v1:FetchDomainCertV4">;
  "messaging_v1:FetchDomainConfig": TwilioSmsFullApiOperationInput<"messaging_v1:FetchDomainConfig">;
  "messaging_v1:FetchDomainConfigMessagingService": TwilioSmsFullApiOperationInput<"messaging_v1:FetchDomainConfigMessagingService">;
  "messaging_v1:FetchDomainDnsValidation": TwilioSmsFullApiOperationInput<"messaging_v1:FetchDomainDnsValidation">;
  "messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation": TwilioSmsFullApiOperationInput<"messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation">;
  "messaging_v1:FetchPhoneNumber": TwilioSmsFullApiOperationInput<"messaging_v1:FetchPhoneNumber">;
  "messaging_v1:FetchService": TwilioSmsFullApiOperationInput<"messaging_v1:FetchService">;
  "messaging_v1:FetchShortCode": TwilioSmsFullApiOperationInput<"messaging_v1:FetchShortCode">;
  "messaging_v1:FetchTollfreeVerification": TwilioSmsFullApiOperationInput<"messaging_v1:FetchTollfreeVerification">;
  "messaging_v1:FetchUsAppToPerson": TwilioSmsFullApiOperationInput<"messaging_v1:FetchUsAppToPerson">;
  "messaging_v1:FetchUsAppToPersonUsecase": TwilioSmsFullApiOperationInput<"messaging_v1:FetchUsAppToPersonUsecase">;
  "messaging_v1:FetchUsecase": TwilioSmsFullApiOperationInput<"messaging_v1:FetchUsecase">;
  "messaging_v1:ListAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:ListAlphaSender">;
  "messaging_v1:ListBrandRegistrations": TwilioSmsFullApiOperationInput<"messaging_v1:ListBrandRegistrations">;
  "messaging_v1:ListBrandVetting": TwilioSmsFullApiOperationInput<"messaging_v1:ListBrandVetting">;
  "messaging_v1:ListChannelSender": TwilioSmsFullApiOperationInput<"messaging_v1:ListChannelSender">;
  "messaging_v1:ListDestinationAlphaSender": TwilioSmsFullApiOperationInput<"messaging_v1:ListDestinationAlphaSender">;
  "messaging_v1:ListPhoneNumber": TwilioSmsFullApiOperationInput<"messaging_v1:ListPhoneNumber">;
  "messaging_v1:ListService": TwilioSmsFullApiOperationInput<"messaging_v1:ListService">;
  "messaging_v1:ListShortCode": TwilioSmsFullApiOperationInput<"messaging_v1:ListShortCode">;
  "messaging_v1:ListTollfreeVerification": TwilioSmsFullApiOperationInput<"messaging_v1:ListTollfreeVerification">;
  "messaging_v1:ListUsAppToPerson": TwilioSmsFullApiOperationInput<"messaging_v1:ListUsAppToPerson">;
  "messaging_v1:UpdateBrandRegistrations": TwilioSmsFullApiOperationInput<"messaging_v1:UpdateBrandRegistrations">;
  "messaging_v1:UpdateDomainCertV4": TwilioSmsFullApiOperationInput<"messaging_v1:UpdateDomainCertV4">;
  "messaging_v1:UpdateDomainConfig": TwilioSmsFullApiOperationInput<"messaging_v1:UpdateDomainConfig">;
  "messaging_v1:UpdateRequestManagedCert": TwilioSmsFullApiOperationInput<"messaging_v1:UpdateRequestManagedCert">;
  "messaging_v1:UpdateService": TwilioSmsFullApiOperationInput<"messaging_v1:UpdateService">;
  "messaging_v1:UpdateTollfreeVerification": TwilioSmsFullApiOperationInput<"messaging_v1:UpdateTollfreeVerification">;
  "messaging_v1:UpdateUsAppToPerson": TwilioSmsFullApiOperationInput<"messaging_v1:UpdateUsAppToPerson">;
}

export interface TwilioSmsFullApiMessagingV1GeneratedClient {
  MessagingV1CreateAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateAlphaSender"]>;
  MessagingV1CreateBrandRegistrationOtp(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateBrandRegistrationOtp">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateBrandRegistrationOtp"]>;
  MessagingV1CreateBrandRegistrations(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateBrandRegistrations">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateBrandRegistrations"]>;
  MessagingV1CreateBrandVetting(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateBrandVetting">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateBrandVetting"]>;
  MessagingV1CreateChannelSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateChannelSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateChannelSender"]>;
  MessagingV1CreateDestinationAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateDestinationAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateDestinationAlphaSender"]>;
  MessagingV1CreateExternalCampaign(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateExternalCampaign">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateExternalCampaign"]>;
  MessagingV1CreateLinkshorteningMessagingService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateLinkshorteningMessagingService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateLinkshorteningMessagingService"]>;
  MessagingV1CreatePhoneNumber(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreatePhoneNumber">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreatePhoneNumber"]>;
  MessagingV1CreateService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateService"]>;
  MessagingV1CreateShortCode(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateShortCode">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateShortCode"]>;
  MessagingV1CreateTollfreeVerification(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateTollfreeVerification">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateTollfreeVerification"]>;
  MessagingV1CreateUsAppToPerson(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:CreateUsAppToPerson">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:CreateUsAppToPerson"]>;
  MessagingV1DeleteAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteAlphaSender"]>;
  MessagingV1DeleteChannelSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteChannelSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteChannelSender"]>;
  MessagingV1DeleteDestinationAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteDestinationAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteDestinationAlphaSender"]>;
  MessagingV1DeleteDomainCertV4(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteDomainCertV4">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteDomainCertV4"]>;
  MessagingV1DeleteLinkshorteningMessagingService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteLinkshorteningMessagingService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteLinkshorteningMessagingService"]>;
  MessagingV1DeletePhoneNumber(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeletePhoneNumber">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeletePhoneNumber"]>;
  MessagingV1DeleteService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteService"]>;
  MessagingV1DeleteShortCode(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteShortCode">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteShortCode"]>;
  MessagingV1DeleteTollfreeVerification(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteTollfreeVerification">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteTollfreeVerification"]>;
  MessagingV1DeleteUsAppToPerson(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteUsAppToPerson">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:DeleteUsAppToPerson"]>;
  MessagingV1FetchAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchAlphaSender"]>;
  MessagingV1FetchBrandRegistrations(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchBrandRegistrations">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchBrandRegistrations"]>;
  MessagingV1FetchBrandVetting(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchBrandVetting">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchBrandVetting"]>;
  MessagingV1FetchChannelSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchChannelSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchChannelSender"]>;
  MessagingV1FetchDeactivation(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDeactivation">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchDeactivation"]>;
  MessagingV1FetchDestinationAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDestinationAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchDestinationAlphaSender"]>;
  MessagingV1FetchDomainCertV4(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainCertV4">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchDomainCertV4"]>;
  MessagingV1FetchDomainConfig(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainConfig">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchDomainConfig"]>;
  MessagingV1FetchDomainConfigMessagingService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainConfigMessagingService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchDomainConfigMessagingService"]>;
  MessagingV1FetchDomainDnsValidation(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainDnsValidation">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchDomainDnsValidation"]>;
  MessagingV1FetchLinkshorteningMessagingServiceDomainAssociation(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation"]>;
  MessagingV1FetchPhoneNumber(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchPhoneNumber">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchPhoneNumber"]>;
  MessagingV1FetchService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchService"]>;
  MessagingV1FetchShortCode(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchShortCode">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchShortCode"]>;
  MessagingV1FetchTollfreeVerification(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchTollfreeVerification">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchTollfreeVerification"]>;
  MessagingV1FetchUsAppToPerson(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchUsAppToPerson">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchUsAppToPerson"]>;
  MessagingV1FetchUsAppToPersonUsecase(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchUsAppToPersonUsecase">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchUsAppToPersonUsecase"]>;
  MessagingV1FetchUsecase(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:FetchUsecase">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:FetchUsecase"]>;
  MessagingV1ListAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListAlphaSender"]>;
  MessagingV1ListBrandRegistrations(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListBrandRegistrations">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListBrandRegistrations"]>;
  MessagingV1ListBrandVetting(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListBrandVetting">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListBrandVetting"]>;
  MessagingV1ListChannelSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListChannelSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListChannelSender"]>;
  MessagingV1ListDestinationAlphaSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListDestinationAlphaSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListDestinationAlphaSender"]>;
  MessagingV1ListPhoneNumber(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListPhoneNumber">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListPhoneNumber"]>;
  MessagingV1ListService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListService"]>;
  MessagingV1ListShortCode(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListShortCode">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListShortCode"]>;
  MessagingV1ListTollfreeVerification(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListTollfreeVerification">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListTollfreeVerification"]>;
  MessagingV1ListUsAppToPerson(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:ListUsAppToPerson">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:ListUsAppToPerson"]>;
  MessagingV1UpdateBrandRegistrations(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateBrandRegistrations">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:UpdateBrandRegistrations"]>;
  MessagingV1UpdateDomainCertV4(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateDomainCertV4">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:UpdateDomainCertV4"]>;
  MessagingV1UpdateDomainConfig(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateDomainConfig">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:UpdateDomainConfig"]>;
  MessagingV1UpdateRequestManagedCert(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateRequestManagedCert">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:UpdateRequestManagedCert"]>;
  MessagingV1UpdateService(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateService">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:UpdateService"]>;
  MessagingV1UpdateTollfreeVerification(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateTollfreeVerification">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:UpdateTollfreeVerification"]>;
  MessagingV1UpdateUsAppToPerson(...args: TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateUsAppToPerson">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v1:UpdateUsAppToPerson"]>;
}

export const TwilioSmsFullApiMessagingV1GeneratedFunctionNames = [
  "MessagingV1CreateAlphaSender",
  "MessagingV1CreateBrandRegistrationOtp",
  "MessagingV1CreateBrandRegistrations",
  "MessagingV1CreateBrandVetting",
  "MessagingV1CreateChannelSender",
  "MessagingV1CreateDestinationAlphaSender",
  "MessagingV1CreateExternalCampaign",
  "MessagingV1CreateLinkshorteningMessagingService",
  "MessagingV1CreatePhoneNumber",
  "MessagingV1CreateService",
  "MessagingV1CreateShortCode",
  "MessagingV1CreateTollfreeVerification",
  "MessagingV1CreateUsAppToPerson",
  "MessagingV1DeleteAlphaSender",
  "MessagingV1DeleteChannelSender",
  "MessagingV1DeleteDestinationAlphaSender",
  "MessagingV1DeleteDomainCertV4",
  "MessagingV1DeleteLinkshorteningMessagingService",
  "MessagingV1DeletePhoneNumber",
  "MessagingV1DeleteService",
  "MessagingV1DeleteShortCode",
  "MessagingV1DeleteTollfreeVerification",
  "MessagingV1DeleteUsAppToPerson",
  "MessagingV1FetchAlphaSender",
  "MessagingV1FetchBrandRegistrations",
  "MessagingV1FetchBrandVetting",
  "MessagingV1FetchChannelSender",
  "MessagingV1FetchDeactivation",
  "MessagingV1FetchDestinationAlphaSender",
  "MessagingV1FetchDomainCertV4",
  "MessagingV1FetchDomainConfig",
  "MessagingV1FetchDomainConfigMessagingService",
  "MessagingV1FetchDomainDnsValidation",
  "MessagingV1FetchLinkshorteningMessagingServiceDomainAssociation",
  "MessagingV1FetchPhoneNumber",
  "MessagingV1FetchService",
  "MessagingV1FetchShortCode",
  "MessagingV1FetchTollfreeVerification",
  "MessagingV1FetchUsAppToPerson",
  "MessagingV1FetchUsAppToPersonUsecase",
  "MessagingV1FetchUsecase",
  "MessagingV1ListAlphaSender",
  "MessagingV1ListBrandRegistrations",
  "MessagingV1ListBrandVetting",
  "MessagingV1ListChannelSender",
  "MessagingV1ListDestinationAlphaSender",
  "MessagingV1ListPhoneNumber",
  "MessagingV1ListService",
  "MessagingV1ListShortCode",
  "MessagingV1ListTollfreeVerification",
  "MessagingV1ListUsAppToPerson",
  "MessagingV1UpdateBrandRegistrations",
  "MessagingV1UpdateDomainCertV4",
  "MessagingV1UpdateDomainConfig",
  "MessagingV1UpdateRequestManagedCert",
  "MessagingV1UpdateService",
  "MessagingV1UpdateTollfreeVerification",
  "MessagingV1UpdateUsAppToPerson"
] as const satisfies readonly (keyof TwilioSmsFullApiMessagingV1GeneratedClient)[];

export function createTwilioSmsFullApiMessagingV1GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiMessagingV1GeneratedClient {
  return {
    MessagingV1CreateAlphaSender: (...args) => callOperation("messaging_v1:CreateAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateAlphaSender">)),
    MessagingV1CreateBrandRegistrationOtp: (...args) => callOperation("messaging_v1:CreateBrandRegistrationOtp", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateBrandRegistrationOtp">)),
    MessagingV1CreateBrandRegistrations: (...args) => callOperation("messaging_v1:CreateBrandRegistrations", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateBrandRegistrations">)),
    MessagingV1CreateBrandVetting: (...args) => callOperation("messaging_v1:CreateBrandVetting", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateBrandVetting">)),
    MessagingV1CreateChannelSender: (...args) => callOperation("messaging_v1:CreateChannelSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateChannelSender">)),
    MessagingV1CreateDestinationAlphaSender: (...args) => callOperation("messaging_v1:CreateDestinationAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateDestinationAlphaSender">)),
    MessagingV1CreateExternalCampaign: (...args) => callOperation("messaging_v1:CreateExternalCampaign", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateExternalCampaign">)),
    MessagingV1CreateLinkshorteningMessagingService: (...args) => callOperation("messaging_v1:CreateLinkshorteningMessagingService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateLinkshorteningMessagingService">)),
    MessagingV1CreatePhoneNumber: (...args) => callOperation("messaging_v1:CreatePhoneNumber", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreatePhoneNumber">)),
    MessagingV1CreateService: (...args) => callOperation("messaging_v1:CreateService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateService">)),
    MessagingV1CreateShortCode: (...args) => callOperation("messaging_v1:CreateShortCode", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateShortCode">)),
    MessagingV1CreateTollfreeVerification: (...args) => callOperation("messaging_v1:CreateTollfreeVerification", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateTollfreeVerification">)),
    MessagingV1CreateUsAppToPerson: (...args) => callOperation("messaging_v1:CreateUsAppToPerson", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:CreateUsAppToPerson">)),
    MessagingV1DeleteAlphaSender: (...args) => callOperation("messaging_v1:DeleteAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteAlphaSender">)),
    MessagingV1DeleteChannelSender: (...args) => callOperation("messaging_v1:DeleteChannelSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteChannelSender">)),
    MessagingV1DeleteDestinationAlphaSender: (...args) => callOperation("messaging_v1:DeleteDestinationAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteDestinationAlphaSender">)),
    MessagingV1DeleteDomainCertV4: (...args) => callOperation("messaging_v1:DeleteDomainCertV4", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteDomainCertV4">)),
    MessagingV1DeleteLinkshorteningMessagingService: (...args) => callOperation("messaging_v1:DeleteLinkshorteningMessagingService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteLinkshorteningMessagingService">)),
    MessagingV1DeletePhoneNumber: (...args) => callOperation("messaging_v1:DeletePhoneNumber", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeletePhoneNumber">)),
    MessagingV1DeleteService: (...args) => callOperation("messaging_v1:DeleteService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteService">)),
    MessagingV1DeleteShortCode: (...args) => callOperation("messaging_v1:DeleteShortCode", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteShortCode">)),
    MessagingV1DeleteTollfreeVerification: (...args) => callOperation("messaging_v1:DeleteTollfreeVerification", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteTollfreeVerification">)),
    MessagingV1DeleteUsAppToPerson: (...args) => callOperation("messaging_v1:DeleteUsAppToPerson", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:DeleteUsAppToPerson">)),
    MessagingV1FetchAlphaSender: (...args) => callOperation("messaging_v1:FetchAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchAlphaSender">)),
    MessagingV1FetchBrandRegistrations: (...args) => callOperation("messaging_v1:FetchBrandRegistrations", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchBrandRegistrations">)),
    MessagingV1FetchBrandVetting: (...args) => callOperation("messaging_v1:FetchBrandVetting", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchBrandVetting">)),
    MessagingV1FetchChannelSender: (...args) => callOperation("messaging_v1:FetchChannelSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchChannelSender">)),
    MessagingV1FetchDeactivation: (...args) => callOperation("messaging_v1:FetchDeactivation", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDeactivation">)),
    MessagingV1FetchDestinationAlphaSender: (...args) => callOperation("messaging_v1:FetchDestinationAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDestinationAlphaSender">)),
    MessagingV1FetchDomainCertV4: (...args) => callOperation("messaging_v1:FetchDomainCertV4", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainCertV4">)),
    MessagingV1FetchDomainConfig: (...args) => callOperation("messaging_v1:FetchDomainConfig", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainConfig">)),
    MessagingV1FetchDomainConfigMessagingService: (...args) => callOperation("messaging_v1:FetchDomainConfigMessagingService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainConfigMessagingService">)),
    MessagingV1FetchDomainDnsValidation: (...args) => callOperation("messaging_v1:FetchDomainDnsValidation", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchDomainDnsValidation">)),
    MessagingV1FetchLinkshorteningMessagingServiceDomainAssociation: (...args) => callOperation("messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchLinkshorteningMessagingServiceDomainAssociation">)),
    MessagingV1FetchPhoneNumber: (...args) => callOperation("messaging_v1:FetchPhoneNumber", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchPhoneNumber">)),
    MessagingV1FetchService: (...args) => callOperation("messaging_v1:FetchService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchService">)),
    MessagingV1FetchShortCode: (...args) => callOperation("messaging_v1:FetchShortCode", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchShortCode">)),
    MessagingV1FetchTollfreeVerification: (...args) => callOperation("messaging_v1:FetchTollfreeVerification", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchTollfreeVerification">)),
    MessagingV1FetchUsAppToPerson: (...args) => callOperation("messaging_v1:FetchUsAppToPerson", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchUsAppToPerson">)),
    MessagingV1FetchUsAppToPersonUsecase: (...args) => callOperation("messaging_v1:FetchUsAppToPersonUsecase", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchUsAppToPersonUsecase">)),
    MessagingV1FetchUsecase: (...args) => callOperation("messaging_v1:FetchUsecase", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:FetchUsecase">)),
    MessagingV1ListAlphaSender: (...args) => callOperation("messaging_v1:ListAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListAlphaSender">)),
    MessagingV1ListBrandRegistrations: (...args) => callOperation("messaging_v1:ListBrandRegistrations", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListBrandRegistrations">)),
    MessagingV1ListBrandVetting: (...args) => callOperation("messaging_v1:ListBrandVetting", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListBrandVetting">)),
    MessagingV1ListChannelSender: (...args) => callOperation("messaging_v1:ListChannelSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListChannelSender">)),
    MessagingV1ListDestinationAlphaSender: (...args) => callOperation("messaging_v1:ListDestinationAlphaSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListDestinationAlphaSender">)),
    MessagingV1ListPhoneNumber: (...args) => callOperation("messaging_v1:ListPhoneNumber", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListPhoneNumber">)),
    MessagingV1ListService: (...args) => callOperation("messaging_v1:ListService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListService">)),
    MessagingV1ListShortCode: (...args) => callOperation("messaging_v1:ListShortCode", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListShortCode">)),
    MessagingV1ListTollfreeVerification: (...args) => callOperation("messaging_v1:ListTollfreeVerification", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListTollfreeVerification">)),
    MessagingV1ListUsAppToPerson: (...args) => callOperation("messaging_v1:ListUsAppToPerson", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:ListUsAppToPerson">)),
    MessagingV1UpdateBrandRegistrations: (...args) => callOperation("messaging_v1:UpdateBrandRegistrations", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateBrandRegistrations">)),
    MessagingV1UpdateDomainCertV4: (...args) => callOperation("messaging_v1:UpdateDomainCertV4", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateDomainCertV4">)),
    MessagingV1UpdateDomainConfig: (...args) => callOperation("messaging_v1:UpdateDomainConfig", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateDomainConfig">)),
    MessagingV1UpdateRequestManagedCert: (...args) => callOperation("messaging_v1:UpdateRequestManagedCert", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateRequestManagedCert">)),
    MessagingV1UpdateService: (...args) => callOperation("messaging_v1:UpdateService", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateService">)),
    MessagingV1UpdateTollfreeVerification: (...args) => callOperation("messaging_v1:UpdateTollfreeVerification", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateTollfreeVerification">)),
    MessagingV1UpdateUsAppToPerson: (...args) => callOperation("messaging_v1:UpdateUsAppToPerson", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v1:UpdateUsAppToPerson">)),
  };
}
