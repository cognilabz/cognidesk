// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiSearchOperationKeys = [
  "crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch",
  "crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search",
  "crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch",
  "crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch",
  "crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search",
  "crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch",
  "crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch",
  "crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search",
  "crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch",
  "crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search",
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch",
  "crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch",
  "crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch",
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search",
  "crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch",
  "crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch",
  "crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch",
  "crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch",
  "cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search",
  "crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search",
  "crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search",
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search",
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch",
  "crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search",
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch",
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch",
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch",
  "crm:users:2026-03:post-/crm/objects/2026-03/users/search",
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch",
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/search",
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search",
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search",
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/search",
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/search",
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch",
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/search",
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/search",
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch"
] as const;
export type HubSpotFullApiSearchOperationKey = typeof HubSpotFullApiSearchOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiSearchOperationPathParamMap {
  "crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch": {};
  "crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search": {};
  "crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch": {};
  "crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch": {};
  "crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search": {};
  "crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch": { "objectType": HubSpotFullApiPathParamValue };
  "crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch": {};
  "crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search": {};
  "crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch": {};
  "crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search": {};
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch": {};
  "crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch": {};
  "crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch": {};
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search": { "objectType": HubSpotFullApiPathParamValue };
  "crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch": {};
  "crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch": {};
  "crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch": {};
  "crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch": {};
  "cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search": {};
  "crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search": {};
  "crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search": { "objectType": HubSpotFullApiPathParamValue };
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search": {};
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch": {};
  "crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search": {};
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch": {};
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch": {};
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch": {};
  "crm:users:2026-03:post-/crm/objects/2026-03/users/search": {};
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch": {};
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/search": {};
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search": { "objectType": HubSpotFullApiPathParamValue };
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search": {};
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/search": {};
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/search": {};
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch": {};
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/search": {};
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/search": {};
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch": {};
}

export interface HubSpotFullApiSearchOperationRequestMap {
  "crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch": HubSpotFullApiOperationInput<"crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch">;
  "crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search": HubSpotFullApiOperationInput<"crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search">;
  "crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch": HubSpotFullApiOperationInput<"crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch">;
  "crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch": HubSpotFullApiOperationInput<"crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch">;
  "crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search": HubSpotFullApiOperationInput<"crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search">;
  "crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch": HubSpotFullApiOperationInput<"crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch">;
  "crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch": HubSpotFullApiOperationInput<"crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch">;
  "crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search": HubSpotFullApiOperationInput<"crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search">;
  "crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch": HubSpotFullApiOperationInput<"crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch">;
  "crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search": HubSpotFullApiOperationInput<"crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search">;
  "crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch": HubSpotFullApiOperationInput<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch">;
  "crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch": HubSpotFullApiOperationInput<"crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch">;
  "crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch": HubSpotFullApiOperationInput<"crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch">;
  "crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search": HubSpotFullApiOperationInput<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search">;
  "crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch": HubSpotFullApiOperationInput<"crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch">;
  "crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch": HubSpotFullApiOperationInput<"crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch">;
  "crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch": HubSpotFullApiOperationInput<"crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch">;
  "crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch": HubSpotFullApiOperationInput<"crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch">;
  "cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search": HubSpotFullApiOperationInput<"cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search">;
  "crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search": HubSpotFullApiOperationInput<"crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search">;
  "crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search": HubSpotFullApiOperationInput<"crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search">;
  "crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search": HubSpotFullApiOperationInput<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search">;
  "crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch": HubSpotFullApiOperationInput<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch">;
  "crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search": HubSpotFullApiOperationInput<"crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search">;
  "crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch": HubSpotFullApiOperationInput<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch">;
  "crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch": HubSpotFullApiOperationInput<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch">;
  "crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch": HubSpotFullApiOperationInput<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch">;
  "crm:users:2026-03:post-/crm/objects/2026-03/users/search": HubSpotFullApiOperationInput<"crm:users:2026-03:post-/crm/objects/2026-03/users/search">;
  "crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch": HubSpotFullApiOperationInput<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch">;
  "crm:carts:2026-03:post-/crm/objects/2026-03/carts/search": HubSpotFullApiOperationInput<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/search">;
  "crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search": HubSpotFullApiOperationInput<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search">;
  "crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search": HubSpotFullApiOperationInput<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search">;
  "crm:fees:2026-03:post-/crm/objects/2026-03/fees/search": HubSpotFullApiOperationInput<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/search">;
  "crm:services:2026-03:post-/crm/objects/2026-03/0-162/search": HubSpotFullApiOperationInput<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/search">;
  "crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch": HubSpotFullApiOperationInput<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch">;
  "crm:projects:2026-03:post-/crm/objects/2026-03/projects/search": HubSpotFullApiOperationInput<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/search">;
  "crm:orders:2026-03:post-/crm/objects/2026-03/orders/search": HubSpotFullApiOperationInput<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/search">;
  "crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch": HubSpotFullApiOperationInput<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch">;
}

export interface HubSpotFullApiSearchGeneratedClient {
  TicketsPostCrmObjects202603TicketsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch"]>;
  PartnerServicesPostCrmObjects202603PartnerServicesSearch(...args: HubSpotFullApiOperationArgs<"crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search">): Promise<HubSpotFullApiOperationResponseMap["crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search"]>;
  InvoicesPostCrmObjects202603InvoicesSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch"]>;
  FeedbackSubmissionsPostCrmObjects202603FeedbackSubmissionsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch"]>;
  PartnerClientsPostCrmObjects202603PartnerClientsSearch(...args: HubSpotFullApiOperationArgs<"crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search">): Promise<HubSpotFullApiOperationResponseMap["crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search"]>;
  CustomObjectsPostCrmObjects202603ObjectTypeSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch"]>;
  CompaniesPostCrmObjects202603CompaniesSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch"]>;
  CommercePaymentsPostCrmObjects202603CommercePaymentsSearch(...args: HubSpotFullApiOperationArgs<"crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search">): Promise<HubSpotFullApiOperationResponseMap["crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search"]>;
  ProductsPostCrmObjects202603ProductsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch"]>;
  CommerceSubscriptionsPostCrmV3ObjectsSubscriptionsSearch(...args: HubSpotFullApiOperationArgs<"crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search">): Promise<HubSpotFullApiOperationResponseMap["crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search"]>;
  ContactsPostCrmObjects202603ContactsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch"]>;
  LineItemsPostCrmObjects202603LineItemsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch"]>;
  PostalMailPostCrmObjects202603PostalMailSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch"]>;
  AppointmentsPostCrmObjects202603ObjectTypeSearchCrmObjectsV3ObjectTypeSearch(...args: HubSpotFullApiOperationArgs<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search">): Promise<HubSpotFullApiOperationResponseMap["crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search"]>;
  LeadsPostCrmObjects202603LeadsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch"]>;
  EmailsPostCrmObjects202603EmailsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch"]>;
  MeetingsPostCrmObjects202603MeetingsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch"]>;
  TaxesPostCrmObjects202603TaxesSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch"]>;
  SiteSearchGetCmsSiteSearch202603SearchCmsSiteSearch202603Search(...args: HubSpotFullApiOperationArgs<"cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search">): Promise<HubSpotFullApiOperationResponseMap["cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search"]>;
  ListingsPostCrmObjects2026030420Search(...args: HubSpotFullApiOperationArgs<"crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search">): Promise<HubSpotFullApiOperationResponseMap["crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search"]>;
  AssociationsPostCrmObjects202603ObjectTypeSearchCrmObjects202509ObjectTypeSearch(...args: HubSpotFullApiOperationArgs<"crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search">): Promise<HubSpotFullApiOperationResponseMap["crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search"]>;
  DiscountsPostCrmObjects202603DiscountsSearch(...args: HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search">): Promise<HubSpotFullApiOperationResponseMap["crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search"]>;
  DealsPostCrmObjects20260303SearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch"]>;
  ListsPostCrmLists202603SearchCrmListsV3Search(...args: HubSpotFullApiOperationArgs<"crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search">): Promise<HubSpotFullApiOperationResponseMap["crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search"]>;
  CommunicationsPostCrmObjects202603CommunicationsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch"]>;
  TasksPostCrmObjects202603TasksSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch"]>;
  NotesPostCrmObjects202603NotesSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch"]>;
  UsersPostCrmObjects202603UsersSearch(...args: HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/search">): Promise<HubSpotFullApiOperationResponseMap["crm:users:2026-03:post-/crm/objects/2026-03/users/search"]>;
  QuotesPostCrmObjects202603QuotesSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch"]>;
  CartsPostCrmObjects202603CartsSearch(...args: HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/search">): Promise<HubSpotFullApiOperationResponseMap["crm:carts:2026-03:post-/crm/objects/2026-03/carts/search"]>;
  ObjectsPostCrmObjects202603ObjectTypeSearchCrmObjects202509ObjectTypeSearch(...args: HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search">): Promise<HubSpotFullApiOperationResponseMap["crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search"]>;
  CoursesPostCrmObjects2026030410Search(...args: HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search">): Promise<HubSpotFullApiOperationResponseMap["crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search"]>;
  FeesPostCrmObjects202603FeesSearch(...args: HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/search">): Promise<HubSpotFullApiOperationResponseMap["crm:fees:2026-03:post-/crm/objects/2026-03/fees/search"]>;
  ServicesPostCrmObjects2026030162Search(...args: HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/search">): Promise<HubSpotFullApiOperationResponseMap["crm:services:2026-03:post-/crm/objects/2026-03/0-162/search"]>;
  GoalTargetsPostCrmObjects202603GoalTargetsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch"]>;
  ProjectsPostCrmObjects202603ProjectsSearch(...args: HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/search">): Promise<HubSpotFullApiOperationResponseMap["crm:projects:2026-03:post-/crm/objects/2026-03/projects/search"]>;
  OrdersPostCrmObjects202603OrdersSearch(...args: HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/search">): Promise<HubSpotFullApiOperationResponseMap["crm:orders:2026-03:post-/crm/objects/2026-03/orders/search"]>;
  CallsPostCrmObjects202603CallsSearchDoSearch(...args: HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch">): Promise<HubSpotFullApiOperationResponseMap["crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch"]>;
}

export const HubSpotFullApiSearchGeneratedFunctionNames = [
  "TicketsPostCrmObjects202603TicketsSearchDoSearch",
  "PartnerServicesPostCrmObjects202603PartnerServicesSearch",
  "InvoicesPostCrmObjects202603InvoicesSearchDoSearch",
  "FeedbackSubmissionsPostCrmObjects202603FeedbackSubmissionsSearchDoSearch",
  "PartnerClientsPostCrmObjects202603PartnerClientsSearch",
  "CustomObjectsPostCrmObjects202603ObjectTypeSearchDoSearch",
  "CompaniesPostCrmObjects202603CompaniesSearchDoSearch",
  "CommercePaymentsPostCrmObjects202603CommercePaymentsSearch",
  "ProductsPostCrmObjects202603ProductsSearchDoSearch",
  "CommerceSubscriptionsPostCrmV3ObjectsSubscriptionsSearch",
  "ContactsPostCrmObjects202603ContactsSearchDoSearch",
  "LineItemsPostCrmObjects202603LineItemsSearchDoSearch",
  "PostalMailPostCrmObjects202603PostalMailSearchDoSearch",
  "AppointmentsPostCrmObjects202603ObjectTypeSearchCrmObjectsV3ObjectTypeSearch",
  "LeadsPostCrmObjects202603LeadsSearchDoSearch",
  "EmailsPostCrmObjects202603EmailsSearchDoSearch",
  "MeetingsPostCrmObjects202603MeetingsSearchDoSearch",
  "TaxesPostCrmObjects202603TaxesSearchDoSearch",
  "SiteSearchGetCmsSiteSearch202603SearchCmsSiteSearch202603Search",
  "ListingsPostCrmObjects2026030420Search",
  "AssociationsPostCrmObjects202603ObjectTypeSearchCrmObjects202509ObjectTypeSearch",
  "DiscountsPostCrmObjects202603DiscountsSearch",
  "DealsPostCrmObjects20260303SearchDoSearch",
  "ListsPostCrmLists202603SearchCrmListsV3Search",
  "CommunicationsPostCrmObjects202603CommunicationsSearchDoSearch",
  "TasksPostCrmObjects202603TasksSearchDoSearch",
  "NotesPostCrmObjects202603NotesSearchDoSearch",
  "UsersPostCrmObjects202603UsersSearch",
  "QuotesPostCrmObjects202603QuotesSearchDoSearch",
  "CartsPostCrmObjects202603CartsSearch",
  "ObjectsPostCrmObjects202603ObjectTypeSearchCrmObjects202509ObjectTypeSearch",
  "CoursesPostCrmObjects2026030410Search",
  "FeesPostCrmObjects202603FeesSearch",
  "ServicesPostCrmObjects2026030162Search",
  "GoalTargetsPostCrmObjects202603GoalTargetsSearchDoSearch",
  "ProjectsPostCrmObjects202603ProjectsSearch",
  "OrdersPostCrmObjects202603OrdersSearch",
  "CallsPostCrmObjects202603CallsSearchDoSearch"
] as const satisfies readonly (keyof HubSpotFullApiSearchGeneratedClient)[];

export function createHubSpotFullApiSearchGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiSearchGeneratedClient {
  return {
    TicketsPostCrmObjects202603TicketsSearchDoSearch: (...args) => callOperation("crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:tickets:2026-03:post-/crm/objects/2026-03/tickets/search_doSearch">)),
    PartnerServicesPostCrmObjects202603PartnerServicesSearch: (...args) => callOperation("crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search", ...(args as HubSpotFullApiOperationArgs<"crm:partner-services:2026-03:post-/crm/objects/2026-03/partner_services/search">)),
    InvoicesPostCrmObjects202603InvoicesSearchDoSearch: (...args) => callOperation("crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:invoices:2026-03:post-/crm/objects/2026-03/invoices/search_doSearch">)),
    FeedbackSubmissionsPostCrmObjects202603FeedbackSubmissionsSearchDoSearch: (...args) => callOperation("crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:feedback-submissions:2026-03:post-/crm/objects/2026-03/feedback_submissions/search_doSearch">)),
    PartnerClientsPostCrmObjects202603PartnerClientsSearch: (...args) => callOperation("crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search", ...(args as HubSpotFullApiOperationArgs<"crm:partner-clients:2026-03:post-/crm/objects/2026-03/partner_clients/search">)),
    CustomObjectsPostCrmObjects202603ObjectTypeSearchDoSearch: (...args) => callOperation("crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:custom-objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_doSearch">)),
    CompaniesPostCrmObjects202603CompaniesSearchDoSearch: (...args) => callOperation("crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:companies:2026-03:post-/crm/objects/2026-03/companies/search_doSearch">)),
    CommercePaymentsPostCrmObjects202603CommercePaymentsSearch: (...args) => callOperation("crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search", ...(args as HubSpotFullApiOperationArgs<"crm:commerce-payments:2026-03:post-/crm/objects/2026-03/commerce_payments/search">)),
    ProductsPostCrmObjects202603ProductsSearchDoSearch: (...args) => callOperation("crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:products:2026-03:post-/crm/objects/2026-03/products/search_doSearch">)),
    CommerceSubscriptionsPostCrmV3ObjectsSubscriptionsSearch: (...args) => callOperation("crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search", ...(args as HubSpotFullApiOperationArgs<"crm:commerce-subscriptions:3:post-/crm/v3/objects/subscriptions/search">)),
    ContactsPostCrmObjects202603ContactsSearchDoSearch: (...args) => callOperation("crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:contacts:2026-03:post-/crm/objects/2026-03/contacts/search_doSearch">)),
    LineItemsPostCrmObjects202603LineItemsSearchDoSearch: (...args) => callOperation("crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:line-items:2026-03:post-/crm/objects/2026-03/line_items/search_doSearch">)),
    PostalMailPostCrmObjects202603PostalMailSearchDoSearch: (...args) => callOperation("crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:postal-mail:2026-03:post-/crm/objects/2026-03/postal_mail/search_doSearch">)),
    AppointmentsPostCrmObjects202603ObjectTypeSearchCrmObjectsV3ObjectTypeSearch: (...args) => callOperation("crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search", ...(args as HubSpotFullApiOperationArgs<"crm:appointments:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/v3/{objectType}/search">)),
    LeadsPostCrmObjects202603LeadsSearchDoSearch: (...args) => callOperation("crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:leads:2026-03:post-/crm/objects/2026-03/leads/search_doSearch">)),
    EmailsPostCrmObjects202603EmailsSearchDoSearch: (...args) => callOperation("crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:emails:2026-03:post-/crm/objects/2026-03/emails/search_doSearch">)),
    MeetingsPostCrmObjects202603MeetingsSearchDoSearch: (...args) => callOperation("crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:meetings:2026-03:post-/crm/objects/2026-03/meetings/search_doSearch">)),
    TaxesPostCrmObjects202603TaxesSearchDoSearch: (...args) => callOperation("crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:taxes:2026-03:post-/crm/objects/2026-03/taxes/search_doSearch">)),
    SiteSearchGetCmsSiteSearch202603SearchCmsSiteSearch202603Search: (...args) => callOperation("cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search", ...(args as HubSpotFullApiOperationArgs<"cms:site-search:2026-03:get-/cms/site-search/2026-03/search_/cms/site-search/2026-03/search">)),
    ListingsPostCrmObjects2026030420Search: (...args) => callOperation("crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search", ...(args as HubSpotFullApiOperationArgs<"crm:listings:2026-03:post-/crm/objects/2026-03/0-420/search">)),
    AssociationsPostCrmObjects202603ObjectTypeSearchCrmObjects202509ObjectTypeSearch: (...args) => callOperation("crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search", ...(args as HubSpotFullApiOperationArgs<"crm:associations:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search">)),
    DiscountsPostCrmObjects202603DiscountsSearch: (...args) => callOperation("crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search", ...(args as HubSpotFullApiOperationArgs<"crm:discounts:2026-03:post-/crm/objects/2026-03/discounts/search">)),
    DealsPostCrmObjects20260303SearchDoSearch: (...args) => callOperation("crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:deals:2026-03:post-/crm/objects/2026-03/0-3/search_doSearch">)),
    ListsPostCrmLists202603SearchCrmListsV3Search: (...args) => callOperation("crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search", ...(args as HubSpotFullApiOperationArgs<"crm:lists:2026-03:post-/crm/lists/2026-03/search_/crm/lists/v3/search">)),
    CommunicationsPostCrmObjects202603CommunicationsSearchDoSearch: (...args) => callOperation("crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:communications:2026-03:post-/crm/objects/2026-03/communications/search_doSearch">)),
    TasksPostCrmObjects202603TasksSearchDoSearch: (...args) => callOperation("crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:tasks:2026-03:post-/crm/objects/2026-03/tasks/search_doSearch">)),
    NotesPostCrmObjects202603NotesSearchDoSearch: (...args) => callOperation("crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:notes:2026-03:post-/crm/objects/2026-03/notes/search_doSearch">)),
    UsersPostCrmObjects202603UsersSearch: (...args) => callOperation("crm:users:2026-03:post-/crm/objects/2026-03/users/search", ...(args as HubSpotFullApiOperationArgs<"crm:users:2026-03:post-/crm/objects/2026-03/users/search">)),
    QuotesPostCrmObjects202603QuotesSearchDoSearch: (...args) => callOperation("crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:quotes:2026-03:post-/crm/objects/2026-03/quotes/search_doSearch">)),
    CartsPostCrmObjects202603CartsSearch: (...args) => callOperation("crm:carts:2026-03:post-/crm/objects/2026-03/carts/search", ...(args as HubSpotFullApiOperationArgs<"crm:carts:2026-03:post-/crm/objects/2026-03/carts/search">)),
    ObjectsPostCrmObjects202603ObjectTypeSearchCrmObjects202509ObjectTypeSearch: (...args) => callOperation("crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search", ...(args as HubSpotFullApiOperationArgs<"crm:objects:2026-03:post-/crm/objects/2026-03/{objectType}/search_/crm/objects/2025-09/{objectType}/search">)),
    CoursesPostCrmObjects2026030410Search: (...args) => callOperation("crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search", ...(args as HubSpotFullApiOperationArgs<"crm:courses:2026-03:post-/crm/objects/2026-03/0-410/search">)),
    FeesPostCrmObjects202603FeesSearch: (...args) => callOperation("crm:fees:2026-03:post-/crm/objects/2026-03/fees/search", ...(args as HubSpotFullApiOperationArgs<"crm:fees:2026-03:post-/crm/objects/2026-03/fees/search">)),
    ServicesPostCrmObjects2026030162Search: (...args) => callOperation("crm:services:2026-03:post-/crm/objects/2026-03/0-162/search", ...(args as HubSpotFullApiOperationArgs<"crm:services:2026-03:post-/crm/objects/2026-03/0-162/search">)),
    GoalTargetsPostCrmObjects202603GoalTargetsSearchDoSearch: (...args) => callOperation("crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:goal-targets:2026-03:post-/crm/objects/2026-03/goal_targets/search_doSearch">)),
    ProjectsPostCrmObjects202603ProjectsSearch: (...args) => callOperation("crm:projects:2026-03:post-/crm/objects/2026-03/projects/search", ...(args as HubSpotFullApiOperationArgs<"crm:projects:2026-03:post-/crm/objects/2026-03/projects/search">)),
    OrdersPostCrmObjects202603OrdersSearch: (...args) => callOperation("crm:orders:2026-03:post-/crm/objects/2026-03/orders/search", ...(args as HubSpotFullApiOperationArgs<"crm:orders:2026-03:post-/crm/objects/2026-03/orders/search">)),
    CallsPostCrmObjects202603CallsSearchDoSearch: (...args) => callOperation("crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch", ...(args as HubSpotFullApiOperationArgs<"crm:calls:2026-03:post-/crm/objects/2026-03/calls/search_doSearch">)),
  };
}
